# Verify: /invest/cost-segregation/

Independent verifier, 2026-11-09. Re-ran the listing counts on https://chapter3realty.com/homes/api/map myself, re-ran the three county parcel count queries on Horry County GIS layer 24, and redid the example arithmetic. Pub 5653 was not re-read in full; row 4 is struck either way.

Counts: 5 VERIFIED, 0 CORRECTED, 2 STRUCK.

| # | Status | Why |
|---|---|---|
| 1 | VERIFIED | 1,066 furnished listings. `max=205000` returns 524, `max=210000` returns 538; half of 1,066 is 533, so the middle ask lies between $205,000 and $210,000. "About $210,000" holds. These are asking prices of active listings in Horry County oceanfront buildings, counted in aggregate; no sold data, no address. |
| 1b | VERIFIED | 1,066 of 1,092 = 97.6 percent. Scope: Horry County (the `county_horry` filter), so North Myrtle Beach, Garden City and Surfside towers are in it. Say "listed furnished". |
| 1c | VERIFIED | 248 two-bedroom furnished listings; `max=355000` returns 124 (half). |
| 2 | STRUCK | Not allowed: MLS sold data by listing field. |
| 3 | VERIFIED | 40,739; 40,731; 8. Group: residential parcels (land use 1xx) with a building value whose legal description contains "HPR". |
| 4 | STRUCK | No primary source gives a typical short-life share for a condo. Cut "a large share of the price". |
| 5 | VERIFIED | Arithmetic redone. The land share ($21,000) and the study finding ($31,500) are assumptions, not local facts, and the page must say so. |

## FIX.md: sentences that go beyond the verified rows

- New lede: "Almost every condo for sale in a Myrtle Beach oceanfront building is sold furnished, so a study has more to move there." Two problems. Row 1b is Horry County, not Myrtle Beach. And it is what listings say ("listed furnished"), not what sells. The FIX note itself says to keep "listed". Write: "Almost every condo for sale in an oceanfront building in Horry County is listed furnished, so a study has more to move there."
- Example: "The middle furnished condo for sale in an oceanfront building here asks about $210,000." Row 1. Pass; "here" must mean Horry County. "in Horry County" is clearer.
- Example: "The unit was acquired after January 19, 2025, so the whole $31,500 is deducted in year one." This rests on a fact the ledger did not re-check (it says so). IRS sources describe a permanent 100 percent first-year deduction under section 168(k) for qualified property acquired after January 19, 2025, with an election to take less, and property under a binding contract before January 20, 2025 stays on the old phase-down. Safe wording: "If the unit was acquired after January 19, 2025, the whole $31,500 can be deducted in year one." Have the next verifier read IRS Notice 2026-11 before it ships.
- "At sale, the $31,500 comes back as ordinary income, up to the gain." Not in this ledger; it is the page's existing recapture section. Not re-checked here.
- "your CPA sets the land share from the master deed. Say it is $21,000." An assumption, labeled. Pass.
- Source line "Chapter3 listings in aggregate, oceanfront buildings, furnished": add "asking prices" and "Horry County".

Struck list: batches/2026-11-b/facts/invest-cost-segregation-struck.json.
