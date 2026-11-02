# Review round 1: /buyers/common-mistakes/ (fixer, 2026-11-02)

Three reviewers (critic 7, reader 7, owner 8; none passed). Every change is in `specs/common-mistakes.js`, rebuilt with mkpage. New facts are fixer rows F1 to F6 in facts.md, marked VERIFIED-BY-FIXER for the lead to re-check.

## Gates after the fixes

- score.js: 99/100 (SEO 100, AEO 100, Human 97, Trust 100). Left: P6 at 75% on "Legal Residence Application", the county's name for its form, which the reader needs to find it; H14 at 83% because the ranked list counts as a contents list and does not link the list section itself or the FAQ (as in round 0, NEEDS 6).
- claims-scan, facts-check: 0 findings on this page. house-claims: 0. struck-check: no struck wording. repeat-check --strict: passes.
- critic.mjs at 320, 390, 768, 1024 and 1440: 0 blocking. One warning at 320 and 390, read.wall on the FAQ, a false hit (an H3 every 3 to 6 lines; NEEDS 7).
- build.js check: OK. build.js audit: the dateModified and "Updated" lines wait for `node build.js dates` (the lead runs it); A20 (no named quote) stays, because we write no quote for Tim Nash.
- Shots: wf2/buyers-common-mistakes/critic-shots-r1b/ and crops/. I looked at the hero, the ranked cards, both tax charts, the flood table, the wind entry, the agent entry and the FAQ at 390, the homes strip at 320 and the header at 1024.

## Critic, blocking

1. Header phone at 1024 px. Fixed: the retirees rule is in PAGE_CSS (the digits hide from 1000 to 1120 px; the icon and its label stay). Shared fix in NEEDS 7.
2. Homes strip search box at 320 px. Fixed: the retirees rule keeps `.hx-fb`, `.hx-fb-ai` and `.hx-fb-q` inside the column. critic.mjs at 320 now reports no page scroll; the shot shows the "Find houses" button inside the box.
3. Bar labels touching the card edge. Fixed: both tax charts now stop the longest bar at three quarters of the track (`max` option), so "about $4,220" has room. Checked in the 390 shot.
4. "due diligence" and "transaction broker" undefined. Fixed by taking the terms out. Row 27 (the contract's due diligence rules) is struck, so the page cannot define the period. It now says "after the seller accepts your offer". The agent card now says what a transaction broker is, in plain words (fixer row F2, 40-57-30): "You are the firm's customer. Under the law, the firm can help the sale along without representing you or the seller."
5. Sections 9 and 10 true of any town. Fixed. The HOA entry now has local facts: about 7 in 10 houses for sale here have an HOA fee (our count, F4); South Carolina enforces an HOA's papers only if they are recorded with the county, and new rules must be recorded by January 10 (carried HVP 4); many communities here ban renting at all, and we leave those out of a search and read the papers (story `hoa-rental-bans-filtered`). The four icon chips are cut. The job-change entry moved to the FAQ. Its place in the ten is a new entry the reader asked for: a homeowners policy that leaves out wind (see reader 1).
6. Repetition. Fixed. The stage list section ("When do we check for each mistake?") is cut, and each ranked card now ends "We check: before you offer" (or the stage that applies). The FAQ now holds only facts the body does not: how to apply (row 7), how far back a refund goes (F5), whether a condo's fee shows its savings (RES 27), and changing jobs (row 38). "$2,930" is now in the deck and the ranked card only. "$26,400" is in the hero tile and the flood tile. "$550" is in the flood table only.
7. Truth. Fixed. The 613 / $2,750 / $1.8 million paragraph is cut (owner also asked). The hero tile now reads "Houses for sale in the flood zone / 8 in 10 do not say so".
8. Service promises with no owner answer. Fixed: every service line says "we can" until the owner answers question 2 (PROPOSED 6 lists them). Two lines stay firm because a source holds them: the HOA search and papers line (story `hoa-rental-bans-filtered`) and "Before we show you a home, we put in writing what we will do for you and what we are paid" (the NAR rule, row 37). The ordered checklist (license, then car, then application) is cut; the order was not in a verified row.
9. Deck not the answer. Fixed: "The costliest mistake here is paying the 6 percent tax on a home you live in: about $2,930 a year on a $350,000 house. Nine more follow, by cost." The short answer now starts "The mistake that costs buyers the most here is..." (score S11 wanted the topic word).

## Critic, nits

- Four offer boxes, two labels: now three boxes (top bar, the mid offer after the flood entry, the end band), one label: "Have us check a house". The HOA offer box is cut. The 320 wrap of "Talk to a specialized / agent" is gone with it.
- Top offer bar steps out of the column: not changed. It is the glass.js compact bar on every page (NEEDS 7).
- Lonely "Paid 6 percent by mistake?" card: the card is cut; the refund is in the FAQ with its time limit. Three cards remain.
- Septic order: the chart now sorts by share, highest first. The note now ends "so the true counts may be higher".
- "Coastal V zone, 141 policies": the zone V row is cut. Row 28's verifier allowed leaving V out (small sample, and a different figure on FEMA's current-zone field).
- "so the choice is yours": cut. The sentence is now "Federal law does not require flood insurance outside FEMA's high-risk zone."
- FAQ answer starting "there": that entry is cut (it repeated entry 3).
- Timeline put mistake 1 at closing: the timeline is cut; the card says "before you offer".
- Short answer phrase "whose tax bill goes to the house itself": now "get its tax bill at that same house". The tile note says the same.
- "tax district 100": cut from the chart note.
- Photo credits last line: not changed. It comes from photos.js and its test, and states the changes a CC licence asks us to state (NEEDS 7).
- H2 "When do we check for each mistake?": cut with its section.
- Footer and empty band: site frame, NEEDS 6.
- read.wall and the empty homes strip in shots: tool artifacts, as the critic said.

