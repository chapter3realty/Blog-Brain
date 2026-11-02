# Review round 1: /submarkets/conway/, fixes

Fixer, 2026-11-02. Spec: `specs/conway.js` (version 2). New facts: ledger rows 46 to 52, marked VERIFIED-BY-FIXER for the lead to re-check. New data: `data/2026-11-a/submarkets-conway/home_grid.py` and `map-homes-grid.json`. New map file: `images/2026-11-a/submarkets-conway/conway-parts-map.svg`; `conway-city-flood-map.svg` is redrawn.

## Where I did not change the page, and why

1. **Reader: the H1 "the Grand Strand's inland value market".** Kept. The owner chose this H1 (data/headlines.json, noted in the spec). The H1 line under it ("A river town about 25 minutes from the beach") and the new sub say what the town is in plain words.
2. **Owner: flood once as a section and once in the FAQ.** The short answer keeps one flood sentence, with no number: "Only a few places are in the flood maps, near the river, Crabtree Swamp and Kingston Lake." "Conway SC flooding" is the second search on must-answer.md, and the reader said seeing it on the first screen was good. The figure "about 95 in 100" is now in the flood section and the FAQ only (was 5 times). Flood is out of the hero, the part entries, the map under the parts, the yearly cost lead-in, the pros line and the closing offer's heading.
3. **Owner: replace the parts' photos with ones of each part, and stop reusing photos.** Not possible in this round: Wikimedia Commons rate-limited the session, and the photo partner's shots go through the owner's Gmail. The shot list now has a shot for every part (shots 5, 9 to 12), and NEEDS.md 9 lists Commons candidates. Parts 1 and 2 keep their photos as the fallback under the homes strip; when the strip fills, the strip is the picture (owner 2026-10-21).
4. **Reader: give the homeowners insurance cost.** No verified figure for a Conway house exists in the ledger, and a single number would mislead (it depends on the roof, age and company). The row is renamed "Tax and flood policy together" (it no longer says "Total"), and the next line says homeowners insurance is a third bill on top, with the link to the coastal insurance page.
5. **build.js audit warning: no boxed offer mid-page.** Not added. The owner (round 1) asked that what we do be said once, near the end; the flood box was cut for that reason. Each part still ends with its own offer pill.
6. **Reader nit: groceries and restaurants.** Not added: no primary source was opened for either. Daily life now has the city's parks, the boat landing, the recreation center, the hospital and the technical college, all from the city's parks guide or the places' own sites.
7. **Critic nits about the date.** "Updated June 12, 2026" and dateModified are the lead's `node build.js dates` run.

## What changed, by finding

### Critic

