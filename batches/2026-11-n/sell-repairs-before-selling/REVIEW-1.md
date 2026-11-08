# Review round 1: what changed, finding by finding

Fixer, 2026-11-08. All changes are in `specs/sell-repairs-before-selling.js` (version 2). The old spec is kept at `<scratchpad>/wfn/sell-repairs-before-selling/spec-v1.js`. New facts: rows 27 to 30 in facts.md, marked VERIFIED-BY-FIXER. No fact was added without a row.

## Critic (score 8)

Blocking:
- "Among houses built 2016 or later, about 1 in 100 do." Cut (the owner's reviewer asked to cut it too). The chart's 1% bar shows it.
- "That a report you paid for counts as something you know is our reading of the law..." The note is gone. The Against list now says: "The disclosure form asks what you know. Once you read the report, you know what it found." Both are plain facts, not a reading of the law, so the hedge is no longer needed. The attorney line stays in one sentence.
- "What the report tells you, you know, ..." Replaced with the critic's two sentences.
- "A four-point inspection is one an insurer asks for, not a law." Now "Some insurers ask for a four-point inspection before they insure an older house." "No law requires one" was not used: no row shows that.

Nits:
- CL-100 in the H2 now uses a non-breaking hyphen (U+2011); checked at 320 px, "CL-100" stays on one line. The table column head uses it too. The TOC, body and FAQ keep the plain hyphen for search.
- Age chart label wrapping: the chart is cut (owner's finding). The offer headings get text-wrap: balance.
- The italic sub line is capped at 720 px; at 1440 it wraps on two lines inside the H1 width.
- The empty column beside the age chart and the new-roof chart: the age chart is cut, and the new-roof chart is now in the normal flow, not beside the text. The roof photo sits beside the three roof steps, and is shorter than them.
- "Its full name is ..." Now "It is written on the state's form, the Official South Carolina Wood Infestation Report." CL-100 is never called the form's official name.
- Short answer: "in a national survey" added before the 60 percent. The hero tile says "in a national survey" too.
- Local angle for the cheap fixes (count of listings that advertise fresh paint): not done. The CRM has no paint flag in the published flag list (batches/2026-10-b/ABDULLA-ASK-2026-10-28.md), and a text search of remarks is not a count method we have verified. The section now says "national" in the link.
- Title: see the owner's nit below.
- Service claim on insurance agents: the sentence is cut from the body. The roof offer box asks the reader to send what they know; it names no agent or insurer.

## Reader (score 7)

- "Whether to replace my old roof": the roof section is rewritten around that question. H2 "Should you replace an old roof before selling?" The first paragraph answers: not always; if it does not leak and a roofer finds two years of life left, an FHA appraiser can accept it; an insurer may still ask its age; a roof that leaks or has less life left is the one to replace or price in. Then the 2003 example, then three numbered steps: find its age (invoice, permit number, county roof letter), have a roofer put the years left in writing before you list, decide with that letter. The fix, credit or as-is section now says it applies "before you list, and again after the buyer's inspection". The remodel chart now says in one line that the report has no row for a new roof or heating and air.
- No costs: not added. No price for a roof, heat pump, water heater, CL-100 or pre-listing inspection was verified (facts.md, Not verified). The site's closing costs calculator uses $110 for a CL-100, but that figure has no ledger or registry row. The page now says why it gives no prices and how to weigh a fix against a credit: "get a written price for the fix and compare it with what the buyer asks for." Who pays for the CL-100 is answered (row 27): the regulation does not say; buyer and seller agree in the contract; a lender can ask for one.
- Florida: the Florida age rule is cut. The page says some insurers ask for a four-point inspection on an older house, that the table's questions come from a sample form by a Florida insurer, and that an insurer here can use its own form. The FAQ "How old can a roof be for insurance in South Carolina?" says we found no public South Carolina rule (row 28; the one SC insurer page that might have one still returns 503), what the four-point report gives the insurer, and the FHA two-year line. A real answer waits on OWNER-QUESTIONS Q2.
- Horry County roof letter: now one step in the list: "a form the owner or roofer signs in front of a notary for a roof job, also lists the permit number." "Underlayment" and the code citation are cut. The page does not say whether the letter is needed to sell: no row shows that.
- Pre-listing verdict: the section now says when it is most useful (an older house whose roof, heating and air or wiring may be near the end of its life). Cost: not given (no verified figure).
- Nits taken: the hero tiles are now "20 years / the average life HUD gives a shingle roof", "About 1 in 6 / houses for sale here built 2005 or earlier advertise a new roof", "About 60% / of a kitchen remodel's cost comes back at sale, in a national survey". Cooling degree days, Columbus and New York ratios are cut (one sentence: air conditioners here run more than in Columbus, Ohio, by NOAA's records). Fannie Mae is explained ("a company that buys home loans from lenders"); C6 and C5, Category 7A, "branch wiring", "grossly negligent", "actual damages" and "underlayment" are gone; "air handler" is cut from the list. The tax section moved to the FAQ. Raw listing counts are gone from the text and the chart.

## Owner's eye (score 7)

- Metaphor "a rough clock": now "It is an average. A roof can last longer or fail sooner."
- Laws acting: "The law keeps the buyer's duty to inspect" is now "Under state law, the buyer still has the duty to inspect." "The regulation gives the report no expiry date" is cut from the body; the FAQ says "A CL-100 has no expiry date in the state regulation." "The state's form adds one point" is cut (linked to the sibling). "The disclosure law's one repair rule comes after..." is now "If something changes after you hand over the disclosure form, such as a new leak, state law says you correct the form or make reasonable repairs before closing." (score.js P10 passes.)
- Industry terms: Category 7A, C6 and C5, aluminum branch wiring, the code and underlayment, grossly negligent: all gone. Cloth and knob-and-tube are now named as "three older kinds of wiring: aluminum, cloth-covered or knob-and-tube". score.js still lists "CL-100" (P6); it is the name readers search, so it stays, defined in the section's first sentence.
- Too many numbers: the 762, 120, 94, 852, 8 and 10 are gone from the text, and the chart shows percents only. The 1 in 6 and 1 in 8 stay. The NAR agents' three percents are now one sentence with no numbers.
- Showing off: the decade chart, the state and US years and the "younger than" sentence are cut. The H2 asks one question ("Should you replace an old roof before selling?"). The 2003 example stays, after the answer, because it shows which parts are past HUD's average life.
- Florida insurer: as under the reader, above.
- FHA: section one now says once that the lender column uses FHA's rules because they are written down in detail, that a buyer with a regular loan faces Fannie Mae's rule, and that a cash buyer has no lender. The hero tile is no longer FHA. The systems list says "the appraiser's checklist". FHA now appears where the rule is only FHA's: the table head, the roof answer, the termite lender rule, the 6 percent credit, the repair escrow, and the roof FAQ. "Most buyers here do not use an FHA loan" was not written: no row gives the share.
- Sibling overlap: the 27-50-65 liability paragraph and the attached-report paragraph are cut. One sentence links /sell/seller-disclosure/ for what happens when you attach a report.
- Awkward sentences: "Three people can look at the house for them" is now "Three inspections look for them: the appraisal for the buyer's loan, the insurer's four-point inspection and the termite report." "It has a good side and a hard side" is now "There are reasons for and against one." "Crawlspaces are an older-house matter here" is now "Older houses here are more likely to have a crawlspace." The hedge note is gone.
- Unanswered questions: the FAQ now answers who pays for the CL-100 (row 27) and how old a roof can be for insurance (row 28), plus how long a CL-100 is good for, whether you have to fix what the inspector finds, and tax. The wind mitigation and four-point questions are out of the FAQ (the body answers them).
- Title: "Repairs Before Selling in Myrtle Beach: Is the Roof Over 20?" (60 characters). H1: "Repairs before selling in Myrtle Beach: is the roof over 20?" The hook is the page's main number (HUD's 20 years). "1 in 6 Older Houses Here Advertise a New Roof" does not fit in 60 characters with the searched words, and dropping "older" would overstate it (all houses: about 1 in 11). A FHA hook was not used, to keep FHA out of the lead.
- Front door row: one line under the chart says the report's list has no row for a new roof or heating and air.

## Gates after the rebuild

- mkpage: built. build.js audit: 0 FAIL for this page (only "missing from sitemap.xml", which waits for stitch). Warnings: not in llms.txt, no Tim Nash quote (none exists), 23 sentences over 22 words.
- build.js check: 158 FAILs, every page on the site, "footer differs from partials/footer.html". Someone changed partials/footer.html in the shared working copy; not this page's change. See NEEDS.md.
- score.js: 99/100 (AEO A7 counts one FAQ answer outside 15 to 90 words; my count is 29 to 61 for all five).
- claims-scan: 0. struck-check: no struck wording. repeat-check --strict and structure-check --strict: pass. house-claims: 0.
- critic.mjs at 320, 390, 1024 and 1440: 0 blocking. Warnings: read.wall on the short answer at 320 (three short paragraphs and the offer bar, accepted in round 1) and on the last FAQ answer at 320 and 390 (the FAQ answers are split by H3 questions). The wall after the table at 320 is fixed with an H3 "What a buyer's insurer asks". Shots: `<scratchpad>/wfn/sell-repairs-before-selling/shots2/`, looked at tile by tile at 320, 390 and 1440.
- Not done: an independent verifier read of the reworded sentences (CRAFT 8.4). Rows 27 to 30 and every reworded legal sentence (27-50-60, 27-50-80, Reg. 27-1085 K(2), Fannie Mae B4-1.3-06) should be read by the batch verifier before release.
