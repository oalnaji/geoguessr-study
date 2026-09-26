import type { Script } from '../types'
import { L } from './helpers'

export const armenian: Script = {
  id: 'armenian',
  name: 'Armenian',
  nativeName: 'Հայոց գրեր',
  kind: 'alphabet',
  direction: 'left to right',
  area: 'Caucasus & Middle East',
  showcase: 'Հայաստան',
  languages: [{ name: 'Armenian' }],
  whereUsed: 'Armenia and Nagorno-Karabakh historically, plus the Armenian diaspora (Los Angeles, Beirut, Marseille, Moscow).',
  recognise: [
    'Lowercase looks like Latin handwriting made of "n", "u" and "h" shapes: ն ս ր ի ո ւ.',
    'Many letters have a hook or tail dropping below the line: փ ք ֆ յ.',
    'The word "and" is a single ligature և, very common on signs.',
  ],
  lookalikes: [
    { script: 'georgian', tell: 'Georgian letters are rounder and sit on the line like bubbles (ა ბ გ). Armenian looks more like a row of n/u/h shapes. Georgian has no capitals; Armenian has capitals (Ա Բ Գ).' },
  ],
  sections: [
    {
      title: 'Alphabet (Eastern Armenian pronunciation)',
      letters: L('ա=a բ=b գ=g դ=d ե=ye/e զ=z է=e ը=ə թ=tʰ ժ=zh ի=i լ=l խ=kh ծ=ts կ=k հ=h ձ=dz ղ=gh ճ=ch մ=m յ=y ն=n շ=sh ո=vo/o չ=chʰ պ=p ջ=j ռ=rr_(trilled) ս=s վ=v տ=t ր=r ց=tsʰ ւ=w_(in_ու_=_u) փ=pʰ ք=kʰ օ=o ֆ=f և=ev_(and)'),
    },
  ],
  history: [
    'Created around 405 AD by the monk Mesrop Mashtots so that the Bible and liturgy could be written in Armenian. Armenia had become the first state to adopt Christianity as its official religion (about 301 AD), and a native script helped the church resist Persian and Greek influence.',
    'The original 36 letters have hardly changed in 1,600 years; օ and ֆ were added in the Middle Ages. The script is a strong symbol of national identity, and there is a monument to the alphabet at Artashavan, with giant stone letters.',
  ],
  facts: [
    'Armenia has a national holiday for the Holy Translators, who used the new alphabet to translate the Bible.',
    'There are two standard spellings: Eastern (Armenia, reformed in Soviet times) and Western (diaspora, classical spelling).',
  ],
  sources: ['https://en.wikipedia.org/wiki/Armenian_alphabet'],
}

export const georgian: Script = {
  id: 'georgian',
  name: 'Georgian',
  nativeName: 'მხედრული',
  kind: 'alphabet',
  direction: 'left to right',
  area: 'Caucasus & Middle East',
  showcase: 'საქართველო',
  languages: [{ name: 'Georgian' }, { name: 'Mingrelian' }, { name: 'Svan' }],
  whereUsed: 'Georgia.',
  recognise: [
    'Round, bubbly letters with no capitals, many open at the bottom or looped: ა ბ გ დ ე ო.',
    'Letters sit on a line but some rise above (ბ დ) or drop below (ფ ყ), so a word has an uneven, wavy outline.',
    'Very few straight lines compared with Armenian.',
  ],
  lookalikes: [
    { script: 'armenian', tell: 'Armenian has capitals and looks like n/u/h shapes. Georgian is round and bubbly with no capitals.' },
    { script: 'malayalam', tell: 'Malayalam is also very round, but letters join into big clusters with loops on top, and Malayalam words are much longer.' },
  ],
  sections: [
    {
      title: 'Mkhedruli alphabet',
      note: 'An apostrophe marks an ejective consonant (a sharp, popping sound).',
      letters: L("ა=a ბ=b გ=g დ=d ე=e ვ=v ზ=z თ=tʰ ი=i კ=k' ლ=l მ=m ნ=n ო=o პ=p' ჟ=zh რ=r ს=s ტ=t' უ=u ფ=pʰ ქ=kʰ ღ=gh ყ=q' შ=sh ჩ=chʰ ც=tsʰ ძ=dz წ=ts' ჭ=ch' ხ=kh ჯ=j ჰ=h"),
    },
  ],
  history: [
    'Georgian has had three scripts. The oldest, Asomtavruli, dates from at least the 5th century AD (the earliest dated inscription is from 430). Nuskhuri developed from it for church books, and the modern Mkhedruli ("military" or "secular") script appeared by the 10th century and became the everyday script.',
    'Mkhedruli has one case. In 2018 the Unicode standard added Mtavruli, capital-like forms of Mkhedruli used for titles and headings, so you may see all-caps Georgian on some signs.',
  ],
  facts: [
    'The three Georgian scripts are on UNESCO\'s list of the Intangible Cultural Heritage of Humanity (2016).',
    'Georgian words can have huge consonant clusters, e.g. გვფრცქვნი (gvprtskvni, "you peel us").',
  ],
  sources: ['https://en.wikipedia.org/wiki/Georgian_scripts'],
}

