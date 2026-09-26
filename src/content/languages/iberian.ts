import type { Group, Language } from '../types'

export const iberian: Group = {
  id: 'iberian',
  name: 'Iberian',
  members: ['es', 'pt', 'ca', 'gl', 'eu'],
  intro: [
    'Spanish, Portuguese, Catalan and Galician all developed from Latin after the Roman conquest of Iberia. As Christian kingdoms pushed south against Muslim al-Andalus (the Reconquista, 718–1492), each carried its language with it, which is why the languages form north–south bands across the peninsula.',
    'Basque is the odd one out: it is not Indo-European and is related to no other known language. It was spoken in the western Pyrenees before the Romans arrived.',
  ],
  checklist: [
    { look: 'ñ', then: 'Spanish (or Galician, check for x)' },
    { look: 'ã õ, or ç with -ção endings', then: 'Portuguese' },
    { look: 'l·l (l with a middle dot) or à è ò', then: 'Catalan' },
    { look: 'tx, tz, lots of k and x, words ending -ko -ak -etxea', then: 'Basque' },
    { look: 'x in common words (xunta, praza, rúa), ñ, no ã', then: 'Galician' },
    { look: '"rúa" and "praza"', then: 'Galician ("rua" and "praça" = Portuguese; "calle" and "plaza" = Spanish)' },
    { look: '"carrer" and "plaça"', then: 'Catalan' },
  ],
  traps: [
    'Galician looks like a mix of Spanish and Portuguese: it uses ñ (like Spanish) but many words look Portuguese. Look for "x" and "rúa".',
    'Catalan uses ç too (plaça), but never ã or õ.',
    'Spanish signs in Catalonia, Galicia and the Basque Country are often crossed out or replaced with the regional language.',
    'Brazil and Portugal both use Portuguese: the country clues (and "ônibus" vs "autocarro") separate them.',
  ],
}

export const es: Language = {
  id: 'es',
  name: 'Spanish',
  nativeName: 'español',
  script: 'latin',
  family: ['Indo-European', 'Italic', 'Romance', 'Western Romance', 'Ibero-Romance'],
  groups: ['iberian'],
  confusedWith: ['pt', 'gl', 'ca', 'it'],
  giveaways: [
    { sign: 'ñ', tip: 'The classic Spanish letter (España). Galician and some Filipino languages use it too.' },
    { sign: '¿ ¡', tip: 'Inverted question and exclamation marks at the start of sentences: only Spanish.' },
    { sign: 'calle / avenida', tip: 'Street / avenue (C/ and Av. on signs).' },
    { sign: 'll, rr', tip: 'Common Spanish digraphs (calle, carretera).' },
  ],
  regions: [
    { country: 'ES', status: 'official', signage: 'common' },
    { country: 'MX', status: 'official', signage: 'common' },
    { country: 'AR', status: 'official', signage: 'common' },
    { country: 'CO', status: 'official', signage: 'common' },
    { country: 'CL', status: 'official', signage: 'common' },
    { country: 'PE', status: 'official', signage: 'common' },
    { country: 'EC', status: 'official', signage: 'common' },
    { country: 'BO', status: 'co-official', signage: 'common' },
    { country: 'UY', status: 'official', signage: 'common' },
    { country: 'PY', status: 'co-official', signage: 'common', note: 'Alongside Guaraní.' },
    { country: 'GT', status: 'official', signage: 'common' },
    { country: 'US', area: 'Southwest, Florida, Puerto Rico', status: 'regional', signage: 'sometimes' },
    { country: 'AD', status: 'minority', signage: 'sometimes' },
  ],
  signWords: {
    street: 'calle', road: 'carretera', square: 'plaza', exit: 'salida', centre: 'centro', church: 'iglesia',
    school: 'escuela', pharmacy: 'farmacia', bakery: 'panadería', police: 'policía', hospital: 'hospital',
    station: 'estación', bridge: 'puente', forSale: 'se vende',
  },
  history: [
    'Spanish (Castilian) began in the Kingdom of Castile in north-central Spain around the 9th–10th centuries. As Castile led the Reconquista southwards and united with Aragon, Castilian became the language of the Spanish state. The first grammar of any modern European language, Nebrija\'s Castilian grammar, appeared in 1492.',
    'The same year, Columbus reached the Americas. Over the next three centuries Spanish spread across most of Central and South America, and today about 90% of Spanish speakers live in the Americas. It also absorbed thousands of Arabic words from al-Andalus (aceite, almohada, ojalá).',
  ],
  place: [
    { title: 'Why is Spanish spoken across Latin America (except Brazil)?', text: 'The Treaty of Tordesillas (1494) split newly found lands between Spain and Portugal along a line in the Atlantic. Most of the Americas fell on Spain\'s side; the eastern bulge of South America became Portuguese Brazil.' },
    { title: 'Spanish in the United States', text: 'Much of the US Southwest (California, Texas, New Mexico, Arizona) was Spanish and then Mexican until 1848, which left Spanish place names (Los Angeles, San Antonio). Modern immigration has made the US home to one of the largest Spanish-speaking populations in the world.' },
  ],
  connections: ['Closest relatives: Galician, Portuguese (high mutual intelligibility in writing), Asturian, Catalan and Italian.'],
  facts: [
    'Spanish is the world\'s second-largest language by native speakers.',
    'The letter ñ comes from a medieval scribal shortcut: a small n written above another n.',
  ],
  sources: ['https://en.wikipedia.org/wiki/Spanish_language', 'https://en.wikipedia.org/wiki/Treaty_of_Tordesillas'],
}

