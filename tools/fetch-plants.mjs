// Downloads photo credits, occurrence and production data for the Vegetation module.
// Run with: npm run fetch-plants   Output (committed): src/content/generated/plants.json
//
// Photos are not downloaded: only their URLs and credits. The app loads them from the source
// sites (Wikimedia and iNaturalist allow this), and the service worker caches them for offline use.
//   - Wikipedia: the article's lead image, via Wikimedia Commons (licence and author from Commons)
//   - Wikimedia Commons: landscape photos from a category (plantations, fields)
//   - iNaturalist: the species' curated photos, openly licensed ones only
// Where it grows:
//   - GBIF: human observations per country
//   - FAO production per country, via Our World in Data charts

import { readFile, writeFile } from 'node:fs/promises'
import { crops } from '../src/content/vegetation/crops.ts'
import { trees } from '../src/content/vegetation/trees.ts'

const OUT = new URL('../src/content/generated/plants.json', import.meta.url)
// Hand-picked photos per plant (by source page URL), in display order. Plants without an entry get every candidate.
const PICKS = new URL('./photo-picks.json', import.meta.url)
const UA = { 'User-Agent': 'geoguessr-study/0.1 (personal study app; https://github.com/oalnaji/geoguessr-study)' }
const OPEN_LICENSES = new Set(['cc0', 'cc-by', 'cc-by-sa', 'cc-by-nc', 'cc-by-nc-sa', 'cc-by-nd', 'cc-by-nc-nd'])
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function get(url, type = 'json') {
  for (let attempt = 0; attempt < 3; attempt++) {
    const res = await fetch(url, { headers: UA })
    if (res.status === 429) { await sleep(5000); continue }
    if (!res.ok) throw new Error(`${res.status} ${url}`)
    return type === 'json' ? res.json() : res.text()
  }
  throw new Error(`rate limited: ${url}`)
}

const stripHtml = (s = '') => s.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()

// ---- Wikimedia -----------------------------------------------------------------------------------

async function commonsInfo(titles) {
  const url = 'https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url|size|extmetadata&iiurlwidth=800&titles='
    + encodeURIComponent(titles.join('|'))
  const pages = Object.values((await get(url)).query?.pages ?? {})
  return pages.filter((p) => p.imageinfo).map(commonsPhoto)
}

function commonsPhoto(p) {
  const ii = p.imageinfo[0]
  const m = ii.extmetadata ?? {}
  return {
    title: p.title, width: ii.width, height: ii.height,
    photo: {
      url: ii.thumburl ?? ii.url,
      large: ii.url,
      author: stripHtml(m.Artist?.value) || 'Unknown author',
      license: m.LicenseShortName?.value ?? 'see source',
      source: ii.descriptionurl,
      from: 'commons',
    },
  }
}

const isFree = (license) => /^(cc|public domain|pd|cc0)/i.test(license)

/** Landscape photos from a Commons search, in search-rank order. */
async function commonsSearch(query, n = 4) {
  const url = 'https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=25&prop=imageinfo&iiprop=url|size|extmetadata&iiurlwidth=800&gsrsearch='
    + encodeURIComponent(query)
  const pages = Object.values((await get(url)).query?.pages ?? {})
  return pages
    .filter((p) => p.imageinfo && /\.jpe?g$/i.test(p.title))
    .sort((a, b) => a.index - b.index)
    .map(commonsPhoto)
    .filter((x) => x.width > x.height * 1.2 && x.width >= 1200 && isFree(x.photo.license))
    .slice(0, n)
    .map((x) => x.photo)
}

async function wikipediaLead(article) {
  const s = await get(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(article.replace(/ /g, '_'))}`)
  const src = s.originalimage?.source
  if (!src) return null
  const file = decodeURIComponent(src.split('?')[0].split('/').pop())
  const [info] = await commonsInfo([`File:${file}`])
  if (!info || !isFree(info.photo.license)) return null
  return { ...info.photo, from: 'wikipedia' }
}

async function commonsCategory(category, n = 2) {
  const list = await get(`https://commons.wikimedia.org/w/api.php?action=query&format=json&list=categorymembers&cmtype=file&cmlimit=60&cmtitle=${encodeURIComponent(`Category:${category}`)}`)
  const files = (list.query?.categorymembers ?? []).map((m) => m.title).filter((t) => /\.jpe?g$/i.test(t))
  if (!files.length) return []
  const infos = []
  for (let i = 0; i < files.length; i += 20) infos.push(...(await commonsInfo(files.slice(i, i + 20))))
  // Landscape-format, free, reasonably large photos, largest first.
  return infos
    .filter((x) => x.width > x.height * 1.2 && x.width >= 1200 && isFree(x.photo.license))
    .sort((a, b) => b.width * b.height - a.width * a.height)
    .slice(0, n)
    .map((x) => x.photo)
}

