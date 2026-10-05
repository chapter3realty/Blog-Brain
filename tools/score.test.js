#!/usr/bin/env node
/*
 * Controls for score.js. Every rule gets a page that should pass it and a page
 * that should fail it. Each mutation is asserted to have landed before the
 * result is read, because a mutation that silently does nothing looks exactly
 * like a passing test (website MISTAKES.md 35).
 *
 *   node tools/score.test.js
 */
"use strict";
const { parse, grade, siteContext, RULES, SITE_RULES } = require("./score.js");
process.env.SCORE_TODAY = "2026-10-01";

const faq = [
  ["How much does a special assessment cost in Myrtle Beach?", "A special assessment on a Grand Strand condo building usually costs a few thousand dollars per unit, and a roof or structural repair can cost more. The board divides the bill by the ownership share in the declaration."],
  ["Who pays a special assessment when a condo sells?", "The seller pays an assessment charged before closing, and the buyer pays one charged after. Write the split into the contract and get an estoppel letter from the association."],
  ["Can a special assessment stop a condo loan?", "Yes. A lender can refuse a loan in a building with an unpaid assessment for structural repair, because the lender reviews the building as well as the buyer."],
  ["How do I find out about a special assessment before I buy?", "Read twelve to twenty-four months of board minutes, the reserve study and the budget. A coming assessment is discussed in the minutes for months before anyone is billed."],
];

