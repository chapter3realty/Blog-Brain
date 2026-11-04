# Verification: /invest/rental-program-vs-airbnb/

Batch 2026-11-a, Lane U. Independent verifier, 2026-11-04. I did none of the research. I opened every source myself, re-ran `compute.py` on a copy, re-counted the CRM groups against the live map API, and re-queried the county parcel layer for row 24. The full note for each row is in column 10 of `facts.md`, and the status column now matches this file. Struck wording is in `invest-rental-program-vs-airbnb-struck.json`, next to the ledger: 14 entries. Each entry's struck text fires it, and no entry's approved text fires anything.

## Counts

| Status | Rows | Count |
|---|---|---|
| VERIFIED | 1, 3, 5, 10, 11, 12, 13, 14, 15, 16, 19, 20, 21, 23, 24, 25, 26, 27, 28 | 19 |
| CORRECTED | 2, 4, 6, 7, 8, 9, 17, 18, 22, 29, 30 | 11 |
| STRUCK | none | 0 |

## Corrections

| Row | What was wrong | Approved wording (writer puts it in the page's voice) |
|---|---|---|
| 1 to 7 (as-of) | The ledger dates the manual 2021. The PDF was made 2017-11-02, and its sample statement is January 2017. 2021 is only the listing site's re-save. The resort was sold in July 2019, with Hilton still managing it. | Date the terms to 2017: "an owner manual from 2017". Never 2021, and never today's terms. |
| 2 | "approval only for a single repair over $500": the manual has no "only", and it lets the manager act alone in an emergency or when the owner cannot be reached. The handling fee applied only when the program settled the contractor's bill. | "It asked the owner's approval for any single repair over $500, unless the owner could not be reached or an emergency could not wait." |
| 4 | "sent a guest to the desk" earned a commission. In fact, the owner had to make the booking through the management office. No commission was paid on July stays, monthly rentals or discounted rates. The rates could change each year. | "An owner who booked a guest through the management office earned a referral commission: 20 percent of the nightly rate in most months, 15 percent in June and August, and none in July, on monthly stays or on discounted rates." |
| 6 | "the resort's phone company": the manual names Kingston Communications and does not say the resort owns it. "Refurbished every ten years": the manual says units "need to be updated at least once every ten years". | "through Kingston Communications, the phone service the program named"; "expected to be updated at least once every ten years". |
| 7 | Front-desk check-in is a request in the manual ("We request ..."), not a rule. | "the manual asked owners to check in at the hotel front desk like any guest". |
| 8 | Fannie Mae's name test has a carve-out, which the ledger dropped: a name that refers only to the building's past use. Marketing also covers "investment opportunity". | "a name that says hotel, motel or resort, unless the word only refers to the building's past use; or marketing as a hotel, resort or investment". |
| 9 | "every unit has a keycard": the rule covers units on the rental program. "the resort's phone service": see row 6. | "every unit on the rental program had a keycard lock on the resort's key system"; "phones ran through the phone service the program named". |
| 17 | The SCDOR exception was dropped: no retail license is needed for rentals of no more than one week each calendar quarter, though the tax is still filed and paid once a year. | "An owner who books guests directly needs one, unless the unit is rented no more than one week in each calendar quarter; that owner still files and pays the tax once a year." |
| 18 | "Anything else stays with the host": Airbnb also collects the local taxes the state administers ("Local Taxes collected by the State: 0.5-8%, per Local Tax type"). | "Airbnb also collects the local sales taxes the state collects for counties and towns. The host handles any other tax." |
| 22 | "more than 14 nights ... or more than 10 percent": the IRS test is the greater of the two, and it counts days. Personal days include family use and stays below a fair rent. | "If the owner's personal days are more than the greater of 14 days or 10 percent of the days it is rented at a fair price, the IRS counts the condo as a home, and a rental loss is limited." |
| 29 | "159 named buildings": these are 159 Subdivision names, grouped by street address. Some are phases, and one address can carry two names. The other figures hold: 43 buildings with 8 or more listings, 669 of 782 (85.5%) in a program, 13 at 100 percent, 2 under half, 37 with 10 or more. | "Their listings give 159 building names." |
| 30 | "Three of the Kingston Plantation towers ... Royale Palms": the manual puts Royale Palms at Kingston Shores. Two more Kingston Plantation towers have units for sale: Margate Tower (3 of 7) and North Hampton (2 of 2). | "The three towers the manual names, Brighton Towers and South Hampton at Kingston Plantation and Royale Palms at Kingston Shores, all have units for sale now: South Hampton 8 of 11, Royale Palms 8 of 12, Brighton Towers 6 of 9." Use only if the lead names the resort. |

## Checks that passed, with limits the writer must keep

- **Re-run.** `compute.py` on a copy gives a `findings.json` identical to the website copy's (38.6%; $614, $845, $880, $231; MB $15,209, $21,807, gap $6,597; NMB $20,486, $29,069, gap $8,583).
- **Live CRM re-count (09:10 UTC).** 1,074 condos in oceanfront buildings, 873 in a program (81.3%). Myrtle Beach: 674 of 808 (83.4%). North Myrtle Beach: 169 of 223 (75.8%). The other shares are within 0.4 points of the ledger's: at or under $200,000, 51.0% against 30.8%; 2 or more bedrooms, 37.3% against 60.2%; electric included, 63.3% against 32.8%; conventional accepted, 71.9% against 74.6%. The page uses rounded shares ("about 8 in 10"). Exact counts are as of the pull.
- **A ledger note that is wrong** (not a row): the "Not verified" section says the program flag and `has_rental_income` differ (886 against 879). The run1 log has 879 = 879, and today's pull has 873 = 873. They are equal.
- **Row 24.** The ledger says the row keeps the Condos ledger's status, but the Condos ledger has no such row. I re-queried GIS layer 24 instead: 23,652 of 40,963 condo units have an owner mailing state other than SC (57.7%). Write "mail their tax bill outside South Carolina", not "live away".
- **Row 16.** Do not print "38.6 percent sits just under the full-service range". The range's base is "gross profit", and the manual's base is gross rental income.
- **Row 21.** I searched all of Chapter 57 for a vacation-rental, hotel, employee or other exemption and found none. The Vacation Rental Act (27-50-220(B)(1)) leaves out condos with a front desk, but it governs rental contracts, not licenses.
- **Rows 13 and 15** favor the program in three ways, so the gap is if anything larger. The program's charges are taken on room revenue only. The figures leave out the health club tax and the handling fees. AirROI revenue includes cleaning fees that a hotel-run program would not pass to the owner.

## Photo candidates (PLAN.md)

| Candidate | Licence on the file page (Commons API, read today) | What the picture shows | Verdict |
|---|---|---|---|
| File:Myrtle_Beach,_South_Carolina,_Thanksgiving_2018.jpg | CC BY-SA 4.0, "Own work", by 28bytes; taken 2018-11-22 | Wide sand beach, dunes and ocean from a high floor; no buildings in the frame. Matches the PLAN's caption idea. | Licence fine. **Already on 5 site pages:** /buyers/second-home/, /buyers/relocating/why-myrtle-beach/, /buyers/retirees/, /sell/home-value/ and /55-plus/del-webb-grande-dunes/. The PLAN's own rule ("two pages should not share one photo") rules it out. |
| File:Myrtle_Beach_Pier_in_August_2022.jpg | CC BY-SA 4.0, "Own work", by DiscoA340; taken 2022-08-14 | A fishing pier and beach from a low balcony, with palms and a pool deck. Towers show only as small shapes on the far right horizon. | Licence fine. The PLAN's condition ("only if oceanfront towers are visible behind the pier") is not met: **drop it**. It is also in data/photos.json for /55-plus/del-webb-grande-dunes/. |

No usable photo is confirmed. The page can run on its drawn statement and charts, or on a photo from the partner's shot list.

## Not to publish

- Any date of 2019 or 2021 for the manual's terms, and any present-tense fee for the resort.
- Row 28 as a loan gap (the researcher's advice stands).
- The row 16 comparison of 38.6 percent with the full-service range until the base is settled.
