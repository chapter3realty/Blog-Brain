# Plan: /submarkets/surfside-beach/

Batch 2026-11-a, Lane U. Spec to write: `specs/surfside-beach.js` (the live page is not spec-built). Research: `must-answer.md`, `facts.md` (43 rows), data in `data/2026-11-a/submarkets-surfside-beach/`.

## The reader and their job

A person who vacationed at Surfside Beach, or found a house there online, and now types "surfside beach sc homes for sale", "surfside beach sc short term rental map" or "is surfside beach part of myrtle beach". Most want a second home they can use some weeks and rent the rest. Some want to live here year-round. They do not know that the town draws a line between the blocks near the ocean, where nightly rentals are legal, and the streets inland, where they are not. They do not know that two in three homes listed as "Surfside Beach" are outside the town.

**Their job, in one verb: choose.** Which side of the line fits how they will use the home (rent it nightly, rent it by the year, live in it), and what that side costs to buy and to own.

What they would pay an expert to tell them:
- Is this listing on the side where I can rent it nightly?
- What does a house cost on each side, in one clear figure?
- What will I pay each year in tax and flood insurance, as a main home and as a rental?
- What is it like here: the pier, the beach, the golf cart, the dog, the parking?
- What could go wrong (flood, an old low cottage, the wrong side of the line, a listing that is not in the town at all)?

## The deciding fact

Nightly rentals (under 30 days) are allowed only in the R3 and C3 zoning districts (row 1). Checked first, verified from the code text and the town's own district sheet. The page is written around it.

## The two findings no one else has (BRIEF "What the bar looks like")

1. **The short-term rental map, drawn by us.** People search for it ("surfside beach sc short term rental map pdf"). The town publishes a zoning PDF with ten colors and no rental legend. We traced it onto county parcels (street labels within 0.3 m) and counted every home: 1,662 of 4,045 homes (41 percent) are in R3 or C3. Today 45 homes for sale are on the rental side and 24 on the no-rental side (rows 3, 4, 32).
2. **The two-tier price table from deeds.** One year of recorded sales by district and kind: houses near the ocean about $1,000,000; houses inland about $540,000 (R1) and $485,000 (R2); condos near the ocean about $380,000 (rows 6, 7). This replaces the old page's three conflicting medians.
3. **Two in three "Surfside Beach" listings are not in the town** (154 of 231, row 31), so the town's rental map does not apply to them.
4. **The town gets a smaller flood discount than the county around it**: FEMA's own 2026 policy records show the town at CRS Class 7 and unincorporated Horry County at Class 5 (row 14). The town's older letter says Class 5; it is out of date.
5. **Ocean Lakes from the tax roll**: 949 of 956 buildings there carry no land value. You buy the house; the campground keeps the land (row 34).
6. **The no-rental streets are close to the sand**: no R1 home is more than 0.65 mile from the beach road (row 40). Choosing the quiet side does not mean a drive to the beach.

## Page shape

Area guide (CRAFT 3, "Picture living there") with a decision spine: the line on the map. Not a list of places: the town has two sides, and the page is about choosing one. Lead with the answer and the map, then price, then cost to own, then daily life, then the risks, then renting, then the offer. The map is the visual that does the work.

Wrong-shape checks the builder runs after drafting:
- Is the rental answer and the map within the first two phone screens?
- Could any paragraph be about Garden City or Murrells Inlet? (It must not.)
- Is each figure said once, in one place, with one rounding?
- Is every heading a question people type?

## What to keep from the live page

