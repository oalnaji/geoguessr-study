import { describe, expect, it } from 'vitest'
import { resolveDark } from './theme'

describe('resolveDark', () => {
  it('follows the system when set to system', () => {
    expect(resolveDark('system', true)).toBe(true)
    expect(resolveDark('system', false)).toBe(false)
  })

  it('overrides the system when set explicitly', () => {
    expect(resolveDark('dark', false)).toBe(true)
    expect(resolveDark('light', true)).toBe(false)
  })
})
