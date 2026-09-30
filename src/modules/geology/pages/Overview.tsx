import { useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import { useMapFeatures } from '../../../components/mapData'
import { linkCardClass } from '../../../components/ui'
import { WorldMap } from '../../../components/WorldMap'
import { countries } from '../../../content/countries'
import { geoCategories, geoPhotos, topicsIn, type GeoCategory } from '../../../content/geology'

const intro: Record<GeoCategory, string> = {
  'Rocks & soil chemistry': 'The three rock families and the chemistry that paints soil red, yellow, black or white.',
  Landforms: 'Why hills and mountains look the way they do: the rock underneath, the plates that pushed it up, and what water, ice and wind did to it.',
  Mining: 'What is dug out of the ground, where, and why it is there. Pick a resource to see where it is mined.',
}

function MiningMap() {
  const { features } = useMapFeatures('languages')
  const minerals = topicsIn('Mining')
  const [id, setId] = useState(minerals[0].id)
  const m = minerals.find((x) => x.id === id) ?? minerals[0]
  const top = new Set(m.producers?.slice(0, 3))
  const all = new Set([...(m.producers ?? []), ...m.countries])
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {minerals.map((x) => (
          <button
            key={x.id}
            type="button"
            onClick={() => setId(x.id)}
            className={`rounded-full border px-3 py-1 text-sm ${x.id === id ? 'border-amber-700 bg-amber-700 text-white' : 'border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800'}`}
          >
            {x.title}
          </button>
        ))}
      </div>
      {features && <WorldMap features={features} colorOf={(f) => (top.has(f.country) ? '#92400e' : all.has(f.country) ? '#f59e0b' : undefined)} />}
      <p className="-mt-1 text-xs text-slate-500">Dark: top 3 producers. Light: other major producers and deposits.</p>
      <p className="text-sm">
        <span className="font-semibold">Top producers: </span>
        {m.producers?.map((c) => countries[c]?.name ?? c).join(', ')}.{' '}
        <Link to={`/geology/${m.id}`} className="text-teal-700 underline dark:text-teal-400">More about {m.title.toLowerCase()} →</Link>
      </p>
    </div>
  )
}

export function Overview() {
  const [params, setParams] = useSearchParams()
  const cat: GeoCategory = geoCategories.find((c) => c === params.get('c')) ?? 'Landforms'
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Geology</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Why the ground looks the way it does: rock, soil chemistry, mountains and hills, and what people dig out of them. Every topic has the science, what to look for on Street View, history and a memory hook.
        </p>
      </div>
      <Link to="quiz" className={`${linkCardClass} block`}>
        <h2 className="font-semibold">Quiz: where is it found?</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">A landform or resource: tap a country where it is found or mined.</p>
      </Link>
      <nav className="flex flex-wrap gap-2 border-b border-slate-200 pb-2 dark:border-slate-800">
        {geoCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setParams(c === 'Landforms' ? {} : { c }, { replace: true })}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium ${cat === c ? 'bg-teal-700 text-white' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'}`}
          >
            {c}
          </button>
        ))}
      </nav>
      <p className="text-slate-600 dark:text-slate-400">{intro[cat]}</p>
      {cat === 'Mining' && <MiningMap />}
      <ul className="grid gap-3 sm:grid-cols-2">
        {topicsIn(cat).map((t) => {
          const photo = geoPhotos(t.id)[0]
          return (
            <li key={t.id}>
              <Link to={`/geology/${t.id}`} className={`${linkCardClass} flex h-full gap-3 !p-3`}>
                {photo ? <img src={photo.url} alt="" loading="lazy" className="h-20 w-24 shrink-0 rounded-md object-cover" /> : <div className="h-20 w-24 shrink-0 rounded-md bg-slate-100 dark:bg-slate-800" />}
                <span>
                  <span className="block font-semibold leading-tight">{t.title}</span>
                  <span className="mt-1 block text-xs text-slate-500">{t.summary}</span>
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
      {cat === 'Rocks & soil chemistry' && (
        <p className="text-sm">
          See also the <Link to="/vegetation/soils" className="text-teal-700 underline dark:text-teal-400">soil-colour map</Link> and the{' '}
          <Link to="/vegetation?tab=soils" className="text-teal-700 underline dark:text-teal-400">soil types</Link> in Plants.
        </p>
      )}
    </div>
  )
}
