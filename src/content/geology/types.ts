export const geoCategories = ['Rocks & soil chemistry', 'Landforms', 'Mining'] as const
export type GeoCategory = (typeof geoCategories)[number]

/** A geology explainer: a landform, rock or soil process, or a mined resource (SPEC §12.10). */
export interface GeoTopic {
  id: string
  title: string
  category: GeoCategory
  summary: string
  /** How it forms: the geology and chemistry */
  science: string[]
  /** What it looks like from the road */
  looks: string[]
  /** Where (in words: countries and regions) */
  where: string
  /** ISO2 countries shaded on the map */
  countries: string[]
  history: string[]
  facts: string[]
  tips: string[]
  remember: string
  /** Mining only: what it is used for */
  uses?: string
  /** Mining only: top producing countries, largest first */
  producers?: string[]
  related?: { to: string; label: string }[]
  /** Commons categories for photo candidates (photos are checked by hand) */
  photoCategories: string[]
}
