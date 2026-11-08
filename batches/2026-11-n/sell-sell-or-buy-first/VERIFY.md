# Verify: /sell/sell-or-buy-first/

Batch 2026-11-n, Lane N. Independent verifier, 2026-11-08. I did not research these rows. I opened every source myself and re-ran every data script. The full note for each row is in `facts.md`, in the verifier note column. The struck wording is in `sell-sell-or-buy-first-struck.json` (13 entries). Each struck sentence fires its entry, and no approved sentence fires any entry. `node tools/struck-check.test.js`: all controls pass.

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 8: rows 3, 4, 6, 7, 8, 10, 20, 21 |
| CORRECTED | 12: rows 1, 2, 5, 9, 11, 12, 13, 14, 15, 17, 18, 19 |
| STRUCK | 1: row 16 |

## Data re-run

- `match_moves.py` was re-run twice into a separate folder (`<scratch>/wfn/sell-sell-or-buy-first/verify/`): once with the default filter and once with `MAXF=2`. It used the sibling's deed and parcel files and the same `assess.json`. `moves.json` and `moves-strict.json` are identical to the files in DATA. `timing.py` and `build_charts.py` reproduce `timing.json` and `chart-moves.json` byte for byte.
- **The deeds are real.** I picked 20 pairs at random from the 1,749 and searched the live AcclaimWeb DEED (001) index by recording day. 20 of 20 matched. Both deeds exist at the stated book, page and date. The seller's full name on the sale deed is the buyer's full name on the purchase deed. The considerations match.
- **The assessments are current.** I re-read 60 random purchased parcels on GIS layer 24. Assessed value, taxable value, deed book and deed page all match `assess.json`.
- **No double counting.** The 1,749 have 1,749 different seller names and 1,749 different purchased parcels.
- **The trend in row 3 holds.** I re-ran it with July to October sales only, so each year covers the same months. Same week rose from 18.6 to 41.7 percent, and sold first fell from 47.7 to 21.8. I also re-ran it on all 3,233 matches, without the 4 percent filter. Same week rose from 21.0 to 33.3, and sold first fell from 47.1 to 30.8.
- **Zillow.** I downloaded both metro files again today. The Myrtle Beach, SC rows (RegionID 394898) and the United States rows are identical to the sibling's copies.

## Corrections

1. **Row 1.** The bucket is 7 days or fewer apart, not a calendar week. Write "within 7 days of each other", or "within a week of each other", not "within the same week". Also write "a home they still own as their legal residence", not "the home they now live in".
2. **Row 2.** The person filter keeps only names with three or more words. Write "one person, named with a first name, a middle name or initial and a last name".
3. **Row 5.** 164 of 584 is 28.1 percent. That is "more than 1 in 4", not "about 1 in 4". The records show the purchase, not the search, so write "bought the next home", not "found".
4. **Row 9.** The rule is Fannie Mae's. It covers a loan sold to Fannie Mae, not every regular loan. "Only" is wrong: the same topic sends a home kept as a rental to the rental-income rules. Use the wording in the note.
5. **Row 11.** Fannie Mae says only that a bridge loan cannot be secured by the new home. It does not say a bridge loan "borrows against the home you still own". Use: "a bridge loan can be a source of money for the purchase if it is not secured by the new home and the lender documents ...".
6. **Rows 12 to 15 and 17: the SC REALTORS forms changed.** The public copies are SCR310 and SCR504 dated 1/2020, and SCR505 dated **11/2017, not 1/2020**. SCR revised its forms in 2026. Charleston REALTORS ran a course in June 2026 called "Mastering the 2026 SCR Forms Updates". It covers the residential sales contract and key addenda.
   - An agent newsletter from about November 2025 describes a different SCR504 (Carolina Elite Real Estate; a secondary source). It has two dates: one by which the buyer's house must be under contract, and one by which it must close. Backup offers go on SCR545, not SCR391. Termination is on SCR313.
   - Keep only what the 1/2020 forms, the 2018 FAQ and that description agree on:
     - an offer that depends on a sale uses SCR504;
     - the buyer's sale must close by a date, or either side can end the contract by notice;
     - the buyer must make a good-faith effort to sell and keep the seller informed;
     - the seller may keep marketing the house and take a backup offer;
     - an SCR505 notice gives the first buyer four choices.
   - Cut these unless owner question 2 confirms them against the form the brokerage uses today:
     - the checkbox placement in SCR310;
     - the seller's cash/loan carve-out;
     - "the contract goes on without the condition";
     - the copy-of-each-contract and closing-notice duties;
     - "if the buyer does nothing, either side can end it";
     - "no set 72 hours";
     - SCR391.
   - Do not head the section "The South Carolina kick-out". The SC forms do not use that name.
7. **Row 16, struck.** The FAQ says it is "only accurate as of 5/8/18". It rests on the contract's financing section as it stood then, and SCR revised the contract in 2026. The line is optional and close to advice.
8. **Row 17.** The possession quote is from the 1/2020 Form 310. "In writing before closing" is not in the form. Use "at closing, unless seller and buyer agree otherwise in writing". Confirm it against the 03/2026 contract with owner question 2.
9. **Row 18.** The first sentence is verified on B2-1.1-01 (11/04/2026). The source does not say a buyer "will not agree to one". Use: "A rent-back longer than 60 days does not fit that rule."
10. **Row 19.** "Both homes can keep the 4 percent rate for the year you move" is not supported. The new home's application certifies that no one in the household claims 4 percent "on another residence" (12-43-220(c)(2)(ii)(B)). Only active-duty military have an express two-home rule ((c)(2)(v)(C)). The row also left out a duty the reader needs: tell the assessor within six months of a change in use ((c)(2)(vi)). Missing it brings a penalty of 100 percent of the tax paid plus interest ((c)(2)(vii)(A)). The ledger's statute URL now redirects; the live text is at https://www.scstatehouse.gov/code/statmast.php?title=12&chapter=43. Use the wording in the note.

## Photo (PLAN.md)

"New Horry County Courthouse and county office complex, Conway, South Carolina (18 November 2006)" on Wikimedia Commons:
- **Licence verified.** CC BY-SA 3.0 Unported (also GFDL). Author: Pollinator at English Wikipedia; transferred to Commons by Machaerus. Credit line: "Photo: Pollinator, CC BY-SA 3.0, via Wikimedia Commons".
- **What it shows.** I looked at it at full size. It shows a two-story brick section with a white pedimented entrance on square white pillars, a porte-cochère on the left, and a three-story brick wing on the right. The file has no coordinates and no readable sign. It matches the published description of the County Government and Justice Center at 1301 Second Avenue, Conway (built 2001 to 2002; two and three stories; a pedimented portico on square white pillars; a three-story wing for the Justice Center). The Register of Deeds gives 1301 Second Avenue as its address.
- **Caption.** Say "Horry County's government and justice center in Conway, where county deeds are recorded (photo 2006)". Do not say the photo is current.

## Not checked

- The 2026 text of SCR310, SCR504 and SCR505 is behind the SC REALTORS member login. Owner question 2 stands, and it now matters more: rows 12 to 15 and 17 depend on it.
