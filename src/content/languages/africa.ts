import type { Group, Language } from '../types'

// Sign words for these languages live in vocab.ts.

export const bantu: Group = {
  id: 'bantu',
  name: 'Bantu (East & Southern Africa)',
  members: ['sw', 'zu', 'xh', 'st', 'tn', 'rw'],
  intro: [
    'Bantu languages spread across central, eastern and southern Africa with farming migrations over the last 3,000 years. They share a system of noun-class prefixes (um-, isi-, ama-, ki-, m-), which is often the best clue.',
    'Zulu and Xhosa (Nguni languages) have click consonants, written c, q and x, borrowed from Khoisan languages. Sotho and Tswana use prefixes like se-, le-, bo-, and simpler spelling.',
  ],
  checklist: [
    { look: 'Words starting ki- / vi- / m-, and "mtaa", "barabara", "kituo"', then: 'Swahili (Kenya, Tanzania, Uganda)' },
    { look: 'Words starting ama-, isi-, ubu- with "hl", "dl", clicks written c/q/x', then: 'Zulu or Xhosa' },
    { look: 'Nguni words with "ngi-", "-ntaba"', then: 'Zulu (KwaZulu-Natal, Gauteng)' },
    { look: 'Nguni words with "ndi-", "kw-", "-lambo"', then: 'Xhosa (Eastern Cape)' },
    { look: 'Words starting se-, le-, bo-, and "tsela", "ho", "ke"', then: 'Sotho (Lesotho, Free State) or Tswana (Botswana, North West)' },
    { look: '"-rwa", "ku-", "umu-", "iki-", and "Akarere" (district)', then: 'Kinyarwanda (Rwanda)' },
  ],
  traps: [
    'In South Africa, road signs are almost always in English (sometimes with Afrikaans); African languages appear mainly on shops, schools and public notices.',
    'Sotho and Tswana are very close: Sotho writes "ho" where Tswana writes "go", and Lesotho vs Botswana is usually clear from other clues.',
  ],
}

export const westAfrican: Group = {
  id: 'west-african',
  name: 'West African',
  members: ['yo', 'ig', 'ha', 'wo'],
  intro: [
    'Yoruba, Igbo and Hausa are the three largest languages of Nigeria; Wolof is the main language of Senegal. They use Latin letters with a few special ones (ẹ ọ ṣ, ị ụ ṅ, ɓ ɗ ƙ, ë ñ ŋ).',
  ],
  checklist: [
    { look: 'ẹ ọ ṣ (dots below) and tone marks (à á)', then: 'Yoruba (south-west Nigeria)' },
    { look: 'ị ụ ọ and ṅ', then: 'Igbo (south-east Nigeria)' },
    { look: 'ɓ ɗ ƙ (hooked letters) or \'y', then: 'Hausa (northern Nigeria, Niger)' },
    { look: 'ë, ñ, ŋ, double vowels, with French on the same sign', then: 'Wolof (Senegal)' },
  ],
  traps: [
    'Most Nigerian road signs are in English. The local languages appear on shops, churches and mosques.',
    'Hausa signs in northern Nigeria may be in Ajami (Arabic script).',
  ],
}

export const hornOfAfrica: Group = {
  id: 'horn-of-africa',
  name: 'Horn of Africa',
  members: ['am', 'ti'],
  intro: [
    'Amharic and Tigrinya are Semitic languages written in the Ge\'ez (Ethiopic) script. They look almost identical; the country and a few words tell them apart.',
  ],
  checklist: [
    { look: 'Ge\'ez script in Ethiopia (Addis Ababa, the central highlands)', then: 'Amharic' },
    { look: 'Ge\'ez script in Eritrea or Tigray (northern Ethiopia)', then: 'Tigrinya' },
  ],
  traps: ['Neither country has official Street View coverage, so these matter mostly for script recognition.'],
}

