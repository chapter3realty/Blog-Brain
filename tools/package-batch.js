#!/usr/bin/env node
/*
 * package-batch.js - build a batch's upload package for the website, and test it.
 *
 *   node tools/package-batch.js batches/2026-10-a --site <website clone>
 *   node tools/package-batch.js batches/2026-10-a --site <clone> --today 2026-10-11 --keep
 *
 * <website clone> is a clone of chapter3realty/Chapter3-Website on the live branch
 * (batches/<batch>/upload.json names it). The script never changes it: it makes its
 * own clones of it in a temporary folder, and it never pushes or deploys.
 *
 * What it does, from the current Blog-Brain files:
 *   1. Clone the site. Check the patches on hold (they should not be applied), then
 *      apply the website patches in order, each after `git apply --check`.
 *   2. Copy the specs, the data files, the Blog-Brain tools the specs need (to
 *      tools/blog-brain/ in the website) and the batch photos. Apply the batch diffs.
 *   3. Build every page with mkpage. Keep only the photos the built pages use.
 *   4. Add each page to sitemap.xml (with its images) and llms.txt (with its meta
 *      description), after the hub's entry. Both come from the built pages, so they
 *      cannot drift from the specs.
 *   5. Write the package to batches/<batch>/upload/:
 *        site/                      files to copy into the website folder
 *        batch-<batch>.patch        one patch for the files the site already has
 *        MANIFEST.txt               every file with its size and SHA-256
 *        README-UPLOAD.md           the commands (PowerShell and bash) and the test results
 *        CHECKLIST-AFTER-DEPLOY.md  what to look at once it is live
 *   6. Test the package the way the owner will use it, on a second fresh clone: copy,
 *      apply, mkpage each spec, build.js rehash, dates, llmsfull, check, audit, then a
 *      local commit (never pushed) and build.js preflight. Then this repo's score.js
 *      (each page), claims-scan.js, facts-check.js and site-audit.js, compared with
 *      the clean live branch. The results go into README-UPLOAD.md.
 *
 * Exit 1 if any step or gate fails. The package is still written, with the failure
 * in its README, so the cause can be read.
 */
"use strict";
const fs = require("fs"), path = require("path"), os = require("os"), crypto = require("crypto");
const { execFileSync, spawnSync } = require("child_process");

const BB = path.join(__dirname, "..");
const SITE_URL = "https://chapter3realty.com";

/* ---------------------------------------------------------------- arguments */
const argv = process.argv.slice(2);
const opt = (name) => { const i = argv.indexOf(name); return i >= 0 ? argv[i + 1] : undefined; };
const valueArgs = new Set(["--site", "--today", "--out", "--work"].flatMap((n) => { const i = argv.indexOf(n); return i >= 0 ? [i, i + 1] : []; }));
const batchArg = argv.find((a, i) => !a.startsWith("--") && !valueArgs.has(i)) || "batches/2026-10-a";
const BATCH = path.resolve(batchArg);
const SITE = opt("--site") && path.resolve(opt("--site"));
const TODAY = opt("--today") || process.env.SCORE_TODAY || localDate();
const KEEP = argv.includes("--keep");
if (!SITE || !fs.existsSync(path.join(SITE, "build.js"))) {
  console.error("usage: node tools/package-batch.js <batch-dir> --site <website clone on the live branch> [--today YYYY-MM-DD] [--out <dir>] [--keep]");
  process.exit(2);
}
const M = JSON.parse(fs.readFileSync(path.join(BATCH, "upload.json"), "utf8"));
const OUT = path.resolve(opt("--out") || path.join(BATCH, "upload"));
const WORK = fs.mkdtempSync(path.join(path.resolve(opt("--work") || os.tmpdir()), `package-${M.batch}-`));
const PATCH_NAME = `batch-${M.batch}.patch`;

function localDate() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/* ---------------------------------------------------------------- helpers */
const log = (s) => console.log(s);
const failures = [];
const fail = (s) => { failures.push(s); console.log(`FAIL  ${s}`); };

/* Run a command; return { code, out } with stdout and stderr together. */
function run(cmd, args, cwd, env = {}) {
  const r = spawnSync(cmd, args, { cwd, env: { ...process.env, ...env }, encoding: "utf8", maxBuffer: 1 << 28 });
  return { code: r.status === null ? 1 : r.status, out: `${r.stdout || ""}${r.stderr || ""}`.replace(/\s+$/, "") };
}
const git = (cwd, ...args) => execFileSync("git", args, { cwd, encoding: "utf8", maxBuffer: 1 << 28 }).replace(/\s+$/, "");

