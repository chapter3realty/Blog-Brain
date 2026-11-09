# Fix: /invest/j1-rentals/

Spec: specs/j1-rentals.js. Then `node build.js` and `node build.js dates`. The "Our earlier figure..." sentence is already gone; check with `grep -n "earlier figure" specs/j1-rentals.js chapter3realty/invest/j1-rentals/index.html` (expect nothing).

## One bed count everywhere: "more than 300" (row 1)

1. Line 86 (employers paragraph): "He had reserved 150 of the 300 beds in the new residence hall for the next summer." becomes "He had reserved 150 beds in the new residence hall for the next summer." (row 3)
2. Line 89: "has more than 300 beds, four to a room, with weekly rent." Keep as is (row 1).
3. Line 124, the table: `["Beds in the residence hall now open", \`${h.ext(WPDE25, "300")}\`]` becomes `["Beds in the residence hall now open", \`${h.ext(IRH, "More than 300")}\`]`.
4. Line 176: "The residence hall competes at the low end, three hundred beds at a time, with employers reserving blocks." becomes "The residence hall competes at the low end, with more than 300 beds in one building and employers reserving blocks of them."
5. After the build, `grep -n "300 beds\|three hundred\|624" chapter3realty/invest/j1-rentals/index.html`: every hit should read "more than 300".

## Optional, same pass (Not verified note in facts.md)

Line 125: "About 1,200 to 1,500, depending on which source you read" becomes "About 1,200 to 1,600, depending on which source you read", which covers the sources in the July ledger except the 3,000 outlier.

## Not in this pass

The italic line size and cutting the four "Want to rent to J-1 students?" boxes to two are layout fixes.
