# Review 3: batch 2026-10-a, the simple-first rewrite (version 5)

Reviewer, 2026-10-07. I did not write these pages or research their facts.

I read the four plain-text pages and every phone screenshot in `read5/`. I checked each sentence against the four ledgers (verified rows only), `data/photos.json`, `data/places.json`, `data/55-plus-communities.json`, `stories/stories.json`, the four specs and `_55-plus-kit.js`, and the built HTML (captions, credit links, meta, schema, byline). I answered section 00 of `voice/REVIEW-PASS.md` (P1 to P8) first, then the fact trace, then the non-negotiables, then the rest. I did not rerun the machine gates or the form test, as instructed. I changed no spec and committed nothing.

Severity: **High** means the owner would send the page back for it, or a ledger "must not use" line is broken. **Medium** means a fact says more than its row, or a PLAIN or BUYER rule is missed. **Low** means less clear or less exact than it should be.

## Verdicts

| Page | Verdict | High | Medium | Low |
|---|---|---|---|---|
| Del Webb North Myrtle Beach | Not ready | 1 | 5 | 6 |
| Del Webb at Grande Dunes | Not ready | 2 | 6 | 7 |
| Myrtle Trace | Ready after the medium fixes | 0 | 2 | 9 |
| Seasons at Prince Creek West | Not ready | 2 | 5 | 9 |
| All four pages | | 0 | 3 | 3 |
| **Total** | | **5** | **21** | **34** |

## Section 00 at a glance

| Check | NMB | Grande Dunes | Myrtle Trace | Seasons |
|---|---|---|---|---|
| P1 words a stranger knows | Mostly. "14th Avenue South", "Grand Strand", "FEMA" | "villa", "first villa section", "amenity center", "guest cards", "the larger Grande Dunes association" | Mostly. "pool season", "Grand Strand" | "road and park association", "permanent resident", "Garden City" |
| P2 three numbers or fewer per section | Fail: cost section has 8 | Fail: cost 5, who can live 6 | Fail: cost 5 | Fail: who can live 6, cost 4 |
| P3 what it means | Pass | Icons say what the budget holds | Pass | The 43-acre park line |
| P4 map, picture or icons in first screen | Map yes; labels collide. First phone screen has no icon or photo | Map yes. Same first screen | Map yes, no Myrtle Beach label. Same first screen | Map yes. Same first screen. No homes section at all |
| P5 headings answered first | Pass | Homes and to-do sections do not answer | Pass | Pass |
| P6 date once | Pass ("early October" once) | Fail: "revised January 2019" 3 times | Pass | Fail: "2017" 3 times |
| P7 home and area before price | Pass | Pass | Pass | Pass, but there is no homes section |
| P8 sentences nobody would miss | NY story, fiber line | Budget icons | Duplicate icon | Amenities listed 4 times, park twice |

## Flood-law rows 68, 90, 91 and 82

All four are now `verified`, each with a page check of the read5 sentence. Each page uses its row inside the supported wording ("The law requires flood insurance for a home loan only in a high-risk flood zone"). No page says a lender "will not" or "cannot" require it outside the zone.

- NMB row 68: "A lender has to require flood insurance only for a home inside that zone, under the federal flood insurance law." Matches. The spec header still says the row is PENDING; update the comment.
- Grande Dunes row 90: "Under the federal flood insurance law, a lender must require flood insurance only for a home in that zone." Matches.
- Myrtle Trace row 91: "The federal flood law requires flood insurance for a home loan only when the home is in a high-risk flood zone." Matches.
- Seasons row 82: "The federal flood insurance law makes a lender require flood insurance only when the home itself is in that zone." Matches the row. The verb breaks FIG-3 (Seasons 8).

## What passed on all four pages