function copyFile(from, to) { fs.mkdirSync(path.dirname(to), { recursive: true }); fs.copyFileSync(from, to); }
function walk(dir, base = dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, base, out); else out.push(path.relative(base, p).split(path.sep).join("/"));
  }
  return out.sort();
}
const sha256 = (f) => crypto.createHash("sha256").update(fs.readFileSync(f)).digest("hex");
const tail = (s, n) => s.split("\n").slice(-n).join("\n");
const pageFile = (root, url) => path.join(root, "chapter3realty", ...url.replace(/^\/|\/$/g, "").split("/"), "index.html");

function cloneSite(name) {
  const dir = path.join(WORK, name);
  execFileSync("git", ["clone", "--quiet", "--branch", M.branch, SITE, dir], { stdio: "pipe" });
  return dir;
}

/* The URL a spec builds, read the way mkpage reads it (the spec needs the website's tools). */
function specUrl(site, spec) {
  const r = run(process.execPath, ["-e", `process.stdout.write(require(${JSON.stringify(path.join(site, "specs", spec))}).url)`], site);
  if (r.code !== 0 || !/^\/.*\/$/.test(r.out)) throw new Error(`cannot read the url of specs/${spec}: ${tail(r.out, 5)}`);
  return r.out;
}

/* Every /images/ path a built page uses (src, srcset, og:image, JSON-LD), as site paths. */
function imagesUsed(html) {
  const set = new Set();
  for (const m of html.matchAll(/(?:https:\/\/chapter3realty\.com)?(\/images\/[A-Za-z0-9._\/-]+\.(?:webp|jpe?g|png|svg|avif|gif))/g)) set.add(m[1]);
  return [...set].sort();
}

/* The images a page shows, for the image sitemap: each <img> in <main> at its largest
   width, then the hero crops in Article.image. */
