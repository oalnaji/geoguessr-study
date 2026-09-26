import { useEffect, type ReactNode } from 'react'
import { Link } from 'react-router'
import { loadScriptFont, scriptFont, scriptLang } from '../content/fonts'
import type { Letter, ScriptId } from '../content/types'

export const cardClass =
  'block rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900'
export const linkCardClass = `${cardClass} hover:border-teal-600 dark:hover:border-teal-500`

/** Text in a given script, with the right font, language tag and direction. */
export function Native({ script, children, className = '' }: { script: ScriptId; children: ReactNode; className?: string }) {
  const rtl = script === 'arabic' || script === 'hebrew' || script === 'thaana'
  const vertical = script === 'mongolian'
  useEffect(() => {
    loadScriptFont(script)
  }, [script])
  return (
    <span
      lang={scriptLang[script]}
      dir={rtl ? 'rtl' : undefined}
      className={className}
      style={{
        fontFamily: scriptFont(script),
        ...(vertical ? { writingMode: 'vertical-lr' as const } : {}),
      }}
    >
      {children}
    </span>
  )
}

export function PageHeader({ crumbs, title, subtitle, children }: {
  crumbs: { to: string; label: string }[]
  title: ReactNode
  subtitle?: ReactNode
  children?: ReactNode
}) {
  return (
    <header className="space-y-2">
      <nav className="flex flex-wrap gap-1 text-sm text-slate-500">
        {crumbs.map((c, i) => (
          <span key={c.to}>
            {i > 0 && <span className="mx-1">/</span>}
            <Link to={c.to} className="hover:text-teal-700 dark:hover:text-teal-400">{c.label}</Link>
          </span>
        ))}
      </nav>
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && <div className="text-slate-600 dark:text-slate-400">{subtitle}</div>}
      {children}
    </header>
  )
}

export function Section({ id, title, children, note }: { id?: string; title: string; children: ReactNode; note?: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 space-y-3">
      <h2 className="text-xl font-semibold">{title}</h2>
      {note && <p className="text-sm text-slate-600 dark:text-slate-400">{note}</p>}
      {children}
    </section>
  )
}

export function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-3 leading-relaxed">
      {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  )
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5 leading-relaxed">
      {items.map((it, i) => <li key={i}>{it}</li>)}
    </ul>
  )
}

const chipTone = {
  neutral: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
  teal: 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300',
  amber: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
  rose: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300',
}

export function Chip({ children, tone = 'neutral', to }: { children: ReactNode; tone?: keyof typeof chipTone; to?: string }) {
  const cls = `inline-block rounded-full px-2.5 py-0.5 text-sm ${chipTone[tone]}`
  return to ? <Link to={to} className={`${cls} hover:ring-1 hover:ring-teal-600`}>{children}</Link> : <span className={cls}>{children}</span>
}

export function LetterGrid({ letters, script, highlight }: { letters: Letter[]; script: ScriptId; highlight?: Set<string> }) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(4.5rem,1fr))] gap-2">
      {letters.map((l, i) => {
        const hot = highlight?.has(l.char)
        return (
          <li
            key={`${l.char}-${i}`}
            className={`flex flex-col items-center justify-center rounded-lg border p-2 text-center ${
              hot
                ? 'border-teal-600 bg-teal-50 dark:border-teal-500 dark:bg-teal-950'
                : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'
            }`}
            title={l.note}
          >
            <Native script={script} className="text-3xl leading-tight">{l.char}</Native>
            {l.roman && <span className="mt-1 text-xs text-slate-600 dark:text-slate-400">{l.roman}</span>}
            {l.note && <span className="mt-0.5 text-[0.65rem] leading-tight text-slate-500">{l.note}</span>}
          </li>
        )
      })}
    </ul>
  )
}

export function Sources({ urls }: { urls: string[] }) {
  return (
    <ul className="space-y-1 text-sm">
      {urls.map((u) => (
        <li key={u} className="break-all">
          <a href={u} target="_blank" rel="noreferrer" className="text-teal-700 underline dark:text-teal-400">
            {u.replace(/^https?:\/\//, '')}
          </a>
        </li>
      ))}
    </ul>
  )
}

export function SampleText({ text, script, source, label }: { text: string; script: ScriptId; source?: string; label?: string }) {
  return (
    <figure className={cardClass}>
      {label && <figcaption className="mb-1 text-sm font-medium text-slate-500">{label}</figcaption>}
      <blockquote className="text-lg leading-relaxed">
        <Native script={script}>{text}</Native>
      </blockquote>
      {source && (
        <a href={source} target="_blank" rel="noreferrer" className="mt-2 inline-block text-xs text-slate-500 underline">
          Source: Unicode UDHR project
        </a>
      )}
    </figure>
  )
}

/** Quick links to sections on long pages. HashRouter owns the URL hash, so scroll manually. */
export function OnThisPage({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav className="-mx-4 overflow-x-auto px-4">
      <ul className="flex gap-2 pb-1">
        {items.map((it) => (
          <li key={it.id} className="shrink-0">
            <button
              onClick={() => document.getElementById(it.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-600 hover:border-teal-600 dark:border-slate-700 dark:text-slate-400"
            >
              {it.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
