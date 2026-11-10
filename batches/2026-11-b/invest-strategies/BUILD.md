# Build: /invest/strategies/ (batch 2026-11-b)

Writer, 2026-11-10. Plan: `PLAN.md`. Facts: `facts.md`, VERIFIED and CORRECTED rows only, in the verifier's wording (`VERIFY.md`). Struck list: `batches/2026-11-b/facts/invest-strategies-struck.json`.

## Files (website working copy)

- Spec, new: `specs/strategies.js` (mkpage, `tools/glass.js`). The page was hand-built; this is its first spec. URL kept.
- Page: `chapter3realty/invest/strategies/index.html` (built by `node tools/mkpage.js specs/strategies.js`).
- Data: `data/2026-11-b/invest-strategies/`
  - `build_findings.py` changed: the chart labels and notes in the verifier's wording (rows 8, 17, 19, 37); the DST bar marked as a minimum (`reference`); the flip bar's own first-deed date (`flip_period`); the DST parcel count, trust count and county value read from the DST page's `horry_dst_parcels.json` (row 30; 11 parcels, 10 trusts, $201,747,318); Murrells Inlet and the top market read from `data/str-market.json` (row 33). Values unchanged. Re-run: `python3 -I data/2026-11-b/invest-strategies/build_findings.py`.
  - `photos.json` new: the Garden City Beach USGS aerial record, copied from the DSCR page's record (public domain; the same file, `images/2026-11-a/invest-condos/`).
- Image: `chapter3realty/images/2026-11-b/invest-strategies/share.jpg` (our share card, `tools/ogcard.js` run on a copy of the page; looked at full size).

## Outline as built

Hero: H1 "Eight real estate investment strategies on the Grand Strand, compared"; italic line "A local number for each, and who it fits." at about half the H1's size; byline Devin Day, reviewed by Tim Nash. Title "Real Estate Investment Strategies in Myrtle Beach: 8 Compared" (61). Description 150 characters.

Short answer (two paragraphs): a house rented by the year with a DSCR loan for steady income, and the $2,070 asking rent (row 6, row 11); a 1031 or a DST for a seller with a gain, a flip or BRRRR for cash and time.

Offer band: "Tell us your cash and your goal..." / "Send me properties that fit" -> /contact/. Then "On this page" (six labels).

1. **Which real estate investment strategy fits you?** Row 1 in the verifier's wording, then a two-column table "You want / The strategy" (seven rows), each strategy linking its entry below.
2. **What are the main real estate investment strategies here?** Eight numbered entries in four groups. Each: what it is, its local number, who it fits, a link to its page, and the hard part on a thin brass rule.
   - Buy a home and hold it: 1 Long-term rental (rows 6, 5, 12); 2 Short-term rental (rows 31, 33, 35), then the Garden City Beach strip with the USGS photo as its fallback; 3 Small multifamily (rows 20, 19, 22), then the 2 to 4 unit strip. Offer: "Have us run an address".
   - Pay for it: 4 DSCR loan (rows 11, 9, 10).
   - Add value: 5 BRRRR (rows 14, 13, 15); 6 Fix and flip (rows 16, 18). Offer: "Get the worn-house list".
   - Trade without the tax now: 7 1031 exchange (rows 23, 25, 26); 8 DST (rows 41, 30, 27, 29, 28). Offer: "Plan my sale and next buy".
3. **How much money do you need to start investing in real estate here?** The one chart (`G.bars` from `chart-entry-prices.json`): "The ways in start far apart: from a $100,000 DST share to a $520,000 duplex or fourplex". DST bar neutral, labelled "usual minimum, not a price"; the flip bar's first deeds dated in the note. No down payment share, rate or payment; the DSCR page holds the affiliated lender's figures.
4. **BRRRR or flip, long-term or nightly, 1031 or DST: how do they differ?** Four pairs, one or two sentences each and the link. No figures (the children own them).
5. **How does Chapter3 find investment deals here?** Row 3, row 39, the quiet sale under "A sale that never listed" (row 2, vague form). Offer: "Send me properties with the numbers run".
- FAQ (4): beginners; without being a landlord; help with the loan (row 40 wording: "Our affiliated lender, BrickWood Mortgage, a separate company"); out of state.
- Sources line with the periods (Zillow metro incl. Brunswick County, NC; deeds; AirROI 12 months to September 2026; SEC filings). Photo credit. Legal notice. Closing band: "Send us an address, or tell us your cash and your goal." / "Send me investment properties with the numbers" -> /contact/, "Or call 854.333.2135".

