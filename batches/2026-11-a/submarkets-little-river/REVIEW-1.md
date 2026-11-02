# Review round 1: /submarkets/little-river/

Fixer, 2026-11-02. All changes are in `specs/little-river.js` (rebuilt with `node tools/mkpage.js`), the page's own data folder and image folder. New facts are ledger rows R1-1 to R1-7 in `facts.md`, marked VERIFIED-BY-FIXER for the lead to re-check.

## Gates after the fix

- score.js 100/100 (SCORE_TODAY=2026-11-02)
- claims-scan: 0 findings on this page; facts-check: 0; house-claims: 0
- repeat-check --strict and structure-check --strict: pass; struck-check: no struck wording
- image-meta: pass (was failing on the two map SVGs: alt over 250 characters, no ImageObject; and on the share crops, which had no embedded metadata)
- photos.js check: all records pass
- critic.mjs at 320, 390, 768, 1024, 1440: 0 blocking, 1 warning (read.wall, the FAQ at 320)
- build.js check: OK. build.js audit: only the date lines (the lead's `build.js dates` run) and two `~` notes (no boxed mid-page CTA; no attributed sentence from Tim or Devin, which we may not write)
- Shots: `wf2/submarkets-little-river/fixr1/shots/` and element crops `fixr1/els-*.png`

## Critic

1. **Hero tile spill at 320.** Fixed. Three tiles instead of four (the flood tile is gone, owner HIGH 2). "Deeded slips: About 220". A rule under 360 px makes the tile text smaller. Checked at 320: no spill.
2. **Label on credit (both aerials).** Fixed. New render `data/.../aerial_render_r1.py` cuts each aerial to 1200x900 and asserts no label box sits in the bottom-right credit corner. The waterway label moved left on the waterfront view and up onto the water on the harbours view.
3. **Harbours aerial cropped above 700 px.** Fixed both ways: the file is now a 4:3 landscape cut with US 17 and every label inside, and the page shows the image at its own aspect (`aspect-ratio:auto`, scoped to this page). The US 17 label now sits on a point of the TIGER centreline segment in the frame.
4. **Subdivision chart caption.** Fixed. It now shows the ten largest subdivisions by homes among those with 10 or more resales, and the caption says so. The list was wrong too: Waterside Village (191 homes) was in and Hidden Lakes Village (282) was out; a `must()` now checks the ten. The marina condos (Lightkeepers 252, Mariner's Pointe 145) are 11th and below; they are covered in the water section.
5. **Aerial captions need the year.** Fixed: "(NAIP aerial, 2023)" from each record's `taken` date. The credits list keeps the record caption with no year (photos.js refuses a dated credit).

Nits taken: slip table `num` columns dropped (no step at 768) and header "Sales, past year"; "the largest subdivision in this part"; Hazel sentence opens the paragraph ("this line" gone); part 1 heading now "all three marinas within a mile"; FAQ leads with Coastal Grand (36 minutes) and names Barefoot Landing as North Myrtle Beach; h3 and FAQ headings balance their wrap; money cells do not wrap from 700 px; parts map has no "Old village" label on the dots, and labels US 17, SC 9 and the hospital (H); living-here wall broken by moving the drive map up. Not taken: the NAIP seam (no other 2023 flight covers the basin; NOAA imagery not tried this round, noted in the photo record); the in-photo credit backing is shared photos.js style (not this page).

## Reader (boater from Ohio)

1. **Can I buy a slip without living there?** Answered from the deeds (row R1-3): every slip that changed hands in the year sold on its own, without a condo. Who may own one depends on the marina's recorded papers; the page says we read them. No HOA document was public, so the page does not claim the rule.
2. **What does a slip cost each year?** Added: a slip the county values at $38,000 (the Mariner's Pointe middle) pays about $460 a year in property tax at 6 percent (row R1-4). The association fee is not public; the page says it comes on top and we read its budget.
3. **Will my boat fit?** Added our own measure from the county's slip parcel outlines (row R1-2): most Mariner's Pointe slips about 30 to 35 feet, Coquina 30 to 45, Lightkeepers 45 to 65, Dock Holidays 40 to 50. The table has a "Most slips" column. The bigger Dock Holidays slips explain part of their price. Depth is in no public record; we check it at low tide. Coquina's no-sales card is now one sentence.
4. **What does insurance cost?** Added the state's own sample rates (row R1-5, SC Department of Insurance price comparison tool): the middle half of 23 insurers run about $1,100 to $2,400 a year for a 10-year-old frame house insured for $350,000 in 29566, without wind and hail. The yearly cost table now has an insurance row and a total (about $3,000 to $4,300 before wind cover). The page says wind and hail is priced on its own there and that we get that quote.

## Owner's eye

1. **Parts are price lists (HIGH).** Rewritten. Each part leads with what a day there gives you, then one price sentence: part 1 the waterfront, restaurants and marinas, the golf at Hidden Lakes Village and Eastport (row R1-7); part 2 Heather Glen, Calabash and Vereen Gardens; part 3 the River Hills golf course, quarter-acre lots, the river ramp, dry ground; part 4 the hospital, Campbell Landing, Carolina Yacht Landing on the water, then the highest prices; part 5 Hidden Brooke, Palm Lakes, Waterfall. Headings no longer lead with price or the freeway. "Among the lowest prices", Gardens at Cypress Bay, North Pointe and the "most manufactured homes" lines are gone.
2. **Flood fixation (HIGH).** Flood is out of the hero tiles, the short answer and every part chip (the chip rows are gone). "96 in 100" is said once in the flood section and once in the FAQ; "close to half by the water" once in the flood section. Parts mention flood only where it is the trade-off (part 1, Windjammer in part 2) or the benefit (part 3, part 5 by reference).
3. **Almost no life (HIGH).** Added the Blue Crab Festival (row R1-6, from the festival's own site, which the chamber runs; the chamber's site renders only in a browser and now resolves), the golf courses from county parcels (row R1-7), a FAQ "What is there to do in Little River, SC?", and the festival and golf in the pros. No attendance figure is published, so the page gives none (owner asked for it, 2026-10-21). Fishing charters, casino boat and dock restaurants by name are still not verified (no primary source).
4. **Largest contradiction (MEDIUM).** Fixed: "the largest subdivision in this part".
5. **Technical asides (MEDIUM).** Cut: the HUD 40th-percentile method (now one line, "About 4 in 10 standard rentals cost less than HUD's figure"), the census designated place line, the rented-lots and Census mobile-home lines, "These figures take the county's value as the price", and "The county's records do not give a slip's length" (now we give the length).
6. **Too many exact numbers (MEDIUM).** Cut: "$368 per $100,000 plus an $89.40 fee", "217-foot span", the bridge hours to the minute (now "at weekday rush hours it opens only on the hour and half hour"), "1.5 percent" (now "fewer than 2 in every 100"), the FAQ's "four in every hundred". "$357,000" is now in the text twice (short answer, home prices) plus the tile and the chart; the cost table, water section, worked example and pros say "a typical resold house".
7. **Personified law (MEDIUM).** Fixed: "A lender must require flood insurance when the building is in FEMA's high-risk zone, and can ask for it anywhere."
8. **Field-list cards and empty chips (MEDIUM).** Chip rows removed. The Coquina "No sales" card is one sentence; the Lightkeepers card shows the sale. The slip table stays a table (the reader compares three marinas); on a phone it is three cards with real values.
9. **Same closing device (MEDIUM).** No part ends on "The trade-off is". Each part's last paragraph differs in shape.
10. **Weaker than Conway on photos and strips (MEDIUM).** Not fixable in this spec: there are no CRM slugs for the five parts (NEEDS 10), and Commons still refuses this session (HTTP 429). `shot-list.md` asks the photo partner for the Mineola Avenue waterfront, the swing bridge, the Mariner's Pointe basin and the Coquina basin, and now the festival and the River Hills course; the lead sends it from the owner's Gmail (no mail tool here).
11. **Short answer (LOW to MEDIUM).** Rewritten: it leads with the water and the year-round town, says which part suits which buyer (old village for the boat; north-west for golf and dry ground; west for the hospital and the highest-priced neighborhoods), then one price.
12. **Unclear lines (LOW).** "this line" and "across the line" gone. The safety FAQ no longer sends the reader to the FBI and SLED: "We do not rate any place as safe or unsafe. Reported crime is published by police agency, and we pull the figures for the area around any house you ask about." The lead may want one wording for every sibling.

Owner nits: the water section no longer opens with the H1 subline's fact; "land buying planned to start in 2026" and "construction in 2028" are gone; the top has three tiles instead of four. One label per part on the map (Heather Glen, Lafayette Park) is not done: the numbered markers and the list carry it, and more labels collided with the dots at 390.

## Where I think a finding is wrong, or partly

- None of the blocking findings. One correction the reviewers did not raise: two land-use-306 parcels in the ZIP are not slips (row R1-1), so the page now says "about 220" slips (Coquina "about 80") instead of 223 and 81. "Two of every three" still holds (221 of 320).

## Files

- Spec: `web2/specs/little-river.js`
- Data: `web2/data/2026-11-a/submarkets-little-river/` new `aerial_render_r1.py`, `aerial-labels-r1.json`, `slip_sizes.py`, `slip-sizes.json`, `golf-parcels.json`, `raw/scdoi-home-sample-rates-29566.txt`, `raw/bluecrabfestival-home.txt`, `raw/bluecrabfestival-faqs.txt`; `photos.json` updated (1200x900 frame, method, label sources).
- Images: both aerials re-cut (1200w, 600w), share crops re-made with metadata.
