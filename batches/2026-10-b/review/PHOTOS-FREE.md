# Free-licensed photos for batch 2026-10-b

These photos fill the gaps until the photo partner shoots the places (`photo-request-abdulla.html`). Each one has a record in `data/photos.json` and two files, 600 and 1200 px wide, with the metadata written in. `node tools/photos.js check` passes, and `tools/image-meta.js` passes on a test page that shows every one of them.

Sources, checked on 2026-10-15:

- Wikimedia Commons, only files the uploader took ("Own work"). I read each file page for the author, the license and the place. Two files that looked right were not: "Cherry Grove beach.JPG" is on Fire Island, New York, and "Downtown Conway.jpg" is in Conway, Arkansas. Neither is used.
- U.S. Geological Survey, baseline oblique aerial survey of August 24, 2011 (data release https://doi.org/10.5066/F7N877XX). A plane flew 500 feet up, about 1,200 feet offshore. Public domain; USGS asks to be named as the source. These photos are from 2011, so each caption says the year.

The page writers place the photos. The records give a caption and alt text; a writer may pass better ones. A caption with a year in it is not used in the credits list; the credits then use the alt text.

Files are in `batches/2026-10-b/images/<folder>/`, served as `/images/buyers/<folder>/`. Use the name below with `findPhoto` (for example `rec("pine-lakes-clubhouse")`).

## No-HOA homes (`no-hoa/`)

Before: 4 of 16 areas had a picture (Cherry Grove, Conway, Loris, Aynor). Now 9 of 16 have one. Cherry Grove and Conway each gain a second choice.

| Area | File | What it shows | License | Caption |
|---|---|---|---|---|
| Downtown Myrtle Beach | `downtown-myrtle-beach-pleasant-inn` | The Pleasant Inn, a two-story wood guest house from about 1927, under live oaks at 200 Broadway Street. It is on the National Register. | Public domain (Pubdog, own work, 2010) | The Pleasant Inn, a wood guest house from about 1927, on Broadway Street in downtown Myrtle Beach. |
| Myrtle Heights | `myrtle-heights-older-house-on-ocean-boulevard` | An older two-story white house with columns at 3701 North Ocean Boulevard, seen from the street. Part of the Myrtle Heights-Oak Park Historic District. | Public domain (Pubdog, own work, 2010) | An older two-story house on North Ocean Boulevard in Myrtle Heights. It is part of the Myrtle Heights-Oak Park Historic District. |
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
