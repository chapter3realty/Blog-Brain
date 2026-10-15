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
check("a place outside the cached data is refused (Whiteville, NC, 34.33 N)", throws(() => regionMap({ name: "x", places: [PLACES[0], { name: "Whiteville", lat: 34.3305, lon: -78.7014 }] }), /outside the cached/));

/* The wider data (2026-10-13): every town in Horry County and Georgetown and Andrews. Before it,
   the data ended at 34.05 N and Loris (34.06 N) was refused. */
const geo = loadGeo2(), [bw, bs, be, bn] = geo.bbox;
const NEW_TOWNS = ["Loris", "Aynor", "Longs", "Georgetown", "Andrews", "Green Sea", "Finklea", "Live Oak", "Ketchuptown"];
check("the towns of the wider data are in it, with a name, rank, kind and point", NEW_TOWNS.every((n) => T[n] && T[n].rank >= 1 && ["city", "town", "community"].includes(T[n].kind) && Number.isFinite(T[n].lat) && Number.isFinite(T[n].lon)), NEW_TOWNS.filter((n) => !T[n]).join());
check("every town but Longs has its Census outline; Longs (no Census place) has none", NEW_TOWNS.every((n) => (n === "Longs") === !T[n].outline.length));
/* Half the smallest map (12 km) inside the box, so a map of one town has data to its edges. */
const kmIn = (t) => Math.min((t.lon - bw) * 92.6, (be - t.lon) * 92.6, (t.lat - bs) * 110.6, (bn - t.lat) * 110.6);
check("every town sits 6 km or more inside the data box", geo.towns.every((t) => kmIn(t) >= 6), geo.towns.filter((t) => kmIn(t) < 6).map((t) => t.name).join());
const lorisSpec = { name: "Towns to compare", places: [pt("Loris", T.Loris), pt("Conway", T.Conway), pt("Aynor", T.Aynor), pt("Longs", T.Longs)] };
const lm = regionMap(lorisSpec, { inlineMax: 1e9 });
const lp = lm.places.find((p) => p.name === "Loris");
const own = "lm" + (lp.num - 1); // a place's boxes are owned by "lm" and its index
const lb = lm.boxes.find((b) => b.kind === "marker" && b.owner === own), [lx, ly] = center(lb);
const [tx, ty] = [(T.Loris.lon - lm.frame.west) / (lm.frame.east - lm.frame.west) * lm.width, (lm.frame.north - T.Loris.lat) / (lm.frame.north - lm.frame.south) * lm.height];
check("a place at Loris draws: its numbered marker is on the map, at its true spot", lp && lb && new RegExp(`<text class="nm"[^>]*>${lp.num}</text>`).test(lm.svg) && Math.hypot(lx - tx, ly - ty) < 2, lb ? `${Math.hypot(lx - tx, ly - ty).toFixed(1)} units off` : "no marker");
check("a place at Loris is labelled on the map, beside its own marker", lp.labelled && !lm.unlabelled.includes("Loris") && /<text class="l"[^>]*>(?:<tspan[^>]*>)?Loris</.test(lm.svg) && lm.boxes.some((b) => b.kind === "label" && b.owner === own && b.x0 >= lb.x0 - 40 && b.x1 <= lb.x1 + 80 && b.y0 >= lb.y0 - 30 && b.y1 <= lb.y1 + 30));
check("the map with Loris has no overlap and nothing cut at the edge", !overlaps(lm) && !lm.boxes.some((b) => (b.kind === "label" || b.kind === "marker") && (b.x0 < EDGE - 2 || b.y0 < EDGE - 2 || b.x1 > lm.width - EDGE + 2 || b.y1 > lm.height - EDGE + 2)), overlaps(lm));
check("a home in Longs (a town with no outline) reads \"in Longs\"", /is in Longs,/.test(regionMap({ home: { name: "A home", lat: T.Longs.lat + 0.005, lon: T.Longs.lon, town: "Longs" }, landmarks: [] }).alt));

/* A town or park name sits by its own town on a map of many places (batch 2026-10-b): a long
   coastal name pushed off the coast slid inland across the river ("Surfside Beach" west of the
   river). The county-wide map of Georgetown, Loris, Longs, Conway, Aynor and Myrtle Beach. */
