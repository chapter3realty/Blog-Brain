import { describe, expect, it } from "vitest";
import { buildAvm } from "../src/avm/build.ts";
import { listingOf } from "../src/source/replica.ts";
import { syntheticMarket } from "../src/source/synthetic.ts";
import { findFlips } from "../src/strategies/flip.ts";
import { crmView, publicView } from "../src/views.ts";

const market = syntheticMarket({ seed: 3 });
market.active[0].remarks = "Seller will look at offers. PRIVATE-NOTE-FOR-AGENTS";
const avm = buildAvm(market.sold, market.asOf);
const deals = findFlips(market, avm, { top: 200 }).deals;

describe("the public view (website, IDX)", () => {
  const pub = publicView(deals, 200);

  it("carries no value, profit or offer of any kind", () => {
    const keys = new Set(pub.flatMap((d) => Object.keys(d)));
    for (const k of keys) expect(k).not.toMatch(/value|arv|avm|profit|offer|estimate|repair|risk|score|roi|comps|grade|under/i);
    // Each listing against its own numbers (another house's price may equal this one's value by chance).
    for (const p of pub) {
      const d = deals.find((x) => x.listing.mlsNumber === p.mlsNumber)!;
      const shown = Object.entries(p).filter(([k]) => k !== "price").map(([, v]) => v);
      for (const secret of [d.arv.value, d.asIs.value, d.profit, d.maxOffer70, d.repairs]) expect(shown).not.toContain(secret);
    }
  });

  it("never carries remarks", () => {
    expect(JSON.stringify(pub)).not.toContain("PRIVATE-NOTE-FOR-AGENTS");
  });

  it("names the listing firm on every listing", () => {
    for (const d of pub) expect(d.listingFirm.length).toBeGreaterThan(0);
  });

  it("leaves out a listing the seller kept off the internet, and hides a withheld street", () => {
    const [a, b] = deals;
    const hidden = publicView([{ ...a, listing: { ...a.listing, displayOnline: false } }]);
    expect(hidden).toEqual([]);
    const noStreet = publicView([{ ...b, checks: [], risk: { ...b.risk, p50: 1 }, listing: { ...b.listing, addressOnline: false } }]);
    expect(noStreet[0].address).toBeNull();
    expect(noStreet[0].city).toBe(b.listing.city);
  });

  it("leaves out a deal with an open check", () => {
    const d = deals[0];
    expect(publicView([{ ...d, checks: ["Check the size."] }])).toEqual([]);
  });
});

describe("the CRM view", () => {
  it("carries the values, the comps and the risk", () => {
    const c = crmView(deals.slice(0, 1))[0];
    expect(c.arv).toBeGreaterThan(0);
    expect(c.asIsValue).toBeGreaterThan(0);
    expect(c.comps.length).toBeGreaterThan(0);
    expect(c.risk.pProfit).toBeGreaterThanOrEqual(0);
  });
});

describe("listingOf (reading a replica row)", () => {
  it("reads raw fields, an HOA fee by quarter, and the display flags", () => {
    const l = listingOf({
      listing_key: "K1",
      listing_id: "2512345",
      standard_status: "Active",
      property_type: "Residential",
      property_sub_type: "Detached",
      list_price: 199000,
      living_area: "1450",
      special: ["Real Estate Owned"],
      pool: "true",
      hoa: "300",
      hoa_freq: "Quarterly",
      display_online: "false",
      address_online: null,
      public_remarks: "As is.",
      private_remarks: "Lockbox on back door.",
    });
    expect(l.sqft).toBe(1450);
    expect(l.specialConditions).toEqual(["Real Estate Owned"]);
    expect(l.pool).toBe(true);
    expect(l.hoaMonthly).toBe(100);
    expect(l.displayOnline).toBe(false);
    expect(l.addressOnline).toBe(true);
    expect(l.remarks).toContain("Lockbox");
  });

  it("reads sale conditions sent as one string", () => {
    expect(listingOf({ listing_key: "K2", special: "Short Sale, Standard" }).specialConditions).toEqual(["Short Sale", "Standard"]);
  });
});
