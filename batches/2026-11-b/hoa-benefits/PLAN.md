# PLAN: /hoa/benefits/ (Lane U, batch 2026-11-b)

Spec to write: `specs/hoa-benefits.js` (the live page is hand-made; no spec exists, so the spec replaces it). Ledger: `facts.md` here (rows 1 to 45, context C1 to C4). Must-answers: `must-answer.md` here. Data: website working copy `data/2026-11-b/hoa-benefits/` (README there; every number from `findings.json` and the chart files). Needs for the lead: `BUILD.md` here.

This page was researched once before, in batch 2026-11-a (`batches/2026-11-a/hoa-benefits/`), and stopped before the build. The hub /hoa/ was rebuilt on 2026-11-09 and took that plan's fee table and "why condo fees are high" section. This plan keeps that research's best finding (the price test, re-run today), drops what the hub now owns, and adds what the triage asked for: real Grand Strand budgets, priced per home, against what the same thing costs alone.

## 1. The live page: what is worth keeping

Read as its reader: it never answers its own title with a number, and no community, fee or record is named. That is the one problem.

Keep:
- **The H1**, "Are HOA fees worth it on the Grand Strand?" It matches the top suggestions.
- **"Test the association before you offer"**: shared costs, funded reserves and a study, rules that fit your life, owners in control. It becomes "What we check before you offer", in our voice (section 8).
- **The resale point on the building's insurance**: if a building's coverage falls short of lender rules, fewer buyers can get a loan there. One line in the condo section, with the Fannie Mae per-unit deductible limit (A row 21, VERIFIED: up to 5 percent of coverage, or $50,000 a unit).
- **"We do not publish an opinion about any named building or association."** Keep it as the rule behind every named community: what the budget buys, never a verdict.
- **The FAQ questions** that no section answers word for word (section 9).
- **The links** to the HOA guide, in sentences with words that say what each page answers. The 15-line "Read more" list goes; the hub carries the full guide list.

Must not come back (struck or wrong on the live page):
- "Forty eight hours ... is the floor" (registry `hoa-48-hour-notice`); "no hearing is required"; "If you read online that fines here are capped at $100".
- "Lenders allow that per unit deductible to run as high as $50,000" (Fannie Mae only).
- Every "Ask for", "Check that", "Ask early", "Read the budget" (we do the work).
- "An HOA buys as one customer. One insurer ... One crew ..." and every sentence any site could write.
- "Low HOA fees are not always cheaper" as its own section heading. The 2026-11-08 ruling gives this page the point; it is two sentences inside section 7, with a link to /hoa/reserves/.
- The wording struck in `batches/2026-11-a/hoa-benefits/hoa-benefits-struck.json` (13 entries).

## 2. The reader and the decision

A buyer who has found a home with a monthly fee, often from out of state, who wants to know if the fee is money well spent or "a waste of money". Most look at a house in a newer neighborhood ($95 to $150 a month), some at a community with a big amenity ($300 to $400), some at a condo ($650 and up). Some own a boat or a truck.

**Decision:** is this fee worth it for me, or should I look at homes without one?

What they would pay an expert to tell them: what this fee buys, line by line, in dollars; what the same thing would cost them alone; whether the fee shows up in the price when they sell; and what the rules will cost them in things they cannot do.

**The answer in two sentences** (rows 2, 30):
"An HOA fee is worth it when it buys things you would pay for anyway, for less than you could buy them alone. In The Farm at Carolina Forest, $107 a month pays for cable TV, trash pickup, two pools and the shared land, and the pools cost each home about $63 a year."

Then one line for the reader who came for the other side (rows 31, 36): "What you give up is room: newer houses with a fee sit on smaller lots, and few have a place to park a boat."

Kind of page: a **decision guide** (CRAFT 3). The spine is the reader's question, answered with three real budgets and three public prices, then the trade-offs. Long is fine here; every section answers a searched question.

## 3. Title, description, words

