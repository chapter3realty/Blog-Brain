#!/usr/bin/env node
/*
 * Controls for repeat-check.js. Every firing control is built from sentences on the batch 2026-10-b round 8
 * pages that the reviewer (review/OWNER-EYE-8-*.md) named as repetition: the rice sentence in two gated
 * entries, "[designer] course opened in [year]", the street-name lists and the builder-sale sentence on the
 * affordable page, the flood line on best neighborhoods. Every quiet control is real copy that must not
 * fire: varied entries, a drive time said twice, an FAQ answer that repeats the body, the offer box, the
 * facts line, tables, the sources line and the photo credits.
 *
 *   node tools/repeat-check.test.js
 */
"use strict";
const fs = require("fs"), os = require("os"), path = require("path");
const { spawnSync } = require("child_process");
const { analyze, sentences } = require("./repeat-check.js");
let failures = 0;
const ok = (name, cond, extra = "") => { if (!cond) { failures++; console.log(`FAIL ${name} ${extra}`); } else console.log(`ok   ${name}`); };

/* A built page in the site's own markup: numbered H2 entries, a facts line, offer boxes, an FAQ, a table,
   the sources line, photo credits and the FAQ JSON-LD. */
function page({ h1 = "Where are the gated communities in Myrtle Beach?", top = [], entries = [], after = [], faq = [], offers = 0, table = false }) {
  const sec = (h2, inner) => `<section><div class="wrap"><h2>${h2}</h2>${inner}</div></section>`;
  const offer = `<div style="border-left:3px solid var(--brass)"><p style="font-weight:600">Get this week's list of homes for sale in gated neighborhoods.</p><p>Tell us your price range and the area you like. One of our agents will email you this week's homes for sale in the gated neighborhoods that fit.</p><a class="btn btn-brass" href="/contact/">Send me the list</a></div>`;
  const tbl = `<table><caption>In short</caption><tr><th>Drive to the beach</th><td>About 5 minutes</td></tr><tr><th>Drive to Coastal Grand Mall</th><td>About 5 minutes</td></tr></table>`;
  const body = [
    `<div class="detail-hero"><h1 class="detail-h1">${h1}<br><em>From North Myrtle Beach to Pawleys Island.</em></h1></div>`,
    `<p>By <strong>Devin Day</strong>, Operations Officer · Reviewed by <strong>Tim Nash</strong>, Broker-in-Charge</p>`,
    ...top.map((t) => `<p>${t}</p>`),
    offers ? offer : "",
    ...entries.map((e, i) => sec(`${i + 1}. ${e.title}`, e.paras.map((t) => `<p>${t}</p>`).join("") +
      `<figure><img src="x.jpg" alt=""><figcaption>${e.title.split(":")[0]} from above.</figcaption></figure>` +
      (e.facts ? `<p><strong>${e.label || "The facts:"}</strong> ${e.facts}</p>` : "") + (table ? tbl : "") + (offers > 1 && i === 1 ? offer : ""))),
    ...after.map((a) => sec(a.h2, a.paras.map((t) => `<p>${t}</p>`).join(""))),
    faq.length ? sec("Gated communities FAQ", faq.map(([q, a]) => `<h3>${q}</h3><p>${a}</p>`).join("")) : "",
    `<p><strong>Sources:</strong> <a href="#">county deeds</a>, <a href="#">county parcels</a>. Prices are the middle recorded sale in each neighborhood.</p>`,
    `<div class="c3ph-credits"><div class="c3ph-h" id="photo-credits">Photo credits</div><div role="list"><div role="listitem">U.S. government aerial photo, 2023, by the USDA Farm Service Agency, via The National Map.</div><div role="listitem">U.S. government aerial photo, 2023, by the USDA Farm Service Agency, via The National Map.</div><div role="listitem">U.S. government aerial photo, 2023, by the USDA Farm Service Agency, via The National Map.</div></div></div>`,
    offers ? `<section style="background:var(--navy)"><div class="wrap"><h2>Get this week's list of homes for sale in gated neighborhoods.</h2><p>Tell us your price range and the area you like. One of our agents will email you this week's homes for sale in the gated neighborhoods that fit.</p><a class="btn btn-brass" href="/contact/">Send me the list</a></div></section>` : "",
  ].join("\n");
  const ld = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  return `<!doctype html><html><head><title>t</title><script type="application/ld+json">${JSON.stringify(ld)}</script></head><body><header><p>It has a pool and a clubhouse.</p></header><main>${body}<script>var s = "It has a pool and a clubhouse.";</script><style>p{}</style></main><footer><p>It has a pool and a clubhouse.</p></footer></body></html>`;
}

