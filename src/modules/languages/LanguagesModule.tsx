import { NavLink, Route, Routes } from 'react-router'

const sections = [
  { path: 'scripts', title: 'Scripts', blurb: 'Every major writing system, letter by letter.' },
  { path: 'groups', title: 'Language Groups', blurb: 'Look-alike languages and how to tell them apart.' },
  { path: 'flashcards', title: 'Flashcards', blurb: 'Spaced-repetition review.' },
  { path: 'quizzes', title: 'Quizzes', blurb: 'Identify the script, the language, the region.' },
]

function Overview() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {sections.map((s) => (
        <li key={s.path}>
          <NavLink
            to={s.path}
            className="block rounded-xl border border-slate-200 bg-white p-4 hover:border-teal-600 dark:border-slate-800 dark:bg-slate-900"
          >
            <h2 className="font-semibold">{s.title}</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">{s.blurb}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

function ComingSoon({ title }: { title: string }) {
  return (
    <div className="rounded-xl border border-dashed border-slate-300 p-6 text-center dark:border-slate-700">
      <h2 className="font-semibold">{title}</h2>
      <p className="text-sm text-slate-600 dark:text-slate-400">Coming in Phase 1.</p>
    </div>
  )
}

export function LanguagesModule() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Languages &amp; Scripts</h1>
      <Routes>
        <Route index element={<Overview />} />
        {sections.map((s) => (
          <Route key={s.path} path={s.path} element={<ComingSoon title={s.title} />} />
        ))}
      </Routes>
    </div>
  )
}
