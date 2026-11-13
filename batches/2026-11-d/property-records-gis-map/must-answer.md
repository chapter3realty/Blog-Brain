# Must-answer: /buyers/property-records/gis-map/

## The deciding fact

**The Horry County GIS parcel map now opens on a sign-in screen** (facts 2 to 5). Every reader who types "horry county gis" lands on "Username / Password / Requires a www.horrycountysc.gov account". The suggestions show them stuck there: "horry county gis login", "... property search free", "... free online", "... free app". No local page says what the screen is, how to get past it, or what to do without an account.

That makes the page's job clear: get the reader through the sign-in, then through the map, in under a minute. Then offer to do it for them: "No account? Send us the address."

The test passed: the page can be written as planned, and its first screen has a reason to exist that the county's own page does not give.

## Who searches this and why

- **A buyer looking at a house or a lot.** They want the lot's lines, its size, its zoning and whether it is in a flood zone. Behind it: "Is the fence on the line?", "Can I add a pool or a shed?", "Is this lot as big as the listing says?"
- **An owner with a neighbor question.** Fence, driveway, trees, a shed. They type "property lines" and fear a dispute. They need to hear plainly that the county map is not the line, and when to call a surveyor.
- **Someone who has only a name or an address,** looking up who owns a lot or its PIN for a tax bill or a deed.
- **A buyer of land** checking acreage, zoning code (CFA, FA) and the aerials.

## Questions people search, ranked

From the lead's suggestions (`kw/suggest.json`, 36 GIS-related strings), my suggestion pulls (`raw/suggest/`, 20 seeds) and DataForSEO volumes.

| Rank | Question | Evidence | Answer (from facts) |
|---|---|---|---|
| 1 | Where is the Horry County GIS map, and how do I get in? | "horry county gis" 8,100/mo; "horry county gis login"; "gis parcel application" | The link, then: make a county account (Register), sign in, maybe a two-factor code (1 to 5). |
| 2 | Is it free? | "property search free", "free online", "free app", "by name free" | The form asks for name, email, address and phone, and no payment (5). Verifier confirms before "free" is printed. |
| 3 | How do I search: by address, by owner name, by PIN or TMS? | "property search by address / by name / by owner", "parcel id search", "pin number lookup", "tms number" | Search tab: Address, Owner, PIN, TMS (9). Owner: type each word of the name. Every parcel has an 11-digit PIN; about 1 in 4 has no TMS, so use PIN or address (19, 20). |
| 4 | How do I find property lines in Horry County? | "property lines", "property lines map", "lot lines", "property map by address" | Zoom in until the line lengths show (23, 24), measure with the Tools tab (11), read the Deed Book and Page on the card (10), then the recorded plat (deeds page). |
| 5 | Is the Horry County GIS map accurate? | "how accurate are gis property lines", "are gis maps accurate for property lines" | The county says it is for taxes, not surveys (15). Our count: on 4 in 5 lots with a listed acreage, the drawn lot is within 5% of it; 1 in 10 is off by more than 10% (35 to 38). |
| 6 | What is the tax map, and what is my tax map number? | "horry county tax map" 1,000/mo; "tax map number", "tax map number lookup", "tax map pdf", "tms map" | The tax map is this parcel map; the TMS is the 10-digit tax map number (20, 21). The card shows PIN and TMS (10). No PDF sheets were found on the county site; say "the map is the tax map" only if the verifier agrees. |
| 7 | What does the parcel card tell me? | "parcel information", "parcel data" | Fields in fact 10: owner, PIN, TMS, zoning, acreage, deed book and page, date transferred, soil type. No value or tax. |
| 8 | Can I see old aerial photos of my property? | "horry county gis map" sessions; owner's wow ask | 11 years of county aerials, 1998 to 2026, about 6 inches a pixel (12, 13). |
| 9 | What does my zoning code mean (CFA, FA, HC, SF 10)? | "horry county zoning code cfa / fa / hc", "zoning map" | Ordinance Table 2-1 and Section 201 (39 to 42). Inside the cities the county map shows no zoning (29). |
| 10 | Is the lot in a flood zone? | "horry county flood gis", "flood map gis" | Turn on Flood Zones (28). The meaning of each zone belongs to /buyers/flood-zone-check/. One line and a link. |
| 11 | When do I need a surveyor, and how do I find one? | "horry county surveyors", "land survey", "property survey" | A fence, a building near a line, a dispute, a lot split, buying land. The state's licensee lookup (55). |
| 12 | Georgetown County GIS (Pawleys Island, Litchfield) | "georgetown county gis", "... tax map", "... by owner", "pawleys island tax map" | Open with no sign-in (44); search by 13-digit TMS, address or road; owner search is on qPublic (45 to 48); 65% of parcels carry a plat reference (51). |

People also ask (Google, from the suggestion patterns and the pages ranking): "How do I find the property lines on my land?", "Are GIS maps accurate for property lines?", "How do I find out who owns a property in Horry County?", "What is a TMS number in South Carolina?", "How do I find my PIN number for my property?". All are covered above.

## What siblings already own, and what this page owns

Read: every page that mentions GIS, parcels, tax maps or property lines (31 pages, greps in `wt-139/chapter3realty`), and `reports/cannibalization-2026-11-08.json` (no cluster on GIS, parcels or property lines). No live page answers any GIS question. Today the site names "Horry County GIS" only as a source credit, on about 25 pages.

| Page | Owns | This page's line toward it |
|---|---|---|
| /buyers/property-records/ (hub, parallel) | horry county property records, property lookup, property search, property search by name (880), records search | Links up in the first paragraph. The hub sends "GIS", "tax map" and "property lines" here. This page does not use "property records" or "property search by name" in its title, H1 or headings. |
| /buyers/property-records/deeds/ (parallel) | land records 18,100, register of deeds, deed search, plat book and plat search | The card's Deed Book and Page and the plat as the next step after the map. One sentence and a link. No how-to for the deeds search here. |
| /buyers/property-records/tax-bill/ (parallel) | tax payments, tax assessor, tax records, tax office, tax bill search | The PIN from the map opens the bill. One sentence and a link. |
| /buyers/flood-zone-check/ (parallel) | is this house in a flood zone, FEMA flood map Horry County, flood zone study | "Turn on Flood Zones" and a link. No zone meanings, no counts of homes. |
| /buyers/property-taxes/ | horry county property tax rate, 4% vs 6%, calculator | Not touched. |
| /buyers/land/ (parallel) | land for sale horry county, acreage, farms | Links here for reading zoning codes and acreage on the map. The land page should not explain the GIS map. |
| /buyers/undisclosed-flooding/ | did this house flood | Not touched; the old aerials could be a link from there to here. |

**This page owns:** horry county gis (8,100), horry county gis map, gis parcel viewer, gis parcel search, horry county gis login, horry county gis property search free, gis property search by address and by owner (as GIS queries), horry county tax map (1,000), tax map number, TMS number, PIN number lookup, parcel lookup and parcel map, horry county property lines (140) and property lines map, "is the GIS map accurate", horry county zoning map and zoning code (CFA, FA, HC), georgetown county gis and tax map, pawleys island tax map.

**For the lead to settle:** "horry county zoning map / code" has no owner today. It fits here because zoning is a layer on this map. If /buyers/land/ plans a zoning section, it should link here instead.