export const hebrew: Script = {
  id: 'hebrew',
  name: 'Hebrew',
  nativeName: 'אָלֶף־בֵּית עִבְרִי',
  kind: 'abjad',
  direction: 'right to left',
  area: 'Caucasus & Middle East',
  showcase: 'ישראל',
  languages: [{ name: 'Hebrew' }, { name: 'Yiddish' }, { name: 'Ladino' }],
  whereUsed: 'Israel (signs are usually Hebrew + Arabic + English), and Jewish communities worldwide.',
  recognise: [
    'Square, blocky letters that do not join, written right to left: ש ל ו ם.',
    'Most letters are built from a horizontal top and a vertical right side, like an upside-down L: ד ר ה ת.',
    'Vowels are usually not written; you see only consonants (dots for vowels appear in children\'s books and poetry).',
  ],
  lookalikes: [
    { script: 'arabic', tell: 'Arabic letters join into flowing cursive words and use many dots. Hebrew letters stand apart and look square.' },
  ],
  sections: [
    {
      title: 'Alphabet',
      letters: L('א=silent/ʔ ב=b/v ג=g ד=d ה=h ו=v/o/u ז=z ח=kh ט=t י=y/i כ=k/kh ל=l מ=m נ=n ס=s ע=silent/ʔ פ=p/f צ=ts ק=k ר=r ש=sh/s ת=t'),
    },
    {
      title: 'Final forms',
      note: 'Five letters change shape at the end of a word.',
      letters: L('ך=kh_(final_כ) ם=m_(final_מ) ן=n_(final_נ) ף=f_(final_פ) ץ=ts_(final_צ)'),
    },
  ],
  history: [
    'The square Hebrew script used today was borrowed from Aramaic during the Babylonian exile (6th century BC), replacing the older Paleo-Hebrew script. It was kept for scripture and scholarship through two thousand years in which Hebrew was hardly spoken day to day.',
    'Hebrew was revived as a spoken language in the late 19th and early 20th centuries, a movement associated with Eliezer Ben-Yehuda. It became an official language of Israel in 1948, and is the only example of a liturgical language becoming a native everyday language again.',
  ],
  facts: [
    'Yiddish, a Germanic language, is written in Hebrew letters, and unlike Hebrew it writes vowels using letters such as א and ע.',
    'Israeli road signs are usually trilingual: Hebrew, Arabic and English.',
  ],
  sources: ['https://en.wikipedia.org/wiki/Hebrew_alphabet'],
}

