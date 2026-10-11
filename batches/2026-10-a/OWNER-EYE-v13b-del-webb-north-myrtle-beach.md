# Owner's eye: Del Webb North Myrtle Beach (v13, second read)

**Score: 8 out of 10. Independent reviewer.** I did not write this page. It does not go to the owner until items 1 to 4 are done. Each one is a sentence or a placement, not a rewrite.

Page: `/buyers/55-plus-communities/del-webb-north-myrtle-beach/`, preview `scratchpad/preview/final/del-webb-north-myrtle-beach.html` (spec header "Version 13"). Read on 2026-10-11 by following `prompts/owner-eye.md`:

- I read the owner quotes in `voice/RULES.md`, newest first, and the last 50 records of `voice/edits.jsonl`.
- No batch has an approved `MODEL.md`.
- I took my own Playwright captures at 390 px (22 screens, after a slow scroll so every lazy image and fade-in loaded) and at 1280 px. They are in `scratchpad/oe13b/`. I took the same captures of the other three pages.
- I pulled each image out of the page at full size and looked at it.
- I checked the rental, ER, parking and photo rows in `facts/del-webb-north-myrtle-beach-facts.md` and the story against `stories/stories.json`.

The owner's question was: "the first page about del webb seems less good than the other ones the maps photo above is low quality and theres only the one and its alot shorter why is that?"

## Is it now as good as the other three?

| | Del Webb NMB | Grande Dunes | Myrtle Trace | Seasons |
|---|---|---|---|---|
| Words in the article (my count, main text) | about 1,880 | about 1,740 | about 1,650 | about 1,520 |
| Pictures (photos and aerials) | 6 | 4 | 4 | 4 |
| Pictures of the neighborhood itself | 2 | 4 | 2 | 3 |
| Phone screens | 22 | 22 | 21 | 19 |
| A labeled close view of the clubhouse | no | yes | no | yes |
| Cards for pets, guests, renting, carts | no | yes | yes | yes |

- **"Its a lot shorter."** Fixed. It is now the longest of the four.
- **"There's only the one."** Fixed in count: six pictures. But four of the six are of the town, and only two show the neighborhood. Both of those sit at the top of the homes section. The "things to do" section shows the clubhouse only as drawings. Grande Dunes and Seasons each show their own clubhouse from above with labels. A reader comparing pages will still feel this one shows less of the place.
- **"The maps photo above is low quality."** The blurry 2023 aerial is gone. The 2026 NOAA overview is sharp at full size (1200 x 900) and on a phone. Two smaller problems remain (items 5 and 6). The beach-to-neighborhood aerial is the most "map-like" picture left, and on a phone it reads as gray texture with no labels.

## What I would send back

### 1. "Pulte also lists clubs and activity groups for owners."
- The owner's own bad example under BUYER-3 is "Pulte lists lawn care and a TV package." This is the same sentence shape. "Pulte" is the industry name he flagged under BUYER-2. The sentence also raises a question it does not answer (P5): which clubs?
- The verifier will not let it be said plainly, because it is the builder's claim. P9 says that if there is no good data on a topic, do not mention it.
- **Fix:** cut the sentence. The community center paragraph right below it already tells the reader what there is to do.

### 2. "They choose a house plan in Del Webb North Myrtle Beach and are ready to sign the builder's contract."
- "House plan" is the industry word the owner corrected ("Pulte and its three 'plans'").
- **Fix:** "They pick out a new house in Del Webb North Myrtle Beach and are ready to sign the builder's contract."

### 3. The rental section's first sentence does not answer its heading
- Heading: "Can you rent out a home in Del Webb North Myrtle Beach?"
- First sentence: "Under the city's plan for the neighborhood, renters must stay at least 30 days."
- It never says yes or no (RULE 5: the answer comes first). "The city's plan for the neighborhood" is the phrase `voice/STORY-SIMPLE.md` already lists as a word the reader has to look up.
- Row 75 says the HOA's own rental rule today is not confirmed. So the answer must not promise that renting is allowed.
- **Fix:** "Not by the week. Under the city's rules for this neighborhood, renters must stay at least 30 days." Keep the link on "the city's rules".
- In the story, change "their Chapter3 agent reads the city's renting rules for the neighborhood with them" to "their Chapter3 agent reads the renting rules for the neighborhood with them". The CTA under it says the agent reads the HOA documents, and the service on record (`hoa-rental-bans-filtered`) is reading the HOA documents. The story should not show the agent reading only the city's paper.

