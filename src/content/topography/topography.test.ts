import { describe, expect, it } from 'vitest'
import { countries } from '../countries'
import physical from '../generated/physical.topo.json'
import { landformPhotos, landforms, mountains, rivers } from '.'

type Topo = { objects: Record<string, { geometries: { properties: { id: string } }[] }> }
const drawn = new Set(Object.values((physical as unknown as Topo).objects).flatMap((o) => o.geometries.map((g) => g.properties.id)))

describe('mountains and rivers', () => {
  it('have unique ids, known countries, history, facts, a photo and a shape on the map', () => {
    expect(new Set(landforms.map((l) => l.id)).size).toBe(landforms.length)
    expect(mountains.length).toBeGreaterThanOrEqual(25)
    expect(rivers.length).toBeGreaterThanOrEqual(25)
    for (const l of landforms) {
      for (const c of l.countries) expect(countries[c], `${l.id}: ${c}`).toBeDefined()
      expect(l.history.length, l.id).toBeGreaterThan(0)
      expect(l.facts.length, l.id).toBeGreaterThan(0)
      expect(landformPhotos(l.id).length, l.id).toBeGreaterThan(0)
      expect(drawn.has(l.id), `${l.id} is not on the map`).toBe(true)
    }
  })
})