- No rate, no payment amount, no loan language. BrickWood appears only in the AfBA disclosure. Devin Day appears only in the byline and schema. Paul is not named. There is no quote for Tim Nash.
- No sentence describes residents. Every age rule is stated as the property's rule. No conclusion is drawn about Pulte or any HOA; Pulte's statements carry "the builder says" or "the builder lists".
- Every example starts with "Example:" and has three numbers or fewer. None says "our client".
- Every drive minute on the pages and maps matches its verified row (NMB 62 to 67, GD 84 to 89, MT 85 to 89, Seasons 76 and 78 to 81). Seasons uses row 77, which is marked wrong for the street only (Seasons 11). Myrtle Trace does not use row 90 (Riverwalk, unverifiable).
- Every resale price matches its row, rounded without changing the meaning: NMB $534,900 to "about $535,000"; GD 43 sales, $630,000; villas $432,500 to "about $433,000"; MT $300,000; Seasons $499,000 to "about $500,000". MT dues $95 to "about $100". MT one-time fees $1,450 + $100 to "a little over $1,500". Seasons tax $1,964 to "about $2,000". Flood costs $602, $540, $561, $574 to $600, $550, $550, $600.
- Every photo caption carries the exact credit line from `photos.json`, with the license linked to its deed and "Wikimedia Commons" linked to the file page. Every caption says the photo shows the area, not the neighborhood. No photo of a community, a builder or a listing is used.
- No word from `rules/plain-words.json` appears on any page.

---

## Del Webb North Myrtle Beach

**1. High. P2, P8, STRUCT-9, STORY-1.** The cost section has eight numbers in prose. The New York story gives a second tax figure for the same $700,000 price ($3,200 against "a little over $3,000"), is about the Grand Strand rather than this neighborhood, and already lives on /buyers/relocating/from-new-york/. "We worked with" also makes the company the actor (STORY-1).
- Sentences: "A New York household we worked with sold a $1 million house that had more than $20,000 a year in property tax." and "They bought a $700,000 house on the Grand Strand and pay about $3,200 a year. That is one household's result, not a promise."
- Replacement: delete both paragraphs. The tax link after them stays. The section then has four numbers. If the story is kept anywhere, open it with "An agent at Chapter3 helped a New York household that sold a $1 million house..."

**2. Medium. FACT-1, row 32 (and the reason row 33 was marked wrong).** Pulte lists a "resort-style pool" and an "indoor lap pool". No row says the first one is outdoors. The verifier rejected "outdoors" on row 33 for the same reason.
- Sentences: "Owners share a clubhouse with an outdoor pool, an indoor lap pool and a fitness room." and the icon "An outdoor pool and an indoor lap pool".
- Replacement: "Owners share a clubhouse with two pools, one of them an indoor lap pool, and a fitness room." Icon: "Two pools, one an indoor lap pool".

**3. Medium. P5, FACT-1.** The meta description promises the HOA fee amount. No verified row gives it (Not verified 5, 19, 20), and the page never states it.
- Sentence (meta description): "...the 55+ rule, what the HOA fee includes and costs."
- Replacement: "...the 55+ rule and what the HOA fee includes." Put the offer in a CTA, per PLAIN-5: bottom CTA text "Call about the house and the lot you want. One of our agents gets the current HOA fee and reads the HOA documents with you."

**4. Medium. FACT-1, row 55.** The $602 is the middle policy for houses outside the high-risk zone in ZIP code 29582. The sentence drops that limit. A house in the high-risk zone costs more.
- Sentence: "A flood policy on a house in North Myrtle Beach usually costs about $600 a year, if you choose to buy one."
- Replacement: "If you choose to buy one, a flood policy on a house outside the high-risk zone here usually costs about $600 a year."

**5. Medium. P4.** On the map, the "Kroger about 6 min" label sits beside the hospital's cross icon, and the cart icon sits by the community marker. A reader matches the wrong icon to the wrong place. The only town label is "MYRTLE BEACH", by the airport; North Myrtle Beach is not named.
- Replacement: in `tools/area-map.js`, keep each label on the same side as its own icon and push labels off other icons. Add a "NORTH MYRTLE BEACH" town label at the community.

**6. Medium. FACT-1, row 2, Not verified item 1.** Row 2 is the city's definition. The HOA's recorded rule, which may set a minimum age for others in the home, is unread.
- Sentence: "Other people in the household, such as a younger husband or wife, can live there with that person."
- Replacement: "The city's agreement lets other people, such as a younger husband or wife, live in the home with that person."

**7. Low. P3, BUYER-5, row 35.** The sentence says where the center is, not what the buyer gets there.
- Sentence: "The builder says the city's community center is next door to the neighborhood."
- Replacement: "The builder says the city's community center next door has an indoor gym for basketball and pickleball."

**8. Low. STRUCT-6, P8, row 29.** The line makes the reader ask whether internet is in the fee. Row 29 says Pulte does not say.
- Sentence: "The builder also lists a fiber network for internet."
- Replacement: delete.

