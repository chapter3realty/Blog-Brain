#!/usr/bin/env node
/*
 * Controls for struck-check.js and the struck lists of batch 2026-10-b (lesson B30).
 *
 * Firing controls are real struck sentences: the nine phrases the round 10 rewrites put back (taken from
 * the specs at commit a16c527), and each list entry's own "struck" text. Quiet controls are real approved
 * replacements: each entry's "use" text, and sentences from the round 10 previews that the first drafts
 * of these patterns fired on (Kimbel's bluff, a free shuttle in season, a cemetery on Wachesaw's land, the
 * Waterbridge clubhouse, the Woodsides' 1920s course, and others).
 *
 *   node tools/struck-check.test.js
 */
"use strict";
const fs = require("fs"), os = require("os"), path = require("path");
const { spawnSync } = require("child_process");
const { compile, loadList, pageSentences, check, runBatch } = require("./struck-check.js");
let failures = 0;
const ok = (name, cond, extra = "") => { if (!cond) { failures++; console.log(`FAIL ${name} ${extra}`); } else console.log(`ok   ${name}`); };

const BATCH = path.join(__dirname, "..", "batches", "2026-10-b");
const FACTS = path.join(BATCH, "facts");
const page = (...ps) => `<!doctype html><html><head><title>t</title></head><body><header><p>Tilghman Beach is in the header.</p></header><main>${ps.map((p) => `<p>${p}</p>`).join("")}</main><footer><p>Tilghman Beach is in the footer.</p></footer></body></html>`;
const rows = (hits) => hits.map((h) => h.row);

/* ------------------------------------------------------------ the tool */

const L = compile([
  { row: "test 1", pattern: "Resort Course[^.]{0,80}\\bbluff\\b", struck: "Its Resort Course follows the waterway along a bluff.", use: "Its Resort Course runs along the Intracoastal Waterway." },
  { row: "test 2", pattern: "golf carts", unless: "listings say", struck: "Owners drive golf carts.", use: "Listings say golf carts are allowed." },
  { row: "test 3", pattern: "Tilghman Beach.*ocean", struck: "In Tilghman Beach, near the ocean.", use: "In North Myrtle Beach." },
]);

ok("fires: a struck sentence", rows(check(L, page("Its Resort Course follows the waterway along a bluff."))).includes("test 1"));
ok("fires: case is ignored", rows(check(L, page("ITS RESORT COURSE FOLLOWS THE WATERWAY ALONG A BLUFF."))).includes("test 1"));
ok("quiet: the subject alone (Kimbel's bluff)", check(L, page("The bluff where Kimbel's restaurant stands was once the site of an outpost.")).length === 0);
ok("quiet: unless", check(L, page("Listings say golf carts are allowed, and we check the HOA rules before you offer.")).length === 0);
ok("fires: unless does not cover it", rows(check(L, page("On the same grounds as the pool is a community garden, and owners drive golf carts on its streets."))).includes("test 2"));
ok("quiet: a match must be inside one sentence", check(L, page("It is in Tilghman Beach. The ocean is a mile away.")).length === 0);
ok("fires: inside one sentence", rows(check(L, page("It is in Tilghman Beach, near the ocean."))).includes("test 3"));
ok("quiet: header, footer, script, style, svg, nav and image alt are not body text",
  check(L, `<html><body><header><p>Its Resort Course is on a bluff.</p></header><main><script>var a = "Its Resort Course is on a bluff.";</script><style>/* Its Resort Course is on a bluff. */</style><svg><text>Its Resort Course is on a bluff.</text></svg><nav><a>Its Resort Course is on a bluff.</a></nav><img alt="Its Resort Course is on a bluff."><p>Nothing here.</p></main></body></html>`).length === 0);
ok("fires: a table cell, a figure caption and text straight in a div",
  check(L, `<html><body><main><table><tr><td>Its Resort Course is on a bluff.</td></tr></table><figure><img src="x.jpg" alt=""><figcaption>Owners drive golf carts here.</figcaption></figure><div class="pill">In Tilghman Beach, near the ocean</div></main></body></html>`).length === 3);
ok("fires: curly apostrophes read as straight ones",
  check(compile([{ row: "t", pattern: "Kimbel's restaurant", struck: "Kimbel's restaurant", use: "x" }]), page("Kimbel’s restaurant is on the bluff.")).length === 1);
