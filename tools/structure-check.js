#!/usr/bin/env node
/*
 * structure-check.js - measure the shape of a list-of-places page (CRAFT 3, "No preamble" and "Every place
 * gets its own offer"; CRAFT 5, "Sell the place like the best agent in town"; lessons B39, B41, B42, B43).
 *
 * The owner's third read, 2026-10-14, of pages our own reviews graded 9 out of 10: "im scrolling for a very
 * long time before i get to anything valuable ... you repeat your list ... you repeat where gated
 * communities are in a map for the 3RD time"; "don't do the facts: thats not how a human talks"; "theres
 * not even any CTA's for any property on any of the pages". No gate measured any of these. This one does.
 *
 *   node tools/structure-check.js <index.html | preview.html> [--json] [--strict] [--no-px]
 *        [--max-words N] [--labels "The facts|At a glance"] [--allow-labels "Example"] [--no-bold-labels]
 *        [--count-nav]
 *
 * A list of places: 3 or more H2s that start "1. ", "2. ", ... (as tools/repeat-check.js finds them), most
 * of whose names (the text before the colon) are in Title Case. "1. Get pre-approved: ..." is a step, not a
 * place, so a how-to page is not read as a list. Each entry runs from its H2 to the next H2.
 * Entry names: the H2 text before the colon, its data-toc label, and short forms: without "The", before a
 * comma, each side of " and ", before " at ", and without a last "Plantation", "Resort", "Colony" or
 * "area" ("Tidewater" for "Tidewater Plantation", "The Farm" for "The Farm at Carolina Forest"). A link to
 * an entry's anchor (#wachesaw-plantation) counts as naming it. Longer names are matched first, so
 * "North Myrtle Beach" is not also "Myrtle Beach". A name the H1 holds is the page's own area ("Myrtle Beach"
 * on "... in Myrtle Beach?"); it counts only with its number ("7. Myrtle Beach", a map label "7 Myrtle Beach").
 *
 * The checks:
 *   1. Preamble. The visible words between the H1 and the first entry's H2: the byline, the short answer,
 *      the offer box, figure captions and table cells count. Navigation, header, footer, scripts, SVG text
 *      and image alt text do not. Fails --strict above 350 words. With Playwright (/opt/node-tools), the
 *      pixel distance from the bottom of the H1 to the first entry at 390 px wide is also given, in phone
 *      screens of 844 px. The pixels are information; the word count is the gate.
 *   2. List repetition. The blocks before the first entry that name at least half of the entries. A block
 *      is a list, a table or chart, a map (its figures, labels and key together), a card grid, a picture's
 *      alt text, or one paragraph. Siblings of one kind are one block: three map figures and their two
 *      keys are one map. Paragraphs are never joined. Fails --strict above 1 (the selection guide). After
 *      the entries, a block that names 80% or more is a recap; one is allowed (a comparison table), and
 *      more fails. 80%, not half: the no-HOA page's boat and truck rules name 5 of its 8 towns because the
 *      entries are towns, and that table is a new subject. Not counted: the JSON-LD ItemList, and the
 *      "On this page" list (CRAFT 4 asks for it; it is listed, and --count-nav counts it).
 *   3. Label lines. A paragraph or list item inside an entry that opens with a label: "The facts:",
 *      "Facts:", "At a glance:", "In short:", "Key facts:", "By the numbers:" (--labels replaces the list),
 *      or with any bold label of 6 words or fewer that ends in a colon (--no-bold-labels turns that off).
 *      Fails --strict on any. Allowed: "Example:" over a labelled story (CRAFT 6) and "Sources:"
 *      (--allow-labels replaces that list). Each line of a paragraph is read: "<br>" starts a new one.
 *   4. An offer per place. Each entry holds a link or button to the contact page (/contact/, #contact,
 *      #form) or a form, whose text names the place or says "homes", "houses", "townhomes", "showing" or
 *      "tour". Fails --strict when an entry has none.
 *   5. Field-list sameness (information). The share of each entry's sentences that carry only fixed fields:
 *      year built, square feet, number of homes, lots, acres, price, fee. "Homes usually sell for about
 *      $480,000, and the HOA fee is about $190 a month." is one; "Leatherleaf has 62 houses around a pond"
 *      is not. An entry with half or more such sentences is flagged. Never fails --strict (lesson B39).
 *
 * A page that is not a list of places (one community, a cost page) passes 1, 2 and 4 by rule: they are
 * about a list. Its report says so.
 *
 * Why 350 words: a lean opening is the H1 and byline (about 20 words), the short answer (60 to 100), the
 * offer box (about 35), one selection guide that says what each place does best (120 to 180 for 15 to 20
 * places) and a map caption (about 25): 260 to 360. That is about 2 phone screens of text. On 2026-10-14
 * the four list pages had 391 (best neighborhoods), 433 (gated), 502 (affordable) and 795 (no HOA) words,
 * and 5.2 to 7.7 phone screens of scrolling, most of it maps.
 *
 * Exit 0 always, unless --strict and a check fails. Exit 2 on a missing file.
 *
 * Controls: tools/structure-check.test.js. Tuned on the five batch 2026-10-b previews of 2026-10-14.
 */
