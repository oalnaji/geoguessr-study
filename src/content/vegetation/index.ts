import plantsJson from '../generated/plants.json'
import { crops } from './crops'
import { trees } from './trees'
import type { Plant, PlantData } from './types'

const data = plantsJson as Record<string, PlantData>

export const plants: Plant[] = [...trees, ...crops]
export const plantById = new Map(plants.map((p) => [p.id, p]))
export const treeList = trees
/** Crops, including trees that are also crops (oil palm, olive, mango). */
export const cropList = [...crops, ...trees.filter((t) => t.alsoCrop)]

export const plantData = (id: string): PlantData => data[id] ?? { photos: [] }

export interface Shading {
  /** ISO2 → value */
  values: Record<string, number>
  label: string
  source: string
}

/** What to shade on the "where it grows" map: production for crops, recorded observations for trees. */
export function shadingOf(plant: Plant): Shading | null {
  const d = plantData(plant.id)
  if (d.production) {
    return { values: d.production.values, label: `Production in ${d.production.year} (tonnes)`, source: 'FAO, via Our World in Data' }
  }
  if (plant.production && 'mainProducers' in plant.production) {
    const list = plant.production.mainProducers
    // Rank only: largest producer gets the darkest shade.
    return { values: Object.fromEntries(list.map((c, i) => [c, list.length - i])), label: 'Main producers (approximate ranking)', source: 'Hand-written ranking based on FAO data' }
  }
  if (d.recorded && Object.keys(d.recorded).length) {
    return { values: d.recorded, label: 'Recorded observations (includes planted and garden trees)', source: 'GBIF' }
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

export type { Photo, Plant, PlantData } from './types'
