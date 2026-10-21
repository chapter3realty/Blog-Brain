# Gated communities, check v12 (round 14k, 2026-10-21)

Independent verifier. I did no research on this page. Scope (from the coordinator): ledger row 573, every sentence changed in `git diff 93af54a HEAD -- batches/2026-10-b/specs/gated-communities.js` (15 changed lines), and the Tidewater award line under lesson B53. I read `prompts/verifier.md` and lessons B45, B48, B52, B53. I did not edit the spec. I did not open Zillow. I did not clone anything.

## Verdict

Row 573: wrong in part. 14 changed items checked: 9 hold, 5 drift (3 must fix, 2 tighten). One award claim is wrong in part (Golf Magazine).

## Must fix

| # | Current text | Why | Replacement text |
|---|---|---|---|
| H1 | Tidewater: "Golf Digest and Golf Magazine both named it the best new public course in America that year." | See the award section below. Golf Digest named it the best new public course of 1990. Golf Magazine put it first on its list of the top 10 new public courses of 1990. The 1991 report separates the two; later retellings merge them. | "The course opened in 1990, and Golf Digest named it the best new public course in America that year; Golf Magazine put it first on its list of 1990's top 10 new public courses." |
| H2 | Area heading "Surfside Beach and Murrells Inlet", map pill "Surfside-Murrells Inlet, 7-12" | Entry 7 (Golf and Yacht Club) says in its own first sentence "off Bay Road in Socastee". It sits outside the heading again. v11 G2 asked for a name that covers Socastee, Surfside Beach and Murrells Inlet; the writer dropped Socastee instead of Surfside Beach. The AREAS label in the spec still reads "Socastee to Murrells Inlet" (struck at v11, unused for display; change it too so the struck check stays quiet). | Heading: "Socastee, Surfside Beach and Murrells Inlet". Pill: "Socastee-Surfside-Murrells, 7-12" (exactly 32 letters, the area-map limit). |
| H3 | Litchfield by the Sea: "The association also lists single-family homes in Oystercatcher Island, Charlestowne Grant, Compass Point and River Club." | The association's own pages: Charlestowne Grant "our collection of 45 single family homes"; River Club "approximately 250 single-family homes across five distinct sections" (and three condominium associations); Compass Point "a community of 20 single-family homes"; Oystercatcher "freestanding, two-story villas", not "single-family". The sentence puts the association's words on Oystercatcher Island. | "The association also lists single-family homes in Charlestowne Grant, Compass Point and River Club, and freestanding villas in Oystercatcher Island." |
| H4 | Litchfield by the Sea: "Most of Charlestowne Grant's houses pay about $520 to $630." | Eight listings (517, 517, 525, 625, 630, 632, 632, 817) out of 45 homes (B48, B52). "Most of the houses" is a rule from 8 of 45, and the 817 sits outside the range. The association gives no fee table for the section. | "In Charlestowne Grant, the houses whose sales we read pay about $520 to $820." Same voice as the sentence before it ("In the sections whose sales we read"). Or cut. The table cell "About $520 to $1,880" has the same low end; keep it only with the same limit. |

## Tighten (optional)

| # | Current text | Note | Replacement text |
|---|---|---|---|
| H5 | Pros: "Several gates have a guard on duty day and night; others have a gatehouse or a watch desk." | Sourced day-and-night guards: Litchfield by the Sea main gate (row 6), Dye Estates main gate (row 211). A third, the Cascadia section gate in Grande Dunes, is the builder's word (row 11) and Cascadia is not one of the sections on the page. Two is thin for "several". | "Some gates have a guard on duty day and night; others have a gatehouse or a watch desk." |
| H6 | Seasons: "Today the community has a clubhouse, indoor and outdoor pools, a fitness center, tennis and bocce." | The list is the management company's, dated 2024-01-31. It holds. "Today" is 2.7 years after the release. | Keep, or "The management company lists a clubhouse, ..." |

## What holds

