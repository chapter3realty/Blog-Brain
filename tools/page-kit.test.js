#!/usr/bin/env node
/*
 * Controls for page-kit.js. Data is batch 2026-10-a's (batches/2026-10-a/data/), the batch the
 * kit was moved out of; the four 55+ pages were rebuilt with the moved kit and are byte
 * identical to the build before the move (2026-10-13).
 *
 *   node tools/page-kit.test.js
 */
"use strict";
const fs = require("fs"), path = require("path");
const PK = require("./page-kit.js");
let failures = 0;
const check = (name, cond, extra = "") => { if (!cond) { failures++; console.log(`FAIL  ${name} ${extra}`); } else console.log(`ok    ${name}`); };
const throws = (fn, re) => { try { fn(); return false; } catch (e) { return re ? re.test(e.message) : true; } };

/* The website's h.figure, as tools/mkpage.js has it (the kit gets it from the spec's website). */
const h = {
  a: (href, text) => `<a href="${href}">${text}</a>`,
  figure: (media, caption) => {
    if (!/<img [^>]*alt="[^"]{12,}"|<svg [^>]*role="img"[^>]*aria-label="[^"]{12,}"/.test(media)) throw new Error("figure needs alt text");
    return `<figure>${media}<figcaption>${caption}</figcaption></figure>`;
  },
};
const BATCH = path.join(__dirname, "..", "batches", "2026-10-a");
const places = require(path.join(BATCH, "data", "places.json"));
const photos = require(path.join(BATCH, "data", "photos.json")).photos;

/* ---- story: the labelled example (the Myrtle Trace page's story, which shipped) ---- */
const PARAS = [
  "<strong>Example:</strong> Pat wants a home in Myrtle Trace with room for her dog, Max.",
  "Before she makes an offer, her Chapter3 agent reads the neighborhood's rules with her. A house on the golf course cannot have a fence around its back yard.",
  "The agent shows her that a dog run, a small pen beside the house, is allowed once the HOA approves it. Pat makes her offer, with a plan for Max's dog run beside the patio.",
];
const st = PK.story(PARAS, "Read the rules before you offer.", "ivory", "An agent can read them with you.");
check("story: the example sits in a card, the meaning and offer after it", /^<div class="c3-story"[^>]*background:var\(--ivory\)/.test(st) && /Read the rules before you offer\.<\/p><p [^>]*>An agent can read them with you\.<\/p>$/.test(st));
check("story: the card takes the other ivory on an ivory-2 section", /background:var\(--ivory-2\)/.test(PK.story(PARAS, "", "ivory-2")));
check("story: refuses a story with no Example: label", throws(() => PK.story(PARAS.slice(1), "x", "ivory"), /Example/));
check("story: refuses a story where no Chapter3 agent acts", throws(() => PK.story([PARAS[0], "Pat reads the rules. Pat finds the answer. Pat makes an offer."], "", "ivory"), /Chapter3 agent/));
check("story: refuses a story that calls the people clients", throws(() => PK.story([PARAS[0] + " She is one of our clients.", ...PARAS.slice(1)], "", "ivory"), /clients/));
check("story: refuses an agent in the past tense", throws(() => PK.story([PARAS[0], "Her Chapter3 agent helped her read the rules. A fence is not allowed.", PARAS[2]], "", "ivory"), /present tense/));
check("story: refuses a But opener (website build.js)", throws(() => PK.story([PARAS[0], "Her Chapter3 agent reads the rules with her. But a fence is not allowed.", PARAS[2]], "", "ivory"), /openers/));
check("story: runs the shared simple story test (three numbers fail)", throws(() => PK.story([PARAS[0], "Her Chapter3 agent reads the rules with her. The fee is 95, the deposit 300 and the wait 30 days.", PARAS[2]], "", "ivory"), /simple story test/));
check("story: refuses a rule that acts", throws(() => PK.story([PARAS[0], "Her Chapter3 agent reads the rules with her. The rules say no fence.", PARAS[2]], "", "ivory"), /rule or paper acts/));

