import { Link, useParams } from 'react-router'
import { PhotoGallery } from '../../../components/PhotoGallery'
import { Bullets, cardClass, Chip, PageHeader, Prose, RememberBox, Section } from '../../../components/ui'
import { countries } from '../../../content/countries'
import { landformById, landformPhotos, landforms } from '../../../content/topography'
import { NotFound } from '../../../pages/NotFound'
import { PhysicalMap } from '../PhysicalMap'

export function LandformPage() {
  const { id } = useParams()
  const l = landformById.get(id ?? '')
  if (!l) return <NotFound />
  const same = landforms.filter((x) => x.kind === l.kind)
  const i = same.indexOf(l)
  const prev = same[(i - 1 + same.length) % same.length]
  const next = same[(i + 1) % same.length]
  const isRiver = l.kind === 'river'

  return (
    <article className="space-y-8">
      <PageHeader
        crumbs={[{ to: '/topography', label: 'Mountains & Rivers' }, { to: isRiver ? '/topography?tab=rivers' : '/topography', label: isRiver ? 'Rivers' : 'Mountain ranges' }]}
        title={l.name}
        subtitle={l.summary}
      >
        <div className="flex flex-wrap gap-2">
          <Chip tone="teal">{isRiver ? 'River' : 'Mountain range'}</Chip>
          <Chip>{l.continent}</Chip>
        </div>
      </PageHeader>

      <PhotoGallery photos={landformPhotos(l.id)} alt={l.name} />

      <dl className={`${cardClass} grid gap-3 sm:grid-cols-3`}>
        {l.stats.map((s) => (
          <div key={s.label}><dt className="text-xs text-slate-500">{s.label}</dt><dd className="font-semibold">{s.value}</dd></div>
        ))}
      </dl>

      <Section title="Where it is">
        <PhysicalMap active={l.id} kind={l.kind} />
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-slate-500">Countries:</span>
          {l.countries.map((c) => <Chip key={c}>{countries[c]?.name ?? c}</Chip>)}
        </div>
      </Section>

      <Section title="What it looks like"><Bullets items={l.looks} /></Section>
      <Section title={isRiver ? 'Where the water comes from' : 'How it formed'}><Prose paragraphs={l.formed} /></Section>
      <Section title="History"><Bullets items={l.history} /></Section>
      <Section title="Interesting facts"><Bullets items={l.facts} /></Section>
      <Section title="GeoGuessr tips">
        <Bullets items={l.tips} />
        <RememberBox items={[l.remember]} />
      </Section>

      <nav className="flex flex-wrap items-center justify-between gap-2 text-sm">
        <Link to={`/topography/${prev.id}`} className="text-teal-700 underline dark:text-teal-400">← {prev.name}</Link>
        <a href={`https://en.wikipedia.org/wiki/${encodeURIComponent(l.wikipedia.replace(/ /g, '_'))}`} target="_blank" rel="noreferrer" className="text-slate-500 underline">Wikipedia</a>
        <Link to={`/topography/${next.id}`} className="text-teal-700 underline dark:text-teal-400">{next.name} →</Link>
      </nav>
    </article>
  )
}
