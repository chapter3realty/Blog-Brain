#!/usr/bin/env node
/*
 * critic.mjs: the machine half of the critic. Every page passes it before the owner sees the page.
 * The AI half is prompts/critic.md; it reads this tool's JSON and screenshots.
 *
 *   node tools/critic.mjs <base-url> <path> [<path> ...] [--widths 390,768,1440] [--json out.json] [--shots dir]
 *   node tools/critic.mjs https://chapter3realty.com /invest/llc/ /buyers/closing-costs/ --shots /tmp/c
 *
 * For each page and width it measures the rendered page in Chromium and reports each problem with
 * its words and its position (x, y, width, height in page pixels, at that width):
 *   overlap      text on text, text on an image, button or card it does not belong to, a block on
 *                its sibling, text that spills out of its box or is cut off, sideways page scroll,
 *                words under a chip or label that paints over them
 *   photos       real photos in <main>, broken images, "No photo" frames, missing alt, a blog with
 *                no photo, a long blog with few visuals
 *   readability  phone body text under 16 px, desktop lines outside 45 to 90 characters, line
 *                height under 1.4, paragraphs over 110 words, 900 px of phone scroll with nothing
 *                but prose, contrast under 4.5:1 (3:1 for large text), phone tap targets under
 *                24 px, skipped heading levels, no answer on the first phone screen, a phone table
 *                cut off inside a box that scrolls sideways
 *   seo          one H1, title 30 to 65 characters, description 70 to 160, canonical, Article or
 *                WebPage JSON-LD with author and dateModified, an answer before the first H2, FAQ
 *                markup only for questions on the page, internal links, alt text
 * Each finding is "blocking" or "warning". Exit 1 if any finding is blocking; 2 if the tool failed.
 * --shots writes a full-page screenshot per page and width with each finding boxed in red (blocking)
 * or orange (warning), and a close crop of each overlap and spill finding.
 *
 * Tuned against the live site (v1.19) on 2026-10-31: 17 pages and the homepage at 390, 768 and 1440.
 * Each exclusion below says which false hit it removed. The rule from the website's MISTAKES.md
 * applies: sanity-check a scanner before believing it.
 */
import { createRequire } from "module";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const require = createRequire(import.meta.url);

export function loadPlaywright() {
  try { return require("playwright"); } catch (e) { return null; }
}

// The site's homes strip and its disclaimer are written in at the edge from the live listing feed.
// They are not the page's own content: their listing photos do not count as the page's photos and
// their words do not count toward its length. Tuned: /invest/llc/ counted 10 listing photos as
// "photos in the blog" before this.
const NOT_CONTENT = ".hx-feed,.hx-disclaimer,.hx-strip,[data-idx-strip],#c3-pop,.c3-pop";

/* ------------------------------------------------------------------------------------------------
 * In the page. This function is sent to the browser whole, so it may use nothing from outside.
 * ---------------------------------------------------------------------------------------------- */