## Reader, blocking

1. No wind insurance. Fixed: new entry 5, "Does a homeowners policy cover wind near the beach?" East of U.S. 17 or Bypass 17, whichever is farther west (in Myrtle Beach, the Bypass), an insurer may leave wind and hail out of a homeowners policy; elsewhere it needs the insurance director's approval; then you need a separate wind policy, and the state's backup insurer for wind sells one to owners there who cannot get it elsewhere (F1, F3, registry `wind-pool-line`). It links /buyers/coastal-insurance/, which owns wind costs. No premium or deductible figure: none is verified in this ledger.
2. HOA section says nothing, and the New York line. Fixed as critic 5. The story line now names the four things and adds "The same check matters for any buyer with a boat, a cart or a rental plan."
3. Refund "only for recent bills". Fixed: the FAQ says "Under state law, you have two years from the day you paid that bill" (F5, from the clause row 10's verifier found).
4. Two tax deadlines. Fixed: the card is now "Aim for the end of May: apply by then, and the bill the county mails later that year comes at 4 percent. If you miss May, you can still apply for that year until its bill is due, usually January 15 of the next year."
5. "whose tax bill goes to the house itself". Fixed as critic nit.
6. Due diligence. Fixed as critic 4. What it costs to walk away is not on the page: row 27 is struck and owner question 3 is open.
7. Condo yardstick and Freddie Mac. Fixed: the example now says Association Reserves, a firm that studies condo savings, calls under 30 percent weak, with a high chance of a special bill to the owners (RES 10, corrected wording). The Freddie Mac line now starts "Freddie Mac buys home loans from lenders" (F6), then gives the 15 percent rule and who it touches.

## Owner, blocking

1. List twice. Fixed as critic 6.
2. FAQ repeats the body. Fixed as critic 6.
3. Too many numbers. Fixed. Entry 1: the in-city bars and the 613 / $2,750 / $1.8 million paragraph are cut; the chart has two bars. Entry 4: the condo and house resale shares (1 in 4, 1 in 15) and zone V are cut. Score P2 is 3.4 numbers per 100 words.
4. Industry terms. Fixed: zone V and "coastal high-hazard" cut; "tax district 100" cut; "transaction broker" replaced by what it means; "RMV stands for Residential Multifamily Visitor" replaced by "The one R district where rentals under 90 days are allowed"; "school operating tax" replaced by "the part of the tax that runs the schools"; "whose tax bill goes to the house itself" rewritten; "covenants" and "wind pool" taken out (score P6).
5. Mistakes 9 and 10 surface level. Fixed as critic 5. The loan line ("a loan officer at our preferred lender") now sits in the FAQ only.
6. Hedges and "Why do people moving here miss it?". Fixed: the refund window has its number, and the H3 now opens "The county does not apply it for you. It asks for South Carolina papers that a new arrival does not have yet:".
7. Phone layout. Fixed as critic 1 to 3.

## Owner, nits

- Deck says each is priced: the deck is rewritten.
- Hero flood tile: rewritten (critic 7). The tax tile now says "Your home taxed at 6 percent / 3 times the 4 percent bill", so $2,930 is not said a third time.
- Beach photo caption: now "Houses and condo towers side by side in Myrtle Beach. Each lot has its own zoning district, and the district decides whether it can be rented for under 90 days." I do not know the zoning of the lots in the photo, so the caption does not say which side allows it.
- Story: `dscr-zillow-links` added to entry 10 as recorded, the other agent not named or described.
- Dates: cut "since about 2010" from the chart, "August" from the NAR line, the 2015 tile text and the district paragraph. Kept: the purchase years on the tiles, "since 2015" once, January 4, 2027, January 10, end of May and January 15.
- Same "We" box everywhere: now six boxes; entries 2, 5, 7 and 8 end with a plain sentence instead.
- Footer: NEEDS 6.
- PRICE_CUT feed: the preview shows the fallback strip with no homes before the sample feed loads; the live build uses the site's feed. Not changed here.

## Findings I think are wrong

None. Two items are only partly done, for the reasons above: the top offer bar's edge (a glass.js choice for every page) and the photo credits note (photos.js, licence wording).

## Checkpoint

Run on 2026-11-02 after this file was written: "checkpoint: pushed batches/2026-11-a/buyers-common-mistakes". web.patch holds the spec, the page, the data folder (with the new hoa-counts.json) and the images.
