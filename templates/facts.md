# Fact ledger: <page URL>

One row per claim the page makes. **The writer may use rows marked `verified` only.** The researcher fills columns 1 to 7. A different agent, the verifier, fills 8 and 9.

Save this file in the website repo as `research/<cluster>/<slug>-facts.md`.

| # | Claim, as the page will state it | Value and unit | Source: primary only | URL opened | Verbatim quote from the source | As of | Stale by | Verifier status | Verifier note |
|---|---|---|---|---|---|---|---|---|---|
| 1 | A South Carolina LLC costs $110 to file | $110 | SC Secretary of State | https://... | "..." | 2026-09-06 | 2027-01 | verified | |
| 2 | | | | | | | | | |

## Rules

**Use primary sources only:**

- the statute or ordinance
- the county or the city
- SCDOR, the IRS, HUD or CFPB
- the agency's own page
- the court opinion
- the data file in the repo

A blog or a search summary is never a source. Use it only to find the primary one.

**Quote the source verbatim.** If the claim is a calculation, show the inputs and the arithmetic in the quote column.

**Name the population on both sides of a ratio** (website A22f). Say what the top describes and what the bottom describes, and check they are the same set of things.

**When the brokerage's own number disagrees with the research,** put both in front of the owner with the inputs. Never quietly replace his number (website A22g).

**Set "Stale by" from how fast the fact changes:**

| Fact | How often it changes |
|---|---|
| Millage and assessment ratios | yearly |
| Market statistics | monthly |
| Statutes and ordinances | quarterly |
| Insurance and program limits | twice a year |

**Verifier statuses:**

- **verified:** the quote is on the page at the URL, and the claim says what the quote says.
- **wrong:** say what the source actually says.
- **unverifiable:** the source is blocked, moved or ambiguous. Treat it as unusable.

## Not verified

Anything the researcher found but could not pin to a primary source goes here, with what was tried. These are never published.

## Questions only the brokerage can answer

These go to `owner-questions.md`.
