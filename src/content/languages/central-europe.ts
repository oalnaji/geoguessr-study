import type { Group, Language } from '../types'

export const centralEurope: Group = {
  id: 'central-europe',
  name: 'Central Europe',
  members: ['cs', 'sk', 'pl', 'hu', 'sl'],
  intro: [
    'Czech, Slovak, Polish and Slovene are West and South Slavic languages that were written by Catholic scribes in Latin script, so each had to invent ways to write Slavic sounds like "ch", "sh" and "zh". Czech invented the háček (č š ž), which Slovak and Slovene later adopted. Polish went its own way with digraphs (cz sz rz) and extra letters (ł ż ś).',
    'Hungarian is not Slavic at all. It is a Uralic language related to Finnish and Estonian, brought by the Magyars who arrived in the Carpathian Basin around 895 AD. It looks similar only because it too uses Latin letters with lots of accents. Its giveaways are the double acute accents (ő ű), found in no other language.',
  ],
  checklist: [
    { look: 'ő or ű (double acute accent)', then: 'Hungarian' },
    { look: 'sz, gy, ny, cs, zs everywhere, and lots of "é" and "á"', then: 'Hungarian' },
    { look: 'ł, ż, ś, ć, ń, ą, ę', then: 'Polish' },
    { look: 'cz, sz, rz, szcz', then: 'Polish (sz alone could be Hungarian: check for cz/rz)' },
    { look: 'ř or ů', then: 'Czech' },
    { look: 'ä, ô, ĺ or ŕ', then: 'Slovak' },
    { look: 'ě', then: 'Czech' },
    { look: 'č š ž but no accented vowels (á é í ó ú)', then: 'Slovene (or Croatian: see Ex-Yugoslav)' },
    { look: 'č š ž plus á é í ó ú ý, but no ř ů ě ä ô', then: 'Czech or Slovak: check the sign words (ulice vs ulica, náměstí vs námestie)' },
  ],
  traps: [
    'Slovak and Czech both use á é í ó ú ý č š ž ď ť ň; only a handful of letters separate them. Read the words: Czech "ulice", "nemocnice"; Slovak "ulica", "nemocnica".',
    'Slovene has no acute accents on normal signs; if you see á or é with č š ž it is not Slovene.',
    'Polish ó is used; it is the only accented vowel Polish shares with Czech/Slovak. Check for ł ż ą ę instead.',
    'Hungarian uses "sz" for s and "s" for sh, the reverse of Polish, where "sz" = sh. Both use "sz" a lot.',
  ],
}