export const sw: Language = {
  id: 'sw',
  name: 'Swahili',
  nativeName: 'Kiswahili',
  script: 'latin',
  family: ['Niger–Congo', 'Bantu', 'Sabaki'],
  groups: ['bantu'],
  confusedWith: ['zu', 'rw'],
  giveaways: [
    { sign: 'ki- / vi- / m- / wa-', tip: 'Noun-class prefixes: Kiswahili, kitabu, watu.' },
    { sign: 'Karibu', tip: '"Welcome", on signs across East Africa.' },
    { sign: 'barabara / mtaa', tip: 'Road / street.' },
  ],
  regions: [
    { country: 'TZ', status: 'official', signage: 'common' },
    { country: 'KE', status: 'co-official', signage: 'sometimes', note: 'With English, which dominates road signs.' },
    { country: 'UG', status: 'co-official', signage: 'rare' },
    { country: 'RW', status: 'co-official', signage: 'rare' },
    { country: 'CD', area: 'Eastern DR Congo', status: 'regional', signage: 'sometimes' },
  ],
  signWords: {},
  history: [
    'Swahili developed on the East African coast from around the 8th century, among Bantu-speaking communities trading with Arab and Persian merchants. About a third of its vocabulary comes from Arabic; the name comes from Arabic sawāḥil, "coasts".',
    'Caravans from Zanzibar spread it inland in the 19th century. Tanzania made it the national language after independence, which helped unite a country with over 100 languages.',
  ],
  place: [
    { title: 'Why is Swahili spoken so widely?', text: 'The Indian Ocean trade network linked the East African coast with Arabia, Persia and India for centuries. Swahili became the language of trade, and was later adopted by colonial administrations and independent governments as a lingua franca.' },
  ],
  connections: ['A Bantu language, related to Zulu and Kinyarwanda. Many Arabic, Persian, Portuguese and English loanwords.'],
  facts: ['"Safari" is a Swahili word meaning "journey".'],
  sources: ['https://en.wikipedia.org/wiki/Swahili_language'],
}

export const zu: Language = {
  id: 'zu',
  name: 'Zulu',
  nativeName: 'isiZulu',
  script: 'latin',
  family: ['Niger–Congo', 'Bantu', 'Nguni'],
  groups: ['bantu'],
  confusedWith: ['xh', 'sw'],
  giveaways: [
    { sign: 'isi- / ama- / um- / ubu-', tip: 'Noun prefixes: isiZulu, amanzi (water), umgwaqo (road).' },
    { sign: 'c, q, x', tip: 'Click consonants: iqanda (egg).' },
    { sign: 'hl, dl', tip: 'Lateral sounds: hlala, indlela.' },
  ],
  regions: [
    { country: 'ZA', area: 'KwaZulu-Natal, Gauteng, Mpumalanga', status: 'official', signage: 'sometimes', note: 'Most spoken home language in South Africa; road signs are mainly English.' },
    { country: 'SZ', status: 'minority', signage: 'rare', note: 'Close to Swati, the language of Eswatini.' },
  ],
  signWords: {},
  history: [
    'Zulu rose to prominence with the Zulu Kingdom founded by Shaka in the early 19th century. Missionaries wrote it down in Latin script from the 1850s.',
  ],
  place: [
    { title: 'Why are there clicks in Zulu?', text: 'Bantu-speaking farmers who moved into southern Africa lived alongside Khoisan hunter-gatherers and herders, whose languages are full of clicks. Zulu and Xhosa borrowed them.' },
  ],
  connections: ['Closest relatives: Xhosa, Swati, Ndebele (Nguni languages).'],
  facts: ['Mpumalanga (a province) means "where the sun rises", i.e. east, in Swati, Zulu and Ndebele.'],
  sources: ['https://en.wikipedia.org/wiki/Zulu_language'],
}

