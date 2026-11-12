# Plan: /why-chapter-3/ (batch 2026-11-b, second rewrite)

Inputs: `must-answer.md`, `facts.md` (rows R1 to R37, second ledger), the owner's words of 2026-11-12, the triage row and the cannibalization entry. Spec: `specs/why-chapter-3.js` in the website working copy, rewritten in place; author "devin" (byline Devin Day, reviewed by Tim Nash). Devin is never named in the copy.

## What is worth keeping from the current page

- **The offer line** "Send us the address" and the end band with the phone and its hours (R36).
- **Tim Nash's wow line** (R22, R23): 30+ years, third generation, Fred Nash Boulevard. It moves up, into the people section.
- **The free tools list** (seven links), now led by the AI search and the map, and each line says what the tool does for you.
- **The things we do before you offer** (R29 to R32), as short service lines, not a table of public records.
- **The flood count** (R27), as one line of proof in the research section, with the corrected wording.
- **The page's styles**: the one card style, plain lists under thin rules, the 720 px column, the closing band, and the 320 px fix for the feed's search row.
- **Cut:** the law sections (what a buyer's agent must tell you, the material adverse fact definition, customer and transaction broker, the Broker-in-Charge duties), the check table with its record column, the Government and Justice Center photo, the BrickWood block, the lender FAQ and the flood bar chart. The owner: "a big disclosure rather than selling ourselves".

## The reader and their decision

A buyer, seller or investor looking at the Grand Strand who clicked "Why Us", or who is choosing a firm or a home search. Many live out of state. They have used Zillow. They want to know what they get here that they do not get there, and whether the people are worth a call.

Their decision: **start searching with our tools, and let us help with the home they find.**

## The answer, in two sentences

Tell Chapter3 AI the home you want and why, in your own words, and it builds the search for you. Behind it is Tim Nash, 30 years on the Grand Strand, and a team that checks the HOA, the rentals and the insurance before you offer.

(Each sentence is under 28 words on the page. The photo row of section 2 is the third thing the reader sees, under the demo.)

## Title, H1, sub

- **Title (about 55 characters):** "Why Chapter3 Realty: AI Home Search and Local Agents". Branded, plus "AI home search", which no page on the site owns (must-answer row 2). It leaves "Myrtle Beach real estate team" to /about/ and "guides & tools" to /guides/.
- **H1:** "Why Chapter3 Realty?" **Italic line:** "Tell our AI the home you want. Our agents check it before you offer."
- **Sub (hidden as now, required by mkpage):** one statement under 30 words.
- **Description:** "Search Grand Strand homes in your own words with Chapter3 AI, see the homes that fit with photos, run the numbers free, and meet the people behind it."
- **Crumb:** "Why Chapter3". Eyebrow "Why Chapter3".
- **Short answer:** the two sentences above.

## Sections, in order

Headings are questions people search. Each answers in its first two sentences, then shows the thing.

1. **Can you search for homes with AI?** (R1 to R4, R8)
   - Answer first: yes. Type what you want and why, the way you would say it to an agent. Chapter3 AI turns it into a search from more than 700 MLS features, and says in one line what it understood (R2, R4).
   - **Visual 1, "Say it your way" (built from `tools.json` demos, never typed):** two cards stacked, one per sentence. Each card: the sentence in quotes in a search-box shape, then the filters the search read as small chips, then the count in bold, "1,266 condos for sale match", with the day. Each card is a link that runs that exact search on /homes/map/ (`?q=`), so the reader sees it live. Demos: "condo I can airbnb near the beach under 300k" and "3 bedroom house with a pool under 600k in Murrells Inlet" (R3). Not the "retiring" one. Plain HTML and CSS in the page's card style. Readable at a glance: sentence, chips, number.
   - Then one plain list of three: "Keep talking to it" (cheaper, what about Conway, R2); "Every feature in the MLS" (water, boats, the beach, a pool, a golf cart, no HOA, rentals allowed, R4); "It never filters on who you are or who lives nearby" (R2).
   - One small line (R8): Chapter3 AI can be wrong, and it never gives a value, a rate or a payment.

2. **Can you see which homes fit before you click?** (R5, R6, R7, R9)
   - Answer first: yes. Sign up free and, while you look at the map, Chapter3 AI reads the listing descriptions, the homes in view first. The homes that fit what you asked gather at the top in a row of photos, each with the reason in a few words (R5). This is the owner's "dynamic preview photos".
   - Then, plain list under thin rules:
     - "Ask about any home": on each home's page, ask "What does the HOA fee cover?", "How old are the roof and the AC?", "What is the flood zone?" or "Can I rent it out?". It answers from that listing (R6).
     - "The map, in 2D or 3D": click a dot to see the photo and price; click any spot to search around it; ask for homes within a few miles of the two places you go every day (R7). Link /homes/map/.
     - "Homes on every guide": 131 of our 141 pages open with live homes from the MLS, a row that scrolls by itself, the most appealing homes first, never sorted by price (R9, R10, from `tools.json`).
   - **Homes strip (glass.js `homes()`), the one place-strip on the page:** `str-garden-city-beach-condos`, "Garden City Beach", head "Best Airbnb opportunities in Garden City Beach" (the owner's own example title, 2026-11-10; the place exists and is used on /invest/airbnb-income/). It shows a strip working inside the copy. Fallback when empty: nothing (no photo).
   - **Offer:** "Tell us what you want. We send you the homes that fit, with the numbers." Button "Send me homes" -> /contact/.

3. **Which numbers can you run yourself, free?** (R11, R12)
   - Answer first: the rental analyzer reads the MLS: pick a home for sale and it fills in the beds, baths and size, then estimates the rent, the costs, the cash flow and the return, with the permits filed nearby (R11). Nothing about value or loans.
   - A clean list, one line each, each a link, in the tool's own words (R12): Airbnb calculator, cost to own, property tax, closing costs, seller net, capital gains, cost of living. No tiles, no numbers from those pages.
   - The guides: one link to /guides/.

4. **Where do our guides get their numbers?** (R13, R14, R27)
   - Answer first: from the county's own records and our own counts, not from a national average.
   - Three lines, each a link: 13,194 home sales recorded at the county in a year, behind /sell/home-value/ (R13); 45 oceanfront condo buildings, each with its HOA fee and what its units sold for, /invest/condo-buildings/ (R14); our flood count (about 1 in 5 of the homes for sale in FEMA's high-risk zone come up in a flood-zone search of the MLS listings; we look up each home on FEMA's map), /buyers/undisclosed-flooding/ (R27, corrected wording).
   - Short. No chart: the AI demo is the page's picture.

5. **Who will you work with at Chapter3?** (R22 to R24, R26)
   - **The wow first (R22, R23):** Tim Nash, our Broker-in-Charge, has sold real estate on the Grand Strand for over 30 years, the third generation of his family here. Fred Nash Boulevard, the road around the end of the airport runway, is named for his father, who sold real estate here before him.
   - **His published words (R24),** whole, as a pull quote with the same caption as on /buyers/relocating/pros-and-cons/. No new quote, no cut.
   - One line (R26): we build these tools ourselves, and our team keeps adding to them. We find the homes for you; you do not have to bring us one.
   - Link: "Meet the team" -> /about/.

6. **What do you get when you work with us?** (R28 to R32)
   - Answer first (R28): talking with us is free. So are rental analyses and pricing reviews; you pay only under a written agreement you choose to sign.
   - Plain list, four lines: an insurance quote before you offer (R31); for an investor, we leave out communities that ban renting and read the HOA papers for rules that would block your plan (R30); on a home you are serious about, the HOA's bylaws and records, the building's lawsuit history where it can be found, and a rental analysis (R29); before closing, a check for an HOA lien or unpaid fees (R32).
   - **Offer (R25):** "Send me homes with the numbers to prove it." Button -> /contact/.

7. **Frequently asked questions** (four, none repeating a section word for word)
   - Does Chapter3 have an AI home search? (R1, R2)
   - Is the AI search free? Yes; reading the descriptions needs a free sign-up (R5).
   - Does it cost anything to talk with Chapter3? (R28)
   - Is Chapter3 Realty licensed? Yes, 28849 and 43182 (R33, R34).

**License line, near the end, one sentence (R33 to R35):** "Chapter3 Realty Corp is licensed in South Carolina, company license 28849, with Tim Nash as Broker-in-Charge, license 43182; both are on the state's Licensee Lookup." Placed after section 6, before the FAQ, in small type. No section heading, no law.

**End band:** "Tell us the home you want." Phone and hours (R36), button "Tell us what you want" -> /contact/.

Length: about 1,100 to 1,400 words. Calm: one built visual, one strip, plain lists.

## Visuals, each readable at a glance

1. "Say it your way" demo cards (section 1), from `tools.json`. The spec checks each demo has a total above zero and at least three chips, and prints the pull day. If a count is zero on build day, the card is dropped, not typed.
2. One homes strip (section 2), live, filled at the edge.
3. Screenshots of our own tools are allowed, but every useful one shows listing photos or Google's map, which rules/images.md forbids saving into a page. **The only screenshot that passes:** the rental analyzer's sample report on the home page (a sample house, our own numbers). It shows "Estimated value", so it is **not used** either. No screenshots on this page; the live feed and strip are the pictures.

## Homes

- **Edge feed under the opening:** `/why-chapter-3/` already has one (`idx-lib/feeds.js` line 384, NEWEST with the head "Just listed on the Grand Strand. Pick one, and we check it first"). It carries the AI search box (`edge.js` line 176), which makes it the page's first proof. The head belongs to the first rewrite. BUILD asks the lead for "Just listed on the Grand Strand. Tell our AI what you want", true for the NEWEST search (listed in the last 21 days).
- **Place strip:** `str-garden-city-beach-condos` (section 2). BUILD asks the lead to add `/why-chapter-3/` to that place's `pages` list (it is a record, not a gate; edge.js does not read it).

## Offers, in order

| Where | Words | Goes to |
|---|---|---|
| Top bar (heroCta) | "Tell us the home you want. We find it and check it." Button "Find me a home" | /contact/ |
| Feed under the opening | the live feed and its AI box | /homes/map/ |
| After section 2 | Tell us what you want. We send you the homes that fit, with the numbers. "Send me homes" | /contact/ |
| After section 6 | Send me homes with the numbers to prove it. | /contact/ |
| End band | Tell us the home you want; call 854.333.2135 | /contact/; tel:+18543332135 |

Every button links to /contact/; the site opens the short pop-up.

## Referring pages

`tools/inbound.js` counted 21 on 2026-11-10, mostly author notes ("Why Us"). After the rebuild, link here from words already on: /homes/ and /homes/map/ (the "Chapter3 AI" chip line, if the lead agrees), /about/ ("why work with us"), /guides/ (the tools intro), /invest/long-term-rental/ ("AI overview" line), /buyers/relocating/pros-and-cons/ (under Tim's quote: "more about how we work").

## Owner questions

The five open questions of 2026-11-10 stay open. The page says nothing that depends on them: no "every" about the study (question 2), nothing on cost beyond R28 (question 3), no reply-time promise (question 4), no flooded-house story or monthly reports (question 5), and no permit-alert claim. Not a new question: the "only" result goes to the owner in BUILD as a finding, with the wording the page uses instead.