export const pt: Language = {
  id: 'pt',
  name: 'Portuguese',
  nativeName: 'português',
  script: 'latin',
  family: ['Indo-European', 'Italic', 'Romance', 'Western Romance', 'Ibero-Romance', 'Galician-Portuguese'],
  groups: ['iberian'],
  confusedWith: ['es', 'gl'],
  giveaways: [
    { sign: 'ã õ', tip: 'Nasal vowels with a tilde: São Paulo, Portimão. Only Portuguese in this group.' },
    { sign: '-ção / -ções', tip: 'Extremely common ending (estação, informação).' },
    { sign: 'lh, nh', tip: 'Where Spanish has ll and ñ: Coelho, Espinho.' },
    { sign: 'rua / avenida', tip: 'Street / avenue (R. and Av.).' },
    { sign: 'ô ê', tip: 'Circumflexes, more common in Brazilian Portuguese (ônibus).' },
  ],
  regions: [
    { country: 'PT', status: 'official', signage: 'common' },
    { country: 'BR', status: 'official', signage: 'common' },
    { country: 'AO', status: 'official', signage: 'common' },
    { country: 'MZ', status: 'official', signage: 'common' },
    { country: 'CV', status: 'official', signage: 'common' },
    { country: 'UY', area: 'Northern border towns', status: 'minority', signage: 'rare' },
  ],
  signWords: {
    street: 'rua', road: 'estrada', square: 'praça', exit: 'saída', centre: 'centro', church: 'igreja',
    school: 'escola', pharmacy: 'farmácia', bakery: 'padaria', police: 'polícia', hospital: 'hospital',
    station: 'estação', bridge: 'ponte', forSale: 'vende-se',
  },
  orthography: { year: 1990, note: 'The Orthographic Agreement of 1990 (in force from 2009 in Brazil and 2009–15 in Portugal) partly unified spelling.' },
  history: [
    'Portuguese and Galician were one language, Galician-Portuguese, in the Middle Ages. When Portugal became independent (1139–43) and expanded south, its language drifted apart from Galician in the north, which stayed under Castile.',
    'Portuguese sailors reached Africa, India, China and Brazil in the 15th–16th centuries, and Portuguese spread to Brazil, Angola, Mozambique, Cape Verde, Guinea-Bissau, São Tomé, East Timor and Macau. Brazil now has over 200 million speakers, far more than Portugal\'s ten million.',
  ],
  place: [
    { title: 'Why is Portuguese spoken in Brazil?', text: 'The Treaty of Tordesillas (1494) gave Portugal the lands east of a north–south line in the Atlantic. In 1500 Pedro Álvares Cabral landed on the Brazilian coast, on Portugal\'s side of the line. Brazil became Portugal\'s largest colony, and the Portuguese court even moved to Rio de Janeiro from 1808 to 1821.' },
  ],
  connections: ['Closest relative: Galician. Then Spanish (mutually intelligible in writing).'],
  facts: ['Brazilian and European Portuguese differ in pronunciation and vocabulary: bus is "ônibus" in Brazil and "autocarro" in Portugal.'],
  sources: ['https://en.wikipedia.org/wiki/Portuguese_language'],
}

