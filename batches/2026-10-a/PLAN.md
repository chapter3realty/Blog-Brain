# Batch 2026-10-a: one page per major 55+ community

Decided 2026-10-05 by the owner: "make the pages about 55+ communities and have 1 page per major community". The five topics proposed earlier (HOA fees, oceanfront vs second row, flood zone, due diligence, home inspection) move to the backlog at the end of this file.

## The six pages

"Major" means the age rule is recorded in the deed and the community has about 400 homes or more. Sizes are the hub page's figures until the ledgers verify them.

| # | Community | Town | Homes | URL |
|---|---|---|---|---|
| 1 | Del Webb North Myrtle Beach | North Myrtle Beach | 535 planned, still building | /buyers/55-plus-communities/del-webb-north-myrtle-beach/ |
| 2 | Del Webb at Grande Dunes | Myrtle Beach | 524 | /buyers/55-plus-communities/del-webb-grande-dunes/ |
| 3 | Myrtle Trace | Conway | 518 | /buyers/55-plus-communities/myrtle-trace/ |
| 4 | Seasons at Prince Creek West | Murrells Inlet | 460 | /buyers/55-plus-communities/seasons-at-prince-creek-west/ |
| 5 | Cypress Village | Little River | 404 | /buyers/55-plus-communities/cypress-village/ |
| 6 | Cresswind Myrtle Beach | Market Common, Myrtle Beach | 400 | /buyers/55-plus-communities/cresswind-myrtle-beach/ |

Not in this batch: age-targeted communities with no recorded age rule (Heather Glen, Bridgewater, Blackmoor). Smaller age-restricted communities for a second batch: Woodlake Village, Spring Forest, Lakeside Crossing (land lease), Carillon at Tuscany, Hidden Lakes Village, Rivergate. Continuing-care campuses (Brightwater, The Lakes at Litchfield, Covenant Towers) work on a different contract and get their own page later.

## Why per-community pages

- A buyer searches the community by name: "Del Webb Myrtle Beach HOA fees", "Can you rent in Cresswind Myrtle Beach", "Is Seasons at Prince Creek gated". The hub answers none of these for one community.
- What ranks today is builder pages (one community, sales copy) and directory pages (55places, agent sites) with a paragraph each. None gives the recorded age rule, the flood zone, the tax, and the one-time fees on one page.
- The hub, /buyers/55-plus-communities/, links to each page, and each page links back. That builds the cluster search engines read as expertise.

## What every page answers

Question headings, each answered in the first sentence (STANDARD A2, A4):

1. What is it? Builder, years, size, where. Defined in one sentence.
2. What does the 55+ rule require here? The community's own recorded wording. The federal 80 percent rule is explained once, on the hub, and linked.
3. What do homes cost? New-home base prices from the builder, dated. Resale prices wait for MLS (see below).
4. What are the HOA dues, what do they cover, and what is paid once at purchase?
5. What amenities does it have?
6. Can you rent the home out?
7. What will the property tax be? A worked example with the right tax district.
8. Is it in a flood zone, and which side of the wind pool line is it on?
9. How far is it from the beach, the hospital and the airport? A table, with the method.
10. How does it compare with the other five? A table of verified figures, linking each page.

One table of key facts, one chart (dues across the six communities, from verified rows), an FAQ, a sources line.

## Rules for this batch

- **Facts only about a named community, builder or HOA.** No "premium", "value option", "well run". Website CLAUDE.md rule 5.
- **Fair housing.** Property, rules and geography. Never who lives there or who it suits.
- **No sentence on two pages.** Six pages from one outline will drift into shared sentences, as the 8 town pages did (audit: 30 identical sentences). Each page's prose is written from its own ledger. Shared explanations live on the hub and are linked. The website's near-duplicate check runs across the six before review.
- **Worked example on each page.** Labelled "Example", told like a real person, every number from a verified row (STANDARD T2). No real story in the bank fits a named community yet.
- **Devin Day is the byline author.** No name in the copy.

## Waiting for MLS (about a week)

Resale price range, median price, days on market and price per square foot for each community. The pages ship without them, with builder prices dated where the builder still sells. When the MLS export arrives, one pass adds the resale numbers to all six pages and registers them in `facts/registry.json` with a 30-day stale date.

## Steps and who does them

| Step | Who | Status |
|---|---|---|
| Fact ledgers, one per community | Three researcher agents | Running |
| Verify every row | A fourth agent that did no research | Next |
| Draft six specs | Writer agent, reading `voice/RULES.md` and the ledgers | After verification |
| Gates: mkpage, build.js audit, scorer, claims, facts, near-duplicates | Machine | After drafts |
| Review pass: `voice/REVIEW-PASS.md` on each page | Reviewer agent | After gates |
| Owner reads six pages, one sitting | Owner | Then |
| Record his edits, update the memory, ship | Machine, then the owner's AI deploys | Last |

## Owner questions

1. The hub says "Clients of ours made exactly this move": a couple sold in Blackmoor and bought in Seasons at Prince Creek West. No file records where that story came from. Did it happen? If yes, it goes in the story bank and on the Seasons page. If no, it comes off the hub.

## Backlog (proposed 2026-10-05, moved here)

| Topic | Needs |
|---|---|
| How much are HOA fees in Myrtle Beach? | MLS export |
| Oceanfront, oceanview or second row in a Myrtle Beach condo | MLS export |
| How to check a Myrtle Beach house's flood zone before you offer | Nothing |
| The due diligence period on a South Carolina purchase | Tim: which contract form and how many days |
| Home inspection and the CL-100 in Myrtle Beach | Nothing |
| Golf cart rules by town | Nothing |
| The monthly market report | MLS export |
