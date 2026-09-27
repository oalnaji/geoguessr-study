// Builds the world maps. Run with: npm run build-map
// Output (committed): src/content/generated/map.topo.json and map-veg.topo.json
//
// Countries come from Natural Earth (1:50m); some are split into first-level regions from
// geoBoundaries (gbOpen, CC BY 4.0). Two maps with different splits:
//   - languages: countries with more than one official language on signs (e.g. Catalonia vs Spain)
//   - vegetation: large countries, so plants can be placed precisely (e.g. Brazilian states) Every feature has { id, name, country }:
// id is an ISO 3166-1 alpha-2 code for whole countries, or an ISO 3166-2 code for regions.

import mapshaper from 'mapshaper'
import { writeFile } from 'node:fs/promises'

const OUT_DIR = new URL('../src/content/generated/', import.meta.url)
const NE = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson'
const gb = (iso3, level = 'ADM1') =>
  `https://github.com/wmgeolab/geoBoundaries/raw/main/releaseData/gbOpen/${iso3}/${level}/geoBoundaries-${iso3}-${level}_simplified.geojson`

// Region codes for files that only carry names.
const spain = {
  'Andalucía': 'ES-AN', 'Aragón': 'ES-AR', 'Principado de Asturias': 'ES-AS', 'Illes Balears': 'ES-IB',
  'Canarias': 'ES-CN', 'Cantabria': 'ES-CB', 'Castilla y León': 'ES-CL', 'Castilla-La Mancha': 'ES-CM',
  'Cataluña/Catalunya': 'ES-CT', 'Ciudad Autónoma de Ceuta': 'ES-CE', 'Ciudad Autónoma de Melilla': 'ES-ML',
  'Comunidad de Madrid': 'ES-MD', 'Comunidad Foral de Navarra': 'ES-NC', 'Comunitat Valenciana': 'ES-VC',
  'Extremadura': 'ES-EX', 'Galicia': 'ES-GA', 'La Rioja': 'ES-RI', 'País Vasco/Euskadi': 'ES-PV', 'Región de Murcia': 'ES-MC',
}
const italy = {
  'Piemonte': 'IT-21', "Valle d'Aosta": 'IT-23', 'Lombardia': 'IT-25', 'Trentino-Alto Adige': 'IT-32', 'Veneto': 'IT-34',
  'Friuli Venezia Giulia': 'IT-36', 'Liguria': 'IT-42', 'Emilia-Romagna': 'IT-45', 'Toscana': 'IT-52', 'Umbria': 'IT-55',
  'Marche': 'IT-57', 'Lazio': 'IT-62', 'Abruzzo': 'IT-65', 'Molise': 'IT-67', 'Campania': 'IT-72', 'Puglia': 'IT-75',
  'Basilicata': 'IT-77', 'Calabria': 'IT-78', 'Sicilia': 'IT-82', 'Sardegna': 'IT-88',
}
const china = {
  'Anhui': 'CN-AH', 'Beijing': 'CN-BJ', 'Chongqing': 'CN-CQ', 'Fujian': 'CN-FJ', 'Gansu': 'CN-GS', 'Guangzhou': 'CN-GD',
  'Guangxi': 'CN-GX', 'Guizhou': 'CN-GZ', 'Hainan': 'CN-HI', 'Hebei': 'CN-HE', 'Heilongjiang': 'CN-HL', 'Henan': 'CN-HA',
  'Hubei': 'CN-HB', 'Hunan': 'CN-HN', 'Jiangsu': 'CN-JS', 'Jiangxi': 'CN-JX', 'Jilin': 'CN-JL', 'Liaoning': 'CN-LN',
  'Inner Mongolia': 'CN-NM', 'Ningxia': 'CN-NX', 'Qinghai': 'CN-QH', 'Shaanxi': 'CN-SN', 'Shandong': 'CN-SD',
  'Shanghai': 'CN-SH', 'Shanxi': 'CN-SX', 'Sichuan': 'CN-SC', 'Tianjin': 'CN-TJ', 'Xinjiang': 'CN-XJ', 'Tibet': 'CN-XZ',
  'Yunnan': 'CN-YN', 'Zhejiang': 'CN-ZJ',
}
const chinaName = (n) => {
  const key = Object.keys(china).find((k) => n.startsWith(k))
  return key && { code: china[key], name: key === 'Guangzhou' ? 'Guangdong' : key }
}

