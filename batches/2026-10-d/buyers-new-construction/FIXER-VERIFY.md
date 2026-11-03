# Fixer-row verification: /buyers/new-construction/

Independent verifier, 2026-11-03 (prompts/verifier.md). There are 20 rows marked VERIFIED-BY-FIXER: rows 33 to 52 in `facts.md`. I opened every source again. I re-ran the scripts behind rows 33 and 39 on a copy of the data folder, and the counts behind row 34. Page checked: web2 `chapter3realty/buyers/new-construction/index.html`.

Result: 17 VERIFIED, 3 CORRECTED (33, 38, 51), 0 STRUCK. Three page sentences must change.

## Rows

| Row | Status | What I checked |
|---|---|---|
| 33 | CORRECTED (one card sentence) | I re-ran `build_communities.py` on a copy (saved raw files, no --fetch). It matches `findings-communities.json` exactly, except plat open space for one community (66.1 against 66.2 acres), which is not on the page. I recomputed the highway distances from layer 17 with route numbers: N Kings Hwy near Grande Dunes North is the U.S. 17 segment (ALIAS "HWY 17"), and Socastee Blvd is Highway 707. Every card's road, ocean miles (rounded), price (rounded), city limits and postal town match. The Census geocoder puts Crescent Cove's middle point in the Socastee CDP, so "near Socastee" holds. One error: Arcadia's card says three builders "sell" there now. The deeds show Lennar's last Arcadia sale on 2026-02-25, seven months before the period ended (Clayton 2026-09-30, Pulte 2026-08-06). Lennar's Myrtle Beach page (lennar.com/new-homes/south-carolina/myrtle-beach, read 2026-11-03) lists no Arcadia community. Its nearby communities, Forestbrook Village and Parkview, are townhome communities at other addresses. The count of three is a fact about the 12 months, not about today. Note: for Kingston Oaks the nearest numbered road in layer 17 is "HWY 19", 1.6 mi away. The card says "About 2 miles from Highway 22" (2.3 mi), which is true, and it does not say "nearest". |
| 34 | VERIFIED | API re-pulled 2026-11-03: 1,245 total, 261 with no fee (21%), 928 at $100 or less (75%), 1,125 at $150 or less. The feed covers more than Horry County, and the page puts this right after Horry figures. So I split by price band until every pin came back, and kept only the pins inside the Horry County boundary (`raw/horry-county-boundary.json`). Horry only: 216 of 994 have no fee (21.7%) and 736 of 994 pay $100 or less (74.0%). "About 1 in 5" and "about 3 in 4" hold for Horry as well. |
| 35 | VERIFIED | 38-73-1095(C) quote is word for word. 38-75-310(5)(c): in Horry, the coastal area is east of U.S. 17 or Bypass 17, whichever is farther west. "East of U.S. 17" is within that. |
| 36 | VERIFIED | Treasurer: due by January 15, penalties start January 16. 12-43-220(c)(2)(ii): apply "before the first penalty date" for the first tax year claimed. (c)(2)(i): legal residence for any part of the year covers the whole year. Assessor: "reviews legal residence (or primary residence) applications". |
| 37 | VERIFIED | 2026 levy PDF: the unincorporated extras total 29.8 mills (fire 20.2, apparatus 1.5, waste 8.1). Every city's levy is higher: Surfside 43.0, Briarcliffe 48.0, North Myrtle Beach 50.0, Aynor 65.8, Atlantic Beach 82.0, Myrtle Beach 83.4, Conway 101.3, Loris 111.0. So "Inside a city ... the bill is higher" holds for every city in the county. |
| 38 | CORRECTED (Eden Springs) | All builder pages were read again on 2026-11-03. Auberon Woods, Grande Dunes North Village (Ryan: "gated communities", "staffed guardhouse", lawn care, Ocean Club, golf, marina), Waterside, Del Webb (55+), Kingston Oaks and Crescent Cove match the page word for word. The Overlook page gives 545 Cambria Dr, Longs, which matches the Indigo Grove plat. Eden Springs: the amenity list on D.R. Horton's page includes "Community Garden", but its own text says "a thoughtfully designed community garden is planned". The row note says to keep "planned" where the builder page says so. The pool and the pond are stated as existing. |
| 39 | VERIFIED | I re-ran every card link with `type=house`, as the page has it: farthest house 0.19 to 0.73 mi from each middle point. All ten are within 0.75 mi. |
| 40 | VERIFIED | D.R. Horton 10-K (SEC): 81% via DHI Mortgage; "majority of our home closings also involve an independent real estate broker"; earnest money and additional deposits; deposits retained or refunded "depending upon the applicable provisions of the contract or other circumstances". Suggestion only, not blocking: "the homes it closed" could read as the subsidiary's own closings; "the homes D.R. Horton closed" is clearer. |
| 41 | VERIFIED | Lennar Kingston Oaks: "Learn about special promotions available when financing through Lennar Mortgage." |
| 42 | VERIFIED | CFPB find-the-right-home: both quotes found word for word. |
| 43 | VERIFIED | NAR page: "Sellers can still offer compensation off an MLS", plus the disclosure and "from any source" terms. |
| 44 | VERIFIED | D.R. Horton Florida listings 1301 and 1423 NE 4 Avenue (two listings) carry the same terms, word for word. |
| 45 | VERIFIED | 12-39-220: back no more than three prior years, never before the year of the improvement. |
| 46 | VERIFIED | 6-9-10(A) quote is word for word. The page's shorter list leaves out "mechanical", which is fine for a list. |
| 47 | VERIFIED | Pulte Crescent Cove and Del Webb North Myrtle Beach: "Prices may not include lot premiums, upgrades and options. Community Association and golf fees may be required." |
| 48 | VERIFIED | Toll 10-K: overall 24.5% of base price in fiscal 2025, including lot premiums. Spec and attached homes have smaller option value. Toll's 97 is from `findings-deeds-verified.json` by_builder. |
| 49 | VERIFIED | Pulte 10-K: "different flooring, countertop, fixture, and appliance choices". |
| 50 | VERIFIED | CFPB Ask 1845 (last reviewed Sept. 11, 2024): all three quotes found. |
| 51 | CORRECTED (population) | Reg Z comment 38(g)(4)-1 is quoted correctly. But a Closing Disclosure is the form for a consumer mortgage loan (12 CFR 1026.38). A cash buyer gets no Closing Disclosure. Toll's 10-K says about 25% of its buyers paid all cash. "Your Closing Disclosure", with no condition, overstates who gets the form. |
| 52 | VERIFIED | Meritage 10-K: "We may pay a portion of the closing costs ... to assist homebuyers who obtain financing from our preferred lenders." The 334 matches row 10. |

