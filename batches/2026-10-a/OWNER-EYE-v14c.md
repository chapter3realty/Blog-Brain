# Owner's eye: the four 55+ pages, version 14c

**Independent reviewer.** I did not write these pages, their specs or any earlier review.

| Page | Score as built | Score with the must-fix line in |
|---|---|---|
| Del Webb North Myrtle Beach | 9 | 9 |
| Del Webb at Grande Dunes | 8 | 9 |
| Myrtle Trace | 9 | 9 |
| Seasons at Prince Creek West | 9 | 9 |

Three pages go to the owner as built. Grande Dunes has one must-fix, one sentence long. The v14c change caused it: the Ocean Club section was reordered, and "Its clubs include mahjong ..." now follows "Del Webb is one neighborhood inside it." A reader now takes the Ocean Club's clubs for Del Webb's own. Ledger row 78 says these clubs are the Ocean Club's, "not the Del Webb clubhouse".

All four v14b must-fixes are fixed, and the writer used the wording the review gave. Of the ten smaller items, eight are fixed, one is partly fixed and one was declined for a stated reason.

## How I read them

- I read `prompts/owner-eye.md`, `CRAFT.md` (version 2), the owner quotes in `voice/RULES.md` (summary rules, FIG-4, the "only people act" class) and `voice/VERDICTS.md`. No batch has an approved `MODEL.md`.
- I diffed the specs from the v14b review commit (6c9e8ad) to v14c (1e7e966), so I read every changed sentence.
- I took my own Playwright captures in Chromium 141 of the four previews in `scratchpad/preview/final/`, built 22:23 to 22:24, before the v14c commit at 22:27. Every v14c sentence I checked is in the built pages.
  - I scrolled 150 px at a time. All 18 images loaded at 390 and 1280 px, and nothing scrolls sideways at 390 px.
  - I captured the full page, each phone screen, the pros and cons section at both widths, and a phone view at each changed sentence.
  - They are in `scratchpad/oe14c/`.
- I pulled all 18 images out of the pages. They are byte for byte the same as the v14b images, and I looked at them on one contact sheet (`oe14c/sheet.jpg`).
- I measured the new lists in the browser. `npm test` prints "all controls pass" for every suite. `score.js` on the preview files gives P9 and P10 "none" on all four pages. It fails S2 and S4 only because the preview files have no meta description or canonical; the package build adds those.

## Item by item: the v14b review

### Must-fix

| # | Item | Status | What the page says now |
|---|---|---|---|
| 1 | NMB beach sentence ("the car route ... runs") | **Fixed** | "To reach the nearest city beach parking lot, you drive a short way along US 17. Golf carts may only cross US 17, so plan to take your car to the beach." The con no longer repeats "Plan to take your car to the beach." |
| 2 | GD pros and cons intro ("its rules limit") | **Fixed** | "... and owners there follow rules on leases, fences and sheds." |
| 3 | MT first pro ("Dues ... keep up") | **Fixed** | "The HOA fee is $95 a month. The HOA uses it to keep up the pool, clubhouse, gates, roads and ponds." |
| 4 | Seasons third con (the transfer fee) | **Fixed** | "On some lots, one corner touches the high-risk flood zone." with "An agent checks the flood map for the house you like before you offer." It leads straight into "Will a Seasons lot need flood insurance?" |

### Fix if cheap

