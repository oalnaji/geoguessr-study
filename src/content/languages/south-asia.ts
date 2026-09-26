import type { Group, Language } from '../types'

// Sign words for these languages live in vocab.ts.

export const northIndic: Group = {
  id: 'north-indic',
  name: 'North & East Indian scripts',
  members: ['hi', 'mr', 'ne', 'bn', 'as', 'pa', 'gu', 'or'],
  intro: [
    'All these scripts come from ancient Brahmi, so they share the same letter order and logic, but each region developed its own letter shapes. The shape of the letters tells you the state; the language then narrows it further (Hindi, Marathi and Nepali all use Devanagari).',
    'Indian road signs are usually trilingual: the state language, Hindi and English. Where the state language is Hindi, you see Devanagari and English only.',
  ],
  checklist: [
    { look: 'Round "umbrella" tops on letters, no straight top line (ଓ ଡ ଶ)', then: 'Odia (Odisha)' },
    { look: 'No top line, letters stand alone (ગ જ ત)', then: 'Gujarati (Gujarat)' },
    { look: 'Top line, simple boxy letters, ੳ ੲ, lots of ੰ', then: 'Punjabi in Gurmukhi (Punjab)' },
    { look: 'Top line, pointed triangular letters (ক ব র)', then: 'Bengali (West Bengal, Bangladesh) or Assamese' },
    { look: 'Bengali-looking script with ৰ or ৱ', then: 'Assamese (Assam)' },
    { look: 'Top line, vertical bars on the right of letters (क ग न)', then: 'Devanagari: Hindi, Marathi or Nepali (see below)' },
    { look: 'Devanagari with ळ, or words like "शाळा", "रस्ता"', then: 'Marathi (Maharashtra)' },
    { look: 'Devanagari with "प्रहरी" (police), "गाउँपालिका", Nepal-style number plates', then: 'Nepali (Nepal)' },
  ],
  traps: [
    'Hindi signs appear all over India, including states whose own language uses a different script. Look for the second script on the sign.',
    'Bengali is spoken in both Bangladesh and India (West Bengal, Tripura). Bangladesh signs are usually Bengali-only or Bengali–English, without Hindi.',
  ],
}

export const southIndic: Group = {
  id: 'south-indic',
  name: 'South Indian scripts & Sinhala',
  members: ['ta', 'te', 'kn', 'ml', 'si'],
  intro: [
    'The four South Indian languages are Dravidian, a family unrelated to Hindi, while Sinhala is Indo-Aryan. Their scripts all come from Brahmi but have no top line, and most developed rounded letters for writing on palm leaves.',
  ],
  checklist: [
    { look: 'Angular letters with right angles and loops trailing right (த ம ழ)', then: 'Tamil (Tamil Nadu, Sri Lanka, Singapore)' },
    { look: 'Very round, bubbly letters in long chains (മ ല യ)', then: 'Malayalam (Kerala)' },
    { look: 'Round letters with tick marks ✓ on top (క గ న)', then: 'Telugu (Andhra Pradesh, Telangana)' },
    { look: 'Round letters with flat hooks on top (ಕ ಗ ನ)', then: 'Kannada (Karnataka)' },
    { look: 'Curly, spiral letters (ස ල ක), in Sri Lanka', then: 'Sinhala (Sri Lanka)' },
  ],
  traps: [
    'Telugu and Kannada are the hardest pair: look at the tops of letters (Telugu ticks vs Kannada flat hooks) and at the state name on signs.',
    'Sri Lankan signs show Sinhala, Tamil and English together.',
  ],
}

