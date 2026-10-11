# Owner's eye: the four 55+ pages, version 14b

**Independent reviewer.** I did not write these pages, their specs or any earlier review.

| Page | Score as built | Score with the must-fix lines in |
|---|---|---|
| Del Webb North Myrtle Beach | 8 | 9 |
| Del Webb at Grande Dunes | 8 | 9 |
| Myrtle Trace | 8 | 9 |
| Seasons at Prince Creek West | 8 | 9 |

None goes to the owner as built. Each page has one must-fix, and each is one sentence or one list item. Three of the four are the kind of line he has sent back many times: a thing that acts ("a law never does anything for you why are we personifying a law?"), and a word a buyer would have to look up ("Covenants is a big word use rules"). The pros and cons sections are a good addition. They read like an agent talking, not like records, except one item on Seasons.

## How I read them

I followed `prompts/owner-eye.md` (updated today):

- I read the owner quotes in `voice/RULES.md`, newest first, the last 50 records of `voice/edits.jsonl`, `voice/VERDICTS.md`, `voice/STORY-SIMPLE.md` and `CRAFT.md` (version 2, today).
- No batch has an approved `MODEL.md`.
- I read the spec headers for version 14 and 14b, and diffed each spec against version 13 final (commit c9ed1dd) to see exactly what is new.
- I took my own Playwright captures in Chromium of the four previews in `scratchpad/preview/final/` (built 21:52 today). I scrolled 150 px at a time so every lazy image loaded. Every image reported loaded at both widths. The page has no sideways scroll at 390 px.
  - 390 px: full page, cut into phone screens.
  - 1280 px: full page.
  - The pros and cons section alone, at both widths.
  - They are in `scratchpad/oe14b/`.
- I pulled all 18 photos and aerials out of the pages at full size (1,200 px wide) and looked at each one.
- I measured the type size of the new lists in the browser.

## The sibling table

| | Del Webb NMB | Grande Dunes | Myrtle Trace | Seasons |
|---|---|---|---|---|
| Words in the article (rendered, photo credits left out) | about 1,630 | about 1,630 | about 1,600 | about 1,430 |
| Phone screens, whole page (article only) | 22.4 (19.3) | 22.0 (18.9) | 21.4 (18.4) | 19.4 (16.4) |
| Photos and aerials, plus our map | 6, plus map | 4, plus map | 4, plus map | 4, plus map |
| Pictures of the neighborhood itself | 3, plus the labelled beach view | 4 | 2 | 3 |
| Drawn cards (pools, courts, and so on) | 4 | 3 | 4 | icons only |
| Must-answers covered (`templates/must-answer.md`, 12) | 7 full, 3 part, 2 missing | 10 full, 2 missing | 11 full, 1 part | 10 full, 1 part, 1 missing |
| Longest section, in phone screens (FAQ aside) | 3.1 (the town) | 2.4 (the homes) | 2.0 (the homes) | 1.7 (where, flood, compare) |
| Pros and cons (items) | 3 and 3 | 3 and 3 | 3 and 4 | 3 and 3 |
| Pros and cons, phone screens | 1.4 | 1.5 | 1.5 | 1.3 |

