export type LandformKind = 'range' | 'river'
export type Continent = 'Europe' | 'Asia' | 'Africa' | 'North America' | 'South America' | 'Oceania'

/** A mountain range or a river. Written from Wikipedia and the sources it cites (see SPEC §7.4). */
export interface Landform {
  id: string
  name: string
  kind: LandformKind
  continent: Continent
  /** ISO2 countries it crosses */
  countries: string[]
  /** Feature names in Natural Earth (10m geography regions / river centre-lines) that draw it on the map */
  ne: string[]
  /** Key numbers: highest peak, length, basin area… */
  stats: { label: string; value: string }[]
  /** One-line summary */
  summary: string
  /** How it looks from the road, and look-alikes */
  looks: string[]
  /** How it formed / where the water comes from */
  formed: string[]
  history: string[]
  /** Interesting and surprising things */
  facts: string[]
  tips: string[]
  remember: string
  /** English Wikipedia article (lead image, and link) */
  wikipedia: string
  /** Commons search for landscape photos */
  photoSearch?: string
}
