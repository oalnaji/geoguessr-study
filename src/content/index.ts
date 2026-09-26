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
import { scriptList } from './scripts'
import type { Group, Language, Script, ScriptId } from './types'

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

export const languages: Language[] = [
  ...central.languages, ...yugo.languages, ...baltic.languages, ...nordic.languages,
  ...iberian.languages, ...romance.languages, ...germanic.languages, ...celtic.languages, ...europe.languages,
].sort((a, b) => a.name.localeCompare(b.name))
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