export const cs: Language = {
  id: 'cs',
  name: 'Czech',
  nativeName: 'čeština',
  script: 'latin',
  family: ['Indo-European', 'Balto-Slavic', 'Slavic', 'West Slavic', 'Czech–Slovak'],
  groups: ['central-europe'],
  confusedWith: ['sk', 'sl', 'pl'],
  giveaways: [
    { sign: 'ř', tip: 'Unique to Czech: a trilled r pronounced together with "zh" (as in Dvořák).' },
    { sign: 'ů', tip: 'u with a ring (kroužek). Only Czech uses it: dům, "house".' },
    { sign: 'ě', tip: 'e with a háček, softening the letter before it (Mělník, město). Not in Slovak.' },
    { sign: 'ulice / náměstí', tip: 'Czech for street / square; Slovak has ulica / námestie.' },
  ],
  regions: [
    { country: 'CZ', status: 'official', signage: 'common' },
    { country: 'SK', status: 'minority', signage: 'rare', note: 'Widely understood in Slovakia but rarely on signs.' },
  ],
  signWords: {
    street: 'ulice', road: 'silnice', square: 'náměstí', exit: 'výjezd', centre: 'centrum', church: 'kostel',
    school: 'škola', pharmacy: 'lékárna', bakery: 'pekárna', police: 'policie', hospital: 'nemocnice',
    station: 'nádraží', bridge: 'most', forSale: 'na prodej',
  },
  orthography: { year: 1406, note: 'Jan Hus\'s spelling reform introduced diacritics (the háček and the acute) in place of digraphs. Traditionally dated to about 1406.' },
  history: [
    'Czech is first attested in glosses from the 12th–13th centuries, and it had a rich literature by the 14th century, when Prague under Charles IV was the capital of the Holy Roman Empire.',
    'The reformer Jan Hus is credited with a spelling system (around 1406) that replaced digraphs with diacritic marks. His háček (hook) and čárka (acute) spread to Slovak, Slovene, Croatian, Lithuanian, Latvian and the Sámi languages, and to the scientific transliteration of Cyrillic.',
    'After the Habsburg victory at White Mountain in 1620, German dominated in towns and administration. The 19th-century Czech National Revival restored Czech as a language of literature and science.',
  ],
  place: [
    { title: 'Why is Czech close to Slovak but a separate language?', text: 'The two were in separate states for most of history: Bohemia and Moravia belonged to the Holy Roman Empire and later the Austrian side of Austria-Hungary, while Slovakia was part of the Kingdom of Hungary for about 900 years. They were joined in Czechoslovakia from 1918 to 1992, which kept them mutually intelligible.' },
    { title: 'German place names in border areas', text: 'The Sudetenland along the borders had a German-speaking majority until the expulsions of 1945–46. Many villages were resettled, and German names disappeared from signs.' },
  ],
  connections: [
    'Closest relative: Slovak (highly mutually intelligible). Then Polish and Sorbian (West Slavic).',
    'Czech gave English "robot" (from robota, "forced labour", coined by Karel and Josef Čapek) and "pistol" (from píšťala).',
  ],
  facts: [
    'Czech has words without vowels: "strč prst skrz krk" (stick a finger through the throat).',
    'Czechia has one of Europe\'s densest networks of marked hiking trails, marked with a coloured stripe between two white stripes, painted on trees and poles, which often shows up in rural coverage.',
  ],
  sources: ['https://en.wikipedia.org/wiki/Czech_language', 'https://en.wikipedia.org/wiki/Czech_orthography'],
}

export const sk: Language = {
  id: 'sk',
  name: 'Slovak',
  nativeName: 'slovenčina',
  script: 'latin',
  family: ['Indo-European', 'Balto-Slavic', 'Slavic', 'West Slavic', 'Czech–Slovak'],
  groups: ['central-europe'],
  confusedWith: ['cs', 'sl', 'pl'],
  giveaways: [
    { sign: 'ä', tip: 'Slovak is the only Slavic language with ä (mäso, "meat"). Not Czech.' },
    { sign: 'ô', tip: 'o with a circumflex, pronounced "wo" (kôň, "horse"; stôl, "table"). Unique among these languages.' },
    { sign: 'ĺ ŕ', tip: 'Long l and long r with an acute, found only in Slovak (vŕba, "willow").' },
    { sign: 'ľ', tip: 'Soft l with a háček-like apostrophe: Ľubľana is how Slovaks write Ljubljana.' },
    { sign: '-ia / -ie endings', tip: 'Where Czech has -ice/-ě, Slovak has -ica/-ie: nemocnica, námestie.' },
  ],
  regions: [
    { country: 'SK', status: 'official', signage: 'common' },
    { country: 'CZ', status: 'minority', signage: 'rare' },
    { country: 'RS', area: 'Vojvodina', status: 'co-official', signage: 'sometimes', note: 'Slovak is a co-official language in several municipalities around Bački Petrovac.' },
  ],
  signWords: {
    street: 'ulica', road: 'cesta', square: 'námestie', exit: 'výjazd', centre: 'centrum', church: 'kostol',
    school: 'škola', pharmacy: 'lekáreň', bakery: 'pekáreň', police: 'polícia', hospital: 'nemocnica',
    station: 'stanica', bridge: 'most', forSale: 'na predaj',
  },
  orthography: { year: 1843, note: 'Ľudovít Štúr codified modern standard Slovak, based on central Slovak dialects.' },
  history: [
    'For centuries educated Slovaks wrote in Latin, Czech or Hungarian. Anton Bernolák made a first standard in 1787, but the lasting one came from Ľudovít Štúr and colleagues in 1843, deliberately based on central Slovak dialects to set it apart from Czech.',
    'Slovakia was part of the Kingdom of Hungary until 1918, and Hungarian was pushed in schools in the late 19th century (Magyarisation), which made the written language a key part of Slovak national identity.',
  ],
  place: [
    { title: 'Why is there Hungarian on signs in southern Slovakia?', text: 'When the borders were redrawn after World War I (Treaty of Trianon, 1920), the new border followed the Danube and strategic railways rather than language, leaving about half a million Hungarian speakers in Slovakia. Municipalities where over 15% speak Hungarian have bilingual signs.' },
    { title: 'Slovaks in Serbia', text: 'In the 18th century the Habsburgs resettled the plains of Vojvodina, empty after the Ottoman wars, with colonists including Slovaks. Their descendants still speak Slovak, and it is co-official in several Serbian municipalities.' },
  ],
  connections: ['Closest relative: Czech (highly mutually intelligible). Slovak is also often called the most "central" Slavic language, partly understandable to Poles, Slovenes and Croats.'],
  facts: ['The Slovak alphabet has 46 letters, counting digraphs such as ch, dz and dž and letters like ä, ô, ĺ and ŕ.'],
  sources: ['https://en.wikipedia.org/wiki/Slovak_language'],
}

