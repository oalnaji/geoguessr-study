export const featureCategories = [
  'Poles',
  'Bollards & markers',
  'Roads',
  'Signs & codes',
  'Plants & crops',
  'Landscape & soil',
  'Architecture',
  'Culture & shops',
] as const

export type FeatureCategory = (typeof featureCategories)[number]

/**
 * A notable feature found in one area of a country: a pole type, a road surface, a crop, a roof
 * style… Mostly paraphrased from PlonkIt (see SPEC §7.4). Titles avoid region names so they can be
 * quizzed ("where is this found?").
 */
export interface CountryFeature {
  id: string
  title: string
  category: FeatureCategory
  /** Region ids (ISO 3166-2, as on the map) where it is found */
  regions: string[]
  text: string
  /** Recognisable at a glance and limited to a small area */
  notable?: boolean
  /** A plant page in the Vegetation module that shows it */
  plant?: string
  /** Commons search used to find photo candidates (photos are chosen by hand) */
  photoSearch?: string
}
