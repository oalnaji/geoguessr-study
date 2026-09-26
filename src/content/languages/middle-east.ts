import type { Group, Language } from '../types'

// Sign words for these languages live in vocab.ts.

export const arabicScript: Group = {
  id: 'arabic-script',
  name: 'Arabic-script languages',
  members: ['ar', 'fa', 'ur', 'ps', 'ckb', 'ug'],
  intro: [
    'Arabic script spread with Islam, and many non-Arabic languages adopted it. Each added letters for sounds Arabic lacks, which is how you tell them apart: Persian added پ چ ژ گ, Urdu added retroflex letters with a small ط above, Pashto added letters with rings and dots, Kurdish and Uyghur added vowel letters.',
  ],
  checklist: [
    { look: 'ې ۈ ۇ and ئ everywhere (all vowels written)', then: 'Uyghur (Xinjiang, China)' },
    { look: 'ڕ ڵ ێ ۆ ە', then: 'Kurdish (Sorani): Iraqi Kurdistan, western Iran' },
    { look: 'ټ ډ ړ ښ ږ ځ څ ڼ (letters with rings or extra dots)', then: 'Pashto (Afghanistan, north-west Pakistan)' },
    { look: 'ٹ ڈ ڑ (small ط above) or ے at word ends', then: 'Urdu (Pakistan, northern India)' },
    { look: 'پ چ ژ گ but none of the above', then: 'Persian (Iran, Afghanistan as Dari)' },
    { look: 'ة (round ta at word ends), ال "al-" everywhere, no پ چ گ', then: 'Arabic' },
  ],
  traps: [
    'Persian and Urdu share پ چ ژ گ; Urdu is recognisable by ٹ ڈ ڑ ے and its slanting Nastaliq style.',
    'Arabic signs in the Gulf often use Latin letters too, and sometimes use پ or گ for foreign names.',
    'Morocco and Algeria mix Arabic with French and Tifinagh on signs.',
  ],
}

export const hebrewScript: Group = {
  id: 'hebrew-script',
  name: 'Hebrew script',
  members: ['he', 'yi'],
  intro: [
    'Hebrew and Yiddish share the Hebrew alphabet but are unrelated languages: Hebrew is Semitic, Yiddish is Germanic (a relative of German). Yiddish writes its vowels with letters, so it looks "busier".',
  ],
  checklist: [
    { look: 'אַ אָ (alef with a line or small T below), ײ ױ װ', then: 'Yiddish' },
    { look: 'Consonants only, few or no vowel marks, often next to Arabic and English', then: 'Hebrew (Israel)' },
  ],
  traps: ['Israeli road signs show Hebrew, Arabic and English together. Yiddish is mainly seen in Hasidic neighbourhoods (Jerusalem, Brooklyn, Antwerp).'],
}

export const caucasus: Group = {
  id: 'caucasus',
  name: 'Caucasus',
  members: ['hy', 'ka'],
  intro: [
    'Armenian and Georgian are neighbours with their own unique scripts, both created around the 5th century AD after their kingdoms converted to Christianity. The languages are unrelated: Armenian is Indo-European, Georgian is Kartvelian.',
  ],
  checklist: [
    { look: 'Letters like n, u, h with hooks below (ն ս ր հ), capital letters', then: 'Armenian' },
    { look: 'Round, bubbly letters with no capitals (ა ბ გ ო)', then: 'Georgian' },
  ],
  traps: ['Both countries also use Russian and English on some signs. Azerbaijan, the third South Caucasus country, uses Latin script (see Turkic).'],
}

