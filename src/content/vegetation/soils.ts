import type { Plant } from './types'

// Soil colours. The colour of exposed ground (road cuts, dirt roads, ploughed fields, verges) is one
// of the strongest region clues in GeoGuessr, and it follows simple chemistry: iron oxides make soil
// red or yellow, organic matter makes it black, and leaching or lime makes it pale.

export const soils: Plant[] = [
  {
    id: 'red-tropical-soil',
    name: 'Red tropical soil (laterite, terra roxa)',
    wikipedia: 'Oxisol',
    section: 'soil',
    kind: 'Soil',
    swatch: '#b5452a',
    commonsCategory: 'Laterite',
    photoSearch: ['red dirt road Brazil', 'laterite road Uganda', 'terra roxa Paraná', 'red soil road Kenya'],
    recognise: [
      'Brick-red to orange-red dirt roads, road cuts and football pitches, often with red dust on walls and cars.',
      'The red continues deep down in road cuts (several metres), not just a thin top layer.',
      'Surrounded by green: grass, crops or forest, in a hot and wet (or wet-and-dry) climate.',
    ],
    lookalikes: [
      { id: 'red-desert-soil', name: 'Red desert sand', tell: 'Desert red is loose sand with sparse dry vegetation; tropical red is clay-rich and surrounded by green.' },
      { id: 'red-clay-southeast-us', name: 'Red clay of the US Southeast', tell: 'Same chemistry, but with pines, kudzu and American roads.' },
    ],
    nativeRange: 'The humid tropics and subtropics on old, stable land surfaces: most of Brazil outside the northeast coast, East and West Africa, Madagascar, mainland Southeast Asia, southern India and Sri Lanka, parts of Indonesia and Malaysia.',
    grownIn: 'Visible anywhere the ground is bare: unpaved roads, road cuts, new building sites and freshly ploughed fields.',
    clueCountries: ['BR', 'AR', 'PY', 'BO', 'KE', 'UG', 'TZ', 'RW', 'GH', 'NG', 'SN', 'MG', 'TH', 'KH', 'LA', 'VN', 'IN', 'LK', 'MY', 'ID'],
    science: [
      'Heat and heavy rain, over millions of years, dissolve and wash away almost everything in the rock except the least soluble parts: iron and aluminium oxides and kaolinite clay. What is left is a deep, old, nutrient-poor soil.',
      'The iron is present as hematite (Fe₂O₃), which is red. Where the soil stays wetter, the iron forms goethite instead, which is yellow: that is why the soils of the Amazon and of waterlogged valleys are more yellow-orange than the brick-red soils of the plateaus.',
      'In Brazil, the deepest reds ("terra roxa", purple earth) form on basalt, a rock rich in iron, in Paraná, São Paulo, Mato Grosso do Sul and Goiás.',
    ],
    history: [
      'Laterite hardens when dried, so it has been cut into bricks for thousands of years (the temples of Angkor use laterite blocks).',
      '"Terra roxa" got its name from Italian immigrants in São Paulo: "rossa" (red) became "roxa" (purple) in Portuguese. It made the coffee boom of the 1800s possible.',
    ],
    tips: [
      'Red dirt everywhere in Brazil means the centre, south or southeast. The northeast coast and sertão are sandy grey-white or brown instead, and Amazonas is more yellow.',
      'In Argentina, red soil means Misiones (and a bit of Corrientes). Everywhere else in Argentina is brown, black or pale.',
      'In India, red and laterite soils are the south (Kerala, Karnataka, Goa, Tamil Nadu) and the east (Odisha, Jharkhand); the black soil belt is in between (see black cotton soil).',
      'Red roads with bright green grass: Uganda, Kenya, Rwanda, Ghana or Brazil. Madagascar is nicknamed the "Great Red Island".',
    ],
    remember: [
      'Red = rust. Tropical rain has "rusted" the ground for millions of years: everything else washed away, only the iron rust stayed.',
      'Red means the plateau (well drained, hematite); yellow means the wet lowland (goethite). Rust dries red, stays yellow when wet.',
    ],
    sources: ['https://en.wikipedia.org/wiki/Oxisol', 'https://en.wikipedia.org/wiki/Laterite', 'https://en.wikipedia.org/wiki/Terra_roxa'],
  },
  {
    id: 'red-desert-soil',
    name: 'Red desert sand (outback & Kalahari)',
    wikipedia: 'Outback',
    section: 'soil',
    kind: 'Soil',
    swatch: '#d0652e',
    photoSearch: ['red sand road Northern Territory', 'Kalahari red sand road', 'outback road red dirt Western Australia'],
    recognise: [
      'Vivid orange-red sand and dirt with sparse, dry vegetation: spinifex, saltbush, low scrub, scattered trees.',
      'The red is only a coating: dig down and the sand underneath is paler.',
      'Long straight roads with red verges and red dunes.',
    ],
    lookalikes: [
      { id: 'red-tropical-soil', name: 'Red tropical soil', tell: 'Tropical red soil sits in green, wet landscapes; desert red sits in dry scrub.' },
      { id: 'red-beds', name: 'Red sandstone soils', tell: 'Red beds come from red rock outcrops (cliffs, mesas); outback red is flat sand plains.' },
    ],
    nativeRange: 'Inland Australia (the "Red Centre" and the Pilbara) and the Kalahari in Botswana, Namibia and South Africa\'s Northern Cape.',
    grownIn: 'On every unpaved road and road verge in the region.',
    clueCountries: ['AU', 'NA', 'BW', 'ZA'],
    science: [
      'Each sand grain is coated with a very thin film of iron oxide (hematite). In a dry, hot climate there is no water to wash the iron away and no organic matter to darken the soil, so the red coating builds up over hundreds of thousands of years.',
      'Australia\'s landscapes are among the oldest and most weathered on Earth, which is why the red is so intense. Younger dunes are paler; the older the dune, the redder.',
    ],
    history: [
      'Australia\'s interior is called the "Red Centre" after its soil. Uluru and Kata Tjuta are red for the same reason: their surfaces are coated in iron oxide.',
    ],
    tips: [
      'Red sand verges and spinifex in Australia: Northern Territory, Western Australia or outback Queensland/South Australia. Victoria and Tasmania are green with brown soil.',
      'Red Kalahari sand in southern Africa: Botswana, Namibia\'s east, or South Africa\'s Northern Cape and North West. The Western Cape is grey and green instead.',
    ],
    remember: ['The outback is a desert that has gone rusty: every sand grain wears a thin red coat.'],
    sources: ['https://en.wikipedia.org/wiki/Outback', 'https://en.wikipedia.org/wiki/Kalahari_Desert', 'https://en.wikipedia.org/wiki/Red_Centre'],
  },
  {
    id: 'red-clay-southeast-us',
    name: 'Red clay of the US Southeast',
    wikipedia: 'Ultisol',
    section: 'soil',
    kind: 'Soil',
    swatch: '#b8503a',
    photoSearch: ['Georgia red clay road cut', 'red clay dirt road North Carolina'],
    recognise: [
      'Orange-red clay in road cuts, construction sites and farm tracks, usually with pine forests and kudzu around.',
      'Red streaks on the roadside and red-stained creeks after rain.',
    ],
    lookalikes: [
      { id: 'red-beds', name: 'Red sandstone soils', tell: 'Oklahoma\'s red soil comes from red rock and sits in open prairie; Georgia\'s red clay sits in pine forest.' },
      { id: 'red-tropical-soil', name: 'Red tropical soil', tell: 'Same chemistry in a warmer climate; look for US road markings, mailboxes and pines.' },
    ],
    nativeRange: 'The Piedmont and uplands of the southeastern US: Georgia, the Carolinas, Virginia, Alabama, Tennessee and Mississippi.',
    grownIn: 'Road cuts and cleared land throughout the region.',
    clueCountries: ['US'],
    science: [
      'These are old soils formed in a warm, humid climate. Rain has leached most nutrients, leaving clay rich in iron oxides, which give the red and orange colours.',
      'They formed on the ancient rocks of the Piedmont, which have been weathering for millions of years, so the clay goes down many metres.',
    ],
    history: [
      'Cotton and tobacco farming in the 1800s eroded the topsoil, exposing the red clay subsoil: much of the red you see is the result of that erosion. Pine plantations and kudzu were planted later to hold the soil.',
    ],
    tips: [
      'Red road cuts with pines: Georgia, the Carolinas, Alabama, Virginia or Tennessee. Florida is white sand; the Midwest is black; the Southwest is pale or red rock.',
    ],
    remember: ['"Georgia red clay": the South\'s soil is like a clay flowerpot, red, hard and nutrient-poor.'],
    sources: ['https://en.wikipedia.org/wiki/Ultisol', 'https://en.wikipedia.org/wiki/Piedmont_(United_States)'],
  },
  {
    id: 'red-beds',
    name: 'Red sandstone soils (red beds)',
    wikipedia: 'Red beds',
    section: 'soil',
    kind: 'Soil',
    swatch: '#a8412f',
    photoSearch: ['Prince Edward Island red soil field', 'red soil Devon field', 'Oklahoma red dirt road'],
    recognise: [
      'Brick-red fields, riverbanks and cliffs where the rock underneath is red sandstone or mudstone.',
      'Red rock outcrops, mesas or sea cliffs nearby, and rivers that run red after rain.',
    ],
    lookalikes: [
      { id: 'red-desert-soil', name: 'Red desert sand', tell: 'Outback red is a coating on sand plains; red beds are red rock layers you can see in cliffs.' },
      { id: 'red-clay-southeast-us', name: 'Red clay of the US Southeast', tell: 'Southeastern red clay is weathered soil in pine forest; red beds are red rock under prairie or farmland.' },
    ],
    nativeRange: 'Where ancient red sandstones reach the surface: Oklahoma and the Texas Panhandle, southern Utah, Prince Edward Island (Canada) and Devon (England).',
    grownIn: 'Ploughed fields, road cuts, riverbanks and cliffs.',
    clueCountries: ['US', 'CA', 'GB'],
    science: [
      'The soil is red because the rock under it is red. These rocks formed about 250–300 million years ago in hot deserts and floodplains, where iron in the sediments oxidised to hematite before being buried and turned to stone.',
      'When the rock weathers, the soil inherits its colour, even in a cool, wet climate like Devon\'s or Prince Edward Island\'s, where a new soil would otherwise be brown.',
    ],
    history: [
      'Oklahoma\'s red soil gave its name to the Red River and to "red dirt" music. Prince Edward Island\'s red potato fields and Devon\'s red cattle country are famous for the same rock.',
    ],
    tips: [
      'Red fields in a cool green country: Prince Edward Island in Canada or Devon in England.',
      'Red dirt with prairie and wheat: Oklahoma or the Texas Panhandle. Red rock canyons: southern Utah and northern Arizona.',
    ],
    remember: ['Red beds: the soil is red because the rock is red, a 250-million-year-old desert painting the fields of Oklahoma, PEI and Devon.'],
    sources: ['https://en.wikipedia.org/wiki/Red_beds', 'https://en.wikipedia.org/wiki/Geology_of_Prince_Edward_Island'],
  },
  {
    id: 'black-earth',
    name: 'Black earth (chernozem & prairie soil)',
    wikipedia: 'Chernozem',
    section: 'soil',
    kind: 'Soil',
    swatch: '#2e2621',
    commonsCategory: 'Chernozem',
    photoSearch: ['chernozem field Ukraine', 'black soil field Iowa', 'ploughed field Voronezh'],
    recognise: [
      'Very dark brown to black ploughed fields, flat or gently rolling, with huge fields of wheat, sunflowers, maize or soy.',
      'Black mud on dirt roads after rain; almost no stones.',
      'Few trees except windbreaks, because it is (or was) grassland.',
    ],
    lookalikes: [
      { id: 'black-cotton-soil', name: 'Black cotton soil', tell: 'Black cotton soil cracks into deep polygons when dry and is tropical; chernozem is crumbly and in cool continental grasslands.' },
      { id: 'volcanic-soil', name: 'Volcanic soil', tell: 'Volcanic black comes with volcanoes, lava rock and hills; black earth is on flat plains.' },
    ],
    nativeRange: 'The former steppes and prairies: Ukraine and southern Russia, northern Kazakhstan, Moldova and eastern Romania and Hungary; the US Corn Belt and northern Great Plains; the Canadian Prairies; the Argentine Pampas and Uruguay.',
    grownIn: 'Ploughed fields in spring and autumn show it best.',
    clueCountries: ['UA', 'RU', 'MD', 'RO', 'HU', 'US', 'CA', 'AR', 'UY'],
    science: [
      'Grasses have huge, dense root systems that die back and regrow every year. For thousands of years, dead roots have been added to the soil faster than they could rot, because cold winters and dry summers slow down decomposition.',
      'The dead roots become humus, which is black. Chernozem can be 5–15% organic matter, a metre deep. Calcium from the underlying loess (wind-blown silt) keeps the humus stable.',
      'Forests do not make black soil like this: their leaves fall on top rather than rooting deep, so forest soils are brown or grey.',
    ],
    history: [
      'Chernozem means "black earth" in Russian. It made Ukraine the "breadbasket of Europe" and the US Midwest and Argentine Pampas the world\'s great grain exporters.',
      'In the 1930s, ploughing and drought blew the topsoil away from the southern Great Plains in the Dust Bowl.',
    ],
    tips: [
      'In Russia, black fields mean the south-centre: Voronezh, Belgorod, Kursk, Tambov, Krasnodar, the Volga steppe and southwestern Siberia. The north (Karelia, Arkhangelsk, Moscow\'s forests) is pale and sandy instead.',
      'In the US, black fields mean the Corn Belt and northern Plains (Iowa, Illinois, Minnesota, the Dakotas). In Argentina, the Pampas (Buenos Aires, Santa Fe, Córdoba, Entre Ríos).',
    ],
    remember: ['Black earth = a thousand years of dead grass roots, pickled by cold winters.'],
    sources: ['https://en.wikipedia.org/wiki/Chernozem', 'https://en.wikipedia.org/wiki/Mollisol'],
  },
  {
    id: 'black-cotton-soil',
    name: 'Black cotton soil (vertisol)',
    wikipedia: 'Vertisol',
    section: 'soil',
    kind: 'Soil',
    swatch: '#3b3430',
    photoSearch: ['black cotton soil India cracks', 'Darling Downs black soil', 'vertisol cracks'],
    recognise: [
      'Dark grey to black clay that cracks into deep polygons in the dry season and becomes sticky, impassable mud when wet.',
      'Flat plains, often with cotton, sorghum or soybean fields.',
      'Tilted or wavy roads and walls, because the clay swells and shrinks.',
    ],
    lookalikes: [
      { id: 'black-earth', name: 'Black earth', tell: 'Chernozem is crumbly, humus-rich and in cold grasslands; black cotton soil is heavy cracking clay in the tropics and subtropics.' },
    ],
    nativeRange: 'The Deccan plateau of India (Maharashtra, Madhya Pradesh, Gujarat); the Darling Downs of Queensland and northern New South Wales; the Texas Blackland Prairie; Sudan and Ethiopia.',
    grownIn: 'Fields and verges on flat plains.',
    clueCountries: ['IN', 'AU', 'US'],
    science: [
      'It forms from rocks like basalt that weather into a special clay (smectite) which swells when wet and shrinks when dry. The Deccan plateau is one of the largest basalt lava fields on Earth.',
      'The black colour comes from the clay binding tightly to a small amount of humus, not from lots of organic matter. The swelling and cracking constantly mixes the soil ("vertisol" is from Latin vertere, to turn).',
    ],
    history: ['Called "black cotton soil" because it holds water through the dry season, which suits cotton. It is known in India as "regur".'],
    tips: [
      'In India, black soil means the centre and west (Maharashtra, Madhya Pradesh, Gujarat). Red soil means the south and east; the Ganges plain is pale brown alluvium.',
    ],
    remember: ['Black cotton soil is a sponge made of basalt: it swells in the monsoon and cracks like a jigsaw in the dry season.'],
    sources: ['https://en.wikipedia.org/wiki/Vertisol', 'https://en.wikipedia.org/wiki/Black_soil'],
  },
  {
    id: 'terra-rossa',
    name: 'Terra rossa (Mediterranean red on limestone)',
    wikipedia: 'Terra rossa (soil)',
    section: 'soil',
    kind: 'Soil',
    swatch: '#a3452b',
    commonsCategory: 'Terra rossa',
    photoSearch: ['terra rossa olive grove', 'red soil olive grove Puglia', 'red soil vineyard Istria', 'Algarve red soil'],
    recognise: [
      'Rusty red soil in pockets and fields between white or grey limestone rocks.',
      'Olive groves, vineyards, dry-stone walls and scrub (maquis), in a Mediterranean climate.',
    ],
    lookalikes: [
      { id: 'red-tropical-soil', name: 'Red tropical soil', tell: 'Terra rossa is thin, stony and comes with white limestone and olives; tropical red is deep clay with green vegetation.' },
      { id: 'pale-limestone', name: 'Pale limestone ground', tell: 'Where the red soil has eroded, only the white rock is left.' },
    ],
    nativeRange: 'Limestone areas around the Mediterranean: southern and eastern Spain, the Algarve (Portugal), Apulia (Italy), the Croatian and Montenegrin coast, Slovenia\'s Karst, Greece, southern Turkey, Cyprus, Malta and Israel.',
    grownIn: 'Olive groves, vineyards, and ploughed fields between stone walls.',
    clueCountries: ['ES', 'PT', 'IT', 'HR', 'SI', 'ME', 'AL', 'GR', 'TR', 'CY', 'MT', 'IL'],
    science: [
      'Limestone is mostly calcium carbonate, which rain dissolves. The small amount of clay and iron in the rock is left behind as a residue.',
      'In hot, dry Mediterranean summers the iron oxidises to red hematite. So a white rock produces a red soil: terra rossa is what remains after millions of years of limestone has dissolved.',
    ],
    history: ['Terra rossa is famous in wine: the Coonawarra region of South Australia and many Mediterranean vineyards grow on it.'],
    tips: [
      'Red soil between white rocks with olive trees: Mediterranean coast. In Spain, that means the south and east (Andalucía, Valencia, Murcia, the Balearics), not the green north.',
      'In Turkey: the southern and western coasts (Antalya, Muğla, Mersin, İzmir).',
    ],
    remember: ['Terra rossa is the red "tea stain" left in the cup when white limestone dissolves.'],
    sources: ['https://en.wikipedia.org/wiki/Terra_rossa_(soil)'],
  },
  {
    id: 'pale-limestone',
    name: 'Pale limestone and chalk ground',
    wikipedia: 'Chalk',
    section: 'soil',
    kind: 'Soil',
    swatch: '#e2dccb',
    photoSearch: ['Yucatán limestone road scrub', 'chalk field Wiltshire flints', 'white chalk ploughed field'],
    recognise: [
      'White to pale grey ground: ploughed fields full of white chalk or flint, or thin soil with white rock showing through.',
      'Road cuts and walls of white stone.',
    ],
    lookalikes: [
      { id: 'white-sand', name: 'White sand', tell: 'White sand is loose and grainy; chalk and limestone are rock and clods.' },
      { id: 'terra-rossa', name: 'Terra rossa', tell: 'The red soil that forms on limestone in drier, warmer places.' },
    ],
    nativeRange: 'The Yucatán peninsula (Mexico); the chalk downs of southern England and northern France (Champagne); Malta; Jordan and Tunisia.',
    grownIn: 'Ploughed fields, road cuts and thin stony soils.',
    clueCountries: ['MX', 'GB', 'FR', 'MT', 'JO', 'TN'],
    science: [
      'Chalk and limestone are made of the shells of tiny sea creatures, so they are white. Soils on them are thin and full of lime, which keeps them pale; iron oxides do not show much against all that calcium carbonate.',
      'The Yucatán is one enormous limestone plate: rain sinks straight in (there are no rivers, only cenotes), so the ground stays dry and pale with thin soil.',
    ],
    history: ['England\'s white cliffs of Dover and white hill figures (like the Uffington White Horse) are cut into chalk. Champagne\'s vines grow on chalk.'],
    tips: [
      'White stony ground and low scrub in Mexico: Yucatán, Quintana Roo or Campeche.',
      'White-speckled ploughed fields in England: the chalk downs of the south (Wiltshire, Hampshire, Sussex).',
    ],
    remember: ['Chalk soil is a graveyard of seashells: white because it was once the sea floor.'],
    sources: ['https://en.wikipedia.org/wiki/Chalk', 'https://en.wikipedia.org/wiki/Rendzina'],
  },
  {
    id: 'podzol',
    name: 'Grey sandy forest soil (podzol)',
    wikipedia: 'Podzol',
    section: 'soil',
    kind: 'Soil',
    swatch: '#b9b3a8',
    commonsCategory: 'Podzols',
    photoSearch: ['podzol profile', 'sandy forest road Finland pine', 'sandy road pine forest Latvia'],
    recognise: [
      'Pale grey to whitish sand on forest tracks and road cuts under pine and spruce forest.',
      'In a road cut: a dark top layer, then an ash-grey bleached layer, then a rusty orange-brown layer below.',
    ],
    lookalikes: [
      { id: 'white-sand', name: 'White sand', tell: 'Tropical white sand comes with palms; podzol comes with pines, spruce and birch.' },
      { id: 'black-earth', name: 'Black earth', tell: 'South of the forest, in the old grasslands, the soil turns black.' },
    ],
    nativeRange: 'The boreal forest belt: Finland, Sweden, Norway, the Baltic states, Poland, northern Russia and Canada\'s Shield; also heaths and pine barrens in Denmark, the Netherlands, northern Germany, New Jersey and Michigan.',
    grownIn: 'Forest roads, sandy verges and road cuts in pine forests.',
    clueCountries: ['FI', 'SE', 'NO', 'EE', 'LV', 'LT', 'PL', 'DK', 'NL', 'RU', 'CA', 'US'],
    science: [
      'Pine and spruce needles make acidic litter. Rainwater passing through it dissolves iron and humus from the upper soil and carries them down, leaving a bleached, ash-grey sandy layer (podzol means "under ash" in Russian).',
      'The iron and humus are deposited lower down, making a rusty orange-brown layer. The cold, wet climate and sandy glacial deposits make the process strong.',
    ],
    history: ['Much of this sand was left by the ice sheets of the last ice age, which is why sandy pine forests dominate from the Netherlands to Russia.'],
    tips: [
      'Pale sandy tracks under pines: the Baltic, Scandinavia, northern Russia, Poland or Canada. Moving south in Russia or Ukraine, the ground turns black.',
    ],
    remember: ['Podzol = "under ash": pine needles bleach the soil ash-grey, and the rust ends up one floor down.'],
    sources: ['https://en.wikipedia.org/wiki/Podzol'],
  },
  {
    id: 'white-sand',
    name: 'White sand (coastal and tropical)',
    wikipedia: 'Arenosol',
    section: 'soil',
    kind: 'Soil',
    swatch: '#ece5d2',
    photoSearch: ['white sand road Ceará', 'sand road coconut Rio Grande do Norte', 'Florida sand road pine'],
    recognise: [
      'Bright white to pale grey loose sand on roads, verges and yards, with palms, cashew trees or pines.',
      'Sandy tracks that look like beach, even far from the sea.',
    ],
    lookalikes: [
      { id: 'pale-limestone', name: 'Pale limestone', tell: 'Limestone ground is rocky; white sand is loose.' },
      { id: 'podzol', name: 'Podzol', tell: 'Podzol is grey sand under northern conifers.' },
    ],
    nativeRange: 'The northeast coast of Brazil (the "tabuleiros" and restinga), Florida and the Atlantic coastal plain, and sandy coasts in the tropics.',
    grownIn: 'Roads, verges and yards near the coast.',
    clueCountries: ['BR', 'US'],
    science: [
      'The sand is almost pure quartz. Everything else (iron, clay, organic matter) has been washed out, so there is nothing to colour it: quartz is colourless, which looks white in bulk.',
      'These sands are old beach and river deposits. In Brazil\'s northeast they form flat coastal plateaus behind the beaches.',
    ],
    history: ['These poor sandy soils were left to coconut groves, cashew trees and cattle; sugarcane went on the richer clay soils nearby.'],
    tips: [
      'In Brazil: white sand with coconut palms and cashew trees means the northeast coast (Ceará to Bahia). Red soil means you are inland or further south.',
      'In the US: white sand verges and pines, flat: Florida.',
    ],
    remember: ['White sand is soil with everything washed out: only the clear quartz is left, like sugar with the coffee rinsed off.'],
    sources: ['https://en.wikipedia.org/wiki/Arenosol'],
  },
  {
    id: 'volcanic-soil',
    name: 'Black volcanic soil and sand',
    wikipedia: 'Andisol',
    section: 'soil',
    kind: 'Soil',
    swatch: '#3c3a38',
    photoSearch: ['black volcanic soil field Lanzarote', 'black sand road Iceland', 'volcanic soil Java field'],
    recognise: [
      'Dark brown to black soil, black sand beaches, and black lava rock in walls and fields.',
      'Volcanic cones and very green, intensively farmed slopes (in the wet tropics).',
    ],
    lookalikes: [
      { id: 'black-earth', name: 'Black earth', tell: 'Black earth is on flat plains without rock; volcanic soil comes with lava, cones and hills.' },
    ],
    nativeRange: 'Volcanic islands and arcs: Iceland, the Canary Islands, Hawaii, Java and Bali, Japan (Kyushu, around Mt Fuji, Hokkaido), New Zealand\'s North Island, Central America (Guatemala, Costa Rica), Ecuador and Réunion.',
    grownIn: 'Fields, verges and beaches in volcanic areas.',
    clueCountries: ['IS', 'ES', 'US', 'ID', 'JP', 'NZ', 'GT', 'CR', 'EC', 'RE'],
    science: [
      'Volcanic ash weathers into special minerals (allophane) that bind organic matter very strongly, so the soil builds up a lot of dark humus quickly. Basalt lava and black sand are dark from iron- and magnesium-rich minerals.',
      'These soils are very fertile and hold water well, which is why volcanic slopes in Java, Bali and Central America are densely farmed.',
    ],
    history: ['Java\'s volcanic soils support one of the densest rural populations on Earth. In Iceland, black sand plains (sandur) come from volcanic ash washed out by glacial floods.'],
    tips: [
      'In Indonesia, black-brown soil and rice terraces with volcanoes means Java or Bali; red-yellow soil and oil palms means Sumatra, Kalimantan or Sulawesi.',
      'In Spain, black lava fields and ash mean the Canary Islands.',
    ],
    remember: ['Volcanic soil is the volcano\'s ashes turned into compost: black and fertile.'],
    sources: ['https://en.wikipedia.org/wiki/Andisol'],
  },
  {
    id: 'pale-desert-soil',
    name: 'Pale desert ground (grey, beige, gravel)',
    wikipedia: 'Aridisol',
    section: 'soil',
    kind: 'Soil',
    swatch: '#c9b48f',
    photoSearch: ['gravel desert road', 'desert pavement Nevada road'],
    recognise: [
      'Beige, grey or buff ground covered in gravel and stones ("desert pavement"), with widely spaced shrubs.',
      'White crusts of salt or lime on the surface in low spots.',
    ],
    lookalikes: [
      { id: 'red-desert-soil', name: 'Red desert sand', tell: 'Old desert sand turns red; young gravel deserts stay beige and grey.' },
    ],
    nativeRange: 'Dry lands with little soil development: the US Great Basin and Southwest, northern Mexico, the Atacama and coastal Peru, Patagonia and Argentina\'s dry west, the Middle East, North Africa and Mongolia.',
    grownIn: 'Everywhere off the road in desert regions.',
    clueCountries: ['US', 'MX', 'CL', 'PE', 'AR', 'AE', 'JO', 'IL', 'TN', 'MN'],
    science: [
      'Without rain there is little chemical weathering and very little organic matter, so the soil stays the colour of the crushed rock it came from. Wind blows away fine particles, leaving a layer of gravel on top.',
      'What little water there is evaporates at the surface and leaves lime (calcium carbonate) and salts behind, which whiten the ground.',
    ],
    history: ['Desert pavement can take thousands of years to form; tyre tracks across it can last for decades.'],
    tips: [
      'Pale gravel desert with no plants at all: the Atacama (northern Chile) or coastal Peru. With sagebrush: Nevada and the Great Basin; with cacti: Sonora, Chihuahua or Arizona.',
    ],
    remember: ['Pale desert ground is soil that never got cooked: no rain, no rust, no humus, just crushed rock.'],
    sources: ['https://en.wikipedia.org/wiki/Aridisol', 'https://en.wikipedia.org/wiki/Desert_pavement'],
  },
]

