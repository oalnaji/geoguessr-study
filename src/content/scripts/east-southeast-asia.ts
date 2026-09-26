import type { Script } from '../types'
import { L, zipLetters } from './helpers'

export const thai: Script = {
  id: 'thai',
  name: 'Thai',
  nativeName: 'อักษรไทย',
  kind: 'abugida',
  direction: 'left to right',
  area: 'Southeast Asia',
  showcase: 'ประเทศไทย',
  languages: [{ name: 'Thai' }, { name: 'Southern Thai' }, { name: 'Northern Thai (partly)' }],
  whereUsed: 'Thailand.',
  recognise: [
    'Most letters start with a small loop or circle at the head of the stroke: ก ด ถ ภ.',
    'No spaces between words; spaces separate phrases or sentences.',
    'Vowel and tone marks sit around the consonant: เ แ โ ไ are written before it, and marks go above or below it (อิ อี อุ อู).',
  ],
  lookalikes: [
    { script: 'lao', tell: 'Lao is rounder and simpler, with fewer loops and far fewer letters. Thai letters often have extra serifs, notches and flags (ฎ ฏ ฐ). Lao ຍ and ນ look like softened Thai.' },
    { script: 'khmer', tell: 'Khmer is taller and denser, with "hats" on top and many letters stacked underneath. Thai sits mostly on one line.' },
  ],
  sections: [
    {
      title: 'Consonants (with class)',
      note: 'Every consonant belongs to a class (mid, high, low), which with the tone marks decides the tone of the syllable. Two of the 44 letters (ฃ, ฅ) are obsolete and left out.',
      letters: [
        ...L('ก=k_(mid) ข=kh_(high) ค=kh_(low) ฆ=kh_(low) ง=ng_(low) จ=ch_(mid) ฉ=ch_(high) ช=ch_(low) ซ=s_(low) ฌ=ch_(low) ญ=y_(low)'),
        ...L('ฎ=d_(mid) ฏ=t_(mid) ฐ=th_(high) ฑ=th_(low) ฒ=th_(low) ณ=n_(low) ด=d_(mid) ต=t_(mid) ถ=th_(high) ท=th_(low) ธ=th_(low) น=n_(low)'),
        ...L('บ=b_(mid) ป=p_(mid) ผ=ph_(high) ฝ=f_(high) พ=ph_(low) ฟ=f_(low) ภ=ph_(low) ม=m_(low) ย=y_(low) ร=r_(low) ล=l_(low) ว=w_(low)'),
        ...L('ศ=s_(high) ษ=s_(high) ส=s_(high) ห=h_(high) ฬ=l_(low) อ=silent/o_(mid) ฮ=h_(low)'),
      ],
    },
    {
      title: 'Common vowel signs (shown on อ)',
      letters: L('อะ=a อา=ā อิ=i อี=ī อุ=u อู=ū เอ=e แอ=ae โอ=o ไอ=ai ใอ=ai อำ=am'),
    },
  ],
  history: [
    'Thai script was adapted from Old Khmer script around the 13th century. Tradition credits King Ramkhamhaeng of Sukhothai, whose 1292 inscription is the oldest known Thai text (its authenticity is debated).',
    'Thai kept letters for Sanskrit and Pali sounds that no longer differ in Thai (there are six letters for "th"), which is why it has 44 consonants for about 21 consonant sounds. The spare letters are mostly used in words borrowed from Sanskrit and Pali.',
  ],
  facts: [
    'Thailand was never colonised, and has used its own script continuously.',
    'Thai uses its own digits (๑๒๓), though Arabic numerals are more common on signs.',
  ],
  sources: ['https://en.wikipedia.org/wiki/Thai_script'],
}

