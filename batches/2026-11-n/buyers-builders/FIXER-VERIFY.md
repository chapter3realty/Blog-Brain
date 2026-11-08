# Fixer rows, independent check: /buyers/new-construction/builders/

Batch 2026-11-n, Lane N. Verifier, 2026-11-08. Rows F1 to F10 of `facts.md` ("Rows added in review round 1"), all marked VERIFIED-BY-FIXER. I opened each source myself. I did not edit the page or the spec.

How I checked:
- Deed rows: I re-ran `analyze.py` with the verifier's three fixes (the same patch points as `verify_corrections.py`). The output went to a scratch file. Then I read the kept sales by seller, plat, postal town and parcel position (scratch scripts in `scratchpad/wfn/buyers-builders-fv/`). Every count matches `findings-verified.json`.
- 10-K rows: I downloaded the PHM, MTH, DHI, LEN and NVR filings from EDGAR again today and searched the text.
- Del Webb: delwebb.com community page, the Census geocoder (Public_AR_Current) and the site's own Del Webb page.
- Listings: `findings-verified.json` listings, and a live check of the CRM map API today: house 943, townhouse 96, condo 42 (1,081, against 1,086 at 07:36Z). That is normal daily movement. The page says "on the day we counted".

| Row | Status | Note |
|---|---|---|
| F1 | CORRECTED | The counts hold: 16 sellers with 50 or more, 15 without the community companies, and the five together sold 239. The words "carry its name" do not hold. Waterbridge SC LLC sells in the plat Waterbridge (31 of 36) and Heritage SC LLC in Heritage Park (31 of 32). Baytree SC LLC sells in Shorehaven Village, Shorehaven and Waterside Village (60 of 64). Cedar Branch SC LLC sells in The Willows (38 of 38). Banbury SC LLC sells mostly in Traditions (memo "SUB TRADITIONS"), with 19 in the plat Banbury. "In one community" holds: each company's parcels lie within about 1.3 km of each other, in one mailing town. |
| F2 | VERIFIED | Myrtle Beach 105 and Little River 64 of 239 (71%). The 105 are Waterbridge SC 36 and Banbury SC 69. |
| F3 | CORRECTED | The table's leaders hold with the community companies left out (Little River: D.R. Horton 62, Ashton Woods 59). But Baytree SC LLC alone sold 64 new homes with Little River addresses, more than D.R. Horton. The page calls these companies "sellers" that "sell new homes", so "D.R. Horton sold the most in ... Little River" is not true as written. It needs the same limit as the table. The page also leaves out Galivants Ferry (D.R. Horton 41 of 42). That is not wrong. |
| F4 | VERIFIED | PHM 10-K (EDGAR, opened today): "Through our Del Webb brand, we address the needs of active adults." The brand list quote is also found. |
| F5 | VERIFIED | delwebb.com page for Del Webb North Myrtle Beach (HTTP 200): "1315 Saw Palmetto Street, North Myrtle Beach, South Carolina 29582", brand Del Webb, PulteGroup, Inc. Census geocoder: 33.823117, -78.700481. All 114 Pulte sales with North Myrtle Beach addresses are in the plat CHESTNUT GREENS and lie within 735 m of that address. The site's page says "Pulte builds them and sells them under its Del Webb name." One fault in the ledger note, not on the page: "no other large builder does" is not right. Beverly Homes has 18 sales within 800 m, and Chris Manning has 5. The page sentence does not rest on that note. |
| F6 | VERIFIED | D.R. Horton: houses 232 of 248; 3 or 4 bedrooms 109 + 108 = 217; median 1,774 sq ft. Lennar: houses 37, townhouses 23; 3 or 4 bedrooms 33 + 20 = 53 of 60; 1,839. Pulte: houses 31 of 31; 3 bedrooms 21; 2,705, the largest of the five (Ryan's one listing is 2,324). Meritage: houses 29 of 29; 3 or 4 bedrooms 15 + 14 = 29; 1,649. |
| F7 | VERIFIED | Mungo: Conway 107 of 206; Arcadia (90) has Myrtle Beach addresses. Great Southern: Conway 100 of 182. Dream Finders: Conway 97 of 149. Ashton Woods: Little River 59 of 94. |
| F8 | VERIFIED | Of the 15 on the chart, Toll Brothers has the highest median ($612,309), and also the highest p75 and p90. The lowest medians are Lennar $258,000, Starlight $258,740 and Dream Finders $309,000. Of the five largest, Pulte is highest ($487,553) and Lennar lowest. |
| F9 | VERIFIED | At or under $300,000: Beverly 22, Stanley Martin 16, Starlight 16, DRB 13. D.R. Horton (83) and Lennar (45) are named just above, so "also" is right. No other builder has more than 9. |
| F10 | CORRECTED | All five own all or part of a mortgage company. DHI Mortgage is "our wholly owned subsidiary". Lennar has its "financial services subsidiaries". NVR has its "wholly owned subsidiary, NVR Mortgage Finance, Inc." Pulte has Pulte Mortgage LLC. Meritage refers to "our interest in the joint venture". "Most of their buyers who take a mortgage use it" holds for four: DHI 81% of all homes closed, LEN 84% of buyers who used a mortgage, NVR capture rate 86%, PHM 84.7% without cash closings. It does not hold for Meritage. Its 10-K gives no share and says: "Most of our buyers finance their home purchases through our mortgage joint venture or third party lenders providing mortgage financing." Its joint venture is "engaged in mortgage broker activities". |

## Sentences to change

1. F1, section "Which builders build the most new homes around Myrtle Beach?"
   - Now: "Five more sellers each sell new homes in one community and carry its name, such as Waterbridge SC LLC in Waterbridge."
   - Replace with: "Five more sellers are companies that each sell new homes in one community, such as Waterbridge SC LLC in Waterbridge."
   - Ledger F1 claim: change "each named for one community" to "each selling in one community".

2. F3, section "Where does each builder build in Horry County?"
   - Now: "Each town has its own leaders. D.R. Horton sold the most in Conway, Loris, Little River and Surfside Beach, and Lennar in Longs, Myrtle Beach and North Myrtle Beach:"
   - Replace with: "Each town has its own leaders. Among the builders on the chart, D.R. Horton sold the most in Conway, Loris, Little River and Surfside Beach. Lennar sold the most in Longs, Myrtle Beach and North Myrtle Beach:"
   - Another fix would be to drop Little River from the sentence. The table already lists D.R. Horton first there.

3. F10, section "What are the five largest builders like?"
   - Now: "Each of the five owns all or part of a mortgage company, and most of their buyers who take a mortgage use it."
   - Replace with: "Each of the five owns all or part of a mortgage company. At the four that give a share, most buyers who take a mortgage use it."

No new number is needed for any of the three. The `must()` lines in the spec stay as they are.
