# Gated communities, rewrite check v8 (round 14c, 2026-10-15)

Independent verifier. I did no research on this page and saw none of its drafts. Task: lesson B45. Rows 400 to 533 are new; v6 and v7 verified those rows, but nobody read the page's sentences built from them. I read every sentence that changed or is new since commit 7a9d54b (the state after the v5 fixes), and checked it against its row and the row's verdict.

Page checked: `batches/2026-10-b/specs/gated-communities.js` at md5 `1d51bfd01e6b79d3a2dbda59c7725985` (commit 88e1cf5, 2026-10-15 02:30 UTC), as built in `scratchpad/preview/b/gated-communities.html` (built 02:32 UTC from that spec). The spec was not edited. While I worked, the coordinator committed round 14e (a280830, md5 `b288d9c1...`). I did not re-check that version. Its diff drops Covington Lake East and Myrtle Trace from the place list, the yearly-cost section and the private-clubs con, so drifts D8, D9, D10 and D18 below may be gone from the next build. The other 14 patterns still match the 14e spec source; run `struck-check` on the next build.

## Result

- **73 items checked. 55 match. 18 drift.** The full list is at the end of this file.
- 18 struck entries added to `gated-communities-struck.json` (one per drift, each tagged "(v8)"). `node tools/struck-check.test.js`: all controls pass. The built page fires exactly these 18 entries (20 hits, because three phrases appear in a heading and its entry).
- `struck-check --batch ... --strict` before my entries: **gated-communities (323 patterns): no struck wording.** All five pages passed, exit 0. After my entries: gated 341 patterns, 20 hits, exit 1, as intended.
- Must fix (a wrong claim or one that goes past its source): D3, D4, D8, D14, D15, D16 (the frame), D17. Tighten (an unsupported addition or a general rule from one source): the other 11.
- Nothing on the page says "no flood zone". Both flood statements say FEMA's area of minimal flood hazard, and both hold on FEMA's own layer (below).
- None of the 73 items rests on a pending row. Of the new rows 400 to 533, these are still "pending verification", and the page quotes none of them: 401 (I use it only to question D2), 403, 404, 406, 441, 483, 485 to 488, 490 to 492, 494 to 496, 498, 501, 502, 521, 525, 528, 532 and 533.

## The 18 drifts, in page order

