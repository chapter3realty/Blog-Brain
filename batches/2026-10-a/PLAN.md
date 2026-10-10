# Batch 2026-10-a: one page per major 55+ community

Decided 2026-10-05 by the owner: "make the pages about 55+ communities and have 1 page per major community". The five topics proposed earlier (HOA fees, oceanfront vs second row, flood zone, due diligence, home inspection) move to the backlog at the end of this file.

## The four pages

"Major" means the age rule is recorded in the deed and the community has about 400 homes or more. Sizes are the hub page's figures until the ledgers verify them.

| # | Community | Town | Homes | URL |
|---|---|---|---|---|
| 1 | Del Webb North Myrtle Beach | North Myrtle Beach | 535 planned, still building | /buyers/55-plus-communities/del-webb-north-myrtle-beach/ |
| 2 | Del Webb at Grande Dunes | Myrtle Beach | 524 | /buyers/55-plus-communities/del-webb-grande-dunes/ |
| 3 | Myrtle Trace | Conway | 518 | /buyers/55-plus-communities/myrtle-trace/ |
| 4 | Seasons at Prince Creek West | Murrells Inlet | 460 | /buyers/55-plus-communities/seasons-at-prince-creek-west/ |

**Cresswind Myrtle Beach, Market Common, is held out (2026-10-05).** Its recorded declaration (Book 3678, Page 31) cannot be read online. Kolter's 2012 launch post called it "age targeted", and 55places, which the hub page relied on, says "No Age Restrictions". Until the declaration is read, no page may call it 55+. Ledger: `facts/cresswind-myrtle-beach-facts.md`.

**Cypress Village, Little River, is held out (2026-10-05).** The researcher found no age rule in its recorded declaration (2015), its first amendment (2016) or its bylaws, and the builder, Mungo Homes, described it in 2020 as "a unique place to live for people of all ages". Two recorded rule sets could not be read online: the 2019 Regulations (Book 4172, Page 3232) and the Rules and Regulations recorded 2026-09-24 (Book 5130, Page 293, 59 pages). The live hub lists it as a 55+ community. Until a recorded age rule is found, no page may call it 55+, and the hub listing is a fix-list item. Ledger: `facts/cypress-village-facts.md`.

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
10. How does it compare with the other three? A table of verified figures, linking each page.

One table of key facts, one chart (dues across the four communities, from verified rows), an FAQ, a sources line.

## Rules for this batch

- **Facts only about a named community, builder or HOA.** No "premium", "value option", "well run". Website CLAUDE.md rule 5.
- **Fair housing.** Property, rules and geography. Never who lives there or who it suits.
- **No sentence on two pages.** Four pages from one outline will drift into shared sentences, as the 8 town pages did (audit: 30 identical sentences). Each page's prose is written from its own ledger. Shared explanations live on the hub and are linked. The website's near-duplicate check runs across the four before review.
- **Worked example on each page.** Labelled "Example", told like a real person, every number from a verified row (STANDARD T2). No real story in the bank fits a named community yet.
- **Devin Day is the byline author.** No name in the copy.

## Waiting for MLS (about a week)

Resale price range, median price, days on market and price per square foot for each community. The pages ship without them, with builder prices dated where the builder still sells. When the MLS export arrives, one pass adds the resale numbers to all four pages and registers them in `facts/registry.json` with a 30-day stale date.

## Steps and who does them

| Step | Who | Status |
|---|---|---|
| Fact ledgers, one per community | Three researcher agents | Done: 266 facts |
| Verify every row | Separate agents that did no research | Done: 227 verified, 21 wrong, 18 unverifiable |
| Draft four specs | Writer agent, reading `voice/RULES.md` and the ledgers | Done: score 100 on all four |
| Gates: mkpage, build.js audit, scorer, claims, facts, near-duplicates | Machine | After drafts |
| Review pass: `voice/REVIEW-PASS.md` on each page | Reviewer agent | Done: 75 fixes, all applied (`REVIEW.md`) |
| Owner reads four pages, one sitting | Owner | Version 1 read 2026-10-06; version 6 (maps v2, photos, illustrations, story craft) waiting at https://claude.ai/artifact/1cLs6mnrzK2GaVWkX9gYh2 |
| Record his edits, update the memory, ship | Machine, then the owner's AI deploys | Last |

## Owner questions

3. **Fair housing on the hub.** The live hub lists Cypress Village and Cresswind as 55+ communities. If either has no recorded age rule, the listing advertises an age preference for an all-ages community, which the Fair Housing Act forbids (42 USC 3604(c)). Until the declarations are read, take both off the hub's 55+ table or mark them "age rule not confirmed". Counsel can say which.
2. **Cypress Village and Cresswind.** The quickest check for both: a closing attorney or title company pulls the recorded declarations (Cresswind: Book 3678, Page 31. Cypress Village: Book 5130, Page 293 and Book 4172, Page 3232), or someone views them at the Register of Deeds public viewing area, 1301 Second Avenue, Conway. For Cypress Village, its manager, Coastal Association Management (843-663-2040, per its site), can also answer. Can someone ask Coastal Association Management (843-663-2040, per its site) whether any recorded document makes Cypress Village age-restricted, or pull Book 5130, Page 293 at the Register of Deeds public viewing area, 1301 Second Avenue, Conway? Until then it stays off the 55+ pages.
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

## Owner answers, 2026-10-06

1. Cypress Village and Cresswind: "im not worried about the pages that talk about Cresswind and cypress google says their 55+ its enough protection to me." They stay on the hub. They are still not in this batch, because no recorded age rule was read.
2. Hub figures: "yeah lets update the figures." Apply `hub-corrections.diff`.
3. Blackmoor story: "yeah you can use the blackmoor story." In the story bank as `blackmoor-to-seasons`; use it on the Seasons page.
4. Reading HOA documents: "if a buyer needs us to read the HOA we will so keep it." The CTAs stay.
5. Seasons gate: "i dont know if the gate operates." Leave it out.
6. A sentence from Tim: "no tims busy." The A20 warning stays.
7. Example prices: "you should be able to price check houses pretty easy with zillow." Zillow blocks automated access from here (audit, offsite evidence). Example budgets wait for MLS, or the owner pastes a few current listings.

Overall lessons (class BUYER in `voice/RULES.md`): lead with what the buyer wants, good then bad; no industry terms; speak as the expert, source lightly; what it means, not how it works; answer the next question (flood insurance after the flood zone); warmth; events and community life. The four drafts are rewritten against these.
