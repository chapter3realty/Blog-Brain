# Build: /buyers/relocating/myrtle-beach-vs-charleston/ (batch 2026-11-d, Lane N, version 1, 2026-11-13)

Website working copy: `scratchpad/wt-139`. Files written there, nothing else touched:
- `specs/myrtle-beach-vs-charleston.js` (new)
- `chapter3realty/buyers/relocating/myrtle-beach-vs-charleston/index.html` (built by `node tools/mkpage.js specs/myrtle-beach-vs-charleston.js`)
- `data/2026-11-d/myrtle-beach-vs-charleston/photos.json` (new: the photo's license record, copied from `data/2026-11-a/submarkets-myrtle-beach/photos.json`)
- `data/2026-11-d/myrtle-beach-vs-charleston/raw/normals-days-USW00013782.json` and `normals-mly-USW00013782.json` (new: NOAA normals for downtown Charleston, the station the verifier used for rows 30 to 32; they match VERIFY.md: 24.5 days at 90, 6.1 freezing nights, July high 87.5, rain 44.26)

No new image file: the page reuses `images/2026-11-a/submarkets-myrtle-beach/houses-and-towers-from-the-ocean-*` (USGS, public domain) and its 1x1, 4x3 and 16x9 crops for the share image.

Facts: VERIFIED rows, and CORRECTED rows at the verifier's wording only. Nothing from VERIFY "Not to publish" is on the page: no 86.3 or 102.5 (row 14), no high-tide days (row 40), no Horry flood-zone share (row 25), no "half a mile" (row 29), no "cooler summer" and no airport-against-airport heat claim (rows 30 to 32), no "nearest VA medical center" and no specialist-care line (row 41). The 6% rate (a researcher note in row 8) is not printed.

## What changed from the plan, and why

- **Weather.** The plan's "about a third as many 90-degree days" compared a beach airport with Charleston's inland airport (VERIFY rows 30 to 32). The section now says near the ocean the summer is about the same (about 21 and 25 days a year at 90 degrees), Charleston's inland airport gets about 64, and winter is colder here (about 34 freezing nights against about 6 downtown). The H1, short answer, title and table carry no heat claim.
- **Headline.** The plan's H1 had "$98,000" in it; score.js P4 blocks a price in the headline on a buyer page (owner, PLAIN-7). The H1 is now "Myrtle Beach or Charleston?" with "More home for the money here, and more than 360 public beach accesses." The title keeps the $98K fact (CRAFT 7).
- **Headings.** Seven of ten are the questions people search ("Is it cheaper...", "Is Myrtle Beach hotter...", "Is Myrtle Beach or Charleston better to live in?"); three stay statements where a statement reads better (new homes, jobs, what Charleston has more of). build.js audit wants 60%.
- **Flood.** "Residential buildings", ratios in words (one in seven, one in three, three in ten). The wind pool line was dropped: one line could not say what it means for the buyer from a verified row.

## Outline

- **Title (60):** Living in Myrtle Beach vs Charleston: Typical Home $98K Less
- **Description (158):** Myrtle Beach vs Charleston, side by side: home prices, property tax, beaches, summer heat, flood insurance, jobs and the commute, from federal and state data.
- **H1:** Myrtle Beach or Charleston? **Italic line:** More home for the money here, and more than 360 public beach accesses.
- **Sub:** Myrtle Beach and Charleston side by side for a move: home prices, property tax, the beach, the summer, flood insurance, jobs and the drive to work.
- **Short answer:** about $340,000, about $98,000 less (F1 to F3); the middle tax bill about $750 a year lower (F9, F10); more than 360 accesses against 136 (F26); Charleston has more than twice the working residents and higher pay, so the saving goes furthest when income or savings come with you (F15, F16, F19).
- **Top offer bar:** "Weighing Charleston? We send you houses here under $437,000, its typical value." / Send me homes under $437,000 (/contact/).

Sections:
1. **How do Myrtle Beach and Charleston compare?** The side-by-side table, 12 rows, the better figure for a buyer in bold, cards on a phone (F1, F2, F9, F10, F13, F26, F30, F32, F20, F16, F15, F34, F23, F24, F37). Note on the areas. Charleston about 98 miles, 2 hours 15 minutes with no traffic (F28).
2. **Is it cheaper to live in Myrtle Beach than Charleston?** Yes, about $98,000 less; Census about $105,000 (F4, F5); values flat this year (F6). **Line chart** from `findings.json` zhvi.chart_annual_sept, "The difference in typical home value has almost doubled in ten years", $52,500 apart to $98,000 apart, drawn twice (phone and wide). Prices about 7% lower overall (F13); link the cost of living calculator. **Strip A** `mbvc-under-charleston-typical`, "A whole house for less than Charleston's typical home" (fallback pill: Send me Myrtle Beach houses under $437,000). **Offer:** Have us send a short list.
3. **Which has more beach, Myrtle Beach or Charleston?** More than 360 against 136; North Myrtle Beach alone has 167, more than Charleston County's whole coast (the wow line, F26, F27); Myrtle Beach 143; link beach rules by town. The USGS photo of houses, towers and dune walkways. Charleston's beaches are on its islands; Sullivan's Island and Folly Beach about 20 minutes from City Hall (F29). **Strip B** `mbvc-beach-walk-under-437k`, "Walk to the beach for less than Charleston's typical home" (fallback pill).
4. **Is Myrtle Beach hotter than Charleston?** Near the ocean, no: about three weeks a year at 90 degrees. **Bars:** North Myrtle Beach airport 21, downtown Charleston 25, Charleston airport (inland) 64 days (F30 corrected). Winter colder here, 34 against 6 freezing nights; rain about the same (F32, F33). Story `heat-and-humidity`, as recorded, "one of our team". Link weather.
5. **Are property taxes lower in Myrtle Beach than Charleston?** Yes: about $1,180 against $1,930; the 4% for the home you live in once you apply (F8 corrected); Charleston County about $2,310 (F11). Link property taxes. **Offer:** Have us work out the tax on a home.
6. **Is flood insurance more common in Charleston?** Yes: one in seven residential buildings in Horry, one in three in Charleston County; three in ten in Charleston County's high-risk zone (F23 to F25 corrected). Our agents check flood zone and history. Links: coastal insurance, undisclosed flooding. **Offer:** Have us check a house's flood history.
7. **More new homes are being built in Myrtle Beach.** Half built 2003 or later, vacation homes included; Charleston 1999 (F7). 6,418 against 5,799 permits with less than half the people (F34). Construction cost about $218,000 and at least $370,000, no land (F35 corrected). Link new construction.
8. **Charleston has more jobs and higher pay.** 449,000 against 185,000 working residents; $93,000 against $71,000; 4.6 times income in both (F15, F16, F19). H3 Where people work (F18). H3 The drive to work: 25 against 30 minutes, one in eight against one in five at 45 minutes or more (F20, F21); story `traffic-timing` without quotes, as our experience. Links: jobs, why Myrtle Beach. **Offer:** Have us find homes near your work.
9. **What Charleston has more of.** About 889,000 people, twice 428,000 (F37). The VA clinic and the Ralph H. Johnson VA Medical Center (F41 corrected), link healthcare. Day trip, link getting around.
10. **Is Myrtle Beach or Charleston better to live in?** The decision table by want (seven rows: more home, lower tax, the beach on a weeknight, a newer house, a shorter drive, a local job or manufacturing, fewer freezing nights). Links: which-town (13 towns), pros-and-cons.
- **FAQ (5):** Is Myrtle Beach part of Charleston? Is it cheaper? Is Myrtle Beach hotter? Are property taxes higher in Charleston? Which is bigger? Each answered on the page.
- **Sources line** (under 90 words), photo credit. **End band:** Plan a day of showings in Myrtle Beach / Plan my showing day (/contact/).

Every request button goes to /contact/ (top bar, four offer boxes, two strip fallbacks, the end band). Links out to our own pages in sentences: cost of living, beaches, weather, property taxes, coastal insurance, undisclosed flooding, new construction, jobs, why Myrtle Beach, healthcare, getting around, which town, pros and cons (13).

## Gate results (2026-11-13, after the last build)

| Gate | Result |
|---|---|
| `score.js --only` (SCORE_TODAY=2026-11-13) | 97/100. SEO 92, AEO 100, Human 98, Trust 100. Only fail: S8 inbound links (0), a lead item below. P2 numbers 4.7 per 100 words of prose (67%): a two-place comparison; cut from 6.5 by saying each figure once and writing small ratios in words. |
| `claims-scan.js` | 0 findings (0 site-wide). |
| `facts-check.js` | 0 on this page. The 4 wrong sentences reported are on /buyers/relocating/from-massachusetts/, /from-virginia/ and llms-full.txt (sc-scaid-2026), not new. |
| `house-claims.js` | 0 sentences to scope or source. |
| `struck-check.js --strict` | No struck wording on this page (one hit, "a short drive" in an offer, was fixed). |
| `critic.mjs` 390, 1024, 1440 | 0 blocking. 1 warning at 1024: the top offer bar's line is about 38 characters wide (the site's compact bar). Fixed on the way: a "$200K" axis label cut off by the chart's edge, and a 1,322 px wall of text in the jobs section (now two H3s). |
| `build.js check` | OK. |
| `build.js audit` | FAIL lines on this page: "missing from sitemap.xml" and "orphan" only (both lead items). Warnings: not in llms.txt, no Tim Nash quote (we write none), 8 sentences over 22 words (none over 28). |

