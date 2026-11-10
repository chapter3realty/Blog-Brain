# Verify: /invest/non-warrantable-condos/ (batch 2026-11-b)

Independent verifier, 2026-11-10. I did not research this page. I opened every source myself and re-ran every data script (`pull_owners.py`, `pull_control.py`, `pull_program.py`, `pull_hud_all.py`, `build_findings.py`) into a scratch folder. All five give the researcher's numbers exactly. The problem is the input: the regime names come from CB's `regimes.json` before the CB verifier's row 5 fixes. With those fixes the base is 43 buildings and 11,471 units, not 45 and 11,822.

New files, in the data folder's `raw/verify/` (no person, unit number or value in any of them):
- `regimes-cb-fixes.json`: the regime names I changed, before and after.
- `findings-cb-fixes.json`, `chart-owner-homes-cb-fixes.json`: `build_findings.py` output on the fixed names.
- `deed-index-top-owners.json`: Horry County deed index, counts by document type for the six top owners in row 19.
- `va-condos-horry-2026-11-10.json`: the VA condo report, Horry County, 229 records.
- `freddie-5701-3.json`: Freddie Mac Guide 5701.3 from the guide's data service.

Struck list: `batches/2026-11-b/facts/invest-non-warrantable-condos-struck.json`, 21 entries. Each struck wording fires its entry. No approved wording fires any entry. The current live page fires none. `node tools/struck-check.test.js` prints "all controls pass".

| Status | Count | Rows |
|---|---|---|
| VERIFIED | 15 | 1, 3, 4, 6, 10, 13, 18, 19, 20, 24, 28, 29, 30, 31, 32 |
| CORRECTED | 17 | 2, 5, 7, 8, 9, 11, 12, 14, 15, 16, 17, 21, 22, 23, 25, 26, 27 |
| STRUCK | 0 | |

Row 31 was "not read" and is now read. Row 32 is for headings only. Rows 1, 3, 13 and 19 are verified with a wording limit given below.

## The rules (Fannie Mae, Freddie Mac, one program)

All three Fannie Mae pages load live: B4-2.1-03 (11/04/2026), B4-2.2-01 (08/05/2026), B7-3-03 (08/05/2026). I also read B4-2.1-01 (08/05/2026) for row 12. singlefamily.fanniemae.com is blocked here (403 to curl, no DNS for WebFetch), so the announcements and LL-2026-03 stay unread.

**Row 1. VERIFIED.** The note's wording is struck. "The two companies that buy conventional loans" was struck on the condotel page (CF row 1).
Use: "Fannie Mae and Freddie Mac, the two companies Congress created to buy mortgages from lenders" [fhfa.gov/about: "Fannie Mae and Freddie Mac were created by Congress ... buy mortgages from lenders"].

**Row 2. CORRECTED.** "The lender must confirm that the project retains its approved status as of the note date" applies when a lender learns of new facts (deferred maintenance, litigation). It is not a re-check at every loan. The status table says each approval or certification must be "valid and unexpired ... as of the note date".
Use: "A building's approval, or the lender's own certification of it, must be current on the day each loan closes [B4-2.2-01]."

**Row 3. VERIFIED, with a limit.** I searched for a public list. Search results quote Fannie Mae's CPM FAQ, which I could not open (blocked):
- the list of projects "Approved by Fannie Mae" is now in CPM;
- the old list on the PERS page "has been retired";
- non-CPM users can get read-only access through their company's administrator.

Write "Fannie Mae publishes no list for buyers to search". Never write that no one can see a list.

**Row 4. VERIFIED.** Every item is in the live table. It is part of the list, not all of it: write "among the reasons". The 10 percent applies to a business that serves the public. The 15 percent covers other income (amenities for owners only, units the HOA took in foreclosure). The claim keeps the two apart correctly.

**Row 5. CORRECTED.** Two things are missing:
- the fourth hotel test: the papers require owners to share rental profits;
- the carve-out to the name test (CF row 3).

Use: "...or its papers require owners to share rental profits. Hotel-type services, resort marketing or a hotel rating also count, and so does a name with hotel, motel or resort in it, unless the word only refers to the building's past use [B4-2.1-03, 11/04/2026]."

**Row 6. VERIFIED.** I searched B4-2.2-01 and B4-2.1-01 for "occup" and "investor". Neither sets an owner-occupancy minimum for an established building.

