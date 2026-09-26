import { describe, expect, it } from 'vitest'
import { gradeWhere, makePhotoRound, makeWhereRound, whereAnswers } from '../../modules/vegetation/quiz/questions'
import { countries } from '../countries'
import { cropList, plantById, plantData, plants, shadingOf, topProducers, treeList } from '.'

function seeded(seed: number) {
  return () => {
    seed = (seed * 1664525 + 1013904223) % 2 ** 32
    return seed / 2 ** 32
  }
}

describe('plants', () => {
  it('have unique ids and reference known plants and countries', () => {
    expect(new Set(plants.map((p) => p.id)).size).toBe(plants.length)
    for (const p of plants) {
      for (const c of p.clueCountries) expect(countries[c], `${p.id}: ${c}`).toBeDefined()
      for (const l of p.lookalikes) if (l.id) expect(plantById.has(l.id), `${p.id} → ${l.id}`).toBe(true)
      if (p.production && 'mainProducers' in p.production) {
        for (const c of p.production.mainProducers) expect(countries[c] ?? c.length === 2, `${p.id}: ${c}`).toBeTruthy()
      }
    }
  })

  it('every plant has at least two credited photos', () => {
    for (const p of plants) {
      const photos = plantData(p.id).photos
      expect(photos.length, p.id).toBeGreaterThanOrEqual(2)
      for (const ph of photos) {
        expect(ph.author, p.id).toBeTruthy()
        expect(ph.license, p.id).toBeTruthy()
        expect(ph.source, p.id).toMatch(/^https:\/\//)
      }
    }
  })

  it('lists crops including trees that are crops', () => {
    expect(cropList.map((p) => p.id)).toEqual(expect.arrayContaining(['coffee', 'oil-palm', 'olive']))
    expect(treeList.map((p) => p.id)).not.toContain('coffee')
  })

  it('shades crops by production and trees by recorded observations', () => {
    expect(shadingOf(plantById.get('coffee')!)!.source).toMatch(/FAO/)
    expect(topProducers(plantById.get('coffee')!)[0]).toBe('BR')
    expect(topProducers(plantById.get('tea')!)[0]).toBe('CN')
    expect(shadingOf(plantById.get('baobab')!)!.source).toBe('GBIF')
  })
})

describe('vegetation quizzes', () => {
  it('makes a photo round and a map round', () => {
    const photos = makePhotoRound('', new Set(), seeded(1))
    expect(photos).toHaveLength(10)
    for (const q of photos) expect(plantData(q.plant.id).photos).toContain(q.photo)
    const where = makeWhereRound('crop', new Set(), seeded(2))
    expect(where.every((q) => q.kind === 'producer' || q.plant.section === 'tree')).toBe(true)
  })

  it('accepts top producers for crops and clue countries for trees', () => {
    const coffee = { key: 'coffee', plant: plantById.get('coffee')!, ...whereAnswers(plantById.get('coffee')!) }
    expect(gradeWhere(coffee, { country: 'BR' }).points).toBe(1)
    expect(gradeWhere(coffee, { country: 'SE' }).points).toBe(0)
    const saguaro = { key: 'saguaro', plant: plantById.get('saguaro')!, ...whereAnswers(plantById.get('saguaro')!) }
    expect(saguaro.kind).toBe('clue')
    expect(gradeWhere(saguaro, { country: 'US' }).points).toBe(1)
  })
})
