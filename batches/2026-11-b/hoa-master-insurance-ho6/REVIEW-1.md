# Review 1 and fix round 1: /hoa/master-insurance-ho6/

Reviewer: pass=false, score 7.5. Two blocking items, nine nits. Fixed in website `specs/master-insurance-ho6.js`, rebuilt with `node tools/mkpage.js specs/master-insurance-ho6.js`. The spec before the fix is at scratchpad `ho6-spec-before-fix1.js`.

## Declined or not fixable here

- **Edge homes strip title (lead item).** Not fixable on this page: the feed lives in `idx-lib/feeds.js`, which this round may not edit. BUILD.md "For the lead" item 1 stands: retitle HOA_INSURED to "Oceanfront condos with the building's insurance already in the fee" and narrow it to `type=condo&has=county_horry,oceanfront_building,hoa_includes_insurance` (888 listings, ledger row 26). In the preview (`tools/preview.mjs`, fixture listings) the strip still reads "Condos for sale on the Grand Strand" and shows only a "See all homes" card. That means this URL falls back to the default feed in the preview. Whether it fills on the live edge cannot be checked from here (we never deploy). The lead should check it on the live site after the feed change lands.
- **Chart text at 320 px.** Moot: the chart is cut (see the repetition nit below).

## What changed

Blocking:
1. **Papers list at two-column widths.** Each row's second half (text and link) is now one `<span>`, in both bold-line lists (`PAPERS` and `RULES_LIST`). At 1440 the rows "The budget and the reserves" and "The statement of what the seller owes" read as one sentence each, with the link inline. Checked in the 1440 shot.
2. **Flood section answers "Does my HO-6 cover flood?" first.** It now opens: "Your HO-6 most likely does not cover flood. Most homeowners insurance does not cover flood damage. Flood cover is its own policy." New ledger row 29 (FEMA FloodSmart, "Most homeowners insurance does not cover flood damage", VERIFIED-BY-FIXER, raw file `data/2026-11-b/hoa-master-insurance-ho6/raw/floodsmart-home.html` and `.txt`). FEMA says "most", so the page says "most likely". FEMA FloodSmart is added to the sources line.
   - Then: the building's flood policy does not insure your belongings (row 14); a unit flood policy can, if you buy contents cover (new row 30, 44 CFR Part 61 App. A(1) Coverage B, VERIFIED-BY-FIXER); it can also pay your share of a flood assessment (row 16).
   - Then the decision line, set off with a brass rule: "When to add your own flood policy: if a flood would leave you replacing what is in the unit. A unit flood policy here cost a middle of about $495 a year." (row 18). This answers the meta description's "when to add flood cover".
   - The program counts come after, under a new H3 "The building's flood policy", as a scannable bold-line list: 701 of 702, 276 of 1,172, $1,250 on 832 and $25,000 on 105, about $405 a unit in the fee, contents on 151 of 1,172. The later deductible sentence now says "That deductible is usually small, as the list above shows" instead of repeating the counts.
   - New FAQ: "Does my HO-6 cover flood?" (rows 29, 14, 30, 18).

Nits taken:
- **"Check it yourself" lines.** "Read the limit on your own policy." is cut. "If your limit is smaller, ask your insurance agent to quote a higher one." is now "If the limit is smaller, we ask for a quote with a higher one." "Ask the agent in writing ..." is now "We also ask the insurance agent, in writing, whether the policy pays an assessment that comes from the association's storm deductible." Section 2's "so ask what it means for your building" is now "We go by the building's papers, not the label."
- **Repetition, sections 1 and 2.** The chart "The further right, the more the building's policy insures" is cut, with its code and CSS. The three bullets stay: they carry the words people search (bare walls, single entity, all in) and IRMI's examples (sinks, cabinets, flooring).
- **Hero tile.** "Your share, 5% storm deductible" is now "Example share, 5% storm deductible".
- **Hero tiles at 390.** On a phone all three tiles now stack label over value, so they line up.
- **On-this-page at 1440.** The links use `text-wrap:balance`; the FAQ link now reads "Master policy / and HO-6 FAQ", not a lone "FAQ".
- **One read.** Now: "There are three kinds of master policy. Two of them cover some of the inside of your unit."
- **29-word sentence.** Split into three: "The federal flood program sells two flood policies for a condo. One goes to the association for the building, called an RCBAP. The other goes to an owner for a unit."
- **Walls of text at 320.** The flood one is broken up by the decision line, the H3 and the list. The one under "How do I find out which kind my building has?" is shorter: two papers in one sentence, then "With bare walls, a new kitchen or a tiled floor is yours to insure."

## Gates after the fix

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /hoa/master-insurance-ho6/` | 100/100 (SEO 100, AEO 100, Human 100, Trust 100), 1,912 words. The first rebuild lost 25 points on P9 for "FEMA says" in the body; it now reads as a plain statement and the source is in the sources line. |
| `node tools/claims-scan.js` | 0 findings |
| `node tools/facts-check.js` | 0 on this page (the 4 wrong sentences elsewhere are pre-existing) |
| `node tools/house-claims.js` | 0 sentences |
| `node tools/struck-check.js ... --strict` | no struck wording |
| `node tools/repeat-check.js --strict` | passes |
| `node tools/structure-check.js --strict` | passes |
| `node tools/critic.mjs http://localhost:8873 ... --widths 320,390,1024,1440` | 0 blocking, 0 warning at all four widths (the preview is `tools/preview.mjs` on port 8873) |
| `node build.js check` | OK |
| `node build.js audit` | this page: only the mkpage date lines and the usual "~" note on a named person's quote (we never write one) |
| `node tools/inbound.js --only` | 12 referring pages |
| Sentence length, em dashes, "Here is", "So" openers in `<main>` prose | none |

Shots: scratchpad `rb1/hoa-master-insurance-ho6/fix1/shots/` (320, 390, 1024, 1440) and crops `fix1/v1440-papers.png`, `v1440-flood.png`, `v390-flood1.png`, `v390-hero.png`, `v1440-nav.png`. Critic JSON: `fix1/critic.json`.

## For the lead

1. The strip title and feed (above). It is the page's main selling point to the owner, and the edge decides it.
2. Ledger rows 29 and 30 are VERIFIED-BY-FIXER. A second check by an agent that did not add them would close them.
