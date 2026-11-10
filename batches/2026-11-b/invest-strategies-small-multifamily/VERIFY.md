# Verify: /invest/strategies/small-multifamily/ (batch 2026-11-b)

Independent verifier, 2026-11-10. I did not research this page. Prompt: `prompts/verifier.md`. Ledger: `facts.md` in this folder (status column updated). Struck list: `batches/2026-11-b/facts/invest-strategies-small-multifamily-struck.json` (21 entries; every struck sentence fires its entry, no approved wording fires any; `node tools/struck-check.test.js` prints "all controls pass").

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 36 |
| CORRECTED | 12 (row 31 with a part STRUCK) |
| STRUCK (whole row) | 0 |
| Total | 48 rows, plus the live-page triage list (9 live sentences in the struck list) |

Corrected: 5, 8, 14, 15, 16, 17, 26, 28, 29, 31 (4.7 percent struck), 33, R2. Row 18 is verified on its values with a status note.

## What I re-ran or opened myself

- **Data scripts.** I ran `analyze.py` on a copy, against the same raw files. `findings.json` came out identical (apart from the run stamp). `analyze_pums.py` on `psam_h45.csv` gave an identical `pums-2to4.json`. `check_codes.py` re-queried the county live and gave an identical `code-check.json`.
- **LIST.** I re-pulled `/homes/api/map?type=multi` at the 07:20 UTC refresh: 65 listings, the same 65 MLS numbers as the 06:00 pull, all "For sale". `&has=va_accepted`: 3. Of the 65, 10 fall outside the county line (5 Pawleys Island, 2 Georgetown, 2 Murrells Inlet, 1 Kingstree), and all 10 have no Horry parcel under the point. Middle ask of the 55: $679,900.
- **PARCELS.** A fresh statistics query on layer 24 (`MarketImprv>0`): 101 = 126,425; 102 = 984; 103 = 103; 104 = 181; 126 = 1,021. The layer has no coded-value domain for `LandUseCode`, and neither does the OpenData Parcels service. The county's `currentlanduse.pdf` returns 404, and horrycountysc.gov does not resolve from this session. The address layer's DESCRIPTION field is empty on these parcels. **No published code list was found.** The reading 102/103/104 = two-, three-, four-family rests on the address-point check (row 6) only.
- **Assessment ratio (row 33).** Assessed over taxable value: 1,055 parcels at exactly 0.060, 120 at 0.040, 63 at exactly 0.050 (a duplex at half 4 and half 6 percent), and the rest between. The three-way split in `analyze.py` reads them correctly.
- **ACS.** I re-fetched B25024 and B25032 for Horry County from data.census.gov. Every cell in row 14a matches.
- **HUD 4000.1.** I downloaded Update 18 from hud.gov. It is byte-identical to the researcher's copy ("Issued: August 12, 2026"), and hud.gov's handbook page still links Update 18 as current. Every quote in rows 20 and 22 to 26 is in the text.
- **HUD-92561.** Re-downloaded from hud.gov. Both quotes are present. The form still shows "(Expires 10/31/26)": that date has passed, and the handbook still requires the form.
- **Freddie Mac.** I re-fetched the LTV page; the table matches row 28. Also opened: Freddie Mac Home Possible page, "maximum of 97% LTV ... for 1-unit properties".
- **SC Code 12-43-220.** Re-read on scstatehouse.gov. (c)(1) and (e) match.
- **HUD FHA limits.** The lookup form lists CY2026 as the newest year, so CY2027 is not out. The values in row 21 come from the FTHB copy, verified there on 2026-11-01.
- **Places.** I measured the median address point of each group. Tarpon Bay II: Forestbrook CDP, ZIP 29579, no town limits. Windtree Estates: inside the City of Myrtle Beach (county Municipalities layer), with 62nd to 67th Avenue North and North Kings Highway within 600 m. Garden City group: Garden City CDP. A Place at the River: Little River CDP.
- **Carried rows.** I read each named row in FTHB, RP, VA, HV, NMB, SSB, GC, CB, CF, FSBO, DSCR and 1031.

## Row by row

