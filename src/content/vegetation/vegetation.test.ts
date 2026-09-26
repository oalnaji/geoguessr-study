import { describe, expect, it } from 'vitest'
import { gradeWhere, makePhotoRound, makeWhereRound, whereAnswers } from '../../modules/vegetation/quiz/questions'
import { countries } from '../countries'
import vegMap from '../generated/map-veg.topo.json'
import { groupRemember, languageRemember, scriptRemember } from '../mnemonics'
import { groupById, languageById, scriptById } from '..'
import {
  clueTarget, cropList, forestList, inTarget, plantById, plantData, plants, regionsOf, shadingOf, topProducers, treeList, VEG_SPLIT,
} from '.'

function seeded(seed: number) {
  return () => {
    seed = (seed * 1664525 + 1013904223) % 2 ** 32
    return seed / 2 ** 32
  }
}

type Topo = { objects: Record<string, { geometries: { properties: { id: string; country: string } }[] }> }
const features = Object.values((vegMap as unknown as Topo).objects)[0].geometries.map((g) => g.properties)
const featureIds = new Set(features.map((f) => f.id))
const at = (id: string) => features.find((f) => f.id === id)!

describe('plants', () => {
  it('have unique ids and reference known plants and countries', () => {
    expect(new Set(plants.map((p) => p.id)).size).toBe(plants.length)
    for (const p of plants) {
      for (const c of p.clueCountries) expect(countries[c], `${p.id}: ${c}`).toBeDefined()
      for (const l of p.lookalikes) if (l.id) expect(plantById.has(l.id), `${p.id} → ${l.id}`).toBe(true)
    }
  })

  it('every plant has a credited photo, and almost all have several', () => {
    for (const p of plants) {
      const photos = plantData(p.id).photos
      expect(photos.length, p.id).toBeGreaterThanOrEqual(1)
      for (const ph of photos) {
        expect(ph.author, p.id).toBeTruthy()
        expect(ph.license, p.id).toBeTruthy()
        expect(ph.source, p.id).toMatch(/^https:\/\//)
      }
    }
    expect(plants.filter((p) => plantData(p.id).photos.length < 2).map((p) => p.id)).toEqual(['pampas'])
  })

  it('lists trees, crops and forests', () => {
    expect(cropList.map((p) => p.id)).toEqual(expect.arrayContaining(['coffee', 'oil-palm', 'olive']))
    expect(treeList.map((p) => p.id)).toEqual(expect.arrayContaining(['cardon', 'mandacaru', 'candelabra-euphorbia']))
    expect(forestList.map((p) => p.id)).toEqual(expect.arrayContaining(['birch-forest', 'taiga', 'cerrado']))
    for (const f of forestList) expect(f.latitude, f.id).toBeTruthy()
    for (const t of treeList) expect(t.group, t.id).toBeTruthy()
  })

  it('gives every plant a memory hook', () => {
    for (const p of plants) expect(p.remember?.length, p.id).toBeGreaterThan(0)
  })
})

describe('regions inside large countries', () => {
  it('lists regions for every clue country the vegetation map splits', () => {
    const split = new Set<string>(VEG_SPLIT)
    for (const p of plants) {
      const listed = regionsOf(p.id)
      for (const c of p.clueCountries.filter((c) => split.has(c))) {
        expect(listed.some((r) => r === c || r.startsWith(`${c}-`)), `${p.id} needs regions for ${c}`).toBe(true)
      }
      for (const r of listed) {
        expect(featureIds.has(r) || split.has(r), `${p.id}: ${r} is not on the vegetation map`).toBe(true)
        expect(p.clueCountries, `${p.id}: ${r} is outside its clue countries`).toContain(r.split('-')[0])
      }
    }
  })

  it('places plants precisely', () => {
    const saguaro = clueTarget(plantById.get('saguaro')!)
    expect(inTarget(saguaro, at('US-AZ'))).toBe(true)
    expect(inTarget(saguaro, at('US-TX'))).toBe(false)
    expect(inTarget(saguaro, at('MX-SON'))).toBe(true)
    const buriti = clueTarget(plantById.get('buriti')!)
    expect(inTarget(buriti, at('BR-GO'))).toBe(true)
    expect(inTarget(buriti, at('BR-RS'))).toBe(false)
    // Whole-country entries still cover every region
    expect(inTarget(clueTarget(plantById.get('birch')!), at('RU-OMS'))).toBe(true)
    // Countries the map does not split count whole
    expect(inTarget(clueTarget(plantById.get('birch')!), { id: 'FI', country: 'FI' })).toBe(true)
  })
})

describe('data shading', () => {
  it('shades crops by production and trees by recorded observations, with regions', () => {
    expect(shadingOf(plantById.get('coffee')!)!.source).toMatch(/FAO/)
    expect(topProducers(plantById.get('coffee')!)[0]).toBe('BR')
    expect(topProducers(plantById.get('tea')!)[0]).toBe('CN')
    const baobab = shadingOf(plantById.get('baobab')!)!
    expect(baobab.source).toBe('GBIF')
    expect(Object.keys(baobab.values).some((k) => k.startsWith('ZA-'))).toBe(true)
  })
})

describe('vegetation quizzes', () => {
  it('makes a photo round and a map round', () => {
    const photos = makePhotoRound('', new Set(), seeded(1))
    expect(photos).toHaveLength(10)
    for (const q of photos) expect(plantData(q.plant.id).photos).toContain(q.photo)
    expect(makeWhereRound('forest', new Set(), seeded(2)).every((q) => q.plant.section === 'forest')).toBe(true)
  })

  it('grades the map by region in large countries', () => {
    const coffee = { key: 'coffee', plant: plantById.get('coffee')!, ...whereAnswers(plantById.get('coffee')!) }
    expect(gradeWhere(coffee, at('BR-MG')).points).toBe(1)
    expect(gradeWhere(coffee, at('BR-RS')).points).toBe(0)
    expect(gradeWhere(coffee, { id: 'SE', country: 'SE' }).points).toBe(0)
    const cardon = { key: 'cardon', plant: plantById.get('cardon')!, ...whereAnswers(plantById.get('cardon')!) }
    expect(gradeWhere(cardon, at('MX-BCS')).points).toBe(1)
    expect(gradeWhere(cardon, at('MX-YUC')).points).toBe(0)
  })
})

describe('memory hooks for languages', () => {
  it('only refer to existing languages, scripts and groups', () => {
    for (const id of Object.keys(languageRemember)) expect(languageById.has(id), id).toBe(true)
    for (const id of Object.keys(scriptRemember)) expect(scriptById.has(id as never), id).toBe(true)
    for (const id of Object.keys(groupRemember)) expect(groupById.has(id), id).toBe(true)
    expect(scriptById.get('thai')!.remember?.length).toBeGreaterThan(0)
  })
})
