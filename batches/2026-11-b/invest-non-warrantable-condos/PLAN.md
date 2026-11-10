# Plan: /invest/non-warrantable-condos/ (Lane U, batch 2026-11-b)

Inputs: `must-answer.md`, `facts.md` (rows cited as F#), data in the website copy `data/2026-11-b/invest-non-warrantable-condos/`. The live page has no spec (`grep` finds the URL only in sibling specs and `idx-lib/feeds.js`): write a new spec, `specs/non-warrantable-condos.js`, author "devin". Keep the URL.

## What the live page does well (keep)

- The plain definition in its first lines: a warrantable condo qualifies for a normal conventional loan; a non-warrantable one does not, and you can still buy it and finance it. Keep the idea, tied to Fannie Mae's own words (F1).
- "The reason decides the loan you can use, the price you pay, and whether it is a smart buy." This is the page's spine. Keep it.
- Sorting reasons into "minor", "a hard stop" and "a lending label, not a broken building". Keep the sort; give each reason its published number (F4 to F13).
- The insurance section's worked example (a $20 million rebuild, at most a $1 million deductible). Keep the arithmetic; drop the dates (F13).
- "Warrantability has to be checked at the time you buy." Keep (F2).
- The self-employed point: the loan they would need anyway may be the same one. Keep only if a row supports it; today none does (see Open).
- The offer "Send the building name ... before you spend a dollar on an offer". Keep it, with new words and without the lending claim.
- The BrickWood sentence and disclosure, in the approved wording (F30).
- FAQ questions: what it is, what makes one, FHA/VA, can it become warrantable, second home or investment. Keep, with sourced answers.

## What goes

Every "our licensed mortgage team" and "licensed mortgage pros" (triage); the two stories not in the story bank; the unsourced dates, "usually cheaper", the Surfside line, "closed a loan last week", "a whole team ... the kind of brokerage we are"; "FHA, VA and USDA are out". Full list in facts.md "Struck from the live page". The condotel detail moves to `/invest/condotel-financing/` (one line and a link here).

## The reader and the decision

Someone who found an oceanfront condo they like, then heard "non-warrantable" from a lender or saw "cash or portfolio loan" on a listing. Some want a beach home or a second home; many want a rental. They fear three things: the building is broken, no loan will work, and they will be stuck when they sell. They decide: **is this building's problem one I can live with, which loan fits it, and if not, which building should I look at instead?**

## The answer in two sentences

A non-warrantable condo is one in a building that fails one of Fannie Mae's published project rules, so a loan there cannot be sold to Fannie Mae and the usual conventional loan is off the table. On the Grand Strand the reason is usually renters, not repairs: in 44 of the 45 oceanfront towers in the county records, at least 3 in 4 units are not taxed as the owner's home, and portfolio, DSCR and other non-agency loans close on these units.

(F1, F6, F16, F17, F15, F28. If F17's verifier objects to tying the tax ratio to the 75 percent flag, second sentence becomes: "...only about 1 in 20 units in the 45 oceanfront towers is taxed as the owner's home, and lenders read that as a building run for renting.")

## Title, H1, description, keywords

- Title: **"Non-Warrantable Condos in Myrtle Beach: Which Towers and Why | Chapter3"** (57 characters before the brand). Searched words first, then the page's own finding. Fallback, if the reviewer reads "Which Towers" as a verdict: "Non-Warrantable Condos in Myrtle Beach: The Rules, Tower by Tower".
- H1: "Non-warrantable condos in Myrtle Beach: what the word means, and why so many oceanfront towers carry it"
- Hero sub (write last; 8 to 30 words): "Fannie Mae's project rules in plain words, checked against county records for 45 oceanfront towers, and the loans that still close."
- Description: "What non-warrantable means, Fannie Mae's rules, and why 44 of 45 Myrtle Beach oceanfront towers trip its investor flag. Which loans still work, and how we check a building."
- Keywords: non-warrantable condo Myrtle Beach; warrantable vs non-warrantable condo; what makes a condo non-warrantable; non-warrantable condo list; non-warrantable condo loan; non-warrantable condo down payment; Fannie Mae condo requirements; Fannie Mae single entity ownership; condo master policy deductible Fannie Mae. **Not** "condotel" in any form (sibling).
- No headline or button says "finance", "financing" or "get a loan" (A17b).

## Sections, in order (question headings people search)

**Top (one phone screen).** H1, byline (Devin Day, reviewed by Tim Nash; set by mkpage), the two-sentence answer, a slim offer bar: "Send us the building. We read its papers before you make an offer." (button to `/contact/`). The site's edge feed sits under the opening (Homes strips).

An "On this page" list (7 sections) with short labels.

**1. What is a non-warrantable condo? (Warrantable vs non-warrantable)** (searched: "warrantable vs non warrantable condo", "non warrantable condo meaning")
First sentence: the definition (F1). Then three short lines: you can still buy it, with cash or a loan a lender keeps or sells elsewhere; there is no public list, because lenders check each building in Fannie Mae's own tool (F3); it is a status that can change when the building fixes the reason (F2). One line: every condotel is non-warrantable, not every non-warrantable building is a condotel, linked to `/invest/condotel-financing/`.

**2. What makes a condo non-warrantable?** (searched: "what makes a condo non warrantable fannie mae", "fannie mae ineligible project characteristics")
Lead with the reason readers here meet most and that is not a broken building. **The visual: one plain table, three groups, cards on a phone.** Columns: "The reason", "Fannie Mae's line", "What it means for you".
- *The building is run for renting* (good news first): run like a hotel or a rental pool (F5); 75 percent or more investors or second homes, a flag for a closer look (F6); one owner with more than 20 percent of units in a building of 21 or more (F7).
- *The building's money*: more than 15 percent of units 60 days behind on dues; reserves under 10 percent of the budget (F10), rising to 15 percent for applications from January 4, 2027 (F11, link `/hoa/reserves/`); a master policy that does not insure the full rebuild or has a deductible over 5 percent, or over $50,000 a unit (F13); more than 35 percent commercial space (F4).
- *Hard stops*: critical repairs, including unfunded repairs over $10,000 a unit due within a year (F9, with the carve-out); a suit over safety or structure (F8, link `/buyers/condo-in-litigation/`).
Under the table, one sentence: since August 2026, most condo loans get Fannie Mae's full review, so each of these is checked (F12).

**Mid offer 1** (after section 2): "Heard 'non-warrantable' from a lender? Send us the building. We find the reason." Button: "Find the reason".

**3. Why are so many Myrtle Beach oceanfront condos non-warrantable?** (searched: "why is my condo non warrantable"; the page's finding)
This is the page's own research. Order: the count, then what it means, then insurance.
- **The chart** (`chart-owner-homes.json`): "In every oceanfront tower, few units are the owner's home". Horizontal bars, shares taxed as the owner's home: the six highest towers, then "All 45 oceanfront towers" (4.6 percent), with Seagate Village (49 percent, an inland FHA-approved community) as the comparison bar in a different color, and a thin line at 25 percent labeled "Fannie Mae's closer-look line". One message, plain labels, the numbers on the bars. Note under it in one sentence: "Share of units taxed at South Carolina's 4 percent owner-occupant rate, Horry County parcel records."
- Then two sentences of meaning: lenders read a tower full of rentals as a tower run like a business (F6, F28). That is also why these towers work for a rental: the building is run for exactly that (F28, the story bank's words, told as what we see).
- Then the listing count, one sentence: about 8 in 10 condos for sale in these towers say they are in a rental program (F20).
- Then one owner holding a block of units: "In six towers, one company holds more than 1 in 5 units in at least part of the building" (F19). Name the towers **only after the verifier reads a deed per top owner**; otherwise give the count only. Never name the companies.
- Then insurance in three sentences: the rule (F13), the worked example kept from the live page, and why it bites on this coast (F14, only if verified). Link `/hoa/master-insurance-ho6/` for the owner's HO-6 and deductible share.

**4. Which Myrtle Beach condo buildings are non-warrantable?** (searched: "non warrantable condo list", "fannie mae warrantable condo list")
First sentence answers the search honestly: no public list exists; a lender decides from the building's papers (F3). Then what only we have:
- **Two short named entries for the buyer who wants a regular loan**, then a third if a wow row verifies. Each: the wow first, then what the county record shows, then the honest line ("We read its papers before you offer; a lender's review decides"), then its homes strip. 60 to 90 words each. Never "warrantable".
  1. **Margate Tower.** Wow (CB row 60, CORRECTED wording): "Margate Tower rises about 330 feet, the tallest building in Myrtle Beach." Then: about 1 in 5 units are taxed as the owner's home, among the highest of the 45, and half the units for sale say they are in a rental program (F23). Strip: `margate-tower`, head **"Margate Tower condos, 29 floors in Myrtle Beach's tallest tower"** (CB row 61 VERIFIED floors; check against CB's struck list).
  2. **Maisons Sur-Mer.** The most owner homes of any oceanfront tower: more than 1 in 4 units (F17, F23); 3 of 14 for sale in a rental program (F20). Wow: **needed** (facts.md "Not found": the walk to the Dunes Golf and Beach Club, measured, is the candidate). Strip: `maisons-sur-mer` (new place), head after the wow, e.g. "Maisons Sur-Mer condos on Shore Drive, steps from the Dunes Club" only if the measurement supports "steps" (CRAFT: under a quarter mile walking).
  3. **Ocean Forest Plaza.** About 1 in 4 units taxed as the owner's home; 5 of 14 for sale in a program (F23). Wow: **needed** (Golden Mile, with a source). Strip: `ocean-forest-plaza` (new place). If no wow verifies, drop it to the table.
- **Then the table** (`table-buildings.json`), titled "Every oceanfront tower: three signs a lender checks". Columns in plain words: "Tower", "Units taxed as the owner's home", "Largest single owner", "For sale in a rental program". Sorted by name; the six towers over the 20 percent owner line shown with the share in bold, no icons, no red. One line above it: "Signs, not verdicts. A lender's review of the papers decides." Cards on a phone. It is long (45 rows); the reader who typed "list" came for it. Link each name to its homes search, as `/invest/condo-buildings/` does. If the reviewer finds it heavy, keep the table and cut the third named entry, not the table.
- One link line: each tower's fee, amenities and sales are in our oceanfront building directory (`/invest/condo-buildings/`).

**Mid offer 2** (after section 4): "Picked a tower? Send it to us. We pull its budget, master policy and minutes before you offer." Button: "Check my tower".

**5. Can you get a loan on a non-warrantable condo?** (searched: "non warrantable condo loan", "non warrantable condo lenders", "non warrantable condo down payment")
First sentence: yes; cash works, and so do loans a lender keeps or sells outside Fannie Mae and Freddie Mac (F1, F15). **The visual: a two-column comparison**, "Fannie Mae's line" and "One published non-warrantable program", five rows: one owner's share (20 percent / 49 percent), dues 60 days late (15 / 25 percent), commercial space (35 / 50 percent), lawsuits (most block a loan / case by case, never structural), how many reasons at once (none / up to 2) (F4, F7, F8, F10, F15). Title: "Where a non-agency loan says yes". Name Newrez only in the sources box.
Then the loan kinds, one line each: portfolio and other non-QM loans; DSCR, which qualifies on the rent (link `/invest/strategies/dscr-loans/`); cash. FHA: 9 approved projects in Horry County, none an oceanfront directory tower; VA: 2 of 29 resort towers (F24, F25), links `/buyers/programs/`, `/buyers/va-loans/`.
Cash, for an investor: "For a rental you will not stay in more than two weeks a year, plan on about 25 percent down in a non-warrantable building, against about 20 percent in a warrantable one. Figures from BrickWood Mortgage." (F29, A17; the gate needs the lender named.) For a home or second home: "a larger down payment", no number. Never a rate or a payment; "often at a higher cost" at most (F28).
Then F30, word for word, and the disclosure.

**6. Should you buy a non-warrantable condo?** (searched: "should i buy a non warrantable condo", "is a non warrantable condo a good investment", "can a non warrantable condo become warrantable")
A short good-and-hard list, each one line from a row:
- Good: a tower full of rentals is run for renting (F28); these units sell, about 800 deeds a year in the directory towers (F27); the reason can be fixed and the status re-checked (F2).
- Hard: more cash down (F29, in words here); fewer lenders, some with their own limits (F15); the next buyer faces the same loans; a suit or a critical repair can stop every loan until it ends (F8, F9).
Then one link to `/invest/condos/` for the investment answer.

**7. How do you find out if a condo is warrantable before you make an offer?** (searched: "how to find out if a condo is warrantable", "is my condo warrantable", "condo questionnaire")
We do the work; no to-do list for the reader. Bold steps: we get the association's lender questionnaire, the budget and reserve line, the master policy and its deductible, the minutes and any special assessment, and any suit; we check the county's ownership records for one owner holding a block of units; a loan officer at our preferred lender confirms how a lender will read it. All before the offer, so earnest money and the appraisal fee are not at risk. Link `/hoa/documents/` once.

**End band:** "Love a tower but not sure a loan will work? Send us the building. We tell you the reason and the loans that fit before you make an offer." Button: "Send us the building". The pop-up adds the call option.

**FAQ** (open text, one or two sentences each, repeating a section's answer):
- What is a non-warrantable condo? (F1)
- What is the difference between warrantable and non-warrantable condos? (F1)
- Is there a list of non-warrantable condos in Myrtle Beach? (F3, link the table)
- Can I use an FHA or VA loan on a non-warrantable condo? (F24 to F26)
- How much down for a non-warrantable condo? (F29: the investor range with BrickWood named; "more" for a home)
- Can a non-warrantable condo become warrantable again? (F2)
- Can I buy one as a second home? (yes; "a larger down payment", no number, A17)

Sources line: Fannie Mae Selling Guide B4-2.1-03, B4-2.2-01, B7-3-03; Freddie Mac's reserve bulletin; the Newrez Smart project checklist; Horry County parcel records; CCMLS listings via our search (date from `program.json`); HUD's FHA condo list; the VA condo report; Horry County deeds. Method limits from the data README.

## Visuals (each readable at a glance)

1. The reasons table (section 2): three groups, three plain columns, no icons alone.
2. One bar chart (section 3), `chart-owner-homes.json`: one message in the title, numbers on the bars, one 25 percent line, the inland comparison bar in a second color. Glass style per `tools/glass.js`.
3. The building table (section 4), `table-buildings.json`, cards on a phone.
4. The two-column loan comparison (section 5).
5. Homes strips (feed and named).
No map (the directory owns it). No illustration. No photo unless the photo partner sends Margate Tower from the beach (optional shot list: "Margate Tower from the sand at Kingston Plantation, full height, no people as the subject"). No listing, resort or Google images.

Clutter check: four tables or charts across seven sections, one per section at most, none in the first screen. If the screenshot reads busy, turn the reasons table into a bold list first.

## Homes strips

- **Page feed** (the site's edge, under the opening). Today `idx-lib/feeds.js` maps this page to `CASH_OCEAN` ("Oceanfront condos the seller lists as cash only"), which is negative and reads like a warning. For the lead (BUILD.md), a bold, true head for this reader:
  - head: **"Oceanfront condos in towers run for renting"** (true by the filter and F20, F28)
  - q: `towns(["Myrtle Beach", "North Myrtle Beach"], { type: "condo", status: "active", min: "100000", has: "oceanfront_unit,vacation_rental_program" })`
  - post: `{ yearMin: 1975 }`; fallback `OCEAN_UNITS`; link `type=condo&has=oceanfront_unit%2Cvacation_rental_program`; `withStrips: true` (the page carries named strips).
  - Differs from the condotel feed (oceanfront building, 500 sq ft and up, "turnkey"): this one is oceanfront units of any size. Check at least 10 live results.
- **Named strips** with `glass.js` `homes(slug, name, fallback, head)` in section 4:
  - `margate-tower`: exists in `batches/2026-10-b/data/idx-places.json`; add "/invest/non-warrantable-condos/" to its `pages`.
  - `maisons-sur-mer`: **new place**: name "Maisons Sur-Mer", q `{ subdivision: "Maisons Sur", type: "condo" }` (CB `buildings.json` words; 14 for sale today), index false, pages ["/invest/non-warrantable-condos/"].
  - `ocean-forest-plaza`: **new place**: name "Ocean Forest Plaza", q `{ subdivision: "Ocean Forest Pl", type: "condo" }` (14 for sale today), index false, pages as above.
  - Fallback button for an empty strip: "Send me condos at <tower>".

## Offers

All buttons link to `/contact/` (or `#lead-form`); the site opens the short pop-up and sends the button's words. Never the same words twice:
1. Top bar: "Send us the building. We read its papers before you make an offer."
2. After section 2: "Find the reason".
3. Section 4: each strip; fallback "Send me condos at Margate Tower" (and so on).
4. After section 4: "Check my tower".
5. End band: "Send us the building".
No "finance", "financing" or "get a loan" in any headline or button (A17b). No "licensed mortgage" anything.

## Cannibalization

- This page claims "non-warrantable condo" in every form, "warrantable vs non-warrantable", "what makes a condo non-warrantable", "non-warrantable condo list", "non-warrantable condo loan/lenders/down payment", "Fannie Mae condo requirements / single entity / ineligible projects", and the master policy deductible as a warrantability rule.
- It gives up "condotel" in every form to `/invest/condotel-financing/` (matches the sibling plan; the lead chose two pages over the cannibalization file's merge). The building-by-building fees and amenities stay with `/invest/condo-buildings/`; the HO-6 and deductible share with `/hoa/master-insurance-ho6/`; "condo in litigation" with `/buyers/condo-in-litigation/`.
- For the lead, on siblings: `/invest/condos/` drops the keyword "non-warrantable condo" (cannibalization fix) and links here from its mortgage answer; `/buyers/condo-in-litigation/` links "fails the warrantability standard" here; `/invest/condotel-financing/` already plans its link here.
- Sibling owners (for `batches/2026-11-b/review/SIBLING-OWNERS.md`, lead): Margate Tower's height and floors belong to `/invest/condo-buildings/`; this page uses that one line once and adds its own angle (the owner-home share). Maisons Sur-Mer and Ocean Forest Plaza are table-only on the directory, so their wow rows, if found, are this page's to own; offer them back to the directory as a second use.
- Referring pages to add (inside `<main>`, on words already there): condo-buildings, condos, condotel-financing, condo-in-litigation, hoa/reserves, hoa/master-insurance-ho6, hoa/documents, dscr-loans, sell-my-condo. Run `node tools/inbound.js <site> --only /invest/non-warrantable-condos/` after.

## Open for the lead

1. **Verifier first** on F16 to F20, F23, F24 (our counts and their wording), and the deed check in F19 before any tower with a single owner over 20 percent is named.
2. **Two wow rows** for Maisons Sur-Mer and Ocean Forest Plaza (facts.md "Not found"). Without them, section 4 runs Margate alone plus the table.
3. **The insurance pool row** (F14) is pending in the ho6 ledger; if it fails, section 3's insurance part is the rule and the example only.
4. **Down payment.** F29 prints only for a rental the buyer will not stay in more than 14 days. The owner may prefer words only here too; the plan uses the number because A17 allows it on this page and readers search it.
5. **The self-employed point** on the live page has no row. Keep it only if the owner confirms it (one question, in `templates/owner-questions.md`, with the proposed sentence: "If you are self-employed, the bank-statement loan you would need anyway also works in a non-warrantable building.").
6. **The two live stories** are not in the story bank; ask the owner once whether either may be told.
7. **New places and the feed** for BUILD.md: `maisons-sur-mer`, `ocean-forest-plaza`, the `pages` addition to `margate-tower`, and the feed above.
