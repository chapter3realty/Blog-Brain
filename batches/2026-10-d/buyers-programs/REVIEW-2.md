# Review round 2: /buyers/programs/, what the fixer changed

Spec: `specs/programs.js` (round 1 kept at `wf2/buyers-programs/programs.r1.js`). New facts: facts.md F7 to F12, VERIFIED-BY-FIXER. F6 is off the page. Shared-helper notes: NEEDS.md 13 and 14.

Gates after the fix: score 99/100 (only P1 at 50%: $114,960, $134,120 and $17,500 are official limits). claims-scan 0. facts-check 0 on this page. house-claims 0. struck-check: no struck wording. critic.mjs at 320, 390, 768, 1024, 1440: 0 blocking, 8 warnings (the AfBA small text and line length, kept on purpose; the two outcome boxes inside the timeline at 1024; read.wall on the boxed Dana example and on the last FAQ answer plus sources and AfBA). build.js check OK. build.js audit on this page: only the two date lines (the lead runs `node build.js dates`) and the A20 note (no Tim quote; never written). Two new audit errors from this round were fixed before the last run: "catches" (banned word) and the MCC known-wrong pattern on the FAQ question.

## Critic, blocking

1. Feed titled "3+ bedrooms under $300,000" under the H1. Not the writer's file. NEEDS 13 now gives the exact feed line for `idx-lib/feeds.js` (houses at or under $450,000, titled for SC Housing's limit), or the lead removes the feed from this page.

## Critic, nits

- Mid button wrap at 320: the mid offer button is now "Get the list". The end button is "Ask which program fits".
- Town chart labels: "beach / town" is now "beach", "north coast" is now "coast". Checked at 320: one line each.
- "Its program page offers the $10,000; Palmetto Heroes..." rewritten as the critic wrote it, under a new H3 "Is the $10,000 open now?" (see reader 3).
- "the loan type's limits" now reads "SC Housing has no price limit for it, but the FHA, VA, USDA or conventional loan still has its own." ("sets" is a banned verb in mkpage.)
- F1 to F5: noted in facts.md for the lead, with the critic's check. F6 gloss cut (no primary source).
- Row 33: proposed approved wording added to facts.md.
- "Five SC Housing programs" now: "Five SC Housing programs are open to buyers in Horry County, though Palmetto Heroes is closed until its next round and the voucher program depends on the local housing authority." ("until its next round" in place of "for 2026", to keep the year to two mentions, scorer P3.)
- Rate FAQ: "so you can ask the lender to quote it both ways" cut, and the disclaimer sentence cut.
- Photo: see owner 6.
- Layout: the odd card in the 2-column grids is unchanged (a reader would barely notice it, as the critic says).
- AfBA crowding: `#afba` now has 3rem of space below it.
- SEO: H2s now "Which homes count in Horry County, and where are they under $450,000?" and "Which SC Housing program fits you in Horry County?". Chart note now names the Coastal Carolinas MLS (CCMLS).
- First screen: depends on the feed (NEEDS 13).

## Reader, blocking

1. How much of my own money do I need. The four-loan table is gone. A new H3 "How much of your own money do you still need?" says, in three short paragraphs: the $10,000 comes only with SC Housing's own loan, which can be FHA, VA, USDA or conventional ("one no government agency backs"); VA and USDA need no down payment, so the $10,000 goes to closing costs and prepaid items; FHA and conventional need a down payment and the $10,000 can go to it as well; and what is left depends on the home, so we get the lender's figure for that home before you offer. The calculator line that sent the reader away is gone (the closing cost guide is linked once at the end, as a guide). A down payment amount or percentage is banned on every /buyers/ page (PLAYBOOK A17), so the page cannot say whether $10,000 covers it.
2. What the $10,000 costs me while I live there. The two disclaimer sentences and "that form is where..." are cut, as the owner asked. The section now ends after the chart; the timeline already says you owe the full $10,000 in years 1 to 15 and repay it only from a sale or a new loan. "No monthly payments" is on the ledger's never list and was struck from the live page, so it is not on the page. **For the lead or owner:** SC Housing's own handout says it. If it may be said about a government program here, it is one sentence after the intro of "Do you have to pay back".
3. Is it open now. New H3 "Is the $10,000 open now?" at the top of the apply section: "Yes, when we last checked. SC Housing's program page offers the $10,000. The only program it lists as closed is Palmetto Heroes." Then what happens if the money runs out mid-purchase: once the lender reserves the loan and the $10,000, SC Housing holds them for 60 days on an existing home or 120 days on a new one, and the lender can ask for more time (F10). Step 4 no longer says it again.

