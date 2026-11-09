# APPLIED: /buyers/closing-costs/

Fixer, 2026-11-09. Page file `chapter3realty/buyers/closing-costs/index.html` (no spec). Protected page: only the sentences the rows name were changed.

| Rows | Before | After |
|---|---|---|
| 1 STRUCK, 2 CORRECTED, 3 | Answer, Buyers paragraph: "...on top of the down payment; benchmark surveys put the third-party-and-tax portion alone near $2,900 on an average South Carolina purchase." | "...on top of the down payment." Then a three-row table: "Horry County conventional purchase loans, 2025 / At the middle": loan costs paid by the buyer (the lender's charges, the lender's title policy, the attorney and the appraisal), about $5,000; the lender's own origination charges, about 0.9 percent of the loan; the owner's title policy, taxes, recording and the prepaid items, on top of the loan costs. (A table, not a sentence, so the short answer stays 120 words and the page keeps a data table.) |
| 1, 2 | FAQ and FAQPage schema: "Benchmark surveys put the third-party-plus-tax portion near $2,900 on an average South Carolina purchase, before lender fees and prepaids." | "Federal loan records for Horry County put the loan costs paid by the buyer on the middle conventional purchase in 2025 at about $5,000, before the owner's title policy, taxes, recording and prepaids." |
| 1, 2, 5 | Sources: "Bankrate closing-cost survey and published 2025-2026 South Carolina attorney, appraisal, and title rate ranges." | "Home Mortgage Disclosure Act data, 2025, Horry County purchase loans; VA appraisal fee table." (links ffiec.cfpb.gov/data-browser/ and the VA fee schedule page) |
| 5 | Calculator `add('Appraisal',575)` | `add('Appraisal',650)` |
| 3, 5 | Notes: "Assumes typical published 2026 fees: 1% origination, $575 appraisal, $850 attorney, ..." | "Assumes typical fees: 1% origination, a $650 appraisal (the VA fee for Horry County), $850 attorney, ..." |
| 4 | VA: "With a 1 percent flat origination charge, the lender cannot also itemize processing, underwriting, or document fees." | "A lender may charge a flat origination fee of up to 1 percent of the loan. If it does, it cannot also charge separate processing, underwriting or document fees." |
| 6 STRUCK | "A typical schedule prices an owner's policy near $330 plus $2.10 per $1,000 above $100,000." and the two-row table ($300,000 about $750; $400,000 about $960), added in round 1 | Cut, both. The title paragraph now says the rates are filed with the state and vary, and gives the $100 to $150 lender's policy. |

Left, and why:
- The calculator still prices the owner's policy with 330 + 2.10 per $1,000 (label "filed-rate typical"). It is code, and the calculator total needs a line. Row 6 struck the schedule: it needs a filed South Carolina rate manual (Chicago Title's is behind a login, Stewart's returned 403) before the next pass.
- FIX steps 3 to 5 that change no row (the attorney paragraph split, "This is a feature, not a tax", the two-discounts split, the VA "non-allowable" sentence split, the subtitle size): not done. Protected page. The italic line is already at the approved size.
- "Lender origination (1% typical)" stays (row 3: 0.94 percent at the middle).
- `node build.js dates` not run (lead's instruction).
