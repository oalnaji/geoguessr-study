import { useState } from 'react'
import { Link } from 'react-router'
import { PickList } from '../../../components/PickList'
import { cardClass, Native, PageHeader } from '../../../components/ui'
import { scriptLocations } from '../../../content/scripts/locations'
import type { ScriptId } from '../../../content/types'
import { allLocations, grade, makeRound, quizScripts, type ScriptAnswer, type ScriptQuestion } from '../quiz/scriptQuiz'

const scriptOptions = [...quizScripts]
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((s) => ({ value: s.id, label: s.name }))
const locationOptions = allLocations.map((l) => ({ value: l, label: l }))

const buttonClass = 'rounded-lg bg-teal-700 px-5 py-3 font-semibold text-white disabled:opacity-40'

interface Result {
  q: ScriptQuestion
  a: ScriptAnswer
  points: number
  scriptCorrect: boolean
  locationCorrect: boolean
}

function Summary({ results, onRestart }: { results: Result[]; onRestart: () => void }) {
  const score = results.reduce((n, r) => n + r.points, 0)
  const mistakes = results.filter((r) => r.points < 2)
  return (
    <div className="space-y-6">
      <div className={`${cardClass} text-center`}>
        <p className="text-sm uppercase tracking-wide text-slate-500">Score</p>
        <p className="text-5xl font-bold">{score} / {results.length * 2}</p>
        <p className="mt-1 text-slate-600 dark:text-slate-400">
          Scripts {results.filter((r) => r.scriptCorrect).length}/{results.length} · Places {results.filter((r) => r.locationCorrect).length}/{results.length}
        </p>
      </div>
      {mistakes.length > 0 && (
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Review</h2>
          <ul className="space-y-2">
            {mistakes.map((r, i) => (
              <li key={i} className={`${cardClass} !p-3`}>
                <Native script={r.q.script.id} className="block text-xl">{r.q.snippet}</Native>
                <p className="mt-1 text-sm">
                  <Link to={`/languages/scripts/${r.q.script.id}`} className="font-semibold text-teal-700 underline dark:text-teal-400">
                    {r.q.script.name}
                  </Link>
                  {' '}— seen in {scriptLocations[r.q.script.id]!.join(' · ')}
                </p>
                <p className="text-sm text-slate-500">
                  You said: {r.a.script ? scriptOptions.find((o) => o.value === r.a.script)?.label : '—'}, {r.a.location ?? '—'}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
      <button onClick={onRestart} className={buttonClass}>Play again</button>
    </div>
  )
}

export function ScriptQuiz() {
  const [round, setRound] = useState(() => makeRound())
  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState<ScriptAnswer>({ script: null, location: null })
  const [checked, setChecked] = useState(false)
  const [results, setResults] = useState<Result[]>([])

  const restart = () => {
    setRound(makeRound())
    setIndex(0)
    setAnswer({ script: null, location: null })
    setChecked(false)
    setResults([])
  }

  const crumbs = [{ to: '/languages', label: 'Languages' }, { to: '/languages/quizzes', label: 'Quizzes' }]

  if (index >= round.length) {
    return (
      <div className="space-y-6">
        <PageHeader crumbs={crumbs} title="Identify the script" />
        <Summary results={results} onRestart={restart} />
      </div>
    )
  }

  const q = round[index]
  const result = checked ? grade(q, answer) : null
  const score = results.reduce((n, r) => n + r.points, 0)

  const check = () => {
    setChecked(true)
    setResults((rs) => [...rs, { q, a: answer, ...grade(q, answer) }])
  }
  const next = () => {
    setIndex((i) => i + 1)
    setAnswer({ script: null, location: null })
    setChecked(false)
  }

  return (
    <div className="space-y-5">
      <PageHeader crumbs={crumbs} title="Identify the script">
        <p className="text-sm text-slate-500">
          Question {index + 1} of {round.length} · Score {score}
        </p>
      </PageHeader>

      <div className={`${cardClass} flex min-h-32 items-center justify-center overflow-hidden text-center`}>
        <Native
          script={q.script.id}
          className={`text-4xl leading-relaxed sm:text-5xl ${q.script.id === 'mongolian' ? 'h-48' : ''}`}
        >
          {q.snippet}
        </Native>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <PickList
          key={`script-${index}`}
          label="Script"
          options={scriptOptions}
          value={answer.script}
          onChange={(v) => setAnswer((a) => ({ ...a, script: v as ScriptId }))}
          reveal={checked}
          isCorrect={(v) => v === q.script.id}
        />
        <PickList
          key={`place-${index}`}
          label="Where would you see it?"
          options={locationOptions}
          value={answer.location}
          onChange={(v) => setAnswer((a) => ({ ...a, location: v }))}
          reveal={checked}
          isCorrect={(v) => scriptLocations[q.script.id]!.includes(v)}
        />
      </div>

      {result ? (
        <div className="space-y-3">
          <div className={`${cardClass} !p-3`}>
            <p className="font-semibold">
              {result.points === 2 ? 'Both right!' : result.points === 1 ? 'Half right.' : 'Not this time.'}{' '}
              It's <Link to={`/languages/scripts/${q.script.id}`} className="text-teal-700 underline dark:text-teal-400">{q.script.name}</Link>.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Seen in: {scriptLocations[q.script.id]!.join(' · ')}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Tip: {q.script.recognise[0]}</p>
          </div>
          <button onClick={next} className={buttonClass}>
            {index + 1 === round.length ? 'See results' : 'Next question'}
          </button>
        </div>
      ) : (
        <button onClick={check} disabled={!answer.script || !answer.location} className={buttonClass}>
          Check answer
        </button>
      )}
    </div>
  )
}
