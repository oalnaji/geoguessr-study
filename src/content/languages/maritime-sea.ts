import type { Group, Language } from '../types'

// Sign words for these languages live in vocab.ts.

export const maritimeSea: Group = {
  id: 'maritime-sea',
  name: 'Maritime Southeast Asia',
  members: ['id', 'ms', 'fil', 'ceb'],
  intro: [
    'Indonesian, Malay, Filipino (Tagalog) and Cebuano are Austronesian languages written in plain Latin letters with almost no accents, so the alphabet gives nothing away. The clues are spelling habits and a handful of everyday words.',
    'Indonesian and Malay are two standard forms of one language. Their spellings were unified in 1972, but they kept different words for many modern things (Indonesian often borrowed from Dutch, Malay from English): police is "polisi" in Indonesia but "polis" in Malaysia.',
  ],
  checklist: [
    { look: '"ng" as its own word, "mga", "sa", "ang", or Spanish-looking words (kalye, simbahan)', then: 'Filipino/Tagalog (or Cebuano: see below)' },
    { look: '"dalan", "sa", "ug", "nga"', then: 'Cebuano (central and southern Philippines)' },
    { look: '"Jl." or Dutch-style words: polisi, apotek, stasiun, kantor, rumah sakit', then: 'Indonesian' },
    { look: '"Jln.", "Jalan" with English-style words: polis, farmasi, stesen, hospital, bandar', then: 'Malay (Malaysia, Brunei, Singapore)' },
    { look: '"kampung"', then: 'Malay (Indonesian also says kampung, but Malaysia uses it far more on signs)' },
  ],
  traps: [
    'Most Philippine signs are in English. Tagalog shows up on government notices, shop names and local signs.',
    'Indonesian and Malay share "jalan", "pulau", "sungai", "timur" (east), "barat" (west). Look for the words that differ.',
    'Singapore uses Malay as a national language, but most signs there are English.',
  ],
}

export const id: Language = {
  id: 'id',
  name: 'Indonesian',
  nativeName: 'Bahasa Indonesia',
  script: 'latin',
  family: ['Austronesian', 'Malayo-Polynesian', 'Malayic', 'Malay'],
  groups: ['maritime-sea'],
  confusedWith: ['ms', 'fil'],
  giveaways: [
    { sign: 'Jl.', tip: 'Street names start with "Jl." (jalan): Jl. Sudirman. Malaysia usually writes "Jln." or "Jalan".' },
    { sign: 'polisi / apotek / stasiun', tip: 'Dutch-influenced words, where Malay has polis / farmasi / stesen.' },
    { sign: 'rumah sakit', tip: 'Hospital (literally "sick house"). Malaysia says "hospital".' },
    { sign: 'timur / barat', tip: 'East / west, as in Nusa Tenggara Timur, Jawa Barat. Shared with Malay.' },
  ],
  regions: [
    { country: 'ID', status: 'official', signage: 'common', note: 'Balinese and Javanese scripts sometimes appear under the Latin text on signs in Bali and Java.' },
  ],
  signWords: {},
  orthography: { year: 1972, note: 'The Enhanced Spelling System (EYD) unified spelling with Malaysia: "dj" → "j", "tj" → "c", "oe" → "u".' },
  history: [
    'Indonesian is a standardised form of Malay, which had been the trade language of the archipelago\'s ports for centuries. At the Youth Pledge of 1928, nationalists chose it as the language of the future nation rather than Javanese, the largest mother tongue, because Malay was neutral and already widely understood.',
    'Under Dutch rule, Malay was written with Dutch spelling ("oe" for u, "tj" for c), which survives in old names such as Soekarno. The 1972 reform brought the spelling in line with Malaysia\'s.',
  ],
  place: [
    { title: 'Why does Indonesia speak "Malay" rather than Javanese?', text: 'Malay had spread along trade routes through the ports of Sumatra, Borneo and the Moluccas for over a thousand years, so it was the one language understood across the islands. Choosing it avoided favouring the Javanese, who make up about 40% of the population.' },
  ],
  connections: ['Mutually intelligible with Malay. Heavy loanword layers from Sanskrit, Arabic, Dutch, Portuguese and English.'],
  facts: ['Most Indonesians grow up speaking a regional language (Javanese, Sundanese, Balinese…) and learn Indonesian at school.'],
  sources: ['https://en.wikipedia.org/wiki/Indonesian_language'],
}

