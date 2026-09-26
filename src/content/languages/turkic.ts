import type { Language } from '../types'

// Latin-script Turkic languages beyond Turkish (Turkish and the group live in other-europe.ts).
// Sign words for these languages live in vocab.ts.

export const az: Language = {
  id: 'az',
  name: 'Azerbaijani',
  nativeName: 'Azərbaycan dili',
  script: 'latin',
  family: ['Turkic', 'Oghuz'],
  groups: ['turkic-latin'],
  confusedWith: ['tr', 'tk'],
  giveaways: [
    { sign: 'ə', tip: 'Schwa (upside-down e): Azərbaycan. The strongest Azerbaijani clue.' },
    { sign: 'x and q', tip: 'Used a lot, unlike Turkish: xəstəxana (hospital), qala (fortress).' },
    { sign: 'küçəsi / prospekti', tip: 'Street / avenue after the name.' },
  ],
  regions: [
    { country: 'AZ', status: 'official', signage: 'common' },
    { country: 'IR', area: 'North-west (Tabriz, Ardabil)', status: 'minority', signage: 'rare', note: 'Written in Arabic script there.' },
    { country: 'GE', area: 'Kvemo Kartli', status: 'minority', signage: 'rare' },
  ],
  signWords: {},
  orthography: { year: 1991, note: 'Azerbaijan switched from Cyrillic back to a Latin alphabet in 1991, its third script change in the 20th century.' },
  history: [
    'Azerbaijani is an Oghuz Turkic language closely related to Turkish. It was written in Arabic script until 1929, in Latin until 1939, in Cyrillic until 1991, and in Latin again since.',
  ],
  place: [
    { title: 'Why do more Azerbaijanis live in Iran than in Azerbaijan?', text: 'The Russo-Persian treaties of 1813 and 1828 split the Azerbaijani-speaking lands along the Aras River. The north became Russian (today\'s Azerbaijan); the south remained in Iran, where perhaps 15–20 million Azerbaijanis live.' },
  ],
  connections: ['Closest relatives: Turkish and Turkmen (Oghuz branch).'],
  facts: ['Azerbaijani and Turkish speakers can understand each other fairly well.'],
  sources: ['https://en.wikipedia.org/wiki/Azerbaijani_language'],
}

export const uz: Language = {
  id: 'uz',
  name: 'Uzbek',
  nativeName: 'oʻzbek tili',
  script: 'latin',
  family: ['Turkic', 'Karluk'],
  groups: ['turkic-latin'],
  confusedWith: ['tk', 'az'],
  giveaways: [
    { sign: 'oʻ gʻ', tip: 'o and g followed by an apostrophe-like mark: Oʻzbekiston, Gʻijduvon.' },
    { sign: 'sh, ch, ng', tip: 'Uzbek uses digraphs where Turkish has ş and ç.' },
    { sign: 'Cyrillic too', tip: 'Many signs in Uzbekistan still use Uzbek Cyrillic (ў қ ғ ҳ).' },
  ],
  regions: [
    { country: 'UZ', status: 'official', signage: 'common' },
    { country: 'KG', area: 'Osh and the Fergana Valley', status: 'minority', signage: 'rare' },
    { country: 'TJ', status: 'minority', signage: 'rare' },
    { country: 'AF', area: 'North', status: 'regional', signage: 'rare' },
  ],
  signWords: {},
  orthography: { year: 1993, note: 'Uzbekistan adopted a Latin alphabet in 1993 (revised 1995); Cyrillic is still widely used.' },
  history: [
    'Uzbek is a Karluk Turkic language descended from Chagatai, the literary language of the Timurid era (Samarkand, Bukhara). It was written in Arabic script, then Latin (1928), Cyrillic (1940) and Latin again (1993).',
  ],
  place: [
    { title: 'Why are the Central Asian borders so tangled?', text: 'Soviet planners drew the borders of Uzbekistan, Kyrgyzstan and Tajikistan in the 1920s–30s through the ethnically mixed Fergana Valley, leaving enclaves and large minorities on each side.' },
  ],
  connections: ['Closest relative: Uyghur. Then other Turkic languages.'],
  facts: ['Samarkand and Bukhara have large Tajik (Persian)-speaking populations, despite being in Uzbekistan.'],
  sources: ['https://en.wikipedia.org/wiki/Uzbek_language'],
}

export const tk: Language = {
  id: 'tk',
  name: 'Turkmen',
  nativeName: 'türkmen dili',
  script: 'latin',
  family: ['Turkic', 'Oghuz'],
  groups: ['turkic-latin'],
  confusedWith: ['az', 'tr'],
  giveaways: [
    { sign: 'ž ň ý', tip: 'Letters unique among Turkic alphabets: ýol (road), Aşgabat.' },
    { sign: 'ä', tip: 'Turkmen uses ä (täze, "new"), which Turkish does not.' },
  ],
  regions: [
    { country: 'TM', status: 'official', signage: 'common' },
    { country: 'AF', area: 'North-west', status: 'minority', signage: 'rare' },
    { country: 'IR', area: 'Golestan', status: 'minority', signage: 'rare' },
  ],
  signWords: {},
  orthography: { year: 1993, note: 'Turkmenistan adopted its Latin alphabet in 1993.' },
  history: [
    'Turkmen is an Oghuz Turkic language of the Karakum desert and its oases. Like its neighbours it moved from Arabic to Latin to Cyrillic, and back to Latin after independence.',
  ],
  place: [
    { title: 'Why is Turkmenistan hard to see?', text: 'Turkmenistan is one of the most closed countries in the world and has no Street View coverage, so Turkmen mostly matters for recognising text.' },
  ],
  connections: ['Closest relatives: Azerbaijani and Turkish.'],
  facts: ['The Darvaza gas crater ("Door to Hell") has been burning since 1971.'],
  sources: ['https://en.wikipedia.org/wiki/Turkmen_language'],
}

export const languages = [az, uz, tk]