export const lao: Script = {
  id: 'lao',
  name: 'Lao',
  nativeName: 'ອັກສອນລາວ',
  kind: 'abugida',
  direction: 'left to right',
  area: 'Southeast Asia',
  showcase: 'ປະເທດລາວ',
  languages: [{ name: 'Lao' }],
  whereUsed: 'Laos. (Also the traditional script of Isan in northeast Thailand, though Thai script is used there today.)',
  recognise: [
    'Like Thai but rounder and plainer, with fewer loops and flourishes: ກ ຂ ຄ ງ.',
    'Only 27 consonants, so the same shapes repeat often.',
  ],
  lookalikes: [
    { script: 'thai', tell: 'Thai letters have more detail: notches, flags and double loops. Lao looks like a simplified, rounded Thai. Signs in Laos often add French or English.' },
  ],
  sections: [
    {
      title: 'Consonants',
      letters: L('ກ=k ຂ=kh ຄ=kh ງ=ng ຈ=ch ສ=s ຊ=s ຍ=ny ດ=d ຕ=t ຖ=th ທ=th ນ=n ບ=b ປ=p ຜ=ph ຝ=f ພ=ph ຟ=f ມ=m ຢ=y ຣ=r ລ=l ວ=w ຫ=h ອ=silent/o ຮ=h'),
    },
  ],
  history: [
    'Lao and Thai scripts share a common ancestor, derived from Old Khmer. Lao spelling was simplified in the 20th century, especially after the communist government came to power in 1975, removing letters kept only for Sanskrit and Pali spelling.',
  ],
  facts: ['Lao and Thai are largely mutually intelligible when spoken, but the scripts differ enough to tell apart.'],
  sources: ['https://en.wikipedia.org/wiki/Lao_script'],
}

export const khmer: Script = {
  id: 'khmer',
  name: 'Khmer',
  nativeName: 'អក្សរខ្មែរ',
  kind: 'abugida',
  direction: 'left to right',
  area: 'Southeast Asia',
  showcase: 'កម្ពុជា',
  languages: [{ name: 'Khmer' }],
  whereUsed: 'Cambodia.',
  recognise: [
    'Tall, dense letters with little "hats" or hooks on top: ក ខ គ ឃ.',
    'Many letters have small subscript forms written underneath, so lines look stacked and crowded.',
    'Looks busier and more ornate than Thai.',
  ],
  lookalikes: [
    { script: 'thai', tell: 'Thai has loops at the start of strokes and sits on one line; Khmer has hats on top and letters stacked below.' },
    { script: 'myanmar', tell: 'Burmese is made of circles; Khmer is angular with hooks.' },
  ],
  sections: [
    {
      title: 'Consonants',
      note: 'Khmer consonants come in two series: a-series (inherent vowel "a") and o-series (inherent vowel "o").',
      letters: L('ក=ka ខ=kha គ=ko ឃ=kho ង=ngo ច=ca ឆ=cha ជ=co ឈ=cho ញ=nyo ដ=da ឋ=tha ឌ=do ឍ=tho ណ=na ត=ta ថ=tha ទ=to ធ=tho ន=no ប=ba ផ=pha ព=po ភ=pho ម=mo យ=yo រ=ro ល=lo វ=vo ស=sa ហ=ha ឡ=la អ=ʔa'),
    },
  ],
  history: [
    'Khmer script developed from the Pallava script of South India, brought to Cambodia by around the 6th century AD. The Khmer Empire (with its capital at Angkor) spread it across mainland Southeast Asia, and it became the parent of Thai and Lao scripts.',
  ],
  facts: ['Khmer has the largest alphabet in the world according to Guinness World Records, with 74 letters counting vowels and signs.'],
  sources: ['https://en.wikipedia.org/wiki/Khmer_script'],
}

