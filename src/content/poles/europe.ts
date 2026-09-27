import type { PoleType } from './types'

// Notable poles in Europe, paraphrased from the PlonkIt guides (https://www.plonkit.net).

export const europePoles: PoleType[] = [
  // ---- Russia and the ex-USSR ----
  {
    id: 'ru-square', country: 'RU', title: 'Square concrete poles',
    look: ['Square-section concrete poles, often grey and weathered.', 'Wooden poles raised on a concrete stub at the base; black-and-white striped guards on highways.'],
    lookalikes: 'Standard across the former Soviet Union: Ukraine, the Baltics, Georgia, Kazakhstan, Kyrgyzstan.',
    why: 'The Soviet Union standardised its electrical infrastructure, so the same designs appear from Kaliningrad to Kamchatka.',
    photoCategory: 'Utility poles in Russia',
  },
  // ---- Poland / Hungary / Romania: holey poles ----
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
  // ---- Bulgaria ----
  {
    id: 'bg-hooks', country: 'BG', title: 'Round concrete poles with hook-shaped insulators',
    look: ['Cylindrical concrete poles with small alternating hook-shaped insulators.', 'A pole top with three large alternating insulators curving upwards like hooks: probably unique to Bulgaria.'],
    photoCategory: 'Utility poles in Bulgaria',
  },
  // ---- Czechia / Slovakia ----
  {
    id: 'cz-pairs', country: 'CZ', title: 'Wide round concrete poles in pairs',
    look: ['Wide round concrete poles, often two side by side.', 'Short metal bars holding the insulators; some trident tops with two arms angled upwards (unique to Czechia and Slovakia).'],
    lookalikes: 'Slovakia uses the same poles.',
    photoCategory: 'Utility poles in the Czech Republic',
  },
  // ---- Baltics ----
  {
    id: 'lv-hooks', country: 'LV', title: 'Hook insulators alternating left-right-left',
    look: ['Pole tops with hook-shaped insulators that alternate sides down the pole: left, right, left.'],
    lookalikes: 'Rare in Lithuania and Estonia; Argentina\'s La Rioja and Mendoza have similar "Latvian" poles.',
    photoCategory: 'Utility poles in Latvia',
  },
  {
    id: 'lt-square', country: 'LT', title: 'Square concrete poles with a diagonal support',
    look: ['Square concrete poles, often with a diagonal support beam.', 'Insulators on short horizontal rods; metal pole tags in the east.'],
    lookalikes: 'Sometimes in Estonia, rarely Latvia.',
    photoCategory: 'Utility poles in Lithuania',
  },
  // ---- Nordics ----
  {
    id: 'fi-wood', country: 'FI', title: 'Wooden poles with lamps bolted at the very top',
    look: ['Wooden poles with a small black metal cap on top (Nordic countries only).', 'Street lamps bolted to the top of the pole with two bolts, on a straight arm.', 'Orange snow poles with one thin white band near the top.'],
    lookalikes: 'Sweden: lamp lower down on a curved arm. Norway: one thick bolt.',
    photoCategory: 'Utility poles in Finland',
  },
  {
    id: 'se-wood', country: 'SE', title: 'Wooden poles with lamps a little below the top',
    look: ['Wooden poles with a black metal cap; lamps double-bolted slightly below the top, usually on a curved arm.', 'Wooden marker posts with blue and white stripes near power lines (Sweden only).', 'Orange snow poles with a tall white reflector above the middle.'],
    lookalikes: 'Finland and Norway (see their lamp mounts and snow poles).',
    photoCategory: 'Utility poles in Sweden',
  },
  {
    id: 'no-wood', country: 'NO', title: 'Wooden poles with single-bolted lamps',
    look: ['Wooden poles with a black metal cap; lamps fixed with one thick bolt.', 'Orange snow poles with a thin white reflector in the middle; thin wooden snow poles with painted reflectors.'],
    lookalikes: 'Sweden and Finland use two bolts.',
    photoCategory: 'Utility poles in Norway',
  },
  // ---- Western Europe ----
  {
    id: 'de-sticker', country: 'DE', title: 'Wooden poles with a white rectangular sticker',
    look: ['Most wooden poles carry a white rectangular sticker.', 'Round concrete poles and thick-middle crossbars in the former East Germany; triangle tops in the west.'],
    photoCategory: 'Utility poles in Germany',
  },
  {
    id: 'fr-ladder', country: 'FR', title: 'Concrete "waffle" poles, diamond tops and small blue plates',
    look: ['Concrete poles with step-like indents ("ladder" or "waffle" poles).', 'Diamond-shaped "French pole tops" carrying three wires.', 'Small blue rectangular plates on wooden and metal poles (unique to France).'],
    lookalikes: 'Spain has the same ladder poles and similar tops, but no blue plates.',
    photoCategory: 'Utility poles in France',
  },
  {
    id: 'es-ladder', country: 'ES', title: 'Ladder poles with upside-down triangle tops',
    look: ['Tall concrete ladder poles or wooden poles in villages.', '"French-style" tops: an upside-down triangle with a top bar curving slightly upwards.', 'Steel mesh poles with rectangular (not triangular) openings in the south, especially Murcia and Alicante.'],
    lookalikes: 'France (look for its blue plates); Portugal (very tall ladder steps).',
    photoCategory: 'Utility poles in Spain',
  },
  {
    id: 'pt-ladder', country: 'PT', title: 'Ladder poles with very tall steps and holes',
    look: ['Concrete ladder poles whose steps are very tall, each with a small see-through hole.'],
    lookalikes: 'Spain and France have ladder poles with short steps.',
    photoCategory: 'Utility poles in Portugal',
  },
  {
    id: 'it-round', country: 'IT', title: 'Round concrete poles with concrete trident tops',
    look: ['Many round concrete poles (unusual for the Mediterranean).', 'Concrete trident pole tops; wooden poles with a small white sticker.'],
    photoCategory: 'Utility poles in Italy',
  },
  {
    id: 'gb-steps', country: 'GB', title: 'Wooden poles with step rods and a "zapped man" sticker',
    look: ['Wooden poles with thin horizontal metal rods bolted up the side as climbing steps.', 'Yellow warning stickers showing a man being struck by a lightning bolt.', 'Stickers wrapped all the way round the pole in Northern Ireland.'],
    lookalikes: 'Ireland: the same poles, but the sticker has a lightning bolt without the man.',
    photoCategory: 'Utility poles in the United Kingdom',
  },
  {
    id: 'ie-steps', country: 'IE', title: 'Wooden poles with a lightning-bolt sticker (no man)',
    look: ['Wooden poles with climbing-step rods, like the UK.', 'Yellow warning stickers with a lightning bolt but no person being zapped.'],
    lookalikes: 'The UK (sticker shows a man being zapped).',
    photoCategory: 'Utility poles in Ireland',
  },
  {
    id: 'nl-none', country: 'NL', title: 'No street poles at all',
    look: ['Essentially no street-level utility poles: the wires are underground. Only big transmission pylons.'],
    lookalikes: 'Belgium, next door, does use poles.',
    why: 'Dense population and a flat, soft ground make burying cables practical and cheap.',
    photoSearch: 'Netherlands rural road',
  },
  {
    id: 'be-holes', country: 'BE', title: 'Square concrete poles with tiny holes',
    look: ['Square concrete poles with tiny holes running up them (or oval holes), often with small metal wrappings.'],
    photoCategory: 'Utility poles in Belgium',
  },
  {
    id: 'gr-harp', country: 'GR', title: 'Tall dark wooden poles with harp-shaped frames',
    look: ['Tall, dark brown wooden poles.', 'A metal frame vaguely shaped like a harp at the top (Greece and Cyprus only); often five vertical insulators.'],
    photoCategory: 'Utility poles in Greece',
  },
  {
    id: 'hr-hooks', country: 'HR', title: 'Wooden poles with alternating hooks',
    look: ['Round concrete or wooden poles; the wooden ones often have hook insulators alternating sides, a bit like Latvia\'s.'],
    photoCategory: 'Utility poles in Croatia',
  },
  {
    id: 'at-tape', country: 'AT', title: 'Wooden poles with red-white-red tape in cities',
    look: ['Round wooden poles are the most common.', 'Red-and-white tape like the Austrian flag on poles in Vienna (thin, two per pole) and Innsbruck.'],
    photoCategory: 'Utility poles in Austria',
  },
]