| # | Page sentence | Problem | Supported wording |
|---|---|---|---|
| D1 | Tidewater: "Joey's Clubhouse Grille looks out over the fairways for lunch after a round." | Row 204: "a public restaurant and sports bar", "a refreshing view of the golf course", hours 11 to 8 or 9. Nothing says lunch or after a round. The best-neighborhoods page leads with Joey's (SIBLING-OWNERS gives that angle to Best). | "Joey's Clubhouse Grille, a public restaurant, looks out over the course." Or cut it. |
| D2 | Tidewater: "Visitors check in at the gatehouse." | Row 20 (listings): directions name "the guard house on Little River Neck Road". The page dropped the road and now says "the gatehouse". Row 400 (v6) and row 401 (pending) put the community's gate readers at three entrances. "Check in" is advice in listing directions (row 20's verifier: leave out "agents show a business card"). | "Listings show Tidewater as gated, and their directions name a guard house on Little River Neck Road." |
| D3 | Tidewater: "Tidewater sits on the marsh of the Intracoastal Waterway, not the ocean; ..." | Row 169's verifier struck "Tidewater is on the marsh, not the ocean" and gave "Tidewater is on the Intracoastal Waterway, not the ocean" (row 114: on the waterway; two holes meet its marsh; row 202: between the waterway and Cherry Grove Inlet). The new wording puts the struck claim back. The best-neighborhoods page says "on the marsh behind Cherry Grove Inlet, not on the ocean" in nearly the same words, and SIBLING-OWNERS gives the marsh side to Best. | "Tidewater is on the Intracoastal Waterway, not the ocean; the nearest public beach access is about an 8-minute drive." |
| D4 | Seaside heading and lead: "lakes inside the gate" ("a small gated neighborhood with lakes inside the gate") | Row 17 only says listings show Seaside as gated. Row 205 puts three lake parcels (4.08, 4.80, 4.14 acres) in the association's name. No row says where the gate stands. One OSM lift gate in the frame area is at the lower left, among the Seashore Villas buildings. "Inside the gate" is not shown. | "Seaside Plantation is a small neighborhood that listings show as gated, and its owners association owns three lake parcels of about 13 acres in all." |
| D5 | Seaside: "We get the current rules for any home you like." | A promised outcome. Row 522 (v7): only four titles are online, the text is unread, no association site was found, and it was not confirmed that anyone supplies copies. A 2019 document is also not shown to be current. | "We ask the association for its current gate rules for any home you like." |
| D6 | Grande Dunes: "Grande Dunes has its own contract security, with guard houses and a roving officer." | Row 405 (v6) note: the sheet is dated 2026-02-25; "Roving officer" is the sheet's "Rover" line, safe wording "a rover line"; it does not say which guard house serves Calais, Palermo or Villa Venezia, or the hours. The next sentence names those three sections, so a reader links the guard houses to them. | "The master association's February 2026 contact sheet names Allied Security and lists a main guard house, a north guard house, an Ocean Club guard house and a rover line. It does not say which serves Calais, Palermo or Villa Venezia." |
| D7 | Waterway Palms: "...so some streets still have empty lots and work trucks." | Row 146: builders are finishing houses; about 160 lots had no building. "Work trucks" is in no row. | "Builders are still finishing new houses, so some streets still have empty lots." |
| D8 | Covington Lake East heading and lead: "a small gated street of brick houses" | It is 193 parcels (178 lots) on "curving streets" (the next sentence says so), not a street. Row 29: listings show it as gated; no listing says what kind of gate. | "Covington Lake East is a small neighborhood of brick houses in Carolina Forest, shown as gated in listings." |
| D9 | Covington Lake East: "It has no golf club or marina." | Row 157 checked "no golf course or boat ramp of its own" (its verifier found no marina mapped either). "Golf club" is a different thing (a membership) and nobody checked it. | "It has no golf course or boat ramp of its own." |
| D10 | Myrtle Trace: "A problem with the back gates goes to two residents named in the HOA's gate rules, not to a guard." | Row 527 (v7): the PDF names two residents and says the front entrance is not gated. It does not say there is no guard. "Not to a guard" is new. | "A problem with the back gates goes to two residents named in the HOA's gate guidelines." |
| D11 | Golf and Yacht Club: "...we find out the association a home belongs to, since each has its own fee and rules." | Row 269: Sandpiper Place has its own owners association. No row gives its fee, or says the two fees differ. | "Sandpiper Place has its own owners association, so before you make an offer we find out which association a home belongs to." |
| D12 | Seasons: "the clubhouse has an indoor pool for the cooler months." | Rows 102 and 179: "indoor and outdoor pools". "For the cooler months" is new, and the outdoor pool is gone. | "The clubhouse has indoor and outdoor pools and a fitness center." |
| D13 | Wachesaw Plantation: "Visitors stop at security at the gate." | Row 321: "Spectators who do not reside in Wachesaw Plantation need to stop at security when entering the Plantation", on the Can-Am matches page. One event's rule became a rule for all visitors. Row 21 (listings): a main guard gate reached from Riverwood Drive. | "Listings show Wachesaw Plantation as gated, with a main guard gate reached from Riverwood Drive." (The Can-Am line may stay with the Can-Am event.) |
| D14 | Wachesaw East: "...visitors check in with a guard at the main gate." | Row 22: one listing's directions to agents: "Present a business card to the gate guard". Not a rule for visitors. Row 22's safe wording: "Two listings show Wachesaw East as gated". The old "cross Old Kings Highway to reach the gate guard" at least repeated the listing. | "Two listings show Wachesaw East as gated, and one listing's directions send agents past a gate guard." |
| D15 | The Reserve heading: "Greg Norman's private course and a full-service marina" | I opened both sources. SC Clean Marina page: "a clubhouse with a full-service restaurant and bar". Safe Harbor page: "full service bar". Neither calls the marina full-service. Rows 346 and 347 give dry storage for about 200 boats, a fuel dock, staff launch and haul. | "...and a marina with dry storage, a fuel dock and staff launch and haul." |
| D16 | Willbrook aerial caption: "houses among trees and golf fairways, with open fields cut by straight ditches at the left" | See the image table. The label point is right, but the lower left of the frame, about 40 percent, is Litchfield Plantation's houses and other neighborhoods. A reader sees them as Willbrook's. Lesson B29. | Move the frame north and east so it holds Willbrook parcels, or say "its houses in the middle and at the right beside golf fairways ...; the houses at the lower left are in Litchfield Plantation." |
| D17 | Heritage Plantation: "The board hires a security company, and the main gate has a guardhouse." | Row 442 (v6): the email address "heritageguardhouse@gmail.com" is the only sign of a guardhouse; "do not write staffed or give hours". Row 443: the board contracts for a security company. | "...and the association lists a separate phone line for the main entrance gate." |
| D18 | Cons: "The private clubs we checked list their kinds of membership but not their prices." | The wording is v6's, but rows 481 and 489 show two of the clubs checked list no kinds: The Reserve's page says "tour the property ... use the inquiry form", and the Dye Club's tab is a contact form. Prestwick lists none at all. What holds for all of them is that none prints a price. | "The private clubs we checked print no membership prices." |

