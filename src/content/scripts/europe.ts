import type { Script } from '../types'
import { L } from './helpers'

export const latin: Script = {
  id: 'latin',
  name: 'Latin',
  kind: 'alphabet',
  direction: 'left to right',
  area: 'Europe',
  showcase: 'Ł ő ř ș',
  languages: [
    { name: 'English', id: 'en' }, { name: 'Spanish', id: 'es' }, { name: 'French', id: 'fr' },
    { name: 'German', id: 'de' }, { name: 'Polish', id: 'pl' }, { name: 'Turkish', id: 'tr' },
    { name: 'Vietnamese' }, { name: 'Indonesian' }, { name: 'Swahili' }, { name: '…and most languages in the app' },
  ],
  whereUsed:
    'Most of Europe, all of the Americas, most of sub-Saharan Africa, Oceania, Turkey, Central Asia (partly), Indonesia, Malaysia, the Philippines and Vietnam.',
  recognise: [
    'Because so many languages share the basic A–Z, the script alone tells you almost nothing. The clues are in the extra letters: diacritics (ő, ř, ș), special letters (ł, ß, ð, þ) and letter combinations (sz, ij, ch).',
    'Use the Special letters index below: each extra letter lists every language in the app that uses it.',
  ],
  lookalikes: [
    { script: 'cyrillic', tell: 'Cyrillic shares A, B, E, K, M, H, O, P, C, T, X, but H is "n", P is "r", C is "s" and B is "v". Look for Ж, Я, Л, Д, Ш, И, which Latin never has.' },
    { script: 'greek', tell: 'Greek shares A, B, E, Z, H, I, K, M, N, O, T, Y, X, but look for Λ, Σ, Ω, Π, Δ, Ψ, Φ.' },
  ],
  sections: [
    { title: 'Basic alphabet', letters: L('a=a b=b c=c d=d e=e f=f g=g h=h i=i j=j k=k l=l m=m n=n o=o p=p q=q r=r s=s t=t u=u v=v w=w x=x y=y z=z') },
  ],
  history: [
    'The Latin alphabet grew out of the Etruscan alphabet, itself adapted from Greek, around the 7th century BC. Rome spread it across its empire, and the Western Church kept it alive as the language of scholarship after Rome fell.',
    'Classical Latin had no J, U or W, and no lowercase. Lowercase letters developed from medieval handwriting (Carolingian minuscule, around 800 AD). As different peoples adapted the alphabet to sounds Latin lacked, each invented its own fixes: Czech added háčeks (č ř š) in the 15th century, Polish chose digraphs (sz, cz), German kept ß, and Icelandic preserved Old English þ and ð. Those local choices are exactly what makes the languages identifiable today.',
    'European colonisation and later missionary work spread Latin script to the Americas, Africa and Oceania. In the 20th century several countries switched to it deliberately: Turkey in 1928, Vietnam officially in the 20th century (from a 17th-century missionary system), and Azerbaijan, Uzbekistan and Turkmenistan after the fall of the USSR.',
  ],
  facts: [
    'It is the most widely used writing system in the world, used by roughly 70% of the world\'s population.',
    'The dot on i and j is called a tittle.',
  ],
  sources: ['https://en.wikipedia.org/wiki/Latin_script', 'https://en.wikipedia.org/wiki/Latin_alphabet'],
}

