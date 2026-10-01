#!/usr/bin/env node
/*
 * Controls for site-audit.js source checks. Builds a tiny site in a temp folder:
 * a clean page that must raise nothing, and one planted defect per check that
 * must fire. Each plant is asserted to have landed before the result is read.
 *
 *   node tools/site-audit.test.js
 */
"use strict";
const fs = require("fs"), os = require("os"), path = require("path");

const page = (url, { canonical = url, body = "", head = "" } = {}) => `<!doctype html><html lang="en"><head><title>T</title>
<link rel="canonical" href="https://chapter3realty.com${canonical}">${head}</head><body><main id="main"><h1>H</h1>${body}</main></body></html>`;

function build(files) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "site-audit-"));
  for (const [rel, content] of Object.entries(files)) { const f = path.join(dir, rel); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, content); }
  return dir;
}

/* A clean three-page site: every page has two body inbound links. */
const links = '<p><a href="/a/">a</a> <a href="/b/">b</a> <a href="/c/">c</a></p>';
const clean = {
  "index.html": page("/", { body: links }),
  "a/index.html": page("/a/", { body: links + '<p id="x">x</p><a href="#x">jump</a>' }),
  "b/index.html": page("/b/", { body: links }),
  "c/index.html": page("/c/", { body: links + '<a href="/a/#x">to x</a>' }),
  "sitemap.xml": ["/", "/a/", "/b/", "/c/"].map((u, i) => `<url><loc>https://chapter3realty.com${u}</loc><lastmod>2026-09-0${i + 1}</lastmod></url>`).join(""),
  "llms.txt": "https://chapter3realty.com/a/ https://chapter3realty.com/b/ https://chapter3realty.com/c/",
  "_redirects": "/old/ /a/ 301\n",
};

let failures = 0;
const check = (name, cond, extra = "") => { if (!cond) { failures++; console.log(`FAIL  ${name} ${extra}`); } else console.log(`ok    ${name}`); };
function run(files) {
  const mod = path.join(__dirname, "site-audit.js");
  delete require.cache[require.resolve(mod)];
  const sa = require(mod);
  sa.sourceChecks(build(files));
  return sa.findings;
}

const base = run(clean);
check("clean site raises no error or warning", base.filter(f => f.level !== "info").length === 0, JSON.stringify(base));

const plants = [
  ["internal-link", "b/index.html", (h) => h.replace('<a href="/a/">a</a>', '<a href="/missing/">a</a>')],
  ["internal-link", "b/index.html", (h) => h.replace('<a href="/a/">a</a>', '<a href="/old/">a</a>')],
  ["anchor", "a/index.html", (h) => h.replace('href="#x"', 'href="#nope"')],
  ["anchor", "c/index.html", (h) => h.replace('/a/#x', '/a/#nope')],
  ["canonical", "b/index.html", (h) => h.replace("chapter3realty.com/b/", "chapter3realty.com/a/")],
  ["markup", "b/index.html", (h) => h.replace("<h1>H</h1>", "<div><h1>H</h1>")],
  ["residue", "b/index.html", (h) => h.replace("<h1>H</h1>", "<h1>H</h1><p>%s</p>")],
  ["img-alt", "b/index.html", (h) => h.replace("<h1>H</h1>", '<h1>H</h1><img src="/x.jpg" width="1" height="1">')],
  ["json-ld", "b/index.html", (h) => h.replace("</head>", '<script type="application/ld+json">{bad json</script></head>')],
  ["h1", "b/index.html", (h) => h.replace("<h1>H</h1>", "<h1>H</h1><h1>Again</h1>")],
];
for (const [checkName, file, mutate] of plants) {
  const files = { ...clean, [file]: mutate(clean[file]) };
  check(`${checkName}: plant landed in ${file}`, files[file] !== clean[file]);
  const got = run(files).filter(f => f.check === checkName && f.level !== "info");
  check(`${checkName}: fires`, got.length > 0);
}

/* Inbound: remove every body link to /c/ from the other pages. */
{
  const files = { ...clean };
  for (const f of ["index.html", "a/index.html", "b/index.html"]) files[f] = clean[f].replace('<a href="/c/">c</a>', "");
  check("inbound: plant landed", files["a/index.html"] !== clean["a/index.html"]);
  check("inbound: page with no body links in fires", run(files).some(f => f.check === "inbound" && f.url === "/c/" && f.level === "error"));
}
/* Residue followed directly by a link (the shape that hid it from a word-boundary check). */
{
  const files = { ...clean, "b/index.html": clean["b/index.html"].replace("<h1>H</h1>", '<h1>H</h1><p>%s<a href="/a/">Analyze</a></p>') };
  check("residue: '%s' directly before a link fires", run(files).some(f => f.check === "residue"));
}

/* Sitemap and llms.txt. */
{
  const files = { ...clean, "sitemap.xml": clean["sitemap.xml"].replace(/<url><loc>https:\/\/chapter3realty\.com\/c\/[\s\S]*?<\/url>/, "") };
  check("sitemap: plant landed", files["sitemap.xml"] !== clean["sitemap.xml"]);
  check("sitemap: indexable page missing fires", run(files).some(f => f.check === "sitemap" && f.url === "/c/"));
}
{
  const files = { ...clean, "llms.txt": clean["llms.txt"].replace("https://chapter3realty.com/c/", "") };
  check("llms.txt: missing URL fires", run(files).some(f => f.check === "llms.txt" && f.url === "/c/"));
}
{
  const files = { ...clean, "sitemap.xml": clean["sitemap.xml"].replace(/2026-09-0\d/g, "2026-09-07") };
  check("sitemap-lastmod: bulk-stamped dates fire", run(files).some(f => f.check === "sitemap-lastmod"));
}
/* No false positive: "+131%" next to "since" is not residue. */
{
  const files = { ...clean, "b/index.html": clean["b/index.html"].replace("<h1>H</h1>", "<h1>H</h1><span>+131%</span><span>since 2012</span>") };
  check("residue: no false positive on '131%since'", !run(files).some(f => f.check === "residue"));
}

console.log(failures ? `\n${failures} failing` : "\nall controls pass");
process.exit(failures ? 1 : 0);