export const himalayan: Group = {
  id: 'himalayan',
  name: 'Himalayan',
  members: ['ne', 'bo', 'dz'],
  intro: [
    'Nepali is written in Devanagari like Hindi. Tibetan and Dzongkha (Bhutan) share the Tibetan script, with a dot (tsheg) after every syllable.',
  ],
  checklist: [
    { look: 'Tibetan script with dots between syllables, in Bhutan (bilingual with English)', then: 'Dzongkha' },
    { look: 'Tibetan script in China, or with Chinese on the same sign', then: 'Tibetan' },
    { look: 'Devanagari in the Himalayas', then: 'Nepali (Nepal, Sikkim, Darjeeling)' },
  ],
  traps: ['Ladakh and Sikkim in India also use Tibetan script on some signs, alongside English and Hindi.'],
}

const trilingual = 'Indian road signs usually show the state language, Hindi and English.'

export const hi: Language = {
  id: 'hi',
  name: 'Hindi',
  nativeName: 'हिन्दी',
  script: 'devanagari',
  family: ['Indo-European', 'Indo-Iranian', 'Indo-Aryan', 'Central'],
  groups: ['north-indic'],
  confusedWith: ['mr', 'ne', 'ur'],
  giveaways: [
    { sign: 'Devanagari + English only', tip: 'In the Hindi belt, signs usually have just Hindi and English.' },
    { sign: 'मार्ग', tip: '"Marg", road, common in street names: Tilak Marg, Mathura Marg.' },
    { sign: '-पुर / -नगर / -गढ़', tip: '-pur (town), -nagar (city), -garh (fort): Jaipur, Ahmednagar, Chandigarh.' },
  ],
  regions: [
    { country: 'IN', area: 'Hindi belt: Uttar Pradesh, Bihar, Madhya Pradesh, Rajasthan, Delhi, Haryana, Uttarakhand, Jharkhand, Chhattisgarh, Himachal Pradesh', status: 'official', signage: 'common' },
    { country: 'IN', area: 'Rest of India (central government signs)', status: 'official', signage: 'sometimes', note: trilingual },
  ],
  signWords: {},
  history: [
    'Hindi grew out of the Hindustani spoken around Delhi, the same base as Urdu. In the 19th and 20th centuries, Hindi was standardised in Devanagari with more Sanskrit vocabulary, while Urdu kept Persian and Arabic words and script.',
    'The constitution of 1950 made Hindi in Devanagari the official language of the Union government, with English as an associate language. Attempts to make Hindi the only official language caused protests, especially in Tamil Nadu in 1965.',
  ],
  place: [
    { title: 'Why don\'t South Indian states use Hindi on all signs?', text: 'The southern states speak Dravidian languages unrelated to Hindi. After anti-Hindi protests, English was kept as an official language, and many southern states use only their own language and English on local signs.' },
  ],
  connections: ['Mutually intelligible with Urdu in speech. Related to Punjabi, Gujarati, Bengali and Marathi.'],
  facts: ['Hindi is the third most spoken language in the world, counting second-language speakers.'],
  sources: ['https://en.wikipedia.org/wiki/Hindi'],
}

export const mr: Language = {
  id: 'mr',
  name: 'Marathi',
  nativeName: 'मराठी',
  script: 'devanagari',
  family: ['Indo-European', 'Indo-Iranian', 'Indo-Aryan', 'Southern'],
  groups: ['north-indic'],
  confusedWith: ['hi', 'ne'],
  giveaways: [
    { sign: 'ळ', tip: 'Retroflex la: common in Marathi, almost never used in Hindi (शाळा, school).' },
    { sign: 'रस्ता / मार्ग', tip: 'Road. "Rasta" is typically Marathi.' },
    { sign: '-वाडी / -गाव', tip: '-wadi (hamlet), -gaon (village): Goregaon, Kolhewadi.' },
  ],
  regions: [
    { country: 'IN', area: 'Maharashtra (Mumbai, Pune, Nagpur)', status: 'official', signage: 'common', note: trilingual },
    { country: 'IN', area: 'Goa', status: 'co-official', signage: 'sometimes' },
  ],
  signWords: {},
  history: [
    'Marathi was the language of the Maratha Empire (17th–18th centuries), which ruled much of India before the British. Its literature goes back to the 13th-century saint-poet Dnyaneshwar.',
    'Maharashtra was created in 1960 as a Marathi-speaking state after protests demanding that states be drawn along language lines.',
  ],
  place: [
    { title: 'Why are Indian states drawn along language lines?', text: 'After independence, movements demanded states for each major language. The States Reorganisation Act of 1956, and later the split of Bombay State into Maharashtra and Gujarat (1960), created today\'s linguistic states. That is why the script on a sign so often tells you the state.' },
  ],
  connections: ['Related to Konkani, Hindi and Gujarati.'],
  facts: ['Mumbai\'s signs usually show Marathi in Devanagari with English, and often Hindi.'],
  sources: ['https://en.wikipedia.org/wiki/Marathi_language'],
}

