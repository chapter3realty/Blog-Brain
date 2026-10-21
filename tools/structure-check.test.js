#!/usr/bin/env node
/*
 * Controls for structure-check.js. The firing controls are built from the batch 2026-10-b previews the owner
 * read on 2026-10-14 (third read): the gated page's three maps, two keys and "What are you looking for?"
 * table; the best-neighborhoods page's glance row and feature legend; the no-HOA page's short answer;
 * "The facts:", "At a glance:", "With no HOA fee:" and "The trade-off:" lines; the mid-page offer box
 * ("Send me the list") and the in-copy link "find out how the gate works", neither of which offers a place.
 * The quiet controls are real copy that must not fire: a short opening, the "On this page" list, the
 * JSON-LD ItemList, SVG labels and alt text in the word count, the no-HOA boat and truck table after the
 * entries, "Example:" over a labelled story, a colon inside a sentence, the offers CRAFT 3 asks for, and a
 * how-to page with numbered steps.
 *
 *   node tools/structure-check.test.js
 */
"use strict";
const fs = require("fs"), os = require("os"), path = require("path");
const { spawnSync } = require("child_process");
const { analyze, variants, fieldOnly, measure } = require("./structure-check.js");
let failures = 0;
const ok = (name, cond, extra = "") => { if (!cond) { failures++; console.log(`FAIL ${name} ${extra}`); } else console.log(`ok   ${name}`); };

/* ------------------------------------------------------------ real copy */

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const GATED = [
  ["Tidewater Plantation", "a 1990 golf course beside the Cherry Grove marsh", "Tidewater began with its golf course. Ken Tomlinson, a Columbia lawyer who also designed courses, found a 600-acre site on the Intracoastal Waterway. Hurricane Hugo delayed the work, and the course opened in 1990. Golf Digest and Golf Magazine both named it the best new public course in America that year."],
  ["Seaside Plantation", "lakes and shag festivals near the ocean", "Seaside Plantation's houses sit on curving streets beside dark lakes, a few minutes from the ocean in North Myrtle Beach. Owners walk the lake paths in the evening."],
  ["Barefoot Resort", "four golf courses that opened together in 2000", "Barefoot Resort opened four golf courses at the same time in April 2000, by Pete Dye, Tom Fazio, Davis Love III and Greg Norman. No other developer in the United States has opened four new courses at once."],
  ["Grande Dunes", "golf along the Intracoastal Waterway and an oceanfront club", "Grande Dunes covers about 2,200 acres, with walking and biking trails. Its members' beach club is on the ocean, and its marina is on the waterway."],
  ["Prestwick", "a Pete and P.B. Dye course from 1989", "Prestwick was founded by the Jackson family, who also created the Ocean Lakes campground. Its golf course, designed by Pete Dye and his son P.B. Dye, opened in 1989 as a private club with a skins game among four PGA Tour players."],
  ["Bellwood Landing", "houses on ponds in Prince Creek West", "Bellwood Landing is near TPC Myrtle Beach, a Tom Fazio course that opened in 1999. In 2000 it hosted the Senior PGA Tour Championship, which Tom Watson won."],
  ["Wachesaw Plantation", "a private club on a bluff above the Waccamaw River", "Before the neighborhoods were planned, archaeologists, among them James Michie of the University of South Carolina, dug at Wachesaw. Some of their finds are on display in the clubhouse. The members own the club. Kimbel's restaurant stands on the bluff above the river."],
  ["Willbrook Plantation", "rice-field history along a Dan Maples course", "Willbrook was part of a land grant made in 1711. After the Civil War, hurricanes in the 1890s and 1900s wrecked the rice fields' dikes, and rice growing on these rivers ended. Dan Maples' golf course opened in 1988."],
];
const FACTS = {
  "Tidewater Plantation": "a gatehouse on Little River Neck Road, where visitors check in. Homes usually sell for about $625,000, and the HOA fee is about $230 a month.",
  "Prestwick": "a gatehouse at the main gate off Highway 544. Homes usually sell for about $480,000, and the HOA fee is about $190 a month.",
};
const OFFER_BOX = `<div style="border-left:3px solid var(--brass)"><p style="font-weight:600">Get this week's list of homes for sale in gated neighborhoods.</p><p>Tell us your price range and the area you like. We will email you this week's homes for sale in the gated neighborhoods that fit.</p><a class="btn btn-brass btn-lg" href="/contact/">Get this week's list</a></div>`;
const BYLINE = `<p>By <strong>Devin Day</strong>, Operations Officer · Reviewed by <strong>Tim Nash</strong>, Broker-in-Charge · <span>Updated October 13, 2026</span></p>`;
const SHORT = `<section><div class="wrap"><p>The short answer</p><p>Tidewater Plantation, Barefoot Resort's Dye Estates and Grande Dunes are among the gated neighborhoods near Myrtle Beach. In most, the fee to the homeowners association (HOA) is about $90 to $400 a month.</p></div></section>`;
const offerFor = (name) => `<p><a class="btn btn-brass" href="/contact/?place=${encodeURIComponent(name)}">See homes for sale in ${name}</a></p>`;
const toc = (names) => `<nav><p>On this page</p><ul>${names.map((n) => `<li><a href="#${slug(n)}">${n}</a></li>`).join("")}</ul></nav>`;
/* A map of numbered dots, its SVG labels naming the places, as the page kit draws it. */
const mapFig = (names, from = 1) => `<figure><svg role="img" aria-label="Gated neighborhoods: a map of ${names.length} places, numbered ${names.map((n, i) => `${from + i}, ${n}`).join("; ")}"><text>5 MILES</text>${names.map((n, i) => `<text>${from + i}</text><text>${n.split(" ")[0]}</text>`).join("")}</svg><figcaption>Map of the neighborhoods ${from} to ${from + names.length - 1} on this page. Map data: U.S. Census Bureau TIGER/Line; Horry County GIS.</figcaption></figure>`;
const mapKey = (names) => `<ol class="c3-map-key">${names.map((n) => `<li><a href="#${slug(n)}">${n}</a></li>`).join("")}</ol>`;
/* The gated page's legend: entry numbers linked to the entries. */
const legendTable = (rows) => `<div><table><caption>What are you looking for?</caption><thead><tr><th>You want</th><th>Entries</th></tr></thead><tbody>${rows.map(([want, ns]) => `<tr><td>${want}</td><td>${ns.map((n) => `<a href="#${slug(GATED[n - 1][0])}">${n}</a>`).join(", ")}</td></tr>`).join("")}</tbody></table></div>`;
const comparison = (names) => `<section><div class="wrap"><h2>How do the gated neighborhoods compare on price?</h2><table><caption>All ${names.length} neighborhoods: what homes sell for and the HOA fee</caption><tr><th>Neighborhood</th><th>Homes usually sell for</th></tr>${names.map((n) => `<tr><td>${n}</td><td>About $600,000</td></tr>`).join("")}</table></div></section>`;

