# Review 1: /sell/home-value/, what changed

Fix round 1, batch 2026-10-d. Every change is in `specs/home-value.js`; the page was rebuilt with `node tools/mkpage.js specs/home-value.js`. No new fact was added; every figure is still read from findings.json or cap-by-tenure.json. No row needed VERIFIED-BY-FIXER.

## Gates after the fix

- score.js (SCORE_TODAY=2026-11-01): 99/100 (SEO 100, AEO 100, Human 98, Trust 100). Partial: P2 numbers 4.0 per 100 words (was 4.1), P6 "CMA" (kept: readers search it; NEEDS item 6).
- claims-scan: 0. facts-check: no hit on this page. house-claims: 0. Struck list (22 patterns): 0 hits.
- critic.mjs at 320, 390, 768, 1024, 1440: 0 blocking, 0 warning. Shots: `wf2/sell-home-value/fix1/shots/`, element crops in `fix1/el/`.
- build.js check: no line for this page. build.js audit: only the two date lines (dateModified 2026-07-25 against sitemap 2026-10-27). The lead's `build.js dates` run sets them.

## Critic, blocking

| Finding | What I did |
|---|---|
| TRUTH: "Houses include townhomes and other homes on their own lot"; picker label "houses and townhomes" | Table note now uses the verified wording: "Houses and other homes: mostly houses. A few condo-hotel units the county does not code as condos are counted here too." Picker label "middle price, houses and other homes, all of Horry County"; option "House or other home"; the script's label the same. "townhome" and "own lot" are gone from the page. |
| Area table spills at 320 px (Surfside Beach row 314 px in a 270 px card, page 364 px wide) | On a phone the table, tbody and caption are blocks at 100% width, the price cells may wrap (`min-width:0`), and under 380 px each price takes its own line. Checked at 320: no row past the card. |
| "Find houses" 29% hidden at 320 (sitewide strip) | NEEDS item 7 for the lead. Stopgap in this spec only (`CHROME_CSS`, under 380 px): the search row wraps and the button takes its own line. Page is 320 px wide at 320. |
| Header 5 px past a 1024 px window (sitewide) | NEEDS item 7. Stopgap in this spec only, 1000 to 1100 px: the nav gap is 2.2rem. Page is 1024 px wide at 1024. |
| Worked-example chart: dashed line through "sales" | The dashed line is drawn in three pieces that skip the three label rows (y 50 to 106, 130 to 160, 184 to 204). Checked at 390 and 1440: no line touches a label. |

## Critic, warnings and nits

| Finding | What I did |
|---|---|
| Flood sentence leaves out the sample | Now: "In the 14 neighborhoods with house sales on both sides of the line, the 52 houses inside it did not sell for less than the others in the same neighborhood." The 12 percent figure is cut (owner and reader found it a puzzle). |
| Tenure chart caption overstates scope | Note: "Horry County homes with a building whose last deed was before 2025, from the county's parcel records." |
| Condo/house split sentence in the wrong section | Moved under "How close are the county's number and nearby sales?", after the test chart. |
| "20 / percent" split | Tile reads "missed by more than 20%"; the other tile has a non-breaking space in "5 percent". |
| "sq / ft" split | Non-breaking space in "sq ft" in the ocean chart. |
| Orphan "home" in "Get the number for your home" | Non-breaking space before "home" in the H2 and the end band. The tenure chart caption is shorter ("Share of the county's market value that is taxed, by year of last deed"), so "deed" no longer sits alone. |
| "mid-/2021" hyphen breaks | Non-breaking hyphens in the FHFA caption. The body and FAQ no longer say mid-2021, mid-2025 or mid-2026. |
| Area rows 6 px from the right edge | Fixed with the table wrap above. |
| Photo 2 under "Condo or house, and the building" shows no building, 4:3 at 840 px | Moved to "How close it is to the ocean", after the condo price-per-foot chart, and shown at 16:9 (CSS crop; checked at full size: beach, dunes, ocean; the caption still matches). The building section has no photo now. |
| No photo of its own | Not changed in this round. The shot list (`shot-list.md`) is ready for the photo partner. |
| Byline date | The lead's dates run. |
| Strip shows only "See all homes" in preview | Live feed; not this spec. |
| H2 "How do we work out what your home is worth?" has no place | Now "How is a home's value worked out in Myrtle Beach?" |
| read.wall at 320 | The deck line is shorter and the opener of the short answer is cut. |

## Reader