export const ne: Language = {
  id: 'ne',
  name: 'Nepali',
  nativeName: 'नेपाली',
  script: 'devanagari',
  family: ['Indo-European', 'Indo-Iranian', 'Indo-Aryan', 'Northern'],
  groups: ['north-indic', 'himalayan'],
  confusedWith: ['hi', 'mr'],
  giveaways: [
    { sign: 'प्रहरी', tip: 'Police in Nepali. Hindi uses पुलिस.' },
    { sign: 'नगरपालिका / गाउँपालिका', tip: 'Municipality / rural municipality, on Nepal\'s local government signs.' },
    { sign: 'Devanagari number plates', tip: 'Nepali plates often use Devanagari letters and digits (बा २ प).' },
  ],
  regions: [
    { country: 'NP', status: 'official', signage: 'common' },
    { country: 'IN', area: 'Sikkim, Darjeeling (West Bengal)', status: 'co-official', signage: 'sometimes' },
    { country: 'BT', area: 'Southern Bhutan', status: 'minority', signage: 'rare' },
  ],
  signWords: {},
  history: [
    'Nepali (once called Gorkhali) was the language of the Gorkha kingdom, which unified Nepal in the 18th century. It spread as the national language across a country with over 100 other languages.',
  ],
  place: [
    { title: 'Why is Nepali spoken in India\'s Darjeeling and Sikkim?', text: 'In the 19th century, Nepali workers moved east to work on Darjeeling\'s tea plantations and to farm in Sikkim. Nepali is now the main language of Sikkim and an official language of India.' },
  ],
  connections: ['Closest relatives: Kumaoni and Garhwali (Uttarakhand). Related to Hindi.'],
  facts: ['Nepal\'s flag is the only non-rectangular national flag.'],
  sources: ['https://en.wikipedia.org/wiki/Nepali_language'],
}

export const bn: Language = {
  id: 'bn',
  name: 'Bengali',
  nativeName: 'বাংলা',
  script: 'bengali',
  family: ['Indo-European', 'Indo-Iranian', 'Indo-Aryan', 'Eastern'],
  groups: ['north-indic'],
  confusedWith: ['as', 'hi'],
  giveaways: [
    { sign: 'pointed letters', tip: 'Top line with triangular letters: ক ব র.' },
    { sign: 'র and ব', tip: 'Bengali uses র for r and ব for b/v. Assamese uses ৰ and ৱ instead.' },
    { sign: 'Bengali + English, no Hindi', tip: 'Typical of Bangladesh. Indian West Bengal often adds Hindi.' },
  ],
  regions: [
    { country: 'BD', status: 'official', signage: 'common' },
    { country: 'IN', area: 'West Bengal (Kolkata), Tripura, Barak Valley (Assam)', status: 'official', signage: 'common', note: trilingual },
  ],
  signWords: {},
  history: [
    'Bengali developed in the Bengal delta from around 1000 AD. Bengali literature flourished in the 19th-century Bengal Renaissance, led by figures such as Rabindranath Tagore, the first non-European Nobel laureate in literature (1913).',
    'The Bengali Language Movement of 1952 in East Pakistan and the Liberation War of 1971 made Bengali central to Bangladesh\'s identity.',
  ],
  place: [
    { title: 'Why is Bengal split between two countries?', text: 'At Partition in 1947, Bengal was divided by religion: Muslim-majority East Bengal became East Pakistan (Bangladesh from 1971), Hindu-majority West Bengal stayed in India. Both halves speak Bengali.' },
  ],
  connections: ['Closest relatives: Assamese and Odia. Then Hindi.'],
  facts: ['21 February, International Mother Language Day, commemorates the 1952 Bengali Language Movement.'],
  sources: ['https://en.wikipedia.org/wiki/Bengali_language'],
}

