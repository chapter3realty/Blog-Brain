#!/usr/bin/env node
/*
 * Controls for compare.js. Quiet controls use real site text: the 55+ comparison table
 * (batches/2026-10-a/data/55-plus-communities.json) and table cells from the live branch that
 * name a kind of house or a tax rule. Firing controls use sentences found on the live branch
 * on 2026-10-13 ("Barefoot Resort appeals to golf-centric retirees", "the most popular landing
 * spot for families", "family-friendly home and condo prices").
 *
 *   node tools/compare.test.js
 */
"use strict";
const path = require("path");
const { compareCards, wantPicker, fairHousing, cardsBelow } = require("./compare.js");
let failures = 0;
const check = (name, cond, extra = "") => { if (!cond) { failures++; console.log(`FAIL  ${name} ${extra}`); } else console.log(`ok    ${name}`); };
const throws = (fn, re) => { try { fn(); return false; } catch (e) { return re ? re.test(e.message) : true; } };

/* ---- the fair housing check ---- */
const fires = [
  "Barefoot Resort appeals to golf-centric retirees",
  "the most popular landing spot for families relocating to the Grand Strand",
  "family-friendly home and condo prices",
  "Perfect for couples", "Great for kids", "Seniors", "Safe streets", "Low crime", "Quiet neighborhood",
  "Best schools", "Young professionals", "Empty nesters", "Exclusive",
];
for (const t of fires) check(`fair housing fires: "${t}"`, fairHousing(t).length > 0);
const labelFires = ["Golfers", "Commuters", "Owners who rent it out", "Anyone who wants golf", "Snowbirds"];
for (const t of labelFires) check(`a short label about people fires: "${t}"`, fairHousing(t, { label: true }).length > 0 && fairHousing(t).length === 0);
const quiet = [
  /* Live branch table cells, 2026-10-13. */
  "404 homes, single-family and attached", "Single-family", "Custom single-family", "Taxed at 5%, no senior exclusion",
  "City 1.5 percent; county 1.5 percent", "Horry, unincorporated", "Nightly and weekly", "Structural and safety repairs",
  /* Labels a place table should allow. */
  "Golf next door", "Walk to the beach", "No HOA fee", "Low HOA fee", "New homes", "A gate at the entrance",
  "Near the hospital", "Amenities and a pool", "A lower price", "Boat storage", "55+ community", "Multi-family homes", "A family room in most plans",
];
for (const t of quiet) check(`fair housing stays quiet: "${t}"`, fairHousing(t, { label: true }).length === 0, JSON.stringify(fairHousing(t, { label: true })));
const T55 = require(path.join(__dirname, "..", "batches", "2026-10-a", "data", "55-plus-communities.json"));
check("fair housing stays quiet on every cell of the shipped 55+ table", T55.head.concat(...T55.rows.map((r) => r.cells)).every((c) => fairHousing(c).length === 0));

/* ---- compareCards: the shipped 55+ table, as a comparison block ---- */
const ROWS = T55.rows.map((r, i) => ({ name: r.cells[0], href: r.url, icon: ["pool", "beach", "golf", "clubhouse"][i], bestFor: ["Near the beach", "A beach club", "Golf next door", "A large clubhouse"][i],
  cells: { area: r.cells[1], beach: r.cells[2], hoa: r.cells[3], price: r.cells[4] } }));