export const myanmar: Script = {
  id: 'myanmar',
  name: 'Myanmar (Burmese)',
  nativeName: 'မြန်မာအက္ခရာ',
  kind: 'abugida',
  direction: 'left to right',
  area: 'Southeast Asia',
  showcase: 'မြန်မာ',
  languages: [{ name: 'Burmese' }, { name: 'Shan' }, { name: 'Mon' }, { name: 'Karen' }],
  whereUsed: 'Myanmar.',
  recognise: [
    'Almost entirely circles and parts of circles: က ဂ ဝ သ.',
    'Looks like strings of bubbles or rings.',
  ],
  lookalikes: [
    { script: 'georgian', tell: 'Georgian is also round, but it sits on a line with ascenders and descenders. Burmese is built from full circles and arcs.' },
    { script: 'khmer', tell: 'Khmer is angular with hats; Burmese is circles.' },
  ],
  sections: [
    {
      title: 'Consonants',
      letters: L('က=ka ခ=kha ဂ=ga ဃ=gha င=nga စ=sa ဆ=hsa ဇ=za ဈ=zha ည=nya ဋ=ta ဌ=hta ဍ=da ဎ=dha ဏ=na တ=ta ထ=hta ဒ=da ဓ=dha န=na ပ=pa ဖ=hpa ဗ=ba ဘ=ba မ=ma ယ=ya ရ=ya/ra လ=la ဝ=wa သ=tha ဟ=ha ဠ=la အ=a'),
    },
  ],
  history: [
    'Burmese script developed from a South Indian Brahmi-derived script, probably via the Mon or Pyu peoples, and was in use by the 11th century (Pagan Kingdom).',
    'Its round shapes are, again, linked to writing on palm leaves, where straight lines would split the leaf.',
  ],
  facts: ['Myanmar has its own digits (၀၁၂၃), and they appear on number plates and some signs.'],
  sources: ['https://en.wikipedia.org/wiki/Burmese_alphabet'],
}

export const hangul: Script = {
  id: 'hangul',
  name: 'Hangul',
  nativeName: '한글',
  kind: 'featural alphabet',
  direction: 'left to right',
  area: 'East Asia',
  showcase: '대한민국',
  languages: [{ name: 'Korean' }],
  whereUsed: 'South Korea and North Korea.',
  recognise: [
    'Letters are grouped into square syllable blocks: 한 = ㅎ + ㅏ + ㄴ.',
    'Lots of circles (ㅇ) and straight lines, far simpler than Chinese characters.',
    'Words are separated by spaces (unlike Chinese and Japanese).',
  ],
  lookalikes: [
    { script: 'japanese', tell: 'Japanese mixes curvy kana with complex kanji. Korean blocks are made of simple strokes and circles.' },
    { script: 'han', tell: 'Chinese characters are dense and complex. If you see many circles ㅇ, it is Korean.' },
  ],
  sections: [
    {
      title: 'Consonants',
      letters: L('ㄱ=g/k ㄴ=n ㄷ=d/t ㄹ=r/l ㅁ=m ㅂ=b/p ㅅ=s ㅇ=silent/ng ㅈ=j ㅊ=ch ㅋ=k ㅌ=t ㅍ=p ㅎ=h ㄲ=kk ㄸ=tt ㅃ=pp ㅆ=ss ㅉ=jj'),
    },
    {
      title: 'Vowels',
      letters: L('ㅏ=a ㅑ=ya ㅓ=eo ㅕ=yeo ㅗ=o ㅛ=yo ㅜ=u ㅠ=yu ㅡ=eu ㅣ=i ㅐ=ae ㅔ=e ㅚ=oe ㅟ=wi ㅘ=wa ㅝ=wo ㅢ=ui'),
    },
  ],
  history: [
    'Hangul was created in 1443 by King Sejong the Great and his scholars, and published in 1446. Before that, Koreans wrote in Chinese characters, which only the educated elite could learn. Sejong wanted a script ordinary people could learn in days.',
    'The consonant shapes are based on the position of the mouth and tongue when making the sound (ㄱ shows the tongue touching the back of the mouth), which makes Hangul a "featural" alphabet, one of very few in the world.',
  ],
  facts: [
    'South Korea celebrates Hangul Day on 9 October; North Korea on 15 January.',
    'South Korea still uses a few Chinese characters (hanja) occasionally; North Korea uses none.',
  ],
  sources: ['https://en.wikipedia.org/wiki/Hangul'],
}

const kanaRomaji =
  'a i u e o ka ki ku ke ko sa shi su se so ta chi tsu te to na ni nu ne no ha hi fu he ho ma mi mu me mo ya yu yo ra ri ru re ro wa wo n'

