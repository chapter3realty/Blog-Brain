# Deal finder

Finds the best investment homes for sale in the whole CCMLS, by strategy. Fix and flip is built. Long-term and short-term rentals come next (docs/ROADMAP.md).

It has two outputs from one run:

| Output | Who sees it | What it holds |
|---|---|---|
| `flip-crm.json` | Agents and staff, in the CRM | Everything: our value (AVM) and its range, the after-repair value, the comps, repairs, costs, profit, the 70 percent rule's highest offer, the chance of a profit, the seller's signs of motivation |
| `flip-public.json` | The website (IDX) | The listing's own facts, the listing firm, and plain reasons about the listing. No value, no profit, no offer, no remarks |

## Where the data comes from

The CRM already holds a full copy of the MLS: every listing and 24 months of sales, synced from CCMLS through Trestle (chapter3-crm, table `mls_listings`). The deal finder reads that copy with a read-only login. It does not need a second MLS feed. docs/DATA-ACCESS.md says what the owner sets up once.

## Commands

```
npm install
npm test                                        # 29 tests
npm run typecheck
npm run find -- --source synthetic              # try it on a made-up market
npm run backtest -- --source synthetic
DEALS_DATABASE_URL=... npm run find             # the real MLS copy
DEALS_DATABASE_URL=... npm run backtest         # how right the value model is, on real sales
```

`find` options: `--min-price`, `--max-price`, `--cost-of-money` (the agent's own percent a year; 0 means cash), `--out`.

With no `DEALS_DATABASE_URL`, `find` stops and says so. It never falls back to made-up data. The made-up market is only for tests and a first look, and its output says `"source": "synthetic"`.

## How it decides

docs/METHOD.md, in full. In short:

1. **Our own value model.** A hedonic model (what each fact of a house adds to its price, fitted on 24 months of sales, with the market's own price index by quarter) plus a location step (what the model misses near a house shows in the errors of the sales around it). Then comparable sales, each adjusted to the subject by the model's own price for each difference. The two are blended.
2. **Measured, not claimed.** The backtest hides the last 3 months of sales, fits on the rest, and values each hidden sale. It reports the middle error, the share within 10 and 20 percent, the bias, and the signal test: do homes the model calls under-priced really sell better against their asking price?
3. **Fix and flip.** Every active home, not only the ones that say "investor special". As-is value, after-repair value (the same house with the renovated words on, capped at the dearest tenth of its nearby sales), repairs by tier, local costs, and 2,000 simulated outcomes. Ranked by the profit in the worst fifth of outcomes.

## Layout

```
src/types.ts              the listing as the engine reads it
src/source/replica.ts     reads the CRM's MLS copy (read only)
src/source/synthetic.ts   a made-up market for tests
src/condition.ts          distress and renovation words, sale conditions
src/avm/                  the value model, the comps, the backtest
src/strategies/flip.ts    fix and flip
src/views.ts              the CRM view and the public (IDX) view
src/cli.ts                find and backtest
```

## Rules this repo keeps

- Never state an interest rate or a payment amount. The cost of money is the agent's own number and defaults to 0 (cash).
- The value, the after-repair value, the profit and the offer never reach the website. `test/views.test.ts` fails if they do.
- Private remarks never reach the website.
- A listing the seller kept off the internet never reaches the website. A withheld street shows the town only.
- Every listing on the website names its listing firm.
