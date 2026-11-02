# Verification: /submarkets/garden-city/ (batch 2026-11-a)

Independent verifier, 2026-11-02. I did not research these facts. Ledger: `facts.md` (status and note columns updated in place). Struck list: `submarkets-garden-city-struck.json` (14 entries; each fires on its struck wording and no approved wording fires; `node tools/struck-check.test.js` prints "all controls pass").

## Counts

| Status | Rows | Count |
|---|---|---|
| VERIFIED | 1, 3, 4, 5, 6, 8, 9, 10, 11, 12, 15, 17, 21, 22, 23, 24, 25, 27, 28, 29, 30, 31, 33, 36, 37 | 25 |
| CORRECTED | 2, 7, 13, 14, 16, 18, 19, 20, 26, 32, 34, 35, 38 | 13 |
| STRUCK | none | 0 |

## How I checked

- Re-pulled County GIS layers 24, 22, 19 and 18 myself (`fetch_county.py` into my own folder): the same 22,157 parcels, 21,048 address points, 91 flood polygons and 2,981 road lines. Re-pulled the TIGER counties, the 2020 CDP and the 2020 blocks. Re-ran `analyze.py` on my pull: `findings.json` came out identical. Then recounted the stock and sales with my own code.
- Overpass would not answer (three mirrors reset or timed out). I re-fetched the 8 Waccamaw Drive ways and the pier way from api.openstreetmap.org (same geometry) and compared the marsh and water features in an OSM map extract with the researcher's file (same set). The marsh layer itself is the researcher's extract.
- Re-ran the Census, NOAA, OpenFEMA, CRM, OSRM and AirROI pulls and their scripts: every output identical.
- Read 2026 tax bills on the Treasurer's site for districts 600, 610, 620 and 624 (levy and assessment lines only; no owner detail kept).
- Opened every other URL in the ledger and read the quoted text on the live page.

## Corrections

| Row | What was wrong | Use instead | Source |
|---|---|---|---|
| 2 | "About a quarter mile (0.24) south of the pier." 0.24 is only the difference in latitude. | The county line meets the shore about a third of a mile (0.3 mile) along the beach south of the pier. | TIGER county line crossed with the OSM coastline (33.5727 N, 79.0012 W), 0.31 mile from where the pier meets the beach; the southmost Horry ocean-side home parcel is 0.32 mile from the pier. |
| 7 | "Fewer than 1 in 10 homes is anyone's main home." A home at 6 percent can be a tenant's main home. | Fewer than 1 in 10 ocean-side homes is taxed as its owner's main home (the 4 percent rate). The numbers stand. | County GIS layer 24; 2026 bills confirm the ratios. |
| 13 | "About 300 houses on the marsh; 14 sales, about $1.17 million." The flag also caught houses on inland ponds and lakes (Stanley Lake and five other polygons 100 to 660 m from any marsh or creek; about 44 houses). | About 260 houses (258) sit on the marsh or a tidal creek. The 13 that sold went for about $1.24 million at the middle ($1,237,000; middle half $900,000 to $1,995,000), about twice the other houses (2.15 times). | Same parcels and deeds; untagged OSM water counted only within about 50 m of marsh or a tidal creek. |
| 14 | Houses: 56 sales, $567,500 (follows row 13). | The other houses between Waccamaw Drive and Business 17: 57 sales, about $575,000 at the middle (middle half $395,000 to $697,500). Condos stand: 37 sales, $225,000. | As row 13. |
| 16 | "57 of 89" and "64 of 208" count every sale. The row and the 2026-10-d method count only sales where the current owner is the deed's grantee; `analyze.py` did not filter. | Ocean-side condos: 55 of 86 sales went to a buyer whose tax bill goes to another state (64 percent). West of Business 17: 64 of 201 (about 1 in 3). | `out-of-state-buyers.json`, `owner_is_grantee`. |
| 18 | "About 195 homes"; "24 homes listed" at the Georgetown end. The 195 includes 3 lots and 3 multi-unit buildings; the 24 includes 1 lot. | 195 listings (189 condos, houses and manufactured homes, 3 multi-unit, 3 lots); 24 listings at the Georgetown end. The other figures stand. | CRM map API, re-pulled 2026-11-02. |
| 19 | "The lowest-cost way to own east of Business 17 is a manufactured home." At the middle, condos there cost less: 23 condos asked about $240,000, below the manufactured homes' $257,000, and condos sold for $225,000 (row 14). | The lowest asking prices east of Business 17 are on manufactured homes, from about $80,000 (condos from $169,000). Their middle ask between Waccamaw Drive and Business 17 is about $257,000 (42 listed); the lot rent is not in the price. | CRM, re-pulled. |
| 20 | "Horry County has no short-term rental permit." No county page says so; it is an absence. The zoning code (Municode) still blocks both curl and a headless browser. | Horry County's own list of filings for a short-term rental in unincorporated areas names no rental permit [STR tax chart]. The four filings stand. Do not say "no zoning limit". | Horry County STR tax chart and business license page, re-read 2026-11-02. |
| 26 | "Garden City homes on the Horry side pay 207.3 mills." Not all do. | Most Garden City homes, and every ocean-side home, pay 207.3 mills in 2026 (county tax districts 610 and 624). 1,335 of the 3,142 homes west of Business 17 are in district 600 at 201.0 mills, and 252 homes between Waccamaw Drive and Business 17 are in district 620 at 234.5 mills. The line items (52.1, 119.1, 28.0, 8.1; school operation 109.1) stand. | 2026 bills on the Treasurer's site: "District/Levy: 610 / 207.3", "600 / 201.", "620 / 234.5", "624 / 207.3". A 4 percent bill shows the school operating exemption at 109.1 mills ($931.71 on 8,540 assessed). Every bill checked adds $89.40 in fees. |
| 32 | "In summer, bands play every night." The pier's page does not say "in summer"; it says "weather permitting". | Bands play every night, weather permitting, at both ends of the pier. 668 feet, no license with a pier pass, summer fishing 24/7 and Hugo in 1989 stand. | gardencitypier.com, re-read. |
| 34 | "Only round umbrellas up to 7'6"." Leaves out the carve-out. | Round umbrellas up to 7 feet 6 inches across, and small pop-up cabanas for infants (no larger than 4 by 3 by 3 feet); no tents or canopies, year-round. The other rules stand. | Horry County, About Our Beaches: "Shading devices, other than circular umbrellas ... and small pop-up/blow-up cabanas no larger than 4' x 3' x 3' for infants and very small children, are not permitted". |
| 35 | "The nearest NOAA tide gauge." NOAA lists historic water-level stations at Garden City Pier (8661437) and Garden City Bridge (8661419). | The nearest working NOAA tide gauge, Springmaid Pier, about 7 miles north. The trend stands. | NOAA CO-OPS station lists (waterlevels, historicwl). |
| 38 | "Garden City has its own fire district ... 28.0 mills on Horry-side bills." The district is shared with Murrells Inlet, and district 600 bills (201.0 mills) carry the county fire levy instead. | Most of Garden City is in the Murrells Inlet - Garden City Fire District, which it shares with Murrells Inlet; bills in it carry a 28.0-mill fire levy [2026 levy]. | 2026 levy sheet and bills; the district's 2016 boundary act covers parts of both counties. |