## Image labels on the 8 aerials

Method (lesson B29, B32): for each frame I fetched the county parcels (Horry layer 24; Georgetown layer 2 joined to layer 7 and the E911 points) and drew them over the 1200 px file itself, plus the OSM feature each label cites, and tested each label point. `frame.bbox_wgs84` equals the `source_request` bbox within 0.01 percent of the frame width on all 7 NAIP records (DeBordieu is joined NOAA tiles, no request). The parcel lines fit the roofs, so the images are the frames the records give.

| Image | Label points | What the frame holds | Verdict |
|---|---|---|---|
| Tidewater | "Tidewater Plantation" is 1200 Tidewater Dr, on Tidewater parcels. "Golf club" is OSM node 6708490229, on the county parcel "W/S GOLF COURSE" (96.76 acres, KSM South Carolina LLC), 35 m inside the top edge. No clubhouse shows at it. | Tidewater, Teal Lake Village and Tidewater Villages parcels; fairways and ponds. | holds. The caption says "golf club labelled"; the point is on the course parcel, not on a visible building. |
| Seaside | Name is 504 Seafarer Way, on Seaside Plantation parcels. "Lake" is OSM way 45443294, inside the association's lake parcels. | Seaside Plantation parcels (yellow) in the middle; Tilghman Estates at the right and upper right, Seashore Villas at the lower left. The three association lake parcels sum to 13.02 acres. | holds. The caption "houses beside lakes" is true. The lower lake extends past the neighborhood's parcels. |
| Golf and Yacht Club | Name is 6624 Wintergreen Pt, on MB Golf & Yacht parcels. "Entrance on Bay Road" is the road end at (-79.0436, 33.6473), beside the parcel at the right edge. | Golf and Yacht parcels fill the middle; Island Green and Fairwood Lakes at the left and bottom, Sandpiper Place at the upper left. I drew the six deed tracts (4343/534, 62.54 acres) over the frame: they lie on the strips of grass and woods, as the page says. | holds |
| Prestwick | Name is 1344 Royal Devon Dr, on Prestwick parcels. "Golf course" is OSM fairway way 1317154978, on a fairway at the lower left. | Prestwick and Pipers Glen parcels; a long lake left of center; an RV lot at the right. | holds |
| Willbrook | "Willbrook Plantation" is 49 Red Squirrel Ln, on a Willbrook parcel. "Fields and ditches" is a ditch in rice fields at the upper left. | Of 194 parcels in the frame, 81 are Willbrook. The houses along the marsh edge at the lower left are Litchfield Plantation (28 parcels) and others (23 more with Litchfield legal names). | **label holds, frame drifts (D16)** |
| Litchfield Plantation | Name is 307 Tuckers Rd, on Litchfield Plantation. "Avenue of Live Oaks" is on OSM way 12391869 (its second node, 60 m from the end). I drew the way: its northwest end touches the plantation house parcel (7.35 acres). | Litchfield Plantation in the middle; Willbrook parcels at the top; Litchfield Country Club's course and homes at the right. | holds. "A neighboring golf course and its ponds at the right" is true. |
| Litchfield by the Sea | Name is on Oystercatcher Island in the lake; "Beach" is on dry sand. | Homes around the lake, large buildings by the beach, the ocean. I looked at it; I did not draw parcels. | holds |
| DeBordieu | Name at the average of the colony's parcel centers; "Beach" on the coastline at 33.3761. | Fairways, ponds, marsh, the beach. Unchanged since earlier rounds; I looked at it only. | holds |

Two new untracked image files (`prestwick-course-from-above-2023`, `tidewater-plantation-marsh-from-above-2023`) are in the checkout. The spec at 88e1cf5 does not use them, and I did not check them.

## Flood statements

