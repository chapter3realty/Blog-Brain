#!/usr/bin/env node
/*
 * Controls for icons.js.
 *
 *   node tools/icons.test.js
 */
"use strict";
const { icon, atAGlance, ICON_NAMES, ICONS } = require("./icons.js");
let failures = 0;
const check = (name, cond, extra = "") => { if (!cond) { failures++; console.log(`FAIL  ${name} ${extra}`); } else console.log(`ok    ${name}`); };

/* Every icon the owner's pages need (task list, 2026-10-07), by the name a spec would use. */
const NEED = ["pool", "indoor pool", "clubhouse", "fitness", "tennis", "pickleball", "bocce", "golf cart", "beach", "hospital", "grocery", "airport",
  "dog", "pets", "guests", "family", "lawn care", "gate", "calendar", "events", "card games", "fishing pond", "walking trail", "dock", "boat",
  "home", "dollar", "flood", "water", "wind", "storm", "tax", "key", "shopping", "town"];
const missing = NEED.filter((n) => { try { icon(n); return false; } catch { return true; } });
check("every needed icon exists", !missing.length, missing.join(", "));
check("an unknown name throws", (() => { try { icon("unicorn"); return false; } catch { return true; } })());

const all = ICON_NAMES.map((n) => icon(n));
check("icons are 24 px line drawings in currentColor", all.every((s) => /viewBox="0 0 24 24"/.test(s) && /stroke="currentColor"/.test(s) && /fill="none"/.test(s)));
check("icons are hidden from screen readers", all.every((s) => /aria-hidden="true"/.test(s) && /focusable="false"/.test(s)));
check("icon paths stay on the 24 px grid", Object.values(ICONS).every((ic) => (ic.d.match(/-?\d*\.?\d+/g) || []).every((n) => Math.abs(+n) <= 24)));
check("icons are small (under 700 bytes each)", all.every((s) => s.length < 700), Math.max(...all.map((s) => s.length)));
check("size option sets width and height", /width="32" height="32"/.test(icon("key", { size: 32 })));

const items = [
  { icon: "beach", label: "Beach", text: "About 10 minutes by car" },
  { icon: "dog", label: "Pets <script>", text: "Dogs & cats \"welcome\"" },
];
const g = atAGlance(items, { title: "At a <glance>" });
check("glance renders one card per item", (g.match(/<li /g) || []).length === 2);
check("glance escapes label and text", !/<script>/.test(g) && /Pets &lt;script&gt;/.test(g) && /Dogs &amp; cats &quot;welcome&quot;/.test(g));
check("glance escapes the title", /At a &lt;glance&gt;/.test(g));
check("glance text is real text, icons are aria-hidden", /<strong[^>]*>Beach<\/strong>/.test(g) && /About 10 minutes by car<\/span>/.test(g) && (g.match(/aria-hidden="true"/g) || []).length === 2);
check("glance is a responsive grid", /display:grid;grid-template-columns:repeat\(auto-fill,minmax\(8\.5rem,1fr\)\)/.test(g));
check("glance uses the site palette and weights", /var\(--brass\)/.test(g) && /var\(--navy\)/.test(g) && !/font-weight:(?:600|700|bold)/.test(g));
check("glance bg option picks the other ivory", /background:var\(--ivory\);border-top/.test(atAGlance(items, { bg: "ivory" })));
check("glance rejects a bad min width", !/minmax\(1px;/.test(atAGlance(items, { min: "1px;color:red" })));
check("an empty list throws", (() => { try { atAGlance([]); return false; } catch { return true; } })());
check("no em dash", !/\u2014/.test(g + all.join("")));

console.log(failures ? `\n${failures} control(s) failed` : "\nall controls pass");
process.exitCode = failures ? 1 : 0;
