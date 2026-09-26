import type { Group, Language } from '../types'

export const exYugoslav: Group = {
  id: 'ex-yugoslav',
  name: 'Ex-Yugoslav',
  members: ['hr', 'sr', 'bs', 'cnr', 'sl', 'mk'],
  intro: [
    'Croatian, Serbian, Bosnian and Montenegrin are standard varieties of one language (formerly called Serbo-Croatian). They share the same Latin letters (č ć đ dž lj nj š ž), so the alphabet alone cannot separate them. The clues are the script (Serbian and Montenegrin also use Cyrillic), vocabulary, and the country the sign is in.',
    'Slovene and Macedonian are separate languages. Slovene lacks ć and đ; Macedonian uses Cyrillic with its own letters (ѓ ќ ѕ).',
    'Pronunciation also differs: Croatian, Bosnian and Montenegrin mostly use the "ijekavian" forms (mlijeko, "milk"; rijeka, "river"), while Serbian in Serbia mostly uses "ekavian" (mleko, reka).',
  ],
  checklist: [
    { look: 'Cyrillic with ѓ, ќ or ѕ', then: 'Macedonian' },
    { look: 'Cyrillic with ђ or ћ', then: 'Serbian (or Montenegrin)' },
    { look: 'Latin, no ć or đ, only č š ž', then: 'Slovene' },
    { look: 'Latin with ś or ź', then: 'Montenegrin' },
    { look: 'ekavian forms: reka, mleko, lepo, dete (where Croatian has rijeka, mlijeko, lijepo, dijete)', then: 'Serbian' },
    { look: 'ijekavian forms (rijeka, mlijeko) and words like "ljekarna", "kolodvor", "tvornica"', then: 'Croatian' },
    { look: 'ijekavian plus "apoteka", "stanica", and mosques', then: 'Bosnian (or Montenegrin)' },
  ],
  traps: [
    'Serbian Latin and Croatian use exactly the same letters. You need words or context, not letters.',
    'Serbian signs often show both scripts: Cyrillic on top, Latin below.',
    'Montenegrin\'s extra letters ś and ź are rarely used on signs; most signs look identical to Serbian Latin or Cyrillic.',
  ],
}

export const hr: Language = {
  id: 'hr',
  name: 'Croatian',
  nativeName: 'hrvatski',
  script: 'latin',
  family: ['Indo-European', 'Balto-Slavic', 'Slavic', 'South Slavic', 'Western South Slavic', 'Serbo-Croatian'],
  groups: ['ex-yugoslav'],
  confusedWith: ['sr', 'bs', 'sl', 'cnr'],
  giveaways: [
    { sign: 'ć đ dž', tip: 'Shared with Serbian (Latin), Bosnian and Montenegrin, but not Slovene.' },
    { sign: 'ljekarna', tip: 'Croatian for pharmacy. Serbian and Bosnian say "apoteka".' },
    { sign: 'kolodvor', tip: 'Railway station in Croatian; Serbian uses "stanica".' },
    { sign: 'ijekavian forms', tip: 'rijeka, mlijeko, cvijet: "ije" where Serbian has "e".' },
    { sign: 'Latin only', tip: 'Croatia uses only Latin script on signs. Cyrillic is not used, except in a few Serb-majority municipalities.' },
  ],
  regions: [
    { country: 'HR', status: 'official', signage: 'common' },
    { country: 'BA', area: 'Herzegovina and the Federation of BiH', status: 'official', signage: 'common', note: 'One of three official languages of Bosnia and Herzegovina.' },
    { country: 'AT', area: 'Burgenland', status: 'minority', signage: 'sometimes', note: 'Burgenland Croats: bilingual German–Croatian town signs.' },
  ],
  signWords: {
    street: 'ulica', road: 'cesta', square: 'trg', exit: 'izlaz', centre: 'centar', church: 'crkva',
    school: 'škola', pharmacy: 'ljekarna', bakery: 'pekara', police: 'policija', hospital: 'bolnica',
    station: 'kolodvor', bridge: 'most', forSale: 'prodaje se',
  },
  orthography: { year: 1830, note: 'Ljudevit Gaj\'s alphabet (1830) introduced č ć š ž, modelled on Czech. đ was added later by Đuro Daničić.' },
  history: [
    'Croats historically wrote in three scripts: Glagolitic (for church texts on the coast, into the 19th century in some places), Croatian Cyrillic (Bosančica), and Latin. Latin won out, and in 1830 Ljudevit Gaj created the modern alphabet with Czech-style háčeks.',
    'Under Yugoslavia, Croatian and Serbian were treated as one language, Serbo-Croatian. Since independence in 1991, Croatia has emphasised distinct Croatian vocabulary (e.g. "zrakoplov" for aeroplane rather than "avion").',
  ],
  place: [
    { title: 'Why is Croatian written in Latin but Serbian in Cyrillic?', text: 'Religion. Croats are mostly Catholic and looked to Rome, which used Latin. Serbs are mostly Orthodox and looked to Byzantium, which used Greek-derived Cyrillic. The dividing line goes back to the split of the Roman Empire in 395 AD.' },
    { title: 'Italian on the Istrian coast', text: 'Istria was Venetian for centuries and Italian until 1947. In some towns such as Rovinj/Rovigno, signs are bilingual Croatian–Italian.' },
  ],
  connections: ['Mutually intelligible with Serbian, Bosnian and Montenegrin. Close to Slovene, especially the Kajkavian dialect around Zagreb.'],
  facts: ['The necktie (cravat) is named after Croatian mercenaries (Hrvati → "Croates") whose neck scarves caught on in 17th-century France.'],
  sources: ['https://en.wikipedia.org/wiki/Croatian_language', 'https://en.wikipedia.org/wiki/Gaj%27s_Latin_alphabet'],
}

