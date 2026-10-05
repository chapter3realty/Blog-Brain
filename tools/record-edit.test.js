#!/usr/bin/env node
/*
 * Controls for record-edit.js. The cases are real owner edits from voice/edits.jsonl
 * (the accommodations-tax model sentence and the "sets" deletion), set inside a page.
 *
 *   node tools/record-edit.test.js
 */
"use strict";
const { diff } = require("./record-edit.js");
let failures = 0;
const check = (name, cond, extra = "") => { if (!cond) { failures++; console.log(`FAIL  ${name} ${extra}`); } else console.log(`ok    ${name}`); };

const keep = "A short-term rental in the city collects lodging tax on every booking. The county runs its own return.";
/* Rewrite: his plain version of the platform sentence (MISTAKES 66). */
const d1 = `${keep} When a guest books through a platform that remits on your behalf, the gap opens only for direct bookings.`;
const e1 = `${keep} If Airbnb or VRBO take the payment, they pay the tax on that booking.`;
const r1 = diff(d1, e1);
check("a heavy rewrite is recorded as a rewrite, or as a delete and an add", (r1.length === 1 && r1[0].kind === "rewrite") || (r1.length === 2 && r1.some(c => c.kind === "delete") && r1.some(c => c.kind === "add")), JSON.stringify(r1));
check("unchanged sentences are not recorded", !r1.some(c => c.before === "The county runs its own return."));
/* Delete: "The rent depends on this number." was deleted outright (voice/RULES.md). */
const d2 = `${keep} The rent depends on this number.`;
const r2 = diff(d2, keep);
check("a deleted sentence is a delete", r2.length === 1 && r2[0].kind === "delete" && r2[0].before === "The rent depends on this number.", JSON.stringify(r2));
/* Add: a new sentence with nothing like it in the draft. */
const r3 = diff(keep, `${keep} Ask the county for the form in January.`);
check("a new sentence is an add", r3.length === 1 && r3[0].kind === "add", JSON.stringify(r3));
/* Close rewrite: one word changed ("crowding" to "overcrowding"). */
const r4 = diff("Crowding in J-1 houses is a known problem.", "Overcrowding in J-1 houses is a known problem.");
check("a one-word change is a rewrite", r4.length === 1 && r4[0].kind === "rewrite", JSON.stringify(r4));
/* No edits: nothing recorded. */
check("identical text records nothing", diff(keep, keep).length === 0);

console.log(failures ? `\n${failures} control(s) failed` : "\nall controls pass");
process.exitCode = failures ? 1 : 0;
