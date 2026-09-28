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

/** Longer explainers: the "why" behind what you see on poles. */
export const deepDives: { title: string; paragraphs: string[]; takeaway: string }[] = [
  {
    title: 'Why North America has small transformers everywhere and Europe has big ones out of sight',
    paragraphs: [
      'Electricity travels at high voltage (typically 10–35 kV on local lines) because high voltage means low current, and low current wastes less energy as heat. Near houses a transformer steps it down to the voltage appliances use.',
      'North America uses 120 V (from a "split-phase" 240 V supply). At such a low voltage the current for the same power is about twice as high as at 230 V, so losses in the low-voltage wires grow quickly with distance. The low-voltage wires are therefore kept short: a small transformer (often 25–50 kVA) hangs on a pole next to every handful of houses, typically 5–10 of them.',
      'Europe uses 230 V single-phase and 400 V three-phase. Low-voltage lines can run for several hundred metres, so one big transformer (often 250–1,000 kVA) in a substation, kiosk or ground box can supply 100–300 homes. The high-voltage lines rarely reach the street, so European poles usually carry no transformer at all.',
      'The split goes back to the 1880s–1900s: Edison\'s early US systems used about 110 V, and when AC won, the US kept that household voltage for compatibility. Berlin\'s utility moved to 220 V around 1900 to save copper, and most of Europe followed. The US also runs at 60 Hz and most of the world at 50 Hz, a separate historical accident.',
    ],
    takeaway: 'A grey cylinder on a pole every few houses = the North American system (also copied in Mexico, Central America, the Philippines, Taiwan, Japan, South Korea and Brazil).',
  },
  {
    title: 'Why some countries have no poles at all',
    paragraphs: [
      'Putting cables underground costs several times more than overhead lines (often 5–10 times for the same length), so poorer, larger or sparsely populated countries build overhead.',
      'Dense, wealthy countries find burying worth it: fewer outages from storms and snow, no trees to trim, and no visual clutter. The Netherlands buried almost its entire low- and medium-voltage network, helped by soft, flat ground that is easy to dig; Germany, Denmark, Belgium\'s cities and Singapore have also buried most local lines.',
      'Japan is the opposite: despite being rich, only a few percent of its roads have buried lines (more in central Tokyo), because post-war rebuilding favoured cheap overhead lines and the dense streets make digging slow and expensive. That is why Japanese streets are so full of poles and wires.',
    ],
    takeaway: 'A tidy European road with no poles at all points to the Netherlands (or Germany and Denmark); a narrow street full of wires in a rich country is Japan.',
  },
  {
    title: 'Counting wires: what the lines tell you',
    paragraphs: [
      'Most electricity is generated as three-phase AC, so medium-voltage lines usually have three wires (three "phases") on the crossarm, in a row or a triangle. Rural branch lines may carry only one or two phases.',
      'In North America a single high wire with a lower neutral is very common on rural roads, feeding one transformer at a time. Europe more often runs all three phases plus a neutral to the houses (400 V three-phase), frequently as one twisted black bundle cable ("ABC") instead of separate wires.',
      'Telephone, cable-TV and fibre lines hang lowest on the pole: they are not dangerous, so workers can reach them without switching off the power. Southeast Asia and India are known for huge tangles of them.',
    ],
    takeaway: 'Twisted black bundle cables = Europe, Russia and much of Latin America; bare separate wires with a pole transformer = a North American-style system.',
  },
  {
    title: 'Insulators: more discs, more volts',
    paragraphs: [
      'An insulator has to stop electricity jumping from the wire to the pole, even when wet and dirty. Higher voltage needs a longer path, so higher-voltage insulators are taller, have more ribs, or (for hanging strings) more discs: roughly one disc for every 10–15 kV.',
      'Local lines use small pin or post insulators; big transmission pylons carry long strings of discs. The material depends on era and supplier: glass (often green or clear), brown or white porcelain, grey polymer. Utilities buy from particular suppliers, which is why insulator colour and shape can identify a state in Brazil.',
    ],
    takeaway: 'Strings of 10 or more discs mean a transmission line (hundreds of kV), not a street pole.',
  },
  {
    title: 'Wood, concrete or steel: what decides the material',
    paragraphs: [
      'Wood is cheap, light and easy to climb and drill, so countries with big forests use it: the US, Canada, Scandinavia, the UK, Australia. It is treated with creosote or other preservatives (the dark colour), and the Nordic black metal caps keep rain out of the top, where rot starts.',
      'Concrete lasts much longer and resists rot, termites and fire, but is heavy. Countries short of timber, or with termites, chose it: most of Europe outside the Nordics, the former USSR, Latin America and much of Asia.',
      'The shape comes from how the concrete is made. Poles cast in moulds come out square or rectangular (Soviet and Thai poles). Spinning the mould makes round, hollow poles (Japan, Italy, Bulgaria). Holes and ladder slots (Hungary, Romania, Poland, Brazil, Vietnam) save concrete and weight while keeping strength, like a truss, and give climbers footholds.',
      'Steel is used where poles must be light, tall or quick to put up: lattice and mesh poles in Turkey and Spain, octagonal steel poles in the Philippines, and the steel-and-concrete Stobie pole in South Australia.',
    ],
    takeaway: 'Pole material follows forests, termites and money: wood in timber countries, concrete almost everywhere else.',
  },
  {
    title: 'Why each company does it differently',
    paragraphs: [
      'Local networks are built and maintained by electricity companies, each with its own engineering standards: crossarm shape, insulator supplier, ID tags. Where one national company runs everything (Taiwan Power, Kenya Power), poles look the same nationwide. Where there are regional companies, poles change at company borders: Japan has ten regional power companies, and Brazil and Indonesia have regional utilities, which is why poles can pinpoint a region there.',
      'Pole tags exist so repair crews can find a specific pole. Each company sets their colour, shape and numbering, which makes them among the most precise clues of all.',
    ],
    takeaway: 'Poles change where the power company changes: learn the company areas and you learn the regions.',
  },
]
