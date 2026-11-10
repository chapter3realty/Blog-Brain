# Verification: /buyers/waterfront-homes/ (batch 2026-11-b)

Independent verifier, 2026-11-10. I did none of this research. Prompt: `prompts/verifier.md`. Ledger: `facts.md` in this folder. Struck list: `batches/2026-11-b/facts/buyers-waterfront-homes-struck.json` (21 entries; each fires on its struck wording and stays quiet on its approved wording; `node tools/struck-check.test.js`: all controls pass).

## What I did

- Copied the data folder and the RAW files into my own scratch folder (`vwf/`) and re-ran `oceanfront.py`, `analyze.py`, `analyze_listings.py` and `sunrise.py`. `deeds-findings.json`, `listings-findings.json` and `sunrise.json` came out identical to the researcher's.
- Put random samples on USGS NAIP aerials with the county parcel outlines: 10 oceanfront lots, 10 rejected lots within 130 m of the coastline, 15 lots that a corrected rule adds, 20 lake lots (with the USGS outlines drawn), and 20 oceanfront-condo sale points.
- Ray-cast the sunrise direction for every day of 2026 from every coastline point between 33.69 N and 33.83 N against the county land polygon.
- Opened live: NOAA's solar equations PDF, Coast Pilot 4 chapter 12 (01 NOV 2026), the SC DNR saltwater FAQ, both US Fish and Wildlife Service refuge pages, the North Myrtle Beach parks page and the Cherry Grove boat ramp page, the county flood layer (layer 19: 758 high-risk polygons, the same as the pull) and the CRM map API (Plantation Lakes, no-HOA, waterfront and ocean counts).
- Read every reused row in its own ledger (WF, NMB, GC, MI, PI, CM, CTO, LR) and the story in `stories/stories.json`.

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 3, 4, 5, 6, 9, 13, 14, 15, 18, 19, 20, 21, 22, 24, 25, 28, 29, 30, 32, 33, 34 (21) |
| CORRECTED | 1, 2, 8, 10, 11, 16, 23, 26, 27, 31 (10) |
| STRUCK | 7, 12, 17 (3) |

## Corrections and strikes

**Row 1. CORRECTED.** The oceanfront rule misses first-row houses. On the aerial, all 10 sampled oceanfront lots are first row. But 5 of 10 rejected lots within 130 m of the coastline are plainly first row too. Each was rejected because its sweep, which runs to the nearest point of an offshore coastline, clipped a sliver (0.5 to 3.9 m deep) of the built lot next door. I let a built neighbor block only when the overlap is 8 m deep or more, within 140 m of the coastline. All 15 lots that change then sampled as first row. That run gives 512 houses (not 411) and 29 resales (not 20), middle $2,175,000 (not $2,157,500), middle half $1.61 million to $3.64 million. The nearby off-water figure stays $615,000 (355 sales). Safe: "More than 400 houses in Horry County sit in the first row on the beach. In the year to September 2026, at least 20 of them resold, and the middle price was about $2.2 million. Other houses within a kilometre, off the water, resold for about $615,000 [deeds and county parcels; our count]." Cut the middle-half range. The researcher should fix the sweep and re-run before any count is printed above "more than 400". The same fix changes `chart-flood.json` (411) and row 16.

**Row 2. CORRECTED.** The 60 m building locator also picks up condos set back from the beach. Of the 83 sale locations, 20 were checked on the aerial. 8 locations (25 sales) are clearly not on the beach: 2 sales at a Little River point 3.3 km inland, and buildings 190 to 320 m from the coastline in north Myrtle Beach and inside Kingston Plantation. Three more resort buildings (34 sales) are doubtful. Without the 8, the count is 644 at $206,000; without all 11, it is 610 at $196,250. Myrtle Beach: 445, $145,000. North Myrtle Beach: 158 at $515,250, or 143 at $460,000. Safe: "More than 600 condos in oceanfront buildings resold in the year, for about $200,000 at the middle. In Myrtle Beach the middle was about $150,000, and in North Myrtle Beach about $500,000 [deeds; CRM building flags; our count]." MB ledger row 18 (459, $148,000) uses the same locator and likely holds about 12 of these set-back sales. "About $150,000" covers both figures; its owner should know. The chart's condo bar ($213,900) should read about $200,000.

**Row 7. STRUCK.** The USGS lake outlines do not mark houses on a lake. On the aerial, 20 random lake resales gave about 9 or 10 on the water. The rest are lots in new subdivisions or construction sites where the USGS pond outline sits under houses or graded land, lots across a road or 100 m from the pond, and lots next to woods or a ditch. No lake price from deeds. The chart's lake bar and its title ("a lake the least") go. The listing lines in row 11 (429 for sale, about $450,000) are the page's lake figure.

