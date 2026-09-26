import { Link } from 'react-router'
import { PickList } from '../../../components/PickList'
import { cardClass } from '../../../components/ui'
import { languageName } from '../../../content'
import { countryName, gradeRegion, languageOptions, makeRegionRound, type RegionQuestion, languageQuizCrumbs } from '../quiz/questions'
import { QuizShell } from '../../../quiz/QuizShell'
import { useQuiz } from '../../../quiz/useQuiz'

/** Area names without notes that would give the answer away ("(Sámi administrative area)", "Hindi belt:"). */
const areaLabel = (area: string) => area.replace(/\s*\(.*?\)/g, '').replace(/^Hindi belt:\s*/, '').trim()

const place = (q: RegionQuestion) => `${areaLabel(q.area)}, ${countryName(q.country)}`
const names = (ids: string[]) => ids.map(languageName).join(' or ')

export function RegionQuiz() {
  const quiz = useQuiz<RegionQuestion, string | null>({
    id: 'region',
    make: (known) => makeRegionRound(known),
    grade: gradeRegion,
    empty: null,
  })
  const q = quiz.q

  return (
    <QuizShell
      title="Region → language"
      crumbs={languageQuizCrumbs}
      quiz={quiz}
      canCheck={quiz.answer !== null}
      knownLabel={(key) => {
        const [country, area] = key.split('|')
        return `${areaLabel(area)} (${countryName(country)})`
      }}
      feedback={(q) => (
        <p className="text-sm">
          In {place(q)}, signs also use{' '}
          {q.answers.map((id, i) => (
            <span key={id}>
              {i > 0 && ' or '}
              <Link to={`/languages/${id}`} className="text-teal-700 underline dark:text-teal-400">{languageName(id)}</Link>
            </span>
          ))}
          .
        </p>
      )}
      review={(q, a) => (
        <p className="text-sm">
          <span className="font-semibold">{place(q)}</span>: {names(q.answers)}
          <span className="text-slate-500"> · you said {a ? languageName(a) : '—'}</span>
        </p>
      )}
    >
      {q && (
        <>
          <div className={`${cardClass} text-center`}>
            <p className="text-slate-600 dark:text-slate-400">Besides {q.besides.map((l) => l.name).join(' and ')}, which language is on signs in</p>
            <p className="mt-1 text-3xl font-bold">{areaLabel(q.area)}</p>
            <p className="text-lg text-slate-600 dark:text-slate-400">{countryName(q.country)}</p>
          </div>
          <PickList
            key={`${quiz.round[0]?.key}-${quiz.index}`}
            label="Language"
            options={languageOptions('')}
            value={quiz.answer}
            onChange={quiz.setAnswer}
            reveal={quiz.checked}
            isCorrect={(v) => q.answers.includes(v)}
          />
        </>
      )}
    </QuizShell>
  )
}