What the must-answer gaps are:
- **Del Webb NMB:** guests and grandchildren, pets and fences inside the neighborhood (these wait on the HOA's recorded rules); clubs and events (the lifestyle director was cut in v12 for want of a row); gated or not; no "homes for sale" offer.
- **Grande Dunes:** gated or not (an owner question); no "homes for sale" offer.
- **Myrtle Trace:** golf carts inside the neighborhood.
- **Seasons:** clubs and events; no "homes for sale" offer.

Is one page plainly the weakest? No. Seasons is the shortest by about 170 words and two phone screens. It also has the weakest pros and cons list (item 4 below). But it has the only real story in the set (Blackmoor) and the fullest rules block. With item 4 fixed, it stands with the others. Del Webb North Myrtle Beach has the most must-answer gaps, but they wait on records, and on a phone it is the fullest page of the four.

## The pros and cons, judged

**Expert or records?** Mostly expert. Each item is one short sentence about the buyer's life: the beach, the hospital, the roof, the sidewalks. The "what to do" lines are what a good agent says out loud: "Ask how old the roof is before you make an offer." "Ask which streets are finished before you choose a lot." One item reads like a line copied from a document: the Seasons transfer fee, "a quarter of one percent of the price, up to a cap. Ask for the resale certificate." (item 4).

**Placed well?** Yes. On every page it comes after the comparison table and before the story, so the good news and the life come first (RULES A: good, then bad). On Grande Dunes the last cons (fences, dog runs, "read the rules with you") lead straight into the grandchildren rules story. On Myrtle Trace they lead into the fence question. "On this page" links to it on all four, so a reader who searched "pros and cons" can jump there.

**Said twice?** Yes, in a few places. A summary list will repeat facts from the page, and that is fine. The problems are the same words twice within a screen or two:
- Del Webb NMB: "Plan to take your car to the beach." appears word for word in the town section and again in the cons (item 1).
- Del Webb NMB: the intro says "the builder is still building", and the first con, one line later, says "The builder is still building here."
- Myrtle Trace: "$95" three times in a phone screen and a half (the comparison intro, the pros intro, the first pro), and "The beach is about 15 minutes away" in the comparison intro and the first con (item 6).
- Myrtle Trace: "Owners keep up their own house and yard, including the roof and the grass." is the homes section's sentence again, and the intro says it too.
- Seasons: the intro says "the beach is a drive", and the first con says "The beach is a drive, not a walk."

**On a phone?** They look good. One column, pros above cons, a filled check beside each pro and a plain dash beside each con, about a screen and a half. Three small things (item 8): the list text is 17 px, under the 18 px floor (CRAFT 4); the two lists are meant to sit on tinted cards, but a bug gives them the section's own color, so only the top rules show; the "Pros" and "Cons" headings carry the same mark as the items, so each heading looks like a first item.

**A verdict on the builder or the HOA?** None. "The builder is still building here" is a plain fact. No item says anything about who lives there. The one con that comes close in tone is Grande Dunes' "its rules limit leases, fences and sheds", and its problem is that the rules act (item 2), not that it judges anyone.

## What I would send back (must fix)

### 1. Del Webb NMB, the reworded beach sentence

Now, in "What is North Myrtle Beach like?":

> The car route to the nearest city beach parking lot runs a short way along US 17, where golf carts may only cross. Plan to take your car to the beach.

- "Runs" is on the owner's list of verbs a thing may not do (RULES 2, FIG-4).
- A "car route" is the subject, so the reader has to picture a route, then a "where" clause, then work out what it means.
- Version 13 said the same thing plainly. Only the fact changed (a city parking lot, not a beach path).

**Fix:**

> To reach the nearest city beach parking lot, you drive a short way along US 17. Golf carts may only cross US 17, so plan to take your car to the beach.

And in the cons, drop the "what to do" line "Plan to take your car to the beach." so it is said once. The con stays: "Golf carts may cross US 17 but not drive along it."

### 2. Grande Dunes, the pros and cons intro

Now:

> Del Webb at Grande Dunes is close to the beach, a grocery store and a hospital, and its rules limit leases, fences and sheds.

The rules act. The owner: "a law never does anything for you why are we personifying a law?"

**Fix:**

> Del Webb at Grande Dunes is close to the beach, a grocery store and a hospital, and owners there follow rules on leases, fences and sheds.

### 3. Myrtle Trace, the first pro

Now:

> Dues are $95 a month and keep up the pool, clubhouse, gates, roads and ponds.

Money acts (RULES 2: "nothing sets anything"). It also says "Dues" where the rest of the page and the searcher say "HOA fee". The costs section already has the right form.

**Fix:**

> The HOA fee is $95 a month. The HOA uses it to keep up the pool, clubhouse, gates, roads and ponds.

### 4. Seasons, the third con

Now:

> When you buy, there is a transfer fee of a quarter of one percent of the price, up to a cap.
> Ask for the resale certificate.

- "Resale certificate" is a word the buyer has to look up (RULES B).
- "Up to a cap" raises a question the page never answers (the owner: "you propose a question and then dont answer it").
- "A quarter of one percent" makes the reader do arithmetic.
- The costs section calls the same fee "a small transfer fee". The page now says one fee two ways.
- Every one of these neighborhoods charges something when you buy. Grande Dunes charges about a year of dues. Calling Seasons' small fee its drawback gives the reader the wrong idea.

The real drawback is on the page already, in the very next section.

**Fix:** replace the item with:

> On some lots, one corner touches the high-risk flood zone.
> An agent checks the flood map for the house you like before you offer.

That is row 59, as the flood section already words it. The "what to do" line is the service the story shows. It also leads the reader into "Will a Seasons lot need flood insurance?".

## Fix if cheap (would not make him send it back)

5. **Del Webb NMB, intro and first con say the same thing.** Intro: "Del Webb North Myrtle Beach has new homes about a mile from the ocean, and the builder is still building." The first con, one line later: "The builder is still building here." **Fix:** end the intro with "and the builder is still selling new homes" (the short answer's own fact, row 26), so the con is not a word-for-word echo.
6. **Myrtle Trace, the comparison intro.** Now: "Myrtle Trace has the lowest HOA fee of these four 55+ neighborhoods, $95 a month, and its homes usually sell for the least. The beach is about 15 minutes away." The table right under it shows both numbers, and the pros and cons say both again a screen later. **Fix:** "Myrtle Trace has the lowest HOA fee of these four 55+ neighborhoods, and its homes usually sell for the least."
7. **Seasons, no "Is it gated?" in the FAQ.** The gate is a must-answer (item 6 of the list) and the one Myrtle Trace answers in its FAQ. On Seasons it appears only in the pros, 11 screens down. **Fix:** add "Is Seasons at Prince Creek West a gated community?" with "Yes. There is a gate at the main entrance, with a call box for visitors." Same rows (92, 93), same words as the pro.
8. **The pros and cons lists, in the kit (`_55-plus-kit.js`, `prosCons`).**
   - The list text is 17 px; the body is 18 px. Set `.c3-pc li` to the body size.
   - The card color is inverted. `mkpage` already passes the card color to `html(bg)` ("ivory-2" on an ivory section), and `prosCons` flips it back to the section color. **Fix:** `const box = o.bg || "ivory-2";`, as `story()` does.
   - Optional: leave the mark off the "Pros" and "Cons" headings so they do not look like items.
9. **"The amenity center (the clubhouse)", both Del Webb pages.** The reader met "clubhouse" in the short answer. The new line leads with the word they do not know and puts the one they know in brackets. CRAFT 1 gives the form: the plain word first, the search word after.
   - NMB now: "The amenity center (the clubhouse) has a gathering room, an arts and crafts room and a fitness center." **Fix:** "The clubhouse in Del Webb North Myrtle Beach, also called the amenity center, has a gathering room, an arts and crafts room and a fitness center." This also names the place (AEO).
   - Grande Dunes now: "The amenity center (the clubhouse) in Del Webb at Grande Dunes has an indoor pool, ..." **Fix:** "The clubhouse in Del Webb at Grande Dunes, also called the amenity center, has an indoor pool, ..."
10. **Grande Dunes, "Your HOA bill pays for your membership."** (the Ocean Club section). A bill pays, so a thing acts. It was there in v13. **Fix:** "Your membership is paid through your HOA bill."
11. **Grande Dunes, first pro.** "The hospital is about 6." **Fix:** "The hospital is about 6 minutes away."
12. **Del Webb NMB, "The homes sit on short streets around ponds"** (homes section, from v13). "Sits" is on the FIG-4 list. **Fix:** "The homes are on short streets around ponds, ..."
13. **Descriptions.** NMB says "the HOA fee and what it covers" and Myrtle Trace says "the $95 HOA fee and what it pays for". In both, the fee acts, and "covers" is on the FIG-4 list. Seasons has the right form. **Fix:** "what it includes" on both.
14. **A "homes for sale" offer on three pages.** Only Myrtle Trace has "Get the list of Myrtle Trace homes for sale." "Homes for sale" is the first search suggestion for all four names (`GRADE-seo.md`). The same contact-form offer fits the other three under the price.

## SEO and AEO, one line per page

- **Del Webb NMB.** The title "Del Webb North Myrtle Beach 55+: Pros and Cons" carries the name, "55+" and "pros and cons"; "HOA fee" is in the description, since there is no room in the title. Four headings start without the place: things to do (item 9), costs ("In the last year, new homes from the builder usually sold for ..."; fix: "... new homes from the builder in Del Webb North Myrtle Beach ..."), flood ("You probably will not need flood insurance here"; fix: "in Del Webb North Myrtle Beach") and renting ("Renters here must stay at least 30 days"; fix: "Renters in Del Webb North Myrtle Beach ...").
- **Grande Dunes.** The title carries the name, "55+" and "pros and cons", but not "HOA fees" or "Myrtle Beach". "Del Webb Grande Dunes 55+: HOA Fees, Pros and Cons | Chapter3" fits in 61 characters, without "at", if you want the fee in. Two headings do not answer first:
  - "What is the Grande Dunes Ocean Club?" opens "Grande Dunes is a large area of neighborhoods ...". **Fix:** lead with "The Grande Dunes Ocean Club is the beach club for all of Grande Dunes, about 8 minutes by car from the Del Webb clubhouse.", then the sentence about what Grande Dunes is.
  - "What are the homes like?" opens with the build years. **Fix:** move "Most homes are on one level, with 2 or 3 bedrooms and about 1,500 to 2,900 square feet." to the top, as "Most homes in Del Webb at Grande Dunes are on one level, ...".
  - Costs ("A house usually sells for ...") and grandchildren ("Grandchildren and other guests younger than 19 ...") do not name the place. Add "in Del Webb at Grande Dunes".
- **Myrtle Trace.** The title is the best of the four: name, "55+", Conway, "HOA fee", "pros and cons", in 59 characters. Two openings to fix:
  - "What is close to Myrtle Trace?" opens "The closest beach by car is the one by the Myrtle Beach Boardwalk." **Fix:** "The closest beach to Myrtle Trace by car is the one by the Myrtle Beach Boardwalk."
  - The month section opens "In a normal month you can ...". **Fix:** "In a normal month in Myrtle Trace, you can ...".
- **Seasons.** This is the only title without "pros and cons" or "HOA fee": "Seasons at Prince Creek West, Murrells Inlet 55+". "Seasons at Prince Creek West 55+: Pros and Cons | Chapter3" fits in 58 characters. Murrells Inlet stays in the H1 and the description. Most headings name Seasons in the first sentence. The gate needs its FAQ (item 7).

The title promises pros and cons, and they sit 11 to 14 phone screens down on every page. That is acceptable: the H1 asks the warmer question, and "On this page" links to the section in one tap.

## Does every photo show what its section is about?

Yes, all 18. I opened each at 1,200 px.

- **Del Webb NMB (6):**
  - A sharp street of finished homes with a pond and path (there is a putting green by the pond).
  - The whole neighborhood with its edge and a "Clubhouse" label.
  - The clubhouse close-up with "Courts", "Clubhouse" and "Outdoor pool" labels on the right things.
  - The beach view with "Beach", "US 17" and the neighborhood labelled.
  - Beach chairs and umbrellas.
  - The Cherry Grove Pier, cropped to the pier.
  - All sit beside the sentence they show.
- **Grande Dunes (4):**
  - The clubhouse close-up (Outdoor pool, Clubhouse, Entrance).
  - The whole neighborhood beside the waterway.
  - "Houses" and "Villas" close-ups. Both close-ups are softer than the NMB aerials at full size. On a phone they read fine. The "Houses" image has a thin dark line at its left edge, about a third of the way down, which looks like a leftover outline. Low.
- **Myrtle Trace (4):**
  - The whole neighborhood with "Main entrance", "Clubhouse" and "Golf course next door".
  - A street of houses by a pond (soft at full size, fine on a phone).
  - Conway's riverwalk.
  - Conway's Main Street.
- **Seasons (4):**
  - The clubhouse close-up (Outdoor pool, Clubhouse, Entrance).
  - Boats at a Murrells Inlet marina.
  - The long, narrow neighborhood with its edge.
  - Homes around a pond.

No picture is decorative, none has a date in its caption, and none is a builder or listing image.

## The stories, read once, out loud, then covered

None of the four stories changed in v14b. All pass the cold retell. I did not count or reread.

- **Del Webb NMB:** Frank and Joyce wanted weekly vacation renters while they spend summers in Michigan, but renters there must stay a month, so their agent caught it before they signed and they planned on one summer renter.
- **Grande Dunes:** Bill and Nancy wanted their grandsons all summer and at Christmas, but that is about two weeks more than a grandchild may stay, so their agent caught it before the offer and they cut two weeks from summer.
- **Myrtle Trace:** Pat wanted a fenced yard for her dog, but a golf course house cannot have one, so her agent found that a dog run is allowed and she made her offer.
- **Seasons:** Carol and Jim liked a house that turned out to need flood insurance, so their agent got a quote that afternoon and they made their offer knowing the cost.

Each is the last section before the FAQ, with a real problem the agent caught. A note for the next batch, not this one: three of the four turn on the same act, "their Chapter3 agent reads the neighborhood's rules with them" (CRAFT 6: stories in a set should not share one shape). The owner saw this shape at v13 and did not object.

## What the pages still do not answer that buyers search

These are research or owner gaps, not fixes for this round:

- **Del Webb NMB:** pets, guests and fences inside the neighborhood (the HOA's 2026 rules); how many clubs and events the HOA runs; gated or not.
- **Grande Dunes:** gated or not (owner question).
- **Myrtle Trace:** golf carts on the neighborhood streets.
- **Seasons:** clubs and events. "Photos" is a search suggestion, and the page has only aerials of the neighborhood itself. A ground photo of the clubhouse or a street from the shot list would help most here.
- **All but Myrtle Trace:** a "homes for sale" offer (item 14).

## The grade, as him

- **Del Webb NMB, 8; 9 with item 1.** The page is as good as v13 everywhere but one sentence. That sentence is new, and it is harder to read than the one it replaced. The pros and cons are clean.
- **Grande Dunes, 8; 9 with item 2.** It has the best pros and cons of the four. The cons lead into the story, and the dock and the Ocean Club are things a buyer wants to hear. One clause makes the rules act.
- **Myrtle Trace, 8; 9 with item 3.** The pros are the warmest of the four: bingo, game nights, a hospital 3 minutes away. The roof tip is the best "what to do" line in the set. The first pro makes money act, and the section says $95 too often next to the comparison.
- **Seasons, 8; 9 with item 4.** The gate line is plain and useful. The cons are the weakest list of the four: a parking rule and a fee with a term and an unanswered cap. Swapping in the flood item makes it as strong as the others and leads into its own next section. Item 7 (the gate in the FAQ) is worth doing at the same time.