const county = regionMap({ name: "County test", places: [pt("Georgetown", T.Georgetown), pt("Loris", T.Loris), pt("Longs", T.Longs), pt("Conway", T.Conway), pt("Aynor", T.Aynor), pt("Myrtle Beach", T["Myrtle Beach"])] }, { inlineMax: 1e9 });
const toXY = (o) => [(o.lon - county.frame.west) / (county.frame.east - county.frame.west) * county.width, (county.frame.north - o.lat) / (county.frame.north - county.frame.south) * county.height];
const far = county.boxes.filter((b) => b.kind === "town").filter((b) => {
  const [x, y] = toXY(T[b.owner]), [cx, cy] = center(b);
  return Math.hypot(cx - x, cy - y) > (b.y1 - b.y0) / 2 + 12.5;
}).map((b) => b.owner);
check("every town name on a county-wide map sits by its own town", !far.length, far.join());
check("no coastal town name is drawn west of the waterway on the county-wide map", !county.boxes.some((b) => b.kind === "town" && ["Surfside Beach", "Garden City", "Murrells Inlet", "Pawleys Island"].includes(b.owner) && center(b)[0] < toXY(T[b.owner])[0] - 20));
check("the park name is spelled Huntington", !/Hunington/.test(JSON.stringify(geo.parks || [])) && !/Hunington/.test(county.svg));

/* Leader lines and "first" (round 4, batch 2026-10-b). The best-neighborhoods map had no
   "Myrtle Beach" (the city is a narrow strip among the markers) and The Farm, the page's own pick,
   had a number only. spec.leaders puts a name with no room by its spot in open space with a thin
   line to it; places[i].first names a place before the others. */
