# Build: /invest/cash-to-close/ (batch 2026-11-b)

Writer, 2026-11-10. Spec: website working copy `specs/cash-to-close.js`, rewritten in the style of `home-value.js`, `garden-city.js` and `dscr-loans.js`. Built with `node tools/mkpage.js specs/cash-to-close.js`. Facts: VERIFIED rows and CORRECTED rows (verifier's wording) from `facts.md`. Every number is read from `data/2026-11-b/invest-cash-to-close/example.json` and checked against its ledger row by a `must()` line in the spec. Nothing was committed, deployed, stitched or dated.

## Files touched

- `specs/cash-to-close.js` (rewritten)
- `chapter3realty/invest/cash-to-close/index.html` (built)
- `data/2026-11-b/invest-cash-to-close/photos.json` (new: one photo record, copied unchanged from `data/2026-11-a/submarkets-myrtle-beach/photos.json` in fix round 1, USGS, public domain; the image stays at its first path, `images/2026-11-a/submarkets-myrtle-beach/oceanfront-towers-from-the-ocean-1200w.webp`)
- `chapter3realty/images/2026-11-b/invest-cash-to-close/share.jpg` (new: our own share card, `tools/ogcard.js` run on a copy of the page)

## Outline

- Title: "How Much Cash to Close on a Myrtle Beach Rental? | Chapter3" (59). Description (150): "Cash to close on a Myrtle Beach rental: about $7,000 on the middle condo and $12,800 on the middle house, beyond the down payment. Plus lender reserves."
- H1: "How much cash do you need to close on a Myrtle Beach rental?" Italic line at about half size: "Beyond the down payment."
- Hero tiles: about $7,000 (middle condo), about $12,800 (middle house), 6 months of reserves.
- Short answer: the two totals with their prices; what the money pays; six months of reserves, with the tax, insurance and dues part ($5,600 and $4,300).
- Top offer bar: "Send us a listing. We work out its cash to close before you offer." Button "Work out my cash to close" to /contact/ (fix round 1).
1. **How much cash do you need to buy a rental property here?** The worked example card (rows 24 to 26): loan costs, mortgage recording, first year of insurance, the two cushions ("up to"), the total, and reserves set apart as "shown but not spent". What loan costs are; about 3 and 3.5 percent of the price; the down payment from your lender, with "our affiliated lender, BrickWood Mortgage, a separate company"; link to the DSCR page. Wow line (row 18): about 100 condos for sale near the middle condo price are on the ocean, and their listings say you can rent them by the night; their middle fee about $765. Condo strip, then the house line (382 and 21 of 498, said as "most" and "about 20") and the house strip. Offer: "Have us build a listing's cash to close".
2. **Are closing costs higher on an investment property?** Yes, about $1,500 more on loans that report costs. Chart (glass bars): $4,900, $5,500, $6,400, the rental bar labelled "287 loans that report costs". Lender's fee 1.6 and 0.8 percent. About 3 in 10 purchase loans for a home the buyer will not live in; about 2 in 3 rental loans are business loans and report no costs. Link to /buyers/closing-costs/ (which owns SC closing costs and the calculator).
3. **What is included in cash to close?** Row 8 in the verifier's wording; the Closing Disclosure sections A to H as a plain list (rows 7, 9, 10), with the settlement statement note; reserves not in it; deed recording fee (row 27); earnest money (row 30); the low-appraisal story (stories.json `low-appraisal-reconsideration`, no amounts, no quotation marks).
4. **How many months of reserves does a lender want on a rental?** Fannie Mae 6, 2, 0 (row 19); DSCR programs 3 and 6, 12 for a first-time investor (row 21); other financed homes, 2 to 6 percent, not counting the home you live in (row 20), link to /invest/financing-multiple-rentals/; the example's figures (row 26); a cash buyer has no reserves rule.
5. **Why is the tax escrow so large on a rental?** 6 percent against 4 (row 13); the yearly tax in the example, about $3,540 and $4,370 (rows 12, 13); bill mailed October 1, due January 15, the contract splits the year (row 16); the escrow cushion and business credit (row 11 in the verifier's wording). Link to /buyers/property-taxes/. Offer: "Have us work out a listing's tax".
6. **What does a condo add at closing?** The seller's unpaid dues and the statement (row 29); no state cap on the association's fees, link to /hoa/estoppel-and-transfer-fees/; many fees include the building's insurance, middle fee about $550 counts in reserves (rows 14, 17). Link to /invest/landlord-insurance/. Offer: "Have us price a condo's dues and fees".
7. **What else do you pay before and after closing?** Flood policy (row 28 in the verifier's wording, "federal flood insurance program"); licenses (row 31 corrected: city license for every rental, the two $50 state licenses only if you book nightly guests yourself, no county dollar figures), link to /invest/accommodations-tax/; first repairs and furniture. Link to /invest/run-the-numbers/.
- FAQ (6, each answered on the page): includes the down payment; months of reserves; cash buyer and reserves; deed recording fee; can it change (the story); earnest money.
- Sources (11 links) and a short method note; photo credit; legal notice (brokerage, not a lender; BrickWood a separate company).
- Bottom offer: "Know your cash to close before you make an offer." Button "Send us a listing" to /contact/.

Every request button goes to /contact/, where the site opens the short pop-up. The live page's buttons to /invest/run-the-numbers/ are gone; that page is now a text link.

Kept off the page: any rate, loan payment or down-payment percentage (rows 22, 23); the county license dollar figures; an HOA fee range; the owner's title premium and the attorney fee (not found); the penalty waiver and "an attorney runs every closing" (no verified row in this ledger).

## For the lead

1. **Two new idx places** (not in `batches/2026-10-b/data/idx-places.json`; I did not edit it). The place filter takes `has`, `min` and `max` (added 2026-11-10), so the titles are true as written:
   - `ctc-oceanfront-str-condos`, name "oceanfront condos", pages ["/invest/cash-to-close/"], q {near "33.69000,-78.89200", miles 25, type "condo", has "oceanfront_unit,str_allowed", min "200000", max "265000"}, index false. Strip title on the page: "Oceanfront condos you can Airbnb, near $232,000" (97 homes on 2026-11-10).
   - `ctc-rental-houses`, name "rental houses", pages ["/invest/cash-to-close/"], q {near "33.69000,-78.89200", miles 25, type "house", has "rentals_allowed", min "330000", max "395000"}, index false. Strip title: "Houses you can rent out, near Myrtle Beach" (382 homes; fix round 1).
   Until they exist, each strip is empty and its fallback shows: the oceanfront photo and an offer pill for the condos, an offer pill for the houses.
2. **The edge feed: please change it (fix round 1, blocking in REVIEW-1).** Today `idx-lib/feeds.js` line 336 gives this URL `CUT_RENTAL` ("Rental-friendly homes with a price cut"), which has no `withStrips`, so `idx-lib/edge.js` line 265 drops it because the page has its own strips. The page then shows no homes under the opening, and none at all until the two places above exist. The owner wants homes close to the top (2026-10-26, 2026-11-08). Change line 336 to:
   `"/invest/cash-to-close/": RENT_BY_NIGHT,`
   `RENT_BY_NIGHT` ("Oceanfront condos you can rent by the night", line 248) already has `withStrips: true`, and it is the page's wow fact. It is the feed /hoa/rental-restrictions/ uses. Do not keep `CUT_RENTAL`: its "with a price cut" title sells the discount. Checked in a scratch copy of functions/ and idx-lib/ with this one change (the working copy's idx-lib/ was not touched): the feed sits under the hero tiles and byline, above the short answer, at 320 and 390 px. In the preview the stand-in CRM does not apply the `has` flags, so the feed fell back to "Condos for sale on the Grand Strand", as edge.js intends for a title it cannot make true.
3. **Inbound links.** `node tools/inbound.js` counts 6 today: /guides/, /invest/canadian-buyers/, /invest/condos/, /invest/financing-multiple-rentals/, /invest/landlord-insurance/, /invest/run-the-numbers/. Worth adding, on words already there: /buyers/closing-costs/ (the cannibalization fix asks for it; a protected page, your call), /invest/strategies/dscr-loans/, /hoa/estoppel-and-transfer-fees/, /buyers/property-taxes/ and the /invest/ hub.
4. **Owner question (optional, from facts.md):** the attorney fee, owner's title premium and HOA charges from our own settlement statements would fill the three lines the example leaves out. Default: the page is correct without them, and stays out of `DOWN_PAYMENT_OK_PAGES`.

## Gates (final build)

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /invest/cash-to-close/` | 100/100 (SEO 100, AEO 100, Human 100, Trust 100), 1,742 words |
| `node tools/claims-scan.js <site>` | 0 findings sitewide |
| `node tools/facts-check.js <site>` | 0 on this page; the 4 WRONG lines are on /buyers/relocating/from-massachusetts/, /buyers/relocating/from-virginia/ and llms-full.txt, not this page |
| `node tools/house-claims.js <page>` | 0 sentences to scope or source |
| `node tools/struck-check.js invest-cash-to-close-struck.json <page>` | no struck wording |
| `node tools/repeat-check.js <page> --strict` | passes |
| `node build.js check` | exit 0, "Safe to deploy" |
| `node build.js audit` | no FAIL on this page except the mkpage date lines (schema dateModified and visible "Updated" against the sitemap lastmod, set by `node build.js dates`). Two notes (~): no quote from a named licensed person (none exists for this page; we never write one), 14 sentences over 22 words (none over 28). |
| `node tools/critic.mjs http://localhost:8874 /invest/cash-to-close/ --widths 390,1024,1440` | 0 blocking, 0 warning at every width |

Fixed on the way: a mkpage note ("set by"), the sources line (over 90 words), five struck phrases (the HMDA figures now name the group "loans that report costs" in the same sentence; the cushions read "up to"), four sentences over 28 words, the table spilling 35 px past the card at 390 px, two walls of text (the tax figures and the condo items are now plain lists), and the chart's values running past its card.

## Shots

Folder: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/invest-cash-to-close/shots/`
- `invest-cash-to-close-390.png`, `invest-cash-to-close-1024.png`, `invest-cash-to-close-1440.png` (full page)
- `invest-cash-to-close-390-1.png` to `-6.png` (critic crops)
- Slices I read at full size: `.../rb1/invest-cash-to-close/slices/` (p = 390, m = 1024, w = 1440)
- Critic JSON: `.../rb1/invest-cash-to-close/critic.json`. Gate logs: `score.txt`, `claims.txt`, `facts.txt`, `check.txt`, `audit.txt` in the same folder.

Read as a stranger: the answer and both totals are on the first phone screen; the table reads at a glance with the two amounts side by side; one photo, one chart, one card style; offers after sections 1, 5 and 6, each tied to its section. In the preview the two strips are empty (their places do not exist yet), so the photo and the pills show in their place.
