# Plan: /sell/out-of-state-buyers/

Batch 2026-10-d, Lane U. Research half, 2026-11-01. Ledger: `facts.md` (30 rows, none verified yet). Must-answer list: `must-answer.md`. Data and scripts: `<website>/data/2026-10-d/sell-out-of-state-buyers/` (README.md there).

## What the live page has worth keeping

- **Internal links:** /sell/inherited-house/ (heirs who live elsewhere), /sell/capital-gains/ (owns the withholding rate, the I-295 example and the calculator), /buyers/relocating/ (the "buying instead?" note at the top), /sell/#seller-cma-form (the valuation form). Add /sell/net-proceeds/, /sell/rental-property/, /invest/canadian-buyers/, /invest/out-of-state/ (the buyer's side of a remote closing).
- **The six feeder states idea.** The live page guessed them (NC, NY, NJ, PA, OH, VA). The county records now rank them: NC, NY, PA, NJ, VA, then MD and OH (row 4). Keep the idea, replace the guesses.
- **"Nassau median $680K+".** Close to true; the verified figure is $684,700 (row 22).
- **"#2 fastest-growing metro".** True as of the year to July 2025, by percent population growth, not migration (row 10).
- **The seller-who-lives-elsewhere box** ("We handle showings, paperwork and closing coordination remotely"). Keep the intent, make it a full section with the law behind it, and confirm the services with the owner (owner questions below).
- **The commission line** in the end box ("Real estate commissions are negotiable and not set by law").
- **Nothing else.** No calculator, no tool, no real story and no verified number on the live page. There is no entry for this URL in `data/headlines.json`, so no owner-approved headline to keep. There is no spec; the page is hand-made. The writer starts a new spec, `specs/out-of-state-buyers.js` (the checkpoint expects that name).
- **Must not survive** (SWEEP.md, "For the other helpers", and the judge): "Talk Strategy With Devin", "Talk to Devin Directly"; the old listing-search sentence "including off-market homes before they hit the public sites" (a page rebuilt with mkpage gets the new sentence from its donor); the two invented buyer quotes; "Out-of-state buyers make the highest offers"; the Peak/Slow month bars; "most active right now, through early fall"; "List before the season closes"; "You get wired", "cinematic", "psychological difference", "investment-grade"; ADR, NOI, cap rate and STR without words.

## The reader and their job

Two readers land here, and the search data says the second is the bigger one (must-answer.md):

1. **The owner who lives elsewhere** (New York, North Carolina, Pennsylvania) and owns a condo or a house here. Often a second home or a rental, sometimes inherited. Wants to know: can I sell without flying down, what do I sign and where, how much does South Carolina keep at closing, and is it safe to have the money wired. Worried about doing it wrong from far away.
2. **The local owner** who heard that out-of-state buyers pay more. Wants to know: how many buyers come from other states, from where, do they pay more, and does it matter when I list.

Both share one job: **sell to the buyers who are not here, or sell while I am not here, without losing money to a mistake.** Verb: decide how to sell, then follow the steps.

## The deciding fact

**About 3 in 10 Horry County home buyers have their tax bill sent to another state, more than half for condos, and they pay the same middle price as local buyers in the same building or subdivision** (rows 2, 3, 7). So a seller does not get a premium from them, but a listing that does not reach them misses a third of the buyers, and more than half in a condo. That changes the page from "they pay more" (false) to "they are a third of your buyers, and here is how to reach them and how to close with them, or as one of them."

## The shape

A decision guide that turns into a how-to (CRAFT 3: "Decide", then "Follow the steps"). Main relations: amount (who buys, a share) and sequence (how a remote sale closes). Lead with the verdict and its two numbers; prove them with our own records; then the steps for the seller who is not here; then what to sign and what the state keeps; then the offer.

First screen on a phone: H1, byline, and the short answer: "About 3 in 10 people who bought a home in Horry County last year get their tax bill in another state. For condos it is more than half. They pay the same price as local buyers, so the reason to reach them is numbers, not a premium." A slim top offer bar, not a band.

