import { allFeatures, allRegions, countryOf, maskName, regionFacts, studyByCountry, type CountryFeature, type StudyRegion } from '../../../content/regions'
import type { Photo } from '../../../content/vegetation/types'
import { pick, ROUND_LENGTH, shuffle, type Grade, type Rng } from '../../../quiz/engine'

export const regionQuizCrumbs = [{ to: '/regions', label: 'Regions' }, { to: '/regions/quizzes', label: 'Quizzes' }]

/** '' = every country, else one country code */
export type CountryScope = string

const regionsIn = (scope: CountryScope) => (scope ? allRegions.filter((r) => countryOf(r) === scope) : allRegions)

export const regionOptions = (country: string) =>
  [...(studyByCountry.get(country)?.regions ?? [])].sort((a, b) => a.name.localeCompare(b.name)).map((r) => ({ value: r.id, label: r.name }))

// ---- Name the highlighted region ----------------------------------------------------------------

export interface NameQuestion { key: string; region: StudyRegion }

export function makeNameRound(scope: CountryScope, known: ReadonlySet<string>, rng: Rng = Math.random): NameQuestion[] {
  return shuffle(regionsIn(scope).filter((r) => !known.has(r.id)), rng)
    .slice(0, ROUND_LENGTH)
    .map((region) => ({ key: region.id, region }))
}

export const gradeName = (q: NameQuestion, a: string | null): Grade => ({ points: Number(a === q.region.id), max: 1 })

// ---- Find it on the map -------------------------------------------------------------------------

export interface FindQuestion {
  key: string
  country: string
  /** What to tap, e.g. "Acre" or "the Northeast" */
  label: string
  /** Region ids that count as correct */
  targets: string[]
  /** Set for single-region questions */
  region?: StudyRegion
  /** Set for group questions (an island, macro-region or federal district) */
  group?: string
}

/** Every region, plus the groups of countries whose groups are real regions (islands, macro-regions). */
function findPool(scope: CountryScope): FindQuestion[] {
  const regions = regionsIn(scope).map((region) => ({
    key: region.id, country: countryOf(region), label: region.name, targets: [region.id], region,
  }))
  const groups = [...studyByCountry.values()]
    .filter((s) => s.quizGroups && (!scope || s.country === scope))
    .flatMap((s) => s.groups.map((g) => ({
      key: `${s.country}:${g.name}`,
      country: s.country,
      label: g.name,
      targets: s.regions.filter((r) => r.group === g.name).map((r) => r.id),
      group: g.name,
    })))
  return [...regions, ...groups]
}

export function makeFindRound(scope: CountryScope, known: ReadonlySet<string>, rng: Rng = Math.random): FindQuestion[] {
  return shuffle(findPool(scope).filter((q) => !known.has(q.key)), rng).slice(0, ROUND_LENGTH)
}

export const gradeFind = (q: FindQuestion, a: { id: string } | null): Grade =>
  ({ points: Number(a !== null && q.targets.includes(a.id)), max: 1 })

// ---- Which region is this? (from clues and a photo) ---------------------------------------------

export interface ClueQuestion {
  key: string
  region: StudyRegion
  photo?: Photo
  /** What it looks like, and two clues, with the region's name hidden */
  hints: string[]
}

export function makeClueRound(scope: CountryScope, known: ReadonlySet<string>, rng: Rng = Math.random): ClueQuestion[] {
  return shuffle(regionsIn(scope).filter((r) => !known.has(r.id)), rng)
    .slice(0, ROUND_LENGTH)
    .map((region) => {
      const photos = regionFacts(region).photos
      return {
        key: region.id,
        region,
        photo: photos.length ? pick(photos, rng) : undefined,
        hints: [region.looks, ...shuffle(region.clues, rng).slice(0, 2)].map((t) => maskName(t, region)),
      }
    })
}

export const gradeClue = (q: ClueQuestion, a: { id: string } | null): Grade => ({ points: Number(a?.id === q.region.id), max: 1 })

// ---- Where is this feature found? ---------------------------------------------------------------

export interface FeatureQuestion {
  key: string
  feature: CountryFeature
  country: string
}

/** Features limited to part of the country (a feature found everywhere is no test). */
export function makeFeatureRound(scope: CountryScope, known: ReadonlySet<string>, rng: Rng = Math.random): FeatureQuestion[] {
  const pool = allFeatures.filter((f) => {
    const country = f.regions[0].split('-')[0]
    const total = studyByCountry.get(country)?.regions.length ?? 0
    return (!scope || country === scope) && !known.has(f.id) && f.regions.length < total * 0.6
  })
  return shuffle(pool, rng).slice(0, ROUND_LENGTH).map((feature) => ({ key: feature.id, feature, country: feature.regions[0].split('-')[0] }))
}

export const gradeFeature = (q: FeatureQuestion, a: { id: string } | null): Grade =>
  ({ points: Number(a !== null && q.feature.regions.includes(a.id)), max: 1 })