export const ar: Language = {
  id: 'ar',
  name: 'Arabic',
  nativeName: 'العربية',
  script: 'arabic',
  family: ['Afro-Asiatic', 'Semitic', 'Central Semitic'],
  groups: ['arabic-script'],
  confusedWith: ['fa', 'ur', 'he'],
  giveaways: [
    { sign: 'ال', tip: 'The definite article "al-", at the start of a huge number of words and place names.' },
    { sign: 'ة', tip: 'Ta marbuta, a round letter at the end of feminine words (مدينة, "city"). Rare in Persian and Urdu.' },
    { sign: 'no پ چ ژ گ', tip: 'Standard Arabic has no p, ch, zh or g letters.' },
    { sign: 'شارع', tip: '"Shari\'", street, on street signs.' },
  ],
  regions: [
    { country: 'EG', status: 'official', signage: 'common' },
    { country: 'SA', status: 'official', signage: 'common' },
    { country: 'AE', status: 'official', signage: 'common', note: 'Signs are bilingual Arabic–English.' },
    { country: 'QA', status: 'official', signage: 'common' },
    { country: 'OM', status: 'official', signage: 'common' },
    { country: 'JO', status: 'official', signage: 'common', note: 'Signs are bilingual Arabic–English.' },
    { country: 'IQ', status: 'official', signage: 'common' },
    { country: 'LB', status: 'official', signage: 'common', note: 'French is also common on signs.' },
    { country: 'TN', status: 'official', signage: 'common', note: 'Signs are usually Arabic–French.' },
    { country: 'MA', status: 'official', signage: 'common', note: 'With Tifinagh and French.' },
    { country: 'DZ', status: 'official', signage: 'common' },
    { country: 'IL', status: 'minority', signage: 'common', note: 'On trilingual Hebrew–Arabic–English road signs.' },
    { country: 'PS', status: 'official', signage: 'common' },
  ],
  signWords: {},
  history: [
    'Classical Arabic was fixed by the Qur\'an in the 7th century, and spread with the Arab conquests from Spain to Central Asia. Modern Standard Arabic, used on signs and in writing, is based on it.',
    'Spoken Arabic varies greatly by country (Egyptian, Levantine, Maghrebi, Gulf…), but signs use the same standard written language everywhere, so the country clues come from the Latin second language and the style of signs.',
  ],
  place: [
    { title: 'Why is French on signs in North Africa and Lebanon?', text: 'France ruled Algeria (1830–1962) and held protectorates over Tunisia and Morocco, and a mandate over Lebanon and Syria after World War I. French remains a language of business and education there, so signs pair Arabic with French rather than English.' },
  ],
  connections: ['Closest relatives: Maltese (descended from Arabic), then Hebrew and Aramaic.'],
  facts: ['Arabic numerals as used in Europe (0–9) differ from the "Eastern Arabic" digits (٠١٢٣) used on many signs in the Middle East.'],
  sources: ['https://en.wikipedia.org/wiki/Arabic'],
}

export const fa: Language = {
  id: 'fa',
  name: 'Persian',
  nativeName: 'فارسی',
  script: 'arabic',
  family: ['Indo-European', 'Indo-Iranian', 'Iranian', 'Western Iranian'],
  groups: ['arabic-script'],
  confusedWith: ['ar', 'ur', 'ps'],
  giveaways: [
    { sign: 'پ چ ژ گ', tip: 'The four letters Persian added to Arabic (p, ch, zh, g).' },
    { sign: 'ی ک', tip: 'Persian writes ye without dots at the end (ی) and kaf as ک.' },
    { sign: 'خیابان', tip: '"Khiyaban", street (Arabic uses شارع).' },
    { sign: '-آباد', tip: '"-abad", a very common Persian place-name ending: Eslamabad, Khorramabad.' },
  ],
  regions: [
    { country: 'IR', status: 'official', signage: 'common' },
    { country: 'AF', status: 'official', signage: 'common', note: 'As Dari, alongside Pashto.' },
    { country: 'TJ', status: 'official', signage: 'common', note: 'As Tajik, written in Cyrillic.' },
  ],
  signWords: {},
  history: [
    'Persian was the language of the Persian empires and later the prestige language of the eastern Islamic world, from the Ottoman court to Mughal India. After the Arab conquest it was written in Arabic script with four added letters.',
    'Persian is an Indo-European language, related to English and Hindi, not to Arabic, although it borrowed many Arabic words.',
  ],
  place: [
    { title: 'Why is Persian spoken in Afghanistan and Tajikistan?', text: 'Persian was the language of culture and government across Central Asia for a thousand years. Afghanistan\'s Dari and Tajikistan\'s Tajik are varieties of it; Tajik is written in Cyrillic because Tajikistan was part of the USSR.' },
  ],
  connections: ['Closest relatives: Dari and Tajik (varieties of Persian), then Kurdish and Pashto.'],
  facts: ['The suffix "-stan" (land of) in Afghanistan, Pakistan and Kazakhstan comes from Persian.'],
  sources: ['https://en.wikipedia.org/wiki/Persian_language'],
}