**Row 7. CORRECTED.** The waiver has four conditions: 49 percent or less, the owner is marketing units for sale, the owner is current on assessments, and there is no pending or active special assessment.
Use: "Fannie Mae can waive the limit on a purchase that lowers that owner's share, if the owner holds 49 percent or less, is marketing units for sale, is current on dues, and the building has no special assessment [B4-2.1-03]."
Freddie Mac's line for 21 or more units is 25 percent, not 20 (5701.3). Do not write "Fannie Mae and Freddie Mac" before "20 percent".

**Row 8. CORRECTED.** The lender must first find that the suit has "no impact on the safety, structural soundness, habitability, or functional use". The insurer case also needs the insurance to cover the amount.
Use: "Some minor suits are allowed when the lender finds no effect on the building's safety, structure, use or livability: one over no money, one the insurer defends and insurance covers, or one over damage to a single unit [B4-2.1-03]."

**Row 9. CORRECTED.** The $10,000 line "does not include repairs made by the unit owner or repairs funded through a special assessment".
Use: "...unfunded repairs over $10,000 a unit due within 12 months, not counting repairs an owner makes or repairs a special assessment pays for [B4-2.1-03]."
The inspection is "structural and/or mechanical", and it counts if it was done within 3 years of the lender's review.

**Row 10. VERIFIED.** The text is unchanged on the live page (08/05/2026).

**Row 11. CORRECTED.** "For conventional loans" includes Fannie Mae. Fannie's live guide (08/05/2026) still says 10 percent, and LL-2026-03 is blocked. Trade and law-firm pages say Fannie matches, but they are secondary.
Use only the hoa-reserves row 16 wording: "Freddie Mac raises the test to 15 percent for applications from January 4, 2027; it says it made the change with its regulator and in alignment with Fannie Mae."
"Fannie Mae in step with it" is not approved.

**Row 12. CORRECTED.** B4-2.1-01 lists Full Review (with CPM), FHA approval, or Fannie Mae's own review for an attached unit in an established building. "Limited Review" appears nowhere in it. Fannie still waives the review for:
- detached units;
- 2- to 10-unit buildings (5 to 10 only when not part of a larger development);
- some refinances.

Use: "For most condo loans, the building's budget and reserves are now checked in a full review." Freddie's retirement of Streamlined Review stands (hoa-reserves row 15, checked against Freddie's FAQ).

**Row 13. VERIFIED.** Every quote is live.
- If the page uses the buy-back line, add its condition: the buy-back policy must meet Fannie's other insurance rules, the insurer's rating included.
- The note says "Fannie Mae also checks insurance itself". That is wrong. B4-2.2-01: "Fannie Mae does not review insurance policies as part of the review process". The lender checks, and Fannie refuses delivery when a building is marked Unavailable for insurance reasons.

**Row 14. CORRECTED.** I re-read the SC Wind slides (scstatehouse.gov) and agree with ho6 VERIFY row 21.
- The condo counts hold. They are the pool's own condo business: 70 associations on 2024-01-01, 20 on 2025-01-31, 8 on 2025-07-15.
- "92 percent with private insurers" is wrong. The pool insures about 8 percent of homes in its territory. The rest are not all privately insured.
- "38 percent of its own policies" has no base on the slide, and it covers mostly houses.
- The inference "big percentage wind deductibles are common on this coast" has no source for condo master policies. Cut it.

Use at most: "The state's wind pool insured 70 condo associations on January 1, 2024, and 8 by July 15, 2025 [SC Wind, July 2025]."

**Row 15. CORRECTED (minor).** Every quote is on the live PDF. The 49 percent has conditions:
- units that come vacant must be listed for sale, not leased again;
- existing leases are not extended;
- no bulk sales over 10 percent.

Use "up to 49 percent, with conditions". Never suggest that BrickWood uses this program.

## Our findings

**Method checked.** I read the 4 percent test against the raw parcel ratios.
- Most units are at 0.06. The homes are at 0.04.
- Anderson Ocean Club has a few at 0.061 and 0.063 and none at 0.04.
- Maisons Sur-Mer has 63 at 0.04 under the old names, 70 with the fixes.

The test does what the README says.

**The base (rows 16, 17, 22, 23).** The CB verifier (CB VERIFY row 5) did two things. It cut the county counts for Myrtle Beach Resort and Ocean Creek, because their regimes are incomplete. It added spellings on the same footprint for Maisons Sur-Mer, Sands Ocean Club and Beach Cove. CF's verifier applied the same fixes and got 11,471 units in 43 buildings. My run on the fixed names gives the same 11,471.

