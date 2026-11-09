# PLAN: /hoa/ (the HOA hub, Lane U, batch 2026-11-b)

Ledger: `facts.md` here (rows 1 to 29). Must-answers: `must-answer.md` here. Data and scripts: website working copy `data/2026-11-b/hoa/` (README there). The live page is hand-made (no spec; `grep` for its URL finds only `hub:` lines in sibling specs), so the builder writes `specs/hoa.js` and the spec replaces it.

## 1. What the live page has, and what is worth keeping

Read as its reader (a buyer who typed "Myrtle Beach HOA fees"): the page promises fees in its title and gives none. Its first screen says fees are "half the question". A reader leaves without a number. That is the one problem. Everything below fixes that, and the 15-item "Read more" list that outweighs the answer.

Keep:
- **The title words and H1.** `data/headlines.json` holds "Myrtle Beach HOA Fees, and What Each One Covers" and the two-line H1. The searched words ("Myrtle Beach HOA fees", "covers") stay. A hook with the fact is added to the title tag (section 4).
- **The SC Consumer Affairs complaint figures** (Horry 31 percent, 0.38 per 1,000, Georgetown second; statewide up 176 percent since 2019). The triage calls them the page's one local fact. Rows 22, 24.
- **"How we check an association before you offer"**: the four steps (is the building warrantable, the budget and reserves, the rules against how you live, we tell you what we found, including what argues against buying). Rewritten in plain words, kept short; it is the page's service.
- **The end band**: "Looking at a place with an association? Send the community name. We read the documents and the financials and tell you what we found, before you are committed." Keep it word for word.
- **The FAQ question "Can I refuse to join an HOA?"**, answered from row 25.
- **The offer label "Have us review an HOA"** (once, in the end band).
- **The breadcrumb and the hub role**: six sibling specs point `hub:` here.

Cut:
- "Myrtle Beach HOA fees are half the question" (the page now answers the question).
- "None of that means associations here are bad ... Newer agents struggle ... We have." (an unsourced claim about other agents).
- "Dense condo and planned-community development ... is the likely driver" (no source).
- "The rest of this guide": 15 checkmark lines ending "Read more." Replaced by one grouped list (section 3, block 9).
- FAQ "Are low HOA fees a good sign?" and the description's "why low dues are not a bargain": /hoa/benefits/ owns it (cannibalization fix).
- FAQ "Do I get the HOA documents before I buy?" (32 and 53 percent): /hoa/documents/ owns it.
- FAQ "Is there a state agency that oversees South Carolina HOAs?": /hoa/south-carolina-hoa-laws/ owns it. One line and a link remain in the complaints section.
- "Verified July 2026" in the sources line (the byline carries the date).
- The keyword "regime fees South Carolina" (hoa-vs-poa owns it).

## 2. The reader and the decision

A buyer looking at a Grand Strand home with a monthly fee, often from out of state. Two common cases: an oceanfront condo at $900 or more a month, and a house at $95 to $400. **Decision:** is this fee normal for this kind of home, and what will it pay for, so I can compare homes and budget the month. Next questions: why the condo fee is so high, where fees are lower, can it go up, what if I do not pay.

What they would pay an expert to tell them: the normal fee for exactly this kind of home here, what it takes off their bills, what one real association does with the money, and which pages answer the next worry.

**The answer in two sentences** (numbers from rows 1 to 4; final figures per `findings.json`):
"On the Grand Strand, a typical HOA fee is about $95 a month for a house, $290 for a townhouse and $650 for a condo; a condo in an oceanfront tower runs about $940. A condo fee is higher because it pays for the building: its insurance, water and sewer, trash and, on the ocean, usually internet and often power."

Kind of page: a cost breakdown (CRAFT 3, "Know the total") that is also the hub. Lead with the typical fee; the visual that does the work is one chart of fees by kind of home, then one table of what each covers.

## 3. Sections in order

Headings are questions people search. The first sentence under each is the answer, with the subject named.

