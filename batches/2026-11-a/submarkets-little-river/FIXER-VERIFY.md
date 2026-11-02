# Fixer rows, independent check: /submarkets/little-river/

Checked 2026-11-02 by a verifier who did not research them. Scope: the 8 rows marked VERIFIED-BY-FIXER (R1-1 to R1-7, R2-1). Counts: 5 VERIFIED, 3 CORRECTED, 0 STRUCK. The ledger's status column is not edited here.

| Row | Verdict | Value or reason |
|---|---|---|
| R1-1 | VERIFIED | Live layer 24, land use 306: 322 parcels. Two are not slips: COQUINA HARBOR NORTH PHASE II (346 ft) and BRYANT DR & WHARF AV (340 ft). That leaves 320 slips in the county and 221 in the ZIP: Mariner's Pointe 116, Coquina 80, Lightkeepers 25. Outside the ZIP: Dock Holidays 93 and Harbourgate 6. No parcel that names a slip carries another land use. 221 of 320 is 69 percent: "about two of every three" holds. |
| R1-2 | CORRECTED | Slip lengths, recomputed from fresh outlines (minimum bounding rectangle): Mariner's Pointe has 82 of 116 between 28 and 36 ft, middle 33.1. Coquina has 79 of 80 between 28 and 46 ft. Lightkeepers has 23 of 25 between 43 and 66 ft. Dock Holidays runs 39.7 to 50.6 ft (93 of 93). The lengths hold. "No public record gives the water depth" is wider than anything checked: the county's records do not give it, but nothing shows that no public record does. |
| R1-3 | CORRECTED | Re-read 34 AcclaimWeb deed rows on slip parcels. Every book and page names one parcel, including the $190,000 Dock Holidays deed for "A30 & A31". So the index does not list every parcel in a deed. A slip sold together with a condo, and indexed under the condo only, would not show up as a slip sale. Ten slip deeds were under $1,000 (distribution deeds and others), so those slips changed hands without a sale. What holds: the 12 slip sales in the ZIP (Mariner's Pointe 11, Lightkeepers 1) were at slip prices ($10,000 to $95,000), each on a deed for the slip alone. |
| R1-4 | CORRECTED | The arithmetic holds: 38,000 x 0.06 x 0.201 = $458. But live layer 24 shows that only 41 of the 116 Mariner's Pointe slips are taxed on their full county value. Of the 37 slips valued at $38,000, 6 are taxed on the full $38,000. The rest have capped taxable values, some as low as $6,900. The middle tax on today's assessed values is about $271. "A slip the county values at $38,000 pays about $460" holds only when the full value is taxed. |
| R1-5 | VERIFIED | Re-ran the SCDOI tool (Horry 29566, 10 years old, frame, claim free, good credit, $350,000): the same 23 rates, from $376 to $11,009. The header reads "Annual Sample Rate (Without Wind Coverage)". Quartiles: $1,104, $1,436, $2,441. |
| R1-6 | VERIFIED | Home page: "45th Annual", "May 15th & 16th, 2027", "the weekend after Mother's Day", "4468 Mineola Avenue". FAQ: "A Water Taxi is available"; seafood "from vendors and local restaurants". |
| R1-7 | VERIFIED | Live layer 24: "RIVER HILLS GOLF COURSE; ALL G & TR D2", land use 389, 167.82 acres. "EASTPORT DEV PCLS 1 & 2; TRACT 1,2,3, & 4", land use 389, 98.48 acres. |
| R2-1 | VERIFIED | Re-ran all 21 saved OSRM requests: every time matches. Coastal Grand 30.1 to 35.3 min, airport 35.1 to 40.3, Mineola waterfront 11.7 to 14.8, McLeod Seacoast 8.6 to 9.1. |

## Page sentences to change

| Row | Page sentence now | Replace with |
|---|---|---|
| R1-2 | No public record gives the depth of the water, so we check it at low tide for any slip you like. | The county's parcel records do not give the depth of the water, so we check it at low tide for any slip you like. |
| R1-3 | Every slip that changed hands here in the past year was sold on its own, without a condo. | The 12 slip sales recorded here in the past year were each for a slip alone, at $10,000 to $95,000, without a condo. |
| R1-4 | At $38,000, a slip pays about $460 a year in property tax. | On the county's full $38,000 value, a slip pays about $460 a year in property tax; a slip that has not sold in years may be taxed on a lower, capped value. |

The FAQ sentence "Deeded slips at Mariner's Pointe, most about 30 to 35 feet long, sold for $10,000 to $38,000 in the past year, each on its own deed, without a condo." holds. It covers the sales only, and each was a slip-only deed at a slip's price.

No business on the page relies on these rows beyond the Blue Crab Festival (R1-6) and the two golf course parcels (R1-7). The page does not name the Eastport course.

Struck list: 3 entries added to `submarkets-little-river-struck.json` (R1-2, R1-3, R1-4). All 3 fire on the built page now.