Title tag (search words): "Selling a Myrtle Beach Home From Out of State, or to Out-of-State Buyers | Chapter3" (writer may shorten). H1, warmer: "Who buys Grand Strand homes from out of state, and how to sell from far away." Meta description from rows 2, 3, 13 and 18. Keep the URL.

## Sections in order, with what each proves

On this page list (7 sections): Who buys / Do they pay more / When they buy / Where they come from / Selling from another state / What the state keeps / Your disclosure.

1. **Short answer** (above). Rows 2, 3, 7. One sentence on what we do about it (the ad spend on relocating buyers, story `flip-buyers-and-wholesale`, if the owner confirms it is current; owner question 2).
2. **"How many buyers here come from out of state?"** Rows 2, 3, 5, 6. Lead: the 3 in 10 and the condo half. Chart 1. Then the place pattern in one or two sentences: the oceanfront cities (North Myrtle Beach 55 percent, Myrtle Beach and Surfside Beach about 45) against inland towns (Conway 10, Socastee 12). Then the stock fact: 1 in 4 of every home in the county, and nearly 6 in 10 condos, have their tax bill mailed out of state. State the floor plainly once: a buyer who moved here and gets the bill at the new home counts as local, so the real share of buyers from other states is higher. Unique: no other site has this count.
3. **"Do out-of-state buyers pay more?"** Row 7. The heading's first sentence is the answer: "No. In the same building or subdivision, they paid the same middle price as South Carolina buyers." Chart 2 or a two-row table. One sentence on the method in plain words (316 buildings and subdivisions, 3,455 resales). Then what the number means for the seller: price to the local comparables; reach the third of buyers who are not here. Pair with row 22 as the reason the price feels low to them, and the story `ny-client-tax-drop` (one household, rounded, not a promise). This section replaces the invented quotes.
4. **"Is fall or winter too late to list?"** Row 8. "No. Out-of-state buyers closed every month." Chart 3 (12 months). Fewest in January (207), most in October (352) and May (350). Their share runs 24 to 34 percent. Label it "deeds recorded", one year only. Replaces the Peak/Slow bars and the "season is closing" copy, which the data contradicts.
5. **"Where do they come from?"** Rows 4, 11, 9, 10, 22, 23. Lead with the buyer count by state (NC 916, then NY, PA, NJ, VA). Then the movers, which is a different group: IRS 12,877 households from other states in one year, Suffolk County first; Census net 14,200 people a year, about 39 a day; metro #2 of 387 by growth. Then Table 1 (value and tax, Horry against the origin counties) with row 23's line so a second-home buyer is not misled about tax. Story `client-origins` as one line: our own relocating clients come mostly from New York and North Carolina, the same two states the records show. This section answers "how many people move to Myrtle Beach a day/year" for search.
6. **"Can you sell a Grand Strand home without coming back?"** Rows 12 to 17, 28. "Yes." Numbered steps (Steps 1), each with who does it: we list, show and keep the keys (owner question 3); the buyer's offer and the contract by e-signature; the inspection and appraisal (we meet them; owner question 3); the attorney prepares the deed and the I-295; you sign the deed in your state before a notary with two witnesses (rows 13, 14) or name someone with a power of attorney (row 16); the attorney records the deed and wires the money after a phone check (rows 27, 28). One line on what cannot be done: no notarizing by video in South Carolina (row 15). One line on the seller's deed fee (row 17), with a link to /sell/net-proceeds/. The one remote-seller story in the bank (`tenant-occupied-sale-13-days`) fits here if no sibling owns it (check /sell/rental-property/ first).
7. **"What does South Carolina keep at closing when you live out of state?"** Rows 18 to 21, 29. The rule, in plain words, and the three outcomes: no hold-back for a main home inside the exclusion; a hold-back on the gain with the I-295; a hold-back on the whole price without it. "You get the extra back on a South Carolina return." No rate and no dollar example here: link /sell/capital-gains/ (it owns both, and the calculator). Heirs: one line and the link to /sell/inherited-house/. Canadian owners: one line on FIRPTA and the link to /invest/canadian-buyers/.
8. **"What must you tell a buyer about a home you rarely see?"** Rows 24 to 26. The statement is required; "no representation" is allowed on what you do not know; what you do know must be told; a rental management contract must be named. We do the work: our agent walks the home and lists what we see before you fill in the form (owner question 3). Exemptions in one line.
9. **End offer** (the same box component as the top bar): one label, for example "Get a price and a plan for your home" with one sentence: "Tell us the address and where you live. We send what similar homes sold for and how the sale would close from your state." Button to /sell/#seller-cma-form or /contact/ with the page named. No person named.
10. **FAQ**, open text, 4 to 6 questions taken from the suggestions: Can I sell my house while living out of state? Do I need to be at the closing? What is the South Carolina nonresident withholding? Do out-of-state buyers pay more? How many people move to Myrtle Beach a year? Is fall a bad time to sell? Each answer one or two sentences, the same figure as the body.
11. **Sources line**: AcclaimWeb deed index and county parcels (with the method in one sentence), Census TIGERweb, Census population estimates, IRS SOI, Census ACS, SC Code sections, SCDOR I-295, Horry ROD, IRS Topic 701, IC3, CFPB.