const chile = {
  'Antofagasta': 'CL-AN', 'Arica y Parinacota': 'CL-AP', 'Atacama': 'CL-AT', 'Aysén': 'CL-AI', 'Coquimbo': 'CL-CO',
  'La Araucanía': 'CL-AR', 'Los Lagos': 'CL-LL', 'Los Ríos': 'CL-LR', 'Magallanes': 'CL-MA', 'Ñuble': 'CL-NB',
  'Tarapacá': 'CL-TA', 'Valparaíso': 'CL-VS', 'Bío-Bío': 'CL-BI', "Libertador Bernardo O'Higgins": 'CL-LI', 'Maule': 'CL-ML',
  'Metropolitana de Santiago': 'CL-RM',
}
// The Chile file's names are UTF-8 read as Latin-1; undo that, then match "Región de X".
const chileName = (n) => {
  const fixed = Buffer.from(n, 'latin1').toString('utf8').replace(/^Región (de |del )?/, '')
  const key = Object.keys(chile).find((k) => fixed.startsWith(k))
  return key && { code: chile[key], name: key }
}
const southAfrica = { EC: 'ZA-EC', FS: 'ZA-FS', GT: 'ZA-GP', KZ: 'ZA-KZN', LI: 'ZA-LP', MP: 'ZA-MP', NW: 'ZA-NW', NC: 'ZA-NC', WC: 'ZA-WC' }
// US territories are separate countries in Natural Earth.
const usTerritories = new Set(['US-PR', 'US-AS', 'US-GU', 'US-VI', 'US-MP', 'US-UM'])

// How to read each country's geoBoundaries file: ISO2 → { iso3, code(props), name?(props) }.
const sources = {
  IN: { iso3: 'IND', code: (p) => p.shapeISO },
  ES: { iso3: 'ESP', code: (p) => spain[p.shapeName] },
  BE: { iso3: 'BEL', code: (p) => `BE-${p.shapeISO}`, name: (p) => ({ BRU: 'Brussels', VLG: 'Flanders', WAL: 'Wallonia' })[p.shapeISO] },
  CH: { iso3: 'CHE', code: (p) => p.shapeISO },
  CA: { iso3: 'CAN', code: (p) => p.shapeISO.replace('CA-QB', 'CA-QC') },
  IT: { iso3: 'ITA', level: 'ADM2', code: (p) => italy[p.shapeName] },
  CN: { iso3: 'CHN', code: (p) => chinaName(p.shapeName)?.code, name: (p) => chinaName(p.shapeName)?.name },
  // Åland (FI-01) is a separate feature in Natural Earth.
  FI: { iso3: 'FIN', code: (p) => (p.shapeISO === 'FI-01' ? null : p.shapeISO) },
  RO: { iso3: 'ROU', code: (p) => p.shapeISO },
  SK: { iso3: 'SVK', code: (p) => p.shapeISO },
  RS: { iso3: 'SRB', code: (p) => p.shapeISO },
  GB: { iso3: 'GBR', code: (p) => p.shapeISO },
  IQ: { iso3: 'IRQ', code: (p) => p.shapeISO },
  BA: { iso3: 'BIH', code: (p) => p.shapeISO.replace('*', '') },
  NO: { iso3: 'NOR', code: (p) => p.shapeISO },
  BR: { iso3: 'BRA', code: (p) => p.shapeISO },
  MX: { iso3: 'MEX', code: (p) => (p.shapeName === 'Distrito Federal' ? 'MX-CMX' : p.shapeISO), name: (p) => (p.shapeName === 'Distrito Federal' ? 'Mexico City' : p.shapeName) },
  US: { iso3: 'USA', code: (p) => { const c = p.shapeISO.replace('SU-', 'US-'); return usTerritories.has(c) ? null : c } },
  // geoBoundaries merges Entre Ríos into Buenos Aires, so Argentina comes from Natural Earth's admin-1 layer.
  AR: { naturalEarth: true, code: (p) => p.iso_3166_2, name: (p) => p.name },
  CL: { iso3: 'CHL', code: (p) => chileName(p.shapeName)?.code, name: (p) => chileName(p.shapeName)?.name },
  CO: { iso3: 'COL', code: (p) => p.shapeISO },
  PE: { iso3: 'PER', code: (p) => p.shapeISO.replace('*', '') },
  AU: { iso3: 'AUS', code: (p) => (p.shapeISO?.startsWith('AU-') ? p.shapeISO : null) },
  RU: { iso3: 'RUS', code: (p) => p.shapeISO },
  ID: { iso3: 'IDN', code: (p) => p.shapeISO },
  ZA: { iso3: 'ZAF', code: (p) => southAfrica[p.shapeISO] },
  TR: { iso3: 'TUR', code: (p) => p.shapeISO },
  MY: { iso3: 'MYS', code: (p) => p.shapeISO },
  JP: { iso3: 'JPN', code: (p) => p.shapeISO, name: (p) => p.shapeName.replace(/ Prefecture$/, '') },
  NZ: { iso3: 'NZL', code: (p) => p.shapeISO, name: (p) => p.shapeName.replace(/ (Region|Territory)$/, '') },
}

