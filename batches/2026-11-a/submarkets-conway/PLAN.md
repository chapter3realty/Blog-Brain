# Plan: /submarkets/conway/

Batch 2026-11-a, Lane U. Researcher's plan, 2026-11-01. Ledger: `facts.md` (45 rows). Must-answer list: `must-answer.md`. Data: `data/2026-11-a/submarkets-conway/` (README there). Spec to write: `specs/conway.js` (none exists; the live page was not spec-built).

## The reader and their job

A person who has heard Conway is cheaper than the beach and is deciding whether to live there. They may be moving from another state, buying their first home, or buying near Coastal Carolina University for a child or a rental. They know none of the place names. Their job: **picture living in Conway, and know whether the house they like is one of the few that floods.**

What they want first: what life there is like and what a house costs. What worries them: the 2018 flood they saw on the news. What they ask next: which part of Conway, what it costs each year, how far the beach is, whether the house is really "in Conway".

The investor is a second, smaller reader. One section serves them, with HUD rents and the student facts, and links to the investor pages. The live page put the investor first and mixed the two; the judge called it out.

## The deciding fact (checked first)

**Does most of Conway flood?** No. About 95 of every 100 homes in the city sit outside both FEMA's high-risk zone and the land Florence's water reached (row 13). The flooding is concentrated in a few named places near the river, Crabtree Swamp and Kingston Lake (rows 14, 19, 20). Without this fact the page would have to be a flood warning. With it, the page can sell the town honestly: the flood section names exactly which streets and plats flooded and which did not.

## The findings no other site has

1. **Where Florence's water reached, counted home by home, by neighborhood.** 480 of 8,935 city homes; Sherwood 98 of 126; and the large areas with none (the whole US 501 side by the university, 1,432 homes; Rosehaven, Oak Glenn, Rivertown Row, Kingston Bay). Rows 13 to 15. Nobody publishes this by neighborhood.
2. **The slow river.** The flood at Conway crests 10 to 12 days after the storm and stays above flood stage about four weeks (29 days in Florence). From the USGS gauge, our own count. Row 17. Plus 6 of the 14 major floods on record came since 2015 (row 18), and the 58 streets the county closed, some for four weeks (row 20).
3. **"Conway" is mostly not the city.** Only about 1 in 4 homes with a Conway mailing address is inside the city limits (row 3); only 172 of 673 houses for sale are (row 35). It changes the tax bill by about $650 a year on a typical house (row 11). Nobody publishes this.
4. **Prices by part of town, from deeds.** Five areas with homes, lot size, resale price and flood share (rows 31 to 34). And the honest correction: Loris and Aynor resell for less than Conway, so it is not "the cheapest" (row 7).
5. **A worked yearly cost.** $265,000 house: about $1,700 tax inside the city, about $1,100 outside, about $4,300 as a rental inside; flood policy about $560 to $680 outside the high-risk zone (rows 10, 11, 24).

## What the live page has worth keeping

- The H1 the owner liked, from `data/headlines.json`: "Conway, SC: the Grand Strand's inland value market." Keep the H1. The title tag should carry what people search: proposed "Living in Conway, SC: Homes, Prices, Flood Map | Chapter3" (51 characters). The writer may keep the old title if the lead prefers; "inland value market" is not a search phrase.
- The homes feed ("Search homes") for Conway, with its CCMLS line.
- The STR data block's single figure set (row 41), cut to one line with its link to /invest/airbnb-income/.
- Links that still fit: /buyers/property-taxes/ (4 vs 6 percent), /buyers/coastal-insurance/, /invest/student-rentals/, /invest/str-rules/, /invest/long-term-rental/ (the analyzer), /buyers/undisclosed-flooding/ (how to find out if one house flooded), /buyers/affordable-places-to-live/ (Conway entry), /buyers/55-plus-communities/myrtle-trace/ (Conway 55+), /buyers/no-hoa-homes/.
- The true statements: Horry County seat, Coastal Carolina University and Horry-Georgetown Technical College in Conway, the 4 vs 6 percent rule with the "about 2.5 times" ratio (row 11 confirms it), the beach "20 to 25 minutes" (row 27 confirms 24).
- The HOA documents paragraph is generic; cut it (it is on /hoa/ pages). Keep one line that we read the HOA papers before an offer.

## What must not survive (judge, rules)

