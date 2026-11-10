# Review 1: /buyers/waterfront-homes/ (fix round)

Reviewer: pass=false, score 8. Three blocking findings and twelve nits. All three blocking findings are fixed in `specs/waterfront-homes.js`. Not deployed, not committed. `build.js stitch`, `dates` and `llmsfull` were not run.

## What changed

**Blocking 1. The flood table now uses one measure.**
- Every row is the share of lots that reach any A or V zone (row 16). Cherry Grove channels over 99% (NMB row 13, 679 of 682). Waccamaw River about 99% (452 of 456). Oceanfront houses about 98% (new row 35). Intracoastal Waterway about 70% (688 of 985).
- The VE share has its own row: oceanfront houses in the zone where waves are expected, about 60%.
- The rows are ordered from most to least. Percent fits the narrow column on a phone. The "in 100" wording wrapped onto two lines.
- Entry 3 now uses the same measure. "Flooding is lighter here than on the beach, the channels or the river. About 3 in 10 waterway house lots are wholly outside FEMA's high-risk flood zone." The middle-of-lot figure is gone from the page.
- Entry 6 already used this measure ("all but 4 of about 460") and is unchanged.
- The FAQ flood answer now says nearly every lot on the beach, the channels and the river reaches the zone, and about 3 in 10 waterway lots are wholly outside it.
- Row 35 (VERIFIED-BY-FIXER): 406 of 411 lots reach the zone in the researcher's run, and 501 of 512 in the verifier's corrected run (`vwf/alt/run/deeds-findings.json`). Both round to about 98%. The page prints the share, never the count, because row 1 allows no count above "more than 400". The spec stops the build if any of these counts moves.

**Blocking 2. The FAQ "How much more" answer.**
- The Cherry Grove comparison is gone.
- The answer now covers the beach: a house resold for about $2.2 million, against about $615,000 for houses nearby off the water (row 1).
- It covers the waterway: about twice the houses nearby (row 3).
- It covers Garden City's salt marsh: about twice the other houses on that side of the beach road (row 5).

**Blocking 3. The lake entry now has a wow and a photo.**
- New heading: "Lakefront homes: a pontoon boat out back". The pick-list line reads "A pontoon boat on a lake, for less".
- It opens in Plantation Lakes: owners take pontoon boats out on a lake with about 15 miles of shoreline, and many homes back onto the lake. The amenity area has day and overnight docks and a boat ramp. Boats are limited to 19 feet, with small motors.
- Source: row 37, reused from the neighborhoods ledger (rows 218, 239 and 251). I re-read the POA page today and it still says "15 MILES OF SPECTACULAR LAKE" and "pontoon boating".
- Plantation Lakes links to `/buyers/best-neighborhoods/#plantation-lakes`, which owns the neighborhood.
- Then the 9 lake houses for sale (row 29), then "most lake and pond houses for sale ask far less" with the under-$300,000 line (row 11), then the dock-permit line.
- Photo: the licensed public-domain NAIP aerial of Plantation Lakes from /buyers/best-neighborhoods/. Its record is copied into `photos.json` with `reused_from`, and the file is used where it is. `image-meta` passes.

