// Shared pieces for every quiz: randomness, grading shape and the per-device "I know this one" list.

export type Rng = () => number

export const ROUND_LENGTH = 10

export interface Grade {
  points: number
  max: number
}

export const randInt = (rng: Rng, n: number) => Math.floor(rng() * n)

export function shuffle<T>(xs: readonly T[], rng: Rng): T[] {
  const a = [...xs]
  for (let i = a.length - 1; i > 0; i--) {
    const j = randInt(rng, i + 1)
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export const pick = <T,>(xs: readonly T[], rng: Rng): T => xs[randInt(rng, xs.length)]

/** Split into user-perceived characters, so combining marks stay with their letter. */
export const graphemes = (s: string) =>
  [...new Intl.Segmenter(undefined, { granularity: 'grapheme' }).segment(s)].map((g) => g.segment)

// ---- Items the player marked as known, per quiz (per device) ----------------------------------

const knownKey = (quizId: string) => `quiz.${quizId}.known`

export function loadKnown(quizId: string): Set<string> {
  try {
    const v = JSON.parse(localStorage.getItem(knownKey(quizId)) ?? '[]')
    return new Set(Array.isArray(v) ? v.filter((x) => typeof x === 'string') : [])
  } catch {
    return new Set()
  }
}

export function saveKnown(quizId: string, known: ReadonlySet<string>) {
  try {
    if (known.size) localStorage.setItem(knownKey(quizId), JSON.stringify([...known]))
    else localStorage.removeItem(knownKey(quizId))
  } catch {
    // Storage unavailable (private mode): the choice lasts for this session only.
  }
}
