// Downloads facts and a photo for every state/province in the Regions module.
// Run with: npm run fetch-regions   Output (committed): src/content/generated/regions.json
//
// Region codes come from the vegetation map (ISO 3166-2), so the data always matches the map.
//   - Wikidata (by ISO 3166-2 code, P300): capital, population, area, English Wikipedia article
//   - Wikimedia Commons photos with author and licence: the hand-picked list in tools/region-photos.json
//     (Commons file names, best first; mostly road-level views), else the photo Wikidata lists (P18).

import { readFile, writeFile } from 'node:fs/promises'

const MAP = new URL('../src/content/generated/map-veg.topo.json', import.meta.url)
const OUT = new URL('../src/content/generated/regions.json', import.meta.url)
const OVERRIDES = new URL('./region-photos.json', import.meta.url)
const COUNTRIES = ['BR', 'MX', 'US', 'CA', 'AU', 'ID', 'RU', 'AR', 'VN', 'PH']
const UA = { 'User-Agent': 'geoguessr-study/0.1 (personal study app; https://github.com/oalnaji/geoguessr-study)' }
// Regions whose ISO code is missing on Wikidata: looked up by English Wikipedia article instead.
const BY_ARTICLE = { 'PH-14': 'Bangsamoro' }
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function get(url) {
  for (let attempt = 0; attempt < 4; attempt++) {
    const res = await fetch(url, { headers: { ...UA, Accept: 'application/sparql-results+json' } })
    if (res.status === 429 || res.status >= 500) { await sleep(5000); continue }
    if (!res.ok) throw new Error(`${res.status} ${url}`)
    return res.json()
  }
  throw new Error(`gave up: ${url}`)
}

const stripHtml = (s = '') => s.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()

async function wikidata(codes) {
  const query = `
    SELECT ?code ?item ?dissolved ?pop ?area ?capitalLabel ?image ?article WHERE {
      {
        VALUES ?code { ${codes.map((c) => `"${c}"`).join(' ')} }
        ?item wdt:P300 ?code .
      } UNION {
        VALUES (?code ?title) { ${Object.entries(BY_ARTICLE).map(([c, t]) => `("${c}" "${t}"@en)`).join(' ')} }
        ?page schema:about ?item ; schema:isPartOf <https://en.wikipedia.org/> ; schema:name ?title .
      }
      OPTIONAL { ?item wdt:P576 ?dissolved }
      OPTIONAL { ?item p:P1082 ?ps . ?ps ps:P1082 ?pop ; a wikibase:BestRank . }
      OPTIONAL { ?item p:P2046/psn:P2046/wikibase:quantityAmount ?area . }
      OPTIONAL { ?item p:P36 ?cs . ?cs ps:P36 ?capital ; a wikibase:BestRank . FILTER NOT EXISTS { ?cs pq:P582 ?ended } }
      OPTIONAL { ?item wdt:P18 ?image . }
      OPTIONAL { ?article schema:about ?item ; schema:isPartOf <https://en.wikipedia.org/> . }
      SERVICE wikibase:label { bd:serviceParam wikibase:language "en" . }
    }`
  const res = await get('https://query.wikidata.org/sparql?format=json&query=' + encodeURIComponent(query))
  const out = {}
  // Vietnam's provinces merged in 2025 are "dissolved" in Wikidata but still exist in the imagery. Where a
  // code has both a current and a dissolved item (e.g. a historical predecessor), use the current one.
  const current = new Set(res.results.bindings.filter((b) => !b.dissolved).map((b) => b.code.value))
  for (const b of res.results.bindings) {
    const code = b.code.value
    if (b.dissolved && current.has(code)) continue
    const r = (out[code] ??= { capitals: new Set() })
    if (b.pop) r.population = Math.max(r.population ?? 0, Number(b.pop.value))
    if (b.area) r.areaKm2 = Math.max(r.areaKm2 ?? 0, Math.round(Number(b.area.value) / 1e6))
    if (b.capitalLabel) r.capitals.add(b.capitalLabel.value)
    if (b.image && !r.image) r.image = decodeURIComponent(b.image.value.split('/').pop()).replace(/_/g, ' ')
    if (b.article) r.wikipedia = b.article.value
  }
  return out
}

async function commonsPhotos(files) {
  const out = {}
  for (let i = 0; i < files.length; i += 40) {
    const titles = files.slice(i, i + 40).map((f) => `File:${f}`)
    const url = 'https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=900&titles='
      + encodeURIComponent(titles.join('|'))
    const res = await get(url)
    const normalized = new Map((res.query.normalized ?? []).map((n) => [n.to, n.from]))
    for (const p of Object.values(res.query.pages ?? {})) {
      if (!p.imageinfo) continue
      const ii = p.imageinfo[0]
      const m = ii.extmetadata ?? {}
      const title = (normalized.get(p.title) ?? p.title).replace(/^File:/, '')
      out[title] = {
        url: (ii.thumburl ?? ii.url).split('?')[0],
        large: ii.url,
        author: stripHtml(m.Artist?.value) || 'Unknown author',
        license: m.LicenseShortName?.value ?? 'see source',
        source: ii.descriptionurl,
        from: 'commons',
      }
    }
  }
  return out
}

async function main() {
  const topo = JSON.parse(await readFile(MAP, 'utf8'))
  const features = Object.values(topo.objects)[0].geometries.map((g) => g.properties)
  const codes = features.filter((f) => COUNTRIES.includes(f.country) && f.id !== f.country).map((f) => f.id)
  const overrides = JSON.parse(await readFile(OVERRIDES, 'utf8').catch(() => '{}'))

  const facts = {}
  for (let i = 0; i < codes.length; i += 100) Object.assign(facts, await wikidata(codes.slice(i, i + 100)))

  const filesOf = (c) => overrides[c] ?? (facts[c]?.image ? [facts[c].image] : [])
  const photos = await commonsPhotos([...new Set(codes.flatMap(filesOf))])

  const regions = {}
  for (const code of codes) {
    const f = facts[code]
    if (!f) { console.warn(`no Wikidata item for ${code}`); continue }
    const files = filesOf(code)
    regions[code] = {
      capital: [...f.capitals].join(' / ') || undefined,
      population: f.population,
      areaKm2: f.areaKm2,
      wikipedia: f.wikipedia,
      photos: files.map((file) => photos[file]).filter(Boolean),
    }
    for (const file of files) if (!photos[file]) console.warn(`${code}: photo ${file} not found on Commons`)
  }
  await writeFile(OUT, JSON.stringify(regions, null, 1) + '\n')
  const missing = (k) => codes.filter((c) => !regions[c]?.[k])
  console.log(`${Object.keys(regions).length}/${codes.length} regions; no capital: ${missing('capital')}; no population: ${missing('population')}; no photo: ${codes.filter((c) => !regions[c]?.photos.length)}`)
}

await main()
