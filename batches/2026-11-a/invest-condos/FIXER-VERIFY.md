# Fixer rows, independent check: /invest/condos/

Verifier, 2026-11-03. I did none of the research. Scope: the six rows marked VERIFIED-BY-FIXER (34 to 39). Row 22 also names "VERIFIED-BY-FIXER" in its source column but is already STRUCK; not re-opened.

Opened again today: SC Code 12-37-3135 (scstatehouse.gov t12c037); the AirROI Myrtle Beach market page (12 months to September 2026, updated October 1, 2026); data/str-market.json "management"; the live /invest/airbnb-income/ page; the City of Myrtle Beach planning page; MBC rows 4 and 8; Horry County parcels layer 24 and roads layer 18 (count and envelope queries re-run); stories.json; iii.org.

Result: 3 verified, 3 corrected, 0 struck. Struck wording added to `invest-condos-struck.json` (four entries: rows 35, 35, 37, 39).

| Row | Verdict | Value or reason |
|---|---|---|
| 34 | VERIFIED | (B)(1), (B)(2)(a) and (C) quotes found word for word. 340,000 x 0.06 = 20,400; 20,400 x 0.2546 = 5,194; 5,194 x 0.75 = 3,896. "At most a quarter" is right: (B)(2)(a) floors the exemption value at current fair market value, and (B)(2)(b) drops the exemption when the ATI value is below it. |
| 35 | CORRECTED | Every figure is on AirROI's Myrtle Beach page today: "2 bedrooms 2,689 $20,100 $25,100 $252 37%" under "Typical annual revenue (median)"; "Gross bookings $25,807 $44,250"; "Total running costs ... −$9,830 −$16,560"; "Left for housing costs, then profit $15,977 ... $27,690"; 18,100 − 15,977 = 2,123; 27,690 − 18,100 = 9,590. Two faults. (a) The top-quarter column is not "a rental in the busiest quarter": AirROI says "the top-quarter listing earns at the 75th percentile of monthly revenue, over a full year". It is a mark on income, for a listing open all twelve months; "busiest" reads as occupancy. (b) Group: the average and top quarter are all sizes, houses included, set against one two-bedroom condo's costs. AirROI's two-bedroom average is $25,100, close to the all-size $25,807, so the conclusion stands; the page already says "every active Airbnb listing". Running costs are AirROI's own low-end shares for an owner who runs the listing; the figcaption says "with no manager". Note for the lead: these figures are not in data/str-market.json, the file the owner's rule (2026-10-26) names. /invest/where-to-buy/ reads the August file and prints Myrtle Beach's average as about $21,000; this page prints $25,800 for the same market. The refresh (airroi-2026-11-03.json: Myrtle Beach revenue 25,807) makes them agree; then the page should read its average from the file. |
| 36 | VERIFIED | str-market.json "management": fullServiceLow 40, fullServiceHigh 60, fullServiceBase "gross profit", basicLow 12.62, basicHigh 17.45, the owner's note dated 2026-08-15. Live /invest/airbnb-income/: "costs about 40 to 60 percent of gross profit"; "costs about 12.62 to 17.45 percent of gross profit". The page's "About 13 to 17 percent" rounds it; "the ranges we see on the Grand Strand" names no company. |
| 37 | CORRECTED | Planning page today: "The areas shaded in pink on the zoning map below are the only zones that allow short-term rentals in the city." The same page: "City-wide, only 24 houses in traditional residential zones are grandfathered for short-term rentals." The page's "legal only in the zones" leaves that out. The place list follows MBC row 4's corrected wording; 13,120 of 16,929 = 77.5 percent ("about 3 in 4"), MBC row 8. The map is the city's 2021 print. |
| 38 | VERIFIED | Count queries re-run today: condo filter 40,963; TaxDistrict 550 11,674; 88x or 89x 11,880. 40,963 − 11,674 − 11,880 = 17,409 ("about 17,000"). Envelopes re-queried: NMB envelope 296 condo parcels, all district 550, roads S OCEAN BLVD, Perrin Dr, 10th and 11th Ave S, postal city North Myrtle Beach; Garden City envelope 201, all district 610, N WACCAMAW DR, postal city Garden City; Myrtle Beach envelope 751, all district 880, N OCEAN BLVD. I did not view the three photo frames; the envelope stands for what the fixer saw landward of the plane. |
| 39 | CORRECTED | III today: "Landlord policies generally cost about 25 percent more than a standard homeowners policy". Story `insurance-quote-before-offer` is used inside its limits. Story `landlord-insurance-premium` limits: "Say '15 to 20 percent more than a homeowner policy on the same house, in Chapter3's files', with the sourced 25 percent beside it." The page writes "on the same home" on a condo page, where it reads as a unit policy. Keep the story's words. |

## Page sentences to change

Row 35:
- Hero tile "Two-bedroom rental: About $20,000 a year" to "Typical two-bedroom nightly rental, before costs: About $20,000 a year".
- "The average nightly rental in the Myrtle Beach market keeps about $16,000 after its running costs, so it falls short. A rental in the busiest quarter keeps about $28,000." to "A rental-data company estimates that the average nightly rental in the Myrtle Beach market keeps about $16,000 after its running costs, so it falls short. A rental at the top-quarter mark for income, rented all year, keeps about $28,000."
- Chart row "A rental in the busiest quarter · takes in about $44,300" to "A rental at the top-quarter mark, rented all year · takes in about $44,300".
- "A rental in the busiest quarter would cover them and keeps about $9,600 for insurance and the loan." to "A rental at the top-quarter mark, rented all year, would cover them and keep about $9,600 for insurance and the loan."

Row 37:
- "Inside the City of Myrtle Beach, nightly rentals are legal only in the zones the city shades on its rental map." to "Inside the City of Myrtle Beach, nightly rentals are legal only in the zones the city shades on its rental map, apart from 24 grandfathered houses."

Row 39:
- "In our files, a landlord policy costs 15 to 20 percent more than a homeowner policy on the same home." to "In our files, a landlord policy on a house costs 15 to 20 percent more than a homeowner policy on the same house."

Rows 34, 36 and 38 read on the page within their rows.