export const ur: Language = {
  id: 'ur',
  name: 'Urdu',
  nativeName: 'اردو',
  script: 'arabic',
  family: ['Indo-European', 'Indo-Iranian', 'Indo-Aryan', 'Central'],
  groups: ['arabic-script'],
  confusedWith: ['fa', 'ar', 'hi'],
  giveaways: [
    { sign: 'ٹ ڈ ڑ', tip: 'Retroflex letters with a small ط on top: only Urdu (and other South Asian languages).' },
    { sign: 'ے', tip: 'Bari ye, a long tail swinging back to the right at the end of words.' },
    { sign: 'ھ', tip: 'Do-chashmi he, used to mark aspiration (بھ = bh).' },
    { sign: 'slanting Nastaliq', tip: 'Urdu is usually printed in the Nastaliq style, where words slope down to the left.' },
  ],
  regions: [
    { country: 'PK', status: 'official', signage: 'common', note: 'Alongside English; most road signs are in English.' },
    { country: 'IN', area: 'Telangana, Uttar Pradesh, Bihar, Jammu and Kashmir', status: 'co-official', signage: 'sometimes' },
  ],
  signWords: {},
  history: [
    'Urdu and Hindi are two standard forms of the same spoken language (Hindustani), which developed around Delhi in the Mughal era with a large Persian and Arabic vocabulary. Urdu is written in Arabic script, Hindi in Devanagari.',
    'At independence in 1947, Urdu became the national language of Pakistan, although it is the mother tongue of fewer than 10% of Pakistanis.',
  ],
  place: [
    { title: 'Why does India have Urdu signs too?', text: 'Urdu was the language of Muslim culture across northern India. Many Urdu speakers stayed in India after Partition, and Urdu is an official language in several states, so it appears on some signs in Hyderabad, Lucknow and Srinagar.' },
  ],
  connections: ['Mutually intelligible with Hindi when spoken. Related to Punjabi and other Indo-Aryan languages.'],
  facts: ['"Urdu" comes from a Turkic word for "army camp", the same root as English "horde".'],
  sources: ['https://en.wikipedia.org/wiki/Urdu'],
}

export const ps: Language = {
  id: 'ps',
  name: 'Pashto',
  nativeName: 'پښتو',
  script: 'arabic',
  family: ['Indo-European', 'Indo-Iranian', 'Iranian', 'Eastern Iranian'],
  groups: ['arabic-script'],
  confusedWith: ['fa', 'ur'],
  giveaways: [
    { sign: 'ټ ډ ړ ڼ', tip: 'Letters with a small ring below: unique to Pashto.' },
    { sign: 'ښ ږ', tip: 'Letters with a dot above and below.' },
    { sign: 'ځ څ', tip: 'Letters with three dots or hamza on top.' },
  ],
  regions: [
    { country: 'AF', status: 'official', signage: 'common' },
    { country: 'PK', area: 'Khyber Pakhtunkhwa, northern Balochistan', status: 'regional', signage: 'sometimes' },
  ],
  signWords: {},
  history: [
    'Pashto is the language of the Pashtuns, who live on both sides of the Afghanistan–Pakistan border. It has a strong oral poetic tradition; the 17th-century poet-warrior Khushal Khan Khattak is a national hero.',
  ],
  place: [
    { title: 'Why are Pashtuns split between two countries?', text: 'The Durand Line, agreed in 1893 between British India and the Emir of Afghanistan, cut through Pashtun lands. It became the Afghanistan–Pakistan border, which Afghanistan has never formally recognised.' },
  ],
  connections: ['Related to Persian and Kurdish (Iranian branch).'],
  facts: ['There are more Pashto speakers in Pakistan than in Afghanistan.'],
  sources: ['https://en.wikipedia.org/wiki/Pashto'],
}

