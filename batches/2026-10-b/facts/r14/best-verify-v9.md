# Best neighborhoods, rewrite check v9 (round 14e, 2026-10-15)

Independent verifier. I did no research on this page and had not seen it. Task: rows 278 to 283, and a full check of the spec at commit bc8b0ca, because a fresh writer rewrote every entry (lessons B45 to B51). I did not edit the spec.

What I read:

- Spec `batches/2026-10-b/specs/best-neighborhoods.js` at bc8b0ca (committed 04:11 UTC, last edit 04:07), diffed against `404d970` (the v8 base; every entry was rewritten, so every sentence is new text). The built preview `.../scratchpad/preview/b/best-neighborhoods.html` (built 04:10) has the same text as the spec; I checked 13 phrases, including the last edits. `data/best-neighborhoods.json` at bc8b0ca (the Prince Creek, Grande Dunes and Avalon cells are new since v8; Barefoot's beach cell was edited later, in eeed521, and is not in this check).
- Rows 278 to 283 and the older rows behind each sentence: 1 to 5, 12 to 17, 24 to 33, 57 to 62, 69 to 72, 82 to 86, 92 to 97, 100, 102 to 106, 113 to 118, 123 to 129, 134 to 143, 145 to 149, 156 to 162, 168, 170 (affordable), 177 to 180, 184 to 186, 190 to 192, 194 to 198, 200 to 203, 205 to 207, 209 to 213, 215 to 218, 220 to 225, 229 to 239, 241 to 257, 259 to 277; the-farm 1, 27, 40, 41, 43, 48, 66, 73; gated 20, 41, 43, 187.
- `review/SIBLING-OWNERS.md`, and the gated, affordable, no-hoa and the-farm previews (6-word shingles over the page text, then each shared place read by hand).
- `research_notes/lessons-2026-10-b.md` B45 to B51, `rules/distance-words.json`, CRAFT 2.

Primary sources I opened myself (queries in `scratchpad/v9`):

- Horry County parcels layer 24 (own pulls with geometry for every group; Grande Dunes, Prince Creek, Cherry Grove, Forestbrook, Avalon, The Farm and the others), Flood Zones layer 19, Highways layer 17, Municipalities layer 0 (Surfside Beach), the Planning "Major Residential Developments" layer (Forestbrook Estates).
- Horry County Register of Deeds, AcclaimWeb: the cached weekly pulls of every DEED of 10/1/2025 to 9/30/2026 (53 files, 30,339 deeds, the same count as the earlier verifiers), matched by parcel number to the county sets. I did not re-open deed detail pages: the deeds used were already opened one by one by the v8 and round 13 verifiers, and nothing here rests on one deed.
- OSRM (router.project-osrm.org) for the driving times; routing.openstreetmap.de (routed-foot) for the walks; api.openstreetmap.org for the water polygons around Plantation Lakes (two tiles), the Food Lion node and the Publix way, Barc Park North and the Grissom Parkway trail.
- USGS NAIP imagery (USGSNAIPPlus image service), with the county outlines drawn over it: The Farm, Tidewater, Avalon's amenity parcel and Forestbrook's common area.
- SC DES BeachAccess layer 0 (644 records) for Surfside Beach 1 to 32.
- Waterbridge HOA's Boat Storage page (waterbridgehoa.com/people/boat-storage/), opened 2026-10-15.
- The seven photographs embedded in the built page (decoded and viewed), and `data/photos.json` for their records.
- Not re-opened: the Real Geeks listing pages. I used `data/best-neighborhoods-homes.json` (the listing file that row 200's verifier checked page by page) for the year-built and size counts.

## Result

- About 215 fact-bearing units checked (160 sentences in the 15 entries, 15 guide lines, the 15-row table, the short answer, the FAQ, the notes). **190 match. 25 drift, in 21 distinct drifts.** Plus 10 optional tightenings.
- Must fix (the sentence says something the row or the source does not support): E1 to E13 (14 units).
- Tighten (more than the row says, a listing detail that reads as a rule, or a CRAFT 2 breach): T1 to T8 (11 units).
- **v8 drifts N1 to N14: all 14 applied.** N2 and N5 were fixed by a wider price, and the wider price brought two new problems (E12 and E6). Seven rows that earlier verifiers corrected came back in new words that the struck patterns did not match (B30): E1 (row 245), E3 (211), E4 (224), E5 (235), E7 (253), E8 (250), E10 (230).
- Rows 278 to 283: **5 verified, 1 wrong in part (278).** Every house count, median lot, lot-on-the-course count, the Farm acreage and the Avalon drive and flood counts reproduce. What does not reproduce: the Grande Dunes middle (I get about $1.4 million, not $1.5 million), and the count of 57 Prince Creek resales (I get 48 to 53; the middle of $490,000 does reproduce).
- Lead items from the brief: Forestbrook's garden holds. Avalon's ball fields hold. Deerfield's golf-cart lot holds as a fact, but the guide line built on it does not (E11). The Farm's open land holds ("woods" holds on the aerial). Tidewater's "about seven of every ten" holds (403 of 584). "The HOA does not allow swimming or boating in them" holds (the-farm row 66; not on The Farm page). "Most of the houses for sale lately date from around 2000" does not hold as "most" (T1). The condo fee of $780 to $800 is the struck wording in new form (E4).
- Old struck wording: `node tools/struck-check.js --batch batches/2026-10-b --preview .../preview/b --strict`, **before my entries: best-neighborhoods (176 patterns): no struck wording.** After my 25 new entries (201 patterns) the page fires 25 phrases, one per unit above. The other pages at the time of my run: affordable and the-farm none, no-hoa none, gated 21 (not this page; other verifiers were editing those lists).
- `node tools/struck-check.test.js`: all controls pass.
- Times: I re-ran 14 of the page's times. Three drift (E1, E7, E13); all others reproduce. No banned distance word on the page.
- The spec has moved since bc8b0ca (commits eeed521 at 04:31 and 591281e at 04:45, both "round 14i WIP", and later ones). I did not re-check those. Searching the current spec and data file (f939039) for my 25 struck patterns: 16 still appear, 9 are already gone (the two Pine Lakes distances, the Tidewater years and condo fee, Wild Wing's university time, the Market Common state park and house count, the Deerfield guide line, the Farm airport sentence). The Grande Dunes table cell "About $1.5 million" is still in the data file.

## Rows 278 to 283

| Row | Verdict | Why |
|---|---|---|
| 278 | wrong in part | **Grande Dunes, run as one list** (the rows were not run as one). The 7 of row 14 reproduce (middle $1,632,000). The other sections do not reproduce as row 14's note gives them (44 resales, middle $1,537,500): Members Club, Cipriana, Seville, Palermo and Cadiz give 37 resales, middle $1,364,900; with Calais 40; with Siena Park and Milano (their deed memos say Grande Dunes) 46, middle $1,362,450. As one list: 44 resales with the five sections (middle $1,457,500), 47 with Calais ($1,465,000), **53 with all eight named sections (middle $1,400,000; quartiles $955,000 and $1,717,000)**. Every deed whose memo names Grande Dunes (not Grande Dunes North): 54 resales, middle $1,382,450. "About 51 resales" holds (50 to 53). **The middle is $1.39 to $1.47 million by the set and $1.4 million for the full list. "About $1.5 million" overstates it by about $100,000 (E12).** The gated page's $1.5 million is for Calais, Palermo and Villa Venezia, a different set. **Prince Creek:** every section outside Seasons (the "Prince Creek" sections, the Bays, Creek Harbour, Bellwood Landing, the "Prince Ck" spellings; 1,143 parcels, 935 with a building) gives 48 resales, middle $490,000, range $275,000 to $1,550,000; with unvalued parcels 53, middle $474,900. The middle reproduces. The 57 and the $82,500 low in row 147's note do not ($82,500 is an owner-to-same-owner transfer, 5084/3420). The page prints no count. |
| 279 | verified | All 14 counts and medians reproduce from my own pulls (Cherry Grove 1,687 and 0.134; Surfside 2,771 and 0.175 on the same 4,574 parcels as row 134; Pine Lakes 250 and 0.179; Tidewater 584 and 0.270; Barefoot 82 houses; Prince Creek named sections 123 and 0.251; Wild Wing 676 and 0.376; Plantation Lakes 714 and 0.542; Waterbridge 993 and 0.288; Market Common 375 and 0.084; Forestbrook 500 and 0.162; Avalon 729 and 0.159; Deerfield 826 and 0.332). Limits the page does not keep: Prince Creek's 123 is the named sections only (642 houses with all sections: E6); Market Common's 375 leaves out 47 R-4 lots coded 319 or 800 that hold houses (about 420 houses: T4); Cherry Grove's 53 condo units are only the ones with the Cherry Grove name (E2). |
| 280 | verified | Tidewater 403 of 584 (the club's two parcels; 372 touch). Wild Wing 217 of 676. Pine Lakes 13 of 250 within 5 m (8 touch; 9 within 1 m; the club's other parcel touches none). Prince Creek named sections 9 of 123, all in Stonegate. Plantation Lakes 469 of 714 within 5 m of OpenStreetMap water of an acre or more (47 polygons, the largest 108 acres). Shares 69, 32, 66, 5 and 7 percent, so "about seven of every ten", "about one in three" and "about two of every three" hold. Limits: "borders" includes a side line; Tidewater's club parcels include tidal marsh on the south edge that I did not separate from fairway; "the water" at Plantation Lakes is any water of an acre or more. For all of Prince Creek outside Seasons: 19 of 642 (Stonegate 9, Willow Bay Phase III 10). |
| 281 | verified | 62 HOA parcels, 283.89 acres by the county's Acreage field (the outlines add to about 289). The row's set of 1,292 house lots: 843 within 3 m of an HOA parcel (65 percent). **"Woods" checked on the aerial:** the NAIP image with the 62 outlines drawn over it shows the large northwest block and several inner blocks as woods, the central pond and others as water, and many narrow strips as grass. "Ponds, woods and open space" holds. Limits: 18.78 of the acres are the open space and amenity parcel (without it 265 acres and 810 houses, 63 percent); "border" includes side lines (820 of the 843 share 15 m or more of line with HOA land, so "many back yards" is fair but was not measured). |
| 282 | verified | OSRM from 2513 Sugar Creek Ct: Food Lion (OpenStreetMap node, 4030 River Oaks Drive) 9.96 min, 4.26 mi; Publix (OpenStreetMap way, 136 Sapwood Road) 10.01 min, 4.14 mi. Flood layer 19: 5 of 729 house parcels touch a zone AE polygon (4 by more than 5 square meters); 18 more touch the 0.2 percent zone, which is not high-risk. "Almost every house is outside the high-risk flood zone" holds (724 of 729). |
| 283 | verified | From the built page's SVG: the 15 dots fit one lat/lon to x/y fit with residuals under 0.2 map units (so each dot is at its place, The Farm's at 33.7635, -78.8765). 14 leader lines, 7 to 45.0 units long (Waterbridge's is 45.0, the limit); none crosses another, none touches another number or dot; Market Common's number sits on its dot; The Farm's number is 6.9 units from its dot. `tools/area-map-places.test.js`: all controls pass. |

## v8 drifts after round 14e

| v8 | Where it stands | Result |
|---|---|---|
| N1 Surfside "only Grande Dunes and Plantation Lakes" | The whole "Of the 15 neighborhoods" section is gone. | fixed |
| N2 Grande Dunes "the seven homes that resold" | Now all of Grande Dunes, "about $1.5 million". The set is right; the number is high. | fixed, new drift E12 |
| N3 Avalon 1,600 square feet | "about 1,700 square feet" (median 1,720 of 13). | fixed |
| N4 Pine Lakes "Few houses come up for sale" | Gone. | fixed |
| N5 Prince Creek "five houses ... named sections" | "Homes in Prince Creek usually sold for about $490,000" (all sections). The same entry still counts lots in the named sections only. | fixed, new drift E6 |
| N6 Avalon "about 18" | "about a 20-minute drive"; table "About 20 minutes". | fixed |
| N7 Grande Dunes "the choice is small" | Gone. "Most houses for sale here are new or not yet finished": 22 of 29 built 2024 or later. | fixed |
| N8 Prince Creek "its own rules" | "depending on the section". | fixed |
| N9 Wild Wing "Afterward, Wishbones" | Gone. | fixed |
| N10 Market Common "errands" | "beside a district of shops and offices". | fixed |
| N11 Tidewater "behind Cherry Grove Inlet" | "between the Intracoastal Waterway and Cherry Grove Inlet, on the marsh". | fixed |
| N12 guide "The Farm: nearer the beach" | "The Farm: open land out back". | fixed |
| N13 Wild Wing "so the ocean" | "and a beach day starts with a drive of about 20 minutes". No "so". | fixed |
| N14 FAQ "newer neighborhoods" | "Carolina Forest for big neighborhood pools and lakes". | fixed |

v8 optionals: O2 (booked when the first round ends), O3 ("A ball game needs no drive") and O5 ($84) applied. O1 and O4 unchanged and fine.

## New drifts in round 14e

Must fix:

| # | Page sentence | Problem | Supported wording |
|---|---|---|---|
| E1 | Cherry Grove: "The pier is about a 14-minute walk from the middle of Cherry Grove." | Row 245 corrected this to 12 minutes: the 14 was a walk to a point 175 m out on the pier. I re-ran routed-foot from the middle to the pier's land end: 903 m, 12.05 min. The struck pattern needs "Cherry Grove Pier" in the same sentence, and the new sentence says "The pier". | "Cherry Grove Pier is about a 12-minute walk, about half a mile, from the middle of Cherry Grove." |
| E2 | Cherry Grove: "mostly houses, about 1,700 of them, with only a few dozen condos." | Group (CRAFT 2). Row 92 counts parcels with "Cherry Grove" in the legal description: 1,687 houses and 53 condo units. Its note says the condos filed under other names are left out. County parcels under other names include Towers on the Grove (232 condo parcels) and Prince Condo at Cherry Grove Pier (257). Rows 92 and 94 say so. | "About 1,700 houses carry the Cherry Grove name in county records. The condo towers along the ocean are filed under their own names." Or cut the condo clause. |
| E3 | Surfside: "The land was a rice plantation called The Ark." | Row 211's correction: "Surfside Beach began as part of a rice plantation called The Ark" (the source says "originally part of"). The struck pattern needs "land under Surfside Beach". | "Surfside Beach began as part of a rice plantation called The Ark." |
| E4 | Tidewater: "The few condos and villas also pay a higher HOA fee, about $780 to $800 a month." | Row 224: $778 to $800 is what the two-bedroom Clubhouse Villas units listed now show; other units in the same buildings list $599 to $978; "villa" is not a separate product. This is the struck "A condo or villa here pays" with "condos and villas also pay". | "Two-bedroom condos in the Clubhouse Villas list at about $780 to $800 a month in HOA fees, and other units in the same buildings list higher and lower." |
| E5 | Barefoot: "crosses a swing bridge from 1934" | Row 235: the resort page gives 1934 and 1938, the engineers 1936. No single year is firm. The struck pattern needs "bridge dates from 1934". | "a swing bridge from the 1930s, moved here from Edenton, North Carolina" |
| E6 | Prince Creek: "Most of its houses are not on the course itself: only nine of about 120 lots border it." | Scope. Rows 279 and 280 count the named sections only (123 houses, 9 border). The price in the same entry is all of Prince Creek outside Seasons. With the Bays, Creek Harbour and Bellwood Landing, Prince Creek has 642 houses and 19 border the course (Stonegate 9, Willow Bay III 10). The page says "its houses". | "Most of its houses are not on the course itself: about 19 of 640 lots border it [county parcels, all sections outside Seasons]." Or keep the old scope and say "in the older sections". |
| E7 | Wild Wing: "Coastal Carolina University is an 11-minute drive." | Row 253: 10.65 min to a point inside the campus; a reader arrives between 8.5 and 10.7. The row says "about 10, from the middle of Wild Wing". The struck pattern needs "about 11 minutes". | "From the middle of Wild Wing, Coastal Carolina University is about 10 minutes by car." |
| E8 | Waterbridge: "Owners also have a fenced storage area for boats and jet skis" | Row 250: "fenced" is not in the source. I opened the HOA page today: "The storage area is full; therefore, boats and jet skis will be the only items that will be entered into the storage area by Waterbridge owners only." No fence is mentioned. The v8 sentence said it was full. A buyer with a boat reads this as available. | "Owners also have a storage area for boats and jet skis. It is full now, so we ask about a space before you offer." |
| E9 | Forestbrook: "the whole neighborhood fits on about 81 acres." | The county's parcels named Forestbrook Estates total 155.6 acres (house lots alone 92.5; the 500 lots at 0.162 acre are 81 acres by themselves). The county's development outline is 182 acres. Row 229's 81.2 is the ACRES attribute of the planning layer; for other developments that attribute matches the polygon, here it does not. | Cut the clause. "A house lot here is about a sixth of an acre." |
| E10 | Deerfield: "Deerfield grew up around the old Deer Track golf resort near Surfside Beach." | Row 230: "grew up" (which came first) is not sourced. Its correction: "is built around the old Deer Track golf courses". The struck pattern needs "around the Deer Track"; the page has "around the old Deer Track". | "Deerfield is built around the old Deer Track golf courses near Surfside Beach." |
| E11 | Guide line: "Deerfield: golf carts to the beach" | Row 230: "No row says a golf cart may be driven the 2.7 miles from Deerfield, and the lot has 3 spaces." The line says golf carts go to the beach. The fact is a lot of 3 golf-cart spaces at access 31 (DES list, 2019). Twenty of the 32 Surfside accesses are golf-cart-only. The next access (32), 7.8 min by car, has a 45-space pay lot. | "Deerfield: golf-cart beach parking" (34 characters, the page's limit). |
| E12 | Grande Dunes: "Homes in Grande Dunes usually resold for about $1.5 million last year" and the table cell "About $1.5 million" | See row 278. The full list gives a middle of $1.4 million (50 to 53 resales); row 14's 44 resales at $1,537,500 do not reproduce. | "about $1.4 million" in both places. |
| E13 | The Farm: "Myrtle Beach International Airport is about 20 minutes from The Farm's main entrance." | Row 180 and the-farm row 27: 20.2 minutes is from the Farmers Rest Drive entrance; "No source names a 'main' entrance". From the reference point it is 23.3 minutes (row 180: "say so or use 20 to 25"). The Farm page has the airport in its own table. | "about 20 minutes from the Farmers Rest Drive entrance, 20 to 25 from the middle of the neighborhood", or cut it (The Farm page owns it). |

Tighten:

| # | Page sentence | Problem | Supported wording |
|---|---|---|---|
| T1 | Tidewater: "Most of the houses for sale lately date from around 2000" | B48. 17 detached listings, built 1992 to 2027. Seven were built 1999 to 2002, 10 from 1997 to 2005, 15 in the 1990s or 2000s. "Most ... around 2000" is not what 7 of 17 shows. | "The houses for sale lately were built mostly in the 1990s and 2000s [17 listings, October 2026]." |
| T2 | Pine Lakes: "a city bike route along Grissom Parkway is about a fifth of a mile away. Barc Park North ... is a little over half a mile away." | CRAFT 2: a straight line (row 194: 0.155 and 0.59 mile). By foot to the trail 0.36 mile, 7.8 min; to Barc Park North 1.3 miles, 27 to 31 min on foot, 1.9 miles, 5.9 min by car. | "about an 8-minute walk" for the trail; "about 6 minutes by car" for the park. |
| T3 | Market Common: "Myrtle Beach State Park's land is about a mile away." | CRAFT 2 and row 195 ("about a mile away in a straight line"). The park entrance (4401 South Kings Highway) is 2.25 miles, 5.1 min by car from the middle. | "the entrance to Myrtle Beach State Park is about 5 minutes by car" |
| T4 | Market Common: "about 375 houses and about 240 townhomes" | Row 24's limit: 47 R-4 lots coded 319 or 800 hold houses (375 plus 47 is about 420). Townhome parcels with a building: 230 (239 in all). | "about 420 houses and about 230 townhomes" |
| T5 | Cherry Grove: "The beach itself was made in 1950, when an inlet was filled to join Futch Beach to the Nixon family's Cherry Grove land." | Row 202: the source says Futch Beach was joined to the Nixon land and "the new entity was renamed Cherry Grove Beach". The beach was not made. | "In 1950 an inlet was filled to join Futch Beach to the Nixon family's Cherry Grove land, and the joined place was named Cherry Grove Beach." |
| T6 | Cherry Grove: "more than half of the homes for sale here have no homeowners association (HOA) fee." Surfside: "Most homes for sale here have no HOA fee." | Rows 177 and 178: "no HOA fee" means the fee field is blank in a listing. Their safe wording is "are listed with no HOA fee" and "Do not write 'have no HOA'". The FAQ has it right. | "are listed with no HOA fee" |
| T7 | Cherry Grove: "so a mortgage lender will require a policy." Surfside: "where a lender requires flood insurance." | Federal law requires flood insurance only from a federally regulated lender (the-farm row 73). The verified wording on affordable row 170 is "a lender usually requires". | "where a lender usually requires flood insurance" |
| T8 | Avalon: "these houses are more than twenty years old" | The 13 listings were built 2000 to 2006: 20 to 26 years old in 2026, and a 2006 house is twenty, not more. They are 13 of 729. | "the ones for sale lately are 20 to 26 years old" |

Optional tightenings, no struck entry:

- O1. The short answer says "For golf at the door, Pine Lakes", and the Pine Lakes entry says only 13 of 250 lots border the course. Tidewater has 403 of 584. The pick needs a reason that does not rest on lots on the course (the club is next to the sections).
- O2. The short answer says "For more house for the money, Avalon". No row computes price per square foot. The rows support the lowest price ($292,000). A rough figure (price by listing size) puts Forestbrook at about $168 a square foot, Avalon $170, Deerfield $176, The Farm $181.
- O3. The Farm: "about 280 acres" includes the 18.8-acre open space and amenity parcel; "Many back yards open onto trees or water" was not measured (see row 281).
- O4. Deerfield: the lead leaves out that the next access has a pay lot and that the access list is dated 2019 (row 230 asked to keep both). "About 13 acres of lake and canals" is the 13.62-acre parcel named lake and canals, so "about 14".
- O5. Tidewater: "Most stand under tall trees" has no count; it is read from the aerial. "Many" fits.
- O6. Prince Creek: "Builders have also sold new townhomes here" rests on row 148, which says the index does not show a sale was new (32 of the 53 are on unvalued parcels).
- O7. "last year" in every price line means the 12 months to September 2026. B48 wording, fine; the sources line says 12 months.
- O8. The lead's decision (rows 253 and 258) was to state the start of each time once, in the table note and the sources line. The table note names the start for the beach column; the sources line says only "Drive times assume no traffic". Tidewater's Publix, Forestbrook's and Avalon's Food Lion, and Deerfield's beach name no start in the entry.
- O9. Grande Dunes' beach cell says "About 9 to 10 minutes" from the middle of its named sections; the gated page says 12 from the gated sections. Different starts, both stated by their pages.
- O10. Cherry Grove heading "a world-record shark": the record stood 47 years and was beaten; the sentence says "at the time", the heading does not.

## B48: counts behind "most" and "many"

| Page words | Count | Result |
|---|---|---|
| Tidewater: about seven of every ten houses have lots that border the golf course | 403 of 584 (69 percent) | holds |
| Wild Wing: about one in three | 217 of 676 (32 percent) | holds |
| Plantation Lakes: about two of every three | 469 of 714 (66 percent) | holds |
| The Farm: about two of every three | 843 of 1,292 (65 percent) | holds, see row 281 |
| Pine Lakes: only 13 lots border it | 13 of 250 (8 touch) | holds |
| Cherry Grove: ones on the market lately mostly built before 1990 | 29 of 38 | holds |
| Pine Lakes: most on the market lately went up after 2015 | 13 of 18 (15 of 18 from 2015) | holds |
| Tidewater: most for sale lately date from around 2000 | 7 of 17 within 1999 to 2002 | **T1** |
| Waterbridge: many on the market only a few years old | 22 of 27 built 2022 or later | holds |
| Grande Dunes: most houses for sale new or not yet finished | 22 of 29 built 2024 or later | holds |
| Barefoot: some condos date from 2002, others are newer and have more room | 3 of 8 built 2002 (1,801 to 1,825 sq ft); 5 of 8 built 2022 to 2023 (2,370 to 2,804) | holds, said as "some" and "others" |
| Avalon: for sale lately built 2000 to 2006, about 1,700 square feet | 13 of 13; median 1,720, range 1,050 to 2,200 | holds as a sample; T8 on the age |
| Plantation Lakes: houses on the market about 3,400 square feet | median 3,385 of 15, range 2,450 to 4,730 | holds as a median |
| The Farm: listed in recent years about 1,900 square feet | median 1,946 of 454 listings since 2020 (the-farm row 40) | holds |
| Almost every home in Cherry Grove in a high-risk flood zone | 2,013 of 2,057 address points | holds |
| About one home in four in Surfside | 1,001 of 3,670 (27 percent) | holds |
| Forestbrook and Avalon: every or almost every home outside the zone | 669 of 669; 724 of 729 | holds |
| FAQ: most other neighborhoods have a fee under $250 for a house | about 10 of 13 | holds |

## Sibling check (SIBLING-OWNERS.md)

- **The Farm entry** uses none of The Farm page's owned facts: no preserve, no fee contents, no pools, no activity center, no recreation campus. Its pond rule (the-farm row 66) is not on The Farm page. The airport time is on both pages (E13). The link sentence names pools, schools and HOA rules, and The Farm page has all three.
- **Tidewater, Barefoot, Grande Dunes.** Gated owns the club facts. Best has none of them (no specials, no courses beyond the Norman course and the replay, no marina, no Ocean Club). The figures that appear on both pages match: Tidewater "about $625,000" and "about $230", "about 580 houses"; Grande Dunes "$200 to $400". Grande Dunes' price differs because the sets differ (gated: three sections; best: all). After E12 the two read $1.5 million (gated) and $1.4 million (best).
- **Cherry Grove.** No-hoa owns the canals, the dredging fee and the flood zone. Best gives one trade-off line, in different words ("flood insurance").
- **Surfside Beach, Pine Lakes.** Best owns the pier history and the club history; no-hoa has parking rules, golf carts on the streets (a permit, four miles from home, streets of 35 mph or less) and the older Pine Lakes lots. No shared sentence.
- **Wild Wing, Forestbrook, Market Common.** The affordable page has the Fairways townhomes, Forestbrook Village and one Market Common line. Different places, different angles, no shared sentence.
- A 6-word shingle comparison of the page text against the four siblings found only the search form and the price filters, no copied sentence.

## Times

| Page | Start to end | Re-run | Page says | Rule |
|---|---|---|---|---|
| Cherry Grove, pier walk | middle (-78.627983, 33.834345) to the pier's land end (-78.63338, 33.83003) | 12.05 min, 903 m (routed-foot) | about 14 | **E1** |
| Cherry Grove, beach access | row 97 | not re-run | about a tenth of a mile | ok |
| Surfside, pier walk | row 246 | not re-run (v8 re-ran 9.4 min) | about nine minutes | ok |
| Tidewater, Publix | row 109 | not re-run (v8 re-ran) | about seven minutes | ok (7.4) |
| Avalon, Food Lion and Publix | 2513 Sugar Creek Ct | 9.96 and 10.01 min | about ten | ok |
| Avalon, beach | row 274 | 18.2 (v8) | about 20 | ok |
| Wild Wing, university | middle | row 253: 10.65 min | 11 | **E7** |
| Prince Creek, Publix, MarshWalk, park | reference point | row 252: 2.2, 7.25, 12.13 | 2, 7, 12 | ok |
| Market Common, state park entrance | middle to 4401 S Kings Hwy | 5.1 min, 2.25 mi | "about a mile away" (straight line) | **T3** |
| Pine Lakes, Barc Park North | reference point to the OSM park | 5.9 min, 1.91 mi by car; 27 to 31 min on foot | "a little over half a mile" | **T2** |
| Pine Lakes, bike trail | reference point to the nearest trail node | 7.8 min, 0.36 mi on foot | "a fifth of a mile" | **T2** |
| Deerfield, beach | reference point | row 129: 7.3 to access 31 (3 golf-cart spaces), 7.8 to access 32 (pay lot) | about seven | ok, E11 and O4 |
| The Farm, airport | Farmers Rest Drive entrance | row 33: 20.2 min | about 20 "from the main entrance" | **E13** |
| Carolina Forest range | rows 63, 76, 264, 274 | 12.3, 17.3, 17.0, 18.2 | FAQ "12 to 20" | ok |

`rules/distance-words.json` run over the page text: no hit.

## Photographs

I decoded and looked at all seven.

| Photo | Label or caption | Result |
|---|---|---|
| Cherry Grove Pier from above (NAIP 2023) | The dot of "Cherry Grove Pier" is on the pier. Caption: a pier past the surf, beach houses behind the sand. | matches |
| Surfside Beach Pier (NOAA, January 2026) | The dot of "Surfside Beach Pier" is on the pier's foot. Caption: the pier, streets of houses behind the sand. | matches |
| Pine Lakes clubhouse (Pubdog, public domain) | No label. The record says the building is the 1927 clubhouse (NRHP "Ocean Forest Country Club"); the Commons page was rate-limited when I tried it, so I rely on the record. | matches the caption; not independently re-checked |
| Tidewater (NAIP 2023) | The pill "Golf course" sits on the end of a fairway and green at the top; fairways show at the left and the right of the houses. Caption: houses under the trees, fairways on both sides. | matches |
| Prince Creek (NAIP 2023) | The pill "TPC Myrtle Beach" sits on the course at the left; houses and ponds on the right. | matches |
| Plantation Lakes (NAIP 2023) | "Lake" is on the water; the dot of "Boat docks" is on the dock beside the amenity grounds; two pools show. | matches |
| The Market Common (NOAA, January 2026) | "The Market Common" is on the outlined homes; "Valor Park" is a dot at the edge of the shops (the county garden's centroid); "Grand Park" is just below the ball fields over the lake and lawn of the park. | matches; the frame is tilted, so I did not re-project the Valor Park point (the record says it was placed from ground coordinates) |

The credit sentence ("NOAA and USDA aerials ... the clubhouse by Pubdog") fits the records.

## Struck entries added

25 entries in `best-neighborhoods-struck.json`, each ending ", 287": E1; E2; T5; T7 (two: Cherry Grove and Surfside); T6 (two); E3; T2 (two: the trail and the park); T1; E4; E5; E6; E7; E12 (two: the sentence and the table cell); E8; E9; T3; T4; T8; E10; E11; E13. Each pattern names the drift, not the subject. One first draft of the E8 pattern ("fenced storage area") fired on the approved Tidewater wording of rows 260 and 265, so the pattern now carries "Owners also have a fenced storage area for boats and jet skis". Against the built page the 25 entries fire 25 phrases (one per unit) and nothing else in best fires. `node tools/struck-check.test.js` prints "all controls pass": each struck sentence fires its entry and each approved wording fires none.

## Status

Rows 278 to 283 updated: 278 wrong in part (Grande Dunes middle), 279 to 283 verified, with the limits in each note. Row 287 added: **wrong in part (v9)**. The page may not go out until E1 to E13 are fixed. Not checked: the Pine Lakes clubhouse photo against the Commons page (rate-limited); the Valor Park dot against the frame's ground coordinates; the HOA documents behind the Forestbrook garden (the lead rests on 6 of 10 listings and the aerial, where a grid of raised beds shows on the association's parcel next to the pool's parking lot; "plots for owners" rests on the listings); the current Joey's-type menus (none on this page).
