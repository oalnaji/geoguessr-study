import type { Group, Language } from '../types'

// Sign words for these languages live in vocab.ts.

export const polynesian: Group = {
  id: 'polynesian',
  name: 'Polynesian',
  members: ['mi', 'haw', 'sm', 'to'],
  intro: [
    'Polynesian languages spread across the Pacific with voyagers who settled islands from Tonga and Samoa to Hawaii (around 1000 AD) and New Zealand (around 1300 AD). They have very few consonants, so words are made of simple syllables with lots of vowels.',
    'All mark long vowels (with macrons: ā) and the glottal stop (with the ʻokina: ʻ) in different ways.',
  ],
  checklist: [
    { look: 'wh, ng, and macrons (ā ō): Whanganui, Tauranga', then: 'Māori (New Zealand)' },
    { look: 'ʻokina (ʻ) and k, with no t: Hawaiʻi, Kalākaua', then: 'Hawaiian' },
    { look: 'ʻ and t, no k in native words: Faleolo, Apia', then: 'Samoan' },
    { look: 'ʻ, with h and k and ng: Nukuʻalofa, Haʻapai', then: 'Tongan' },
  ],
  traps: [
    'Māori place names are everywhere in New Zealand, including on English signs. Bilingual Māori–English signs are becoming more common.',
    'Hawaiian place names appear on otherwise English US road signs in Hawaii.',
  ],
}

export const andean: Group = {
  id: 'andean',
  name: 'Indigenous South American',
  members: ['qu', 'ay', 'gn'],
  intro: [
    'Quechua and Aymara are the languages of the Andes, spoken since before the Inca Empire; Guaraní is the language of Paraguay. Quechua and Aymara share many words from centuries of contact.',
  ],
  checklist: [
    { look: 'ỹ, ẽ, g̃ (tildes on y, e, g) or the apostrophe-like puso (ʼ)', then: 'Guaraní (Paraguay)' },
    { look: 'q, qh, q\', k\', and endings -pampa, -marka, -qucha', then: 'Quechua or Aymara (Peru, Bolivia)' },
    { look: 'Words ending in consonants, -kuna (plural), -wasi', then: 'Quechua' },
    { look: 'jach\'a, jisk\'a, -marka, -quta, most words end in a vowel', then: 'Aymara (around Lake Titicaca)' },
  ],
  traps: ['Road signs in Peru and Bolivia are in Spanish; indigenous languages appear mainly in place names.'],
}

export const qu: Language = {
  id: 'qu',
  name: 'Quechua',
  nativeName: 'Runa Simi',
  script: 'latin',
  family: ['Quechuan'],
  groups: ['andean'],
  confusedWith: ['ay'],
  giveaways: [
    { sign: 'q, qh, q\'', tip: 'Uvular consonants: Qusqu (Cusco).' },
    { sign: '-pampa, -marka, -qucha', tip: 'Plain, town, lake: Urubamba, Cajamarca, Yanacocha.' },
    { sign: 'w and k', tip: 'Modern spelling uses w and k where Spanish-era names use hua- and c-: Wanka / Huanca.' },
  ],
  regions: [
    { country: 'PE', area: 'Andean highlands (Cusco, Ayacucho, Apurímac, Puno)', status: 'co-official', signage: 'rare' },
    { country: 'BO', status: 'official', signage: 'rare' },
    { country: 'EC', status: 'co-official', signage: 'rare', note: 'As Kichwa.' },
  ],
  signWords: {},
  history: [
    'Quechua was spread by the Inca Empire as its administrative language (15th–16th centuries), and later by Spanish missionaries as a common language for preaching. It is the most spoken indigenous language of the Americas.',
  ],
  place: [
    { title: 'Why are so many Andean place names Quechua?', text: 'The Incas renamed and settled places across a 4,000 km empire from Ecuador to Chile. Names like Machu Picchu ("old mountain") and Urubamba came from Quechua.' },
  ],
  connections: ['Many shared words with Aymara, from long contact.'],
  facts: ['"Llama", "puma", "condor" and "jerky" came into English from Quechua.'],
  sources: ['https://en.wikipedia.org/wiki/Quechuan_languages'],
}

