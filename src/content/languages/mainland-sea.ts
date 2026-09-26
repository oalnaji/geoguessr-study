import type { Group, Language } from '../types'

// Sign words for these languages live in vocab.ts.

export const mainlandSea: Group = {
  id: 'mainland-sea',
  name: 'Mainland Southeast Asia',
  members: ['th', 'lo', 'km', 'my', 'vi'],
  intro: [
    'Thai, Lao, Khmer and Burmese each have their own script, all descended from South Indian Brahmi scripts that arrived with Hinduism and Buddhism. Thai and Lao came from Old Khmer, so those three look related; Burmese took a separate route and is built from circles.',
    'Vietnamese is the odd one out: it uses Latin letters with stacked accents, because French colonial rule made a 17th-century missionary alphabet official.',
  ],
  checklist: [
    { look: 'Latin letters with stacked accents (ế, ộ, ữ) and đ', then: 'Vietnamese' },
    { look: 'Round script made of circles and arcs (မ ြ ာ)', then: 'Burmese (Myanmar)' },
    { look: 'Dense script with "hats" on top and letters stacked below (ក ខ ្ក)', then: 'Khmer (Cambodia)' },
    { look: 'Loops at the start of strokes, fine detail and notches (ก ด ฐ)', then: 'Thai' },
    { look: 'Like Thai but rounder and plainer, fewer letters (ກ ດ ບ)', then: 'Lao' },
  ],
  traps: [
    'Thai and Lao can look very similar at a glance. Thai has more complicated letters with serifs and double loops; Lao is simpler and rounder. The country clues (Thai yellow road signs vs Lao signs often adding French) help too.',
    'In Cambodia, many signs add English; in Laos, French and English appear on older signs.',
  ],
}

export const th: Language = {
  id: 'th',
  name: 'Thai',
  nativeName: 'ภาษาไทย',
  script: 'thai',
  family: ['Kra–Dai', 'Tai', 'Southwestern Tai'],
  groups: ['mainland-sea'],
  confusedWith: ['lo', 'km'],
  giveaways: [
    { sign: 'ถนน', tip: '"Thanon", road. Very common on Thai street signs, usually with a romanised "Thanon" or "Rd" beneath.' },
    { sign: 'ซอย', tip: '"Soi", a side lane. Thai addresses use numbered sois off main roads.' },
    { sign: 'loops', tip: 'Most Thai letters begin with a small loop (ก ด ถ ภ).' },
  ],
  regions: [{ country: 'TH', status: 'official', signage: 'common', note: 'Road signs are bilingual Thai–English.' }],
  signWords: {},
  history: [
    'Thai belongs to the Tai language family, whose speakers migrated south from what is now southern China from around the 8th–10th centuries. The Sukhothai and then Ayutthaya kingdoms made Central Thai the language of a powerful state.',
    'The script was adapted from Old Khmer, and Thai absorbed many Khmer, Pali and Sanskrit words, especially for royalty and religion.',
  ],
  place: [
    { title: 'Why is Lao spoken in north-east Thailand?', text: 'The Isan region (north-east Thailand) was part of the Lao kingdom of Lan Xang. Siam took it over in the 18th–19th centuries, and the 1893 Franco-Siamese treaty set the border on the Mekong. Most people in Isan speak Lao (called Isan) at home, but signs are in Thai.' },
  ],
  connections: ['Closest relative: Lao (largely mutually intelligible when spoken). Related to Shan and Zhuang.'],
  facts: ['Thai is tonal, with five tones, and the script marks them using consonant classes and tone marks.'],
  sources: ['https://en.wikipedia.org/wiki/Thai_language'],
}

export const lo: Language = {
  id: 'lo',
  name: 'Lao',
  nativeName: 'ພາສາລາວ',
  script: 'lao',
  family: ['Kra–Dai', 'Tai', 'Southwestern Tai'],
  groups: ['mainland-sea'],
  confusedWith: ['th'],
  giveaways: [
    { sign: 'ບ້ານ', tip: '"Ban", village. Lao place names often start with Ban.' },
    { sign: 'round, simple letters', tip: 'Compared with Thai, Lao letters have fewer loops and serifs.' },
    { sign: 'French on signs', tip: 'Older signs in Laos sometimes add French, a legacy of French Indochina.' },
  ],
  regions: [
    { country: 'LA', status: 'official', signage: 'common' },
    { country: 'TH', area: 'Isan (north-east Thailand)', status: 'regional', signage: 'rare', note: 'Spoken widely as Isan, but written in Thai script.' },
  ],
  signWords: {},
  history: [
    'Lao descends from the language of the Lan Xang kingdom (founded 1353), once one of the largest states in Southeast Asia. Laos was part of French Indochina from 1893 to 1953.',
    'After the communist revolution of 1975, the spelling was simplified to match pronunciation, dropping letters kept only for Pali and Sanskrit spelling.',
  ],
  place: [
    { title: 'Why do more Lao speakers live in Thailand than in Laos?', text: 'When the Mekong became the border in 1893, most of the Lao-speaking population ended up on the Thai side, in Isan. Today roughly three times as many people speak Lao in Thailand as in Laos.' },
  ],
  connections: ['Closest relative: Thai (especially Isan Thai).'],
  facts: ['Lao, as spoken in Vientiane, has six tones, one more than Thai.'],
  sources: ['https://en.wikipedia.org/wiki/Lao_language'],
}

