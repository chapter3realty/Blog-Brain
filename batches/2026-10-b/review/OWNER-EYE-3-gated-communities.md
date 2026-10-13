# Owner's eye, round 3: /buyers/gated-communities/

Reviewer: a fresh agent. I did not research, write, edit or review any page in this batch before. Read on 2026-10-13 from `scratchpad/preview/b/gated-communities.html` (built 06:35). My screenshots, at 390 and 1280 px after a slow scroll with a pause on every screen: `scratchpad/oe-b3/gated-communities-390/` (26 screens), `-1280/` (21 screens), the full pages, and every figure full size (`gated-communities-el01` to `el07`). Desktop sheets of the photo problem: `g1280-sheet.png`, `g1280-7.png`, `g1280-14.png`.

**Grade: 8.** One high and one medium change, then it goes to the owner. The high one is a one-line fix.

## What works

- The page now leads with where: the two maps, then "Which gated community fits what you want?", then the gate section. Good news first, as the owner asked.
- The four kinds of gate answer "who is at the gate" as far as the sources allow.
- Litchfield by the Sea now has its own row: "Guard day and night", "On the ocean".
- The beach access sentence now matches best neighborhoods: "a public path to the beach. Some have parking and some do not."
- The DeBordieu caption is now right, and the story no longer opens like the live stories.
- "Does a gate make a neighborhood safer?" answers the cold reader lawfully: what a gate does, that we rate no place as safe or unsafe, and the state's crime data site.

## Round 2 findings: fixed?

| Round 2 item | Now |
|---|---|
| 1. Medium: Litchfield by the Sea has no row, fee or price; no Georgetown County prices | Partly. Litchfield by the Sea has a row, but its fee cell says "Not posted by the association". No price for any of the eight Georgetown County neighborhoods. The ledger rows 52 to 55 are still "unverifiable": the county server still resets every connection (I tried it today). See medium item 2. |
| 2. Medium: the page opened with what a gate cannot do | Fixed. Maps first, then the want cards, then the gate section. |
| 3. Low: beach access definition | Fixed. |
| 4. Low: no "Myrtle Beach" on the first map | Not changed (low item 4). |
| 5. Low: Litchfield by the Sea dot west of US 17 | The dot is now labelled "River Club gate". See low item 5. |
| 6. Low: "Plantation" sentence | Fixed: "A name with "Plantation" is a neighborhood name, not a farm." |
| 7. Low: "Ask us about hours" | Not changed (low item 6). |
| 8. Low: DeBordieu caption | Fixed. |
| 9. Low: story opening | Fixed. "Her Chapter3 agent drives her in by the front entrance." |

## Cold reader's gaps

- "Whether a gate makes me safe": answered lawfully.
- "Who is at the gate": answered where a source says. One place has a guard day and night, seven have a gatehouse, one a call box, one gates only at the back.
- "What I get for the fee": three examples and two yearly totals.
- "A place by the ocean": named (Litchfield by the Sea, DeBordieu Colony), mapped and pictured. But neither has a price (medium item 2).

## Changes I would ask for, most important first

