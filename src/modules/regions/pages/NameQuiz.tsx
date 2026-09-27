import { useState } from 'react'
import { Link } from 'react-router'
import { PickList } from '../../../components/PickList'
import { countryName, countryOf, regionById } from '../../../content/regions'
import { QuizShell } from '../../../quiz/QuizShell'
import { useQuiz } from '../../../quiz/useQuiz'
import { RegionMap } from '../maps'
import { CountryFilter } from '../quiz/CountryFilter'
import { gradeName, makeNameRound, regionOptions, regionQuizCrumbs, type CountryScope, type NameQuestion } from '../quiz/questions'

const regionName = (id: string) => regionById.get(id)?.name ?? id

export function NameQuiz() {
  const [scope, setScope] = useState<CountryScope>('')
  const quiz = useQuiz<NameQuestion, string | null>({
    id: 'region-name',
    make: (known) => makeNameRound(scope, known),
    grade: gradeName,
    empty: null,
  })
  const q = quiz.q
  const changeScope = (s: CountryScope) => {
    setScope(s)
    quiz.restart(undefined, (known) => makeNameRound(s, known))
  }

  return (
    <QuizShell
      title="Name the highlighted region"
      crumbs={regionQuizCrumbs}
      quiz={quiz}
      filter={<CountryFilter value={scope} onChange={changeScope} />}
      canCheck={quiz.answer !== null}
      knownLabel={regionName}
      feedback={(q) => (
        <>
          <p className="text-sm">
            It's <Link to={`/regions/${countryOf(q.region)}/${q.region.id}`} className="text-teal-700 underline dark:text-teal-400">{q.region.name}</Link>.
          </p>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-300">💡 {q.region.remember}</p>
        </>
      )}
      review={(q, a) => (
        <p className="text-sm">
          <Link to={`/regions/${countryOf(q.region)}/${q.region.id}`} className="font-semibold text-teal-700 underline dark:text-teal-400">{q.region.name}</Link>
          <span className="text-slate-500"> ({countryName(countryOf(q.region))}) · you said {a ? regionName(a) : '—'}</span>
        </p>
      )}
    >
      {q && (
        <>
          <p className="text-lg">Which {countryName(countryOf(q.region))} region is highlighted?</p>
          <RegionMap regions={[q.region]} hideLabels={!quiz.checked} />
          <PickList
            key={`${quiz.round[0]?.key}-${quiz.index}`}
            label="Region"
            options={regionOptions(countryOf(q.region))}
            value={quiz.answer}
            onChange={quiz.setAnswer}
            reveal={quiz.checked}
            isCorrect={(v) => v === q.region.id}
          />
        </>
      )}
    </QuizShell>
  )
}
