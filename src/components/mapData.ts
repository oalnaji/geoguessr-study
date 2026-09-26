import { geoEqualEarth, geoPath } from 'd3-geo'
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
  bounds: [[number, number], [number, number]]
}

export const MAP_WIDTH = 960
export const MAP_HEIGHT = 500

let cache: Promise<MapFeature[]> | null = null

/** Loads and projects the world map once (the data is a separate download). */
function loadMap(): Promise<MapFeature[]> {
  cache ??= import('../content/generated/map.topo.json').then((m) => {
    const topo = m.default as unknown as Topology
    const fc = feature(topo, Object.values(topo.objects)[0]) as FeatureCollection<Geometry, { id: string; name: string; country: string }>
    const projection = geoEqualEarth().fitExtent([[4, 4], [MAP_WIDTH - 4, MAP_HEIGHT - 4]], fc)
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
  })
  return cache
}

export function useMapFeatures() {
  const [features, setFeatures] = useState<MapFeature[] | null>(null)
  const [error, setError] = useState(false)
  useEffect(() => {
    loadMap().then(setFeatures, () => setError(true))
  }, [])
  return { features, error }
}
