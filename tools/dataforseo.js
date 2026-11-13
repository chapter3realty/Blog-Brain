#!/usr/bin/env node
/* DataForSEO from Blog-Brain (owner, 2026-11-13: "i want to add a tool called data for seo in here").
 * The login is a network secret on the cloud environment: the session's proxy adds it to every request to
 * api.dataforseo.com, so this script sends a placeholder and never sees the key. Outside that proxy, set
 * DATAFORSEO_AUTH to base64("login:api-password").
 *
 *   node tools/dataforseo.js balance
 *   node tools/dataforseo.js volume "myrtle beach hoa fees" "horry county gis" ...   [--us]  monthly Google searches
 *   node tools/dataforseo.js volume --file keywords.txt                                     one keyword a line
 *   node tools/dataforseo.js serp "how to check flood zone myrtle beach"                    top 20 Google results, local
 *   node tools/dataforseo.js ranked chapter3realty.com [--limit 200]                         keywords the site ranks for
 *   add --json out.json to any command to save the raw answer
 *
 * Costs money per call (see the balance). Volumes are Google Ads data for the Myrtle Beach-Florence area unless
 * --us. Keep a call's keywords together: one volume call takes up to 1,000 keywords for one price. */
const fs = require("fs");
const args = process.argv.slice(2);
const flag = (k) => { const i = args.indexOf(k); if (i < 0) return null; const v = args[i + 1]; args.splice(i, 2); return v; };
const has = (k) => { const i = args.indexOf(k); if (i < 0) return false; args.splice(i, 1); return true; };
const jsonOut = flag("--json"), file = flag("--file"), limit = +(flag("--limit") || 100), us = has("--us");
const [cmd, ...rest] = args;
const LOCAL = "Myrtle Beach,South Carolina,United States";
const AUTH = "Basic " + (process.env.DATAFORSEO_AUTH || "proxy-injected");

async function call(path, body) {
  const r = await fetch("https://api.dataforseo.com/v3/" + path, {
    method: body ? "POST" : "GET",
    headers: { Authorization: AUTH, "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  const j = await r.json();
  if (jsonOut) fs.writeFileSync(jsonOut, JSON.stringify(j, null, 1));
  const t = (j.tasks || [])[0] || {};
  if (j.status_code !== 20000 || (t.status_code && t.status_code !== 20000)) {
    console.error(`DataForSEO: ${j.status_code} ${j.status_message}; task ${t.status_code} ${t.status_message}`);
    process.exit(1);
  }
  if (j.cost !== undefined) console.error(`cost $${j.cost}`);
  return t.result || [];
}

(async () => {
  if (cmd === "balance") {
    const [u] = await call("appendix/user_data");
    console.log(`balance $${u.money.balance}`);
  } else if (cmd === "volume") {
    const kws = [...new Set((file ? fs.readFileSync(file, "utf8").split("\n") : rest).map((s) => s.trim().toLowerCase()).filter(Boolean))];
    if (!kws.length) throw new Error("no keywords");
    const res = await call("keywords_data/google_ads/search_volume/live", [{ keywords: kws.slice(0, 1000), ...(us ? { location_name: "United States" } : { location_name: "Myrtle Beach-Florence SC,South Carolina,United States" }), language_code: "en" }]);
    res.sort((a, b) => (b.search_volume || 0) - (a.search_volume || 0));
    for (const k of res) console.log(`${String(k.search_volume ?? "-").padStart(7)}  ${String(k.competition ?? "").padEnd(7)}  ${k.keyword}`);
  } else if (cmd === "serp") {
    const res = await call("serp/google/organic/live/advanced", [{ keyword: rest.join(" "), location_name: LOCAL, language_code: "en", depth: 20 }]);
    for (const it of (res[0] && res[0].items) || []) if (it.type === "organic") console.log(`${String(it.rank_absolute).padStart(3)}  ${it.domain}  ${it.url}`);
    const ai = ((res[0] && res[0].items) || []).find((i) => i.type === "ai_overview");
    if (ai) console.log(`AI overview shown${(ai.references || []).length ? "; cites " + ai.references.map((x) => x.domain).join(", ") : ""}`);
  } else if (cmd === "ranked") {
    const res = await call("dataforseo_labs/google/ranked_keywords/live", [{ target: rest[0] || "chapter3realty.com", location_name: "United States", language_code: "en", limit }]);
    for (const it of (res[0] && res[0].items) || []) {
      const k = it.keyword_data, s = it.ranked_serp_element.serp_item;
      console.log(`${String(s.rank_absolute).padStart(3)}  ${String(k.keyword_info.search_volume ?? "-").padStart(6)}  ${k.keyword}  ${s.relative_url || s.url}`);
    }
  } else {
    console.log("usage: balance | volume <kw...> [--file f] [--us] | serp <kw> | ranked [domain] [--limit n]  [--json out.json]");
  }
})().catch((e) => { console.error(e.message); process.exit(1); });
