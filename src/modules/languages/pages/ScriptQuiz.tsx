import { useState } from 'react'
import { Link } from 'react-router'
import { PickList } from '../../../components/PickList'
import { cardClass, Native, PageHeader } from '../../../components/ui'
import { scriptLocations } from '../../../content/scripts/locations'
import type { ScriptId } from '../../../content/types'
import {
  allLocations, grade, loadKnown, makeRound, quizScripts, saveKnown, type ScriptAnswer, type ScriptQuestion,
} from '../quiz/scriptQuiz'

const scriptOptions = [...quizScripts]
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((s) => ({ value: s.id, label: s.name }))
const locationOptions = allLocations.map((l) => ({ value: l, label: l }))
const scriptName = (id: string) => scriptOptions.find((o) => o.value === id)?.label ?? id

const buttonClass = 'rounded-lg bg-teal-700 px-5 py-3 font-semibold text-white disabled:opacity-40'
const secondaryClass =
  'rounded-lg border border-slate-300 px-4 py-3 font-medium text-slate-700 hover:border-teal-600 dark:border-slate-700 dark:text-slate-300'

interface Result {
  q: ScriptQuestion
  a: ScriptAnswer
  points: number
  scriptCorrect: boolean
  locationCorrect: boolean
}

/** Shows which scripts are left out of rounds, with a way to bring them back. */
function KnownBar({ known, onReset }: { known: Set<string>; onReset: () => void }) {
  if (!known.size) return null
  return (
    <p className="text-sm text-slate-500">
      Skipping {known.size} script{known.size === 1 ? '' : 's'} you know: {[...known].map(scriptName).join(', ')}.{' '}
      <button onClick={onReset} className="text-teal-700 underline dark:text-teal-400">Reset</button>
    </p>
  )
}

function Summary({ results, skipped, onRestart }: { results: Result[]; skipped: number; onRestart: () => void }) {
  const score = results.reduce((n, r) => n + r.points, 0)
  const mistakes = results.filter((r) => r.points < 2)
  return (
    <div className="space-y-6">
      <div className={`${cardClass} text-center`}>
        <p className="text-sm uppercase tracking-wide text-slate-500">Score</p>
        <p className="text-5xl font-bold">{score} / {results.length * 2}</p>
        <p className="mt-1 text-slate-600 dark:text-slate-400">
          Scripts {results.filter((r) => r.scriptCorrect).length}/{results.length} · Places {results.filter((r) => r.locationCorrect).length}/{results.length}
          {skipped > 0 && ` · ${skipped} skipped`}
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
                  You said: {r.a.script ? scriptName(r.a.script) : '—'}, {r.a.location ?? '—'}
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
  const [known, setKnown] = useState(loadKnown)
  const [round, setRound] = useState(() => makeRound(Math.random, undefined, known))
  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState<ScriptAnswer>({ script: null, location: null })
  const [checked, setChecked] = useState(false)
  const [results, setResults] = useState<Result[]>([])
  const [skipped, setSkipped] = useState(0)

  const restart = (knownNow = known) => {
    setRound(makeRound(Math.random, undefined, knownNow))
    setIndex(0)
    setAnswer({ script: null, location: null })
    setChecked(false)
    setResults([])
    setSkipped(0)
  }
  const updateKnown = (next: Set<string>) => {
    setKnown(next)
    saveKnown(next)
  }
  const resetKnown = () => {
    updateKnown(new Set())
    restart(new Set())
  }

  const crumbs = [{ to: '/languages', label: 'Languages' }, { to: '/languages/quizzes', label: 'Quizzes' }]

  if (round.length === 0) {
    return (
      <div className="space-y-6">
        <PageHeader crumbs={crumbs} title="Identify the script" />
        <p className={cardClass}>You've marked every script as known. Nice work!</p>
        <button onClick={resetKnown} className={buttonClass}>Bring them all back</button>
      </div>
    )
  }

  if (index >= round.length) {
    return (
      <div className="space-y-6">
        <PageHeader crumbs={crumbs} title="Identify the script" />
        <Summary results={results} skipped={skipped} onRestart={() => restart()} />
        <KnownBar known={known} onReset={resetKnown} />
      </div>
    )
  }

  const q = round[index]
  const result = checked ? grade(q, answer) : null
  const score = results.reduce((n, r) => n + r.points, 0)

  const next = () => {
    setIndex((i) => i + 1)
    setAnswer({ script: null, location: null })
    setChecked(false)
  }
  const check = () => {
    setChecked(true)
    setResults((rs) => [...rs, { q, a: answer, ...grade(q, answer) }])
  }
  const skip = () => {
    setSkipped((n) => n + 1)
    next()
  }
  const skipForever = () => {
    updateKnown(new Set([...known, q.script.id]))
    skip()
  }

  return (
    <div className="space-y-5">
      <PageHeader crumbs={crumbs} title="Identify the script">
        <p className="text-sm text-slate-500">
          Question {index + 1} of {round.length} · Score {score}
          {skipped > 0 && ` · ${skipped} skipped`}
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
            {q.script.remember?.[0] && <p className="mt-1 text-sm text-amber-800 dark:text-amber-300">💡 {q.script.remember[0]}</p>}
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={next} className={buttonClass}>
              {index + 1 === round.length ? 'See results' : 'Next question'}
            </button>
            {result.points === 2 && (
              <button onClick={() => { updateKnown(new Set([...known, q.script.id])); next() }} className={secondaryClass}>
                I know this one, don't ask again
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          <button onClick={check} disabled={!answer.script || !answer.location} className={buttonClass}>
            Check answer
          </button>
          <button onClick={skip} className={secondaryClass}>Skip</button>
          <button onClick={skipForever} className={secondaryClass}>I know this one</button>
        </div>
      )}

      <KnownBar known={known} onReset={resetKnown} />
    </div>
  )
}
