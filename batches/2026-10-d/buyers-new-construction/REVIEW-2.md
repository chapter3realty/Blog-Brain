# Review round 2: /buyers/new-construction/

Batch 2026-10-d, Lane U. Fixer, 2026-11-01. Three reviewers failed the page: the critic gave 5, the reader 7.5 and the owner's eye 7. Every change is in the spec, the page's data folder or this folder. The built page was not edited by hand. The spec before this round is saved at `wf2/buyers-new-construction/spec-before-round2.js`.

New facts are ledger rows 38 to 46 in `facts.md`. Each is marked VERIFIED-BY-FIXER for the lead to re-check. The verbatim quotes are in the website's `data/2026-10-d/buyers-new-construction/raw/primary-quotes-round2.json`. The name matches are in `raw/sales-office-plats.json` and the card links in `raw/community-links.json` (from `pull_community_links.py`).
- 38: what each builder's own page lists for its community, and the name the builder sells under. Four plat names differ, and each builder's sales or model address is a lot on that plat.
- 39: the card links. Each search returns only houses within 0.75 mile of its community.
- 40: the D.R. Horton 10-K: its mortgage subsidiary financed 81 percent; most closings involve an independent broker; options cost extra; contracts need deposits.
- 41: Lennar's Kingston Oaks page ties promotions to Lennar Mortgage.
- 42: CFPB: you do not have to use the builder's lender; ask when the builder deposit can be returned.
- 43: NAR: a seller can still offer to pay the buyer's agent. The agreement states what the agent receives, from any source.
- 44: D.R. Horton's Florida terms on registering a buyer at the first visit.
- 45: SC Code 12-39-220, the back-tax limit.
- 46: SC Code 6-9-10, counties and cities enforce the building codes.

## Gates after the fixes

- score.js: 99/100. The only part score is A7, three FAQ entries; the fourth was cut as a repeat. P2 is 3.7 numbers per 100 words, at 95 percent. P3, the date mentions, passes.
- claims-scan: 0 findings. The first draft had "own mortgage company" (lender-identity), which now reads "mortgage subsidiary".
- facts-check: 0 lines on this page.
- house-claims: 0.
- struck-check: no struck wording.
- photos.js: all records pass.
- critic.mjs at 320, 390, 768, 1024 and 1440: 0 blocking and 0 warning. One draft without the hero tiles failed read.first-screen at 390. The hero line is now shown and gives the answer, and the check passes.
- build.js check: OK.
- build.js audit: three items are left, and none of them is mine to fix. The two date mismatches go away when the lead runs `build.js dates`. A20 asks for a quote from Tim.
- I looked at these shots myself: the first screen at 390, the community cards at 1440, the decision cards at 1440, the map at 390 before and after, the tax section at 390, the tour box at 320 and the TOC at 768.

## Critic

### Blocking

1. **Who pays the agent.** The sentence now reads: "It states what the agent is paid, and that amount is fully negotiable. A builder, like any seller, can still offer to pay your agent. We confirm in writing what, if anything, you would pay before you tour." This uses rows 18 and 43, plus the live page's own wording.
2. **"In our experience, many incentives require the builder's own lender."** Cut. It now reads: "Some promotions come with the builder's own lender. Lennar's Kingston Oaks page offers promotions when you finance through Lennar Mortgage, and nationwide, D.R. Horton's mortgage subsidiary financed 81 percent of the homes it closed in its 2025 fiscal year. You never have to use the builder's lender." This uses rows 40, 41 and 42, with links to each source.
3. **H1 orphan "out."** The page CSS now sets `main#main h1{text-wrap:balance}`. At 390 the line reads "what the price on / the sign leaves out."
4. **Numbers split from their units.**
   - Miles: "6&nbsp;miles" and "1&nbsp;mile".
   - Highways: "Highway&nbsp;90" and "Highway&nbsp;22".
   - "month&nbsp;11", in the checklist and in the steps.
   - Kingston Oaks: "About 2&nbsp;miles from Highway&nbsp;22". Each card now names one road.
