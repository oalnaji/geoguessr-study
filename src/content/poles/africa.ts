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
  {
    id: 'gh-wood', country: 'GH', title: 'Wooden poles with three insulators on a metal crossbar',
    look: ['Wooden poles carrying three insulators on a metal crossbar.'],
    lookalikes: 'Kenya.',
    photoCategory: 'Utility poles in Ghana',
  },
  {
    id: 'ng-indent', country: 'NG', title: 'Brazil-like indented concrete poles without holes',
    look: ['Concrete poles with indents and a few horizontal supports, like Brazil\'s ladder poles, but with no see-through holes.'],
    photoCategory: 'Utility poles in Nigeria',
  },
  {
    id: 'sz-brown', country: 'SZ', title: 'Dark brown wooden poles with side insulators',
    look: ['Simple dark brown wooden poles with the insulators mounted on the side; three insulators is more common here than elsewhere in southern Africa.'],
    photoSearch: 'Eswatini road pole',
  },
  {
    id: 'sn-french', country: 'SN', title: 'French-style poles',
    look: ['French infrastructure from colonial times: concrete ladder poles, French bollards and road lines.'],
    lookalikes: 'France (but with Sahel landscape and baobabs).',
    photoSearch: 'Senegal poteau électrique',
  },
]
