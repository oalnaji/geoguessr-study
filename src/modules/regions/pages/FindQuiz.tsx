import { useState } from 'react'
import { Link } from 'react-router'
import type { MapFeature } from '../../../components/mapData'
import { cardClass } from '../../../components/ui'
import { WorldMap } from '../../../components/WorldMap'
import { countryName, regionById, studyByCountry } from '../../../content/regions'
import { QuizShell } from '../../../quiz/QuizShell'
import { useQuiz } from '../../../quiz/useQuiz'
import { countryFocus, markersFor, SAME_COUNTRY, useRegionFeatures } from '../mapFocus'
import { CountryFilter } from '../quiz/CountryFilter'
import { gradeFind, makeFindRound, regionQuizCrumbs, type CountryScope, type FindQuestion } from '../quiz/questions'

const keyLabel = (key: string) => regionById.get(key)?.name ?? key.split(':')[1] ?? key

export function FindQuiz() {
  const [scope, setScope] = useState<CountryScope>('')
  const { features, error } = useRegionFeatures()
  const quiz = useQuiz<FindQuestion, MapFeature | null>({
    id: 'region-find',
    make: (known) => makeFindRound(scope, known),
    grade: gradeFind,
    empty: null,
  })
  const q = quiz.q
  const changeScope = (s: CountryScope) => {
    setScope(s)
    quiz.restart(undefined, (known) => makeFindRound(s, known))
  }
  const link = (q: FindQuestion) => (q.region ? `/regions/${q.country}/${q.region.id}` : `/regions/${q.country}`)

  return (
    <QuizShell
      title="Find it on the map"
      crumbs={regionQuizCrumbs}
      quiz={quiz}
      filter={<CountryFilter value={scope} onChange={changeScope} />}
      canCheck={quiz.answer !== null}
      knownLabel={keyLabel}
      feedback={(q, a) => (
        <>
          {a && <p className="text-sm text-slate-600 dark:text-slate-400">You picked: {a.label}</p>}
          <p className="text-sm">
            <Link to={link(q)} className="text-teal-700 underline dark:text-teal-400">{q.label}</Link> is shown in green.
          </p>
          {q.region && <p className="mt-1 text-sm text-amber-800 dark:text-amber-300">💡 {q.region.remember}</p>}
          {q.group && <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{studyByCountry.get(q.country)?.groups.find((g) => g.name === q.group)?.blurb}</p>}
        </>
      )}
      review={(q, a) => (
        <p className="text-sm">
          <Link to={link(q)} className="font-semibold text-teal-700 underline dark:text-teal-400">{q.label}</Link>
          <span className="text-slate-500"> ({countryName(q.country)}) · you picked {a?.label ?? '—'}</span>
        </p>
      )}
    >
      {q && (
        <>
          <div className={cardClass}>
            <p className="text-sm text-slate-500">{countryName(q.country)}{q.group ? ` · ${q.targets.length} regions: any of them counts` : ''}</p>
            <p className="text-2xl font-bold">{q.group ? `Tap the ${q.group}` : q.label}</p>
          </div>
          {features ? (
            <WorldMap
              key={`${quiz.round[0]?.key}-${quiz.index}`}
              features={features}
              focus={countryFocus(features, q.country)}
              markers={quiz.checked ? markersFor(features.filter((f) => q.targets.includes(f.id)), countryFocus(features, q.country)) : []}
              colorOf={(f) => (f.country === q.country ? SAME_COUNTRY : undefined)}
              selected={quiz.answer?.id ?? null}
              onSelect={quiz.setAnswer}
              reveal={quiz.checked}
              hideLabels
              isCorrect={(f) => q.targets.includes(f.id)}
            />
          ) : (
            <p className={`${cardClass} text-center text-slate-500`}>{error ? 'The map could not be loaded.' : 'Loading map…'}</p>
          )}
        </>
      )}
    </QuizShell>
  )
}
