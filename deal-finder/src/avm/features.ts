import { groupOf, readCondition } from "../condition.ts";
import type { Group, Listing } from "../types.ts";

/**
 * The facts the value model reads from a listing. A missing fact is left null
 * here and filled with the training median when the model is fitted, so a
 * listing without a pool field is priced as a typical house, not a house
 * without a pool.
 */
export interface Facts {
  key: string;
  address: string | null;
  group: Group;
  subType: string | null;
  city: string | null;
  lat: number | null;
  lon: number | null;
  sqft: number;
  age: number | null;
  beds: number | null;
  baths: number | null;
  lotAcres: number | null;
  waterfront: number | null;
  pool: number | null;
  garage: number | null;
  multiStory: number | null;
  hoaMonthly: number | null;
  renovated: number;
  distress: number;
  distressedSale: number;
  /** Whole months between the sale and the model's "today"; 0 for a listing for sale now. */
  monthsAgo: number;
}

/** Words that describe the sale's pricing, not the house: they do not count as distress in the model. */
const PRICING_WORDS = new Set(["motivated seller", "bring offers"]);

export function monthsBetween(from: string, to: string): number {
  const a = new Date(from + "T00:00:00Z");
  const b = new Date(to + "T00:00:00Z");
  return Math.max(0, (b.getTime() - a.getTime()) / (30.4375 * 86400000));
}

/** Null for a listing the model cannot price: no living area, or not a home. */
export function factsOf(l: Listing, asOf: string): Facts | null {
  if (l.sqft == null || l.sqft < 300 || l.sqft > 15000) return null;
  if (l.propertyType && l.propertyType !== "Residential") return null;
  const group = groupOf(l.subType);
  if (group === "other") return null;
  const cond = readCondition(l);
  const asOfYear = Number(asOf.slice(0, 4));
  const age = l.yearBuilt && l.yearBuilt > 1800 && l.yearBuilt <= asOfYear + 1 ? Math.max(0, asOfYear - l.yearBuilt) : null;
  const flag = (b: boolean | null) => (b == null ? null : b ? 1 : 0);
  return {
    key: l.key,
    address: l.address,
    group,
    subType: l.subType,
    city: l.city ? l.city.trim().toLowerCase() : null,
    lat: l.lat,
    lon: l.lon,
    sqft: l.sqft,
    age,
    beds: l.beds,
    baths: l.baths,
    lotAcres: l.lotAcres,
    waterfront: flag(l.waterfront),
    pool: flag(l.pool),
    garage: l.garageSpaces,
    multiStory: l.stories == null ? null : l.stories > 1 ? 1 : 0,
    hoaMonthly: l.hoaMonthly,
    renovated: cond.renovated.length ? 1 : 0,
    distress: cond.distress.some((d) => !PRICING_WORDS.has(d)) ? 1 : 0,
    distressedSale: cond.distressedSale ? 1 : 0,
    monthsAgo: l.status === "Closed" && l.closeDate ? monthsBetween(l.closeDate, asOf) : 0,
  };
}

/** The same house, as it would be once fixed: renovated, no distress, a normal sale. */
export function afterRepair(f: Facts): Facts {
  return { ...f, renovated: 1, distress: 0, distressedSale: 0 };
}
