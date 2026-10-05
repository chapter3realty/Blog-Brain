# Review: batch 2026-10-a, four 55+ community pages

Reviewer, 2026-10-05. I did not write these pages or research their facts.

What I read: `voice/RULES.md`, `voice/REVIEW-PASS.md`, `WRITER-BRIEF.md`, `PLAN.md`, the four ledgers, `stories/stories.json`, `STANDARD.md`, and the website's `CLAUDE.md` and `PLAYBOOK.md`. I read the rendered pages in the draft copy, every sentence, then the four specs. I checked the property tax calculator on `/buyers/property-taxes/`, the hub, and every page the four pages link to.

Gates, re-run by me: score 100 on all four. `build.js audit` has 0 errors, and its only warning on these pages is A20 (no Tim Nash sentence). The claims scan finds only the two sitewide hits (footer and search box). The facts check finds nothing on the four pages. I recomputed every sum on the pages. All of them are right.

Each fix below gives the sentence as it is now, the rule it breaks, and the replacement. [High] means the owner would send the page back for it. [Low] means the sentence is less clear or less exact than it should be. The writer applies the fixes in the specs. I changed nothing.

## Verdicts

| Page | Verdict | Fixes | High |
|---|---|---|---|
| Del Webb North Myrtle Beach | Not ready | 14 | 1 |
| Del Webb at Grande Dunes | Not ready | 21 | 2 |
| Myrtle Trace | Not ready | 18 | 3 |
| Seasons at Prince Creek West | Not ready | 22 | 2 |

All four are close. The voice is clean: no em dashes, no sentence over 28 words, and only four figures of speech (G4, G20, S9, S10). The legal-risk pass found one item: Myrtle Trace states an HOA's description of itself without saying the HOA wrote it (M9). It found no conclusion about a named community, no description of residents, no rate or payment, no name but the byline, and no mention of Cypress Village or Cresswind. The pages are not ready because of facts stated past what was read, two tax rates with no ledger row, a few promises in the CTAs, and the hub.

## Read first: problems outside the four pages

These are not the writer's sentences. The owner will see them when he reads the four pages.

1. **[High] The hub contradicts the new pages.** `hub-links.diff` adds links from the hub's table to the four pages. It leaves the hub's figures as they are, and those figures disagree with the verified rows:

   | Hub says | The new page says (verified) |
   |---|---|
   | Myrtle Trace "About $90/mo" | $95 a month since January 2026 (row 30) |
   | Seasons "460 homes" | 444 home lots on county records (row 19) |
   | Del Webb North Myrtle Beach "New builds from about $475,000 to $764,900" | Pulte's prices were $585,990 to $704,590 in October 2026 (row 24) |
   | Del Webb North Myrtle Beach "$315/mo: yard care, pest control, internet, cable" | No published amount. Pulte lists lawn care and TV in the dues (rows 27 to 29) |
   | Del Webb North Myrtle Beach "535 homes planned" | The city allows 480 to 535 lots, and 497 are platted (rows 17, 20) |
   | Del Webb at Grande Dunes "Sold out", "gated", "$317/mo houses, $384/mo villas" | None of these is verified (rows 22, 36, 59; Not verified 4) |
   | Myrtle Trace "1980-2005" | Not verified (row 21) |
   | "premium end" (Grande Dunes), "the established value option" and "value options" (Myrtle Trace) | Judgments about named communities, which PLAYBOOK A20 bars |

   FACT-3 and question 24 say: when the brokerage's published number disagrees, show the owner both and ask before editing. That is owner question 1 below. The hub also still lists Cypress Village and Cresswind as 55+ communities and tells the Blackmoor story. Both are already open questions in `PLAN.md`.

2. **All four pages link two pages that have known-wrong facts.**
   - `/buyers/coastal-insurance/` says the wind area is "roughly east of Highway 17 Business". The registry (`wind-pool-line`) marks this wrong, and names that page as the owner of the fact. The new pages state the line correctly. A reader who clicks through sees two different lines.
   - `/buyers/relocating/healthcare/` has four wrong sentences about McLeod Carolina Forest and "three more hospitals" (registry `mcleod-carolina-forest`).

   Fix both pages in this batch, or before it ships.
3. **Sitewide claims on every page.** The footer says "DSCR financing" (C1, blocker), and the search box promises "off-market homes before they hit the public sites" (C6). STANDARD ship rule 3 says a page does not ship with a claims-scan error. The fix belongs to the footer partial (`audit/AUDIT.md`, item C-H11: change it to "DSCR analysis"), not to these pages.
4. **A20.** Every page has the audit's only warning: there is no sentence from Tim Nash. We cannot write one for him (STORY-2). See owner question 4.
5. **One number, one source (A12, A22e, question 28).** The specs copy these numbers by hand from the calculator: 201.0, 207.3, 216.2, 254.6 and 83.4 mills, the 109.1 school mills, and the 67.45 percent credit. Each is now on two or more pages. Add them to `facts/registry.json`, with `/buyers/property-taxes/` as the owner page and a `staleBy` date set to when the 2026 bills go out. Then `facts-check` will report them when the calculator changes.
6. **Links that open raw JSON.** On all four pages, the body links to FEMA (and the Census geocoder and CMS) go to API queries. A buyer who clicks "FEMA's map" sees raw data. Link pages a person can read instead: FEMA's Flood Map Service Center search for the address, and Medicare's Care Compare page for the hospital. Keep the query URLs in the ledgers.

## Rulings on the six unsure items

**(a) The millage for Myrtle Trace (201.0) and Seasons (207.3 or 201.0). Not acceptable as written, on either page.** Each page names its tax district from a verified row (district 100, district 610). It then applies a calculator option that no ledger row connects to that district. For Myrtle Trace, ledger row 18 says "which levies apply to district 100 is not established." The two Del Webb ledgers solved the same problem with a 2025 Treasurer bill for a parcel owned by an organization (NMB row 49, Grande Dunes row 68). Do the same here:
- Myrtle Trace: PIN 40003010085, the HOA's recreational parcel, district 100.
- Seasons: PIN 46802030007, the association's amenity parcel, district 610.

A second agent verifies the "District/Levy" line on each bill. Then each page uses its one levy, and Seasons gives one number instead of a range (SHAPE-6). Also add a row for the county's residential stormwater fee, taken from the county's own fee page (see M5). If the bills cannot be pulled before the owner reads, Myrtle Trace names its source: "Chapter3's tax calculator uses 201.0 mills for unincorporated Horry County in 2025." Seasons keeps its two figures, because its sentence already tells the reader where the answer is.

