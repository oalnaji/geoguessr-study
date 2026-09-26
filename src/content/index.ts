import { countries } from './countries'
import lettersJson from './generated/letters.json'
import speakersJson from './generated/speakers.json'
import udhrLanguagesJson from './generated/udhr-languages.json'
import udhrScriptsJson from './generated/udhr-scripts.json'
import * as baltic from './languages/baltic-finnic'
import * as celtic from './languages/celtic'
import * as central from './languages/central-europe'
import * as yugo from './languages/ex-yugoslav'
import * as iberian from './languages/iberian'
import * as nordic from './languages/nordic'
import * as europe from './languages/other-europe'
import * as romance from './languages/other-romance'
import * as germanic from './languages/west-germanic'
import { extraWords, extraWordsAlt, placeNameParts } from './languages/vocab'
import { scriptList } from './scripts'
import { signWordLabels, type Group, type Language, type Script, type ScriptId, type SignWordKey } from './types'

type LetterSets = Record<string, { main: string[]; auxiliary: string[] }>
type Figure = { value: number; year: number | null; source: string }
type Speakers = Record<string, { l1?: Figure; l2?: Figure; unspecified?: Figure }>
type Sample = { text: string; source: string }

const letterSets = lettersJson as LetterSets
const speakers = speakersJson as Speakers
const udhrLanguages = udhrLanguagesJson as Record<string, Sample>
const udhrScripts = udhrScriptsJson as Record<string, Sample>

export const scripts = scriptList
export const scriptById = new Map<ScriptId, Script>(scripts.map((s) => [s.id, s]))

/** "north=sever; south=jih" → { north: 'sever', south: 'jih' } */
export function parseWords(spec: string | undefined): Partial<Record<SignWordKey, string>> {
  if (!spec) return {}
  return Object.fromEntries(
    spec.split(';').map((pair) => pair.trim()).filter(Boolean).map((pair) => {
      const i = pair.indexOf('=')
      return [pair.slice(0, i).trim(), pair.slice(i + 1).trim()]
    }),
  )
}

const withVocab = (lang: Language): Language => ({
  ...lang,
  signWords: { ...lang.signWords, ...parseWords(extraWords[lang.id]) },
  signWordsAlt: lang.signWordsAlt && { ...lang.signWordsAlt, ...parseWords(extraWordsAlt[lang.id]) },
  placeNameParts: (placeNameParts[lang.id] ?? []).map(([part, meaning, example]) => ({ part, meaning, example })),
})

export const languages: Language[] = [
  ...central.languages, ...yugo.languages, ...baltic.languages, ...nordic.languages,
  ...iberian.languages, ...romance.languages, ...germanic.languages, ...celtic.languages, ...europe.languages,
].map(withVocab).sort((a, b) => a.name.localeCompare(b.name))
export const languageById = new Map(languages.map((l) => [l.id, l]))

export const groups: Group[] = [
  central.centralEurope, yugo.exYugoslav, baltic.balticFinnic, nordic.nordic, iberian.iberian,
  romance.otherRomance, germanic.westGermanic, celtic.celtic, europe.turkic,
]
export const groupById = new Map(groups.map((g) => [g.id, g]))

/** Names for languages referenced before they have their own page. */
const pendingNames: Record<string, string> = {
  bg: 'Bulgarian', ru: 'Russian', uk: 'Ukrainian', be: 'Belarusian', az: 'Azerbaijani',
}
export const languageName = (id: string) => languageById.get(id)?.name ?? pendingNames[id] ?? id

export { countries }

// ---- Letters -------------------------------------------------------------------------------

const BASIC_LATIN = new Set('abcdefghijklmnopqrstuvwxyz')

/** CLDR letter inventory for a language in a given script. Serbian/Montenegrin Latin is the default key. */
export function lettersOf(lang: Language, script: ScriptId = lang.script): string[] {
  if (script === 'cyrillic' && lang.altScript === 'cyrillic') return letterSets[`${lang.id}-cyrl`]?.main ?? []
  // CLDR lists Hungarian long consonants (ccs, ggy, ddzs) as entries; they are spellings, not letters.
  const main = (letterSets[lang.id]?.main ?? []).filter((c) => !(c.length >= 3 && c[0] === c[1]))
  // Montenegrin shares Serbian's CLDR data; add its two extra letters.
  return lang.id === 'cnr' ? [...main, 'ś', 'ź'] : main
}

const isSingle = (s: string) => [...s.normalize('NFC')].length === 1

/** Letters beyond basic a–z for Latin-script languages, or all letters for other scripts. */
export function specialLetters(lang: Language): string[] {
  const all = lettersOf(lang).filter(isSingle)
  return lang.script === 'latin' ? all.filter((c) => !BASIC_LATIN.has(c)) : all
}

/** Every non-basic Latin letter and the languages that use it. */
export const latinIndex: { char: string; langs: string[] }[] = (() => {
  const map = new Map<string, string[]>()
  for (const lang of languages) {
    if (lang.script !== 'latin') continue
    for (const c of specialLetters(lang)) map.set(c, [...(map.get(c) ?? []), lang.id])
  }
  return [...map.entries()]
    .map(([char, langs]) => ({ char, langs }))
    .sort((a, b) => a.langs.length - b.langs.length || a.char.localeCompare(b.char))
})()

