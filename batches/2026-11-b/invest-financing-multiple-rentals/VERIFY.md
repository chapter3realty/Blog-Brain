# Verify: /invest/financing-multiple-rentals/

Batch 2026-11-b. Independent verifier, 2026-11-10. I did none of the research. Ledger: `facts.md` in this folder (46 rows). Struck list: `batches/2026-11-b/facts/invest-financing-multiple-rentals-struck.json` (the 13 entries of 2026-11-a, carried over, plus 9 new).

**Counts: 37 VERIFIED, 9 CORRECTED, 0 STRUCK.**

## What I opened and re-ran

- **Fannie Mae Selling Guide** (published November 4, 2026), ten sections fetched today (HTTP 200): B2-1.3-03, B3-4.3-15, B3-4.1-01, B3-3.8-01, -02, -03, -05, B2-2-03, B2-2-01, B2-1.1-01. Every quote in rows 2 to 15 and 41 was searched in the text. Section dates: as the ledger says, except **B2-1.1-01, now dated 11/04/2026** (it was 10/05/2022 at the last check). Its second-home text changed (row 15).
- **Freddie Mac** maximum LTV table (HTTP 200): the cash-out rows are unchanged. Fannie's Eligibility Matrix: 403 for me too.
- **HMDA**: both county files re-downloaded from the FFIEC data browser API. They are byte-identical to `raw/hmda/`. I counted every HMDA figure in rows 33 to 40 and 45 with my own script (not `hmda_rentals.py`). Every count, rate, median and lender count matches.
- **Regulation C** (12 CFR 1003.3, and the commentary to 1003.2, 1003.3 and 1003.4) and **Regulation Z** comment 3(a)-4, on consumerfinance.gov, to test what HMDA leaves out.
- **Regulation B** Appendix C and the HMDA field codes (lar-data-fields): quotes found.
- **CFPB** HELOC booklet (PDF) and the answer page: quotes found.
- **Connexus** credit union FAQ: quote found.
- **Zillow ZHVI** metro file re-downloaded: every value in rows 16 and 17 and `chart-equity-by-year.json` matches.
- **County deeds and parcels**: `from-2026-11-a/verify/verify_recount.py` re-run on the same deed weeks and parcel file. Rows 24, 25, 26 and 46 come out identical. The listing part re-ran on today's feed (row 27).
- **SC Code 12-43-220** (HTTP 200): (e), the 72 days and the military carve-out found.
- **HUD Small Area FMR**: huduser.gov answered with a bot challenge (HTTP 202). The $2,230 agrees in a second copy of HUD's FY2027 file in the website's data folder (`data/2026-11-a/invest-where-to-buy/hud-safmr-fy2027.json`).
- **Stories**: `stories/stories.json` for rows 28 to 31. **Live page** (HEAD f96b8050) for row 32.
- Every calculation in rows 17 and 19 to 22 was redone.

## The finding that changes the plan: HMDA misses many lines of credit on rentals

Rows 34 to 36 count lines of credit on rentals and compare them with cash-out refinances and with lines on homes owners live in. The counts are right. The conclusion "a line of credit on a rental is rare here" is not, because HMDA leaves rental lines out by rule:

- A lender that made fewer than 200 open-end lines in either of the two years before does not report lines at all: "An open-end line of credit, if the financial institution originated fewer than 200 open-end lines of credit in either of the two preceding calendar years" is excluded (12 CFR 1003.3(c)(12)). Closed-end loans have a 25-loan threshold (1003.3(c)(11)), so cash-out refinances are reported by many more lenders.
- A business-purpose line is reported only if it is a home purchase, home improvement or refinancing loan (1003.3(c)(10)). Regulation Z deems credit "to acquire, improve, or maintain rental property ... that is not owner-occupied" business purpose (comment 3(a)-4). A line on a home you live in is consumer credit and is always reported by a covered lender. A rental line drawn for any other purpose is not reported.
- A cash-out refinance is a refinancing, so it is reported even when it is business purpose (123 of the 149 are).

So the 17 against 149, and the 17 against 1,228, compare groups that HMDA covers differently. The page may state the counts as "lenders reported". It may not say rental lines are rare, that lenders here put lines on homes and "not on rentals", or that few lenders offer them. The CFPB's general rule (row 42) and one credit union's policy (row 44) do not make it rare here either.

The plan's hero key fact "17 lines of credit on rentals here in 2025" and the chart title "Lenders here put lines of credit on homes people live in, not on rentals" (PLAN.md section on equity) both need to change. A safe chart title: "Lines of credit and cash-out refinances lenders reported in Horry County, 2025". The caption should say that many lines of credit are not reported.

## Corrections

**Row 15.** Fannie Mae changed B2-1.1-01 on 11/04/2026. A second home must now "not be primarily used or operated as a rental property". The old quote "must not be rental property" is gone. Use: "On a second-home loan the home must not be run mainly as a rental, you must use it part of the year, and any rent it earns cannot help you qualify. It must be one unit [FNMA B2-1.1-01, 11/04/2026]." The 2026-11-a safe wording "a second home may not be run as a rental" now overstates; it fires the struck list.

