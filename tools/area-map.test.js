#!/usr/bin/env node
/*
 * Controls for area-map.js. The home point is the Census geocode of 101 Myrtle Trace
 * Drive; the hospital and airport points are the county address points in
 * batches/2026-10-a/facts/myrtle-trace-facts.md rows 65 and 66. Minutes are test values.
 *
 *   node tools/area-map.test.js
 */
"use strict";
const { areaMap, liveMapHtml, CREDIT, MAX_BYTES, loadGeo, clipPolygon, simplify } = require("./area-map.js");
let failures = 0;
const check = (name, cond, extra = "") => { if (!cond) { failures++; console.log(`FAIL  ${name} ${extra}`); } else console.log(`ok    ${name}`); };

const places = {
  home: { name: "Myrtle Trace", lat: 33.778502, lon: -78.996618, town: "Conway" },
  landmarks: [
    { name: "Beach", kind: "beach", lat: 33.7365, lon: -78.8185, minutes: 20 },
    { name: "Conway Medical Center", short: "Hospital", kind: "hospital", lat: 33.785483, lon: -79.001894, minutes: 2 },
    { name: "Myrtle Beach International Airport", short: "Airport", kind: "airport", lat: 33.6825, lon: -78.924023, minutes: 20 },
  ],
};
const m = areaMap(places);

