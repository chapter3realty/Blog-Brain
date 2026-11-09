# APPLIED: /buyers/coastal-insurance/

Fixer, 2026-11-09. Page file `chapter3realty/buyers/coastal-insurance/index.html` (no spec).

| Rows | Before | After |
|---|---|---|
| 1, 2 | Hero line: "Typical single-family policies here cost about $1,500 to $3,500 a year in the standard market." | "In 2022 the average homeowners policy on a house in Horry County cost about $1,600 to $2,900 a year, depending on the ZIP code, before any separate wind or flood policy." It is on the first screen at 390 and 1440, above the MLS row. |
| 1, 4 STRUCK | Meta, og and twitter description: "Typical Myrtle Beach home policies cost about $1,500 to $3,500 a year, before wind and flood. ..." | "Horry County house policies averaged about $1,600 to $2,900 a year by ZIP in 2022, before wind and flood. What the three policies cost, and six ways to pay less." (161 characters) |
| 1, 2, 3 CORRECTED, 5 STRUCK | Direct answer: "National comparison sites price one standardized $300,000 house. They put Myrtle Beach between about $4,500 and $5,300 a year, among the highest in South Carolina and well above the inland cities. Both numbers come from actual quotes. On the coast, quotes ... wins. Premium benchmarks come from the South Carolina Department of Insurance; check any address's flood zone ..." | Two paragraphs: "In 2022 the average homeowners policy on a house in Horry County cost about $1,600 to $2,900 a year, depending on the ZIP code. That average leaves out wind pool and surplus-lines policies, and flood. The figures are from the U.S. Treasury's homeowners insurance data, 2018 to 2022 [link to the Treasury release]." / "On the coast, quotes on the same house vary by thousands of dollars, so the person who shops wins. Check any address's flood zone free at the FEMA Map Service Center." |
| 1, 4 STRUCK | FAQ and FAQPage schema, first sentence: "Local single-family policies commonly cost about $1,500 to $3,500 a year in the standard market, and comparison sites quoting a standardized $300,000 house put Myrtle Beach between about $4,500 and $5,300, among the highest in South Carolina." | "In 2022 the average homeowners policy on a house in Horry County cost about $1,600 to $2,900 a year, depending on the ZIP code, before any separate wind or flood policy." The rest of the answer stays. |

Said less, because a row did not verify:
- Row 3: the $4,500 to $5,300 comparison-site range and every description of the comparison sites' method are cut (no comparison site was opened).
- Row 4: $1,500 to $3,500 is gone from every surface. It can come back only as Chapter3's own quotes, with a count and years, if the owner confirms.
- Row 5: the sentence naming SCDOI as the source of the figures is cut.
- "Quotes on the same house vary by thousands of dollars" has no row in this ledger. It was not wrong by any row, so it stays word for word.

Not done:
- Title: already "Myrtle Beach Homeowners Insurance Cost: Home, Wind and Flood" (step 1 done in round 1).
- Step 5: the page has no Sources list, so the Treasury link sits in the direct answer.
- Step 6: the rentals and condo sections were already split into paragraphs of three sentences or fewer (round 1).
- An older markup fault (8 `<section>` against 7 `</section>`: the condo section is not closed before "Paying less") was there before this fix. Not touched. It needs its own fix.
