// US state highway shields and licence plates, for the tabs on the United States page.
// Shields: the state's standard route marker (a public-domain SVG on Wikimedia Commons).
// Plates: the standard passenger plate as it looks through the Street View blur. States issue new
// designs every few years and old plates stay on the road for a long time, so expect a mix.

export interface UsShield {
  /** Commons file name of an example marker */
  file: string
  look: string
  /** Distinctive enough to recognise at a glance */
  notable?: boolean
}

export interface UsPlate {
  /** CSS background for the drawn plate */
  bg: string
  /** Character colour */
  text: string
  look: string
  /** Front plate required (so a car with no front plate rules this state out) */
  front: boolean
  notable?: boolean
}

export const usShields: Record<string, UsShield> = {
  'US-AL': { file: 'Alabama 5.svg', look: 'Black number on the outline of Alabama.' },
  'US-AK': { file: 'Alaska 1 shield.svg', look: '"ALASKA" and the stars of the Big Dipper and North Star from the state flag.', notable: true },
  'US-AZ': { file: 'Arizona 30.svg', look: 'Plain rectangle with "ARIZONA" across the top.' },
  'US-AR': { file: 'Arkansas 1.svg', look: 'Number on the outline of Arkansas.' },
  'US-CA': { file: 'California 15.svg', look: 'Green miner\'s spade with "CALIFORNIA" at the top: a nod to the Gold Rush.', notable: true },
  'US-CO': { file: 'Colorado 15.svg', look: 'The Colorado flag (red C, blue and white stripes) above the number.', notable: true },
  'US-CT': { file: 'Connecticut Highway 17.svg', look: 'Plain white rectangle.' },
  'US-DE': { file: 'Elongated circle 1.svg', look: 'Plain white oval.' },
  'US-FL': { file: 'Florida 2.svg', look: 'Number inside the outline of Florida.', notable: true },
  'US-GA': { file: 'Georgia 17.svg', look: 'Number on the black outline of Georgia.' },
  'US-HI': { file: 'HI-32.svg', look: 'Standard shield-shaped marker.' },
  'US-ID': { file: 'Idaho 21.svg', look: 'Number next to the outline of Idaho (with its panhandle).' },
  'US-IL': { file: 'Illinois 1.svg', look: 'Rectangle with "ILLINOIS" across the top.' },
  'US-IN': { file: 'Indiana 1.svg', look: 'Rectangle with "INDIANA" across the top.' },
  'US-IA': { file: 'Iowa 1.svg', look: 'Number in a white circle on a black square.' },
  'US-KS': { file: 'K-2.svg', look: 'Yellow sunflower with the number in the middle (routes are called K-2, K-10…).', notable: true },
  'US-KY': { file: 'Elongated circle 80.svg', look: 'Plain white oval.' },
  'US-LA': { file: 'Louisiana 50 (2008).svg', look: 'White outline of Louisiana with "LA" on a black square.', notable: true },
  'US-ME': { file: 'Maine 9.svg', look: 'Plain rectangular marker.' },
  'US-MD': { file: 'MD Route 3.svg', look: 'Rectangle with "MARYLAND" across the top.' },
  'US-MA': { file: 'MA Route 75.svg', look: 'Plain white square.' },
  'US-MI': { file: 'M-3.svg', look: 'Black diamond with a small "M" above the number (routes are called M-3, M-28…).', notable: true },
  'US-MN': { file: 'MN-4.svg', look: 'Blue shield with a yellow "MINNESOTA" band on top.', notable: true },
  'US-MS': { file: 'Circle sign 25.svg', look: 'Plain white circle or oval.' },
  'US-MO': { file: 'MO-2.svg', look: 'Number on the outline of Missouri.' },
  'US-MT': { file: 'MT-25.svg', look: 'Rectangle with "MONTANA" across the top.' },
  'US-NE': { file: 'N-4.svg', look: '"NEBRASKA" on top and a small covered wagon under the number.', notable: true },
  'US-NV': { file: 'Nevada 117.svg', look: 'Number on the outline of Nevada, with "NEVADA" underneath.' },
  'US-NH': { file: 'NH Route 103.svg', look: 'Number on the outline of New Hampshire.' },
  'US-NJ': { file: 'Ellipse sign 4.svg', look: 'Plain white oval.' },
  'US-NM': { file: 'New Mexico 7.svg', look: 'Red Zia sun symbol (a circle with rays) around the number.', notable: true },
  'US-NY': { file: 'NY-5.svg', look: 'White shield on a black square.' },
  'US-NC': { file: 'NC 42.svg', look: 'Black diamond with a white number (like Michigan\'s, but without the M).', notable: true },
  'US-ND': { file: 'ND-1 (2015).svg', look: 'Rectangle with "NORTH DAKOTA" across the top.' },
  'US-OH': { file: 'OH-2.svg', look: 'Number on the outline of Ohio.' },
  'US-OK': { file: 'Oklahoma State Highway 1.svg', look: 'Number inside the outline of Oklahoma (with its panhandle).', notable: true },
  'US-OR': { file: 'OR 182.svg', look: 'Rounded, slightly pointed white oval.' },
  'US-PA': { file: 'PA-8.svg', look: 'Keystone shape (Pennsylvania is the "Keystone State").', notable: true },
  'US-RI': { file: 'Rhode Island 78.svg', look: 'Rectangle with "R.I." across the top.' },
  'US-SC': { file: 'South Carolina 9.svg', look: 'Blue marker with "SOUTH CAROLINA" and the palmetto tree.', notable: true },
  'US-SD': { file: 'SD 273.svg', look: 'Number on the outline of South Dakota.' },
  'US-TN': { file: 'Tennessee 1.svg', look: 'Rectangle with "Tennessee" at the bottom; secondary routes use a triangle.' },
  'US-TX': { file: 'Texas 7.svg', look: 'Plain square with "TEXAS" under the number. Farm to Market (FM) roads use the outline of Texas.', notable: true },
  'US-UT': { file: 'Utah 126.svg', look: 'Beehive shape (Utah is the "Beehive State").', notable: true },
  'US-VT': { file: 'Vermont 12.svg', look: 'Green rectangle with "VERMONT" on top.', notable: true },
  'US-VA': { file: 'Virginia 3.svg', look: 'White shield on a black square; secondary routes use a small circle.' },
  'US-WA': { file: 'WA-16.svg', look: 'George Washington\'s profile, with the number on his neck.', notable: true },
  'US-WV': { file: 'WV-2.svg', look: 'Plain white rectangle.' },
  'US-WI': { file: 'WIS 13.svg', look: 'Rectangle with a small "WIS" on top. County roads use letters.' },
  'US-WY': { file: 'WY-11.svg', look: 'Yellow marker with "WYOMING" and the bucking horse and rider.', notable: true },
}

