import { select } from 'd3-selection'
import { zoom, zoomIdentity, type ZoomBehavior } from 'd3-zoom'
import { useEffect, useMemo, useRef, useState } from 'react'
import { MAP_HEIGHT as H, MAP_WIDTH as W, type MapFeature, type MapLine } from './mapData'
import { PickList } from './PickList'

const controlClass = 'h-9 w-9 rounded-md bg-white/90 text-lg font-semibold shadow dark:bg-slate-800/90'

/**
 * A world map with pinch/scroll zoom. With `onSelect` it is tappable, with a searchable list for
 * places too small to tap; after `reveal`, correct places turn green, a wrong pick red, and the map
 * zooms to the answer. Without `onSelect` it is a read-only map shaded by `colorOf`.
 */
export function WorldMap({
  features, selected = null, onSelect, reveal = false, isCorrect = () => false, colorOf, lines = [],
}: {
  features: MapFeature[]
  selected?: string | null
  onSelect?: (f: MapFeature) => void
  reveal?: boolean
  isCorrect?: (f: MapFeature) => boolean
  /** Fill colour for read-only shaded maps; undefined leaves the default grey */
  colorOf?: (f: MapFeature) => string | undefined
  /** Extra lines drawn over the map, e.g. parallels of latitude */
  lines?: MapLine[]
}) {
  const svgRef = useRef<SVGSVGElement>(null)
  const gRef = useRef<SVGGElement>(null)
  const zoomRef = useRef<ZoomBehavior<SVGSVGElement, unknown> | null>(null)
  const [hover, setHover] = useState<string | null>(null)
  const [showList, setShowList] = useState(false)
  const byId = useMemo(() => new Map(features.map((f) => [f.id, f])), [features])

  useEffect(() => {
    const svg = svgRef.current!
    const z = zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 60])
      .translateExtent([[0, 0], [W, H]])
      .clickDistance(6)
      .on('zoom', (e) => gRef.current?.setAttribute('transform', e.transform.toString()))
    select(svg).call(z)
    zoomRef.current = z
    return () => {
      select(svg).on('.zoom', null)
    }
  }, [])

  // The answer as a stable string, so the effect below runs once per reveal.
  const answerIds = reveal ? features.filter(isCorrect).map((f) => f.id).join(',') : ''

  // Zoom to the answer after checking, so small places are visible.
  useEffect(() => {
    if (!answerIds || !zoomRef.current || !svgRef.current) return
    const hits = answerIds.split(',').map((id) => byId.get(id)!)
    const x0 = Math.min(...hits.map((f) => f.bounds[0][0]))
    const y0 = Math.min(...hits.map((f) => f.bounds[0][1]))
    const x1 = Math.max(...hits.map((f) => f.bounds[1][0]))
    const y1 = Math.max(...hits.map((f) => f.bounds[1][1]))
    const k = Math.max(1, Math.min(12, 0.8 / Math.max((x1 - x0) / W, (y1 - y0) / H)))
    const t = zoomIdentity.translate(W / 2, H / 2).scale(k).translate(-(x0 + x1) / 2, -(y0 + y1) / 2)
    select(svgRef.current).call(zoomRef.current.transform, t)
  }, [answerIds, byId])

  function zoomBy(k: number) {
    if (zoomRef.current && svgRef.current) select(svgRef.current).call(zoomRef.current.scaleBy, k)
  }
  function resetZoom() {
    if (zoomRef.current && svgRef.current) select(svgRef.current).call(zoomRef.current.transform, zoomIdentity)
  }

  const fillClass = (f: MapFeature) => {
    if (reveal && isCorrect(f)) return 'fill-emerald-500'
    if (f.id === selected) return reveal ? 'fill-rose-500' : 'fill-teal-600'
    if (f.id === hover && !reveal) return 'fill-teal-300 dark:fill-teal-800'
    return 'fill-slate-300 dark:fill-slate-700'
  }

  const label = hover ? byId.get(hover)?.label : selected ? byId.get(selected)?.label : null
  const options = useMemo(
    () => [...features].sort((a, b) => a.label.localeCompare(b.label)).map((f) => ({ value: f.id, label: f.label })),
    [features],
  )

  return (
    <div className="space-y-2">
      <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-sky-50 dark:border-slate-800 dark:bg-slate-900">
        <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} className={`block h-auto w-full select-none ${onSelect ? 'cursor-pointer' : 'cursor-grab'}`} style={{ touchAction: 'none' }}>
          <g ref={gRef}>
            {features.map((f) => (
              <path
                key={f.id}
                d={f.d}
                className={`${fillClass(f)} stroke-white dark:stroke-slate-900`}
                strokeWidth={0.6}
                vectorEffect="non-scaling-stroke"
                style={colorOf?.(f) ? { fill: colorOf(f) } : undefined}
                onClick={() => !reveal && onSelect?.(f)}
                onPointerEnter={() => setHover(f.id)}
                onPointerLeave={() => setHover((h) => (h === f.id ? null : h))}
              >
                <title>{f.label}</title>
              </path>
            ))}
            {lines.map((l) => (
              <g key={l.label} className="pointer-events-none">
                <path d={l.d} fill="none" className="stroke-amber-600 dark:stroke-amber-400" strokeWidth={1.2} strokeDasharray="5 4" vectorEffect="non-scaling-stroke" />
                <text x={l.x + 2} y={l.y - 3} className="fill-amber-700 text-[11px] font-semibold dark:fill-amber-300">{l.label}</text>
              </g>
            ))}
          </g>
        </svg>
        <div className="absolute right-2 top-2 flex flex-col gap-1">
          <button type="button" onClick={() => zoomBy(2)} className={controlClass} aria-label="Zoom in">+</button>
          <button type="button" onClick={() => zoomBy(0.5)} className={controlClass} aria-label="Zoom out">−</button>
          <button type="button" onClick={resetZoom} className={controlClass} aria-label="Reset zoom">⟲</button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
        <span className="text-slate-600 dark:text-slate-400">
          {label ?? (onSelect ? 'Tap a country or region. Pinch or scroll to zoom.' : 'Pinch or scroll to zoom.')}
        </span>
        {!reveal && onSelect && (
          <button type="button" onClick={() => setShowList((s) => !s)} className="text-teal-700 underline dark:text-teal-400">
            {showList ? 'Hide list' : "Can't find it? Choose from a list"}
          </button>
        )}
      </div>
      {showList && !reveal && onSelect && (
        <PickList label="Place" options={options} value={selected} onChange={(id) => onSelect(byId.get(id)!)} />
      )}
      <p className="text-xs text-slate-400">
        Map data: <a href="https://www.naturalearthdata.com/" target="_blank" rel="noreferrer" className="underline">Natural Earth</a>;
        regions: <a href="https://www.geoboundaries.org/" target="_blank" rel="noreferrer" className="underline">geoBoundaries</a> (CC BY 4.0).
      </p>
    </div>
  )
}