1. **High. The two photos have lost their styling.** The gated spec never adds the photo stylesheet (`ph.css()`); the other four specs do. In this build:
   - On a desktop, the Prestwick gate photo and the DeBordieu photo show at their full file size, 1,200 by 900 pixels. They run past the text column. The Prestwick photo is soft at that size, and its "Gatehouse" and "Gate arm" labels are huge.
   - On every screen, the credit "U.S. government aerial photo" shows as a plain bright-blue browser link under the photo instead of the small white credit on the photo, and the caption runs straight into the next paragraph with no space.
   - The owner would see this on the first look. Wanted: add the photo stylesheet to the page, as `the-farm.js` does (`ph.css()` in the page's CSS), rebuild, and check both photos at 1280 px.

2. **Medium. Eight of the eighteen neighborhoods have no price, including both on the ocean.**
   - The page's job (PLAN.md) is "find gated neighborhoods in their price range". The six near Pawleys Island and Litchfield and the two Wachesaws have no price at all. The line "We send recent sales for these neighborhoods, and for Wachesaw Plantation and Wachesaw East, on request" is honest, but it is the answer the owner does not want: "the answer is just go find out."
   - Litchfield by the Sea's fee cell says "Not posted by the association". The reader still does not know the fee.
   - The cause is a county server that is still down. CRAFT 2: "When the obvious source is closed, find a lawful one." This batch already reads the local MLS (the no-HOA page's list prices, and the MLS rows in `facts/gated-communities-facts.md`).
   - Wanted, in order:
     - Closed sales from the MLS for the last 12 months for these eight places, checked by a verifier. Put each verified typical price in the Pawleys and Wachesaw tables and in the chart.
     - If closed sales are not available, a "Homes for sale now are listed at about" range from the MLS, labelled as list prices, in those two tables only. The chart stays sold prices.
     - The HOA fee for Litchfield by the Sea from listings, if two listings or the association agree.
     - Keep the request line only for a place that still has no verified number.

3. **Low.** The first screen and the short answer say "HOA fee about $90 to $440 a month". No table shows $440. The highest cells are "About $390" (Leatherleaf) and "About $300 to $400" (DeBordieu). The Reserve's listings run to $437, but its cell says "About $320 a month on most homes". Say "about $90 to $400", or show The Reserve as "About $320 to $440".
4. **Low.** The first map still has no "Myrtle Beach" label. Best neighborhoods now has one. Add it here the same way, on the coast between 4 and 8.
5. **Low.** The Pawleys Island map. Dot 4 is "Litchfield by the Sea, River Club gate", west of US 17. The text says the guarded main gate is on US 17 and the community is on the ocean. The long label also crowds dot 3. Wanted: a dot at the main gate on US 17 labelled "Litchfield by the Sea", or keep the River Club dot and add "main gate on US 17" in the caption.
6. **Low.** "Gatehouse: A building at the gate. Ask us about hours." Seven places, and the reader still does not know if anyone is there. If no source says, write "A building at the gate. Hours differ by neighborhood."
7. **Low.** The first tile is "Seaside Plantation, About 2 minutes to the beach", while two places are on the ocean. The cold reader came for "a place by the ocean". Wanted: "On the ocean: Litchfield by the Sea, DeBordieu Colony" as the first tile.
8. **Low.** "Read what a gate does and does not do before you choose one." It talks about the page. Cut it; the "On this page" list links the section.
9. **Low.** The Myrtle Trace row says "(55+, back gate only)" in the name and "Back gate only" in the next cell. Name it "Myrtle Trace (55+)".
10. **Low.** The Joan story and the no-HOA Teresa story now have the same arc (she likes a house in one place, the agent finds it cannot give her what she wants, the agent shows her homes in another place, she makes an offer there). See the batch file. Joan's is the older and clearer of the two; if one changes, change Teresa's.

## Is anything awkward to look at?

Yes, the two photos (high item 1). On a phone they fit the screen, but the blue credit link and the caption touching the next paragraph look broken. On a desktop the Prestwick photo fills most of a screen. Everything else sits one at a time and reads cleanly. The five tables read as cards on a phone.

## Does every picture show what its section is about? Does every label sit where it belongs?

| Picture | Shows | Labels |
|---|---|---|
| Map, North Myrtle Beach to Murrells Inlet | Ten places with a gate | All ten named beside their dots. Conway labelled. No "Myrtle Beach" (low item 4). |
| Map, Pawleys Island | Six places with a gate | All named. Dot 4 at the River Club gate, west of US 17; the long label crowds dot 3 (low item 5). DeBordieu's dot is between US 17 and the ocean, where its entrance is. |
| Prestwick entrance aerial (NOAA) | A small gatehouse between two lanes and a gate arm | "Gatehouse" and "Gate arm", each with a leader to its thing. Correct. Photo styling missing (high item 1). |
| Price chart | Eight typical sold prices | Correct; bars start at zero. |
| DeBordieu aerial (NOAA) | Golf, ponds, homes, the marsh, homes along the beach, the ocean | "DeBordieu Colony" on the homes among the fairways; "Beach" on the sand. Correct. Photo styling missing (high item 1). |

## The story, read once

"Joan wants a 55+ home behind a gate, but the front entrance of Myrtle Trace has no gate, so her agent drives her in, sees it, and shows her Seasons, where she makes her offer." Clear after one read. Six sentences, no number, no "if"; it passes `tools/story-check.js`. It is near the end. It is set in Myrtle Trace, the community of the live Pat story, but its problem (the gate) is new, so it does not copy that story.

## What did it forget that buyers type in?

- "Gated communities Pawleys Island": named, mapped and pictured, but with no price (medium item 2).
- "Gated communities North Myrtle Beach", "Surfside Beach", "Murrells Inlet", "55+", "golf", "homes for sale in gated communities": each answered.

## Fair housing

No sentence describes a place by who lives there. The only "safe" is the reader's own question and the answer "we do not rate any neighborhood as safe or unsafe", with the state's crime data. Seasons is said to have a gate at its main entrance, which matches the verified rows.
