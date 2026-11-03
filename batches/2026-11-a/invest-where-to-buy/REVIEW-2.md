# Review round 2: /invest/where-to-buy/ (fixes, 2026-11-03)

Re-check: pass false, 7. Every change is in `specs/where-to-buy.js`. Rebuilt with `node tools/mkpage.js specs/where-to-buy.js`. No new fact and no new ledger row this round.

## Gates after the fixes

- score.js (SCORE_TODAY=2026-11-03): 100/100 (SEO, AEO, Human, Trust 100). Numbers per 100 words 3.4 (84 in 2,488 words; was 3.5).
- critic.mjs at 320, 390, 768, 1024, 1440: 0 blocking. One warning at 320 and 390: read.wall on the last FAQ answer, the sources line and the photo credits (same false hit as rounds 1 and 2).
- claims-scan, facts-check: no hit on this page. house-claims: 0.
- build.js check: OK (it notes the STR file is 80 days old; it blocks the build at 90). build.js audit: only the two date lines, which `node build.js dates` sets. The two long sentences it found after my edits are split.
- repeat-check --strict: fails only on the page's subject words in over 60 percent of entries (NEEDS 7). No entry under 60 words.
- struck-check: fires on "$28,700" (row 26) and "16,300" (row 29), on purpose until the lead rules (below).
- Shots: `wf2/invest-where-to-buy/fix2/shots/`, `fix2-top.png` (390, first 2,600 px), `fix2-map.png`, `fix2-1440.png`, `fix2-mid.png`.

## Blocking

