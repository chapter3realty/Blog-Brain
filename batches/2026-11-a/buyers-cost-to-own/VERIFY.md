# Verify: /buyers/cost-to-own/ (batch 2026-11-a)

Independent verifier, 2026-11-02. I did not research these rows. I opened every source myself, or re-ran its script into my own scratch folder (`scratchpad/wf2/buyers-cost-to-own/verify/`). I did not trust the pasted quotes.

The ledger is `facts.md`. Its status and note columns now match this file. Struck wording is in `buyers-cost-to-own-struck.json` (18 entries). Every entry fires on its own struck text, and no approved wording fires any entry. `node tools/struck-check.test.js` prints "all controls pass". The current live page has none of the struck wording.

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 20: rows 3, 5, 7, 8, 9, 11, 14, 16, 17, 18, 22, 24, 26, 28, 29, 30, 31, 32, 34, 35 |
| CORRECTED | 16: rows 1, 2, 4, 6, 10, 12, 13, 15, 19, 20, 21, 23, 25, 27, 33, 36 |
| STRUCK | 0 whole rows. One figure inside row 33 (the condo water bill) is cut. |

36 rows in all.

**The deciding fact holds, at a new value.** The middle Horry County house costs about **$7,850 a year besides the mortgage, about $650 a month**, as your home outside city limits. The researcher's $7,550 used the HOA median of the whole listing feed, which includes Georgetown County and North Carolina. The cross-check still holds: $571 a month against the Census $555 (+/- $33).

## What I re-ran

- **Census PUMS (rows 2, 16, 17, 19, 27, 33, 34).** I downloaded `csv_hsc.zip` again; its md5 is the same as the private copy. I re-ran `analyze_pums.py` (Horry and rest of SC) and `pums_moe.py`. The output is identical. I checked every code the scripts use in the 2024 dictionary (TEN, BLD, ELEFP, WATFP, ADJHSG) and re-read the tract-to-PUMA file. The 2025 PUMS is not posted yet, so 2024 is the latest.
- **Census AHS (rows 29 to 32).** The zip size matches the Census file. I re-downloaded the definitions, the value labels and the check sheet (same md5). I re-ran `analyze_ahs.py` and `analyze_ahs_jobs.py`, and the output is identical. My own run on all owners reproduces the Census check sheet exactly: median $510, and 12,761 thousand homes at $0. AHS 2023 is the latest national file.
- **FEMA (row 23).** I re-ran `analyze_flood.py` on the common-mistakes pull, and the output is identical. I read FEMA's field list for `condominiumCoverageTypeCode`, `policyCost` and `primaryResidenceIndicator`.
- **CRM listings (rows 1, 4, 5, 25, 26).** I re-queried the site's map API (about 400 calls, in aggregate only, with no listing saved). I counted the whole feed and each ZIP, and tested every published median at its step and the step below.
- **Examples (rows 1 to 6, 13).** I re-ran `build_examples.py` into my own copy of the data folder, and the output is identical. I redid every sum and tax figure by hand.
- **Live sources I fetched:**
  - the 2026 levy sheet, the county stormwater fee page and the City of Myrtle Beach finance page
  - SC Code 12-43, 12-37 and 38-75, and proviso 117.220 of the 2026-27 Appropriations Act
  - Cornell 42 U.S.C. 4012a
  - the CFPB answer page and the ACS 2024 Subject Definitions
  - the USGS data release page and its metadata, the NAIP service and the NOAA bucket
- **Carried rows.** I checked each against the sibling ledger row it names (CM, RET, VA, SHV, AFF), and its status there.

## Every correction

1. **Row 1 (worked example).**
   - The HOA is $1,200 a year ($100 a month), not $900. The $75 figure is the middle of the whole CRM feed, and that feed also holds Georgetown, Pawleys Island, Marion, Dillon and North Carolina ZIPs. On the 15 Horry ZIPs, 49 percent of houses list $75 or less, so the middle by the script's own rule is $100.
   - New totals:
     - outside city limits: $7,849.40, about $7,850 a year and about $650 a month
     - City of Myrtle Beach: about $7,890
     - second home: about $10,780 outside city limits and $11,820 in the city
     - utilities: $2,280, unchanged
   - "No stormwater fee" in the city is wrong. The city bills its own stormwater utility fee and a solid waste fee with the water bill. Say "no county fee on the tax bill", and say that the city figure leaves out the city's own utility fees.
2. **Row 2 (cross-check).** The example now gives $571 a month against the Census $555, which is still inside the margin. "So the example is what owners here really pay" overstates it. Use: "That is close to what owners here report paying: about $571 against $555."
3. **Row 4 (town table, houses).** In North Myrtle Beach 29582, the middle house lists no HOA fee: 134 of 255 list none. The total is about $7,670 (second home about $12,370), not $7,970. The table note must say four things:
   - Conway's ZIP 29526 is mostly outside the city.
   - The City of Myrtle Beach also covers 29572, where the middle house lists $300.
   - The city rows leave out the cities' own stormwater and trash fees.
   - Most homes outside towns pay 201.0 mills, not all of them.