export const as: Language = {
  id: 'as',
  name: 'Assamese',
  nativeName: 'অসমীয়া',
  script: 'bengali',
  family: ['Indo-European', 'Indo-Iranian', 'Indo-Aryan', 'Eastern'],
  groups: ['north-indic'],
  confusedWith: ['bn'],
  giveaways: [
    { sign: 'ৰ', tip: 'r with a stroke through it: Assamese only (Bengali has র).' },
    { sign: 'ৱ', tip: 'wa: Assamese only.' },
  ],
  regions: [{ country: 'IN', area: 'Assam (Guwahati, Brahmaputra Valley)', status: 'official', signage: 'common', note: trilingual }],
  signWords: {},
  sampleOverride: 'অসম · গুৱাহাটী · ডিব্ৰুগড় · যোৰহাট',
  history: [
    'Assamese developed in the Brahmaputra Valley and was the court language of the Ahom kingdom, which ruled Assam for 600 years until the 1820s.',
    'Under British rule, Bengali was imposed in Assam\'s schools and courts from 1836 to 1873, which made the distinct Assamese letters a matter of pride.',
  ],
  place: [
    { title: 'Why does Assam have its own letters?', text: 'Assamese shares the Eastern Nagari script with Bengali but kept distinct letters for its own sounds (ৰ, ৱ). Their use became a marker of Assamese identity against Bengali influence.' },
  ],
  connections: ['Closest relative: Bengali. Then Odia.'],
  facts: ['Assam produces more tea than any other region of India.'],
  sources: ['https://en.wikipedia.org/wiki/Assamese_language'],
}

export const pa: Language = {
  id: 'pa',
  name: 'Punjabi',
  nativeName: 'ਪੰਜਾਬੀ',
  script: 'gurmukhi',
  family: ['Indo-European', 'Indo-Iranian', 'Indo-Aryan', 'Northwestern'],
  groups: ['north-indic'],
  confusedWith: ['hi', 'ur'],
  giveaways: [
    { sign: 'ੳ ੲ', tip: 'Distinctive Gurmukhi vowel bearers.' },
    { sign: 'ੰ', tip: 'Tippi, a small u-shaped nasal mark, very common (ਪੰਜਾਬ).' },
    { sign: 'Gurmukhi first', tip: 'In Punjab, signs put Punjabi above Hindi and English.' },
  ],
  regions: [
    { country: 'IN', area: 'Punjab (Amritsar, Ludhiana, Chandigarh)', status: 'official', signage: 'common', note: trilingual },
    { country: 'PK', area: 'Punjab (in Shahmukhi script)', status: 'regional', signage: 'rare', note: 'The largest language of Pakistan, but written in Arabic script and rarely on signs.' },
  ],
  signWords: {},
  history: [
    'Punjabi is the language of the Punjab ("five rivers"), split between India and Pakistan at Partition in 1947. In India it is written in Gurmukhi, the script of the Sikh scriptures; in Pakistan, in the Arabic-based Shahmukhi.',
  ],
  place: [
    { title: 'Why are there Punjabi signs in Canada and the UK?', text: 'Large Punjabi communities emigrated to Britain, Canada (especially around Vancouver and Toronto) and the US in the 20th century. Punjabi is one of Canada\'s most spoken languages.' },
  ],
  connections: ['Related to Hindi, Urdu and the Lahnda languages of Pakistan.'],
  facts: ['Punjabi is tonal, unusually for an Indo-European language.'],
  sources: ['https://en.wikipedia.org/wiki/Punjabi_language'],
}

