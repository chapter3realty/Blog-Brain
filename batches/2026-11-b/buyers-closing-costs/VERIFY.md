# VERIFY: /buyers/closing-costs/

Independent verifier, 2026-11-09. I did not research these rows. I opened every source myself. Files read: the HMDA 2025 Horry County purchase file (re-downloaded from the FFIEC data browser and re-run), eCFR 12 CFR 1003.4, 1026.37, 1026.38 and Supplement I to Part 1026, eCFR 38 CFR 36.4313 and its versions list, the VA appraisal fee table (May 1, 2026) and the 2021 Atlanta table.

Counts: 3 VERIFIED, 1 CORRECTED, 2 STRUCK.

| # | Status | What I found |
|---|---|---|
| 1 | STRUCK | No primary source for $2,900. Bankrate is a survey site. Cut it on both surfaces. |
| 2 | CORRECTED | The numbers hold. My re-run: 5,790 loans in the filter, 5,742 with `total_loan_costs`, median $5,047.89, quartiles $3,941 / $5,048 / $7,171. FHA median $10,072 (1,364 loans), VA $4,711 (867). The wording is wrong on title insurance. Loan costs (1026.38(f)(4) and (5), the sum of (f)(1) to (3)) hold only the lender's title policy. Comment 37(f)(2)-4: "an owner's title insurance policy that covers the consumer and is not required to be purchased by the creditor is only disclosed pursuant to § 1026.37(g)", that is, under Other Costs. The figure is also borrower-paid only. Safe wording: "In Horry County in 2025, the middle conventional purchase loan had about $5,000 in loan costs paid by the buyer: the lender's charges, the lender's title policy, the attorney and the appraisal. The owner's title policy, taxes, recording and the prepaid items are on top [HMDA 2025; Reg Z 1026.38(f)]." |
| 3 | VERIFIED | Re-run: 5,735 loans with origination charges; median 0.94 percent of the loan, quartiles 0.40 / 0.94 / 1.80; median loan $255,000; median value $355,000. 1003.4(a)(18) as quoted. The HMDA 2024 cross-check in the note was not re-run. |
| 4 | VERIFIED | 38 CFR 36.4313(d)(2), eCFR as of 2026-11-01: quote matches word for word. Versions list: last amendment 2016-09-09. "Up to 1 percent." |
| 5 | VERIFIED | VA PDF: "Effective May 1, 2026"; "Berkeley, Dorchester, Horry, Richland $650 $650 $700 $850 6". The VA fee page lists "Effective May 1, 2026" and "Effective thru April 30, 2026". The 2021 Atlanta table: "SouthCarolina $525 $525 $575 $675", "EffectiveDecember1,2021", so $575 was the old manufactured-home fee. The sentence "Fees for other loans ... vary" has no row: keep it general, with no figure. |
| 6 | STRUCK | The arithmetic holds ($750, $960). The schedule behind it ($330 plus $2.10 per $1,000 above $100,000) has no source. I tried two insurers' filed SC rates: Chicago Title's SC page puts "Filed Rates CTIC South Carolina Eff Apr 14, 2021" behind a login; Stewart's SC rate manual (rev. 12/28/2022) returned 403. A schedule the verifier cannot open does not go into a new table. |

## FIX.md: planned sentences that go beyond their verified rows

1. Step 1, the new answer sentence: "the lender's charges, title insurance, the attorney and the appraisal" goes beyond row 2. Write "the lender's title policy", and say the owner's policy is on top (row 2 safe wording).
2. Step 1, the new FAQ sentence: "before taxes, recording and prepaids" implies everything else is inside the $5,000. Add "and the owner's title policy" to the list of what is outside.
3. Step 3, the title table and the schedule sentence ("A typical schedule charges about $330 ... plus $2.10 ...") rest on row 6, STRUCK. Do not add the table. Cut the schedule sentence and the two examples, or open a filed South Carolina rate manual first and add a row.
4. Step 3, paragraph 1 (the 1987 ruling, "$600 to $1,200", "The buyer usually chooses and pays the attorney") and the "two discounts" paragraph (reissue rate, "under ten years old") have no row in this ledger. The rewrite touches them, so they were not re-verified here. Keep them word for word in meaning, or verify them before the edit.
5. Step 2: `add('Appraisal',650)` is the VA fee for Horry County. The notes string says so. Keep that label; do not call $650 "typical" for every loan.

Struck list: `batches/2026-11-b/facts/buyers-closing-costs-struck.json` (rows 1, 2, 5, 6). Each entry fires on its struck text and stays quiet on its approved text. On the live page it finds the two $2,900 sentences and the schedule sentence.
