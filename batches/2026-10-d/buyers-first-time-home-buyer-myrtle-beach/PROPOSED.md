# Proposed registry rows: /buyers/first-time-home-buyer-myrtle-beach/

For `facts/registry.json`, after the verifier marks the rows. Each `wrong` pattern needs a firing and a quiet control from real site text, and every hit read against the live site before it is trusted (CLAUDE.md).

1. **id `fha-loan-limit-horry`.** "FHA's 2026 loan limit for a one-unit home in Horry County is $541,287." Source: HUD FHA Mortgage Limits, CY2026 (facts.md row 26). ownerPage `/buyers/first-time-home-buyer-myrtle-beach/`. staleBy 2026-12-31 (HUD publishes 2027 limits late in the year). `wrong`: `\$524,225` beside "FHA" (the 2025 floor; to be confirmed against HUD's CY2025 page before adding).
2. **id `starter-house-flood-share`.** "About 3 in 100 houses and townhouses that sold in Horry County for under $300,000 (October 2025 to September 2026) had their lot center in a high-risk flood zone; for condos under $300,000 it was about 1 in 6." Source: facts.md row 9 (county flood layer 19, deed index). ownerPage this page. staleBy 2027-06-01. No `wrong` pattern yet; register so a sibling page that states a flood share for starter homes uses this one.
3. **id `new-vs-resale-house-median`.** "New houses from builders sold for a middle price of about $349,000 against $375,000 for resale houses, October 2025 to September 2026." Source: facts.md row 3. ownerPage this page. staleBy 2026-12-31. Shared with `/buyers/new-construction/` (rebuilt in this batch).

No new stories proposed. `stories/stories.json` has no first-time buyer; facts.md "Questions only the brokerage can answer" 1 proposes one owner question.

## Added in review round 1 (2026-11-01)

4. **Owner question: what home insurance cost on recent starter houses.** The owner's eye wants a figure in the yearly cost table. No primary source gives one for owner-occupied starter houses here: this page's research did not find one, the second-home page's research found only insurer and aggregator pages (`batches/2026-10-b/facts/r17/second-home-ledger.md`), and the $1,500 to $3,500 range on `/buyers/coastal-insurance/` is unverified (audit U9). Proposed question for `templates/owner-questions.md`: "From the insurance quotes our agents got for buyers in the past year, what did a homeowners policy cost a year on a house under $300,000 inland (Conway, Longs, Loris), and on one closer to the beach? A range is enough; no company names." Until then the page says no fair public average exists and offers the quote.
5. **Owner question: the usual earnest money here.** The reader asked how much to bring with the offer. No row covers it. Proposed: "What earnest money do our buyers usually put down on a house under $300,000: a dollar range or a share of the price?" Not a down payment term, but have `node build.js audit` read the sentence before it ships.
6. **A condo HOA fee range.** The CRM map API that `pull_listings.py` reads has no fee field. The listing detail pages do. A small aggregate pull (fee on condos at or under $250,000, median and middle half) would give the range the reader asked for. Proposed for the next round or a data helper; not done here.
7. **Registry row `fha-mortgage-insurance`.** "An FHA loan has a one-time upfront premium, which may be financed, and an annual premium collected monthly" (facts.md row 42, HUD 4000.1). No amounts, ever (PLAYBOOK A14). ownerPage this page.

## Added in review round 2 (2026-11-01)

8. **Retry OpenFEMA for a flood premium figure.** `https://www.fema.gov/api/open/v2/FimaNfipPolicies` returned 404 ("technical difficulties") on 2026-11-01. When it is back: Horry County (countyCode 45051), single-family, primary residence, policies effective October 2025 to September 2026, middle total premium by zone (high-risk A/AE against X). Primary residence only, so second homes do not skew it (CRAFT 2). A verified row would let the yearly cost table carry a flood figure (owner, 2026-10-06).
9. **SC Department of Insurance premium comparison.** Not found on doi.sc.gov on 2026-11-01 (Homeowners Insurance page and site search). If the owner knows where it lives, a row for Myrtle Beach and Conway sample premiums would answer owner question 4 from a public source.
