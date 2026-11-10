# PLAN: /hoa/rental-restrictions/ (Lane U, batch 2026-11-b)

Ledger: `facts.md` here (rows 1 to 61; the writer uses `verified` rows only). Must-answers: `must-answer.md` here. Data and scripts: website working copy `data/2026-11-b/hoa-rental-restrictions/` (its `README.md`). The live page is hand-made: no spec names its URL (`grep` finds it only as a link in five sibling specs), so the builder writes `specs/hoa-rental-restrictions.js` and the spec replaces the page. The earlier plan for this page (`batches/2026-11-a/hoa-rental-restrictions/PLAN.md`) is the base; this plan changes its angle to recorded rules and named places, and gives the city law back to /invest/str-rules/.

## 1. The live page: what is worth keeping

Read as its reader (a buyer who typed "can an HOA ban rentals"): the page says the right thing ("the city can say yes and the community can still say no") but never shows one real rule, one real place or one South Carolina law with its number. The amendment question gets "It depends". That is the one problem: nothing on it is local or checkable.

Keep:
- **The two-sets-of-rules idea**, cut to one paragraph and one small table. It is the page's spine, and the reason this page exists apart from /invest/str-rules/.
- **The list of rental rule forms** (minimum lease, cap, board approval, ban). It becomes the clause table, now with a real local example for each form (row 26; no "waiting period", which has no source).
- **The offer** "Have us check the rules before you offer" and the phone line. Every button goes to /contact/; the site opens its own short form.
- **The FAQ questions** "Can an HOA stop me renting my property?" and "What happens if the HOA adds a rental restriction after I buy?", now answered with law and a real case.
- **The sources line's SCDCA and 27-30 citations**, now with numbers used on the page.
- **The edge homes feed** (`idx-lib/feeds.js` maps this page to RENTALS_OK). Keep a feed under the opening; retitle it (section 6).

Cut:
- The home-office "real file" story. It is not in `stories/stories.json` (owner question carried from 2026-11-a `PROPOSED.md`).
- "the city permit you were counting on is worthless", "quietly ends", "Plenty of our clients specifically want a community that enforces its standards, and those communities are often the best maintained" (no source).
- The long pets-and-porches paragraph. One short section on rules written for renters replaces it.
- "Verified July 2026" (a typed date).
- Every city or town rule beyond one sentence: /invest/str-rules/ owns it.

## 2. The reader and the decision

A buyer who plans to rent the home out, by the night, the season or the year, often from out of state. A second reader owns here and has heard a rental vote is coming. **Decision:** can I rent this home the way my plan needs, and could the owners change that after I buy. What they would pay an expert to tell them: what real communities here say, how hard it is to change the rule, and how to know for one home before the offer.

**The answer in two sentences** (rows 10, 13, 30, 52, 61):
"Yes. A South Carolina HOA or condo can ban or limit renting if the rule is in its recorded papers, and no state law protects owners who bought before a new rule. Here the papers run from "any form of rental" at North Beach Plantation to no lease shorter than a year at Del Webb at Grande Dunes and Robber's Roost."

Kind of page: a rule explainer with a decision table (CRAFT 3, "Know if a rule applies" and "Decide"), carried by a list of named places. The main relation is condition: the papers say yes or no, and how many owners it takes to change them.

## 3. Title, H1, description

