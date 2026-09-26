import type { Group, Language } from '../types'

export const westGermanic: Group = {
  id: 'west-germanic',
  name: 'West Germanic',
  members: ['de', 'nl', 'af', 'lb'],
  intro: [
    'German, Dutch, Luxembourgish and Afrikaans are close relatives (English is a more distant cousin in the same branch). German went through the "High German consonant shift" around the 6th century (p → pf/f, t → z/s, k → ch), which Dutch did not: German "Wasser", Dutch "water"; German "Pfeffer", Dutch "peper".',
    'Afrikaans developed from 17th-century Dutch in South Africa. Luxembourgish is a German dialect that became a national language.',
  ],
  checklist: [
    { look: 'ß', then: 'German (not used in Switzerland)' },
    { look: 'ij, lots of double vowels (aa, ee, oo, uu), "straat", "weg"', then: 'Dutch' },
    { look: 'ê ë ô, "straat", "pad", and the word "die" everywhere', then: 'Afrikaans' },
    { look: 'ä ö ü with "straße/strasse", sch, tz, pf', then: 'German' },
    { look: 'ë, "Strooss", "Gaass", double vowels with German-looking words', then: 'Luxembourgish' },
  ],
  traps: [
    'Swiss German signs write "ss" instead of ß: "Strasse". No ß does not mean not German.',
    'Luxembourg\'s official and road signs are mostly French, with Luxembourgish street names underneath.',
    'Afrikaans ë looks like Dutch and Luxembourgish; the country (South Africa or Namibia) is the easy tell.',
  ],
}

export const de: Language = {
  id: 'de',
  name: 'German',
  nativeName: 'Deutsch',
  script: 'latin',
  family: ['Indo-European', 'Germanic', 'West Germanic', 'High German'],
  groups: ['west-germanic'],
  confusedWith: ['nl', 'lb', 'da'],
  giveaways: [
    { sign: 'ß', tip: 'Eszett (sharp s): used only in German (Straße). Not used in Switzerland or Liechtenstein.' },
    { sign: 'ä ö ü', tip: 'Umlauts: shared with Swedish, Finnish, Estonian, Turkish and Hungarian, but with sch/tz/pf it is German.' },
    { sign: 'sch, tz, pf, ck', tip: 'Very German letter combinations: Schule, Platz, Pfarrkirche.' },
    { sign: 'Straße / Weg / Platz / Gasse', tip: 'Street words are joined to the name: Hauptstraße, Bahnhofplatz.' },
    { sign: 'Capitalised nouns', tip: 'German capitalises every noun, even mid-sentence.' },
  ],
  regions: [
    { country: 'DE', status: 'official', signage: 'common' },
    { country: 'AT', status: 'official', signage: 'common' },
    { country: 'CH', area: 'German-speaking Switzerland (north and centre)', status: 'official', signage: 'common', note: 'Written with ss, not ß.' },
    { country: 'LI', status: 'official', signage: 'common' },
    { country: 'LU', status: 'co-official', signage: 'sometimes' },
    { country: 'BE', area: 'East Belgium (Eupen, Sankt Vith)', status: 'official', signage: 'common' },
    { country: 'IT', area: 'South Tyrol', status: 'co-official', signage: 'common', note: 'Bilingual German–Italian signs.' },
    { country: 'FR', area: 'Alsace and Moselle (historical)', status: 'minority', signage: 'rare', note: 'Some bilingual street signs in Alsatian/German.' },
    { country: 'DK', area: 'Southern Jutland', status: 'minority', signage: 'rare' },
    { country: 'NA', status: 'minority', signage: 'rare', note: 'Legacy of German South West Africa: German street names in Windhoek and Swakopmund.' },
  ],
  signWords: {
    street: 'Straße', road: 'Landstraße', square: 'Platz', exit: 'Ausfahrt', centre: 'Zentrum', church: 'Kirche',
    school: 'Schule', pharmacy: 'Apotheke', bakery: 'Bäckerei', police: 'Polizei', hospital: 'Krankenhaus',
    station: 'Bahnhof', bridge: 'Brücke', forSale: 'zu verkaufen',
  },
  orthography: { year: 1996, note: 'The spelling reform of 1996 changed many words (daß → dass). Swiss German dropped ß in the 1930s.' },
  history: [
    'German has no single origin point: it grew out of the dialects of the many states of the Holy Roman Empire. Martin Luther\'s Bible translation (1522–34), written in a form of East Central German, and the spread of printing did a great deal to create a common written standard.',
    'Germany only unified in 1871, and dialects remain very strong. The written standard (Hochdeutsch) is shared by Germany, Austria and Switzerland, with some national differences in vocabulary and spelling.',
  ],
  place: [
    { title: 'Why is German spoken in northern Italy?', text: 'South Tyrol was part of the Austrian County of Tyrol for centuries. Italy annexed it in 1919 after World War I. Despite forced Italianisation under Mussolini, the German-speaking majority stayed, and the region now has autonomy and bilingual signs.' },
    { title: 'Why is there a German-speaking region in Belgium?', text: 'Eupen and Sankt Vith belonged to Prussia until the Treaty of Versailles (1919) gave them to Belgium as war reparations. German is one of Belgium\'s three official languages there.' },
    { title: 'Why are Alsace and Moselle German-flavoured?', text: 'Alsace changed hands between France and Germany four times between 1871 and 1945. Alsatian, a German dialect, is still spoken, and place names such as Strasbourg, Mulhouse and Haguenau are German in origin.' },
  ],
  connections: ['Closest relatives: Luxembourgish, Yiddish, then Dutch and Afrikaans. English is related through West Germanic.'],
  facts: ['German has the longest words on signs thanks to compounds: "Geschwindigkeitsbegrenzung" (speed limit).'],
  sources: ['https://en.wikipedia.org/wiki/German_language', 'https://en.wikipedia.org/wiki/South_Tyrol'],
}

