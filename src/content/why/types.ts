export const whyCategories = ['Roads', 'Pavements & kerbs', 'Houses & roofs', 'Water & utilities', 'Signs & markers', 'Landscape & layout'] as const
export type WhyCategory = (typeof whyCategories)[number]

/** A "Why is it like this?" explainer (SPEC §12.4). */
export interface WhyExplainer {
  id: string
  /** Phrased as the question you would ask on seeing it */
  title: string
  category: WhyCategory
  /** What you see on Street View */
  observation: string
  /** The explanation: engineering, climate, economics, history */
  why: string[]
  /** Countries where it is typical (ISO2), shaded on the map */
  countries: string[]
  /** Where, in words (regions, exceptions) */
  where: string
  lookalikes?: string
  tips: string[]
  remember: string
  /** Links to other pages in the app */
  related?: { to: string; label: string }[]
  /** Commons categories to draw photo candidates from (photos are verified by hand) */
  photoCategories: string[]
}