4. **Row 6 (condo against house).** In North Myrtle Beach the condo costs 56 percent of the house, not "less than half". Use: "In Myrtle Beach the condo costs less than half as much to buy ($172,000 against $430,000); in North Myrtle Beach a little more than half ($300,000 against $535,000)." The finding itself holds.
5. **Row 10 (levies).**
   - Outside city limits, 201.0 mills holds for most homes only: Longs district 250 pays 203.8, Polo Farms district 260 pays 203.4, and the sheet lists watershed levies.
   - In Garden City and Murrells Inlet, Horry side, most homes pay 207.3. Some pay 201.0 (district 600) and some 234.5 (district 620).
   - Use "most" in both places.
6. **Row 12 (stormwater fee).** Use "Most tax bills outside city limits also carry a county stormwater fee of $89.40 a year." Some bills show $0.00, $18.60 or $74.30.
7. **Row 13 (tax chart).** The numbers are right. The label "Garden City and Murrells Inlet" must read "most homes on the Horry side of Garden City and Murrells Inlet". Surfside Beach means inside the town.
8. **Row 15 (65 and older).** For tax year 2026 only, an owner who already qualified in 2025 gets $75,000 (proviso 117.220, read today). Use RET 19's wording.
9. **Row 19 (condo insurance).** The condo fee "may" include insurance on the shared property; it is not a sure "because". Use: "Condo owners pay about $800 a year for their own insurance. The condo fee may also pay the insurance on the shared building."
10. **Row 20 (wind line).** The owner "can buy" wind cover separately, for example from the wind and hail association. That association is not the only seller.
11. **Row 21 (story).** Keep the story's condition. Use: "If you buy with us, we get you an insurance quote for the address before you make an offer."
12. **Row 23 (flood).** FEMA's code U means a condo unit "insured by a unit owner or by an association". Use "a FEMA flood policy on a single condo unit", not "the owner's own policy".
13. **Row 25 (HOA, houses).**
    - Print Horry figures: about 3,060 houses in Horry ZIPs, about 830 of them (more than 1 in 4) with no fee listed, and a middle of about $100 a month.
    - North Myrtle Beach 29582 and Surfside Beach 29575 are $0, not $25: more than half list no fee. The whole-feed first quartile is also $0.
    - Every other ZIP median holds.
14. **Row 27 (share paying an HOA fee).** The Loris area is left out of the survey sample, and only 11 percent of owners there pay a fee. So 61 percent overstates the whole county. Use "About 6 in 10 homeowners in Horry County outside the Loris area (61 percent)".
15. **Row 33 (utilities).** Cut the condo water figure ($200 a year): it rests on 36 records. Condo electricity, $90 a month on 115 records, stands. The condo utilities in `examples.json` ($1,280) include the cut figure. Use $1,080 or print none.
16. **Row 36 (monthly payment).** Use: "An HOA or condo fee is usually paid separately. Upkeep and utilities are not in it." The CFPB's wording is "usually paid separately", and "never" is our word, not the source's.

## For the writer and the lead

- **`pull_hoa.py` has a fault.** `cut()` never tests $0, so a median or quartile of $0 prints as $25. The two ZIP medians in row 25 and the whole-feed first quartile are wrong because of it. `examples.json` must be rebuilt after the fix. The fix: test `hoaMax=0` first, and limit the HOA medians in rows 1 and 25 to the Horry ZIPs. Today the rebuild gives the row 1 and row 4 values above.
- **Two ledger rows break the table.** Rows 29 and 35 carry `|` characters inside their quote cells, so the table renders badly. The status and note are the last two cells. I did not change the claim or quote cells.
- **Sources line.** It must say three things:
  - The Census figures cover Horry County outside the Loris area (66 of 78 tracts).
  - Upkeep is South Atlantic region data from 2023.
  - The listing counts are Horry ZIPs on the day of the pull.
- **PROPOSED.md item 2 (`horry-home-insurance-median`).** Add "outside the Loris area" and "owners who report a premium" to the fact.
- **Siblings.** /invest/run-the-numbers/ row 14 says "between $600 and $700" for condo fees. The $650 figure here holds on Horry ZIPs alone too, so either wording is safe. Pick one.

## Photo candidates (PLAN.md)

No Wikimedia Commons file is named; the researcher could not reach Commons. I checked the three named sources at their own pages:

| Candidate | Licence found | Note |
|---|---|---|
| USGS coastal oblique photographs, Ponte Vedra FL to the SC/NC line, August 24, 2011 (doi 10.5066/F7N877XX) | Public domain. The metadata's Use_Constraints: "Public domain data from the U.S. Government are freely redistributable with proper metadata and source attribution. Please recognize the U.S. Geological Survey as the originator of the dataset." | The photos are from 2011. The caption must give the year, and say nothing about the buildings today. |
| USGS NAIP Imagery service (The National Map) | U.S. government (USDA and USGS); copyright text "USGS, USDA, The National Map: Orthoimagery" | Credit USGS/USDA NAIP. |
| NOAA 2026 Pre-Event imagery (noaa-eri-pds, EC2601a) | NOAA open data: "open to the public and can be used as desired"; NOAA asks for attribution | The tiles near Carolina Forest reach only about 78°55.5'W between 33°43' and 33°50'N. Most of Carolina Forest lies west of that. Check the frame against the county parcel outline before labelling it. |

The partner shots (1 to 5) need his written confirmation before use. No air conditioner or roof photo has a source yet.
