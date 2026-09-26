import type { Group, Language } from '../types'

export const celtic: Group = {
  id: 'celtic',
  name: 'Celtic',
  members: ['ga', 'cy', 'gd', 'br'],
  intro: [
    'The Celtic languages were once spoken across much of Europe. Today they survive on the Atlantic fringe. There are two branches: Goidelic (Irish, Scottish Gaelic, Manx) and Brittonic (Welsh, Breton, Cornish). Breton was taken to Brittany by migrants from south-west Britain in the 5th–6th centuries.',
    'You mostly see them on bilingual signs next to English or French.',
  ],
  checklist: [
    { look: 'w and y used as vowels, ll, dd, ff (Llanfair, Caerdydd)', then: 'Welsh' },
    { look: 'á é í ó ú (acute accents), bh, mh, "An Lár"', then: 'Irish' },
    { look: 'à è ì ò ù (grave accents), bh, mh', then: 'Scottish Gaelic' },
    { look: 'zh, c\'h, "ker", "plou", and French alongside', then: 'Breton' },
  ],
  traps: [
    'Irish uses acute accents (á), Scottish Gaelic uses grave accents (à). Otherwise they look very similar.',
    'In Ireland, the Irish name is usually on top in italics or yellow on green road signs; the English name follows.',
    'Welsh "ll" and "dd" are single letters in Welsh.',
  ],
}

export const ga: Language = {
  id: 'ga',
  name: 'Irish',
  nativeName: 'Gaeilge',
  script: 'latin',
  family: ['Indo-European', 'Celtic', 'Insular Celtic', 'Goidelic'],
  groups: ['celtic'],
  confusedWith: ['gd'],
  giveaways: [
    { sign: 'á é í ó ú', tip: 'Irish uses the acute accent (síneadh fada): Baile Átha Cliath (Dublin).' },
    { sign: 'bh, mh, dh, gh, ch', tip: 'Lenited consonants with h: Bhaile, Mhór.' },
    { sign: 'Baile, Cill, Dún, Inis', tip: 'Common place-name elements: town, church, fort, island.' },
    { sign: 'An Lár', tip: '"The Centre", on Irish road signs and buses.' },
  ],
  regions: [
    { country: 'IE', status: 'official', signage: 'common', note: 'All road signs are bilingual; Irish is usually above or in italics.' },
    { country: 'IE', area: 'Gaeltacht areas (Donegal, Connemara, Kerry…)', status: 'official', signage: 'common', note: 'Irish-only signs by law.' },
    { country: 'GB', area: 'Northern Ireland', status: 'regional', signage: 'rare' },
  ],
  signWords: {
    street: 'sráid', road: 'bóthar', square: 'cearnóg', exit: 'slí amach', centre: 'an lár', church: 'séipéal',
    school: 'scoil', pharmacy: 'cógaslann', bakery: 'bácús', police: 'gardaí', hospital: 'ospidéal',
    station: 'stáisiún', bridge: 'droichead', forSale: 'ar díol',
  },
  history: [
    'Irish has one of the oldest written vernacular literatures in Europe, going back to the 6th century. It was the everyday language of most of Ireland until the 19th century.',
    'English spread through centuries of British rule, and the Great Famine (1845–52), which hit the Irish-speaking poor hardest, together with emigration, caused a collapse in speakers. Independent Ireland (1922) made Irish its first official language and compulsory in schools, but only a minority speak it daily.',
  ],
  place: [
    { title: 'What is the Gaeltacht?', text: 'The Gaeltacht are the areas, mostly on the west coast, where Irish is still a community language. Since the Official Languages Act (2003), place names there appear only in Irish on road signs: An Daingean rather than Dingle.' },
  ],
  connections: ['Closest relatives: Scottish Gaelic and Manx.', 'English words from Irish: slogan, whiskey (uisce beatha), galore, smithereens.'],
  facts: ['The Irish police are called the Garda Síochána ("Guardians of the Peace").'],
  sources: ['https://en.wikipedia.org/wiki/Irish_language', 'https://en.wikipedia.org/wiki/Gaeltacht'],
}

export const cy: Language = {
  id: 'cy',
  name: 'Welsh',
  nativeName: 'Cymraeg',
  script: 'latin',
  family: ['Indo-European', 'Celtic', 'Insular Celtic', 'Brittonic'],
  groups: ['celtic'],
  confusedWith: ['br'],
  giveaways: [
    { sign: 'w, y as vowels', tip: 'Words like "cwm" (valley) and "bryn" (hill).' },
    { sign: 'll, dd, ff, rh', tip: 'Llan- (church), -dd (Caerdydd = Cardiff).' },
    { sign: 'Araf', tip: '"Slow", painted on roads in Wales.' },
    { sign: 'ŵ ŷ', tip: 'Circumflexes on w and y: unique to Welsh.' },
  ],
  regions: [{ country: 'GB', area: 'Wales', status: 'co-official', signage: 'common', note: 'All road signs are bilingual; many councils put Welsh first.' }],
  signWords: {
    street: 'stryd', road: 'heol', square: 'sgwâr', exit: 'allanfa', centre: 'canol y dref', church: 'eglwys',
    school: 'ysgol', pharmacy: 'fferyllfa', bakery: 'popty', police: 'heddlu', hospital: 'ysbyty',
    station: 'gorsaf', bridge: 'pont', forSale: 'ar werth',
  },
  history: [
    'Welsh descends from the Brittonic language spoken across Britain before the Anglo-Saxon invasions. Welsh poetry survives from the 6th century.',
    'The Acts of Union (1536–43) made English the language of law in Wales. William Morgan\'s Welsh Bible (1588) helped the language survive. The Welsh Language Act 1993 and the Welsh Language (Wales) Measure 2011 gave Welsh equal official status.',
  ],
  place: [
    { title: 'Why is Welsh strongest in the north and west?', text: 'The industrial south-east (Cardiff, the Valleys) drew English-speaking migrants in the 19th century, while the rural north-west (Gwynedd, Anglesey) stayed Welsh-speaking. Over 60% speak Welsh in Gwynedd.' },
  ],
  connections: ['Closest relatives: Cornish and Breton.'],
  facts: ['Llanfairpwllgwyngyll on Anglesey has a 58-letter full name, often on its railway station sign.'],
  sources: ['https://en.wikipedia.org/wiki/Welsh_language'],
}

