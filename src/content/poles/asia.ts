import type { PoleType } from './types'

// Notable poles in Asia, paraphrased from the PlonkIt guides (https://www.plonkit.net).


const ids = (country: string, s: string) => s.split(' ').map((x) => `${country}-${x}`)

export const asiaPoles: PoleType[] = [
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
  {
    id: 'kr-spike', country: 'KR', title: 'Concrete poles with a spike on top and short diagonal stripes',
    look: ['Round concrete poles tapering to a pointed "spike" on top.', 'Black-and-yellow diagonal stripes near the bottom that stop short of the ground.', 'Blue arrow-shaped street signs hanging from the poles.'],
    lookalikes: 'Taiwan: the stripes reach the ground and are more orange. Japan: step bolts and metal plates.',
    photoCategory: 'Utility poles in South Korea',
  },
  {
    id: 'tw-stripes', country: 'TW', title: 'Stripes all the way to the ground and blue coordinate plaques',
    look: ['Black-and-yellow (orange-ish) diagonal stripes running right down to the ground.', 'Blue plaques with a letter-and-number code that is a precise grid reference.', 'Box-shaped transformers painted dark green or grey.'],
    lookalikes: 'South Korea: the stripes stop short of the ground.',
    photoCategory: 'Utility poles in Taiwan',
  },
  {
    id: 'th-square', country: 'TH', alsoCountries: ['LA'], title: 'Square concrete poles with a line of small holes',
    look: ['Square concrete poles with small holes running up the middle of each side.', 'Masses of telecom cables; street-light poles with red-and-black or black-and-white stripes at the base.'],
    lookalikes: 'Laos uses the same poles; Sri Lanka and Cambodia have similar ones.',
    photoCategory: 'Utility poles in Thailand',
  },
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
  {
    id: 'my-stickers', country: 'MY', title: 'Black pole stickers',
    look: ['Black stickers with white writing on the poles, sometimes with red-and-white or red-and-blue stripes below.'],
    where: 'Mainly Peninsular Malaysia. White stickers mean Sarawak (Borneo).',
    photoCategory: 'Utility poles in Malaysia',
  },
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
  {
    id: 'ph-octagonal', country: 'PH', title: 'Octagonal metal poles',
    look: ['Tall octagonal metal poles, often with a single insulator on a vertical bar on the side.', 'Black or white boxes on the pole with a three-letter municipality code.'],
    lookalikes: 'Bangladesh and parts of Malaysia have some octagonal poles.',
    photoCategory: 'Utility poles in the Philippines',
  },
  {
    id: 'lk-holey', country: 'LK', title: 'Holey poles with big see-through holes',
    look: ['Concrete poles with large see-through holes in the lower half.', 'Also square poles with small pinholes near the top.'],
    lookalikes: 'Vietnam\'s holey poles have smaller holes; Thailand\'s square poles have small holes all the way up.',
    why: 'The holes make the poles lighter and cheaper while keeping their strength, like a truss.',
    photoSearch: 'Sri Lanka road electricity pole',
  },
  {
    id: 'in-trident', country: 'IN', title: 'Square concrete poles with a trident top',
    look: ['Square concrete poles with a three-pronged metal top; almost never wooden.'],
    photoCategory: 'Utility poles in India',
  },
  {
    id: 'tr-metal', country: 'TR', title: 'Metal ladder and mesh poles',
    look: ['Metal poles shaped like a ladder or with an open lattice mesh; very common.', 'Snow poles striped black-orange-black-white with red reflectors.'],
    photoCategory: 'Utility poles in Turkey',
  },
]
