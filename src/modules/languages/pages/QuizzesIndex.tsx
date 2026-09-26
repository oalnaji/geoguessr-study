import { Link } from 'react-router'
import { linkCardClass, PageHeader } from '../../../components/ui'

const quizzes = [
  { to: 'script', title: 'Identify the script', blurb: 'See a snippet of real text. Name the writing system and a place you would see it.' },
  { to: 'language', title: 'Identify the language', blurb: 'Read a snippet and pick the language. Narrow it to one look-alike group to practise the hard ones.' },
  { to: 'giveaway', title: 'Spot the giveaway', blurb: 'Tap the letter that proves which language a snippet is in.' },
  { to: 'sign-words', title: 'Sign words', blurb: 'A word from a sign and its meaning: which language is it?' },
  { to: 'map', title: 'Where is it on signs?', blurb: 'Tap the country or region on a world map where a language is common on street signs.' },
  { to: 'region', title: 'Region → language', blurb: 'Besides the national language, which language is on signs in Catalonia, Vojvodina, Kerala…?' },
]

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
      </ul>
      <p className="text-sm text-slate-500">
        Every quiz has Skip and "I know this one", which leaves an item out of future rounds on this device.
      </p>
    </div>
  )
}
