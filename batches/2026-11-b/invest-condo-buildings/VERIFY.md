# Verify: /invest/condo-buildings/ (batch 2026-11-b)

Independent verifier, 2026-11-09. I did none of this research. Ledger: `facts.md` in this folder (status and notes columns updated). Struck list: `batches/2026-11-b/facts/invest-condo-buildings-struck.json` (19 entries; `node tools/struck-check.test.js` prints "all controls pass"; against the July page it fires on "eight FHA-approved" and "15 to 30 percent", as it should until the rewrite).

**Counts: 25 rows. VERIFIED 14. CORRECTED 9. STRUCK 1. Open 1 (row 23, a list of unread sites, no fact).** Inside the corrected rows, these values are struck outright: Myrtle Beach Resort's county units, sales, share and middle sale; Ocean Creek's county units, sales, share and middle sale; Prince Resort's share of units sold.

## What I re-ran

- **Map API (rows 1, 2, 4, 8).** My own script, not the researcher's (`scratchpad/verify-cb/recheck_api.py`, 439 calls, 2026-11-09 about 06:30 to 06:50 UTC). For all 47 buildings: total, pins returned, the blank-fee count, each printed fee quartile at its value and at $5 below, the three flags, bedrooms and the middle asking price. **Every value matches `building-fees.json` for all 47.** Island Vista and Ocean Drive Beach return total 0. Pins returned equal the total for every building.
- **Parcels (row 5).** Re-ran `pull_regimes.py` into a fresh folder: `regimes-out.json` identical. Then searched the parcel layer for other spellings on the same building footprint (parcel centroids within 60 m of a counted regime) and by name (`scratchpad/verify-cb/near.py`, `disc.py`).
- **Deeds (rows 6, 7).** Read the batch 2026-10-d deed file and its `analyze.py`. 53 weekly searches, 30,339 deed rows, none truncated. Compared every building's kept sales with the parcel layer's last-sale dates in the same window, by deed book and page.
- **Pages.** Fetched every resort page live (rows 17 to 22), two listing pages each for Grande Cayman and The Strand (rows 10, 11), and HUD's condo search live (row 13: "as of 11/09/2026 (9 records were selected, 9 records displayed.)").
- **Reused rows.** Read each source row and its verifier note. Re-queried rows 14 and 16 live.

## Corrections