## Reader, nits

- Stack the bank grant with the $10,000: answered under the local help, new H3, F7 (SC Housing's checklist has a line for another grant).
- How long from lender to closing: no source; not on the page.
- What happens after "Get the list": the mid offer says an agent sends the houses and condos for sale in your towns under the limit.
- Footer line about investors: shared footer, not this page. The lead may want a buyer line on /buyers/ pages.
- BrickWood in the disclosure but not the body: left as is. Naming BrickWood in the body would put the affiliate's absence from SC Housing's list in print; the owner reviewer asked the lead to be comfortable with even the unnamed line.
- Recapture tax: now a question H3 with only what it means for the buyer (owner 5).
- Palmetto Home Advantage paragraph: the price-limit clause in plain words.
- Too many numbers: "About 83 percent of the county's 35,400 renter households" is now "About four in five renter households in the county" (the spec checks 83). The Habitat and bank-grant figures are the programs' own limits and stay.
- "Conventional" and "Fannie Mae or Freddie Mac": the table is gone; "conventional" is glossed once.
- Families with Disabilities card: "Forgivable help like the Homebuyer Program's, homes up to $450,000" (row 15 says the same 15-year forgivable help; it does not state $10,000).
- 640 score: "If the FHA, VA, USDA or conventional loan's own rules ask for a higher score, the higher score applies."
- Habitat: "You start with a short interest form on its homeownership page, and Habitat pairs you with a volunteer Financial Mentor" (F9).
- Dates: the lead's `node build.js dates`.

## Owner, blocking

1. "Go read a form" and the disclaimers: both cut (reader 2). The rate FAQ disclaimer is cut too.
2. FAQ repeats the body: cut the grant, USDA/VA, condo, family gift, Palmetto Heroes date and Myrtle Beach FAQs. Kept: first-time buyer (now with what "targeted" means for someone who owned a home before; the card no longer says "owning a home in the last three years"), the rate question. Added two that are new: a new home from a builder (F8 and row 21) and Made It Home! and the tax credit (moved out of the body, owner nit). Four entries, scorer A7 passes.
3. The check promise five times: now once in the condo section, once in the USDA section, and once in the end offer. Step 3 and the mid offer no longer say it. The two offers have different openings ("Name the towns you like." and "Send us your household size and price range.").
4. The four-loan table: replaced by two sentences (reader 1). The scorer needs one table, so the USDA finding is now a plain two-column table by town (Town, inside USDA's area: All, Nearly all, About nine in ten, About one in four, Fewer than one in ten, None), computed in the spec (F11). It replaced the long sentence that listed the towns, so nothing is said twice.
5. "Two smaller things to know": now "Is there a tax if you sell early?", with only the buyer's part: three conditions, the tax for that year, SC Housing pays it back if you ask by June 30 of the next year. Tax-exempt bonds and the IRS income line are cut. The "money is limited" item moved to the open-now H3.
6. The photo: a CC or public-domain photo of a house in an inland town could not be fetched (Commons gave 429 to every request; NEEDS 14 lists four candidates). As the owner allowed, the Main Street photo moved out of the USDA explanation to beside the town chart, with a caption that says something: "More houses for sale under the limit have a Conway address than any other town's" (F12, checked in the spec). The shot list still asks the photo partner for houses that qualify.

## Owner, nits

- Feed: NEEDS 13.
- Dana: the agent now finds the problem before the offer and writes the Conway closing date into the contract for a day after the Ohio sale closes. "She does not have to be a first-time buyer" cut from it.
- Offer strength and closing time: still for owner-questions (the lead files it, round 1 wording). New construction: answered from a source (F8, F10, row 21).
- Made It Home! and the MCC: moved to one FAQ.
- Lender line: unchanged, for the lead to approve.
- Fine print: the ADU gloss and "owning a home in the last three years" cut from the cards.
- Program cards: the voucher icon is now a town building and Palmetto Heroes a calendar (its round opens and closes). No program name is a link now, so the cards match.
- Byline date: lead.
