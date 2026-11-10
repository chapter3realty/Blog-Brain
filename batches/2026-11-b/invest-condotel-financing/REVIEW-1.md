# Review 1: /invest/condotel-financing/ (fix round, 2026-11-10)

Reviewer: pass=false, score 8. Two blocking findings, six nits. Fixed in `specs/condotel-financing.js` (website working copy), rebuilt with `node tools/mkpage.js specs/condotel-financing.js`.

## Declined or changed from the reviewer's fix

- **Sea Mist: kept as the reviewer asked, with a wow first and the price second. Declined; Sea Mist is replaced by SeaWatch.** Sea Mist has no true wow that is not the directory's line:
  - Its one amenity wow, the Wahoo Waterpark, is struck in the CB ledger (row 50): the only source is a June 2023 release.
  - seamist.com is still a blank redirect (fetched again today, 114 bytes). Booking listings say all pools are closed with no reopening date.
  - Its price, its sales and its place (Family Kingdom, the 2nd Avenue Pier) are how /invest/condo-buildings/ opens Sea Mist. Keeping any of them repeats that page, which is the first finding.
  - SeaWatch was already on this page (the close). It now has its own entry, led by hotel-side facts from its own site that the directory does not use (rows 19 and 32): it calls itself one of the best hotels in South Carolina, guests have a concierge, a business center and a golf and entertainment desk, and it books stays on its own site.
  - Sea Mist stays where it belongs on this page: in the list of five buildings whose typical unit is under 500 sq ft.
- **"About 1 in 15": the reviewer asked for a comparison, which needs a new source.** I added plain arithmetic from the same row instead: "In a resort of 300 units, that is about 20 sales a year." It makes the figure usable with no new claim.
- **Down payment sent to the sibling page: kept.** The reviewer is right that the no-percentage rule is the reason (rows 27 and 28, PLAYBOOK A17). Not a defect.
- **Byline date, strips and page feed: not this page's to fix.** They are for the lead (BUILD.md items 1, 2 and 7). Do not ship until both strip fixes are done and `node build.js dates` has run.
- **Sibling /invest/rental-program-vs-airbnb/: not touched** (another page). Its "Does a rental program change the loan?" section already links here once. BUILD.md item 6 asks the lead to keep it from growing.

## What changed

1. **The four building entries no longer open with the directory's line** (blocking 1). Each opens with a true thing from the resort's own site that /invest/condo-buildings/ does not use for that building:
   - Landmark (not flagged): kept the H2Oasis line, the hotel side (only program guests). New strip title: "Own at Landmark, where the resort's guests get three 40-foot slides". The old title was close to the directory's "home of the H2Oasis water park".
   - Ocean Creek: "Ocean Creek has 13 water features, from the oceanfront pool at the Beach Club to an indoor pool and whirlpool. The resort books its guests on its own site, and says TripAdvisor gave it a Traveler's Choice award." The sunset, the 57 acres and the gate are gone (the directory's). New row 31, VERIFIED-BY-FIXER, fetched live today; row 21's verifier had read the same two facts. Heading "Ocean Creek Resort: 13 water features and its own booking desk". Strip "Ocean Creek condos, with 13 water features and its own booking desk".
   - Compass Cove: "Compass Cove tells owners, 'you are our partner and we treat your property as if we own it.' Its desk takes guests' reservations, and it says its aim is to earn owners the most rent. Guests have six indoor and outdoor pools and seven hot tubs." Row 20, VERIFIED, from the Homeowner Services page the verifier saved. Today the page returns 403 to a script. The "23 water features" line is gone (the directory's). Heading "Compass Cove: a resort that calls its owners partners". Strip "Compass Cove condos, at a resort that calls its owners partners".
   - SeaWatch replaces Sea Mist (blocking 2; see above). Heading "SeaWatch Resort: a concierge for your guests". Strip "Own at SeaWatch, a resort that calls itself one of S.C.'s best hotels". Size line: "Most units for sale have a bedroom, and the typical one is just over 500 square feet, right at the size line." From CB's pull, row 32. Only 5 were for sale, so the page gives no exact figure. A spec check fails if the size leaves 500 to 550 sq ft or if half or more are studios.
   - The close drops its SeaWatch sentence (now entry 4) and keeps the directory link.
   - The Sea Mist price checks (CB rows 6 and 7) and the `regimes-out.json` read are removed from the spec. The North Myrtle Beach mention went with the old Ocean Creek line. Row 21's source calls the resort "north-end Myrtle Beach", so that mention was not supported anyway.
2. **Photo credits** (nit): the kit's plural line "Chapter3 Realty resized these photos and cropped some of them." is removed on this one-photo page. A spec check guards it. Only "Chapter3 Realty cropped and resized the photo." remains.
3. **"Units that sell"** (nit): added "In a resort of 300 units, that is about 20 sales a year."
4. **Places in prose:** dropping North Myrtle Beach took A10 to 67%. The buildings intro now says "oceanfront listings in Horry County" (row 11 is the county count) and "These four Grand Strand resorts". A10 is back to 100.
5. **Ledger:** rows 31 (Ocean Creek) and 32 (SeaWatch) added to `facts.md` as VERIFIED-BY-FIXER, with sources and limits.
6. **BUILD.md:** strip item 1 now names `seawatch-resort` in place of `sea-mist-resort`, with the new titles. Outline and sibling notes updated. Items 6 (sibling) and 7 (dates) added.

## Gates after the fix (2026-11-10)

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /invest/condotel-financing/` | 100/100 (SEO 100, AEO 100, Human 100, Trust 100), 1,613 words of prose |
| `node tools/claims-scan.js <site>` | 0 findings |
| `node tools/facts-check.js <site>` | 0 on this page (the 4 older wrong sentences are elsewhere: /buyers/relocating/ and llms-full.txt) |
| `node tools/house-claims.js <page>` | 0 sentences |
| `node tools/struck-check.js batches/2026-11-b/facts/invest-condotel-financing-struck.json <page>` | no struck wording |
| `node tools/repeat-check.js <page> --strict` | passes |
| `node build.js check` | OK |
| `node build.js audit`, this page | only the date lines (`node build.js dates` sets them) and the A20 note (no Tim quote, by rule) |
| `node tools/inbound.js <site> --only /invest/condotel-financing/` | 16 referring pages |
| `node tools/critic.mjs http://127.0.0.1:8871 /invest/condotel-financing/ --widths 320,390,1440` | 0 blocking, 0 warning at each width |
| By hand, the copy | no sentence over 28 words, no em or en dash, none opens with "So" or "Here is", no rate, payment or down-payment percentage |

I looked at the shots of the buildings section at 390 and 1440. The four entries are evenly spaced under thin rules. Each heading fits in two or three lines on a phone. The pills sit under each entry, and the close sits clear of the last pill. Shots: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb2/invest-condotel-financing/shots/invest-condotel-financing-{320,390,1440}.png`. Critic JSON: `.../rb2/invest-condotel-financing/critic.json`.
