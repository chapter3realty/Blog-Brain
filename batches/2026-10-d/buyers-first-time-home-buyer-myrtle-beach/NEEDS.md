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

## Review round 1, 2026-11-01: shared parts the reviewers flagged

4. **`tools/glass.js`: the end offer band turns light on any page with a homes feed.** The feed adds its MLS notice (`div.hx-wrap`) after the end band inside `<main>`, so the band is no longer `:last-child`, and the compact rule (`TOP`, `section[style^="background:var(--navy)"]:not(:last-child)`) draws it as the light glass bar while its heading and paragraph stay ivory. Seen here and on `/invest/strategies/fix-and-flip/`; critic.mjs did not flag it. Fix in glass.js: select the top band by what it is, not by position, e.g. `:not(:has(>.wrap>h2))` (mkpage gives only the end band an h2), or have mkpage put a class on each band. Workaround in this spec's CSS: `main#main>section[style^="background:var(--navy)"]:has(>.wrap>h2)>.wrap` gets the dark panel back. Remove it once glass.js is fixed.
5. **Homes feed search bar at 320 px.** `.hx-fb-ai` is a column flex box and `.hx-fb-ai .hx-fb-q{flex:0 0 auto}` lets the label size to its content (341 px), so the page is 364 px wide in a 320 px window and "Find houses" is cut off. Fix in the feed CSS: `.hx-fb-ai>.hx-fb-q{align-self:stretch;width:100%;min-width:0;box-sizing:border-box}` and `textarea{width:0}`. Same on fix-and-flip. Workaround in this spec's CSS, scoped to `main`.
6. **Site header at 1000 to 1100 px.** `.header-ctas` ends at 1029 px in a 1024 px window (the phone number). Fix in the shared header CSS: a smaller gap or no phone number between 1000 and 1100 px. Workaround in this spec: `@media (min-width:1000px) and (max-width:1100px){.header-ctas{gap:8px}}`. It reaches outside `<main>`, so the lead should move it to the shared CSS and drop it here.
7. **critic.mjs misses.** It did not flag ivory text on the light band (contrast), and it reported the 102-word short answer plus offer card as a wall at 320 px. Not changed here.

## Review round 2, 2026-11-01

8. **exiftool is not installed in this container.** `tools/photos.js embed` stops, so the new aerial (`images/2026-10-d/buyers-first-time-home-buyer-myrtle-beach/golf-and-yacht-club-houses-from-above*.webp`) has its record (`data/2026-10-d/buyers-first-time-home-buyer-myrtle-beach/photos.json`, check passes) but no metadata in the files yet. The lead runs `node tools/photos.js embed data/2026-10-d/buyers-first-time-home-buyer-myrtle-beach/photos.json chapter3realty` where exiftool exists.
9. **`tools/glass.js`: the top offer card's left edge.** The compact band rule sets `margin-left:max(16px,calc((100% - 1200px) / 2 + 2rem))`, so below 1200 px the card starts at 16 px while text starts at the .wrap padding (about 24, 21 and 34 px at 390, 768 and 1024). Fix in glass.js: use the .wrap padding at each breakpoint (2rem; 1.25rem at 768 and below; the phone value measured as 1.4rem at 480 and below). Workaround in this spec's CSS (item 4b). Remove it once glass.js is fixed.
10. **critic.mjs read.wall on the hero.** It measures from the dek through the short answer and the hero offer card as one wall at 320 and 390. A warning only; the shared hero has no heading there by design.

## Final fix, 2026-11-03

11. **NEEDS item 8 is closed for this page.** exiftool is now in the container; the new aerial's metadata is embedded and `photos.js check` passes. The Golf and Yacht Club aerial files are deleted (no longer used).
12. **Keyword "homestead exemption horry county" moved off this page.** `build.js audit` flagged it as declared by this page and `/buyers/retirees/`. This page keeps the FAQ answer but no longer declares the keyword.
13. **USDA's area changes.** Row 53 rests on USDA's single-family ineligible layer (edited 2023-07-25). USDA says the layer "changes often". Re-check the four neighborhoods when the layer's EDIT_DATE moves (`usda-hoods.py` in this folder).
14. **The photo partner's shots 1 and 2 are still the better pictures** (a Conway street at eye level; a new house in Longs). The NOAA aerial is the stand-in until they arrive.
