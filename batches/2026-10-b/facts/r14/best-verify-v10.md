# Best neighborhoods, rewrite check v10 (round 14k, 2026-10-21)

Independent check. I did no research on this page and did not write it. Scope: every sentence in `git diff bc8b0ca HEAD -- batches/2026-10-b/specs/best-neighborhoods.js batches/2026-10-b/data/best-neighborhoods.json`, the v9 items E1 to E13 and T1 to T8, and the sentences the brief named. The ledger is `batches/2026-10-b/facts/neighborhoods-facts.md` (there is no `best-neighborhoods-facts.md`); the Prince Creek, Pine Lakes and Farm rows come from it and `the-farm-facts.md`. Method: ledger rows, county parcels (layer 24), the 2026-10-21 Real Geeks property pages (re-fetched), southcarolinaparks.com, OpenStreetMap.

## Result

- About 70 fact-bearing units in the diff. About 37 match. **33 drift, in 23 distinct items (N1 to N23).** Plus 10 optional items.
- v9: E1 to E13 all applied or the sentence is gone. T1 to T7 applied or gone. **T8 is half done** (N19).
- The one cause of 21 of the 23: the 14h rewrite wrote "most", "many", "every" and "about half" about the houses of a neighborhood from 6 to 40 listings (B48, B52). The page now says in its sources line that "house details come from all homes listed for sale". That is true of the source and still not a source for "most houses here" in a neighborhood of 250 to 2,800 houses. The county parcel layer has no year, stories, bedrooms or fence field, so there is no full source for these claims. **Fix: either say "of the houses listed for sale" in the sentence, or cut.** Wording below does that.
- Row 284 (the listing counts): I re-fetched the property pages for 14 of 15 searches. The counts reproduce within one to three listings (some listings have gone). They hold as counts of listings. Avalon's list is not in the repo and its search page loads by script, so **Avalon is not reproduced**. Two combined claims do not hold even on the listings: Cherry Grove "raised beach houses with four bedrooms or more, a porch and a deck" (all four on 10 of 34) and Wild Wing "a porch and a fireplace".
- Rows 285 (Huntington Beach State Park page) and 286 (Tidewater neck of land): verified. New rows 288 to 291.
- Old struck wording: before my entries the page was clean. After my 31 new entries (225 patterns) the page fires on each one, one phrase each (I tested every pattern against the spec and the data file; the Huntington pattern needs the built text, where `h.ext` is gone). `node tools/struck-check.test.js`: all controls pass.
- Lead items: Pine Lakes "only 13 lots border it" is wrong as written (N5). Pine Lakes "primary bedroom ... fireplace" is B48 (N4). Avalon "most have a fenced back yard" fails (N18); "Almost every one is outside the high-risk flood zone" **holds** (724 of 729 house lots, county flood layer, row 282). Surfside "about half of the yards are fenced" fails (N2). The Farm "about two of every three houses ... border land the HOA owns ... about 280 acres" **holds** (row 281: 843 of 1,292 within 3 m; 283.9 acres, 265 without the amenity parcel), but the sentence after it and the heading do not (N21).

## v9 items

| Item | Now | Status |
|---|---|---|
| E1 Cherry Grove 14-minute walk | "about a 12-minute walk, about half a mile" (903 m) | fixed |
| E2 "a few dozen condos" | "Away from the condo towers on the ocean, ... about 1,700 houses" | fixed |
| E3 "The land was a rice plantation" | "Surfside Beach began as part of ..." | fixed, but see N3 ("renamed it") |
| E4 Tidewater condo fee | sentence gone | gone |
| E5 swing bridge 1934 | "from the 1930s" | fixed |
| E6 Prince Creek nine of 120 | "of about 640 houses ... about 19" (642 and 19, row 280 v9 note) | fixed |
| E7 Wild Wing 11-minute drive | sentence gone | gone |
| E8 Waterbridge "fenced storage" | "a storage area ... It is full now, so we ask about a space" | fixed |
| E9 Forestbrook 81 acres | gone | gone |
| E10 Deerfield "grew up around" | "is built around the old Deer Track golf courses" | fixed |
| E11 Deerfield guide line | "golf-cart beach parking" | fixed |
| E12 Grande Dunes $1.5 million | "$1.4 million" in the entry and the table (53 resales, middle $1,400,000) | fixed |
| E13 Farm airport "main entrance" | gone | gone |
| T1 Tidewater "Most ... around 2000" | now "Most were built in the 1990s and 2000s" (14 of 16 listings) | **not safe: N7** |
| T2, T3, T4 | gone | gone |
| T5, T6, T7 | "named Cherry Grove Beach", "are listed with no HOA fee", "usually requires" | fixed (table cells still say "None on most homes": N23) |
| T8 Avalon age | "these houses are 20 to 26 years old" | **half: N19** |

## New drifts in round 14k