5. **The decision card heading sat low.** The cards now have `align-content:start`. In the 1440 shot, all four headings sit beside their icons.
6. **The community cards had uneven line spacing.** I rebuilt the cards. The body is a flex column with a fixed 0.45rem gap, `justify-content:flex-start`, and the card has `align-content:start`. In the 1440 shot, every card reads the same way.
7. **The button wraps at 320.** Under 360 px, `a.btn` is set to `white-space:nowrap` with less side padding. The 320 shot shows "Set up my builder tour" on one line.
8. **The garden-path sentence.** It now reads: "Book it before the one-year part of the warranty ends. It finds what to report while the builder still pays for the fix."
9. **"Often, yes".** Cut. The short answer now opens: "A new house here lists for about the same price per square foot as a house built 2016 to 2023 of similar size nearby."

### Nits

- **Title.** Not changed. The owner liked this title (`data/headlines.json`), and it makes no defect claim. "What Builders Won't Say" is now backed by the tax bill, the options and the deposits. The lead can align it in headlines.json if he wants.
- **Relative dates.**
  - "This year" and "last year" are gone. The copy now says "the 2026 builder sales", "every 2025 sale in the chart" and "the 12 months to September 2026".
  - Rows 24 and 33 are stale by 2027-01. **Lead: put this page on the January refresh list.**
- **Byline date.** Left for `build.js dates`.
- **Coastal area.** It now reads "East of U.S.&nbsp;17, state law also has insurers count the building code..." (row 35 note).
- **"The county inspects" had no row.** It now has row 46 (SC Code 6-9-10): "State law has the county or city enforce the building codes: building, electrical, plumbing, gas, energy and fire." The inspections section says "The county or city also inspects, for the building code."
- **Rows 33 to 37 need a re-check.** These are for the lead, together with rows 38 to 46.
- **Kingston Oaks "near" at 2.3 miles.** Fixed (critic item 4).
- **The realtor and inspection answers were generic.**
  - The realtor section now has the 10-K line on independent brokers, and a new H3, "Why does the first visit matter?" (row 44).
  - Inspections: the generic "Three, at three stages." is replaced with when each one comes and why. A local cost is still owner question O4.
- **New service lines.** "Prices the house against its neighbors", "Works out the tax bill" and "ask for the warranty booklet" are kept. **They need the lead's or the owner's yes.** One more line is new: "We go through them with you, along with the options you pick and what each one adds to the price." This is part of the live page's "review the contract and incentives". The lead confirms it with the others.
- **Map dots are single active listings.** Not changed. **The lead confirms this against the MLS display rule.** The dots are active listings only, drawn about 200 m to a pixel, with no address, price or photo. The first-time buyer page plots listing points the same way, at about 100 m.
- **Map crowding at 390.** I spread the six badges near North Myrtle Beach and the two near Socastee. Each badge has a short leader line to its point. In the 390 shot, no two badges touch.
- **TOC at 768.** It now has two columns from 700 px.
- **Charts at 1440.** On this page, `.c3-gchart` has a max-width of 760px.
- **Labels on the 320 drawing.** Not changed. They are 26 units in a 640-unit drawing. They are small at 320, but critic.mjs reports no readability flag.
- **Hero tiles at 320.** The tiles are removed (owner item).
- **First phone screen.** It now shows the H1, the byline and the hero line, and the hero line gives the answer. The listing strip is placed by the site.
- **Header at 1024.** Shared (NEEDS item 6).
- **FEMA.** It now reads "the map of the Federal Emergency Management Agency (FEMA)".
- **critic.mjs routing.** NEEDS item 10, unchanged.

## Reader

### Blocking

- **Will my own agent cost me anything?** The page now says:
  - a builder, like any seller, can still offer to pay your agent;
  - nationwide, most of D.R. Horton's closings involve an independent broker;
  - "We confirm in writing what, if anything, you would pay before you tour."
  Whether builders here usually pay is owner question O1, still open. With the owner's yes, add the live page's line: "In most Grand Strand communities the builder pays the buyer agent fee."
