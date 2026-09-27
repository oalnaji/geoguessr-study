import type { PoleType } from './types'

// Notable poles in Oceania, paraphrased from the PlonkIt guides (https://www.plonkit.net).

export const oceaniaPoles: PoleType[] = [
  {
    id: 'au-stobie', country: 'AU', title: 'Stobie poles (steel and concrete)',
    look: ['Two steel I-beams with concrete poured between them.', 'Pole tops shaped like a trident or a sideways "E".'],
    where: 'South Australia (a few thousand elsewhere, e.g. Broken Hill and Tasmania).',
    regions: ['AU-SA'],
    why: 'Invented in Adelaide in 1924 by James Stobie, because good timber was scarce and termites eat wooden poles.',
    photoSearch: 'Stobie pole',
  },
  {
    id: 'au-nt', country: 'AU', title: 'Rusty metal poles full of holes',
    look: ['Rusty brown steel poles with rows of holes.'],
    where: 'The Northern Territory (also parts of northern Western Australia).',
    regions: ['AU-NT'],
    photoSearch: 'Darwin power pole',
  },
  {
    id: 'au-tasmania', country: 'AU', title: 'L-shaped metal crossbars and green possum guards',
    look: ['A thin metal crossbar bent 90° into an L.', 'Olive-green possum guards wrapped round the pole (other states use other colours).'],
    where: 'Tasmania.',
    regions: ['AU-TAS'],
    photoSearch: 'Tasmania power pole',
  },
  {
    id: 'au-wood', country: 'AU', title: 'Wooden poles with wooden crossarms',
    look: ['Round wooden poles with wooden crossarms; Victoria has most of the concrete poles, Queensland has coils angled upwards, Western Australia has green-painted bases.'],
    lookalikes: 'New Zealand: more concrete poles and more yellow road lines.',
    photoCategory: 'Utility poles in Australia',
  },
  {
    id: 'nz-indent', country: 'NZ', title: 'Concrete poles with one long indent and silver possum guards',
    look: ['Concrete poles with a single long indent running most of the way up.', 'Small silver possum guards (a metal band) around most poles.'],
    lookalikes: 'Australia mostly uses wooden poles; New Zealand has yellow centre lines.',
    photoCategory: 'Utility poles in New Zealand',
  },
  {
    id: 'nz-guards', country: 'NZ', title: 'Long possum guards',
    look: ['Long square olive-brown possum guards (Marlborough), or long cylindrical silver ones (Southland).'],
    where: 'Marlborough and Southland (also western Otago).',
    photoSearch: 'possum guard power pole New Zealand',
  },
]
