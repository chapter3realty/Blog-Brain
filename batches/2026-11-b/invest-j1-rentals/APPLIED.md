# Applied: /invest/j1-rentals/

Fixer, 2026-11-09. Source: specs/j1-rentals.js, built with `node tools/mkpage.js specs/j1-rentals.js`. Rows 1 to 3 VERIFIED. The "Our earlier figure..." sentence was already gone (grep finds it in neither the spec nor the page).

| Where | Before | After | Rows |
|---|---|---|---|
| Employers paragraph (spec line 86) | He had reserved 150 of the 300 beds in the new residence hall for the next summer. | He had reserved 150 beds in the new residence hall for the next summer. | 3 |
| Residence hall paragraph (line 89) | has more than 300 beds, four to a room, with weekly rent. | unchanged | 1 |
| Table row (line 124) | Beds in the residence hall now open / 300 (linked to WPDE) | Beds in the residence hall now open / More than 300 (linked to the operator's page) | 1 |
| Line 176 | The residence hall competes at the low end, three hundred beds at a time, with employers reserving blocks. | The residence hall competes at the low end, with more than 300 beds in one building, and one large employer reserved 150 of them for a summer. (VERIFY wording: one employer, one block) | 1, 3 |

After the build, the page gives the hall's size one way only: "more than 300". No "300 beds", "three hundred" or "624" is left.

Left: line 125, "About 1,200 to 1,500, depending on which source you read", stays. The wider range (1,200 to 1,600) was not verified in this pass; only WMBF ("over 1,500") was re-opened. Not re-checked: "with weekly rent" and "It opened in May 2025". Layout items (italic line size, four CTA boxes to two) are outside this pass. The rebuild moves the "Updated" line and dateModified back to datePublished until `node build.js dates` runs. Score 86 -> 86.