**Row 27** (ledger only). Today's feed (2026-11-10T11:40Z, Horry County only): houses with 3 or more bedrooms, 7 of 2,833 at or under $195,000; condos with 2 or more, 419 of 1,765; townhouses, 28 of 308. Not for the page.

**Row 31.** "So the next purchase needs no new cash from savings" restates the owner's "0 dollars down", which the story's limits ban. It is also not true in every case: reserves must be in the borrower's accounts after closing. Use: "Equity in a home you own can pay toward the next down payment, through a cash-out refinance or a line of credit [story equity-for-next-rental; FNMA B3-4.3-15]."

**Row 33.** The counts are right. "Rentals" is a wider group than the code: HMDA's investment property is any home the borrower will not live in, homes bought to resell included. 26 of the 1,501 purchase loans were on buildings of five or more units. Define it once where the first HMDA figure appears: "homes the borrower will not live in: rentals, and homes bought to resell [HMDA occupancy code 3]". Rows 34 to 40 use that definition.

**Row 34.** Use: "In 2025, lenders reported 17 lines of credit on Horry County investment homes, 149 cash-out refinances on them, and 1,228 lines of credit on homes their owners live in. Many lines of credit are not reported, so these are reported counts, not all lines [HMDA 2025; 12 CFR 1003.3(c)(10), (c)(12)]." Not a hero key fact.

**Row 35.** Use: "Of 56 applications for a line of credit on an investment home that lenders reported deciding in 2025, 35 were turned down, about 6 in 10. On homes owners live in, about 4 in 10 were (of 2,112) [HMDA 2025]." One year, a small group.

**Row 36.** "Few lenders offer it" is not supported: lenders under the 200-line threshold, and lenders that offer lines but made none here, cannot be seen. Use, ledger only: "13 lenders reported making the 17 lines of credit on investment homes in 2025 [HMDA 2025, distinct LEIs]."

**Row 38.** The order is wrong. After debt-to-income (65) comes "other" (52), then not enough cash (36). Two of the 271 denials give no reason (exempt). "Its value or its type" holds: Regulation C comment 4(a)(16)-3 has a lender report the reasons it gave on Regulation B's Form C-1, whose line is "Value or type of collateral not sufficient". Use: "The reason lenders named most was the collateral, the home itself (its value or its type): 120 of 271 denials. Debt compared with income came next, in 65. Not enough cash for the down payment and closing costs was named in 36 [HMDA 2025]." The plan's three-line bold list must not read as the top three reasons; say "among the reasons" or add "other reasons, 52".

**Row 46.** The count, 172 of 5,977, is right. "Almost nobody here reaches the ten-home limit" is not supported. Owned is not financed. The count covers only Horry County homes at the 6 percent rate, while homes elsewhere and a financed home you live in count toward the ten. Use: "About 170 people and companies, not counting resort and timeshare firms, hold ten or more Horry County homes taxed at the 6 percent rate, of about 6,000 who hold two or more [county parcel layer, read 2026-11-04]." The owner's "applies to almost nobody" decides the section's size, not a sentence on the page.

## Rows verified, with limits the writer keeps

- **Row 3**: the widened scope is right. "Real estate" in B3-4.3-15 covers a line of credit on the home you live in.
- **Rows 9, 11, 41**: these are DU rules. B2-1.1-01 requires every investment-property loan to go through DU, so they apply to every standard rental loan.
- **Row 41**: confirmed. B3-4.1-01 lists "an investment property transaction" with no limit on purpose, and its examples include refinances of investment properties. The cash-out case with DTI over 45 percent is not limited to principal residences. On the refinance of the first rental, the 2 percent of other balances applies too. The row may go on the page.
- **Row 13**: eligible gift funds (not gifts of equity) and borrowed funds secured by an asset may also count as reserves. Never write that reserves must be savings.
- **Row 18**: HUD's site was blocked today. The figure rests on the 2026-11-04 verifier's parse and a second copy of HUD's file.
- **Row 42**: the booklet's back page says "Last updated September 2026". The ledger's "October 2026 print" is the file name only.
- **Rows 44 and 45**: ledger only.

## Should not be published

- "A line of credit on a rental is rare here", "not on rentals", "few lenders offer it", "harder to get" or any claim that rental lines are scarce in Horry County, from HMDA (rows 34 to 36).
- "Almost nobody reaches the ten-home limit" as a fact (row 46).
- "No new cash from savings" and every other paraphrase of "$0 down" (row 31).

## Struck list

`batches/2026-11-b/facts/invest-financing-multiple-rentals-struck.json`: 22 entries. Rows 15, 31, 33, 34 (two), 35, 36, 38 and 46 are new. The 2026-11-a entries carry over with "2026-11-a" in their row names. Row 27's "use" is now an instruction, since the counts change daily. I checked that every entry fires on its own struck wording and that no approved wording fires any entry. Three sentences in PLAN.md fire it: the equity section's "it is rare here", the chart title "not on rentals", and "Almost nobody here reaches it". `node tools/struck-check.test.js`: all controls pass.

My scripts and downloads: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/verify-fmr/` (`scripts/v.py` for the HMDA counts, `recount.json` for the deed and parcel re-run, `dl/` for the source copies).
