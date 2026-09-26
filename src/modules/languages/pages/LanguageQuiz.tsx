import { useState } from 'react'
import { Link } from 'react-router'
import { PickList } from '../../../components/PickList'
import { cardClass, Native } from '../../../components/ui'
import { languageName } from '../../../content'
import { gradeLanguage, languageOptions, makeLanguageRound, type LanguageQuestion, languageQuizCrumbs } from '../quiz/questions'
import { QuizShell } from '../../../quiz/QuizShell'
import { GroupFilter } from '../quiz/GroupFilter'
import { useQuiz } from '../../../quiz/useQuiz'

export function LanguageQuiz() {
  const [group, setGroup] = useState('')
  const quiz = useQuiz<LanguageQuestion, string | null>({
    id: 'language',
    make: (known) => makeLanguageRound(group, known),
    grade: gradeLanguage,
    empty: null,
  })
  const q = quiz.q
  const changeGroup = (g: string) => {
    setGroup(g)
    quiz.restart(undefined, (known) => makeLanguageRound(g, known))
  }

  return (
    <QuizShell
      title="Identify the language"
      crumbs={languageQuizCrumbs}
      quiz={quiz}
      filter={<GroupFilter value={group} onChange={changeGroup} />}
      canCheck={quiz.answer !== null}
      knownLabel={languageName}
      feedback={(q) => (
        <>
          <p className="text-sm">
            It's <Link to={`/languages/${q.lang.id}`} className="text-teal-700 underline dark:text-teal-400">{q.lang.name}</Link>.
          </p>
          {q.lang.giveaways[0] && (
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Tip: <span className="font-semibold">{q.lang.giveaways[0].sign}</span>: {q.lang.giveaways[0].tip}
            </p>
          )}
        </>
      )}
      review={(q, a) => (
        <>
          <Native script={q.script} className="block text-lg">{q.snippet}</Native>
          <p className="text-sm">
            <Link to={`/languages/${q.lang.id}`} className="font-semibold text-teal-700 underline dark:text-teal-400">{q.lang.name}</Link>
            <span className="text-slate-500"> · you said {a ? languageName(a) : '—'}</span>
          </p>
        </>
      )}
    >
      {q && (
        <>
          <div className={`${cardClass} flex min-h-32 items-center justify-center text-center`}>
            <Native script={q.script} className={`text-3xl leading-relaxed sm:text-4xl ${q.script === 'mongolian' ? 'h-48' : ''}`}>
              {q.snippet}
            </Native>
          </div>
          <PickList
            key={`${quiz.round[0]?.key}-${quiz.index}`}
            label="Which language is this?"
            options={languageOptions(group)}
            value={quiz.answer}
            onChange={quiz.setAnswer}
            reveal={quiz.checked}
            isCorrect={(v) => v === q.lang.id}
          />
        </>
      )}
    </QuizShell>
  )
}