- **Title tag** (searched words first, a fact from the page, 40 to 60 characters): "Are HOA Fees Worth It? What $107 Buys in Myrtle Beach" (52). Fallback, the cannibalization fix's own words: "Are HOA Fees Worth It? What Grand Strand Dues Buy" (49). The Farm has a Myrtle Beach mailing address (row 6), so the first is true.
- **H1** (kept): "Are HOA fees worth it on the Grand Strand?"
- **Description:** "What a Grand Strand HOA fee really buys, from real budgets: $43 of The Farm's $107 is cable TV. The pool, the beach club, the gate, and what you give up."
- **Hero sub-header** (no we, our or us): "Real budgets, priced per home, against what the same things cost alone."
- Words readers use, once each in plain context: "HOA fees", "HOA dues", "worth it", "waste of money", "pros and cons", "benefits", "amenities", "property value", "gated community", "beach club", "no HOA". Spell out "homeowners association (HOA)" once.
- Keywords: "are HOA fees worth it", "HOA pros and cons", "do HOAs increase property value", "is an HOA worth it Myrtle Beach". Never "Myrtle Beach HOA fees" (the hub's).

## 4. Sections in order

Headings are questions people search. The first sentence under each is the answer, with the subject named. Each named community gets its wow first, then what the fee buys in dollars, then its trade-off in one line, then its strip and its own offer.

0. **Short answer** (above). Key-facts row, three chips with words: "$43 of a $107 fee: cable TV" (row 2); "About $63 a year: one home's share of two pools" (row 30); "Newer houses with a fee: about $205 a sq ft, against $274 without" (row 31). Slim offer bar: "Have us price what a home's fee buys" (/contact/). The edge feed sits under the opening (see BUILD.md: it needs `withStrips`).

1. **"What does an HOA fee actually pay for?"** The Farm at Carolina Forest as the worked example. Wow first: the fee carries a cable TV contract with Spectrum, curbside trash pickup the HOA hires, two pools, an activity center and a clubhouse with a fitness room (rows 3, 4). Then Chart A. Then what it means: about half the fee pays two bills most owners pay anyway, the TV and the trash; the pools and the common land are the rest. One line: the fee is $107 again for 2027 (row 1). Second example in one sentence: in Del Webb North Myrtle Beach, the builder says the $315 fee includes lawn care and a 175-channel TV package (row 25). Trade-off line: no private pool on a lot, and boats and RVs need the HOA's approval (row 5). One line and a link: what fees include, by kind of home, is on our page on Myrtle Beach HOA fees (/hoa/). **Strip:** `the-farm`, title "Homes in The Farm, where $107 a month includes cable TV" (true while row 1 and 3 hold). Place offer: "See homes in The Farm" (`G.offer(place)`, which links /contact/?place=).

2. **"Is the pool worth the HOA fee?"** Yes, by the numbers, for a household that swims. Chart B: Myrtle Trace's pool and ponds cost each home about $77 a year, and The Farm's two pools about $63; one adult pays $175 to $295 a year at a Myrtle Beach recreation center and $555 at North Myrtle Beach's center (rows 7, 28 to 30). One honest line: an HOA pool is outdoor and closes for the winter; a city pass adds a gym (row 30 note). Myrtle Trace's wow: 42 acres of shared land with fifteen ponds where owners and their guests fish, catch and release, for a $95 fee that also keeps up the pool, the clubhouse, the gate and the roads (rows 8, 9). Trade-off line: trucks go in the garage and boats park by permit at the clubhouse lot, not the driveway (row 10). **Strip:** `myrtle-trace`, title "Myrtle Trace homes, with fifteen ponds to fish, for $95 a month" (55+ is a legal housing category; say "55+ community" once, from the MT ledger). Place offer: "See homes in Myrtle Trace". **Mid offer** (box): "Get the budget behind the fee" / "Name the community. We get its budget and show you what each home's share pays for." / "Have us get the budget".

3. **"Is a beach club worth a higher HOA fee?"** Two communities that put the ocean in the fee.
   - **Del Webb at Grande Dunes**, about $400 a month for a house (row 17). Wow: every owner belongs to the Grande Dunes Ocean Club, on the ocean, with a large outdoor pool and whirlpool and private beach access (rows 11, 12). Pulte said in 2017 it was the only Del Webb in the country with beach club access in its base dues (row 15, attributed and dated). In dollars: the 2025 budget's Ocean Club line works out to about $80 a month a home, and yard care of each owner's own lot about $50 (rows 13, 14; only if the verifier allows the division). At home, a staffed amenity center with indoor and outdoor pools and a day dock (row 16). Trade-off: no sheds or above-ground pools (row 18). **Strip:** `del-webb-grande-dunes`, title "Del Webb homes that come with an oceanfront beach club". Place offer: "See homes in Del Webb at Grande Dunes".
   - **Barefoot Resort**, North Myrtle Beach. Wow: owners in the residential association's neighborhoods have a private cabana on the ocean, with key-fob parking, showers, a kitchen and staff, and a beach shuttle in season; the association's North Tower pool on the Intracoastal Waterway holds about 356,000 gallons (rows 19 to 21). Fees: condos about $570 a month; houses in Leatherleaf $385 to $398 (row 24). Trade-off: not every Barefoot neighborhood belongs to that association, so we check which one a home is in (row 19 group note). **Strip:** `barefoot-resort`, title "Barefoot Resort: golf, the waterway and a beach cabana for members". Place offer: "See homes in Barefoot Resort".
   One line and a link: our page on 55+ communities and our page on gated communities compare the rest.

4. **"Is a gated community worth the fee?"** Only if you want the gate staffed, and then the fee is the only way to get it. A gate staffed every hour of the year takes 8,760 hours of a guard's time; at the local middle wage of about $15 an hour, that is about $132,500 a year in pay alone. Shared by 500 homes, about $22 a home a month (rows 26, 27; the 500 is labelled as an example). Barefoot's Dye Estates is one: owners and guests are greeted by security staff at its front guardhouse (row 23). One line, kindly: a gate controls who drives in; we do not rate any place as safe or unsafe (CRAFT 1, "answer the question you cannot answer"). Link /buyers/gated-communities/. No strip (Barefoot's is above). **Mid offer:** "Know what the gate and the club add" / "Send us the home. We find every fee it carries, the master association's too, and what each one pays for." / "Have us add up the fees". (Wording must differ from the hub's "Have us add up every fee"; check at build.)

5. **"Are condo fees worth it?"** Usually, because the fee buys what a condo owner cannot buy alone. The association must insure the building (row 40), and the roof is a shared expense of all the owners; the owner of a house in this region pays a middle of about $10,400 to replace one alone (row 41). One clause for scale: a house here costs about $2,000 a year to insure, a condo owner's own policy about $800 (row 42), or leave that to the hub. The resale line kept from the live page, with the Fannie Mae per-unit deductible limit (A row 21). Links: why condo fees run high, on /hoa/; fees building by building, on /invest/condo-buildings/; the building policy and your own, on /hoa/master-insurance-ho6/. No new chart. Short.

6. **"Do HOAs increase property value here?"** Not in asking prices. Chart C: newer houses with a fee list for less a square foot than those without, at every distance from the beach, and the no-fee house sits on more land in every band (row 33). Then ZIP by ZIP: lower in 12 of 13 ZIP codes, Socastee the one exception; 10 of 10 for newer houses (row 32). Then the national study's 4 percent premium (row 35), and what it means here: an HOA house's price is about its amenities and newer street; a no-fee house's is about its land and its location. One line: 96 in 100 newer houses 3 to 10 miles from the beach have a fee (row 34), so the choice is often made for you. Never "sell for", never "an HOA lowers value". Method (asking prices, Horry County ZIP codes, 15 per group) in the sources line. **Mid offer:** "Ask us for houses with no HOA fee where you want to live" (/contact/).

7. **"What do you give up in an HOA?"** Good news first: the rules bind your neighbor too. Then plainly:
   - Room for the boat or the truck: about 3 in 100 fee houses list RV or boat parking, against about 3 in 10 houses with no fee; fee houses list a community boat ramp more often (row 36). Link /buyers/no-hoa-homes/.
   - Things you cannot build: no private pool in The Farm or Myrtle Trace, no shed in Myrtle Trace or Del Webb at Grande Dunes (rows 5, 10, 18). The mistake we see most from buyers from New York is not checking that the rules fit how they live: boats, golf carts, rentals and pools (row 44).
   - Control of the money: no cap in state law on dues, assessments or fines; the limits are in the documents, and The Farm's cap a yearly base increase at 20 percent (row 39). Link /hoa/dues-increases/.
   - A low fee can mean thin savings, and the bill comes later as a special assessment: two sentences, The Farm's 5 cents of each dollar into savings as the local example (rows 2, 45). Link /hoa/reserves/ and /hoa/special-assessments/.
   - What owners here complain about: Chart D (row 37). The top complaint is that the HOA did not follow or enforce its own rules. One line: the state records complaints but does not referee them; link /hoa/south-carolina-hoa-laws/.
   **Mid offer:** "Send us the rules before you offer" / "Tell us about the boat, the truck, the dog or the rental plan. We read the covenants against it." / "Have us read the rules".

8. **"What we check before you offer."** Numbered, our voice, from the live page's checklist: the budget, divided per home, and what each line buys (rows 2, 7); the savings for repairs and the reserve study (row 45); the building's insurance and its deductible (A row 21); the recorded rules against your plans (row 44); who runs the board (link /hoa/developer-control-turnover/); what the association charges at closing (link /hoa/estoppel-and-transfer-fees/). "We do not publish an opinion about any named association. We tell you what its papers say." End band: "Is this fee worth it for you?" / "Send us the home or the community. We get the budget and the rules, and tell you what the fee buys and what it rules out." / "Have us review the fee".

9. **FAQ** (open text, each from a row, none repeating a section word for word):
   - "Are HOA fees a waste of money?" Not when the fee buys what you would pay for anyway; The Farm's cable and trash are about half its fee (row 2).
   - "Do HOA homes sell for more in Myrtle Beach?" Asking prices say no (rows 31, 32); one line, link up to section 6.
   - "Can I buy a house and not join the HOA?" One sentence (row 38) and a link to /hoa/.
   - "Can an HOA raise fees?" One sentence (row 39) and the link.
   - "Are HOA fees tax deductible?" Link only to /hoa/tax-deductible/; no claim here.

Sources line: The Farm @ Carolina Forest HOA 2027 approved budget; Myrtle Trace HOA 2026 budget; Del Webb at Grande Dunes 2025 budget and declaration; Grande Dunes Master Association; Barefoot Resort Residential Association; BLS OEWS May 2025; City of Myrtle Beach and City of North Myrtle Beach membership pages; Census AHS 2023 and ACS 2024; Clarke and Freedman (2019); SC Department of Consumer Affairs HOA reports; S.C. Code Title 27 Ch. 30 and 31; Fannie Mae Selling Guide; houses for sale counted in aggregate from the local MLS feed. Method lines (per-home division, 812 lots, asking prices, 15 per ZIP, the 500-home example) go here, not in the copy. "General information, not legal or tax advice" once, small.

## 5. Visuals (each one message, readable at a glance)

| # | Visual | Data | One-line title | Notes |
|---|---|---|---|---|
| A | Horizontal bars, dollars a home a month (section 1) | `chart-farm-fee.json` | "Of The Farm's $107 fee, about $43 pays for cable TV" | 9 bars, cable in the accent colour, "everything else" last. Plain labels already in the file. Phone: label above each bar. |
| B | Horizontal bars, dollars a year (section 2) | `chart-pool.json` | "A home's share of the pool costs less than one public pass" | 5 bars; the two HOA bars in one colour, the three city passes in another; a one-line note that the HOA pools are outdoor and seasonal. |
| C | Grouped bars, two per band (section 6) | `chart-price-by-beach.json` | "Newer houses with an HOA fee list for less a square foot, near the beach and far from it" | 4 bands; lot size as text beside each pair ("0.20 acre against 0.66"). If `glass.js` has no grouped bars, draw it in the spec (2026-11-a NEEDS item 3). |
| D | Horizontal bars, percent of 416 complaints (section 7) | `chart-complaints.json` | "What Horry County owners complain to the state about" | 8 bars, labels rewritten plainly as in the 2026-11-a PLAN. |

Four charts on a long page, one per question, never two on a screen. No decision table: the sections are the decision. No icons row beyond the three key-fact chips.

**Photos** (licensed on the site already; the builder looks at each full size and at 390 px first):
1. Section 1: The Farm's large pool from above, `images/buyers/the-farm/the-farm-pool-from-above-2026.webp` (NOAA NGS, January 12, 2026, public domain; record in `data/2026-10-b/photos.json`). Caption: "The Farm's large pool, one of two the fee keeps up."
2. Section 5 (optional): oceanfront condo towers, `images/2026-11-a/invest-condos/myrtle-beach-condo-towers-2011.webp` (USGS, public domain). Caption carries the fact that the fee pays for the building. Only if section 5 needs a picture; it may not.
No photo for Myrtle Trace, Del Webb at Grande Dunes or Barefoot until the photo partner shoots them: the strips carry the homes.

**Shot list for the photo partner** (send with the group email, `templates/photo-request-email.md`; no person as the subject, no readable plate, no logo as the subject): (1) Barefoot's Beach Cabana at 4611 South Ocean Boulevard, from the beach, the building and the dune walkover; (2) a Myrtle Trace pond from common land, the clubhouse or the bank, early or late light; (3) The Farm's activity center and pool from the parking lot; (4) a staffed guardhouse at a gated entrance, from the public road, the gate arm and the booth; (5) a house with a boat on a trailer beside it on an older street with no HOA, for section 7.

## 6. Homes strips and offers

- **Edge feed** under the opening: `idx-lib/feeds.js` maps /hoa/benefits/ to AMENITIES ("Homes with a community pool and clubhouse"). It fits the page. Because the page carries its own strips, the edge drops it unless the feed is marked `withStrips` (edge.js line 249). BUILD.md asks the lead. A bolder, true title for that feed is proposed there.
- **Strips in the body**, each after its community's entry, each with a bold, true title (`G.homes(slug, name, fallback, head)`): `the-farm`, `myrtle-trace`, `del-webb-grande-dunes`, `barefoot-resort` (titles in section 4). All four places exist in `batches/2026-10-b/data/idx-places.json`; `myrtle-trace` and `del-webb-grande-dunes` list only /hoa/rental-restrictions/ in `pages`, so BUILD.md asks the lead to add /hoa/benefits/.
- **Offers**, all to /contact/ (the site opens the short pop-up): slim bar "Have us price what a home's fee buys"; a place offer under each community; mid boxes "Have us get the budget" (after 2), "Have us add up the fees" (after 4), "Ask us for houses with no HOA fee where you want to live" (after 6), "Have us read the rules" (after 7); end band "Have us review the fee". No two offers share words, and none repeats the hub's ("Have us check what a home's fee covers", "Have us read the building's budget", "Have us add up every fee", "Have us review an HOA"). Compare at build.

## 7. Sibling ownership (CRAFT 3, B46)

- /hoa/ owns the typical fee by kind of home, the inclusions table, "why so high", the Myrtle Trace and Del Webb per-$100 bars, Prestwick and Waterbridge fees, the year-built count and the complaint headline. This page prints the hub's $95 and $650 only if the short answer needs them, exactly as the hub prints them, with a link. It uses the same two budgets only as dollars per home against a public price.
- This page owns: The Farm's fee per home, the pool against a public pass, the beach club and gate in dollars, the price test, the boat-parking count, the full complaint chart.
- /buyers/no-hoa-homes/ owns where homes with no HOA are. /buyers/gated-communities/ and /buyers/55-plus-communities/ own the places one by one. /invest/condo-buildings/ owns oceanfront buildings. /hoa/dues-increases/, /hoa/reserves/, /hoa/special-assessments/, /hoa/master-insurance-ho6/, /hoa/tax-deductible/ each get one line and a link.
- **Inbound links** (CRAFT, owner 2026-11-09, aim for six): the hub already links "Are HOA fees worth it?"; add sentence links from /buyers/no-hoa-homes/ ("what an HOA fee buys"), /buyers/gated-communities/ (the gate cost), /buyers/55-plus-communities/ (the beach club), /submarkets/carolina-forest/the-farm/ (where the fee goes), /hoa/reserves/ and /hoa/dues-increases/. Run `node tools/inbound.js <site> --only /hoa/benefits/` after the build.

## 8. Audit traps (brief)

No sentence over 28 words; none opens with "So"; no "Here is"; no em dashes; hero sub-header without we, our or us; buttons are requests; never "the best", "top-rated", "family-friendly", "safe"; never describe who lives anywhere; never "sell for" from asking prices; never a verdict on a named HOA; never a date in the copy. The Farm's budget year stays out of the body: say "the fee stays at $107 in its newest budget", and name the 2027 budget in the sources line.
