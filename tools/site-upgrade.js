#!/usr/bin/env node
/*
 * site-upgrade.js - two head-only fixes across every existing article page,
 * including the ~100 hand-built pages tools/mkpage.js never touches.
 *
 *   1. Share image (STANDARD S5). Where og/<slug>.jpg exists (made by
 *      tools/ogcard.js), point og:image, twitter:image, their alt text, and the
 *      Article/WebPage image at it. The organization's own image is untouched.
 *   2. Company author (STANDARD S6, owner 2026-10-04). The site speaks as the
 *      company. A staff author becomes the company ("#org"); a named guest
 *      contributor keeps the byline. Devin Day is
 *      never named: his Person block, his reviewedBy and his entry in the
 *      company's employee list are removed. Visible bylines are in <main> and
 *      are not touched here; fix them in the spec or page.
 *
 *   node tools/site-upgrade.js <site-dir>            dry run: what would change
 *   node tools/site-upgrade.js <site-dir> --write    apply
 *
 * Nothing inside <main> changes, so `node build.js dates` leaves every page's
 * date alone (it reads prose only). After --write, in the website repo run
 * `node build.js preflight` and `git diff --stat`. Every changed file should
 * show a handful of lines in <head>, never in <main>.
 *
 * Edits are targeted string replacements inside the matching JSON-LD block,
 * not a re-serialisation, so the diff shows only what changed.
 */
"use strict";
const fs = require("fs"), path = require("path");
const cheerio = require("cheerio");

const SITE = "https://chapter3realty.com";
const DEFAULT_OG = `${SITE}/og-image.jpg`;
const ORG = { "@id": `${SITE}/#org` };
const NEVER = /\bDevin\b/;   /* never named (owner 2026-10-04) */
const isOrg = (a) => a && !Array.isArray(a) && a["@id"] === ORG["@id"] && Object.keys(a).length === 1;
const names = (v) => JSON.stringify(v || "");
/* Chapter3 staff as author. A named guest contributor (the CFP on /invest/strategies/dst/) keeps the byline. */
const isStaff = (a) => [].concat(a).some(x => x && (String(x["@id"] || "").startsWith(`${SITE}/about/`) || /\b(?:Devin|Tim|Timothy|Timmy) (?:Day|Nash)\b/.test(String(x.name || ""))));
const escAttr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function upgrade(html, slug, site) {
  const changes = [];
  const $ = cheerio.load(html);
  const mainStart = html.indexOf("<main"), mainEnd = html.indexOf("</main>");
  const main = mainStart >= 0 ? html.slice(mainStart, mainEnd) : "";
  const card = fs.existsSync(path.join(site, "og", `${slug}.jpg`)) ? `${SITE}/og/${slug}.jpg` : null;
  const h1 = $("h1").first();
  const alt = h1.length ? cheerio.load((h1.html() || "").replace(/<br\s*\/?>/gi, " ")).text().replace(/\s+/g, " ").trim() : "";

  let out = html.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g, (block, body) => {
    let j; try { j = JSON.parse(body); } catch { return block; }
    const type = [].concat(j["@type"]).join();
    if (type === "Person" && NEVER.test(names(j.name))) { changes.push("removed Person Devin Day"); return ""; }
    let b = body, edited = false;
    if (/^(?:Article|BlogPosting)$/.test(type)) {
      if (j.author && !isOrg(j.author) && isStaff(j.author)) { changes.push(`author ${names([].concat(j.author)[0].name || [].concat(j.author)[0]["@id"])} -> company`); j.author = ORG; edited = true; }
      if (j.reviewedBy && NEVER.test(names(j.reviewedBy))) { delete j.reviewedBy; changes.push("removed reviewedBy Devin Day"); edited = true; }
    }
    if (Array.isArray(j.employee) && j.employee.some(e => NEVER.test(names(e)))) {
      j.employee = j.employee.filter(e => !NEVER.test(names(e))); if (!j.employee.length) delete j.employee;
      changes.push("removed employee Devin Day"); edited = true;
    }
    if (edited) b = body.includes("\n") ? JSON.stringify(j, null, 2) : JSON.stringify(j);
    if (/^(?:Article|BlogPosting)$/.test(type) && card && b.includes(DEFAULT_OG)) { b = b.split(DEFAULT_OG).join(card); changes.push("Article.image"); }
    if (type === "WebPage" && card && b.includes(DEFAULT_OG)) { b = b.split(DEFAULT_OG).join(card); changes.push("WebPage.primaryImageOfPage"); }
    if (b !== body) { try { JSON.parse(b); } catch (e) { throw new Error(`edit broke JSON-LD on ${slug}: ${e.message}`); } }
    return block.replace(body, () => b);
  });

  if (card) {
    const metas = [
      [/<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${card}">`],
      [/<meta name="twitter:image" content="[^"]*">/, `<meta name="twitter:image" content="${card}">`],
      [/<meta property="og:image:alt" content="[^"]*">/, `<meta property="og:image:alt" content="${escAttr(alt)}">`],
      [/<meta name="twitter:image:alt" content="[^"]*">/, `<meta name="twitter:image:alt" content="${escAttr(alt)}">`],
    ];
    for (const [re, val] of metas) if (re.test(out) && out.match(re)[0] !== val) { out = out.replace(re, val); changes.push(val.match(/(?:property|name)="([^"]+)"/)[1]); }
  }

  /* Guard: nothing inside <main> may change. */
  if (out.slice(out.indexOf("<main"), out.indexOf("</main>")) !== main) throw new Error(`refusing: <main> would change on ${slug}`);
  return { out, changes };
}

function main() {
  const [site, flag] = process.argv.slice(2);
  if (!site) { console.error("usage: node tools/site-upgrade.js <site-dir> [--write]"); process.exit(2); }
  const walk = (d, o = []) => { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) walk(p, o); else if (f === "index.html") o.push(p); } return o; };
  let files = 0, edits = 0;
  for (const file of walk(site)) {
    const html = fs.readFileSync(file, "utf8");
    if (!/"@type":\s*"(?:Article|BlogPosting)"/.test(html) && !/application\/ld\+json[^<]*Devin/.test(html)) continue;
    const rel = path.relative(site, path.dirname(file)).split(path.sep).join("/");
    const slug = rel.replace(/\//g, "-") || "home";
    const { out, changes } = upgrade(html, slug, site);
    if (!changes.length) continue;
    files++; edits += changes.length;
    console.log(`/${rel}/  ${changes.join(", ")}`);
    if (flag === "--write") fs.writeFileSync(file, out);
  }
  console.log(`\n${files} pages, ${edits} edits${flag === "--write" ? " written" : " (dry run; add --write to apply)"}`);
}

module.exports = { upgrade };
if (require.main === module) main();
