#!/usr/bin/env node
/*
 * ogcard.js - render a unique 1200x630 share image for each article page.
 *
 * Why: all 131 pages on chapter3realty.com share one /og-image.jpg. Google's
 * image guidance asks for a page-specific preferred image and says to "avoid
 * using a generic image (for example, your site logo)". Every share on
 * Facebook, LinkedIn, iMessage and Slack shows the same card today.
 *
 * The card is built from the page's own eyebrow and two-line H1, set in the
 * site's self-hosted Fraunces and DM Sans, on the Navy ground of the current
 * og-image.jpg with the Brass rules. Output: <site>/og/<slug>.jpg
 *
 *   node tools/ogcard.js <site-dir> /invest/llc/ [/hoa/reserves/ ...]
 *   node tools/ogcard.js <site-dir> --all          every page with Article schema
 *
 * Then point the page at it: og:image, twitter:image, Article.image and
 * WebPage.primaryImageOfPage (website-patches/mkpage.patch does this for
 * generated pages). Look at every card once before shipping: a long H1 can
 * wrap to four lines, and only an eye catches a bad break.
 *
 * Needs Playwright with Chromium (preinstalled in Claude Code cloud sessions;
 * locally: npm i -D playwright && npx playwright install chromium).
 */
"use strict";
const fs = require("fs"), path = require("path");
const cheerio = require("cheerio");

function loadPlaywright() {
  for (const p of [undefined, "/opt/node-tools/node_modules", path.join(require("child_process").execSync("npm root -g").toString().trim())]) {
    try { return require(p ? require.resolve("playwright", { paths: [p] }) : "playwright"); } catch { /* next */ }
  }
  throw new Error("playwright not found: npm i -D playwright");
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const slug = (url) => url.replace(/^\/|\/$/g, "").replace(/\//g, "-") || "home";

function pageFacts(site, url) {
  const file = path.join(site, ...url.split("/").filter(Boolean), "index.html");
  const $ = cheerio.load(fs.readFileSync(file, "utf8"));
  const h1 = $("h1").first();
  const [line1, line2 = ""] = (h1.html() || "").split(/<br\s*\/?>/i).map(s => cheerio.load(s).text().replace(/\s+/g, " ").trim());
  const eyebrow = $(".eyebrow").first().text().replace(/\s+/g, " ").trim();
  const crumb = $(".breadcrumb a").eq(1).text().trim();
  return { file, line1, line2, eyebrow: eyebrow || crumb };
}

function fontCss(site) {
  /* Reuse the site's own @font-face rules, pointed at the local files. */
  const cssFile = fs.readdirSync(path.join(site, "assets")).find(f => /^fonts\..*\.css$/.test(f));
  if (!cssFile) return "";
  return fs.readFileSync(path.join(site, "assets", cssFile), "utf8").replace(/url\(\/assets\//g, `url(file://${path.join(site, "assets")}/`);
}

function cardHtml(f, fonts) {
  const len = f.line1.length;
  const size = len > 70 ? 52 : len > 52 ? 60 : len > 36 ? 68 : 78;
  return `<!doctype html><html><head><meta charset="utf-8"><style>${fonts}
*{margin:0;padding:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#1c2028;color:#f4efe8;font-family:'DM Sans',system-ui,sans-serif;position:relative;overflow:hidden}
.bar{position:absolute;left:0;right:0;height:10px;background:#c4783a}.t{top:0}.b{bottom:0}
.wrap{position:absolute;left:90px;right:90px;top:70px;bottom:70px;display:flex;flex-direction:column}
.eyebrow{font-size:22px;letter-spacing:.18em;text-transform:uppercase;color:#d4894a;font-weight:500;margin-bottom:28px}
h1{font-family:'Fraunces',Georgia,serif;font-weight:400;font-size:${size}px;line-height:1.08;letter-spacing:-.02em}
h1 em{display:block;font-style:italic;color:#c4783a;font-size:.62em;margin-top:18px;letter-spacing:-.01em}
.foot{margin-top:auto;display:flex;justify-content:space-between;align-items:baseline;font-size:26px;color:rgba(244,239,232,.7)}
.mark{font-family:'Fraunces',Georgia,serif;font-size:40px;color:#f4efe8;letter-spacing:-.03em}.mark span{color:#c4783a}
</style></head><body><div class="bar t"></div><div class="wrap">
<p class="eyebrow">${esc(f.eyebrow)}</p><h1>${esc(f.line1)}${f.line2 ? `<em>${esc(f.line2)}</em>` : ""}</h1>
<div class="foot"><span class="mark">Chapter <span>III</span></span><span>Myrtle Beach &middot; Grand Strand, SC</span></div>
</div><div class="bar b"></div></body></html>`;
}

async function main() {
  const [site, ...rest] = process.argv.slice(2);
  if (!site || !rest.length) { console.error("usage: node tools/ogcard.js <site-dir> </url/> ... | --all"); process.exit(2); }
  let urls = rest.filter(a => a !== "--all");
  if (rest.includes("--all")) {
    const walk = (d, out = []) => { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) walk(p, out); else if (f === "index.html") out.push(p); } return out; };
    urls = walk(site).filter(f => /"@type":\s*"(?:Article|BlogPosting)"/.test(fs.readFileSync(f, "utf8")))
      .map(f => "/" + path.relative(site, path.dirname(f)).split(path.sep).join("/") + "/");
  }
  const { chromium } = loadPlaywright();
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  const fonts = fontCss(site);
  fs.mkdirSync(path.join(site, "og"), { recursive: true });
  for (const url of urls) {
    const f = pageFacts(site, url);
    if (!f.line1) { console.log(`skip ${url}: no H1`); continue; }
    /* setContent runs on about:blank, which cannot fetch file:// fonts; a file URL can. */
    const tmp = path.join(require("os").tmpdir(), `ogcard-${process.pid}.html`);
    fs.writeFileSync(tmp, cardHtml(f, fonts));
    await page.goto(`file://${tmp}`, { waitUntil: "load" });
    const loaded = await page.evaluate(async () => {
      await Promise.all(["400 40px Fraunces", "italic 400 40px Fraunces", "500 20px 'DM Sans'"].map(x => document.fonts.load(x)));
      return document.fonts.check("400 40px Fraunces");
    });
    if (!loaded) throw new Error("Fraunces did not load; the card would render in a fallback serif");
    /* A title that overflows the card is a defect, not a styling choice. */
    const overflow = await page.evaluate(() => { const w = document.querySelector(".wrap"); return w.scrollHeight > w.clientHeight + 1; });
    const out = path.join(site, "og", `${slug(url)}.jpg`);
    await page.screenshot({ path: out, type: "jpeg", quality: 86 });
    console.log(`${overflow ? "OVERFLOW " : ""}${path.relative(site, out)}  "${f.line1}"`);
  }
  await browser.close();
}

module.exports = { slug, pageFacts, cardHtml };
if (require.main === module) main().catch(e => { console.error(e.message); process.exit(1); });
