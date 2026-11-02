# Needs from shared files: /submarkets/garden-city/

Batch 2026-11-a. Research helper, 2026-11-02. These are shared files this page may not edit.

1. **`idx-lib/feeds.js`, `GARDEN_CITY` feed (line 123).** The judge saw the homes row read "Just listed near Garden City, in Surfside Beach": the feed fell back to Surfside. The CRM has 196 active homes in `has=area_garden_city` (2026-11-02), 144 or more at $250,000 and up, so the fallback should not be needed; the likely cause is the QUALITY post-filter (12 photos, year built 1975 or later, 900 square feet) removing older beach cottages and manufactured homes. Ask: lower `yearMin` for this feed or give it a second query (`type=condo`), and make the fallback a Garden City feed, never another town. Give it a title that says what it shows ("Homes for sale in Garden City").
2. **`data/str-market.json`, Garden City Beach.** It holds AirROI's August read ($33,942, 36.2 percent, 395 listings, retrieved 2026-08-15; its 90-day refresh is due 2026-11-13). AirROI's page now says $41,223, 39.6 percent, $371, 374 listings, 12 months to September 2026 (ledger row 23; parsed copy in `data/2026-11-a/submarkets-garden-city/airroi.json`). The lead should refresh the whole file once (`node build.js strdata`, then `preflight`) so every page shows one value. Until then this page should read the same source as the hub.
3. **`data/headlines.json`.** Keep the H1 the owner liked. Proposed title tag (shared file): "Garden City, SC Real Estate: Beach Homes, Rentals, Flood Facts" (62 characters, the mkpage limit). It carries what people search ("garden city sc real estate", "homes for sale") while the H1 keeps the rental hook. The lead decides.
4. **A map helper.** The page's main visual is a labeled map on a public-domain aerial (or drawn) with a county line, one road, the pier and five numbered parts. If `tools/area-map.js` cannot draw a line feature (the county line, Waccamaw Drive), the builder draws it inside the spec from `map-layers.geojson`; a line-feature option in area-map.js would help the other town pages too.
5. **Breadcrumb.** The live page sits under "Investor Hub". If the site has a towns hub, the breadcrumb should point there (shared chrome).

## Added by the builder, 2026-11-02

6. **exiftool is not installed in the container.** `node tools/photos.js embed` refused, so the five NAIP files carry no embedded XMP yet. Their records pass `photos.js check`. Run `node tools/photos.js embed data/2026-11-a/submarkets-garden-city/photos.json chapter3realty` where exiftool exists.
7. **The homes feed still reads "Just listed near Garden City, in Surfside Beach"** in the preview (item 1 above). The page itself carries no listing data.
8. **The end band and the 1024 px header gap.** The spec repeats the same page-scoped CSS fixes as /submarkets/conway/ (glass.js compact rule; header nav gap). A shared fix would let both specs drop them.
9. **The STR box.** The page reads AirROI's fresh read from `data/2026-11-a/submarkets-garden-city/airroi.json` (row 23: $41,223, 39.6 percent, $371, 374 listings). When the lead refreshes `data/str-market.json` (item 2), the hub and this page agree.

## Added in fix round 1, 2026-11-02

10. **The homes feed (items 1 and 7) is now blocking for the owner's read.** All three reviewers saw "Just listed near Garden City, in Surfside Beach" with no homes. The owner's reviewer asks the lead to fix `idx-lib/feeds.js` `GARDEN_CITY` before the page goes to him: a Garden City fallback, never another town, and a title such as "Homes for sale in Garden City".
11. **Ground photos.** Every photo on the page is from the air (four USDA NAIP close-ups and one USGS oblique from over the ocean). The Wikimedia Commons API refused every request from this container ("too many requests") during the fix, so no CC photo could be found. The photo partner's shot list is in `shot-list.md`; the pier from the beach, the marsh from a dock, a street of houses west of Business 17 and the canals at the Georgetown end would replace the aerials one for one.
12. **Menu highlight.** The page's script sets `CUR="invest-strrules"` (it comes from tools/mkpage.js for every page; conway has the same), so the menu may highlight the short-term rental item. Shared file.
13. **Condo dues.** The reader asked for an ocean-side dues range. Dues are in the MLS detail (shown on the site only to registered visitors), so a public page cannot carry them. If the lead knows a public source (a building's posted budget, a county record), a dues row would finish the worked example.
