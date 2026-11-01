# Proposed rows: /buyers/new-construction/

For the lead. Nothing here is in `facts/registry.json` or `stories/stories.json` yet. Add only after the ledger rows are verified.

## facts/registry.json

1. **new-home-first-tax-bill.** Fact: "Homes builders sell in a year are taxed as lots that year: of homes builders sold in Horry County from January to September 2026, 81 percent (3,093 of 3,826) had no county building value by November 2026; every home builders sold in October to December 2025 had one." Source: Horry County deed index and parcel layer 24 (ledger rows 24, 25). Owner page: /buyers/new-construction/. Stale by 2027-02. A wrong pattern to catch: a sentence that says a new home's first tax bill is on the full price ("taxed on the purchase price from day one").
2. **builder-share-of-sales.** Fact: "Builders sold 5,111 of 17,881 recorded home sales in Horry County from October 2025 through September 2026 (28.6 percent, a floor)." Owner page: /buyers/new-construction/. Stale by 2027-01. Siblings that state a builder share must use this value or say their own group.
3. **new-share-of-houses-for-sale.** Fact: "About 1 in 3 houses for sale in Horry County is new construction (1,006 of 3,014, 2026-11-01)." Owner page: /buyers/new-construction/. Stale by 2026-12. Changes monthly; the registry entry should carry the as-of date.
4. **unincorporated-millage-2026.** Fact: "Unincorporated Horry County: 201.0 mills in 2026 (county and school 171.2, county fire 20.2, fire apparatus 1.5, waste management 8.1); school operating 109.1." Source: 2026 levy sheet. Owner page: /buyers/property-taxes/. Two pages now compute from it.

## stories/stories.json

None. No new story was gathered.

## Review round 1 (fixer)

5. **new-home-communities-2026.** Fact: "The ten communities where builders recorded the most home sales in Horry County, October 2025 to September 2026: Auberon Woods, Grande Dunes North, Arcadia, Waterside Neighborhood, Indigo Grove, Chestnut Greens, Cypress Ridge, Kingston Oaks, Crescent Cove, Eden Springs (1,402 of 5,108 builder sales)." Ledger row 33 (VERIFIED-BY-FIXER). Owner page: /buyers/new-construction/. Stale by 2027-01. Siblings that name "the busiest new communities" should use this list or say their own period.
6. **new-house-hoa-fee-share.** Fact: "Of new houses for sale in the MLS feed, about 1 in 5 has no HOA fee; about 3 in 4 have $100 a month or less, or none (2026-11-01)." Ledger row 34 (VERIFIED-BY-FIXER). Stale by 2026-12.
7. **coastal-wind-rating-factors.** Fact: "In the coastal area, wind (essential property) insurance rating plans must include discounts or surcharges for building codes, construction standards and roof tie-downs, among other factors (SC Code 38-73-1095(C))." Ledger row 35. A wrong pattern to catch: "new houses are cheaper to insure" stated as a rule.
