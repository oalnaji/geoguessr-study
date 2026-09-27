// Content model for the Vegetation & Crops module. See SPEC.md §12.5–12.6.
// Hand-written entries live in trees.ts, crops.ts, desert.ts, forests.ts, oddities.ts and soils.ts; photos, recorded occurrences and production
// figures are downloaded by tools/fetch-plants.mjs into src/content/generated/plants.json.

export interface Plant {
  id: string
  name: string
  /** Scientific name used to look up photos (iNaturalist) and occurrences (GBIF); may be a genus. Omitted for forest types. */
  scientific?: string
  /** English Wikipedia article whose lead image is used as the first photo */
  wikipedia: string
  section: 'tree' | 'crop' | 'forest' | 'soil'
  /** Heading on the overview for trees and plants */
  group?: 'Palms' | 'Conifers' | 'Broadleaf trees' | 'Cacti & desert plants' | 'Ferns' | 'Regional oddities' | 'Other'
  /** Forests and biomes: the latitude band they occupy */
  latitude?: string
  /** Forests and biomes: latitude bands [from, to] in degrees (negative = south), drawn on the map */
  latitudeBands?: [number, number][]
  /** Soils: the typical colour, for swatches and the soil-colour map */
  swatch?: string
  /** Memory hooks: metaphors and mnemonics that make it stick */
  remember?: string[]
  /** Also list under Crops (e.g. oil palm, olive) */
  alsoCrop?: boolean
  /** Short label: "Palm", "Conifer", "Grass"… */
  kind: string
  /** Wikimedia Commons category with landscape photos (plantations, fields…) */
  commonsCategory?: string
  /** Wikimedia Commons search(es) for extra landscape photos */
  photoSearch?: string | string[]
  recognise: string[]
  lookalikes: { id?: string; name: string; tell: string }[]
  nativeRange: string
  grownIn: string
  /** ISO2 countries where seeing it is a useful GeoGuessr clue */
  clueCountries: string[]
  /** Why it grows there: climate, soil, adaptations */
  science: string[]
  /** How people spread it */
  history: string[]
  tips: string[]
  facts?: string[]
  /**
   * Crops: production data. `owid` names an Our World in Data (FAO) chart; `mainProducers` is a
   * hand-written ranking (largest first) for crops without a downloadable series.
   */
  production?: { owid: string } | { mainProducers: string[] }
  sources: string[]
}

export interface Photo {
  url: string
  large: string
  author: string
  license: string
  /** Page with the original and full licence details */
  source: string
  from: 'wikipedia' | 'inaturalist' | 'commons'
}

export interface PlantData {
  photos: Photo[]
  /** Human observations per country (GBIF), ISO2 → count */
  recorded?: Record<string, number>
  /** Human observations per state/province in countries split on the vegetation map, ISO 3166-2 → count */
  recordedRegions?: Record<string, number>
  /** Production per country (tonnes), ISO2 → value, from FAO via Our World in Data */
  production?: { year: number; values: Record<string, number> }
}
