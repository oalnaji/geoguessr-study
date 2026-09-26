import type { Group, Language } from '../types'

// Sign words for these languages live in vocab.ts.

export const cyrillicGroup: Group = {
  id: 'cyrillic',
  name: 'Cyrillic languages',
  members: ['ru', 'uk', 'be', 'bg', 'sr', 'mk', 'kk', 'ky', 'mn'],
  intro: [
    'All of these use Cyrillic, but each language adds a few letters and drops others. Those differences are the giveaways: learn the handful of "extra" letters and you can tell most of them apart from a single sign.',
    'Russian, Ukrainian and Belarusian are East Slavic; Bulgarian, Serbian and Macedonian are South Slavic; Kazakh and Kyrgyz are Turkic; Mongolian is Mongolic. The Turkic and Mongolian languages were given Cyrillic under Soviet influence around 1940.',
  ],
  checklist: [
    { look: 'ә ғ қ ұ һ', then: 'Kazakh' },
    { look: 'ө ү ң but no ә ғ қ', then: 'Kyrgyz (ң) or Mongolian (no ң; lots of ө ү and double vowels: нуур, уул)' },
    { look: 'ї є ґ', then: 'Ukrainian' },
    { look: 'ў', then: 'Belarusian' },
    { look: 'і without ї or ў', then: 'Ukrainian or Belarusian (Belarusian also uses ы and э, Ukrainian does not)' },
    { look: 'ђ ћ', then: 'Serbian' },
    { look: 'ѓ ќ ѕ', then: 'Macedonian' },
    { look: 'ј љ њ џ', then: 'Serbian or Macedonian' },
    { look: 'ъ in the middle of words (път, център), щ, no ы э', then: 'Bulgarian' },
    { look: 'ы э ё with none of the above', then: 'Russian' },
  ],
  traps: [
    'Russian is also widely used in Kazakhstan, Kyrgyzstan and (unofficially) eastern Ukraine, so seeing Russian does not always mean Russia.',
    'Kazakhstan is moving to a Latin alphabet; some newer signs show Kazakh in Latin letters.',
    'Mongolian Cyrillic has ө and ү like Kyrgyz. Mongolian words often have double vowels (Улаанбаатар), which Kyrgyz spells differently.',
  ],
}

export const ru: Language = {
  id: 'ru',
  name: 'Russian',
  nativeName: 'русский',
  script: 'cyrillic',
  family: ['Indo-European', 'Balto-Slavic', 'Slavic', 'East Slavic'],
  groups: ['cyrillic'],
  confusedWith: ['uk', 'be', 'bg'],
  giveaways: [
    { sign: 'ы э ё', tip: 'Russian uses all three; Ukrainian has none of them, Bulgarian has none.' },
    { sign: 'no і ї є ў', tip: 'Russian lacks the extra letters of Ukrainian and Belarusian.' },
    { sign: 'ул. / пр.', tip: 'Street (улица) / avenue (проспект) abbreviations on street signs.' },
    { sign: '-ск, -град, -ово', tip: 'Common place-name endings: Новосибирск, Калининград, Иваново.' },
  ],
  regions: [
    { country: 'RU', status: 'official', signage: 'common' },
    { country: 'BY', status: 'co-official', signage: 'common', note: 'More widely used than Belarusian.' },
    { country: 'KZ', status: 'co-official', signage: 'common', note: 'Official alongside Kazakh; signs often in both.' },
    { country: 'KG', status: 'co-official', signage: 'common' },
    { country: 'UA', area: 'East and south (historically)', status: 'minority', signage: 'rare', note: 'Widely spoken, but official signs are in Ukrainian.' },
    { country: 'LV', status: 'minority', signage: 'rare' },
    { country: 'EE', area: 'Ida-Virumaa', status: 'minority', signage: 'rare' },
  ],
  signWords: {},
  orthography: { year: 1918, note: 'The Soviet spelling reform removed ѣ, і, ѳ and ѵ.' },
  history: [
    'Russian developed from the East Slavic dialects of Kievan Rus. As the Grand Duchy of Moscow grew into the Russian Empire, its language spread across Siberia to the Pacific. Peter the Great simplified the letter shapes in 1708.',
    'In the Soviet Union, Russian was the common language of 15 republics, which is why it is still understood across the Caucasus and Central Asia.',
  ],
  place: [
    { title: 'Why is Russian spoken from Europe to the Pacific?', text: 'Russian expansion east across Siberia, driven by the fur trade, reached the Pacific by 1639. Later settlement along the Trans-Siberian Railway (built 1891–1916) brought Russian speakers to the whole route.' },
    { title: 'Kaliningrad', text: 'Kaliningrad was the German city of Königsberg, capital of East Prussia, until 1945. After the war it became part of the USSR, its German population was expelled, and it was resettled by Russian speakers.' },
  ],
  connections: ['Closest relatives: Belarusian and Ukrainian. Then the other Slavic languages.'],
  facts: ['Russian is the most spoken native language in Europe.'],
  sources: ['https://en.wikipedia.org/wiki/Russian_language'],
}

