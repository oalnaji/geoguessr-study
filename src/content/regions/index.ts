import generated from '../generated/regions.json'
import { countries } from '../countries'
import { clueTarget, inTarget, plants, type Plant } from '../vegetation'
import { argentina } from './argentina'
import { australia } from './australia'
import { brazil } from './brazil'
import { canada } from './canada'
import { indonesia } from './indonesia'
import { mexico } from './mexico'
import { russia } from './russia'
import type { CountryStudy, RegionFacts, StudyRegion } from './types'
import { usa } from './usa'

export type { CountryStudy, RegionFacts, RegionGroup, StudyRegion } from './types'

/** Countries in the Regions module, in study order. */
export const countryStudies: CountryStudy[] = [brazil, mexico, usa, canada, indonesia, australia, russia, argentina]
export const studyByCountry = new Map(countryStudies.map((s) => [s.country, s]))

export const allRegions: StudyRegion[] = countryStudies.flatMap((s) => s.regions)
export const regionById = new Map(allRegions.map((r) => [r.id, r]))

export const countryOf = (r: StudyRegion) => r.id.split('-')[0]
export const countryName = (code: string) => countries[code]?.name ?? code

const facts = generated as unknown as Record<string, RegionFacts>

/** Population, area and photos from Wikidata/Commons; the capital from the content file when it is set there. */
export function regionFacts(r: StudyRegion): RegionFacts {
  const f = facts[r.id]
  return { ...f, capital: r.capital ?? f?.capital, photos: f?.photos ?? [] }
}

/** Trees, cacti, crops and forests from the Vegetation module that are a clue in this region. */
export function plantsIn(r: StudyRegion): Plant[] {
  const place = { id: r.id, country: countryOf(r) }
  return plants.filter((p) => inTarget(clueTarget(p), place))
}

/** Hides the region's name and capital in a clue, for the "which region is this?" quiz. */
export function maskName(text: string, r: StudyRegion): string {
  const words = [r.name, regionFacts(r).capital]
    .filter((w): w is string => !!w)
    .flatMap((w) => [w, w.replace(/ (Oblast|Krai|Province|Republic|Autonomous Okrug)$/, '')])
    .filter((w) => w.length > 2)
    .sort((a, b) => b.length - a.length)
  return words.reduce((t, w) => t.split(w).join('▢▢▢'), text)
}

export const formatNumber = (n?: number) => (n === undefined ? '—' : n.toLocaleString('en-US'))
