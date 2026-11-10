# Verify: /invest/strategies/dscr-loans/ (batch 2026-11-b)

Independent verifier, 2026-11-10. I did not research this page. I downloaded every source again and read it myself. I re-ran `build_findings.py` from a copy in my scratch folder against the website working copy. Its `findings.json` and `chart-rent-split.json` are identical to the researcher's. For carried rows I read the named ledger rows and their verifier notes.

**Counts:** 43 rows. VERIFIED 31. CORRECTED 12 (rows 2, 4, 5, 7, 8, 11, 13, 20, 22, 32, 42, 43). STRUCK 0.

Struck list: `batches/2026-11-b/facts/invest-strategies-dscr-loans-struck.json`, 19 entries. It holds my corrections and the researcher's "struck from the live page" items 1, 2, 4, 5, 6, 7 and 9. Each struck wording fires its own entry, and no approved wording fires any entry. `node tools/struck-check.test.js` passes. Run against today's live page, it finds 13 struck phrases, as expected.

## What I opened

- **ELEND, NONI, SHARP** (the three program sheets) and **Fannie Mae B3-6-03**: downloaded again today. All four are byte-identical to `DATA/raw/dl/`. I read every page of each.
- **New sources** (copies in `DATA/raw/verify/`): MAXEX DSCR Program Guide, version 13 (2026-05-15). Clear Edge Lending's DSCR sheet (09.2025). CFPB, Regulation Z official interpretation of 1026.3.
- **SC Code** 12-43-220 and 12-37-220: re-opened, and the quoted text is unchanged.
- **Clovered** landlord and condo pages: re-opened. Both say "Updated on Oct 4, 2024", and the figures are as quoted.
- **stories.json**: every story the ledger quotes. Each verbatim matches.
- **Carried rows**: RTN, WTB, WT, AI (and its VERIFY.md), CF (and its VERIFY.md), HRR (and its VERIFY.md).

## Rows

