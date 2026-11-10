# Fixer rows, independent check (2026-11-10)

/invest/non-warrantable-condos/. Rows marked VERIFIED-BY-FIXER: 33, 34 and 35.

`wow_lines.py` re-run (`python3 -I wow_lines.py`): output identical to `wow.json`.

| Row | Result | Note |
|---|---|---|
| 33 | VERIFIED | County layer 24 re-queried live at the club's point: PIN 39400000256, "DUNES GOLF & BEACH CLUB INC", 216.5 acres. My own edge distance: Maisons Sur-Mer's point 0.373 mi; from the FAA obstacle point for the tower 0.389 mi; Sands Ocean Club 0.202 mi (reproduces CB). "Under half a mile ... from the course" holds. thedunesclub.com live: "The Dunes Golf & Beach Club proudly served as the host venue for the 2026 ONEflight Myrtle Beach Classic". The page does not say an owner can play. |
| 34 | VERIFIED | FAA DOF downloaded today (currency 11/08/26): "45-000344 O US SC MYRTLE BEACH 33 45 44.00N 078 47 10.00W BLDG 1 00300 00314 D 2 C N 1998ASO02733OE C 2014152". Accuracy 2 C is plus or minus 50 ft across and 20 ft up, so "about 300 feet". County layer at that point, live: 254 parcels, all Maisons Sur Mer regime names; floors read from the legal descriptions: top floor 24, 11 units on it. |
| 35 | VERIFIED | pinelakes.com returns 403 to curl today; read the copy saved today (`raw/wow/pinelakes.com.html`): "Historic Pine Lakes Country Club was Myrtle Beach's first golf course, opening in 1927"; "Known fondly as 'The Granddaddy'". "First" has a second source: batch 2026-10-b neighborhoods row 209 (TheClio, "first golf club in Myrtle Beach"; NRHP nomination for 1927). County layer at the Wikipedia point, live: PIN 42100000010, "PINE LAKES; REVISED PARCEL 4", 156.18 acres; edge distance from Ocean Forest Plaza 0.304 mi. |

No page change. No struck entry.