const maps = {
  // Countries with more than one official language on signs.
  'map.topo.json': ['IN', 'ES', 'BE', 'CH', 'CA', 'IT', 'CN', 'FI', 'RO', 'SK', 'RS', 'GB', 'IQ', 'BA', 'NO'],
  // Large countries whose vegetation differs a lot from region to region.
  'map-veg.topo.json': ['BR', 'MX', 'US', 'CA', 'AR', 'CL', 'CO', 'PE', 'AU', 'CN', 'IN', 'RU', 'ID', 'MY', 'ZA', 'ES', 'TR', 'JP', 'NZ', 'GB'],
}

// Natural Earth units without an ISO code that we keep, and ones we drop.
const neFallback = { 'N. Cyprus': { id: 'CY-N', name: 'Northern Cyprus', country: 'CY' }, 'Somaliland': { id: 'SO', name: 'Somalia', country: 'SO' } }

async function json(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'geoguessr-study map build' } })
  if (!res.ok) throw new Error(`${res.status} ${url}`)
  return res.json()
}

let admin1
/** Natural Earth 1:10m states and provinces for one country (large download, fetched once). */
async function neAdmin1(iso2) {
  admin1 ??= await json('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_1_states_provinces.geojson')
  return { features: admin1.features.filter((f) => f.properties.iso_a2 === iso2) }
}

async function build(file, splitList, ne) {
  const split = new Set(splitList)
  const features = []
  for (const f of ne.features) {
    const p = f.properties
    let props
    if (p.ISO_A2_EH === '-99') props = neFallback[p.NAME]
    else if (p.ISO_A2_EH !== 'AQ' && !split.has(p.ISO_A2_EH)) props = { id: p.ISO_A2_EH, name: p.NAME_LONG || p.NAME, country: p.ISO_A2_EH }
    if (props) features.push({ type: 'Feature', properties: props, geometry: f.geometry })
  }
  // Cyprus is split too (Greek south, Turkish north), using Natural Earth's own units.
  const cy = features.find((f) => f.properties.id === 'CY')
  if (cy) cy.properties = { id: 'CY', name: 'Cyprus (Republic)', country: 'CY' }

  for (const iso2 of splitList) {
    const src = sources[iso2]
    const fc = src.naturalEarth ? await neAdmin1(iso2) : await json(gb(src.iso3, src.level))
    let n = 0
    for (const f of fc.features) {
      const p = f.properties
      const code = src.code(p)
      if (!code) continue
      features.push({ type: 'Feature', properties: { id: code, name: src.name?.(p) ?? p.shapeName, country: iso2 }, geometry: f.geometry })
      n++
    }
    process.stdout.write(`${iso2}:${n} `)
  }

  const input = { type: 'FeatureCollection', features }
  const out = await mapshaper.applyCommands(
    '-i in.json -dissolve2 id copy-fields=name,country -simplify 4% weighted keep-shapes -o out.json format=topojson quantization=100000',
    { 'in.json': input },
  )
  const topo = out['out.json']
  await writeFile(new URL(file, OUT_DIR), topo)
  console.log(`\n${file}: ${features.length} features, ${(topo.length / 1024).toFixed(0)} KB`)
}

async function main() {
  const ne = await json(NE)
  for (const [file, splitList] of Object.entries(maps)) await build(file, splitList, ne)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
