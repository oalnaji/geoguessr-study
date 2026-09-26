import { Link, useParams } from 'react-router'
import {
  Bullets, cardClass, Chip, LetterGrid, Native, OnThisPage, PageHeader, Prose, RememberBox, SampleText, Section, Sources,
} from '../../../components/ui'
import {
  countries, groupById, languageById, languageName, languageSamples, lettersOf, scriptById, statsOf, uniqueLetters,
} from '../../../content'
import { signWordLabels, wordCategories, type Language, type RegionStatus } from '../../../content/types'
import { NotFound } from '../../../pages/NotFound'

const fmt = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 })

const statusTone: Record<RegionStatus, 'teal' | 'amber' | 'neutral'> = {
  official: 'teal', 'co-official': 'teal', regional: 'amber', minority: 'neutral', diaspora: 'neutral',
}

function StatTile({ label, value, detail, href }: { label: string; value: string; detail?: string; href?: string }) {
  return (
    <div className={`${cardClass} !p-3`}>
      <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
      {detail && (
        <div className="text-xs text-slate-500">
          {href ? <a href={href} target="_blank" rel="noreferrer" className="underline">{detail}</a> : detail}
        </div>
      )}
    </div>
  )
}

function Stats({ lang }: { lang: Language }) {
  const s = statsOf(lang)
  const figure = (f: NonNullable<typeof s.l1>) => ({
    value: fmt.format(f.value),
    detail: `${f.year ?? 'undated'} · Wikidata`,
    href: f.source,
  })
  const tiles = [
    s.l1 && { label: 'Native speakers', ...figure(s.l1) },
    s.l2 && { label: 'Second-language speakers', ...figure(s.l2) },
    s.speakers && { label: 'Speakers', ...figure(s.speakers) },
    { label: 'Official in', value: `${s.officialCountries.length} ${s.officialCountries.length === 1 ? 'country' : 'countries'}` },
    s.regionalCountries.length > 0 && { label: 'Regional or minority in', value: `${s.regionalCountries.length} more` },
    s.letterCount > 0 && { label: 'Letters', value: String(s.letterCount), detail: s.uniqueLetterCount ? `${s.uniqueLetterCount} unique in this app` : 'CLDR inventory' },
    s.orthographyYear && { label: 'Current spelling since', value: String(s.orthographyYear) },
    { label: 'On signs in', value: `${s.geoguessrCountries.length} GeoGuessr ${s.geoguessrCountries.length === 1 ? 'country' : 'countries'}` },
  ].filter(Boolean) as { label: string; value: string; detail?: string; href?: string }[]

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {tiles.map((t) => <StatTile key={t.label} {...t} />)}
    </div>
  )
}

function Regions({ lang }: { lang: Language }) {
  return (
    <ul className="space-y-2">
      {lang.regions.map((r, i) => {
        const c = countries[r.country]
        return (
          <li key={i} className={`${cardClass} !p-3`}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold">{r.area ? `${r.area}, ${c.name}` : c.name}</span>
              <Chip tone={statusTone[r.status]}>{r.status}</Chip>
              <Chip>on signs: {r.signage}</Chip>
              <Chip tone={c.coverage === 'yes' ? 'teal' : c.coverage === 'partial' ? 'amber' : 'rose'}>
                Street View: {c.coverage === 'yes' ? 'yes' : c.coverage === 'partial' ? 'limited' : 'none'}
              </Chip>
            </div>
            {r.note && <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{r.note}</p>}
          </li>
        )
      })}
    </ul>
  )
}

function Alphabet({ lang }: { lang: Language }) {
  const scriptsToShow = (lang.altScript ? [lang.script, lang.altScript] : [lang.script]).filter((sc) => lettersOf(lang, sc).length)
  if (!scriptsToShow.length) {
    return (
      <p className="text-slate-600 dark:text-slate-400">
        This language uses thousands of characters rather than an alphabet. See the{' '}
        <Link to={`/languages/scripts/${lang.script}`} className="text-teal-700 underline dark:text-teal-400">
          {scriptById.get(lang.script)?.name} script page
        </Link>{' '}
        for the key characters and how to recognise it.
      </p>
    )
  }
  return (
    <div className="space-y-4">
      {scriptsToShow.map((sc) => (
        <div key={sc} className="space-y-2">
          {scriptsToShow.length > 1 && <h3 className="font-medium">{scriptById.get(sc)?.name}</h3>}
          <LetterGrid
            script={sc}
            highlight={new Set(uniqueLetters(lang, sc))}
            letters={lettersOf(lang, sc).map((c) => ({ char: c, roman: '' }))}
          />
        </div>
      ))}
    </div>
  )
}

