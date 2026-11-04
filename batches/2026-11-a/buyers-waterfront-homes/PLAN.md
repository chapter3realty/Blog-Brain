# Plan: /buyers/waterfront-homes/

Batch 2026-11-a, Lane U. Researcher's plan, 2026-11-04. Ledger: `facts.md` (28 rows, all pending a verifier). Must-answer list: `must-answer.md`. Data: `data/2026-11-a/buyers-waterfront-homes/` in the website working copy (README there). Spec to write: `specs/waterfront-homes.js` (none exists; the live page was hand-made and is not spec-built).

## The reader and their job

A buyer who wants a house on the water on the Grand Strand. Often they own a boat, or plan to, and come from a place where "waterfront" meant one thing (a lake in Ohio, a bay in Maryland). They know none of the place names, bridges or inlets. Their job: **choose which water to buy on, and know before they offer whether the house will do what they want the water for: a view, fishing, or a boat that reaches the ocean.**

What they want first: what waterfront homes cost here and where they are. What worries them: paying for water the boat cannot use, a dock they cannot build, flood insurance. What they ask next: can I add a dock, how deep is it, how far to the ocean, which bridges, is it worth it.

A second reader is the buyer on a budget who typed "waterfront under $300,000": the page tells them, plainly, that this buys a lake or pond lot here, and where.

## The deciding fact (checked first)

The headline the owner liked says **"the dock decides the value."** It holds in two parts:

1. **A dock is a permit, not a feature of the lot.** The state's coastal office (SCDES, which took over from DHEC on July 1, 2024) must permit every dock over the marsh or tidal water. A lot made after 1993 needs 75 feet at the marsh edge for its own dock; under 50 feet, none. The creek's width caps the dock's size; under 20 feet wide, no boat lift (rows 1 to 6).
2. **The water shows in the price.** County deeds: houses on the Intracoastal Waterway sold for about $1.3 million at the middle, against about $527,000 for houses within a kilometre that are not on it; about twice in every stretch (rows 20, 21). For the dock alone there are only asking prices: on tidal water and rivers, half the houses for sale list a dock, and those ask about $388 a square foot against $343 (row 24). The page must not put a dollar value on a dock.

## The findings no other site has

1. **What the water is worth, from deeds** (rows 20 to 22): waterway houses about 2 1/2 times the houses down the street countywide, about twice in each stretch (Little River and North Myrtle Beach, Myrtle Beach and Carolina Forest, Socastee); the Waccamaw about 1.6 times; Cherry Grove's channels only a little more than Cherry Grove off the channels (NMB ledger).
2. **How much the tide moves, by kind of water** (rows 17, 18): about 5 feet at the ocean, 4 1/2 inside Cherry Grove, 4 in Murrells Inlet's creeks, about 2 in the middle of the waterway, about 1 at Conway. Nobody prints this side by side. It explains why a Cherry Grove or Murrells Inlet dock can sit on mud at low tide and a Socastee dock does not.
3. **Every bridge between the state line and Socastee, with its height** (rows 11, 12): 13 crossings in about 30 miles; every fixed bridge is 65 feet; the three swing bridges (7, 31 and 11 feet closed) and the railroad bridge (16 feet) open for taller boats; the Little River bridge's weekday rush-hour rule. Compiled from the NOAA Coast Pilot, the federal rule and county road lines.
4. **"Waterfront" usually means a pond** (rows 23 to 25): 408 of 497 waterfront houses for sale name only a lake or pond; all 69 under $300,000 do; only 41 list a dock; 28 houses on the ocean, about $3.4 million at the middle; 82 waterfront houses with no HOA fee, only 2 on the waterway.
5. **How few houses touch the big water** (row 19): about 980 houses in the whole county touch the Intracoastal Waterway, about 460 the Waccamaw, about 680 the Cherry Grove channels.

## What the live page has worth keeping

