import { useState } from 'react'
import { Link } from 'react-router'
import { cardClass, Native } from '../../../components/ui'
import { useMapFeatures, type MapFeature } from '../../../components/mapData'
import { WorldMap } from '../../../components/WorldMap'
import { groupById, languageName } from '../../../content'
import { countryName, gradeMap, isInTarget, makeMapRound, mapLanguages, type MapQuestion } from '../quiz/questions'
import { GroupFilter, QuizShell } from '../quiz/QuizShell'
import { useQuiz } from '../quiz/useQuiz'

const hasMapLanguages = (groupId: string) => groupById.get(groupId)!.members.some((id) => mapLanguages.some((l) => l.id === id))

export function MapQuiz() {
  const [group, setGroup] = useState('')
  const { features, error } = useMapFeatures()
  const quiz = useQuiz<MapQuestion, MapFeature | null>({
    id: 'map',
    make: (known) => makeMapRound(group, known),
    grade: gradeMap,
    empty: null,
  })
  const q = quiz.q
  const changeGroup = (g: string) => {
    setGroup(g)
    quiz.restart(undefined, (known) => makeMapRound(g, known))
  }

  /** "Spain: Catalonia, Valencia · Andorra" style list of where the answer is. */
  const where = (q: MapQuestion) => {
    const regionNames = q.target.regions.map((id) => features?.find((f) => f.id === id)?.label ?? id)
    return [...q.target.countries.map(countryName), ...regionNames].join(' · ')
  }

  return (
    <QuizShell
      title="Where is it on signs?"
      quiz={quiz}
      filter={<GroupFilter value={group} onChange={changeGroup} only={hasMapLanguages} />}
      canCheck={quiz.answer !== null}
      knownLabel={languageName}
      feedback={(q, a) => (
        <>
          {a && <p className="text-sm text-slate-600 dark:text-slate-400">You picked: {a.label}</p>}
          <p className="text-sm">
            <Link to={`/languages/${q.lang.id}`} className="text-teal-700 underline dark:text-teal-400">{q.lang.name}</Link> is common on signs in: {where(q)}
          </p>
        </>
      )}
      review={(q, a) => (
        <p className="text-sm">
          <Link to={`/languages/${q.lang.id}`} className="font-semibold text-teal-700 underline dark:text-teal-400">{q.lang.name}</Link>: {where(q)}
          <span className="text-slate-500"> · you picked {a?.label ?? '—'}</span>
        </p>
      )}
    >
      {q && (
        <>
          <div className={`${cardClass} text-center`}>
            <p className="text-slate-600 dark:text-slate-400">Where would you see signs in</p>
            <p className="mt-1 text-3xl font-bold">{q.lang.name}</p>
            <Native script={q.lang.script} className="text-lg text-slate-600 dark:text-slate-400">{q.lang.nativeName}</Native>
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
              isCorrect={(f) => isInTarget(q.target, f)}
            />
          ) : (
            <p className={`${cardClass} text-center text-slate-500`}>Loading map…</p>
          )}
        </>
      )}
    </QuizShell>
  )
}