| Finding | What I did |
|---|---|
| Nightly income (rows 26F, 29F VERIFIED-BY-FIXER against the verifier's STRUCK row 26) | Not mine to close: it needs the lead's ruling and an agent that did not research the rows. Left on the page under the owner's rule of 2026-10-26 (VERDICTS: "A page for a buyer who may rent gives what a rental takes in, from data/str-market.json"). New: one switch at the top of the nightly block, `const NIGHTLY = true;`. Set it to false and every nightly dollar figure leaves the page: the short answer's range, the six "took in" sentences, the condo card, the worked-example H2 and its two paragraphs (they switch to a Longs-only example), the FAQ line, the AirROI source and its note. I built it both ways: with false, the page has no "$28,700", "16,300", "AirROI", "took in" or "$20,000 to". For the verifier: the rows read `data/str-market.json` (dataAsOf 2026-08-08); AirROI's market pages now show figures about 20 percent higher, so the best order is `node build.js strdata` (NEEDS 1, 10), rebuild this spec (its checks stop the build if the order of the areas or the example's conclusion flips), then verify the new figures against the AirROI pages. For the lead's ruling: in this run the owner said "our short term rental tool sucks so im hesitant to include it yet". That is about the tool, not this file, but it is a reason to read the vendor figures with care. |
| Insurance (row 35) and the Myrtle Beach zone shading (row 36), VERIFIED-BY-FIXER | Also need an independent agent; I am not one. Unchanged on the page. For the verifier: row 35 re-runs with `data/2026-11-a/invest-where-to-buy/nfip_r1.py` (one OpenFEMA NfipPolicies v3 query per ZIP, policies effective Sep 2025 to Aug 2026, SC, occupancy 1 or 11, policyCost > 0) and compares the medians in `nfip-houses.json`. Row 36 is a check that the "str" class in `data/2026-11-a/submarkets-myrtle-beach/map-str-zones.geojson` is the polygon set that page's verified row 8 describes. If row 35 is struck, cut the flood-policy paragraph in "What does a rental leave" (the `fl()` calls); if row 36 is struck, drop `zones` from the map and the "Myrtle Beach's rental zones" legend item. |
| Long preamble (entry 1's H2 at 3,186 px at 390) | Entry 1's H2 is now at 2,268 px (2.7 phone screens; it was 3.8). The "Where are nightly rentals allowed?" section is gone. The map is the hero picture, right under the H1, so it is on the first phone screen. Over it, one answer line: "For a nightly rental, buy at the beach, where the zoning on this map allows it. For a yearly lease, buy inland." The nightly-rules paragraph is folded into the legend and the caption ("Where zoning allows nightly rentals. A subdivision's recorded rules can still bar them."); each entry gives its own rule. The legend is four short labels in one wrapping row; the key is one wrapping line of numbered names (153 px, was 312), not a two-column list; the map is shorter (area-map.js `maxRatio: 0.85`). On wide screens, the legend and key sit beside the map. The three hero tiles are gone: they repeated the short answer. Badge 2 moved below the "Atlantic Ocean" label, which it covered at the new frame. The rest is the shared homes strip (about 500 px with its margins, NEEDS 11): without it, entry 1 would be 2.1 screens down. |
| Too many numbers per place | Each entry now carries two to five figures, the price line included: North Myrtle Beach 4, Surfside Beach 5, Garden City 5, Murrells Inlet 4, Pawleys 5, Myrtle Beach 4, Longs 4, Socastee 3, Conway 4, Little River 5, Carolina Forest 3 (rule limits such as "30 days" counted). Cut: North Myrtle Beach's tax-class share, out-of-state bills and flood share; Surfside's rent share and builder count; Garden City's rent share; Murrells Inlet's tax comparison ($1,512 against $1,244), out-of-state bills and "one parking space per bedroom" as a figure; Pawleys' 3 percent tax and "nearly a third"; Myrtle Beach's "96 in 100" and the house count, and its house price (houses there are mostly zoned against nightly stays, so the box gives the condo price only); Longs' flood share; Socastee's rent share and builder sentence; Conway's rent share and tax figure (now "the highest per dollar of the eleven areas", checked by the spec); Little River's tax-class share; Carolina Forest's "3 in 10 rented" and its HOA fee. The FAQ tax answer keeps one figure. |
| Phrase class | "The cost is flood." cut; the sentence now reads "Houses here cost less than in the other five beach areas. FEMA puts 39 percent of homes here in its high-risk flood zone ... so we price the flood insurance for each house." "A rental of one to three months falls between the lines:" is now "For a rental of one to three months, each area has its own rule:". Also "the lodging tax has its own 90-day line" is now "applies to stays of less than 90 days in a row" (row 1). |
| Tax-class reading in North Myrtle Beach | "Many owners compete for those guests." and the 71 percent sentence are both cut. The paragraph now rests on verified row 14: "Most homes here are condos, and four in five condos for sale are listed as open to nightly guests." The 6 percent class no longer appears in any entry; it is gone from Little River too. |

## Nits

| Nit | What I did |
|---|---|
| "The rent is HUD's." before the explanation | Longs now opens: "The federal housing agency, HUD, publishes a rent for a standard 3-bedroom in each ZIP code, counting the utilities a tenant pays. In Longs it is $2,270 a month. A year of that rent comes to about 9.1 percent ..." |
| Two links send the reader elsewhere | "Our Murrells Inlet guide covers the Horry County side too." is cut; the guide is linked on the place name, as in the other entries. The str-rules link is cut; the sentence ends "No state law bans nightly rentals." |
| "resort residential district" | Now "the county's resort zone" (entries 4 and 5, the month list). I left out "near the beach": no row says where the district lies (facts.md gap list). |
| Sources line code names | Left, as the re-check allows in citations. |
| Updated line and dateModified | The lead's `node build.js dates`. |
| read.wall warning | Same false hit (FAQ, sources, credits). Left. |

## Other changes

- Socastee and Carolina Forest each gained one rule sentence from row 8 (outside the towns, zoning puts no limit; a subdivision's recorded rules decide, and we read them), so neither entry is under 60 words.
- Murrells Inlet: "About three in four homes here are their owner's main home" (row 23 label); house-claims flagged the unscoped "Most homes".
- H2 of Socastee: "houses priced like Longs, with tenants all year" (the old H2 typed "$300,000").
- New `must()` check: every town's rental-rate mills are above the 201.0 outside the towns (the FAQ says "Inside the towns it is higher").

## For the lead

1. Rule on rows 26F and 29F (keep under the owner's rule, or set `NIGHTLY = false`), after `node build.js strdata` and an independent check.
2. Independent check of rows 35 and 36 (steps above).
3. `node build.js dates`.
