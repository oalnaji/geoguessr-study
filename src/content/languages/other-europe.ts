import type { Group, Language } from '../types'

export const turkic: Group = {
  id: 'turkic-latin',
  name: 'Turkic (Latin)',
  members: ['tr', 'az', 'uz', 'tk'],
  intro: [
    'Turkish, Azerbaijani, Uzbek and Turkmen are Turkic languages that now use Latin script. Turkey switched in 1928; the others moved from Cyrillic to Latin after the USSR broke up in 1991. Each designed its own alphabet, so a few letters give each away.',
  ],
  checklist: [
    { look: 'ə (upside-down e)', then: 'Azerbaijani' },
    { look: 'oʻ gʻ (letter + apostrophe mark), sh/ch digraphs', then: 'Uzbek' },
    { look: 'ý ň ž ä', then: 'Turkmen' },
    { look: 'ı ğ ş ç ö ü with none of the above', then: 'Turkish' },
  ],
  traps: [
    'Romanian ș has a comma below; Turkish ş has a cedilla. On signs they can look identical, so use the other letters (ı, ğ vs ă, ț).',
    'Azerbaijani also uses ı ğ ş ç ö ü like Turkish; the ə is the tell.',
    'Uzbekistan still uses Cyrillic on many signs.',
  ],
}

export const tr: Language = {
  id: 'tr',
  name: 'Turkish',
  nativeName: 'Türkçe',
  script: 'latin',
  family: ['Turkic', 'Oghuz'],
  groups: ['turkic-latin'],
  confusedWith: ['ro', 'hu'],
  giveaways: [
    { sign: 'ı İ', tip: 'Dotless ı and dotted capital İ: Turkish (and Azerbaijani) only (İstanbul, Kırıkkale).' },
    { sign: 'ğ', tip: 'Soft g (yumuşak ge): Turkish and Azerbaijani.' },
    { sign: 'ş ç ö ü', tip: 'Together with ı and ğ, a certain Turkish mix.' },
    { sign: 'Cad. / Sok. / Mah.', tip: 'Cadde (avenue), sokak (street), mahalle (neighbourhood) on street signs.' },
    { sign: '-lar/-ler, -ı/-i endings', tip: 'Vowel harmony: suffixes change to match the word (evler, kitaplar).' },
  ],
  regions: [
    { country: 'TR', status: 'official', signage: 'common' },
    { country: 'CY', area: 'Northern Cyprus', status: 'official', signage: 'common' },
    { country: 'BG', area: 'Kardzhali and Razgrad provinces', status: 'minority', signage: 'rare' },
    { country: 'DE', status: 'diaspora', signage: 'rare', note: 'About three million people of Turkish origin live in Germany.' },
  ],
  signWords: {
    street: 'sokak', road: 'yol', square: 'meydan', exit: 'çıkış', centre: 'merkez', church: 'kilise',
    school: 'okul', pharmacy: 'eczane', bakery: 'fırın', police: 'polis', hospital: 'hastane',
    station: 'istasyon', bridge: 'köprü', forSale: 'satılık',
  },
  orthography: { year: 1928, note: 'Atatürk\'s alphabet reform replaced Ottoman Arabic script with Latin letters.' },
  history: [
    'Turkic peoples moved west from Central Asia, and the Seljuks brought Turkish into Anatolia after the Battle of Manzikert (1071). The Ottoman Empire wrote Turkish in Arabic script, with a huge Arabic and Persian vocabulary.',
    'In 1928 Mustafa Kemal Atatürk replaced the Arabic script with a new Latin alphabet designed for Turkish sounds, and personally toured the country with a blackboard to teach it. The Turkish Language Association then replaced many Arabic and Persian loanwords with Turkish ones.',
  ],
  place: [
    { title: 'Why is Turkish spoken in Cyprus and Bulgaria?', text: 'Both were part of the Ottoman Empire for centuries (Cyprus from 1571, Bulgaria from the late 14th century until 1878). Turkish-speaking communities remained after Ottoman rule ended.' },
  ],
  connections: ['Closest relatives: Azerbaijani (highly intelligible), Turkmen, Gagauz. Then Uzbek, Kazakh and other Turkic languages.'],
  facts: ['Turkish has no grammatical gender, and one pronoun "o" means he, she and it.'],
  sources: ['https://en.wikipedia.org/wiki/Turkish_language', 'https://en.wikipedia.org/wiki/Turkish_alphabet'],
}

