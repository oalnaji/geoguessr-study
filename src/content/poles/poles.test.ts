import { describe, expect, it } from 'vitest'
import { countries } from '../countries'
import { regionById } from '../regions'
import { continentOf, polePhotos, poles } from '.'

describe('utility poles', () => {
  it('have unique ids, a known country with a continent, and valid region links', () => {
    expect(new Set(poles.map((p) => p.id)).size).toBe(poles.length)
    for (const p of poles) {
      expect(countries[p.country], p.id).toBeDefined()
      expect(continentOf[p.country], p.id).toBeDefined()
      expect(p.look.length, p.id).toBeGreaterThan(0)
      for (const r of p.regions ?? []) expect(regionById.has(r), `${p.id}: ${r}`).toBe(true)
    }
  })

  it('have photos for most entries, with credits', () => {
    const withPhotos = poles.filter((p) => polePhotos(p.id).length)
    expect(withPhotos.length / poles.length).toBeGreaterThan(0.75)
    for (const p of withPhotos) for (const ph of polePhotos(p.id)) expect(ph.author && ph.license && ph.source, p.id).toBeTruthy()
  })
})
