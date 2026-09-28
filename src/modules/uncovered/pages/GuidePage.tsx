import { Link, useParams } from 'react-router'
import { boundsOf, useMapFeatures } from '../../../components/mapData'
import { PhotoGallery } from '../../../components/PhotoGallery'
import { Bullets, cardClass, PageHeader, RememberBox, Section } from '../../../components/ui'
import { WorldMap } from '../../../components/WorldMap'
import { guideById, guidePhotos, guides } from '../../../content/uncovered'
import { NotFound } from '../../../pages/NotFound'

export function GuidePage() {
  const { id } = useParams()
  const g = guideById.get(id ?? '')
  const { features } = useMapFeatures('languages')
  if (!g) return <NotFound />
  const set = new Set(g.countries)
  const shapes = features?.filter((f) => set.has(f.country)) ?? []
  const i = guides.indexOf(g)
  const next = guides[(i + 1) % guides.length]

  return (
    <article className="space-y-8">
      <PageHeader crumbs={[{ to: '/uncovered', label: 'Uncovered Countries' }]} title={g.name} subtitle={g.summary} />
      <PhotoGallery photos={guidePhotos(g.id)} alt={g.name} />
      <p className={`${cardClass} text-sm`}><span className="font-semibold">Street View: </span>{g.coverage}</p>
      {features && shapes.length > 0 && (
        <WorldMap features={features} focus={boundsOf(shapes)} colorOf={(f) => (set.has(f.country) ? '#b45309' : undefined)} />
      )}
      <Section title="Landscape"><Bullets items={g.landscape} /></Section>
      <Section title="Roads, buildings and infrastructure"><Bullets items={g.infrastructure} /></Section>
      <Section title="Crops and economy"><Bullets items={g.crops} /></Section>
      <Section title="People, language and history"><Bullets items={g.people} /></Section>
      <Section title="Did you know?"><Bullets items={g.facts} /></Section>
      <Section title="Covered look-alikes">
        <p className="leading-relaxed">{g.lookalikes}</p>
        <RememberBox items={[g.remember]} />
      </Section>
      <nav className="flex justify-end text-sm">
        <Link to={`/uncovered/${next.id}`} className="text-teal-700 underline dark:text-teal-400">{next.name} →</Link>
      </nav>
    </article>
  )
}
