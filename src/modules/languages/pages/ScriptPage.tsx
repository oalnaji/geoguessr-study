import { Link, useParams } from 'react-router'
import {
  Bullets, cardClass, Chip, LetterGrid, linkCardClass, Native, OnThisPage, PageHeader, Prose, SampleText, Section, Sources,
} from '../../../components/ui'
import { languageById, languageName, latinIndex, scriptById, scriptSamples } from '../../../content'
import type { ScriptId } from '../../../content/types'
import { NotFound } from '../../../pages/NotFound'

export function ScriptPage() {
  const { id } = useParams()
  const script = scriptById.get(id as ScriptId)
  if (!script) return <NotFound />

  const samples = scriptSamples(script)
  const nav = [
    { id: 'recognise', label: 'Recognise' },
    { id: 'letters', label: 'Letters' },
    ...(script.id === 'latin' ? [{ id: 'index', label: 'Special letters' }] : []),
    { id: 'sample', label: 'Sample' },
    { id: 'history', label: 'Why?' },
  ]

  return (
    <article className="space-y-8">
      <PageHeader
        crumbs={[{ to: '/languages', label: 'Languages' }, { to: '/languages/scripts', label: 'Scripts' }]}
        title={script.name}
        subtitle={script.nativeName && <Native script={script.id}>{script.nativeName}</Native>}
      >
        <div className="flex flex-wrap gap-2">
          <Chip tone="teal">{script.kind}</Chip>
          <Chip>{script.direction}</Chip>
        </div>
      </PageHeader>

      <div className={`${cardClass} overflow-hidden text-center`}>
        <Native script={script.id} className={`block text-5xl sm:text-6xl ${script.id === 'mongolian' ? 'mx-auto h-48' : ''}`}>
          {script.showcase}
        </Native>
      </div>

      <OnThisPage items={nav} />

      <Section title="Where it's used">
        <p className="leading-relaxed">{script.whereUsed}</p>
        <div className="flex flex-wrap gap-2">
          {script.languages.map((l) => (
            <Chip key={l.name} to={l.id && languageById.has(l.id) ? `/languages/${l.id}` : undefined} tone={l.id ? 'teal' : 'neutral'}>
              {l.name}
            </Chip>
          ))}
        </div>
      </Section>

      <Section id="recognise" title="How to recognise it">
        <Bullets items={script.recognise} />
      </Section>

      {script.lookalikes.length > 0 && (
        <Section title="Don't confuse it with">
          <ul className="space-y-2">
            {script.lookalikes.map((l) => {
              const other = scriptById.get(l.script)!
              return (
                <li key={l.script}>
                  <Link to={`/languages/scripts/${other.id}`} className={`${linkCardClass} flex gap-4`}>
                    <Native script={other.id} className="w-24 shrink-0 truncate text-2xl">{other.showcase}</Native>
                    <span>
                      <span className="font-semibold">{other.name}</span>
                      <span className="block text-sm text-slate-600 dark:text-slate-400">{l.tell}</span>
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </Section>
      )}

      <div id="letters" className="scroll-mt-20 space-y-6">
        {script.sections.map((sec) => (
          <Section key={sec.title} title={sec.title} note={sec.note}>
            <LetterGrid letters={sec.letters} script={script.id} />
          </Section>
        ))}
      </div>

      {script.id === 'latin' && (
        <Section
          id="index"
          title="Special letters index"
          note="Every letter beyond a–z used by the languages in the app, from the most distinctive (used by one language) to the most common. Highlighted letters belong to a single language."
        >
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {latinIndex.map((e) => (
              <li
                key={e.char}
                className={`flex items-center gap-3 rounded-lg border p-2 ${
                  e.langs.length === 1
                    ? 'border-teal-600 bg-teal-50 dark:border-teal-500 dark:bg-teal-950'
                    : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'
                }`}
              >
                <span className="w-10 text-center text-3xl">{e.char}</span>
                <span className="flex flex-wrap gap-1">
                  {e.langs.map((id) => (
                    <Link key={id} to={`/languages/${id}`} className="text-sm text-teal-700 underline dark:text-teal-400">
                      {languageName(id)}
                    </Link>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section id="sample" title="Sample text" note="Article 1 of the Universal Declaration of Human Rights.">
        {samples.map((s) => (
          <SampleText key={s.text} text={s.text} script={script.id} source={s.source || undefined} label={s.label} />
        ))}
      </Section>

      <Section id="history" title="Why? History of the script">
        <Prose paragraphs={script.history} />
      </Section>

      {script.facts.length > 0 && (
        <Section title="Interesting facts">
          <Bullets items={script.facts} />
        </Section>
      )}

      <Section title="Sources">
        <Sources urls={script.sources} />
      </Section>
    </article>
  )
}