export const japanese: Script = {
  id: 'japanese',
  name: 'Japanese (kana + kanji)',
  nativeName: '日本語',
  kind: 'mixed',
  direction: 'left to right',
  area: 'East Asia',
  showcase: 'にほん',
  languages: [{ name: 'Japanese' }],
  whereUsed: 'Japan.',
  recognise: [
    'A mix of complex Chinese characters (kanji) and simple, curvy hiragana (の, し, て) or angular katakana (ア, カ, ン).',
    'The hiragana の (no) is extremely common and a quick tell: if you see の, it is Japanese, not Chinese.',
    'Katakana long-vowel dash ー in words like コーヒー (coffee).',
  ],
  lookalikes: [
    { script: 'han', tell: 'Chinese is all dense characters. Japanese has simple kana mixed in (の, は, を). Japanese also uses kanji forms that differ from both Chinese sets: 駅 (station), 県 (prefecture).' },
    { script: 'hangul', tell: 'Korean uses circles and straight-line blocks; Japanese kana are curvy strokes without circles.' },
  ],
  sections: [
    { title: 'Hiragana (native words, grammar)', letters: zipLetters('あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん', kanaRomaji) },
    { title: 'Katakana (foreign words, emphasis)', letters: zipLetters('アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン', kanaRomaji) },
    {
      title: 'Kanji often seen on Japanese signs',
      letters: [
        { char: '駅', roman: 'eki', note: 'station (China uses 站)' },
        { char: '県', roman: 'ken', note: 'prefecture' },
        { char: '町', roman: 'machi / chō', note: 'town' },
        { char: '通', roman: 'dōri', note: 'street, avenue' },
        { char: '橋', roman: 'hashi / kyō', note: 'bridge' },
        { char: '出口', roman: 'deguchi', note: 'exit' },
        { char: '止まれ', roman: 'tomare', note: 'stop (on the red triangular stop sign)' },
      ],
    },
  ],
  history: [
    'Japan had no writing until Chinese characters arrived via Korea around the 5th century AD. Because Japanese grammar is very different from Chinese, scribes began using some characters just for their sounds. By the 9th century these had been simplified into two syllabaries: hiragana (from cursive characters) and katakana (from fragments of characters).',
    'Modern Japanese mixes all three: kanji for most nouns and verb stems, hiragana for grammar endings and native words, and katakana for foreign loanwords. After World War II, Japan simplified many kanji in its own way (shinjitai), different from China\'s later simplification.',
  ],
  facts: ['Japanese stop signs are red downward-pointing triangles saying 止まれ, with "STOP" added in English on newer signs.'],
  sources: ['https://en.wikipedia.org/wiki/Japanese_writing_system'],
}

