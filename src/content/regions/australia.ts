import type { CountryStudy } from './types'

export const australia: CountryStudy = {
  country: 'AU',
  unit: 'states and territories',
  plonkit: 'australia',
  intro: 'Australia has six states and two mainland territories. Most people live on the east and southeast coasts; the interior is red desert. Vegetation and soil colour, plus a few state-specific road features, tell the states apart.',
  tips: [
    'Route markers: New South Wales, Victoria, South Australia and Tasmania use letter–number routes (M1, A32, B23, C…). Western Australia still uses numbered shields.',
    'South Australia has "Stobie poles": power poles of two steel beams with concrete in between. Almost nowhere else has them.',
    'Red soil and spinifex = the outback (Northern Territory, WA, far Queensland/SA); green pasture = the southeast; sugarcane = coastal Queensland.',
    'Eucalyptus is everywhere, so it does not help. Boab trees = the Kimberley (WA) and the edge of the NT.',
  ],
  groups: [
    { name: 'States', blurb: 'The six original British colonies, each with its own road authority and style.' },
    { name: 'Territories', blurb: 'The Northern Territory and the Australian Capital Territory (Canberra).' },
  ],
  regions: [
    { id: 'AU-NSW', name: 'New South Wales', group: 'States', looks: 'Sydney and a green coast of eucalyptus forest and beaches; the Blue Mountains; sheep and wheat on the western plains, dry outback in the far west.', clues: ['Alphanumeric routes (M1, A1, B…)', 'Green rolling pasture with gum trees on the tablelands'], remember: 'New South Wales is Sydney plus a slice of everything: beach, mountains, farms and outback.' },
    { id: 'AU-VIC', name: 'Victoria', group: 'States', looks: 'Green, cooler and small: dairy pasture, the Great Ocean Road, vineyards, mountains with snow; Melbourne\'s trams.', clues: ['Alphanumeric routes (M, A, B, C)', 'Greener and more fenced than the rest of the mainland'], remember: 'Victoria is the small green garden state: Melbourne trams and dairy cows.' },
    { id: 'AU-QLD', name: 'Queensland', group: 'States', looks: 'Tropical coast with sugarcane, cane-train tracks, palms and the Great Barrier Reef; "Queenslander" wooden houses on stilts; dry cattle outback inland.', clues: ['Sugarcane fields with narrow-gauge cane railways', 'Timber houses raised on stilts with verandahs'], remember: 'Queensland is sugarcane, stilt houses and the Reef.' },
    { id: 'AU-SA', name: 'South Australia', group: 'States', looks: 'Wheat fields and vineyards (Barossa) around Adelaide, then dry saltbush plains, salt lakes and the treeless Nullarbor.', clues: ['Stobie poles: power poles of steel and concrete', 'Alphanumeric routes (A, B)'], remember: 'South Australia has Stobie poles: steel-and-concrete poles, because good timber was scarce and termites eat wood.' },
    { id: 'AU-WA', name: 'Western Australia', group: 'States', looks: 'Huge: tall karri and jarrah forests in the far southwest, the wheatbelt, red Pilbara mining country, boab trees in the Kimberley; Perth.', clues: ['Numbered route shields instead of alphanumeric codes', 'Very red soil in the north'], remember: 'Western Australia is a third of the country: forests at the bottom, red iron at the top.' },
    { id: 'AU-TAS', name: 'Tasmania', group: 'States', looks: 'A green, hilly, cool island: pasture, tall wet forests, mountains, stone Georgian towns; Hobart.', clues: ['Green and hilly, more like New Zealand than Australia', 'Alphanumeric routes (A, B, C)'], remember: 'Tasmania is Australia\'s cool green island: think New Zealand with wombats.' },
    { id: 'AU-NT', name: 'Northern Territory', group: 'Territories', looks: 'Red desert with spinifex and termite mounds, Uluru in the centre; tropical savanna and wet-season floods in the Top End around Darwin.', clues: ['Tall red termite mounds by the road', 'Road trains and very long empty roads', 'Some roads have no speed limit'], remember: 'The Northern Territory is the red centre: Uluru, termite mounds and road trains.' },
    { id: 'AU-ACT', name: 'Australian Capital Territory', group: 'Territories', looks: 'Canberra: a planned garden city of roundabouts, open grass, gum trees and government buildings around a lake.', clues: ['Roundabouts everywhere; wide, green, low-density suburbs'], remember: 'The ACT is Canberra: the capital built as a compromise between Sydney and Melbourne.' },
  ],
  view: { lon: [112, 155], lat: [-44, -10] },
}