## Visuals

- **Chart 1 (section 2):** share of buyers with an out-of-state tax bill, three bars: all homes 30%, condos 54%, other homes 24%. `G.bars`, built from `out-of-state-buyers-summary.json` (`all`, `by_type`). Note under it: the floor caveat in one sentence.
- **Map (section 2), optional:** the Census places with their share (North Myrtle Beach 55, Myrtle Beach 45, Surfside Beach 46, Garden City 39, Little River 28, Red Hill 24, Carolina Forest 18, Socastee 12, Conway 10) as labelled pins. `area-map.js` pins places with a marker; a shaded map by place is not in it (NEEDS.md). If the map cannot be clean on a phone, use a short ranked bar list instead. Never both.
- **Chart 2 (section 3):** "paid more than the middle price of the other sales in the same building or subdivision": out-of-state 48%, South Carolina 50%. Two bars. From `same_place_leave_one_out.all`.
- **Chart 3 (section 4):** out-of-state closings by month, October 2025 to September 2026, 12 bars, January low, October and May high. From `by_month`. `G.bars` draws horizontal bars; 12 rows is long on a phone. A column chart is better (NEEDS.md); until then, 12 compact horizontal rows in month order.
- **Table 1 (section 5):** county, median home value, median property tax paid: Horry, Suffolk NY, Nassau NY, Ocean NJ, Mecklenburg NC, Wake NC, Brunswick NC (row 22). Five to seven rows, cards on a phone. "$10,000 or more" for the top-coded cells.
- **Steps 1 (section 6):** numbered steps, each with who does it and where the seller is. `h.ol` with a bold verb per step.
- **Photos:** one, at most two, each under the sentence it proves.
  - Wanted: the Horry County Government and Justice Center in Conway, where deeds are recorded, under the step "the attorney records the deed in Conway" (row 30). Free-licence candidate: "New Horry County Courthouse and county office complex, Conway, South Carolina (18 November 2006).jpg", Pollinator at English Wikipedia, CC BY-SA 3.0 (also GFDL), 2,100 x 1,400, https://commons.wikimedia.org/wiki/File:New_Horry_County_Courthouse_and_county_office_complex,_Conway,_South_Carolina_(18_November_2006).jpg. The writer must look at it full size and check the building is the one in use today (it was new in 2006); credit "Pollinator, CC BY-SA 3.0".
  - Possible: oceanfront towers, under the condo sentence in section 2. Candidate: "Hotels along the Grand Strand Beachfront.jpg", DiscoA340, own work, 14 August 2022, CC BY-SA 4.0, 3,264 x 2,448, https://commons.wikimedia.org/wiki/File:Hotels_along_the_Grand_Strand_Beachfront.jpg. Caution: the description says hotels. The caption may only say "Oceanfront towers in Myrtle Beach", and the condo fact stays in the text beside it, unless the writer identifies the buildings and confirms from the county layer that they are HPR condos. Public domain alternative with people at the beach (USAF, "Myrtle Beach, North Ocean Boulevard 100420-F-4155R-021.jpg") is not suitable: people are the subject.
  - Commons' API returned 429 for most of 2026-11-01; the writer should search once more for a CC0 or CC BY photo of North Myrtle Beach oceanfront condos.
