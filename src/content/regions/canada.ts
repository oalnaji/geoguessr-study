import type { CountryStudy } from './types'

export const canada: CountryStudy = {
  country: 'CA',
  unit: 'provinces and territories',
  plonkit: 'canada',
  quizGroups: true,
  intro: 'Canada has 10 provinces and 3 northern territories. Almost everyone lives in a thin strip near the US border; coverage further north is sparse. Language on signs and the landscape (Atlantic coast, forest, prairie, Rockies, Pacific rainforest) are the main clues.',
  tips: [
    'Language on signs: French only in Quebec ("ARRÊT" stop signs); English and French in New Brunswick and parts of Ontario; English elsewhere; Inuktitut syllabics in Nunavut.',
    'Ontario\'s provincial highways have a crowned shield ("King\'s Highway").',
    'Front number plates are required only in some provinces (Ontario, British Columbia, Manitoba among them); Quebec and the Prairies west of Manitoba use a rear plate only.',
    'Flat wheat and canola with grain elevators = the Prairies; rocky coasts with colourful wooden houses = Atlantic Canada.',
  ],
  groups: [
    { name: 'Atlantic', blurb: 'Newfoundland, Nova Scotia, New Brunswick and Prince Edward Island: rocky coasts, fishing villages, forests and small farms.' },
    { name: 'Central', blurb: 'Quebec and Ontario: most Canadians live here, in the St Lawrence and Great Lakes lowlands; the Canadian Shield forest and lakes further north.' },
    { name: 'Prairies', blurb: 'Manitoba, Saskatchewan and Alberta: flat grain fields, grain elevators, big skies; Alberta rises into the Rockies.' },
    { name: 'West Coast', blurb: 'British Columbia: mountains, Pacific rainforest, fjords and the city of Vancouver.' },
    { name: 'North', blurb: 'Yukon, Northwest Territories and Nunavut: boreal forest and tundra, very few roads and people.' },
  ],
  regions: [
    { id: 'CA-NL', name: 'Newfoundland and Labrador', group: 'Atlantic', looks: 'Rocky, windswept, barren hills and stunted spruce; colourful "jellybean" wooden houses in St. John\'s and fishing villages in coves.', clues: ['Rear plate only', 'Treeless rocky coasts with small villages around harbours', 'Labrador: almost no coverage'], remember: 'Newfoundland is the rock: bare rock, bright houses and its own half-hour time zone.' },
    { id: 'CA-PE', name: 'Prince Edward Island', group: 'Atlantic', looks: 'The smallest province: gentle green farmland (potatoes) on bright red soil, red sandstone cliffs, lighthouses.', clues: ['Rear plate only', 'Brick-red soil and red dirt roads'], remember: 'PEI is the red island: red soil, red cliffs, and Anne of Green Gables.' },
    { id: 'CA-NS', name: 'Nova Scotia', group: 'Atlantic', looks: 'Forest, rocky coves and fishing villages, Halifax; the highlands of Cape Breton with some Gaelic signs.', clues: ['Rear plate only', 'Some English–Scottish Gaelic street signs on Cape Breton'], remember: 'Nova Scotia means "New Scotland": lighthouses, lobster and Gaelic.' },
    { id: 'CA-NB', name: 'New Brunswick', group: 'Atlantic', looks: 'Mostly forest, with rivers and small towns; the Bay of Fundy with the world\'s highest tides.', clues: ['Rear plate only', 'The only officially bilingual province: English and French on road signs'], remember: 'New Brunswick is bilingual: "STOP / ARRÊT" on the same sign.' },
    { id: 'CA-QC', name: 'Quebec', group: 'Central', looks: 'Farmland along the St Lawrence with long narrow fields, silver-steeple churches and houses with bell-cast roofs; endless forest and lakes to the north.', clues: ['Rear plate only', 'French only: "ARRÊT" stop signs, "Rue", "Chemin", "Rang"', 'Outdoor spiral staircases on Montreal houses'], remember: 'Quebec is French Canada: only "ARRÊT" on the stop signs.' },
    { id: 'CA-ON', name: 'Ontario', group: 'Central', looks: 'Toronto and the dense Great Lakes lowlands of farms and towns, then the rocky Canadian Shield with pines and lakes ("cottage country") further north.', clues: ['Front and rear plates', 'Crowned "King\'s Highway" shields', 'Pink granite rock cuts and pines in the north'], remember: 'Ontario is the crown province: its highway shields wear a crown.' },
    { id: 'CA-MB', name: 'Manitoba', group: 'Prairies', looks: 'Flat farmland in the south around Winnipeg, lakes and boreal forest in the north.', clues: ['Front and rear plates', 'Flat as the Prairies but with more trees and lakes than Saskatchewan'], remember: 'Manitoba is the start of the Prairies, with lakes on top.' },
    { id: 'CA-SK', name: 'Saskatchewan', group: 'Prairies', looks: 'Flat wheat and yellow canola fields with grain elevators and straight grid roads; boreal forest in the north.', clues: ['Rear plate only', 'Flattest province: the horizon is a straight line'], remember: 'Saskatchewan is so flat you can watch your dog run away for three days.' },
    { id: 'CA-AB', name: 'Alberta', group: 'Prairies', looks: 'Prairie farmland and oil wells in the east, the Rocky Mountains (Banff, Jasper) in the west; Calgary and Edmonton.', clues: ['Rear plate only', 'Pumpjacks and flat prairie with the Rockies on the horizon'], remember: 'Alberta is oil and the Rockies: flat until it suddenly isn\'t.' },
    { id: 'CA-BC', name: 'British Columbia', group: 'West Coast', looks: 'Mountains everywhere: dense wet cedar and fir rainforest on the coast (Vancouver), dry pine valleys and orchards in the interior (Okanagan).', clues: ['Front and rear plates', 'Tall mossy evergreens and mountains, like Washington state'], remember: 'British Columbia is "beautiful British Columbia": mountains in every shot.' },
    { id: 'CA-YT', name: 'Yukon', group: 'North', looks: 'Mountains, spruce forest and the Alaska Highway; Whitehorse and gold-rush Dawson City.', clues: ['Wide gravel shoulders and huge empty mountain valleys'], remember: 'Yukon is Klondike gold-rush country along the Alaska Highway.' },
    { id: 'CA-NT', name: 'Northwest Territories', group: 'North', looks: 'Stunted boreal forest, lakes and tundra; Yellowknife on bare Canadian Shield rock.', clues: ['Plates are shaped like a polar bear'], remember: 'The Northwest Territories\' number plates are shaped like polar bears.' },
    { id: 'CA-NU', name: 'Nunavut', group: 'North', looks: 'Treeless Arctic tundra and rock; Iqaluit\'s houses on stilts over permafrost, no roads between towns.', clues: ['Inuktitut syllabics (ᐃᓄᒃᑎᑐᑦ) on signs', 'No trees at all'], remember: 'Nunavut means "our land" in Inuktitut: no trees, no roads between towns.' },
  ],
  view: { lon: [-141, -52], lat: [41.5, 70] },
}
