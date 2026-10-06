# Review 2: batch 2026-10-a, the buyer-first rewrite

Reviewer, 2026-10-06. I did not write these pages or research their facts.

I read the four plain-text pages line by line and checked them against the four ledgers, `voice/RULES.md` (BUYER class first), `voice/REVIEW-PASS.md` (B1 to B8, then sections 1 to 14), `stories/stories.json` and the rendered HTML (meta, schema, byline). I recomputed every tax figure and every flood figure. I did not rerun the machine gates or the form test, as instructed. I changed no spec and committed nothing.

Severity: **High** means the owner would send the page back for it, or a ledger "must not use" line is broken. **Medium** means a fact says more than its row, or a BUYER rule is missed. **Low** means less clear or less exact than it should be.

## Verdicts

| Page | Verdict | High | Medium | Low |
|---|---|---|---|---|
| Del Webb North Myrtle Beach | Not ready | 1 | 6 | 10 |
| Del Webb at Grande Dunes | Not ready | 2 | 5 | 8 |
| Myrtle Trace | Ready after the medium fixes | 0 | 7 | 6 |
| Seasons at Prince Creek West | Not ready | 1 | 7 | 7 |
| All four pages | | 0 | 0 | 3 |
| **Total** | | **4** | **25** | **34** |

What passed on all four pages:

- Every flood insurance figure names the ZIP code and the zone. None says "homes in <community> pay". Each figure matches its row (NMB row 55, GD row 74, MT row 75, Seasons row 71), with fees included and rounding correct.
- Every tax figure recomputes: NMB $2,999, $214, $140 and $9,080; GD $1,785, $178, $1,606 and $7,638; MT $1,103, $184, $919 and $3,618; Seasons $1,768, $196, $1,571 and $5,597.
- No rate, no payment amount and no loan language. BrickWood appears only in the AfBA disclosure, never as our lender. Devin Day appears only in the byline and schema. Paul is not named. There is no quote for Tim Nash.
- No sentence describes residents. Every age rule is stated as the property's rule. No conclusion is drawn about Pulte or any HOA.
- Myrtle Trace does not use row 77 (wrong). The activities facts come from rows 78 to 80.
- The Blackmoor story matches `blackmoor-to-seasons`. "Which has no age rule" is in the entry's summary. Nothing else is added.
- No sentence opens with "records show" or "according to".

---

## Del Webb North Myrtle Beach

**1. High. BUYER-2.** The page says "Pulte" 10 times and never says who Pulte is. The owner named this word on 2026-10-06: "industry terminology with Pulte and its three 'plans', AAM and so on."
- Sentence: "In October 2026, Pulte's three home designs started at $585,990 for the Stardom, $699,965 for the Stellar and $704,590 for the Renown."
- Replacement: "The builder, Pulte, sells the homes under its Del Webb name. In October 2026, the three home designs started at $585,990 for the Stardom, $699,965 for the Stellar and $704,590 for the Renown." (rows 1, 16, 24)
- After that, write "the builder" or "Del Webb": "before you sign the builder's contract"; "Know the dues and the HOA rules before you sign with the builder."; "See the current homes on the Del Webb North Myrtle Beach website."

**2. Medium. FACT-1, row 23 ("must not use 3,728 without attribution").**
- Sentence: "The homes range from 2,179 to 3,728 square feet."
- Replacement: "The builder says the homes range from 2,179 to 3,728 square feet."