- **The H1 the owner liked** (`data/headlines.json`): "Surfside Beach real estate: / where short-term rentals are allowed." Keep it. The new page finally answers it on the first screen.
- **The title** "Surfside Beach, SC: Where Short-Term Rentals Are Allowed" is also in headlines.json. Keep it. If the lead wants the searched word "map" in it, "Surfside Beach, SC: Short-Term Rental Map and Home Prices" fits in 54 characters; the owner decides.
- The AirROI block (same figures as /invest/airbnb-income/: $42,902, 36.9 percent, row 37).
- The 4 versus 6 percent tax explanation, now with dollars (rows 9 to 11), and the link to /buyers/property-taxes/.
- Internal links: /invest/str-rules/, /buyers/property-taxes/, /buyers/coastal-insurance/, /invest/airbnb-income/, /invest/long-term-rental/, /buyers/undisclosed-flooding/, /contact/. Add /submarkets/garden-city/, /submarkets/murrells-inlet/, /submarkets/myrtle-beach/, /buyers/no-hoa-homes/ (houses with no HOA fee, row 32).
- Nothing else. Cut: "Investor Report" eyebrow and Investor Hub breadcrumb (this is a place guide for buyers first), the illustrative occupancy chart, the financing section, the school statistics, "family-friendly" in meta, og and JSON-LD, "families who want the coast", the duplicated lifestyle sections, the "investor thesis" cards, and every "verify for the address" sentence that tells the reader to check.

## Sections in order, with what each proves

