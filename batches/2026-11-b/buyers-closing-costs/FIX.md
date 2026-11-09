# FIX: /buyers/closing-costs/

## Verifier marks, 2026-11-09

Planned sentences that go beyond their verified rows. Details and safe wording in `VERIFY.md`.

- Step 1 answer sentence: "title insurance" goes beyond row 2 (CORRECTED). Write "the lender's title policy"; the owner's policy is outside the $5,000.
- Step 1 FAQ sentence: add the owner's title policy to what is outside the figure (row 2).
- Step 3 table and the "$330 ... plus $2.10" sentence: row 6 STRUCK (no schedule opened). Do not add the table.
- Step 3 paragraph 1 (1987 ruling, $600 to $1,200) and the two discounts paragraph: no row in this ledger; not re-verified.


File: `chapter3realty/buyers/closing-costs/index.html`. No spec in `specs/` builds this page, so the edit is in the page file. Rows are in `facts.md` here. Use verified rows only; if the verifier strikes a row, drop the sentence it supports.

## 1. Remove the $2,900 figure (row 1 NOT FOUND), replace with rows 2 and 3

The direct answer, Buyers paragraph. Old last sentence:
> All-in, plan on roughly 2 to 5 percent of the purchase price on top of the down payment; benchmark surveys put the third-party-and-tax portion alone near $2,900 on an average South Carolina purchase.

New (two sentences):
> All-in, plan on roughly 2 to 5 percent of the purchase price on top of the down payment. In Horry County in 2025, the middle conventional purchase loan had about $5,000 in loan costs: the lender's charges, title insurance, the attorney and the appraisal, before taxes, recording and the prepaid items. (row 2)

FAQ "How much are closing costs in South Carolina?". Old second sentence:
> Benchmark surveys put the third-party-plus-tax portion near $2,900 on an average South Carolina purchase, before lender fees and prepaids.

New:
> Federal loan records for Horry County put the loan costs on the middle conventional purchase in 2025 at about $5,000, before taxes, recording and prepaids. (row 2)

Sources list. Old item:
> Bankrate closing-cost survey and published 2025-2026 South Carolina attorney, appraisal, and title rate ranges.

New:
> Home Mortgage Disclosure Act data, 2025, Horry County purchase loans (CFPB and FFIEC data browser); VA appraisal fee table, effective May 1, 2026. (rows 2, 3, 5; link https://ffiec.cfpb.gov/data-browser/ and https://www.benefits.va.gov/HOMELOANS/appraiser_fee_schedule.asp)

## 2. Calculator figures (rows 3 and 5)

In the calculator script:
- `add('Appraisal',575)` becomes `add('Appraisal',650)`. (row 5)
- `'Lender origination (1% typical)'` stays. Row 3 supports it for conventional loans (middle 0.94 percent in 2025).
- Notes string: `'Assumes typical published 2026 fees: 1% origination, $575 appraisal, $850 attorney, ...'` becomes `'Assumes typical fees: 1% origination, a $650 appraisal (the VA fee for Horry County), $850 attorney, ...'`. (rows 3, 5) Do not add a year by hand.

## 3. The attorney and title section, in short sentences, with a table

Old paragraph 1 (keep every fact, split the sentences):
> South Carolina is an attorney-closing state. Since a 1987 state Supreme Court ruling, a licensed South Carolina attorney has to run the closing. The attorney checks the title, prepares the paperwork, closes the sale, records the deed, and pays everyone out. Residential closing fees typically run $600 to $1,200. The buyer customarily chooses and pays the closing attorney. This is a feature, not a tax. The attorney is the person who finds title problems before they become your problems.

New:
> South Carolina is an attorney-closing state. Since a 1987 state Supreme Court ruling, a licensed South Carolina attorney has to run the closing. The attorney checks the title and prepares the paperwork. The attorney closes the sale, records the deed and pays everyone. Residential closing fees typically run $600 to $1,200. The buyer usually chooses and pays the attorney. The attorney is the person who finds title problems before you own them.

(The sentence "This is a feature, not a tax" goes: the triage quoted it as the long, joined sentence, and it adds no fact.)

Old paragraph 2:
> Title insurance rates are set by each insurance company and filed with the state, so they vary a little from one to the next. A typical schedule prices an owner's policy near $330 plus $2.10 per $1,000 above $100,000. The lender's policy is added for about $100 to $150 when issued simultaneously.

New:
> Each title insurer sets its own rates and files them with the state. So the price varies a little from one insurer to the next. A typical schedule charges about $330 for an owner's policy, plus $2.10 for each $1,000 of price above $100,000. The lender's policy adds about $100 to $150 when both are issued together.

Then the existing two-row table stays as the small table the triage asks for, with a header row (row 6):

| Purchase price | Owner's policy, typical schedule |
|---|---|
| $300,000 | About $750 |
| $400,000 | About $960 |

Keep the "Ask about two discounts" paragraph, split: "Ask about two discounts. The reissue rate applies when the seller has a prior owner's policy under ten years old. The enhanced or standard choice changes both the price and the coverage. Your closing attorney's quote from the underwriter is the final number."

## 4. VA section, short sentences (row 4)

Old paragraph 2, first two sentences:
> VA rules also cap what lenders can charge. With a 1 percent flat origination charge, the lender cannot also itemize processing, underwriting, or document fees.

New:
> VA rules also cap what lenders can charge. A lender may charge a flat origination fee of up to 1 percent of the loan. If it does, it cannot also charge separate processing, underwriting or document fees. (row 4)

Leave the rest of the VA paragraph as it is (outside this fix's facts), but break "Where a normally buyer-paid charge is non-allowable, the seller or lender credit picks it up." into: "Some charges a buyer would normally pay are not allowed on a VA loan. The seller or a lender credit covers those."

## 5. Subtitle and Updated date (no facts)

- Subtitle "buyers pay about 2 to 5 percent." set at the approved italic size (half the H1), as on the other fixed pages.
- Byline shows "Published July 20, 2026" only. Do not type a date. Run `node build.js dates` after the edit so the build sets the Updated date.

## Owner questions

None.