- The "illustrative" occupancy chart (made-up-looking beach data). Gone.
- "roughly 20,000 residents" and "25,210 (2020 Census)": both wrong (row 1).
- "lowest entry prices in Horry County" (row 7: Loris and Aynor are lower).
- "the Waccamaw River, which is part of the Intracoastal Waterway system" (row 45).
- "Is Conway a good short-term rental market? No." next to 106 listings (row 41 gives the honest numbers).
- "Median owner-occupied home value about $287,700": that is Horry County's figure (row 9).
- The Redfin May 2026 market paragraph and its outbound link (third-party, stale; deeds replace it).
- School proficiency table and "Federal support designation" (STANDARD C5: no school ratings). Keep the district assignment link only.
- "How to pull the crime numbers yourself" (we do the work; and A18). One FAQ line instead.
- Income and poverty rows (people, not property).
- Jargon and filler: "full stop", "refreshingly simple", "Americana river-town lifestyle", "BRRRR", "DSCR", "LTR", "strong cash-on-cash returns", "Chapter3 will confirm" repeated.
- The two duplicate FAQs, and flood said eight times. Flood gets one section and one FAQ.
- Breadcrumb "Investor Hub" and the "Conway Investor Report" kicker: the page is a town guide now. Breadcrumb: Home / Neighborhoods / Conway (match the other submarket pages the lead ships in this batch).

## The shape

**Local area guide** (CRAFT 3; Page shapes 1), with one dominant relation: **place**. The reader pictures the town, then chooses a part of it. Inside it, the flood section is a small **map plus count** (the place relation again), and the cost line is a short **itemized table**.

Wrong-shape tests for the builder:
- First screen: H1, byline, the two-sentence answer ("Conway is the county seat on the Waccamaw River... A house usually resells for about $265,000; about 95 in 100 homes in the city are outside the flood maps."), key facts row.
- The page must not read the same for another town: every section has a Conway-only fact (the river gauge, the 1825 City Hall, the city-vs-mailing-address split, the five areas).
- Flood appears once as a section and once in the FAQ, nowhere else.

## Sections, in order, with what each proves

