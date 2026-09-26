import type { Group, Language } from '../types'

export const otherRomance: Group = {
  id: 'other-romance',
  name: 'Other Romance',
  members: ['fr', 'it', 'ro', 'ca'],
  intro: [
    'French, Italian and Romanian all descend from the spoken Latin of the Roman Empire. Italian stayed closest to Latin; French changed the most in pronunciation (hence its silent letters); Romanian developed in isolation in the east, surrounded by Slavic languages, and borrowed many Slavic words.',
    'Catalan is also included here because it is easily confused with French and Italian.',
  ],
  checklist: [
    { look: 'ș ț (comma below) or ă â î', then: 'Romanian' },
    { look: 'ç with è ê ë ô œ, apostrophes (l\', d\')', then: 'French' },
    { look: 'l·l, or grave accents with ny/ç', then: 'Catalan' },
    { look: 'Only grave accents (à è ì ò ù) at word ends, double consonants (zz, cc, tt), words ending in vowels', then: 'Italian' },
    { look: '"rue", "route", "place"', then: 'French' },
    { look: '"via", "strada", "piazza"', then: 'Italian' },
    { look: '"strada", "piața", "str."', then: 'Romanian' },
  ],
  traps: [
    'Italian and Romanian both use "strada". Romanian signs abbreviate it to "Str." and use ă â î ș ț.',
    'French is also spoken in Belgium, Switzerland, Luxembourg, Monaco and Canada. See the regions list.',
    'Romanian is also the language of Moldova (no GeoGuessr coverage).',
  ],
}

export const fr: Language = {
  id: 'fr',
  name: 'French',
  nativeName: 'français',
  script: 'latin',
  family: ['Indo-European', 'Italic', 'Romance', 'Western Romance', 'Gallo-Romance'],
  groups: ['other-romance'],
  confusedWith: ['ca', 'it'],
  giveaways: [
    { sign: 'ç, œ', tip: 'ç is also Catalan/Portuguese, but œ (cœur) is only French.' },
    { sign: 'è ê ë à â î ô û ù', tip: 'French uses lots of circumflexes and graves; â ê î ô û are a strong clue.' },
    { sign: 'l\' d\' qu\'', tip: 'Apostrophes after one letter: l\'église, rue d\'Italie.' },
    { sign: 'rue / route / place', tip: 'Street / road / square.' },
    { sign: '-eau, -aux, -ville', tip: 'Common endings: Château, Bordeaux, Belleville.' },
  ],
  regions: [
    { country: 'FR', status: 'official', signage: 'common' },
    { country: 'BE', area: 'Wallonia and Brussels', status: 'official', signage: 'common' },
    { country: 'CH', area: 'Romandy (Geneva, Vaud, Neuchâtel, Jura, parts of Fribourg and Valais)', status: 'official', signage: 'common' },
    { country: 'LU', status: 'co-official', signage: 'common', note: 'Most official and road signs are in French.' },
    { country: 'MC', status: 'official', signage: 'common' },
    { country: 'CA', area: 'Quebec', status: 'official', signage: 'common', note: 'Stop signs say "ARRÊT".' },
    { country: 'CA', area: 'New Brunswick', status: 'co-official', signage: 'common' },
    { country: 'IT', area: 'Aosta Valley', status: 'co-official', signage: 'common' },
    { country: 'SN', status: 'official', signage: 'common' },
  ],
  signWords: {
    street: 'rue', road: 'route', square: 'place', exit: 'sortie', centre: 'centre-ville', church: 'église',
    school: 'école', pharmacy: 'pharmacie', bakery: 'boulangerie', police: 'police', hospital: 'hôpital',
    station: 'gare', bridge: 'pont', forSale: 'à vendre',
  },
  orthography: { year: 1740, note: 'The Académie française\'s 1740 dictionary introduced many of the accents used today, such as the circumflex replacing a lost s (hôpital, from hospital).' },
  history: [
    'French developed from the Latin spoken in Roman Gaul, with strong influence from the Franks, a Germanic people who gave the country its name. The Oaths of Strasbourg (842) are often called the first French text.',
    'The Ordinance of Villers-Cotterêts (1539) made French the language of law in place of Latin, and the Académie française (1635) set out to standardise it. After the Revolution, the French state promoted French at the expense of regional languages like Breton, Occitan and Alsatian.',
    'Colonial expansion spread French to Canada, the Caribbean, West and Central Africa, North Africa and the Pacific. Today more French speakers live in Africa than in Europe.',
  ],
  place: [
    { title: 'Why is French spoken in Quebec?', text: 'France founded New France along the St Lawrence River in the 17th century (Quebec City, 1608). After Britain conquered it in 1763, the French-speaking population stayed, protected by the Quebec Act (1774). Quebec\'s language laws since 1977 make French the only language on most signs.' },
    { title: 'Why is Belgium split between French and Dutch?', text: 'The language border across Belgium roughly follows the old line between Romance-speaking and Germanic-speaking areas after the fall of Rome. Flanders speaks Dutch, Wallonia speaks French, and Brussels is officially bilingual.' },
    { title: 'Why French in Italy\'s Aosta Valley?', text: 'The Aosta Valley belonged to the House of Savoy, which ruled lands on both sides of the Alps, and French was its language of administration until Italian unification. French is still co-official there.' },
  ],
  connections: ['Closest relatives: the langues d\'oïl (Walloon, Picard, Norman), then Occitan, Catalan and Italian.', 'About a third of English vocabulary comes from French, mostly via the Norman Conquest of 1066.'],
  facts: ['French hôpital, forêt and île each lost an s that English kept (hospital, forest, isle); the circumflex marks where it was.'],
  sources: ['https://en.wikipedia.org/wiki/French_language', 'https://en.wikipedia.org/wiki/Charter_of_the_French_Language'],
}

