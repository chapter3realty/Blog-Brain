# Applied: /invest/str-rules/

Fixer, 2026-11-09. Source: chapter3realty/invest/str-rules/index.html (hand-kept page, no spec). Rows 1, 1b, 2 VERIFIED.

| Where | Before | After | Rows |
|---|---|---|---|
| Byline | ... Broker-in-Charge · Rules verified July 19, 2026 · Updated November 7, 2026 | ... Broker-in-Charge · Updated November 7, 2026 (the "Updated" date is left to `node build.js dates`, which this pass may not run) | 1, 2 |
| Lede | Seven jurisdictions, seven different sets of rules. Where short-term rentals are allowed, what they license, and what they tax. | The City of Myrtle Beach bans short-term rentals in nearly all residential districts. North Myrtle Beach allows them citywide with a license. Unincorporated Horry County has no short-term rental ordinance. (FIX's version was 33 words and failed the build audit's 30-word hero limit; ", and" and "at all" cut.) | none new (reuses "The one-paragraph map") |
| North Myrtle Beach section | It has not been adopted as of July 2026, but the city did pass a nuisance party ordinance in February 2026... | City Council has not adopted it. The city did pass a nuisance party ordinance in February 2026... | 1, 1b |
| Opening, state bill sentence | A bill to stop cities from banning STRs statewide was introduced in 2025 and has not passed. | A state bill to stop cities from banning them, H. 3861 (linked to /invest/short-term-rental-rules-statehouse/), was introduced in January 2025. It never left the House committee. | 2 |
| Footer line | Rules verified July 19, 2026 against city, county, and state sources. Ordinances change, North Myrtle Beach's likely will, and we update this page when they do. If you are reading this months later, ask us what changed. | Rules checked against city, county, and state sources. Ordinances change, and we update this page when they do. Ask us what changed for the one address you are looking at. (VERIFY wording: no "on the date this page was updated", since only two facts were re-checked) | 1, 2 |

Not changed: the one-paragraph map, the title, the February and June sentences (not re-checked here), the italic subtitle size (layout).

Flags for the next full check, not changed here:
- The new lede moves the July 19 map sentences to the top of the page; re-check them in the next full pass (VERIFY).
- The tax answer gives Conway 12 percent; the accommodations-tax ledger points to 11.5 percent. Conway's own rate was not re-checked, so neither page was changed on it.
- "Buy assuming a local-agent requirement is coming" is still a forecast; outside this fix.

Score 74 -> 75. claims-scan 0, facts-check unchanged, build audit no FAIL on this page.
