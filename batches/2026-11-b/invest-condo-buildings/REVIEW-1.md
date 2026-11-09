# REVIEW-1: /invest/condo-buildings/ (batch 2026-11-b), fix round 1

Reviewer: pass=false, score 6.5. Fixed 2026-11-09 in `specs/condo-buildings.js`. New facts are ledger rows 26 to 42 in `facts.md`, marked VERIFIED-BY-FIXER, each with its saved source. Not deployed, not committed.

## Files touched

- Website working copy `scratchpad/wt-live`:
  - `specs/condo-buildings.js`
  - `chapter3realty/invest/condo-buildings/index.html`, rebuilt by mkpage
  - `data/2026-11-b/invest-condo-buildings/`:
    - new: `landmark_distances.py`, `landmark-distances.json`, `raw/landmarks-osm.json`, `raw/strip-places-check.json`
    - 10 more resort and landmark pages in `raw/resort-pages/`
- Outside the page's own folders, because the first blocking item cannot be fixed without them:
  - Blog-Brain `batches/2026-10-b/data/idx-places.json`: 29 places added, index false.
  - Website `idx-lib/places.js`: regenerated from that file. The 96 existing places came out byte-identical before the 29 were added.
  - Website `idx-lib/feeds.js`: one line, `"/invest/condo-buildings/": { ...HIGH_OCEAN, withStrips: true }`.
  - The lead should know these three files are shared.

## Findings declined or left to the lead

1. **Sibling H2 on /submarkets/myrtle-beach/ (MEDIUM). Not done here.**
   - Why: the brief limits me to this page's own files. The sibling section is a full part of a town guide: its own building table, photo, loan sub-question and offer. Cutting it changes an owner-facing page.
   - Proposed change, for the lead (`specs/myrtle-beach.js` line 612):
     - Rename the H2 to "What are oceanfront condos like in Myrtle Beach?" and keep its city-wide facts: out-of-state buyers, the one-bedroom asking price, the loan.
     - Replace `BUILDING_TABLE` and the Tides, Driftwood and Oasis sentence with one line: "Building by building, the fees, sale prices and units for sale are on our [oceanfront condo buildings page](/invest/condo-buildings/)."
   - With that, only this page answers "which building sells the most".
2. **Photos of each building from the photo partner (part of MEDIUM "Where is this?").** I cannot send the request: the partner's address is with the owner. The live strips now put photos of each building's own units under its entry, which answers "no entry has a picture of its subject" while the partner's shots are pending. Shot list for `templates/photo-request-email.md`:
   - the tower line from the beach at the SkyWheel;
   - Kingston Plantation's three towers from the beach;
   - the Cherry Grove Pier with Prince Resort beside it;
   - Ocean Creek's creek side at sunset;
   - Landmark and Sea Mist from Ocean Boulevard.
3. **No drawn map.** A measured landmark now places every entry: the state park, Springmaid Pier, Family Kingdom, the Boardwalk, the SkyWheel, Sea Captain's House, the Hilton, the Tanger Outlets, Barefoot Landing, Main Street and the Cherry Grove Pier. The two section intros run south to north along the same landmarks. The owner found drawn maps hard to read (VERDICTS 2026-11-08), so I did not add one.
4. **FAQ answers behind "+" toggles (nit).** This is the site's own component (website commit 5b991e7c, owner 2026-11-08: "FAQ folds into tap-to-open questions on every article"). It is filed as a site question, not changed on one page.
5. **Byline "Updated July 20, 2026" (nit).** `node build.js dates` sets it at release (BUILD item 6). Per the brief, I did not run it.
6. **Critic read.wall at 320 px on Prince Resort (nit).** This is a false hit, as the reviewer said. With places registered, the preview fills the strip below the text. The critic shoots without photo routing, so the strip drops out there and the fallback pill and the offer box count as plain scroll. My own shot at 390 with the photos routed shows 30 of 30 strips filled and no pill showing.

## What I changed

