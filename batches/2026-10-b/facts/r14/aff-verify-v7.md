# Affordable places to live, row 226 and rewrite check v7 (round 14e, 2026-10-15)

Independent verifier. I did no research on this page and had not seen it before. Task: check ledger row 226 against its primary sources, and read every sentence that round 14e (commit 64126ac) changed or newly states (lessons B30, B45, B46, B47, B48). I did not edit the spec.

Spec read: `batches/2026-10-b/specs/affordable-places-to-live.js` at HEAD (64126ac), diffed against `7ca3500` (337 diff lines) and against `c61afb6`, the version the v6 verifier read (the 14e delta, 17 KB). The spec file was unchanged on disk while I worked. The preview is `.../scratchpad/preview/b/affordable-places-to-live.html`, built 02:53:49 UTC, two seconds after the last spec edit (02:53:47).

## Sources I opened myself

- Horry County GIS, layer 24 (Parcels) and layer 22 (Addresses), re-queried today: https://www.horrycounty.org/parcelapp/rest/services/HorryCountyGISApp/MapServer/24 and /22. Boundaries tested with shapely on layer 24 geometry (NAD83 HARN feet).
- Myrtle Beach Golf and Yacht Club HOA, https://www.mbgyc.com/ (home page).
- Osprey Marina's own site, https://www.ospreymarina.com/ ("at mile marker 373 on the Intracoastal Waterway in Myrtle Beach"; address 8400 Osprey Road).
- OSRM (router.project-osrm.org) for both drives; Census geocoder for the two addresses.
- D.R. Horton's Amber Bluff page, https://www.drhorton.com/south-carolina/myrtle-beach/conway/the-townes-at-amber-bluff.
- 13 Sawgrass East listings, 10 Fairways listings, 4 Parkview listings and 8 Golf and Yacht Club listings (tracimiles.com and the realgeeks sites; no Zillow page).
- For Indigo Grove: the OSM map API for the area (water, wetland and stream polygons and ways), USGS NAIP imagery (image export, 2023 or earlier), Esri World Imagery (the researcher's own source). The county Hydrography layer (21) has nothing in the area (rivers and the ocean only). The USGS NHD service timed out; OSM's water and streams there are NHD-sourced.
- Not reachable today: Overpass (reset or timed out on three servers). The OSM map API worked in its place.

## Result

- Row 226: **verified with corrected wording (v7)**. All six of its parts hold as figures. Three of its sentences go past their source (below). Two limits are noted.
- Round 14e changed or newly states **62 fact-bearing units**. **56 match. 6 drift** (D21 to D26). None must be dropped; each is a one-phrase fix.
- v6 D16 to D20 are applied word for word. **No new drift in the five sentences v6 corrected** (D16, D17, D18, D19, D20). Details below.
- B48: home details come from county parcels or builder plans, and the three listing details (Fairways garage, Golf and Yacht Club one story, Polo Farms one story) each appear once. They hold (below). One more entry rests on a listing remark (Sawgrass East clubhouse), and four entries state what an HOA fee includes from MLS fields. D21 and D22 are in that group.
- `node tools/struck-check.js --batch batches/2026-10-b --preview .../preview/b --strict`, before my entries, on the preview built from HEAD: **affordable-places-to-live (132 patterns): no struck wording.** Three of my drifts (D21, D22, D25) are old strikes that came back in new words, and the list did not catch them. After my 6 entries (138 patterns): **6 struck phrases on the affordable page**, as intended. (The run's other hits are on best-neighborhoods.)
- `node tools/struck-check.test.js`: all controls pass, with the 6 new entries.
- Sibling check: passes, with one note. Times: every changed time re-run and holds; no banned distance word.

## Row 226 item by item

### 1. County parcel counts (layer 24)

| Claim | Re-queried | Result |
|---|---|---|
| Parkview about 200 townhomes | LegalDescr `PARKVIEW;...` at 33.686, -78.910: 196 parcels coded 109, all with improvements. (The 155 "PARKVIEW PH 1 and 2" parcels are a different Parkview, in another place.) | holds |
| Sawgrass East about 255 | LegalDescr `SAWGRASS EAST%`: 255 coded 109, all with improvements (plus 11 common-area, vacant and other parcels) | holds |
| Golf and Yacht Club older part about 470 houses | `MB GOLF%`: 466 coded 110, all with improvements. Counting the spellings "M B GOLF" and the like it is 473. | holds |
| "most of them on eighth-acre lots" | Parcel area from the geometry: median 5,651 sq ft (0.13 acre); 379 of 466 between 5,000 and 8,000 sq ft; 451 under 9,000 | holds (about an eighth of an acre) |

The county layer does not publish what codes 109 and 110 mean. They are townhomes and detached houses by the listings on those lots (every Parkview and Sawgrass East listing is a "Townhouse"; the Golf and Yacht Club older listings are "Detached"). Limit for the ledger: the row should say that the meaning comes from the listings.

### 2. Sawgrass East

- **Three HOA-owned lake parcels**: holds. COMMON AREA 1/LAKE 3.94 ac, 2/LAKE 1.21 ac, 3/LAKE 0.91 ac, owner SAWGRASS EAST HOMEOWNERS ASSOC INC. OSM water polygons lie inside all three (1.7, 0.2 and 0.3 acre of water), so "three small lakes" holds (the county calls them LAKE). 78 of the 255 townhome lots touch a lake parcel and 126 are within 150 ft, so "set around" holds.
- **The clubhouse is rentable by members**: the sentence is in two listings, 1016 Stanton Pl and 1301 Shoebridge Dr (tracimiles): "community clubhouse, which is available for rent to members." It is the same sentence in both: one agent's remarks. The row's second URL, 528 Uniola Dr, says only that the HOA maintains the clubhouse. I found no HOA, management company or county source (a web search returned listings only). This is a secondary source. "For a party" is in no source (D22).
- **The fee usually includes the building insurance, water, sewer, trash and lawn care (row says 8 of 10)**: I opened 13 distinct Sawgrass East listings. Insurance is in the HOA-includes field of 10 of 13, water 10 of 13, sewer 10 of 13, trash 11 of 13, grounds 11 of 13. "Usually" holds. (528 Uniola's remarks say the HOA maintains water, sewer and garbage but its field omits them, so the true share is higher.)
- "One of the highest on this list" holds: $425, second to Wynbrooke's $450 (rows 131, 136). "Because it covers more" does not (D23).

### 3. Fairways

The five listings of row 130 (realgeeks 2622945, 2621073, 2624329, 2600830, 2618872) all list Maintenance Grounds, Pool(s) and Internet. **Holds, 5 of 5.** I opened 5 more listings (an older listing of 1025 Fairway Ln, 1127 Fairway Ln, 1051 Tee Shot Dr, 1028 Tee Shot Dr, 1018 Fairway Ln; 4 more homes): over the 10 listings, grounds 10 of 10, internet 9 of 10, pool in the includes field 8 of 10 (1051 Tee Shot Dr lists only common areas and grounds; 1127 Fairway Ln lists no pool; all have the community pool). The page says "the HOA fee includes the lawn care, the pool and the internet" with no "usually". It rests on the row's five listings and a listing remark ("the HOA covers cable and basic internet"). Not struck. Limit for the writer: "usually" would match the wider sample, and the HOA's own documents are the primary source.

### 4. Golf and Yacht Club

- **Street names (layer 22)**: Augusta Cres 8, Pebble Beach Cres 8, Snowy Egret Trl 25, Wood Duck Cv 9 address points. Each point falls inside an "MB GOLF & YACHT" parcel (point-in-parcel test). The four names exist. **But the claim built on them is wrong (D24).** All 29 streets inside the older part, by joining address PINs to the 466 parcels: Augusta Cres and Pebble Beach Cres (golf), Scotsmans Cres, and otherwise birds (Snowy Egret, White Heron, Night Heron, Blue Heron, Mallard View, Wood Duck, Eagle, Cardinal, Carolina Wren) and plants (Sweet Gum, Sweetbriar, Cinnamon Fern, Wisteria and others). None refers to boating.
- **HOA "within a few miles"**: mbgyc.com, home page: "Although we no longer have an on-site golf course or yacht club, both of these activities are located within a few miles of our community." Holds. The page's "Its own course and yacht club are gone, but both are still near" is that sentence.
- **Osprey Marina 11 minutes, Indigo Creek Golf Club 14 minutes**: OSRM from the row 164 middle (-79.05007, 33.649402). Osprey Marina (8400 Osprey Rd, Census geocoder -79.03876, 33.67780): **11.12 min, 3.91 mi**. Indigo Creek (9480 Indigo Club Dr, -79.02504, 33.60318): **14.23 min, 6.55 mi**. Both hold. Osprey Marina's own site says it is "at mile marker 373 on the Intracoastal Waterway" (a protected harbor 150 yards off the waterway). "On the Intracoastal Waterway" is the marina's own wording. Holds.
- "Built for golf and boating": the community's name and the HOA's statement that it no longer has its course or yacht club (row 207: Heron Point closed in 2014). Holds as the writer's summary.
- "The houses for sale there lately have all been one story": the 5 of row 218 plus 4 more older-part listings I opened (1985, 1986, 1987, 1991): 9 of 9 one level. The two-story listings I saw (Flank St, Dagger Ct, 2026) are Sandpiper Place, not the older part. Holds.

### 5. Indigo Grove

- **Open space 22.47 acres**: OPEN SPACE 1 to 6 and 8 owned by THE OVERLOOK HOA / HOMEOWNERS ASSOCIATION: 4.82 + 10.58 + 4.04 + 2.71 + 0.06 + 0.16 + 0.10 = **22.47**. Holds ("about 22").
- **121 of 169 lots touch it**: 169 lot parcels, **121** within 0.5 ft, 3 ft and 10 ft of an open-space parcel. Holds ("most").
- **Ponds, island, woods**: a public source other than Esri confirms part only.
  - OSM has one pond polygon (way 1544685093, 14,356 sq m, 3.5 acres) wholly inside OPEN SPACE 1, and NHD stream ways crossing open spaces 2, 3 and 4 (the creek). The county Hydrography layer has nothing there.
  - USGS NAIP shows the site before the ponds were dug. The NAIP frame shows a small clump of trees where the island pond is now, and trees where the big pond is now.
  - Esri World Imagery (viewed today) shows three ponds: the large one in open space 1, one with a small island of trees in open space 2, a small one east of the road; woods in open spaces 2 and 3 and a creek strip along the east and south. That matches the page word for word.
  - So "three new ponds, one with a small island of trees, and strips of woods along a creek" holds on Esri imagery. One pond and the creek are confirmed by public map data. The other two ponds and the island appear only on Esri imagery. "New" holds by comparing NAIP with Esri. Say so, per the picture rule: the page reads a picture. Acceptable as written; no better public source exists today.
- **Lennar**: the ledger text says "Lennar 147 of 169 lot sales". Rows 160 and 187 say 147 sales, 144 by Lennar. "Most of the houses are Lennar's" holds. "In Lennar's section" does not (D26): the county shows one INDIGO GROVE subdivision of 169 lots and one HOA, THE OVERLOOK, which owns all the open space.

### 6. Amber Bluff

D.R. Horton's page: "Featuring our popular Pearson plan"; "1 floor plan in this community"; "Pearson Th ... 3 Bed | 2.5 Bath | 1 Garage | 2 Story | 1,418 Sq. Ft." The page says one plan, the Pearson, three bedrooms over two stories, a one-car garage, about 1,420 square feet. **Holds.** "With one plan, prices are close together" holds: row 122, all 64 sales $224,000 to $249,000, half between $228,000 and $240,000.

## v6 D16 to D20, applied

| v6 | Page now | Check |
|---|---|---|
| D16 | "11. Wynbrooke: townhomes five minutes from the Murrells Inlet MarshWalk" | The v6 wording. Holds (5.41 min, row 183). |
| D17 | "9. Villas at Sandridge: townhomes five minutes from a cable wake park" | The v6 wording. Holds (5.3 min). |
| D18 | "2. The Fairways at Wild Wing: townhomes in a golf community" | Holds. The body says "some Fairways townhomes are near the course" (row 143). |
| D19 | "Lennar's plans here list 9-foot ceilings on the first floor." | The v6 wording. Holds. |
| D20 | "You do not have to be a first-time buyer. The program has these limits:" | The v6 wording. Holds. |

## The drifts

Page sentences are from HEAD (64126ac).

| # | Page sentence now | Problem | Supported wording |
|---|---|---|---|
| D21 | Parkview: "There are about 200 townhomes here, and the HOA fee includes the internet and the pool." | Row 129 corrected "internet" out: it is in the HOA-includes field of 1 of 3 listings (1047 Pinwheel Loop; 1061 Pinwheel Loop and 1044 Portico Loop do not list it; 1044 lists "InternetAccess" as a community feature). The safe wording there was water, sewer, grounds and the pool, which are in all three. The new sentence puts internet back for every townhome (B30). The "about 200" holds. | "There are about 200 townhomes here, and the HOA fee includes water, sewer, grounds care and the pool." |
| D22 | Sawgrass East: "Owners at Sawgrass East can rent its clubhouse for a party, and they share a pool." (also the heading "a clubhouse owners can rent" and the label "clubhouse to rent, pool") | Row 150 struck "a clubhouse owners can rent for a party" (wrong): no source. The 14e writer found a source for "rent": the same agent remark in two listings, "available for rent to members". "For a party" is still in no source, and it returned in the same words (the pattern `rent for a party` missed the new word order). The renting itself rests on one agent's remarks, not the HOA. | "The clubhouse can be rented to members [listing remarks, two listings; no HOA source]". Cut "for a party". If the writer wants "rent" in the heading and label, get the rule from the HOA's manager first; otherwise "pool and clubhouse". |
| D23 | Sawgrass East: "Its HOA fee is one of the highest on this list because it covers more." | A reason for the fee with no source (the same rule as row 171 and row 188 item 3). Wynbrooke ($450) also pays for the building insurance and all outside upkeep. Parkview and the Fairways include water or internet and cost less, but no row compares what each covers. | "Its HOA fee is one of the highest on this list; it usually includes the insurance on the buildings, the water, sewer and trash, and the lawn care." |
| D24 | Golf and Yacht Club: "Myrtle Beach Golf and Yacht Club was built for golf and boating. Its street names still say so: Augusta Crescent and Pebble Beach Crescent, Snowy Egret Trail and Wood Duck Cove." | The names exist (layer 22, all in the older part). Two are golf courses. The other two are birds, and none of the 29 streets in the older part refers to boating. The sentence says the names show both. | "Some of its street names are golf courses, Augusta Crescent and Pebble Beach Crescent, and others are birds, Snowy Egret Trail and Wood Duck Cove." |
| D25 | Polo Farms: "There is no pool or clubhouse, which keeps the fee small; the common land is two ponds, some woods and the strips along the highway." | Row 188 item 3 struck "The fee is small because the association has no pool or clubhouse": no source gives a reason for the fee. "Which keeps the fee small" is the same claim in new words (B30); the old pattern `fee is small because` missed it. The fee ($12 to $22, middle $20) and the lack of a pool are each supported. | "There is no pool or clubhouse; the common land is two ponds, some woods and the strips along the highway." |
| D26 | Indigo Grove: "Most of the houses are Lennar's, in Lennar's section, The Overlook." | "Lennar's section" says Indigo Grove has sections and The Overlook is Lennar's. The county has one subdivision, INDIGO GROVE, 169 lots, and one HOA named THE OVERLOOK that owns all 22.47 acres of open space. Lennar made 144 of 147 recorded sales (row 160), so "most" holds. Row 147's verified wording was "Lennar sells it as The Overlook". | "Most of the houses are Lennar's, which sells them as The Overlook." |

Notes that are not drifts:

- **Fairways "includes the lawn care, the pool and the internet"**: holds for the row's five listings (5 of 5). A wider sample shows exceptions (above). A limit, not a drift.
- **Sawgrass East "a twenty-minute drive away"** (beach): 17.9 min (row 164), rounded to 20 by the batch rule. Holds. "About" would match the other rounded times.
- **Forestbrook "so the lot can matter as much as the plan"**: the writer's judgment after a true flood sentence (row 193: 27 of 302 lots in zone AE). Not a fact.
- **Villas, Victory Point, Wynbrooke, Birchwood**: unchanged sentences were read in v6. The 14e changes there are: Victory Point's pond is Lennar's own amenity list ("complemented by a pristine pond", holds); Wynbrooke's two cuts (aerial, Brookgreen); Birchwood "a forty-minute drive" (41.6 min, v6). All hold.
- **Parkview "movie theater at The Market Common ... a ten-minute trip"**: 10.03 min (v6); holds.
- **Property tax bullets**: the figures ($970, a little more, $1,570) are unchanged and hold.

## B48: home details from full sources, and a listing detail once

- Homes are described from full sources: the counts (Parkview 196, Sawgrass East 255, Golf and Yacht Club 466 to 473), the lot size (Golf and Yacht Club's parcel median 0.13 acre; Birchwood, Indigo Grove and Polo Farms by county geometry), the builder's plans (Lennar's plan pages, D.R. Horton's Pearson, Dream Finders). Good.
- The listing details: Fairways garage (5 of 5, row 216), Golf and Yacht Club one story (9 of 9 older listings I read), Polo Farms one story (4 of 4, row 139; the two in row 219 are also one level). Each is said once in the body, in 3 entries. Holds. The Golf and Yacht Club chart label "one-story older houses" says it a second time on the chart.
- Not counted by the writer: Sawgrass East's clubhouse to rent is a listing remark (D22), and the HOA-includes lists for Parkview, the Fairways and Sawgrass East come from MLS fields (D21, D23's neighbors). They are fee facts, not home details, and the rule was written for home details. A fee list from MLS fields varies by listing (Parkview internet 1 of 3, Fairways pool 8 of 10, Sawgrass East water 10 of 13). Say "usually", as Sawgrass East does, or use the HOA.
- The sample voice ("we saw") is gone, except "The townhomes on the market here lately have had their own garage" (Fairways), "The houses for sale there lately have all been one story" and "Those on the market lately have been one story". These say what the market showed, once each. They are factually right.

## Drive and distance times

| Page | Re-run | Result |
|---|---|---|
| Golf and Yacht Club to Osprey Marina, "an 11-minute drive" | 11.12 min, 3.91 mi | holds |
| Golf and Yacht Club to Indigo Creek Golf Club, "a 14-minute one" | 14.23 min, 6.55 mi | holds |
| Sawgrass East to the beach, "a twenty-minute drive" | 17.9 min (row 164) | holds (rounded; "about" advised) |
| Fairways to the Aldi, "a three-minute trip" | 3.20 min, 0.72 mi (row 178) | holds |
| Amber Bluff to Brooks Stadium, "about a six-minute drive" | 6.34 min (v6) | holds |
| Wynbrooke to the MarshWalk; Villas to the sports complex | 5.41; 5.3 min (rows 183, 210) | holds |

Distance words (`rules/distance-words.json`): none is on the page. "Still near" is not on the list and is backed by the two times.

## Sibling check (review/SIBLING-OWNERS.md)

- Golf and Yacht Club: gated owns Enterprise Landing, Heron Point, the watch desk and Sandpiper Place. This page has none of them. This page gives the street names, the parcel count, Osprey Marina and Indigo Creek: facts that no other page has. Note: gated says "there is no golf or yacht club anymore; Heron Point, its golf club, closed years ago", and this page says "Its own course and yacht club are gone". It is the same fact in different words, but this page uses it only as the premise for two drives, and it does not name Heron Point. I left it. The coordinator may want to cut it, as the owner objected to repeated facts.
- Wild Wing / Fairways: best names the Hummingbird nine, Wishbones and the Monday league; this page gives the count (27 holes) and no names. Passes.
- Market Common: best owns the base and the farmers market; this page has the ten-minute trip. Passes.
- Sawgrass East / The Farm: no recreation center, library or preserve on this page. Passes.
- Wynbrooke's MarshWalk: gated (Seasons, "about a 10-minute drive"), no-hoa ("about 3 miles by road") and this page (five minutes) each give a distance from their own place. Passes.
- Sports complex: this page only. Passes.

## The struck entries

6 entries added to `affordable-places-to-live-struck.json` (row "affordable 226"), one for each of D21 to D26. `node tools/struck-check.test.js` prints "all controls pass": each struck wording fires its entry and each approved wording fires none. `--strict` on the preview now reports **6 struck phrases on the affordable page** (138 patterns); they go quiet when the writer applies the wordings in the table.

## Status

Row 226: verified with corrected wording (v7). New row 227 (rewrite check, v7, round 14e): wrong in part (D21 to D26).
