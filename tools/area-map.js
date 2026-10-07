#!/usr/bin/env node
/*
 * area-map.js: a drawn map that shows where a place is on the Grand Strand, and a
 * live Google map that loads only when the reader asks for it.
 *
 * Why: readers from out of state do not know the roads or the towns (voice/RULES.md
 * PLAIN-1, P4). A map with the place, the beach and the towns answers "where is it".
 *
 * Usage, in a spec or a tool:
 *
 *   const { areaMap, areaMapSvg, liveMapHtml, CREDIT } = require("<blog-brain>/tools/area-map.js");
 *   const places = {
 *     home: { name: "Myrtle Trace", lat: 33.7785, lon: -78.9966, town: "Conway" },
 *     landmarks: [
 *       { name: "Beach", kind: "beach", lat: 33.71, lon: -78.86, minutes: 20 },
 *       { name: "Hospital", kind: "hospital", lat: 33.7855, lon: -79.0019, minutes: 2 },
 *     ],
 *   };
 *   const m = areaMap(places);      // { svg, alt, caption, width, height, bytes, frame }
 *   h.figure(m.svg, "Where Myrtle Trace is. " + CREDIT)   // in a mkpage spec
 *   areaMapSvg(places)              // the svg string only
 *   liveMapHtml({ name: "Myrtle Trace", lat: 33.7785, lon: -78.9966 })   // tap to load
 *   liveMapHtml({ ..., svg: m.svg, caption: "..." })     // drawn map first, live map under it
 *
 * Command line:
 *
 *   node tools/area-map.js places.json > map.svg          # the svg
 *   node tools/area-map.js places.json --live > map.html  # the svg, then the live map block
 *   node tools/area-map.js --refresh-geo                  # refetch the coast and water from OpenStreetMap
 *
 * places.json fields:
 *   home       { name, lat, lon, town? }  town is the town the page says it is in. Without it
 *              the map text says "near" the closest town.
 *   landmarks  [{ name, lat, lon, kind, minutes?, short? }]  kind is an icon name from
 *              tools/icons.js (beach, airport, hospital, grocery, shopping, town, golf ...).
 *              minutes is the drive time from home; the map prints "about N min".
 *              short is a shorter name for the map label.
 *   alt        optional. Replaces the made-up aria-label.
 *   minSpanKm  optional. The least width and height of the map, default 8 km.
 *   coast      optional, default true. Frame the map so the nearest beach shows.
 *   towns      optional. "main" (default: the seven Grand Strand towns) or "all" (adds smaller places).
 *
 * What it keeps to:
 *   - One inline <svg role="img" aria-label="...">, no external request, no script. Under 40 KB.
 *   - Coast and water come from tools/geo/grand-strand.json, cut from OpenStreetMap
 *     (ODbL). Every caption must carry CREDIT ("Map data (c) OpenStreetMap contributors").
 *   - Labels are placed so they do not overlap. A marker that sits on another is moved
 *     aside and joined to its true spot by a short line.
 *   - On a phone the labels are about 12 px; on a wide screen a small style block shrinks the
 *     labels and icons around their points, so the map looks the same at 360 and 760 px.
 *   - Drive minutes are the caller's numbers. Take them from a fact ledger row, never a guess.
 */
"use strict";
const fs = require("fs"), path = require("path");
const { iconInner, resolveIcon } = require("./icons.js");

const GEO_FILE = path.join(__dirname, "geo", "grand-strand.json");
const CREDIT = "Map data © OpenStreetMap contributors (ODbL).";
const DATA_BBOX = [-79.45, 33.25, -78.35, 34.05]; // west, south, east, north
const MAX_BYTES = 40 * 1024;

/* Site palette (BRAND.md), plus two water tints made from Slate. */
const C = { land: "#fbf8f3", water: "#d3e0e5", river: "#a9c3cd", sand: "#e8c99a", navy: "#1c2028", brass: "#c4783a", brassInk: "#91592b", slate: "#5c6b78", waterInk: "#3f6275", white: "#ffffff", rule: "rgba(28,32,40,.15)" };

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const r1 = (n) => { const v = Math.round(n * 10) / 10; return Object.is(v, -0) ? "0" : String(v); };

let GEO = null;
function loadGeo() {
  if (!GEO) GEO = JSON.parse(fs.readFileSync(GEO_FILE, "utf8"));
  return GEO;
}
const pairs = (flat) => { const out = []; for (let i = 0; i < flat.length; i += 2) out.push([flat[i], flat[i + 1]]); return out; };

/* ---------------- geometry ---------------- */

function simplify(pts, tol) { // Douglas-Peucker, iterative
  if (pts.length < 3) return pts.slice();
  const keep = new Uint8Array(pts.length); keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]], t2 = tol * tol;
  while (stack.length) {
    const [a, b] = stack.pop(); let best = -1, bi = -1;
    const [ax, ay] = pts[a], [bx, by] = pts[b], dx = bx - ax, dy = by - ay, L = dx * dx + dy * dy;
    for (let i = a + 1; i < b; i++) {
      const [px, py] = pts[i];
      let d;
      if (L === 0) d = (px - ax) ** 2 + (py - ay) ** 2;
      else { const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / L)); d = (px - ax - t * dx) ** 2 + (py - ay - t * dy) ** 2; }
      if (d > best) { best = d; bi = i; }
    }
    if (best > t2) { keep[bi] = 1; stack.push([a, bi], [bi, b]); }
  }
  return pts.filter((_, i) => keep[i]);
}

