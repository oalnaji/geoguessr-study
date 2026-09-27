import { useMemo } from 'react'
import { boundsOf, MAP_WIDTH, projectBox, useMapFeatures, type MapBounds, type MapFeature } from '../../components/mapData'
import { countryName, countryOf, regionById, studyByCountry, type StudyRegion } from '../../content/regions'

const HIGHLIGHT = '#0f766e'
export const SAME_COUNTRY = '#c2e9e1'
/** One colour per group (macro-region, island…) on a country's map */
export const GROUP_COLORS = ['#99d8c9', '#fdd49e', '#bcbddc', '#fcbba1', '#a6cee3', '#d9f0a3', '#f1b6da', '#e0d3b8', '#b8e0f0']

/** The vegetation map (large countries split into states), labelled with the study names (accents and all). */
export function useRegionFeatures() {
  const { features, error } = useMapFeatures('vegetation')
  const relabelled = useMemo(() => features?.map((f) => {
    const r = regionById.get(f.id)
    return r ? { ...f, name: r.name, label: `${r.name}, ${countryName(f.country)}` } : f
  }) ?? null, [features])
  return { features: relabelled, error }
}

const union = (a: MapBounds, b: MapBounds) => boundsOf([{ bounds: a }, { bounds: b }])

/** The area showing a whole country (Russia and the US use a set box, as their islands span the date line). */
export function countryFocus(features: MapFeature[], country: string): MapBounds {
  const view = studyByCountry.get(country)?.view
  return (view && projectBox('vegetation', view.lon, view.lat)) ?? boundsOf(features.filter((f) => f.country === country))
}

/** The country, widened if needed so that the region is in view too. */
export function regionFocus(features: MapFeature[], region: StudyRegion): MapBounds {
  const country = countryFocus(features, countryOf(region))
  const own = region.view ? projectBox('vegetation', region.view.lon, region.view.lat) : features.find((f) => f.id === region.id)?.bounds
  // Shapes crossing the date line have a box as wide as the world: ignore those.
  return own && own[1][0] - own[0][0] < MAP_WIDTH / 2 ? union(country, own) : country
}

/** A ring around places too small to see at this zoom. */
export function markersFor(places: MapFeature[], focus: MapBounds) {
  const size = Math.max(focus[1][0] - focus[0][0], focus[1][1] - focus[0][1])
  return places
    .filter((f) => Math.max(f.bounds[1][0] - f.bounds[0][0], f.bounds[1][1] - f.bounds[0][1]) < size * 0.02)
    .map((f) => ({ x: (f.bounds[0][0] + f.bounds[1][0]) / 2, y: (f.bounds[0][1] + f.bounds[1][1]) / 2 }))
}

/** Colours: the highlighted places dark, the rest of their country light. */
export function highlightColor(ids: ReadonlySet<string>, country: string) {
  return (f: MapFeature) => (ids.has(f.id) ? HIGHLIGHT : f.country === country ? SAME_COUNTRY : undefined)
}