1. **H1 and short answer** (headline as liked). Two sentences: what Conway is (county seat, river town, university, about 24 minutes to the beach) and what a house costs (about $265,000), plus the flood fact in a clause. Rows 5, 13, 27, 37.
2. **Key facts row** (icons with words, glass chips): about 30,600 people (row 1); about $265,000 typical resale house (row 5); about 24 minutes to the beach (row 27); about 10 minutes to Coastal Carolina University and to Conway Medical Center (row 27); about 27 minutes to the airport (row 27); 95 in 100 homes outside the flood maps (row 13).
3. **Slim top offer** ("See homes for sale in Conway" bar), then the full offer band at the end (CRAFT 3).
4. **"What is it like to live in Conway?"** (question heading that matches "living in conway sc"). A normal week, selling the town: the Riverwalk three minutes from the center, Main Street rebuilt after a fire in the early 1900s under old live oaks, the 1825 City Hall credited to Robert Mills, laid out as Kingston by 1732 (rows 28 to 30). The university's 11,348 students and its games and events (row 37). A town that grew about 22 percent since 2020, seventh among SC cities of 10,000+ (row 2). One photo: City Hall or Main Street.
5. **"Is a Conway address in the city of Conway?"** Short section. About 1 in 4 homes with a Conway address is inside the city (row 3); 172 of 673 houses for sale (row 35). What changes: the tax bill (row 10, one sentence), and that city rules apply only inside. We check which side of the line a house is on before an offer. Small map: city limits over the 29526/29527 area (map-city.geojson).
6. **"Which part of Conway?"** The selection guide, then one entry per area, five in all (rows 31 to 34), ordered by what the reader will use: Downtown (old houses under oaks, walk to Main Street); out US 501 by the university (golf, newest homes, no flood map, highest prices); west and south (the most homes, the lowest prices); north of downtown across Crabtree Swamp (the river-side plats that flooded and the newer ones that did not); far north on SC 905 (the biggest lots). Each entry: its best thing first, a normal day, the trade-off in one line, the price in one sentence ("Houses here usually resell for about $246,000"), an offer naming the area. One numbered map of the five areas (`regionMap` with places = area label points in findings.json area_label_points). Sibling owners: Fairways at Wild Wing and Amber Bluff stay on /buyers/affordable-places-to-live/; Myrtle Trace stays on its own page; link them, do not copy.
7. **"Does Conway flood?"** The deciding-fact section, answer first: "Most of it does not. About 95 in 100 homes..." Then: where it does (Sherwood, Midland, Pecan Grove, Country Club Forest, Lakeland; the streets NWS names at 14, 15 and 17 feet), where it did not, the slow river (crest 12 days after Florence, 29 days above flood stage), how often (6 of 14 major floods since 2015), what it cost (109 paid claims in 2018, about $134,000 each in the middle), the 86 buyouts after Matthew. Then what to do: the lender rule (row 23), what a policy costs (row 24), the 30-day wait if row 25 is verified, and that we check the flood maps, the claims history disclosure and the elevation for every Conway house before an offer (link /buyers/undisclosed-flooding/). Visuals: the flood map (our own SVG), the river-rise chart.
8. **"What does it cost to own a home in Conway each year?"** One sentence total, then the itemized table for a $265,000 house: property tax inside the city about $1,700 (outside about $1,100); flood policy outside the high-risk zone about $560 to $680 if you want one; HOA fee "depends on the neighborhood" only if a verified figure is added, otherwise leave the line off. Second home or rental: about $4,300 tax inside the city. Rows 10 to 12, 24. Never a mortgage payment or rate.
9. **"What do homes cost in Conway?"** Deed numbers: about $265,000 resale house, about $295,000 new from a builder, condo-style units about $150,000 (rows 5, 6, 8); against the county about $325,000 and the other towns (row 7, one small compare table: Loris, Aynor, Conway, Socastee, Myrtle Beach, Little River, Carolina Forest, North Myrtle Beach). Today: 673 houses for sale, 368 new, 62 on an acre or more, 58 under $250,000 (rows 35, 36). Homes feed here.
10. **"Renting out a home in Conway"** (the investor section). HUD's 2026 rents for the Conway ZIPs, 2 to 4 bedrooms, against Carolina Forest's ZIP (row 39, a small table); the university and the August turnover story (rows 37, 43); nightly rentals in one line with the honest numbers (row 41) and the no-dedicated-ordinance line if verified (row 42); the 6 percent tax on a rental (row 11). Links: /invest/student-rentals/, /invest/long-term-rental/ analyzer, /invest/str-rules/.
11. **The good and the hard** (short list, CRAFT 3): good: price below the county middle, the downtown and river, the university, land and new homes, 24 minutes to the beach. Hard: a few river-side areas flood and the flood lasts weeks (what we do about it), the city tax is higher than just outside (what you get for it is not claimed; say only the number), the drive to the beach in summer is longer than 24 minutes, nightly rentals earn less than at the beach.
12. **End offer band** (the one thing the reader cannot do alone): "Tell us the street. We will tell you if it is in the city, in a flood map, and what it flooded in 2018." Link to /contact/ with the area named.
13. **FAQ** (open text, one fact each, no repeats of the body's sentences): Is Conway a good place to live? How far is Conway from Myrtle Beach? Does Conway flood? What is the property tax rate in Conway? Is my house in the city of Conway? How many people live in Conway? Is Conway safe? (one line: we do not rate places as safe or unsafe; the FBI Crime Data Explorer and SLED publish reported crime by agency.) Which schools serve Conway? (assignment by address; the district link.)
14. **Sources line**: Horry County GIS and Register of Deeds, Census, USGS, NWS, FEMA OpenFEMA, HUD, NCES, City of Conway, NRHP, OSRM, CCMLS line for listing counts, AirROI for the one STR line.

## Visuals

| # | Visual | What it proves | Built from | Tool |
|---|---|---|---|---|
| V1 | **Where Florence's water reached in Conway** (our own map): city limits, the FEMA high-risk zone and the Florence flood extent in two shades, the river, labels for the five areas and for Sherwood, Crabtree Swamp, Kingston Lake, the Riverwalk, City Hall and the university. Caption: "About 95 in 100 homes in the city are outside both shaded areas." | Rows 13 to 15 | map-city.geojson, map-flood-city.geojson, findings.json area_label_points; river and roads from area-map's geo | Custom SVG in the spec (area-map has no polygon overlay; see NEEDS) styled like glass.js charts; Google Maps link button |
| V2 | **The slow river** (line chart): daily river height at the Conway Marina after Matthew and after Florence, a line at flood stage (11 ft) and major flood stage (14 ft), a marker at each landfall. Caption: "In Florence the river crested 12 days after the storm came ashore and stayed above flood stage for 29 days." | Rows 16, 17 | chart-river-rise.json | glass.js line chart (two series) |
| V3 | **Every major flood on record** (bar or dot strip, one mark per flood, height = crest): 14 floods, 6 since 2015, Florence 21.16 ft far above. | Row 18 | chart-major-crests.json | glass.js bars |
| V4 | **The five parts of Conway** (numbered region map) | Rows 31 to 34 | findings.json area_label_points | area-map.js regionMap({ name, places }) |
| V5 | **Where Conway is** (region map: Conway, the beach, the airport, the university, the hospital with minutes) | Row 27 | drives.json | area-map.js communityMaps or regionMap |
| V6 | **Yearly cost table** for a $265,000 house, with a total row | Rows 10, 11, 24 | findings.json tax_calc, nfip_policies | h.table |
| V7 | **Price compare** (small table or compare.js bars): resale house middle price, Conway against 7 places and the county | Row 7 | findings.json resale_by_place_not_condo | compare.js |
| V8 | **HUD rent table**: 2, 3, 4 bedrooms, Conway ZIPs vs 29579 | Row 39 | raw/safmr-2026-metro34820.json | h.table |
| V9 | Photos (below) | | | photos.js |

### Photos and their free-licence candidates

Each already has a licence record in `data/photos.json` (passed `tools/photos.js`). The builder copies the chosen ones into `chapter3realty/images/2026-11-a/submarkets-conway/` with a new record, and looks at each full size first.

| Use | Candidate | Licence | Shows |
|---|---|---|---|
| Section 4, downtown | https://commons.wikimedia.org/wiki/File:Conway_city_hall_0782.JPG (Pollinator) | CC BY-SA 3.0, credit | City Hall, the 1825 courthouse. Caption from row 29. |
| Section 4 or 6 (downtown entry) | https://commons.wikimedia.org/wiki/File:Conway_Downtown_Historic_District_Jun_10.JPG (Pubdog) | Public domain | Main Street brick shop buildings. Already on /buyers/affordable-places-to-live/; prefer City Hall here, or the photo partner's shot. |
| Section 6, downtown entry | https://commons.wikimedia.org/wiki/File:Home_in_the_historic_district,_Conway,_South_Carolina_(18_November_2006).jpg (Pollinator) | CC BY-SA 3.0, credit | A white house under large oaks in the historic district. Also on /buyers/programs/ and Myrtle Trace; reuse is allowed but the partner's photo is better. |
| Section 4, the river | https://commons.wikimedia.org/wiki/File:Conway_Marina.jpg (Carson True) | CC0 | Riverwalk boardwalk and docks on the Waccamaw, from the bridge. |
| Section 6, US 501 entry or section 10 | https://commons.wikimedia.org/wiki/File:Kimbel_Library.jpg (LittleT889) | CC BY-SA 4.0, credit | Kimbel Library at CCU under an oak. |
| Section 7, flood | https://commons.wikimedia.org/wiki/File:Hurricane_Florence_-_South_Carolina_National_Guard_Responds_(44200296354).jpg (SC National Guard) | Public domain (U.S. government) | A Conway street of one-story houses under floodwater in Florence. Already on /buyers/undisclosed-flooding/. Check the Commons description says Conway before captioning. |

No photo of a newer subdivision street or of a flooded-then-dry street is available under a free licence: those are in the shot list.

## Photo partner's shot list

See `shot-list.md` (same folder). Eight shots, in order of value to this page.

## Open items for the builder

1. Rows 25, 42 and 44 need the verifier's quote; cut the sentence if unverified.
2. Row 29's "architect of the Washington Monument" clause needs its own source or is cut.
3. The flood map (V1) is a custom SVG; keep it readable at 390 px (labels 14 px or more, two shades plus a legend in words).
4. Run `node tools/sibling-check.js` against the other town pages of this batch (Garden City, Little River, Myrtle Beach, Pawleys Island) before review; Conway owns: the river gauge, the city-vs-mailing-address split, the Florence closures and the five Conway areas.
5. Register in `facts/registry.json` (see PROPOSED.md): Conway population 2025 and 2020, the "not the cheapest town" correction, the 4 vs 6 percent Conway tax per $100,000.