**(b) The 67.45 percent city credit on Grande Dunes. Acceptable.** It is the website's own constant (`TDF=0.6745` in the calculator script), and the brief allows the site's tax data. The page labels it the 2025 level, as the calculator does. The page's math matches the calculator's formula: the credit is the assessed value × 83.4 mills × 0.6745, and it is applied after the homestead exemption. I recomputed $1,125.07 and $1,606.44, so FACT-9 passes. Two conditions: say which way the 2026 bill moves (G11), and register the figure (outside item 5).

**(c) "HOAs here commonly charge a buyer a transfer fee and a few months of dues". Acceptable.** The writer read the story's summary. The owner's own words cover every HOA: "this is also common in any HOA whether it has a rental program or not" (owner-answers-batch3.md:41-47, story `rental-program-buildings`). Keep it as Chapter3's experience. Change "dues" to "dues in advance", which is what he meant by "escrow" (N3). It describes a resale better than a new home from Pulte, so keep the instruction after it to get Pulte's and AAM's own list.

**(d) CTAs that say an agent reads the documents with the buyer. Partly acceptable.** His words (batch3:80-83, story `hoa-rental-bans-filtered`) cover agents reviewing the HOA documents for rules that would stop a buyer's rental plan. The sentences in the renting sections match them. The CTAs offer the same reading to every buyer. That goes a little further than his words, and it is a promise of service, so confirm it with him in one line (owner question 2). Reading Pulte's contract (NMB CTA) is in nothing he has said. Remove it (N1). The labels should be requests ("Have us ..."). That is the fix on record under CTA-3, and the site's own rental page already uses "Have us check the rules before you offer".

**(e) Example budgets that are the people's own. Acceptable.** A budget is the person's input, not a claim about the market. The owner asked for "Example with round numbers" (RL:1228-1229). Three conditions:
- The text never presents the round price as the community's price. It does not.
- Every computed figure shows its arithmetic. The homestead lines on Grande Dunes and Seasons do not (G10, S5).
- The owner checks that $300,000 (Myrtle Trace), $450,000 (Seasons) and $500,000 (Grande Dunes) are prices a resale can trade at today, or the examples switch to MLS medians next week (owner question 5).