- **Why the first visit matters.** There is a new H3, "Why does the first visit matter?". It covers D.R. Horton's Florida terms: the builder pays a buyer's agent only if the agent registers you on or before your first visit, and only if you have not signed up on its website or talked with its sales agent. Then: "Tell us before you sign up online or walk into a model home." The page says Florida, because the D.R. Horton Myrtle Beach pages I read show no such terms. The local rule is still O2.
- **The headline promises more than tax.** The section now opens: "Three things: the full property tax, the options you add and the deposits." There is a new H3, "Options, upgrades and deposits", from the D.R. Horton 10-K and the CFPB (rows 40, 42):
  - optional features cost extra;
  - contracts need an earnest money deposit, with more deposits for options and upgrades;
  - a deposit is kept or refunded under the contract.
  Then the service line. Lot premiums have no public source and are still O5. The HOA fee stays in the cost section.
- **"The 4 percent rate".** The word "rate" is gone. The page says "A home you live in is taxed on 4 percent of its value once you apply; a second home or rental on 6 percent." The bullet is now "Apply for the 4 percent assessment. Without it, the county taxes your home like a second home, at 6 percent." The table rows read "Home you live in, 4 percent" and "Second home or rental, 6 percent".
- **A catch-up bill.** There is a new H3, "Will the county bill you for the months before?":
  - No bill for the time before the house stood on a December 31 (row 23).
  - If a standing house is left off the roll, the county may bill missed years, no more than three back and never before the house was built (row 45).

### Nits

- **The listing box before the answer.** The site places it. The hero line above it now gives the answer.
- **Tile fragments.** The tiles are removed.
- **Two "typical" prices.** The cost section now says: "That is an asking price; the tax example below uses what buyers paid." The short answer no longer gives $329,000.
- **Four numbers in one sentence.** The short answer now has two: "On a typical home you live in outside city limits, the yearly county bill goes from about $290 to about $1,210 once the county values the house."
- **The intro reads like a report.** The method sentences moved to a small note under the cards. The intro is two sentences.
- **Cards lack what it is like to live there.** Each card now has a sentence on what the builder's page lists: pools, a clubhouse, courts, a dock, a garden, lawn care, a gated entrance. Del Webb North Myrtle Beach is labelled a 55+ community. The selling name is shown where it differs from the county name, for example "Waterside, County record: Waterside Neighborhood". The HOA fee per community has no source, so it is not on the cards.
- **Incentive kinds.** Still O3. The page now names one kind it can source: Lennar's promotions tied to its own lender.
- **Inspection cost.** Still O4.
- **Dates.** See the critic's relative-dates nit.

## Owner's eye

### Blocking

- **The community cards were field lists.** Rebuilt. Each card now has, in this order:
  - the name the builder sells under, with the county name below it where it differs;
  - one or two sentences on what the community gives a resident, from the builder's own page (row 38). For example: "D.R. Horton's page says the pool and pickleball courts are open, and a basketball court, a fitness room and sidewalks are on the way." Another: "A gated part of Grande Dunes with a staffed guardhouse. Ryan Homes' page says lawn care is included and residents have access to the Grande Dunes Ocean Club, the golf and the marina on the Intracoastal Waterway."
  - where it is: town, city limits, one road and the miles to the ocean;
  - the builder and the price, as one sentence at the end;
  - its own link: "Homes for sale in <name>", to a checked search (row 39).

  Arcadia, The Overlook and Cypress Ridge have no amenity sentence. The Mungo (Clayton) page is a large script-built page with no text in it, and Meritage's Cypress Ridge page sits behind a bot check. Each of those three cards gets a fact from row 33 that no other card can carry:
  - Arcadia: the only one of the ten with three builders.
  - The Overlook: with Kingston Oaks, the lowest typical price of the ten.
  - Cypress Ridge: about $70,000 less than Meritage's Waterside, nearer the beach.

  Not done: a photo per community (NEEDS item 12) and a homes strip per community (NEEDS item 11, the shared places list).
