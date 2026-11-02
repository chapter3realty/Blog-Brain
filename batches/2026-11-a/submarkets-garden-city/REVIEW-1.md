# Review round 1: /submarkets/garden-city/ (batch 2026-11-a)

Fixer, 2026-11-02. Spec: `specs/garden-city.js`. New facts are rows 39 to 47 in `facts.md`, marked VERIFIED-BY-FIXER for the lead to re-check. New data: `data/2026-11-a/submarkets-garden-city/fix1-findings.json`, `fix1-names.json` (from `names.py`), `raw/c-*.json`. Photos relabelled by `images/label_naip.py`; records by `images/records.py`.

## Findings I think are wrong or cannot be met here

- **Reader: condo dues range from listings.** Dues sit behind the site's registration wall (MLS data for registered visitors only), so a public page cannot show them, even in aggregate. The worked example now ends on what is left (about $35,600) and lists what comes out of it. NEEDS.md 13.
- **Reader: wind or HO-6 insurance for a unit.** No public source with Garden City figures. The page gives the unit's federal flood policy (row 29) and says we get a quote for the unit.
- **Reader: tax, sale prices and filing list for the Georgetown end.** Georgetown County's parcel and deed data is on qPublic with no open service (facts.md, Not verified), and its millage for this area could not be confirmed. The page says Georgetown County decides the rate and the same state rule applies, gives the end's asking prices (row 18) and its rental rules (row 22).
- **Critic: a middle sale price for Surfside Beach and Murrells Inlet in the comparison.** No verified sale prices for those places exist in any ledger. The table uses who makes the rules and the 2020 Census vacation-use share (row 45), which does decide something: Murrells Inlet is lived in all year far more.
- **Owner: ground-level photos.** None could be found (Commons refused every request). One aerial was replaced by the USGS oblique photo from over the ocean. NEEDS.md 11.
- **Owner: the homes row.** Shared file (`idx-lib/feeds.js`). NEEDS.md 10.
- **Critic nit: byline date June 12.** Expected until the lead runs build dates.
- **Critic nit: the FAQ read.wall.** It still fires at 320 and 390; as the critic said, it covers the sources line and photo credits.

## What I changed, finding by finding

### Critic