ok("reads the heading of the section", (check(L, `<html><body><main><h2>4. Grande Dunes</h2><p>Its Resort Course follows the waterway along a bluff.</p></main></body></html>`)[0] || {}).section === "4. Grande Dunes");
ok("each hit names the ledger row, the sentence and the approved wording", (() => {
  const h = check(L, page("Its Resort Course follows the waterway along a bluff."))[0] || {};
  return h.row === "test 1" && /along a bluff/.test(h.sentence) && h.use === "Its Resort Course runs along the Intracoastal Waterway.";
})());
let bad = "";
try { compile([{ row: "x", pattern: "(unclosed", struck: "x", use: "y" }]); } catch (e) { bad = e.message; }
ok("refuses: a bad pattern", /bad pattern/.test(bad));
bad = "";
try { compile({ row: "x" }); } catch (e) { bad = e.message; }
ok("refuses: a list that is not an array", /array/.test(bad));
ok("flags: an entry without its struck wording", compile([{ row: "x", pattern: "y", use: "z" }])[0].missing.includes("struck"));
ok("sentences: no blocks are lost", pageSentences(page("One. Two.", "Three.")).length === 3);

/* ------------------------------------------------------------ the command line and batch mode */

{
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "struck-"));
  fs.mkdirSync(path.join(tmp, "batch", "facts"), { recursive: true });
  fs.mkdirSync(path.join(tmp, "preview"));
  const list = [{ row: "gated 117", pattern: "Resort Course[^.]{0,80}\\bbluff\\b", struck: "Its Resort Course follows the waterway along a bluff.", use: "Its Resort Course runs along the Intracoastal Waterway." }];
  fs.writeFileSync(path.join(tmp, "batch", "facts", "dirty-struck.json"), JSON.stringify(list));
  fs.writeFileSync(path.join(tmp, "batch", "facts", "clean-struck.json"), JSON.stringify(list));
  fs.writeFileSync(path.join(tmp, "preview", "dirty.html"), page("Its Resort Course follows the waterway along a bluff."));
  fs.writeFileSync(path.join(tmp, "preview", "clean.html"), page("Its Resort Course runs along the Intracoastal Waterway."));
  const cli = (...a) => spawnSync(process.execPath, [path.join(__dirname, "struck-check.js"), ...a], { encoding: "utf8" });
  const dirty = cli(path.join(tmp, "batch", "facts", "dirty-struck.json"), path.join(tmp, "preview", "dirty.html"));
  ok("cli: exit 1 and the row on a struck phrase", dirty.status === 1 && /gated 117/.test(dirty.stdout) && /along a bluff/.test(dirty.stdout));
  ok("cli: exit 0 on approved wording", cli(path.join(tmp, "batch", "facts", "clean-struck.json"), path.join(tmp, "preview", "clean.html")).status === 0);
  ok("cli: exit 2 on a missing file", cli(path.join(tmp, "nothing.json"), path.join(tmp, "preview", "clean.html")).status === 2);
  const b = cli("--batch", path.join(tmp, "batch"), "--preview", path.join(tmp, "preview"), "--strict");
  ok("batch: checks every page, exit 1 on the dirty one", b.status === 1 && /dirty \(\d+ patterns\): 1 struck phrase/.test(b.stdout) && /clean \(\d+ patterns\): no struck wording/.test(b.stdout));
  fs.unlinkSync(path.join(tmp, "preview", "dirty.html"));
  ok("batch: a missing page passes plain, fails --strict",
    runBatch(path.join(tmp, "batch"), path.join(tmp, "preview"), false).fail === false && runBatch(path.join(tmp, "batch"), path.join(tmp, "preview"), true).fail === true);
  fs.rmSync(tmp, { recursive: true, force: true });
}

/* ------------------------------------------------------------ the lists for batch 2026-10-b */

