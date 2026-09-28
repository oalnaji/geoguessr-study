import type { PoleType } from './types'

// Notable poles in the Americas, paraphrased from the PlonkIt guides (https://www.plonkit.net).

export const americasPoles: PoleType[] = [
  {
    id: 'us-wood', country: 'US', alsoCountries: ['CA'], title: 'Wooden poles with grey cylinder transformers (North America)',
    look: [
      'Tall round wooden poles with insulators sitting on top of the pole or crossarm.',
      'Grey metal cylinder transformers hanging on the poles, one every few houses: never seen in Europe.',
    ],
    lookalikes: 'The US and Canada look the same; check signs, road lines and units.',
    why: 'The North American grid delivers 120 V, which cannot travel far, so every few houses need their own small transformer on a pole. See "How a pole works".',
    photoCategory: 'Utility poles in the United States',
  },
  {
    id: 'mx-octagonal', country: 'MX', title: 'Octagonal concrete poles',
    look: ['Eight-sided concrete poles, often with lettering engraved in the side.', 'Round electricity meters and black or white water tanks on roofs nearby.'],
    lookalikes: 'Colombia also uses octagonal poles; look at the language and road lines.',
    photoCategory: 'Utility poles in Mexico',
  },
  {
    id: 'co-stripes', country: 'CO', title: 'Black-and-yellow striped poles (often octagonal)',
    look: ['Concrete poles marked with black-and-yellow or black-and-orange stripes; many are octagonal like Mexico\'s, and dark poles are common.'],
    lookalikes: 'Mexico\'s octagonal poles are unstriped; Peru paints the whole bottom black.',
    photoCategory: 'Utility poles in Colombia',
  },
  {
    id: 'br-ladder', country: 'BR', title: 'Concrete "ladder" poles',
    look: ['Rectangular concrete poles with long slots in the lower part, like a ladder, and small holes near the top.', 'Braces from the crossbar to the pole are common (except in the northeast).'],
    lookalikes: 'Paraguay uses similar poles.',
    photoCategory: 'Utility poles in Brazil',
  },
  {
    id: 'ar-alternating', country: 'AR', title: 'Round concrete poles with alternating insulators',
    look: ['Round concrete poles carrying three wires in an alternating (zig-zag) pattern.', 'Doubled-up poles standing side by side; wooden A-frame poles (unique in South America).'],
    lookalikes: 'Bolivia has some doubled concrete poles.',
    photoCategory: 'Utility poles in Argentina',
  },
  {
    id: 'cl-indent', country: 'CL', title: 'Square concrete poles with an indent on both sides',
    look: ['Square concrete poles with a long indent down each side (fewer cross-pieces in the indent than Brazil\'s), small pinholes near the top.', 'Wooden poles are also common.'],
    lookalikes: 'Brazil\'s ladder poles have more horizontal supports; the Philippines and Thailand have some indented poles too.',
    photoCategory: 'Utility poles in Chile',
  },
  {
    id: 'pe-paint', country: 'PE', title: 'Black or black-and-yellow painted pole bottoms',
    look: ['Concrete or wooden poles with the bottom section painted black, or black and yellow; some with horizontal concrete bars.'],
    lookalikes: 'Colombia has striped poles too, but with thinner black-and-yellow or orange stripes.',
    photoCategory: 'Utility poles in Peru',
  },
  {
    id: 'uy-trident', country: 'UY', title: 'Trident poles',
    look: ['Pole tops with three insulators pointing upwards like a trident.', 'Also square concrete poles, and round poles with flat metal-sheet tops.'],
    lookalikes: 'Similar tridents appear in neighbouring Brazil and Argentina.',
    photoCategory: 'Utility poles in Uruguay',
  },
  {
    id: 'gt-pink-green', country: 'GT', title: 'Poles painted pink and green',
    look: ['Poles painted pink, green or both; all-green poles with white plates in the southeast.'],
    photoCategory: 'Utility poles in Guatemala',
  },
  {
    id: 'cr-silver', country: 'CR', title: 'Long silver insulators on a low crossbar',
    look: ['Long silver insulators; an even crossbar lower down the pole than usual, carrying one insulator on one side and two on the other.', 'Thin L-shaped metal crossbars; lamps with a blue dot on top.'],
    lookalikes: 'Panama uses some of the same insulators.',
    photoCategory: 'Utility poles in Costa Rica',
  },
  {
    id: 'do-square', country: 'DO', title: 'Square concrete poles with a reversed L on top',
    look: ['Square concrete poles with a reversed "L" arm at the top.'],
    lookalikes: 'In the Americas only the Dominican Republic, Puerto Rico and Uruguay use square poles.',
    photoSearch: 'Dominican Republic electricity pole street',
  },
]
