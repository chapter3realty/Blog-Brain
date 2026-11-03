# Verify: /buyers/relocating/which-town/

Batch 2026-11-a, Lane U. Independent verifier, 2026-11-03. I did none of the research. I opened every source myself and re-ran every data script. Ledger: `facts.md` (its status column now matches this file). Struck wording: `buyers-relocating-which-town-struck.json` (14 entries; each struck sentence fires its entry and each approved wording fires none; `node tools/struck-check.test.js` prints "all controls pass").

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 16: 1, 2, 3, 5, 9, 13, 14, 15, 19, 21, 22, 24, 25, 27, 28, 29 |
| CORRECTED | 14: 4, 6, 7, 8, 10, 11, 12, 16, 17, 18, 20, 23, 26, 30 |
| STRUCK | 0 |

No row is unpublishable. No figure was wrong in the data: the re-runs reproduce every number. Most corrections are wording that says more than the number, or wording a sibling verifier already struck.

## What I re-ran

- `analyze.py` on the same inputs, in a copy of the data folder: `findings.json`, `chart-towns.json` and `areas.geojson` came out byte-identical.
- `drives_houses.py` against the live OSRM router: every median identical. Then once more with two more hospitals (row 17).
- `pull_hoa_extra.py` against the live CRM map API: 29585 and 29511 identical; 29569 now 152 listings, 94 with no fee, middle still $0.
- CRM API totals for six feature sets: within 2 of the ledger (3,702; 702; 1,105; 1,245; 286; 339).
- `bill.py` on the six PINs: all six 2026 bills read the same (district/levy, assessed value, fees, residential exemption, total).
- All 32 ACS files re-fetched from data.census.gov: identical. Variable labels checked: B25034_002E "Built 2020 or later", _003E "Built 2010 to 2019".
- Horry County 2026 levy PDF (certified 7/27/2026), SCDOR ST-500 (Rev. 3/9/2026) and tourism page, S.C. Code 56-2-90 and 53-3-125, the Aynor act page, the SCDOT bridge page, the county parks page, the Myrtle Beach decal page, Parking Meters page and two news items, the North Myrtle Beach and Conway sanitation pages, two Solid Waste Authority pages, the Georgetown County tax calculator: all opened today, every quote looked for.

## Corrections

| Row | Was | Use instead | Why |
|---|---|---|---|
| 4 | about 8 in 10 (74 to 81 percent) | about 3 in 4 or more (74 to 81 percent) | 74 to 76 percent is about 3 in 4 |
| 6 | about $1,070 in FEMA's high-risk zones | about $1,070 in zone A or AE, among owners who carry a FEMA policy | the figure is zone A only; V zones cost about $2,640 |
| 7 | about half the lots (58 and 43 percent); a fifth to a third of an acre | more than half around Aynor (58), more than 4 in 10 around Loris (43); about a sixth to a third of an acre (0.17 to 0.34) | the words did not fit the numbers |
| 8 | half built before 1985 / 1990; about 1 in 3 in Longs (39 percent) | in 1985 or earlier / 1990 or earlier; about 2 in 5 in Longs, about a third in Carolina Forest and Conway | a median year includes that year; 39 percent is 2 in 5. Longs ACS = all of ZIP 29568 |
| 10 | Pawleys and Murrells Inlet "each plus $96"; "2026" for Georgetown; $89.40 on every bill outside towns | Pawleys plus $96 or $44 by district (04 or 42); "the county's current estimate"; "most bills" | the calculator gives $44 for district 42 and no tax year (WTB 21); a district 800 bill shows $0 (CTO 12) |
| 11 | about $1,030 around Loris | about $1,030 around Loris outside the city limits; about $1,940 inside the City of Loris | 954 of 4,742 Loris-ZIP houses are in the city at 282.2 mills; only 1,544 in district 200 |
| 12 | the owner buys it from the state's wind and hail association | the owner can buy that cover separately, for example from the association | CTO row 20 CORRECTED |
| 16 | insurance and upkeep cost about the same everywhere | cut; say the table uses one county insurance figure and one regional upkeep figure | the model assumes it; it is not a finding |
| 17 | 18, 19, 22, 29, 36, 39, 44 minutes; Pawleys hospital about 19 | about 20, 20, 20, 30, 35, 40, 45; Pawleys about 20 | the row's own rounding rule (CRAFT 2) |
| 17 | nearest of five hospitals | name the hospitals, or print no per-place hospital minute for Carolina Forest and Myrtle Beach | Tidelands Georgetown Memorial and McLeod Carolina Forest were left out. With both: Pawleys 17.8, Carolina Forest 9.4, Myrtle Beach 10.9, the rest unchanged. The summary sentence holds |
| 18 | RV or boat: Loris 31, NMB 27, Conway 17, MB 17 | Loris 31, NMB 27, around Pawleys 18, Conway 17, MB 17 | Pawleys was skipped |
| 20 | there is no county pickup | the county's Solid Waste Authority does not collect trash at the curb; owners pay a private hauler or use the 25 convenience centers | SWA: "The SWA does not provide residential trash or recycling curbside collection." |
| 23 | MB "bars it in its traditional neighborhoods"; NMB "allows it citywide"; Conway "only in three downtown districts"; "the subdivision's recorded rules decide" | the wording in the facts.md note, from WTB rows 2, 5, 7 and 8 | struck by the WTB verifier on 2026-11-02 |
| 26 | Aynor holds the Harvest Hoe-Down each fall; "Act 200 of 2014" | state law names the third Saturday in September "Aynor Harvest Hoe-Down Festival Weekend"; the Pilot Club started the festival in 1979; 2014 Act No. 182 | the act is from 2014 and does not say the festival is held now; R200 is the ratification number |
| 30 | Most North Myrtle Beach houses for sale list no HOA fee | About half | 134 of 255 in ZIP 29582; 133 of 320 inside the city |