export const han: Script = {
  id: 'han',
  name: 'Chinese (Simplified & Traditional)',
  nativeName: '汉字 / 漢字',
  kind: 'logographic',
  direction: 'left to right',
  area: 'East Asia',
  showcase: '中国',
  languages: [{ name: 'Mandarin' }, { name: 'Cantonese' }, { name: 'Other Chinese languages' }],
  whereUsed: 'Simplified: mainland China, Singapore, Malaysia. Traditional: Taiwan, Hong Kong, Macau.',
  recognise: [
    'Every character is a dense square block; no simple kana or circles.',
    'To tell Simplified from Traditional, look at common components: 门/門 (gate), 车/車 (vehicle), 东/東 (east), 马/馬 (horse), 国/國 (country). Traditional has more strokes.',
  ],
  lookalikes: [
    { script: 'japanese', tell: 'Japanese has hiragana mixed in (の, は, を). Pure blocks of dense characters is Chinese.' },
    { script: 'hangul', tell: 'Korean uses circles (ㅇ) and simpler strokes.' },
  ],
  sections: [
    {
      title: 'Simplified vs Traditional on signs',
      note: 'Left: Simplified (mainland China). Right, in the note: Traditional (Taiwan, Hong Kong, Macau).',
      letters: [
        { char: '东', roman: 'dōng (east)', note: 'Traditional 東' },
        { char: '门', roman: 'mén (gate)', note: 'Traditional 門' },
        { char: '车', roman: 'chē (vehicle)', note: 'Traditional 車' },
        { char: '马', roman: 'mǎ (horse; 马路 = road)', note: 'Traditional 馬' },
        { char: '国', roman: 'guó (country)', note: 'Traditional 國' },
        { char: '区', roman: 'qū (district)', note: 'Traditional 區' },
        { char: '县', roman: 'xiàn (county)', note: 'Traditional 縣' },
        { char: '镇', roman: 'zhèn (town)', note: 'Traditional 鎮' },
        { char: '广', roman: 'guǎng (wide; 广场 = square)', note: 'Traditional 廣' },
        { char: '医', roman: 'yī (medicine; 医院 = hospital)', note: 'Traditional 醫' },
        { char: '银', roman: 'yín (silver; 银行 = bank)', note: 'Traditional 銀' },
        { char: '湾', roman: 'wān (bay; 台湾 = Taiwan)', note: 'Traditional 灣' },
      ],
    },
    {
      title: 'Same in both sets',
      letters: [
        { char: '路', roman: 'lù (road)' },
        { char: '街', roman: 'jiē (street)' },
        { char: '站', roman: 'zhàn (station, stop)' },
        { char: '市', roman: 'shì (city)' },
        { char: '村', roman: 'cūn (village)' },
        { char: '出口', roman: 'chūkǒu (exit)' },
        { char: '中', roman: 'zhōng (middle)' },
      ],
    },
  ],
  history: [
    'Chinese characters are the oldest continuously used writing system in the world, with oracle-bone inscriptions from the Shang dynasty around 1200 BC.',
    'In the 1950s–60s the People\'s Republic of China introduced Simplified characters to raise literacy, reducing the strokes in thousands of characters. Taiwan, Hong Kong and Macau, outside the PRC\'s control at the time, kept Traditional characters, and still use them.',
  ],
  facts: [
    'Hong Kong signs often combine Traditional characters with English, a legacy of British rule until 1997.',
    'Singapore adopted Simplified characters in the 1970s, following the mainland.',
  ],
  sources: ['https://en.wikipedia.org/wiki/Chinese_characters', 'https://en.wikipedia.org/wiki/Simplified_Chinese_characters'],
}

export const mongolian: Script = {
  id: 'mongolian',
  name: 'Mongolian (traditional)',
  nativeName: 'ᠮᠣᠩᠭᠣᠯ ᠪᠢᠴᠢᠭ',
  kind: 'alphabet',
  direction: 'top to bottom',
  area: 'East Asia',
  showcase: 'ᠮᠣᠩᠭᠣᠯ',
  languages: [{ name: 'Mongolian' }],
  whereUsed:
    'Inner Mongolia (China), where it appears on signs alongside Chinese. In Mongolia itself, Cyrillic is standard, but the traditional script is being revived.',
  recognise: [
    'Written vertically, top to bottom, with columns going left to right.',
    'Letters hang off a central vertical spine, like a string with notches and tails.',
  ],
  lookalikes: [
    { script: 'arabic', tell: 'Both are cursive with letters joined along a line, but Mongolian runs vertically. (It descends from a script related to Arabic\'s ancestor.)' },
  ],
  sections: [
    {
      title: 'Selected letters (isolated forms)',
      letters: L('ᠠ=a ᠡ=e ᠢ=i ᠣ=o ᠤ=u ᠥ=ö ᠦ=ü ᠨ=n ᠪ=b ᠬ=q/kh ᠭ=gh ᠮ=m ᠯ=l ᠰ=s ᠱ=sh ᠲ=t ᠳ=d ᠴ=ch ᠵ=j ᠶ=y ᠷ=r ᠸ=w'),
    },
  ],
  history: [
    'Genghis Khan adopted the script in the early 13th century from the Uyghurs, whose script came from Sogdian, an Aramaic-derived script. Aramaic was written right to left; it was turned 90° to run vertically, possibly influenced by Chinese.',
    'Mongolia (then under Soviet influence) switched to Cyrillic in 1941–46. Inner Mongolia, in China, kept the traditional script. Mongolia has announced plans to use both scripts officially.',
  ],
  facts: ['Signs in Inner Mongolia pair vertical Mongolian with horizontal Chinese, which makes them unmistakable.'],
  sources: ['https://en.wikipedia.org/wiki/Mongolian_script'],
}
