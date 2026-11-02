# Verify: /buyers/common-mistakes/ (batch 2026-11-a)

Independent verifier, 2026-11-02. I did not research these rows. I opened every source myself, or re-ran its script into my own scratch folder. I did not trust the pasted quotes.

The ledger is `facts.md`. Its status and note columns now match this file. Struck wording is in `buyers-common-mistakes-struck.json` (14 entries). Every entry fires on its own struck text, and no approved wording fires. `node tools/struck-check.test.js` prints "all controls pass". The current live page has none of the struck wording.

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 26: rows 1, 2, 3, 6, 7, 8, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 25, 28, 31, 32, 33, 34, 36, 37, 39 |
| CORRECTED | 11: rows 4, 5, 9, 10, 13, 23, 26, 29, 30, 35, 38 |
| STRUCK | 1: row 27 |

38 rows in all (1 to 39, without 24). The ledger's summary says 37; it is 38.

The deciding fact holds. Rows 12 and 13 stand, with row 13's 2018 to 2019 ratio fixed.

## What I re-ran

- **Parcels (rows 13, 14).** I re-ran `analyze_parcels.py` on the private pull. The output is identical. Then I ran my own test, because the county's SaleDate is the last recorded deed, not always a sale (sell-home-value row 15). A sale resets the value, so taxable equals market. Of the 1,091 houses bought in 2024 and taxed at 6 percent, 1,036 have a reset value. On reset houses alone the 2024 share is 1,036 of 6,804 (15.2 percent). "About 1 in 7" holds.
- **FEMA policies (row 28).** I re-ran `analyze_fema.py`; the output is identical. The live API returns the same count with the same filter: 21,274, as of 2026-09-08. I checked the field definitions.
- **FEMA claims (rows 29, 30).** I re-ran `analyze_claims.py`; the output is identical. I also re-pulled the claims live: house claims in Horry County since 2015 with a building payment. That is 2,908 records, with the same medians (outside $26,402, n 945; high $15,723, n 1,914).
- **Listings in the flood zone (row 31).** I re-ran `analyze_flood_tag.py`; the output is identical. I tested 12 listing points live against FEMA's own flood map (NFHL layer 28), and all 12 agree.
- **CRM counts (rows 32, 34).** I re-queried the map API today. Every row 32 count is unchanged. Row 34 is now 1,572 of 2,833, which is still 56 percent.
- **Examples (rows 12, 18, 30).** I re-ran `build_examples.py`; the output is identical. I also redid all the arithmetic by hand.
- **Live sources.** I fetched these myself:
  - the SC Code chapters 12-37, 12-43, 12-45, 12-54, 12-60, 27-50 and 40-57
  - the Horry County news page, the legal residence checklist, the 2026 levy and the Online Services page
  - the City of Myrtle Beach planning page
  - Cornell 42 U.S.C. 4012a and 4104a
  - NAR's settlement page
  - Fannie Mae B3-3.1-04 and B4-2.2-02
  - the Rosen Hagood post
  - the Commons file pages
- **Carried rows.** I checked each against the sibling ledger row it names.

## Every correction

1. **Row 4 (who must not claim another state).** The law defines "member of my household" as the spouse and a dependent child under 18 [12-43-220(c)(2)(iii)]. So "no one in the household" is too wide. The owner also certifies that no one in the household claims the 4 percent rate on another home.
   - Use: "The owner applies, and certifies that neither the owner, nor a spouse or a dependent child under 18, claims to be a legal resident of another state for any purpose, or claims the 4 percent rate on another home."
   - RET 17 (buyers-retirees) has the same wide wording. Tell that page's writer.
2. **Row 5 (the deadline).** The first penalty attaches if the tax is not paid "before the sixteenth day of January or thirty days after the mailing of tax notices, whichever occurs later" [12-45-180(A)]. So January 15 is the usual last day, not always.
   - Use: "You can apply for a tax year until its bill is due, usually January 15 of the next year."
3. **Row 9 (the checklist).** The vehicle line is "For all vehicles owned and must reflect CURRENT address". That means every vehicle you own, not every vehicle at the address.
   - Use: "South Carolina registration for every vehicle you own, at that address."
4. **Row 10 (refund time limit).** 12-54-85(F)(1) says "If no return was filed, a claim ... must be filed within two years from the date the tax was paid". No return is filed for a property tax bill.
   - Strike "within three years of the return".
   - Use: "You can claim a refund of the extra tax from the county assessor, but only for recent bills: the law sets a time limit."
5. **Row 13 (1 in 18).** 483 of 8,404 is 5.7 percent, which is 1 in 17.4.
   - Use: "about 1 in 17".
   - The group for 2018 to 2019 is houses bought then and not sold since.
6. **Row 23 (business license).** The city requires the license for short-term rental use only.
   - Use: "Where the zoning allows a short-term rental, the city requires a business license for it."
   - New: the same city page says the city is rewriting its zoning code, with sessions November 4 to 18, 2026. The row's stale date should be 2027-02, not 2027-05. That is in the note: I edit only the status and note columns.
   - PROPOSED.md 2 (registry row `mb-str-grandfathered`) should use staleBy 2027-02-01 too.
