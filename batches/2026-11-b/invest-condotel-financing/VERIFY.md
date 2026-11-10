# Verify: /invest/condotel-financing/ (batch 2026-11-b)

Independent verifier, 2026-11-10. I did not research this page. I opened every source myself, re-ran `pull_counts.py` (identical result), and ran one extra pass on bedrooms and size. New source files are in the data folder, `raw/verify/` (listed in its README). The struck list is `batches/2026-11-b/facts/invest-condotel-financing-struck.json` (12 entries; each struck wording fires its entry, no approved wording fires, `node tools/struck-check.test.js` passes).

| Status | Count | Rows |
|---|---|---|
| VERIFIED | 21 | 1, 2, 4, 7, 9, 10, 11, 13, 14, 15, 18, 19, 20, 21, 22, 24, 25, 27, 28, 29, 30 |
| CORRECTED | 9 | 3, 5, 6, 8, 12, 16, 17, 23, 26 |
| STRUCK | 0 | |

## Corrections

**Row 3. The name test has a carve-out.** Fannie Mae skips the name test when the word "refers to a historical use of the building and not reflective of its current use".
Use: "Fannie Mae will not take a building whose name contains hotel, motel or resort, unless the word only refers to the building's past use [B4-2.1-03, 11/04/2026]."

**Row 5. Freddie Mac is now primary.** guide.freddiemac.com resolves. Section 5701.3 came from the guide's data service: answer 1000687, effective 05/06/2026, saved as `raw/verify/freddie-5701-3.json`.
- "Any project that is a Condominium Hotel or similar type of transient housing" is an ineligible project.
- Freddie's tests are not Fannie's. The pool test is a mandatory pool, not a voluntary one. Freddie adds two tests: an HOA licensed or registered as transient housing, and "The entity that manages the Condominium Project also manages its transient rentals" (unless the two divisions are separate and owners need not use the rental side).
- It also says: "Condominium Projects with short-term rentals, personalized services and/or centralized systems may be eligible if the Seller fully analyzes" them.

Use: "Fannie Mae and Freddie Mac will not buy a loan in a condo hotel [B4-2.1-03; Freddie Mac Guide 5701.3]." Never write that Freddie refuses a building because it allows short-term rentals.

**Row 6. A condo buyer does not sign HUD-92561.** HUD Handbook 4000.1 (Update 18, posted 2026-08) requires the form only in three cases: a one-unit home with an ADU, a two- to four-unit home, or one of five or more homes the buyer owns within two blocks. The stronger facts, in the same handbook:
- "FHA will not insure Single Family Mortgages secured by: ... hotels, motels and condotels."
- "FHA will not approve Condominium Projects with the following characteristics: ... condominium hotel or condotel; mandatory rental pooling agreements ..."

Use: "FHA will not insure a loan on a condotel, and it will not approve a condo building that is a condo hotel or has a required rental pool [HUD Handbook 4000.1, Update 18]."
The under-30-days line may be quoted as HUD's own definition of hotel use [HUD-92561]. It is not a promise the condo buyer signs.

**Row 8. Count the VA list against the 47, not the old 29.** The page's directory is the 47 (row 7). I re-pulled the VA report on 2026-11-10 (Horry County, 229 records) and matched it to the 47 by name and street number. Six have "Accepted Without Conditions":

| Building | VA record | Review date |
|---|---|---|
| Beach Cove Resort | Beach Cove Resort HOA | 2022-06-24 |
| Myrtle Beach Resort (one tower) | The Renaissance Tower, 5905 S Kings Hwy | 2026-02-17 |
| Monterey Bay Suites | Monterey Bay Suites Resort, 6804 N Ocean Blvd | 2020-04-22 |
| Sands Ocean Club | 9550 Shore Dr | 2026-05-08 |
| Crescent Shores | 1625 S Ocean Blvd | 2025-05-21 |
| Mar Vista Grande | 603 S Ocean Blvd | 2021-05-26 |

Three were rejected: Ocean Dunes Tower 1 (Sand Dunes), The Tower at 100 Ocean Creek Dr, and Maisons-Sur-Mer (2013).
Use: "At least 6 of the 47 buildings in our directory have an accepted VA record [VA condo report, 2026-11-10]." The occupancy rule, 38 U.S.C. 3704(c)(1), holds.

