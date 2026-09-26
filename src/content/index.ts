import { countries } from './countries'
import lettersJson from './generated/letters.json'
import speakersJson from './generated/speakers.json'
import udhrLanguagesJson from './generated/udhr-languages.json'
import udhrScriptsJson from './generated/udhr-scripts.json'
import * as africa from './languages/africa'
import * as americasPacific from './languages/americas-pacific'
import * as baltic from './languages/baltic-finnic'
import * as celtic from './languages/celtic'
import * as central from './languages/central-europe'
import * as cyrillic from './languages/cyrillic'
import * as eastAsia from './languages/east-asia'
import * as yugo from './languages/ex-yugoslav'
import * as iberian from './languages/iberian'
import * as mainlandSea from './languages/mainland-sea'
import * as maritimeSea from './languages/maritime-sea'
import * as middleEast from './languages/middle-east'
import * as nordic from './languages/nordic'
import * as europe from './languages/other-europe'
import * as romance from './languages/other-romance'
import * as southAsia from './languages/south-asia'
import * as turkicLangs from './languages/turkic'
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
  ...turkicLangs.languages, ...cyrillic.languages, ...maritimeSea.languages, ...mainlandSea.languages,
  ...middleEast.languages, ...southAsia.languages, ...eastAsia.languages, ...africa.languages, ...americasPacific.languages,
].map(withVocab).sort((a, b) => a.name.localeCompare(b.name))
export const languageById = new Map(languages.map((l) => [l.id, l]))

export const groups: Group[] = [
  central.centralEurope, yugo.exYugoslav, baltic.balticFinnic, nordic.nordic, iberian.iberian,
  romance.otherRomance, germanic.westGermanic, celtic.celtic, europe.turkic, cyrillic.cyrillicGroup,
  maritimeSea.maritimeSea, mainlandSea.mainlandSea, southAsia.northIndic, southAsia.southIndic, southAsia.himalayan,
  middleEast.arabicScript, middleEast.hebrewScript, middleEast.caucasus, eastAsia.eastAsian,
  africa.bantu, africa.westAfrican, africa.hornOfAfrica, americasPacific.polynesian, americasPacific.andean,
]
export const groupById = new Map(groups.map((g) => [g.id, g]))

export const languageName = (id: string) => languageById.get(id)?.name ?? id

export { countries }

// ---- Letters -------------------------------------------------------------------------------

const BASIC_LATIN = new Set('abcdefghijklmnopqrstuvwxyz')

/**
 * False for punctuation CLDR includes in some inventories. The Ukrainian apostrophe (U+02BC) is
 * classed as a letter by Unicode, so it is excluded by name; the ʻokina (U+02BB) is a real letter.
 */
const isLetterEntry = (c: string) => c !== 'ʼ' && /[\p{L}\p{M}]/u.test(c)

/** Letter inventory for a language in a given script: CLDR, or the language file's override. */
export function lettersOf(lang: Language, script: ScriptId = lang.script): string[] {
  if (script !== lang.script && script === lang.altScript) return (letterSets[`${lang.id}-cyrl`]?.main ?? []).filter(isLetterEntry)
  if (lang.lettersOverride) return lang.lettersOverride.split(/\s+/)
  // CLDR lists Hungarian long consonants (ccs, ggy, ddzs) as entries; they are spellings, not letters.
  const main = (letterSets[lang.id]?.main ?? []).filter((c) => !(c.length >= 3 && c[0] === c[1]) && isLetterEntry(c))
  // Montenegrin shares Serbian's CLDR data; add its two extra letters.
  return lang.id === 'cnr' ? [...main, 'ś', 'ź'] : main
}

const isSingle = (s: string) => [...s.normalize('NFC')].length === 1

/** Languages written in a script, as main or second script. */
export const languagesInScript = (script: ScriptId) =>
  languages.filter((l) => l.script === script || l.altScript === script)

/**
 * Letters that distinguish languages sharing a script, and who uses each: every letter not used by
 * all of them (and, for Latin, beyond a–z). Most distinctive first. Empty for single-language scripts.
 */
export function letterIndex(script: ScriptId): { char: string; langs: string[] }[] {
  const langs = languagesInScript(script).filter((l) => lettersOf(l, script).length)
  if (langs.length < 2) return []
  const map = new Map<string, string[]>()
  for (const lang of langs) {
    for (const c of new Set(lettersOf(lang, script).filter(isSingle))) map.set(c, [...(map.get(c) ?? []), lang.id])
  }
  return [...map.entries()]
    .filter(([c, users]) => users.length < langs.length && !(script === 'latin' && BASIC_LATIN.has(c)))
    .map(([char, users]) => ({ char, langs: users }))
    .sort((a, b) => a.langs.length - b.langs.length || a.char.localeCompare(b.char))
}

const indexCache = new Map<ScriptId, Map<string, string[]>>()
const usage = (script: ScriptId) => {
  if (!indexCache.has(script)) indexCache.set(script, new Map(letterIndex(script).map((e) => [e.char, e.langs])))
  return indexCache.get(script)!
}

/** Every non-basic Latin letter and the languages that use it. */
export const latinIndex = letterIndex('latin')

/** Letters beyond basic a–z for Latin-script languages, or all letters for other scripts. */
export function specialLetters(lang: Language, script: ScriptId = lang.script): string[] {
  const all = lettersOf(lang, script).filter(isSingle)
  return script === 'latin' ? all.filter((c) => !BASIC_LATIN.has(c)) : all
}

/** Letters used by this language and no other language in the app with the same script. */
export function uniqueLetters(lang: Language, script: ScriptId = lang.script): string[] {
  const u = usage(script)
  return [...new Set(lettersOf(lang, script).filter(isSingle))].filter((c) => u.get(c)?.length === 1)
}

// ---- Samples ---------------------------------------------------------------------------------

export function languageSamples(lang: Language): (Sample & { script: ScriptId })[] {
  const out: (Sample & { script: ScriptId })[] = []
  if (udhrLanguages[lang.id]) out.push({ ...udhrLanguages[lang.id], script: lang.script })
  if (lang.altScript && udhrLanguages[`${lang.id}-cyrl`]) out.push({ ...udhrLanguages[`${lang.id}-cyrl`], script: lang.altScript })
  // Chinese: Traditional-character version.
  if (udhrLanguages[`${lang.id}-alt`]) out.push({ ...udhrLanguages[`${lang.id}-alt`], script: lang.script })
  if (!out.length && lang.sampleOverride) out.push({ text: lang.sampleOverride, source: '', script: lang.script })
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
