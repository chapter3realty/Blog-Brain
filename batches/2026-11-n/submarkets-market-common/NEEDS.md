# Needs from the lead: /submarkets/myrtle-beach/market-common/

1. **Hub links.** /submarkets/myrtle-beach/ has a "The Market Common: shops, a lake and parks" entry; link it to this page in a sentence. /submarkets/ (hub) and /buyers/best-neighborhoods/ (its Market Common entry) should link here too. This page will link up to /submarkets/myrtle-beach/.
2. **One drive figure on the site.** /submarkets/surfside-beach/ prints "Market Common 14 min" from the pier (to the shopping center's point). This page measured 12.9 minutes from the pier to Valor Park. Use "about 13 to 14 minutes" here or adopt 14; tell the writer which (ledger row 28).
3. **Beach time from Valor Park.** /buyers/best-neighborhoods/ says "about five minutes from the beach by car" and this page measures 5.1 minutes to the 29th Avenue South access. Batch sibling /buyers/homes-near-the-beach/ may count the same trip: agree one figure ("about 5 minutes").
4. **Carolina Forest beach time** for the comparison table. The Carolina Forest page says "about 10 to 15 minutes"; no ledger row here verifies it. Either the lead points to a verified row, or the cell says "see the Carolina Forest page".
5. **Map tool.** `tools/area-map.js` needs the neighborhood outlines (`map-layers.geojson`, layer "hood") and the noise area (`map-noise.geojson`). If the tool cannot draw a soft shaded polygon with an approximate edge, the writer needs a static SVG built from those files.
6. **Photo licence records.** Reuse the existing record for the lake photo (`data/photos.json`, "market-common-lake", 55-plus folder) instead of a second copy. New files go under `images/2026-11-n/submarkets-market-common/`.

## Added by the writer, 2026-11-08 (after the first build)

7. **Sitemap and llms.txt.** `build.js audit` reports the page missing from `sitemap.xml` and `llms.txt`, and an orphan (no body link in). These are shared files; the lead adds the page with the hub links in item 1.
8. **Item 2 settled on the page:** the comparison says "about 13 to 14 min" from Valor Park to the Surfside Beach Pier (ledger row 28 note).
9. **Item 4 settled on the page:** the Carolina Forest beach time is not printed. The comparison row is "By car from Valor Park": about 25 min to the Carolina Forest library (row 28) and about 13 to 14 min to the Surfside pier.
10. **Item 5 settled:** both maps are inline SVG drawn in the spec from `map-layers.geojson` and `map-noise.geojson` on NAIP 2023 aerials (`images/naip.py`, `images/prep.py`), as on /submarkets/pawleys-island/. No change to `tools/area-map.js` is needed.
11. **Item 6 settled:** the lake photo reuses the site record (`data/photos.json`, market-common-lake). New photo files are in `images/2026-11-n/submarkets-market-common/` with records in `data/2026-11-n/submarkets-market-common/photos.json`.
12. **Footer partial.** `build.js check` reports "footer differs from partials/footer.html" on 158 pages, this one among them. It is site-wide and comes from the partial, not this page; `node build.js stitch` (the lead's step) clears it.
13. **High Market outline is in the wrong place in `map-layers.geojson`.** Its outline sits west of the ball fields (about 78.948 W, 33.666 N), but the county's 37 "HIGH MARKET HPR" condo parcels are south of Valor Park (about 78.9399 W, 33.662 N; ledger row 9 note; RAW parcels.json). The page's map leaves High Market's outline off and names no place for it on the map. The researcher's `analyze.py` should be checked for how it merged that group's outline; the counts, sales and walk start (from the parcel points) are right.
14. **Stale site photo record.** `data/photos.json` has a record for `images/55-plus/del-webb-grande-dunes/market-common-lake*.webp`, but those files are not in the site or on the live server (404). This page uses its own copy of the same Commons photo (`images/2026-11-n/submarkets-market-common/market-common-grand-park-lake-*.webp`). Any page that uses the old record shows a broken image.

## Added in review round 1, 2026-11-08

15. **Live homes feed.** `idx-lib/feeds.js` has no key for /submarkets/myrtle-beach/market-common/, so the page may fall back to the Myrtle Beach town feed. Add a "Top homes in The Market Common" feed with subdivision=Market Common (owner reviewer, round 1).
16. **Hub links (repeat of item 1).** SEO S8 and site-audit "inbound" still fail: no page links here from body copy. /submarkets/myrtle-beach/ and /buyers/best-neighborhoods/ should link in with a sentence.
17. **Header at 980 to 1099 px.** The page now carries the same `header nav.primary{gap:2.4rem}` line as pawleys-island.js; critic.mjs measures 1024 px with no sideways scroll. If the stitch's header partial already fixes this sitewide, the line can go.
