# Needs: /invest/rent-prices/

- **A shared line chart in glass.js.** The page needs one line chart (house rent against house value since 2015, from `findings.json`). glass.js has `bars` only. The spec will hand-build the SVG for now. A `G.line(series, o)` with the glass frame, 11 px text at 375 px, an aria-label and a table of values would serve every market-data page.
- **Sibling owners.** /invest/run-the-numbers/ uses stories `little-river-townhouses` and `tenant-occupied-sale-13-days`. This page plans `august-turnover` and uses the other two only if the lead moves one here.

## Added by the builder, 2026-11-02

- **glass.js: the closing offer turns light on any glass page with a homes feed.** The site injects the listing notice (`<div class="hx-wrap">`) after the last navy band inside `<main>`, so the band is no longer `:last-child`. The compact top-offer rule (`TOP = ...:not(:last-child)`) then styles the closing band as a light glass bar, and its ivory heading and text are almost invisible (seen in the preview at 390, 768 and 1440 px). Fix in glass.js: exclude a band followed by `.hx-wrap`, or target only the first navy band. Every glass page with a feed needs a look (for example /invest/strategies/fix-and-flip/). This page works around it with one CSS rule in its spec (`:has(+.hx-wrap)`), which can come out once glass.js is fixed.
- **Line chart helper.** Still built by hand in the spec (`lineSvg`, `seasonSvg`), each drawn twice: a phone viewBox and a wide one.
- **Lead decisions open:** the analyzer line (ledger row 23, the verifier flagged it against the no-AVM rule; kept as the owner approved it on the live page). Zillow's ZORI definition is still not pasted, so the page says "Zillow's rent index", never "typical asking rent".