export const uk: Language = {
  id: 'uk',
  name: 'Ukrainian',
  nativeName: 'українська',
  script: 'cyrillic',
  family: ['Indo-European', 'Balto-Slavic', 'Slavic', 'East Slavic'],
  groups: ['cyrillic'],
  confusedWith: ['ru', 'be'],
  giveaways: [
    { sign: 'ї є ґ', tip: 'Found only in Ukrainian: Київ, Європа, ґанок.' },
    { sign: 'і', tip: 'Ukrainian (and Belarusian) use і where Russian uses и.' },
    { sign: 'no ы э ё', tip: 'Ukrainian never uses these Russian letters.' },
    { sign: 'вул.', tip: 'Street (вулиця) on street signs; Russian has ул.' },
  ],
  regions: [{ country: 'UA', status: 'official', signage: 'common' }],
  signWords: {},
  history: [
    'Ukrainian developed from the East Slavic dialects of Kievan Rus, alongside Russian and Belarusian. Much of today\'s western Ukraine was ruled by Poland-Lithuania and later Austria, and Ukrainian absorbed Polish influence.',
    'The Russian Empire restricted Ukrainian publishing in the 19th century (the Ems Decree of 1876), and Soviet policy favoured Russian. Since independence in 1991, and especially since 2014, Ukrainian has been strongly promoted in public life.',
  ],
  place: [
    { title: 'Why is Russian spoken in eastern Ukraine?', text: 'Industrialisation of the Donbas in the 19th and 20th centuries drew workers from across the Russian Empire, and Soviet policy promoted Russian. The east and south became largely Russian-speaking, though official signs are Ukrainian.' },
  ],
  connections: ['Closest relative: Belarusian. Then Russian and Polish.'],
  facts: ['Street View coverage of Ukraine was captured before 2022 and shows many signs in Ukrainian with Latin transliteration.'],
  sources: ['https://en.wikipedia.org/wiki/Ukrainian_language'],
}

export const be: Language = {
  id: 'be',
  name: 'Belarusian',
  nativeName: 'беларуская',
  script: 'cyrillic',
  family: ['Indo-European', 'Balto-Slavic', 'Slavic', 'East Slavic'],
  groups: ['cyrillic'],
  confusedWith: ['ru', 'uk'],
  giveaways: [
    { sign: 'ў', tip: 'Short u (u with a breve): only Belarusian uses it.' },
    { sign: 'і with ы э', tip: 'Belarusian uses і like Ukrainian, but also ы and э like Russian.' },
    { sign: 'дз, дж', tip: 'Very frequent in Belarusian spelling.' },
  ],
  regions: [{ country: 'BY', status: 'official', signage: 'common', note: 'Street and road signs are often in Belarusian even though most people speak Russian.' }],
  signWords: {},
  history: [
    'Belarusian descends from the language of the Grand Duchy of Lithuania, where a form of it (Ruthenian) was the language of government until the 17th century.',
    'Under the Russian Empire and later the USSR, Russian dominated, and today most Belarusians speak Russian day to day. Belarusian remains co-official and is common on street signs.',
  ],
  place: [
    { title: 'Why is Belarusian close to Ukrainian and Polish?', text: 'For about 500 years, Belarus was part of the Grand Duchy of Lithuania and the Polish–Lithuanian Commonwealth, not Russia, which left a strong Polish influence on vocabulary.' },
  ],
  connections: ['Closest relative: Ukrainian. Then Russian and Polish.'],
  facts: ['Belarus has no official Street View coverage.'],
  sources: ['https://en.wikipedia.org/wiki/Belarusian_language'],
}

