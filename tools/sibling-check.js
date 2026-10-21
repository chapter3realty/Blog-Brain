#!/usr/bin/env node
/* sibling-check.js: before handing off, list every proper name added to a spec since <rev> that also
 * appears in a sibling spec of the same batch (CRAFT 3 "Siblings share places, not facts", lesson B46).
 * Round 14l added Vereen Memorial Gardens, Socastee Recreation Park and the Conway Riverwalk to pages
 * whose sibling already owned them; a reviewer found each one. Read every hit against
 * review/SIBLING-OWNERS.md: give the fact to one page, and give the other page a different fact.
 * Usage: node tools/sibling-check.js <batch-dir> <rev> [slug]
 */
const fs = require("fs"), path = require("path"), { execSync } = require("child_process");
const [batch, rev, only] = process.argv.slice(2);
if (!batch || !rev) { console.error("usage: node tools/sibling-check.js <batch-dir> <rev> [slug]"); process.exit(2); }
const dir = path.join(batch, "specs");
const specs = fs.readdirSync(dir).filter((f) => f.endsWith(".js") && !f.startsWith("_"));
const COMMON = /^(Myrtle Beach|North Myrtle Beach|South Carolina|Horry County|Carolina Forest|The HOA|Our|The|HOA|Chapter3|Book|In|On|From|For)$/;
const NAME = /\b([A-Z][a-z]+(?:[ -](?:of |at |the )?[A-Z][a-z]+)+)\b/g;
/* Place words that name a whole area, not one park, landing or club; a name made only of them is skipped. */
const STOP = new Set("Myrtle Beach North South East West Carolina Forest Horry County Conway Socastee Surfside Murrells Inlet Little River Lake Park Road Drive Avenue Street Boulevard Highway Golf Club State City Town National The Our Book Most Many Every From With Each Some After Before Inside Owners Houses Homes Course Landing Marina Center Trail Gardens Preserve January February March April June July August September October November December Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "));
let hits = 0;
for (const f of specs) {
  const slug = f.replace(/\.js$/, "");
  if (only && slug !== only) continue;
  let diff = "";
  try { diff = execSync(`git diff ${rev} -- ${path.join(dir, f)}`, { encoding: "utf8" }); } catch (e) { continue; }
  const added = diff.split("\n").filter((l) => l.startsWith("+") && !l.startsWith("+++")).join("\n");
  const before = (() => { try { return execSync(`git show ${rev}:${path.join(dir, f)}`, { encoding: "utf8" }); } catch (e) { return ""; } })();
  const names = new Set([...added.matchAll(NAME)].map((m) => m[1]).filter((n) => !COMMON.test(n) && !before.includes(n)));
  for (const n of names) {
    const words = n.split(/[ -]/).filter((w) => w.length >= 4 && !STOP.has(w));
    if (!words.length) continue;
    for (const g of specs) {
      if (g === f) continue;
      const other = fs.readFileSync(path.join(dir, g), "utf8");
      const w = words.find((x) => new RegExp(`\\b${x}\\b`).test(other));
      if (w) { hits++; console.log(`${slug}: "${n}" is new here; "${w}" is already on ${g.replace(/\.js$/, "")}`); }
    }
  }
}
console.log(`${hits} shared name(s) to read against SIBLING-OWNERS.md`);
