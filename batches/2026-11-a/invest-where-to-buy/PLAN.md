# Plan: /invest/where-to-buy/

Batch 2026-11-a, Lane U. Research by the research helper, 2026-11-02. Ledger: `facts.md` (34 rows, all `awaiting`; use only rows a verifier marks `verified`). Must-answer list: `must-answer.md`. Data: website copy `data/2026-11-a/invest-where-to-buy/` (`findings.json` holds every derived number; `chart-scorecard.json` one row per area; `areas.geojson` the outlines and the county line). Build every chart, table and map from those files. Spec to update: `specs/where-to-buy.js` (exists).

## What the judge said, and how this plan answers each point

| Judge's problem | Answer in this plan |
|---|---|
| Title promises where to buy; page gives only rules and taxes. No price, rent or yield for any area. | Every area gets its recorded house price, HUD rent, a year's rent as a share of the price, the yearly tax at 6 percent, flood share and how full of investors it already is (rows 16 to 25). |
| The six-column table is unreadable at desktop and 53 percent hidden on a phone. | The rules move into each area's entry (one sentence each). The side-by-side scorecard has 6 short columns with plain names and becomes cards on a phone (`compareCards` in `tools/compare.js`). No table cell over 12 words. |
| No map, no photo. | Our map of the 11 areas, coloured by the nightly rule, with the county line (`areas.geojson`, `tools/area-map.js`). Photos per area from public-domain government aerials (list below), plus the photo partner's shot list. |
| "Ask the county", "Check the row before you offer": tells the reader to do the work. | Every rule was read at its source (rows 1 to 12). Where the code leaves a gap (Conway houses outside downtown, Surfside leases of 30 days to a year, Georgetown districts other than GRR), the page says what we check for the address. No "ask", "check" or "verify" aimed at the reader. |
| The "fits" column is opinion with no numbers. | Each area's strategy follows from its numbers: rent next to price (row 20), nightly rule (rows 2 to 12), nightly gross where the file has it (row 26). |
| Two bills named without numbers. | H.3861 and S.442, what each does and where each sits (row 15). |
| Overlaps the short-term rental rules page. | The rules shrink to one sentence per area and link /invest/str-rules/. This page adds money, which that page lacks. |
| Ideas: nine-area scorecard; investor competition (6 percent share); map with county line; seasonality; worked example Conway vs NMB; name the bills. | All in, with two changes: the season comes from the site's STR data file (BLS refused us; row 27), and the worked example is Longs (yearly) against North Myrtle Beach (nightly) at the same $300,000, because Longs and the NMB condo both sit at that price and Longs is where the rent-to-price is highest (row 29). |

## The reader and their job

An investor, often out of state, who has decided on the Grand Strand and not on a place. Job: **pick the area that fits the strategy, before looking at houses.** They know "Myrtle Beach". They do not know there are two counties and a dozen rule-makers, that a rental pays about three times a resident's tax, or that the beach towns earn a smaller share of their price in yearly rent. They worry about buying where they cannot rent the way they planned. Next they ask: "show me houses there with the numbers". That is the offer (story `investor-common-question`).

## The deciding fact

Two, both checked first and holding (must-answer.md): where nightly rentals are legal (rows 1 to 12), and how big a year's rent is next to the price (rows 19 and 20: about 9 percent in Longs, about 3 percent in Surfside Beach). Together they give the page's answer: **for a nightly rental, buy where the town allows it (North Myrtle Beach, the beach towns, the marked zones of Myrtle Beach); for a yearly lease, buy inland, where a year's rent is two to three times the share of the price it is at the beach.**

## Findings no other site has

