// Downloads reference data into src/content/generated/. Run with: npm run fetch-content
// The output is committed, so builds never need the network.
//
// Sources:
//   CLDR exemplar characters  – letter inventories per language (SPEC §7.4)
//   Unicode UDHR project      – Article 1 of the Universal Declaration of Human Rights, used as the
//                               standard sample sentence in every language and script
//   Wikidata (P1098)          – number of speakers, with year

import { mkdir, writeFile } from 'node:fs/promises'

const OUT = new URL('../src/content/generated/', import.meta.url)

// id → where to find it in each source. `wikidata` is the ISO 639-3 code (Wikidata P220).
const languages = {
  en: { cldr: 'en', udhr: 'eng', wikidata: 'eng' },
  fr: { cldr: 'fr', udhr: 'fra', wikidata: 'fra' },
  es: { cldr: 'es', udhr: 'spa', wikidata: 'spa' },
  pt: { cldr: 'pt', udhr: 'por_PT', wikidata: 'por' },
  ca: { cldr: 'ca', udhr: 'cat', wikidata: 'cat' },
  gl: { cldr: 'gl', udhr: 'glg', wikidata: 'glg' },
  eu: { cldr: 'eu', udhr: 'eus', wikidata: 'eus' },
  it: { cldr: 'it', udhr: 'ita', wikidata: 'ita' },
  ro: { cldr: 'ro', udhr: 'ron_2006', wikidata: 'ron' },
  de: { cldr: 'de', udhr: 'deu_1996', wikidata: 'deu' },
  nl: { cldr: 'nl', udhr: 'nld', wikidata: 'nld' },
  af: { cldr: 'af', udhr: 'afr', wikidata: 'afr' },
  lb: { cldr: 'lb', udhr: 'ltz', wikidata: 'ltz' },
  da: { cldr: 'da', udhr: 'dan', wikidata: 'dan' },
  no: { cldr: 'nb', udhr: 'nob', wikidata: 'nor' },
  sv: { cldr: 'sv', udhr: 'swe', wikidata: 'swe' },
  is: { cldr: 'is', udhr: 'isl', wikidata: 'isl' },
  fo: { cldr: 'fo', udhr: 'fao', wikidata: 'fao' },
  fi: { cldr: 'fi', udhr: 'fin', wikidata: 'fin' },
  et: { cldr: 'et', udhr: 'est', wikidata: 'est' },
  lv: { cldr: 'lv', udhr: 'lav', wikidata: 'lav' },
  lt: { cldr: 'lt', udhr: 'lit', wikidata: 'lit' },
  pl: { cldr: 'pl', udhr: 'pol', wikidata: 'pol' },
  cs: { cldr: 'cs', udhr: 'ces', wikidata: 'ces' },
  sk: { cldr: 'sk', udhr: 'slk', wikidata: 'slk' },
  sl: { cldr: 'sl', udhr: 'slv', wikidata: 'slv' },
  hr: { cldr: 'hr', udhr: 'hrv', wikidata: 'hrv' },
  sr: { cldr: 'sr-Latn', cldrCyrl: 'sr', udhr: 'srp_latn', udhrCyrl: 'srp_cyrl', wikidata: 'srp' },
  bs: { cldr: 'bs', udhr: 'bos_latn', wikidata: 'bos' },
  cnr: { cldr: 'sr-Latn', udhr: 'cnr', wikidata: 'cnr' },
  mk: { cldr: 'mk', udhr: 'mkd', wikidata: 'mkd' },
  sq: { cldr: 'sq', udhr: 'als', wikidata: 'sqi' },
  hu: { cldr: 'hu', udhr: 'hun', wikidata: 'hun' },
  mt: { cldr: 'mt', udhr: 'mlt', wikidata: 'mlt' },
  tr: { cldr: 'tr', udhr: 'tur', wikidata: 'tur' },
  ga: { cldr: 'ga', udhr: 'gle', wikidata: 'gle' },
  cy: { cldr: 'cy', udhr: 'cym', wikidata: 'cym' },
  gd: { cldr: 'gd', udhr: 'gla', wikidata: 'gla' },
  br: { cldr: 'br', udhr: 'bre', wikidata: 'bre' },
  se: { cldr: 'se', udhr: 'sme', wikidata: 'sme' },
  el: { cldr: 'el', udhr: 'ell_monotonic', wikidata: 'ell' },
}

// Sample text for script pages (UDHR file per script).
const scriptSamples = {
  latin: 'eng', cyrillic: 'rus', greek: 'ell_monotonic', armenian: 'hye', georgian: 'kat',
  hebrew: 'heb', arabic: 'arb', thaana: 'div', ethiopic: 'amh', tifinagh: 'tzm_tfng',
  devanagari: 'hin', bengali: 'ben', gurmukhi: 'pan', gujarati: 'guj', tamil: 'tam',
  telugu: 'tel', kannada: 'kan', malayalam: 'mal', sinhala: 'sin', tibetan: 'bod', thai: 'tha',
  lao: 'lao', khmer: 'khm', myanmar: 'mya', hangul: 'kor', japanese: 'jpn',
  'han-simplified': 'cmn_hans', 'han-traditional': 'cmn_hant', mongolian: 'khk_mong',
}

