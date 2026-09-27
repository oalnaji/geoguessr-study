import { Link, useParams } from 'react-router'
import { PhotoGallery } from '../../../components/PhotoGallery'
import { Bullets, cardClass, Chip, PageHeader, RememberBox, Section } from '../../../components/ui'
import { countryName, formatNumber, markersOf, plantsIn, regionById, regionFacts, studyByCountry } from '../../../content/regions'
import { usPlates, usShields } from '../../../content/regions/usRoadside'
import { plantData } from '../../../content/vegetation'
import { NotFound } from '../../../pages/NotFound'
import { RegionMap } from '../maps'
import { PlonkItLink } from './CountryPage'
import { PlateCard, ShieldImage } from '../UsRoadside'

export function RegionPage() {
  const { country, region: id } = useParams()
  const study = studyByCountry.get(country ?? '')
  const region = regionById.get(id ?? '')
  if (!study || !region || !region.id.startsWith(`${study.country}-`)) return <NotFound />

  const facts = regionFacts(region)
  const inRegion = plantsIn(region)
  const plants = inRegion.filter((p) => p.section !== 'soil')
  const soils = inRegion.filter((p) => p.section === 'soil')
  const i = study.regions.indexOf(region)
  const prev = study.regions[(i - 1 + study.regions.length) % study.regions.length]
  const next = study.regions[(i + 1) % study.regions.length]
  const markers = markersOf(region.id)
  const shield = usShields[region.id]
  const plate = usPlates[region.id]
  const density = facts.population && facts.areaKm2 ? Math.round(facts.population / facts.areaKm2) : undefined

  return (
    <article className="space-y-8">
      <PageHeader
        crumbs={[{ to: '/regions', label: 'Regions' }, { to: `/regions/${study.country}`, label: countryName(study.country) }]}
        title={region.name}
        subtitle={facts.capital ? `Capital: ${facts.capital}` : undefined}
      >
        <div className="flex flex-wrap gap-2">
          <Chip tone="teal">{region.group}</Chip>
          <Chip>{countryName(study.country)}</Chip>
        </div>
      </PageHeader>

      <Section title="Where it is">
        <RegionMap regions={[region]} />
      </Section>

      <PhotoGallery photos={facts.photos} alt={region.name} />

      <dl className={`${cardClass} grid grid-cols-2 gap-3 sm:grid-cols-4`}>
        <div><dt className="text-xs text-slate-500">Capital</dt><dd className="font-semibold">{facts.capital ?? '—'}</dd></div>
        <div><dt className="text-xs text-slate-500">Population</dt><dd className="font-semibold">{formatNumber(facts.population)}</dd></div>
        <div><dt className="text-xs text-slate-500">Area</dt><dd className="font-semibold">{facts.areaKm2 ? `${formatNumber(facts.areaKm2)} km²` : '—'}</dd></div>
        <div><dt className="text-xs text-slate-500">People per km²</dt><dd className="font-semibold">{formatNumber(density)}</dd></div>
      </dl>

      <Section title="What it looks like">
        <p className="leading-relaxed">{region.looks}</p>
      </Section>

      {region.note && <p className={`${cardClass} text-sm`}>ℹ️ {region.note}</p>}

      <Section title="GeoGuessr clues">
        <Bullets items={region.clues} />
        <RememberBox items={[region.remember]} />
      </Section>

      {markers.length > 0 && (
        <Section title="Notable markers" note={<>Poles, bollards, signs, roads and buildings that point here. Based on PlonkIt; <PlonkItLink slug={study.plonkit}>see the full guide</PlonkItLink></>}>
          <Bullets items={markers} />
        </Section>
      )}

      {(shield || plate) && (
        <Section title="Highway shield and licence plate">
          <div className="flex flex-wrap items-center gap-4">
            {shield && (
              <div className="flex items-center gap-3">
                <ShieldImage file={shield.file} size={56} />
                <span className="max-w-xs text-sm text-slate-600 dark:text-slate-400">{shield.look}</span>
              </div>
            )}
            {plate && (
              <div className="flex items-center gap-3">
                <PlateCard plate={plate} label={region.name} />
                <span className="max-w-xs text-sm text-slate-600 dark:text-slate-400">{plate.look} {plate.front ? 'Front and rear plates.' : 'Rear plate only.'}</span>
              </div>
            )}
          </div>
          <Link to="/regions/US?tab=shields" className="text-sm text-teal-700 underline dark:text-teal-400">All state shields and plates →</Link>
        </Section>
      )}

      {soils.length > 0 && (
        <Section title="Soil colour" note="From the Vegetation module.">
          <ul className="flex flex-wrap gap-2">
            {soils.map((s) => (
              <li key={s.id}>
                <Link to={`/vegetation/${s.id}`} className={`${cardClass} flex items-center gap-2 !p-1.5 !pr-3 hover:border-teal-600`}>
                  <span className="inline-block h-9 w-12 rounded ring-1 ring-black/10" style={{ background: s.swatch }} />
                  <span className="text-sm font-medium">{s.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {plants.length > 0 && (
        <Section title="Plants that are a clue here" note="From the Vegetation module.">
          <ul className="flex flex-wrap gap-2">
            {plants.map((p) => {
              const photo = plantData(p.id).photos[0]
              return (
                <li key={p.id}>
                  <Link to={`/vegetation/${p.id}`} className={`${cardClass} flex items-center gap-2 !p-1.5 !pr-3 hover:border-teal-600`}>
                    {photo && <img src={photo.url} alt="" loading="lazy" className="h-9 w-12 rounded object-cover" />}
                    <span className="text-sm font-medium">{p.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </Section>
      )}

      <nav className="flex flex-wrap items-center justify-between gap-2 text-sm">
        <Link to={`/regions/${study.country}/${prev.id}`} className="text-teal-700 underline dark:text-teal-400">← {prev.name}</Link>
        {facts.wikipedia && <a href={facts.wikipedia} target="_blank" rel="noreferrer" className="text-slate-500 underline">Wikipedia</a>}
        <Link to={`/regions/${study.country}/${next.id}`} className="text-teal-700 underline dark:text-teal-400">{next.name} →</Link>
      </nav>
    </article>
  )
}
