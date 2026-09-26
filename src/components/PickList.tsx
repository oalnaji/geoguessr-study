import { useId, useState } from 'react'

export interface PickOption {
  value: string
  label: string
}

/**
 * A searchable, scrollable single-choice list. Works well on phones (big tap targets, no tiny
 * dropdown) and with a keyboard (type to filter, Enter picks the first match).
 * After `reveal`, correct options turn green and a wrong pick turns red.
 */
export function PickList({
  label, options, value, onChange, reveal, isCorrect,
}: {
  label: string
  options: PickOption[]
  value: string | null
  onChange: (v: string) => void
  reveal?: boolean
  isCorrect?: (v: string) => boolean
}) {
  const [filter, setFilter] = useState('')
  const id = useId()
  const f = filter.trim().toLowerCase()
  // After checking, show just the right answers and the pick, so a filter can't hide the answer.
  const shown = reveal
    ? options.filter((o) => o.value === value || isCorrect?.(o.value))
    : f ? options.filter((o) => o.label.toLowerCase().includes(f)) : options
  const selected = options.find((o) => o.value === value)

  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between gap-2">
        <label htmlFor={id} className="font-semibold">{label}</label>
        <span className="truncate text-sm text-teal-700 dark:text-teal-400">{selected?.label ?? 'nothing selected'}</span>
      </div>
      <input
        id={id}
        type="search"
        value={filter}
        disabled={reveal}
        onChange={(e) => setFilter(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && shown[0]) {
            e.preventDefault()
            onChange(shown[0].value)
          }
        }}
        placeholder="Type to filter…"
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900"
      />
      <ul
        role="listbox"
        aria-label={label}
        className="h-52 overflow-y-auto overscroll-contain rounded-lg border border-slate-200 bg-white p-1 dark:border-slate-800 dark:bg-slate-900"
      >
        {shown.map((o) => {
          const picked = o.value === value
          const good = reveal && isCorrect?.(o.value)
          const bad = reveal && picked && !good
          return (
            <li key={o.value}>
              <button
                type="button"
                role="option"
                aria-selected={picked}
                disabled={reveal}
                onClick={() => onChange(o.value)}
                className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left ${
                  good
                    ? 'bg-teal-100 text-teal-900 dark:bg-teal-950 dark:text-teal-200'
                    : bad
                      ? 'bg-rose-100 text-rose-900 dark:bg-rose-950 dark:text-rose-200'
                      : picked
                        ? 'bg-teal-700 text-white'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {o.label}
                {good && <span aria-hidden>✓</span>}
                {bad && <span aria-hidden>✗</span>}
                {!reveal && picked && <span aria-hidden>●</span>}
              </button>
            </li>
          )
        })}
        {shown.length === 0 && <li className="px-3 py-2 text-sm text-slate-500">No matches</li>}
      </ul>
    </div>
  )
}
