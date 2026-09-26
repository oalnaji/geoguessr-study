import { Link } from 'react-router'
import { linkCardClass, PageHeader } from '../../../components/ui'
import { groups, languageName } from '../../../content'

export function GroupsIndex() {
  return (
    <div className="space-y-6">
      <PageHeader
        crumbs={[{ to: '/languages', label: 'Languages' }]}
        title="Language groups"
        subtitle="Languages that look alike on a sign, and how to tell them apart."
      />
      <ul className="grid gap-3 sm:grid-cols-2">
        {groups.map((g) => (
          <li key={g.id}>
            <Link to={g.id} className={`${linkCardClass} h-full`}>
              <h2 className="text-lg font-semibold">{g.name}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">{g.members.map(languageName).join(', ')}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