export const ckb: Language = {
  id: 'ckb',
  name: 'Kurdish (Sorani)',
  nativeName: 'کوردی',
  script: 'arabic',
  family: ['Indo-European', 'Indo-Iranian', 'Iranian', 'Western Iranian'],
  groups: ['arabic-script'],
  confusedWith: ['fa', 'ar'],
  giveaways: [
    { sign: 'ڕ ڵ', tip: 'Letters with a small v-shaped mark: rolled r and heavy l. Unique to Kurdish.' },
    { sign: 'ێ ۆ ە', tip: 'Vowel letters: Kurdish writes its vowels, unlike Arabic and Persian.' },
    { sign: 'Kurdistan flag', tip: 'Signs in Iraqi Kurdistan often appear with the red-white-green flag with a sun.' },
  ],
  regions: [
    { country: 'IQ', area: 'Kurdistan Region (Erbil, Sulaymaniyah, Duhok)', status: 'official', signage: 'common' },
    { country: 'IR', area: 'Kurdistan and Kermanshah provinces', status: 'minority', signage: 'rare' },
  ],
  signWords: {},
  history: [
    'Kurdish is spoken by around 30–40 million Kurds, mostly in Turkey, Iraq, Iran and Syria. Sorani, the central variety, is written in a modified Arabic script and is official in the Kurdistan Region of Iraq.',
    'Kurmanji, the northern variety spoken in Turkey and Syria, is written in Latin script instead, so the same language appears in two scripts.',
  ],
  place: [
    { title: 'Why do the Kurds not have their own state?', text: 'After World War I the Treaty of Sèvres (1920) proposed a Kurdish state, but the Treaty of Lausanne (1923) replaced it, and Kurdish lands were divided between Turkey, Iraq, Syria and Iran. Iraq\'s Kurdistan Region gained autonomy after 1991.' },
  ],
  connections: ['Related to Persian, Zaza and Balochi.'],
  facts: ['Kurdish is one of very few languages in the Middle East written with a full set of vowel letters in Arabic script.'],
  sources: ['https://en.wikipedia.org/wiki/Sorani_Kurdish'],
}

export const ug: Language = {
  id: 'ug',
  name: 'Uyghur',
  nativeName: 'ئۇيغۇرچە',
  script: 'arabic',
  family: ['Turkic', 'Karluk'],
  groups: ['arabic-script'],
  confusedWith: ['ar', 'fa', 'ckb'],
  giveaways: [
    { sign: 'ئ', tip: 'A hamza on a tooth before vowels, extremely frequent: Uyghur starts every vowel-initial word with it.' },
    { sign: 'ې ۈ ۇ ۆ', tip: 'Vowel letters: Uyghur writes every vowel.' },
    { sign: 'Chinese above', tip: 'In Xinjiang, signs usually show Chinese and Uyghur together.' },
  ],
  regions: [{ country: 'CN', area: 'Xinjiang', status: 'co-official', signage: 'common' }],
  signWords: {},
  history: [
    'Uyghur is a Turkic language of the oases of the Tarim Basin, on the old Silk Road. It has been written in several scripts, including the Old Uyghur script (the ancestor of the Mongolian script), Arabic, Cyrillic and Latin.',
  ],
  place: [
    { title: 'Why is a Turkic language written in Arabic script in China?', text: 'The Tarim Basin oases converted to Islam from the 10th century and adopted the Arabic script. The region came under Qing Chinese control in the 18th century, but the local language and script continued.' },
  ],
  connections: ['Closest relative: Uzbek. Then other Turkic languages.'],
  facts: ['Kashgar and Urumqi signs show bilingual Chinese–Uyghur text.'],
  sources: ['https://en.wikipedia.org/wiki/Uyghur_language'],
}

export const he: Language = {
  id: 'he',
  name: 'Hebrew',
  nativeName: 'עברית',
  script: 'hebrew',
  family: ['Afro-Asiatic', 'Semitic', 'Northwest Semitic', 'Canaanite'],
  groups: ['hebrew-script'],
  confusedWith: ['yi', 'ar'],
  giveaways: [
    { sign: 'square letters', tip: 'Blocky, unjoined letters written right to left.' },
    { sign: 'three languages', tip: 'Israeli road signs show Hebrew on top, then Arabic, then English.' },
    { sign: 'רחוב / שדרות', tip: '"Rehov" (street) and "Sderot" (boulevard) on street signs.' },
  ],
  regions: [{ country: 'IL', status: 'official', signage: 'common' }],
  signWords: {},
  history: [
    'Hebrew was the language of ancient Israel and the Hebrew Bible. It stopped being spoken as an everyday language around the 2nd century AD but continued as the language of prayer and scholarship for nearly 2,000 years.',
    'In the late 19th century, Jewish immigrants to Ottoman Palestine revived Hebrew as a spoken language. It became an official language of Israel in 1948.',
  ],
  place: [
    { title: 'Why are Israeli signs in three languages?', text: 'Hebrew and Arabic were both official languages from the British Mandate and early Israel (Arabic has had "special status" since 2018), and English is used for visitors and as an international link language.' },
  ],
  connections: ['Closest relatives: Phoenician (extinct) and Aramaic. Then Arabic.'],
  facts: ['Modern Hebrew has around nine million speakers, from almost none in 1880.'],
  sources: ['https://en.wikipedia.org/wiki/Hebrew_language'],
}