## Sentences to change

1. Row 33, Arcadia card (spec `specs/new-construction.js` line 296):
   - Page: "The only one of the ten where three builders sell, so you can compare their plans in one place."
   - Replace with: "The only one of the ten where three builders recorded sales in those 12 months."
2. Row 38, Eden Springs card (spec line 303):
   - Page: "D.R. Horton's page lists a pool, a pond and a community garden."
   - Replace with: "D.R. Horton's page lists a pool and a pond, and says a community garden is planned."
3. Row 51, HOA charges (spec line 589):
   - Page: "Any HOA charge paid at closing is listed on your Closing Disclosure."
   - Replace with: "If you take out a mortgage, any HOA charge paid at closing is listed on your Closing Disclosure."
   - Keep the existing Reg Z link on "Closing Disclosure".

## Struck list

I added three entries to `batches/2026-10-d/buyers-new-construction/struck.json`, one for each sentence above. Each struck sentence fires its entry, and each replacement fires none (checked with `tools/struck-check.js`). `node tools/struck-check.test.js` prints "all controls pass". The batch-mode copy at `batches/2026-10-d/facts/buyers-new-construction-struck.json` is outside this page's folder, so I did not edit it. The lead should copy the three new entries there.

I did not change the ledger's status column. The lead sets rows 33, 38 and 51 from this file.