export const gu: Language = {
  id: 'gu',
  name: 'Gujarati',
  nativeName: 'ગુજરાતી',
  script: 'gujarati',
  family: ['Indo-European', 'Indo-Iranian', 'Indo-Aryan', 'Western'],
  groups: ['north-indic'],
  confusedWith: ['hi'],
  giveaways: [
    { sign: 'no top line', tip: 'Gujarati looks like Devanagari without the line on top.' },
    { sign: '-નગર / -આબાદ', tip: '-nagar, -abad: Gandhinagar, Ahmedabad.' },
  ],
  regions: [
    { country: 'IN', area: 'Gujarat (Ahmedabad, Surat, Vadodara)', status: 'official', signage: 'common', note: trilingual },
    { country: 'IN', area: 'Dadra and Nagar Haveli and Daman and Diu', status: 'co-official', signage: 'sometimes' },
  ],
  signWords: {},
  history: [
    'Gujarati developed from Old Western Rajasthani in the region of Gujarat. Gujarat\'s ports traded with Arabia, Persia and East Africa for centuries, and Gujarati merchant communities settled across the Indian Ocean.',
  ],
  place: [
    { title: 'Why are there Gujarati communities in East Africa and Britain?', text: 'Gujarati traders settled in Kenya, Uganda and Tanzania in the 19th century, many under British rule. After Uganda expelled its Asian population in 1972, many moved to Britain, especially Leicester.' },
  ],
  connections: ['Related to Rajasthani, Hindi and Marathi.'],
  facts: ['Mahatma Gandhi and Muhammad Ali Jinnah were both native Gujarati speakers.'],
  sources: ['https://en.wikipedia.org/wiki/Gujarati_language'],
}

export const or: Language = {
  id: 'or',
  name: 'Odia',
  nativeName: 'ଓଡ଼ିଆ',
  script: 'odia',
  family: ['Indo-European', 'Indo-Iranian', 'Indo-Aryan', 'Eastern'],
  groups: ['north-indic'],
  confusedWith: ['bn'],
  giveaways: [
    { sign: 'umbrella tops', tip: 'Nearly every letter has a rounded dome on top: ଓ ଡ ଶ କ.' },
  ],
  regions: [{ country: 'IN', area: 'Odisha (Bhubaneswar, Cuttack, Puri)', status: 'official', signage: 'common', note: trilingual }],
  signWords: {},
  sampleOverride: 'ଓଡ଼ିଶା · ଭୁବନେଶ୍ୱର · କଟକ · ପୁରୀ',
  history: [
    'Odia is the language of the ancient region of Kalinga, whose conquest by the emperor Ashoka (around 261 BC) led him to embrace Buddhism. Odia literature dates back over a thousand years.',
    'Odisha became the first Indian state formed on a linguistic basis, in 1936.',
  ],
  place: [
    { title: 'Why the round letters?', text: 'Scribes wrote on palm leaves with a stylus; long straight horizontal lines would split the leaf along its grain, so curved strokes were used instead.' },
  ],
  connections: ['Closest relatives: Bengali and Assamese.'],
  facts: ['The Jagannath Temple in Puri, Odisha, is the origin of the English word "juggernaut".'],
  sources: ['https://en.wikipedia.org/wiki/Odia_language'],
}