export const yi: Language = {
  id: 'yi',
  name: 'Yiddish',
  nativeName: 'ייִדיש',
  script: 'hebrew',
  family: ['Indo-European', 'Germanic', 'West Germanic', 'High German'],
  groups: ['hebrew-script'],
  confusedWith: ['he', 'de'],
  giveaways: [
    { sign: 'אַ אָ', tip: 'Alef with small marks underneath, used as vowels. Not used in Modern Hebrew.' },
    { sign: 'ײ ױ װ', tip: 'Double letters (double yod, vav-yod, double vav).' },
    { sign: 'ע as a vowel', tip: 'Yiddish uses ע for the "e" sound.' },
  ],
  regions: [
    { country: 'IL', area: 'Haredi neighbourhoods (Jerusalem, Bnei Brak)', status: 'minority', signage: 'sometimes' },
    { country: 'US', area: 'New York (Williamsburg, Borough Park), Kiryas Joel', status: 'minority', signage: 'sometimes' },
    { country: 'BE', area: 'Antwerp', status: 'minority', signage: 'rare' },
  ],
  signWords: {},
  history: [
    'Yiddish developed around the 10th century among Jews in the Rhineland, mixing medieval German with Hebrew, Aramaic and later Slavic words. It moved east with Jewish communities into Poland, Lithuania and Ukraine, and by 1900 had around 11 million speakers.',
    'The Holocaust killed most Yiddish speakers. Today it is mainly spoken in Hasidic communities.',
  ],
  place: [
    { title: 'Why is a Germanic language written in Hebrew letters?', text: 'Jewish communities learned Hebrew letters for prayer and study, so they naturally used them to write their everyday German-based language too.' },
  ],
  connections: ['Closest relative: German. Many Hebrew and Slavic loanwords.'],
  facts: ['English words from Yiddish include bagel, glitch, schmooze and klutz.'],
  sources: ['https://en.wikipedia.org/wiki/Yiddish'],
}

export const hy: Language = {
  id: 'hy',
  name: 'Armenian',
  nativeName: 'հայերեն',
  script: 'armenian',
  family: ['Indo-European', 'Armenian'],
  groups: ['caucasus'],
  confusedWith: ['ka'],
  giveaways: [
    { sign: 'n/u/h shapes', tip: 'ն ս ր հ: Armenian lowercase looks like Latin handwriting.' },
    { sign: 'և', tip: 'The "and" ligature, very common.' },
    { sign: 'փողոց', tip: '"Poghots", street, on street signs.' },
  ],
  regions: [
    { country: 'AM', status: 'official', signage: 'common', note: 'Road signs add Latin transliteration.' },
    { country: 'GE', area: 'Samtskhe-Javakheti', status: 'minority', signage: 'rare' },
  ],
  signWords: {},
  history: [
    'Armenian forms its own branch of the Indo-European family. The alphabet was created in 405 AD by Mesrop Mashtots so the Bible could be translated.',
    'The 1915 Armenian genocide in the Ottoman Empire destroyed Western Armenian communities in Anatolia; survivors founded the large diaspora in Lebanon, France and the US, which still uses Western Armenian.',
  ],
  place: [
    { title: 'Why do so many Armenians live abroad?', text: 'The genocide and earlier persecution drove Armenians from their historic homeland in eastern Anatolia. Today more Armenians live outside Armenia than in it.' },
  ],
  connections: ['No close relatives; it forms its own branch of Indo-European, sometimes grouped with Greek.'],
  facts: ['Mount Ararat, the national symbol of Armenia, lies across the border in Turkey.'],
  sources: ['https://en.wikipedia.org/wiki/Armenian_language'],
}

