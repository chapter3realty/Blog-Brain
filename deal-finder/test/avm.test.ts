import { describe, expect, it } from "vitest";
import { backtest } from "../src/avm/backtest.ts";
import { buildAvm } from "../src/avm/build.ts";
import { afterRepair, factsOf } from "../src/avm/features.ts";
import { syntheticMarket, trueValue } from "../src/source/synthetic.ts";

const market = syntheticMarket({ seed: 11 });
const avm = buildAvm(market.sold, market.asOf);

describe("the value model on a made-up market with a known rule", () => {
  it("values hidden sales close to their price (backtest)", () => {
    const r = backtest(market.sold, market.asOf);
    expect(r.blended.n).toBeGreaterThan(400);
    // The made-up sales carry 7 percent noise, so about 4.7 percent is the floor.
    expect(r.blended.mdape).toBeLessThan(8);
    expect(r.blended.within20).toBeGreaterThan(90);
    expect(Math.abs(r.blended.bias ?? 99)).toBeLessThan(3);
  });

  it("finds the listings' values without their asking price", () => {
    const errs = market.active.slice(0, 200).flatMap((l) => {
      const f = factsOf(l, market.asOf);
      return f ? [Math.abs(avm.value(f).value / trueValue(l, 0, market.asOf) - 1)] : [];
    });
    errs.sort((a, b) => a - b);
    expect(errs[Math.floor(errs.length / 2)]).toBeLessThan(0.08);
  });

  it("learns that renovated sells for more and distress for less", () => {
    const t = avm.model.describe("detached").terms;
    expect(t.renovated).toBeGreaterThan(0.05);
    expect(t.distress).toBeLessThan(-0.1);
  });

  it("learns the market's rise: an old sale is brought up to today", () => {
    expect(avm.timeFactor("detached", 20)).toBeGreaterThan(1.02);
    expect(avm.timeFactor("detached", 1)).toBe(1);
  });

  it("values the fixed-up house above the house as it stands", () => {
    const l = market.active.find((x) => /as-is/i.test(x.remarks)) ?? market.active[0];
    const f = factsOf(l, market.asOf)!;
    expect(avm.value(afterRepair(f)).value).toBeGreaterThan(avm.value(f).value);
  });

  it("never uses a house's own sale as its comp", () => {
    const sale = market.sold[0];
    const f = factsOf({ ...sale, status: "Active" }, market.asOf)!;
    expect(avm.comps(f).some((c) => c.key === sale.key)).toBe(false);
    const renamed = factsOf({ ...sale, key: "OTHER-KEY", status: "Active" }, market.asOf)!;
    expect(avm.comps(renamed).some((c) => c.address === sale.address)).toBe(false);
  });

  it("gives a range around the value and a grade", () => {
    const f = factsOf(market.active[3], market.asOf)!;
    const v = avm.value(f);
    expect(v.low).toBeLessThan(v.value);
    expect(v.high).toBeGreaterThan(v.value);
    expect(["A", "B", "C", "D"]).toContain(v.grade);
  });
});
