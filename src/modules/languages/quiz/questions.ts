import { countries, groupById, languageById, languageSamples, languages, uniqueLetters } from '../../../content'
import { mapRegions, regionKey } from '../../../content/mapRegions'
import { signWordLabels, type Language, type ScriptId, type SignWordKey } from '../../../content/types'
import { graphemes, pick, randInt, ROUND_LENGTH, shuffle, type Grade, type Rng } from './engine'
import { snippet } from './scriptQuiz'

/** Languages in scope for a group filter ('' = all). */
export const languagesInScope = (groupId: string) =>
  groupId ? groupById.get(groupId)!.members.map((id) => languageById.get(id)!) : languages

const byName = (a: Language, b: Language) => a.name.localeCompare(b.name)

// ---- Identify the language ---------------------------------------------------------------------

export interface LanguageQuestion { key: string; lang: Language; snippet: string; script: ScriptId }

export function makeLanguageRound(groupId: string, known: ReadonlySet<string>, rng: Rng = Math.random): LanguageQuestion[] {
  return shuffle(languagesInScope(groupId).filter((l) => !known.has(l.id) && languageSamples(l).length), rng)
    .slice(0, ROUND_LENGTH)
    .map((lang) => {
      const sample = pick(languageSamples(lang), rng)
      return { key: lang.id, lang, script: sample.script, snippet: snippet(sample.text, sample.script, rng) }
    })
}

export const gradeLanguage = (q: LanguageQuestion, a: string | null): Grade => ({ points: Number(a === q.lang.id), max: 1 })

export const languageOptions = (groupId: string) =>
  [...languagesInScope(groupId)].sort(byName).map((l) => ({ value: l.id, label: l.name }))

// ---- Spot the giveaway -------------------------------------------------------------------------

export interface GiveawayQuestion {
  key: string
  lang: Language
  script: ScriptId
  /** Characters as shown, one tap target each (spaces included) */
  chars: string[]
  /** Indexes of characters that give the language away */
  giveaways: number[]
}

const lower = (s: string) => s.toLocaleLowerCase()

