import { describe, expect, it } from 'vitest'
import { activeModules, modules } from './registry'

describe('module registry', () => {
  it('has unique ids and paths', () => {
    expect(new Set(modules.map((m) => m.id)).size).toBe(modules.length)
    expect(new Set(modules.map((m) => m.path)).size).toBe(modules.length)
  })

  it('only routes modules that are active and have content', () => {
    expect(activeModules.map((m) => m.id)).toEqual(['languages', 'vegetation'])
  })
})
