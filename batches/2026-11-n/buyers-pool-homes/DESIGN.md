# /buyers/pool-homes/: design

Batch 2026-11-n, Lane N (new page). Built 2026-11-08 from `facts.md` (VERIFIED rows, CORRECTED rows in the verifier's wording), `findings.json` and `photos.json` in the website copy at `data/2026-11-n/buyers-pool-homes/`. Spec: `specs/buyers-pool-homes.js`.

## What the page is

A landing page for "homes for sale with a pool in Myrtle Beach". The reader wants to find the pool homes and know what one costs. The deciding fact sets the shape: a private pool is rare below the top of the market (257 of about 2,950 houses for sale; about 1 in 50 under $500,000). So the page says where they are and what they ask, then gives the cheaper way to a pool (a neighborhood pool), then the three things a buyer of a pool house runs into: the county's fence rule, an inspection that skips the pool, and the insurance and tax.

About 1,550 words of prose in six sections and a five-question FAQ.

1. Short answer: 1 in 11, $955,000 against $400,000, and the shared-pool route at about $435,000 and a $105 HOA fee. A text link to the live map search ("our map of pool homes for sale").
2. Where: one sentence on the coast (1 in 3 east of US 17), the Surfside Beach aerial beside it on wide screens, then our table by town with each town linked to its pool homes on the map.
3. Cost: the share of houses with a pool by price (8 bars), the same-size comparison, and why the gap is not the price of a pool.
4. Own pool or neighborhood pool: two cards, then the worked example (on $500,000: 37 houses with a pool against 827 in a neighborhood with one).
5. The fence rule: our numbered drawing with its key beside it, three more parts of the rule under thin rules, and the CPSC line.
6. The inspection: not by default, and what the inspector must say.
7. Insurance, property tax and the swimming season, under thin rules.

## Which approved treatment, and why

All four pilots (sell-fsbo, submarkets-pawleys-island, hoa-liens-and-foreclosure, invest-condos), as sell-cash-offer in this batch copied them:

- **Two-line headline, the italic sub line at about half the H1 size.** "Homes with a pool in Myrtle Beach" / "About 1 house in 11 for sale has its own, mostly at the top of the market." No price in the H1 (scorer P4).
- **The answer first,** then three hero facts as short rows on a phone (the fsbo and condos fix).
- **One card style, used once:** the own-pool or neighborhood-pool choice, the one place the reader chooses. Everything else is plain: the town table and the inspection and cost items under thin rules, the budget example as large numbers under a rule (fsbo's market card).
- **One block width of 720 px** for the table, chart, cards, drawing, lists and offers.
- **On wide screens a picture beside the paragraphs that explain it:** the Surfside Beach aerial beside "where they are" (Pawleys), and the fence drawing beside its numbered key, held in view while the key scrolls (liens' photo beside the steps).
- **Calm:** no map (the table already says where), no chart of the same-size gap (it would read as the pool's value), no second photo.

## Offers

- Slim bar under the short answer: "Want the pool homes in your price range? We will send them." / "Send us your price range". The build refuses a button to `/homes/map/` ("a button must convert"), so the live search is a text link in the short answer and in every town row instead.
- After the cost section: "Is that pool house priced right?" / "Have us price a pool house".
- After the inspection section: "Buying a house with a pool?" / "Have us look into the pool".
- End band: "Want a pool home? We will find it." / "Have us set up your pool-home search".

## What was changed after looking at the shots

- The town names in the table were the browser's default blue; they now use the page's navy with an underline.
- The drawing sits in a wider column and stays in view beside its key on screens 700 px and wider; the caption lost its stray indent.
- The meta description was 164 characters; it is 148.

## Left out, on purpose

- Upkeep cost a month (owner question 1), who inspects the pool for our buyers (owner question 2), a story (owner question 3), screen enclosures in storms (owner question 4).
- City pool rules inside Myrtle Beach, North Myrtle Beach, Conway and Surfside Beach (not verified). The page says the drawing is the county's rule and that each city may adopt its own.
- The link to the sibling /buyers/homes-near-the-beach/ (not built yet; NEEDS.md has the sentence).
