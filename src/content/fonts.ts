import type { ScriptId } from './types'

// Common scripts (CJK, Arabic, Hebrew, Thai, the major Indic scripts…) ship with Windows, macOS,
// iOS and Android, so they use system fonts. Rarer scripts that some devices lack get a Noto web
// font, loaded on demand the first time the script is shown (never render-blocking).
const webFonts: Partial<Record<ScriptId, string>> = {
  armenian: 'Noto Sans Armenian',
  georgian: 'Noto Sans Georgian',
  thaana: 'Noto Sans Thaana',
  ethiopic: 'Noto Sans Ethiopic',
  tifinagh: 'Noto Sans Tifinagh',
  gurmukhi: 'Noto Sans Gurmukhi',
  odia: 'Noto Sans Oriya',
  sinhala: 'Noto Sans Sinhala',
  tibetan: 'Noto Serif Tibetan',
  lao: 'Noto Sans Lao',
  khmer: 'Noto Sans Khmer',
  myanmar: 'Noto Sans Myanmar',
  mongolian: 'Noto Sans Mongolian',
}

const systemFonts: Partial<Record<ScriptId, string>> = {
  hangul: "'Malgun Gothic', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
  japanese: "'Yu Gothic', 'Hiragino Sans', 'Noto Sans JP', sans-serif",
  han: "'Microsoft YaHei', 'PingFang SC', 'Noto Sans SC', sans-serif",
}

export function scriptFont(script: ScriptId): string | undefined {
  const web = webFonts[script]
  return web ? `'${web}', system-ui, sans-serif` : systemFonts[script]
}

const requested = new Set<string>()

/** Adds the Google Fonts stylesheet for a script's web font, once. Cached offline by the service worker. */
export function loadScriptFont(script: ScriptId) {
  const family = webFonts[script]
  if (!family || requested.has(family) || typeof document === 'undefined') return
  requested.add(family)
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, '+')}&display=swap`
  document.head.appendChild(link)
}

export const scriptLang: Partial<Record<ScriptId, string>> = {
  hangul: 'ko', japanese: 'ja', han: 'zh', thai: 'th', lao: 'lo', khmer: 'km', myanmar: 'my',
  arabic: 'ar', hebrew: 'he', thaana: 'dv', armenian: 'hy', georgian: 'ka', greek: 'el',
  mongolian: 'mn-Mong', tibetan: 'bo', sinhala: 'si', tamil: 'ta', telugu: 'te', kannada: 'kn',
  malayalam: 'ml', odia: 'or', gujarati: 'gu', gurmukhi: 'pa', bengali: 'bn', devanagari: 'hi',
  ethiopic: 'am', tifinagh: 'zgh',
}
