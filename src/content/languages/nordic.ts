import type { Group, Language } from '../types'

export const nordic: Group = {
  id: 'nordic',
  name: 'Nordic',
  members: ['da', 'no', 'sv', 'is', 'fo', 'fi', 'se'],
  intro: [
    'Danish, Norwegian and Swedish are North Germanic languages that developed from Old Norse and are still largely mutually intelligible, especially in writing. Icelandic and Faroese come from the western branch of Old Norse, spoken by settlers from Norway, and have changed much less.',
    'The key letters: Danish and Norwegian use æ ø å; Swedish uses ä ö å; Icelandic has þ ð æ ö and accented vowels; Faroese has ð ø and accented vowels. Finnish (Uralic) and Sámi (Uralic) also appear on signs in the region.',
  ],
  checklist: [
    { look: 'þ', then: 'Icelandic' },
    { look: 'ð with accented vowels (á í ó ú ý)', then: 'Icelandic or Faroese: þ or é → Icelandic; ø → Faroese' },
    { look: 'ä ö å', then: 'Swedish' },
    { look: 'ä ö without å, lots of double letters', then: 'Finnish' },
    { look: 'æ ø å', then: 'Danish or Norwegian (see below)' },
    { look: 'vej, gade, -by, "kørsel"', then: 'Danish' },
    { look: 'vei / veg, gate, "kjør", "sykehus"', then: 'Norwegian' },
    { look: 'č đ ŋ š ŧ ž on Nordic-looking signs', then: 'Northern Sámi' },
  ],
  traps: [
    'Danish and Norwegian Bokmål are almost identical in writing. Road = vej (Danish) vs vei/veg (Norwegian) is the quickest tell; also "gade" vs "gate".',
    'Swedish place names in Finland (Helsingfors, Åbo) are Swedish, not a sign that you are in Sweden. Check for a Finnish name next to it.',
    'German uses ä ö too, but not å.',
  ],
}

export const da: Language = {
  id: 'da',
  name: 'Danish',
  nativeName: 'dansk',
  script: 'latin',
  family: ['Indo-European', 'Germanic', 'North Germanic', 'East Scandinavian'],
  groups: ['nordic'],
  confusedWith: ['no', 'sv'],
  giveaways: [
    { sign: 'æ ø å', tip: 'Shared with Norwegian. Swedish uses ä ö instead.' },
    { sign: 'vej', tip: 'Road in Danish (Norwegian: vei/veg). Very common in street names.' },
    { sign: 'gade', tip: 'Street (Norwegian: gate, Swedish: gata).' },
    { sign: 'soft d/g spellings', tip: 'Danish keeps b d g where Norwegian has p t k: "bog" vs "bok" (book), "gade" vs "gate".' },
    { sign: '-by, -rup, -havn', tip: 'Common Danish place-name endings (Tønder, Esbjerg, Kastrup, København).' },
  ],
  regions: [
    { country: 'DK', status: 'official', signage: 'common' },
    { country: 'FO', status: 'co-official', signage: 'sometimes' },
    { country: 'GL', status: 'regional', signage: 'sometimes', note: 'Widely used alongside Greenlandic.' },
    { country: 'DE', area: 'Southern Schleswig (Flensburg area)', status: 'minority', signage: 'rare' },
  ],
  signWords: {
    street: 'gade', road: 'vej', square: 'plads', exit: 'frakørsel', centre: 'centrum', church: 'kirke',
    school: 'skole', pharmacy: 'apotek', bakery: 'bageri', police: 'politi', hospital: 'sygehus',
    station: 'station', bridge: 'bro', forSale: 'til salg',
  },
  orthography: { year: 1948, note: 'The 1948 reform introduced å (replacing aa) and dropped capitalised nouns.' },
  history: [
    'Danish developed from the eastern dialects of Old Norse. Denmark ruled Norway for over 400 years (1380–1814), and Danish became the written language there, which is why written Norwegian Bokmål still looks so Danish.',
    'Until 1948 Danish wrote "aa" for å and capitalised all nouns, like German. Many place names kept the old spelling, so you can still see Aalborg and Aarhus.',
  ],
  place: [
    { title: 'Why is there a Danish minority in Germany?', text: 'Schleswig was fought over between Denmark and Prussia. After a 1920 plebiscite, northern Schleswig voted to join Denmark and the southern part stayed German. Minorities remain on both sides of the border.' },
  ],
  connections: ['Closest relatives: Norwegian Bokmål (almost identical in writing) and Swedish.'],
  facts: ['Spoken Danish is famous for swallowing consonants; Norwegians and Swedes often find it easier to read than to hear.'],
  sources: ['https://en.wikipedia.org/wiki/Danish_language', 'https://en.wikipedia.org/wiki/Danish_orthography'],
}