Each is "current text -> replacement". The replacement states the part the source supports; it is not a hedge.

| # | Current text | Problem | Replacement |
|---|---|---|---|
| N1 | Cherry Grove: "Most are raised beach houses with four bedrooms or more, a porch and a deck." | Listings only: 30 of 34 raised; 27 four bedrooms; porch and deck 13; all four together 10 of 34. About 1,700 houses. | "Most of the houses listed for sale here are raised beach houses." |
| N2 | Surfside: "..., and about half of the yards are fenced." | "Fence" is a feature on 12 of 24 listings. Not the yards. | Delete the clause: "Its streets mix older one-story ranch houses with raised beach houses." |
| N3 | Surfside: "George J. Holliday later renamed it Floral Beach ... New owners gave it the name Surfside Beach" | E3's fix made "it" Surfside Beach, so it was renamed Floral Beach and then given the name Surfside Beach. Row 211: Holliday acquired "the property" and renamed it. | "George J. Holliday later bought the land and renamed it Floral Beach for his wife, Flora." |
| N4 | Pine Lakes: "Most have the primary bedroom on the main floor, and many have a fireplace." | 13 of 15 listings, 8 of 15; the 15 include 6 older "Pine Lakes" streets outside the two sections. | "Most of the houses listed for sale there have the primary bedroom on the main floor." |
| N5 | Pine Lakes: "only 13 lots border it." | Row 280: 13 of 250 house lots in the two sections. 28 house lots in all touch the course parcel (Club Colony Est 11, Pine Lakes Intl 4, Pine Lakes Ph 2 4, Estates 5, others 4). New row 288. | "Few of these houses are on the course itself: only 13 of their 250 house lots border it." |
| N6 | Tidewater: "Most of the houses stand under tall trees" | v9 O5, still "Most": read from the aerial, no count. | "Many of the houses stand under tall trees" |
| N7 | Tidewater: "The houses are mostly one story or one and a half, and many have a deck out back. Most were built in the 1990s and 2000s." | 11 of 16 listings, 10 of 16, 14 of 16. 584 houses. "Out back" is not in the field. | "Of the houses listed for sale, most are one story or one and a half, and most were built in the 1990s and 2000s." |
| N8 | Barefoot: "Every condo for sale here has four bedrooms, and most come furnished." | 8 of 8 and 7 of 8 today; true of the listings, read as the condo mix of about 390. | "The condos listed for sale here have four bedrooms, and most come furnished." |
| N9 | Prince Creek: "On a Saturday, Huntington Beach State Park is 12 minutes away by car." | **Struck wording back** (row 252: "On a Saturday" turns a no-traffic router time into a Saturday promise; the old pattern needed "MarshWalk"). No start. 12 minutes is to the entrance gate. | "From the middle of Prince Creek, the entrance to Huntington Beach State Park is about 12 minutes by car." |
| N10 | Wild Wing: "Many of the houses have a porch and a fireplace, and a few have their own pool." | 16 of 22 porch, 14 of 22 fireplace, 4 of 22 pool; of 676 houses. | "Most of the houses listed for sale here have a porch." (and "The lots along them are big" -> "Lots here are big", row 279 is neighborhood-wide.) |
| N11 | Grande Dunes: "The older houses here still have that look, in stucco. The new ones going up now are mostly plainer, with fiber-cement siding." | 6 older listings, all stucco; 22 new listings, 16 fiber-cement and 5 stucco Mediterranean. | "Most of the new houses listed for sale here are plainer, with fiber-cement siding." |
| N12 | Grande Dunes: "The club sells memberships, so a round can be part of a normal week." | Row 187: the membership quote is under the Members Club; the Resort Club quote has none. Gated row 226: the master association calls the Resort Course public. Row 207: capture only, never fetched by a verifier. The second clause is the writer's inference. New row 289. | Cut the sentence. |
| N13 | Grande Dunes: "Most houses here have a porch for the evening after." | 21 of 28 listings. | Cut. |
| N14 | Plantation Lakes: "The houses are big, mostly two stories or one and a half, on lots of about half an acre." | Levels are not in row 284; 12 of 12 listings. Lots: q1 0.40, q3 0.72 acre. | "The houses are big, on lots that are typically about half an acre." |
| N15 | Waterbridge: "Most houses here are two stories, and about half have a porch." | 18 of 25 and 13 of 25 listings; the porch count is in no row. 990 houses. | "Most of the houses listed for sale here are two stories." |
| N16 | Market Common: "The townhomes are mostly two stories, with two or three bedrooms. A few in the Market View section have three floors and their own elevator." | 10 of 13 and 2 listings; about 240 townhomes. | "Most of the townhomes listed for sale are two stories, with two or three bedrooms." Cut the second sentence. |
| N17 | Forestbrook: "Most of the houses have a porch." | 6 of 8 listings; 500 houses. | "Most of the houses listed for sale have a porch." |
| N18 | Avalon: "most have a fenced back yard" | "Fence" is a feature word (10 of 13 per row 284); not a back yard; not reproduced; 729 houses. | "The houses are a mix of one-story and two-story." Cut the rest of the clause. |
| N19 | Avalon: "these houses are 20 to 26 years old" | The 13 listings were built 2000 to 2006 (T8). "These houses" is all 729. | "the ones for sale are 20 to 26 years old" |
| N20 | Deerfield: "that old golf land gives a buyer two choices. One is an older one-story brick house on a wooded lot of about a third of an acre. The other is a new house on the old South Course." | Six one-story listings (5 ranch, 5 brick) made a rule of two kinds; Deerfield also has townhomes and land. "Two choices" is an "only" claim (row 284 limits it to what all or nearly all show). | "Deerfield is built around the old Deer Track golf courses near Surfside Beach. A typical lot is about a third of an acre, and new houses now stand on the old South Course." |
| N21 | The Farm: heading "open land behind most houses"; "Many back yards open onto trees or water."; "A buyer who wants one level has fewer choices here: most of the houses are two stories." | Row 281 limit 2: back lines were not tested, and many strips are grass. 9 of 14 listings are two stories; the Farm page's own check (v13 D2) kept "both one-story and two-story". | Heading "open land next to most houses". Delete the back-yard sentence. "A buyer who wants one level will find both one-story and two-story houses here." |
| N22 | Sources line: "Fees and house details come from all homes listed for sale." | Wrong for The Farm's fee ($107, owners' association, the-farm row 5) and for every house count, lot, golf-course count and flood figure (county parcels). New row 290. | "Prices are middle resales over 12 months. Fees come from homes listed for sale, except The Farm's. House counts, lots and flood zones come from county parcels, and house features from the homes listed for sale. Times start at the center of each place." |
| N23 | Table fee cells: Cherry Grove and Surfside "None on most homes" | T6 in table form: the field is blank in a listing (rows 177, 178). | "None on most homes listed for sale" |

