import { Link } from 'react-router'
import type { MapFeature } from '../../../components/mapData'
import { useMapFeatures } from '../../../components/mapData'
import { cardClass } from '../../../components/ui'
import { WorldMap } from '../../../components/WorldMap'
import { explainerById, explainers, maskedObservation, type WhyExplainer } from '../../../content/why'
import { ROUND_LENGTH, shuffle, type Grade, type Rng } from '../../../quiz/engine'
import { QuizShell } from '../../../quiz/QuizShell'
import { useQuiz } from '../../../quiz/useQuiz'

interface WhyQuestion { key: string; explainer: WhyExplainer }

function makeRound(known: ReadonlySet<string>, rng: Rng = Math.random): WhyQuestion[] {
  // Only explainers limited to a smallish set of countries make a fair question.
  return shuffle(explainers.filter((e) => !known.has(e.id) && e.countries.length <= 20), rng)
    .slice(0, ROUND_LENGTH)
    .map((explainer) => ({ key: explainer.id, explainer }))
}

const grade = (q: WhyQuestion, a: MapFeature | null): Grade => ({ points: Number(a !== null && q.explainer.countries.includes(a.country)), max: 1 })

export function WhyQuiz() {
  const { features } = useMapFeatures('languages')
  const quiz = useQuiz<WhyQuestion, MapFeature | null>({ id: 'why-where', make: makeRound, grade, empty: null })
  const q = quiz.q
  return (
    <QuizShell
      title="Where is this typical?"
      crumbs={[{ to: '/why', label: 'Why Is It Like This?' }]}
      quiz={quiz}
      canCheck={quiz.answer !== null}
      knownLabel={(id) => explainerById.get(id)?.title ?? id}
      feedback={(q, a) => (
        <>
          {a && <p className="text-sm text-slate-600 dark:text-slate-400">You picked: {a.label}</p>}
          <p className="text-sm">{q.explainer.where}</p>
          <Link to={`/why/${q.explainer.id}`} className="text-sm text-teal-700 underline dark:text-teal-400">Why? Read the explainer</Link>
        </>
      )}
      review={(q, a) => (
        <p className="text-sm"><span className="font-semibold">{q.explainer.title}</span><span className="text-slate-500"> · you picked {a?.label ?? '—'}</span></p>
      )}
    >
      {q && (
        <>
          <div className={cardClass}><p className="leading-relaxed">{maskedObservation(q.explainer)}</p><p className="mt-2 text-sm text-slate-500">Tap a country where this is typical.</p></div>
          {features && (
            <WorldMap
              key={`${quiz.round[0]?.key}-${quiz.index}`}
              features={features}
              selected={quiz.answer?.id ?? null}
              onSelect={quiz.setAnswer}
              reveal={quiz.checked}
              isCorrect={(f) => q.explainer.countries.includes(f.country)}
            />
          )}
        </>
      )}
    </QuizShell>
  )
}