/* ------------------------------------------------------------ real text, round 8 */

const G = {
  tidewater: { title: "Tidewater Plantation: a 1990 golf course beside the Cherry Grove marsh", paras: [
    "Tidewater began with its golf course. Ken Tomlinson, a Columbia lawyer who also designed courses, found a 600-acre site on the Intracoastal Waterway. Hurricane Hugo delayed the work, and the course opened in 1990. Golf Digest and Golf Magazine both named it the best new public course in America that year.",
    "Holes 3 and 12 meet the marsh of the waterway, and hole 4 looks across Cherry Grove Inlet. Many of its homes are houses along the fairways, with a few condo buildings among them.",
    "It has pools with hot tubs, tennis and pickleball courts, bocce, and an oceanfront cabana with parking at Cherry Grove Beach. Cherry Grove's public boat ramp is less than a mile from the middle of the neighborhood."],
    facts: "a gatehouse on Little River Neck Road. Homes usually sell for about $625,000, and the HOA fee is about $230 a month." },
  barefoot: { title: "Barefoot Resort: four golf courses that opened together in 2000", paras: [
    "Barefoot Resort opened four golf courses at the same time in April 2000, by Pete Dye, Tom Fazio, Davis Love III and Greg Norman. No other developer in the United States has opened four new courses at once.",
    "Leatherleaf has 62 houses of one or two floors around a pond, with the Love course on every side."],
    facts: "most of Barefoot Resort is open. In Leatherleaf, the few homes that sold went for about $700,000 to $975,000, and the HOA fee is about $390 a month." },
  prestwick: { title: "Prestwick: a Pete and P.B. Dye course from 1989", paras: [
    "Prestwick was founded by the Jackson family, who also created the Ocean Lakes campground. Its golf course, designed by Pete Dye and his son P.B. Dye, opened in 1989 as a private club with a skins game among four PGA Tour players."],
    facts: "a gatehouse at the main gate off Highway 544. Homes usually sell for about $480,000, and the HOA fee is about $190 a month." },
  bellwood: { title: "Bellwood Landing: near the course that hosted Tom Watson's 2000 win", paras: [
    "Bellwood Landing is near TPC Myrtle Beach, a Tom Fazio course that opened in 1999. In 2000 it hosted the Senior PGA Tour Championship, which Tom Watson won.",
    "Some homes are on ponds. The Park at Prince Creek, close by, has two pools, tennis and pickleball courts, basketball, a playground and a covered pavilion with grills."],
    facts: "a gate on TPC Boulevard. Homes usually sell for about $850,000, and the HOA fee is about $160 a month." },
  wachesaw: { title: "Wachesaw Plantation: a rice plantation on the Waccamaw River", paras: [
    "Wachesaw was a rice plantation on the Waccamaw River, and the state's Rice Culture survey of Georgetown County lists it. The Wachesaw Plantation Club, with its Tom Fazio course, was founded in 1985.",
    "Club membership is optional. Members play golf and tennis and dine at Kimbel's, on the bluff above the river."],
    facts: "a gatehouse at the main gate, reached from Riverwood Drive. Homes usually sell for about $650,000, and the HOA fee is about $150 a month on most homes." },
  willbrook: { title: "Willbrook Plantation: rice-field history along a Dan Maples course", paras: [
    "Willbrook was part of a land grant made in 1711. After the Civil War, hurricanes in the 1890s and 1900s wrecked the rice fields' dikes, and rice growing on these rivers ended.",
    "Dan Maples' golf course opened in 1988. A marked cemetery of enslaved people and the brick remains of the plantation house are beside the course.",
    "It has a pool and a clubhouse. The beach, Beach Club and crabbing docks at Litchfield by the Sea are a golf cart ride away."],
    facts: "a gatehouse at the entrance off Willbrook Boulevard. Few homes sold, so prices ranged widely around $1 million; the HOA fee is about $340 a month." },
  litchfield: { title: "Litchfield Plantation: a 1700s rice plantation and its avenue of oaks", paras: [
    "Litchfield was a rice plantation on the Waccamaw River, and the state's Rice Culture survey of Georgetown County lists it. In the 1800s it belonged to the Tucker family, who also owned Willbrook.",
    "The road in is lined with old live oaks, the Avenue of Oaks. It has a plantation house, built in the 1700s, and an oceanfront beach house on Pawleys Island."],
    facts: "a gatehouse on Kings River Road. Few sold, so prices ranged widely around $1 million; the HOA fee is about $230 a month on most homes." },
  covington: { title: "Covington Lake East: a pool, ponds and a low HOA fee in Carolina Forest", paras: [
    "Covington Lake East was built from about 2008. Many houses back up to its ponds, and the streets have sidewalks. It has a pool and a clubhouse. The shops and restaurants of Carolina Forest Boulevard are less than a mile away."],
    facts: "a gate at the entrance. Homes usually sell for about $390,000, and the HOA fee is about $95 a month." },
  reserve: { title: "The Reserve: Greg Norman's private course and a river marina", paras: [
    "The Reserve's golf club is private. The beach and Beach Club at Litchfield by the Sea are a golf cart ride away."],
    facts: "a gate at the entrance. Homes usually sell for about $1.1 million, and the HOA fee is about $300 a month." },
};

