# Fixer rows, independent check: /submarkets/myrtle-beach/

Checked 2026-11-02 by a verifier who did not research them. Scope: the 16 rows marked VERIFIED-BY-FIXER (41 to 56). Counts: 14 VERIFIED, 2 CORRECTED, 0 STRUCK. One verified row (52) has a page sentence that says more than its row; its fix is below. The ledger's status column is not edited here.

| Row | Verdict | Value or reason |
|---|---|---|
| 41 | CORRECTED | The city's page says the Boardwalk was "built in three sections" and runs "1.3 miles". The third section is "a meandering oceanfront promenade". The page calls it "paved", which the source does not say. |
| 42 | VERIFIED | pinelakes.com: "Myrtle Beach's first golf course, opening in 1927". |
| 43 | VERIFIED | thedunesclub.com: "PROUD HOST OF THE PGA TOUR 2026 ONEflight MYRTLE BEACH CLASSIC"; "welcome the tournament back May 13–16, 2027". pgatour.com lists the event at the Dunes Golf and Beach Club, May 7 to 10, 2026. A land-use 389 parcel, "OCEAN FRONT S OF; CLUB DRIVE", meets the coast. Note for the lead: the club grounds (land use 389, 216.5 and 21.5 acres, tax district 800) are outside the city limits on the county's municipal layer. The Dunes Club lots around them are in district 880, inside the city. Never write that the club is inside the city. |
| 44 | VERIFIED | HOA amenities page: a "complimentary household membership to the Grande Dunes Ocean Club", the "126 wet slips" at the public marina, a "public course" with "five spectacular holes" on the waterway, the "private Members Club Golf Course", and "ten lighted Har-Tru courts". |
| 45 | VERIFIED | marketcommonmb.com: shops, restaurants, movies; "The apartments above the shops and restaurants". |
| 46 | VERIFIED | Parks page: Valor Park and Grand Park, picnic areas, sports fields, fishing spots, Savannah's Playground "for all-abilities play". City page: "The wide, 1.1 mile multipurpose path" around Grand Park Lake. |
| 47 | VERIFIED | Home page: "the only cardiac surgery program ... in the region". The hospital's own emergency-care page: "As a Level I Adult/Level II Pediatric Trauma Center, Grand Strand Medical Center is recognized by the American College of Surgeons and SC Department of Health". This settles the lead's question. The Census geocoder places 809 82nd Pkwy in Myrtle Beach city. It is 0.8 mi from the coastline in tools/geo. |
| 48 | VERIFIED | flymyrtlebeach.com: "With more than 50 nonstop destinations". The terminal point is inside MYRTLE BEACH on county layer 31, 1.5 mi from the coastline in tools/geo. |
| 49 | CORRECTED | Selling Guide B4-2.1-03 (08/05/2026) quotes match. "Front desk" is a fair plain word for "registration services". The clause "whose rules most home loans follow" has no source in the row. The next page sentence, "Buyers in those buildings pay cash or use a loan made for condo-hotel units", rests on a broker's page, a commercial and secondary source. |
| 50 | VERIFIED | Airbnb article 2328: state sales tax 5%, state accommodations tax 2%, local taxes collected by the state, Horry County 1.5% to 3%, Myrtle Beach 0.5% and a 1% hospitality fee, all "for reservations 89 nights and shorter". Together with row 34 (about 13 percent), Airbnb collects every part. |
| 51 | VERIFIED | Re-ran the OpenFEMA query: 2,117 policies. High risk: n 324, median $833, q1 $712, q3 $1,084. X, B and C: n 1,793, median $571, q1 $485, q3 $720. Same as the fixer. |
| 52 | VERIFIED | A fresh banded CRM pull (1,638 condos) gives the same unit mix. Tides/Driftwood/Oasis: 30 of 30 are studios, middle 385 sq ft. The other nine buildings match `building-units.json`. The page adds "the size of a hotel room", which no row supports. |
| 53 | VERIFIED | Re-ran `fix2_data.py` in a copy: identical output. 459 house resales, median $539,500, q1 $415,000, q3 $742,500, 79 at or under $350,000 (17.2%). |
| 54 | VERIFIED | Same re-run: 869 listings at or under $300,000, of which 8 are houses, 41 townhouses and 820 condos. Live today by the city-polygon test: 8 houses and 41 townhouses. The CRM's own `inside_city_limits` flag gives 11 houses, 5 of them outside the city polygon. Keep the polygon test. |
| 55 | VERIFIED | Re-run: Bent Oak Estates has 11 of the 79 sales at or under $350,000, 12 resales at a median of $245,500, 150 houses, 68.7% main homes, 1 in the high-risk zone. It is 0.88 mi from the coastline and 1.16 mi from the airport. Live layer 24 inside the PUD outline: 149 of 151 houses are BENT OAK ESTATES. |
| 56 | VERIFIED | Re-run: MERIDIAN has 12 resales at $350,450; SUMMIT @ MERIDIAN has 25 at $419,000. The Arbor Glenn PUD has 513 houses, 205 of them high risk, centre 1.12 mi west of the airport. Live layer 24 inside the PUD outline: Meridian 243, Summit at Meridian 270, Lauderdale Bay Estates 4. So "one planned development of 513 houses" holds. |

## Page sentences to change

| Row | Page sentence now | Replace with |
|---|---|---|
| 41 | It has a raised wooden boardwalk, a wide section for entertainment, and a paved walk along the beach. | It has a raised wooden boardwalk, a wide section for entertainment, and a winding walk along the ocean. |
| 49 | Fannie Mae, whose rules most home loans follow, will not back a loan in a building managed like a hotel: with a front desk, daily cleaning, or a rule that owners put their unit in the rental program. | Fannie Mae will not back a loan in a building managed like a hotel: with a front desk, daily cleaning, or a rule that owners put their unit in the rental program. |
| 49 | Buyers in those buildings pay cash or use a loan made for condo-hotel units. | (cut it; the next sentence already sends the buyer to our preferred lender) |
| 52 | The lowest prices are for studios of about 400 square feet, the size of a hotel room, at Tides, Driftwood and Oasis. | The lowest prices are for studios of about 400 square feet at Tides, Driftwood and Oasis. |

Every business the page names is backed by a row: Pine Lakes (42), The Dunes (43), the Grande Dunes amenities (44), The Market Common and its parks (45, 46), the hospital (47), the airport (48), Airbnb (50) and the nine buildings (52 and row 19). "Many of these buildings have a rental program for their owners" belongs to an earlier row, outside this check.

Struck list: 4 entries added to `submarkets-myrtle-beach-struck.json` (rows 41, 49, 49, 52). All 4 fire on the built page now.
