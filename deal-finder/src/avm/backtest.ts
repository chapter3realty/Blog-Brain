import type { Listing } from "../types.ts";
import { median, quantile } from "../stats.ts";
import type { Grade } from "./avm.ts";
import { buildAvm } from "./build.ts";
import { factsOf } from "./features.ts";

/**
 * THE BACKTEST: how right is the value model, measured, not claimed.
 *
 * The last `holdoutMonths` of sales are hidden. The model is fitted only on
 * the sales before them, as if today were the first day of the holdout, and
 * then values each hidden sale without seeing its price. The errors are the
 * standard AVM measures:
 *   · median absolute error (MdAPE): half the values are closer than this
 *   · within 10 / within 20: the share valued within 10 and 20 percent
 *   · bias: the median signed error (above zero means the model runs high)
 * The asking price is measured the same way, as a yardstick. It is set with
 * the house in view and usually lands close to the sale, so the model is not
 * expected to beat it. What the deal finder needs is the SIGNAL test: when
 * the model says a listing is priced under its value, did it sell for more
 * against its asking price than the others? The holdout is split by the gap
 * between the model's value and the asking price, and each band shows the
 * middle sale price as a share of the asking price. If the bands rise with
 * the gap, the ranking finds real under-priced homes.
 */

export interface ErrorStats {
  n: number;
  mdape: number | null;
  within10: number | null;
  within20: number | null;
  bias: number | null;
  /** 80th percentile of the absolute ln error: the range a grade should carry. */
  p80: number | null;
}

export interface BacktestReport {
  trainedOn: number;
  holdoutFrom: string;
  holdoutTo: string;
  blended: ErrorStats;
  comps: ErrorStats;
  hedonic: ErrorStats;
  askingPrice: ErrorStats;
  byGrade: Record<Grade, ErrorStats>;
  byGroup: Record<string, ErrorStats>;
  signal: Array<{ band: string; n: number; medianSaleToAsk: number | null }>;
}

function stats(errs: number[]): ErrorStats {
  const abs = errs.map((e) => Math.abs(e));
  const share = (t: number) => (abs.length ? Math.round((abs.filter((a) => a <= t).length / abs.length) * 1000) / 10 : null);
  const pct = (x: number | null) => (x == null ? null : Math.round(x * 1000) / 10);
  const lnAbs = errs.map((e) => Math.abs(Math.log(1 + e)));
  return {
    n: errs.length,
    mdape: pct(median(abs)),
    within10: share(0.1),
    within20: share(0.2),
    bias: pct(median(errs)),
    p80: lnAbs.length ? Math.round((quantile(lnAbs, 0.8) ?? 0) * 1000) / 1000 : null,
  };
}

function addMonths(day: string, months: number): string {
  const d = new Date(day + "T00:00:00Z");
  d.setUTCMonth(d.getUTCMonth() + months);
  return d.toISOString().slice(0, 10);
}

export function backtest(sold: readonly Listing[], asOf: string, opts: { holdoutMonths?: number; maxHoldout?: number } = {}): BacktestReport {
  const holdoutMonths = opts.holdoutMonths ?? 3;
  const start = addMonths(asOf, -holdoutMonths);
  const train = sold.filter((l) => l.closeDate != null && l.closeDate < start);
  const test = sold.filter((l) => l.closeDate != null && l.closeDate >= start && l.closeDate <= asOf && l.closePrice);
  const avm = buildAvm(train, start);
  // Every n-th hidden sale, so a big copy still runs in minutes and the sample is spread over the months.
  const stride = Math.max(1, Math.ceil(test.length / (opts.maxHoldout ?? 2000)));
  const blended: number[] = [];
  const comps: number[] = [];
  const hed: number[] = [];
  const ask: number[] = [];
  const byGrade: Record<Grade, number[]> = { A: [], B: [], C: [], D: [] };
  const byGroup: Record<string, number[]> = {};
  const bands = [
    { band: "value under asking", lo: -Infinity, hi: 0, r: [] as number[] },
    { band: "0 to 5% under value", lo: 0, hi: 0.05, r: [] as number[] },
    { band: "5 to 10% under value", lo: 0.05, hi: 0.1, r: [] as number[] },
    { band: "10 to 20% under value", lo: 0.1, hi: 0.2, r: [] as number[] },
    { band: "over 20% under value", lo: 0.2, hi: Infinity, r: [] as number[] },
  ];
  for (let i = 0; i < test.length; i += stride) {
    const l = test[i];
    // Valued as a listing on the first day of the holdout: its own sale is unseen.
    const f = factsOf({ ...l, status: "Active" }, start);
    if (!f) continue;
    const price = l.closePrice as number;
    const v = avm.value(f);
    const e = v.value / price - 1;
    blended.push(e);
    hed.push(v.hedonicValue / price - 1);
    if (v.compsValue != null) comps.push(v.compsValue / price - 1);
    if (l.listPrice) {
      ask.push(l.listPrice / price - 1);
      const gap = Math.log(v.value / l.listPrice);
      bands.find((b) => gap >= b.lo && gap < b.hi)?.r.push(price / l.listPrice);
    }
    byGrade[v.grade].push(e);
    (byGroup[f.group] ??= []).push(e);
  }
  return {
    trainedOn: train.length,
    holdoutFrom: start,
    holdoutTo: asOf,
    blended: stats(blended),
    comps: stats(comps),
    hedonic: stats(hed),
    askingPrice: stats(ask),
    byGrade: { A: stats(byGrade.A), B: stats(byGrade.B), C: stats(byGrade.C), D: stats(byGrade.D) },
    byGroup: Object.fromEntries(Object.entries(byGroup).map(([g, e]) => [g, stats(e)])),
    signal: bands.map((b) => ({ band: b.band, n: b.r.length, medianSaleToAsk: b.r.length ? Math.round((median(b.r) ?? 0) * 1000) / 10 : null })),
  };
}
