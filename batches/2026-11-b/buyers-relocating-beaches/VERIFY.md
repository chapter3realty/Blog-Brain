# VERIFY: /buyers/relocating/beaches/

Independent verifier, 2026-11-09. I opened the Town of Pawleys Island Beach Rules page and its Beach Access & Parking page, and read the two entries in stories/stories.json. library.municode.com does not resolve from this session (and returns a Cloudflare challenge to curl), so the town code was not read.

Counts: 6 VERIFIED, 0 CORRECTED, 1 STRUCK.

| # | Status | What I found |
|---|---|---|
| 1 | VERIFIED | The rules page lists dogs, overnight property, holes, motor vehicles, camping, fireworks, vending and litter. It says nothing on umbrellas, tents, canopies or shade. A second town page, Beach Access & Parking (https://www.townofpawleysisland.com/beach-access-parking/), says: "TENTS & CHAIRS - Please remove your tents, tent frames & beach chairs when you leave the beach for the day to deter vandalism." So tents are expected on the beach. The code itself was not read, and a Post and Courier report (seen only in a search summary, not opened) says the town banned four-sided enclosed tents. Every Pawleys shade cell must say what the town's pages list, never "no limit". |
| 2 | VERIFIED | Quote matches word for word. |
| 3 | VERIFIED | Quote matches, including the exception for emergency vehicles and those the Chief of Police and Town Administrator approve. |
| 4 | STRUCK | Code not readable here. Do not print the four-sided tent claim, and do not print that the code has no tent rule. |
| 5 | VERIFIED | `garden-city-winter-cart`: status usable-with-limits; "Treat it as an illustration, not a client story". The second-person scene is allowed. The closing sentence about owners and visitors goes. |
| 6 | VERIFIED | `beach-character` records only "Devin's dog passage", not what it said. The sentence is not in the bank: cut it. (It would also point to a team member the site must not name.) |
| 7 | VERIFIED | `beach-character` summary matches. Its limit also says "Check the parking price before stating it": the "about $10 all-day parking" was not re-checked in this pass. |

## FIX.md: planned sentences that go beyond their verified rows

1. Step 2, the Pawleys row, "Rest of the year: Same rule year round". Row 1 covers only what the rules page lists, and the code was not read. Write both cells the same way: "No umbrella or tent limit on the town's beach rules page. Nothing may be left on the beach overnight." Optional, from the town's own page: "The town asks that tents, tent frames and chairs come off the beach when you leave for the day."
2. Step 2, the Surfside sentence: "Surfside Beach is the one town on this list whose rules say outright that a family canopy is allowed on a July afternoon." It rests on the Surfside row and on what the other towns' rules say, none of which is in this ledger. Check those rows before using "the one town".
3. Step 2, "the count 'Same ocean, five sets of rules' is true for both tables": the dog table was not checked in this pass.
4. Steps 3 and 4 are within rows 1, 2, 5 and 6.

Struck list: `batches/2026-11-b/facts/buyers-relocating-beaches-struck.json`. On the live page it finds the two story sentences.
