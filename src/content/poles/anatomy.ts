// How a utility pole works: its parts, and why poles differ from place to place. General
// electrical-distribution knowledge (Wikipedia: Utility pole, Insulator, Distribution transformer).

export interface PolePart {
  name: string
  what: string
  /** What varies between countries, and why it matters in GeoGuessr */
  varies: string
}

export const poleParts: PolePart[] = [
  {
    name: 'The pole',
    what: 'Holds the wires high enough to be safe from people and traffic. Made of wood, concrete, steel or (rarely) fibreglass.',
    varies: 'The material and cross-section are the biggest clue: round wood (North America, Scandinavia, UK, Japan\'s countryside), square concrete (Russia and ex-USSR), octagonal concrete (Mexico, Colombia), concrete "ladders" (Brazil), concrete full of holes (Hungary, Romania, Vietnam, Sri Lanka), steel and concrete (South Australia\'s Stobie poles).',
  },
  {
    name: 'Crossarm (crossbar)',
    what: 'The horizontal bar near the top that spreads the wires apart so they cannot touch each other in the wind.',
    varies: 'Wood, steel or concrete; centred or off-centre; flat, angled, bent into an L or shaped like a trapezoid. The shape of the pole top is often what identifies a region inside a country (Indonesia, Brazil, Vietnam).',
  },
  {
    name: 'Insulators',
    what: 'Glass, porcelain or plastic pieces that hold the live wires without letting electricity flow into the pole. More ribs or a longer insulator = higher voltage.',
    varies: 'Pin insulators stand on top of the crossarm; suspension insulators hang below it; post insulators stick out sideways. Colour (brown, white, green glass, transparent) and shape (mushroom, lollipop, spool) can point to one state.',
  },
  {
    name: 'Supports and braces',
    what: 'Diagonal pieces that stop the crossarm from tilting under the weight of the wires.',
    varies: 'One brace, two braces, an A-frame, a triangle or none at all; how common they are varies by region.',
  },
  {
    name: 'Transformer',
    what: 'Steps the distribution voltage (typically 10–35 kV) down to household voltage (110–240 V). One transformer serves a handful of houses.',
    varies: 'North America uses many small grey cylinders on poles, because each serves only a few houses at 120 V. Europe uses fewer, bigger transformers in ground boxes or substations, so European poles usually have none.',
  },
  {
    name: 'Guy wires and anchors',
    what: 'Cables from the pole to the ground that balance the pull of the wires at corners and line ends.',
    varies: 'Often wrapped in a yellow or striped guard at the bottom so people see them; the guard colour can be a clue (e.g. Japan\'s yellow-and-black guards).',
  },
  {
    name: 'Markings and tags',
    what: 'Numbers, plates, stickers and paint that let the utility identify each pole for repairs.',
    varies: 'Every utility has its own style, which makes tags some of the most precise clues: California\'s yellow stripes, Wisconsin\'s orange-and-white plates, Japan\'s metal plates with the address, Brazil\'s yellow paint codes.',
  },
  {
    name: 'Other attachments',
    what: 'Street lamps, telephone and cable-TV lines (lower on the pole, since they are not dangerous), fuses and cut-outs, earth (ground) wires, bird and animal guards, step bolts for climbing.',
    varies: 'Possum guards (Australia), bird nests (South America), many tangled telecom cables (Southeast Asia, India) all tell you something.',
  },
]

export const whyTheyDiffer: { title: string; text: string }[] = [
  { title: 'What material is cheap and lasts', text: 'Countries with big forests (USA, Canada, Scandinavia, Russia\'s past) use timber. Where termites, rot or a lack of trees make wood a poor choice, concrete or steel wins: South Australia built steel-and-concrete Stobie poles because good timber was scarce and termites eat it.' },
  { title: 'Engineering standards and history', text: 'Each country (often each utility) writes its own design standards, and old empires spread theirs. The Soviet Union standardised square concrete poles from the Baltic to Central Asia; British-style designs appear in former colonies.' },
  { title: 'Voltage and grid design', text: 'The North American system (many small transformers on poles, 120 V) looks completely different from the European system (few big transformers, 230 V, fewer wires on poles).' },
  { title: 'Climate and hazards', text: 'Ice and snow loads, typhoons, earthquakes, salt air and wildfires change pole height, strength and material. Japan\'s dense, heavy concrete poles and Florida\'s concrete poles near the coast are partly about storms.' },
  { title: 'Who owns them', text: 'Inside one country, different electricity companies use different pole tops, insulators and ID tags: that is why poles can pinpoint a state or province (Brazil, Indonesia, the USA).' },
]