1. **The 11-area scorecard from public records** (rows 16, 19 to 25): recorded house price, HUD rent, rent as a share of price, tax at 6 percent in dollars, flood share and the share of homes that are no one's residence, area by area. No one has put these side by side.
2. **Rent next to price, inland against the beach** (row 20): 9.1 percent in Longs, 7.5 in Socastee, 7.2 in Conway; 3.3 to 4.1 in Surfside, Pawleys, Myrtle Beach, North Myrtle Beach and Murrells Inlet.
3. **How full of investors each area already is** (rows 23 and 24): 71 percent of North Myrtle Beach homes are no one's legal residence and 52 percent of its tax bills go out of state; in Longs, Conway and Murrells Inlet about a quarter and under a tenth.
4. **Where builders still add houses** (row 18): 46 percent of Longs house sales were a builder's first sale; 4 percent in Myrtle Beach. Paired with the Little River townhouse story (row 33).
5. **What listings say against what the zoning says** (row 14 with row 3): 0 of 120 houses for sale in Carolina Forest say nightly rentals are allowed; 22 houses in Myrtle Beach say they are, in a city where 96 in 100 houses sit in zones that bar it. That is why we check zoning and covenants for the address.
6. **Our map** of the 11 areas by nightly rule, with the county line through Garden City.

## Title, H1, description

- Title (30 to 65 characters): **"Where to Buy Rental Property in Myrtle Beach: 11 Areas"** (54). Alternative: "Best Areas to Buy a Rental Near Myrtle Beach, by the Numbers" (60).
- H1: "Where should you buy a rental near Myrtle Beach?" / em: "Eleven areas, with the price, the rent and the rules."
- Description: "A year's rent is about 9% of a house's price in Longs and 3% in Surfside Beach. 11 Grand Strand areas compared: prices, rents, rental tax, flood and Airbnb rules." (fit to 160 characters at build).
- Keep the URL, `crumb`, `author`. Eyebrow: "11 areas, from county records". `datePublished` stays; the lead runs `build.js dates`.
- Keywords from the suggestions: where to buy rental property in myrtle beach; best area to buy airbnb in myrtle beach; myrtle beach short term rental zoning map; is myrtle beach a good place to invest in real estate; north myrtle beach vs myrtle beach investment; horry county rental property tax.

## Page shape

**Decision guide on top of a list of places** (CRAFT 3; Page shapes "Decide" and "Pick a few places from many"). The reader's choice (nightly or yearly) is the spine; the places follow in that order. The opening reaches the first place within one phone screen after the map (CRAFT 3, "Measure the top").

