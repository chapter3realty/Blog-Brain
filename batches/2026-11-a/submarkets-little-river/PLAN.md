# Plan: /submarkets/little-river/

Batch 2026-11-a, Lane U. Researcher's plan, 2026-11-02. Ledger: `facts.md` (46 rows). Must-answer list: `must-answer.md`. Data: `data/2026-11-a/submarkets-little-river/` (README there). Spec to write: `specs/little-river.js` (none exists; the live page was not spec-built).

## The reader and their job

A person who has heard Little River is the quieter, cheaper, boat-friendly end of the Grand Strand, and is deciding whether to live there. Often they own a boat or want one, or they are moving from up north and want water without oceanfront prices. They know none of the place names. Their job: **picture life in Little River, and know what living near the water really costs and offers here.**

What they want first: what a normal week is like and what a house costs. What worries them: flooding and hurricanes, and buying into the wrong kind of home (a condo with rules, a manufactured home they did not expect). What they ask next: who runs the place (it is not a town), how far the beach is, where the boat goes, what it costs each year.

The investor is a second, smaller reader. One section serves them, with HUD rents, a worked example with tax and no loan, and the nightly-rental filings, and links to the investor pages. The live page was an investor report with a town guide bolted on; the judge called it out.

## The deciding fact (checked first)

**Is Little River really a waterway place, and what does that mean for a buyer?** Yes, but not the way the old page implied. Two numbers decide the page:
- Only about 160 of about 10,000 houses touch the water (row 10). The water life here is the marinas, the deeded slips, the public landings and the waterfront, not a dock behind most houses.
- About 2 of every 3 deeded boat slips in Horry County are in Little River (row 12), and a slip at Mariner's Pointe sold for $10,000 to $38,000 (row 13). A buyer can own a slip for far less than a waterfront house.

With these, the page can sell Little River honestly to a boater: live in a quarter-acre neighborhood for about $357,000 and keep the boat in a slip you own, 3 minutes away. Without them it would repeat the old "waterway premium" story with no numbers.

## The findings no other site has

1. **Two of three deeded boat slips in the county are here, and what they sell for.** 223 of 322, at three marinas; Mariner's Pointe slips $10,000 to $38,000 (middle $16,500); one Lightkeepers slip $95,000; Dock Holidays in North Myrtle Beach $65,000 to $190,000 (middle $95,000). Rows 12 to 14. Counted from county parcels and our own pull of the deed index.
2. **What the homes really are.** 15,613 homes in the ZIP: 64 percent houses, 28 percent condos, 5 percent manufactured, 3 percent townhouses (row 7). Corrects the old page's "manufactured is a large part" (row 8; Census agrees at about 6 in 100, row 9). Only 1.6 percent of houses touch the water; most homes on the water are condos (rows 10, 11).
3. **A year-round place, proved.** 19 percent of homes seasonal at the 2020 Census, against 48 percent in North Myrtle Beach and 39 percent in Garden City (row 4). Nobody publishes this side by side.
4. **Flood, counted home by home.** 96 in 100 homes outside FEMA's high-risk zone; the 565 inside are mostly on the waterway (237 of 531 water homes) (rows 20, 21); a policy outside the zone about $480, inside about $1,250 (row 22); Hazel's 18-foot surge at Calabash in 1954 (row 19).
5. **Prices by kind and by neighborhood, from deeds.** Resold house $357,000; new from a builder $318,000; condo $189,000 (on the water $263,000); manufactured $183,000 (rows 25 to 29); the largest subdivisions with their counts and middle prices (row 33).
6. **A worked example with tax, no loan.** $357,000 house, HUD three-bedroom rent $2,100, 7 percent of the price a year; tax about $4,400 as a rental, $1,400 as a home (row 38).
7. **The road everyone mentions, stated plainly.** Carolina Bays Parkway extension: preferred route chosen, $797 million estimate, North Carolina land not funded, no construction date (rows 41 to 44). The old page's "construction around 2029" goes.

## What the live page has worth keeping

