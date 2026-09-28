import type { PoleType } from './types'

// Notable poles in Europe, paraphrased from the PlonkIt guides (https://www.plonkit.net).

export const europePoles: PoleType[] = [
  {
    id: 'ru-square', country: 'RU', alsoCountries: ['UA', 'BY', 'KZ', 'KG', 'LT', 'EE', 'GE', 'MN'], title: 'Square concrete poles (the former USSR)',
    look: ['Square-section grey concrete poles, often with a diagonal support.', 'Wooden poles strapped to a concrete stub at the base; black-and-white striped guards along highways.'],
    lookalikes: 'The same design runs from the Baltics to Kyrgyzstan: use language, plates and landscape to pick the country.',
    why: 'The Soviet Union standardised its electrical infrastructure, so one design was built across a sixth of the world\'s land.',
    photoCategory: 'Utility poles in Russia',
  },
  {
    id: 'pl-holey', country: 'PL', title: 'Thin holey poles, no holes near the ground',
    look: ['Thin concrete poles with see-through holes that stop short of the bottom.', 'Sometimes two poles joined together or set as an A-frame; yellow markings in the west and south, black in the southeast.'],
    lookalikes: 'Hungary: thin holes all the way down. Romania: wide or tall holes all the way down.',
    photoCategory: 'Utility poles in Poland',
  },
  {
    id: 'hu-holey', country: 'HU', title: 'Holey poles with thin holes to the ground',
    look: ['Concrete poles with relatively thin see-through holes running all the way down to the ground.', 'Wooden poles are also fairly common.'],
    lookalikes: 'Poland (holes stop above the ground), Romania (wider or taller holes).',
    photoCategory: 'Utility poles in Hungary',
  },
  {
    id: 'ro-holey', country: 'RO', title: 'Holey poles with wide holes, and huge yellow stickers',
    look: ['Holey concrete poles with wide or tall holes going all the way to the bottom, or round concrete poles.', 'Very large yellow stickers with the town name in the middle.', 'Poles and trees painted white at the bottom.'],
    lookalikes: 'Poland and Hungary also have holey poles; Bulgaria has similar round poles.',
    photoCategory: 'Utility poles in Romania',
  },
  {
    id: 'bg-hooks', country: 'BG', title: 'Round concrete poles with hook-shaped insulators',
    look: ['Cylindrical concrete poles with small alternating hook-shaped insulators.', 'A pole top with three large alternating insulators curving upwards like hooks: probably unique to Bulgaria.'],
    photoCategory: 'Utility poles in Bulgaria',
  },
  {
    id: 'cz-pairs', country: 'CZ', alsoCountries: ['SK'], title: 'Wide round concrete poles in pairs',
    look: ['Wide round concrete poles, often two side by side.', 'Short metal bars holding the insulators; some trident tops with two arms angled upwards (unique to Czechia and Slovakia).'],
    photoCategory: 'Utility poles in the Czech Republic',
  },
  {
    id: 'lv-hooks', country: 'LV', title: 'Hook insulators alternating left-right-left',
    look: ['Pole tops with hook-shaped insulators that alternate sides down the pole: left, right, left.'],
    lookalikes: 'Rare in Lithuania and Estonia; Argentina\'s La Rioja and Mendoza have similar "Latvian" poles.',
    photoCategory: 'Utility poles in Latvia',
  },
  {
    id: 'fi-wood', country: 'FI', alsoCountries: ['SE', 'NO'], title: 'Wooden poles with a black metal cap (the Nordics)',
    look: [
      'Wooden poles with a small black metal cap on top: only in the Nordic countries.',
      'Where the street lamp is fixed tells you which country: Finland: bolted at the very top with two bolts, on a straight arm. Sweden: two bolts a little below the top, on a curved arm. Norway: one thick bolt.',
    ],
    why: 'The cap keeps rain off the end grain of the wood, which is where rot starts.',
    photoCategory: 'Utility poles in Finland',
  },
  {
    id: 'fr-ladder', country: 'FR', title: 'Concrete "waffle" poles, diamond tops and small blue plates',
    look: ['Concrete poles with step-like indents ("ladder" or "waffle" poles).', 'Diamond-shaped "French pole tops" carrying three wires.', 'Small blue rectangular plates on wooden and metal poles (unique to France).'],
    lookalikes: 'Spain has the same ladder poles and similar tops, but no blue plates.',
    photoCategory: 'Utility poles in France',
  },
  {
    id: 'pt-ladder', country: 'PT', title: 'Ladder poles with very tall steps and holes',
    look: ['Concrete ladder poles whose steps are very tall, each with a small see-through hole.'],
    lookalikes: 'Spain and France have ladder poles with short steps.',
    photoCategory: 'Utility poles in Portugal',
  },
  {
    id: 'gb-steps', country: 'GB', alsoCountries: ['IE'], title: 'Wooden poles with step rods, and the warning sticker',
    look: ['Wooden poles with thin horizontal metal rods bolted up the side as climbing steps.', 'The yellow warning sticker tells the UK from Ireland: the UK sticker shows a man being struck by lightning; the Irish one has only the lightning bolt.'],
    photoCategory: 'Utility poles in the United Kingdom',
  },
  {
    id: 'gr-harp', country: 'GR', title: 'Tall dark wooden poles with harp-shaped frames',
    look: ['Tall, dark brown wooden poles.', 'A metal frame vaguely shaped like a harp at the top (Greece and Cyprus only); often five vertical insulators.'],
    photoCategory: 'Utility poles in Greece',
  },
  {
    id: 'be-holes', country: 'BE', title: 'Square concrete poles with tiny holes',
    look: ['Square concrete poles with tiny holes running up them (or oval holes), often with small metal wrappings.'],
    photoCategory: 'Utility poles in Belgium',
  },
  {
    id: 'nl-none', country: 'NL', title: 'No street poles at all',
    look: ['Essentially no street-level utility poles: the wires are underground. Only big transmission pylons.'],
    lookalikes: 'Belgium, next door, does use poles.',
    why: 'Dense population and a flat, soft ground make burying cables practical and cheap.',
    photoSearch: 'Netherlands rural road',
  },
]