/** Where each soil is typical inside the countries split on the vegetation map. */
export const soilRegions: Record<string, string[]> = {
  'red-tropical-soil': [
    'BR-PR', 'BR-SP', 'BR-MG', 'BR-GO', 'BR-DF', 'BR-MT', 'BR-MS', 'BR-TO', 'BR-RO', 'BR-AC', 'BR-PA', 'BR-MA', 'BR-BA', 'BR-RJ', 'BR-ES', 'BR-SC', 'BR-RS',
    'AR-N',
    'IN-KL', 'IN-KA', 'IN-TN', 'IN-GA', 'IN-OR', 'IN-JH', 'IN-CT', 'IN-AP', 'IN-TG',
    'MY',
    'ID-KB', 'ID-KT', 'ID-KS', 'ID-KI', 'ID-KU', 'ID-SG', 'ID-ST', 'ID-RI', 'ID-JA', 'ID-SS', 'ID-LA', 'ID-BE', 'ID-BB',
  ],
  'red-desert-soil': ['AU-NT', 'AU-WA', 'AU-SA', 'AU-QLD', 'AU-NSW', 'ZA-NC', 'ZA-NW'],
  'red-clay-southeast-us': ['US-GA', 'US-AL', 'US-SC', 'US-NC', 'US-VA', 'US-TN', 'US-MS'],
  'red-beds': ['US-OK', 'US-TX', 'US-UT', 'CA-PE', 'GB-ENG'],
  'black-earth': [
    'RU-VOR', 'RU-BEL', 'RU-KRS', 'RU-LIP', 'RU-TAM', 'RU-ORL', 'RU-TUL', 'RU-RYA', 'RU-KDA', 'RU-STA', 'RU-ROS', 'RU-SAR', 'RU-SAM', 'RU-ORE', 'RU-PNZ', 'RU-ULY', 'RU-TA', 'RU-BA', 'RU-ALT', 'RU-OMS', 'RU-NVS', 'RU-KGN', 'RU-CHE',
    'US-IA', 'US-IL', 'US-MN', 'US-NE', 'US-KS', 'US-SD', 'US-ND', 'US-IN',
    'CA-SK', 'CA-MB', 'CA-AB',
    'AR-B', 'AR-S', 'AR-X', 'AR-E', 'AR-L',
  ],
  'black-cotton-soil': ['IN-MH', 'IN-MP', 'IN-GJ', 'AU-QLD', 'AU-NSW', 'US-TX'],
  'terra-rossa': ['ES-AN', 'ES-VC', 'ES-MC', 'ES-IB', 'ES-CT', 'TR-07', 'TR-48', 'TR-33', 'TR-35', 'TR-09', 'TR-31'],
  'pale-limestone': ['MX-YUC', 'MX-ROO', 'MX-CAM', 'GB-ENG'],
  podzol: [
    'RU-KR', 'RU-ARK', 'RU-KO', 'RU-MUR', 'RU-LEN', 'RU-NGR', 'RU-PSK', 'RU-VLG', 'RU-KIR', 'RU-KOS', 'RU-TVE', 'RU-KHM', 'RU-YAN', 'RU-TOM',
    'CA-QC', 'CA-ON', 'CA-NL', 'CA-NB', 'CA-NS',
    'US-ME', 'US-MI', 'US-WI', 'US-NJ',
  ],
  'white-sand': ['BR-CE', 'BR-RN', 'BR-PB', 'BR-PE', 'BR-AL', 'BR-SE', 'BR-PI', 'BR-MA', 'BR-BA', 'US-FL'],
  'volcanic-soil': [
    'ES-CN', 'US-HI',
    'ID-JB', 'ID-JT', 'ID-JI', 'ID-YO', 'ID-BT', 'ID-BA', 'ID-NB', 'ID-SA',
    'JP-01', 'JP-19', 'JP-22', 'JP-43', 'JP-46', 'JP-42',
    'NZ-AUK', 'NZ-WKO', 'NZ-BOP', 'NZ-TKI',
  ],
  'pale-desert-soil': [
    'US-NV', 'US-AZ', 'US-NM', 'US-UT',
    'MX-SON', 'MX-CHH', 'MX-COA', 'MX-BCN', 'MX-BCS',
    'CL-AN', 'CL-TA', 'CL-AP', 'CL-AT',
    'PE-ICA', 'PE-LIM', 'PE-LMA', 'PE-ARE', 'PE-MOQ', 'PE-TAC', 'PE-LAL', 'PE-LAM', 'PE-PIU',
    'AR-Z', 'AR-U', 'AR-Q', 'AR-R', 'AR-J', 'AR-F', 'AR-K',
  ],
}

