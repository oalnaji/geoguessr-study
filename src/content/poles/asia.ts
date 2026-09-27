import type { PoleType } from './types'

// Notable poles in Asia, paraphrased from the PlonkIt guides (https://www.plonkit.net).

const ids = (country: string, s: string) => s.split(' ').map((x) => `${country}-${x}`)

export const asiaPoles: PoleType[] = [
  // ---- Japan ----
  {
    id: 'jp-concrete', country: 'JP', title: 'Round concrete poles with step bolts, plates and striped guards',
    look: [
      'Grey round concrete poles with screw-like step bolts sticking out on both sides for climbing.',
      'Metal ID plates at eye level, a short yellow-and-black (or white) striped reflector that does not reach the ground, and striped guy-wire guards.',
      'Transformers, cables and junction boxes crowded onto the pole.',
    ],
    lookalikes: 'Taiwan: black-and-yellow stripes run all the way to the ground. South Korea: thicker diagonal stripes, and a spike on top.',
    why: 'Japan\'s regional electricity companies each have their own plate, reflector and guy-wire design, which makes the details a region clue.',
    photoCategory: 'Utility poles in Japan',
  },
  {
    id: 'jp-kanto', country: 'JP', title: 'Tuning-fork pole top with a long top bar',
    look: ['A pole top like a tuning fork: a long top bar sticking out at each end, with horizontal bars below.', 'Transformers often on a wooden plate.'],
    where: 'The Kanto region (Tokyo and around). Chubu has a short-topped version; Kansai a version with a thin wire.',
    photoSearch: 'utility pole Tokyo',
  },
  {
    id: 'jp-hokkaido', country: 'JP', title: 'Plus-shaped transformer bars',
    look: ['A plus-shaped bar on the side of the pole, or a transformer on two bars; never a wooden plate.', 'Snowy, wide, rural roads with arrow-shaped snow markers hanging over the edge.'],
    where: 'Hokkaido.',
    photoSearch: 'Hokkaido utility pole',
  },
  {
    id: 'jp-okinawa', country: 'JP', title: 'T-shaped bar with transformers on opposite sides',
    look: ['A T-shaped bar on the side of the pole, with transformers mounted on opposite sides of it.', 'Subtropical plants and flat-roofed concrete houses around.'],
    where: 'Okinawa. Kyushu uses a straight bar with three insulators and transformers 180° apart.',
    photoSearch: 'Okinawa utility pole',
  },
  // ---- South Korea ----
  {
    id: 'kr-spike', country: 'KR', title: 'Concrete poles with a spike on top and short diagonal stripes',
    look: ['Round concrete poles tapering to a pointed "spike" on top.', 'Black-and-yellow diagonal stripes near the bottom that stop short of the ground.', 'Blue arrow-shaped street signs hanging from the poles.'],
    lookalikes: 'Taiwan: the stripes reach the ground and are more orange. Japan: step bolts and metal plates.',
    photoCategory: 'Utility poles in South Korea',
  },
  // ---- Taiwan ----
  {
    id: 'tw-stripes', country: 'TW', title: 'Stripes all the way to the ground and blue coordinate plaques',
    look: ['Black-and-yellow (orange-ish) diagonal stripes running right down to the ground.', 'Blue plaques with a letter-and-number code that is a precise grid reference.', 'Box-shaped transformers painted dark green or grey.'],
    lookalikes: 'South Korea: the stripes stop short of the ground.',
    photoCategory: 'Utility poles in Taiwan',
  },
  // ---- Thailand ----
  {
    id: 'th-square', country: 'TH', title: 'Square concrete poles with a line of small holes',
    look: ['Square concrete poles with small holes running up the middle of each side.', 'Masses of telecom cables; street-light poles with red-and-black or black-and-white stripes at the base.'],
    lookalikes: 'Cambodia, Laos and Sri Lanka have similar poles.',
    photoCategory: 'Utility poles in Thailand',
  },
  // ---- Vietnam ----
  {
    id: 'vn-holey', country: 'VN', title: 'Holey poles and pinhole poles',
    look: ['Concrete poles with see-through holes in the lower half ("holey poles"); round poles with small pinholes near the top.', 'Grey electricity boxes whose bottom slopes down slightly.'],
    lookalikes: 'Sri Lanka\'s holey poles have much bigger holes.',
    photoCategory: 'Utility poles in Vietnam',
  },
  {
    id: 'vn-north', country: 'VN', title: 'Big holes all the way up and trapezoid pole tops',
    look: ['Holes along almost the whole pole, few or no pinholes, and upside-down trapezoid pole tops.'],
    where: 'Northern Vietnam (trapezoid tops also in the centre). The south uses triangle tops and off-centre crossbars.',
    regions: ids('VN', 'HN HP 56 61 66 20 63 67 18 70 01 71 05 14 02 06 03 04 53 09 07 69 68 54 13'),
    photoSearch: 'Hanoi utility pole',
  },
  // ---- Cambodia ----
  {
    id: 'kh-ladder', country: 'KH', title: 'Concrete ladder poles and round pinhole poles',
    look: ['Concrete poles with indents and ridges like a ladder, and round concrete poles with small holes.'],
    lookalikes: 'Thailand and Laos use square poles with a line of pinholes; Vietnam has the same round poles.',
    photoCategory: 'Utility poles in Cambodia',
  },
  // ---- Laos ----
  {
    id: 'la-pinhole', country: 'LA', title: 'Square concrete poles with pinholes from top to bottom',
    look: ['Square concrete poles with a row of small pinholes running the full length of each side.'],
    lookalikes: 'Thailand (almost identical), Sri Lanka, and sometimes Cambodia.',
    photoCategory: 'Utility poles in Laos',
  },
  // ---- Malaysia ----
  {
    id: 'my-stickers', country: 'MY', title: 'Black pole stickers',
    look: ['Black stickers with white writing on the poles, sometimes with red-and-white or red-and-blue stripes below.'],
    where: 'Mainly Peninsular Malaysia. White stickers mean Sarawak (Borneo).',
    photoCategory: 'Utility poles in Malaysia',
  },
  {
    id: 'my-sarawak', country: 'MY', title: 'Wooden poles with a long diagonal support',
    look: ['A 2-1 insulator arrangement with a long diagonal wooden brace.'],
    where: 'Sarawak. Sabah uses thin metal poles with two parallel pole tops.',
    lookalikes: 'Indonesian poles look similar but are rarely wooden and have short or no braces.',
    photoSearch: 'Sarawak road utility pole',
  },
  // ---- Indonesia ----
  {
    id: 'id-flag', country: 'ID', title: 'Round steel or concrete poles in the flag colours',
    look: ['Round poles, often black steel, frequently painted with red and white bands.', 'Pole tops are either even (symmetric) or uneven (off-centre), depending on the region.'],
    photoCategory: 'Utility poles in Indonesia',
  },
  {
    id: 'id-uneven', country: 'ID', title: 'Even crossbar, uneven insulators',
    look: ['A symmetric crossbar carrying one insulator on one side and two on the other.'],
    where: 'Almost only North Sumatra.',
    regions: ['ID-SU'],
    photoSearch: 'Medan utility pole',
  },
  {
    id: 'id-nusa', country: 'ID', title: 'Extra-long support under the pole top',
    look: ['A long diagonal support (sometimes two) under the crossbar.'],
    where: 'The Lesser Sunda Islands: Bali, Lombok, Sumbawa, Flores, Sumba and Timor.',
    regions: ['ID-BA', 'ID-NB', 'ID-NT'],
    photoSearch: 'Lombok road pole',
  },
  {
    id: 'id-java', country: 'ID', title: 'Trident tops and indented poles',
    look: ['Trident pole tops in Central Java and Yogyakarta; poles with an indent on both sides in West Java, Jakarta and Banten.'],
    where: 'Java.',
    regions: ['ID-JT', 'ID-YO', 'ID-JB', 'ID-JK', 'ID-BT'],
    photoSearch: 'Yogyakarta street utility pole',
  },
  // ---- Philippines ----
  {
    id: 'ph-octagonal', country: 'PH', title: 'Octagonal metal poles',
    look: ['Tall octagonal metal poles, often with a single insulator on a vertical bar on the side.', 'Black or white boxes on the pole with a three-letter municipality code.'],
    lookalikes: 'Bangladesh and parts of Malaysia have some octagonal poles.',
    photoCategory: 'Utility poles in the Philippines',
  },
  // ---- Sri Lanka ----
  {
    id: 'lk-holey', country: 'LK', title: 'Holey poles with big see-through holes',
    look: ['Concrete poles with large see-through holes in the lower half.', 'Also square poles with small pinholes near the top.'],
    lookalikes: 'Vietnam\'s holey poles have smaller holes; Thailand\'s square poles have small holes all the way up.',
    why: 'The holes make the poles lighter and cheaper while keeping their strength, like a truss.',
    photoSearch: 'Sri Lanka road electricity pole',
  },
  // ---- India ----
  {
    id: 'in-trident', country: 'IN', title: 'Square concrete poles with a trident top',
    look: ['Square concrete poles with a three-pronged metal top; almost never wooden.'],
    photoCategory: 'Utility poles in India',
  },
  {
    id: 'in-holey', country: 'IN', title: 'Concrete holey poles',
    look: ['Concrete poles with see-through holes.'],
    where: 'Gujarat (and Daman, Diu and Dadra and Nagar Haveli); rare elsewhere.',
    photoSearch: 'Gujarat electricity pole',
  },
  {
    id: 'in-ladder', country: 'IN', title: 'Two-section "ladder" poles',
    look: ['Poles split into two long sections like Brazilian ladder poles.'],
    where: 'Andhra Pradesh and Telangana.',
    photoSearch: 'Hyderabad electricity pole',
  },
  {
    id: 'in-metal', country: 'IN', title: 'Thin grey metal poles, often in pairs',
    look: ['Thin grey metal poles, often two close together.'],
    where: 'Northeast India and the Himalayan states (Uttarakhand, Himachal Pradesh); metal mesh poles in Sikkim, metal holey poles in Kerala.',
    photoSearch: 'Himachal electricity pole road',
  },
  // ---- Mongolia ----
  {
    id: 'mn-wood-block', country: 'MN', title: 'Wooden poles on concrete blocks',
    look: ['Wooden poles strapped to a concrete stub at the base, Russian style, in open treeless steppe.'],
    lookalikes: 'Russia and Kazakhstan use the same; the empty steppe and "ЗОГС" stop signs say Mongolia.',
    photoCategory: 'Utility poles in Mongolia',
  },
  // ---- Kazakhstan / Kyrgyzstan ----
  {
    id: 'kz-paint', country: 'KZ', title: 'Russian-style square concrete poles with coloured paint bands',
    look: ['Square concrete poles as in Russia, often painted in bands near the bottom.', 'The colours differ by region: red-white-black in West Kazakhstan, blue-white-black in Atyrau, and so on.'],
    photoCategory: 'Utility poles in Kazakhstan',
  },
  {
    id: 'kg-white', country: 'KG', title: 'Poles and trees painted white at the base',
    look: ['Concrete poles (and tree trunks) painted white at the bottom; colourful yellow-green-white tops in towns around Bishkek.'],
    photoCategory: 'Utility poles in Kyrgyzstan',
  },
  // ---- Turkey ----
  {
    id: 'tr-metal', country: 'TR', title: 'Metal ladder and mesh poles',
    look: ['Metal poles shaped like a ladder or with an open lattice mesh; very common.', 'Snow poles striped black-orange-black-white with red reflectors.'],
    photoCategory: 'Utility poles in Turkey',
  },
  // ---- Jordan ----
  {
    id: 'jo-concrete', country: 'JO', title: 'Round concrete poles with Y-shaped tops',
    look: ['Round concrete poles with a diagonal support, or three Y-shaped cross-pieces stacked up.'],
    photoCategory: 'Utility poles in Jordan',
  },
  {
    id: 'np-trident', country: 'NP', title: 'Concrete trident poles with triangle supports',
    look: ['Square concrete poles in the lowlands, with a trident top held by triangle supports (unique to Nepal); thin metal poles in the mountains.', 'A cross near the top in the east.'],
    photoSearch: 'Nepal electricity pole',
  },
  {
    id: 'bt-metal', country: 'BT', title: 'Thin metal poles painted black at the bottom',
    look: ['Thin metal poles, often with a black-painted base, on mountain roads.'],
    photoSearch: 'Bhutan road electric pole',
  },
]
