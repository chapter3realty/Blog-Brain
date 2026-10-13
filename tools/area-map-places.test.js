#!/usr/bin/env node
/*
 * Controls for the map of many places in area-map.js (regionMap with spec.places, 2026-10-13).
 *
 * Points are our own verified points: the four 55+ communities and the landmarks of batch
 * 2026-10-a (batches/2026-10-a/data/places.json, county address points), and the town points in
 * tools/geo/grand-strand-v2.json (Census). Together they make the hard case a decision guide
 * meets: a cluster of places a few miles apart around Myrtle Beach, and towns far up and down
 * the coast.
 *
 *   node tools/area-map-places.test.js
 */
"use strict";
const path = require("path");
const A = require("./area-map.js");
const { regionMap, loadGeo2, MANY_MAX } = A;
const { satOverlap, EDGE } = A.internals;
let failures = 0;
const check = (name, cond, extra = "") => { if (!cond) { failures++; console.log(`FAIL  ${name} ${extra}`); } else console.log(`ok    ${name}`); };
const throws = (fn, re) => { try { fn(); return false; } catch (e) { return re ? re.test(e.message) : true; } };
const FIGURE = /<img [^>]*alt="[^"]{12,}"|<svg [^>]*role="img"[^>]*aria-label="[^"]{12,}"/;
const PHONE = 342 / 360; // a 360-unit map shows 342 px wide on a 390 px phone (area-map.test.js)

const P = require(path.join(__dirname, "..", "batches", "2026-10-a", "data", "places.json"));
const L = Object.fromEntries(P.landmarks.map((l) => [l.id, l]));
const T = Object.fromEntries(loadGeo2().towns.map((t) => [t.name, t]));
const pt = (name, o) => ({ name, lat: o.lat, lon: o.lon, href: "#" + name.toLowerCase().replace(/[^a-z]+/g, "-") });
const PLACES = [
  ...P.communities.map((c) => pt(c.name, c)),
  pt("Market Common", L.market_common), pt("Barefoot", L.barefoot), pt("Broadway at the Beach", L.broadway),
  pt("Conway", T.Conway), pt("Carolina Forest", T["Carolina Forest"]), pt("Forestbrook", T.Forestbrook), pt("Socastee", T.Socastee),
  pt("Surfside Beach", T["Surfside Beach"]), pt("Garden City", T["Garden City"]), pt("Little River", T["Little River"]), pt("Red Hill", T["Red Hill"]),
];

/* Two boxes of different owners must not touch (as area-map.test.js), except a dot, an area or a
   leader line under a marker. */
function overlaps(m) {
  const bs = m.boxes, soft = (k) => k === "dot" || k === "area" || k === "leader";
  for (let i = 0; i < bs.length; i++) for (let j = i + 1; j < bs.length; j++) {
    const a = bs[i], b = bs[j];
    if (a.owner === b.owner) continue;
    if ((soft(a.kind) || soft(b.kind)) && [a.kind, b.kind].every((k) => soft(k) || k === "marker")) continue;
    if (satOverlap(a, b)) return `${a.kind}:${a.owner} / ${b.kind}:${b.owner}`;
  }
  return "";
}
const center = (b) => [(b.x0 + b.x1) / 2, (b.y0 + b.y1) / 2];
const boxDist = (b, x, y) => Math.hypot(Math.max(b.x0 - x, 0, x - b.x1), Math.max(b.y0 - y, 0, y - b.y1));

for (const n of [8, 12, 15]) {
  const list = PLACES.slice(0, n);
  const m = regionMap({ name: `Map test ${n}`, places: list }, { inlineMax: 1e9 });
  const tag = `${n} places:`;
  const markers = m.boxes.filter((b) => b.kind === "marker");
  check(`${tag} every place is on the map as a marker`, markers.length === n && m.places.length === n, `${markers.length}`);
  check(`${tag} each marker shows its number`, list.every((_, i) => new RegExp(`<text class="nm"[^>]*>${i + 1}</text>`).test(m.svg)));
  check(`${tag} no home pin`, !/class="h"/.test(m.svg) && m.labels.home === false);
  const ov = overlaps(m);
  check(`${tag} no label, marker or line touches another`, !ov, ov);
  const labelBoxes = m.boxes.filter((b) => b.kind === "label" && /^lm\d+$/.test(b.owner));
  check(`${tag} every name shown belongs to a labelled place, and the rest are in unlabelled`, labelBoxes.length === n - m.unlabelled.length && m.places.filter((p) => !p.labelled).map((p) => p.name).join() === m.unlabelled.join());
  /* A name is read as the nearest marker's: it must be nearer its own marker than any other. */
  const wrong = labelBoxes.filter((lb) => {
    const own = markers.find((k) => k.owner === lb.owner), [ox, oy] = center(own), dOwn = boxDist(lb, ox, oy);
    return markers.some((k) => k.owner !== lb.owner && boxDist(lb, ...center(k)) <= dOwn);
  }).map((b) => b.owner);
  check(`${tag} every name sits nearer its own marker than any other`, !wrong.length, wrong.join());
  const edge = m.boxes.filter((b) => (b.kind === "label" || b.kind === "marker") && (b.x0 < EDGE - 2 || b.y0 < EDGE - 2 || b.x1 > m.width - EDGE + 2 || b.y1 > m.height - EDGE + 2));
  check(`${tag} nothing is cut at the edge`, !edge.length, edge.map((b) => b.owner).join());
  check(`${tag} more than half the names fit on a phone-width map`, n - m.unlabelled.length > n / 2, `${n - m.unlabelled.length} of ${n}`);
  check(`${tag} the key lists every place by number, with its link`, (m.key.match(/<li /g) || []).length === n && /^<ol class="c3-map-key"/.test(m.key) && m.key.includes(`<a href="${list[n - 1].href}"`));
  check(`${tag} the svg passes the mkpage figure test and stays inline`, FIGURE.test(m.svg) && m.bytes <= A.INLINE_MAX, `${m.bytes}`);
  check(`${tag} the alt text names every place with its number`, list.every((p, i) => m.alt.includes(`${i + 1}, ${p.name}`)));
}

/* Readable on a phone (STANDARD H13): names 15 units (about 14 px on a 390 px phone), numbers bold. */
const m12 = regionMap({ name: "Size test", places: PLACES.slice(0, 12) }, { inlineMax: 1e9 });
const nameSize = +((m12.svg.match(/#[\w-]+ \.l\{font-size:([\d.]+)px\}/) || [])[1]);
check("names on a map of many places are 14 px or more on a phone", nameSize * PHONE >= 14, `${nameSize} units`);
check("the key is at reading size", /font-size:var\(--read,1\.0625rem\)/.test(m12.key));

/* Towns that are places are not named twice. */
const towns = regionMap({ name: "Towns", places: [pt("Conway", T.Conway), pt("Surfside Beach", T["Surfside Beach"]), pt("Little River", T["Little River"])] }, { inlineMax: 1e9 });
check("a place that is a town is not also a town label", !towns.labels.towns.includes("Conway") && !towns.labels.towns.includes("Little River"));

/* Refusals */
check("a map of many places needs a name", throws(() => regionMap({ places: PLACES.slice(0, 3) }), /name/));
check(`a map of many places takes 2 to ${MANY_MAX} places`, throws(() => regionMap({ name: "x", places: PLACES.slice(0, 1) })) && throws(() => regionMap({ name: "x", places: [...PLACES, ...PLACES].slice(0, 16).map((p, i) => Object.assign({}, p, { name: p.name + i })) })));
check("drive minutes are refused (no home to measure from)", throws(() => regionMap({ name: "x", places: [Object.assign({ minutes: 10 }, PLACES[0]), PLACES[1]] }), /minutes/));
check("a place twice is refused", throws(() => regionMap({ name: "x", places: [PLACES[0], PLACES[0]] }), /twice/));
check("a place outside the cached data is refused (Loris, 34.06 N)", throws(() => regionMap({ name: "x", places: [PLACES[0], { name: "Loris", lat: 34.0575, lon: -78.8884 }] }), /outside the cached/));

/* The community map is unchanged by the new mode (the four 55+ pages rebuilt byte for byte). */
const one = regionMap({ home: { name: "Myrtle Trace", lat: 33.778502, lon: -78.996618, town: "Conway" }, landmarks: [{ name: "Beach", kind: "beach", lat: 33.6906919, lon: -78.8804377, minutes: 15 }] });
check("a community map still has its home pin and no numbers", /class="h"/.test(one.svg) && !/class="nm"/.test(one.svg) && one.places === undefined);

console.log(failures ? `\n${failures} control(s) failed` : "\nall controls pass");
process.exitCode = failures ? 1 : 0;
