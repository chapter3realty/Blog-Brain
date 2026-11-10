# Build: /market-reports/ (batch 2026-11-b)

Built 2026-11-10 from `PLAN.md`, with only VERIFIED and CORRECTED rows of `facts.md` (CORRECTED rows 8, 9, 14 and 15 in the verifier's wording). Rows 19 and 20 stay struck.

## Files (website working copy `scratchpad/wt-live`)

| File | What |
|---|---|
| `specs/market-reports.js` | The first spec for the hub. Glass theme, the /sell/ design. Every number is read from data files and checked against its ledger row; the spec throws if one moves. |
| `chapter3realty/market-reports/index.html` | Built by `node tools/mkpage.js specs/market-reports.js`. URL kept; `datePublished` kept from the old page. |
| `chapter3realty/images/2026-11-b/market-reports/market-report-share.jpg` | The page's own share card (`tools/ogcard.js`, our text on navy). Moved out of `og/` so only this page's folder changed; the spec points `ogImage` at it. |
| `data/2026-11-b/market-reports/` | Unchanged: `market.json` and its script. |

Data read, never typed: `market.json` (CCAR September 2026), `data/2026-10-d/sell-home-value/findings.json` (the deed medians, row 14), `data/2026-11-b/sell/ccar-2026-09.json` (the Myrtle Beach area's ZIP codes, row 15), `data/2026-11-b/market-reports-july-2026/june.json` (the July report's data month, row 17), and the July and election pages' own `datePublished`. Two year-over-year facts from CCAR's monthly tables are not in `market.json`; they are typed at the verifier's wording with the row number beside them (row 8: the condo median was below the year before in 10 of 12 months; row 9: months of supply lower than a year before since April for houses and May for condos).

## Outline

- **Title:** Myrtle Beach Market Report: September 2026 Prices | Chapter3 (60). **Description:** 159 characters. Both built from `meta.data_month`.
- **H1:** Myrtle Beach real estate market report: September 2026. **Italic line:** Houses cost about what they did in 2024. Condos cost less, and more of them went under contract.
- **Short answer:** the September medians ($370,000 and $230,125); house prices about level for three years, condos about 6 percent below 2024, and more condo offers accepted this year than in either of the last two. Slim bar: "Send me the numbers" (/contact/). On this page list.
1. **What is the median home price in Myrtle Beach?** January to September medians; what a median is. Table "September 2026 at a glance" (houses and condos: median price, days to an accepted offer, share of last asking price, months of supply, homes for sale). H3 "Why do other websites show a different median?": the CCAR MLS and its two counties, the deed medians ("mostly houses"), CCAR's areas follow ZIP codes or MLS areas. Link to /sell/home-value/.
2. **Are Myrtle Beach home prices dropping?** Houses no; the condo median fell two years in a row. Bars "House prices stayed level. Condo prices fell two years in a row." (January to September, 2024 to 2026). The wow line: sellers accepted 4,105 condo offers this year, more than in either of the last two years. Why one month's median moves. Photo: oceanfront condo towers (USGS, public domain, record from /submarkets/myrtle-beach/). Condos sold for 95.9 percent of asking. Homes strip "Oceanfront condos already priced below where they started" (fallback pill "Send me oceanfront condos with a price cut"). Offer: "Have us check a building".
3. **How long do homes take to sell in Myrtle Beach?** 122 and 131 days to an accepted offer, about 4 months; 97.3 and 96.0 percent of asking. Link to /sell/.
4. **How many homes are for sale in Myrtle Beach?** 3,855 houses, 3,235 condos; 4.2 and 7.5 months of supply, and what that means. Table "Months of supply grew in 2024 and 2025, then dipped in 2026" (three Septembers). Months of supply lower than a year before since April and May. Link to /buyers/buying-in-myrtle-beach/. Offer: "Send me new listings".
5. **How did Myrtle Beach home prices change month by month?** The 12-month ranges (rounded); the condo median below the year before in 10 of 12 months. Line chart "House prices stayed level this year. Condo prices dipped." (drawn at phone and wide sizes, each line named at its end), then the open table of all 12 months (prices and months of supply).
6. **Which Myrtle Beach market reports can I read?** We read CCAR's report each month and update this page. Table of reports, newest first (this page, the election guide with its published month, the July report with its June 2026 numbers). "Related numbers on other pages": home value, buyer's market, /sell/, selling a condo, permits, rents.
- **FAQ (5), each answered above in other words:** median price, are prices dropping, how long to sell, how many for sale, why websites differ.
- **Sources:** CCAR Monthly Indicators September 2026 (PDF), CCAR market statistics, CCAR MLS FAQ, CCAR Local Market Update (All Cities), Horry County deeds. Photo credit. Legal line (no legal, tax or lending advice; past prices promise nothing).
- **End band:** "Want the numbers for one street or one building?" "Have us pull the sales near me" (/contact/).

Every button goes to /contact/; the site opens the short pop-up. No two offers use the same words. No rate, no payment, no forecast, no automated value, no area price, no 2023 figure.

## Gate results (final build)

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /market-reports/` | 99/100 (SEO 100, AEO 100, Human 98, Trust 100). Only partial: P2 numbers per 100 words, 4.7 (67%). A market data page; the tables carry most numbers and the prose keeps the ones the reader came for. |
| `node tools/claims-scan.js` | 0 findings, site-wide. |
| `node tools/facts-check.js` | 4 wrong sentences on 3 other pages (the SC deduction on two relocating pages and llms-full.txt, already there); 0 on this page. |
| `node tools/house-claims.js` | 0 sentences. |
| `node tools/struck-check.js --batch batches/2026-11-b --strict` | market-reports: no struck wording. One first draft hit row 15's pattern ("area is ZIP codes"); reworded. |
| `node tools/repeat-check.js --strict` | passes. |
| `node tools/critic.mjs http://localhost:8872 /market-reports/ --widths 390,1024,1440` | 0 blocking, 0 warning at all three widths. Earlier runs caught a clipped "$200,000" axis label, no photo, and a 938 px phone wall in section 2; all fixed. |
| `node build.js check` | OK. |
| `node build.js audit` | On this page: only the two mkpage date lines (`build.js dates` sets them) and one "~" note (A20, no quote from a named person; we write none). The two cannibalisation lines are gone: see below. |
| Sentences | none over 28 words, no em dash, no sentence opening with So, And, But, Or, Yet or "Here is". |
| `node tools/inbound.js --only /market-reports/` | 6 referring pages. |

Shots (looked at full size, phone and wide, as a stranger): `scratchpad/rb1/market-reports/shots/market-reports-390.png`, `-1024.png`, `-1440.png`; critic JSON `scratchpad/rb1/market-reports/critic.json` (scratchpad = `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad`). Fixed from the look: the condo end label crossed its line (moved under it), crowded month ticks on the wide chart, the month table's months wrapping on a phone, labels repeated in the phone report cards, a duplicate photo-credit line, a vague related-page line.

## For the lead (this page does not edit these)

1. **New place** in `batches/2026-10-b/data/idx-places.json`: `mr-oceanfront-condos-cut`, name "oceanfront condos with a price cut", pages ["/market-reports/"], q `{"near": "33.69000,-78.89200", "miles": 25, "type": "condo", "has": "oceanfront_unit,price_reduced"}`, index false. 328 homes on the map API on 2026-11-10 (PLAN). The strip's title is "Oceanfront condos already priced below where they started"; until the place exists, the pill shows.
2. **Edge feed** (`idx-lib/feeds.js "/market-reports/"`, WEEK): please rename "New this week on the Grand Strand" to "Just listed on the Grand Strand this week". Both are true; the bolder one fits the owner's 2026-11-10 note, and review 1 asked for it. This page does not edit idx-lib/.
3. **Cannibalization:** `/invest/condos/` declares "Myrtle Beach condo prices", so this page no longer does. `/sell/home-value/` still declares "are Myrtle Beach home prices dropping" and has the H2; per PLAN, drop that keyword there and rename its H2 to "What has my area's price done this year?", and rename the /submarkets/myrtle-beach/ H2 to "What do homes sell for in the city of Myrtle Beach?". Then add "are Myrtle Beach home prices dropping" back to this spec's keywords (the comment beside them says so).
4. **July report:** since fix round 1 the reports table links it as "July 2026 report", with "June 2026 numbers" in the month column (from `june.json`), so the link no longer hands July the hub's head words. The spec throws if that page stops mentioning June 2026.
5. **Referring pages:** 6 today. PLAN suggests links from /sell/ and /sell/sell-my-condo/ on words already there.
6. **Monthly refresh:** when CCAR posts October 2026, `build_market.py` fails its hash check on purpose, and this spec throws on the sha256 and month check. Re-parse, re-verify rows 1 to 12 (and the two typed facts of rows 8 and 9), then rebuild. The share card's H1 changes with the month: re-run `tools/ogcard.js` and move the card into this page's images folder again.
7. **Share card:** `og/market-reports.jpg` was not left in `og/`; if the lead prefers the site's usual place, move it there and drop `ogImage` from the spec (mkpage then finds it by slug).

## Fix round 1 (2026-11-10)

See `REVIEW-1.md`. In short: the month table is prices only (it fit 348 px in a 320 px window before); the "at a glance" table is replaced by a selling-speed table in "How long do homes take to sell" that puts January to September and September alone side by side; section openings say what changed instead of the table's cells; the three-year bars are a labelled dot chart; new ledger rows 21 and 22 (VERIFIED-BY-FIXER). Lead items 1, 2 and 3 above are still open; the byline date waits for `node build.js dates`.