- **The H1 the owner liked**, from `data/headlines.json`: "Little River, SC: the boating end of the Grand Strand." Keep it; this page is the proof of it. Title tag: carry what people search. Proposed: "Living in Little River, SC: Homes, Boat Slips, Flood | Chapter3" (60 characters). The writer may keep "Little River, SC: The Boating End of the Grand Strand" if the lead prefers.
- **The homes feed** ("Search homes") for Little River, with its CCMLS line. Consider a second strip for homes near the water if `idx-lib` has one (feature keys `water_icw`, `boat_access`, `boat_slip` exist; row 30 counts are small: 19 houses tagged on the waterway, 29 with boat access, 3 with a slip).
- **True statements that hold**: unincorporated, Horry County rules; 4 vs 6 percent (row 6); about 10 minutes to Cherry Grove (row 35 says 11); Vereen Memorial Gardens (row 18 adds the Kings Highway); McLeod Seacoast nearby (row 35); the HOA documents point, cut to one sentence: we pull the HOA papers before an offer.
- **Links that still fit**: /buyers/property-taxes/, /buyers/coastal-insurance/, /buyers/undisclosed-flooding/, /invest/str-rules/, /invest/long-term-rental/ (the analyzer), /invest/airbnb-income/ (owns the AirROI line), /buyers/no-hoa-homes/ (boat at home), /buyers/55-plus-communities/ if a Little River community is there, /submarkets/north-myrtle-beach/ (next door).

## What must not survive (judge, rules)

- The "illustrative" occupancy chart and the AirROI block (third-party, and the only chart was about the minor use). Gone; one link to /invest/airbnb-income/.
- "Value and growth story", "buy ahead of the curve", "cleaner cash-on-cash numbers", "deals often pencil", the 35 to 45 percent expense load, "BRRRR", "DSCR", "LTR", "portfolio scaler". No source; generic.
- The whole financing section (manufactured-home loans, DSCR, down payments). Chapter3 does no financing work.
- Redfin's $292,000 and Zillow's $321,000 and their links; deeds replace them (row 25).
- "Population (2020 Census) 9,692" (row 3: 11,711), income and poverty rows (people, not property).
- "Manufactured and modular housing" as a large share (row 8).
- First Street's 23 percent (third-party; rows 20 and 21 replace it).
- "Construction targeted around 2029" for SC 31 and the myrtlebeachsc.com link (row 42).
- The school proficiency table and rating (STANDARD C5); "How to pull the crime numbers yourself" (we do the work; A18).
- "Price range $150,000 to $800,000" snapshot box, "Typical investor" box, the investor thesis, "Who Little River suits" (who lives somewhere is not ours to say).
- Lifestyle said twice, schools twice, flood three times. Each once.
- Breadcrumb "Investor Hub" and the "Little River Investor Report" kicker. The page is a town guide now; breadcrumb as the lead sets for the batch's town pages (Conway proposes Home / Neighborhoods / Conway).

## The shape

**Local area guide** (CRAFT 3; Page shapes 1), dominant relation **place**. The reader pictures the place, then the water, then chooses a part of it. Inside, the water section is a **map plus count**, the cost line a short **itemized table**, and the price section a small **table by kind of home**.

Wrong-shape tests for the builder:
- First screen: H1, byline, the two-sentence answer, key facts row.
- The page must not read the same for another town: every section has a Little River-only fact (the deeded slips, the 1935 swing bridge, the seasonal share against North Myrtle Beach, Hazel at the line, the Kings Highway at Vereen, the ZIP corner inside North Myrtle Beach).
- Flood appears once as a section and once in the FAQ.
- Sibling check (CRAFT 3, "Siblings share places, not facts"): Conway owns the river gauge, the city-vs-mailing-address split and its five areas. This page's ZIP-inside-NMB line (row 2) is one sentence in "Is Little River a town?", not a section, so the device does not repeat Conway's.

## Sections, in order, with what each proves

