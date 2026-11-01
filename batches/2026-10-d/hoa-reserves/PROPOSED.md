# Proposed rows: /hoa/reserves/

For `facts/registry.json`. Each needs a firing and a quiet control in `tools/facts-check.test.js`, from real site text, before it is added. Values wait on the verifier (ledger rows named).

## 1. `fannie-condo-reserve-share` (ledger rows 12, 13, 16)

- **fact:** For a conventional loan on a condo, the lender checks that the association's budget puts at least 10 percent of its yearly budgeted assessment income into replacement reserves, or that the budget follows an acceptable reserve study at its highest recommended amount. For loan applications received on or after January 4, 2027, the minimum is 15 percent.
- **owner page:** `/hoa/reserves/`
- **also on:** `/buyers/no-hoa-homes/` (batch 2026-10-b row 56), `/invest/non-warrantable-condos/`, `/hoa/` if it mentions reserves.
- **source:** Fannie Mae Selling Guide B4-2.2-01 (https://selling-guide.fanniemae.com/sel/b4-2.2-02/full-review-process); Freddie Mac Guide Bulletin 2026-C, March 18, 2026.
- **staleBy:** 2027-01-04 (the sentence changes tense that day).
- **wrong patterns (candidates, read every hit before trusting):** "15 percent of (the )?(property|unit|home)('s)? value"; "15 percent .{0,40}(starting|from|after) January 1, 2027"; "10 percent of (the )?reserves" (reversed); "Fannie Mae requires (a )?reserve study" without "or". The live `/hoa/reserves/` sentence "has announced a rise to 15 percent for loan applications dated on or after January 4, 2027" is not wrong in value but rests on an unopened source; it goes with the rebuild.

## 2. `sc-no-reserve-requirement` (ledger row 1)

- **fact:** South Carolina law does not require a condo or an HOA to keep a reserve fund, fund it at any level, or have a reserve study. The association's own documents decide.
- **owner page:** `/hoa/reserves/`
- **also on:** `/hoa/special-assessments/` (its row 8), `/hoa/south-carolina-hoa-laws/`.
- **source:** S.C. Code Title 27 Chapters 30 and 31 (https://www.scstatehouse.gov/code/t27c031.php, https://www.scstatehouse.gov/code/t27c030.php).
- **staleBy:** 2027-02-01 (statutes, quarterly).
- **wrong patterns (candidates):** "South Carolina (law )?requires (condo|HOA|associations?) .{0,30}reserve"; "required (by South Carolina|under state law) to (keep|maintain|fund) reserves". No live hit is known; add only if a draft or an older page states it.

## No story rows

No new story. The page uses a labelled example.
