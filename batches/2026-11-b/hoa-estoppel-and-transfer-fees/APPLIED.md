# Applied: /hoa/estoppel-and-transfer-fees/ (and the matching /sell/ lines)

Fixer, 2026-11-09. Neither page has a spec. Edited `chapter3realty/hoa/estoppel-and-transfer-fees/index.html` and `chapter3realty/sell/index.html`. No date typed.

## Estoppel page

| # | Where | Before | After | Rows |
|---|---|---|---|---|
| 1 | "Nobody has to hurry", 2nd paragraph | "... We do not control that timing. We control our end. Your documents go into our analysis tool the moment they arrive, and a person reads the result within minutes." | "... We do not control that timing." | none needed (struck list "within minutes") |
| 2 | "What the HOA charges you at closing", 1st paragraph | "The amounts vary from one community to the next and nothing caps them. Ask for the figures early so nothing on the settlement statement is a surprise." | "No South Carolina law caps these fees or says what they are. Ask the HOA or its manager for its own figures in writing, early, so nothing on the settlement statement is a surprise." | 2 VERIFIED; row 1 STRUCK, so no range and no "vary" (VERIFY item 2) |
| 3 | `<title>`, og:title, twitter:title, WebPage name | "HOA Estoppel Letter South Carolina \| Chapter3 Realty" | "South Carolina HOA Estoppel Letter: Fees, Who Pays, How Long" (60 characters) | none needed |

Title note: FIX's "HOA Estoppel Letter in South Carolina: Fees, Who Pays, How Long" is 63 characters, past the 62 limit. Reordered to keep the place name and the three answers. "Cost" stays out because row 1 is STRUCK. H1 unchanged.

## /sell/

| # | Where | Before | After | Rows |
|---|---|---|---|---|
| 4 | FAQ "closing costs for sellers", in FAQPage JSON-LD and in the visible FAQ | "Any HOA estoppel or transfer fees, $100 to $400 at most Grand Strand HOAs." | "Any HOA estoppel or transfer fees, which no South Carolina law caps." | 1 STRUCK, 2 |
| 5 | Card "HOA Estoppel and Transfer Fees" (the line VERIFY found, item 1) | "Condo HOAs typically charge $100 to $400 for estoppel letters and transfer fees. Some Grand Strand HOAs (Kingston Plantation, Barefoot Resort) charge higher. Confirm before listing." | "No South Carolina law caps HOA estoppel or transfer fees, so ask the HOA or its manager for its figures in writing before listing." | 1 STRUCK, 2 |

FIX's "which vary by community and have no state cap" was cut down to "which no South Carolina law caps": no row supports "vary" (VERIFY item 2). The FAQ line has no link, so none was added.

Left: `chapter3realty/llms-full.txt` still repeats the old /sell/ "$100 to $400" text. It is generated and this round may not run `build.js llmsfull`; the next normal build fixes it. The optional owner question (a range from Chapter3's closing files) was not added.

Gates: claims-scan 0; facts-check no sentence on these pages; struck list 0 hits on both pages; score estoppel 85 before, 85 after; /sell/ 68 before, 68 after; build.js check OK; audit no FAIL on either page.