export const it: Language = {
  id: 'it',
  name: 'Italian',
  nativeName: 'italiano',
  script: 'latin',
  family: ['Indo-European', 'Italic', 'Romance', 'Italo-Dalmatian'],
  groups: ['other-romance'],
  confusedWith: ['es', 'ro', 'ca'],
  giveaways: [
    { sign: 'grave accents on final vowels', tip: 'città, perché, più, così: Italian accents are almost only on the last letter.' },
    { sign: 'zz, cc, gg, tt', tip: 'Lots of double consonants: piazza, Firenze, Bellagio.' },
    { sign: 'words end in vowels', tip: 'Nearly all Italian words end in a, e, i or o.' },
    { sign: 'via / piazza / strada', tip: 'Street names start with "Via" (Via Roma).' },
    { sign: 'gli, gn, sc', tip: 'Common Italian spellings: famiglia, Bologna, scuola.' },
  ],
  regions: [
    { country: 'IT', status: 'official', signage: 'common' },
    { country: 'CH', area: 'Ticino and southern Graubünden', status: 'official', signage: 'common' },
    { country: 'SM', status: 'official', signage: 'common' },
    { country: 'VA', status: 'official', signage: 'common' },
    { country: 'SI', area: 'Slovenian Istria (Koper, Piran)', status: 'co-official', signage: 'common' },
    { country: 'HR', area: 'Istria', status: 'co-official', signage: 'sometimes' },
    { country: 'MC', status: 'minority', signage: 'rare' },
  ],
  signWords: {
    street: 'via', road: 'strada', square: 'piazza', exit: 'uscita', centre: 'centro', church: 'chiesa',
    school: 'scuola', pharmacy: 'farmacia', bakery: 'panificio', police: 'polizia', hospital: 'ospedale',
    station: 'stazione', bridge: 'ponte', forSale: 'vendesi',
  },
  history: [
    'Standard Italian is based on the Tuscan dialect of Florence, made famous by Dante (Divine Comedy, early 14th century), Petrarch and Boccaccio. For centuries, Italy was divided into many states, each with its own dialect, and Tuscan was mainly a literary language.',
    'When Italy was unified in 1861, only a small percentage of people spoke standard Italian. It spread through schools, military service, and above all radio and television in the 20th century. Regional languages such as Neapolitan, Sicilian and Venetian are still widely spoken.',
  ],
  place: [
    { title: 'Why is Italian spoken in Switzerland?', text: 'The Swiss Confederation conquered the Ticino valleys from the Duchy of Milan in the 15th–16th centuries. The population kept speaking Lombard dialects and Italian, and Italian is one of Switzerland\'s national languages.' },
    { title: 'Why is there German on signs in northern Italy?', text: 'South Tyrol was part of Austria until 1919, when it was given to Italy after World War I. The majority still speak German, and signs there are bilingual German–Italian (Bozen/Bolzano).' },
  ],
  connections: ['Closest relatives: Corsican, Sicilian, Neapolitan. Then Spanish, Portuguese, French and Romanian.'],
  facts: ['Italian is the official language of four countries: Italy, Switzerland, San Marino and Vatican City.'],
  sources: ['https://en.wikipedia.org/wiki/Italian_language'],
}