const WHITE = '#fbfbf7'
const grad = (...stops: string[]) => `linear-gradient(to bottom, ${stops.join(', ')})`

export const usPlates: Record<string, UsPlate> = {
  'US-AL': { bg: grad('#dfe9f5', WHITE), text: '#1d2f6f', look: 'White with a faint blue design; dark blue characters.', front: false },
  'US-AK': { bg: '#f2c230', text: '#1d3f8f', look: 'Gold/yellow with dark blue characters and the state flag.', front: true, notable: true },
  'US-AZ': { bg: grad(WHITE, WHITE, '#e8b98a'), text: '#7a1f2b', look: 'White with a desert and saguaro scene along the bottom; maroon characters.', front: false },
  'US-AR': { bg: WHITE, text: '#1a1a1a', look: 'White with a red and blue "Arkansas" header and a diamond; dark characters.', front: false },
  'US-CA': { bg: WHITE, text: '#1a2f6b', look: 'Plain white with red "California" script; dark blue characters.', front: true },
  'US-CO': { bg: grad('#1c6b3a', WHITE, WHITE), text: '#1c6b3a', look: 'White with green mountain peaks along the top; green characters.', front: true, notable: true },
  'US-CT': { bg: grad(WHITE, '#bcd4ea'), text: '#1d2f6f', look: 'White fading to light blue; dark blue characters.', front: true },
  'US-DE': { bg: '#1c2f5e', text: '#e8c34a', look: 'Dark navy blue with gold characters: one of the darkest plates in the US.', front: false, notable: true },
  'US-DC': { bg: WHITE, text: '#b31b1b', look: 'White with red and blue; "End Taxation Without Representation".', front: true },
  'US-FL': { bg: WHITE, text: '#1b6b3a', look: 'White with an orange (fruit and leaves) in the middle; green characters.', front: false, notable: true },
  'US-GA': { bg: WHITE, text: '#1a1a1a', look: 'White with a peach in the middle; dark characters.', front: false },
  'US-HI': { bg: 'linear-gradient(to bottom, #fbfbf7 0%, #fbfbf7 55%, #e84a3c 60%, #f2a93b 66%, #f2e24b 72%, #5bb85b 78%, #4a7fd1 84%, #fbfbf7 90%)', text: '#1a1a1a', look: 'White with a rainbow arc; black characters.', front: true, notable: true },
  'US-ID': { bg: grad('#9ec3e6', WHITE), text: '#b31b1b', look: 'Blue sky fading to white; red characters ("Famous Potatoes").', front: true },
  'US-IL': { bg: WHITE, text: '#8b1a1a', look: 'White with faint Lincoln and skyline graphics; dark red characters.', front: true },
  'US-IN': { bg: WHITE, text: '#1d2f6f', look: 'White with blue graphics; dark blue characters.', front: false },
  'US-IA': { bg: WHITE, text: '#1d3f8f', look: 'White with a blue skyline and farm scene; blue characters.', front: true },
  'US-KS': { bg: grad('#cfdbe8', WHITE), text: '#1d2f5f', look: 'Pale blue-grey sky fading to white; dark blue characters.', front: false },
  'US-KY': { bg: grad('#cfe0f2', WHITE), text: '#1d2f6f', look: 'White with a light blue sky; dark blue characters.', front: false },
  'US-LA': { bg: WHITE, text: '#1d2f6f', look: 'White with a red "Louisiana" and a pelican; dark blue characters.', front: false },
  'US-ME': { bg: WHITE, text: '#1a1a1a', look: 'White with a chickadee and pine cone; black characters.', front: true },
  'US-MD': { bg: WHITE, text: '#1a1a1a', look: 'White with a red and black Maryland banner; black characters.', front: true },
  'US-MA': { bg: WHITE, text: '#b31b1b', look: 'Plain white with red characters and blue "Massachusetts".', front: true, notable: true },
  'US-MI': { bg: WHITE, text: '#1d3f8f', look: 'White with blue characters (newer plates show the Mackinac Bridge in dark blue).', front: false },
  'US-MN': { bg: WHITE, text: '#1d3f8f', look: 'White with a blue lake and pine scene; blue characters.', front: true },
  'US-MS': { bg: '#1f3a70', text: '#ffffff', look: 'Dark blue with the state seal; white characters.', front: false, notable: true },
  'US-MO': { bg: grad('#a9c7e8', WHITE), text: '#1d2f6f', look: 'Blue sky fading to white; dark characters.', front: true },
  'US-MT': { bg: grad('#9ec3e6', WHITE), text: '#1d2f6f', look: 'Light blue and white with a mountain scene; dark blue characters.', front: true },
  'US-NE': { bg: WHITE, text: '#1d2f6f', look: 'White with a blue and grey design; dark blue characters.', front: true },
  'US-NV': { bg: grad('#3a6db3', '#f1c75b'), text: '#1d2f5f', look: 'Blue sky fading to a yellow sunset over mountains; dark blue characters.', front: true, notable: true },
  'US-NH': { bg: WHITE, text: '#1c6b3a', look: 'White with green characters and "Live Free or Die".', front: true, notable: true },
  'US-NJ': { bg: grad('#fdf2b5', '#e8c878'), text: '#1a1a1a', look: 'Pale yellow fading to buff; black characters ("Garden State").', front: true, notable: true },
  'US-NM': { bg: '#f5d43b', text: '#b31b1b', look: 'Bright yellow with red characters and a red Zia sun. Newer plates are turquoise.', front: false, notable: true },
  'US-NY': { bg: '#f2c94c', text: '#1d2f6f', look: 'Gold with dark blue characters (2010–2020, still common); newer plates are white with blue and orange.', front: true, notable: true },
  'US-NC': { bg: grad('#cfe0f2', WHITE, WHITE), text: '#1d2f6f', look: 'White with a pale blue top band and red "North Carolina"; "First in Flight".', front: false },
  'US-ND': { bg: WHITE, text: '#1d2f6f', look: 'White with a badlands scene; dark characters.', front: true },
  'US-OH': { bg: grad('#cfe0f2', WHITE, '#f2c77a'), text: '#1d2f6f', look: 'White with a blue, green and orange sunrise landscape; dark blue characters.', front: false },
  'US-OK': { bg: WHITE, text: '#1d3f8f', look: 'White with the scissor-tailed flycatcher; blue characters.', front: false },
  'US-OR': { bg: WHITE, text: '#1d2f6f', look: 'White with a green Douglas fir in the centre; dark blue characters.', front: true, notable: true },
  'US-PA': { bg: 'linear-gradient(to bottom, #1d3f8f 0%, #1d3f8f 16%, #fbfbf7 16%, #fbfbf7 84%, #f2c94c 84%)', text: '#1d3f8f', look: 'White with a dark blue band on top and a yellow band at the bottom.', front: false, notable: true },
  'US-RI': { bg: grad(WHITE, WHITE, '#6fa3d6'), text: '#1a1a1a', look: 'White with a blue wave along the bottom; black characters.', front: true },
  'US-SC': { bg: grad('#cfe0f2', WHITE), text: '#1d2f6f', look: 'White and light blue with the palmetto and crescent; dark blue characters.', front: false },
  'US-SD': { bg: WHITE, text: '#1d2f6f', look: 'White with a picture of Mount Rushmore; dark characters.', front: true },
  'US-TN': { bg: grad('#2f5aa0', WHITE, WHITE), text: '#1d2f6f', look: 'White with a blue top band; dark blue characters.', front: false },
  'US-TX': { bg: WHITE, text: '#1a1a1a', look: 'White with black characters and a small star; older plates show a red "Texas" and a scene.', front: true },
  'US-UT': { bg: WHITE, text: '#1d2f6f', look: 'White with Delicate Arch in red-orange on the left; dark blue characters.', front: true },
  'US-VT': { bg: '#1c6b3a', text: '#ffffff', look: 'Green with white characters.', front: true, notable: true },
  'US-VA': { bg: WHITE, text: '#1d2f6f', look: 'Plain white with dark blue characters and "Virginia" in red script.', front: true },
  'US-WA': { bg: WHITE, text: '#1d3f8f', look: 'White with a blue outline of Mount Rainier at the top; blue characters.', front: true },
  'US-WV': { bg: grad('#1d3f8f', WHITE, WHITE, '#f2c94c'), text: '#1d2f6f', look: 'White with blue and gold bands; "Wild, Wonderful".', front: false },
  'US-WI': { bg: WHITE, text: '#1a1a1a', look: 'White with a blue lake scene and red "Wisconsin"; black characters.', front: true },
  'US-WY': { bg: grad('#9ec3e6', WHITE), text: '#1a1a1a', look: 'Blue sky and white with the brown bucking horse and rider.', front: true, notable: true },
}