export const ms: Language = {
  id: 'ms',
  name: 'Malay',
  nativeName: 'Bahasa Melayu',
  script: 'latin',
  family: ['Austronesian', 'Malayo-Polynesian', 'Malayic', 'Malay'],
  groups: ['maritime-sea'],
  confusedWith: ['id'],
  giveaways: [
    { sign: 'Jln. / Jalan', tip: 'Street. Malaysian signs often write "Jln." or the full "Jalan".' },
    { sign: 'polis / stesen / farmasi', tip: 'English-influenced words, where Indonesian has polisi / stasiun / apotek.' },
    { sign: 'bandar / kampung / tasik', tip: 'Town / village / lake (Indonesian: kota / desa / danau).' },
    { sign: '-si → -syen', tip: 'Malay adapts English -tion as -syen (stesen, televisyen), Indonesian as -si (stasiun, televisi).' },
  ],
  regions: [
    { country: 'MY', status: 'official', signage: 'common', note: 'Road signs in Malaysia are mostly Malay, often with English.' },
    { country: 'BN', status: 'official', signage: 'common', note: 'Brunei also writes Malay in Jawi (Arabic script) on signs.' },
    { country: 'SG', status: 'official', signage: 'rare', note: 'National language of Singapore, but most signs are English.' },
    { country: 'TH', area: 'Deep South (Pattani, Yala, Narathiwat)', status: 'minority', signage: 'sometimes', note: 'Pattani Malay, sometimes in Jawi script.' },
  ],
  signWords: {},
  orthography: { year: 1972, note: 'Unified spelling with Indonesia (Ejaan Rumi Baharu).' },
  history: [
    'Malay was the language of the Malacca Sultanate (15th century), whose port controlled the spice trade through the Strait of Malacca. It spread as a lingua franca across the region, written in Jawi (Arabic script) after the arrival of Islam.',
    'Under British rule, a Latin-script spelling (Rumi) developed with English conventions. Rumi is now standard, though Jawi still appears on religious buildings, royal signage and in Brunei and Kelantan.',
  ],
  place: [
    { title: 'Why are there two standards, Malay and Indonesian?', text: 'The Anglo-Dutch Treaty of 1824 split the Malay world: the British took the peninsula and Singapore, the Dutch took Sumatra and the islands. Over the next 150 years the two sides borrowed from different colonial languages, which is why many modern words differ.' },
  ],
  connections: ['Mutually intelligible with Indonesian. Related to Tagalog, Malagasy and Hawaiian (all Austronesian).'],
  facts: ['Jawi (Arabic-script Malay) appears on signs in Kelantan and Terengganu next to the Latin text.'],
  sources: ['https://en.wikipedia.org/wiki/Malay_language', 'https://en.wikipedia.org/wiki/Malaysian_Malay'],
}

export const fil: Language = {
  id: 'fil',
  name: 'Filipino (Tagalog)',
  nativeName: 'Wikang Filipino',
  script: 'latin',
  family: ['Austronesian', 'Malayo-Polynesian', 'Philippine', 'Central Philippine'],
  groups: ['maritime-sea'],
  confusedWith: ['ceb', 'id', 'es'],
  giveaways: [
    { sign: 'ng / mga / ang / sa', tip: 'Very frequent short words: "ng" (of) and "mga" (plural marker) are unmistakable.' },
    { sign: 'Spanish loanwords', tip: 'kalye (calle), simbahan, eskwelahan, botika, panaderya: Spanish words with Tagalog spelling.' },
    { sign: 'Barangay / Brgy.', tip: 'The smallest administrative unit, on almost every local sign in the Philippines.' },
    { sign: 'Maligayang pagdating', tip: '"Welcome", on town entry arches.' },
  ],
  regions: [
    { country: 'PH', status: 'official', signage: 'common', note: 'English dominates road signs; Filipino is common on local, government and shop signs, especially in the Tagalog region around Manila.' },
  ],
  signWords: {},
  orthography: { year: 1987, note: 'The modern 28-letter alphabet (adding c, f, j, ñ, q, v, x, z and ng) was adopted in 1987.' },
  history: [
    'Tagalog was the language of Manila and the surrounding region. Spain ruled the Philippines for over 300 years (1565–1898), leaving thousands of Spanish words and the Latin alphabet, which replaced the native Baybayin script.',
    'In 1937 Tagalog was chosen as the basis of a national language, later renamed Pilipino and then Filipino. Under American rule (1898–1946), English became the language of government and education, which is why it still dominates signs today.',
  ],
  place: [
    { title: 'Why are Philippine signs mostly English?', text: 'The US ran the Philippines for almost 50 years and built its school system in English. English remains co-official and is the main language of law, business, road signs and higher education.' },
  ],
  connections: ['Closest relatives: other Central Philippine languages such as Cebuano and Hiligaynon. Distantly related to Malay and Indonesian.'],
  facts: ['Baybayin, the pre-colonial script, is being revived: it appears on the Philippine passport, banknotes and some government logos.'],
  sources: ['https://en.wikipedia.org/wiki/Filipino_language', 'https://en.wikipedia.org/wiki/Tagalog_language'],
}

export const ceb: Language = {
  id: 'ceb',
  name: 'Cebuano',
  nativeName: 'Sinugbuanong Binisayâ',
  script: 'latin',
  family: ['Austronesian', 'Malayo-Polynesian', 'Philippine', 'Central Philippine', 'Bisayan'],
  groups: ['maritime-sea'],
  confusedWith: ['fil'],
  giveaways: [
    { sign: 'ug / nga / dili', tip: '"and" / linker / "not": frequent Cebuano words that Tagalog does not use (Tagalog: at / na / hindi).' },
    { sign: 'dalan', tip: 'Road or street (Tagalog: daan / kalye).' },
    { sign: 'Maayong pag-abot', tip: '"Welcome", the Cebuano version of Tagalog "Maligayang pagdating".' },
  ],
  regions: [
    { country: 'PH', area: 'Central Visayas (Cebu, Bohol, Negros Oriental) and most of Mindanao', status: 'regional', signage: 'sometimes' },
  ],
  signWords: {},
  history: [
    'Cebuano is the language of Cebu, where Magellan landed in 1521 and Spain founded its first permanent settlement in the Philippines (1565). It spread to Mindanao with 20th-century migration.',
    'By number of native speakers it rivalled Tagalog for much of the 20th century, which made the choice of Tagalog as the national language controversial in the Visayas.',
  ],
  place: [
    { title: 'Why is Cebuano spoken across Mindanao?', text: 'In the 20th century, government-backed settlement programmes moved large numbers of people from the crowded Visayas to Mindanao. Cebuano became the main language of northern and eastern Mindanao, including Davao and Cagayan de Oro.' },
  ],
  connections: ['Closest relatives: other Bisayan languages (Hiligaynon, Waray). Related to Tagalog.'],
  facts: ['Cebuano Wikipedia is one of the largest by article count, mostly thanks to a bot that generated millions of geography articles.'],
  sources: ['https://en.wikipedia.org/wiki/Cebuano_language'],
}

export const languages = [id, ms, fil, ceb]