export const bg: Language = {
  id: 'bg',
  name: 'Bulgarian',
  nativeName: 'български',
  script: 'cyrillic',
  family: ['Indo-European', 'Balto-Slavic', 'Slavic', 'South Slavic', 'Eastern South Slavic'],
  groups: ['cyrillic'],
  confusedWith: ['ru', 'mk', 'sr'],
  giveaways: [
    { sign: 'ъ as a vowel', tip: 'Bulgarian uses ъ as a real vowel inside words (път, център, България).' },
    { sign: 'щ', tip: 'Pronounced "sht" in Bulgarian. Common: къща, още.' },
    { sign: 'no ы э ё', tip: 'Bulgarian lacks these Russian letters.' },
    { sign: 'no ј љ њ', tip: 'Unlike Serbian and Macedonian.' },
    { sign: '-ово, -ево', tip: 'Very common town and village endings, e.g. Габрово (Gabrovo).' },
  ],
  regions: [{ country: 'BG', status: 'official', signage: 'common', note: 'Road signs add Latin transliteration.' }],
  signWords: {},
  orthography: { year: 1945, note: 'The 1945 reform removed ѣ and ѫ.' },
  history: [
    'Old Church Slavonic, the first written Slavic language, was based on the dialects of the Slavs around Thessaloniki, the ancestors of Bulgarian and Macedonian. The Cyrillic alphabet itself was created in the First Bulgarian Empire in the 9th–10th centuries.',
    'Bulgaria was under Ottoman rule from the late 14th century until 1878, and Bulgarian absorbed many Turkish words. Like Macedonian, it lost the Slavic noun cases and puts the definite article at the end of words (град → градът).',
  ],
  place: [
    { title: 'Why is there Turkish in Bulgaria?', text: 'After five centuries of Ottoman rule, a large Turkish community remained, especially in the Kardzhali region in the south and Razgrad in the north-east.' },
  ],
  connections: ['Closest relative: Macedonian (highly intelligible). Then Serbian and the other Slavic languages.'],
  facts: ['Bulgaria was the first country to use Cyrillic; it has been an official EU script since Bulgaria joined in 2007.'],
  sources: ['https://en.wikipedia.org/wiki/Bulgarian_language'],
}

export const kk: Language = {
  id: 'kk',
  name: 'Kazakh',
  nativeName: 'қазақ тілі',
  script: 'cyrillic',
  family: ['Turkic', 'Kipchak'],
  groups: ['cyrillic'],
  confusedWith: ['ky', 'ru', 'mn'],
  giveaways: [
    { sign: 'ә ғ қ ұ һ', tip: 'Kazakh-only Cyrillic letters: Қазақстан, Алматы, Әуезов.' },
    { sign: 'ң ө ү і', tip: 'Also used, shared partly with Kyrgyz and Mongolian.' },
    { sign: 'көшесі', tip: '"Street" after the name: Абай көшесі (Abai Street).' },
  ],
  regions: [{ country: 'KZ', status: 'official', signage: 'common', note: 'Signs are usually in Kazakh and Russian.' }],
  signWords: {},
  orthography: { year: 1940, note: 'Cyrillic replaced a Latin alphabet in 1940. A switch to a new Latin alphabet began in 2017 and is being phased in.' },
  history: [
    'Kazakh is the language of the nomadic Kazakh Khanate, founded in the 15th century on the steppes. It was written in Arabic script until 1929, then Latin, then Cyrillic from 1940.',
    'Under Soviet rule, Russian dominated in cities, and famine and deportations made Kazakhs a minority in their own republic for decades. Since independence in 1991, Kazakh has been revived, and a gradual move to Latin script is under way.',
  ],
  place: [
    { title: 'Why do so many people in Kazakhstan speak Russian?', text: 'Russian settlement, Soviet industrial projects (such as the Virgin Lands campaign of the 1950s) and deportations of whole peoples to Kazakhstan created a large Russian-speaking population, especially in the north.' },
  ],
  connections: ['Closest relatives: Kyrgyz, Karakalpak, Tatar and other Kipchak Turkic languages.'],
  facts: ['Kazakhstan is the largest landlocked country in the world.'],
  sources: ['https://en.wikipedia.org/wiki/Kazakh_language', 'https://en.wikipedia.org/wiki/Kazakh_alphabets'],
}

