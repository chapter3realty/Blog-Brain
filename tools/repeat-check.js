#!/usr/bin/env node
/*
 * repeat-check.js - measure repetition on one built page (CRAFT 5, "Say something new, every time" and
 * "A device can repeat too").
 *
 * The owner, 2026-10-14: "extremly repetitive writing ... youll get hung up on one thing and then its all
 * you ever want to talk about". In batch 2026-10-b each rewrite cured one repetition and grew the next: the
 * same sentence in two entries, "[designer] course opened in [year]" in ten entries, street-name lists in
 * nine of twelve, a flood line in seven, "[park] is [distance] away" in nine. This tool measures that. It
 * bans no word. The writer runs it before handing in; the reviewer reads its report.
 *
 *   node tools/repeat-check.js <index.html | preview.html> [--json] [--strict]
 *
 * What it reads: the text of <main>, without scripts, styles, SVG, images, figures and their captions,
 * tables (cells and captions), navigation, forms, the sources line, the photo credits and the byline.
 * The text is split into sections at each H2. Three zones are kept apart:
 *   body   the copy, the short answer and the story box;
 *   offer  a box with a button (its heading and lines);
 *   faq    the section under the FAQ heading.
 * Headings are not counted as sentences: a question H2 names the subject by design.
 * A "facts line" is a paragraph that opens with the same bold label in 3 or more entries ("The facts:").
 * It is the one place CRAFT 5 puts the page's theme in each entry, so checks b, c, d and e skip it.
 *
 * The checks:
 *   a. The same sentence twice. Case and punctuation are ignored. Identical: 6 or more words, the same
 *      words in the same order; or the same sentence with only names and numbers changed, when 8 or more
 *      of its words are neither ("Wachesaw was a rice plantation on the Waccamaw River ..." and
 *      "Litchfield was a rice plantation ..."; not "[name] is about [number] minutes away by car").
 *      Near: 8 or more words in each, and 85% or more of the longer sentence's words also in the other. Body against body is the finding. A body sentence repeated in an offer
 *      or the FAQ, and an offer repeated in another offer, are listed apart as low: an FAQ answer is
 *      written to stand alone, and the offer box is one component.
 *   b. A repeated sentence shape. Numbers become N, names become P (a capitalized run of words, joined by
 *      "of", "at", "and", "the", "on", "by", "de"; a sentence's first word counts as a name only if the
 *      page never uses it in lower case), and quoted text becomes Q. Then any 4-token opening with at
 *      least one content word, or any 5-token run with at least two content words, that occurs in 3 or
 *      more H2 sections is a shape. Body sentences only. Each shape is grown to the longest run its
 *      sentences share.
 *   c. A repeated device, on a list of places (4 or more H2s that start "1. ", "2. ", ...). A content
 *      word or bigram in more than 40% of the entries and in at least 4 of them (3 of 5 is chance), and
 *      a list of 3 or more street names in one sentence. Left out: stopwords, names, the H1's subject
 *      words. A bigram is two content words in a row once stopwords are dropped ("course that opened"
 *      gives "course opened"). Entry text is the body and the H2 after its colon. A word is not listed
 *      when a bigram holding it is in as many entries, and words drawn from the same sentences are shown
 *      as one device ("pool" with "tennis" and "courts": the amenity list).
 *   d. Thin entries: a numbered entry whose body (no tables, no facts line, no offer box) is under 90
 *      words. The range of entry lengths is always given.
 *   e. Theme words: the 10 most frequent content bigrams on the page (body and FAQ; not offers or facts
 *      lines), names left out, with counts; then the 10 most frequent single content words, subject words
 *      left out ("rice 13" on the gated page). Information, not a finding.
 *
 * Exit 0 always, unless --strict: then exit 1 if (a) finds an identical body sentence, (b) finds a shape
 * in 4 or more sections, or (c) finds a device in more than 60% of the entries. Near matches, low
 * repeats, thin entries and theme words never fail --strict; a person reads them.
 *
 * Controls: tools/repeat-check.test.js. Tuned on batch 2026-10-b round 8 and the four 55+ pages.
 */
"use strict";
const fs = require("fs");
const cheerio = require("cheerio");

const T = {
  identMinWords: 6, nearMinWords: 8, nearOverlap: 0.85, templateWords: 8,
  openLen: 4, closeLen: 3, gramLen: 5, shapeSections: 3, shapeStrict: 4,
  listMinEntries: 4, deviceShare: 0.40, deviceMinEntries: 4, deviceStrict: 0.60,
  thinWords: 90, themes: 10, factsLabelEntries: 3, phraseLen: 8, phraseTimes: 3,
};