/* Affordable, round 8: the street-name lists (reviewer high 1) and the builder-sale sentence (medium 1). */
const A = [
  { title: "Indigo Grove: new houses off SC 90", paras: ["Indigo Grove is a new neighborhood off SC 90, south of Longs. Its streets include Indigo Grove Drive, Swaying Palm Court and Cambria Drive.", "Every house recorded here in the past year was a Lennar sale. All of them closed within about five months."] },
  { title: "Wynbrooke: townhomes on ponds off SC 707", paras: ["Wynbrooke is a townhome community off SC 707, near Murrells Inlet. Its streets include Wimbledon Way, Wilshire Lane and Williston Loop.", "The townhomes were built in the early 2000s around ponds, and some back onto the water."] },
  { title: "Coopers Bluff: townhomes and houses near the Socastee swing bridge", paras: ["Coopers Bluff is west of Socastee, between SC 544 and the Waccamaw River, about a mile west of the Socastee swing bridge. Its streets include Brackish Drive, Saltgrass Way and Sea Sparrow Street.", "Beverly Homes is building the newest houses. Owners have a pool and a private kayak launch onto the waterway."] },
  { title: "Polo Farms: one-story houses off Glenns Bay Road", paras: ["Polo Farms is off Glenns Bay Road, near the US 17 Bypass. Its streets include Heath Drive, Iree's Way and Seth Lane.", "Every sale here in the past year was a resale. Most houses have one story."] },
  { title: "Victory Point: new townhomes at the old speedway", paras: ["Victory Point is a new townhome community off US 501, by Tanger Outlets. It is being built around the old Myrtle Beach Speedway, where cars ran their last laps in 2020.", "The street names come from racing: Speedway Street, Victory Way and Talladega Drive. Lennar built most of the townhomes sold here in the past year."] },
];

