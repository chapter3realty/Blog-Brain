# Brief: the deal finder as a CRM back-end tool

Paste everything below the line into the chat that builds it. Written 2026-10-29.

**Superseded on the value rule (owner, 2026-10-29, later the same day):** "I do want the AVM and everything else, no restrictions needed to make the best deal finder product. It just won't be shown on the website." The deal finder is now its own package, `deal-finder/` (to move to its own repo), with our own value model for staff. The website still gets no value of any kind. See `deal-finder/README.md` and `deal-finder/docs/DATA-ACCESS.md`.

---

Build a deal finder inside the Chapter3 CRM (repo `chapter3realty`'s CRM, the one with `src/lib/mls/comps.ts`). Work on a new branch and open a pull request for Abdulla to review. Never push or merge to `main`.

## What the owner wants

One button per strategy that looks across the whole MLS copy and lists the best properties on the market at that moment. Fix and flip first, then long-term rentals, then short-term rentals. Agents use it; the website only shows the houses it picks (the "Get the flip list" offer on /invest/strategies/fix-and-flip/).

## The rule that shapes it: no automated value

An automated estimate of a property's value (an AVM) is a separate MLS licence we do not have. `src/lib/mls/comps.ts` already follows this: it shows the comps' own facts, never a value for the subject (no "estimated value", no median $/sqft times the subject's size). The deal finder follows the same rule:

- It may rank listings by facts: the asking price per square foot against the middle of nearby sales, the sales count and range, days on market, price cuts, distress flags, age.
- It never stores or shows a dollar value for a listing (no after-repair value, no profit computed from a value the system made).
- An agent types the after-repair value; the flip math (costs, profit, the 70 percent rule's highest offer) runs on the agent's number.
- Runs under the Firm BBO licence (staff and bona fide clients only, `mlsAllowed()`), never on a lead-facing or token page.

## Fix and flip, the method (already built and tested on the website: `idx-lib/deals.js`, patch v1.17)

1. Candidates: active houses with a reason to be cheap: distressed sale, foreclosure, short sale, or built 1985 or earlier at the low end of the price range.
2. Nearby sales for the cheapest 60 per square foot: houses within 30 percent of the size, sold within 1 mile in 12 months (2 miles if under 4 sales). Needs 3.
3. Rank by how far the asking price per square foot sits under the middle of those sales. Mark anything more than 60 percent under for a check (typo, auction opening bid, needs everything).
4. The AI (Claude Haiku, through the existing api-proxy Worker) reads the listing photos and description of the top 12 and lists the repairs it can see with a cost range. A repair estimate is not a property value.
5. The agent sets the after-repair value; the page shows profit and the 70 percent offer from it.

Things the CRM can do better than the website version: it has the full MLS copy (no 60-candidate limit), every sold field, the remarks for every listing, and can run on a schedule and keep the list fresh.

## Local facts it can use (verified, Blog-Brain `batches/2026-10-c/facts/fix-and-flip-facts.md`)

From Horry County's deeds, homes resold within 12 months in the year to September 2026: company resales had a middle gross gain of about $75,000; Conway, Carolina Forest and Little River had the biggest middle gains on houses. Useful for a "where to look first" default.

## Next buttons

- Long-term rentals: rent from the CRM's rent data against the asking price, the HOA and tax (6 percent ratio), rentals allowed by the HOA.
- Short-term rentals: buildings and zones where nightly rentals are allowed (city zoning, HOA), the STR market data the website already uses.

## Not in scope

Interest rates or payment amounts (never shown). Naming BrickWood without the inline disclosure.
