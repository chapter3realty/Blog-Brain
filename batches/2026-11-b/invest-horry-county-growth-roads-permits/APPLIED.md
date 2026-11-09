# Applied: /invest/horry-county-growth-roads-permits/

Fixer, 2026-11-09. Edited `data/2026-11-e/horry-county-growth-roads-permits/data.json` and `specs/horry-county-growth-roads-permits.js`, rebuilt with `node tools/mkpage.js`. `build.js dates` not run (forbidden this round); the byline dates were preserved by mkpage.

| # | Where | Before | After | Rows |
|---|---|---|---|---|
| 1 | data.json `freeboard` | `{ "row": "F195", "from_ft": 1, "to_ft": 3, "advanced": "June 2021, second reading, unanimous", "final_vote_scheduled": "2021-07-13" }` | `{ "rows": "...facts.md 1-4", "from_ft": 1, "to_ft": 3, "a_zone_in": 24, "chapter": "Chapter 9, Flood Damage Prevention and Control", "adopted": "summer 2021", "source": Build Responsibly page, "adopted_source": Flood Resilience Master Plan summary PDF, "read": "2026-11-09" }` | 1 to 4 |
| 2 | Spec consts | `FLOOD21` (WMBF) | `FLOODRULE = FB.source`, `FLOODPLAN = FB.adopted_source`, `CODE9` (stormwater ordinances page). FLOOD21 removed. | 1 to 4 |
| 3 | Flood section, 1st paragraph | "In a flood zone, the lowest floor of a new home must be built above the expected flood level. The extra height is called freeboard. In June 2021 the county council advanced an ordinance ... Its final vote was scheduled for July 13, 2021." | "In a flood zone, the lowest floor of a new home must be above the expected level of a big flood. The extra height is called freeboard. In the unincorporated county the rule is 3 feet above that flood level in AE and VE zones. In an AE zone that is the lowest floor. In a VE zone it is the bottom of the lowest supporting beam. A surveyor's certificate on the finished building proves the height." | 1 CORRECTED (certificate tied to AE and VE only) |
| 4 | Flood section, new 2nd paragraph | (none) | "In an A zone with no flood level on the map, the lowest floor must be at least 24 inches above the highest ground next to the building. The building inspector checks it. The county council raised the freeboard from 1 foot to 3 feet when it rewrote its flood ordinance in summer 2021. The rule is now Chapter 9 of the county code. Cities have their own rules. For a lot inside a city, ask the city." | 1 CORRECTED, 2, 3, 4 CORRECTED |
| 5 | Figure caption and SVG aria-label | "Right, the 3 feet in the ordinance the council advanced in 2021." / "the height in the 2021 ordinance" | "Right, the 3 feet the county requires now in AE and VE zones in the unincorporated county." / "the height the county requires now" | 1 |
| 6 | Paragraph after the figure | "We confirm the current height rule with the county for any lot in a flood zone before you buy, ..." | "Our agents check the height rule for the lot's flood zone with the county or the city before you buy, ..." | none needed |
| 7 | "What we check" section | The NC client story box ("Chapter3's clients from North Carolina bought land in Longs ...") | Cut | none (stories.json has no impact-fee detail) |
| 8 | H1 | "Growth, Roads and Permits: What the New Leaders Mean for Building in Horry County" | "Did the 2026 election change building rules in Horry County?" | none needed |
| 9 | Sources | "WMBF, flood rules" | "Horry County, flood building rules", "Horry County, Flood Resilience Master Plan summary", "Horry County Code, Chapter 9" | 1 to 3 |
| 10 | Spec header comment | "the 2021 freeboard ordinance was advanced on second reading, and its final vote is not confirmed" | Today's rule, rows 1 to 4, no ordinance number | |

Plain words: "base flood elevation" and "elevation certificate" are written as "the expected level of a big flood" and "a surveyor's certificate on the finished building" (rules/plain-words.json). "Sets" is not used (VERIFY item 3). The AE and VE rule is split from the A-zone rule so no sentence or paragraph runs past the audit and score limits.

Not found, page says less: the ordinance number (row 4). The page names Chapter 9 and "summer 2021" only, with no number and no day.

Other FIX items: the two leader cards show their headings and quoted plans at 390 and 1440 (screenshots looked at); no CSS change was needed. The cut-off triage instruction ("Add one line explaining that this") was skipped: the full text is not in the triage file. The `sub` and short answer ("the flood rules are the same as before the vote") stay (VERIFY item 6).

Gates: claims-scan 0; facts-check no sentence on this page; struck list 0 hits; score 98 before, 98 after (the story cut cost one first-hand sentence; "Our agents check the height rule" restored it); build.js check OK; audit no FAIL on this page.
