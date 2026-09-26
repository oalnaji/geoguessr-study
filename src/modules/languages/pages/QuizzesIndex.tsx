import { Link } from 'react-router'
import { cardClass, linkCardClass, PageHeader } from '../../../components/ui'

const quizzes = [
  {
    to: 'script',
    title: 'Identify the script',
    blurb: 'See a snippet of real text. Name the writing system and a place you would see it.',
  },
]

const planned = ['Identify the language (Latin look-alikes)', 'Spot the giveaway letter', 'Sign words', 'Where is it spoken? (map)']

export function QuizzesIndex() {
  return (
    <div className="space-y-6">
      <PageHeader crumbs={[{ to: '/languages', label: 'Languages' }]} title="Quizzes" />
      <ul className="grid gap-3 sm:grid-cols-2">
        {quizzes.map((q) => (
          <li key={q.to}>
            <Link to={q.to} className={`${linkCardClass} h-full`}>
              <h2 className="text-lg font-semibold">{q.title}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">{q.blurb}</p>
            </Link>
          </li>
        ))}
        {planned.map((t) => (
          <li key={t} className={`${cardClass} border-dashed opacity-60`}>
            <h2 className="font-semibold">{t}</h2>
            <p className="text-sm text-slate-500">Coming later.</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
