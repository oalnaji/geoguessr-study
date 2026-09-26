import type { Group, Language } from '../types'

export const balticFinnic: Group = {
  id: 'baltic-finnic',
  name: 'Baltic + Finnic',
  members: ['lt', 'lv', 'et', 'fi'],
  intro: [
    'These four sit side by side around the Baltic Sea but belong to two unrelated families. Lithuanian and Latvian are Baltic languages (Indo-European, distantly related to Slavic). Estonian and Finnish are Finnic languages (Uralic, related to Hungarian).',
    'The Baltic pair use háčeks (č š ž) borrowed from Czech, plus their own marks: Lithuanian ogoneks (ą ę į ų), Latvian macrons and cedillas (ā ē ī ū ķ ļ ņ ģ). The Finnic pair use lots of double vowels and umlauts (ä ö ü); Estonian also has õ.',
  ],
  checklist: [
    { look: 'ą ę į ų ė (tails and a dotted e)', then: 'Lithuanian' },
    { look: 'ā ē ī ū (macrons) or ķ ļ ņ ģ (cedilla-like marks under letters)', then: 'Latvian' },
    { look: 'õ', then: 'Estonian' },
    { look: 'ä ö and lots of double letters (aa, kk, tt), no õ', then: 'Finnish (Estonian also has ä ö ü, so check for õ and ü)' },
    { look: 'ü together with ä ö', then: 'Estonian (Finnish has no ü in native words)' },
    { look: 'š ž with double vowels', then: 'Estonian (in loanwords)' },
  ],
  traps: [
    'Both Lithuanian and Latvian use č š ž; look at the vowels to tell them apart.',
    'Finnish and Estonian both have ä and ö. The deciders are õ and ü (Estonian only).',
    'Swedish also appears in Finland on bilingual signs: see the Nordic group.',
    'Latvia and Estonia have large Russian-speaking minorities, but Russian is not on official signs.',
  ],
}

export const lt: Language = {
  id: 'lt',
  name: 'Lithuanian',
  nativeName: 'lietuvių',
  script: 'latin',
  family: ['Indo-European', 'Balto-Slavic', 'Baltic', 'East Baltic'],
  groups: ['baltic-finnic'],
  confusedWith: ['lv', 'pl'],
  giveaways: [
    { sign: 'ė', tip: 'e with a dot above: unique to Lithuanian (gatvė, "street").' },
    { sign: 'į ų', tip: 'i and u with a tail (ogonek). Unique to Lithuanian.' },
    { sign: 'ą ę', tip: 'Also in Polish, but Lithuanian has no ł, ż or ś.' },
    { sign: '-as, -is, -us, -ai endings', tip: 'Nouns and names often end in -as/-is/-us (Vilnius, Kaunas).' },
    { sign: 'gatvė / g.', tip: 'Street; street signs often abbreviate to "g.".' },
  ],
  regions: [
    { country: 'LT', status: 'official', signage: 'common' },
    { country: 'PL', area: 'Sejny and Puńsk', status: 'minority', signage: 'sometimes', note: 'Bilingual Polish–Lithuanian signs in the Puńsk area.' },
  ],
  signWords: {
    street: 'gatvė', road: 'kelias', square: 'aikštė', exit: 'išvažiavimas', centre: 'centras', church: 'bažnyčia',
    school: 'mokykla', pharmacy: 'vaistinė', bakery: 'kepykla', police: 'policija', hospital: 'ligoninė',
    station: 'stotis', bridge: 'tiltas', forSale: 'parduodama',
  },
  history: [
    'Lithuanian is often called the most conservative living Indo-European language: it keeps many sounds and grammatical forms very close to reconstructed Proto-Indo-European, which is why linguists study it closely.',
    'Lithuania was a huge state in the Middle Ages (the Grand Duchy of Lithuania) and later joined with Poland. From 1864 to 1904 the Russian Empire banned printing Lithuanian in Latin letters. Book smugglers (knygnešiai) carried Lithuanian books printed in East Prussia across the border, and the ban became a symbol of national resistance.',
  ],
  place: [
    { title: 'Why is Vilnius home to so many Polish speakers?', text: 'Between the wars (1920–39) the Vilnius region was part of Poland, and Polish was the main language of the city. It was returned to Lithuania in 1939. A large Polish-speaking community remains in the countryside around the city.' },
  ],
  connections: ['Closest relative: Latvian (not easily mutually intelligible). Distantly related to the Slavic languages.'],
  facts: ['The word for "god", dievas, is close to Sanskrit deva and Latin deus, a classic example of how conservative Lithuanian is.'],
  sources: ['https://en.wikipedia.org/wiki/Lithuanian_language', 'https://en.wikipedia.org/wiki/Lithuanian_press_ban'],
}

