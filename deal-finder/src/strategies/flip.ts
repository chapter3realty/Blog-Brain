import { readCondition } from "../condition.ts";
import { median, normal, quantile, rng } from "../stats.ts";
import type { Group, Listing, Market } from "../types.ts";
import type { Avm, Grade, Valuation } from "../avm/avm.ts";
import { RANGE } from "../avm/avm.ts";
import { afterRepair, factsOf, type Facts } from "../avm/features.ts";

/**
 * FIX AND FLIP. Every active home in the copy, not only the ones with a
 * distress word: the value model can price them all, so the search no
 * longer depends on a seller saying "investor special".
 *
 * For each home:
 *   1. As-is value: the value model on the house as listed.
 *   2. After-repair value (ARV): the same house with the renovated words on
 *      and the distress words off. The model learned from the sales what a
 *      renovated house sells for against a tired one in each market. It is
 *      capped at what the dearest 10 percent of its nearby sales of its size
 *      brought (time-adjusted), so a fixed-up house is never priced above
 *      its street.
 *   3. Repairs: a dollars-a-square-foot tier (light, medium, heavy) from the
 *      house's age, its distress words and its sale type, plus a reserve.
 *      The agent's own figures, or the AI's photo check, replace it.
 *   4. Costs: buying, holding (the 6 percent assessment tax, insurance,
 *      utilities, HOA dues, the agent's cost of money), and selling (the
 *      commission, closing and the state deed fee, $1.85 for each $500).
 *   5. Risk: 2,000 simulated outcomes with the ARV spread by the value
 *      model's measured error, repairs that run over, and extra months. The
 *      rank is by the profit in the worst fifth of outcomes (the 20th
 *      percentile), so a sure $30,000 ranks above a coin toss for $60,000.
 *
 * Asking price is the purchase price: the list never counts on a discount.
 * The 70 percent rule's highest offer is shown beside it for the agent.
 */

export type Tier = "light" | "medium" | "heavy";

export interface FlipSettings {
  minPrice: number;
  maxPrice: number;
  groups: Group[];
  buyClosingPct: number;
  sellCommissionPct: number;
  sellClosingPct: number;
  /** County tax while held: 6 percent assessment x 201.0 mills (Horry County district 100, 2026) = 1.206 percent a year. */
  taxPctYear: number;
  insuranceMonthly: number;
  utilitiesMonthly: number;
  /** The agent's own cost of money, percent a year on the cash in. 0 means cash. */
  costOfMoneyPct: number;
  repairPerSqft: Record<Tier, number>;
  rehabMonths: Record<Tier, number>;
  reservePct: number;
  simulations: number;
  top: number;
  /** Repair figures that replace the tier's, by listing key (the agent's, or the AI's photo check). */
  repairs: Record<string, number>;
}

export const FLIP_DEFAULTS: FlipSettings = {
  minPrice: 40000,
  maxPrice: 750000,
  groups: ["detached", "condo", "manufactured", "multi"],
  buyClosingPct: 1.5,
  sellCommissionPct: 5.5,
  sellClosingPct: 1,
  taxPctYear: 1.206,
  insuranceMonthly: 225,
  utilitiesMonthly: 175,
  costOfMoneyPct: 0,
  repairPerSqft: { light: 15, medium: 35, heavy: 60 },
  rehabMonths: { light: 1, medium: 2, heavy: 4 },
  reservePct: 10,
  simulations: 2000,
  top: 50,
  repairs: {},
};

export interface FlipDeal {
  listing: Listing;
  why: string[];
  tier: Tier;
  asIs: Valuation;
  arv: Valuation;
  arvCapped: boolean;
  repairs: number;
  repairsFrom: "tier" | "override";
  months: number;
  costs: { buy: number; hold: number; money: number; sell: number; deedFee: number };
  profit: number;
  cashIn: number;
  roi: number;
  annualRoi: number;
  maxOffer70: number;
  /** The asking price against the as-is value, percent under (negative means over). */
  underAsIs: number;
  risk: { pProfit: number; p10: number; p20: number; p50: number; p90: number };
  motivation: { priceCutPct: number | null; daysOnMarket: number | null; marketDays: number | null; distress: string[] };
  /** Reasons to look twice before trusting the numbers. Empty when none. */
  checks: string[];
  grade: Grade;
}

