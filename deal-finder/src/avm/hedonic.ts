import { Grid } from "../geo.ts";
import { median, ridge } from "../stats.ts";
import type { Group } from "../types.ts";
import type { Facts } from "./features.ts";

/**
 * THE HEDONIC MODEL. For each group of homes (detached, condo, manufactured),
 * the log of the sale price is fitted as a sum of what each fact adds:
 * size, age, beds, baths, lot, water, pool, garage, stories, HOA dues, the
 * renovated and distress words, the town, and the quarter it sold in. The
 * quarter terms are the market's own price index with the houses held equal,
 * so a sale from last year is brought to today by the market's change, not by
 * a guess. Ridge (a small penalty on every term) keeps a town with few sales
 * from swinging.
 *
 * Then the location: what the model misses near a house (a street, a view,
 * a school line) shows in the errors of the sales around it. The prediction
 * adds the weighted average error of the nearest sales, shrunk toward zero
 * when there are few.
 */

const NUMERIC = ["lnSqft", "age", "age2", "beds", "baths", "lnLot", "waterfront", "pool", "garage", "multiStory", "hoa", "renovated", "distress", "distressedSale"] as const;
type NumericName = (typeof NUMERIC)[number];

const QUARTERS = 8;
const MIN_CITY_SALES = 40;
const LAMBDA = 2;
const MIN_GROUP_SALES = 150;

export interface Sale {
  facts: Facts;
  price: number;
}

interface Part {
  group: Group | "all";
  impute: Record<NumericName, number>;
  mu: number[];
  sd: number[];
  cities: string[];
  beta: number[];
  /** The fitted sales with their errors, for the location step. */
  resid: Array<{ key: string; address: string | null; lat: number | null; lon: number | null; r: number; monthsAgo: number }>;
  grid: Grid<{ key: string; address: string | null; lat: number | null; lon: number | null; r: number; monthsAgo: number }>;
  n: number;
}

function raw(f: Facts, imp: Record<NumericName, number>): Record<NumericName, number> {
  const age = f.age ?? imp.age;
  const v = (x: number | null, k: NumericName) => (x == null ? imp[k] : x);
  return {
    lnSqft: Math.log(f.sqft),
    age: Math.min(age, 100) / 10,
    age2: (Math.min(age, 100) / 10) ** 2,
    beds: Math.min(v(f.beds, "beds"), 7),
    baths: Math.min(v(f.baths, "baths"), 7),
    lnLot: Math.log1p(Math.min(v(f.lotAcres, "lnLot"), 20)),
    waterfront: v(f.waterfront, "waterfront"),
    pool: v(f.pool, "pool"),
    garage: Math.min(v(f.garage, "garage"), 4),
    multiStory: v(f.multiStory, "multiStory"),
    hoa: Math.min(v(f.hoaMonthly, "hoa"), 2000) / 100,
    renovated: f.renovated,
    distress: f.distress,
    distressedSale: f.distressedSale,
  };
}

function imputeFrom(sales: readonly Sale[]): Record<NumericName, number> {
  const med = (pick: (f: Facts) => number | null, fallback: number) => {
    const xs = sales.map((s) => pick(s.facts)).filter((x): x is number => x != null);
    return median(xs) ?? fallback;
  };
  return {
    lnSqft: 0,
    age: med((f) => f.age, 20),
    age2: 0,
    beds: med((f) => f.beds, 3),
    baths: med((f) => f.baths, 2),
    lnLot: med((f) => f.lotAcres, 0.2),
    waterfront: med((f) => f.waterfront, 0),
    pool: med((f) => f.pool, 0),
    garage: med((f) => f.garage, 0),
    multiStory: med((f) => f.multiStory, 0),
    hoa: med((f) => f.hoaMonthly, 0),
    renovated: 0,
    distress: 0,
    distressedSale: 0,
  };
}

function rowOf(part: Pick<Part, "impute" | "cities">, f: Facts, opts: { noCity?: boolean } = {}): number[] {
  const r = raw(f, part.impute);
  const row = [1, ...NUMERIC.map((k) => r[k])];
  const q = Math.min(QUARTERS - 1, Math.floor(f.monthsAgo / 3));
  for (let i = 1; i < QUARTERS; i++) row.push(q === i ? 1 : 0);
  for (const c of part.cities) row.push(!opts.noCity && f.city === c ? 1 : 0);
  return row;
}

function standardize(row: number[], mu: number[], sd: number[]): number[] {
  return row.map((x, i) => (i === 0 ? 1 : (x - mu[i]) / sd[i]));
}

/** Sales a model should not learn from: typos, lots sold as homes, give-aways between relatives. */
export function trimmed(sales: readonly Sale[]): Sale[] {
  const ok = sales.filter((s) => s.price >= 10000 && s.price <= 20000000);
  const psf = ok.map((s) => s.price / s.facts.sqft);
  const sorted = [...psf].sort((a, b) => a - b);
  const lo = sorted[Math.floor(sorted.length * 0.01)] ?? 0;
  const hi = sorted[Math.floor(sorted.length * 0.99)] ?? Infinity;
  return ok.filter((s, i) => psf[i] >= lo && psf[i] <= hi);
}

