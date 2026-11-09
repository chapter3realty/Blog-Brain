# BUILD: /invest/condo-buildings/ (batch 2026-11-b)

Built 2026-11-09 from `PLAN.md` and the VERIFIED and CORRECTED rows of `facts.md` only (verifier's values and wording, `VERIFY.md`). Not deployed, not committed.

## Files (website working copy `scratchpad/wt-live`)

- Spec: `specs/condo-buildings.js` (new; the July page had none). Build: `node tools/mkpage.js specs/condo-buildings.js`.
- Page: `chapter3realty/invest/condo-buildings/index.html` (URL kept).
- Data read: `data/2026-11-b/invest-condo-buildings/findings.json`, `building-fees.json`, `raw/building-points.json`, `raw/oceanfront-addresses.json`, `../hoa/fees-by-kind.json`. The verifier's corrections are typed in the spec's `CORR` table with the row beside each, and each is checked against the value it replaces, so a re-run of the data stops the build until the corrections are rechecked.
- Photo: `data/2026-11-b/invest-condo-buildings/photos.json` (new) and `chapter3realty/images/2026-11-b/invest-condo-buildings/` (5 files). The CC BY-SA 4.0 Commons photo "Oceanfront towers along the beach in Myrtle Beach" (DiscoA340), copied with its record from /invest/str-vs-ltr/, looked at full size; metadata embedded with `photos.js embedMetadata`. It names no building. It is also the share image (16x9 crop).
- No other page or shared file was touched.

## Outline

- **Title** (kept, 58): Myrtle Beach Oceanfront Condo Buildings: HOA Fees Compared. **Description** (144): 45 Myrtle Beach and North Myrtle Beach oceanfront condo buildings: the monthly HOA fee in each, what units sold for, and the units for sale now.
- **H1** (headlines.json): Myrtle Beach oceanfront condo buildings, / *with their HOA fees compared.* (italic line at about half size). Sub (26 words). Key facts: about 1,100 condos for sale; middle fee about $920 a month; middle sale $53,000 to $950,000. Byline Devin Day, reviewed by Tim Nash.
- **Short answer:** about 1,100 for sale, middle fee about $920; lowest building about $425 (Sands Ocean Club), highest about $1,820 (Margate Tower).
- Slim offer bar: "Tell us the building. We send its units for sale and their fees." / Send me units in one building. "On this page" in columns.
1. **Which oceanfront condo building fits what you want?** A plain list under rules, by feature: sold for about $100,000 or less; a low monthly fee; slides and lazy rivers; mostly two and three bedrooms; pets allowed on most listings; behind a gate. Each name jumps to its entry.
2. **What are the oceanfront condo buildings in Myrtle Beach?** The photo, then 24 entries south to north (ordered by the listings' points): Myrtle Beach Resort, Compass Cove, Bluewater, The Palace, Landmark, Sea Mist, Coral Beach, Bay View, Camelot, Breakers, Caribbean, Beach Colony, Dunes Village, Monterey Bay, Grande Cayman, Caravelle, Ocean Reef, Sand Dunes, Sands Ocean Club, then a Kingston Plantation opening (Margate, Brighton, South Hampton), Royale Palms, SeaWatch. Each: its best true thing, what owning there is like, one honest line, the price and fee in a sentence, its homes strip with the pill "Get the condos for sale at <building>" as fallback.
3. **What are the oceanfront condo buildings in North Myrtle Beach?** 6 entries: Ocean Creek, North Beach Towers, Beach Cove, Bay Watch, Avista, Prince. Offer: "Before you pick a building, see its money" / Have us pull one building's budget and reserves.
4. **How do HOA fees compare across Myrtle Beach oceanfront buildings?** The group ($920, half between $730 and $1,140, link to /hoa/). Chart 1 "The lowest fee is about $425 a month, the highest about $1,820" (six lowest, the whole group in gray, five highest). Fee next to price (row 9, said only here). Table "Every oceanfront building, south to north": all 47, fee, asking now, sold for; cards of one line on a phone; "No units for sale this week", "Too few sales", "None recorded", "Not counted" in words.
5. **What does an oceanfront condo HOA fee pay for?** 97, 88, 81, 57 in 100 (row 16); the power bill by building; insurance, savings, closing (links to master-insurance-ho6, reserves, special-assessments, estoppel-and-transfer-fees). Offer: "The fee a seller lists can be out of date" / Have us get the current fee for one unit.
6. **Which oceanfront buildings sell the most units?** Sea Mist 62 of 271 (more than 1 in 5), the middle building about 1 in 17. Chart 2 "Sea Mist and Landmark sold the most units" (9 buildings with 30 or more sales). Towers on the Grove: none. Link /sell/sell-my-condo/. Offer: "Selling a unit later?" / Have us price a unit from its building's sales.
7. **Condo, condotel or timeshare: what are you buying on the oceanfront?** Three kinds; H3 "Can you rent it by the night?" (row 14, links str-rules and rental-program-vs-airbnb); H3 "Can you get a loan on it?" (row 12 corrected wording, row 13; links condotel-financing and condos).
- **FAQ** (6, each repeats the page): lowest fees; why fees are high; a dog; what a condotel is; condotel or timeshare; FHA.
- **End band:** "Learn the building before you choose the unit." / Have us check a building.
- Sources line: our listings feed, county parcels, county deeds, HUD, Fannie Mae B4-2.1-03, six resort pages; the listing pull date is read from findings.json.

Table only (no unique fact beyond price and fee): Holiday Sands, Sandy Beach, Oceans One, Holiday Inn Pavilion (row 2 corrected: 11 units, $1,055), Boardwalk, Meridian Plaza, Patricia Grand, Carolinian, Anderson Ocean Club, Ocean Forest Plaza, Carolina Winds, Maisons Sur-Mer (row 5 corrected), Crescent Shores (row 2 corrected: $1,270 from 10), Mar Vista Grande, Towers on the Grove; Island Vista and Ocean Drive Beach & Golf as "No units for sale this week".

Facts left out on purpose: county units, sales and sale price of Myrtle Beach Resort and Ocean Creek (struck); Prince "7 of 262"; Sea Mist "1 in 4"; "heated" at Monterey Bay; any tie of Kingston's Currents and Sand Bottom Pool to a tower; Barefoot Landing near Ocean Creek; Dunes Village's water park (row 23 open); the restaurant name at Avista (struck-check reads "Just Off" as a distance word); every July unsourced line (row 24).

## Gate results (2026-11-09, final build)

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /invest/condo-buildings/` | **100/100** (SEO 100, AEO 100, Human 99, Trust 100). No FAIL. One partial: H3 visual rhythm 86% (9 visuals per 3,647 words): the two glass charts are role=table, not svg, so the rule does not count them, and the 30 homes strips are empty off the live edge. |
| `node tools/claims-scan.js <site>` | 0 findings |
| `node tools/facts-check.js <site>` | 0 on this page (the 4 site-wide hits are on /buyers/relocating/from-massachusetts/, /from-virginia/ and llms-full.txt, not new) |
| `node tools/house-claims.js <page>` | 0 sentences to scope or source |
| `node tools/repeat-check.js <page> --strict` | passes (0 identical, 0 near sentences in the body) |
| `node tools/structure-check.js <page> --strict` | passes |
| `node tools/struck-check.js --batch batches/2026-11-b --preview <dir> --strict` | invest-condo-buildings: no struck wording (26 patterns) |
| `node tools/image-meta.js --only /invest/condo-buildings/` | passes |
| `node tools/inbound.js` | 11 referring pages |
| `node tools/critic.mjs http://localhost:8872 /invest/condo-buildings/ --widths 390,1024,1440` | 0 blocking, 0 warning at all three widths |
| `node build.js check` | OK, safe to deploy |
| `node build.js audit` | No FAIL on this page except the two mkpage date lines (dateModified and visible "Updated" vs sitemap lastmod; `node build.js dates` sets them). One "~" note: no attributed sentence from a named licensed person (no quote written for Tim Nash, by rule). |

Fixed along the way: an industry-term FAIL ("on a listing" in an offer title), a cannibalisation FAIL (keyword "condotel Myrtle Beach" also on /invest/rental-program-vs-airbnb/; dropped here), number density (counts said in words), 9 repeated sentence shapes, the share image (now the page's photo), a 29-word sentence, three phone-scroll walls, the table's empty cells for buildings with no units.

## Shots

Full-page screenshots, newest build, looked at in tiles at full size:
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/invest-condo-buildings/shots/invest-condo-buildings-390.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/invest-condo-buildings/shots/invest-condo-buildings-1024.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/invest-condo-buildings/shots/invest-condo-buildings-1440.png`
- Tiles: `.../rb1/invest-condo-buildings/tiles/`; critic JSON: `.../rb1/invest-condo-buildings/critic.json`.

## For the lead, outside this page's files

1. **Homes strips.** Add these places to `batches/2026-10-b/data/idx-places.json` (`q` = `{"type": "condo", "subdivision": "<words>"}`, `pages` = `["/invest/condo-buildings/"]`, index false). Slugs are the entry ids on the page. Confirm each search against the feed on the day.

| slug | name | subdivision words | note |
|---|---|---|---|
| myrtle-beach-resort | Myrtle Beach Resort | Mb Resort | MLS name "Mb Resort Rt" |
| compass-cove | Compass Cove | Compass Cove | Pinnacle and Schooner towers |
| bluewater-resort | Bluewater Resort | Bluewater | check it misses Blue Water Keyes |
| the-palace | The Palace | Palace | check the words on the day |
| landmark-resort | Landmark Resort | Landmark | |
| sea-mist-resort | Sea Mist Resort | Sea Mist | |
| coral-beach-resort | Coral Beach Resort | Coral Beach | |
| bay-view-resort | Bay View Resort | Bay View Resort | not "Bay View" alone |
| camelot-by-the-sea | Camelot by the Sea | Camelot | |
| breakers-resort | Breakers Resort | Breakers Resort | not "Breakers" alone (finds The Strand) |
| caribbean-resort | Caribbean Resort | Caribbean | |
| beach-colony | Beach Colony | Beach Colony | new: 5308 N Ocean Blvd, 21 listings |
| dunes-village-resort | Dunes Village Resort | Dunes Village | both towers |
| monterey-bay-suites | Monterey Bay Suites | Monterey Bay | |
| grande-cayman-resort | Grande Cayman Resort | Grande Cayman | not "Long Bay" |
| caravelle-resort | Caravelle Resort | Caravelle | |
| ocean-reef-resort | Ocean Reef Resort | Ocean Reef | |
| sand-dunes-resort | Sand Dunes Resort | Sand Dunes | |
| sands-ocean-club | Sands Ocean Club | Sands Ocean | new: 9550 Shore Dr, 16 listings |
| margate-tower | Margate Tower | Margate | |
| brighton-tower | Brighton Tower | Brighton | |
| south-hampton | South Hampton | South Hampton | |
| royale-palms | Royale Palms | Royale Palms | |
| seawatch-resort | SeaWatch Resort | SeaWatch | not "Sea Watch" |
| ocean-creek-resort | Ocean Creek Resort | Ocean Creek | |
| north-beach-towers | North Beach Towers | North Beach Tower | not "North Beach" alone |
| beach-cove-resort | Beach Cove Resort | Beach Cove | |
| bay-watch-resort | Bay Watch Resort | Bay Watch | all three towers |
| avista-resort | Avista Resort | Avista | |
| prince-resort | Prince Resort | Prince Resort | |

   Each strip's title is "Condos for sale at <building> now" (true of a condo search by subdivision). The edge's own feed for this URL (HIGH_OCEAN) stays under the opening only if it is marked `withStrips`, as on /hoa/; decide which.
2. **Three place facts rest on MLS subdivision names** (`data/2026-11-a/invest-rental-program-vs-airbnb/raw/by-building.json`, the file behind verified rows 10 and 11), not on a ledger row of their own: Margate, Brighton and South Hampton are "Kingston Plantation - ..."; Prince is "Prince Resort - Phase I - Cherry Grove" (hero sub "to Cherry Grove"); Compass Cove takes in "Compass Cove Pinnacle" and "Schooner At Compass Cove". A verifier should add a row for them before release, or the lead cuts the words.
3. **Sibling value:** /invest/condos/ prints about $925 for the oceanfront group; this page prints the hub's $920 (row 3). Fix the sibling at its next build.
4. **Links in** (cannibalization map): /submarkets/myrtle-beach/ should cut its "Which oceanfront condo buildings ... sell the most?" to a link here; /invest/condos/ should link here from "What should you look for in a Myrtle Beach condo building?".
5. **Photo partner:** a shot of the tower line from the beach at the north end, and one per Kingston tower, would replace the borrowed Commons photo (`templates/photo-request-email.md`).
6. Dates: run `node build.js dates` at release (the byline shows the July date until then).