export const no: Language = {
  id: 'no',
  name: 'Norwegian',
  nativeName: 'norsk',
  script: 'latin',
  family: ['Indo-European', 'Germanic', 'North Germanic', 'West Scandinavian'],
  groups: ['nordic'],
  confusedWith: ['da', 'sv'],
  giveaways: [
    { sign: 'æ ø å', tip: 'Shared with Danish. Swedish uses ä ö instead.' },
    { sign: 'vei / veg', tip: 'Road (Danish: vej).' },
    { sign: 'gate', tip: 'Street (Danish: gade).' },
    { sign: 'kj, skj, hv', tip: 'Common Norwegian spellings: "kjør sakte" (drive slowly).' },
    { sign: 'sykehus', tip: 'Hospital (Danish: sygehus).' },
  ],
  regions: [{ country: 'NO', status: 'official', signage: 'common' }],
  signWords: {
    street: 'gate', road: 'vei', square: 'torg', exit: 'avkjørsel', centre: 'sentrum', church: 'kirke',
    school: 'skole', pharmacy: 'apotek', bakery: 'bakeri', police: 'politi', hospital: 'sykehus',
    station: 'stasjon', bridge: 'bru', forSale: 'til salgs',
  },
  orthography: { year: 1907, note: 'Spelling reforms of 1907, 1917 and 1938 moved written Norwegian away from Danish.' },
  history: [
    'After 400 years of Danish rule, Norway entered a union with Sweden in 1814 and became fully independent in 1905. In the 19th century two written standards emerged: Riksmål (now Bokmål), a Norwegianised Danish, and Landsmål (now Nynorsk), built by Ivar Aasen from rural dialects.',
    'Both are official. About 85–90% of people write Bokmål. Each municipality chooses a standard, so signs in western Norway often use Nynorsk ("veg" instead of "vei", "ikkje" instead of "ikke").',
  ],
  place: [
    { title: 'Sámi signs in the north', text: 'In Finnmark and Troms, many municipalities are in the Sámi language administrative area, and place signs show both Norwegian and Sámi names (e.g. Kautokeino / Guovdageaidnu).' },
    { title: 'Why Norway\'s landscapes change from south to north', text: 'Norway stretches over 1,700 km. The south has farmland and deciduous trees, the fjord coast is mountainous, and north of the Arctic Circle the land becomes treeless tundra. See the Landscapes module (planned).' },
  ],
  connections: ['Closest relatives: Danish (in writing) and Swedish (in speech). Nynorsk is closer to Icelandic and Faroese in some features.'],
  facts: ['Norway has no official spoken standard; people speak their local dialect on TV and in parliament.'],
  sources: ['https://en.wikipedia.org/wiki/Norwegian_language', 'https://en.wikipedia.org/wiki/Nynorsk'],
}