export function deedFee(price: number): number {
  return Math.ceil(price / 500) * 1.85;
}

export function repairTier(f: Facts, l: Listing): Tier {
  const cond = readCondition(l);
  let p = 0;
  if (cond.distressedSale) p += 1;
  if (f.distress) p += 1;
  if (cond.distress.some((d) => ["damage", "foundation", "gutted", "tear down", "mold", "needs a roof"].includes(d))) p += 1;
  if (f.age != null) p += f.age >= 45 ? 1 : f.age >= 25 ? 0.5 : 0;
  if (f.renovated && !f.distress) p -= 1;
  return p >= 2.5 ? "heavy" : p >= 1 ? "medium" : "light";
}

/** Middle days on market of the sales in each town and group, for the months to sell. */
function marketDays(sold: readonly Listing[], asOf: string): (f: Facts) => number | null {
  const by = new Map<string, number[]>();
  for (const l of sold) {
    if (l.daysOnMarket == null || !l.closeDate) continue;
    const f = factsOf(l, asOf);
    if (!f || f.monthsAgo > 12) continue;
    for (const k of [`${f.group}|${f.city}`, f.group]) {
      const list = by.get(k);
      if (list) list.push(l.daysOnMarket);
      else by.set(k, [l.daysOnMarket]);
    }
  }
  return (f) => {
    const local = by.get(`${f.group}|${f.city}`);
    if (local && local.length >= 20) return median(local);
    return median(by.get(f.group) ?? []);
  };
}

export function findFlips(market: Market, avm: Avm, settings: Partial<FlipSettings> = {}): { checked: number; valued: number; deals: FlipDeal[] } {
  const s: FlipSettings = { ...FLIP_DEFAULTS, ...settings, repairs: { ...FLIP_DEFAULTS.repairs, ...(settings.repairs ?? {}) } };
  const days = marketDays(market.sold, market.asOf);
  const deals: FlipDeal[] = [];
  let checked = 0;
  for (const l of market.active) {
    if (l.status !== "Active" || l.listPrice == null) continue;
    if (l.listPrice < s.minPrice || l.listPrice > s.maxPrice) continue;
    const f = factsOf(l, market.asOf);
    if (!f || !s.groups.includes(f.group) || f.lat == null) continue;
    checked++;
    const deal = flipOne(l, f, avm, s, days(f));
    if (deal) deals.push(deal);
  }
  deals.sort((a, b) => (a.checks.length ? 1 : 0) - (b.checks.length ? 1 : 0) || b.risk.p20 - a.risk.p20 || b.risk.p50 - a.risk.p50);
  return { checked, valued: deals.length, deals: deals.slice(0, s.top) };
}