1. **H1 and short answer** (headline as liked). Two sentences: "Little River is the unincorporated fishing and boating village at the north end of the Grand Strand, on the Intracoastal Waterway at the North Carolina line. A resold house usually sells for about $357,000, and two of every three boat slips sold with a deed in Horry County are here." Rows 1, 12, 25. (The writer's words; the facts are those rows.)
2. **Key facts row** (icons with words, glass chips): about 11,700 people (row 3); about $357,000 typical resold house (row 25); about 11 minutes to the beach at Cherry Grove (row 35); 223 deeded boat slips (row 12); 96 in 100 homes outside the high-risk flood zone (row 20); no town government, county rules (row 1).
3. **Slim top offer** ("See homes for sale in Little River" bar); full offer band at the end (CRAFT 3).
4. **"What is it like to live in Little River?"** (matches "living in little river sc", "is little river a good place to live"). A normal week, selling the place: the waterfront on Mineola Avenue a minute from the old village; Coquina Harbour 3 minutes; the 1935 swing bridge that still turns for boats (row 16); Vereen Memorial Gardens, 115 acres on the waterway with 3 miles of trails and a surviving piece of the colonial Kings Highway (row 18); Calabash's seafood 7 minutes across the state line (row 35); the beach at Cherry Grove 11 minutes (row 35). A place people live all year: 19 percent seasonal against 48 percent in North Myrtle Beach (row 4, small bar chart V2). Growth matched the county's 31 percent in ten years (row 3). One photo: the waterfront (partner shot 1, or the labelled aerial V3 until then).
5. **"Is Little River a town?"** Short. No: unincorporated, Horry County runs it, no city tax (rows 1, 5); the Census calls it a CDP (row 1). One line: a corner of the 29566 ZIP along the waterway is inside North Myrtle Beach, 246 homes (row 2), and we check which side of the line a house is on before an offer.
6. **"Living on the water in Little River"** (matches "waterfront homes", "boat slips for sale", "boat ramp"). Lead with the surprise: two of every three deeded slips in the county are here (row 12), and what they sold for (rows 13, 14). Then the honest count: only about 160 houses touch the water; most water homes are condos at Carolina Yacht Landing, Mariner's Pointe and Lightkeepers (rows 10, 11), and a condo on the water sold for about $263,000 against $180,000 away from it (row 27); 5 houses on the water resold, the middle one at about $1.3 million (row 29). Public ramps: T. Craig Campbell Landing on the waterway, 7 minutes; Worthams Ferry on the Waccamaw (row 15). We check a slip's size and depth before an offer. Visual: V1 water map.
7. **"Which part of Little River?"** The selection guide, then one entry per part, four in all, from the subdivision table (row 33) grouped by position from the village point (findings.json subdivisions.center; directions are measurements, compute them):
   - **The old village and the harbor** (within about a mile): Cypress Village, Gardens at Cypress Bay, Mariner's Pointe, Hidden Lakes Village, Wrens Crossing, Rivergate, Riverview Heights. Walk or a 1 to 3 minute drive to the waterfront. Condos from about $135,000 to $150,000 and houses near $385,000 (row 33).
   - **North and east toward the state line**: Heather Glen (1,124 houses, the largest; about $375,000), Heather Lakes, Stonebridge Farms, Windjammer Village (houses and some manufactured homes, about $310,000; 15 of its homes in the high-risk zone), Village at the Glens.
   - **North-west**: Lafayette Park (lots about two-thirds of an acre), River Hills, Carolina Crossing, North Village, Stones Edge, Sunset Landing.
   - **West along the waterway**: Carolina Yacht Landing (condos on the water), Bay Tree (condos, about $165,000), Waterside Village, Shorehaven Village, Starfish Village and Sawgrass Village (the highest prices, about $540,000 to $585,000), Hidden Brooke (about 1.5-acre lots), Palm Lakes Plantation, Waterfall, Woodlyn Meadow, Bellacroft, North Pointe (manufactured homes, about $180,000).
   Each entry: its best thing first, a normal day, the trade-off in one line, the price in one sentence, an offer naming the part. Amenities, golf, gates and HOA fees are NOT in the ledger (Questions 1): leave them out unless a new verified row is added. One numbered map (V4). Prices under 10 sales say "the middle of N sales".
8. **"Does Little River flood?"** Answer first: "Most of it does not. About 96 in 100 homes..." (row 20). Where it does: the waterway (row 21). Hazel in 1954 (row 19). What it costs: policy medians (row 22); the lender rule (row 23); the 30-day wait (row 24). Homes for sale in the zone: 8 of 188 houses (row 32). We check the flood map, elevation and claims disclosure for every house before an offer; link /buyers/undisclosed-flooding/ and /buyers/coastal-insurance/.
9. **"What does it cost to own a home in Little River each year?"** One sentence total, then an itemized table for a $357,000 house (V6): property tax as your home about $1,400 (row 38, which includes the $89.40 fee, row 5); flood policy outside the high-risk zone about $480 if you want one (row 22); as a second home or rental, tax about $4,400 (row 38). HOA fee: "depends on the community" only if a verified figure is added; otherwise leave the line off. Never a mortgage payment or rate.
10. **"What do homes cost in Little River?"** Deed numbers by kind (V5 table): resold house $357,000 (middle half $304,000 to $451,000); new from a builder $318,000; townhouse $265,000; condo $189,000; manufactured home on its own lot $183,000 (rows 25 to 28). The compare line with its group named: every resold non-condo home, Little River $318,000 vs the county $325,000 (row 46). What the homes are (row 7, chart V2b or a sentence) and the manufactured correction (rows 8, 9) in two sentences. For sale today: about 190 houses at a middle asking price of about $398,000, 44 new, 22 under $300,000; 110 three-bedroom houses (rows 30, 31). Homes feed here.
11. **"Renting out a home in Little River"** (the investor section). HUD 2027 rents for 29566 against nearby ZIPs (row 36, small table V7) with what HUD's number means (row 37); the worked example (row 38); Census middle rent $1,530 against the county's $1,260 (row 39), in its own sentence; nightly rentals: the county filings (row 40), HOA rules, and the link to /invest/str-rules/ and /invest/airbnb-income/. Link the analyzer /invest/long-term-rental/.
12. **"What is coming: the Carolina Bays Parkway extension"** Short. What it is (row 41), where it stands and what it costs (rows 42 to 44). No date, no "value driver". If the verifier confirms the preferred route's map, one line on where it runs; otherwise none.
13. **The good and the hard** (short list, CRAFT 3): good: deeded slips you can own for less than a car, public landings, the waterfront and Vereen Gardens, a year-round place, houses about $357,000 with no city tax, 11 minutes to the beach. Hard: few houses on the water and those cost about $1.3 million; the airport is about 40 minutes and Coastal Grand about 35 (row 35); hurricanes reach this line (row 19); nearly half of the homes on the water are in the high-risk zone (row 21, 45 percent); a road project is planned but unfunded in North Carolina. Each hard point with what we do about it.
14. **End offer band**: "Tell us your boat and your budget. We will show you the houses, the slips and the ramps that fit, and check the flood map and HOA rules for each." Link to /contact/ with Little River named.
15. **FAQ** (open text, one fact each, no repeats of body sentences): Is Little River a city? (row 1) What county is Little River in? (row 1) How far is Little River from Myrtle Beach and the beach? (row 35) Does Little River flood? (row 20) What is the property tax in Little River? (row 5) How much is a boat slip in Little River? (row 13) How many people live in Little River? (row 3) Is Little River safe? (one line: we do not rate places as safe or unsafe; the FBI Crime Data Explorer and SLED publish reported crime by agency.) Which schools serve Little River? (row 45: by address; we look up the schools for any house.)
16. **Sources line**: Horry County GIS and Register of Deeds, Horry County Treasurer and Auditor, Horry County Parks, Census, FEMA OpenFEMA, HUD, NWS, SCDOT, NCDOT, Horry County Schools, OSRM and OpenStreetMap; CCMLS line for listing counts.

## Visuals

| # | Visual | What it proves | Built from | Tool |
|---|---|---|---|---|
| V1 | **Little River on the water** (our own map): the Intracoastal Waterway and Waccamaw, the 29566 outline, North Myrtle Beach's limits shaded light, the FEMA high-risk zone, the three slip marinas sized by slip count (116, 81, 25), the county landings, the swing bridge, the waterfront, Vereen Gardens, the state line. Caption: "Two of every three boat slips sold with a deed in Horry County are at these three marinas." | Rows 2, 12, 15, 16, 18, 20 | map-little-river.geojson, map-points.json; swing bridge point (33.85158, -78.65619, OSM); Vereen (33.8815826, -78.5948466, OSM boundary point: label only, no drive time) | Custom SVG in the spec, styled like glass.js (area-map has no polygon overlay; see NEEDS). Labels 14 px or more at 390 px. Google Maps link button. |
| V2 | **Who lives here all year** (horizontal bars): seasonal share of homes, 2020 Census: North Myrtle Beach 48, Garden City 39, Little River 19, Horry County 18, Murrells Inlet 14, Carolina Forest 5, Conway 2 | Row 4 | chart-seasonal.json | glass.js bars |
| V2b | Optional: **What the homes are** (one stacked bar): houses 64, condos 28, manufactured 5, townhouses 3 | Row 7 | chart-homes.json | glass.js bars, or a sentence if the page is long |
| V3 | **The waterfront from above** (labelled aerial): the old docks on Mineola Avenue and the Mariner's Pointe basin, from the USGS NAIP image (public domain). Labels placed from real coordinates. Stand-in until the partner's photo. | Rows 12, 13 | USGS NAIPPlus exportImage, bbox -78.6215,33.8655,-78.6105,33.8755 (tested 2026-11-02: 1200 x 1100 jpg, the basin and the waterfront docks are clear) | tools/photos.js record: U.S. government work, public domain; read the image year from the service before captioning |
| V4 | **The four parts of Little River** (numbered region map) | Row 33 | findings.json subdivisions.center | area-map.js regionMap |
| V5 | **What homes sold for, by kind** (table): kind, middle price, middle half, number of sales | Rows 25 to 28 | findings.json sales_zip | h.table |
| V6 | **Yearly cost** for a $357,000 house (table with a total row; home and rental columns) | Rows 5, 22, 38 | findings.json worked_example, nfip_policies_29566 | h.table |
| V7 | **HUD rents** (table): 2, 3, 4 bedrooms, 29566 against 29582 and 29577 (and 29579) | Row 36 | raw/safmr-2027-metro34820.json | h.table |
| V8 | **Drive times** (region map or a chip list): waterfront, Coquina Harbour, hospital, Calabash, landing, beach, Barefoot Landing, airport | Row 35 | raw/drives.json | area-map.js, or chips |
| V9 | Photos (below) | | | photos.js |

### Photos and their free-licence candidates

Wikimedia Commons refused this session (HTTP 429, rate limit) on every call, so no Commons licence was read. The builder must search Commons when it answers, look at each picture full size, read its licence, and write a `tools/photos.js` record. Searches to run:

| Use | Where to look on Commons | What it must show |
|---|---|---|
| Section 4, the waterfront | Category:Little River, South Carolina; search "Little River waterfront", "Little River South Carolina boats" | The docks and boats on Mineola Avenue; no person or business sign as the subject |
| Section 4, the swing bridge | search "Little River Swing Bridge", "Sea Mountain Highway bridge" | The 1935 swing span (row 16) |
| Section 4, Vereen Gardens | Category:Vereen Memorial Gardens; search "Vereen Memorial Historical Gardens" | The marsh boardwalk (row 18) |
| Section 6, the water | search "Intracoastal Waterway Little River", "Coquina Harbour" | Boats in a marina on the waterway |

Public-domain fallback, already tested: the USGS NAIP aerial (V3). A labelled aerial of the Mariner's Pointe basin and the old waterfront docks reads well at 1200 px; at 390 px it needs two or three large labels.

## Photo partner's shot list

See `shot-list.md` (same folder). Nine shots, in order of value to this page.

## Open items for the builder

1. Rows 8, 10, 13, 14, 41 and 43 carry verifier checks (listing codes, ten water lots, two deed images, the route map, a newer decision). Cut a sentence whose check fails.
2. Row 17 (swing bridge hours) is probably stale; the page should not use the hours.
3. V1 is a custom SVG; keep it readable at 390 px (labels 14 px or more, a legend in words). The marinas are close together near the swing bridge; use leader lines.
4. Run `node tools/sibling-check.js` against the other town pages of this batch (Conway, Garden City, Myrtle Beach, North Myrtle Beach, Murrells Inlet, Surfside, Pawleys Island). Little River owns: the deeded slips, the seasonal-share comparison (Garden City and North Myrtle Beach should link here, not repeat it), the swing bridge, Hazel at the line, the SC 31 extension.
5. Register in `facts/registry.json` (see PROPOSED.md): Little River population 2020, the deeded-slip count, the house resale middle price for the ZIP.
6. Measure every distance word from the coordinates before writing it (CRAFT 2): the four parts' directions and distances, and any walk to the waterfront.
