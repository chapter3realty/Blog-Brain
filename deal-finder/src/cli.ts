import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { backtest } from "./avm/backtest.ts";
import { buildAvm } from "./avm/build.ts";
import { readReplica } from "./source/replica.ts";
import { syntheticMarket } from "./source/synthetic.ts";
import { findFlips, type FlipSettings } from "./strategies/flip.ts";
import type { Market } from "./types.ts";
import { crmView, publicView } from "./views.ts";

/**
 * npm run find -- [--source replica|synthetic] [--out out] [--max-price 400000] [--min-price 50000] [--cost-of-money 0]
 * npm run backtest -- [--source replica|synthetic] [--holdout-months 3]
 *
 * --source replica reads the CRM's MLS copy (DEALS_DATABASE_URL). With no
 * connection string it stops and says so; it never falls back to made-up data.
 */

function args(): { cmd: string; opt: Record<string, string> } {
  const [cmd = "find", ...rest] = process.argv.slice(2);
  const opt: Record<string, string> = {};
  for (let i = 0; i < rest.length; i++) {
    const a = rest[i];
    if (a.startsWith("--")) opt[a.slice(2)] = rest[i + 1] && !rest[i + 1].startsWith("--") ? rest[++i] : "1";
  }
  return { cmd, opt };
}

async function load(source: string): Promise<Market> {
  if (source === "synthetic") return syntheticMarket();
  const url = process.env.DEALS_DATABASE_URL;
  if (!url) {
    console.error("No DEALS_DATABASE_URL. Set it to the read-only connection string for the CRM's database (docs/DATA-ACCESS.md), or run with --source synthetic to try the tool on made-up data.");
    process.exit(2);
  }
  return readReplica(url);
}

async function main(): Promise<void> {
  const { cmd, opt } = args();
  const source = opt.source ?? "replica";
  const t0 = Date.now();
  const market = await load(source);
  console.log(`${market.source}: ${market.active.length} active, ${market.sold.length} sold, as of ${market.asOf}.`);

  if (cmd === "backtest") {
    const report = backtest(market.sold, market.asOf, { holdoutMonths: Number(opt["holdout-months"] ?? 3) });
    console.log(JSON.stringify(report, null, 2));
    return;
  }

  const avm = buildAvm(market.sold, market.asOf);
  const settings: Partial<FlipSettings> = {};
  if (opt["max-price"]) settings.maxPrice = Number(opt["max-price"]);
  if (opt["min-price"]) settings.minPrice = Number(opt["min-price"]);
  if (opt["cost-of-money"]) settings.costOfMoneyPct = Number(opt["cost-of-money"]);
  const run = findFlips(market, avm, settings);
  const out = opt.out ?? "out";
  mkdirSync(out, { recursive: true });
  const meta = { strategy: "flip", source: market.source, asOf: market.asOf, ranAt: new Date().toISOString(), checked: run.checked, valued: run.valued };
  writeFileSync(join(out, "flip-crm.json"), JSON.stringify({ ...meta, deals: crmView(run.deals) }, null, 2));
  writeFileSync(join(out, "flip-public.json"), JSON.stringify({ ...meta, deals: publicView(run.deals) }, null, 2));
  console.log(`Checked ${run.checked} homes for sale, valued ${run.valued}, in ${((Date.now() - t0) / 1000).toFixed(1)} s.`);
  for (const d of crmView(run.deals).slice(0, 10)) {
    console.log(
      `#${d.rank} ${d.address}, ${d.city}  asking $${d.price.toLocaleString()}  as-is $${d.asIsValue.toLocaleString()}  ARV $${d.arv.toLocaleString()} (${d.grade})  repairs $${d.repairs.toLocaleString()}  profit $${d.profit.toLocaleString()}  worst-fifth $${d.risk.p20.toLocaleString()}  ${d.risk.pProfit}% chance of profit${d.checks.length ? "  CHECK" : ""}`,
    );
  }
  console.log(`Wrote ${join(out, "flip-crm.json")} (agents) and ${join(out, "flip-public.json")} (website).`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