| Finding | What I did |
|---|---|
| Which picker row is mine? | Plain names: "City of Myrtle Beach", "Near Myrtle Beach", "Town of Surfside Beach", "Near Surfside Beach", and so on. A note under the picker: "City of" and "Town of" mean inside the limits; "Near" means a home with that town's mailing address outside its limits; Socastee, Carolina Forest, Forestbrook and Red Hill have their own rows, even with a Myrtle Beach address; not sure, send the address and we will tell you. This follows `by_area_rule` (Census place first, then mailing city). |
| Subtitle promises "homes like yours" | The line under the H1 is now "What homes sold for in your area." The H2 is "What did homes sell for in my area of Myrtle Beach?" A line under the picker says where a home falls in the range depends on size, age, lot and condition, and that is the part we work out. |
| New-homes sentence left hanging | "Your house also competes with new ones. Builders sold about 2,000 new houses ... close to the resale middle. A buyer at your price may also be touring new houses." |
| Redfin 1.65 percent for listed homes | Cut. A seller's home is not listed yet, and the sentence read as "trust the estimate after you list". |
| "the index's own margin" and index method lines | Cut. The section says "No. House prices in Horry County have been about flat for a year, after rising about half in the four years before," then the chart. |
| Which county number? | The test section now says it is the market value on the home's county property record, not the taxable value on the tax bill. |
| Flood 12 percent reads as a premium | Cut; the sentence says only that the houses inside did not sell for less. |
| Tax details not about the sale | Cut (see owner, county value). Kept: the buyer is taxed on the new value, so a buyer's bill can be higher than the seller's. |
| Strip's buyer search box after the short answer | Placed by the edge (idx-lib/feeds.js), not the spec. NEEDS item 8. |
| Open questions: net proceeds, in-person visit, time to sell | Not added. No verified row covers an in-person visit or time to sell; the net proceeds calculator is linked. |

## Owner

| Finding | What I did |
|---|---|
| County value section muddled | Rewritten as one answer in three paragraphs and one chart: the county's market value is a mass estimate made for tax, which is why it was about 9 percent off on a typical house; the taxable value on the bill is lower still because of the 15 percent in five years limit (2 in 3 homes taxed on less than market value); so the tax bill is not a guide to price, a sale resets the value, and the buyer is taxed on the new value. The three-item reassessment list is one sentence. The 4 and 6 percent rates and the 90-day objection are cut. The SC Code 12-60 source is removed. Note: /buyers/property-taxes/ does not yet say how to object to a higher value (ledger row 22 is verified if that page wants it). |
| Prices section too technical | Cut to "No. ... about flat for a year, after rising about half in the four years before", the chart, and one link to the market report. The FAQ answer matches. |
| "We have no" sentences and the Zestimate H2 | H2 is now "How accurate are online home estimates in Myrtle Beach?" and the FAQ question matches. "We have no county figure for Zillow" and "No public record marks a home on the water ..." are cut. Water and golf now reads: "We price a home on the water or a golf course from sales on the same water or the same course." The meta keyword "Zestimate accuracy" became "online home estimate accuracy". |
| Repetition of "sales behind it" | Kept once, in the short answer ("send you the number with those sales, free"). Hero CTA is now "Send your address. An agent calls the same day."; the CMA line is "Ours is free."; the mid-page offer is "Have an agent price your home / From the sales most like it, usually in a day or two."; the form paragraph and the last list item drop the phrase. The dot chart caption no longer repeats step 1; it says what the dots and the dashed line are. The flood tiles are cut; the counts are in the one sentence. |
| Method notes and "middle miss" | "We read every resale deed ..." cut from the body. The condo coverage limit moved to the sources line ("Area condo figures use the 7 in 10 condo resales we could place"); it is still on the page, as the verifier asked. "Middle miss" is gone: tile "off, for a typical estimate", chart value label "how far off", chart note names the test and its sources only. The tenure chart note no longer has the tautology. |
| Filler and two sub-lines | Cut "Your home is worth about what homes like it sold for in your area.", "Condos and houses differ in one way.", "The price is the start.", "A number made without seeing the house is a first look." The hero now has the H1, one short italic line ("What homes sold for in your area.") and one full sentence written to the reader ("A licensed broker tells you what your own Horry County home is worth, free, from the sales most like it."). mkpage requires both h1em and sub, and build.js audit requires the sub to carry "worth", a place and "you", so the two cannot become one; neither is a fragment now. |
| Photo that does not show its section | Moved to the ocean section, 16:9 (see critic). |
| Layout breaks | Fixed (see critic). |
| Area labels | Plain names with one note (see reader). |
| Nit: appraisal story from the buyer's side | Now opens with what it means for anyone selling: "A low appraisal can be challenged." "In Chapter3's experience" became "Our agents see low appraisals only rarely here." I did not add "the sale held at the agreed price": the story bank entry (`low-appraisal-reconsideration`) does not say what happened to the price, and its limits forbid adding a detail. |
| Nit: H3 "We tested the two numbers an owner can find alone" | Now "How close are the county's number and nearby sales?" |
| Nit: flood puzzle | Cut the 12 percent (see reader). |
| Nit: picker and table back to back | Tried a closed `<details>`; score.js A13 fails a closed accordion in main content, so the table stays open. On a phone it is now a compact list. |
| Nit: FAQ near-repeats | The FAQ prices and county answers are shorter and no longer repeat the body word for word. |
| Nit: date | The lead's dates run. |

## Findings I think are wrong

None. Two are only partly done, with reasons above: the hero keeps two lines (mkpage and build.js audit require both), and the picker table stays open (score.js A13).