Shots (taken after the last content build; the preview's sample photos do not load, so both strips show their fallback pills):
- `scratchpad/nd/myrtle-beach-vs-charleston/shots/buyers-relocating-myrtle-beach-vs-charleston-390.png`
- `scratchpad/nd/myrtle-beach-vs-charleston/shots/buyers-relocating-myrtle-beach-vs-charleston-1024.png`
- `scratchpad/nd/myrtle-beach-vs-charleston/shots/buyers-relocating-myrtle-beach-vs-charleston-1440.png`
- critic JSON: `scratchpad/nd/myrtle-beach-vs-charleston/critic.json`

The last change after these shots was one CSS line (the decision table's "Choose" column no longer wraps from 600 px).

Looked at every screen as a stranger, at full size: the first phone screen holds the H1, italic line, byline, sub and the start of the short answer; the table reads as short labelled rows on a phone; the line chart has one message, both lines labelled in a key, the amount apart at each end; the heat chart is three rows; lists and tables sit under thin rules; one card style for charts and offers. Fixed after looking: a repeated "the rule is the same" in the tax section, a chart note said again in prose under the heat chart, "compares each one" after "13 towns compared", a filler line in the Charleston section.

## For the lead

1. **sitemap.xml:** `<url><loc>https://chapter3realty.com/buyers/relocating/myrtle-beach-vs-charleston/</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>` (the date from `build.js dates`).
2. **llms.txt** (under Relocating): `- [Myrtle Beach vs Charleston](https://chapter3realty.com/buyers/relocating/myrtle-beach-vs-charleston/): the two coast metros side by side for a move: Zillow typical home value (about $98,000 less here), median property tax paid, public beach accesses, NOAA heat near the ocean, FEMA flood policy rates, new-home permits, jobs, pay and the commute.`
3. **Feed under the opening:** the site's default relocating feed is right for this page. If the edge takes a page feed, suggest `{ head: "Houses under Charleston's typical price", q: { type: "house", max: "437000" } }`.
4. **New places (`batches/2026-10-b/data/idx-places.json`, index false, pages ["/buyers/relocating/myrtle-beach-vs-charleston/"]):**
   - `mbvc-under-charleston-typical`: q `{ "type": "house", "max": "437000" }`, Grand Strand wide. Strip title: "A whole house for less than Charleston's typical home" (true while max is Zillow's Charleston value, $437,474, rounded down).
   - `mbvc-beach-walk-under-437k`: q `{ "has": "walk_to_beach", "type": "house", "max": "437000" }`, no city. Strip title: "Walk to the beach for less than Charleston's typical home". Check that `walk_to_beach` works without `city` (`beach-walk-nmb-under-400k` uses both); if not, point the strip at `beach-walk-nmb-under-400k` and the title stays true.
   Until they exist the strips stay empty and the "Send me Myrtle Beach houses ..." pills show.
5. **Sibling pages that should link here** (on words already there where possible):
   - /buyers/relocating/getting-around/ (FAQ "How far is Myrtle Beach from Charleston or Charlotte?"): "Choosing between the two places? See [Myrtle Beach vs Charleston](/buyers/relocating/myrtle-beach-vs-charleston/), side by side."
   - /buyers/relocating/pros-and-cons/ (the "Charleston and Columbia about three" line, or the list of cons): "Weighing Charleston instead? Compare [living in Myrtle Beach vs Charleston](/buyers/relocating/myrtle-beach-vs-charleston/)."
   - /buyers/relocating/why-myrtle-beach/ (the Charleston County line in where people go when they leave): "For the two cities side by side, see [Myrtle Beach vs Charleston](/buyers/relocating/myrtle-beach-vs-charleston/)."
   - /buyers/relocating/cost-of-living/ (near the calculator, which already offers Charleston-North Charleston): "Comparing with Charleston? The typical home here is about $98,000 less ([Myrtle Beach vs Charleston](/buyers/relocating/myrtle-beach-vs-charleston/))."
   - /buyers/relocating/weather/ (the humidity or summer section): "Near the ocean, Charleston's summer is about the same as ours ([Myrtle Beach vs Charleston](/buyers/relocating/myrtle-beach-vs-charleston/))."
   - /buyers/relocating/healthcare/ (the section on care that means a drive to Charleston): "Thinking of living in Charleston instead? See [Myrtle Beach vs Charleston](/buyers/relocating/myrtle-beach-vs-charleston/)."
   - /buyers/relocating/ hub (the "Where should I live?" or "What will it cost?" group): "Myrtle Beach vs Charleston, side by side".
   - /buyers/relocating/which-town/ (one line in the intro; the owner asked that this page stay as built, so one link only): "Still choosing between the Grand Strand and Charleston? See [Myrtle Beach vs Charleston](/buyers/relocating/myrtle-beach-vs-charleston/)."
   - /buyers/property-taxes/ (where the 4% is the same statewide): "In Charleston the middle bill is higher ([Myrtle Beach vs Charleston](/buyers/relocating/myrtle-beach-vs-charleston/))."
6. **Shared facts to settle:**
   - Zillow typical value: this page uses September 2026 ($339,738, "about $340,000"). /buyers/relocating/pros-and-cons/ and the from-state pages print $342,000 (July as first downloaded; Zillow now reads $339,406 for July). Pick one month for the site and register it (`facts/registry.json` typical-home-value).
   - /buyers/relocating/pros-and-cons/ says "Some specialist medical care means a drive to Charleston"; VERIFY row 41 found no source for it on this page, and the VA clinic offers some specialty care. Its "about 22 days a year over 90 degrees" is 21 (20.9) at the North Myrtle Beach airport, the weather page's station.
   - The page reads its numbers from `findings.json`; the permit figures there are Census estimates with imputed permits (VERIFY row 34).
7. **Photo partner shot list** (templates/photo-request-email.md): a public beach access at a street end in North Myrtle Beach (the walkway, the sign, the sand); a dune walkway in Myrtle Beach at sunset. Either would replace the 2011 aerial in the beach section.

## Round 2 (owner, 2026-11-14)

Changed: both CRM strips and their "Send me ..." offers are replaced by live strips; the hero offer and top offer line are off; the "Moving with a Charleston budget?" and "Know where you will work?" offers are removed. New last section "What Myrtle Beach does better", from rows 1 to 3, 9, 10, 20, 21, 26 to 29, 34, 36, 37 and 38 only: housing costs (home value, median rent $1,441 vs $1,855, tax), new houses per 1,000 residents (about 15 vs 6.5), a beach that is the city (143 accesses in the city, boardwalk 1.3 miles, 20 minutes to Charleston's nearest beach), a shorter commute. No Charleston put-down, no weather claim (VERIFY: summer is the same). A strip follows the new-houses paragraph.

Strips (live counts):
- "A whole house here for less than Charleston's typical home": `type=house&max=437000`, 1989, home prices.
- "Walk to the beach for less than Charleston's typical home": `has=walk_to_beach&type=house&max=437000`, 90, the beach section.
- "Myrtle Beach houses built since 2024, under Charleston's typical price": `type=house&max=437000&yearMin=2024&city=Myrtle Beach`, 75, new section.

Offers kept (2): tax on one house, flood history check. Removed: 3 "send me" offers (hero, short list, near your work).
Gates: score 99; H5 reads 4 of 5 because strips do not count as CTAs (owner's rule caps service offers at two). P2 numbers, as before. claims-scan 0, house-claims 0, critic 0 blocking, audit clean. Same glass.js note.
