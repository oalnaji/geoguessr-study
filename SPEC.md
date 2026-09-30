# GeoGuessr Study App — Spec

> Living document. Update it as decisions are made. Last updated: 2026-09-25.

## 1. Goal

A free (or near-free) personal study website for learning GeoGuessr "metas". It must work well on both **phone and laptop**. The first and main module is **Languages & Scripts**. The app must be built so other modules (see §12) can be added later without restructuring.

**Current build focus: Languages only.** Everything in §12 is planned but not being built yet.

### Core principle: explain *why*
The app isn't just a list of clues to memorise. Wherever possible, each clue comes with the **history and science behind it**: why a road is built the way it is, why a crop grows where it does, why a language ended up in a particular region. Every content item has an optional **"Why?"** section, and the app treats it as first-class content, not a footnote.

## 2. Non-goals (for now)

- Multiplayer, social features, leaderboards
- User accounts / login (see §7.3 for optional sync later)
- Street View imagery or map embeds
- Meta modules other than Languages (the structure should allow for them, but they won't be built yet)

## 3. Platform & hosting

| Concern | Decision |
|---|---|
| App type | Static single-page web app, installable as a **PWA** (home-screen icon on phone, works offline) |
| Hosting | **GitHub Pages** (decided: a GitHub account is available). Free, HTTPS, custom domain optional. Deployed by a GitHub Actions workflow on every push |
| Backend | None. All content ships as static data files |
| Progress storage | Browser `localStorage`/IndexedDB, plus **export/import progress as JSON** so it can be moved between phone and laptop |
| Cost target | $0/month (a custom domain is optional, about $10/yr) |

### Stack (decided: React)
- **Vite + React + TypeScript**: fast, simple, deploys as static files. Chosen over plain HTML/JS because the app is data-driven: hundreds of pages are generated from the same templates, and flashcards, quizzes, maps and progress all share state. Doing that by hand in plain HTML/JS would get hard to maintain quickly.
- **Tailwind CSS** for responsive, mobile-first styling
- **vite-plugin-pwa** for offline support and installability
- **Noto fonts** (Google Fonts), loaded per script as needed, so every script renders correctly on every device

## 4. Information architecture

```
Home
├── Languages            ← Module 1 (build now)
│   ├── Scripts          (all writing systems, e.g. Latin, Cyrillic, Thai, Ge'ez…)
│   ├── Language Groups  (clusters of look-alike languages + how to tell them apart)
│   ├── Language pages   (one per language)
│   ├── Flashcards       (spaced repetition)
│   └── Quizzes
├── [Future] World Maps       (topography, climate/weather; §12.1)
├── [Future] Landscapes       (what regions within countries look like; §12.2)
├── [Future] Places & History (historically significant places; §12.3)
├── [Future] Why Is It Like This? (infrastructure explainers; §12.4)
├── [Next] Vegetation & Crops (§12.5)
├── [Future] Infrastructure metas (bollards, plates, road lines, poles, signs)
├── [Future] Country quick-ID sheets
└── Progress / Settings  (stats, export/import, reset)
```

## 5. Languages module: content scope

### 5.1 Scripts to cover (all major world scripts, not only GeoGuessr ones)

| Script | Example languages |
|---|---|
| Latin | Most of Europe, the Americas, Africa, SE Asia (the differences are in the **diacritics and letter combinations**) |
| Cyrillic | Russian, Ukrainian, Belarusian, Bulgarian, Serbian, Macedonian, Kazakh, Kyrgyz, Mongolian |
| Greek | Greek |
| Armenian | Armenian |
| Georgian | Georgian |
| Hebrew | Hebrew, Yiddish |
| Arabic | Arabic, Persian, Urdu, Pashto, Kurdish (Sorani), Uyghur |
| Thaana | Dhivehi (Maldives) |
| Ge'ez / Ethiopic | Amharic, Tigrinya |
| Tifinagh | Berber/Amazigh (appears on Moroccan signs) |
| Devanagari | Hindi, Marathi, Nepali |
| Bengali–Assamese | Bengali, Assamese |
| Gurmukhi | Punjabi |
| Gujarati | Gujarati |
| Odia | Odia |
| Tamil | Tamil |
| Telugu | Telugu |
| Kannada | Kannada |
| Malayalam | Malayalam |
| Sinhala | Sinhala |
| Tibetan | Tibetan, Dzongkha (Bhutan) |
| Thai | Thai |
| Lao | Lao |
| Khmer | Khmer (Cambodia) |
| Myanmar | Burmese |
| Hangul | Korean |
| Kana + Kanji | Japanese |
| Han (Simplified / Traditional) | Mandarin, Cantonese (including how to tell Simplified from Traditional) |
| Mongolian (traditional) | Mongolian in Inner Mongolia |
| Others (stretch) | Cherokee, Inuktitut syllabics (Canada), Javanese, Balinese |

### 5.2 Latin-script languages (the hardest part in GeoGuessr)

Each language gets its **distinguishing letters, diacritics and letter combinations** (for example `ő ű` → Hungarian, `ř ů` → Czech, `ä ô ĺ ŕ` → Slovak, `ł ż ś` → Polish).

Target list (roughly 60+): English, French, Spanish, Portuguese, Catalan, Galician, Basque, Italian, Romanian, German, Dutch, Afrikaans, Luxembourgish, Danish, Norwegian, Swedish, Icelandic, Faroese, Finnish, Estonian, Latvian, Lithuanian, Polish, Czech, Slovak, Slovene, Croatian, Serbian (Latin), Bosnian, Montenegrin, Albanian, Hungarian, Maltese, Turkish, Azerbaijani, Uzbek, Turkmen, Irish, Welsh, Scottish Gaelic, Vietnamese, Indonesian, Malay, Filipino/Tagalog, Cebuano, Swahili, Zulu, Xhosa, Sotho, Tswana, Yoruba, Igbo, Hausa, Wolof, Malagasy, Kinyarwanda, Quechua, Guarani, Aymara, Māori, Hawaiian, Samoan, Tongan, Greenlandic, Sámi.

### 5.3 Language groups ("look-alikes")

Each group page includes:
- **Comparison table**: which letters/diacritics appear in which languages (✓/✗ grid)
- **Decision tree / "tell-tale" checklist**, e.g. "See `ő`? → Hungarian. See `ř`? → Czech."
- **Common sign words side by side** (street, road, exit, centre, stop, pharmacy…)
- **Same sentence** written in each language of the group
- **Traps**: things that look like a giveaway but aren't

Initial groups:
1. **Central Europe**: Czech, Slovak, Polish, Hungarian, Slovene *(Hungarian is not Slavic; the page explains why it still looks similar)*
2. **Ex-Yugoslav**: Croatian, Serbian (Latin/Cyrillic), Bosnian, Montenegrin, Slovene, Macedonian
3. **Baltic + Finnic**: Lithuanian, Latvian, Estonian, Finnish
4. **Nordic**: Danish, Norwegian, Swedish, Icelandic, Faroese
5. **Iberian**: Spanish, Portuguese, Catalan, Galician, Basque
6. **Other Romance**: French, Italian, Romanian
7. **Germanic (West)**: German, Dutch, Afrikaans, Luxembourgish
8. **Cyrillic languages**: Russian, Ukrainian, Belarusian, Bulgarian, Serbian, Macedonian, Kazakh, Kyrgyz, Mongolian
9. **Turkic Latin**: Turkish, Azerbaijani, Uzbek, Turkmen
10. **Celtic**: Irish, Welsh, Scottish Gaelic, Breton
11. **Maritime SE Asia**: Indonesian, Malay, Filipino, Cebuano
12. **Mainland SE Asia scripts**: Thai, Lao, Khmer, Burmese
13. **South Asian scripts**: the Indic scripts plus Sinhala
14. **Arabic-script languages**: Arabic, Persian, Urdu, Pashto, Uyghur
15. **East Asian**: Chinese (Simplified/Traditional), Japanese, Korean
16. **Southern African Bantu**: Zulu, Xhosa, Sotho, Tswana, Swahili
17. **West African**: Yoruba, Igbo, Hausa, Wolof
18. **Polynesian**: Māori, Hawaiian, Samoan, Tongan

### 5.4 Language page: sections

Each language page has:

1. **At a glance**: name (English + native), script, family, countries where it's spoken (with a "GeoGuessr coverage" badge)
1a. **Stats**: a panel of key numbers, each with its source and the year of the figure:
   - Native (L1) speakers
   - Total speakers (L1 + L2)
   - World rank by total speakers *(not built yet: needs a consistent worldwide source)*
   - Number of countries where it's official, and where it's a recognised regional/minority language
   - Largest speaker populations by country (top 5, with a small bar chart) *(not built yet: needs per-country data)*
   - Letters in the alphabet (and how many are unique to this language)
   - Year the current script/orthography was adopted
   - GeoGuessr coverage: how many covered countries use it on signs
1b. **Where it's spoken** (see §5.5): an interactive map plus a list of countries and **sub-national regions**, the language's status in each (official, co-official, regional, minority, diaspora), and whether it appears on signs there
2. **Alphabet / script chart**: every letter with pronunciation (IPA + an approximate English equivalent); the language's unique letters are highlighted
3. **How to spot it**: top 3–5 giveaways, and which languages it's most often confused with (linked to the group page)
4. **Common words on signs**: street, road, avenue, exit, entrance, town centre, school, church, pharmacy, shop, bakery, bank, police, hospital, stop, north/south/east/west, and so on
5. **Sample text**: one standard sentence (the same across all languages, for comparison) plus a realistic sign-style example
6. **History**: origins, how the script was adopted, notable reforms (e.g. Atatürk's 1928 switch of Turkish to Latin; Azerbaijani changing script three times in the 20th century)
6b. **Language & place**: the historical events and places that explain *why* the language is spoken where it is today, e.g. migrations, trade routes, colonisation, border changes, ports and bays used by traders or settlers. Each entry is pinned to a map location. Examples of the kind of question it answers: why is Portuguese spoken in Brazil? Why is there Swedish on Finnish signs? Why do Hungarian speakers live in Romania? Why is Afrikaans close to Dutch?
7. **Connections**: language family tree position, closest relatives, notable loanwords, mutual intelligibility with neighbours
8. **Interesting facts**: fun or odd trivia
9. **Sources / further reading**

### 5.5 Regions & areas where languages are spoken

Geography matters because seeing a language is only useful if you know **where** it narrows you down to. Coverage is at three levels:

1. **Countries**: where the language is official or widely spoken
2. **Sub-national regions**: provinces, states and areas where a language is regional, co-official, or a large minority. These are often **strong GeoGuessr clues**. Examples:
   - Catalan → Catalonia, Valencia, Balearic Islands (Spain), Andorra, Roussillon (France), Alghero (Sardinia)
   - Basque → Basque Country and Navarre (Spain), French Basque Country
   - Galician → Galicia (Spain)
   - Hungarian → Hungary, plus southern Slovakia, Transylvania (Romania), Vojvodina (Serbia)
   - Swedish → Sweden, plus Åland and the western/southern coast of Finland (bilingual signs)
   - German → also South Tyrol (Italy), East Belgium, Alsace (historical)
   - French → also Quebec and New Brunswick (Canada), Wallonia (Belgium), western Switzerland, Aosta Valley (Italy)
   - Italian → also Ticino (Switzerland)
   - Welsh → Wales; Irish → Gaeltacht areas; Scottish Gaelic → Highlands and Islands; Breton → Brittany
   - Sámi → northern Norway, Sweden, Finland
   - Russian → also eastern Ukraine, Belarus, Kazakhstan, Kyrgyzstan, Baltic minorities
   - Tamil → Tamil Nadu (India), northern and eastern Sri Lanka, Singapore, Malaysia
   - Bengali → Bangladesh, West Bengal, Tripura; Assamese → Assam
   - Each Indian script → the state(s) where it is used (Telugu → Andhra Pradesh/Telangana, Kannada → Karnataka, etc.)
   - Tifinagh → Morocco (on official signs), parts of Algeria
   - Tibetan → Tibet, parts of Nepal, Ladakh and Sikkim (India), Bhutan (Dzongkha)
   - Traditional Chinese → Taiwan, Hong Kong, Macau; Simplified → mainland China, Singapore, Malaysia
   - Māori → New Zealand (bilingual signs); Hawaiian → Hawaii; Greenlandic → Greenland
   - Quechua/Aymara → Andean regions of Peru and Bolivia; Guarani → Paraguay
3. **Bilingual signage zones**: places where signs show two languages or scripts. The combination itself is a clue (e.g. Irish + English, Finnish + Swedish, Thai + English, Serbian Cyrillic + Latin, Hebrew + Arabic + English).

For each region the data records:
- the language's **status** (official / co-official / regional / minority / diaspora)
- **signage likelihood** (commonly on signs / sometimes / rarely)
- **GeoGuessr coverage** (yes / partial / none)
- a short note (e.g. "bilingual street signs, Swedish listed second in most municipalities")

#### Maps
- Every language page and group page shows an **interactive map** highlighting countries and regions, shaded by status
- **Script map**: a world map coloured by writing system
- **Group maps**: all languages of a group on one map in different colours (e.g. Central Europe, showing Hungarian minority areas outside Hungary)
- Implementation: free, open boundary data (Natural Earth for countries and first-level regions), rendered with Leaflet or d3-geo and bundled with the app so the maps work offline. No paid map API.

## 6. Learning features

### 6.1 Flashcards (spaced repetition)
- Card decks can be chosen **per script, per language, or per group**
- Card types:
  - **Character → sound** (`ж` → "zh")
  - **Sound → character** (choose the right glyph)
  - **Text → language** (a word or sign snippet; the user names the language)
  - **Diacritic → language(s)** (`ő` → Hungarian)
- Scheduling: SM-2-style spaced repetition (Again / Hard / Good / Easy)
- Daily review count shown on the home screen

### 6.2 Quizzes
- **Multiple choice** or **type the answer**
- Modes:
  - *Identify the script* ✅ (shows a random snippet of real text; the user picks the script **and** a place it is seen from searchable, scrollable lists; Indian scripts are answered at state level; Latin is excluded)
  - *Identify the language* ✅ (a sample from a chosen group, e.g. only Central European languages)
  - *Spot the giveaway* ✅ (tap the letter that proves which language it is)
  - *Sign words* ✅ (which language's word for "street" is this?)
  - *Where is it spoken?* ✅ (tap the country or region on a map). Only places where the language is **common on street signs** count. Countries are one piece, except countries with more than one official language on signs, which are split into regions (India by state, Spain, Belgium, Switzerland, Canada, Italy, Finland, Norway, UK, Iraq, Bosnia, Serbia, Romania, Slovakia, China, Cyprus). Built by `npm run build-map` from Natural Earth and geoBoundaries (CC BY 4.0).
  - *Region → language* ✅ (e.g. "Which language is on signs in Vojvodina besides Serbian?")
- Timed mode (optional) to mimic GeoGuessr pressure
- End-of-quiz summary showing mistakes, with links back to the relevant language/group pages

### 6.3 Memory aids (metaphors & mnemonics) ✅
Every item should come with a **memorable hook**, not only facts: a metaphor, a picture, a rhyme or a silly association that makes it stick. Hooks are short (one or two lines) and appear in an amber **"💡 Remember it"** box on the item's page, and again in quiz feedback after an answer.
- **Scripts**: shape metaphors, e.g. Devanagari "is washing hung on a line: every letter hangs from one long bar"; Georgian "looks like bubbles rising in a glass of mineral water"
- **Languages**: the one giveaway turned into a picture, e.g. Hungarian `ő` and `ű` are "letters that saw a ghost (double accent = double shock)"
- **Groups**: how to tell the look-alikes apart in one line
- **Plants**: shape and place, e.g. saguaro "the cartoon cactus with its arms up. Only Arizona and Sonora"; baobab "the upside-down tree"
- **Forests & biomes**: a picture of the landscape, e.g. birch forest "the white army of the north"; caatinga "white forest: grey and dead-looking in the dry season, green overnight after rain"
- Stored as data (`src/content/mnemonics.ts` for languages, scripts and groups; `src/content/vegetation/remember.ts` and the `remember` field for plants and forests). A test checks that every plant has one.
- Future modules follow the same rule: each explainer gets a hook.

### 6.4 Progress
- Mastery per script, language, and group (percentage of cards in "mature" state)
- Weakest items list ("you confuse Slovak and Czech 40% of the time"), backed by a confusion matrix
- Export/import progress as a JSON file

## 7. Technical design

### 7.1 Content as data
All content lives in versioned data files, separate from UI code, so adding a language or a meta means adding a file.

**As built:** hand-written content is TypeScript (`src/content/scripts/*.ts`, `src/content/languages/<group>.ts`) so the compiler and `content.test.ts` catch broken links between languages, groups, scripts and countries. Reference data is downloaded by `npm run fetch-content` (`tools/fetch-content.mjs`) into `src/content/generated/` and committed:
- `letters.json`: letter inventories from Unicode CLDR
- `udhr-languages.json`, `udhr-scripts.json`: Article 1 of the UDHR (the standard sample sentence) from the Unicode UDHR project
- `speakers.json`: speaker numbers from Wikidata (P1098), with year and source item

The Indic letter charts are generated from the shared Unicode layout of the Indic blocks rather than typed by hand.

Original sketch:

```
src/content/
  scripts/        latin.json, cyrillic.json, thai.json, …
  languages/      czech.json, slovak.json, …
  groups/         central-europe.json, …
  geo/            countries + first-level regions (Natural Earth, simplified TopoJSON)
  places/         historically significant locations (pinned to lat/lng), linked to languages
  metas/          (future) landscapes/, vegetation/, why/, bollards/, plates/, …
```

Sketch of a language entry:
```jsonc
{
  "id": "cs",
  "name": "Czech",
  "nativeName": "čeština",
  "script": "latin",
  "family": ["Indo-European", "Balto-Slavic", "Slavic", "West Slavic"],
  "countries": [{ "code": "CZ", "geoguessrCoverage": true }],
  "stats": {
    "l1Speakers":  { "value": 10700000, "year": 2021, "source": "https://…" },
    "totalSpeakers": { "value": 13000000, "year": 2021, "source": "https://…" },
    "speakersByCountry": [{ "country": "CZ", "value": 10500000, "year": 2021 }],
    "orthographyAdopted": 1406     // e.g. Hus's diacritic orthography
  },                                // rank, letter counts and country counts are computed from other fields
  "regions": [
    {
      "country": "CZ",
      "region": null,              // null = whole country; else ISO 3166-2 code, e.g. "SK-NI"
      "status": "official",        // official | co-official | regional | minority | diaspora
      "signage": "common",         // common | sometimes | rare
      "geoguessrCoverage": "yes",  // yes | partial | none
      "note": ""
    }
  ],
  "alphabet": [{ "char": "ř", "ipa": "r̝", "approx": "rolled r + zh", "unique": true }],
  "giveaways": ["ř", "ů", "ě"],
  "confusedWith": ["sk", "pl", "sl"],
  "groups": ["central-europe"],
  "signWords": { "street": "ulice", "exit": "výjezd" },
  "sampleSentence": "…",
  "history": "markdown…",
  "connections": "markdown…",
  "facts": ["…"],
  "sources": ["https://…"]
}
```

### 7.2 Meta module interface (for future modules)
Every module (Languages, Bollards, …) registers:
- a route and a nav entry
- its content collection
- a way to turn its content into flashcards/quiz questions

This lets the flashcard and quiz engines be reused by all modules.

### 7.3 Cross-device sync (Phase 4)
Start with manual export/import. Add automatic sync in Phase 4 using a **private GitHub Gist**:
- The user pastes a GitHub personal access token (gist scope only) into Settings once per device
- The app reads and writes a single `progress.json` in the gist on app open, after each study session, and on a manual "Sync now" button
- Merge rule: every card review and setting carries a timestamp, and the newest wins per item, so studying on both devices offline never loses reviews
- No server, no account system, $0

Estimated effort: about 1–2 days, most of it spent on the merge logic and testing it. To keep this cheap, the progress data format is designed for merging from Phase 1 (per-item timestamps, stable IDs), even though sync isn't built until Phase 4.

Alternative if more than one person ever uses it: Supabase free tier with login (more setup, about 3–5 days).

### 7.4 Content sourcing & accuracy
- Letter inventories: **Unicode CLDR exemplar characters** (authoritative per-language character sets)
- Reference: Wikipedia, Omniglot, and **PlonkIt** for GeoGuessr-specific tips
- **PlonkIt** (https://www.plonkit.net) is the main reference for region markers (poles, bollards, signs, road surfaces, architecture, shops). Guides are per country at `plonkit.net/<country>`. Rules for using it:
  - Paraphrase, never copy: write each marker in our own words, keep it short, and do not reuse PlonkIt's images.
  - Link back: every country page and every "Notable markers" section links to the full PlonkIt guide.
  - Say "common" rather than "only" unless the guide says a marker is exclusive, and prefer markers that are visible at Street View distance.
  - Re-check against PlonkIt when refreshing content, as guides are updated as coverage changes.
- Drafted content (history, facts) must be spot-checked; each language records its sources

## 8. Design requirements
- Mobile-first; comfortable one-handed use on a phone for flashcards
- Large, clear glyph rendering (scripts are the content)
- Dark mode
- Works offline after the first visit

## 9. Phased plan

| Phase | Scope |
|---|---|
| **0: Setup** ✅ | Repo, Vite/React/TS scaffold, PWA, deploy pipeline to free hosting |
| **1: MVP** | ✅ Scripts reference (all 29 scripts in §5.1). *Still to do:* flashcards (character ↔ sound) + progress saved locally |
| **2: Europe** | ✅ 43 European language pages and 9 groups. *Still to do:* "identify the language" quiz, country-level maps. Scope: all European language pages and groups (Central Europe first, then Ex-Yugoslav, Baltic + Finnic, Nordic, Iberian, Other Romance, West Germanic, Celtic), "identify the language" quiz, country-level maps |
| **3: Indian scripts** ✅ | Devanagari, Bengali–Assamese, Gurmukhi, Gujarati, Odia, Tamil, Telugu, Kannada, Malayalam, Sinhala, with state-level region maps |
| **4: Cyrillic** ✅ | Russian, Ukrainian, Belarusian, Bulgarian, Serbian, Macedonian, Kazakh, Kyrgyz, Mongolian |
| **5: Everything else** | ✅ All 112 languages in §5 with pages, groups (24) and word-finder vocabulary. *Still to do:* remaining quiz modes, map quizzes |
| **6: Polish** | Progress stats and confusion tracking, timed mode, export/import, Gist sync (§7.3) |
| **7: Vegetation** | ✅ 27 trees & plants, 8 more cacti & desert plants, 13 crops, 14 forests & biomes with latitude bands, 12 soil colours with a soil-colour map, 14 ferns & regional oddities; maps and quizzes down to state/province in 20 large countries; memory hooks everywhere (§6.3). *Still to do:* flashcards |
| **7b: Regions** | ✅ States and provinces of Brazil, Mexico, USA, Canada, Indonesia, Australia, Russia, Argentina, Vietnam and the Philippines (352 regions, §12.7) with PlonkIt-based notable markers, US highway shields and licence plates, three quizzes. *Still to do:* more countries (Chile, Colombia, Peru, China, India, South Africa, Spain, Turkey are already split on the map), flashcards |
| **8: Utility poles** | ✅ §12.8 |
| **8b: Mountains & Rivers** | ✅ 26 ranges and 30 rivers with history, facts, maps and quizzes (§12.1). *Still to do:* climate and elevation maps |
| **9+: Other modules** | Remaining modules from §12, in an order to be decided: Landscapes, Places & History, Why Is It Like This?, other infrastructure metas. All use the module interface and the shared map, flashcard and quiz engines |

## 10. Privacy
- If the site is hosted on GitHub Pages or Cloudflare Pages, the **website itself is public**: anyone with the URL can view it. It contains only study content, nothing personal.
- The GitHub repository is **public** (decided), so the code and content can be seen by anyone. It contains no personal data. Any sync token (§7.3) is stored only in the browser, never in the repo.
- Study progress stays in each device's browser and is never uploaded unless the optional sync in §7.3 is added.

## 11. Open questions
- [x] Stack: React (§3)
- [x] Hosting: GitHub Pages (§3)
- [x] Sync: export/import first, Gist sync in the Polish phase (§7.3)
- [x] Audio pronunciation: not for now
- [x] Priority after Central Europe: rest of Europe → Indian scripts → Cyrillic (§9)
- [x] Multiplayer, social features, leaderboards: out of scope (§2)
- [x] GitHub repo: public (§10)
- [x] Module after Languages: Vegetation, starting with trees (§12.5)
- [x] Images: link to freely licensed images online rather than bundling them (§12.6)

## 12. Future modules (planned; not being built yet)

All of these reuse the shared building blocks: map rendering, the "Why?" section, flashcards, quizzes and progress tracking. Content is stored as data files like the language content (§7.1).

### 12.1 World Maps: topography & climate
- **Topographic map**: elevation shading for the whole world, with major mountain ranges, plateaus, plains and river basins labelled
- **Climate map**: Köppen climate zones, plus layers for average temperature, rainfall, snow cover and seasonal patterns (monsoon, wet/dry seasons)
- Layers can be toggled and overlaid on the language/region maps (e.g. show where Norway's landscape changes along with its climate zones)
- Every zone has a "Why?" explanation: rain shadows, ocean currents, altitude, latitude, and so on
- Data: free open datasets (e.g. Natural Earth relief, WorldClim / Köppen–Geiger rasters), pre-rendered as image tiles so the app stays static and free to host

#### Mountain ranges ✅ built (Mountains & Rivers module)
A page for every major mountain range, in the same format as plant pages:
- **Where**: the range drawn on the map (and the countries and regions it crosses), with its highest peaks
- **How it looks from the road**: shape (jagged and snowy vs rounded and forested vs bare and layered), rock colour, snowline, vegetation by altitude, and look-alikes (e.g. Alps vs Rockies vs Southern Alps; Andes in Peru vs Patagonia; Appalachians vs Urals)
- **Why it looks like that**: how it formed (young fold mountains, old eroded ranges, volcanic arcs, block-fault ranges), glaciation, climate and rain shadows
- **History**: people, passes, borders and roads through it
- **GeoGuessr tips**: what seeing it tells you, famous recognisable views, and a memory hook
- Initial list: Alps, Pyrenees, Carpathians, Balkan ranges, Caucasus, Scandinavian mountains, Urals, Atlas, Andes, Rockies, Sierra Nevada, Cascades, Appalachians, Sierra Madre, Himalayas, Hindu Kush, Tian Shan, Altai, Zagros, Ethiopian Highlands, Drakensberg, Great Dividing Range, Southern Alps, Japanese Alps, Annamite Range
- Quizzes: "which range is this?" from a photo, and "find the range" on the map

#### Major rivers ✅ built
A page for every major river: its course on the map, the countries and regions it drains, what its valley and delta look like (floodplains, gorges, deltas, rice terraces, levees), why (climate, sediment, floods), history (trade, borders, dams, cities), and GeoGuessr tips (e.g. the flat, canal-cut Mekong Delta; the brown Amazon tributaries; the Nile's green strip in the desert). Initial list: Amazon, Paraná, São Francisco, Orinoco, Mississippi–Missouri, St Lawrence, Yukon, Rio Grande, Danube, Rhine, Volga, Dnieper, Nile, Congo, Niger, Zambezi, Ganges, Indus, Brahmaputra, Mekong, Yangtze, Yellow River, Red River, Irrawaddy, Ob, Yenisei, Lena, Amur, Murray–Darling.

**As built** (`/topography`): 26 ranges and 30 rivers (`src/content/topography/`), each with photos (hand-picked, `tools/topo-photos.json`, `npm run fetch-topo-photos`), key numbers, a map with the range or river drawn and zoomed to (Natural Earth 10m range polygons and river centre-lines, `npm run build-physical` → `physical.topo.json`, 43 KB), what it looks like from the road, how it formed / where the water comes from, **history**, **interesting facts**, GeoGuessr tips and a memory hook. The overview map is tappable. Quizzes: find the range or river on the map; name it from a photo. The climate and elevation maps (World Maps) remain to do.

### 12.2 Landscapes by region
- Dedicated pages for **regions within countries** and how they differ visually, e.g. northern vs southern Norway, the Brazilian Northeast vs the South, the Australian coast vs the Outback, the Russian west vs Siberia, and the US Great Plains vs Appalachia vs the Southwest
- For each region: terrain, soil colour, vegetation, typical sky and weather, building styles, and what the road surroundings look like
- **Side-by-side comparisons** of look-alike regions across different countries (e.g. parts of South Africa vs Eswatini vs Lesotho)
- "Why?" for each: geology, climate, land use and history
- Photos: linked from freely licensed sources, with attribution (see §12.6)

### 12.3 Places & History
- A map of historically significant places, each with a short story, e.g. a bay used as a trading port, a strait that shaped settlement, a colonial landing site, or a border drawn by a treaty
- Linked in both directions to languages (§5.4 "Language & place"), landscapes and regions
- Can be browsed on a map or as a timeline

### 12.4 Why Is It Like This? (infrastructure & culture explainers) ✅ built

**As built** (`/why`): 30 explainers in six groups (roads; pavements & kerbs; houses & roofs; water & utilities; signs & markers; landscape & layout), e.g. frost heave and frost lines, concrete vs asphalt vs chip seal, asphalt colour, cobbles, Portuguese pavement, painted kerbs, white tree trunks, rebar on roofs, water tanks, solar heaters, above-ground gas pipes, the Netherlands' missing poles, stop-sign words, the US mile grid. Each: what you see, why (engineering, climate, economics, history), a map of where it is typical, look-alikes, tips, a memory hook, and photos drawn only from matching Commons categories (`tools/why-photos.json`, `npm run fetch-why-photos`). Quiz: an observation with place names hidden, tap a country where it is typical.
A collection of explainers about **why** a country looks the way it does from the road, each with history and science. The answers must be researched and sourced, not assumed. Example questions:
- Why are so many roads in the Philippines made of concrete rather than asphalt?
- Why are mesh/see-through satellite dishes common in Brazil?
- Why are roads in the US and Canada so wide, and why are the grid layouts so regular?
- Why are some countries' bollards, poles, road lines or kerbs the way they are?
- Why do some countries drive on the left?
- Why do roofs, building materials or house colours differ between regions?

Each explainer has: the observation (what you see), the explanation (history, economics, climate, engineering), the countries or regions it applies to, and exceptions or look-alikes.

### 12.5 Vegetation & Crops ✅ trees, cacti, crops and forests built

#### Regional precision (as built)
Large countries are split into states and provinces on the vegetation map, so a plant is shown (and quizzed) **only where it actually grows**, not over the whole country. Split countries (`VEG_SPLIT`): Brazil, Mexico, USA, Canada, Argentina, Chile, Colombia, Peru, Australia, China, India, Russia, Indonesia, Malaysia, South Africa, Spain, Turkey.
- `npm run build-map` writes a second map, `map-veg.topo.json` (geoBoundaries ADM1, CC BY 4.0; Argentina from Natural Earth admin-1, because geoBoundaries merges Entre Ríos into Buenos Aires).
- `src/content/vegetation/regions.ts` lists the regions (ISO 3166-2 codes) where each plant is a useful clue. A bare country code means the whole country. Tests require regions for every split clue country.
- The light data layer uses GBIF observations **per state/province** (GADM level 1) where available, and national FAO production for crops.
- The *Where does it grow?* quiz is graded by region: coffee in Minas Gerais is right, in Rio Grande do Sul it is wrong.

#### Cacti & desert plants (as built)
Cacti are strong regional clues, so they have their own group: saguaro (Arizona/Sonora only), cardón (Baja California), organ pipe, candelabra cactus (central Mexico), mandacaru (Brazil's northeast, Caatinga), Andean cardón (Argentina/Bolivia/Chile highlands), candelabra euphorbia (Africa: the cactus look-alike that is not a cactus), agave, Joshua tree (Mojave), prickly pear. Each page gives the look-alikes to tell apart.

#### Forests & biomes (as built)
14 pages: taiga, birch forest, temperate broadleaf, Mediterranean woodland, tropical rainforest, Atlantic Forest, cerrado, caatinga, savanna, steppe, tundra, temperate rainforest, eucalyptus woodland, pampas. Each has a **latitude range** in words, **latitude bands** drawn as dashed lines on its map, the regions where it is found, why it grows there (climate, latitude, soil, fire), how it looks on Street View, and a memory hook.

#### Soil colours (as built)
Soil colour is one of the strongest region clues. 12 soil types, each with a colour swatch, **why it has that colour** (iron oxides → red/yellow; humus or basalt clay → black; leaching, quartz or lime → pale; no weathering → beige), where it shows, look-alikes and tips: red tropical soil (laterite/terra roxa), red desert sand, red clay of the US Southeast, red sandstone soils (red beds: Oklahoma, PEI, Devon), black earth (chernozem/prairie), black cotton soil (vertisol), terra rossa, pale limestone and chalk, podzol, white sand, volcanic soil, pale desert ground.
- Region lists as for plants, so each soil's map shows exactly which states/provinces have it.
- A **soil-colour map** (`/vegetation/soils`) paints every region in its typical soil colour (`soilMapOrder` decides overlaps; regions too mixed to call are left grey), plus a country-by-country summary of **how the colour changes between regions** (e.g. Brazil: red centre and south, white sand on the northeast coast, yellow Amazon).
- Region pages in the Regions module (§12.7) show the region's soil.

#### Ferns & regional oddities (as built)
Unusual plants that pin down a region: tree ferns, bracken, giant butterbur ("Hokkaido cabbage", Hokkaido and northern Tohoku only), cabbage tree (New Zealand), kudzu, roadside lupins (NZ South Island, Iceland, Patagonia, Norway), gorse, pampas grass (northern Spain's motorways), grass trees (Australia), Spanish moss, frailejón (Colombian páramo), heather moorland and Norfolk Island pine. Japan, New Zealand and Great Britain are now split into prefectures/regions/nations on the vegetation map for these.

#### Trees (built first)
Each tree (or tree group, where species look alike from the road) gets a page with:
1. **How to recognise it**: silhouette, bark, leaves, how it looks at Street View distance, and look-alikes that are easy to confuse with it
2. **Where it grows**: a range map (native range vs where it was planted/introduced), and the countries and regions where it's a useful GeoGuessr clue
3. **Why there: the science**: the climate it needs (temperature, frost tolerance, rainfall, dry season), latitude and altitude limits, soil, and adaptations (e.g. why baobabs store water, why conifers dominate the taiga, why eucalyptus survives fire)
4. **Why there: the history**: how people spread it, e.g. eucalyptus planted from Australia across Brazil, Portugal, Ethiopia and South Africa for timber and pulp; poplars lining French and Italian roads; plantation pines in Chile and New Zealand
5. **GeoGuessr tips**: what seeing it tells you, and what it doesn't
6. **Photos** (§12.6) and **sources**

Initial trees and groups: palms (coconut, oil palm, date palm, royal palm, and the palm species of Brazil by region), eucalyptus, pines and other conifers (Scots pine, Norway spruce, Monterey/radiata pine, larch), birch, poplar, cypress and Italian cypress, olive, acacias, baobab, jacaranda, mango, banana (a plant, not a tree, but seen everywhere), bamboo, cacti and succulents, mangroves.

Tree pages link to the climate map (§12.1) and to regions (§12.2), and share the "Why?" format.

#### Crops, plants and biomes (after trees)
- **Crops**: where each major crop grows and **why there** (climate, altitude, soil, rainfall, history of how it was introduced and traded). Initial list: sugarcane, coffee, rice, tea, cocoa, bananas, palm oil, maize, wheat, cotton, tobacco, grapes, olives, pineapple and rubber
- **Trees & plants**: identifying features and ranges, starting with **palms**, e.g. the different palm species found across Brazil and which regions each grows in, then extending to other species worldwide. Other groups to cover: eucalyptus, pines and conifers, baobabs, cacti and succulents, and bamboo
- **Biomes**: rainforest, savanna, cerrado, steppe, taiga, tundra, Mediterranean scrub and so on, and where they occur
- Maps of growing regions and species ranges, overlaid on the climate map (§12.1) to show the connection
- Flashcards: photo → species/crop, and crop → growing regions

#### Data sources
- **Species ranges**: GBIF (Global Biodiversity Information Facility) occurrence maps and POWO (Kew's Plants of the World Online) native/introduced ranges, both free
- **Climate needs**: WorldClim data and published botanical references
- **History**: Wikipedia plus the sources it cites; each page records its sources (as in §7.4)

### 12.7 Regions of large countries ✅ built
Where each state/province of a big GeoGuessr country is, and how to recognise it. Built for Brazil (27), Mexico (32), USA (51), Canada (13), Indonesia (34, grouped by island), Australia (8), Russia (83, grouped by federal district), Argentina (24), Vietnam (63, grouped into 8 regions) and the Philippines (17 regions, grouped into Luzon, Visayas and Mindanao).
- **Vietnam** uses the 63 provinces from before the July 2025 merger into 34, because that is what Street View imagery, addresses and plates show; each merged province says where it went. Plate codes are listed for every province.
- **Philippines** uses the 17 administrative regions (each lists its provinces, since province names appear on signs). The 2024 Negros Island Region is not on the map yet.
- **Notable markers** on every region page: poles, bollards, signs, road surfaces, architecture and regional shop chains that point to that region (e.g. Acre's concrete rubbish baskets, Oaxaca's three-line cobblestone pavement, Utah's square-over-rectangle bollards), paraphrased from PlonkIt with a link to the full guide (§7.4). Stored in `src/content/regions/markers.ts`.
- **Notable features tab** (every country): features tied to an area of the country (pole types, bollards, road surfaces, phone/plate codes, crops, soil, roofs, shops), each on a card with a small map of the country with its regions highlighted, a photo where one exists (hand-picked in `tools/feature-photos.json`, or the linked plant's photos), the regions it covers and a link to the plant page. Filter by category and "notable only". Content in `src/content/regions/features.ts` (15–40 per country, mostly paraphrased from PlonkIt). Region pages list the features found there; the **Where is this found?** quiz shows a feature and asks you to tap a region where it occurs (only features limited to part of the country are quizzed).
- **USA tabs**: *Highway shields* (every state's route marker, public-domain SVGs from Wikimedia Commons via Wikidata) and *Licence plates* (every state's standard plate as a drawn colour card, which states have no front plate), each with a "notable only" filter that highlights the ones recognisable at a glance. State pages show their own shield and plate.

- **Region page**: a map zoomed to the country with the region highlighted (small regions get a ring), road-level photos, capital, population, area and density (Wikidata), "what it looks like", GeoGuessr clues (phone area codes, plate codes, route shields, languages on signs, crops, architecture), a memory hook (§6.3), and links to the Vegetation plants that are a clue there.
- **Country page**: an intro, country-wide tips for telling regions apart, a map coloured by macro-region/island/federal district (tap a region to open it), and the regions listed by group.
- **Quizzes**: *Name the highlighted region* (pick from a list); *Find it on the map* (tap it; also whole islands, macro-regions and federal districts where those are official or well-known); *Which region is this?* (a photo plus clues with the name hidden; tap the map). Place names are hidden on the map until the answer is checked. Filter by country.
- **Data**: content in `src/content/regions/<country>.ts`; `npm run fetch-regions` (`tools/fetch-regions.mjs`) fetches Wikidata facts by ISO 3166-2 code and the credits of the photos listed in `tools/region-photos.json`. Photos were chosen by hand from Commons search results whose coordinates fall inside the region. The map is the vegetation map (§12.5), so region codes match everywhere.
- The hand-written clues need a spot-check (§7.4), especially number-plate and route-shield details.

### 12.8 Utility poles ✅ built
A module on the poles that carry power and phone lines, because pole type is one of the best country and region clues.
- **How they work**: what each part does: the pole itself (wood, concrete, steel), crossarms, insulators (pin, suspension, post), transformers, fuses and cut-outs, guy wires, streetlight arms, earth wires, and the difference between high-voltage, distribution and telecom lines
- **Why regions differ**: materials that are cheap locally (timber in North America and Scandinavia, concrete where wood rots or termites eat it, steel in South Australia's Stobie poles), climate (ice loads, typhoons, termites), voltage standards, colonial and national engineering standards, and the utility company that owns them
- **Pole atlas**: pole shapes by country and region (e.g. Russian square concrete, Brazilian "ladder" poles, Mexican octagonal, Argentine alternating insulators, Vietnamese holey poles, Indonesian even/uneven tops), with photos, a map and look-alikes
- **Markings**: pole IDs, stickers, paint bands and plates that pin down a region (e.g. California's three yellow stripes, Wisconsin's orange-and-white plates, Tasmania's green possum guards)
- Quizzes: "which country or region is this pole?" and "name the part"
- Sources: PlonkIt pole sections (§7.4), utility company engineering standards, Wikipedia. Links to the Regions module's "Notable markers".
- **As built** (revised): 47 cards. Rule: only poles that matter in GeoGuessr. One card per country for the pole it is known for (e.g. Hungary's holey poles, Mexico's octagonal poles), or one *trend* card covering a group of countries (wooden poles with cylinder transformers in North America; square concrete across the former USSR; capped wooden poles in the Nordics; UK and Ireland). Several cards only where the pole identifies the region: Japan, Vietnam and Indonesia.
- **Photos must be verifiably from the right country**: candidates come only from Commons files in that country's (or region's) "Utility poles in …" category tree, and every pick is re-checked against its categories and GPS (the first version had wrong photos, e.g. "Jordan" photos from New Orleans). 5 cards have no photo and point to PlonkIt.
- **How a pole works** includes "Going deeper" explainers: why North America has small pole transformers and Europe big hidden ones (120 V vs 230/400 V, history), why some countries bury their lines, counting wires, insulators and voltage, wood vs concrete vs steel, and why poles change at power-company borders.

### 12.9 Uncovered Countries ✅ built
Guides (`/uncovered`) to countries with little or no Street View: DR Congo, Central African Republic, North Africa (Morocco, Algeria, Libya, Egypt), Angola, Tanzania, Mozambique, Uzbekistan, Turkmenistan, Tajikistan, Armenia, Azerbaijan, Myanmar, Venezuela, and the Pacific islands (PNG, Fiji, Solomons, Vanuatu, Samoa, Tonga). Each: coverage status, a zoomed map, landscape, roads/buildings/infrastructure (driving side, scripts, plates), crops and economy, people and history, covered look-alikes, a memory hook, and photos from each country's Commons categories (`tools/uncovered-photos.json`, `npm run fetch-uncovered-photos`). Coverage changes: re-check against a current coverage map.

### 12.10 Geology ✅ built
`/geology`, with three tabs:
- **Rocks & soil chemistry:** the three rock families, the chemistry of soil colour (hematite and goethite, reduced gley, humus, lime and salt), and desert varnish. Links to the soil pages in Plants.
- **Landforms:** karst, mesas and tepuis, volcano shapes, granite domes and inselbergs, young vs old mountains, glacial landscapes, basalt, badlands, loess, rift valleys.
- **Mining:** copper, iron ore, gold, coal, lithium, cobalt, bauxite, diamonds, oil and gas, nickel, silver and tin, potash/phosphate/salt. Each has uses, top producers (largest first; the top 3 are dark on the map) and a mineral picker map on the overview.

Every topic has the science, what it looks like, where (with a map), history, facts, GeoGuessr tips and a memory hook. A "where is it found?" map quiz is included. Photos come from topic Commons categories and are checked by eye (`tools/geology-photos.json`, `npm run fetch-geology-photos`). Production rankings change year to year, so re-check against USGS Mineral Commodity Summaries.

### 12.6 Images (all modules)

**As built:** `npm run fetch-plants` (`tools/fetch-plants.mjs`) collects candidate photos (Wikipedia lead image via Commons, a Commons category or search, iNaturalist taxon photos with open licences). Photos were reviewed by hand; `tools/photo-picks.json` lists the chosen photos per plant, in order, best road-view photo first. Only URLs and credits are stored; the service worker caches viewed photos (`plant-photos`, 300 entries). Where it grows: GBIF human observations per country (trees) and FAO production via Our World in Data charts (crops); tea, cotton, pineapple, rubber and olive use a hand-written producer ranking.
The app **links to existing photos online** rather than generating or bundling them. Generated images would be inaccurate for identification, and bundling thousands of photos would bloat the app.

- **Main source: Wikimedia Commons.** It explicitly allows images to be loaded directly from its servers, has a huge plant and landscape collection, and every image has a clear free licence. The app stores only the file name and attribution, and requests a thumbnail at the right size (small on phones, larger on laptops).
- **Second source: iNaturalist** research-grade observations, which have verified species IDs. Only photos with a licence that allows reuse are used (CC0, CC BY or CC BY-NC; NC is fine because this is a non-commercial site).
- **Attribution** (author and licence) is shown under every photo, as the licences require.
- **Offline**: photos are cached after the first time they're viewed, so studied content still works without a connection. Photos not yet viewed need a connection.
- **Broken links**: a small check script (run manually or in GitHub Actions) reports any image link that stops working.
- Every image entry in the data looks like: `{ "source": "commons", "file": "Baobab_Morondava.jpg", "author": "…", "license": "CC BY-SA 4.0", "caption": "…" }`
