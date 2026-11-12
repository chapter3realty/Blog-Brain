# /submarkets/: fix round 1

Reviewer's verdict: pass=false, score 8. Three blocking items and nine nits. All three blocking items are fixed in `specs/submarkets.js` and `data/2026-11-b/submarkets/`. No new fact was needed, so there is no VERIFIED-BY-FIXER row.

## Declined or partly taken

1. **FAQ: "keep at most one question."** Partly taken. `tools/mkpage.js` refuses a page with fewer than three FAQ entries (line 93), and this round may not change the website's tools. The two questions that repeated the page word for word are cut: "What towns are near Myrtle Beach?" (the H2) and "Which towns are inland?" (the group label). The three that remain each gather what the page says across several cells, or add something the page does not print:
   - "Can you rent a home by the night in every Grand Strand town?" (the column, in one answer).
   - "Which Grand Strand towns are in two counties?" (Garden City and Murrells Inlet; what changes at the line).
   - "Why does the 13-town comparison show different prices?" (H36, with which-town's own Conway figure, read from its data file).
2. **Sibling overlap with which-town:** a watch item, as the reviewer says. No change. The hub has no search showings (H32), links which-town twice, and does not claim "grand strand towns" (dropped in round 0).
3. **Wow photos from the photo partner:** this round cannot get new photos. Two aerials were swapped for photos already licensed on the guides (below). A shot list for the partner is in BUILD.md for the lead.
4. **Byline date and the edge feed in the preview:** lead items (`node build.js dates`; the feed fix in BUILD.md item 1).
5. **H22 and the struck sibling wording:** lead items 2 and 3 in BUILD.md, unchanged. Ship the hub and the Carolina Forest guide's H22 sentence together.

## What changed (fix round 1, 2026-11-10)

### Blocking 1: each town now has its own homes
- Under each town's row there is now a full-width homes row. It holds a live strip from `G.homes()`, using the same `town-<slug>` near searches which-town uses. Pawleys Island uses `town-pawleys-litchfield`, so its strip says "Live near Pawleys Island" and "homes in Pawleys Island and Litchfield".
- Strip titles are personal and true for every home the search finds: "Live in Little River: homes for sale now", and so on for each town.
- The cards are compact, as on which-town, and run the full table width at 1440.
- When a strip is empty, its fallback shows instead: "See homes for sale around Little River ->". That link opens the same search on the map (`/homes/map/?near=...&miles=...`). After it comes "or ask us to send them", a link to /contact/?place=.
- The places are copied into `data/2026-11-b/submarkets/homes-places.json` by `homes_places.py`. The script checks each place against Blog-Brain's `idx-places.json` and the website's `idx-lib/places.js`. Neither file was edited.
- The old "Send me [Town] homes ->" pill has been removed from the Town column, so it no longer wraps at 1440 or 320.
- The edge feed fix for all nine towns, with a bold title, is BUILD.md lead item 1, now updated.

### Blocking 2: the guide links look like links
- Each town name is now underlined, with a brown arrow after it, at every width. The last word and the arrow stay on one line ("North Myrtle Beach" had wrapped its arrow at 1440).
- The guide link is the first thing to tap in each block. The map search comes second and the request link third.

### Blocking 3: the "Renting by the night" cells
These were rewritten in `build_towns.py` (towns.json was rebuilt; the output was "all nine match their guides"). Each county cell now opens with what the reader does, using the Murrells Inlet guide's verified words (MI 24, row H27):
- Little River and Carolina Forest: "The county asks for a business license and tax filings. An HOA can still say no."
- Garden City and Murrells Inlet: "Horry side: the county asks for a business license and tax filings. Georgetown end (side): the county requires no business license." (H28)
- The permit sentence is said once, in a new note under the table: "Outside the cities and towns, Horry County's list of what a nightly-rental owner must file names a business license and three tax accounts. It names no rental permit." This is the Garden City guide's wording, and struck-check passes it.
- The spec stops the build if a county cell loses these words.

### Nits taken
- **Surfside cell:** "Only in the two zones by the ocean." The codes moved to the sources line ("Surfside zones R3, C3").
- **Sources line:** the "Pawleys island" typo is gone. It now reads "Island houses at Pawleys: three years. Garden City: the Horry part only." The line is under mkpage's 90 words.
- **Short answer** now opens with the places: "Nine places on the Grand Strand, from Little River at the North Carolina line to Pawleys Island at the south end, each have a guide here."
- **Photos:**
  - The 1941 Ocean Drive Beach pavilion postcard, with "Dancing" on its wall (public domain, on the NMB guide), replaces the Little River aerial.
  - The Pawleys Island marsh walkway (CC BY-SA 4.0, on the PI guide) replaces the flat low-tide north end.
  - Two aerials remain (the Surfside pier and the MarshWalk). The intro is now "Four of the places, north to south."
  - Credits and ImageObject schema follow.

### Gates (re-run after the last build)
- `SCORE_TODAY=2026-11-09 node tools/score.js --only /submarkets/`: **98/100** (SEO 100, AEO 98, Human 100, Trust 79). There is no FAIL. The partials are:
  - A7: 3 FAQ entries, from mkpage's floor.
  - T2: first-hand experience. No story in stories.json fits a hub.
- `claims-scan`: 0 findings.
- `facts-check`: none on /submarkets/. The 4 known tax rows are on the relocating pages and llms-full.txt.
- `house-claims`: 0.
- `struck-check`: no struck wording. One hit along the way, "..., and no rental permit", was reworded to "It names no rental permit."
- `node build.js check`: OK.
- `node build.js audit` on /submarkets/ shows only the two date lines (lead: `node build.js dates`) and the usual "~ no quote" note.
- `node tools/critic.mjs http://localhost:8876 /submarkets/ --widths 320,390,1440`: 0 blocking and 0 warnings at all three widths.
- The preview is `tools/preview.mjs`, on port 8876.

### Shots (looked at)
All are in `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/submarkets/r1/`:
- `submarkets-320.png`, `submarkets-390.png` and `submarkets-1440.png` (the critic). The strips are empty here and the fallback line shows.
- `table-1440.png` and `table-320.png`: the table with the preview's sample homes routed in. All nine strips fill with 10 cards each. At 1440 they run the full table width under each row. On a phone they show one and a half cards.

---

# /submarkets/ round 2: fix round 1 (2026-11-12)

The reviewer's verdict on round 2 was pass=false, score 8. All three blocking items are fixed in `specs/submarkets.js`. No new fact was needed: every new sentence uses a VERIFIED or CORRECTED row at the verifier's wording (H13, H21, R9, H23, D10). So there is no VERIFIED-BY-FIXER row. The data files and `towns.json` are unchanged. The spec now stops the build if the H13 or H21 wording in `towns.json` changes.

## Declined or partly taken

1. **Byline "Updated June 12, 2026", and the two audit date lines:** these are lead items (`node build.js dates`). This round may not run it.
2. **"LIVE FROM THE MLS" eyebrow and the CCMLS block before the footer:** these come from the edge and glass.js, not the spec. They are a lead item (PLAN 7, 10.3; BUILD "For the lead" 2).
3. **Map labels about 9 px at 320:** this is partly declined. The map comes from `tools/area-map.js`, which is shared by other pages, so this round does not change it. Labels are 12 px at 390. Each name is also a link in the table right under the map. It is a lead item if the owner wants a larger phone map.
4. **"resident(s)" count:** partly taken. The table now says "People, 2020" and "11,711 people". The prose keeps "residents" only where the verifier's D13 or D4 wording needs it.
5. **Homes strips not judged visually:** this round cannot change it. The sample photos still do not load in the preview, so the shots show the map fallback. The strip titles are unchanged except where a heading changed (below).
6. **which-town keyword "Grand Strand towns":** this is a lead item (BUILD lead item 1), unchanged.

## What changed

### Blocking 1: repetition
- The county rental rule is said once, in the note under the portraits. Horry County's list names a business license and three tax accounts, and no rental permit. Georgetown County requires no business license outside its towns.
- The Little River, Carolina Forest, Garden City and Murrells Inlet portraits no longer repeat that rule. A portrait gives a rental rule only where the place has its own: NMB's yearly city license, Myrtle Beach's zones, Surfside's two zones, Pawleys allowed on the island, and Conway zoning checked by us.
- NMB's "An HOA or the deed can still bar rentals" is cut. The HOA note under the portraits says it once.
- "business license" now appears in main 3 times. It was 8.
- The short answer no longer opens with shore length. The 48-mile sentence is only under "How long is the Grand Strand?".
- The Dunnagan sentence is now only in the FAQ. It is cut from the body.
- "more homes than residents" was in 4 places and is now in 1: Pawleys, "about 4 homes for every resident". It is cut from the hero sub, NMB and Surfside.
- The tide figure was in 3 places and is now in 1: Little River, where docks and boats need it. It is cut from Murrells Inlet and Conway.
- Two identical sentences that came up along the way were fixed:
  - "Carolina Forest and Conway are inland." was in the short answer and the section intro.
  - The 8 strip fallback lines are now marked as the offer they are (class `c3-tg-cta`).
- Three price sentences no longer share one shape: "Resold houses in Little River usually sell for ...", "In Carolina Forest, a resold house usually goes for ...". `repeat-check --strict` passes, with 0 identical and 0 near.

### Blocking 2: the wow comes first
- **North Myrtle Beach:** "the shag on Main Street". It now opens: "The shag, South Carolina's state dance, is still danced on Main Street. At Fat Harold's Beach Club, the home of the shag, DJs play every night from 7." (H13 CORRECTED). The 1968 merger comes second, and the 138-per-100 figure is cut. The wording differs from which-town's ("a DJ plays beach music ... shag lessons on Monday nights").
- **Little River:** it now opens: "From a dock on the Intracoastal Waterway at Little River, a boat can head north to Norfolk or south to Florida without going out on the ocean." (R1). The inlet channel comes second.
- **Conway:** "a city on the Waccamaw River". It now opens: "Riverfront Park on the Waccamaw has a playground built like a steamboat, the F.G. Burroughs, beside a riverwalk of about 1.5 miles." (H21 CORRECTED, FIXER-VERIFY wording). which-town names the Riverwalk only as "a path along the river with benches and a kayak launch", and does not name the steamboat.
- **Garden City:** the heading is now "line dances on the pier", which also clears the sibling watch. A new fact replaces the removed rule: the county line crosses the beach about a third of a mile south of the pier, and the pier is on the Horry side (R9). This makes "On the Horry part" in the price sentence make sense.
- **Carolina Forest:** "It has no city or town government, so there is no city tax." (D6, H23). This replaces "the county runs it".

### Blocking 3: winter, said as measured
- The opener under the winter H2 is now: "In the 2020 Census, Pawleys Island and North Myrtle Beach had the most homes kept for vacations: about 7 in 10 and about 5 in 10." (D3). The street sentence follows as what that means, then the chart.
- "In winter they differ most" is cut from the short answer.

### Nits taken
- **Short answer:** it now leads with the difference. "Seven of the nine Grand Strand places in our guides are on or by the coast, from Little River to Pawleys Island. Carolina Forest and Conway are inland." Then: "Most of the vacation homes are in the seven places on the coast. Inland, in Carolina Forest and Conway, fewer than 1 in 10 homes were kept for vacations in 2020." D3: 24,673 of 25,304 seasonal homes across the nine are in the seven coastal places. Then the five cities and towns, and the four the county runs.
- **Hero sub:** "Among the Grand Strand towns, Pawleys Island counted 130 residents in 2020, and Conway became a town 40 years before Myrtle Beach." (D4, D7: 1898 and 1938).
- **Table note in buyer words:** "Each count of people uses the Census Bureau's outline of the place, which can differ a little from our guide's area. Garden City and Murrells Inlet cross the county line, and each count takes in one side only: Garden City's Horry side and Murrells Inlet's Georgetown side." (D5 CORRECTED).
- **"How long" figures:** the 5 figures are now split over two paragraphs. One gives the two big cities (10 and a little over 8). The other gives Pawleys and Surfside (3 1/2 and 2) and the third outside every town.
- **Read twice:**
  - Murrells Inlet now reads "Outside Garden City, about 220 houses sit within about 100 feet of the inlet's salt marsh, almost all on the creek side of US 17 Business." Struck-check refused a two-sentence split, so this is one sentence in the verifier's order of facts.
  - Garden City now reads "On the Horry part, the middle sale for a condo on the ocean side by the pier was about $320,000."
  - Murrells Inlet's price now reads "On the Horry side, the middle sale for a house was about $450,000."
- **FAQ:** "Which Grand Strand places are not towns?" is replaced by "Is Atlantic Beach part of North Myrtle Beach?" The answer is "No. Atlantic Beach is a separate town, and it was not part of the 1968 merger that formed North Myrtle Beach." (D10). The page does not say this anywhere else. The Dunnagan answer now lives only in the FAQ.
- **Buttons:**
  - "Have us pick the towns that fit" is now "Pick my towns".
  - "Have us check one address" is now "Send us the address". The audit refuses "Check one address" as a promise of an action that goes to a form.
  - The end band's "Send me the homes that fit" wrapped at 320 and is now "Send me homes that fit".
  - Measured in the browser at 320 and 390, every button is one line.
- **Sibling watch:** "towns near Myrtle Beach" is dropped from the keywords. The Garden City heading is changed (above).
- The portrait intro now reads "Each place below leads with the thing people love there, then what a home costs. Where a city or town has its own rule on renting by the night, the place says so." mkpage flagged "sets".

### Gates (re-run after the last build)
- `node tools/mkpage.js specs/submarkets.js`: wrote the page, with a hero sub of 22 words and no notes.
- `SCORE_TODAY=2026-11-09 node tools/score.js --only /submarkets/`: **98/100** (SEO 100, AEO 100, Human 99, Trust 79). There is no FAIL. The partials are:
  - P2: 3.9 numbers per 100 words.
  - T2: first-hand experience. No story in stories.json fits a hub.
- `repeat-check --strict`: passes, with 0 identical and 0 near in the body.
- `structure-check --strict`: passes.
- `struck-check` (submarkets-struck.json): no struck wording.
- `house-claims`: 0.
- `claims-scan`: 0 findings.
- `facts-check`: none on /submarkets/. The same 4 rows remain on the relocating pages and llms-full.txt.
- `node build.js check`: OK.
- `node build.js audit` on /submarkets/: only the two date lines (lead: `node build.js dates`) and the usual "~ no quote" note.
- `node tools/critic.mjs http://localhost:8871 /submarkets/ --widths 320,390,1440`: 0 blocking and 0 warnings at all three widths. The preview is `tools/preview.mjs` on port 8871.
- In main: no em dash, and no sentence opens with "So" or "Here is".

### Shots (looked at)
All are in `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/submarkets/r2shots/`:
- `submarkets-320.png`, `-390.png`, `-1440.png` and `critic.json`.
- Crops `c390-*.png`, `c320-*.png`, `c1440-*.png`. I read the first screen, the winter section and every portrait at 390, and the portraits at 1440.
- The first screen now goes from the hero to the edge feed to the short answer about the difference.
- The strips show the map fallback, as before. The sample photos do not load.
