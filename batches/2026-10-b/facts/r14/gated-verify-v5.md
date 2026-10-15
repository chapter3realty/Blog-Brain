# Gated communities, rewrite check v5 (round 14, 2026-10-15)

Independent verifier. I did no research on this page. Task: lesson B30. A writer who applies a verifier's correction can put an error back or over-claim. I compared every page sentence that uses a row marked "verified with corrected wording" (46 rows, rows 200 to 396) with that row's required wording, then checked the 20 price and fee boxes.

Page built from `batches/2026-10-b/specs/gated-communities.js` (spec md5 a9531a14bf8e5b22c258ef9bb9b8d7af, read 2026-10-15 00:55 UTC) in a scratch copy of the site. The spec was not edited.

## Result

- 46 rows checked. **33 match. 13 drift.** The 13 are rows 393, 356, 302, 290, 370, 304, 346, 369, 376, 259, 262, 222 and 335.
- Must fix (an over-claim, a wrong group, or a dropped qualifier): rows 393, 356, 302, 290, 370, plus two box items: the Dye Estates price sentence and the Litchfield by the Sea fee cell.
- Tighten (small, but the sentence says more than the source): rows 304, 346, 369, 376, 259, 262, 222.
- Row 335 drifts from the verifier's wording, but I found sources that now support the page. No change needed.
- 20 price and fee boxes: 18 hold. Two drift (Dye Estates price; Litchfield by the Sea fee cell in the table).
- `node tools/struck-check.js --batch batches/2026-10-b --preview <built page dir> --strict`: no struck wording on the gated page before my edit (294 patterns). It also prints four "no page" problems for the other four pages, which I did not build. After my 14 new struck entries the gated page fires them, as intended: the writer must fix those sentences.

## The drifts (13 rows, plus two box items)

