# Free-licensed photos for batch 2026-10-b

These photos fill the gaps until the photo partner shoots the places (`photo-request-abdulla.html`). Each one has a record in `data/photos.json` and two files, 600 and 1200 px wide, with the metadata written in. `node tools/photos.js check` passes, and `tools/image-meta.js` passes on a test page that shows every one of them.

Sources, checked on 2026-10-15:

- Wikimedia Commons, only files the uploader took ("Own work"). I read each file page for the author, the license and the place. Two files that looked right were not: "Cherry Grove beach.JPG" is on Fire Island, New York, and "Downtown Conway.jpg" is in Conway, Arkansas. Neither is used.
- U.S. Geological Survey, baseline oblique aerial survey of August 24, 2011 (data release https://doi.org/10.5066/F7N877XX). A plane flew 500 feet up, about 1,200 feet offshore. Public domain; USGS asks to be named as the source. These photos are from 2011, so each caption says the year.

The page writers place the photos. The records give a caption and alt text; a writer may pass better ones. A caption with a year in it is not used in the credits list; the credits then use the alt text.

Files are in `batches/2026-10-b/images/<folder>/`, served as `/images/buyers/<folder>/`. Use the name below with `findPhoto` (for example `rec("pine-lakes-clubhouse")`).

## No-HOA homes (`no-hoa/`)

Before: 4 of 16 areas had a picture (Cherry Grove, Conway, Loris, Aynor). Now 10 of 16 have one. Cherry Grove and Conway each gain a second choice.

| Area | File | What it shows | License | Caption |
|---|---|---|---|---|
| Downtown Myrtle Beach | `downtown-myrtle-beach-pleasant-inn` | The Pleasant Inn, a two-story wood guest house from about 1927, under live oaks at 200 Broadway Street. It is on the National Register. | Public domain (Pubdog, own work, 2010) | The Pleasant Inn, a wood guest house from about 1927, on Broadway Street in downtown Myrtle Beach. |
| Myrtle Heights | `myrtle-heights-older-house-on-ocean-boulevard` | An older two-story white house with columns on Ocean Boulevard, seen from the street. Part of the Myrtle Heights-Oak Park Historic District. | Public domain (Pubdog, own work, 2010) | An older two-story house on North Ocean Boulevard in Myrtle Heights. It is part of the Myrtle Heights-Oak Park Historic District. |
| Pine Lakes | `pine-lakes-clubhouse` | The white 1927 clubhouse of the Pine Lakes golf course. Cut to the building so no one at the pool is in the frame. 16:9. | Public domain (Pubdog, own work, 2010) | The 1927 clubhouse of the Pine Lakes golf course, in the Pine Lakes neighborhood of Myrtle Beach. |
| Crescent Beach | `crescent-beach-streets-from-the-ocean-2011` | Crescent Beach from a plane over the ocean: the beach, a few oceanfront buildings, and streets of beach houses behind them. | Public domain (U.S. Geological Survey, 2011) | Crescent Beach in North Myrtle Beach from over the ocean in 2011, with streets of beach houses behind the oceanfront. |
| Cherry Grove (second choice) | `cherry-grove-canals-from-the-ocean-2011` | Cherry Grove from a plane over the ocean: houses on the canals with docks, and the marsh behind. Clearer than the straight-down aerial now on the page. | Public domain (U.S. Geological Survey, 2011) | Cherry Grove in North Myrtle Beach from over the ocean in 2011: houses on the canals, with the marsh behind. |
| Surfside Beach, ocean side | `surfside-beach-houses-from-the-sand` | A row of beach houses behind the dunes, seen from the sand. Two beach tents; no one can be recognized. | CC BY-SA 4.0 (BullDawg2021, own work, 2023) | Beach houses along the sand at Surfside Beach. |
| Garden City Beach | `garden-city-beach-and-marsh-from-the-ocean-2011` | The south end of Garden City Beach from a plane over the ocean: beach houses between the sand and the marsh creeks, with docks on the far shore. | Public domain (U.S. Geological Survey, 2011) | Garden City Beach from over the ocean in 2011: beach houses, and the marsh and creeks behind them. |
| Conway (second choice) | `conway-older-house-and-oak` | An older white house behind a big oak, with a driveway, in the Conway Residential Historic District. The house number is blurred. | Public domain (Pubdog, own work, 2010) | An older house with a driveway and a big oak, in the residential historic district of Conway. |

Not found, still no picture: Plantation Point, Windy Hill, Ocean Drive, Little River waterfront, Socastee, the country around Loris. Loris town keeps its weak Main Street photo.

- Commons has only an 800 px photo of the Socastee Swing Bridge (too small; the rule is 1200 px) and nothing usable for Plantation Point, Little River, Ocean Drive or the country around Loris.
- The 2011 USGS flight skipped the Ocean Drive stretch (it turned at sea there). Its Windy Hill frames show mostly condo towers, which is not the point of that entry.
- A Commons photo of the John P. Derham House (Green Sea) was left out: Green Sea is outside the "around Loris" area, and the entry is about new houses on big lots, not a 1900 farmhouse.

Notes for the writer:

- The Pine Lakes clubhouse photo is wide (16:9). It suits a wide slot better than a 4:3 card.
- The three USGS photos are 2011. Most houses are the same today, but a reader should see the year, so it is in each caption.
- None of these has the 1x1, 4x3 and 16x9 crops a hero needs. If one becomes a page's hero, run `node tools/photos.js crops`.

## Gated communities (`gated-communities/`)

Both are taken from over the ocean, outside any gate, and were published by the U.S. government.

| Community | File | What it shows | License | Caption |
|---|---|---|---|---|
| DeBordieu Colony | `debordieu-beach-houses-from-the-ocean-2011` | Large beach houses behind the dunes, more houses among live oaks, and the salt marsh behind. | Public domain (U.S. Geological Survey, 2011) | DeBordieu Colony from over the ocean in 2011: houses behind the dunes, with the salt marsh beyond. |
| Litchfield by the Sea | `litchfield-by-the-sea-oceanfront-from-the-ocean-2011` | Condominium buildings and pools by the beach, tennis courts, and villas around the lakes. Matches the "large buildings by the beach" in the current aerial. | Public domain (U.S. Geological Survey, 2011) | Litchfield by the Sea from over the ocean in 2011: condominium buildings and pools by the beach, with tennis courts and villas around the lakes behind. |

Not found: a free photo of any clubhouse, marina or course at Heritage Plantation, The Reserve, Litchfield Plantation, Wachesaw, Barefoot, Grande Dunes or Tidewater. Commons has none from the uploader's own camera. The only Grande Dunes photos are of the Marriott hotel, whose subject is a brand. Tidewater sits behind the marsh at Hog Inlet; in the 2011 flight it is too far back to see.

## Best neighborhoods (`best-neighborhoods/`)

| Neighborhood | File | What it shows | License | Caption |
|---|---|---|---|---|
| Market Common | `market-common-warbird-park-jets` | Warbird Park: two jets from the old Myrtle Beach Air Force Base on a round plaza under tall pines. No people. 16:9, cut from the left. | Public domain (Carol M. Highsmith, 2017, Library of Congress) | Warbird Park at The Market Common, with jets from the old Myrtle Beach Air Force Base. |

The no-HOA photos above can also serve this page: `cherry-grove-canals-from-the-ocean-2011` (Cherry Grove), `pine-lakes-clubhouse` (Pine Lakes), `surfside-beach-houses-from-the-sand` (Surfside Beach).

Not found: Grande Dunes (only the Marriott hotel), Waterbridge, Wild Wing, Deerfield, Tidewater, Plantation Lakes, and the Barefoot swing bridge. Commons has no own-work photo of any of them, and the USGS flight follows the beach, not the waterway.

## Affordable places to live (`affordable/`)

| Place | File | What it shows | License | Caption |
|---|---|---|---|---|
| Conway area | `conway-main-street-downtown` | Main Street at Third Avenue: two-story brick and stone shops, trees, parked cars. Shop names are small and not the subject. | Public domain (Pubdog, own work, 2010) | Main Street in downtown Conway. |

`conway-older-house-and-oak` (no-HOA folder) also fits a Conway entry.

Not found: Parkview and the Whispering Pines golf course, Wild Wing, and the North Myrtle Beach Park and Sports Complex. Commons has no own-work photo of them, and the Library of Congress and U.S. agencies have none I could find.

## Counts

| Page | New photos | Areas still without a free photo |
|---|---|---|
| No-HOA homes | 8 (6 new areas, 2 second choices); 10 of 16 areas now have a picture | Plantation Point, Windy Hill, Ocean Drive, Little River, Socastee, country around Loris |
| Gated communities | 2 | Clubhouses, marinas and courses of all eight named communities |
| Best neighborhoods | 1 (and 3 from no-HOA that fit) | Grande Dunes, Waterbridge, Wild Wing, Deerfield, Tidewater, Plantation Lakes, Barefoot bridge |
| Affordable | 1 | Parkview / Whispering Pines, Wild Wing, North Myrtle Beach Park and Sports Complex |

The photo partner's shot list covers every place in the "not found" lists.