const COLS = [{ key: "area", label: "Area" }, { key: "beach", label: "Minutes to the beach", num: true }, { key: "hoa", label: "HOA fee a month", num: true }, { key: "price", label: "Usually sells for", num: true }];
const SELF = T55.rows[2].url;
const t = compareCards(ROWS, COLS, { caption: "Four 55+ communities side by side", nameLabel: "Community", self: SELF });
check("a real table with a caption", /<table><caption>Four 55\+ communities side by side<\/caption><thead>/.test(t));
check("column headers and a row header per place", (t.match(/<th scope="col"/g) || []).length === 6 && (t.match(/<th scope="row"/g) || []).length === 4);
check("number columns are right-aligned on a wide screen", /\.c3-cc \.n\{text-align:right/.test(t) && (t.match(/<td class="n"/g) || []).length === 12 && /<th scope="col" class="n">Usually sells for/.test(t));
check("each value carries its label for the phone card", /<td class="n" data-label="HOA fee a month">About \$315<\/td>/.test(t));
check("the best-for label is a column after the name", /<th scope="col">Community<\/th><th scope="col">Best for<\/th>/.test(t) && /<td data-label="Best for">Golf next door<\/td>/.test(t));
check("each name links to its page, except this page's own row", (t.match(/<th scope="row">.*?<\/th>/g) || []).filter((c) => /<a href=/.test(c)).length === 3 && /<tr class="c3-self"><th scope="row"><span class="i">[\s\S]*?<\/span>Myrtle Trace<\/th>/.test(t));
check("icons are decoration", /<span class="i"><svg[^>]*aria-hidden="true"/.test(t));
check("text at reading size: table, headers and caption", /\.c3-cc table\{[^}]*font-size:var\(--read,1\.0625rem\)/.test(t) && /\.c3-cc caption\{[^}]*font-size:1em/.test(t) && /\.c3-cc thead th\{[^}]*font-size:1em/.test(t));
check("nothing scrolls sideways: no overflow box, cells wrap", !/overflow-x/.test(t) && /overflow-wrap:break-word/.test(t));
/* Six columns in all: cards below 640 + 2 x 160 = 960 px, in em (60em). */
check("cards on a phone, sooner for a wide table (in em)", cardsBelow(4) === 640 && cardsBelow(6) === 960 && /@media \(max-width:59\.999em\)/.test(t));
const t2 = compareCards(ROWS.slice(0, 2).map((r) => ({ name: r.name, cells: { price: r.cells.price } })), [COLS[3]], { caption: "Two prices" });
check("a small table turns into cards under 640 px (40em)", /@media \(max-width:39\.999em\)/.test(t2) && !/Best for/.test(t2) && !/<a /.test(t2));
check("on the card, the name is the heading and each value is labelled", /\.c3-cc td\[data-label\]::before\{content:attr\(data-label\)/.test(t) && /\.c3-cc thead\{position:absolute/.test(t));
check("css: false leaves the style block out", !/<style>/.test(compareCards(ROWS.slice(0, 2), COLS, { caption: "x y", css: false })));
check("a number is written with commas", /<td class="n" data-label="Homes">1,250<\/td>/.test(compareCards([{ name: "A", cells: { n: 1250 } }, { name: "B", cells: { n: 80 } }], [{ key: "n", label: "Homes", num: true }], { caption: "Homes" })));
check("escapes text", /Smith &amp; Sons/.test(compareCards([{ name: "Smith & Sons", cells: { n: "1" } }, { name: "B", cells: { n: "2" } }], [{ key: "n", label: "N" }], { caption: "c" })));

/* Refusals */
const two = (r) => [Object.assign({ name: "A", cells: { p: "$1" } }, r), { name: "B", cells: { p: "$2" } }];
const P1 = [{ key: "p", label: "Price" }];
check("refuses a best-for about people", throws(() => compareCards(two({ bestFor: "Families" }).map((r) => Object.assign({ bestFor: "Golf" }, r)), P1, { caption: "c" }), /Families/));
check("refuses a best-for about golfers (people, not the place)", throws(() => compareCards([{ name: "A", bestFor: "Golfers", cells: { p: "1" } }, { name: "B", bestFor: "Golf", cells: { p: "2" } }], P1, { caption: "c" }), /about people/));
check("refuses a cell that promises safety", throws(() => compareCards(two({ cells: { p: "Safe and gated" } }), P1, { caption: "c" }), /Safe/));
check("refuses a caption from claims.json (perfect for retirees)", throws(() => compareCards(two(), P1, { caption: "Perfect for retirees" }), /fair-housing|retirees/));
check("refuses a table with no caption", throws(() => compareCards(two(), P1, {}), /caption/));
check("refuses a missing value", throws(() => compareCards(two({ cells: {} }), P1, { caption: "c" }), /empty/));
check("refuses a value with no column", throws(() => compareCards(two({ cells: { p: "1", q: "2" } }), P1, { caption: "c" }), /no column/));
check("refuses a sentence in a cell (over 40 letters)", throws(() => compareCards(two({ cells: { p: "This cell is a whole sentence about the place." } }), P1, { caption: "c" }), /short/));
check("refuses a long best-for label", throws(() => compareCards([{ name: "A", bestFor: "A pool, a gym, a lake and a clubhouse", cells: { p: "1" } }, { name: "B", bestFor: "Golf", cells: { p: "2" } }], P1, { caption: "c" }), /32 or fewer/));
check("refuses a best-for on some rows only", throws(() => compareCards(two({ bestFor: "Golf" }), P1, { caption: "c" }), /every row/));
check("refuses more than 4 value columns", throws(() => compareCards(two(), [1, 2, 3, 4, 5].map((i) => ({ key: "k" + i, label: "K" + i })), { caption: "c" }), /1 to 4/));
check("refuses 1 row and 16 rows", throws(() => compareCards(two().slice(0, 1), P1, { caption: "c" })) && throws(() => compareCards(Array.from({ length: 16 }, (_, i) => ({ name: "P" + i, cells: { p: "1" } })), P1, { caption: "c" })));
check("refuses a place twice", throws(() => compareCards([{ name: "A", cells: { p: "1" } }, { name: "A", cells: { p: "2" } }], P1, { caption: "c" }), /twice/));
check("refuses tags in a cell", throws(() => compareCards(two({ cells: { p: "<b>1</b>" } }), P1, { caption: "c" }), /no tags/));
check("refuses a bad link", throws(() => compareCards(two({ href: "javascript:alert(1)" }), P1, { caption: "c" }), /site path/));
check("refuses an unknown icon", throws(() => compareCards(two({ icon: "rocket" }), P1, { caption: "c" })));
check("refuses a self that no row links to", throws(() => compareCards(two(), P1, { caption: "c", self: "/nowhere/" }), /self/));

/* ---- wantPicker ---- */
const WANTS = [
  { icon: "beach", want: "Walk or bike to the beach", places: [{ name: "Cherry Grove", href: "#cherry-grove" }, { name: "Surfside Beach", href: "/submarkets/surfside-beach/" }] },
  { icon: "golf", want: "Golf next door", places: [{ name: "Myrtle Trace", href: "/buyers/55-plus-communities/myrtle-trace/" }, { name: "Barefoot", href: "#barefoot" }, { name: "Grande Dunes", href: "#grande-dunes" }], note: "Golf membership is separate from the HOA fee." },
  { icon: "dollar", want: "A lower price", places: [{ name: "Conway", href: "/submarkets/conway/" }, { name: "Aynor", href: "#aynor" }] },
];
const w = wantPicker(WANTS);
check("wantPicker: one card a want, as a list", /<ul role="list" class="c3-want">/.test(w) && (w.match(/<li><p class="w">/g) || []).length === 3);
check("wantPicker: each card has its icon, the want and links to its places", /<span class="i"><svg[^>]*aria-hidden="true"[\s\S]*?<\/span><span>Walk or bike to the beach<\/span>/.test(w) && /<a href="\/submarkets\/conway\/">Conway<\/a>/.test(w) && (w.match(/<a href=/g) || []).length === 7);
check("wantPicker: the look-at label and an optional note", /<p class="k">Look at:<\/p>/.test(w) && /<p class="note">Golf membership is separate from the HOA fee\.<\/p>/.test(w));
check("wantPicker: static, nothing hidden (no script, button or details)", !/<script|<button|<details|onclick|hidden/.test(w.replace(/aria-hidden="true"/g, "")));
check("wantPicker: text at reading size, links with a 44 px tap height", /\.c3-want \.w\{[^}]*font-size:var\(--read/.test(w) && /\.c3-want ul a\{[^}]*padding:\.55rem 0/.test(w));
check("wantPicker: refuses a want about people", throws(() => wantPicker([{ icon: "pool", want: "Room for the kids", places: WANTS[0].places }, WANTS[1]]), /kids/));
check("wantPicker: refuses a want for golfers", throws(() => wantPicker([{ icon: "golf", want: "For golfers", places: WANTS[0].places }, WANTS[2]]), /about people/));
check("wantPicker: refuses a note that promises safety", throws(() => wantPicker([Object.assign({}, WANTS[0], { note: "A safe street." }), WANTS[1]]), /safe/));
check("wantPicker: names 2 or 3 places a want", throws(() => wantPicker([{ icon: "beach", want: "Beach", places: WANTS[0].places.slice(0, 1) }, WANTS[1]]), /2 or 3/)
  && throws(() => wantPicker([{ icon: "beach", want: "Beach", places: WANTS[1].places.concat(WANTS[0].places) }, WANTS[1]]), /2 or 3/));
check("wantPicker: takes 2 to 10 wants", throws(() => wantPicker(WANTS.slice(0, 1))));
check("wantPicker: every want needs an icon and every place a link", throws(() => wantPicker([{ want: "Beach", places: WANTS[0].places }, WANTS[1]]), /icon/)
  && throws(() => wantPicker([{ icon: "beach", want: "Beach", places: [{ name: "A" }, { name: "B", href: "/b/" }] }, WANTS[1]]), /site path/));
check("wantPicker: the same want twice throws", throws(() => wantPicker([WANTS[0], WANTS[0]]), /twice/));

console.log(failures ? `\n${failures} control(s) failed` : "\nall controls pass");
process.exitCode = failures ? 1 : 0;