export const xh: Language = {
  id: 'xh',
  name: 'Xhosa',
  nativeName: 'isiXhosa',
  script: 'latin',
  family: ['Niger–Congo', 'Bantu', 'Nguni'],
  groups: ['bantu'],
  confusedWith: ['zu'],
  giveaways: [
    { sign: 'x, q, c', tip: 'Clicks; x is especially frequent (isiXhosa).' },
    { sign: 'ndi- / kw-', tip: 'Common Xhosa forms where Zulu has ngi- / ku-.' },
  ],
  regions: [{ country: 'ZA', area: 'Eastern Cape, Western Cape', status: 'official', signage: 'sometimes' }],
  signWords: {},
  history: [
    'Xhosa is the language of the Xhosa people of the Eastern Cape, including Nelson Mandela. It was one of the first southern African languages written down by missionaries, in the 1820s.',
  ],
  place: [
    { title: 'Why the Eastern Cape?', text: 'The Xhosa kingdoms met the expanding Cape Colony along the Fish River in the late 18th century, leading to a century of frontier wars. The Transkei and Ciskei "homelands" of the apartheid era were Xhosa areas.' },
  ],
  connections: ['Closest relative: Zulu (largely mutually intelligible).'],
  facts: ['Xhosa has the most click consonants of the Nguni languages.'],
  sources: ['https://en.wikipedia.org/wiki/Xhosa_language'],
}

export const st: Language = {
  id: 'st',
  name: 'Sotho',
  nativeName: 'Sesotho',
  script: 'latin',
  family: ['Niger–Congo', 'Bantu', 'Sotho–Tswana'],
  groups: ['bantu'],
  confusedWith: ['tn'],
  giveaways: [
    { sign: 'se- / le- / ho', tip: 'Sesotho, lebitso; the infinitive "ho" (Tswana uses "go").' },
    { sign: 'Lesotho place names', tip: 'Maseru, Teyateyaneng, Mafeteng: "ma-" and "-eng" endings.' },
  ],
  regions: [
    { country: 'LS', status: 'official', signage: 'sometimes', note: 'With English.' },
    { country: 'ZA', area: 'Free State', status: 'official', signage: 'sometimes' },
  ],
  signWords: {},
  history: [
    'Sesotho is the language of the Basotho, united by King Moshoeshoe I in the 19th century in the mountains of Lesotho, which became a British protectorate instead of joining South Africa.',
  ],
  place: [
    { title: 'Why is Lesotho a country surrounded by South Africa?', text: 'Moshoeshoe I sought British protection in 1868 to avoid conquest by the Boer republics. Basutoland stayed a separate British territory and became independent in 1966.' },
  ],
  connections: ['Closest relatives: Tswana and Northern Sotho (Pedi).'],
  facts: ['Lesotho is the only country entirely above 1,000 m.'],
  sources: ['https://en.wikipedia.org/wiki/Sotho_language'],
}

export const tn: Language = {
  id: 'tn',
  name: 'Tswana',
  nativeName: 'Setswana',
  script: 'latin',
  family: ['Niger–Congo', 'Bantu', 'Sotho–Tswana'],
  groups: ['bantu'],
  confusedWith: ['st'],
  giveaways: [
    { sign: 'go / tsa / wa', tip: 'Frequent words; "go" is the infinitive where Sotho uses "ho".' },
    { sign: 'Bokone Bophirima', tip: '"North West", the South African province.' },
  ],
  regions: [
    { country: 'BW', status: 'official', signage: 'sometimes', note: 'National language; English is official for road signs.' },
    { country: 'ZA', area: 'North West province', status: 'official', signage: 'sometimes' },
  ],
  signWords: {},
  history: [
    'Setswana is the language of the Batswana. Botswana (formerly the Bechuanaland Protectorate) was named after them. The first book printed in Setswana, a Bible translation, came out in 1857.',
  ],
  place: [
    { title: 'Why do more Tswana speakers live in South Africa than Botswana?', text: 'The colonial border between Bechuanaland and the Cape Colony split Tswana lands. Today there are more Tswana speakers in South Africa\'s North West province than in all of Botswana.' },
  ],
  connections: ['Closest relative: Sotho.'],
  facts: ['Botswana has good Street View coverage with red-soil landscapes and long straight roads.'],
  sources: ['https://en.wikipedia.org/wiki/Tswana_language'],
}