Every button goes to /contact/; the site's pop-up does the rest. No two offers share words. Facts used once each; the $2,070 rent is in the short answer and entry 1 only.

Choices against the plan: the guide is a real table (two columns read fine at 390 px) instead of a list; R5 (we filter rental bans, read the HOA documents) moved into the long-term rental entry, where the house-rental ban matters; the STR wow is Murrells Inlet (row 33), not the condo flag share (row 34); the DST income test is cut to the net-worth test (the DST page has both); "54 buildings" is said as "Some buildings sold twice" (54 is not in a data file).

## Gates (final run)

- `SCORE_TODAY=2026-11-09 node tools/score.js --site <wt>/chapter3realty --only /invest/strategies/`: **100/100** (SEO 100, AEO 100, Human 100, Trust 100), 1,821 words.
- `node tools/claims-scan.js <wt>`: 0 findings sitewide.
- `node tools/facts-check.js <wt>`: 4 wrong sentences on 3 other pages (relocating from-massachusetts, from-virginia, llms-full.txt; the SC standard deduction). None on this page.
- `node tools/house-claims.js .../invest/strategies/index.html`: 0 sentences.
- `node tools/struck-check.js batches/2026-11-b/facts/invest-strategies-struck.json .../invest/strategies/index.html`: no struck wording.
- `node tools/critic.mjs http://localhost:8874 /invest/strategies/ --widths 390,1024,1440`: **0 blocking**. 1440 and 1024: 0 warnings. 390: 3 warnings, `read.wall` on the small multifamily, fix and flip and DST entries (978 to 1,263 px of text each). Left as is: each is four short paragraphs under its own numbered heading; the small multifamily wall ends at its homes strip once the strip is live.
- `node build.js check`: OK.
- `node build.js audit`: on this page only the mkpage date lines (schema dateModified and visible "Updated June 13, 2026" vs sitemap lastmod 2026-10-04; `node build.js dates` sets them) and one WARN (no attributed sentence from a named licensed person). The hero sub and local-edge FAILs of the first build are fixed.
- `node tools/inbound.js <wt> --only /invest/strategies/`: 6 referring pages.

## Shots (looked at full size, 390 and 1440, as a stranger)

- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/invest-strategies/shots/invest-strategies-390.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/invest-strategies/shots/invest-strategies-1024.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/invest-strategies/shots/invest-strategies-1440.png`

Fixed after looking: the FAQ repeated the $2,070 rent (cut); the DST entry was the longest wall (income test cut); the quiet sale got its own small heading; numbers on the entry headings moved to CSS so the guide's links match the headings.

## For the lead (outside this page's folders)

1. **idx-places** (`batches/2026-10-b/data/idx-places.json`, then regenerate `idx-lib/places.js`): add `/invest/strategies/` to the `pages` of `str-garden-city-beach-condos` and `duplexes-around-myrtle-beach`. No new place. Strip titles on this page: "Best Airbnb opportunities in Garden City Beach" (the owner's own example) and "Two to four rents from one building, for sale now".
2. **idx-lib/feeds.js:** `"/invest/strategies/": { ...MIX, withStrips: true }`. Optional, for the owner: MIX's head "This week's investment buys: rentals, fixers and duplexes" in place of "Rentals, distressed sales and duplexes for sale now".
3. **Referring pages** (6 today). Add a link in the text of /invest/strategies/fix-and-flip/ and /invest/strategies/dst/ (none today), and /invest/str-vs-ltr/ and /invest/airbnb-income/ on words already there.
4. **/invest/:** end "Pick the strategy before you pick the property" with one line linking this hub ("All eight strategies, compared").
5. **Sibling wording** (VERIFY.md): the small multifamily page says "58 of those buildings sold" and "the county's duplexes, triplexes and fourplexes"; this page uses the scoped wording (58 sales, some buildings twice; buildings of 2 to 4 homes on one parcel). The BRRRR page prints "Conway, Socastee and Carolina Forest" with no ledger row.
6. **AirROI:** this page prints the October update (12 months to September 2026) from `data/str-market.json`, like the other STR pages. Refresh that file for every page at once, or not at all.
7. Run `node build.js dates` for this page's dates. Do not hand-edit the page; edit the spec.

## Review 1 (2026-11-10)

Fixed in the spec; see `REVIEW-1.md`. The money H2 is now "What does each way in cost here?", and the chart has four bars (the quick-resale bar is cut). The DSCR entry gives the plain result (row 42). The STR hard part uses the city's plain words (row 43). $2,070 is said once.