- **The H1 the owner liked** (`data/headlines.json`): "Waterfront homes in Myrtle Beach: / the dock decides the value." Keep it; the page now proves it (row 20) and qualifies it (row 24). Title tag, to carry what people search ("waterfront homes myrtle beach", "intracoastal", "dock"): proposed "Waterfront Homes in Myrtle Beach: Docks, Depth, Flood | Chapter3" (60 characters). Fixes scorer S1.
- **The five kinds of water.** The idea is right and is the page's spine; it now has places, a map and numbers. The live list put oceanfront houses "toward Cherry Grove and Pawleys"; not verified, cut.
- **The six boater questions.** Rewritten as what we check, each with its local answer (depth: row 17; bridges: rows 11, 12; ride: row 14; permit and transfer: rows 7 to 9; bulkhead: no source, kept as a check with no number; HOA: row 10).
- **The homes feed.** `idx-lib/feeds.js` maps this page to `DOCK` ("Homes with their own dock", houses from $350,000 in five towns). Keep it.
- **Internal links**: /buyers/coastal-insurance/, /buyers/undisclosed-flooding/, /submarkets/little-river/, /submarkets/north-myrtle-beach/, /submarkets/carolina-forest/, /submarkets/murrells-inlet/, /submarkets/pawleys-island/. Add /buyers/no-hoa-homes/ (boats at home), /submarkets/conway/ (the river), /buyers/second-home/ if the cold reader is a second-home buyer.
- **The real story**: `ny-client-boat` (row 28), told exactly.

## What must not survive (judge, rules)

