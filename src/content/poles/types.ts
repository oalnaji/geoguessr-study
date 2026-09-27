export type Continent = 'Europe' | 'Asia' | 'Americas' | 'Africa' | 'Oceania'

/** A notable utility-pole type: one that identifies a country, or a region inside it. */
export interface PoleType {
  id: string
  /** ISO2 */
  country: string
  title: string
  /** How to recognise it */
  look: string[]
  /** Where in the country (omitted when it is found everywhere) */
  where?: string
  /** Region ids (ISO 3166-2, as on the Regions map) where it is found, for the link to the Regions module */
  regions?: string[]
  /** Countries with similar poles, and how to tell them apart */
  lookalikes?: string
  /** Why it looks like that, where known */
  why?: string
  /** Commons category or search used to find photo candidates */
  photoCategory?: string
  photoSearch?: string
}