export const pl: Language = {
  id: 'pl',
  name: 'Polish',
  nativeName: 'polski',
  script: 'latin',
  family: ['Indo-European', 'Balto-Slavic', 'Slavic', 'West Slavic', 'Lechitic'],
  groups: ['central-europe'],
  confusedWith: ['cs', 'sk', 'hu'],
  giveaways: [
    { sign: 'ł', tip: 'l with a stroke, pronounced like English w (Łódź, Białystok). Among national languages, only Polish uses it (Kashubian and Sorbian do too).' },
    { sign: 'ą ę', tip: 'Nasal vowels with a tail (ogonek): Wałęsa, Częstochowa. Lithuanian also has ą ę, but without ł, ż, ś.' },
    { sign: 'ż ź ś ć ń', tip: 'Dots and acutes on consonants: a mark of Polish.' },
    { sign: 'cz sz rz szcz', tip: 'Polish uses digraphs where Czech uses č š ř: "Szczecin", "Rzeszów".' },
    { sign: 'ul.', tip: 'Street names start with "ul." (ulica).' },
  ],
  regions: [
    { country: 'PL', status: 'official', signage: 'common' },
    { country: 'LT', area: 'Vilnius region', status: 'minority', signage: 'rare', note: 'A large Polish minority lives around Vilnius, but bilingual signs are restricted.' },
    { country: 'UA', area: 'Western Ukraine (historic Galicia)', status: 'minority', signage: 'rare' },
  ],
  signWords: {
    street: 'ulica (ul.)', road: 'droga', square: 'plac', exit: 'wyjazd', centre: 'centrum', church: 'kościół',
    school: 'szkoła', pharmacy: 'apteka', bakery: 'piekarnia', police: 'policja', hospital: 'szpital',
    station: 'dworzec', bridge: 'most', forSale: 'na sprzedaż',
  },
  history: [
    'Polish was first written in Latin script with Latin spelling habits, which is why it uses digraphs like sz and cz rather than inventing new letters. Diacritics such as ł, ą and ę became standard over the 16th century, when printing in Kraków helped to fix the spelling.',
    'Between 1795 and 1918 Poland did not exist as a state, being divided between Russia, Prussia and Austria. Polish survived as the language of home, church and literature, and was standardised again when Poland was reborn in 1918.',
  ],
  place: [
    { title: 'Why did Poland\'s borders move west?', text: 'After World War II, Poland lost its eastern lands (now in Ukraine, Belarus and Lithuania) and gained German territories in the west and north (Silesia, Pomerania, East Prussia). Millions of people were moved. Former German cities such as Breslau became Wrocław, and German signs were replaced with Polish ones.' },
    { title: 'Kashubian signs', text: 'In the Kashubia region near Gdańsk, many signs are bilingual Polish–Kashubian. Kashubian uses extra letters such as ã, é, ë, ò, ù.' },
  ],
  connections: ['Closest relatives: Kashubian and the Sorbian languages, then Czech and Slovak.', 'English borrowed "horde" and "mazurka" via Polish.'],
  facts: ['Polish is known for difficult consonant clusters: "W Szczebrzeszynie chrząszcz brzmi w trzcinie" (In Szczebrzeszyn a beetle buzzes in the reeds).'],
  sources: ['https://en.wikipedia.org/wiki/Polish_language', 'https://en.wikipedia.org/wiki/Polish_alphabet'],
}