export const sr: Language = {
  id: 'sr',
  name: 'Serbian',
  nativeName: 'српски / srpski',
  script: 'latin',
  altScript: 'cyrillic',
  family: ['Indo-European', 'Balto-Slavic', 'Slavic', 'South Slavic', 'Western South Slavic', 'Serbo-Croatian'],
  groups: ['ex-yugoslav'],
  confusedWith: ['hr', 'bs', 'cnr', 'mk'],
  giveaways: [
    { sign: 'Cyrillic + Latin together', tip: 'Serbia is the only country where signs routinely show the same text in both scripts.' },
    { sign: 'ђ ћ', tip: 'Cyrillic letters found only in Serbian (and Montenegrin). Macedonian has ѓ ќ instead.' },
    { sign: 'ј љ њ џ', tip: 'Serbian Cyrillic letters, shared only with Macedonian.' },
    { sign: 'ekavian forms', tip: 'reka, mleko, lepo: "e" where Croatian has "ije".' },
    { sign: 'apoteka / stanica', tip: 'Pharmacy / station, versus Croatian ljekarna / kolodvor.' },
  ],
  regions: [
    { country: 'RS', status: 'official', signage: 'common', note: 'Cyrillic is the official script; Latin is everywhere too.' },
    { country: 'BA', area: 'Republika Srpska', status: 'official', signage: 'common', note: 'Signs mostly in Cyrillic.' },
    { country: 'ME', status: 'regional', signage: 'common', note: 'Spoken by a plurality in Montenegro, though Montenegrin is the official name.' },
    { country: 'XK', area: 'Northern Kosovo', status: 'co-official', signage: 'common' },
    { country: 'HR', area: 'Some eastern municipalities (e.g. Vukovar)', status: 'minority', signage: 'rare' },
  ],
  signWords: {
    street: 'ulica', road: 'put', square: 'trg', exit: 'izlaz', centre: 'centar', church: 'crkva',
    school: 'škola', pharmacy: 'apoteka', bakery: 'pekara', police: 'policija', hospital: 'bolnica',
    station: 'stanica', bridge: 'most', forSale: 'prodaje se',
  },
  signWordsAlt: {
    street: 'улица', road: 'пут', square: 'трг', exit: 'излаз', centre: 'центар', church: 'црква',
    school: 'школа', pharmacy: 'апотека', bakery: 'пекара', police: 'полиција', hospital: 'болница',
    station: 'станица', bridge: 'мост', forSale: 'продаје се',
  },
  orthography: { year: 1818, note: 'Vuk Karadžić\'s reformed Cyrillic alphabet: one letter per sound, "write as you speak".' },
  history: [
    'Serbian was written in Cyrillic from the Middle Ages, in a form close to Church Slavonic. In the early 19th century Vuk Karadžić reformed it into a phonetic alphabet of 30 letters, one per sound, and based the standard language on the speech of ordinary people. His 1818 dictionary made it official in practice.',
    'The Latin alphabet matches Vuk\'s Cyrillic letter for letter (ђ = đ, ћ = ć, џ = dž…), so text can be converted automatically. Under Yugoslavia Latin became very common. Serbia\'s 2006 constitution made Cyrillic the official script, but Latin is still used everywhere.',
  ],
  place: [
    { title: 'Why is Vojvodina so multilingual?', text: 'After driving out the Ottomans in the late 17th and 18th centuries, the Habsburgs resettled the empty plains of Vojvodina with Hungarians, Germans, Slovaks, Romanians and Rusyns, as well as Serbs fleeing Ottoman lands. Vojvodina still has six official languages: Serbian, Hungarian, Slovak, Romanian, Croatian and Pannonian Rusyn.' },
  ],
  connections: ['Mutually intelligible with Croatian, Bosnian and Montenegrin. Close to Macedonian and Bulgarian in some features.'],
  facts: ['Serbian is one of very few languages with active digraphia: the same text in two interchangeable scripts.'],
  sources: ['https://en.wikipedia.org/wiki/Serbian_language', 'https://en.wikipedia.org/wiki/Serbian_Cyrillic_alphabet'],
}

