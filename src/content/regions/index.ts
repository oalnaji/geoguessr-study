import generated from '../generated/regions.json'
import { countries } from '../countries'
import { clueTarget, inTarget, plants, type Plant } from '../vegetation'
import { argentina } from './argentina'
import { australia } from './australia'
import { brazil } from './brazil'
import { canada } from './canada'
import { indonesia } from './indonesia'
import featurePhotosJson from '../generated/feature-photos.json'
import { countryFeatures } from './features'
import type { CountryFeature } from './featureTypes'
import { regionMarkers } from './markers'
import { mexico } from './mexico'
import { philippines } from './philippines'
import { russia } from './russia'
import type { CountryStudy, RegionFacts, StudyRegion } from './types'
import { usa } from './usa'
import { vietnam } from './vietnam'

export type { CountryStudy, RegionFacts, RegionGroup, StudyRegion } from './types'
export type { CountryFeature, FeatureCategory } from './featureTypes'
export { featureCategories } from './featureTypes'

/** Countries in the Regions module, in study order. */
export const countryStudies: CountryStudy[] = [brazil, mexico, usa, canada, indonesia, australia, russia, argentina, vietnam, philippines]
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

/** Notable region-specific markers (see markers.ts); empty when there are none. */
export const markersOf = (id: string): string[] => regionMarkers[id] ?? []

/** Notable features of a country, by area (see features.ts). */
export const featuresOf = (country: string): CountryFeature[] => countryFeatures[country] ?? []
export const allFeatures: CountryFeature[] = Object.values(countryFeatures).flat()
export const featureById = new Map(allFeatures.map((f) => [f.id, f]))

/** Features whose area includes this region. */
export const featuresIn = (regionId: string): CountryFeature[] => allFeatures.filter((f) => f.regions.includes(regionId))

const featurePhotos = featurePhotosJson as unknown as Record<string, RegionFacts['photos']>
/** Hand-picked photos of a feature (Wikimedia Commons); empty for most pole and sign features. */
export const featurePhotosOf = (id: string): RegionFacts['photos'] => featurePhotos[id] ?? []

export const formatNumber = (n?: number) => (n === undefined ? '—' : n.toLocaleString('en-US'))
