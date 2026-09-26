import type { Letter, LetterSection, Script } from '../types'
import { L } from './helpers'

// The main Indic scripts share one Unicode layout (inherited from the Indian ISCII standard):
// the same offset from the block start is the same letter in every script. So one romanisation
// table covers them all, and each script only lists what it doesn't use.
const vowels: [number, string][] = [
  [0x05, 'a'], [0x06, 'ā'], [0x07, 'i'], [0x08, 'ī'], [0x09, 'u'], [0x0a, 'ū'], [0x0b, 'ṛ (ri)'],
  [0x0e, 'e'], [0x0f, 'e'], [0x10, 'ai'], [0x12, 'o'], [0x13, 'o'], [0x14, 'au'],
]
const consonants: [number, string][] = [
  [0x15, 'ka'], [0x16, 'kha'], [0x17, 'ga'], [0x18, 'gha'], [0x19, 'ṅa'],
  [0x1a, 'ca'], [0x1b, 'cha'], [0x1c, 'ja'], [0x1d, 'jha'], [0x1e, 'ña'],
  [0x1f, 'ṭa'], [0x20, 'ṭha'], [0x21, 'ḍa'], [0x22, 'ḍha'], [0x23, 'ṇa'],
  [0x24, 'ta'], [0x25, 'tha'], [0x26, 'da'], [0x27, 'dha'], [0x28, 'na'], [0x29, 'ṉa'],
  [0x2a, 'pa'], [0x2b, 'pha'], [0x2c, 'ba'], [0x2d, 'bha'], [0x2e, 'ma'],
  [0x2f, 'ya'], [0x30, 'ra'], [0x31, 'ṟa'], [0x32, 'la'], [0x33, 'ḷa'], [0x34, 'ḻa'], [0x35, 'va'],
  [0x36, 'śa'], [0x37, 'ṣa'], [0x38, 'sa'], [0x39, 'ha'],
]
const isLetter = /\p{L}/u

function indic(base: number, exclude: number[], dravidian = false, extras: Letter[] = []): LetterSection[] {
  const pick = (table: [number, string][]) =>
    table
      .filter(([off]) => !exclude.includes(off))
      .map(([off, roman]) => {
        const char = String.fromCodePoint(base + off)
        // Southern scripts distinguish short e/o (0x0e, 0x12) from long ē/ō (0x0f, 0x13).
        if (dravidian && off === 0x0f) roman = 'ē'
        if (dravidian && off === 0x13) roman = 'ō'
        return { char, roman }
      })
      .filter((l) => isLetter.test(l.char))
  const sections: LetterSection[] = [
    { title: 'Vowels', letters: pick(vowels) },
    {
      title: 'Consonants',
      note: 'Each consonant includes an inherent vowel "a". Other vowels are added as marks around the letter.',
      letters: pick(consonants),
    },
  ]
  if (extras.length) sections.push({ title: 'Other letters', letters: extras })
  return sections
}

// Offsets not used by the everyday form of each script (vocalic ḷ and rare or archaic letters).
const NORTH_SKIP = [0x0c, 0x0d, 0x0e, 0x11, 0x12, 0x29, 0x31, 0x34]