### 4. Too many numbers in "What is North Myrtle Beach like?"
- The owner's third-party reader said "there's too many numbers" (PLAIN-2: two or three a section, not ten). This section has about ten:
  - "more than 240 paths";
  - 35 mph;
  - 10 a.m. to 4 p.m.;
  - US 17;
  - 7, 15, 10, 2 and 4 minutes.
- It also runs about four phone screens, the longest section on the page.
- **Fix:**
  - (a) "The city keeps more than 240 paths to the beach and dozens of public parking spots" becomes "The city keeps hundreds of paths to the beach and dozens of public parking lots." The exact count only shows what we know (P8).
  - (b) Put Main Street, the Cherry Grove Pier, Barefoot Landing, Central Park and Ingram Dunes in an icon card grid. Each card gets its name, one line on what it is, and its minutes, like the hero chips. Take the minutes out of the sentences. A grid may hold more numbers than prose, and it shows the places instead of listing them (P4).
  - Keep the dog hours. A dog owner acts on them.

### 5. Two aerials stacked back to back in the homes section
- The overview and the street close-up sit one under the other, with only captions between them. On a phone that is a screen and a half of aerial photo with no text, and the street one does not sit beside its sentence (P10).
- **Fix:** put the street close-up right after "Most homes in Del Webb North Myrtle Beach are one story ... 1,400 to 2,700 square feet." Put the overview after "The homes sit on short streets around ponds, with the clubhouse, pools and courts in the middle of the neighborhood." Each picture then sits under the sentence it shows.

### 6. The beach-to-neighborhood aerial has no labels
- Caption: "From the air: the beach at the left, US 17 in the middle, Del Webb North Myrtle Beach at the right."
- At 342 px wide on a phone, the reader cannot find US 17 or tell where the neighborhood starts. The caption makes them hunt. Of all the pictures, this one is most likely to get "maps photo" and "low quality" from the owner again.
- **Fix:** add three labels the same way the overview has "Clubhouse": "Beach", "US 17" and "Del Webb". If labels cannot be added, cut this picture. The drive-time map one sentence below already shows where the place is.

### 7. Add a close view of the clubhouse to "What is there to do?"
- The section opens "The clubhouse has a gathering room, an arts and crafts room and a fitness center." The only pictures in it are four drawings.
- Grande Dunes and Seasons each show their own clubhouse from above, with the pool and courts labeled. The same 2026 NOAA tiles (row 103) cover this clubhouse. In the overview it is the small "Clubhouse" dot.
- **Fix:** cut a close aerial of the clubhouse, outdoor pool and courts from those tiles. Label "Outdoor pool" and "Courts" and put it under that first sentence. That brings the neighborhood's own pictures to three, and it answers "theres only the one" for the part of the page about the place.

### 8. "Grand Strand Health's North Strand ER, an emergency room open day and night, is about a mile and a half away."
- Every other distance on the page is in minutes. This one is in miles, right after a chip and a map that say "Hospital, about 10 minutes". The reader cannot tell which one is closer.
- "Grand Strand Health's" is a company name the reader does not need (P8).
- **Fix:** "For an emergency, North Strand ER is closer. It is open day and night, about a mile and a half away." (Row 53 gives miles only, so do not convert to minutes.)

### 9. "The map shows the drive times by car. In our experience, rush hour adds 5 to 10 minutes."
- The first sentence talks about the page (RULE 4).
- **Fix:** use one sentence, as Grande Dunes does: "In our experience, rush hour adds 5 to 10 minutes to the drive times on the map."

### 10. "The way to the nearest beach path runs along a short stretch of US 17, where golf carts may only cross."
- The reader has to reread "where golf carts may only cross" to see why it matters.
- **Fix:** "To reach the nearest beach path, you would drive a short way along US 17, and golf carts may only cross it. Plan to take your car to the beach."