export const sv: Language = {
  id: 'sv',
  name: 'Swedish',
  nativeName: 'svenska',
  script: 'latin',
  family: ['Indo-European', 'Germanic', 'North Germanic', 'East Scandinavian'],
  groups: ['nordic'],
  confusedWith: ['no', 'da', 'fi'],
  giveaways: [
    { sign: 'ä ö å', tip: 'Swedish has all three. Danish/Norwegian use æ ø instead; Finnish has ä ö but no å.' },
    { sign: 'gatan / vägen', tip: 'Street names end in -gatan (the street) or -vägen (the road): Drottninggatan, Storvägen.' },
    { sign: 'infart / utfart', tip: 'Entry / exit for vehicles.' },
    { sign: 'Swedish in Finland', tip: 'Swedish on signs in Finland appears next to Finnish: Helsinki/Helsingfors.' },
  ],
  regions: [
    { country: 'SE', status: 'official', signage: 'common' },
    { country: 'FI', area: 'West and south coasts (Ostrobothnia, Uusimaa, Turku archipelago)', status: 'co-official', signage: 'common', note: 'Bilingual signs; Swedish is listed first in Swedish-majority municipalities.' },
    { country: 'AX', status: 'official', signage: 'common', note: 'Åland is autonomous and Swedish-only.' },
  ],
  signWords: {
    street: 'gata', road: 'väg', square: 'torg', exit: 'avfart', centre: 'centrum', church: 'kyrka',
    school: 'skola', pharmacy: 'apotek', bakery: 'bageri', police: 'polis', hospital: 'sjukhus',
    station: 'station', bridge: 'bro', forSale: 'till salu',
  },
  orthography: { year: 1906, note: 'The 1906 reform simplified spelling (e.g. hv → v, dt → t).' },
  history: [
    'Swedish developed from eastern Old Norse. Sweden was a great power in the 17th century, controlling Finland, Estonia and parts of northern Germany, which spread Swedish around the Baltic.',
    'Swedish has absorbed many words from Low German (through the Hanseatic League trade network), French (18th-century court culture) and English.',
  ],
  place: [
    { title: 'Why is there Swedish on Finnish signs?', text: 'Finland was part of the Swedish kingdom from the Middle Ages until 1809. Swedish settlers lived along the Finnish coast, and Swedish remained the language of the educated class. It is still an official language of Finland, spoken by about 5%.' },
    { title: 'Why is Åland Swedish-speaking but Finnish?', text: 'After World War I, Åland\'s Swedish-speaking population wanted to join Sweden. In 1921 the League of Nations gave the islands to Finland, but with autonomy, demilitarisation and Swedish as the only official language.' },
  ],
  connections: ['Closest relatives: Norwegian and Danish.'],
  facts: ['Swedish has a pitch accent: "anden" can mean "the duck" or "the spirit" depending on melody.'],
  sources: ['https://en.wikipedia.org/wiki/Swedish_language', 'https://en.wikipedia.org/wiki/%C3%85land'],
}

export const is: Language = {
  id: 'is',
  name: 'Icelandic',
  nativeName: 'íslenska',
  script: 'latin',
  family: ['Indo-European', 'Germanic', 'North Germanic', 'West Scandinavian'],
  groups: ['nordic'],
  confusedWith: ['fo', 'no'],
  giveaways: [
    { sign: 'þ', tip: 'Thorn: a "th" sound. Only Icelandic uses it today (Þingvellir).' },
    { sign: 'ð', tip: 'Eth: a soft "th". Shared with Faroese.' },
    { sign: 'é', tip: 'Icelandic uses é; Faroese does not.' },
    { sign: 'æ ö', tip: 'Icelandic uses æ and ö (Faroese uses ø instead of ö).' },
    { sign: '-vegur, -gata, -fjörður', tip: 'Road, street, fjord.' },
  ],
  regions: [{ country: 'IS', status: 'official', signage: 'common' }],
  signWords: {
    street: 'gata', road: 'vegur', square: 'torg', centre: 'miðbær', church: 'kirkja',
    school: 'skóli', pharmacy: 'apótek', bakery: 'bakarí', police: 'lögreglan', hospital: 'sjúkrahús',
    station: 'stöð', bridge: 'brú', forSale: 'til sölu',
  },
  history: [
    'Iceland was settled from Norway (with many Celtic slaves and wives from the British Isles) from about 874 AD. Isolation meant the language changed little, and Icelanders can still read the medieval sagas.',
    'Icelandic keeps þ and ð from Old English and Old Norse. An official language policy creates new Icelandic words instead of borrowing: a computer is "tölva", from tala (number) and völva (prophetess).',
  ],
  place: [
    { title: 'Why is Iceland\'s language so old-fashioned?', text: 'Iceland is remote and was thinly populated, with little immigration for a thousand years, and the sagas kept the old language as a written model. Purist language policy continues this today.' },
  ],
  connections: ['Closest relative: Faroese (partly intelligible in writing). Then Norwegian (especially Nynorsk).'],
  facts: ['Icelanders use patronymics instead of family names: Jón\'s son is Jónsson and his daughter Jónsdóttir.'],
  sources: ['https://en.wikipedia.org/wiki/Icelandic_language'],
}

