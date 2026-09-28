import { Link, useNavigate } from 'react-router'
import { useMapFeatures } from '../../../components/mapData'
import { linkCardClass } from '../../../components/ui'
import { WorldMap } from '../../../components/WorldMap'
import { guidePhotos, guideOfCountry, guideRegions, guides } from '../../../content/uncovered'

export function Overview() {
  const { features } = useMapFeatures('languages')
  const navigate = useNavigate()
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Uncovered Countries</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Countries with little or no Street View: what their landscapes, roads, buildings and crops look like, and which covered countries they resemble. Useful for knowing the world beyond the coverage map, and for the odd trekker or unofficial round.
        </p>
      </div>
      {features && (
        <WorldMap
          features={features}
          colorOf={(f) => (guideOfCountry.has(f.country) ? '#b45309' : undefined)}
          onSelect={(f) => {
            const id = guideOfCountry.get(f.country)
            if (id) navigate(`/uncovered/${id}`)
          }}
        />
      )}
      <p className="-mt-4 text-xs text-slate-500">Brown: countries with a guide. Tap one to open it.</p>
      {guideRegions.map((r) => (
        <section key={r} className="space-y-3">
          <h2 className="text-xl font-semibold">{r}</h2>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {guides.filter((g) => g.region === r).map((g) => {
              const photo = guidePhotos(g.id)[0]
              return (
                <li key={g.id}>
                  <Link to={`/uncovered/${g.id}`} className={`${linkCardClass} h-full overflow-hidden !p-0`}>
                    {photo ? <img src={photo.url} alt="" loading="lazy" className="h-28 w-full object-cover" /> : <div className="h-28 bg-slate-200 dark:bg-slate-800" />}
                    <span className="block p-3 font-semibold leading-tight">{g.name}</span>
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