## Smaller things, not graded

- **The pier photo is the weakest picture.** It is a hazy point-and-shoot shot. The bottom 40 percent is gray water, and the tall hotel is bigger than the pier. It is on topic, beside the pier sentence. Crop the water off the bottom (to 16:9) so the pier fills the frame.
- **The marsh aerial** is beside "Heritage Shores Nature Preserve has boardwalks and docks over the water". The boardwalks cannot be seen in it. Its caption adds "canal homes", which the text never mentions. It is acceptable. A "Heritage Shores" label would tie it to the sentence.
- **Both neighborhood aerials are from January.** Lawns are brown, and the northeast corner of the overview shows graded lots under construction. The v13 self-review said "No bare dirt shows in either". That is not quite right. It is still better than the 2023 aerial, and the owner should know the reason: January is the newest sharp flight.
- **Pickleball is named four times:** the clubhouse card, the community center indoors, the free courts behind it, and Central Park. Once in the park sentence is enough. Cut "and tennis and pickleball courts" to "and tennis courts" only if the section needs to be shorter after item 4.
- **The beach parking card** says "City residents register each year, and the car's license plate is the pass." The reader will ask what registering gets them. Row 92 says the city does not say what the pass costs or allows, so leave it. The free hours in the same card are the useful part.

## Does every photo show what its section is about?

- Five of six do, each beside its sentence: the overview, the street, the beach chairs, the pier and the marsh.
- The beach-to-neighborhood aerial is on topic, but without labels it cannot show what its sentence says (item 6).
- No photo is off topic.
- No date in a caption or in the credits.
- The licenses are on record in `data/photos.json`: NOAA public domain, CC BY-SA 4.0 with credit, and Commons public domain.

## Is anything hard to read? Dates? Questions not answered?

- **Dates:** the only date is "Updated October 5, 2026" in the byline. "Each summer", "in the last year" and "mid-May to Labor Day" are fine. P6 passes.
- **Numbers:** the town section is too dense (item 4). The other sections have two to five round numbers each. The compare table holds 16, the same as on every page.
- **Questions:**
  - "Can you rent out a home?" is answered only sideways (item 3).
  - "Pulte also lists clubs" raises a question it cannot answer (item 1).
  - Every FAQ answers its own question.
- **Terms:**
  - "house plan" (item 2).
  - "Pulte" in the body (item 1). In the FAQ it is fine, because that FAQ asks who the builder is.

## Is there a story near the end with tension, showing Chapter3's skill?

- Yes. It is the last section before the FAQ.
- Read once, out loud, then covered: Frank and Joyce wanted to rent their new house by the week while they spent summers in Michigan. Renters there must stay at least 30 days, so their agent caught it before they signed, and they planned on one renter for the summer. I did not count or reread. It passes the cold retell.
- Two word fixes are in items 2 and 3.

## What did the page forget that a buyer types into Google?

- **Pets, guests and fences inside the neighborhood.** The other three pages each have a card block for these. This page cannot have one, because the recorded HOA rules (rows 5 and 7) are not online. Leaving them out is right under P9. But the gap is a large part of why the page will still feel thinner than the others. Getting the 2026 rules and regulations (Book 5032, Page 1405) from the HOA's manager is the one research task that would close it.
- **The one-time fee when you buy.** Grande Dunes and Seasons both give it. This page has no verified row for it.
- **Golf nearby.** North Myrtle Beach buyers ask about it, and a course shows in the overview aerial. There is no verified row.
- **Can I drive a golf cart inside the neighborhood?** The city rules are on the page. The HOA's rules are unread.

## Grade

8 out of 10. The three things the owner raised are handled in count and length. It is now longer than the other three and has more pictures. Two lines are the owner's own bad examples, put back: "Pulte also lists" and "house plan". The town section has the too-many-numbers problem his reader named first. The rental answer does not say yes or no. With items 1 to 4 done, it is a 9. Items 5 to 7 are what would make it look as good as Grande Dunes on a phone.