export const bs: Language = {
  id: 'bs',
  name: 'Bosnian',
  nativeName: 'bosanski',
  script: 'latin',
  family: ['Indo-European', 'Balto-Slavic', 'Slavic', 'South Slavic', 'Western South Slavic', 'Serbo-Croatian'],
  groups: ['ex-yugoslav'],
  confusedWith: ['hr', 'sr', 'cnr'],
  giveaways: [
    { sign: 'h in words like "kahva", "lahko"', tip: 'Bosnian keeps an h from Turkish and older forms where Croatian and Serbian drop it (kafa/kava).' },
    { sign: 'ijekavian + apoteka', tip: 'Croatian-style ijekavian forms with Serbian-style words: a mix that suggests Bosnian.' },
    { sign: 'Turkish loanwords', tip: 'čaršija (market street), džamija (mosque), sokak (lane).' },
  ],
  regions: [
    { country: 'BA', status: 'official', signage: 'common', note: 'One of three official languages, mainly in the Federation.' },
    { country: 'RS', area: 'Sandžak (Novi Pazar)', status: 'regional', signage: 'sometimes' },
    { country: 'ME', status: 'minority', signage: 'rare' },
  ],
  signWords: {
    street: 'ulica', road: 'cesta', square: 'trg', exit: 'izlaz', centre: 'centar', church: 'crkva',
    school: 'škola', pharmacy: 'apoteka', bakery: 'pekara', police: 'policija', hospital: 'bolnica',
    station: 'stanica', bridge: 'most', forSale: 'prodaje se',
  },
  history: [
    'Bosnian is the standard variety used mostly by Bosniaks (Bosnian Muslims). Bosnia was under Ottoman rule from 1463 to 1878, which left many Turkish, Arabic and Persian loanwords.',
    'Historically, Bosnian was written in Latin, Cyrillic, the local Bosančica script and even Arabic script (Arebica). Today it is written almost entirely in Latin.',
  ],
  place: [
    { title: 'Why are there three official languages in one country?', text: 'The Dayton Agreement (1995) ended the Bosnian War by recognising three constituent peoples: Bosniaks, Serbs and Croats. Each calls the shared language by its own name, and Republika Srpska uses Cyrillic, while the Federation uses Latin.' },
  ],
  connections: ['Mutually intelligible with Croatian, Serbian and Montenegrin.'],
  facts: ['GeoGuessr has only limited Street View coverage of Bosnia and Herzegovina, so Bosnian mostly helps in neighbouring countries and Sandžak.'],
  sources: ['https://en.wikipedia.org/wiki/Bosnian_language'],
}