**3. Medium. FACT-1, row 36 (Pulte's statement; Pulte gives no transfer terms).**
- Sentence: "The 10-year warranty on the structure passes to the next owner if you sell."
- Replacement: "The builder says its 10-year warranty on the structure can pass to the next owner if you sell."

**4. Medium. FACT-1, Not verified item 1.** The HOA's rules are unread. The page says what they cover.
- Sentence: "The HOA's own rules also apply to guests, younger residents, leasing, pets, fences and golf carts."
- Replacement: "Ask the management company for the HOA's rules on guests, younger residents, renting, pets, fences and golf carts before you sign."

**5. Medium. FACT-1, rows 5 and 7.** The rules are recorded at the county. They are not online, but they are public.
- Sentence: "Any limit on renting is in the HOA's rules, which are not public."
- Replacement: "Any limit on renting is in the HOA's recorded rules, which are not online."

**6. Medium. FACT-1.** It implies Pulte sold out at Grande Dunes. That is GD row 22, which is unverifiable and on the "must not use" list.
- Sentence: "Del Webb North Myrtle Beach is the one of these four where Pulte still sells new homes."
- Replacement: "Del Webb North Myrtle Beach is the newest of these four, and its builder still sells new homes there." (NMB rows 5 and 24; GD row 12; MT row 3; Seasons row 1)

**7. Medium. FACT-1, FACT-9, B1.** The 2026 levies are verified (row 50). A buyer who closes now gets a first bill at 2026 rates, not 2025 rates. The example tells Linda and Ray the wrong first bill.
- Sentence: "Their first tax bill at 2025 rates is about $2,999. After a full year here, Linda applies for the homestead exemption, and their bill drops to about $2,784."
- Replacement: "At 2026 rates, their tax is about $3,139 a year. After a full year here, Linda applies for the homestead exemption, and their tax drops to about $2,914." (27,998.60 assessed x 112.1 mills = $3,138.60; the exemption takes $2,000 of assessed value, or $224.20)
- Do the same for "As a second home, the same house would owe about $9,080 a year." At 2026 rates it is about $9,290 (41,997.90 x 221.2 mills). The calculator on /buyers/property-taxes/ uses 2025 rates. See owner question 1.

**8. Low. FACT-1, row 24.** These are starting prices, not top prices.
- Sentence: "The three home designs went up to $704,590."
- Replacement: "Starting prices for the three home designs ran up to $704,590."
- Same in the FAQ: "In October 2026 it sold three home designs from $585,990 to $704,590" becomes "In October 2026 its three home designs started at $585,990 to $704,590".

**9. Low. FACT-1, row 24 ("Prices may not include lot premiums, upgrades and options").**
- Sentence: "Some homesites, upgrades and options cost extra."
- Replacement: "Some homesites, upgrades and options can cost more than the starting price."

**10. Low. FACT-1, row 35.** "Next door" is Pulte's word. The city puts the center about 0.26 miles from the HOA office.
- Sentence: "The city's J. Bryan Floyd Community Center is beside the community, with an indoor gym for basketball and pickleball."
- Replacement: "The city's J. Bryan Floyd Community Center, about a quarter mile from the HOA office on Possum Trot Road, has an indoor gym for basketball and pickleball."

**11. Low. B7, row 33 (wrong as worded).** The courts and trails are missing from "What is there to do". The verifier gave supported wording. Re-file it as a new row, then add:
- Replacement: "There are sports courts for pickleball and bocce, and walking trails."

**12. Low. B8, SHAPE-8.** The home count sits in the activities section. It is already in the hero and the short answer.
- Sentence: "About 408 of the community's roughly 500 homesites had a house on them in October 2026. Homes finished in the last few months may not be counted yet."
- Replacement: move both sentences to the price section, after the table.

**13. Low. B3, SHAPE-8.** The quote repeats the sentence before it, and it drops the source's "of older".
- Sentence: "That rule is in the city's 2020 agreement with Pulte. The agreement states: "at least one member of the household must be at least 55 years of age.""
- Replacement: "That rule comes from the city's 2020 agreement with the builder."

**14. Low. FACT-1, row 53 ("write 'freestanding emergency facility'").** The buyer will ask whether it is a hospital.
- Sentence: "North Strand ER, at 806 Hwy 17 S, is an emergency room open 24 hours, about 1.4 miles away."
- Replacement: "North Strand ER, at 806 Hwy 17 S, is a freestanding emergency room open 24 hours, about 1.4 miles away."

**15. Low. B8.** The buyer does not need the distance to the highway line.
- Sentence: "From the HOA's office, US 17 is about 0.75 miles east."
- Replacement: delete.

**16. Low. CTA-3.** The click goes to a contact page. It does not deliver a quote.
- Sentence: "One of our agents gets you a homeowners and flood quote first."
- Replacement: "One of our agents helps you get a homeowners and flood quote before you sign."

**17. Low. FACT-6.** /hoa/estoppel-and-transfer-fees/ owns this fact and words it differently.
- Sentence: "In Chapter3's experience, HOAs here commonly charge a buyer a transfer fee and a few months of dues in advance at closing."
- Replacement: "At closing, HOAs here usually charge a buyer a few months of dues up front and a document fee."

---

## Del Webb at Grande Dunes

**1. High. FACT-1, ledger "must not use: rows 9, 30, 31 and 43 to 57 as the current rules".** The amenity hours, guest cards, dock rules, pets, golf carts, mailboxes, fences, sheds, signs, shutters and billing all come from the posted 2019 copy. The page states them as today's rules. Only the renting section names the 2019 copy and the unread 2025 set.
- Sentences: "The amenity center is open 7 a.m. to 9 p.m. on weekdays and 8 a.m. to 8 p.m. on weekends." and "You can have up to three cats or dogs, with no limit on dog breeds."
- Replacement: open each of the two sections with the source, once:
  - "Under the association's posted rules, revised January 2019, the amenity center is open 7 a.m. to 9 p.m. on weekdays and 8 a.m. to 8 p.m. on weekends."
  - "The association's posted rules, revised January 2019, allow up to three cats or dogs, with no limit on dog breeds. A newer set was recorded in January 2025. Ask for it before you offer."
- The table rows "Shortest lease" and "Pets" and the FAQ answers on pets and the lease need the same date.

**2. High. FACT-1, row 31 note ("confirm with AAM before saying lawn care is 'included in the dues'").** The 2025 budget bills lawn care as its own assessment line (row 33). This is in the short answer.
- Sentences: "Lawn care is in the dues." and "Your dues include basic lawn care, billed monthly and due on the first of the month."
- Replacement (short answer): "Owners pay the association for basic lawn care."
- Replacement (dues section): "Owners pay the association for basic lawn care. Ask the management company whether it is in the monthly dues or billed as its own charge. You still water and care for your own plants." (rows 31 and 33)

**3. Medium. B4, B8, FACT-1 (row 35: "do not state it as a current fact about dues").** The 2017 history does not help the buyer, and it reads as if the club is inside the dues. Row 32 says it is separate.
- Sentence: "When Pulte announced the community in 2017, it said beach club access would be part of the dues. Every owner still pays a beach club fee to the Grande Dunes Master Association, the association for all of Grande Dunes."
- Replacement: "Every owner pays a beach club fee to the Grande Dunes Master Association, the association for all of Grande Dunes. That fee is on top of the Del Webb dues."

**4. Medium. B5, BUYER-4.** A 2017 plan leaves the buyer asking whether the courts were built.
- Sentence: "When Pulte announced the community in 2017, it planned tennis, bocce and pickleball courts."
- Replacement: the verifier found the courts, a fire pit, an arts and crafts room and a lifestyle director in the posted 2019 rules (row 42 note). Re-file that as a new row. Then write: "The association's posted rules, revised January 2019, cover its tennis, pickleball and bocce courts, a fire pit and an arts and crafts room." Until that row is verified, delete the sentence.

**5. Medium. B2, B4, B5.** "Reserve accounts" is an industry term. The page does not say what the figure means for the buyer. Row 39 also says $539,943.98 of it sits in lines whose owner is unclear.
- Sentence: "At the end of September 2025, the association had about $1.0 million in its reserve accounts."
- Replacement: delete. Link /hoa/reserves/ from the dues section instead.

**6. Medium. FACT-1, row 40 ("do not say owners currently pay it"), STRUCT-6.** Row 40 says the city "may levy special assessments". It does not say they go on the tax bill.
- Sentence: "The city can add a charge to the tax bill for the community's ponds and other public work. Check a recent tax bill on the home you like for that charge."
- Replacement: "The community's ponds are in a city improvement district, and the city may charge homes in it a special assessment. Ask the seller whether the home has been charged one."

**7. Medium. B5, B7.** The page never says how far the beach is. A buyer looking in Myrtle Beach asks it first. Rows 64 and 65 are wrong as worded, but the verifier gave supported wording. Re-file it as a new row.
- Sentence: heading "How far is Del Webb at Grande Dunes from the hospital?"
- Replacement: heading "How far is Del Webb at Grande Dunes from the beach and the hospital?" Add: "The nearest city beach accesses are about 1.4 to 1.6 miles by car from 6201 Marina Parkway."

**8. Low. BUYER-2.** "Pulte" is not explained. After fixes 3 and 4, one use is left.
- Sentence: "Pulte could sell new homes to buyers 50 or older who lived in them."
- Replacement: "The builder, Pulte, could sell new homes to buyers 50 or older who lived in them."

**9. Low. B3, SHAPE-8.** The quote repeats the sentence before it.
- Sentence: "The community's recorded rules say each home, "if occupied, shall be occupied by at least one (1) individual 55 years of age or older.""
- Replacement: delete.

**10. Low. FACT-1, row 8 note.**
- Sentence: "Tell the board within 10 days when the people living in the home change, or the association can fine you each day."
- Replacement: "Tell the board right away when the people living in the home change. After 10 days, the association can fine you for each day."

**11. Low. FACT-5, row 37.** The $2,500 is a floor. One year's dues is likely higher.
- Sentence: "On a $500,000 home, 0.5 percent is $2,500."
- Replacement: "On a $500,000 home, that is at least $2,500, and more if a year's dues is higher."

**12. Low. FACT-1, row 53.** This is the association's rule. State law (56-2-90) is separate.
- Sentence: "Golf carts can go on the streets with a licensed driver, never on sidewalks."
- Replacement: "The association's rules allow golf carts on the streets only, never on sidewalks, and only with a licensed driver."

**13. Low. B8.**
- Sentence: "From 6201 Marina Parkway, the bypass is about half a mile east."
- Replacement: delete.

**14. Low. CTA-3.**
- Sentence: "One of our agents gets it to you before you write the offer."
- Replacement: "One of our agents helps you get it before you write the offer."

**15. Low. FACT-1.** The city credit and its 2026 cut have no row in this ledger. They are copied from /buyers/property-taxes/. Add them to `facts/registry.json`, with that page as the owner.
- Sentence: "Inside Myrtle Beach, a home you live in gets a city tax credit. The city lowered that credit for 2026, so the 2026 bill will be a little higher."
- Replacement: keep the sentence. Add the registry entry.

---

## Myrtle Trace

**1. Medium. FACT-1, row 46 ("Drop 'to common land'").**
- Sentence: "Thirteen walkways between homes lead to the common land."
- Replacement: "Thirteen walkways, each 15 feet wide, run between homes, and every resident may use them."

**2. Medium. FACT-1, row 43 note (the pool is seasonal; it closed October 1 in 2025).** A buyer who tours this month may find it closed.
- Sentence: "The pool is open 8 a.m. to 9 p.m. every day."
- Replacement: "In season, the pool is open 8 a.m. to 9 p.m. every day. In 2025 it closed for the year on October 1."

**3. Medium. FACT-1, rows 26 and 31.** The 518 includes the townhouses.
- Sentence: "518 single-family homes and a few townhouses" (table)
- Replacement: "518 homes: single-family houses and a few townhouses"

**4. Medium. CTA-1 ("not 'Send the address'").**
- Sentence: "Tell us the address. One of our agents will read the HOA's rules and policies with you before you offer."
- Replacement: "Tell us which home you like. One of our agents will read the HOA's rules and policies with you before you offer."

**5. Medium. FACT-1, FACT-3.** No ledger row. The owner would ask "is this accurate?"
- Sentence: "In Chapter3's experience, many HOAs here ban renting a house at all. Myrtle Trace allows it, with these two rules."
- Replacement: "Myrtle Trace allows renting, with these two rules." Keep the first sentence only if the owner confirms it (owner question 2).

**6. Medium. B3, B8, B2 ("Living Unit").** Two sentences of sourcing the buyer would skip, and advice to visit the Register of Deeds.
- Sentence: "The rule is in the HOA's online copy of its rules. It reads: "no family may occupy a Living Unit unless at least one member thereof has attained the age of Fifty Five (55) years." The HOA says that online copy is not a legal document. Get the original from the county Register of Deeds if you need the exact wording."
- Replacement: "This is the rule in the HOA's posted copy of its covenants, which the HOA says is not the legal original." (rows 1 and 2)

**7. Medium. B3 ("cite a source in running text where a plain statement would do").**
- Sentence: "The county's utility-fee page lists $7.45 a month, or $89.40 a year, for a single-family home."
- Replacement: "That fee is $7.45 a month, or $89.40 a year, for a single-family home."

**8. Low. FACT-1, rows 78 and 79.** September is mostly summer. The counts include some meetings. The meta description calls them "activities".
- Sentence: "The HOA's activities calendar listed about 70 entries a month in fall 2026."
- Replacement: "The HOA's activities calendar listed about 70 entries a month in September and October 2026."
- Meta description: change "about 70 activities a month" to "about 70 calendar entries a month".

**9. Low. SHAPE-1.** "Around" reads as "about".
- Sentence: "You and your house guests can fish from the HOA's land around 15 ponds, and every fish must be released."
- Replacement: "You and your house guests can fish in the 15 ponds from the HOA's land. Every fish must be released."

**10. Low. Row 34 note ("pond" only if the page says the HOA calls them retention ponds), B5.**
- Sentence: "They pay for the pool, the clubhouse, the roads and the ponds."
- Replacement: keep it. Add to the activities section: "The ponds hold stormwater. Swimming and boats are not allowed on them." (row 44)

**11. Low. B5.** The buyer will be asked for two months of dues at closing. Row 36 is wrong as worded. Re-file the verifier's wording, then add to the closing section:
- Replacement: "The HOA's closing form also lists two months of dues payable in advance at closing."

**12. Low. FACT-1, row 38 ("relying primarily on unpaid volunteers").**
- Sentence: "The HOA manages itself and has no management company."
- Replacement: "Owners run the HOA, mostly as volunteers. It has no management company."

**13. Low. FACT-1, row 80.** Meeting days rest on row 77, which is wrong.
- Sentence: "Standing groups meet for bingo and game nights, and bocce and shuffleboard each have a league."
- Replacement: "The activities committee has standing groups for bingo and game nights, and bocce and shuffleboard each have a league."

---

## Seasons at Prince Creek West

**1. High. FACT-1, ledger "must not use: row 61 as proof that lots 306 to 314 are out of the floodplain".** It also contradicts the sentence before it. That sentence lists lots 307 to 315 as touching Zone AE on today's map.
- Sentence: "In 2011, FEMA issued a letter that took Phase 2 lots 306 to 314 out of the mapped flood area. If the home is on one of those lots, ask the seller for a copy."
- Replacement: "FEMA's records list a 2011 letter about Phase 2 lots 306 to 314. If the home is on one of those lots, ask the seller for that letter and the home's elevation certificate."

**2. Medium. B1.** The H1, the hero and the short answer lead with the age rule. The owner said: "lead with what a buyer would want to know ... we always lead with the good then bad." The other three pages lead with price, dues, or what you get.
- Sentence: "Is Seasons at Prince Creek West in Murrells Inlet a 55+ community? Yes, under its HOA rules."
- Replacement: H1 "What do you get in Seasons at Prince Creek West in Murrells Inlet?" with the sub "Clubhouse, indoor and outdoor pools, tennis." Hero: "Seasons at Prince Creek West has 444 homesites, a clubhouse, and indoor and outdoor pools, about 4 miles from the hospital." Short answer: put the amenities sentence first and the age rule second. The age question stays as the first section heading. (rows 19, 56, 65)

**3. Medium. FACT-1, row 57 ("section heading only").** The row shows a website heading. It does not show an office or ambassadors.
- Sentence (FAQ): "The association also has a lifestyle office and ambassadors."
- Replacement: delete.
- Sentence: "The association's website has a section for its lifestyle office and ambassadors, open to owners who sign in."
- Replacement: "Owners can sign in to the association's website for its lifestyle office and ambassadors section."

**4. Medium. FACT-1, row 15 ("no source says which of the three addresses is the clubhouse").**
- Sentences: "Miles by road from the clubhouse at 130 Grand Cypress Way, with no traffic." and "The drive is about 4.0 miles from the clubhouse at 130 Grand Cypress Way."
- Replacement: "from the association's common area at 130 Grand Cypress Way" in both.

**5. Medium. FACT-5, B6, row 40 ("do not give $480 as today's cap").** The example gives $1,125. The cap is almost certainly lower, so the reader gets a figure that is too high.
- Sentence: "The road and park transfer fee on their price is $1,125, or the cap if that is lower."
- Replacement: "The road and park transfer fee would be $1,125 at 0.25 percent, but it has a cap. The cap was $480 in 2017 and is adjusted over time, so they ask the association for today's figure."

**6. Medium. B5, STRUCT-3.** The heading asks what the dues include. The section names the other associations and says the board can change services. It never says what the dues pay for. Row 36 is wrong as worded, but the verifier gave the supported text from the 2013 First Amendment. Re-file it as a new row, then add:
- Sentence: heading "What do the Seasons at Prince Creek West dues include?"
- Replacement: add "The association handles grass cutting and landscaping upkeep. Owners replace dead sod, plants and shrubs on their own lots."

**7. Medium. CTA-1.** A buyer does not know the lot number. This asks the same as "send the address".
- Sentence: "Tell us the lot number. One of our agents can get you an insurance quote on that home first."
- Replacement: "Tell us which home you like. One of our agents can help you get an insurance quote on it before you offer."

**8. Medium. B3, FACT-1.** The fee is cited in running text. It also has no row in this ledger. It is MT row 73. It is now on two pages, so it belongs in `facts/registry.json`.
- Sentence: "For a single-family home, the county's utility-fee page lists $89.40 a year."
- Replacement: "For a single-family home, it is $89.40 a year."

**9. Low. B3, SHAPE-8.** It repeats the sentence before it.
- Sentence: "The association's posted 2017 copy of its rules requires a permanent resident who is "55 years of age or older.""
- Replacement: delete it, and change the next sentence to "These rules are from the association's posted 2017 copy. It has recorded newer rules since, the latest in December 2025. They are not online, so ask for them before you offer."

**10. Low. FACT-1, row 46 ("'Style' is not in the text").**
- Sentence: "Fences need the architectural board's approval and must match the community's style."
- Replacement: "Fences need the architectural board's approval and must be uniform throughout the community."

**11. Low. B2.** "In default under the lease" is legal language.
- Sentence: "A tenant household that breaks the age rule is in default under the lease."
- Replacement: "If the tenants break the age rule, they have broken the lease."

**12. Low. STORY-5.** The story stops without saying what it means for the reader. Do not add detail to the story itself. Add the entry's lesson as its own sentence after it.
- Sentence: "They sold it and bought in Seasons, a few minutes up the road."
- Replacement: keep it. Add: "A buyer may move a few miles to a community built for how they live now."

**13. Low. FACT-1, rows 39 to 41.** The table leaves out the road and park transfer fee.
- Sentence: "One-time fee at closing | Two months of dues"
- Replacement: "One-time fees at closing | Two months of dues, plus the road and park transfer fee"

**14. Low. B5.** A 2013 list leaves the buyer asking whether there is a director today (owner question 3).
- Sentence: "In 2013, the builder listed a full-time activities director for the community."
- Replacement: keep it until the owner answers. If he confirms, write "A full-time activities director plans events in the clubhouse."

**15. Low. B8.**
- Sentence: "There are 444 homesites, numbered 1 to 446 with two numbers unused. The community also has common areas and pump stations."
- Replacement: "There are 444 homesites."

---

## All four pages

**1. Low. B2.** "Median" is a word many buyers do not use.
- Sentence (NMB, same pattern on the other three): "In ZIP code 29582, single-family flood policies for Zone X homes cost a median of $602 a year, fees included."
- Replacement: "In ZIP code 29582, the middle single-family flood policy for a Zone X home cost $602 a year, fees included."

**2. Low. B2, WORD-5.** The table heading reads as the age of the youngest person living there.
- Sentence: "Youngest other resident" (comparison table column)
- Replacement: "Lowest age for others in the home"

**3. Low. FACT-6.** The stormwater fee (MT, Seasons) and the Myrtle Beach credit cut (GD) are each on more than one page with no registry entry. Add both to `facts/registry.json`, with `staleBy` dates.

---

## Questions only the owner can answer

1. **Tax year.** The calculator on /buyers/property-taxes/ uses 2025 rates. The 2026 levies are certified, and North Myrtle Beach raised its city levy from 45 to 50 mills. Should the pages give 2026 figures (NMB $3,139 instead of $2,999), or keep 2025 figures to match the calculator until it is updated?
2. **"In Chapter3's experience" sentences.** Are these accurate as written? NMB: "HOAs here commonly charge a buyer a transfer fee and a few months of dues in advance at closing" and "rental limits differ from one new community to the next". MT: "many HOAs here ban renting a house at all".
3. **Seasons life.** Does Seasons have a full-time activities director or lifestyle office in 2026? How many events a month? Is it gated?
4. **Grande Dunes.** Is lawn care in the base dues, or billed separately? What is the monthly total for a house and a villa? Where is the beach club, and what does it have?
5. **Builder name.** Is "the builder, Pulte" once, then "the builder", acceptable? Or should the pages say only "Del Webb"?
