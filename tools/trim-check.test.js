#!/usr/bin/env node
/* Controls for trim-check.js: a cut-only trim passes; a trim that adds a number, a name, or drops a source fails. */
"use strict";
const fs = require("fs"), os = require("os"), path = require("path"), { spawnSync } = require("child_process");
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "trim-"));
const page = (body) => `<html><body><main>${body}</main></body></html>`;
const before = page(`<h2>What does it cost?</h2><p>Carolina Forest homes sell near $418,000. The tax is 4% for a home you live in.</p>
<h2>Side question</h2><p>The drive to Conway Medical Center is 20 minutes.</p><p><a href="https://www.horrycountysc.gov/tax">county</a> <a class="btn" href="/contact/">Have us check it</a></p>`);
const cut = page(`<h2>What does it cost?</h2><p>Carolina Forest homes sell near $418,000. The tax is 4% for a home you live in.</p>
<p><a href="https://www.horrycountysc.gov/tax">county</a> <a class="btn" href="/contact/">Have us check it</a></p>`);
const run = (a, b) => { const fa = path.join(dir, "a.html"), fb = path.join(dir, "b.html"); fs.writeFileSync(fa, a); fs.writeFileSync(fb, b);
  return spawnSync("node", [path.join(__dirname, "trim-check.js"), fa, fb], { encoding: "utf8" }); };
let failures = 0;
const check = (name, ok, out) => { console.log(`${ok ? "ok  " : "FAIL"}  ${name}`); if (!ok) { failures++; console.log(out); } };
let r = run(before, cut); check("a cut-only trim is clean", r.status === 0, r.stdout);
r = run(before, cut.replace("$418,000", "$425,000")); check("a changed number fails", r.status === 1 && /NEW NUMBERS/.test(r.stdout), r.stdout);
r = run(before, cut.replace("The tax", "Grand Strand Medical Center says the tax")); check("a new name fails", r.status === 1 && /NEW NAMES/.test(r.stdout), r.stdout);
r = run(before, cut.replace('<a href="https://www.horrycountysc.gov/tax">county</a>', "")); check("a dropped source fails", r.status === 1 && /SOURCES DROPPED/.test(r.stdout), r.stdout);
console.log(failures ? `\n${failures} failing` : "\nall controls pass");
process.exit(failures ? 1 : 0);