export const rw: Language = {
  id: 'rw',
  name: 'Kinyarwanda',
  nativeName: 'Ikinyarwanda',
  script: 'latin',
  family: ['Niger–Congo', 'Bantu', 'Rwanda-Rundi'],
  groups: ['bantu'],
  confusedWith: ['sw'],
  giveaways: [
    { sign: 'iki- / umu- / aba-', tip: 'Noun prefixes: Ikinyarwanda, umuhanda (road), abantu (people).' },
    { sign: 'Akarere / Umurenge', tip: 'District / sector on administrative signs.' },
    { sign: 'rw, cy, shy', tip: 'Common letter clusters.' },
  ],
  regions: [{ country: 'RW', status: 'official', signage: 'common', note: 'With English and French.' }],
  signWords: {},
  history: [
    'Kinyarwanda is spoken by almost all Rwandans, which is unusual in Africa. Rwanda was a Belgian colony, and French was long the second language; English was added in 2003 and made the language of education in 2008.',
  ],
  place: [
    { title: 'Why does Rwanda have one shared language?', text: 'The pre-colonial Kingdom of Rwanda united the area, and Hutu, Tutsi and Twa all spoke the same language. Rwanda\'s provinces are named after directions in Kinyarwanda.' },
  ],
  connections: ['Mutually intelligible with Kirundi (Burundi).'],
  facts: ['Rwanda\'s four provinces are called North, South, East and West in Kinyarwanda: Amajyaruguru, Amajyepfo, Iburasirazuba, Iburengerazuba.'],
  sources: ['https://en.wikipedia.org/wiki/Kinyarwanda'],
}

export const yo: Language = {
  id: 'yo',
  name: 'Yoruba',
  nativeName: 'Èdè Yorùbá',
  script: 'latin',
  family: ['Niger–Congo', 'Volta–Niger', 'Yoruboid'],
  groups: ['west-african'],
  confusedWith: ['ig', 'ha'],
  giveaways: [
    { sign: 'ẹ ọ ṣ', tip: 'Dots below letters: Yoruba\'s signature.' },
    { sign: 'tone marks', tip: 'à á on vowels: Yorùbá, Èkó (Lagos).' },
    { sign: 'gb', tip: 'A single sound, very common (Ogbomosho, gbogbo).' },
  ],
  regions: [
    { country: 'NG', area: 'South-west: Lagos, Oyo, Ogun, Osun, Ondo, Ekiti', status: 'regional', signage: 'sometimes' },
  ],
  signWords: {},
  history: [
    'Yoruba is the language of the Yoruba city-states such as Ife and Oyo. The Anglican bishop Samuel Ajayi Crowther, himself Yoruba, helped standardise its spelling in the 19th century.',
  ],
  place: [
    { title: 'Why is Yoruba heard in Brazil and Cuba?', text: 'Many Yoruba people were taken across the Atlantic in the slave trade. Yoruba survives as a ritual language in Candomblé (Brazil) and Santería (Cuba).' },
  ],
  connections: ['Related to Igala and Itsekiri. Distantly related to Igbo.'],
  facts: ['Lagos, Nigeria\'s largest city, is Èkó in Yoruba.'],
  sources: ['https://en.wikipedia.org/wiki/Yoruba_language'],
}

export const ig: Language = {
  id: 'ig',
  name: 'Igbo',
  nativeName: 'Asụsụ Igbo',
  script: 'latin',
  family: ['Niger–Congo', 'Volta–Niger', 'Igboid'],
  groups: ['west-african'],
  confusedWith: ['yo'],
  giveaways: [
    { sign: 'ị ụ ọ', tip: 'Dots below vowels (Yoruba dots ẹ ọ and ṣ instead).' },
    { sign: 'ṅ', tip: 'n with a dot above.' },
    { sign: 'kw, gw, nw', tip: 'Common Igbo digraphs.' },
  ],
  regions: [{ country: 'NG', area: 'South-east: Anambra, Enugu, Imo, Abia, Ebonyi', status: 'regional', signage: 'sometimes' }],
  signWords: {},
  history: [
    'Igbo is the language of south-eastern Nigeria. The Önwụ alphabet of 1961 standardised its spelling. Chinua Achebe, author of Things Fall Apart, was Igbo.',
  ],
  place: [
    { title: 'Biafra', text: 'The Igbo-majority south-east tried to secede as the Republic of Biafra (1967–70), leading to the Nigerian Civil War.' },
  ],
  connections: ['Igboid languages; distantly related to Yoruba.'],
  facts: ['Igbo has around 30 million speakers.'],
  sources: ['https://en.wikipedia.org/wiki/Igbo_language'],
}

