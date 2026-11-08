# Builds the catalog of features a buyer can ask the AI search for (owner, 2026-11-08: "every feature that is
# possible for someone to ask for ... document hundreds"). Each line: key | label | where the AI finds it | MLS key it
# widens (or -) | note. Where: D = the listing description and details, P = the listing photos, M = an MLS field the
# CRM already has, G = public map data we already use (distances). Run: python3 build.py > catalog.json
import json, sys
SRC = {"D": "description", "P": "photos", "M": "MLS field", "G": "map data"}
RAW = """
## Kitchen
big_kitchen | Big kitchen | DP | - | large, spacious, chef's; photos show the room's size
chefs_kitchen | Chef's kitchen | DP | - |
kitchen_island | Kitchen island | DP | kitchen_island | photos find islands the MLS box misses
large_island | Big kitchen island | DP | - |
open_kitchen | Kitchen open to the living room | DP | - |
updated_kitchen | Updated or new kitchen | DP | - | renovated, remodeled, new cabinets
white_kitchen | White kitchen | P | - |
dark_cabinets | Dark cabinets | P | - |
two_tone_cabinets | Two-tone cabinets | P | - |
shaker_cabinets | Shaker cabinets | DP | - |
granite_counters | Granite counters | DP | - |
quartz_counters | Quartz counters | DP | - |
butcher_block | Butcher-block counters | DP | - |
marble_counters | Marble counters | DP | - |
tile_backsplash | Tile backsplash | DP | - |
farmhouse_sink | Farmhouse sink | DP | - |
pot_filler | Pot filler | DP | - |
gas_range | Gas range | DP | natural_gas | widens the gas-heat field to the stove
double_oven_any | Double oven | DP | double_oven |
wall_oven | Wall oven | DP | - |
range_hood | Vented range hood | DP | - |
wine_fridge | Wine fridge or cooler | DP | - |
beverage_center | Beverage center | DP | - |
walk_in_pantry | Walk-in pantry | DP | - |
butlers_pantry | Butler's pantry | DP | - |
coffee_bar | Coffee bar | DP | - |
breakfast_nook | Breakfast nook | DP | - |
formal_dining | Formal dining room | DP | - |
dining_seats_8 | Dining room for a big table | P | - | room for 8 or more
eat_in_kitchen_any | Eat-in kitchen | DP | eat_in_kitchen |
new_appliances | New appliances | D | - |
gas_cooking | Cooks with gas | D | - |
## Living spaces
open_floor_plan | Open floor plan | DP | - |
great_room | Great room | D | - |
two_living_areas | Two living areas | D | - |
family_room | Family room and a living room | D | - |
den | Den | D | - |
sunroom_any | Sunroom or Carolina room | DP | carolina_room |
florida_room | Florida room | D | - |
bonus_room_any | Bonus room or FROG | DP | bonus_room | FROG: room over the garage
frog | Room over the garage | D | - |
loft_any | Loft | DP | loft | owner's example
home_office | Home office | DP | office | owner's example; photos find offices the box misses
two_offices | Two home offices | D | - |
office_with_doors | Office with doors | DP | - |
library | Library or built-in bookshelves | DP | - |
built_ins | Built-in shelves or cabinets | DP | - |
media_room_any | Media or theater room | DP | media_room |
game_room | Game room | DP | rec_room |
man_cave | Man cave or she shed | D | - |
gym_room | Home gym | DP | - |
yoga_room | Yoga or exercise room | D | - |
playroom | Playroom | D | - | about the room, never who lives there
craft_room | Craft or hobby room | D | - |
music_room | Music room | D | - |
wet_bar | Wet bar | DP | - |
dry_bar | Dry bar | DP | - |
wine_room | Wine room or cellar | DP | - |
fireplace_any | Fireplace | DP | fireplace |
gas_fireplace | Gas fireplace | D | - |
wood_fireplace | Wood-burning fireplace | D | - |
two_fireplaces | Two or more fireplaces | D | - |
stone_fireplace | Stone fireplace | P | - |
high_ceilings_any | High ceilings | DP | high_ceilings |
cathedral_ceilings | Cathedral ceilings | DP | - |
coffered_ceilings | Coffered ceilings | DP | - |
shiplap | Shiplap walls | DP | - |
crown_molding | Crown molding | DP | - |
wainscoting | Wainscoting | DP | - |
accent_wall | Accent wall | P | - |
big_windows | Big windows or lots of light | DP | - | bright, sunny, natural light
floor_to_ceiling_windows | Floor-to-ceiling windows | DP | - |
french_doors | French doors | DP | - |
sliding_glass_doors | Sliding glass doors to the outside | DP | - |
transom_windows | Transom windows | DP | - |
plantation_shutters | Plantation shutters | DP | - |
recessed_lighting | Recessed lighting | DP | - |
smart_home | Smart home features | D | - | smart thermostat, locks, lights
surround_sound | Surround sound | D | - |
## Bedrooms and baths
big_primary | Big primary bedroom | DP | - |
primary_down | Primary bedroom downstairs | DM | primary_main_floor |
two_primaries | Two primary suites | D | two_primary_suites |
guest_suite | Guest suite with its own bath | D | - |
in_law_any | In-law suite or apartment | D | in_law_suite | works today through words
separate_entrance | Separate entrance | D | - |
mother_in_law_kitchen | Second kitchen or kitchenette | DP | - |
bunk_room | Bunk room | DP | - | common in beach rentals
jack_and_jill | Jack-and-Jill bath | D | - |
primary_walk_in | Walk-in closet in the primary | D | walk_in_closet |
his_and_hers_closets | Two closets in the primary | D | - |
spa_bath | Spa bathroom | DP | - |
updated_baths | Updated bathrooms | DP | - |
walk_in_shower_any | Walk-in shower | DP | walk_in_shower |
curbless_shower | Curbless or roll-in shower | DP | - | accessibility
tile_shower | Tile shower | P | - |
rain_shower | Rain shower head | DP | - |
double_shower | Shower with two heads | DP | - |
freestanding_tub | Freestanding tub | DP | - |
clawfoot_tub | Clawfoot tub | DP | - |
soaking_tub_any | Soaking tub | DP | garden_tub |
double_vanity | Double vanity | DP | dual_sinks |
makeup_vanity | Makeup vanity | DP | - |
heated_floors | Heated floors | D | - |
grab_bars | Grab bars | DP | - | accessibility
outdoor_shower | Outdoor shower | DP | - | beach homes
bath_per_bedroom | A bath for every bedroom | D | - |
## Floors and finishes
hardwood_any | Hardwood floors | DP | hardwood_floors |
lvp_any | Luxury vinyl plank floors | DP | luxury_vinyl |
tile_floors_any | Tile floors | DP | tile_floors |
no_carpet | No carpet | DP | - |
wood_look_tile | Wood-look tile | DP | - |
heart_pine | Heart pine floors | D | - |
brick_floors | Brick floors | D | - |
new_floors | New flooring | D | - |
new_paint | Fresh paint | D | - |
neutral_colors | Neutral colors | P | - |
modern_finishes | Modern finishes | DP | - |
coastal_style | Coastal style | DP | - |
farmhouse_style | Farmhouse style | DP | - |
mid_century | Mid-century modern | DP | - |
craftsman_style | Craftsman style | DP | - |
historic | Historic home | D | - |
## Outside the house
big_yard | Big backyard | DP | - | owner-style ask; photos and lot size
fenced_any | Fenced yard | DP | fenced_yard |
privacy_fence | Privacy fence | DP | - |
room_for_pool | Room for a pool | D | - |
flat_yard | Flat, level yard | DP | - |
private_backyard | Private backyard | DP | - | trees or no neighbors behind
no_rear_neighbors | No houses behind | DG | - | woods, pond, golf or preserve behind
backs_to_woods | Backs to woods | DPG | - |
backs_to_pond | Backs to a pond or lake | DPG | - |
backs_to_preserve | Backs to a preserve | DG | - |
mature_trees | Mature trees | DP | - |
live_oaks | Live oaks | DP | - |
palm_trees | Palm trees | P | - |
landscaped | Landscaped yard | DP | - |
garden_beds | Garden or raised beds | DP | - |
fruit_trees | Fruit trees | D | - |
chicken_coop | Chicken coop | DP | - |
horse_property | Horses allowed or barn | D | - |
barn | Barn | DP | - |
pole_barn | Pole barn | DP | - |
shed | Shed | DP | - |
workshop_any | Workshop | DP | workshop |
she_shed | She shed or studio | DP | - |
greenhouse | Greenhouse | DP | - |
screened_porch_any | Screened porch | DP | screened_porch |
wraparound_porch | Wraparound porch | DP | - |
rocking_chair_porch | Big front porch | P | - |
covered_patio | Covered patio | DP | - |
paver_patio | Paver patio | DP | - |
pergola | Pergola | DP | - |
gazebo | Gazebo | DP | - |
fire_pit | Fire pit | DP | - |
outdoor_fireplace | Outdoor fireplace | DP | - |
outdoor_kitchen_any | Outdoor kitchen | DP | outdoor_kitchen |
built_in_grill | Built-in grill | DP | - |
outdoor_tv | Outdoor TV | DP | - |
rooftop_deck | Rooftop deck | DP | - |
upper_balcony | Upper balcony or deck | DP | - |
deck_any | Deck | DP | deck |
hammock | Hammock or swing | P | - |
playset | Playset in the yard | P | - | about the yard, never who lives there
basketball_court | Basketball court | DP | - |
pickleball_court | Private pickleball or tennis court | DP | - |
putting_green | Putting green | DP | - |
sprinklers_any | Sprinklers | D | irrigation |
well_for_irrigation | Irrigation well | D | - |
lighting_outside | Landscape lighting | D | - |
## Pool and spa
pool_any | Private pool | DP | private_pool | photos find pools the box misses
saltwater_pool | Saltwater pool | D | - |
heated_pool | Heated pool | D | - |
screened_pool | Screened pool or lanai | DP | - |
pool_with_spa | Pool with a spa | DP | - |
infinity_pool | Infinity pool | DP | - |
plunge_pool | Plunge pool | DP | - |
pool_slide | Pool slide | P | - |
pool_house | Pool house or cabana | DP | - |
hot_tub_any | Hot tub | DP | hot_tub |
swim_spa | Swim spa | D | - |
room_for_hot_tub | Wired for a hot tub | D | - |
## Water, boats and the beach
dock_any | Dock | DP | dock | works today through words
covered_dock | Covered dock | DP | - |
floating_dock | Floating dock | DP | - |
boat_lift_any | Boat lift | DP | - | works today through words
jet_ski_lift | Jet ski lift | DP | - |
kayak_launch | Kayak launch | DP | - |
boathouse | Boathouse | DP | - |
seawall | Seawall or bulkhead | DP | - |
no_fixed_bridges | No fixed bridges to the ocean | D | - |
deep_water_any | Deep water | D | deep_water |
water_view_bedroom | Water view from the bedroom | DP | - |
sunset_view | Sunset view | DP | - |
sunrise_view | Sunrise over the water | DP | - |
marsh_view_any | Marsh view | DP | marsh_view |
golf_view_any | Golf course view | DP | golf_view |
direct_oceanfront | Direct oceanfront | DP | water_ocean |
walk_to_beach_any | Walk to the beach | DG | walk_to_beach |
beach_cart_path | Golf-cart ride to the beach | DG | - |
private_beach_walk | Private beach walkover | DP | - |
outdoor_rinse | Outdoor shower or rinse | DP | - |
pier_nearby | Near a fishing pier | G | - |
## Parking and storage
garage_two_car | Two-car garage | DM | - |
garage_three_car | Three-car garage or bigger | D | - |
oversized_garage | Oversized garage | D | - |
tandem_garage | Tandem garage | D | - |
golf_cart_garage_any | Golf-cart garage | D | golf_cart_garage |
boat_rv_any | Room for a boat or RV | D | rv_boat_parking |
rv_hookup | RV hookup | D | - |
covered_rv | Covered RV or boat storage | DP | - |
circular_drive | Circular driveway | DP | - |
long_driveway | Long private driveway | DP | - |
side_load_garage | Side-load garage | DP | - |
under_home_parking | Parking under the house | DP | raised_home | beach houses on pilings
storage_room | Storage room | D | - |
walk_in_attic | Walk-in attic | D | - |
epoxy_garage_floor | Epoxy garage floor | DP | - |
ev_charger | EV charger | DP | - |
## Systems, energy and storm readiness
new_roof_any | New roof | D | new_roof |
metal_roof | Metal roof | DP | - |
architectural_shingles | Architectural shingle roof | D | - |
new_hvac_any | New heating and air | D | new_hvac |
heat_pump | Heat pump | D | - |
mini_splits | Mini-split units | DP | - |
tankless_water | Tankless water heater | D | - |
solar_owned | Solar panels (owned) | DP | solar_panels |
whole_house_generator | Whole-house generator | DP | generator |
hurricane_windows | Impact or hurricane windows | D | - |
hurricane_shutters | Hurricane shutters | DP | - |
storm_doors_any | Storm doors | D | storm_doors |
elevated_home | Raised above flood level | D | raised_home |
flood_vents | Flood vents | D | - |
no_flood_history | Never flooded (seller says) | D | - | the listing's own words only
spray_foam | Spray foam insulation | D | - |
encapsulated_crawl | Encapsulated crawl space | D | - |
water_softener | Water softener | D | water_filtration |
reverse_osmosis | Reverse osmosis water | D | - |
fiber_internet | Fiber internet | D | high_speed_internet |
security_cameras | Security cameras | DP | - |
energy_star | Energy Star | D | - |
## Accessibility and one-level living
no_steps | No steps to enter | DP | - |
ramp | Ramp | DP | - |
wide_doors | Wide doorways | D | - |
elevator_home_any | Elevator in the home | DP | elevator_home |
stair_lift | Stair lift | DP | - |
first_floor_bedroom_bath | Bedroom and bath on the first floor | D | bedroom_main |
one_story_any | One story | DM | one_level |
## Layout and size
split_plan | Split bedroom plan | D | split_bedroom |
bedroom_count_5 | Five or more bedrooms | M | - | a number filter today
bonus_flex | Flex room | D | - |
basement | Basement | D | - | rare here; buyers from the north ask
third_floor_loft | Third-floor loft or crow's nest | DP | - |
crows_nest | Crow's nest with a view | DP | - |
upstairs_laundry | Laundry upstairs | D | - |
mudroom | Mudroom | DP | - |
drop_zone | Drop zone or cubbies | DP | - |
pet_washing | Dog wash station | DP | - |
dog_run | Dog run or dog door | DP | - |
## Lot and land
cul_de_sac_any | Cul-de-sac | DG | cul_de_sac |
corner_lot_any | Corner lot | DG | corner_lot |
oversized_lot | Oversized lot | DM | - |
half_acre | Half an acre or more | M | - |
acreage_any | Acreage | M | acreage |
no_hoa_any | No HOA | M | hoa=0 |
subdividable | Could be split | D | - |
zoned_commercial | Zoned for business use | D | - |
room_to_build | Room to build a second home | D | - |
waterfront_lot | Waterfront lot | DM | - |
high_ground | High ground | D | - | the listing's words; flood zone is a separate filter
wooded_any | Wooded lot | DP | wooded_lot |
cleared_lot | Cleared lot | DP | - |
pond_on_property | Pond on the property | DP | - |
creek_on_property | Creek on the property | DP | - |
hunting_land | Room to hunt | D | - |
## Community
community_pool_any | Community pool | DM | community_pool |
lazy_river | Lazy river | D | - |
resort_pool | Resort-style pool | D | - |
clubhouse_any | Clubhouse | DM | clubhouse |
fitness_center | Fitness center | D | - |
pickleball_community | Pickleball courts | D | - |
tennis_any | Tennis courts | DM | tennis |
walking_trails | Walking trails | D | - |
dog_park | Dog park | D | - |
playground_community | Playground | D | - | about the amenity, never who lives there
community_boat_ramp | Community boat ramp | DM | boat_ramp |
community_dock_any | Community dock | DM | community_dock |
boat_storage_community | Community boat storage | D | - |
beach_cabana | Beach cabana or shuttle | D | - |
gated_any | Gated | DM | gated |
golf_community_any | Golf community | DM | golf_community |
active_adult | 55-plus or active adult | DM | - | an age rule set by the community, stated as fact only
lifestyle_director | Activities or social calendar | D | - |
low_hoa | Low HOA fee | M | hoaMax |
hoa_includes_internet | HOA includes internet | M | hoa_internet |
## Short-term rental and investment
str_allowed_any | Nightly rentals allowed | M | str_allowed |
rental_history | Rental income history | D | - |
turnkey_rental | Turnkey, furnished rental | D | furnished |
sleeps_10 | Sleeps 10 or more | D | - |
rental_program_any | In a rental program | M | rental_program |
duplex_any | Duplex or two units | DM | - |
accessory_unit | Apartment or second unit on the lot | DP | - |
garage_apartment | Garage apartment | DP | - |
tenant_in_place | Tenant in place | D | rents_now |
cash_flow_listing | Listed as an investment | D | - |
## Condos and buildings
oceanfront_condo_any | Oceanfront condo | M | oceanfront_unit |
corner_unit | Corner unit | DP | - |
end_unit_any | End unit | DM | end_unit |
top_floor_any | Top floor | M | top_floor |
penthouse | Penthouse | D | - |
private_balcony_view | Balcony with a view | DP | - |
two_balconies | Two balconies | D | - |
lock_out | Lock-out unit | D | - |
covered_parking_condo | Covered parking | DM | covered_parking |
indoor_pool_building | Building with an indoor pool | DM | indoor_pool |
lazy_river_building | Building with a lazy river | D | - |
pet_friendly_condo | Pet-friendly building | DM | pets_allowed |
new_building | Built in the last 10 years | M | yearMin |
## Condition and deal
move_in_ready_any | Move-in ready | DP | move_in_ready |
fixer_upper | Fixer-upper | DP | needs_work |
cosmetic_only | Needs only cosmetic work | D | - |
fully_renovated | Fully renovated | DP | renovated |
new_construction_any | New construction | M | new_construction |
motivated_seller | Motivated seller | D | - | the listing's own words only
seller_concessions | Seller pays closing costs | D | - |
rate_buydown | Seller offers a rate buydown | D | - | never shows a rate
furnished_any | Comes furnished | DM | furnished |
golf_cart_included | Golf cart included | D | - |
boat_included | Boat included | D | - |
appliances_included | All appliances stay | D | - |
## Views and setting
mountain_style_view | Long view over open land | P | - |
pond_view | Pond view | DP | lake_view |
garden_view | Garden view | P | - |
skyline_view | City or skyline view | P | - |
no_neighbors_view | No houses in view | P | - |
quiet_street | Quiet street | DG | - | traffic counts, cul-de-sac, the listing's words
dead_end | Dead-end street | DG | - |
sidewalks | Sidewalks | DG | - |
street_lights | Street lights | D | - |
## Near (map data, not the listing)
near_hospital | Near a hospital | G | - | already in the place keys
near_shopping | Near shopping | G | - |
near_market_common | Near The Market Common | G | - |
near_broadway | Near Broadway at the Beach | G | - |
near_airport | Near the airport | G | - |
near_marina | Near a marina | G | - |
near_boat_ramp | Near a public boat ramp | G | - |
near_golf | Near a golf course | G | - |
near_beach_access | Near a public beach access | G | - |
near_highway | Close to US 17 or SC 31 | G | - |
far_from_highway | Away from the highway | G | - |
near_bike_path | Near a bike path | G | - |
near_park | Near a park | G | - |
near_dog_beach | Near a beach that allows dogs | G | - |
near_grocery | Near a grocery store | G | - |
near_ccu | Near Coastal Carolina University | G | - |
"""
cats, out = None, []
for line in RAW.strip().split("\n"):
    if line.startswith("## "): cats = line[3:]; continue
    p = [x.strip() for x in line.split("|")]
    key, label, where, mls, note = p[0], p[1], p[2], p[3], (p[4] if len(p) > 4 else "")
    out.append({"group": cats, "key": key, "label": label, "where": [SRC[c] for c in where if c in SRC],
                "mls": None if mls == "-" else mls, "note": note or None})
json.dump(out, sys.stdout, indent=1)
