#!/usr/bin/env node
/*
 * Controls for claims-scan.js: for every rule, a sentence that must fire and a
 * near miss that must not. The near misses are the live sentences that fired
 * wrongly on the first run against the site (2026-10-02), so the rules cannot
 * drift back into those false positives.
 *
 *   node tools/claims-scan.test.js
 */
"use strict";
const { scanPage } = require("./claims-scan.js");
const RULES = require("../rules/claims.json");

const page = ({ main = "", footer = "", meta = "", head = "", url = "/x/" } = {}) => [`<!doctype html><html lang="en"><head><title>A Myrtle Beach page | Chapter3</title>
<meta name="description" content="${meta}">${head}</head><body><header>Menu</header><main id="main">${main}</main><footer>${footer}</footer></body></html>`, url];

let failures = 0;
const check = (name, cond, extra = "") => { if (!cond) { failures++; console.log(`FAIL  ${name} ${extra}`); } else console.log(`ok    ${name}`); };
const rulesFired = (html, url) => scanPage(html, url).map(f => f.rule);

/* [rule, html-producing args that must fire, args that must not fire] */
const cases = [
  ["lender-identity", { main: "<p>Because the brokerage and the lender are the same company, we move fast.</p>" }, { main: "<p>Ask a loan officer at our preferred lender.</p>" }],
  ["lender-identity", { main: "<p>We are a brokerage with our own mortgage team.</p>" }, { main: "<p>Our lending partner, BrickWood Mortgage, quotes the loan.</p>" }],
  ["lender-identity", { main: "<h2>One team for real estate and financing.</h2>" }, { main: "<p>One team reads the HOA documents.</p>" }],
  ["lender-identity", { main: "<p>A Real Deal We Underwrote</p>" }, { main: "<p>The lender underwrites the loan.</p>" }],
  ["lender-possessive", { main: "<p>Our lender, BrickWood Mortgage, will lay out both paths.</p>" }, { main: "<p>According to a loan officer at our preferred lender, the rule is simple.</p>" }],
  ["lender-possessive", { main: "<p>Equal Housing Lender.</p>" }, { main: "<p>Equal Housing Opportunity.</p>" }],
  ["financing-as-service", { footer: "<p>DSCR financing, STR analysis, and condo-by-condo ROI data for investors.</p>" }, { main: "<p>DSCR financing, which qualifies on rent, is common here.</p>" }],
  ["financing-as-service", { meta: "Build a Grand Strand rental portfolio with DSCR financing and local permit data." }, { meta: "DSCR loans for Myrtle Beach investors: qualify on rental income." }],
  ["financing-as-service", { main: "<p>Condotel financing, STR rules and building data.</p>" }, { main: "<p><a href='/invest/condotel-financing/'>Condotel financing, explained</a>.</p>" }],
  ["licence-claim", { meta: "From a licensed agent and MLO." }, { meta: "From a licensed agent in Myrtle Beach." }],
  ["licence-claim", { main: "<p>South Carolina license 43182, NMLS 252563.</p>" }, { main: "<p>BrickWood Mortgage (NMLS #189497).</p>" }],
  ["interest-rate", { main: "<p>The national 30-year fixed averaged 6.55 percent that week.</p>" }, { main: "<p>The cap rate is 6.5 percent on this condo.</p>" }],
  ["interest-rate", { main: "<p>The program raises your interest rate by an average of 2 percentage points.</p>" }, { main: "<p>The tax rate is 6 percent on rentals.</p>" }],
  ["superlative", { main: "<p>No other local brokerage offers this.</p>" }, { main: "<p>No other lien comes before the tax lien.</p>" }],
  ["superlative", { main: "<p>Buyers say Chapter3 Realty is the best brokerage to buy from.</p>" }, { main: "<p>The best time to buy is after the season.</p>" }],
  ["firm-experience", { main: "<p>We have closed in every submarket from Little River to Pawleys Island.</p>" }, { main: "<p>Tim Nash has sold in every town on the Grand Strand.</p>" }],
  ["firm-experience", { meta: "A brokerage with 18 years of local loan data." }, { main: "<p>Preferred lender: 18 years of local loan files through BrickWood Mortgage.</p>" }],
  ["off-market-promise", { main: "<p>We send off-market homes before they hit the public sites.</p>" }, { main: "<p>Some sellers sell off-market to an investor.</p>" }],
  ["fair-housing", { main: "<p>It has the best schools in Horry County.</p>" }, { main: "<p>Phrases like good schools can steer buyers, so we link the district's map.</p>" }],
  ["fair-housing", { meta: "Surfside Beach: family-friendly beach home prices." }, { meta: "Surfside Beach: beach home prices and rental income." }],
  ["agent-free", { main: "<p>Your agent costs you nothing in most transactions.</p>" }, { main: "<p>That request costs you nothing and it creates a record.</p>" }],
  ["individual-named", { main: "<p>Devin runs operations and pricing.</p>" }, { main: "<p>Our broker prices every listing.</p>" }],
  ["individual-named", { main: "<p>By Devin Day, Operations Officer · Updated September 2, 2026</p>" }, { main: "<p>By Chapter3 Realty · Updated September 2, 2026</p>" }],
  ["individual-named", { head: '<script type="application/ld+json">{"@type":"Article","author":{"@type":"Person","name":"Devin Day"}}</script>' }, { head: '<script type="application/ld+json">{"@type":"Article","author":{"@id":"https://chapter3realty.com/#org"}}</script>' }],
  ["individual-named", { main: "<p>The dog table above is personal for us: Devin brings his dog to the sand.</p>" }, { main: "<p>The dog table lists the beaches that allow dogs, and the months.</p>" }],
  /* Gaps closed 2026-10-02: each firing sentence is live text the first rules missed. */
  ["interest-rate", { main: "<p>On a VA loan that might otherwise qualify at 6.5%, the DPA-adjusted rate could be 8.5%.</p>" }, { main: "<p>The lender decides whether you qualify at all.</p>" }],
  ["interest-rate", { main: "<p>Rates touched about 6.30 in April, drifted back to the mid 6.5s, and sit below last July's 6.75.</p>" }, { main: "<p>Occupancy rates touched 71 percent in July.</p>" }],
  /* Affiliation is real (owner 2026-10-04): affiliated wording is quiet, ownership wording fires. */
  ["lender-possessive", { main: "<p>Any lender can run that comparison, including our lender, BrickWood Mortgage.</p>" }, { main: "<p>Any lender can run that comparison for you, including our affiliated lender, BrickWood Mortgage.</p>" }],
  ["lender-identity", { main: "<p>Because our lender works at the same company we do, we time the loan.</p>" }, { main: "<p>Chapter3 is affiliated with BrickWood Mortgage (NMLS #189497), a separate company.</p>" }],
  ["lender-identity", { main: "<p>Chapter III Realty offers financing for condotels.</p>" }, { main: "<p>Chapter III Realty runs the rental analysis; your lender decides the loan.</p>" }],
  ["financing-as-service", { main: "<p>Submarket research, and DSCR, condotel and non-warrantable condo loans through BrickWood Mortgage.</p>" }, { main: "<p>Ask BrickWood Mortgage which loans fit a condotel.</p>" }],
  ["individual-named", { main: "<p><a href='/contact/'>Talk Strategy With Devin</a></p>" }, { main: "<p><a href='/contact/'>Talk strategy with Chapter3</a></p>" }],
  ["off-market-promise", { meta: "Free DSCR estimates, STR data, and off-market deals from a data-driven Grand Strand team." }, { meta: "Free STR data from a Grand Strand team." }],
  ["off-market-promise", { main: "<p>We search the Coastal Carolinas MLS and our off-market sources and bring you a short list.</p>" }, { main: "<p>We search the Coastal Carolinas MLS and bring you a short list.</p>" }],
  ["fair-housing", { main: "<p>A zip code may contain a top-rated school district or a golf-cart-friendly community.</p>" }, { main: "<p>Look up the school assignment on the district's own map.</p>" }],
  ["fair-housing", { main: "<p>The town most relocating families tour first has its own guide: Carolina Forest.</p>" }, { main: "<p>The town most relocating buyers ask about has its own guide: Carolina Forest.</p>" }],
  ["template-residue", { main: "<p>%s</p><p>%s<a href='/a/'>Analyze my documents</a></p>" }, { main: "<p><span>+131%</span><span>since the 2012 low</span></p>" }],
];
for (const [rule, bad, good] of cases) {
  check(`${rule}: fires on ${JSON.stringify(Object.values(bad)[0]).slice(0, 60)}`, rulesFired(...page(bad)).includes(rule));
  check(`${rule}: quiet on ${JSON.stringify(Object.values(good)[0]).slice(0, 60)}`, !rulesFired(...page(good)).includes(rule));
}

