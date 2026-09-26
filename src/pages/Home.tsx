import { Link } from 'react-router'
import { modules } from '../modules/registry'

const badge = {
  active: null,
  next: 'Next up',
  planned: 'Planned',
}

export function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Study modules</h1>
      <ul className="grid gap-3 sm:grid-cols-2">
        {modules.map((m) => {
          const body = (
            <>
              <div className="flex items-center justify-between gap-2">
                <h2 className="font-semibold">{m.title}</h2>
                {badge[m.status] && (
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                    {badge[m.status]}
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">{m.description}</p>
            </>
          )
          return (
            <li key={m.id}>
              {m.element ? (
                <Link
                  to={`/${m.path}`}
                  className="block rounded-xl border border-slate-200 bg-white p-4 hover:border-teal-600 dark:border-slate-800 dark:bg-slate-900"
                >
                  {body}
                </Link>
              ) : (
                <div className="rounded-xl border border-dashed border-slate-300 p-4 opacity-70 dark:border-slate-700">
                  {body}
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