export const ha: Language = {
  id: 'ha',
  name: 'Hausa',
  nativeName: 'Harshen Hausa',
  script: 'latin',
  family: ['Afro-Asiatic', 'Chadic', 'West Chadic'],
  groups: ['west-african'],
  confusedWith: ['yo'],
  giveaways: [
    { sign: 'ɓ ɗ ƙ', tip: 'Hooked letters for implosive and ejective sounds.' },
    { sign: '\'y', tip: 'An apostrophe before y.' },
    { sign: 'Arewa', tip: '"North", the name for northern Nigeria.' },
  ],
  regions: [
    { country: 'NG', area: 'North: Kano, Kaduna, Sokoto, Katsina', status: 'regional', signage: 'sometimes' },
    { country: 'NE', status: 'regional', signage: 'sometimes' },
  ],
  signWords: {},
  history: [
    'Hausa is the language of the Hausa city-states such as Kano and Katsina, centres of trans-Saharan trade. It was written in Ajami (Arabic script) for centuries; the Latin alphabet (Boko) came with British rule.',
  ],
  place: [
    { title: 'Why is Hausa a lingua franca in West Africa?', text: 'Hausa traders spread across West Africa along the trans-Saharan and Sahelian trade routes. Tens of millions use it as a second language.' },
  ],
  connections: ['Afro-Asiatic, distantly related to Arabic and Berber, not to Yoruba or Igbo.'],
  facts: ['"Boko" in Boko Haram is the Hausa word for Western (Latin-script) education.'],
  sources: ['https://en.wikipedia.org/wiki/Hausa_language'],
}

export const wo: Language = {
  id: 'wo',
  name: 'Wolof',
  nativeName: 'Wolof',
  script: 'latin',
  family: ['Niger–Congo', 'Atlantic', 'Senegambian'],
  groups: ['west-african'],
  confusedWith: ['fr'],
  giveaways: [
    { sign: 'ë ñ ŋ', tip: 'Wolof letters, e.g. Ndëkkaan, ñu.' },
    { sign: 'double letters', tip: 'aa, ee, kk, pp: long sounds doubled.' },
    { sign: 'with French', tip: 'Senegal\'s official language is French; Wolof appears on shops and ads.' },
  ],
  regions: [
    { country: 'SN', status: 'regional', signage: 'sometimes', note: 'Spoken by around 80% of Senegalese.' },
    { country: 'GM', status: 'regional', signage: 'rare' },
  ],
  signWords: {},
  history: [
    'Wolof was the language of the Jolof Empire (14th–16th centuries) in Senegal. It spread as the lingua franca of Senegal\'s cities, especially Dakar.',
  ],
  place: [
    { title: 'Why is French official in Senegal?', text: 'Senegal was the centre of French West Africa, with Dakar as its capital. French remains the official language, while Wolof is the language most people use daily.' },
  ],
  connections: ['Related to Serer and Fula (Atlantic languages).'],
  facts: ['Senegal\'s national football team is nicknamed the Lions of Teranga, from the Wolof word for hospitality.'],
  sources: ['https://en.wikipedia.org/wiki/Wolof_language'],
}

