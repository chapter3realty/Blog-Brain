# Verify: /buyers/new-construction/builders/

Batch 2026-11-n, Lane N. Independent verifier, 2026-11-08. I did not research these rows. I opened every source myself and re-ran every data script. The full note for each row is in `facts.md`, in the verifier note column. The struck wording is in `buyers-builders-struck.json` (11 entries; each struck sentence fires its entry and each approved sentence fires none; `node tools/struck-check.test.js`: all controls pass).

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 13: rows 7, 9, 11, 12, 13, 14, 16, 18, 19, 20, 22, 23, 24 |
| CORRECTED | 11: rows 1, 2, 3, 4, 5, 6, 8, 10, 17, 21, 25 |
| STRUCK | 1: row 15 (the tie of five community companies to Chesapeake Homes) |

## Data re-run

- `analyze.py` re-run into a separate folder with the same raw files and the scratch pin file: `findings.json` is identical (only the order of two tied listing rows differs).
- AcclaimWeb re-pulled for two weeks (2026-03-14 to 03-20 and 2026-10-24 to 10-30, 1,316 deeds) and for 2026-10-31 (0 deeds). Every deed matches `raw/deeds-co.json` on book and page, price, parcel, memo and kept names.
- The CRM map API re-queried at about 09:05Z: 947 houses, 96 townhouses, 42 condos (1,085, one fewer than the pull).
- All eleven EDGAR documents re-downloaded; each matches the size of the researcher's text, and every quote was found in my copy. EDGAR submission lists checked for newer annual reports and for mergers.
- New file `DATA/verify_corrections.py` re-runs `analyze.py` with three fixes and writes `findings-verified.json`. The writer takes every number from that file:
  1. H & H Constructors of Fayetteville LLC counts under Dream Finders Homes.
  2. The memo filter also drops "RERECORD" (4 kept deeds, 3 builder sales).
  3. An owner-sold median on parcels with a building on the tax roll.

## Corrections

1. **Row 1.** 5,277 builder sales of 17,774 kept (RERECORD fix). The 17,774 include about 1,584 non-builder sales on parcels with no building on the roll, many of them lots and land. Say "residential sales, a count that also takes in some lot and land sales", not "home sales". The share stays about 3 in 10.
2. **Row 2.** H&H Homes is Dream Finders Homes. DFH's 10-K says it entered Myrtle Beach by buying H&H Constructors of Fayetteville, and dreamfindershomes.com sells H&H's plats (Rivertown Landing, Spring Oaks) as Dream Finders. Dream Finders 149; 16 builders with 50 or more, not 17. Five community companies 239, Mungo 206.
3. **Row 3.** The owner-sold median is about $306,000 ($305,750 on 9,458 sales of parcels with a building), not $295,000, which counts lot and land sales. Dream Finders with H&H: about $273,000 / $309,000 / $500,000. Drop the H&H line.
4. **Row 4.** Conway 1,478, Little River 256, Surfside Beach 70. The 74.8% holds. In Little River, write "five community companies", not Chesapeake.
5. **Row 5.** Eden Springs is in Longs, not Conway. Ryan sells "Grande Dunes North Village". Chestnut Greens (Pulte), Waterside (Meritage) and Wilderness Bluffs (Toll) are not on the builders' own sites: give the town only. Confirmed on the builders' sites: Auberon Woods, Eden Springs, Kingston Oaks, Indigo Grove, Crescent Cove, Cypress Ridge, Arcadia, Spring Grove, Andalusia, Bayview.
6. **Row 6.** Not "large builders" (Carolina Cottage Homes sold 18 in all). Write "two or more builders each sold 10 or more homes", with no "only".
7. **Row 8.** Strike "H&H Homes sold 88 and had none". Its listings are under Dream Finders' firm. Howell Homes' 0 has the same fault. Ryan, Lennar and D.R. Horton hold.
8. **Row 10.** 146 companies, not 147: one buyer is a person whose name has "CO" in it. D.R. Horton 56. Say "companies", not "rental owners"; the names do not show use.
9. **Row 15 (struck).** No source ties the five LLCs to Chesapeake Homes. chesapeakehomes.com now redirects to a domain-for-sale page. Name the five companies and no builder.
10. **Row 17.** Lennar's 84% is of buyers who used a mortgage, in areas where Lennar offered the service, in fiscal 2025. It is not 84% of all buyers.
11. **Row 21.** Beazer Homes became a wholly owned subsidiary of Dream Finders Homes on 2026-10-20 (Beazer 8-K of that date), and Dream Finders owns Jet HomeLoans. "Has no mortgage company of its own" is now false as a current fact. State it as what Beazer's report said before the sale. Beazer was delisted the same day, so do not wait for its fiscal 2026 10-K.
12. **Row 25.** SC Code 40-59-270 exempts anyone licensed under Chapter 11, so a general contractor license also lets a builder build homes. Write "a residential builder license or a general contractor license". The chapter covers buildings of three floors or fewer and 16 units or fewer. The live statute page returned a 404 at 09:11Z today; the text was read from this morning's copy. Recheck before print.

## Should not be published

- Any tie of the five community companies to Chesapeake Homes (row 15).
- H&H Homes as a separate builder, and any listing count for H&H Homes or Howell Homes.
- "Rental owners" for the company buyers.
- Beazer "has no mortgage company" as a present fact.

## Checks that passed, worth knowing

- Mungo: 231 of the 232 Mungo-group deeds name Clayton Properties Group. All 60 Mungo listings are by "CPG Inc. dba Mungo Homes".
- Great Southern Homes: its parent UHG became a wholly owned subsidiary of Stanley Martin Homes, LLC on 2026-05-04. No deed in the window names Stanley Martin as seller.
- Starlight's footer and text name Ashton Woods as its parent. Do not print "Builder of the Year".
- Top two (44.8%) and top five (67.0%) hold after both fixes.
- D.R. Horton's fiscal 2026 10-K is not filed yet (EDGAR, 2026-11-08). Recheck row 16 on the build day.
- Photos: PLAN.md uses none, so there is no licence to check.
