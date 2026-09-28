import photosJson from '../generated/why-photos.json'
import { countries } from '../countries'
import type { Photo } from '../vegetation/types'
import { explainers } from './explainers'

export type { WhyCategory, WhyExplainer } from './types'
export { whyCategories } from './types'
export { explainers }

export const explainerById = new Map(explainers.map((e) => [e.id, e]))

const photos = photosJson as unknown as Record<string, Photo[]>
export const explainerPhotos = (id: string): Photo[] => photos[id] ?? []

const ADJECTIVES = ['American', 'Brazilian', 'Mexican', 'Canadian', 'Scandinavian', 'Swedish', 'Norwegian', 'Finnish', 'Dutch', 'Portuguese', 'Russian', 'Soviet', 'Israeli', 'Icelandic', 'Japanese', 'Belgian', 'German', 'Australian', 'Texas', 'Iowa', 'Quebec', 'Midwest', 'Queensland', 'Latin America', 'South America', 'Central America', 'North America', 'the Americas', 'Europe', 'Africa', 'Asia', 'Middle East', 'Caucasus', 'Nordics', 'Balkans', 'Mediterranean', 'Lisbon', 'Rio', 'Copacabana', 'Macau', 'Hokkaido', 'Alps', 'Amazon', 'Louisiana', 'Maine', 'Vermont', 'Minnesota', 'Michigan', 'Chicago']

/** The observation with place names hidden, for the quiz. */
export function maskedObservation(e: import('./types').WhyExplainer): string {
  const names = [...Object.values(countries).map((c) => c.name), ...ADJECTIVES].sort((a, b) => b.length - a.length)
  let t = e.observation
  for (const n of names) t = t.split(n).join('▢▢▢')
  return t.replace(/(▢▢▢)([ ,and()]*▢▢▢)+/g, '▢▢▢')
}