function page({ h1 = "Where are the gated communities in Myrtle Beach?", top = "", entries = GATED, entryHtml = () => "", after = "", head = "" } = {}) {
  const sec = ([name, rest, para], i) => `<section id="${slug(name)}"><div class="wrap"><h2 data-toc="${name}">${i + 1}. ${name}: ${rest}</h2><p>${para}</p>${entryHtml(name, i)}</div></section>`;
  return `<!doctype html><html><head><title>t</title>${head}</head><body><header><nav><a href="/">Home</a></nav><p>${"Myrtle Beach real estate ".repeat(60)}</p></header><main>` +
    `<div class="detail-hero"><h1 class="detail-h1">${h1}<br><em>From North Myrtle Beach to Pawleys Island.</em></h1>${BYLINE}</div>` +
    top + entries.map(sec).join("\n") + after +
    `<section class="idx-search"><h2 class="idx-title">Find your property</h2><p>${entries.map((e) => e[0]).join(", ")}</p></section>` +
    `</main><footer><p>${entries.map((e) => e[0]).join(", ")}</p></footer></body></html>`;
}
const NAMES = GATED.map((g) => g[0]);
/* A clean page: a short opening, one map whose key is the selection guide, an offer in each entry, one table after. */
const GUIDE = `<ol class="c3-map-key">${GATED.map(([n, rest]) => `<li><a href="#${slug(n)}">${n}</a>: ${rest}</li>`).join("")}</ol>`;
const CLEAN = { top: SHORT + `<section><div class="wrap">${OFFER_BOX}</div></section><section><div class="wrap">${toc(NAMES)}</div></section><section><div class="wrap"><h2>Where are the gated neighborhoods near Myrtle Beach?</h2>${mapFig(NAMES)}${GUIDE}</div></section>`,
  entryHtml: (n) => offerFor(n), after: comparison(NAMES) };

