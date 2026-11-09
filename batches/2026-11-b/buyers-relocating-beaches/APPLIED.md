# APPLIED: /buyers/relocating/beaches/

Fixer, 2026-11-09. Source `data/relocating/pages/beaches.js`, built with the assembler.

| Rows | Before | After |
|---|---|---|
| none | H1: "The beaches, / town by town." | "Myrtle Beach beach rules by town: / dogs, tents, parking." The italic line is at the approved size (half the H1: the same `main#main .detail-h1 em` rule as the fixed pages). |
| none | Schema headline: "Beach Rules on the Grand Strand, Town by Town" | "Myrtle Beach Beach Rules by Town: Dogs, Tents, Parking" (matches the title) |
| 1, 2 | Shade table: four rows | A fifth row: "Pawleys Island", with one cell across both season columns: "No umbrella or tent limit on the town's beach rules page. Nothing may be left on the beach overnight." (verifier's wording; no "same rule year round") |
| 1 | "Surfside Beach is the one place on this list where a family canopy is legal on a July afternoon." | "In Surfside Beach a family canopy is legal on a July afternoon." The "one place" claim is cut. It rests on the other towns' rows, which are not in this ledger, and the FIX's "one town ... whose rules say outright" has the same problem. |
| 2 | "Two details save arguments" paragraph | Adds, after the overnight rule: "On Pawleys Island, anything left on the beach overnight is a risk to nesting turtles, and the town asks that nothing stay." |
| 1, 2 | FAQ "Are tents allowed...", last sentence "County beaches like Garden City are umbrella-only all year." | Adds: "Pawleys Island's beach rules list no tent or umbrella limit, but nothing may be left overnight." |
| 6 | "The dog table above is personal for us: one of our team brings his dog to the sand every chance the clock allows, off season especially, and calls it the best free thing on this coast." | Cut. Not a story in the bank. The paragraph now starts "Two practical notes to finish." |
| 5 | Golf cart scene ending "...before you drive back up the beach. That is a normal winter weekend for owners here, and most visitors never learn the season exists." | The last sentence is cut. The scene stays as an illustration. |

Left, and why:
- Row 4 STRUCK: nothing about a Pawleys tent ordinance (four-sided tents or none) is printed.
- "Same ocean, five sets of rules" is kept. Both tables now have five rows. The dog table itself was not re-checked in this pass.
- The $10 downtown parking in "Where we go, by mood" was not re-checked (row 7 limit). It stays as it was.
- `node build.js dates` not run.
