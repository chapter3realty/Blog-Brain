#!/usr/bin/env node
/*
 * Controls for story-check.js. The passing stories are the four published in batch 2026-10-a version 13,
 * after a cold reader retold each one. The failing ones are earlier versions the owner or a cold reader
 * could not follow, word for word from the specs' history.
 *
 *   node tools/story-check.test.js
 */
"use strict";
const { check } = require("./story-check.js");
let failures = 0;
const ok = (name, cond, extra = "") => { if (!cond) { failures++; console.log(`FAIL ${name} ${extra}`); } else console.log(`ok   ${name}`); };
const passes = (name, t) => { const p = check(t); ok(`passes: ${name}`, !p.length, JSON.stringify(p)); };
const fires = (name, t, re) => { const p = check(t); ok(`fires: ${name}`, p.some(x => re.test(x)), JSON.stringify(p)); };

/* Published, version 13 (cold retell passed, 2026-10-11). */
passes("Grande Dunes v13", "Example: Bill and Nancy are moving from Ohio, and they want their two grandsons to stay with them all summer and again at Christmas. They like a villa in Del Webb at Grande Dunes. Before they make an offer, their Chapter3 agent reads the neighborhood's rules with them. A grandchild can stay up to 90 nights a year. Their plan is about two weeks more than that. Bill and Nancy cut two weeks from the summer visit and make their offer.");
passes("North Myrtle Beach v13", "Example: Frank and Joyce plan to spend summers near their son in Michigan. While they are away, they want to rent their new house to vacationers by the week. They pick out a new house in Del Webb North Myrtle Beach and are ready to sign the builder's contract. Before they sign, their Chapter3 agent reads the renting rules for the neighborhood with them. Every renter there must stay at least 30 days, so they cannot rent by the week. Frank and Joyce plan on one renter for the whole summer, and they sign the contract.");
passes("Myrtle Trace v13", "Example: Pat is moving from Erie, Pennsylvania, with her dog, Max, and she wants a fenced back yard where he can run. She likes a house in Myrtle Trace that backs onto the golf course. Before she makes an offer, her Chapter3 agent reads the neighborhood's rules with her. A house on the golf course cannot have a fence around its back yard. The agent shows her that a dog run, a small pen beside the house, is allowed once the HOA approves it. Pat makes her offer, with a plan for Max's dog run beside the patio.");
passes("Seasons v13", "Example: Carol and Jim are moving from Buffalo, and they want a house in Seasons that backs onto the woods. They find one they like and plan to make an offer that night. First, their Chapter3 agent checks the government's flood map for that house. The back of the house is in the high-risk flood area, so their lender will require flood insurance. That is a yearly bill Carol and Jim had not planned on. The agent gets them a quote that afternoon, and they make their offer that night knowing the cost.");

/* Version 12 Grande Dunes, the one the owner called "impossible to understand". */
const gd12 = "Example: Bill and Nancy are moving from Columbus, Ohio, and they like a villa in Del Webb at Grande Dunes. Their grandsons plan to come for Christmas and then for the whole summer after it. Before the offer, their Chapter3 agent asks for the dates and counts the nights on a calendar with them. The agent counts Christmas and the next summer together, because they fall inside the same 12 months. The nights add up to more than 90. Nancy moves the boys' summer arrival to the first week of July, and the agent counts again. Bill and Nancy make their offer knowing the boys' visits fit the rule. If the visits had not fit, they could have looked at a different neighborhood before they signed anything.";
fires("Grande Dunes v12: a condition", gd12, /condition/);
fires("Grande Dunes v12: too long", gd12, /sentences/);
fires("Grande Dunes v12: counting", gd12, /count/);
/* Version 4 examples carried prices and arithmetic. */
fires("a price inside the story", "Example: Mark and Lisa are moving from Ohio. They like a house that costs $432,500. Their agent reads the rules with them. The fee is about $400 a month. They make an offer.", /price/);
fires("a 30-word sentence", "Example: Ann wants a house near the beach. Her agent checks the flood map with her before she makes an offer on the small blue house near the inlet that she saw on Sunday with her sister and her sister's husband. It needs flood insurance. She makes her offer knowing the cost.", /over 25 words/);
fires("unless", "Example: Ann wants to rent her house by the week. Her agent reads the rules with her. Renters must stay a month unless the board agrees. She plans one long renter instead.", /condition/);
fires("three sentences", "Example: Ann wants a dog. The rules allow one. She gets a dog.", /sentences/);
/* "one" as a pronoun is not a count; "Chapter3" is not a number. */
passes("one as a pronoun", "Example: Ann wants a house with a big yard for her dog. She finds the one she likes near the pond. Before she makes an offer, her Chapter3 agent reads the rules with her. No one may fence a yard on the pond. Her agent shows her a pen beside the house is allowed. Ann makes her offer.");

console.log(failures ? `\n${failures} failing` : "\nall controls pass");
process.exit(failures ? 1 : 0);
