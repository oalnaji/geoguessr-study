// Content model for the Vegetation & Crops module. See SPEC.md §12.5–12.6.
// Hand-written entries live in trees.ts and crops.ts; photos, recorded occurrences and production
// figures are downloaded by tools/fetch-plants.mjs into src/content/generated/plants.json.

export interface Plant {
  id: string
  name: string
  /** Scientific name used to look up photos (iNaturalist) and occurrences (GBIF); may be a genus */
  scientific: string
  /** English Wikipedia article whose lead image is used as the first photo */
  wikipedia: string
  section: 'tree' | 'crop'
  /** Also list under Crops (e.g. oil palm, olive) */
  alsoCrop?: boolean
  /** Short label: "Palm", "Conifer", "Grass"… */
  kind: string
  /** Wikimedia Commons category with landscape photos (plantations, fields…) */
  commonsCategory?: string
  /** Wikimedia Commons search for extra landscape photos */
  photoSearch?: string
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
  /** Production per country (tonnes), ISO2 → value, from FAO via Our World in Data */
  production?: { year: number; values: Record<string, number> }
}