const STOP = new Set(("a an the and or but nor so yet if then than that this these those there here which who whom whose what when where why how " +
  "is are was were be been being am do does did done has have had having can could will would shall should may might must not no " +
  "it its it's itself they them their theirs we us our ours you your yours he him his she her hers i me my mine one's " +
  "of in on at by for with from to into onto out over under up down off about above below across after before between through during " +
  "near along around behind beside inside outside within without against among toward towards upon via per " +
  "as also only just even still very too more most less least much many some any all each every both either neither few several " +
  "other another such same own new old first last next once again ever never always often usually mostly nearly almost " +
  "one two three four five six seven eight nine ten eleven twelve half dozen hundred thousand million " +
  "get gets got make makes made take takes took go goes went come comes came give gives gave see sees saw say says said " +
  "lot lots way ways thing things part kind like well back yes s t don't can't won't isn't aren't doesn't didn't " +
  "include includes including entry sale sales town towns city cities " +
  /* The kinds of home are what a real-estate page is about, like its subject words. */
  "home homes house houses townhome townhomes townhouse townhouses condo condos villa villas neighborhood neighborhoods " +
  "community communities subdivision subdivisions place places area areas").split(/\s+/));
/* A street name ends in one of these. Three in one sentence is a list of street names. */
const STREET = /^(?:Street|St|Road|Rd|Drive|Dr|Way|Lane|Ln|Court|Ct|Loop|Boulevard|Blvd|Avenue|Ave|Place|Circle|Trail|Parkway|Terrace|Path|Row)\.?$/;
const NAME_JOIN = new Set(["of", "at", "and", "the", "on", "by", "de", "la", "del", "in"]);
const NUMBER_WORDS = /^(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|fifteen|twenty|thirty|forty|fifty|hundred|thousand|dozen|half)$/i;
const FACTS_LABEL = /\b(?:facts?|at a glance|in short|key numbers|by the numbers)\b/i;
const FAQ_HEAD = /\bFAQs?\b|common questions|frequently asked|^every question\b/i;

const norm = (s) => String(s || "").replace(/[ \s]+/g, " ").trim();
const stem = (w) => w.length > 4 && /ies$/.test(w) ? w.slice(0, -3) + "y" : w.length > 3 && /[^su]s$/.test(w) && !/(?:ss|us|is|ws)$/.test(w) ? w.slice(0, -1) : w;

