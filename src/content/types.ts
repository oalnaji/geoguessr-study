// Content model for the Languages module. See SPEC.md §5 and §7.1.
// Hand-written content lives in src/content/{scripts,languages}; downloaded reference data
// (letters, speakers, sample text) lives in src/content/generated and is merged in src/content/index.ts.

export type ScriptId =
  | 'latin' | 'cyrillic' | 'greek' | 'armenian' | 'georgian' | 'hebrew' | 'arabic' | 'thaana'
  | 'ethiopic' | 'tifinagh' | 'devanagari' | 'bengali' | 'gurmukhi' | 'gujarati' | 'odia' | 'tamil'
  | 'telugu' | 'kannada' | 'malayalam' | 'sinhala' | 'tibetan' | 'thai' | 'lao' | 'khmer' | 'myanmar'
  | 'hangul' | 'japanese' | 'han' | 'mongolian'

export interface Letter {
  char: string
  /** Romanisation or approximate sound */
  roman: string
  note?: string
}

export interface LetterSection {
  title: string
  note?: string
  letters: Letter[]
}

export interface Script {
  id: ScriptId
  name: string
  nativeName?: string
  kind: 'alphabet' | 'abjad' | 'abugida' | 'syllabary' | 'logographic' | 'featural alphabet' | 'mixed'
  direction: 'left to right' | 'right to left' | 'top to bottom'
  /** Region heading on the scripts index */
  area: 'Europe' | 'Caucasus & Middle East' | 'Africa' | 'South Asia' | 'Southeast Asia' | 'East Asia'
  /** A short word shown big on cards, usually the script's or a country's name */
  showcase: string
  /** Languages written in it. `id` links to a language page when one exists. */
  languages: { name: string; id?: string }[]
  whereUsed: string
  /** Visual tells for recognising the script at a glance */
  recognise: string[]
  lookalikes: { script: ScriptId; tell: string }[]
  sections: LetterSection[]
  /** Used when UDHR has no sample for this script */
  fallbackSample?: string
  history: string[]
  facts: string[]
  sources: string[]
}

export type RegionStatus = 'official' | 'co-official' | 'regional' | 'minority' | 'diaspora'

export interface Region {
  /** ISO 3166-1 alpha-2 */
  country: string
  /** Sub-national area; omitted means the whole country */
  area?: string
  status: RegionStatus
  signage: 'common' | 'sometimes' | 'rare'
  note?: string
}

/** Common words, grouped the way they are shown on pages. */
export const wordCategories = [
  { title: 'Streets & roads', keys: ['street', 'road', 'square', 'bridge', 'exit', 'centre'] },
  { title: 'Directions', keys: ['north', 'south', 'east', 'west'] },
  { title: 'Places & nature', keys: ['town', 'village', 'river', 'lake', 'mountain', 'island'] },
  { title: 'In place names', keys: ['new', 'old', 'big', 'small', 'saint'] },
  { title: 'Buildings & services', keys: ['church', 'school', 'pharmacy', 'bakery', 'police', 'hospital', 'station', 'forSale'] },
] as const

export type SignWordKey = (typeof wordCategories)[number]['keys'][number]
export const signWordKeys: SignWordKey[] = wordCategories.flatMap((c) => [...c.keys])

export const signWordLabels: Record<SignWordKey, string> = {
  street: 'Street', road: 'Road', square: 'Square', exit: 'Exit', centre: 'Town centre',
  church: 'Church', school: 'School', pharmacy: 'Pharmacy', bakery: 'Bakery', police: 'Police',
  hospital: 'Hospital', station: 'Station', bridge: 'Bridge', forSale: 'For sale',
  north: 'North', south: 'South', east: 'East', west: 'West',
  town: 'Town, city', village: 'Village', river: 'River', lake: 'Lake', mountain: 'Mountain', island: 'Island',
  new: 'New', old: 'Old', big: 'Big, great', small: 'Small, little', saint: 'Saint',
}

export interface PlaceNamePart {
  part: string
  meaning: string
  example?: string
}

export interface Language {
  id: string
  name: string
  nativeName: string
  script: ScriptId
  /** Second script, e.g. Serbian Cyrillic */
  altScript?: ScriptId
  family: string[]
  groups: string[]
  confusedWith: string[]
  /** Things that identify the language: a letter, digraph or word, and what it tells you */
  giveaways: { sign: string; tip: string }[]
  regions: Region[]
  signWords: Partial<Record<SignWordKey, string>>
  /** Sign words in the alternate script */
  signWordsAlt?: Partial<Record<SignWordKey, string>>
  /** Elements that place names are built from (-by, Nagy-, Llan-…) */
  placeNameParts?: PlaceNamePart[]
  orthography?: { year: number; note: string }
  history: string[]
  /** "Language & place": why it is spoken where it is (SPEC §5.4 6b) */
  place: { title: string; text: string }[]
  connections: string[]
  facts: string[]
  sources: string[]
}

export interface Group {
  id: string
  name: string
  members: string[]
  /** Why these languages look alike */
  intro: string[]
  /** Ordered checks: look for X → it's Y */
  checklist: { look: string; then: string }[]
  traps: string[]
}