/* Best neighborhoods, round 8: the flood line (reviewer medium 5). */
const B = {
  cherry: { title: "Cherry Grove: beach streets, canals and a 1950s pier in North Myrtle Beach", paras: [
    "Cherry Grove Beach was made in 1950, when an inlet was filled to join Futch Beach to the Nixon family's Cherry Grove land. In 1968 it joined Ocean Drive, Crescent Beach and Windy Hill to form the city of North Myrtle Beach. Later, channels were dug into the marsh behind the beach, and those canals now run behind rows of houses.",
    "Cherry Grove Pier was built in the 1950s, and in 1964 a 1,780-pound tiger shark was landed from it, a world record at the time. Almost every home here is in a high-risk flood zone. With a mortgage, flood insurance comes with the house."],
    facts: "houses for sale were mostly built from the 1960s to the 1980s. Houses usually sell for about $695,000.", label: "At a glance:" },
  market: { title: "The Market Common: a town center on the old Myrtle Beach Air Force Base", paras: [
    "The Market Common is built on the old Myrtle Beach Air Force Base. The base began as an Army Air Corps field in World War II and closed in 1993. The base's land now holds The Market Common, a dozen parks, the airport and a golf course.",
    "Its houses and townhomes are beside a district of shops and offices. Grand Park, with picnic shelters, ball fields and a playground, is a few blocks from the nearest homes. The HOA fee on a townhome is high, and a few homes are in a high-risk flood zone."],
    facts: "townhomes for sale have about 1,700 square feet. Houses usually sell for about $540,000.", label: "At a glance:" },
  deerfield: { title: "Deerfield Plantation area: wooded streets and lake and canal land near Surfside Beach", paras: [
    "The Deerfield Plantation area is a wooded neighborhood near Surfside Beach. Its association owns lake and canal land between the streets.",
    "Unlike the ocean side of Surfside Beach, none of its homes is in a high-risk flood zone. Beach parking takes planning. The closest beach access has parking for golf carts only, and the next one, with a pay lot, is about 8 minutes away by car."],
    facts: "most of the few houses for sale here were built in the 1970s and 1980s. Homes usually sell for about $355,000.", label: "At a glance:" },
  aynor: { title: "Aynor: new houses on about an acre", paras: [
    "Aynor is a small town about 25 minutes by car from downtown Conway. Each September it holds the Aynor Harvest Hoe-Down, a festival the Pilot Club of Aynor started in 1979. State law names the third Saturday in September for it.",
    "Here the land is the draw. More than half of the houses for sale were built in 2024 or later, and almost all are listed as not in a subdivision. Most are outside the town limits, so the county's rules apply to a boat or a camper on the lot.",
    "The county's Galivants Ferry boat landing on the river is about 5 minutes from the center of Aynor."] },
  conway: { title: "Conway: half an acre near the Waccamaw River and an old downtown", paras: [
    "Conway began in the 1730s as Kingston, on a bluff of the Waccamaw River, and it is the county seat. It was later Conwayborough, then Conway. Its Riverwalk runs along the river downtown.",
    "Most of the houses for sale here are outside the city limits and listed as not in a subdivision. About a third were built in 2024 or later. Horry County runs several boat landings on the Waccamaw with a Conway address."] },
};

/* ------------------------------------------------------------ a. the same sentence twice */