export const devanagari: Script = {
  id: 'devanagari',
  name: 'Devanagari',
  nativeName: 'देवनागरी',
  kind: 'abugida',
  direction: 'left to right',
  area: 'South Asia',
  showcase: 'भारत',
  languages: [{ name: 'Hindi' }, { name: 'Marathi' }, { name: 'Nepali' }, { name: 'Sanskrit' }, { name: 'Konkani' }],
  whereUsed:
    'Northern and central India (Hindi belt: Uttar Pradesh, Bihar, Madhya Pradesh, Rajasthan, Delhi…), Maharashtra (Marathi) and Nepal. Hindi signs are found all over India.',
  recognise: [
    'A solid horizontal line (the shirorekha) runs along the top of each word, with letters hanging below it: भारत.',
    'Many letters have a vertical stroke on the right side: क ग न म.',
    'Words look like washing hanging from a line.',
  ],
  lookalikes: [
    { script: 'bengali', tell: 'Bengali also has a top line, but letters are more triangular and pointed (ক, ব). Devanagari has more vertical right-hand bars (क, ब). The Bengali "অ" vs Devanagari "अ" is a quick check.' },
    { script: 'gurmukhi', tell: 'Gurmukhi also has a top line, but the letters are simpler and squarer, and it has distinctive ੳ ਅ ੲ vowel bearers.' },
    { script: 'gujarati', tell: 'Gujarati looks like Devanagari with the top line removed.' },
  ],
  sections: indic(0x0900, NORTH_SKIP, false, L('ड़=ṛa ढ़=ṛha')),
  history: [
    'Devanagari developed from the ancient Brahmi script, via the Gupta and Nagari scripts, and took its modern form around the 10th–11th centuries AD. It was used for Sanskrit, the classical language of Hindu scripture, which gave it great prestige.',
    'After independence in 1947, India made Hindi in Devanagari the official language of the central government (with English). Nepali and Marathi also use it, so seeing Devanagari narrows things to north/central India or Nepal, but the language is the next clue.',
  ],
  facts: [
    'The word Devanagari is often explained as "script of the city of the gods" (deva = god, nagari = of the city).',
    'Nepal uses Devanagari for Nepali; Nepal\'s number plates can be in Devanagari numerals (०१२३…).',
  ],
  sources: ['https://en.wikipedia.org/wiki/Devanagari'],
}

export const bengali: Script = {
  id: 'bengali',
  name: 'Bengali–Assamese',
  nativeName: 'বাংলা লিপি',
  kind: 'abugida',
  direction: 'left to right',
  area: 'South Asia',
  showcase: 'বাংলা',
  languages: [{ name: 'Bengali' }, { name: 'Assamese' }, { name: 'Manipuri (Meitei)' }],
  whereUsed: 'Bangladesh, and the Indian states of West Bengal, Tripura and Assam.',
  recognise: [
    'A top line like Devanagari, but the letters are more angular, with triangles and pointed tops: ক খ ব র.',
    'Assamese uses ৰ (ra, with a line through it) and ৱ (wa) where Bengali uses র and ব. That one letter tells Assam apart from West Bengal.',
  ],
  lookalikes: [
    { script: 'devanagari', tell: 'Devanagari has more vertical bars on the right (क ब). Bengali letters are pointier (ক ব).' },
  ],
  sections: indic(0x0980, [0x0c], false, [
    ...L('ড়=ṛa ঢ়=ṛha য়=ẏa ৎ=t_(final)'),
    { char: 'ৰ', roman: 'ra', note: 'Assamese only' },
    { char: 'ৱ', roman: 'wa', note: 'Assamese only' },
  ]),
  history: [
    'The Eastern Nagari script developed from Brahmi by around the 11th century, and was shared by Bengali, Assamese and Maithili. Printing in the 18th–19th centuries (starting with a 1778 grammar printed by the East India Company) standardised the letter shapes.',
    'The Bengali Language Movement of 1952, when protesters in Dhaka were killed demanding that Bengali be an official language of Pakistan, fed into the independence of Bangladesh in 1971. 21 February is now UNESCO\'s International Mother Language Day because of it.',
  ],
  facts: [
    'The national anthems of both Bangladesh and India were written by Rabindranath Tagore, in Bengali.',
    'Bengali is one of the ten most spoken languages in the world.',
  ],
  sources: ['https://en.wikipedia.org/wiki/Bengali%E2%80%93Assamese_script'],
}

