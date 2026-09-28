import { useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router'
import { useMapFeatures } from '../../../components/mapData'
import { cardClass, linkCardClass } from '../../../components/ui'
import { WorldMap } from '../../../components/WorldMap'
import { cardCountryOf, continentOf, continents, countryLabel, poleCountries, polesOf, type Continent } from '../../../content/poles'
import { PoleCard } from '../PoleCard'

export function Overview() {
  const [params, setParams] = useSearchParams()
  const navigate = useNavigate()
  const { features } = useMapFeatures('languages')
  const continent = (continents.find((c) => c === params.get('c')) ?? 'Europe') as Continent
  const focus = params.get('country')
  const list = poleCountries.filter((c) => continentOf[c] === continent).sort((a, b) => countryLabel(a).localeCompare(countryLabel(b)))
  const withPoles = cardCountryOf

  // Scroll to a country picked on the map.
  useEffect(() => {
    if (focus) document.getElementById(`pole-${focus}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [focus, continent])

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Utility Poles</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Poles are one of the most reliable clues in GeoGuessr. This is the short list: the one pole each country is known for (or a trend shared by a group of countries), plus the regional poles of Japan, Vietnam and Indonesia, where the pole tells you the region. Mostly from the PlonkIt guides, in our own words.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Link to="how" className={linkCardClass}>
          <h2 className="font-semibold">How a pole works</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">The parts (crossarms, insulators, transformers, guy wires, tags) and why countries build them differently.</p>
        </Link>
        <Link to="quiz" className={linkCardClass}>
          <h2 className="font-semibold">Quiz: which country is this pole?</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">A photo of a pole: name the country.</p>
        </Link>
      </div>

      {features && (
        <WorldMap
          features={features}
          colorOf={(f) => (withPoles.has(f.country) ? '#0f766e' : undefined)}
          onSelect={(f) => {
            const card = withPoles.get(f.country)
            if (!card) return
            setParams({ c: continentOf[card], country: card }, { replace: true })
          }}
        />
      )}
      <p className="-mt-4 text-xs text-slate-500">Dark: countries with a notable pole. Tap one to jump to it.</p>

      <nav className="flex flex-wrap gap-2 border-b border-slate-200 pb-2 dark:border-slate-800">
        {continents.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setParams({ c }, { replace: true })}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium ${c === continent ? 'bg-teal-700 text-white' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'}`}
          >
            {c} <span className="opacity-70">({poleCountries.filter((x) => continentOf[x] === c).length})</span>
          </button>
        ))}
      </nav>

      <div className="flex flex-wrap gap-1.5 text-sm">
        {list.map((c) => (
          <button key={c} type="button" onClick={() => navigate(`?c=${continent}&country=${c}`, { replace: true })} className="rounded-full border border-slate-300 px-2.5 py-0.5 hover:border-teal-600 dark:border-slate-700">
            {countryLabel(c)}{polesOf(c).length > 1 ? ` (${polesOf(c).length})` : ''}
          </button>
        ))}
      </div>

      {list.map((c) => (
        <section key={c} id={`pole-${c}`} className="scroll-mt-20 space-y-3">
          <h2 className="text-2xl font-semibold">{countryLabel(c)}</h2>
          <div className="grid gap-4 lg:grid-cols-2">
            {polesOf(c).map((p) => <PoleCard key={p.id} pole={p} />)}
          </div>
        </section>
      ))}
      {list.length === 0 && <p className={cardClass}>No poles here yet.</p>}
    </div>
  )
}
