#!/usr/bin/env node
/*
 * site-upgrade.js - two head-only fixes across every existing article page,
 * including the ~100 hand-built pages tools/mkpage.js never touches.
 *
 *   1. Share image (STANDARD S5). Where og/<slug>.jpg exists (made by
 *      tools/ogcard.js), point og:image, twitter:image, their alt text, and the
 *      Article/WebPage image at it. The organization's own image is untouched.
 *   2. Person author (STANDARD S6). Where the Article author is the company
 *      ("#org") and the visible byline names Devin Day or Tim Nash, make the
 *      author that Person.
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
const PEOPLE = {
  "Devin Day": { "@type": "Person", "@id": `${SITE}/about/#devin-day`, name: "Devin Day", jobTitle: "Operations Officer", url: `${SITE}/about/`, worksFor: { "@id": `${SITE}/#org` } },
  "Tim Nash": { "@type": "Person", "@id": `${SITE}/about/#timmy-nash`, name: "Timothy Nash", alternateName: "Tim Nash", jobTitle: "Broker-in-Charge", url: `${SITE}/about/`, worksFor: { "@id": `${SITE}/#org` } },
};
PEOPLE["Timothy Nash"] = PEOPLE["Tim Nash"];

const ORG_AUTHOR = /"author"\s*:\s*\{\s*"@id"\s*:\s*"https:\/\/chapter3realty\.com\/#org"\s*\}/;
const escAttr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function upgrade(html, slug, site) {
  const changes = [];
  const $ = cheerio.load(html);
  const mainStart = html.indexOf("<main"), mainEnd = html.indexOf("</main>");
  const main = mainStart >= 0 ? html.slice(mainStart, mainEnd) : "";
  const byline = (main.match(/By <strong[^>]*>([^<]+)<\/strong>/) || [])[1];
  const person = byline && PEOPLE[byline.trim()];
  const card = fs.existsSync(path.join(site, "og", `${slug}.jpg`)) ? `${SITE}/og/${slug}.jpg` : null;
  const h1 = $("h1").first();
  const alt = h1.length ? cheerio.load((h1.html() || "").replace(/<br\s*\/?>/gi, " ")).text().replace(/\s+/g, " ").trim() : "";

  let out = html.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g, (block, body) => {
    let type; try { type = [].concat(JSON.parse(body)["@type"]).join(); } catch { return block; }
    let b = body;
    if (/^(?:Article|BlogPosting)$/.test(type)) {
      if (person && ORG_AUTHOR.test(b)) { b = b.replace(ORG_AUTHOR, `"author":${JSON.stringify(person)}`); changes.push(`author -> ${person.name}`); }
      if (card && b.includes(DEFAULT_OG)) { b = b.split(DEFAULT_OG).join(card); changes.push("Article.image"); }
    }
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
    if (!/"@type":\s*"(?:Article|BlogPosting)"/.test(html)) continue;
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
