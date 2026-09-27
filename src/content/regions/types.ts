import type { Photo } from '../vegetation/types'

/** A state, province or other first-level region of a large country (ISO 3166-2 code, as on the vegetation map). */
export interface StudyRegion {
  id: string
  name: string
  /** Name of a group in the country's `groups` (macro-region, island, federal district…) */
  group: string
  /** Only where Wikidata's capital is missing or wrong */
  capital?: string
  /** What it looks like from the road: landscape, vegetation, towns */
  looks: string
  /** What gives it away in GeoGuessr: codes on plates and signs, languages, road markers, crops, architecture */
  clues: string[]
  /** A memory hook (see SPEC §6.3) */
  remember: string
  /** Extra context, e.g. an administrative change since the imagery was taken */
  note?: string
  /** Lon/lat box to show, for regions the map cannot box automatically (they cross the date line) */
  view?: { lon: [number, number]; lat: [number, number] }
}

export interface RegionGroup {
  name: string
  blurb: string
}

export interface CountryStudy {
  country: string
  /** What the country's regions are called, e.g. "states", "provinces and territories" */
  unit: string
  intro: string
  /** Country-wide ways to tell regions apart */
  tips: string[]
  groups: RegionGroup[]
  regions: StudyRegion[]
  /** PlonkIt guide slug (https://www.plonkit.net/<slug>), the main reference for the markers */
  plonkit?: string
  /** Quiz the groups too ("tap the Northeast"), where they are official or well-known regions */
  quizGroups?: boolean
  /** Lon/lat box the country map zooms to (keeps Russia and the US from spanning the world) */
  view?: { lon: [number, number]; lat: [number, number] }
}

export interface RegionFacts {
  capital?: string
  population?: number
  areaKm2?: number
  wikipedia?: string
  photos: Photo[]
}
