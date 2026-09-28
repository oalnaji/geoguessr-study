import { describe, expect, it } from 'vitest'
import { countries } from '../countries'
import { explainerPhotos, explainers, maskedObservation, whyCategories } from '.'

describe('why explainers', () => {
  it('are complete and reference known countries', () => {
    expect(new Set(explainers.map((e) => e.id)).size).toBe(explainers.length)
    expect(explainers.length).toBeGreaterThanOrEqual(25)
    for (const e of explainers) {
      expect(whyCategories, e.id).toContain(e.category)
      expect(e.why.length, e.id).toBeGreaterThan(0)
      for (const c of e.countries) expect(countries[c], `${e.id}: ${c}`).toBeDefined()
      for (const p of explainerPhotos(e.id)) expect(p.author && p.license && p.source, e.id).toBeTruthy()
    }
    expect(explainers.filter((e) => explainerPhotos(e.id).length).length).toBeGreaterThanOrEqual(20)
  })

  it('hides place names in quiz prompts', () => {
    const tanks = explainers.find((e) => e.id === 'water-tanks')!
    expect(maskedObservation(tanks)).not.toMatch(/Brazil|Mexico|India/)
  })
})
