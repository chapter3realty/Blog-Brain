#!/usr/bin/env node
/*
 * Controls for area-map.js.
 *
 * Version 2 points are the batch 2026-10-a reference points (batches/2026-10-a/data/places.json):
 * county address points for 1285 Possum Trot Rd, 6201 Marina Pkwy and 130 Grand Cypress Way,
 * and the Census geocode of 101 Myrtle Trace Dr. Landmark points are the county address points
 * the Myrtle Trace ledger cites (rows 65 to 67). Minutes are the ledger's drive rows.
 *
 * Version 1 controls stay while older specs use areaMap.
 *
 *   node tools/area-map.test.js
 */
"use strict";
const fs = require("fs"), os = require("os"), path = require("path");
const A = require("./area-map.js");
const { areaMap, liveMapHtml, CREDIT, MAX_BYTES, loadGeo, clipPolygon, simplify } = A;
const { regionMap, closeMap, communityMaps, mapLinksHtml, loadGeo2, cleanStreet, CREDIT2, INLINE_MAX, FILE_MAX, GEO2_FILE } = A;
const { satOverlap, tw2, SZ, EDGE } = A.internals;
let failures = 0;
const check = (name, cond, extra = "") => { if (!cond) { failures++; console.log(`FAIL  ${name} ${extra}`); } else console.log(`ok    ${name}`); };
const throws = (fn) => { try { fn(); return false; } catch { return true; } };

