# Fixer rows, independent check: /buyers/waterfront-homes/

Verifier who did none of this research, 2026-11-10.

| Row | Status | Reason |
|---|---|---|
| 35 | VERIFIED | Re-ran `analyze.py` from copies, both versions: the researcher's (RAW `wfw/raw`) gives ocean houses 411, lot reaches high risk 406 (98.8%); the corrected run (`vwf/alt`) gives 512 and 501 (97.9%). Both are about 98 in 100. Page: table row "Oceanfront houses: About 98%" under "Lots that reach the high-risk flood zone", and "Nearly every lot on the beach, the Cherry Grove channels and the Waccamaw River reaches that zone." No count is printed. |
| 36 | VERIFIED | County Streets layer (gisweb Public/Streets/MapServer/1) within 250 m of the bridges.json point (33.7497, -78.849): "ROBERT M GRISSOM PKY", DOTNAME "S26-1315". I sampled the road's line against parcelapp layer 21: it enters the "Intracoastal Waterway" polygon at 33.7500 N and leaves it before 33.7512 N, so the road crosses the waterway there. OSRM nearest road to the point: Robert M. Grissom Parkway, 1.2 m. The mile fits: Coast Pilot gaps 2.2 waterway miles to Grande Dunes Boulevard and 4.9 to US 501 match the straight lines. Page: "Grissom Parkway bridge: 65 feet". |

No row is CORRECTED or STRUCK. No struck-list entry needed.

Note for the writer (row 19, not a fixer row): the Coast Pilot gives the 65 feet at Mile 360.5 as "reported". Row 19's verifier asked to keep "reported" for the two fixed clearances given that way. The table prints a bare "65 feet" for the Grissom Parkway bridge.