export const mg: Language = {
  id: 'mg',
  name: 'Malagasy',
  nativeName: 'Malagasy',
  script: 'latin',
  family: ['Austronesian', 'Malayo-Polynesian', 'Barito'],
  groups: [],
  confusedWith: ['id'],
  giveaways: [
    { sign: 'very long place names', tip: 'Antananarivo, Fianarantsoa, Ambohimanga.' },
    { sign: 'Ambo- / Anta- / Ankazo-', tip: 'Place-name starts meaning "at the hill", "at the…", "at the trees".' },
    { sign: '-y at word ends', tip: 'Malagasy writes final i as y: Nosy, tsy.' },
    { sign: 'no c, q, u, w, x', tip: 'The Malagasy alphabet leaves them out.' },
  ],
  regions: [{ country: 'MG', status: 'official', signage: 'common', note: 'With French.' }],
  signWords: {},
  history: [
    'Madagascar was settled by Austronesian sailors from Borneo around 1,500 years ago, and later by Bantu-speaking Africans. Its language is Austronesian, related to Malay and Hawaiian, not to the African languages nearby.',
    'The Merina kingdom adopted the Latin alphabet in the 1820s with help from Welsh missionaries.',
  ],
  place: [
    { title: 'Why is an Asian language spoken off Africa?', text: 'Austronesian seafarers crossed the Indian Ocean from Southeast Asia, perhaps following trade routes along the coasts. Malagasy\'s closest relative is Ma\'anyan, spoken in southern Borneo.' },
  ],
  connections: ['Closest relative: the Barito languages of Borneo. Related to Malay, Tagalog and Māori.'],
  facts: ['Madagascar\'s Street View coverage has red laterite soils and rice paddies.'],
  sources: ['https://en.wikipedia.org/wiki/Malagasy_language'],
}

export const am: Language = {
  id: 'am',
  name: 'Amharic',
  nativeName: 'አማርኛ',
  script: 'ethiopic',
  family: ['Afro-Asiatic', 'Semitic', 'South Semitic', 'Ethiopian'],
  groups: ['horn-of-africa'],
  confusedWith: ['ti'],
  giveaways: [
    { sign: 'Ge\'ez script in Ethiopia', tip: 'Amharic is the federal working language of Ethiopia.' },
    { sign: 'አዲስ', tip: '"Addis", new, as in Addis Ababa ("new flower").' },
  ],
  regions: [{ country: 'ET', status: 'official', signage: 'common' }],
  signWords: {},
  history: [
    'Amharic became the language of the Ethiopian royal court in the 13th century, replacing Ge\'ez, which survived as a church language.',
  ],
  place: [
    { title: 'Why Amharic in a country of 80 languages?', text: 'Amharic spread as the language of the Solomonic dynasty and the central state. Today many Ethiopian regions use their own language (such as Oromo, written in Latin script) alongside it.' },
  ],
  connections: ['Semitic, related to Tigrinya, Arabic and Hebrew.'],
  facts: ['Amharic is the second most spoken Semitic language after Arabic.'],
  sources: ['https://en.wikipedia.org/wiki/Amharic'],
}

export const ti: Language = {
  id: 'ti',
  name: 'Tigrinya',
  nativeName: 'ትግርኛ',
  script: 'ethiopic',
  family: ['Afro-Asiatic', 'Semitic', 'South Semitic', 'Ethiopian'],
  groups: ['horn-of-africa'],
  confusedWith: ['am'],
  giveaways: [{ sign: 'Ge\'ez script in Eritrea or Tigray', tip: 'The country or region is the main tell.' }],
  regions: [
    { country: 'ER', status: 'official', signage: 'common' },
    { country: 'ET', area: 'Tigray', status: 'regional', signage: 'common' },
  ],
  signWords: {},
  history: [
    'Tigrinya is the language of the Tigrinya and Tigrayan peoples in the highlands of Eritrea and northern Ethiopia, the heartland of the ancient Kingdom of Aksum.',
  ],
  place: [
    { title: 'Why is Eritrea separate from Ethiopia?', text: 'Eritrea was an Italian colony from 1890 to 1941, then federated with and annexed by Ethiopia. After a 30-year war it became independent in 1993.' },
  ],
  connections: ['Closest relative: Tigre. Related to Amharic.'],
  facts: ['Asmara, Eritrea\'s capital, is known for its Italian modernist architecture.'],
  sources: ['https://en.wikipedia.org/wiki/Tigrinya_language'],
}

export const languages = [sw, zu, xh, st, tn, rw, yo, ig, ha, wo, mg, am, ti]