Both say "area of minimal flood hazard" and "high-risk zone"; neither says "no flood zone". I re-ran both on FEMA's own layer (hazards.fema.gov NFHL layer 28, answered 2026-10-15), not only the county's copy:

- Covington Lake East: 0 of 193 parcels touch any polygon that is not "Area of Minimal Flood Hazard". Holds. (The nearest high-risk polygon is 59 m from one lot, so "every lot is minimal hazard" is a statement about the lots, and the page says only that.)
- Myrtle Trace: 0 of 531 parcels touch such a polygon. The nearest high-risk polygon to a parcel with a building is 866 m, 0.54 mile. "About half a mile from the nearest home" holds on FEMA's layer too (v7 measured on the county's copy).
- "The only kind where federal rules make a lender require flood insurance": 42 U.S.C. 4012a(b), as v7 read it. "No lender is required to make you carry flood insurance" is true of the federal rule, with "by that map". The page does not claim it means no risk.

## Gate sentences, community by community

Tidewater D2 (and row 400, past tense, passes). Seaside D4, D5. Barefoot: Dye Estates guard and second gate, rows 211 and 212 with their condition, unchanged and holding; Leatherleaf has no gate sentence (row 402 allows but does not show a gate), holding. Grande Dunes D6. Waterway Palms and The Bluffs: none. Covington D8. Myrtle Trace: back gates only, front open (row 13, 527), D10 for the guard clause. Golf and Yacht Club: gatehouse at the entrance (row 149) and desk coverage (row 259) hold, in one sentence, with "and" keeping them apart. Prestwick holds (row 407's fix applied). Seasons call box holds. Wachesaw Plantation D13. Wachesaw East D14. Litchfield by the Sea, DeBordieu and Litchfield Plantation hold. Heritage D17.

## "We confirm", "we find out", "we ask"

| Page text | Can an agent do it, with no promised outcome? |
|---|---|
| Short answer: "we ask the club for the current dues" or "figures" | yes |
| Tidewater: "we confirm what the gates use today" | yes (ask the association) |
| Seaside: "We get the current rules for any home you like." | **no**, D5 |
| Grande Dunes: "We confirm it for each home you look at." | yes (v6's wording; the master association or seller can say) |
| Golf and Yacht Club: "we find out the association a home belongs to" | yes (county records, the HOA) |
| Prestwick: "we find out how the gate is run today" | yes |
| Litchfield by the Sea: "We find out the fee for any home you like" | yes |
| FAQ: "We find out the gate's rules for guests and deliveries for any home" | yes |
| Cons: "We ask the club for the current figures before you offer." | yes |
| Cons: "We check the HOA's savings, so you know before you offer whether a ... special assessment ... is likely." | The check is possible. "So you know" promises the result, and an HOA may not release its reserves before a contract. It is row 199's approved wording, so I did not strike it. Consider "We ask for the HOA's budget and reserve figures before you offer." |

## Times

All the minutes on the page rest on rows or hold when I re-ran OSRM (no traffic): Tidewater to the nearest public beach access 7.7 minutes, 3.07 miles (page "about 8"); Golf and Yacht Club entrance to Enterprise Landing 4.4 minutes, 1.73 miles (page "about 4"); Wachesaw East to the park 11 minutes (row 178); Litchfield Plantation to the beach house about 4 miles (row 365). The other times (MarshWalk 10 minutes, Surfside 7 minutes) are unchanged. `rules/distance-words.json`: no hit on the page. "Close enough to reach by golf cart" has "less than half a mile" in the same sentence. "TPC ... about 330 feet" is row 306's 100 m. The bare "close by" for TPC (Seasons) carries "a third of a mile" (row 300, 560 m).

## Sibling check (SIBLING-OWNERS.md)

Read against the built Best, Affordable, No HOA and The Farm pages.

- **Tidewater, Best and Gated both say the marsh and not the ocean (D3), and both feature Joey's (D1).** Gated owns the course and the inlet holes; Best owns the marsh side and the grille. Cut both from Gated. Price and fee agree: about $625,000 and $230 on both.
- **Golf and Yacht Club:** Affordable says "The community is gated" and the older houses cost about $225,000 with a $95 fee, the same figures as Gated. Pool and calendar are no longer on Gated, so no repeat. Agrees.
- **Grande Dunes:** Best says nothing about the Ocean Club, so the "must agree" rule is met. Best's fee range ($200 to $400, whole neighborhood) and Gated's ($200 to $375, three named sections) name different groups.
- **Barefoot, The Farm and No HOA:** no overlap with the Gated entries.

## Other findings (not counted as drift)

- The Reserve: "A bigger boat needs a wet slip or a side tie" holds up to 60 feet; row 347 lists wet slips 29 to 35 feet and side ties 36 to 60, so a 28-foot boat or one over 60 fits neither category.
- Golf and Yacht Club: "the owners own their green space" is true of the 62.54 acres (the association's deed) and other association parcels (row 151). The strips are not all of the green space. Low; "the owners' association owns about 62 acres" is exact.
- Guide: the group "A fee under $100 a month" lists Covington Lake East and Golf and Yacht Club. Myrtle Trace ($95) also fits and sits in the 55+ group. A reader may take the group as complete.
- DeBordieu con: "pay to rebuild their own beach" is row 393's wording; the beach below the high-tide line is public (v5), so the entry's "their beach" is safer than "their own beach".
- FAQ: "A gate keeps through traffic off the streets" rests on one source (row 13, Myrtle Trace's back gates; its verifier said not to write a protection claim). The 14e wording ("keeps cars that are only passing through off the streets") is no stronger.
- Har-Tru "a green clay": no ledger row. The maker's site (hartru.com, read 2026-10-15) calls its courts "HAR-TRU Green Clay" and "American green clay". Holds; add a row if the writer keeps it.
- For the places whose only source for a gate is listings (Seaside, Covington Lake East, Waterway Palms, Wachesaw Plantation and East, Tidewater, Seasons), the page says "gated" as fact. The rows say "listings show it as gated". That is the page's convention from earlier rounds; I did not strike it.

## All 73 items checked

| # | Entry | Page sentence | Row or source | Result |
|---|---|---|---|---|
| 1 | Top | Two of these gated communities sit on the ocean, and ten have golf. | guide group and FAQ, unchanged claims | match |
| 2 | Top | Homes in these 20 gated neighborhoods sell for about $200,000 to $2.2 million; most HOA fees about $90 to $400 a month. | rows 198, 199 | match |
| 3 | Top | A golf or beach club is usually a separate membership with its own dues; we ask the club for the current figures. | rows 106, 223, 482, 480 | match |
| 4 | Tidewater | Ranked among the best you can play in America; No. 39 in Golf Digest's 100 Greatest Public Courses, 2023 to 2024. | row 200 | match |
| 5 | Tidewater | Joey's Clubhouse Grille looks out over the fairways for lunch after a round. | row 204 (view of the course; no lunch) | DRIFT |
| 6 | Tidewater | Visitors check in at the gatehouse. | rows 20, 401 | DRIFT |
| 7 | Tidewater | Residents switched from key fobs to a tag on each car, read as the car comes up; we confirm what the gates use today. | row 400 (v6 wording) | match |
| 8 | Tidewater | Tidewater sits on the marsh of the Intracoastal Waterway, not the ocean. | rows 169, 202 | DRIFT |
| 9 | Tidewater | The nearest public beach access is about an 8-minute drive. | row 58; OSRM 7.7 min | match |
| 10 | Tidewater | Aerial: labels Tidewater Plantation and Golf club; caption houses along fairways with ponds. | parcels, OSM node 6708490229 | match |
| 11 | Seaside | Small gated neighborhood with lakes inside the gate (heading and lead). | rows 17, 205; no gate position | DRIFT |
| 12 | Seaside | The association owns the lakes, three parcels of about 13 acres in all. | row 205; county parcels (4.08 + 4.80 + 4.14) | match |
| 13 | Seaside | In 2019 the association recorded its Gate Access Rules; gate and security policies for contractors, service providers and agents were recorded too. | rows 15, 522 (v7) | match |
| 14 | Seaside | We get the current rules for any home you like. | row 522 (v7 limit 3) | DRIFT |
| 15 | Seaside | Main Street is less than half a mile away, close enough to reach by golf cart. | rows 94, 174 | match |
| 16 | Seaside | Aerial: houses beside lakes; labels Seaside Plantation and Lake. | parcels, association lake parcels | match |
| 17 | Barefoot | Leatherleaf's Residents' Club has a lifestyle director who plans events. | row 215 | match |
| 18 | Barefoot | Two Dye Estates homes resold in the past year, at about $1.4 million and $2.5 million. | row 44; v5 wording | match |
| 19 | Grande Dunes | Many homes come with a household membership to the Ocean Club, a private club on the beach; towel and bar service, cabanas; we confirm it for each home. | rows 499, 224, 96 | match |
| 20 | Grande Dunes | Grande Dunes has its own contract security, with guard houses and a roving officer. | row 405 (v6 notes) | DRIFT |
| 21 | Waterway Palms | The clubhouse stands on a point in a pond, with water on three sides; sidewalks run along the streets. | rows 119, 146; aerial | match |
| 22 | Waterway Palms | Builders are still finishing new houses, so some streets still have empty lots and work trucks. | row 146 (no work trucks) | DRIFT |
| 23 | Covington Lake East | A small gated street of brick houses, HOA fee about $90 a month, the lowest of the 20. | rows 29, 148 | DRIFT |
| 24 | Covington Lake East | FEMA's current map puts every lot in its area of minimal flood hazard; none in a high-risk zone, the only kind where federal rules make a lender require flood insurance. | rows 523 (v7); FEMA NFHL: 0 of 193 parcels | match |
| 25 | Covington Lake East | It has no golf club or marina. | row 157 (golf course or boat ramp) | DRIFT |
| 26 | Myrtle Trace | FEMA's current map puts every lot in its area of minimal flood hazard; nearest high-risk zone about half a mile from the nearest home; no lender required. | rows 524 (v7); FEMA NFHL: 0 of 531 parcels, 866 m | match |
| 27 | Myrtle Trace | The owners run it themselves, with volunteers and no management company. | row 158 | match |
| 28 | Myrtle Trace | The HOA's contact list has a library coordinator and notaries who charge residents nothing. | row 526 (v7 wording) | match |
| 29 | Myrtle Trace | The HOA site keeps a word-of-mouth list of companies residents have used. | row 529 (v7 wording) | match |
| 30 | Myrtle Trace | Gates only at the back entrance, to keep out cut-through traffic; the front entrance is open. | rows 13, 527 | match |
| 31 | Myrtle Trace | A problem with the back gates goes to two residents named in the HOA's gate rules, not to a guard. | row 527 (no guard claim) | DRIFT |
| 32 | Golf and Yacht Club | The owners own their green space; in 2020 the association took title to six tracts, 62.54 acres, by one deed; about 59.5 acres are the strips of grass and woods. | rows 530, 151 (v7); deed 4343/534; tracts drawn on the aerial | match |
| 33 | Golf and Yacht Club | A gatehouse at the entrance and Community Watch desk coverage around the clock; fee about $95. | rows 149, 259 | match |
| 34 | Golf and Yacht Club | RV and trailer storage; Enterprise Landing about a 4-minute drive from the entrance. | row 150; OSRM 4.4 min | match |
| 35 | Golf and Yacht Club | No golf course or yacht club now; Heron Point closed in 2014; Sandpiper Place has its own association and shares the entrance. | rows 257, 266, 269, 175 | match |
| 36 | Golf and Yacht Club | We find out the association a home belongs to, since each has its own fee and rules. | rows 175, 269 | DRIFT |
| 37 | Golf and Yacht Club | Aerial: labels Golf and Yacht Club and Entrance on Bay Road; strips of grass and ponds. | parcels; deed tracts drawn over it | match |
| 38 | Prestwick | In December 2015 the club said it would end golf memberships and become a daily-fee course; its site lists no membership today. | row 497 (v6 wording) | match |
| 39 | Prestwick | Golfers who do not live here come to play, so we find out how the gate is run today. | rows 169, 407 | match |
| 40 | Prestwick | Aerial: houses among the fairways, a lake at the left; labels Prestwick and Golf course. | parcels | match |
| 41 | Seasons | The clubhouse has an indoor pool for the cooler months. | rows 102, 179 (indoor and outdoor pools) | DRIFT |
| 42 | Seasons | Visitors use a call box at the main gate. | row 14 | match |
| 43 | Bellwood Landing | TPC Myrtle Beach is about 330 feet from the nearest lot. | row 306 (100 m) | match |
| 44 | Wachesaw Plantation | Visitors stop at security at the gate. | row 321 (spectators at one event); row 21 | DRIFT |
| 45 | Wachesaw Plantation | Eight clay tennis courts and its book clubs and card groups. | row 161 | match |
| 46 | Wachesaw Plantation | The club is rebuilding its pool and Magnolia's, so part of the club is a work site for now. | row 325 | match |
| 47 | Wachesaw East | The club calls the 18th, played around a pond, its signature hole. | row 172 | match |
| 48 | Wachesaw East | Visitors check in with a guard at the main gate. | row 22 | DRIFT |
| 49 | Wachesaw East | The entrance to Huntington Beach State Park is an 11-minute drive. | row 178 | match |
| 50 | The Reserve | Heading: a full-service marina. | rows 346, 347; SC Clean Marina page | DRIFT |
| 51 | The Reserve | Dry storage takes boats up to 27 feet; a bigger boat needs a wet slip or a side tie. | row 347 (see Notes: limit of 60 feet) | match |
| 52 | Willbrook | Aerial: houses among trees and golf fairways, open fields cut by straight ditches at the left. | E911 and county attributes drawn over the frame | DRIFT |
| 53 | Litchfield Plantation | At the end of the Avenue of Live Oaks stands the plantation house, and the owners own it. | rows 360, 362; county parcel and OSM geometry | match |
| 54 | Litchfield Plantation | The gatehouse stands on the avenue. | row 26 | match |
| 55 | Litchfield Plantation | Aerial: Avenue of Live Oaks labelled at the left; neighboring golf course and ponds at the right. | OSM way 12391869 drawn on the frame | match |
| 56 | Litchfield by the Sea | A guard works the main gate day and night. | row 6 | match |
| 57 | Litchfield by the Sea | Aerial: homes around a lake, large buildings by the beach, ocean at the right. | parcels, OSM | match |
| 58 | Heritage Plantation | The board hires a security company, and the main gate has a guardhouse. | rows 442, 443 | DRIFT |
| 59 | Heritage Plantation | The HOA fee includes cable TV, home internet, the dock master and 24-hour security. | row 371 | match |
| 60 | Heritage Plantation | Four Har-Tru courts, a green clay. | Har-Tru's own site (hartru.com) | match |
| 61 | DeBordieu Colony | Every car comes through one gate; guests registered online, in an app or by phone; a guest pass lasts up to a week. | row 390 | match |
| 62 | DeBordieu Colony | Boats cannot stay at the community dock overnight; each one goes home on its trailer. | row 388 | match |
| 63 | DeBordieu Colony | Aerial: DeBordieu Colony and Beach labels; fairways, ponds, marsh. | unchanged; parcels, TIGER coast | match |
| 64 | Pros | At Grande Dunes, many homes come with a household membership to the Ocean Club. | row 499 | match |
| 65 | Pros | At Litchfield by the Sea and in Dye Estates, a guard works the main gate day and night. | rows 6, 211 | match |
| 66 | Pros | At Heritage Plantation, the HOA fee includes cable TV, home internet and a full-time dock master. | row 371 | match |
| 67 | Pros | At Litchfield Plantation, the owners own the plantation house at the end of the Avenue of Live Oaks. | rows 360, 362 | match |
| 68 | Cons | The private clubs we checked list their kinds of membership but not their prices. | rows 480, 481, 489 | DRIFT |
| 69 | Cons | At DeBordieu, the owners pay to rebuild their own beach, through assessments to a beach fund. | row 393 | match |
| 70 | Cons | In Dye Estates, lots are still for sale with no deadline to build, so a house can go up next door. | row 213 | match |
| 71 | Cons | In unincorporated Horry County the HOA maintains private streets; we check the HOA's savings. | rows 1, 199 (approved wording) | match |
| 72 | FAQ | A gate keeps through traffic off the streets; a guard, a code or the owner lets each visitor in; we do not rate any neighborhood. | rows 13, 211, 212, 14 | match |
| 73 | FAQ | Each neighborhood has its own way: a guard with a guest list, a call box, or a code from the owner; we find out the rules for any home. | rows 5, 14, 211, 212 | match |

## Commands and sources

`git diff 7a9d54b HEAD -- batches/2026-10-b/specs/gated-communities.js`; `node tools/struck-check.js --batch batches/2026-10-b --preview <scratchpad>/preview/b --strict`; `node tools/struck-check.test.js`; `node tools/photos.js check` (the 134 problems it lists are all missing resized files under the wrong image root, none a frame problem). Horry County GIS layer 24; Georgetown County GIS layers 0, 2 and 7; FEMA NFHL layer 28; OpenStreetMap API; OSRM public router; hartru.com; the SC Clean Marina and Safe Harbor Reserve Harbor pages. No Zillow page was opened.