function fitPart(group: Group | "all", sales: readonly Sale[]): Part {
  const impute = imputeFrom(sales);
  const counts = new Map<string, number>();
  for (const s of sales) if (s.facts.city) counts.set(s.facts.city, (counts.get(s.facts.city) ?? 0) + 1);
  const cities = [...counts.entries()].filter(([, n]) => n >= MIN_CITY_SALES).sort((a, b) => b[1] - a[1]).map(([c]) => c);
  const rows = sales.map((s) => rowOf({ impute, cities }, s.facts));
  const p = rows[0].length;
  const mu = new Array<number>(p).fill(0);
  const sd = new Array<number>(p).fill(1);
  for (let j = 1; j < p; j++) {
    let m = 0;
    for (const r of rows) m += r[j];
    m /= rows.length;
    let v = 0;
    for (const r of rows) v += (r[j] - m) ** 2;
    mu[j] = m;
    sd[j] = Math.sqrt(v / rows.length) || 1;
  }
  const X = rows.map((r) => standardize(r, mu, sd));
  const y = sales.map((s) => Math.log(s.price));
  const beta = ridge(X, y, LAMBDA);
  const resid = sales.map((s, i) => ({
    key: s.facts.key,
    address: s.facts.address,
    lat: s.facts.lat,
    lon: s.facts.lon,
    r: y[i] - dot(X[i], beta),
    monthsAgo: s.facts.monthsAgo,
  }));
  return { group, impute, mu, sd, cities, beta, resid, grid: new Grid(resid), n: sales.length };
}

function dot(a: readonly number[], b: readonly number[]): number {
  let t = 0;
  for (let i = 0; i < a.length; i++) t += a[i] * b[i];
  return t;
}

export interface HedonicPrediction {
  /** ln price from the facts alone. */
  base: number;
  /** ln adjustment from the errors of nearby sales. */
  location: number;
  /** How many nearby sales the location step used. */
  neighbors: number;
}

export class Hedonic {
  private parts = new Map<Group | "all", Part>();

  constructor(sales: readonly Sale[]) {
    const clean = trimmed(sales);
    if (clean.length < 30) throw new Error(`Too few sales to fit the value model (${clean.length}).`);
    this.parts.set("all", fitPart("all", clean));
    const groups = new Set(clean.map((s) => s.facts.group));
    for (const g of groups) {
      const mine = clean.filter((s) => s.facts.group === g);
      if (mine.length >= MIN_GROUP_SALES) this.parts.set(g, fitPart(g, mine));
    }
  }

  private part(g: Group): Part {
    return this.parts.get(g) ?? (this.parts.get("all") as Part);
  }

  /** The model's ln price for these facts, the town included or not. */
  linear(f: Facts, opts: { noCity?: boolean } = {}): number {
    const p = this.part(f.group);
    return dot(standardize(rowOf(p, f, opts), p.mu, p.sd), p.beta);
  }

  /** Full prediction: the facts, then the nearby sales' errors. `exclude` drops the subject's own sales. */
  predict(f: Facts, exclude: (k: { key: string; address: string | null }) => boolean = () => false): HedonicPrediction {
    const p = this.part(f.group);
    const base = this.linear(f);
    if (f.lat == null || f.lon == null) return { base, location: 0, neighbors: 0 };
    let near: Array<{ item: Part["resid"][number]; mi: number }> = [];
    for (const radius of [0.5, 1, 2, 3]) {
      near = p.grid.near(f.lat, f.lon, radius).filter((n) => !exclude(n.item));
      if (near.length >= 8) break;
    }
    near.sort((a, b) => a.mi - b.mi);
    const use = near.slice(0, 12);
    let sw = 0;
    let swr = 0;
    for (const n of use) {
      const w = (1 / (0.25 + n.mi)) * Math.exp(-n.item.monthsAgo / 18);
      sw += w;
      swr += w * n.item.r;
    }
    // The shrink: with few or distant neighbours the adjustment leans toward zero.
    const location = sw > 0 ? swr / (sw + 1.5) : 0;
    return { base, location, neighbors: use.length };
  }

  /** The market's own index: what one dollar of a sale `monthsAgo` back is worth today, homes held equal. */
  timeFactor(group: Group, monthsAgo: number): number {
    const p = this.part(group);
    const q = Math.min(QUARTERS - 1, Math.floor(monthsAgo / 3));
    if (q === 0) return 1;
    const idx = 1 + NUMERIC.length + (q - 1);
    return Math.exp(-p.beta[idx] / p.sd[idx]);
  }

  /** What each fact is worth, in percent, for the report (one standard step of each, read from the fit). */
  describe(group: Group): { n: number; terms: Record<string, number> } {
    const p = this.part(group);
    const terms: Record<string, number> = {};
    NUMERIC.forEach((k, i) => {
      terms[k] = p.beta[i + 1] / p.sd[i + 1];
    });
    for (let q = 1; q < QUARTERS; q++) terms[`quarter-${q}`] = p.beta[NUMERIC.length + q] / p.sd[NUMERIC.length + q];
    return { n: p.n, terms };
  }
}
