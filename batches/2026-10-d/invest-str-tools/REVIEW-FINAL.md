# Final fix: /invest/str-tools/

Fixer, batch 2026-10-d, 2026-11-03. Every change is in `web2/specs/str-tools.js`; the page was rebuilt with `node tools/mkpage.js specs/str-tools.js`. No new ledger row: every figure rests on rows 6, 9, 12, 14, 15, 20, 23 and 24 and VERIFY.md 3 and 4, through the spec's own `run()` and `must()` checks.

## The lead's open items

| Item | What changed |
|---|---|
| The short answer does not answer the H1 | It now opens with the amount: "From a few thousand dollars a year over its bills to a few thousand short, before any loan. Which one depends most on the HOA fee." Then the Garden City Beach condo keeps about $5,000 (under $2,000 with a manager), and the Myrtle Beach oceanfront condo falls about $4,000 short at the average listing's nights, counting part-year ones. Open all year it keeps about $4,500, or falls a little short with a manager. |
| The calculator opens on a losing case | It opens on the typical two-bedroom beach condo in Garden City Beach (row 6, VERIFY.md 3): about $345,000, fee $575, 95 nights booked against 66 needed, keeps about $5,000. The quick picks start with Garden City Beach and Surfside Beach. The worked example follows the same condo, then names Myrtle Beach oceanfront as "the hard case". |
| Too many exact numbers | Prose rounds what a person would not say: $345,000, about $1,200 a month, about $5,000, about $4,000 short, about $4,500, under $2,000, about $150 a stay. The town chart is in thousands, the season chart in hundreds, the growth chart's 8,698 and 4,564 listings are 8,700 and 4,600. The calculator's result sentence rounds to the hundred. The lines of the calculator stay exact. Score P2: 2.9 numbers per 100 words. |
| "Too many Airbnbs?" talks about the source and never answers | It opens with the answer: "Myrtle Beach has many more Airbnbs than a year ago, and each new one competes with the rest for the same guests." It ends with what a buyer does: "a condo should pay its bills at the nights the average listing books now. Do not plan on more." The sentence about where the calculator gets its count is cut. |
| Every number assumes the owner runs it | The calculator has a "Who runs it: You / A manager at 15%" choice. The fee chart has a third bar a place, the nights needed with a manager: 139, 131, 83 and 52 against 110, 104, 66 and 42 run by the owner. The worked example and the short answer give the managed result. The nights FAQ says "more with a manager". 15 percent is a share of the bookings inside row 23's basic plans (12.6 to 17.5); full service stays off the calculator (owner question 1). |
| Short-term figures must come from `data/str-market.json` | The spec reads the 2026-11-03 file and stops the build unless `retrieved` is 2026-11-03 or later and `dataAsOf` is 2026-10-01. Every town's revenue, listings, nightly rate and occupancy must equal `findings.json`, and the July and January months of Myrtle Beach and Murrells Inlet must equal the month table. The page's town figures (the $26,000 FAQ, nearly twice, the listing counts) are read from it. The by-size rows and cost lines are not in it, so they come from the same AirROI update in `findings.json` (NEEDS.md 16). The file's `yoy` (the revenue change) is not used; the growth chart is AirROI's own listing growth, a year against a year (row 20). |
| The tool needs work: do not promise more than it does | The sub says "A rough yearly estimate for one Grand Strand nightly rental, from town averages". The calculator's intro ends "gives a rough yearly figure, not a forecast for one unit". The "?" beside "You keep a year" adds "The rate and nights are town averages, so one unit can do better or worse." NEEDS.md 17 notes the rework as a separate job. |

## Blocking items from review 2

None was left standing. Items review 2 settled stay as they were: the business license FAQ and line (row 32), the map (row 33), the houses chart and Garden City photo, the lodging-tax sentence, the three different offers. One offer was added in the town section ("Torn between two towns? Send us a listing in each. We run both through the same numbers, at no cost."), because score H5 asked for four calls to action across eight sections.

## Also changed

- `build.js audit` flagged three keywords this page shared with other pages ("Myrtle Beach condo rental income", "Murrells Inlet Airbnb", "Garden City Beach condos"). They are removed from this page's keywords.
- Score P10 flagged "The HOA fee decides which". It is now "Which one depends most on the HOA fee."
- The tax "?" now uses the Garden City Beach condo: about $4,300 a year, about 1.2 percent of the price.

## Gates

- `score.js` (SCORE_TODAY=2026-11-03): 100/100. SEO 100, AEO 100, Human 100, Trust 100.
- `claims-scan.js`: 0 findings. `facts-check.js`: nothing on this page. `house-claims.js`: 0. `struck-check.js` (invest-str-tools-struck.json): no struck wording.
- `critic.mjs` at 320, 390, 1024 and 1440: 0 blocking, 6 warnings. All are `read.wall` hits on the hero sub, the calculator block and the last FAQ answer, the same false hits as rounds 1 and 2. I looked at the calculator and fee chart at 320 and 1440.
- Calculator probe in the browser: opens on Garden City Beach ($5,119, 66 nights); the manager button gives $1,656 and 83; Myrtle Beach oceanfront with a manager gives -$7,498 and 139; typing 12 in the manager box un-presses both buttons. No script errors.
- `build.js audit`: the only failures on this page are the two date lines (visible "Updated June 12, 2026" and schema dateModified against the sitemap), for the lead's `node build.js dates`. The A20 note (no quote from a licensed person) is a warning; we may not write a quote for Tim Nash.