{
  const r = analyze(page({ entries: [G.covington, G.willbrook, G.tidewater] }));
  ok("a fires: the same sentence in two entries (gated 7 and 15)", r.identical.some((x) => x.kind === "identical" && /It has a pool and a clubhouse/.test(x.text) && x.count === 2), JSON.stringify(r.identical));
  ok("a: header, footer and scripts are not read", r.identical.every((x) => x.count === 2));
  ok("a fires: --strict fails on an identical body sentence", !r.strict.pass && r.strict.reasons.some((x) => /identical/.test(x)));
}
{
  const r = analyze(page({ entries: [G.wachesaw, G.litchfield, G.tidewater] }));
  ok("a fires: one sentence with only the name changed (the gated rice sentence)", r.identical.some((x) => /names and numbers/.test(x.kind) && /Rice Culture survey/.test(x.text)), JSON.stringify(r.identical));
}
{
  const r = analyze(page({ entries: [G.reserve, G.willbrook, G.tidewater] }));
  ok("a fires: a near match, 85% or more of the words (golf cart ride)", r.near.some((x) => /golf cart ride away/.test(x.text) && x.overlap >= 85), JSON.stringify(r.near));
}
{
  /* Quiet: a drive time said twice (Myrtle Trace and Seasons pages), a short sentence said twice (best
     neighborhoods, Tidewater), the facts line, an FAQ answer that repeats the body (Myrtle Trace), the
     offer box three times, table cells, sources, photo credits. */
  const e1 = { title: "Myrtle Trace: a 55+ neighborhood near Conway since 1983", paras: ["Myrtle Trace has about 500 homes, and at least one person in each home must be 55 or older.", "Main Street in Conway is about 10 minutes away by car. The association has a pool.", "Its clubhouse holds card nights, a library and dances, and a walking loop circles the pond behind it.", "The HOA fee is $95 a month."], facts: "a gate at the entrance. Homes usually sell for about $300,000, and the HOA fee is $95 a month." };
  const e2 = { title: "Seasons at Prince Creek West: a 55+ clubhouse with indoor and outdoor pools", paras: ["Owners in Seasons at Prince Creek West share a clubhouse with an indoor pool, an outdoor pool and a fitness center, plus tennis and bocce.", "The Murrells Inlet MarshWalk is about 10 minutes away by car. The association has a pool.", "Del Webb did not build it; Kolter Homes opened its first section in 2012 on land that had been timber."], facts: "a gate at the entrance. Homes usually sell for about $500,000, and the HOA fee is about $340 a month." };
  const r = analyze(page({ entries: [e1, e2, G.tidewater], faq: [["How much is the HOA fee in Myrtle Trace?", "The HOA fee is $95 a month."], ["Is Myrtle Trace gated?", "Myrtle Trace has gates only at its back entrance."]], offers: 2, table: true }));
  ok("a quiet: no identical or near sentence in the body", !r.identical.length && !r.near.length, JSON.stringify([r.identical, r.near]));
  ok("a quiet: the FAQ echo and the repeated offer are listed as low", r.low.some((x) => x.zones.includes("faq")) && r.low.some((x) => x.zones.every((z) => z === "offer")), JSON.stringify(r.low.map((x) => [x.kind, x.zones, x.text])));
  ok("a quiet: the facts line, table cells, sources, credits and JSON-LD are never quoted", !JSON.stringify(r).match(/gate at the entrance\.|About 5 minutes|USDA|county deeds/), JSON.stringify(r.low));
  ok("a quiet: --strict passes", r.strict.pass, JSON.stringify(r.strict));
}

/* ------------------------------------------------------------ b. repeated sentence shapes */

