import { Link, useParams } from 'react-router'
import { useMapFeatures } from '../../../components/mapData'
import { PhotoGallery } from '../../../components/PhotoGallery'
import { Bullets, cardClass, PageHeader, RememberBox, Section } from '../../../components/ui'
import { WorldMap } from '../../../components/WorldMap'
import { countries } from '../../../content/countries'
import { geoPhotos, geoTopicById, topicsIn } from '../../../content/geology'
import { NotFound } from '../../../pages/NotFound'

export function TopicPage() {
  const { id } = useParams()
  const t = geoTopicById.get(id ?? '')
  const { features } = useMapFeatures('languages')
  if (!t) return <NotFound />
  const top = new Set(t.producers?.slice(0, 3))
  const all = new Set([...t.countries, ...(t.producers ?? [])])
  const siblings = topicsIn(t.category)
  const next = siblings[(siblings.indexOf(t) + 1) % siblings.length]

  return (
    <article className="space-y-8">
      <PageHeader crumbs={[{ to: '/geology', label: 'Geology' }, { to: `/geology?c=${encodeURIComponent(t.category)}`, label: t.category }]} title={t.title} subtitle={t.summary} />
      <PhotoGallery photos={geoPhotos(t.id)} alt={t.title} />
      {t.uses && <p className={`${cardClass} text-sm`}><span className="font-semibold">Used for: </span>{t.uses}</p>}
      <Section title="How it forms: the geology and chemistry"><Bullets items={t.science} /></Section>
      <Section title="What it looks like"><Bullets items={t.looks} /></Section>
      <Section title={t.category === 'Mining' ? 'Where it is mined' : 'Where'}>
        <p className="leading-relaxed">{t.where}</p>
        {features && all.size > 0 && (
          <WorldMap features={features} colorOf={(f) => (top.has(f.country) ? '#92400e' : all.has(f.country) ? '#f59e0b' : undefined)} />
        )}
        {t.producers && (
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Top producers, largest first: {t.producers.map((c) => countries[c]?.name ?? c).join(', ')}. Dark on the map: top 3.
          </p>
        )}
      </Section>
      <Section title="History"><Bullets items={t.history} /></Section>
      <Section title="Did you know?"><Bullets items={t.facts} /></Section>
      <Section title="GeoGuessr tips">
        <Bullets items={t.tips} />
        <RememberBox items={[t.remember]} />
      </Section>
      {t.related && (
        <Section title="Related">
          <ul className="flex flex-wrap gap-3 text-sm">
            {t.related.map((r) => (
              <li key={r.to}><Link to={r.to} className="text-teal-700 underline dark:text-teal-400">{r.label}</Link></li>
            ))}
          </ul>
        </Section>
      )}
      <nav className="flex justify-end text-sm">
        <Link to={`/geology/${next.id}`} className="text-teal-700 underline dark:text-teal-400">{next.title} →</Link>
      </nav>
    </article>
  )
}