const UA = { 'User-Agent': 'geoguessr-study/0.1 (personal study app; https://github.com/oalnaji/geoguessr-study)' }

async function get(url, headers = {}) {
  const res = await fetch(url, { headers: { ...UA, ...headers } })
  if (!res.ok) throw new Error(`${res.status} ${url}`)
  return res.text()
}

// "[aá b {ch} c-e]" → ["a","á","b","ch","c","d","e"]
export function parseUnicodeSet(set) {
  const body = set.trim().replace(/^\[|\]$/g, '')
  const out = []
  const tokens = body.match(/\{[^}]+\}|\\.|[^\s]/gu) ?? []
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i]
    if (t === '-' && out.length && tokens[i + 1]) {
      const from = out.pop().codePointAt(0)
      const to = tokens[++i].replace(/^\\/, '').codePointAt(0)
      for (let c = from; c <= to; c++) out.push(String.fromCodePoint(c))
    } else if (t.startsWith('{')) out.push(t.slice(1, -1))
    else out.push(t.replace(/^\\/, ''))
  }
  return out
}

async function cldr(locale) {
  const url = `https://raw.githubusercontent.com/unicode-org/cldr-json/main/cldr-json/cldr-misc-full/main/${locale}/characters.json`
  const c = JSON.parse(await get(url)).main[locale].characters
  return { main: parseUnicodeSet(c.exemplarCharacters), auxiliary: parseUnicodeSet(c.auxiliary ?? '[]') }
}

async function udhrArticle1(key) {
  const xml = await get(`https://raw.githubusercontent.com/eric-muller/udhr/master/data/udhr/udhr_${key}.xml`)
  const art = xml.match(/<article number=["']1["']>([\s\S]*?)<\/article>/)
  if (!art) throw new Error(`no article 1 in ${key}`)
  const decode = (s) =>
    s
      .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
      .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
  const paras = [...art[1].matchAll(/<para>([\s\S]*?)<\/para>/g)].map((m) => decode(m[1].replace(/\s+/g, ' ').trim()))
  return {
    text: paras.join(' '),
    source: `https://github.com/eric-muller/udhr/blob/master/data/udhr/udhr_${key}.xml`,
  }
}

const FIRST_LANGUAGE = 'Q36870'
const SECOND_LANGUAGE = 'Q125421'

async function speakers() {
  const codes = Object.values(languages).map((l) => `"${l.wikidata}"`).join(' ')
  const query = `
    SELECT ?code ?item ?n ?time ?applies WHERE {
      VALUES ?code { ${codes} }
      ?item wdt:P220 ?code; p:P1098 ?st.
      ?st ps:P1098 ?n.
      FILTER NOT EXISTS { ?st wikibase:rank wikibase:DeprecatedRank }
      OPTIONAL { ?st pq:P585 ?time }
      OPTIONAL { ?st pq:P518 ?applies }
    }`
  const url = 'https://query.wikidata.org/sparql?format=json&query=' + encodeURIComponent(query)
  const rows = JSON.parse(await get(url, { Accept: 'application/sparql-results+json' })).results.bindings

  const byCode = {}
  for (const r of rows) {
    const code = r.code.value
    const applies = r.applies?.value.split('/').pop()
    const kind = applies === FIRST_LANGUAGE ? 'l1' : applies === SECOND_LANGUAGE ? 'l2' : applies ? null : 'unspecified'
    if (!kind) continue
    const entry = {
      value: Math.round(Number(r.n.value)),
      year: r.time ? Number(r.time.value.slice(0, 4)) : null,
      source: r.item.value,
    }
    const cur = byCode[code]?.[kind]
    // Keep the most recent figure of each kind.
    if (!cur || (entry.year ?? 0) > (cur.year ?? 0)) (byCode[code] ??= {})[kind] = entry
  }

  const out = {}
  for (const [id, l] of Object.entries(languages)) out[id] = byCode[l.wikidata] ?? {}
  return out
}

async function main() {
  await mkdir(OUT, { recursive: true })

  const letters = {}
  const samples = {}
  for (const [id, l] of Object.entries(languages)) {
    letters[id] = await cldr(l.cldr)
    if (l.cldrCyrl) letters[`${id}-cyrl`] = await cldr(l.cldrCyrl)
    samples[id] = await udhrArticle1(l.udhr)
    if (l.udhrCyrl) samples[`${id}-cyrl`] = await udhrArticle1(l.udhrCyrl)
    process.stdout.write(`${id} `)
  }
  const scriptText = {}
  for (const [id, key] of Object.entries(scriptSamples)) {
    try {
      scriptText[id] = await udhrArticle1(key)
    } catch (e) {
      console.warn(`\nskipping ${id}: ${e.message}`)
    }
  }

  const write = (name, data) => writeFile(new URL(name, OUT), JSON.stringify(data, null, 1) + '\n')
  await write('letters.json', letters)
  await write('udhr-languages.json', samples)
  await write('udhr-scripts.json', scriptText)
  await write('speakers.json', await speakers())
  console.log('\ndone')
}

if (import.meta.url === `file:///${process.argv[1].replace(/\\/g, '/')}` || process.argv[1].endsWith('fetch-content.mjs')) {
  main().catch((e) => {
    console.error(e)
    process.exit(1)
  })
}