**9. Low. P1, P8.** A road name the reader does not know, and a sentence about the city's list.
- Sentence (FAQ): "About 4 minutes by car, or about a mile, to the 14th Avenue South beach parking lot. It is the closest beach parking on the city's list."
- Replacement: "About 4 minutes by car, or about a mile, to the nearest public beach parking lot."

**10. Low. P4.** The Alabama Theatre photo is a lit road sign at dusk with a tribute-band ad. A reader cannot picture Barefoot Landing from it.
- Replacement: use `cherry-grove-pier.webp`. Caption: "The beach, beach houses and Cherry Grove Pier in North Myrtle Beach, seen from high above. The photo shows the area, not the Del Webb homes. Photo: Melikamp, CC BY-SA 3.0, via Wikimedia Commons".

**11. Low. FACT-1, photos.json.** The photo's record says only "in North Myrtle Beach". "Near Del Webb" says more.
- Sentence (caption): "The beach in North Myrtle Beach, near Del Webb. It is a photo of the beach, not of the Del Webb neighborhood."
- Replacement: "The beach in North Myrtle Beach. The photo shows the area, not the Del Webb homes."

**12. Low. CTA-1.** "Tell us the house and the lot" asks for the same thing as "send the address".
- Sentence: "Tell us the house and the lot. One of our agents helps you get a homeowners and flood quote before you sign."
- Replacement: "Tell us which home you like. One of our agents helps you get a homeowners and flood quote before you sign."

---

## Del Webb at Grande Dunes

**1. High. FACT-1, ledger "must not use: row 31 beside row 33 without a check".** The 2025 budget bills lawn care as its own assessment line. The homes section words this right ("owners pay for it through the HOA"). The cost section says it is in the fee. Review 2 raised this as High.
- Sentence: "Your HOA fee pays for basic lawn care and the HOA's activities program."
- Replacement: "You also pay the HOA for basic lawn care and its activities program." (rows 33 and 77)

**2. High. P6, and the ledger's "posted rules, revised January 2019" requirement.** The date is in the body three times: the dock paragraph, the pets heading answer and the golf cart FAQ. The ledger needs the vintage once, not every time.
- Sentences: "Under the HOA's posted rules, revised January 2019, the dock is open from dawn to dusk." / "Yes to all three, with a few rules, under the HOA's posted rules, revised January 2019." / "Yes. Under the posted rules, revised January 2019, golf carts may use the streets..."
- Replacement: say it once, where the rules first appear: "The HOA's posted rules were last revised in January 2019. Under them, the dock is open from dawn to dusk." Then: "Yes to all three, with a few rules, under the HOA's posted rules." and "Yes. Under the posted rules, golf carts may use the streets with a licensed driver, but not the sidewalks." The FAQ on renting also needs the qualifier (row 51 is a 2019 rule): "Yes, for 12 months or more, and only once a year. Under the posted rules, the whole home must be rented, with a written lease."

**3. Medium. FACT-1, rows 32, 36 and 78.** The page tells the buyer they can use the Ocean Club and join its clubs. No verified row says what the fee gives a Del Webb owner. Row 36 (residents-only club) is unverifiable and on the "must not use" list. Row 78's source page is titled "Country Club Membership", so the clubs may be a separate membership. The page also never says where the club is (Not verified 8).
- Sentences: h1em "A 55+ neighborhood with a beach club."; FAQ "Do owners in Del Webb at Grande Dunes get a beach club? Yes."; "In a normal week you can swim, play mahjong at the beach club and tie up your boat at the day dock."; example "Carol plays mahjong at the beach club."
- Replacement: research item, not an owner question: file a row on what the Ocean Club fee gives a Del Webb owner (the /homeownership page cited in the spec may say), and where the club is. Verify it, then keep the sentences. Until then: FAQ "Do owners in Del Webb at Grande Dunes pay for a beach club? Yes. Every owner pays a fee for the Grande Dunes Ocean Club. That fee is on top of the Del Webb HOA fee." Normal week: "In a normal week you can swim at the neighborhood's pools and tie up your boat at the day dock." Example: "Now Jim drives the golf cart to the pool."

