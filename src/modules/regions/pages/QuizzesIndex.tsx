import { Link } from 'react-router'
import { linkCardClass, PageHeader } from '../../../components/ui'

const quizzes = [
  { to: 'name', title: 'Name the highlighted region', blurb: 'A state or province is highlighted on its country\'s map: which one is it?' },
  { to: 'find', title: 'Find it on the map', blurb: 'Tap the region you are given. Includes Indonesia\'s islands, Brazil\'s macro-regions and Russia\'s federal districts.' },
  { to: 'clue', title: 'Which region is this?', blurb: 'A photo and some GeoGuessr clues (name hidden): tap the region on the map.' },
]

export function QuizzesIndex() {
  return (
    <div className="space-y-6">
      <PageHeader crumbs={[{ to: '/regions', label: 'Regions' }]} title="Quizzes" />
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
    </div>
  )
}