/* ------------------------------------------------------------ the clean page */
{
  const r = analyze(page(CLEAN));
  ok("clean: a short opening, one map with its guide, an offer per place and one table pass --strict", r.strict.pass, JSON.stringify(r.strict));
  ok("clean: a list of 8 places, named before the colon", r.isList && r.entries.length === 8 && r.entries[2].name === "Barefoot Resort", JSON.stringify(r.entries.slice(0, 3)));
}
/* Round 15: a homes strip slot is the place's offer (owner, 2026-10-21: "the IDX will act as our CTA"). */
{
  const strip = (n) => `<div class="hx-strip" data-place="${slug(n)}" data-name="${n}"></div>`;
  const r = analyze(page({ ...CLEAN, entryHtml: strip }));
  ok("strip: an entry whose only offer is a homes strip passes --strict", r.strict.pass && r.offers.every((o) => o.ok), JSON.stringify(r.strict));
  const r2 = analyze(page({ ...CLEAN, entryHtml: () => "<p>No offer and no strip here.</p>" }));
  ok("strip: an entry with neither an offer nor a strip still fails --strict", !r2.strict.pass && r2.offers.some((o) => !o.ok), JSON.stringify(r2.strict));
}

/* ------------------------------------------------------------ 1. preamble */
{
  /* The best-neighborhoods page's opening, 2026-10-14: glance row, short answer, offer, two map captions, a
     town note and a feature legend. 391 words on the real page. */
  const best = `<div class="detail-media"><ul class="c3-glance"><li><span><strong>Walk to the beach</strong><span class="t">Cherry Grove, Surfside Beach</span></span></li><li><span><strong>Golf</strong><span class="t">Pine Lakes, Tidewater, Barefoot</span></span></li></ul></div>` +
    `<section><div class="wrap"><p>The short answer</p><p>For walking to the beach, the best neighborhoods in Myrtle Beach are Cherry Grove in North Myrtle Beach and the ocean side of Surfside Beach. For golf, Pine Lakes, Tidewater Plantation and Barefoot Resort are built around their courses. For big pools at a lower price, The Farm in Carolina Forest has two, and its houses sell for about $350,000.</p></div></section>` +
    `<section><div class="wrap"><p>Tell us what you want nearby. We will send three neighborhoods that fit, with the homes for sale in each.</p><p>One of our agents sends the list. There is no charge.</p><a class="btn btn-brass btn-lg" href="/contact/">Get three neighborhoods</a></div></section>` +
    `<section><div class="wrap"><h2>Where are the best neighborhoods in Myrtle Beach?</h2><p>Eight of the fifteen are in Carolina Forest and Myrtle Beach, on the closer map. The other seven run from Tidewater Plantation in the north to Prince Creek in the south.</p>` +
    `<figure><svg></svg><figcaption>Map of the seven neighborhoods outside Carolina Forest and Myrtle Beach, numbered as on this page. The box marks the eight neighborhoods on the closer map below. Map data: U.S. Census Bureau TIGER/Line; Horry County GIS.</figcaption></figure>` +
    `<figure><svg></svg><figcaption>Closer map of the eight neighborhoods in Carolina Forest and Myrtle Beach, numbered as on this page. Map data: U.S. Census Bureau TIGER/Line; Horry County GIS.</figcaption></figure>` +
    `<p>Myrtle Beach, North Myrtle Beach, Surfside Beach and Conway are towns. Carolina Forest, Forestbrook and Murrells Inlet are areas outside any town. The rest are neighborhoods. To choose a town first, read <a href="/towns/">which town near Myrtle Beach fits you</a>.</p>` +
    `<p><strong>Walk to the beach:</strong> Cherry Grove, Surfside Beach, ocean side.<br><strong>Golf:</strong> Tidewater Plantation, Barefoot Resort, Wild Wing Plantation, Pine Lakes.<br><strong>Pools:</strong> Waterbridge, The Farm at Carolina Forest, Plantation Lakes, Berkshire Forest.<br><strong>A lower price:</strong> The Farm at Carolina Forest, Deerfield Plantation area, Berkshire Forest.<br><strong>A newer house:</strong> Waterbridge, Wild Wing Plantation, Forestbrook Estates.</p></div></section>`;
  const r = analyze(page({ ...CLEAN, top: best + `<section><div class="wrap"><p>${"Every one of these neighborhoods has its own story, told below. ".repeat(4)}</p></div></section>` }));
  ok("1 fires: the best-neighborhoods opening, with a paragraph more, is over 350 words", r.preamble.words > 350 && r.strict.reasons.some((x) => /^preamble/.test(x)), JSON.stringify(r.preamble.words));
  const words = analyze(page({ ...CLEAN, top: best })).preamble.words;
  ok("1: the real opening counts what a reader reads: the glance row, captions, the offer box, the legend", words > 300 && words < 350, String(words));
}
{
  /* Navigation, SVG labels, alt text, scripts, a hidden block and the site header do not count. */
  const many = Array.from({ length: 400 }, (_, i) => `word${i}`).join(" ");
  const top = SHORT + `<section><div class="wrap"><nav><p>On this page</p><ul><li>${many}</li></ul></nav><figure><svg><text>${many}</text></svg><img src="x.jpg" alt="${many}"></figure><script>var s = "${many}";</script><div hidden><p>${many}</p></div></div></section>`;
  const r = analyze(page({ ...CLEAN, top }));
  ok("1 quiet: navigation, SVG text, alt text, scripts and hidden text are not counted", r.preamble.words < 120, String(r.preamble.words));
  const cap = analyze(page({ ...CLEAN, top: SHORT + `<figure><img src="x.jpg" alt=""><figcaption>${many}</figcaption></figure>` }));
  const cells = analyze(page({ ...CLEAN, top: SHORT + `<table><tr><td>${many}</td></tr></table>` }));
  ok("1 fires: figure captions and table cells count", cap.preamble.words > 400 && cells.preamble.words > 400, `${cap.preamble.words} ${cells.preamble.words}`);
  ok("1: --max-words moves the line", !analyze(page(CLEAN), { preambleMax: 20 }).strict.pass);
}

