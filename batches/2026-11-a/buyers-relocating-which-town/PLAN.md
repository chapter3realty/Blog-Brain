# Plan: /buyers/relocating/which-town/

Batch 2026-11-a, Lane U. Research by the research helper, 2026-11-03. Ledger: `facts.md` (30 rows, none verified yet; use only rows a verifier marks `verified`). Must-answer list: `must-answer.md`. Data: website copy `data/2026-11-a/buyers-relocating-which-town/` (`chart-towns.json` = one row per place for the table, the charts and the filter; `findings.json`; `drives-houses.json`; `areas.geojson`). Spec to write: `specs/relocating-which-town.js` (the page moves from `data/relocating/pages/which-town.js` + `assemble-page.js` to a spec; keep the relocating chrome the v1.28 patch froze, see BRIEF "Some pages are not spec-built yet" and `batches/2026-11-a/relocating-donor.patch`).

## What the live page has worth keeping

- **The H1 the owner liked** (`data/headlines.json`): "Which Grand Strand town fits you?" / em "Prices and rules, compared." Keep both lines; the page now keeps the promise with recorded prices and the rules.
- **The city-or-county idea** (incorporated vs unincorporated changes the bills). Kept, now as a short table with sourced rows (19 to 23) and real dollar figures (row 10), not four generic cards.
- **Two client stories** (Longs land and new build; New York boat owners in North Myrtle Beach): kept, told as recorded (row 28), each inside its place's entry.
- **The fair-housing stance** ("we give you the records, not our opinion of a neighborhood"): kept as one FAQ answer and one line in the method note, not a whole section.
- **Links**: every town page (/submarkets/...), /buyers/affordable-places-to-live/, /buyers/cost-to-own/, /buyers/relocating/cost-of-living/, /buyers/relocating/getting-around/, /buyers/relocating/healthcare/, /invest/str-rules/, /buyers/no-hoa-homes/, /buyers/undisclosed-flooding/, /buyers/relocating/beaches/ (beach rules), the lead form.
- **Cut**: the "working ranges" price table, the made-up 10-mile drive table, the "where we landed" staff section (Devin named, gym brands), the "two misconceptions" paragraph (it described residents), the four generic cards.

## What the judge said, and how this plan answers each point

