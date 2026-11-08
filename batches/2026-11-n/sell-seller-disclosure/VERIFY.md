# Verifier report: /sell/seller-disclosure/

Batch 2026-11-n, Lane N. Independent verifier, 2026-11-08. I did not research these rows. Every source below was opened by me today; scripts were re-run in my own folder (`wfn/sell-seller-disclosure/rerun/`), not in DATA.

## What I opened and re-ran

- SC Code, title 27 ch. 50, title 48 ch. 39, title 15 ch. 3, title 40 ch. 57: fetched live from `https://www.scstatehouse.gov/code/statmast.php?title=..&chapter=..`. Byte sizes equal the researcher's raw copies. Every statute quote in the ledger is word for word on the live page, except the "Effect of Amendment" line in row 4 (not on the page; see row 4).
- The commission's form: fetched live from `llr.sc.gov/re/recpdf/Property-Condition-Disclosure-Statement-06.2025.pdf`; md5 393ba8c3af8a7a1f0f0a2802e26ecd5c, the same file. `llr.sc.gov/re/resources.aspx` links it today. Every form quote found in the text (some only in `pdftotext -raw` because of the two-column layout). The PDF has 7 pages: the form is "Page 1 of 6" to "Page 6 of 6", and the addendum is PDF page 7.
- `build_form_checklist.py` re-run on my own `pdftotext -layout` of the live PDF: the same text file, the same `form-checklist.json` (byte equal). Counts 9 / 28 / 11 and own-years items [5, 7, 19, 20, 25, 26, 27, 28] reproduce. I checked "during your ownership" by hand: it appears only at 5B, 7B, 19, 20, 25, 26, 27, 28.
- OpenFEMA NfipClaims v3, countyCode 45051, re-pulled live: 12,525 records from 1978; 8,815 paid; high 6,686, outside 2,047, unknown 82; Matthew 1,033 paid, Florence 895 paid. All match.
- `analyze_ownership.py` re-run on the sibling's parcel pull (`wf2/buyers-undisclosed-flooding/raw-big/`): output equal to DATA `ownership-findings.json`. The county layer 24 is live and has the field `SaleDate`.
- NWS storm pages (UF raw): Matthew landfall October 8, 2016 (McClellanville, SC); Florence landfall September 14, 2018 (Wrightsville Beach, NC). The cutoffs in the script match.
- Census: `pull-acs.sh` and `analyze_acs.py` re-run live: `acs-findings.json` equal. B25034 labels for 2025 1-year checked at `api.census.gov/data/2025/acs/acs1/groups/B25034.json`: same decade groups. Horry 1-year arithmetic redone: 19,107 + 3,276 + 5,973 + 1,456 + 2,385 = 32,197 of 237,850 = 13.5 percent; before 1970 13,090 = 5.5 percent.
- EPA lead disclosure page: live; all quotes match, including "most pre-1978", the Lead Warning Statement and "all available records and reports".
- DES jurisdictional lines page: live; "between 2024 and 2028" and the Beaufort Phase I list "in effect as of July 24th, 2026" match. The page also says the viewer shows "approximate locations" and "a property-specific survey must be performed" for an exact position.
- DES setback lines (Shorelines MapServer layer 3): `fetch_beachfront.py` re-run live: 180 pieces on 9 Horry beaches, equal to the researcher's file.
- `query_seaward_parcels.py` re-run live: see row 18.
- FEMA NFIP data FAQ, Utah CLUE page, Tennessee CLUE page: opened live; quotes match.
- 2018 Act No. 245 (H.3886): `https://www.scstatehouse.gov/sess122_2017-2018/bills/3886.htm`.
- USGS data release 11CCH03 (https://doi.org/10.5066/F7N877XX): metadata, photo locations CSV, and the three candidate frames pulled from their zips and looked at full size.

## Counts

29 rows: **18 VERIFIED, 11 CORRECTED, 0 STRUCK.**

- VERIFIED: 1, 3, 5, 7, 8, 9, 11, 12, 13, 15, 16, 17, 19, 21, 24, 25, 26, 29.
- CORRECTED, wording: 2, 6, 10, 14, 18, 22, 23, 27, 28.
- CORRECTED, source or citation only (claim stands): 4, 20.
- Nothing here should stay off the page entirely; the photo `2011_0824_181304d` and `2011_0824_175531d` should not be used.

## Row by row

| # | Status | Note |
|---|---|---|
| 1 | VERIFIED | 27-50-20, 27-50-40(A), 27-50-50(A) and form page 1 match live. Resources page links the 06.2025 PDF. Matches FSBO 4. |
| 2 | CORRECTED | 27-50-10(4) matches. "Each signs" is not in the law; the form only has two "Owner Signature" lines. Use: "The law's duty falls on each owner named in the contract. The form has signature lines for the owners." [SC Code 27-50-10(4); form page 6]. Second sentence (common areas) verified. |
| 3 | VERIFIED | 27-50-50(A), (B) match live. |
| 4 | CORRECTED (source only) | The nine items match 27-50-40(A)(1)-(9). The quoted "Effect of Amendment ... added (9)" line is not on the scstatehouse page; the page shows only the history line. The 2018 date is right: 2018 Act No. 245 (H.3886) says it amends 27-50-40 "SO AS TO REQUIRE THESE STATEMENTS INCLUDE WHETHER PROPERTY IS SUBJECT TO GOVERNANCE OF A HOMEOWNERS ASSOCIATION". Claim stands as written; cite the Act. |
| 5 | VERIFIED | 27-50-30, all 15 items, matches live; FSBO 5's safe wording kept ("only", "solely"). |
| 6 | CORRECTED | The list in 27-50-30 is closed, so the reading holds, but item (13) (both agree in writing) is open to any seller, and item (12) and the court and lender items can apply to a company. Use: "The law lists no exemption for an investor, a landlord, a second-home owner or a company. The 'never lived in' exemption covers only the first sale of a home no one has ever lived in. A rental you never lived in still needs the form, unless the sale is one of the 15 exempt kinds." [SC Code 27-50-30] |
| 7 | VERIFIED | Form pages 1 to 3 and 27-50-40(B), (C) match. Part V runs from question 15 to 28, so "15 to 28" is right. Keep the researcher's limits on "actual knowledge" and "constructive knowledge". |
| 8 | VERIFIED | Form page 1 matches; same as FSBO 10 and UF 4. |
| 9 | VERIFIED | 27-50-60, form page 1 "(example: roof begins to leak)", and the purchaser's page 6 acknowledgments match. |
| 10 | CORRECTED | 28 numbered and 11 addendum questions reproduce. But "nine parts" is wrong as written: the form numbers ten parts, I to X; part X is "PLEASE USE THE SPACE BELOW FOR 'YES' ANSWER EXPLANATIONS". The nine subject parts match the law's nine items. Use: "The form has nine parts of questions, one for each subject the law names, and a last part for explaining your Yes answers. It asks 28 numbered questions, each answered Yes, No or No Representation, plus lines where you describe things such as where the water comes from, the roof's age, termite treatment, leases and contamination." [SC disclosure form, updated June 2025]. Sibling note: FSBO 8's approved wording also says "nine parts"; see NEEDS.md. |
| 11 | VERIFIED | Checked by hand: "during your ownership" is at 5B, 7B, 19, 20, 25, 26, 27, 28 and nowhere else. Keep "eight items", not "eight questions", and the limit on "a fixed problem still goes on the form". |
| 12 | VERIFIED | Questions 20, 22 to 28 match the form text. FSBO 9 verifier wording carried. |
| 13 | VERIFIED | Re-pulled OpenFEMA live: 8,815 paid; outside 2,047; 23.4 percent. Claims, not homes. |
| 14 | CORRECTED | Counts reproduce (80,497 of 219,225 = 36.7 percent; 63,941 = 29.2 percent; Matthew 1,033 and Florence 895 paid claims). Two fixes. (a) 36.7 percent is not "about 1 in 3"; write "more than 1 in 3 (37 percent)". (b) "For those owners, the form's questions ... reach back over those storms" claims the same owner since the sale date, which the field cannot show (a trust or estate transfer may not change SaleDate). Use: "More than 1 in 3 homes in Horry County (37 percent) last sold before Hurricane Florence in September 2018, and about 3 in 10 (29 percent) before Hurricane Matthew in October 2016. If you have owned your home since before those storms, the form's questions about 'your ownership' cover them. FEMA paid 1,033 flood claims in the county for Matthew and 895 for Florence." [Horry County parcels, last recorded sale date, read 2026-11-01; OpenFEMA, re-pulled 2026-11-08]. Denominator: homes with a recorded sale date (7,772 have none). Never say these homes flooded. |
| 15 | VERIFIED | FEMA FAQ opened live (curl worked today): both quotes match. "Check before you answer" is our advice; Q25 asks only your own years. |
| 16 | VERIFIED | Utah and Tennessee pages live; quotes match ("up to 5 years", "up to seven years"). UF 9 wording carried; never say CLUE shows flood claims. |
| 17 | VERIFIED | 48-39-330 and 48-39-280(A)(1), (B) match live. The statute says "seaward of the setback line or the jurisdictional line"; DES treats the baseline and setback line together as the jurisdictional lines, and the setback line is the landward one, so "seaward of the setback line" is the right test. 48-39-330 also says "Language reasonably calculated to call attention to ... complies". Keep "ask the attorney to include it". |
| 18 | CORRECTED | Re-run reproduces every count. Firmness fix; see below. |
| 19 | VERIFIED | 48-39-280(C) and the DES page match live. The nine islands are all in Beaufort County. Horry's new lines: none listed; print no date. |
| 20 | CORRECTED (citation only) | The addendum is one page, PDF page 7, not "pages 7 and 8". The 11 questions, the charges line and the contact line match. Claim text stands. |
| 21 | VERIFIED | EPA page live; all quotes match, including the four exceptions. |
| 22 | CORRECTED | Numbers reproduce. But the line "from 1 percent in Carolina Forest to about 1 in 3 in Conway" (ledger header) and the claim's order make Conway look like the top. It is not: Loris 56.1 percent (710 of 1,265), Aynor 36.2, Surfside Beach 35.4 (Atlantic Beach and Briarcliffe Acres are higher still but tiny). Use: "About 1 in 7 homes in Horry County was built before 1980 (13.5 percent), and about 1 in 20 before 1970. The share changes a lot by town: more than half in Loris, about 1 in 3 in Conway and Surfside Beach, 28 percent in Myrtle Beach, 19 percent in North Myrtle Beach, and about 1 percent in Carolina Forest." [ACS 2025 1-year (county) and 2020-2024 5-year (towns), B25034]. Housing units, not houses for sale. Label the mixed vintages on the chart, or use the 5-year county figure (16.0 percent, about 1 in 6) beside the towns. |
| 23 | CORRECTED | Form VII.A and 27-50-250(A) match. Two limits the claim leaves out. (a) 27-50-250 is in the Vacation Rental Act, which "does not apply to" condominiums that rent units with "a front desk or office for customer service", a centralized phone system, or free housekeeping (27-50-220(B)(1)); many oceanfront condo-hotels here are that kind. (b) 27-50-250(B): "Before ratification of any contract of sale, the grantor shall disclose to the grantee in writing all future time periods that the property is subject to a vacation rental." Use: "Leases and vacation rentals in place at closing go on the form. Under the state's Vacation Rental Act, the seller lists every future rental period in writing before the contract, and the buyer takes the home subject to rentals that begin within 90 days after the deed is recorded. That act does not cover a condo rented through a hotel-style front desk; ask the closing attorney." [SC Code 27-50-220, 27-50-250; form part VII] |
| 24 | VERIFIED | 27-50-90(A) to (C) match live. The three items are the whole list. |
| 25 | VERIFIED | 27-50-110 matches; 27-50-30 has no as-is exemption. |
| 26 | VERIFIED | 27-50-65 and form page 1 match. Say "the form says" for the report rule. |
| 27 | CORRECTED | 15-3-530 matches, but "for fraud the time starts when the buyer discovers it" is too wide. Item (7) covers only fraud claims once heard in chancery. Most other claims for injury to a person's rights fall under item (5), and 15-3-535 starts that clock when the person "knew or by the exercise of reasonable diligence should have known". Use: "Many claims in South Carolina must be filed within three years (SC Code 15-3-530). When the clock starts depends on the claim; an attorney can say which applies." No discovery-rule sentence. |
| 28 | CORRECTED (explanation) | Form page 1 and 27-50-70(A), (B) match. The note's plain meaning of "material adverse fact" leaves out a health risk. 40-57-30(25) also covers a condition "presenting a significant health risk to occupants". Use: "a material adverse fact, meaning a problem that significantly lowers the home's value or soundness, or is a significant health risk to the people who live there" [SC Code 40-57-30(25)]. |
| 29 | VERIFIED | 27-50-80 matches live. |

## Row 18 (re-run)

**CORRECTED (firmness).** I re-ran `fetch_beachfront.py` (180 setback pieces, file equal) and `query_seaward_parcels.py` live against the county parcel layer (the server returned HTTP 500 for a while; I raised the retries in my copy only). The new `seaward-findings.json` is equal to DATA's: 10,740 residential parcels with a building; condo 9,609, house 515, townhouse 9, other 607; by beach NMB 4,181, Myrtle Beach 2,952, Arcadian Shores 1,766, Garden City 1,368, Surfside 356, Briarcliffe Acres 117 (sum 10,740); 177 dropped over 150 m. 9,609 / 10,740 = 89.5 percent ("nearly 9 in 10" holds).

Hand checks. (1) Two oceanfront houses from the list (PINs 42301030004 and 42405020002, Myrtle Beach): their county address points are 32 m and 17 m from the setback line, on the land side, and their lots cross the line. (2) A point on Kings Highway at 33.7200 N, 78.8600 W is 893 m from the line, outside the 400 m band, so inland streets cannot enter the count. (3) Of the 557 listed parcels that have their own address point, 478 houses have the point on the land side of the line: the house itself is usually landward, and the lot reaches past the line. That is what 48-39-330 counts ("in whole or in part seaward"), but the page must never say the house or building is past the line. Condo units are counted on their regime's land, once per unit.

The claim states as fact what is a count from two maps; DES says its viewer shows "approximate locations" and "a property-specific survey must be performed". Use: "By our count from the state's and the county's maps, about 10,700 homes in Horry County sit on lots that reach seaward of the state's setback line, nearly 9 in 10 of them condo units (9,609) and about 500 houses (515). For a lot like that, the sale contract needs the beachfront statement. A survey settles where the line falls on a given lot." [SC DES Shorelines layer 3; Horry County parcels, read 2026-11-08]. By beach as listed. Keep the researcher's group and firmness limits.

## Photos (PLAN.md, section 7)

Licence: verified. The USGS release metadata says "Public domain data from the U.S. Government are freely redistributable with proper metadata and source attribution. Please recognize the U.S. Geological Survey as the originator." Credit: U.S. Geological Survey, 2011. The photo locations CSV gives the same plane positions as PLAN.md for all three frames. I pulled each frame from its zip and looked at it full size.

- `2011_0824_181304d`: **reject for this use.** It shows an undeveloped dune, shrub and maritime forest, no houses. The plane is at the Hog Inlet end, east of the North Myrtle Beach setback line pieces (they end at 78.603 W); this is Waties Island. PLAN.md's "houses behind the dune line" is wrong.
- `2011_0824_180321d`: **usable.** Two oceanfront condo towers on the beach beside a swash, a golf course behind, beach umbrellas. Plane in the Arcadian Shores stretch. Caption only what it shows: "Oceanfront condo buildings north of Myrtle Beach in 2011". No building name; the towers are recognizable, so never say any building is past the line.
- `2011_0824_175531d`: **reject.** The frame is out of focus (houses are a blur). The plane, at 33.5659 N, is also south of Horry County's southern edge (33.569 N on the county outline), so the shore in it is in Georgetown County.

## Struck wording

The list is `sell-seller-disclosure-struck.json` in this folder (the task limits my files to it). The lead copies it to `batches/2026-11-n/facts/sell-seller-disclosure-struck.json` for batch mode. Tested with `node tools/struck-check.js` (result below).

10 entries (rows 2, 6, 10, 14 twice, 18, 22, 23, 27, 28). A test page of the struck wording fires all 10; a test page of the approved wording fires none (`node tools/struck-check.js <list> <page>`). `node tools/struck-check.test.js`: all controls pass. Rows 4 and 20 change only the source or citation, so they have no entry.