0. **Hero and short answer.** H1 kept. Byline Devin Day, reviewed by Tim Nash (spec author "devin"). The two-sentence answer above. A small key-facts row (three chips, words with each number): "House: about $95 a month", "Condo: about $650", "Oceanfront tower: about $940". Slim offer bar: "Have us check what a home's fee covers" (row 4). The edge's homes feed sits under the opening (`idx-lib/feeds.js` maps /hoa/ to HOA_COVERS, "Condos whose HOA fee covers insurance, water and sewer"); keep it, it shows the thing the page explains.

1. **"How much are HOA fees in Myrtle Beach?"** Chart 1 (below) by kind of home, then two sentences: the middle half for each, and the yearly figure for the two the reader most often compares (about $1,140 a year for a typical house, about $7,700 for a typical condo). One line answers "monthly or yearly": listings here give the fee a month. One line from Census (row 7): owners who live in their homes here report about $90 a month for a house, which matches the listings; about 6 in 10 Horry County homeowners outside the Loris area pay a fee, against about 1 in 3 in the rest of South Carolina (row 8). That last line is the "here, HOAs are the rule" fact no other site states.

2. **"What do HOA fees cover?"** Table 2 (below): what the fee includes, by kind of home. Then one sentence per kind, in an agent's voice: an oceanfront tower fee usually pays the building's insurance, water and sewer, trash, internet and often your power bill; a townhouse fee usually pays lawn care and trash; a house fee usually pays the pool, the entrance and the common land, and you insure your own house. The reader's next question answered here: what you still pay yourself (row 21: about $2,000 a year to insure a house; about $800 for a condo owner's own policy).

3. **"Why are HOA fees so high in Myrtle Beach?"** The oceanfront building. A tower fee is about ten times a typical house fee (row 6) because the owners share the cost of the building: its roof, its insurance, its elevators and pools, and on the ocean most of the utilities (rows 2, 4). A surprise from FEMA's own records: the building's federal flood policy works out to only about $34 a unit a month (row 9). Most of a $940 fee is everything else. Link /invest/condo-buildings/ for building-by-building fees (it owns "oceanfront condo HOA fees"), /hoa/master-insurance-ho6/ and /hoa/reserves/. **Mid offer** (box): "Have us read the building's budget" / "Send us the building. We get its budget and reserves and tell you what the fee pays for before you offer."

4. **"What does an HOA fee buy in a neighborhood of houses?"** Three plain tiers, from rows 3 and 4: a neighborhood the listing marks with no shared amenities, about $70 a month; one with a pool or clubhouse, about $110; a gated community, about $160, and a gated golf community, about $200. The gated golf fee usually pays for a staffed gate: 90 in 100 of those listings name a security service (row 4). One real budget, read like an agent would explain it: Myrtle Trace in Conway, $95 a month; of each $100 the association takes in, about $54 keeps up the grounds and buildings, $6 the pool and lakes, $2 the clubhouse, and about $18 is left over after expenses (rows 13, 14). One named neighborhood: Waterbridge, about $150 a month (row 19; its lazy river only if that row's status allows). Link /buyers/no-hoa-homes/ for houses with no fee.

5. **"What do 55+ and gated golf communities charge?"** 55+: the communities the site has verified run from $95 (Myrtle Trace) to about $400 a month for a house in Del Webb at Grande Dunes (rows 12, 13, 15, 16). What the high end buys, from Del Webb at Grande Dunes's own budget: about 20 cents of each dollar goes to the oceanfront Grande Dunes Ocean Club, which every owner belongs to (rows 10, 11). That is the selling fact: the fee is how a home inland gets a beach club. Chart 3 (below). Gated golf: about $200 a month for a house (row 3; middle half about $100 to $320), and two named examples in one sentence (Prestwick with its guarded gate, about $190; Barefoot's Leatherleaf, about $390; row 17). Links: /buyers/55-plus-communities/, /buyers/gated-communities/, /buyers/golf-communities/. **Homes strips:** `G.homes("grande-dunes", "Grande Dunes")` after the gated golf paragraph and `G.homes("prince-creek-55", "Seasons at Prince Creek West")` only if the page names Seasons (about $340, row 16). Both slugs exist in `batches/2026-10-b/data/idx-places.json`. Titles, true by their search: "Homes for sale in Grande Dunes now" (default). **Mid offer:** "Have us add up every fee" / "Some communities charge two fees, a master and a neighborhood. Name the home and we find each one."