export const gd: Language = {
  id: 'gd',
  name: 'Scottish Gaelic',
  nativeName: 'Gàidhlig',
  script: 'latin',
  family: ['Indo-European', 'Celtic', 'Insular Celtic', 'Goidelic'],
  groups: ['celtic'],
  confusedWith: ['ga'],
  giveaways: [
    { sign: 'à è ì ò ù', tip: 'Scottish Gaelic uses grave accents only (Irish uses acutes).' },
    { sign: 'bh, mh, ch', tip: 'Lenited consonants like Irish.' },
    { sign: 'Baile, Inbhir, Ceann', tip: 'Town, river mouth (Inverness = Inbhir Nis), head.' },
  ],
  regions: [{ country: 'GB', area: 'Highlands and Islands (esp. Outer Hebrides)', status: 'regional', signage: 'common', note: 'Bilingual signs; Gaelic is often in green.' }],
  signWords: {
    street: 'sràid', road: 'rathad', square: 'ceàrnag', centre: 'meadhan a\' bhaile', church: 'eaglais',
    school: 'sgoil', hospital: 'ospadal', station: 'stèisean', bridge: 'drochaid', police: 'poileas',
  },
  history: [
    'Gaelic was brought to Scotland from Ireland around the 4th–5th centuries and was once spoken across most of Scotland. From the Middle Ages, Scots and English spread from the south and east.',
    'After the Jacobite defeat at Culloden (1746) and the Highland Clearances, when landlords evicted tenants to make way for sheep, Gaelic-speaking communities were broken up. Today it is strongest in the Outer Hebrides.',
  ],
  place: [
    { title: 'Why are there Gaelic names all over the Highlands?', text: 'Most Highland place names are Gaelic in origin, even where English is now spoken: Inverness (Inbhir Nis), Kinlochleven (Ceann Loch Lìobhann), Ben Nevis (Beinn Nibheis). Bilingual signs restore the Gaelic forms.' },
  ],
  connections: ['Closest relatives: Irish and Manx.'],
  facts: ['Nova Scotia in Canada has a small Gaelic-speaking community, from 18th–19th-century emigration.'],
  sources: ['https://en.wikipedia.org/wiki/Scottish_Gaelic'],
}

export const br: Language = {
  id: 'br',
  name: 'Breton',
  nativeName: 'brezhoneg',
  script: 'latin',
  family: ['Indo-European', 'Celtic', 'Insular Celtic', 'Brittonic'],
  groups: ['celtic'],
  confusedWith: ['cy', 'fr'],
  giveaways: [
    { sign: 'zh, c\'h', tip: 'Breton spellings: Breizh (Brittany), c\'hoari.' },
    { sign: 'ker-, plou-, lan-, tre-', tip: 'Place-name elements: village, parish, holy place, settlement (Kerlouan, Plougastel).' },
    { sign: 'French + Breton', tip: 'Bilingual signs in Brittany show the French name, then Breton below: Quimper / Kemper.' },
  ],
  regions: [{ country: 'FR', area: 'Brittany (esp. Finistère, western Côtes-d\'Armor, Morbihan)', status: 'minority', signage: 'common', note: 'Bilingual town and road signs across western Brittany.' }],
  signWords: {
    street: 'straed', road: 'hent', square: 'plasenn', centre: 'kreiz-kêr', church: 'iliz', school: 'skol',
    hospital: 'ospital', station: 'gar', bridge: 'pont',
  },
  history: [
    'Breton was brought to Armorica (Brittany) by Britons fleeing the Anglo-Saxon invasions in the 5th–6th centuries. It is closest to Cornish and Welsh.',
    'In the 19th and 20th centuries the French state banned Breton in schools, and the number of speakers fell sharply. Since the 1970s, Diwan immersion schools and the Ofis Publik ar Brezhoneg have revived it on signs.',
  ],
  place: [
    { title: 'Why is a British language spoken in France?', text: 'Brittany is named after the Britons who migrated there from Cornwall, Devon and Wales. The migrants gave the peninsula its name and language.' },
  ],
  connections: ['Closest relatives: Cornish and Welsh.'],
  facts: ['The Breton flag (Gwenn-ha-du) with black and white stripes is common on buildings and cars in Brittany.'],
  sources: ['https://en.wikipedia.org/wiki/Breton_language'],
}

export const languages = [ga, cy, gd, br]