const { LEADER_MAX } = A.internals;
const inOutline = (rings, lon, lat) => {
  let inside = false;
  for (const ring of rings) for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
    if ((yi > lat) !== (yj > lat) && lon < (xj - xi) * (lat - yi) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
};
const LT = { name: "Leader test", places: PLACES.slice(0, 15) };
const plain15 = regionMap(LT, { inlineMax: 1e9 });
const led = regionMap(Object.assign({}, LT, { leaders: { places: true, towns: ["Myrtle Beach"] } }), { inlineMax: 1e9 });
const tBox = led.boxes.find((b) => b.kind === "town" && b.owner === "town:Myrtle Beach");
const tLine = led.boxes.find((b) => b.kind === "leader" && b.owner === "town:Myrtle Beach");
check("leaders.towns: a town with no room by its point gets its name, with a line", !plain15.labels.towns.includes("Myrtle Beach") && led.labels.townLeaders.includes("Myrtle Beach") && tBox && tLine && /<text class="T"[^>]*>(?:<tspan[^>]*>)?MYRTLE/.test(led.svg));
const [ax, ay] = tLine.pts[0], toLL = (m, x, y) => [m.frame.west + x / m.width * (m.frame.east - m.frame.west), m.frame.north - y / m.height * (m.frame.north - m.frame.south)];
check("leaders.towns: the line ends inside the town's own outline and is LEADER_MAX units or shorter", inOutline(T["Myrtle Beach"].outline, ...toLL(led, ax, ay)) && Math.hypot(tLine.pts[1][0] - ax, tLine.pts[1][1] - ay) <= LEADER_MAX + 0.5);
const ledPlaces = led.places.filter((p) => p.leader);
check("leaders.places: fewer names are left off than without leaders", ledPlaces.length > 0 && led.unlabelled.length < plain15.unlabelled.length, `${plain15.unlabelled.length} -> ${led.unlabelled.length}`);
const R0 = (led.boxes.find((b) => b.kind === "marker").x1 - led.boxes.find((b) => b.kind === "marker").x0) / 2 - 1;
const badLead = ledPlaces.filter((p) => {
  const ow = "lm" + (p.num - 1), lb2 = led.boxes.find((b) => b.kind === "label" && b.owner === ow), ln = led.boxes.filter((b) => b.kind === "leader" && b.owner === ow).pop();
  if (!lb2 || !ln) return true;
  const mk = led.boxes.find((b) => b.kind === "marker" && b.owner === ow), [mx, my] = center(mk);
  if (Math.hypot(ln.pts[1][0] - mx, ln.pts[1][1] - my) > LEADER_MAX + R0 + 0.5) return true;
  return led.boxes.some((b) => b.kind === "marker" && b.owner !== ow && boxDist(lb2, ...center(b)) < R0 + 12);
}).map((p) => p.name);
check("leaders.places: each added name has its line to its own marker, short, and sits away from every other marker", !badLead.length, badLead.join());
check("leaders: no label, marker or line touches another", !overlaps(led), overlaps(led));
check("without leaders no name has a line and no town is drawn with one", !plain15.places.some((p) => p.leader) && !(plain15.labels.townLeaders || []).length);
check("leaders.towns: a town not in the data is refused", throws(() => regionMap(Object.assign({}, LT, { leaders: { towns: ["Atlantis"] } })), /no town named Atlantis/));
const P8 = PLACES.slice(0, 8), bare8 = regionMap({ name: "First test", places: P8 }, { inlineMax: 1e9 }).unlabelled;
const firstName = bare8[0], f8 = regionMap({ name: "First test", places: P8.map((p) => Object.assign({}, p, { first: p.name === firstName })) }, { inlineMax: 1e9 });
check("first: a place left without a name is named when it is marked first", firstName && !f8.unlabelled.includes(firstName) && !overlaps(f8), `${firstName}: ${f8.unlabelled.join()}`);

/* Named areas (spec.areas, batch 2026-10-b round 14): circles and outlines with their names in pills. */
const AREA = (n, note, r) => ({ name: n, note, lat: T[n].lat, lon: T[n].lon, radius: r });
const AREAS = [AREA("Conway", "Almost all no HOA", 3000), AREA("Loris", "Almost all no HOA", 2000), AREA("Aynor", "Almost all no HOA", 1600),
  AREA("Little River", "Most no HOA", 2500), AREA("Surfside Beach", "Most no HOA", 1500),
  { name: "Socastee", note: "Most no HOA", polygon: [[-79.03, 33.70], [-78.98, 33.70], [-78.97, 33.67], [-79.02, 33.66]] }];
const am = regionMap({ name: "Areas test", areas: AREAS }, { inlineMax: 1e9 });
check("areas: a map of areas alone draws a circle or outline for each", (am.svg.match(/<g class="ar"[^>]*>([\s\S]*?)<\/g>/) || [, ""])[1].match(/<circle |<path /g).length === AREAS.length);
check("areas: each name is on the map in a pill or keeps a number in the key", am.areas.length === AREAS.length && am.areas.every((a) => a.labelled ? am.svg.includes(`>${a.name}<`) : am.areaKey.includes(a.name)));
check("areas: no area name touches another label or mark", !overlaps(am), overlaps(am));
check("areas: a name outside its area is nearer it than any other area", am.boxes.filter((b) => /^area\d+$/.test(b.owner) && b.kind === "label").length >= AREAS.length - 1);
check("areas: the alt text names the circled areas", /Circled areas: Conway, Loris, Aynor, Little River, Surfside Beach and Socastee\./.test(am.alt));
check("areas: a town inside an area is not named twice", !/>CONWAY</.test(am.svg) && !/>LORIS</.test(am.svg));
{ /* Each pill beside its own circle (round 14: a name sat top center, its circle top right): the label box's
     nearest point is within 14 units of its circle's edge, from the circle's middle and radius in the svg. */
  const circ = [...am.svg.match(/<g class="ar"[^>]*>([\s\S]*?)<\/g>/)[1].matchAll(/<circle cx="([\d.-]+)" cy="([\d.-]+)" r="([\d.]+)"\/>/g)].map((m) => m.slice(1).map(Number));
  const far = am.boxes.filter((b) => b.kind === "label" && /^area\d+$/.test(b.owner)).filter((b) => { const c = circ[+b.owner.slice(4)]; if (!c) return false;
    const dx = Math.max(b.x0 - c[0], 0, c[0] - b.x1), dy = Math.max(b.y0 - c[1], 0, c[1] - b.y1); return Math.hypot(dx, dy) - c[2] > 15; }).map((b) => b.owner);
  check("areas: every pill sits beside its own circle", !far.length, far.join()); }
const num = regionMap({ name: "Areas numbered", areas: AREAS, areaLabels: "numbers" }, { inlineMax: 1e9 });
check("areas: numbers mode numbers every area in its order and lists them in the key", num.areas.every((a, i) => !a.labelled && a.mark === String(i + 1)) && (num.areaKey.match(/<li /g) || []).length === AREAS.length);
/* a.mark and a.markAt (opt-in, batch 2026-10-b round 14): a map split into panels keeps the page's numbers,
   and a badge can sit off another area's badge. */
const MARKED = AREAS.map((a, i) => Object.assign({}, a, { mark: String(i + 11) }));
const mk = regionMap({ name: "Areas marked", areas: MARKED, areaLabels: "numbers" }, { inlineMax: 1e9 });
check("areas: a.mark replaces the number on the badge and in the key", mk.areas.every((a, i) => a.mark === String(i + 11)) && mk.svg.includes(">11<") && !/>1</.test(mk.svg.replace(/>1[0-9]</g, "")));
check("areas: without a.mark the numbers are unchanged", num.areas[0].mark === "1");
check("areas: a mark that is not 1 to 3 capital letters or digits is refused", throws(() => regionMap({ name: "Bad mark", areas: [Object.assign({}, AREAS[0], { mark: "x1" })], areaLabels: "numbers" }, { inlineMax: 1e9 }), /mark is 1 to 3/));
const C0 = AREAS.find((a) => a.radius);
const at = regionMap({ name: "Mark at", areas: [Object.assign({}, C0, { markAt: { lat: C0.lat + 0.004, lon: C0.lon } })], areaLabels: "numbers" }, { inlineMax: 1e9 });
const plain0 = regionMap({ name: "Mark at", areas: [C0], areaLabels: "numbers" }, { inlineMax: 1e9 });
check("areas: a.markAt moves the badge inside its area", at.svg !== plain0.svg && at.areas[0].mark === "1");
check("areas: a.markAt outside its area is refused", throws(() => regionMap({ name: "Bad at", areas: [Object.assign({}, C0, { markAt: { lat: C0.lat + 0.5, lon: C0.lon } })], areaLabels: "numbers" }, { inlineMax: 1e9 }), /markAt is outside/));
/* spec.maxRatio (opt-in, round 14c): a wide, short overview panel. */
const tall = regionMap({ name: "Ratio", areas: AREAS, areaLabels: "numbers" }, { inlineMax: 1e9 });
const wide = regionMap({ name: "Ratio", areas: AREAS, areaLabels: "numbers", maxRatio: 0.55 }, { inlineMax: 1e9 });
check("areas: maxRatio makes the map no taller than the ratio given", wide.height <= Math.round(wide.width * 0.55) + 1 && wide.height < tall.height, `${wide.height} vs ${tall.height}`);
check("areas: without maxRatio the frame is unchanged", tall.svg === num.svg.replace(/Areas numbered/g, "Ratio").replace(/areas-numbered/g, "ratio") || tall.height === num.height);
check("areas: a maxRatio outside 0.4 to 1.2 is refused", throws(() => regionMap({ name: "Bad ratio", areas: AREAS, maxRatio: 0.2 }, { inlineMax: 1e9 }), /maxRatio/));
/* spec.placeNames false (opt-in, round 14d): numbers only on a small overview strip. */
const named5 = regionMap({ name: "Names on", places: PLACES.slice(0, 5) }, { inlineMax: 1e9 });
const bare5 = regionMap({ name: "Names off", places: PLACES.slice(0, 5), placeNames: false }, { inlineMax: 1e9 });
check("places: placeNames false leaves every name off the map and keeps every number", bare5.unlabelled.length === 5 && PLACES.slice(0, 5).every((p) => !bare5.svg.includes(">" + (p.short || p.name) + "<")), bare5.unlabelled.join());
check("places: without placeNames the names are placed as before", named5.unlabelled.length < 5);
check("places: placeNames other than false is refused", throws(() => regionMap({ name: "Bad names", places: PLACES.slice(0, 3), placeNames: true }, { inlineMax: 1e9 }), /placeNames/));
const mixed = regionMap({ name: "Areas and places", places: PLACES.slice(0, 3), areas: AREAS.slice(0, 2), areaLabels: "numbers" }, { inlineMax: 1e9 });
check("areas: beside numbered places an area is lettered", mixed.areas.map((a) => a.mark).join() === "A,B");
check("areas: a radius out of range is refused", throws(() => regionMap({ name: "x", areas: [AREA("Conway", "", 20)] }), /radius is in meters/));
check("areas: a polygon given lat first is refused", throws(() => regionMap({ name: "x", areas: [{ name: "Bad", polygon: [[33.7, -79], [33.7, -78.9], [33.6, -78.9]] }] }), /outside the Grand Strand/));
check("areas: a name with a tag is refused", throws(() => regionMap({ name: "x", areas: [AREA("Conway", "<b>x</b>", 2000)] }), /plain text/));
check("areas: a map of places alone needs 2 places", throws(() => regionMap({ name: "x", places: [PLACES[0]] }), /2 to 15 places/));
check("glass: opts.glass puts place names in pills; without it there are none", /fill-opacity=".9" stroke="#ffffff"/.test(regionMap({ name: "Pills", places: PLACES.slice(0, 4) }, { inlineMax: 1e9, glass: true }).svg)
  && !/fill-opacity=".9" stroke="#ffffff"/.test(regionMap({ name: "Pills", places: PLACES.slice(0, 4) }, { inlineMax: 1e9 }).svg));
check("areas: a map without areas has no area group", !/class="ar"/.test(regionMap({ name: "Plain", places: PLACES.slice(0, 4) }, { inlineMax: 1e9 }).svg));

/* The community map is unchanged by the new mode (the four 55+ pages rebuilt byte for byte). */
const one = regionMap({ home: { name: "Myrtle Trace", lat: 33.778502, lon: -78.996618, town: "Conway" }, landmarks: [{ name: "Beach", kind: "beach", lat: 33.6906919, lon: -78.8804377, minutes: 15 }] });
check("a community map still has its home pin and no numbers", /class="h"/.test(one.svg) && !/class="nm"/.test(one.svg) && one.places === undefined);


/* spec.tidyLeaders true (opt-in, round 14e, OWNER-EYE-14d M2): on the 15-place overview of batch 2026-10-b, no
   leader line crosses another leader or passes over another place's spot, and no marker sits more than 45
   units from its spot. Without it, the same strip at its old shape sent The Farm's number far from its spot. */
{
  const BN = require(path.join(__dirname, "..", "batches", "2026-10-b", "data", "best-neighborhoods.json")).neighborhoods;
  const places = BN.map((n) => ({ name: n.name, short: n.short, lat: n.lat, lon: n.lon, href: "#" + n.id }));
  const leaders = (svg) => [...svg.matchAll(/<path d="M([\d.]+) ([\d.]+)L([\d.]+) ([\d.]+)" stroke="[^"]+" stroke-width="1\.1"\/>/g)].map((m) => m.slice(1, 5).map(Number));
  const cross = (a, b) => { const o = (p, q, r) => Math.sign((q[0] - p[0]) * (r[1] - p[1]) - (q[1] - p[1]) * (r[0] - p[0]));
    const [p1, p2, p3, p4] = [[a[0], a[1]], [a[2], a[3]], [b[0], b[1]], [b[2], b[3]]];
    return o(p1, p2, p3) * o(p1, p2, p4) < 0 && o(p3, p4, p1) * o(p3, p4, p2) < 0; };
  const near = (s, x, y) => { const [x1, y1, x2, y2] = s, dx = x2 - x1, dy = y2 - y1, t = Math.max(0, Math.min(1, ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy || 1)));
    return Math.hypot(x1 + t * dx - x, y1 + t * dy - y); };
  const tidy = regionMap({ name: "Tidy", places, placeNames: false, maxRatio: 0.75, tidyLeaders: true }, { inlineMax: 1e9, width: 320 });
  const T1 = leaders(tidy.svg);
  const bad = T1.filter((a, i) => T1.some((b, j) => j !== i && (cross(a, b) || near(a, b[0], b[1]) < 4)));
  check("places: tidyLeaders leaves no leader crossing another or passing over another place's spot", bad.length === 0, JSON.stringify(bad));
  check("places: tidyLeaders keeps every marker within 45 units of its spot", T1.every((s) => Math.hypot(s[2] - s[0], s[3] - s[1]) <= 45.5), JSON.stringify(T1));
  const old = regionMap({ name: "Old strip", places, placeNames: false, maxRatio: 0.6 }, { inlineMax: 1e9, width: 320 });
  check("places: without tidyLeaders the old strip had a marker moved more than 45 units (the fault this fixes)", leaders(old.svg).some((s) => Math.hypot(s[2] - s[0], s[3] - s[1]) > 45.5));
  check("places: tidyLeaders other than true is refused", throws(() => regionMap({ name: "Bad tidy", places: places.slice(0, 3), tidyLeaders: "yes" }, { inlineMax: 1e9 }), /tidyLeaders/));
}

/* a.label false and places[i].sea true (opt-in, batch 2026-10-b round 14f, OWNER-EYE-14e M4), on the no-HOA
   overview: the coast's areas are drawn with no pill or badge of their own, because a numbered place names
   each one; a beach place marked sea gets its name over the ocean with a leader line. */
{
  const NH = require(path.join(__dirname, "..", "batches", "2026-10-b", "data", "no-hoa-areas.json")).areas.filter((a) => a.key !== "mb-plantation-point");
  const coast = NH.slice(0, 12), inland = NH.slice(12);
  const mid = (s) => (s.polygon ? { lat: s.polygon.reduce((t, q) => t + q[1], 0) / s.polygon.length, lon: s.polygon.reduce((t, q) => t + q[0], 0) / s.polygon.length } : { lat: s.lat, lon: s.lon });
  const shape = (a, o) => { const s = a.mapShapes[0]; if (s.polygon) o.polygon = s.polygon; else Object.assign(o, { lat: s.lat, lon: s.lon, radius: s.radius }); return o; };
  const SEA = ["crescent-beach", "cherry-grove", "murrells-inlet"];
  const placesOf = (sea) => coast.map((a) => Object.assign({ name: a.mapShapes[0].name }, mid(a.mapShapes[0]), sea.includes(a.key) ? { sea: true } : {}));
  const areasOf = (bare) => coast.map((a) => shape(a, Object.assign({ name: a.mapShapes[0].name }, bare ? { label: false } : {})))
    .concat(inland.map((a, i) => shape(a, { name: `${13 + i} ${a.mapShapes[0].name}`, mark: String(13 + i) })));
  const spec = (sea, bare) => ({ name: "No HOA overview", places: placesOf(sea), areas: areasOf(bare), leaders: true, placeNames: false, maxRatio: 0.9 });
  const m = regionMap(spec(SEA, true), { inlineMax: 1e9, glass: true });
  const drawn = ((m.svg.match(/<g class="ar"[^>]*>([\s\S]*?)<\/g>/) || [, ""])[1].match(/<circle |<path /g) || []).length;
  check("areas: a.label false still draws every area", drawn === coast.length + inland.length, `${drawn}`);
  check("areas: a.label false gives the area no pill, no badge and no line in the key", m.areas.slice(0, 12).every((a) => a.bare && !a.labelled && !a.mark) && !m.areasUnlabelled.some((n) => coast.some((a) => a.mapShapes[0].name === n)) && !/class="ab"[^>]*>[A-Z]</.test(m.svg));
  /* Without a.label, the coast's own pills and letters take the room the numbered places need. */
  let pillsErr = "";
  try { regionMap(spec(SEA, false), { inlineMax: 1e9, glass: true }); } catch (e) { pillsErr = e.message; }
  check("areas: without a.label the same map has no room for the numbered places (the fault this fixes)", /no room on the map/.test(pillsErr), pillsErr);
  check("areas: a.label other than false is refused", throws(() => regionMap({ name: "Bad label", areas: [Object.assign({}, AREAS[0], { label: true })] }, { inlineMax: 1e9 }), /label is false/));
  const seaNamed = m.places.filter((p, i) => SEA.includes(coast[i].key) && p.labelled && p.leader).length;
  const noSea = regionMap(spec([], true), { inlineMax: 1e9, glass: true });
  const plainNamed = noSea.places.filter((p, i) => SEA.includes(coast[i].key) && p.labelled).length;
  check("places: sea names more of the beach places, each with a leader line", seaNamed >= 2 && seaNamed > plainNamed, `${seaNamed} vs ${plainNamed}`);
  check("places: with sea names nothing touches", !overlaps(m), overlaps(m));
  check("places: sea other than true is refused, and sea needs leaders", throws(() => regionMap({ name: "Bad sea", places: PLACES.slice(0, 3).map((p) => Object.assign({}, p, { sea: "yes" })), leaders: true }, { inlineMax: 1e9 }), /sea is true/)
    && throws(() => regionMap({ name: "No leaders", places: PLACES.slice(0, 3).map((p) => Object.assign({}, p, { sea: true })) }, { inlineMax: 1e9 }), /needs spec.leaders/));
}
console.log(failures ? `\n${failures} control(s) failed` : "\nall controls pass");
process.exitCode = failures ? 1 : 0;