function pageChecks(o) {
  // The window is the width and height the run asked for, not innerWidth. A phone context (isMobile)
  // zooms out to fit a page that is wider than the screen, and innerWidth then reports the page's
  // width: a 592 px table on a 390 px phone read as a 592 px window, so there was no sideways scroll
  // to see and the phone checks did not run. Found by the verifier's table-phone fixture.
  const W = o.width || innerWidth, VH = o.height || innerHeight, PHONE = W <= 480, DESK = W >= 1024;
  const out = [];
  const csm = new Map();
  const cs = (el) => { let s = csm.get(el); if (!s) { s = getComputedStyle(el); csm.set(el, s); } return s; };
  const R = (r) => ({ x: Math.round(r.left + scrollX), y: Math.round(r.top + scrollY), w: Math.round(r.width), h: Math.round(r.height) });
  const words = (t) => (t || "").replace(/\s+/g, " ").trim();
  const clip60 = (t) => { t = words(t); return t.length > 90 ? t.slice(0, 87) + "..." : t; };
  const desc = (el) => {
    if (!el || el.nodeType !== 1) return "";
    let s = el.tagName.toLowerCase();
    if (el.id) s += "#" + el.id;
    const c = typeof el.className === "string" ? el.className.trim().split(/\s+/).filter(Boolean).slice(0, 2) : [];
    if (c.length) s += "." + c.join(".");
    const a = el.parentElement && el.parentElement.closest("[id]");
    return a && a !== el && a !== document.body ? s + " in #" + a.id : s;
  };
  const add = (check, level, el, rect, text, detail) => {
    out.push({ check, level, words: clip60(text), el: desc(el), ...(rect ? R(rect) : {}), ...(detail ? { detail } : {}) });
  };
  const inter = (a, b) => ({ x: Math.min(a.right, b.right) - Math.max(a.left, b.left), y: Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top) });
  const box = (l, t, r, b) => ({ left: l, top: t, right: r, bottom: b, width: r - l, height: b - t });
  const notContent = (el) => !!el.closest(o.notContent);
  const main = document.querySelector("main") || document.body;

  // Visibility. Hidden is: display none, visibility hidden, opacity near 0 up the chain, the hidden
  // attribute, a closed dialog or popover, or screen-reader-only text (a box of 2 px or less that
  // clips, or clip/clip-path that cuts it to nothing). Tuned: the skip link, the "Free access" and
  // "Tour this home" dialogs and the filter popovers of the homes strip were all counted as visible
  // text sitting on the page before this.
  const hidm = new Map();
  const hidden = (el) => {
    if (!el || el === document.documentElement) return false;
    if (hidm.has(el)) return hidm.get(el);
    let h = false;
    const s = cs(el);
    if (s.display === "none" || s.visibility === "hidden" || s.visibility === "collapse" || +s.opacity < 0.05 || el.hidden) h = true;
    else if (el.tagName === "DIALOG" && !el.open) h = true;
    else if (el.tagName === "DETAILS" && !el.open) h = false;
    else {
      const r = el.getBoundingClientRect();
      if ((r.width <= 2 || r.height <= 2) && (s.overflow !== "visible" || s.position === "absolute")) h = true;
      if (/rect\(0(px)?,? 0(px)?,? 0(px)?,? 0(px)?\)/.test(s.clip) || /inset\(50%\)/.test(s.clipPath)) h = true;
      // off the side of the page: a closed slide-in menu. Tuned: the phone menu panel at left -100%.
      if (r.width > 0 && (r.right <= 0 || r.left >= document.documentElement.scrollWidth)) h = true;
    }
    if (!h && el.parentElement) {
      const p = el.parentElement;
      // the content of a closed <details> is not rendered
      if (p.tagName === "DETAILS" && !p.open && el.tagName !== "SUMMARY") h = true;
      else h = hidden(p);
    }
    hidm.set(el, h);
    return h;
  };
  // Fixed layers (a call bar, a chat button) move with the scroll, so where they sit on the
  // content is a matter of scroll position, not layout. They are left out of the overlap checks and
  // measured once, by how much of the phone screen they cover. Sticky elements stay in: at the top
  // of the page they sit in the flow. Tuned: the fixed "Call" pill read as overlapping hero text.
  const fixm = new Map();
  const fixed = (el) => {
    if (!el || el === document.documentElement) return false;
    if (fixm.has(el)) return fixm.get(el);
    const f = cs(el).position === "fixed" || fixed(el.parentElement);
    fixm.set(el, f); return f;
  };
  // The part of an element that its overflow ancestors let show.
  // The page itself clips sideways when <html> or <body> hides sideways overflow: what runs past the
  // right edge of the window is not shown and cannot be scrolled to. Found by the verifier's
  // table-phone-clipped fixture: a fee table cut off at the right edge of a phone was not seen.
  const PAGE_CLIP_X = [document.documentElement, document.body].some((n) => /hidden|clip/.test(cs(n).overflowX));
  const clipm = new Map();
  const clipBox = (el) => {
    if (!el || el === document.body || el === document.documentElement) return PAGE_CLIP_X ? box(-scrollX, -1e6, W - scrollX, 1e6) : box(-1e6, -1e6, 1e6, 1e6);
    if (clipm.has(el)) return clipm.get(el);
    let c = clipBox(el.parentElement);
    const s = cs(el);
    if (s.overflowX !== "visible" || s.overflowY !== "visible") {
      const r = el.getBoundingClientRect();
      c = box(s.overflowX !== "visible" ? Math.max(c.left, r.left) : c.left, s.overflowY !== "visible" ? Math.max(c.top, r.top) : c.top,
        s.overflowX !== "visible" ? Math.min(c.right, r.right) : c.right, s.overflowY !== "visible" ? Math.min(c.bottom, r.bottom) : c.bottom);
    }
    clipm.set(el, c); return c;
  };
  const scrollable = (el) => { const s = cs(el); return /auto|scroll/.test(s.overflowX + s.overflowY); };
  const lca = (a, b) => { const s = new Set(); for (let n = a; n; n = n.parentElement) s.add(n); for (let n = b; n; n = n.parentElement) if (s.has(n)) return n; return document.documentElement; };
  const childOn = (anc, el) => { let n = el; while (n && n.parentElement !== anc) n = n.parentElement; return n; };
  const positioned = (from, to) => { for (let n = from; n && n !== to; n = n.parentElement) { const p = cs(n).position; if (p === "absolute" || p === "fixed") return true; } return false; };
  // The absolutely placed layer between from and to, if there is one.
  const layerOf = (from, to) => { for (let n = from; n && n !== to; n = n.parentElement) { const p = cs(n).position; if (p === "absolute" || p === "fixed") return n; } return null; };
  // A layer is placed on purpose over what its own containing block holds (a badge in its photo
  // frame, a headline in its hero). Over something outside that block it has strayed. Found by the
  // verifier's abs-label-card fixture: a "Most asked" label set in one card hung over the next card
  // and the text-on-card check called it designed.
  const placedOver = (layer, other) => { const cb = layer.offsetParent; return !cb || cb === document.body || cb === document.documentElement || cb.contains(other); };
  const transformed = (from, to) => { for (let n = from; n && n !== to; n = n.parentElement) if (cs(n).transform !== "none") return true; return false; };
  const sameCell = (a, b, parent) => {
    const p = cs(parent);
    if (!/grid/.test(p.display)) return false;
    const A = cs(a), B = cs(b);
    return A.gridRowStart !== "auto" && A.gridRowStart === B.gridRowStart && A.gridColumnStart === B.gridColumnStart;
  };
  const designed = (el, t) => {
    // Overlap that a designer placed: an absolutely positioned layer (a badge on a photo, a caption
    // over a hero image, an image laid behind text), a transform, or two grid items set in one cell.
    const L = lca(el, t), a = childOn(L, el), b = childOn(L, t);
    const la = layerOf(el, L), lb = layerOf(t, L);
    if ((la && placedOver(la, t)) || (lb && placedOver(lb, el))) return true;
    if (transformed(el, L) || transformed(t, L)) return true;
    if (a && b && sameCell(a, b, L)) return true;
    return false;
  };

  // ---------------------------------------------------------------- text runs
  // One run per line box of each text node. Each rect is trimmed top and bottom by 18 % of the font
  // size: the font's content box is taller than its letters, so two lines of a heading set at line
  // height 1.1 have touching boxes but no touching letters. Tuned: every two-line H1 and H2 on the
  // site fired before this. Runs of three characters or fewer that are only symbols or digits are
  // decoration (carets, arrows, the step numbers on the process cards, the close x) and are kept
  // out of the text-on-text check. Tuned: the caret of every <details> summary fired.
  const runs = [];
  const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const SKIP = /^(SCRIPT|STYLE|NOSCRIPT|TEMPLATE|OPTION|TEXTAREA|TITLE|DESC)$/i;
  for (let tn = tw.nextNode(); tn; tn = tw.nextNode()) {
    const t = tn.textContent; if (!t.trim()) continue;
    const el = tn.parentElement; if (!el || SKIP.test(el.tagName) || hidden(el) || fixed(el)) continue;
    const s = cs(el); if (s.color === "rgba(0, 0, 0, 0)" || /^transparent$/.test(s.webkitTextFillColor)) continue;
    const fs = parseFloat(s.fontSize) || 16;
    const rg = document.createRange(); rg.selectNodeContents(tn);
    const deco = t.trim().length <= 3 && /^[\s\p{P}\p{S}\p{N}]+$/u.test(t.trim());
    const cb = clipBox(el);
    for (const r of rg.getClientRects()) {
      if (r.width < 1 || r.height < 1) continue;
      const k = Math.min(fs * 0.18, r.height * 0.3);
      runs.push({ el, tn, text: t, fs, deco, r: box(r.left, r.top + k, r.right, r.bottom - k), raw: r, cb });
    }
  }
  const visPart = (u) => box(Math.max(u.r.left, u.cb.left), Math.max(u.r.top, u.cb.top), Math.min(u.r.right, u.cb.right), Math.min(u.r.bottom, u.cb.bottom));

  // ---------------------------------------------------------------- 1. text on text
  {
    const v = runs.filter((u) => !u.deco).map((u) => ({ u, b: visPart(u) })).filter((x) => x.b.width > 1 && x.b.height > 1).sort((a, b) => a.b.top - b.b.top);
    const seen = new Set();
    for (let i = 0; i < v.length; i++) {
      for (let j = i + 1; j < v.length && v[j].b.top < v[i].b.bottom; j++) {
        const A = v[i], B = v[j];
        if (A.u.el === B.u.el) continue;
        const ov = inter(A.b, B.b);
        if (ov.x <= 2 || ov.y <= 2) continue;
        const key = [desc(A.u.el), desc(B.u.el)].sort().join("|");   // one finding per pair of elements
        if (seen.has(key)) continue; seen.add(key);
        add("overlap.text", "blocking", A.u.el, box(Math.min(A.b.left, B.b.left), Math.min(A.b.top, B.b.top), Math.max(A.b.right, B.b.right), Math.max(A.b.bottom, B.b.bottom)),
          words(A.u.text).slice(0, 40) + " |overlaps| " + words(B.u.text).slice(0, 40), `${Math.round(ov.x)} x ${Math.round(ov.y)} px; ${desc(B.u.el)}`);
      }
    }
  }

  // ---------------------------------------------------------------- 2. text on an image, button or card
  // A card is a block with its own background, border or shadow, between 100 x 50 px and 97 % of
  // the page width (a full-width band is a section, not a card). Overlap is allowed when it is
  // designed (see designed()); that keeps a badge inside its own photo, a hero headline over its
  // photo and a sticky header over a band quiet.
  const targets = [];
  const bgOf = (el) => { const m = (cs(el).backgroundColor.match(/[\d.]+/g) || []).map(Number); return m.length === 4 ? m[3] : m.length === 3 ? 1 : 0; };
  // A layer is any other element lifted out of the flow (position not static) with a solid
  // background: a chip, a label, a badge. Only a lifted box can paint over words; an in-flow box
  // paints its background under the text of the boxes before it.
  const TGT = /^(img|picture|video|canvas|iframe|svg|button|input|select|textarea|a|div|section|article|aside|li|figure|table)$/i;
  for (const el of document.body.querySelectorAll("*")) {
    if (SKIP.test(el.tagName) && el.tagName !== "TEXTAREA") continue;
    const lifted = !TGT.test(el.tagName) && cs(el).position !== "static" && bgOf(el) > 0.5;
    if (!TGT.test(el.tagName) && !lifted) continue;
    if (hidden(el) || fixed(el)) continue;
    const r = el.getBoundingClientRect(); if (r.width < 8 || r.height < 8) continue;
    const tag = el.tagName.toLowerCase();
    let kind = null;
    if (lifted) { targets.push({ el, kind: "layer", r, cb: clipBox(el) }); continue; }
    if (/^(img|video|canvas|iframe)$/.test(tag)) kind = "image";
    else if (tag === "picture") continue;
    else if (tag === "svg") { if (r.width >= 40 && r.height >= 40 && !el.parentElement.closest("svg")) kind = "image"; else continue; }
    else if (/^(button|input|select|textarea)$/.test(tag)) { if (el.type === "hidden" || el.type === "radio" || el.type === "checkbox") continue; kind = "button"; }
    else {
      const s = cs(el);
      const has = bgOf(el) > 0.1 || s.backgroundImage !== "none" || s.boxShadow !== "none" || (parseFloat(s.borderTopWidth) >= 1 && parseFloat(s.borderBottomWidth) >= 1 && parseFloat(s.borderLeftWidth) >= 1);
      if (!has || /^inline$/.test(s.display)) continue;
      if (tag === "a") kind = "button";
      else if (r.width >= 100 && r.height >= 50 && r.width < W * 0.97) kind = "card";
      else if (s.position !== "static" && bgOf(el) > 0.5) kind = "layer";
      else continue;
    }
    targets.push({ el, kind, r: el.getBoundingClientRect(), cb: clipBox(el) });
  }
  // Paint order at one point: does the target paint over the words? The page is scrolled so the
  // point sits mid-screen (clear of a sticky header) and is put back at once; every rect read
  // elsewhere is taken at the starting scroll.
  const sx0 = scrollX, sy0 = scrollY;
  const paintsOver = (t, textEl, ob) => {
    const px = (ob.left + ob.right) / 2 + sx0, py = (ob.top + ob.bottom) / 2 + sy0;
    window.scrollTo({ left: 0, top: Math.max(0, py - VH / 2), behavior: "instant" });
    const st = document.elementsFromPoint(px - scrollX, py - scrollY);
    window.scrollTo({ left: sx0, top: sy0, behavior: "instant" });
    const li = st.findIndex((e) => e === t.el || t.el.contains(e));
    const ti = st.findIndex((e) => e === textEl || e.contains(textEl));
    if (li < 0 || (ti >= 0 && ti < li)) return false;
    if (t.kind === "image") return true;
    for (let i = li; i < st.length && (st[i] === t.el || t.el.contains(st[i])); i++) if (bgOf(st[i]) > 0.5) return true;
    return bgOf(t.el) > 0.5;
  };
  {
    const seen = new Set();
    for (const t of targets) {
      const tb = box(Math.max(t.r.left, t.cb.left), Math.max(t.r.top, t.cb.top), Math.min(t.r.right, t.cb.right), Math.min(t.r.bottom, t.cb.bottom));
      if (tb.width < 4 || tb.height < 4) continue;
      for (const u of runs) {
        if (u.r.bottom < tb.top || u.r.top > tb.bottom || u.r.right < tb.left || u.r.left > tb.right) continue;
        if (t.el.contains(u.el) || u.el.contains(t.el)) continue;
        const ub = visPart(u); const ov = inter(ub, tb);
        if (ov.x <= 2 || ov.y <= 2) continue;
        if (u.deco) continue;
        // Designed overlap is allowed only while the words stay on top. A chip set at the foot of
        // its own hero is designed, but when the headline wraps into it on a phone the chip covers
        // the words. Found by the verifier's overlap-phone-only fixture.
        const key = desc(u.el) + "|" + desc(t.el); if (seen.has(key)) continue;
        const ob = box(Math.max(ub.left, tb.left), Math.max(ub.top, tb.top), Math.min(ub.right, tb.right), Math.min(ub.bottom, tb.bottom));
        const under = paintsOver(t, u.el, ob);
        if (!under && (t.kind === "layer" || designed(u.el, t.el))) continue;
        seen.add(key);
        if (under) add("overlap.text-covered", "blocking", u.el, ub, words(u.text), `${Math.round(ov.x)} x ${Math.round(ov.y)} px of the words are under ${t.kind} ${desc(t.el)}`);
        else add("overlap.text-on-" + t.kind, "blocking", u.el, ub, words(u.text), `sits ${Math.round(ov.x)} x ${Math.round(ov.y)} px on ${t.kind} ${desc(t.el)}`);
      }
    }
  }

  // ---------------------------------------------------------------- 3. a block on its sibling
  // In-flow siblings (not absolute, not fixed, not float) whose boxes cross by more than 4 px both
  // ways. Skipped: two grid items set in the same cell, a transformed sibling, an inline sibling.
  {
    const seen = new Set();
    for (const p of [document.body, ...document.body.querySelectorAll("*")]) {
      if (p.children.length < 2 || p.children.length > 80 || hidden(p) || fixed(p) || SKIP.test(p.tagName) || p.closest("svg")) continue;
      const kids = [];
      for (const c of p.children) {
        if (SKIP.test(c.tagName) || hidden(c)) continue;
        const s = cs(c);
        if (s.position === "absolute" || s.position === "fixed" || s.float !== "none" || /^(inline|contents|none)$/.test(s.display) || s.transform !== "none") continue;
        const r = c.getBoundingClientRect(); if (r.width < 4 || r.height < 4) continue;
        kids.push({ c, r });
      }
      for (let i = 0; i < kids.length; i++) for (let j = i + 1; j < kids.length; j++) {
        const ov = inter(kids[i].r, kids[j].r);
        if (ov.x <= 4 || ov.y <= 4) continue;
        if (sameCell(kids[i].c, kids[j].c, p)) continue;
        // Two boxes may cross where neither paints anything: a band pulled up 28 px with rounded
        // corners over the band above it, or the two lines of a display H1 set as blocks with tight
        // leading. That is a designed edge, not a collision. It fires only when letters or an image
        // of either sibling sit in the crossing. Tuned: the homepage "Try our property analysis
        // tool" band over the reviews band, and the "Myrtle Beach / Homes" H1, on every width.
        const O = box(Math.max(kids[i].r.left, kids[j].r.left), Math.max(kids[i].r.top, kids[j].r.top), Math.min(kids[i].r.right, kids[j].r.right), Math.min(kids[i].r.bottom, kids[j].r.bottom));
        const inO = (r) => { const q = inter(r, O); return q.x > 2 && q.y > 2; };
        const paints = (c) => runs.some((u) => !u.deco && c.contains(u.el) && inO(u.r)) || [...c.querySelectorAll("img,svg,video,canvas,iframe")].some((m) => !hidden(m) && inO(m.getBoundingClientRect()));
        const leaf = (c) => !c.querySelector("*:not(br):not(em):not(strong):not(span):not(a):not(i):not(b)") && bgOf(c) < 0.1;
        if (leaf(kids[i].c) && leaf(kids[j].c)) continue;   // text against text is the text check's job
        if (!paints(kids[i].c) && !paints(kids[j].c)) continue;
        const cb = clipBox(p); const vis = inter(cb, box(kids[j].r.left, kids[j].r.top, kids[j].r.right, kids[j].r.bottom));
        if (vis.x <= 4 || vis.y <= 4) continue;
        const key = desc(kids[i].c) + "|" + desc(kids[j].c); if (seen.has(key)) continue; seen.add(key);
        add("overlap.block", "blocking", kids[j].c, kids[j].r, words(kids[j].c.innerText || "").slice(0, 60) || desc(kids[j].c), `crosses ${desc(kids[i].c)} by ${Math.round(ov.x)} x ${Math.round(ov.y)} px`);
      }
    }
  }

  // ---------------------------------------------------------------- 4. text out of its box, text cut off
  // A box is the nearest block ancestor with a background, border or shadow. Text more than 2 px
  // outside it has spilled. Text partly hidden by an overflow ancestor (hidden or clip, not a
  // scrolling strip) is cut off, unless the element ends in an ellipsis or a line clamp on purpose.
  {
    const seenS = new Set(), seenC = new Set();
    const boxOf = (el) => {
      for (let n = el; n && n !== document.body; n = n.parentElement) {
        const s = cs(n); if (/^inline/.test(s.display) && n.tagName !== "BUTTON") continue;
        if (bgOf(n) > 0.1 || s.boxShadow !== "none" || parseFloat(s.borderTopWidth) + parseFloat(s.borderBottomWidth) + parseFloat(s.borderLeftWidth) + parseFloat(s.borderRightWidth) >= 3) return n;
      }
      return null;
    };
    for (const u of runs) {
      if (u.deco) continue;
      const b = boxOf(u.el);
      if (b && !positioned(u.el, b)) {
        const r = b.getBoundingClientRect(), s = cs(b);
        const out = Math.max(r.left - u.r.left, u.r.right - r.right, r.top - u.r.top, u.r.bottom - r.bottom);
        if (out > 2 && s.overflowX === "visible" && s.overflowY === "visible" && r.width < W * 0.99) {
          const key = desc(u.el) + "|" + desc(b);
          if (!seenS.has(key)) { seenS.add(key); add("overlap.spill", "blocking", u.el, u.r, words(u.text), `${Math.round(out)} px outside ${desc(b)}`); }
        }
      }
      // cut off
      const vp = visPart(u);
      const fx = vp.width / u.r.width, fy = vp.height / u.r.height;
      const cutX = fx > 0.02 && fx < 0.97, cutY = fy > 0.02 && fy < 0.9;
      if (cutX || cutY) {
        // The clipper is the nearest ancestor that hides overflow on the axis the text is cut on.
        // A box that scrolls on that axis is a strip the reader can move, so text in it is not cut
        // off. The axes are read apart: overflow-x hidden makes overflow-y auto, and a box that
        // scrolls up and down still cuts off what runs out of its side.
        let clipper = null, axis = "";
        for (let n = u.el; n; n = n.parentElement) {
          const s = cs(n), pg = n === document.body || n === document.documentElement;
          if (pg && !PAGE_CLIP_X) continue;
          const r = pg ? box(-scrollX, -1e6, W - scrollX, 1e6) : n.getBoundingClientRect();
          const ox = pg ? (PAGE_CLIP_X ? "hidden" : "visible") : s.overflowX, oy = pg ? "visible" : s.overflowY;
          if (ox !== "visible" && cutX && (u.r.left < r.left - 1 || u.r.right > r.right + 1)) { clipper = n; axis = ox; break; }
          if (oy !== "visible" && cutY && (u.r.top < r.top - 1 || u.r.bottom > r.bottom + 1)) { clipper = n; axis = oy; break; }
        }
        if (!clipper || /auto|scroll/.test(axis)) continue;
        let ell = false;
        for (let n = u.el; n && n !== clipper.parentElement; n = n.parentElement) { const s = cs(n); if (s.textOverflow === "ellipsis" || (s.webkitLineClamp && s.webkitLineClamp !== "none")) ell = true; }
        if (ell) continue;
        // a slide of a carousel that is partly in view is cut by design: its strip is the clipper
        // and it holds several cards side by side. Tuned: the homes strip on phone. The page itself
        // is never a strip, and a box whose one wide child is a table is not one either (the
        // verifier's table-phone-clipped fixture).
        const strip = (c) => {
          if (c === document.body || c === document.documentElement || c.scrollWidth <= c.clientWidth + 20) return false;
          let t = c; while (t.children.length === 1) t = t.children[0];
          const kids = [...t.children].filter((k) => !hidden(k)); if (kids.length < 2) return false;
          const top0 = kids[0].getBoundingClientRect().top;
          return kids.filter((k) => Math.abs(k.getBoundingClientRect().top - top0) < 4).length >= 2;
        };
        if (strip(clipper)) continue;
        const key = desc(u.el) + "|" + desc(clipper);
        if (!seenC.has(key)) { seenC.add(key); add("overlap.cut-off", "blocking", u.el, u.raw, words(u.text), `${Math.round((1 - Math.min(fx, fy)) * 100)} % hidden by ${clipper === document.documentElement ? "the page (html hides sideways overflow)" : clipper === document.body ? "the page (body hides sideways overflow)" : desc(clipper)}`); }
      }
    }
  }

  // ---------------------------------------------------------------- 5. sideways scroll
  {
    const sw = document.documentElement.scrollWidth;
    if (sw > W + 1) {
      const wide = [];
      for (const el of document.body.querySelectorAll("*")) {
        if (hidden(el) || fixed(el)) continue;
        const r = el.getBoundingClientRect(); if (r.right <= W + 1 || r.width < 2) continue;
        const cb = clipBox(el.parentElement || el); if (cb.right <= W + 1) continue;
        if ([...el.children].some((c) => { const q = c.getBoundingClientRect(); return q.right >= r.right - 1; })) continue;
        wide.push({ el, r });
      }
      wide.sort((a, b) => b.r.right - a.r.right);
      add("overlap.page-scroll", "blocking", wide[0] ? wide[0].el : document.body, wide[0] ? wide[0].r : null, wide[0] ? (wide[0].el.innerText || "").slice(0, 60) || desc(wide[0].el) : "",
        `page is ${sw} px wide in a ${W} px window; widest: ${wide.slice(0, 3).map((x) => desc(x.el) + " to " + Math.round(x.r.right)).join(", ")}`);
    }
  }

  // ---------------------------------------------------------------- fixed layers on the phone screen
  if (PHONE) {
    for (const el of document.body.querySelectorAll("*")) {
      if (cs(el).position !== "fixed" || hidden(el)) continue;
      if (el.parentElement && fixed(el.parentElement)) continue;
      const r = el.getBoundingClientRect(); const a = Math.max(0, Math.min(r.right, W) - Math.max(r.left, 0)) * Math.max(0, Math.min(r.bottom, VH) - Math.max(r.top, 0));
      if (a > W * VH * 0.2) add("overlap.fixed-cover", "warning", el, r, (el.innerText || "").slice(0, 60), `a fixed layer covers ${Math.round(a / (W * VH) * 100)} % of the phone screen`);
    }
  }

  // ---------------------------------------------------------------- page facts
  const ld = [];
  for (const s of document.querySelectorAll('script[type="application/ld+json"]')) {
    try { const j = JSON.parse(s.textContent); const walk = (x) => { if (Array.isArray(x)) x.forEach(walk); else if (x && typeof x === "object") { if (x["@type"]) ld.push(x); if (x["@graph"]) walk(x["@graph"]); } }; walk(j); } catch (e) { add("seo.jsonld", "blocking", s, null, "", "a JSON-LD block does not parse: " + String(e).slice(0, 60)); }
  }
  const types = (x) => [].concat(x["@type"] || []);
  const isBlog = ld.some((x) => types(x).some((t) => /^(Article|BlogPosting|NewsArticle|TechArticle|Report)$/.test(t)));
  const content = (el) => !hidden(el) && !notContent(el) && main.contains(el) && !el.closest("nav,footer,header,form,dialog,[role=dialog]");
  const contentText = () => {
    let n = 0; const tw2 = document.createTreeWalker(main, NodeFilter.SHOW_TEXT);
    for (let t = tw2.nextNode(); t; t = tw2.nextNode()) { const p = t.parentElement; if (!p || SKIP.test(p.tagName) || !content(p)) continue; n += (t.textContent.match(/[A-Za-z0-9$%][\w'$%.,-]*/g) || []).length; }
    return n;
  };
  const wordCount = contentText();

  // ---------------------------------------------------------------- photos
  const photos = [], listing = [], hiddenPhotos = [];
  let visuals = 0;
  if (o.full) {
    for (const img of main.querySelectorAll("img")) {
      if (img.closest("picture") && img.parentElement.tagName === "PICTURE") { /* counted as the img */ }
      if (hidden(img)) {
        // Tuned: on /buyers/gated-communities/ the aerial photos sit in .hx-fallback, which shows only
        // when the homes strip fails. A reader with a working strip sees none of them; the finding
        // says where they are.
        const hs = img.currentSrc || img.src || ""; if (/\.(jpe?g|png|webp|avif)/i.test(hs) && !/\/api\/idx\//.test(hs) && !/logo|icon/i.test(hs)) { let n = img; while (n.parentElement && n.parentElement !== main && hidden(n.parentElement)) n = n.parentElement; hiddenPhotos.push(desc(n)); }
        continue;
      }
      const src = img.currentSrc || img.src || "";
      const r = img.getBoundingClientRect();
      if (img.complete && img.naturalWidth === 0 && src) add("photos.broken", "blocking", img, r, img.alt || src.slice(-60), "the image did not load: " + src.slice(0, 120));
      // An image that never arrives, and a lazy image whose script never swapped in the real file,
      // both leave the reader a blank frame. Found by the verifier's lazy-hang and lazy-never
      // fixtures: neither fired, and with one good photo on the page nothing else did. The wait is
      // 15 s in all (prepare()); an image cut out of view by its strip is not counted, since a lazy
      // carousel only loads the slides near the screen.
      const cbi = clipBox(img), seen = Math.min(r.right, cbi.right) - Math.max(r.left, cbi.left) > 4 && Math.min(r.bottom, cbi.bottom) - Math.max(r.top, cbi.top) > 4;
      if (!img.complete && src && seen && !notContent(img) && r.width >= 40 && r.height >= 40) add("photos.broken", "blocking", img, r, img.alt || src.slice(-60), "the image was still loading after 15 s: " + src.slice(0, 120));
      else if (img.complete && img.naturalWidth > 0 && (img.naturalWidth <= 4 || img.naturalHeight <= 4) && r.width >= 100 && r.height >= 60 && seen) {
        const ds = img.getAttribute("data-src") || img.getAttribute("data-srcset") || img.getAttribute("data-lazy-src") || "";
        add("photos.broken", "blocking", img, r, img.alt || src.slice(-60), `a ${img.naturalWidth} x ${img.naturalHeight} px placeholder stretched to ${Math.round(r.width)} x ${Math.round(r.height)}; the real image never loaded${ds ? " (data-src " + ds.slice(0, 80) + ")" : ""}`);
      }
      if (!img.hasAttribute("alt")) add("photos.no-alt", "warning", img, r, src.split("/").pop().slice(0, 60), "image with no alt attribute");
      const isLogo = /logo|icon|avatar|badge|sprite/i.test(src + " " + img.className + " " + (img.alt || ""));
      const svg = /\.svg(\?|$)|^data:image\/svg/i.test(src);
      if (notContent(img) || /\/api\/idx\/photo\//.test(src)) { listing.push(img); continue; }
      if (isLogo || svg || img.naturalWidth < 300 || r.width < 120) continue;
      photos.push({ img, r });
      // a photo laid behind text as a background (the homepage hero) is decorative: alt="" is right
      if (!(img.alt || "").trim() && !positioned(img, main)) add("photos.empty-alt", "warning", img, r, src.split("/").pop().slice(0, 60), "a content photo with empty alt text");
    }
    // a photo laid in as a CSS background (a hero)
    for (const el of main.querySelectorAll("*")) {
      if (hidden(el) || notContent(el)) continue;
      const bi = cs(el).backgroundImage; if (!/url\(/.test(bi) || /\.svg|data:image\/svg|gradient\(/.test(bi.replace(/url\([^)]*\)/, (m) => m.includes(".svg") ? ".svg" : "")) && !/\.(jpe?g|png|webp|avif)/i.test(bi)) continue;
      const r = el.getBoundingClientRect(); if (r.width >= 300 && r.height >= 150 && /\.(jpe?g|png|webp|avif)/i.test(bi)) photos.push({ img: el, r, bg: true });
    }
    // charts, maps, tables, figures: other visuals
    for (const el of main.querySelectorAll("svg,canvas,table,figure,iframe,[class*=chart],[class*=map]")) {
      if (hidden(el) || notContent(el)) continue;
      if (el.parentElement.closest("figure,svg,table,[class*=chart],[class*=map]")) continue;
      const r = el.getBoundingClientRect(); if (r.width < 200 || r.height < 120) continue;
      if (el.tagName === "svg" && el.closest("button,a")) continue;
      if (el.querySelector("img") && photos.some((p) => el.contains(p.img))) continue;
      visuals++;
    }
    // placeholder frames. Tuned: "No photo" is the text the homes strip shows for a listing with no
    // photo; inside the strip it is the feed's, but in the page's own content it is a defect.
    for (const el of main.querySelectorAll("*")) {
      if (hidden(el)) continue;
      const own = [...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join(" ").trim();
      if (/^(no (photo|image|picture)s?( available| yet)?|(photo|image) coming soon|image unavailable|placeholder)\.?$/i.test(own)) {
        add("photos.placeholder", notContent(el) ? "warning" : "blocking", el, el.getBoundingClientRect(), own, notContent(el) ? "a listing card in the homes strip shows a placeholder" : "a placeholder where a photo should be");
        continue;
      }
      if (notContent(el) || /^(IMG|PICTURE|VIDEO|SVG|svg|CANVAS|IFRAME|SOURCE)$/.test(el.tagName)) continue;   // tuned: img.team-photo on /about/ read as its own empty frame
      const cl = (typeof el.className === "string" ? el.className : "") + " " + (el.id || "");
      if (!/(^|[\s_-])(photo|img|image|thumb|media|pic|hero-img)([\s_-]|$)/i.test(cl)) continue;
      const r = el.getBoundingClientRect(); if (r.width < 100 || r.height < 80) continue;
      const hasMedia = el.querySelector("img:not([hidden]),picture,svg,video,canvas,iframe") || /url\(/.test(cs(el).backgroundImage) || words(el.innerText).length > 2;
      const ok = hasMedia && [...el.querySelectorAll("img")].some((i) => !hidden(i) && i.naturalWidth > 0);
      if (!hasMedia || (el.querySelector("img") && !ok && !el.querySelector("svg,video,canvas,iframe") && !/url\(/.test(cs(el).backgroundImage))) add("photos.empty-frame", "blocking", el, r, desc(el), "an empty photo frame");
    }
    if (isBlog && photos.length === 0) add("photos.blog-no-photo", "blocking", main, null, document.title, `a blog with no real photo in <main>${listing.length ? ` (${listing.length} listing photos from the homes strip do not count)` : ""}${hiddenPhotos.length ? `; ${hiddenPhotos.length} photos are in the page but not shown, e.g. in ${hiddenPhotos[0]}` : ""}`);
    if (isBlog && wordCount > 1200 && photos.length + visuals < 3) add("photos.few-visuals", "warning", main, null, document.title, `${wordCount} words and ${photos.length + visuals} visuals (photos ${photos.length}, charts, maps, tables and figures ${visuals}); 3 or more expected`);
  }

  // ---------------------------------------------------------------- readability
  // Body text: p, li, dd and blockquote in the page's content with 8 words or more of their own.
  // Left out: captions, footnotes and source lists (small, figcaption, cite, a Sources section),
  // table cells, forms and the homes strip. Tuned: the sources list on every guide is set at 14 px
  // on purpose and is not read as body text.
  const sourcesSec = new Set();
  for (const h of main.querySelectorAll("h2,h3,h4")) if (/^(sources?|references|citations|notes|methodology)\b/i.test(words(h.textContent))) { const s = h.closest("section,div,aside") || h.parentElement; sourcesSec.add(s); }
  const inSources = (el) => { for (const s of sourcesSec) if (s.contains(el)) return true; return false; };
  const body = [];
  for (const el of main.querySelectorAll("p,li,dd,blockquote")) {
    if (!content(el) || el.closest("figcaption,small,cite,table,.c3a,[class*=disclaim],[class*=caption],[class*=byline],[class*=meta],[class*=breadcrumb],[class*=eyebrow],[class*=kicker]") || inSources(el)) continue;
    if (el.tagName !== "P" && el.querySelector("p")) continue;
    // The small print of a lead form that is not set in a <form>: a line beside the fields and the
    // button. Tuned by the verifier: "Free, no obligation. We reach out the same day..." under the
    // #ldWrap form on /sell/net-proceeds/ (12.75 px) was blocking on that page and a warning on
    // /buyers/waterfront-homes/; it is the form's own note, not body text.
    if (el.parentElement && el.parentElement !== main && el.parentElement.querySelector(":scope > * input:not([type=hidden]), :scope > input:not([type=hidden])") && words(el.innerText).split(" ").length < 40) continue;
    const t = words(el.innerText); const n = (t.match(/\S+/g) || []).length; if (n < 8) continue;
    // a byline, a sources line or a photo credit is set small on purpose. Tuned: the byline "By Devin
    // Day ... Updated" (15.3 px) and the closing "Sources: ..." line (13.3 px) on every guide.
    // Footnotes under a calculator, a disclosure, a legal notice and an all-capitals kicker are also
    // left out. Tuned: "An estimate, not a fact..." (/buyers/relocating/cost-of-living/), "Assumes
    // typical published 2026 fees" (/buyers/closing-costs/), "Disclosure. ... BrickWood" (/invest/),
    // "FOR ACTIVE INVESTORS ..." (/invest/), "3 BED, 2 BATH HOUSE" (homepage).
    if (/^(by |sources?[:.]|updated |last updated|reviewed by|photo:|photo by|image:|credit:|disclaimer|disclosure[:.]|legal notice|this page is educational|these are estimates|an estimate, not a fact|assumes )/i.test(t)) continue;
    if (cs(el).textTransform === "uppercase" || el.matches("[class*=src],[class*=-note],[class*=hint],[class*=-est],[class*=disclos],[class*=legal],[class*=fine]")) continue;
    body.push({ el, t, n });
  }
  const group = (list, keyf) => { const m = new Map(); for (const x of list) { const k = keyf(x); if (!m.has(k)) m.set(k, []); m.get(k).push(x); } return m; };
  if (PHONE) {
    const small = body.filter((b) => parseFloat(cs(b.el).fontSize) < 15.5);
    for (const [k, list] of group(small, (b) => cs(b.el).fontSize + " " + desc(b.el).replace(/ in #.*/, ""))) {
      const share = list.length / Math.max(1, body.length);
      add("read.small-text", parseFloat(k) < 14.9 && (share >= 0.1 || list.length >= 4) ? "blocking" : "warning", list[0].el, list[0].el.getBoundingClientRect(), list[0].t, `${list.length} of ${body.length} body paragraphs set at ${k.split(" ")[0]} on a phone (16 px minimum)`);
    }
  }
  for (const [k, list] of group(body.filter((b) => { const s = cs(b.el); const lh = parseFloat(s.lineHeight); const fz = parseFloat(s.fontSize); return fz < 18 && (isNaN(lh) ? 1.2 : lh / fz) < 1.38; }), (b) => cs(b.el).lineHeight + "/" + cs(b.el).fontSize + " " + desc(b.el).replace(/ in #.*/, ""))) {
    add("read.line-height", "warning", list[0].el, list[0].el.getBoundingClientRect(), list[0].t, `${list.length} paragraph(s) with line height ${k.split(" ")[0]} (1.4 minimum under 18 px; tuned: large lead lines at 1.25 read well and are left out)`);
  }
  for (const b of body) if (b.n > 110) add("read.long-paragraph", b.n > 160 ? "blocking" : "warning", b.el, b.el.getBoundingClientRect(), b.t, `${b.n} words in one paragraph (110 maximum)`);
  if (DESK) {
    // Characters per line: the paragraph's width over the average width of one of its characters,
    // measured from its own line boxes. Only paragraphs of three lines or more.
    const bad = [];
    for (const b of body) {
      if (b.el.tagName !== "P") continue;
      const rg = document.createRange(); rg.selectNodeContents(b.el);
      const rs = [...rg.getClientRects()].filter((r) => r.width > 1);
      const lines = new Set(rs.map((r) => Math.round(r.top / 4))).size; if (lines < 3) continue;
      const totalW = rs.reduce((s, r) => s + r.width, 0); const chars = b.el.textContent.replace(/\s+/g, " ").trim().length;
      const s = cs(b.el); const inner = b.el.clientWidth - parseFloat(s.paddingLeft) - parseFloat(s.paddingRight);
      const cpl = Math.round(inner * chars / totalW);
      // Short lines inside a card of a grid are the grid's design, not a reading column. Tuned: the
      // strategy cards on /invest/ (38 characters) and the team cards on /about/ fired.
      if (cpl < 45) { let card = false; for (let n = b.el.parentElement; n && n !== main; n = n.parentElement) { const r = n.getBoundingClientRect(); if (r.width < W * 0.6 && (bgOf(n) > 0.1 || cs(n).boxShadow !== "none" || parseFloat(cs(n).borderTopWidth) >= 1)) { card = true; break; } const ps = n.parentElement && cs(n.parentElement); if (ps && /grid|flex/.test(ps.display) && [...n.parentElement.children].filter((c) => Math.abs(c.getBoundingClientRect().top - r.top) < 4).length > 1) { card = true; break; } } if (card) continue; }
      if (cpl > 90 || cpl < 45) bad.push({ ...b, cpl });
    }
    for (const [k, list] of group(bad, (b) => (b.cpl > 90 ? "long" : "short") + " " + Math.round(b.el.clientWidth / 20))) {
      add("read.line-length", "warning", list[0].el, list[0].el.getBoundingClientRect(), list[0].t, `${list.length} paragraph(s) at about ${list[0].cpl} characters a line (45 to 90)`);
    }
  }
  if (PHONE) {
    // A long stretch of prose with nothing to rest the eye on: more than 900 px between the end of
    // one heading, list, table, figure, image or callout box and the start of the next.
    const marks = [];
    for (const el of main.querySelectorAll("h1,h2,h3,h4,h5,h6,ul,ol,dl,table,figure,img,picture,svg,video,iframe,canvas,blockquote,details,aside,[class*=callout],[class*=card],[class*=box],[class*=tip],[class*=note],[class*=stat],form,.hx-feed")) {
      if (hidden(el) || !main.contains(el)) continue; const r = el.getBoundingClientRect(); if (r.height < 10 || r.width < 40) continue;
      if (el.tagName === "svg" && r.width < 100) continue;
      marks.push({ top: r.top + scrollY, bottom: r.bottom + scrollY });
    }
    const prose = body.map((b) => ({ b, r: b.el.getBoundingClientRect() })).map((x) => ({ ...x, top: x.r.top + scrollY, bottom: x.r.bottom + scrollY }));
    marks.sort((a, b) => a.top - b.top);
    let edge = prose.length ? prose[0].top : 0; const ends = [];
    for (const m of marks) { if (m.top > edge) ends.push([edge, m.top]); edge = Math.max(edge, m.bottom); }
    if (prose.length) ends.push([edge, Math.max(...prose.map((p) => p.bottom))]);
    for (const [a, z] of ends) {
      if (z - a <= 900) continue;
      const first = prose.find((p) => p.top >= a - 2 && p.top < z);
      if (!first) continue;
      add("read.wall", "warning", first.b.el, box(0, a - scrollY, W, z - scrollY), first.b.t, `${Math.round(z - a)} px of phone scroll with no heading, list, table or visual`);
    }
    // The first phone screen holds an answer: 15 words or more of prose (not the H1, the breadcrumb
    // or the byline) that start above the fold. Tuned: the fold is the window height.
    if (o.firstScreen) {
      let n = 0, first = null;
      for (const b of body) { const r = b.el.getBoundingClientRect(); if (r.top + scrollY < VH - 24) { n += b.n; first = first || b; } }
      if (n < 15) add("read.first-screen", isBlog ? "blocking" : "warning", main, box(0, 0, W, VH), first ? first.t : document.querySelector("h1") ? words(document.querySelector("h1").innerText) : "", `${n} words of answer or summary on the first phone screen (15 or more)`);
    }
    // A table that only fits by scrolling sideways in its own box. The page does not scroll, so the
    // overlap checks are quiet, but the reader sees the right-hand columns cut off mid-word with no
    // sign that the box moves. Found by the verifier on /buyers/relocating/hurricanes/ at 390: the
    // 640 px storm table in a 342 px box showed "13 foot surge at / there; three My". A warning,
    // since a swipe does reach it; the fix is fewer columns or stacked rows on a phone.
    for (const t of main.querySelectorAll("table")) {
      if (!content(t)) continue;
      let sc = null; for (let n = t.parentElement; n && n !== main; n = n.parentElement) { if (/auto|scroll/.test(cs(n).overflowX)) { sc = n; break; } }
      if (!sc || t.scrollWidth <= sc.clientWidth * 1.25) continue;
      add("read.table-scroll", "warning", t, sc.getBoundingClientRect(), words(t.innerText).slice(0, 60), `a ${t.scrollWidth} px table in a ${sc.clientWidth} px box that scrolls sideways; ${Math.round((1 - sc.clientWidth / t.scrollWidth) * 100)} % of it is out of view on a phone`);
    }
    // Tap targets under 24 px, unless a link inside a sentence (WCAG 2.5.8 exempts those) or the
    // target has 24 px of clear space around its centre.
    const tg = [];
    for (const el of document.body.querySelectorAll("a[href],button,input:not([type=hidden]),select,textarea,summary,[role=button],[role=tab],[role=link]")) {
      if (hidden(el) || fixed(el) && false) continue;
      const r = el.getBoundingClientRect(); if (r.width < 1 || r.height < 1) continue;
      tg.push({ el, r });
    }
    const seenT = new Set();
    for (const t of tg) {
      if (t.r.width >= 24 && t.r.height >= 24) continue;
      const s = cs(t.el);
      if (/^inline$/.test(s.display) && t.el.tagName === "A") {
        const blk = t.el.parentElement && t.el.parentElement.closest("p,li,dd,td,span,div");
        if (blk && words(blk.textContent).length > words(t.el.textContent).length + 3) continue;
      }
      if (t.el.tagName === "INPUT" && /checkbox|radio/.test(t.el.type) && t.el.closest("label")) continue;
      const cx = t.r.left + t.r.width / 2, cy = t.r.top + t.r.height / 2;
      const close = tg.some((q) => q !== t && !q.el.contains(t.el) && !t.el.contains(q.el) && Math.hypot(Math.max(q.r.left - cx, 0, cx - q.r.right), Math.max(q.r.top - cy, 0, cy - q.r.bottom)) < 12);
      if (!close) continue;
      const key = desc(t.el) + Math.round(t.r.height); if (seenT.has(key)) continue; seenT.add(key);
      add("read.tap-target", "warning", t.el, t.r, words(t.el.innerText || t.el.getAttribute("aria-label") || t.el.value || desc(t.el)), `${Math.round(t.r.width)} x ${Math.round(t.r.height)} px tap target next to another (24 px minimum)`);
    }
  }
  if (o.full) {
    // Heading levels in <main>, visible ones only.
    let last = 0;
    for (const h of main.querySelectorAll("h1,h2,h3,h4,h5,h6")) {
      if (hidden(h) || h.closest("dialog,[role=dialog]")) continue;
      const lv = +h.tagName[1];
      if (last && lv > last + 1) add("read.heading-skip", "warning", h, h.getBoundingClientRect(), words(h.innerText), `H${last} is followed by H${lv}`);
      last = lv;
    }
  }

  // ---------------------------------------------------------------- SEO and AEO
  const seo = { isBlog, wordCount, photos: photos.length, listingPhotos: listing.length, visuals };
  if (o.full) {
    const h1s = [...document.querySelectorAll("h1")].filter((h) => !hidden(h));
    if (h1s.length !== 1) add("seo.h1", "blocking", h1s[1] || document.body, h1s[1] ? h1s[1].getBoundingClientRect() : null, h1s.map((h) => words(h.innerText)).join(" | "), `${h1s.length} visible H1 (one expected)`);
    const title = words(document.title);
    if (!title) add("seo.title", "blocking", document.head, null, "", "no <title>");
    else if (title.length < 30 || title.length > 65) add("seo.title", "warning", document.head, null, title, `title is ${title.length} characters (30 to 65)`);
    const md = document.querySelector('meta[name="description"]'); const d = md ? words(md.content) : "";
    if (!d) add("seo.description", "blocking", document.head, null, "", "no meta description");
    else if (d.length < 70 || d.length > 160) add("seo.description", "warning", document.head, null, d, `meta description is ${d.length} characters (70 to 160)`);
    const can = document.querySelector('link[rel="canonical"]');
    if (!can) add("seo.canonical", "blocking", document.head, null, "", "no canonical link");
    else { try { const cu = new URL(can.href); if (cu.pathname !== location.pathname) add("seo.canonical", "warning", document.head, null, can.href, `canonical path is not this page's path (${location.pathname})`); } catch (e) { add("seo.canonical", "blocking", document.head, null, can.getAttribute("href"), "canonical is not a URL"); } }
    const page = ld.filter((x) => types(x).some((t) => /^(Article|BlogPosting|NewsArticle|TechArticle|Report|WebPage|CollectionPage|AboutPage|ContactPage|FAQPage|ItemPage)$/.test(t) && t !== "FAQPage"));
    if (!page.length) add("seo.schema", "blocking", document.head, null, "", "no Article or WebPage JSON-LD");
    else {
      const best = page.find((x) => x.author && x.dateModified);
      if (!best) add("seo.schema", isBlog ? "blocking" : "warning", document.head, null, page.map((x) => types(x).join("/")).join(", "), "no Article or WebPage node has both author and dateModified");
    }
    // The answer before the first H2: a paragraph of 15 to 90 words between the H1 and the first H2.
    const h1 = h1s[0]; const h2 = [...main.querySelectorAll("h2")].find((h) => content(h) && (!h1 || (h1.compareDocumentPosition(h) & 4)));
    const lead = body.find((b) => (!h1 || (h1.compareDocumentPosition(b.el) & 4)) && (!h2 || (b.el.compareDocumentPosition(h2) & 4)) && b.n >= 15);
    if (!lead) add("seo.answer-first", isBlog ? "blocking" : "warning", h1 || main, h1 ? h1.getBoundingClientRect() : null, h1 ? words(h1.innerText) : "", "no summary paragraph of 15 words or more between the H1 and the first H2");
    else if (lead.n > 90) add("seo.answer-first", "warning", lead.el, lead.el.getBoundingClientRect(), lead.t, `the first summary paragraph is ${lead.n} words; an answer engine quotes 40 to 60`);
    // FAQ markup only for questions shown on the page.
    const visible = words(document.body.innerText).toLowerCase().replace(/[^a-z0-9 ]/g, "");
    for (const f of ld.filter((x) => types(x).includes("FAQPage"))) {
      for (const q of [].concat(f.mainEntity || [])) {
        const n = words(q && q.name).toLowerCase().replace(/[^a-z0-9 ]/g, "");
        if (n && !visible.includes(n)) add("seo.faq-unseen", "blocking", document.head, null, q.name, "an FAQPage question that is not visible on the page");
      }
    }
    // Internal links from the page's own content.
    const links = new Set();
    for (const a of main.querySelectorAll("a[href]")) {
      if (!content(a)) continue;
      try { const u = new URL(a.href, location.href); if (u.host === location.host && u.pathname !== location.pathname && !/^\/(homes|api)\//.test(u.pathname)) links.add(u.pathname); } catch (e) { }
    }
    seo.internalLinks = links.size;
    if (links.size < 3) add("seo.internal-links", "warning", main, null, [...links].join(" "), `${links.size} internal links from the page's content (3 or more)`);
  }
  return { findings: out, facts: seo, scrollHeight: document.documentElement.scrollHeight };
}

// Contrast, measured as tools/contrast-scan.js in the website repo does it: each text element at
// the centre of its first line, against what the browser stacks at that point, composited bottom
// to top. Text over a photo or a gradient is not scored here (the AI half looks at those).
async function contrastChecks(o) {
  const lum = ([r, g, bl]) => { const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(bl); };
  const parse = (x) => { const m = (String(x).match(/[\d.]+/g) || []).map(Number); return { rgb: m.slice(0, 3), a: m.length > 3 ? m[3] : (m.length === 3 ? 1 : 0) }; };
  const over = (top, a, bot) => top.map((c, i) => c * a + bot[i] * (1 - a));
  const opac = (el) => { let v = 1; for (let n = el; n && n.nodeType === 1; n = n.parentElement) v *= +getComputedStyle(n).opacity; return v; };
  const items = [];
  for (const el of document.body.querySelectorAll("*")) {
    if (/^(SCRIPT|STYLE|NOSCRIPT|OPTION|TEMPLATE|TITLE)$/.test(el.tagName) || /^(title|desc)$/.test(el.tagName)) continue;
    if (el.closest(o.notContent) && !el.closest("main")) continue;
    const tn = [...el.childNodes].find((n) => n.nodeType === 3 && n.textContent.trim().length > 1); if (!tn) continue;
    const s = getComputedStyle(el); if (s.visibility === "hidden" || s.display === "none") continue;
    if (el.closest("[aria-hidden=true],dialog:not([open]),details:not([open]) > :not(summary)")) continue;
    const r = document.createRange(); r.selectNodeContents(tn); const rc = r.getClientRects()[0];
    if (!rc || rc.width < 2 || rc.height < 2) continue;
    items.push({ el, tn });
  }
  const out = [], VH = innerHeight, H = document.documentElement.scrollHeight;
  for (let top = 0; top < H; top += VH - 100) {
    window.scrollTo({ top, behavior: "instant" });
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    for (const it of items) {
      if (it.done) continue;
      const lr = document.createRange(); lr.selectNodeContents(it.tn); const live = lr.getClientRects()[0]; if (!live) continue;
      const cy = live.top + live.height / 2; if (cy < 4 || cy > VH - 4) continue;
      const x = live.left + Math.min(live.width / 2, 12); it.done = true;
      const el = it.el, s = getComputedStyle(el);
      if (s.position === "fixed" || s.position === "sticky") continue;
      const op = opac(el); if (op < 0.05) continue;
      let clipped = false;
      for (let n = el.parentElement; n && n !== document.body; n = n.parentElement) { const ns = getComputedStyle(n); if (ns.overflowX !== "visible" || ns.overflowY !== "visible") { const b = n.getBoundingClientRect(); if (x < b.left || x > b.right || cy < b.top || cy > b.bottom || b.width < 3 || b.height < 3) { clipped = true; break; } } }
      if (clipped) continue;
      const stack = document.elementsFromPoint(x, cy);
      const own = stack.indexOf(el) >= 0 ? stack.indexOf(el) : (s.pointerEvents === "none" ? 0 : stack.findIndex((q) => el.contains(q)));
      if (own < 0) continue;
      let covered = false;
      for (let i = 0; i < own; i++) { const q = stack[i]; if (q.contains(el) || el.contains(q)) continue; if (parse(getComputedStyle(q).backgroundColor).a * opac(q) > 0.9) { covered = true; break; } }
      if (covered) continue;
      let bg = [255, 255, 255], image = false;
      for (const q of stack.slice(own).reverse()) {
        const qs = getComputedStyle(q);
        if (qs.backgroundImage && qs.backgroundImage !== "none" && !/^url\(.*\.svg/.test(qs.backgroundImage)) image = true;
        if (/^(IMG|VIDEO|CANVAS|IFRAME|PICTURE)$/.test(q.tagName)) image = true;
        const bb = parse(qs.backgroundColor); if (bb.a > 0) { bg = over(bb.rgb, bb.a * opac(q), bg); if (bb.a * opac(q) > 0.95) image = false; }
        if (q instanceof SVGElement && q !== el && /^(rect|path|circle|ellipse|polygon)$/.test(q.tagName) && /^rgb/.test(qs.fill)) { const sf = parse(qs.fill); const fo = parseFloat(qs.fillOpacity); bg = over(sf.rgb, (sf.a || 1) * (isNaN(fo) ? 1 : fo) * opac(q), bg); }
      }
      if (image) continue;
      const paint = el instanceof SVGElement && /^rgb/.test(s.fill) ? s.fill : s.color;
      const f = parse(paint); const fg = over(f.rgb, f.a * op, bg);
      const L1 = lum(fg), L2 = lum(bg), cr = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
      const fz = parseFloat(s.fontSize), fw = +s.fontWeight || 400;
      const need = fz >= 24 || (fz >= 18.66 && fw >= 700) ? 3 : 4.5;
      if (cr < need) {
        // one finding per style: tuned, the white "0.5 mi" chip on 133 listing cards gave 133 lines
        const key = el.tagName + el.className + paint + bg.map(Math.round).join();
        const prev = out.find((x) => x.key === key); if (prev) { prev.count++; continue; }
        const rr = el.getBoundingClientRect();
        out.push({ check: "read.contrast", level: cr < need - 1 ? "blocking" : "warning", words: it.tn.textContent.replace(/\s+/g, " ").trim().slice(0, 90), el: el.tagName.toLowerCase() + (typeof el.className === "string" && el.className.trim() ? "." + el.className.trim().split(/\s+/).slice(0, 2).join(".") : ""), x: Math.round(rr.left + scrollX), y: Math.round(rr.top + scrollY), w: Math.round(rr.width), h: Math.round(rr.height), detail: `contrast ${cr.toFixed(2)}:1 (${need}:1 needed), ${paint} on rgb(${bg.map(Math.round).join(",")})`, key, count: 1 });
      }
    }
  }
  window.scrollTo({ top: 0, behavior: "instant" });
  return out.map(({ key, count, ...f }) => (count > 1 ? { ...f, detail: f.detail + `; ${count} places` } : f));
}

async function prepare(p) {
  await p.evaluate(async (notContent) => {
    const H = () => document.documentElement.scrollHeight;
    for (let y = 0; y < H(); y += Math.round(innerHeight * 0.8)) { window.scrollTo({ top: y, behavior: "instant" }); await new Promise((r) => setTimeout(r, 70)); }
    window.scrollTo({ top: H(), behavior: "instant" }); await new Promise((r) => setTimeout(r, 150));
    window.scrollTo({ top: 0, behavior: "instant" });
    const s = document.createElement("style");
    // Reveals and fades are measured at rest. The welcome popup is not page content.
    // Scroll-driven animations (animation-timeline: view() or scroll()) are put on the clock too, so
    // they also end at rest. Found by the verifier on the homepage: the analyzer sample card tilts
    // back 16 degrees and drops 64 px until it scrolls into view. Measured at the top of the page it
    // hung 174 px into the "Why Chapter3" band at 390 and spilled its badges at 1440, but a reader
    // who scrolls to it sees it flat, 165 px clear of the heading. The helper's top finding was this.
    s.textContent = "*,*::before,*::after{animation-timeline:auto!important;transition-duration:0s!important;transition-delay:0s!important;animation-duration:0s!important;animation-delay:0s!important;animation-iteration-count:1!important;scroll-behavior:auto!important;caret-color:transparent!important}#c3-pop,.c3-pop{display:none!important}";
    document.head.appendChild(s);
    const imgs = [...document.images].filter((i) => !i.complete);
    const settle = (list, ms) => Promise.race([Promise.all(list.map((i) => new Promise((r) => { if (i.complete) return r(); i.addEventListener("load", r, { once: true }); i.addEventListener("error", r, { once: true }); }))), new Promise((r) => setTimeout(r, ms))]);
    await settle(imgs, 5000);
    // A page's own image that is still loading gets 10 s more before pageChecks calls it broken.
    // The homes strip's listing photos do not wait: they are not the page's content.
    const slow = imgs.filter((i) => !i.complete && !i.closest(notContent) && i.closest("main"));
    if (slow.length) await settle(slow, 10000);
    if (document.fonts && document.fonts.ready) await Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 3000))]);
    await new Promise((r) => setTimeout(r, 200));
  }, NOT_CONTENT);
}

async function mark(p, findings) {
  await p.evaluate((fs) => {
    const layer = document.createElement("div"); layer.id = "critic-marks";
    layer.style.cssText = "position:absolute;left:0;top:0;width:0;height:0;z-index:2147483647;pointer-events:none";
    for (const f of fs) {
      if (f.x == null || !f.w) continue;
      const d = document.createElement("div");
      d.style.cssText = `position:absolute;left:${f.x - 2}px;top:${f.y - 2}px;width:${f.w + 4}px;height:${f.h + 4}px;outline:3px solid ${f.level === "blocking" ? "#e00" : "#f90"};background:${f.level === "blocking" ? "rgba(255,0,0,.08)" : "transparent"}`;
      layer.appendChild(d);
    }
    document.body.appendChild(layer);
  }, findings);
}

/**
 * critique({ base, paths, widths, shots, log }) -> { results: [{ path, width, findings, facts }], blocking }
 */
export async function critique({ base, paths, widths = [390, 768, 1440], shots = "", log = () => {}, timeout = 45000, nodeFetch = !!process.env.CRITIC_NODE_FETCH }) {
  const pw = loadPlaywright(); if (!pw) throw new Error("critic: playwright is not installed (npm i -g playwright, then npx playwright install chromium)");
  const browser = await pw.chromium.launch();
  const results = [];
  const order = [...widths].sort((a, b) => b - a);   // widest first: the page facts are read there
  try {
    for (const pth of paths) {
      const url = new URL(pth, base.replace(/\/?$/, "/")).href;
      let firstScreenDone = false;
      for (const [wi, w] of order.entries()) {
        const phone = w <= 480;
        const ctx = await browser.newContext({ viewport: { width: w, height: phone ? 844 : 900 }, deviceScaleFactor: 1, isMobile: phone, hasTouch: phone });
        await ctx.addInitScript(() => { try { localStorage.c3PopDone = "1"; sessionStorage.c3PopDone = "1"; } catch (e) { } });
        await ctx.route(/googletagmanager|google-analytics|doubleclick|cloudflareinsights|challenges\.cloudflare|maps\.googleapis|clarity\.ms|facebook\.net/, (r) => r.abort());
        // --node-fetch: the page's requests are made by Node and handed to the browser. For a machine
        // whose network re-signs TLS with a CA that Node trusts (NODE_EXTRA_CA_CERTS) and Chromium
        // does not. Node still verifies every certificate.
        if (nodeFetch) await ctx.route(/^https?:/, async (route) => {
          const q = route.request();
          try {
            const h = { ...q.headers() }; delete h["accept-encoding"];
            const r = await fetch(q.url(), { method: q.method(), headers: h, body: /^(GET|HEAD)$/.test(q.method()) ? undefined : q.postDataBuffer() || undefined, redirect: "follow" });
            const rh = {}; r.headers.forEach((v, k) => { if (!/^(content-encoding|content-length|transfer-encoding|set-cookie)$/.test(k)) rh[k] = v; });
            await route.fulfill({ status: r.status, headers: rh, body: Buffer.from(await r.arrayBuffer()) });
          } catch (e) { await route.abort().catch(() => {}); }
        });
        const p = await ctx.newPage();
        const errors = [];
        p.on("pageerror", (e) => errors.push(String(e.message || e).slice(0, 160)));
        const res = { path: pth, url, width: w, findings: [], facts: {} };
        try {
          const resp = await p.goto(url, { waitUntil: "load", timeout });
          if (!resp || resp.status() >= 400) res.findings.push({ check: "page.status", level: "blocking", words: "", el: "", detail: `HTTP ${resp ? resp.status() : "no response"}` });
          await prepare(p);
          const r = await p.evaluate(pageChecks, { notContent: NOT_CONTENT, full: wi === 0, firstScreen: phone && !firstScreenDone, width: w, height: phone ? 844 : 900 });
          if (phone) firstScreenDone = true;
          const c = await p.evaluate(contrastChecks, { notContent: NOT_CONTENT });
          res.findings.push(...r.findings, ...c); res.facts = r.facts; res.facts.scrollHeight = r.scrollHeight;
          for (const e of [...new Set(errors)]) res.findings.push({ check: "page.script-error", level: "warning", words: e, el: "", detail: "a script error on the page" });
          if (shots) {
            fs.mkdirSync(shots, { recursive: true });
            const slug = (pth.replace(/^\/|\/$/g, "").replace(/[^a-z0-9]+/gi, "-") || "home") + "-" + w;
            await mark(p, res.findings);
            await p.screenshot({ path: path.join(shots, slug + ".png"), fullPage: true, timeout: 60000 }).catch((e) => log(`  shot failed: ${e.message.slice(0, 80)}`));
            res.shot = path.join(shots, slug + ".png");
            let k = 0;
            for (const f of res.findings) {
              if (!/^overlap\./.test(f.check) || f.x == null || !f.w || k >= 25) continue;
              const pad = 60, x = Math.max(0, f.x - pad), y = Math.max(0, f.y - pad);
              f.crop = path.join(shots, `${slug}-${++k}.png`);
              await p.screenshot({ path: f.crop, fullPage: true, clip: { x, y, width: Math.min(w - x, f.w + pad * 2), height: Math.min(900, f.h + pad * 2) } }).catch(() => { delete f.crop; });
            }
          }
        } catch (e) {
          res.findings.push({ check: "page.error", level: "blocking", words: "", el: "", detail: String(e.message || e).slice(0, 200) });
        }
        results.push(res);
        log(res);
        await ctx.close();
      }
    }
  } finally { await browser.close(); }
  return { results, blocking: results.reduce((n, r) => n + r.findings.filter((f) => f.level === "blocking").length, 0) };
}

function printResult(r) {
  const b = r.findings.filter((f) => f.level === "blocking").length, wn = r.findings.length - b;
  const f = r.facts || {};
  console.log(`\n${r.path} at ${r.width} px: ${b} blocking, ${wn} warning${f.wordCount != null && f.photos != null && r.findings !== undefined && f.internalLinks != null ? `   [${f.isBlog ? "blog" : "page"}, ${f.wordCount} words, ${f.photos} photos, ${f.visuals} other visuals, ${f.internalLinks} internal links]` : ""}`);
  const rank = (x) => (x.level === "blocking" ? 0 : 1);
  for (const x of [...r.findings].sort((a, c) => rank(a) - rank(c))) {
    const at = x.x != null ? ` @ ${x.x},${x.y} ${x.w}x${x.h}` : "";
    console.log(`  ${x.level === "blocking" ? "BLOCK" : "warn "} ${x.check.padEnd(26)} "${x.words}"${at}${x.detail ? "  " + x.detail : ""}${x.el ? "  <" + x.el + ">" : ""}`);
  }
}

async function cli(argv) {
  const opt = (k, d) => { const i = argv.indexOf(k); if (i < 0) return d; const v = argv[i + 1]; argv.splice(i, 2); return v; };
  const widths = opt("--widths", "390,768,1440").split(",").map(Number).filter(Boolean);
  const json = opt("--json", ""), shots = opt("--shots", "");
  const nf = argv.indexOf("--node-fetch"); if (nf >= 0) { argv.splice(nf, 1); process.env.CRITIC_NODE_FETCH = "1"; }
  const [base, ...paths] = argv.filter((a) => !a.startsWith("--"));
  if (!base || !paths.length) { console.error("usage: node tools/critic.mjs <base-url> <path> [<path> ...] [--widths 390,768,1440] [--json out.json] [--shots dir] [--node-fetch]"); process.exit(2); }
  const out = await critique({ base, paths, widths, shots, log: printResult });
  const all = out.results.flatMap((r) => r.findings);
  console.log(`\n${out.results.length} page views, ${out.blocking} blocking, ${all.length - out.blocking} warning`);
  if (json) fs.writeFileSync(json, JSON.stringify(out, null, 1));
  process.exitCode = out.blocking ? 1 : 0;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  cli(process.argv.slice(2)).catch((e) => { console.error(e); process.exit(2); });
}