/**
 * Order used when one region has several soils (the soil-colour map shows one colour per region):
 * the more distinctive, local soils first.
 */
export const soilMapOrder = [
  'white-sand', 'volcanic-soil', 'terra-rossa', 'red-beds', 'pale-limestone', 'red-desert-soil', 'black-cotton-soil',
  'red-clay-southeast-us', 'red-tropical-soil', 'podzol', 'black-earth', 'pale-desert-soil',
]

/** Regions too mixed to paint in one colour on the soil-colour map (each soil page still shows them). */
export const soilMapMixed = ['GB-ENG', 'US-TX', 'AU-NSW']

/** How soil colour changes inside large countries: the region-by-region summary on the soil map page. */
export const soilCountryNotes: { country: string; text: string }[] = [
  { country: 'BR', text: 'Red almost everywhere in the centre, south and southeast (deepest "terra roxa" on the basalt of Paraná, São Paulo, Mato Grosso do Sul and Goiás). The northeast coast is white or grey sand with coconut palms; the dry sertão inland is brown-grey and stony; the Amazon is yellow-orange rather than red.' },
  { country: 'AR', text: 'Only Misiones (and eastern Corrientes) has red soil. The Pampas (Buenos Aires, Santa Fe, Córdoba, Entre Ríos) are black; the northwest and Cuyo are pale, stony and sometimes pink-red rock; Patagonia is grey-beige gravel.' },
  { country: 'US', text: 'Red clay in the Southeast (Georgia, the Carolinas, Alabama, Virginia); red dirt in Oklahoma and the Texas Panhandle; black soil in the Corn Belt and northern Plains; white sand in Florida; pale sandy soil under the pines of Maine, Michigan and New Jersey; pale desert in Nevada, Arizona and New Mexico; red rock in southern Utah; dark volcanic in Hawaii.' },
  { country: 'CA', text: 'Red only on Prince Edward Island. Black prairie soil in Saskatchewan, Manitoba and Alberta; pale sandy podzols in the boreal forests of Quebec, Ontario and the Atlantic provinces.' },
  { country: 'MX', text: 'Pale limestone and white rock in the Yucatán (Yucatán, Quintana Roo, Campeche); pale gravel desert in the north (Sonora, Chihuahua, Coahuila, Baja California); darker volcanic soils around the central volcanoes; red-brown soils in the wetter south.' },
  { country: 'AU', text: 'Vivid red in the Northern Territory, Western Australia and outback Queensland and South Australia; black cracking clay on the Darling Downs (Queensland) and northern NSW; brown and green in Victoria, Tasmania and the coastal southeast.' },
  { country: 'IN', text: 'Red and laterite soils in the south and east (Kerala, Karnataka, Goa, Tamil Nadu, Odisha, Jharkhand); black cotton soil in the centre-west (Maharashtra, Madhya Pradesh, Gujarat); pale grey-brown alluvium on the Ganges plain (Punjab to West Bengal); sandy desert in Rajasthan.' },
  { country: 'RU', text: 'Pale grey sandy podzol in the north (Karelia, Arkhangelsk, Komi, around St Petersburg); brown-grey forest soil around Moscow; black earth from Kursk and Voronezh to Krasnodar, the Volga steppe and southwestern Siberia; lighter chestnut and salty soils towards the Caspian (Kalmykia, Astrakhan).' },
  { country: 'ID', text: 'Dark volcanic soil on Java, Bali and Lombok; red-yellow soil in Sumatra, Kalimantan and Sulawesi (bright red nickel soil in Southeast Sulawesi); white sand patches in Kalimantan.' },
  { country: 'ES', text: 'Terra rossa (red on white limestone) in the south and east (Andalucía, Valencia, Murcia, the Balearics); brown and green in the wet north (Galicia, Asturias, Cantabria, the Basque Country); pale beige and grey on the central plateau; black lava on the Canary Islands.' },
  { country: 'ZA', text: 'Red Kalahari sand in the Northern Cape and North West; grey and brown in the Western Cape; red and brown in the eastern highlands (Mpumalanga, KwaZulu-Natal).' },
  { country: 'GB', text: 'Red earth in Devon (and parts of the Midlands); white chalk fields on the southern downs; dark peat under heather in Scotland and the Pennines; ordinary brown elsewhere.' },
  { country: 'JP', text: 'Dark volcanic ash soil (kuroboku) around the volcanoes of Kyushu, Mt Fuji and Hokkaido; reddish-brown "Kanto loam" around Tokyo; grey paddy soils in the rice plains.' },
]