export const lv: Language = {
  id: 'lv',
  name: 'Latvian',
  nativeName: 'latviešu',
  script: 'latin',
  family: ['Indo-European', 'Balto-Slavic', 'Baltic', 'East Baltic'],
  groups: ['baltic-finnic'],
  confusedWith: ['lt', 'et'],
  giveaways: [
    { sign: 'ā ē ī ū', tip: 'Long vowels marked with a macron: unique among European national languages.' },
    { sign: 'ķ ļ ņ ģ', tip: 'Soft consonants with a comma-like mark below (ģ has it on top). Unique to Latvian.' },
    { sign: 'iela', tip: 'Street. Very common on Latvian signs ("Brīvības iela").' },
    { sign: '-s endings', tip: 'Place names and nouns often end in -s or -is (Rīga is an exception).' },
  ],
  regions: [{ country: 'LV', status: 'official', signage: 'common' }],
  signWords: {
    street: 'iela', road: 'ceļš', square: 'laukums', exit: 'izeja', centre: 'centrs', church: 'baznīca',
    school: 'skola', pharmacy: 'aptieka', bakery: 'maiznīca', police: 'policija', hospital: 'slimnīca',
    station: 'stacija', bridge: 'tilts', forSale: 'pārdod',
  },
  orthography: { year: 1908, note: 'The modern spelling (replacing German-style spelling) was drafted in 1908 and adopted in the 1920s.' },
  history: [
    'Latvian was first written down by German clergy, with German-style spelling (such as "sch" for š), since Baltic German nobles ruled the region from the 13th century until the early 20th.',
    'In 1908 a commission designed a new phonetic spelling with macrons and háčeks; it became official in independent Latvia in the 1920s. Under Soviet rule (1940–91) Russian dominated public life, and since independence Latvian has been the only official language.',
  ],
  place: [
    { title: 'Why is there a large Russian-speaking population?', text: 'Heavy Soviet-era migration brought Russian-speaking workers to Latvia, especially to Riga and Daugavpils. Today over a third of residents speak Russian at home, but official signs are in Latvian only.' },
    { title: 'Latgale', text: 'The eastern region of Latgale was under Polish–Lithuanian and then Russian rule rather than German, and developed its own written variety, Latgalian, which appears on some local signs.' },
  ],
  connections: ['Closest relative: Lithuanian. Latvian has many loanwords from German and Livonian (a Finnic language).'],
  facts: ['Latvian has fixed stress on the first syllable, likely due to contact with Finnic languages.'],
  sources: ['https://en.wikipedia.org/wiki/Latvian_language', 'https://en.wikipedia.org/wiki/Latvian_orthography'],
}

