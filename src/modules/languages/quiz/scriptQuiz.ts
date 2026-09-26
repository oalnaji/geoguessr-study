import { scriptSamples, scripts } from '../../../content'
import { scriptLocations } from '../../../content/scripts/locations'
import type { Script, ScriptId } from '../../../content/types'

export type Rng = () => number

export interface ScriptQuestion {
  script: Script
  snippet: string
}

export interface ScriptAnswer {
  script: ScriptId | null
  location: string | null
}

export const ROUND_LENGTH = 10

/** Scripts that can appear in the quiz (every script with known locations). */
export const quizScripts = scripts.filter((s) => scriptLocations[s.id]?.length)

/** Every location that appears in any answer, alphabetically. */
export const allLocations = [...new Set(quizScripts.flatMap((s) => scriptLocations[s.id]!))].sort((a, b) => a.localeCompare(b))

// Scripts written without spaces between words: take a run of characters instead of words.
const NO_SPACES = new Set<ScriptId>(['thai', 'lao', 'khmer', 'myanmar', 'japanese', 'han', 'tibetan'])

const randInt = (rng: Rng, n: number) => Math.floor(rng() * n)

export function shuffle<T>(xs: T[], rng: Rng): T[] {
  const a = [...xs]
  for (let i = a.length - 1; i > 0; i--) {
    const j = randInt(rng, i + 1)
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** A short random excerpt of a script's sample text: 3–5 words, or 8–14 characters for unspaced scripts. */
export function snippet(text: string, scriptId: ScriptId, rng: Rng): string {
  const clean = text.replace(/[()[\]«»"“”.,;:!?،؛።፡]/g, ' ').replace(/\s+/g, ' ').trim()
  if (NO_SPACES.has(scriptId)) {
    // Segment by grapheme so combining vowel marks stay attached to their letter.
    const graphemes = [...new Intl.Segmenter(undefined, { granularity: 'grapheme' }).segment(clean.replace(/ /g, ''))].map((g) => g.segment)
    const len = Math.min(graphemes.length, 8 + randInt(rng, 7))
    const start = randInt(rng, Math.max(1, graphemes.length - len))
    return graphemes.slice(start, start + len).join('')
  }
  const words = clean.split(' ')
  const len = Math.min(words.length, 3 + randInt(rng, 3))
  const start = randInt(rng, Math.max(1, words.length - len))
  return words.slice(start, start + len).join(' ')
}

export function makeRound(rng: Rng = Math.random, length = ROUND_LENGTH): ScriptQuestion[] {
  return shuffle(quizScripts, rng)
    .slice(0, length)
    .map((script) => {
      const samples = scriptSamples(script)
      const sample = samples[randInt(rng, samples.length)]
      return { script, snippet: snippet(sample.text, script.id, rng) }
    })
}

export function grade(q: ScriptQuestion, a: ScriptAnswer) {
  const scriptCorrect = a.script === q.script.id
  const locationCorrect = a.location !== null && scriptLocations[q.script.id]!.includes(a.location)
  return { scriptCorrect, locationCorrect, points: Number(scriptCorrect) + Number(locationCorrect) }
}