- **Title (54 characters, under the 62 limit):** "Can an HOA Ban Rentals in Myrtle Beach? Recorded Rules". This is the cannibalization map's title.
- **H1:** "Can an HOA stop you from renting your home in Myrtle Beach?" (the owner's style: a question people type).
- **Hero sub (8 to 30 words, no we, our or us):** "Yes, if the rule is recorded. Real Grand Strand rules run from any rental at all to a one-year minimum lease."
- **Description:** "Can an HOA ban rentals in South Carolina? The recorded rules of real Grand Strand communities, from nightly rentals allowed to a one-year minimum, and what it takes to change them."
- **Keywords:** "can an HOA ban rentals", "HOA rental restrictions South Carolina", "HOA leasing restrictions", "minimum lease term HOA", "can an HOA change rental rules after purchase". Never "Myrtle Beach short-term rental rules", "can you Airbnb in Myrtle Beach" or "STR zoning map" (/invest/str-rules/ owns them).

## 4. Sections in order (headings are questions people search)

Each section opens with its answer. Short paragraphs, no sentence over 28 words, none opening with "So", no "Here is".

0. **Hero.** H1, byline Devin Day, reviewed by Tim Nash (spec author "devin"), the two-sentence answer, then a key-facts row of three chips with words: "A rule binds only if it is recorded" (row 10); "No grandfather rule in South Carolina" (row 13); "Two-thirds of one building's owners voted out vacation rentals" (row 48). Slim offer bar: "Have us read the rental rules for one home" (button to /contact/). The edge feed sits under the opening (section 6). "On this page" list with short labels.

1. **"Can an HOA ban rentals in South Carolina?"** The rule in one sentence, then who, what and when in four short lines: HOA papers must be recorded to be enforced, and board rules are recorded by January 10 (row 10); a condo's master deed states any leasing limits (row 11) and owners must follow it strictly (row 12); neither law caps a rental rule or protects owners who bought first (row 13); a clear rule holds and an unclear one is read for the owner, with the two SC cases in two sentences each (rows 14 to 16). Then the city in one sentence and the small two-gate table: "The city or county decides whether a home may be rented by the night at that address; the association's papers decide whether that home may. Both must say yes. The rules for each town are on our Myrtle Beach short-term rental rules page." (link /invest/str-rules/; rows 22 to 24 only as needed for that sentence).

2. **"What do HOA rental rules say in real Grand Strand communities?"** The heart of the page and the owner's "wow factor": one numbered entry per place, in one order the reader can follow, from most rental-friendly to most limited. Each entry: a short headline with the place and its rule; one sentence of what the place gives you (its wow, true and sourced); the rule in plain words with the year and "posted" or "recorded"; one line on what it means for a nightly, seasonal or yearly plan; a small offer "Have us read the rules for a home in <place>" (to /contact/). The entries (rows):
   1. **North Beach Plantation, North Myrtle Beach: rent it any way you like.** A 7.5-acre island between the ocean and Whitepoint Swash, with a lazy river and a swim-up pool bar (row 53, only if its sibling row is verified). The master declaration allows "any form of rental"; every guest registers and gets a door fob (row 52). Homes strip `north-beach-towers` (exists) or a new `north-beach-plantation` place (section 6).
   2. **Sand Dunes Oceanfront Tower, Myrtle Beach: built for short stays.** A water park and an oceanfront lazy river (invest-condo-buildings row 38). Its master deed allows "transient" use (row 55). Strip `sand-dunes-resort` (exists).
   3. **The Farm at Carolina Forest: rent it, and no board rule can ban it.** Next to the state's flytrap preserve (row 39). Up to a 6-month minimum; no cap on rented homes (rows 37, 38). Strip `the-farm` (exists).
   4. **The Atrium, North Ocean Boulevard, Myrtle Beach: no stays of 30 days or less.** The owners' 1997 vote (row 48). Do not call it oceanfront: the listing feed does not flag it as an oceanfront building (one listing, 2026-11-10); the verifier checks. This entry also leads into section 3.
   5. **Sugarloaf (Longs) and Bellasera on the Waterway: six months.** One entry for two, each rule in one line (rows 45, 46). Bellasera's town only after the verifier confirms it.
   6. **Villa Firenze at Grande Dunes: a year, or six months with the board's consent** (row 47).
   7. **Del Webb at Grande Dunes: a year's lease, once a year.** The beach club in the base dues, as Pulte said in 2017 (row 32). The 55+ rule for tenants (rows 30, 31). Strip: new place `del-webb-grande-dunes` (section 6); link /buyers/55-plus-communities/del-webb-grande-dunes/.
   8. **Seasons at Prince Creek West: one year.** A clubhouse with a full-time activities director and a ballroom, as the builder listed in 2013 (row 34). Rule: rows 33. Strip `prince-creek-55` (exists).
   9. **Myrtle Trace, near Conway: a tenant 55 or older.** 42 acres of common land with a clubhouse, a pool and fifteen ponds (row 36). Rule: row 35. Link /buyers/55-plus-communities/myrtle-trace/.
   10. **Coquina Harbour, Little River: 12 months.** Condos on a boat harbor, with slips in the water (row 41). Rule: row 40.
   11. **Intercoastal Village Resort, Little River: a year, and a fine that doubles** (row 42).
   12. **Robber's Roost, Surf Estates and Waterfall: no lease under a year.** One entry for three neighborhoods of houses (rows 61, 44, 43); Waterfall also names Airbnb and VRBO. Towns only as the verifier confirms.
   After the list: one sentence and the story (rows 27, 28): "New communities differ, so we read each one." Then the comparison table from `table-named-rules.json` (place, kind, town, nightly, seasonal, yearly), for the reader who wants to compare, printed only with verified rows.
   **Mid offer** (box, after the table): "Send us the community. We read its recorded rules and tell you whether your rental plan fits, before you offer."

3. **"Can the HOA change the rental rules after you buy?"** Yes, by the route its papers set. The Atrium told plainly in four sentences (rows 48, 49): 93.75 percent of owners came, two-thirds voted, and stays of 30 days or less ended for every owner. Then a small table, "What it takes to change the papers", from `table-amend-votes.json` (rows 49, 50): 66, 67 or 75 percent, sometimes the lenders too. Then how often papers change: the county index shows 13 amendments to The Farm's declaration and 14 rule sets in Berkshire Forest since 2012, many filed by the builder while it ran the HOA (row 56; link /hoa/developer-control-turnover/). Then the two laws side by side: South Carolina has no grandfather rule (row 13); Florida does, for most rental limits (row 18), in a two-column table. A vote that misses the papers' threshold fails (row 17). **Mid offer:** "Have us read how the papers can be changed."

4. **"Can an HOA ban Airbnb but allow yearly leases?"** Yes, and many papers here do exactly that. One line with three named examples from section 2 (rows 43, 45, 46) and one chart from the refreshed listing count (rows 1 to 3): "Few houses with an HOA fee say nightly rentals are allowed." The same-city line for North Myrtle Beach (row 4) and Carolina Forest (row 5), one sentence each. The condo share ("about 7 in 10 condos for sale say short-term rentals are allowed") is one line with a link to /invest/condos/, which owns it.

5. **"Does a building full of renters change the loan?"** FHA's owner-occupancy test and what counts as owner-occupied (row 58, after the verifier's time check), and Fannie Mae's rental-pool and hotel tests (row 20). Three bullets, then: "Loans on these buildings are on our non-warrantable condo page" (link /invest/non-warrantable-condos/; /invest/condotel-financing/ in the same sentence). No rate, no payment, no lender named. If the page names our affiliated lender at all, it is "our affiliated lender, BrickWood Mortgage, a separate company"; this page does not need it.

