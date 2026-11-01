# Proposed rows: /invest/strategies/dst/

For the lead to add to `facts/registry.json` after the verifier marks the ledger rows verified. Each needs a firing and a quiet control in `tools/facts-check.test.js`.

1. `dst-rev-rul-2004-86`: "A Delaware statutory trust share can be replacement property in a 1031 exchange under IRS Rev. Rul. 2004-86 if the trust follows the ruling's limits." Source https://www.irs.gov/irb/2004-33_IRB. ownerPage /invest/strategies/dst/. staleBy 2027-05. Wrong pattern: `\bshield (?:and|&) defer any taxation\b` (the old guest wording; a DST defers, it does not shield). Controls: fires on the live page's "shield and defer any taxation"; quiet on "the tax stays put off".
2. `dst-sales-commission-median`: "Sales commissions and finder's fees came to 6 percent of the money raised in the median DST offering filed with the SEC from October 2025 to September 2026 (144 filings)." Source: SEC Form D data sets; `data/2026-10-d/invest-strategies-dst/formd_dst_summary.json`. ownerPage /invest/strategies/dst/. staleBy 2027-02 (refresh each quarter's data set).
3. `dst-minimum-usual`: "The usual DST minimum was $100,000 (57 of 156 Form D filings, October 2025 to September 2026)." ownerPage /invest/strategies/dst/. staleBy 2027-02. Wrong pattern: `\$25,000 to \$50,000 mostly reserved for cash investors` (unsupported line on the live page).

No new stories proposed. Owner question 3 may produce one.