export const gurmukhi: Script = {
  id: 'gurmukhi',
  name: 'Gurmukhi',
  nativeName: 'ਗੁਰਮੁਖੀ',
  kind: 'abugida',
  direction: 'left to right',
  area: 'South Asia',
  showcase: 'ਪੰਜਾਬ',
  languages: [{ name: 'Punjabi' }],
  whereUsed: 'Punjab (India). In Pakistani Punjab, Punjabi is written in Arabic script (Shahmukhi) instead.',
  recognise: [
    'Has a top line like Devanagari, but letters are simpler, squarer and more open: ਪ ਮ ਸ ਹ.',
    'Three distinctive vowel-bearer letters: ੳ ਅ ੲ.',
    'Frequent small dots and the tippi ੰ (like a tiny u) above letters.',
  ],
  lookalikes: [
    { script: 'devanagari', tell: 'Devanagari letters have more loops and curls; Gurmukhi is plainer and boxier. Look for ੳ or ੲ, which Devanagari never has.' },
  ],
  sections: indic(0x0a00, [0x0c], false, [
    ...L('ੜ=ṛa ਖ਼=xa ਗ਼=ġa ਜ਼=za ਫ਼=fa'),
    ...L('ੳ=vowel_bearer_(u) ੲ=vowel_bearer_(i)'),
  ]),
  history: [
    'Gurmukhi ("from the mouth of the Guru") was standardised in the 16th century by Guru Angad, the second Sikh Guru, from earlier scripts of the region. It was used to write the Sikh scriptures, the Guru Granth Sahib.',
    'When Punjab was split between India and Pakistan in 1947, script followed religion: Sikhs and Hindus in Indian Punjab write Punjabi in Gurmukhi, Muslims in Pakistani Punjab write it in Shahmukhi (Arabic script).',
  ],
  facts: ['Gurmukhi is closely tied to Sikhism; seeing it on signs strongly suggests Indian Punjab (or Sikh communities abroad).'],
  sources: ['https://en.wikipedia.org/wiki/Gurmukhi'],
}

export const gujarati: Script = {
  id: 'gujarati',
  name: 'Gujarati',
  nativeName: 'ગુજરાતી લિપિ',
  kind: 'abugida',
  direction: 'left to right',
  area: 'South Asia',
  showcase: 'ગુજરાત',
  languages: [{ name: 'Gujarati' }, { name: 'Kutchi' }],
  whereUsed: 'Gujarat (India), plus Gujarati communities in East Africa and the UK.',
  recognise: [
    'Looks like Devanagari with the top line removed: letters stand separately on the line.',
    'Rounded, flowing letters such as ગ જ ત લ.',
  ],
  lookalikes: [
    { script: 'devanagari', tell: 'Devanagari always has a continuous top line; Gujarati has none.' },
  ],
  sections: indic(0x0a80, [0x0c, 0x0d, 0x11]),
  history: [
    'Gujarati script developed from Devanagari in the 16th century, as a quicker handwriting style used by merchants and bankers. It was sometimes called the "bankers\' script". Dropping the top line made it faster to write.',
    'Gujarat has long been a trading region, with ports that linked India to Arabia and East Africa, which is why there are large Gujarati communities in Kenya, Uganda and Tanzania.',
  ],
  facts: ['Mahatma Gandhi\'s first language was Gujarati; he wrote his autobiography in it.'],
  sources: ['https://en.wikipedia.org/wiki/Gujarati_script'],
}