| Page text | Check | Result |
|---|---|---|
| Typical sale prices "about $200,000 to about $2 million" (G1) | Price column: lowest typical $200,000 (Summerhouse one-bedroom), highest typical about $2 million (DeBordieu, row 83, median $2,000,000). Litchfield by the Sea's table cell reaches $2.2 million as a range of sales, not a typical price. | holds |
| "These 18 gated neighborhoods run from North Myrtle Beach to DeBordieu Colony" | unchanged meaning | holds |
| Tidewater lead "one of the best public courses in South Carolina: Golf Digest ranks it No. 38 in the state" (G3) | Golf Digest Tidewater course page, through a search tool (golfdigest.com answers 403 to curl and WebFetch): "Ranked 38th, 2025-'26", up from 39th. Golf Digest's Best in State list includes private clubs (Yeamans Hall, Congaree, Sage Valley, Bulls Bay are ranked on it), so the rank is among all courses. The sentence says "in the state", which is right. Never write "among South Carolina's public courses" for the 38. | holds; B53 note below |
| Waterway Palms "Most houses sold here lately were built since 2020 ... many are custom homes of about 3,000 to 3,800 square feet" (G4, G5) | v11: 127 of 188 since 2020 (68 percent); 92 of 188 (49 percent) in 3,000 to 3,800. "Many" fits. I did not re-read the 188 listings. | holds on v11's count |
| "lots on the Intracoastal Waterway often have a private dock" (G6) | v11: 19 of 22 waterway listings name a private dock. | holds on v11's count |
| "about one in five has no house on the county roll yet" (G7) | row 632: 159 of 746 (21 percent); the forecast is gone. | holds |
| The Bluffs "the nearest lots are about 280 feet from it" (G8) | v11 measured 85 m by the county road line and 87 m (286 feet) by the S.C. 31 carriageway. I did not re-measure. | holds on v11's measure |
| Seasons: "the builder listed a ballroom, a card room, an art studio and a billiards room in the clubhouse" (G9, G10) | PRWeb, 2013-08-31, re-opened: "A grand clubhouse, staffed with a full-time Activities Director, offers a ballroom, card room, art studio, and billiards room." Past tense and "the builder" fit a 2013 release written for Dock Street Communities (issued by Marketing Strategies, Inc.; it names Dock Street's COO). | holds |
| Seasons heading "a clubhouse, indoor and outdoor pools and bocce"; "indoor and outdoor pools, a fitness center, tennis and bocce" (G11) | FirstService Residential release dated Wednesday January 31, 2024, re-opened: clubhouse, indoor and outdoor pools, a fitness center, tennis, bocce ball, as a list for the community. The page says "the community has", not "the clubhouse has". | holds |
| Breakers Reef "four villas ... sold last year for about $1.5 million to $2.2 million" (G15) | Association page: "exclusive oceanfront villa community", "large multi-level villas". Four sales $1,490,000 to $2,178,000 (row 90; MLS types are two Condominium and two Townhouse, so the association's word "villas" is the right one). | holds |
| Heritage "A few lots look over the old rice fields toward the river" (G16) | v11: 2 of 83 listings. "A few" is a floor, not a share. | holds |
| "Many of Charlestowne Grant's houses are raised beach houses" (G13) | 8 of 8 listings raised, 45 homes. "Many" is a fair hedge for 8 known. | holds |
| "condo and villa fees range from about $620 a month to about $1,880" (G14, first half) | row 611 and row 92: 618 to 1,876 across 38 sales in ten sections, scoped "In the sections whose sales we read". | holds |

## The award line (B53)

Page: "The course opened in 1990, and Golf Digest and Golf Magazine both named it the best new public course in America that year."

- **Golf Digest's own list: not readable here.** golfdigest.com answers 403 to curl and WebFetch. The search tool returns excerpts of the Tidewater course page (ranking history), but none of Golf Digest's 1990 "Best New" list or its Tidewater award text. Row 114's own sources (Discover South Carolina, the state tourism department) and the later retellings (golftennessee, illinoisgolf, a 1997 Golf Course News piece) are secondary.
- **Contemporaneous report, opened and read (PDF text, `pdftotext`):** Golf Course News, May 1991, p. 41, `archive.lib.msu.edu/tic/gcnew/article/1991may41.pdf`: "NORTH MYRTLE BEACH, S.C. - Tidewater Golf and Country Club has been was selected 1990's Best New Public Course in America by Golf Digest and headed the list of 1990's Top 10 New Public Courses in America by Golf Magazine." It names Ken Tomlinson as owner and designer.
- **Result by magazine and scope.** Golf Digest: "Best New Public Course in America", 1990 (national, new public). Golf Magazine: first on its "Top 10 New Public Courses in America" list, 1990 (a top 10 list, not a single "best new" award). The 1997 Golf Course News line ("GOLF and Golf Digest magazines voted the best new public course of the year in 1990") and the state tourism article ("named by both ... as the best new public course in America in 1990") merge the two, six years or more later. A contemporaneous report beats them.
- **Status.** Golf Digest half: verified at a contemporaneous news report of the list (B53 allows this); the publisher's own list was not readable, so the row says so. Golf Magazine half: "both named it the best new public course" is wrong in part. Safe wording above (H1). It states the scope: best new public course (Golf Digest), first of the top 10 new public courses (Golf Magazine), 1990, national.
- **If the owner wants "both ... best new public course".** It needs Golf Magazine's own 1990 or 1991 list. A person with a browser can check Golf Digest's "Best New Courses" archive for 1990 and Golf Magazine's 1990 list.

## Struck list

Added: H1 (Golf Magazine), H2 (heading and pill), H3 (Oystercatcher "single-family"), H4 (Charlestowne Grant "Most ... pay"). I also corrected the `use` text of the v11 entry "gated 200 (v11)" for the first-sentence replacement: it told the writer to write "in 1990 Golf Digest and Golf Magazine named it the best new public course in America", which is the claim H1 strikes.

## Sources opened or run

Golf Course News, May 1991 (PDF); Golf Digest search-tool excerpts (Tidewater page, Best in State pages of other courses); litchfieldbythesea.com community pages for Charlestowne Grant, River Club, Compass Point, Oystercatcher and Breakers Reef; PRWeb 2013 release; fsresidential.com 2024 release; OSRM was not needed here.
