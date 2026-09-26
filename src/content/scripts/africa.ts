import type { Script } from '../types'
import { L } from './helpers'

export const ethiopic: Script = {
  id: 'ethiopic',
  name: "Ge'ez (Ethiopic)",
  nativeName: 'ፊደል',
  kind: 'abugida',
  direction: 'left to right',
  area: 'Africa',
  showcase: 'ኢትዮጵያ',
  languages: [{ name: 'Amharic' }, { name: 'Tigrinya' }, { name: 'Tigre' }, { name: "Ge'ez (liturgical)" }],
  whereUsed: 'Ethiopia and Eritrea.',
  recognise: [
    'Each character is a syllable: a consonant shape with a small foot, ring or stroke that shows the vowel (በ bä, ቡ bu, ቢ bi, ባ ba).',
    'Many characters look like little stools or tables with legs: ሀ ለ በ ከ.',
    'Words are traditionally separated by a colon-like mark ፡ and sentences end with ።',
  ],
  lookalikes: [
    { script: 'armenian', tell: 'Armenian letters have hooks going below the line and look like n/u/h. Ge\'ez characters are self-contained with little legs and rings, and there are hundreds of them.' },
  ],
  sections: [
    {
      title: 'Base consonants (first order, with vowel ä)',
      letters: L('ሀ=hä ለ=lä ሐ=ḥä መ=mä ሠ=śä ረ=rä ሰ=sä ሸ=šä ቀ=qä በ=bä ተ=tä ቸ=čä ኀ=ḫä ነ=nä ኘ=ñä አ=ʾä ከ=kä ወ=wä ዐ=ʿä ዘ=zä ዠ=žä የ=yä ደ=dä ጀ=ǧä ገ=gä ጠ=ṭä ጨ=č̣ä ጰ=p̣ä ጸ=ṣä ፀ=ṣ́ä ፈ=fä ፐ=pä'),
    },
    {
      title: 'How vowels work: the seven orders of በ (b)',
      note: 'The same pattern of small changes applies to every consonant.',
      letters: L('በ=bä ቡ=bu ቢ=bi ባ=ba ቤ=be ብ=bə/b ቦ=bo'),
    },
  ],
  history: [
    'The script comes from the ancient South Arabian alphabet, brought to the Horn of Africa over 2,500 years ago. It was first used for Ge\'ez, the language of the Kingdom of Aksum, and at first wrote only consonants.',
    'In the 4th century AD, around the time Aksum converted to Christianity, vowel marks were fused onto the consonants, turning it into an abugida, perhaps influenced by Indian scripts known through Red Sea trade. Ge\'ez is no longer spoken but remains the liturgical language of the Ethiopian and Eritrean Orthodox churches.',
  ],
  facts: [
    'Ethiopia was never colonised (apart from the Italian occupation of 1936–41), one reason it kept its own script rather than switching to Latin.',
    'Ethiopia also has its own calendar, about seven to eight years behind the Gregorian one.',
  ],
  sources: ['https://en.wikipedia.org/wiki/Ge%CA%BDez_script'],
}

export const tifinagh: Script = {
  id: 'tifinagh',
  name: 'Tifinagh',
  nativeName: 'ⵜⵉⴼⵉⵏⴰⵖ',
  kind: 'alphabet',
  direction: 'left to right',
  area: 'Africa',
  showcase: 'ⵜⴰⵎⴰⵣⵉⵖⵜ',
  languages: [{ name: 'Tamazight (Berber) languages' }, { name: 'Tuareg' }],
  whereUsed:
    'Morocco, where official buildings and many road signs show Arabic, Tifinagh and often French. Also parts of Algeria, and the Tuareg regions of Mali, Niger and Libya.',
  recognise: [
    'Simple geometric shapes: circles, dots, crosses and straight lines: ⵉ ⵎ ⴰ ⵣ ⵙ ⵓ.',
    'The letter ⵣ (z), shaped like a stick figure, is the symbol of Amazigh identity and appears on the Berber flag.',
    'No curves joining letters; it looks almost like a set of symbols rather than handwriting.',
  ],
  lookalikes: [
    { script: 'latin', tell: 'Some letters look Latin (ⵔ, ⵟ, ⵙ, ⴷ) but a word mixing ⵉⵎⵣ shapes with circles and crosses is Tifinagh.' },
  ],
  sections: [
    {
      title: 'Neo-Tifinagh (IRCAM standard, Morocco)',
      letters: L('ⴰ=a ⴱ=b ⴳ=g ⴷ=d ⴹ=ḍ ⴻ=e ⴼ=f ⴽ=k ⵀ=h ⵃ=ḥ ⵄ=ʿ ⵅ=kh ⵇ=q ⵉ=i ⵊ=j ⵍ=l ⵎ=m ⵏ=n ⵓ=u ⵔ=r ⵕ=ṛ ⵖ=gh ⵙ=s ⵚ=ṣ ⵛ=sh ⵜ=t ⵟ=ṭ ⵡ=w ⵢ=y ⵣ=z ⵥ=ẓ'),
    },
  ],
  history: [
    'Tifinagh descends from the ancient Libyco-Berber script, known from rock inscriptions in North Africa dating back to at least the 3rd century BC. The Tuareg of the Sahara kept a form of it in use for centuries, mostly for short messages and inscriptions.',
    'In the 1960s–70s Berber activists developed Neo-Tifinagh. In 2003 Morocco\'s Royal Institute of Amazigh Culture (IRCAM) chose it as the official script for Tamazight, and the 2011 constitution made Tamazight an official language. That is why Tifinagh now appears on Moroccan government buildings and road signs.',
  ],
  facts: [
    'In Algeria, Tamazight is usually written in Latin script instead, so Tifinagh on signs points more strongly to Morocco.',
  ],
  sources: ['https://en.wikipedia.org/wiki/Tifinagh', 'https://en.wikipedia.org/wiki/Neo-Tifinagh'],
}
