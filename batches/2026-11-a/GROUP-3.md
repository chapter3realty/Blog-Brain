# Group 3: patch v1.28

Pages: /buyers/cost-to-own/, /invest/condos/, /invest/rent-prices/, /invest/where-to-buy/, /submarkets/murrells-inlet/. Patch: `website-patches/v1.28-five-guides-and-str-refresh.patch`, after v1.27.

## The line

The workflow ran on all five. The first review scored the pages 5 to 8. Cost to own, condos and Murrells Inlet passed the re-check. The last fix closed the wording items on rent prices and the phrasing items on where to buy. Where to buy's first area now starts about 2.7 phone screens down (3.8 at review).

## The lead's own checks

1. **Fixer facts.** An independent verifier checked every VERIFIED-BY-FIXER row: 10 verified and 4 corrected (cost to own 1, condos 3). The lead applied every sentence change:
   - **The wind line.**
     - Murrells Inlet straddles the county line; this corrects the verifier's "is in Georgetown County" against facts-check, registry fact pawleys-county.
     - The state has at times let its wind insurer write policies west of the law's line.
   - **"Busiest quarter"** is now "the top-quarter mark, rented all year".
   - **Grandfathered houses:** the 24 grandfathered houses in Myrtle Beach's zones are now noted.
   - **"Landlord policy on a house":** the insurance comparison now names a house.
   - **Nightly figures:** every one is now called a rental-data company's estimate for its area.
   - **Struck wording cut:** the Socastee sentence the verifier had struck.
   - **The lodging-tax sentence:** now one sentence, with its 15-day exception.
2. **Nightly income on where to buy.** The first verifier struck the AirROI figures as a vendor's estimate, and the fixer put them back. The lead kept them under the owner's rule of 2026-10-26: a page for a buyer who may rent gives what a rental takes in, from `data/str-market.json`.
3. **The STR data, refreshed sitewide.** The file was 79 days old (the build blocks at 90), and two new pages already printed today's AirROI figures, so one fact had two values. The verifier read all eight markets on 2026-11-03 (`str-market.json`: retrieved 2026-11-03, dataAsOf 2026-10-01, 12 months to September 2026). A helper updated every page that prints them:
   - /invest/airbnb-income/: the headline is now "$25,800 to $42,000".
   - /invest/rental-returns/ and /buyers/second-home/.
   - The /invest/ and /submarkets/ hubs.
   - The homepage town cards, which now read "12 months to September 2026".
   - The rental blocks on the live North Myrtle Beach and Surfside Beach pages. Group 4 is rebuilding those two pages.

   AirROI's revenue now includes the cleaning fees guests pay, so no page calls the change from August growth. Trend claims and old occupancy tiers with no current source were cut. The Surfside hub card ("The 'Family Beach': lower nightly rates") now says it has the highest nightly rate of the eight markets.
4. **Relocating pages.** `data/relocating/assemble-page.js` now reads a frozen copy of the old cost-to-own page (`donor-cost-to-own.html`). Rebuilds of beaches, from-ohio, which-town and why-myrtle-beach are byte-identical.
5. **Siblings.** Garden City hands the MarshWalk restaurants to the Murrells Inlet guide (`review/SIBLING-OWNERS.md`).
6. **Gates:**
   - Scores are 98 to 100.
   - struck-check, house-claims, `build.js check` and `audit` all pass, and so do `npm test` and `idx-test`.
   - claims-scan finds nothing new. facts-check is down to 7 old hits on 4 pages that are not in this batch; where to buy's old hit is gone.
   - v1.20 to v1.28 apply cleanly to a fresh live clone.

## Open

- Cost to own's T2 (first-hand sentences) reads 50 percent. The page uses the real insurance-quote story. No other story in stories.json fits.
- Photos: `photo-request-group-3.md`, drafted and not sent.
