# Build: /invest/non-warrantable-condos/ (batch 2026-11-b)

Built 2026-11-10 from PLAN.md, with VERIFIED and CORRECTED rows only, in the verifier's wording (VERIFY.md). The spec is new: website working copy `specs/non-warrantable-condos.js`, author "devin". The URL is kept.

## Data rebuilt first

VERIFY.md asked the lead to rebuild the three data files on the CB verifier's fixed regime names. Done in the page's own data folder:
- `regimes-fixed.json`: CB `regimes.json` with `raw/verify/regimes-cb-fixes.json` applied. CB's own file is not changed.
- `pull_owners.py` now reads `regimes-fixed.json` (an optional second argument names another file). Re-run against the county's parcel layer.
- `build_findings.py` re-run. `findings.json` and `chart-owner-homes.json` are identical to the verifier's `raw/verify/*-cb-fixes.json`: 43 buildings, 11,471 units, 528 taxed as a home (4.6 percent), 42 of 43, Maisons Sur-Mer 27.8, 8,092 owner addresses outside SC.
- The first run is kept in `raw/*-before-cb-fixes.json`. README updated.

## Outline

- **Title** (61): "Warrantable vs Non-Warrantable Condos: 43 Myrtle Beach Towers". The searched words first ("warrantable vs non warrantable condo" is the page's top query), then the page's own count.
- **H1**: "Warrantable vs non-warrantable condos in Myrtle Beach". Italic line: "Why so many oceanfront buildings carry the word, which loans still work, and how we check a building before you offer."
- **Description** (160): Fannie Mae's rules, why 42 of 43 oceanfront buildings raise its investor flag, and loans that still work.
- **Short answer**: the definition and cash or a loan made outside those rules; then 42 of 43 buildings with at least 3 in 4 units not taxed as the owner's home, and that Fannie Mae tells lenders to look harder at that.
- **Top bar**: "Send us the building. We read its papers before you make an offer." Button "Ask about a building".
1. **What is a non-warrantable condo?** Rows 1, 2, 3. Three short facts under thin rules: you can still buy it; there is no list to look up; the answer can change. One line and a link to the condotel guide.
2. **What makes a condo non-warrantable?** Fannie Mae's reasons in three groups, as plain lists: run for renting (75 percent flag, the hotel test with the name carve-out, one owner over 20 percent, timeshare), the money (dues, reserves with Freddie Mac's 15 percent in its own words, master insurance, business space), hard stops (critical repairs with the carve-out, lawsuits). Rows 4 to 13, 31. **Offer**: "Heard "non-warrantable" from a lender?" / "Find the reason".
3. **Why are so many Myrtle Beach oceanfront condos non-warrantable?** Our county count (rows 16, 17), the USGS photo of oceanfront towers, the inland comparison (row 18), **the chart** "At the beach, few condos are the owner's home. Inland, about half are." (five bars from the data files), what the owner's story says about a building run for renting (row 28), about 8 in 10 listings in a rental program (row 20). H3 "Timeshare weeks and big owners": timeshare deeds at Anderson Ocean Club, Towers on the Grove and SeaWatch (row 19, the verifier's new fact); three other buildings, unnamed, where one company holds more than 1 in 5 units. H3 "The master insurance rule": the $20 million example (row 13), link to the HO-6 page.
4. **Which Myrtle Beach condo buildings are non-warrantable?** No list for buyers (row 3). Three numbered buildings with the most owners' homes, each with its wow first, then the county record, then its homes strip (pill until the strip fills):
   - Margate Tower: about 330 feet, the tallest building in Myrtle Beach, units to the 29th floor (CB rows 60, 61); in Kingston Plantation (CB FIXER-VERIFY row 30); about 1 in 5 units a home; 4 of 8 for sale in a rental program (row 23). Strip "Margate Tower condos, high up in Myrtle Beach's tallest building".
   - Maisons Sur-Mer: the most owners' homes of any oceanfront building, the only one under the 75 percent line by the tax records (rows 17, 23); 3 of 14 for sale in a program; every unit for sale a two-bedroom of about 1,400 sq ft, on Shore Drive (CB row 4 data). Strip "Make Maisons Sur-Mer your two-bedroom beach home".
   - Ocean Forest Plaza: every one of 14 for sale allows pets and lists an indoor pool, and in 12 the listing says the fee pays the power bill (CB row 4 data); about 1 in 4 units a home; 5 of 14 in a program (row 23). Strip "Bring the dog: oceanfront condos at Ocean Forest Plaza".
   Then **the table** of all 43 buildings (units taxed as the owner's home; condos for sale in a rental program, a count under 8 listings, else the share and the count), by name, with the listing day from `program.json`. No owner share column: three of the six top holders are timeshare sellers (row 19). Link to the building directory. **Offer**: "Picked a building? Send it to us." / "Have us check my building".
5. **Can you get a loan on a non-warrantable condo?** Yes; **the comparison** "Where one non-warrantable loan program says yes" (Fannie Mae against one published program, Newrez named only in the sources; rows 4, 7, 8, 10, 15); the loans: outside Fannie Mae's rules, DSCR, cash, FHA (9 approved of 117; only Sea Mark Tower at the Caravelle; row 26), VA (at least 6 of 47, row 25). H3 "How much do you need down?": about 25 against about 20 percent for a rental the buyer will not stay in more than 14 days a year, "Figures from BrickWood Mortgage" (row 29, A17); a larger down payment, no number, for a home. BrickWood in the approved words and the disclosure (row 30).
6. **Should you buy a non-warrantable condo?** What you gain (run for renting, about 780 sales a year, a reason that can be fixed) and what it costs (more cash, fewer lenders now and at resale, reasons that stop every loan). Link to /invest/condos/. **Offer**: "Weighing one building as a rental or a beach home?" / "Ask about one building".
7. **How do you find out if a condo is warrantable before you make an offer?** What our agents read: the questionnaire, budget and reserves, master policy, minutes and assessments, lawsuits, the county's records; a loan officer at our preferred lender reads the lender's side. Link to /hoa/documents/.
- **FAQ** (6): the difference, a list, FHA or VA, how much down, can it become warrantable, a second home. Each repeats an answer on the page.
- **End band**: "Love an oceanfront condo but not sure a loan will work?" / "Send us the building".
- Every button links to /contact/; the site's pop-up does the rest. No button or headline says finance, financing or get a loan.

Cut from the live page, as facts.md "Struck" lists: "our licensed mortgage team", both stories, the dates on the insurance rules, "usually cheaper", the Surfside line, "closed a loan last week", "FHA, VA and USDA are out", "the kind of brokerage we are", the same-day promise. Also left out: the wind pool counts (row 14 CORRECTED leaves no sourced meaning for a buyer) and the self-employed line (no row).

## Gates (final build)

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /invest/non-warrantable-condos/` | 100/100 (SEO 100, AEO 100, Human 100, Trust 100), 2,371 words of prose |
| `node tools/claims-scan.js <site>` | 0 on this page |
| `node tools/facts-check.js <site>` | 0 on this page (4 wrong sentences elsewhere, all old: llms-full.txt and others) |
| `node tools/house-claims.js <page>` | 0 sentences |
| `node tools/struck-check.js` (this page's list, CB's, CF's) | no struck wording. A first build fired row 17's "44 of 45" on Caravelle's table cell (44 of 45 listings); the cell now gives the share. |
| `node tools/repeat-check.js --strict`, `structure-check.js --strict` | pass |
| `node tools/critic.mjs http://localhost:8875 /invest/non-warrantable-condos/ --widths 390,1024,1440` | 0 blocking, 0 warnings |
| `node build.js check` | OK |
| `node build.js audit` | no FAIL on this page except the mkpage date lines (dateModified and "Updated" against the sitemap). Notes: 3 explicit dates in body copy (the reserve rule's January 4, 2027, and the listing day twice, from `program.json`), no quote from a named licensed person (we write none). |
| `node tools/inbound.js <site> --only /invest/non-warrantable-condos/` | 18 referring pages |

## Shots

Looked at full size at 390, 1024 and 1440 px. Fixed after the first look: the building table's cells wrapped on a phone (short column heads, cells that do not wrap); the FHA condotel sentence sat alone under the list (moved into the FHA item); "a lender's review decides" was said three times in section 4 (now twice).

- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/invest-non-warrantable-condos/shots/invest-non-warrantable-condos-390.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/invest-non-warrantable-condos/shots/invest-non-warrantable-condos-1024.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/invest-non-warrantable-condos/shots/invest-non-warrantable-condos-1440.png`
- critic JSON: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/invest-non-warrantable-condos/critic.json`

The preview does not run the site's edge, so the page feed and the three strips are empty in the shots; each strip shows its pill.

## For the lead

1. **Page feed** (idx-lib/feeds.js maps this page to CASH_OCEAN, "cash only", which reads as a warning). Proposed, bold and true by its filter:
   - head: **"Oceanfront condos in buildings run for renting"**
   - q: `towns(["Myrtle Beach", "North Myrtle Beach"], { type: "condo", status: "active", min: "100000", has: "oceanfront_unit,vacation_rental_program" })`; post `{ yearMin: 1975 }`; fallback `OCEAN_UNITS`; link `type=condo&has=oceanfront_unit%2Cvacation_rental_program`; **`withStrips: true`** (the page carries three named strips; without it the edge drops the feed).
   - Not checked live from here: confirm 10 or more results.
2. **Places** for `batches/2026-10-b/data/idx-places.json`:
   - `margate-tower`: add "/invest/non-warrantable-condos/" to `pages`.
   - `maisons-sur-mer` (new): name "Maisons Sur-Mer", q `{ subdivision: "Maisons Sur", type: "condo" }`, index false, pages ["/invest/non-warrantable-condos/"]. 14 for sale on 2026-11-09 (CB `building-fees.json`), all at 9650 Shore Dr.
   - `ocean-forest-plaza` (new): name "Ocean Forest Plaza", q `{ subdivision: "Ocean Forest Pl", type: "condo" }`, index false, pages as above. 14 for sale, all at 5523 N Ocean Blvd.
3. **Stronger wow lines, not on the page** (no verified row yet; a verifier should check them before they replace the current lines):
   - Maisons Sur-Mer: its walk to the Dunes Golf and Beach Club, host of the PGA Tour's 2026 Myrtle Beach Classic (CB row 79 verified the club facts and measured Sands Ocean Club, 9550 Shore Dr, at 0.20 mile; measure Maisons, 9650 Shore Dr, the same way). Also the FAA obstacle file line 45-000344, a 300-foot building on the Maisons Sur Mer parcels, the second highest in CB's strip box after Margate (CB WOW-VERIFY row 60 note; vertical accuracy code C).
   - Ocean Forest Plaza: no candidate found. The Ocean Forest Hotel's site is Ocean Forest Villas, not the Plaza (Wikipedia); do not use the hotel.
4. **Referring pages** to add in body text (owner, 2026-11-09): /invest/condo-buildings/, /buyers/condo-in-litigation/ (on "fails the warrantability standard"), /hoa/documents/, /invest/strategies/dscr-loans/, /sell/sell-my-condo/. /invest/condos/ should drop the keyword "non-warrantable condo" (cannibalization fix in PLAN).
5. **Sibling owners**: Margate Tower's height and floors are /invest/condo-buildings/'s; this page says them once. Maisons Sur-Mer's and Ocean Forest Plaza's lines here are this page's; offer them back to the directory as a second use. "Condotel" is not in this page's title, H1, description or keywords.
6. **Owner questions** (`templates/owner-questions.md`, not yet asked): may the page say "If you are self-employed, the bank-statement loan you would need anyway also works in a non-warrantable building."? May either of the live page's two stories be told (the buyer on Social Security; the master policy rewritten mid-deal)?
7. **Photo partner** (optional): "Margate Tower from the sand at Kingston Plantation, full height, no people as the subject." The page now reuses /invest/condos/'s USGS 2011 aerial (public domain; record copied to this page's `photos.json`, files not moved), also the share image.

## Files

- Spec: `<website>/specs/non-warrantable-condos.js`
- Page: `<website>/chapter3realty/invest/non-warrantable-condos/index.html`
- Data: `<website>/data/2026-11-b/invest-non-warrantable-condos/` (`regimes-fixed.json`, `photos.json`, rebuilt `owners.json`, `findings.json`, `chart-owner-homes.json`, `table-buildings.json`; `pull_owners.py` and README changed; `raw/*-before-cb-fixes.json`)