export const odia: Script = {
  id: 'odia',
  name: 'Odia',
  nativeName: 'ଓଡ଼ିଆ',
  kind: 'abugida',
  direction: 'left to right',
  area: 'South Asia',
  showcase: 'ଓଡ଼ିଶା',
  languages: [{ name: 'Odia' }],
  whereUsed: 'Odisha (India).',
  recognise: [
    'Nearly every letter has a round, umbrella-like curve on top instead of a straight line: ଓ ଡ ଶ କ.',
    'Letters look like little domes or arches.',
  ],
  lookalikes: [
    { script: 'bengali', tell: 'Bengali has a straight top line; Odia has curved "umbrellas".' },
    { script: 'malayalam', tell: 'Malayalam is also rounded, but letters are wide and loopy without a dome on top.' },
  ],
  sections: indic(0x0b00, [0x0c, 0x35], false, L('ଡ଼=ṛa ଢ଼=ṛha ୟ=ya ୱ=wa')),
  fallbackSample: 'ଓଡ଼ିଶା · ଭୁବନେଶ୍ୱର · କଟକ · ପୁରୀ',
  history: [
    'Odia script developed from Brahmi via the Kalinga script, and was well established by the 14th century.',
    'Its rounded tops are often explained by the writing material: scribes incised letters into palm leaves with a stylus, and long straight lines along the grain would split the leaf, so curved strokes worked better.',
  ],
  facts: ['Odia was recognised as a Classical Language of India in 2014.'],
  sources: ['https://en.wikipedia.org/wiki/Odia_script'],
}

export const tamil: Script = {
  id: 'tamil',
  name: 'Tamil',
  nativeName: 'தமிழ்',
  kind: 'abugida',
  direction: 'left to right',
  area: 'South Asia',
  showcase: 'தமிழ்நாடு',
  languages: [{ name: 'Tamil' }],
  whereUsed: 'Tamil Nadu and Puducherry (India), northern and eastern Sri Lanka, Singapore (official language) and Malaysia.',
  recognise: [
    'No top line, and angular, fairly simple letters: த ம ழ ந.',
    'Many letters end with a loop or tail curling right: ழ ள ண.',
    'Fewer letters than other Indic scripts, and a dot (pulli) above a letter to cancel the vowel: க், ம்.',
  ],
  lookalikes: [
    { script: 'malayalam', tell: 'Malayalam is far rounder and loopier. Tamil letters have straighter lines and right angles.' },
    { script: 'sinhala', tell: 'Sinhala is round and curly all over. Tamil is angular. In Sri Lanka, signs often show both, plus English.' },
  ],
  sections: indic(0x0b80, [0x0c], true),
  history: [
    'Tamil has one of the longest continuous literary traditions of any living language, with Sangam poetry from over 2,000 years ago. The script comes from Tamil-Brahmi, found in cave inscriptions from around the 3rd century BC.',
    'Unlike the northern scripts, Tamil did not add letters for every Sanskrit sound; it kept a small set of letters for its own sounds. Grantha letters (ஜ ஷ ஸ ஹ) were added for loanwords.',
  ],
  facts: [
    'Tamil was the first language declared a Classical Language of India (2004).',
    'The letter ழ (ḻa) is a sound almost unique to Tamil and Malayalam; the name of the language itself, Tamiḻ, contains it.',
  ],
  sources: ['https://en.wikipedia.org/wiki/Tamil_script'],
}

export const telugu: Script = {
  id: 'telugu',
  name: 'Telugu',
  nativeName: 'తెలుగు',
  kind: 'abugida',
  direction: 'left to right',
  area: 'South Asia',
  showcase: 'తెలుగు',
  languages: [{ name: 'Telugu' }],
  whereUsed: 'Andhra Pradesh and Telangana (India).',
  recognise: [
    'Round letters, many with a small tick mark ✓ (talakattu) on top: క గ న మ.',
    'Letters are fairly wide and sit in rows of round shapes.',
  ],
  lookalikes: [
    { script: 'kannada', tell: 'Kannada is almost identical in style. Telugu tops are ticks ✓ (క); Kannada tops are flatter, more horizontal hooks (ಕ). Also check the region: Karnataka vs Andhra/Telangana.' },
  ],
  sections: indic(0x0c00, [0x0c, 0x31, 0x34], true),
  history: [
    'Telugu and Kannada used the same script (Kadamba, then Telugu-Kannada) until about the 13th century, when they gradually split. That is why they still look so similar today.',
    'Telugu is sometimes called the "Italian of the East", because almost all native words end in a vowel.',
  ],
  facts: ['Telugu is one of the most spoken languages in India, with over 80 million speakers.'],
  sources: ['https://en.wikipedia.org/wiki/Telugu_script'],
}

