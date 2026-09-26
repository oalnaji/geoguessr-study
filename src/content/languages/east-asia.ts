import type { Group, Language } from '../types'

// Sign words for these languages live in vocab.ts.

export const eastAsian: Group = {
  id: 'east-asian',
  name: 'East Asian',
  members: ['zh', 'yue', 'ja', 'ko'],
  intro: [
    'Chinese characters were once the written language of the whole region. Japan still uses them alongside its own kana; Korea replaced them with Hangul; China simplified many of them in the 1950s, while Taiwan, Hong Kong and Macau kept the traditional forms.',
  ],
  checklist: [
    { look: 'Circles and simple blocks (ㅇ ㅎ ㄱ): 한국', then: 'Korean' },
    { look: 'Simple curvy or angular kana mixed in (の は を, ア カ ン)', then: 'Japanese' },
    { look: 'Only dense characters, simplified forms (门 车 东 马 国)', then: 'Mandarin in mainland China (or Singapore)' },
    { look: 'Only dense characters, traditional forms (門 車 東 馬 國)', then: 'Taiwan, Hong Kong or Macau' },
    { look: 'Traditional characters with 嘅 冇 係 啲 唔, or English under Chinese', then: 'Cantonese / Hong Kong' },
    { look: 'Traditional characters with Portuguese', then: 'Macau' },
  ],
  traps: [
    'Japanese also uses kanji alone on some signs (e.g. place names), but different forms: 駅 for station, 県 for prefecture.',
    'Hong Kong and Taiwan both use Traditional characters. Hong Kong drives on the left and often has English; Taiwan drives on the right and uses Zhuyin or Pinyin romanisation.',
  ],
}

export const zh: Language = {
  id: 'zh',
  name: 'Mandarin Chinese',
  nativeName: '中文 / 普通话',
  script: 'han',
  family: ['Sino-Tibetan', 'Sinitic'],
  groups: ['east-asian'],
  confusedWith: ['yue', 'ja'],
  giveaways: [
    { sign: 'Simplified characters', tip: 'Mainland China and Singapore: 门 车 东 国 广.' },
    { sign: 'Traditional characters', tip: 'Taiwan: 門 車 東 國 廣.' },
    { sign: 'Pinyin on signs', tip: 'Mainland street signs often add Pinyin: "Renmin Lu" (人民路).' },
    { sign: '路 / 街', tip: 'Road / street after the name: 中山路, 南京东路.' },
  ],
  regions: [
    { country: 'CN', status: 'official', signage: 'common', note: 'Very limited Street View coverage.' },
    { country: 'TW', status: 'official', signage: 'common', note: 'Traditional characters.' },
    { country: 'SG', status: 'official', signage: 'sometimes', note: 'Simplified characters.' },
    { country: 'MY', status: 'minority', signage: 'sometimes', note: 'On shop signs in Chinese-Malaysian areas.' },
  ],
  signWords: {},
  history: [
    'Chinese characters have been used continuously for over 3,000 years. Standard Mandarin is based on the Beijing dialect and became the national language in the early 20th century.',
    'The People\'s Republic introduced Simplified characters in the 1950s–60s to boost literacy. Taiwan, then Hong Kong and Macau (under British and Portuguese rule), kept Traditional characters.',
  ],
  place: [
    { title: 'Why does Taiwan use Traditional characters?', text: 'The Republic of China government retreated to Taiwan in 1949, before the mainland simplified its characters. Taiwan kept the older forms as a mark of cultural continuity.' },
  ],
  connections: ['Other Chinese languages (Cantonese, Wu, Min, Hakka) share the writing system but are not mutually intelligible in speech.'],
  facts: ['Mandarin has the most native speakers of any language.'],
  sources: ['https://en.wikipedia.org/wiki/Mandarin_Chinese'],
}