export const ca: Language = {
  id: 'ca',
  name: 'Catalan',
  nativeName: 'català',
  script: 'latin',
  family: ['Indo-European', 'Italic', 'Romance', 'Western Romance', 'Occitano-Romance'],
  groups: ['iberian', 'other-romance'],
  confusedWith: ['es', 'fr', 'pt'],
  giveaways: [
    { sign: 'l·l', tip: 'l with a middle dot (punt volat): unique to Catalan (col·legi, "school").' },
    { sign: 'à è ò', tip: 'Grave accents (with é í ó ú too). Spanish never uses grave accents.' },
    { sign: 'ç without ã', tip: 'Catalan uses ç (plaça) but never ã/õ.' },
    { sign: 'carrer / avinguda', tip: 'Street / avenue (C/ and Av.).' },
    { sign: '-ny', tip: 'Catalan writes ny where Spanish writes ñ: Catalunya, Espanya.' },
  ],
  regions: [
    { country: 'ES', area: 'Catalonia', status: 'co-official', signage: 'common', note: 'Often the only language on street signs.' },
    { country: 'ES', area: 'Valencian Community', status: 'co-official', signage: 'common', note: 'Called Valencian (valencià) locally.' },
    { country: 'ES', area: 'Balearic Islands', status: 'co-official', signage: 'common' },
    { country: 'AD', status: 'official', signage: 'common', note: 'The only country where Catalan is the sole official language.' },
    { country: 'FR', area: 'Pyrénées-Orientales (Roussillon)', status: 'minority', signage: 'sometimes' },
    { country: 'IT', area: 'Alghero (Sardinia)', status: 'minority', signage: 'sometimes' },
  ],
  signWords: {
    street: 'carrer', road: 'carretera', square: 'plaça', exit: 'sortida', centre: 'centre', church: 'església',
    school: 'escola', pharmacy: 'farmàcia', bakery: 'forn', police: 'policia', hospital: 'hospital',
    station: 'estació', bridge: 'pont', forSale: 'es ven',
  },
  orthography: { year: 1913, note: 'Pompeu Fabra\'s Normes ortogràfiques (1913) created modern Catalan spelling.' },
  history: [
    'Catalan developed in the counties of the eastern Pyrenees, and was the language of the Crown of Aragon, a Mediterranean power that ruled the Balearic Islands, Valencia, Sardinia, Sicily and Naples. It had a major medieval literature.',
    'After the War of the Spanish Succession (1714), Catalan was banned from official use. It was suppressed again under Franco (1939–75). Since 1978 it has been co-official in Catalonia, Valencia and the Balearics, and is the main language of education and signage there.',
  ],
  place: [
    { title: 'Why is Catalan spoken in Alghero, Sardinia?', text: 'The Crown of Aragon conquered Alghero in 1354 and repopulated it with settlers from Catalonia. Their descendants still speak a Catalan dialect, and street signs are bilingual Italian–Catalan.' },
    { title: 'Why Catalan in France?', text: 'Roussillon (around Perpignan) was Catalan until the Treaty of the Pyrenees (1659) gave it to France.' },
  ],
  connections: ['Closest relative: Occitan (southern France). Then Spanish, French and Italian.'],
  facts: ['Andorra is the only country in the world with Catalan as its only official language.'],
  sources: ['https://en.wikipedia.org/wiki/Catalan_language'],
}

