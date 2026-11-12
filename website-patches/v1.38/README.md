# v1.38: deploy on the live branch at 1a18ca0c (2026-11-12) or newer

The live branch keeps moving (another chat works on the AI search). These eight patches are rebased on 1a18ca0c ("AI search: wishes are light filters"), which includes everything through 4223f13b. They replace v1.33a-c and the v1.37 folder; do not apply those.

The owner pastes one PowerShell box (in the chat of 2026-11-12). It works in its own folder, C:\c3-v138, never in C:\c3:

1. Pulls Blog-Brain.
2. Resets C:\c3-v138 to the live branch on GitHub, and stops if 1a18ca0c is no longer in its history.
3. `git am -3` 0001 to 0008. If the other chat pushed more work since, the patches go on top of it with a three-way merge; any clash aborts and stops, so nothing is pushed.
4. `node tools/idx-test.mjs`, `node build.js check`, `node build.js audit`.
5. Pushes, then runs `deploy.ps1 -ClonePath C:\c3-v138`, which deploys exactly what is on GitHub.

What part 8 adds on top of v1.37:

- /submarkets/ rewritten: how the nine places differ, a portrait of each that opens with what people love there, inside a city or in the county, winter.
- /why-chapter-3/ rewritten to sell the firm and its tools, as an announcement (owner, 2026-11-12): the live search bar and homes row right above "Meet Chapter3 AI", headlines that are not questions, one line of license facts at the end.
- Homes strips: each card shows only "Listed by <firm>"; the MLS number and CCMLS line stay on the full feed and the listing page.
- /invest/financing-multiple-rentals/ and /invest/cash-to-close/ removed, with 301s.
- Links to the seven taken-down election pages repointed or removed (specs, the guides list, three hand pages).
- The seller hub links the six new seller guides and no longer claims their search words.
- Every page has 6 or more referring pages (`tools/inbound.js --min 6`: 0 below).
- FAQ answers are open in the page as served; the footer's script folds them into tap-to-open questions (STANDARD A13). The live branch's mkpage had put them in closed `<details>`; readers see the same dropdowns either way.
- The footer's brand line says "Rental analysis" instead of "DSCR analysis".

Tested 2026-11-12: all eight apply with `git am -3` on a fresh checkout of 1a18ca0c, the tree matches the merged copy exactly, `build.js check`, `audit` and `preflight` pass, idx-test passes, and Blog-Brain `npm test` passes.

Three third-party Google keys in saved property-manager pages (data/2026-11-a/invest-property-management/raw/fees/) are replaced with REDACTED-THIRD-PARTY-KEY.
