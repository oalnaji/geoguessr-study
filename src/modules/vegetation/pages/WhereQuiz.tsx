import { useState } from 'react'
import { Link } from 'react-router'
import { useMapFeatures, type MapFeature } from '../../../components/mapData'
import { cardClass } from '../../../components/ui'
import { WorldMap } from '../../../components/WorldMap'
import { countries } from '../../../content/countries'
import { inTarget, plantById, plantData } from '../../../content/vegetation'
import { QuizShell } from '../../../quiz/QuizShell'
import { useQuiz } from '../../../quiz/useQuiz'
import { gradeWhere, makeWhereRound, vegetationQuizCrumbs, type PlantScope, type WhereQuestion } from '../quiz/questions'
import { ScopeFilter } from '../quiz/ScopeFilter'

const countryList = (codes: string[]) => codes.map((c) => countries[c]?.name ?? c).join(', ')

export function WhereQuiz() {
  const [scope, setScope] = useState<PlantScope>('')
  const { features, error } = useMapFeatures('vegetation')
  const quiz = useQuiz<WhereQuestion, MapFeature | null>({
    id: 'plant-where',
    make: (known) => makeWhereRound(scope, known),
    grade: gradeWhere,
    empty: null,
  })
  const q = quiz.q
  const changeScope = (s: PlantScope) => {
    setScope(s)
    quiz.restart(undefined, (known) => makeWhereRound(s, known))
  }
  const what = (q: WhereQuestion) => (q.kind === 'producer' ? 'Top producers' : 'A useful clue in')

  return (
    <QuizShell
      title="Where does it grow?"
      crumbs={vegetationQuizCrumbs}
      quiz={quiz}
      filter={<ScopeFilter value={scope} onChange={changeScope} />}
      canCheck={quiz.answer !== null}
      knownLabel={(id) => plantById.get(id)?.name ?? id}
      feedback={(q, a) => (
        <>
          {a && <p className="text-sm text-slate-600 dark:text-slate-400">You picked: {a.label}</p>}
          <p className="text-sm">
            <Link to={`/vegetation/${q.plant.id}`} className="text-teal-700 underline dark:text-teal-400">{q.plant.name}</Link>. {what(q)}: {countryList(q.countries)}
            {q.target.regions.length > 0 && ' (in large countries, only the highlighted regions)'}
          </p>
        </>
      )}
      review={(q, a) => (
        <p className="text-sm">
          <Link to={`/vegetation/${q.plant.id}`} className="font-semibold text-teal-700 underline dark:text-teal-400">{q.plant.name}</Link>: {countryList(q.countries)}
          <span className="text-slate-500"> · you picked {a?.label ?? '—'}</span>
        </p>
      )}
    >
      {q && (
        <>
          <div className={`${cardClass} flex items-center gap-4`}>
            {plantData(q.plant.id).photos[0] && (
              <img src={plantData(q.plant.id).photos[0].url} alt="" className="h-20 w-28 shrink-0 rounded-md object-cover" />
            )}
            <div>
              <p className="text-2xl font-bold">{q.plant.name}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {q.kind === 'producer'
                  ? 'Tap a region in one of the 10 biggest producing countries.'
                  : 'Tap a country or region where seeing it is a useful GeoGuessr clue.'}
              </p>
            </div>
          </div>
          {error ? (
            <p className={cardClass}>The map could not be loaded. Check your connection and reload.</p>
          ) : features ? (
            <WorldMap
              key={`${quiz.round[0]?.key}-${quiz.index}`}
              features={features}
              selected={quiz.answer?.id ?? null}
              onSelect={quiz.setAnswer}
              reveal={quiz.checked}
              isCorrect={(f) => inTarget(q.target, f)}
            />
          ) : (
            <p className={`${cardClass} text-center text-slate-500`}>Loading map…</p>
          )}
        </>
      )}
    </QuizShell>
  )
}
