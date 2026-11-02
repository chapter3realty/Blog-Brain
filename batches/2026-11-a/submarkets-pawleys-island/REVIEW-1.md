# Review round 1: /submarkets/pawleys-island/

Three reviewers (critic 7, reader 8, owner 6.5) failed the page. Every change below is in the spec, `specs/pawleys-island.js`. New facts are ledger rows 52 to 58, marked VERIFIED-BY-FIXER for the lead to re-check.

## What changed, by finding

### Critic, blocking

1. **Flood height read as water depth.** Rewritten: "FEMA's flood height for island houses is 12 to 16 feet. It is measured from a fixed survey level, not from the ground, so it is not the depth of water at a house. The town requires the floor of a new house to sit 3 feet above that." (Row 17. "Sets" is banned by mkpage, so the critic's exact wording could not be used.)
2. **Tax table cut off at 320.** First column is now the price alone ("$580,000", "$900,000", "$2,450,000"), headers are "Price / Main home / Second home", and a note under the table says which price is which and that a second home includes a rental. Cell padding is smaller under 480 px. The critic tool shows no table scroll at 320.
3. **Empty homes strip.** The page's own strip is removed. The edge gives no feed to a page that has its own strip, so the page's feed was off. Now the edge's feed for this page, "Top homes in Pawleys Island" (idx-lib/feeds.js, owner's title pattern), sits right under the title area. Checked in the preview: it renders with sample homes. NEEDS.md item 7 updated. No shared file was changed.

### Critic, nits

- AE explained: the flood section now lists both zones as two cards ("Storm waves are expected here..." / "Water rises in a big flood, but big waves are not expected").
- Fees sentence split: "The fees are $44 a year on the island. West of the highway they are $96, for storm water and household fees together."
- "Its 155 oceanfront houses sold for..." removed. Now: "Its oceanfront houses sell for more than the island's: about $3.6 million at the middle over three years."
- "Island houses tend to stay in families." (row 40 wording).
- "The town's share is filed with the town each month." (no "owner").
- Rental value: added from public records (row 52): about $27 million in rent on the island in 2024, about $70,000 a year per house that is not a main home, with the average's limits stated. AirROI stays struck.
- Wraps: top button is "Ask us to watch the island"; the top line is "Island houses rarely list. We watch the island and call you."; the area table and the flood chip are gone; the tax table's long first cells are gone.
- Small text at 320: storm chart type is 21 units (about 12 px at 320), decade labels are "'50" to "'20" with a caption that explains them; setback map labels are bigger and on short lines.
- "Atlantic Ocean" on the North Causeway aerial moved onto the water (prep.py; image rebuilt).
- Area map: the town is shaded and its dashed line is thicker; the four parts are named on the map.
- Sources: OpenFEMA now links the v3 NfipPolicies dataset (`/api/open/v3/NfipPolicies`; the fema.gov page for v3 could not be confirmed, fema.gov returns 403 to scripts).
- Deck under the H1 is now a sentence: "Pawleys Island is the south end of the Grand Strand: old beach houses on an island, with most homes that share its name on the mainland."
- "Updated June 12, 2026": unchanged. It is set by `node build.js dates`, which the lead runs. The audit flags it, as it flags every page not yet dated.

### Reader, blocking

1. **$2.45 million: one year or three?** Every mention now says three years: the short answer ("over three years one sold for about $2.45 million at the middle"), the island entry and the FAQ. The comparison table that said "past year" is gone. (Both medians are $2,450,000 in findings.json, but the page now uses only the three-year one.)
2. **Flood height:** as critic 1.
3. **No full yearly cost.** The "Wind and homeowners insurance: By house" row is cut. The worked example now says what it leaves out ("Before the mortgage, and before wind and homeowners insurance"), and the insurance part says why: "Their prices depend on the house's height, age and roof, so we get quotes on the house before you offer." The page has no verified source for a wind or private flood premium range on the island; we did not invent one. The rental section now gives what rentals take in (row 52), which answers "would renting pay for part of it".

### Reader, nits taken

- "Community Rating System at Class 5" removed; now "The town's flood work earns island owners a 25 percent discount on these policies, and the prices below already include it" (rows 20, 58).
- "Certificate of appropriateness" is now "the board's approval".
- "Shore Protection Line ... stricter": kept as the town states it, and the page says we check where all three lines fall on the lot.
- Low-speed vehicle line removed. The golf cart FAQ now says the cart's registration address must be within 2 miles of the town limits.
- "$815,000 asking" removed, so asking and sold prices no longer clash.
- Number-heavy sentences cut (setback counts, beach project, inlet settlement, historic district size, king tide meeting date).
- Historic rules now say what they mean for an owner: "so a house can be nominated without its owner asking. The council decides."
- Groceries and shops added: the nearest grocery store (under 5 minutes), two grocery stores behind the island, the Hammock Shops (rows 53, 54), in the places and the drive table.
- Dates cut to: Hazel (1954), the 2026 historic rule, "since before 2000", the 2024 lodging tax year, and the Census year in the FAQ. Gone: 1985, 2012, 2017 and 2024 surveys, December 2025, 2019 and 2020, 2025 settlement, Ian/Matthew/Charley years in prose, October 15, 1954, 1972, Ordinance 2026-02, June 2025 to May 2026.

### Owner, blocking