| Finding | Change |
|---|---|
| "The town is older than the beach towns." (TRUTH) | Cut. The paragraph starts "Conway was laid out in 1732, as Kingston, ..." (row 28). |
| "seventh fastest among the state's cities and towns of its size or larger" (TRUTH) | Now "the seventh fastest among South Carolina cities and towns of 10,000 people or more" (row 2). |
| Rush hour line tied to "these drives" (TRUTH, story) | Cut. The beach line is now "The beach is about 25 minutes away by car, and the airport about 27." |
| "Flooding here is limited to a few places ..." (TRUTH) | Now "Only a few places are in the flood maps, near the river, Crabtree Swamp and Kingston Lake." |
| "many Conway streets have none" (HOA, TRUTH) | The whole HOA sentence is cut (owner nit too). |
| End band unreadable (ivory on white glass) | The page's CSS puts the dark panel back on its last band (scoped rule on `:last-of-type`). Checked in a live browser at 320, 390 and 1440: dark gradient, display block. Shared cause logged in NEEDS.md 5. |
| Selection guide skips part 4 | The guide cards are gone (owner: one way into the list). The map's numbered legend lists all five, 1 to 5. |
| 320: "Find houses" cut off, page 364 px wide | Scoped override under 360 px on `.hx-feed .hx-fb-ai`, `label.hx-fb-q` and `.hx-pop` (min-width 0, wrap). critic.mjs at 320: 0 blocking. The feed did not render in my preview, so the override is untested; shared fix logged in NEEDS.md 6. |
| 1024: header phone link 5 px past the window | Page CSS narrows the menu gap between 980 and 1099 px. critic.mjs at 1024: 0 blocking. Logged in NEEDS.md 8. |
| Nit: "In Conway, a house ... resells for about $265,000" (city only) | The sub no longer has a price. The prices section already says "inside the city". The short answer gives the gap to the county only. |
| Nit: airport "about 25 minutes" | Now "about 27 minutes" (row 27's own wording) in the glance card, the living section, the region map and the FAQ. |
| Nit: flood map lacks Crabtree Swamp, Kingston Lake, Sherwood labels; University label on the Florence fill | The flood map is redrawn with labels for Crabtree Swamp, Kingston Lake, Sherwood, Downtown, the river, the university and the hospital. University and Hospital labels now sit left of their marks, off the fills. Looked at full size at 760 and 360 px. |
| Nit: Midland and Lakeland not placed | The table's first column is now "Subdivision, and where it is": "Midland, just north of downtown", "Lakeland, just north of downtown", and the part for the other three (row 50, county parcels). |
| Nit: crest chart colours unexplained | The crest chart is cut (owner finding). |
| Nit: river chart axis about 7 px at 320 | The chart's text rules were losing to a shared rule. They now use `svg.c3-cw-chart text.ct`. Measured: 14 px at 320, 19 px at 390. |
| Nit: 'Outside the high-risk zone' wraps one word per line at 320; 'cost?' alone at 768 | Row labels are now "Outside the zone" and "Inside the zone". `text-wrap: balance` on the page's H2s. |
| Nit: Pros card shorter than Cons | `.c3-pc` stretches its cards; measured equal at 1440 (348/348 px). On a phone the cards stack. |
| Nit: older house caption | Caption is now "An older house under a live oak, in the downtown historic district." The spec checks the record still says historic district. |
| Nit: byline date | Lead's dates run. |

### Reader

| Finding | Change |
|---|---|
| What $265,000 buys | New paragraph in "What do homes cost": at that price a house in the city is usually three bedrooms and about 1,400 square feet; about 3 in 4 of the houses for sale near that price had three bedrooms, and some were built in the last two years (row 51, listings in aggregate). |
| Yearly total leaves out homeowners insurance | Row renamed "Tax and flood policy together"; a line says homeowners insurance is a third bill on top. See "did not change" 4. |
| What the extra $670 buys | New H3 "What the city line changes": weekly curb pickup of garbage, recycling and yard waste; the city's own police and fire departments; outside the city no city pickup, and only county residents may use the county's 25 convenience centers (row 49). |
| Part 4 missing from the picker | Picker cut; the map legend shows all five. |
| H1 "value market" | Kept; see "did not change" 1. |
| River heights read as water in the streets | "The river gauge at the Conway Marina read about 21 feet, its highest ever. That is the height of the river on the gauge, not the depth of water on a street." "Crested" is gone from the copy and the chart ("Highest, day 12"). The street table's lead-in says "as the river rises on the gauge". |
| Nits: too exact numbers | "11,348 students" is "more than 11,000"; "21.16 feet" is "about 21 feet"; the 14-row crest list is one sentence; "172 of the 673" is "about 1 in 4"; "368 ... 62" is "more than half ... about 60". Scorer P2 went from 5.1 to 4.6 numbers per 100 words. |
| Nits: words | "unincorporated Horry County" is "the county, outside any city"; "federally regulated lender" is cut (row 23 wording: "Federal law makes a lender require it only when ..."); FAQ tax is "for every $100,000 of the county's value for it". |
| Nit: rent plus utilities | "HUD counts rent and utilities together, so the rent alone is less." |
| Nit: "Book a showing in Downtown Conway" | Each part's pill is now "Get the homes for sale in <part>". |
| Nit: hospital named only in alt text | Region map label is "Conway Medical Center"; the parts map marks it with a red cross named in the caption; the living section and part 2 name it. |
| Nit: daily life thin | Parks, the boat landing, the Riverwalk length, the recreation center, the colleges and the hospital (rows 46 to 48). See "did not change" 6. |
| Nit: safety FAQ reads as "go look it up" | Now "We do not rate any place as safe or unsafe. Inside the city limits, the City of Conway has its own police department and fire department." |
| Nit: tone shift "Some parts do, and badly" | Now "A few parts do." |

### Owner

| Finding | Change |
|---|---|
| Parts are records, not places | Each part now opens with what is there: downtown (Main Street, City Hall, the Riverwalk, Riverfront Park, Kingston Park, the Garden Walk); near the university (the university, Conway Medical Center, HGTC's Conway campus); west and south (Billy Gardner Recreation Complex with the indoor pool, Smith Jones Park's outdoor pool, Collins Park's courts); around Crabtree Swamp (Sherwood Park); north edge (the biggest lots). Then subdivisions, lot and one price. No flood share in any entry; no "wide spread". |
| List shown four times | Cards and the side-by-side table are cut. One way in: the map with its numbered, coloured legend. |
| Part 4 card missing | Cards cut. |
| Fixated on flood; "about 95 in 100" five times | Flood is in the flood section (with one by-part sentence), the insurance section, the yearly cost table, one con, the FAQ and one short-answer sentence. "About 95 in 100" appears twice (flood section, FAQ). The parts map no longer shows flood at all. |
| Too many exact flood numbers | The 14-row crest list is cut to "Of the 14 floods on record that reached major flood stage at Conway, 6 came in the last 11 years." Heights are rounded ("about 21 feet"). |
| First line under the H1 leads with price and flood | Sub: "In Conway you get Main Street and the Riverwalk downtown, a university and a hospital inside the city, and the biggest lots at its north edge." |
| No homes for any part | One homes strip per part (`conway-<part>` slots). The slugs need the lead to add them to idx-places.json (NEEDS.md 7); until then the slot is empty and hidden, and parts 1 and 2 show their photo. |
| Headline 4 tells the reader to check; safety FAQ sends the reader away | Headline 4 is "Around Crabtree Swamp: close to downtown, with a park on Sherwood Drive". Safety FAQ rewritten (see Reader). |
| Row 2 misstated | Fixed (see Critic). |
| Photos do not show the parts; three reused | See "did not change" 3. Shot list extended. |
| Parts map reads as "mostly underwater" | Redrawn: the parts map has no flood layers. It shows the city's 8,935 homes as dots on a grid of about 180 m, coloured by part (home_grid.py, row 52). The flood map in the flood section draws the homes as dark dots on top of lighter flood layers, so a reader sees most homes outside the blue. |
| Hero cards "Laid out in 1732" and "People" | Now Beach 25 min, Airport 27 min, University in the city, Hospital 10 min. |
| "before you make an offer" in 4 sections; "We check both flood maps" in 3 | Both gone from the body. The flood box is cut; the cons are plain facts. What we do is said once, in the end band: "Send us any Conway house you like. We tell you whether it is inside the city, whether it is in either flood map, and what its yearly tax will be." |
| Nit: rush-hour line | Cut. |
| Nit: "with a wide spread" twice | Cut. |
| Nit: "in the past year" 6 times | Said once at the top of the parts ("Each price is what a house or townhouse there usually resold for in the past year"), once in the prices section and once in the price chart caption. |
| Nit: HOA line | Cut. |
| Nit: top strip shows only "See all homes" | The top feed did not render in my preview at all; the critic saw it fill in a live browser with routed photos. Not a page fault. |
| Keep list (mailing address split, river-height table, Florence by subdivision, yearly cost table, river chart, City Hall history) | All kept. |

## Gates after the fixes

- mkpage: built (hero sub 26 words).
- score.js (SCORE_TODAY=2026-11-02): 99/100 (SEO 100, AEO 100, Human 99, Trust 100). P2 at 4.6 numbers per 100 words (was 5.1). T2 now passes with the student-tenant-pools story (usable-with-limits; renters described by what they want).
- claims-scan: 0 findings on this page. facts-check: 0 on this page. house-claims: 0. struck-check: no struck wording. photos.js check: all records pass.
- critic.mjs at 320, 390, 768, 1024, 1440: 0 blocking. 2 warnings, both the read.wall false hit on the FAQ's last answer plus end matter that round 1 already called a tool false hit.
- build.js check: OK. build.js audit, this page: only the two date lines (lead's dates run) and two "~" notes (no mid-page box, see "did not change" 5; no quote from a named licensed person).
- Shots looked at: 390 full page, the two maps at 760 and 360, the end band.
