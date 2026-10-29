import { Grid } from "../geo.ts";
import { quantile, weightedMedian } from "../stats.ts";
import type { Group } from "../types.ts";
import { Hedonic, type Sale } from "./hedonic.ts";
import type { Facts } from "./features.ts";

/**
 * OUR VALUE MODEL (the AVM). Internal: the CRM page and the agents see it;
 * the website never does (src/views.ts). Two methods, then one number:
 *
 *  1. Comparable sales. The nearest similar sales (same group, size within
 *     30 percent), widening until there are enough. Each sale is adjusted to
 *     the subject by the hedonic model's own price for each difference
 *     (size, age, beds, baths, pool, condition...) and brought to today by
 *     the market index. The weighted middle of the adjusted prices is the
 *     comps value; closer, newer, more alike sales weigh more.
 *  2. The hedonic model with its location step (src/avm/hedonic.ts).
 *
 * The blend leans on the comps when there are enough of them. The range and
 * the grade come from how far the two agree and how tight the comps are; the
 * backtest (src/avm/backtest.ts) measures what each grade's error really is.
 */

export const COMP_LADDER = [
  { miles: 0.5, months: 6 },
  { miles: 1, months: 12 },
  { miles: 2, months: 12 },
  { miles: 3, months: 24 },
] as const;
export const SIZE_TOLERANCE = 0.3;
export const MIN_COMPS = 3;
export const ENOUGH_COMPS = 6;
export const MAX_COMPS = 10;

/** Weight on the comps value in the blend, by how many comps there are. Tuned by the backtest. */
export const BLEND = { many: 0.6, few: 0.4 };

/** Half-width of the range, in ln terms, by grade. The backtest prints the measured ones. */
export const RANGE = { A: 0.08, B: 0.12, C: 0.18, D: 0.28 } as const;
export type Grade = keyof typeof RANGE;

export interface CompUsed {
  key: string;
  address: string | null;
  closePrice: number;
  closeDate: string | null;
  sqft: number;
  mi: number;
  monthsAgo: number;
  /** This sale's price adjusted to the subject and to today. */
  adjusted: number;
  weight: number;
}

export interface Valuation {
  value: number;
  low: number;
  high: number;
  grade: Grade;
  compsValue: number | null;
  hedonicValue: number;
  comps: CompUsed[];
  /** ln spread of the adjusted comps, 25th to 75th percentile. */
  compSpread: number | null;
  /** The comps value against the hedonic value, ln. */
  disagreement: number | null;
}

interface SoldRow extends Sale {
  key: string;
  address: string | null;
  lat: number | null;
  lon: number | null;
  closeDate: string | null;
}

export class Avm {
  readonly model: Hedonic;
  private grid: Grid<SoldRow>;

  constructor(sales: ReadonlyArray<Sale & { closeDate: string | null }>) {
    this.model = new Hedonic(sales);
    this.grid = new Grid(sales.map((s) => ({ ...s, key: s.facts.key, address: s.facts.address, lat: s.facts.lat, lon: s.facts.lon })));
  }

  /** Comparable sales near the subject. Never the subject's own sale (same key or same street address). */
  comps(f: Facts): CompUsed[] {
    if (f.lat == null || f.lon == null) return [];
    const same = (r: { key: string; address: string | null }) => r.key === f.key || (!!f.address && !!r.address && norm(r.address) === norm(f.address));
    let found: Array<{ item: SoldRow; mi: number }> = [];
    for (const step of COMP_LADDER) {
      found = this.grid
        .near(f.lat, f.lon, step.miles)
        .filter(({ item }) => item.facts.group === f.group && item.facts.monthsAgo <= step.months && !same(item))
        .filter(({ item }) => Math.abs(Math.log(item.facts.sqft / f.sqft)) <= Math.log(1 + SIZE_TOLERANCE));
      if (found.length >= ENOUGH_COMPS) break;
    }
    const subjectNoCity = this.model.linear({ ...f, monthsAgo: 0 }, { noCity: true });
    const used = found.map(({ item, mi }) => {
      const compNoCity = this.model.linear(item.facts, { noCity: true });
      // The comp's price, plus what the model says the subject's differences (and the months since) are worth.
      const adjusted = Math.exp(Math.log(item.price) + subjectNoCity - compNoCity);
      const weight =
        1 /
        (1 +
          mi / 0.5 +
          4 * Math.abs(Math.log(item.facts.sqft / f.sqft)) +
          item.facts.monthsAgo / 6 +
          (item.facts.subType !== f.subType ? 0.5 : 0) +
          // An adjustment over 25 percent says the sale is not much like the subject.
          2 * Math.max(0, Math.abs(subjectNoCity - compNoCity) - 0.22));
      return {
        key: item.key,
        address: item.address,
        closePrice: item.price,
        closeDate: item.closeDate,
        sqft: item.facts.sqft,
        mi: Math.round(mi * 100) / 100,
        monthsAgo: Math.round(item.facts.monthsAgo * 10) / 10,
        adjusted: Math.round(adjusted),
        weight,
      };
    });
    used.sort((a, b) => b.weight - a.weight);
    return used.slice(0, MAX_COMPS);
  }

  value(f: Facts): Valuation {
    const same = (r: { key: string; address: string | null }) => r.key === f.key || (!!f.address && !!r.address && norm(r.address) === norm(f.address));
    const h = this.model.predict({ ...f, monthsAgo: 0 }, same);
    const lnHed = h.base + h.location;
    const comps = this.comps(f);
    let lnComps: number | null = null;
    let spread: number | null = null;
    if (comps.length >= MIN_COMPS) {
      const logs = comps.map((c) => Math.log(c.adjusted));
      lnComps = weightedMedian(logs, comps.map((c) => c.weight));
      spread = (quantile(logs, 0.75) ?? 0) - (quantile(logs, 0.25) ?? 0);
    }
    const wc = lnComps == null ? 0 : comps.length >= ENOUGH_COMPS ? BLEND.many : BLEND.few;
    const ln = lnComps == null ? lnHed : wc * lnComps + (1 - wc) * lnHed;
    const disagreement = lnComps == null ? null : Math.abs(lnComps - lnHed);
    const grade = gradeOf(comps.length, disagreement, spread, h.neighbors);
    return {
      value: roundValue(Math.exp(ln)),
      low: roundValue(Math.exp(ln - RANGE[grade])),
      high: roundValue(Math.exp(ln + RANGE[grade])),
      grade,
      compsValue: lnComps == null ? null : roundValue(Math.exp(lnComps)),
      hedonicValue: roundValue(Math.exp(lnHed)),
      comps,
      compSpread: spread,
      disagreement,
    };
  }

  timeFactor(group: Group, monthsAgo: number): number {
    return this.model.timeFactor(group, monthsAgo);
  }
}

export function gradeOf(n: number, disagreement: number | null, spread: number | null, neighbors: number): Grade {
  if (n >= 5 && disagreement != null && disagreement < 0.08 && (spread ?? 1) < 0.2) return "A";
  if (n >= MIN_COMPS && disagreement != null && disagreement < 0.15) return "B";
  if (n >= MIN_COMPS || neighbors >= 8) return "C";
  return "D";
}

function roundValue(v: number): number {
  return Math.round(v / 500) * 500;
}

function norm(a: string): string {
  return a.toLowerCase().replace(/[^a-z0-9]/g, "");
}
