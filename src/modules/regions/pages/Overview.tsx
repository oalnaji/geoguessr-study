import { Link } from 'react-router'
import { linkCardClass } from '../../../components/ui'
import { countryName, countryStudies, regionFacts } from '../../../content/regions'

export function Overview() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Regions of large countries</h1>
        <p className="text-slate-600 dark:text-slate-400">
          The states and provinces of the big GeoGuessr countries: where each one is, what it looks like from the road, and what gives it away (area codes, number plates, languages, crops, architecture).
        </p>
      </div>
      <Link to="quizzes" className={`${linkCardClass} block`}>
        <h2 className="text-lg font-semibold">Quizzes</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">Name the highlighted region, find a region on the map, or work out the region from a photo and clues.</p>
      </Link>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {countryStudies.map((s) => {
          const photo = s.regions.map((r) => regionFacts(r).photos[0]).find(Boolean)
          return (
            <li key={s.country}>
              <Link to={s.country} className={`${linkCardClass} h-full overflow-hidden !p-0`}>
                {photo ? (
                  <img src={photo.url} alt="" loading="lazy" className="h-32 w-full object-cover" />
                ) : (
                  <div className="h-32 bg-slate-200 dark:bg-slate-800" />
                )}
                <div className="p-3">
                  <span className="block text-lg font-semibold">{countryName(s.country)}</span>
                  <span className="text-sm text-slate-500">{s.regions.length} {s.unit}</span>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
      <p className="text-xs text-slate-500">
        Population, area and capitals from Wikidata; photos from Wikimedia Commons, under the licences shown with each photo.
      </p>
    </div>
  )
}
