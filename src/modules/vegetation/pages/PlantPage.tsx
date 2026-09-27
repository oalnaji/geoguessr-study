import { Link, useParams } from 'react-router'
import { PhotoGallery } from '../../../components/PhotoGallery'
import { Bullets, cardClass, Chip, OnThisPage, PageHeader, Prose, RememberBox, Section, Sources } from '../../../components/ui'
import { countries } from '../../../content/countries'
import { clueTarget, plantById, plantData } from '../../../content/vegetation'
import { NotFound } from '../../../pages/NotFound'
import { PlantMap } from '../ShadedMap'

export function PlantPage() {
  const { id } = useParams()
  const plant = plantById.get(id ?? '')
  if (!plant) return <NotFound />

  const photos = plantData(plant.id).photos
  const target = clueTarget(plant)
  const regionNames = target.regions.length
    ? `${target.regions.length} state${target.regions.length === 1 ? '' : 's'}/province${target.regions.length === 1 ? '' : 's'} highlighted on the map`
    : null
  const isForest = plant.section === 'forest'
  const isSoil = plant.section === 'soil'

  return (
    <article className="space-y-8">
      <PageHeader
        crumbs={[{ to: '/vegetation', label: 'Vegetation & Crops' }]}
        title={plant.name}
        subtitle={plant.scientific ? <em>{plant.scientific}</em> : plant.latitude}
      >
        <div className="flex flex-wrap gap-2">
          {plant.swatch && <span className="inline-block h-6 w-10 rounded-md ring-1 ring-black/10" style={{ background: plant.swatch }} title="Typical colour" />}
          <Chip tone="teal">{plant.kind}</Chip>
          {plant.latitude && plant.scientific && <Chip>{plant.latitude}</Chip>}
          {plant.section === 'crop' || plant.alsoCrop ? <Chip>Crop</Chip> : null}
        </div>
      </PageHeader>

      <PhotoGallery photos={photos} alt={plant.name} />

      <OnThisPage
        items={[
          { id: 'recognise', label: 'Recognise' },
          { id: 'where', label: 'Where' },
          { id: 'why', label: 'Why there?' },
          { id: 'tips', label: 'GeoGuessr tips' },
        ]}
      />

      <Section id="recognise" title="How to recognise it">
        <Bullets items={plant.recognise} />
        <RememberBox items={plant.remember} />
      </Section>

      {plant.lookalikes.length > 0 && (
        <Section title="Don't confuse it with">
          <ul className="space-y-2">
            {plant.lookalikes.map((l) => {
              const other = l.id ? plantById.get(l.id) : undefined
              const thumb = other && plantData(other.id).photos[0]
              const body = (
                <>
                  {thumb && <img src={thumb.url} alt="" loading="lazy" className="h-16 w-20 shrink-0 rounded-md object-cover" />}
                  <span>
                    <span className="font-semibold">{l.name}</span>
                    <span className="block text-sm text-slate-600 dark:text-slate-400">{l.tell}</span>
                  </span>
                </>
              )
              return (
                <li key={l.name}>
                  {other ? (
                    <Link to={`/vegetation/${other.id}`} className={`${cardClass} flex gap-3 !p-3 hover:border-teal-600`}>{body}</Link>
                  ) : (
                    <div className={`${cardClass} flex gap-3 !p-3`}>{body}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </Section>
      )}

      <Section id="where" title={isSoil ? 'Where you see it' : 'Where it grows'}>
        <dl className="space-y-2">
          <div>
            <dt className="text-sm font-semibold text-slate-500">{isForest || isSoil ? 'Where it is found' : 'Native range'}</dt>
            <dd>{plant.nativeRange}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-slate-500">{isForest ? 'Today' : isSoil ? 'Where it shows' : plant.section === 'crop' || plant.alsoCrop ? 'Grown in' : 'Planted or naturalised in'}</dt>
            <dd>{plant.grownIn}</dd>
          </div>
          {plant.latitude && (
            <div>
              <dt className="text-sm font-semibold text-slate-500">Latitude</dt>
              <dd>{plant.latitude}</dd>
            </div>
          )}
        </dl>
        <PlantMap plant={plant} />
        {isSoil && <Link to="/vegetation/soils" className="text-sm text-teal-700 underline dark:text-teal-400">See all soil colours on one map →</Link>}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-slate-500">A useful GeoGuessr clue in:</span>
          {plant.clueCountries.map((c) => <Chip key={c} tone="teal">{countries[c]?.name ?? c}</Chip>)}
        </div>
        {regionNames && <p className="text-xs text-slate-500">In large countries only the right regions count: {regionNames}.</p>}
      </Section>

      <Section id="why" title={isSoil ? 'Why this colour? The science' : 'Why there? The science'}>
        <Prose paragraphs={plant.science} />
      </Section>

      <Section title={isSoil ? 'People and history' : 'Why there? The history'}>
        <Prose paragraphs={plant.history} />
      </Section>

      <Section id="tips" title="GeoGuessr tips">
        <Bullets items={plant.tips} />
      </Section>

      {plant.facts && plant.facts.length > 0 && (
        <Section title="Interesting facts">
          <Bullets items={plant.facts} />
        </Section>
      )}

      <Section title="Sources">
        <Sources urls={plant.sources} />
        <p className="text-xs text-slate-500">
          Photos: Wikimedia Commons and iNaturalist (credited under each photo). Occurrences: GBIF. Production: FAO via Our World in Data.
        </p>
      </Section>
    </article>
  )
}