function clipPolygon(pts, x0, y0, x1, y1) { // Sutherland-Hodgman against a rectangle
  const edges = [
    [(p) => p[0] >= x0, (p, q) => [x0, p[1] + (q[1] - p[1]) * (x0 - p[0]) / (q[0] - p[0])]],
    [(p) => p[0] <= x1, (p, q) => [x1, p[1] + (q[1] - p[1]) * (x1 - p[0]) / (q[0] - p[0])]],
    [(p) => p[1] >= y0, (p, q) => [p[0] + (q[0] - p[0]) * (y0 - p[1]) / (q[1] - p[1]), y0]],
    [(p) => p[1] <= y1, (p, q) => [p[0] + (q[0] - p[0]) * (y1 - p[1]) / (q[1] - p[1]), y1]],
  ];
  let out = pts;
  for (const [inside, cut] of edges) {
    const inp = out; out = [];
    for (let i = 0; i < inp.length; i++) {
      const p = inp[i], q = inp[(i + 1) % inp.length];
      if (inside(q)) { if (!inside(p)) out.push(cut(p, q)); out.push(q); }
      else if (inside(p)) out.push(cut(p, q));
    }
    if (!out.length) return [];
  }
  return out;
}

function clipLine(pts, x0, y0, x1, y1) { // Liang-Barsky per segment; returns visible pieces
  const pieces = []; let cur = null;
  for (let i = 1; i < pts.length; i++) {
    const [ax, ay] = pts[i - 1], [bx, by] = pts[i], dx = bx - ax, dy = by - ay;
    let t0 = 0, t1 = 1, ok = true;
    for (const [p, q] of [[-dx, ax - x0], [dx, x1 - ax], [-dy, ay - y0], [dy, y1 - ay]]) {
      if (p === 0) { if (q < 0) { ok = false; break; } continue; }
      const t = q / p;
      if (p < 0) { if (t > t1) { ok = false; break; } if (t > t0) t0 = t; }
      else { if (t < t0) { ok = false; break; } if (t < t1) t1 = t; }
    }
    if (!ok) { if (cur) { pieces.push(cur); cur = null; } continue; }
    const A = [ax + t0 * dx, ay + t0 * dy], B = [ax + t1 * dx, ay + t1 * dy];
    if (!cur || t0 > 0) { if (cur) pieces.push(cur); cur = [A]; }
    cur.push(B);
    if (t1 < 1) { pieces.push(cur); cur = null; }
  }
  if (cur) pieces.push(cur);
  return pieces.filter((p) => p.length > 1);
}

function inPoly(pt, poly) {
  let c = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    if ((yi > pt[1]) !== (yj > pt[1]) && pt[0] < (xj - xi) * (pt[1] - yi) / (yj - yi) + xi) c = !c;
  }
  return c;
}

function distToLine(pt, line) {
  let best = Infinity;
  for (let i = 1; i < line.length; i++) {
    const [ax, ay] = line[i - 1], [bx, by] = line[i], dx = bx - ax, dy = by - ay, L = dx * dx + dy * dy;
    const t = L ? Math.max(0, Math.min(1, ((pt[0] - ax) * dx + (pt[1] - ay) * dy) / L)) : 0;
    best = Math.min(best, Math.hypot(pt[0] - ax - t * dx, pt[1] - ay - t * dy));
  }
  return best;
}

const pathD = (pts, close) => "M" + pts.map((p) => r1(p[0]) + " " + r1(p[1])).join("L") + (close ? "Z" : "");

/* ---------------- text measure ---------------- */

