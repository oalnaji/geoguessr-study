import { useState } from 'react'
import { Link } from 'react-router'
import { cardClass } from '../../components/ui'
import { regionById } from '../../content/regions'
import { usPlates, usShields, type UsPlate } from '../../content/regions/usRoadside'

const commonsImage = (file: string, width = 160) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`
const commonsPage = (file: string) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replace(/ /g, '_'))}`
const stateName = (id: string) => regionById.get(id)?.name ?? (id === 'US-DC' ? 'District of Columbia' : id)

type Filter = 'notable' | 'all'

function FilterToggle({ value, onChange }: { value: Filter; onChange: (f: Filter) => void }) {
  return (
    <div className="flex gap-2 text-sm">
      {(['notable', 'all'] as const).map((f) => (
        <button
          key={f}
          type="button"
          onClick={() => onChange(f)}
          className={`rounded-full border px-3 py-1 ${value === f ? 'border-teal-600 bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-300' : 'border-slate-300 text-slate-600 dark:border-slate-700 dark:text-slate-400'}`}
        >
          {f === 'notable' ? 'Notable only' : 'All states'}
        </button>
      ))}
    </div>
  )
}

/** A US state route shield (public-domain SVG from Wikimedia Commons). */
export function ShieldImage({ file, size = 64 }: { file: string; size?: number }) {
  return <img src={commonsImage(file)} alt="" loading="lazy" style={{ height: size }} className="w-auto" />
}

/** A drawn licence plate in the state's colours, roughly as it looks through the blur. */
export function PlateCard({ plate, label }: { plate: UsPlate; label: string }) {
  return (
    <div
      className="flex h-16 w-32 shrink-0 flex-col items-center justify-center rounded-md border-2 border-slate-400 shadow-sm dark:border-slate-600"
      style={{ background: plate.bg }}
      aria-hidden
    >
      <span className="text-[0.6rem] font-semibold uppercase tracking-wide" style={{ color: plate.text }}>{label}</span>
      <span className="font-mono text-xl font-bold tracking-widest" style={{ color: plate.text }}>ABC 123</span>
    </div>
  )
}

const sortedIds = (ids: string[]) => [...ids].sort((a, b) => stateName(a).localeCompare(stateName(b)))

export function UsShields() {
  const [filter, setFilter] = useState<Filter>('notable')
  const ids = sortedIds(Object.keys(usShields)).filter((id) => filter === 'all' || usShields[id].notable)
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600 dark:text-slate-400">
        Every state numbers its own highways and has its own marker. Interstates (red and blue shield) and US Highways (white shield) look the same everywhere, so it is the state route markers that give the state away. Highlighted: the ones you can recognise at a glance.
      </p>
      <FilterToggle value={filter} onChange={setFilter} />
      <ul className="grid gap-2 sm:grid-cols-2">
        {ids.map((id) => {
          const s = usShields[id]
          return (
            <li key={id} className={`${cardClass} flex items-center gap-3 !p-3 ${s.notable ? 'border-amber-400 dark:border-amber-600' : ''}`}>
              <a href={commonsPage(s.file)} target="_blank" rel="noreferrer" className="flex h-16 w-16 shrink-0 items-center justify-center" title="Public domain, Wikimedia Commons">
                <ShieldImage file={s.file} />
              </a>
              <span>
                <Link to={`/regions/US/${id}`} className="font-semibold hover:text-teal-700 dark:hover:text-teal-400">{stateName(id)}</Link>
                {s.notable && <span className="ml-1.5 rounded bg-amber-100 px-1.5 text-xs text-amber-800 dark:bg-amber-950 dark:text-amber-300">notable</span>}
                <span className="block text-sm text-slate-600 dark:text-slate-400">{s.look}</span>
              </span>
            </li>
          )
        })}
      </ul>
      <p className="text-xs text-slate-500">Shield images: Wikimedia Commons (public domain), found via Wikidata.</p>
    </div>
  )
}

export function UsPlates() {
  const [filter, setFilter] = useState<Filter>('notable')
  const ids = sortedIds(Object.keys(usPlates)).filter((id) => filter === 'all' || usPlates[id].notable)
  const rearOnly = sortedIds(Object.keys(usPlates)).filter((id) => !usPlates[id].front)
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600 dark:text-slate-400">
        Plates are blurred on Street View, but the colours still show. Highlighted: plates with a colour you can pick out through the blur. The cards are drawn in each state's colours, not photos. Old designs stay on the road for years, so expect a mix.
      </p>
      <div className={`${cardClass} text-sm`}>
        <span className="font-semibold">No front plate required ({rearOnly.length}):</span> {rearOnly.map(stateName).join(', ')}.
        <span className="block text-slate-500">A car with a front plate rules these states out (though some drivers fit one anyway).</span>
      </div>
      <FilterToggle value={filter} onChange={setFilter} />
      <ul className="grid gap-2 sm:grid-cols-2">
        {ids.map((id) => {
          const p = usPlates[id]
          return (
            <li key={id} className={`${cardClass} flex items-center gap-3 !p-3 ${p.notable ? 'border-amber-400 dark:border-amber-600' : ''}`}>
              <PlateCard plate={p} label={stateName(id)} />
              <span>
                {id === 'US-DC' ? <span className="font-semibold">{stateName(id)}</span> : <Link to={`/regions/US/${id}`} className="font-semibold hover:text-teal-700 dark:hover:text-teal-400">{stateName(id)}</Link>}
                {p.notable && <span className="ml-1.5 rounded bg-amber-100 px-1.5 text-xs text-amber-800 dark:bg-amber-950 dark:text-amber-300">notable</span>}
                <span className="block text-sm text-slate-600 dark:text-slate-400">{p.look}</span>
                <span className="block text-xs text-slate-500">{p.front ? 'Front and rear plates' : 'Rear plate only'}</span>
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
