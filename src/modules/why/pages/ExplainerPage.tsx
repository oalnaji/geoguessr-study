import { Link, useParams } from 'react-router'
import { useMapFeatures } from '../../../components/mapData'
import { PhotoGallery } from '../../../components/PhotoGallery'
import { Bullets, cardClass, Chip, PageHeader, Prose, RememberBox, Section } from '../../../components/ui'
import { WorldMap } from '../../../components/WorldMap'
import { countries } from '../../../content/countries'
import { explainerById, explainerPhotos, explainers } from '../../../content/why'
import { NotFound } from '../../../pages/NotFound'

export function ExplainerPage() {
  const { id } = useParams()
  const e = explainerById.get(id ?? '')
  const { features } = useMapFeatures('languages')
  if (!e) return <NotFound />
  const i = explainers.indexOf(e)
  const prev = explainers[(i - 1 + explainers.length) % explainers.length]
  const next = explainers[(i + 1) % explainers.length]
  const set = new Set(e.countries)
  const photos = explainerPhotos(e.id)

  return (
    <article className="space-y-8">
      <PageHeader crumbs={[{ to: '/why', label: 'Why Is It Like This?' }, { to: `/why?c=${encodeURIComponent(e.category)}`, label: e.category }]} title={e.title} />
      {photos.length > 0 && <PhotoGallery photos={photos} alt={e.title} />}
      <Section title="What you see"><p className="leading-relaxed">{e.observation}</p></Section>
      <Section title="Why"><Prose paragraphs={e.why} /></Section>
      <Section title="Where">
        <p className="leading-relaxed">{e.where}</p>
        {features ? <WorldMap features={features} colorOf={(f) => (set.has(f.country) ? '#0f766e' : undefined)} /> : <p className={`${cardClass} text-center text-slate-500`}>Loading map…</p>}
        <div className="flex flex-wrap gap-1.5">{e.countries.map((c) => <Chip key={c}>{countries[c]?.name ?? c}</Chip>)}</div>
      </Section>
      {e.lookalikes && <Section title="Don't confuse it with"><p className="leading-relaxed">{e.lookalikes}</p></Section>}
      <Section title="GeoGuessr tips">
        <Bullets items={e.tips} />
        <RememberBox items={[e.remember]} />
      </Section>
      {e.related && (
        <Section title="Related">
          <ul className="space-y-1 text-sm">{e.related.map((r) => <li key={r.to}><Link to={r.to} className="text-teal-700 underline dark:text-teal-400">{r.label}</Link></li>)}</ul>
        </Section>
      )}
      <nav className="flex justify-between gap-2 text-sm">
        <Link to={`/why/${prev.id}`} className="text-teal-700 underline dark:text-teal-400">← Previous</Link>
        <Link to={`/why/${next.id}`} className="text-teal-700 underline dark:text-teal-400">Next →</Link>
      </nav>
    </article>
  )
}
