# Check, round 14m (2026-10-21)

Independent verifier. Scope: `git diff 6ca3e6a HEAD` for the best spec, its data file and the affordable spec. I did not edit a spec or open Zillow. Ledger rows used: neighborhoods 22, 90, 125, 201, 220, 229, 263, 276, 293; affordable 142, 146, 162, 187, 209, 211, 226, 234, 235; prior notes final-check-14l.md.

## Verdict

Best: nothing must-fix, one tighten. Affordable: 3 must-fix (chart labels), 2 tighten. The 14l fixes (E1 to E8, A2, A3) are applied as written.

## Best neighborhoods

| Sentence | Result |
|---|---|
| Forestbrook Estates "Every home ... is outside the high-risk flood zone" | Holds. Row 90: 669 of 669 address points outside. |
| "Lennar developed the neighborhood from 2018 on, so the houses are less than ten years old" | Holds today (first deed 2018, oldest listing 2018, 500 of 500 built, rows 220, 229). It goes false in 2028. Tighten: "so every house was built in 2018 or later". |
| Grande Dunes "Almost every home in the sections named Grande Dunes is outside the high-risk flood zone" | Holds. Row 22: 406 of 407, one in AE. |
| Tidewater "The course is public" | Holds. Row 201: the club's page title is "Public Golf Course". The paddling-trail and Vereen sentences are cut, so E3 and E4 are closed. |
| Deerfield "older streets" (entry line, price line, price cell) | Holds. Lot, price and fee all come from DEERFIELD parcels (rows 263, 125, 127). |
| Guide: Grande Dunes "mostly new listings"; Forestbrook Estates "newer houses" under "More house for the money" | Hold. Row 276 item 3: least expensive of the newer neighborhoods ($395,000). |
| Surfside name, "National Course of the Year", sources note | Hold (E7, E8, E5). |

## Affordable places to live

### Must fix

| # | Current | Why | Replacement |
|---|---|---|---|
| B1 | Fairways "golf, no yard work"; Sawgrass East "garage, no yard work" | The rows say lawn care in the HOA fee (Fairways 5 of 5, Sawgrass East 8 of 10). Yard work is wider. | "golf, lawn care in fee"; "garage, lawn care in fee" |
| B2 | Amber Bluff "smart homes by CCU" | "By" is an unmeasured nearness word. The university and stadium are about 6 minutes by car (row 209). | "smart homes, CCU 6 min" |
| B3 | Indigo Grove "22 acres of open land" | Row 187 says open space (22.47 acres of HOA tracts, with ponds). | "22 acres of open space" |

### Tighten

- Sawgrass East "and no lawn to mow" holds under "In most townhomes here". Closer to the rows: "and the HOA cares for the lawns".
- Golf and Yacht Club: "Inside its gate are about 470 houses" counts the older part only (466 parcels, row 226). Say "The older part has about 470 houses inside the gate, most of them one story."

### Holds

"4 min to the beach" (4.0), "paddle the Waccamaw" (row 234), "4 miles to a marina" (3.9 mi, row 235; the sentence "about four miles by road" is right), "up to 2,400 sq ft" (Thatcher plan, row 193), "on the old speedway" (row 142; the entry says "part of"), "MarshWalk 5 min away" (row 211). The Osprey Marina sentence follows row 235 safe wording. Birchwood's trail sentence follows row 234 safe wording. Cuts (Fairways 27 holes and CCU, Forestbrook Village errands, Danny Knight, Socastee park) leave no orphan reference.

## Struck list

Three entries added to affordable-places-to-live-struck.json for B1 to B3. They fail until the labels change.
