# Review round 1: what the fixer changed, /sell/out-of-state-buyers/

Fixer, 2026-11-01. Every change is in `specs/out-of-state-buyers.js`; the page was rebuilt with mkpage. New facts are facts.md rows 31 to 38, marked VERIFIED-BY-FIXER for the lead to re-check. Shared faults are NEEDS.md 8 to 13.

Gates after the fix: score 100/100 (SCORE_TODAY=2026-11-01); claims-scan 0; house-claims 0; struck-check clean; facts-check: no hit on this page (its WRONG hits are on other pages); build.js check OK; build.js audit: only the two date mismatches ("Updated June 12, 2026" and dateModified against the sitemap), which the lead's `build.js dates` run sets; critic.mjs at 320, 390, 768, 1024 and 1440: 0 blocking, 0 warnings, no sideways scroll at any width. Shots: `wf2/sell-out-of-state-buyers/fix1/` (shots/ full pages; band-390, months-320, hold-390, story-1440, top-320 crops), all looked at.

## Critic, blocking

1. **Closing offer band unreadable.** Fixed for this page: `PAGE_CSS` gives the navy band with no later section the dark panel, ivory heading and light text (band-390.png). Shared cause logged, NEEDS 8. fix-and-flip has the same fault.
2. **Sideways scroll at 320 (listing-search box).** Fixed for this page: `.hx-fb-ai` and `.hx-fb-q` get `min-width:0; max-width:100%`. Page is 320 px wide at 320 (top-320.png). NEEDS 9.
3. **Sideways scroll at 1024 (header phone).** Fixed for this page: between 1000 and 1120 px only the phone icon shows. Page is 1024 px wide at 1024. NEEDS 10.
4. **Unverified practice claims.** Cut: "We send each page to you to sign by e-signature and answer the buyer's agent for you" (now the law, row 35); "the attorney's office sends you your money after the closing" (step 6 is now "Horry County records every deed at its Register of Deeds, 1301 Second Avenue in Conway", row 30; the FAQ no longer says it); "We go through the form with you before any buyer sees it" (now "As your listing agent, we must tell you in writing what this law asks of you", row 37). Step 3 no longer says "You do not need to be there"; it says the inspector and appraiser work for the buyer and someone with a key lets them in, "so tell us who holds yours" (no claim about what we do). Step 4 adds "Only a lawyer may prepare a deed for someone else" (row 36).

## Critic, nits taken

- Read walls: the place chart, table and mover paragraphs are gone; the withholding section has h3s ("Does the main-home exclusion cover you?", "What Form I-295 is", "Is the amount held back the tax?"); the story has a two-item list. critic.mjs: 0 read.wall.
- "The 336 buyers who closed in December made their offers in the fall" is now "A deed is recorded at closing, a month or more after the contract is signed. The buyers who closed in December signed in the fall." (row 8 limit).
- The Murrells Inlet sentence is gone with the town chart.
- "the third of buyers who are not here" is gone.
- "Buyers with an out-of-state tax / bill" label is now "Buyers from other states".
- The signing diagram (9 px labels) is cut; the month tiles are replaced by a column chart with one-letter month labels at 15 px and the year under October and January (months-320.png).
- The home value and tax table is cut, so its missing source note no longer applies.
- FAQ: the movers question is cut; the "fall" answer now says "in every month of the latest year of county records".
- Schema creditText now "U.S. Geological Survey" in all four ImageObjects; the repeated "resized these photos" line is removed (NEEDS 11).
- "What you know, and nothing you do not." is now "Tell the buyer what you know. You do not have to report what you do not know."
- Town ranking: the town chart is cut. One sentence keeps the pattern: more than half in North Myrtle Beach city, about 1 in 10 in Conway.
- Photo card width: aerialWidth 820px, the same right edge as the charts.
- Step 3: kept general, no claim that our agent meets the inspector.
- Byline date: left for the lead's dates run.

## Reader, blocking

- **How much South Carolina keeps.** Now on the page: "For a sale closed in 2026, the rate is 5.21 percent", and a table with a worked example on a $400,000 sale with a $100,000 gain: $0 / $5,210 / $20,840 (row 31). "The amount held back is never more than the cash you would get at closing. The closing attorney's office sends it to the state." (row 32). The FAQ answers it. The calculator link stays as an extra, not the answer.
- **Rental or second home and the exclusion.** "A rental or a second home that you did not live in as your main home does not get it. For that home, the hold-back applies."
- **Form I-295.** New h3 "What Form I-295 is": what it states, signed before a notary, so it can be signed at the same visit as the deed, given to the buyer, a copy kept for tax records (row 32). "Federal exclusion" is now introduced under "Does the main-home exclusion cover you?".
- **Notary and witnesses.** New h3 "Who must be there when you sign the deed": the notary and two witnesses; the notary can be one of the two, so one more person; ask the notary whether the office can provide that witness (row 33). New h3 "Can you use an online notary from your state?": "Do not plan on it for the deed", with the reason (row 34). The South Carolina "physical presence" sentence is cut. Spouse as witness: no source found, not stated.
- **"Commission".** Now "the date the notary's appointment ends".
- **Unreadable last box.** Fixed (critic 1).
- **The home while I am away (keys, repairs, walk-through, utilities).** Not answerable from a source; owner questions NEEDS 13 (a), (b). The page now asks the seller who holds the key (step 3 and the inline offer: "Tell us where you live, where the home is and who has a key").
- **The Charlotte example.** Cut. The rental-booking question is now answered from the law (new h3 "If you rent the home to guests", row 38). Whether a seller may keep renting while listed: owner question NEEDS 13 (f).
- **How the money reaches me, and when.** "Confirm the account your money goes to with the closing attorney's office by phone, on a number you agreed on in advance." Wire and days: owner question NEEDS 13 (c), (d).

