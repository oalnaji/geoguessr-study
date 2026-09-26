import type { Letter } from '../types'

/** "а=a б=b ы=soft_sign" → letters. Underscores in the romanisation become spaces. */
export const L = (pairs: string): Letter[] =>
  pairs
    .split(/\s+/)
    .filter(Boolean)
    .map((p) => {
      const i = p.indexOf('=')
      return { char: p.slice(0, i), roman: p.slice(i + 1).replace(/_/g, ' ') }
    })

/** Pairs a string of characters with a matching list of romanisations. */
export const zipLetters = (chars: string, romans: string): Letter[] => {
  const cs = [...chars]
  const rs = romans.split(/\s+/)
  if (cs.length !== rs.length) throw new Error(`zipLetters: ${cs.length} chars vs ${rs.length} romanisations`)
  return cs.map((char, i) => ({ char, roman: rs[i].replace(/_/g, ' ') }))
}
