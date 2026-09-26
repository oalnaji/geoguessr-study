import { useState } from 'react'
import { Link } from 'react-router'
import { linkCardClass, Native, PageHeader } from '../../../components/ui'
import { groups, languages, scriptById } from '../../../content'

export function LanguageIndex() {
  const [q, setQ] = useState('')
  const query = q.trim().toLowerCase()
  const match = (l: (typeof languages)[number]) =>
    !query || l.name.toLowerCase().includes(query) || l.nativeName.toLowerCase().includes(query)

  const sections = [
    ...groups.map((g) => ({ title: g.name, langs: languages.filter((l) => l.groups[0] === g.id) })),
    { title: 'Other European languages', langs: languages.filter((l) => l.groups.length === 0) },
  ]
    .map((s) => ({ ...s, langs: s.langs.filter(match) }))
    .filter((s) => s.langs.length)

  return (
    <div className="space-y-6">
      <PageHeader crumbs={[{ to: '/languages', label: 'Languages' }]} title="All languages" />
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search languages…"
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 dark:border-slate-700 dark:bg-slate-900"
      />
      {sections.map((s) => (
        <section key={s.title} className="space-y-2">
          <h2 className="font-semibold text-slate-500">{s.title}</h2>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {s.langs.map((l) => (
              <li key={l.id}>
                <Link to={`/languages/${l.id}`} className={`${linkCardClass} h-full !p-3`}>
                  <span className="block font-semibold">{l.name}</span>
                  <Native script={l.script} className="block truncate text-sm text-slate-600 dark:text-slate-400">
                    {l.nativeName}
                  </Native>
                  <span className="text-xs text-slate-500">{scriptById.get(l.script)?.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
      {sections.length === 0 && <p className="text-slate-500">No languages match "{q}".</p>}
    </div>
  )
}