/* ---- glance ---- */
const gl = PK.glance([{ icon: "beach", label: "Beach", text: "About 15 min" }, { icon: "hospital", label: "Hospital & clinic", text: "About 3 min" }]);
check("glance: one list item per fact, with its icon hidden from screen readers", (gl.match(/<li>/g) || []).length === 2 && /aria-hidden="true"/.test(gl) && /--n:2/.test(gl));
check("glance: escapes the words", /Hospital &amp; clinic/.test(gl));
check("glance: takes 2 to 4 items", throws(() => PK.glance([{ icon: "beach", label: "Beach" }])) && throws(() => PK.glance(Array(5).fill({ icon: "beach", label: "Beach" }))));
check("glance: an unknown icon throws", throws(() => PK.glance([{ icon: "nope", label: "A" }, { icon: "beach", label: "B" }])));

/* ---- prosCons ---- */
const pc = PK.prosCons(["A pool", "A gate", "Golf"], ["Old roofs", { text: "Flood zone on some streets", act: "Ask for the flood map." }, "No sidewalks"], { bg: "ivory" });
check("prosCons: Pros first, then Cons, each a list", /<h3>Pros<\/h3><ul>(?:<li>.*?<\/li>){3}<\/ul>.*<h3>Cons<\/h3>/.test(pc));
check("prosCons: a con's action shows on its own line", /<span class="c3-pc-do">Ask for the flood map\.<\/span>/.test(pc));
check("prosCons: list text at reading size", /\.c3-pc li\{[^}]*font-size:var\(--read/.test(pc));
check("prosCons: takes 3 or 4 of each", throws(() => PK.prosCons(["a", "b"], ["c", "d", "e"])) && throws(() => PK.prosCons(["a", "b", "c"], ["c", "d", "e", "f", "g"])));

/* ---- create ---- */
check("create: needs the website's h", throws(() => PK.create({}), /create\(\{ h \}\)/));
const bare = PK.create({ h });
check("create: maps needs the batch's places", throws(() => bare.maps("myrtle-trace", []), /places/));
check("create: photoSet needs the batch's photo records", throws(() => bare.photoSet(), /photo records/));
check("create: the data-free helpers are the shared ones", bare.story === PK.story && bare.glance === PK.glance && bare.prosCons === PK.prosCons);

const kit = PK.create({ h, places, photos, notUsed: ["broadway-at-the-beach-night"], mapDir: null, mapSrc: "/images/maps" });

/* ---- maps (Myrtle Trace, as its page builds it) ---- */
const picks = [{ id: "beach_mt", name: "the beach at the Myrtle Beach Boardwalk", short: "Beach", kind: "beach" },
  { id: "hosp_cmc", name: "Conway Medical Center", short: "Hospital", kind: "hospital" }];
const M = kit.maps("myrtle-trace", picks, { regionCaption: "Where Myrtle Trace is: a map.", closeCaption: "Myrtle Trace up close, on a map." });
check("maps: the region map is a figure with the svg and the data credit", /^<figure><svg [^>]*role="img"/.test(M.region) && M.region.includes("Where Myrtle Trace is: a map. Map data: U.S. Census Bureau TIGER/Line"));
check("maps: where = the region map and one Google Maps text link", M.where.startsWith(M.region) && (M.where.match(/<a href="https:\/\/www\.google\.com\/maps\//g) || []).length === 1 && /Open Myrtle Trace in Google Maps/.test(M.where));
check("maps: the links are text links, never .btn (website audit)", !/class="btn/.test(M.links + M.where));
check("maps: drive minutes come from the batch's places (beach 15, from places.json)", /about 15 min/.test(M.region));
check("maps: a caption that does not say map throws", throws(() => kit.maps("myrtle-trace", picks, { regionCaption: "Where it is.", closeCaption: "Up close, a map." }), /must say "map"/));
check("maps: a landmark with no drive throws", throws(() => kit.maps("myrtle-trace", [{ id: "hosp_mcleod", name: "McLeod", kind: "hospital" }], { regionCaption: "map", closeCaption: "map" }), /no landmark or drive/));
check("maps: an unknown community throws", throws(() => kit.maps("nowhere", picks, {}), /no places.json entry/));
check("mapFigure: says map, then the credit", kit.mapFigure('<svg role="img" aria-label="A map of twelve places">x</svg>', "Twelve places on a map.").includes("Twelve places on a map. Map data:"));

/* ---- placesMap: the four communities and the hospitals on one map ---- */
const many = [...places.communities.map((c) => ({ name: c.name, lat: c.lat, lon: c.lon, href: "#" + c.slug })),
  ...["hosp_mcleod", "hosp_gsmc", "hosp_cmc", "hosp_tidelands"].map((id, i) => ({ name: `Hospital ${i + 1}`, lat: places.landmarks.find((l) => l.id === id).lat, lon: places.landmarks.find((l) => l.id === id).lon }))];
const pm = kit.placesMap("Kit test", many, { caption: "Eight places on a map." });
check("placesMap: a figure with the map and the caption, then the key when a name had no room",
  /^<figure><svg [^>]*role="img"/.test(pm.html) && pm.html.includes("Eight places on a map. Map data:") && (pm.map.unlabelled.length ? pm.html.endsWith(pm.map.key) : !pm.html.includes("c3-map-key")));
check("placesMap: o.key shows the key always", kit.placesMap("Kit test", many, { caption: "A map.", key: true }).html.includes('<ol class="c3-map-key"'));
check("placesMap: a caption that does not say map throws", throws(() => kit.placesMap("Kit test", many, { caption: "Eight places." }), /must say "map"/));

/* ---- photoSet ---- */
const ph = kit.photoSet({ aerialWidth: "760px" });
const css = ph.css();
check("photoSet: css once a page, with the kit rules and the aerial width", /\.c3-aerial \.c3ph-hero/.test(css) && /max-width:760px\}<\/style>$/.test(css) && throws(() => ph.css(), /twice/));
const over = ph.aerial("myrtle-trace-from-above", "Myrtle Trace from above.");
const river = ph.aerial("conway-riverwalk-boardwalk", "The riverwalk in Conway.", { closeUp: true });
check("photoSet: an aerial loads lazily and is shown whole", /^<div class="c3-aerial">/.test(over) && /loading="lazy"/.test(over) && !/fetchpriority/.test(over));
check("photoSet: a close view takes its own class", /^<div class="c3-aerial c3-aerial-close">/.test(river));
check("photoSet: a refused photo throws", throws(() => ph.aerial("broadway-at-the-beach-night", "x"), /not used in this batch/));
const cr = ph.credits();
check("photoSet: credits list every photo shown, in order, then the ImageObjects", cr.indexOf("aerial photo") >= 0 && /application\/ld\+json/.test(cr) && ph.used().length === 2);
check("photoSet: the overview with crops is the page image", Array.isArray(ph.pageImages()) && ph.pageImages().length === 3);
{ const noCss = kit.photoSet(); noCss.aerial("conway-main-street", "x");
  check("photoSet: credits without the photo CSS throws (B22)", throws(() => noCss.credits(), /photo CSS missing/)); }
check("photoSet: a share photo not on the page throws", throws(() => kit.photoSet().share("conway-main-street").credits()));

/* ---- lesson L34: the general helpers live here, not in a batch kit ---- */
const kit55 = fs.readFileSync(path.join(BATCH, "specs", "_55-plus-kit.js"), "utf8");
check("the 55+ kit loads page-kit.js and keeps no copy of the moved helpers",
  /require\(path\.join\(BB, "tools", "page-kit\.js"\)\)/.test(kit55) && !/function (?:story|glance|photoSet|prosCons|maps)\b|const KIT_CSS|PC_CSS/.test(kit55));
check("the 55+ kit keeps its exports", /module\.exports = \{ h, maps, story, glance, photoSet, compareTable, atAGlance, icon, CREDIT2, prosCons \}/.test(kit55));

console.log(failures ? `\n${failures} control(s) failed` : "\nall controls pass");
process.exitCode = failures ? 1 : 0;