| Row | What was wrong | Use instead |
|---|---|---|
| 2 | **Holiday Inn Pavilion.** "Pavilion" also finds 4 Pawleys Island listings on Algonquin Dr, not 2. Re-pulled with `city=Myrtle Beach`: 11 units, all at 1200 N Ocean Blvd, middle fee $1,055 (holds), 0 blank. With 11, the middle half is not printed. | "Holiday Inn Pavilion: 11 condos for sale, middle fee about $1,055 a month" [API, subdivision=Pavilion&city=Myrtle Beach, 2026-11-09]. No middle half. |
| 2 | **Crescent Shores.** 12 of the 14 are at 1625 S Ocean Blvd; 2 are on Edge Dr. The API cannot split by street. The 10 with the oceanfront-building flag (all at 1625) give a middle of $1,270 (middle quarter $1,070, top quarter $1,390), not $1,070. The $450 lower quarter came from the 2 Edge Dr listings. | "Crescent Shores: about $1,270 a month, from 10 listings in the building" [API, has=oceanfront_building]. No middle half. |
| 2 | **Coral Beach.** $1,345 holds, but the group is split: the 8 studios are at $980 or less, then 20 listings sit between $1,340 and $1,345. Listing pages do not show the fee to a visitor, so I could not read it there. The July page's $980 has no source; do not compare to it. | "Coral Beach: about $1,345 a month, the middle of 40 for sale, most of them one-bedrooms; studios list less." |
| 2 | Bands of one value read badly ("$905 to $905" at Bluewater, Meridian $850, Carolina Winds $855, Ocean Forest Plaza $1,015). | Print "most list about $905", not a range of one number. |
| 4 | Appendix cells for Holiday Inn Pavilion and Crescent Shores carry the stray listings. Every named example in the row matches live. | Pavilion (11 in the building): beds 6 studios, 5 one-bedrooms, none larger; fee pays electric 9; pets 1; indoor pool 9. Crescent Shores: print no bedroom or flag shares (the group cannot be cleaned). |
| 5 | **Myrtle Beach Resort.** The county records the resort's Five Seasons tower (159 units) as "MB RESORT FIVE SEASONS", plus 8 units under two other spellings. All listings carry 5905 S Kings Hwy, so I cannot tell which towers they are in. | Cut the county units, sales, share and middle sale for this building. |
| 5 | **Ocean Creek.** "LODGE AT OCEAN CK PLANT" (90 units) sits on the same footprint as "LODGE AT OCEAN CREEK" (163) and was left out; the towers were not found under any name. | Cut the county units, sales, share and middle sale for Ocean Creek. |
| 5 | **Maisons Sur Mer** left out "MAISON-SUR-MER" (22 units) and "MAISONS-SUR MER" (1), same footprint. | 252 units [parcel layer 24, 2026-11-09]. |
| 5 | **Sands Ocean Club** left out "SANDS OCN CLUB" (22), "SANDS OCN CLUB (P-H)" (2), "SAND OCEAN CLUB II" (2), "SANDS OCEAN CLU II" (1), same footprint. "SANDS OCEAN CLUB III" (52) is 33 m away and may be the same resort. | "At least 491 units" (543 with Sands Ocean Club III). |
| 5 | **Beach Cove** left out three short spellings, 6 units, same footprint. | 334 units. |
| 5 | Landmark 571 (the most of the 47) and Bay Watch 532 hold after these fixes. Bluewater's 227 is the "BLUEWATER VILLAS" regimes at the resort's site; 21 parcels coded "HURL ROCKS" sit on the same footprint, and 4 of its 22 sales are near $280,000 to $300,000, so the regime holds more than one kind of unit. | "Bluewater: 227 units in the county's records". Keep "about $94,000" only as "the middle of 22 sales", never as what a typical unit is worth. |
| 6 | **Scope.** The deed file keeps one-parcel deeds of $10,000 or more. In the same window the parcel layer shows 1,080 last-sale dates on these regimes against 804 kept sales; the rest are transfers under $10,000 and deeds of several units. | Say "units sold one at a time for $10,000 or more" in the method note. |
| 6 | **Sea Mist.** 64 sales are 62 units (2 sold twice). Landmark's 55 sales are 50 units. | "62 of Sea Mist's 271 units sold in a year, more than 1 in 5" [deeds recorded 2025-10-01 to 2026-09-30]. Sea Mist is still the most sales of the 47. |
| 6 | **Prince Resort.** One of its 7 "sales" is deed 5052/2266, recorded 2026-03-03, $8,424,000, which the index lists against one parcel. The parcel layer shows that deed on 24 Prince units. | 6 one-unit sales. Cut "7 of 262 (about 1 in 37)": about 30 units changed hands. |
| 6 | Sales counts after the row 5 fixes: Maisons Sur Mer 16, Sands Ocean Club 36 (37 with III), Beach Cove 37. The total "804 across the 47" changes with the fixes. | Re-run `pull_regimes.py` with the added names and print the new total. |
| 7 | Prince's middle of $375,000 includes the $8.4 million deed in its 7. | "About $365,000 (6 one-unit sales)". Maisons Sur Mer: about $583,000 (16). Sands Ocean Club: about $138,000 (36). Beach Cove: about $171,000 (37). The lowest four and highest three named in the row hold. |
| 12 | The reused wording keeps "front desk", which the /invest/condos/ verifier struck (its row 25): the guide says "registration services", and short-term rentals count only when the HOA or its manager offers them. | Use that row's corrected wording: "Fannie Mae will not buy a loan on a unit in a building run like a hotel, even if each unit is owned separately. Signs it lists include registration services, the HOA or its manager renting units by the day or for short stays, daily cleaning, central key systems and a rental pool" [Selling Guide B4-2.1-03]. |
| 20 | Kingston's page says "Guests staying at Embassy Suites and Hilton Myrtle Beach Resorts enjoy exclusive access to Currents Seaside Entertainment and Hilton's Sand Bottom Pool". It does not say all Kingston guests, and says nothing about owners in Margate, Brighton, Royale Palms or South Hampton. 78Fitness, with its lap pool, is "at The Landing". | "Kingston Resorts says guests staying at its Embassy Suites and Hilton get exclusive access to Currents and the Sand Bottom Pool" [kingstonresorts.com, read 2026-11-09]. Do not tie it to a tower. |
| 22 | "Heated" for Monterey Bay is only in a guest review on the page. The resort's own list: "Outdoor oceanfront pool deck, Indoor pool deck, Rooftop pool deck with skyline views, Indoor lazy river". | "Monterey Bay Suites lists indoor and outdoor pools, an indoor lazy river, hot tubs and a rooftop pool deck." Avista stands as written. |
| 25 | Not 20 of 20: of 22 building names tried, 19 drew a "<building> myrtle beach condos for sale" suggestion. Avista, Towers on the Grove and Anderson Ocean Club did not. Margate and North Beach Towers "hoa fees" drew nothing. | Plan only; nothing printed. |

