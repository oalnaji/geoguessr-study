import { describe, expect, it } from 'vitest'
import {
  foldForSearch, parseWords, searchWords,
  countries, groupById, groups, languageById, languageName, languageSamples, languages, latinIndex,
  lettersOf, scriptById, scriptSamples, scripts, statsOf, uniqueLetters,
} from '.'
import { extraWords, extraWordsAlt } from './languages/vocab'
import { signWordKeys } from './types'

describe('scripts', () => {
  it('have unique ids and at least one letter section with letters', () => {
    expect(new Set(scripts.map((s) => s.id)).size).toBe(scripts.length)
    for (const s of scripts) {
      expect(s.sections.length, s.id).toBeGreaterThan(0)
      for (const sec of s.sections) expect(sec.letters.length, `${s.id}: ${sec.title}`).toBeGreaterThan(0)
    }
  })

  it('generates the Indic charts from the shared Unicode layout', () => {
    const consonants = (id: 'devanagari' | 'tamil') => scriptById.get(id)!.sections.find((s) => s.title === 'Consonants')!.letters
    expect(consonants('devanagari')[0]).toEqual({ char: 'क', roman: 'ka' })
    expect(consonants('devanagari')).toHaveLength(34)
    // Tamil has no aspirated consonants, but has ழ (ḻa)
    expect(consonants('tamil').map((l) => l.char)).not.toContain('ख')
    expect(consonants('tamil').find((l) => l.char === 'ழ')?.roman).toBe('ḻa')
  })

  it('all have a sample text', () => {
    for (const s of scripts) expect(scriptSamples(s).length, s.id).toBeGreaterThan(0)
  })

  it('link only to existing lookalike scripts and languages', () => {
    for (const s of scripts) {
      for (const l of s.lookalikes) expect(scriptById.has(l.script), `${s.id} → ${l.script}`).toBe(true)
      for (const l of s.languages) if (l.id) expect(languageById.has(l.id), `${s.id} → ${l.id}`).toBe(true)
    }
  })
})

describe('languages', () => {
  it('have unique ids', () => {
    expect(new Set(languages.map((l) => l.id)).size).toBe(languages.length)
  })

  it('reference known countries, scripts, groups and languages', () => {
    for (const l of languages) {
      expect(scriptById.has(l.script), l.id).toBe(true)
      for (const r of l.regions) expect(countries[r.country], `${l.id}: ${r.country}`).toBeDefined()
      for (const g of l.groups) expect(groupById.has(g), `${l.id}: ${g}`).toBe(true)
      for (const c of l.confusedWith) expect(languageName(c), `${l.id}: ${c}`).not.toBe(c)
    }
  })

  it('have CLDR letters and a UDHR sample', () => {
    for (const l of languages) {
      expect(lettersOf(l).length, l.id).toBeGreaterThan(15)
      expect(languageSamples(l).length, l.id).toBeGreaterThan(0)
    }
  })

  it('only use known sign word keys', () => {
    for (const l of languages) for (const k of Object.keys(l.signWords)) expect(signWordKeys, l.id).toContain(k)
  })
})

describe('groups', () => {
  it('list existing members, and members list the group', () => {
    for (const g of groups) {
      for (const m of g.members) {
        const lang = languageById.get(m)
        expect(lang, `${g.id}: ${m}`).toBeDefined()
        expect(lang!.groups, `${m} should list ${g.id}`).toContain(g.id)
      }
    }
  })
})

describe('derived letter data', () => {
  it('finds the classic giveaways as unique letters', () => {
    const u = (id: string) => uniqueLetters(languageById.get(id)!)
    expect(u('hu')).toEqual(expect.arrayContaining(['ő', 'ű']))
    expect(u('cs')).toEqual(expect.arrayContaining(['ř', 'ů']))
    expect(u('pl')).toContain('ł')
    expect(u('is')).toContain('þ')
    expect(u('ro')).toEqual(expect.arrayContaining(['ș', 'ț']))
  })

  it('indexes shared letters under every language that uses them', () => {
    const entry = latinIndex.find((e) => e.char === 'č')!
    expect(entry.langs).toEqual(expect.arrayContaining(['cs', 'sk', 'sl', 'hr', 'lt', 'lv']))
  })

  it('drops Hungarian long-consonant spellings but keeps real digraphs', () => {
    const hu = lettersOf(languageById.get('hu')!)
    expect(hu).toEqual(expect.arrayContaining(['cs', 'dzs', 'gy']))
    expect(hu).not.toContain('ccs')
    expect(hu).not.toContain('ggy')
  })

  it('reads Serbian Cyrillic separately from Serbian Latin', () => {
    const sr = languageById.get('sr')!
    expect(lettersOf(sr, 'cyrillic')).toContain('ђ')
    expect(lettersOf(sr)).toContain('đ')
  })
})

describe('stats', () => {
  it('counts official countries and GeoGuessr countries', () => {
    const fr = statsOf(languageById.get('fr')!)
    expect(fr.officialCountries).toEqual(expect.arrayContaining(['FR', 'MC', 'SN']))
    expect(fr.geoguessrCountries).toEqual(expect.arrayContaining(['FR', 'BE', 'CH', 'CA']))
  })
})

describe('vocabulary and word finder', () => {
  it('only uses known word keys, and every language gets directions and place-name parts', () => {
    for (const [id, spec] of Object.entries({ ...extraWords, ...extraWordsAlt })) {
      expect(languageById.has(id), id).toBe(true)
      for (const k of Object.keys(parseWords(spec))) expect(signWordKeys, `${id}: ${k}`).toContain(k)
    }
    for (const l of languages) {
      expect(l.signWords.east, `${l.id} east`).toBeTruthy()
      expect(l.placeNameParts!.length, `${l.id} place-name parts`).toBeGreaterThan(0)
    }
  })

  it('finds the language from a word seen on a sign', () => {
    const top = (q: string) => searchWords(q)[0]
    expect(top('vej')).toMatchObject({ lang: 'da', meaning: 'Road' })
    expect(top('kobing')).toMatchObject({ lang: 'da', kind: 'place-name part' })
    expect(top('Nagy')).toMatchObject({ lang: 'hu' })
    expect(searchWords('sor').some((e) => e.lang === 'no' && e.meaning === 'South')).toBe(true)
    expect(searchWords('улица').map((e) => e.lang)).toEqual(expect.arrayContaining(['sr', 'mk']))
  })

  it('ignores accents and case', () => {
    expect(foldForSearch('Straße')).toBe('strasse')
    expect(foldForSearch('ŘEKA')).toBe('reka')
  })
})
