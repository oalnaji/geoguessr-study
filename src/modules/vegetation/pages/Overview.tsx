import type { ReactNode } from 'react'
import { Link, useSearchParams } from 'react-router'
import { linkCardClass } from '../../../components/ui'
import { cropList, forestList, plantData, soilList, treeGroups, treeList, type Plant } from '../../../content/vegetation'
import { sectionTabs, type SectionTab } from '../sections'

function PlantGrid({ plants }: { plants: Plant[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {plants.map((p) => {
        const photo = plantData(p.id).photos[0]
        return (
          <li key={p.id}>
            <Link to={`/vegetation/${p.id}`} className={`${linkCardClass} h-full overflow-hidden !p-0`}>
              {photo ? (
                <img src={photo.url} alt="" loading="lazy" className="h-28 w-full object-cover sm:h-32" />
              ) : (
                <div className="h-28 sm:h-32" style={{ background: p.swatch ?? '#e2e8f0' }} />
              )}
              <div className="flex items-start gap-2 p-3">
                {p.swatch && <span className="mt-0.5 inline-block h-4 w-4 shrink-0 rounded-sm ring-1 ring-black/10" style={{ background: p.swatch }} />}
                <span>
                  <span className="block font-semibold leading-tight">{p.name}</span>
                  <span className="text-xs text-slate-500">{p.latitude ?? p.kind}</span>
                </span>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

function Group({ title, plants, note }: { title: string; plants: Plant[]; note?: string }) {
  if (!plants.length) return null
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">{title} <span className="text-sm font-normal text-slate-500">({plants.length})</span></h2>
      {note && <p className="text-sm text-slate-600 dark:text-slate-400">{note}</p>}
      <PlantGrid plants={plants} />
    </section>
  )
}

function TreesTab() {
  return <>{treeGroups.map((g) => <Group key={g} title={g} plants={treeList.filter((p) => p.group === g)} />)}</>
}

function CropsTab() {
  return (
    <>
      <Group title="Field and plantation crops" plants={cropList.filter((p) => p.section === 'crop')} note="Maps show where each is a clue; the light shading is national production (FAO)." />
      <Group title="Tree crops" plants={cropList.filter((p) => p.section !== 'crop')} note="Trees that are also grown as crops; they are under Trees & plants too." />
    </>
  )
}

/** Distance from the equator where a forest type starts. */
const startLat = (p: Plant) => Math.min(...(p.latitudeBands ?? [[90, 90]]).map(([a, b]) => Math.min(Math.abs(a), Math.abs(b))))

function ForestsTab() {
  return (
    <>
      <p className="text-sm text-slate-600 dark:text-slate-400">Grouped by how far from the equator they start. Each page draws its latitude band on the map.</p>
      <Group title="Tropical" plants={forestList.filter((p) => startLat(p) < 20)} />
      <Group title="Subtropical and temperate" plants={forestList.filter((p) => startLat(p) >= 20 && startLat(p) < 45)} />
      <Group title="Cold and polar" plants={forestList.filter((p) => startLat(p) >= 45)} />
    </>
  )
}

/** Rough colour family of a soil swatch. */
function tone(hex: string): 'red' | 'dark' | 'pale' {
  const n = parseInt(hex.slice(1), 16)
  const [r, g, b] = [n >> 16, (n >> 8) & 255, n & 255]
  if (r + g + b < 200) return 'dark'
  if (r > g + 40) return 'red'
  return 'pale'
}

function SoilsTab() {
  return (
    <>
      <Link to="/vegetation/soils" className={`${linkCardClass} flex items-center gap-3`}>
        <span className="flex shrink-0 overflow-hidden rounded-md ring-1 ring-black/10">
          {soilList.map((s) => <span key={s.id} className="h-8 w-3" style={{ background: s.swatch }} />)}
        </span>
        <span>
          <span className="block font-semibold">Soil colour map</span>
          <span className="text-sm text-slate-600 dark:text-slate-400">Every region in its soil colour, why soil has a colour, and how it changes inside big countries.</span>
        </span>
      </Link>
      <Group title="Red and orange" plants={soilList.filter((s) => tone(s.swatch!) === 'red')} note="Iron rust: old, warm, well-drained soils, or red rock underneath." />
      <Group title="Black and dark" plants={soilList.filter((s) => tone(s.swatch!) === 'dark')} note="Humus from grass roots, volcanic ash, or swelling basalt clay." />
      <Group title="Pale, white and beige" plants={soilList.filter((s) => tone(s.swatch!) === 'pale')} note="Washed out, pure sand, lime, or desert rock that never weathered." />
    </>
  )
}

const tabContent: Record<SectionTab, () => ReactNode> = { trees: TreesTab, crops: CropsTab, forests: ForestsTab, soils: SoilsTab }

export function Overview() {
  const [params, setParams] = useSearchParams()
  const tab: SectionTab = sectionTabs.find((t) => t.id === params.get('tab'))?.id ?? 'trees'
  const Content = tabContent[tab]
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Vegetation &amp; Crops</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Which trees, crops and forests grow where, what colour the soil is, and why: climate, latitude, soil and the history of how people spread them. In large countries the maps go down to states and provinces.
        </p>
      </div>
      <Link to="quizzes" className={`${linkCardClass} block`}>
        <h2 className="text-lg font-semibold">Quizzes</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">Name the plant, forest or soil from a photo, and find where it grows on the map.</p>
      </Link>
      <nav className="flex flex-wrap gap-2 border-b border-slate-200 pb-2 dark:border-slate-800">
        {sectionTabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setParams(t.id === 'trees' ? {} : { tab: t.id }, { replace: true })}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium ${tab === t.id ? 'bg-teal-700 text-white' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'}`}
          >
            {t.label} <span className="opacity-70">({t.count()})</span>
          </button>
        ))}
      </nav>
      <div className="space-y-8">
        <Content />
      </div>
      <p className="text-xs text-slate-500">Photos from Wikimedia Commons and iNaturalist, under the licences shown with each photo.</p>
    </div>
  )
}