export const nl: Language = {
  id: 'nl',
  name: 'Dutch',
  nativeName: 'Nederlands',
  script: 'latin',
  family: ['Indo-European', 'Germanic', 'West Germanic', 'Low Franconian'],
  groups: ['west-germanic'],
  confusedWith: ['af', 'de', 'lb'],
  giveaways: [
    { sign: 'ij', tip: 'A Dutch digraph treated as one letter: IJsselmeer, Rijksweg, Nijmegen. Capitalised together (IJ).' },
    { sign: 'aa ee oo uu', tip: 'Double vowels: straat, Zeeland, Groningen.' },
    { sign: 'straat / weg / plein / laan', tip: 'Street / road / square / lane, joined to the name: Kalverstraat.' },
    { sign: 'oe, ui, ou', tip: 'Common Dutch vowel spellings (Hoek van Holland, Tuin).' },
    { sign: 'no umlauts or ß', tip: 'Dutch rarely uses diacritics (only ë, é in a few words).' },
  ],
  regions: [
    { country: 'NL', status: 'official', signage: 'common' },
    { country: 'BE', area: 'Flanders and Brussels', status: 'official', signage: 'common' },
    { country: 'SR', status: 'official', signage: 'common' },
    { country: 'CW', status: 'official', signage: 'sometimes', note: 'Alongside Papiamentu and English.' },
    { country: 'AW', status: 'official', signage: 'sometimes' },
  ],
  signWords: {
    street: 'straat', road: 'weg', square: 'plein', exit: 'afrit', centre: 'centrum', church: 'kerk',
    school: 'school', pharmacy: 'apotheek', bakery: 'bakkerij', police: 'politie', hospital: 'ziekenhuis',
    station: 'station', bridge: 'brug', forSale: 'te koop',
  },
  orthography: { year: 1995, note: 'Dutch spelling is set by the Dutch Language Union (Netherlands, Flanders, Suriname); the current system dates from 1995 with a 2005 update.' },
  history: [
    'Dutch developed from the Low Franconian dialects of the Low Countries. The Dutch Republic, independent from Spain from 1581 (recognised in 1648), became the richest trading power in 17th-century Europe, and its States Bible (1637) helped fix the standard language.',
    'Dutch traders and the Dutch East and West India Companies took the language to Indonesia, South Africa, Suriname and the Caribbean. It survives officially in Suriname and the Dutch Caribbean, and in South Africa it evolved into Afrikaans.',
  ],
  place: [
    { title: 'Why is Dutch spoken in Belgium?', text: 'Flanders was part of the same Low Countries as the Netherlands, but stayed under Spanish and Austrian rule when the Dutch Republic broke away. Belgium became independent in 1830 with French as its elite language; Flemish campaigns in the 19th–20th centuries won equal status for Dutch.' },
  ],
  connections: ['Closest relatives: Afrikaans (largely intelligible in writing), Low German, then German and Frisian.', 'English words from Dutch: yacht, cookie, boss, skipper, landscape.'],
  facts: ['New York was founded as New Amsterdam; Brooklyn (Breukelen) and Harlem (Haarlem) are Dutch names.'],
  sources: ['https://en.wikipedia.org/wiki/Dutch_language'],
}

