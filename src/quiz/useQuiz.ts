import { useState } from 'react'
import { loadKnown, saveKnown, type Grade } from './engine'

export interface Result<Q, A> {
  q: Q
  a: A
  grade: Grade
}

/**
 * Round state for a quiz: current question, answer, checking, skipping, results, and the per-device
 * list of items the player marked as known. `make` builds a round, leaving out known items.
 */
export function useQuiz<Q extends { key: string }, A>(opts: {
  id: string
  make: (known: ReadonlySet<string>) => Q[]
  grade: (q: Q, a: A) => Grade
  empty: A
}) {
  const [known, setKnown] = useState(() => loadKnown(opts.id))
  const [round, setRound] = useState(() => opts.make(known))
  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState<A>(opts.empty)
  const [checked, setChecked] = useState(false)
  const [results, setResults] = useState<Result<Q, A>[]>([])
  const [skipped, setSkipped] = useState(0)

  const q = round[index] as Q | undefined
  const grade = checked && q ? opts.grade(q, answer) : null

  const updateKnown = (next: Set<string>) => {
    setKnown(next)
    saveKnown(opts.id, next)
  }
  const nextQuestion = () => {
    setIndex((i) => i + 1)
    setAnswer(opts.empty)
    setChecked(false)
  }
  /** New round. Pass `make` when the question pool changes in the same event (e.g. a new filter). */
  const restart = (knownNow: ReadonlySet<string> = known, make = opts.make) => {
    setRound(make(knownNow))
    setIndex(0)
    setAnswer(opts.empty)
    setChecked(false)
    setResults([])
    setSkipped(0)
  }

  return {
    round, index, q, answer, setAnswer, checked, grade, results, skipped, known,
    done: index >= round.length,
    score: results.reduce((n, r) => n + r.grade.points, 0),
    maxScore: results.reduce((n, r) => n + r.grade.max, 0),
    check: () => {
      if (!q) return
      setChecked(true)
      setResults((rs) => [...rs, { q, a: answer, grade: opts.grade(q, answer) }])
    },
    next: nextQuestion,
    skip: () => {
      setSkipped((n) => n + 1)
      nextQuestion()
    },
    /** Leave this item out of future rounds. Before checking it also counts as a skip. */
    knowIt: () => {
      if (!q) return
      updateKnown(new Set([...known, q.key]))
      if (!checked) setSkipped((n) => n + 1)
      nextQuestion()
    },
    restart,
    resetKnown: () => {
      updateKnown(new Set())
      restart(new Set())
    },
  }
}

export type QuizState<Q extends { key: string }, A> = ReturnType<typeof useQuiz<Q, A>>
