import type { ReactNode } from 'react'
import { cardClass, PageHeader } from '../../../components/ui'
import { groups } from '../../../content'
import type { QuizState } from './useQuiz'

export const buttonClass = 'rounded-lg bg-teal-700 px-5 py-3 font-semibold text-white disabled:opacity-40'
export const secondaryClass =
  'rounded-lg border border-slate-300 px-4 py-3 font-medium text-slate-700 hover:border-teal-600 dark:border-slate-700 dark:text-slate-300'

const crumbs = [{ to: '/languages', label: 'Languages' }, { to: '/languages/quizzes', label: 'Quizzes' }]

/** Group filter shown above a quiz. Changing it starts a new round. */
export function GroupFilter({ value, onChange, only }: { value: string; onChange: (v: string) => void; only?: (groupId: string) => boolean }) {
  return (
    <label className="flex flex-wrap items-center gap-2 text-sm">
      <span className="text-slate-500">Languages:</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900"
      >
        <option value="">All languages</option>
        {groups.filter((g) => !only || only(g.id)).map((g) => <option key={g.id} value={g.id}>{g.name}</option>)}
      </select>
    </label>
  )
}

/**
 * Frame shared by every quiz: header with progress, the question, feedback after checking, the
 * Check / Skip / "I know this one" buttons, and the end-of-round summary.
 */
export function QuizShell<Q extends { key: string }, A>({
  title, quiz, filter, children, canCheck, feedback, review, knownLabel, emptyText,
}: {
  title: string
  quiz: QuizState<Q, A>
  filter?: ReactNode
  /** The question and answer area for quiz.q */
  children: ReactNode
  canCheck: boolean
  /** Shown after checking */
  feedback: (q: Q, a: A, correct: boolean) => ReactNode
  /** One line per mistake in the summary */
  review: (q: Q, a: A) => ReactNode
  /** Readable name for an item in the "I know this one" list */
  knownLabel: (key: string) => string
  emptyText?: string
}) {
  const knownBar = quiz.known.size > 0 && (
    <p className="text-sm text-slate-500">
      Skipping {quiz.known.size} you know: {[...quiz.known].map(knownLabel).join(', ')}.{' '}
      <button onClick={quiz.resetKnown} className="text-teal-700 underline dark:text-teal-400">Reset</button>
    </p>
  )

  if (quiz.round.length === 0) {
    return (
      <div className="space-y-5">
        <PageHeader crumbs={crumbs} title={title} />
        {filter}
        <p className={cardClass}>{emptyText ?? 'No questions left here. You have marked them all as known.'}</p>
        {knownBar}
      </div>
    )
  }

  if (quiz.done) {
    const mistakes = quiz.results.filter((r) => r.grade.points < r.grade.max)
    return (
      <div className="space-y-6">
        <PageHeader crumbs={crumbs} title={title} />
        <div className={`${cardClass} text-center`}>
          <p className="text-sm uppercase tracking-wide text-slate-500">Score</p>
          <p className="text-5xl font-bold">{quiz.score} / {quiz.maxScore}</p>
          {quiz.skipped > 0 && <p className="mt-1 text-slate-500">{quiz.skipped} skipped</p>}
        </div>
        {mistakes.length > 0 && (
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Review</h2>
            <ul className="space-y-2">
              {mistakes.map((r, i) => <li key={i} className={`${cardClass} !p-3`}>{review(r.q, r.a)}</li>)}
            </ul>
          </section>
        )}
        <button onClick={() => quiz.restart()} className={buttonClass}>Play again</button>
        {knownBar}
      </div>
    )
  }

  const correct = quiz.grade ? quiz.grade.points === quiz.grade.max : false
  return (
    <div className="space-y-5">
      <PageHeader crumbs={crumbs} title={title}>
        <p className="text-sm text-slate-500">
          Question {quiz.index + 1} of {quiz.round.length} · Score {quiz.score}
          {quiz.skipped > 0 && ` · ${quiz.skipped} skipped`}
        </p>
      </PageHeader>
      {filter}
      {children}
      {quiz.checked && quiz.q ? (
        <div className="space-y-3">
          <div className={`${cardClass} !p-3`}>
            <p className="font-semibold">{correct ? 'Correct!' : 'Not this time.'}</p>
            {feedback(quiz.q, quiz.answer, correct)}
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={quiz.next} className={buttonClass}>
              {quiz.index + 1 === quiz.round.length ? 'See results' : 'Next question'}
            </button>
            {correct && <button onClick={quiz.knowIt} className={secondaryClass}>I know this one, don't ask again</button>}
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          <button onClick={quiz.check} disabled={!canCheck} className={buttonClass}>Check answer</button>
          <button onClick={quiz.skip} className={secondaryClass}>Skip</button>
          <button onClick={quiz.knowIt} className={secondaryClass}>I know this one</button>
        </div>
      )}
      {knownBar}
    </div>
  )
}
