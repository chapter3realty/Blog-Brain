#!/usr/bin/env node
/*
 * Controls for illustrations.js.
 *
 *   node tools/illustrations.test.js
 *
 * Every drawing must be well-formed SVG, under 8 KB, in the palette, with no ids, text,
 * gradients or outside files. When Playwright is installed (/opt/node-tools), each drawing
 * is also rendered to pixels and must not come out blank.
 */
"use strict";
const { illustration, illustrationAlt, ILLUSTRATION_NAMES, PALETTE } = require("./illustrations.js");
let failures = 0;
const check = (name, cond, extra = "") => { if (!cond) { failures++; console.log(`FAIL  ${name} ${extra}`); } else console.log(`ok    ${name}`); };
const throws = (fn) => { try { fn(); return false; } catch { return true; } };

/* The drawings the owner's pages need (task list, 2026-10-10), by the name a spec would use. */
const NEED = ["indoor pool", "outdoor pool", "clubhouse", "golf cart", "pickleball", "tennis", "bocce", "beach", "fishing pond",
  "dog walk", "card table", "walking path", "dock", "boat dock", "grocery", "hospital"];
const missing = NEED.filter((n) => throws(() => illustration(n)));
check("every needed drawing exists", !missing.length, missing.join(", "));
check("10 to 14 drawings", ILLUSTRATION_NAMES.length >= 10 && ILLUSTRATION_NAMES.length <= 14, String(ILLUSTRATION_NAMES.length));
check("an unknown name throws", throws(() => illustration("unicorn")));

const all = ILLUSTRATION_NAMES.map((n) => [n, illustration(n)]);

/* Well-formed: every tag closes, attributes are quoted, path data uses only path commands. */
function wellFormed(svg) {
  const stack = [];
  for (const m of svg.matchAll(/<(\/?)([a-zA-Z]+)((?:\s+[a-zA-Z:-]+="[^"<>]*")*)\s*(\/?)>/g)) {
    const [, close, tag, , self] = m;
    if (close) { if (stack.pop() !== tag) return `unbalanced </${tag}>`; }
    else if (!self) stack.push(tag);
  }
  if (stack.length) return `unclosed <${stack.join("><")}>`;
  const stripped = svg.replace(/<(\/?)([a-zA-Z]+)((?:\s+[a-zA-Z:-]+="[^"<>]*")*)\s*(\/?)>/g, "");
  if (stripped.trim()) return `stray text or a bad tag: ${stripped.slice(0, 60)}`;
  for (const d of svg.matchAll(/\sd="([^"]*)"/g)) if (/[^MmLlHhVvCcSsQqTtAaZz0-9.,\s-]/.test(d[1]) || /NaN|undefined/.test(d[1])) return `bad path data: ${d[1].slice(0, 60)}`;
  if (/NaN|undefined|Infinity/.test(svg)) return "a number came out as NaN or undefined";
  return "";
}
const bad = all.map(([n, s]) => [n, wellFormed(s)]).filter(([, e]) => e);
check("every drawing is well-formed SVG", !bad.length, bad.map(([n, e]) => `${n}: ${e}`).join("; "));
check("every drawing is 240 by 180 (4:3)", all.every(([, s]) => /^<svg xmlns="http:\/\/www\.w3\.org\/2000\/svg" viewBox="0 0 240 180"/.test(s)));

const sizes = all.map(([n, s]) => [n, Buffer.byteLength(s)]);
check("every drawing is under 8 KB", sizes.every(([, b]) => b < 8192), sizes.filter(([, b]) => b >= 8192).map(([n, b]) => `${n} ${b}`).join(", ") || `largest ${Math.max(...sizes.map(([, b]) => b))} bytes`);
check("drawings have real content (20+ shapes)", all.every(([, s]) => (s.match(/<(?:path|rect|circle|ellipse)\b/g) || []).length >= 20));

const palette = new Set(Object.values(PALETTE));
const offPalette = all.flatMap(([n, s]) => [...s.matchAll(/(?:fill|stroke)="([^"]+)"/g)].map((m) => m[1]).filter((c) => c !== "none" && !palette.has(c)).map((c) => `${n} ${c}`));
check("every color is in the palette", !offPalette.length, [...new Set(offPalette)].join(", "));
check("the site's navy, brass and ivory are in the palette", ["#1c2028", "#c4783a", "#91592b", "#f4efe8"].every((c) => palette.has(c)));
check("no ids, gradients, text, images or links (safe to repeat on a page)", all.every(([, s]) => !/\sid=|Gradient|<text|<image|href=|<use|<script|url\(/i.test(s)));
check("no red cross: the hospital uses an H", !/#(?:e[0-9a-f]0000|ff0000|d00|c00)/i.test(all.find(([n]) => n === "hospital")[1]));

/* Accessibility. */
check("each drawing has its own alt text, 'Drawing of ...'", ILLUSTRATION_NAMES.every((n) => /^Drawing of .{12,}/.test(illustrationAlt(n))) && new Set(ILLUSTRATION_NAMES.map(illustrationAlt)).size === ILLUSTRATION_NAMES.length);
check("by default a drawing is an image with a label", all.every(([n, s]) => s.includes(`role="img" aria-label="${illustrationAlt(n)}"`)));
const dec = illustration("beach", { decorative: true });
check("decorative: aria-hidden, no role, no label", /aria-hidden="true"/.test(dec) && /focusable="false"/.test(dec) && !/role=|aria-label/.test(dec));
check("alt option replaces the label, escaped", /aria-label="Pool &lt;b&gt; &quot;here&quot;"/.test(illustration("indoor-pool", { alt: 'Pool <b> "here"' })));
check("width option keeps 4:3", /width="320" height="240"/.test(illustration("dock", { width: 320 })));
check("aliases resolve", illustration("pond") === illustration("fishing-pond") && illustration("boat") === illustration("dock"));
check("no em dash", !/\u2014/.test(all.map(([, s]) => s).join("") + ILLUSTRATION_NAMES.map(illustrationAlt).join("")));

/* Render each drawing to pixels and make sure it is not blank. Needs Playwright. */
async function render() {
  let pw;
  try { pw = require("/opt/node-tools/node_modules/playwright"); } catch { console.log("skip  render check (Playwright not installed here)"); return; }
  const browser = await pw.chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 240, height: 180 } });
    const blank = [];
    for (const [n, s] of all) {
      await page.setContent(`<!doctype html><body style="margin:0;background:#fff">${s.replace("<svg ", '<svg width="240" height="180" ')}</body>`);
      const colors = await page.evaluate(async () => {
        const svg = document.querySelector("svg");
        const img = new Image();
        img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
        await img.decode();
        const c = document.createElement("canvas"); c.width = 240; c.height = 180;
        const x = c.getContext("2d"); x.drawImage(img, 0, 0);
        const d = x.getImageData(0, 0, 240, 180).data, seen = new Set();
        for (let i = 0; i < d.length; i += 16) seen.add((d[i] << 16) | (d[i + 1] << 8) | d[i + 2]);
        return seen.size;
      });
      if (colors < 6) blank.push(`${n} (${colors} colors)`);
    }
    check("every drawing renders to a picture (Playwright)", !blank.length, blank.join(", "));
  } finally { await browser.close(); }
}

render().catch((e) => { failures++; console.log(`FAIL  render check: ${e.message}`); }).finally(() => {
  console.log(failures ? `\n${failures} control(s) failed` : "\nall controls pass");
  process.exitCode = failures ? 1 : 0;
});