**Row 8. CORRECTED.** $366,000 on 5,538 resales re-runs, but "on no water" is not what the group is. It holds houses on ponds the USGS layer misses, and leaves out houses it wrongly marks (row 7). For the reference bar, use the countywide figure I computed from the same kept sales and the same house land uses: "The middle house resale in Horry County in the same year was about $375,000 (5,836 resales) [deeds]."

**Row 10. CORRECTED.** 32 of the 717 condos that list a unit facing the ocean are not in the 1,105 "oceanfront building" set. So "about 720 of them" is wrong: 685 of the 1,105 list both, at $228,000. Safe: "About 1,100 condos were for sale in oceanfront buildings, at about $215,000 at the middle. About 720 condos for sale list a unit that faces the ocean, at about $220,000. About 2 in 3 of the building's condos ask under $300,000 [CRM listings, 2026-11-10]."

**Row 11. CORRECTED.** The lake (429, $449,900) and under-$300,000 (73 of 73, none of them also on tidal water) lines verify. Two errors:
- The river key is any river, not the Waccamaw. Of the 26, 11 are in the Georgetown postal city, 8 in Conway, and 3 are in Andrews, Mullins and Galivants Ferry. Safe: "Waterfront houses on a river ask about $675,000 (26)."
- 11 of the 22 waterway listings also name a lake. Without them, 11 ask $1,650,000. Cut the waterway asking price.

Canal (35, $949,000) and creek (13, $1,349,000) re-run, but they belong in a table with the count or not at all. The 506 are the CRM's South Carolina area, not just Horry and Georgetown. Mullins (Marion County), Awendaw and Manning (one each) are in it. Say "for sale on and near the Grand Strand" or "in our search area".

**Row 12. STRUCK (the price comparison).** The counts re-run: 52 of 506 list a dock, and 37 of 64 on tidal water and rivers. But 15 of the 64 also name a lake, so "not a lake" is not true. With those 15 left out, the result flips: 34 with a dock ask $384 a square foot and 15 without ask $507. Most of the 15 without a dock are North Myrtle Beach canal houses. The price per square foot compares a mix of places, not docks. `chart-dock.json` goes. A count may stay: "Only 52 of the 506 waterfront houses for sale list a dock. On canals, creeks, the marsh, rivers and the waterway, more than half do [CRM listings, 2026-11-10]." WF row 24 (VERIFIED 2026-11-04, $388 against $343) used the same group and likely has the same mix.

**Row 16. CORRECTED.** The flood counts re-run, and the live county layer still holds 758 high-risk polygons. The river (452 of 456) and waterway (297 of 985 wholly outside, 30.2%; middle of the lot outside for 573, 58.2%) lines verify. The ocean count moves with row 1: the corrected run gives 310 of 512 lots reaching VE (60.5%) against 241 of 411 (58.6%). Safe: "Of the houses in the first row on the beach, about 6 in 10 have a lot that reaches FEMA's VE zone, where waves are expected." Drop "of about 410". For the channels, print NMB row 13: "679 of 682".

**Row 17. STRUCK.** It is built on the lake group (row 7).

**Row 23. CORRECTED.** The NOAA equations are coded right: June 21 sunrise is at 60.7 degrees at 33.8 N, matching the PDF's formula and a spherical check (61 degrees). The error is the straight-shore model. Long Bay curves, so from the north end the June sunrise line runs over the North Myrtle Beach shore. Ray-cast on the county land polygon, counting days the sunrise line meets land within 20 km:

| Point | Days |
|---|---|
| Cherry Grove, 33.83 N | 124 |
| Windy Hill, 33.80 N | 102 |
| 33.775 N | 72 |
| 33.755 N | 38 |
| 33.749 N | 24 |
| 33.737 N and south to the Georgetown line | 0 (land 23 km or more away; from the pier south, 35 km or more) |

The 245 and 291 days are wrong. Safe: "From central Myrtle Beach south to Garden City, the beach faces the southeast, and the sun rises over open sea on every morning of the year. Farther north the shore curves, and from Windy Hill to Cherry Grove the sun comes up over the North Myrtle Beach shore on about 100 to 125 mornings around June [NOAA solar equations; county coastline; our calculation]." Place a landmark name on 33.74 N only after measuring it. Clouds, haze and buildings next door are not counted.

**Row 26. CORRECTED.** The source does not say the channels lead to the ramp. City facility page, read today: "This popular fishing spot is located on the Cherry Grove marsh and provides boat access to the marsh and the Atlantic Ocean via Hog Inlet." Safe: "Cherry Grove has the city's boat ramp on the marsh, with boat access to the marsh and the ocean through Hog Inlet [NMB parks]."

