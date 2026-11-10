# Build notes: /invest/financing-multiple-rentals/

## For the lead: places and feeds this page needs (the page does not edit idx-lib/, partials/ or idx-places.json)

1. **New place `cf-rentals`** (one-guide, `index: false`, pages ["/invest/financing-multiple-rentals/"]): Carolina Forest houses with 3 or more bedrooms where long-term renting is allowed. Query: near the `town-carolina-forest` point (33.77000,-78.92500, 3 miles), `type: "house"`, `beds: "3"`, `status: "active"`, `max: "420000"`, `has: "long_term_rental_allowed"`. Strip head: "Carolina Forest 3-bedroom houses where long-term renting is allowed". Why: the page's worked example is a 3-bedroom in Carolina Forest asking $390,000 (facts row 18). Until it exists, the spec uses the existing place `dscr-carolina-forest-houses` (houses within 3 miles of Carolina Forest) with the head "Carolina Forest houses that could be your second rental" (fix round 1; the old "... for sale now" head was the empty formula), and the pill "Get the houses for sale in Carolina Forest" as the fallback. When `cf-rentals` lands, change the slug in the spec (`STRIP`) and the head to "Carolina Forest 3-bedroom houses you can rent out long term".
2. **Edge feed title.** feeds.js maps this page to `TOWNHOUSE_RENTAL` ("Townhouses where long-term rentals are allowed"). Proposed bolder, true title for this page only: "Second-rental picks: townhouses that allow long-term renting". The search already filters `type=townhouse` and `long_term_rental_allowed`, so the title says only what the search makes true. Optional `withStrips: true`, since the page will carry its own strip.
3. **Photo partner shot list (fix round 1).** Send from the owner's Gmail with the next group email (`templates/photo-request-email.md`); not sent from here. Most wanted: a street of one- and two-story houses in Carolina Forest at eye level, from a public sidewalk, for /invest/financing-multiple-rentals/ beside "Why Carolina Forest works for a long-term rental" (it replaces the reused NOAA aerial). Then: the same kind of street in The Parks of Carolina Forest, and a Carolina Forest Boulevard view with the pines. No house numbers, plates or faces.
4. **Network host (optional).** Fannie Mae's Eligibility Matrix (singlefamily.fanniemae.com) still returns 403. Row 1 uses Freddie Mac's table, which is enough.

## Build report

Writer, 2026-11-10. Spec: website `specs/financing-multiple-rentals.js` (rewritten; the old one is kept at scratchpad `rb1/invest-financing-multiple-rentals/spec-before.js`). Built with `node tools/mkpage.js specs/financing-multiple-rentals.js`. Facts: VERIFIED rows, and CORRECTED rows in the verifier's wording only. Every figure is read from `data/2026-11-b/invest-financing-multiple-rentals/` (chart-equity-by-year.json, examples.json, hmda-rentals.json, from-2026-11-a/verify/verify-recounts.json) and checked against its row in the spec.

### Outline