function gold(over = {}) {
  const o = Object.assign({
    title: "Condo Special Assessments in Myrtle Beach | Chapter3",
    desc: "What a condo special assessment costs on the Grand Strand, how to spot one in the board minutes before you offer, and who pays it at closing.",
    og: "https://chapter3realty.com/og/special-assessments.jpg",
    h1: 'Do Myrtle Beach condos charge special assessments?<br/><em>What they cost and who pays.</em>',
    short: "Yes. Most Myrtle Beach condo buildings charge a special assessment at some point, usually for a roof, an elevator or insurance. It is billed to every unit and it is not optional. You can see one coming in the board minutes and the reserve study before you make an offer.",
    author: { "@id": "https://chapter3realty.com/#org" },
    extraMain: "", sectionLead: "A special assessment is a one-time charge an association bills to every unit.",
    faq, table: true, chart: true, body: "",
  }, over);
  const ld = [
    { "@context": "https://schema.org", "@type": "RealEstateAgent", "@id": "https://chapter3realty.com/#org", name: "Chapter3 Realty" },
    { "@context": "https://schema.org", "@type": "Article", "@id": "x#article", headline: "h", author: o.author, datePublished: "2026-09-01", dateModified: "2026-09-20", image: o.og, keywords: "condo special assessment Myrtle Beach" },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: o.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ];
  const sec = (h2, lead, rest) => `<section><div class="wrap"><h2>${h2}</h2><p>${lead}</p><p>${rest}</p></div></section>`;
  const filler = "Board minutes show the discussion months ahead. The reserve study lists each component and its remaining life. The budget shows whether dues cover the running costs.";
  return `<!doctype html><html><head><title>${o.title}</title><meta name="description" content="${o.desc}">
<link rel="canonical" href="https://chapter3realty.com/hoa/special-assessments/"><meta property="og:image" content="${o.og}">
${ld.map(x => `<script type="application/ld+json">${JSON.stringify(x)}</script>`).join("")}</head><body><main id="main">
<div class="detail-hero"><div class="breadcrumb"><a href="/">Home</a></div><h1>${o.h1}</h1>
<p>By <strong>Chapter3 Realty</strong> · Updated September 20, 2026</p><p class="detail-sub">A special assessment on a Myrtle Beach condo can cost thousands per unit.</p></div>
<section><div class="wrap"><p>The short answer</p><p>${o.short}</p></div></section>
${sec("What is a special assessment?", o.sectionLead, `${filler} In Chapter3's files, a coming assessment showed up in the minutes in most buildings we checked. See the ${'<a href="/hoa/reserves/">reserve guide</a>'} and the <a href="/hoa/documents/">document list</a>.`)}
${sec("What triggers one in Surfside Beach and North Myrtle Beach?", "Roofs, elevators, insurance and unfunded reserves trigger most assessments in Surfside Beach and Garden City buildings.", `${filler} Our broker reads the last two years of minutes before a client offers. Compare <a href="/hoa/dues-increases/">dues increases</a> and <a href="/buyers/coastal-insurance/">coastal insurance</a>. Read <a href="https://www.scstatehouse.gov/code/t27c030.php">the state HOA act</a> and <a href="https://consumer.sc.gov/hoa">the state HOA report</a>.`)}
${o.table ? `<table><tr><th>Cause</th><th>Typical</th></tr><tr><td>Roof</td><td>Thousands per unit</td></tr></table>` : ""}
${o.chart ? `<svg role="img" aria-label="Assessments by cause in Garden City buildings"><title>Assessments by cause</title></svg>` : ""}
<ul><li>Board minutes</li><li>Reserve study</li><li>Budget</li></ul>
<div style="border-left:3px solid var(--brass)"><p>Worried about a building?</p><a class="btn btn-brass" href="#lead-form">Check a building</a></div>
${sec("Who pays it when the unit sells?", "The seller pays an assessment charged before closing.", `${filler} <a href="/sell/sell-my-condo/">Selling a condo</a> covers the seller side.`)}
<ul><li>Contract term</li><li>Estoppel letter</li><li>Closing statement</li></ul>
<div style="border-left:3px solid var(--brass)"><p>Want us to read the minutes?</p><a class="btn btn-brass" href="#lead-form">Send the building</a></div>
${o.body}
<section><div class="wrap"><p>Common questions</p><h2>Special assessment FAQ</h2>${o.faq.map(([q, a]) => `<h3>${q}</h3><p>${a}</p>`).join("")}
<p><strong>Sources:</strong> <a href="https://www.scstatehouse.gov/code/t27c030.php">SC Code</a>.</p></div></section>
${o.extraMain}</main></body></html>`;
}

let failures = 0;
const check = (name, cond, extra = "") => { if (!cond) { failures++; console.log(`FAIL  ${name} ${extra}`); } else console.log(`ok    ${name}`); };
const credit = (html, id) => { const r = grade(parse(html)).results.find(r => r.id === id); if (!r) throw new Error(`no rule ${id}`); return r; };

/* Baseline: the gold page passes every single-page rule. */
const g = grade(parse(gold()));
for (const r of g.results) check(`gold passes ${r.id}`, r.credit === null || r.credit >= 1, `(${r.credit}: ${r.detail})`);
check("gold has no blockers", g.blockers.length === 0, g.blockers.join(","));

/* One mutation per rule. [rule id, overrides or html transform, expect credit < 1] */
const mutations = [
  ["residue", { extraMain: "<p>%s</p>" }],
  ["residue", { extraMain: "<p>The total is NaN dollars.</p>" }],
  ["faq-match", (h) => h.replace("get an estoppel letter from the association.</p>", "get a letter.</p>")],
  ["title", { title: "Special Assessments | Chapter3" }],
  ["title", { title: "Condo Special Assessments in Myrtle Beach, What They Cost and Who Pays | Chapter3" }],
  ["description", { desc: "Short." }],
  ["h1", { h1: "Do condos charge special assessments?" }],
  ["canonical", (h) => h.replace(/<link rel="canonical"[^>]*>/, "")],
  ["topic-early", { short: "Yes. Most buildings on this coast bill every owner at some point for a roof, an elevator or insurance, and owners cannot refuse it. You can see the bill coming in the minutes and the study well before you make an offer here." }],
  ["links-out", (h) => h.replace(/<a href="\/(?:hoa|buyers|sell)[^"]*">([^<]*)<\/a>/g, "$1")],
  ["og-image", { og: "https://chapter3realty.com/og-image.jpg" }],
  ["article-schema", { author: null }],
  ["short-answer", { short: "Yes. " + "Most buildings charge one at some point for a roof or an elevator or insurance and it is billed to every unit. ".repeat(8) }],
  ["verdict", { short: "A special assessment is a charge the association bills to every unit when it needs money it does not have, usually for a roof, an elevator or insurance. You can see one coming in the minutes before you offer." }],
  ["question-h2", (h) => h.replace("What is a special assessment?", "Special assessments defined").replace("Who pays it when the unit sells?", "The seller and the buyer")],
  ["section-leads", { sectionLead: "This is the charge an association bills when the money runs short." }],
  ["table", { table: false }],
  ["faq", { faq: faq.map(([q, a]) => [q, "It varies."]) }],
  ["primary-sources", (h) => h.replace(/<a href="https:\/\/[^"]*">([^<]*)<\/a>/g, "$1")],
  ["local-entities", (h) => h.replace(/Surfside Beach and (?:North Myrtle Beach|Garden City)/g, "the coast").replace(/Garden City/g, "local")],
  ["fragments", { body: '<p>Dues rise when insurance rises. <a href="/hoa/reserves/">How reserves are funded</a>.</p>' }],
  ["fragments", { body: '<p>Insurance is the biggest line. <a href="/buyers/coastal-insurance/">Coastal insurance, explained</a>.</p>' }],
  ["sentence-length", { body: `<p>${"word ".repeat(45)}end.</p>` }],
  ["paragraphs", { body: `<p>${"Short sentence here. ".repeat(30)}</p>` }],
  ["image", { chart: false }],
  ["ctas", (h) => h.replace(/<a class="btn btn-brass" href="#lead-form">[^<]*<\/a>/g, "")],
  ["byline", (h) => h.replace(/ · Updated September 20, 2026/, "")],
  ["byline", (h) => h.replace("By <strong>Chapter3 Realty</strong>", "By <strong>our team</strong>")],
  ["experience", (h) => h.replace("In Chapter3's files, a coming assessment showed up in the minutes in most buildings we checked.", "").replace("Our broker reads the last two years of minutes before a client offers.", "")],
  ["sources-line", (h) => h.replace("<strong>Sources:</strong>", "<strong>Reading:</strong>")],
  ["fresh", (h) => h.replace('"dateModified":"2026-09-20"', '"dateModified":"2025-01-01"')],
];

const base = gold();
for (const [id, m] of mutations) {
  const html = typeof m === "function" ? m(base) : gold(m);
  check(`${id}: mutation landed`, html !== base);
  const r = credit(html, id);
  check(`${id}: fires`, r.credit !== null && r.credit < 1, `(${r.credit}: ${r.detail})`);
}

/* A person may be the visible author (owner 2026-10-05). */
check("byline: a person's byline passes", credit(base.replace("By <strong>Chapter3 Realty</strong>", "By <strong>Devin Day</strong>, Operations Officer"), "byline").credit === 1);
check("article-schema: a Person author passes", credit(gold({ author: { "@type": "Person", name: "Devin Day", url: "https://chapter3realty.com/about/" } }), "article-schema").credit === 1);

/* visual-rhythm needs a long page to fire; give it one with no visuals. */
{
  const long = base.replace(/<ul>[\s\S]*?<\/ul>/g, "").replace(/<table>[\s\S]*?<\/table>/, "").replace(/<svg[\s\S]*?<\/svg>/, "").replace(/<div style="border-left[\s\S]*?<\/div>/g, "")
    .replace("</main>", `<p>${"Owners pay the bill in installments. ".repeat(80)}</p></main>`);
  const r = credit(long, "visual-rhythm");
  check("visual-rhythm: fires on a long page with no visuals", r.credit < 1, `(${r.credit}: ${r.detail})`);
}

/* Fragment rule must NOT fire on a real sentence that is a link, or on an imperative. */
for (const body of ['<p>Rates differ by town. <a href="/buyers/property-taxes/">Two exceptions restore the full rate</a>.</p>',
  '<p>We read the documents. <a href="/contact/">Send us a property</a>.</p>']) {
  const r = credit(gold({ body }), "fragments");
  check(`fragments: no false positive on "${body.match(/>([^<]+)<\/a>/)[1]}"`, r.credit === 1, `(${r.detail})`);
}

/* Sources as a standalone heading (older hand-built pages) passes; the residue rule ignores a percent sign before a word. */
check("sources-line: a standalone Sources heading passes", credit(base.replace("<strong>Sources:</strong>", "</p><h3>Sources</h3><p>"), "sources-line").credit === 1);
check("residue: '+131%' next to 'since' is not residue", credit(gold({ body: "<p><span>+131%</span><span>since the 2012 low</span></p>" }), "residue").credit === 1);

/* Verdict: the H1 second line or a direct conditional also answers the question; a story opener does not. */
check("verdict: H1 second line 'Yes, at 90 days.' answers", credit(gold({ h1: "Do Myrtle Beach condos charge special assessments?<br/><em>Yes, most of them.</em>", short: "A special assessment is a one-time charge billed to every unit when the association needs money it does not have, usually for a roof or insurance." }), "verdict").credit === 1);
check("verdict: a direct conditional answers", credit(gold({ short: "If the building has thin reserves, it will charge one. Most Myrtle Beach condo buildings charge a special assessment at some point, usually for a roof, an elevator or insurance." }), "verdict").credit === 1);
check("verdict: a story opener does not answer", credit(gold({ short: "A buyer in the area was set on a specific building last spring. The minutes showed a roof vote coming, and the assessment arrived two months after closing." }), "verdict").credit === 0);

check("residue: '%s' directly before a link fires", credit(gold({ body: '<p>%s<a href="/hoa/reserves/">Analyze my HOA documents</a></p>' }), "residue").credit === 0);

/* Verdict rule is not applicable to a non-question headline. */
check("verdict: n/a for a statement headline", credit(gold({ h1: "Condo special assessments in Myrtle Beach" }), "verdict").credit === null);

/* Site rules. */
{
  const a = parse(gold()), b = parse(gold().replace("/hoa/special-assessments/", "/hoa/other/").replace(/Who pays it/, "Who pays"));
  const s = siteContext([a, b]);
  const res = (p, id) => SITE_RULES.find(r => r.id === id).fn(p, {}, s);
  check("near-duplicate: fires on a copied page", res(a, "near-duplicate").credit < 1, res(a, "near-duplicate").detail);
  check("unique-meta: fires on a shared title", res(a, "unique-meta").credit === 0);
  const c = parse(gold().replace("/hoa/special-assessments/", "/hoa/third/").replace(/<title>[^<]*/, "<title>Another Myrtle Beach condo topic here | Chapter3").replace(/content="What a condo[^"]*"/, 'content="Something else entirely about Horry County condo buildings, written for a different page of the site entirely, here."')
    .replace(/<main id="main">[\s\S]*<\/main>/, '<main id="main"><p>Different text about Conway farmland and timber and soil and rivers and roads and bridges.</p><a href="/hoa/reserves/">r</a></main>'));
  const s2 = siteContext([a, c]);
  const nd = SITE_RULES.find(r => r.id === "near-duplicate").fn(a, {}, s2);
  check("near-duplicate: passes a different page", nd.credit === 1, nd.detail);
  const inb = SITE_RULES.find(r => r.id === "inbound").fn(parse(gold().replace("/hoa/special-assessments/", "/hoa/reserves/")), {}, s2);
  check("inbound: counts body links from other pages (a and c both link to /hoa/reserves/)", /^2 pages/.test(inb.detail), inb.detail);
}

/* Every rule id appears in at least one mutation, so no rule is untested. */
const tested = new Set(mutations.map(m => m[0]).concat(["visual-rhythm", "verdict"]));
for (const r of RULES) check(`rule ${r.id} has a control`, tested.has(r.id));

/* Every rule maps to a STANDARD.md id. */
const { STD } = require("./score.js");
for (const r of RULES.concat(SITE_RULES)) check(`rule ${r.id} has a STANDARD id`, !!STD[r.id]);

console.log(failures ? `\n${failures} failing` : "\nall controls pass");
process.exit(failures ? 1 : 0);
