import plantsJson from '../generated/plants.json'
import { crops } from './crops'
import { desertPlants, desertRegions } from './desert'
import { forestRegions, forests } from './forests'
import { plantRegions, VEG_SPLIT } from './regions'
import { plantRemember } from './remember'
import { trees } from './trees'
import type { Plant, PlantData } from './types'

const data = plantsJson as Record<string, PlantData>

const withRemember = (p: Plant): Plant => ({ ...p, remember: p.remember ?? plantRemember[p.id] })

export const treeList: Plant[] = [...trees, ...desertPlants].map(withRemember)
const cropsOnly: Plant[] = crops.map(withRemember)
export const forestList: Plant[] = forests
export const plants: Plant[] = [...treeList, ...cropsOnly, ...forestList]
export const plantById = new Map(plants.map((p) => [p.id, p]))
/** Crops, including trees that are also crops (oil palm, olive, mango). */
export const cropList = [...cropsOnly, ...treeList.filter((t) => t.alsoCrop)]

export const treeGroups = ['Palms', 'Conifers', 'Broadleaf trees', 'Cacti & desert plants', 'Other'] as const

export const plantData = (id: string): PlantData => data[id] ?? { photos: [] }

// ---- Where: countries and regions --------------------------------------------------------------

const splitSet = new Set<string>(VEG_SPLIT)
const allRegions: Record<string, string[]> = { ...plantRegions, ...desertRegions, ...forestRegions }

/** Raw region list for a plant (ISO 3166-2 codes, or bare country codes meaning the whole country). */
export const regionsOf = (id: string): string[] => allRegions[id] ?? []

export interface PlaceTarget {
  /** Whole countries: every map feature in them counts */
  countries: string[]
  /** Specific states or provinces */
  regions: string[]
}

/**
 * Turns a list of countries into map targets. Countries that the vegetation map splits into
 * regions use the plant's region list (a bare country code in that list means the whole country).
 */
export function placeTarget(plant: Plant, countryCodes: string[]): PlaceTarget {
  const listed = regionsOf(plant.id)
  const t: PlaceTarget = { countries: [], regions: [] }
  for (const c of countryCodes) {
    if (!splitSet.has(c) || listed.includes(c)) t.countries.push(c)
    else t.regions.push(...listed.filter((r) => r.startsWith(`${c}-`)))
  }
  return t
}

export const inTarget = (t: PlaceTarget, f: { id: string; country: string }) =>
  t.countries.includes(f.country) || t.regions.includes(f.id)

/** Where the plant is a useful GeoGuessr clue, down to region level in large countries. */
export const clueTarget = (plant: Plant) => placeTarget(plant, plant.clueCountries)

// ---- Data shading ------------------------------------------------------------------------------

export interface Shading {
  /** Country (ISO2) or region (ISO 3166-2) → value; regions take priority on the map */
  values: Record<string, number>
  label: string
  source: string
}

/** What to shade on the "where it grows" map: production for crops, recorded observations for trees. */
export function shadingOf(plant: Plant): Shading | null {
  const d = plantData(plant.id)
  if (d.production) {
    return { values: d.production.values, label: `National production in ${d.production.year} (tonnes)`, source: 'FAO, via Our World in Data' }
  }
  if (plant.production && 'mainProducers' in plant.production) {
    const list = plant.production.mainProducers
    // Rank only: largest producer gets the darkest shade.
    return { values: Object.fromEntries(list.map((c, i) => [c, list.length - i])), label: 'Main producers (approximate ranking)', source: 'Hand-written ranking based on FAO data' }
  }
  if (d.recorded && Object.keys(d.recorded).length) {
    return {
      values: { ...d.recorded, ...d.recordedRegions },
      label: 'Recorded observations (includes planted and garden trees)',
      source: 'GBIF',
    }
  }
  return null
}

/** Top producing countries for crops (by production, or the hand-written ranking). */
export function topProducers(plant: Plant, n = 10): string[] {
  const d = plantData(plant.id)
  if (d.production) return Object.entries(d.production.values).sort((a, b) => b[1] - a[1]).slice(0, n).map(([c]) => c)
  if (plant.production && 'mainProducers' in plant.production) return plant.production.mainProducers.slice(0, n)
  return []
}

export { VEG_SPLIT }
export type { Photo, Plant, PlantData } from './types'
