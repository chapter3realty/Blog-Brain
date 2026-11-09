# FIX: /buyers/relocating/beaches/

## Verifier marks, 2026-11-09

Planned sentences that go beyond their verified rows. Details and safe wording in `VERIFY.md`.

- Step 2, Pawleys "Rest of the year: Same rule year round": beyond row 1 (only the rules page was read; the code was not). Use "No umbrella or tent limit on the town's beach rules page. Nothing may be left on the beach overnight."
- Step 2, Surfside "the one town on this list whose rules say outright": rests on rows for the other towns that are not in this ledger.
- Step 2, "true for both tables": the dog table was not checked.


Source: `data/relocating/pages/beaches.js`, built with `node data/relocating/assemble-page.js`. Do not edit the generated page. Rows are in `facts.md` here.

## 1. H1 (spec line 53, no fact)

Old: `The beaches,<br/><em ...>town by town.</em>`

New: `Myrtle Beach beach rules by town:<br/><em ...>dogs, tents, parking.</em>`

Set the italic line at the approved size (half the H1). The `headline` field (line 48) may become "Myrtle Beach Beach Rules by Town: Dogs, Tents, Parking" to match the title.

## 2. Pawleys Island row in the shade table (rows 1, 2; row 4 NOT FOUND)

Add a fifth row after "Garden City and other county beaches":

| Beach | Peak season | Rest of the year |
|---|---|---|
| Pawleys Island | No umbrella or tent limit on the town's beach rules page. Nothing may be left on the beach overnight. | Same rule year round |

Then the count "Same ocean, five sets of rules" is true for both tables. Keep it.

In the paragraph after the table, the sentence "Surfside Beach is the one place on this list where a family canopy is legal on a July afternoon" is no longer safe: row 1 lists no limit for Pawleys Island either. New: "Surfside Beach is the one town on this list whose rules say outright that a family canopy is allowed on a July afternoon." (row 1)

In "Two details save arguments", add at the end: "On Pawleys Island, anything left on the beach overnight is a risk to nesting turtles, and the town asks that nothing stay." (row 2)

## 3. The FAQ "Are tents allowed on Myrtle Beach beaches?"

Add at the end: "Pawleys Island's beach rules list no tent or umbrella limit, but nothing may be left overnight." (rows 1, 2)

## 4. Stories (rows 5, 6, 7)

Cut, in "Where we go, by mood", the sentence:
> The dog table above is personal for us: one of our team brings his dog to the sand every chance the clock allows, off season especially, and calls it the best free thing on this coast.

(Row 6: not a story in the bank, and an implied quote.) The next sentence starts the paragraph: "Two practical notes to finish."

Keep the January golf-cart scene (row 5: usable as an illustration). Change its last sentence, which states a fact about owners:
> That is a normal winter weekend for owners here, and most visitors never learn the season exists.

Cut it. Both halves state facts no row supports (what owners do; what visitors know). The scene ends on "Then you sit and watch the waves for an hour before you drive back up the beach."

Keep "Where we go, by mood" otherwise (row 7).

## 5. Build

Rebuild with the assembler and run `node build.js dates`.
