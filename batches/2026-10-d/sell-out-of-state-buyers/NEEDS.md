# Shared helper needs: /sell/out-of-state-buyers/

Work around each inside the spec until the lead decides.

1. **A column chart for 12 months** (glass.js). `G.bars` draws one horizontal bar per row. The page's month chart (facts row 8) has 12 rows; vertical columns in month order read better on a phone and wide screen. Workaround: 12 compact horizontal rows in month order with `G.bars`, or a small SVG in the spec built from `out-of-state-buyers-summary.json`.
2. **A shaded map by Census place** (area-map.js). The place shares (facts row 5) would read best as places shaded by share. area-map.js pins places with markers. Workaround: labelled pins, or a ranked bar list instead of a map.
3. **The CRM listings API** (https://chapter3realty.com/homes/api/map) returned {"ok":false,"error":"unavailable"} on 2026-11-01. The page does not need it, but the homes feed box (`G.homes`) may come back empty in preview.