| Figure | Ledger (old names) | With the CB fixes |
|---|---|---|
| Buildings with a county count | 45 | 43 |
| Units | 11,822 | 11,471 |
| Taxed as the owner's home | 545 (4.6%) | 528 (4.6%) |
| Middle building | 3.5% | 3.3% |
| Under 10 percent | 39 of 45 | 37 of 43 |
| At zero | Anderson, Dunes Village, Holiday Inn Pavilion, Ocean Reef | same four |
| 75 percent or more not taxed as home | 44 of 45 | 42 of 43 |
| Maisons Sur-Mer | 63 of 229, 27.5% home, 72.5% not | 70 of 252, 27.8% home, 72.2% not |
| Owner mailing address outside SC | 8,375 (70.8%) | 8,092 (70.5%) |
| Single-owner regimes over 20% | 6 buildings | same 6, same counts |

The lead should rebuild `findings.json`, `chart-owner-homes.json` and `table-buildings.json` from the fixed regime names. The fixed names are in `raw/verify/regimes-cb-fixes.json`. The cleaner fix is in CB's `regimes.json` itself, but that file is CB's to change. The chart's bottom bar label changes to "All 43 oceanfront towers".

**Row 16. CORRECTED.** Use: "Of 11,471 condo units in the 43 directory buildings with a county count, 528 (4.6 percent) are taxed as the owner's home. In the middle building, 3.3 percent are." The four at zero hold.

**Row 17. CORRECTED.** Use: "By the county's tax records, at least three of four units in 42 of the 43 buildings are not the owner's home. That is one of the signs Fannie Mae tells a lender to look harder at."
The chart's note says "when 25% or fewer are homes". Keep the "by tax records" limit there too: not taxed as a home is not the same as owned as an investment.

**Row 18. VERIFIED.** The control re-ran to 716, 352 and 49.2. HUD: "800 UNITS, Single and Duplex units", Approved, expires 03/04/2028.

**Row 19. VERIFIED, as a floor.** The counts re-ran the same. Avista is 40 of 194, 20.6 percent: "21 percent" rounds correctly. I read the county deed index (AcclaimWeb), not the deed images:

| Top owner | What the index shows |
|---|---|
| Lawyers Title Insurance Corporation (SeaWatch) | 1,973 of its 1,982 records from 2025 to 2026 are "DEED (TIMESHARE)". 163 of them are for SeaWatch's towers, indexed "HPR SEAWATCH TOWERS UNITS AND WEEKS" and "SEAWATCH NORTH TOWER" |
| Ocean Club Vacations LLC (Anderson Ocean Club) | 8,691 "DEED (TIMESHARE)" records since 2024, indexed "HPR ANDERSON OCEAN CLUB WK [n] U/APT/CONDO [unit]" |
| Towers on the Grove South LLC | "DEED (TIMESHARE)", "HPR TOWERS ON THE GROVE UNITS AND WEEKS" |
| Sands Development South Carolina Inc | One 2018 deed indexed "SANDS OCEAN CLUB WK 34". Nothing else |
| Prince Resort Rental Management LLC | Mortgages and assignments of rents. No timeshare document type |
| Avista Development LLC | Developer deeds and waivers of first refusal. No timeshare document type |

At Anderson Ocean Club, Towers on the Grove and SeaWatch, then, the top holder is a timeshare seller or trustee. Fannie Mae and Freddie Mac both list timeshare projects as ineligible. Two rules for the page:
- Never present these three as "one company holds 58 percent". If the page names them at all, write: "County deed records show timeshare weeks sold in [building] [Horry County deed index]."
- The other three (Prince, Sands Ocean Club, Avista) stay unnamed. A count alone is not a lender verdict, and developer units may be left out of Fannie's count.

Related names add more units:
- Towers on the Grove: 155 of 236 with "WYNDHAM VACATION RESORTS INC".
- Avista phase II: 47 of 186 with "AVISTA DEV LLC", 25.3 percent.

Freddie's line is 25 percent. SeaWatch's north tower (20.2) and Avista (20.6) are under it.

**Row 20. VERIFIED.** The re-run gives 965 and 795 (82.4 percent), and 16 buildings at 90 percent or more. I checked "only" on all 45 buildings with listings: no building with fewer than 5 listings is under half either.

**Row 21. CORRECTED** (CF row 16): 23 of 47, because Monterey Bay Suites goes by "Monterey Bay Suites Resort".

