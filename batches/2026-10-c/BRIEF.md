# Batch 2026-10-c: the fix and flip page, rebuilt around the deal finder

Lane U. The page is `/invest/strategies/fix-and-flip/` (hand-made, no spec). The owner, 2026-10-29: "tell me how to finish deal finder and we will finish it and make a blog around it". The site already ranks this page for the subject, so we upgrade it instead of adding a second page (WORKFLOW Lane N, step 0).

## The reader

An investor, local or out of state, who wants to flip a house on the Grand Strand. They want to know first: does it pay here, and how do I find the house. Then what it costs here that it does not cost elsewhere, what can go wrong, and who sells it when it is done.

What they would pay an expert to tell them:
1. How to find a house worth flipping before other investors do.
2. Whether flips make money here, in numbers from this county.
3. How to price the after-repair value and the highest offer (the 70 percent rule).
4. The local costs and traps: the investment tax rate, the deed fee, permits, flood rules, the license rules for the work, an older house's paint and termite letters, insurance on an empty house.
5. The tax on the profit.
6. How the finished house sells, and when.

## Must-answer list (from search suggestions and the top results, 2026-10-29)

1. Is flipping houses profitable in Myrtle Beach? (local numbers)
2. How do you find houses to flip here? (the deal finder method)
3. How do you work out the after-repair value and the 70 percent rule?
4. How much does it cost to flip a house here (repairs, holding, buying and selling)?
5. Do you need a license to flip houses in South Carolina? (real estate, contractor, wholesaling)
6. What taxes do you pay on a flip in South Carolina?
7. Flood zones: what changes when you renovate a house in one?
8. Hard money and flip loans (no rates, no payments; BrickWood is an affiliate).
9. When is the best time to sell a flip here?

The top results (a Keller Williams page, BiggerPockets threads, lender blogs) give no local numbers and nothing on the flood rule, the paint rule or the tax rate. That is the gap.

## The offer

"Get this week's flip list": an agent runs the deal finder for the reader's price range and sends the best homes with the nearby sales behind them. It opens the talk-to-an-agent form (`data-address`). The deal finder itself stays for agents: it reads sold homes, and the page never puts an automated value on a house (no AVM licence).

## The deal finder, as the page may describe it (website v1.17)

1. Every home for sale with a reason to be cheap: a distressed sale, a foreclosure, a short sale, or an older house at the low end of the price range.
2. For each, houses within 30 percent of its size that sold within a mile (two if too few) in the last 12 months. Ranked by how far its asking price a square foot sits under the middle of those sales.
3. The AI reads the listing photos and description of the first 12 and lists the repairs it can see, with a cost range.
4. The agent looks at the sales, sets the after-repair value, and runs the flip math and the 70 percent rule's highest offer.
