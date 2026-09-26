import { useState } from 'react'
import { Link } from 'react-router'
import { PickList } from '../../../components/PickList'
import { cardClass, Native } from '../../../components/ui'
import { languageName } from '../../../content'
import { gradeSignWord, languageOptions, makeSignWordRound, type SignWordQuestion } from '../quiz/questions'
import { GroupFilter, QuizShell } from '../quiz/QuizShell'
import { useQuiz } from '../quiz/useQuiz'

const answerLinks = (q: SignWordQuestion) =>
  q.answers.map((id, i) => (
    <span key={id}>
      {i > 0 && ', '}
      <Link to={`/languages/${id}`} className="text-teal-700 underline dark:text-teal-400">{languageName(id)}</Link>
    </span>
  ))

export function SignWordQuiz() {
  const [group, setGroup] = useState('')
  const quiz = useQuiz<SignWordQuestion, string | null>({
    id: 'signwords',
    make: (known) => makeSignWordRound(group, known),
    grade: gradeSignWord,
    empty: null,
  })
  const q = quiz.q
  const changeGroup = (g: string) => {
    setGroup(g)
    quiz.restart(undefined, (known) => makeSignWordRound(g, known))
  }

  return (
    <QuizShell
      title="Sign words"
      quiz={quiz}
      filter={<GroupFilter value={group} onChange={changeGroup} />}
      canCheck={quiz.answer !== null}
      knownLabel={(key) => {
        const [lang, , word] = key.split('|')
        return `${word} (${languageName(lang)})`
      }}
      feedback={(q) => (
        <p className="text-sm">
          "{q.word}" means {q.meaning.toLowerCase()} in {answerLinks(q)}.
        </p>
      )}
      review={(q, a) => (
        <p>
          <Native script={q.script} className="text-lg font-semibold">{q.word}</Native>
          <span className="text-slate-500"> = {q.meaning} · </span>
          {answerLinks(q)}
          <span className="text-sm text-slate-500"> · you said {a ? languageName(a) : '—'}</span>
        </p>
      )}
    >
      {q && (
        <>
          <div className={`${cardClass} text-center`}>
            <Native script={q.script} className="block text-4xl font-semibold sm:text-5xl">{q.word}</Native>
            <p className="mt-2 text-slate-600 dark:text-slate-400">means <span className="font-semibold">{q.meaning}</span></p>
          </div>
          <PickList
            key={`${quiz.round[0]?.key}-${quiz.index}`}
            label="Which language uses this word?"
            options={languageOptions(group)}
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