export const en: Language = {
  id: 'en',
  name: 'English',
  nativeName: 'English',
  script: 'latin',
  family: ['Indo-European', 'Germanic', 'West Germanic', 'Anglo-Frisian'],
  groups: [],
  confusedWith: ['nl'],
  giveaways: [
    { sign: 'No diacritics', tip: 'English uses plain A–Z. If a sign has no accents at all, it may be English (or Dutch, Malay, Indonesian…).' },
    { sign: 'th, sh, wh', tip: 'Very common English combinations.' },
    { sign: 'Street / Road / Avenue', tip: 'St, Rd, Ave after the name.' },
  ],
  regions: [
    { country: 'GB', status: 'official', signage: 'common' },
    { country: 'IE', status: 'official', signage: 'common' },
    { country: 'US', status: 'official', signage: 'common' },
    { country: 'CA', status: 'official', signage: 'common' },
    { country: 'AU', status: 'official', signage: 'common' },
    { country: 'NZ', status: 'official', signage: 'common' },
    { country: 'ZA', status: 'official', signage: 'common' },
    { country: 'MT', status: 'co-official', signage: 'common' },
    { country: 'KE', status: 'official', signage: 'common' },
    { country: 'NG', status: 'official', signage: 'common' },
    { country: 'IN', status: 'co-official', signage: 'common' },
    { country: 'PH', status: 'co-official', signage: 'common' },
    { country: 'SG', status: 'official', signage: 'common' },
    { country: 'IM', status: 'official', signage: 'common' },
  ],
  signWords: {
    street: 'street', road: 'road', square: 'square', exit: 'exit', centre: 'town centre', church: 'church',
    school: 'school', pharmacy: 'pharmacy / chemist', bakery: 'bakery', police: 'police', hospital: 'hospital',
    station: 'station', bridge: 'bridge', forSale: 'for sale',
  },
  history: [
    'English grew from the dialects of Angles, Saxons and Jutes who settled in Britain from the 5th century. Viking settlement added Norse words (sky, egg, they), and the Norman Conquest of 1066 added thousands of French words.',
    'The British Empire and later American influence made English the world\'s most widely used second language.',
  ],
  place: [
    { title: 'How do you tell English-speaking countries apart?', text: 'Language won\'t help much. Look at other clues: driving side (left in UK, Ireland, Australia, NZ, South Africa, Kenya, India, Malta), spelling (centre vs center), and road sign styles.' },
  ],
  connections: ['Closest relatives: Scots and Frisian, then Dutch and German.'],
  facts: ['English has more non-native speakers than native speakers.'],
  sources: ['https://en.wikipedia.org/wiki/English_language'],
}

export const sq: Language = {
  id: 'sq',
  name: 'Albanian',
  nativeName: 'shqip',
  script: 'latin',
  family: ['Indo-European', 'Albanian'],
  groups: [],
  confusedWith: ['ro', 'tr'],
  giveaways: [
    { sign: 'ë', tip: 'Extremely common (shqipëri, rrugë). With ç, it points to Albanian.' },
    { sign: 'ç', tip: 'Albanian uses ç but no other accents except ë.' },
    { sign: 'rr, dh, sh, xh, gj, nj, th, ll', tip: 'Albanian digraphs: "Rruga" (street) is everywhere.' },
    { sign: 'Rruga / Rr.', tip: 'Street, placed before the name.' },
  ],
  regions: [
    { country: 'AL', status: 'official', signage: 'common' },
    { country: 'XK', status: 'official', signage: 'common' },
    { country: 'MK', area: 'Western North Macedonia (Tetovo, Gostivar)', status: 'co-official', signage: 'common' },
    { country: 'ME', area: 'Ulcinj, Tuzi', status: 'minority', signage: 'common' },
    { country: 'IT', area: 'Arbëresh villages in southern Italy', status: 'minority', signage: 'sometimes' },
    { country: 'GR', status: 'minority', signage: 'rare' },
  ],
  signWords: {
    street: 'rruga', square: 'sheshi', exit: 'dalje', centre: 'qendra', church: 'kisha', school: 'shkolla',
    pharmacy: 'farmaci', police: 'policia', hospital: 'spitali', station: 'stacioni', bridge: 'ura', forSale: 'shitet',
  },
  orthography: { year: 1908, note: 'The Congress of Manastir (1908) adopted the Latin alphabet used today.' },
  history: [
    'Albanian is a branch of Indo-European all by itself, with no close relatives. It may descend from Illyrian or another ancient Balkan language.',
    'Before 1908 Albanian was written in Latin, Greek, Arabic and local scripts, depending on religion and region. The Congress of Manastir chose a single Latin alphabet in 1908, four years before Albanian independence.',
  ],
  place: [
    { title: 'Why is Albanian spoken in southern Italy?', text: 'In the 15th–18th centuries, Albanians fled the Ottoman conquest and settled in Calabria, Sicily and Apulia. Their descendants, the Arbëreshë, still speak an old form of Albanian, and some villages have bilingual signs.' },
  ],
  connections: ['No close relatives; it forms its own branch of Indo-European. Two main dialects: Gheg (north, Kosovo) and Tosk (south, the basis of the standard).'],
  facts: ['Albanians call their country Shqipëri, often explained as "land of the eagles".'],
  sources: ['https://en.wikipedia.org/wiki/Albanian_language'],
}

