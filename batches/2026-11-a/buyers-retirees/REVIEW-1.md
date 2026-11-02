# Review round 1: /buyers/retirees/ (fixer, 2026-11-02)

Spec: `specs/retirees.js` (version 2). Ledger: `facts.md` rows 51 to 71 are new (carried from verified sibling ledgers, or VERIFIED-BY-FIXER for the lead to re-check). Shared-file needs: `NEEDS.md` items 3 to 6. Proposed registry rows: `PROPOSED.md`, "Review round 1 additions".

## Gates on the final build

- score.js: 99/100 (SEO 100, AEO 100, Human 97, Trust 100). Only P2 is below full: 5.6 numbers per 100 words (was 5.8).
- claims-scan: 0 on this page. facts-check: 0 on this page. house-claims: 0.
- critic.mjs at 320, 390, 768, 1024 and 1440: 0 blocking. 2 warnings: read.wall at 390 and 320 on the last FAQ answer, the sources line and the photo credits (mkpage's own block).
- build.js check: OK. build.js audit: the two date FAILs (dateModified and "Updated June 12, 2026" against the sitemap) wait for the lead's `node build.js dates`. Warnings: no boxed CTA mid-page (removed on purpose, see owner item 15), no attributed sentence from a named licensed person, "may/might" 5 times.
- My own Playwright run with sample homes: no horizontal scroll at 320, 390, 1024 or 1440; every entry photo loads when scrolled to; the Seasons strip fills with sample homes and hides its photo. Shots: `<scratch>/wf2/buyers-retirees/fix1/pw/` and `fix1/shots/`.

## Critic

1. **"Conway has the most; North Myrtle Beach has the fewest" (Truth).** Fixed. The line is now built from the data: "Of the seven towns in the chart, Conway has the most of those; Surfside Beach and North Myrtle Beach have the fewest." The chart caption says "in seven mailing towns". The spec throws if the order changes.
2. **$1,290 with no scope (Truth).** Fixed. $1,290 now appears once in prose, in the short answer: "Outside the city limits, a $400,000 house you live in is taxed about $1,290 a year at 65, with the $50,000 exemption." It is gone from the H1, the deck, the hero tile and the decision card. The chart caption says "outside the city limits", and the bar says "with the $50,000 exemption". The Grande Dunes entry gives the in-city figure: "a $665,000 house you live in pays about $2,700 a year, city tax included" (GD row 105).
3. **Header 1029 px at 1024 (Tool).** Worked around in the page CSS: the phone digits hide from 1000 to 1120 px, and the icon and its spoken label stay. The shared fix is in NEEDS.md 3. critic.mjs is now clean at 1024.
4. **Strip search box past 320 px (Tool).** The page no longer gets a top feed on the preview, because the four community strips are the offer, as on /buyers/no-hoa-homes/. The page CSS also keeps `.hx-fb-ai` inside the column in case the feed comes back. 320 px is clean. NEEDS.md 5.
5. **"Married, jointly" clipped in the estimator.** Fixed. The options are now "Married" and "Single".
- Nits:
  - Strip heading filtered to Del Webb: see 4 and NEEDS.md 5.
  - "The pros and cons are in the table": the paragraph is cut.
  - "most retirees": now "many retirees" in both places.
  - "upper 50s": now "mid to upper 50s".
  - FAQ "Does South Carolina tax Social Security?" replaced with "Do I lose the 4 percent rate if I rent the home out?" (row 64, 12-43-220(c)).
  - FAQ 65+ count: now "About 128,700 ... about 3 in 10" (row 43).
  - McLeod status: now "has cut the ribbon ... and says it opens this fall", the same wording as /invest/what-is-being-built/ (row 63), and Carolina Forest is now explained.
  - Wraps at 390: the cost table cells use nowrap. The "6 / percent" bar is now "the 6 percent rate". The phone cards and the orphan lines are gone, and so is the hero tile "$400k home, 65+". "If you want the beach close by" now reads "If you want to live near the beach".
  - 1440 table headers: the income table headers are now "Social Security", "Other income" and "State tax", and the rows are "Couple, 60 and 58". They no longer wrap.
  - Estimator at 320: each label sits above a full-width box below 520 px.
  - Weather icons: the weather cards are gone (prose).
  - Map: the North Strand ER pin is off the map (it was the 4 and 9 touch), so the map has 8 pins and every pin has a label. Pins 1 and 5 and pins 3 and 6 still sit close, because the hospitals are 3 and 6 minutes away. area-map.js has no second marker style; not changed.
  - Photos: the Myrtle Trace and Grande Dunes rooftop aerials are gone (see owner item 13).
  - SEO: all three headings now name the place. The Article headline comes from ogTitle, which now matches the H1 ("Retiring to Myrtle Beach: no state tax on Social Security", 57 characters).
  - read.wall in the FAQ: it remains. It is the shared FAQ, sources and credits block.
  - "One-column On this page box": shared mkpage layout; not changed.

## Reader

1. **No price for the communities.** Fixed. Each entry gives what homes usually sell for, from county deed records, the same values as each guide: Myrtle Trace about $300,000; Seasons about $500,000; Grande Dunes houses about $665,000 and villas about $430,000; Del Webb North Myrtle Beach new homes about $635,000 and resales about $535,000. The short answer gives the range.
2. **Homeowners insurance had no amount.** No primary source gives a local figure (ledger "Not verified 1"; the invest-run-the-numbers ledger found the same). The "underestimate" headline that promised it is gone. The row now reads "A quote on the house". The sentence under the table gives the state insurance department's list of what sets the price (row 65), then our quote before you offer (story insurance-quote-before-offer).
3. **First-year tax.** Fixed: "You qualify once you have lived in South Carolina for a year and turned 65 by December 31 of the year before. Until then, the same house is taxed about $1,470 a year." (rows 19, 23, 67)
4. **"The pros and cons are in the table."** The paragraph is cut.
5. **"Star ratings are on Care Compare" sends me away.** Fixed. The ratings are now printed: Tidelands Waccamaw 4 stars, Conway Medical Center 2, Grand Strand Medical Center 2 (row 62; see the note there on the PLAN's earlier decision).
6. **"Apply for the 4 percent rate" before it is explained.** Fixed. The card now says "Apply for the lower tax rate on a home you live in, called the 4 percent rate".
- Nits:
  - Words: "Carolina Forest" is now explained. "Zone C" sits with its plain meaning in the storm section. "FEMA's lower-risk flood zone" is now "outside FEMA's high-risk flood areas". "school operating tax", "stormwater fee" (now one row, "Tax and stormwater fee"), "county auditor" (FAQ only) and "Act 110" (one link) are cut or reduced.
  - Myrtle Trace is no longer named before it is introduced.
  - The rate mechanics and the $75,000 one-year rule are cut; the calculator does the work.
  - The 2,100 against 1,500 gap is now covered by "of the seven towns in the chart" and the chart caption.
  - The beach: each entry now gives the drive to the beach, and the short answer and a decision card give 4 to 15 minutes.
  - Ohio one-line comparison: not added. No verified row for another state's rules (ledger "Not verified 4"). The relocating pages own them, and the line linking them is at the end of the income tax section.
  - Life: there is a new section, "What is a retired week like in Myrtle Beach?", and each entry now opens with the clubs, pools and activities.
  - Car tax and summer power bill: no verified row, so not mentioned (owner 2026-10-10: no data, no mention).
  - Dates: "this fall" replaces the August 27 date. The H1 and deck carry no year. "Updated June 12" is set by the lead's `build.js dates`.
  - The top homes box no longer comes before the short answer (see critic 4).

## Owner's eye

1. **Headline leads with cost and fear.** Fixed. Title: "Retire to Myrtle Beach: No SC Social Security Tax | Chapter3". H1: "Retiring to Myrtle Beach: / no state tax on Social Security." Deck: "Retire here and pay no state tax on Social Security. Each 55+ community on this page is 3 to 10 minutes from a hospital." Hero tiles: Hospital 3 to 10 min, Beach 4 to 15 min, Nonstops 50+ cities. Note: the spec said the owner liked the old H1, but `data/headlines.json` shows it was written for the owner's clickbait request of 2026-10-26. VERDICTS 2026-10-07 ("leading with prices would scare people away and even in the headline") wins. headlines.json needs the new entry (NEEDS.md 6).
2. **Insurance promise not kept.** The "underestimate" framing is dropped (the owner's own either/or). See reader item 2.
3. **Too much tax mechanics.** Cut: the "rules behind those numbers" list (the brackets, the SCIAD, the age-65 stacking, the $75,000 proviso), the stormwater line, and "4 percent rate, no school operating tax". Kept: one sentence on what the deductions mean, the three examples, the calculator, the $60,000 filing line.
4. **Same number over and over.** $1,290 is now in the short answer and the chart only. $4,820 is in one card and the chart. "Social Security is not taxed" is in the H1, the deck and the income tax section's answer. "Inside a city, the city's tax is added" is once, in the chart note. The exemption rules are once (cost section), and the FAQ gives only where and when to apply. The grandchildren rules are in the entries only; that FAQ is cut.
5. **Broken sentence, pros and cons.** Cut.
6. **Community entries are field lists.** Rewritten. Each entry now opens with two or three things only research finds:
   - Myrtle Trace: about 70 events a month; a coffee klatch, a dining-out group and meals for shut-ins; the Labor Day picnic and the craft fair; ponds for fishing.
   - Seasons: indoor and outdoor pools, fitness, tennis and bocce; Publix 5 minutes; the MarshWalk 10 minutes.
   - Grande Dunes: the Ocean Club in the dues, with Mexican Train, mahjong, holiday events and wine tastings, and a staffed clubhouse.
   - Del Webb North Myrtle Beach: the lap pool, the walk-in pool, the courts and trails, the city center a minute away with cheap indoor pickleball and free outdoor courts, and beach parking free all winter.
   Then each entry gives the drives and the storm zone, then the price and the fee.
7. **Blackmoor story has no point.** Cut. It stays on the 55+ hub, where it was first used.
8. **Nothing beyond tax.** Added "What is a retired week like in Myrtle Beach?" (verified today, rows 58 to 61):
   - the Golf Passport at $72 a year for county residents, and the city's Whispering Pines at $45 a round with a cart;
   - the off season (story off-season-open);
   - each community's clubhouse;
   - nonstop flights to more than 50 cities, naming LaGuardia, Newark, Philadelphia, Pittsburgh, Cleveland and Charlotte (where our clients come from), 20 to 35 minutes from the communities;
   - plan on a car.
   Church and volunteer life and eating out: no verified row, so not written.
9. **List of four repeats five times.** The share chart, the hospital cards and the storm cards are gone. The full-time share is a phrase in each entry ("Nearly 9 in 10 homes are taxed as someone's full-time home"). The hospital drive and the evacuation zone are now in each entry. The hospital section keeps the map, because it is the one picture of where the places are. Its key repeats the names, as every map key on the site does.
10. **"Facts" field labels.** The hospital, storm and weather cards are now sentences.
11. **Tells the reader to go check.** The star ratings are now stated (reader 5). The McLeod line now says what Carolina Forest is.
12. **Hedges and filler.** Cut:
   - "That is one household, not a promise."
   - "Find the line that fits you. Each one is explained further down the page."
   - "Winter feels more open, because there are fewer people."
   - "The wind still reaches it."
   - "Its rule for visitors under 18 is not published."
   Note on the first: stories.json shipped ny-client-tax-drop "labelled one household, not a promise". The sentence now reads "One of our clients from New York ...". It names one household and makes no promise. Lead: put the label back if the story's condition must be kept word for word.
13. **Too long before the first place.** On a phone the first community now starts about 4 screens below the H1 (it was about 13). Order: short answer, decision cards, a retired week, the communities, hospitals, hurricanes, weather, then the yearly cost and the income tax.
14. **Rooftop photos only.** Each entry now has a homes strip slot, the owner's scrolling IDX feed of 2026-10-21. Seasons fills now (`prince-creek-55`). The other three need place slugs (NEEDS.md 4). Until a strip fills, the entry shows a ground photo of the place's life: Main Street in Conway, boats in Murrells Inlet, the beach in North Myrtle Beach. Grande Dunes shows its clubhouse and pool from above, the one aerial kept, because it shows the pool and courts the entry describes. A beach photo sits in the retired week section. Every photo was looked at full size and matches its caption. Each one already has a licence record in data/photos.json. The golf green and Conway Riverwalk records have no image files in this working copy, so they are not used. Photo partner shot list: unchanged in shot-list.md (clubhouses from the road).
15. **Top feed shows no homes.** On today's preview there is no top feed. The Seasons strip fills with 14 sample homes. See critic 4.
- Nits:
  - Weather icon: gone.
  - "38" against "About 40": now "close to 40" for both.
  - Map markers 6 and 9 without labels: the ER pin is gone, and every remaining pin has a name.
  - Del Webb NMB photo licence link (17 U.S.C. 105): that aerial is no longer on the page.
  - The clients line now ends the income tax section as one plain sentence.
  - The same offer five times: the hero offer, the top offer line and both mid-page boxes are removed. What is left is one "Get the homes for sale in <community>" per entry and one end offer: "Tell us how you want to live." with "Talk to an agent". build.js audit now warns that there is no boxed CTA mid-page. I kept the owner's rule over the audit warning.

## Findings I did not take as written

- **Critic: "Fix the header in the shared CSS".** I cannot edit shared CSS. There is a page-local workaround (critic 3), and the shared fix is in NEEDS.md 3.
- **Owner: "drop the chart".** Done for the share chart. The one-level houses chart stays, because it answers "Do you need a 55+ community?" with counts no one else publishes.
- **Owner: "keep at most one aerial".** One aerial stays: the Grande Dunes clubhouse, which shows the pools and courts. The map is a drawing, not a photo.
