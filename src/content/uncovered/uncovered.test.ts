import { describe, expect, it } from 'vitest'
import { countries } from '../countries'
import { guidePhotos, guideRegions, guides } from '.'

describe('uncovered country guides', () => {
  it('are complete, with known countries and credited photos', () => {
    expect(new Set(guides.map((g) => g.id)).size).toBe(guides.length)
    for (const g of guides) {
      expect(guideRegions, g.id).toContain(g.region)
      for (const c of g.countries) expect(countries[c], `${g.id}: ${c}`).toBeDefined()
      for (const k of ['landscape', 'infrastructure', 'crops', 'people'] as const) expect(g[k].length, `${g.id}.${k}`).toBeGreaterThan(0)
      expect(guidePhotos(g.id).length, g.id).toBeGreaterThan(0)
      for (const p of guidePhotos(g.id)) expect(p.author && p.license && p.source, g.id).toBeTruthy()
    }
  })
})
