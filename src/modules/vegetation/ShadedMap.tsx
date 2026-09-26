import { latitudeLine, useMapFeatures, type MapLine } from '../../components/mapData'
import { cardClass } from '../../components/ui'
import { WorldMap } from '../../components/WorldMap'
import { clueTarget, inTarget, shadingOf, type Plant } from '../../content/vegetation'

const CLUE = '#0f766e'
const DATA_SHADES = ['#e3f5f1', '#c2e9e1', '#93d8ca']

/** Maps a value onto the light data shades on a log scale, so small values still show. */
function shadeIndex(value: number, max: number) {
  if (value <= 0 || max <= 0) return -1
  const t = Math.log1p(value) / Math.log1p(max)
  return Math.min(DATA_SHADES.length - 1, Math.floor(t * DATA_SHADES.length))
}

/**
 * Where a plant grows, on the vegetation map (large countries split into states and provinces):
 * dark = where it is a useful GeoGuessr clue; light = the data layer (GBIF observations by region
 * where available, or national production for crops).
 */
export function PlantMap({ plant }: { plant: Plant }) {
  const { features, error } = useMapFeatures('vegetation')
  const target = clueTarget(plant)
  const shading = shadingOf(plant)
  if (error) return <p className={cardClass}>The map could not be loaded.</p>
  if (!features) return <p className={`${cardClass} text-center text-slate-500`}>Loading map…</p>

  const values = shading?.values ?? {}
  // A country with any regional values uses them; otherwise its national value colours every region.
  const regionalCountries = new Set(Object.keys(values).filter((k) => k.includes('-')).map((k) => k.split('-')[0]))
  const valueOf = (f: { id: string; country: string }) =>
    regionalCountries.has(f.country) ? (values[f.id] ?? 0) : (values[f.country] ?? 0)
  const max = Math.max(1, ...features.map(valueOf))
  const lines = (plant.latitudeBands ?? []).flat().map((lat) => latitudeLine('vegetation', lat)).filter((l): l is MapLine => l !== null)

  return (
    <div className="space-y-2">
      <WorldMap
        features={features}
        lines={lines}
        colorOf={(f) => {
          if (inTarget(target, f)) return CLUE
          const i = shadeIndex(valueOf(f), max)
          return i >= 0 ? DATA_SHADES[i] : undefined
        }}
      />
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
        <span className="flex items-center gap-1">
          <span className="inline-block h-3 w-5 rounded-sm" style={{ background: CLUE }} /> Useful GeoGuessr clue here
        </span>
        {lines.length > 0 && (
          <span className="flex items-center gap-1">
            <span className="inline-block w-5 border-t-2 border-dashed border-amber-600" /> Latitude band
          </span>
        )}
        {shading && (
          <span className="flex items-center gap-1">
            {DATA_SHADES.map((c) => <span key={c} className="inline-block h-3 w-4 rounded-sm" style={{ background: c }} />)}
            {shading.label} · {shading.source}
          </span>
        )}
      </div>
    </div>
  )
}
