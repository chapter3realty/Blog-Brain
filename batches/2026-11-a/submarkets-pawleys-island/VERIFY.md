# Verify: /submarkets/pawleys-island/

Batch 2026-11-a, Lane U. Independent verifier, 2026-11-02. I did none of the research. I opened every source myself, re-pulled every data set the ledger rests on, and re-ran the researcher's scripts on my own pulls.

The ledger is `facts.md`. Its status and note columns now match this file. Struck wording is in `submarkets-pawleys-island-struck.json` (21 entries). Every entry fires on its own struck text, and no approved wording fires. `node tools/struck-check.test.js` passes.

A CORRECTED row may be used only in its corrected form, as the row's verifier note gives it. A STRUCK row may not be used.

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 31: rows 1, 3 to 11, 13, 16, 17, 20, 23, 25, 27, 28, 30, 32, 34, 36, 38, 39, 41, 42, 44, 47 to 50 |
| CORRECTED | 16: rows 2, 12, 15, 18, 19, 21, 22, 24, 26, 29, 31, 33, 35, 40, 43, 51 |
| STRUCK | 4: rows 14, 37, 45, 46 |

## What I re-ran

- **County GIS.** Re-pulled parcels, address points, roads, boundaries, tax districts, flood zones, OCRM lines, wetlands and both building surveys with `fetch_county.py` and `fetch_buildings.py` into my own folder, then ran `analyze.py` on them. `findings.json` came out identical to the researcher's, key for key.
- **FEMA flood map.** Checked the county flood layer against FEMA's live National Flood Hazard Layer at 40 random island house points: 40 of 40 match on zone and base flood elevation. FEMA's panel for the island, 45043C0390G, is effective May 9, 2023. This closes the ledger's "Not verified" item on the map date.
- **OpenFEMA NFIP policies.** Re-pulled ZIP 29585, June 2025 to May 2026 (3,407 policies). Every row 19 figure matches. The data also carries the CRS class: 5 on all 299 town policies.
- **HURDAT2.** Re-downloaded the 2026-09-23 file and re-ran `hurricanes.py`: identical output.
- **Census.** Re-read every table cell in rows 5 and 38 from the Census API.
- **OSRM.** Re-ran all seven routes: same minutes and miles.
- **CRM.** Re-pulled the listings and re-ran `analyze_listings.py`: same totals and groups.
- **Town pages, SC Code, county tax calculator, ST-575, NRHP nomination, budget.** Fetched fresh. Every quote in the ledger was found. The budget is scanned; I read the page images.
- **My own measures** (scripts in the scratch folder `wf2/submarkets-pawleys-island/verify/scripts/`): the setback gap and the houses past the setback line in a local metre grid; the island road lengths; the "behind the island" group split at the island's south tip; the legal-residence code test on island houses.

## Corrections

1. **Row 2, island road length.** `analyze.py` multiplied the whole road length by cos(latitude), which shrinks the north-south part. In a metre grid the three roads total 4.03 miles, not 3.53. Myrtle and Springs Avenues run side by side, so the sum is not the island's length either. Cut the road measure. Keep the town's "less than 4 miles long".
2. **Row 12, behind the island.** The group runs south to 33.38 N and takes in 97 houses in DeBordieu's sections (Ocean Oaks, Turpentine Ridge, Collins Meadow and others), whose deeds do not name DeBordieu. Six of its 59 sales are theirs, at a middle of $1,925,000. Without them: about 1,200 houses (1,168), 53 sales, middle about $675,000, middle half $550,000 to $898,000.
3. **Row 15, flood insurance.** Add the condition the town states: "A lender making a mortgage on any of them will require flood insurance."
4. **Row 18, flood share behind the island.** 35.4 percent without the DeBordieu sections: "about a third", not 40 percent.
5. **Row 19, "second home".** FEMA's flag is "not a primary residence", which includes rentals. Write "a house that is not the owner's main home".
6. **Row 21, setback gap.** The 23 feet is a map-scale error. Measured in metres along the island baseline, the gap is 20.0 feet (10th to 90th percentile 19.8 to 20.1 feet). This matches the town's "20 feet" and the statute's minimum.
7. **Row 22, houses past the setback line.** The researcher's band used the same faulty scale. With a true seaward test on a 1 m grid inside each house's largest footprint, at least 20 square metres past the line: island 99 of 217 (north 16 of 41, middle 5 of 38, south 78 of 138); Litchfield 86 of 155. "About 100" holds. Use 78 of 138 and 86 of 155. With any part past the line at all, it is 157 of 217, so keep the "about 200 square feet" threshold in the method note.
8. **Row 24, renourishment.** The work did not end in February 2020: the town's February 21, 2020 newsletter says about 800,000 cubic yards (73 percent) were in place. Say "in 2019 and 2020". The funding comes from an FAQ written before the work: say "planned funding".
9. **Row 26, storms.** "44 tropical storms and hurricanes" is wrong: 9 of the 44 were depressions or weaker at their closest point. Say "44 storms passed within 50 miles; 7 were hurricanes at their closest point".
10. **Row 29, historic preservation.** The town adopted Ordinance 2026-02 (signed September 21, 2026; listed on its Passed Ordinances page). The whole island is now a Local Historic District, with a list of Local Historic Properties built in 1954 or earlier. The owner, a council member or a board member can nominate a house (section 5C), and the council decides, so it is not opt-in. Once listed, outside changes and demolition need a Certificate of Appropriateness; the board can delay a demolition up to 180 days; the listing binds later owners; no permit issues while a nomination is pending. A house not on the list still has no such rule. The town's Historic Preservation page still says "DRAFT" (a live page with superseded text).
11. **Row 31, county fees.** The calculator calls them "Storm Water and Household fees". The island adds $44 (household). District 4 adds $96 ($44 household plus $52 storm water).
12. **Row 33, town revenue.** No property tax and no business license line: verified. State accommodations tax ($480,000) and MASC insurance ($415,000) are half of the $1,791,000 general fund and A-tax revenue. Say "its two largest revenue lines", not "runs mostly on".
13. **Row 35, rentals.** "Allowed" stands: the town taxes rentals on its own monthly A-tax form and stopped them only by a 2020 emergency ordinance. Cut "no business license": no town source states it, and "Revenue Sources" is a 2026 council priority (a March 16, 2026 Coastal Observer story says council is looking at a business license).
14. **Row 40, nominal deeds.** Write "the kind of deed used to pass a house to heirs or a trust, or to move it into a company", not "which is how a family passes a house".
15. **Row 43, cypress.** The nomination says cypress was "the building material most frequently used". Do not say every house was framed in it. The 1780 date is read from OCR "J780".
16. **Row 51, police budget.** The adopted Ordinance 2025-02 appropriates $509,303 to the police department; the detail sheet totals $449,303. Drop the dollar figure; keep "its own police department".

