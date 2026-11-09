# Applied: /invest/str-tax-treatment/

Fixer, 2026-11-09. Source: chapter3realty/invest/str-tax-treatment/index.html (hand-made page, no spec). Rows 1 to 3 VERIFIED, row 4 STRUCK.

| Where | Before | After | Rows |
|---|---|---|---|
| FAQ "Can I deduct Airbnb losses from my W-2 income?", visible answer and FAQPage schema | The full amount applies while your income is $100,000 or less, and it shrinks above that. | The full amount applies while your income is $100,000 or less. Above that it shrinks by 50 cents per dollar, and it is gone at $150,000. (FIX had "by half of every dollar over $100,000"; shortened so the answer stays under 80 words and the score does not fall. Same fact: Pub 925, reduced by 50% of MAGI over $100,000.) | 1 |
| "What is the difference between active and passive income?", third paragraph | That allowance starts to shrink once your income passes $100,000. | That allowance starts to shrink once your income passes $100,000, and it is gone at $150,000. | 1 |
| "What is a rental pool, and why does it matter here?" | Many Myrtle Beach oceanfront buildings require the pool. You cannot opt out. Others let you manage the unit yourself or hire your own manager. | A building's own documents can require the pool. In that building you cannot opt out. Other buildings let you manage the unit yourself or hire your own manager. | 4 (struck: no count; wording from Fannie Mae Selling Guide B4-2.1-03) |

Not changed: the other FAQ sentences (rows 2, 3, round 1), the title, the tests table, every offer. The page body has no link to /invest/condo-buildings/ (only the site nav), so nothing to reword there.

Left: the Sources line still reads "Read September 5, 2026". It is typed into this hand-made page; this pass may not type a date. The new $150,000 fact was read 2026-11-09 (Pub 925, 2025 edition). `node build.js dates` or the owner's next date pass should refresh it.

Score 80 -> 80. claims-scan 0, facts-check unchanged, build audit no FAIL on this page.
