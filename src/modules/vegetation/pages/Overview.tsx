import { Link } from 'react-router'
import { linkCardClass } from '../../../components/ui'
import { cropList, plantData, treeList, type Plant } from '../../../content/vegetation'

function PlantGrid({ plants }: { plants: Plant[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {plants.map((p) => {
        const photo = plantData(p.id).photos[0]
        return (
          <li key={p.id}>
            <Link to={p.id} className={`${linkCardClass} h-full overflow-hidden !p-0`}>
              {photo ? (
                <img src={photo.url} alt="" loading="lazy" className="h-28 w-full object-cover sm:h-32" />
              ) : (
                <div className="h-28 bg-slate-200 sm:h-32 dark:bg-slate-800" />
              )}
              <div className="p-3">
                <span className="block font-semibold leading-tight">{p.name}</span>
                <span className="text-xs text-slate-500">{p.kind}</span>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export function Overview() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Vegetation &amp; Crops</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Which trees and crops grow where, and why: climate, soil and the history of how people spread them.
        </p>
      </div>
      <Link to="quizzes" className={`${linkCardClass} block`}>
        <h2 className="text-lg font-semibold">Quizzes</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">Name the plant from a photo, and find where it grows on the map.</p>
      </Link>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Trees &amp; plants</h2>
        <PlantGrid plants={treeList} />
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Crops</h2>
        <PlantGrid plants={cropList} />
      </section>
      <p className="text-xs text-slate-500">
        Photos from Wikimedia Commons and iNaturalist, under the licences shown with each photo. Biomes are coming next.
      </p>
    </div>
  )
}
