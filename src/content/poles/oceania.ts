import type { PoleType } from './types'

// Notable poles in Oceania, paraphrased from the PlonkIt guides (https://www.plonkit.net).

export const oceaniaPoles: PoleType[] = [
  {
    id: 'au-stobie', country: 'AU', title: 'Wooden poles, and Stobie poles in South Australia',
    look: ['Mostly round wooden poles with wooden crossarms.', 'In South Australia (and Broken Hill): Stobie poles, two steel beams with concrete poured between them.'],
    lookalikes: 'New Zealand: concrete poles with one long indent.',
    why: 'James Stobie invented his pole in Adelaide in 1924 because good timber was scarce and termites eat wood.',
    photoSearch: 'Stobie pole',
  },
  {
    id: 'nz-indent', country: 'NZ', title: 'Concrete poles with one long indent and silver possum guards',
    look: ['Concrete poles with a single long indent running most of the way up.', 'Small silver possum guards (a metal band) around most poles.'],
    lookalikes: 'Australia mostly uses wooden poles; New Zealand has yellow centre lines.',
    photoCategory: 'Utility poles in New Zealand',
  },
]
