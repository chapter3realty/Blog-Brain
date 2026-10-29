# Method

How the deal finder values a house and ranks a flip. Each step names its file.

## 1. The facts (src/avm/features.ts, src/condition.ts)

From each listing: living area, age, beds, baths, lot, waterfront, private pool, garage spaces, more than one story, HOA dues a month, the town, and when it sold.

From its words (public and private remarks) and its sale conditions:

- **Renovated**: renovated, remodeled, new roof, new HVAC, new kitchen, new floors, quartz or granite, new windows, move-in ready.
- **Distress**: as is, investor special, handyman, fixer, TLC, needs work, needs a roof, cash only, not financeable, estate sale, foreclosure, short sale, auction, damage, mold, foundation, tear down, gutted.
- **Distressed sale**: SpecialListingConditions of foreclosure (REO, bank or HUD owned), short sale, auction, estate or probate, bankruptcy.

"Motivated seller" and "bring offers" are about the price, not the house, so they do not count as distress in the model. They show to the agent as motivation.

A missing fact is filled with the middle value of the sales, so a listing with no pool field is priced as a typical house.

Homes only: Residential, a living area of 300 to 15,000 square feet. Groups follow the CRM's comps: detached; condo (condo, apartment, townhouse, semi-detached); manufactured; small multi-family.

## 2. The hedonic model (src/avm/hedonic.ts)

For each group with 150 or more sales, and for all homes together as a fallback, the log of the sale price is fitted as a sum of terms:

- log of the living area; age and age squared; beds; baths; log of the lot; waterfront; pool; garage; stories; HOA dues
- renovated, distress, distressed sale
- the town (each town with 40 or more sales)
- the quarter it sold in, for the last 8 quarters

The quarter terms are the market's price index with the houses held equal. A sale from a year ago is brought to today by the market's own change, read from the sales, not by a guess.

The fit is ridge regression (a small penalty on every term) on standardized terms. The sales with the lowest and highest 1 percent of price per square foot are left out, as typos and lots sold as houses.

**The location step.** What the model misses near a house (a street, a view, a school line) shows in the errors of the sales around it. The prediction adds the weighted average error of the nearest 12 sales (within half a mile, widening to 3 miles until there are 8). Nearer and newer sales weigh more. The average is shrunk toward zero when there are few.

## 3. Comparable sales (src/avm/avm.ts)

Sales of the same group, within 30 percent of the size, never the house's own sale (same key or same street address). The search widens until there are 6:

| Step | Distance | Sold within |
|---|---|---|
| 1 | 0.5 mile | 6 months |
| 2 | 1 mile | 12 months |
| 3 | 2 miles | 12 months |
| 4 | 3 miles | 24 months |

Each comp's price is adjusted to the subject by the hedonic model: the model's price for the subject less its price for the comp, the town left out, both today. So a comp with a pool, one bedroom more and an older sale date is adjusted by what the sales say each of those is worth here.

Each comp is weighted by distance, size difference, months since the sale, a different sub-type, and how big its adjustment is. Up to 10 are kept. The comps value is the weighted middle of the adjusted prices.

## 4. The value (src/avm/avm.ts)

The comps value and the hedonic value are blended: 60 percent comps with 6 or more comps, 40 percent with 3 to 5, hedonic alone with fewer.

**Grade**:

| Grade | Rule | Range, either side |
|---|---|---|
| A | 5+ comps, the two methods within 8 percent, the comps tight | 8% |
| B | 3+ comps, the two methods within 15 percent | 12% |
| C | 3+ comps, or 8+ sales near enough for the location step | 18% |
| D | Neither | 28% |

The backtest prints the measured error of each grade. Set the ranges to the measured ones after the first real run.

## 5. The backtest (src/avm/backtest.ts)

The last 3 months of sales are hidden. The model is fitted on the sales before them, as if today were the first day of the 3 months. Each hidden sale is valued as a listing, without its price.

It reports, for the blend, the comps, the hedonic model and each grade and group:

- **MdAPE**: the middle absolute error. Half the values are closer than this.
- **Within 10, within 20**: the share valued within 10 and 20 percent.
- **Bias**: the middle signed error. Above zero, the model runs high.

The asking price is measured the same way, as a yardstick. It is set with the house in view, so it usually lands close to the sale.

**The signal test** is the one that matters for finding deals. The hidden sales are split by how far the model's value sat above the asking price. Each band shows the middle sale price as a share of the asking price. If homes the model called under-priced sold higher against their asking price, the ranking finds real under-priced homes. If the bands are flat, the model only repeats what the market already knew.

On the made-up market the middle error is 5.5 percent against a floor of about 4.7 percent (the noise put in). The signal bands are flat there by construction. Only the real copy can show the signal.

## 6. Fix and flip (src/strategies/flip.ts)

Every active home in the price range ($40,000 to $750,000 by default), in the groups chosen.

1. **As-is value**: the value model on the house as listed.
2. **After-repair value**: the same house with renovated on and distress off. Capped at the dearest tenth of its comps, brought to today and to its size. Never below the as-is value.
3. **Repairs**: dollars a square foot by tier, plus a 10 percent reserve.

   | Tier | Default | Points to reach it |
   |---|---|---|
   | Light | $15 a sq ft | under 1 |
   | Medium | $35 | 1 to 2.5 |
   | Heavy | $60 | 2.5 or more |

   Points: a distressed sale 1, distress words 1, damage, foundation, mold, gutted, tear down or needs a roof 1 more, 45+ years old 1 (25+ half), renovated with no distress minus 1. The agent's figure, or the AI's photo check, replaces it.
4. **Months held**: rehab (1, 2 or 4 months by tier) plus the middle days on market of sales in its town and group, plus a month to close.
5. **Costs**:
   - Buying: 1.5 percent of the price.
   - Holding, a month: county tax at the 6 percent assessment ratio times 201.0 mills (1.206 percent of the price a year; Horry County district 100, 2026; Blog-Brain fix-and-flip ledger rows 27 and 28), insurance $225, utilities $175, the HOA dues.
   - Cost of money: the agent's own percent a year on the cash in. Default 0 (cash). This repo never states a rate.
   - Selling: 5.5 percent commission, 1 percent closing, and the state deed fee, $1.85 for each $500 or part of $500 (S.C. Code 12-24-10; ledger rows 30 and 31).
6. **Profit** = after-repair value less price, repairs and all costs. ROI is on the cash in. The 70 percent rule's highest offer is 70 percent of the after-repair value less repairs.
7. **Risk**: 2,000 simulated outcomes. The after-repair value varies by the grade's range, repairs vary by about 30 percent and run 5 percent over on the middle draw, and the months run up to 2 more. Reported: the chance of any profit, and the profit at the 10th, 20th, 50th and 90th percentile. The same house always gets the same draws, so a run repeats.
8. **Rank**: by the profit in the worst fifth of outcomes (the 20th percentile), then the middle. A deal with an open check ranks last.

**Checks** (the agent looks before trusting the numbers): asking price more than 60 percent under the as-is value; an auction; grade D; under 500 square feet.

**Motivation** (shown, not in the profit): the price cut from the original asking price, days on market against the town's middle, the distress words.

The asking price is the purchase price. The list never counts on a discount.
