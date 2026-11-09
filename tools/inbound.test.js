#!/usr/bin/env node
/* Controls for inbound.js: links in <main> count once per referring page; header and footer links do not. */
"use strict";
const fs = require("fs"), os = require("os"), path = require("path"), { spawnSync } = require("child_process");
const site = fs.mkdtempSync(path.join(os.tmpdir(), "inb-")), root = path.join(site, "chapter3realty");
const put = (u, body) => { fs.mkdirSync(path.join(root, u), { recursive: true }); fs.writeFileSync(path.join(root, u, "index.html"), `<html><body><header><a href="/a/">A</a><a href="/b/">B</a></header><main>${body}</main><footer><a href="/b/">B</a></footer></body></html>`); };
fs.mkdirSync(root, { recursive: true });
fs.writeFileSync(path.join(root, "sitemap.xml"), ["/a/", "/b/", "/c/", "/d/"].map((u) => `<url><loc>https://chapter3realty.com${u}</loc></url>`).join("") + "<url><loc>https://chapter3realty.com/homes/near/x/</loc></url>");
put("a", `<a href="/c/">c</a> and again <a href="/c/#faq">c</a> <a href="/b">b without slash</a>`);
put("b", `<a href="/c/?x=1">c</a> <a href="/a/">a</a>`);
put("c", `<a href="/c/">itself</a>`);
put("d", `<a href="/c/">c</a>`);
const run = (...a) => spawnSync("node", [path.join(__dirname, "inbound.js"), site, ...a], { encoding: "utf8" });
let failures = 0;
const check = (name, ok, out) => { console.log(`${ok ? "ok  " : "FAIL"}  ${name}`); if (!ok) { failures++; console.log(out); } };
let r = run("--only", "/c/", "--min", "1");
check("fires: three referring pages count once each, with a query, an anchor or a repeat (a self-link does not count)", /^\s*3\s+\/c\//m.test(r.stdout) && r.status === 0, r.stdout);
r = run("--min", "1");
check("fires: a page linked only from the header and footer has 0 and fails --min 1", /^\s*0\s+\/d\//m.test(r.stdout) && r.status === 1, r.stdout);
check("quiet: a link without the trailing slash still counts (b has 1)", !/^\s*0\s+\/b\//m.test(r.stdout), r.stdout);
check("quiet: /homes/ pages are not checked", !r.stdout.includes("/homes/"), r.stdout);
console.log(failures ? `\n${failures} failing` : "\nall controls pass");
process.exit(failures ? 1 : 0);