6. **"What other rules apply only to renters?"** Short: renters may not keep pets in three buildings, a 6-month lease earns a pet at Teal Lake Village, and long-term renting costs the golf cart space at Carolina Keyes (row 54). Guest registration at North Beach Plantation (row 52). No more than about 100 words.

7. **"How do you find out before you buy?"** Three numbered steps, "we" voice, each naming who checks what: we check the zoning for the address (one line, link /invest/str-rules/); we pull the recorded declaration or master deed and the latest rules, since the county index is online but its pages are not (rows 10, 60); we read the seller's answer to the addendum's rental question, which may be "No Representation" (row 19). Then the end offer band.

8. **FAQ** (open text, each from rows, none repeating a section word for word): "Am I grandfathered if the HOA bans rentals after I buy?" (rows 13, 18, 48); "Does 'residential use only' ban Airbnb?" (row 16, said as that case's agreement, and rows 55's "residential does not prohibit leasing" papers); "Can an HOA make my tenant register?" (rows 15, 52); "What counts as a short-term rental?" (row 21 plus "your papers may define it": Surf Estates says under a year, row 44); "Can I rent a home in a 55+ community?" (rows 30, 33, 35; link /buyers/55-plus-communities/).

Sources line: S.C. Code 27-30-130, 27-31-100(h), 27-31-170; the three SC opinions (by number, no owners' names); Fla. Stat. 718.110(13) and 720.306(1)(h); each community's posted or recorded document, by name and year, linked; Horry County Register of Deeds index (our count); HUD Handbook 4000.1; Fannie Mae B4-2.1-03; SC Consumer Affairs HOA reports (the 9 of 1,527 count, row 25, as the "state does not referee" line); the site's listing feed, in aggregate, with the method line (row 9). "General information, not legal advice" once, small.

**Measure the top** (CRAFT 3): on a phone, H1, byline, the two-sentence answer, the chips and the slim offer bar fit the first screen; the edge feed follows; section 1 starts within two screens; the first named place within four.

## 5. Visuals (each one message, readable at a glance)

1. **The named-places list (section 2)**, built with `G.guideCards` or numbered entries, one per place, calm, no badges. A small three-mark row in each entry ("Nightly / Seasonal / Yearly", each a check or a dash with the word) carries the rule at a glance. Built from `table-named-rules.json`.
2. **Table, "What it takes to change the papers"** (section 3): building, kind, the vote. Five or six rows from `table-amend-votes.json`. Phone: one card per building.
3. **Chart, "Few houses with an HOA fee say nightly rentals are allowed"** (section 4), `G.bars`, three bars from `pull-2026-11-10/chart-by-type.json`: houses with an HOA fee (about 4 in 100), townhouses (about 1 in 4), houses with no HOA fee (about 3 in 10). The count beside each bar. One footnote line (row 9). The condo bar is left out: /invest/condos/ owns that number.
4. **Two-gate table** (section 1), 2 by 2, words only: the city says yes or no; the papers say yes or no; only yes and yes rents.
5. **South Carolina vs Florida** (section 3), two columns, two rows (condos, HOAs).
6. **Photos.** One at a time, each under its sentence, none above the answer. Candidates: a public-domain or CC photo of oceanfront towers for entry 2, not one a sibling uses (the 2026-11-a verifier rejected the Air Force street photo: it shows signs, not towers); a USDA NAIP 2023 aerial of The Farm with roads labeled from map data for entry 3; Coquina Harbour's boat slips from NAIP for entry 10. Each needs a license record (`rules/images.md`, `tools/photos.js`) and a look at full size and at 390 px. Where a homes strip fills, the strip is the picture; the photo is its fallback. For a ground photo of a named place, add it to the photo partner's shot list (`templates/photo-request-email.md`): Coquina Harbour's slips, The Atrium on North Ocean Boulevard, the North Beach Plantation entrance.

## 6. Homes strips and feeds (bold, personal, true)

- **Edge feed under the opening** (`idx-lib/feeds.js`, "/hoa/rental-restrictions/": RENTALS_OK, "Condos where the HOA allows rentals"). Too plain. Proposed for the lead (BUILD.md): a feed of oceanfront condos whose listing says nightly rentals are allowed, titled **"Oceanfront condos you can rent by the night"** (`type=condo&has=county_horry,str_allowed,oceanfront_unit`: 652 for sale on 2026-11-10). Alternative with a wow: **"Wake up to the sunrise, rent it by the night"** (`...,oceanfront_unit,sunrise_view,str_allowed`: 116). Both true by their filters.
- **Strip after section 4:** houses with no HOA fee whose listing says nightly rentals are allowed, titled **"No HOA, and you can rent it by the night"** (`type=house&has=county_horry,str_allowed&hoa=0`: 251). Needs a new feed or place (BUILD.md).
- **Strips in section 2** (`G.homes(slug, name, fallback, head)`), only where a place fits and has enough homes:
  - `the-farm` (exists): head "Homes for sale in The Farm, where renting is allowed".
  - `prince-creek-55` (exists, 4 for sale on 2026-11-10 by `subdivision=Seasons`; may show empty, then its fallback photo).
  - `sand-dunes-resort` (exists, 51 on 2026-11-09): head "Sand Dunes condos you can rent by the night" only if the strip's search is filtered to `str_allowed`; else the default head.
  - New place `del-webb-grande-dunes` (`subdivision: "Grande Dunes - Del Webb"`, 25 for sale on 2026-11-10): head "Del Webb at Grande Dunes homes, beach club included" only after row 32 is checked against today's dues; else the default.
  - New place `north-beach-plantation` (`subdivision: "North Beach Plantation"`, 15 for sale): head "Homes in North Beach Plantation, where any rental is allowed".
  - New place `myrtle-trace` (`subdivision: "Myrtle Trace"`, 14 for sale): default head.
  Do not edit `idx-lib/`, `partials/` or `batches/2026-10-b/data/idx-places.json`; the three new places and the two feeds go in BUILD.md for the lead.

## 7. Offers

- Slim bar under the answer: "Have us read the rental rules for one home".
- One small offer per named place: "Have us read the rules for a home in <place>". Each to /contact/ (or #lead-form). Two offers never use the same words: vary the verb ("Have us check", "Send us", "Ask us to read").
- Mid offers after sections 2 and 3 (wording in section 4).
- End band: "Tell us the plan before you buy. Nightly, seasonal or by the year: we read the recorded rules for the home and tell you whether it fits." (kept from the live page's band, rewritten in plain words). Phone line beside it.
- The site opens the short pop-up (name, phone, email optional, call us) by itself; the page only links.

## 8. Sibling owners, links and referring pages

- /invest/str-rules/ owns city and county rental law. Here: one sentence and the link. Ask the lead (BUILD.md) to change its FAQ "Can an HOA ban short-term rentals even where the city allows them?" to one sentence and a link here, so this page owns the HOA question.
- /hoa/south-carolina-hoa-laws/ (being rebuilt as the SC HOA law hub) should answer "can it ban rentals" in one line and link here.
- /invest/condos/ owns the condo nightly share; /invest/condo-buildings/ owns building profiles (Sand Dunes, North Beach); /invest/non-warrantable-condos/ and /invest/condotel-financing/ own loans; /hoa/documents/ owns getting the papers and the addendum; /hoa/developer-control-turnover/ owns builder control; /buyers/55-plus-communities/<place>/ own each 55+ community; /submarkets/carolina-forest/the-farm/ owns The Farm.
- **Fix for the lead:** /submarkets/carolina-forest/ says "Avalon's recorded rules prohibit any rental under three months, and communities like Waterbridge are reported to require one-year minimum leases." No ledger row in this repo supports either, and neither HOA posts its papers (Avalon's rules recorded 1/2/2019 and 1/7/2026, Waterbridge's 5/2/2019 and 12/11/2025 are in the county index, pages not online). That page should cut the two names or have the papers pulled. This page does not name Avalon or Waterbridge.
- **Referring pages** (aim six or more, `node tools/inbound.js`): /hoa/ (its list already says "Can an HOA ban rentals?"), /invest/str-rules/ (FAQ), /hoa/south-carolina-hoa-laws/, /hoa/documents/ ("A limit on renting ... that rules out how you will use the home"), /invest/mid-term-rentals/ ("we check the zoning and the HOA minimum lease term"), /invest/new-construction-rentals/ ("Minimum lease term"), /buyers/55-plus-communities/del-webb-grande-dunes/ ("Leases must be at least a year long"), /submarkets/carolina-forest/ (after its fix). Link on words already there.

## 9. Open items for the verifier and the lead

- Every row from 30 to 61 marked `pending` needs an independent verifier (CRAFT 2). OCR rows (42, 44 to 49, 54, 55, 61) need the page images, not only the OCR text.
- Rows 43 and 46: the town for Waterfall and Bellasera.
- Row 53: the status of invest-condo-buildings row 69 before North Beach Plantation's wow line is used.
- Rows 58, 59: the current online HUD Handbook 4000.1 owner-occupancy levels.
- Rows 1 to 8: re-pull on build day if the page ships after 2026-12-10.
- The owner question carried from 2026-11-a (`PROPOSED.md`): the home-office story; optional, how often the papers our agents read ban or limit renting.
