import { Link, useParams } from 'react-router'
import { Bullets, cardClass, Chip, Native, OnThisPage, PageHeader, Prose, Section } from '../../../components/ui'
import { groupById, languageById, languageSamples, specialLetters } from '../../../content'
import { signWordKeys, signWordLabels, type Language } from '../../../content/types'
import { NotFound } from '../../../pages/NotFound'

/** Which special letters each Latin-script member uses. Most distinctive letters first. */
function letterMatrix(members: Language[]) {
  const latin = members.filter((m) => m.script === 'latin')
  const uses = new Map(latin.map((m) => [m.id, new Set(specialLetters(m))]))
  const letters = [...new Set(latin.flatMap((m) => [...uses.get(m.id)!]))]
  const count = (c: string) => latin.filter((m) => uses.get(m.id)!.has(c)).length
  letters.sort((a, b) => count(a) - count(b) || a.localeCompare(b))
  return { latin, letters, has: (id: string, c: string) => uses.get(id)!.has(c) }
}

export function GroupPage() {
  const { id } = useParams()
  const group = groupById.get(id ?? '')
  if (!group) return <NotFound />

  const members = group.members.map((m) => languageById.get(m)!).filter(Boolean)
  const matrix = letterMatrix(members)
  const shownKeys = signWordKeys.filter((k) => members.filter((m) => m.signWords[k]).length >= 2)

  return (
    <article className="space-y-8">
      <PageHeader
        crumbs={[{ to: '/languages', label: 'Languages' }, { to: '/languages/groups', label: 'Groups' }]}
        title={group.name}
      >
        <div className="flex flex-wrap gap-2">
          {members.map((m) => <Chip key={m.id} tone="teal" to={`/languages/${m.id}`}>{m.name}</Chip>)}
        </div>
      </PageHeader>

      <OnThisPage
        items={[
          { id: 'checklist', label: 'Checklist' },
          { id: 'letters', label: 'Letters' },
          { id: 'words', label: 'Sign words' },
          { id: 'sentence', label: 'Same sentence' },
          { id: 'traps', label: 'Traps' },
        ]}
      />

      <Section title="Why they look alike">
        <Prose paragraphs={group.intro} />
      </Section>

      <Section id="checklist" title="How to tell them apart" note="Work down the list; the first match wins.">
        <ol className="space-y-2">
          {group.checklist.map((c, i) => (
            <li key={i} className={`${cardClass} flex gap-3 !p-3`}>
              <span className="font-bold text-teal-700 dark:text-teal-400">{i + 1}</span>
              <span>
                See <span className="font-semibold">{c.look}</span> → <span className="font-semibold text-teal-700 dark:text-teal-400">{c.then}</span>
              </span>
            </li>
          ))}
        </ol>
      </Section>

      {matrix.letters.length > 0 && (
        <Section
          id="letters"
          title="Letter comparison"
          note="Special letters used by each Latin-script language in the group (from Unicode CLDR). Letters used by just one member come first."
        >
          <div className={`${cardClass} overflow-x-auto !p-0`}>
            <table className="w-full text-center">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="sticky left-0 bg-white px-2 py-2 dark:bg-slate-900" />
                  {matrix.latin.map((m) => (
                    <th key={m.id} className="px-2 py-2 text-sm font-medium">
                      <Link to={`/languages/${m.id}`} className="hover:underline">{m.name}</Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrix.letters.map((c) => (
                  <tr key={c} className="border-b border-slate-100 last:border-0 dark:border-slate-800">
                    <th className="sticky left-0 bg-white px-3 py-1 text-xl dark:bg-slate-900">{c}</th>
                    {matrix.latin.map((m) => (
                      <td key={m.id} className="px-2 py-1">
                        {matrix.has(m.id, c) ? <span className="font-bold text-teal-700 dark:text-teal-400">✓</span> : <span className="text-slate-300 dark:text-slate-700">·</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      )}

      <Section id="words" title="Common sign words side by side">
        <div className={`${cardClass} overflow-x-auto !p-0`}>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800">
                <th className="sticky left-0 bg-white px-3 py-2 dark:bg-slate-900" />
                {members.map((m) => <th key={m.id} className="px-3 py-2 font-medium">{m.name}</th>)}
              </tr>
            </thead>
            <tbody>
              {shownKeys.map((k) => (
                <tr key={k} className="border-b border-slate-100 last:border-0 dark:border-slate-800">
                  <th className="sticky left-0 bg-white px-3 py-2 font-normal text-slate-500 dark:bg-slate-900">{signWordLabels[k]}</th>
                  {members.map((m) => (
                    <td key={m.id} className="whitespace-nowrap px-3 py-2">
                      {m.signWords[k] ? <Native script={m.script}>{m.signWords[k]}</Native> : <span className="text-slate-400">–</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="sentence" title="The same sentence in each language" note="Article 1 of the Universal Declaration of Human Rights (Unicode UDHR project).">
        <ul className="space-y-2">
          {members.map((m) => {
            const s = languageSamples(m)[0]
            return (
              <li key={m.id} className={`${cardClass} !p-3`}>
                <div className="text-sm font-semibold text-teal-700 dark:text-teal-400">{m.name}</div>
                <Native script={s.script}>{s.text}</Native>
              </li>
            )
          })}
        </ul>
      </Section>

      <Section id="traps" title="Traps">
        <Bullets items={group.traps} />
      </Section>
    </article>
  )
}
