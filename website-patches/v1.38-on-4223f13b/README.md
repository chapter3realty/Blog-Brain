# Deploy order, on the live branch at 4223f13b (2026-11-11)

The live branch moved on 2026-11-07 to 11-11: the new AI search, ten new pages (six seller guides, pool homes, houses near the beach, the builders, The Market Common), the address without the street number, the election pages taken down, and deploy.ps1. Everything from v1.33a-c and v1.37 (0004 to 0028), plus round 29, is merged onto it here. This folder replaces v1.33a, v1.33b, v1.33c and the whole v1.37-on-87f7d0f8 folder. Do not apply those.

In C:\c3:

1. `git fetch` and `git reset --hard origin/claude/github-account-check-wutg8b`. The head must be 4223f13b. If it is newer, stop and tell Claude: the patches need merging again.
2. `git am` 0001 to 0008, in number order. Parts 1 to 7 are photos and research data only. Part 8 is the pages, the code and the links.
3. `node build.js check` and `node build.js audit`. The dates are already set (`node build.js dates` was run on the merged copy).
4. Push, then `.\deploy.ps1`.

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

Tested 2026-11-12: all eight apply with `git am` on a fresh checkout of 4223f13b, the tree matches the merged copy exactly, `build.js check` and `audit` pass, idx-test passes, and Blog-Brain `npm test` passes.

Three third-party Google keys in saved property-manager pages (data/2026-11-a/invest-property-management/raw/fees/) are replaced with REDACTED-THIRD-PARTY-KEY.
