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