export const ta: Language = {
  id: 'ta',
  name: 'Tamil',
  nativeName: 'தமிழ்',
  script: 'tamil',
  family: ['Dravidian', 'South Dravidian', 'Tamil–Kannada'],
  groups: ['south-indic'],
  confusedWith: ['ml', 'si'],
  giveaways: [
    { sign: 'angular letters', tip: 'Right angles and loops trailing right: த ம ழ ந.' },
    { sign: '்', tip: 'A dot (pulli) above letters, very frequent.' },
    { sign: 'Tamil + English, no Hindi', tip: 'Tamil Nadu signs usually skip Hindi entirely.' },
  ],
  regions: [
    { country: 'IN', area: 'Tamil Nadu (Chennai), Puducherry', status: 'official', signage: 'common' },
    { country: 'LK', status: 'official', signage: 'common', note: 'On trilingual Sinhala–Tamil–English signs across the country; the main language in the north and east.' },
    { country: 'SG', status: 'official', signage: 'sometimes', note: 'One of Singapore\'s four official languages.' },
    { country: 'MY', status: 'minority', signage: 'rare' },
  ],
  signWords: {},
  history: [
    'Tamil has a classical literature over 2,000 years old (the Sangam poems), and is one of the longest-surviving classical languages still spoken.',
    'The Tamil-speaking regions resisted the imposition of Hindi; the 1965 anti-Hindi protests in Madras (Chennai) led the central government to keep English as an official language.',
  ],
  place: [
    { title: 'Why is Tamil spoken in Sri Lanka, Malaysia and Singapore?', text: 'Tamils have lived in northern Sri Lanka for over 2,000 years. In the 19th century, the British brought Tamil labourers to work on tea plantations in central Sri Lanka and rubber estates in Malaya, and Tamil traders settled in Singapore.' },
  ],
  connections: ['Closest relative: Malayalam, which split from Tamil around the 9th–13th centuries.'],
  facts: ['Tamil writes voiced and voiceless sounds with the same letter: க is both k and g.'],
  sources: ['https://en.wikipedia.org/wiki/Tamil_language'],
}

export const te: Language = {
  id: 'te',
  name: 'Telugu',
  nativeName: 'తెలుగు',
  script: 'telugu',
  family: ['Dravidian', 'South-Central Dravidian'],
  groups: ['south-indic'],
  confusedWith: ['kn'],
  giveaways: [
    { sign: 'tick marks', tip: 'A ✓-shaped mark on top of letters: క గ న.' },
    { sign: '-పేట / -పల్లి', tip: '-peta, -palli: common place-name endings (Narasaraopeta).' },
  ],
  regions: [{ country: 'IN', area: 'Andhra Pradesh, Telangana (Hyderabad)', status: 'official', signage: 'common', note: trilingual }],
  signWords: {},
  history: [
    'Telugu has literature from the 11th century. It is the most spoken Dravidian language. Andhra State was created in 1953 as the first post-independence linguistic state, after a protest fast by Potti Sriramulu that ended in his death.',
    'Telangana, with Hyderabad, split from Andhra Pradesh in 2014; both are Telugu-speaking.',
  ],
  place: [
    { title: 'Why are there Urdu signs in Hyderabad?', text: 'Hyderabad was the capital of the Nizams, a Muslim dynasty that ruled a large princely state until 1948 with Urdu as its court language. Urdu is still co-official in Telangana.' },
  ],
  connections: ['Dravidian, related to Tamil, Kannada and Malayalam. Heavily influenced by Sanskrit.'],
  facts: ['Telugu film studios in Hyderabad make up one of India\'s biggest film industries ("Tollywood").'],
  sources: ['https://en.wikipedia.org/wiki/Telugu_language'],
}