{
  const r = analyze(page({ h1: "Where are the most affordable places to buy a home near Myrtle Beach?", entries: A }));
  const s = r.shapes.find((x) => /^Opens: its streets include/.test(x.shape));
  ok("b fires: \"Its streets include [name]\" opens 4 entries (affordable high 1)", s && s.sections.length === 4, JSON.stringify(r.shapes.map((x) => [x.shape, x.sections.length])));
  ok("b fires: \"here in the past year\" in 3 entries (affordable medium 1)", r.shapes.some((x) => /in the past year/.test(x.shape) && x.sections.length === 3));
  ok("b fires: a shape in 4 sections fails --strict", !r.strict.pass && r.strict.reasons.some((x) => /shape/.test(x)), JSON.stringify(r.strict));
}
{
  const r = analyze(page({ h1: "What are the best neighborhoods in Myrtle Beach?", entries: [B.cherry, B.market, B.deerfield] }));
  ok("b fires: the flood line in 3 entries (best neighborhoods medium 5)", r.shapes.some((x) => /in a high-risk flood zone/.test(x.shape) && x.sections.length === 3), JSON.stringify(r.shapes.map((x) => x.shape)));
  ok("b: a shape in 3 sections does not fail --strict", !r.strict.reasons.some((x) => /shape/.test(x)), JSON.stringify(r.strict));
}
{
  /* Quiet: the facts line repeats its shape in every entry by design; a phrase in 2 sections; an FAQ
     answer in the same shape as the body; varied entries. */
  const r = analyze(page({ entries: [G.tidewater, G.prestwick, G.bellwood, G.wachesaw, G.litchfield],
    faq: [["Which gated neighborhood has the oldest course?", "Tidewater's course opened in 1990, and Prestwick's opened in 1989."], ["Is Litchfield Plantation on the river?", "Litchfield was a rice plantation on the Waccamaw River."]] }));
  ok("b quiet: the facts line in every entry is not a shape", !r.shapes.some((x) => /hoa fee|usually sell|gatehouse/.test(x.shape)), JSON.stringify(r.shapes.map((x) => x.shape)));
  ok("b quiet: FAQ answers and a phrase in only 2 sections are not shapes", !r.shapes.some((x) => /opened in|rice plantation/.test(x.shape)), JSON.stringify(r.shapes.map((x) => x.shape)));
}
{
  const r = analyze(page({ h1: "What are the best neighborhoods in Myrtle Beach?", entries: [B.cherry, B.aynor, B.conway, G.tidewater] }));
  ok("b quiet: varied entries, a drive time in two of them", !r.shapes.length, JSON.stringify(r.shapes.map((x) => x.shape)));
}

/* ------------------------------------------------------------ c. repeated devices */

{
  const r = analyze(page({ entries: [G.tidewater, G.barefoot, G.prestwick, G.bellwood, G.willbrook] }));
  const d = r.devices.find((x) => /course|opened/.test(x.device) || x.also.some((w) => /opened/.test(w)));
  ok("c fires: \"[designer] course opened in [year]\" in every entry (gated medium 1)", d && d.entries === 5 && d.share > 0.6, JSON.stringify(r.devices.map((x) => [x.device, x.entries, x.also])));
  ok("c: the device quotes an example", d && d.example && /course/.test(d.example.text));
  ok("c fires: a device in more than 60% fails --strict", r.strict.reasons.some((x) => /device/.test(x)), JSON.stringify(r.strict));
  ok("c quiet: \"gated\" (an H1 subject word) and names are not devices", !r.devices.some((x) => /gated|tom|fazio|dye/i.test(x.device)), JSON.stringify(r.devices.map((x) => x.device)));
}
{
  const r = analyze(page({ h1: "Where are the most affordable places to buy a home near Myrtle Beach?", entries: A }));
  ok("c fires: a list of street names in 5 of 5 entries (affordable high 1)", r.devices.some((x) => /street names/.test(x.device) && x.entries === 5), JSON.stringify(r.devices.map((x) => [x.device, x.entries])));
}
{
  const r = analyze(page({ h1: "What are the best neighborhoods in Myrtle Beach?", entries: [B.cherry, B.aynor, B.conway, G.tidewater, G.wachesaw] }));
  ok("c quiet: five varied entries hold no device", !r.devices.length, JSON.stringify(r.devices.map((x) => [x.device, x.entries, x.which])));
  const f = analyze(page({ entries: [G.tidewater, G.prestwick, G.bellwood, G.wachesaw, G.litchfield] }));
  ok("c quiet: words that are only in the facts line (fee, gatehouse) are not devices", !f.devices.some((x) => /fee|gatehouse|sell/.test(x.device)), JSON.stringify(f.devices.map((x) => x.device)));
  const n = analyze(page({ after: [{ h2: "What is there to do in The Farm?", paras: ["The Farm has two pools."] }, { h2: "What are the HOA rules in The Farm?", paras: ["The large pool has sunk."] }] }));
  ok("c quiet: a page that is not a list has no devices", !n.list && !n.devices.length);
}