/* DM Sans widths in em, rounded up a little so a label never runs past its box. */
function textWidth(s, size, spacing = 0) {
  let w = 0;
  for (const ch of String(s)) {
    if (ch === " ") w += 0.26;
    else if (/[iljtf.,'’:;|!]/.test(ch)) w += 0.29;
    else if (/[rI1]/.test(ch)) w += 0.38;
    else if (/[mwMW]/.test(ch)) w += 0.86;
    else if (/[A-Z]/.test(ch)) w += 0.68;
    else if (/[0-9]/.test(ch)) w += 0.57;
    else w += 0.55;
  }
  return w * size * 1.04 + spacing * size * String(s).length;
}

function wrap(s, max) {
  const words = String(s).split(/\s+/), lines = [];
  let cur = "";
  for (const w of words) {
    if (cur && (cur + " " + w).length > max) { lines.push(cur); cur = w; } else cur = cur ? cur + " " + w : w;
  }
  if (cur) lines.push(cur);
  if (lines.length > 2) return [lines[0], lines.slice(1).join(" ")];
  return lines;
}

/* ---------------- layout ---------------- */

const overlap = (a, b, pad = 0) => a.x0 < b.x1 + pad && b.x0 < a.x1 + pad && a.y0 < b.y1 + pad && b.y0 < a.y1 + pad;
const area = (a, b) => Math.max(0, Math.min(a.x1, b.x1) - Math.max(a.x0, b.x0)) * Math.max(0, Math.min(a.y1, b.y1) - Math.max(a.y0, b.y0));

class Layout {
  constructor(W, H) { this.W = W; this.H = H; this.boxes = []; }
  inside(b, m = 3) { return b.x0 >= m && b.y0 >= m && b.x1 <= this.W - m && b.y1 <= this.H - m; }
  free(b, pad = 2, ignore) { return this.boxes.every((o) => (ignore && ignore(o)) || !overlap(b, o, pad)); }
  fits(b, pad, ignore) { return this.inside(b) && this.free(b, pad, ignore); }
  cost(b) { let c = this.inside(b) ? 0 : 1e6; for (const o of this.boxes) c += area(b, o) * (o.kind === "marker" ? 3 : 1); return c; }
  add(b, kind, owner) { const o = { ...b, kind, owner }; this.boxes.push(o); return o; }
}

/* Candidate spots for a w x h label beside a point marker of radius r.
   Each returns { anchor, x, y } with x the text anchor x and y the box top, relative to the point. */
function besideCandidates(w, h, r, gaps = [0, 7, 16, 28]) {
  const g = 4, k = r * 0.72, out = [];
  for (const d of gaps) {
    out.push(
      { anchor: "start", x: r + g + d, y: -h / 2 },
      { anchor: "end", x: -(r + g + d), y: -h / 2 },
      { anchor: "middle", x: 0, y: r + g + d },
      { anchor: "middle", x: 0, y: -(r + g + d) - h },
      { anchor: "start", x: k + g + d * 0.7, y: -k - h + 3 - d * 0.7 },
      { anchor: "start", x: k + g + d * 0.7, y: k - 3 + d * 0.7 },
      { anchor: "end", x: -(k + g + d * 0.7), y: -k - h + 3 - d * 0.7 },
      { anchor: "end", x: -(k + g + d * 0.7), y: k - 3 + d * 0.7 },
    );
  }
  return out;
}
const boxOf = (px, py, c, w, h) => {
  const x0 = c.anchor === "start" ? px + c.x : c.anchor === "end" ? px + c.x - w : px + c.x - w / 2;
  return { x0, y0: py + c.y, x1: x0 + w, y1: py + c.y + h };
};

/* ---------------- words ---------------- */

const DIRS = ["east", "northeast", "north", "northwest", "west", "southwest", "south", "southeast"];
function direction(from, to) { // compass word for "to" as seen from "from"
  const dx = (to.lon - from.lon) * Math.cos(from.lat * Math.PI / 180), dy = to.lat - from.lat;
  const a = (Math.atan2(dy, dx) * 180 / Math.PI + 360 + 22.5) % 360;
  return DIRS[Math.floor(a / 45)];
}
function km(a, b) {
  const R = 6371, t = Math.PI / 180, dLat = (b.lat - a.lat) * t, dLon = (b.lon - a.lon) * t;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * t) * Math.cos(b.lat * t) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
const roundMiles = (mi) => (mi < 1.5 ? "about 1 mile" : `about ${mi < 10 ? Math.round(mi) : Math.round(mi / 5) * 5} miles`);
const KIND_WORD = { beach: "the beach", airport: "the airport", hospital: "the hospital", grocery: "a grocery store", shopping: "shopping", golf: "a golf course" };

function nearestCoast(home, geo) {
  const coast = pairs(geo.coast); let best = null, bd = Infinity;
  for (const [lon, lat] of coast) { const d = km(home, { lat, lon }); if (d < bd) { bd = d; best = { lat, lon }; } }
  return { point: best, km: bd };
}

const mins = (n) => `${n} minute${n === 1 ? "" : "s"}`;
function describe(spec, geo) {
  const home = spec.home;
  const towns = geo.towns.filter((t) => t.main);
  let where;
  if (home.town) where = `is in ${home.town}`;
  else { const t = towns.slice().sort((a, b) => km(home, a) - km(home, b))[0]; where = `is near ${t.name}`; }
  const coast = nearestCoast(home, geo);
  const beach = (spec.landmarks || []).find((l) => resolveKind(l.kind) === "beach" && l.minutes);
  let sea;
  if (coast.km < 1.2) sea = "close to the beach";
  else if (beach) sea = `about ${mins(beach.minutes)} ${coast.km > 3 ? "inland " : ""}from the beach by car`;
  else sea = `${roundMiles(coast.km / 1.609)} inland from the ocean`;
  const mb = geo.towns.find((t) => t.name === "Myrtle Beach");
  let rel = "";
  if (mb && km(home, mb) > 5 && !/Myrtle Beach$/.test(home.town || "")) rel = `, ${direction(mb, home)} of Myrtle Beach`;
  let s = `${home.name} ${where}, ${sea}${rel}.`;
  const shown = (spec.landmarks || []).filter((l) => l !== beach).map((l) => l.minutes ? `${l.name}, about ${mins(l.minutes)} away` : l.name);
  if (shown.length) s += ` The map also shows ${shown.length > 1 ? shown.slice(0, -1).join("; ") + "; and " + shown.at(-1) : shown[0]}.`;
  return s;
}

function resolveKind(kind) { try { return resolveIcon(kind || "pin"); } catch { return "pin"; } }

/* ---------------- the map ---------------- */

function slug(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 24) || "map"; }

function validate(spec) {
  if (!spec || !spec.home) throw new Error("area-map: places need a home { name, lat, lon }");
  const all = [spec.home, ...(spec.landmarks || [])];
  for (const p of all) {
    if (!p.name || typeof p.lat !== "number" || typeof p.lon !== "number") throw new Error(`area-map: every place needs name, lat, lon: ${JSON.stringify(p)}`);
    const [w, s, e, n] = DATA_BBOX;
    if (p.lon < w || p.lon > e || p.lat < s || p.lat > n) throw new Error(`area-map: ${p.name} (${p.lat}, ${p.lon}) is outside the cached Grand Strand data ${DATA_BBOX.join(", ")}. Widen DATA_BBOX and run --refresh-geo.`);
    if (p.minutes !== undefined && !(Number.isFinite(p.minutes) && p.minutes > 0)) throw new Error(`area-map: minutes for ${p.name} must be a positive number`);
  }
}

function areaMap(spec, opts = {}) {
  validate(spec);
  const geo = loadGeo();
  const W = opts.width || 400;
  const home = spec.home, lms = spec.landmarks || [];
  const lat0 = home.lat, lon0 = home.lon, kx = 111.32 * Math.cos(lat0 * Math.PI / 180), ky = 110.57;
  const toKm = (lon, lat) => [(lon - lon0) * kx, (lat0 - lat) * ky];

  /* Frame: every point, plus the nearest beach, with room for the pin and labels. */
  const framePts = [home, ...lms].map((p) => toKm(p.lon, p.lat));
  const coastNear = nearestCoast(home, geo);
  if (spec.coast !== false && coastNear.km < 30) framePts.push(toKm(coastNear.point.lon, coastNear.point.lat + 0.004));
  const ht = home.town && geo.towns.find((t) => t.name === home.town);
  if (ht && km(home, ht) < 15) framePts.push(toKm(ht.lon, ht.lat));
  let bx0 = Math.min(...framePts.map((p) => p[0])), bx1 = Math.max(...framePts.map((p) => p[0]));
  let by0 = Math.min(...framePts.map((p) => p[1])), by1 = Math.max(...framePts.map((p) => p[1]));
  const padKm = Math.max(0.6, 0.08 * Math.max(bx1 - bx0, by1 - by0));
  bx0 -= padKm; bx1 += padKm; by0 -= padKm; by1 += padKm;
  const M = { l: 40, r: 40, t: 56, b: 34 };
  let spanX = (bx1 - bx0) / (1 - (M.l + M.r) / W);
  let spanY = (by1 - by0) + (M.t + M.b) * spanX / W;
  const minSpan = spec.minSpanKm || 8;
  spanX = Math.max(spanX, minSpan); spanY = Math.max(spanY, minSpan);
  const rMin = 0.75, rMax = 1.12;
  if (spanY / spanX < rMin) spanY = spanX * rMin;
  if (spanY / spanX > rMax) spanX = spanY / rMax;
  const cx = (bx0 + bx1) / 2 + (M.l - M.r) / 2 * spanX / W, cy = (by0 + by1) / 2 - (M.t - M.b) / 2 * spanX / W;
  const fx0 = cx - spanX / 2, fy0 = cy - spanY / 2, s = W / spanX, H = Math.round(spanY * s);
  const P = (lon, lat) => { const [x, y] = toKm(lon, lat); return [(x - fx0) * s, (y - fy0) * s]; };
  const unP = (x, y) => ({ lon: lon0 + (x / s + fx0) / kx, lat: lat0 - (y / s + fy0) / ky });

  const id = opts.id || "c3m-" + slug(home.name);
  const L = new Layout(W, H);
  const out = { defs: [], under: [], marks: [], labels: [] };

  /* Water. Ocean = coastline (land on its left, OSM rule) closed far out at sea. */
  const coast = pairs(geo.coast);
  const sea = [...coast, [-78.0, 33.75], [-78.0, 32.9], [-79.6, 32.9], [-79.6, 33.1]];
  const pad = 12;
  let oceanPx = clipPolygon(sea.map(([lo, la]) => P(lo, la)), -pad, -pad, W + pad, H + pad);
  oceanPx = simplify(oceanPx, 0.6);
  const coastPx = clipLine(coast.map(([lo, la]) => P(lo, la)), -pad, -pad, W + pad, H + pad).map((l) => simplify(l, 0.6));
  const waterPieces = [];
  for (const wtr of geo.water) {
    for (const line of wtr.lines) {
      for (const piece of clipLine(pairs(line).map(([lo, la]) => P(lo, la)), -pad, -pad, W + pad, H + pad)) {
        const sp = simplify(piece, 0.7);
        if (sp.length > 1) waterPieces.push({ name: wtr.name, pts: sp });
      }
    }
  }
  for (const c of coastPx) out.under.push(`<path d="${pathD(c)}" fill="none" stroke="${C.sand}" stroke-width="7" stroke-linejoin="round"/>`);
  for (const wp of waterPieces) out.under.push(`<path d="${pathD(wp.pts)}"/>`);
  if (oceanPx.length > 2) out.under.push(`<path d="${pathD(oceanPx, true)}" fill="${C.water}"/>`);

  /* Fixed furniture: scale bar (bottom left) and north arrow (top right). */
  const pxPerMile = s * 1.609;
  const miles = [0.5, 1, 2, 3, 5, 10, 15, 20].filter((m) => m * pxPerMile <= W * 0.26).pop() || 0.5;
  const bar = miles * pxPerMile, sbY = H - 12;
  L.add({ x0: 6, y0: sbY - 22, x1: 12 + Math.max(bar, 60) + 4, y1: H - 4 }, "furniture");
  L.add({ x0: W - 30, y0: 6, x1: W - 6, y1: 42 }, "furniture");

  /* Home pin. The tip is on the point. */
  const [hx, hy] = P(home.lon, home.lat);
  const pinBox = L.add({ x0: hx - 14, y0: hy - 41, x1: hx + 14, y1: hy + 2 }, "marker", "home");

  /* Landmark markers, nudged off each other and off the pin. */
  const R = 12, used = new Set(["home"]);
  const marks = lms.map((lm, i) => {
    const kind = resolveKind(lm.kind); used.add(kind);
    const [tx, ty] = P(lm.lon, lm.lat);
    let x = tx, y = ty;
    const box = () => ({ x0: x - R - 1, y0: y - R - 1, x1: x + R + 1, y1: y + R + 1 });
    for (let step = 0; step < 80; step++) {
      const hit = L.boxes.find((o) => o.kind !== "furniture" && overlap(box(), o, 2));
      if (!hit) break;
      let vx = x - (hit.x0 + hit.x1) / 2, vy = y - (hit.y0 + hit.y1) / 2;
      if (Math.hypot(vx, vy) < 0.5) { vx = 1; vy = 0.6; }
      const n = Math.hypot(vx, vy); x += 3 * vx / n; y += 3 * vy / n;
      x = Math.max(R + 4, Math.min(W - R - 4, x)); y = Math.max(R + 4, Math.min(H - R - 4, y));
    }
    L.add(box(), "marker", "lm" + i);
    return { lm, kind, tx, ty, x, y, moved: Math.hypot(x - tx, y - ty) > 3 };
  });

  /* Labels. Home first, then the home's town, then landmarks, then the other towns. */
  const homeName = home.label || home.name;
  const hw = textWidth(homeName, 17) + 4, hh = 20;
  const homeCands = [
    { anchor: "start", x: 17, y: -26 - hh / 2 }, { anchor: "end", x: -17, y: -26 - hh / 2 },
    { anchor: "middle", x: 0, y: -44 - hh }, { anchor: "middle", x: 0, y: 6 },
    { anchor: "start", x: 24, y: -26 - hh / 2 }, { anchor: "end", x: -24, y: -26 - hh / 2 },
  ];
  const notHome = (o) => o.owner === "home" && o.kind === "marker";
  let hc = homeCands.find((c) => L.fits(boxOf(hx, hy, c, hw, hh), 2, notHome));
  if (!hc) hc = homeCands.slice().sort((a, b) => L.cost(boxOf(hx, hy, a, hw, hh)) - L.cost(boxOf(hx, hy, b, hw, hh)))[0];
  L.add(boxOf(hx, hy, hc, hw, hh), "label", "home");

  const townSet = geo.towns.filter((t) => spec.towns === "all" || t.main);
  const townLabels = [];
  const placeTown = (t, priority) => {
    if (lms.some((l) => l.name === t.name) || t.name === home.name) return;
    const [x, y] = P(t.lon, t.lat);
    if (x < 0 || x > W || y < 0 || y > H) return;
    const text = t.name.toUpperCase(), w = textWidth(text, 11, 0.1) + 4, h = 14;
    const cands = [{ anchor: "middle", x: 0, y: -h / 2 }, { anchor: "middle", x: 0, y: -h - 4 }, { anchor: "middle", x: 0, y: 4 },
      { anchor: "start", x: 6, y: -h / 2 }, { anchor: "end", x: -6, y: -h / 2 }, { anchor: "middle", x: 0, y: -h - 14 }, { anchor: "middle", x: 0, y: 14 }];
    const c = cands.find((c) => L.fits(boxOf(x, y, c, w, h), 3));
    if (!c) return;
    const b = L.add(boxOf(x, y, c, w, h), "town", t.name);
    townLabels.push({ t, x, y, c, text, box: b, priority });
  };
  const homeTown = home.town && townSet.find((t) => t.name === home.town);
  if (homeTown) placeTown(homeTown, true);

  const lmLabels = marks.map((m, i) => {
    const name = m.lm.short || m.lm.name;
    const lines = wrap(name, 18), mins = m.lm.minutes ? `about ${m.lm.minutes} min` : "";
    const w = Math.max(...lines.map((l) => textWidth(l, 13.5)), mins ? textWidth(mins, 12.5) : 0) + 4;
    const h = lines.length * 16 + (mins ? 15 : 0) + 2;
    const cands = besideCandidates(w, h, R);
    const own = (o) => o.kind === "marker" && o.owner === "lm" + i;
    let c = cands.find((c) => L.fits(boxOf(m.x, m.y, c, w, h), 2, own));
    if (!c) {
      /* Nudge: a landmark label may push out a town label (not the home's town). */
      c = cands.find((c) => L.fits(boxOf(m.x, m.y, c, w, h), 2, (o) => own(o) || (o.kind === "town" && o.owner !== (home.town || ""))));
      if (c) {
        const b = boxOf(m.x, m.y, c, w, h);
        for (const tl of townLabels.filter((tl) => overlap(b, tl.box, 2))) { L.boxes.splice(L.boxes.indexOf(tl.box), 1); townLabels.splice(townLabels.indexOf(tl), 1); }
      }
    }
    if (!c) c = cands.slice().sort((a, b) => L.cost(boxOf(m.x, m.y, a, w, h)) - L.cost(boxOf(m.x, m.y, b, w, h)))[0];
    L.add(boxOf(m.x, m.y, c, w, h), "label", "lm" + i);
    return { m, c, w, h, lines, mins };
  });

  townSet.filter((t) => t !== homeTown).sort((a, b) => km(home, a) - km(home, b)).forEach((t) => placeTown(t, false));

  /* Ocean label: inside the ocean, clear of everything, not hugging the coast. */
  let oceanLabel = null;
  if (oceanPx.length > 2) {
    const text = "Atlantic Ocean", w = textWidth(text, 14, 0.06) + 6, h = 18;
    let best = null;
    for (let y = 10; y < H - 10; y += 8) for (let x = 10; x < W - 10; x += 8) {
      const b = { x0: x - w / 2, y0: y - h / 2, x1: x + w / 2, y1: y + h / 2 };
      if (!L.fits(b, 4)) continue;
      if (![[b.x0, b.y0], [b.x1, b.y0], [b.x0, b.y1], [b.x1, b.y1], [x, y]].every((p) => inPoly(p, oceanPx))) continue;
      const d = Math.min(...coastPx.map((c) => distToLine([x, y], c)));
      if (d < 14) continue;
      const score = Math.min(d, 40) - 0.04 * Math.hypot(x - W / 2, y - H / 2);
      if (!best || score > best.score) best = { x, y, b, score };
    }
    if (best) { L.add(best.b, "label", "ocean"); oceanLabel = { x: best.x, y: best.y, text }; }
  }

  /* Water labels along the line, turned to follow it. */
  const waterLabels = [];
  const byName = {};
  for (const wp of waterPieces) (byName[wp.name] = byName[wp.name] || []).push(wp.pts);
  for (const [name, pieces] of Object.entries(byName)) {
    const text = name, w = textWidth(text, 12) + 4, h = 15;
    let best = null;
    for (const pts of pieces) {
      const cum = [0]; for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
      const total = cum.at(-1); if (total < w + 20) continue;
      const at = (d) => { let i = 1; while (i < cum.length - 1 && cum[i] < d) i++; const t = (d - cum[i - 1]) / ((cum[i] - cum[i - 1]) || 1); return [pts[i - 1][0] + t * (pts[i][0] - pts[i - 1][0]), pts[i - 1][1] + t * (pts[i][1] - pts[i - 1][1])]; };
      for (let d = w / 2 + 8; d < total - w / 2 - 8; d += 10) {
        const [x, y] = at(d), a1 = at(d - w / 2), a2 = at(d + w / 2);
        let ang = Math.atan2(a2[1] - a1[1], a2[0] - a1[0]) * 180 / Math.PI;
        if (ang >= 90) ang -= 180; if (ang < -90) ang += 180;
        /* Straight enough: the midpoint must sit near the chord. */
        const bend = distToLine([x, y], [a1, a2]);
        if (bend > 10) continue;
        const rad = ang * Math.PI / 180, bw = Math.abs(w * Math.cos(rad)) + Math.abs(h * Math.sin(rad)), bh = Math.abs(w * Math.sin(rad)) + Math.abs(h * Math.cos(rad));
        const b = { x0: x - bw / 2, y0: y - bh / 2, x1: x + bw / 2, y1: y + bh / 2 };
        if (!L.fits(b, 3)) continue;
        const score = -Math.abs(d - total / 2) * 0.5 - Math.abs(ang) * 0.6 - bend * 4 + total * 0.2;
        if (!best || score > best.score) best = { x, y, ang, b, score };
      }
    }
    if (best) { L.add(best.b, "label", name); waterLabels.push({ text, ...best }); }
  }

  /* ---------- write the svg ---------- */
  for (const k of used) out.defs.push(`<symbol id="${id}-${k}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${iconInner(k)}</symbol>`);
  const sym = (k, x, y, size, color) => `<use href="#${id}-${k}" x="${r1(x)}" y="${r1(y)}" width="${size}" height="${size}" color="${color}"/>`;
  const g = (x, y, inner, cls = "s") => `<g transform="translate(${r1(x)} ${r1(y)})"><g class="${cls}">${inner}</g></g>`;
  const txt = (cls, x, y, anchor, body, extra = "") => `<text class="${cls}" x="${r1(x)}" y="${r1(y)}"${anchor !== "start" ? ` text-anchor="${anchor}"` : ""}${extra}>${body}</text>`;

  /* leaders for markers that were moved */
  for (const m of marks) if (m.moved) out.marks.push(`<path d="M${r1(m.tx)} ${r1(m.ty)}L${r1(m.x)} ${r1(m.y)}" stroke="${C.navy}" stroke-width="1.2"/><circle cx="${r1(m.tx)}" cy="${r1(m.ty)}" r="2.6" fill="${C.navy}"/>`);

  /* towns */
  for (const tl of townLabels) {
    const tx = tl.c.anchor === "middle" ? tl.c.x : tl.c.x;
    out.labels.push(g(tl.x, tl.y, txt("t", tx, tl.c.y + 10.5, tl.c.anchor, esc(tl.text))));
  }
  /* water and ocean */
  for (const wl of waterLabels) out.labels.push(`<g transform="translate(${r1(wl.x)} ${r1(wl.y)}) rotate(${r1(wl.ang)})"><g class="s">${txt("w", 0, 4, "middle", esc(wl.text))}</g></g>`);
  if (oceanLabel) out.labels.push(g(oceanLabel.x, oceanLabel.y, txt("o", 0, 5, "middle", esc(oceanLabel.text))));

  /* landmarks */
  lmLabels.forEach(({ m, c, lines, mins }) => {
    let inner = `<circle r="${R}" fill="${C.white}" stroke="${C.brassInk}" stroke-width="1.6"/>` + sym(m.kind, -8, -8, 16, C.navy);
    const tAnchor = c.anchor, x = c.x;
    let y = c.y + 13;
    let body = lines.map((l, i) => `<tspan x="${r1(x)}"${i ? ` dy="16"` : ""}>${esc(l)}</tspan>`).join("");
    inner += txt("l", x, y, tAnchor, body);
    if (mins) inner += txt("m", x, y + (lines.length - 1) * 16 + 15, tAnchor, esc(mins));
    out.marks.push(g(m.x, m.y, inner));
  });

  /* home pin and label */
  {
    let inner = `<ellipse cx="0" cy="1" rx="7" ry="2.4" fill="${C.navy}" opacity=".18"/>`
      + `<path d="M0 0C-3-6-13-14-13-26a13 13 0 1 1 26 0c0 12-10 20-13 26z" fill="${C.brass}" stroke="${C.navy}" stroke-width="1.5"/>`
      + sym("home", -8.5, -34.5, 17, C.white)
      + txt("h", hc.x, hc.y + 15, hc.anchor, esc(homeName));
    out.marks.push(g(hx, hy, inner));
  }

  /* scale bar and north arrow */
  const furniture = `<path d="M12 ${r1(sbY - 4)}V${r1(sbY)}H${r1(12 + bar)}V${r1(sbY - 4)}" fill="none" stroke="${C.navy}" stroke-width="1.5"/>`
    + g(12, sbY - 8, txt("t", 0, 0, "start", `${miles} ${miles === 1 ? "MILE" : "MILES"}`))
    + g(W - 18, 22, `<path d="M0-12 5 2 0-1-5 2z" fill="${C.navy}"/>` + txt("t", 0, 15, "middle", "N"));

  const alt = spec.alt || describe(spec, geo);
  const css = `#${id} text{font-family:'DM Sans',system-ui,-apple-system,'Segoe UI',sans-serif;paint-order:stroke;stroke:${C.land};stroke-width:3.5px;stroke-linejoin:round}`
    + `#${id} .h{font:500 17px 'Fraunces',Georgia,serif;fill:${C.navy}}#${id} .l{font-size:13.5px;font-weight:500;fill:${C.navy}}#${id} .m{font-size:12.5px;fill:${C.brassInk}}`
    + `#${id} .t{font-size:11px;font-weight:500;letter-spacing:.1em;fill:${C.slate}}#${id} .w{font:italic 12px 'Fraunces',Georgia,serif;fill:${C.waterInk}}`
    + `#${id} .o{font:italic 14px 'Fraunces',Georgia,serif;letter-spacing:.06em;fill:${C.waterInk}}`
    + `@media(min-width:600px){#${id} .s{transform:scale(.8)}}@media(min-width:900px){#${id} .s{transform:scale(.66)}}`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" id="${id}" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${esc(alt)}" style="display:block;width:100%;height:auto;max-width:760px;background:${C.land};border:1px solid ${C.rule}">`
    + `<style>${css}</style><defs>${out.defs.join("")}</defs>`
    + `<g stroke="${C.river}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">${out.under.filter((u) => !/fill="/.test(u)).join("")}</g>`
    + out.under.filter((u) => /fill="/.test(u)).join("")
    + furniture + out.labels.join("")
    + `<g class="ic">${out.marks.join("")}</g>`
    + `</svg>`;

  const bytes = Buffer.byteLength(svg);
  if (bytes > MAX_BYTES && !opts.allowLarge) throw new Error(`area-map: svg is ${bytes} bytes, over the ${MAX_BYTES} cap`);
  const tl = unP(0, 0), br = unP(W, H);
  return {
    svg, alt, width: W, height: H, bytes, credit: CREDIT,
    caption: `${spec.caption ? spec.caption.trim() + " " : ""}${CREDIT}`,
    frame: { west: tl.lon, north: tl.lat, east: br.lon, south: br.lat },
    boxes: L.boxes.map((b) => ({ kind: b.kind, owner: b.owner, x0: b.x0, y0: b.y0, x1: b.x1, y1: b.y1 })),
    labels: { home: !!hc, towns: townLabels.map((t) => t.t.name), water: waterLabels.map((w) => w.text), ocean: !!oceanLabel },
  };
}

const areaMapSvg = (spec, opts) => areaMap(spec, opts).svg;

/* ---------------- live map ---------------- */

/*
 * A Google Maps embed (no API key) that loads only when the reader taps it, or, with
 * load: "view", when it scrolls into view. Until then the page loads nothing from Google.
 * Tap is the default: the speed audit (audit/SPEED-AND-CONTRAST.md, /map/) found a map that
 * loads at once costs the phone score most, and its fix was "load the map on a click".
 *
 * Options: lat, lon (required), name (the place, for the title), zoom (default 13),
 *   load ("tap" default, or "view"), svg (a drawn map to show first), caption (for the drawn map),
 *   ratio (the box shape, default "4 / 3").
 */
function liveMapHtml(o) {
  if (!o || typeof o.lat !== "number" || typeof o.lon !== "number") throw new Error("liveMapHtml needs lat and lon");
  const zoom = Math.max(3, Math.min(20, Math.round(o.zoom || 13)));
  const name = o.name || "this place";
  const q = `${o.lat.toFixed(6)},${o.lon.toFixed(6)}`;
  const src = `https://www.google.com/maps?q=${q}&z=${zoom}&output=embed`;
  const open = `https://www.google.com/maps/search/?api=1&query=${q}`;
  const title = `Live map of ${name} from Google Maps`;
  const ratio = /^[0-9. /]+$/.test(o.ratio || "") ? o.ratio : "4 / 3";
  const pin = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${iconInner("pin")}</svg>`;
  const iframe = `<iframe src="${esc(src)}" title="${esc(title)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0"></iframe>`;
  const load = "var w=this.parentNode;w.innerHTML=w.querySelector('template').innerHTML";
  const box = `<div class="c3-live" style="position:relative;width:100%;max-width:760px;aspect-ratio:${ratio};max-height:440px;background:var(--ivory-2);border:1px solid var(--rule)">`
    + `<template>${iframe}</template>`
    + `<button type="button" onclick="${load}" style="position:absolute;inset:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.5rem;padding:1rem;background:transparent;border:0;cursor:pointer;color:var(--navy);font:inherit;text-align:center">`
    + `<span style="color:var(--brass-ink)">${pin}</span>`
    + `<span style="font-family:var(--sans);font-size:.75rem;font-weight:500;letter-spacing:.12em;text-transform:uppercase;background:var(--brass);color:var(--navy);padding:.75rem 1.25rem">Show the live map</span>`
    + `<span style="color:var(--muted);font-size:.85rem;line-height:1.5;max-width:22rem">Opens Google Maps here. Zoom in, or drag to look around ${esc(name)}.</span>`
    + `</button></div>`;
  const view = o.load === "view"
    ? `<script>(function(w){if(!('IntersectionObserver'in window))return;var o=new IntersectionObserver(function(e){if(e[0].isIntersecting){o.disconnect();var b=w.querySelector('button');if(b)b.click()}},{rootMargin:'150px'});o.observe(w)})(document.currentScript.previousElementSibling)</script>`
    : "";
  const link = `<p style="color:var(--muted);font-size:.85rem;line-height:1.6;margin-top:.6rem"><a href="${esc(open)}" style="color:var(--navy);text-decoration:underline" target="_blank" rel="noopener noreferrer">Open ${esc(name)} in Google Maps</a></p>`;
  const live = box + view + link;
  if (!o.svg) return `<div style="margin:1.2rem 0;max-width:760px">${live}</div>`;
  const cap = o.caption ? `<figcaption style="color:var(--muted);font-size:.85rem;line-height:1.6;margin-top:.6rem">${o.caption}</figcaption>` : "";
  return `<figure style="margin:1.8rem 0 1rem;max-width:760px">${o.svg}${cap}</figure><div style="margin:0 0 1.8rem;max-width:760px">${live}</div>`;
}

/* ---------------- refresh the cached geodata ---------------- */

const MIRRORS = ["https://overpass-api.de/api/interpreter", "https://overpass.kumi.systems/api/interpreter", "https://maps.mail.ru/osm/tools/overpass/api/interpreter", "https://overpass.private.coffee/api/interpreter"];
const MAIN = ["Little River", "North Myrtle Beach", "Myrtle Beach", "Conway", "Surfside Beach", "Murrells Inlet", "Pawleys Island"];
const MINOR = ["Carolina Forest", "Socastee", "Longs", "Loris", "Aynor", "Georgetown", "Garden City"];

function overpass(query) {
  const { execFileSync } = require("child_process");
  for (let i = 0; i < MIRRORS.length * 3; i++) {
    const u = MIRRORS[i % MIRRORS.length];
    try {
      const body = execFileSync("curl", ["-sS", "-m", "170", "--data-urlencode", "data=" + query, u], { maxBuffer: 1 << 28, stdio: ["ignore", "pipe", "ignore"] }).toString();
      if (body.trim().startsWith("{")) return JSON.parse(body);
    } catch { /* next mirror */ }
  }
  throw new Error("Overpass: every mirror failed");
}

function chainWays(ways) { // join ways that share end nodes into longer lines
  const key = (p) => p.lat.toFixed(7) + "," + p.lon.toFixed(7);
  let lines = ways.map((w) => w.geometry.slice());
  let merged = true;
  while (merged) {
    merged = false;
    for (let i = 0; i < lines.length && !merged; i++) for (let j = 0; j < lines.length && !merged; j++) {
      if (i === j) continue;
      const a = lines[i], b = lines[j];
      if (key(a.at(-1)) === key(b[0])) { lines[i] = a.concat(b.slice(1)); lines.splice(j, 1); merged = true; }
      else if (key(a.at(-1)) === key(b.at(-1))) { lines[i] = a.concat(b.slice(0, -1).reverse()); lines.splice(j, 1); merged = true; }
    }
  }
  return lines;
}

function buildGeo(raw, meta = {}) {
  const lat0 = 33.7, kx = 111320 * Math.cos(lat0 * Math.PI / 180), ky = 110570;
  const toM = (p) => [p.lon * kx, p.lat * ky], toLL = ([x, y]) => [+(x / kx).toFixed(4), +(y / ky).toFixed(4)];
  const flat = (pts) => pts.flat();
  const lenKm = (pts) => { let L = 0; for (let i = 1; i < pts.length; i++) L += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); return L / 1000; };
  const [w, s, e, n] = DATA_BBOX;
  const inBox = ([lon, lat]) => lon >= w - 0.05 && lon <= e + 0.05 && lat >= s - 0.05 && lat <= n + 0.05;

  const coastChains = chainWays(raw.coast.elements.filter((x) => x.type === "way" && x.geometry)).sort((a, b) => b.length - a.length);
  let coast = coastChains[0];
  if (coast[0].lon > coast.at(-1).lon) throw new Error("coastline does not run southwest to northeast; land must be on its left");
  coast = simplify(coast.map(toM), 25).map(toLL);

  const water = [];
  for (const [name, src, filt] of [["Intracoastal Waterway", raw.icw, (x) => x.tags && x.tags.waterway], ["Waccamaw River", raw.wacc, (x) => x.tags && x.tags.waterway === "river"]]) {
    const lines = chainWays(src.elements.filter((x) => x.type === "way" && x.geometry && filt(x)))
      .map((l) => simplify(l.map(toM), 30))
      .filter((l) => lenKm(l) > 0.8)
      .map((l) => l.map(toLL).filter(inBox))
      .filter((l) => l.length > 1);
    water.push({ name, lines: lines.map(flat) });
  }
  const towns = [];
  for (const nm of [...MAIN, ...MINOR]) {
    const node = raw.towns.elements.filter((x) => x.tags && x.tags.name === nm && x.tags.place !== "county")[0];
    if (node) towns.push({ name: nm, lat: +node.lat.toFixed(4), lon: +node.lon.toFixed(4), main: MAIN.includes(nm) });
  }
  return {
    about: "Grand Strand coast, Intracoastal Waterway, Waccamaw River and town points for tools/area-map.js. Simplified (about 25 to 30 m). Coordinates are [lon, lat] pairs, flattened.",
    source: "OpenStreetMap, via the Overpass API",
    license: "ODbL 1.0, https://opendatacommons.org/licenses/odbl/1-0/",
    credit: CREDIT,
    fetched: meta.fetched || new Date().toISOString().slice(0, 10),
    osm_base: meta.osm_base || (raw.coast.osm3s && raw.coast.osm3s.timestamp_osm_base) || "",
    bbox: DATA_BBOX,
    towns,
    coast: flat(coast),
    water,
  };
}

function writeGeo(geo) {
  const lines = ["{"];
  const keys = Object.keys(geo);
  keys.forEach((k, i) => {
    const comma = i < keys.length - 1 ? "," : "";
    if (k === "water") lines.push(`  "water": [\n${geo.water.map((wt) => `    {"name": ${JSON.stringify(wt.name)}, "lines": [\n${wt.lines.map((l) => "      " + JSON.stringify(l)).join(",\n")}\n    ]}`).join(",\n")}\n  ]${comma}`);
    else if (k === "towns") lines.push(`  "towns": [\n${geo.towns.map((t) => "    " + JSON.stringify(t)).join(",\n")}\n  ]${comma}`);
    else lines.push(`  ${JSON.stringify(k)}: ${JSON.stringify(geo[k])}${comma}`);
  });
  lines.push("}");
  fs.mkdirSync(path.dirname(GEO_FILE), { recursive: true });
  fs.writeFileSync(GEO_FILE, lines.join("\n") + "\n");
}

function refreshGeo(rawDir) {
  const bb = `(${DATA_BBOX[1]},${DATA_BBOX[0]},${DATA_BBOX[3]},${DATA_BBOX[2]})`;
  const get = (file, q) => {
    if (rawDir && fs.existsSync(path.join(rawDir, file))) return JSON.parse(fs.readFileSync(path.join(rawDir, file), "utf8"));
    console.error(`fetching ${file} from Overpass`);
    return overpass(q);
  };
  const raw = {
    coast: get("coast.json", `[out:json][timeout:160];way["natural"="coastline"]${bb};out geom;`),
    wacc: get("wacc.json", `[out:json][timeout:160];way["name"="Waccamaw River"]["waterway"="river"]${bb};out geom;`),
    icw: get("icw.json", `[out:json][timeout:160];way["name"="Atlantic Intracoastal Waterway"]${bb};out tags geom;`),
    towns: get("towns.json", `[out:json][timeout:100];node["place"]["name"~"^(${[...MAIN, ...MINOR].join("|")})$"]${bb};out;`),
  };
  const geo = buildGeo(raw);
  writeGeo(geo);
  console.error(`wrote ${path.relative(process.cwd(), GEO_FILE)}: ${fs.statSync(GEO_FILE).size} bytes, ${geo.coast.length / 2} coast points, ${geo.towns.length} towns`);
}

module.exports = { areaMap, areaMapSvg, liveMapHtml, describe, CREDIT, GEO_FILE, DATA_BBOX, MAX_BYTES, loadGeo, buildGeo, simplify, clipPolygon, clipLine, textWidth };

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.includes("--refresh-geo")) {
    const i = args.indexOf("--raw");
    refreshGeo(i >= 0 ? args[i + 1] : null);
  } else if (args[0] && !args[0].startsWith("--")) {
    const spec = JSON.parse(fs.readFileSync(args[0], "utf8"));
    const m = areaMap(spec);
    process.stdout.write(args.includes("--live") ? liveMapHtml({ name: spec.home.name, lat: spec.home.lat, lon: spec.home.lon, svg: m.svg, caption: m.caption }) + "\n" : m.svg + "\n");
    console.error(`${m.bytes} bytes, ${m.width} x ${m.height}. aria-label: ${m.alt}`);
  } else {
    console.error("usage: node tools/area-map.js places.json [--live] | --refresh-geo [--raw <dir>]");
    process.exit(1);
  }
}