export const af: Language = {
  id: 'af',
  name: 'Afrikaans',
  nativeName: 'Afrikaans',
  script: 'latin',
  family: ['Indo-European', 'Germanic', 'West Germanic', 'Low Franconian'],
  groups: ['west-germanic'],
  confusedWith: ['nl'],
  giveaways: [
    { sign: 'ê ë ô û', tip: 'Afrikaans uses circumflexes (sê, wêreld, môre) which Dutch does not.' },
    { sign: '\'n', tip: 'The indefinite article is written \'n (a/an).' },
    { sign: 'die', tip: '"The" in Afrikaans is always "die" (Dutch: de/het).' },
    { sign: 'straat / pad / weg', tip: 'Street / road / way. "Pad" for road is distinctly Afrikaans.' },
    { sign: 'no ij', tip: 'Afrikaans replaced Dutch ij with y: "wyn" (wine), "yster" (iron).' },
  ],
  regions: [
    { country: 'ZA', area: 'Western Cape, Northern Cape (and nationwide)', status: 'official', signage: 'sometimes', note: 'One of 12 official languages; road signs are mostly English, some bilingual.' },
    { country: 'NA', status: 'minority', signage: 'sometimes', note: 'The main lingua franca of Namibia.' },
  ],
  signWords: {
    street: 'straat', road: 'pad', square: 'plein', exit: 'uitgang', centre: 'middestad', church: 'kerk',
    school: 'skool', pharmacy: 'apteek', bakery: 'bakkery', police: 'polisie', hospital: 'hospitaal',
    station: 'stasie', bridge: 'brug', forSale: 'te koop',
  },
  orthography: { year: 1925, note: 'Afrikaans replaced Dutch as an official language of South Africa in 1925.' },
  history: [
    'The Dutch East India Company set up a supply station at the Cape of Good Hope in 1652. The Dutch spoken by settlers, enslaved people from Asia and Africa, and the Khoekhoe changed quickly, and by the 18th–19th centuries it had become a distinct language, Afrikaans ("African").',
    'Afrikaans was recognised as an official language in 1925. It became associated with apartheid, especially after the government tried to impose it in Black schools, which led to the Soweto uprising of 1976. Today it is spoken by many communities, with the largest group of native speakers being Coloured South Africans.',
  ],
  place: [
    { title: 'Why is Afrikaans close to Dutch?', text: 'It descends directly from the Dutch of 17th-century settlers at the Cape. Isolation from the Netherlands and contact with other languages simplified its grammar, but most vocabulary is still Dutch.' },
  ],
  connections: ['Closest relative: Dutch. Afrikaans speakers can usually read Dutch; the reverse is easier still.'],
  facts: ['There is a monument to the Afrikaans language in Paarl, Western Cape.'],
  sources: ['https://en.wikipedia.org/wiki/Afrikaans'],
}

export const lb: Language = {
  id: 'lb',
  name: 'Luxembourgish',
  nativeName: 'Lëtzebuergesch',
  script: 'latin',
  family: ['Indo-European', 'Germanic', 'West Germanic', 'High German', 'Moselle Franconian'],
  groups: ['west-germanic'],
  confusedWith: ['de', 'nl'],
  giveaways: [
    { sign: 'ë', tip: 'Very common in Luxembourgish: Lëtzebuerg, Ëlwen (the Luxembourgish name of Troisvierges).' },
    { sign: 'double vowels in German-looking words', tip: 'Strooss (street), Gaass (lane), Wee (way): like German but with Dutch-style double vowels.' },
    { sign: 'French + Luxembourgish street signs', tip: 'Street signs in Luxembourg often show the French name with the Luxembourgish one below.' },
  ],
  regions: [{ country: 'LU', status: 'official', signage: 'sometimes', note: 'National language; French dominates official signs, Luxembourgish appears on street and town signs.' }],
  signWords: {
    street: 'Strooss', road: 'Wee', square: 'Plaz', centre: 'Zentrum', church: 'Kierch', school: 'Schoul',
    hospital: 'Spidol', bridge: 'Bréck', forSale: 'ze verkafen',
  },
  orthography: { year: 1984, note: 'A 1984 law made Luxembourgish the national language; the current spelling dates from 1999 (revised 2019).' },
  history: [
    'Luxembourgish is a Moselle Franconian dialect of German that became a symbol of national identity, especially after the German occupation in World War II. In a 1941 census, when the occupiers asked residents to declare German as their language, most answered "Luxembourgish".',
    'A 1984 law made it the national language. Luxembourg has three administrative languages: Luxembourgish, French and German. French is used for most laws and road signs.',
  ],
  place: [
    { title: 'Why is Luxembourg trilingual?', text: 'Luxembourg lies on the border between the French and German-speaking worlds and was ruled at times by Burgundy, Spain, Austria, France and the Netherlands. It became fully independent in 1867. Schools teach in all three languages.' },
  ],
  connections: ['Closest relative: German (the Moselle Franconian dialects of Germany\'s Trier area).'],
  facts: ['Luxembourg\'s national motto is Luxembourgish: "Mir wëlle bleiwe wat mir sinn" (We want to remain what we are).'],
  sources: ['https://en.wikipedia.org/wiki/Luxembourgish'],
}

export const languages = [de, nl, af, lb]
