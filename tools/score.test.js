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
  ["Who pays a special assessment when a condo sells?", "The seller pays an assessment charged before closing, and the buyer pays one charged after. Write the split into the contract and get a letter from the association that says what is owed."],
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
<ul><li>Contract term</li><li>Letter of what is owed</li><li>Closing statement</li></ul>
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
  ["faq-match", (h) => h.replace("get a letter from the association that says what is owed.</p>", "get a letter.</p>")],
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

/* question-h2: a numbered list of places (owner, 2026-10-14) is left out of the count; the other headings still count. */
{
  const entries = ["1. Surfside Beach: condos close to the sand", "2. Garden City: buildings on the marsh", "3. North Myrtle Beach: newer towers"]
    .map((t) => `<section><div class="wrap"><h2>${t}</h2><p>Buildings here charge assessments for roofs.</p></div></section>`).join("");
  const withList = base.replace("</main>", entries + "</main>");
  check("question-h2: the numbered entries landed", withList.includes("3. North Myrtle Beach: newer towers"));
  check("question-h2: a numbered list of 3 places does not lower the share", credit(withList, "question-h2").credit === 1, `(${credit(withList, "question-h2").detail})`);
  const statements = withList.replace("What is a special assessment?", "Special assessments defined").replace("Who pays it when the unit sells?", "The seller and the buyer");
  check("question-h2: other statement headings still fire beside a numbered list", credit(statements, "question-h2").credit < 1, `(${credit(statements, "question-h2").detail})`);
  const two = base.replace("</main>", entries.split("</section>").slice(0, 2).join("</section>") + "</section></main>");
  check("question-h2: two numbered headings are not a list and still count", credit(two, "question-h2").detail === "3 of 5", `(${credit(two, "question-h2").detail})`);
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

/* Plain language (STANDARD P1-P8, voice/RULES.md class PLAIN). Firing text is taken from the
   2026-10 drafts and the live site; quiet text is the owner's own "good" wording or real site text. */
{
  const fires = (name, html, id) => { check(`${id}: mutation landed (${name})`, html !== base); const r = credit(html, id); check(`${id}: fires on ${name}`, r.credit !== null && r.credit < 1, `(${r.credit}: ${r.detail})`); };
  const quiet = (name, html, id) => { const r = credit(html, id); check(`${id}: quiet on ${name}`, r.credit === null || r.credit === 1, `(${r.credit}: ${r.detail})`); };

  /* P1 exact amounts. Draft Del Webb North Myrtle Beach, version 4. */
  fires("two exact prices in prose", gold({ body: "<p>In October 2026, the three Del Webb home designs here started at $585,990 for the Stardom, $699,965 for the Stellar and $704,590 for the Renown.</p>" }), "exact-amounts");
  quiet("one exact price", gold({ body: "<p>The typical resale home sold for $534,900.</p>" }), "exact-amounts");
  quiet("round prices", gold({ body: "<p>New homes here start at about $600,000. Resale homes sell for about $300,000 to $400,000.</p>" }), "exact-amounts");
  quiet("exact prices in a table", gold({ body: "<table><tr><th>Design</th><th>From</th></tr><tr><td>Stardom</td><td>$585,990</td></tr><tr><td>Stellar</td><td>$699,965</td></tr><tr><td>Renown</td><td>$704,590</td></tr></table>" }), "exact-amounts");
  quiet("the same exact amount twice", gold({ body: "<p>The median sale price was $359,945.</p><p>At $359,945, the median was flat.</p>" }), "exact-amounts");

  /* P2 number density. Draft Myrtle Trace, version 4: 13 numbers in 60 words. */
  const dense = "<p>In ZIP code 29526, the middle single-family flood policy for a Zone X home cost $561 a year, fees included. Half cost between $432 and $725.</p>" +
    "<p>From October 2025 to September 2026, 35 homes in Myrtle Trace sold for $160,000 to $394,900.</p><p>On a $300,000 home you live in, the property tax is about $1,103 a year on 2025 bills.</p>";
  fires("dense numbers", gold({ body: dense.repeat(3) }), "number-density");
  quiet("a few round numbers", gold({ body: "<p>Flood insurance here usually costs about $600 a year.</p>" }), "number-density");
  {
    const { facts } = require("./score.js");
    const n0 = facts(parse(gold())).plain.numbers.length;
    const n1 = facts(parse(gold({ body: "<p>Call Chapter3 at 843-555-0100. Ask for the HO-6 quote on a 55+ home near I-95.</p>" }))).plain.numbers.length;
    check("number-density: a phone number, Chapter3, HO-6, I-95 and 55+ are not counted", n1 === n0, `(${n0} before, ${n1} after)`);
  }

  /* P3 dates. Draft Myrtle Trace and Del Webb North Myrtle Beach, version 4. */
  fires("three dates in body copy", gold({ body: "<p>In October 2026, new homes started at about $600,000.</p><p>From October 2025 to September 2026, 35 homes in Myrtle Trace sold.</p>" }), "date-mentions");
  fires("\"in 2026\" mentions", gold({ body: "<p>Dues were raised in 2026.</p><p>The pool reopened in 2025.</p><p>Fees rose in 2026.</p>" }), "date-mentions");
  quiet("the date once and a byline", gold({ body: "<p>In October 2026, new homes started at about $600,000.</p>" }), "date-mentions");
  quiet("history and a deadline", gold({ body: "<p>Hurricane Hugo came ashore in 1989.</p><p>The rule applies to sales in 1999.</p><p>The new standard applies from January 1, 2027.</p><p>Myrtle Trace dates from 1983.</p>" }), "date-mentions");

  /* P4 price in the headline. Draft Del Webb North Myrtle Beach and Myrtle Trace, version 4. */
  fires("a starting price in the H1 second line", gold({ h1: "What does a new home in Del Webb North Myrtle Beach cost?<br/><em>From $585,990 in October 2026.</em>" }), "price-headline");
  fires("dues in the H1", gold({ h1: "What is life like in Myrtle Trace in Conway?<br/><em>Pool, clubhouse, $95 monthly dues.</em>" }), "price-headline");
  quiet("the owner's suggested headline", gold({ h1: "What is it like to live in Del Webb North Myrtle Beach?" }), "price-headline");
  check("price-headline: an investor page may lead with price", credit(gold({ h1: "What does a Myrtle Beach rental cost?<br/><em>From $250,000.</em>" }).replace("/hoa/special-assessments/", "/invest/rentals/"), "price-headline").credit === null);
  check("price-headline: is a blocker", grade(parse(gold({ h1: "Myrtle Beach condos<br/><em>From $250,000.</em>" }))).blockers.includes("price-headline"));

  /* P5 deflection. The owner's example (RULES PLAIN-5) and live /invest/rental-program-vs-airbnb/. */
  fires("\"Ask the management company\"", gold({ body: "<h2>What do the HOA dues include in Myrtle Beach?</h2><p>Ask the management company for the budget.</p>" }), "deflection");
  fires("\"Check the exclusivity clause\"", gold({ body: "<h3>Can I use Airbnb while I am in the program?</h3><p>Check the exclusivity clause. Some agreements allow outside bookings with notice and some do not.</p>" }), "deflection");
  quiet("an answer", gold({ body: "<h2>What do the HOA dues include?</h2><p>Your dues include lawn care and a 175-channel TV package.</p>" }), "deflection");
  quiet("a how-to question answered with the steps (gold FAQ)", base, "deflection");
  quiet("a call-to-action block (live /sell/)", gold({ body: '<section><div><h2>Questions before you commit to anything?</h2><p>Call or text us directly.</p><div><a href="tel:8543332135">Call</a></div></div></section>' }), "deflection");

  /* P6 plain words. Drafts version 4 and live /buyers/property-taxes/. */
  fires("Zone X", gold({ body: "<p>Myrtle Trace is in FEMA flood Zone X, an area of low flood risk.</p>" }), "plain-words");
  fires("millage and the homestead exemption", gold({ body: "<p>All figures are estimates from certified 2025 millage, before the 65-plus Homestead Exemption.</p>" }), "plain-words");
  fires("a capital contribution", gold({ body: "<p>That is a $1,450 one-time fee, which the HOA calls a capital contribution.</p>" }), "plain-words");
  quiet("the owner's plain version", gold({ body: "<p>Homes here are not in a flood zone, so your lender will not require flood insurance.</p>" }), "plain-words");
  quiet("a page about the term itself", gold({ title: "HOA Estoppel Letters in Myrtle Beach | Chapter3", body: "<p>An estoppel letter says what the seller still owes the HOA.</p>" }), "plain-words");
  quiet("roof grant recipients and plates", gold({ body: "<p>Grantees of the roof program report premium cuts. The platform shows a license plate.</p>" }), "plain-words");
  check("plain-words: an investor page may say DSCR", credit(gold({ body: "<p>A DSCR loan qualifies on the property's rent.</p>" }).replace("/hoa/special-assessments/", "/invest/dscr/"), "plain-words").credit === 1);

  /* P9 plain voice. Firing text: the version 14 pros and cons of batch 2026-10-a, which pasted the verifier's
     hedges (the owner, BUYER-3: "according to the records and so on when we are the experts"). Quiet text:
     the sources line, a heading, the owner's required loan wording (PLAYBOOK A17), and the two live false
     positives of the first draft (/hoa/estoppel-and-transfer-fees/, /invest/strategies/dst/). */
  fires("\"Listings show\" and \"Pulte says\"", gold({ body: "<ul><li>Listings show detached houses built from 2022 to 2026. Pulte says its 10-year structural warranty is transferable.</li></ul>" }), "plain-voice");
  fires("\"Under the recorded declaration\"", gold({ body: "<ul><li>Under the recorded declaration, a lease must run at least 12 months, one time per year, or on other terms in the association's rules.</li></ul>" }), "plain-voice");
  fires("\"posted rules describe\"", gold({ body: "<ul><li>The association's posted rules describe a day dock for owners and guests, dawn to dusk, with no overnight docking and no boat ramp.</li></ul>" }), "plain-voice");
  fires("\"The HOA says\"", gold({ body: "<ul><li>The HOA says there are no sidewalks.</li></ul>" }), "plain-voice");
  fires("\"per Redfin\" (live /submarkets/north-myrtle-beach/)", gold({ body: "<p>Recent single-family medians are about $418,000 per Redfin's mid-2026 snapshot.</p>" }), "plain-voice");
  quiet("the plain version", gold({ body: "<ul><li>There are no sidewalks.</li><li>Leases must be at least a year long.</li></ul>" }), "plain-voice");
  quiet("the sources line", gold({ body: "<p>Sources: Pulte community page, Horry County deed records. The HOA fee and home sizes are from recent home listings, and listings show the build years.</p>" }), "plain-voice");
  quiet("a heading", gold({ body: "<h2>What the rules say</h2><p>Fences must be short black metal and approved first.</p>" }), "plain-voice");
  quiet("the owner's loan wording", gold({ body: "<p>Closing costs run about 2 to 5 percent of the loan, according to a loan officer at our preferred lender.</p>" }), "plain-voice");
  quiet("what the HOA says is owed (live)", gold({ body: "<ul><li>Anything else the HOA says is owed. On the same statement, not in a side email.</li></ul>" }), "plain-voice");
  quiet("a person quoted on the page (live)", gold({ body: "<p>As Scott says above: talk to a financial professional before implementing one.</p>" }), "plain-voice");

  /* P10 only people act (voice/RULES.md rule 2, FIG-2 to FIG-4). Firing text: the five lines independent reviewers
     caught in batch 2026-10-a version 14b after every gate passed (OWNER-EYE-v14b.md), and live lines. Quiet text: the
     version 14b fixes as rewritten in the drafts, the uses the owner accepts (FIG-3: "the law requires", "the lease
     allows"; a fee or policy "covers"), and the live false positives of the first draft of the pattern. */
  fires("\"The car route ... runs\" (v14b, Del Webb NMB)", gold({ body: "<p>The car route to the nearest city beach parking lot runs a short way along US 17, where golf carts may only cross. Plan to take your car to the beach.</p>" }), "people-act");
  fires("\"its rules limit leases\" (v14b, Grande Dunes)", gold({ body: "<ul><li>Del Webb at Grande Dunes is close to the beach, a grocery store and a hospital, and its rules limit leases, fences and sheds.</li></ul>" }), "people-act");
  fires("\"Dues are $95 a month and keep up the pool\" (v14b, Myrtle Trace)", gold({ body: "<ul><li>Dues are $95 a month and keep up the pool, clubhouse, gates, roads and ponds.</li></ul>" }), "people-act");
  fires("\"Your HOA bill pays for your membership\" (v14b, Grande Dunes)", gold({ body: "<p>Your HOA bill pays for your membership.</p>" }), "people-act");
  fires("\"The homes sit on\" (v14b, Del Webb NMB)", gold({ body: "<p>The homes sit on short streets around ponds, with the clubhouse, pools and courts in the middle of the neighborhood.</p>" }), "people-act");
  fires("\"the law sets\", \"carries a premium\", \"tax runs\" (live)", gold({ body: "<p>No. State law sets no cap on HOA fines.</p><p>That wait and that cost are why a home with an existing permitted dock carries a premium.</p><p>Total lodging tax runs 11 to 13 percent depending on jurisdiction.</p>" }), "people-act");
  fires("\"rules do not let you\" and \"a house can sit\" (live)", gold({ body: "<p>The rules do not let you hold title to both at once.</p><p>A house can sit in Zone X and still have flooded before.</p>" }), "people-act");
  quiet("the v14b fixes (drafts)", gold({ body: "<p>To reach the nearest city beach parking lot, you drive a short way along US 17. Golf carts may only cross US 17, so plan to take your car to the beach.</p><ul><li>Grande Dunes is close to the beach, a grocery store and a hospital, and owners there follow rules on leases, fences and sheds.</li><li>The HOA fee is $95 a month. The HOA uses it to keep up the pool, clubhouse, gates, roads and ponds.</li></ul><p>Your HOA fee includes your membership. The homes are on short streets around ponds, with the clubhouse, pools and courts in the middle of the neighborhood.</p>" }), "people-act");
  quiet("plain verbs (drafts and live)", gold({ body: "<p>A lease must be at least 12 months, and you can sign only one a year. The typical home has more than doubled since its 2012 to 2013 low. If your home is in one, a lender will require flood insurance.</p>" }), "people-act");
  quiet("a law requires, rules allow, a policy covers (live)", gold({ body: "<p>State law requires an attorney-supervised closing.</p><ul><li>Zoning and the recorded building rules allow nightly rental at that address.</li></ul><p>No homeowners policy covers flood, anywhere, at any price. Regular dues cover the running of the property. A special assessment is what the board bills when they do not.</p>" }), "people-act");
  quiet("nouns that are not the subject (live false positives)", gold({ body: "<p>An owner who plans to sell and cash out in three or four years should run the recapture numbers before ordering a study.</p><p>Dividing the same rent by the typical value of every home in the area gives a much lower number.</p><p>In a condo regime the association carries a master policy on the building and owners carry an individual policy for the interior.</p><p>Program availability, income limits, purchase price limits, and rates are subject to change without notice.</p><p>Our page on South Carolina HOA laws covers the rest.</p><p>Hurricane season is long, and days on market near 162 give buyers room to negotiate.</p>" }), "people-act");
  quiet("a heading, the sources line and a quote", gold({ body: "<h2>What the rules let you do</h2><p>Sources: the HOA's rules. The budget sets the dues, per the minutes.</p><blockquote><p>The market runs on fear.</p></blockquote><p>The owner wrote: \"the lease never sets anything\".</p>" }), "people-act");
  check("people-act: is not a blocker", !grade(parse(gold({ body: "<p>Your HOA bill pays for your membership. The homes sit on short streets.</p>" }))).blockers.includes("people-act"));

  /* P7 pictures and P8 map. A long page (800+ words) with one chart. */
  const longBody = `<p>${"Owners pay the bill in installments. ".repeat(140)}</p>`;
  const fig = '<figure><img src="/x.jpg" alt="The clubhouse pool at Myrtle Trace"><figcaption>The clubhouse pool</figcaption></figure>';
  fires("a long page with one chart", gold({ body: longBody }), "pictures");
  quiet("a long page with a chart and a photo", gold({ body: longBody + fig }), "pictures");
  quiet("a short page with one chart", base, "pictures");
  const place = (h) => h.replace("/hoa/special-assessments/", "/buyers/55-plus-communities/myrtle-trace/");
  fires("a 55+ community page with no map", place(gold()), "place-map");
  fires("a submarket page with only a bar chart", gold().replace("/hoa/special-assessments/", "/submarkets/conway/"), "place-map");
  /* P8 prefers our static map; a live map loads only on a click (design report, 2026-10-11). */
  fires("a Google map that loads on arrival", place(gold({ body: '<iframe src="https://www.google.com/maps/embed?pb=x" title="Myrtle Trace"></iframe>' })), "place-map");
  fires("a static map plus a Google map that loads on arrival", place(gold({ body: '<figure><svg role="img" aria-label="Myrtle Trace, the beach and Conway"></svg><figcaption>Map: where Myrtle Trace is</figcaption></figure><iframe src="https://www.google.com/maps/embed?pb=x" title="Myrtle Trace"></iframe>' })), "place-map");
  {
    const { liveMapHtml } = require("./area-map.js");
    const facade = liveMapHtml({ lat: 33.8361, lon: -79.0478, name: "Myrtle Trace", svg: '<svg role="img" aria-label="Myrtle Trace, the beach and Conway"></svg>', caption: "Map: where Myrtle Trace is" });
    check("place-map: the facade holds its iframe in a template", /<template><iframe/.test(facade));
    quiet("our static map with a live map behind a click (tools/area-map.js)", place(gold({ body: facade })), "place-map");
  }
  quiet("a figure captioned as a map", place(gold({ body: '<figure><svg role="img" aria-label="Myrtle Trace, the beach and Conway"></svg><figcaption>Map: where Myrtle Trace is</figcaption></figure>' })), "place-map");
  quiet("a satellite view (live /invest/rental-returns/)", place(gold({ body: '<img src="/a.jpg" alt="Satellite view of the Grand Strand from Little River south to Pawleys Island, with the eight areas outlined.">' })), "place-map");
  quiet("a page that is not a place page", base, "place-map");
  check("place-map: is a blocker", grade(parse(place(gold()))).blockers.includes("place-map"));
}

/* Page design (STANDARD A7, A13, H14, H15; reports/Page design for readers and search.md, 2026-10-11).
   Firing text is live site markup, or a live heading with the short label the live page puts over it. */
{
  const fires = (name, html, id) => { check(`${id}: mutation landed (${name})`, html !== base); const r = credit(html, id); check(`${id}: fires on ${name}`, r.credit !== null && r.credit < 1, `(${r.credit}: ${r.detail})`); };
  const quiet = (name, html, id) => { const r = credit(html, id); check(`${id}: quiet on ${name}`, r.credit === null || r.credit === 1, `(${r.credit}: ${r.detail})`); };
  /* Passes, and was read: a control that is only "not applicable" cannot show the check sees the markup. */
  const passes = (name, html, id) => { const r = credit(html, id); check(`${id}: passes ${name}`, r.credit === 1, `(${r.credit}: ${r.detail})`); };

  /* A7: the FAQ is for readers. FAQPage schema is optional since Google dropped FAQ rich results (2026-05-07). */
  const noSchema = base.replace(/<script type="application\/ld\+json">\{[^<]*"FAQPage"[^<]*<\/script>/, "");
  check("faq: schema removed", noSchema !== base && !/FAQPage/.test(noSchema));
  passes("a visible FAQ with no FAQPage schema", noSchema, "faq");
  check("faq-match: not applicable with no FAQPage schema", credit(noSchema, "faq-match").credit === null);
  fires("no FAQ at all", noSchema.replace(/<h3>[^<]*\?<\/h3><p>[^<]*<\/p>/g, ""), "faq");

  /* A13: answers stay open. Live /buyers/buying-in-myrtle-beach/ holds its FAQ in closed accordions. */
  const live = '<section><div class="wrap"><h2>Every question out-of-state buyers ask us.</h2><details class="accordion-item"><summary class="accordion-q">Do I need to visit before making an offer?</summary><div class="accordion-a"><p>Not necessarily. We facilitate remote purchases routinely: 3D virtual tours, cinematic listing video, neighborhood context walkthroughs over video call, and remote online notarization for closing documents. Most out-of-state buyers we work with visit once for the inspection, then close remotely.</p></div></details></div></section>';
  fires("a closed <details> FAQ (live /buyers/buying-in-myrtle-beach/)", gold({ body: live }), "open-answers");
  fires("a closed mistakes list (live /buyers/common-mistakes/)", gold({ body: '<details class="accordion-item"><summary class="accordion-q">Skipping the insurance quote until after the inspection period</summary><div class="accordion-a"><p>Most buyers get a general home inspection and fall in love with the property before they price the insurance.</p></div></details>' }), "open-answers");
  passes("the same FAQ open", gold({ body: live.replace('<details class="accordion-item">', '<details class="accordion-item" open>') }), "open-answers");
  quiet("open headings and paragraphs (gold)", base, "open-answers");
  check("faq: reads an answer inside <details>", require("./score.js").facts(parse(gold({ body: live }))).design.visibleFaq.some(q => /^Not necessarily\./.test(q.text)));

  /* H14: "On this page" labels are the headings, word for word, and every section is listed. */
  const ids = (h) => h.replace("<h2>What is a special assessment?</h2>", '<h2 id="what">What is a special assessment?</h2>')
    .replace("<h2>What triggers one in Surfside Beach and North Myrtle Beach?</h2>", '<h2 id="triggers">What triggers one in Surfside Beach and North Myrtle Beach?</h2>')
    .replace("<h2>Who pays it when the unit sells?</h2>", '<h2 id="who-pays">Who pays it when the unit sells?</h2>')
    .replace("<h2>Special assessment FAQ</h2>", '<h2 id="faq">Special assessment FAQ</h2>');
  const toc = (items) => `<nav aria-label="On this page"><p>On this page</p><ul>${items.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join("")}</ul></nav>`;
  const all = [["what", "What is a special assessment?"], ["triggers", "What triggers one in Surfside Beach and North Myrtle Beach?"], ["who-pays", "Who pays it when the unit sells?"], ["faq", "Special assessment FAQ"]];
  const withToc = (items, extra = "") => ids(base).replace("<section><div class=\"wrap\"><h2", `${toc(items)}${extra}<section><div class="wrap"><h2`);
  check("toc: ids landed", (ids(base).match(/<h2 id=/g) || []).length === 4);
  passes("labels identical to the headings", withToc(all), "toc");
  quiet("a page with no list", base, "toc");
  /* Live /buyers/waterfront-homes/ heads this section "Docks and dock permits, the part that decides value" under the label "Docks". */
  fires("a short label for a long heading (live /buyers/waterfront-homes/)", withToc(all.concat([["docks", "Docks"]]), '<section><div class="wrap"><h2 id="docks">Docks and dock permits, the part that decides value</h2><p>A private dock needs a permit.</p></div></section>'), "toc");
  /* A heading that declares its short label (mkpage-reading.patch, 2026-10-11; 55+ pages, v12: "Where is
     Del Webb North Myrtle Beach?" listed as "Where is it?"). The label may be the declared one, never another. */
  const shortDecl = (h) => h.replace('<h2 id="who-pays">Who pays it when the unit sells?</h2>', '<h2 id="who-pays" data-toc="Who pays?">Who pays it when the unit sells?</h2>');
  passes("a short label the heading declares in data-toc", shortDecl(withToc(all.slice(0, 2).concat([["who-pays", "Who pays?"]], all.slice(3)))), "toc");
  fires("a short label that matches neither the heading nor its declared label", shortDecl(withToc(all.slice(0, 2).concat([["who-pays", "Paying"]], all.slice(3)))), "toc");
  fires("a section left out", withToc(all.slice(0, 3)), "toc");
  fires("a link to no heading", withToc(all.concat([["costs", "What does it cost?"]])), "toc");
  quiet("a list after a legal notice that says \"on this page\" is not a contents list", gold({ body: '<p>Nothing on this page is legal advice.</p><ul><li><a href="#lead-form">Ask a question</a></li><li><a href="#main">Back to the top</a></li></ul>' }), "toc");

  /* H15: every icon has a word. Live homepage "why-stat" card, with and without its words. */
  const stat = '<div class="why-stats"><div class="why-stat"><div class="why-ico"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="9" r="6"></circle></svg></div><div><div class="stat-kpi">Specialized agents</div><div class="stat-label">For investors, home buyers, and sellers</div></div></div></div>';
  passes("a card with its words (live homepage)", gold({ body: stat }), "icon-labels");
  fires("the same card with the words removed", gold({ body: stat.replace(/<div><div class="stat-kpi">[\s\S]*?<\/div><\/div><\/div>/, "</div>") }), "icon-labels");
  fires("an icon list item with only a hidden title", gold({ body: '<ul><li><svg aria-hidden="true"><title>Pool</title><path d="M0 0"/></svg></li><li><svg aria-hidden="true"><path d="M0 0"/></svg> Clubhouse</li></ul>' }), "icon-labels");
  passes("tools/icons.js atAGlance cards", gold({ body: require("./icons.js").atAGlance([{ icon: "beach", label: "Beach", text: "About 20 minutes by car" }, { icon: "pets", label: "Pets", text: "Dogs welcome on a leash" }]) }), "icon-labels");
  quiet("an icon in a button (live cost-of-living caret)", gold({ body: '<ul><li><button type="button" aria-label="Show all areas"><svg aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></button></li></ul>' }), "icon-labels");
}

/* T8: a story a stranger can retell (tools/story-check.js has the full controls). Firing text is the
   version 12 Grande Dunes story the owner called "impossible to understand"; passing text is version 13. */
{
  const fires = (name, html, id) => { check(`${id}: mutation landed (${name})`, html !== base); const r = credit(html, id); check(`${id}: fires on ${name}`, r.credit !== null && r.credit < 1, `(${r.credit}: ${r.detail})`); };
  const passes = (name, html, id) => { const r = credit(html, id); check(`${id}: passes ${name}`, r.credit === 1, `(${r.credit}: ${r.detail})`); };
  const card = (ps) => `<div class="c3-story">${ps.map(t => `<p>${t}</p>`).join("")}</div>`;
  fires("the version 12 Grande Dunes story", gold({ body: card(["<strong>Example:</strong> Bill and Nancy are moving from Columbus, Ohio, and they like a villa in Del Webb at Grande Dunes. Their grandsons plan to come for Christmas and then for the whole summer after it.", "Before the offer, their Chapter3 agent asks for the dates and counts the nights on a calendar with them. The agent counts Christmas and the next summer together, because they fall inside the same 12 months.", "The nights add up to more than 90. Nancy moves the boys' summer arrival to the first week of July, and the agent counts again.", "Bill and Nancy make their offer knowing the boys' visits fit the rule. If the visits had not fit, they could have looked at a different neighborhood before they signed anything."]) }), "story-simple");
  passes("the version 13 Grande Dunes story", gold({ body: card(["<strong>Example:</strong> Bill and Nancy are moving from Ohio, and they want their two grandsons to stay with them all summer and again at Christmas. They like a villa in Del Webb at Grande Dunes.", "Before they make an offer, their Chapter3 agent reads the neighborhood's rules with them. A grandchild can stay up to 90 nights a year. Their plan is about two weeks more than that.", "Bill and Nancy cut two weeks from the summer visit and make their offer."]) }), "story-simple");
  fires("a one-paragraph example with arithmetic (the live worked-example shape)", gold({ body: "<p>Example: Mark and Lisa are moving from Ohio with $400,000 to spend. A $350,000 house with a $5,000 deposit leaves $45,000. Their agent adds the fees. They buy.</p>" }), "story-simple");
  check("story-simple: not applicable with no story", credit(base, "story-simple").credit === null);
}

/* Every rule id appears in at least one mutation, so no rule is untested. */
const tested = new Set(mutations.map(m => m[0]).concat(["visual-rhythm", "verdict", "exact-amounts", "number-density", "date-mentions",
  "price-headline", "deflection", "plain-words", "plain-voice", "people-act", "pictures", "place-map", "open-answers", "toc", "icon-labels", "story-simple"]));
for (const r of RULES) check(`rule ${r.id} has a control`, tested.has(r.id));

/* Every rule maps to a STANDARD.md id. */
const { STD } = require("./score.js");
for (const r of RULES.concat(SITE_RULES)) check(`rule ${r.id} has a STANDARD id`, !!STD[r.id]);

console.log(failures ? `\n${failures} failing` : "\nall controls pass");
process.exit(failures ? 1 : 0);
