import photosJson from '../generated/uncovered-photos.json'
import type { Photo } from '../vegetation/types'
import { guides } from './guides'

export type { CountryGuide } from './guides'
export { guides }

export const guideRegions = ['Africa', 'Central Asia & Caucasus', 'Asia', 'Americas', 'Oceania'] as const
export const guideById = new Map(guides.map((g) => [g.id, g]))
/** ISO2 → guide id */
export const guideOfCountry = new Map(guides.flatMap((g) => g.countries.map((c) => [c, g.id] as [string, string])))

const photos = photosJson as unknown as Record<string, Photo[]>
export const guidePhotos = (id: string): Photo[] => photos[id] ?? []