| # | Item | Status | Notes |
|---|---|---|---|
| 5 | NMB intro echoes the first con | **Fixed** | "... and the builder is still selling new homes." It now says "new homes" twice in one sentence (low list, L3). |
| 6 | MT comparison intro repeats $95 and 15 minutes | **Fixed** | "Myrtle Trace has the lowest HOA fee of these four 55+ neighborhoods, and its homes usually sell for the least." The house-and-yard con is cut too, so the homes section says it once. |
| 7 | Seasons "Is it gated?" in the FAQ | **Fixed** | It is the first FAQ entry, with the same words as the pro. |
| 8 | Kit `prosCons`: type size, card color, heading marks | **Fixed** | List items measure 18.06 px. The cards are ivory-2 (rgb 244, 239, 229) on the ivory section (rgb 251, 248, 242), so they read as cards. "Pros" and "Cons" have no mark. |
| 9 | "The amenity center (the clubhouse)", both Del Webb pages | NMB **fixed**. GD **partly fixed** | NMB: "The clubhouse in Del Webb North Myrtle Beach, also called the amenity center, has a gathering room, ..." GD was split into two sentences: "The clubhouse in Del Webb at Grande Dunes is also called the amenity center. The clubhouse has an indoor pool, ..." The plain word now comes first. But the first sentence under "What is there to do?" is a naming sentence, not the answer, and "The clubhouse" opens two sentences in a row (low list, L2). |
| 10 | GD "Your HOA bill pays for your membership." | **Fixed** | "Your HOA fee includes your membership." |
| 11 | GD "The hospital is about 6." | **Fixed** | "... about 6 minutes away." |
| 12 | NMB "The homes sit on short streets" | **Fixed** | "The homes are on short streets around ponds, ..." |
| 13 | Descriptions: "what it covers" and "what it pays for" | **Fixed** | Both now say "what it includes". |
| 14 | "Homes for sale" offer on three pages | **Fixed** | NMB and Seasons have it at the end of the costs section. GD has it at the end of the homes section, merged with its old HOA offer. On NMB it sits close to the flood quote box (low list, L4). |

### SEO and AEO lines

| Page | Status |
|---|---|
| NMB | **Fixed.** The costs, flood and renting openers now name the place. |
| GD | **Fixed.** The title is "Del Webb Grande Dunes 55+: HOA Fees, Pros and Cons \| Chapter3" (61 characters). The Ocean Club section answers first. The homes section opens with the homes. The costs and grandchildren openers name the place. The Ocean Club reorder caused the must-fix below. |
| MT | **Fixed.** "The closest beach to Myrtle Trace by car ..." and "In a normal month in Myrtle Trace, ..." |
| Seasons | **Declined, reason given.** The title stays "Seasons at Prince Creek West, Murrells Inlet 55+ \| Chapter3". The writer says the scorer requires a place. More exactly, S1 is a part score: a title without a place loses about 1 of S1's 3 points; it does not block. With the full name and " \| Chapter3", the name, "pros and cons" and the town cannot all fit in 62 characters. The description carries "pros and cons" and "HOA fee". Either title is defensible, and I do not count it against the page (low list, L6). |

## The sibling table

The word count is the rendered article from the byline to the sources line. It leaves out the sources, the photo credits and the H1 block, so it runs about 70 words lower than the v14b method. A phone screen is 844 px at 390 px wide.

| | Del Webb NMB | Grande Dunes | Myrtle Trace | Seasons |
|---|---|---|---|---|
| Words in the article | about 1,560 | about 1,560 | about 1,490 | about 1,370 |
| Phone screens, whole page (article only) | 23.0 (19.9) | 22.3 (19.3) | 21.3 (18.3) | 20.0 (17.0) |
| Photos and aerials, plus our map | 6, plus map | 4, plus map | 4, plus map | 4, plus map |
| Pictures of the neighborhood itself | 3, plus the labelled beach view | 4 | 2 | 3 |
| Drawn cards | 4 | 3 | 4 | icons only |
| Must-answers covered (12) | 8 full, 3 part, 1 missing | 11 full, 1 missing | 11 full, 1 part | 11 full, 1 part |
| Longest section, in phone screens (FAQ aside) | 3.1 (the town) | 2.5 (the homes) | 2.0 (the homes) | 1.7 (where, compare, flood) |
| Pros and cons (items) | 4 and 3 | 3 and 3 | 3 and 3 | 3 and 3 |
| Pros and cons, phone screens | 1.5 | 1.6 | 1.4 | 1.5 |
| Call-to-action boxes in the article | 4 | 4 | 3 (plus a line in the fence section) | 4 |

