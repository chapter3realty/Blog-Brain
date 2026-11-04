# Fixer re-check: /invest/rental-program-vs-airbnb/

Independent verifier, 2026-11-04. One ledger row is marked VERIFIED-BY-FIXER: row 31, parts (a) to (e). I checked each part against the saved source, the live source or the raw data. I did not edit the page, the spec or the ledger. The struck list has three new entries (row 31(d) twice, row 31(e) once). `node tools/struck-check.test.js` prints "all controls pass". The struck check fires 4 times on the current page, only on the new entries, and is quiet on the replacement wording.

| Part | Status | What I checked |
|---|---|---|
| 31(a) $6,597 a year is about $550 a month | VERIFIED | 6,597 / 12 = 549.75. The page rounds $6,600 / 12 = $550. Row 15 figures as before. |
| 31(b) The sample statement has one income line, room rent, and no line for guests' cleaning fees | VERIFIED | `raw/dl/kingston-manual.txt`, section VIII. Under "Room Rental Revenue" the only line is "REV Suite Rental Revenue ... 3 0 0 $229.95". Key D: "Number of occupied rental nights multiplied by the average daily rate OR Winter Rental revenue." The other lines are fees and charges. Line L, "Cleaning fees or folio charges made by owner or approved owner's guests", is a charge to the owner, not guest income. |
| 31(c) Vrbo's 12 percent and Airbnb's 15.5 percent include the cleaning fee; the table counts cleaning fees on the program side too | VERIFIED | Vrbo (`raw/dl/vrbo-fee.html.txt`): "a 12% commission rate is charged on the rental amount and any additional fees you charge to the traveler (such as cleaning, pet, and boat fees)". Airbnb help article 1857 (saved and live today) gives the 15.5 percent but not its base for the single fee. The base is on Airbnb's resource page, read live today (https://www.airbnb.com/resources/hosting-homes/a/how-much-does-airbnb-charge-hosts-288): "Is a single 15.5% fee, paid by hosts"; "Applies to your nightly price and any optional fees you add, like a cleaning or pet fee"; "Is deducted from your price to calculate your payout". The ledger should cite that page for the base, not article 1857. Row 14 and `data/str-market.json`: the revenue is gross bookings, "which include the cleaning fees guests pay". |
| 31(d) Grande Shores 7 of 7; each of the 43 buildings has at least 3 in a program; in 30 of the 43 some condos for sale "say they are not in the program" | CORRECTED | Recomputed from `raw/by-building.json`: Grande Shores 7 listings, 7 in a program. 43 buildings with 8 or more. The lowest in-program count is 3 (Maisons Sur-Mer, 3 of 13). 13 have every unit in a program, and 30 do not. The counts are right. The wording is not. `pull_buildings.py` and `pull_listings.py` count "in a program" with the CRM flag `has=vacation_rental_program`, and "not in a program" by subtraction. The sibling pull (`data/2026-10-d/invest-str-vs-ltr/pull_listings.py`, line 6) says: "A listing that says nothing has no flag." Five listing pages I opened today show no rental program field at all. A unit without the flag does not say it is out of the program; it only does not say it is in one. The next sentence draws a conclusion about the buildings' rules from that gap, and row 25 says "What listings say, not recorded rules". |
| 31(e) Lenders judge the project, not one owner's choice to join | CORRECTED | Re-read Fannie Mae Selling Guide B4-2.1-03 live today. The hotel test applies to the project: "A project may not be operated or managed as a hotel, motel, or similar commercial entity ..."; "any project with one or more of the following characteristics is ineligible"; "is subject to voluntary rental-pooling ... agreements with the HOA or management company". So for these loans the building decides, and a unit run on Airbnb in an ineligible building is ineligible too. That part holds. But this is Fannie Mae's rule (row 8 note: "This is Fannie Mae's rule, not every lender's"). The page states it for all lenders with no scope. Lenders who make condo-hotel loans outside these rules may look at the unit's own rental agreement. The sentence needs the "many conventional loans" scope that row 8 requires. |

## Sentences to change

Page: `chapter3realty/invest/rental-program-vs-airbnb/index.html`. Make the change in the spec.

1. Section "Which Myrtle Beach buildings have rental programs?"
   - Now: "In the other 30, some condos for sale say they are not in the program."
   - Use: "In the other 30, some condos for sale do not say they are in one."
2. Same section, the next sentence.
   - Now: "In those buildings, an owner can be outside it."
   - Use: "That is what the ads say, not the building's rules."
3. Section "Does a rental program change the loan?"
   - Now: "Lenders look at the building, not at whether you join its program."
   - Use: "For many conventional loans, lenders look at the building, not at whether you join its program."
4. Rental program FAQ, "Does joining a rental program affect my loan?" This answer appears twice in the built file: once in the visible FAQ and once in the FAQ schema. Change it once in the spec.
   - Now: "Lenders look at the building, not at whether you join."
   - Use: "For many standard loans, the lender looks at the building, not at whether you join."

Every replacement is under 28 words. None opens with "So" or uses a banned word. If the spec has a check on the "30" in part (d), it still passes, because the number does not change.

## Ledger note for the lead

Row 31 is not edited. Mark (a), (b) and (c) verified. For (c), add the Airbnb resource page above as the source for what the 15.5 percent is charged on. Mark (d) and (e) "verified with corrected wording", with the wording above.