| # | Status | Note |
|---|---|---|
| 1 | VERIFIED | I found all three definitions as quoted. SHARP divides by ITIA on an interest-only loan. |
| 2 | CORRECTED | The quote is found. But PITIA here is Fannie Mae's definition, and the DSCR sheets use the term without defining it. HOA dues are the "A". ELEND says "Flood insurance must be escrowed." A special assessment counts only by Fannie's definition. Use: "The HOA fee counts against the rent, and a special assessment can count too; ask your lender [Fannie Mae B3-6-03; ELEND]." |
| 3 | VERIFIED | Both ELEND quotes are found. **Ruling on "no tax returns or pay stubs":** it may appear once, in these words: "The lender qualifies the loan on the rent, not on your income." Sources: MAXEX guide 10.1 says the application's employment and income section "must not be completed", and that loans carrying income documents beyond those it permits "are not eligible". Clear Edge: "No Personal Income or Employment Required". SHARP: "TRANSCRIPTS Not required". Once, not six times. One limit: SHARP asks a non-permanent resident for 2 years of work in the same line. |
| 4 | CORRECTED | I opened the primary source, the CFPB's Reg Z commentary. The rule is comment **3(a)-4**, not 3(a)-5: "If the owner expects to occupy the property for more than 14 days during the coming year, the property cannot be considered non-owner-occupied and this special rule will not apply." It takes away the deemed-business rule. On its own it does not make the loan consumer credit. Use: "If you expect to stay in the home more than 14 days in the coming year, federal rules no longer treat it as a rental the owner does not live in, and the business-loan exemption may not apply. Tell your lender early [Reg Z comment 3(a)-4]." SHARP also bars the borrower, the LLC's members and "any family member" from living there. |
| 5 | CORRECTED | The quotes are found. NONI's "≥ 1.25" heads its loan-to-value table. It is not a price tier. Its 1.15 applies to a cash-out on a home owned less than 6 months. "Most published programs" rests on three sheets, and some programs go below 1.00 (row 26: 0.75). Use: "The three program sheets we read ask for a ratio of 1.00 or more, and some ask 1.15 for a nightly rental or 1.25 on a small loan [ELEND, SHARP, NONI, 2025-2026]." |
| 6 | VERIFIED | Matches RTN rows 22 and 32. |
| 7 | CORRECTED | The ELEND and SHARP quotes are found. The third sheet, NONI, has a 660 tier (at lower loan-to-value). The floors are 660, 680 and 720. "High 600s and up" is struck. Use: "The program sheets we read set credit score floors from 660 to 720." |
| 8 | CORRECTED | The ELEND and NONI quotes are found. SHARP states no 20 percent cut and asks for a 1.15 ratio on a nightly rental instead. Both sheets that cut use the actual costs when those are over 20 percent. Use: "Two of the three program sheets count at most 80 percent of nightly-rental income; the third asks for a 1.15 ratio instead." "Lenders count 75 to 80 percent" stays, with row 26. |
| 9 | VERIFIED | All three quotes are found. NONI also accepts an AirDNA Rentalizer projection on a purchase. |
| 10 | VERIFIED | Both quotes are found, in ELEND's short-term section, which covers refinances only. SHARP also requires a third-party report that the town allows short-term rentals. |
| 11 | CORRECTED | RTN row 1 is CORRECTED, not VERIFIED, and this row repeats the wording RTN's verifier corrected. Use RTN row 1's wording: "A home that is not its owner's legal residence, such as a house rented out year-round or a second home, is taxed on 6 percent. A legal residence rented out more than 72 days in a calendar year loses the 4 percent rate." The school operating exemption is in 12-37-220(B)(47), which I re-opened. |
| 12 | VERIFIED | Matches RTN rows 3 and 33 and WTB row 21. 100,000 x 0.06 x 207.3 / 1000 = 1,244. WTB 21's limits carry over: say "most homes" outside the towns, because 3,301 of 9,543 Longs homes are in district 250 at 203.8 mills. The figures are before fees and at the full price. |
| 13 | CORRECTED | The four rents match RTN row 11, but that row is CORRECTED, not VERIFIED. The 40th percentile is set across the metro area and then adjusted for each ZIP. Use: "HUD sets its fair market rent at the 40th percentile of rent plus utilities for a standard unit across the metro area, then adjusts it for each ZIP code." |
| 14 | VERIFIED | Matches RTN row 15, which is VERIFIED there, not CORRECTED as this ledger says. Write "the middle house's HOA fee". These are asking prices. Stale on 2026-12-01. |
| 15 | VERIFIED | Myrtle Beach, $350,000 house: $3,299 on average. Condo policies: $36 to $81 a month. The top band ($100,000 and over) is $976 a year. Print "$81 a month", as the sibling page does. These are one agency's 2024 estimates, and the condo figures are for a unit its owner lives in. |
| 16 | VERIFIED | Re-run identical. Label the tax "outside city limits" and "most homes". 138 of 758 sales in ZIP 29568 were inside North Myrtle Beach, and district 250 is at 203.8 mills. At 203.8 the share is 30.9 percent, so "about 31" holds. |
| 17 | VERIFIED | Arithmetic redone. Label it "outside city limits". |
| 18 | VERIFIED | Arithmetic redone. Keep it, labeled "at HUD's 2-bedroom figure for the ZIP". Never write "the rent this condo gets". |
| 19 | VERIFIED | Arithmetic redone; the dues are 38.7 percent of the rent. Label it "a condo inside the city". |
| 20 | CORRECTED | Arithmetic redone: 1,575 counted; 1,722 for tax, insurance and HOA; 109.4 percent; ratio 0.91. With AirROI's $390 line instead, 106 percent. **Cut "At 80 percent it is still about 102 percent."** AirROI's November 5 update raises the two-bedroom average from $25,100 to $26,900, and on that update the 80 percent case falls to about 96 percent. That figure is my estimate, scaling the gross by the two-bedroom average. The 75 percent finding holds on both updates (about 102 percent, ratio about 0.98). Carry AI row 19's limits: "a typical oceanfront two-bedroom ... at the nights the average listing books, counting listings open only part of the year", and the HOA fee printed as "about $1,200 a month". |
| 21 | VERIFIED | Arithmetic redone: 1,678 counted, 60.3 percent, 19.7 percent left. Carry AI row 20's limits: say "about two dozen" for sale, and the group is every condo in the town marked for nightly rentals. On the November 5 update the share would be about 57 percent; the lead's AirROI call covers it. |
| 22 | CORRECTED | Arithmetic redone (1,256, 1,340 and 1,569). AirROI's median counts listings open only part of the year. Use: "The middle two-bedroom nightly rental in the Myrtle Beach area took in about $20,100 in a year, counting listings open only part of the year." Never "nightly rentals earn less". |
| 23 | VERIFIED | HRR rows 1 and 2 were VERIFIED on 2026-11-10, and the values match. Print them with HRR row 9's method line. |
| 24 | VERIFIED | Matches RTN row 27. Do not cite 27-30-130. |
| 25 | VERIFIED | HRR row 22 was VERIFIED on 2026-11-10. |
| 28 | VERIFIED | All three quotes are found. Write "the three sheets we read". |
| 29 | VERIFIED | CF row 11 is VERIFIED (885 / 1,093). It is a listing flag. |
| 30 | VERIFIED | CF row 1 is VERIFIED. Name Fannie Mae and Freddie Mac in FHFA's words. |
| 26 | VERIFIED | The story matches. `build.js` puts this page in `DOWN_PAYMENT_OK_PAGES`, and `DOWN_PAYMENT_SOURCE` is "BrickWood Mortgage". PLAYBOOK A17 wins over the story's limit: print a range, attributed. A17 also asks for qualitative wording wherever the buyer might stay in the home. In the story, the 75 percent is said of "lenders", so attribute it to "a loan officer at our preferred lender". |
| 27 | VERIFIED | The story matches. It holds only for good credit and a 1.25 to 1.5 ratio. It replaces the struck "rates are higher" line, but not with a flat "rates are the same". |
| 31 | VERIFIED | The story matches. Limit: ELEND takes only U.S. citizens and permanent residents, and SHARP bars foreign nationals. |
| 32 | CORRECTED | The story's "all DSCR programs ... close inside of an LLC" is wrong against ELEND, which allows individuals and revocable trusts. SHARP permits an entity; it does not require one. Use: "A DSCR loan can close in your name or in an LLC; the investor clients we work with usually close in an LLC." "About 9 in 10 form a new LLC for each house" matches the story. |
| 33 | VERIFIED | All three quotes are found. All three sheets refuse a first-time homebuyer: ELEND (FTHB), NONI ("Not Allowed") and SHARP (no home owned in 5 years). |
| 34 | VERIFIED | The story matches. |
| 35 | VERIFIED | The quotes are found. NONI allows a penalty of up to 5 years, and SHARP prices loans with and without one. South Carolina is not on either list of states that bar them. Words only on the page. |
| 36 | VERIFIED | The quotes are found. Give months only. |
| 37 | VERIFIED | The quotes are found. NONI and SHARP have the same 120 percent cap. |
| 38 | VERIFIED | The story matches. |
| 39 | VERIFIED | Both stories match. |
| 40 | VERIFIED | Matches RTN rows 24 and 10. |
| 41 | VERIFIED | The wording matches CF row 29. |
| 42 | CORRECTED | WT row 8 is CORRECTED: 39 percent is "about 2 in 5", not "about 1 in 3". It covers every housing unit in all of ZIP 29568, part of which is inside North Myrtle Beach. WT row 2 says "sales by builders", not "a builder's first sale"; keep "280 of 607" beside it. The 3 percent of houses in the flood zone matches WT row 5. |
| 43 | CORRECTED | The values match WT rows 5 and 8. The heading "almost no flood zone" is about land, and the source counts houses. Use: "Almost no houses in Carolina Forest are in FEMA's high-risk flood zone." |

## Not to publish

- Any wording in the struck list.
- An interest rate, a payment amount, or a down-payment figure outside the one range attributed to BrickWood (row 26).
- The names of the lenders behind the program sheets, or copies of the sheets. Each sheet says it is "for the use of mortgage professionals only".
- "No tax returns, no pay stubs" more than once.
- Any AirROI figure next to a link that invites the reader to check it, unless the lead moves all the STR pages to the November 5 update together (AI VERIFY).