export const fo: Language = {
  id: 'fo',
  name: 'Faroese',
  nativeName: 'føroyskt',
  script: 'latin',
  family: ['Indo-European', 'Germanic', 'North Germanic', 'West Scandinavian'],
  groups: ['nordic'],
  confusedWith: ['is', 'da', 'no'],
  giveaways: [
    { sign: 'ð with ø', tip: 'ð like Icelandic, but ø like Danish. Only Faroese combines them.' },
    { sign: 'no þ, no é', tip: 'Unlike Icelandic.' },
    { sign: '-vík, -fjørður, -gøta', tip: 'Bay, fjord, street.' },
  ],
  regions: [{ country: 'FO', status: 'official', signage: 'common' }],
  signWords: {
    street: 'gøta', road: 'vegur', church: 'kirkja', school: 'skúli', bakery: 'bakarí',
    hospital: 'sjúkrahús', bridge: 'brúgv', forSale: 'til sølu',
  },
  orthography: { year: 1846, note: 'V. U. Hammershaimb created the written standard in 1846, with an etymological spelling close to Old Norse.' },
  history: [
    'The Faroes were settled by Norse farmers around 800 AD. Under Danish rule, Danish became the language of church and government, and Faroese survived mainly in speech and ballads.',
    'Hammershaimb\'s 1846 written standard was designed to show the link with Old Norse and Icelandic rather than how Faroese is pronounced, so spelling and pronunciation differ a lot.',
  ],
  place: [
    { title: 'Why are the Faroes Danish but not in the EU?', text: 'The Faroes are a self-governing part of the Danish Realm. They chose not to join the EU with Denmark in 1973, largely to keep control of their fishing waters.' },
  ],
  connections: ['Closest relative: Icelandic. Also close to western Norwegian dialects.'],
  facts: ['Only about 70,000 people speak Faroese, most of them in the islands and in Denmark.'],
  sources: ['https://en.wikipedia.org/wiki/Faroese_language'],
}

export const se: Language = {
  id: 'se',
  name: 'Northern Sámi',
  nativeName: 'davvisámegiella',
  script: 'latin',
  family: ['Uralic', 'Sámi', 'Western Sámi'],
  groups: ['nordic'],
  confusedWith: ['fi', 'no'],
  giveaways: [
    { sign: 'ŧ', tip: 't with a stroke: unique to Sámi.' },
    { sign: 'ŋ', tip: 'eng: an "ng" sound. Unique among European national languages.' },
    { sign: 'đ č š ž on Nordic signs', tip: 'Háček and stroke letters in Norway, Sweden or Finland point to Sámi.' },
    { sign: 'á', tip: 'Very frequent (Kárášjohka, Guovdageaidnu).' },
  ],
  regions: [
    { country: 'NO', area: 'Finnmark, Troms (Sámi administrative area)', status: 'co-official', signage: 'common', note: 'Bilingual place signs, e.g. Karasjok / Kárášjohka.' },
    { country: 'SE', area: 'Norrbotten (Kiruna, Gällivare, Jokkmokk)', status: 'minority', signage: 'sometimes' },
    { country: 'FI', area: 'Northern Lapland (Utsjoki, Enontekiö, Inari)', status: 'regional', signage: 'common', note: 'Inari can show four languages: Finnish, Inari Sámi, Northern Sámi, Skolt Sámi.' },
  ],
  signWords: { road: 'geaidnu', church: 'girku', school: 'skuvla', hospital: 'buohcciviessu', bridge: 'šaldi' },
  history: [
    'The Sámi are the Indigenous people of northern Scandinavia and the Kola Peninsula. Their languages are Uralic, related to Finnish. From the 19th century until the mid-20th, Norway and Sweden pursued assimilation policies that discouraged Sámi in schools.',
    'Since the 1980s–90s, Sámi parliaments and language laws have brought Sámi back onto signs and into schools in Norway, Sweden and Finland.',
  ],
  place: [
    { title: 'Why do Sámi signs appear across three countries?', text: 'Sámi territory (Sápmi) predates national borders, which were drawn across it in the 18th–19th centuries. Reindeer herding families traditionally moved across what are now Norway, Sweden and Finland.' },
  ],
  connections: ['There are around nine Sámi languages; Northern Sámi is the largest. Related to Finnish and Estonian, but not mutually intelligible.'],
  facts: ['Northern Sámi has an unusually rich vocabulary for snow, ice and reindeer.'],
  sources: ['https://en.wikipedia.org/wiki/Northern_Sami', 'https://en.wikipedia.org/wiki/Sami_languages'],
}

export const languages = [da, no, sv, is, fo, se]