/* allowPages: the fair-housing page may quote the phrases it warns against. */
check("fair-housing: allowPages exempts /fair-housing/", !rulesFired(...page({ main: "<p>Do not say family-friendly.</p>", url: "/fair-housing/" })).includes("fair-housing"));

/* Calculator defaults. */
const calc = (inputs, url = "/buyers/cost-to-own/") => page({ main: inputs, url });
check("default-rate: fires on a pre-filled rate", rulesFired(...calc('<label for="r">Interest rate %</label><input id="r" type="number" value="7">')).includes("default-rate"));
check("default-rate: quiet on an empty rate box", !rulesFired(...calc('<label for="r">Interest rate %</label><input id="r" type="number" value="">')).includes("default-rate"));
check("default-rate: quiet on a nightly rate", !rulesFired(...calc('<label for="n">Short-term rate ($/night)</label><input id="n" type="number" value="185">')).includes("default-rate"));
check("default-rate: quiet on a cap rate", !rulesFired(...calc('<label for="c">Target cap rate %</label><input id="c" type="number" value="6">')).includes("default-rate"));
check("default-down-payment: fires on an owner-occupied page", rulesFired(...calc('<label for="d">Down payment %</label><input id="d" type="number" value="20">')).includes("default-down-payment"));
check("default-down-payment: allowed on the DSCR page", !rulesFired(...calc('<label for="d">Down payment %</label><input id="d" type="number" value="25">', "/invest/strategies/dscr-loans/")).includes("default-down-payment"));

/* Surfaces: the same claim is caught in JSON-LD and in og tags, not only in <main>. */
check("surface: JSON-LD FAQ text is scanned", rulesFired(...page({ head: '<script type="application/ld+json">{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Q","acceptedAnswer":{"@type":"Answer","text":"Our lender and we are the same company."}}]}</script>' })).includes("lender-identity"));
check("surface: og:description is scanned", rulesFired(...page({ head: '<meta property="og:description" content="From a licensed agent and MLO.">' })).includes("licence-claim"));

/* Every rule in rules/claims.json has a control above. */
const tested = new Set(cases.map(c => c[0]));
for (const r of RULES.rules) check(`rule ${r.id} has a control`, tested.has(r.id));

console.log(failures ? `\n${failures} failing` : "\nall controls pass");
process.exit(failures ? 1 : 0);