7. **Row 26 (seller's disclosure form).** The claim left out 27-50-30, which exempts some sales:
   - a new home never lived in
   - foreclosures and court-ordered sales
   - estate sales by a fiduciary
   - public auctions
   - sales where both parties agree in writing to skip the form
   - Use: "On most resales of a house with one to four units, the seller must give the buyer the state's written disclosure form before the buyer signs, unless the contract says otherwise. The law exempts some sales, such as a new home no one has lived in, a foreclosure, an estate sale and an auction."
8. **Row 29 (flood payments).** The numbers are right. But a payment is not the repair cost.
   - Use: "FEMA's middle payment for the building was higher: about $26,400 outside the zone (945 claims since 2015) and about $15,700 inside it (1,914 claims)."
9. **Row 30 (48 years).** The arithmetic is right (47.9).
   - Use: "One middle FEMA building payment outside the high-risk zone (about $26,400) equals about 48 years of the middle policy for a house the owner lives in there (about $550)."
10. **Row 35 (reserve test).** Fannie Mae's live guide B4-2.2-02 (published 10/07/2026) still says 10 percent. RES 16 allows the 15 percent rule for Freddie Mac only. The date is the loan application date.
    - Use: "For loan applications from January 4, 2027, Freddie Mac needs the building's reserve line to be at least 15 percent of its budgeted dues, up from 10 percent."
11. **Row 38 (job check).** The section is B3-3.1-04 (10/07/2026), not B3-3.1-07. The old URL redirects to it.
    - The rule is for employment income. 15 business days are allowed in some cases, and the self-employed get 120 calendar days. The source is Fannie Mae's guide only.
    - Use: "On a loan that follows Fannie Mae's rules, the lender checks again that you still have your job no more than 10 business days before closing (15 in some cases)."

## Struck

- **Row 27 (due diligence on the SCR contract).** The only source is Rosen Hagood, which is secondary: a law firm's blog post of 10/25/2022 about the 2022 form. The form has been revised since. I opened the post. It says the buyer can "unilaterally terminate the contract by properly delivering a Notice of Termination and termination fee to the seller". It does not say any of these:
  - "for any reason"
  - that the buyer and seller set the length
  - that the right ends with the period

  FLD 37's fixer cut the same clauses. The primary source is the current SCR form, which only members can see. Do not publish a contract rule until the owner confirms it from the current form (owner question 3).

## Limits on verified rows (in the ledger notes)

- **Row 1.** Pair it with row 4: the 4 percent rate comes "once you apply and qualify". The 2026-10-d home-value list struck "taxed on 4 percent" when it stood alone.
- **Row 6.** May 31 is from the 2025 notice. Never type a 2026 or 2027 date.
- **Row 12.** The quote cell has two typos (623.55 and 1,413.45). The right figures are 623.50 and 1,413.50; the value column is right.
- **Row 14.** Say "are billed". Buyers from 2025 can still apply for 2026.
- **Row 28.** The zone is the zone FEMA rated the policy in. Zone V is a small group: 141 policies. On FEMA's current-zone field, its median is $2,787.
- **Row 32.** The 3,705 houses cover the whole MLS area: only 2,987 of the house points are in Horry County. Say "on the Grand Strand", and say septic is "more common inland".
- **Row 36.** The agency is with the brokerage firm.
- **Row 39.** Use the rules-fit version only. No quotation marks, and no name.

## Claims that should not be published

- Row 27 as written.
- Any 15 percent reserve rule credited to Fannie Mae or to "conventional loans" in general.

## Photo licences (PLAN.md candidates)

| File | Licence on the file page | Author | Note |
|---|---|---|---|
| TS Debby flooding on Sixth Ave. S.jpg | CC0 1.0 ("I, the copyright holder of this work, hereby publish it under the following license": CC0). Own work. | Johnson524 | Description: "Flooded street on Sixth Ave. S in North Myrtle Beach, SC, during Tropical Storm Debby", 6 August 2024. 5712 x 4284. |
| TS Debby flooding on US 17 N.jpg | CC0 1.0. Own work. | Johnson524 | Description: "Flooded street on US 17 N in North Myrtle Beach, SC, during Tropical Storm Debby", 6 August 2024. 4032 x 3024. |
| New Horry County Courthouse and county office complex, Conway, South Carolina (18 November 2006).jpg | CC BY-SA 3.0 Unported, and GFDL 1.2 or later | Pollinator at English Wikipedia | Credit is required: "Pollinator at English Wikipedia, CC BY-SA 3.0". It was taken in 2006, and the page needs no photo of it. |

Wikimedia returned 429 to my downloads of the image files themselves, so I could not look at them. The builder must open each one at full size before using it. Check that the caption says only what the photo shows.