- **Title** (58): How to Finance a Second Rental in Myrtle Beach With Equity. **H1:** How do you finance a second rental in Myrtle Beach? **Italic line** (about half the H1's size): "A typical house bought here in 2019 has gained about $130,000. That equity can pay the down payment on your second rental." (rows 16, 3). Sub kept for mkpage and hidden, as on /invest/strategies/small-multifamily/. **Description** 157.
- **Short answer:** savings or equity; a cash-out refinance on the first rental or a line of credit on the home you live in; the lender counts three quarters of the new rent and wants cash left after closing (rows 3, 1, 5, 11, 13). Slim offer: "Send us your two houses". "On this page" list.
- **1. How much cash can your first Myrtle Beach rental give you?** Chart (inline SVG, two widths): what a typical house gained by year bought, 2015 to 2025; title "A house bought here by 2020 has gained more than $100,000. One bought from 2022 to 2024 has gained nothing, or lost a little." Worked example card (2019 house, $234,000 / $364,000 / largest new loan $273,000 / owe $150,000 / $123,000 before closing costs; rows 1, 16, 17). Timing and LLC (row 2). Offer: "Send us your rental".
- **2. Can you get a HELOC on a rental property in Myrtle Beach?** Corrected rows 34 and 35 only: 17 lines reported on investment homes (defined once: rentals and homes bought to resell), "many lines of credit are not reported"; 35 of 56 turned down, about 6 in 10, against about 4 in 10 on homes owners live in. Row 42, then the line on the home you live in (rows 3, 43). **The plan's chart "not on rentals" is cut**: after the verifier's finding no safe chart had one message, so the counts are one sentence. No "rare", no "few lenders".
- **3. What reserves does Fannie Mae require when you own other financed homes?** Six months plus the share (rows 11, 12); plain tier table (2, 4, 6 percent, counting the new one per B2-2-03); the Carolina Forest house (rows 18, 19, 23); reserve card ($2,950 + $5,460 = about $8,400, before the loan and insurance; row 20); the kept reserve lines (row 13); the refinance's own reserve (rows 41, 4); link to cash to close. Offer: "Have us run the reserve".
- **4. How much of the new rent does a lender count on a second rental?** Three quarters, the rent schedule or a transferring lease (row 5); the $2,230 / about $1,670 example (row 18); the Carolina Forest photo; a year as a landlord (row 6) and a nightly rental (row 7) as a plain list; the Carolina Forest homes strip.
- **5. Is it hard to get a loan on a second rental in Myrtle Beach?** 1 in 7, 271 of 1,837 (row 37); the reasons as a bar chart in the verifier's order with "Other reasons" (row 38), so it does not read as a top three; what our agents check; link to non-warrantable condos. Offer: "Send us the listing".
- **6. What goes wrong when you buy a second rental in Myrtle Beach?** Three plain items: the paperwork, mild (row 29); the worst case as a number (rows 21, 22, 30); the story told once, live ending kept (row 28).
- **7. Is there a limit on how many rentals you can finance?** Short: ten, what counts (rows 9, 10); about 6,000 owners of two or more 6 percent homes, about 170 of ten or more (rows 26, 46 corrected, no "almost nobody"); LLC and DSCR (row 14); duplex counts as one.
- **FAQ** (4, each answered above): HELOC on my house; equity from one rental; does the lender hold reserves; LLC. **Bottom band:** "Plan the next one with us". Sources line (13 links) and note.
- Every button goes to /contact/. The lender is "our preferred lender" only; BrickWood is not named. No rate, no payment amount, no down payment or LTV percentage.

### Pictures

- Equity chart (our SVG from chart-equity-by-year.json), reasons chart (glass bars from hmda-rentals.json), the tier table.
- Photo: houses in The Parks of Carolina Forest from above (NOAA, public domain), the licence record of /invest/run-the-numbers/ (`data/2026-11-a/invest-run-the-numbers/photos.json`), reused with its credit; same example house. `critic.mjs` blocks a blog with no photo; a photo-partner shot of a Carolina Forest street would be better.
- Share card: `chapter3realty/images/2026-11-b/invest-financing-multiple-rentals/share.jpg` (tools/ogcard.js, set as `ogImage`).

### Gate results (final run)

- `score.js --only` (SCORE_TODAY=2026-11-09): **100/100** (SEO 100, AEO 100, Human 100, Trust 100), 1,469 words of prose.
- `claims-scan.js`: 0 findings sitewide.
- `facts-check.js`: 0 on this page (the 4 wrong sentences are on /buyers/relocating/from-massachusetts/, /from-virginia/ and llms-full.txt, not this page).
- `house-claims.js`: 0 sentences to scope or source.
- `struck-check.js` with `batches/2026-11-b/facts/invest-financing-multiple-rentals-struck.json`: no struck wording.
- `critic.mjs` at 390, 1024, 1440: 0 blocking, 0 warning.
- `node build.js check`: exit 0, "Safe to deploy".
- `node build.js audit`: on this page only the two mkpage date lines (dateModified and "Updated September 7, 2026" against the sitemap; `build.js dates` not run, as told) and two advisories: "no attributed sentence from a named licensed person" (we write no quote for Tim Nash) and "11 sentences over 22 words" (none over 28).
- Own checks: no sentence over 28 words in the body, no So or And openers, no "Here is", no em dashes.

### Shots (looked at full size)

- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/invest-financing-multiple-rentals/shots/invest-financing-multiple-rentals-390.png`, `-1024.png`, `-1440.png`; cut into screens in `shots/cut/`.
- Fixed after looking: the worked-example values wrapped on a phone ("about" dropped, "Figures are rounded" in the note), the tier table's long header, the phone chart's text size, a reasons paragraph that repeated the chart, an offer that repeated the sentence above it, the LLC sentence.

### For the lead and the owner's-eye reviewer

- **Title and H1 use "finance"** ("How to finance ...", "How do you finance ..."). They pass `LEND_HEADLINE` and carry the top search, but the owner wrote "FUCK NO" to "Finance Multiple Rental Properties in Myrtle Beach" on 2026-09-07. If the reviewer reads it as a loan company, the plan's fallback is title "Second Rental in Myrtle Beach: Equity, Reserves, Limits", H1 "How do you pay for a second rental in Myrtle Beach?" (two lines in the spec, plus a new share card).
- The plan's hero key-fact row was dropped: its second fact (17 lines of credit) was struck as a hero fact, and the italic line already carries the $130,000.
- Referring pages: 6 today (score S8). The lead may add links on words already there in /buyers/property-taxes/, /invest/llc/ and /invest/run-the-numbers/.
- Owner question still open (PLAN): does our preferred lender write a line of credit on a rental here? The page states only the county counts.
