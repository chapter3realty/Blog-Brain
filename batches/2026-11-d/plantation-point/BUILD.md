# BUILD: /submarkets/myrtle-beach/plantation-point/ (new community page, pilot)

Status 2026-11-13: built, all page gates pass except the two the lead closes (sitemap line, sibling links). Not committed, not deployed. Spec `specs/plantation-point.js` in the website working copy `scratchpad/wt-139`. Facts: only VERIFIED rows and CORRECTED rows at the verifier's values and wording (`VERIFY.md`). Struck wording list: `batches/2026-11-d/facts/submarkets-myrtle-beach-plantation-point-struck.json` (no hit on the page).

## Files (website working copy)

| File | What |
|---|---|
| `specs/plantation-point.js` | The spec. Every count, size, price, share and minute is read from the data folder and checked against its ledger row (`must(...)`). |
| `chapter3realty/submarkets/myrtle-beach/plantation-point/index.html` | Built by `node tools/mkpage.js specs/plantation-point.js`. |
| `data/2026-11-d/plantation-point/` | `findings.json`, `map-lots.json`, `drives.json`, `listings.json` replaced by the verifier's corrected run (VERIFY.md section A: The Landing 139 houses, pond parcel out). New: `map_layers.py` and `map-layers.json` (the map), `photos.json` (the aerial's licence record). README updated. |
| `chapter3realty/images/2026-11-d/plantation-point/` | The NAIP 2023 aerial (public domain): 600w, 1200w and the 1x1, 4x3, 16x9 share crops, metadata embedded (`tools/photos.js check` passes). |
| `chapter3realty/og/submarkets-myrtle-beach-plantation-point.jpg` | A text share card made by `tools/ogcard.js` before the aerial existed. The page now shares the aerial (pageImages), so this file is unused. The lead may delete it. |

Not done: the verifier asked that `pull_county.py` and `analyze.py` get the fixed section names and the two analyze fixes, then a re-run. The page uses the verifier's own corrected outputs instead (identical numbers); the README says the scripts still carry the first rules. Do this before the next refresh.

## Outline

Title (53): **Plantation Point Myrtle Beach Homes: Half Have a Pool**. H1: "Plantation Point homes in Myrtle Beach:" / *half-acre lots, and half the houses have a pool.* Description (158): "Plantation Point in Myrtle Beach: 352 houses on half-acre lots by the Intracoastal and Myrtlewood golf. What homes sold for, the HOA, flood zone, The Landing."

Wow factor: half the houses have an in-ground pool (176 of 352), against about 1 for every 16 residential buildings countywide; shown in a real aerial photo where the pools are plain to see.

0. Hero: four key facts (352 houses, 176 in-ground pools, 58 waterway lots, 88 golf lots), byline, sub line (review 1: its own hook, Myrtlewood's food, drink and patio by the waterway for people who do not play, row 12). Short answer in two paragraphs: where it is (between the US 17 Bypass and the Intracoastal Waterway, near 38th Avenue North, 2.7 miles from the nearest beach access; row 41), then price, HOA and The Landing. Slim offer "See every home for sale in Plantation Point". The edge feed goes here (lead).
1. **What is it like to live in Plantation Point?** (review 1: the sell first) The pools, 176 of 352, against about 1 for every 16 residential buildings countywide; the aerial photo; Myrtlewood's two courses and the Play Golf Myrtle Beach quote; the clubhouse, a 10-minute drive; then half-acre lots, about 3,900 sq ft under roof, built 1987 to 2021 this fall, most full-time homes (85 in 100). Drive chart (Broadway 7, Food Lion 8, beach 9, Coastal Grand 11, hospital 13, airport 15). A little history: Myrtle Beach Farms (1912, Burroughs & Chapin, recorded the restrictions from 1990), rice-plantation street names. SF 10 zoning moved to section 2.
2. **Which Plantation Point lots are on the waterway and the golf course?** Our map of all 506 lots (waterway blue, golf green, The Landing tan with its 47 course lots edged green). The two waterway sales ($1.17 million and $1.9 million), 14 empty lots and one $560,000 lot sale on the course, docks link. Offer: "Tell us: waterway, fairway or pool".
3. **What do homes in Plantation Point sell for?** 13 sales at about $785,000 ($375,000 to $1.9 million); 6 for sale on the count day ($750,000 to $2.1 million); tax about $2,900 a year as a primary residence, about $9,500 otherwise, plus a fee of about $90.
4. **Does Plantation Point have an HOA fee?** No home for sale lists a monthly fee; 3 of 6 listings say no HOA; the HOA's one small parcel; the recorded rules (index online, documents in Conway); renting. Offer: "Like a lot? Have us pull its restrictions".
5. **Is Plantation Point in the City of Myrtle Beach?** No: tax, trash, beach parking decal.
6. **Is Plantation Point in a flood zone?** No house in FEMA's high-risk zone, "the zone where a lender requires flood insurance" (review 1, the 2026-10-b verifier's wording); a two-item list: the strip touches the water edge of 35 lots and stops short of the houses; we check each house's flood history. Offer: "Like a waterway house? Have us check its flood history".
7. **The Landing at Plantation Point: the same location for less.** About $280,000, closer to the beach and Food Lion; the side-by-side table (review 1: short labels, no restrictions row, fits 320 px with no scroll): houses, lot, under roof, pools, golf lots, waterway lots, sold in the past year, beach by car; its own homes strip `landing-at-plantation-point`; pill "Book a showing in The Landing".
8. **Plantation Point FAQ** (5): golf course, Plantation Point Plaza, walk to the beach, renting, flood insurance. Sources line, photo credit, Place schema (geo point, Myrtle Beach, Horry County).
9. End band: "Book a showing in Plantation Point."

