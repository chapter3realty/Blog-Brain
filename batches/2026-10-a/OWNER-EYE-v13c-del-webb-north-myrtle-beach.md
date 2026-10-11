# Owner's eye: Del Webb North Myrtle Beach (v13b, third read)

**Score: 8 out of 10. Independent reviewer.** I did not write this page or the v13b review. It does not go to the owner until items 1 to 5 are done. Each one is a sentence, a card or a placement. None is a rewrite.

Page: `/buyers/55-plus-communities/del-webb-north-myrtle-beach/`, preview `scratchpad/preview/final/del-webb-north-myrtle-beach.html` (spec header "Version 13b"). Read on 2026-10-11 by following `prompts/owner-eye.md`:

- I read the owner quotes in `voice/RULES.md`, newest first, the last 50 records of `voice/edits.jsonl`, and `voice/STORY-SIMPLE.md`.
- No batch has an approved `MODEL.md`.
- I took my own Playwright captures (Chromium, slow scroll so every lazy image and fade-in loaded):
  - at 390 px: full page and each figure at 3x;
  - at 1280 px: 18 screens.
  - I took the same phone captures of the other three pages.
  - They are in `scratchpad/oe13c/`.
- I pulled all seven pictures out of the page at full size (1200 px wide) and looked at each one.
- I checked rows 32, 53, 69, 75, 76, 86, 88, 89, 98, 99, 101, 103 and 104 in `facts/del-webb-north-myrtle-beach-facts.md`.

The owner's words on this page: "the first page about del webb seems less good than the other ones the maps photo above is low quality and theres only the one and its alot shorter why is that?"

## Is it now as good as the other three?

| | Del Webb NMB | Grande Dunes | Myrtle Trace | Seasons |
|---|---|---|---|---|
| Words in the article (rendered text) | about 1,920 | about 1,720 | about 1,640 | about 1,500 |
| Pictures (photos and aerials) | 7 | 4 | 4 | 4 |
| Pictures of the neighborhood itself | 3, plus the beach view | 4 | 2 | 3 |
| A labelled close view of the clubhouse | yes | yes | no | yes |
| Longest section, in phone screens (FAQ aside) | 3.4 (the town) | 2.1 | 1.8 | 1.7 |
| Cards for pets, guests, renting, carts | no | yes | yes | yes |

- **"Its a lot shorter."** Fixed. It is the longest of the four.
- **"There's only the one."** Fixed. Seven pictures. Three show the neighborhood itself: a street, the whole neighborhood with its edge, and a labelled clubhouse. The beach view shows it too.
- **"The maps photo above is low quality."** Fixed. Every aerial is the sharp January 2026 NOAA flight. Each one is sharp at full size and on a phone. The beach view now has three labels ("Beach", "US 17", "Del Webb North Myrtle Beach"), and I can read them at 342 px wide.
- The pictures are now as good as Grande Dunes, and better than Myrtle Trace and Seasons. What keeps it below the others is five small things in the text (below). The biggest is that the town section is now the longest section on any of the four pages.

## The v13b review's fixes: each checked

| # | v13b asked for | Done? |
|---|---|---|
| 1 | Cut "Pulte also lists clubs and activity groups for owners." | Yes. |
| 2 | "house plan" to "pick out a new house" | Yes. |
| 3 | The rental section answers yes or no first; the story says "the renting rules for the neighborhood" | Partly. "Not by the week." comes first, and the story is fixed. But "the city's plan for this neighborhood" is still there (item 3 below). |
| 4 | Fewer numbers in the town section | Yes in the prose ("hundreds of paths", "dozens of public parking lots"), and the minutes moved into cards. But the section grew to 3.4 phone screens (item 4). |
| 5 | No two aerials in a row; each under its sentence | Yes. The street is under the "one story ... square feet" sentence, and the overview is under "short streets around ponds". |
| 6 | Labels on the beach view | Yes, and done well. |
| 7 | A labelled close aerial of the clubhouse | Yes, and it is the best picture on the page: "Courts", "Clubhouse", "Outdoor pool", sharp, right under the clubhouse sentence. |
| 8 | ER in minutes, no company name | Yes ("about 5 minutes by car", row 104 verified). One small wording fix below (item 7). |
| 9 | Rush hour in one sentence | Yes. |
| 10 | The US 17 golf cart sentence | Yes. |
| Small | Crop the pier photo | Yes, to 16:9. Still the weakest picture (item 9). |
| Small | A "Heritage Shores" label on the marsh aerial | No (item 4). |

## What I would send back

