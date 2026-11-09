# FIX: /submarkets/carolina-forest/

## Verifier marks, 2026-11-09

Planned sentences that go beyond their verified rows. Details and safe wording in `VERIFY.md`.

- Step 3, "405 of the 530 resales": 530 is houses, condos and townhouses only. Write "405 of the 530 house, condo and townhouse resales".
- Step 4, "over $1 million on the Intracoastal": no row.
- Missing from the FIX: the rental section's "condos in the $200,000s" must change too (row 3).


File: `chapter3realty/submarkets/carolina-forest/index.html`. No spec in `specs/` builds this page. Rows are in `facts.md` here.

## 1. Title (no fact)

`<title>` and og:title: "Living in Carolina Forest, SC: Home Prices, Schools, 11 Subdivisions".

## 2. The italic line (no fact)

Set "home prices, eleven subdivisions, no city tax." at about half the H1 size.

## 3. "Carolina Forest home prices" section (rows 1 to 6)

H2: change "Carolina Forest home prices in 2026" to "Carolina Forest home prices" (the dated range goes in the text, from the deed records).

Replace the first paragraph (Redfin $418,000 ... condos $215,500) with:
> County deed records give the prices. In the year to September 2026, a house in Carolina Forest resold for about $440,000 at the middle, on 405 sales. Half sold between about $325,000 and $600,000. A condo resold for about $172,000 at the middle, on 91 sales, and a townhouse for about $230,000, on 34. These are resales in the Census-designated place of Carolina Forest; a builder's first sale is not counted. (rows 1 to 4)

Replace the second paragraph with:
> Most homes sold here are houses: 405 of the 530 resales. Prices for one community, or one street, are a different number: ask us, and see the July 2026 market report for the region. (rows 2 to 4)

(Do not compare Carolina Forest with the beach towns by middle price without a row: on the same deeds, the middle house in the City of Myrtle Beach resold for about $535,000, above Carolina Forest; which-town row 1.)

Removed, with their reasons:
- "the Horry County median sits near $329,000 and the City of Myrtle Beach near $266,000" (row 6, no source in this pass).
- "local press has described it as a seller's market even while beach condos favor buyers" (no row).
- "Trailing twelve months, roughly 1,330 homes changed hands here" (row 5, no source; rows 2 to 4 give 530 resales in the Census place).

Keep the link to the market report as it is. Do not type a new date.

## 4. FAQ "What do homes cost in Carolina Forest?" (rows 2, 3)

Old:
> Recent single-family medians are about $418,000 per Redfin's mid-2026 snapshot and $464,710 per SC Realtors data for ZIP 29579 in December 2025, against a roughly $329,000 Horry County median. Condos in the corridor had a median near $215,500. Entry points run from the $200,000s in older condo sections to over $1 million on the Intracoastal.

New:
> In the year to September 2026, county deed records show houses in Carolina Forest resold for about $440,000 at the middle and condos for about $172,000. Entry points run from older condo sections to over $1 million on the Intracoastal. (rows 2, 3)

"from the $200,000s in older condo sections" goes: row 3 puts the middle condo at $172,000, below the $200,000s. Also change the neighborhoods sentence "Entry-level condo sections along Carolina Forest Boulevard, including Carolina Willows, Windsor Green, The Fountains, and Kiskadee Parke, start in the $200,000s" to "start under $200,000" only if a row for those buildings is added; otherwise cut "start in the $200,000s and". The over-$1-million claim was not re-checked in this pass; keep or cut by its own row.

## 5. "Verified July 2026" labels

The eyebrow "Community guide · verified July 2026" and the closing "Verified July 2026." are typed dates. Remove the date from both ("Community guide"; "Community fees and figures change; we confirm current numbers with each community before you offer."). Run `node build.js dates` to set the Updated date.

## 6. Schema and FAQ JSON-LD

The FAQ answer is also in the page's FAQPage JSON-LD. Change it there to the same new text.
