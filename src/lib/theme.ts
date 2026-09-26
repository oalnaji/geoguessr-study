export type ThemePref = 'system' | 'light' | 'dark'

const KEY = 'theme'

export function resolveDark(pref: ThemePref, systemDark: boolean): boolean {
  return pref === 'dark' || (pref === 'system' && systemDark)
}

export function loadThemePref(): ThemePref {
  try {
    const v = localStorage.getItem(KEY)
    if (v === 'light' || v === 'dark') return v
  } catch {
    // storage unavailable (private mode etc.) — fall through to system
  }
  return 'system'
}

export function applyThemePref(pref: ThemePref) {
  try {
    if (pref === 'system') localStorage.removeItem(KEY)
    else localStorage.setItem(KEY, pref)
  } catch {
    // ignore; the theme still applies for this session
  }
  const systemDark = matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.classList.toggle('dark', resolveDark(pref, systemDark))
}
