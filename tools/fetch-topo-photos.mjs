// Downloads credits for the hand-picked mountain and river photos.
// Run with: npm run fetch-topo-photos   Output (committed): src/content/generated/topo-photos.json
//
// tools/topo-photos.json lists Wikimedia Commons file names per feature id, best first. Features
// without their own photos show the linked plant's photos or nothing (poles and signs are hard to
// find on Commons; the PlonkIt guide has pictures of those).

import { readFile, writeFile } from 'node:fs/promises'

const PICKS = new URL('./topo-photos.json', import.meta.url)
const OUT = new URL('../src/content/generated/topo-photos.json', import.meta.url)
const UA = { 'User-Agent': 'geoguessr-study/0.1 (personal study app; https://github.com/oalnaji/geoguessr-study)' }
const stripHtml = (s = '') => s.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()

async function commonsPhotos(files) {
  const out = {}
  for (let i = 0; i < files.length; i += 40) {
    const url = 'https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=900&titles='
      + encodeURIComponent(files.slice(i, i + 40).map((f) => `File:${f}`).join('|'))
    const res = await (await fetch(url, { headers: UA })).json()
    const normalized = new Map((res.query.normalized ?? []).map((n) => [n.to, n.from]))
    for (const p of Object.values(res.query.pages ?? {})) {
      if (!p.imageinfo) continue
      const ii = p.imageinfo[0]
      const m = ii.extmetadata ?? {}
      out[(normalized.get(p.title) ?? p.title).replace(/^File:/, '')] = {
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

const picks = JSON.parse(await readFile(PICKS, 'utf8'))
const photos = await commonsPhotos([...new Set(Object.values(picks).flat())])
const out = {}
for (const [id, files] of Object.entries(picks)) {
  out[id] = files.map((f) => photos[f]).filter(Boolean)
  if (out[id].length < files.length) console.warn(`${id}: ${files.length - out[id].length} photo(s) not found`)
}
await writeFile(OUT, JSON.stringify(out, null, 1) + '\n')
console.log(`${Object.keys(out).length} landforms with photos`)