export const ka: Language = {
  id: 'ka',
  name: 'Georgian',
  nativeName: 'ქართული',
  script: 'georgian',
  family: ['Kartvelian'],
  groups: ['caucasus'],
  confusedWith: ['hy'],
  giveaways: [
    { sign: 'round letters', tip: 'ა ბ გ ო: bubbly script with no capitals.' },
    { sign: 'ქუჩა', tip: '"Kucha", street.' },
    { sign: '-ი endings', tip: 'Most Georgian nouns end in -i: თბილისი (Tbilisi), ბათუმი (Batumi).' },
  ],
  regions: [{ country: 'GE', status: 'official', signage: 'common', note: 'Road signs add Latin transliteration.' }],
  signWords: {},
  history: [
    'Georgian belongs to the small Kartvelian family, unrelated to any other language family. The first Georgian inscriptions date from the 5th century AD.',
    'Georgia was part of the Russian Empire and then the USSR, and Russian is still understood widely, but signs are in Georgian and English.',
  ],
  place: [
    { title: 'Why is Georgia so linguistically unique?', text: 'The Caucasus mountains are one of the most linguistically diverse regions on earth: valleys isolated by high ridges preserved dozens of languages from families found nowhere else.' },
  ],
  connections: ['Relatives: Mingrelian, Svan and Laz (Kartvelian family).'],
  facts: ['Georgian has no grammatical gender and no capital letters (though a capital-like "Mtavruli" form exists for titles).'],
  sources: ['https://en.wikipedia.org/wiki/Georgian_language'],
}

export const dv: Language = {
  id: 'dv',
  name: 'Dhivehi',
  nativeName: 'ދިވެހި',
  script: 'thaana',
  family: ['Indo-European', 'Indo-Iranian', 'Indo-Aryan', 'Insular'],
  groups: [],
  confusedWith: ['ar'],
  giveaways: [
    { sign: 'Thaana script', tip: 'Right to left, unjoined letters, each with a slanted vowel mark. Only used in the Maldives.' },
    { sign: '-dhoo / -fushi', tip: 'Common endings in romanised island names: Kulhudhuffushi, Maafushi, Thinadhoo.' },
  ],
  regions: [{ country: 'MV', status: 'official', signage: 'common', note: 'Often with English.' }],
  signWords: {},
  history: [
    'Dhivehi is an Indo-Aryan language, closely related to Sinhala, brought to the Maldives by settlers from Sri Lanka and southern India over 2,000 years ago. The Maldives converted to Islam in the 12th century.',
  ],
  place: [
    { title: 'Why is Dhivehi related to Sinhala?', text: 'The Maldives were settled from Sri Lanka, about 700 km away, so Dhivehi and Sinhala share an ancestor.' },
  ],
  connections: ['Closest relative: Sinhala.'],
  facts: ['The Maldives is the lowest-lying country in the world.'],
  sources: ['https://en.wikipedia.org/wiki/Maldivian_language'],
}

export const zgh: Language = {
  id: 'zgh',
  name: 'Tamazight (Berber)',
  nativeName: 'ⵜⴰⵎⴰⵣⵉⵖⵜ',
  script: 'tifinagh',
  family: ['Afro-Asiatic', 'Berber'],
  groups: [],
  confusedWith: ['ar'],
  giveaways: [
    { sign: 'ⵣ', tip: 'The symbol of Amazigh identity, like a stick figure. Very common letter.' },
    { sign: 'three scripts', tip: 'Moroccan official signs show Arabic, Tifinagh and often French.' },
    { sign: 'Aït / Tizi / Tala', tip: 'Berber place-name words in Latin: "people of", "mountain pass", "spring".' },
  ],
  regions: [
    { country: 'MA', status: 'official', signage: 'common', note: 'Official since 2011; Tifinagh on government buildings and many road signs.' },
    { country: 'DZ', area: 'Kabylie', status: 'official', signage: 'sometimes', note: 'Usually written in Latin script in Algeria.' },
  ],
  signWords: {},
  history: [
    'The Berber (Amazigh) languages were spoken across North Africa before the Arab conquests of the 7th century. They survived mainly in the mountains of Morocco and Algeria and among the Tuareg of the Sahara.',
    'Standard Moroccan Tamazight was created from the main Moroccan varieties and made official in the 2011 constitution, written in Neo-Tifinagh.',
  ],
  place: [
    { title: 'Why are Berber languages strongest in the mountains?', text: 'The Atlas and Rif mountains were hard for successive empires to control, so their communities kept their languages while the plains and cities became Arabic-speaking.' },
  ],
  connections: ['Related to Arabic, Hebrew and Hausa within the Afro-Asiatic family, but not closely.'],
  facts: ['Many Moroccan place names are Berber: Marrakesh, Tiznit, Taroudant, Agadir.'],
  sources: ['https://en.wikipedia.org/wiki/Standard_Moroccan_Amazigh'],
}

export const languages = [ar, fa, ur, ps, ckb, ug, he, yi, hy, ka, dv, zgh]