"use strict";
const fs = require("fs"), path = require("path");
const cheerio = require("cheerio");
const { sentences } = require("./repeat-check.js");

const T = {
  minEntries: 3,            /* numbered H2s that make a list */
  preambleMax: 350,         /* words between the H1 and the first entry; above fails --strict */
  repeatShare: 0.5,         /* a block repeats the list when it names this share of the entries */
  repeatBefore: 1,          /* blocks allowed before the first entry: the selection guide */
  repeatAfter: 1,           /* blocks allowed after the last entry: one comparison table */
  repeatShareAfter: 0.8,    /* after the entries, a recap names nearly all of them; a table of town rules that names 5 of
                               8 towns (the no-HOA page's boat and truck rules) is a new subject, not the list again */
  labels: ["the facts", "facts", "at a glance", "in short", "key facts", "quick facts", "by the numbers", "the numbers", "the details", "details"],
  boldLabels: true,
  /* Labels CRAFT asks for: a made-up example is labelled as one (CRAFT 6); the sources line. */
  allowLabels: ["example", "for example", "an example", "sources", "source", "data sources", "photo", "photos", "map data"],
  boldLabelWords: 6,
  countNav: false,
  offerWords: /\b(?:homes|houses|townhomes|condos|showings?|tours?)\b/i,
  contactHref: /(?:^|\/)contact\/?(?:[?#].*)?$|^#(?:contact|form)\b|^#c3-form\b/i,
  fieldShare: 0.5,          /* an entry whose field-only sentences reach this share is flagged */
  phoneWidth: 390, phoneHeight: 844,
};

const norm = (s) => String(s || "").replace(/[‘’ʼ]/g, "'").replace(/[“”]/g, '"').replace(/[\s ]+/g, " ").trim();
const SKIP_TAGS = new Set(["script", "style", "noscript", "template", "head"]);
const JOIN = new Set(["of", "at", "and", "the", "by", "on", "in", "de", "la", "del", "to"]);
const GENERIC_END = /\s+(?:Plantation|Resort|Colony|area|Plantation area)$/;
const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/* ---------------------------------------------------------------- the tree */

/* Number every node in document order. el.__s is its own number, el.__e the last number inside it. */
function number(root) {
  let n = 0;
  const texts = [];
  (function walk(node) {
    node.__s = n++;
    if (node.type === "text") texts.push(node);
    for (const c of node.children || []) walk(c);
    node.__e = n - 1;
  })(root);
  return texts;
}
const hiddenEl = (el) => !!el.attribs && (el.attribs.hidden !== undefined || el.attribs["aria-hidden"] === "true" || /display\s*:\s*none/i.test(el.attribs.style || ""));
const tag = (el) => (el.name || "").toLowerCase();
const cls = (el) => (el.attribs && el.attribs.class) || "";
/* Left out of every count: the site's frame (header, footer, the property-search box), scripts, hidden things. */
const frameEl = (el) => ["header", "footer"].includes(tag(el)) || /(?:^|\s)idx/.test(cls(el)) || /(?:^|\s)breadcrumb\b/.test(cls(el));
function excludedBy(node, stopAt, extra) {
  for (let p = node.type === "text" ? node.parent : node; p && p !== stopAt; p = p.parent) {
    if (p.type !== "tag" && p.type !== "script" && p.type !== "style") continue;
    if (SKIP_TAGS.has(tag(p)) || hiddenEl(p) || frameEl(p) || extra(p)) return true;
  }
  return false;
}
/* Visible text: text nodes joined with spaces, without scripts, styles, SVG and hidden things. */
function visibleText($, el) {
  const out = [];
  (function walk(n) {
    if (n.type === "text") { out.push(n.data); return; }
    if (n.type !== "tag" && n.type !== "root") return;
    if (n !== el && (SKIP_TAGS.has(tag(n)) || tag(n) === "svg" || hiddenEl(n))) return;
    for (const c of n.children || []) walk(c);
  })(el);
  return norm(out.join(" "));
}
/* Everything a reader can see that names a place: the text, SVG labels, alt text, aria labels, titles. */
function mentionText($, el) {
  const out = [];
  (function walk(n) {
    if (n.type === "text") { out.push(n.data); return; }
    if (n.type !== "tag" && n.type !== "root") return;
    if (n !== el && (SKIP_TAGS.has(tag(n)) || hiddenEl(n))) return;
    if (n.attribs) for (const a of ["alt", "aria-label", "title"]) if (n.attribs[a] && !(a === "aria-label" && tag(n) === "a" && /^Photo:/.test(n.attribs[a]))) out.push(n.attribs[a]);
    for (const c of n.children || []) walk(c);
  })(el);
  return norm(out.join(" "));
}
const decode = (s) => { try { return decodeURIComponent(s); } catch { return s; } };
const anchorsIn = ($, el) => $(el).find("a[href^='#']").addBack("a[href^='#']").map((_, a) => decode($(a).attr("href").slice(1))).get();
const wordCount = (s) => (norm(s).match(/[A-Za-z0-9$][^\s]*/g) || []).length;

/* ---------------------------------------------------------------- names */

const titleCase = (name) => {
  const w = name.split(/\s+/).filter((x) => /[A-Za-z]/.test(x) && !JOIN.has(x.toLowerCase()));
  return w.length > 0 && w.filter((x) => /^[A-Z0-9]/.test(x)).length / w.length > 0.5;
};
function variants(name, toc) {
  const out = new Set();
  const add = (v) => {
    v = norm(v).replace(/[.,:;]+$/, "");
    if (!v || v.length < 4 || !/^[A-Z0-9]/i.test(v)) return;
    out.add(v);
    const noThe = v.replace(/^The\s+/i, "");
    if (noThe !== v && noThe.length >= 4) out.add(noThe);
  };
  for (const base of [name, toc].filter(Boolean)) {
    add(base);
    const first = base.split(/[:,(]/)[0];
    add(first);
    add(first.replace(GENERIC_END, ""));
    if (/\s+at\s+/.test(first)) { const l = first.split(/\s+at\s+/)[0]; if (l.split(/\s+/).length >= 2) add(l); }
    if (/\s+and\s+/.test(first)) for (const side of first.split(/\s+and\s+/)) if (side.split(/\s+/).length >= 2 && !/\b(?:Club|Course|Estates?)$/.test(side) && /^[A-Z]/.test(side)) { add(side); add(side.replace(GENERIC_END, "")); }
  }
  return [...out].filter((v) => !/^(?:Myrtle|Beach|North|South|Lakes?|Golf|Club|Estates|Village|Forest|Landing|Creek|River)$/i.test(v));
}
/* A regular expression per variant: case kept, except a first "The"; any space may be a line break. */
const variantRe = (v) => new RegExp(`(?<![A-Za-z])${v.split(/\s+/).map((w, i) => i === 0 && /^the$/i.test(w) ? "[Tt]he" : escRe(w)).join("\\s+")}(?![A-Za-z])`, "g");

/* The entries text names: longest names first, and a span used by a longer name is not used again. */
function named(text, entries, anchors = []) {
  const found = new Set();
  const used = [];
  for (const { re, i } of entries.patterns) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(text))) {
      const a = m.index, b = a + m[0].length;
      if (used.some(([x, y]) => a < y && b > x)) continue;
      used.push([a, b]);
      found.add(i);
    }
  }
  for (const id of anchors) if (entries.byAnchor.has(id)) found.add(entries.byAnchor.get(id));
  return found;
}