Our own links in the body (11): /submarkets/myrtle-beach/, /buyers/pool-homes/, /buyers/golf-communities/, /buyers/waterfront-homes/#docks, /buyers/coastal-insurance/, /buyers/property-taxes/, /sell/home-value/, /invest/str-rules/, /buyers/undisclosed-flooding/, plus the hub crumb.

## Gate results (final build)

| Gate | Result |
|---|---|
| `score.js` (SCORE_TODAY=2026-11-13) | **97/100** after review 1 (SEO 92, AEO 100, Human 99, Trust 100). Only FAIL: S8, no other page links here yet (lead, below). P2 at 76%: 4.3 numbers per 100 words against 3.5; kept, the numbers are the pool proof, the table and the reviewer's location line. |
| `claims-scan.js` | 0 findings sitewide. |
| `facts-check.js` | 0 on this page. The 4 sitewide wrong sentences are older pages (from-massachusetts, from-virginia, llms-full.txt), not this batch. |
| `house-claims.js` | 0 sentences to scope. |
| `struck-check.js` | No struck wording on this page (22 patterns). |
| `critic.mjs` 320, 390, 1440 (review 1) | **0 blocking, 0 warnings** at every width (the 320 px read.wall warnings on the hero and #flood are gone). The comparison table measured by hand: 254 px in a 270 px box at 320, no cell overflows. |
| `build.js check` | OK, no line for this page. |
| `build.js audit` | FAIL only "missing from sitemap.xml" and "orphan: no other page links to it" (both the lead's). Warnings: not in llms.txt (lead); "no boxed CTA in the middle" and "no attributed sentence from a named licensed person" (the same two warnings the model page /submarkets/myrtle-beach/market-common/ carries; the page has three boxed offers, and no quote is written for Tim Nash). |
| `image-meta.js` | Pass: the photo carries its metadata; Article.image has the 16x9 crop. |
| `photos.js check` | All photo records pass. |

Shots (looked at full size, every slice, as a stranger): `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/nd/plantation-point/shots/submarkets-myrtle-beach-plantation-point-390.png`, `-1024.png`, `-1440.png`; the map alone: `.../nd/plantation-point/map-390.png` and `map-1440.png`. What the look changed: the course parcel drew as one small piece (four outer rings read as holes), fixed in `map_layers.py`; the map frame was cut tighter; labels moved off the lots and the bypass; the drive list became one chart; the HOA section became a plain list under thin rules; the chart was held to the 720 px block. The preview's homes strips do not fill (sample photos), so The Landing shows its pill.

## For the lead (files this helper may not edit)

1. **sitemap.xml** (priority as the sibling community page /submarkets/myrtle-beach/market-common/):
   `<url><loc>https://chapter3realty.com/submarkets/myrtle-beach/plantation-point/</loc><lastmod>(build.js dates)</lastmod><changefreq>monthly</changefreq><priority>0.80</priority><image:image><image:loc>https://chapter3realty.com/images/2026-11-d/plantation-point/plantation-point-pools-from-above-1200w.webp</image:loc></image:image></url>`
2. **llms.txt** (after the Market Common line, under the Myrtle Beach submarkets):
   `- [Plantation Point Myrtle Beach Homes: Half Have a Pool](https://chapter3realty.com/submarkets/myrtle-beach/plantation-point/): 352 houses on half-acre lots by the Intracoastal Waterway and the Myrtlewood golf courses, outside the city limits; half have an in-ground pool; past-year sales, the HOA, the flood zone and The Landing at Plantation Point.`
3. **New IDX places** (`batches/2026-10-b/data/idx-places.json`):
   - `{ "slug": "plantation-point", "name": "Plantation Point", "pages": ["/submarkets/myrtle-beach/plantation-point/"], "q": { "subdivision": "Plantation Point", "status": "active" }, "index": false, "note": "The guide owns 'plantation point homes for sale'; the place page links to it." }` (6 for sale on 2026-11-13, all inside the county outline.)
   - `{ "slug": "landing-at-plantation-point", "name": "The Landing at Plantation Point", "pages": ["/submarkets/myrtle-beach/plantation-point/"], "q": { "subdivision": "The Landing", "near": "33.72713,-78.87644", "miles": 0.3, "status": "active" }, "index": false }` ("The Landing" alone matches other communities; the circle is the corrected middle of The Landing, VERIFY.md row 27.) Often 0 to 2 homes: under 3 the slot stays empty and the page's pill shows.
4. **Edge feed** for the page (idx-lib feeds): `{ head: "Half the houses have a pool: Plantation Point homes for sale", q: [{ subdivision: "Plantation Point", status: "active" }], post: { minPhotos: 6, yearMin: 1975 }, link: "subdivision=Plantation%20Point" }`. Do not title it "no HOA fee": the October no-HOA page cut Plantation Point for that exact claim (2026-10-b row 178), and the page says only that no home for sale lists a monthly fee.
5. **Sibling pages that should link here** (each on words already there where possible; `node tools/inbound.js` should show 6 or more):
   - `/submarkets/myrtle-beach/` (the hub), in its parts of the city: "Just outside the city limits, [Plantation Point] has half-acre lots on the Intracoastal Waterway and the Myrtlewood golf courses, and half its houses have a pool."
   - `/buyers/pool-homes/`, in "Where are the homes for sale with a pool in Myrtle Beach?": "In [Plantation Point], half the houses have an in-ground pool, against about 1 for every 16 residential buildings across the county."
   - `/buyers/golf-communities/`, in "What Myrtle Beach golf community buyers miss" or the FAQ: "Myrtlewood's two courses, PineHills and Palmetto, border 135 lots in [Plantation Point] and The Landing beside it."
   - `/buyers/waterfront-homes/`, in its Intracoastal entry: "In [Plantation Point], 58 lots are on the Intracoastal Waterway, and two of those houses sold in the past year for $1.17 million and $1.9 million."
   - `/buyers/no-hoa-homes/`, in the FAQ: "In [Plantation Point], no home for sale lists a monthly HOA fee, though an association owns one small common area there." (Keep it out of the 16-area list; it was cut for this reason.)
   - `/hoa/fees-by-neighborhood/` (built in parallel): its Plantation Point row ("no monthly fee listed") links here.
   - `/buyers/undisclosed-flooding/`, optional, where it shows that a zone is not the whole story: "In [Plantation Point], no house is in the high-risk zone, though the zone touches the water edge of 35 lots."
   - `/homes/near/plantation-point/` (the IDX place page, `index: false`): its strip links here.
   - `/buyers/best-neighborhoods/`: only if Plantation Point is added as an entry later.
6. **Owner question** (`templates/owner-questions.md`, only if no record answers it): does the Plantation Point HOA collect voluntary dues, and for what? Proposed answer: "The page says no home for sale lists a monthly fee and that we confirm the fee and pull the recorded restrictions for any lot." The page needs no change either way.
7. **Photo request** to the partner (the owner sends it; `templates/photo-request-email.md`): the entrance at 38th Avenue North; a Brookgreen Drive street with the half-acre lots; a Myrtlewood fairway seen from a public street; the Intracoastal from the nearest public spot; a Landing street; the Food Lion plaza. Places and houses only. The aerial stays as the pool proof when photos arrive.
8. **Re-check before release**: Myrtlewood's future (gap 5: no rezoning or sale found on 2026-11-13).

## How to win the biggest share of the community-name searches (this page, and the ~25 to follow)

The owner asked how to capture the most of these searches. What this pilot does, and what each community page should copy:

1. **One URL per community owns the name and "homes for sale".** C21 The Harrelson Group ranks first for "plantation point" (880 a month, every place of that name) and second for "plantation point homes for sale" with one page: a paragraph and listings. Ours has the live strip plus facts nobody prints. Set `/homes/near/<community>/` to `index: false` with its strip linking to the guide, so two of our pages never split the search.
2. **Title starts with the exact searched words plus the town,** then one proved fact: "Plantation Point Myrtle Beach Homes: Half Have a Pool". The town in the first words separates us from Bluffton's Plantation Point and the others that share the 880; the hook is the fact a competitor cannot print.
3. **Answer every suggested search in a heading or an FAQ line:** hoa fees (its own section), golf course (FAQ), plaza (FAQ), where (the map and the short answer), the landing (its own section and strip), walk to the beach, flood. These long-tail searches are the part the competitor page does not answer.
4. **Six or more links from sibling pages,** on words already there (list above), plus the hub.
5. **Structured data naming the place** (done: a Place with its geo point, Myrtle Beach and Horry County), the FAQ in open text, and a real photo of the place in Article.image and the share card (done: the NAIP aerial).
6. **Our own pictures:** the lot map no one else has, the aerial now, the partner's photos next.
7. **Measure after 4 weeks** in Search Console for each community name: a page with impressions and few clicks needs a better title; a page with no impressions needs more links in.

## What carries over to the other community pages

- **The data line** (the README in the data folder): county parcels by legal-description section (find every spelling: The Landing had nine), pools from the county's structure map (code 1870), waterway and course lots, tax status (AssessedProp / TaxableProp), deed sales, listings in aggregate with the HOA bracket, drives from the middle of each part. A parcel can have several outer rings (the course here): union them, never treat ring 2 onward as holes.
- **The map:** `map_layers.py` draws every lot by what it is on, from the same cache. Change the kinds and the labels; place labels by eye after the first shot, in map units.
- **The aerial:** a NAIP 2023 frame of the part that shows the wow factor, checked against the county's building outlines (every house in the frame on the community's lots), with a licence record and crops for the share image.
- **Sections that carry over:** short answer with key facts; "What is it like to live in X?" with the wow first; the lot map only where lots differ; prices then the yearly tax; the HOA as its own section, with what we confirm; "Is X inside the city?" only when the mail town differs; flood short when the answer is plainly no; a sub-part with its own table and strip; a short FAQ for the odd searches; the end band.
- **What stays hard:** year built and living area (listings in aggregate only), covenant text (Conway only: one trip for all 25 communities), lakes (no county layer), amenities (older communities often have none to sell; the lot, the water, the course and the location carry the page).

## Round 2 (owner, 2026-11-14)

Changed: the "Tell us: waterway, fairway or pool" offer and the "Book a showing in The Landing" offer are gone; live strips replace them. The hero button is off (a button to /homes/ fails the audit; the feed at the top is the first call to action).

Strips (live count on chapter3realty.com, `/homes/api/strip`):
- "Plantation Point houses with their own pool": `subdivision=Plantation Point&has=pool`, 3, under the pools paragraph.
- "Plantation Point houses on the golf course": `subdivision=Plantation Point&has=on_golf_course`, 3, under the golf paragraph.
- "Every house for sale in Plantation Point": `subdivision=Plantation Point`, 6, in the lots section.
- "Homes for sale within a mile of Plantation Point": `near=33.72855,-78.88639&miles=1`, 70, in The Landing section.
- Not built: waterway houses. `has=water_icw` finds 1 and `icw_view` 0, under the 3 needed. `near_icw` finds 6 but that is every house, so a "waterway" title would be untrue.

Offers kept (2): "Have us pull the restrictions", "Have us check a waterway house's flood history". Removed: "Have us send the matches", "Book a showing in The Landing". Bottom "Book a showing" stays.
Gates: score 99 (P2 numbers only), claims-scan 0, house-claims 0, critic 0 blocking at 390 and 1440, build check and audit clean.
Note: the website's vendored tools/blog-brain-2026-10-b/tools/glass.js is older than Blog-Brain's and has no homesQScript; I built with a preload that points it at Blog-Brain's glass.js. The lead must sync that copy.
