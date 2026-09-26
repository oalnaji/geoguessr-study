import { useState } from 'react'
import { Link } from 'react-router'
import { cardClass, Native } from '../../../components/ui'
import { groupById, languageName, uniqueLetters } from '../../../content'
import { giveawayLanguages, gradeGiveaway, makeGiveawayRound, type GiveawayQuestion, languageQuizCrumbs } from '../quiz/questions'
import { QuizShell } from '../../../quiz/QuizShell'
import { GroupFilter } from '../quiz/GroupFilter'
import { useQuiz } from '../../../quiz/useQuiz'

const hasGiveawayLanguages = (groupId: string) =>
  groupById.get(groupId)!.members.some((id) => giveawayLanguages.some((l) => l.id === id))

function Letters({ q, tapped, checked, onTap }: { q: GiveawayQuestion; tapped: number | null; checked: boolean; onTap: (i: number) => void }) {
  return (
    <div className={`${cardClass} flex flex-wrap items-end justify-center gap-y-3 text-center`} dir="auto">
      {q.chars.map((c, i) => {
        if (c === ' ') return <span key={i} className="w-4" />
        const isGiveaway = q.giveaways.includes(i)
        const state = checked
          ? isGiveaway
            ? 'bg-teal-100 text-teal-900 ring-2 ring-teal-600 dark:bg-teal-950 dark:text-teal-200'
            : i === tapped
              ? 'bg-rose-100 text-rose-900 ring-2 ring-rose-500 dark:bg-rose-950 dark:text-rose-200'
              : ''
          : i === tapped
            ? 'bg-teal-700 text-white'
            : 'hover:bg-slate-100 dark:hover:bg-slate-800'
        return (
          <button
            key={i}
            type="button"
            disabled={checked}
            onClick={() => onTap(i)}
            aria-pressed={i === tapped}
            className={`min-w-9 rounded-md px-1 py-1 text-3xl sm:text-4xl ${state}`}
          >
            <Native script={q.script}>{c}</Native>
          </button>
        )
      })}
    </div>
  )
}

export function GiveawayQuiz() {
  const [group, setGroup] = useState('')
  const quiz = useQuiz<GiveawayQuestion, number | null>({
    id: 'giveaway',
    make: (known) => makeGiveawayRound(group, known),
    grade: gradeGiveaway,
    empty: null,
  })
  const q = quiz.q
  const changeGroup = (g: string) => {
    setGroup(g)
    quiz.restart(undefined, (known) => makeGiveawayRound(g, known))
  }
  const giveawayList = (q: GiveawayQuestion) => uniqueLetters(q.lang).join(' ')

  return (
    <QuizShell
      title="Spot the giveaway"
      crumbs={languageQuizCrumbs}
      quiz={quiz}
      filter={<GroupFilter value={group} onChange={changeGroup} only={hasGiveawayLanguages} />}
      canCheck={quiz.answer !== null}
      knownLabel={languageName}
      feedback={(q) => (
        <p className="text-sm">
          It's <Link to={`/languages/${q.lang.id}`} className="text-teal-700 underline dark:text-teal-400">{q.lang.name}</Link>.
          Letters only {q.lang.name} uses: <Native script={q.script} className="text-lg font-semibold">{giveawayList(q)}</Native>
          {q.lang.remember?.[0] && <span className="mt-1 block text-amber-800 dark:text-amber-300">💡 {q.lang.remember[0]}</span>}
        </p>
      )}
      review={(q) => (
        <p>
          <Native script={q.script} className="text-lg">{q.chars.join('')}</Native>
          <span className="text-sm">
            {' '}· <Link to={`/languages/${q.lang.id}`} className="font-semibold text-teal-700 underline dark:text-teal-400">{q.lang.name}</Link>:{' '}
            <Native script={q.script} className="font-semibold">{giveawayList(q)}</Native>
          </span>
        </p>
      )}
    >
      {q && (
        <>
          <p className="text-slate-600 dark:text-slate-400">Tap the letter that proves which language this is.</p>
          <Letters q={q} tapped={quiz.answer} checked={quiz.checked} onTap={quiz.setAnswer} />
        </>
      )}
    </QuizShell>
  )
}
