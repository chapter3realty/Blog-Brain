# Needs from shared helpers: /buyers/first-time-home-buyer-myrtle-beach/

1. **A dot layer and a grouped bar chart.**
   - `tools/area-map.js`: draw many small points (2,403 here, `data/2026-10-d/buyers-first-time-home-buyer-myrtle-beach/map-starter-points.json`) on a region map, in up to two colors with a legend ("resale", "new from a builder"). `regionMap` takes places, markers and areas, not points. Workaround for this page: inline SVG in `specs/first-time-home-buyer.js` using the map's projection, or `regionMap({ areas })` with the ZIP areas outlined and a note each.
   - `tools/glass.js`: a grouped bar chart (two to four values per row, side by side, one legend), for the price ladder (`chart-ladder.json`). `G.bars` takes one value per row. Workaround: three `G.bars` blocks with the same bands and the same max, or inline SVG with `G.TOKENS`.
2. **The wind pool line as data.** A simplified line for U.S. 17 and Bypass 17 in Horry County (the registry's `wind-pool-line`), so a page can count homes east of it. County GIS layer 17 (Highways) refused attribute queries on 2026-11-01. Census TIGER roads would do. Not needed for this page's first version.
3. **`idx-lib/feeds.js`: a price cap and a town on the article feed.** This page's feed should show houses at or under $300,000 in Conway and Longs. The programs page asked for a cap too (its NEEDS item 3). Until then the copy does not promise the feed's price.

## Writer's notes, 2026-11-01 (build)

- Item 1 is worked around inside `specs/first-time-home-buyer.js`: the starter-house dot map is inline SVG on area-map.js's `loadGeo2()` coast and towns plus this page's county line (`raw/horry-county-boundary.geojson`); the kind-of-home chart is a grouped bar chart in the spec's own CSS (four bars a price band, one common scale, no stacking). If `area-map.js` gets a dot layer and `glass.js` a grouped bar chart, the spec can move to them.
- Item 3 still open. The site's own homes feed on this URL already shows "Starter homes under $300,000", so the copy promises nothing about the feed.
- The share card `chapter3realty/og/buyers-first-time-home-buyer-myrtle-beach.jpg` was made with `tools/ogcard.js` (score S5). It is outside the checkpoint's paths; the lead should keep it with the page.
- The verifier's data fix is in `data/2026-10-d/buyers-first-time-home-buyer-myrtle-beach/build_findings.py` (land use 117 is "other"). The JSON files were rebuilt from a fresh flood pull; the condo figures match VERIFY.md. `raw/flood-sfha.json` was deleted after the build, as the data README says.