### 1. "HOA" is never spelled out on this page
- First use, in the costs section: "The HOA fee is about $315 a month, and it includes lawn care, internet and a TV package."
- The other three pages each say "homeowners association (HOA)" at first use. The cold reader on 2026-10-11 did not know "HOA" (`STORY-RETELL-v13.md`). PLAIN-1: write for a reader who knows nothing.
- **Fix:** "The homeowners association (HOA) fee is about $315 a month, and it includes lawn care, internet and a TV package."

### 2. The short answer has a sentence that reads wrong
- "Owners share a clubhouse with an indoor lap pool, an outdoor pool and a fitness center, plus courts for pickleball and bocce and walking trails."
- It reads as "courts for ... walking trails". It is also 27 words, near the 28-word limit, with three "and"s in a row (RULE 3).
- **Fix:** "Owners share a clubhouse with an indoor lap pool, an outdoor pool and a fitness center. There are also courts for pickleball and bocce, and walking trails."

### 3. The rental answer still uses "the city's plan", and the page contradicts its own hedge
- "Not by the week. Under the city's plan for this neighborhood, renters must stay at least 30 days."
- `voice/STORY-SIMPLE.md` lists "the city's plan" as a phrase the reader has to look up. The owner would ask "what plan?"
- The writer kept "plan" because row 75 says: "Do not state the HOA's rental rule today ... or that the 30 days is in force." But the page states it as in force twice anyway:
  - "Not by the week."
  - The story: "Every renter there must stay at least 30 days, so they cannot rent by the week."
- So the hedge costs the reader a plain sentence and protects nothing. The verifier's same note also says to keep the builder's 2-to-10-day visits for buyers "if the 30 days is quoted". The page leaves them out.
- **Fix: the coordinator decides one of these with the verifier.**
  - (a) Under P9 the 30 days is low risk and the reader can act on it safely, because the CTA right below says the agent reads the HOA documents before the contract. Then write: "Not by the week. Renters here must stay at least 30 days." Keep the source link on "30 days". The verifier records the decision in row 75 and drops the "in force" limit. The builder's visits for buyers can stay out (P8: a buyer cannot use them).
  - (b) If the verifier will not lift the limit, "Not by the week" and the story's sentence cannot stay either. Then the section and the story need new wording, and the story loses its problem.
  - I recommend (a). Either way, "the city's plan" does not go to the owner.

### 4. The town section is the longest section on any of the four pages
- "What is North Myrtle Beach like?" runs about 3.4 phone screens:
  - a beach photo;
  - 3 rule cards;
  - a paragraph;
  - 6 place cards, one per row on a phone;
  - the pier photo;
  - the marsh sentence and photo.
- The owner: "Split these up into different sections its too long". The prompt asks whether there is too much in one screen. Two screens of single cards is too much.
- Three changes:
  - (a) **Cut "Behind Cherry Grove is a wide salt marsh, with creeks winding through it." and the marsh aerial under it.**
    - The sentence was written to carry the photo. It tells the buyer nothing they can do, and the photo is not beside a place the page sends them to.
    - P10: "A photo of the area goes only beside the sentence about that place."
    - If the writer can show the Heritage Shores boardwalks are inside that frame, keep it instead. Put it right under the Heritage Shores card, with a "Heritage Shores" label and the caption "The salt marsh behind Cherry Grove, where the Heritage Shores boardwalks are."
    - Cutting it still leaves six pictures, more than any other page.
  - (b) **Put the six place cards in order of drive time, nearest first:** Central Park (2), Ingram Dunes (4), Main Street (7), Barefoot Landing (10), Cherry Grove Pier (15), Heritage Shores (20). Today the order jumps 7, 15, 10, 2, 4, 20.
  - (c) **"These places in town are a short drive away."** is not true of 20 minutes. Change it to "These places in town are close by car, nearest first."
  - If the card component can show two columns on a phone, like the clubhouse cards above, use them here. That alone halves the length.