export const et: Language = {
  id: 'et',
  name: 'Estonian',
  nativeName: 'eesti',
  script: 'latin',
  family: ['Uralic', 'Finnic'],
  groups: ['baltic-finnic'],
  confusedWith: ['fi', 'lv', 'hu'],
  giveaways: [
    { sign: 'õ', tip: 'o with a tilde: in this group, only Estonian. (Portuguese has õ too, but looks completely different.)' },
    { sign: 'ü with ä ö', tip: 'Estonian uses ü; Finnish does not.' },
    { sign: 'tänav / tee', tip: 'Street / road (Pärnu mnt = Pärnu maantee, "highway").' },
    { sign: 'šž in loans', tip: 'Estonian writes š and ž in foreign words (šokolaad); Finnish rarely does.' },
  ],
  regions: [{ country: 'EE', status: 'official', signage: 'common' }],
  signWords: {
    street: 'tänav', road: 'tee', square: 'väljak', exit: 'väljapääs', centre: 'kesklinn', church: 'kirik',
    school: 'kool', pharmacy: 'apteek', bakery: 'pagariäri', police: 'politsei', hospital: 'haigla',
    station: 'jaam', bridge: 'sild', forSale: 'müüa',
  },
  history: [
    'Like Latvian, Estonian was first written by German clergy, and the first books appeared in the 16th century. The spelling was reformed in the 19th century along Finnish lines, when a national awakening led by figures such as Friedrich Reinhold Kreutzwald (author of the epic Kalevipoeg) raised Estonian\'s status.',
    'Estonia was independent from 1918 to 1940, then part of the USSR until 1991. Since independence Estonian is the only official language.',
  ],
  place: [
    { title: 'Why is Ida-Virumaa Russian-speaking?', text: 'The north-eastern county of Ida-Virumaa, around Narva, was heavily resettled with Russian-speaking workers for its oil shale industry in Soviet times. Narva is over 90% Russian-speaking, though official signs are Estonian.' },
    { title: 'Swedish place names on the coast', text: 'Coastal Swedes lived on Estonia\'s islands and west coast for centuries, so places such as Haapsalu still have Swedish names (Hapsal).' },
  ],
  connections: ['Closest relative: Finnish (partly intelligible, especially in writing). Distantly related to Hungarian.'],
  facts: ['Estonian has no grammatical gender and no future tense.', 'Estonian has 14 grammatical cases.'],
  sources: ['https://en.wikipedia.org/wiki/Estonian_language'],
}

export const fi: Language = {
  id: 'fi',
  name: 'Finnish',
  nativeName: 'suomi',
  script: 'latin',
  family: ['Uralic', 'Finnic'],
  groups: ['baltic-finnic', 'nordic'],
  confusedWith: ['et', 'sv', 'hu'],
  giveaways: [
    { sign: 'ä ö, no å', tip: 'Finnish words use ä and ö constantly (Hämeenlinna, Jyväskylä). å only appears in Swedish names.' },
    { sign: 'double letters', tip: 'Long vowels and consonants doubled: kk, tt, pp, aa, ii (Helsinki, Tampere, Oulu, Kokkola).' },
    { sign: 'no b, c, f, q, w, x, z', tip: 'In native words; they only appear in loanwords and names.' },
    { sign: '-katu / -tie', tip: 'Street names end in -katu (street) or -tie (road), written as one word: Mannerheimintie.' },
  ],
  regions: [
    { country: 'FI', status: 'official', signage: 'common', note: 'Finnish first in Finnish-majority municipalities; Swedish first in Swedish-majority ones.' },
    { country: 'SE', area: 'Tornedalen (Meänkieli) and Norrbotten', status: 'minority', signage: 'sometimes' },
    { country: 'NO', area: 'Northern Norway (Kven)', status: 'minority', signage: 'rare' },
  ],
  signWords: {
    street: 'katu', road: 'tie', square: 'tori', exit: 'liittymä', centre: 'keskusta', church: 'kirkko',
    school: 'koulu', pharmacy: 'apteekki', bakery: 'leipomo', police: 'poliisi', hospital: 'sairaala',
    station: 'asema', bridge: 'silta', forSale: 'myytävänä',
  },
  history: [
    'Finland was part of Sweden for about 600 years, and Swedish was the language of administration and education. Mikael Agricola, a bishop in the Reformation, wrote the first Finnish books around 1543, including an ABC book, and is called the father of written Finnish.',
    'In 1809 Finland passed to Russia as an autonomous Grand Duchy. The 19th-century national movement, inspired by Elias Lönnrot\'s epic Kalevala (1835), raised Finnish to an official language in 1863. Finland became independent in 1917.',
  ],
  place: [
    { title: 'Why are signs in Finland bilingual Finnish–Swedish?', text: 'The Swedish-speaking Finns (about 5% of the population) have lived along the west and south coasts since Swedish rule. Municipalities where the minority language reaches 8% (or 3,000 people) are officially bilingual, and show both names: Helsinki/Helsingfors, Turku/Åbo.' },
  ],
  connections: ['Closest relatives: Karelian and Estonian. Distantly related to Hungarian and the Sámi languages.'],
  facts: ['Finnish has 15 grammatical cases.', 'The word "sauna" is one of the few Finnish words used worldwide.'],
  sources: ['https://en.wikipedia.org/wiki/Finnish_language', 'https://en.wikipedia.org/wiki/Bilingual_municipalities_of_Finland'],
}

export const languages = [lt, lv, et, fi]