What the must-answer gaps are:
- **NMB:** gated or not (missing). Guests and grandchildren, clubs and events, and pets and fences inside the neighborhood are each partly answered; they wait on the HOA's recorded rules.
- **GD:** gated or not (an owner question).
- **MT:** golf carts inside the neighborhood (partly answered).
- **Seasons:** clubs and events (partly answered).

The "homes for sale" offer now covers item 12 on all four pages, through the contact form, since the site has no listing search.

Is one page plainly the weakest? No. Seasons is still the shortest, by about 120 words and two phone screens. But its cons are now as useful as the others: the flood item replaced a fee, and the gate is in the FAQ. It also has the one real story in the set. The four pages now differ mostly in subject, not in quality.

## The pros and cons, judged again

- **Expert or records?** Expert, on all four. No item names a document or a method. The "what to do" lines are what an agent says out loud: "Ask which streets are finished before you choose a lot." "Ask how old the roof is before you make an offer." "Ask an agent to read the rules with you before you make an offer." "An agent checks the flood map for the house you like before you offer."
- **Said twice?** The repeats v14b named are gone. What is left is the normal overlap of a summary list. Seasons' flood con and the next section's first sentence both say "one corner touches the high-risk flood zone", one line apart. That is the review's own suggested wording, and it reads as a lead-in, not an echo.
- **Things acting?** Every v14b case is fixed. One new pro on NMB comes close: "The builder's warranty on the home's structure stays with the house when it sells." The house sells, and the warranty stays (low list, L1). The P10 check passes it. It is also a second wording of a fact the homes section already states with a person acting: "which a later owner keeps".
- **On a phone?** Good. One column, tinted cards with a brass or dark top rule, reading-size text, plain headings, about a screen and a half. At 1280 px the two cards sit side by side.
- **A verdict on the builder or the HOA, or on who lives there?** None.

## What I would send back (must fix)

### 1. Grande Dunes, the Ocean Club clubs sentence

Now, in "What is the Grande Dunes Ocean Club?":

> The Grande Dunes Ocean Club is the beach club for all of Grande Dunes, about 8 minutes by car from the Del Webb clubhouse. Your HOA fee includes your membership.
>
> Grande Dunes is a large area of neighborhoods and golf courses in Myrtle Beach. Del Webb is one neighborhood inside it.
>
> Its clubs include mahjong, knitting and Mexican Train, a dominoes game.

- Before v14c, "Its" came right after the Ocean Club sentence. The reorder put it after "Del Webb is one neighborhood inside it." Read once, "its clubs" now means Del Webb's clubs, or Grande Dunes'.
- That is the stretch ledger row 78 warns about: the clubs belong to "the Ocean Club, which serves all of Grande Dunes, not the Del Webb clubhouse" (CRAFT 2, group).
- It also breaks CRAFT 5: "Each sentence must be safe if quoted alone." An answer engine that lifts "Its clubs include mahjong ..." has no subject.
- A buyer who reads it as Del Webb's own clubs will ask at the clubhouse and not find them.

**Fix:**

> The Ocean Club has clubs for mahjong, knitting and Mexican Train, a dominoes game.

This adds no fact, uses the same row, and leaves the section's order as v14b asked.

## Low findings (a list, not a new version; they do not lower a grade)

