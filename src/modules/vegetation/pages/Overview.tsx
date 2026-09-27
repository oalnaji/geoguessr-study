import { Link } from 'react-router'
import { linkCardClass } from '../../../components/ui'
import { cropList, forestList, plantData, soilList, treeGroups, treeList, type Plant } from '../../../content/vegetation'

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
                <span className="text-xs text-slate-500">{p.latitude ?? p.kind}</span>
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
          Which trees, crops and forests grow where, what colour the soil is, and why: climate, latitude, soil and the history of how people spread them. In large countries the maps go down to states and provinces.
        </p>
      </div>
      <Link to="quizzes" className={`${linkCardClass} block`}>
        <h2 className="text-lg font-semibold">Quizzes</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">Name the plant or forest from a photo, and find where it grows on the map.</p>
      </Link>
      {treeGroups.map((g) => {
        const list = treeList.filter((p) => p.group === g)
        return list.length ? (
          <section key={g} className="space-y-3">
            <h2 className="text-xl font-semibold">{g}</h2>
            <PlantGrid plants={list} />
          </section>
        ) : null
      })}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Crops</h2>
        <PlantGrid plants={cropList} />
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Forests &amp; biomes</h2>
        <PlantGrid plants={forestList} />
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Soil colours</h2>
        <Link to="soils" className={`${linkCardClass} flex items-center gap-3`}>
          <span className="flex shrink-0 overflow-hidden rounded-md ring-1 ring-black/10">
            {soilList.map((s) => <span key={s.id} className="h-8 w-3" style={{ background: s.swatch }} />)}
          </span>
          <span>
            <span className="block font-semibold">Soil colour map</span>
            <span className="text-sm text-slate-600 dark:text-slate-400">Red, black, white or beige: which regions have which soil, and why.</span>
          </span>
        </Link>
        <PlantGrid plants={soilList} />
      </section>
      <p className="text-xs text-slate-500">
        Photos from Wikimedia Commons and iNaturalist, under the licences shown with each photo.
      </p>
    </div>
  )
}
