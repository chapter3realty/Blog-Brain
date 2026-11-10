# Fixer rows, independent check (2026-11-10)

/invest/condotel-financing/. Rows marked VERIFIED-BY-FIXER: 31 and 32. Row 20 only mentions CB's fixer row; its own status is VERIFIED and was not re-checked here.

| Row | Result | Note |
|---|---|---|
| 31 | VERIFIED | oceancreek.com fetched 2026-11-10 (curl, HTTP 200). Found: "Ocean Creek has been awarded TripAdvisor's Traveler's Choice Award"; "ENJOY OUR REFRESHING 13 WATER FEATURES"; "Our 13 water features include: Oceanfront Pool at the Beach Club ... Lodge Villa Indoor Pool & Whirlpool"; "BOOK NOW"; a "Reservations" menu. Page wording keeps the award as the resort's claim ("says TripAdvisor gave it"). |
| 32 | CORRECTED (wording only) | seawatchresort.com fetched 2026-11-10: "ONE OF THE BEST HOTELS IN S.C. Sea Watch Resort has been Named as One of The Best Hotels in South Carolina"; "Golf and Entertainment Department Business Center Concierge"; "Book Now". Units: the site's map API re-pulled today (type=condo, subdivision=SeaWatch) returns the same 5 listings: beds 0, 1, 1, 2, 2; 413, 452, 513, 854, 855 sq ft; median 513. Four pins are at 161 Seawatch Dr; the fifth (158 Seawatch Dr) falls on county parcels all named SEAWATCH N TOWER HPR (249 parcels at its point), so all 5 are SeaWatch Resort. The size sentence holds. The wording does not: "and it is set up like one" reads as our agreement that it is one of the best hotels in the state. |

## Page sentence to change

Row 32. Page: "SeaWatch calls itself one of the best hotels in South Carolina, and it is set up like one."
Use: "SeaWatch calls itself one of the best hotels in South Carolina. Its site lists a concierge, a business center and a golf and entertainment desk for guests." (The next sentence, "Guests have a concierge, ...", then merges into it.)

Struck list: `batches/2026-11-b/facts/invest-condotel-financing-struck.json`, entry "invest-condotel-financing 32". `node tools/struck-check.test.js`: all controls pass.

Loans: no interest rate or payment amount on the built page (scanned).
