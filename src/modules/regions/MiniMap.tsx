import type { MapBounds, MapFeature } from '../../components/mapData'

/**
 * A small static map of one country with some regions highlighted: plain SVG with no zoom or
 * interaction, cheap enough to draw dozens on one page. Tiny regions get a ring.
 */
export function MiniMap({ features, focus, country, highlight }: {
  features: MapFeature[]
  focus: MapBounds
  country: string
  highlight: ReadonlySet<string>
}) {
  const [[x0, y0], [x1, y1]] = focus
  const pad = Math.max(x1 - x0, y1 - y0) * 0.04
  const vb = [x0 - pad, y0 - pad, x1 - x0 + 2 * pad, y1 - y0 + 2 * pad]
  const inView = (f: MapFeature) => f.bounds[1][0] >= vb[0] && f.bounds[0][0] <= vb[0] + vb[2] && f.bounds[1][1] >= vb[1] && f.bounds[0][1] <= vb[1] + vb[3]
  const shown = features.filter(inView)
  const size = Math.max(vb[2], vb[3])
  const rings = shown.filter((f) => highlight.has(f.id) && Math.max(f.bounds[1][0] - f.bounds[0][0], f.bounds[1][1] - f.bounds[0][1]) < size * 0.045)
  return (
    <svg viewBox={vb.join(' ')} className="block aspect-[4/3] w-full rounded-lg bg-sky-50 dark:bg-slate-900" preserveAspectRatio="xMidYMid meet" aria-hidden>
      {shown.map((f) => (
        <path
          key={f.id}
          d={f.d}
          className={
            highlight.has(f.id) ? 'fill-teal-700 dark:fill-teal-500'
              : f.country === country ? 'fill-teal-100 dark:fill-teal-950'
                : 'fill-slate-200 dark:fill-slate-800'
          }
          stroke="white"
          strokeWidth={size / 600}
        />
      ))}
      {rings.map((f) => (
        <circle
          key={f.id}
          cx={(f.bounds[0][0] + f.bounds[1][0]) / 2}
          cy={(f.bounds[0][1] + f.bounds[1][1]) / 2}
          r={size / 45}
          fill="none"
          className="stroke-rose-600"
          strokeWidth={size / 250}
        />
      ))}
    </svg>
  )
}