/* ------------------------------------------------------------ 2. list repetition */
{
  /* The gated page, 2026-10-14: three maps and two keys (one block), then the "What are you looking for?" table,
     whose entry numbers link to the entries. */
  const top = SHORT + `<section><div class="wrap">${toc(NAMES)}</div></section><section><div class="wrap"><h2>Where are the gated neighborhoods near Myrtle Beach?</h2><style>.x{}</style>` +
    mapFig(NAMES.slice(0, 4)) + mapFig(NAMES.slice(4, 6), 5) + mapKey(NAMES.slice(0, 6)) + mapFig(NAMES.slice(6), 7) + mapKey(NAMES.slice(6)) +
    legendTable([["Golf", [1, 3, 4, 5, 7, 8]], ["The ocean", [4]], ["55+", [2, 6]]]) + `</div></section>`;
  const r = analyze(page({ ...CLEAN, top }));
  const kinds = r.repetition.before.filter((b) => b.kind !== "nav").map((b) => b.kind);
  ok("2 fires: the gated maps and the legend table are two blocks", r.repetition.beforeCount === 2 && kinds.join() === "map,table" && r.strict.reasons.some((x) => /list repeated: 2 blocks before/.test(x)), JSON.stringify(r.repetition));
  ok("2: three map figures and two keys are one map block", r.repetition.before.filter((b) => b.kind === "map").length === 1);
  ok("2: entry numbers linked to the entries name them", r.repetition.before.find((b) => b.kind === "table").names === 8);
  ok("2 quiet: the On this page list is listed, not counted", r.repetition.before.some((b) => b.kind === "nav") && !kinds.includes("nav"));
  ok("2: --count-nav counts it", analyze(page({ ...CLEAN, top }), { countNav: true }).repetition.beforeCount === 3);
}
{
  /* The best-neighborhoods page: a glance row naming 8 of 15, a map, and a feature legend in one paragraph. */
  const BEST = ["Tidewater Plantation", "Cherry Grove", "Barefoot Resort", "Wild Wing Plantation", "Waterbridge", "Grande Dunes", "The Farm at Carolina Forest", "Plantation Lakes"]
    .map((n, i) => [n, "golf and pools", GATED[i][2]]);
  const top = `<div class="detail-media"><ul class="c3-glance"><li><strong>Walk to the beach</strong> <span>Cherry Grove</span></li><li><strong>Golf</strong> <span>Tidewater, Barefoot, Wild Wing</span></li><li><strong>Big pools</strong> <span>The Farm, Waterbridge</span></li></ul></div>` + SHORT +
    `<section><div class="wrap"><p><strong>Walk to the beach:</strong> Cherry Grove.<br><strong>Golf:</strong> Tidewater Plantation, Barefoot Resort, Wild Wing Plantation.<br><strong>Pools:</strong> Waterbridge, The Farm at Carolina Forest, Plantation Lakes.</p></div></section>`;
  const r = analyze(page({ h1: "What are the best neighborhoods in Myrtle Beach?", entries: BEST, top, entryHtml: (n) => offerFor(n) }));
  ok("2 fires: the glance row and the feature legend", r.repetition.beforeCount === 2 && r.repetition.before.map((b) => b.kind).join() === "list,prose", JSON.stringify(r.repetition.before));
  ok("2: short forms count (Tidewater, Barefoot, Wild Wing, The Farm)", r.repetition.before[0].names === 6, JSON.stringify(r.repetition.before[0]));
}
{
  /* The JSON-LD ItemList and a short answer naming 3 of 8 never count. */
  const ld = `<script type="application/ld+json">${JSON.stringify({ "@type": "ItemList", itemListElement: NAMES.map((n, i) => ({ "@type": "ListItem", position: i + 1, name: n })) })}</script>`;
  const r = analyze(page({ ...CLEAN, head: ld, top: ld + CLEAN.top }));
  ok("2 quiet: the JSON-LD ItemList is not a block", r.repetition.beforeCount === 1 && r.strict.pass, JSON.stringify(r.repetition));
}
{
  /* The no-HOA page: entries are towns. "North Myrtle Beach" is not also "Myrtle Beach", and "near Myrtle
     Beach" is the page's area, not entry 7. */
  const TOWNS = ["Aynor", "Loris", "Conway", "North Myrtle Beach", "Surfside Beach and Garden City", "Murrells Inlet", "Myrtle Beach", "Little River"].map((n) => [n, "houses on big lots", "In the late 1800s Loris was a farm center for the country around it. It grew up around a railroad depot."]);
  const top = `<section><div class="wrap"><p>The short answer</p><p>Most homes with no HOA fee are in Aynor, Loris and Conway, or on older beach streets in North Myrtle Beach. About a quarter of the homes for sale near Myrtle Beach have no homeowners association (HOA) fee.</p></div></section>`;
  const boats = `<section><div class="wrap"><h2>Can you keep a boat or a work truck at a home with no HOA?</h2><table><caption>Where you can keep a boat or a work truck at a house</caption><tr><th>Where the home is</th><th>A boat, camper or trailer</th></tr><tr><td>Outside the towns</td><td>No county rule on where</td></tr><tr><td>Inside Myrtle Beach</td><td>Over 16 feet: not in the front yard</td></tr><tr><td>Inside North Myrtle Beach</td><td>Behind the house front, or a carport</td></tr><tr><td>Inside Conway</td><td>Side yard, back yard or carport</td></tr><tr><td>Inside Surfside Beach</td><td>Two boats or trailers (not in a garage)</td></tr><tr><td>Inside Loris</td><td>Over 17 feet: not near the lot's edges</td></tr></table></div></section>`;
  const r = analyze(page({ h1: "Where can you buy a home with no HOA in Myrtle Beach?", entries: TOWNS, top, entryHtml: (n) => offerFor(n), after: comparison(TOWNS.map((t) => t[0])) + boats }));
  ok("2 quiet: a short answer naming 4 of 8 towns is one block, and \"near Myrtle Beach\" is not entry 7", r.repetition.beforeCount === 1 && r.repetition.before[0].names === 4, JSON.stringify(r.repetition.before));
  ok("2 quiet: after the entries, the comparison table and a boat-rules table naming 5 of 8 towns", r.repetition.afterCount === 1 && r.strict.pass, JSON.stringify(r.repetition.after) + JSON.stringify(r.strict));
  const map = analyze(page({ h1: "Where can you buy a home with no HOA in Myrtle Beach?", entries: TOWNS, top: `<figure><svg aria-label="Homes with no HOA fee: a map of 8 places, numbered 1, Aynor; 7, Myrtle Beach"><text>7</text><text>Myrtle Beach 19%</text></svg><figcaption>Map of the eight areas.</figcaption></figure>`, entryHtml: (n) => offerFor(n) }));
  ok("2: the page's own area counts with its number (a map label \"7 Myrtle Beach\")", map.repetition.before.length === 0 && variants("Myrtle Beach").includes("Myrtle Beach"), JSON.stringify(map.repetition));
  const two = analyze(page({ entries: GATED, top: SHORT, entryHtml: (n) => offerFor(n), after: comparison(NAMES) + `<section><div class="wrap"><h2>Prices</h2><figure class="c3-bars"><table><caption>What homes sold for</caption>${NAMES.map((n) => `<tr><th>${n}</th><td>$1</td></tr>`).join("")}</table></figure></div></section>` }));
  ok("2 fires: after the entries, a comparison table and a price chart of every place", two.repetition.afterCount === 2 && two.strict.reasons.some((x) => /after the last entry/.test(x)), JSON.stringify(two.repetition.after));
}
{
  const v = variants("The Farm at Carolina Forest", "The Farm at Carolina Forest");
  const s = variants("Surfside Beach and Garden City", "5. Surfside and Garden City");
  const g = variants("Myrtle Beach Golf and Yacht Club", "Golf and Yacht Club");
  ok("names: short forms", v.includes("The Farm") && variants("Tidewater Plantation").includes("Tidewater") && s.includes("Surfside Beach") && s.includes("Garden City") && g.includes("Golf and Yacht Club") && !g.includes("Yacht Club"), JSON.stringify([v, s, g]));
}