export const mt: Language = {
  id: 'mt',
  name: 'Maltese',
  nativeName: 'Malti',
  script: 'latin',
  family: ['Afro-Asiatic', 'Semitic', 'Arabic'],
  groups: [],
  confusedWith: ['it'],
  giveaways: [
    { sign: 'ħ', tip: 'h with a stroke: unique to Maltese (Ħamrun).' },
    { sign: 'ċ ġ ż', tip: 'Dotted letters: ż is also Polish, but ċ and ġ are only Maltese.' },
    { sign: 'għ', tip: 'A Maltese digraph from Arabic ع/غ: Għajnsielem.' },
    { sign: 'Triq', tip: 'Street, placed before the name: Triq il-Kbira.' },
    { sign: 'il-, ix-, iż-', tip: 'The Arabic-style definite article, joined with a hyphen.' },
  ],
  regions: [{ country: 'MT', status: 'official', signage: 'common', note: 'Street signs are usually bilingual Maltese–English.' }],
  signWords: {
    street: 'triq', square: 'pjazza', exit: 'ħruġ', centre: 'ċentru', church: 'knisja', school: 'skola',
    pharmacy: 'spiżerija', bakery: 'forn', police: 'pulizija', hospital: 'sptar', forSale: 'għall-bejgħ',
  },
  orthography: { year: 1924, note: 'The alphabet with ċ ġ ħ ż was agreed in 1924 and made official in 1934.' },
  history: [
    'Maltese descends from the Arabic spoken in Sicily and Malta under Arab rule (870–1091). After the Normans took Malta, it was cut off from the Arab world and absorbed huge numbers of Sicilian, Italian and later English words.',
    'It is the only Semitic language written in Latin script and the only one that is an official language of the European Union.',
  ],
  place: [
    { title: 'Why does Maltese sound Arabic but look Italian?', text: 'Its grammar and core vocabulary come from Arabic, but about half its words come from Italian and Sicilian, because Malta was ruled from Sicily, then by the Knights of St John (1530–1798) with Italian as the language of culture, then by Britain (1800–1964).' },
  ],
  connections: ['Closest relatives: Tunisian and Sicilian Arabic (historically). Heavy influence from Italian and English.'],
  facts: ['Malta drives on the left, a legacy of British rule, unlike the rest of the EU apart from Ireland and Cyprus.'],
  sources: ['https://en.wikipedia.org/wiki/Maltese_language', 'https://en.wikipedia.org/wiki/Maltese_alphabet'],
}

export const el: Language = {
  id: 'el',
  name: 'Greek',
  nativeName: 'ελληνικά',
  script: 'greek',
  family: ['Indo-European', 'Hellenic'],
  groups: [],
  confusedWith: ['mk'],
  giveaways: [
    { sign: 'λ Σ Ω Δ', tip: 'Greek-only letters: the script alone identifies the language.' },
    { sign: 'accent marks', tip: 'Nearly every word has an accent (ά έ ή ί ό ύ ώ).' },
    { sign: 'Οδός / Λεωφόρος', tip: 'Street (Odos) / avenue (Leoforos).' },
  ],
  regions: [
    { country: 'GR', status: 'official', signage: 'common', note: 'Road signs add a Latin transliteration.' },
    { country: 'CY', status: 'official', signage: 'common' },
    { country: 'AL', area: 'Southern Albania (Gjirokastër, Sarandë)', status: 'minority', signage: 'sometimes' },
  ],
  signWords: {
    street: 'οδός', road: 'δρόμος', square: 'πλατεία', exit: 'έξοδος', centre: 'κέντρο', church: 'εκκλησία',
    school: 'σχολείο', pharmacy: 'φαρμακείο', bakery: 'φούρνος', police: 'αστυνομία', hospital: 'νοσοκομείο',
    station: 'σταθμός', bridge: 'γέφυρα', forSale: 'πωλείται',
  },
  orthography: { year: 1982, note: 'The monotonic system (one accent mark) replaced the polytonic system.' },
  history: [
    'Greek has the longest documented history of any Indo-European language, from Linear B tablets (around 1400 BC) to today. Koine Greek was the common language of the eastern Mediterranean after Alexander the Great, and of the New Testament.',
    'For much of modern Greek history there was a conflict between Katharevousa (a formal, archaic form) and Demotic (everyday Greek). Demotic became the official standard in 1976.',
  ],
  place: [
    { title: 'Why is Greek spoken in southern Albania and Cyprus?', text: 'Greek-speaking communities have lived in Epirus (now split between Greece and Albania) since antiquity. Cyprus was settled by Greeks in the Bronze Age.' },
  ],
  connections: ['No close living relatives; Greek forms its own branch of Indo-European. Huge influence on scientific vocabulary in all European languages.'],
  facts: ['The ";" is the Greek question mark.'],
  sources: ['https://en.wikipedia.org/wiki/Greek_language'],
}

export const languages = [tr, en, sq, mt, el]
