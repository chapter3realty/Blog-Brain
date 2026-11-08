# Every feature a buyer can ask the AI search for

Owner, 2026-11-08: "I want every feature that is possible for someone to ask for to be able to get searched for with the ai like Big kitchen loft Home office every feature please document hundreds and tell me how expensive it would be to create filters for them that the ai could find and label photos for."

## What exists today

- The search filters on **499 features** from the MLS's own fields: 216 places and distances, 86 outside, 84 inside, 39 about the listing, 34 community, 32 water, 8 kinds of home (`/homes/api/filters`, 2026-11-08).
- Since CRM Ticket 556, a word in the description ("dock", "elevator") is a filter too, and the AI reads each home's whole description before ranking it.
- The MLS checkbox misses what an agent did not tick: 122 houses have the Dock box, 228 say "dock" in the description.

## What this adds

**354 features** a buyer asks for in their own words. 272 have no MLS field at all; 82 widen an MLS field that agents often leave unticked. For each one the AI looks where it can be found:

- **The description and details:** 308 features. The AI reads every listing once and labels it.
- **The photos:** 190 features. The AI looks at every photo once and labels what it shows (a pool, an island, a loft, a dock, a water view). Then the search card can show the photo of what the buyer asked for.
- **Map data we already use:** 28 features (near a boat ramp, backs to woods).
- **An MLS field:** 31 features the CRM already has, listed so the AI knows them by their everyday names.

