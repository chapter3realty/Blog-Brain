# Fixer rows, independent check: /invest/str-tools/

Verifier, 2026-11-03. Rows marked VERIFIED-BY-FIXER in `facts.md`: 30, 31, 32, 33. I opened each source again and re-ran the scripts behind row 31 into a scratch folder. No page, spec or data file was changed. The two struck wordings are added to `invest-str-tools-struck.json` (row "invest-str-tools 31"). Each fires on its struck text and stays quiet on its replacement. Both fire on the current built page.

| Row | Result |
|---|---|
| 30 | VERIFIED |
| 31 | CORRECTED (2 page sentences) |
| 32 | VERIFIED |
| 33 | VERIFIED |

## Row 30: calculator defaults, town by town. VERIFIED

- I downloaded all eight AirROI market pages today. Each one is byte-identical to `raw/airroi-<town>.html`. Each says "12 months to September 2026".
- I stripped the tags with an HTML parser that reads quotes. The tables have attributes such as `[&>tr]`, and a plain regex strip breaks on them.
- Three bedrooms, average gross, nightly rate and occupancy match on all eight towns: MB 37,100/339/38; NMB 29,700/348/34; Surfside 33,600/315/42; Garden City 38,700/352/40; Murrells Inlet 32,900/304/41; Pawleys 27,800/325/37; Little River 19,100/249/35; Conway 31,500/257/46.
- Insurance and permit lines match on all eight. So do the cleaning shares: 13, 15, 14, 14, 14, 17, 16, 12.
- Airbnb's fee is "About 14%" on six pages and "About 13%" on Surfside Beach and Garden City Beach. The full line reads, for example, "About 14%: 15.5% for the 86% of Myrtle Beach listings on Simplified Pricing, 3% for the rest".
- The page's calculator data matches. `ins` is insurance plus permit: 390, 510, 640, 620, 720, 470, 220, 350. `clean` matches. `run` is 24, or 23 where Airbnb's fee is 13: the fee plus 5 + 2 + 3.
- I redid the nights, average x (1 - cleaning) / rate: MB 95.2, NMB 72.5, Surfside 91.7, Garden City 94.6, Murrells Inlet 93.1, Pawleys 71.0, Little River 64.4, Conway 107.9. The page's `n3` values (95, 73, 92, 95, 93, 71, 64, 108) are these numbers rounded.
- Note for the lead, not a fact error. These by-size rows and cost lines come from `findings.json`, not from `data/str-market.json`, because that file has no by-size block. Both come from the same AirROI update. The town totals in `str-market.json` (MB $25,807 and the others) equal the "Gross bookings" lines on today's pages. NEEDS.md item 16 already covers this.

## Row 31: complexes and streets. CORRECTED

What I re-ran:
- `pull_complexes.py` and `verify/coast_distance.py` again today. The output is in the scratchpad, not in the data folder.
- The listing counts and subdivision names hold, with this week's normal changes. Surfside is still 32 and Garden City is still 23. Golf Colony is now 8, so the three inland complexes hold 21 of 32. That is still "most", and all of them still have fees of $600 or less. Myrtle Beach is 51 and North Myrtle Beach is 65.
- Today's fee-ceiling and electric filters are not usable for Surfside and Garden City. They return more electric listings than the group has (31 of 32; 29 of 23), and in Myrtle Beach the $400-or-less count is higher than the $600-or-less count. So the fee and electric checks below rest on the 2026-11-01 file, which is consistent with itself. Where today's electric counts look sane (Myrtle Beach, North Myrtle Beach), they agree with that file: Sand Dunes 4/4, the Caribbean 4/4, Dunes Village 3/3, Carolinian 2/2, Grande Shores 2/2, Bay Watch 10/14, Beach Cove 7/7.
- Distances to the shore are unchanged: Glenns Bay Rd 1.04 to 1.09 mi, Double Eagle Dr 1.13 to 1.27, Colony Dr 1.28 to 1.53, Auburn Ln 1.43 to 1.48, Bent Grass Dr 1.63 to 1.65. Waccamaw Drive, all spellings, holds 21 of 23 listings, at 0.01 to 0.12 mi.

What I confirmed on the page:
- "Nearly all are on Waccamaw Drive".
- "Beach House, Sea Watch and Garden Sands" at $600 or less. These are "Sea Watch - Garden City", 2 of 2. A separate entry, "Sea Watch Ldg" on Atlantic Ave, is under $800 but not under $600. "Among those" covers that.
- The three Surfside complexes "a mile or more from the beach, with fees of $600 or less".
- Sea Shadow fees over $1,000 (0 of 3 at $1,000 or less).
- "every unit listed at Sand Dunes, the Caribbean, Dunes Village, Carolinian Beach Resort and Grande Shores".
- "most of the units listed at Bay Watch and Beach Cove" (9 of 13 and 7 of 8 on 11-01).

What fails:

1. **"The few on the oceanfront, at Sea Shadow, have fees over $1,000."** This says the Surfside oceanfront condos are the Sea Shadow ones. On 11-01 there were 6 two-bedrooms on Ocean Blvd, 0.01 to 0.05 mi from the shore. Only 3 were at Sea Shadow. The others were at Channel Marker ($1,000 or less), Surfbysea I ($800 or less) and Beachwalk Villas ($600 or less). Today there are 7, and Lighthouse II ($800 or less) has been added. The row's own text ("the 3 at Sea Shadow ... have fees over $1,000") is right. The page sentence goes further than the row.
   - Replacement: "On the oceanfront, the units listed at Sea Shadow have fees over $1,000, and the few others listed there have fees of $1,000 or less."
2. **"The fees under $800 a month are at places like Ocean Forest Villas and Beach Colony."** The source is the `hoaMax=800` ceiling, which means $800 or less. The row says "$800 or less". A unit at exactly $800 would make "under" wrong.
   - Replacement: "The fees of $800 a month or less are at places like Ocean Forest Villas and Beach Colony."
   - "Beach Colony" stands for "Beach Colony II", 3 of 3 at $800 or less. The one listing named plain "Beach Colony" has a fee over $800. "places like" keeps this true.

## Row 32: Myrtle Beach business license. VERIFIED

- I fetched https://www.cityofmyrtlebeach.com/news_detail_T6_R1468.php today. It is the same size as the saved copy (63,928 bytes).
- The page has the quote: "“Short-term” means any rental of less than 90 days. And if you are renting a property, you need a business license."
- It also has: "Violations of the zoning code and the business license ordinance are misdemeanors".
- This is the city's own notice. The scope is the City of Myrtle Beach, which matches the page: "Inside the City of Myrtle Beach, a stay under 90 days is short-term, and any rental needs a city business license."
- The same sentence is in the FAQ and is also correct.

## Row 33: town points on the map. VERIFIED

- I downloaded TIGER/Line 2026 PLACE for South Carolina (`tl_2026_45_place.zip`) and read INTPTLAT and INTPTLON for the eight towns.
- Every `at` point in `tools/geo/grand-strand-v2.json` matches to four decimals. For example, Conway is 33.8345329, -79.0491728 (file: 33.8345, -79.0492), and Garden City CDP is 33.5916712, -79.0065719 (file: 33.5917, -79.0066).
- These are TIGER's internal points. Garden City Beach uses the Garden City CDP point, as the row says. No figure on the page rests on these points.