## Struck

- **Row 14, DeBordieu.** Our DeBordieu group is parcels whose legal description names DEBORDIEU (464 parcels). Most DeBordieu lots read "LOT n BLK ..." without the name, so the group misses most of the colony and nearly all its oceanfront (3 VE houses of 312; the Census counts 885 housing units). The $1,725,000 median and the 60.6, 17.0 and 84.3 percent shares do not describe DeBordieu. Link /buyers/gated-communities/ for its price.
- **Row 37, AirROI.** The page is byte-identical to the researcher's copy and every number is on it. Struck as in this batch's Conway ledger: a vendor estimate, not a public record, and its averages count listings open only part of the year. Cut the numbers and link /invest/airbnb-income/.
- **Rows 45 and 46.** No source (hammock) and no fact (chapel).

## Should not be published at all

- Any DeBordieu price or share from `findings.json` (row 14).
- The AirROI figures (row 37). `data/str-market.json` (NEEDS.md) does not change this.
- "Opt-in" or "draft" for the town's historic rules (row 29).
- "No business license" (row 35).

## Notes for the writer and lead

- **Row 8.** I accept the reading of land-use code Q as a legal residence on the county's own data. On the island, 60 of the 62 houses whose bill goes to their own street address are coded Q, and 2 are N; most other Q bills go to Pawleys Island post office boxes. Study-wide, 98 percent of Q bills go to South Carolina, against 67 percent of N. Word it "taxed as someone's legal residence".
- **Row 20.** The CRS class is confirmed by FEMA's policy data through May 2026, so it can be printed. Re-check at build if the build is after April 2027.
- **Row 21.** SCDES's 2024 to 2028 line review has only reached Beaufort County (Phase I lines in effect July 24, 2026). The island's lines are still from the 2017 to 2019 cycle. Say "the state's current lines".
- **Row 9.** The market-sale floor bias is similar on both sides of the comparison: a nominal last deed since November 2021 is on 20 percent of island houses and 16 percent west of US 17. "About twice as often" may stand with "at a market price".
- **Analysis bug for the lead.** `analyze.py` converts degrees to metres with one factor in both directions (rows 2, 21, 22 and its 7.5 m band). Any sibling page that reused this code for setback or length measures has the same error.

## Photos (PLAN.md candidates)

| Candidate | Licence on its file page | Verdict |
|---|---|---|
| `pawleys-island-beach-walkway` (Commons `File:Pawleys_beach_walkway.jpg`) | Commons file page: "Own work", author Phoebe, 28 July 2019, CC BY-SA 4.0. Matches `data/photos.json`. | **Cleared.** I looked at the 1200 px file: a wooden walkway over dunes with sea oats to the ocean, a groin on the right. The Commons description says the walkway is "from a vacation home", so the caption must not call it a public beach access. `photos.json` names a master file `pawleys-island-beach-walkway.webp` and 1x1 and 4x3 crops that are not in the website folder; only the -600w and -1200w files exist. The lead should check the record before use. |
| NRHP 1972 photos (`house-on-brick-piers`, `creek-dock-summer-house`, `house-on-the-dunes`, `boardwalk-to-house`, `cypress-cottage`, `piazza-with-hammock`) from NPGallery asset 7740f78b-7794-43e9-a751-0988a78fc71b | NPGallery's asset page has an empty Copyright field. The photos were made by the Waccamaw Regional Planning and Development Council, not a federal agency, so they are not federal works. | **Not cleared.** No licence or rights statement exists. `rules/images.md` allows a government source only when it holds the rights. Do not ship; use the photo partner's shots 1, 2 and 4. |

## Sources opened

Town of Pawleys Island pages (about, flood information, flood mitigation project, ordinances, building department, historic preservation, passed ordinances, beach rules, golf carts, dogs, beach access, renourishment and its FAQ and newsletter 6, 2025 settlement FAQ, local A-tax form, 2026 budget, Ordinance 2026-02, Historic Preservation Q and A); Georgetown County GIS layers and the Property Tax Calculator; FEMA NFHL and OpenFEMA NfipPolicies v3; NOAA HURDAT2; Census API; SC Code 12-36, 12-43, 48-39; SCDOR ST-575; SCDES beachfront jurisdictional lines page; NPS NPGallery 72001211; Wikimedia Commons file page; OSRM; the site CRM; AirROI's Pawleys Island page.