Never labeled, by rule: anything about who lives in or near a home (families, children, age except a community's stated 55-plus rule, religion, schools ranked by quality, "safe"). A room is a room: "playroom" describes the room, never the buyer.

## What it costs (Claude Haiku 5.5: $0.10 per million words in, $0.50 out)

| Work | When | Cost |
|---|---|---|
| Label all 8,785 listings from their descriptions | Once | about $1 (about $0.50 with the Batch API) |
| Label every photo, about 30 a listing, about 263,000 photos, sized to 768 px | Once | about $24 (about $12 with the Batch API) |
| The same at 512 px, enough to see a pool or an island | Once | about $17 (about $9 with the Batch API) |
| New listings, about 60 to 100 a day | Each month | about $3 to $7 |
| The search reading a sentence against 850 features instead of 500 | Each new sentence | under $0.001 more |
| Showing the matching photo on a card | Each search | free (the labels are stored) |

The photo captions agents write ("Kitchen", "Pool") come with the MLS data and cost nothing; where a caption names the feature, that photo needs no AI look. How many listings have captions cannot be counted from outside the CRM; the first run counts them.

How the numbers are worked: a description and its details are about 550 tokens; 20 listings to a call with the feature list (about 2,500 tokens) is about 13,500 tokens in and 1,300 out, $0.002 a call. A photo at 768 px is about 525 tokens; 10 photos to a call with the photo list is about 6,500 in and 500 out, $0.0009 a call. Estimates; the first 100 listings are run and measured before the rest.

## The work

1. **CRM:** a table of labels per listing and per photo, a nightly job that labels new and changed listings with the Batch API, the labels as search filters (each one OR its MLS field and its words), and the photo each label was seen in. A new table needs its SQL run on the real database before it ships, and the job spends on the CRM's own key, so the owner approves both.
2. **Website:** the AI reads a sentence against the whole list; a search card shows the photo that matches the first feature asked for; a filter chip for each label.
3. **First run on 100 listings,** checked by hand against their photos, before the rest. A label the AI is not sure of is not stored.

## The catalog

### Kitchen (32)

| Feature | Found in | Widens MLS field | Note |
|---|---|---|---|
| Big kitchen | description, photos |  | large, spacious, chef's; photos show the room's size |
| Chef's kitchen | description, photos |  |  |
| Kitchen island | description, photos | kitchen_island | photos find islands the MLS box misses |
| Big kitchen island | description, photos |  |  |
| Kitchen open to the living room | description, photos |  |  |
| Updated or new kitchen | description, photos |  | renovated, remodeled, new cabinets |
| White kitchen | photos |  |  |
| Dark cabinets | photos |  |  |
| Two-tone cabinets | photos |  |  |
| Shaker cabinets | description, photos |  |  |
| Granite counters | description, photos |  |  |
| Quartz counters | description, photos |  |  |
| Butcher-block counters | description, photos |  |  |
| Marble counters | description, photos |  |  |
| Tile backsplash | description, photos |  |  |
| Farmhouse sink | description, photos |  |  |
| Pot filler | description, photos |  |  |
| Gas range | description, photos | natural_gas | widens the gas-heat field to the stove |
| Double oven | description, photos | double_oven |  |
| Wall oven | description, photos |  |  |
| Vented range hood | description, photos |  |  |
| Wine fridge or cooler | description, photos |  |  |
| Beverage center | description, photos |  |  |
| Walk-in pantry | description, photos |  |  |
| Butler's pantry | description, photos |  |  |
| Coffee bar | description, photos |  |  |
| Breakfast nook | description, photos |  |  |
| Formal dining room | description, photos |  |  |
| Dining room for a big table | photos |  | room for 8 or more |
| Eat-in kitchen | description, photos | eat_in_kitchen |  |
| New appliances | description |  |  |
| Cooks with gas | description |  |  |

### Living spaces (47)

| Feature | Found in | Widens MLS field | Note |
|---|---|---|---|
| Open floor plan | description, photos |  |  |
| Great room | description |  |  |
| Two living areas | description |  |  |
| Family room and a living room | description |  |  |
| Den | description |  |  |
| Sunroom or Carolina room | description, photos | carolina_room |  |
| Florida room | description |  |  |
| Bonus room or FROG | description, photos | bonus_room | FROG: room over the garage |
| Room over the garage | description |  |  |
| Loft | description, photos | loft | owner's example |
| Home office | description, photos | office | owner's example; photos find offices the box misses |
| Two home offices | description |  |  |
| Office with doors | description, photos |  |  |
| Library or built-in bookshelves | description, photos |  |  |
| Built-in shelves or cabinets | description, photos |  |  |
| Media or theater room | description, photos | media_room |  |
| Game room | description, photos | rec_room |  |
| Man cave or she shed | description |  |  |
| Home gym | description, photos |  |  |
| Yoga or exercise room | description |  |  |
| Playroom | description |  | about the room, never who lives there |
| Craft or hobby room | description |  |  |
| Music room | description |  |  |
| Wet bar | description, photos |  |  |
| Dry bar | description, photos |  |  |
| Wine room or cellar | description, photos |  |  |
| Fireplace | description, photos | fireplace |  |
| Gas fireplace | description |  |  |
| Wood-burning fireplace | description |  |  |
| Two or more fireplaces | description |  |  |
| Stone fireplace | photos |  |  |
| High ceilings | description, photos | high_ceilings |  |
| Cathedral ceilings | description, photos |  |  |
| Coffered ceilings | description, photos |  |  |
| Shiplap walls | description, photos |  |  |
| Crown molding | description, photos |  |  |
| Wainscoting | description, photos |  |  |
| Accent wall | photos |  |  |
| Big windows or lots of light | description, photos |  | bright, sunny, natural light |
| Floor-to-ceiling windows | description, photos |  |  |
| French doors | description, photos |  |  |
| Sliding glass doors to the outside | description, photos |  |  |
| Transom windows | description, photos |  |  |
| Plantation shutters | description, photos |  |  |
| Recessed lighting | description, photos |  |  |
| Smart home features | description |  | smart thermostat, locks, lights |
| Surround sound | description |  |  |

### Bedrooms and baths (27)

| Feature | Found in | Widens MLS field | Note |
|---|---|---|---|
| Big primary bedroom | description, photos |  |  |
| Primary bedroom downstairs | description, MLS field | primary_main_floor |  |
| Two primary suites | description | two_primary_suites |  |
| Guest suite with its own bath | description |  |  |
| In-law suite or apartment | description | in_law_suite | works today through words |
| Separate entrance | description |  |  |
| Second kitchen or kitchenette | description, photos |  |  |
| Bunk room | description, photos |  | common in beach rentals |
| Jack-and-Jill bath | description |  |  |
| Walk-in closet in the primary | description | walk_in_closet |  |
| Two closets in the primary | description |  |  |
| Spa bathroom | description, photos |  |  |
| Updated bathrooms | description, photos |  |  |
| Walk-in shower | description, photos | walk_in_shower |  |
| Curbless or roll-in shower | description, photos |  | accessibility |
| Tile shower | photos |  |  |
| Rain shower head | description, photos |  |  |
| Shower with two heads | description, photos |  |  |
| Freestanding tub | description, photos |  |  |
| Clawfoot tub | description, photos |  |  |
| Soaking tub | description, photos | garden_tub |  |
| Double vanity | description, photos | dual_sinks |  |
| Makeup vanity | description, photos |  |  |
| Heated floors | description |  |  |
| Grab bars | description, photos |  | accessibility |
| Outdoor shower | description, photos |  | beach homes |
| A bath for every bedroom | description |  |  |

### Floors and finishes (16)

| Feature | Found in | Widens MLS field | Note |
|---|---|---|---|
| Hardwood floors | description, photos | hardwood_floors |  |
| Luxury vinyl plank floors | description, photos | luxury_vinyl |  |
| Tile floors | description, photos | tile_floors |  |
| No carpet | description, photos |  |  |
| Wood-look tile | description, photos |  |  |
| Heart pine floors | description |  |  |
| Brick floors | description |  |  |
| New flooring | description |  |  |
| Fresh paint | description |  |  |
| Neutral colors | photos |  |  |
| Modern finishes | description, photos |  |  |
| Coastal style | description, photos |  |  |
| Farmhouse style | description, photos |  |  |
| Mid-century modern | description, photos |  |  |
| Craftsman style | description, photos |  |  |
| Historic home | description |  |  |

### Outside the house (47)

| Feature | Found in | Widens MLS field | Note |
|---|---|---|---|
| Big backyard | description, photos |  | owner-style ask; photos and lot size |
| Fenced yard | description, photos | fenced_yard |  |
| Privacy fence | description, photos |  |  |
| Room for a pool | description |  |  |
| Flat, level yard | description, photos |  |  |
| Private backyard | description, photos |  | trees or no neighbors behind |
| No houses behind | description, map data |  | woods, pond, golf or preserve behind |
| Backs to woods | description, photos, map data |  |  |
| Backs to a pond or lake | description, photos, map data |  |  |
| Backs to a preserve | description, map data |  |  |
| Mature trees | description, photos |  |  |
| Live oaks | description, photos |  |  |
| Palm trees | photos |  |  |
| Landscaped yard | description, photos |  |  |
| Garden or raised beds | description, photos |  |  |
| Fruit trees | description |  |  |
| Chicken coop | description, photos |  |  |
| Horses allowed or barn | description |  |  |
| Barn | description, photos |  |  |
| Pole barn | description, photos |  |  |
| Shed | description, photos |  |  |
| Workshop | description, photos | workshop |  |
| She shed or studio | description, photos |  |  |
| Greenhouse | description, photos |  |  |
| Screened porch | description, photos | screened_porch |  |
| Wraparound porch | description, photos |  |  |
| Big front porch | photos |  |  |
| Covered patio | description, photos |  |  |
| Paver patio | description, photos |  |  |
| Pergola | description, photos |  |  |
| Gazebo | description, photos |  |  |
| Fire pit | description, photos |  |  |
| Outdoor fireplace | description, photos |  |  |
| Outdoor kitchen | description, photos | outdoor_kitchen |  |
| Built-in grill | description, photos |  |  |
| Outdoor TV | description, photos |  |  |
| Rooftop deck | description, photos |  |  |
| Upper balcony or deck | description, photos |  |  |
| Deck | description, photos | deck |  |
| Hammock or swing | photos |  |  |
| Playset in the yard | photos |  | about the yard, never who lives there |
| Basketball court | description, photos |  |  |
| Private pickleball or tennis court | description, photos |  |  |
| Putting green | description, photos |  |  |
| Sprinklers | description | irrigation |  |
| Irrigation well | description |  |  |
| Landscape lighting | description |  |  |

### Pool and spa (12)

| Feature | Found in | Widens MLS field | Note |
|---|---|---|---|
| Private pool | description, photos | private_pool | photos find pools the box misses |
| Saltwater pool | description |  |  |
| Heated pool | description |  |  |
| Screened pool or lanai | description, photos |  |  |
| Pool with a spa | description, photos |  |  |
| Infinity pool | description, photos |  |  |
| Plunge pool | description, photos |  |  |
| Pool slide | photos |  |  |
| Pool house or cabana | description, photos |  |  |
| Hot tub | description, photos | hot_tub |  |
| Swim spa | description |  |  |
| Wired for a hot tub | description |  |  |

### Water, boats and the beach (21)

| Feature | Found in | Widens MLS field | Note |
|---|---|---|---|
| Dock | description, photos | dock | works today through words |
| Covered dock | description, photos |  |  |
| Floating dock | description, photos |  |  |
| Boat lift | description, photos |  | works today through words |
| Jet ski lift | description, photos |  |  |
| Kayak launch | description, photos |  |  |
| Boathouse | description, photos |  |  |
| Seawall or bulkhead | description, photos |  |  |
| No fixed bridges to the ocean | description |  |  |
| Deep water | description | deep_water |  |
| Water view from the bedroom | description, photos |  |  |
| Sunset view | description, photos |  |  |
| Sunrise over the water | description, photos |  |  |
| Marsh view | description, photos | marsh_view |  |
| Golf course view | description, photos | golf_view |  |
| Direct oceanfront | description, photos | water_ocean |  |
| Walk to the beach | description, map data | walk_to_beach |  |
| Golf-cart ride to the beach | description, map data |  |  |
| Private beach walkover | description, photos |  |  |
| Outdoor shower or rinse | description, photos |  |  |
| Near a fishing pier | map data |  |  |

### Parking and storage (16)

| Feature | Found in | Widens MLS field | Note |
|---|---|---|---|
| Two-car garage | description, MLS field |  |  |
| Three-car garage or bigger | description |  |  |
| Oversized garage | description |  |  |
| Tandem garage | description |  |  |
| Golf-cart garage | description | golf_cart_garage |  |
| Room for a boat or RV | description | rv_boat_parking |  |
| RV hookup | description |  |  |
| Covered RV or boat storage | description, photos |  |  |
| Circular driveway | description, photos |  |  |
| Long private driveway | description, photos |  |  |
| Side-load garage | description, photos |  |  |
| Parking under the house | description, photos | raised_home | beach houses on pilings |
| Storage room | description |  |  |
| Walk-in attic | description |  |  |
| Epoxy garage floor | description, photos |  |  |
| EV charger | description, photos |  |  |

### Systems, energy and storm readiness (22)

| Feature | Found in | Widens MLS field | Note |
|---|---|---|---|
| New roof | description | new_roof |  |
| Metal roof | description, photos |  |  |
| Architectural shingle roof | description |  |  |
| New heating and air | description | new_hvac |  |
| Heat pump | description |  |  |
| Mini-split units | description, photos |  |  |
| Tankless water heater | description |  |  |
| Solar panels (owned) | description, photos | solar_panels |  |
| Whole-house generator | description, photos | generator |  |
| Impact or hurricane windows | description |  |  |
| Hurricane shutters | description, photos |  |  |
| Storm doors | description | storm_doors |  |
| Raised above flood level | description | raised_home |  |
| Flood vents | description |  |  |
| Never flooded (seller says) | description |  | the listing's own words only |
| Spray foam insulation | description |  |  |
| Encapsulated crawl space | description |  |  |
| Water softener | description | water_filtration |  |
| Reverse osmosis water | description |  |  |
| Fiber internet | description | high_speed_internet |  |
| Security cameras | description, photos |  |  |
| Energy Star | description |  |  |

### Accessibility and one-level living (7)

| Feature | Found in | Widens MLS field | Note |
|---|---|---|---|
| No steps to enter | description, photos |  |  |
| Ramp | description, photos |  |  |
| Wide doorways | description |  |  |
| Elevator in the home | description, photos | elevator_home |  |
| Stair lift | description, photos |  |  |
| Bedroom and bath on the first floor | description | bedroom_main |  |
| One story | description, MLS field | one_level |  |

### Layout and size (11)

| Feature | Found in | Widens MLS field | Note |
|---|---|---|---|
| Split bedroom plan | description | split_bedroom |  |
| Five or more bedrooms | MLS field |  | a number filter today |
| Flex room | description |  |  |
| Basement | description |  | rare here; buyers from the north ask |
| Third-floor loft or crow's nest | description, photos |  |  |
| Crow's nest with a view | description, photos |  |  |
| Laundry upstairs | description |  |  |
| Mudroom | description, photos |  |  |
| Drop zone or cubbies | description, photos |  |  |
| Dog wash station | description, photos |  |  |
| Dog run or dog door | description, photos |  |  |

### Lot and land (16)

| Feature | Found in | Widens MLS field | Note |
|---|---|---|---|
| Cul-de-sac | description, map data | cul_de_sac |  |
| Corner lot | description, map data | corner_lot |  |
| Oversized lot | description, MLS field |  |  |
| Half an acre or more | MLS field |  |  |
| Acreage | MLS field | acreage |  |
| No HOA | MLS field | hoa=0 |  |
| Could be split | description |  |  |
| Zoned for business use | description |  |  |
| Room to build a second home | description |  |  |
| Waterfront lot | description, MLS field |  |  |
| High ground | description |  | the listing's words; flood zone is a separate filter |
| Wooded lot | description, photos | wooded_lot |  |
| Cleared lot | description, photos |  |  |
| Pond on the property | description, photos |  |  |
| Creek on the property | description, photos |  |  |
| Room to hunt | description |  |  |

### Community (20)

| Feature | Found in | Widens MLS field | Note |
|---|---|---|---|
| Community pool | description, MLS field | community_pool |  |
| Lazy river | description |  |  |
| Resort-style pool | description |  |  |
| Clubhouse | description, MLS field | clubhouse |  |
| Fitness center | description |  |  |
| Pickleball courts | description |  |  |
| Tennis courts | description, MLS field | tennis |  |
| Walking trails | description |  |  |
| Dog park | description |  |  |
| Playground | description |  | about the amenity, never who lives there |
| Community boat ramp | description, MLS field | boat_ramp |  |
| Community dock | description, MLS field | community_dock |  |
| Community boat storage | description |  |  |
| Beach cabana or shuttle | description |  |  |
| Gated | description, MLS field | gated |  |
| Golf community | description, MLS field | golf_community |  |
| 55-plus or active adult | description, MLS field |  | an age rule set by the community, stated as fact only |
| Activities or social calendar | description |  |  |
| Low HOA fee | MLS field | hoaMax |  |
| HOA includes internet | MLS field | hoa_internet |  |

### Short-term rental and investment (10)

| Feature | Found in | Widens MLS field | Note |
|---|---|---|---|
| Nightly rentals allowed | MLS field | str_allowed |  |
| Rental income history | description |  |  |
| Turnkey, furnished rental | description | furnished |  |
| Sleeps 10 or more | description |  |  |
| In a rental program | MLS field | rental_program |  |
| Duplex or two units | description, MLS field |  |  |
| Apartment or second unit on the lot | description, photos |  |  |
| Garage apartment | description, photos |  |  |
| Tenant in place | description | rents_now |  |
| Listed as an investment | description |  |  |

### Condos and buildings (13)

| Feature | Found in | Widens MLS field | Note |
|---|---|---|---|
| Oceanfront condo | MLS field | oceanfront_unit |  |
| Corner unit | description, photos |  |  |
| End unit | description, MLS field | end_unit |  |
| Top floor | MLS field | top_floor |  |
| Penthouse | description |  |  |
| Balcony with a view | description, photos |  |  |
| Two balconies | description |  |  |
| Lock-out unit | description |  |  |
| Covered parking | description, MLS field | covered_parking |  |
| Building with an indoor pool | description, MLS field | indoor_pool |  |
| Building with a lazy river | description |  |  |
| Pet-friendly building | description, MLS field | pets_allowed |  |
| Built in the last 10 years | MLS field | yearMin |  |

### Condition and deal (12)

| Feature | Found in | Widens MLS field | Note |
|---|---|---|---|
| Move-in ready | description, photos | move_in_ready |  |
| Fixer-upper | description, photos | needs_work |  |
| Needs only cosmetic work | description |  |  |
| Fully renovated | description, photos | renovated |  |
| New construction | MLS field | new_construction |  |
| Motivated seller | description |  | the listing's own words only |
| Seller pays closing costs | description |  |  |
| Seller offers a rate buydown | description |  | never shows a rate |
| Comes furnished | description, MLS field | furnished |  |
| Golf cart included | description |  |  |
| Boat included | description |  |  |
| All appliances stay | description |  |  |

### Views and setting (9)

| Feature | Found in | Widens MLS field | Note |
|---|---|---|---|
| Long view over open land | photos |  |  |
| Pond view | description, photos | lake_view |  |
| Garden view | photos |  |  |
| City or skyline view | photos |  |  |
| No houses in view | photos |  |  |
| Quiet street | description, map data |  | traffic counts, cul-de-sac, the listing's words |
| Dead-end street | description, map data |  |  |
| Sidewalks | description, map data |  |  |
| Street lights | description |  |  |

### Near (map data, not the listing) (16)

| Feature | Found in | Widens MLS field | Note |
|---|---|---|---|
| Near a hospital | map data |  | already in the place keys |
| Near shopping | map data |  |  |
| Near The Market Common | map data |  |  |
| Near Broadway at the Beach | map data |  |  |
| Near the airport | map data |  |  |
| Near a marina | map data |  |  |
| Near a public boat ramp | map data |  |  |
| Near a golf course | map data |  |  |
| Near a public beach access | map data |  |  |
| Close to US 17 or SC 31 | map data |  |  |
| Away from the highway | map data |  |  |
| Near a bike path | map data |  |  |
| Near a park | map data |  |  |
| Near a beach that allows dogs | map data |  |  |
| Near a grocery store | map data |  |  |
| Near Coastal Carolina University | map data |  |  |
