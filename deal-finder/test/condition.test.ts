import { describe, expect, it } from "vitest";
import { groupOf, readCondition } from "../src/condition.ts";

const read = (remarks: string, specialConditions: string[] = []) => readCondition({ remarks, specialConditions });

describe("readCondition", () => {
  it("finds distress words", () => {
    const c = read("Sold AS-IS. Investor special, needs some work. Cash only.");
    expect(c.distress).toEqual(expect.arrayContaining(["as is", "investor special", "needs work", "cash only"]));
    expect(c.renovated).toEqual([]);
  });

  it("finds renovation words", () => {
    const c = read("Completely renovated in 2025: new roof, quartz counters, LVP throughout. Move-in ready!");
    expect(c.renovated).toEqual(expect.arrayContaining(["renovated", "new roof", "quartz or granite", "move-in ready"]));
    expect(c.distress).toEqual([]);
  });

  it("reads Real Estate Owned as a foreclosure, not an estate sale", () => {
    const c = read("", ["Real Estate Owned"]);
    expect(c.distress).toEqual(["foreclosure"]);
    expect(c.distressedSale).toBe(true);
  });

  it("reads an estate and a short sale from the sale conditions", () => {
    expect(read("", ["Estate"]).distress).toEqual(["estate sale"]);
    expect(read("", ["Short Sale"]).distress).toEqual(["short sale"]);
    expect(read("", ["Standard"]).distressedSale).toBe(false);
  });

  it("does not read 'needs nothing' as distress", () => {
    const c = read("Needs nothing, just bring your suitcase.");
    expect(c.distress).toEqual([]);
    expect(c.renovated).toContain("move-in ready");
  });

  it("does not fire on ordinary copy", () => {
    expect(read("Three bedroom home close to the beach with a screened porch.").distress).toEqual([]);
    expect(read("Real estate taxes are low.").distress).toEqual([]);
  });
});

describe("groupOf", () => {
  it("groups sub-types the way the CRM's comps do", () => {
    expect(groupOf("Detached")).toBe("detached");
    expect(groupOf("Townhouse")).toBe("condo");
    expect(groupOf("MobileHome")).toBe("manufactured");
    expect(groupOf("Triplex")).toBe("multi");
    expect(groupOf("Garage")).toBe("other");
  });
});