export const arabic: Script = {
  id: 'arabic',
  name: 'Arabic',
  nativeName: 'الأبجدية العربية',
  kind: 'abjad',
  direction: 'right to left',
  area: 'Caucasus & Middle East',
  showcase: 'العربية',
  languages: [{ name: 'Arabic' }, { name: 'Persian' }, { name: 'Urdu' }, { name: 'Pashto' }, { name: 'Kurdish (Sorani)' }, { name: 'Uyghur' }],
  whereUsed:
    'North Africa, the Middle East, Iran, Afghanistan, Pakistan, and Xinjiang in China (Uyghur). Also on trilingual signs in Israel.',
  recognise: [
    'Flowing cursive: letters join along a baseline and change shape depending on their position in the word.',
    'Lots of dots above and below letters: ب ت ث ن ي differ only by dots.',
    'Written right to left, and words often end in a long swooping tail: ن ي ى.',
  ],
  lookalikes: [
    { script: 'hebrew', tell: 'Hebrew is square and unjoined. Arabic is cursive and dotted.' },
    { script: 'thaana', tell: 'Thaana (Maldives) is also right to left, but letters do not join and every letter has a slanted vowel stroke above or below.' },
  ],
  sections: [
    {
      title: 'Arabic alphabet',
      note: 'Shown in their standalone forms. Each letter has up to four forms depending on position.',
      letters: L('ا=a/ā ب=b ت=t ث=th ج=j ح=ḥ خ=kh د=d ذ=dh ر=r ز=z س=s ش=sh ص=ṣ ض=ḍ ط=ṭ ظ=ẓ ع=ʿ غ=gh ف=f ق=q ك=k ل=l م=m ن=n ه=h و=w/ū ي=y/ī ة=-a_(ta_marbuta)'),
    },
    {
      title: 'Letters that identify the language',
      note: 'Letters not used in standard Arabic are strong clues.',
      letters: [
        { char: 'پ', roman: 'p', note: 'Persian, Urdu, Pashto, Kurdish, Uyghur (not Arabic)' },
        { char: 'چ', roman: 'ch', note: 'Persian, Urdu, Pashto, Kurdish, Uyghur' },
        { char: 'ژ', roman: 'zh', note: 'Persian, Urdu, Pashto, Kurdish, Uyghur' },
        { char: 'گ', roman: 'g', note: 'Persian, Urdu, Kurdish, Uyghur' },
        { char: 'ٹ', roman: 'ṭ', note: 'Urdu only' },
        { char: 'ڈ', roman: 'ḍ', note: 'Urdu only' },
        { char: 'ڑ', roman: 'ṛ', note: 'Urdu only' },
        { char: 'ے', roman: 'ē', note: 'Urdu: the "bari ye" swooping back to the right at word ends' },
        { char: 'ټ', roman: 'ṭ', note: 'Pashto only (t with a ring)' },
        { char: 'ښ', roman: 'x/ṣ̌', note: 'Pashto only' },
        { char: 'ځ', roman: 'dz', note: 'Pashto only' },
        { char: 'ڕ', roman: 'rr', note: 'Sorani Kurdish' },
        { char: 'ڵ', roman: 'll', note: 'Sorani Kurdish' },
        { char: 'ێ', roman: 'ê', note: 'Sorani Kurdish' },
        { char: 'ۆ', roman: 'o', note: 'Sorani Kurdish, Uyghur' },
        { char: 'ې', roman: 'ë', note: 'Uyghur only' },
        { char: 'ۈ', roman: 'ü', note: 'Uyghur only' },
        { char: 'ئ', roman: 'vowel carrier', note: 'Very frequent in Uyghur, which writes every vowel' },
      ],
    },
  ],
  history: [
    'Arabic script developed from the Nabataean alphabet (itself from Aramaic) by the 4th–6th centuries AD. The Qur\'an, compiled in the 7th century, fixed it as the script of Islam, and it spread with Islam from Spain to Indonesia.',
    'Early Arabic writing had no dots, so several letters looked identical; dots and vowel marks were added in the 7th–8th centuries to prevent misreading the Qur\'an. Peoples who adopted the script for non-Arabic languages added more dotted letters for their own sounds: Persians added پ چ ژ گ, Urdu added retroflex letters with a small ط on top (ٹ ڈ ڑ).',
    'Some languages have left the script: Turkish switched to Latin in 1928, Malay and Swahili moved to Latin under colonial rule, and Soviet Central Asia switched to Latin and then Cyrillic.',
  ],
  facts: [
    'Arabic numerals (0–9) came to Europe from India through the Arab world; Arab countries in the east mostly use a different set of digits (٠١٢٣٤٥٦٧٨٩).',
    'Urdu is usually written in the Nastaliq style, which slopes down from right to left, so words look like they hang diagonally.',
  ],
  sources: ['https://en.wikipedia.org/wiki/Arabic_script', 'https://en.wikipedia.org/wiki/Arabic_alphabet'],
}

export const thaana: Script = {
  id: 'thaana',
  name: 'Thaana',
  nativeName: 'ތާނަ',
  kind: 'alphabet',
  direction: 'right to left',
  area: 'Caucasus & Middle East',
  showcase: 'ދިވެހިރާއްޖެ',
  languages: [{ name: 'Dhivehi' }],
  whereUsed: 'The Maldives.',
  recognise: [
    'Right to left like Arabic, but letters do not join.',
    'Short slanted strokes above or below every letter (the vowel marks), so a line of text looks like a row of hooks with little dashes.',
  ],
  lookalikes: [
    { script: 'arabic', tell: 'Arabic letters join into words. Thaana letters stand apart, and nearly every one has a slanted vowel mark.' },
  ],
  sections: [
    {
      title: 'Consonants (in traditional order)',
      note: 'The first nine letters come from Arabic numerals 1–9, and the next nine from Dhivehi numerals.',
      letters: L('ހ=h ށ=sh ނ=n ރ=r ބ=b ޅ=lh ކ=k އ=alifu_(vowel_carrier) ވ=v މ=m ފ=f ދ=dh ތ=th ލ=l ގ=g ޏ=gn ސ=s ޑ=d ޒ=z ޓ=t ޔ=y ޕ=p ޖ=j ޗ=ch'),
    },
  ],
  history: [
    'Thaana appeared in the Maldives around the 17th–18th century, replacing the older Dhives Akuru script. Its design is unusual: many of the first letters are based on Arabic and Indic numeral shapes, and vowel marks were taken from Arabic.',
    'The Maldives is a Muslim nation, and Thaana was built so that Dhivehi and Arabic words could sit side by side in the same right-to-left text.',
  ],
  facts: ['Only one language, Dhivehi, uses Thaana, spoken by around half a million people.'],
  sources: ['https://en.wikipedia.org/wiki/Thaana'],
}
