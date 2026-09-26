import { describe, expect, it } from 'vitest'
import { scriptById } from '../../../content'
import { allLocations, grade, makeRound, quizScripts, snippet } from './scriptQuiz'

// Deterministic generator so tests are repeatable.
function seeded(seed: number) {
  return () => {
    seed = (seed * 1664525 + 1013904223) % 2 ** 32
    return seed / 2 ** 32
  }
}

describe('script quiz', () => {
  it('covers every script except Latin', () => {
    expect(quizScripts.map((s) => s.id)).not.toContain('latin')
    expect(quizScripts.length).toBe(28)
  })

  it('makes a round of 10 different scripts, each with a non-empty snippet', () => {
    const round = makeRound(seeded(1))
    expect(round).toHaveLength(10)
    expect(new Set(round.map((q) => q.script.id)).size).toBe(10)
    for (const q of round) expect(q.snippet.trim().length, q.script.id).toBeGreaterThan(0)
  })

  it('takes 3–5 words from spaced scripts', () => {
    const text = 'один два три четыре пять шесть семь восемь девять десять'
    for (let i = 0; i < 20; i++) {
      const n = snippet(text, 'cyrillic', seeded(i)).split(' ').length
      expect(n).toBeGreaterThanOrEqual(3)
      expect(n).toBeLessThanOrEqual(5)
    }
  })

  it('keeps Thai vowel marks attached to their consonant', () => {
    const s = snippet('มนุษย์ทั้งหลายเกิดมามีอิสระและเสมอภาคกัน', 'thai', seeded(3))
    expect(s).not.toMatch(/^[ัิ-ฺ็-๎]/) // doesn't start with a combining mark
  })

  it('grades script and location separately, accepting any valid location', () => {
    const q = { script: scriptById.get('tamil')!, snippet: 'தமிழ்' }
    expect(grade(q, { script: 'tamil', location: 'Sri Lanka' })).toMatchObject({ points: 2 })
    expect(grade(q, { script: 'tamil', location: 'Kerala, India' })).toMatchObject({ scriptCorrect: true, locationCorrect: false, points: 1 })
    expect(grade(q, { script: 'malayalam', location: 'Singapore' })).toMatchObject({ scriptCorrect: false, locationCorrect: true, points: 1 })
    expect(grade(q, { script: null, location: null }).points).toBe(0)
  })

  it('lists each location once', () => {
    expect(new Set(allLocations).size).toBe(allLocations.length)
    expect(allLocations).toContain('Kerala, India')
  })
})
