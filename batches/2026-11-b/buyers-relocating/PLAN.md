# Plan: /buyers/relocating/ (batch 2026-11-b, rebuild the relocation hub)

Researcher, 2026-11-10. Inputs: `must-answer.md`, `facts.md` (30 rows: 21 verified or corrected in sibling ledgers or the story bank, 8 new and awaiting a verifier, 1 kept only for consistency; a struck list of 16 live claims; 3 owner questions), the triage row, `reports/cannibalization-2026-11-08.json` and the live page.

## How the page is built today, and how to build it

The live hub is hand-made HTML (`chapter3realty/buyers/relocating/index.html`, about 148 KB, old dark template). No spec has its URL, and it is not in `data/relocating/pages/` (`tools/headlines.js` line 92 skips the hub when it rebuilds that family). Its two spec-built siblings (`specs/relocating-why-myrtle-beach.js`, `specs/relocating-which-town.js`) and the approved hubs of this batch (`specs/sell.js`, `specs/hoa.js`) are the model.

Build a new spec, `specs/relocating.js`: `url: "/buyers/relocating/"`, `author: "devin"`, `hub: { name: "Buyers", url: "/buyers/" }`, glass theme through `G.page`, design as `specs/sell.js` (the italic line at about half the H1's size, one card style, plain lists and tables under thin rules, one 720 px block width). It reads `data/2026-11-b/buyers-relocating/hub.json` for the state table and throws if a ledger value moves (as sell.js does). Never type a number the data file holds.

## What the live page has that is worth keeping

- The searched words "Relocating to Myrtle Beach" at the front of the title and H1, and "Moving to Myrtle Beach" in the eyebrow and description.
- The idea the owner built the old page on: you can buy before you finish moving. It is true, and now each step has a verified rule (rows 16 to 24).
- The remote-closing step list, rewritten. Kept: pick the towns first, offer from home, inspect in the due diligence window, close through a South Carolina attorney, sign before a notary where you live. Fixed: "submit them electronically" (row 23), "a South Carolina lender" (Chapter3 does no financing work).
- Links to all 20 relocating guides and the ten state pages, now grouped by the question each answers.
- The phone number as a button and the lead form with its consent text word for word, in the end band.

Cut: the "Coming soon" search box; the orange "Start My Relocation Plan" band before any content; the two FAQ blocks (one at the top, one at the end); "Mistakes Relocators Make" (common-mistakes owns mistakes); "Where our relocating clients come from" as written; the mortgage section, the NMLS number and "preferred lender" wording; the unrecorded couple story; "Your money goes further here" and "Lower prices, but build the real monthly number first" (cannibalization: they become one link line each); "How to pick a Grand Strand town" (two lines and the which-town link); every claim in the struck list (facts G).

## The reader and their decision

Someone in another state, most often North Carolina, New York, Pennsylvania, New Jersey or Virginia, who has mostly decided to move here and now wants the order of the work. They know the beach and the name. They do not know the towns, the tax rules or how a closing works here. They worry about buying a house they have not stood in, a closing they cannot attend, the wrong town, a job change, and costs they did not expect.

**Their decision:** how to plan the move: what to read and decide first, and whether to buy before they arrive. **The job, in one verb:** plan. **Kind of page:** a hub with one owned answer (CRAFT 3): the answer, the one process this page owns as numbered steps, then every guide in one calm list grouped by question.

## The answer, in two sentences

In the latest count, about 15,000 households moved to Horry County for the beach, a short winter and a low property tax. You can buy before you move: sign the offer online, and sign the closing papers before a notary where you live, with two witnesses.

(Rows 1, 16, 22; 22 and 25 words. On the page a third sentence gives the one tax number: "An owner who lives in the home here typically pays about $944 a year." (row 3, the why page's words). The why page owns the reasons: the words "the four reasons, with numbers" link to it in the same paragraph.)

## Title, H1, description

- Title (54 characters): **Relocating to Myrtle Beach: How to Buy Before You Move**. Searched words first, then the promise only this page keeps. "Close in One Trip" goes (no source; owner question 2).
- H1: **Relocating to Myrtle Beach? You can buy before you move.** Italic second line at about half size: *Every moving guide, by question.*
- Subtitle (body size): "About 3 in 10 homes sold here go to a buyer whose tax bill is in another state. You can sign, inspect and close from home." (rows 9, 16, 18, 24)
- Description: "Relocating to Myrtle Beach: how to buy from another state, from an offer signed online to an attorney closing by mail, plus every moving guide by question."
- Keywords: relocating to Myrtle Beach; moving to Myrtle Beach; moving to Myrtle Beach SC; Myrtle Beach relocation guide; relocation realtor Myrtle Beach; buying a home in Myrtle Beach from out of state; remote closing South Carolina. Never: why is everyone moving to Myrtle Beach, cost of living, pros and cons, which town, moving checklist, best neighborhoods, Horry County property tax.

## Sections, in order

On a phone the top is the H1, the byline (Devin Day, reviewed by Tim Nash, date by machine), the subtitle and the short answer. The site's edge puts the homes feed under the opening; leave it there. A slim offer bar follows the short answer. Then "On this page" (four short labels).

1. **Short answer** (the two sentences above, the tax sentence, and the why-page link) and the slim bar: "Moving here? Tell us where from and what you want." Button: "Plan my move with us" (to /contact/).

2. **Can I buy a house in Myrtle Beach before I move?** (owns "relocating to Myrtle Beach", the remote homebuyer, and "buying a house in South Carolina from out of state")
   - First sentence is the answer: "Yes. You can choose, inspect and close on a home here while you still live in another state, and you do not have to attend the closing." (rows 16, 18, 24)
   - Visual 1: six numbered steps, a bold name and one or two short sentences each, said as what we do (CRAFT 5, "We do the work"):
     1. **Pick the towns first.** Tell us how you want to live; the 13-town comparison helps (link /buyers/relocating/which-town/ on "13 towns near Myrtle Beach, compared").
     2. **We see the houses for you.** We tour the homes you like and tell you what the photos do not show. "On a video call" only if the owner confirms (owner question 1).
     3. **Know the insurance before you offer.** We get an insurance quote for the address before you make an offer (row 17).
     4. **Offer from home.** An offer signed electronically has the same effect as ink (row 16).
     5. **Inspect.** A home inspection is the buyer's job in South Carolina; we line up the inspection (row 18, the verifier's wording; never "every").
     6. **Close without the trip.** A South Carolina attorney supervises every closing (row 19); with a home loan for personal or family use, the lender must use the attorney you choose (row 20); we can recommend attorneys once we work together (row 21). You sign before a notary where you live, with two witnesses (row 22), and the attorney may close by mail (row 24). South Carolina has no video notary (row 23).
   - One line after the steps, the reader's reassurance in a number: "About 3 in 10 homes sold in Horry County go to a buyer whose tax bill is in another state; for condos, more than half." (rows 9, 10)
   - One line and link: the full purchase, step by step, is on /buyers/buying-in-myrtle-beach/ ("how buying a house here works").
   - Mid offer: "Send us the homes you like. We tour them before you fly down." Button: "Have us tour a house for you".

3. **Which moving guide is for your state?** (not "where are people moving from": the why page owns that H2)
   - First sentence: "About 8 in 10 buyers here with a tax bill in another state have it in one of these ten states, and each has its own moving guide." (row 13)
   - Visual 2: **one table**, title "Most out-of-state buyers come from these ten states". Columns: the state, linked to its guide on "Moving from New York" and so on; buyers in a year (rows 11, 12), with a thin bar inside the cell so the order reads at a glance; road miles from the county that sends the most households (row 14, rounded to 10, the county named in small type: "from Long Island"). Sorted by buyers. No hours (row 14 note). On a phone the three columns fit; the county name wraps under the miles.
   - One line under it: North Carolina's largest source is Brunswick County, next door, about 50 road miles away (row 15). One line: buyers from any other state start with the why page's list of counties movers come from (link on "where movers come from").
   - No offer here (the next section ends on one).

4. **What should I know before moving to Myrtle Beach?** (the suggestion "what to know before moving to myrtle beach"; the hub's list)
   - First sentence: "Each question below has its own guide." Then one calm list per group, an H3 that is a plain question, one line per guide: the link on the words that say what it answers, and, where a verified row exists, one short fact a mover wants first. No cards, no icons, no illustrations (VERDICTS 2026-11-08: "very very cluttered and unorganized"). Each fact is said here once and nowhere else on the page.
     - **Is it the right move?** The four reasons, with numbers (why-myrtle-beach; row 2 optional); the honest pros and cons of living here year-round (pros-and-cons; it answers "reasons not to move"); retiring here: what South Carolina does not tax (retirees); 55+ communities, compared (55-plus-communities).
     - **Where should I live?** 13 towns near Myrtle Beach, compared (which-town); the best neighborhoods by what you love (best-neighborhoods); the area guides (/submarkets/).
     - **What will it cost?** Compare your city's cost of living (cost-of-living); what a house costs a year besides the loan (cost-to-own); Horry County property tax rates, 4% vs 6% (property-taxes; row 29 in one clause: "you apply for the 4 percent rate after you buy"); what home, wind and flood insurance cost here (coastal-insurance).
     - **Work, care and school.** Who hires here and what jobs pay (jobs); hospitals, and the care that means a drive (healthcare); how to find the school zone for an address (schools).
     - **Weather, storms and the beach.** Weather by month, with the wow in the line: "A January day averages a high of about 56 degrees, and the ocean is still in the low 70s in October" (rows 4, 5); every damaging hurricane since 1989 (hurricanes); beach rules, town by town, with the wow: "From November through February, permitted golf carts may drive onto the county's beaches, and horses are allowed on one stretch south of Myrtle Beach" (rows 7, 8; the county's beaches only).
     - **Getting here and getting around.** The four road names to learn, and the airport (getting-around).
     - **The move itself.** Your first 45 days, in order: you have 45 days for a South Carolina license and 45 for the car's registration (moving-checklist; row 28); the buyer mistakes that cost the most (/buyers/common-mistakes/).
     - **Moving from your state.** One line pointing up to the state table ("the ten state guides are in the table above"), so the list is complete without repeating it.
   - Mid offer: "Tell us your move date. We put these steps in order for you." Button: "Have us build your moving plan".

5. **Relocating to Myrtle Beach: questions** (FAQ, open text, four entries, none repeating a section)
   - **Do I have to be at the closing?** No. The attorney may close by mail, and is reachable by phone or email to explain the papers (row 24). Most people still want to stand in the house once; we plan that visit around the showings.
   - **Can I sign my closing papers on a video call?** Not with a South Carolina notary (row 23). You sign before a notary where you live, with two witnesses (row 22).
   - **Who picks the closing attorney?** With a home loan for personal or family use, you do, and the lender must follow your choice (row 20). We can recommend attorneys once we work together (row 21).
   - **Can I move before I have a job here?** About half of the buyers who come to us from the northern states arrive with a remote job (row 25), and most of our buyers who move here find work within a month or two (row 26, our clients' experience, not a promise). Link the jobs page. No lender sentence and no BrickWood mention on this page: Chapter3 does no financing work, and the jobs page already carries the one BrickWood story with its disclosure. If the writer uses row 27, BrickWood is "our affiliated lender, BrickWood Mortgage, a separate company", with the affiliated business disclosure inline (website PLAYBOOK A16).

6. **End band.** "Moving to Myrtle Beach? Start with one call." The phone button (854.333.2135) and the form with the consent text word for word. Button: "Talk to us about your move" (to #lead-form).

Four offers in all (the bar, two mid, the end band), each tied to what the reader just read, no two with the same words. Every button links to /contact/ or #lead-form; the site opens the short pop-up.

## Visuals (each readable at a glance)

1. The six steps of buying from another state: a numbered list, bold step names, one or two short sentences each. No icons, no timeline drawing.
2. The state table: one message in its title ("Most out-of-state buyers come from these ten states"), sorted, a thin bar in the buyers column, the miles beside it, each state linked. Built from `hub.json` (`guide_states`).

No photo. A beach photo would only decorate a hub (RULES P10), and the edge feed carries pictures of homes. No map: the which-town page owns the map of towns.

## Homes strips

The hub names no single place, so it carries no `glass.js homes()` strip (as `specs/sell.js`). The site's edge already places the feed `MOVE_IN` ("Listed as move-in ready", `idx-lib/feeds.js` "/buyers/relocating/") under the opening. It fits the reader. The title should be bolder and personal, and stay true: see "For the lead".

## Cannibalization checks

- The hub's H2s are its own: "Can I buy a house in Myrtle Beach before I move?", "Which moving guide is for your state?", "What should I know before moving to Myrtle Beach?". None is a sibling's heading. The why page keeps "Why are so many people moving to Myrtle Beach?" and "Where are people moving to Myrtle Beach from?".
- No home price, no cost index, no pros-and-cons list, no town profiles, no checklist detail, no property tax how-to: one line and a link each.
- The FAQ has no question a sibling's FAQ already asks in the same words. "Can I sign my closing papers on a video call?" differs from /invest/out-of-state/'s "Can I sign the deed on a video call with a notary?" (rental buyers, the deed); the hub is for a home to live in.

## For the lead (BUILD.md; files this page may not touch)

1. **Feed title** (`idx-lib/feeds.js`, "/buyers/relocating/": MOVE_IN). Same search, new head: "Move-in ready homes, for the day the truck arrives". True: every home in it is listed as move-in ready. No new place, no new feed.
2. **/buyers/buying-in-myrtle-beach/**: its H2 "Can I buy a home in Myrtle Beach from out of state?" is the hub's question. Per the cannibalization fix, cut it to one line and the link "how to buy before you move" (/buyers/relocating/), and drop the out-of-state keyword if it is still there.
3. **/buyers/relocating/beaches/**: add the county's winter horse zone (facts row 8) to its winter section. The beaches page owns beach rules; the hub gives one clause.
4. **One value for the typical home price** (facts F): cost-of-living says about $342,000 (Zillow metro, July 2026); why-myrtle-beach says about $320,000 (Zillow county, September 2026). Bring them to one month and one value, and register it in `facts/registry.json`.
5. **Referring pages:** the hub already has 28 (`tools/inbound.js`); nothing to add.
6. **Owner questions** (facts H): video walk-throughs for homebuyers; "one trip"; the extensions story and the job-first advice. The page is written without them.

## Checks before review

- `node tools/repeat-check.js <page> --strict`, `structure-check.js`, and the struck list (facts G) against the built page: none of the 16 live claims comes back.
- Every number on the page traces to a row above, and the table to `hub.json`.
- A verifier who did not research them checks rows 7, 8, 12, 13, 14, 15, 24 and 28 before the writer uses them. If row 14 fails, the table drops the miles column and keeps the buyers and the links.