1. **List repeated before the first place.** The numbered legend and the four-part table are cut. The map names the four parts itself. The TOC is 10 links and shows in two columns from 900 px. H1 to the first place: about 4.1 screens at 390 px, down from about 7, and about one of those screens is now the homes feed he asked for at the top. Getting to 2 screens would mean dropping the feed or the short answer; I kept both.
2. **Places are field lists.** Each part now opens with what living there gives you, then one price paragraph, then its offer:
   - The island: one strip between ocean and creek, old summer houses in the middle, fishing, crabbing from the marsh bridges, three boat ramps, free parking, dogs on the beach, golf carts, 25 mph, the nickname. Two photos (the causeway aerial and a creek walkway).
   - Litchfield: more year-round neighbors (4 in 10 main homes), the Waccamaw Neck Bikeway, Huntington Beach State Park and Atalaya (rows 56, 57).
   - Behind the island: the Hammock Shops, two grocery stores, Pawleys Plantation's golf course, the bike path, the HOA point in one sentence (rows 53 to 56).
   - West of US 17: most homes, nine of the area's golf courses by name, the nearest grocery store, few flood-zone houses (rows 54, 55).
   - The "sections below cover what that means" and the gated-communities referral are gone.
3. **Leads with price and fear.** Hero tiles are now: island houses, free beach parking, no town property tax, sold last year. No flood tile. The short answer opens with the place (the ocean, the creek, the historic summer houses, free parking) before the price, and keeps one flood line at the end. Order now: where it is, the four parts, living there all year, how often a house sells, the old houses, yearly costs, renting, flooding and storms, building on the ocean. "Arrogantly shabby" is in the island entry.
4. **No rental income.** New: "In 2024, guests paid about $27 million to stay on the island ... about $70,000 a house for the year, before the rental company's fee and other costs. That is an average. Some houses are never rented, and some of the rent is paid on the island's condos and other rooms." Two stat tiles. Source: the state's 2 percent lodging tax paid to the town for 2024 ($532,417), cross-checked against the town's own 3 percent fund (row 52). The "By house" row is cut.
5. **Homes feed low and empty.** As critic 3: the feed is now under the title area and fills.
6. **Too few pictures of the subject.** Added two Commons photos of the island: a walkway over the creek on the marsh side (Phoebe, CC BY-SA 4.0) and the north end at low tide with its row of houses (Phoebe, CC BY-SA 4.0). Walkway caption now "A wooden walkway over the dunes to the beach on Pawleys Island." The page now has 4 photos and 2 maps. An old house photo is still missing: the only Commons one shows a family name sign and a house number, so it is not used; the NRHP nomination photos need the lead's licence call (NEEDS.md 9). shot-list.md is updated with what is most needed (shots 8, 3, 4).
7. **Industry terms and number load.** VE and AE explained in a two-card list; CRS class, certificate of appropriateness, "unincorporated", ordinance number, "baseline at the crest" all reworded. Number density went from 6.1 to 4.3 per 100 words (score.js P2 from 25 percent to 78 percent). The beach section is down to two numbers, the setback paragraph to two.
8. **Dates everywhere.** See the reader list above. Score P3: 1 mention.
9. **Repetition and referrals.** The address line, the 40-minute drive, police, 69 percent, the 4 and 6 percent rule and the golf cart rules each appear once in the body now (FAQ answers are reworded, not copied). "Before you offer" in the body is down from 5 to 2 (insurance quotes, the oceanfront survey) plus the end band. "The difference matters to a buyer", "Our page on coastal insurance explains...", "The sections below ... cover what that means" are cut. The "Is Pawleys Island safe?" FAQ is cut.
10. **Missing searches.** Added: shops, restaurants (the Hammock Shops' two), groceries, the bike path, Huntington Beach State Park, golf; Pawleys vs Litchfield is now its own place entry with the trade-off (more sales, more year-round neighbors, higher oceanfront prices); winter is in "Living there all year" (most homes seasonal on Census Day, and in 2024 almost 6 in 10 lodging tax dollars came July to September and about 2 in 100 January to March). The "normal week" rule cards are gone; the life in them moved into the island entry.

### Owner, nits

- Desktop TOC: two columns from 900 px.
- Governor: "under a rice planter who became governor".
- Hazel line kept.
- The research the owner praised stays: 480 houses, 1 in 11, 6 in 10 passed down, tax-bill cities, the setback map, FEMA policy costs, the Roman-numeral cypress frames.

## Where I did not follow a finding, and why

- **The H1 "the upscale south end of the Strand."** Kept: it is the owner's liked headline in data/headlines.json. The deck under it now names "the Grand Strand", which answers the reader's "what is the Strand".
- **Two screens to the first place.** Not reached (about 4 at 390 px). The owner also asked for the homes feed at the top, and the short answer serves the search answer box. Both stay; everything else before the first place was cut or shortened.
- **A wind and private flood insurance figure.** Not given. No verified public source for the island; the page says we get quotes on the house.
- **Old house photo.** Not added; see owner 6.

## Gates after the fix

- `node tools/mkpage.js specs/pawleys-island.js`: built.
- score.js (SCORE_TODAY=2026-11-02): 100/100 (SEO 100, AEO 100, Human 99, Trust 100); only P2 below the bar, at 78 percent (4.3 numbers per 100 words).
- claims-scan: no finding on this page. facts-check: no finding on this page. house-claims: 0. struck-check: no struck wording. photos.js check: all records pass.
- critic.mjs at 320, 390, 768, 1024, 1440: 0 blocking. Warnings: read.wall on the short answer, two place paragraphs at 320, and the FAQ (FAQ answers are short paragraphs by design).
- build.js check: OK. build.js audit for this page: only the date mismatch (the lead's `build.js dates`) and the A20 note (no Tim Nash quote; we may not write one).
- Shots looked at: top of page and feed at 390, the four places at 390, the area map at 390 and 1440, the TOC at 1440, the tax table, setback map and storm chart at 320.