export const ay: Language = {
  id: 'ay',
  name: 'Aymara',
  nativeName: 'Aymar aru',
  script: 'latin',
  family: ['Aymaran'],
  groups: ['andean'],
  confusedWith: ['qu'],
  giveaways: [
    { sign: 'jach\'a / jisk\'a', tip: 'Big / small, common in place names.' },
    { sign: '-quta, -marka', tip: 'Lake, town.' },
  ],
  regions: [
    { country: 'BO', area: 'Altiplano (La Paz, Oruro)', status: 'official', signage: 'rare' },
    { country: 'PE', area: 'Puno', status: 'co-official', signage: 'rare' },
  ],
  signWords: {},
  lettersOverride: 'a ch chh ch\' i j k kh k\' l ll m n ñ p ph p\' q qh q\' s t th t\' u w x y',
  history: [
    'Aymara was spoken on the Altiplano around Lake Titicaca before the Inca expansion. Bolivian president Evo Morales (2006–2019) was the first indigenous president of an Andean country, and Aymara was made official in the 2009 constitution.',
  ],
  place: [
    { title: 'Why the Altiplano?', text: 'The high plateau around Lake Titicaca (over 3,800 m) was home to the Tiwanaku civilisation. Aymara speakers remain concentrated there, around La Paz and El Alto.' },
  ],
  connections: ['Aymaran family, shares many words with Quechua.'],
  facts: ['Aymara speakers traditionally picture the past as in front of them and the future behind.'],
  sources: ['https://en.wikipedia.org/wiki/Aymara_language'],
}

export const gn: Language = {
  id: 'gn',
  name: 'Guaraní',
  nativeName: 'Avañeʼẽ',
  script: 'latin',
  family: ['Tupian', 'Tupi–Guarani'],
  groups: ['andean'],
  confusedWith: ['es', 'qu'],
  giveaways: [
    { sign: 'ỹ ẽ g̃', tip: 'Tildes on unusual letters: Guaraní marks nasal vowels this way.' },
    { sign: 'ʼ (puso)', tip: 'A glottal stop, like an apostrophe: Avañeʼẽ.' },
    { sign: 'Y- / Ita- / -guasu', tip: 'Water, stone, big: Ypacaraí, Itauguá, Mbaracayú.' },
  ],
  regions: [
    { country: 'PY', status: 'co-official', signage: 'sometimes', note: 'Spoken by most Paraguayans; Spanish dominates signs.' },
    { country: 'AR', area: 'Corrientes', status: 'co-official', signage: 'rare' },
  ],
  signWords: {},
  history: [
    'Guaraní was the language of the peoples the Spanish met in Paraguay. Jesuit missions (17th–18th centuries) wrote it down and used it, and it survived as the everyday language of most Paraguayans, including non-indigenous people.',
  ],
  place: [
    { title: 'Why is Paraguay bilingual?', text: 'Paraguay had few Spanish settlers, who intermarried with Guaraní people, and the Jesuit missions used Guaraní. It became a national symbol, especially during the wars of the 19th and 20th centuries.' },
  ],
  connections: ['Tupian family, related to the extinct Tupi of coastal Brazil, which gave Brazil many place names.'],
  facts: ['"Jaguar", "piranha" and "tapioca" come from Tupi-Guaraní languages.'],
  sources: ['https://en.wikipedia.org/wiki/Guarani_language'],
}