export const cnr: Language = {
  id: 'cnr',
  name: 'Montenegrin',
  nativeName: 'crnogorski / црногорски',
  script: 'latin',
  altScript: 'cyrillic',
  family: ['Indo-European', 'Balto-Slavic', 'Slavic', 'South Slavic', 'Western South Slavic', 'Serbo-Croatian'],
  groups: ['ex-yugoslav'],
  confusedWith: ['sr', 'bs', 'hr'],
  giveaways: [
    { sign: 'ś ź', tip: 'Two extra letters added in 2009 (śekira, "axe"; iźesti). Unique among these languages, but rare on signs.' },
    { sign: 'ijekavian + both scripts', tip: 'Serbian-style Cyrillic/Latin mix, but with ijekavian forms (rijeka, not reka).' },
    { sign: 'Coastal setting', tip: 'On the Adriatic coast with Cyrillic or Serbian-looking Latin, and no Croatian flags: think Montenegro.' },
  ],
  regions: [{ country: 'ME', status: 'official', signage: 'common' }],
  signWords: {
    street: 'ulica', road: 'put', square: 'trg', exit: 'izlaz', centre: 'centar', church: 'crkva',
    school: 'škola', pharmacy: 'apoteka', bakery: 'pekara', police: 'policija', hospital: 'bolnica',
    station: 'stanica', bridge: 'most', forSale: 'prodaje se',
  },
  orthography: { year: 2009, note: 'The official Montenegrin alphabet added ś and ź (Cyrillic с́ and з́).' },
  history: [
    'Montenegro was a separate principality and then kingdom from 1878 to 1918, and became independent again in 2006, after the breakup of Serbia and Montenegro. Its 2007 constitution named the official language Montenegrin.',
    'The standard was codified in 2009 with two new letters for sounds found in local speech. Whether Montenegrin is a separate language from Serbian is a political question; about as many people in Montenegro call their language Serbian.',
  ],
  place: [
    { title: 'Why do Montenegro and Serbia look so similar?', text: 'They shared a state for most of the 20th century (Yugoslavia, then Serbia and Montenegro until 2006), and many Montenegrins identify as Serbs. Signs use the same scripts and mostly the same words.' },
  ],
  connections: ['Mutually intelligible with Serbian, Bosnian and Croatian.'],
  facts: ['Montenegro uses the euro, even though it is not in the EU.'],
  sources: ['https://en.wikipedia.org/wiki/Montenegrin_language', 'https://en.wikipedia.org/wiki/Montenegrin_alphabet'],
}

export const mk: Language = {
  id: 'mk',
  name: 'Macedonian',
  nativeName: 'македонски',
  script: 'cyrillic',
  family: ['Indo-European', 'Balto-Slavic', 'Slavic', 'South Slavic', 'Eastern South Slavic'],
  groups: ['ex-yugoslav'],
  confusedWith: ['bg', 'sr'],
  giveaways: [
    { sign: 'ѓ ќ', tip: 'Found only in Macedonian (Serbian has ђ ћ in their place).' },
    { sign: 'ѕ', tip: 'Macedonian "dz", looks like a Latin s. Unique to Macedonian.' },
    { sign: 'ј љ њ џ', tip: 'Shared with Serbian, but never used in Bulgarian or Russian.' },
    { sign: 'No ы э ю я щ ъ', tip: 'Macedonian lacks these Russian/Bulgarian letters.' },
  ],
  regions: [
    { country: 'MK', status: 'official', signage: 'common', note: 'Road signs add Latin transliteration.' },
    { country: 'AL', area: 'Around Lake Prespa', status: 'minority', signage: 'rare' },
  ],
  signWords: {
    street: 'улица', road: 'пат', square: 'плоштад', exit: 'излез', centre: 'центар', church: 'црква',
    school: 'училиште', pharmacy: 'аптека', bakery: 'пекара', police: 'полиција', hospital: 'болница',
    station: 'станица', bridge: 'мост', forSale: 'се продава',
  },
  orthography: { year: 1945, note: 'The Macedonian alphabet was standardised in 1944–45, based on Serbian Cyrillic with the new letters ѓ ќ ѕ.' },
  history: [
    'Macedonian was codified as a standard language in 1944–45, when Macedonia became a republic within Yugoslavia. The standard was based on central dialects (around Veles and Prilep) to set it apart from both Serbian and Bulgarian.',
    'Linguistically it is very close to Bulgarian; both have lost noun cases and use a definite article attached to the end of words (град → градот, "the town").',
  ],
  place: [
    { title: 'Why are there Albanian signs in North Macedonia?', text: 'About a quarter of the population is ethnic Albanian, mostly in the west (Tetovo, Gostivar) near the Albanian and Kosovo borders. Since the 2001 Ohrid Agreement and a 2019 law, Albanian is co-official, so signs there are bilingual Macedonian–Albanian.' },
  ],
  connections: ['Closest relative: Bulgarian (highly intelligible). Then Serbian.'],
  facts: ['The country was renamed North Macedonia in 2019 to settle a dispute with Greece, which has its own region called Macedonia.'],
  sources: ['https://en.wikipedia.org/wiki/Macedonian_language', 'https://en.wikipedia.org/wiki/Macedonian_alphabet'],
}

export const languages = [hr, sr, bs, cnr, mk]
