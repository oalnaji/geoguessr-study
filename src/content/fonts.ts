import type { ScriptId } from './types'

// Noto fonts (loaded from Google Fonts in index.html, cached for offline use) make sure every
// script renders on every device. System fonts come first where they are reliably present.
const noto = (family: string) => `'${family}', system-ui, sans-serif`

export const scriptFont: Partial<Record<ScriptId, string>> = {
  armenian: noto('Noto Sans Armenian'),
  georgian: noto('Noto Sans Georgian'),
  hebrew: noto('Noto Sans Hebrew'),
  arabic: noto('Noto Naskh Arabic'),
  thaana: noto('Noto Sans Thaana'),
  ethiopic: noto('Noto Sans Ethiopic'),
  tifinagh: noto('Noto Sans Tifinagh'),
  devanagari: noto('Noto Sans Devanagari'),
  bengali: noto('Noto Sans Bengali'),
  gurmukhi: noto('Noto Sans Gurmukhi'),
  gujarati: noto('Noto Sans Gujarati'),
  odia: noto('Noto Sans Oriya'),
  tamil: noto('Noto Sans Tamil'),
  telugu: noto('Noto Sans Telugu'),
  kannada: noto('Noto Sans Kannada'),
  malayalam: noto('Noto Sans Malayalam'),
  sinhala: noto('Noto Sans Sinhala'),
  tibetan: noto('Noto Serif Tibetan'),
  thai: noto('Noto Sans Thai'),
  lao: noto('Noto Sans Lao'),
  khmer: noto('Noto Sans Khmer'),
  myanmar: noto('Noto Sans Myanmar'),
  hangul: noto('Noto Sans KR'),
  japanese: noto('Noto Sans JP'),
  han: noto('Noto Sans SC'),
  mongolian: noto('Noto Sans Mongolian'),
}

export const scriptLang: Partial<Record<ScriptId, string>> = {
  hangul: 'ko', japanese: 'ja', han: 'zh', thai: 'th', lao: 'lo', khmer: 'km', myanmar: 'my',
  arabic: 'ar', hebrew: 'he', thaana: 'dv', armenian: 'hy', georgian: 'ka', greek: 'el',
  mongolian: 'mn-Mong', tibetan: 'bo', sinhala: 'si', tamil: 'ta', telugu: 'te', kannada: 'kn',
  malayalam: 'ml', odia: 'or', gujarati: 'gu', gurmukhi: 'pa', bengali: 'bn', devanagari: 'hi',
  ethiopic: 'am', tifinagh: 'zgh',
}