export const ky: Language = {
  id: 'ky',
  name: 'Kyrgyz',
  nativeName: 'кыргызча',
  script: 'cyrillic',
  family: ['Turkic', 'Kipchak'],
  groups: ['cyrillic'],
  confusedWith: ['kk', 'mn', 'ru'],
  giveaways: [
    { sign: 'ң ө ү', tip: 'Kyrgyz adds only these three letters to the Russian alphabet.' },
    { sign: 'no ә ғ қ', tip: 'Unlike Kazakh.' },
    { sign: 'long vowels', tip: 'Written doubled: оорукана (hospital), тоо (mountain).' },
  ],
  regions: [{ country: 'KG', status: 'official', signage: 'common', note: 'Signs often in Kyrgyz and Russian.' }],
  signWords: {},
  history: [
    'Kyrgyz is a Turkic language of the Tian Shan mountains. Like Kazakh, it moved from Arabic script to Latin (1928) and then to Cyrillic (1940).',
    'The Manas epic, one of the longest poems in the world, is the cornerstone of Kyrgyz literature and was passed down orally for centuries.',
  ],
  place: [
    { title: 'Why is Kyrgyzstan so mountainous?', text: 'Over 90% of the country lies above 1,500 m in the Tian Shan and Pamir-Alay ranges, formed by the collision of the Indian and Eurasian plates. Kyrgyz herders traditionally moved between high summer pastures (jailoo) and lower winter camps.' },
  ],
  connections: ['Closest relatives: Kazakh and other Kipchak Turkic languages.'],
  facts: ['The word "jailoo" (summer pasture) is found all over Kyrgyz place names.'],
  sources: ['https://en.wikipedia.org/wiki/Kyrgyz_language'],
}

export const mn: Language = {
  id: 'mn',
  name: 'Mongolian',
  nativeName: 'монгол хэл',
  script: 'cyrillic',
  family: ['Mongolic', 'Central Mongolic'],
  groups: ['cyrillic'],
  confusedWith: ['kk', 'ky', 'ru'],
  giveaways: [
    { sign: 'ө ү', tip: 'Very frequent; Mongolian adds only these two letters to Russian Cyrillic.' },
    { sign: 'double vowels', tip: 'аа, оо, уу, өө, үү, ээ everywhere: Улаанбаатар, нуур (lake), уул (mountain).' },
    { sign: 'traditional script', tip: 'The vertical Mongolian script sometimes appears next to Cyrillic on official signs.' },
  ],
  regions: [
    { country: 'MN', status: 'official', signage: 'common' },
    { country: 'CN', area: 'Inner Mongolia', status: 'co-official', signage: 'common', note: 'Written in the traditional vertical script, not Cyrillic.' },
  ],
  signWords: {},
  orthography: { year: 1941, note: 'Mongolia adopted Cyrillic in 1941–46; the traditional script is being reintroduced alongside it.' },
  history: [
    'Mongolian was the language of Genghis Khan\'s empire in the 13th century, written in the vertical script borrowed from the Uyghurs.',
    'Under Soviet influence, the Mongolian People\'s Republic switched to Cyrillic in the 1940s. Inner Mongolia, part of China, kept the traditional script. Mongolia plans to use both scripts officially from 2025.',
  ],
  place: [
    { title: 'Why is Mongolian written two ways?', text: 'Mongolia was a Soviet satellite and adopted Cyrillic; Inner Mongolia was part of China and kept the old vertical script. The border between them is also a script border.' },
  ],
  connections: ['Closest relatives: Buryat and Kalmyk (in Russia). Mongolian is not related to Russian or Chinese.'],
  facts: ['Mongolia is the most sparsely populated sovereign country in the world.'],
  sources: ['https://en.wikipedia.org/wiki/Mongolian_language'],
}

export const languages = [ru, uk, be, bg, kk, ky, mn]
