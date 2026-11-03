# Final fix: /invest/str-vs-ltr/, 2026-11-03

Every change is in `specs/str-vs-ltr.js`, `facts.md` (row 39 and a note on str-market.json) and `NEEDS.md` (items 21 to 24). The built page was never edited by hand. Version 3 of the spec is saved at `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/str-vs-ltr.v3.js` (scratch, not kept).

## The lead's open items

| Item | What I changed |
|---|---|
| Banned wording: "to Win" in the title | Already gone in version 3. Title: "Airbnb vs Long-Term Rental, Myrtle Beach: 82-Night Break-Even". The built page has no "win", "wins" or "winner". |
| "Where you buy can decide" | Already gone. Its replacement, "Not every home may be rented by the night.", is now cut too, to shorten the short answer at 320 px. |
| "The number holds" | Not on the page. The built page has no "holds". The Fannie Mae con no longer needs one: it is now two sentences. |
| "Wins" | Not on the page (checked on the built HTML). |
| "Most oceanfront condos allow both" | Replaced with our count, scoped to its group (row 25): "Of 422 condos for sale in oceanfront buildings inside Myrtle Beach city limits, listing agents marked 402 as allowing nightly stays." "In an oceanfront condo building, the listing almost always says yes" is cut. The photo caption's second sentence ("Most condos for sale in buildings like these...") is cut; the caption is the verifier's. Hero tile: "Oceanfront condos for sale, Myrtle Beach: 95% marked nightly". |
| Lodging tax line needs a primary source | "About 13 percent inside the city" is cut. That total rests on the registry and adds city and county fees that SCDOR does not list. Now: "South Carolina's state tax on the stay is 7 percent" (link to S.C. Code 12-36-920, row 20). Then "Inside Myrtle Beach, the state and local sales tax on a room comes to 10 percent, and the city and county add their own taxes" (link to SCDOR ST-575, new row 39, VERIFIED-BY-FIXER, PDF read today). "Airbnb collects the state taxes and Horry County's" keeps its link (Airbnb 2328, row 21). ST-575 is added to the sources line. |
| Short-term figures from `data/str-market.json` | The spec now loads str-market.json and stops the build unless it is the 2026-11-03 refresh (dataAsOf 2026-10-01). Its Myrtle Beach revenue, ADR, occupancy, listings, median month, July and January must equal the AirROI read in findings.json, and so must Conway's revenue and listings. They match. July ("the best month ... about $6,800") is read from str-market.json. The size table, open days, stay length and month detail are not in str-market.json. They come from the same AirROI update (12 months to September 2026). The sources note now says the income includes guests' cleaning fees. The page shows no change since August. |

## Blocking items from REVIEW-2

None was left standing. Round 2 closed each one. I re-checked the built page for its banned wording:
- "both" on oceanfront condos;
- "Airbnb collects them";
- the unconditioned dek;
- "nightly rent", "snowbird", "overlay";
- "So ", em dashes.

None is there. Rows 34 to 38 are still VERIFIED-BY-FIXER for the lead to re-check (NEEDS 15).

## The brief's writing rules

| Rule | What I changed |
|---|---|
| No "Here is" | "Here is one Myrtle Beach two-bedroom, run by its owner." is now "The chart below follows one Myrtle Beach two-bedroom, run by its owner." |
| No sentence over 28 words | I split or trimmed five sentences: the city zoning line, the open-days line, the top-quarter line, the Fannie Mae con (now two sentences) and the Carolina Forest FAQ. |
| A /contact/ button is a request | All three buttons now read "Have us run both numbers" (hero, What we do, bottom band). They read "Get both numbers" before. |
| No we/our/us in the hero sub | The sub has none. |
| No attribution in the body | "The city says most of its..." (score P9) is now "Most of the city's traditional neighborhoods are not zoned for it." |
| Paragraph over 80 words | The tax paragraph is split in two. A new H3, "How does federal income tax treat each?", ends a 320 px read wall. |
| Short answer read wall at 320 | Its second paragraph now ends "Most city neighborhoods allow only stays of 90 days or more." |

## Gates

- `score.js` (SCORE_TODAY=2026-11-03): 100/100 (SEO 100, AEO 100, Human 100, Trust 100).
- `claims-scan.js`: 0 findings on the site, so 0 on this page.
- `facts-check.js`: nothing on this page.
- `house-claims.js`: 0.
- `struck-check.js` with `invest-str-vs-ltr-struck.json`: no struck wording.
- `critic.mjs` at 320, 390, 1024 and 1440: 0 blocking, 0 warnings. I looked at the first screen at 320 and 1440, and at the short answer at 320.
- `build.js audit`: two FAILs on this page, both about dates (schema dateModified and the visible "Updated June 12, 2026"). They need the lead's `node build.js dates` (NEEDS 24). There is also the A20 note: no Tim quote, and none was written.

## Left for the lead

- `data/headlines.json` still holds the old title (NEEDS 22).
- Row 39 needs a re-check (NEEDS 23).
- The dates (NEEDS 24).
- At 1440 the oceanfront tile wraps to three lines, one more than the other tiles. I kept "for sale" and "Myrtle Beach" on it, because without them the claim is wider than our count.