Order:
0. **Short answer** (two sentences, under the H1): "For a nightly rental, buy where the town allows it: North Myrtle Beach anywhere, Surfside Beach's two rental districts, the marked oceanfront zones of Myrtle Beach, and Garden City, Murrells Inlet and Pawleys Island where the subdivision allows it. For a yearly lease, buy inland: in Longs, Socastee and Conway a year's rent is about 7 to 9 percent of a house's price, against 3 to 4 percent at the beach." Then a key-facts row of three glass chips with words: "9% vs 3%: a year's rent next to the price, Longs vs Surfside" (row 20); "71% of North Myrtle Beach homes are no one's residence" (row 23); "About 3x: the tax on a rental against a home you live in" (row 22). Then one slim offer bar: "Tell us your budget and plan. We send back homes with the numbers."
1. **Map + the guide** (toc: "The map"). H2: "Which Grand Strand areas allow nightly rentals?" First sentence answers it (rows 2, 5, 6, 7, 8, 10). The map: 11 numbered outlines in three colours (nightly allowed across the area; allowed in some zones or districts; the subdivision's rules decide), the county line labelled, legend in words. Under it, one line per strategy pointing to the entry numbers ("Nightly: 1 to 6. Yearly: 7 to 11."). This is the only list of places before the entries (CRAFT 3, B42).
2. **The places, one entry each, numbered 1 to 11** (toc: "The 11 areas"), nightly first, then yearly:
   1 North Myrtle Beach, 2 Surfside Beach, 3 Garden City, 4 Murrells Inlet, 5 Pawleys Island and Litchfield, 6 Myrtle Beach, 7 Longs, 8 Socastee, 9 Conway, 10 Little River, 11 Carolina Forest.
   Each entry, in this order (CRAFT 5 "Sell the place"): a headline that says what this place does best for an investor (by feature, never by who lives there); the best thing an investor would not guess, from its rows; the nightly rule in one sentence with what we check; the money in one sentence a person would say ("Houses here resold for about $300,000 at the middle, and HUD puts a 3-bedroom's rent at about $2,270 a month, so a year's rent is about 9 percent of the price"); the trade-off in one line (flood share, tax, investor share, builder supply); one photo of the place with a caption that states a fact; a per-place offer ("See rentals for sale in Longs with the numbers"). 90 to 160 words each. Use each device (out-of-state bills, builder share, flood) where it is most striking, at most two or three times (CRAFT 5).
   What only each place has (from the rows; the writer picks the strongest):
   - **North Myrtle Beach:** the only town here with no special zoning or permit for nightly rentals (row 5); about 71 percent of homes no one's residence, 52 percent of bills out of state (rows 23, 24); 108 of 330 houses for sale say nightly is allowed (row 14); condo middle about $300,000 (row 17); nightly average gross in the file (row 26); a third of homes in the high-risk zone (row 25); a third of house sales from builders (row 18). The council workshops (row 5).
   - **Surfside Beach:** rentals under 30 days only in R3 and C3 (row 6); the highest house price of the 11 (about $705,000) and the lowest rent-to-price (3.3 percent) (rows 16, 20); 39 percent of homes in the high-risk zone (row 25); one builder sale in 120 (row 18).
   - **Garden City:** the county line runs through it (Areas; map); the Horry side has no rental-length rule, so covenants decide (row 8); the Georgetown end allows a tourist home in its resort district (row 10); 29 of 51 houses for sale say nightly is allowed, the highest share (row 14); 61 percent of homes no one's residence; 39 percent high-risk flood (rows 23, 25); its own fire district tax (row 21, 207.3 mills). Garden City page owns the beach-side detail; link it.
   - **Murrells Inlet:** a Georgetown County area in our outlines: no business license, a 30-day line, tourist homes in the resort district (rows 10, 11); the highest nightly average in the file (row 26) and the strongest June (row 27); only about 26 percent no one's residence (row 23); the highest tax per dollar of the beach towns (Georgetown district 41, row 21).
   - **Pawleys Island and Litchfield:** nightly allowed on the island with the town's own 3 percent tax (row 12); houses about $650,000 (row 16); 31 percent high-risk flood, 7 percent in the coastal V zone (row 25). Pawleys page owns the island detail.
   - **Myrtle Beach:** the condo market: about 16,900 condos against 10,300 houses (row 30); 3 in 4 condos in zones that allow nightly, 96 in 100 houses not (row 3); condo middle about $175,000 (row 17); the oceanfront overlay bars 90-day leases in nightly buildings (row 4); highest nightly listing count, lowest average per listing (row 26) and the deepest January (row 27).
   - **Longs:** the highest rent-to-price of the 11, about 9 percent (row 20); houses about $300,000 (row 16); HUD's highest 3-bedroom rent here, $2,270 (row 19); 46 percent of house sales from builders, so new supply keeps coming (row 18, story row 33); low flood (row 25); the owner's fix-and-hold area (row 32).
   - **Socastee:** houses about $300,000 with rent at 7.5 percent of price (rows 16, 20); 11 percent high-risk flood, the highest inland (row 25); a quarter of house sales from builders (row 18).
   - **Conway:** the lowest house price of the 11, about $271,000 (row 16); the highest tax per dollar (272.5 mills, row 21); nightly allowed by code in three downtown districts (row 7); tenants pay the lowest middle rent (ACS, row 31); river flooding outside the zones (link Conway page). Story `august-turnover` may give one line for the university lease cycle if the writer needs it (it is published on /invest/student-rentals/).
   - **Little River:** HUD rent about $2,100 with houses about $380,000 (6.6 percent); 40 percent of homes no one's residence, more than the other inland areas (row 23); condos about $155,000, the lowest (row 17); the townhouse story (row 33).
   - **Carolina Forest:** zero of 120 houses for sale say nightly is allowed (row 14), and the vendor has no nightly market for it (row 26); HUD 3-bedroom $2,230; under 1 percent high-risk flood (row 25); about 6 percent rent-to-price (row 20); HOA fee about $125 a month (row 28).
3. **"How do the 11 areas compare?"** (toc: "Side by side"). The scorecard from `chart-scorecard.json`: columns Area; Nightly rule (2 to 4 words); House price (middle sale); 3-bed rent (HUD, a month); Rent a year as % of price; Tax a year at 6%; High-risk flood %; Homes no one's residence %. Cards on a phone. Sort: as the entries. One caption line with the groups and sources. Then one chart: **horizontal bars of rent as % of price** (row 20), sorted, beach towns one colour, inland another; label each bar with the area and the percent; this is the page's one-glance picture. Sources line under it.
4. **"Where do other investors already own?"** (toc: "Investor share"). First sentence: "Most homes in North Myrtle Beach, Myrtle Beach, Surfside Beach and Garden City are no one's legal residence: 61 to 71 percent, against about a quarter in Longs, Conway and Murrells Inlet." Chart: bars of row 23 with row 24's out-of-state share as a second, lighter bar, or a dot; one chart only. Two short paragraphs: what it means for a nightly owner (the guests choose among many rentals) and a yearly owner (fewer year-round neighbours to rent to near the beach); the builder supply line (row 18) and the townhouse story (row 33).
5. **"What does the tax on a rental cost in each area?"** (toc: "The tax"). First sentence: the 6 percent rate and the school tax, about three times a resident's bill (row 22). Then the per-$100,000 line by town (row 21) as a small table, not a paragraph of numbers. Link /buyers/property-taxes/ (calculator) and /invest/run-the-numbers/ (tax reset after a sale; that page owns it).
6. **"How long is the season for a nightly rental?"** (toc: "The season"). Only if rows 26 and 27 are verified. First sentence: "A June month earns about two and a half to three times a January month." Small paired bars, June and January, five beach towns (row 27). One line on occupancy (row 26). Link /invest/airbnb-income/ and /invest/str-vs-ltr/. If struck: cut the section and keep one FAQ line with the link.
7. **"The same $300,000, two ways"** (toc: "Worked example"). Row 29 as a two-column card (Longs house by the year; North Myrtle Beach condo by the night), every line with its source in small type, then the bottom line "left before the costs listed". One sentence on what is not counted and why the nightly costs are larger. No loan, no rate, no payment. Link /invest/run-the-numbers/ for one address.
8. **"Will the rules change?"** (toc: "Rule changes"). H.3861 and S.442 in two sentences each, no dates in copy (row 15); North Myrtle Beach's workshops (row 5). One line: we read the current rule and the recorded covenants for the address before an offer (row 13).
9. **"What do we check before you offer?"** (toc: "What we check"). Five items as a short list with icons (`glassIcons`): the zoning or district for nightly; the recorded covenants and HOA papers (rows 1, 13); the building's rental rules and the oceanfront overlay (row 4); the flood zone for the address (row 25); the tax at 6 percent on your price (row 21). Then the offer box (same component as the end).
FAQ (open text, 6): "Where are Airbnbs legal in Myrtle Beach?" (rows 2, 3, 5, 6, 8, 10); "Is Myrtle Beach a good place to buy a rental property?" (row 20 both ways; no forecast); "North Myrtle Beach or Myrtle Beach for a rental?" (rows 3, 5, 16, 17, 23); "Is Murrells Inlet in Horry or Georgetown County?" (Areas; rows 10, 11); "What is the property tax on a rental in Horry County?" (rows 21, 22); "Where is the cheapest place to buy a rental near Myrtle Beach?" (rows 16, 17: Conway houses, Little River condos; say "in the past year's recorded sales").
Bottom CTA: h2 "Send your budget and your plan." p "We send back homes for sale in the areas that fit, each with the rent, the tax at the rental rate, the HOA fee and the nightly rule checked." Label "Send my budget". The line from `investor-common-question` may head it.
Sources line: SC Code 12-36-920, 12-43-220, 12-37-220, 27-30-130; City of Myrtle Beach; City of North Myrtle Beach; Town of Surfside Beach Sec. 17-396.10; City of Conway UDO; Horry County Zoning Ordinance and 2026 levy; Georgetown County zoning and tax calculator; SC Legislature H.3861, S.442; Horry County deeds and parcels; Georgetown County parcels; FEMA flood zones via the county GIS; HUD FY2027 Small Area FMRs; Census ACS 2020-2024; our listings feed in aggregate (CCMLS line); AirROI via /invest/airbnb-income/. Keep the live note "Educational only, not legal advice" and add "Prices are recorded sales, not values of any home."

Wrong-shape check (CRAFT 3): a rules table (the live page) fails the reader who came for money; a pure market report fails the nightly reader who first needs legality. The decision-guide top plus places answers both. Each entry differs (the "what only it has" list above), so it does not read as one spreadsheet row per town.

## Visuals

| Visual | Built from | Notes |
|---|---|---|
| Key facts row (3 glass chips with words) | rows 20, 23, 22 | `tools/glass.js` |
| Map: 11 numbered areas by nightly rule, county line | `areas.geojson`; rule class in `chart-scorecard.json` (`nightly_rule`) | `tools/area-map.js`; short and wide on a phone; labels at 16 px or more; three colours with words in the legend. A Google Maps link per area if the helper offers it. |
| One photo per entry | candidates below | One under each entry's money sentence, never above the answer. Caption states a fact from that entry's rows. |
| Scorecard (table on desktop, cards on phone) | `chart-scorecard.json` | `compareCards`; 8 columns maximum, plain headers |
| Chart: a year's rent as % of the house price | `chart-scorecard.json` `rent_year_pct_of_house` | Horizontal bars, flat glass style; load the dataviz skill |
| Chart: homes no one's residence, and bills out of state | `findings.json` areas[].all | One chart, two measures |
| Small table: tax per $100,000 at 6% by town | row 21 | 8 rows |
| Chart (only if rows 26 and 27 verify): June vs January | `chart-scorecard.json` `nightly_peak_low` | Five beach towns |
| Worked example card | row 29 | Two columns; sources in small type |
| What we check (5 icons with words) | rows 1, 4, 13, 21, 25 | `glassIcons` |

**Photo candidates (free licence; the builder opens each at full size and checks it shows what the caption says, then writes a licence record `tools/photos.js` accepts; files only under `chapter3realty/images/2026-11-a/invest-where-to-buy/`):**

| Entry | Candidate | Licence | Where |
|---|---|---|---|
| North Myrtle Beach | USGS coastal oblique aerial, North Myrtle Beach oceanfront (towers and houses on one stretch) | Public domain (USGS) | USGS Oblique Aerial Photography, doi 10.5066/F7N877XX (the series siblings used; pick a North Myrtle Beach frame, not the Myrtle Beach frames on /submarkets/myrtle-beach/) |
| Surfside Beach | USGS coastal oblique aerial of Surfside Beach's low-rise beachfront | Public domain (USGS) | same series |
| Garden City | NAIP aerial of the county line at Garden City, labelled from `areas.geojson` | Public domain (USDA NAIP) | https://imagery.nationalmap.gov/arcgis/rest/services/USGSNAIPImagery/ImageServer (the Garden City page uses other crops; choose the line, not the pier) |
| Murrells Inlet | NAIP or NOAA aerial of the inlet and the MarshWalk side | Public domain | NAIP as above, or NOAA ERI https://noaa-eri-pds.s3.amazonaws.com/ |
| Pawleys Island and Litchfield | Commons "Pawleys Island Historic District" HABS photos | Public domain (HABS, Library of Congress) | https://commons.wikimedia.org/wiki/Category:Pawleys_Island_Historic_District (the Pawleys page uses two CC BY-SA files; pick a different file) |
| Myrtle Beach | USGS oblique of an oceanfront condo stretch | Public domain | same USGS series (avoid the two frames on /submarkets/myrtle-beach/) |
| Longs | NOAA 2026 pre-event aerial of a new subdivision under construction in 29568, labelled | Public domain (NOAA) | https://noaa-eri-pds.s3.amazonaws.com/index.html#2026_Pre_Event/EC2601a_OB_N_RGB/ ; caption ties to row 18 ("new houses still going up") only if the frame shows streets with unfinished houses |
| Socastee | NAIP aerial of a Socastee subdivision off SC 707 | Public domain | NAIP |
| Conway | Commons "Waccamaw River Warehouse Historic District" (riverfront, one of the three districts in row 7) | Public domain | https://commons.wikimedia.org/wiki/File:Waccamaw_River_Warehouse_Historic_District_Jun_10.JPG (also on /submarkets/conway/; prefer a different Commons file from Category:Conway,_South_Carolina if one shows Main Street or the Riverwalk) |
| Little River | NAIP aerial of Little River's waterfront and the newer townhouse streets | Public domain | NAIP (the Little River page uses marina crops; choose the inland streets) |
| Carolina Forest | NOAA 2026 aerial of a Carolina Forest street of houses | Public domain | NOAA ERI (not the "Parks of Carolina Forest" frame on /invest/run-the-numbers/) |

The Commons API was rate-limited during research; re-check each file's licence on its page before use. Never a listing, builder, MLS, news or Google image.

## Photo partner's shot list (for `shot-list.md` and the group email)

Page: /invest/where-to-buy/. What each shot proves is in brackets. Daylight, no people as the subject, no house numbers or plates readable.

1. **North Myrtle Beach, Ocean Drive section:** an oceanfront condo building with houses beside it on the same block, from the beach access or the street. [Nightly rentals are allowed across the city; condos and houses side by side.]
2. **Surfside Beach:** a street of raised beach cottages in the town's rental district near the beach (the R3 area east of US 17 Business), from the street. [Nightly rentals are allowed only in two districts; what a rental cottage there looks like.]
3. **Garden City:** a sign or landmark where Horry County meets Georgetown County on the beach road (Waccamaw Drive or Business 17), if one marks it. [The county line runs through Garden City, and the rules change at it.]
4. **Murrells Inlet:** a street of houses on the Georgetown side near the inlet. [A Georgetown County area: no business license, a 30-day rule.]
5. **Longs:** a new subdivision with houses still being built next to finished ones, from the entrance road. [Almost half of house sales here were builders' first sales.]
6. **Socastee:** a street of single-family houses in a subdivision off SC 707. [Houses about $300,000 with year-round tenants.]
7. **Conway:** Main Street downtown or the Riverwalk, showing upper-floor windows over shops. [Downtown is one of three districts where nightly rentals are allowed.]
8. **Carolina Forest:** a typical street of houses in a planned neighbourhood off Carolina Forest Boulevard. [A yearly-rental area; no house for sale here said nightly rentals are allowed.]
9. **Little River:** a street of townhouses in a newer community. [The townhouse story: rents stayed flat while prices rose.]
10. **Pawleys Island:** a raised house on the island seen from the road or the causeway. [Nightly rentals are allowed on the island.]

All optional for the first build; government aerials stand in until his files arrive.

## What only the lead or a shared file can do

- `data/str-market.json` refresh is due 2026-11-13 (90 days). Rows 26 and 27 use it; the lead runs the refresh and `node build.js strdata` (NEEDS.md).
- /invest/str-rules/ says Conway has "no dedicated ordinance"; the Conway UDO has a "commercial short-term rental" use in three districts (row 7). File for that page (NEEDS.md).
