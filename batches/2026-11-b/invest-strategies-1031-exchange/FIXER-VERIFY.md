# Fixer rows checked: /invest/strategies/1031-exchange/ (batch 2026-11-b), rows 49 and 50

Independent verifier, 2026-11-09. I did not research these rows. Both sources were downloaded again today. The page checked is the built page in the website working copy, `chapter3realty/invest/strategies/1031-exchange/index.html`.

Counts: 2 rows. 1 VERIFIED (50), 1 CORRECTED (49, page wording), 0 STRUCK.

| Row | Status | Finding |
|---|---|---|
| 49 | CORRECTED (page wording) | irs.gov/publications/p527, "Publication 527 (2025)", "Last Reviewed or Updated: 30-Apr-2026". Table 2-1, "MACRS Recovery Periods for Property Used in Rental Activities": "Residential rental property (buildings or structures) and structural components such as furnaces, waterpipes, venting, etc. 27.5 years 30 years". The 27.5 years is the General Depreciation System, and it is for residential rental property only. A nonresidential rental building is on a longer schedule, so a sentence about "a rental building" in general says more than the table. The story's condos are residential, so the number is right for the story. Add "residential" to the general sentence. |
| 50 | VERIFIED | dor.sc.gov/sites/dor/files/forms/I290.pdf, downloaded today: "(Rev. 7/17/23)"; "NONRESIDENT REAL ESTATE WITHHOLDING"; "Mail to: SCDOR, Withholding Taxable, PO Box 100161, Columbia, SC 29202"; "Return and payment are due by the 15th day of the month following the month of the sale." The instructions also say the form goes with each withholding payment: "The buyer must give each seller two copies of this form each time the buyer submits a withholding payment to the SCDOR." So "the form that pays the hold-back to the state" is a fair short name. The form does not pay. It is the return filed with the payment, and "the form sent with the hold-back payment" is more literal if the build flags the wording. Who files it in an exchange (RR 09-13, row 10) is not part of this row. |

## Sentence on the built page that must change

| Row | Page sentence now | Replacement |
|---|---|---|
| 49 | "The IRS lets an owner deduct the cost of a rental building over 27.5 years, called depreciation." | "The IRS lets an owner deduct the cost of a residential rental building over 27.5 years, called depreciation." |

The entry is in `batches/2026-11-b/facts/invest-strategies-1031-exchange-struck.json` as row "1031 49". It fires on the built page, and the replacement fires no entry in the list.
