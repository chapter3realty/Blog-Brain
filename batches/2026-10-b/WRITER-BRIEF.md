# Writer brief: batch 2026-10-b

The owner, 2026-10-13: "use all of your skills to write these blogs so perfectly for the audience they are intended for and so well designed that I dont need to change anything in the pages at all."

Read `CRAFT.md` in full first, then `voice/VERDICTS.md`, `voice/RULES.md` "Read this first", `reports/Page shapes by kind of page.md` (the section for your page's kind), `prompts/writer.md`, and the 2026-10-a specs as a model of the build mechanics (not of the shape). The skill decides the shape. This brief gives only the decisions already made and the facts that tie the five pages together.

## What the owner has said about pages, in his words

- Simple enough for anyone. Few, round numbers. The date once, in the byline.
- Lead with what the reader came for. Good news first, then the drawbacks, kindly.
- Say what a fact means for the reader, not what it is.
- Pictures and icons wherever they help. Photos must show their topic. No photo at the top.
- Every question the page raises is answered on the page.
- No industry words; speak as the expert; sources in the sources line.
- He praised: what a normal week is like, the clubs and activities, icon cards with words, our own small maps, real local stories.

## Facts

- Use only rows the verifier marked verified, in the verifier's wording limits, said in the page's own voice (never "listings show", never "the HOA says").
- One fact, one value across all five pages and the site. When two ledgers give different values for the same thing, use the one the verifier settled and say nothing else.
- Prices: say what the number is in plain words. "Homes here usually sell for about $X" for a recorded-sale median. "A typical home in X is worth about $Y" for Zillow's value. Never mix the two in one comparison. Round as CRAFT 5 says.
- Never a rate or payment. Never a conclusion about a named HOA, builder or community.

## Fair housing (owner asked, 2026-10-12)

Describe places by what they have: minutes to things, fees, prices, amenities, rules. Never by who lives there. Never "family-friendly", "for families", "safe", "quiet", crime, "young", "retirees", "active adults". School names only as a plain fact from the district, with a link to the district's zone lookup, and no ratings. `tools/compare.js` refuses these words in its labels; the scorer's claims scan checks the copy.

## Decisions already made

- **Homes with no HOA, leased land.** Homes in campground communities on leased land (Ocean Lakes and others) show no HOA fee but pay a yearly land lease. Leave them out of the counts, and say so in one plain line so a reader is not surprised.
- **The offer on every page** goes through the contact form ("Tell us your price range and we will send the list"). The site has no listing search to link.
- **Gated communities.** Name a community as gated only where the verifier's table says so, in its safe wording. Partly gated places (Barefoot Resort, Grande Dunes) say which parts. Never what a gate does for safety. What a gate means for an owner: private roads the HOA maintains, guests registered, a code or a guard where a source says so.
- **The Farm, the old bombing range.** Wait for the verifier's finding. If an official current source states the status, the page states it in one plain sentence near the end, with what an agent checks for a lot. If not, the page leaves it out and the ledger records why.
- **Small samples.** A price from fewer than 20 sales is said as a range or "about", never with false precision, and only where the verifier allows.
- **The neighborhoods page** sorts by what the reader wants nearby (walk or bike to the beach, a short drive for less money, pools and amenities, golf, no or low HOA fee, new homes, near a hospital, a lower price). It links to the 55+ pages, The Farm, the gated and no-HOA pages, and the town pages.

## Pictures

- Our own maps (`tools/page-kit.js` placesMap for many places, maps() for one community). Look at every map full size. On a county-wide map, check that every town name sits by its own town (the map agent saw "Surfside Beach" land west of the river once).
- Aerials from U.S. government imagery: NOAA 2026 where flown (it covers the south part of The Farm), USDA NAIP otherwise, with labels placed from county data (`rules/images.md`).
- Commons photos only of the place named, with a license record (`tools/photos.js`).
- One picture per sentence it supports. Never stacked.

## Build

Work in your own website worktree, never a shared one (lesson L63): clone `/tmp/claude-0/-home-user-Blog-Brain/8900fb2a-1006-5ba7-88a3-019838e5433c/scratchpad/ship` (the live branch at 39036014, which already has the batch 2026-10-a tools and patches) to your own folder. Specs go in `batches/2026-10-b/specs/`. Use `tools/page-kit.js` and `tools/compare.js`.

Gates for each page: mkpage, `build.js rehash/check/audit` (zero blocking), `SCORE_TODAY=2026-10-13 node tools/score.js --only <url>` at 100 with no blocker, `claims-scan.js` and `facts-check.js` at 0 for the page, `image-meta.js`, `photos.js check`, and `npm test`.

Never grade your own page. Report what you built; a fresh reviewer grades it.

## Added after verification

- **Affordable places, scope.** The page covers towns and areas in Horry County and the Georgetown County coast, and says so in one line. Green Sea is added (rows from 99). Nichols and Hemingway are outside the two counties and are left out on purpose. Read the verifier's twelve notes at the top of the ledger before writing: ZIP areas are named as areas, not towns; deed medians are "recorded sales"; "hospital", never "emergency room"; the tax figures are for a home you live in; Georgetown's tax is not compared with the 2026 Horry bills; Zillow's percentile range is never stated.