function sentences(text) {
  return norm(text)
    .replace(/\b(?:[A-Z]\.){1,3}(?=\s?[A-Z])/g, (m) => m.replace(/\./g, "§"))
    .replace(/\b(?:e\.g|i\.e|vs|etc|Dr|Mr|Mrs|Ms|St|Ave|Blvd|No|Jr|Sr)\./g, (m) => m.replace(/\./g, "§"))
    .split(/(?<=[.!?]["'”’)]?)\s+(?=["'“‘(]?[A-Z0-9$])/)
    .map((s) => s.replace(/§/g, ".").trim())
    .filter((s) => /[A-Za-z]/.test(s));
}

/* Words as they are written, with apostrophes and inner hyphens kept: "high-risk", "Iree's". */
/* Punctuation inside a sentence is kept as its own token, so a comma ends a name ("Wimbledon Way, Wilshire Lane"). */
const BREAK = /^[,;:()]$/;
const rawWords = (s) => (s.replace(/[“”]/g, '"').replace(/[‘’]/g, "'").match(/\$?\d+(?:,\d{3})*(?:\.\d+)?%?|"[^"]{1,80}"|[A-Za-z][A-Za-z'-]*[A-Za-z]|[A-Za-z]|[,;:()]/g) || []);
const plainTokens = (s) => rawWords(s).filter((w) => !BREAK.test(w)).map((w) => w.toLowerCase().replace(/^"|"$/g, "").replace(/[,$%]/g, "").replace(/'s$/, "")).filter(Boolean);

/* ---------------------------------------------------------------- extraction */

function extract(html) {
  const $ = cheerio.load(html);
  const h1el = $("h1").first();
  const h1 = h1el.length ? norm(cheerio.load((h1el.html() || "").split(/<br\s*\/?>/i)[0]).text()) : "";
  let main = $("main").first();
  if (!main.length) main = $("body");
  main = main.clone();
  main.find("script, style, noscript, template, svg, img, picture, source, iframe, video, figure, table, nav, form, .breadcrumb, .c3ph-credits, [class^='idx'], .detail-hero").remove();
  main.find("p").filter((_, e) => /^(?:data |image |photo |map )?sources?\s*:/i.test(norm($(e).text()))).remove();

  const blocks = [];
  main.find("h1, h2, h3, h4, p, li, dt, dd, blockquote").each((_, e) => {
    const el = $(e);
    if (el.find("p, li, h2, h3, h4, dd, blockquote").length) return;
    /* A space where two inline elements meet with none between them: "<strong>Pool</strong>A large pool". */
    const text = norm(cheerio.load((el.html() || "").replace(/(<\/(?:strong|b|span|div)>|<br\s*\/?>)/gi, "$1 ")).text()).replace(/\s+([.,;:!?])/g, "$1");
    if (!text) return;
    if (/^By\s/.test(text) && /(?:Officer|Broker|Reviewed|Updated)/.test(text)) return;
    let zone = "body";
    const box = el.parent();
    if (el.closest(".c3-story").length) zone = "body";
    else if (box.children("a.btn, .btn").length || el.closest("[class*='cta']").length) zone = "offer";
    else if (box.nextAll().filter((_, x) => $(x).is("a.btn") || $(x).find("a.btn").length).length && box.children("p, h2, h3").length <= 4 && !box.children("h2").filter((_, h) => /^\d+\.\s/.test(norm($(h).text()))).length) zone = "offer";
    const first = el.children().first();
    const label = first.is("strong, b") && el.text().trimStart().startsWith(first.text().trim()) && /:\s*$/.test(norm(first.text())) && norm(first.text()).split(" ").length <= 4 ? norm(first.text()).toLowerCase() : "";
    /* body: the text without its bold label. A label is structure, not copy. */
    blocks.push({ tag: e.tagName.toLowerCase(), text, body: label ? text.slice(label.length).trim() : text, zone, label });
  });

  /* Sections at each H2. Text before the first H2 is the top of the page. */
  const sections = [{ title: "(top of page)", n: null, faq: false, offer: false, blocks: [] }];
  for (const b of blocks) {
    if (b.tag === "h1") continue;
    if (b.tag === "h2") {
      const m = b.text.match(/^(\d{1,2})\.\s+(.*)$/);
      sections.push({ title: b.text, n: m ? +m[1] : null, after: m ? (m[2].split(/:\s/).slice(1).join(": ") || "") : "", faq: FAQ_HEAD.test(b.text), offer: b.zone === "offer", blocks: [] });
      continue;
    }
    const s = sections[sections.length - 1];
    if (s.faq && b.zone === "body") b.zone = "faq";
    s.blocks.push(b);
  }

  /* A facts line: a paragraph opened by a bold label that names facts ("The facts:", "At a glance:"), or by
     the same label in 3 or more numbered entries when most of its lines give a price ("With no HOA fee:
     typical list price about $370,000"). A repeated label over prose ("The trade-off:") is body copy: what
     follows it should differ from entry to entry. */
  const labels = {};
  for (const s of sections) if (s.n != null) for (const b of s.blocks.filter((x) => x.label)) {
    const l = labels[b.label] || (labels[b.label] = { entries: new Set(), lines: 0, priced: 0 });
    l.entries.add(s.n); l.lines++; if (/\$\s?\d/.test(b.text)) l.priced++;
  }
  const isFacts = (l) => FACTS_LABEL.test(l) || labels[l] && labels[l].entries.size >= T.factsLabelEntries && labels[l].priced >= labels[l].lines / 2;
  for (const s of sections) for (const b of s.blocks) b.facts = !!(b.label && isFacts(b.label));

  /* Sentences, each with its section and zone. Headings are not sentences. */
  const sents = [];
  sections.forEach((s, si) => {
    for (const b of s.blocks) {
      if (/^h[1-4]$/.test(b.tag)) continue;
      const zone = s.offer ? "offer" : b.zone;
      for (const text of sentences(b.body)) sents.push({ text, si, zone, facts: b.facts, tokens: plainTokens(text) });
    }
  });
  return { $, h1, sections, sents };
}

/* ---------------------------------------------------------------- names and shapes */

function lowerVocab(sents) {
  const v = new Set();
  for (const s of sents) rawWords(s.text).forEach((w, i) => { if (i > 0 && /^[a-z]/.test(w)) v.add(w.toLowerCase()); });
  return v;
}

/* Tokens with names, numbers and quotes marked. Each item: { w: lower-case word or "P"/"N"/"Q"/",", name: bool,
   streets: how many street names a name holds }. */
function marked(text, vocab) {
  const raw = rawWords(text);
  const out = [];
  const isCap = (w, i) => /^[A-Z][a-z]/.test(w) || /^[A-Z]{2,}$/.test(w) && /^\d/.test(raw[i + 1] || "");
  const isNameStart = (w, i) => isCap(w, i) && (i > 0 ? !/^[A-Z]{2,}$/.test(w) || /^\d/.test(raw[i + 1] || "") : !STOP.has(w.toLowerCase()) && (!vocab.has(w.toLowerCase()) || isCap(raw[1] || "", 1)));
  for (let i = 0; i < raw.length; i++) {
    const w = raw[i];
    if (BREAK.test(w)) { out.push({ w: ",", name: false, brk: true }); continue; }
    if (/^"/.test(w)) { out.push({ w: "Q", name: true }); continue; }
    if (/^\$?\d/.test(w) || NUMBER_WORDS.test(w)) { out.push({ w: "N", name: false }); continue; }
    if (isNameStart(w, i)) {
      let j = i + 1;
      for (;;) {
        if (j < raw.length && (isCap(raw[j], j) || /^\d/.test(raw[j]) && /^[A-Z]{2,}$/.test(raw[j - 1]))) { j++; continue; }
        if (j + 1 < raw.length && NAME_JOIN.has(raw[j]) && isCap(raw[j + 1], j + 1)) { j += 2; continue; }
        break;
      }
      out.push({ w: "P", name: true, streets: raw.slice(i + 1, j).filter((x, k) => STREET.test(x) && !NAME_JOIN.has(raw[i + k])).length });
      i = j - 1;
      continue;
    }
    out.push({ w: w.toLowerCase().replace(/'s$/, ""), name: false });
  }
  return out;
}
const words = (m) => m.filter((t) => !t.brk);

const content = (w) => w !== "P" && w !== "N" && w !== "Q" && !STOP.has(w);

/* ---------------------------------------------------------------- the checks */

function sameSentences(sents, vocab) {
  const pool = sents.map((s, i) => ({ ...s, i, key: s.tokens.join(" ") })).filter((s) => !s.facts && s.tokens.length >= T.identMinWords);
  const identical = [], near = [], low = [];
  const seenPair = new Set();
  /* Identical: the same words. Then, for 8+ words, the same sentence with only names and numbers changed
     ("Wachesaw was a rice plantation on the Waccamaw River ..." and "Litchfield was a rice plantation ..."). */
  const groupBy = (list, keyOf, kind) => {
    const by = new Map();
    for (const s of list) { const k = keyOf(s); if (!by.has(k)) by.set(k, []); by.get(k).push(s); }
    for (const [, g] of by) {
      if (g.length < 2 || g.every((x, _, a) => seenPair.has(`${a[0].i}:${x.i}`) || x === a[0])) continue;
      g.forEach((x) => g.forEach((y) => { if (x.i < y.i) seenPair.add(`${x.i}:${y.i}`); }));
      const item = { kind, text: g[0].text, others: [...new Set(g.slice(1).map((x) => x.text).filter((t) => t !== g[0].text))], count: g.length, where: g.map((x) => x.si), zones: g.map((x) => x.zone) };
      if (g.filter((x) => x.zone === "body").length >= 2) identical.push(item); else low.push(item);
    }
  };
  groupBy(pool, (s) => s.key, "identical");
  const template = (s) => words(marked(s.text, vocab)).map((t) => t.w);
  groupBy(pool.filter((s) => template(s).filter((w) => !/^[PNQ]$/.test(w)).length >= T.templateWords), (s) => template(s).join(" "), "identical but for names and numbers");
  const bag = (t) => { const m = new Map(); for (const w of t) m.set(w, (m.get(w) || 0) + 1); return m; };
  const long = pool.filter((s) => s.tokens.length >= T.nearMinWords).map((s) => ({ ...s, bag: bag(s.tokens) }));
  for (let a = 0; a < long.length; a++) for (let b = a + 1; b < long.length; b++) {
    const x = long[a], y = long[b];
    if (x.key === y.key || seenPair.has(`${x.i}:${y.i}`)) continue;
    const max = Math.max(x.tokens.length, y.tokens.length);
    if (Math.min(x.tokens.length, y.tokens.length) < T.nearOverlap * max) continue;
    let shared = 0;
    for (const [w, c] of x.bag) shared += Math.min(c, y.bag.get(w) || 0);
    const r = shared / max;
    if (r < T.nearOverlap) continue;
    const item = { text: x.text, other: y.text, overlap: Math.round(r * 100), where: [x.si, y.si], zones: [x.zone, y.zone] };
    if (x.zone === "body" && y.zone === "body") near.push(item); else low.push({ ...item, kind: "near" });
  }
  /* A long run of words (8 or more) used 3 or more times anywhere, offers and FAQ included, that no
     finding above already holds: "we check the deed, the lot map and the HOA papers for any home you like". */
  const held = new Set([...identical, ...low].flatMap((x) => [x.text, ...(x.others || [])]));
  const grams = new Map();
  pool.forEach((s) => { for (let k = 0; k + T.phraseLen <= s.tokens.length; k++) { const g = s.tokens.slice(k, k + T.phraseLen).join(" "); if (!grams.has(g)) grams.set(g, new Map()); grams.get(g).set(s.text, { s, k }); } });
  const phrases = [];
  for (const [g, occ] of grams) {
    if (occ.size < T.phraseTimes || [...occ.keys()].every((t) => held.has(t))) continue;
    const o = [...occ.values()];
    let left = 0, right = 0;
    while (o.every((x) => x.k - left - 1 >= 0 && x.s.tokens[x.k - left - 1] === o[0].s.tokens[o[0].k - left - 1])) left++;
    while (o.every((x) => x.k + T.phraseLen + right < x.s.tokens.length && x.s.tokens[x.k + T.phraseLen + right] === o[0].s.tokens[o[0].k + T.phraseLen + right])) right++;
    const phrase = o[0].s.tokens.slice(o[0].k - left, o[0].k + T.phraseLen + right).join(" ");
    if (!phrases.some((p) => p.phrase.includes(phrase) || phrase.includes(p.phrase))) phrases.push({ kind: "phrase", phrase, text: phrase, count: o.length, where: o.map((x) => x.s.si), zones: o.map((x) => x.s.zone) });
    else { const p = phrases.find((p) => phrase.includes(p.phrase)); if (p && phrase.length > p.phrase.length) Object.assign(p, { phrase, text: phrase }); }
  }
  low.push(...phrases);
  return { identical, near, low };
}

function shapes(sents, vocab) {
  const body = sents.filter((s) => s.zone === "body" && !s.facts).map((s) => ({ ...s, m: words(marked(s.text, vocab)).map((x) => x.w) }));
  const grams = new Map();
  const add = (key, kind, s, pos, len) => {
    if (!grams.has(key)) grams.set(key, { key, kind, occ: [] });
    grams.get(key).occ.push({ s, pos, len });
  };
  for (const s of body) {
    const m = s.m;
    if (m.length >= T.openLen + 1) {
      const o = m.slice(0, T.openLen);
      if (o.filter(content).length >= 1) add("^ " + o.join(" "), "opening", s, 0, T.openLen);
    }
    if (m.length >= T.closeLen + 2) {
      const c = m.slice(-T.closeLen);
      if (c.filter(content).length >= 1) add(c.join(" ") + " $", "closing", s, m.length - T.closeLen, T.closeLen);
    }
    for (let i = 0; i + T.gramLen <= m.length; i++) {
      const g = m.slice(i, i + T.gramLen);
      if (g.filter(content).length >= 2) add(g.join(" "), "phrase", s, i, T.gramLen);
    }
  }
  const sectionsOf = (occ) => [...new Set(occ.map((o) => o.s.si))];
  let found = [...grams.values()].filter((g) => sectionsOf(g.occ).length >= T.shapeSections);
  /* Grow each shape to the longest run all its sentences share, then drop shapes inside a longer one. */
  for (const g of found) {
    let left = 0, right = 0;
    const at = (o, k) => o.s.m[o.pos + k];
    if (g.kind !== "opening") while (g.occ.every((o) => o.pos - left - 1 >= 0 && at(o, -left - 1) === at(g.occ[0], -left - 1))) left++;
    if (g.kind !== "closing") while (g.occ.every((o) => o.pos + o.len + right < o.s.m.length && at(o, o.len + right) === at(g.occ[0], g.occ[0].len + right))) right++;
    const o0 = g.occ[0];
    g.shape = o0.s.m.slice(o0.pos - left, o0.pos + o0.len + right).join(" ");
    g.sections = sectionsOf(g.occ);
    g.sentIds = new Set(g.occ.map((o) => o.s.text));
  }
  found.sort((a, b) => b.sections.length - a.sections.length || b.shape.split(" ").length - a.shape.split(" ").length);
  const kept = [];
  for (const g of found) {
    const dup = kept.find((k) => (k.shape.includes(g.shape) || g.shape.includes(k.shape) || overlapRun(k.shape, g.shape) >= 3) && [...g.sentIds].every((t) => k.sentIds.has(t)));
    if (!dup) kept.push(g);
  }
  return kept.map((g) => ({
    shape: (g.kind === "opening" ? "Opens: " : g.kind === "closing" ? "Ends: " : "") + g.shape.replace(/\bP\b/g, "[name]").replace(/\bN\b/g, "[number]").replace(/\bQ\b/g, "[quote]"),
    sections: g.sections, count: g.occ.length,
    examples: [...new Map(g.occ.map((o) => [o.s.si, o.s.text])).values()],
  }));
}

function overlapRun(a, b) {
  const x = a.split(" "), y = b.split(" ");
  let best = 0;
  for (let i = 0; i < x.length; i++) for (let j = 0; j < y.length; j++) { let k = 0; while (x[i + k] && x[i + k] === y[j + k]) k++; best = Math.max(best, k); }
  return best;
}

function subjectWords(h1) {
  return new Set(plainTokens(h1).filter((w) => !STOP.has(w)).map(stem));
}

/* Content words of a text with names dropped: a list of runs (a name or a sentence end breaks a run). */
function contentRuns(text, vocab, subject) {
  const runs = [];
  for (const s of sentences(text)) {
    let run = [];
    for (const t of marked(s, vocab)) {
      if (t.name || t.brk || t.w === "N") { if (run.length) runs.push(run); run = []; continue; }
      if (STOP.has(t.w) || t.w.length < 3 || subject.has(stem(t.w))) continue;
      run.push(t.w);
    }
    if (run.length) runs.push(run);
  }
  return runs;
}

function devices(ex, vocab, subject) {
  const entries = ex.sections.filter((s) => s.n != null);
  if (entries.length < T.listMinEntries) return { entries: entries.length, list: false, found: [] };
  const per = new Map();
  const note = (key, shown, si, sentence) => {
    if (!per.has(key)) per.set(key, { key, forms: new Map(), entries: new Map() });
    const d = per.get(key);
    d.forms.set(shown, (d.forms.get(shown) || 0) + 1);
    if (!d.entries.has(si)) d.entries.set(si, sentence);
    if (!d.sents) d.sents = new Set();
    d.sents.add(si + "|" + sentence);
  };
  entries.forEach((s, ei) => {
    const parts = (s.after ? [s.after] : []).concat(s.blocks.filter((b) => !/^h[1-4]$/.test(b.tag) && b.zone === "body" && !b.facts).map((b) => b.body));
    for (const p of parts) for (const sent of sentences(p)) {
      if (marked(sent, vocab).reduce((a, t) => a + (t.streets || 0), 0) >= 3) note("[street list]", "[a list of three or more street names]", ei, sent);
      for (const run of contentRuns(sent, vocab, subject)) {
        run.forEach((w, i) => {
          note(stem(w), w, ei, sent);
          if (i + 1 < run.length) note(stem(w) + " " + stem(run[i + 1]), w + " " + run[i + 1], ei, sent);
        });
      }
    }
  });
  const n = entries.length;
  let found = [...per.values()].filter((d) => d.entries.size / n > T.deviceShare && d.entries.size >= T.deviceMinEntries).map((d) => ({
    device: [...d.forms.entries()].sort((a, b) => b[1] - a[1])[0][0],
    key: d.key, entries: d.entries.size, of: n, share: d.entries.size / n,
    which: [...d.entries.keys()].map((i) => entries[i].n),
    example: { entry: entries[[...d.entries.keys()][0]].title, text: [...d.entries.values()][0] },
    examples: [...d.entries.entries()].map(([i, t]) => ({ entry: entries[i].n, text: t })),
  }));
  const bigrams = found.filter((d) => d.key.includes(" "));
  found = found.filter((d) => d.key.includes(" ") || !bigrams.some((b) => b.key.split(" ").includes(d.key) && b.entries >= d.entries));
  found.sort((a, b) => b.entries - a.entries || (b.key.includes(" ") ? 1 : 0) - (a.key.includes(" ") ? 1 : 0));
  /* Words that come from the same sentences are one device ("pool", "tennis", "courts": the amenity list). */
  const groups = [];
  for (const d of found) {
    const mine = per.get(d.key).sents;
    const g = groups.find((x) => { const theirs = per.get(x.key).sents; let both = 0; for (const t of mine) if (theirs.has(t)) both++; return both >= 0.6 * Math.min(mine.size, theirs.size); });
    if (g) g.members.push(d); else groups.push({ ...d, members: [d] });
  }
  /* Show a group by its bigram when the bigram is in as many entries: "course opened", not "course". */
  for (let i = 0; i < groups.length; i++) {
    const g = groups[i];
    const bi = g.members.find((m) => m.key.includes(" ") && m.entries >= g.entries);
    const lead = bi || g;
    groups[i] = { ...lead, also: g.members.filter((m) => m.key !== lead.key).map((m) => m.device) };
  }
  return { entries: n, list: true, found: groups };
}

function lengths(ex) {
  const entries = ex.sections.filter((s) => s.n != null);
  const rows = entries.map((s) => ({
    entry: s.title,
    words: s.blocks.filter((b) => !/^h[1-4]$/.test(b.tag) && b.zone === "body" && !b.facts).reduce((a, b) => a + plainTokens(b.body).length, 0),
  }));
  const w = rows.map((r) => r.words).sort((a, b) => a - b);
  return {
    entries: rows.length, min: w[0] || 0, max: w[w.length - 1] || 0, median: w.length ? w[Math.floor((w.length - 1) / 2)] : 0,
    thin: rows.filter((r) => r.words < T.thinWords), rows,
  };
}

function themes(ex, vocab, subject) {
  const count = new Map(), single = new Map();
  const tally = (m, k, shown) => { if (!m.has(k)) m.set(k, { shown, n: 0 }); m.get(k).n++; };
  for (const s of ex.sents) {
    if (s.facts || s.zone === "offer") continue;
    for (const run of contentRuns(s.text, vocab, new Set())) run.forEach((w, i) => {
      if (!subject.has(stem(w))) tally(single, stem(w), w);
      if (i + 1 < run.length) tally(count, stem(w) + " " + stem(run[i + 1]), w + " " + run[i + 1]);
    });
  }
  const top = (m) => [...m.values()].filter((x) => x.n >= 2).sort((a, b) => b.n - a.n).slice(0, T.themes);
  return { bigrams: top(count).map((x) => ({ bigram: x.shown, count: x.n })), words: top(single).map((x) => ({ word: x.shown, count: x.n })) };
}

function analyze(html) {
  const ex = extract(html);
  const vocab = lowerVocab(ex.sents);
  const subject = subjectWords(ex.h1);
  const a = sameSentences(ex.sents, vocab);
  const b = shapes(ex.sents, vocab);
  const c = devices(ex, vocab, subject);
  const d = lengths(ex);
  const e = themes(ex, vocab, subject);
  const title = (si) => ex.sections[si].title;
  const named = (arr) => arr.map((x) => ({ ...x, sections: x.where.map(title) }));
  const strictReasons = [];
  if (a.identical.length) strictReasons.push(`${a.identical.length} identical sentence${a.identical.length > 1 ? "s" : ""} in the body`);
  const bStrict = b.filter((x) => x.sections.length >= T.shapeStrict);
  if (bStrict.length) strictReasons.push(`${bStrict.length} sentence shape${bStrict.length > 1 ? "s" : ""} in ${T.shapeStrict} or more sections`);
  const cStrict = c.found.filter((x) => x.share > T.deviceStrict);
  if (cStrict.length) strictReasons.push(`${cStrict.length} device${cStrict.length > 1 ? "s" : ""} in more than ${T.deviceStrict * 100}% of entries`);
  return {
    h1: ex.h1, subject: [...subject], sections: ex.sections.length - 1, sentences: ex.sents.length, entries: c.entries,
    identical: named(a.identical), near: named(a.near), low: named(a.low),
    shapes: b.map((x) => ({ ...x, sections: x.sections.map(title) })),
    devices: c.found.map(({ key, ...x }) => x), list: c.list,
    lengths: d, themes: e.bigrams, themeWords: e.words,
    strict: { pass: !strictReasons.length, reasons: strictReasons },
    thresholds: T,
  };
}

/* ---------------------------------------------------------------- report */

const q = (s, n = 160) => `"${s.length > n ? s.slice(0, n - 3) + "..." : s}"`;
const short = (t) => { const m = t.match(/^(\d+)\.\s+([^:]+)/); return m ? `${m[1]}. ${m[2]}` : t.length > 50 ? t.slice(0, 47) + "..." : t; };

function report(r, file) {
  const L = [];
  L.push(`repeat-check: ${file || ""}`.trim());
  L.push(`H1: ${r.h1}`);
  L.push(`${r.sections} H2 sections, ${r.sentences} sentences${r.list ? `, a list of ${r.entries} numbered entries` : ""}. Subject words left out of devices: ${r.subject.join(", ") || "none"}.`);
  L.push("");
  L.push(`a. The same sentence twice: ${r.identical.length} identical, ${r.near.length} near (${T.nearOverlap * 100}%+ of words, ${T.nearMinWords}+ words).`);
  for (const x of r.identical) {
    L.push(`   - ${x.kind}, ${x.count} times (${x.sections.map(short).join("; ")}): ${q(x.text, 220)}`);
    for (const o of x.others || []) L.push(`       ${q(o, 220)}`);
  }
  for (const x of r.near) L.push(`   - near, ${x.overlap}% (${x.sections.map(short).join("; ")}):\n       ${q(x.text, 220)}\n       ${q(x.other, 220)}`);
  if (r.low.length) {
    L.push(`   Low, in offers or the FAQ (${r.low.length}):`);
    for (const x of r.low) L.push(`   - ${x.kind}, ${x.zones.join(" + ")}: ${q(x.text, 160)}`);
  }
  L.push("");
  L.push(`b. Repeated sentence shapes in ${T.shapeSections}+ sections: ${r.shapes.length}.`);
  for (const x of r.shapes) {
    L.push(`   - ${x.sections.length >= T.shapeStrict ? "[4+] " : ""}"${x.shape}", in ${x.sections.length} sections (${x.sections.map(short).join("; ")})`);
    for (const e of x.examples.slice(0, 3)) L.push(`       ${q(e, 150)}`);
  }
  L.push("");
  if (!r.list) L.push(`c. Devices: not a list of places (fewer than ${T.listMinEntries} numbered H2s).`);
  else {
    L.push(`c. Devices in more than ${T.deviceShare * 100}% of the ${r.entries} entries: ${r.devices.length}.`);
    for (const x of r.devices) L.push(`   - ${x.share > T.deviceStrict ? "[60%+] " : ""}"${x.device}"${x.also.length ? ` (with ${x.also.map((w) => `"${w}"`).join(", ")})` : ""} in ${x.entries} of ${x.of} entries (${x.which.join(", ")}). ${short(x.example.entry)}: ${q(x.example.text, 150)}`);
  }
  L.push("");
  if (!r.lengths.entries) L.push("d. Entry length: no numbered entries.");
  else {
    L.push(`d. Entry length: ${r.lengths.min} to ${r.lengths.max} words (median ${r.lengths.median}). Under ${T.thinWords} words: ${r.lengths.thin.length}.`);
    for (const x of r.lengths.thin) L.push(`   - ${short(x.entry)}: ${x.words} words`);
  }
  L.push("");
  L.push(`e. Theme words: ${r.themes.map((x) => `${x.bigram} ${x.count}`).join(", ") || "none repeated"}.`);
  L.push(`   Single words, subject words left out: ${r.themeWords.map((x) => `${x.word} ${x.count}`).join(", ") || "none repeated"}.`);
  L.push("");
  L.push(r.strict.pass ? "strict: passes" : `strict: fails (${r.strict.reasons.join("; ")})`);
  return L.join("\n");
}

module.exports = { analyze, report, extract, sentences, marked, T };

if (require.main === module) {
  const args = process.argv.slice(2);
  const file = args.find((a) => !a.startsWith("--"));
  if (!file) { console.error("usage: node tools/repeat-check.js <page.html> [--json] [--strict]"); process.exit(2); }
  const r = analyze(fs.readFileSync(file, "utf8"));
  console.log(args.includes("--json") ? JSON.stringify(r, null, 2) : report(r, file));
  process.exitCode = args.includes("--strict") && !r.strict.pass ? 1 : 0;
}
