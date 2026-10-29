import type { Listing } from "../types.ts";
import { Avm } from "./avm.ts";
import { factsOf } from "./features.ts";

/** The value model, fitted on every sale in the copy that it can read. */
export function buildAvm(sold: readonly Listing[], asOf: string): Avm {
  const sales = [];
  for (const l of sold) {
    if (l.status !== "Closed" || !l.closePrice || !l.closeDate || l.closeDate > asOf) continue;
    const facts = factsOf(l, asOf);
    if (facts) sales.push({ facts, price: l.closePrice, closeDate: l.closeDate });
  }
  return new Avm(sales);
}
