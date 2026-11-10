# Build: /hoa/rental-restrictions/ (batch 2026-11-b, Lane U)

Built 2026-11-10 from `PLAN.md` and only VERIFIED or CORRECTED rows of `facts.md` (CORRECTED rows in the verifier's wording, `VERIFY.md`). Not deployed, not committed. `build.js stitch`, `dates` and `llmsfull` not run.

## Files

- Spec (new; the live page was hand-made): website copy `specs/hoa-rental-restrictions.js`, author "devin". It replaces the page at the same URL.
- Page: `chapter3realty/hoa/rental-restrictions/index.html`, built with `node tools/mkpage.js specs/hoa-rental-restrictions.js`.
- Data: `data/2026-11-b/hoa-rental-restrictions/` unchanged, plus `photos.json` (new): copies of two licence records, both public domain, already on the site. The USGS 2011 oceanfront towers aerial (`images/2026-10-d/hoa-reserves/`, also the share image) and the NAIP 2023 Coquina Harbour basin aerial with labels (`images/2026-11-a/submarkets-little-river/`). No image file was added or changed.
- Read only: `pull-2026-11-10/findings.json`, `table-named-rules.json`, `table-amend-votes.json`, `community-papers.json`. The verifier's towns (rows 43 to 46) and row 56's corrected counts are typed in the spec with a check that fails if the file moves.

## Outline

Title "Can an HOA Ban Rentals in Myrtle Beach? 15 Real Rules" (53). The plan's map title was "... Recorded Rules"; the hook is now a fact the page delivers (CRAFT 7). Description 152. H1 "Can an HOA stop you from renting your home in Myrtle Beach?" Italic line at about half the H1's size: "Yes, if its papers say so. We read the rental rules of 15 Grand Strand communities." The hero sub is hidden (the short answer says it).

0. **Short answer.** Yes, when the rule is in the recorded papers; SC law has no exemption for owners who bought first (rows 10, 11, 13). North Beach Plantation allows "any form of rental"; Del Webb at Grande Dunes and Robber's Roost need a year (rows 52, 30, 61). Slim offer bar "Have us read the rules". The edge feed sits under the opening (see "For the lead" 1). "On this page" in columns between thin rules.
1. **Can an HOA ban rentals in South Carolina?** Four plain lines: recorded to be enforced, board rules recorded by January 10 (row 10); the master deed, defined once, states lease limits, owners follow it strictly (rows 11, 12); no cap and no grandfather rule (row 13); the 2015 Richland County case and the 2017 Hilton Head case (rows 14, 16). The unwatched-rule point (row 15). The city as the second gate in one sentence and a 3-row Yes/No table that does not fold on a phone. One link to /invest/str-rules/.
2. **What do HOA rental rules say in real Grand Strand communities?** Seven numbered places, most open first, each wow first, then the rule linked to its own document, then what it means, then its homes strip (offer pill until the strip fills):
   1. North Beach Plantation: the 7.5-acre island between the ocean and Whitepoint Swash, 2.5 acres of pools, lazy river, swim-up bar (row 53); "any form of rental", the Exchange by the day to the year, guest registration and the door lock and fob system (row 52, CORRECTED wording).
   2. Sand Dunes Oceanfront Tower: water park with slides, oceanfront lazy river (invest-condo-buildings row 38, named in row 55); "permanent or transient residential use", nothing limits renting (row 55, CORRECTED wording; heading "papers that allow short stays"); zoning checked per unit.
   3. The Farm at Carolina Forest: the wild Venus flytrap on the state land along its north side (row 39); no board rule may ban leasing, up to six months, leases in writing, names within 10 days (row 37); no limit on the share rented, from the minutes (row 38).
   4. Coquina Harbour, Little River: 78 boat-slip parcels and the $500,000 boat liability rule (row 41, CORRECTED wording); the harbour aerial; 12-month leases (row 40).
   5. Del Webb at Grande Dunes: beach club in the base dues, as Pulte said in 2017 (row 32); 12 months once a year, whole home, written, 10 days (row 30); the under-55 tenant rule (row 31).
   6. Seasons at Prince Creek West: clubhouse with a full-time activities director and a ballroom, the builder in 2013 (row 34); one-year lease (row 33).
   7. Myrtle Trace, Conway: 42 acres of common land, fifteen ponds (row 36); a tenant 55 or older living there full time, 30 days to leave (row 35).

   Then "Eight more rules we read": one plain table, each place linked to its document, shortest stay first. The Atrium, Sugarloaf (near Longs), Bellasera (homes, North Myrtle Beach), Villa Firenze, Intercoastal Village Resort, Robber's Roost, Surf Estates (North Myrtle Beach), Waterfall (no town) (rows 42 to 48, 61). These have no verified wow, so the page does not sell them. Then the two stories, as observations (rows 27, 28). Mid offer "Send us the community".
3. **Can the HOA change the rental rules after you buy?** Yes, by the papers' vote; no SC exemption (row 13). The Atrium: 1997 meeting, 93.75 percent present, two-thirds of all owners, filed 1998, no lease of 30 days or less, no later change posted (row 48). Its master deed's two approvals, owners and first-mortgage lenders at 66 percent (row 49). Never "two-thirds was all it took". Table of five more communities' votes, four rows (row 50; Crescent Shores and Yacht Club Villas share one row). The 2015 vote case (row 17). How often papers change: 10 amendments to The Farm's declaration (its sixth to fifteenth) and 7 to Berkshire Forest's (row 56, CORRECTED). Link /hoa/developer-control-turnover/. "Buyers from Florida": a three-row table, SC / Florida condos / Florida HOAs (row 18, CORRECTED: "consent"). Mid offer "Ask us to read the papers".
4. **Can an HOA ban Airbnb but allow yearly leases?** Yes: 11 of the 15 bar stays of a month or less and allow longer; Waterfall names Airbnb and VRBO (rows 40 to 48, 61). The 90-day lodging-tax definition and Surf Estates' own line (rows 21, 44). One chart, "Few houses with an HOA fee say nightly rentals are allowed": about 4 in 100, about 1 in 4 (townhouses), about 3 in 10 (no fee) (rows 2, 3, 9). The same city, two answers: North Myrtle Beach 27 of 119, fewer than 1 in 4; 86 of 135, about 6 in 10 (row 4, CORRECTED; row 23). Carolina Forest 1 of 297 (rows 5, 24). Condos about 7 in 10, one line and a link to /invest/condos/ (row 1). The towers aerial. A strip "No HOA, and you can rent it by the night" with an offer box as its fallback.
5. **Does a building full of renters change the loan?** FHA project approval 50 / 35 / 30 percent (row 58, CORRECTED), what counts as owner-occupied, single-unit approval and the 10 percent or two-unit limit (row 59, CORRECTED), Fannie Mae's rental-pool, owner-stay, profit-sharing and hotel-service tests (row 20). Links to /invest/non-warrantable-condos/ and /invest/condotel-financing/. No rate, no payment, no lender named.
6. **What other HOA rules apply only to renters?** Pets at Teal Lake Village, Cypress Bay II and North Beach Towers; the golf cart space at Carolina Keyes (row 54). "Pets" as the rules say; no line on children or occupancy.
7. **How do you find out before you buy?** Three numbered "we" steps: the address (link /invest/str-rules/), the papers (rows 10, 60: index online, pages not; one North Myrtle Beach manager posts 210 files for 62 associations), the seller's addendum answer, "No Representation" (row 19). End band "Tell us the plan before you buy." with 854.333.2135 and "Ask us to check a home".
8. **FAQ** (five, each answered on the page in other words): grandfathered; "residential use only" and Airbnb; renter registration; what counts as short-term; renting in a 55+ community.

Every button and pill links to `/contact/` (pills to `/contact/?place=<place>`). The site opens its short pop-up. No two offers use the same words. Sources: 15 short names; each community's paper is linked where its rule is stated. "General information, not legal advice" in the sources note.

Cut from the live page and not back: the home-office story (not in `stories/stories.json`), "the city permit you were counting on is worthless", "quietly ends", "waiting periods", "Plenty of our clients specifically want ...", "Verified July 2026", the pets-and-porches paragraph. Not on the page: Avalon, Waterbridge, any town for Waterfall, "in Longs" for Sugarloaf, row 41's "most", row 57's count, the 2019 FHA figures, the "2 people per bedroom" line, Cypress Bay II's line on children, any claim that a local document shows a total ban or a cap.

## Gates (2026-11-10, final build)

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /hoa/rental-restrictions/` | 99/100 (SEO 100, AEO 100, Human 99, Trust 100), 2,326 words of prose. The one partial: P6, "master deed" 5 times. It is a word readers search; it is defined the first time and used where the verifier's wording uses it. |
| `node tools/claims-scan.js <site>` | 0 findings sitewide. An earlier draft fired `interest-rate` on "qualify at 35 percent" (FHA owner occupancy); reworded to "be approved with 35 percent". |
| `node tools/facts-check.js <site>` | 0 on this page. The 4 wrong sentences are older, on /buyers/relocating/from-massachusetts/, /from-virginia/ and llms-full.txt |
| `node tools/house-claims.js <page>` | 0 sentences |
| `node tools/struck-check.js batches/2026-11-b/facts/hoa-rental-restrictions-struck.json <page>` | no struck wording |
| `node tools/repeat-check.js <page> --strict` | passes |
| `node tools/critic.mjs http://localhost:8872 /hoa/rental-restrictions/ --widths 390,1024,1440` | 0 blocking, 0 warning at each width |
| `node build.js check` | OK |
| `node build.js audit`, this page | FAIL lines only the mkpage date lines (schema dateModified and visible "Updated" vs sitemap lastmod; `node build.js dates` sets them). Warnings: 3 dates in body copy (the January 10 recording deadline, Florida's July 1, 2021 cut-off, the 2012 to October 2026 index range: each is the rule or the count's range), "may/might" 17 times (mostly the laws' own "may not"), A20 (no quote from Tim; none written, by rule). An earlier "Rather" was fixed. |
| `node tools/inbound.js <site> --only /hoa/rental-restrictions/` | 8 referring pages |

Checked by hand on the built text: no sentence over 28 words (three were split), no em or en dash, no sentence opens with "So" or "Here is", no rate or payment, BrickWood not named (the page does not need it), Devin only in the byline.

Shots (looked at full size, every screen at 390 and 1440, the middle at 1024): `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/hoa-rental-restrictions/shots/hoa-rental-restrictions-390.png`, `-1024.png`, `-1440.png`; critic JSON `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/hoa-rental-restrictions/critic.json`. Fixed after looking:
- The city-and-papers table folded on a phone and lost its first column's name. It is now a Yes/No table that stays a table.
- The Coquina Harbour photo sat in a card. It is flat now, like the other photos on the rebuilt pages.
- The eight-rules table carried a heading and a caption that said the same thing.
- The votes table repeated The Atrium's paragraph and gave Crescent Shores and Yacht Club Villas the same words twice. The Atrium is told once, and the two share one row.
- The South Carolina and Florida table said the South Carolina line twice. It now has three rows.
- The towers photo caption repeated the condo share above it.
- A button broke as "no-" / "HOA". It now reads "Send me houses with no HOA".

## For the lead (outside this page's folders)

Strip heads below were made bold in review round 1 (`REVIEW-1.md`).

1. **The page feed.** `idx-lib/feeds.js` maps this URL to `RENTALS_OK` ("Condos where the HOA allows rentals") without `withStrips`, and `idx-lib/edge.js` drops the feed on a page with strip slots. Proposed, bold and true by its filter:
   - head: "Oceanfront condos you can rent by the night"
   - q: `{ type: "condo", status: "active", has: "county_horry,str_allowed,oceanfront_unit" }` (652 for sale on 2026-11-10, map API)
   - link `type=condo&has=county_horry%2Cstr_allowed%2Coceanfront_unit`, fallback `RENTALS_OK`, `withStrips: true`
   - With a wow, if preferred: "Wake up to the sunrise, rent it by the night", adding `sunrise_view` (116 on 2026-11-10, PLAN).
   - If no new feed: `"/hoa/rental-restrictions/": { ...RENTALS_OK, withStrips: true }` at least.
2. **Strips.** Add `"/hoa/rental-restrictions/"` to `pages` of `sand-dunes-resort`, `the-farm` and `prince-creek-55` in `batches/2026-10-b/data/idx-places.json`. Add five new places (counts from the map API, 2026-11-10, status active):
   - `north-beach-plantation`: `{ subdivision: "North Beach Plantation" }`, 15 for sale. Head on the page: "North Beach Plantation: an island resort you can rent your way".
   - `coquina-harbour`: `{ subdivision: "Coquina Harbour" }`, 5 for sale. Head: "Coquina Harbour condos on a boat basin off the waterway".
   - `del-webb-grande-dunes`: `{ subdivision: "Grande Dunes - Del Webb" }`, 25 for sale. Head: "Del Webb homes with the beach club in the dues".
   - `myrtle-trace`: `{ subdivision: "Myrtle Trace" }`, 14 for sale. Head: "Myrtle Trace homes among fifteen ponds".
   - `no-hoa-nightly-houses`: `{ type: "house", hoa: "0", has: "county_horry,str_allowed" }`, 251 for sale. Head: "No HOA, and you can rent it by the night".
   Other heads on the page: "Sand Dunes condos for sale, with a lazy river on the oceanfront", "The Farm homes, where the board can't ban renting", "Seasons at Prince Creek West homes, 10 minutes from the MarshWalk". Until a place lists this URL, its slot stays empty and the offer pill (or, for the no-HOA strip, an offer box) shows.
3. **Cannibalization.** Two siblings ask this page's main question in their FAQ:
   - /invest/str-rules/ asks "Can an HOA ban short-term rentals even where the city allows them?"
   - /invest/new-construction-rentals/ asks "Can an HOA ban rentals in South Carolina?"
   Cut each to one sentence and a link here, on words already there, so this page owns the HOA question. /invest/str-rules/ keeps city and county law; this page gives it one table and two links. /hoa/south-carolina-hoa-laws/ (being rebuilt) should answer "can it ban rentals" in one line and link here.
4. **Referring pages.** 8 today (/guides/, /hoa/, /hoa/benefits/, /hoa/documents/, /hoa/hoa-vs-poa/, /hoa/tax-deductible/, /hoa/violations-and-fines/, /submarkets/garden-city/). Worth adding, on words already there:
   - /invest/mid-term-rentals/ ("the HOA minimum lease term")
   - /invest/new-construction-rentals/ ("Minimum lease term")
   - /buyers/55-plus-communities/del-webb-grande-dunes/ ("Leases must be at least a year long")
   - /invest/str-rules/ (its FAQ, item 3)
5. **Sibling fix** (carried from PLAN 8). /submarkets/carolina-forest/ says Avalon's recorded rules bar rentals under three months and Waterbridge is "reported to require" one-year leases. No ledger row supports either. Cut the two names, or pull the papers.
6. **Sibling owners.** /invest/condo-buildings/ owns the Sand Dunes and North Beach building profiles. This page uses one clause of wow for each and links there for Sand Dunes. Record in `review/SIBLING-OWNERS.md`.
7. **Owner question (optional, carried from 2026-11-a `PROPOSED.md`).** The live page's home-office story is not in the story bank. If the owner wants it back, add it to `templates/owner-questions.md`.
8. **Photo partner shot list.** Coquina Harbour's slips from the docks, The Atrium on North Ocean Boulevard, the North Beach Plantation entrance (PLAN 5.6). Not sent from here.
