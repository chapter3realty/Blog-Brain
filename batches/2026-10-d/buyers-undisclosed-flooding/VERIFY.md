# Verify: /buyers/undisclosed-flooding/

Batch 2026-10-d, Lane U. Independent verifier, 2026-11-01. I did not research these facts. I opened every source myself and recounted every figure. The ledger `facts.md` now carries the same status and note on each row.

## Counts

| Status | Rows | Count |
|---|---|---|
| VERIFIED | 1, 2, 4, 7, 8, 13, 15, 16, 17, 19, 22, 28, 29, 30, 33 | 15 |
| CORRECTED | 3, 5, 6, 9, 10, 11, 12, 14, 18, 20, 21, 23, 24, 25, 26, 27, 31, 32, 34, 35, 36 | 21 |
| STRUCK | none as a whole row. Clauses are struck inside rows 9, 12, 27 and 32 (below). | 0 |

A CORRECTED row may be used only in the wording given here and in its ledger note.

## How the numbers were checked

- `analyze_claims.py` and `analyze_other.py` re-run on the saved raw files: output identical to `claims-findings.json` and `other-findings.json`.
- NFIP claims re-pulled live from OpenFEMA NfipClaims v3 (countyCode 45051): 12,525 records, asOfDate 2026-09-08, the same as the saved pull. My own count script (not the researcher's) gives every figure in rows 18 to 20, 22 and 36.
- NfipMultipleLossProperties, NfipResidentialPenetrationRates, HmaSubapplications, NfipCommunityStatusBook and DisasterDeclarationsSummaries re-pulled live. All match the ledger, except the wording issues below.
- `analyze_gis.py` re-run on the researcher's raw county files: identical except the order of tied entries. The raw files match the county server: 41 Supplemental Flood Zone polygons, 758 SFHA polygons (layer 19, SFHA_TF = T), 243,992 address points (layer 22).
- The county has no land use legend. I joined active listing types to parcels to read the codes. House listings are mostly code 101 (1,866 of 1,980 matched). Manufactured listings are codes 130, 120 and 121 (43, 27 and 14). The script counted only 120 and 121 as manufactured (row 32).

## Every correction

1. **Row 3.** "A flood before the seller bought is not asked" is overstated. Question 23 (flood risk) and question 21 (drainage) are not limited to the seller's years, and the form says the owner must disclose what is known. Use: "Four of the form's flood questions (20, 25, 26, 27) ask only about the seller's own years of ownership. No question asks directly about a flood before the seller bought, though question 23 asks about any flood risk the seller knows of."
2. **Row 5.** "A bank selling a home it took back" is wider than exemption (2). Use: "a lender selling a home it bought at a foreclosure sale". Say "Some sales", not "Many sales".
3. **Row 6.** Attorney fees go to "the prevailing party", which can be the seller. Use: "The court may also award reasonable attorney fees to whichever side wins."
4. **Row 9.** Struck: "a clean report can also mean an insurer did not report" (no source). The two regulators disagree on years: Utah says "up to 5 years" and Tennessee "up to seven years". Use: "Only the owner, an insurer or a lender can order the claims report (CLUE). A buyer asks the seller to order it. It covers only recent years." No source says NFIP flood claims appear in a CLUE report. Do not say CLUE shows flood claims.
5. **Row 10.** Two conditions were missing. First, at least two of the SRL payments must fall within 10 years of each other. Second, the prior-claims charge replaces the 15 percent surcharge when it is higher. Use: "a house FEMA calls a severe repetitive loss pays a 15 percent surcharge, or the prior-claims charge if that is higher. A severe repetitive loss house has four or more paid claims over $5,000 each, or two or more building payments that add up to more than the house is worth, with at least two of them within 10 years of each other, counted since 1978."
6. **Row 11.** The 52 closed buyouts are in the county-wide Horry program, not only Socastee, and the count dates from mid-2024. The program is for homes with "repetitive flooding". Use: "The state's voluntary buyout program began in Socastee with a goal of 61 homes that flooded again and again. By mid-2024 it had bought 52 homes in Horry County, and it tears the houses down so the land goes back to open green space."
7. **Row 12.** The counts are buildings named in grant applications. Nothing in the data says each was bought or "cleared". Use: "FEMA grant projects here have listed flood-prone buildings to buy: 63 after Hurricane Floyd (in Conway and the county) and 86 in Conway after Hurricane Matthew. A Florence project, approved but not finished, lists 8 more." The totals recompute: Floyd 9+3+9+40+2, Matthew 11+41+34.
8. **Row 14.** The county's own polygon areas sum to 157.4 square miles, not 157.5. Use "about 157 square miles".
9. **Row 18.** 23.4 percent is under 1 in 4. Use: "nearly 1 in 4 (2,047, or 23 percent)". The claims run from 1978.
10. **Row 20.** "Half of those buildings ... are still outside it" is wrong: 57 of the 433 outside today were rated high. Use: "On FEMA's current map, half of Florence's paid claims (433 of 863) are on buildings outside the high-risk zone." and "Of the 391 rated outside, 376 are outside it on today's map too."
11. **Row 21.** The NWS does not put Polo Farms near Longs. Use: "Polo Farms, off SC 905, had five feet of water in homes; Aberdeen Country Club in Longs and Bradford Creek off SC 544 had up to three feet."
12. **Row 23.** The 14.6 percent is FEMA's ratio of policy contracts to residential structures, not a count of homes with a policy. Use: "FEMA's take-up rate for flood insurance on homes in Horry County is about 15 percent, about one policy for every seven residential buildings, and 71 percent of those policies are outside the high-risk zone."
13. **Row 24.** The three-foot rule is for AE zones only. VE zones measure from the lowest beam, and A zones without a base flood height use 24 inches above the highest ground. Use: "... which in an AE zone in unincorporated Horry County means the lowest floor at least three feet above the base flood height."
14. **Row 25.** One of the 1,094 records has a single loss, so not every property was paid on more than once. And 18.7 percent is under 1 in 5. Use: "FEMA lists 1,094 properties in Horry County on its repeat-loss list. Nearly 1 in 5 (203) are outside the high-risk zone."
15. **Row 26.** The maps took effect on 12/16/21, about three years and three months after Florence. Aynor has no mapped high-risk zone. Use: "FEMA's current flood maps for Horry County and the towns with a mapped high-risk zone took effect about three years after Florence."
16. **Row 27.** The source says "in certain circumstances" and says nothing about the rate. Use: "In some cases a seller's federal flood policy can be transferred to the buyer at the sale." Struck: "usually" and "which can keep its rate".
17. **Row 31.** The seller repays only if the buyer then goes without flood insurance, the house floods, and federal aid is paid. Use: "If the seller does not, and the buyer then goes without flood insurance and later receives federal disaster aid for flood damage, the seller must repay that aid."
18. **Row 32.** The manufactured-home count left out land use code 130. The right range is 42 to 75, not 36 to 59. Drop it, or use 42 to 75. The house counts hold within 2 percent when codes 112 and 135 are added (399, 697, 2,184). Use: "about 400 houses well inside that land, about 700 counting the edge strips, and more than 2,000 houses inside the county's Florence flood map." The water reached the land, not necessarily the houses.
19. **Row 34.** The form never names any storm, and question 23 still asks about flood risk the seller knows of. Use: "About 3 in 4 resale houses for sale that we could match to a county parcel last changed hands after Florence. For those, the form's flood-history questions cover only years after Florence."
20. **Row 35.** By its text, the "knew or should have known" rule in 15-3-535 applies only to 15-3-530(5). Fraud, 15-3-530(7), runs from discovery. Use: "South Carolina sets deadlines for these claims; many are three years, and for fraud the time starts when the fraud is discovered. Ask an attorney now." Keep it to that, or cut it.
21. **Row 36.** "Rain and river floods do not [stay inside the zone]" is overstated. Most Floyd and Florence claims were inside it (63 and 55 percent), and October 2015 was about half. Use: "Storm surge claims here stay almost all inside FEMA's high-risk zone (2 to 9 percent outside). Rain and river floods reach outside it far more often: 37 to 51 percent of paid claims." Every percentage recomputes.

## Notes on verified rows

- Row 1: Chapter 50 does not contain the word "flood". It was last amended in 2003.
- Row 3: the disclosure form is still the one linked from llr.sc.gov/re/resources.aspx, and it is byte-identical to the saved copy.
- Row 7: the lender may instead get assurance that the seller gave the notice.
- Row 28: the duty applies to a buyer's agent under a written agency agreement.
- Row 33: say no time word such as "this week". Aggregate only, with the CCMLS line in the sources.

## Claims that should not be published

- "A clean CLUE report can mean an insurer did not report" (no source).
- Any statement that a CLUE report shows flood claims (not verified).
- "Can keep its rate" about a transferred flood policy.
- The manufactured-home figures 36 to 59.
- The live page's story and "Most agents do not check": the researcher already cut these, and I agree. No source.

## Struck list

`buyers-undisclosed-flooding-struck.json` in this folder has 23 entries. Every entry fires on its own struck wording, and no approved wording fires any entry (checked with `node tools/struck-check.js`). The current built page has no struck wording. `node tools/struck-check.test.js` passes. The lead should copy the file to `batches/2026-10-d/facts/` for batch mode. I left it here because this helper may only edit its own folder.

## Photo candidates (PLAN.md)

I read all three Commons file pages and looked at each image at 1920 px.

| Photo | Licence | What it shows | Verdict |
|---|---|---|---|
| P1 (44200296354) | Public domain, PD-USGov-Military-National_Guard. Flickr scguard/44200296354. SC National Guard, Senior Master Sgt. Edward Snyder, 169th Fighter Wing. 3600 x 2400. Taken 2018-09-25. | A street of single-story houses with water across the road and yards, a basketball hoop, and road signs in the water. | OK. The Commons description is the shared text for the whole set ("Flood waters continue to rise in Conway, S.C.", sandbags on Highway 501). It does not name this street. Caption: "Floodwater on a street of houses in the Conway area after Florence." Crop the left edge: a mailbox number is partly readable. |
| P1 alternate (44200296434) | Same licence and author. 3600 x 2400. | The same street from farther back. | OK. Same caption and the same crop. |
| P2 (29983782957) | Same licence and author. 3600 x 2400. | US 501 traffic between sandbag barriers, with floodwater beside the road. | Needs work. A licence plate is readable, two fuel company names are on the trucks, and a utility's billboard is in the frame. Blur or crop all of them, or do not use it. |

The licence template applies to work done "as part of that person's official duties". The photographer is a public affairs NCO, and the file passed FlickreviewR. I accept it.