/* ------------------------------------------------------------ d. thin entries */

{
  const r = analyze(page({ entries: [G.bellwood, G.tidewater, G.covington], table: true }));
  const names = r.lengths.thin.map((x) => x.entry);
  ok("d fires: Bellwood Landing, under 90 words without its facts line and table", names.some((x) => /Bellwood/.test(x)), JSON.stringify(r.lengths));
  ok("d fires: Covington Lake East, 48 words in round 8", names.some((x) => /Covington/.test(x)));
  ok("d quiet: Tidewater, over 90 words, is not thin", !names.some((x) => /Tidewater/.test(x)));
  ok("d: the range is given", r.lengths.min > 0 && r.lengths.max > r.lengths.min && r.lengths.entries === 3);
  ok("d fires: --strict fails on an entry under 60 words (Covington Lake East)", r.strict.reasons.some((x) => /under 60 words.*Covington/.test(x)), JSON.stringify(r.strict));
  ok("d quiet: Bellwood, 56 words, is named too, Tidewater is not", r.strict.reasons.some((x) => /Bellwood/.test(x)) && !r.strict.reasons.some((x) => /Tidewater/.test(x)), JSON.stringify(r.strict));
}
{
  /* Round 9: gated and affordable cured repetition by cutting; no entry was under 60 but the median was 78. */
  const r = analyze(page({ entries: [G.willbrook, G.litchfield, B.deerfield, B.conway] }));
  ok("d fires: --strict fails on a median entry under 90 words with 4 entries", r.strict.reasons.some((x) => /median entry \d+ words/.test(x)) && !r.strict.reasons.some((x) => /under 60/.test(x)), JSON.stringify(r.strict));
}
{
  /* Quiet: one entry of 75 words among long ones is listed as thin but does not fail --strict. */
  const r = analyze(page({ entries: [B.cherry, B.market, B.aynor, B.conway] }));
  ok("d quiet: a 75-word entry with a median over 90 does not fail --strict", r.lengths.thin.some((x) => /Conway/.test(x.entry)) && !r.strict.reasons.some((x) => /under 60|median entry/.test(x)), JSON.stringify(r.strict));
}
{
  /* Quiet: fewer than 4 entries never fail on the median. */
  const r = analyze(page({ entries: [G.willbrook, B.conway] }));
  ok("d quiet: a list of 2 does not fail on the median", !r.strict.reasons.some((x) => /median entry/.test(x)), JSON.stringify(r.strict));
}

/* ------------------------------------------------------------ e, the report, the command line */