/* ---------------------------------------------------------------- blocks */

/* What kind of block an element is, or null to look inside it. */
function kindOf($, el) {
  const t = tag(el), c = cls(el);
  if (t === "nav" || el.attribs && /navigation/i.test(el.attribs.role || "")) return "nav";
  if (t === "table") return "table";
  if (t === "figure") {
    if ($(el).find("table").length) return "chart";
    const about = `${c} ${el.attribs.id || ""} ${$(el).find("figcaption").text()} ${$(el).find("svg").attr("aria-label") || ""}`;
    return /\bmaps?\b/i.test(about) ? "map" : "picture";
  }
  if (["ul", "ol", "dl"].includes(t)) return /map|key|legend/i.test(c) ? "map" : "list";
  if (t === "svg") return /\bmaps?\b/i.test(`${el.attribs["aria-label"] || ""} ${$(el).find("title").text()}`) ? "map" : "picture";
  if (t === "img") return "picture";
  if (["p", "blockquote", "h3", "h4", "h5", "h6", "dd", "dt"].includes(t)) return "prose";
  if (/map/i.test(c) && $(el).find("svg, img").length) return "map";
  /* A card grid: 3 or more children of one tag and class, each with a heading, a bold line or a link. */
  const kids = (el.children || []).filter((k) => k.type === "tag" && !SKIP_TAGS.has(tag(k)));
  if (kids.length >= 3 && !$(el).find("h2").length) {
    const sig = (k) => `${tag(k)}.${cls(k)}`;
    const same = kids.filter((k) => sig(k) === sig(kids[0])).length;
    if (same >= 3 && same >= kids.length * 0.75 && kids.every((k) => $(k).find("h3, h4, h5, strong, b, a").length) && !["p", "li"].includes(tag(kids[0]))) return "cards";
  }
  return null;
}
/* The blocks fully inside (lo, hi): each a run of sibling units of one kind. */
function blocksIn($, root, lo, hi, entries) {
  const units = [];
  (function walk(el) {
    if (el.type !== "tag" && el.type !== "root") return;
    if (el.__e <= lo || el.__s >= hi) return;
    if (el !== root && (SKIP_TAGS.has(tag(el)) || hiddenEl(el) || frameEl(el))) return;
    const inside = el.__s > lo && el.__e < hi;
    const kind = inside && el !== root ? kindOf($, el) : null;
    if (kind) { units.push({ el, kind, parent: el.parent }); return; }
    for (const c of el.children || []) walk(c);
  })(root);
  const blocks = [];
  for (const u of units) {
    const last = blocks[blocks.length - 1];
    /* Paragraphs are never joined: a paragraph that names half the places is a list in a sentence, and an
       FAQ that names them across ten answers is not a list. */
    const adjacent = last && u.kind !== "prose" && last.kind === u.kind && last.parent === u.parent &&
      (u.parent.children || []).slice(u.parent.children.indexOf(last.els[last.els.length - 1]) + 1, u.parent.children.indexOf(u.el))
        .every((k) => k.type !== "tag" || SKIP_TAGS.has(tag(k)) || hiddenEl(k));
    if (adjacent) last.els.push(u.el); else blocks.push({ kind: u.kind, parent: u.parent, els: [u.el] });
  }
  for (const b of blocks) {
    const names = new Set();
    for (const el of b.els) for (const i of named(mentionText($, el), entries, anchorsIn($, el))) names.add(i);
    b.names = [...names].sort((x, y) => x - y);
    b.text = norm(b.els.map((el) => mentionText($, el)).join(" ")).slice(0, 160);
  }
  return blocks;
}

