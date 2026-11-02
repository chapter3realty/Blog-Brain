# Review round 2: /buyers/retirees/ (fix)

Re-check verdict: pass=false, score 0.86. All changes are in `specs/retirees.js`; the page was rebuilt with `node tools/mkpage.js specs/retirees.js`.

## Blocking

1. **[owner 11] McLeod line does not say which community it is near.** Fixed with a new row. The line now reads: "McLeod Health has cut the ribbon on a new 48-bed hospital in Carolina Forest and says it opens this fall. It is about 6 minutes by car from Del Webb at Grande Dunes, the same as Grand Strand Medical Center." Ledger row 72, VERIFIED-BY-FIXER: the campus is "near the intersection of International Drive and Highway 31" (My Horry News, ribbon-cutting article; WBTW 2024); the OSM hospital point at 101 McLeod Health Blvd and the NPI address 115 McLeod Health Blvd both give 6 minutes from Grande Dunes by OSRM, the row 35 method (`data/2026-11-a/buyers-retirees/drives-mcleod-carolina-forest.json`). The other three are 17 to 32 minutes. The sentence defining Carolina Forest is cut; the drive now places the hospital. The healthcare pointer line is cut (nit).
2. **[owner 4 and 5] Bare "Yes" and the modest-income point four times.**
   - Short answer, first paragraph, now: "Taxes here are lowest on a home you live in full time. Outside the city limits, a $400,000 house you live in is taxed about $1,290 a year at 65, with the $50,000 exemption. A retired couple on Social Security and a modest pension can owe no South Carolina income tax."
   - The good-place lead paragraph ("Yes, if it will be your full-time home ...") is cut. The section now opens with the Horry County age fact, moved word for word from the FAQ (row 70), and one line that leads into the cards: "Whether it suits you depends most on how you will use the home." Without a lead, the scorer's A5 flagged an empty section opening.
   - The income tax section's "Under the 2026 rules, many retirees with modest incomes owe little or no state income tax." is cut. The table and the calculator show it.
   - The point now appears twice: the short answer and card 3, which links to the calculator.

## Nits

- **Story limit, ny-client-tax-drop.** Decided by the rules, not left open: voice/RULES.md SHAPE-6 says "A required disclaimer on one household's numbers ('his numbers, not a promise') stays." The story now ends: "Those are one household's numbers, not a promise."
- **Grande Dunes $2,700 scope and $665,000 twice.** The drives paragraph now ends "It is inside the Myrtle Beach city limits." The price paragraph says: "Houses here usually sell for about $665,000, and villas for about $430,000. With the city's tax added, a house at that price that is your home pays about $2,700 a year, before the $50,000 exemption at 65." GD row 105 excludes the exemption, so the scope is "before". The figure with the exemption is not computed: GD marks the exemption inside the city as not verified. The fee, share and age rules are a separate paragraph, which keeps every paragraph under 80 words. Row 73 records the scope.
- **Star ratings printed (row 62 against PLAN row 37).** Unchanged. Still for the lead to confirm. No owner rule against printing a federal rating was found.
- **Grammar.** Now "A married couple, both 65 or older, does not have to file ...". The line moved to the FAQ as "Does a retired couple have to file a South Carolina tax return?". The FAQ keeps 4 entries (A7), and the Act 110 link now ends the income tax section's first paragraph.
- **Owner 13, screen count.** Agreed: the first community starts at 4,412 px at 390 x 844, about 5 screens. Not changed this round.
- **critic read.wall at 390.** Still 1 warning, on the FAQ answers and the shared sources and credits block.
- **Pointer lines.** Cut "Our weather page has more." and "Our healthcare page has more on care here."

## Gates after the rebuild

- score.js: 99/100 (SEO 100, AEO 100, Human 97, Trust 100). The only rule short is P2, numbers per 100 words, 5.6. It was 5.7 in round 1.
- claims-scan: 0 findings on /buyers/retirees/. facts-check: 0 wrong or stale on the page. house-claims: 0.
- critic.mjs on port 8780 at 390, 768, 1024 and 1440: 0 blocking, 1 warning (the read.wall above). No horizontal scroll at 390.
- build.js check: OK. build.js audit, this page:
  - the date mismatch, which the lead's `build.js dates` sets;
  - the known warnings: no boxed CTA mid-page (the owner's one-offer rule, round 1), no quote from a licensed person, and "may" 5 times (permission rules).
- Shots looked at, 390 px:
  - the good-place section with the new lead and the cards;
  - the Grande Dunes entry, where the clubhouse photo loads on scroll;
  - the hospital section with the new McLeod line.

## Not changed, for the lead

- Row 72 needs a re-check by an agent that did not research it.
- "4 to 15 minutes ... from the beach" is in the short answer and in card 4. No reviewer flagged it. Cut card 4 if the owner's-eye reviewer counts it as a repeat.
