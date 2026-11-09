# Fix: /invest/horry-county-growth-roads-permits/

Edit `specs/horry-county-growth-roads-permits.js` and `data/2026-11-e/horry-county-growth-roads-permits/data.json`, then `node tools/mkpage.js specs/horry-county-growth-roads-permits.js`, `node build.js dates`, `node build.js preflight`. Never hand-edit the page. Do not type a date.

## 1. Data: the freeboard entry (rows 1 to 4)

In `data.json`, replace

`"freeboard": { "row": "F195", "from_ft": 1, "to_ft": 3, "advanced": "June 2021, second reading, unanimous", "final_vote_scheduled": "2021-07-13" }`

with

`"freeboard": { "rows": "batches/2026-11-b/invest-horry-county-growth-roads-permits/facts.md 1-3", "from_ft": 1, "to_ft": 3, "a_zone_in": 24, "chapter": "Chapter 9, Flood Damage Prevention and Control", "source": "https://www.horrycountysc.gov/departments/emergency-management/flooding/build-responsibly/", "read": "2026-11-09" }`

(Use the read date only as data, the way the file's other entries carry theirs.)

Add consts in the spec: `const FLOODRULE = FB.source;` and `const CODE9 = "https://www.horrycountysc.gov/departments/stormwater/engineers/resources-tools/ordinances-manuals-and-reports/";`

## 2. "What are the flood building rules for a new home in Horry County?" (rows 1, 2, 3)

First paragraph, now: "In a flood zone, the lowest floor of a new home must be built above the expected flood level. The extra height is called freeboard. In June 2021 the county council advanced an ordinance raising the freeboard for new homes in flood zones from 1 foot to 3 feet. Its final vote was scheduled for July 13, 2021."

New:

"In a flood zone, the lowest floor of a new home must be built above the expected flood level, called the base flood elevation. The extra height is called freeboard. In the unincorporated county the rule is 3 feet. In an AE zone the lowest floor must be at least 3 feet above the base flood elevation. In a VE zone the bottom of the lowest supporting beam must be. In an A zone with no base flood elevation, the floor must be at least 24 inches above the highest ground next to the house. A finished-construction elevation certificate proves the height. (row 1) The county raised the freeboard from 1 foot to 3 feet when it rewrote its flood ordinance, now Chapter 9 of the county code. (rows 2, 3) Inside a city, the city sets the rule."

Links: "the rule is 3 feet" to FLOODRULE; "Chapter 9 of the county code" to CODE9. No ordinance number and no adoption date (row 4, NOT FOUND).

Figure caption (FREEBOARD_FIG), now: "Left, the old rule of 1 foot. Right, the 3 feet in the ordinance the council advanced in 2021. Our drawing." New: "Left, the old rule of 1 foot. Right, the 3 feet the county requires now in AE and VE zones. Our drawing." The SVG's aria-label: change "the height" clause to match ("the height the county requires now").

Second paragraph, now: "We confirm the current height rule with the county for any lot in a flood zone before you buy, because it changes the cost of the build. ..." New: "We confirm the height rule for the lot's flood zone with the county or the city before you buy, because it changes the cost of the build. ..." (rest unchanged)

In the sources list, replace `{ name: "WMBF, flood rules", href: FLOOD21 }` with `{ name: "Horry County, flood building rules", href: FLOODRULE }`. Drop the FLOOD21 const if nothing else uses it.

The `sub` and short answer say "the flood rules are the same as before the vote". Row 1 is today's rule, and nothing found shows a change since the vote. Keep the sentence.

## 3. The North Carolina story (no new fact)

The story (stories.json `nc-client-build-longs`) says the clients bought land in Longs, built with a builder and BrickWood financing, and expanded a business. It says nothing about impact fees, so tying it to the fee would add a detail (never add a detail). Cut it: delete the `<div class="g7-story">...</div>` after the "What we check" steps (spec line 317). Leave the steps as they are.

## 4. H1 (no fact needed)

`h1`: "Growth, Roads and Permits: What the New Leaders Mean for Building in Horry County" becomes "Did the 2026 election change building rules in Horry County?". `h1em` stays "". The `title` may stay.

## 5. The two leader cards (no fact needed)

The built HTML has both headings ("Annie Andrews (D), U.S. Senate", "Alan Wilson (R), governor") and each card's quoted plan in a `<dl>`. The content is not empty. If the screenshot still shows bare headings, it is a display problem: run `node tools/critic.mjs <base-url> /invest/horry-county-growth-roads-permits/ --widths 390,768,1440` and fix the card CSS. Do not remove the headings while the quotes are in the HTML.

## 6. The cut-off instruction

The triage row ends "Add one line explaining that this". The rest is missing from the triage file. Skip it unless the full text turns up.

## Nothing else changes

Permits, RIDE IV, I-73, impact fees and the price history stay as they are.
