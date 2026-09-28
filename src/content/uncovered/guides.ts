// Countries (or groups) with little or no official Street View coverage. Written from general
// geography knowledge; coverage changes over time, so check a current coverage map (SPEC §7.4).

export interface CountryGuide {
  id: string
  name: string
  /** ISO2 codes shaded on the map */
  countries: string[]
  region: 'Africa' | 'Central Asia & Caucasus' | 'Asia' | 'Americas' | 'Oceania'
  summary: string
  /** What Street View has (usually none, a few trekkers, or user photospheres) */
  coverage: string
  landscape: string[]
  /** Roads, driving side, plates, scripts, buildings, poles */
  infrastructure: string[]
  crops: string[]
  /** Language, religion, history: what shapes how it looks */
  people: string[]
  /** Nearest covered look-alikes, and how to tell them apart */
  lookalikes: string
  remember: string
  /** Commons categories to draw photo candidates from */
  photoCategories: string[]
}

export const guides: CountryGuide[] = [
  // ---------------------------------------------------------------- Africa
  {
    id: 'dr-congo', name: 'DR Congo', countries: ['CD'], region: 'Africa',
    summary: 'Africa\'s second-largest country: the Congo rainforest, huge rivers, and mineral-rich highlands in the east and south.',
    coverage: 'No official car coverage.',
    landscape: [
      'Most of the north and centre is dense equatorial rainforest around the Congo river and its tributaries.',
      'Savanna and grassland on plateaus to the south (Kasai, Katanga).',
      'Green volcanic mountains and lakes on the eastern border (Kivu, Virunga), with Nyiragongo\'s lava lake above Goma.',
    ],
    infrastructure: [
      'Very few paved roads outside cities; the river is the main highway, with barges crowded with people and goods.',
      'Drives on the right. Red laterite dirt roads, often deeply rutted in the rainy season.',
      'Kinshasa is one of Africa\'s biggest cities (over 15 million), facing Brazzaville across the river.',
      'Copper and cobalt mining in Katanga: most of the world\'s cobalt, used in phone and car batteries, comes from here.',
    ],
    crops: ['Cassava (the staple), plantains and bananas, maize, oil palm, coffee in the east.'],
    people: ['French is the official language; Lingala, Swahili, Kikongo and Tshiluba are widely spoken.', 'Belgian colonial rule (the Congo Free State under Leopold II was notorious) shaped towns, which have Belgian-era buildings.'],
    lookalikes: 'Uganda and Rwanda (east) and Kenya are covered; eastern DR Congo looks like Rwanda\'s green hills.',
    remember: 'DR Congo travels by river: the Congo is its main road, and its soil holds the world\'s cobalt.',
    photoCategories: ['Roads in the Democratic Republic of the Congo', 'Kinshasa'],
  },
  {
    id: 'central-african-republic', name: 'Central African Republic', countries: ['CF'], region: 'Africa',
    summary: 'A landlocked plateau of savanna and forest in the middle of Africa, one of the least developed countries.',
    coverage: 'No official coverage.',
    landscape: ['A rolling plateau of wooded savanna; rainforest in the south-west; dry Sahel scrub in the far north.', 'The Ubangi river forms the southern border, with the capital Bangui on its bank.'],
    infrastructure: ['Very few paved roads; red dirt tracks and villages of mud-brick huts with thatch or metal roofs.', 'Drives on the right. Long periods of conflict have left much infrastructure damaged.'],
    crops: ['Cassava, peanuts, maize, sorghum; cotton and coffee for export; diamonds and timber.'],
    people: ['French and Sango are official; Sango is spoken almost everywhere.'],
    lookalikes: 'Similar savanna appears in covered parts of Uganda, Ghana or Nigeria.',
    remember: 'The Central African Republic is Africa\'s red-dirt heartland, where everyone speaks Sango.',
    photoCategories: ['Bangui', 'Roads in the Central African Republic'],
  },
  {
    id: 'north-africa', name: 'North Africa (Morocco, Algeria, Libya, Egypt)', countries: ['MA', 'DZ', 'LY', 'EG'], region: 'Africa',
    summary: 'The Mediterranean coast, the Atlas mountains, and the Sahara. Tunisia next door is covered; its neighbours mostly are not.',
    coverage: 'Little or no official car coverage (some places, landmarks and trekker collections, especially in Egypt and Morocco).',
    landscape: [
      'A green Mediterranean strip on the coast with olive groves, then the Atlas mountains (Morocco, Algeria), then the Sahara: sand seas (ergs), stony plains (regs) and oases.',
      'Egypt is desert with a narrow green strip along the Nile and the Delta; 95% of people live there.',
      'Libya is almost entirely desert; people live on the coast.',
    ],
    infrastructure: [
      'Drives on the right. Signs in Arabic, usually with French (Morocco, Algeria) or English (Egypt, Libya); Morocco also uses the Tifinagh script for Berber.',
      'Flat concrete houses with rebar, water tanks and satellite dishes; red earth kasbahs in southern Morocco.',
      'Good motorways along Morocco\'s coast; long straight desert roads with fuel stations far apart.',
    ],
    crops: ['Olives, citrus, dates (oases), wheat and barley; Egypt grows cotton, rice and sugarcane along the Nile.'],
    people: ['Arabic and Berber (Amazigh) languages; French widely used in the Maghreb (former French rule).', 'Islam shapes towns: mosques with square minarets in the Maghreb, pencil-thin ones in Egypt.'],
    lookalikes: 'Tunisia is covered and looks very similar (white houses, olive groves, Arabic and French signs); Jordan and Israel for Egypt-like desert towns.',
    remember: 'North Africa is a green coastal ribbon, the Atlas, then endless Sahara; Tunisia is the covered twin.',
    photoCategories: ['Roads in Morocco', 'Roads in Algeria', 'Roads in Egypt'],
  },
  {
    id: 'angola', name: 'Angola', countries: ['AO'], region: 'Africa',
    summary: 'A large, oil-rich country on Africa\'s Atlantic coast, from the dry Namib to green highlands.',
    coverage: 'No official coverage.',
    landscape: ['A dry coastal strip (the northern end of the Namib desert in the south), rising to a high central plateau with miombo woodland and savanna; rainforest in the Cabinda exclave.'],
    infrastructure: ['Drives on the right. Portuguese is official, so signs look like Brazil or Portugal.', 'Luanda has high-rises built with oil money, surrounded by informal settlements (musseques).', 'Many roads rebuilt after the civil war (1975–2002); the Benguela railway was restored with Chinese investment.'],
    crops: ['Cassava, maize, beans; coffee was a major export in colonial times.', 'Oil and diamonds dominate the economy.'],
    people: ['Portuguese plus Umbundu, Kimbundu and Kikongo. Portuguese colony until 1975.'],
    lookalikes: 'Southern Angola looks like northern Namibia and Botswana (covered); Portuguese signs in Africa otherwise mean Mozambique (not covered) or São Tomé.',
    remember: 'Angola is Portuguese-speaking oil country: Brazil\'s language in Namibia\'s landscape.',
    photoCategories: ['Roads in Angola', 'Luanda'],
  },
  {
    id: 'tanzania', name: 'Tanzania', countries: ['TZ'], region: 'Africa',
    summary: 'East Africa\'s largest country: Kilimanjaro, the Serengeti, Zanzibar and the shores of three great lakes.',
    coverage: 'Very limited coverage (some parks, Zanzibar and trekker collections); no full car coverage.',
    landscape: ['Savanna plains with acacias and baobabs (Serengeti), the Ngorongoro crater, Kilimanjaro (Africa\'s highest mountain, 5,895 m), and a tropical Indian Ocean coast.', 'Lakes Victoria, Tanganyika and Malawi (Nyasa) on its borders.'],
    infrastructure: ['Drives on the left (British rule after the First World War). Yellow number plates on the rear, white in front.', 'Swahili signs everywhere ("Karibu" = welcome); dala-dala minibuses.', 'Zanzibar\'s Stone Town has carved wooden doors from Arab and Indian traders.'],
    crops: ['Maize, cassava, rice; export crops: cashews, coffee (Kilimanjaro), tea, cloves (Zanzibar), sisal, tobacco.'],
    people: ['Swahili is the national language, with English; one of Africa\'s most linguistically unified countries.'],
    lookalikes: 'Kenya and Uganda are covered and look very similar; Swahili signs and yellow rear plates point to Tanzania if unofficial coverage appears.',
    remember: 'Tanzania: Kilimanjaro, the Serengeti and spice-island Zanzibar, all in Swahili.',
    photoCategories: ['Roads in Tanzania'],
  },
  {
    id: 'mozambique', name: 'Mozambique', countries: ['MZ'], region: 'Africa',
    summary: 'A long Indian Ocean country with a 2,500 km coastline, Portuguese-speaking and driving on the left.',
    coverage: 'No official coverage.',
    landscape: ['Coastal lowlands with coconut palms, cashew trees and mangroves; highlands and miombo woodland inland; the Zambezi crosses the middle.'],
    infrastructure: ['Drives on the left (unusual for a former Portuguese colony, because it is surrounded by British-ruled neighbours).', 'Portuguese signs; the EN1 is the main north–south road.', 'Maputo has Portuguese colonial architecture and wide avenues named after socialist leaders (Avenida Karl Marx, Avenida Mao Tse Tung).'],
    crops: ['Cassava, maize, cashews, coconuts, sugarcane, cotton; prawns from the sea.'],
    people: ['Portuguese plus many Bantu languages (Makhuwa, Tsonga…). Independent from Portugal in 1975.', 'The AK-47 on its flag is the only modern rifle on a national flag.'],
    lookalikes: 'South Africa, Eswatini and Botswana nearby are covered; Portuguese signs with left-hand traffic are unique to Mozambique.',
    remember: 'Mozambique speaks Portuguese but drives on the left, and has an AK-47 on its flag.',
    photoCategories: ['Roads in Mozambique', 'Maputo'],
  },

  // ---------------------------------------------------------------- Central Asia & Caucasus
  {
    id: 'uzbekistan', name: 'Uzbekistan', countries: ['UZ'], region: 'Central Asia & Caucasus',
    summary: 'The heart of the Silk Road: Samarkand, Bukhara and Khiva, between deserts and the Fergana Valley.',
    coverage: 'No official car coverage (some landmark photospheres).',
    landscape: ['Mostly desert and dry steppe (Kyzylkum), with irrigated oases along rivers; the fertile, crowded Fergana Valley in the east; mountains near Tajikistan.', 'The Aral Sea, once the world\'s fourth-largest lake, has mostly dried up because Soviet irrigation diverted its rivers to grow cotton; ships lie stranded in the desert at Moynaq.'],
    infrastructure: ['Drives on the right. Post-Soviet look: square concrete poles, painted kerbs, white tree trunks, Lada and many white Chevrolets (made locally by GM Uzbekistan).', 'Uzbek is written in Latin script (since the 1990s) but Cyrillic is still common.', 'Blue-tiled domes and minarets in the historic cities.'],
    crops: ['Cotton (the "white gold", a Soviet monoculture), wheat, melons, grapes, apricots and other fruit.'],
    people: ['Uzbek (Turkic) and Russian; mostly Muslim.'],
    lookalikes: 'Kyrgyzstan and Kazakhstan are covered: similar post-Soviet towns, but they use Cyrillic; Uzbekistan\'s signs are mostly Latin.',
    remember: 'Uzbekistan: blue Silk Road domes, white Chevrolets, and cotton that drained the Aral Sea.',
    photoCategories: ['Roads in Uzbekistan', 'Streets in Samarkand'],
  },
  {
    id: 'turkmenistan', name: 'Turkmenistan', countries: ['TM'], region: 'Central Asia & Caucasus',
    summary: 'A mostly desert, closed country with a gleaming white marble capital.',
    coverage: 'No coverage; very few visitors are allowed.',
    landscape: ['The Karakum desert covers about 80%; oases along the Amu Darya and the Karakum Canal; the Kopet Dag mountains on the Iranian border.', 'The Darvaza gas crater ("Door to Hell") has been burning since around 1971.'],
    infrastructure: ['Drives on the right. Ashgabat holds the record for the most white-marble buildings; many cars must be white or light-coloured by informal rule.', 'Latin-script Turkmen on signs.'],
    crops: ['Cotton and wheat under state quotas; melons; natural gas is the main export.'],
    people: ['Turkmen (Turkic); mostly Muslim; long ruled by strong personality cults.'],
    lookalikes: 'None covered nearby; Kazakhstan\'s desert parts are similar.',
    remember: 'Turkmenistan: a white marble capital, white cars, and a gas crater that has burned for 50 years.',
    photoCategories: ['Ashgabat', 'Roads in Turkmenistan'],
  },
  {
    id: 'tajikistan', name: 'Tajikistan', countries: ['TJ'], region: 'Central Asia & Caucasus',
    summary: 'A mountain country: over 90% mountains, including the Pamirs.',
    coverage: 'No official coverage.',
    landscape: ['The Pamirs ("roof of the world") in the east, with peaks over 7,000 m, high bare plateaus and turquoise lakes; greener valleys in the west around Dushanbe.'],
    infrastructure: ['Drives on the right. The Pamir Highway (M41) is one of the world\'s highest roads, much of it rough.', 'Post-Soviet style towns; Tajik is written in Cyrillic.'],
    crops: ['Cotton, wheat, fruit (apricots, pomegranates); aluminium and hydropower (the Rogun and Nurek dams).'],
    people: ['Tajik is Persian-related, unlike the Turkic languages of its neighbours; mostly Muslim.'],
    lookalikes: 'Kyrgyzstan (covered) has similar mountains and Cyrillic signs.',
    remember: 'Tajikistan is a Persian-speaking country made of mountains, crossed by the Pamir Highway.',
    photoCategories: ['Pamir Highway', 'Roads in Tajikistan'],
  },
  {
    id: 'armenia', name: 'Armenia', countries: ['AM'], region: 'Central Asia & Caucasus',
    summary: 'A small, mountainous Caucasus country with its own alphabet and ancient monasteries.',
    coverage: 'No official car coverage (landmark photospheres).',
    landscape: ['High, dry, rocky plateaus and mountains; Lake Sevan; Mount Ararat (in Turkey) looms over Yerevan.'],
    infrastructure: ['Drives on the right. Armenian script (Հայերեն), usually with Russian and English.', 'Yellow gas pipes above ground, arching over gates; Soviet apartment blocks; buildings of pink tuff stone (Yerevan is the "pink city").'],
    crops: ['Apricots (Armenia\'s symbol), grapes and brandy, pomegranates, wheat.'],
    people: ['The first country to adopt Christianity as its state religion (301 AD); stone monasteries everywhere.'],
    lookalikes: 'Georgia (covered) looks similar: tell them apart by script (Georgian ქართული vs Armenian Հայերեն).',
    remember: 'Armenia: pink stone, yellow gas pipes, and Ararat on the horizon.',
    photoCategories: ['Roads in Armenia', 'Gas pipelines in Armenia'],
  },
  {
    id: 'azerbaijan', name: 'Azerbaijan', countries: ['AZ'], region: 'Central Asia & Caucasus',
    summary: 'The oil-rich Caspian coast of the Caucasus, with ultra-modern Baku.',
    coverage: 'No official coverage.',
    landscape: ['Dry semi-desert and mud volcanoes near the Caspian (about half the world\'s mud volcanoes are here); the Greater Caucasus in the north; green subtropical south (Lankaran) with tea.'],
    infrastructure: ['Drives on the right. Latin-script Azerbaijani (with ə), close to Turkish.', 'Baku mixes a walled old city, oil-boom mansions and modern towers (the Flame Towers); nodding oil pumps in the suburbs.'],
    crops: ['Tea, cotton, grapes, pomegranates, hazelnuts; oil and gas dominate.'],
    people: ['Mostly Shia Muslim, Turkic-speaking.'],
    lookalikes: 'Georgia (covered) and Turkey\'s east; the letter ə on signs is unique to Azerbaijani.',
    remember: 'Azerbaijan is the "land of fire": burning hillsides, mud volcanoes and oil since the 1870s.',
    photoCategories: ['Roads in Azerbaijan'],
  },

  // ---------------------------------------------------------------- Asia
  {
    id: 'myanmar', name: 'Myanmar', countries: ['MM'], region: 'Asia',
    summary: 'A large Southeast Asian country of rice deltas, dry plains of temples and mountainous borderlands.',
    coverage: 'Very limited (a few areas and photospheres); no full coverage.',
    landscape: ['The Irrawaddy delta\'s rice paddies in the south; a dry central zone with Bagan\'s thousands of temples; forested hills on the Thai, Chinese and Indian borders.'],
    infrastructure: [
      'Drives on the right, yet most cars are right-hand-drive imports from Japan: the country switched sides overnight in 1970, reportedly on astrological advice.',
      'Round Burmese script (မြန်မာ), gold stupas on hills, men wearing longyi.',
      'Naypyidaw, the capital since 2005, has famously empty 20-lane roads.',
    ],
    crops: ['Rice (once the world\'s largest exporter), pulses and beans, sesame, peanuts, sugarcane; teak and jade.'],
    people: ['Burmese plus many ethnic groups (Shan, Karen, Kachin…); mostly Theravada Buddhist.'],
    lookalikes: 'Thailand (covered) is similar but drives on the left and uses Thai script, which is more angular.',
    remember: 'Myanmar: round letters, golden stupas, and right-hand-drive cars on the right side of the road.',
    photoCategories: ['Roads in Myanmar', 'Streets in Yangon'],
  },

  // ---------------------------------------------------------------- Americas
  {
    id: 'venezuela', name: 'Venezuela', countries: ['VE'], region: 'Americas',
    summary: 'A country of Caribbean coast, Andes, llanos grassland and the table-top mountains of the south.',
    coverage: 'Only small amounts of trekker or unofficial coverage.',
    landscape: ['The northern tip of the Andes (Mérida), the vast flat llanos of the Orinoco basin, and the tepuis (table mountains) of the Gran Sabana with Angel Falls, the world\'s highest waterfall.'],
    infrastructure: ['Drives on the right. Big old American cars (petrol was almost free for decades); hillside barrios around Caracas.', 'Spanish signs with PARE stop signs; Chavista murals and slogans.'],
    crops: ['Maize (arepas), rice, coffee and cocoa (among the world\'s finest); oil is the main export (the largest proven reserves on Earth).'],
    people: ['Spanish-speaking; its name means "little Venice", after houses on stilts seen in Lake Maracaibo in 1499.'],
    lookalikes: 'Colombia (covered) looks very similar; the Colombian llanos match the Venezuelan ones.',
    remember: 'Venezuela is "little Venice": stilt houses, the most oil on Earth, and table-top mountains.',
    photoCategories: ['Roads in Venezuela', 'Caracas'],
  },

  // ---------------------------------------------------------------- Oceania
  {
    id: 'pacific-islands', name: 'Pacific islands (Papua New Guinea, Fiji, Solomon Islands, Vanuatu, Samoa, Tonga)', countries: ['PG', 'FJ', 'SB', 'VU', 'WS', 'TO'], region: 'Oceania',
    summary: 'Volcanic and coral islands across Melanesia and Polynesia, from huge, mountainous New Guinea to tiny atolls.',
    coverage: 'Little or no official coverage (a few towns, trekkers and photospheres); covered neighbours include American Samoa, Guam and the Northern Marianas.',
    landscape: ['Papua New Guinea: rainforest-covered mountains over 4,000 m, huge rivers (Fly, Sepik), and highland valleys.', 'Fiji, Samoa, Tonga, Vanuatu and the Solomons: volcanic islands with coconut palms, beaches and coral reefs; Tonga is flat coral limestone.'],
    infrastructure: [
      'Driving side varies: left in Papua New Guinea, Fiji, the Solomons, Samoa (switched from right in 2009 to use cheaper cars from Australia and Japan) and Tonga; right in Vanuatu (French influence).',
      'Mostly single roads round the islands, many unpaved; houses of wood or concrete with metal roofs, and traditional thatched buildings (fale in Samoa, bure in Fiji).',
    ],
    crops: ['Taro, yams, cassava, breadfruit, bananas, coconuts (copra); sugarcane in Fiji; kava; coffee in PNG\'s highlands; oil palm in PNG and the Solomons.'],
    people: ['Papua New Guinea has over 800 languages, more than any other country; Tok Pisin is the lingua franca.', 'Fiji has a large Indo-Fijian population (brought as sugar workers), so Hindu temples and Hindi appear alongside Fijian.'],
    lookalikes: 'American Samoa (covered) looks just like Samoa; Indonesia\'s Papua region is next to PNG but also has little coverage.',
    remember: 'The Pacific: PNG talks in 800 languages, Samoa switched to the left in 2009, and Vanuatu still drives on the right.',
    photoCategories: ['Roads in Papua New Guinea', 'Roads in Fiji', 'Roads in Samoa'],
  },
]