// ---- iNaturalist -------------------------------------------------------------------------------

async function inaturalist(name, n = 5) {
  const search = await get(`https://api.inaturalist.org/v1/taxa?q=${encodeURIComponent(name)}&per_page=10`)
  const taxon = search.results.find((t) => t.name.toLowerCase() === name.toLowerCase()) ?? search.results[0]
  if (!taxon) return []
  await sleep(1100)
  const full = (await get(`https://api.inaturalist.org/v1/taxa/${taxon.id}`)).results[0]
  await sleep(1100)
  return (full.taxon_photos ?? [])
    .map((tp) => tp.photo)
    .filter((p) => OPEN_LICENSES.has(p.license_code))
    .slice(0, n)
    .map((p) => ({
      url: p.medium_url,
      large: p.medium_url.replace('/medium.', '/large.'),
      author: p.attribution,
      license: p.license_code.toUpperCase().replace(/^CC-/, 'CC ').replace(/-/g, '-'),
      source: `https://www.inaturalist.org/photos/${p.id}`,
      from: 'inaturalist',
    }))
}

// ---- GBIF and production -------------------------------------------------------------------------

async function gbifRecorded(name) {
  const m = await get(`https://api.gbif.org/v1/species/match?name=${encodeURIComponent(name)}`)
  if (!m.usageKey || m.matchType === 'NONE') return undefined
  const r = await get(`https://api.gbif.org/v1/occurrence/search?taxonKey=${m.usageKey}&basisOfRecord=HUMAN_OBSERVATION&limit=0&facet=country&facetLimit=300`)
  return Object.fromEntries((r.facets?.[0]?.counts ?? []).map((c) => [c.name, c.count]))
}

let iso3to2
async function isoTable() {
  if (iso3to2) return iso3to2
  const ne = await get('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson')
  iso3to2 = Object.fromEntries(ne.features.map((f) => [f.properties.ISO_A3_EH, f.properties.ISO_A2_EH]).filter(([a, b]) => a !== '-99' && b !== '-99'))
  return iso3to2
}

async function owidProduction(slug) {
  const csv = await get(`https://ourworldindata.org/grapher/${slug}.csv`, 'text')
  const table = await isoTable()
  const rows = csv.trim().split('\n').slice(1).map((line) => {
    const cells = line.match(/("([^"]|"")*"|[^,]*)(,|$)/g).map((c) => c.replace(/,$/, '').replace(/^"|"$/g, ''))
    return { code: cells[1], year: Number(cells[2]), value: Number(cells[3]) }
  })
  const year = Math.max(...rows.filter((r) => table[r.code]).map((r) => r.year))
  const values = Object.fromEntries(rows.filter((r) => r.year === year && table[r.code] && r.value > 0).map((r) => [table[r.code], r.value]))
  return { year, values }
}

// ---- Main ----------------------------------------------------------------------------------------

async function main() {
  const picks = JSON.parse(await readFile(PICKS, 'utf8').catch(() => '{}'))
  const out = {}
  for (const plant of [...trees, ...crops]) {
    const photos = []
    const lead = await wikipediaLead(plant.wikipedia).catch((e) => console.warn(`\n${plant.id} wikipedia: ${e.message}`))
    if (lead) photos.push(lead)
    if (plant.commonsCategory) photos.push(...(await commonsCategory(plant.commonsCategory).catch(() => [])))
    photos.push(...(await inaturalist(plant.scientific).catch((e) => (console.warn(`\n${plant.id} inat: ${e.message}`), []))))
    if (plant.photoSearch) photos.push(...(await commonsSearch(plant.photoSearch).catch(() => [])))
    const unique = photos.filter((p, i) => photos.findIndex((q) => q.source === p.source) === i)
    const chosen = picks[plant.id]
    const entry = { photos: chosen ? chosen.map((src) => unique.find((p) => p.source === src)).filter(Boolean) : unique }
    if (chosen && entry.photos.length < chosen.length) console.warn(`\n${plant.id}: ${chosen.length - entry.photos.length} picked photo(s) no longer available`)
    if (plant.section === 'tree') entry.recorded = await gbifRecorded(plant.scientific).catch(() => undefined)
    if (plant.production && 'owid' in plant.production) entry.production = await owidProduction(plant.production.owid)
    out[plant.id] = entry
    process.stdout.write(`${plant.id}(${entry.photos.length}) `)
  }
  await writeFile(OUT, JSON.stringify(out, null, 1) + '\n')
  console.log('\ndone')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
