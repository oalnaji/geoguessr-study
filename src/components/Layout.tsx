import { Suspense, useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router'

const nav = [
  { to: '/', label: 'Home', icon: '🏠', end: true },
  { to: '/languages', label: 'Languages', icon: '🔤', end: false },
  { to: '/vegetation', label: 'Plants', icon: '🌴', end: false },
  { to: '/regions', label: 'Regions', icon: '🗺️', end: false },
  { to: '/poles', label: 'Poles', icon: '🔌', end: false },
  { to: '/topography', label: 'Mountains', icon: '⛰️', end: false },
  { to: '/why', label: 'Why?', icon: '❓', end: false },
  { to: '/uncovered', label: 'Uncovered', icon: '🌍', end: false },
  { to: '/settings', label: 'Settings', icon: '⚙️', end: false },
]
/** Tabs always shown in the phone bar; the rest go in "More". */
const PRIMARY = 4

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? 'text-teal-700 dark:text-teal-400 font-semibold'
    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'

export function Layout() {
  const { pathname } = useLocation()
  const [moreOpen, setMoreOpen] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  const moreActive = nav.slice(PRIMARY).some((n) => pathname.startsWith(n.to))

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <NavLink to="/" className="shrink-0 text-lg font-bold">
            GeoGuessr Study
          </NavLink>
          <nav className="hidden flex-wrap justify-end gap-x-4 gap-y-1 text-sm sm:flex">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.end} className={linkClass}>
                {n.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-6 pb-24 sm:pb-6">
        <Suspense fallback={<p className="text-slate-500">Loading…</p>}>
          <Outlet />
        </Suspense>
      </main>

      {/* "More" sheet on phones */}
      {moreOpen && (
        <div className="fixed inset-0 z-20 sm:hidden" onClick={() => setMoreOpen(false)}>
          <div className="absolute inset-0 bg-black/30" />
          <nav
            className="absolute inset-x-0 bottom-[calc(4rem+env(safe-area-inset-bottom))] grid grid-cols-3 gap-2 rounded-t-2xl border-t border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950"
            onClick={(e) => e.stopPropagation()}
          >
            {nav.slice(PRIMARY).map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                onClick={() => setMoreOpen(false)}
                className={(s) => `flex flex-col items-center gap-1 rounded-xl p-3 text-sm ${s.isActive ? 'bg-teal-50 dark:bg-teal-950' : ''} ${linkClass(s)}`}
              >
                <span className="text-2xl" aria-hidden>{n.icon}</span>
                {n.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}

      {/* Bottom tab bar on phones, for one-handed use */}
      <nav className="fixed inset-x-0 bottom-0 z-30 flex border-t border-slate-200 bg-white pb-[env(safe-area-inset-bottom)] sm:hidden dark:border-slate-800 dark:bg-slate-950">
        {nav.slice(0, PRIMARY).map((n) => (
          <NavLink key={n.to} to={n.to} end={n.end} className={(s) => `flex h-16 flex-1 flex-col items-center justify-center gap-0.5 text-xs ${linkClass(s)}`}>
            <span className="text-xl" aria-hidden>{n.icon}</span>
            {n.label}
          </NavLink>
        ))}
        <button
          type="button"
          onClick={() => setMoreOpen((o) => !o)}
          className={`flex h-16 flex-1 flex-col items-center justify-center gap-0.5 text-xs ${moreOpen || moreActive ? 'font-semibold text-teal-700 dark:text-teal-400' : 'text-slate-600 dark:text-slate-400'}`}
          aria-expanded={moreOpen}
        >
          <span className="text-xl" aria-hidden>☰</span>
          More
        </button>
      </nav>
    </div>
  )
}
