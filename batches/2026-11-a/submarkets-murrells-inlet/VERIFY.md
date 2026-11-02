# Verification: /submarkets/murrells-inlet/ (batch 2026-11-a)

Independent verifier, 2026-11-02. I did not research these facts. Ledger: `facts.md` (status and note columns updated in place; each note starts "Verifier (2026-11-02)"). Struck list: `submarkets-murrells-inlet-struck.json` (24 entries; each fires on its struck wording and no approved wording fires; `node tools/struck-check.test.js` prints "all controls pass"; the live page has none of the struck wording).

A CORRECTED row may be used only in the safe wording in its note.

## Counts

| Status | Rows | Count |
|---|---|---|
| VERIFIED | 1, 2, 3, 4, 5, 6, 7, 8, 14, 15, 17, 18, 19, 21, 24, 25, 26, 27, 28, 35, 37, 38, 40, 42, 45, 46, 47 | 27 |
| CORRECTED | 9, 10, 11, 12, 13, 16, 20, 22, 23, 29, 30, 31, 32, 33, 34, 36, 39, 41, 43, 44, 48, 49 | 22 |
| STRUCK | none (row 41's finish date is struck inside a corrected row) | 0 |

## How I checked

- Re-ran every script in `data/2026-11-a/submarkets-murrells-inlet/` in my own folder (`wf2/submarkets-murrells-inlet/verify/`): `analyze.py`, `names.py`, `analyze_listings.py` (which re-queries the live CRM for the HOA brackets), `analyze_fema.py`, `parse_airroi.py`, `places.py`, `build_charts.py`. All eleven outputs are identical to the researcher's.
- Re-pulled live: TIGERweb CDP, counties, incorporated places and ZCTA; Horry layers 20, 22, 31; Georgetown Export 0 and 2, Boundaries 1 and 2, PubSafety 0; the CRM totals; OSRM (every leg in row 31); NOAA tide predictions and station metadata; the SCDNR shellfish layer.
- Checked FEMA zones on 44 random homes against FEMA's national NFHL service: all 44 agree.
- Read three 2026 Horry Treasurer bills on the Horry side west of the bypass (districts 610 and 600; levy, fees and ratio only).
- Re-checked the house, condo and townhouse split against the county land use codes the 2026-10-d ledgers use.
- Opened every other URL in the ledger and read the quoted text on the live page or the re-downloaded file.
- Could not reach: fema.gov's API (error page; the Garden City verifier re-pulled the same 3,665-policy file today), huduser.gov (202; the Little River verifier downloaded `FY27_safmrs.xlsx` today, and I read ZIP 29576 in it), the Georgetown County School District's school list (loads by script), a Georgetown tax bill (no bill search could be read).

## Corrections

1. **Row 9.** 929,000 / 560,000 = 1.66: "about 1.7 times", not 1.6. Not "all" east of Business 17: 217 there plus 5 between the roads. The 21 sales are a floor (last sale only).
2. **Row 10.** Horry "other" is 70 townhouses, 7 houses and 1 manufactured home. Use townhouses: 70 sales, about $320,000. Georgetown condos, both parts: 21 sales, about $280,000.
3. **Row 11.** 465 listings, not homes: they include 38 lots and 5 multi-family buildings.
4. **Row 12.** Wynbrooke has no houses and Marcliffe (331 condos) is larger. Largest house neighborhoods: Indigo Creek 559, Seasons at Prince Creek West 441, Pines of St. James 370, Longwood Bluffs 258.
5. **Row 13.** Highwood crosses the county line (48 homes in Horry, 74 in Georgetown). Wilcox and Briggs is between the roads, not on the creek; these are neighborhood names, not streets.
6. **Row 16.** The county calculator states no tax year. Say "Georgetown County's current estimate", never "2026". The $96 is storm water and household fees.
7. **Row 20.** Cut "cheap". The $1,080 is A zones only; V zone (16 Georgetown house policies) about $2,160.
8. **Row 22.** Not every home: 2 of 8,945 are in Burgess Elementary's zone. The map is the district's 2025-26 lines.
9. **Row 23.** Not every home: 3 west-side homes fall outside the county's zone polygons. Drop "every".
10. **Row 29.** "Nightly renting pays most for big houses" claims a net result from gross figures. Say the gross gap grows with size.
11. **Row 30.** Crazy Sister Marina and the landing are at the MarshWalk's south end, not its middle (OSM way 930398329 and the county landing point).
12. **Row 31.** Pawleys Island is 17.2 minutes: "about 15", not "15 to 20".
13. **Row 32.** The square-foot caps apply "unless special geographic circumstances and land uses warrant a larger structure", and subdivisions with dock master plans approved by May 24, 2002 are exempt from the narrow-creek rules. The cap counts pierheads, floats, roofs and lifts, not walkways. R.30-12 was last amended May 23, 2025; the text read is current.
14. **Row 33.** NOAA names the station "Capt. Alex's Marina, Murrells". Drop "on Parsonage Creek".
15. **Row 34.** The county layer does not say the four landings are county-owned or public. Say "Georgetown County's boat-landing map lists four".
16. **Row 36.** Add the carve-out: one limit a day on no more than two days in any seven. No license under 16. The layer says "Partially Closed SCDES", not "for bacteria".
17. **Row 39.** Compare like with like. Houses: 85.2% legal residence (Murrells Inlet) against 59.6% (Garden City). All homes: 78.5% against 38.3%.
18. **Row 41.** Strike "a preliminary finish of March 2028". It assumed dredging from 2025; news in 2026 says the Army Corps permit was still pending. Keep only "the county plans" and the January 2025 estimate of about $30 million.
19. **Row 43.** Garden City has 29 no-HOA houses (23 Horry side, 6 at its Georgetown end), not 23.
20. **Row 44.** Not all of the Horry side is in the Murrells Inlet - Garden City Fire District: district 600 (774 homes) pays the county fire levies (2026 bill "600 / 201."). Say "most of the Horry side".
21. **Row 48.** The Georgetown Food Lion is on the US 17 bypass (133 m), not Business 17 (681 m). The Walmart Neighborhood Market is on the bypass, 1.1 km from SC 707.
22. **Row 49.** "No beach of its own" conflicts with the state park's Murrells Inlet, 29576 address. Say the Census's Murrells Inlet and the creek side have no ocean beach.

## Limits the writer must keep

- Row 4 and 6: "house" is land use 101 only. Adding codes 100, 102, 110, 126 changes the Horry house sales to 403 at $445,000; "about $450,000" holds.
- Row 17: the Georgetown figures use the county's current estimate (row 16), not a 2026 bill.
- Row 27 to 29: vendor data; say "AirROI counts".
- Row 38: a reference work; history only.
- Row 47: OSM only; whether each club is open or private is not checked.

## Photo candidates (PLAN.md)

Commons file pages read through the Commons API; each image opened at 1920 px except (1), which returned 429.

| Candidate | Licence on the file page | What it shows | Verdict |
|---|---|---|---|
| File:Boardwalk - panoramio (1).jpg | CC BY-SA 3.0, Dallas Epperson, 2008 | Not viewed (429). Its camera point is 33.5073, -79.0598, inside Huntington Beach State Park, about 6 km from the MarshWalk | Reject for the MarshWalk |
| File:Boardwalk - panoramio (6).jpg | CC BY 3.0, Thomson M, 2015 | A wooden boardwalk with metal rails through shrubs and trees; camera point 33.5073, -79.0669 (state park causeway area) | Reject: not the MarshWalk |
| File:Boardwalk - panoramio (5).jpg | CC BY 3.0, Thomson M, 2015 | Camera point 33.5095, -79.0635 (state park) | Reject: not the MarshWalk (as the retirees plan found) |
| File:Sunnyside - Murrells Inlet Historic District.jpg | CC BY-SA 4.0, Upstateherd, 2017-11-24 | A white one-and-a-half-story cottage, four-column portico, two central brick chimneys, live oaks: matches the NRHP description of Sunnyside | Usable for section 10, credit "Upstateherd, CC BY-SA 4.0"; caption "Sunnyside, built about 1850" |
| File:Huntington Causeway - panoramio.jpg | CC BY-SA 3.0, Miles Buddy, 2015 | A freshwater lake with pine woods behind; no beach and no salt marsh | Usable only as "the freshwater lake at Huntington Beach State Park, from the causeway"; not as the beach or marsh |
| File:20230601 183751 oyster landing.jpg | CC BY-SA 4.0, MISC-creekgirl, 2023-06-01 | Four people fishing from a sandy point at high water; no oyster bed visible | Reject: does not show an oyster bed, and people are the subject |
| NRHP 1980 photos (#1, #2, #4), npgallery.nps.gov 80003670.PDF | None stated. Taken by the S.C. Department of Archives and History, a state agency; a federal filing does not make a state photo public domain | Docks at low tide (#4), Sunnyside, the Hermitage | Not cleared. No licence record possible from this source |

The MarshWalk shot and the oyster bed still need the photo partner (shot list).