## Notes on verified rows the writer must keep

- Row 6 and every "between" figure (rows 7, 14, 28): the part called "between Waccamaw Drive and Business 17" also holds about 434 home parcels in the wedge north of where Waccamaw Drive ends, between Business 17 and the Surfside Beach town line. Say "east of Business 17, on the creek side" or define the part on the map.
- Row 21: the quotes are correct. "County sales taxes" are two local taxes the state collects for the county (ECI and TT on ST-575).
- Row 22: Georgetown County's 3 percent does not apply to stays of 30 or more days; the state tax stops at 90.
- Row 24: AirROI's own figure is 4.9 times. "About 5 times" is fair rounding.
- Row 27: the tax figures leave out the $89.40 in fees on every 2026 bill checked. Say "property tax", not "bill".
- Row 29: the three block groups hold 2,771 of the 3,379 strip units, plus homes off the strip.
- Row 33: the Huntington Beach State Park time is to a point inside the park (Jetty Drive). CRAFT 2 rounding gives "about 15" or "15 to 20", not "17".
- Row 36: 8.4 days a year drops 2016 (68 missing days); with every year it is 7.8. "About 8" covers both.

## Not verifiable here

- Horry County zoning on short-term rentals (Municode returns 403 to curl and blocks a headless browser). The "Not verified" list in `facts.md` stands.
- The marsh and water polygons could not be re-pulled from Overpass; I checked the feature set against an OSM map extract instead.

## Photo candidates (PLAN.md)

| Candidate | File page says | Verdict |
|---|---|---|
| File:ThePieratGardenCity.jpg | 273 x 261 px; Johnsonar2, own work, 11 May 2005; CC BY-SA 3.0 Unported. | Licence as stated. Too small (under 1,200 px). Not usable. |
| File:Garden City - The Clipper Ship Inn.jpg | 1,475 x 950 px; E. C. Kropp Co. postcard, circa 1945; public domain in the US (published 1931 to 1977 without a copyright notice). Postcard text: "10 miles south of Myrtle Beach on US17". | Licence as stated. Only the Commons title puts it in Garden City. Caption only what it shows: the Clipper Ship Inn on US 17, a postcard from about 1945. |
| USGS Imagery Only exports (usgs-strip-aerial.jpg, usgs-pier-aerial.jpg) | Service copyright text: "USDA, USGS The National Map: Orthoimagery. Data refreshed June, 2024." US government work. | Licence fine; credit "USGS The National Map, orthoimagery (USDA NAIP)". Looked at both full size. The strip aerial has a large blank white block in the lower right (no imagery over the sea): crop it or fill it before use. The pier aerial shows the pier, but it is soft. The imagery is from 2024 or earlier, before the 2026 renourishment. |
| DVIDS 9820096 (USACE Charleston District) | "PUBLIC DOMAIN"; 5389 x 3593; taken 07.17.2026; location Surfside Beach, SC. | Licence fine. DVIDS places it in Surfside Beach: do not caption it Garden City unless the picture shows Garden City. Images 9820087 to 9820095 not opened. |
