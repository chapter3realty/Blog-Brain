# Must-answer: /buyers/property-records/tax-bill/

## The deciding fact

**The county's tax search finds a bill by owner name, PIN, map number, notice number or tax ID. It has no address search** (facts 4, 5). People type "horry county tax bill search by address", "tax records by address" and "tax payments by address" (suggestions below). The county's own answer is to find the PIN on the Land Records map, and that map now needs a county sign-in (fact 41; gis-map sibling F2).

The search itself needs no account (fact 5). So the page's job is plain: send the reader straight to the search, tell them which box to use, and offer to find the bill for anyone who has only an address. That is the first screen.

The test passed. The bill search, the fees, the installment plan, the penalties and the appeal rules are all on county pages or in SC Code, and each was read today.

## Who searches this and why

- **An owner paying this year's bill.** The bill came in October, or did not come. They want the payment page, the cheapest way to pay, and the due date. Behind it: "Will a card cost me extra?", "Did my lender already pay it?", "I never got a bill. Am I late?"
- **A buyer looking at a house.** They want last year's bill to know what they will pay. Behind it: "Is the seller on the 4 percent rate, and will I be?" The rate and the estimate belong to /buyers/property-taxes/. This page shows where the bill is and what each line on it means.
- **A new owner after closing.** The bill went to the seller. Behind it: "Who pays it? Do I owe a penalty?" State law waives the penalty when the bill went to the prior owner and the new owner got no notice (fact 15).
- **An owner who thinks the value is too high.** They type "tax assessor" and "tax appeal". They need the deadline and the first step, which is free and in writing (facts 31 to 35).
- **An owner who cannot pay all at once.** The county's installment plan (fact 18). Behind it: "Can I split it?"
- **Someone who missed the date.** Penalties, then the tax sale. Behind it: "How long before I could lose the house?"
- **A car owner.** The same search shows vehicle bills (fact 3). A one-line answer and a link for new residents.

## Questions people search, ranked

From the lead's suggestions (`scratchpad/kw/suggest.json`), my suggestion pulls (15 seeds, `wt-139/data/2026-11-d/property-records-tax-bill/raw/suggest/`) and DataForSEO volumes (fact 49).

| Rank | Question | Evidence (US monthly where known) | Answer (facts) |
|---|---|---|---|
| 1 | Where do I pay my Horry County taxes online? | tax payments 6,600; tax payments online 720; property tax payment 110; "pay horry county taxes online", "treasurer pay taxes online", "tax payments online login" | The county's Tax Payments and Receipts site; no login (2, 5). |
| 2 | How do I look up a tax bill: by name, PIN or address? | tax records 2,400; tax records by name 590; tax bill search 480; property tax search 1,000; property tax search free 320; "by address" four ways | Owner name (last name first), PIN, map number, notice number, tax ID. No address search; we find the PIN for an address (4, 41). |
| 3 | Does it cost extra to pay by card? | "tax payments online free" (twice) | E-check online is free. Card 2.35%. Phone adds $0.50. Debit in person $3.95 (8). |
| 4 | When are Horry County property taxes due? What are the penalties? | "tax due dates", "property tax due date", "taxes due" | Mailed about Oct 1, due Jan 15, postmark counts. 3% on Jan 16, 10% in all on Feb 2, 15% in all on Mar 17, then delinquent (12, 13). |
| 5 | Where is the Horry County tax office? Phone and hours? | tax office 1,000; "tax office phone number", "hours", "myrtle beach", "21st ave", "conway", "locations", "near me"; "treasurer phone number" | Four Treasurer offices, 8 to 5 weekdays. The Myrtle Beach office is in the new Central Coast Complex on Hinson Drive in Carolina Forest (29, 30). |
| 6 | What does the Horry County Assessor do, and how do I reach the office? | tax assessor 2,900; assessor property search 260; "assessor's office phone number", "website", "pay online" | The Assessor sets the value and the 4% status; the Treasurer takes payment (28, 29). "Assessor pay online" is a wrong turn: payment is the Treasurer's site. |
| 7 | How do I appeal my property value? | "horry county tax appeal", "appeal form", "property tax appeal", "tax assessment appeal" | In writing to the Assessor: 90 days from a value notice, or by Jan 15 of the next year if no notice came. Free. The steps after (31 to 35). |
| 8 | Can I pay in installments? | "horry county installment" had no suggestions; the county's installment form ranks for "horry county taxes" (serp.json); brief | Yes, real property only, not escrowed. Apply by Jan 15. Five payments, each 16.67% of last year's tax, then the rest (18 to 21). |
| 9 | Did my mortgage company pay it? | People also ask pattern; county news | The lender may pay before the due date. Check the bill's status on the search before you pay (6, 17). |
| 10 | I bought the house this year. Who gets the bill, and do I owe a penalty? | owner and buyer questions; SC Code | The bill goes to the owner of record. If it went to the seller and you got no notice, the law waives the penalty (12, 15). Proration at closing: /buyers/closing-costs/. |
| 11 | How do I get a copy of my tax receipt? | "tax payments and receipts" (five forms) | Receipts by mail; duplicates on the same site; tax years back to 2016 in the search (3, 11). |
| 12 | What happens if I do not pay? | delinquent property taxes (10); tax sale questions | Delinquent Mar 17, notices from Apr 1, a tax sale in early December, 12 months to redeem. Our count of this year's list (22 to 25). Buying at the sale: /invest/foreclosures/. |
| 13 | How do I pay vehicle tax? | "pay horry county vehicle tax online", "car taxes", "treasurer vehicle tax payment"; vehicle property tax 30 | Renewals online or by phone. A first registration needs the paper receipt from the office, because the DMV does not take the online receipt (10, 26). New residents: /buyers/relocating/moving-checklist/. |
| 14 | Georgetown County taxes (Pawleys Island, Litchfield) | georgetown county tax payments, tax office, tax records, treasurer pay taxes online, tax assessor | georgetowncountysctax.com; the Treasurer in Georgetown; installments apply each year; reassessment appeal 90 days (42 to 48). |

