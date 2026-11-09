# APPLIED: /submarkets/carolina-forest/

Fixer, 2026-11-09. Page file `chapter3realty/submarkets/carolina-forest/index.html` (no spec).

| Rows | Before | After |
|---|---|---|
| none | Title, og:title, twitter:title, schema name and headline: "Carolina Forest, SC Real Estate: Home Prices, 11 Subdivisions" | "Carolina Forest, SC: Home Prices, Schools, 11 Subdivisions" (58). The FIX's "Living in Carolina Forest, SC: Home Prices, Schools, 11 Subdivisions" is 68, over the 62 limit. |
| 2, 5 STRUCK | Meta, og and twitter description: "Carolina Forest homes sell for a median near $418,000 to $465,000. ..." | "On county deeds, Carolina Forest houses resold for about $440,000 at the middle. Eleven subdivisions compared, schools, flood zones, and why it pays no city tax." (161) |
| none | Italic line at H1 size | Set at the approved size (half the H1). |
| none | H2 "Carolina Forest home prices in 2026" | "Carolina Forest home prices" |
| 1 to 4, 5 STRUCK | "The two best reads, each with its own lens: Redfin's ... $418,000 ... SC Realtors ... $464,710 ... Condos ... near $215,500, up about 17 percent." | "County deed records give the prices. In the year to September 2026, a house in Carolina Forest resold for about $440,000 at the middle, on 405 sales. Half sold between about $325,000 and $600,000. A condo resold for about $172,000 at the middle, on 91 sales, and a townhouse for about $230,000, on 34. These are resales in the Census-designated place of Carolina Forest; a builder's first sale is not counted." |
| 2 to 4, 5 and 6 STRUCK | "Context makes those numbers make sense: the Horry County median sits near $329,000 and the City of Myrtle Beach near $266,000 ... seller's market ... roughly 1,330 homes changed hands here. Current numbers ... July 2026 market report for the region-wide picture." | "Most homes sold here are houses: 405 of the 530 house, condo and townhouse resales. Prices for one community, or one street, are a different number: ask us, and see the July 2026 market report for the region." |
| 2, 3 | FAQ and FAQPage schema: "Recent single-family medians are about $418,000 ... $464,710 ... $329,000 Horry County median. Condos ... $215,500. Entry points run from the $200,000s in older condo sections to over $1 million on the Intracoastal." | "In the year to September 2026, county deed records show houses in Carolina Forest resold for about $440,000 at the middle and condos for about $172,000." |
| 3 | Subdivisions: "Kiskadee Parke, start in the $200,000s and feed the corridor's rental demand." | "Kiskadee Parke, feed the corridor's rental demand." |
| 3 | Rentals: "entry condos in the $200,000s offer the highest yields" | "entry condos offer the highest yields" |
| none | Eyebrow "Community guide · verified July 2026"; closing "Verified July 2026. Community fees ..." | "Community guide"; "Community fees ..." (typed dates removed) |
| 1 | Sources list | Added: "Horry County Register of Deeds [AcclaimWeb link] and county GIS parcels: home resales recorded October 2025 to September 2026, counted by us". |

Said less, because a row did not verify:
- Row 5: Redfin's $418,000, SC Realtors' $464,710 and "roughly 1,330 homes" are cut on every surface.
- Row 6: the $329,000 county and $266,000 city figures are cut, with the comparison and the "seller's market" line that went with them.
- "Over $1 million on the Intracoastal" is cut from the FAQ: there is no row for it.
- `node build.js dates` not run.
