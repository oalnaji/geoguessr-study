import { useNavigate } from 'react-router'
import type { MapFeature } from '../../components/mapData'
import { cardClass } from '../../components/ui'
import { WorldMap } from '../../components/WorldMap'
import { countryOf, regionById, studyByCountry, type StudyRegion } from '../../content/regions'
import { countryFocus, GROUP_COLORS, highlightColor, markersFor, regionFocus, useRegionFeatures } from './mapFocus'

function MapStatus({ error }: { error: boolean }) {
  return error
    ? <p className={cardClass}>The map could not be loaded. Check your connection and reload.</p>
    : <p className={`${cardClass} text-center text-slate-500`}>Loading map…</p>
}

/** Read-only map zoomed to the country, with the region (or regions) highlighted. */
export function RegionMap({ regions, hideLabels = false }: { regions: StudyRegion[]; hideLabels?: boolean }) {
  const { features, error } = useRegionFeatures()
  if (!features) return <MapStatus error={error} />
  const ids = new Set(regions.map((r) => r.id))
  const country = countryOf(regions[0])
  const focus = regions.length === 1 ? regionFocus(features, regions[0]) : countryFocus(features, country)
  const places = features.filter((f) => ids.has(f.id))
  return (
    <WorldMap
      key={[...ids].join()}
      features={features}
      focus={focus}
      colorOf={highlightColor(ids, country)}
      markers={markersFor(places, focus)}
      hideLabels={hideLabels}
    />
  )
}

/** A country's map coloured by group, where tapping a region opens its page. */
export function CountryMap({ country }: { country: string }) {
  const { features, error } = useRegionFeatures()
  const navigate = useNavigate()
  const study = studyByCountry.get(country)
  if (!features || !study) return <MapStatus error={error} />
  const focus = countryFocus(features, country)
  const places = features.filter((f) => f.country === country)
  const groupIndex = new Map(study.groups.map((g, i) => [g.name, i]))
  const colorOf = (f: MapFeature) => {
    const r = regionById.get(f.id)
    return r && f.country === country ? GROUP_COLORS[(groupIndex.get(r.group) ?? 0) % GROUP_COLORS.length] : undefined
  }
  return (
    <div className="space-y-2">
      <WorldMap
        features={features}
        focus={focus}
        colorOf={colorOf}
        markers={markersFor(places, focus)}
        onSelect={(f) => regionById.has(f.id) && navigate(`/regions/${f.country}/${f.id}`)}
      />
      {study.groups.length > 1 && (
        <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-600 dark:text-slate-400">
          {study.groups.map((g, i) => (
            <li key={g.name} className="flex items-center gap-1">
              <span className="inline-block h-3 w-4 rounded-sm" style={{ background: GROUP_COLORS[i % GROUP_COLORS.length] }} />
              {g.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
