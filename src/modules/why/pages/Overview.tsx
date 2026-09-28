import { Link, useSearchParams } from 'react-router'
import { linkCardClass } from '../../../components/ui'
import { explainerPhotos, explainers, whyCategories, type WhyCategory } from '../../../content/why'

export function Overview() {
  const [params, setParams] = useSearchParams()
  const cat = whyCategories.find((c) => c === params.get('c')) as WhyCategory | undefined
  const shown = whyCategories.filter((c) => !cat || c === cat)
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Why Is It Like This?</h1>
        <p className="text-slate-600 dark:text-slate-400">
          The things you notice on Street View, and the engineering, climate, economics and history behind them: from frost heaves and road lines to water tanks and missing poles.
        </p>
      </div>
      <Link to="quiz" className={`${linkCardClass} block`}>
        <h2 className="font-semibold">Quiz: where is this typical?</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">An observation: pick a country where it is typical.</p>
      </Link>
      <nav className="flex flex-wrap gap-2 border-b border-slate-200 pb-2 dark:border-slate-800">
        {[undefined, ...whyCategories].map((c) => (
          <button
            key={c ?? 'all'}
            type="button"
            onClick={() => setParams(c ? { c } : {}, { replace: true })}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium ${cat === c ? 'bg-teal-700 text-white' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'}`}
          >
            {c ?? 'All'}
          </button>
        ))}
      </nav>
      {shown.map((c) => (
        <section key={c} className="space-y-3">
          <h2 className="text-xl font-semibold">{c}</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {explainers.filter((e) => e.category === c).map((e) => {
              const photo = explainerPhotos(e.id)[0]
              return (
                <li key={e.id}>
                  <Link to={`/why/${e.id}`} className={`${linkCardClass} flex h-full gap-3 !p-3`}>
                    {photo ? <img src={photo.url} alt="" loading="lazy" className="h-20 w-24 shrink-0 rounded-md object-cover" /> : <div className="h-20 w-24 shrink-0 rounded-md bg-slate-100 dark:bg-slate-800" />}
                    <span>
                      <span className="block font-semibold leading-tight">{e.title}</span>
                      <span className="mt-1 block text-xs text-slate-500">{e.where.split('.')[0]}</span>
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      ))}
    </div>
  )
}