**Nits taken.**
- Price chart: a line under it says lake houses have no bar, because the deeds do not show reliably which houses sit on a lake, and the 429 for sale asked about $450,000 at the middle. It replaces the line about deeds and asking prices.
- Entry 3 now opens with the boater's wow. "Toll-free" and "more than 1,243 miles" are gone. Row 24's limit is kept: "behind the Atlantic coast", and Norfolk or Florida.
- Entry 2: "Of those condos for sale, about 700 list a unit that faces it" (row 10: 685 of the 1,105).
- FAQ label: the FAQ title is now "Waterfront home FAQ". It is the label in "On this page" and the H2, because mkpage uses one field for both. It is two short lines at 320 px, down from three or four.
- Bridge table: "Grissom Parkway bridge" (new row 36, VERIFIED-BY-FIXER from county data, described below). "Cable car, about a mile south of SC 22" (Coast Pilot Mile 356.4 against 355.5, already verified in row 19). "Railroad bridge, next to US 501" (row 19's own wording).
- Tide: cut "In the middle of the waterway the drop is about 2 feet." The chart bar already says it.
- Story: moved from entry 1 to entry 3, after the boat paragraphs. There it makes its point (beachfront near the waterway, for the boat), told exactly as WF row 28. Row 36 does not come from the story.
- Marsh strip title: "Crabbing water out back: homes on the salt marsh". It is true for every home in that search, because crabbing with drop nets needs no license on any salt water (row 25). "Crab off your own dock" would not be true: not every marsh listing has a dock (row 12). Updated in BUILD.md item 1 for the lead.
- BUILD.md item 4 now says the lake entry uses the licensed aerial. A ground photo from the photo partner would still be better.

**How row 36 was checked.** Horry County's road layer 1 has "ROBERT M GRISSOM PKY" (S26-1315) within 250 m of the Mile 360.5 point. Layer 21 calls the water at that point "Intracoastal Waterway". The straight-line distances to the Grande Dunes and US 501 bridges match the Coast Pilot's mile gaps: 2.3 miles against 2.2, and 4.9 against 4.9.

## Declined, with the reason

- **Waccamaw photo caption ("on the Georgetown County side").** We have no licensed Conway-side photo. The caption is true, and BUILD.md item 4 already asks the photo partner for the cypress at Conway.
- **No bridging sentence for the story.** No verified row gives the distance from the North Myrtle Beach beach to the waterway. Moving the story to the waterway entry makes its point without a new claim.
- **Homes strips (wf-*).** They are for the lead (BUILD.md item 1), because idx-places.json is not mine to edit. The pills show until then.
- **Critic read.wall at 320 px.** This is a false hit, as the reviewer said: two short paragraphs, a pill and the offer box. No change.
- **Byline "Updated July 25, 2026".** It is set by `node build.js dates` at release.
- **Bare "FAQ" as the label.** mkpage uses the same field for the H2. "Waterfront home FAQ" keeps the topic in the heading.

## Gates after the fix (final build)

| Gate | Result |
|---|---|
| `node tools/mkpage.js specs/waterfront-homes.js` | wrote the page; every `must()` check passes |
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /buyers/waterfront-homes/` | 100/100 (SEO, AEO, Human, Trust 100), 2,559 words. One partial: P2 number density 3.6 per 100 words, 97% (it was 3.5; the lake facts added numbers) |
| `claims-scan.js` | 0 findings |
| `facts-check.js` | 0 on this page (the same 4 site-wide hits as before, on other pages) |
| `house-claims.js` | 0 |
| `repeat-check.js --strict` | passes |
| `structure-check.js --strict` | passes |
| `struck-check.js --batch batches/2026-11-b --strict` | buyers-waterfront-homes: no struck wording (28 patterns) |
| `image-meta.js --only /buyers/waterfront-homes/` | passes (8 photos) |
| `inbound.js --only /buyers/waterfront-homes/` | 6 referring pages |
| `critic.mjs http://localhost:8875 … --widths 320,390,1024,1440` | 0 blocking. 1 warning, the read.wall false hit at 320 described above. No horizontal scroll at any width |
| `node build.js check` | OK |
| `node build.js audit` | Only the two mkpage date lines (`build.js dates` sets them at release), plus the same two "~" notes as before |

## Shots looked at

- Full pages: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/buyers-waterfront-homes/shots-r1/` (320, 390, 1024 and 1440 px).
- Tiles: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/buyers-waterfront-homes/tiles-r1/`.
- Flood table at 390 px: one figure per row, each on one line.
- Lake entry: the aerial sits beside the text at 1440 px and under the second paragraph on a phone.
- Waterway entry: wow, story callout, then flood and price.
- Bridge table: every row names its place.
- Critic JSON: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/buyers-waterfront-homes/critic-r1.json`.
