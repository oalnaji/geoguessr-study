import { useMemo } from 'react'
import { boundsOf, useMapFeatures, usePhysical, type MapOverlay } from '../../components/mapData'
import { cardClass } from '../../components/ui'
import { WorldMap } from '../../components/WorldMap'
import { landformById, type LandformKind } from '../../content/topography'

/**
 * World map with mountain ranges (brown areas) and rivers (blue lines). With `active`, zooms to
 * that range or river and fades the others; with `onPick`, ranges and rivers are tappable.
 */
export function PhysicalMap({ active = null, kind, onPick }: { active?: string | null; kind?: LandformKind; onPick?: (id: string) => void }) {
  const { features, error } = useMapFeatures('languages')
  const overlays = usePhysical('languages')
  const shown = useMemo<MapOverlay[]>(() => (overlays ?? [])
    .filter((o) => !kind || (kind === 'river') === (o.kind === 'line'))
    .map((o) => ({ ...o, label: landformById.get(o.id)?.name ?? o.id })), [overlays, kind])
  if (!features || !overlays) return <p className={`${cardClass} text-center text-slate-500`}>{error ? 'The map could not be loaded.' : 'Loading map…'}</p>
  const target = active ? shown.filter((o) => o.id === active) : []
  return (
    <WorldMap
      features={features}
      overlays={shown}
      activeOverlay={active}
      onOverlay={onPick}
      focus={target.length ? boundsOf(target) : undefined}
      colorOf={() => '#e7e5e4'}
    />
  )
}
