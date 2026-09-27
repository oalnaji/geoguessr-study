import { useState } from 'react'
import { Link } from 'react-router'
import type { MapFeature } from '../../../components/mapData'
import { PhotoCredit } from '../../../components/PhotoGallery'
import { cardClass } from '../../../components/ui'
import { WorldMap } from '../../../components/WorldMap'
import { countryName, featureById } from '../../../content/regions'
import { QuizShell } from '../../../quiz/QuizShell'
import { useQuiz } from '../../../quiz/useQuiz'
import { countryFocus, featureImages, markersFor, SAME_COUNTRY, useRegionFeatures } from '../mapFocus'
import { CountryFilter } from '../quiz/CountryFilter'
import { gradeFeature, makeFeatureRound, regionQuizCrumbs, type CountryScope, type FeatureQuestion } from '../quiz/questions'

export function FeatureQuiz() {
  const [scope, setScope] = useState<CountryScope>('')
  const { features, error } = useRegionFeatures()
  const quiz = useQuiz<FeatureQuestion, MapFeature | null>({
    id: 'region-feature',
    make: (known) => makeFeatureRound(scope, known),
    grade: gradeFeature,
    empty: null,
  })
  const q = quiz.q
  const changeScope = (s: CountryScope) => {
    setScope(s)
    quiz.restart(undefined, (known) => makeFeatureRound(s, known))
  }
  const photo = q ? featureImages(q.feature)[0] : undefined

  return (
    <QuizShell
      title="Where is this found?"
      crumbs={regionQuizCrumbs}
      quiz={quiz}
      filter={<CountryFilter value={scope} onChange={changeScope} />}
      canCheck={quiz.answer !== null}
      knownLabel={(id) => featureById.get(id)?.title ?? id}
      feedback={(q, a) => (
        <>
          {a && <p className="text-sm text-slate-600 dark:text-slate-400">You picked: {a.label}</p>}
          <p className="text-sm">Found in the {q.feature.regions.length} green region{q.feature.regions.length === 1 ? '' : 's'}. {q.feature.text}</p>
          <Link to={`/regions/${q.country}?tab=features`} className="text-sm text-teal-700 underline dark:text-teal-400">All features of {countryName(q.country)}</Link>
        </>
      )}
      review={(q, a) => (
        <p className="text-sm">
          <span className="font-semibold">{q.feature.title}</span>
          <span className="text-slate-500"> ({countryName(q.country)}) · you picked {a?.label ?? '—'}</span>
        </p>
      )}
    >
      {q && (
        <>
          <div className={`${cardClass} space-y-2`}>
            <p className="text-sm text-slate-500">{countryName(q.country)} · {q.feature.category}</p>
            <p className="text-2xl font-bold">{q.feature.title}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Tap any region where this is found.</p>
          </div>
          {photo && (
            <figure className="space-y-1">
              <img src={photo.url} alt="" className="aspect-[16/9] w-full rounded-xl object-cover" />
              <figcaption><PhotoCredit photo={photo} /></figcaption>
            </figure>
          )}
          {features ? (
            <WorldMap
              key={`${quiz.round[0]?.key}-${quiz.index}`}
              features={features}
              focus={countryFocus(features, q.country)}
              colorOf={(f) => (f.country === q.country ? SAME_COUNTRY : undefined)}
              markers={quiz.checked ? markersFor(features.filter((f) => q.feature.regions.includes(f.id)), countryFocus(features, q.country)) : []}
              selected={quiz.answer?.id ?? null}
              onSelect={quiz.setAnswer}
              reveal={quiz.checked}
              hideLabels
              isCorrect={(f) => q.feature.regions.includes(f.id)}
            />
          ) : (
            <p className={`${cardClass} text-center text-slate-500`}>{error ? 'The map could not be loaded.' : 'Loading map…'}</p>
          )}
        </>
      )}
    </QuizShell>
  )
}
