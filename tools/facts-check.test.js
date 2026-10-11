#!/usr/bin/env node
/*
 * Controls for facts-check.js. Each registered fact gets a wrong sentence that
 * must fire (taken from the live site on 2026-10-02) and a near miss that must
 * not (the false positives the first run produced, or the correct wording).
 *
 *   node tools/facts-check.test.js
 */
"use strict";
const { checkPage, staleEntries } = require("./facts-check.js");
const REG = require("../facts/registry.json");

const page = (text) => `<!doctype html><html><head><title>T</title></head><body><main><p>${text}</p></main></body></html>`;
const fires = (text, id) => checkPage(page(text), "/x/").some(f => f.fact === id);

let failures = 0;
const check = (name, cond) => { if (!cond) { failures++; console.log(`FAIL  ${name}`); } else console.log(`ok    ${name}`); };

const cases = [
  /* Gaps closed 2026-10-02: live wording the first patterns missed. */
  ["sc-transient-days", "Myrtle Beach treats any stay under 90 days as short-term, which is stricter than South Carolina's general 30-day threshold.",
    "Myrtle Beach treats any stay under 90 days as short-term, the same line the state uses."],
  ["deed-fee-payer", "On a $350,000 purchase that is $1,295 in deed stamps alone, in addition to attorney fees.",
    "A $350,000 sale = $1,295 in deed stamps."],
  ["mcleod-carolina-forest", "Three more hospitals are in progress.",
    "Two more hospitals are under construction."],
  ["nmb-str-permit", "The city requires an annual short-term-rental permit and a business license, a safety inspection, and a Responsible Local Agent on file.",
    "Since 2024 the city has been workshopping a responsible local agent ordinance, which has not been adopted."],
  ["nmb-str-permit", "North Myrtle Beach requires an annual permit, a business license and a responsible party.",
    "North Myrtle Beach requires a business license for a short-term rental."],
  ["rental-vs-residence-tax", "The effective property tax on the same home can be close to double when it is not your primary residence.",
    "Condo supply is roughly double single-family."],
  ["rental-vs-residence-tax", "Investment property is assessed at South Carolina's 6 percent ratio, roughly double the owner-occupant rate.",
    "A Massachusetts average home sale is close to double a home here."],
  ["mb-lodging-tax", "You need a business license and the 10 percent lodging tax.",
    "A rental in the City of Myrtle Beach collects about 13 percent in lodging taxes."],
  ["sc-transient-days", "The city defines short-term as under 90 days (not the state 30).",
    "The state and the city both treat a stay under 90 days as transient."],
  ["pawleys-county", "Murrells Inlet and Pawleys Island straddle the Horry and Georgetown county line.",
    "Murrells Inlet straddles the county line; Pawleys Island is in Georgetown County."],
  ["pawleys-county", "Murrells Inlet, Litchfield and the town of Pawleys Island are in Georgetown County.",
    "Litchfield and the town of Pawleys Island are in Georgetown County."],
  ["sc-age-65-deduction", "A retirement deduction of up to $10,000 from 65, plus a separate age-65 deduction of up to $15,000.",
    "The age-65 deduction of up to $15,000 is reduced by any retirement deduction you claim."],
  ["sc-scaid-2026", "South Carolina's standard deduction is $15,000 single and $30,000 joint.",
    "The SC Income Adjusted Deduction is $30,000 joint and phases out above $80,000."],
  ["hoa-48-hour-notice", "Homeowners must be given notice at least 48 hours before the meeting at which a decision to raise the annual budget is made.",
    "The broker-in-charge must deposit a check within 48 hours of written acceptance of the offer."],
  ["hoa-48-hour-notice", "State law can allow as little as 48 hours.",
    "The 48-hour notice before a budget vote does not apply to an association under the Nonprofit Corporation Act."],
  ["wind-pool-line", "Close to the beach, roughly east of Highway 17 Business, South Carolina lets insurers exclude wind from the homeowners policy.",
    "What is the difference between US 17 Business and US 17 Bypass?"],
  ["wind-pool-line", "The state wind pool's Horry County territory runs east of the Intracoastal Waterway's west bank.",
    "The Intracoastal Waterway runs through Carolina Forest."],
  ["nonresident-withholding-duty", "South Carolina closing attorneys are required to withhold the top individual rate.",
    "The buyer withholds; the closing attorney remits what it withholds."],
  ["deed-fee-payer", "As a buyer, budget $1,295 in deed stamps on a $350,000 purchase.",
    "The seller pays the deed stamps, $3.70 per $1,000."],
  ["buyer-agreement-source", "Since August 2024, South Carolina requires a written buyer representation agreement before an agent can show you homes.",
    "MLS rules since August 2024 require a written buyer agreement before a tour."],
  ["conversion-overlay-date", "Buildings in the core visitor areas can no longer convert, under a 2025 ordinance.",
    "Under Ordinance 2024-69, adopted in December 2024, they can no longer convert."],
  ["mcleod-carolina-forest", "McLeod said in January 2026 that it remains on schedule to open in 2026.",
    "McLeod Health Carolina Forest cut its ribbon on August 27, 2026."],
  ["mortgage-rate-statements", "The national 30-year fixed averaged 6.55 percent that week.",
    "Rates change weekly; your lender quotes yours."],
  /* Batch 2026-10-a (55+ pages): live hub, retirees and golf text on 2026-10-11, against the corrected wording. */
  ["seasons-gate", "Seasons at Prince Creek West in Murrells Inlet is gated.",
    "Seasons is deed-restricted and built around single-level plans and a full amenity program."],
  ["seasons-gate", "It anchors the Prince Creek master plan in Murrells Inlet, where villages range from the low $300,000s to the $600,000s and up, including the gated Seasons 55+ community.",
    "It anchors the Prince Creek master plan in Murrells Inlet, where villages range from the low $300,000s to the $600,000s and up, including the Seasons 55+ community."],
  /* Version 14 (2026-10-11): the verified wording is a gate with a call box (rows 92, 93). A guard, a
     staffed gate, guard hours or "verified gated" still fire. Firing text from the listings in row 94 and
     the old hub; quiet text from the Seasons page and the same listings. */
  ["seasons-gate", "At the main entrance to Seasons, proceed to the guard gate.",
    "There is a gate at the main entrance on TPC Boulevard, with a call box for visitors."],
  ["seasons-gate", "The Guard is on duty Monday-Friday 8am-4pm.",
    "Please use the call box if no guard is on duty."],
  ["seasons-gate", "Verified gated: Seasons at Prince Creek West in Murrells Inlet, with controlled access, and Del Webb at Grande Dunes.",
    "Listings show a gate at the main entrance on TPC Boulevard, with a call box for visitors."],
  ["del-webb-grande-dunes-gate", "Del Webb at Grande Dunes is the most established active adult community with resort-level amenities, gated access, and an on-site lifestyle director.",
    "Grande Dunes and Barefoot are gated only in certain villages, and value communities like Blackmoor and Wild Wing are open."],
  ["del-webb-grande-dunes-gate", "Verified gated: Seasons at Prince Creek West in Murrells Inlet, with controlled access, and Del Webb at Grande Dunes.",
    "Del Webb at Grande Dunes has indoor and outdoor pools, a lifestyle director, and HOA dues that include an oceanfront beach club."],
  ["myrtle-trace-hoa-fee", "For fee-simple ownership, Woodlake Village in Murrells Inlet runs $260,000 to $379,000 with an HOA around $43 a month, and Myrtle Trace in Conway averages about $305,000 at roughly $90 a month.",
    "For fee-simple ownership, Woodlake Village in Murrells Inlet runs $260,000 to $379,000 with an HOA around $43 a month, and in Myrtle Trace in Conway, homes usually sell for about $300,000, with an HOA fee of $95 a month."],
  ["del-webb-grande-dunes-hoa-fee", "Nine 55+ communities in Myrtle Beach compared: prices from $190K, HOA fees $43 to $384 a month, the land-lease catch, and South Carolina retiree tax breaks.",
    "Nine 55+ communities in Myrtle Beach compared: prices from $190K, HOA fees from $43 a month, the land-lease catch, and South Carolina retiree tax breaks."],
  ["del-webb-grande-dunes-hoa-fee", "$317/mo houses, $384/mo villas; includes the oceanfront Grande Dunes Ocean Club",
    "About $400/mo for a house, about $445 for a villa; includes basic lawn care and the oceanfront Grande Dunes Ocean Club"],
  ["seasons-hoa-fee", "About $300 to $330/mo: cable, internet, phone, lawn, security monitoring, lifestyle director",
    "About $340/mo: internet, weekly trash pickup and lawn care"],
];
for (const [id, bad, good] of cases) {
  check(`${id}: fires on "${bad.slice(0, 50)}..."`, fires(bad, id));
  check(`${id}: quiet on "${good.slice(0, 50)}..."`, !fires(good, id));
}
/* llms.txt and llms-full.txt are plain text; the same rules apply to them. */
const { checkText } = require("./facts-check.js");
check("llms text: fires on a wrong sentence", checkText("- [55+ Communities](https://chapter3realty.com/buyers/55-plus-communities/): Nine verified communities compared: prices from $190k, HOA fees $43-$384/mo, the land-lease model.", "/llms.txt").some(f => f.fact === "del-webb-grande-dunes-hoa-fee"));
check("llms text: quiet on the corrected line", !checkText("- [55+ Communities](https://chapter3realty.com/buyers/55-plus-communities/): Nine verified communities compared: prices from $190k, HOA fees from $43/mo, the land-lease model.", "/llms.txt").length);

const tested = new Set(cases.map(c => c[0]));
for (const f of REG.facts) check(`fact ${f.id} has a control`, tested.has(f.id));
for (const f of REG.facts) check(`fact ${f.id} has source, asOf and staleBy`, !!(f.source && f.asOf && f.staleBy));

/* Stale detection: an entry dated in the past is reported. */
process.env.SCORE_TODAY = "2099-12-31";
delete require.cache[require.resolve("./facts-check.js")];
check("staleBy: entries past their date are reported", require("./facts-check.js").staleEntries().length > 0);

console.log(failures ? `\n${failures} failing` : "\nall controls pass");
process.exit(failures ? 1 : 0);
