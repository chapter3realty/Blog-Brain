# Verification: /buyers/property-records/ (the hub and the lookup tool)

Verifier: independent agent, batch 2026-11-d. I did not research this page. Every live source was opened again on 2026-11-13, not read from the researcher's quotes. Every API test sent `Origin: https://chapter3realty.com`.

How I checked:

- Every county, FEMA and Georgetown endpoint in rows 1 to 16 and 47 to 48 queried again, at the same test points plus one of my own: the Carolina Forest library (2250 Carolina Forest Blvd, a public building; the finder matched it at score 100, PointAddress, -78.891064, 33.759830).
- `scripts/pull_layers.py` re-run into my own folder. The new pull has the same 246,621 address points. `scripts/analyze_addresses.py` on the new pull gives a result identical to `address-points-by-place.json`, every key. I also redid the counts with my own code (a different point-in-shape method, no buffering): same numbers.
- `scripts/compare_evac_zones.py` re-run on a fresh county pull and a fresh download of the state file: same result.
- New cross-checks by parcel (my own script, server-side counts of parcels touching each town and each zone).
- The eCFR sections by the eCFR API (up to date as of 2026-11-10), 42 U.S.C. 4012a at Cornell LII, and the county's Flood News PDF downloaded again.
- Reused rows: I read each row and its verifier note in the sibling ledgers and VERIFY files, and checked that this ledger does not put back struck wording (lesson B30). It did, twice (rows 32 and 35).

One note for every "answers our site" row: these servers echo back any Origin they are sent (`Origin: https://example.org` got `Access-Control-Allow-Origin: https://example.org`). So the browser call works from our site, but there is no allow-list naming us. Do not write that the county "allows our site".

Counts (48 page rows): **38 VERIFIED (19 by new tests, 19 reused rows checked against their own ledgers), 10 CORRECTED (row 15 was wrong outright), 0 STRUCK; plus 3 planning rows.** Struck list: `batches/2026-11-d/facts/buyers-property-records-struck.json` (11 entries; each fires on its struck wording, no approved wording fires, and a short set of quiet controls passes).

## A. The sources the tool reads