export function LanguagePage() {
  const { id } = useParams()
  const lang = languageById.get(id ?? '')
  if (!lang) return <NotFound />

  const script = scriptById.get(lang.script)!
  const unique = uniqueLetters(lang)
  const samples = languageSamples(lang)
  const nav = [
    { id: 'stats', label: 'Stats' },
    { id: 'where', label: 'Where' },
    { id: 'spot', label: 'Spot it' },
    { id: 'alphabet', label: 'Letters' },
    { id: 'signs', label: 'Words' },
    { id: 'places', label: 'Place names' },
    { id: 'history', label: 'Why?' },
  ]

  return (
    <article className="space-y-8">
      <PageHeader
        crumbs={[{ to: '/languages', label: 'Languages' }, { to: '/languages/all', label: 'All' }]}
        title={lang.name}
        subtitle={<Native script={lang.script}>{lang.nativeName}</Native>}
      >
        <div className="flex flex-wrap gap-2">
          <Chip tone="teal" to={`/languages/scripts/${script.id}`}>{script.name} script</Chip>
          {lang.altScript && (
            <Chip tone="teal" to={`/languages/scripts/${lang.altScript}`}>{scriptById.get(lang.altScript)?.name} script</Chip>
          )}
          {lang.groups.map((g) => (
            <Chip key={g} to={`/languages/groups/${g}`}>{groupById.get(g)?.name} group</Chip>
          ))}
        </div>
        <p className="text-sm text-slate-500">{lang.family.join(' › ')}</p>
      </PageHeader>

      <OnThisPage items={nav} />

      <Section id="stats" title="Stats">
        <Stats lang={lang} />
      </Section>

      <Section id="where" title="Where it's spoken">
        <Regions lang={lang} />
      </Section>

      <Section id="spot" title="How to spot it">
        <RememberBox items={lang.remember} />
        {unique.length > 0 && (
          <p>
            Letters no other language in the app uses:{' '}
            <span className="text-2xl font-semibold text-teal-700 dark:text-teal-400">{unique.join(' ')}</span>
          </p>
        )}
        <ul className="grid gap-2 sm:grid-cols-2">
          {lang.giveaways.map((g) => (
            <li key={g.sign} className={`${cardClass} !p-3`}>
              <Native script={lang.script} className="text-xl font-semibold">{g.sign}</Native>
              <p className="text-sm text-slate-600 dark:text-slate-400">{g.tip}</p>
            </li>
          ))}
        </ul>
        {lang.confusedWith.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-slate-500">Often confused with:</span>
            {lang.confusedWith.map((c) => (
              <Chip key={c} to={languageById.has(c) ? `/languages/${c}` : undefined}>{languageName(c)}</Chip>
            ))}
          </div>
        )}
      </Section>

      <Section id="alphabet" title="Alphabet" note="From Unicode CLDR. Highlighted letters are used by no other language in the app that shares this script.">
        <Alphabet lang={lang} />
      </Section>

      <Section id="signs" title="Common words" note="Words you often see on signs and in place names.">
        <div className="grid gap-3 sm:grid-cols-2">
          {wordCategories.map((cat) => {
            const keys = cat.keys.filter((k) => lang.signWords[k])
            if (!keys.length) return null
            return (
              <div key={cat.title} className={`${cardClass} !p-0`}>
                <h3 className="border-b border-slate-100 px-3 py-2 text-sm font-semibold dark:border-slate-800">{cat.title}</h3>
                <table className="w-full text-left">
                  <tbody>
                    {keys.map((k) => (
                      <tr key={k} className="border-b border-slate-100 last:border-0 dark:border-slate-800">
                        <th className="w-2/5 px-3 py-1.5 text-sm font-normal text-slate-500">{signWordLabels[k]}</th>
                        <td className="px-3 py-1.5 font-medium">
                          <Native script={lang.script}>{lang.signWords[k]}</Native>
                          {lang.signWordsAlt?.[k] && lang.altScript && (
                            <Native script={lang.altScript} className="ml-2 text-slate-500">{lang.signWordsAlt[k]}</Native>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          })}
        </div>
      </Section>

      {lang.placeNameParts && lang.placeNameParts.length > 0 && (
        <Section id="places" title="Place-name clues" note="Pieces that town and village names are built from. Spot one on a sign and you have a strong hint.">
          <ul className="grid gap-2 sm:grid-cols-2">
            {lang.placeNameParts.map((p) => (
              <li key={p.part} className={`${cardClass} !p-3`}>
                <Native script={lang.script} className="text-lg font-semibold">{p.part}</Native>
                <span className="text-slate-600 dark:text-slate-400"> = {p.meaning}</span>
                {p.example && (
                  <span className="block text-sm text-slate-500">
                    e.g. <Native script={lang.script}>{p.example}</Native>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section title="Sample text" note="Article 1 of the Universal Declaration of Human Rights, the same sentence on every language page.">
        {samples.map((s) => <SampleText key={s.text} text={s.text} script={s.script} source={s.source} />)}
      </Section>

      <Section id="history" title="Why? History">
        {lang.orthography && (
          <p className={`${cardClass} !p-3 text-sm`}>
            <span className="font-semibold">{lang.orthography.year}:</span> {lang.orthography.note}
          </p>
        )}
        <Prose paragraphs={lang.history} />
      </Section>

      {lang.place.length > 0 && (
        <Section title="Language & place">
          <ul className="space-y-3">
            {lang.place.map((p) => (
              <li key={p.title} className={cardClass}>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-1 leading-relaxed text-slate-700 dark:text-slate-300">{p.text}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section title="Connections">
        <Prose paragraphs={lang.connections} />
      </Section>

      {lang.facts.length > 0 && (
        <Section title="Interesting facts">
          <Bullets items={lang.facts} />
        </Section>
      )}

      <Section title="Sources">
        <Sources urls={lang.sources} />
        <p className="text-xs text-slate-500">
          Letters: Unicode CLDR. Speaker numbers: Wikidata. Sample text: Unicode UDHR project.
        </p>
      </Section>
    </article>
  )
}
