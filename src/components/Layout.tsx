import { Suspense, useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router'

const nav = [
  { to: '/', label: 'Home', end: true },
  { to: '/languages', label: 'Languages', end: false },
  { to: '/vegetation', label: 'Plants', end: false },
  { to: '/regions', label: 'Regions', end: false },
  { to: '/poles', label: 'Poles', end: false },
  { to: '/topography', label: 'Mountains', end: false },
  { to: '/why', label: 'Why?', end: false },
  { to: '/settings', label: 'Settings', end: false },
]

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? 'text-teal-700 dark:text-teal-400 font-semibold'
    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'

export function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          <NavLink to="/" className="text-lg font-bold">
            GeoGuessr Study
          </NavLink>
          <nav className="hidden gap-6 sm:flex">
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

      {/* Bottom tab bar on phones, for one-handed use */}
      <nav className="fixed inset-x-0 bottom-0 z-10 flex justify-around border-t border-slate-200 bg-white pb-[env(safe-area-inset-bottom)] sm:hidden dark:border-slate-800 dark:bg-slate-950">
        {nav.map((n) => (
          <NavLink key={n.to} to={n.to} end={n.end} className={(s) => `flex-1 py-3 text-center text-sm ${linkClass(s)}`}>
            {n.label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
