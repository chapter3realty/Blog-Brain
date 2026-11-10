# Build: /invest/condotel-financing/ (batch 2026-11-b, Lane U)

Built 2026-11-10 from `PLAN.md` and only VERIFIED or CORRECTED rows of `facts.md` (CORRECTED rows in the verifier's wording, `VERIFY.md`). Not deployed, not committed.

## Files

- Spec (new; the live page had none): website copy `specs/condotel-financing.js`, author "devin".
- Page: `chapter3realty/invest/condotel-financing/index.html`, built with `node tools/mkpage.js specs/condotel-financing.js`.
- Data: `data/2026-11-b/invest-condotel-financing/` (unchanged, plus `photos.json`: a copy of the licence record of the USGS 2011 oceanfront towers aerial that /hoa/reserves/ and /buyers/va-loans/ already show; the image files stay in `images/2026-10-d/hoa-reserves/`).
- Read only: `data/2026-11-b/invest-condo-buildings/building-fees.json` (sizes for the four buildings, rows 14 and 32; `regimes-out.json` is no longer read after fix round 1).

## Outline

Title "Condotel Financing in Myrtle Beach: Which Units Qualify" (55). H1 "Condotel financing in Myrtle Beach: which loans work, and which units qualify". Italic line at about half the H1's size: "A bank says no because of the building, not your credit. The size of the unit decides what works instead."

1. **Short answer.** Fannie Mae, Freddie Mac and FHA do not work in a hotel-run building; about 8 in 10 oceanfront condos for sale are in a rental program (row 11). Condotel loans work when the unit is big enough: one published program asks 500 sq ft, a bedroom, a full kitchen (row 9); more than 3 in 4 rental-program condos for sale have the size and the bedroom (row 12, CORRECTED). Slim offer bar: "Send us the building and the unit. We tell you which loan fits it." / "Ask which loan fits".
2. **Can you get a mortgage on a condotel in Myrtle Beach?** Yes, not with the usual loans (rows 1, 5, 6). Loan table, four rows, folds on a phone: conventional No (rows 1, 5), FHA No (rows 6, 7), VA only a home you live in, at least 6 of 47 (row 8, CORRECTED), condotel loans yes if the unit qualifies (rows 9, 10). One line on DSCR (link), one on cash.
3. **What makes a Myrtle Beach condo a condotel?** Fannie Mae's signs as a plain list (rows 1, 2, 3 CORRECTED with the past-use carve-out); 23 of 47 go by a resort or hotel name (row 16, CORRECTED); Freddie's own test (row 5 CORRECTED); "every condotel is non-warrantable", link to the sibling. Offer: "Send us the building".
4. **Which Myrtle Beach oceanfront buildings run like hotels?** Row 24 (what we see), the aerial photo, then four numbered buildings, each wow first, then the unit size and what it means for the loan, then its homes strip (pill fallback "Send me units at <building>"):
   - Landmark Resort: H2Oasis, three 40-foot slides, only for rental-program guests; rooms to three-bedroom penthouses (row 18). About 430 sq ft, more than half studios (row 14).
   - Ocean Creek Resort (fix round 1): 13 water features, from the Beach Club's oceanfront pool to an indoor pool and whirlpool; books guests on its own site; says TripAdvisor gave it a Traveler's Choice award (rows 21, 31). About 830 sq ft, mostly one and two bedrooms (row 14).
   - Compass Cove (fix round 1): tells owners "you are our partner and we treat your property as if we own it"; its desk takes reservations; six indoor and outdoor pools and seven hot tubs (row 20). About 550 sq ft, about 4 in 10 studios (row 14).
   - SeaWatch Resort (fix round 1, replaces Sea Mist): calls itself one of the best hotels in South Carolina, a concierge, a business center, a golf and entertainment desk, books on its own site (rows 19, 32). Typical unit just over 500 sq ft, most with a bedroom (row 32).
   Close: link to the directory.
5. **Condotel loan requirements: what does the unit need?** The 500 sq ft / bedroom / kitchen test (row 9); Fannie's 400 sq ft flag (row 4); the one chart, "More than 3 in 4 rental-program condos for sale have 500 square feet and a bedroom" (678 / 28 / 179, `raw/verify/beds-sqft.json`, rows 12 and 13); the five buildings with a typical unit under 500 sq ft (row 14); the program's building rules as a plain list (row 10); more down in words only (row 26 CORRECTED, link to the non-warrantable page; no percentage, rows 27 and 28). Offer: "Have us check my unit".
6. **Is a condotel worth the harder loan?** What you gain: the resort's desk and housekeeping, Sands' program-only amenities (rows 2, 22); about 780 units sold in a year in 43 directory buildings, about 1 in 15 (row 17, CORRECTED). What it costs: fewer lenders now and at resale (rows 1, 5, 6); transfer fee and dues in escrow, as in most HOAs (row 25). Links to /invest/condos/ and /invest/rental-program-vs-airbnb/.
7. **Who makes condotel loans for Myrtle Beach buildings?** BrickWood in the approved wording and the disclosure word for word (row 29); the building review we run before an offer.
8. **FAQ** (six, each answered on the page), sources, photo credit, legal note, end band "Found a resort condo you love?" with 854.333.2135 and "Send us the unit".

Every request button and pill links to `/contact/` (the site's pop-up). No offer repeats its words. No headline or button says finance or financing as an offer.

Struck from the live page and not back: the two non-warrantable H2s, "every week", "substantially larger down payment", the same-fees lines, the scarcity paragraph, the lender-declines story (not in `stories/stories.json`; ask the owner before it returns), "No FHA or VA".

## Gates (2026-11-10, final build)

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /invest/condotel-financing/` | 100/100 (SEO 100, AEO 100, Human 100, Trust 100), 1,613 words of prose |
| `node tools/claims-scan.js <site>` | 0 findings sitewide |
| `node tools/facts-check.js <site>` | 0 on this page. The 4 wrong sentences are older, on /buyers/relocating/from-massachusetts/, /from-virginia/ and llms-full.txt |
| `node tools/house-claims.js <page>` | 0 sentences |
| `node tools/struck-check.js --batch batches/2026-11-b --strict` | no struck wording on this page |
| `node tools/repeat-check.js <page> --strict` | passes |
| `node tools/critic.mjs ... --widths 390,1024,1440` | 0 blocking, 0 warning at each width |
| `node build.js check` | OK |
| `node build.js audit`, this page | only the mkpage date lines (schema dateModified and visible "Updated" vs sitemap lastmod; `node build.js dates` sets them), and the A20 note (no quote from Tim; none written, by rule) |
| `node tools/inbound.js <site> --only /invest/condotel-financing/` | 15 referring pages |

Checked by hand: no sentence over 28 words in the copy, no em or en dash, no sentence opens with "So" or "Here is", no rate, payment or down-payment percentage.

Shots (looked at full size, every screen at 390 and 1440, the middle at 1024): `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/invest-condotel-financing/shots/invest-condotel-financing-390.png`, `-1024.png`, `-1440.png`; critic JSON `.../rb1/invest-condotel-financing/critic.json`. Fixed after looking: a 1,078 px wall in the requirements section (the building rules became a list), the disclosure's line length, the close of the buildings section sitting tight under the last pill.

## For the lead (outside this page's folders)

1. **Strips.** Add `"/invest/condotel-financing/"` to `pages` of `landmark-resort`, `ocean-creek-resort`, `compass-cove` and `seawatch-resort` in `batches/2026-10-b/data/idx-places.json` (fix round 1: `seawatch-resort` replaces `sea-mist-resort`; do not add this URL to Sea Mist). Until then each strip shows its pill. Strip titles on the page: "Own at Landmark, where the resort's guests get three 40-foot slides"; "Ocean Creek condos, with 13 water features and its own booking desk"; "Compass Cove condos, at a resort that calls its owners partners"; "Own at SeaWatch, a resort that calls itself one of S.C.'s best hotels". SeaWatch had 5 condos for sale on 2026-11-09, so its strip is short but not empty.
2. **The page feed.** `idx-lib/feeds.js` maps this URL to `OCEAN_300` without `withStrips`, and `idx-lib/edge.js` drops the feed on a page with strip slots. Proposed, bold and true by its filter:
   - head: "Turnkey oceanfront resort condos, already in a rental program"
   - q: `towns(["Myrtle Beach", "North Myrtle Beach"], { type: "condo", status: "active", beds: "1", min: "120000", has: "oceanfront_building,vacation_rental_program" })`; add `furnished` to `has` if "turnkey" must be guaranteed (881 of 885 are flagged furnished, `counts.json`)
   - post: `{ minSqft: 500, yearMin: 1975 }` (the condotel size line; the default 900 would drop most of these units)
   - link `type=condo&has=oceanfront_building%2Cvacation_rental_program`, fallback `OCEAN_UNITS`, `withStrips: true`
   - If no new feed: `"/invest/condotel-financing/": { ...OCEAN_300, withStrips: true }` at least.
3. **Sibling.** `/invest/non-warrantable-condos/` keeps "non-warrantable" and the down-payment figures; this page uses the word only in the one line and the FAQ, and links there twice. Record in `review/SIBLING-OWNERS.md`: the condo-buildings page owns each building's amenities, fees and prices; this page uses one hotel-side fact per building (the desk, the booking, what the resort tells owners, the size). Done in fix round 1 for Landmark, Ocean Creek, Compass Cove and SeaWatch: none opens with the directory's line for that building.
4. **Owner question (optional).** The live page's story ("after a year of lender declines") is not in the story bank. If the owner wants it back, add it to `templates/owner-questions.md`.
5. `findings.json` still holds the first figures for rows 16 and 17 (22; 804 and 11,822). The spec types the verifier's values with a check that fails if the file changes; fix `build_findings.py` when convenient.

## Fix round 1 (2026-11-10)

See `REVIEW-1.md`. The four building entries no longer open with the directory's lines; Sea Mist is replaced by SeaWatch. For the lead, in addition to items 1 and 2 above:

6. **Sibling.** `/invest/rental-program-vs-airbnb/` "Does a rental program change the loan?" already links here once (about 300 words in that section). Keep it from growing; the loan detail lives here.
7. **Dates.** The byline still reads "Updated July 19, 2026" and `build.js audit` flags schema dateModified and the visible date against the sitemap. `node build.js dates` sets them at ship.