## Optional

- O1. Deerfield "about 13 acres of lake and canals": the parcel is 13.62 acres, "about 14".
- O2. Prince Creek "builders have also sold new townhomes here for about $320,000": row 148 says "new-home sales"; it does not say townhomes. "new homes" is what it supports.
- O3. The Farm "a typical house has about 1,900 square feet": row 40 is the median (1,946) of 454 listings sold since 2020 plus for sale. "Houses listed here in recent years usually have about 1,900 square feet" is the approved form.
- O4. Prince Creek "of about 640 houses in Prince Creek": add "outside Seasons at Prince Creek" (642 is outside Seasons; the price has the same scope).
- O5. The sources line dropped "Drive times assume no traffic". The table note has it. Barefoot Landing, Deerfield's beach and The Farm's 12 minutes have no statement beside them.
- O6. Grande Dunes' 2009 award: B53 says verify at the awarding body. Rows 187 and 207 rest on the developer's page and trade sites; the NGCOA list was not opened by any verifier. Treat as pending.
- O7. Plantation Lakes "some have a dock of their own": 4 of 12 listings list a dock and two remarks say "private dock". The POA rules were not read. "Some" holds as an existence claim.
- O8. Tidewater "salt marsh along its edges" (row 286): OpenStreetMap saltmarsh and wetland ways lie on the south, north and east sides within about 1 km, and the county parcels put tidal marsh on the south edge (row 280). I did not open the aerial.
- O9. The short answer's "For a lower price, Avalon": true (about $290,000 for a house, the lowest of the 15). "The lowest price" would be exact.
- O10. Grande Dunes' price and Prince Creek's count: row 278 still shows $1.5 million and 57 in its claim cell; the v9 note holds the corrected figures (53 resales, middle $1,400,000; 48 for Prince Creek). The page uses $1.4 million and gives no count.

## Sibling check (SIBLING-OWNERS.md)

Searched the changed sentences for shared places. No change gives the gated page's club facts: Tidewater's inlet holes and awards, the Grande Dunes marina, Ocean Club and trail, Barefoot's four courses and shuttle are all absent. The Grande Dunes "club sells memberships" sentence touches the gated page's Ocean Club membership question; it is cut (N12). The Farm entry keeps one different fact (open land) and no preserve, fee, pools or recreation campus. Pine Lakes and Surfside add no pier or club history.

## Struck entries added

31 entries in `best-neighborhoods-struck.json` (rows `neighborhoods 284, 291 (v10)`, 288, 289, 290, 252/285, 281, 211). Entries with "listed for sale" in the approved wording carry an `unless` so the approved sentence does not fire.

## Status

Not ready to build. Apply N1 to N23, then re-run the struck check and the build. Row 284 is verified as a count of listings only; Avalon's counts still need a reproduction if the page keeps any Avalon house detail.
