import photosJson from '../generated/pole-photos.json'
import { countries } from '../countries'
import type { Photo } from '../vegetation/types'
import { poles } from './poles'
import type { Continent } from './types'

export type { Continent, PoleType } from './types'
export { poleParts, whyTheyDiffer } from './anatomy'
export { poles }

export const continents: Continent[] = ['Europe', 'Asia', 'Americas', 'Africa', 'Oceania']

/** Continent of each country with a pole entry (for grouping). */
export const continentOf: Record<string, Continent> = {
  RU: 'Europe', UA: 'Europe', HU: 'Europe', RO: 'Europe', LV: 'Europe', LT: 'Europe', EE: 'Europe', PL: 'Europe', CZ: 'Europe', SK: 'Europe',
  BG: 'Europe', RS: 'Europe', HR: 'Europe', SI: 'Europe', AL: 'Europe', MK: 'Europe', ME: 'Europe', GR: 'Europe', IT: 'Europe', ES: 'Europe',
  PT: 'Europe', FR: 'Europe', BE: 'Europe', NL: 'Europe', DE: 'Europe', AT: 'Europe', CH: 'Europe', DK: 'Europe', NO: 'Europe', SE: 'Europe',
  FI: 'Europe', GB: 'Europe', IE: 'Europe', IS: 'Europe', TR: 'Asia',
  JP: 'Asia', KR: 'Asia', TW: 'Asia', TH: 'Asia', VN: 'Asia', KH: 'Asia', LA: 'Asia', MY: 'Asia', SG: 'Asia', ID: 'Asia', PH: 'Asia', IN: 'Asia',
  BD: 'Asia', LK: 'Asia', NP: 'Asia', BT: 'Asia', MN: 'Asia', KZ: 'Asia', KG: 'Asia', IL: 'Asia', JO: 'Asia', AE: 'Asia',
  US: 'Americas', CA: 'Americas', MX: 'Americas', GT: 'Americas', CR: 'Americas', PA: 'Americas', DO: 'Americas', PR: 'Americas', CO: 'Americas',
  EC: 'Americas', PE: 'Americas', BO: 'Americas', CL: 'Americas', AR: 'Americas', UY: 'Americas', PY: 'Americas', BR: 'Americas',
  ZA: 'Africa', BW: 'Africa', SZ: 'Africa', LS: 'Africa', KE: 'Africa', UG: 'Africa', RW: 'Africa', GH: 'Africa', NG: 'Africa', SN: 'Africa',
  TN: 'Africa', MG: 'Africa',
  AU: 'Oceania', NZ: 'Oceania',
}

export const poleById = new Map(poles.map((p) => [p.id, p]))
export const poleCountries = [...new Set(poles.map((p) => p.country))]
export const polesOf = (country: string) => poles.filter((p) => p.country === country)
export const countryLabel = (code: string) => countries[code]?.name ?? code

const photos = photosJson as unknown as Record<string, Photo[]>
export const polePhotos = (id: string): Photo[] => photos[id] ?? []
