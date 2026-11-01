# Task 0: batch 2026-10-d's five finished pages, as patch v1.24

Done 2026-11-01. Patch: `website-patches/v1.24-five-guides-and-claims-sweep.patch`. Apply it after v1.20 to v1.23. None of v1.20 to v1.23 was on the live branch.

## What changed

1. `/hoa/reserves/` title: "How Much Should a Myrtle Beach Condo Have in Reserves?" (54 characters). It is the question buyers type ("how much should a condo have in reserves"), and the page answers it with a number. mkpage allows 62 characters at most, so the brand is left off, as on other headline titles.
2. `/buyers/undisclosed-flooding/` title: "Has This House Flooded? Myrtle Beach Flood History | Chapter3" (61 characters), in the spec and in `data/headlines.json`. The H1 is unchanged.
3. The flood page's homes row (`idx-lib/feeds.js`, `BEACH_DRY`): "Houses within a mile of the beach, no flood zone listed". It searches houses from $250,000 with the CRM's `beach_1mi` and not `flood_zone`, in North Myrtle Beach, Myrtle Beach, Surfside Beach, Garden City, Murrells Inlet and Pawleys Island. "No flood zone listed" is what the MLS field says, not FEMA's ruling. If fewer homes come back than the row needs, it falls back to "Built since 2010, no flood zone listed". **Not checked:** the live count. This session's network blocks chapter3realty.com. Check https://chapter3realty.com/buyers/undisclosed-flooding/ after deploy: at least 10 homes.
4. `/sell/home-value/`: the audit failed on "Here is what comes off a $350,000 sale:". It now reads "On a $350,000 sale, these come off the price:".
5. `/sell/home-value/`'s spec read `data/2026-10-d/sell-home-value/fix3-findings.json`. That file was lost in a container restart before any checkpoint saved it, so the spec could not rebuild. It is rebuilt from three sources:
   - the neighborhood prices, read back from the published dot chart;
   - the monthly counts in findings.json;
   - ledger row 28.

   The rebuild was proved exact: with the old sentence, the page came out byte for byte the same as the round 3 build.

## Checks

- `node build.js stitch`, `dates`, `llmsfull`: done. The clone was shallow at first, and `dates` moved 106 dates wrong from the cut-off history. With the full history it put them back. Run `dates` only in a full clone.
- `node build.js check`: OK (the same 2 warnings: the homepage's inline script, and the STR data at 78 days).
- `node build.js audit`: OK, zero blocking defects.
- `npm test`: every suite prints "all controls pass".
- `claims-scan`: 0 on the five pages. 10 findings remain, all on the seven unshipped 2026-10-d pages (the off-market sentence on 7 pages, "Devin" on /sell/out-of-state-buyers/, "%s" on /hoa/special-assessments/). The rebuilt versions of those pages fix all of them.
- Clean clone of the live branch, then v1.20 to v1.24 with `git am`: every patch applies. Every page and spec matches the working copy. Only the line endings of 38 saved source files under data/ differ.
