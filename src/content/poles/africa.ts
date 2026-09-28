import type { PoleType } from './types'

// Notable poles, paraphrased from the PlonkIt guides (https://www.plonkit.net).

export const africaPoles: PoleType[] = [
  {
    id: 'za-bird', country: 'ZA', title: '"Bird poles"',
    look: ['One to five horizontal bars lined with thin white insulators, like birds sitting on a branch.', 'Regional tops: an "A" on a bar in the Western Cape, a wider "A" in the Eastern Cape, tridents in KwaZulu-Natal, three alternating sideways insulators in the north.'],
    photoCategory: 'Utility poles in South Africa',
  },
  {
    id: 'ke-l', country: 'KE', title: 'Poles with an L-shaped crossbar and skull stickers',
    look: ['Concrete or wooden poles with an L-shaped crossbar.', 'Warning markings with a skull and a danger message.'],
    lookalikes: 'Ghana has a similar pole.',
    photoCategory: 'Utility poles in Kenya',
  },
]
