import { Link, useNavigate, useSearchParams } from 'react-router'
import { linkCardClass } from '../../../components/ui'
import { continents, landformPhotos, mountains, rivers, type Landform } from '../../../content/topography'
import { PhysicalMap } from '../PhysicalMap'

function Grid({ list }: { list: Landform[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {list.map((l) => {
        const photo = landformPhotos(l.id)[0]
        return (
          <li key={l.id}>
            <Link to={`/topography/${l.id}`} className={`${linkCardClass} h-full overflow-hidden !p-0`}>
              {photo ? <img src={photo.url} alt="" loading="lazy" className="h-28 w-full object-cover sm:h-32" /> : <div className="h-28 bg-slate-200 sm:h-32 dark:bg-slate-800" />}
              <div className="p-3">
                <span className="block font-semibold leading-tight">{l.name}</span>
                <span className="text-xs text-slate-500">{l.stats[0].value}</span>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

const tabs = [
  { id: 'ranges', label: 'Mountain ranges', list: mountains },
  { id: 'rivers', label: 'Rivers', list: rivers },
] as const

export function Overview() {
  const [params, setParams] = useSearchParams()
  const navigate = useNavigate()
  const tab = tabs.find((t) => t.id === params.get('tab')) ?? tabs[0]
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Mountains &amp; Rivers</h1>
        <p className="text-slate-600 dark:text-slate-400">
          The world's great mountain ranges and rivers: where they are, what they look like from the road, how they formed, their history and the stories that make them memorable.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Link to="quiz" className={linkCardClass}>
          <h2 className="font-semibold">Quiz: find it on the map</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">Tap the range or river you are given.</p>
        </Link>
        <Link to="quiz?mode=photo" className={linkCardClass}>
          <h2 className="font-semibold">Quiz: name it from a photo</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">A landscape photo: which range or river is it?</p>
        </Link>
      </div>
      <nav className="flex flex-wrap gap-2 border-b border-slate-200 pb-2 dark:border-slate-800">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setParams(t.id === 'ranges' ? {} : { tab: t.id }, { replace: true })}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium ${tab.id === t.id ? 'bg-teal-700 text-white' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'}`}
          >
            {t.label} <span className="opacity-70">({t.list.length})</span>
          </button>
        ))}
      </nav>
      <PhysicalMap kind={tab.id === 'rivers' ? 'river' : 'range'} onPick={(id) => navigate(`/topography/${id}`)} />
      <p className="-mt-4 text-xs text-slate-500">Tap a {tab.id === 'rivers' ? 'river' : 'range'} to open it. Shapes: Natural Earth (public domain).</p>
      {continents.map((c) => {
        const list = tab.list.filter((l) => l.continent === c)
        return list.length ? (
          <section key={c} className="space-y-3">
            <h2 className="text-xl font-semibold">{c}</h2>
            <Grid list={list} />
          </section>
        ) : null
      })}
    </div>
  )
}