const PAGES = { "gated-communities": "gated", "best-neighborhoods": "neighborhoods", "no-hoa-homes": "no-hoa", "the-farm": "the-farm", "affordable-places-to-live": "affordable" };
const lists = {};
for (const [slug, ledger] of Object.entries(PAGES)) {
  const file = path.join(FACTS, `${slug}-struck.json`);
  ok(`list: ${slug}-struck.json exists`, fs.existsSync(file));
  if (!fs.existsSync(file)) continue;
  const list = lists[slug] = loadList(file);
  ok(`list: ${slug}: every entry has row, pattern, struck and use`, list.every((e) => !e.missing.length), list.filter((e) => e.missing.length).map((e) => e.row).join(", "));
  ok(`list: ${slug}: every row names the ${ledger} ledger`, list.every((e) => e.row.startsWith(`${ledger} `)), list.filter((e) => !e.row.startsWith(`${ledger} `)).map((e) => e.row).join(", "));
  /* Each entry's struck wording fires it; each approved wording fires nothing on the page. Text in round
     brackets is an instruction ("(cut it)"), not wording. */
  const silent = list.filter((e) => !check([e], page(e.struck)).length);
  ok(`list: ${slug}: every entry fires on its own struck wording (${list.length})`, !silent.length, silent.map((e) => `${e.row}: ${e.pattern}`).join("; "));
  const loud = list.filter((e) => !/^\(/.test(e.use)).flatMap((e) => check(list, page(e.use)).map((h) => `${e.row} use fires ${h.row} "${h.match}"`));
  ok(`list: ${slug}: no approved wording fires`, !loud.length, loud.join("; "));
}

/* The round 10 regressions (lesson B30), as the specs had them at commit a16c527. */
const FIRE = [
  ["gated-communities", "Seaside Plantation is in the Tilghman Beach part of North Myrtle Beach, two or three blocks from the ocean.", "gated 115, 153"],
  ["gated-communities", "Its Resort Course follows the Intracoastal Waterway along a bluff.", "gated 117, 154"],
  ["gated-communities", "Grande Dunes covers about 2,200 acres, from the ocean to the Carolina Bays Preserve, with walking and biking trails.", "gated 145, 154"],
  ["gated-communities", "It was built in three phases, from about 2006 on.", "gated 137, 156"],
  ["gated-communities", "One of them is a boathouse on the Intracoastal Waterway, with a day dock.", "gated 156"],
  ["gated-communities", "Covington Lake East is a small neighborhood of brick houses in Carolina Forest, built from about 2008.", "gated 133, 148"],
  ["gated-communities", "The streets have sidewalks, and listings call them friendly to golf carts.", "gated 148"],
  ["gated-communities", "Boat owners have a ramp on the waterway, a day dock and a fenced storage yard for boats.", "gated 119, 155"],
  ["gated-communities", "Black Creek winds through the woods beside it.", "gated 119, 156, 160"],
  ["gated-communities", "Its gated sections of houses are Calais, Palermo and Villa Venezia.", "gated 154"],
  ["gated-communities", "Many of its houses are brick, and many back up to its lakes.", "gated 153"],
  ["best-neighborhoods", "On the same grounds as the pool is a community garden with garden plots, and owners drive golf carts on its streets.", "neighborhoods 220, 229"],
  /* Round 14d: the price entries fire on the place they struck, not on every sentence with the same figure. */
  ["affordable-places-to-live", "Houses at the Golf and Yacht Club usually sold for about $225,000 last year.", "affordable 120, 161"],
  ["affordable-places-to-live", "Townhomes in Victory Point usually sold for about $250,000 last year.", "affordable 125, 126"],
  ["affordable-places-to-live", "Townhomes in Coopers Bluff usually sold for about $240,000 last year.", "affordable 126"],
];
for (const [slug, text, row] of FIRE) {
  if (!lists[slug]) continue;
  const got = rows(check(lists[slug], page(text)));
  ok(`fires (${row}): ${text.slice(0, 70)}`, got.includes(row), `got ${got.join(" | ") || "nothing"}`);
}

/* Approved wording from the round 10 previews. Several fired on the first drafts of these patterns. */
const QUIET = [
  ["gated-communities", "Seaside Plantation is in North Myrtle Beach, a quarter to three-quarters of a mile from the ocean."],
  ["gated-communities", "Some of its houses are all brick, and some look onto its lakes."],
  ["gated-communities", "Its Resort Course runs along the Intracoastal Waterway."],
  ["gated-communities", "Wachesaw Plantation: a private club on a bluff above the Waccamaw River"],
  ["gated-communities", "Kimbel's restaurant stands on the bluff above the river."],
  ["gated-communities", "Grande Dunes covers about 2,200 acres, with walking and biking trails."],
  ["gated-communities", "It was built from about 2006 on."],
  ["gated-communities", "The neighborhood also has day docks, a boat ramp and boat storage."],
  ["gated-communities", "Boat owners have a ramp on the waterway, a day dock and a fenced boat storage area."],
  ["gated-communities", "Covington Lake East is a small neighborhood of brick houses in Carolina Forest, built since the mid-2000s."],
  ["gated-communities", "Black Creek runs through the woods along its west side."],
  ["gated-communities", "Its gated sections of houses include Calais, Palermo, Tuscany Village and Villa Venezia."],
  ["gated-communities", "In season, a shuttle runs from the resort to the beach. The resort also has a beach cabana with showers and gated parking, and the North Tower Pool is on the waterway."],
  ["gated-communities", "On the property are Native American burial mounds, an Avenue of the Oaks, a Civil War-era fort and a cemetery of enslaved people."],
  ["gated-communities", "Its clubhouse has a pool, a hot tub and parking for golf carts."],
  ["gated-communities", "The HOA's rules allow a golf cart to be parked only in an enclosed garage."],
  ["best-neighborhoods", "On the same grounds as the pool is a community garden with garden plots, and listings say golf carts are allowed here."],
  ["best-neighborhoods", "Rosewood Landing, a county boat ramp on the Intracoastal Waterway, is about 2 miles away in a straight line, and about 5 miles by road."],
  ["best-neighborhoods", "Waterbridge from above: the pools and clubhouse inside a circle of streets."],
  ["best-neighborhoods", "The closest beach access has three parking spaces, for golf carts only."],
  ["no-hoa-homes", "Houses on lots of about an acre along a country road outside Aynor, from the air."],
  ["no-hoa-homes", "In the 1920s the Woodside family bought a large tract and built the Pine Lakes golf course; their Ocean Forest Hotel opened in 1930."],
  ["no-hoa-homes", "Does a listing with no HOA fee mean the home has no HOA?"],
  ["no-hoa-homes", "The middle house has a little over a third of an acre and about 1,600 square feet."],
  ["the-farm", "On the same map, the Corps is still investigating another section next to The Farm, called Range III."],
  ["the-farm", "The map shows drive times by car from the entrance by the large pool."],
  ["affordable-places-to-live", "In Birchwood, off SC 905 near Longs, new Lennar houses usually sold for about $225,000 in the past year."],
  /* Round 14d: the same figure for a different place is true (rows 122, 124, 156). */
  ["affordable-places-to-live", "Sawgrass East townhomes usually sold for about $225,000 last year, and the HOA fee is about $425 a month."],
  ["affordable-places-to-live", "These townhomes usually sold for about $240,000 last year, with an HOA fee of about $100 a month."],
  ["affordable-places-to-live", "Townhomes in Wynbrooke usually sold for about $250,000 last year, with an HOA fee of about $450 a month."],
];
for (const [slug, text] of QUIET) {
  if (!lists[slug]) continue;
  const got = check(lists[slug], page(text));
  ok(`quiet (${slug}): ${text.slice(0, 70)}`, !got.length, got.map((h) => `${h.row} "${h.match}"`).join("; "));
}

/* rules/distance-words.json (CRAFT 2, lesson B31). Firing: the real unmeasured sentences from round 10.
   Quiet: the measured rewrites, the CTA "what you want nearby", and the table heading "Also close by". */
{
  const { distanceWords } = require("./struck-check.js");
  const D = distanceWords();
  ok("distance: the list loads", D.length >= 5);
  for (const e of D) {
    ok(`distance fires: ${e.struck}`, check([e], page(e.struck)).length === 1);
    ok(`distance quiet: ${e.use}`, check(D, page(e.use)).length === 0, JSON.stringify(check(D, page(e.use))));
  }
  const real = [
    "In The Farm at Carolina Forest, the large pool and the activity center are a short walk apart.",
    "For walking to the beach, Cherry Grove and the ocean side of Surfside Beach are a few blocks from the sand.",
    "The two Ocean Bay schools are just outside The Farm's north-east side.",
  ];
  for (const t of real) ok(`distance fires on round 10 copy: ${t.slice(0, 50)}`, check(D, page(t)).length >= 1);
  const quiet = [
    "Tell us what you want nearby. We will send three neighborhoods that fit.",
    "Tell us your price range and what you want close to home.",
    "Russell Burgess Coastal Preserve is under half a mile on foot.",
    "The agent shows her houses just outside the city, where the county has no rule on where she parks.",
    "Cherry Grove: a short walk, about 0.1 mile.",
  ];
  for (const t of quiet) ok(`distance quiet on approved copy: ${t.slice(0, 50)}`, check(D, page(t)).length === 0, JSON.stringify(check(D, page(t))));
  const h = `<!doctype html><html><body><main><h3>Also close by</h3><p>Carolina Forest Recreation Center is about 4 minutes by car.</p></main></body></html>`;
  ok("distance quiet: the heading 'Also close by' over a table of drive times", check(D, h).length === 0, JSON.stringify(check(D, h)));
}

console.log(failures ? `\n${failures} control(s) failed` : "\nall controls pass");
process.exitCode = failures ? 1 : 0;