/* ---------------------------------------------------------------- fields */

const FIELD = new Set(("built build builds builder year years square feet foot sq ft acre acres lot lots home homes house houses townhome townhomes " +
  "condo condos unit units price prices priced sell sells sold sale sales cost costs fee fees hoa dues month monthly yearly annual " +
  "typical typically usually median middle range ranges ranged size sizes number total plus about around roughly nearly almost " +
  "between from to under over up least most average new newer older bedroom bedrooms bath baths story stories floor plans plan " +
  "list listed listing listings asking half quarter third fifth sixth eighth tenth part parts date dates dated house site sites cover covers " +
  "covered developer developers builders began begun started selling big bigger larger largest small smaller smallest highest lowest " +
  "higher lower cheaper times yet").split(/\s+/));
const FIELD_HIT = /\b(?:built|dates? from|square feet|sq\.? ?ft|acres?|lots?|\d[\d,]* (?:homes|houses|townhomes|condos)|homes? (?:usually |typically )?(?:sell|sold|cost|range)|prices?|\$\s?\d|fee|dues)\b/i;
const STOP = new Set(("a an the and or but so if then than that this these those there here which who what when where is are was were be been " +
  "being am do does did has have had can could will would may might must not no it its they them their we our you your he she his her " +
  "of in on at by for with into onto out off as also only just even still very too more less much many some any all each every both " +
  "other such same own once again ever never always often mostly a s per one two three four five six seven eight nine ten eleven twelve " +
  "fifteen twenty dozen hundred thousand million").split(/\s+/));