/* The page builder's own figure test (website tools/mkpage.js h.figure). */
const FIGURE = /<img [^>]*alt="[^"]{12,}"|<svg [^>]*role="img"[^>]*aria-label="[^"]{12,}"/;

/* Two boxes of different owners must not touch. A label and its own mark share an owner.
   A "dot" only keeps labels off a landmark's true spot, and an "area" keeps them off the
   community's outline; a mark, a dot or an area may sit on either. */
function overlaps(m) {
  const bs = m.boxes;
  const soft = (k) => k === "dot" || k === "area";
  for (let i = 0; i < bs.length; i++) for (let j = i + 1; j < bs.length; j++) {
    const a = bs[i], b = bs[j];
    if (a.owner === b.owner) continue;
    if ((soft(a.kind) || soft(b.kind)) && [a.kind, b.kind].every((k) => soft(k) || k === "marker")) continue;
    if (satOverlap(a, b)) return `${a.kind}:${a.owner} / ${b.kind}:${b.owner}`;
  }
  return "";
}
const inFrame = (f, p) => p.lon > f.west && p.lon < f.east && p.lat > f.south && p.lat < f.north;

/* Buyer reads v6 (batch 2026-10-a): readers in their sixties on a phone found the labels "too
   much tiny print", and one saw "Beach about 15 min" cut off at the right edge. A map shows
   342 px wide on a 390 px phone (measured on the page), so a size in svg units times 342/360
   is the size the reader sees. */
const PHONE = 342 / 360;
const cssSize = (svg, cls) => { const m = svg.match(new RegExp(`#[\\w-]+ \\.${cls}\\{(?:font-size:|font:[^;}]*? )([\\d.]+)px`)); return m ? +m[1] : NaN; };
/* Every label box sits EDGE - 2 units or more inside the frame (a curved name's small boxes may
   come 2 units nearer; every other label keeps EDGE). */
function edgeHits(m) {
  const lab = new Set(["label", "town", "street", "water", "shield"]);
  return m.boxes.filter((b) => lab.has(b.kind) && (b.x0 < EDGE - 2 || b.y0 < EDGE - 2 || b.x1 > m.width - EDGE + 2 || b.y1 > m.height - EDGE + 2)).map((b) => `${b.kind}:${b.owner}`).join(", ");
}
const noExternal = (svg) => !/(?:href|src)="(?:https?:)?\/\//.test(svg.replace(/xmlns="http:\/\/www\.w3\.org\/2000\/svg"/, ""));

/* ================= version 2 ================= */

const MT = {
  home: { name: "Myrtle Trace", lat: 33.778502, lon: -78.996618, town: "Conway" },
  landmarks: [
    { name: "the beach at the Myrtle Beach Boardwalk", short: "Beach and Boardwalk", kind: "beach", lat: 33.6906919, lon: -78.8804377, minutes: 15 },
    { name: "Walmart Supercenter", short: "Walmart", kind: "grocery", lat: 33.777583, lon: -78.989089, minutes: 3 },
    { name: "Conway Medical Center", short: "Hospital", kind: "hospital", lat: 33.785483, lon: -79.001894, minutes: 3 },
    { name: "the airport", short: "Airport", kind: "airport", lat: 33.6825, lon: -78.924023, minutes: 20 },
  ],
};

/* Region map. */
const r = regionMap(MT);
check("region: renders one svg with a viewBox", /^<svg [^>]*viewBox="0 0 \d+ \d+"/.test(r.svg) && r.svg.endsWith("</svg>") && (r.svg.match(/<svg/g) || []).length === 1);
check("region: passes the mkpage figure test", FIGURE.test(r.html));
check("region: aria-label says where it is in plain words", /aria-label="Myrtle Trace is just outside Conway, about 15 minutes inland from the beach/.test(r.svg), r.alt);
check("region: home label is drawn", />Myrtle Trace</.test(r.svg));
check("region: the community outline is drawn", /<path class="outline" d="M/.test(r.svg) && r.outline);
check("region: the ocean is drawn and labelled", r.labels.ocean && />Atlantic Ocean</.test(r.svg));
check("region: route markers for the roads a newcomer drives", r.labels.routes.includes("US 501") && r.labels.routes.length >= 4, JSON.stringify(r.labels.routes));
check("region: Conway is labelled", r.labels.towns.includes("Conway"), JSON.stringify(r.labels.towns));
check("region: landmark minutes are printed", />about 20 min</.test(r.svg) && />about 15 min</.test(r.svg));
check("region: short names are used on the map", />Boardwalk</.test(r.svg) && !/>the beach at the Myrtle Beach Boardwalk</.test(r.svg));
check("region: the airport is named for its town ('Myrtle Beach airport'), not 'Airport'", />Myrtle Beach<\/tspan><tspan [^>]*>airport<\/tspan>/.test(r.svg) && !/>Airport</.test(r.svg) && r.labels.airport);
check("region: the aria-label names the airport too", /the Myrtle Beach airport, about 20 minutes away/.test(r.alt), r.alt);
check("region: no two labels overlap", !overlaps(r), overlaps(r));
check(`region: inline and under ${INLINE_MAX} bytes (${r.bytes})`, r.inline && r.bytes <= INLINE_MAX && r.html === r.svg);
check("region: framing holds home and every landmark", [MT.home, ...MT.landmarks].every((p) => inFrame(r.frame, p)), JSON.stringify(r.frame));
check("region: markers sit inside the picture", r.boxes.filter((b) => b.kind === "marker").every((b) => b.x0 >= 0 && b.y0 >= 0 && b.x1 <= r.width && b.y1 <= r.height));
check("region: no external request, no script, no em dash", noExternal(r.svg) && !/<script/i.test(r.svg) && !/—/.test(r.svg + r.alt));
check("region: caption carries the data credit", r.caption.includes(CREDIT2) && /TIGER\/Line/.test(CREDIT2) && /Horry County GIS/.test(CREDIT2));

/* Close-up. */
const c = closeMap(MT);
check("close: renders one svg with a viewBox", /^<svg [^>]*viewBox="0 0 \d+ \d+"/.test(c.svg) && c.svg.endsWith("</svg>"));
check("close: passes the mkpage figure test", FIGURE.test(c.html));
check("close: the outline is drawn", /<path class="outline" d="M/.test(c.svg) && c.area === "myrtle-trace");
check("close: the clubhouse pin and the main entrance are labelled", />Clubhouse</.test(c.svg) && />Main entrance</.test(c.svg) && c.labels.amenity && c.labels.entrance);
check("close: the community name is drawn", c.labels.name && /<text class="c"[^>]*>(?:<tspan[^>]*>)?MYRTLE/.test(c.svg));
check("close: street names bend with the street", /<textPath href="#c3c-myrtle-trace-s\d+"/.test(c.svg) && c.labels.streets.length >= 2, JSON.stringify(c.labels.streets));
check("close: the entrance road is named, on the street or under 'Main entrance'", c.labels.streets.includes("Burning Ridge Rd") || />on Burning Ridge Road</.test(c.svg), JSON.stringify(c.labels.streets));
check("close: ponds and golf course land are drawn", /fill="#c9dde6"/.test(c.svg) && c.labels.golf);
check("close: a scale bar in miles and a north arrow", /MILE<\/text>/.test(c.svg) && />N<\/text>/.test(c.svg));
check("close: the grocery and the hospital in frame are shown with minutes", c.landmarks.includes("Walmart Supercenter") && c.landmarks.includes("Conway Medical Center") && />about 3 min</.test(c.svg), JSON.stringify(c.landmarks));
check("close: no two labels overlap", !overlaps(c), overlaps(c));
check(`close: inline and under ${INLINE_MAX} bytes (${c.bytes})`, c.inline && c.bytes <= INLINE_MAX);
{
  const a = loadGeo2().areas["myrtle-trace"], pts = a.outline.flat();
  const lons = pts.map((p) => p[0]), lats = pts.map((p) => p[1]);
  const corners = [{ lon: Math.min(...lons), lat: Math.min(...lats) }, { lon: Math.max(...lons), lat: Math.max(...lats) }];
  check("close: framing holds the whole outline, the amenity and the entrance", [...corners, a.amenity, a.entrance].every((p) => inFrame(c.frame, p)), JSON.stringify(c.frame));
}
check("close: alt text names what the map shows", /^A close-up map of Myrtle Trace, with its streets/.test(c.alt) && /main entrance on Burning Ridge Road/.test(c.alt), c.alt);
check("close: no external request, no script, no em dash", noExternal(c.svg) && !/<script/i.test(c.svg) && !/—/.test(c.svg + c.alt));

/* All four communities, both maps. */
const FOUR = [
  { name: "Del Webb North Myrtle Beach", lat: 33.821769, lon: -78.700908, town: "North Myrtle Beach", area: "del-webb-north-myrtle-beach" },
  { name: "Del Webb at Grande Dunes", lat: 33.749305, lon: -78.842661, town: "Myrtle Beach", area: "del-webb-grande-dunes" },
  { name: "Myrtle Trace", lat: 33.778502, lon: -78.996618, town: "Conway", area: "myrtle-trace" },
  { name: "Seasons at Prince Creek West", lat: 33.586369, lon: -79.07094, town: "Murrells Inlet", area: "seasons-at-prince-creek-west" },
];
const airport = { name: "the airport", short: "Airport", kind: "airport", lat: 33.6825, lon: -78.924023, minutes: 20 };
for (const home of FOUR) {
  const m = communityMaps({ home, landmarks: [airport] });
  for (const k of ["region", "close"]) {
    const x = m[k];
    check(`${home.area} ${k}: renders, outline drawn, no overlaps, ${x.bytes} bytes inline`, x.outline && x.inline && x.bytes <= INLINE_MAX && !overlaps(x) && FIGURE.test(x.html), overlaps(x));
  }
}
check("aria-label: a home inside its town says 'in'", /^Del Webb at Grande Dunes is in Myrtle Beach/.test(communityMaps({ home: FOUR[1] }).region.alt));

/* communityMaps: a grocery stays off the region map; the links come with it. */
const cm = communityMaps(MT);
check("communityMaps: the grocery is on the close-up, not the region map", cm.close.landmarks.includes("Walmart Supercenter") && !/>Walmart</.test(cm.region.svg));
check("communityMaps: the hospital shown up close is left off the region map", !/>Hospital</.test(cm.region.svg) && />Hospital</.test(cm.close.svg));
check("communityMaps: carries the two Google Maps buttons", cm.links === mapLinksHtml({ name: MT.home.name, lat: MT.home.lat, lon: MT.home.lon }));

/* Crowded: six landmarks within a mile of home. Callouts keep labels clear; a landmark with no
   room is dropped and named in m.dropped, never drawn on top of another. */
const crowd = { home: MT.home, landmarks: ["grocery", "pool", "golf", "shopping", "hospital", "town"].map((k, i) => ({ name: `Place ${i + 1}`, kind: k, lat: 33.7785 + 0.004 * Math.cos(i), lon: -78.9966 + 0.004 * Math.sin(i), minutes: i + 1 })) };
const rc = regionMap(crowd);
check("crowded region: labels do not overlap", !overlaps(rc), overlaps(rc));
check("crowded region: every landmark is labelled or listed as dropped", crowd.landmarks.every((l) => rc.labels.landmarks.includes(l.name) !== rc.dropped.includes(l.name)), JSON.stringify(rc.dropped));
check("crowded region: a moved marker gets a line to its true spot", /<path d="M[\d.]+ [\d.]+L[\d.]+ [\d.]+" stroke="#1c2028"/.test(rc.svg));
const cc = closeMap(Object.assign({}, crowd, { landmarks: crowd.landmarks.map((l) => Object.assign({}, l, { map: "close" })) }));
check("crowded close-up: labels do not overlap", !overlaps(cc), overlaps(cc));

/* Larger than the inline cap: written as a file, returned as an <img>. */
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "area-map-"));
const ext = closeMap(MT, { inlineMax: 1000, dir: tmp, src: "/images/maps" });
check("external: an <img> with width, height, alt and lazy loading", /^<img src="\/images\/maps\/myrtle-trace-close\.svg" width="\d+" height="\d+" alt="A close-up map of Myrtle Trace[^"]*" loading="lazy"/.test(ext.html) && !ext.inline, ext.html.slice(0, 160));
check("external: the svg file is written", fs.existsSync(ext.file) && /^<\?xml[^>]*>\n<svg /.test(fs.readFileSync(ext.file, "utf8")));
check("external: no folder given is an error", throws(() => closeMap(MT, { inlineMax: 1000 })));
check(`external: over the ${FILE_MAX} byte cap is an error`, throws(() => closeMap(MT, { inlineMax: 1000, fileMax: 2000, dir: tmp })));
fs.rmSync(tmp, { recursive: true, force: true });

/* Escaping and bad input. */
const bad = { home: { name: "A <b>&\"place\"", lat: 33.778502, lon: -78.996618, area: "myrtle-trace" } };
const be = [regionMap(bad).svg, closeMap(bad).svg];
check("names are escaped on both maps", be.every((s) => !/<b>/.test(s) && /A &lt;b&gt;&amp;&quot;place&quot;|A &LT;B&GT;&amp;&quot;PLACE&quot;/.test(s)));
check("a point outside the cached data throws", throws(() => regionMap({ home: { name: "Charleston", lat: 32.78, lon: -79.93 } })));
check("a close-up with no cached area throws", throws(() => closeMap({ home: { name: "Downtown Conway", lat: 33.836, lon: -79.0478 } })));
check("a place without lat and lon throws", throws(() => regionMap({ home: { name: "No coords" } })));

/* Street names as a driver reads them. */
check("street names: routes, bypass, odd numbers", cleanStreet("US Hwy 17 Byp N") === "US 17 Bypass" && cleanStreet("E US Hwy 501") === "US 501" && cleanStreet("State Hwy 707") === "SC 707" && cleanStreet("Tpc Blvd") === "TPC Blvd" && cleanStreet("State Rd S-26-1043") === "" && cleanStreet("State Hwy 73") === "" && cleanStreet("Noname") === "");

/* The two buttons. */
const links = mapLinksHtml({ name: "Myrtle Trace", lat: 33.778502, lon: -78.996618 });
check("links: a plain link opens the place in Google Maps", /<a class="c3-map-link open" href="https:\/\/www\.google\.com\/maps\/search\/\?api=1&amp;query=33\.778502,-78\.996618"[^>]*>(?:<svg[\s\S]*?<\/svg>)?Open in Google Maps<\/a>/.test(links), links);
check("links: a plain link gets directions", /<a class="c3-map-link directions" href="https:\/\/www\.google\.com\/maps\/dir\/\?api=1&amp;destination=33\.778502,-78\.996618"[^>]*>(?:<svg[\s\S]*?<\/svg>)?Get directions<\/a>/.test(links));
check("links: open in a new tab, safely", (links.match(/target="_blank" rel="noopener noreferrer"/g) || []).length === 2);
check("links: no frame, no script, no inline brass ground", !/<iframe|<script|background:var\(--brass\)/.test(links));
check("links: no button classes (the website audit allows buttons only for contact, phone or tools)", !/class="btn/.test(links));
check("links: names are escaped and lat/lon are required", !/<b>/.test(mapLinksHtml({ name: "<b>x", lat: 33.7, lon: -78.9 })) && throws(() => mapLinksHtml({ name: "x" })));
check("liveMapHtml is still exported and marked deprecated", typeof liveMapHtml === "function" && /DEPRECATED[^\n]*Use mapLinksHtml/.test(fs.readFileSync(path.join(__dirname, "area-map.js"), "utf8")));

/* Cached geodata, version 2. */
const g2 = loadGeo2();
check("geodata v2: every source carries a license", g2.sources.length >= 3 && g2.sources.every((s) => s.license && s.url && s.used_for) && g2.sources.some((s) => /TIGER/.test(s.name) && /public domain/i.test(s.license)) && g2.sources.some((s) => /Horry County/.test(s.name)));
check("geodata v2: the four communities, each with its parcel filter", FOUR.every((h) => g2.areas[h.area] && g2.raw.areas[h.area].filter && g2.raw.areas[h.area].parcels > 100));
check("geodata v2: towns, routes, the waterway, the river, the parks and the airport", ["Conway", "Myrtle Beach", "North Myrtle Beach", "Murrells Inlet"].every((n) => g2.towns.some((t) => t.name === n)) && ["US 17", "US 501", "SC 31", "SC 707"].every((rt) => g2.roads.some((x) => x.route === rt)) && ["Intracoastal Waterway", "Waccamaw River"].every((n) => g2.waterlines.some((w) => w.name === n)) && ["Myrtle Beach State Park", "Huntington Beach State Park"].every((n) => g2.parks.some((p) => p.name === n)) && /Airport/.test(g2.airport.name));
const geoBytes = fs.statSync(GEO2_FILE).size;
check(`geodata v2: small (${geoBytes} bytes, under 300 KB)`, geoBytes < 300 * 1024);

/* ================= version 1 (kept) ================= */

const places = {
  home: { name: "Myrtle Trace", lat: 33.778502, lon: -78.996618, town: "Conway" },
  landmarks: [
    { name: "Beach", kind: "beach", lat: 33.7365, lon: -78.8185, minutes: 20 },
    { name: "Conway Medical Center", short: "Hospital", kind: "hospital", lat: 33.785483, lon: -79.001894, minutes: 2 },
    { name: "Myrtle Beach International Airport", short: "Airport", kind: "airport", lat: 33.6825, lon: -78.924023, minutes: 20 },
  ],
};
const m = areaMap(places);
check("v1: map renders an svg", /^<svg [^>]*viewBox="0 0 \d+ \d+"/.test(m.svg) && m.svg.endsWith("</svg>"));
check("v1: svg passes the mkpage figure test", FIGURE.test(m.svg));
check("v1: aria-label says where it is in words", /aria-label="Myrtle Trace is in Conway, about 20 minutes inland from the beach/.test(m.svg), m.alt);
check(`v1: size is under the cap (${m.bytes} bytes)`, m.bytes < MAX_BYTES);
check("v1: caption carries the OpenStreetMap credit", m.caption.includes(CREDIT) && /OpenStreetMap contributors/.test(CREDIT));
const labelsOverlap = (mm) => {
  const ls = mm.boxes.filter((b) => b.kind === "label" || b.kind === "town");
  for (let i = 0; i < ls.length; i++) for (let j = i + 1; j < ls.length; j++) {
    const a = ls[i], b = ls[j];
    if (a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1) return `${a.owner} / ${b.owner}`;
  }
  return "";
};
check("v1: labels do not collide", !labelsOverlap(m), labelsOverlap(m));
const geo = loadGeo();
check("v1: geodata carries its source and license", /OpenStreetMap/.test(geo.source) && /ODbL/.test(geo.license));
const sq = clipPolygon([[-5, -5], [5, -5], [5, 5], [-5, 5]], 0, 0, 10, 10);
check("polygon clip keeps the inside", sq.length >= 4 && sq.every(([x, y]) => x >= 0 && y >= 0 && x <= 5 && y <= 5));
check("simplify keeps the ends and drops a straight middle", simplify([[0, 0], [1, 0.01], [2, 0]], 0.5).length === 2);
const live = liveMapHtml({ name: "Myrtle Trace", lat: 33.778502, lon: -78.996618 });
check("v1 live map: still builds (deprecated)", /<template><iframe [^>]*><\/iframe><\/template>/.test(live));

console.log(failures ? `\n${failures} control(s) failed` : "\nall controls pass");
process.exitCode = failures ? 1 : 0;