/** A 3–6 word window of the text that contains at least one of the given letters, split into characters. */
export function giveawaySnippet(text: string, letters: ReadonlySet<string>, rng: Rng): { chars: string[]; giveaways: number[] } | null {
  const has = (g: string) => [...lower(g).normalize('NFC')].some((c) => letters.has(c))
  const words = text.replace(/[()[\]«»"“”.,;:!?،؛።፡]/g, ' ').split(/\s+/).filter(Boolean)
  const hits = words.map((w, i) => (graphemes(w).some(has) ? i : -1)).filter((i) => i >= 0)
  if (!hits.length) return null
  const centre = pick(hits, rng)
  const len = Math.min(words.length, 3 + randInt(rng, 4))
  const start = Math.max(0, Math.min(words.length - len, centre - randInt(rng, len)))
  const chars = graphemes(words.slice(start, start + len).join(' '))
  // Very long words (e.g. in unspaced text) would overflow: keep 24 characters around the first hit.
  const firstHit = chars.findIndex(has)
  const clipped = chars.length > 24 ? chars.slice(Math.max(0, firstHit - 8), Math.max(0, firstHit - 8) + 24) : chars
  return { chars: clipped, giveaways: clipped.map((c, i) => (has(c) ? i : -1)).filter((i) => i >= 0) }
}

export function makeGiveawayRound(groupId: string, known: ReadonlySet<string>, rng: Rng = Math.random): GiveawayQuestion[] {
  const out: GiveawayQuestion[] = []
  for (const lang of shuffle(languagesInScope(groupId), rng)) {
    if (out.length >= ROUND_LENGTH) break
    if (known.has(lang.id)) continue
    const letters = new Set(uniqueLetters(lang))
    if (!letters.size) continue
    // Try the sample sentence first, then the language's own words.
    const texts = [...languageSamples(lang).filter((s) => s.script === lang.script).map((s) => s.text), Object.values(lang.signWords).join(' ')]
    const found = texts.map((t) => giveawaySnippet(t, letters, rng)).find(Boolean)
    if (found) out.push({ key: lang.id, lang, script: lang.script, ...found })
  }
  return out
}

export const gradeGiveaway = (q: GiveawayQuestion, tapped: number | null): Grade =>
  ({ points: Number(tapped !== null && q.giveaways.includes(tapped)), max: 1 })

/** Languages that have letters no other language in the same script uses. */
export const giveawayLanguages = languages.filter((l) => uniqueLetters(l).length)

// ---- Sign words --------------------------------------------------------------------------------

export interface SignWordQuestion { key: string; word: string; meaning: string; script: ScriptId; answers: string[]; lang: Language }

/** "ulica (ul.)" / "gade / vej" → ["ulica"] / ["gade", "vej"] */
const variants = (w: string) => w.split('/').map((v) => v.replace(/\(.*?\)/g, '').trim().toLocaleLowerCase()).filter(Boolean)

/** Every (language, meaning, word) item, with all languages that use the same word for the same meaning. */
export function signWordItems(groupId: string) {
  const scope = languagesInScope(groupId)
  const items: SignWordQuestion[] = []
  for (const lang of scope) {
    const sets: [Partial<Record<SignWordKey, string>>, ScriptId][] = [[lang.signWords, lang.script]]
    if (lang.signWordsAlt && lang.altScript) sets.push([lang.signWordsAlt, lang.altScript])
    for (const [words, script] of sets) {
      for (const [k, w] of Object.entries(words) as [SignWordKey, string][]) {
        const word = variants(w)[0]
        if (!word) continue
        const answers = languages
          .filter((l) => [l.signWords[k], l.signWordsAlt?.[k]].some((x) => x && variants(x).includes(word)))
          .map((l) => l.id)
        items.push({ key: `${lang.id}|${k}|${word}`, word, meaning: signWordLabels[k], script, answers, lang })
      }
    }
  }
  // Words shared by many languages (hospital, police, centrum…) say little about the language.
  return items.filter((it) => it.answers.length <= 3)
}

export function makeSignWordRound(groupId: string, known: ReadonlySet<string>, rng: Rng = Math.random): SignWordQuestion[] {
  const items = shuffle(signWordItems(groupId).filter((it) => !known.has(it.key)), rng)
  // At most two words from the same language per round.
  const perLang = new Map<string, number>()
  const out: SignWordQuestion[] = []
  for (const it of items) {
    if (out.length >= ROUND_LENGTH) break
    const n = perLang.get(it.lang.id) ?? 0
    if (n >= 2) continue
    perLang.set(it.lang.id, n + 1)
    out.push(it)
  }
  return out
}

export const gradeSignWord = (q: SignWordQuestion, a: string | null): Grade => ({ points: Number(a !== null && q.answers.includes(a)), max: 1 })

// ---- Where is it seen? (map) -------------------------------------------------------------------

export interface MapTarget {
  /** Whole countries (ISO2): every map feature in the country counts */
  countries: string[]
  /** Specific map regions (ISO 3166-2) */
  regions: string[]
}

/**
 * Where a language is common on street signs, in map terms. Regions inside countries only count
 * when the map splits that country (see mapRegions.ts); other regional areas are left out.
 */
export function mapTarget(lang: Language): MapTarget {
  const t: MapTarget = { countries: [], regions: [] }
  for (const r of lang.regions) {
    if (r.signage !== 'common') continue
    if (!r.area) t.countries.push(r.country)
    else t.regions.push(...(mapRegions[regionKey(lang.id, r.country, r.area)] ?? []))
  }
  return { countries: [...new Set(t.countries)], regions: [...new Set(t.regions)] }
}

export const isInTarget = (t: MapTarget, feature: { id: string; country: string }) =>
  t.countries.includes(feature.country) || t.regions.includes(feature.id)

export interface MapQuestion { key: string; lang: Language; target: MapTarget }

export const mapLanguages = languages.filter((l) => {
  const t = mapTarget(l)
  return t.countries.length + t.regions.length > 0
})

export function makeMapRound(groupId: string, known: ReadonlySet<string>, rng: Rng = Math.random): MapQuestion[] {
  const scope = new Set(languagesInScope(groupId).map((l) => l.id))
  return shuffle(mapLanguages.filter((l) => scope.has(l.id) && !known.has(l.id)), rng)
    .slice(0, ROUND_LENGTH)
    .map((lang) => ({ key: lang.id, lang, target: mapTarget(lang) }))
}

export const gradeMap = (q: MapQuestion, a: { id: string; country: string } | null): Grade =>
  ({ points: Number(a !== null && isInTarget(q.target, a)), max: 1 })

// ---- Region → language -------------------------------------------------------------------------

export interface RegionQuestion {
  key: string
  country: string
  area: string
  /** Languages on signs across the whole country, named in the prompt ("Besides Serbian…") */
  besides: Language[]
  answers: string[]
}

/** Areas where a regional language is common on signs next to a country-wide language. */
export const regionItems: RegionQuestion[] = (() => {
  const nationwide = (country: string) =>
    languages.filter((l) => l.regions.some((r) => r.country === country && !r.area && r.signage === 'common' && (r.status === 'official' || r.status === 'co-official')))
  const items = new Map<string, RegionQuestion>()
  for (const lang of languages) {
    for (const r of lang.regions) {
      if (!r.area || r.signage !== 'common') continue
      const besides = nationwide(r.country).filter((l) => l.id !== lang.id)
      if (!besides.length) continue
      const key = `${r.country}|${r.area}`
      const item = items.get(key) ?? { key, country: r.country, area: r.area, besides, answers: [] }
      item.answers.push(lang.id)
      items.set(key, item)
    }
  }
  return [...items.values()]
})()

export function makeRegionRound(known: ReadonlySet<string>, rng: Rng = Math.random): RegionQuestion[] {
  return shuffle(regionItems.filter((it) => !known.has(it.key)), rng).slice(0, ROUND_LENGTH)
}

export const gradeRegion = (q: RegionQuestion, a: string | null): Grade => ({ points: Number(a !== null && q.answers.includes(a)), max: 1 })

export const countryName = (code: string) => countries[code]?.name ?? code