export const hu: Language = {
  id: 'hu',
  name: 'Hungarian',
  nativeName: 'magyar',
  script: 'latin',
  family: ['Uralic', 'Finno-Ugric', 'Ugric'],
  groups: ['central-europe'],
  confusedWith: ['cs', 'sk', 'pl', 'fi', 'et'],
  giveaways: [
    { sign: 'ő ű', tip: 'Double acute accents: used by Hungarian and no other language. The single strongest clue.' },
    { sign: 'sz cs gy ny zs ty', tip: 'Hungarian digraphs. Note "sz" = s and "s" = sh (Budapest is "Budapesht").' },
    { sign: 'ö ü', tip: 'Also used by German, Turkish, Finnish and Estonian, so only a clue together with sz/gy.' },
    { sign: 'utca / út', tip: 'Street / road. Very common on Hungarian street signs.' },
    { sign: '-i ending on place names', tip: 'Often "-i" means "of" (Budapesti, "of Budapest").' },
  ],
  regions: [
    { country: 'HU', status: 'official', signage: 'common' },
    { country: 'RO', area: 'Transylvania (esp. Harghita, Covasna, Mureș)', status: 'minority', signage: 'common', note: 'Bilingual Romanian–Hungarian signs where Hungarians are over 20%. Székely Land is majority Hungarian.' },
    { country: 'SK', area: 'Southern Slovakia', status: 'minority', signage: 'common', note: 'Bilingual Slovak–Hungarian town signs where Hungarians are over 15%.' },
    { country: 'RS', area: 'Vojvodina', status: 'co-official', signage: 'common', note: 'One of six official languages of Vojvodina, especially in the north (Subotica).' },
    { country: 'UA', area: 'Zakarpattia', status: 'minority', signage: 'sometimes' },
    { country: 'AT', area: 'Burgenland', status: 'minority', signage: 'rare' },
    { country: 'SI', area: 'Prekmurje (Lendava)', status: 'co-official', signage: 'common' },
  ],
  signWords: {
    street: 'utca', road: 'út', square: 'tér', exit: 'kijárat', centre: 'központ', church: 'templom',
    school: 'iskola', pharmacy: 'gyógyszertár', bakery: 'pékség', police: 'rendőrség', hospital: 'kórház',
    station: 'pályaudvar', bridge: 'híd', forSale: 'eladó',
  },
  history: [
    'The Magyars migrated from the region of the Ural Mountains and the steppes and settled the Carpathian Basin around 895 AD. Their language belongs to the Uralic family, like Finnish and Estonian, and is surrounded by Slavic, Germanic and Romance languages.',
    'Hungarians originally used an Old Hungarian runic script (rovás). After King Stephen adopted Christianity around 1000 AD, Latin script took over. Latin remained the official language of the Kingdom of Hungary until 1844. The 19th-century language reform created thousands of new native words instead of borrowing from German or Latin.',
  ],
  place: [
    { title: 'Why do Hungarians live in Romania, Slovakia and Serbia?', text: 'The Kingdom of Hungary once included Transylvania, Slovakia, Vojvodina and more. The Treaty of Trianon (1920) after World War I removed about two-thirds of its territory, leaving over three million Hungarians outside the new borders. Their descendants are why you see Hungarian signs in four neighbouring countries.' },
    { title: 'Székely Land', text: 'The Székelys, a Hungarian-speaking group, were settled in the eastern Carpathians in the Middle Ages to guard the border. The counties of Harghita and Covasna in Romania are still majority Hungarian.' },
  ],
  connections: [
    'Closest relatives: the Khanty and Mansi languages of western Siberia. Distantly related to Finnish and Estonian, but not mutually intelligible.',
    'English words from Hungarian: coach (from the town of Kocs), hussar, paprika (via Hungarian).',
  ],
  facts: [
    'Hungarian names are written family name first: Bartók Béla.',
    'Revived rovás (Old Hungarian script) appears on some town entry signs, next to the Latin name.',
  ],
  sources: ['https://en.wikipedia.org/wiki/Hungarian_language', 'https://en.wikipedia.org/wiki/Hungarians_in_Romania'],
}