export const kn: Language = {
  id: 'kn',
  name: 'Kannada',
  nativeName: 'ಕನ್ನಡ',
  script: 'kannada',
  family: ['Dravidian', 'South Dravidian', 'Tamil–Kannada'],
  groups: ['south-indic'],
  confusedWith: ['te'],
  giveaways: [
    { sign: 'flat hooks', tip: 'Flat, brim-like marks on top of letters: ಕ ಗ ನ (Telugu has ticks).' },
    { sign: '-ಊರು', tip: '"-uru", town: ಬೆಂಗಳೂರು (Bengaluru), ಮಂಗಳೂರು (Mangaluru), ಮೈಸೂರು (Mysuru).' },
  ],
  regions: [{ country: 'IN', area: 'Karnataka (Bengaluru, Mysuru)', status: 'official', signage: 'common', note: trilingual }],
  signWords: {},
  history: [
    'Kannada has inscriptions from around 450 AD and a literary tradition over a thousand years old. Karnataka was formed as Mysore State in 1956 by uniting Kannada-speaking areas, and renamed in 1973.',
  ],
  place: [
    { title: 'Why did so many cities change their names?', text: 'In 2014 Karnataka officially changed the English spelling of cities to match Kannada pronunciation: Bangalore became Bengaluru, Mysore became Mysuru, Mangalore became Mangaluru.' },
  ],
  connections: ['Related to Tamil and Telugu. The script is a close sibling of Telugu.'],
  facts: ['Karnataka requires shop signs to be mainly in Kannada.'],
  sources: ['https://en.wikipedia.org/wiki/Kannada'],
}

export const ml: Language = {
  id: 'ml',
  name: 'Malayalam',
  nativeName: 'മലയാളം',
  script: 'malayalam',
  family: ['Dravidian', 'South Dravidian', 'Tamil–Kannada'],
  groups: ['south-indic'],
  confusedWith: ['ta', 'si'],
  giveaways: [
    { sign: 'bubbly letters', tip: 'Very round letters in long chains: മ ല യ.' },
    { sign: '-പുരം / -കുളം', tip: '-puram (town), -kulam (pond): Thiruvananthapuram, Ernakulam.' },
  ],
  regions: [
    { country: 'IN', area: 'Kerala (Thiruvananthapuram, Kochi, Kozhikode), Lakshadweep', status: 'official', signage: 'common', note: trilingual },
  ],
  signWords: {},
  history: [
    'Malayalam split from Tamil between the 9th and 13th centuries and developed its own script from Grantha. Kerala was formed as a Malayalam-speaking state in 1956.',
    'Kerala\'s spice ports traded with Arabs, Jews, Chinese and later Portuguese, Dutch and British merchants, and Malayalam absorbed words from all of them.',
  ],
  place: [
    { title: 'Why does Kerala have so many churches and mosques?', text: 'Christianity (traditionally from St Thomas in 52 AD) and Islam arrived early via the spice trade on the Malabar coast. Kerala has large Christian and Muslim communities alongside its Hindu majority.' },
  ],
  connections: ['Closest relative: Tamil.'],
  facts: ['"Malayalam" is a palindrome in English letters.'],
  sources: ['https://en.wikipedia.org/wiki/Malayalam'],
}

export const si: Language = {
  id: 'si',
  name: 'Sinhala',
  nativeName: 'සිංහල',
  script: 'sinhala',
  family: ['Indo-European', 'Indo-Iranian', 'Indo-Aryan', 'Insular'],
  groups: ['south-indic'],
  confusedWith: ['ta', 'ml'],
  giveaways: [
    { sign: 'spiral letters', tip: 'Curly, snail-like letters: ස ල ක.' },
    { sign: 'three scripts', tip: 'Sri Lankan road signs show Sinhala, Tamil and English.' },
    { sign: '-පුර / -ගම', tip: '-pura (city), -gama (village): Anuradhapura, Maharagama.' },
  ],
  regions: [{ country: 'LK', status: 'official', signage: 'common' }],
  signWords: {},
  history: [
    'Sinhala was brought to Sri Lanka by settlers from northern India around the 5th century BC, according to tradition led by Prince Vijaya. It is Indo-Aryan, related to Hindi and Bengali, not to Tamil.',
    'The 1956 "Sinhala Only" Act made Sinhala the sole official language, fuelling Tamil grievances that contributed to the civil war (1983–2009). Tamil was made official again in 1987.',
  ],
  place: [
    { title: 'Why is Sinhala related to Hindi but not Tamil?', text: 'The Sinhala people descend largely from migrants from northern India, while Tamil speakers came from nearby southern India. Two unrelated language families meet on one island.' },
  ],
  connections: ['Closest relative: Dhivehi (Maldives).'],
  facts: ['Sri Lanka drives on the left and has good Street View coverage.'],
  sources: ['https://en.wikipedia.org/wiki/Sinhala_language'],
}

