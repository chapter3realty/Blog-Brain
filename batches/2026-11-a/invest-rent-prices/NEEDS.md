# Needs: /invest/rent-prices/

- **A shared line chart in glass.js.** The page needs one line chart (house rent against house value since 2015, from `findings.json`). glass.js has `bars` only. The spec will hand-build the SVG for now. A `G.line(series, o)` with the glass frame, 11 px text at 375 px, an aria-label and a table of values would serve every market-data page.
- **Sibling owners.** /invest/run-the-numbers/ uses stories `little-river-townhouses` and `tenant-occupied-sale-13-days`. This page plans `august-turnover` and uses the other two only if the lead moves one here.