/* A sentence that carries only fields: a field in it, and every other word a field word, a stopword, a
   number or a name. */
function fieldOnly(s) {
  if (!FIELD_HIT.test(s)) return false;
  const words = s.replace(/[“”"]/g, "").replace(/\$?\d[\d,.]*%?/g, " ").split(/[^A-Za-z'-]+/).filter(Boolean);
  return words.every((w) => {
    const l = w.toLowerCase().replace(/'s$/, "");
    return STOP.has(l) || FIELD.has(l) || /^[A-Z]/.test(w);
  });
}

/* ---------------------------------------------------------------- the page */

function analyze(html, opts = {}) {
  const O = { ...T, ...opts };
  const $ = cheerio.load(html);
  let main = $("main").first();
  if (!main.length) main = $("body").first();
  const root = main[0];
  const texts = number($.root()[0]);
  const h1 = main.find("h1").first()[0] || $("h1").first()[0] || null;
  const h2s = main.find("h2").toArray().filter((h) => !excludedBy(h, root, () => false));

  /* The entries. */
  const numbered = h2s.map((h) => {
    const text = norm($(h).text());
    const m = text.match(/^(\d{1,2})\.\s+(.+)$/);
    if (!m) return null;
    const name = norm(m[2].split(/:\s/)[0]);
    const toc = norm(($(h).attr("data-toc") || "").replace(/^\d{1,2}\.\s+/, ""));
    const sec = $(h).closest("section")[0];
    const anchorIds = [$(h).attr("id"), sec && $(sec).find("h2").first()[0] === h ? $(sec).attr("id") : null].filter(Boolean);
    return { h, n: +m[1], title: text, name, toc, anchorIds };
  }).filter(Boolean);
  const places = numbered.filter((e) => titleCase(e.name)).length;
  const isList = numbered.length >= O.minEntries && places >= numbered.length * 2 / 3;
  const entries = isList ? numbered : [];
  entries.forEach((e, i) => {
    const next = h2s.find((h) => h.__s > e.h.__s);
    e.i = i; e.lo = e.h.__e; e.hi = next ? next.__s : root.__e + 1;
    e.variants = variants(e.name, e.toc);
  });
  const E = { patterns: [], byAnchor: new Map() };
  /* A name the H1 holds is the page's own area ("Myrtle Beach" on a Myrtle Beach page): it counts only with
     its number ("7. Myrtle Beach", or a map label "7 Myrtle Beach"). */
  const h1Text = h1 ? norm(cheerio.load(($(h1).html() || "").split(/<br\s*\/?>/i)[0]).text()) : "";
  for (const e of entries) {
    for (const v of e.variants) {
      const inH1 = variantRe(v).test(h1Text);
      E.patterns.push({ v, i: e.i, re: inH1 ? new RegExp(`(?<![\\d.])${e.n}[.,]?\\s+${variantRe(v).source}`, "g") : variantRe(v) });
    }
    for (const id of e.anchorIds) E.byAnchor.set(id, e.i);
  }
  E.patterns.sort((a, b) => b.v.length - a.v.length);

  const r = { file: null, h1: h1Text, isList,
    entries: entries.map((e) => ({ n: e.n, name: e.name, title: e.title })), numbered: numbered.length,
    preamble: null, repetition: null, labels: [], offers: [], fields: [], strict: { pass: true, reasons: [] }, T: O };
  const fail = (s) => { r.strict.pass = false; r.strict.reasons.push(s); };

  /* 3. Label lines, inside each entry. */
  const labelRe = new RegExp(`^(?:${O.labels.map(escRe).join("|")})\\s*:`, "i");
  const allowRe = new RegExp(`^(?:${O.allowLabels.map(escRe).join("|") || "(?!)"})\\s*:`, "i");
  for (const e of entries) {
    $(root).find("p, li, dd, div").each((_, el) => {
      if (el.__s <= e.lo || el.__e >= e.hi || excludedBy(el, root, () => false)) return;
      if ($(el).find("p, li, dd, div, h2, h3, h4, ul, ol, table, figure").length) return;
      /* Each line of the paragraph: a <br> starts a new one ("With no HOA fee: ...<br>The trade-off: ..."). */
      const lines = [[]];
      for (const k of el.children || []) if (k.type === "tag" && tag(k) === "br") lines.push([]); else lines[lines.length - 1].push(k);
      for (const nodes of lines) {
        const text = norm(nodes.map((k) => k.type === "text" ? k.data : k.type === "tag" ? visibleText($, k) : "").join(" ")).replace(/\s+([:,.])/g, "$1");
        if (!text) continue;
        let label = (text.match(labelRe) || [])[0];
        if (!label && O.boldLabels) {
          const first = nodes.find((k) => k.type === "tag" || k.type === "text" && norm(k.data));
          if (first && first.type === "tag" && ["strong", "b"].includes(tag(first))) {
            const l = norm($(first).text());
            const after = norm(text.slice(l.length));
            if ((/:$/.test(l) || /^:/.test(after)) && l.replace(/:$/, "").split(/\s+/).length <= O.boldLabelWords) label = l.replace(/:?$/, ":");
          }
        }
        if (label && !allowRe.test(label)) r.labels.push({ n: e.n, place: e.name, label: norm(label), text: text.slice(0, 140) });
      }
    });
  }
  if (r.labels.length) fail(`${r.labels.length} label line(s) in the entries ("${[...new Set(r.labels.map((x) => x.label))].join('", "')}")`);

  if (!isList) {
    r.note = numbered.length ? `${numbered.length} numbered H2(s), not a list of places (names not in Title Case, or fewer than ${O.minEntries})` : "no numbered entries: not a list of places, so checks 1, 2 and 4 do not apply";
    return r;
  }

  /* 1. Preamble. */
  const first = entries[0];
  const lo = h1 && h1.__s < first.h.__s ? h1.__e : root.__s;
  const preText = texts.filter((t) => t.__s > lo && t.__s < first.h.__s && t.__s > root.__s && t.__s <= root.__e && !excludedBy(t, root, (p) => tag(p) === "nav" || tag(p) === "svg")).map((t) => t.data).join(" ");
  r.preamble = { text: norm(preText), words: wordCount(preText), max: O.preambleMax, px: null, screens: null };
  if (r.preamble.words > O.preambleMax) fail(`preamble: ${r.preamble.words} words before entry 1 (most ${O.preambleMax})`);

  /* 2. List repetition. */
  const need = Math.ceil(entries.length * O.repeatShare);
  const before = blocksIn($, root, lo, first.h.__s, E).filter((b) => b.names.length >= need);
  const lastEnd = entries[entries.length - 1].hi;
  const needAfter = Math.ceil(entries.length * O.repeatShareAfter);
  const after = blocksIn($, root, lastEnd - 1, root.__e + 1, E).filter((b) => b.names.length >= needAfter && b.els[0].__s >= lastEnd);
  const counted = (b) => b.kind !== "nav" || O.countNav;
  r.repetition = { need, needAfter, before: before.map(pub), after: after.map(pub), beforeCount: before.filter(counted).length, afterCount: after.filter(counted).length };
  if (r.repetition.beforeCount > O.repeatBefore) fail(`list repeated: ${r.repetition.beforeCount} blocks before entry 1 name ${need} or more of the ${entries.length} places (${before.filter(counted).map((b) => b.kind).join(", ")}; most ${O.repeatBefore})`);
  if (r.repetition.afterCount > O.repeatAfter) fail(`list repeated: ${r.repetition.afterCount} blocks after the last entry name ${needAfter} or more places (${after.filter(counted).map((b) => b.kind).join(", ")}; most ${O.repeatAfter})`);

  /* 4. An offer per place; 5. field sentences. */
  for (const e of entries) {
    const inE = (el) => el.__s > e.lo && el.__e < e.hi && !excludedBy(el, root, () => false);
    const links = $(root).find("a, button, input[type=submit]").toArray().filter(inE);
    const toContact = links.filter((a) => tag(a) !== "a" || O.contactHref.test(($(a).attr("href") || "").trim()) || $(a).closest("form").length);
    const forms = $(root).find("form").toArray().filter(inE);
    const offerText = (a) => norm(`${visibleText($, a)} ${$(a).attr("aria-label") || ""} ${$(a).attr("value") || ""}`);
    const good = toContact.filter((a) => O.offerWords.test(offerText(a)) || e.variants.some((v) => variantRe(v).test(offerText(a))));
    r.offers.push({ n: e.n, place: e.name, ok: good.length > 0, offer: good.length ? offerText(good[0]) : null,
      near: good.length ? null : toContact.length ? `contact link "${offerText(toContact[0])}" does not name the place or homes` : forms.length ? "a form with no button text that names the place" : null });

    const sents = [];
    $(root).find("p, li").each((_, el) => {
      if (!inE(el) || $(el).find("p, li").length || $(el).closest("figure, table, form").length) return;
      if ($(el).find("a.btn, .btn, button").length || $(el).parent().children("a.btn, .btn").length) return;
      let text = visibleText($, el);
      const f = (el.children || []).find((k) => k.type === "tag" || k.type === "text" && norm(k.data));
      if (f && f.type === "tag" && ["strong", "b"].includes(tag(f)) && /:$/.test(norm($(f).text()))) text = norm(text.slice(norm($(f).text()).length));
      sents.push(...sentences(text));
    });
    const only = sents.filter(fieldOnly);
    r.fields.push({ n: e.n, place: e.name, sentences: sents.length, fieldOnly: only.length, share: sents.length ? Math.round(only.length / sents.length * 100) / 100 : 0, examples: only.slice(0, 3), flag: sents.length > 0 && only.length / sents.length >= O.fieldShare });
  }
  const missing = r.offers.filter((o) => !o.ok);
  if (missing.length) fail(`${missing.length} of ${entries.length} entries have no offer that names the place (${missing.slice(0, 6).map((o) => o.n).join(", ")}${missing.length > 6 ? ", ..." : ""})`);
  return r;
}
function pub(b) { return { kind: b.kind, names: b.names.length, entries: b.names.map((i) => i + 1), text: b.text }; }

/* ---------------------------------------------------------------- pixels */

function loadPlaywright() {
  for (const p of ["/opt/node-tools/node_modules", undefined]) {
    try { return require(p ? require.resolve("playwright", { paths: [p] }) : "playwright"); } catch { /* next */ }
  }
  return null;
}
/* The distance from the bottom of the H1 to the top of entry 1's H2, at 390 px wide. null without Playwright. */
async function measure(file, entryTitle, O = T) {
  const pw = loadPlaywright();
  if (!pw) return null;
  const browser = await pw.chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: O.phoneWidth, height: O.phoneHeight } });
    await page.route("**/*", (route) => /^(?:file|data):/.test(route.request().url()) ? route.continue() : route.abort());
    await page.goto("file://" + path.resolve(file), { waitUntil: "load", timeout: 60000 });
    return await page.evaluate((title) => {
      const h1 = document.querySelector("h1");
      const h2 = [...document.querySelectorAll("h2")].find((h) => h.textContent.replace(/\s+/g, " ").trim() === title);
      if (!h1 || !h2) return null;
      return Math.round(h2.getBoundingClientRect().top - h1.getBoundingClientRect().bottom);
    }, entryTitle);
  } finally { await browser.close(); }
}