**Row 12. 22.5 percent is "more than 1 in 5", not "about 1 in 5".** The chart title in `chart-size.json`, "Most rental-program condos pass a condotel lender's size test", overstates in two ways:
- The test is one program's.
- That program also needs a separate bedroom and a full kitchen.

My pass (`raw/verify/beds-sqft.json`) on the 885 rental-program listings:

| Size and bedrooms | Listings |
|---|---|
| 500 sq ft or more, with a bedroom | 678 |
| 500 sq ft or more, studio | 8 |
| Under 500 sq ft, with a bedroom | 28 |
| Under 500 sq ft, studio | 171 |

Use: "More than 3 in 4 rental-program condos for sale are 500 square feet or more", or "678 of the 885 meet both the 500 square foot and the one-bedroom lines of one published program [CCMLS listings, 2026-11-10; Newrez checklist 3/2026]."

**Row 16. 23 of 47, not 22.** Monterey Bay Suites goes by "Monterey Bay Suites Resort" in the MLS and on the VA list.
- County records: 8 of 45 regime names spell out RESORT or RSRT. A ninth reads "MONTEREY BAY SUITES RST".
- The county's parcel label is a short form of the regime name, not the recorded legal name. Say "in the county's parcel records".

**Row 17. 804 and 11,822 are the sums before CB's fixes.** They count Myrtle Beach Resort and Ocean Creek, whose sales CB struck. After the CB spec's corrections:
- 784 one-unit sales of $10,000 or more, recorded 2025-10-01 to 2026-09-30.
- They are in 43 buildings with a county count, holding 11,471 units.

Use: "About 780 units sold one at a time by recorded deed in a year, in the 43 directory buildings with a county count, out of about 11,500 units [Horry County deeds and parcels]."
`findings.json` `sales_year` and `units` still hold the old sums. Fix them in `build_findings.py`, or print neither.

**Row 23. "Beside" is a distance word with no measure.**
Use: "Kingston Resorts' own site books its condos and villas alongside rooms at the Embassy Suites and the Hilton."

**Row 26. The story compares a condotel with other DSCR purchases**, not with "a regular condo loan".
Use: "A DSCR loan on a condotel usually takes more down than a DSCR loan on other homes." No percentage.

## Notes on verified rows

- **Row 1.** "One of the two companies that buy conventional loans" is loose: other investors buy them too. Use FHFA's words: "Fannie Mae and Freddie Mac, the two companies Congress created to buy mortgages from lenders" [fhfa.gov].
- **Row 13.** The beds field is blank on none of the 885 pins. Eight sampled listing pages read "0 beds" at 375 to 450 sq ft. "Are studios" holds.
- **Row 19.** Write "SeaWatch calls itself one of the best hotels in South Carolina", never "was named". The site does not say who named it.
- **Row 29.** BrickWood's own site calls it "the premier mortgage broker in South Carolina" and lists "Condotels" among its programs. The live page still has the struck "same lender fees" lines and the struck lender-declines story. The rebuild must drop them; the struck list guards both.

## True details the page can use for wow (verified 2026-11-10, the resort's own words)

- Sands Resorts' rental program page: "Only our rental program's vacation guests will have access to all of the awesome amenities Sands Resorts has to offer." It also lists "Reservationists & Front Desk Staff" and "On-site Housekeeping Management".
- Landmark: H2Oasis, "Three 40-Foot Tall Slides", "Exclusive for guests who stay through our on-site rental program!"
- Compass Cove: "23 water features"; its Homeowner Services page says "you are our partner and we treat your property as if we own it".
- Ocean Creek: 57 acres, sunsets past "the natural creek that rises and falls with the tide".
- Hotel words on resorts' own home pages, which bear on Fannie's "marketed as a hotel" test:
  - Avista: "The Avista Resort Hotel"
  - Caribbean: "Myrtle Beach Hotel - Welcome to Caribbean Resort"
  - Breakers: "Oceanfront Myrtle Beach Hotel"

  Say only what the page title says. Give no verdict on a building.

## Not to publish

- Any claim that Freddie Mac, or any lender, refuses a building only because it allows short-term rentals.
- "An FHA borrower signs a contract not to rent under 30 days" on a condo page.
- The listing loan-box counts (row 15).
- Any down-payment or loan-to-value percentage (rows 27, 28).
- The live page's "same lender fees" and lender-declines story.