/* ------------------------------------------------------------ 3. label lines */
{
  const r = analyze(page({ ...CLEAN, entryHtml: (n) => offerFor(n) + (FACTS[n] ? `<p style="border-left:3px solid var(--brass)"><strong>The facts:</strong> ${FACTS[n]}</p>` : "") }));
  ok("3 fires: \"The facts:\" in the gated entries", r.labels.length === 2 && r.labels.every((l) => l.label === "The facts:") && !r.strict.pass, JSON.stringify(r.labels));
  const best = analyze(page({ ...CLEAN, entryHtml: (n, i) => offerFor(n) + (i === 0 ? `<p><strong>At a glance:</strong> houses for sale were mostly built around 2000 and have about 2,700 square feet. Houses usually sell for about $600,000.</p>` : "") }));
  ok("3 fires: \"At a glance:\" (best neighborhoods)", best.labels.length === 1 && best.labels[0].label === "At a glance:");
  const nohoa = analyze(page({ ...CLEAN, entryHtml: (n, i) => offerFor(n) + (i === 0 ? `<div class="c3-entry-facts"><p><strong>With no HOA fee:</strong> typical lot about an acre; typical list price about $370,000.<br><strong>The trade-off:</strong> the nearest hospital, Conway Medical Center, is about 30 minutes away by car.</p></div>` : "") }));
  ok("3 fires: a bold label on each line (\"With no HOA fee:\", then \"The trade-off:\" after a line break)", nohoa.labels.map((l) => l.label).join("|") === "With no HOA fee:|The trade-off:", JSON.stringify(nohoa.labels));
  const plain = analyze(page({ ...CLEAN, entryHtml: (n, i) => offerFor(n) + (i === 1 ? `<ul><li>In short: a gate at the entrance and homes at about $720,000.</li></ul>` : "") }));
  ok("3 fires: a plain \"In short:\" list item, no bold", plain.labels.length === 1 && plain.labels[0].label === "In short:");
  ok("3: --no-bold-labels keeps the named labels and drops the rest", analyze(page({ ...CLEAN, entryHtml: (n, i) => offerFor(n) + (i === 0 ? `<p><strong>The trade-off:</strong> the drive.</p><p><strong>The facts:</strong> a gate.</p>` : "") }), { boldLabels: false }).labels.map((l) => l.label).join() === "The facts:");
  ok("3: --labels replaces the list", analyze(page({ ...CLEAN, entryHtml: (n, i) => offerFor(n) + (i === 0 ? `<p>Price: about $600,000.</p>` : "") }), { labels: ["price"] }).labels.length === 1);
}
{
  /* Quiet: a colon inside a sentence, a bold name, "Example:" over a labelled story (CRAFT 6), a label outside the entries. */
  const html = page({ ...CLEAN, top: CLEAN.top + `<p><strong>Sources:</strong> county deeds.</p><p><strong>Golf:</strong> 1, 3, 4.</p>`,
    entryHtml: (n, i) => offerFor(n) + (i === 0 ? `<p>Its lots are big: most are close to half an acre, and some along Collins Creek are larger than an acre and a half.</p><p>The course is <strong>Tom Fazio's</strong>, and it opened in 1999.</p><div class="c3-story"><p><strong>Example:</strong> Dana rents an apartment in Myrtle Beach and wants a house of her own in Conway.</p></div>` : "") });
  const r = analyze(html);
  ok("3 quiet: a colon in a sentence, a bold name, \"Example:\", and labels outside the entries", r.labels.length === 0 && r.strict.pass, JSON.stringify(r.labels));
}