export const sl: Language = {
  id: 'sl',
  name: 'Slovene',
  nativeName: 'slovenščina',
  script: 'latin',
  family: ['Indo-European', 'Balto-Slavic', 'Slavic', 'South Slavic', 'Western South Slavic'],
  groups: ['central-europe', 'ex-yugoslav'],
  confusedWith: ['hr', 'sk', 'cs', 'bs'],
  giveaways: [
    { sign: 'č š ž only', tip: 'Slovene uses only č, š and ž. No ć or đ (which point to Croatian/Serbian/Bosnian), and no accented vowels.' },
    { sign: 'cesta', tip: 'Slovene streets are very often "cesta" (road): "Dunajska cesta". Croatian also uses cesta, so check for ć/đ.' },
    { sign: '-išče, -ščina', tip: 'The combination šč is frequent in Slovene (parkirišče, "car park").' },
    { sign: 'bolnišnica', tip: 'Hospital. Croatian is "bolnica".' },
  ],
  regions: [
    { country: 'SI', status: 'official', signage: 'common' },
    { country: 'IT', area: 'Friuli-Venezia Giulia (Trieste, Gorizia)', status: 'minority', signage: 'sometimes', note: 'Bilingual Italian–Slovene signs in some municipalities.' },
    { country: 'AT', area: 'Southern Carinthia', status: 'minority', signage: 'sometimes', note: 'Bilingual German–Slovene town signs, after decades of dispute.' },
  ],
  signWords: {
    street: 'ulica', road: 'cesta', square: 'trg', exit: 'izvoz', centre: 'center', church: 'cerkev',
    school: 'šola', pharmacy: 'lekarna', bakery: 'pekarna', police: 'policija', hospital: 'bolnišnica',
    station: 'postaja', bridge: 'most', forSale: 'prodam',
  },
  orthography: { year: 1845, note: 'The Gaj Latin alphabet (with č š ž) replaced the older Bohorič alphabet in the 1840s.' },
  history: [
    'The Freising manuscripts (around 1000 AD) are among the oldest Slavic texts in Latin script, and are in an early form of Slovene. Primož Trubar printed the first Slovene books in 1550 during the Protestant Reformation.',
    'For centuries Slovenes lived under Habsburg rule, and German was the language of towns and government. In the 1840s the Slovenes adopted the háček-based Gaj alphabet, shared with Croats.',
  ],
  place: [
    { title: 'Why are there Slovene signs in Austria and Italy?', text: 'Slovene-speaking areas were split when the Habsburg Empire broke up after 1918. A 1920 plebiscite kept southern Carinthia in Austria, and the Trieste area went to Italy. The Slovene minorities stayed, with bilingual signs.' },
  ],
  connections: ['Closest relatives: the Kajkavian dialects of Croatian, then Croatian, Serbian and Bosnian.'],
  facts: [
    'Slovene has a dual number: separate forms for exactly two of something, which is rare in modern European languages.',
    'Slovene has around 50 dialects despite having only about 2 million speakers.',
  ],
  sources: ['https://en.wikipedia.org/wiki/Slovene_language'],
}

export const languages = [cs, sk, pl, hu, sl]
