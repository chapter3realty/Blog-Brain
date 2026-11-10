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