- **"Two different clocks" (FIG-6).** Cut. It now reads: "The warranty says what the builder will fix. The state law says how long you have to sue. Most lawsuits over defects must be filed within 8 years of the house being finished. Inside that, most claims must be filed within three years."
- **No photo of the subject.**
  - Not fixed. Wikimedia Commons returned "too many requests" again.
  - Builder and listing photos are not allowed.
  - The aerial stays. Its caption no longer repeats the date, and the date stays in the photo credits. The aerial's place is not one of the ten communities: it is tax district 880, in the City of Myrtle Beach.
  - **The lead or the owner must send `shot-list.md` to the photo partner** (NEEDS item 12).
- **The H1 promise.** Answered rather than narrowed. The section now gives three things the sign leaves out: the tax bill, options and upgrades, and deposits (rows 40, 42). Lot premiums and HOA start-up fees have no public source (O5), so they are not claimed.
- **The short answer is number-heavy, with an unknown term.** It now has two numbers in the tax sentence, and "the 4 percent rate" is gone. "4 percent" is first explained in the tax section, as the share of value taxed on a home you live in. "Often, yes" is gone.
- **The same fact is said three or four times.**
  - "About the same per square foot" is now in the hero line and the short answer only. Section 1 opens on what follows from it: "The price per square foot will not decide it for you."
  - The hero tiles are removed.
  - "4 in 5 taxed as lots" is in the short answer and the chart caption, which is the chart's own reading.
  - The FAQ "Who are the biggest home builders" is cut. The builder ranking is in "Who builds" only.
  - Warranty: the text names D.R. Horton once, and "Other builders differ" appears once. The chart caption says only "Warranty: D.R. Horton's, from its annual report."
- **Hedges and stock phrases.**
  - "In our experience" is gone from all three places. Two of those sentences are the owner's own observations in the story bank (`builder-incentives-rare-investors`, `builder-warranty-visit`). They now read "We see most builders here offer incentives..." and "We see many builders here also send a maintenance person...". That keeps T2, the first-hand rule.
  - The third sentence is replaced by sourced facts (critic item 2).
  - "Usually the new house" is gone.
  - "generally has three years" now reads "must be filed within three years".
  - "the choice comes down to time, place and what you want to pick yourself" now reads "Pick by your plans:".
- **Tiles that cannot be read in a second.** The tiles are removed. The first screen is the H1, the byline and one line: "New construction here costs about what a nearly new house does. The sign leaves out three things: the full tax bill, the options and the deposits."

### Nits

- **"Compare full Loan Estimates".** Kept in the live, owner-approved form: "The way to judge the offer is full Loan Estimates from more than one lender, side by side. ... Any lender can run that comparison for you, including our preferred lender." A "we check" line waits on O3.
- **The map on a phone.** Spread out. See the critic's map-crowding nit.
- **Plat names against builder names.** Fixed for four communities (row 38).
- **The "rent" decision card.** It now has a fact: "The county taxes a rental or second home on 6 percent of its value, not 4. It also adds the school tax a home you live in does not pay. Its yearly bill is more than three times as high." Then the link. Row 26: $3,970 against $1,210.
- **Fraud and gross negligence.** Cut from the caption.
- **The NAIP caption.** The date is gone from the caption. The place is not one of the ten.
- **"Just listed on the Grand Strand".** This is the preview fixture. In `idx-lib/feeds.js`, this page's feed is QUICK, titled "Brand-new homes you can move into now", and it falls back to NEWER, "Brand-new homes". The live edge shows that title.
- **"Chapter3 is a brokerage, so we never quote a rate."** Cut.
- **No story.** None was added. **Owner question for the lead's `templates/owner-questions.md`:** "Do you have a new-build client story where something went wrong and we fixed it? For example, the builder would not count our registration, a month-11 inspection found a problem, or the first tax bill surprised a buyer. Tell it in your words."

## Not changed, and why

- **The title tag.** The owner liked it. See the critic's title nit.
- **O1 to O6.** These are still with the owner: who pays here, the registration rule here, the incentive kinds, the inspection cost, lot premiums, and the license check.
- **The A20 audit warning (no attributed sentence from Tim).** A quote needs the owner.