People also ask: no PAA block was in the lead's SERP pull for these queries (`serp.json` holds one tax query, "horry county taxes", with no PAA). The questions above that read like PAA ("Did my mortgage company pay it?", "What happens if I do not pay?") come from the suggestion patterns and the county's own FAQ topics. Verify with a live SERP before calling any of them PAA in a report.

Owner stories (`stories/stories.json`): searched for tax, bill, assessor, treasurer and appeal. Nothing tells a tax-bill story; the page needs none.

## What siblings own, and what this page owns

Read: every page in `wt-139/chapter3realty` that names the Treasurer, Assessor, a tax bill, a tax sale, installments, appeals or vehicle tax (greps above), and `reports/cannibalization-2026-11-08.json` (one property-tax cluster: /buyers/property-taxes/ owns the rate, 4% vs 6%, the legal residence application and second-home tax).

| Page | Owns | This page's line toward it |
|---|---|---|
| /buyers/property-records/ (hub, parallel) | horry county property records, property lookup, property search, property search by name (880), records search | Links up in the first section. This page does not put "property records" in its title, H1 or headings. |
| /buyers/property-records/deeds/ (parallel) | land records 18,100, register of deeds 3,600, deed search 1,000, plats | One link where the bill shows the deed book. Unpaid county tax is the Treasurer's (deeds F32 hands it here). |
| /buyers/property-records/gis-map/ (parallel) | horry county gis 8,100, tax map 1,000, TMS and PIN formats, property lines | One sentence: the PIN on the map card opens the bill. No PIN-format detail here. |
| /buyers/property-taxes/ | horry county property tax 2,900, property tax rate, 4% vs 6%, calculator and estimator, "how much", legal residence how-to, homestead 65+ | One link for the rate, the estimate and the 4% application. No calculator, no millage, no rate table, no worked bill. **Overlap to settle:** its H2 "Horry County property tax due dates and penalties" is the same question as this page's due-date section. Proposal: this page owns "due date" and "penalties" (a paying question); the sibling cuts its calendar to one sentence and links here. |
| /buyers/cost-to-own/ | cost to own, yearly total | Not touched. One link from the "buying a house?" line. |
| /buyers/common-mistakes/ | biggest buyer mistakes, including the 1 in 7 still taxed at 6% | One link where the bill's "Residential Exemption" line is explained. Its count is not repeated. |
| /buyers/closing-costs/ | proration of tax at closing | One link in the new-owner answer. |
| /invest/foreclosures/ | tax sale redemption, tax deed, buying at the tax sale | This page says what happens to an owner who does not pay, and gives our count of this year's list. Bidding, deposits and quiet title stay there; one link. |
| /invest/str-setup/ | personal property return (PT-100) for rentals | One line and a link. |
| /buyers/relocating/moving-checklist/ | new-resident vehicle registration order | One line and a link. |
| /hoa/tax-deductible/ | what is deductible | Not touched. |

**This page owns:** horry county tax payments (6,600), tax payments online (720), tax payments and receipts, tax payments phone number, tax records (2,400), tax records by name (590), tax search by name (110), tax bill search (480), tax bill search by address and by name, property tax search (1,000), property tax search free (320), property tax lookup (110), property tax payment (110), property tax bill (70), tax office (1,000) and its phone, hours and locations, tax assessor (2,900) and assessor's office (contact and role), tax appeal and appeal form, property tax due date and penalties (with the sibling's agreement), installment payments, pay vehicle tax online, georgetown county tax payments, tax office, tax records, treasurer and assessor.

**Left to the lead:** "horry county taxes" (4,400) and "horry county real estate taxes" (2,900) are mixed. The SERP for "horry county taxes" is led by the Treasurer's Facebook page and the county's payment and installment pages, which are paying intent. This page should take "horry county taxes" in its description and first sentence; /buyers/property-taxes/ keeps "horry county property tax" in its title. "horry county assessor property search" (260) sits between this page and the hub; the hub is the better owner, with this page answering "what the Assessor does" only.