export const gl: Language = {
  id: 'gl',
  name: 'Galician',
  nativeName: 'galego',
  script: 'latin',
  family: ['Indo-European', 'Italic', 'Romance', 'Western Romance', 'Ibero-Romance', 'Galician-Portuguese'],
  groups: ['iberian'],
  confusedWith: ['pt', 'es'],
  giveaways: [
    { sign: 'x', tip: 'Galician uses x for the "sh" sound: Xunta, xardín, Xixón.' },
    { sign: 'rúa / praza', tip: 'Street / square (Portuguese: rua / praça; Spanish: calle / plaza).' },
    { sign: 'ñ with Portuguese-looking words', tip: 'Galician uses ñ (Spanish-style) but no ã, õ or ç.' },
    { sign: 'estación / cidade', tip: 'Mixed forms: "estación" looks Spanish, "cidade" looks Portuguese. Seeing both kinds together suggests Galician.' },
  ],
  regions: [{ country: 'ES', area: 'Galicia', status: 'co-official', signage: 'common', note: 'Place names are officially Galician: A Coruña, Ourense, Sanxenxo.' }],
  signWords: {
    street: 'rúa', road: 'estrada', square: 'praza', exit: 'saída', centre: 'centro', church: 'igrexa',
    school: 'escola', pharmacy: 'farmacia', bakery: 'panadaría', police: 'policía', hospital: 'hospital',
    station: 'estación', bridge: 'ponte', forSale: 'véndese',
  },
  history: [
    'Galician-Portuguese was the prestige language of lyric poetry across Iberia in the 13th century; even the Castilian king Alfonso X wrote his Cantigas de Santa María in it.',
    'While Portuguese became a national language, Galicia remained part of Castile and Galician was pushed out of writing for centuries ("the dark centuries"). A 19th-century revival (Rexurdimento) and co-official status since 1981 brought it back.',
  ],
  place: [
    { title: 'Why is Galician so close to Portuguese?', text: 'They were one language until Portugal became independent in the 12th century. Portuguese then developed on its own, while Galician was influenced by Spanish, which is why modern Galician looks halfway between the two.' },
  ],
  connections: ['Closest relative: Portuguese. Some consider them one language (the reintegrationist view).'],
  facts: ['The Way of St James pilgrimage ends at Santiago de Compostela, in Galicia; its waymarks are scallop shells on a blue background.'],
  sources: ['https://en.wikipedia.org/wiki/Galician_language'],
}

export const eu: Language = {
  id: 'eu',
  name: 'Basque',
  nativeName: 'euskara',
  script: 'latin',
  family: ['Language isolate'],
  groups: ['iberian'],
  confusedWith: ['es', 'ca'],
  giveaways: [
    { sign: 'tx, tz, ts', tip: 'Very frequent digraphs: etxea (house), Donostia, Getxo, itzela.' },
    { sign: 'k and x everywhere', tip: 'Basque uses k where Spanish uses c (Euskadi, kalea).' },
    { sign: '-ko, -ak, -ren, -etxea', tip: 'Common endings: "Bilboko" (of Bilbao), "kaleak" (streets).' },
    { sign: 'kalea / plaza / etorbidea', tip: 'Street / square / avenue. The street word comes after the name.' },
  ],
  regions: [
    { country: 'ES', area: 'Basque Country (Euskadi)', status: 'co-official', signage: 'common', note: 'Signs are bilingual, often with Basque first: Donostia / San Sebastián.' },
    { country: 'ES', area: 'Northern Navarre', status: 'co-official', signage: 'common' },
    { country: 'FR', area: 'French Basque Country (Pyrénées-Atlantiques)', status: 'minority', signage: 'sometimes' },
  ],
  signWords: {
    street: 'kalea', road: 'errepidea', square: 'plaza', exit: 'irteera', centre: 'erdigunea', church: 'eliza',
    school: 'eskola', pharmacy: 'farmazia', bakery: 'okindegia', police: 'polizia', hospital: 'ospitalea',
    station: 'geltokia', bridge: 'zubia', forSale: 'salgai',
  },
  orthography: { year: 1968, note: 'Unified Standard Basque (Euskara Batua) was established by the Basque Language Academy from 1968.' },
  history: [
    'Basque is a language isolate: it has no proven relatives. It was spoken in the western Pyrenees before the Indo-European languages arrived, and survived Roman, Visigothic and Castilian rule in its mountain valleys.',
    'Under Franco, Basque was banned in public life. Since 1979 it has been co-official in the Basque Autonomous Community, and its use has grown thanks to Basque-medium schools (ikastolak).',
  ],
  place: [
    { title: 'Why did Basque survive?', text: 'The Basque homeland is mountainous and was economically self-sufficient, and the Basque provinces kept their own laws (fueros) for centuries within Castile. Isolation and local autonomy helped the language survive when other pre-Roman languages disappeared.' },
  ],
  connections: ['No known relatives. Basque has lent words to Spanish, such as "izquierda" (left) and "chabola" (shack).'],
  facts: ['Basque place names often appear in both forms on signs: Vitoria-Gasteiz, Bilbo/Bilbao.'],
  sources: ['https://en.wikipedia.org/wiki/Basque_language'],
}

export const languages = [es, pt, ca, gl, eu]
