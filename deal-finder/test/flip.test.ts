import { describe, expect, it } from "vitest";
import { buildAvm } from "../src/avm/build.ts";
import { syntheticMarket } from "../src/source/synthetic.ts";
import { deedFee, findFlips } from "../src/strategies/flip.ts";

const market = syntheticMarket({ seed: 5 });
const avm = buildAvm(market.sold, market.asOf);

describe("fix and flip", () => {
  it("finds the planted under-priced houses near the top", () => {
    const run = findFlips(market, avm);
    const top = run.deals.slice(0, 12).map((d) => d.listing.key);
    expect(top.filter((k) => k.startsWith("BARGAIN")).length).toBeGreaterThanOrEqual(5);
  });

  it("ranks the same way on every run", () => {
    const a = findFlips(market, avm).deals.map((d) => d.listing.key);
    const b = findFlips(market, avm).deals.map((d) => d.listing.key);
    expect(a).toEqual(b);
  });

  it("does the flip math on the after-repair value", () => {
    const d = findFlips(market, avm).deals[0];
    const c = d.costs;
    const price = d.listing.listPrice as number;
    expect(d.profit).toBeCloseTo(d.arv.value - price - d.repairs - c.buy - c.hold - c.money - c.sell, -1);
    expect(d.maxOffer70).toBe(Math.round((d.arv.value * 0.7 - d.repairs) / 1000) * 1000);
    expect(d.risk.p10).toBeLessThanOrEqual(d.risk.p50);
    expect(d.risk.p50).toBeLessThanOrEqual(d.risk.p90);
  });

  it("uses the agent's repair figure when given", () => {
    const first = findFlips(market, avm).deals[0];
    const again = findFlips(market, avm, { repairs: { [first.listing.key]: 12345 } }).deals.find((d) => d.listing.key === first.listing.key);
    expect(again?.repairs).toBe(12345);
    expect(again?.repairsFrom).toBe("override");
  });

  it("keeps to the price range", () => {
    const run = findFlips(market, avm, { minPrice: 100000, maxPrice: 200000 });
    for (const d of run.deals) {
      expect(d.listing.listPrice).toBeGreaterThanOrEqual(100000);
      expect(d.listing.listPrice).toBeLessThanOrEqual(200000);
    }
  });
});

describe("deedFee (S.C. Code 12-24-10: $1.85 for each $500 or part of $500)", () => {
  it("matches the verified worked figures (Blog-Brain fix-and-flip ledger, row 31)", () => {
    expect(deedFee(260000)).toBeCloseTo(962, 2);
    expect(deedFee(335000)).toBeCloseTo(1239.5, 2);
  });
  it("rounds a part of $500 up", () => {
    expect(deedFee(260001)).toBeCloseTo(963.85, 2);
  });
});
