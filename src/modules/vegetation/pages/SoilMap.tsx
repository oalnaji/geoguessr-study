import { useMemo } from 'react'
import { Link, useNavigate } from 'react-router'
import { useMapFeatures } from '../../../components/mapData'
import { cardClass, linkCardClass, PageHeader, RememberBox, Section } from '../../../components/ui'
import { WorldMap } from '../../../components/WorldMap'
import { countries } from '../../../content/countries'
import { plantData, soilCountryNotes, soilList, soilOf } from '../../../content/vegetation'

/** All soil colours on one map, region by region, with how colour changes inside big countries. */
export function SoilMap() {
  const { features, error } = useMapFeatures('vegetation')
  const navigate = useNavigate()
  // Show the soil in the hover label, e.g. "Paraná, Brazil: Red tropical soil".
  const labelled = useMemo(() => features?.map((f) => {
    const soil = soilOf(f)
    return soil ? { ...f, label: `${f.label}: ${soil.name}` } : f
  }) ?? null, [features])

  return (
    <article className="space-y-8">
      <PageHeader crumbs={[{ to: '/vegetation', label: 'Vegetation & Crops' }, { to: '/vegetation?tab=soils', label: 'Soils' }]} title="Soil colours" subtitle="What colour the ground is, where, and why." />

      <Section title="Why soil has a colour">
        <ul className="list-disc space-y-1.5 pl-5 leading-relaxed">
          <li><strong>Red and orange = iron rust.</strong> Hematite (red) forms where soils are old, warm and well drained; goethite (yellow-orange) where they stay wet.</li>
          <li><strong>Black = humus (or special clay).</strong> Centuries of dead grass roots in cold grasslands, volcanic ash that binds organic matter, or swelling basalt clay.</li>
          <li><strong>Pale grey and white = everything washed out, or lime.</strong> Acid pine needles bleach sandy soils; pure quartz sand has nothing to colour it; chalk and limestone are white rock.</li>
          <li><strong>Beige gravel = no weathering at all.</strong> Deserts are too dry to rust or grow humus, so the ground stays the colour of crushed rock.</li>
        </ul>
        <RememberBox items={['Rust is red, rot is black, rinsed is white, and raw rock is beige.']} />
      </Section>

      <Section title="Map" note="Each region shows its typical soil where it is a useful clue. Tap a region to open that soil's page. Grey = no single typical colour (or not covered yet).">
        {labelled ? (
          <WorldMap
            features={labelled}
            colorOf={(f) => soilOf(f)?.swatch}
            onSelect={(f) => {
              const soil = soilOf(f)
              if (soil) navigate(`/vegetation/${soil.id}`)
            }}
          />
        ) : (
          <p className={`${cardClass} text-center text-slate-500`}>{error ? 'The map could not be loaded.' : 'Loading map…'}</p>
        )}
        <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
          {soilList.map((s) => (
            <li key={s.id}>
              <Link to={`/vegetation/${s.id}`} className="flex items-center gap-1.5 hover:text-teal-700 dark:hover:text-teal-400">
                <span className="inline-block h-3.5 w-5 rounded-sm ring-1 ring-black/10" style={{ background: s.swatch }} />
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="How the colour changes inside big countries">
        <ul className="space-y-3">
          {soilCountryNotes.map((n) => (
            <li key={n.country} className={cardClass}>
              <h3 className="font-semibold">{countries[n.country]?.name ?? n.country}</h3>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{n.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="All soils">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {soilList.map((s) => {
            const photo = plantData(s.id).photos[0]
            return (
              <li key={s.id}>
                <Link to={`/vegetation/${s.id}`} className={`${linkCardClass} h-full overflow-hidden !p-0`}>
                  {photo ? <img src={photo.url} alt="" loading="lazy" className="h-28 w-full object-cover" /> : <div className="h-28" style={{ background: s.swatch }} />}
                  <div className="flex items-center gap-2 p-3">
                    <span className="inline-block h-4 w-4 shrink-0 rounded-sm ring-1 ring-black/10" style={{ background: s.swatch }} />
                    <span className="font-semibold leading-tight">{s.name}</span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </Section>
    </article>
  )
}
