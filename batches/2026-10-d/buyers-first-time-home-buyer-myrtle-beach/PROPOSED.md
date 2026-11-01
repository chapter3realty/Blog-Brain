# Proposed registry rows: /buyers/first-time-home-buyer-myrtle-beach/

For `facts/registry.json`, after the verifier marks the rows. Each `wrong` pattern needs a firing and a quiet control from real site text, and every hit read against the live site before it is trusted (CLAUDE.md).

1. **id `fha-loan-limit-horry`.** "FHA's 2026 loan limit for a one-unit home in Horry County is $541,287." Source: HUD FHA Mortgage Limits, CY2026 (facts.md row 26). ownerPage `/buyers/first-time-home-buyer-myrtle-beach/`. staleBy 2026-12-31 (HUD publishes 2027 limits late in the year). `wrong`: `\$524,225` beside "FHA" (the 2025 floor; to be confirmed against HUD's CY2025 page before adding).
2. **id `starter-house-flood-share`.** "About 3 in 100 houses and townhouses that sold in Horry County for under $300,000 (October 2025 to September 2026) had their lot center in a high-risk flood zone; for condos under $300,000 it was about 1 in 6." Source: facts.md row 9 (county flood layer 19, deed index). ownerPage this page. staleBy 2027-06-01. No `wrong` pattern yet; register so a sibling page that states a flood share for starter homes uses this one.
3. **id `new-vs-resale-house-median`.** "New houses from builders sold for a middle price of about $349,000 against $375,000 for resale houses, October 2025 to September 2026." Source: facts.md row 3. ownerPage this page. staleBy 2026-12-31. Shared with `/buyers/new-construction/` (rebuilt in this batch).

No new stories proposed. `stories/stories.json` has no first-time buyer; facts.md "Questions only the brokerage can answer" 1 proposes one owner question.
