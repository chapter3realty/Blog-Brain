# Fixer-verified rows: independent check

Page: /hoa/documents/. Ledger: `facts.md`, rows marked VERIFIED-BY-FIXER (38, 39, 46, 47). Checked 2026-11-04 by a verifier who did not research or write them. Page text read from the built page in the website working copy.

| Row | Result | Note |
|---|---|---|
| 38 | VERIFIED | Opened the live guide (B4-2.1-01; the host answered today, so this replaces the saved copy). The review-method table says, word for word: "Unit in a PUD project: Project review is waived, with the exception of some basic requirements that apply" and "Detached unit in a new or established condo project: Project review is waived, with the exception of some basic requirements that may apply." The PUD definition matches. The saved sibling copy matches the live text. One carve-out: an established PUD of manufactured homes on a community land trust, ground lease or shared-equity plan goes through Fannie Mae's streamlined review. A reader would not call that "a house in an HOA", so the page sentence stands. The sentence is about Fannie Mae's tests, as the sentence before it says. |
| 39 | VERIFIED | Opened G.S. 47C-4-109 on ncleg.gov. The whole section is the one sentence quoted, and it names no cancel period. The cancel right in the next section (47C-4-108, 7 days) applies only where a public offering statement is required, which 47C-4-109 excludes. "In most condo resales" is right: 4-101(b) exempts foreclosure, court-ordered and some other sales. "This law has no days to cancel" is true of this section. |
| 46 | CORRECTED | The first sentence is true: with no loan there is no lender review. The second is too broad. Only a buyer whose loan goes to Fannie Mae faces Fannie Mae's review. Freddie Mac's test differs (15 percent from January 4, 2027, row 18), FHA and VA run their own approvals, and the page itself says a buyer can take a different loan when a building fails (row 23). |
| 47 | VERIFIED | `node tools/photos.js check` on this page's photos.json: all records pass. USGS metadata (11CCH03-Metadata.txt) read live: "Public domain data from the U.S. Government are freely redistributable ..."; the DOI resolves. Looked at the 1200 px file: older houses on lawns at left, two tall towers with pools at right, beach and surf in front; no readable sign, plate or face. The caption does not call these towers condos or these houses HOA houses; its lender lines rest on rows 19 and 38. |

## Sentence to change

Row 46. Page sentence, under "In a condo: the lender's building review":

> When you sell, a buyer who needs a loan faces the same review.

Replacement:

> When you sell, a buyer who needs a loan may face the same review.

Struck list: entry "documents 46" added to `hoa-documents-struck.json`. `node tools/struck-check.js` fires on the current page and is quiet on the replacement; `node tools/struck-check.test.js` prints "all controls pass".

The ledger rows were not edited; the lead or fixer sets row 46 to `corrected` with this note.
