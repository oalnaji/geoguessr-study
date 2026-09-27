import type { CountryStudy, StudyRegion } from './types'

// Vietnam's 63 provinces as they were until July 2025, which is what Street View imagery, addresses and
// number plates show. In 2025 they were merged into 34; each province notes where it went.

const merged = (into: string) => `Since July 2025 part of ${into} province.`

const r = (id: string, name: string, group: string, plate: string, looks: string, clues: string[], remember: string, note?: string): StudyRegion =>
  ({ id, name, group, looks, clues: [`Plate code ${plate}`, ...clues], remember, ...(note ? { note } : {}) })

export const vietnam: CountryStudy = {
  country: 'VN',
  unit: 'provinces (before the 2025 merger)',
  plonkit: 'vietnam',
  quizGroups: true,
  intro: 'Vietnam is long and thin: the mountainous north, the flat Red River Delta around Hanoi, a narrow central coast with the Central Highlands behind it, and the flat, watery Mekong Delta in the south. Street View shows the 63 provinces that existed before the 2025 merger into 34, and addresses on shop signs almost always end with the province name.',
  tips: [
    'Addresses are everywhere on shop signs and end with the district and province: learn the province names (and abbreviations like TG = Tiền Giang).',
    'Number plate codes are painted on trucks and buses: 29–33 and 40 Hà Nội, 50–59 and 41 Hồ Chí Minh City, 15–16 Hải Phòng, 43 Đà Nẵng, 65 Cần Thơ.',
    'Area codes start with 2 and run roughly from north to south.',
    'North vs south by poles: big holes along the whole pole and few pinholes = north; upside-down trapezoid pole tops = centre and north; triangle pole tops and off-centre crossbars = south; an "A" over the crossbar = centre.',
    'Thin spires on house roofs are almost only found in the north. Tall boxy houses with classical columns = Red River Delta; single-storey concrete houses along canals = Mekong Delta.',
  ],
  groups: [
    { name: 'Northwest', blurb: 'High mountains along the Lao and Chinese borders: terraced rice, stilt houses of ethnic minorities, bamboo poles.' },
    { name: 'Northeast', blurb: 'Karst peaks and green hills towards China: tea, Khasi pines, Hạ Long Bay.' },
    { name: 'Red River Delta', blurb: 'Flat, crowded rice plains around Hanoi and Hải Phòng: tall narrow houses and graves in the fields.' },
    { name: 'North Central Coast', blurb: 'A narrow strip between the mountains and the sea, from Thanh Hóa to Huế.' },
    { name: 'South Central Coast', blurb: 'Beaches, dry coastal plains and fishing towns from Đà Nẵng to Phan Thiết.' },
    { name: 'Central Highlands', blurb: 'Plateaus of red soil: coffee, pepper, rubber and pine; cooler and drier.' },
    { name: 'Southeast', blurb: 'Hồ Chí Minh City and the industrial provinces around it: rubber plantations and factories.' },
    { name: 'Mekong Delta', blurb: 'Totally flat and water-rich: straight canals, rice, coconut palms and fruit orchards.' },
  ],
  regions: [
    // Northwest
    r('VN-01', 'Lai Châu', 'Northwest', '25', 'Remote high mountains on the Chinese border, with tea and terraced fields.', ['Stilt houses; very few towns'], 'Lai Châu: the far northwest corner, all mountains.'),
    r('VN-71', 'Điện Biên', 'Northwest', '27', 'A long valley ringed by mountains near Laos, famous for the 1954 battle.', ['Wide flat rice valley surrounded by hills'], 'Điện Biên Phủ: the valley where the French lost Indochina.'),
    r('VN-05', 'Sơn La', 'Northwest', '26', 'Mountains and plateaus with maize, fruit orchards and Thai minority stilt houses.', ['Stilt houses; bamboo poles in villages'], 'Sơn La: fruit orchards on the mountain plateau of Mộc Châu.'),
    r('VN-14', 'Hòa Bình', 'Northwest', '28', 'Hills and a huge hydro reservoir just west of Hanoi; Mường minority villages.', ['Karst hills close to the delta'], 'Hòa Bình means "peace": the first mountains west of Hanoi.', merged('Phú Thọ')),
    r('VN-02', 'Lào Cai', 'Northwest', '24', 'Vietnam\'s highest mountains (Fansipan), rice terraces and the resort town of Sa Pa with busy signage and European-style hotels.', ['Sa Pa: touristy mountain town'], 'Lào Cai is Sa Pa: terraces under Fansipan, the roof of Indochina.'),
    r('VN-06', 'Yên Bái', 'Northwest', '21', 'Mountains and the Red River valley, with tea and the Mù Cang Chải rice terraces.', ['Terraced rice fields'], 'Yên Bái: the golden rice terraces of Mù Cang Chải.', merged('Lào Cai')),
    // Northeast
    r('VN-03', 'Hà Giang', 'Northeast', '23', 'The far north: pointy karst peaks with dark exposed rock (Đồng Văn Geopark) and switchback roads.', ['Round pointy karst mountains with bare dark rock'], 'Hà Giang: the northernmost tip, rocky karst loops.', merged('Tuyên Quang')),
    r('VN-04', 'Cao Bằng', 'Northeast', '11', 'Karst mountains and green valleys on the Chinese border (Bản Giốc waterfall).', ['Karst peaks'], 'Cao Bằng: 11 on the plates and a waterfall on the border.'),
    r('VN-53', 'Bắc Kạn', 'Northeast', '97', 'Forested hills and Ba Bể lake.', ['Very rural and forested'], 'Bắc Kạn: the lake of Ba Bể in the hills.', merged('Thái Nguyên')),
    r('VN-09', 'Lạng Sơn', 'Northeast', '12', 'Hills with clusters of Khasi pines, on the main road to China.', ['Khasi pines on the hills'], 'Lạng Sơn: pines and the gate to China.'),
    r('VN-07', 'Tuyên Quang', 'Northeast', '22', 'Forested hills and river valleys.', ['Tea plantations'], 'Tuyên Quang: green hills of the revolution\'s base area.'),
    r('VN-69', 'Thái Nguyên', 'Northeast', '20', 'The tea capital: hills of trimmed tea bushes, plus an industrial city.', ['Tea plantations on hillsides'], 'Thái Nguyên = tea: Vietnam\'s most famous green tea.'),
    r('VN-68', 'Phú Thọ', 'Northeast', '19', 'Where the delta meets the hills: tea, forests and the Hùng Kings temple.', ['Tea'], 'Phú Thọ: land of the legendary Hùng Kings.'),
    r('VN-54', 'Bắc Giang', 'Northeast', '98', 'Hills and lychee orchards next to the delta.', ['Lychee orchards'], 'Bắc Giang: lychees.', merged('Bắc Ninh')),
    r('VN-13', 'Quảng Ninh', 'Northeast', '14', 'Hạ Long Bay: roads along the coast with pointy rocky islands rising out of the sea; coal mines; Khasi pines.', ['Limestone islands in the sea', 'Khasi pines'], 'Quảng Ninh is Hạ Long Bay: dragons\' teeth in the sea.'),
    // Red River Delta
    r('VN-HN', 'Hà Nội', 'Red River Delta', '29–33, 40', 'The capital: dense tall narrow houses, lakes, motorbikes, and rice plains around the edges.', ['Tall "tube houses" with classical balconies and pillars'], 'Hà Nội: 29 on the plate, lakes and tube houses.'),
    r('VN-HP', 'Hải Phòng', 'Red River Delta', '15, 16', 'The northern port city and flat delta farmland by the sea.', ['Port cranes, flat fields'], 'Hải Phòng: Hanoi\'s harbour.'),
    r('VN-70', 'Vĩnh Phúc', 'Red River Delta', '88', 'Flat delta with factories north of Hanoi, and the Tam Đảo hills.', ['Industrial parks'], 'Vĩnh Phúc: factories between Hanoi and the hills.', merged('Phú Thọ')),
    r('VN-56', 'Bắc Ninh', 'Red River Delta', '99', 'Small, crowded and industrial (Samsung factories), with pagodas and flat rice fields.', ['Very dense; factories'], 'Bắc Ninh: 99, smallest and busiest, Samsung\'s phone factory.'),
    r('VN-61', 'Hải Dương', 'Red River Delta', '34', 'Flat rice and vegetable fields between Hanoi and Hải Phòng.', ['Graves in the middle of fields'], 'Hải Dương: halfway between Hanoi and the port.', merged('Hải Phòng')),
    r('VN-66', 'Hưng Yên', 'Red River Delta', '89', 'Flat delta farmland with longan orchards.', ['Longan orchards'], 'Hưng Yên: longan fruit.'),
    r('VN-20', 'Thái Bình', 'Red River Delta', '17', 'Totally flat rice land, very densely farmed.', ['Endless flat paddies'], 'Thái Bình: the rice bowl of the north.', merged('Hưng Yên')),
    r('VN-63', 'Hà Nam', 'Red River Delta', '90', 'Flat rice plains with karst hills in the west.', ['Karst near flat fields'], 'Hà Nam: "south of the river".', merged('Ninh Bình')),
    r('VN-67', 'Nam Định', 'Red River Delta', '18', 'Flat coastal delta with Catholic churches.', ['Many Catholic churches'], 'Nam Định: church spires over rice fields.', merged('Ninh Bình')),
    r('VN-18', 'Ninh Bình', 'Red River Delta', '35', 'Karst towers rising out of rice fields (Tràng An, Tam Cốc): "Hạ Long Bay on land".', ['Limestone towers standing in flat paddies'], 'Ninh Bình is Hạ Long Bay on land.'),
    // North Central Coast
    r('VN-21', 'Thanh Hóa', 'North Central Coast', '36', 'A big province of coastal plain, hills and mountains towards Laos.', ['Long stretches of Highway 1'], 'Thanh Hóa: where the north ends and the long coast begins.'),
    r('VN-22', 'Nghệ An', 'North Central Coast', '37', 'Vietnam\'s largest province by area: coastal plain and mountains; Hồ Chí Minh\'s home region.', ['Big, rural, hilly inland'], 'Nghệ An: the biggest province, Uncle Hồ\'s home.'),
    r('VN-23', 'Hà Tĩnh', 'North Central Coast', '38', 'Narrow coastal plain with sand dunes and hills.', ['Sandy coastal land'], 'Hà Tĩnh: a thin strip of sand between hills and sea.'),
    r('VN-24', 'Quảng Bình', 'North Central Coast', '73', 'Caves and karst of Phong Nha, sand dunes, and wind turbines near Đồng Hới.', ['Karst jungle; wind turbines southeast of Đồng Hới'], 'Quảng Bình: the world\'s biggest cave, Sơn Đoòng.', merged('Quảng Trị')),
    r('VN-25', 'Quảng Trị', 'North Central Coast', '74', 'The former DMZ: hills, sand and rubber; wind farms in the west.', ['Wind turbines in the west'], 'Quảng Trị: the old demilitarised zone.'),
    r('VN-26', 'Thừa Thiên Huế', 'North Central Coast', '75', 'The imperial city of Huế on the Perfume River, lagoons and hills.', ['Imperial citadel; lagoons'], 'Huế: the old imperial capital on the Perfume River.'),
    // South Central Coast
    r('VN-DN', 'Đà Nẵng', 'South Central Coast', '43', 'A modern beach city with bridges (Dragon Bridge) and the Hải Vân pass.', ['Wide new roads and high-rises by the beach'], 'Đà Nẵng: 43 and a dragon bridge that breathes fire.'),
    r('VN-27', 'Quảng Nam', 'South Central Coast', '92', 'Hội An\'s old yellow houses with dark brown doors, rice fields and the Mỹ Sơn ruins.', ['Hội An: old yellow buildings'], 'Quảng Nam is Hội An: yellow walls and lanterns.', merged('Đà Nẵng')),
    r('VN-29', 'Quảng Ngãi', 'South Central Coast', '76', 'Coastal plain with an oil refinery and the Lý Sơn islands.', ['Industrial zone at Dung Quất'], 'Quảng Ngãi: garlic island Lý Sơn.'),
    r('VN-31', 'Bình Định', 'South Central Coast', '77', 'Coastal plain and hills around Quy Nhơn; wind turbines to the east.', ['Wind turbines near Quy Nhơn'], 'Bình Định: martial arts and Quy Nhơn beaches.', merged('Gia Lai')),
    r('VN-32', 'Phú Yên', 'South Central Coast', '78', 'Quiet coastal plain with rocky headlands.', ['Rocky coast'], 'Phú Yên: yellow flowers on green grass (from the film).', merged('Đắk Lắk')),
    r('VN-34', 'Khánh Hòa', 'South Central Coast', '79', 'Nha Trang\'s beaches and hotels, Cam Ranh Bay, and sand dunes along the road on the northern peninsula.', ['Sand dunes hugging the road in the far north'], 'Khánh Hòa is Nha Trang: beach high-rises.'),
    r('VN-36', 'Ninh Thuận', 'South Central Coast', '85', 'The driest province: cactus, grapes, sheep and Cham towers.', ['Very dry, rocky landscape'], 'Ninh Thuận: Vietnam\'s desert, with grapes and Cham towers.', merged('Khánh Hòa')),
    r('VN-40', 'Bình Thuận', 'South Central Coast', '86', 'Dry, sandy coast with red and white dunes at Mũi Né, dragon-fruit farms around Phan Thiết, and wind farms.', ['Dragon-fruit fields (like upturned mops)', 'Signs in Cyrillic for Russian tourists near Mũi Né'], 'Bình Thuận: dragon fruit and sand dunes.', merged('Lâm Đồng')),
    // Central Highlands
    r('VN-28', 'Kon Tum', 'Central Highlands', '82', 'Hilly red-soil plateau with forests and rubber; Ba Na minority villages.', ['Red soil; rubber'], 'Kon Tum: the quiet top of the Highlands.', merged('Quảng Ngãi')),
    r('VN-30', 'Gia Lai', 'Central Highlands', '81', 'Rolling red-soil plateau around Pleiku: coffee, pepper, rubber; wind farms south of Pleiku.', ['Red soil, pepper vines on posts'], 'Gia Lai: Pleiku\'s red earth.'),
    r('VN-33', 'Đắk Lắk', 'Central Highlands', '47', 'The coffee capital: Buôn Ma Thuột, coffee and pepper on red soil, wind turbines to the north.', ['Coffee everywhere; black pepper vines'], 'Đắk Lắk is coffee: Buôn Ma Thuột, Vietnam\'s coffee capital.'),
    r('VN-72', 'Đắk Nông', 'Central Highlands', '48', 'Red-soil plateau with coffee, pepper and bauxite mines.', ['Red soil; coffee'], 'Đắk Nông: coffee and bauxite.', merged('Lâm Đồng')),
    r('VN-35', 'Lâm Đồng', 'Central Highlands', '49', 'Cool highlands: Đà Lạt\'s pine forests and endless greenhouses, and tea around Bảo Lộc.', ['Greenhouses covering the hills around Đà Lạt', 'Tea plantations around Bảo Lộc'], 'Lâm Đồng is Đà Lạt: pines, flowers and greenhouses.'),
    // Southeast
    r('VN-SG', 'Hồ Chí Minh City', 'Southeast', '50–59, 41', 'Vietnam\'s biggest city: dense streets, motorbikes, high-rises and canals.', ['Very dense traffic of motorbikes'], 'Saigon: 51 on the plates, a sea of motorbikes.'),
    r('VN-57', 'Bình Dương', 'Southeast', '61', 'Industrial parks and new towns north of Saigon, with rubber plantations.', ['Factories; rubber'], 'Bình Dương: Saigon\'s factory floor.', merged('Hồ Chí Minh City')),
    r('VN-58', 'Bình Phước', 'Southeast', '93', 'Rubber and cashew plantations on red soil near Cambodia.', ['Rows of rubber trees with plastic cups; cashews'], 'Bình Phước: cashews and rubber.', merged('Đồng Nai')),
    r('VN-39', 'Đồng Nai', 'Southeast', '60', 'Industrial Biên Hòa, rubber plantations and forests.', ['Rubber plantations'], 'Đồng Nai: Biên Hòa\'s factories and rubber.'),
    r('VN-37', 'Tây Ninh', 'Southeast', '70', 'Flat land with one big lone mountain (Núi Bà Đen) and the Cao Đài temple.', ['A single large mountain in flat country'], 'Tây Ninh: the Black Virgin Mountain alone on the plain.'),
    r('VN-43', 'Bà Rịa–Vũng Tàu', 'Southeast', '72', 'Beach city of Vũng Tàu, oil industry and the Côn Đảo islands.', ['Oil and port industry'], 'Vũng Tàu: Saigon\'s beach.', merged('Hồ Chí Minh City')),
    // Mekong Delta
    r('VN-41', 'Long An', 'Mekong Delta', '62', 'Flat rice fields and dragon-fruit farms near the Tiền Giang border.', ['Dragon fruit near Mỹ Tho'], 'Long An: the gateway from Saigon to the delta.', merged('Tây Ninh')),
    r('VN-46', 'Tiền Giang', 'Mekong Delta', '63', 'Fruit orchards, canals and Mỹ Tho on the Mekong.', ['Dragon fruit near the Long An border'], 'Tiền Giang: fruit orchards along the Mekong.', merged('Đồng Tháp')),
    r('VN-50', 'Bến Tre', 'Mekong Delta', '71', 'Islands between Mekong branches, covered in coconut palms.', ['Coconut palms everywhere'], 'Bến Tre: the coconut kingdom.', merged('Vĩnh Long')),
    r('VN-51', 'Trà Vinh', 'Mekong Delta', '84', 'Khmer pagodas with colourful roofs among rice and coconuts.', ['Khmer-style temples'], 'Trà Vinh: Khmer pagodas.', merged('Vĩnh Long')),
    r('VN-49', 'Vĩnh Long', 'Mekong Delta', '64', 'Orchards and canals between the Mekong branches.', ['Fruit orchards'], 'Vĩnh Long: orchards in the middle of the river.'),
    r('VN-45', 'Đồng Tháp', 'Mekong Delta', '66', 'Flooded plains, lotus ponds and rice near Cambodia.', ['Lotus ponds'], 'Đồng Tháp: lotus fields.'),
    r('VN-44', 'An Giang', 'Mekong Delta', '67', 'Rice plains with the Seven Mountains near Cambodia, Cham and Khmer villages.', ['Isolated hills on flat rice land'], 'An Giang: seven mountains on the flat delta.'),
    r('VN-47', 'Kiên Giang', 'Mekong Delta', '68', 'Rice, canals and the Gulf of Thailand coast; Phú Quốc island.', ['Coastal canals'], 'Kiên Giang: Phú Quốc island.', merged('An Giang')),
    r('VN-CT', 'Cần Thơ', 'Mekong Delta', '65', 'The delta\'s big city: floating markets and canals.', ['Floating markets'], 'Cần Thơ: capital of the delta, floating markets.'),
    r('VN-73', 'Hậu Giang', 'Mekong Delta', '95', 'Canals, rice and sugarcane.', ['Straight canals with houses along them'], 'Hậu Giang: the delta\'s quiet middle.', merged('Cần Thơ')),
    r('VN-52', 'Sóc Trăng', 'Mekong Delta', '83', 'Khmer pagodas (the Bat Pagoda) and rice.', ['Khmer temples'], 'Sóc Trăng: the Bat Pagoda.', merged('Cần Thơ')),
    r('VN-55', 'Bạc Liêu', 'Mekong Delta', '94', 'Salt fields, shrimp ponds and coastal wind turbines.', ['Wind turbines in the sea'], 'Bạc Liêu: wind turbines standing in the sea.', merged('Cà Mau')),
    r('VN-59', 'Cà Mau', 'Mekong Delta', '69', 'The southern tip: mangroves, shrimp farms and canals.', ['Mangroves and shrimp ponds'], 'Cà Mau: the end of Vietnam, all mangrove.'),
  ],
  view: { lon: [102, 110], lat: [8.3, 23.5] },
}

// City-provinces: the capital is the city itself.
for (const [id, capital] of [['VN-CT', 'Cần Thơ'], ['VN-DN', 'Đà Nẵng'], ['VN-HP', 'Hải Phòng'], ['VN-HN', 'Hà Nội'], ['VN-SG', 'Hồ Chí Minh City']]) {
  const region = vietnam.regions.find((x) => x.id === id)
  if (region) region.capital = capital
}