/* ------------------------------------------------------------ 4. an offer per place */
{
  /* The previews of 2026-10-14: no entry has an offer. The mid-page box sits inside entry 4, and an entry links
     to the contact page with "find out how the gate works". Neither offers the place. */
  const r = analyze(page({ ...CLEAN, entryHtml: (n, i) => i === 3 ? OFFER_BOX : i === 5 ? `<p>The HOA can tell you; we <a href="/contact/" style="color:var(--navy)">find out how the gate works</a> for you.</p>` : i === 6 ? `<p>See <a href="/gated-communities/wachesaw/">Wachesaw Plantation</a> on its own page.</p>` : "" }));
  ok("4 fires: every entry without an offer for its place", r.offers.filter((o) => !o.ok).length === 8 && r.strict.reasons.some((x) => /8 of 8 entries have no offer/.test(x)), JSON.stringify(r.offers.filter((o) => o.ok)));
  ok("4 fires: the page's own offer box and an in-copy contact link do not name the place", /does not name/.test(r.offers[3].near || "") && /does not name/.test(r.offers[5].near || ""), JSON.stringify([r.offers[3], r.offers[5]]));
  ok("4 fires: a link that names the place but goes to another page", !r.offers[6].ok);
}
{
  /* Quiet: CRAFT 3's examples, a button in a form, a link to #contact that names the place, an absolute URL. */
  const forms = [
    (n) => offerFor(n),
    (n) => `<a class="btn" href="https://chapter3realty.com/contact/">Book a showing in ${n}</a>`,
    (n) => `<form action="/contact/"><input type="hidden" name="place" value="${n}"><button type="submit">Book a tour</button></form>`,
    (n) => `<p>Like it? <a href="#contact">Ask us about ${n}</a>.</p>`,
  ];
  const r = analyze(page({ ...CLEAN, entryHtml: (n, i) => forms[i % forms.length](n) }));
  ok("4 quiet: \"See homes for sale in ...\", \"Book a showing in ...\", a form's \"Book a tour\", a #contact link naming the place", r.offers.every((o) => o.ok) && r.strict.pass, JSON.stringify(r.offers.filter((o) => !o.ok)));
}