export const bo: Language = {
  id: 'bo',
  name: 'Tibetan',
  nativeName: 'བོད་སྐད་',
  script: 'tibetan',
  family: ['Sino-Tibetan', 'Tibetic'],
  groups: ['himalayan'],
  confusedWith: ['dz'],
  giveaways: [
    { sign: '་', tip: 'A dot after every syllable.' },
    { sign: 'with Chinese', tip: 'In Tibet, signs pair Tibetan with Chinese.' },
    { sign: 'Tso / La / Ri', tip: 'Lake / mountain pass / mountain in romanised place names: Namtso, Khardung La.' },
  ],
  regions: [
    { country: 'CN', area: 'Tibet Autonomous Region, western Sichuan, Qinghai', status: 'co-official', signage: 'common' },
    { country: 'IN', area: 'Ladakh, Sikkim, Himachal Pradesh (Dharamshala)', status: 'minority', signage: 'sometimes' },
    { country: 'NP', area: 'Northern Himalayan districts', status: 'minority', signage: 'rare' },
  ],
  signWords: {},
  history: [
    'Classical Tibetan was created in the 7th century to translate Buddhist texts from Sanskrit, and became the religious language of Tibetan Buddhism across the Himalayas and Mongolia.',
  ],
  place: [
    { title: 'Why is there a Tibetan community in India?', text: 'After the 1959 uprising in Tibet, the Dalai Lama fled to India and set up a government-in-exile in Dharamshala. Tens of thousands of Tibetans followed.' },
  ],
  connections: ['Closest relatives: Dzongkha, Ladakhi, Sikkimese. Distantly related to Burmese and Chinese.'],
  facts: ['Tibetan spelling has barely changed since the 9th century, so many letters are silent.'],
  sources: ['https://en.wikipedia.org/wiki/Standard_Tibetan'],
}

export const dz: Language = {
  id: 'dz',
  name: 'Dzongkha',
  nativeName: 'རྫོང་ཁ་',
  script: 'tibetan',
  family: ['Sino-Tibetan', 'Tibetic'],
  groups: ['himalayan'],
  confusedWith: ['bo'],
  giveaways: [
    { sign: 'Tibetan script in Bhutan', tip: 'Bhutan\'s signs pair Dzongkha with English.' },
    { sign: 'Dzong', tip: 'Fortress-monastery, the centre of every Bhutanese district: Punakha Dzong.' },
  ],
  regions: [{ country: 'BT', status: 'official', signage: 'common', note: 'Road signs are Dzongkha and English.' }],
  signWords: {},
  history: [
    'Dzongkha, "the language of the dzongs", was the language of western Bhutan and of its fortress-monasteries. It was made the national language in 1971, written in the Tibetan script.',
  ],
  place: [
    { title: 'Why is Bhutan so distinct?', text: 'Bhutan was never colonised and limited foreign influence for centuries; it only opened to tourism in 1974. National dress and Dzongkha are promoted as part of its identity.' },
  ],
  connections: ['Closest relative: Tibetan.'],
  facts: ['Bhutan measures progress with "Gross National Happiness".'],
  sources: ['https://en.wikipedia.org/wiki/Dzongkha'],
}

export const languages = [hi, mr, ne, bn, as, pa, gu, or, ta, te, kn, ml, si, bo, dz]
