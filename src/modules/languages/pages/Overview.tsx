import { Link } from 'react-router'
import { cardClass, linkCardClass } from '../../../components/ui'
import { groups, languages, scripts, wordIndex } from '../../../content'

export function Overview() {
  const cards = [
    { to: 'scripts', title: 'Scripts', count: `${scripts.length} writing systems`, blurb: 'Letter charts, how to recognise each script, look-alikes and history.' },
    { to: 'groups', title: 'Language Groups', count: `${groups.length} groups`, blurb: 'Look-alike languages side by side, with a checklist for telling them apart.' },
    { to: 'all', title: 'All Languages', count: `${languages.length} languages`, blurb: 'Stats, where each is spoken, giveaway letters, common words and history.' },
    { to: 'quizzes', title: 'Quizzes', count: 'Identify the script', blurb: 'See real text, name the script and where you would see it.' },
    { to: 'words', title: 'Word Finder', count: `${wordIndex.length} words and name parts`, blurb: 'Type a word from a sign (vej, utca, -købing) to find the language.' },
  ]
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Languages &amp; Scripts</h1>
      <ul className="grid gap-3 sm:grid-cols-2">
        {cards.map((c) => (
          <li key={c.to}>
            <Link to={c.to} className={`${linkCardClass} h-full`}>
              <h2 className="text-lg font-semibold">{c.title}</h2>
              <p className="text-sm font-medium text-teal-700 dark:text-teal-400">{c.count}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{c.blurb}</p>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="grid gap-3">
        {['Flashcards'].map((t) => (
          <li key={t} className={`${cardClass} border-dashed opacity-70`}>
            <h2 className="font-semibold">{t}</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">Coming next.</p>
          </li>
        ))}
      </ul>
      <p className="text-sm text-slate-500">
        Covers every language in the study plan: Europe, the Cyrillic world, the Middle East, South and Southeast Asia, East Asia, Africa, the Andes and Polynesia.
      </p>
    </div>
  )
}
