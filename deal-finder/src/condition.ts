import type { Group, Listing } from "./types.ts";

/**
 * What a listing says about its condition and the sale, read from its words.
 * The value model learns what each signal is worth from the sales (a renovated
 * house sells for more, a distressed one for less), so these are facts about
 * the text, not weights.
 */

const DISTRESS: Array<[string, RegExp]> = [
  ["as is", /\bas[- ]is\b/i],
  ["investor special", /\binvestor(s)?\s+(special|opportunity|alert|dream)\b/i],
  ["handyman", /\bhandy\s?man\b/i],
  ["fixer", /\bfixer(\s?-?upper)?\b/i],
  ["needs TLC", /\btlc\b/i],
  ["needs work", /\bneeds?\s+(some\s+|a\s+lot\s+of\s+|major\s+|significant\s+)?(work|updating|updates|repairs?|rehab|renovation|love)\b/i],
  ["needs a roof", /\bneeds?\s+(a\s+)?(new\s+)?roof\b/i],
  ["cash only", /\bcash\s+(only|buyers?\s+only|offers?\s+only)\b/i],
  ["not financeable", /\b(will\s+not|won'?t|may\s+not|does\s+not)\s+(qualify|be\s+eligible)\s+for\s+(fha|va|conventional|financing)|\bnot\s+(fha|va)\s+(eligible|approvable|financeable)\b/i],
  ["estate sale", /\b(estate\s+sale|probate)\b/i],
  ["bring offers", /\bbring\s+(all\s+|your\s+)?offers\b/i],
  ["motivated seller", /\bmotivated\s+sellers?\b/i],
  ["foreclosure", /\b(foreclosure|bank[- ]owned|reo\b|real\s+estate\s+owned|hud\s+(home|owned))/i],
  ["short sale", /\bshort\s+sale\b/i],
  ["auction", /\bauction\b/i],
  ["damage", /\b(fire|water|storm|flood|hurricane|termite)\s+damage(d)?\b/i],
  ["mold", /\bmou?ld\b/i],
  ["foundation", /\bfoundation\s+(issues?|problems?|repairs?|work)\b/i],
  ["tear down", /\btear\s?-?down\b/i],
  ["gutted", /\b(gutted|down\s+to\s+the\s+studs)\b/i],
];

const RENOVATED: Array<[string, RegExp]> = [
  ["renovated", /\b(fully|completely|totally|beautifully|newly|recently)?\s*(renovated|remodeled|remodelled|rehabbed)\b/i],
  ["updated", /\b(fully|completely|recently|newly|tastefully)\s+updated\b/i],
  ["new roof", /\bnew(er)?\s+roof\b|\broof\s+(replaced|is\s+new)\b/i],
  ["new HVAC", /\bnew(er)?\s+(hvac|a\/?c|heat\s+pump|air\s+condition\w*)\b/i],
  ["new kitchen", /\bnew\s+kitchen\b/i],
  ["new floors", /\bnew\s+(flooring|floors|lvp|carpet)\b|\bluxury\s+vinyl\s+plank\b/i],
  ["quartz or granite", /\b(quartz|granite)\b/i],
  ["new windows", /\bnew\s+windows\b/i],
  ["move-in ready", /\b(move[- ]in\s+ready|turn\s?key)\b/i],
];

/** SpecialListingConditions words that mean a distressed sale. */
const DISTRESS_CONDITIONS: Array<[string, RegExp]> = [
  ["foreclosure", /real\s*estate\s*owned|reo|foreclos|bank\s*owned|hud\s*owned|notice\s*of\s*default/i],
  ["short sale", /short\s*sale/i],
  ["auction", /auction/i],
  // "Estate" alone or "Estate Sale", never the "Estate" in "Real Estate Owned".
  ["estate sale", /probate|(?<!real\s*)\bestate\b/i],
  ["bankruptcy", /bankruptcy/i],
];

export interface Condition {
  /** Distress words and sale conditions found, plain names, no repeats. */
  distress: string[];
  /** Renovation words found. */
  renovated: string[];
  /** The sale itself is distressed (a foreclosure, short sale, auction, estate, bankruptcy). */
  distressedSale: boolean;
}

export function readCondition(l: Pick<Listing, "remarks" | "specialConditions">): Condition {
  const text = l.remarks ?? "";
  const distress = new Set<string>();
  const renovated = new Set<string>();
  let distressedSale = false;
  for (const [name, re] of DISTRESS) if (re.test(text)) distress.add(name);
  for (const [name, re] of RENOVATED) if (re.test(text)) renovated.add(name);
  for (const c of l.specialConditions) {
    for (const [name, re] of DISTRESS_CONDITIONS) {
      if (re.test(c)) {
        distress.add(name);
        distressedSale = true;
      }
    }
  }
  // "needs nothing" or "no work needed" is a renovated signal, not a distress one.
  if (/\b(needs\s+nothing|no\s+work\s+needed|nothing\s+to\s+do)\b/i.test(text)) {
    distress.delete("needs work");
    renovated.add("move-in ready");
  }
  return { distress: [...distress], renovated: [...renovated], distressedSale };
}

/** The comparison group of a sub-type (the CRM's SUBTYPE_GROUPS, src/lib/mls/comps.ts). */
export function groupOf(subType: string | null): Group {
  switch (subType) {
    case "Detached":
      return "detached";
    case "Condominium":
    case "Apartment":
    case "Townhouse":
    case "SemiDetached":
      return "condo";
    case "ManufacturedHome":
    case "MobileHome":
    case "ManufacturedOnLand":
      return "manufactured";
    case "Duplex":
    case "Triplex":
    case "Quadruplex":
      return "multi";
    default:
      return "other";
  }
}
