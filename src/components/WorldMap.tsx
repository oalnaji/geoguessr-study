import { select } from 'd3-selection'
import { zoom, zoomIdentity, type ZoomBehavior } from 'd3-zoom'
import { useEffect, useMemo, useRef, useState } from 'react'
import { boundsOf, MAP_HEIGHT as H, MAP_WIDTH as W, type MapBounds, type MapFeature, type MapLine, type MapOverlay } from './mapData'
import { PickList } from './PickList'

/** Radius of marker rings, in screen pixels (of the 960-wide map) */
const RING = 9

const controlClass = 'h-9 w-9 rounded-md bg-white/90 text-lg font-semibold shadow dark:bg-slate-800/90'

/**
 * A world map with pinch/scroll zoom. With `onSelect` it is tappable, with a searchable list for
 * places too small to tap; after `reveal`, correct places turn green, a wrong pick red, and the map
 * zooms to the answer. Without `onSelect` it is a read-only map shaded by `colorOf`.
 */
export function WorldMap({
  features, selected = null, onSelect, reveal = false, isCorrect = () => false, colorOf, lines = [], focus, markers = [], hideLabels = false, overlays = [], activeOverlay = null, onOverlay,
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
  /** Area to zoom to at the start, e.g. one country */
  focus?: MapBounds
  /** Rings drawn around places too small to see, in map coordinates */
  markers?: { x: number; y: number }[]
  /** Mountain ranges and rivers drawn over the countries */
  overlays?: MapOverlay[]
  /** The overlay to emphasise; the others are drawn faintly */
  activeOverlay?: string | null
  /** Makes overlays tappable */
  onOverlay?: (id: string) => void
  /** Hide place names (hover labels, tooltips, the list) until `reveal`, when the names are the answer */
  hideLabels?: boolean
}) {
  const svgRef = useRef<SVGSVGElement>(null)
  const gRef = useRef<SVGGElement>(null)
  const zoomRef = useRef<ZoomBehavior<SVGSVGElement, unknown> | null>(null)
  const kRef = useRef(1)
  const [hover, setHover] = useState<string | null>(null)
  const [showList, setShowList] = useState(false)
  const byId = useMemo(() => new Map(features.map((f) => [f.id, f])), [features])

  useEffect(() => {
    const svg = svgRef.current!
    const z = zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 60])
      .translateExtent([[0, 0], [W, H]])
      .clickDistance(6)
      .on('zoom', (e) => {
        gRef.current?.setAttribute('transform', e.transform.toString())
        // Keep marker rings the same size on screen at any zoom.
        kRef.current = e.transform.k
        gRef.current?.querySelectorAll('circle[data-marker]').forEach((c) => c.setAttribute('r', String(RING / e.transform.k)))
      })
    select(svg).call(z)
    zoomRef.current = z
    return () => {
      select(svg).on('.zoom', null)
    }
  }, [])

  function zoomToBox([[x0, y0], [x1, y1]]: MapBounds, maxK: number) {
    if (!zoomRef.current || !svgRef.current) return
    const k = Math.max(1, Math.min(maxK, 0.85 / Math.max((x1 - x0) / W, (y1 - y0) / H)))
    const t = zoomIdentity.translate(W / 2, H / 2).scale(k).translate(-(x0 + x1) / 2, -(y0 + y1) / 2)
    select(svgRef.current).call(zoomRef.current.transform, t)
  }

  // New rings start at the default size: match them to the current zoom.
  const markerKey = markers.map((m) => `${m.x},${m.y}`).join(';')
  useEffect(() => {
    gRef.current?.querySelectorAll('circle[data-marker]').forEach((c) => c.setAttribute('r', String(RING / kRef.current)))
  }, [markerKey])

  // Start zoomed to the focus area (compared by value, so it runs once per area).
  const [[fx0, fy0], [fx1, fy1]] = focus ?? [[0, 0], [0, 0]]
  useEffect(() => {
    if (fx1 > fx0) zoomToBox([[fx0, fy0], [fx1, fy1]], 40)
  }, [fx0, fy0, fx1, fy1])

  // The answer as a stable string, so the effect below runs once per reveal.
  const answerIds = reveal ? features.filter(isCorrect).map((f) => f.id).join(',') : ''

  // Zoom to the answer after checking, so small places are visible.
  useEffect(() => {
    if (!answerIds) return
    zoomToBox(boundsOf(answerIds.split(',').map((id) => byId.get(id)!)), 12)
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

  // Custom colours give way to the pick, the hovered place and the revealed answer.
  const fillOf = (f: MapFeature) => {
    const custom = colorOf?.(f)
    const emphasised = f.id === selected || (reveal && isCorrect(f)) || (onSelect && !reveal && f.id === hover)
    return custom && !emphasised ? { fill: custom } : undefined
  }

  const namesHidden = hideLabels && !reveal
  const label = namesHidden ? null : hover ? byId.get(hover)?.label : selected ? byId.get(selected)?.label : null
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
                style={fillOf(f)}
                onClick={() => !reveal && onSelect?.(f)}
                onPointerEnter={() => setHover(f.id)}
                onPointerLeave={() => setHover((h) => (h === f.id ? null : h))}
              >
                {!namesHidden && <title>{f.label}</title>}
              </path>
            ))}
            {overlays.map((o) => {
              const on = activeOverlay === o.id
              const faint = activeOverlay !== null && !on
              return o.kind === 'area' ? (
                <path
                  key={`a-${o.id}`}
                  d={o.d}
                  className={`${on ? 'fill-amber-700/80 stroke-amber-900' : faint ? 'fill-amber-700/15 stroke-transparent' : 'fill-amber-700/45 stroke-amber-800/60'} ${onOverlay ? 'cursor-pointer hover:fill-amber-600/80' : 'pointer-events-none'}`}
                  strokeWidth={0.6}
                  vectorEffect="non-scaling-stroke"
                  onClick={() => onOverlay?.(o.id)}
                ><title>{o.label ?? o.id}</title></path>
              ) : (
                <g key={`l-${o.id}`} className={onOverlay ? 'cursor-pointer' : 'pointer-events-none'} onClick={() => onOverlay?.(o.id)}>
                  {onOverlay && <path d={o.d} fill="none" stroke="transparent" strokeWidth={10} vectorEffect="non-scaling-stroke" />}
                  <path
                    d={o.d}
                    fill="none"
                    className={on ? 'stroke-blue-700 dark:stroke-sky-300' : faint ? 'stroke-sky-500/30' : 'stroke-sky-600 dark:stroke-sky-400'}
                    strokeWidth={on ? 3 : 1.4}
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </g>
              )
            })}
            {markers.map((m) => (
              <circle
                key={`${m.x},${m.y}`}
                data-marker
                cx={m.x}
                cy={m.y}
                r={RING}
                fill="none"
                className="pointer-events-none stroke-rose-600 dark:stroke-rose-400"
                strokeWidth={2.5}
                vectorEffect="non-scaling-stroke"
              />
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
        {!reveal && onSelect && !hideLabels && (
          <button type="button" onClick={() => setShowList((s) => !s)} className="text-teal-700 underline dark:text-teal-400">
            {showList ? 'Hide list' : "Can't find it? Choose from a list"}
          </button>
        )}
      </div>
      {showList && !reveal && onSelect && !hideLabels && (
        <PickList label="Place" options={options} value={selected} onChange={(id) => onSelect(byId.get(id)!)} />
      )}
      <p className="text-xs text-slate-400">
        Map data: <a href="https://www.naturalearthdata.com/" target="_blank" rel="noreferrer" className="underline">Natural Earth</a>;
        regions: <a href="https://www.geoboundaries.org/" target="_blank" rel="noreferrer" className="underline">geoBoundaries</a> (CC BY 4.0).
      </p>
    </div>
  )
}
