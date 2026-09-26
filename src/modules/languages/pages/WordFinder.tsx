import { Link, useSearchParams } from 'react-router'
import { cardClass, Chip, Native, PageHeader } from '../../../components/ui'
import { languageName, languages, searchWords, type WordEntry } from '../../../content'
import { signWordLabels, wordCategories, type SignWordKey } from '../../../content/types'

const MAX_RESULTS = 80

function Result({ e }: { e: WordEntry }) {
  return (
    <li className={`${cardClass} flex flex-wrap items-baseline gap-x-3 gap-y-1 !p-3`}>
      <Native script={e.script} className="text-xl font-semibold">{e.text}</Native>
      <span className="text-slate-600 dark:text-slate-400">= {e.meaning}</span>
      <span className="ml-auto flex items-center gap-2">
        {e.kind === 'place-name part' && <Chip tone="amber">place names</Chip>}
        <Chip tone="teal" to={`/languages/${e.lang}`}>{languageName(e.lang)}</Chip>
      </span>
      {e.example && (
        <span className="w-full text-sm text-slate-500">
          e.g. <Native script={e.script}>{e.example}</Native>
        </span>
      )}
    </li>
  )
}

/** Every language's word for one meaning, in a single table. */
function ByMeaning({ keyName }: { keyName: SignWordKey }) {
  const rows = languages.filter((l) => l.signWords[keyName])
  return (
    <div className={`${cardClass} !p-0`}>
      <table className="w-full text-left">
        <tbody>
          {rows.map((l) => (
            <tr key={l.id} className="border-b border-slate-100 last:border-0 dark:border-slate-800">
              <th className="w-2/5 px-3 py-2 font-normal">
                <Link to={`/languages/${l.id}`} className="text-teal-700 hover:underline dark:text-teal-400">{l.name}</Link>
              </th>
              <td className="px-3 py-2 font-medium">
                <Native script={l.script}>{l.signWords[keyName]}</Native>
                {l.signWordsAlt?.[keyName] && l.altScript && (
                  <Native script={l.altScript} className="ml-2 text-slate-500">{l.signWordsAlt[keyName]}</Native>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function WordFinder() {
  const [params, setParams] = useSearchParams()
  const q = params.get('q') ?? ''
  const meaning = params.get('meaning') as SignWordKey | null
  const results = searchWords(q)

  const set = (next: Record<string, string>) => setParams(next, { replace: true })

  return (
    <div className="space-y-6">
      <PageHeader
        crumbs={[{ to: '/languages', label: 'Languages' }]}
        title="Word finder"
        subtitle="Saw a word on a sign? Type it to find the language. Or pick a meaning to compare every language."
      />

      <input
        type="search"
        autoFocus
        value={q}
        onChange={(e) => set(e.target.value ? { q: e.target.value } : {})}
        placeholder="e.g. vej, utca, -købing, Llan…"
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-lg dark:border-slate-700 dark:bg-slate-900"
      />

      {q ? (
        <section className="space-y-2">
          <p className="text-sm text-slate-500">
            {results.length === 0
              ? `No matches for "${q}". Accents don't matter; try the start of the word.`
              : `${results.length} match${results.length === 1 ? '' : 'es'}${results.length > MAX_RESULTS ? `, showing the first ${MAX_RESULTS}` : ''}`}
          </p>
          <ul className="space-y-2">
            {results.slice(0, MAX_RESULTS).map((e, i) => <Result key={`${e.lang}-${e.text}-${i}`} e={e} />)}
          </ul>
        </section>
      ) : (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Browse by meaning</h2>
          {wordCategories.map((cat) => (
            <div key={cat.title} className="space-y-2">
              <h3 className="text-sm font-semibold text-slate-500">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.keys.map((k) => (
                  <button
                    key={k}
                    onClick={() => set(meaning === k ? {} : { meaning: k })}
                    className={`rounded-full px-3 py-1 text-sm ${
                      meaning === k
                        ? 'bg-teal-700 text-white'
                        : 'border border-slate-300 text-slate-700 hover:border-teal-600 dark:border-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {signWordLabels[k]}
                  </button>
                ))}
              </div>
            </div>
          ))}
          {meaning && signWordLabels[meaning] && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">"{signWordLabels[meaning]}" in every language</h3>
              <ByMeaning keyName={meaning} />
            </div>
          )}
        </section>
      )}
    </div>
  )
}
