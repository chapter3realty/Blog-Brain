# Fixer rows: independent check

Page: /buyers/first-time-home-buyer-myrtle-beach/. Ledger: `facts.md`, rows 42 to 55 (every row marked VERIFIED-BY-FIXER). Checked 2026-11-03 by a verifier that did not research them. Page read from the built `index.html` in the web2 working copy.

Result: 13 VERIFIED, 1 CORRECTED (row 49), 0 STRUCK.

| Row | Status | What I checked |
|---|---|---|
| 42 | VERIFIED | Downloaded HUD Handbook 4000.1 Update 18 (issued August 12, 2026). Both quotes are there word for word: UFMIP and annual MIP "collected in monthly installments"; UFMIP "may be financed into the Mortgage". The FHA mortgage insurance sentence is no longer on the built page, so nothing to change. |
| 43 | VERIFIED | Same PDF. Both quotes found. HUD also says interested parties "may contribute up to 6 percent of the sales price toward the Borrower's origination fees, other closing costs, prepaid items, and Discount Points", which supports "up to 6 percent of the price". Page: "It can cover only your actual closing costs, and the seller has to agree to it in your offer." Holds. |
| 44 | VERIFIED | Re-ran `subdivisions.py` into a scratch folder on the same inputs. Output is identical to `subdivisions.json`: Amber Bluff 63 (62 townhouses, 63 new), Indigo Grove 44 (44 new), Birchwood 25 (25 new), Golf and Yacht 33 (0 new), and the other counts as the row gives. The seven "other" names are each over 9 in 10 new. Sales file runs 2025/10/01 to 2026/09/30. The page says "Four neighborhoods with many sales", not "the most". |
| 45 | VERIFIED | Only the road lines are on the page now. Checked against the built `/buyers/affordable-places-to-live/`: "Off Savannah Bluff Road" (Amber Bluff), "off SC 90" (Indigo Grove), "Birchwood is off SC 905, southwest of Longs". The four anchors exist. Postal cities Conway and Longs match the sales. Golf and Yacht's road line is row 49. Page shows no struck wording from either struck list. |
| 46 | VERIFIED | Opened SC Code 12-43-220: (c)(2)(i) and (ii) quotes found. Horry County Treasurer page, live: "Payment is due in full on or before January 15th of the following year"; penalties start January 16. Page: "Apply to the county assessor by January 15 after the year you move in." Matches the sibling `/buyers/property-taxes/` ("runs through January 15 of the year after the tax year"). |
| 47 | VERIFIED | Downloaded SC Housing's live handout PDF (10.01.2025): "South Carolina State Housing Finance and Development Authority's (SC Housing) Homebuyer Program". |
| 48 | VERIFIED | Training guide (Bond program): "Loans must also meet all applicable insurer/guarantor (Fannie Mae, Freddie Mac, HUD, USDA/RD, VA) requirements"; "Loans can be done with or without down payment assistance"; AUS lines for Conventional, FHA/VA and USDA. Live handout: "Borrowers must meet the qualifications for the first mortgage under SC Housing's programs to be eligible for any second mortgage product." Same wording as the live programs page. |
| 49 | CORRECTED | ZIP order holds: `findings.json` has 29526 (478), 29568 (313), 29588 Socastee (295). A rough re-count by postal ZIP keeps 29588 third (323, after Longs 324). Bay Road and Hwy 707 are both within 2.5 km of the Golf and Yacht middle sale point (county roads layer 18); all 35 sales are ZIP 29588. The direction word fails. From the town points the row cites (`tools/area-map.js` loadGeo2), Socastee is at bearing 257 degrees from Myrtle Beach, 11.6 km. The project's own `direction()` returns "west". Wikipedia's Socastee point (33.6828, -78.9933) gives about 253 degrees. The 29588 sales under $300,000 have their middle point at bearing 254 degrees. "Southwest" is not supported; "west" is. |
| 50 | VERIFIED | Medians from the re-run: $237,500, $244,500, $226,000, $224,900; rounded to $238,000, $245,000, $226,000, $225,000. Birchwood is below Amber Bluff. Flood: I tested this page's own sales, not only 2026-10-b row 170. FEMA NFHL layer 28, point by point at each sale's parcel center: Amber Bluff 58 lots, Indigo Grove 46, Birchwood 21, Golf and Yacht 31, all zone X. The 14 sales with no point are covered by row 170's zone X counts. |
| 51 | VERIFIED | Downloaded SC Housing's live limits sheet (2026-2027, "effective for reservations on and after 06.01.2026"): Palmetto Home Advantage "140,000 - STATEWIDE". Training guide: "not limited to first-time homebuyers. Move-up and repeat home buyers are eligible"; "standard credit qualifying income (not total household income)"; 10-year term; "paid in full upon sale, refinance, or if property is no longer the borrower's primary residence". Note: SC Housing's Palmetto Home Advantage web page still says $135,750. That is the old limit; the dated sheet is newer. |
| 52 | VERIFIED | Replaced by row 55. The Golf and Yacht aerial is not on the page, not in `photos.json` and not in the image folder. Nothing to change. |
| 53 | VERIFIED | Re-ran `usda-hoods.py`: Amber Bluff 59 of 59, Indigo Grove 48 of 48, Birchwood 22 of 22 outside the ineligible area; Golf and Yacht 32 of 32 inside it. Live point queries on USDA layer 4 today: counts 0, 0, 0, 1. The live feature is OBJECTID 6197, EDIT_DATE 1690281176000, same as the saved copy. |
| 54 | VERIFIED | Downloaded the Census ACS PUMS 2024 1-year SC housing file and re-ran the sibling's `analyze_pums.py`. One-family houses: 783 records, median $2,000, p25 $1,300, p75 $3,000. Buildings of 3 or more units: median $800; 97.4 percent pay a condo fee. The page uses the sibling's corrected condo wording and the story's condition ("If you buy with us"). |
| 55 | VERIFIED | NOAA tile exists in the public bucket (82.7 MB). I read its GeoTIFF tags: top left -78.912599, 33.687599 (the record says -78.9125, 33.6875, about 10 m off); pixel 2.698e-6. Re-ran the frame test on the exact bounds: the same 11 sales of 10 houses, all Bent Oak Estates; 10 sales of 9 houses from $147,500 to $290,000; lot 43 at $570,000. "Nine of the 10 houses" holds. Parcel layer 24 at the four points: the four legal descriptions, land use 101 and 110, tax district 880. The image shows one-story houses along three streets. Two corners of the frame show buildings from other parcels: a Parkview townhouse building (top left) and a Westwind condo building (bottom right). No house sale comes from them, and the caption counts houses. |

## Sentences to change (row 49)

1. Visible text.
   - Page: "Mostly inland. The most sold around Conway and Longs, then in Socastee, southwest of Myrtle Beach."
   - Use: "Mostly inland. The most sold around Conway and Longs, then in Socastee, west of Myrtle Beach."

2. Map label (the svg `aria-label`; the spec builds it).
   - Page: "The dots crowd around Conway, Longs and Loris, along the roads between them, and in Socastee southwest of Myrtle Beach."
   - Use: "The dots crowd around Conway, Longs and Loris, along the roads between them, and in Socastee, west of Myrtle Beach."

Struck list: added row 49 to `buyers-first-time-home-buyer-myrtle-beach-struck.json` (pattern `Socastee,? southwest of Myrtle Beach`). `node tools/struck-check.test.js`: all controls pass. The current page fires the entry. The approved wording does not.

## Not about a fixer row

- Row 55's record gives the tile's top left as -78.9125, 33.6875. The tile's own tags say -78.912599, 33.687599. The sales count does not change. The `frame-sales.py` header and the `photos.json` provenance and bbox could use the exact values.
