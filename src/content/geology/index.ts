import photosJson from '../generated/geology-photos.json'
import type { Photo } from '../vegetation/types'
import { landforms, minerals, rocksAndSoils } from './topics'
import type { GeoCategory, GeoTopic } from './types'

export type { GeoCategory, GeoTopic } from './types'
export { geoCategories } from './types'

export const geoTopics: GeoTopic[] = [...rocksAndSoils, ...landforms, ...minerals]
export const geoTopicById = new Map(geoTopics.map((t) => [t.id, t]))
export const topicsIn = (c: GeoCategory) => geoTopics.filter((t) => t.category === c)

const photos = photosJson as unknown as Record<string, Photo[]>
export const geoPhotos = (id: string): Photo[] => photos[id] ?? []