export function flipOne(l: Listing, f: Facts, avm: Avm, s: FlipSettings, marketDom: number | null): FlipDeal | null {
  const price = l.listPrice as number;
  const cond = readCondition(l);
  const asIs = avm.value(f);
  const arv = avm.value(afterRepair(f));
  // The ceiling: the dearest tenth of nearby sales of this size, brought to today.
  let arvCapped = false;
  if (arv.comps.length >= 5) {
    const ceilings = arv.comps.map((c) => (c.closePrice * avm.timeFactor(f.group, c.monthsAgo) * f.sqft) / c.sqft);
    const cap = quantile(ceilings, 0.9) as number;
    if (arv.value > cap) {
      const k = cap / arv.value;
      arv.value = Math.round(cap / 500) * 500;
      arv.low = Math.round((arv.low * k) / 500) * 500;
      arv.high = Math.round((arv.high * k) / 500) * 500;
      arvCapped = true;
    }
  }
  // The finished house is never worth less than the house as it stands.
  if (arv.value < asIs.value) arv.value = asIs.value;

  const tier = repairTier(f, l);
  const override = s.repairs[l.key];
  const repairs = override ?? Math.round((f.sqft * s.repairPerSqft[tier] * (1 + s.reservePct / 100)) / 500) * 500;
  const sellMonths = (marketDom ?? 90) / 30.4 + 1;
  const months = Math.round((s.rehabMonths[tier] + sellMonths) * 10) / 10;

  const math = (arvV: number, repairsV: number, monthsV: number) => {
    const buy = (price * s.buyClosingPct) / 100;
    const holdMonthly = (price * s.taxPctYear) / 100 / 12 + s.insuranceMonthly + s.utilitiesMonthly + (l.hoaMonthly ?? 0);
    const hold = holdMonthly * monthsV;
    const money = ((price + repairsV) * s.costOfMoneyPct) / 100 / 12 * monthsV;
    const fee = deedFee(arvV);
    const sell = (arvV * (s.sellCommissionPct + s.sellClosingPct)) / 100 + fee;
    const cashIn = price + repairsV + buy + hold + money;
    return { buy, hold, money, sell, deedFee: fee, cashIn, profit: arvV - cashIn - sell };
  };
  const m = math(arv.value, repairs, months);

  // The simulation: the same seed for every house, so two runs on the same copy rank the same.
  const rand = rng(hashKey(l.key));
  const sigma = RANGE[arv.grade] / 1.2816;
  const outcomes: number[] = [];
  for (let i = 0; i < s.simulations; i++) {
    const arvDraw = arv.value * Math.exp(sigma * normal(rand));
    const repairDraw = repairs * Math.exp(0.3 * normal(rand) + 0.05);
    const monthsDraw = months + rand() * 2;
    outcomes.push(math(arvDraw, repairDraw, monthsDraw).profit);
  }
  const q = (p: number) => Math.round((quantile(outcomes, p) as number) / 100) * 100;

  const checks: string[] = [];
  const under = 1 - price / asIs.value;
  if (under > 0.6) checks.push("Asking price is far under the as-is value: it may be an auction's opening bid, a typo in the price or size, or a house that needs everything.");
  if (cond.distress.includes("auction")) checks.push("Auction: the asking price may be an opening bid.");
  if (arv.grade === "D") checks.push("Few similar sales nearby: the values are rough.");
  if (l.sqft != null && l.sqft < 500) checks.push("Under 500 square feet: check the size.");

  const distressWhy = cond.distress.filter((d) => !["motivated seller", "bring offers"].includes(d));
  const why: string[] = [];
  if (under > 0.05) why.push(`${Math.round(under * 100)}% under its as-is value`);
  if (distressWhy.length) why.push(distressWhy.join(", "));
  if (f.age != null && f.age >= 35) why.push(`built ${l.yearBuilt}`);
  const cut = l.originalListPrice && l.originalListPrice > price ? (l.originalListPrice - price) / l.originalListPrice : null;
  if (cut && cut >= 0.05) why.push(`price cut ${Math.round(cut * 100)}%`);
  if (l.daysOnMarket != null && marketDom && l.daysOnMarket > 2 * marketDom) why.push(`${l.daysOnMarket} days listed`);

  return {
    listing: l,
    why,
    tier,
    asIs,
    arv,
    arvCapped,
    repairs,
    repairsFrom: override != null ? "override" : "tier",
    months,
    costs: { buy: Math.round(m.buy), hold: Math.round(m.hold), money: Math.round(m.money), sell: Math.round(m.sell), deedFee: Math.round(m.deedFee * 100) / 100 },
    profit: Math.round(m.profit),
    cashIn: Math.round(m.cashIn),
    roi: Math.round((m.profit / m.cashIn) * 1000) / 10,
    annualRoi: m.profit > -m.cashIn ? Math.round(((1 + m.profit / m.cashIn) ** (12 / months) - 1) * 1000) / 10 : -100,
    maxOffer70: Math.round((arv.value * 0.7 - repairs) / 1000) * 1000,
    underAsIs: Math.round(under * 1000) / 10,
    risk: { pProfit: Math.round((outcomes.filter((o) => o > 0).length / outcomes.length) * 1000) / 10, p10: q(0.1), p20: q(0.2), p50: q(0.5), p90: q(0.9) },
    motivation: { priceCutPct: cut == null ? null : Math.round(cut * 1000) / 10, daysOnMarket: l.daysOnMarket, marketDays: marketDom, distress: cond.distress },
    checks,
    grade: arv.grade,
  };
}

function hashKey(k: string): number {
  let h = 2166136261;
  for (let i = 0; i < k.length; i++) h = Math.imul(h ^ k.charCodeAt(i), 16777619);
  return h >>> 0;
}
