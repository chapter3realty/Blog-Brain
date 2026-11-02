# Review round 2: what the fixer changed

Spec: specs/little-river.js. Built with mkpage. Never edited the built page.

## Blocking

- **Part 5 (owner HIGH 1).** Heading is now "Far west, at SC 9: a shorter drive to Myrtle Beach". No subdivision names in it. It opens on what the place gives: SC 31 starts at its edge, and from its subdivisions Coastal Grand Mall is about 30 to 35 minutes by car and the airport about 35 to 40, a few minutes sooner than from the old village (36 and 41). Then what it costs you: the farthest part from the water, the waterfront about 12 to 15 minutes back east, the hospital about 9. Prices are in one line. The flood repeat and the "third of a mile" line are gone. New row R2-1 in facts.md (VERIFIED-BY-FIXER): OSRM drives from the centres of Hidden Brooke, Palm Lakes Plantation and Waterfall, saved in data/.../raw/drives-farwest.json by pull_drives_farwest.py; the spec checks every range and that each drive south uses SC 31. Lead: re-check R2-1.

## Nits

- **Flood line in part 3.** Removed "Every home in this part's subdivisions is outside FEMA's high-risk flood zone." Flood now comes up in parts 1 and 2 only (where some homes are in the zone), plus the flood section and FAQ.
- **Lightkeepers card "Prices: One sale".** Now "Prices: $95,000"; "Sales, past year: 1" says it is one sale.
- **Mariner's Pointe tax.** Now: the county values most Mariner's Pointe slips at $38,000 or more, above nearly every price paid there in the past year; at $38,000 a slip pays about $460. The spec checks both (q1 of county values is $38,000; 10 of 11 sales are below it).
- **"The bigger slips at Dock Holidays explain part of their higher prices."** Removed.
- **Method lines.** "About 4 in 10 standard rentals cost less than HUD's figure" removed. Insurance note is now "That insurance range is for a house insured for $350,000. It leaves out wind and hail, which is priced on its own here."
- **R1 rows.** Unchanged; for the lead to re-check with R2-1.

## Other changes to keep the gates green

The new part 5 pushed score P2 (numbers per 100 words) to 3.7. Cut repeated or minor numbers: slip lengths that the table already shows (prose keeps Coquina Harbour's, which has no table row), "three oldest of the seven" swing bridges is now "one of the oldest", and the River Hills course acreage. P2 passes.

## Gates after the fix

- score: 100/100, every rule passes.
- claims-scan, facts-check: no hits on this page.
- house-claims: 0 sentences.
- critic.mjs at 320, 390, 768, 1440: 0 blocking. One warning at 320 only: the schools FAQ answer is a 1,009 px read with no break (not touched this round). At 390 and 1440: 0 warnings.
- build.js check: OK. build.js audit: date mismatches (the lead runs build.js dates); "no boxed CTA mid-read" and "no attributed sentence from a licensed person" warnings, same as before; we write no quote for Tim Nash.
- Shots looked at: wf2/submarkets-little-river/r2/part5-390.png, part5-1440.png, slips-390.png, and the full pages in r2/shots/.
