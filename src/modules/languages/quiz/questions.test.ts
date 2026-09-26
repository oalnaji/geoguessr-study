import { describe, expect, it } from 'vitest'
import { languageById, languages } from '../../../content'
import mapJson from '../../../content/generated/map.topo.json'
import { mapRegions, regionKey } from '../../../content/mapRegions'
import {
  giveawaySnippet, gradeGiveaway, gradeLanguage, gradeMap, gradeRegion, gradeSignWord, isInTarget,
  makeGiveawayRound, makeLanguageRound, makeMapRound, makeRegionRound, makeSignWordRound, mapLanguages, mapTarget,
  regionItems, signWordItems,
} from './questions'

function seeded(seed: number) {
  return () => {
    seed = (seed * 1664525 + 1013904223) % 2 ** 32
    return seed / 2 ** 32
  }
}

type Topo = { objects: Record<string, { geometries: { properties: { id: string; country: string } }[] }> }
const features = Object.values((mapJson as unknown as Topo).objects)[0].geometries.map((g) => g.properties)
const featureIds = new Set(features.map((f) => f.id))
const lang = (id: string) => languageById.get(id)!

describe('identify the language', () => {
  it('makes 10 different languages, limited to a group when asked', () => {
    const all = makeLanguageRound('', new Set(), seeded(1))
    expect(new Set(all.map((q) => q.key)).size).toBe(10)
    const central = makeLanguageRound('central-europe', new Set(), seeded(1))
    expect(central.map((q) => q.key).sort()).toEqual(['cs', 'hu', 'pl', 'sk', 'sl'])
    expect(gradeLanguage(central[0], central[0].lang.id).points).toBe(1)
    expect(gradeLanguage(central[0], 'xx').points).toBe(0)
  })
})

describe('spot the giveaway', () => {
  it('builds a snippet around a giveaway letter, case-insensitively', () => {
    const s = giveawaySnippet('Všichni lidé rodí se svobodní a sobě rovní co do důstojnosti', new Set(['ř', 'ů', 'ě']), seeded(4))!
    expect(s.giveaways.length).toBeGreaterThan(0)
    for (const i of s.giveaways) expect(['ů', 'ě']).toContain(s.chars[i])
    expect(giveawaySnippet('abc def', new Set(['ő']), seeded(1))).toBeNull()
  })

  it('only asks about languages with a real giveaway, and grades the tap', () => {
    const round = makeGiveawayRound('', new Set(), seeded(2))
    expect(round.length).toBe(10)
    for (const q of round) {
      expect(q.giveaways.length, q.key).toBeGreaterThan(0)
      expect(gradeGiveaway(q, q.giveaways[0]).points).toBe(1)
      const wrong = q.chars.findIndex((_, i) => !q.giveaways.includes(i))
      if (wrong >= 0) expect(gradeGiveaway(q, wrong).points).toBe(0)
    }
  })
})

describe('sign words', () => {
  it('accepts every language that uses the same word, and drops very common words', () => {
    const items = signWordItems('')
    const ulica = items.find((it) => it.word === 'ulica')
    // ulica is shared by more than three languages (pl, sk, sl, hr, bs, sr…), so it is dropped
    expect(ulica).toBeUndefined()
    const vej = items.find((it) => it.word === 'vej')!
    expect(vej.answers).toEqual(['da'])
    for (const it of items) expect(it.answers.length).toBeLessThanOrEqual(3)
    const round = makeSignWordRound('', new Set(), seeded(3))
    expect(round).toHaveLength(10)
    expect(gradeSignWord(vej, 'da').points).toBe(1)
    expect(gradeSignWord(vej, 'no').points).toBe(0)
  })
})

describe('where is it seen (map)', () => {
  it('uses only languages common on street signs', () => {
    // Singapore: English only; Malay, Tamil and Mandarin are not common on its signs.
    const inSingapore = languages.filter((l) => mapTarget(l).countries.includes('SG')).map((l) => l.id)
    expect(inSingapore).toEqual(['en'])
  })

  it('splits countries with several official languages into regions', () => {
    const ca = mapTarget(lang('ca'))
    expect(ca.regions.sort()).toEqual(['ES-CT', 'ES-IB', 'ES-VC'])
    expect(ca.countries).toEqual(['AD'])
    expect(isInTarget(ca, { id: 'ES-CT', country: 'ES' })).toBe(true)
    expect(isInTarget(ca, { id: 'ES-MD', country: 'ES' })).toBe(false)
    // Spanish covers every region of Spain
    expect(isInTarget(mapTarget(lang('es')), { id: 'ES-CT', country: 'ES' })).toBe(true)
    // India: Tamil is Tamil Nadu, not the whole country
    const ta = mapTarget(lang('ta'))
    expect(isInTarget(ta, { id: 'IN-TN', country: 'IN' })).toBe(true)
    expect(isInTarget(ta, { id: 'IN-KA', country: 'IN' })).toBe(false)
  })

  it('has every map region the data refers to', () => {
    for (const codes of Object.values(mapRegions)) for (const c of codes) expect(featureIds, c).toContain(c)
    for (const l of mapLanguages) for (const c of mapTarget(l).countries) {
      expect(features.some((f) => f.country === c), `${l.id}: ${c}`).toBe(true)
    }
  })

  it('makes a round and grades a tap', () => {
    const round = makeMapRound('', new Set(), seeded(5))
    expect(round).toHaveLength(10)
    const q = makeMapRound('central-europe', new Set(), seeded(5)).find((x) => x.key === 'hu')!
    expect(gradeMap(q, { id: 'HU', country: 'HU' }).points).toBe(1)
    expect(gradeMap(q, { id: 'RO-HR', country: 'RO' }).points).toBe(1)
    expect(gradeMap(q, { id: 'RO-B', country: 'RO' }).points).toBe(0)
  })
})

describe('region → language', () => {
  it('asks about regional languages next to a nationwide one', () => {
    const vojvodina = regionItems.find((it) => it.country === 'RS' && it.area === 'Vojvodina')!
    expect(vojvodina.answers).toEqual(['hu'])
    expect(vojvodina.besides.map((l) => l.id)).toContain('sr')
    expect(gradeRegion(vojvodina, 'hu').points).toBe(1)
    const catalonia = regionItems.find((it) => it.area === 'Catalonia')!
    expect(catalonia.besides.map((l) => l.id)).toContain('es')
    expect(makeRegionRound(new Set(), seeded(6))).toHaveLength(10)
  })
})

describe('map region table', () => {
  it('matches existing language regions', () => {
    const keys = new Set(languages.flatMap((l) => l.regions.map((r) => regionKey(l.id, r.country, r.area))))
    for (const k of Object.keys(mapRegions)) expect(keys, k).toContain(k)
  })
})