| Finding | Change |
|---|---|
| "West of Business 17, no: none ... in a FEMA flood zone" | Now: "West of Business 17, no home is in FEMA's high-risk flood zone. East of it, much of Garden City is, and in that zone a lender requires flood insurance." The shares are in one table by part. |
| Worked example: "$3,980" labelled as tax plus $89.40 | Row now reads "Less the property tax as a rental, with the county fees on the bill: $4,070" (3,979 + 89.40). |
| Hero tile "Town government / None" spills at 320 | Tile removed. Tiles are now Beach road, Fishing pier, MarshWalk, Airport; under 360 px they wrap 2 by 2. critic.mjs: 0 blocking at 320. |
| Hero tile "$320,000" spills at 320 | Tile removed (also the owner's price finding). |
| Credit overlay on the burned-in "Garden City Pier" and "Atlantic Ocean" labels | Labels redrawn: the pier label sits beside the pier, the pier photo's "Atlantic Ocean" label is gone, the Georgetown-end "Atlantic Ocean" label moved up. `label_naip.py` now refuses any label in the bottom 12 percent or off the frame. |
| "Salt marsh" clipped on the streets photo | Moved inside the frame; same guard. |
| Numbers per 100 words 6.3 | 3.4 (80 numbers in 2,333 words). Cut: the three mailing and buyer figures in part 1, every count that opened a part, the listing totals, the filing list, the tax district paragraphs, the renourishment paragraph, the decade years, a repeated price section. Scorer 100/100. |
| Nearby towns gave no deciding fact | A table: who makes the local rules, and homes held for vacation use (2020 Census, row 45), then drive times and one line on what each place is. |
| Two numbers for one place (3 in 4 vs about half; 55 of 86 vs 89) | The tax-share chart is gone. "About 3 in 4 houses" (west of Business 17) appears once, and says houses. The 55 of 86 figure is cut. |
| Nit: "have the beach at the back door" | Gone. Part 1 opens: "Here you walk out of your building onto the sand." |
| Nit: "highest asking prices" unscoped | "The listings here asked about $1.45 million at the middle, more than any other part" (checked against every part's middle ask in listings-findings.json). |
| Nit: part 3 includes part 2's houses | Part 3 no longer gives counts; it opens "The rest of the land between the marsh and Business 17", and its house price is "away from the marsh" (row 14, which leaves the marsh houses out). |
| Nit: Business 17 label off its line; second line unlabelled | The label now sits on its own line, rotated to it; the US 17 Bypass is labelled (County GIS road layer). |
| Nit: pier label far from the pier | Fixed (above). |
| Nit: 1440 cell wraps | The "By building" and "By unit" rows are gone; the cost table no longer wraps in the shots. |
| Nit: who answers a call; schools | FAQ names the Horry County Police Department and the Georgetown County Sheriff's Office, and Horry County Schools and the Georgetown County School District (row 46). |
| Nit: H2s nobody searches | "Where to buy in Garden City, SC" and "Is Garden City, SC busy in winter?". |
| Nit: read.wall after the cost table | The three notes are now a list. The winter section is a list. |

### Reader

| Finding | Change |
|---|---|
| The worked example never says what is left | It now ends: "Left for condo dues, cleaning, management, utilities and the unit's other insurance: about $35,600", then lists what is not in the table. See above on dues. |
| $1,560 unexplained; no unit insurance | The yearly-cost list says what the $1,560 is (the middle federal policy condo owners on the strip bought for their own unit). |
| Georgetown end left out of prices and tax | Part 5 says Horry deeds do not cover it in the chart note, gives its asking prices, and the cost section says Georgetown County decides its rate. See above. |
| Three rent figures | One: "$41,200, the average listing's income in a year", in the tiles and the table. The "typical month" tile is now "374 active listings". The table row says "Airbnb income", not "Rent". |
| "At the 6 percent rate" read as a 6 percent tax | Said once, explained: "South Carolina figures property tax on a share of a home's value: 4 percent of it for the home you live in, and 6 percent for a second home or rental." Elsewhere the page says "as a rental". |
| A normal week had no groceries, food or traffic | New section "What is there to do in Garden City, SC?": the pier's café, bar, bands and arcade (row 43), the MarshWalk and four of its restaurants, Huntington Beach State Park, Atalaya and Brookgreen Gardens (row 44), Kroger and Walmart drive times (row 42), and the summer traffic line above the drive table. |
| Nit: "Garden City Beach" vs "Garden City" | "AirROI ... tracks the Airbnb listings here under the name Garden City Beach." |
| Nit: hard words | Removed: middle ask, levies, tax district, Census block groups, renourishment, minor flood level, orthoimagery, hospitality and accommodations account, PT-100. "Lot rent" is now "Where a home is on rented land, the lot rent is not in the price". |
| Nit: parts 2 and 3 overlap | Fixed (critic nit above). |
| Nit: report voice ("found a permit number on none", "We read every deed") | Both gone. |
| Nit: about 15 dates | Down to Hugo (1989), Ian (2022), the beach-rule dates and one "2020 Census" note. Scorer date mentions: 0. |

### Owner

| Finding | Change |
|---|---|
| Parts read like a tax and census report | Each part opens with what it is like to live there; counts come after or are cut. |
| No names | Buildings (Royal Garden Resort, Waters Edge Resort, Surfmaster, Atalaya Towers), neighborhoods (Salters Cove, Mount Gilead, Myrtle Dunes, Woodland Terrace; Woodlake Village, Mallard Landing, Harbour Village, Jamestowne; Sweetwater at Indian Wells, South Bay Lakes, Southbridge, Tupelo Bay Golf Villas), marsh streets (Dogwood Drive, Creekside Drive, Rum Gully Road), the Georgetown end's canals and docks. From the county's own parcel and address records (rows 39 to 41). |
| "A normal week" had no life | Replaced by the things-to-do section and a winter section (above). |
| Repetition | "Not a town" is in the short answer only (and the Airbnb answer, where it is the reason). The county line's numbers are said once, in the Where section. The 4 and 6 percent rule is explained once, in the cost section. Flood shares are in one table. |
| A price in the hero | Gone. No price before part 1. |
| Long preamble | The contents list is off (as on the bar pages), the Where section is three short paragraphs, and the map caption is two lines. The map key no longer links (it was read as a contents list). |
| Homes row | NEEDS.md 10. |
| Every picture an aerial | One replaced by the USGS oblique photo of beach houses and the marsh (already on the site, public domain). The rest wait for the photo partner (NEEDS.md 11). Labels no longer sit under the credit. |
| Technical detail | Levy sum, district paragraphs, tide caption detail, map credits, CDP, block groups, permit-number line and the four-filing list are gone. The rental answer now says what the county's list names and "We go over the filings with you before you close." |
| Worked example does not answer | Fixed (reader item above). |
| Numbers that contradict | Fixed (critic item above). The cost table and the worked example now use the same tax plus fees. |
| "FEMA flood zone" wording; "back door" | Fixed (critic items above). |
| Short answer does not say which part suits whom | The second paragraph now does: ocean side for a condo on the sand, the marsh and the Georgetown end for a house with a dock, west of Business 17 for a house lived in all year. |
| Nit: winter example label and "a family" | Label is "Example." The scene describes the cart and the beach, not people, with no detail added to story garden-city-winter-cart. |
| Nit: "trade-off" twice | Both gone. |
| Nit: H3 "On the marsh: salt marsh out back" | Now "On the marsh: docks and tidal creeks". |
| Nit: schools and safety answers | Fixed (row 46). |
| Nit: 1440 tile heights | The tile labels are short now. |

## Gates after the fix

- `node tools/mkpage.js specs/garden-city.js`: built.
- score.js: 100/100 (P2 3.4 per 100 words).
- claims-scan: 0 findings on this page. facts-check: 0 on this page. house-claims: 0. struck-check: no struck wording. photos.js check: all records pass.
- critic.mjs at 320, 390, 768, 1024, 1440: 0 blocking. Warnings: the FAQ read.wall (sources and credits, as the critic noted) at 320 and 390, and the Airbnb read.wall at 320 (the box after the worked example).
- build.js check: OK. build.js audit: this page shows only the two date lines (lead runs dates) and the A20 warning (no quote from a licensed person; we never write one).