export const yue: Language = {
  id: 'yue',
  name: 'Cantonese',
  nativeName: '廣東話',
  script: 'han',
  family: ['Sino-Tibetan', 'Sinitic', 'Yue'],
  groups: ['east-asian'],
  confusedWith: ['zh'],
  giveaways: [
    { sign: '嘅 冇 係 啲 唔 佢', tip: 'Characters used only in written Cantonese (e.g. 冇 = "don\'t have").' },
    { sign: 'Traditional + English', tip: 'Hong Kong signs pair Traditional characters with English.' },
    { sign: '灣 / 角 / 咀', tip: 'Wan (bay), Kok (point), Tsui (cape) in Hong Kong place names: Causeway Bay (銅鑼灣), Mong Kok (旺角), Tsim Sha Tsui (尖沙咀).' },
  ],
  regions: [
    { country: 'HK', status: 'official', signage: 'common' },
    { country: 'MO', status: 'official', signage: 'common', note: 'With Portuguese.' },
    { country: 'CN', area: 'Guangdong, Guangxi', status: 'regional', signage: 'rare', note: 'Signs there use standard written Chinese.' },
  ],
  signWords: {},
  history: [
    'Cantonese is the Chinese language of Guangzhou (Canton) and the Pearl River Delta. Hong Kong and Macau made it their everyday language, and 19th-century emigrants carried it to Chinatowns around the world.',
  ],
  place: [
    { title: 'Why are Hong Kong signs in English and Chinese?', text: 'Hong Kong was a British colony from 1841 to 1997. English remains an official language, and signs and street names are bilingual (e.g. Queen\'s Road / 皇后大道).' },
  ],
  connections: ['Related to Mandarin but mutually unintelligible in speech.'],
  facts: ['Cantonese has six to nine tones, depending on how you count.'],
  sources: ['https://en.wikipedia.org/wiki/Cantonese'],
}

export const ja: Language = {
  id: 'ja',
  name: 'Japanese',
  nativeName: '日本語',
  script: 'japanese',
  family: ['Japonic'],
  groups: ['east-asian'],
  confusedWith: ['zh', 'ko'],
  giveaways: [
    { sign: 'の は を', tip: 'Hiragana grammar particles: if you see の, it is Japanese.' },
    { sign: '駅', tip: 'Station in Japanese (Chinese uses 站).' },
    { sign: '止まれ', tip: 'On the red inverted-triangle stop sign.' },
  ],
  regions: [{ country: 'JP', status: 'official', signage: 'common', note: 'Road signs add romaji (Latin letters).' }],
  signWords: {},
  history: [
    'Japanese writing began with Chinese characters around the 5th century. Hiragana and katakana developed from simplified characters by the 9th century.',
    'Japan simplified its characters in 1946 (shinjitai), in its own way: some Japanese forms differ from both Traditional and Simplified Chinese.',
  ],
  place: [
    { title: 'Why is Okinawa different?', text: 'The Ryukyu Kingdom was independent until Japan annexed it in 1879. The Ryukyuan languages are related to Japanese but distinct, and Okinawa\'s landscapes are subtropical.' },
  ],
  connections: ['Japonic family, with the Ryukyuan languages. Not related to Chinese, despite borrowing its characters.'],
  facts: ['Japanese uses three scripts at once, often in a single sentence.'],
  sources: ['https://en.wikipedia.org/wiki/Japanese_language'],
}

export const ko: Language = {
  id: 'ko',
  name: 'Korean',
  nativeName: '한국어',
  script: 'hangul',
  family: ['Koreanic'],
  groups: ['east-asian'],
  confusedWith: ['ja', 'zh'],
  giveaways: [
    { sign: 'ㅇ', tip: 'Circles inside syllable blocks: only Korean.' },
    { sign: '-로 / -길', tip: 'Road name endings: Sejong-daero (세종대로), -gil (길) for smaller roads.' },
    { sign: '시 / 군 / 구 / 동', tip: 'City / county / district / neighbourhood.' },
  ],
  regions: [
    { country: 'KR', status: 'official', signage: 'common', note: 'Road signs add English.' },
    { country: 'KP', status: 'official', signage: 'common' },
    { country: 'CN', area: 'Yanbian (Jilin)', status: 'co-official', signage: 'common', note: 'Korean autonomous prefecture with bilingual signs.' },
  ],
  signWords: {},
  history: [
    'Korean was written in Chinese characters until King Sejong created Hangul in 1443. Hangul became dominant only in the 20th century.',
  ],
  place: [
    { title: 'Why are there Korean signs in China?', text: 'Koreans migrated to Manchuria in the 19th and early 20th centuries. The Yanbian Korean Autonomous Prefecture in China requires signs in Korean and Chinese.' },
  ],
  connections: ['Koreanic family, with Jeju. No proven relation to Japanese or Chinese.'],
  facts: ['South Korean road names were reformed in 2014, replacing the old block-number addresses.'],
  sources: ['https://en.wikipedia.org/wiki/Korean_language'],
}

export const languages = [zh, yue, ja, ko]