6. **"Where are HOA fees lowest?"** Condos: off the ocean and inland, from row 20 (Socastee about $375, Carolina Forest about $425, against about $875 in Myrtle Beach's 29572 ZIP). Houses: about 3 in 10 houses for sale have no HOA at all (row 5), mostly older streets; 4 in 100 houses built before 1980 have a fee, against 8 in 10 built since 2010 (row 28). Link /buyers/no-hoa-homes/ and /hoa/dues-increases/ for "can it go up" (no cap in SC, row 27; one line). No strip here: the edge feed is condos.

7. **"Are HOA complaints common in Horry County?"** Kept local fact, short: Horry County files the most HOA complaints in the state, 31 percent of the state's total and the most per person (row 22); the most common complaint is that the HOA did not follow its own rules (row 23). One line: South Carolina has no state agency that enforces the HOA Act; link /hoa/south-carolina-hoa-laws/. Then "How we check an association before you offer" as four short numbered steps (kept, plain words, "we" voice). End band (kept wording).

8. **"The HOA guide: every question, one page each"** (one calm list, no checkmarks, no "Read more"). Four short groups, the link text is the question each page answers:
   - Money: "How much can an HOA raise dues?" (/hoa/dues-increases/); "Who pays a special assessment when a condo sells?" (/hoa/special-assessments/); "How much should a condo have in reserves?" (/hoa/reserves/); "What does an estoppel letter cost at closing?" (/hoa/estoppel-and-transfer-fees/); "Are HOA fees tax deductible?" (/hoa/tax-deductible/); "Are HOA fees worth it?" (/hoa/benefits/).
   - Rules and law: "South Carolina HOA laws" (/hoa/south-carolina-hoa-laws/); "Can an HOA fine you?" (/hoa/violations-and-fines/); "Can an HOA ban rentals?" (/hoa/rental-restrictions/); "Can an HOA foreclose?" (/hoa/liens-and-foreclosure/); "When does the builder hand over the HOA?" (/hoa/developer-control-turnover/); "HOA vs POA, and what a regime fee is" (/hoa/hoa-vs-poa/).
   - Condo insurance and damage: "Master policy vs HO-6" (/hoa/master-insurance-ho6/); "Who pays for water damage in a condo?" (/hoa/who-pays-for-damage/).
   - Before you buy: "What to check in the HOA documents" (/hoa/documents/).
   Use `G.guideCards` (one card per group) or a plain two-column list; whichever reads calmer at 390 px. All 15 child pages, each once.

9. **FAQ** (open text, short, each from a row; no question a section already answers word for word): "How much are HOA fees in Myrtle Beach?" (rows 1 to 3); "Are HOA fees monthly or yearly?" (row 1: listings state a month; yearly figures); "What is a regime fee?" (row 26, one line and the link); "Can I refuse to join an HOA?" (row 25); "Can HOA fees go up?" (row 27, one line and the link).

Sources line: the site's count of homes for sale in the local MLS feed (Coastal Carolinas MLS, through our CRM), in aggregate; Census ACS 2024; FEMA OpenFEMA flood policies; Del Webb at Grande Dunes and Myrtle Trace budgets (linked); SC Department of Consumer Affairs 2026 HOA report; S.C. Code Title 27 Ch. 30 and 31. Method lines (fee steps, flags, filters) go here, not in the copy. "General information, not legal advice" once, small.

## 4. Title, description, words

- Title tag (40 to 60 characters, searched words first, a fact from the page): **"Myrtle Beach HOA Fees: About $95 a House, $650 a Condo"** (54). If rows 1 to 3 move, the figures move with `findings.json`. The H1 stays as the owner's headline.
- Description: "Typical Myrtle Beach HOA fees by kind of home, from every listing: about $95 a month for a house, $650 for a condo, $940 on the ocean. What each covers." Never "why low dues are not a bargain".
- Keywords: "Myrtle Beach HOA fees", "average HOA fees Myrtle Beach", "what do HOA fees cover", "condo fees Myrtle Beach". Not "regime fees South Carolina".
- Spell out "homeowners association (HOA)" once. "Regime fee" once, linked.

## 5. Visuals (each one message, readable at a glance)

1. **Chart 1, bars (`G.bars`), "A condo on the ocean pays about ten times a typical house's fee."** One bar per kind, the median a month, the middle half as the feature text beside the bar ("most pay $750 to $1,185"): house, no shared amenities $70; house with a pool or clubhouse $110; house in a gated golf community $200; townhouse $290; condo off the ocean $515; condo in an oceanfront tower $940 (rows 2, 3). Six bars, sorted low to high. Built from `chart-fee-by-kind.json`. On a phone the labels sit above each bar. The 55+ range is not a bar (no aggregate count); it is in section 5's text.
2. **Table 2, "What the fee usually pays for."** Rows: insurance, water and sewer, trash, internet, cable TV, electricity, lawn care, pest control. Columns: oceanfront tower, condo off the ocean, townhouse, house. Cells: "9 in 10", "6 in 10", "1 in 10" (rounded to the nearest ten, from `table-covers.json`; row 4). The striking cells: electricity is in 6 in 10 tower fees and almost no other kind; insurance is in about 8 in 10 condo fees and almost no house fee, with a glass dot whose fill follows the share, so the eye reads it before the number. Four columns fit at 390 px if the item names are short; otherwise stack into one card per kind on a phone.
3. **Chart 3, one horizontal 100 percent bar or a short bar list, "Where Del Webb at Grande Dunes's fee goes."** Lawns 31, Ocean Club 20, master association 16, staff 10, utilities 6, reserves 5, insurance 4, other 8 (cents of each dollar, row 10). Title says the one point: "A fifth of the fee buys the beach club." Built from `budgets.json`.
No photo is needed for the answer; if one is wanted for section 3, ask the photo partner for an oceanfront tower from the beach (templates/photo-request-email.md). No decorative image at the top.

## 6. Offers

- Slim bar under the short answer: "Have us check what a home's fee covers".
- After section 3: "Have us read the building's budget".
- After section 5: "Have us add up every fee".
- End band (kept): "Looking at a place with an association?" / "Have us review an HOA".
- Homes: the edge feed under the opening; the Grande Dunes strip in section 5 (and Seasons only if named). Two offers never share words.

## 7. One value on every page (needs the lead)

- The site prints the condo fee as $640 (hoa-vs-poa, benefits plan) and $650 (tax-deductible, cost-to-own). PROPOSED registry row `typical-hoa-fee-by-type` (batch 2026-11-a hoa-benefits PROPOSED.md) names /hoa/hoa-vs-poa/ as owner. Change its owner to /hoa/ and its source to this page's `findings.json`. Siblings then link here for the figure: hoa-vs-poa ("What fees run here, by kind of home, is on our Myrtle Beach HOA fees page"), tax-deductible (H2 "How much of a typical Horry County fee is deductible?"), cost-to-own (keeps its by-ZIP figures, which are a different group).
- This pull (row 1) gives a condo median of $645, a townhouse median of $290 and a house median of $95; 2026-11-01 gave $640, $275 and $95 (row 29). The hub prints "about $650" for the condo (P2: a figure nobody says aloud is rounded; $650 is also what /hoa/tax-deductible/ and /buyers/cost-to-own/ already print), "about $290" for the townhouse and "$95" for the house. /hoa/hoa-vs-poa/ changes $640 to "about $650" and $275 to "about $290" in the same patch, or drops the figures and links here. The registry row's pattern then catches any other condo value.
- **The stopped /hoa/benefits/ rebuild (batch 2026-11-a) planned its own "What do HOA fees pay for here?" table and "Why are condo fees so high in Myrtle Beach?" section.** Under the 2026-11-08 ruling those searches belong here. When benefits resumes, it keeps cost against value and links here for the fee table.

## 8. Not on the page

An interest rate or a payment amount; any address's value; MLS sold data except in aggregate; anyone's fee for a named oceanfront building (condo-buildings owns it); a quote for Tim Nash; any story (none in `stories/stories.json` fits a fee table; the page does not need one); anything about who lives anywhere; Devin named in the copy; a date in the body.
