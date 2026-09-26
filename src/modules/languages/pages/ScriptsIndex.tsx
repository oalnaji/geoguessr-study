import { Link } from 'react-router'
import { linkCardClass, Native, PageHeader } from '../../../components/ui'
import { scripts } from '../../../content'
import type { Script } from '../../../content/types'

const areas: Script['area'][] = ['Europe', 'Caucasus & Middle East', 'Africa', 'South Asia', 'Southeast Asia', 'East Asia']

export function ScriptsIndex() {
  return (
    <div className="space-y-8">
      <PageHeader
        crumbs={[{ to: '/languages', label: 'Languages' }]}
        title="Scripts"
        subtitle="Recognising the writing system is the first and fastest language clue."
      />
      {areas.map((area) => (
        <section key={area} className="space-y-3">
          <h2 className="text-xl font-semibold">{area}</h2>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {scripts.filter((s) => s.area === area).map((s) => (
              <li key={s.id}>
                <Link to={s.id} className={`${linkCardClass} flex h-full flex-col`}>
                  <Native
                    script={s.id}
                    className={`block truncate text-2xl ${s.id === 'mongolian' ? 'h-24' : ''}`}
                  >
                    {s.showcase}
                  </Native>
                  <span className="mt-2 font-semibold">{s.name}</span>
                  <span className="text-xs text-slate-500">{s.kind}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
