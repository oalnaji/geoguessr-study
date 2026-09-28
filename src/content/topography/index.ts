import photosJson from '../generated/topo-photos.json'
import type { Photo } from '../vegetation/types'
import { mountains } from './mountains'
import { rivers } from './rivers'
import type { Continent, Landform } from './types'

export type { Continent, Landform, LandformKind } from './types'
export { mountains, rivers }

export const continents: Continent[] = ['Europe', 'Asia', 'Africa', 'North America', 'South America', 'Oceania']
export const landforms: Landform[] = [...mountains, ...rivers]
export const landformById = new Map(landforms.map((l) => [l.id, l]))

const photos = photosJson as unknown as Record<string, Photo[]>
export const landformPhotos = (id: string): Photo[] => photos[id] ?? []
