# Verify: /sell/repairs-before-selling/

Batch 2026-11-n, Lane N. Independent verifier, 2026-11-08. I did not research these rows. I opened every source myself and re-ran every data script. The full note for each row is in `facts.md`, in the verifier note column. The struck wording is in `sell-repairs-before-selling-struck.json` (20 entries). Each struck sentence fires its entry and each approved sentence fires none. `node tools/struck-check.test.js`: all controls pass.

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 7: rows 5, 7, 8, 11, 14, 17, 22 |
| CORRECTED | 18: rows 1, 2, 3, 4, 6, 9, 10, 12, 13, 15, 16, 18, 19, 21, 23, 24, 25, 26 |
| STRUCK | 0 |

There is no row 20. Nothing in the ledger has to be kept off the page entirely except row 26, which was already marked not for the page.

## Data re-run

- `pull-acs.sh` and `pull-noaa.sh` were re-run into `<scratch>/wfn/sell-repairs-before-selling/verify/raw/`. All 13 files are byte-identical to DATA. The 2025 variable labels (api.census.gov/data/2025) match the 2024 labels the script uses.
- `build_findings.py` was re-run on a copy of DATA. The output is identical to `findings.json`.
- `pull_listing_counts.py` was re-run at about 08:00 UTC (`verify/lc/`). It found 1,998 houses against 2,002 at 06:50; four houses left the market. Every feature count is the same or one lower. Bands still add up to the whole-county total.
- Arithmetic redone for rows 2, 3, 5, 6, 24, 25 and 26.

## Sources that moved

- HUD Handbook 4000.1: cite the clean Update 18, `https://www.hud.gov/sites/default/files/Housing/documents/40001-hsgh-Update-18.pdf` (Last Revised 8/12/2026, linked from hud.gov/hudclips/handbooks/housing), not the redline. Every quote in rows 7 to 11 is in the clean file.
- SC Code Title 27, Chapter 50: `https://www.scstatehouse.gov/code/statmast.php?title=27&chapter=50`. The old `t27c050.php` address returns 404.

## Corrections

1. **Row 1.** "Younger than most" is struck. Write "younger than the state's and the nation's".
2. **Row 2.** "The largest of any decade" is struck. The 2000s (48,745, MOE 4,750) and the 2010s (46,153, MOE 3,894) are within each other's margins. Write "about as many as from 2010 to 2019".
3. **Row 3.** The 55 times figure is for connections at outlets, from a survey done for CPSC. Write "a wire connection at an outlet" and "a national survey done for the CPSC".
4. **Row 4.** "Standard quality" and "under average conditions" are not in HUD's table. Write "HUD's recommended average useful life".
5. **Row 6.** "Work almost twice as hard" is struck. Write "averages about twice the cooling degree days". A degree day is counted on the day's average temperature.
6. **Row 9.** "CL-100" is not on any primary page I could open. Write "the Official South Carolina Wood Infestation Report, the report people here call the CL-100". Never call CL-100 the official form number.
7. **Row 10.** "Cannot be financed" is struck. Fannie Mae does not buy a loan on a C6 house, and the fix is due before it buys the loan.
8. **Row 12.** Two phrases are struck: "the most used form" and "state-run insurer". Write "a sample form from Citizens Property Insurance, a Florida insurer". The form asks the HVAC system's age and the year it was last updated, not its last service.
9. **Row 13.** "A new roof is a permitted job" and "a new roof in the county comes with a permit" are struck. The letter shows only that a roof job carries a permit number and a notarized high-wind certification. It does not say "unincorporated" or when a permit is needed.
10. **Row 15.** "Anywhere" is struck. Write "in every part the inspector can see and reach".
11. **Row 16.** Write "even damage left in places that were repaired before". Write "it does not oblige the pest company to fix what it finds", not "does not require anyone".
12. **Row 18.** Attorney fees go to the winner, either side. Write "the winner's attorney fees". The con needs its other half. The state form says an owner who attaches a report is not liable for its mistakes unless grossly negligent (LLR form 06.2025, page 1).
13. **Row 19.** "South Carolina law does not make a seller fix anything" is struck. The whole Code was not searchable from here. Write "South Carolina's disclosure law does not require a seller to make repairs".
14. **Row 21.** "Were cheap" is struck. NAR gives no costs.
15. **Row 23.** The carve-out was missing. Repair work done as part of a larger remodeling job can go into basis. The roof example is the IRS's own ("New roof" is in its improvements chart).
16. **Row 24.** "Fewer than 1 in 100" is wrong for heating and air (10 of 852). Write "about 1 in 100".
17. **Row 25.** Write "for sale" and "list a slab foundation".
18. **Row 26.** The sentence is wrong. The new-roof houses cut their price less often in two of three bands. The result is mixed, and the row stays off the page.

## Photos (PLAN.md)

Each file page was opened on Wikimedia Commons, and each picture was looked at.

| Photo | File page says | Usable |
|---|---|---|
| 1. Failure of asphalt shingles allowing roof leakage.JPG | Own work, DMahalko (Dale Mahalko), Gilman, Wisconsin, 13 June 2009. CC BY-SA 3.0 only. It shows curled shingles with the grit worn off in patches, above a gutter. | Yes. Credit: "Photo: DMahalko, Wikimedia Commons, CC BY-SA 3.0". Do not say where it was taken. |
| 2. Termite damage.JPG | Own work, Alton, 2 May 2007. GFDL, CC BY-SA 3.0, or CC BY-SA 2.5/2.0/1.0 (choose one). Caption "Termite damage to wood". Categories: "Wood damaged by termites" and "Unidentified Isoptera". No place is given. It shows painted siding eaten at the bottom, above a block foundation, beside a screened vent. | Yes, under CC BY-SA 3.0. A caption may say termite damage. Never say it is local or name a species. |
| 3. Crawlspace under house.jpg (backup) | Own work, user "TradeCrawlspaces", 7 February 2020. CC BY-SA 4.0. It shows a crawlspace through an open access panel, with a vapor barrier partly covering the dirt floor. | Yes. The uploader's name looks like a business account, but no logo is in the frame. The partner's shot is still the better choice. |

No image file is in `images/2026-11-n/sell-repairs-before-selling/` yet. Each photo needs its licence record before `tools/photos.js` will accept it.

## For the lead

- Row 9 and the sibling pages /buyers/buying-in-myrtle-beach/ and /buyers/closing-costs/ call the report the CL-100 as if that were the form number. No primary page confirms the number. A Clemson DPR page or the form itself would settle it.
- Row 18 matches /sell/seller-disclosure/ row 26. Use the same words on both pages.
