# Proposed registry rows: /sell/divorce/

For `facts/registry.json`, after the verifier passes the rows.

1. **`deed-fee-divorce-exempt`.** "A deed between spouses, or between former spouses incident to a divorce (no gain or loss under IRC 1041), is exempt from South Carolina's deed recording fee (SC Code 12-24-40(4))." Source: https://www.scstatehouse.gov/code/statmast.php?title=12&chapter=24. asOf 2026-11-08, staleBy 2027-10-01, ownerPage /sell/divorce/. Why: it sits beside the `deed-fee-payer` fact, and a page that says "the seller always pays $3.70 per $1,000" would be wrong for a buyout deed. Wrong pattern to test against real site text first: a sentence that says a divorce or spouse-to-spouse deed pays the deed fee.
2. **`sc-property-division-not-50-50`.** "South Carolina divides marital property by equitable apportionment, weighing 15 factors (SC Code 20-3-620(B)); the statute sets no 50/50 rule." ownerPage /sell/divorce/. Wrong pattern: "South Carolina is a 50/50 state", "community property state" about SC. Check every hit on the live site before trusting the count.
3. **`home-sale-exclusion`** (if not already registered by /sell/capital-gains/): "$250,000, or $500,000 on a joint return (IRS Pub. 523)." Two pages now state it.
