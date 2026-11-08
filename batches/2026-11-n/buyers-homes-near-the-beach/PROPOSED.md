# Proposed registry rows and story requests: /buyers/homes-near-the-beach/

## Registry rows (facts/registry.json), proposed

1. `near-beach-premium-deeds`: Horry County house sales within half a mile of the ocean, recorded 2025-10-01 to 2026-09-30, middle $675,000 (450 sales), against $390,000 two to five miles inland (2,339 sales). Ledger row 4. Stale by 2027-01. The waterfront, town and relocating pages may quote a near-beach price; one value site-wide.
2. `beach-access-counts`: Myrtle Beach 143 public beach access points (city page); North Myrtle Beach over 240 (city page); Surfside Beach 36 (town page). Ledger row 12, carried for Surfside. Stale by 2027-11. The relocating/beaches page and the town pages may state these.
3. `kings-highway-route`: Kings Highway in Myrtle Beach is US 17 Business (SCDOT). Ledger row 14. Stable.

Each needs a firing and a quiet control in `tools/facts-check.test.js` from real site text before it goes in.

## Story requests

None needed. OWNER-QUESTIONS.md Q1 is optional.