export const kannada: Script = {
  id: 'kannada',
  name: 'Kannada',
  nativeName: 'ಕನ್ನಡ',
  kind: 'abugida',
  direction: 'left to right',
  area: 'South Asia',
  showcase: 'ಕರ್ನಾಟಕ',
  languages: [{ name: 'Kannada' }, { name: 'Tulu' }, { name: 'Konkani (partly)' }],
  whereUsed: 'Karnataka (India), including Bengaluru.',
  recognise: [
    'Rounded letters like Telugu, but with flatter, horizontal hooks on top: ಕ ಗ ನ ಮ.',
    'Letters look like they have little hats or brims.',
  ],
  lookalikes: [
    { script: 'telugu', tell: 'Telugu tops are tick marks ✓; Kannada tops are flat hooks. ಕ (Kannada) vs క (Telugu).' },
  ],
  sections: indic(0x0c80, [0x0c, 0x31, 0x34], true),
  history: [
    'Kannada script split from the shared Telugu-Kannada script around the 13th century. Kannada has a literary tradition going back over a thousand years; the oldest known Kannada inscription is from around 450 AD (Halmidi).',
  ],
  facts: ['The state of Karnataka requires Kannada on shop signs, so it is very common on Bengaluru streets.'],
  sources: ['https://en.wikipedia.org/wiki/Kannada_script'],
}

export const malayalam: Script = {
  id: 'malayalam',
  name: 'Malayalam',
  nativeName: 'മലയാളം',
  kind: 'abugida',
  direction: 'left to right',
  area: 'South Asia',
  showcase: 'മലയാളം',
  languages: [{ name: 'Malayalam' }],
  whereUsed: 'Kerala and Lakshadweep (India).',
  recognise: [
    'Very round and loopy, with no top line: letters look like chains of bubbles: മ ല യ ാ ള.',
    'Words are long, because Malayalam joins lots of words together.',
  ],
  lookalikes: [
    { script: 'tamil', tell: 'Tamil is angular with straight lines; Malayalam is round everywhere.' },
    { script: 'sinhala', tell: 'Sinhala is also round, but letters have more curls and flourishes on top; Malayalam looks like bubbles in a row.' },
  ],
  sections: indic(0x0d00, [0x0c, 0x29], true, [
    { char: 'ൻ', roman: 'n', note: 'Chillu letters: consonants with no vowel, at the end of syllables' },
    ...L('ൺ=ṇ ർ=r ൽ=l ൾ=ḷ'),
  ]),
  history: [
    'Malayalam developed from the Grantha script (used to write Sanskrit in the Tamil region) around the 12th–13th centuries, as Malayalam itself separated from Tamil.',
    'Kerala\'s spice trade brought Arab, Jewish, Chinese and later Portuguese and Dutch traders to its ports for centuries, and Malayalam has many loanwords from these contacts.',
  ],
  facts: ['"Malayalam" is a palindrome in English letters.', 'Kerala has one of the highest literacy rates in India.'],
  sources: ['https://en.wikipedia.org/wiki/Malayalam_script'],
}