Only the North Myrtle Beach price is a verified figure (Pulte's $699,965).

**(f) The surviving-spouse and board-exception lines on Seasons. The text is right, but the page drops its conditions, and only one agent has read it.** I read Article 10, Section 19(b)(i) and (iv) in the verifier's copy of the charter (`scratchpad/v/charter_live.txt`, pages 62 to 63).
- The spouse may stay "as long as the provisions of the HOPA and SCFHL and the regulations adopted thereunder are not violated by such occupancy".
- An owner must "request in writing" an exception. The board may grant one only "provided that the requirements for exemption from the Act still would be met".

Add a ledger row with both quotes. I did not research these facts, so I can count as the second reader. Then use the sentences in S2. The same applies to "The association recorded parking rules in 2022" (S8). Only the verifier's notes on rows 12 and 47 mention it. The county index the researcher saved (`scratchpad/c55/rod/seasons.json`) shows "4512/1990 RESTRICTIONS | PARKING REGULATIONS", recorded 2022/02/04, so the fact is right. It needs a row.

## Page 1: Del Webb North Myrtle Beach

**Verdict: not ready. 14 fixes, 1 high.** It is the cleanest of the four. Every number traces to a verified row (rows 1 to 3, 5, 7, 10, 12 to 17, 20, 21, 23 to 32, 34 to 41, 43 to 45, 47, 49 to 53) or to the calculator's 216.2 and 109.1. The arithmetic is right.

### Fixes

**N1. [High] The first CTA promises a service the owner never described.**
- Now: "Tell us the plan and the lot you want. One of our agents can read Pulte's contract and the HOA documents with you before you sign." The button says "Get the documents checked before you sign".
- Rule: CTA-3 (the label promises a check that the click does not perform) and ruling (d) (nothing on record says agents read a builder's contract).
- Replace with: "Tell us the plan and the lot you want. One of our agents can read the HOA documents with you before you sign Pulte's contract." Button: "Have us read the HOA documents with you".

**N2. [Medium] A sentence repeats the CTA under it.**
- Now: "An agent at Chapter3 can get you an insurance quote on a Del Webb home before you sign Pulte's contract."
- Rule: SHAPE-8, question 2. The CTA box right below makes the same offer.
- Replace with: delete it.

**N3. [Medium] Three instructions in one short section, and (c).**
- Now: "Get the current monthly dues from AAM before you sign Pulte's contract." Then: "In Chapter3's experience, HOAs here commonly charge a buyer a transfer fee and a few months of dues at closing. Ask Pulte and AAM for the HOA's current budget and the full list of charges due at closing."
- Rule: SHAPE-8, question 2, ruling (c).
- Replace with: "In Chapter3's experience, HOAs here commonly charge a buyer a transfer fee and a few months of dues in advance at closing." Then: "Before you sign Pulte's contract, ask AAM for the monthly dues, the HOA's budget and every charge due at closing."

**N4. [Medium] The same instruction appears in two sections.**
- Now, in the 55+ section: "Ask Pulte or AAM for both before you sign, and read any section on age, guests or leasing."
- Rule: question 2. The documents section repeats it.
- Replace with: delete it from the 55+ section. In the documents section, change "Read the declaration and the 2026 rules before you sign Pulte's contract." to "Ask Pulte or AAM for the declaration and the 2026 rules, and read both before you sign Pulte's contract."

**N5. [Medium] A list item names a rule no ledger found.**
- Now: "guests under 55"
- Rule: FACT-8, question 22. The age rules read for this batch limit residents and overnight guests under 19 or 18, not adults under 55. See the Grande Dunes ledger, Not verified 10, and the Myrtle Trace ledger, Not verified 4.
- Replace with: "the minimum age for other residents and for overnight guests"

**N6. [Medium] An FAQ answer opens by announcing what is missing.**
- Now: "Pulte and the HOA do not post the amount. Pulte lists lawn care and a 175-channel TV package as included in the dues. Ask AAM, the HOA's management company, for the current monthly dues before you sign."
- Rule: SHAPE-7, question 15. The HOA's documents need a sign-in (Not verified 2), so "do not post" is not verified either.
- Replace with: "Ask AAM, the HOA's management company, for the current monthly dues before you sign. Pulte lists lawn care and a 175-channel TV package as included in the dues."

**N7. [Medium] The comparison section does not compare.**
- Now: the heading "How does Del Webb North Myrtle Beach compare with three other 55+ communities?" has three bullets under it. Each gives a different kind of fact.
- Rule: STRUCT-3, STANDARD A6, PLAN item 10 ("A table of verified figures, linking each page").
- Replace with: keep the first sentence. Replace the bullets with the shared table in "The comparison table" below.

**N8. [Low] The figure caption says how the distances were measured.**
- Now: "Miles by car from 1285 Possum Trot Road, the HOA's onsite office. Estimates on OpenStreetMap roads with no traffic."
- Rule: website CLAUDE.md, Writing style ("Never in body copy: ... how we verified something").
- Replace with: "Miles by car from 1285 Possum Trot Road, the HOA's onsite office, with no traffic." Add to `sourcesNote`: "Drive distances are OpenStreetMap estimates."

**N9. [Low] The FEMA link opens raw data.**
- Now: the "FEMA's map" link, in the body and in the sources line, goes to a JSON query.
- Rule: STANDARD A9, outside item 6.
- Replace with: a link to FEMA's Flood Map Service Center search for the address. Keep the query in the ledger.

**N10. [Low] Industry term.**
- Now: "Lot premiums, upgrades and options can add to those prices, per Pulte."
- Rule: WORD-1.
- Replace with: "Pulte says those prices may not include extra charges for some lots, upgrades and options."

**N11. [Low] Industry term.**
- Now: "In October 2026, 408 of those lots had a building value on the county's tax record."
- Rule: WORD-1.
- Replace with: "In October 2026, the county's tax records showed a building on 408 of those lots."

**N12. [Low] The heading leaves out the airport.**
- Now: "How far is Del Webb North Myrtle Beach from the beach and the hospitals?"
- Rule: STRUCT-3, question 17. The section also gives the airport.
- Replace with: "How far is Del Webb North Myrtle Beach from the beach, the hospitals and the airport?"

**N13. [Low] Meta description.**
- Now: "... flood zone and drives."
- Rule: WORD-5.
- Replace with: "... flood zone and distances." The description becomes 164 characters.

**N14. [Low] The flood section opens with a name the reader may not know.**
- Now: "Every Chestnut Greens parcel is in FEMA flood Zone X, the area of minimal flood hazard."
- Rule: STANDARD A5. A section's opening sentence must stand alone, and a reader who starts at this section has not read "Chestnut Greens" yet.
- Replace with: "Every parcel in Del Webb North Myrtle Beach is in FEMA flood Zone X, the area of minimal flood hazard."

### REVIEW-PASS questions that failed

- 1 and 2: N2, N3, N4.
- 11: N1.
- 13 and 15: N6, N8.
- 16: N7.
- 17: N12.
- 22: N5.
- 28: outside item 5.
- 40: N10, N11.

### Legal-risk pass

Pass. Pulte's claims are attributed and dated ("Pulte lists", "Pulte says"), and its marketing words ("resort-style", "luxury") were left out. Nothing describes residents. The example is labelled and never says whether the people are clients. There is no rate or payment. Devin is in the byline only. Paul, Cypress Village and Cresswind do not appear. The only service promise to remove is N1.

### A buyer's read

The H1, the short answer, the section openers and the plan table answer the search: Pulte's prices by plan, the tax on a $699,965 home, what the dues include, and the beach and hospital distances. Two things a buyer searching "Del Webb North Myrtle Beach" types are not answered: the monthly dues amount, and whether the home can be rented. The ledger cannot answer either. The page tells the buyer where to get both, which is the honest answer. Next, the buyer visits Pulte's sales center. The hero CTA and N1's CTA offer help with that. Owner question 6 would make that CTA stronger.

## Page 2: Del Webb at Grande Dunes

**Verdict: not ready. 21 fixes, 2 high.** The numbers trace to verified rows 1 to 4, 7, 8, 12 to 14, 16 to 18, 20, 26 to 34, 37 to 41, 43 to 46, 48 to 57, 60, 62, 63, 66, 68 to 71 and to the calculator. The arithmetic is right. The fixes are mostly one fact stated too broadly, one CTA aimed at the wrong reader, and rule dates repeated in every section.

### Fixes

**G1. [High] The villa terms are stated for every villa.**
- Now: "For the villas, the recorded supplement says the association shall maintain the roofs, gutters, downspouts and exterior paint."
- Rule: FACT-1. Ledger row 26's note says the supplement covers one villa parcel (D-1), and the later supplements are not posted.
- Replace with: "The villa supplement recorded in February 2019 says the association shall maintain the roofs, gutters, downspouts and exterior paint of the villas it covers." Add as the section's last sentence: "Ask AAM whether the villa sections added later have the same terms."

**G2. [High] The first CTA speaks to someone who already owns the home.**
- Now: the heading is "Planning to lease your Grande Dunes home?" and the button says "Get the rules checked before you offer".
- Rule: CTA-1. The heading assumes the reader owns the home, and the body then says "before you offer". Also CTA-3 for the label.
- Replace with: heading "Want to buy a home in Del Webb at Grande Dunes?" Button: "Have us read the Grande Dunes rules with you". Keep the body.

**G3. [Medium] A sentence repeats the CTA under it, and the label promises a quote.**
- Now: "An agent at Chapter3 can get an insurance quote on a Grande Dunes house or villa before you make an offer." The button says "Get an insurance quote before you offer".
- Rule: question 2 for the sentence. CTA-3 for the label.
- Replace with: delete the sentence. Button: "Have us get a quote on the house or villa".

**G4. [Medium] A document acts, and the sentence is in the wrong order.**
- Now: "The declaration also counts as age-qualified an owner 50 or older who bought the lot new from the developer and lives there."
- Rule: FIG-3, SHAPE-1, question 36.
- Replace with: "Under the declaration, an owner who is 50 or older also counts as age-qualified. That owner must have bought the lot new from the developer and must live there."

**G5. [Medium] A term is used and never defined.**
- Now: "Once a home qualifies, other qualified residents can keep living there after the 55-plus resident's occupancy ends."
- Rule: STRUCT-2, question 61. "Qualified residents" is the declaration's term, and the page never defines it.
- Replace with: "If the 55-plus resident moves out or dies, the other residents who are 19 or older can keep living there."

**G6. [Medium] The dues section's first sentence does not answer its heading.**
- Now: "The association's posted rules, revised January 2019, say base assessments are billed monthly and are due on the first of the month." Then: "The same rules say general lawn care is included with the base assessment."
- Rule: STANDARD A5, STRUCT-3.
- Replace with: "The association's posted rules say the base assessment includes general lawn care." Then: "The base assessment is billed monthly and is due on the first of the month."

**G7. [Medium] Two paragraphs are under the wrong heading.**
- Now: under "What does a buyer pay at closing": "Owners also pay the Grande Dunes Master Association, including a mandatory Beach Club fee. The declaration says the master charges are separate from, and in addition to, the association's own assessments." Under the dues heading: the three sentences on the Marina Tract South Improvement District.
- Rule: STRUCT-3. The first is a recurring charge, not a closing cost. The second is a possible city charge on the tax bill, not dues.
- Replace with: move the two Beach Club sentences, unchanged, into the dues section after the budget chart. Move the improvement-district paragraph, unchanged, into the tax section after the millage paragraph.

**G8. [Medium] The rules' date is repeated in five places.**
- Now: "the association's posted rules, revised January 2019" appears in the short answer, the renting section, the dues section, the amenities section and the other-rules section.
- Rule: website CLAUDE.md, Writing style ("Never in body copy: ... when a rule took effect"), and STRUCT-7. The brief's rule to name the version is met when the version is named where the rules are first quoted.
- Replace with: keep the date in the short answer, and in the renting section's sentence "Its posted copy is still the version revised in January 2019." Everywhere else write "the posted rules". For example: "The posted rules also state these lease terms:" (this also fixes "add", FIG-3), "Under the posted rules, the amenity center is open 7 a.m. to 9 p.m. on weekdays.", and "The posted rules allow up to three cats or dogs per home, with no restriction on dog breeds."

**G9. [Medium] A phrase that reads two ways.**
- Now: "Every other home is assessed at 6 percent."
- Rule: WORD-5, question 42. "Every other home" also means "every second home".
- Replace with: "All other homes are assessed at 6 percent."

**G10. [Medium] The homestead line in the example shows no arithmetic.**
- Now: "After a full calendar year here, Carol can claim the homestead exemption. On $450,000 of taxable value, the 2025 tax would be $1,606.44 a year."
- Rule: STORY-3 (the arithmetic is shown), STRUCT-2 ("taxable value" is never defined).
- Replace with: "After a full calendar year here, Carol can claim the homestead exemption. The assessed value drops to ($500,000 − $50,000) × 4 percent = $18,000. The tax before the credit is $18,000 × (254.6 − 109.1) ÷ 1,000 = $2,619. The city credit is $18,000 × 83.4 ÷ 1,000 × 67.45 percent = $1,012.56. The 2025 tax is $2,619 − $1,012.56 = $1,606.44 a year."

**G11. [Medium] The sentence on 2026 does not say which way the bill moves.**
- Now: "Their 2026 bill will use the newly certified rates and the city's 2026 credit."
- Rule: SHAPE-6. The site's tax page says the city cut the credit for 2026 bills, and the 2026 levy sheet lists the same mills (row 69).
- Replace with: "The city lowered its credit for 2026 bills, so their 2026 tax will be a little higher." Link "lowered its credit" to `/buyers/property-taxes/`.

**G12. [Medium] Industry terms in the villa section.**
- Now: "The association's work does not include HVAC equipment, doors, hose bibs, outside light fixtures, windows or screens." And: "Villa owners pay a specific purpose assessment for the work, including reserves for roof replacement."
- Rule: WORD-1, STRUCT-2.
- Replace with: "The association's work does not include outdoor heating and air conditioning units, doors, outdoor water faucets, outside light fixtures, windows or screens." And: "Villa owners pay an extra assessment for that work, which includes money set aside for new roofs."

**G13. [Low] Industry verb.**
- Now: "The wind pool is the state association that writes wind and hail insurance for the coast."
- Rule: WORD-1.
- Replace with: "The wind pool is the state association that sells wind and hail insurance on the coast."

**G14. [Low] A buyer cannot act on the association's total.**
- Now: "The association budgeted $96,000 in working capital from resales for 2025."
- Rule: STRUCT-7. What the buyer needs is that the charge is still collected.
- Replace with: "The association still collects this charge on resales. Its 2025 budget lists $96,000 from it."

**G15. [Low] Two sentences say how a distance was measured.**
- Now: "The drive estimate uses OpenStreetMap roads with no traffic." And: "Measured due east from 6201 Marina Parkway, the bypass is about half a mile away."
- Rule: website CLAUDE.md, Writing style.
- Replace with: delete the first and add "Drive distances are OpenStreetMap estimates." to `sourcesNote`. Change the second to "From 6201 Marina Parkway, the bypass is about half a mile east."

**G16. [Low] The FEMA link opens raw data.**
- Now: the "FEMA's map" link, in the body and the sources line.
- Rule: STANDARD A9, outside item 6.
- Replace with: FEMA's Flood Map Service Center page for the address.

**G17. [Low] The second half of the sentence repeats the first.**
- Now: "The whole home must be leased, never part of it."
- Rule: SHAPE-5.
- Replace with: "Only the whole home can be leased."

**G18. [Low] The sentence says more than the check showed.**
- Now: "Some common land along the waterway is in Zone AE, and no home lot touches it."
- Rule: FACT-8. Row 60 tested lot corners.
- Replace with: "Some common land along the waterway is in Zone AE. No home lot has a corner inside it."

**G19. [Low] The chart uses a label the report does not.**
- Now: "Landscaping" in the `BUDGET` array.
- Rule: FACT-1. The row 33 note says to use the report's label.
- Replace with: "Landscape Units".

**G20. [Low] A document acts.**
- Now: "The declaration adds these terms:"
- Rule: FIG-3. A document states or requires.
- Replace with: "The declaration also states these terms:"

**G21. [Medium] The comparison section does not compare.**
- Now: the three bullets under "How does Del Webb at Grande Dunes compare with three other 55+ communities?"
- Rule: STRUCT-3, A6, PLAN item 10.
- Replace with: keep the first sentence. Use the shared table below.

### REVIEW-PASS questions that failed

- 2: G3.
- 4 and 5: G4, G20.
- 11 and 12: G2, G3.
- 13: G15.
- 16 and 17: G6, G7, G21.
- 22: G1, G18.
- 28: outside item 5.
- 36: G4, G9.
- 40: G12, G13.
- 42: G9.
- 43: G11.
- 57: G10.
- 61: G5, G10, G12.

### Legal-risk pass

Pass. Every rule is quoted from the declaration or the posted rules and named as such. The reserve balance is given with its date, and nothing calls it high or low. Row 47 (two people per bedroom) was correctly left out. "Sold out", "gated" and the Ocean Club wording were left out because their rows are unverifiable. Nothing describes residents. The example is labelled. There is no rate or payment and no name but the byline.

### A buyer's read

The H1 asks whether the home can be rented. The short answer, the renting section and the key-facts table answer it well. A buyer searching "Del Webb at Grande Dunes" asks first what homes and dues cost and how far the beach and the Ocean Club are. The page cannot give per-home dues or prices. Those wait for AAM and the MLS export. It also gives no beach distance, because rows 64 and 65 are marked wrong. The verifier wrote the corrected wording ("about 1.0 to 1.5 miles in a straight line and 1.2 to 2.0 miles by car"). Have the researcher file it as a new row and have it verified, then add it. The airport distance in row 67 can be filed the same way. Next, the buyer reads the rules and gets the dues from AAM. G2's CTA offers help with that.

## Page 3: Myrtle Trace

**Verdict: not ready. 18 fixes, 3 high.** It answers the most of the four. Dues, closing fees, rules and distances all trace to verified rows (1 to 4, 6, 8, 13 to 17, 20, 22, 25, 26, 28 to 35, 37 to 41, 43 to 49, 51 to 60, 63 to 70). Three problems block it. It says what the recorded rules say when only the HOA's copy was read. Its closing total leaves out an item on the HOA's own closing form. Its tax rate has no ledger row for its district.

### Fixes

**M1. [High] The page says "recorded rules" where only the HOA's posted copy was read. It also uses "rules" for two different documents.** Row 6's note says: "This rests on the OCR copy; the recorded text was not read." The HOA calls its copy "not a legal document". Rule: FACT-1, WORD-3. Replace each sentence:
- "The HOA's posted copy of its recorded rules requires at least one member of every household to be 55 or older." Becomes: "The HOA's posted copy of the declaration says at least one member of every household must be 55 or older."
- "The recorded rules state no minimum age for the other people in the home." Becomes: "The HOA's posted copy states no minimum age for the other people in the home."
- "The HOA board's June 2026 minutes say the recorded rules have changed once. That change raised the minimum age from 50 to 55, before the developer turned the rules over to the board." Becomes: "The HOA board's June 2026 minutes say the declaration has changed once. That change raised the minimum age from 50 to 55, before the developer turned the declaration over to the board."
- "The recorded rules grant the golf course an easement over the lots next to it for golf play." Becomes: "The HOA's posted copy of the declaration says the golf course has an easement over the lots next to it for golf play." Also move it (M12).
- FAQ: "Yes, the HOA's posted copy of its recorded rules requires at least one member of every household to be 55 or older." Becomes: "Yes, the HOA's posted copy of the declaration says at least one member of every household must be 55 or older."
- FAQ: "Under the recorded rules, each owner maintains the lot and the home, including the roof, the exterior and the grass." Becomes: "Under the HOA's posted copy of the declaration, each owner maintains the lot and the home, including the roof, the exterior and the grass."
- CTA: "One of our agents will read the recorded rules and the HOA's policies with you before you offer." Becomes: "One of our agents will read the declaration and the HOA's policies with you before you offer."
- Bottom CTA: "One of our agents will read the recorded rules and the rental policy with you." Becomes: "One of our agents will read the declaration and the rental policy with you."
- "The HOA records its rules with the county, and the latest set was recorded in January 2026. Ask the HOA for that set before you offer." Becomes: "The HOA also records its guidelines and policies with the county. The latest set was recorded in January 2026. Ask the HOA for it before you offer."

**M2. [High] "$1,550 at closing" reads as everything due at closing.**
- Now: the hero sub says "Myrtle Trace's HOA dues are $95 a month in 2026, and a resale buyer pays the HOA $1,550 at closing." The example says "Paid to the HOA at closing: $1,450 + $100 = $1,550."
- Rule: FACT-8, question 22. The HOA's closing form also lists "Monthly Dues Payable in Advance (2MONTHS) at Closing" (row 36 note). The owner closes these sales and will ask.
- Replace with: "Myrtle Trace's HOA dues are $95 a month in 2026, and a resale buyer pays the HOA $1,550 in one-time fees at closing." In the example: "One-time fees to the HOA at closing: $1,450 + $100 = $1,550." Then have the researcher file the verifier's wording as a new row ("The HOA's closing form lists two months of dues payable in advance at closing."). Once it is verified, add that sentence to the closing section.

**M3. [Medium] Two terms are never defined.**
- Now: "certificate fee", in the short answer and the closing section, and "certified statement of assessments", in "Ask the HOA for its certified statement of assessments before closing."
- Rule: STRUCT-2, questions 61 and 62.
- Replace with, now: "Ask the HOA for its written statement of what is owed on the home before closing." After the new row in M2 is verified, and that row quotes the form's title and its "CERTIFICATE OF ASSESSMENT FEE: $100.00" line, add: "The $100 certificate fee is listed on the HOA's certified statement of assessments, the form that lists the money due at closing." Row 36 itself is marked wrong, so nothing can come from it until the new row exists.

**M4. [High] The tax rate has no ledger row for district 100.**
- Now: "In 2025, unincorporated Horry County's rate was 201.0 mills."
- Rule: FACT-1, ruling (a).
- Replace with: "In 2025, district 100's rate was [X] mills." Take X from the verified 2025 bill for PIN 40003010085. Then recompute the short answer, the example and the homestead line. Interim wording is in ruling (a).

**M5. [Medium] The cost of living leaves out a fee the calculator says it excludes.**
- Now: the tax section gives "about $1,103 a year". The calculator this comes from says it excludes "the $89 unincorporated stormwater fee".
- Rule: FACT-9, STRUCT-1. The H1 asks what it costs to live there.
- Replace with: once a ledger row from the county's own stormwater fee page gives the residential amount, and a second agent has verified it, add after the 2025 figure: "Owners here also pay the county's $[amount] stormwater fee on the same bill." Do not copy the $89 from the calculator by hand (website non-negotiable 8).

**M6. [Medium] A sentence about how a fact was checked.**
- Now: "The Census Bureau's geocoder lists that address in Horry County and in no incorporated city."
- Rule: website CLAUDE.md, Writing style. Also SHAPE-8: the sentence before already says it, and the page still has five primary sources in the body without it.
- Replace with: delete it.

**M7. [Medium] Research method in the body and in the table.**
- Now: "Six test points across the community are all in Zone X, including homes on Berry Tree Lane near a mapped flood area." The table row says "Zone X at all six points tested".
- Rule: website CLAUDE.md, Writing style. SHAPE-7.
- Replace with: "The homes on Berry Tree Lane, the closest to a mapped flood area, are also in Zone X." The table row becomes "Zone X". Move the FEMA link to "FEMA's flood map" in the sentence before, and link a page a person can read (outside item 6).

**M8. [Medium] A sentence raises a risk the page never resolves.**
- Now: "The state's insurance director can expand the coastal area by written order, for up to 24 months at a time."
- Rule: STRUCT-6, question 3, SHAPE-8. A buyer does nothing different because of it.
- Replace with: delete it.

**M9. [Medium] The HOA's description of itself is not attributed.**
- Now: "The HOA is self-managed and relies mainly on unpaid volunteers."
- Rule: PLAYBOOK A20 (no conclusion about a named HOA). The ledger summary says row 38 "must be attributed to the HOA".
- Replace with: "The HOA says it is self-managed and relies mainly on unpaid volunteers."

**M10. [Medium] A sentence repeats the CTA, and both labels promise a check.**
- Now: "An agent at Chapter3 can get an insurance quote on a Myrtle Trace home before you write an offer." The buttons say "Get the HOA papers checked before you offer" and "Get an insurance quote first".
- Rule: question 2, CTA-3.
- Replace with: delete the sentence. Buttons: "Have us read the Myrtle Trace HOA papers with you" and "Have us get you a homeowners quote".

**M11. [Low] A term a buyer reads twice.**
- Now: "Yes, the board can raise the maximum annual assessment by up to 10 percent a year without an owner vote."
- Rule: WORD-1, question 36.
- Replace with: "Yes. The board can raise the yearly cap on dues by up to 10 percent a year without an owner vote."

**M12. [Low] A rule is under the amenities heading.**
- Now: "An easement is a right to use part of someone else's land." It is followed by the golf easement sentence.
- Rule: STRUCT-3. The easement is a rule on the lots, not an amenity.
- Replace with: move both sentences, with M1's wording, to "What other HOA rules apply in Myrtle Trace?", after the perimeter-fence bullet.

**M13. [Low] A sentence that shows the check.**
- Now: "The 2026 budget lists $590,520 in homeowner dues, which is $95 × 12 months × 518 homes."
- Rule: website CLAUDE.md, Writing style. SHAPE-8.
- Replace with: delete it.

**M14. [Low] History a buyer cannot act on.**
- Now: "Before 2025, the HOA charged each buyer a $300 lot deposit."
- Rule: SHAPE-8, STRUCT-7.
- Replace with: delete it.

**M15. [Low] Method in the body.**
- Now: "Drive estimates use OpenStreetMap roads with no traffic."
- Rule: website CLAUDE.md, Writing style.
- Replace with: delete it, and add "Drive distances are OpenStreetMap estimates." to `sourcesNote`.

**M16. [Low] A term that is never defined.**
- Now: "On $250,000 of taxable value, the 2025 tax is $10,000 × 91.9 ÷ 1,000 = $919 a year."
- Rule: STRUCT-2.
- Replace with: "The assessed value drops to ($300,000 − $50,000) × 4 percent = $10,000, and the 2025 tax is $10,000 × 91.9 ÷ 1,000 = $919 a year." Recompute this after M4.

**M17. [Low] Meta description.**
- Now: "... flood zone and drives."
- Rule: WORD-5.
- Replace with: "... flood zone and distances." The description becomes 160 characters.

**M18. [Medium] The comparison section does not compare.**
- Now: the three bullets under "How does Myrtle Trace compare with three other 55+ communities?"
- Rule: STRUCT-3, A6, PLAN item 10.
- Replace with: keep the first sentence. Use the shared table below.

### REVIEW-PASS questions that failed

- 1 and 2: M6, M8, M10, M13, M14.
- 3: M8.
- 11: M10.
- 13: M6, M7, M15.
- 16: M12, M18.
- 21: M4, M5.
- 22: M1, M2.
- 28: outside item 5.
- 36: M1 (one word for two documents), M11.
- 40: M11.
- 61 and 62: M3, M16.

### Legal-risk pass

Pass once M9 is applied. The age rule is quoted from the HOA's copy, and the page says the HOA calls that copy not a legal document. Myrtle Trace South and Myrtle Trace Grande appear only as separate subdivisions with their own HOAs. Neither is called 55+. The "many HOAs here ban renting" sentence is the owner's own observation (story `hoa-rental-bans-filtered`). The example is labelled. There is no rate or payment and no name but the byline.

### A buyer's read

The H1 and the short answer give the cost: $95 a month, the closing fees, the tax on a $300,000 home, and the upkeep the owner pays for. The section openers and the table cover the 55+ rule, renting, rules, flood zone and distances. This is the page a buyer searching "Myrtle Trace" wants. Resale prices are the gap, and they wait for MLS. Next, the buyer asks for a showing. The hero CTA ("Let us make it simple") and the in-section CTA offer that.

## Page 4: Seasons at Prince Creek West

**Verdict: not ready. 22 fixes, 2 high.** The numbers trace to verified rows 1 to 3, 5 to 7, 12, 15 to 19, 21, 23, 26, 28, 37 to 47, 49, 50, 52, 54, 56, 58 to 67, and to the calculator. The deed chart's counts match rows 21 and 23. Two facts depend on unread or unrecorded material, and the closing section also has the dues paragraphs.

### Fixes

**S1. [High] The tax is a range because district 610's rate is not in a ledger.**
- Now: "On a $450,000 primary residence in Seasons, the 2025 property tax is about $1,654 to $1,768 a year." And: "For 2025, Horry County's rate was 207.3 mills for Murrells Inlet and Garden City and 201.0 for other unincorporated areas. The county's tax bill for the home shows which of the two applies to district 610."
- Rule: SHAPE-6 (give the number), FACT-1, ruling (a).
- Replace with: "On a $450,000 primary residence in Seasons, the 2025 property tax is about $[Y] a year." And: "In 2025, district 610's rate was [X] mills." Take X from the verified 2025 bill for PIN 46802030007. Change the example's two "At ... mills" lines to one line.

**S2. [High] The spouse and board-exception lines drop their conditions.**
- Now: "If the only qualifying occupant dies, a surviving spouse can keep living there." And: "The board can grant exceptions." The FAQ says: "The posted 2017 charter copy allows no resident under 18, and the board can grant exceptions."
- Rule: FACT-1 (the facts are in a verifier's note, not a row), FACT-8 (print only what the source supports), ruling (f).
- Replace with: "If the only occupant who is 55 or older dies, the spouse can keep living there. The charter allows this only while the community still qualifies as 55+ housing under federal and state law." And: "An owner can ask the board in writing for an exception. The board can grant one only if the community still qualifies for the federal 55+ exemption." FAQ: "The charter allows no resident under 18. An owner can ask the board in writing for an exception." Do this after the ledger row is added.

**S3. [Medium] The dues paragraphs are under the closing heading.**
- Now: under "What does a buyer pay at closing": "Under the 2017 charter copy, the Seasons assessment includes the assessments of three other associations:", the list, "An owner gets one bill for all four.", and the paragraph on bundled services.
- Rule: STRUCT-3, STANDARD A5. They describe the monthly bill, not closing. A buyer searching for "Seasons at Prince Creek West HOA fees" needs a heading that says so.
- Replace with: a new section after the closing section, titled "What do the Seasons at Prince Creek West dues include?" It opens: "Under the charter, the Seasons assessment includes the assessments of three other associations, so an owner gets one bill for all four." Then the list, then the bundled-services paragraph, unchanged.

**S4. [Medium] The page hides the only figure the ledger has for the fee cap.**
- Now: "The fee has a cap, adjusted under the road and park declaration." The example says: "Road and park transfer fee: 0.25 percent × $450,000 = $1,125, or the cap if that is lower."
- Rule: FACT-5, question 25. The buyer pays the lower of the two figures, and the page leaves out the only figure the ledger has for the cap. Row 40 quotes it as "$480.00, adjusted pursuant to the terms of the Road & Park Districts Declaration". Its note forbids presenting $480 as today's cap. Stating the charter's figure together with its adjustment is allowed.
- Replace with: "The 2017 charter copy says the fee may not exceed $480, adjusted under the road and park declaration." In the example: "Road and park transfer fee: 0.25 percent × $450,000 = $1,125, or the cap if that is lower. The charter names a $480 cap, adjusted under the road and park declaration." Do not write "the cap was $480 in 2017": the adjustment may already have raised it by then.

**S5. [Medium] The homestead line shows no arithmetic.**
- Now: "After a full calendar year here, Joan applies for the homestead exemption. On $400,000 of taxable value, the 2025 tax is $1,470.40 to $1,571.20 a year."
- Rule: STORY-3, STRUCT-2.
- Replace with, after S1: "After a full calendar year here, Joan applies for the homestead exemption. The assessed value drops to ($450,000 − $50,000) × 4 percent = $16,000, and the 2025 tax is $16,000 × ([X] − 109.1) ÷ 1,000 = $[Z] a year."

**S6. [Medium] A sentence a buyer reads twice.**
- Now: "At closing, a buyer pays the association two months of its regular annual assessment as a working capital contribution. The charter calls that regular assessment the general assessment." The example says: "Working capital: two months of the annual general assessment."
- Rule: SHAPE-1, question 36.
- Replace with: "At closing, a buyer pays the association a working capital contribution equal to two months of dues. The charter calls the dues the general assessment." In the example: "Working capital: two months of dues."

**S7. [Medium] A sentence repeats the CTA under it.**
- Now: "An agent at Chapter3 can get you an insurance quote on a Seasons home before you make the offer."
- Rule: question 2.
- Replace with: delete it.

**S8. [Low] A fact with no ledger row.**
- Now: "The association recorded parking rules in 2022, so ask for them if you keep a golf cart." Also the years 2019 and 2022 in "The association recorded newer rules in 2019, 2022 and 2025".
- Rule: FACT-1, ruling (f). The fact is right.
- Replace with: keep both sentences once a row quotes the index entries: 4172/464 (2019/01/03), 4512/1990 "PARKING REGULATIONS" and 4512/1995 (2022/02/04), and 4897/3085 (2025/01/09).

**S9. [Low] A document acts.**
- Now: "The charter also reserves the right for the Seasons board to add its own transfer fee."
- Rule: FIG-3.
- Replace with: "The charter also allows the Seasons board to add its own transfer fee."

**S10. [Low] An idiom.**
- Now: "Each lease must include a statement, in type that stands out, that the homes are for people 55 or older."
- Rule: FIG-7.
- Replace with: "Each lease must state, in prominent type, that the homes are for people 55 or older."

**S11. [Low] The bullet repeats the sentence above it.**
- Now: "The nearest public beach accesses by road are Horry County's in Garden City, about 6 miles from 130 Grand Cypress Way." The first bullet says: "The county's Atlantic Avenue boardwalk access in Garden City is about 6.0 miles by road."
- Rule: question 2.
- Replace with: "The nearest public beach access by road is Horry County's Atlantic Avenue boardwalk access in Garden City, about 6.0 miles from 130 Grand Cypress Way." Delete the bullet.

**S12. [Low] Method in the body.**
- Now: "Each distance is measured from 130 Grand Cypress Way, on the amenity parcel, along OpenStreetMap roads with no traffic."
- Rule: website CLAUDE.md, Writing style.
- Replace with: "Each distance is by road from 130 Grand Cypress Way, on the amenity parcel." Add "Drive distances are OpenStreetMap estimates." to `sourcesNote`.

**S13. [Low] Two links open raw data.**
- Now: "FEMA map panels" and "nearest hospital", and the matching sources-line links.
- Rule: STANDARD A9, outside item 6.
- Replace with: FEMA's Flood Map Service Center page and Medicare's Care Compare page for Tidelands Waccamaw.

**S14. [Low] The anchor promises something the target page does not have.**
- Now: "Read how far each Grand Strand hospital is from the area you choose."
- Rule: STANDARD S7. The healthcare page lists hospitals by area and gives no distances.
- Replace with: "Read which hospital serves each part of the Grand Strand."

**S15. [Low] Two names for one hospital.**
- Now: "Grand Strand Regional Medical Center, at 809 82nd Parkway in Myrtle Beach, is about 21 miles by road."
- Rule: WORD-3, FACT-6. The healthcare page and both Del Webb pages say "Grand Strand Medical Center".
- Replace with: "Grand Strand Medical Center, at 809 82nd Parkway in Myrtle Beach, is about 21 miles by road."

**S16. [Low] The heading leaves out the airport.**
- Now: "How far is Seasons at Prince Creek West from the beach and the hospital?"
- Rule: STRUCT-3, question 17.
- Replace with: "How far is Seasons at Prince Creek West from the beach, the hospital and the airport?"

**S17. [Low] A rule written twice.**
- Now: "A visitor under 18 can stay up to 60 days a calendar year, or 60 in any 12 months, whichever is less."
- Rule: SHAPE-1, question 36. Any 12 months includes every calendar year, so the second limit already contains the first.
- Replace with: "A visitor under 18 can stay up to 60 days in any 12 months."

**S18. [Low] The copy's date is repeated in seven places.**
- Now: "the association's posted 2017 copy of the charter" or "the posted 2017 charter copy" appears in the short answer, twice in the 55+ section, and in the renting, closing and other-rules sections and two FAQ answers.
- Rule: website CLAUDE.md, Writing style. STRUCT-7.
- Replace with: keep it in the short answer and in the 55+ section's link sentence. Everywhere else write "the charter".

**S19. [Low] A tail that raises a question.**
- Now: "No one under 18 can live in a home, except as the charter allows."
- Rule: question 3. S2 now states the exception.
- Replace with: "No one under 18 can live in a home."

**S20. [Low] A term that is never defined.**
- Now: "The founder named in it is Levitt and Sons of Horry County LLC."
- Rule: STRUCT-2. "Founder" is used again later, in the timesharing sentence.
- Replace with: "The developer named in it, which the charter calls the founder, is Levitt and Sons of Horry County LLC."

**S21. [Low] The caption repeats the chart's legend.**
- Now: "Levitt and Sons in brass, MBSC Seasons LLC in navy."
- Rule: SHAPE-8. The chart has its own legend, and "brass" is the site's name for a color.
- Replace with: delete that sentence from the caption.

**S22. [Medium] The comparison section does not compare.**
- Now: the three bullets under "How does Seasons at Prince Creek West compare with three other 55+ communities?"
- Rule: STRUCT-3, A6, PLAN item 10.
- Replace with: keep the first sentence. Use the shared table below.

### REVIEW-PASS questions that failed

- 2: S7, S11.
- 3: S19.
- 5 and 7: S9, S10.
- 13: S12.
- 16 and 17: S3, S16, S22.
- 21: S1, S2, S8.
- 22: S4.
- 25: S4.
- 28: outside item 5.
- 36: S6, S17.
- 43: S1. The gate answer is also not a yes or no; see owner question 3.
- 57: S5.
- 61: S5, S20.

### Legal-risk pass

Pass. The age rule, the under-18 limit and the lease clause are quoted from the charter copy and attributed to it. The 2013 "gated community" claim is Dock Street's, with its date. No manager is named for today. The Blackmoor story is not used. The page does not say who lives there or who it suits. The example is labelled. There is no rate or payment and no name but the byline.

### A buyer's read

The H1 and the short answer answer the main search ("Is Seasons at Prince Creek West 55+?"). The section openers cover renting, closing fees, the gate, flood zones by lot and distances. Two things a buyer asks are still open. The dues amount is not public (S3 at least shows what the bill includes). Whether the gate works today is owner question 3. The flood section is the most useful part for a buyer, because it lists the 45 lots that touch Zone AE. Next, the buyer asks about a specific lot, and the flood CTA ("Tell us the lot number") asks for exactly that.

## The comparison table (G21, M18, N7, S22)

Build it once, in a data file that all four specs `require`, so every cell has one source (A22e). Every cell comes from a verified row:

| Community | Mailing town | Inside city limits | Declaration recorded | Minimum lease | Other residents |
|---|---|---|---|---|---|
| Del Webb North Myrtle Beach | North Myrtle Beach | Yes | July 2021 | Ask AAM | Ask AAM |
| Del Webb at Grande Dunes | Myrtle Beach | Yes | February 2018 | 12 months, one lease a year | 19 or older |
| Myrtle Trace | Conway | No | November 1983 | One year | No minimum age in the HOA's posted copy |
| Seasons at Prince Creek West | Murrells Inlet | No | December 2006 (charter) | One year, in writing | 18 or older |

The rows come from the NMB ledger rows 5 and 13, the Grande Dunes rows 3, 12, 14 and 50, the Myrtle Trace rows 3, 6, 15 and 51, and the Seasons rows 1, 7, 16 and 42. Each page links the other three in the first column.

## Questions only the owner can answer

1. **The hub.** May the hub's rows for these four communities be changed to the verified figures in the table under "Read first", item 1, when the links go in? FACT-3 says to ask before editing a published number.
2. **(d)** Do our agents read the HOA documents with every buyer, or did you say that only for investors? If only for investors, the in-article CTAs change to your labels ("Talk to a specialized agent").
3. **Seasons' gate.** Is the entrance gated today, and is the gate staffed? The only sources are from 2013 to 2017.
4. **A20.** Can Tim Nash give one sentence for each community? For example, what he checks first on a resale there. We will not write one for him.
5. **(e)** Are $300,000 (Myrtle Trace), $450,000 (Seasons) and $500,000 (Grande Dunes) prices a resale home there sells for today? If not, the examples use the MLS medians next week.
6. **Optional, for North Myrtle Beach.** Does Pulte require a buyer's agent to come to the buyer's first visit to the sales center? If yes, that is the most useful CTA on the page.
7. **Still open from `PLAN.md`.** Cypress Village and Cresswind on the hub, and whether the Blackmoor story happened.