| Row | Page sentence now | Problem | Exact wording that is supported |
|---|---|---|---|
| 393 | "As a gated community, DeBordieu does not qualify for public money to rebuild it." | Verbatim from one Coastal Observer sentence, with no attribution, and "As a gated community" reads as a general rule and as the reason for the 2017 vote that follows. Row 393 allows neither. The rule itself is about public access: S.C. Reg. 30-21 (Objective 2): "Use public funds for renourishment projects only where full and complete access is provided." | "DeBordieu, a gated community, does not qualify for public renourishment money [Coastal Observer, 2021]. South Carolina pays for renourishment only where the public has full access to the beach [S.C. Reg. 30-21]." Do not link the 2017 vote to it. |
| 356 | "one car barcode covers both communities' gates" | The source never says a barcode covers or opens gates. Litchfield by the Sea resources page: "In order to obtain a barcode for your gated community and Litchfield By The Sea access we ask you submit a copy of your vehicle registration". | "One vehicle barcode is issued for the owner's gated community and for Litchfield by the Sea access [Litchfield by the Sea resources page]." |
| 302 | "About 30 lots are on the edge of a pond." | The measure is a corner within 10 m of a mapped pond (31 of 102, OSM). It does not say the pond is on the lot's edge or that the lot faces it. | "About 30 lots lie within 10 meters (about 33 feet) of a mapped pond [county parcels, OpenStreetMap]." |
| 290 | "It carries Dye's marks: wooden bulkheads along many of its water banks, deep bunkers around greens that are often raised, and fast greens." | Drops "many of" before the marks (MyHorryNews: "many of Pete Dye's distinct characteristics, including ..."). "Deep bunkers" is not "deep-faced bunkers". | "It carries several of Dye's marks: wooden bulkheads along many water banks, deep-faced bunkers around often-elevated greens, and fast TifEagle greens [MyHorryNews, July 2025]." |
| 370 | "Owners have run the association since 2002 and have not needed a special assessment in that time." | The association's own statement (heritageplantation.com/6), stated as fact. Georgetown County cannot confirm it. Row 370 says "say they have not needed". | "Owners have run the association since 2002 and say they have not needed a special assessment in that time [association site]." |
| 44 (price box) | "Dye Estates homes have resold for about $1.4 million to $2.5 million." | Two resales by individuals, not a market range. A third sale in the window was a builder's new home and is excluded. Row 44 requires saying how few. No period either. | "Two Dye Estates homes were resold in the past year, at about $1.4 million and about $2.5 million [Horry County Register of Deeds]." |
| 92 and 199 (table) | Table cell, HOA fee, Litchfield by the Sea: "Differs by section" | Fees also differ inside one building (Cambridge 135 S Dunes Dr: $855, $1,140, $1,284; Summerhouse $618 to $808). Row 199 change 1 gave the cell as "Differs from home to home". | "Differs from home to home" |
| 304 | "TPC Myrtle Beach, a Tom Fazio course that Golf Digest gave five stars, ..." | The five stars are the club's own account of a 2008 rating (tpcmyrtlebeach.com About page). I found no Golf Digest page that confirms it or dates it. The page gives no year and no source. | "TPC Myrtle Beach, a Tom Fazio course that Golf Digest gave five stars in 2008 (the club's account), ..." or cut the stars. |
| 346 | "It is a designated hurricane hole, a sheltered harbor for riding out storms." | The only source is the S.C. Clean Marina Program, relaying the marina. "Designated" with no designer reads as an official designation. I found no Coast Guard document. (Safe Harbor's own page lists a "Hurricane Resistant Facility" in dry storage, which is not the same claim.) | "The S.C. Clean Marina Program describes the marina as designated a Hurricane Hole by the U.S. Coast Guard." Keep the link. |
| 369 | "... a deck over the water, bordered by cypress trees, that is the daily sunset gathering place." | Source: "serves as a daily sunset gathering place" (heritageplantation.com/3). "The" makes it the only one. | "... that serves as a daily sunset gathering place." |
| 376 | "From home you can check the surf on the association's live cameras on the clubhouse deck and the north and south beaches." | Row 376 verifier did not watch a stream. The cameras are labelled "Clubhouse Deck", "North Beach", "South Beach". Nothing says they show surf. | "From home you can look at the beach on the association's live cameras on a clubhouse deck and on the north and south beaches." |
| 259 | "Its Community Watch desk covers the neighborhood 24 hours a day, seven days a week." | HOA site: "Community Watch Desk Coverage is 24 Hours. Seven days a week". It does not say what the desk covers. | "The HOA lists Community Watch Desk coverage 24 hours a day, seven days a week, and a gatehouse phone line [HOA website]." |
| 262 | "The community calendar lists bingo, yoga, Zumba, mahjong, card groups and a book club." | The public calendar page shows only category names. Events show after a login ("You must be logged in to view the Events on the calendar."). A category is not proof of events. | "The community calendar has categories for bingo, yoga, Zumba, mahjong, card groups and a book club; its events show only after a login [HOA calendar]." |
| 222 | "... the calendar runs from wine dinners to a Fourth of July cookout." | Source: "Themed Dinners and Wine Tastings" and "Memorial Day and Fourth of July Cookouts". "Wine dinners" is a new event type. | "... the calendar runs from themed dinners and wine tastings to a Fourth of July cookout." |

The table has 14 lines: 12 of the 13 drifted rows, plus the Dye Estates price sentence (row 44) and the Litchfield by the Sea fee cell (rows 92 and 199). Row 335 is below.

### Row 335 (Wachesaw East): drift from the verifier's wording, but now supported

Page: "Tee times are sold online, so you share the course with visitors." The row 335 verifier found no source that says outsiders may book, and asked for "Tee times are booked online, and SC Golf lists the course as semi-private". I looked again and found more:

- SC Golf course page (scgolf.com/golfcourses/wachesaw-east): "a lovely golf experience for visitors and locals alike", Course Type: Semi-Private, Golf Trail Member.
- The club home page links "BOOK A TEE TIME" to the Myrtle Beach Golf Trail booking page. Wachesaw East is on the trail's course list (myrtlebeachgolftrail.com/courses/).

So the page sentence is supported. Supported wording, if the writer wants a source in the sentence: "Tee times are sold online, and SC Golf calls the course 'a lovely golf experience for visitors and locals alike'." No struck entry added.

## The 33 that match

201, 212, 217, 219, 220, 223, 225, 242, 253, 260, 282, 284, 285, 286, 300, 301, 306, 322, 328, 341, 343, 353, 354, 358, 359, 360, 363, 365, 372, 374, 386, 390, 392.

Notes on the ones where I looked past the verifier:

- 201: "any Horry County resident can buy one" is narrower than the source (residents and property owners of Horry, Georgetown and Brunswick, with proof). True as written.
- 212: the page keeps the condition (an owner who has set up a gate code). Dye Estates rules V3.0, 3.1.2 re-read. V3.0 (effective January 1, 2021) is still the file the HOA links.
- 219: page matches rule 7.1. It is a 2021 rule set.
- 220: "a member of golf's Hall of Fame" is true. Nick Price entered the World Golf Hall of Fame on October 20, 2003 (nickprice.com, Britannica). The club's own page says "PGA Hall of Fame inductee". The page's wording is safer than the club's. The course also takes limited outside play (developer page), which the page does not contradict.
- 225: "boats up to 120 feet long" drops the source's "or more". It understates, not over-claims. Fine.
- 242, 253, 285, 286, 300: page uses the safe wording, or does not use the struck figure. 286: I re-ran USGS 3DEP: 41.83 ft at 101 Myrtle Trace Dr, 14.40 ft at the oceanfront point. "About 40" and "about 15" hold.
- 284: the covenant (Art. VII s.17) bars parking trucks "on the Properties"; the request was to park pickups in driveways (newsletter, October 2026, page 1). "Trucks may not park in driveways" holds.
- 301: "14 of its 102 lots come within about 100 feet" is 30 m (98 ft). Holds. See "Other findings" for the heading.
- 328: "Before the neighborhoods were planned" is in the Horry Independent (artifacts "excavated before the community was planned"). "Some finds are on display in the clubhouse" is in the same article.
- 353: the history markers are five (dig, dike, cemetery, house, settlement). I read the article. "Hole by hole" is loose: the dig is "leaving 9th green" and the dike "heading toward 1st tee". Holds.
- 354: the page drops the 38 graves. "Protected inside the community" is the community's own phrase (Litchfield by the Sea). Low risk, no change needed.
- 358: Chicora RS11 p. 62: the tracts "used for duck and quail hunting" were sold in 1926 to Ellis. The page gives no purpose for the purchase. Holds.
- 359: course site says "Winding through a pair of plantations". "Two of them" is the page's reading of that. Holds. "Winds through" is closer than "crosses".
- 360, 363: match the verifier's wording. I re-read the Coastal Observer story (August 25, 2019). The "club room" and the weddings are in it.
- 365: OSRM from Litchfield Plantation to 148 Atlantic Ave (OSM point): 4.22 mi, 9.5 min. "About 4 miles by road" holds.
- 372, 374: match. I re-read heritageplantation.com/2: four Har-Tru courts, four pickleball courts, league mornings as written.
- 386, 390, 392: match. Packet 2026 re-read. 392 gives only the line-up place. One year's packet, so "On the Fourth of July" is a mild habit-tense. No change required.

## The 20 price and fee boxes (div.c3-place-cta)

Method: each box checked against its ledger row and the verifier's last word. Prices are medians of deed or MLS sales in October 2025 to September 2026 per the page's sources note.

| # | Place | Box says | Ledger | Result |
|---|---|---|---|---|
| 1 | Tidewater | about $625,000; fee about $230 | row 43 (24 sales, median $625,000); row 185 re-pull $615,000 (1.6 percent apart); fee: six of eight listings $231 (row 20) | holds |
| 2 | Seaside | about $720,000; about $210 | row 183 (11 resales, median $722,500); listings $206 to $208 (row 17) | holds |
| 3 | Barefoot | Leatherleaf about $700,000 to $975,000, fee about $390; Dye Estates "have resold for about $1.4 million to $2.5 million" | rows 45 (5 sales), 33 (fee $385 to $398); row 44 (two resales, $1,400,000 and $2,525,000; builder sale left out) | Leatherleaf holds. **Dye Estates drifts** (see table) |
| 4 | Grande Dunes | about $1.5 million; fee about $200 to $375 | row 46 (11 sales, median $1,501,500); row 34 fees. I geocoded the 18 listings to county parcels: Calais $374 and $374, Palermo $340 and $238, Villa Venezia $199. The $375 is Living Dunes, which is not one of the three sections | holds (the three sections run about $199 to $374) |
| 5 | Waterway Palms | about $780,000; about $150 | row 48 as corrected; row 185 (44 resales, median $775,000); listings $137 to $157 | holds |
| 6 | The Bluffs | about $850,000; about $150 | row 184 (22 resales, median $853,500); listings $154 | holds |
| 7 | Covington Lake East | about $570,000 | row 47 (13 sales, median $570,000); fee in the heading and table $90 (listings $80 to $95) | holds |
| 8 | Myrtle Trace | about $300,000; $95 | row 51 (35 sales, median $300,000); row 159 ($95) | holds |
| 9 | Golf and Yacht Club | older part about $225,000 | row 150 (35 resales; verified with corrected wording); fee about $95 in the entry | holds |
| 10 | Prestwick | about $480,000; about $190 | row 42 (19 sales, median $482,000); row 185 confirms; listings $185 to $197 | holds |
| 11 | Seasons | about $500,000; about $340 | row 51 (19 sales, median $499,000); row 159 ($340) | holds |
| 12 | Bellwood Landing | about $810,000; about $160 | rows 189 and 198: 7 sales without the builder's, median $810,000; listings $157 (row 18) | holds |
| 13 | Wachesaw Plantation | about $700,000; about $150 on most homes | row 191 (16 sales, median $700,000); row 21 ($151 or $280) | holds |
| 14 | Wachesaw East | about $500,000; about $145 | row 192 (the $520,000 was wrong; $500,000 is the safe wording); listings $141 to $149 | holds |
| 15 | The Reserve | about $1.3 million; about $320 on most homes | row 194 (middle $1,310,000 to $1,350,000); listings $318 to $437, MLS median $318 | holds |
| 16 | Willbrook | about $840,000; about $340 | rows 190 and 198 (10 county sales, median $842,000); listings $339 to $346 | holds |
| 17 | Litchfield Plantation | about $800,000 to $1.8 million; about $230 on most homes | row 193 safe wording exactly; listings $230 or $275 | holds |
| 18 | Litchfield by the Sea | Summerhouse one-bedroom condos about $200,000; four Breakers Reef homes about $1.5 million to $2.2 million | row 199 safe wording exactly | holds. The **table's fee cell drifts** (see table). The table's price cell "About $200,000 for a one-bedroom condo to $2.2 million" reads as the whole range, but row 91 found Charlestowne Grant houses sold at $2.2 million and $2.35 million. Safe wording from row 199: "About $180,000 to $2.2 million for whole condos; about $750,000 for Oystercatcher Island houses." (Not struck; ambiguous.) |
| 19 | Heritage | about $710,000; about $325 | row 195 (24 sales, median $709,000; the $680,000 was wrong); listings $317 to $332 | holds |
| 20 | DeBordieu | about $2 million; about $300 to $400 | row 196 (38 sales, median $1,987,500 to $2,000,000); listings $302 to $379 | holds |

Table cells match the boxes for all 20 places except the two flagged above.

## Other findings (outside the 46 rows)

- **Shuttle (Barefoot paragraph, row 217 neighborhood):** the page says a free shuttle "runs to the resort's oceanfront cabana". The 2026 schedule PDF's beach stop is "46th Street & South Ocean Blvd, Public Access", and the cabana page says "Shuttle service drop off at Public Access parking lot on Ocean Boulevard". The cabana is at 4611 South Ocean Boulevard, "just south of 46th Avenue". Supported wording: "In summer a free shuttle runs to the beach at 46th Avenue, where owners have a cabana just south of the street, with key-fob parking, showers and a pet-washing station."
- **Bellwood Landing heading and guide label:** "half-acre lots by Collins Creek" and the guide group "Big lots by a creek". Only 14 of 102 lots are within 30 m of the creek, and the median lot is 0.44 acre. Supported: "half-acre lots, some by Collins Creek" and a label such as "Half-acre lots".
- **Short answer:** "usually sell for about $225,000 to $2 million". The table shows Litchfield by the Sea condos at about $200,000 and Breakers Reef homes at up to $2.2 million. Row 198 passed the range in round 12b with "usually". Consider "about $200,000 to $2.2 million".
- **DeBordieu heading:** "owners keep their own beach". The beach below the mean high water line is public trust land in South Carolina. Supported: "owners pay to rebuild their beach".
- **DeBordieu Beach Club:** "three dining rooms". The club says "three dining spaces". Low.

## Struck list

I added 14 entries to `batches/2026-10-b/facts/gated-communities-struck.json` for the drifted wording above (rows 222, 259, 262, 290, 302, 304, 346, 356, 369, 370, 376, 393, 44 and 92/199). Each entry's struck text fires it, and its approved text fires no entry. `node tools/struck-check.test.js`: all controls pass (107 ok lines). Run on the built page, the batch check now finds exactly these 14 phrases and no others (gated-communities, 308 patterns).

## Commands

- Page built with the site's `tools/mkpage.js` (website patches applied in a scratch copy; the site clone and the spec were not changed).
- `node tools/struck-check.js --batch batches/2026-10-b --preview <scratch dir> --strict`.
- OSRM for the one drive time (row 365). USGS 3DEP for row 286. No Zillow page opened.