- **L1. NMB, the warranty pro.** "The builder's warranty on the home's structure stays with the house when it sells." **Fix:** "If you sell, the next owner keeps the builder's warranty on the structure." A person acts, and it matches the homes section ("which a later owner keeps").
- **L2. GD, the first sentence under "What is there to do?"** "The clubhouse in Del Webb at Grande Dunes is also called the amenity center. The clubhouse has ..." **Fix:** "The clubhouse in Del Webb at Grande Dunes has an indoor pool, an outdoor pool, a fitness center and an arts and crafts room. The builder calls it the amenity center." The answer comes first, the search word stays, and the two sentences do not open the same way.
- **L3. NMB, the pros and cons intro.** "... has new homes about a mile from the ocean, and the builder is still selling new homes." **Fix:** "... and the builder is still selling."
- **L4. NMB, two offer boxes within one phone screen.** "Get the list" ends the costs section, and "Get a quote" ends the short flood section under it. The two buttons are about 0.9 screens apart. **Fix:** move "Get the list of Del Webb North Myrtle Beach homes for sale." to the end of the homes section, after "New homes come with:". That is where Grande Dunes and Myrtle Trace put it, and it follows the homes the reader just pictured.
- **L5. Myrtle Trace, the comparison table.** It says "About $95". Everywhere else the page says the exact "$95 a month". The other three rows are rounded, so this one is a judgment call. It is in the shared table.
- **L6. Seasons title.** See the SEO table. If the coordinator wants "Pros and Cons" in the title, "Seasons at Prince Creek West 55+: Pros and Cons | Chapter3" (58 characters) costs about one S1 point and nothing else. I would accept either.
- **L7. The fee has three names.** Grande Dunes calls it "HOA dues" (short answer), "HOA fee" (Ocean Club), and "HOA bill" (costs and pros). The other pages mostly say "HOA fee". This was there before v14c.

## Does every photo show what its section is about?

Yes. All 18 images are unchanged from v14b, byte for byte, and each still sits beside the sentence it shows.
- Del Webb pages: the clubhouse close-ups, the houses and villas, the whole-neighborhood outlines.
- North Myrtle Beach: the labelled beach view, the beach chairs and the Cherry Grove Pier.
- Myrtle Trace: the riverwalk and Main Street in Conway.
- Seasons: the Murrells Inlet marina.

None is decorative, none has a date in its caption, and none is a builder or listing image. The v14b note on the faint line at the left edge of the Grande Dunes "Houses" close-up still applies (low, and not visible on a phone).

## The stories, read once, out loud, then covered

No story changed in v14c. Only the Grande Dunes grandchildren section's lead sentence gained the place name. All four pass the cold retell. I did not reread.
- **NMB:** Frank and Joyce wanted weekly vacation renters while they spend summers in Michigan, but renters must stay 30 days, so their agent caught it before they signed and they planned one summer renter.
- **GD:** Bill and Nancy wanted their grandsons all summer and at Christmas, but that is about two weeks over the limit, so their agent caught it before the offer and they cut two weeks from summer.
- **MT:** Pat wanted a fenced yard for her dog, but a golf course house cannot have one, so her agent showed her a dog run is allowed and she made her offer.
- **Seasons:** Carol and Jim liked a house whose back is in the flood zone, so their agent got a flood quote that afternoon and they offered knowing the cost.

Each is the last section before the FAQ, with a real problem the agent caught. The v14b note stands for the next batch: three of the four turn on "their agent reads the rules with them".

## What the pages still do not answer that buyers search

These are research or owner gaps, not fixes for this round:
- **NMB:** gated or not; pets, guests and fences under the HOA's rules; how many events the HOA runs.
- **GD:** gated or not (owner question).
- **MT:** golf carts on the neighborhood streets.
- **Seasons:** clubs and events. "Photos" is a search suggestion, and a ground photo of the clubhouse from the shot list would help most here.

## The grade, as him

- **Del Webb NMB, 9.** Every line I sent back is fixed. The beach sentence is plain again: you drive, golf carts only cross. The cons are short and honest. The warranty pro and the two boxes close together are small.
- **Del Webb at Grande Dunes, 8; 9 with the one line.** The title, the Ocean Club opener and the homes opener are all better. But moving the Ocean Club sentence up left "Its clubs" pointing at Del Webb. A buyer will think the mahjong club is at their own clubhouse. One sentence fixes it.
- **Myrtle Trace, 9.** The first pro is plain, $95 is said where it belongs, and the cons are three real things with the best "what to do" line in the set (the roof).
- **Seasons, 9.** The cons now name the one real risk on the page and lead into its own flood section and story. The gate is answered in the FAQ. It is the shortest page, but no longer the weakest.