export const ro: Language = {
  id: 'ro',
  name: 'Romanian',
  nativeName: 'română',
  script: 'latin',
  family: ['Indo-European', 'Italic', 'Romance', 'Eastern Romance'],
  groups: ['other-romance'],
  confusedWith: ['it', 'hu'],
  giveaways: [
    { sign: 'ș ț', tip: 'Comma below s and t: unique to Romanian (often shown as ş ţ with a cedilla on older signs).' },
    { sign: 'ă', tip: 'a with a breve: very common (stradă, piață).' },
    { sign: 'â î', tip: 'Both mean the same sound (ɨ): România, Târgu Mureș, începe.' },
    { sign: 'Str. / Calea / B-dul', tip: 'Street / avenue / boulevard.' },
  ],
  regions: [
    { country: 'RO', status: 'official', signage: 'common' },
    { country: 'MD', status: 'official', signage: 'common', note: 'Also called Moldovan.' },
    { country: 'RS', area: 'Vojvodina (Banat)', status: 'co-official', signage: 'sometimes' },
    { country: 'UA', area: 'Chernivtsi (Northern Bukovina)', status: 'minority', signage: 'rare' },
  ],
  signWords: {
    street: 'stradă', road: 'drum', square: 'piață', exit: 'ieșire', centre: 'centru', church: 'biserică',
    school: 'școală', pharmacy: 'farmacie', bakery: 'brutărie', police: 'poliție', hospital: 'spital',
    station: 'gară', bridge: 'pod', forSale: 'de vânzare',
  },
  orthography: { year: 1860, note: 'Romanian officially switched from Cyrillic to the Latin alphabet in 1860–62.' },
  history: [
    'Romanian comes from the Latin of the Roman province of Dacia (conquered 106 AD) and the surrounding Balkans. Cut off from the rest of the Romance world, it absorbed many Slavic, Hungarian, Greek and Turkish words.',
    'For centuries Romanian was written in Cyrillic, because the Orthodox Church used Church Slavonic. In the 19th century, with a growing sense of Latin identity, Romania switched to the Latin alphabet (1860–62) and borrowed many French and Italian words.',
  ],
  place: [
    { title: 'Why is a Romance language spoken in Eastern Europe?', text: 'Rome held Dacia (modern Romania) from 106 to 271 AD. Latin-speaking populations survived north and south of the Danube through the migrations that followed, and their language became Romanian, an island of Romance surrounded by Slavic and Hungarian.' },
    { title: 'Why is Moldova Romanian-speaking?', text: 'Moldova was the eastern half of the historical principality of Moldavia. Russia annexed it (as Bessarabia) in 1812. Under Soviet rule the language was called Moldovan and written in Cyrillic; since 1989 it has used the Latin alphabet again.' },
  ],
  connections: ['Closest relatives: Aromanian and other Balkan Romance languages. Then Italian.'],
  facts: ['Romanian is the only major Romance language that kept a Latin-style case system (with a definite article attached to the end of nouns: om → omul, "the man").'],
  sources: ['https://en.wikipedia.org/wiki/Romanian_language', 'https://en.wikipedia.org/wiki/Romanian_alphabet'],
}

export const languages = [fr, it, ro]