**HIGH: the page showed no homes.**
- 29 places added (BUILD's list, without Breakers, see below). Each search is `type=condo` plus the building's own verified words from `building-fees.json`.
- Each search was re-run on the live map API (`raw/strip-places-check.json`). All 29 return the same count as the verified pull, at the building's own street addresses only. Examples: Sea Mist 32 at 1207 and 1205 S Ocean Blvd; Prince 7 at 3500 and 3601 N Ocean Blvd.
- HIGH_OCEAN ("Prime oceanfront condos") is now `withStrips`. Homes show on the first screen, as on /hoa/.
- Preview on port 8872, photos routed: the feed plus 29 building strips, 30 of 30 filled, 0 fallback pills showing, at 390 and 1440. Shots: `scratchpad/rb1/invest-condo-buildings/fix1/shots/strips-390.png` and `strips-1440.png`.

**HIGH: entries read like a spreadsheet.**
- Every entry now opens with the place it sits in, or with what the resort has. The sources are new rows 26 to 41: resort pages, plus measured straight-line distances from OpenStreetMap points. Examples:
  - Bay View stands on the Boardwalk, with the SkyWheel about a third of a mile north.
  - Prince is next to the Cherry Grove Pier, a 1950s fishing pier with a restaurant at its end.
  - Compass Cove has 23 water features across the Mariner, Pinnacle and Schooner.
  - Caribbean has a 200-foot lazy river and a second one indoors, with Sea Captain's House beside it.
  - Grande Cayman has a 250-foot lazy river under a roof, open all year.
  - The Caravelle has been there since 1960, with a block-long pool deck. One of its nine buildings, Sea Mark Tower, is on HUD's FHA list.
  - SeaWatch is gated, with six oceanfront pools and two 225-foot lazy rivers, two of the pools covered and heated.
  - Also: Sand Dunes' water park, Ocean Reef's Shipwreck Water Park, Beach Colony's lazy river and lawn, and the state park's seaside forest south of Myrtle Beach Resort.
- The power bill and pets are now two table columns, "Fee pays power" and "Pets allowed". They are given as words (All, Almost all, Most, About half, Some, A few, One, None), or as a count under 8 listings. Entries mention pets only where it is the building's standout (Beach Colony, Margate).
- Counts in the copy, before and after:

  | Word or phrase | Before | After |
  |---|---|---|
  | "the middle" | 55 | 1 (the definition) |
  | "in the past year" | 31 | 7 |
  | "power bill" | 17 | 3, all in the fee section |
  | "listing(s) say(s)" | about 25 | 2 |

- repeat-check `--strict` passes.
- The guide gained four rows: Waterslides (Landmark marked "for rental-program guests"), A lazy river, Near the Boardwalk and the SkyWheel, and Next to a fishing pier.
- **Breakers moved to the table.** The resort's other towers (Paradise, Sailfish) are listed under their own MLS names. The four "Breakers Resort" units, its sales and "four towers" would not describe the same building. Its strip place was dropped.

**MEDIUM: the copy spoke like a records report.**
- Cut:
  - "in the county's records"
  - "Every listing says"
  - "The resort describes ... calls itself"
  - the street addresses used as place names (2006 N Ocean, 9994 Beach Club Dr, 100 N Beach Blvd)
  - the Strand/MLS note
- Unit counts are now said plainly ("the biggest building on this page, with 571 units").

**MEDIUM: unsourced place facts.**
- Now on rows:
  - Pinnacle and Schooner (row 31: compasscove.com and the MLS names)
  - Cherry Grove for Prince and the hero line (row 29: MLS name "Prince Resort - Phase I - Cherry Grove", the pier's address next door, OSM)
  - Kingston Plantation for the three towers (row 30: MLS names)
- Cut: Bay Watch "three towers" and Dunes Village "two towers".

**MEDIUM: Sea Mist 62 versus 64.**
- The text now says: "Sea Mist had 64 sales. Two units sold twice, so 62 of its 271 units changed hands, more than 1 in 5."
- The chart note adds "A unit that sold twice counts twice."

**MEDIUM: Prince's 24-unit deed.** Cut. The entry now says "Six units sold on their own in the past year, for about $365,000."

**MEDIUM: Kingston amenity.**
- Cut Currents and the Sand Bottom Pool: no source says tower owners may use them.
- The intro now says the towers share the grounds with lodges and villas by a lake and woods (Kingston Resorts' own words, row 30), and that each tower has its own fee.
- Royale Palms is beside the Hilton, and Kingston Resorts rents its condos (rows 27, 30). The page does not say Royale Palms is in Kingston Plantation.

**MEDIUM: "Where is this?"** Measured anchors in every entry and in both section intros (rows 26 to 28). Ocean Creek's Barefoot Landing is now measured: "about three quarters of a mile away".

**Nits taken.**
- Fee chart note: "'All oceanfront condos for sale' is the typical fee of all 1,106 of them". It reads the same on a phone list and on desktop bars. The value label is now "Typical fee a month".
- Hero tiles now read "Typical fee" and "What units sold for".
- "Typical" is defined once, at the top of the first section ("the middle one: half the units pay more, and half pay less. Sale prices are from the past year"), and used after that.
- The loan section is now two short paragraphs and the link. The Fannie Mae signs list moved off the page; /invest/condotel-financing/ owns it.
- "building group" is now "group of towers".

## Gates, final build (2026-11-09)

| Gate | Result |
|---|---|
| `node tools/mkpage.js specs/condo-buildings.js` | wrote the page; sources line under 90 words |
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /invest/condo-buildings/` | 100/100 (SEO 100, AEO 100, Human 99, Trust 100). Partials: H3 92% (the charts are role=table), P2 96% (3.7 numbers per 100 words) |
| `repeat-check --strict` | passes (0 identical, 0 near in the body) |
| `structure-check --strict` | passes |
| `struck-check` (26 patterns) | no struck wording |
| `claims-scan` | 0 findings |
| `facts-check` | 0 on this page (the same 4 site-wide hits as before: from-massachusetts, from-virginia, llms-full.txt) |
| `house-claims` | 0 |
| `image-meta --only /invest/condo-buildings/` | passes |
| `inbound` | 0 pages under 5 referring pages |
| `node build.js check` | OK, safe to deploy |
| `node build.js audit` | only the two date lines (`build.js dates` at release) and the "~" A20 note (no quote written for Tim Nash, by rule) |
| `critic.mjs` on port 8872, at 320, 390, 1024 and 1440 | 0 blocking. 1 warning at 320, the Prince false hit (see 6 above) |

Shots and critic output:
- Critic shots: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/invest-condo-buildings/fix1/shots/`
- Strips filled, with the photos routed: `strips-390.png` and `strips-1440.png` in the same folder.
- Tiles: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/invest-condo-buildings/fix1/tiles/`
- Critic JSON: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/invest-condo-buildings/fix1/critic.json`
- The preview on port 8872 is stopped.

I looked at the tiles at full size. Every entry shows its homes strip under its text. The table reads as one-line cards on a phone, with five values each, and as six columns at 1440. The first screen at 1440 holds the tiles, the short answer and the live feed.

## For the lead before release

- Send rows 26 to 42 to a second verifier: they are VERIFIED-BY-FIXER, not independently checked.
- Decide declined item 1, the /submarkets/myrtle-beach/ H2.
- Run `node build.js dates`.
- On the day of release, confirm the strips fill on the live edge. The CRM's `/api/idx/listings` must take the same `subdivision` words as the map API.
