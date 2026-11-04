# Fixer rows re-checked: /buyers/relocating/which-town/

Independent verifier, 2026-11-04. Rows F1 to F19 of `facts.md` (fix round 1), each marked VERIFIED-BY-FIXER. I opened each source, re-ran the scripts behind the data rows, and read each sibling row and its status. Statuses and notes are now set in `facts.md`. The four struck wordings are in `buyers-relocating-which-town-struck.json` (rows "which-town F3, F5, F11, F12"). `node tools/struck-check.js` finds all four on the current page. The approved wording fires no entry. `node tools/struck-check.test.js`: all controls pass.

Counts: 15 VERIFIED, 4 CORRECTED, 0 STRUCK.

| Row | Status | What I checked |
|---|---|---|
| F1 | VERIFIED | Re-ran `drives_houses.py` today on the saved parcel points, in a scratch copy. All 13 hospital medians are the same as in `drives-houses.json`. The table rounds them by the CRAFT 2 rule (Pawleys 18.5 is "20"). The five hospital points are at the five hospitals. The note under the table names all five, as row 17's verifier asked. |
| F2 | VERIFIED | Read S.C. Code 12-37-250(A)(1) live: the first $50,000 of value is exempt from county, city, school and special taxes, after a year as a resident and at 65. Arithmetic: 50,000 x 0.04 x 91.9 / 1000 = $183.80, and in Conway x 163.4 = $326.80. The one-year 2026 amount of $75,000 is only for owners who qualified in 2025, so it does not apply to someone moving here. |
| F3 | CORRECTED | CTO rows 17 and 18 are VERIFIED ($2,000; $1,300 to $3,000). Read 38-75-310(5)(c) live: the line is "east of U.S. Highway No. 17 or By-Pass 17, whichever is farther to the west". "East of US 17" leaves out the Bypass. A reader can take US 17 as Kings Highway (Business 17) and place the line too far east. Registry `wind-pool-line` keeps the full line ("In Myrtle Beach that is the Bypass"). |
| F4 | VERIFIED | $8,319 (findings.json surfside-beach total) + $1,000 more for insurance + $1,074 (row 6, zone A) = $10,393, about $10,400. Zone check against the county flood layer: of Surfside's 841 houses in the high-risk zone, 831 are AE and 10 are VE. The A-zone price is the right one for a typical house there. |
| F5 | CORRECTED | Row 6's figures hold ($1,074 from 2,603 policies; $551 from 11,453). The added gloss is wrong. A coastal AE zone can get breaking waves up to 3 feet: FEMA's Limit of Moderate Wave Action marks where waves of 1.5 feet or more are expected. Only the V zones are where waves of 3 feet or more are expected. The Pawleys Island page already uses the approved AE wording: "Water rises in a big flood, but big waves are not expected." |
| F6 | VERIFIED | Re-pulled the CRM `has=rv_boat_parking` house set today (338 pins, API total 339) and counted it in `areas.geojson`. Loris has 31 and North Myrtle Beach 27, the same as the saved pull. Conway has 16 today, one fewer. |
| F7 | VERIFIED | Same re-run as F1. Aynor has the longest drives to the beach (45.1) and to a hospital (29.5). Myrtle Beach: beach 9.6, airport 13.2, mall 10.3. Socastee: 13.1, 13.8, 10.9. Flood shares from row 5 (VERIFIED): Socastee 10.8, Conway 4.5, Myrtle Beach 4.6. 10.8 is about 1 in 9 and more than twice either one. |
| F8 | VERIFIED | `data/2026-10-d/buyers-new-construction/chart-new-vs-nearly-new.json`: Longs new 188.4 (196 listings), nearly new 186.2 (67). Row 6 there is verified. These are listings grouped by mailing city, and the page says "with a Longs address". |
| F9 | VERIFIED | `findings-communities.json`: Grande Dunes North (197 sales) is 2nd and Waterside Neighborhood (137) is 4th of the ten. Both are all inside North Myrtle Beach (municipality). I checked this myself with the county Municipalities layer 31 at each middle point today, and both return NORTH MYRTLE BEACH. Both points are inside this page's North Myrtle Beach outline. The county address layer 22 within 300 m of each point: 188 and 185 address points, all with postal city Longs. |
| F10 | VERIFIED | Retirees row 36 is verified (ribbon cut August 27, 2026; not called open), and row 63 says the same. The hospital's points (Nominatim 33.7575, -78.8526; Census geocoder 33.7579, -78.8545) are inside the Carolina Forest outline, so "here" holds. The page does not call it open. |
| F11 | CORRECTED | Re-pulled the CRM `has=str_allowed` house set today (455 pins, API total 455). Carolina Forest now has 1 house listed as open to nightly rentals, so "Not one" is false a day after the pull. The other ten WTB places are within 1 of WTB row 14. HOA part: today, for ZIP 29579, houses $50,000 and up, 373 listings, 13 with no fee. 157 are at $100 or less and 254 at $125 or less, so the middle is $125 to the $25 step. That part holds. |
| F12 | CORRECTED | City parks page re-read live: Main Street, McLean Park ("a 10 acre park with a two acre lake"), Ingram Dunes ("the last remaining maritime forest in North Myrtle Beach"), and the Cherry Grove ramp ("boat access ... to the Atlantic Ocean via Hog Inlet"). NMB row 6 (Senate, home of the shag) is VERIFIED. City STR page re-read live: "no special zoning or permit process required beyond standard licensing". But it also says "STRs must comply with applicable ordinances related to trash collection, parking, noise, and occupancy". "Only a yearly business license and the lodging taxes" overstates it. WTB row 5's verifier made the same correction. |
| F13 | VERIFIED | Surfside rows 40 and 17 are VERIFIED; row 5 is CORRECTED and the page uses its wording (R3 12.9, R1 71.1, "taxed as"). Row 40 is a straight-line measure (largest 0.8 mile). The town's streets run straight back from Ocean Boulevard, so "less than a mile" holds by road as well. |
| F14 | VERIFIED | horrycountysc.gov/about-our-beaches re-read live: "Golf Carts Are permitted on the beaches from November 1 through February 28 and must have a valid state permit and operated by a licensed driver." The rule covers the county's beach only, and the page says "its beach". |
| F15 | VERIFIED | Conway rows 13, 18 and 19 are all VERIFIED (6 major floods 2015 to 2025, from 14 on the crest list; the 14-foot impact statement names Long Ave and Sherwood Dr near Crabtree Swamp; 480 of 8,935 homes in either zone). The streets named at 11 to 13 feet are outside the city (row 19 verifier), so "first streets to flood" holds for the city. |
| F16 | VERIFIED | Pawleys row 15 (479 of 480; the page leaves out the lender line), row 9 and row 10 ($2.45 million over three years, 28 sales) hold. I recounted with `gt-homes.json` in the 29585 outline, using the same $10,000 rule: 392 sales, median $648,880, and 11 of them on the island. That is 97 percent off the island, so "nearly all" holds. |
| F17 | VERIFIED | solidwasteauthority.org/residential.html re-read live: "The SWA does not provide residential trash or recycling curbside collection". It lists the towns that offer trash service: Aynor, Briarcliffe Acres, Conway, Myrtle Beach, North Myrtle Beach, Surfside Beach, Loris and Atlantic Beach. recyclingcenters.html: "Only residents living in the unincorporated areas of Horry County can utilize the 25 Recycling Convenience Centers." Little River is unincorporated. A hauler an HOA hires is still a private hauler. |
| F18 | VERIFIED | stories.json `insurance-quote-before-offer`, status usable. The page uses CTO row 21's corrected wording, with the condition "If you buy with us". No agent or company is named. |
| F19 | VERIFIED | The 900 by 675 m frame lies entirely inside the Loris outline (ZIP 29569) and is 0.0 percent inside the City of Loris, so "Outside Loris" is right. I looked at the image at full size: houses on wide grass lots along a diagonal road and a north-south road, with sheds, plowed fields across the road and woods at the lower left. `node tools/photos.js check`: all photo records pass. Public domain NAIP 2023, credited. |

## Sentences to change on the page

Each one is quoted exactly from `chapter3realty/buyers/relocating/which-town/index.html`. Edit the spec, not the page.

1. **F3**, cost section, "Insurance." list item.
   - Now: "East of US 17, an insurer may leave wind and hail out, and you can buy that cover separately."
   - Use: "East of US 17, or of Bypass 17 where it runs farther west, an insurer may leave wind and hail out. You can buy that cover separately."
2. **F5**, cost section, "Flood insurance." list item.
   - Now: "Those are FEMA's high-risk zones away from breaking waves."
   - Use: "Those are FEMA's high-risk zones where big storm waves are not expected."
3. **F11**, entry 7, Carolina Forest.
   - Now: "Not one house for sale here is listed as open to nightly rentals."
   - Use: "Almost none of the houses for sale here are listed as open to nightly rentals."
4. **F12**, city-line section, the rentals list.
   - Now: "North Myrtle Beach: no special zoning or permit, only a yearly business license and the lodging taxes."
   - Use: "North Myrtle Beach: no special zoning or permit, beyond a yearly business license and the lodging taxes."

Each replacement is under 28 words. None opens with "So" or uses we, our or us.