- The lead form with the long phone-consent paragraph above the answer, and five identical "Set up a waterfront tour" buttons. One slim offer bar under the answer; mid-page offers each tied to its section with different words; the full form at the end.
- "DHEC" (twice). Now SCDES (row 2).
- "$15,000 to 45,000" for a dock, "often around four" months, and flood "between one and three thousand dollars a year". No source holds for the first two (Not verified 1, 2); the third is replaced by FEMA's own policy costs (row 26).
- "Little River has the most marinas and the quickest big-water access" (no count). Replaced by row 14 (Little River Inlet is the waterway's way out) and the Little River page's slip count (row 27).
- Checkmark bullets as decoration. No question H2s. No sources line. All three fixed below.
- No photo. Fixed below.

## The shape

The reader's job is to **choose one** of five waters, then **check** a house on it. CRAFT 3: a comparison (5 options, the limit for a comparison table) with a decision table first, then one section per attribute that decides the choice, in the order the reader asks (`reports/Page shapes by kind of page.md`, sections 4 and 9). Not a list of places: the places are named inside each kind of water, not given their own entries (the town pages own them).

First screen on a phone: H1, byline, the short answer, a slim offer bar. Short answer (draft for the writer, from rows 20, 23, 1, 3): "Waterfront here means five different waters, and they are priced far apart. Most waterfront houses for sale face a lake or a pond; a house on the Intracoastal Waterway sold for about twice the house down the street. A dock is not automatic: the state must permit it, and many lots do not qualify." The writer will cut it to two sentences and keep "we" out of the hero sub-header.

## Sections, in order (question H2s from the suggestions)

1. **Short answer** (above). Key facts row: about 980 houses touch the waterway in the whole county (row 19); 4 in 5 waterfront listings face a lake or pond (row 23); 41 of 497 list a dock (row 24); tide about 5 feet at the ocean, about 2 on the waterway (row 17).
2. **"What does waterfront mean in Myrtle Beach?"** The five kinds of water, as a comparison table (rows: what it is good for, how much the tide moves, boat to the ocean, typical flood zone, houses touching it or for sale, a price line), five columns collapsing to cards on a phone. Then the map. Proves: the five are different purchases. Rows 17, 19, 22, 23, 14.
   - Ocean: 28 houses for sale, about $3.4 million (row 23). Oceanfront condos are a separate page (/invest/condos/); one line and a link.
   - The Intracoastal Waterway: about 980 houses; 2 feet of tide in the middle; Little River Inlet is the way out (rows 14, 17, 19).
   - Cherry Grove's channels and the marsh creeks (Murrells Inlet, Garden City, Pawleys): 4 feet or more of tide; Murrells Inlet opens straight to the ocean (rows 15, 17).
   - The Waccamaw River: about 460 houses; about 1 foot of tide at Conway; prices about 1.6 times nearby (rows 17, 19, 22).
   - Lakes and ponds: 4 in 5 waterfront listings; every one under $300,000 (row 23).
   Offer after: "Tell us the boat and the budget. We will name the water that fits." (button "Send us your boat and budget").
3. **"How much more does a waterfront home cost?"** The deeds chart (paired bars: on the water vs within a kilometre, by stretch and the Waccamaw). Proves the deciding fact, part 2. Rows 20 to 22. Say what the groups are and are not (size not known).
4. **"Can I build a dock on my waterfront lot?"** Steps and rules: the permit and who issues it, the lot-width rule, size by creek width (a small table), the dock master plan, fees, legal clocks, other approvals. Rows 1 to 8, 10. Then **repairs, storms and selling** (row 9): what a buyer of a house with a dock needs (an active permit, transfer, the five-year rebuild rule). Offer after: "Have us check this dock's permit before you offer."
5. **"Which bridges are between the house and the ocean?"** The bridge ladder (a vertical diagram, north to south, each crossing at its mile with its closed height; swing bridges marked), the Little River rule, the rock ledge warning, the inlet. Rows 11 to 14, 16. A boater can read their own boat's height against it.
6. **"How deep is the water at the dock?"** The tide chart (one bar per station, ocean to river). Rows 17, 18. What we check at the dock at low tide. Offer after: "Ask us for a low-tide check of the dock."
7. **"How much is flood insurance on a waterfront home?"** Plain zone words, FEMA's policy costs (row 26), the lender rule (Cost to Own row 22), link to /buyers/coastal-insurance/ and /buyers/undisclosed-flooding/.
8. **"Is a waterfront home a good investment?"** No forecast. What the deeds show (row 20) and what the owner pays on top (row 26 and the dock rules). A boat slip as the alternative (row 27) with a link to Little River. The no-HOA count (row 25) with a link.
9. **"What we check before you offer on a waterfront home."** The six checks, each with its local answer, said as our work. The real story (row 28) here, before the end offer.
10. **Homes with their own dock** (the `DOCK` feed).
11. **FAQ** (open text): Is a dock included? Can I reach the ocean from the Intracoastal? What does AE/VE mean? Can I rebuild a dock after a hurricane? How long does a dock permit take? Are there waterfront homes with no HOA? Under $300,000? Each one sentence of answer first.
12. **Sources line** (fixes "no sources line").

"On this page" list: yes (more than 4 sections).

## Visuals (all built from data files, never typed)

| # | Visual | Data file | Notes |
|---|---|---|---|
| 1 | Map of the five waters: the county's water outlines (waterway, Waccamaw, Cherry Grove channels), the two inlets, the 13 crossings by kind, the tide stations with their range | `map-water.geojson` (built by analyze.py from county layer 21, `bridges.json`, NOAA station positions) | `tools/area-map.js`. Short and wide on a phone. Inlet label points are placed by hand at the jetty mouths: check on the aerial. Murrells Inlet's and Pawleys' creeks are not in the county layer: label them as places, do not draw water. |
| 2 | Comparison table of the five kinds of water | `findings.json` (homes_on_water, sales, tides, listings) | Cards on a phone (`compare.js` compareCards). |
| 3 | Paired bar chart: what houses sold for on the water and nearby | `chart-sales.json` | `G.bars`; caption with counts and the deed dates. Use the NMB ledger's Cherry Grove figures, not this file's Cherry Grove row. |
| 4 | Bridge ladder | `bridges.json` | A vertical list or simple drawn diagram: mile, name, kind, closed height; fixed 65 in one colour, swing/rail in another. |
| 5 | Tide bars by station | `chart-tides.json` | Grouped by kind of water. |
| 6 | Listings bar: what the water is in today's waterfront listings | `chart-listings.json` | One bar per kind; the lake/pond bar dominates. Re-count at build if the build date is more than two weeks after 2026-11-04. |
| 7 | Dock size by creek width | rows 4 (R.30-12) | A five-row table. |

## Photos (free licence now; the photo partner later)

Already licensed on sibling pages (licence records in their `photos.json`; reuse the file and record, check each at full size against this page's caption):

| Photo | Where it is | Licence | Use here |
|---|---|---|---|
| Houses on the Cherry Grove channels with docks, from above | `images/2026-11-a/submarkets-north-myrtle-beach/cherry-grove-channels-f...` (NAIP 2023) | Public domain (USDA NAIP via USGS) | Section 2, the channels column, or section 6 (tide) |
| The old Socastee swing bridge and the newer high bridge, from above | `images/2026-11-a/buyers-relocating-which-town/socastee-swing-bridge-fr...` (NAIP) | Public domain | Section 5, bridges |
| Barefoot Landing on the waterway at US 17, from above | `images/2026-11-a/submarkets-north-myrtle-beach/barefoot-landing-waterw...` (NAIP) | Public domain | Section 5, beside the Barefoot swing bridge line (check the bridge is in frame) |
| Houses on the creek side of Business 17 in Murrells Inlet with docks over the marsh, from above | `images/2026-11-a/submarkets-murrells-inlet/murrells-inlet-creek-front-...` (NAIP) | Public domain | Section 4 (docks over marsh) or section 2 (creeks) |
| Garden City Point canals with private docks, from above | `images/2026-11-a/submarkets-garden-city/garden-city-point-from-above-...` (NAIP) | Public domain | Section 4 |
| Coquina Harbour and Lightkeepers Village basin, from above | `images/2026-11-a/submarkets-little-river/little-river-harbours-from-ab...` (NAIP) | Public domain | Section 8, slips |
| Conway riverwalk boardwalk on the Waccamaw | `images/55-plus/myrtle-trace/conway-riverwalk-boardwalk.webp` (Wikimedia Commons, "Waccamaw River Warehouse Historic District") | Public domain | Section 2, the river column |

Copy each into `images/2026-11-a/buyers-waterfront-homes/` only if the page needs a different crop; otherwise reference the sibling file. A new aerial crop, if needed (for example the waterway at Grande Dunes with docks), can be cut from USDA NAIP 2023 (public domain) the way the siblings did: `imagery.nationalmap.gov/arcgis/rest/services/USGSNAIPImagery/ImageServer`. The Wikimedia Commons search API did not answer from this container (2026-11-04); no new Commons photo was checked.

No photo above the short answer. One photo per section, under its sentence.

## The photo partner's shot list

In `shot-list.md`, page order.

## Notes for the writer

- One value per fact across the site: Cherry Grove figures from the NMB ledger; flood costs from the Common Mistakes ledger row 28; slips from the Little River ledger; tide at Captain Alex's (4.14 ft) matches the Murrells Inlet page.
- Siblings own: Little River (slips, the 1935 swing bridge's history), North Myrtle Beach (Cherry Grove channels in depth), Murrells Inlet (the inlet and the MarshWalk), Conway (the riverwalk), /buyers/no-hoa-homes/ (what a town lets you park). This page owns: the kinds of water compared, the dock rules, the bridges, the tide comparison, the deed comparison on the waterway and the Waccamaw.
- Never a dollar value for a dock. Never "the water adds X percent". Say what sold, and the group.
- Audit traps from the brief: no sentence over 28 words, none opening with "So", no "Here is", no pseudo-cleft, no "we/our/us" in the hero sub-header, offer buttons as requests ("Have us check this dock's permit"), never "best", "safe", "family-friendly".