- **Licence records:** each photo gets a record `tools/photos.js` accepts; files only under `chapter3realty/images/2026-10-d/sell-out-of-state-buyers/`.

## Photo partner shot list (for `templates/photo-request-email.md`)

Most wanted first. For the page "selling from out of state". Same safety and privacy rules as every request.

1. **Horry County Government and Justice Center, 1301 Second Avenue, Conway** (the Register of Deeds address on its county page; Google Maps: https://www.google.com/maps/search/?api=1&query=1301+Second+Avenue+Conway+SC). The front of the building from the public sidewalk or the public lot, the whole building in frame, no people's faces. For the step "the attorney records the deed here".
2. **Oceanfront condo towers in North Myrtle Beach, from the beach or a public beach access** (for example near Main Street, https://www.google.com/maps/search/?api=1&query=Main+St+and+Ocean+Blvd+North+Myrtle+Beach+SC). Three or four towers side by side, no people as the subject, no building name readable as the whole subject. For "more than half of condo buyers live in another state".
3. **A row of condo mailboxes or a lobby key drop, only if a building manager says yes first.** Optional. For "we keep the keys while you are away". Skip if no permission.
4. **The judge's own photo need** (a remote-ready listing): the exterior and main room of a Grand Strand home Chapter3 is listing, with the owner's written consent. Only if the owner names a listing; it must not show the address.

## Sibling owners (decide before writing)

- /sell/capital-gains/ owns the withholding rate, the dollar example and the refund. This page states the rule and links.
- /invest/out-of-state/ owns the buyer's side of a remote closing (video walk-through, inspection, management). This page owns the seller's side and who buys.
- /sell/inherited-house/ owns heirs. One line here.
- /buyers/closing-costs/ owns the deed fee figure (registry "deed-fee-payer"); same value here.
- /sell/ and /buyers/buying-in-myrtle-beach/ already say "second fastest-growing metro"; row 10 verifies it for the year to July 2025 (PROPOSED.md, registry row).

## Owner questions (only what the rules and sources cannot answer)

From facts.md, "Questions only the brokerage can answer":
1. Which listing services are real today: photos, video walk-through, drone (FAA Part 107 pilot), 3D tour, floor plan?
2. Are listing ads run in other states, and which? Is "several thousand dollars a month on ads aimed at relocating buyers" still current?
3. For a seller who is not here: do our agents hold keys, meet the inspector and appraiser, and check the home after storms? Any fee?
4. Do our closing attorneys mail the signing package and wire the proceeds? Typical days from contract to closing for a mail-away seller?
5. A real story of a seller who lived in another state and never came back for the sale?

Until the owner answers, the page says only what the story bank supports and what the law requires, and puts the gap in the offer ("Tell us where you live and we will tell you how the closing works from there").

## Risks for the writer and the verifier

- The 3 in 10 is a floor (tax-bill address). Say it once, plainly; never "3 in 10 buyers are from out of state".
- Do not rank places as better or worse; the place shares describe where the tax bills go, never who lives there (fair housing).
- No rate, no dollar withholding figure, no payment amount on this page.
- "Devin" appears nowhere in the copy or a CTA.
- Months are recording months. One year only.