/* ------------------------------------------------------------ 5. field sentences */
{
  const fields = ["Homes usually sell for about $625,000, and the HOA fee is about $230 a month.", "Typical lot about an acre; typical list price about $370,000.",
    "houses for sale were mostly built around 2000 and have about 2,700 square feet.", "Houses here date from 2000 to 2006; they usually sell for about $500,000, and the HOA fee is about $145 a month.",
    "Houses in the older part typically have about 1,350 square feet, on about an eighth of an acre."];
  const prose = ["Leatherleaf has 62 houses of one or two floors around a pond, with the Love course on every side.", "For a gate, a pool and a clubhouse, the HOA fee is about $90 a month.",
    "Barefoot Resort opened four golf courses at the same time in April 2000, by Pete Dye, Tom Fazio, Davis Love III and Greg Norman.", "Kimbel's restaurant stands on the bluff above the river."];
  ok("5 fires: price, fee, lot, year built and square feet sentences carry only fields", fields.every(fieldOnly), fields.filter((s) => !fieldOnly(s)).join(" / "));
  ok("5 quiet: a sentence with a pond, a course, a pool or a restaurant in it", !prose.some(fieldOnly), prose.filter(fieldOnly).join(" / "));
  const r = analyze(page({ ...CLEAN, entryHtml: (n, i) => offerFor(n) + (i === 0 ? `<p>${fields.slice(0, 4).map((x) => x[0].toUpperCase() + x.slice(1)).join(" ")}</p>` : "") }));
  ok("5: an entry of mostly fields is flagged, and never fails --strict", r.fields[0].flag && r.fields[0].share >= 0.5 && !r.fields[1].flag && r.strict.pass, JSON.stringify(r.fields.slice(0, 2)));
}

