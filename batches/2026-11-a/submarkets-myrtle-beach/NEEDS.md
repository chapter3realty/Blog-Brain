# Needs: /submarkets/myrtle-beach/

Shared-file requests from the research stage. None blocks the page.

1. **CRM "inside city limits" flag.** The listing API's `inside_city_limits` flag and the county's city-limits polygon disagree on 572 of 2,831 Myrtle Beach-address pins (56 flagged inside that fall outside; 516 inside that are not flagged). Facts row 37. If the homes feed for this page filters on the flag, it will show the wrong homes. Ask the site owner to check how the flag is set (idx-lib), or have the feed use a polygon test.
2. **A homes feed for "can rent nightly, inside the city".** The page's homes row would be most useful as "condos for sale in oceanfront buildings inside the city" (`type=condo&has=oceanfront_building`) for the renter, and "houses inside the city" for the resident. The `str_allowed` flag is what the listing agent entered (facts row 10); do not title a feed "short-term rentals allowed" from it.
3. **The map.** `map-str-zones.geojson` has four classes and the city limits. If `tools/area-map.js` cannot draw filled polygons by class, the builder draws an inline SVG in the spec (as Conway did) and notes it here.
4. **`tools/checkpoint.sh` saves nothing when a pathspec does not exist yet.** `git add -N -- <paths>` fails as a whole when one path is missing (here `specs/myrtle-beach.js` and the images folder do not exist at the research stage), so new files are never marked and `web.patch` comes out empty. The research checkpoint was rerun with only the paths that exist. `submarkets-garden-city/web.patch` is also 0 bytes, likely for the same reason. Fix in the tool: add each pathspec on its own and skip the missing ones (for example `for p in "$@"; do [ -e "$WEB/$p" ] && git -C "$WEB" add -N -- "$p"; done`).

## Build stage (2026-11-02)

5. **Homes strips.** The spec uses the existing place slugs `grande-dunes`, `market-common` and `pine-lakes` from `data/2026-10-b/idx-places.json`. Their `pages` lists name only /buyers/best-neighborhoods/ and /buyers/gated-communities/. If the edge step fills a strip only for listed pages, add /submarkets/myrtle-beach/ to each. Until then the slots stay empty and take no space.
6. **The map** was drawn in the spec as an SVG file (`images/2026-11-a/submarkets-myrtle-beach/nightly-rental-zones-map.svg`), as item 3 expected. The coastline in `tools/geo/grand-strand-v2.json` sits a little off the city's own ocean edge at the south end, so a thin strip of land color shows between the city and the ocean there.
7. **Registry `rental-vs-residence-tax`** still says 4.3 times for the city (PROPOSED.md 1). The page says "almost four times" and gives the dollar figures from row 33.

## Fix round 1 (2026-11-02)

8. **The HOA fee, in aggregate.** The reader's first question on the condo math is the HOA fee. The CRM map API carries no fee, and the listing pages show it only to registered visitors. A middle monthly HOA fee for oceanfront one-bedrooms for sale inside the city, counted in aggregate, would answer it. Ask the site owner whether the feed can return the fee in aggregate (idx-lib), and whether an aggregate of active listings' fees may be shown on a public page.
9. **An oceanfront condo strip.** Part 4 (a condo on the oceanfront) has no homes strip, only a pill, because no place slug covers "condos in oceanfront buildings inside the city" (item 2). A slug such as `myrtle-beach-oceanfront` would let it carry one.
10. **Duplicate image.** `houses-and-towers-from-the-ocean-1200w.webp` here is byte-identical to the copy in `images/2026-11-a/buyers-common-mistakes/`. For the lead: keep one copy and point both pages at it, or give one page another photo.
