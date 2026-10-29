# Roadmap

## Done (v0.1, 2026-10-29)

- Value model: hedonic plus location step plus adjusted comps, with grades and ranges.
- Backtest with the signal test.
- Fix and flip ranking with local costs and 2,000 simulated outcomes.
- CRM view and public (IDX) view, with tests that keep values off the public view.
- Reader for the CRM's MLS copy. Made-up market for tests.

## Next

1. **First real run.** The owner creates the read-only login (docs/DATA-ACCESS.md). Run `npm run backtest`, then set the grade ranges and the blend to the measured ones. Read the signal bands. Run `npm run find` and have an agent check the top 20 by hand.
2. **Into the CRM.** A page under MLS (Deals) for staff (`mlsAllowed()`), and a pg-boss job that runs after each MLS sync and stores the run. The CRM imports this engine. A pull request for Abdulla, never to `main` directly (chapter3-crm rules).
3. **The website feed.** A CRM IDX endpoint returning the public view, behind the CRM's freshness gate (no list if the copy is over 12 hours old, CCMLS 16.7). The fix and flip page shows it with the listing firm and the MLS disclaimer. This replaces the website's own deal finder (Chapter3-Website `idx-lib/deals.js`).
4. **The AI repair check.** The listing photos and remarks of the top 25, read by Claude, priced as line items. Replaces the tier's figure. Run inside the app, recorded in `ai_usage` (chapter3-crm rule 7), never from a session.
5. **Long-term rentals.** Rent from the CRM's lease data (Residential Lease sales in the same copy) with the same hedonic method, against price, tax, insurance and HOA. Rentals allowed by the HOA.
6. **Short-term rentals.** Where nightly rentals are allowed (city zoning, HOA), with the STR market data the website uses.
7. **County records.** Horry County deed and parcel data (the 344 quick resales in Blog-Brain `batches/2026-10-c/data/horry-flips.json`): which towns and price bands flip best, as a prior on the ranking. Owner, tax and absentee data for off-market leads.
