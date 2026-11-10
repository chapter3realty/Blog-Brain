# Build: /invest/strategies/dscr-loans/ (batch 2026-11-b)

Writer, 2026-11-10. Spec: website `specs/dscr-loans.js` (new; the live page was hand-made). Built with `node tools/mkpage.js specs/dscr-loans.js`. Facts: only VERIFIED and CORRECTED rows of `facts.md`, CORRECTED rows in the verifier's wording. Data read from `data/2026-11-b/invest-strategies-dscr-loans/findings.json` and `chart-rent-split.json`; the spec stops if a number it prints moves.

Files touched in the website working copy:
- `specs/dscr-loans.js` (new)
- `chapter3realty/invest/strategies/dscr-loans/index.html` (generated)
- `data/2026-11-b/invest-strategies-dscr-loans/photos.json` (new: one licence record, Garden City Beach, copied from the page that first showed it; the Longs aerial was dropped in fix round 1)
- `chapter3realty/images/2026-11-b/invest-strategies-dscr-loans/share.jpg` (new: our share card, from `tools/ogcard.js` run on a copy of the page)

## Outline

- **Title:** DSCR Loans in Myrtle Beach, SC: Which Rentals Pass the Ratio (60 characters)
- **Description:** DSCR loans in Myrtle Beach and South Carolina: the formula, what ratio passes, how much of the rent the tax and HOA dues use here, and Airbnb income rules. (155)
- **H1:** DSCR loans in Myrtle Beach: which rentals here pass the ratio?
- **Italic line:** A house inland passes with room to spare. A nightly oceanfront condo can fail before the loan.
- **Hero tiles:** 46 to 49% (of the rent left for the loan on an inland house; fix round 1); 75 to 80% (of nightly income that lenders count); 1.25 (the ratio we aim for).
- **Short answer:** the loan qualifies on the rent; the bill it divides by; the three sheets ask for 1.00 or more; the middle 3-bedroom house in Longs or Carolina Forest leaves 46 to 49 percent for the loan at 1.25; the middle oceanfront two-bedroom rented by the night fails before the loan.
- **Slim offer bar:** "Send us a listing. We work out its ratio before you offer." / Have us check a listing's ratio.

1. **What is a DSCR loan, and does it work in South Carolina?** The definition; the one allowed sentence of row 3; the formula does not change at the state line, the local numbers do; the appraiser's rent counts (row 37).
2. **How do you calculate DSCR on a Grand Strand rental?** The formula card: the formula in words and the worked Carolina Forest house (rent $2,230, tax about $392, insurance about $275, HOA $100, principal and interest "your lender's quote"); 34 percent used, 46 percent left at 1.25. Special assessments and flood insurance (row 2 wording). Link to the rental analyzer. **Offer:** Have us fill in the numbers.
3. **What is a good DSCR for a rental, and what if it is below 1.00?** The ratio scale (a drawn line with 0.75, 1.00, 1.15, 1.25, then one line each; rows 5, 6, 26).
4. **Which Grand Strand rentals pass a DSCR loan?** The rent-split chart: six stacked bars from `chart-rent-split.json`, title "On a beach condo, the HOA fee and the tax use most of the rent before the loan". Three plain lines (houses, the city condo, the oceanfront condo with row 20's limits). Taxes stop more deals than insurance (row 40), row 11's wording.
   - **Longs: new houses, and the most rent left for the loan.** Wow: the Longs house leaves the most of the rent of the six; half the houses sold were sales by builders (280 of 607); 2 in 5 homes built 2010 or later; 3 in 100 houses in the high-risk flood zone; plan on no builder incentives (row 38). Photo: a new Longs subdivision from above. Strip `dscr-longs-houses`, "Longs houses: the strongest DSCR numbers we found"; fallback pill "Send me 3-bedroom rentals in Longs".
   - **Carolina Forest: newer homes, out of the flood zone.** Almost no houses in the high-risk zone; half its homes built 2007 or later; house 46 percent; condo 44 percent at HUD's 2-bedroom figure. Strip `dscr-carolina-forest-houses`, "Best DSCR rental buys in Carolina Forest" (fix round 1); fallback pill "Send me Carolina Forest houses that clear 1.25".
   - One line to /invest/where-to-buy/ (no area ranking here).
5. **Can you use Airbnb income for a DSCR loan in Myrtle Beach?** Yes at some lenders; 75 to 80 percent counted; the cut against HUD's yearly rent (row 22 with "part of the year"); refinance only at two of three sheets; the rules must allow it (rows 10, 25, 23, 24).
   - **Garden City Beach: a beach condo that still passes.** Wow: a condo by the sea whose dues are under half the oceanfront tower's, leaving about 20 percent for the loan. Photo: condo buildings on the beach at Garden City Beach, marsh behind. Strip `str-garden-city-beach-condos`, "Best Airbnb opportunities in Garden City Beach" (the owner's own title).
   - Links to /invest/airbnb-income/ and /invest/str-vs-ltr/. **Offer:** Have us check a condo's numbers.
