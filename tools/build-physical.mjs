// Builds the mountain-range and river shapes for the Mountains & Rivers module.
// Run with: npm run build-physical   Output (committed): src/content/generated/physical.topo.json
//
// Source: Natural Earth 1:10m (public domain): geography region polygons (ranges) and river/lake
// centre-lines. Each landform lists the Natural Earth feature names that make it up (`ne`); features
// with those names are merged per landform.

import { writeFile } from 'node:fs/promises'
import mapshaper from 'mapshaper'
import { mountains } from '../src/content/topography/mountains.ts'
import { rivers } from '../src/content/topography/rivers.ts'

const NE = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/'
const OUT = new URL('../src/content/generated/physical.topo.json', import.meta.url)

async function json(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'geoguessr-study map build' } })
  if (!res.ok) throw new Error(`${res.status} ${url}`)
  return res.json()
}

function pick(fc, list, nameOf, keep = () => true) {
  const byName = new Map()
  for (const l of list) for (const n of l.ne) byName.set(n, l.id)
  const out = []
  const found = new Set()
  for (const f of fc.features) {
    const id = byName.get(nameOf(f.properties))
    if (!id || !keep(f.properties)) continue
    found.add(nameOf(f.properties))
    out.push({ type: 'Feature', properties: { id }, geometry: f.geometry })
  }
  for (const l of list) for (const n of l.ne) if (!found.has(n)) console.warn(`${l.id}: "${n}" not found in Natural Earth`)
  return out
}

async function main() {
  const regions = await json(NE + 'ne_10m_geography_regions_polys.geojson')
  const lines = await json(NE + 'ne_10m_rivers_lake_centerlines.geojson')
  const ranges = pick(regions, mountains, (p) => p.NAME, (p) => /Range|mtn/i.test(p.FEATURECLA))
  const riverLines = pick(lines, rivers, (p) => p.name)
  const out = await mapshaper.applyCommands(
    [
      '-i ranges.json rivers.json combine-files',
      '-dissolve id target=ranges',
      '-dissolve id target=rivers',
      '-simplify 6% weighted keep-shapes',
      '-o out.json format=topojson target=* quantization=100000',
    ].join(' '),
    { 'ranges.json': { type: 'FeatureCollection', features: ranges }, 'rivers.json': { type: 'FeatureCollection', features: riverLines } },
  )
  const topo = out['out.json']
  await writeFile(OUT, topo)
  console.log(`physical.topo.json: ${ranges.length} range polygons, ${riverLines.length} river lines, ${(topo.length / 1024).toFixed(0)} KB`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
