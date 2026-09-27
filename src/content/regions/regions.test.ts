import { describe, expect, it } from 'vitest'
import { gradeFind, makeClueRound, makeFindRound, makeNameRound } from '../../modules/regions/quiz/questions'
import vegMap from '../generated/map-veg.topo.json'
import { allRegions, countryOf, countryStudies, maskName, plantsIn, regionById, regionFacts } from '.'

type Topo = { objects: Record<string, { geometries: { properties: { id: string; country: string } }[] }> }
const features = Object.values((vegMap as unknown as Topo).objects)[0].geometries.map((g) => g.properties)

function seeded(seed: number) {
  return () => {
    seed = (seed * 1664525 + 1013904223) % 2 ** 32
    return seed / 2 ** 32
  }
}

describe('region content', () => {
  it('covers exactly the regions on the map for each country', () => {
    for (const s of countryStudies) {
      const onMap = features.filter((f) => f.country === s.country).map((f) => f.id).sort()
      expect(s.regions.map((r) => r.id).sort(), s.country).toEqual(onMap)
    }
    expect(new Set(allRegions.map((r) => r.id)).size).toBe(allRegions.length)
  })

  it('puts every region in one of its country\'s groups, and every group has regions', () => {
    for (const s of countryStudies) {
      const groups = new Set(s.groups.map((g) => g.name))
      for (const r of s.regions) expect(groups.has(r.group), `${r.id}: ${r.group}`).toBe(true)
      for (const g of groups) expect(s.regions.some((r) => r.group === g), `${s.country}: ${g}`).toBe(true)
    }
  })

  it('gives every region a description, clues, a memory hook, a capital, stats and a photo', () => {
    for (const r of allRegions) {
      expect(r.looks.length, r.id).toBeGreaterThan(20)
      expect(r.clues.length, r.id).toBeGreaterThan(0)
      expect(r.remember, r.id).toBeTruthy()
      const f = regionFacts(r)
      expect(f.capital, r.id).toBeTruthy()
      expect(f.capital, r.id).not.toContain(' / ')
      expect(f.population, r.id).toBeGreaterThan(0)
      expect(f.photos.length, r.id).toBeGreaterThan(0)
      for (const p of f.photos) expect(p.author && p.license && p.source, r.id).toBeTruthy()
    }
  })

  it('links regions to the plants that grow there', () => {
    const names = (id: string) => plantsIn(regionById.get(id)!).map((p) => p.id)
    expect(names('US-AZ')).toContain('saguaro')
    expect(names('US-TX')).not.toContain('saguaro')
    expect(names('BR-MA')).toContain('babassu')
  })

  it('hides the name in quiz clues', () => {
    const acre = regionById.get('BR-AC')!
    expect(maskName('Acre is far west; Rio Branco is its capital', acre)).toBe('▢▢▢ is far west; ▢▢▢ is its capital')
    const kaluga = regionById.get('RU-KLU')!
    expect(maskName('Kaluga is space-rocket town', kaluga)).not.toContain('Kaluga')
  })
})

describe('regions quizzes', () => {
  it('makes rounds for one country and for all', () => {
    expect(makeNameRound('BR', new Set(), seeded(1)).every((q) => countryOf(q.region) === 'BR')).toBe(true)
    expect(makeClueRound('', new Set(), seeded(2))).toHaveLength(10)
    for (const q of makeClueRound('', new Set(), seeded(3))) {
      for (const h of q.hints) expect(h, q.key).not.toContain(q.region.name)
    }
  })

  it('asks for islands and macro-regions, where any region in them counts', () => {
    const pool = makeFindRound('ID', new Set(), seeded(4)).concat(...Array.from({ length: 20 }, (_, i) => makeFindRound('ID', new Set(), seeded(i + 5))))
    const sulawesi = pool.find((q) => q.key === 'ID:Sulawesi')!
    expect(sulawesi.targets).toContain('ID-SN')
    expect(gradeFind(sulawesi, { id: 'ID-SA' }).points).toBe(1)
    expect(gradeFind(sulawesi, { id: 'ID-JB' }).points).toBe(0)
  })
})