{
  const r = analyze(page({ entries: [G.tidewater, G.barefoot, G.prestwick, G.bellwood, G.willbrook] }));
  ok("e: theme bigrams are counted, names left out", r.themes.some((x) => x.bigram === "golf course" && x.count >= 2) && !r.themes.some((x) => /tom|fazio/i.test(x.bigram)), JSON.stringify(r.themes));
}
ok("sentences: initials do not split a sentence", sentences("Its golf course, designed by Pete Dye and his son P.B. Dye, opened in 1989. D.R. Horton built it.").length === 2);
/* The glass offer pill (tools/glass.js offer()) in every entry is the offer zone, not body copy: quiet with
   its class; the same words as a plain paragraph still fire as a device and a shape. */
{
  const pill = (cls, name) => `<p${cls ? ' class="c3-offer"' : ""}><a${cls ? ' class="c3-offer-pill"' : ""} href="/contact/?place=${encodeURIComponent(name)}">Book a showing in ${name}</a></p>`;
  const withPills = (cls) => { let i = 0; const names = ["Tidewater Plantation", "Barefoot Resort", "Prestwick", "Bellwood Landing"];
    return page({ entries: [G.tidewater, G.barefoot, G.prestwick, G.bellwood] }).replace(/<\/figure>/g, (m) => m + pill(cls, names[i++])); };
  const quiet = analyze(withPills(true)), loud = analyze(withPills(false));
  const showing = (r) => r.devices.some((x) => x.device === "showing" || x.also.includes("showing"));
  ok("offer pill quiet: \"Book a showing in X\" in a .c3-offer is not a device or a shape", !showing(quiet) && !quiet.shapes.some((x) => /showing/.test(x.shape || JSON.stringify(x))), JSON.stringify(quiet.devices.map((x) => x.device)));
  ok("offer pill fires: the same line as a plain paragraph is a device", showing(loud), JSON.stringify(loud.devices.map((x) => x.device)));
}
/* Round 15: the price line that closes each entry (<p class="c3-place-price">) is the offer zone too; the
   same line as a plain paragraph still fires. */
{
  const names = ["Tidewater Plantation", "Barefoot Resort", "Prestwick", "Bellwood Landing"];
  const line = (cls, name) => `<p${cls ? ' class="c3-place-price"' : ""}>Houses in ${name} usually sold for about $500,000 last year, and the HOA fee is about $200 a month.</p>`;
  const withLines = (cls) => { let i = 0; return page({ entries: [G.tidewater, G.barefoot, G.prestwick, G.bellwood] }).replace(/<\/figure>/g, (m) => m + line(cls, names[i++])); };
  const quiet = analyze(withLines(true)), loud = analyze(withLines(false));
  const sold = (r) => r.shapes.some((x) => /usually sold for/.test(JSON.stringify(x))) || r.devices.some((x) => /usually|sold/.test(x.device));
  ok("price line quiet: the closing price line in a .c3-place-price is not a shape or a device", !sold(quiet), JSON.stringify(quiet.shapes.slice(0, 2)));
  ok("price line fires: the same line as a plain paragraph is a shape or a device", sold(loud), JSON.stringify(loud.shapes.slice(0, 2)));
}

{
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "repeat-check-"));
  const bad = path.join(dir, "bad.html"), good = path.join(dir, "good.html");
  fs.writeFileSync(bad, page({ entries: [G.wachesaw, G.litchfield, G.covington, G.willbrook] }));
  fs.writeFileSync(good, page({ h1: "What are the best neighborhoods in Myrtle Beach?", entries: [B.cherry, B.aynor, B.conway, G.tidewater] }));
  const run = (args) => spawnSync(process.execPath, [path.join(__dirname, "repeat-check.js"), ...args], { encoding: "utf8" });
  const plain = run([bad]), strict = run([bad, "--strict"]), json = run([bad, "--json"]), pass = run([good, "--strict"]);
  ok("cli: the report exits 0 and quotes the sentence", plain.status === 0 && /Rice Culture survey/.test(plain.stdout) && /strict: fails/.test(plain.stdout), plain.stderr);
  ok("cli: --strict exits 1 on a failing page and 0 on a clean one", strict.status === 1 && pass.status === 0, `${strict.status} ${pass.status} ${pass.stdout.slice(-300)}`);
  let j = null; try { j = JSON.parse(json.stdout); } catch { /* checked below */ }
  ok("cli: --json gives the findings", j && Array.isArray(j.identical) && Array.isArray(j.shapes) && Array.isArray(j.devices) && j.lengths && j.strict && j.strict.pass === false);
  fs.rmSync(dir, { recursive: true, force: true });
}

console.log(failures ? `\n${failures} failing` : "\nall controls pass");
process.exit(failures ? 1 : 0);