| # | Status | Note | Safe wording |
|---|---|---|---|
| 1 | CORRECTED | Re-run: 1301 Second Ave scores 100, PointAddress, x -79.049153, y 33.831893 (outSR 4326). 937 Broadway St: 99.17, StreetAddress. 2700 Pampas Dr: best "PAMPAS DR" 93.91, StreetName. CORS header present. **"Rooftop" is not sourced.** A PointAddress match is a match to one of the county's address points; nothing says where on the lot the point sits. | The county's address finder matches a typed address and says how: to a county address point, along the street, or to the street only [County_Locator, Addr_type]. |
| 2 | VERIFIED | Capabilities "Geocode,ReverseGeocode,Suggest". "937 Broadw" returned "937 BROADWAY, Myrtle Beach, 29577" with a magicKey. CORS header present. | as claimed |
| 3 | VERIFIED | Field list matches word for word; PIN is esriFieldTypeDouble; wkid 3361 (feet). Courthouse point: PIN 36800000016, TMS "1370607007", LOT " ", area 658,747.97 sq ft = 15.12 acres. No owner or value field. | as claimed |
| 4 | CORRECTED | 165 parcels at the point, 164 of type 1 and 1 of type 7 (LOT "C/A ASHWO*"), each with its own PIN and TMS: verified. **Not "the same area" for all:** the 164 type 1 parcels share 40,591.96 sq ft; the common-area parcel is 88,509.11 sq ft. "Every unit's parcel" is not proven: it is the unit parcels drawn on that outline. Do not print the building's name or address. | At a condo building, one point returns the unit parcels drawn on the building's outline (164 at one oceanfront building), plus one common-area parcel [Parcels layer, read 2026-11-13]. |
| 5 | VERIFIED | Re-run: 937 Broadway matched at -78.882980, 33.695056; parcels at the point: 0; within 25 m: 4. See row 6 for a trap at condo buildings. | as claimed |
| 6 | CORRECTED | Count 246,621 and fields verified; 1301 SECOND AVE returns PIN 36800000016, CITY "Conway"; condo point within 3 m: one point, PIN 35607030131, UNIT null. CORS header present. **"Ties each address to a PIN" is too strong:** 4,684 points have no PIN; 241,937 do (98.1%). **Trap for the tool:** at the condo building the one address point carries PIN 35607030131, which is one unit's parcel (type 1, TMS 1441114348), not the building. If the tool trusts the address point's PIN, a buyer of another unit sees the wrong unit's tax and deed links. At a type 1 PIN, query the parcel layer at that point too, and when more than one parcel is stacked there, say "a building with N units on record" and ask for the unit. | Nearly every address on the county's address map carries a parcel number (241,937 of 246,621) [AddressPoints, 2026-11-13]. |
| 7 | VERIFIED | Condo point: AE, SFHA_TF "T", STATIC_BFE 11.0. Courthouse: X, "AREA OF MINIMAL FLOOD HAZARD", "F". Carolina Forest library: X, minimal. The connection reset happened to me too: 4 of about 9 calls to hazards.fema.gov failed with "curl: (35) Recv failure: Connection reset by peer"; each retry answered. CORS header present. | as claimed; the tool needs a retry and the county fallback |
| 8 | VERIFIED | Condo: AE, T, 11, NAVD88. Courthouse: X, F. Carolina Forest library: X, F (FEMA the same). My third point differs from the researcher's (the ledger gives no coordinates for it); both agree. **For the tool:** this layer has no ZONE_SUBTY field. Shaded Zone X is stored as FLD_ZONE "0.2 PCT ANNUAL CHANCE FLOOD HAZARD" (distinct values: A, AE, VE, X, and that one). The layer shows no effective date, so it is the fallback only, as the row says. | as claimed |
| 9 | VERIFIED | 41 shapes; fields BFESubzone, Watershed, Comment; the quoted sentence is in the layer description word for word. None of the 3 points (nor my Carolina Forest point) is inside. CORS header present. The description also says "The SFZ is not continuously mapped within Horry County" (gaps along the Waccamaw and the Little Pee Dee). So "not in the Supplemental Flood Zone" never means "did not flood in Florence". Reused meaning (2026-10-d undisclosed-flooding row 14) is "corrected" there: it says "approximates". | Outside the Supplemental Flood Zone: the county's Florence map does not show water here. It does not cover every stretch of river [layer description]. |
| 10 | VERIFIED | 9 shapes: 8 named (BRIARCLIFFE is the Town of Briarcliffe Acres) and 1 with no name. Condo: NORTH MYRTLE BEACH; courthouse: CONWAY; Carolina Forest library: none. No address point falls in the unnamed shape (my recount). Shapes do not overlap. CORS header present. Write "Briarcliffe Acres" on the page. | as claimed |
| 11 | VERIFIED | Condo: Zone A; courthouse: none; Carolina Forest library: none. Comparison re-run on a fresh county pull and a fresh state file (Last-Modified Sun, 28 Apr 2024): A 0.9993/0.9994, B 0.9993/0.9993, C 0.9999/0.9999, the same as the ledger. The state's Know Your Zone page loads this exact file (`/js/map.js?v=1.7`: `loadGeoJson("/json/evac_zones.json?v=1.2")`). Populations: county layer A 8,900, B 25,865, C 99,133; state file A 11,319, B 26,929, C 98,861. They differ: print neither. Reused meaning (retirees row 38) is verified; its note says "roughly between US 701 and SC 544". | as claimed |
| 12 | VERIFIED | `/Zoning` returns `{"code":499,"message":"Token Required"}`. Layer 30 field ZoningCode, CORS header present. Points inside Conway, North Myrtle Beach, Myrtle Beach (937 Broadway) and Surfside Beach: no feature. Carolina Forest library: "GR" (the researcher's point gave "PUD"). Agrees with gis F29 (320 random city points, none). | as claimed |
| 13 | CORRECTED | Totals re-run: 302,631 parcels; 274,147 with both fields filled. **But 7,210 of those hold codes, not deed books** (for example "CG2302" with page "270858", "MH2605"; letters CG, MH, MC, CC, CH and others). Parcels with an all-digit book and page: **266,935 of 302,631 (88.2%)**. Also, 1,786 of them have a page with a leading zero: `JumpToBookPage/1/2479/0959` returns an empty record page, while `/2479/959` opens the deed. I opened 7 other book and page pairs sampled across the layer: all 7 opened as "D - Deed", "001 - DEED". Courthouse PIN: DeedBook "1837", DeedPage "226", Acreage 15.01 (verified). The owner-decision caution stands: this layer holds OwnerName, OwnerStreet, MarketProp and other value fields. **For the tool:** accept a book and page only when both are digits; strip leading zeros; otherwise open the name search. | Nearly 9 in 10 Horry County parcels carry a deed book and page (266,935 of 302,631) [county parcel app layer 24, 2026-11-13]. |
| 14 | VERIFIED | HTTP 200, no cookie: "Record Date: 12/12/1995", "Book Type: D - Deed", "Book / Page: 1837/226", "Number Of Pages: 3", "Doc Type: 001 - DEED". No disclaimer or sign-in text. I did not save the party names. Limit: a page number with a leading zero opens an empty record (row 13). | as claimed |
| 15 | CORRECTED (was wrong) | The form, its field names, the five search types (Notice Number, Map Number, Owner Name, PIN, Tax ID) and the absence of any sign-in are verified. **"Cannot be filled in by a link" is wrong.** `https://horrycountytreasurer.qpaybill.com/Taxes/TaxesDefaultType4.aspx?PIN=<PIN>` runs the PIN search. The server answers 302 back to the plain search page and keeps the search in the session cookie. Followed like a browser (cookies on), the page shows the results table for that PIN. Test: a condo unit's PIN gave 22 bill rows, each carrying that PIN; the courthouse PIN gave "No records matched" (exempt). The long control names (`ctl00$MainContent$...`) alone do not work; `PIN=` does. I saved no names: only the header row and counts were read. The link is not documented by the county, so keep the "Copy PIN" button as the fallback. The results table shows owner names and property addresses (column "Name / Property Address"). | A link opens the county's tax search with the parcel number already searched [treasurer's qPayBill site, tested 2026-11-13]. |
| 16 | VERIFIED (reused) | gis F14 verified there: routes `/pin/:pin`, `/tms/:tms`, `/details/:pin`; without a sign-in a deep link lands on the login screen. Not tested after sign-in by either verifier: test once before linking. | as claimed |

## B. What the county's own data shows

All four counts below reproduce exactly, from the researcher's saved layers and from my own fresh pull. **The scope trap:** an "address" here is one point on the county's address map. 18,029 points carry a unit number, but many condo buildings are one point (row 6). So these are shares of street addresses, not of homes or units. Counted by parcel, the shares move: parcels touching a town's limits total 97,936 of 302,683 (about 32%, so about 2 in 3 outside); the City of Myrtle Beach alone has 37,752 parcels against 22,824 address points. Never write "homes", "houses" or "properties" with these shares.

| # | Status | Note | Safe wording |
|---|---|---|---|
| 17 | VERIFIED | 178,313 of 246,621 = 72.30%. By parcel: about 68% outside (cross-check above). | About 7 in 10 street addresses in Horry County are outside every city and town [county address map, 2026-11-13]. |
| 18 | VERIFIED | 86,615 with CITY "Myrtle Beach": 22,801 inside (26.32%); outside 63,814 (73.7%) = 63,359 unincorporated + 271 Briarcliffe Acres + 170 North Myrtle Beach + 12 Surfside Beach + 2 Conway. The CITY field is a coded list of 12 postal place names (Galivants Ferry, Green Sea, Longs, Nichols and others, and no Atlantic Beach or Briarcliffe Acres), so it is the city in the mailing address. 357 points have no city. | About 3 in 4 street addresses that say "Myrtle Beach" are outside the City of Myrtle Beach [county address map, 2026-11-13]. |
| 19 | VERIFIED | Conway 13,880/52,222 = 26.58%; Surfside Beach 4,052/11,893 = 34.07%; Loris 1,786/13,141 = 13.59%; Aynor 429/4,165 = 10.30%; North Myrtle Beach 20,887/21,724 = 96.15%; Murrells Inlet 15,529 of 15,529 unincorporated; Little River 15,702 of 16,608 unincorporated (906 in North Myrtle Beach). The chart CSV matches. | as claimed, as shares of street addresses |
| 20 | VERIFIED (reused) | gis F29 verified there; my zoning test (row 12) agrees. | as claimed |
| 21 | VERIFIED (reused) | Rows 5 and 6 of `2026-11-b/hoa-rental-restrictions/facts.md` are verified there (2026-11-10). They are listing counts with a staleBy of 2026-12-10: refresh before then or drop the numbers. Row 6's own verifier struck "closes the gate" as a metaphor; do not bring it here. Row 5 says "most of them are outside city limits", not all. | as claimed |
| 22 | VERIFIED | A 11,204 (4.54%), B 23,496 (9.53%), C 51,920 (21.05%); in a zone 86,620 (35.12%); none 160,001. The three zones do not overlap. By parcel the share is higher: parcels touching A, B or C total 134,755, about 44% of 302,683 (coastal condo units are one address point but many parcels). | About 1 in 3 street addresses in Horry County is in a hurricane evacuation zone [county zone layer, 2026-11-13]. |

## C. What each line on the card means

| # | Status | Note | Safe wording |
|---|---|---|---|
| 23 | VERIFIED | Every quote found in 44 CFR 64.3 (eCFR, current). "With waves" is supported by 44 CFR 59.1: coastal high hazard area is "subject to high velocity wave action". | as claimed |
| 24 | VERIFIED | Quote found in 44 CFR 59.1 word for word. | as claimed |
| 25 | CORRECTED (wording) | Both quotes found (42 U.S.C. 4012a(b)(1)(A) at Cornell LII; 44 CFR 64.3(b)). The law binds "regulated lending institutions" (and federal agency lenders and the loan buyers under the same section), only where the community is in the flood insurance program, and only for a building or mobile home. **The card's "A lender will require flood insurance" says more:** a lender outside those rules is not bound by this law. | Zone AE: high risk. A federally regulated or federally backed mortgage requires flood insurance on the building [42 U.S.C. 4012a(b)(1)]. |
| 26 | VERIFIED | Distinct ZONE_SUBTY for Zone X in Horry County's FEMA study (DFIRM_ID 45051C): exactly "0.2 PCT ANNUAL CHANCE FLOOD HAZARD" and "AREA OF MINIMAL FLOOD HAZARD". | as claimed |
| 27 | CORRECTED (wording) | PDF downloaded again; both quotes found. The flyer says "Contact: Horry County Code Enforcement and speak to a certified floodplain manager. Horry County has on staff 12 Certified Floodplain Managers." The phone number is given for the "Flood Hazard Reduction Control Officer" (1301 2nd Ave Suite 1D09, Conway). So the claim joins two sentences: the 12 do not all answer that number. The 12 is a February 2026 count. | Horry County Code Enforcement has 12 certified floodplain managers on staff. To reach one, call its flood office at (843) 915-5090 [Flood News, Feb. 2026]. |
| 28 | VERIFIED (reused) | gis F19, F20 verified there. My read of the open layer: 302,680 of 302,683 PINs have exactly 11 digits; 3 have none. | as claimed |
| 29 | VERIFIED (reused) | gis F15 verified there. | as claimed |
| 30 | VERIFIED (reused) | tax F28 verified there. | as claimed |
| 31 | CORRECTED | My count of the open parcel layer: 302,683 (the researcher's sum by type: 302,629; app layer 24: 302,631; gis F17: 302,630). The count moves day to day, so no exact figure. The type meanings are not published: never print them (agreed). | Horry County's map holds more than 300,000 parcels [county parcel layer, 2026-11-13]. |

## D. The county's name searches

| # | Status | Note | Safe wording |
|---|---|---|---|
| 32 | CORRECTED | **Puts back struck wording.** Deeds F4 is CORRECTED there: drop "no punctuation" (the search page's tip shows a comma). Deeds F5 limit: 1984 is the form's start date, never "the index starts in 1984". Deeds F2, F3 verified (free, no account; a disclaimer step before the name search). | The deed index searches by name: type the last name first, then the first name. It is free and needs no account [deeds F2 to F5]. |
| 33 | VERIFIED (reused) | Deeds F10 verified; its limit: the index is online, the documents are not. | as claimed |
| 34 | VERIFIED (reused) | Tax F4, F5 verified; F8 is "verified with corrected wording" for the in-office debit fee only, which this row does not use. Row 15 now adds a PIN link. | as claimed |
| 35 | CORRECTED | **Puts back struck wording.** gis F5: "free" is unverifiable and struck; the row's own source note says so, but the claim still says "a free county sign-in". F2, F9 verified. | The county map searches by address, owner, PIN or TMS after you sign in with a county account. The sign-up form has no payment step [gis F2, F5, F9]. |

## E. What county records do not show

| # | Status | Note |
|---|---|---|
| 36 | VERIFIED (reused) | Liens row 28 and estoppel row 3 verified. Keep "only up to the amount in the statement". It is a condo rule (27-31-220). |
| 37 | VERIFIED (reused) | Estoppel row 2 verified there. |
| 38 | VERIFIED (reused) | Liens row 29 verified (story `hoa-lien-flip`). |
| 39 | VERIFIED (reused) | Rental rows 4 to 6 verified 2026-11-10 (row 4 corrected there). |
| 40 | VERIFIED (reused) | Coastal insurance rows 1, 2 verified. Scope there: owner-occupied houses, 2022. No dollar figure on the hub, as the row says. |
| 41 | VERIFIED (reused) | Tax F27, F37 verified (F37: the "Residential Exemption" line reading is struck there; do not use it). |

## F. Georgetown County

| # | Status | Note |
|---|---|---|
| 42 | VERIFIED (reused) | Deeds F33. |
| 43 | VERIFIED (reused) | gis F44, F45, F46. F46 limit: 38 of 392 sampled TMS numbers have a letter; show the format only. |
| 44 | VERIFIED (reused) | Deeds F34, F38. |
| 45 | VERIFIED (reused) | Tax F42. |
| 46 | VERIFIED (reused) | Tax F47. gis F48 is corrected there: qPublic returned 403; do not say it searches by owner. Open it in a browser before linking. |
| 47 | VERIFIED | Layer fields include TMS and PLAT; `access-control-allow-origin: https://chapter3realty.com` (echoes any origin). My own point by Pawleys Island town hall returned TMS "42-0167-033-00-00" and a PLAT within 40 m. Phase 2 only. |
| 48 | VERIFIED | My test, "321 Myrtle Ave, Pawleys Island, SC 29585": best 43.89 ("DEW AVE, North Myrtle Beach", StreetName), then 321 S MYRTLE DR, Surfside Beach at 40.61. The score-90 rule plus the Georgetown words and ZIP 29585 are sound. |

## G. Planning rows (not page copy)

| # | Status | Note |
|---|---|---|
| 49 | planning, checked | `idx-lib/map.js` builds `near=<lat>,<lng>` and `miles` (0.1 to 25) at the lines given. |
| 50 | planning, checked | Volumes match `research/data/dataforseo-volumes-2026-11-13.txt`. That file also lists "horry county tax records" at 2,400, which the row leaves out. |
| 51 | planning, not checked | Not page copy. |

## Not to publish

- Any share in rows 17 to 22 written as a share of homes, houses, properties or parcels.
- The condo building's name or address (row 4, 6), the courthouse deed's party names (row 14), and anything from the tax results table but its existence (row 15).
- The evacuation zone population figures (row 11), and the parcel type meanings (row 31).
- "Rooftop" (row 1), "a free county sign-in" (row 35), "no punctuation" (row 32), "cannot be filled in by a link" (row 15).

## For the tool (from the checks, not page copy)

1. Retry FEMA once or twice before the county fallback; read shaded X from the county copy's FLD_ZONE (row 7, 8).
2. Do not trust an address point's PIN at a condo building; query parcels at the point and count the stack (row 6).
3. Deed link: digits only, strip leading zeros from the page (row 13, 14).
4. Tax link: `TaxesDefaultType4.aspx?PIN=<PIN>`, with "Copy PIN" kept as the fallback (row 15).
