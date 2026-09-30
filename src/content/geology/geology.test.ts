import { describe, expect, it } from 'vitest'
import { countries } from '../countries'
import { geoCategories, geoPhotos, geoTopics } from '.'

describe('geology topics', () => {
  it('are complete and reference known countries', () => {
    expect(new Set(geoTopics.map((t) => t.id)).size).toBe(geoTopics.length)
    for (const t of geoTopics) {
      expect(geoCategories, t.id).toContain(t.category)
      expect(t.science.length, t.id).toBeGreaterThan(0)
      for (const c of [...t.countries, ...(t.producers ?? [])]) expect(countries[c], `${t.id}: ${c}`).toBeDefined()
      for (const p of geoPhotos(t.id)) expect(p.author && p.license && p.source, t.id).toBeTruthy()
    }
    for (const t of geoTopics.filter((t) => t.category === 'Mining')) {
      expect(t.producers?.length, t.id).toBeGreaterThan(0)
      expect(t.uses, t.id).toBeTruthy()
    }
  })
})
