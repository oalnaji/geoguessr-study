import { Link, useParams, useSearchParams } from 'react-router'
import { Bullets, cardClass, PageHeader, Section } from '../../../components/ui'
import { countryName, regionFacts, studyByCountry } from '../../../content/regions'
import { NotFound } from '../../../pages/NotFound'
import { GROUP_COLORS } from '../mapFocus'
import { CountryMap } from '../maps'
import { UsPlates, UsShields } from '../UsRoadside'

const usTabs = [
  { id: '', label: 'Regions' },
  { id: 'shields', label: 'Highway shields' },
  { id: 'plates', label: 'Licence plates' },
] as const

/** Link to the PlonkIt guide the markers are based on. */
export function PlonkItLink({ slug, children }: { slug?: string; children?: string }) {
  if (!slug) return null
  return (
    <a href={`https://www.plonkit.net/${slug}`} target="_blank" rel="noreferrer" className="text-sm text-teal-700 underline dark:text-teal-400">
      {children ?? 'Full PlonkIt guide'} ↗
    </a>
  )
}

export function CountryPage() {
  const { country } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const study = studyByCountry.get(country ?? '')
  if (!study) return <NotFound />

  const tabs = study.country === 'US' ? usTabs : null
  const tab = tabs ? (searchParams.get('tab') ?? '') : ''

  return (
    <article className="space-y-8">
      <PageHeader crumbs={[{ to: '/regions', label: 'Regions' }]} title={countryName(study.country)} subtitle={`${study.regions.length} ${study.unit}`}>
        <PlonkItLink slug={study.plonkit} />
      </PageHeader>
      {tabs && (
        <nav className="flex flex-wrap gap-2 border-b border-slate-200 pb-2 dark:border-slate-800">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setSearchParams(t.id ? { tab: t.id } : {}, { replace: true })}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium ${tab === t.id ? 'bg-teal-700 text-white' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'}`}
            >
              {t.label}
            </button>
          ))}
        </nav>
      )}
      {tab === 'shields' && <UsShields />}
      {tab === 'plates' && <UsPlates />}
      {tab === '' && <CountryOverview study={study} />}
    </article>
  )
}

function CountryOverview({ study }: { study: NonNullable<ReturnType<typeof studyByCountry.get>> }) {
  return (
    <>
      <p className="leading-relaxed">{study.intro}</p>

      <Section title="Map" note="Tap a region to open its page.">
        <CountryMap country={study.country} />
      </Section>

      <Section title="How to tell the regions apart">
        <Bullets items={study.tips} />
      </Section>

      {study.groups.map((g, i) => {
        const regions = study.regions.filter((r) => r.group === g.name)
        return (
          <Section
            key={g.name}
            title={g.name}
            note={
              <>
                {study.groups.length > 1 && <span className="mr-1.5 inline-block h-3 w-4 rounded-sm align-middle" style={{ background: GROUP_COLORS[i % GROUP_COLORS.length] }} />}
                {g.blurb}
              </>
            }
          >
            <ul className="grid gap-2 sm:grid-cols-2">
              {regions.map((r) => (
                <li key={r.id}>
                  <Link to={r.id} className={`${cardClass} flex items-center gap-3 !p-2 hover:border-teal-600`}>
                    {regionFacts(r).photos[0] ? (
                      <img src={regionFacts(r).photos[0].url} alt="" loading="lazy" className="h-12 w-16 shrink-0 rounded object-cover" />
                    ) : (
                      <div className="h-12 w-16 shrink-0 rounded bg-slate-200 dark:bg-slate-800" />
                    )}
                    <span>
                      <span className="block font-semibold leading-tight">{r.name}</span>
                      <span className="text-xs text-slate-500">{regionFacts(r).capital}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        )
      })}
    </>
  )
}