**4. Medium. P1, P4, P5.** The homes section does not say what the homes are like. "Villa" is never explained, and "the first villa section" names a place the reader cannot find. No verified row gives sizes (row 24 is unverifiable).
- Sentences: "Del Webb at Grande Dunes has single-family houses and a section of villas." and "In the first villa section, the homeowners association (HOA) takes care of the roofs, the gutters and the outside paint."
- Replacement: "Del Webb at Grande Dunes has single-family houses and a section of villas. Villas usually sell for less than the houses." Then "For the villas in the first villa section built, the homeowners association (HOA) takes care of the roofs, the gutters and the outside paint. One of our agents can tell you which villas that covers." Research item: file a row with the size range of homes built (county parcel data or MLS), then add one sentence on size and bedrooms.

**5. Medium. FACT-1, FACT-9, rounding.** The v4 figure is $2,249, at 2025 rates with the 2025 city credit (the calculator's `TDF` constant). The city lowered the credit for 2026, so the bill a buyer gets now is higher. "A little over $2,000" understates even the 2025 figure by 12 percent. The NMB page uses 2026 rates (see All four pages 3).
- Sentence: "Property tax on a $630,000 home you live in is a little over $2,000 a year."
- Replacement: "On a home at that price that you live in, property tax was about $2,200 a year at last year's rates. The city lowered its tax credit this year, so the bill will be a little higher." Register the city credit in `facts/registry.json` (Review 2, item 15).

**6. Medium. P2.** The cost section has five numbers, with $630,000 twice. "Who can live" has six (55, 19, 19, 90, 12 and the 55 again).
- Sentences: "Property tax on a $630,000 home..." (fixed by item 5) and "Everyone else who lives in the home must be 19 or older. Grandchildren and other guests under 19 can stay up to 90 nights in any 12 months."
- Replacement: "Everyone else who lives there must be at least 19. Younger visitors, such as grandchildren, can stay up to 90 nights in any 12 months."

**7. Medium. FACT-1, photos.json.** The photo's record says "in Myrtle Beach" and nothing more. "Near Grande Dunes" says more. The photo is also dark and cloudy, and the text above it names the Ferris wheel, which has a licensed photo.
- Sentence (caption): "Sunrise over the ocean in Myrtle Beach. The picture shows the beach near Grande Dunes, not the Del Webb homes."
- Replacement: use `myrtle-beach-skywheel-boardwalk.webp`. Caption: "The SkyWheel on the Myrtle Beach Boardwalk, about 15 minutes from Del Webb at Grande Dunes by car. The photo shows the area, not the Del Webb homes. Photo: DiscoA340, CC BY-SA 4.0, via Wikimedia Commons" (row 88). If the sunrise stays: "Sunrise over the ocean in Myrtle Beach. The photo shows the area, not the Del Webb homes."

**8. Medium. P3, P8, row 77.** Two icons say what the budget holds, not what an owner can do.
- Sentences (icons): "Fitness: A fitness and wellness program in the HOA's budget" and "Activities: The HOA budgets for its own activities program".
- Replacement: re-file row 42's list from the posted 2019 rules (fitness center, indoor and outdoor pools, tennis, pickleball and bocce courts, fire pit, arts and crafts room) as a new row for the verifier. When verified: "Fitness center: Work out at the amenity center" and "Courts: Tennis, pickleball and bocce". Until then, delete both icons.

**9. Low. P5, P8.** The first sentence of "What is there to do" says what owners pay, not what they can do, and repeats the short answer.
- Sentence: "Every owner pays for the Grande Dunes Ocean Club, a beach club."
- Replacement: start the section with the normal-week sentence from item 3.

**10. Low. P1, STORY-3.** Jim is 58, so he meets the 55+ rule himself. The sentence teaches nothing and confuses.
- Sentence: "Carol is 66 and Jim is 58, and they are moving from Pittsburgh. Carol's age meets the 55+ rule, so Jim can live there too."
- Replacement: "Carol is 66 and Jim is 52, and they are moving from Pittsburgh. Carol's age meets the 55+ rule, so Jim can live there too."

**11. Low. FACT-1, row 37 ("until changed" by the board).**
- Sentence: "When you buy a home at that price, you pay the HOA a one-time fee of at least $3,000."
- Replacement: "When you buy a home at that price, the HOA's rules set a one-time fee of at least $3,000. One of our agents gets the current amount before you offer."

**12. Low. FACT-1.** No source says these are the places owners use most.
- Sentence (map caption): "Map of Del Webb at Grande Dunes in Myrtle Beach, with drive times to the places owners use most."
- Replacement: "Map of Del Webb at Grande Dunes in Myrtle Beach, with drive times by car to the beach and other places nearby."

**13. Low. P1.** "Amenity center" (five times) and "guest cards" are not words a stranger uses.
- Sentence: "The pools have no lifeguards, and each home gets two guest cards."
- Replacement: "The pools have no lifeguards. Each home gets two passes for guests." Write "clubhouse" for "amenity center" where it means the building.

**14. Low. P1, row 18.** The reader does not know what the larger association is.
- Sentence: "On top of that fee, every owner pays the beach club fee and a fee to the larger Grande Dunes association."
- Replacement: "On top of that fee, every owner pays the beach club fee and a fee to the Grande Dunes Master Association, which covers all of Grande Dunes."

**15. Low. P4.** The "Sheds" icon is a lawn mower.
- Replacement: use a neutral "no" or house icon from `tools/icons.js`.

---

## Myrtle Trace

**1. Medium. P2, FACT-1, row 73.** The cost section has five numbers, with $300,000 twice. The tax bill also carries the county stormwater fee ($89.40 a year, row 73), so the buyer's bill is about $1,200, not "a little over $1,000".
- Sentence: "On a $300,000 home you live in, property tax is a little over $1,000 a year."
- Replacement: "On a home at that price that you live in, the county tax bill is about $1,200 a year, with the stormwater fee included."

**2. Medium. FACT-1, rows 78 to 80.** The two monthly counts still include some club and group meetings (row 78 and 79 notes), and they come from two months. Row 80 lists the committee's seven groups; nothing shows the committee plans all 70 entries. Review 2 item 8 raised the count.
- Sentences: "The neighborhood calendar lists about 70 activities a month, from bingo to line dancing." and "The Myrtle Trace activities calendar lists about 70 activities each month, planned by neighbors on the activities committee."
- Replacement: "The neighborhood calendar lists about 70 events and club meetings a month, from bingo to line dancing." and "The Myrtle Trace activities calendar lists about 70 events and club meetings each month." Meta description: "about 70 events a month" becomes "about 70 calendar events a month" if it carries the count.

**3. Low. FACT-1.** Bingo is on the second and last Friday, not every week (row 77's example, which the verifier found right).
- Sentence: "In a normal week you can play bingo, go to a line dancing class and fish in the ponds."
- Replacement: "In a normal week you can go to a line dancing class or a game night, and fish in the ponds."

**4. Low. FACT-1, row 44 ("write swimming and recreational boats").**
- Sentence: "Swimming and boats are not allowed in the ponds."
- Replacement: "Swimming and boating are not allowed in the ponds."

**5. Low. FACT-1, row 51 ("one year at a time at the least").** "A year at a time" reads as a one-year limit.
- Sentence: "Myrtle Trace allows it for a year at a time."
- Replacement: "Myrtle Trace allows it, with leases of a year or longer."

**6. Low. FACT-1, rows 1 and 12.** It is a rule, not a count of who lives there.
- Sentence (short answer): "Myrtle Trace has about 500 homes, and at least one person in each home is 55 or older."
- Replacement: "Myrtle Trace has about 500 homes, and at least one person in each home must be 55 or older."

**7. Low. SHAPE-7.** The caption talks about the page.
- Sentence: "No photo of Myrtle Trace is shown here."
- Replacement: "The photo shows downtown Conway, not Myrtle Trace."

**8. Low. P8.** The icon repeats the section above it and the FAQ.
- Sentence (icon): "Younger people: Yes. Only one person in the home has to be 55 or older."
- Replacement: delete.

**9. Low. FACT-1, row 48 ("privately owned").** "Private golf course" can read as members-only.
- Sentence: "Some homes back onto Burning Ridge Golf Club, a private golf course that is not part of the neighborhood."
- Replacement: "Some homes back onto Burning Ridge Golf Club, a privately owned golf course that is not part of the neighborhood."

**10. Low. P1, P4.** The map shows "Beach" and "Boardwalk" with no town name, and the text calls Conway a town, then a city.
- Replacement: add a "MYRTLE BEACH" label by the beach and Boardwalk. Text: "Myrtle Trace is just outside the city of Conway, about 15 minutes inland from the beach by car."

**11. Low. P5.** "Pool season" leaves the reader asking when (row 43 note: it closed October 1 in 2025).
- Sentence: "The pool is open from 8 in the morning to 9 at night during pool season."
- Replacement: "The pool is open every day from 8 in the morning to 9 at night until it closes for the year in early fall."

---

## Seasons at Prince Creek West

**1. High. P7, PLAIN-4, REWRITE-PLAIN section 4.** The page has no "What are the homes like?" section. The other three have one. The owner said buyers "care more about the house and what it offers". A reader finishes the page not knowing whether the homes are one story or how big they are.
- Replacement: re-file row 31's supported wording and row 32 as new rows for the verifier. When verified, add after "Where is it?": heading "What are the homes like in Seasons at Prince Creek West?" Text: "Seasons has about 440 home lots, each with its own house. When the builder sold them, it described open, one-story floor plans. Some plans had an extra room." (row 19; row 31 reworded: "In 2013 the builder described the homes as having open, one-story floor plans"; row 32: optional bonus rooms, 2016 copy). Put a CTA here, not in the to-do section.

**2. High. P6.** "2017" is in the body three times.
- Sentences: "The 2017 posted copy of the rules says so." / "Yes to pets, golf carts, fences and renting, each with a rule, under the 2017 posted copy of the rules." / "The association has recorded newer rules since 2017 that are not online."
- Replacement: keep the year once, at the first use: "The association's posted rules, from 2017, say so." Then "Yes to pets, golf carts, fences and renting, each with a rule, under the posted rules." and "The association has recorded newer rules that are not online."

**3. Medium. FACT-1, row 46 ("'Style' is not in the text"). Review 2 item 10, not applied.** The charter defines "uniform" as width and depth, not look.
- Sentence: "Yes, if the architectural board approves it and it matches the neighborhood's style."
- Replacement: "Yes, if the neighborhood's design board approves it. A fence must be as wide as the house and run to the back of the yard."

**4. Medium. P3, P5, P8, row 30.** The reader learns the bill pays a group that owns a park, but not whether they can use it or what is in it. No row says. The line is in the to-do section, the cost section and the FAQ.
- Sentence: "Seasons is part of Prince Creek West, a larger group of neighborhoods. Part of your homeowners association (HOA) bill goes to the group that owns its 43-acre park."
- Replacement: delete it here and in the FAQ ("Part of each HOA bill also goes to the group that owns a 43-acre park in Prince Creek West."). In the cost section: "Your homeowners association (HOA) bill includes your share for the larger Prince Creek associations, so you get one bill." (row 37)

**5. Medium. BUYER-5, B7. Review 2 item 6, not applied.** The cost section never says what the HOA bill pays for. The other three pages answer lawn care.
- Replacement: re-file row 36's supported text from the 2013 First Amendment as a new row. When verified, add: "The association cuts the grass and keeps up the landscaping on each lot."

**6. Medium. FACT-1, row 71.** The $574 is for houses outside the high-risk zone. The sentence follows the one about lots that touch the zone, so a buyer on such a lot may take $600 as their cost.
- Sentence: "A flood policy on a house in the Murrells Inlet area usually costs about $600 a year."
- Replacement: move it before the 45-lot sentence: "Outside the high-risk zone, a flood policy on a house in the Murrells Inlet area usually costs about $600 a year."

**7. Medium. STORY-1, STORY-5.** The story is told about the company's clients, and it ends without what it means for the reader. Review 2 item 12.
- Sentence: "Clients of ours owned a house in Blackmoor, a golf neighborhood in Murrells Inlet with no age rule. They sold it and bought in Seasons, a few minutes away."
- Replacement: "An agent at Chapter3 helped a couple who owned a house in Blackmoor, a golf neighborhood in Murrells Inlet with no age rule. They sold it and bought in Seasons, a few minutes away. A buyer may move a few miles to a neighborhood built for how they live now." (the entry's lesson)

**8. Low. FIG-3, row 82.** A law does not make anyone do anything.
- Sentence: "The federal flood insurance law makes a lender require flood insurance only when the home itself is in that zone."
- Replacement: "The federal flood insurance law requires flood insurance for a home loan only when the home itself is in that zone."

**9. Low. P1.** The page calls Murrells Inlet a town, then says Seasons is "not inside any town".
- Sentence: "Murrells Inlet is a town on a salt marsh, with fishing boats, marinas and a boardwalk along the water."
- Replacement: "Murrells Inlet is a waterfront community on a salt marsh, with fishing boats, marinas and a boardwalk along the water."

**10. Low. P2.** An exact figure where a round one does.
- Sentence (FAQ): "There are 444 home lots in Seasons at Prince Creek West, near Murrells Inlet in Horry County."
- Replacement: "There are about 440 home lots in Seasons at Prince Creek West, near Murrells Inlet."

**11. Low. Process: row 77 is marked wrong (street only).** The icon "Publix, about 5 minutes away" is right per the verifier, but rests on a wrong row.
- Replacement: re-file row 77 with Publix at 11920 Hwy 707 Ste A and have it verified before publish. The page wording stays.

**12. Low. P1.**
- Sentences: "Usually not, because the middle of every lot in Seasons is outside the high-risk flood zone." and "A corner of 45 lots touches the high-risk zone."
- Replacement: "Usually not, because the center of every lot in Seasons is outside the high-risk flood zone." and "45 lots have a corner in the high-risk zone."

**13. Low. P5, row 40.** The reader asks how much the transfer fee is.
- Sentence: "The road and park association also charges a one-time transfer fee on each sale."
- Replacement: "The road and park association also charges a transfer fee on each sale, a quarter of 1 percent of the price, up to a cap." (do not give $480)

**14. Low. CTA-1.** The bottom CTA heading is an instruction, not an offer.
- Sentence: "Read the Seasons rules before you offer."
- Replacement: "Want help reading the Seasons rules before you offer?"

**15. Low. P8.** The amenities are listed four times: short answer, icon row, the first sentence of the to-do section, and the FAQ.
- Sentence: "Seasons at Prince Creek West has a clubhouse, two pools, a fitness center, tennis and bocce for its owners."
- Replacement: delete. Start the section with "In a normal week you can swim indoors or outside, play tennis or bocce, and work out at the fitness center."

**16. Low. P2.** "Who can live" has six numbers; the cost section repeats $500,000.
- Sentences: "No one under 18 can live there. Grandchildren and other visitors under 18 can stay up to 60 days a year." and "On a $500,000 home you live in, property tax is about $2,000 a year."
- Replacement: "No one under 18 can live there, but younger visitors, such as grandchildren, can stay up to 60 days a year." and "On a home at that price that you live in, property tax is about $2,000 a year."

---

## All four pages

**1. Medium. P4.** On a phone, the first screen holds the H1, byline, sub, CTA and short answer. No icon or photo shows until the reader scrolls (screenshots 00 on every page).
- Replacement: put the at-a-glance icon row right after the hero sub, before the short answer.

**2. Medium. P4.** On a phone the comparison table cuts off the "Homes usually sell for" column, the one the reader compares (NMB screenshot 07).
- Replacement: on narrow screens, show each row as a card, or shorten the headers to "Beach" and "Usual price" so all four columns fit.

**3. Medium. FACT-1, FACT-9. Review 2 owner question 1 is still open.** NMB gives tax at 2026 rates. Grande Dunes uses the 2025 bill and the 2025 city credit; Myrtle Trace and Seasons use 2025 district levies, because the 2026 levies for districts 100 and 610 are not established (MT row 18). A buyer comparing the pages compares two tax years.
- My call, for the owner to approve: say "at last year's rates" on Grande Dunes, Myrtle Trace and Seasons, and keep 2026 on NMB, where it is verified. Remove the year from the sentence, not just the number, so P6 still passes.

**4. Low. P1.** "Grand Strand" (link text on all four) and "FEMA" (all four) are names a reader from away does not know.
- Replacement link texts: "how the hospitals near the beach compare"; "the government's flood map".

**5. Low. P1.** Link text on NMB, Grande Dunes and Seasons uses "age-restricted" and "age-targeted".
- Replacement: "how a neighborhood with a 55+ rule differs from one that is only built for older buyers".

**6. Low. FACT-1.** Each sources line says "Read October 5, 2026." The drive times, photos and flood-law rows were read October 7.
- Replacement: "Read October 5 to 7, 2026."

---

## Questions only the owner can answer

1. **Byline.** Every page says "Reviewed by Tim Nash, Broker-in-Charge". Will Tim review these four before they publish?
2. **Tax year.** Approve the call in All four pages 3, or say to use one year on every page.

The other open items have a source and go to the researcher, not the owner: what the Ocean Club fee gives a Grande Dunes owner (GD 3), home sizes at Grande Dunes (GD 4), the Seasons homes and lawn-care rows (Seasons 1 and 5), and the 2019 Grande Dunes amenity list (GD 8).