const latinUsage = new Map(latinIndex.map((e) => [e.char, e.langs]))

/** Latin letters used by this language and no other language in the app. */
export function uniqueLetters(lang: Language): string[] {
  if (lang.script !== 'latin') return []
  return specialLetters(lang).filter((c) => latinUsage.get(c)?.length === 1)
}

// ---- Samples ---------------------------------------------------------------------------------

export function languageSamples(lang: Language): (Sample & { script: ScriptId })[] {
  const out: (Sample & { script: ScriptId })[] = []
  if (udhrLanguages[lang.id]) out.push({ ...udhrLanguages[lang.id], script: lang.script })
  if (lang.altScript && udhrLanguages[`${lang.id}-cyrl`]) out.push({ ...udhrLanguages[`${lang.id}-cyrl`], script: lang.altScript })
  return out
}

export function scriptSamples(script: Script): (Sample & { label?: string })[] {
  if (script.id === 'han') {
    return [
      { ...udhrScripts['han-simplified'], label: 'Simplified' },
      { ...udhrScripts['han-traditional'], label: 'Traditional' },
    ].filter((s) => s.text)
  }
  if (udhrScripts[script.id]) return [udhrScripts[script.id]]
  if (script.fallbackSample) return [{ text: script.fallbackSample, source: '', label: 'Place names' }]
  return []
}

// ---- Stats ---------------------------------------------------------------------------------

export interface LanguageStats {
  l1?: Figure
  l2?: Figure
  speakers?: Figure
  officialCountries: string[]
  regionalCountries: string[]
  letterCount: number
  uniqueLetterCount: number
  orthographyYear?: number
  /** Countries with Street View coverage where the language appears on signs */
  geoguessrCountries: string[]
}

export function statsOf(lang: Language): LanguageStats {
  const s = speakers[lang.id] ?? {}
  const unique = <T,>(xs: T[]) => [...new Set(xs)]
  const official = unique(lang.regions.filter((r) => !r.area && (r.status === 'official' || r.status === 'co-official')).map((r) => r.country))
  const regional = unique(lang.regions.filter((r) => !official.includes(r.country)).map((r) => r.country))
  return {
    l1: s.l1,
    l2: s.l2,
    speakers: s.unspecified,
    officialCountries: official,
    regionalCountries: regional,
    letterCount: lettersOf(lang).length,
    uniqueLetterCount: uniqueLetters(lang).length,
    orthographyYear: lang.orthography?.year,
    geoguessrCountries: unique(
      lang.regions.filter((r) => r.signage !== 'rare' && countries[r.country]?.coverage === 'yes').map((r) => r.country),
    ),
  }
}

// ---- Word finder -----------------------------------------------------------------------------

export interface WordEntry {
  /** As written, e.g. "vej" or "-købing" */
  text: string
  meaning: string
  lang: string
  script: ScriptId
  kind: 'word' | 'place-name part'
  example?: string
}

/** Lowercase and strip accents, so "vej" also finds "véj" and "sor" finds "sør". */
export const foldForSearch = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/\p{M}/gu, '').replace(/ø/g, 'o').replace(/æ/g, 'ae').replace(/ß/g, 'ss')
    .replace(/đ/g, 'd').replace(/ł/g, 'l').replace(/ħ/g, 'h').replace(/ŧ/g, 't').replace(/ŋ/g, 'n').replace(/þ/g, 'th').replace(/ð/g, 'd')

export const wordIndex: WordEntry[] = languages.flatMap((lang) => [
  ...Object.entries(lang.signWords).map(([key, text]) => ({
    text: text!, meaning: signWordLabels[key as SignWordKey], lang: lang.id, script: lang.script, kind: 'word' as const,
  })),
  ...Object.entries(lang.signWordsAlt ?? {}).map(([key, text]) => ({
    text: text!, meaning: signWordLabels[key as SignWordKey], lang: lang.id, script: lang.altScript!, kind: 'word' as const,
  })),
  ...(lang.placeNameParts ?? []).map((p) => ({
    text: p.part, meaning: p.meaning, lang: lang.id, script: lang.script, kind: 'place-name part' as const, example: p.example,
  })),
])

/** Entries whose word (or any " / "-separated variant) starts with or contains the query. Exact and prefix matches first. */
export function searchWords(query: string): WordEntry[] {
  const q = foldForSearch(query.trim()).replace(/^-|-$/g, '')
  if (!q) return []
  const score = (e: WordEntry) => {
    const variants = e.text.split(/\s*\/\s*|\s*\(\s*|\s*\)\s*/).map((v) => foldForSearch(v).replace(/^-|-$/g, '')).filter(Boolean)
    if (variants.some((v) => v === q)) return 0
    if (variants.some((v) => v.startsWith(q))) return 1
    if (variants.some((v) => v.includes(q))) return 2
    return -1
  }
  return wordIndex
    .map((e) => ({ e, s: score(e) }))
    .filter((x) => x.s >= 0)
    .sort((a, b) => a.s - b.s || a.e.text.localeCompare(b.e.text))
    .map((x) => x.e)
}