function sitemapImages(html) {
  const main = (html.match(/<main[\s\S]*?<\/main>/i) || [html])[0];
  const list = [];
  const add = (u) => { if (u && /^\/images\//.test(u) && !list.includes(u)) list.push(u); };
  for (const m of main.matchAll(/<img\b[^>]*>/gi)) {
    const tag = m[0];
    const srcset = (tag.match(/\bsrcset="([^"]+)"/i) || [])[1];
    if (srcset) {
      const best = srcset.split(",").map((s) => s.trim().split(/\s+/)).map(([u, w]) => ({ u: u.replace(SITE_URL, ""), w: parseInt(w, 10) || 0 }))
        .sort((a, b) => b.w - a.w)[0];
      add(best && best.u);
    } else add(((tag.match(/\bsrc="([^"]+)"/i) || [])[1] || "").replace(SITE_URL, ""));
  }
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    let j; try { j = JSON.parse(m[1]); } catch { continue; }
    if (j["@type"] !== "Article") continue;
    for (const im of [].concat(j.image || [])) add(String((im && im.url) || im || "").replace(SITE_URL, ""));
  }
  return list;
}

const metaDescription = (html) => ((html.match(/<meta name="description" content="([^"]*)"/i) || [])[1] || "")
  .replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const dateModified = (html) => (html.match(/"dateModified"\s*:\s*"(\d{4}-\d{2}-\d{2})/) || [])[1];

/* Add or refresh the batch's entries in sitemap.xml and llms.txt, right after the hub. */
function addListings(site, pages) {
  const smPath = path.join(site, "chapter3realty", "sitemap.xml");
  let sm = fs.readFileSync(smPath, "utf8");
  if (!/xmlns:image=/.test(sm)) sm = sm.replace(/<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">/, '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">');
  if (!/xmlns:image=/.test(sm)) throw new Error("sitemap.xml: could not add the image namespace to <urlset>");
  const hubLine = new RegExp(`^.*<loc>${SITE_URL}${M.listAfter}</loc>.*$`, "m");
  let anchor = (sm.match(hubLine) || [])[0];
  if (!anchor) throw new Error(`sitemap.xml has no entry for ${M.listAfter}`);
  for (const p of pages) {
    const imgs = p.sitemapImages.map((u) => `<image:image><image:loc>${SITE_URL}${u}</image:loc></image:image>`).join("");
    /* The lastmod is the page's own dateModified for now; `node build.js dates` sets the real one. */
    const line = `<url><loc>${SITE_URL}${p.url}</loc><lastmod>${p.dateModified}</lastmod><changefreq>${M.sitemap.changefreq}</changefreq><priority>${M.sitemap.priority}</priority>${imgs}</url>`;
    const existing = sm.match(new RegExp(`^.*<loc>${SITE_URL}${p.url}</loc>.*$`, "m"));
    if (existing) sm = sm.replace(existing[0], line.replace(/<lastmod>[^<]*<\/lastmod>/, (existing[0].match(/<lastmod>[^<]*<\/lastmod>/) || [""])[0]));
    else { sm = sm.replace(anchor, `${anchor}\n${line}`); anchor = line; }
  }
  fs.writeFileSync(smPath, sm);

  const llPath = path.join(site, "chapter3realty", "llms.txt");
  let ll = fs.readFileSync(llPath, "utf8");
  let llAnchor = (ll.match(new RegExp(`^- \\[[^\\]]+\\]\\(${SITE_URL}${M.listAfter}\\):.*$`, "m")) || [])[0];
  if (!llAnchor) throw new Error(`llms.txt has no entry for ${M.listAfter}`);
  for (const p of pages) {
    const line = `- [${p.name}](${SITE_URL}${p.url}): ${p.description}`;
    const existing = ll.match(new RegExp(`^- \\[[^\\]]+\\]\\(${SITE_URL}${p.url}\\):.*$`, "m"));
    if (existing) ll = ll.replace(existing[0], line);
    else { ll = ll.replace(llAnchor, `${llAnchor}\n${line}`); llAnchor = line; }
  }
  fs.writeFileSync(llPath, ll);
}

/* ---------------------------------------------------------------- 1 to 4: build */
const report = { steps: [], onHold: [], patches: [], pages: [], tests: [], files: {} };
const step = (name, ok, detail = "") => { report.steps.push({ name, ok, detail }); log(`${ok ? "ok  " : "FAIL"}  ${name}${detail ? `  ${detail.split("\n")[0]}` : ""}`); if (!ok) failures.push(`${name}: ${detail}`); };

const liveHead = git(SITE, "rev-parse", "--short", "HEAD");
const liveBranch = git(SITE, "rev-parse", "--abbrev-ref", "HEAD");
const liveSubject = git(SITE, "log", "-1", "--pretty=%s");
log(`site: ${SITE} at ${liveHead} (${liveBranch}): ${liveSubject}`);
if (liveBranch !== M.branch) fail(`the site clone is on ${liveBranch}, not ${M.branch}`);
if (git(SITE, "status", "--porcelain")) log("note: the site clone has uncommitted changes; the package is built from its last commit only.");
log(`work folder: ${WORK}`);

const A = cloneSite("build");
for (const [p, why] of Object.entries(M.notApplied || {})) {
  const f = path.join(BB, "website-patches", p);
  const r = fs.existsSync(f) ? run("git", ["apply", "--check", f], A) : { code: 1, out: "file not found" };
  report.onHold.push({ patch: p, why, applies: r.code === 0 });
}
for (const p of M.websitePatches) {
  const f = path.join(BB, "website-patches", p);
  const r = run("git", ["apply", "--check", f], A);
  report.patches.push({ patch: `website-patches/${p}`, ok: r.code === 0, detail: r.out });
  if (r.code !== 0) { step(`git apply --check website-patches/${p}`, false, r.out); break; }
  git(A, "apply", f);
}
step("website patches apply in order on a clean clone", report.patches.length === M.websitePatches.length && report.patches.every((p) => p.ok));

/* Files the package copies in. */
const copies = [];
for (const f of walk(path.join(BATCH, M.specs))) if (f.endsWith(".js")) copies.push([path.join(BATCH, M.specs, f), `specs/${f}`]);
for (const f of walk(path.join(BATCH, M.data))) copies.push([path.join(BATCH, M.data, f), `data/${f}`]);
for (const f of M.blogBrainTools.files) copies.push([path.join(BB, f), `${M.blogBrainTools.to}/${f}`]);
for (const [from, to] of copies) copyFile(from, path.join(A, to));
for (const f of walk(path.join(BATCH, M.images.from))) copyFile(path.join(BATCH, M.images.from, f), path.join(A, M.images.to, f));

for (const d of M.batchDiffs) {
  const f = path.join(BATCH, d);
  const r = run("git", ["apply", "--check", f], A);
  report.patches.push({ patch: `batches/${M.batch}/${d}`, ok: r.code === 0, detail: r.out });
  if (r.code !== 0) { step(`git apply --check ${d}`, false, r.out); continue; }
  git(A, "apply", f);
}
step("batch diffs apply after the website patches", M.batchDiffs.every((d) => report.patches.find((p) => p.patch.endsWith(`/${d}`) && p.ok)));

/* Build. Without BLOG_BRAIN set, the kit must find the copy in tools/blog-brain/. */
const buildEnv = { BLOG_BRAIN: "" };
for (const pg of M.pages) {
  const r = run(process.execPath, ["tools/mkpage.js", `specs/${pg.spec}`], A, buildEnv);
  step(`mkpage specs/${pg.spec}`, r.code === 0, r.code === 0 ? r.out.split("\n").pop() : r.out);
  if (r.code !== 0) continue;
  const url = specUrl(A, pg.spec);
  const html = fs.readFileSync(pageFile(A, url), "utf8");
  report.pages.push({ ...pg, url, html, description: metaDescription(html), dateModified: dateModified(html), images: imagesUsed(html), sitemapImages: sitemapImages(html) });
}

/* Keep only the photos a page uses. */
const used = new Set(report.pages.flatMap((p) => p.images));
const imageRoot = "/" + M.images.to.replace(/^chapter3realty\//, "") + "/";
const shipped = [], dropped = [];
for (const f of walk(path.join(A, M.images.to))) {
  const u = imageRoot + f;
  if (used.has(u)) shipped.push(`${M.images.to}/${f}`); else { dropped.push(f); fs.unlinkSync(path.join(A, M.images.to, f)); }
}
const missing = [...used].filter((u) => !fs.existsSync(path.join(A, "chapter3realty", u)));
step("every image the pages use is in the batch", !missing.length, missing.join(", "));
report.files.images = shipped; report.files.droppedImages = dropped;

/* Maps over 60 KB are written as files by the kit; ship them too. */
const extra = git(A, "status", "--porcelain", "--untracked-files=all").split("\n").filter(Boolean)
  .map((l) => l.slice(3)).filter((f) => f.startsWith("chapter3realty/images/") && !f.startsWith(M.images.to + "/"));
for (const f of extra) shipped.push(f);

try { addListings(A, report.pages); step("sitemap.xml and llms.txt entries made from the built pages", true); }
catch (e) { step("sitemap.xml and llms.txt entries", false, e.message); }

/* The patch: every change to a file the site already tracks. New files ship as files. */
const patch = git(A, "diff", "--binary") + "\n";
const touched = git(A, "diff", "--name-only").split("\n").filter(Boolean);
const generated = touched.filter((f) => report.pages.some((p) => pageFile("", p.url).replace(/^[\\/]/, "").split(path.sep).join("/") === f));
step("the patch does not touch a generated page", !generated.length, generated.join(", "));

/* ---------------------------------------------------------------- 5: write */
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, "site"), { recursive: true });
const siteFiles = [...copies.map(([, to]) => to), ...shipped].sort();
for (const f of siteFiles) copyFile(path.join(A, f), path.join(OUT, "site", f));
fs.writeFileSync(path.join(OUT, PATCH_NAME), patch);
report.files.site = siteFiles; report.files.touched = touched;

/* ---------------------------------------------------------------- 6: test */
const B = cloneSite("test");
const T = (name, r, okTest = (x) => x.code === 0, keep = 12) => {
  const ok = okTest(r);
  report.tests.push({ name, ok, out: tail(r.out, keep) });
  log(`${ok ? "ok  " : "FAIL"}  ${name}`);
  if (!ok) failures.push(`${name}\n${tail(r.out, keep)}`);
  return r;
};
T(`git apply --check ${PATCH_NAME}`, run("git", ["apply", "--check", path.join(OUT, PATCH_NAME)], B));
for (const f of walk(path.join(OUT, "site"))) copyFile(path.join(OUT, "site", f), path.join(B, f));
T(`git apply ${PATCH_NAME}`, run("git", ["apply", path.join(OUT, PATCH_NAME)], B));
for (const pg of M.pages) T(`node tools/mkpage.js specs/${pg.spec}`, run(process.execPath, ["tools/mkpage.js", `specs/${pg.spec}`], B, buildEnv), undefined, 2);
const same = report.pages.every((p) => fs.existsSync(pageFile(B, p.url)) && fs.readFileSync(pageFile(B, p.url), "utf8") === p.html);
T("the pages built from the package match the first build byte for byte", { code: same ? 0 : 1, out: same ? "identical" : "different" });
T("node build.js rehash", run(process.execPath, ["build.js", "rehash"], B), undefined, 6);
T("node build.js dates", run(process.execPath, ["build.js", "dates"], B), undefined, 16);
T("node build.js llmsfull", run(process.execPath, ["build.js", "llmsfull"], B), undefined, 3);
T("node build.js check", run(process.execPath, ["build.js", "check"], B), undefined, 6);
T("node build.js audit", run(process.execPath, ["build.js", "audit"], B), undefined, 8);

/* Listings: every page in sitemap.xml (with images that exist), llms.txt and llms-full.txt. */
{
  const sm = fs.readFileSync(path.join(B, "chapter3realty", "sitemap.xml"), "utf8");
  const ll = fs.readFileSync(path.join(B, "chapter3realty", "llms.txt"), "utf8");
  const lf = fs.readFileSync(path.join(B, "chapter3realty", "llms-full.txt"), "utf8");
  const lines = [];
  let ok = /<urlset[^>]*xmlns:image="http:\/\/www\.google\.com\/schemas\/sitemap-image\/1\.1"/.test(sm) && (sm.match(/<url>/g) || []).length === (sm.match(/<\/url>/g) || []).length;
  for (const p of report.pages) {
    const entry = (sm.match(new RegExp(`<url><loc>${SITE_URL}${p.url}</loc>[\\s\\S]*?</url>`)) || [""])[0];
    const locs = [...entry.matchAll(/<image:loc>([^<]+)<\/image:loc>/g)].map((m) => m[1].replace(SITE_URL, ""));
    const gone = locs.filter((u) => !fs.existsSync(path.join(B, "chapter3realty", u)));
    const lastmod = (entry.match(/<lastmod>([^<]+)</) || [])[1];
    const inLl = ll.includes(`(${SITE_URL}${p.url}): ${p.description}`);
    const inLf = lf.includes(`URL: ${SITE_URL}${p.url}`) && lf.includes(`Summary: ${p.description}`);
    const h1 = ((p.html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    const h1In = lf.includes(h1.replace(/&amp;/g, "&").slice(0, 40));
    const good = !!entry && locs.length > 0 && !gone.length && inLl && inLf && h1In;
    ok = ok && good;
    lines.push(`${p.url}: sitemap ${entry ? `yes, lastmod ${lastmod}, ${locs.length} images${gone.length ? `, ${gone.length} missing` : ""}` : "NO"}; llms.txt ${inLl ? "yes" : "NO"}; llms-full.txt ${inLf && h1In ? "yes, with its text" : "NO"}`);
  }
  T("sitemap.xml, llms.txt and llms-full.txt list the pages", { code: ok ? 0 : 1, out: lines.join("\n") }, undefined, 20);
}

/* The deploy gate. deploy.ps1 runs preflight on the commit it deploys, so commit here (never pushed). */
git(B, "add", "-A");
execFileSync("git", ["-c", "user.name=package-batch", "-c", "user.email=package-batch@localhost", "commit", "--quiet", "-m", `Batch ${M.batch} (package test, not pushed)`], { cwd: B });
T("node build.js preflight (after a local commit)", run(process.execPath, ["build.js", "preflight"], B), undefined, 14);

/* Blog-Brain gates, each page, then sitewide against the clean live branch. */
const scoreEnv = { SCORE_TODAY: TODAY };
for (const p of report.pages) {
  const r = run(process.execPath, [path.join(BB, "tools", "score.js"), "--site", path.join(B, "chapter3realty"), "--only", p.url], BB, scoreEnv);
  const head = r.out.split("\n").slice(0, 2).join("\n");
  const misses = r.out.split("\n").filter((l) => /^\s+(FAIL|\s*\d+%)\s/.test(l) || /BLOCKER/.test(l)).join("\n");
  T(`score.js --only ${p.url}`, { code: /Score (9\d|100)\/100/.test(head) && !/BLOCK/i.test(r.out) ? 0 : 1, out: head + (misses ? `\n${misses}` : "") }, undefined, 20);
}
const scan = (tool, args, dir) => run(process.execPath, [path.join(BB, "tools", tool), dir, ...args], BB, scoreEnv);
const key = (f) => `${f.url}|${f.rule || f.fact || f.check}|${f.sentence || f.text || f.detail || f.match}`;
function compare(name, before, after, items, show, keyOf = key) {
  const b = new Set(items(before).map(keyOf)), a = items(after);
  const added = a.filter((f) => !b.has(keyOf(f)));
  const aKeys = new Set(a.map(keyOf));
  const removed = items(before).filter((f) => !aKeys.has(keyOf(f)));
  const out = [`live branch: ${items(before).length}; after the package: ${a.length}; new: ${added.length}; fixed: ${removed.length}`]
    .concat(added.slice(0, 15).map((f) => `  NEW ${show(f)}`)).concat(removed.slice(0, 25).map((f) => `  fixed ${show(f)}`));
  T(name, { code: added.length ? 1 : 0, out: out.join("\n") }, undefined, 45);
}
const parse = (r) => { try { return JSON.parse(r.out.slice(r.out.search(/[[{]/))); } catch { return null; } };
{
  const before = parse(scan("claims-scan.js", ["--json"], SITE)), after = parse(scan("claims-scan.js", ["--json"], B));
  const items = (j) => (Array.isArray(j) ? j : (j && (j.findings || [])) || []);
  /* A sentence already live on the branch (the shared header, footer and search modal are on
     every page) is not new copy: a new page that carries it adds no new claim. Compare by
     rule and sentence, and list such findings apart. */
  const bySentence = (f) => `${f.rule}|${f.sentence}`;
  const live = new Map();
  for (const f of items(before)) live.set(bySentence(f), (live.get(bySentence(f)) || 0) + 1);
  const show = (f) => `${(f.severity || "").toUpperCase()} ${f.rule} ${f.url} [${f.surface}] "${String(f.sentence || "").slice(0, 120)}"`;
  compare("claims-scan.js: no new banned claim on any surface", before, after, items, show, bySentence);
  const mine = items(after).filter((f) => report.pages.some((p) => f.url === p.url) || (M.checkPages || []).includes(f.url));
  const fresh = mine.filter((f) => !live.has(bySentence(f))), shared = mine.filter((f) => live.has(bySentence(f)));
  const sharedBy = [...new Set(shared.map(bySentence))].map((k) => `  ${shared.filter((f) => bySentence(f) === k).length} of these pages, and ${live.get(k)} pages on the live branch: ${show(shared.find((f) => bySentence(f) === k)).replace(/ \/\S* /, " ")}`);
  T("claims-scan.js: the new pages and the pages this batch edits", { code: fresh.some((f) => /critical|high/i.test(f.severity)) ? 1 : 0,
    out: [`findings in copy this batch wrote: ${fresh.length ? "" : "none"}`, ...fresh.map((f) => `  ${show(f)}`),
      `already live sitewide (shared chrome or older copy, not from this batch): ${shared.length}`, ...sharedBy].join("\n") }, undefined, 20);
}
{
  const before = parse(scan("facts-check.js", ["--json"], SITE)), after = parse(scan("facts-check.js", ["--json"], B));
  const items = (j) => (j && j.wrong) || [];
  compare("facts-check.js: no new known-wrong fact (pages, llms.txt, llms-full.txt)", before, after, items, (f) => `${f.fact} ${f.url} "${String(f.sentence).slice(0, 120)}"`);
  const ours = new Set([...report.pages.map((p) => p.url), ...(M.checkPages || []), "/llms.txt", "/llms-full.txt"]);
  const left = items(after).filter((f) => ours.has(f.url) && (f.url.startsWith("/llms") ? /55-plus|seasons|grande|myrtle-trace|del-webb/i.test(f.fact) : true));
  T("facts-check.js: none on the new pages, the edited pages or the batch's facts in llms files", { code: left.length || (after && after.stale && after.stale.length) ? 1 : 0, out: left.length ? left.map((f) => `${f.fact} ${f.url} "${String(f.sentence).slice(0, 120)}"`).join("\n") : `none; stale registry entries: ${(after && after.stale || []).length}` }, undefined, 20);
}
{
  const before = parse(scan("site-audit.js", ["--json"], SITE)), after = parse(scan("site-audit.js", ["--json"], B));
  const items = (j) => (Array.isArray(j) ? j : []).filter((f) => f.level === "error");
  compare("site-audit.js: no new error (links, anchors, markup, residue, forms, sources)", before, after, items, (f) => `${f.check} ${f.url} ${String(f.detail).slice(0, 140)}`);
}

/* ---------------------------------------------------------------- README and checklist */
const sizeOf = (f) => fs.statSync(path.join(OUT, f)).size;
const manifestFiles = walk(OUT).filter((f) => !/^(README-UPLOAD|CHECKLIST-AFTER-DEPLOY|MANIFEST)\./.test(f));
fs.writeFileSync(path.join(OUT, "MANIFEST.txt"),
  `Upload package for batch ${M.batch}. Built ${TODAY} from Blog-Brain ${bbHead()} against the live branch at ${liveHead}.\nsize  sha256  path\n` +
  manifestFiles.map((f) => `${sizeOf(f)}  ${sha256(path.join(OUT, f))}  ${f}`).join("\n") + "\n");

function bbHead() { try { return git(BB, "rev-parse", "--short", "HEAD") + (git(BB, "status", "--porcelain") ? " (with uncommitted changes)" : ""); } catch { return "(unknown)"; } }

const passed = !failures.length;
const specCmds = M.pages.map((p) => `node tools/mkpage.js specs/${p.spec}`);
const imgCount = report.files.images.length;
const imgBytes = report.files.images.reduce((s, f) => s + fs.statSync(path.join(OUT, "site", f)).size, 0);
const fence = (s) => "```\n" + s + "\n```";
const pageList = report.pages.map((p) => `- ${p.name}: ${SITE_URL}${p.url}`).join("\n");
const testBlock = report.tests.map((t) => `### ${t.ok ? "PASS" : "FAIL"}: ${t.name}\n\n${fence(t.out || "(no output)")}`).join("\n\n");

const readme = `# Upload package: batch ${M.batch}

${passed ? "**Tested: every step and gate passed.**" : "**NOT READY: a step or gate failed. See the test results below. Do not apply this package.**"}

Built ${TODAY} by \`node tools/package-batch.js batches/${M.batch} --site <clone>\` from Blog-Brain ${bbHead()}, against the live branch \`${M.branch}\` at commit ${liveHead} ("${liveSubject}").

When the specs change, rebuild the package with the same command. Do not edit files in this folder by hand.

## What it adds

${pageList}

It also changes pages the site already has:

- \`/buyers/55-plus-communities/\` (the hub): links to the four pages, and its figures for the four communities now match the pages (prices, HOA fees, home counts). The gate claims for Seasons at Prince Creek West and Del Webb at Grande Dunes are gone; no 2026 source confirms either gate.
- \`/buyers/retirees/\` and \`/buyers/golf-communities/\`: the same gate claims, removed. The Blackmoor story on the golf page now says only what the story bank records.
- \`sitemap.xml\`: the four pages, with their photos (Google image sitemap).
- \`llms.txt\`: the four pages, with their descriptions; the hub's fee range now reads "from $43/mo".
- \`llms-full.txt\`: regenerated by \`node build.js llmsfull\`, so it carries the four pages' text.
- \`tools/mkpage.js\` and the stylesheets: the six website patches (see Blog-Brain \`website-patches/README.md\`).

## What is in this folder

| Path | What |
|---|---|
| \`${PATCH_NAME}\` | One patch for the files the site already has (${report.files.touched.length} files). Text only. |
| \`site/specs/\` | The four page specs and the shared kit, \`_55-plus-kit.js\`. |
| \`site/data/\` | \`55-plus-communities.json\`, \`photos.json\`, \`places.json\`. The specs read them. |
| \`site/tools/blog-brain/\` | The Blog-Brain tools the kit uses to draw maps, icons and photo blocks, with the map data. The kit looks here first. |
| \`site/${M.images.to}/\` | ${imgCount} photos (${(imgBytes / 1048576).toFixed(1)} MB, WebP), only those the four pages use. Binary files, copied as they are; they are not in the patch. |
| \`MANIFEST.txt\` | Every file with its size and SHA-256. |
| \`CHECKLIST-AFTER-DEPLOY.md\` | What to look at once it is live. |

Patches applied, in this order, to make \`${PATCH_NAME}\`:

${report.patches.map((p, i) => `${i + 1}. \`${p.patch}\``).join("\n")}

Not applied:

${report.onHold.map((h) => `- \`website-patches/${h.patch}\`: ${h.why} \`git apply --check\` on the live branch: ${h.applies ? "applies" : "does not apply"}.`).join("\n")}

${report.files.droppedImages.length} batch photos are left out because no page uses them (among them the five the kit refuses: the uploader is not the author, or the subject is a brand sign). The share cards in Blog-Brain's \`og/\` folder are not shipped: these pages share their hero photo (\`mkpage-photos.patch\`).

## Before you start

- Work in the website clone that \`deploy.ps1\` uses (\`C:\\c3\` unless you chose another).
- \`deploy.ps1\` deploys what is on GitHub. It throws away anything not committed and pushed. So the steps end with a commit and a push.
- Run every step on the same day, and commit the same day. \`node build.js dates\` dates the new and changed pages to today, and the deploy gate checks those dates against the commit.
- Never hand-edit a page this builds. Change the spec in Blog-Brain and rebuild the package.

## Windows PowerShell

\`\`\`powershell
cd C:\\c3
git checkout ${M.branch}
git pull origin ${M.branch}
git status                       # must say: nothing to commit, working tree clean

# Where this folder is (the Blog-Brain clone, branch claude/beautiful-bell-7fe8p5)
$U = "C:\\Blog-Brain\\batches\\${M.batch}\\upload"

git apply --check "$U\\${PATCH_NAME}"      # no output means it will apply
Copy-Item -Path "$U\\site\\*" -Destination . -Recurse -Force
git apply "$U\\${PATCH_NAME}"

${specCmds.join("\n")}
node build.js rehash
node build.js dates
node build.js llmsfull
node build.js check
node build.js audit

git status                       # the new pages, specs, data, tools\\blog-brain and photos, and the changed files
git add -A
git commit -m "Batch ${M.batch}: four 55+ community pages, hub figures, sitemap and llms files"
node build.js preflight          # the same gate deploy.ps1 runs; it must end without FAIL
git push origin ${M.branch}
\`\`\`

Then deploy as usual with \`deploy.ps1\`.

## bash (macOS, Linux, Git Bash)

\`\`\`bash
cd <website clone>
git checkout ${M.branch}
git pull origin ${M.branch}
git status                       # must say: nothing to commit, working tree clean

U=<Blog-Brain>/batches/${M.batch}/upload

git apply --check "$U/${PATCH_NAME}"
cp -R "$U/site/." .
git apply "$U/${PATCH_NAME}"

${specCmds.join("\n")}
node build.js rehash
node build.js dates
node build.js llmsfull
node build.js check
node build.js audit

git add -A
git commit -m "Batch ${M.batch}: four 55+ community pages, hub figures, sitemap and llms files"
node build.js preflight
git push origin ${M.branch}
\`\`\`

## If a step fails

- **\`git apply --check\` fails.** The live branch changed after this package was built (it was built on ${liveHead}). Nothing has been changed yet. In Blog-Brain, rebuild the package on a fresh clone: \`node tools/package-batch.js batches/${M.batch} --site <fresh clone>\`. Do not edit the patch.
- **\`mkpage\` says "Blog-Brain tools not found".** \`site\\tools\\blog-brain\` was not copied. Run the Copy-Item line again.
- **\`check\`, \`audit\` or \`preflight\` fails.** Do not push. \`git reset --hard\` and \`git clean -fd\` put the clone back as it was; send the output to Blog-Brain.

## Optional: the Blog-Brain checks

They need a Blog-Brain clone with \`npm install\` done. The results from the test run are below.

\`\`\`powershell
$env:SCORE_TODAY = "${TODAY}"
${report.pages.map((p) => `node <Blog-Brain>\\tools\\score.js --site chapter3realty --only ${p.url}`).join("\n")}
node <Blog-Brain>\\tools\\claims-scan.js .
node <Blog-Brain>\\tools\\facts-check.js .
node <Blog-Brain>\\tools\\site-audit.js .
\`\`\`

The site-wide scans also list older findings on other pages; the test below compares them with the live branch.

## Test results

On a second fresh clone of \`${M.branch}\` at ${liveHead}, with exactly the steps above (bash), on ${TODAY} (\`SCORE_TODAY=${TODAY}\`). The commit was local and was not pushed.

${testBlock}
`;
fs.writeFileSync(path.join(OUT, "README-UPLOAD.md"), readme);

const checklist = `# After the deploy: batch ${M.batch}

Look at each item on the live site, https://chapter3realty.com. Tick it when it is right.

## The four new pages

${report.pages.map((p) => `### ${p.name}\n\n${SITE_URL}${p.url}\n\n- [ ] The page opens, with the hero photo, the icon row under the title and the short answer.\n- [ ] On a phone (about 390 wide), the first screen shows the title, the icon row and the start of the short answer, and nothing scrolls sideways.\n- [ ] The maps, the photos and their credits show; "On this page" links jump to their sections.\n- [ ] The comparison table links to the other three pages, and each link opens.\n- [ ] One photo opens on its own: ${SITE_URL}${p.sitemapImages[0] || ""}`).join("\n\n")}

## Pages that changed

- [ ] ${SITE_URL}${M.listAfter}: the table links to the four pages, and its figures for them match the pages (Del Webb at Grande Dunes about $665,000 for a house and about $400 a month; Del Webb North Myrtle Beach about $535,000 resale and about $315 a month; Myrtle Trace about $300,000 and $95 a month; Seasons about $500,000 and about $340 a month). No sentence says Seasons or Del Webb at Grande Dunes is gated.
- [ ] ${SITE_URL}/buyers/retirees/: the first FAQ answer says Del Webb at Grande Dunes has indoor and outdoor pools, a lifestyle director and a beach club in the HOA dues, and does not say "gated".
- [ ] ${SITE_URL}/buyers/golf-communities/: no sentence says Seasons is gated.

## Files for search engines and AI

- [ ] ${SITE_URL}/sitemap.xml lists the four pages, each with image entries, and opens without an error.
- [ ] ${SITE_URL}/llms.txt lists the four pages under the hub.
- [ ] ${SITE_URL}/llms-full.txt has a section for each of the four pages.
- [ ] Share one page link in a private message (or the Facebook Sharing Debugger): the preview shows the page's hero photo, not the text card.
- [ ] Google's Rich Results Test on one page: Article and FAQ are valid, with no errors.

## Tell search engines

- [ ] Run \`indexnow.ps1\`.
- [ ] Search Console: request indexing for the four pages and the hub, and resubmit sitemap.xml.

## Later

- [ ] Day 7: the four URLs are indexed in Search Console.
- [ ] Day 30: look at the searches each page shows for; add any missing question as a section or an FAQ entry.
- [ ] Every 90 days: \`node <Blog-Brain>/tools/facts-check.js --stale\`. The HOA fees on these pages come from listings and go stale first.
- [ ] Blog-Brain: \`node tools/site-audit.js <website> --live\` finds no error on these pages.
`;
fs.writeFileSync(path.join(OUT, "CHECKLIST-AFTER-DEPLOY.md"), checklist);

log(`\npackage: ${path.relative(process.cwd(), OUT) || OUT}`);
log(`  ${PATCH_NAME} (${report.files.touched.length} files), site/ (${siteFiles.length} files, ${imgCount} photos), MANIFEST.txt, README-UPLOAD.md, CHECKLIST-AFTER-DEPLOY.md`);
if (!KEEP) fs.rmSync(WORK, { recursive: true, force: true }); else log(`work folder kept: ${WORK}`);
log(passed ? "\nall steps and gates pass" : `\n${failures.length} failing:\n${failures.map((f) => "  " + f.split("\n")[0]).join("\n")}`);
process.exit(passed ? 0 : 1);