/* The page builder's own figure test (website tools/mkpage.js h.figure). */
const FIGURE = /<img [^>]*alt="[^"]{12,}"|<svg [^>]*role="img"[^>]*aria-label="[^"]{12,}"/;
check("map renders an svg", /^<svg [^>]*viewBox="0 0 \d+ \d+"/.test(m.svg) && m.svg.endsWith("</svg>"));
check("svg passes the mkpage figure test", FIGURE.test(m.svg));
check("home label is drawn", />Myrtle Trace<\/text>/.test(m.svg));
check("aria-label says where it is in words", /aria-label="Myrtle Trace is in Conway, about 20 minutes inland from the beach/.test(m.svg), m.alt);
check("landmark minutes are printed", (m.svg.match(/about 20 min</g) || []).length === 2 && /about 2 min</.test(m.svg));
check("short names are used on the map", />Hospital</.test(m.svg) && !/>Conway Medical Center</.test(m.svg));
check(`size is under the cap (${m.bytes} bytes)`, m.bytes < MAX_BYTES);
check("no external request", !/(?:href|src)="(?:https?:)?\/\//.test(m.svg.replace(/xmlns="http:\/\/www\.w3\.org\/2000\/svg"/, "")));
check("no script in the svg", !/<script/i.test(m.svg));
check("no em dash", !/\u2014/.test(m.svg + m.alt));
check("caption carries the OpenStreetMap credit", m.caption.includes(CREDIT) && /OpenStreetMap contributors/.test(CREDIT));
check("the ocean is drawn and labelled", /fill="#d3e0e5"/.test(m.svg) && m.labels.ocean);
check("the home town is labelled", m.labels.towns.includes("Conway"), JSON.stringify(m.labels));

const f = m.frame;
const inFrame = (p) => p.lon > f.west && p.lon < f.east && p.lat > f.south && p.lat < f.north;
check("framing includes home and every landmark", [places.home, ...places.landmarks].every(inFrame), JSON.stringify(f));
check("markers sit inside the picture", m.boxes.filter((b) => b.kind === "marker").every((b) => b.x0 >= 0 && b.y0 >= 0 && b.x1 <= m.width && b.y1 <= m.height));

const labelsOverlap = (mm) => {
  const ls = mm.boxes.filter((b) => b.kind === "label" || b.kind === "town");
  for (let i = 0; i < ls.length; i++) for (let j = i + 1; j < ls.length; j++) {
    const a = ls[i], b = ls[j];
    if (a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1) return `${a.owner} / ${b.owner}`;
  }
  return "";
};
check("labels do not collide", !labelsOverlap(m), labelsOverlap(m));

/* Crowded: six landmarks within a mile of home. Markers are nudged apart, labels still clear. */
const crowd = { home: places.home, landmarks: ["grocery", "pool", "golf", "shopping", "hospital", "town"].map((k, i) => ({ name: `Place ${i + 1}`, kind: k, lat: 33.7785 + 0.004 * Math.cos(i), lon: -78.9966 + 0.004 * Math.sin(i), minutes: i + 1 })) };
const mc = areaMap(crowd);
check("crowded map: labels do not collide", !labelsOverlap(mc), labelsOverlap(mc));
const mk = mc.boxes.filter((b) => b.kind === "marker");
check("crowded map: markers do not overlap", mk.every((a, i) => mk.every((b, j) => i >= j || !(a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1))));
check("crowded map: moved markers get a leader line", /<path d="M[\d.]+ [\d.]+L[\d.]+ [\d.]+" stroke="#1c2028"/.test(mc.svg));

/* A beach-side home and no landmarks: still a map, with the coast in frame. */
const mb = areaMap({ home: { name: "Ocean Lakes", lat: 33.6290, lon: -78.9530 } });
check("no landmarks: map renders, near the beach", /close to the beach|from the beach|inland from the ocean/.test(mb.alt) && /is near /.test(mb.alt), mb.alt);

/* Text in names is escaped. */
const me = areaMap({ home: { name: "A <b>&\"place\"", lat: 33.70, lon: -78.95 } });
check("names are escaped", !/<b>/.test(me.svg) && /A &lt;b&gt;&amp;&quot;place&quot;/.test(me.svg));

/* Bad input fails loudly. */
let threw = false; try { areaMap({ home: { name: "Charleston", lat: 32.78, lon: -79.93 } }); } catch { threw = true; }
check("a point outside the cached data throws", threw);
threw = false; try { areaMap({ home: { name: "No coords" } }); } catch { threw = true; }
check("a place without lat and lon throws", threw);

/* Cached geodata. */
const geo = loadGeo();
check("geodata carries its source and license", /OpenStreetMap/.test(geo.source) && /ODbL/.test(geo.license));
check("geodata has the seven main towns", ["Little River", "North Myrtle Beach", "Myrtle Beach", "Conway", "Surfside Beach", "Murrells Inlet", "Pawleys Island"].every((n) => geo.towns.some((t) => t.name === n && t.main)));
check("geodata has the waterway and the river", ["Intracoastal Waterway", "Waccamaw River"].every((n) => geo.water.some((w) => w.name === n && w.lines.length)));

/* Geometry helpers. */
const sq = clipPolygon([[-5, -5], [5, -5], [5, 5], [-5, 5]], 0, 0, 10, 10);
check("polygon clip keeps the inside", sq.length >= 4 && sq.every(([x, y]) => x >= 0 && y >= 0 && x <= 5 && y <= 5));
check("simplify keeps the ends and drops a straight middle", simplify([[0, 0], [1, 0.01], [2, 0]], 0.5).length === 2);

/* Live map. */
const live = liveMapHtml({ name: "Myrtle Trace", lat: 33.778502, lon: -78.996618 });
check("live map: the iframe waits in a template", /<template><iframe [^>]*><\/iframe><\/template>/.test(live) && (live.match(/<iframe/g) || []).length === 1);
check("live map: lazy, titled, keyless embed", /<iframe src="https:\/\/www\.google\.com\/maps\?q=33\.778502,-78\.996618&amp;z=13&amp;output=embed" title="Live map of Myrtle Trace from Google Maps" loading="lazy"/.test(live), live.slice(0, 300));
check("live map: loads on tap", /<button type="button" onclick="[^"]*template[^"]*"/.test(live));
check("live map: tap mode adds no script", !/<script/.test(live));
const liveView = liveMapHtml({ name: "Myrtle Trace", lat: 33.778502, lon: -78.996618, load: "view", svg: m.svg, caption: "Where it is. " + CREDIT });
check("live map: view mode loads on scroll", /IntersectionObserver/.test(liveView));
check("live map: the drawn map comes first", liveView.indexOf("<svg") < liveView.indexOf("<template>"));
check("live map: a plain link for phones", /href="https:\/\/www\.google\.com\/maps\/search\/\?api=1&amp;query=33\.778502,-78\.996618"/.test(live));

console.log(failures ? `\n${failures} control(s) failed` : "\nall controls pass");
process.exitCode = failures ? 1 : 0;
