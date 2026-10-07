# Rewrite brief: the four 55+ pages, simple first (2026-10-07)

The owner's third-party reader found version 4 "a very hard read": too many numbers, exact numbers, dates everywhere, words people do not know, price first, no pictures. The rules are class PLAIN at the top of `voice/RULES.md`. They come before every other rule. This is a rewrite from the top, not an edit.

## The test for every sentence

Could someone who has never been to South Carolina, knows no real estate words, and reads slowly, follow it and act on it? Would they miss it if it were gone? If either answer is no, rewrite it or cut it.

## Page shape

1. **Headline.** "What is it like to live in <Community>?" with a short subtitle about the place, never a price. Example subtitle: "A 55+ neighborhood about 5 minutes from the beach."
2. **First screen.** One short paragraph about the life: the homes, the clubhouse and pool, how close the beach is. Then the at-a-glance icon row (`tools/icons.js` `atAGlance`): beach, groceries, hospital, pool, clubhouse, and one or two that fit (golf carts, pets, events). Each with a plain line like "About 5 minutes by car".
3. **Where is it?** The drawn map (`tools/area-map.js` `areaMap`) with the community, its beach, grocery store, hospital, the airport and one known place, drive minutes on the map, then the live map under it (`liveMapHtml`). Two or three sentences, in minutes, naming places a visitor knows (the beach, the Boardwalk, the airport). No road names unless the reader needs one to get there.
4. **What are the homes like?** Size and style in plain words (one-story, how many bedrooms, a garage). No builder model names. Use a photo where one fits.
5. **What is there to do?** The amenities and events, with icons. What the buyer can do on a normal week.
6. **What is the area like?** Two or three licensed photos from `data/photos.json`, each with a one-line caption saying what it shows and the required credit line.
7. **Who can live there?** The 55+ rule in one or two plain sentences, and what it means for visiting family.
8. **What will it cost?** Later and softly. "Homes here usually sell for about $X." What the monthly HOA fee pays for, and the amount only if a verified row gives it. Property tax as one round number for a home you live in. What you pay the HOA when you buy, as one round number.
9. **Do I need flood insurance?** Answer in what it means: "Most homes here are not in a high-risk flood zone, so lenders usually do not require flood insurance. If you want it anyway, it usually costs about $600 a year." The lender sentence needs a verified row (FEMA: flood insurance is required on a federally backed loan only in a high-risk zone); add one to the ledger for the verifier if none exists. Never "Zone X" or "Zone AE".
10. **Quick answers.** Pets, golf carts, renting it out, fences, guests: one line each, yes or no first, with an icon.
11. **Example story.** Keep the buyer stories from version 4, with every number rounded and fewer numbers (three at most).
12. **FAQ and sources.** The FAQ answers in one or two sentences each. The sources line stays short.

## Numbers

- Round: dollars over $1,000 to the nearest thousand ("about $535,000"), under $1,000 to the nearest $50 or $100 ("about $600 a year"). Minutes as "about N minutes".
- At most three numbers in any paragraph. A table may hold more, but keep it to what the reader compares.
- The comparison table: Community, Town, Minutes to the beach, Homes usually sell for. Nothing else.

## Words

- Run every word in `rules/plain-words.json` past the copy. None may appear.
- Say what a thing means for the reader. "HOA" is spelled out once as "homeowners association (HOA)", then "HOA".
- No method, no "records show", no "according to". The sources line carries the sources.

## Questions

- Every heading that asks a question is answered in its first sentence with a fact.
- If no verified row answers it, delete the question. The offer to find out goes in a call to action, not an answer.

## Dates

- The date appears once, in the byline. Body copy says "in the last year" or "this year".

## Kept from before

All legal and business rules: no rate or payment, no conclusion about a named builder or HOA, fair housing (homes, rules and places, never the people), Devin only in the byline, no Paul, no Tim quote, BrickWood only in the disclosure. Every fact from a verified row. Drive rows are used only once verified.

## Gates

`score.js` now carries checks P1 to P8. Every page must score 100 with no blocker. Then the buyer readers and a reviewer, as before.
