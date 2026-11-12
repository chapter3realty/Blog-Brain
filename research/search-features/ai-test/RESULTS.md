# The AI search, before and after the labels prompt (2026-11-10)

Each sentence was put to the site's own prompt (`idx-lib/map.js`), built from the live filter list by `build.js`. A Haiku helper answered each one as the site's Haiku 5.5 would. `run.py` then ran each answer's filters on the live search (`/homes/api/map`). "Homes" is the live total.

| Buyer wrote | Before: filters | Homes | After: filters | Homes |
|---|---|---|---|---|
| Big kitchen, loft, home office | `has=big_kitchen,loft,home_office` | 29 | `has=big_kitchen,loft,home_office` | 29 |
| House with a screened pool and room for my boat in Murrells Inlet | `has=screened_pool,boat_access,rv_boat_parking&type=house&city=Murrells+Inlet` | 1 | `has=screened_pool,rv_boat_parking&type=house&city=Murrells+Inlet` | 1 |
| I want a dock on the water for my boat under 900k | `has=water_access&max=900000&type=house&words=dock` | 101 | `has=private_dock&max=900000&type=house` | 54 |
| Retiring, want one level with a golf course view | `has=golf_view,one_level` | 294 | `has=golf_view,one_level` | 294 |
| Condo I can rent out by the night near the beach | `has=str_allowed,near_beach&type=condo` | 1856 | `has=str_allowed,near_beach&type=condo` | 1856 |
| White kitchen with an island and a fenced yard for the dog | `has=white_kitchen,kitchen_island,fenced_yard` | 535 | `has=white_kitchen,kitchen_island,fenced_yard&type=house` | 476 |
| House with an in-law suite for my mom | `has=in_law_suite&words=[]` | 187 | `has=in_law_suite` | 187 |
| Detached garage or a workshop for my tools | `has=workshop&type=house` | 251 | `has=workshop&type=house` | 251 |
| Home with an elevator in North Myrtle Beach | `has=home_elevator&city=North+Myrtle+Beach` | 207 | `has=home_elevator&city=North+Myrtle+Beach` | 207 |
| Updated home with a pool and an outdoor kitchen | `has=pool,outdoor_kitchen,renovated&type=house` | 10 | `has=pool,outdoor_kitchen&type=house` | 89 |
| Quiet wooded lot with a big yard and no HOA | `has=wooded_lot,big_yard,quiet_street&type=house&hoa=0` | 3 | `has=wooded_lot,big_yard&type=house&hoa=0` | 26 |
| House with a bonus room and a 3 car garage | `has=bonus_room,garage_three_car` | 74 | `has=bonus_room,garage_three_car` | 74 |
| Oceanfront condo with a big balcony | `has=water_ocean,balcony&type=condo` | 1091 | `has=water_ocean,balcony&type=condo` | 1091 |
| Farmhouse with acreage and a barn for horses | `has=acreage_lot,barn,farmhouse_style&type=house&words=['horse']` | 0 | `has=horse_property,acreage_lot&type=house` | 6 |
| Home office with doors, close to the hospital | `has=office_with_doors,hospital_10mi` | 108 | `has=office_with_doors,hospital_10mi` | 108 |
| Shiplap and vaulted ceilings | `has=shiplap,vaulted_ceilings` | 24 | `has=vaulted_ceilings,shiplap` | 24 |
| Move in ready 4 bed in Carolina Forest under 450k | `has=move_in_ready,area_carolina_forest&max=450000&beds=4` | 16 | `has=move_in_ready,area_carolina_forest&max=450000&beds=4` | 16 |
| Lake view home with a private dock | `has=lake_view&type=house&words=dock` | 60 | `has=private_dock,lake_view&type=house` | 25 |

What changed:
- The dock questions use `private_dock`, homes with a dock seen in a photo or stated in the description. They no longer use the word "dock", which also matched community docks and "no dock".
- Guesses that cut the list are gone: `boat_access` beside boat parking, `quiet_street`, `renovated` for "updated". Those wishes go to the description reader instead.
- "Detached garage or a workshop" keeps `workshop` (251 homes).
- "Carolina Forest" is the area key, not a subdivision name.
- One home for a screened pool and boat parking in Murrells Inlet is what the market has: 42 homes for sale have a screened pool at all.

# Wishes are light filters (2026-11-12, website v1.11, CRM Tickets 671-672)

Owner, 2026-11-11: "the Ai will need to be subjective at times such as 'big Blank' 'open Blank' ... show them houses that match all the smaller features they mentioned and not rely on a filter from the MLS for that subjective thing but we show them whatever unique feature they mentioned as the preview". 2026-11-12: "keep big kitchen as a light filter but just show nice kitchens in their price range".

The prompt now gives a wish its own list, `want`. A wish is about the size, openness, newness, feel or style of a room or a yard. The CRM meets it with any feature of its family (a big kitchen: big, chef's, big island, updated or double oven, about 1 home in 4). The card shows that room. When nothing is found, the wish goes first. Same method as above, 23 sentences, the last 5 new. "Homes" is the live total of the `has` part alone, on 2026-11-12, before the CRM that reads `want` was deployed.

| Buyer wrote | has (filters) | want (light) | Homes, has part |
|---|---|---|---|
| Big kitchen, loft, home office | loft, home_office | big_kitchen | 214 |
| Updated home with a pool and an outdoor kitchen | pool, outdoor_kitchen | renovated | 128 |
| Quiet wooded lot with a big yard and no HOA | wooded_lot, no HOA, house | big_yard, quiet_street | 51 |
| Move in ready 4 bed in Carolina Forest under 450k | area_carolina_forest, 4 beds, max 450k | move_in_ready | 66 |
| Farmhouse with acreage and a barn for horses | horse_property, acreage_lot, house | farmhouse_style | 6 |
| Big open kitchen with an island near the beach under 600k | kitchen_island, near_beach, max 600k | big_kitchen, open_kitchen | 690 |
| Bright updated house with a big backyard in Conway | house, Conway | big_yard, renovated | 636 |
| Big kitchen | (none) | big_kitchen | all |
| Nice private backyard with a pool | pool, house | private_backyard | 433 |
| Spa bathroom and a big primary bedroom, one level | one_level | spa_bath, big_primary | 4,656 |

The other 13 sentences kept the same filters as above (a dock is `private_dock`, an elevator `home_elevator`). The farmhouse row is the answer to the final prompt, with styles as wishes: before it, `farmhouse_style` was a filter and found 0.

Labeled homes that meet each wish (first-pass label file, 8,889 homes): big_kitchen 1 in 4 (exact label 489); renovated 2,864 (exact 532); big_yard 1,327 (exact 663); private_backyard 944 (exact 349); spa_bath 395 (exact 183); big_primary 993 (exact 742).

## The preview photo, measured before the change (live, 2026-11-11)

The first 144 cards of a one-feature search:

| Feature | Card shows it | Stated, no photo labeled | MLS box only |
|---|---|---|---|
| Fireplace | 82% | 5% | 11% |
| Private dock | 50% | 33% | 18% |
| Home office | 52% | 15% | 38% |
| Outdoor kitchen | 27% | 28% | 45% |
| Pool | 25% | 19% | 53% |
| Bonus room | 7% | 57% | 36% |
| Boat access | 0% | n/a | 99% |

A card never showed the wrong photo when the right one was labeled. The fixes: homes with a photo of the feature come first (CRM 671); the rarest feature asked wins the card, with stand-ins (a dock for boat access); a second look at every photo of 7,200 homes (CRM 672).