| Judge's problem | Answer |
|---|---|
| Price table is not data; three rows have no price; Socastee missing | County deed medians for 13 places including Socastee, Longs, Loris and Aynor (row 1), shown as a ranked bar chart (fix-and-flip shape) with the period and source. |
| Traffic table is a made-up 10-mile drive; conflicts with the FAQ; says on-season but is off-peak | Measured minutes from 60 real houses in each place to the beach, the nearest hospital, the airport and Coastal Grand Mall (row 17). The header says "no traffic; summer traffic on US 17 adds time". One value per drive on the page; the FAQ reads the same file. |
| Staff personal life; Devin and gym brands named | Cut. No staff in the copy. |
| No map | Our map: 13 outlines numbered north to south (`areas.geojson`, `tools/area-map.js` several-places option, or the where-to-buy map code reused inside this spec), the county line, US 17, SC 31, SC 22, US 501, the airport. |
| No yearly cost per town | "About $X a year besides the mortgage" for the middle house of each place, as your home, with its parts (rows 10 to 15), and the comparison that makes it worth reading (row 16). |
| Places not given one numbered entry each with an offer; no per-town feeds | One numbered entry per place, north to south, each ending with "See houses for sale in X" (the site's home search with that town), CRAFT 3. |
| H1 is a question but no H2 is; S1, S11, A2, A4, A7 fail; tiny table text on desktop | Question H2s (below); title within S1; short answer 40 to 120 words; 6 FAQ entries; every table cell and chart label 16 px or more on a phone, 15 px minimum anywhere (critic). |
| "Misconceptions" edges toward describing residents | Cut. "Year round" is answered with the legal-residence share of houses (row 4), a property fact. |
| Ideas: deed chart; yearly-cost line; numbered static map; drive table; per-town entries with flood share and year built; a "which town fits you" filter on property facts | All in. The filter uses only property facts and live listing counts in aggregate (row 18). |

## The reader and their job

A mover from another state who knows the name Myrtle Beach and nothing else (must-answer.md). **Job: cut 13 places to 2 or 3 before the first visit.** They want to know what each place is like to live in, what a house costs to buy and to keep, how far it is from the beach, and where the surprises are (flooding, rules, HOA). They do not know there are two counties, cities and unincorporated areas, or that a house's tax bill depends on whether it is your home.

## The deciding fact

Checked first and holding: the county's own deed records give a middle house price for all 13 places, with 49 to 565 sales each (row 1), and the levy sheets and 2026 bills give each place's tax rate on a home you live in (rows 9 to 11). The page can keep its title's promise: prices and rules, compared.

## Findings no other site has

1. **What the middle house costs a year to keep, in 13 places** (row 15), and the surprise in it (row 16): the price of the middle house around Pawleys Island is 2.3 times Loris's, but its yearly cost is only 1.5 times. Price is the big difference between towns; the yearly bill is not. This is the page's thought-provoking line.
2. **Drive minutes measured from 60 real houses in each place** (row 17), not from a town hall: from the middle house, the beach is about 3 minutes in Surfside Beach and 45 from around Aynor; the airport about 13 from Myrtle Beach and 44 from Longs.
3. **The room you get for the money** (row 7): the middle house lot is about an acre around Aynor and 0.8 acre around Loris, against about a sixth of an acre in North Myrtle Beach and Surfside Beach. Paired with price, it shows what a mover trades for the beach.
4. **Where the new houses are** (row 2): about half of house sales around Aynor and in Longs were a builder's first sale; in Myrtle Beach, Garden City and Surfside Beach nearly all were resales.
5. **Year-round streets, from the tax roll** (row 4): about 8 in 10 houses are someone's legal residence in most places, about half in North Myrtle Beach and fewer than half in Surfside Beach. Answers "year round" without a word about people.
6. **Houses for sale today by what a mover wants** (row 18): within a mile of the beach, no HOA fee, new, an acre or more, RV or boat parking, by place. Powers the filter.

## Title, H1, description

- Title (S1, 30 to 62 characters, ends "| Chapter3"): **"Where to Live Near Myrtle Beach: 13 Towns Compared | Chapter3"** (61). Alternative: "Which Grand Strand Town Fits You? 13 Compared | Chapter3" (56). Search words: "where to live", "near Myrtle Beach", "towns". Never "best" in the title (audit), though "best places to live near Myrtle Beach" is the top suggestion: put "best" only inside a reader's question in the FAQ, once, if at all.
- H1: "Which Grand Strand town fits you?" / em "Prices and rules, compared." (headlines.json; the owner liked it).
- Description (up to 160): "13 towns near Myrtle Beach from county records: what a house sold for, what it costs a year to keep, minutes to the beach, flood zones and the rules." Fit at build.
- Hero sub-header: no "we", "our" or "us" (audit). E.g. "Thirteen places from Loris to Pawleys Island, compared on recorded prices, yearly costs, drive times and the rules that change at the city line."
- Keep URL, crumb, author byline (Devin Day as the visible byline only), reviewer. Dates by `build.js dates` only.

## Page shape

**A list of many places, with a short decision filter on top** (CRAFT 3, "A list of places is read one place at a time"; Page shapes 1b). The reader's job is "pick a few places from many". The places are the spine; the filter and the map are the selection guide, shown once. Measure the top on a phone before writing (CRAFT 3, "Measure the top"): hero, short answer, slim offer bar, filter, map must reach entry 1 within about one phone screen after the map.

Order, with the H2 questions (A4: 60 percent or more as questions; numbered place headlines are entries, not sections):

0. **Short answer** (A2, 40 to 120 words, first sentence 30 words or fewer). Draft of the facts it carries: the 13 places run from Loris and Aynor inland to Pawleys Island on the coast; a house sold for about $271,000 at the middle in Conway and about $705,000 in Surfside Beach (row 1); the yearly cost to keep the middle house is about $6,400 to $9,700 (row 15). The choice comes down to four things you control: how close to the sand, how much land, new or older, and whether you want a city's services. Then the slim offer bar ("Have us build your shortlist", to /contact/ as a request).
1. **The filter** (toc "Find your town"). H2: "Which town fits what you want?" A small tool (our own, in the spec, no external script): chips for budget (under $300,000 / $300,000 to $450,000 / over $450,000, against row 1's middle price), "beach within 10 minutes" (row 17), "an acre or more" (row 7), "a newer house" (row 8 / row 2), "no HOA fee" (row 14 / row 18), "inside a city or town" (Places), "lowest yearly cost" (row 15), "low flood share" (row 5). It lists the places that fit, in map order, each with its count of matching houses for sale (row 18, the build-day count) and a jump link to its entry. Property facts only. It works with JavaScript off as a plain list of the 13 with one line each (that list doubles as the guide, so the places appear once before the entries, CRAFT 3 "No preamble").
2. **The map** (toc "The map"). H2: "Where are the Grand Strand towns?" First sentence: the 13 places, north to south, two counties, which are cities or towns. The numbered map (one picture): outlines, numbers matching the entries, the county line, main roads, the airport, the ocean. Short and wide on a phone. Caption names what the colours mean (city or town vs unincorporated county).
3. **The 13 places, one numbered entry each, north to south** (toc "The 13 towns"): 1 Loris, 2 Aynor, 3 Longs, 4 Little River, 5 Conway, 6 North Myrtle Beach, 7 Carolina Forest, 8 Myrtle Beach, 9 Socastee, 10 Surfside Beach, 11 Garden City, 12 Murrells Inlet, 13 Pawleys Island and Litchfield. North to south is the order a reader can follow on the map; the filter covers "by budget".
   Each entry (CRAFT 5 "Sell the place"; 90 to 160 words; `repeat-check --strict` fails under 60): a headline with the place and what it gives you, by feature, never by who lives there; the best thing a newcomer would not guess; a normal day's distances in a sentence a person would say (beach, hospital, airport, from row 17); the homes (lot size row 7, newer or older rows 2 and 8, the HOA picture row 14); the trade-off in one honest line (flood row 5, distance, price); the price and the yearly cost in one sentence ("The middle house here sold for about $300,000 and costs about $7,700 a year to keep besides the mortgage."); the offer: "See houses for sale in Longs" (the site's search, city filter; CTA text is a link to search, not /contact/).
   What only each place has (from verified rows; the writer picks the strongest, and must say something different from what its town page leads with):
   - **Loris:** the most land for the money: the middle lot about 0.8 acre and 4 in 10 house lots an acre or more (row 7); the lowest yearly cost of the 13, about $6,400 (row 15); a hospital about 11 minutes from the middle house (row 27); about 4 in 10 house sales were new houses (row 2); 92 of 152 houses for sale list no HOA (row 18). Trade-off: about 36 minutes to the beach (row 17).
   - **Aynor:** an acre is normal: the middle lot about 1 acre, 58 percent of lots an acre or more (row 7); half the sales were new houses (row 2); the town's fall festival has its own weekend in state law (row 26). Trade-off: the farthest from everything, about 45 minutes to the beach and 30 to a hospital (row 17); only 49 sales, so say "about $350,000".
   - **Longs:** where builders are: 131 of 270 houses for sale are new (row 18) and about half of sales were builders' (row 2); half the homes built 2005 or later (row 8); about 19 minutes to the beach (row 17); the North Carolina clients' land-and-new-house story (row 28).
   - **Little River:** the waterfront village of the north end: carry Little River rows 12 (deeded boat slips), 15 (landings), 16 (the 1935 swing bridge) or R1-6 (Blue Crab Festival); a hospital about 7 minutes away (row 17); about 14 minutes to the beach.
   - **Conway:** a city with its own services and the oldest streets (Conway rows 28, 29, 30); the cheapest middle house of the 13, about $271,000 (row 1), but the highest city tax rate per $100,000 (row 10): the yearly cost lands near Little River's (row 15). About 29 minutes to the beach (row 17). Flood: one line and a link to the Conway page (row 5 note).
   - **North Myrtle Beach:** 239 of its 320 houses for sale are within a mile of the beach (row 18); the middle house is about 6 minutes from the sand (row 17); most houses for sale list no HOA fee (row 14); about half the houses are someone's home all year (row 4); 22 percent in the high-risk flood zone (row 5); the New York boat story (row 28). The FAQ's "Myrtle Beach or North Myrtle Beach?" answer (row 30).
   - **Carolina Forest:** the newest big area: half its homes built 2007 or later (row 8); almost no flood zone (row 5, under 1 percent); the Bike and Run Park (row 25); every house for sale lists an HOA fee (row 18: 0 of 122 without), middle $125 a month (row 14). About 18 minutes to the beach, 22 to the airport.
   - **Myrtle Beach:** the closest to everything: airport about 13 minutes, mall about 10, beach about 10 (row 17); the city's free resident parking decal (row 21); 9 percent sales tax in the city (row 19); carry Myrtle Beach rows 42 to 46 (Pine Lakes, Market Common, Grand Park). Trade-off: nightly rentals barred in most house neighborhoods (row 23), which is also what keeps those streets residential.
   - **Socastee:** the swing bridge village (row 24); the same middle price as Longs, about $300,000, but about 13 minutes to the beach and 14 to the airport (rows 1, 17); 11 percent of houses in the high-risk zone (row 5), so the flood check matters here.
   - **Surfside Beach:** the beach at the end of the street: about 3 minutes from the middle house, all 42 houses for sale within a mile (rows 17, 18); the highest middle price, about $705,000 (row 1); fewer than half the houses are someone's legal residence (row 4); half the homes built before 1985 (row 8); 30 percent in the high-risk zone (row 5).
   - **Garden City:** between the ocean and the marsh (Garden City rows 3, 13); about 5 minutes to the beach and 7 to the hospital (row 17); a middle house about $406,000, far below Surfside's next door (row 1); 31 percent in the high-risk zone (row 5).
   - **Murrells Inlet:** the MarshWalk and the creek (Murrells Inlet ledger, Garden City row 44); the hospital about 6 minutes from the middle house, the closest of the 13 (row 17); Georgetown County: 7 percent sales tax (row 19); the highest yearly cost, about $9,700 (row 15). Label: the Census place on the Georgetown side.
   - **Pawleys Island and Litchfield:** the island is a town of its own (Pawleys rows 1, 2); about 7 minutes to the beach (row 17); a third of houses in the high-risk zone (row 5); about 39 minutes to the airport (row 17).
4. **Side by side** (toc "Compare"). H2: "How do the towns compare on price and yearly cost?" First sentence answers with row 16's finding. Two visuals, one at a time, each under its sentence:
   - **Chart 1, ranked bars**: middle house price by place (row 1), with the yearly cost to keep it as a second, smaller mark or a label beside each bar (row 15). The visual shows row 16 at a glance: long price bars, short spread of yearly cost. Built from `chart-towns.json` (`median_sale`, `yearly_besides_mortgage`, `sales`). Liquid-glass style, labels 11 px or more at 375 px.
   - **The table** (`tools/compare.js` cards on a phone): place, middle house price, a year to keep it, minutes to the beach, high-risk flood share, middle lot. Six plain columns, no cell over 12 words. The parts of the yearly cost go in one line under the table: "Tax on a home you live in, the county fee, insurance about $2,000, the HOA fee, and upkeep about $3,300." Add: "In a flood zone, add about $1,070 for flood insurance" (row 6).
5. **City or county** (toc "City or county"). H2: "What changes when a house is inside city limits?" First sentence: the tax rate, trash pickup, sales tax, beach parking, and who sets the rental and golf cart rules. A short table, 5 rows by "Inside a city or town" / "Outside, in the county" (rows 10, 19 to 23), then one line that we check which side of the line an address is on before you make an offer (the "Myrtle Beach" address trap, row 21).
6. **FAQ** (A7, 6 entries, 15 to 90 words, each answer first and quotable alone):
   - "What towns make up the Grand Strand?" (the 13, north to south; which are towns).
   - "What is the cheapest town near Myrtle Beach?" (row 1 bottom three, with the yearly cost, row 15).
   - "Is it better to live in Myrtle Beach or North Myrtle Beach?" (row 30).
   - "Which towns near Myrtle Beach are quiet all year?" (row 4: share of houses that are someone's legal residence; never "locals").
   - "Which town near Myrtle Beach is safest?" (CRAFT 1 "Answer the question you cannot answer": we do not rate any place as safe or unsafe, fair housing law; each police agency publishes its reports; what we do give is the records about the house. No source needed beyond rows 20 and Garden City row 46 for who polices where.)
   - "How far are the towns from the beach and the airport?" (row 17, same values as the table).
7. **The method note and sources line** (small but 15 px+): deeds, parcels, FEMA, levy, bills, Census, OSRM, CRM in aggregate, with the periods. All method words live here, not in the entries (CRAFT 5 "A verifier gives the fact").
8. **The end offer** (the same box as the top): "Tell us your budget and what the house has to do. We send a shortlist of towns and houses that fit, with the flood map, the tax and the rules for each." Button: "Send me a shortlist" or "Have us build your shortlist" (a request, to /contact/).

## Visuals, one at a time

| # | Visual | Data | Tool | Note |
|---|---|---|---|---|
| 1 | The filter | `chart-towns.json` | inline in the spec (glass chips) | Works without JavaScript as a list; property facts only; counts labelled "houses for sale on [build day]" without typing a date (the build sets it, or say "today"). |
| 2 | The numbered map | `areas.geojson` | `tools/area-map.js` (several-places option) or the where-to-buy map code | 13 outlines; city or town vs county colour; numbers in the same order as the entries; Google Maps link. If the shared tool lacks a several-places map, draw it inside the spec and note it in NEEDS. |
| 3 | One photo per entry (13) | licence records | `tools/photos.js` | Stand-ins below; the partner's shots replace them. |
| 4 | Ranked bar chart: price and yearly cost | `chart-towns.json` | hand-drawn SVG in the spec (as fix-and-flip) | Says row 16 at a glance. |
| 5 | Comparison table / cards | `chart-towns.json` | `tools/compare.js` | 6 columns. |
| 6 | City-or-county table | rows 10, 19 to 23 | `h.table` | 2 columns, 5 rows. |

## Photos: free-licence stand-ins (all already licensed on sibling pages; reuse the file and its licence record)

| Entry | Stand-in | Licence | Where |
|---|---|---|---|
| 1 Loris | none on the site. Make a USDA NAIP 2023 aerial of downtown Loris, labelled, as where-to-buy did (`naip-requests.json`) | Public domain (USDA) | new, `images/2026-11-a/buyers-relocating-which-town/` |
| 2 Aynor | none. NAIP 2023 aerial of the town park area and Main Street, labelled | Public domain | new |
| 3 Longs | `invest-where-to-buy/longs-new-subdivision-from-above.webp` (new subdivision beside farm fields) | Public domain | where-to-buy photos.json |
| 4 Little River | `submarkets-little-river/little-river-waterfront-from-above-1200w.webp` | Public domain | Little River photos.json |
| 5 Conway | `submarkets-conway/conway-city-hall-1200w.webp` (CC BY-SA 3.0, credit) or `conway-riverwalk-and-warehouses.webp` (public domain) | as listed | Conway / where-to-buy |
| 6 North Myrtle Beach | `invest-where-to-buy/north-myrtle-beach-towers-and-houses-2011.webp` | Public domain | where-to-buy |
| 7 Carolina Forest | `invest-where-to-buy/carolina-forest-houses-and-woods-from-above.webp` | Public domain | where-to-buy |
| 8 Myrtle Beach | `submarkets-myrtle-beach/oceanfront-houses-from-the-ocean-1200w.webp` (houses on wide lawns, older streets north of downtown) | Public domain | Myrtle Beach photos.json |
| 9 Socastee | `invest-where-to-buy/socastee-subdivision-from-above.webp`; better: a NAIP aerial of the swing bridge (row 24) | Public domain | where-to-buy / new |
| 10 Surfside Beach | `invest-where-to-buy/surfside-beach-pier-and-houses-2011.webp` | Public domain | where-to-buy |
| 11 Garden City | `submarkets-garden-city/garden-city-marsh-from-above-1200w.webp` | Public domain | Garden City |
| 12 Murrells Inlet | `submarkets-murrells-inlet/murrells-inlet-marshwalk-from-above-1200w.webp` | Public domain | Murrells Inlet |
| 13 Pawleys Island | `submarkets-pawleys-island/pawleys-island-north-end-1200w.webp` (CC BY-SA 4.0, credit) or `pawleys-island-at-the-north-causeway-1200w.webp` (public domain) | as listed | Pawleys |

Siblings use some of these as their lead image; pick a different one of the place's licensed set where one exists, so the same photo does not lead two pages. Look at every image at full size and at 375 px before captioning it (CRAFT 4). Wikimedia Commons search did not answer from this session; the builder may try it for Loris and Aynor street photos (CC BY or CC BY-SA, credit).

## The photo partner's shot list

In `shot-list.md`.

## Sibling ownership (CRAFT 3, "Siblings share places, not facts")

- **/invest/where-to-buy/** owns the investor angle (rent to price, nightly rules, share of homes that are no one's residence for all homes). This page uses houses only, owner-occupant tax, and drive minutes; it names its group on every number. Builder share (row 2) is the same value as WTB row 18 for Longs (46 percent): one value.
- **/buyers/cost-to-own/** owns the yearly-cost method and the condo table. This page applies the same parts to detached-house medians: label it and link (NEEDS 1).
- **Town pages** own their neighborhoods, flood history and long drive lists. This page gives one fact per place that its town page does not lead with, and links.
- **/buyers/affordable-places-to-live/** owns the cheapest-places ranking with neighborhoods; this page links it from the Loris, Aynor, Longs, Conway and Socastee entries once.

## Audit traps to write around (brief)

No sentence over 28 words; none opening with "So"; no "Here is"; no pseudo-cleft; no "we/our/us" in the hero sub-header; /contact/ buttons are requests; never "the best", "top-rated", "family-friendly", "safe" (the safety FAQ says "we do not rate any place as safe or unsafe": check that build.js audit accepts it, or phrase "we do not rate the safety of any place"). Run `node tools/house-claims.js` and `node tools/sibling-check.js` against the town pages.