**Row 22. CORRECTED.** 8,092 of 11,471 (70.5 percent). 2,045 of these units have a company-named owner, so this is not a count of people from away.
Use: "about 7 in 10 units have an owner mailing address outside South Carolina, company owners included."

**Row 23. CORRECTED.** Maisons Sur-Mer is 27.8 percent. Ocean Forest Plaza (23.8) and Margate (18.3) hold, and so do their listing counts. Margate's wow line: only CB row 60's safe wording, "about 330 feet, the tallest building in Myrtle Beach".

**Row 24. VERIFIED.** The HUD re-pull is identical: 117 records, 9, 26, 78, 4. 54 of the 78 rejected records read single-unit approval in their composition field: "most" holds. The Caravelle's own site lists Sea Mark Tower among its "nine buildings" (read today).

**Row 25. CORRECTED.** I re-pulled the VA report (229 Horry County records) and matched it to the 47 by name and street number. At least 6 are accepted:

| Building | VA record | Review |
|---|---|---|
| Beach Cove Resort | Beach Cove Resort HOA, Inc | 2022-06-24 |
| Myrtle Beach Resort | The Renaissance Tower, 5905 S Kings Hwy | 2026-02-17 |
| Monterey Bay Suites | 6804 N Ocean Blvd | 2020-04-22 |
| Sands Ocean Club | Sands Ocean Club HOA Inc, 9550 Shore Dr | 2026-05-08 |
| Crescent Shores | 1625 S Ocean Blvd | 2025-05-21 |
| Mar Vista Grande | 603 S Ocean Blvd | 2021-05-26 |

Maisons-Sur-Mer's review was rejected (2013). This matches CF row 8.

**Row 26. CORRECTED** (CF row 6, HUD Handbook 4000.1). A condo buyer does not sign HUD-92561.
Use: "FHA will not insure a loan on a condotel, and it will not approve a condo building that is a condo hotel or has a required rental pool."

**Row 27. CORRECTED** (CF row 17). Use: "About 780 units sold one at a time by recorded deed in a year, in the 43 directory buildings with a county count."

## What we see, and the loan

**Row 28. VERIFIED.** The story text matches `rental-program-buildings`.

**Row 29. VERIFIED, gated.** `build.js` has `/invest/non-warrantable-condos/` in `DOWN_PAYMENT_OK_PAGES`, and `DOWN_PAYMENT_SOURCE` is "BrickWood Mortgage". PLAYBOOK A17 matches.
- Print the number only in a sentence about a rental the buyer will not use more than 14 days a year.
- A17 also says "State it as a range". "About 25 percent down, against 20 percent" fits.

**Row 30. VERIFIED.** The disclosure matches the live page. The footer partial carries the longer AfBA text. BrickWood's site calls it a mortgage broker that works with many national lenders, and it lists Condotels.

**Row 31. VERIFIED, now read.** guide.freddiemac.com answers its data service (`/cc/data/getAnswerById/answerId/1000687`): 5701.3, effective 05/06/2026. It lists as ineligible:
- condominium hotels;
- timeshare or segmented ownership;
- projects in litigation;
- single-investor concentration over 25 percent in projects of 21 or more units.

**Row 32. VERIFIED.** The GSC rows and the four suggestions are in the files. Headings only.

## Do not publish

- Any sentence that Fannie Mae requires 15 percent reserves (row 11).
- "Every condo loan gets a full review" (row 12).
- "Fannie Mae checks the insurance itself" (row 13 note).
- "Wind deductibles of 5 or 10 percent are common on this coast" (row 14).
- Any count on the 11,822 base, or "44 of 45" (rows 16, 17, 22, 23).
- Anderson Ocean Club, Towers on the Grove or SeaWatch named as "one company holds" a share (row 19). The deed index says timeshare.
- "2 of 29" for VA (row 25), or the FHA 30-day signature on a condo page (row 26).
- Any owner's name (row 19).

## For the lead

- Rebuild the three data files from the fixed regime names (see "The base").
- A new fact the page may use, verified here: county deed records show timeshare deeds by the week in Anderson Ocean Club, Towers on the Grove and SeaWatch's towers [Horry County deed index, read 2026-11-10]. It ties to the timeshare line in Fannie Mae's and Freddie Mac's lists (rows 4, 31). It is a true and plain reason some buildings are non-warrantable.
- Fannie Mae's CPM FAQ and LL-2026-03 need singlefamily.fanniemae.com, which this session cannot reach.