export const cyrillic: Script = {
  id: 'cyrillic',
  name: 'Cyrillic',
  nativeName: 'Кириллица',
  kind: 'alphabet',
  direction: 'left to right',
  area: 'Europe',
  showcase: 'Жизнь',
  languages: [
    { name: 'Russian' }, { name: 'Ukrainian' }, { name: 'Belarusian' }, { name: 'Bulgarian' },
    { name: 'Serbian', id: 'sr' }, { name: 'Macedonian', id: 'mk' }, { name: 'Kazakh' }, { name: 'Kyrgyz' }, { name: 'Mongolian' },
  ],
  whereUsed:
    'Russia, Ukraine, Belarus, Bulgaria, Serbia (alongside Latin), North Macedonia, Montenegro (alongside Latin), Bosnia (Republika Srpska), Kazakhstan, Kyrgyzstan, Tajikistan and Mongolia.',
  recognise: [
    'Letters that exist only in Cyrillic: Ж Ш Щ Я Ю Ы Э Б Д Л П И Й Ц Ч Ъ Ь.',
    'Mirror-image Latin: И looks like a backwards N and Я like a backwards R.',
    'Many letters look Latin but sound different: В = v, Н = n, Р = r, С = s, У = u, Х = kh.',
  ],
  lookalikes: [
    { script: 'greek', tell: 'Greek has Λ, Σ, Ω, Δ, Θ, Ψ. Cyrillic has Л, Д, Ж, Я, И, Ш. Greek text has accent marks (ά, έ) on almost every word; Cyrillic rarely has marks.' },
    { script: 'latin', tell: 'If you only see Latin-looking letters but the words make no sense, check for Н (n) and Р (r). "РЕСТОРАН" is Cyrillic.' },
  ],
  sections: [
    {
      title: 'Russian alphabet (the base set)',
      letters: L('а=a б=b в=v г=g д=d е=ye ё=yo ж=zh з=z и=i й=y к=k л=l м=m н=n о=o п=p р=r с=s т=t у=u ф=f х=kh ц=ts ч=ch ш=sh щ=shch ъ=hard_sign ы=y ь=soft_sign э=e ю=yu я=ya'),
    },
    {
      title: 'Letters that identify the language',
      note: 'Each language adds some letters and drops others. The extras below are the giveaways.',
      letters: [
        { char: 'і', roman: 'i', note: 'Ukrainian, Belarusian, Kazakh' },
        { char: 'ї', roman: 'yi', note: 'Ukrainian only' },
        { char: 'є', roman: 'ye', note: 'Ukrainian only' },
        { char: 'ґ', roman: 'g', note: 'Ukrainian only' },
        { char: 'ў', roman: 'w', note: 'Belarusian only' },
        { char: 'ђ', roman: 'đ', note: 'Serbian only' },
        { char: 'ћ', roman: 'ć', note: 'Serbian only' },
        { char: 'ѓ', roman: 'gj', note: 'Macedonian only' },
        { char: 'ќ', roman: 'kj', note: 'Macedonian only' },
        { char: 'ѕ', roman: 'dz', note: 'Macedonian only' },
        { char: 'ј', roman: 'j', note: 'Serbian, Macedonian' },
        { char: 'љ', roman: 'lj', note: 'Serbian, Macedonian' },
        { char: 'њ', roman: 'nj', note: 'Serbian, Macedonian' },
        { char: 'џ', roman: 'dž', note: 'Serbian, Macedonian' },
        { char: 'ә', roman: 'ä', note: 'Kazakh' },
        { char: 'ғ', roman: 'gh', note: 'Kazakh' },
        { char: 'қ', roman: 'q', note: 'Kazakh' },
        { char: 'ұ', roman: 'ū', note: 'Kazakh only' },
        { char: 'ң', roman: 'ng', note: 'Kazakh, Kyrgyz' },
        { char: 'ө', roman: 'ö', note: 'Kazakh, Kyrgyz, Mongolian' },
        { char: 'ү', roman: 'ü', note: 'Kazakh, Kyrgyz, Mongolian' },
        { char: 'һ', roman: 'h', note: 'Kazakh' },
      ],
    },
  ],
  history: [
    'In the 860s the Byzantine missionaries Cyril and Methodius created the Glagolitic alphabet to write Old Church Slavonic for the Slavs of Great Moravia. A few decades later, scholars in the First Bulgarian Empire (probably at the Preslav school) built a simpler script from Greek capitals plus extra letters for Slavic sounds. It was named Cyrillic in Cyril\'s honour, though he did not create it.',
    'The script followed Orthodox Christianity: Bulgaria, Serbia and Kievan Rus all adopted it, while Catholic Slavs (Poles, Czechs, Croats, Slovenes) used Latin. That religious border from a thousand years ago still explains why Serbian and Croatian, almost the same language, use different scripts.',
    'Peter the Great simplified the letters in 1708, and the Soviet reform of 1918 removed several more. In the 20th century the USSR moved Central Asian languages from Arabic to Latin and then, around 1940, to Cyrillic. Since 1991 some of them have been moving back to Latin (Uzbekistan, Turkmenistan, Azerbaijan, and Kazakhstan gradually).',
  ],
  facts: [
    'Bulgaria has celebrated the Cyrillic alphabet on 24 May as a national holiday since the 19th century.',
    'Mongolia uses Cyrillic, but its traditional vertical script is being brought back and appears on some signs.',
    'Serbian is one of the few languages where both scripts are official and freely mixed on signs, shop fronts and newspapers.',
  ],
  sources: ['https://en.wikipedia.org/wiki/Cyrillic_script', 'https://en.wikipedia.org/wiki/Cyrillic_alphabets'],
}

export const greek: Script = {
  id: 'greek',
  name: 'Greek',
  nativeName: 'Ελληνικό αλφάβητο',
  kind: 'alphabet',
  direction: 'left to right',
  area: 'Europe',
  showcase: 'Ελλάδα',
  languages: [{ name: 'Greek', id: 'el' }],
  whereUsed: 'Greece and Cyprus. Road signs usually repeat the name in Latin letters underneath.',
  recognise: [
    'Distinctive letters: λ Λ, σ Σ ς, ω Ω, π Π, δ Δ, θ Θ, ψ Ψ, φ Φ, ξ Ξ.',
    'Almost every word of more than one syllable carries an accent mark (ά έ ή ί ό ύ ώ).',
    'Final sigma ς looks like a Latin ς/c with a tail, and appears only at the end of words.',
  ],
  lookalikes: [
    { script: 'cyrillic', tell: 'Cyrillic was built from Greek, so Γ and Π appear in both. Greek has Λ, Σ, Ω, Δ; Cyrillic has Л, Д, Ж, Я. Greek accent marks on nearly every word are the quickest tell.' },
  ],
  sections: [
    {
      title: 'Alphabet (modern pronunciation)',
      letters: L('α=a β=v γ=g/y δ=dh_(this) ε=e ζ=z η=i θ=th_(thin) ι=i κ=k λ=l μ=m ν=n ξ=x ο=o π=p ρ=r σ=s τ=t υ=i φ=f χ=kh ψ=ps ω=o'),
    },
    {
      title: 'Common combinations',
      letters: L('ου=u αι=e ει=i οι=i μπ=b ντ=d γκ=g τσ=ts'),
    },
  ],
  history: [
    'The Greeks adapted the Phoenician alphabet around the 8th century BC, and made one crucial change: they used some Phoenician consonant letters for vowels. That made Greek the first true alphabet with both consonants and vowels, and it became the parent of Latin, Cyrillic, Coptic and Armenian (in part).',
    'Modern Greek uses the same 24 letters as Classical Greek, but the sounds have shifted: β is now v, η and υ both sound like i. The 1982 reform replaced the old system of three accents and breathing marks (polytonic) with a single accent (monotonic), which is what you see on signs.',
  ],
  facts: [
    'Greek letters are used throughout maths and science: π, Δ, Σ, λ, μ.',
    'Signs in Greece usually show the Greek name first and a Latin transliteration beneath, which is handy for GeoGuessr.',
  ],
  sources: ['https://en.wikipedia.org/wiki/Greek_alphabet'],
}