**Row 27. CORRECTED.** Every quote was found on the live FWS pages. But "the river's" narrows the source, which names the Waccamaw and Great Pee Dee rivers. Safe: "The Waccamaw National Wildlife Refuge, set up in 1997, protects tidal freshwater wetlands and old rice fields along the Waccamaw and Great Pee Dee rivers, some of the most diverse freshwater wetlands in North America, the Fish and Wildlife Service says. Visitors paddle a blackwater swamp, walk among cypress trees and look for swallow-tailed kites and more than 200 other bird species [FWS]." No drive time and no "backs onto the refuge".

**Row 31. CORRECTED.** "The other way" says there are only two ways; marinas also rent slips (LR row 12). Safe: "A deeded boat slip is another way to keep a boat on the water. Horry County has 322 slips sold as real estate, 223 of them in Little River. In the year to September 2026, slips at Mariner's Pointe sold for about $16,500 at the middle, and 10 at Dock Holidays in North Myrtle Beach for about $92,500 [LR rows 12 to 14]."

## Verified rows, with the limits that stay

- **Row 3.** WF rows 20 to 22 read. Use WF's safe wording: "56 sales" (55 houses). The nearby group is houses "not on the water", not "not on it". "About twice, in every stretch." Waccamaw: 14 sales, $537,000 against $330,000.
- **Row 4.** NMB row 14: 38 sales, $715,000 against $665,000 (65). The off-water group includes oceanfront houses.
- **Row 5.** GC row 13 as corrected: about 260 houses, 13 sales, about $1.24 million, about twice.
- **Row 6.** MI row 9 safe wording (almost all on the creek side of US 17 Business, 21 sales in three years, about 1.7 times). PI row 10: 13 oceanfront at about $2.6 million, 6 creek-side at about $2 million. These are three-year Georgetown windows; keep them out of the chart.
- **Row 9.** Re-run: 28 houses, $3,387,500, $889 a square foot, 27 over $1 million. All 28 are in coastal postal cities (Myrtle Beach 8, Murrells Inlet 7, Garden City Beach 4, North Myrtle Beach 4, Pawleys Island 4, Litchfield 1). The live API at my run still returns 28. Say "listed as on the ocean" and "asking".
- **Rows 13 to 15.** Use WF rows 1 to 10 wording (salt water, marsh and land at or below mean high tide; the rule in force now; "usually"; never "a permit takes 45 days").
- **Row 18.** CM row 28 and CTO row 22 read: about $550, $1,070, $1,370, $3,200 in zone V (141 houses). Countywide policies. "A federally regulated lender".
- **Row 19.** WF row 11 read. The 360.5 and 371.1 fixed clearances are "reported" in the Coast Pilot; "the federal rule" for the swing bridge.
- **Rows 20 to 22 and 28.** WF rows 14 to 18 safe wording ("about 2 miles", "the average change from high tide to low", "is designed for").
- **Row 24.** Coast Pilot 4 ch. 12 (01 NOV 2026) paras 1, 5 and 8 found word for word. Keep the researcher's limits: say "behind the coast" or quote "protected"; nothing past Fort Pierce.
- **Row 25.** DNR FAQ Q3 found word for word, and Q8 repeats the exemption. A commercial-style crab trap needs a license (Q2, Q9).
- **Row 29.** Live API now: 9 houses on the lake in Plantation Lakes, the same 9 with the waterfront flag, out of 14 in the subdivision; ZIP 29579 (Carolina Forest); $779,900 to $1,325,000.
- **Row 30.** 86, all in South Carolina; the live API returns 86.
- **Row 32.** stories.json `ny-client-boat` read. Tell it as WF row 28's safe wording; no "house", no quotation marks.
- **Row 33.** WF row 19 and NMB row 13: print 985, about 460, about 680.
- **Row 34.** Every count re-runs (117/22, 21/5, 42/13, 51/26, 30/28, 35/35, 429/429, 122/52). Do not say why an agent ticked a box.

## Should not be published

- Any deed price for "a house on a lake or pond" (row 7), and the lake flood share (row 17).
- The dock price-per-square-foot comparison (row 12), here or reused from WF row 24.
- The waterway asking price from listings (row 11).
- "The sun rises over the ocean every morning" for any beach north of central Myrtle Beach (row 23).

## Sibling pages to tell

- MB ledger row 18 uses the same condo locator. About 12 of its 459 sales are set back from the beach; its middle moves from $148,000 to $145,000. "About $150,000" holds.
- WF ledger row 24 has the same dock-group mix as row 12.