/* ---------------------------------------------------------------- the report */

function report(r, file) {
  const out = [`structure-check ${file || ""}`.trim(), `H1: ${r.h1}`];
  if (!r.isList) {
    out.push(r.note);
  } else {
    out.push(`A list of ${r.entries.length} places: ${r.entries.map((e) => e.name).join("; ")}`, "");
    const p = r.preamble;
    out.push(`1. Preamble: ${p.words} words between the H1 and entry 1 (most ${p.max})${p.words > p.max ? "  FAIL" : ""}`);
    if (p.px != null) out.push(`   At ${r.T.phoneWidth} px: ${p.px} px, about ${p.screens} phone screens (information)`);
    const rp = r.repetition;
    out.push(`2. The list of places: ${rp.beforeCount} block(s) before entry 1 name ${rp.need} or more of the ${r.entries.length} (most ${r.T.repeatBefore}); ${rp.afterCount} after the last name ${rp.needAfter} or more (most ${r.T.repeatAfter})${rp.beforeCount > r.T.repeatBefore || rp.afterCount > r.T.repeatAfter ? "  FAIL" : ""}`);
    for (const [where, list] of [["before", rp.before], ["after", rp.after]]) for (const b of list)
      out.push(`   ${where}: ${b.kind}${b.kind === "nav" && !r.T.countNav ? " (not counted)" : ""}, ${b.names} names: "${b.text.slice(0, 110)}"`);
  }
  out.push(`3. Label lines in the entries: ${r.labels.length}${r.labels.length ? "  FAIL" : ""}`);
  for (const l of r.labels.slice(0, 30)) out.push(`   ${l.n}. ${l.place}: "${l.label}" ${l.text.slice(l.label.length, 90).trim()}`);
  if (r.labels.length > 30) out.push(`   ... and ${r.labels.length - 30} more`);
  if (r.isList) {
    const miss = r.offers.filter((o) => !o.ok);
    out.push(`4. An offer per place: ${r.offers.length - miss.length} of ${r.offers.length} entries have one${miss.length ? "  FAIL" : ""}`);
    for (const o of miss) out.push(`   ${o.n}. ${o.place}: none${o.near ? ` (${o.near})` : ""}`);
    const flagged = r.fields.filter((f) => f.flag);
    const withField = r.fields.filter((f) => f.fieldOnly > 0).length;
    out.push(`5. Field sentences (information): ${flagged.length} of ${r.fields.length} entries are half or more fixed fields; ${withField} of ${r.fields.length} have at least one`);
    for (const f of r.fields) out.push(`   ${f.flag ? "!" : " "} ${f.n}. ${f.place}: ${f.fieldOnly} of ${f.sentences} sentences (${Math.round(f.share * 100)}%)${f.examples[0] ? `: "${f.examples[0].slice(0, 90)}"` : ""}`);
  }
  out.push("", r.strict.pass ? "strict: passes" : `strict: fails\n${r.strict.reasons.map((x) => "  - " + x).join("\n")}`);
  return out.join("\n");
}