export const mi: Language = {
  id: 'mi',
  name: 'Māori',
  nativeName: 'Te Reo Māori',
  script: 'latin',
  family: ['Austronesian', 'Malayo-Polynesian', 'Polynesian', 'Eastern Polynesian'],
  groups: ['polynesian'],
  confusedWith: ['haw'],
  giveaways: [
    { sign: 'wh', tip: 'Pronounced like f: Whangārei, Whakatāne.' },
    { sign: 'ng', tip: 'Very common: Tauranga, Ngāruawāhia.' },
    { sign: 'ā ē ī ō ū', tip: 'Macrons for long vowels.' },
    { sign: 'Wai- / Roto- / -nui', tip: 'Water, lake, big: Waikato, Rotorua, Wainuiomata.' },
  ],
  regions: [{ country: 'NZ', status: 'official', signage: 'sometimes', note: 'Place names everywhere; bilingual signs on government buildings and some roads.' }],
  signWords: {},
  history: [
    'Māori ancestors reached New Zealand from eastern Polynesia around 1300 AD. Missionaries wrote Māori down in the early 19th century.',
    'After English replaced it in schools, the number of speakers collapsed. A revival from the 1970s (kōhanga reo preschools) and the Māori Language Act 1987, which made it official, brought it back into public life.',
  ],
  place: [
    { title: 'Why are most New Zealand place names Māori?', text: 'Māori had named the landscape centuries before Europeans arrived. Many names were kept, and since the 1990s several have been officially restored or made dual (Aoraki / Mount Cook).' },
  ],
  connections: ['Closest relatives: Cook Islands Māori, Tahitian, Hawaiian.'],
  facts: ['Aotearoa, the Māori name for New Zealand, is often translated as "land of the long white cloud".'],
  sources: ['https://en.wikipedia.org/wiki/M%C4%81ori_language'],
}

export const haw: Language = {
  id: 'haw',
  name: 'Hawaiian',
  nativeName: 'ʻŌlelo Hawaiʻi',
  script: 'latin',
  family: ['Austronesian', 'Malayo-Polynesian', 'Polynesian', 'Eastern Polynesian'],
  groups: ['polynesian'],
  confusedWith: ['mi', 'sm'],
  giveaways: [
    { sign: 'ʻ (ʻokina)', tip: 'Glottal stop: Hawaiʻi, Oʻahu.' },
    { sign: 'only 13 letters', tip: 'a e i o u h k l m n p w ʻ. No t, s, r.' },
    { sign: 'Kalani-, Kea-, Wai-', tip: 'Common in street and place names: Kalanianaʻole Hwy, Waikīkī.' },
  ],
  regions: [{ country: 'US', area: 'Hawaii', status: 'co-official', signage: 'sometimes', note: 'Street names are mostly Hawaiian; signs are in English.' }],
  signWords: {},
  history: [
    'Hawaiian was the language of the Kingdom of Hawaiʻi. After the US-backed overthrow of the monarchy (1893) and annexation (1898), Hawaiian was banned in schools, and speakers dwindled. It was made co-official in 1978 and immersion schools have revived it.',
  ],
  place: [
    { title: 'Why do Hawaiian roads have Hawaiian names?', text: 'Most streets and places kept their Hawaiian names; a 1979 state law encouraged Hawaiian names for new streets. Road signs are otherwise standard US signs.' },
  ],
  connections: ['Closest relatives: Tahitian, Marquesan and Māori.'],
  facts: ['Hawaiian has one of the smallest alphabets in the world.'],
  sources: ['https://en.wikipedia.org/wiki/Hawaiian_language'],
}

