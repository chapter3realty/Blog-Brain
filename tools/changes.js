#!/usr/bin/env node
/*
 * changes.js - when each page changed in a way Google notices: its title, its H1, or its length.
 *
 *   node tools/changes.js <website-repo> [--out measure/changes.json]
 *
 * Reads the website's git history (a full clone; a shallow one only knows its last commits). For
 * every chapter3realty index.html it records the first commit, and each later commit that changed the
 * <title>, the H1, or the word count of <main> by 10% or more. Date-only commits (build.js dates) are
 * left out. tools/gsc.js joins this to Search Console numbers, so a drop can be laid next to the change
 * that came before it (2026-11-05: until then nothing measured a page after it shipped).
 */
const { execFileSync } = require("child_process");
const fs = require("fs"), path = require("path");

const argv = process.argv.slice(2);
const WEB = path.resolve(argv.find((a) => !a.startsWith("--")) || ".");
const opt = (k, d) => { const i = argv.indexOf(k); return i >= 0 ? argv[i + 1] : d; };
const OUT = path.resolve(opt("--out", path.join(__dirname, "..", "measure", "changes.json")));
const git = (...a) => execFileSync("git", ["-C", WEB, ...a], { encoding: "utf8", maxBuffer: 1 << 28 });

if (fs.existsSync(path.join(WEB, ".git", "shallow"))) console.warn("warning: shallow clone; only its last commits are known. Run git fetch --unshallow first.");

const text = (html) => html.replace(/<(script|style)[\s\S]*?<\/\1>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&[a-z#0-9]+;/gi, " ").replace(/\s+/g, " ").trim();
const read = (html) => {
  const title = ((html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || "").trim();
  const h1 = text((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || "");
  const main = (html.match(/<main[\s\S]*?<\/main>/i) || [html])[0];
  return { title, h1, words: text(main).split(" ").filter(Boolean).length };
};

const files = git("ls-files", "chapter3realty").split("\n").filter((f) => /(^|\/)index\.html$/.test(f) && !/\/homes\//.test(f));
const out = {};
for (const f of files) {
  const url = "/" + f.replace(/^chapter3realty\/?/, "").replace(/index\.html$/, "");
  const log = git("log", "--format=%H %cs", "--", f).trim().split("\n").filter(Boolean).reverse();
  const events = [];
  let prev = null;
  for (const line of log) {
    const [c, date] = line.split(" ");
    let html; try { html = git("show", `${c}:${f}`); } catch { continue; }
    const now = read(html);
    if (!prev) events.push({ date, commit: c.slice(0, 8), what: "published", ...now });
    else {
      const what = [];
      if (now.title !== prev.title) what.push("title");
      if (now.h1 !== prev.h1) what.push("h1");
      if (prev.words && Math.abs(now.words - prev.words) / prev.words >= 0.1) what.push(`words ${prev.words}->${now.words}`);
      if (what.length) events.push({ date, commit: c.slice(0, 8), what: what.join(", "), ...now });
    }
    prev = now;
  }
  out[url] = { first: events[0] && events[0].date, events };
}
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify({ made: new Date().toISOString().slice(0, 10), web: git("rev-parse", "--short", "HEAD").trim(), pages: out }, null, 1) + "\n");
const changed = Object.entries(out).filter(([, v]) => v.events.length > 1);
console.log(`${files.length} pages; ${changed.length} changed title, H1 or length after publishing. Written to ${path.relative(process.cwd(), OUT)}`);