## Notes for the writer

- **One place, two counts.** Around Loris, row 14 gives 93 of 151 houses for sale with no HOA fee and row 18 gives 92 of 152, for the same ZIP area (and today's re-pull gives 94 of 152). Print one pair. Carolina Forest: "none of 122" (place outline, row 18) and "13 of 363" (ZIP 29579, row 14): do not print both.
- **Row 21 has a current source now.** The Parking Meters page (with an October 1, 2026 item) says "Resident Parking Decal Free" and that decals allow free parking at meters and pay stations. Story `beach-parking-resident-pass` asked for this check: who qualifies (a vehicle registered and taxed in the city, licence address matching), cost (free; $20 to replace) and office (Pavilion Parking Garage, 914 North Kings Highway) are now answered.
- **Not verified 2 is partly closed.** The SWA Residential Resources page lists Aynor, Loris and Surfside Beach (and Briarcliffe Acres, Atlantic Beach) as towns that offer trash and recycling service. It gives no schedule.
- **Row 22.** S.C. Code 56-2-90 was amended again in 2026 (Act No. 164, eff May 18, 2026); the quoted parts are unchanged. The five-year decal also has to be replaced when the owner moves.
- **Row 19.** The ST-500 does not list local taxes a town collects itself. North Myrtle Beach voters rejected a 1 percent tourism fee in 2018 (news only); nothing shows one now.
- **Row 6's quote holds a "|" ("house|lived in"),** which splits the markdown table at that row. I edited only the status and note cells; the researcher may want to write it "house, lived in".

## Not reachable from this session

- **mcleodhealth.org** (DNS refused for the fetch tool; a direct fetch was refused). A search result shows McLeod's release "McLeod Health Carolina Forest Hospital Now Admitting Patients" (four beds, January 2025) and later items saying the 48-bed hospital opens this fall. Retirees row 36 says not to call it open. That is why row 17 says to name the hospital set or leave out the Carolina Forest and Myrtle Beach hospital minutes.
- **Municode** (Cloudflare check). The Horry County solid waste ordinance was not read; row 20 rests on the SWA's own pages.

## Photos (PLAN.md stand-ins)

| Entry | File | Licence checked | Result |
|---|---|---|---|
| Loris, Aynor, Socastee bridge | new NAIP aerials (not made yet) | USDA NAIP, federal work | Public domain. Check each frame against the parcel outline when made (lesson B29). |
| Longs, Carolina Forest, Socastee subdivision | where-to-buy NAIP aerials | record in where-to-buy `photos.json` | Public domain (USDA NAIP via The National Map). |
| Little River, Garden City, Murrells Inlet, Pawleys causeway | sibling NAIP aerials | records in each sibling `photos.json` | Public domain. |
| North Myrtle Beach, Surfside Beach, Myrtle Beach | USGS oblique aerials, 2011 (doi 10.5066/F7N877XX) | records in sibling `photos.json` | Public domain (USGS). |
| Conway city hall | File:Conway_city_hall_0782.JPG | Commons API today: "CC BY-SA 3.0", artist "Pollinator at en.wikipedia", "City Hall, Conway, South Carolina", 2006 | OK with credit. The 2026-11-a record is in `data/2026-11-a/submarkets-conway/photos.json`. |
| Conway riverwalk | File:Waccamaw_River_Warehouse_Historic_District_Jun_10.JPG | file page today: "{{PD-self}}", Pubdog, 2010-06-20, "Waccamaw River Warehouse Historic District, June 2010" | OK. Caption it as the warehouse district, 2010. |
| Pawleys north end | File:Pawleys_Island_North_End.jpg | file page today: "{{self/cc-by-sa-4.0}}", Phoebe, 2023-07-28, "North end of Pawley's Island at low tide, July 2023" | OK with credit. |

I did not look at the image files themselves; the writer looks at each at full size before captioning (CRAFT 4).
