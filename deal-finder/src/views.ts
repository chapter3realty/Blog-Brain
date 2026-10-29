import type { FlipDeal } from "./strategies/flip.ts";

/**
 * Two views of one run. The CRM view is everything: the values, the comps,
 * the profit and the risk. It is for staff inside the brokerage (the CCMLS
 * BBO licence) and never leaves the CRM.
 *
 * The public view is what the website may show under IDX: the listing's own
 * facts, the listing firm, and why it made the list in words about the
 * listing. No value, no after-repair value, no profit, no offer, no private
 * remarks. A seller who kept the listing off the internet is left out; a
 * seller who kept the street off shows the town only. The order is ours,
 * which is our professional judgment (CCMLS 16.10). test/views.test.ts holds
 * this view to that rule.
 */

export interface CrmDeal {
  rank: number;
  key: string;
  mlsNumber: string | null;
  address: string | null;
  city: string | null;
  zip: string | null;
  price: number;
  beds: number | null;
  baths: number | null;
  sqft: number | null;
  yearBuilt: number | null;
  photo: string | null;
  listOffice: string | null;
  listAgent: string | null;
  why: string[];
  asIsValue: number;
  asIsRange: [number, number];
  arv: number;
  arvRange: [number, number];
  arvCapped: boolean;
  grade: string;
  repairs: number;
  repairTier: string;
  repairsFrom: string;
  months: number;
  costs: FlipDeal["costs"];
  profit: number;
  cashIn: number;
  roi: number;
  annualRoi: number;
  maxOffer70: number;
  underAsIs: number;
  risk: FlipDeal["risk"];
  motivation: FlipDeal["motivation"];
  checks: string[];
  comps: Array<{ address: string | null; closePrice: number; closeDate: string | null; sqft: number; mi: number; adjusted: number }>;
}

export function crmView(deals: readonly FlipDeal[]): CrmDeal[] {
  return deals.map((d, i) => ({
    rank: i + 1,
    key: d.listing.key,
    mlsNumber: d.listing.mlsNumber,
    address: d.listing.address,
    city: d.listing.city,
    zip: d.listing.zip,
    price: d.listing.listPrice as number,
    beds: d.listing.beds,
    baths: d.listing.baths,
    sqft: d.listing.sqft,
    yearBuilt: d.listing.yearBuilt,
    photo: d.listing.photo,
    listOffice: d.listing.listOfficeName,
    listAgent: d.listing.listAgentName,
    why: d.why,
    asIsValue: d.asIs.value,
    asIsRange: [d.asIs.low, d.asIs.high],
    arv: d.arv.value,
    arvRange: [d.arv.low, d.arv.high],
    arvCapped: d.arvCapped,
    grade: d.grade,
    repairs: d.repairs,
    repairTier: d.tier,
    repairsFrom: d.repairsFrom,
    months: d.months,
    costs: d.costs,
    profit: d.profit,
    cashIn: d.cashIn,
    roi: d.roi,
    annualRoi: d.annualRoi,
    maxOffer70: d.maxOffer70,
    underAsIs: d.underAsIs,
    risk: d.risk,
    motivation: d.motivation,
    checks: d.checks,
    comps: d.arv.comps.map((c) => ({ address: c.address, closePrice: c.closePrice, closeDate: c.closeDate, sqft: c.sqft, mi: c.mi, adjusted: c.adjusted })),
  }));
}

export interface PublicDeal {
  rank: number;
  mlsNumber: string;
  /** The street address, or null when the seller withheld it (show the town). */
  address: string | null;
  city: string | null;
  zip: string | null;
  price: number;
  beds: number | null;
  baths: number | null;
  sqft: number | null;
  yearBuilt: number | null;
  photo: string | null;
  /** Required on every listing shown (CCMLS 16.14). */
  listingFirm: string;
  /** Plain words about the listing itself. Never a value or a profit. */
  reasons: string[];
}

/** Reason words the public may see: facts of the listing, not our numbers. */
function publicReasons(d: FlipDeal): string[] {
  const out: string[] = [];
  const dist = d.motivation.distress;
  if (dist.includes("foreclosure")) out.push("Bank-owned or foreclosure sale");
  if (dist.includes("short sale")) out.push("Short sale");
  if (dist.includes("estate sale")) out.push("Estate sale");
  if (dist.some((x) => ["as is", "investor special", "handyman", "fixer", "needs TLC", "needs work"].includes(x))) out.push("Listed as needing work");
  if (d.listing.yearBuilt && d.listing.yearBuilt <= 1990) out.push(`Built in ${d.listing.yearBuilt}`);
  if (d.motivation.priceCutPct != null && d.motivation.priceCutPct >= 5) out.push("Price reduced");
  if (!out.length) out.push("Picked by our agents for a renovation");
  return out;
}

export function publicView(deals: readonly FlipDeal[], max = 24): PublicDeal[] {
  const out: PublicDeal[] = [];
  for (const d of deals) {
    const l = d.listing;
    if (!l.displayOnline || !l.mlsNumber || !l.listOfficeName || l.listPrice == null) continue;
    // Only a deal with no open question goes on the website.
    if (d.checks.length || d.risk.p50 <= 0) continue;
    out.push({
      rank: out.length + 1,
      mlsNumber: l.mlsNumber,
      address: l.addressOnline ? l.address : null,
      city: l.city,
      zip: l.zip,
      price: l.listPrice,
      beds: l.beds,
      baths: l.baths,
      sqft: l.sqft,
      yearBuilt: l.yearBuilt,
      photo: l.photo,
      listingFirm: l.listOfficeName,
      reasons: publicReasons(d),
    });
    if (out.length >= max) break;
  }
  return out;
}
