import { useMapFeatures } from '../../components/mapData'
import { cardClass } from '../../components/ui'
import { WorldMap } from '../../components/WorldMap'
import type { Shading } from '../../content/vegetation'

const SHADES = ['#ccfbf1', '#99f6e4', '#5eead4', '#14b8a6', '#0f766e']

/** Maps a value onto 5 shades on a log scale, so small producers still show. */
function shadeIndex(value: number, max: number) {
  if (value <= 0 || max <= 0) return -1
  const t = Math.log1p(value) / Math.log1p(max)
  return Math.min(SHADES.length - 1, Math.floor(t * SHADES.length))
}

/** Read-only world map shaded by a value per country. */
export function ShadedMap({ shading }: { shading: Shading }) {
  const { features, error } = useMapFeatures()
  const max = Math.max(...Object.values(shading.values))
  if (error) return <p className={cardClass}>The map could not be loaded.</p>
  if (!features) return <p className={`${cardClass} text-center text-slate-500`}>Loading map…</p>
  return (
    <div className="space-y-2">
      <WorldMap
        features={features}
        colorOf={(f) => {
          const i = shadeIndex(shading.values[f.country] ?? 0, max)
          return i >= 0 ? SHADES[i] : undefined
        }}
      />
      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
        <span>{shading.label}:</span>
        <span>less</span>
        {SHADES.map((c) => <span key={c} className="inline-block h-3 w-5 rounded-sm" style={{ background: c }} />)}
        <span>more</span>
        <span>· Source: {shading.source}</span>
      </div>
    </div>
  )
}