## Struck

- **Row 24.** The July page's unsourced lines stay out: "15 to 30 percent" insurance rise, "35 to 45 percent" desk split, broker-page build years, heights and unit counts (Compass Cove "537 in 4 buildings"), "eight approved projects", "Our team once fixed that", Margaritaville's ground-breaking date. All are in the struck list except the build years and the Margaritaville date. Those have no fixed wording to match; the writer drops them by hand.

## Verified, with limits the writer must keep

- **Row 1.** 28 July buildings in the feed (the July page lists 29; Margaritaville is pre-construction). 26 of 28 and 45 of 47 have a fee. Island Vista and Ocean Drive Beach: total 0 under those words. The county has no "Island Vista" regime.
- **Row 3.** Hub row 2's $920 ($730 to $1,140, 1,106 for sale) matches `fees-by-kind.json`; the middle of the 45 building medians is $940, as noted. **Sibling check:** /invest/condos/ row 15 prints about $925 (nearest $25, read 2026-11-02) for the same group. Print only the hub's $920 here, and tell the coordinator the two pages differ by $5.
- **Row 8.** Every asking median and pin count matches live. Pavilion re-pulled: about $150,000 (11). Crescent Shores (10 in the building): about $560,000.
- **Row 9.** Arithmetic redone: Coral Beach 18.8, Sea Mist 13.8, Landmark 10.9, North Beach Towers 1.8, Margate 2.3. "About a fifth" fits Coral Beach. Margate's sale is "about $950,000", as the row says.
- **Rows 10, 11.** Listing pages read today: "Grande Cayman Resort (formerly Long Bay Resort)" and "The Strand (formerly called Breakers Boutique)". The county still records Grande Cayman as "LONG BAY RESORT HPR", 290 units, at the building. The Strand has 8 for sale today, at 2701 N Ocean Blvd (one at 2700).
- **Row 13.** HUD live, as of 11/09/2026: 9 approved projects, the same nine names. Sea Mark Tower is at 69th Ave N, not one of the 47 (5 listings at 311 69th Ave N).
- **Row 14.** Live: 1,041 of 1,106 oceanfront-building condos say short-term rentals are allowed, still about 94 in 100. The flag is "short-term", never "nightly" (sibling row 17's fix). The city-zone sentence matches /invest/condos/ row 37.
- **Row 15.** Matches stories.json `rental-program-buildings`. The owner adds that the transfer fee and escrow are "common in any HOA whether it has a rental program or not". Do not present them as a rental-program cost only.
- **Row 16.** Hub row 4 checked the high-rise segment, not this one. Re-counted live: water and sewer 1,068, insurance 896, internet 974, electric 631, of 1,106 (all with a fee): 97, 81, 88 and 57 in 100. "Insurance" is the flag; it does not say which policy.
- **Row 17.** Quotes match landmarkresort.com live. The slides are for rental-program guests; say nothing about an owner's own guests.
- **Row 18.** Quotes match oceancreek.com live. The page also says "We're Right Across From Barefoot Landing!"; that still needs a measured row before the page says it.
- **Row 19.** Quotes match beachcove.com live.
- **Row 21.** Quotes match seawatchresort.com live. The county has three regimes: "SEAWATCH N TOWER HPR" (248), "SEAWATCH TOWERS HPR" (127) and "SEAWATCH TOWERS HPR I" (97). The records do not show whether the last two are one tower. Print "two towers" only as what the resort says.
- **Towers on the Grove (rows 6, 7).** 0 kept sales, and the parcel layer shows no last sale in the window on any of its 236 units. Two records agree. Print no reason for it.

## Row 23 (open)

With a browser user agent, these answered 200 today: bayviewresort.com, breakers.com, caribbeanresort.com, oceanreefmyrtlebeach.com, northbeachplantation.com, longbayresort.com, compasscove.com. Still 403: dunesvillage.com (also the amenities page), myrtlebeachresort.com, islandvista.com. Still script-only: seamist.com, sanddunes.com, grandecayman.com, oceansone.com, caravelleresort.com. A new amenity line needs its own row and a verifier.

## Scratch files

`/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/verify-cb/` holds `api-recheck.json`, `api.log`, `reg/regimes-out.json`, `near.json` and the fetched pages.