function parseArgs(args) {
  const o = {};
  const val = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : undefined; };
  if (val("--max-words")) o.preambleMax = +val("--max-words");
  if (val("--labels")) o.labels = val("--labels").split(/[|,]/).map((s) => s.trim().toLowerCase()).filter(Boolean);
  if (val("--allow-labels")) o.allowLabels = val("--allow-labels").split(/[|,]/).map((x) => x.trim().toLowerCase()).filter(Boolean);
  if (args.includes("--no-bold-labels")) o.boldLabels = false;
  if (args.includes("--count-nav")) o.countNav = true;
  const skip = new Set(["--max-words", "--labels", "--allow-labels"].map((k) => args.indexOf(k) + 1).filter((i) => i > 0));
  return { o, file: args.find((a, i) => !a.startsWith("--") && !skip.has(i)) };
}

module.exports = { analyze, report, measure, variants, named, fieldOnly, T };
if (require.main === module) (async () => {
  const args = process.argv.slice(2);
  const { o, file } = parseArgs(args);
  if (!file || !fs.existsSync(file)) { console.error("usage: node tools/structure-check.js <page.html> [--json] [--strict] [--no-px] [--max-words N] [--labels \"a|b\"] [--no-bold-labels] [--count-nav]"); process.exit(2); }
  const r = analyze(fs.readFileSync(file, "utf8"), o);
  r.file = file;
  if (r.isList && !args.includes("--no-px")) {
    try {
      const px = await measure(file, r.entries[0].title, r.T);
      if (px != null) { r.preamble.px = px; r.preamble.screens = Math.round(px / r.T.phoneHeight * 10) / 10; }
    } catch (err) { r.preamble.pxError = String(err.message || err).split("\n")[0]; }
  }
  const { T: _t, ...rest } = r;
  console.log(args.includes("--json") ? JSON.stringify(rest, null, 2) : report(r, file));
  process.exitCode = args.includes("--strict") && !r.strict.pass ? 1 : 0;
})();
