# /buyers/homes-near-the-beach/: design

A new page (Lane N), version 1, 2026-11-08. Spec: `specs/buyers-homes-near-the-beach.js` in the website working copy. Screenshots: `wfn/buyers-homes-near-the-beach/shots/` in the scratch folder (390, 768 and 1440 px).

## What the page is

A buyer who wants a house, not a condo, a walk or a bike ride from the sand. They do not know the towns, the roads or what "east of 17" means. They worry that it costs far more, that it floods, and that "near the beach" in a listing means a drive. The job is to choose: how close to the ocean, and on which stretch of coast.

The page answers in that order:

1. The short answer: where these houses are, what a house within half a mile of the ocean sold for against one 2 to 5 miles inland, and the deciding fact (the price is highest in the first quarter mile; a quarter to half a mile back costs much less and is less often in the high-risk flood zone).
2. What they cost: our chart of county deed sales by distance from the ocean, the first tenth of a mile, price per square foot and size for houses for sale.
3. The walk: our walk from 721 houses for sale to the nearest public beach access, as three large numbers; houses that look close but are a long walk; how many public paths each town has; a worked example (1,000 feet in a straight line is about 1,100 feet on foot, about 4 minutes); three words in beach listings (east of 17, second row, walk to the beach).
4. Under $400,000: where the cheaper near-ocean houses sold and are for sale, with a map search.
5. Flood: the rule, our column chart of the high-risk share by twentieth of a mile, the share by stretch as three large numbers, what a FEMA policy cost.
6. The four stretches from north to south, each with its own heading, its best fact first, a photo where we have a lawful one, its price line, its links and its own offer; then one table of the three Horry County stretches side by side.
7. Pros and cons, two short lists.
8. FAQ, sources, legal notice, photo credits.

## Which approved treatment, and why

The pilots of batch 2026-11-a (selling by owner, Pawleys Island, HOA liens, condos), applied with judgment:

- **Two-line headline, the italic sub line at about half the H1 size.** Title and H1 say the same thing: the searched words, then one fact (about 1.7 times the price of a house a few miles inland). A dollar figure in the H1 failed the scorer's price-headline blocker (PLAIN-7), so the hook is the ratio from row 4.
- **The hero photo beside the key facts on a wide screen, after them on a phone,** as on the Pawleys Island pilot. The Garden City aerial shows the fact in one look: the oceanfront row, the rows behind it, the marsh. The three key facts are short rows on a phone.
- **No cards.** The stretches are read one at a time, as the Pawleys parts: a heading with a number that matches the map, a thin rule above it, a brass line under it. Cards would have put a box around each place with a photo inside it.
- **Plain lists and large numbers under thin rules** for the walk bands, the flood share by stretch, the three listing words and the pros and cons. One plain table, the stretches side by side, after the list of places (CRAFT 3).
- **One block width of 720 px** for the charts, the map, the lists, the table and the offers.
- **Wide screens use the empty right side:** the flood chart sits beside the paragraphs that explain it, and the photos in the stretches sit beside their paragraphs (380 px, float right). The price chart sat beside its paragraphs at first; at 380 px its bars disappeared and the prices spilled out of the card, so it went back into the column at 720 px.
- **Offers:** the slim bar under the short answer (your budget and how far you will walk), an offer box after the walk (we measure the walk from a listing and look up its flood zone), an offer box after the flood section (houses outside the high-risk zone), one small offer per stretch, and the full band at the end. No two use the same words.

## What was taken away after looking at the shots

- The town names on the map. Seven labels in the sea overlapped each other and the ocean label. The map keeps the four numbers, the key under it, the tan half-mile strip and the access dots.
- The price chart beside the text (see above).
- A sentence that repeated the same shape in two stretches.

## Our own visuals

- The map: the shoreline (Census TIGER/Line 2024), the land within half a mile of the ocean, and 451 public beach accesses (SCDES), turned so the coast runs across the screen. Short and wide on a phone, with a north arrow and a 5-mile bar.
- Chart 1 (bars): middle sale price by distance band, from the deed file.
- Chart 2 (columns): share of houses in the high-risk flood zone by twentieth of a mile to 1 mile.
- The share image: 16:9, 4:3 and 1:1 crops of the original USGS Garden City frame (public domain), in `images/2026-11-n/buyers-homes-near-the-beach/`, with metadata embedded.

## Open items for the lead

See `NEEDS.md`.
