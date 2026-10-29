import { normal, rng } from "../stats.ts";
import type { Listing, Market } from "../types.ts";

/**
 * A MADE-UP MARKET, for tests and for a first look at the tool before it has
 * the CRM's copy. Nothing here is a real house or a real price. The towns sit
 * where the real towns are so the distances behave, and every sale comes from
 * a known value rule plus noise, so a test can check that the value model
 * finds the rule again. A few under-priced houses are planted among the
 * listings so a test can check that the flip ranking finds them.
 */

const TOWNS: Array<{ city: string; lat: number; lon: number; psf: number }> = [
  { city: "Myrtle Beach", lat: 33.69, lon: -78.89, psf: 215 },
  { city: "Conway", lat: 33.836, lon: -79.047, psf: 165 },
  { city: "Surfside Beach", lat: 33.606, lon: -78.973, psf: 240 },
  { city: "North Myrtle Beach", lat: 33.816, lon: -78.68, psf: 250 },
  { city: "Little River", lat: 33.873, lon: -78.614, psf: 190 },
  { city: "Murrells Inlet", lat: 33.551, lon: -79.041, psf: 235 },
  { city: "Longs", lat: 33.93, lon: -78.73, psf: 160 },
];

const RENOVATED = ["Fully renovated with new roof and LVP floors.", "Completely remodeled kitchen with quartz counters.", "Move-in ready, new HVAC 2025."];
const DISTRESS = ["Sold as-is. Investor special.", "Needs work. Cash only.", "Handyman special, bring your tools.", "Estate sale, needs TLC."];
const PLAIN = ["Three bedroom home close to the beach.", "Quiet street, fenced yard.", "Open floor plan, screened porch.", "Great location near shopping."];

export interface SyntheticOptions {
  seed?: number;
  sales?: number;
  listings?: number;
  bargains?: number;
  asOf?: string;
}

/** The value rule the made-up market follows (today's dollars). Exported so tests can compare. */
export function trueValue(l: Listing, monthsAgo: number, asOf: string): number {
  const town = TOWNS.find((t) => t.city === l.city) ?? TOWNS[0];
  const age = Number(asOf.slice(0, 4)) - (l.yearBuilt ?? 2000);
  const ren = /renovated|remodeled|move-in ready/i.test(l.remarks) ? 1.12 : 1;
  const dis = /as-is|needs work|handyman|tlc/i.test(l.remarks) ? 0.8 : 1;
  const local = 1 + 0.12 * Math.sin((l.lat ?? 0) * 90) * Math.cos((l.lon ?? 0) * 70);
  const sub = l.subType === "Condominium" ? 0.85 : l.subType === "ManufacturedHome" ? 0.6 : 1;
  const size = (l.sqft ?? 1500) ** 0.88 * 1500 ** 0.12;
  const time = Math.exp(-0.035 * (monthsAgo / 12));
  return town.psf * size * Math.exp(-0.005 * age) * ren * dis * (l.pool ? 1.05 : 1) * (l.waterfront ? 1.25 : 1) * local * sub * time;
}

function day(asOf: string, monthsAgo: number): string {
  const d = new Date(asOf + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() - Math.round(monthsAgo * 30.4375));
  return d.toISOString().slice(0, 10);
}

export function syntheticMarket(o: SyntheticOptions = {}): Market {
  const asOf = o.asOf ?? "2026-10-29";
  const rand = rng(o.seed ?? 7);
  const pick = <T>(xs: readonly T[]) => xs[Math.floor(rand() * xs.length)];
  let id = 0;
  const make = (status: string, monthsAgo: number): Listing => {
    const town = pick(TOWNS);
    const r = rand();
    const subType = r < 0.68 ? "Detached" : r < 0.92 ? "Condominium" : "ManufacturedHome";
    const sqft = Math.round(subType === "Condominium" ? 700 + rand() * 1100 : 1000 + rand() * 1900);
    const yearBuilt = Math.round(1965 + rand() * 60);
    const words = rand();
    const remarks = words < 0.18 ? pick(RENOVATED) : words < 0.28 ? pick(DISTRESS) : pick(PLAIN);
    id++;
    return {
      key: `SYN${id}`,
      mlsNumber: String(4000000 + id),
      status,
      propertyType: "Residential",
      subType,
      listPrice: null,
      originalListPrice: null,
      closePrice: null,
      closeDate: status === "Closed" ? day(asOf, monthsAgo) : null,
      listedOn: day(asOf, monthsAgo + 2),
      daysOnMarket: Math.round(20 + rand() * 120),
      address: `${100 + id} Example St`,
      city: town.city,
      zip: "29577",
      subdivision: null,
      lat: town.lat + (rand() - 0.5) * 0.08,
      lon: town.lon + (rand() - 0.5) * 0.08,
      beds: Math.max(1, Math.round(sqft / 600)),
      baths: Math.max(1, Math.round(sqft / 800)),
      sqft,
      lotAcres: subType === "Condominium" ? null : Math.round((0.1 + rand() * 0.5) * 100) / 100,
      yearBuilt,
      waterfront: rand() < 0.05,
      pool: rand() < 0.12,
      garageSpaces: subType === "Detached" ? Math.round(rand() * 2) : 0,
      stories: rand() < 0.3 ? 2 : 1,
      hoaMonthly: subType === "Condominium" ? Math.round(250 + rand() * 300) : null,
      taxAnnual: null,
      specialConditions: [],
      remarks,
      listOfficeName: "Example Realty",
      listAgentName: "Example Agent",
      photo: null,
      photosCount: 20,
      displayOnline: true,
      addressOnline: true,
    };
  };
  const sold: Listing[] = [];
  for (let i = 0; i < (o.sales ?? 5000); i++) {
    const monthsAgo = rand() * 24;
    const l = make("Closed", monthsAgo);
    const v = trueValue(l, monthsAgo, asOf);
    l.closePrice = Math.round((v * Math.exp(0.07 * normal(rand))) / 100) * 100;
    l.listPrice = Math.round((l.closePrice * (1 + 0.03 * rand())) / 100) * 100;
    l.originalListPrice = l.listPrice;
    sold.push(l);
  }
  const active: Listing[] = [];
  for (let i = 0; i < (o.listings ?? 500); i++) {
    const l = make("Active", 0);
    l.listPrice = Math.round((trueValue(l, 0, asOf) * Math.exp(0.05 + 0.06 * normal(rand))) / 100) * 100;
    l.originalListPrice = l.listPrice;
    active.push(l);
  }
  // The planted bargains: older detached houses listed as needing work, priced well under their value.
  for (let i = 0; i < (o.bargains ?? 8); i++) {
    const l = make("Active", 0);
    l.subType = "Detached";
    l.sqft = 1400 + Math.round(rand() * 600);
    l.yearBuilt = 1972 + Math.round(rand() * 10);
    l.remarks = "Sold as-is. Investor special.";
    l.specialConditions = ["Real Estate Owned"];
    l.key = `BARGAIN${i}`;
    l.listPrice = Math.round((trueValue(l, 0, asOf) * 0.62) / 100) * 100;
    l.originalListPrice = Math.round(l.listPrice * 1.1);
    active.push(l);
  }
  return { active, sold, asOf, source: "synthetic" };
}