export const sm: Language = {
  id: 'sm',
  name: 'Samoan',
  nativeName: 'Gagana Sāmoa',
  script: 'latin',
  family: ['Austronesian', 'Malayo-Polynesian', 'Polynesian', 'Samoic'],
  groups: ['polynesian'],
  confusedWith: ['to', 'haw'],
  giveaways: [
    { sign: 'g = ng', tip: 'Samoan writes the ng sound as g: Pago Pago is "Pango Pango".' },
    { sign: 'ʻ and ā', tip: 'Glottal stops and macrons.' },
    { sign: 'Fale-', tip: 'House: Faleolo, Falealupo.' },
  ],
  regions: [
    { country: 'WS', status: 'official', signage: 'common' },
    { country: 'AS', status: 'co-official', signage: 'sometimes' },
    { country: 'NZ', area: 'Auckland', status: 'diaspora', signage: 'rare' },
  ],
  signWords: {},
  lettersOverride: 'a ā e ē i ī o ō u ū f g l m n p s t v h k r ʻ',
  history: [
    'Samoan is the language of the Samoan islands. Samoa was split in 1899: the west became a German, then New Zealand, territory and independent Samoa in 1962; the east became American Samoa.',
  ],
  place: [
    { title: 'Why is there Samoan in New Zealand?', text: 'Western Samoa was administered by New Zealand from 1914 to 1962. Large-scale migration followed, and Samoan is now one of the most spoken languages in New Zealand.' },
  ],
  connections: ['Closest relatives: Tokelauan, Tuvaluan. Then Tongan and other Polynesian languages.'],
  facts: ['Samoa moved to the other side of the International Date Line in 2011.'],
  sources: ['https://en.wikipedia.org/wiki/Samoan_language'],
}

export const to: Language = {
  id: 'to',
  name: 'Tongan',
  nativeName: 'lea faka-Tonga',
  script: 'latin',
  family: ['Austronesian', 'Malayo-Polynesian', 'Polynesian', 'Tongic'],
  groups: ['polynesian'],
  confusedWith: ['sm'],
  giveaways: [
    { sign: 'faka-', tip: 'A very common prefix: faka-Tonga (Tongan style).' },
    { sign: 'ʻ with h and k', tip: 'Nukuʻalofa, Haʻapai, Vavaʻu.' },
  ],
  regions: [{ country: 'TO', status: 'official', signage: 'common', note: 'With English.' }],
  signWords: {},
  history: [
    'Tonga is the only Pacific island nation never colonised; it was a British protected state from 1900 to 1970 but kept its monarchy. The Tongan maritime empire once extended its influence across much of western Polynesia.',
  ],
  place: [
    { title: 'Why is Tonga still a kingdom?', text: 'King George Tupou I unified the islands in the 19th century and adopted a constitution in 1875, and Tonga avoided annexation by signing a protection treaty with Britain.' },
  ],
  connections: ['Closest relative: Niuean.'],
  facts: ['Tonga is one of the first countries to see each new day.'],
  sources: ['https://en.wikipedia.org/wiki/Tongan_language'],
}

export const kl: Language = {
  id: 'kl',
  name: 'Greenlandic',
  nativeName: 'Kalaallisut',
  script: 'latin',
  family: ['Eskimo–Aleut', 'Inuit'],
  groups: [],
  confusedWith: ['da', 'fi'],
  giveaways: [
    { sign: 'very long words', tip: 'Greenlandic builds whole sentences into one word.' },
    { sign: 'q and double consonants', tip: 'qq, ss, tt, ll everywhere: Qaqortoq, Ilulissat, Sisimiut.' },
    { sign: '-suaq / -ssuaq', tip: '"Big": Kangerlussuaq (big fjord), Qeqertarsuaq (big island).' },
  ],
  regions: [{ country: 'GL', status: 'official', signage: 'common', note: 'Often with Danish.' }],
  signWords: {},
  history: [
    'Greenlandic is an Inuit language, brought by the Thule people who reached Greenland around 1200 AD. Danish missionaries wrote it down in the 18th century, and it became the sole official language of Greenland in 2009.',
  ],
  place: [
    { title: 'Why is Greenland Danish?', text: 'Norse colonies in Greenland died out in the 15th century. Denmark-Norway recolonised it from 1721, and Greenland stayed with Denmark after 1814. It has had home rule since 1979 and self-government since 2009.' },
  ],
  connections: ['Closest relatives: other Inuit languages of Canada and Alaska.'],
  facts: ['Greenland\'s towns have both Greenlandic and Danish names: Nuuk / Godthåb.'],
  sources: ['https://en.wikipedia.org/wiki/Greenlandic_language'],
}

export const languages = [qu, ay, gn, mi, haw, sm, to, kl]
