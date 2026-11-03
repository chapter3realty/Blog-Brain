# Needs: /invest/str-tools/

Shared files this page would like changed. The writer works around each one inside `specs/str-tools.js`.

1. **`web2/data/str-market.json` is stale and no longer matches AirROI** (lead, or the owner of /invest/airbnb-income/). Read 2026-08-15, refresh due 2026-11-13 (its own 90-day gate). AirROI's pages now print different figures for every town (Myrtle Beach $20,946 then, $25,807 now; Murrells Inlet $38,356 then, $47,603 now) and count cleaning fees in gross. This page and /invest/str-vs-ltr/ use today's pages. Until `str-market.json` is refreshed and `node build.js strdata` is run, /invest/airbnb-income/ and the submarket pages print the August figures, and the site gives two values for one fact. Proposed: refresh it from `web2/data/2026-10-d/invest-str-tools/raw/airroi-parsed.json` (same day, eight towns), then rescan with `facts-check.js`.
2. **A two-series chart in `tools/glass.js`.** `G.bars` draws one series. The season chart needs two (Myrtle Beach and Murrells Inlet by month) with a label row under the months (water temperature). Workaround: a small inline SVG in the spec, glass-styled by hand, with its table of values under it.
3. **A map of where nightly rentals are allowed, for /invest/str-rules/** (the judge's idea for this page). The City of Myrtle Beach zones exist only as a PDF map (`ZoningandCityLimitsMap.pdf`); no public city GIS layer answered. Proposed for the next batch: ask the city's GIS office for the zoning layer, or trace the RMV and visitor zones from the PDF with a licence check. Not built here.
4. **Georgetown County millage for Pawleys Island** in the calculator. Not pulled in this stage; the calculator's Pawleys Island choice starts with an empty tax rate and a note until a row exists.
5. **Menu label.** 142 pages link here as "Short-term rental tools". The page now is the tools page, so the label fits. No change asked.

## Writer's notes, 2026-11-01 (build stage)

6. **`compute.py` still has the kept-per-night formula error** (VERIFY.md 3). `findings.json` still prints `kept_per_night` 192 and `nights_to_pay_fixed` 105, 98, 40, 63. The spec does not read those fields: it does the arithmetic once, in `run()`, with the verifier's formula, and checks it gives 110, 104, 42 and 66. Whoever reruns `compute.py` should apply the one-line fix in VERIFY.md 3 so the file and the page agree.
7. **Insurance and permit lines for four towns.** Row 11 verifies Myrtle Beach's $260 and $130. The calculator's defaults for the other towns are AirROI's own lines on the same pages (`findings.json` towns.*.insurance_line and permit_line; NMB $510, Surfside $640, Garden City $620 are inside row 6's verified bills; Murrells Inlet $720, Pawleys Island $470, Little River $220, Conway $350 are not in a row). I read them on the raw pages (`raw/airroi-<town>.html`, "Short-term rental insurance" and "Permit and registration"). A verifier should add one row for them.
8. **Airbnb's fee split for 23-percent towns.** Surfside Beach and Garden City show "About 13%" for Airbnb's fee (running costs 23 = 13 + 5 + 2 + 3). The calculator takes Airbnb's fee as running costs less 10, which matches every page read.
9. **The sibling /invest/str-vs-ltr/ links here as "short-term rental atlas".** This page is a calculator and the STR tools index, not an atlas. Suggest the anchor "short-term rental calculator".
10. **The calculator's tax is blank for Murrells Inlet, Pawleys Island, Little River and Conway** (row 4 covers four districts). A row with one 2026 bill per district would fill them.

## Fixer's notes, review round 1 (2026-11-01)

11. **The homes strip's search row runs past a 320 px window** (shared strip CSS, `.hx-fb-ai` and `.hx-fb-q`). "Find houses" was 29 percent cut off and the page scrolled sideways (scrollWidth 364). Same on /invest/strategies/fix-and-flip/. Workaround in this spec's CSS, the same rule as specs/dst.js: at 379 px and under, the box, badge and question row get `max-width:100%; min-width:0`, the textarea shrinks, and the filter chips wrap. Remove it when the shared CSS is fixed.
12. **The header is 1029 px wide in a 1024 px window** (shared header CSS, `.header-ctas` and the phone number). Site-wide; fix-and-flip and no-hoa-homes show it too. Workaround in this spec, as in specs/dst.js: from 1000 to 1100 px, the nav gap is 2.2rem and the header gap 1.6rem. Remove it when the shared header is fixed.
13. **The listing feed's title** reads "Waterfront condos in Myrtle Beach and North Myrtle Beach". It is generated outside the spec. On this page the reader needs homes that allow nightly rentals: "Condos that allow nightly rentals in Myrtle Beach and North Myrtle Beach" (owner's eye, review 1).
14. **The right column is empty on desktop** (owner's eye nit). The glass theme sets the reading column; a page cannot fill the right side without a shared layout change. No change here.
15. **`data/str-market.json`** (item 1) also feeds this page's "a fall of about 11 percent a few months ago" (its Myrtle Beach `yoy`, -10.7). When it is refreshed, the sentence changes with it, or the `must()` check in the spec stops the build and says why.

## Final fix, 2026-11-03

16. **`data/str-market.json` has no by-size rows.** Item 1 is done (the file is the 2026-11-03 refresh). This page now reads its town figures from it and stops the build if `findings.json` disagrees. The calculator still needs the two- and three-bedroom rate and nights, the cost lines and the months, which only `findings.json` holds (same AirROI update). Proposed: add a `bySize` block (2 and 3 bedrooms: average, adr, occupancy) and the cost lines to each market in `str-market.json`, so every STR page reads one file.
17. **The short-term rental tool needs a rework** (owner: "our short term rental tool sucks", VERDICTS). This page now calls the calculator a rough estimate from town averages and does not claim to price one unit. A real rework (a building's own fee, rental program share and history) is a separate job.
18. Items 6 and 15 are closed for this page: it does not print `kept_per_night` or the yoy figure.