/* ------------------------------------------------------------ pages that are not lists */
{
  const steps = [["Get pre-approved", "know your budget", "A lender looks at your income and your debts."], ["Find an agent", "one who knows the area", "Ask how many homes they sold here last year."], ["Make an offer", "with the right terms", "Your agent writes the offer and sends it."]];
  const r = analyze(page({ h1: "How do you buy a home in Myrtle Beach?", entries: steps, top: SHORT }));
  ok("not a list: numbered steps on a how-to page are not places", !r.isList && r.strict.pass, JSON.stringify(r.strict));
  const one = analyze(`<main><h1>What is it like to live in The Farm at Carolina Forest?</h1><p>${"word ".repeat(600)}</p><h2>What are the homes like?</h2><p>Houses.</p><h2>The Farm FAQ</h2></main>`);
  ok("not a list: a page about one place passes checks 1, 2 and 4", !one.isList && one.strict.pass && one.preamble === null);
}

/* ------------------------------------------------------------ the command line, and pixels */
{
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "structure-check-"));
  const bad = path.join(dir, "bad.html"), good = path.join(dir, "good.html");
  fs.writeFileSync(bad, page({ ...CLEAN, entryHtml: (n) => FACTS[n] ? `<p><strong>The facts:</strong> ${FACTS[n]}</p>` : "" }));
  fs.writeFileSync(good, page(CLEAN));
  const run = (args) => spawnSync(process.execPath, [path.join(__dirname, "structure-check.js"), ...args, "--no-px"], { encoding: "utf8" });
  const plain = run([bad]), strict = run([bad, "--strict"]), json = run([bad, "--json"]), pass = run([good, "--strict"]);
  ok("cli: the report exits 0 and names the label and the missing offers", plain.status === 0 && /The facts:/.test(plain.stdout) && /An offer per place: 0 of 8/.test(plain.stdout) && /strict: fails/.test(plain.stdout), plain.stdout.slice(0, 400) + plain.stderr);
  ok("cli: --strict exits 1 on a failing page and 0 on a clean one", strict.status === 1 && pass.status === 0, `${strict.status} ${pass.status} ${pass.stdout.slice(-300)}`);
  let j = null; try { j = JSON.parse(json.stdout); } catch { /* checked below */ }
  ok("cli: --json gives the findings", j && j.preamble && Array.isArray(j.labels) && Array.isArray(j.offers) && Array.isArray(j.fields) && j.strict.pass === false);
  ok("cli: --labels and --max-words parse", run([good, "--strict", "--max-words", "10"]).status === 1 && run([bad, "--strict", "--labels", "nothing", "--no-bold-labels"]).stdout.includes("Label lines in the entries: 0"));
  ok("cli: a missing file exits 2", run([path.join(dir, "none.html")]).status === 2);

  (async () => {
    let px = null, longPx = null;
    try {
      px = await measure(good, analyze(page(CLEAN)).entries[0].title);
      const long = path.join(dir, "long.html");
      fs.writeFileSync(long, page({ ...CLEAN, top: CLEAN.top + `<section><p>${"More words before the first place. ".repeat(200)}</p></section>` }));
      longPx = await measure(long, analyze(page(CLEAN)).entries[0].title);
    } catch (err) { console.log(`skip  pixel check (${String(err.message).split("\n")[0]})`); }
    if (px === null && longPx === null) console.log("skip  pixel check (Playwright not installed here)");
    else ok("px: the distance to entry 1 at 390 px grows with the opening", px > 0 && longPx > px + 1000, `${px} ${longPx}`);
    fs.rmSync(dir, { recursive: true, force: true });
    console.log(failures ? `\n${failures} failing` : "\nall controls pass");
    process.exit(failures ? 1 : 0);
  })();
}
