# Verify: /invest/horry-county-growth-roads-permits/

Independent verifier, 2026-11-09. I re-opened the county's Build Responsibly page, the Flood Resilience Master Plan summary PDF and the stormwater ordinances page. I also found and read council minutes in the November 15, 2022 agenda packet (https://www.horrycountysc.gov/media/p2upe2b1/nov-15-agenda-packet-compressed.pdf). Municode still returns a bot challenge; I did not try to get past it.

Counts: 2 VERIFIED, 2 CORRECTED, 0 STRUCK.

| # | Status | Finding |
|---|---|---|
| 1 | CORRECTED | The three heights match. Two wording limits. (a) The finished-construction elevation certificate is named for AE and VE only. For an A zone without a base flood elevation the page says: "Proper height will be verified by the building inspector. An elevation certificate must be completed by the homeowner or licensed surveyor/engineer." (b) The rule says "All buildings constructed", not only new homes. The A-zone rule is 24 inches above grade, not 3 feet. |
| 2 | VERIFIED | Section 3.1.1 as quoted. The report's opening summary adds: "A number of recommendations within the report were included in the updated flood ordinance adopted by Horry County Council in Summer 2021." |
| 3 | VERIFIED | "Chapter 9 - Flood Damage Prevention and Control" is on the stormwater page, and council minutes use the same title. The chapter text was not read. |
| 4 | CORRECTED | The ordinance number is still not found. The adoption time is found at a county source: summer 2021 (row 2's summary). Also found: "First Reading - Ordinance 132-2022 amending portions of Chapter 9 (Flood Damage Prevention and Control) ... The motion failed six to six." That later amendment did not pass. Use, if wanted: The county council adopted the 3-foot rule in its rewritten flood ordinance in summer 2021 [Horry County Flood Resilience Master Plan summary report, 2022]. |

Struck list: `batches/2026-11-b/facts/invest-horry-county-growth-roads-permits-struck.json`. On today's page it fires on the two 2021 "advanced" and "final vote was scheduled" sentences.

## FIX.md: planned sentences that go past their verified rows

1. Section 2: "In the unincorporated county the rule is 3 feet." Past row 1. 3 feet is the AE and VE rule. The A-zone rule is 24 inches above the ground. Write "In the unincorporated county the rule is 3 feet above the base flood elevation in AE and VE zones."
2. Section 2: "In an A zone with no base flood elevation, the floor must be at least 24 inches above the highest ground next to the house. A finished-construction elevation certificate proves the height." Read in that order, the certificate sentence covers the A zone. The source does not say that. Move the certificate sentence after the AE and VE sentences. For the A zone, write "the building inspector checks the height". "House" should be "building", or say "a new home" once at the start.
3. Section 2: "Inside a city, the city sets the rule." No row in this ledger covers it, and build.js refuses "sets" (SETS_REGEX, owner rule 2026-09-06). Batch 2026-11-a row 13 supports Surfside Beach only. Write "Cities have their own rules; ask the city for a lot inside one", or cite each city's rule.
4. Section 2: "The county raised the freeboard from 1 foot to 3 feet when it rewrote its flood ordinance, now Chapter 9 of the county code." Within rows 2 and 3. "In 2021" may now be added (row 4 as corrected). Still no ordinance number.
5. Figure caption: "the 3 feet the county requires now in AE and VE zones". Fine. Adding "in the unincorporated county" would be more exact.
6. The `sub` and short answer, "the flood rules are the same as before the vote": consistent with row 1 (3 feet in force, read 2026-11-09) and with the 2022 amendment's failure. Fine.
7. Sections 3 to 6 (the story cut, the H1, the leader cards, the cut-off instruction) need no fact.
