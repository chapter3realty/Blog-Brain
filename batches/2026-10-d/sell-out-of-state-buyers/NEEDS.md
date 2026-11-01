# Shared helper needs: /sell/out-of-state-buyers/

Work around each inside the spec until the lead decides.

1. **A column chart for 12 months** (glass.js). `G.bars` draws one horizontal bar per row. The page's month chart (facts row 8) has 12 rows; vertical columns in month order read better on a phone and wide screen. Workaround: 12 compact horizontal rows in month order with `G.bars`, or a small SVG in the spec built from `out-of-state-buyers-summary.json`.
2. **A shaded map by Census place** (area-map.js). The place shares (facts row 5) would read best as places shaded by share. area-map.js pins places with markers. Workaround: labelled pins, or a ranked bar list instead of a map.
3. **The CRM listings API** (https://chapter3realty.com/homes/api/map) returned {"ok":false,"error":"unavailable"} on 2026-11-01. The page does not need it, but the homes feed box (`G.homes`) may come back empty in preview.

## Writer, 2026-11-01 (build)

4. **exiftool is not installed in this container.** `tools/photos.js` embeds credit and license metadata with it. The writer ran a private copy of Image-ExifTool 13.10 (the CPAN tarball, unpacked in the scratch folder, put on PATH only for that command). The page's five webp files carry their metadata; `node tools/image-meta.js <site>/chapter3realty --only /sell/out-of-state-buyers/` passes with that copy on PATH. Without exiftool on PATH, image-meta.js fails for every page. The lead may want exiftool in the environment.
5. **Workarounds inside the spec, not shared helpers:** the month chart is a 12-tile glass grid (NEEDS 1); the place pattern is a compact ranked list with G.bars (NEEDS 2); the numbered steps and the signing diagram are styled inside the spec (`.c3-steps`, an inline SVG). A shared steps component in glass.js would let other pages reuse them.
6. **Owner questions still open (PLAN.md 1 to 5).** The page claims only: we list and show the home, the offer and contract are signed by e-signature, the attorney's office prepares the deed and sends the money after closing, and we go through the disclosure form with the seller. Keys, meeting the inspector and appraiser, storm checks, the ad states and the listing media (video, drone, 3D) are left out until the owner answers.
7. **The photo.** Wikimedia Commons answered 429 all day, so the 2006 Conway courthouse photo and the "Hotels along the Grand Strand" photo were not used. The page uses one USGS 2011 oblique aerial (public domain, the same data release as the batch 2026-10-b photos): three oceanfront towers the county layer lists as BAYWATCH RESORT HPR, inside North Myrtle Beach city. The record is `data/2026-10-d/sell-out-of-state-buyers/photos.json`; the building name is kept out of the caption. Shot list: `shot-list.md`.
