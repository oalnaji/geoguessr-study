import { cardClass, PageHeader, RememberBox, Section } from '../../../components/ui'
import { poleParts, whyTheyDiffer } from '../../../content/poles'

/** A simple labelled drawing of a distribution pole. */
function PoleDiagram() {
  const label = 'fill-slate-700 text-[11px] dark:fill-slate-300'
  return (
    <svg viewBox="0 0 360 330" className="mx-auto block w-full max-w-md" role="img" aria-label="Diagram of a utility pole and its parts">
      {/* wires */}
      <line x1="0" y1="52" x2="360" y2="52" className="stroke-slate-500" strokeWidth="1.5" />
      <line x1="0" y1="40" x2="360" y2="40" className="stroke-slate-500" strokeWidth="1.5" />
      <line x1="0" y1="64" x2="360" y2="64" className="stroke-slate-500" strokeWidth="1.5" />
      <line x1="0" y1="190" x2="360" y2="195" className="stroke-slate-400" strokeWidth="1" strokeDasharray="4 3" />
      {/* pole */}
      <rect x="170" y="30" width="16" height="290" className="fill-amber-800/80" />
      {/* crossarm + braces */}
      <rect x="110" y="68" width="136" height="8" className="fill-slate-600" />
      <line x1="178" y1="112" x2="130" y2="76" className="stroke-slate-600" strokeWidth="3" />
      <line x1="178" y1="112" x2="226" y2="76" className="stroke-slate-600" strokeWidth="3" />
      {/* insulators */}
      {[120, 236].map((x) => <rect key={x} x={x - 4} y="54" width="8" height="14" rx="2" className="fill-emerald-600" />)}
      <rect x="174" y="18" width="8" height="14" rx="2" className="fill-emerald-600" />
      {/* transformer */}
      <rect x="186" y="128" width="30" height="40" rx="5" className="fill-slate-400" />
      {/* lamp */}
      <path d="M170 210 L120 202" className="stroke-slate-600" strokeWidth="3" />
      <rect x="108" y="200" width="16" height="6" className="fill-yellow-400" />
      {/* tag */}
      <rect x="171" y="250" width="14" height="10" className="fill-yellow-300" />
      {/* guy wire */}
      <line x1="178" y1="90" x2="320" y2="320" className="stroke-slate-500" strokeWidth="1.5" />
      <rect x="296" y="276" width="10" height="44" transform="rotate(-32 301 298)" className="fill-yellow-400" />
      {/* labels */}
      <text x="4" y="34" className={label}>Power lines</text>
      <text x="190" y="22" className={label}>Insulator (pin)</text>
      <text x="250" y="80" className={label}>Crossarm</text>
      <text x="228" y="112" className={label}>Brace</text>
      <text x="222" y="152" className={label}>Transformer</text>
      <text x="4" y="186" className={label}>Telephone / cable lines</text>
      <text x="60" y="222" className={label}>Street lamp</text>
      <text x="60" y="258" className={label}>ID tag / plate →</text>
      <text x="236" y="250" className={label}>Guy wire + guard</text>
    </svg>
  )
}

export function HowPolesWork() {
  return (
    <article className="space-y-8">
      <PageHeader crumbs={[{ to: '/poles', label: 'Utility Poles' }]} title="How a pole works" subtitle="The parts of a utility pole, and why every country builds them differently." />
      <div className={cardClass}><PoleDiagram /></div>
      <RememberBox items={['Read a pole from the top down: pole top shape → insulators → transformer → tags at eye level. Each layer narrows the country, then the region.']} />
      <Section title="The parts">
        <ul className="grid gap-3 sm:grid-cols-2">
          {poleParts.map((p) => (
            <li key={p.name} className={`${cardClass} space-y-1.5`}>
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm leading-relaxed">{p.what}</p>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400"><span className="font-semibold">In GeoGuessr: </span>{p.varies}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Why poles differ between countries">
        <ul className="space-y-3">
          {whyTheyDiffer.map((w) => (
            <li key={w.title}>
              <h3 className="font-semibold">{w.title}</h3>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{w.text}</p>
            </li>
          ))}
        </ul>
      </Section>
    </article>
  )
}