### 5. Two cards that say nothing
- "Pickleball and bocce: Sports courts in the neighborhood"
- "Walking trails: Paths for a walk close to home"
- The title already says it. The line under each title repeats it. The owner's test: "an icon or card that says nothing."
- **Fix:** use what the pictures on this page already show:
  - "Pickleball and bocce: Courts beside the clubhouse" (the clubhouse aerial labels them).
  - "Walking trails: Paths around the ponds" (the street aerial's caption: "a pond and a walking path behind them").

## Smaller things, fix if cheap

6. **Beach parking card.** "City residents register each year, and the car's license plate is the pass." The reader asks: a pass for what? Row 92 says the city does not say what it allows (P5, P9). **Fix:** cut that sentence. Keep "Free early in the morning, in the evening and all winter."
7. **"For an emergency, North Strand ER is closer, about 5 minutes by car."** It does not say closer than what, and row 104 says to call it an emergency room. **Fix:** "For an emergency, the North Strand emergency room is closer than the hospital, about 5 minutes by car. It is open day and night."
8. **"To reach the nearest beach path, you would drive a short way along US 17."** "Would" is a hedge. **Fix:** "To reach the nearest beach path, you drive a short way along US 17."
9. **The pier photo** is still the weakest picture. It is hazy. The hotel tower is the biggest thing in it, and the pier fills only the lower left third. **Fix:** crop to the left two-thirds so the pier fills the frame and the tower is cut off. The result is about 800 px wide, which is still sharp at 342 px on a phone.
10. **The "Beach" dot in the beach view** sits on the first street, a block back from the sand. Move it onto the sand.
11. **Pickleball is named five times:** the short answer, the card, the community center indoors, the free courts behind it, and Central Park. Cut "and pickleball" from the Central Park card ("A city park with a paved walking path and tennis courts").
12. **"The city's J. Bryan Floyd Community Center"**: the full name is detail (P8). "The city's community center" is enough.
13. **Desktop (1280 px):** the street aerial and the clubhouse aerial show 320 px wide, while the overview and the beach view show 450 px. On a phone they are all the same width. Not something the owner reads on a phone. Make them one width if the template allows.

## Does every photo show what its section is about?

- The street, the overview and the clubhouse each sit under the sentence they show.
- The beach view sits under "To reach the beach, you drive across US 17", and its labels now show exactly that.
- The beach chairs sit beside the beach sentence, and the pier sits beside the pier sentence.
- The marsh aerial is the exception (item 4a).
- No photo is off topic or low quality. The pier is the weakest (item 9).
- Both neighborhood aerials are from January, so lawns are brown. The northeast corner of the overview shows graded lots, which is honest: the builder is still building.
- No date appears in a caption or in the credits. The licenses are on record.

## Dates, numbers, unanswered questions

- **Dates:** only "Updated October 5, 2026" in the byline. "In the last year", "summer Thursdays" and "mid-May to Labor Day" are fine. P6 passes.
- **Numbers:** the prose is now round and light. The town cards hold six drive times plus the dog hours, which a card grid may hold. Every other section has two to four round numbers. The compare table is the same as on the other pages.
- **Questions:**
  - Every heading is answered in its first sentence.
  - Every FAQ answers its own question.
  - The only open question is the parking pass (item 6).
- **Terms:** "HOA" (item 1) and "the city's plan" (item 3). "Intracoastal Waterway" in the Barefoot Landing card is a place name the reader can picture from "by the water". It is acceptable.

## Is there a story near the end with tension, showing Chapter3's skill?

- Yes. It is the last section before the FAQ, under the renting question.
- Read once, out loud, then covered: Frank and Joyce wanted to rent their new house by the week while they spend summers in Michigan. Renters there must stay at least 30 days. Their agent read the rules with them before they signed the builder's contract, so they planned on one renter for the summer and signed.
- I did not count or reread. It passes the cold retell.
- It has five sentences, one number, no "if", and one thing to picture (the contract on the table).
- The tension is mild, but real: they find out before the contract, not after.
- It depends on item 3. Whatever is decided there, the story's "Every renter there must stay at least 30 days" must match it.

## What did the page forget that a buyer types into Google?

- **How many events or clubs the HOA runs.** The owner asked for this himself (BUYER-7: "how many events do they hold for the community"). Grande Dunes says a lifestyle director plans activities. Row 76 verifies that the builder lists a "Full-time Lifestyle Director". v13b rightly cut "Pulte lists" as a sentence shape. The way back is a fact from the HOA or a resident, not the builder's list. This is a research task, not a fix for this round.
- **Pets, guests and fences inside the neighborhood.** The other three pages have cards for these. This page cannot, because the recorded HOA rules are not online. Leaving them out is right under P9. Getting the 2026 rules from the HOA's manager would close the last real gap with the other pages.
- **Golf nearby.** A course borders the neighborhood in the overview aerial. There is no verified row.
- **The one-time fee when you buy.** Grande Dunes and Seasons give it. This page has no verified row.

## Grade

8 out of 10. Every fix from v13b landed. The page answers all three of the owner's complaints:

- It is the longest of the four pages.
- It has the most pictures.
- Its aerials are sharp and labelled, and the clubhouse close-up matches Grande Dunes.

What keeps it from 9 is small:

- "HOA" is never explained, when the other three explain it.
- One short-answer sentence reads wrong.
- The rental answer still says "the city's plan" and contradicts its own hedge.
- The town section has become the longest section of any page, with a photo that is not beside its place.
- Two cards say nothing.

With items 1 to 5 done, it is a 9 and as good as the other three.
