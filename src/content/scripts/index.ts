import type { Script } from '../types'
import { armenian, arabic, georgian, hebrew, thaana } from './caucasus-middle-east'
import { ethiopic, tifinagh } from './africa'
import { han, hangul, japanese, khmer, lao, mongolian, myanmar, thai } from './east-southeast-asia'
import { cyrillic, greek, latin } from './europe'
import { bengali, devanagari, gujarati, gurmukhi, kannada, malayalam, odia, sinhala, tamil, telugu, tibetan } from './south-asia'

export const scriptList: Script[] = [
  latin, cyrillic, greek,
  armenian, georgian, hebrew, arabic, thaana,
  ethiopic, tifinagh,
  devanagari, bengali, gurmukhi, gujarati, odia, tamil, telugu, kannada, malayalam, sinhala, tibetan,
  thai, lao, khmer, myanmar,
  hangul, japanese, han, mongolian,
]