export const km: Language = {
  id: 'km',
  name: 'Khmer',
  nativeName: 'ភាសាខ្មែរ',
  script: 'khmer',
  family: ['Austroasiatic', 'Khmeric'],
  groups: ['mainland-sea'],
  confusedWith: ['th', 'lo'],
  giveaways: [
    { sign: 'hats and subscripts', tip: 'Khmer letters have small hooks on top and letters written beneath others (្), giving lines a stacked look.' },
    { sign: 'ភ្នំ', tip: '"Phnom", mountain or hill, as in Phnom Penh.' },
    { sign: 'ខេត្ត', tip: '"Khaet", province, on administrative signs.' },
  ],
  regions: [
    { country: 'KH', status: 'official', signage: 'common' },
    { country: 'VN', area: 'Mekong Delta', status: 'minority', signage: 'rare' },
    { country: 'TH', area: 'Surin, Buriram, Sisaket', status: 'minority', signage: 'rare' },
  ],
  signWords: {},
  history: [
    'Khmer was the language of the Khmer Empire (9th–15th centuries), centred on Angkor, which ruled much of mainland Southeast Asia. Old Khmer inscriptions go back to the 7th century.',
    'Unlike Thai, Lao and Vietnamese, Khmer is not tonal. It belongs to the Austroasiatic family, like Vietnamese and Mon.',
  ],
  place: [
    { title: 'Why are there Khmer speakers in Vietnam\'s Mekong Delta?', text: 'The Mekong Delta, including the area around Saigon (Prey Nokor), was Khmer territory until Vietnamese expansion in the 17th–18th centuries. About a million Khmer Krom still live there.' },
  ],
  connections: ['Closest relatives within Austroasiatic are other Khmeric languages; distantly related to Vietnamese and Mon.'],
  facts: ['Angkor Wat appears on the Cambodian flag, the only national flag to show a building.'],
  sources: ['https://en.wikipedia.org/wiki/Khmer_language'],
}

export const my: Language = {
  id: 'my',
  name: 'Burmese',
  nativeName: 'မြန်မာဘာသာ',
  script: 'myanmar',
  family: ['Sino-Tibetan', 'Lolo-Burmese', 'Burmish'],
  groups: ['mainland-sea'],
  confusedWith: ['km'],
  giveaways: [
    { sign: 'circles', tip: 'Burmese letters are built almost entirely from circles and arcs.' },
    { sign: 'မြို့', tip: '"Myo", town, common in place names.' },
  ],
  regions: [{ country: 'MM', status: 'official', signage: 'common' }],
  signWords: {},
  history: [
    'Burmese is the language of the Bamar people, who founded the Pagan Kingdom in the 9th–11th centuries. The script was adopted from the Mon, who had in turn received it from southern India.',
    'Myanmar has over 100 languages; Burmese is the national language and lingua franca. It is related to Tibetan and, more distantly, Chinese.',
  ],
  place: [
    { title: 'Why is it "Myanmar" and "Burma"?', text: 'Both come from the same word for the Bamar people: "Myanma" is the formal written form and "Bama" the spoken one. The military government changed the official English name to Myanmar in 1989.' },
  ],
  connections: ['Related to Tibetan and other Sino-Tibetan languages.'],
  facts: ['Myanmar has very little Street View coverage, so Burmese mostly matters for script recognition.'],
  sources: ['https://en.wikipedia.org/wiki/Burmese_language'],
}

export const vi: Language = {
  id: 'vi',
  name: 'Vietnamese',
  nativeName: 'Tiếng Việt',
  script: 'latin',
  family: ['Austroasiatic', 'Vietic'],
  groups: ['mainland-sea'],
  confusedWith: [],
  giveaways: [
    { sign: 'stacked accents', tip: 'Two marks on one letter (ế, ộ, ữ, ẩ): only Vietnamese does this.' },
    { sign: 'đ', tip: 'd with a stroke. Also in the Ex-Yugoslav languages, but never with Vietnamese tone marks.' },
    { sign: 'ơ ư', tip: 'o and u with a horn: unique to Vietnamese.' },
    { sign: 'Đường / Phố', tip: 'Road / street, placed before the name.' },
    { sign: 'short syllables', tip: 'Every word is a separate one-syllable chunk: Thành phố Hồ Chí Minh.' },
  ],
  regions: [{ country: 'VN', status: 'official', signage: 'common' }],
  signWords: {},
  orthography: { year: 1918, note: 'Chữ Quốc Ngữ (Latin script) replaced Chinese-based writing in official use in the early 20th century.' },
  history: [
    'For about a thousand years Vietnam was ruled by China, and Vietnamese was written in Chinese characters and later in Chữ Nôm, a Vietnamese adaptation of them.',
    'In the 17th century Portuguese and French Jesuit missionaries, notably Alexandre de Rhodes, developed a Latin alphabet with accents for Vietnamese tones. French colonial authorities made it official in the early 20th century to cut ties with Chinese learning, and it became a symbol of mass literacy after independence.',
  ],
  place: [
    { title: 'Why does an Asian language use Latin letters?', text: 'Missionaries created the alphabet, and French colonial rule (from 1858) replaced Chinese-based writing with it in schools and government. Nationalists then embraced it because it was far quicker to learn than Chinese characters.' },
  ],
  connections: ['Related to Khmer (Austroasiatic), but about 60% of its vocabulary comes from Chinese.'],
  facts: ['Vietnamese has six tones, all marked with accents on the vowel.'],
  sources: ['https://en.wikipedia.org/wiki/Vietnamese_language', 'https://en.wikipedia.org/wiki/Vietnamese_alphabet'],
}

export const languages = [th, lo, km, my, vi]