6. **Can you get a DSCR loan on a condotel or non-warrantable condo here?** Rows 29, 28, 30; link /invest/condotel-financing/. **Pill:** Have us check the building before you offer.
7. **How much down, what credit score and what else does a DSCR loan need?** Plain list: down payment (BrickWood's range, the one place it appears, BrickWood named), credit floors 660 to 720, reserves in months, the prepayment fee in words, the price of the loan (row 27, attributed). Then the owner's sentence form: call us, we work with our affiliated lender to give solid numbers.
8. **Who can get a DSCR loan: an LLC, a first-time investor, a Canadian?** Plain list: LLC (row 32 wording), first-time investor and home buyer (row 33), Canadians (row 31), using it yourself (row 4 wording, Reg Z link), several rentals (link). **Offer:** Send me rentals that clear 1.25.
9. **How does Chapter3 help with a DSCR purchase on the Grand Strand?** Five steps with what we do at each (rows 39, 24, 11, 40, 6, 41); the Zillow-links story as told.
- **FAQ (8, each answered above):** a good DSCR; without tax returns; rent below the bill; Airbnb income; appraisal; LLC; first-time home buyer; Canadians.
- **Sources line:** Fannie Mae B3-6-03, Reg Z comment 3(a)-4, SC Code 12-43-220, the 2026 levy, HUD, Clovered, City of Myrtle Beach. The three program sheets are described, not named or linked. AirROI named, not linked. Photo credits, image schema, legal notice.
- **End band:** "Send us the listing you are looking at." / Send us the listing. Phone 854.333.2135.

Every button links to /contact/; the site's pop-up does the rest. No two offers use the same words. None offers a loan.

## What the page does not carry, on purpose

- No rate, no payment amount, no dollar figure beside the loan. The loan's part is "your lender's quote" or a share of the rent.
- No lender name but BrickWood. The program sheets are "the three program sheets we read".
- Not the 80 percent oceanfront line, not the HUD 40th percentile line, no AirROI link.
- No calculator (the analyzer owns that search), no area ranking (where-to-buy owns it), no condotel depth (condotel-financing owns it).
- No quote for Tim Nash. The A20 audit note (a named person's sentence) stays a warning.

## Gate results (2026-11-10)

- `SCORE_TODAY=2026-11-09 node tools/score.js --only /invest/strategies/dscr-loans/`: **98/100** (SEO 100, AEO 100, Human 96, Trust 100). Partial: P2 numbers 4.9 per 100 words (a numbers page; trimmed from 5.4); P6 one "legal residence", the verifier's row 11 wording, kept.
- `node tools/struck-check.js batches/2026-11-b/facts/invest-strategies-dscr-loans-struck.json <page>`: no struck wording.
- `node tools/claims-scan.js <site>`: 0 findings.
- `node tools/facts-check.js <site>`: 0 on this page (4 wrong sentences site-wide, all on /buyers/relocating/from-massachusetts/, /from-virginia/ and llms-full.txt, not this page).
- `node tools/house-claims.js <page>`: 0 sentences to scope or source.
- `node tools/critic.mjs http://localhost:8876 /invest/strategies/dscr-loans/ --widths 390,1024,1440`: **0 blocking, 0 warning** at all three widths. (The first run blocked on "no real photo"; two licensed photos were added.)
- `node build.js check`: OK, safe to deploy.
- `node build.js audit`: on this page only the two mkpage date lines (dateModified and the visible "Updated" against the sitemap) and the A20 warning.
- `node tools/inbound.js <site> --only /invest/strategies/dscr-loans/`: 16 referring pages.
- Every sentence on the page is 28 words or fewer. No em dash, no "Here is", no sentence opening with "So".

## Shots

Full-page screenshots, looked at in sections at full size:
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/invest-strategies-dscr-loans/shots/invest-strategies-dscr-loans-390.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/invest-strategies-dscr-loans/shots/invest-strategies-dscr-loans-1024.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/invest-strategies-dscr-loans/shots/invest-strategies-dscr-loans-1440.png`

Fixed after looking: the chart's 100 percent line ran through the row labels (now a white mark on the oceanfront bar and an "All the rent" pointer under it); the scale and chart cards had thinner padding than the formula card (now one card style). The two new strips are empty in the preview until their places exist; their pills show instead.

## For the lead (outside this page's folders)

1. **feeds.js:** `DSCR.head` to "Best DSCR rental buys near Myrtle Beach: the most bedrooms for the money" (true by its ranking, price per bedroom). Add `withStrips: true` for this URL: `"/invest/strategies/dscr-loans/": { ...DSCR, withStrips: true }`. Without it, the edge leaves the feed off, because the page carries its own strips.
2. **idx-places.json** (`batches/2026-10-b/data/idx-places.json`), then regenerate places.js:
   - `dscr-longs-houses`: `{ near: "33.91344,-78.75415", miles: 5, type: "house" }`, pages `["/invest/strategies/dscr-loans/"]`, index false.
   - `dscr-carolina-forest-houses`: `{ near: "33.77000,-78.92500", miles: 3, type: "house" }`, pages `["/invest/strategies/dscr-loans/"]`, index false.
   - Add `/invest/strategies/dscr-loans/` to `str-garden-city-beach-condos.pages`.
3. **data/headlines.json:** its entry for this URL still holds the old title and H1 ("Qualify on the Rent"). Update it to the new title and H1, or drop it, before `tools/headlines.js` runs.
4. **Dates:** run `node build.js dates` at release; the page carries mkpage's placeholder date.
5. **Optional referring links** (16 already): on words already there in /invest/airbnb-income/ (lenders and nightly income), /invest/long-term-rental/ (its ratio card) and /invest/where-to-buy/.
6. **Garden City Beach wow:** done in fix round 1. The owner decided it on 2026-11-10. Each place now opens with a carried, verified place detail (facts rows 44 to 46): the Waccamaw River at Longs, "The Hulk" trails at Carolina Forest, the Garden City Pier. See REVIEW-1.md.
