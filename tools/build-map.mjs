// Builds the world map used by the "Where is it seen?" quiz. Run with: npm run build-map
// Output (committed): src/content/generated/map.topo.json
//
// Countries come from Natural Earth (1:50m). Countries with more than one official language on
// signs are split into first-level regions from geoBoundaries (gbOpen, CC BY 4.0), so the quiz can
// tell e.g. Catalonia from the rest of Spain. Every feature has { id, name, country }:
// id is an ISO 3166-1 alpha-2 code for whole countries, or an ISO 3166-2 code for regions.

import mapshaper from 'mapshaper'
import { writeFile } from 'node:fs/promises'

const OUT = new URL('../src/content/generated/map.topo.json', import.meta.url)
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

// Countries split into regions: ISO2 → how to read the geoBoundaries file.
const split = {
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
}

// Natural Earth units without an ISO code that we keep, and ones we drop.
const neFallback = { 'N. Cyprus': { id: 'CY-N', name: 'Northern Cyprus', country: 'CY' }, 'Somaliland': { id: 'SO', name: 'Somalia', country: 'SO' } }

async function json(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'geoguessr-study map build' } })
  if (!res.ok) throw new Error(`${res.status} ${url}`)
  return res.json()
}

async function main() {
  const features = []
  const ne = await json(NE)
  for (const f of ne.features) {
    const p = f.properties
    let props
    if (p.ISO_A2_EH === '-99') props = neFallback[p.NAME]
    else if (p.ISO_A2_EH !== 'AQ' && !split[p.ISO_A2_EH]) props = { id: p.ISO_A2_EH, name: p.NAME_LONG || p.NAME, country: p.ISO_A2_EH }
    if (props) features.push({ type: 'Feature', properties: props, geometry: f.geometry })
  }
  // Cyprus is split too (Greek south, Turkish north), using Natural Earth's own units.
  const cy = features.find((f) => f.properties.id === 'CY')
  if (cy) cy.properties = { id: 'CY', name: 'Cyprus (Republic)', country: 'CY' }

  for (const [iso2, s] of Object.entries(split)) {
    const fc = await json(gb(s.iso3, s.level))
    let n = 0
    for (const f of fc.features) {
      const p = f.properties
      const code = s.code(p)
      if (!code) continue
      features.push({ type: 'Feature', properties: { id: code, name: s.name?.(p) ?? p.shapeName, country: iso2 }, geometry: f.geometry })
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
  await writeFile(OUT, topo)
  console.log(`\n${features.length} features, ${(topo.length / 1024).toFixed(0)} KB`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
