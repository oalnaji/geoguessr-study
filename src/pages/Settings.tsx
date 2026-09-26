import { useState } from 'react'
import { applyThemePref, loadThemePref, type ThemePref } from '../lib/theme'

const options: { value: ThemePref; label: string }[] = [
  { value: 'system', label: 'System' },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
]

export function Settings() {
  const [theme, setTheme] = useState<ThemePref>(loadThemePref)

  const choose = (pref: ThemePref) => {
    setTheme(pref)
    applyThemePref(pref)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>
      <section className="space-y-2">
        <h2 className="font-semibold">Theme</h2>
        <div className="inline-flex rounded-lg border border-slate-200 p-1 dark:border-slate-800">
          {options.map((o) => (
            <button
              key={o.value}
              onClick={() => choose(o.value)}
              className={`rounded-md px-4 py-2 text-sm ${
                theme === o.value ? 'bg-teal-700 text-white' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>
      </section>
      <p className="text-sm text-slate-500">Progress export/import arrives with flashcards.</p>
    </div>
  )
}
