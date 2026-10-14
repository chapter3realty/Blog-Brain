# Batch 2026-10-b, round 14: the owner's third read

The owner's words are in voice/VERDICTS.md (2026-10-14, third read). The root causes are lessons B39 to B44 in research_notes/lessons-2026-10-b.md. The rules are in CRAFT 1, 3, 4 and 5. Read all of it before you change anything.

This round is a rebuild, not a patch. Keep every verified fact you can use. Throw away the shape and the voice wherever they fail the rules below.

## What every page must do

1. **Research what this page's audience would pay to know.** Write that list first, from the audience brief below and from the top three Google results for the main query, which you read and note. Then research each place against that list. Do not print a field because it is easy to fetch.
2. **No preamble.** The short answer, then one offer box, then the selection guide, then the first place, all within about two phone screens of the H1.
   - The selection guide is the only list of places before the entries. It groups the places by what each does best, by feature, never by who lives there.
   - One map, and it may sit inside the guide.
   - Cut any illustration whose point a reader cannot see in a second.
   - A comparison table goes after the entries, only if a reader would use it, with plain column names.
3. **Sell each place like the best agent in town (CRAFT 5).**
   - Lead with the best thing a buyer could not have guessed.
   - Then say what a normal day there is like and why people choose it.
   - Then give one honest trade-off, then the price in one plain sentence, then the place's own offer.
   - Gloss the obvious, such as a pond or a pool.
   - No "The facts:" label and no field lists.
   - No "stunning", "nestled", "boasts" or "world-class": the specifics do the selling.
4. **An offer for every place.** Each entry ends with a short offer for that place, for example "See homes for sale in X" or "Book a showing in X". It links to the contact form with the place named. The page's main offer box stays near the top and at the end.
5. **Modern design.** Use the liquid-glass theme from the design agent (batches/2026-10-b/DESIGN-GLASS.md, when it lands) for the background, cards, icon chips, maps, charts and offer boxes. Charts must be clean and modern.
6. **Facts.** Every claim still rests on a verified row. New facts get rows marked "pending verification (round 14)". Respect the struck lists, the distance-word rules and fair housing.
7. **Gates.** Run every gate after every change:
   - score.js 100;
   - build.js check and audit;
   - repeat-check --strict;
   - struck-check --strict;
   - image-meta and photos check;
   - npm test.

## Audience briefs

- **Gated communities** (/buyers/gated-communities/). The searcher has money and wants a lifestyle, privacy and service. They want to know:
  - the club: golf, who designed it, which tournaments it hosted, whether membership is required;
  - the water: the marina, slips, a beach club, oceanfront;
  - how the gate works, whether it is staffed, and how guests get in;
  - what the HOA does for them, such as yard care and private roads;
  - the social calendar and the dining;
  - the architecture and the views;
  - what makes the place known locally.

  The owner: "find whats unique talk about why people would want to live there then mention price then move to the next location." The page must stop repeating its list, map and table, and get to the first community fast.
- **Best neighborhoods** (/buyers/best-neighborhoods/). The searcher is moving here or moving up and does not know any names. They want help choosing by what they love: the beach, golf, boating, a town center they can walk, new homes, space and value. Give each neighborhood its unique daily life. No list twice. No photos whose point is unclear.
- **Homes with no HOA** (/buyers/no-hoa-homes/). The searcher wants freedom:
  - a boat, an RV or a work truck at home;
  - a shed or a workshop;
  - the right to rent;
  - land and older character, with no fee.

  The owner: "get as many areas in and around the city circle them say all of the houses in this area have no HOA or most of them don't and then speak extensively on all of the benefits of that location and why people like it one line about the average price of the house and do that for as many areas as possible."

  So:
  - Use one map with each area circled and named.
  - For each area, give the share of homes with no HOA fee from the listing or county data ("almost all", "most"), then extensive selling on the area, then one line on the typical price.
  - Cover many more areas than eight, in and around Myrtle Beach and the Grand Strand: older city streets, beach towns, river towns, the country around Conway, Loris, Aynor and Longs.
  - Keep the price bands for the owner's leads, short.
- **Most affordable places** (/buyers/affordable-places-to-live/). The searcher is a first-time or budget buyer who fears giving up a good life to afford a home. Sell them on what each place gives:
  - the amenities, the new-home features and the parks;
  - the commute, the schools, the shops, the river or the beach close by;
  - the room to grow.

  The owner: "heres affordable homes here's all the amazing things about the location and property call us to book a showing." The chart at the start should be sleeker, and it should list each place's best feature beside its price.
- **The Farm at Carolina Forest** (/submarkets/carolina-forest/the-farm/). The owner liked it. Apply the same voice: sell daily life there, with no "facts" lines, a modern design and an offer to see homes there.

## Fair housing

Group places by features, never by people. No "great for families", "retirees", "young professionals", "safe" or "quiet neighbors". Legal 55+ communities may be named as 55+.

## Then

Each page lead reports:
- the audience list;
- the competitor notes;
- what changed;
- the new pending rows;
- a screenshot path at 390 and 1280 px.

Fresh verifiers check the new rows. A fresh reviewer reads all five pages with the updated prompts/owner-eye.md, which starts with the sale.