| # | Status | Note, and the safe wording where it changed |
|---|---|---|
| 1 | VERIFIED | 65 in all, 55 in Horry, same set at the 07:20 refresh. Say "listed as 2 to 4 units" (9 of the 55 sit on parcels coded 101). Sibling 1031 row 42 counted 51 in Horry on 2026-11-09; each page dates its own count, so no conflict. Story `multifamily-listings` holds ("fewer than 100"); its price range stays off. |
| 2 | VERIFIED | Median $679,900; p25 and p75 match. Keep the minimum and maximum off. |
| 3 | VERIFIED | Counts and medians match. Medians only where n is 9 or more. |
| 4 | VERIFIED | 32 / 14 / 9; 32 of 55 is 58 percent, so "most" holds. Straight line. |
| 4a | VERIFIED | 28 at or under $693,050. Keep the ledger's wording: "ask less than FHA's two-unit loan limit". |
| 4b | VERIFIED | 4 + 12 + 16 + 11 + 12 = 55. |
| 4c | VERIFIED | 3 of 65, re-pulled. |
| 5 | CORRECTED | The counts are right (984 / 103 / 181 = 1,268; 3,001 units if each code holds 2, 3 or 4). The county publishes no code list we could open, so the page cannot state the code meaning as the county's. Use: "Horry County's tax records put about 1,270 parcels with a building under the land-use codes we read as two-, three- and four-family buildings, about 3,000 homes in all [county parcels, 2026-11-10; code meaning is our reading, checked against address points]." |
| 6 | VERIFIED | Re-run identical: 102 multi-point 223, of which 194 have 2; 103 28, of which 19 have 3; 104 43, of which 23 have 4. The 101 check is the first 400 PINs by number, not a random sample: call it "a sample". Most parcels carry one address point, so the check rests on the minority (the ledger says so). |
| 7 | VERIFIED | "Other or no address point" = 28 + 2 + 1 = 31. These are mailing cities, not town limits. |
| 8 | CORRECTED | 910 of 1,240 is 73.4 percent, and 452 of 1,240 is 36.5 percent. Use: "Nearly 3 in 4 of the county's duplexes, triplexes and fourplexes stand within a mile of the ocean, and more than a third within a quarter mile, in a straight line. Of the 439 with a North Myrtle Beach mailing address, 354 stand within a quarter mile." Never "a short walk". |
| 9 | VERIFIED | 58 of 13,194 = 0.44 percent, so "4 in every 1,000" holds. $520,000; $411,000 to $846,000. |
| 10 | VERIFIED | Print counts beside the triplex (5) and fourplex (8) medians, or the duplex median only. |
| 11 | VERIFIED | Bands match. The chart title in the note ("Duplexes near the ocean sell for more") names the wrong group: 13 of the 58 are triplexes or fourplexes. Title it "Buildings of 2 to 4 homes near the ocean sell for more". |
| 12 | VERIFIED | 29 / 14 / 7 / 5; 27 companies; 18 with the tax bill mailed outside SC. Mailing state is the owner of record in the parcel data, as the out-of-state ledger defines it. |
| 13 | VERIFIED | Counts and median distances match. Measured places the writer may name: Tarpon Bay II is near Forestbrook (Forestbrook CDP, ZIP 29579, outside any town limits, about 5 miles from the ocean). Windtree Estates is inside the City of Myrtle Beach, around 62nd to 67th Avenue North, about 0.7 mile from the ocean. Never call Windtree inland. |
| 14 | CORRECTED | Values match. Two framing errors. (1) Windtree Estates is about 0.7 mile from the ocean inside Myrtle Beach, so "inland" is wrong for it. (2) "Two kinds of building" fails on the Hotel Section of Myrtle Beach: 23 buildings about 0.4 mile from the ocean, middle county value about $216,000, lower than the "inland" range. Use: "In the largest beach groups of North Myrtle Beach, Surfside Beach and Garden City, the county's middle value runs from about $447,000 to $685,000. In three groups away from the old beach blocks it is about $230,000 to $255,000: Windtree Estates in Myrtle Beach (about 0.7 mile from the ocean), A Place at the River in Little River (about 2.7 miles) and Tarpon Bay II near Forestbrook (about 5 miles) [county market value, 2026]." It is county market value, never a price, and never for one address. |
| 14a | VERIFIED | B25024: 2,492 + 6,459 = 8,951 of 217,419 (4.1 percent). B25032 owner: 276 + 1,403 = 1,679. Renter: 1,283 + 3,203 = 4,486. Rest: 2,786. The owner figure for 2-unit buildings has a wide margin (276 +/- 109), so round it ("about 1,700"). |
| 32 | VERIFIED | 12-43-220(c)(1) and (e) re-read live. Rented units do not get 4 percent. Units "occupied by immediate family members of the owner" do (same item). The 4 percent needs the owner's application; /buyers/property-taxes/ owns that. Consistent with DSCR row 11's struck-list wording. |
| 33 | CORRECTED | Counts match (213 of 1,268 = 16.8 percent, "about 1 in 6"). "In the inland groups the share is higher" is wrong. Ocean Terrace, a beach group in Surfside Beach, has 20 of 54 (37 percent), higher than Tarpon Bay II (20 of 75, 27 percent). Windtree is not inland (row 14). Use: "About 1 in 6 of these buildings is taxed at the owner's 4 percent rate on all or part of it. The share is lowest in North Myrtle Beach's old beach blocks (9 of 113 in Cherry Grove Beach, 4 of 42 in Ingram Beach) and highest at Windtree Estates (23 of 49), Ocean Terrace (20 of 54) and Tarpon Bay II (20 of 75) [county tax ratio, 2026-11-10]." Never "owned by people who live there". |
| 15 | CORRECTED | Values reproduce ($1,000 +/- 68; $1,135 +/- 92; 107 records). Geography: PUMAs 02701 and 02702 cover most of Horry County, not all of it. The 12 tracts of PUMA 02601 (Loris, Aynor, Green Sea) are left out (RP row 3 verifier, Census 2020 tract-to-PUMA file). Use: "In most of Horry County, a 2-bedroom unit in a building of 2 to 4 units rents for about $1,000 a month in lease rent, about $1,135 with the utilities the tenant pays, on leases of every age [ACS PUMS 2020-2024, 2024 dollars]." |
| 16 | CORRECTED | Values reproduce ($947 +/- 85; $1,099 +/- 51; house $1,400). Same geography fix: "in most of Horry County". The duplex-only figure ($927 +/- 190) stays off. |
| 17 | CORRECTED | Shares reproduce (62.3 / 21.2 / 14.5 / 2.1). Same geography fix. The 3-bedroom figure ($1,050 +/- 380, 24 records) stays off. |
| 18 | VERIFIED | The values match RP row 14 ($1,528 to $1,949, 2026-09-30). RP row 14's status is CORRECTED, not VERIFIED: its verifier changed the ZIP area labels. Use the ZIP or Zillow's city name only, as RP allows. Link /invest/rent-prices/ rather than repeat it. |
| 19 | VERIFIED | Matches RP row 9 ($1,504; $1,823; FY2027). Never mix it with the appraiser's "fair market rent" in rows 22 and 23. |
| 20 | VERIFIED | Both quotes are in Update 18 (Occupancy; Property Types). The handbook's limit is "Except as otherwise stated in this Handbook". Matches FTHB row 11. "Move out after a year" is struck (live 1). |
| 21 | VERIFIED | Matches FTHB row 26's verified result row. CY2027 is not out today; re-check before December publishing. |
| 22 | VERIFIED | II.A.4.c quotes found. The 75 percent rule is for "Limited or No History of Rental Income". The lease counts "if available". The income is added to income, not taken off the payment. |
| 23 | VERIFIED | Definition, standard and calculation found. The page states the standard (payment divided by net rent not over 100 percent). Triplex and fourplex only. |
| 24 | VERIFIED | "Reserves equivalent to three months' PITI after closing for three- to four-unit Properties." No dollar figure. |
| 25 | VERIFIED | Handbook (B)(2)(b), (3)(b) and (4)(b) require form 92561 for a 2 to 4 unit dwelling. Form text confirmed. Add the limit the form states: the promise holds "so long as" the FHA-insured mortgage is in place. Use: "On an FHA loan for a 2 to 4 unit building, the buyer signs HUD's form promising not to rent any part of it for under 30 days, or with hotel services, while the FHA loan is in place [HUD-92561; Handbook 4000.1 II.A.1.b.iv(B)]." Do not print the form's expiry date (10/31/26, already past). |
| 26 | CORRECTED | The 3.5 percent minimum applies to all 1 to 4 unit purchases, but there is a carve-out the row left out. II.A.2.b.ii(B): with a co-borrower who will not live there, the top LTV is 75 percent. A family co-borrower raises it to 96.5 percent, "provided the transaction does not involve ... a transaction on a two- to four-unit Property." No percentage on the page. Use: "When every buyer on the loan will live there, FHA asks the same smallest down payment on a duplex or fourplex as on a one-unit home. If a co-borrower, even a family member, will not live in a 2 to 4 unit building, FHA asks for a much larger down payment [HUD 4000.1 II.A.2]." |
| 27 | VERIFIED | Matches VA row 14 ("up to 4 units") and the occupancy rule of VA row 12. |
| 28 | CORRECTED | The table matches. "The same top share as on a one-unit home" holds only on the standard table. Freddie Mac's Home Possible allows "a maximum of 97% LTV ... for 1-unit properties" (Freddie Mac Home Possible page, opened 2026-11-10), above the 95 percent for 2 to 4 units. No percentage on the page. Use: "On Freddie Mac's standard loans, the top loan on a 2 to 4 unit building you live in matches its top loan on a one-unit home, when its system accepts the loan. Some of its low down payment programs allow more on a one-unit home only. An investor who lives elsewhere borrows a smaller share [Freddie Mac LTV table and Home Possible page]." |
| 29 | CORRECTED | The live sentence is on the page, but the DSCR verifier (DSCR row 3) ruled on the "tax returns" wording. Use: "The lender qualifies the loan on the rent, not on your income." Link /invest/strategies/dscr-loans/. |
| 30 | VERIFIED | 4 x $1,000 = $4,000; less 25 percent = $3,000. Label it as an example. The appraiser's rent, not the Census median, is what FHA uses. Never print a payment. |
| 31 | CORRECTED (part STRUCK) | Arithmetic holds: $24,000 / $512,000 = 4.69 percent; $512,000 / 2 = $256,000. **Strike the 4.7 percent and the rent-against-price pairing.** The groups differ. The rent is the Census median for rented units on leases in place, mostly year-round leases, in most of the county. Half the price median is North Myrtle Beach beach buildings, where few owners file for 4 percent and leases are not the main use. The periods differ too (2020 to 2024 leases in 2024 dollars; 2025 to 2026 deeds). Keep the per-home comparison with HV's group name. Use: "Per home, the middle duplex sold for about $256,000, against about $350,000 for a resold house or other home and about $215,000 for a resold condo in the same 12 months [county deeds, Oct 2025 to Sep 2026]." |
| W1 | VERIFIED | Matches NMB row 1 (four towns, 1968). |
| W2 | VERIFIED | Matches NMB row 6 (1-1-665, 1984). |
| W3 | VERIFIED | Matches NMB row 59, as worded there. |
| W4 | VERIFIED | Uses CB row 75's corrected SCDNR wording exactly. The pier's "world record" stays struck (CB list). |
| W5 | VERIFIED | Matches SSB row 17 (814 ft, all concrete, town-owned, opened March 14, 2024, free to walk). |
| W6 | VERIFIED | Matches GC row 49. The Garden City group's points are in Garden City CDP, so the tie holds. |
| R1 | VERIFIED | Matches FSBO row 4 (27-50-20, -40(A), -50(A)). |
| R2 | CORRECTED | RP row 20's verifier gave the wording, and noted that state law does limit some rents (39-5-145 after an emergency; 27-40-910 retaliation). Use: "South Carolina does not let a city or county limit rents on privately owned homes [SC Code 27-39-60]." Never write that no law limits rent. |
| S1 | VERIFIED | Matches RP row 24 in meaning ("an agent runs the number from current local leases and listings ... at no cost, before you write the offer"). Keep "runs the number"; "sets the rent" overstates what the agent does. |
| S2 | VERIFIED | Live page offer box text matches. The ledger note holds: "any association documents". |
| S3 | VERIFIED | Matches RP row 23. **Flag for the lead:** the analyzer returns a rent estimate for any address, and this batch's hard rule bars "an automated value for any address". RP's verifier flagged the same line and did not strike it. The page itself must print no estimate. "Prices one unit at a time" was not checked against the tool. The writer checks it or cuts it. |

## Struck from the live page

The researcher's triage list holds, and every item is in the struck list (`smf live 1` to `live 7`). I add two more live sentences that the data contradicts or nothing supports:

- "On the Grand Strand, these buildings cluster in Conway, the older parts of Myrtle Beach, and pockets of North Myrtle Beach." The county's parcels show North Myrtle Beach (439), Myrtle Beach (362) and Surfside Beach (187) first, with Conway at 110 of 1,268 (row 7). Use rows 7 and 8 (`smf live 8`).
- "That is why the good ones go under contract fast." No source; days on market were not measured (`smf live 9`).

## Should not be published at all

- The 4.7 percent gross rent against the median duplex price (row 31). The rent and the price come from different groups.
- Any sentence that states the county's code meaning as fact (row 5), any "inland" label on Windtree Estates (rows 14, 33), and any "you can move out after a year" (row 20).
- Any percentage from rows 26 and 28 (down payment and LTV: Reg Z trigger terms on consumer credit, BIZ-4).