1. **H1, byline, short answer, key facts row.** Draft short answer (rows 1, 4, 25, 26): "Surfside Beach is its own small town in Horry County, with about 2 miles of beach between Myrtle Beach and Garden City. Rentals of under 30 days are legal only in the R3 and C3 zones, the blocks along the ocean, which hold about 4 in 10 of the town's homes. The streets inland are for living in or renting by the year." Key facts row (icons with words): about 2 miles of beach; nightly rentals in R3 and C3 only; houses near the ocean about $1 million, inland about $540,000; 814-foot pier; town tax 214.2 mills; ZIP 29575.
2. **"Where can you rent nightly in Surfside Beach?"** Our map (visual 1). Two short paragraphs: the band along the ocean is R3 and C3; the streets inland are R1 and R2; planned developments and the commercial strip are checked parcel by parcel. One sentence on the gap: the code names rentals under 30 days and of a year or more, not the months between, so we get the town's answer for the street before you plan a winter monthly rental (Not verified 1). Counts: 1,662 homes on the rental side; 45 of the 77 homes listed in town today. Slim offer bar: "Send us a listing. We tell you which side of the line it is on."
3. **"Is Surfside Beach part of Myrtle Beach?"** No: its own town since 1964, ZIP 29575, police, beach rules and rental zones (rows 25, 26, 30). Two in three homes listed as "Surfside Beach" are outside the town, on county land (row 31). Then a short sub-part, **"What do you own at Ocean Lakes?"**: next to the town's north end, not in it; 2,579 annual lease sites; you buy the house or mobile home, the campground keeps the land, and the county's tax roll shows it (rows 33, 34). Say lease terms are set by the campground and we read them with you (Not verified 2).
4. **"What do homes cost in Surfside Beach?"** One table (visual 2): side, kind, sales in the past year, middle price (rows 6, 7, 8). One line under it on asking prices today (row 32). Say once that houses near the ocean cost about twice the inland ones, and why: R3 lots carry 55-foot buildings, R1 caps at 35 feet on lots two and a half times as large (row 2). Link /buyers/no-hoa-homes/ for the 36 of 42 houses listed with no HOA fee.
5. **"What does it cost to own a home here each year?"** The tax table (visual 4): a home the county values at $500,000, about $2,100 a year as a main home and about $6,400 as a second home or rental (rows 9 to 11). The flood policy line: a middle single-family policy about $1,260 a year near the ocean, about $700 inland (row 15). One sentence on the town's Class 7 discount, smaller than the county's (row 14). One yearly line for the typical inland house lived in, with its parts named: about $2,050 in tax plus about $700 for a flood policy, about $2,750 a year besides the mortgage and home insurance (row 43). No mortgage, no rate, no home insurance figure (none verified).
6. **"What is everyday life like in Surfside Beach?"** What an owner does on a normal week, written as an agent would say it, from rows 17 to 24 and 40: the new concrete pier (814 feet, opened 2024, free to walk, two restaurants, bait shop); 36 beach accesses, so most homes have one at the end of their street; owners who live elsewhere get two free parking passes; golf carts on town streets, with the town's 2025 ordinance allowing carts at night with lights, never on the sand (rows 18 to 20); leashed dogs on the beach outside 10 to 5 in summer. Then the drive-time table (visual 6, row 27). The owner's line that this is a golf cart area, said literally ("Most trips here need a car or a golf cart", stories `golf-cart-community`, as his view, no quote marks unless verbatim). One photo: the pier.
7. **"Does Surfside Beach flood?"** Good news first: 2 percent of R2 homes and 15 percent of R1 homes are in a high-risk zone. Then R3: 78 percent, and every home on the ocean side of Ocean Boulevard (row 12). The 48 percent rule in plain words, with what it means for an older low cottage (rows 13, 42). Evacuation zones in one sentence (row 41). History in two sentences: Hazel took 18 of 65 houses in 1954; the pier was lost to Hugo and half lost to Matthew (rows 28, 29). What we do: pull the flood zone, the elevation certificate and the building's value against the 48 percent line before an offer. Visual 5. Link /buyers/undisclosed-flooding/ and /buyers/coastal-insurance/.
8. **"Can you Airbnb a house in Surfside Beach, and what does it earn?"** The licence (every rental, one per property) and the 12 percent guests pay (rows 35, 36). AirROI's area figures (row 37) and the monthly chart (visual 3, row 38): July about five times January. Worked example as a money-in, money-out table for the middle R3 condo ($380,000, row 6): in, AirROI's average listing, $42,902 (labelled as all property types in AirROI's area); out, property tax at 6 percent, about $4,880 (380,000 x 0.06 x 214.2 mills = $4,884, row 9), lodging taxes passed through to the guest, and one line that dues, management and the building's flood share are priced for the exact unit. No loan payment, no rate. Long-term rental in one line: allowed in every district at a year or more (row 1). Links /invest/str-rules/, /invest/airbnb-income/, /invest/long-term-rental/.
9. **"What are the pros and cons of living in Surfside Beach?"** Four good, three hard, each from a row, each hard point with what we do. Good: every home within about 0.8 mile of the beach road (row 40); the pier and 36 accesses; owner parking passes; its own police and rules. Hard: R3 is mostly second homes and rentals (row 5, stated as tax status, never who lives there); flood cost and the 48 percent rule near the ocean; summer parking fees for guests. Never a word about who lives where.
10. **"Surfside Beach, Garden City or Murrells Inlet?"** Three short lines by what each gives you, with links. Surfside owns: a town with rental zones, the concrete pier, owner parking. Do not restate the sibling pages' facts (B46).
11. **Offer box** (same component as the top bar's full version): "Before you offer on a Surfside Beach home, we check which side of the rental line it is on, whether it is in the town at all, its flood zone and the 48 percent line, and its tax at 4 or 6 percent." One button to /contact/ with the town named.
12. **FAQ**, open text, answer first, each from a row: Is Surfside Beach part of Myrtle Beach? Can you Airbnb in Surfside Beach? Can you drive a golf cart in Surfside Beach? Are dogs allowed on Surfside Beach? Is parking free in Surfside Beach? What is the property tax rate in Surfside Beach? What schools serve Surfside Beach? (Horry County Schools; we look up the address's schools; Not verified 6.) Is Surfside Beach safe? (We do not rate places; its own police; FBI Crime Data Explorer link; row 30.)

Homes row: the live IDX row for the town, titled with the town name. Do not tag homes on the page as "rental allowed"; the page's count is aggregate.

## Visuals

1. **The rental map** (our own; from `map-layers.geojson`). The R3 and C3 band in one color labelled "Nightly rentals allowed (R3, C3)", R1 and R2 in another labelled "No rentals under 30 days (R1, R2)", other districts light gray "Checked parcel by parcel". Town limits outline, Ocean Boulevard, US 17 Business and US 17 named, the pier marked, Ocean Lakes outlined outside the town and named. `area-map.js` takes a polygon area of 3 to 400 points: the rental band is one polygon of 82 points and the R1 and R2 area one of 116, so `regionMap({ name, areas })` can draw both as named outlines; the fill legend may need a custom SVG in the spec (see NEEDS.md). Short and wide on a phone. Two Google Maps buttons. Caption: "Where nightly rentals are allowed in the Town of Surfside Beach. Drawn by Chapter3 from the town's zoning map and Horry County parcel records."
2. **Price table** from `findings.json sales` (built from data, not typed): side, kind, sales, middle price. Rows: near the ocean (R3) houses, condos; inland R1 houses; inland R2 houses; whole town. Sources line names the deeds and the period without a date in the copy.
3. **Monthly rental income chart** from `airroi.json months`: 12 bars, July highest, January lowest, flat and clean, with the values in a table under it.
4. **Tax table**: main home vs second home or rental on a $500,000 county value, with the mills and ratio in small type.
5. **Flood share bar** from `findings.json stock`: share of homes in a high-risk zone, R2 2, R1 15, town 39, R3 78.
6. **Drive-time table** from `raw/drives.json`, rounded per row 27.
7. **Photos**, one at a time, each under the sentence it proves:
   - The pier: NOAA Emergency Response Imagery, January 12, 2026, public domain (https://noaa-eri-pds.s3.amazonaws.com/index.html#2026_Pre_Event/EC2601a_OB_N_RGB/). A new crop of the concrete pier, not the crop on /buyers/best-neighborhoods/; label "Surfside Beach Pier". Look at it full size. Replace with the partner's photo when it arrives.
   - Houses behind the dunes (the R3 side): "Surfside Beach Shoreline", BullDawg2021, CC BY-SA 4.0, July 16, 2023, https://commons.wikimedia.org/wiki/File:Surfside_Beach_Shoreline.jpg (record already in `data/photos.json`; credit with licence link). It is on two other pages; use only if the partner's cottage photo is not in.
   - An inland R1 street: NOAA ERI January 2026 crop (same source, public domain) of a street in the green area of the map, labelled with the street name from county layer 18 and "R1: no rentals under 30 days". Place labels from real coordinates.
   - Optional for the flood section: a USGS 2011 coastal oblique frame of raised houses in the R3 band (public domain, https://doi.org/10.5066/F7N877XX), not frame 175655 (used on /invest/where-to-buy/). It shows the old wooden pier; caption it with its year or crop the pier out.
   - Ocean Lakes: no photo needed; the map outline does the work.
   - Wikimedia Commons search failed this session (HTTP 429). The builder searches "Surfside Beach, South Carolina" and "Surfside Beach Pier" once more; photos taken before 2024 show the old pier and must say their year.

## Photo partner's shot list (also in `shot-list.md`)

1. The new Surfside Beach Pier from the sand, the whole length if possible, morning light.
2. One older raised beach cottage on a street in the R3 band near the ocean (the map shows the band). The house as the subject, no people, no house number readable.
3. One quiet inland street in R1 with single-family houses and trees (we send the street list from our map).
4. A public beach access at a street end with the town's beach access sign and the walkway over the dune (3rd Avenue North has a shower tower, restrooms and wheelchair access).
5. A golf cart parked at a beach access or on a town street (no people as the subject, no plate readable).
6. A town pay-to-park sign or meter at a beach lot (shows the parking rule).
7. Surfside Drive or the shops near the town hall on US 17 (no business logo as the subject).

## Owner questions

None that block. The three brokerage questions are in facts.md: whether we get the town's rental answer in writing for a street (the offer assumes we call the zoning office); Ocean Lakes experience; any real Surfside story (none in stories.json, so the page has none).
