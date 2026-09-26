import { Link } from 'react-router'
import { linkCardClass, PageHeader } from '../../../components/ui'

const quizzes = [
  { to: 'photo', title: 'Name the plant or forest', blurb: 'A photo of a tree, crop, cactus or forest type: which is it?' },
  { to: 'where', title: 'Where does it grow?', blurb: 'Tap the map. Large countries are split into states and provinces, so you have to know exactly where.' },
]

export function QuizzesIndex() {
  return (
    <div className="space-y-6">
      <PageHeader crumbs={[{ to: '/vegetation', label: 'Vegetation & Crops' }]} title="Quizzes" />
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
