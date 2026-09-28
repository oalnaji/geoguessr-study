import { geoEqualEarth, geoPath, type GeoProjection } from 'd3-geo'
import type { FeatureCollection, Geometry } from 'geojson'
import { useEffect, useState } from 'react'
import { feature } from 'topojson-client'
import type { Topology } from 'topojson-specification'
import { countries } from '../content/countries'

export interface MapFeature {
  id: string
  name: string
  country: string
  /** "Catalonia, Spain" for regions, the country name for whole countries */
  label: string
  d: string
  bounds: MapBounds
}

/** [[left, top], [right, bottom]] in map coordinates */
export type MapBounds = [[number, number], [number, number]]

export const MAP_WIDTH = 960
export const MAP_HEIGHT = 500

/**
 * Two maps with different country splits: `languages` splits countries with several official
 * languages on signs; `vegetation` splits large countries into states and provinces.
 */
export type MapVariant = 'languages' | 'vegetation'

const files: Record<MapVariant, () => Promise<{ default: unknown }>> = {
  languages: () => import('../content/generated/map.topo.json'),
  vegetation: () => import('../content/generated/map-veg.topo.json'),
}

const cache = new Map<MapVariant, Promise<MapFeature[]>>()
const projections = new Map<MapVariant, GeoProjection>()

/** Loads and projects a world map once (the data is a separate download). */
function loadMap(variant: MapVariant): Promise<MapFeature[]> {
  if (!cache.has(variant)) cache.set(variant, files[variant]().then((m) => {
    const topo = m.default as unknown as Topology
    const fc = feature(topo, Object.values(topo.objects)[0]) as FeatureCollection<Geometry, { id: string; name: string; country: string }>
    const projection = geoEqualEarth().fitExtent([[4, 4], [MAP_WIDTH - 4, MAP_HEIGHT - 4]], fc)
    projections.set(variant, projection)
    const path = geoPath(projection)
    return fc.features.map((f) => {
      const { id, name, country } = f.properties
      const countryLabel = countries[country]?.name ?? name
      return {
        id, name, country,
        label: id === country ? countryLabel : `${name}, ${countryLabel}`,
        d: path(f) ?? '',
        bounds: path.bounds(f) as MapFeature['bounds'],
      }
    })
  }))
  return cache.get(variant)!
}

/** The box around several features. */
export function boundsOf(features: { bounds: MapBounds }[]): MapBounds {
  return [
    [Math.min(...features.map((f) => f.bounds[0][0])), Math.min(...features.map((f) => f.bounds[0][1]))],
    [Math.max(...features.map((f) => f.bounds[1][0])), Math.max(...features.map((f) => f.bounds[1][1]))],
  ]
}

/** A longitude/latitude box on a loaded map, in map coordinates (sampled, since the projection curves). */
export function projectBox(variant: MapVariant, lon: [number, number], lat: [number, number]): MapBounds | null {
  const projection = projections.get(variant)
  if (!projection) return null
  const points = Array.from({ length: 9 }, (_, i) => Array.from({ length: 9 }, (_, j) =>
    projection([lon[0] + ((lon[1] - lon[0]) * i) / 8, lat[0] + ((lat[1] - lat[0]) * j) / 8]))).flat()
    .filter((p): p is [number, number] => p !== null)
  return boundsOf(points.map((p) => ({ bounds: [p, p] })))
}

export interface MapLine {
  d: string
  label: string
  x: number
  y: number
}

/** A dashed parallel of latitude on a loaded map, with its label position at the left edge. */
export function latitudeLine(variant: MapVariant, lat: number): MapLine | null {
  const projection = projections.get(variant)
  if (!projection) return null
  const coords = Array.from({ length: 37 }, (_, i) => [-180 + i * 10, lat] as [number, number])
  const d = geoPath(projection)({ type: 'LineString', coordinates: coords }) ?? ''
  const [x, y] = projection([-178, lat]) ?? [0, 0]
  return { d, label: `${Math.abs(lat)}°${lat > 0 ? 'N' : lat < 0 ? 'S' : ''}`, x, y }
}

/** A mountain range (area) or river (line) drawn over a map, in map coordinates. */
export interface MapOverlay {
  id: string
  kind: 'area' | 'line'
  d: string
  bounds: MapBounds
  /** Shown on hover */
  label?: string
}

const physicalCache = new Map<MapVariant, Promise<MapOverlay[]>>()

/** Mountain ranges and rivers (Natural Earth, see tools/build-physical.mjs), projected like the given map. */
function loadPhysical(variant: MapVariant): Promise<MapOverlay[]> {
  if (!physicalCache.has(variant)) {
    physicalCache.set(variant, Promise.all([loadMap(variant), import('../content/generated/physical.topo.json')]).then(([, m]) => {
      const topo = m.default as unknown as Topology
      const path = geoPath(projections.get(variant)!)
      return Object.entries(topo.objects).flatMap(([layer, obj]) => {
        const fc = feature(topo, obj) as FeatureCollection<Geometry, { id: string }>
        return fc.features.map((f) => ({
          id: f.properties.id,
          kind: layer === 'rivers' ? 'line' as const : 'area' as const,
          d: path(f) ?? '',
          bounds: path.bounds(f) as MapBounds,
        }))
      })
    }))
  }
  return physicalCache.get(variant)!
}

export function usePhysical(variant: MapVariant = 'languages') {
  const [overlays, setOverlays] = useState<MapOverlay[] | null>(null)
  useEffect(() => {
    loadPhysical(variant).then(setOverlays, () => setOverlays([]))
  }, [variant])
  return overlays
}

export function useMapFeatures(variant: MapVariant = 'languages') {
  const [features, setFeatures] = useState<MapFeature[] | null>(null)
  const [error, setError] = useState(false)
  useEffect(() => {
    loadMap(variant).then(setFeatures, () => setError(true))
  }, [variant])
  return { features, error }
}
