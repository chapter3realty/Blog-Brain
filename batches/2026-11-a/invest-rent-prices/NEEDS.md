# Needs: /invest/rent-prices/

- **A shared line chart in glass.js.** The page needs one line chart (house rent against house value since 2015, from `findings.json`). glass.js has `bars` only. The spec will hand-build the SVG for now. A `G.line(series, o)` with the glass frame, 11 px text at 375 px, an aria-label and a table of values would serve every market-data page.
- **Sibling owners.** /invest/run-the-numbers/ uses stories `little-river-townhouses` and `tenant-occupied-sale-13-days`. This page plans `august-turnover` and uses the other two only if the lead moves one here.

## Added by the builder, 2026-11-02

- **glass.js: the closing offer turns light on any glass page with a homes feed.** The site injects the listing notice (`<div class="hx-wrap">`) after the last navy band inside `<main>`, so the band is no longer `:last-child`. The compact top-offer rule (`TOP = ...:not(:last-child)`) then styles the closing band as a light glass bar, and its ivory heading and text are almost invisible (seen in the preview at 390, 768 and 1440 px). Fix in glass.js: exclude a band followed by `.hx-wrap`, or target only the first navy band. Every glass page with a feed needs a look (for example /invest/strategies/fix-and-flip/). This page works around it with one CSS rule in its spec (`:has(+.hx-wrap)`), which can come out once glass.js is fixed.
- **Line chart helper.** Still built by hand in the spec (`lineSvg`, `seasonSvg`), each drawn twice: a phone viewBox and a wide one.
- **Lead decisions open:** the analyzer line (ledger row 23, the verifier flagged it against the no-AVM rule; kept as the owner approved it on the live page). Zillow's ZORI definition is still not pasted, so the page says "Zillow's rent index", never "typical asking rent".

## Added by the rebuild, 2026-11-03

- **Round-1 fixes finished.** The spec had them half done (an undefined `ZIP_CHART`, the map built but not placed). Now: one ZIP table with the map above it (every place labelled with `leaders: { places: true }`, so no key), the worked example in place of the five-point list, the middle offer removed (top and bottom only), the August story as advice, the yes-or-no answer on raising the rent (rows 30, 31), the 4-bedroom line in the body and the FAQ (row 29).
- **Rows 29 to 31** were VERIFIED-BY-FIXER. The rebuild, which did not research them, re-pulled B25031 from data.census.gov and read 27-40-310(a) and 27-40-910(a) on scstatehouse.gov. All match; facts.md now marks them VERIFIED with that note. The lead may still want a second look at row 30's second half ("unless the lease itself provides for a change"), which is a plain reading, not the statute's words.
- **Garden City's 3-bedroom figure** ($1,540, row 13) left the area table: glass.js caps a bar's feature at 48 letters, and the 29576 row could hold only one place. The ZIP row is still named "Murrells Inlet and Garden City".
- **build.js audit warnings on this page, not fixed:** no boxed offer mid-page (round 1 asked for the offer only at the top and bottom); no attributed sentence from Tim Nash (none in the story bank for rents; never written for him).
