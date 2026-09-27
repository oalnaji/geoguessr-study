import { useState } from 'react'
import { Link } from 'react-router'
import type { MapFeature } from '../../../components/mapData'
import { PhotoCredit } from '../../../components/PhotoGallery'
import { cardClass } from '../../../components/ui'
import { WorldMap } from '../../../components/WorldMap'
import { countryName, countryOf, regionById } from '../../../content/regions'
import { QuizShell } from '../../../quiz/QuizShell'
import { useQuiz } from '../../../quiz/useQuiz'
import { countryFocus, SAME_COUNTRY, useRegionFeatures } from '../mapFocus'
import { CountryFilter } from '../quiz/CountryFilter'
import { gradeClue, makeClueRound, regionQuizCrumbs, type ClueQuestion, type CountryScope } from '../quiz/questions'

export function ClueQuiz() {
  const [scope, setScope] = useState<CountryScope>('')
  const { features, error } = useRegionFeatures()
  const quiz = useQuiz<ClueQuestion, MapFeature | null>({
    id: 'region-clue',
    make: (known) => makeClueRound(scope, known),
    grade: gradeClue,
    empty: null,
  })
  const q = quiz.q
  const changeScope = (s: CountryScope) => {
    setScope(s)
    quiz.restart(undefined, (known) => makeClueRound(s, known))
  }

  return (
    <QuizShell
      title="Which region is this?"
      crumbs={regionQuizCrumbs}
      quiz={quiz}
      filter={<CountryFilter value={scope} onChange={changeScope} />}
      canCheck={quiz.answer !== null}
      knownLabel={(id) => regionById.get(id)?.name ?? id}
      feedback={(q, a) => (
        <>
          {a && <p className="text-sm text-slate-600 dark:text-slate-400">You picked: {a.label}</p>}
          <p className="text-sm">
            It's <Link to={`/regions/${countryOf(q.region)}/${q.region.id}`} className="text-teal-700 underline dark:text-teal-400">{q.region.name}</Link>.
          </p>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-300">💡 {q.region.remember}</p>
        </>
      )}
      review={(q, a) => (
        <p className="text-sm">
          <Link to={`/regions/${countryOf(q.region)}/${q.region.id}`} className="font-semibold text-teal-700 underline dark:text-teal-400">{q.region.name}</Link>
          <span className="text-slate-500"> ({countryName(countryOf(q.region))}) · you picked {a?.label ?? '—'}</span>
        </p>
      )}
    >
      {q && (
        <>
          {q.photo && (
            <figure className="space-y-1">
              <img src={q.photo.url} alt="A view in the region" className="aspect-[16/9] w-full rounded-xl object-cover" />
              <figcaption><PhotoCredit photo={q.photo} /></figcaption>
            </figure>
          )}
          <div className={`${cardClass} space-y-2`}>
            <p className="text-sm text-slate-500">A region of {countryName(countryOf(q.region))}:</p>
            <ul className="list-disc space-y-1 pl-5">
              {q.hints.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </div>
          {features ? (
            <WorldMap
              key={`${quiz.round[0]?.key}-${quiz.index}`}
              features={features}
              focus={countryFocus(features, countryOf(q.region))}
              colorOf={(f) => (f.country === countryOf(q.region) ? SAME_COUNTRY : undefined)}
              selected={quiz.answer?.id ?? null}
              onSelect={quiz.setAnswer}
              reveal={quiz.checked}
              hideLabels
              isCorrect={(f) => f.id === q.region.id}
            />
          ) : (
            <p className={`${cardClass} text-center text-slate-500`}>{error ? 'The map could not be loaded.' : 'Loading map…'}</p>
          )}
        </>
      )}
    </QuizShell>
  )
}