## Reader, nits

- Buyer content and the New York household story: cut (owner item below).
- Commission cost and listing-to-money time: not stated; no source, owner question NEEDS 13 (d).
- "make no representation" is now explained ("which means you are not saying either way"). "resales" and "Census cities, towns and communities" are gone. "personal representative" stays in the exemptions list; it is the statute's term for an estate's executor, and the list needs it to be exact.
- The listing-search box above the short answer and the footer text are the site template; not this spec.

## Owner's eye, blocking

- **Too many exact numbers and dates.** Cut the raw counts (12,125, 3,603, 916, 207, 352, 350, 336, 14,200, 12,877, 320, 387, 3.2 percent, $174 million, the 12-tile counts and percents). Kept ratios: about 3 in 10, more than half, about 1 in 4, about 1 in 10, about half. The month chart has no number on any month. The state chart shows each state's share. Date mentions in body copy: "in 2026" twice (the rate, which needs its year) and the chart note; score.js P3 passes. Exact numbers left on purpose: the 5.21 percent rate and its example, the $250,000 and $500,000 exclusion, the deed fee and its $300,000 example, $25 for a power of attorney, $275 million fraud, and the story's own numbers.
- **Method and Census talk.** The place chart note and the 316-buildings note are cut. Chart notes are one plain line each.
- **Sent elsewhere for the withholding.** Fixed (reader item 1).
- **Telling the seller to do the agent's job.** Now: "We price your home to what sold near it, the same as for a local buyer. We also reach the buyers who still live in other states: Chapter3 spends several thousand dollars a month on ads aimed at buyers moving to the Grand Strand."
- **The real story.** Told in full near the end, in its own section "How did an owner moving to New York sell his rental in 13 days?", from the story bank as recorded: 15 years, moving to New York to be with his sister, not comfortable managing from far away, the tenant 8 months from renewal, cash flow over $1,200 and about half for the next investor, the buyout held back as the fallback, the investor list, a cash buyer in 13 days, "Those were his numbers, not a promise." No detail added. The one-line pointer mid-page and the Charlotte example are cut.
- **Buyer-side content.** Cut: the 4 and 6 percent line and the tax calculator link, the six-county value and tax table, deaths and births, the metro rank, the IRS households, the New York household story. Kept one line on why buyers keep coming (about 39 more people a day, Census) and one line on Suffolk values in the "pay more" section, which is the reason the old myth exists.
- **A problem without a solution (South Carolina notary presence).** Cut; the online-notary question is answered (row 34).
- **Repetition.** "tax bill" in main: 16 to 6 (defined once, then "buyers from other states"). "same middle price": 3 to 1. The notary-and-two-witnesses fact: 5 to 3 (the h3 that explains it, its FAQ, and the online-notary answer's "sign in person"; the short answer and step 5 no longer repeat it). The FAQ "Do out-of-state buyers pay more?" is cut.
- **Keys, the empty house, utilities, storms.** Not on the page: no source can answer what Chapter3 does, and inventing it is banned. Questions written for templates/owner-questions.md in NEEDS 13; this helper may not edit that shared file, so the lead adds them. I disagree only with "do not ship without them": the page now answers every question a law or record can answer, and it says nothing false about the gap. It is the owner's call whether to hold the page for the answers.

## Owner's eye, nits

- Ad clause "so your listing reaches them where they live now": cut.
- H1 now leads with the fact the page proves: "3 in 10 Grand Strand buyers get their tax bill in another state. How to sell to them, or sell from there." It says "tax bill", not "live", because the record is the tax-bill address (PLAN risk 1). The sub no longer repeats the H1: "Sell a Horry County home without coming back: sign the deed before a notary in the state where you live, and know what South Carolina holds back at closing."
- Town list with no bars: cut. The state chart keeps its bars on a phone (compact, without phoneList).
- Step 5 and the diagram: diagram cut.
- Layout faults: fixed for this page, logged for the shared CSS (NEEDS 8 to 10).
- "Many people also move here to live." and "No sign of it." cut; "No." now answers the pay-more question (row 7 says they do not pay more). The month-share sentence that repeated the grid is cut.
- Praise kept: the deed-matching research, "paid what their neighbors paid", the six "where you are" steps. The praised disclosure line was an unverified practice claim (critic); it is replaced by the statute's duty (row 37), which keeps its intent.

## Findings I think are wrong or left

- None rejected outright. The owner's "get the answers before shipping" is left to the owner (above). The byline date is the lead's dates run.