export const sinhala: Script = {
  id: 'sinhala',
  name: 'Sinhala',
  nativeName: 'සිංහල',
  kind: 'abugida',
  direction: 'left to right',
  area: 'South Asia',
  showcase: 'ශ්‍රී ලංකා',
  languages: [{ name: 'Sinhala' }],
  whereUsed: 'Sri Lanka, where road signs are usually Sinhala, Tamil and English.',
  recognise: [
    'Round letters covered in curls, like little snails or spirals: ස ල ක ම.',
    'Many letters have a curl on top that loops back on itself.',
  ],
  lookalikes: [
    { script: 'malayalam', tell: 'Malayalam is bubbly and wide; Sinhala has more curly flourishes on top.' },
    { script: 'tamil', tell: 'Tamil is angular. In Sri Lanka, the curly script on signs is Sinhala and the angular one is Tamil.' },
  ],
  sections: [
    { title: 'Vowels', letters: L('අ=a ආ=ā ඇ=æ ඈ=ǣ ඉ=i ඊ=ī උ=u ඌ=ū එ=e ඒ=ē ඔ=o ඕ=ō') },
    {
      title: 'Consonants',
      letters: L('ක=ka ග=ga ච=ca ජ=ja ට=ṭa ඩ=ḍa ණ=ṇa ත=ta ද=da න=na ප=pa බ=ba ම=ma ය=ya ර=ra ල=la ව=va ස=sa හ=ha ළ=ḷa ෆ=fa ඛ=kha ඝ=gha ථ=tha ධ=dha භ=bha ශ=śa ෂ=ṣa'),
    },
    { title: 'Prenasalised consonants (unique to Sinhala)', letters: L('ඟ=n̆ga ඬ=n̆ḍa ඳ=n̆da ඹ=m̆ba') },
  ],
  history: [
    'Sinhala developed from Brahmi, brought to Sri Lanka with Buddhism around the 3rd century BC. Its round shape, like Odia\'s, is linked to writing on palm leaves, which straight lines would tear.',
    'Sinhala is an Indo-Aryan language (related to Hindi and Bengali), even though it is surrounded by Dravidian Tamil, because its speakers\' ancestors migrated from northern India.',
  ],
  facts: ['Sinhala has prenasalised consonants (ඟ ඬ ඳ ඹ), sounds like "nga" said as one quick consonant.'],
  sources: ['https://en.wikipedia.org/wiki/Sinhala_script'],
}

export const tibetan: Script = {
  id: 'tibetan',
  name: 'Tibetan',
  nativeName: 'བོད་ཡིག',
  kind: 'abugida',
  direction: 'left to right',
  area: 'South Asia',
  showcase: 'བོད་ཡིག',
  languages: [{ name: 'Tibetan' }, { name: 'Dzongkha' }, { name: 'Ladakhi' }, { name: 'Sikkimese' }],
  whereUsed: 'Tibet (China), Bhutan (Dzongkha), and Ladakh and Sikkim (India). Parts of northern Nepal.',
  recognise: [
    'A top line like Devanagari, but letters hang from it in narrow, stacked columns: བོད་ཡིག.',
    'A small dot ་ (tsheg) separates every syllable, so text looks like groups divided by dots.',
    'Letters often stack vertically, with extra letters written below.',
  ],
  lookalikes: [
    { script: 'devanagari', tell: 'Devanagari joins letters along the top line within a word; Tibetan breaks every syllable with a dot ་.' },
  ],
  sections: [
    {
      title: 'The 30 consonants',
      letters: L("ཀ=ka ཁ=kha ག=ga ང=nga ཅ=ca ཆ=cha ཇ=ja ཉ=nya ཏ=ta ཐ=tha ད=da ན=na པ=pa ཕ=pha བ=ba མ=ma ཙ=tsa ཚ=tsha ཛ=dza ཝ=wa ཞ=zha ཟ=za འ='a ཡ=ya ར=ra ལ=la ཤ=sha ས=sa ཧ=ha ཨ=a"),
    },
  ],
  history: [
    'According to tradition, the Tibetan script was created in the 7th century by the minister Thonmi Sambhota, sent to India by King Songtsen Gampo, based on Indian scripts of the Gupta era. It was used to translate Buddhist scriptures from Sanskrit.',
    'Tibetan spelling has hardly changed since the 9th century, while pronunciation has changed a lot, so many written letters are silent today.',
  ],
  facts: ['Prayer flags across the Himalayas are printed with Tibetan script.'],
  sources: ['https://en.wikipedia.org/wiki/Tibetan_script'],
}
