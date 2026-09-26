import type { ScriptId } from '../types'

// Places where each script is seen on signs, used as accepted answers in the "Identify the script"
// quiz. Indian scripts use states rather than "India", so the answer actually tells them apart.
// Latin is left out: it is used almost everywhere.
export const scriptLocations: Partial<Record<ScriptId, string[]>> = {
  cyrillic: ['Russia', 'Ukraine', 'Belarus', 'Bulgaria', 'Serbia', 'North Macedonia', 'Montenegro', 'Republika Srpska, Bosnia', 'Kazakhstan', 'Kyrgyzstan', 'Mongolia'],
  greek: ['Greece', 'Cyprus'],
  armenian: ['Armenia'],
  georgian: ['Georgia'],
  hebrew: ['Israel'],
  arabic: ['Morocco', 'Algeria', 'Tunisia', 'Egypt', 'Jordan', 'Saudi Arabia', 'United Arab Emirates', 'Qatar', 'Oman', 'Iraq', 'Lebanon', 'Israel', 'Iran', 'Afghanistan', 'Pakistan'],
  thaana: ['Maldives'],
  ethiopic: ['Ethiopia', 'Eritrea'],
  tifinagh: ['Morocco', 'Algeria'],
  devanagari: ['Uttar Pradesh, India', 'Delhi, India', 'Bihar, India', 'Rajasthan, India', 'Madhya Pradesh, India', 'Maharashtra, India', 'Nepal'],
  bengali: ['Bangladesh', 'West Bengal, India', 'Assam, India', 'Tripura, India'],
  gurmukhi: ['Punjab, India'],
  gujarati: ['Gujarat, India'],
  odia: ['Odisha, India'],
  tamil: ['Tamil Nadu, India', 'Sri Lanka', 'Singapore'],
  telugu: ['Andhra Pradesh, India', 'Telangana, India'],
  kannada: ['Karnataka, India'],
  malayalam: ['Kerala, India'],
  sinhala: ['Sri Lanka'],
  tibetan: ['Tibet, China', 'Bhutan', 'Ladakh, India', 'Sikkim, India'],
  thai: ['Thailand'],
  lao: ['Laos'],
  khmer: ['Cambodia'],
  myanmar: ['Myanmar'],
  hangul: ['South Korea', 'North Korea'],
  japanese: ['Japan'],
  han: ['Mainland China', 'Taiwan', 'Hong Kong', 'Macau', 'Singapore'],
  mongolian: ['Inner Mongolia, China', 'Mongolia'],
}
