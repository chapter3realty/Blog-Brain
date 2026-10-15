# Round 14 gated verification v1 (independent verifier, 2026-10-15)

Rows checked: 33 (200, 201, 202, 204, 205, 208, 211 to 217, 219 to 225, 229, 240 to 242, 247, 253, 257, 259 to 262, 266, 269). I opened each source myself (Tidewater and Barefoot Golf pages through the fetch tool, because curl got 429; every other page, the PDFs, the county parcel layer and the AcclaimWeb index directly). The deed counts for rows 240 to 242, 247 and 269 were re-pulled from the Register of Deeds index, not copied.

## Counts

| Status | Rows | Count |
|---|---|---|
| verified | 200, 202, 204, 205, 208, 211, 213, 214, 215, 216, 221, 224, 229, 240, 241, 247, 257, 261, 266, 269 | 20 |
| verified with corrected wording | 201, 212, 217, 219, 220, 222, 223, 225, 242, 253, 259, 260, 262 | 13 |
| wrong | none | 0 |
| unverifiable | none | 0 |

No row rests on a listing, agent or aggregator site. No claim needs to be cut from the page; the page sentences below need a wording change. Entries for all of them are in `struck-v1.json` (patterns checked by hand: each fires on its struck text and not on its approved text; `tools/struck-check.test.js` could not run here because `cheerio` is not installed).

## Corrections to rows

- **201** Two-person cart fee is $25 a round each, not one $25 a round.
- **212** The call-the-owner, press-9 route only works if the owner has filed the Gate Access Code form; otherwise the keypad calls the guard house.
- **217** The source says key fob entry with private access to the beach; there is no "beach gate".
- **219** "For looking at" is a gloss. The rule bans swimming, flotation devices, boating, fishing and piers or docks on the lakes and retention ponds.
- **220** Source: "constructed in 2005", not "opened". The developer's page says "limited outside play" and still says bentgrass; the club's page wins on the grass.
- **222** "Indoor and outdoor seating", not "dining room and patio".
- **223** "800 of your fellow neighbors" is marketing copy, not a member count.
- **225** "Vessels up to 120 feet or more", not "boats of 120 feet or more".
- **242** Total Master in Equity deeds 2008 to 2023 is 182 (not 183); other years are 45 (not 46). 137 for 2010 to 2012 is right.
- **253** The Post and Courier gives 370 feet in a parenthetical; it does not say the county measured it.
- **259** The page says "Community Watch Desk Coverage is 24 Hours" and lists a gatehouse phone; it does not say the desk is at the gatehouse or "staffed".
- **260** "Maintenance Coverage", not "its own maintenance staff".
- **262** The public calendar shows category names only; events need a login.

Minor, no status change: row 216 (the PDF calls Sept 6, 2026 a Monday; it is a Sunday; times are approximate), row 241 (+/-1 by grantor spelling), row 205 (the 4.8-acre lake parcel has a truncated owner name and no sale record).

## Page sentences to change (`specs/gated-communities.js`)

| Entry | Quote | Corrected fact |
|---|---|---|
| seaside-plantation | "the lakes behind many of the houses, about 13 acres of water, belong to the neighborhood" | The association owns three lake parcels of about 13 acres in all (parcel acres, banks included), per county records. |
| barefoot-resort | "At the second gate, a guest can call the owner from the keypad, and the owner presses 9 on the phone to open it." | Only if the owner has filed the Gate Access Code form; otherwise the keypad calls the guard house. |
| barefoot-resort | "In Dye Estates the ponds are only for looking at: no swimming, boating, fishing or docks." | The rules ban swimming, flotation devices, boating and fishing on the lakes and retention ponds, and owners may not build piers or docks on them. Cut "only for looking at". |
| grande-dunes | "takes boats of 120 feet or more" | The marina takes vessels up to 120 feet, and says "or more". |
| grande-dunes | "The public two-mile Waterway Trail starts nearby." | "Nearby" is unmeasured. Say the trailhead is on Marina Parkway near the Grissom Parkway overpass, or measure the distance. |
| waterway-palms-plantation | "That is why builders are still finishing houses here, and some streets still have empty lots." | No record ties court-ordered sales to builders finishing houses. Cut "That is why". State the 2004 to 2006 sales, the court-ordered deeds and the empty lots as separate facts. |
| myrtle-beach-golf-and-yacht-club | "a Community Watch desk at its gatehouse on Bay Road, staffed 24 hours a day, seven days a week" | The HOA lists Community Watch Desk coverage 24 hours a day, seven days a week, and a gatehouse phone line. It does not place the desk at the gatehouse. |
| myrtle-beach-golf-and-yacht-club | "The association also has its own maintenance staff on weekdays." | The HOA lists maintenance coverage Monday through Friday, 7:00 a.m. to 3:30 p.m. |
| myrtle-beach-golf-and-yacht-club | "The calendar adds bingo, yoga, Zumba, mahjong, card groups and a book club." | The calendar has those as category names; the events are behind a login. |

Page sentences resting on the other rows (Tidewater ranking, nine inlet holes, Joey's hours, Monday After the Masters, Dye Estates gate, Leatherleaf Residents' Club, shuttle, cabana, Members Club designer and simulators, Ocean Club, Bluffs 2001 start, Heron Point closure in 2014, Sandpiper Place's own association) match their sources.

## Sibling check

No value disagrees with the Myrtle Trace or Seasons ledgers or with `neighborhoods-facts.md`. The page's "shares the entrance on Bay Road" for Sandpiper Place rests on rows 149 and 175 (D.R. Horton's directions); row 269 shows only that Sandpiper Place has its own association.

## Not done

Dye Estates rules are version 3.0 of January 2021; the PDF says a newer version may exist on the management company's site. Row 224 does not show that Calais, Palermo and Villa Venezia owners are covered by the "Grande Dunes homeowner" Ocean Club membership; the page claims it only for Grande Dunes in general.
