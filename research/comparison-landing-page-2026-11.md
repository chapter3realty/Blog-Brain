# The comparison landing page: research and the plan for "Which town fits you?"

Owner, 2026-11-07: "im looking at the which town near myrtle beach fits you blog ... please do alot of research on hwo to make the perfect landing page for a blog that humans will like and ranks well because its too ugly"

## What is wrong with the page now (screenshots, 1440 and 390 wide)

1. **The first screen has no answer.** It shows a four-line headline, a byline and one sentence. The right 40 percent of a desktop screen is empty.
2. **One narrow column all the way down.** Text and photos sit in a 720 px column on a 1440 px screen. The page is 23,000 px tall on a desktop and 40 screens on a phone.
3. **Thirteen identical blocks.** Each place has a heading, a paragraph, a full-width satellite photo, a paragraph and a price box. Readers cannot tell the places apart at a glance.
4. **Satellite photos are the main images.** From above, the towns look the same: trees, roofs, roads.
5. **The comparison comes last.** The chart of price and yearly cost sits after all thirteen places.
6. **Too many boxes inside boxes.** Cream cards with shadows on a cream page, with chips, cards and offer boxes all styled differently.

## What the research says

**People judge a page in a fiftieth of a second, and prefer simple and familiar.** Google's own study (Tuch et al. 2012) showed people sites for 17 to 50 milliseconds. Sites with low visual complexity and a familiar layout were rated most appealing, and the judgement was formed in that first instant. ([Google Research](https://research.google/blog/users-love-simple-and-familiar-designs-why-websites-need-to-make-a-great-first-impression/), [paper](https://research.google/pubs/the-role-of-visual-complexity-and-prototypicality-regarding-first-impression-of-websites-working-towards-understanding-aesthetic-judgments/))

**Looks decide trust.** In Stanford's credibility study of 2,684 people, design and look was the most-mentioned reason for trusting a site, in 46 percent of comments. ([coverage](https://clickz.com/study-for-site-cred-looks-matter/56564/))

**The first screen gets most of the attention.** NN/g found readers spend about 57 percent of their viewing time on the first screen, and 74 percent on the first two. They read about 20 percent of the words. ([coverage of NN/g](https://www.verblio.com/definer/above-the-fold)) Google's page layout update (2012) also demoted pages where the content does not show "right away" on the first screen. ([Google](https://search.googleblog.com/2012/01/page-layout-algorithm-improvement.html))

**People scan headings like layers of a cake.** NN/g's eye-tracking shows readers jump from heading to heading and read text only where a heading earns it. The headings and the first line under each must carry the answer. ([NN/g](https://www.nngroup.com/articles/layer-cake-pattern-scanning/))

**Real photos are read; decorative and generic ones are ignored.** NN/g's eye-tracking found people look closely at real photos of the actual thing and skip generic ones, hence "real photos or none". ([NN/g video](https://www.nngroup.com/videos/decorative-images/), [summary](https://uxmyths.com/post/705397950/myth-ornamental-graphics-improves-the-users-experience))

**A comparison must give the same facts for every option.** NN/g: good comparison tables are simple and consistent, and give the same information for every item. A list view is better for comparing; cards are better for browsing. ([NN/g](https://www.nngroup.com/videos/ux-rules-comparison-tables/), [card vs list](https://www.nngroup.com/videos/card-view-vs-list-view/))

**On a phone, a wide table should shrink or stack.** Use filters and sorting so the right rows come first. Each item can become its own small card, rather than a table the reader pans sideways. ([Design Shack](https://designshack.net/articles/layouts/rethinking-table-design-for-mobile), [Foolproof](https://foolproof.co.uk/journal/making-product-comparison-work-on-mobile))

**The pages that win this kind of search lead with picks, then a list.**
- Niche and U.S. News show numbered cards, each with the same few facts and a link to homes. ([Niche](https://www.niche.com/places-to-live/search/best-places-to-live/), [U.S. News](https://realestate.usnews.com/places))
- NerdWallet-style pages open with one pick per need. ([NerdWallet](https://www.nerdwallet.com/l/awards2025))
- "Where to stay" guides give every area the same fields, plus one map. ([summary](https://lesdeuxpiedsdehors.com/en/where-to-stay/))

**Interactive tools convert better than static text.** A Demand Metric study found interactive content brings about twice the conversions of static content. ([Capterra](https://www.capterra.com/resources/how-to-use-quizzes-to-improve-your-online-conversion-rates/)) This is a vendor figure. Our own filter chips are the right idea, placed too low.

**Long lists are fine when they are easy to move through.** The guidance on long hub pages is a summary first, a contents list with jump links, and a way back up. ([Siteimprove](https://www.siteimprove.com/blog/pillar-page-design/))

## The plan

Facts stay exactly as verified; this is a layout change. No new number or name comes in, except the captions of photos we already hold a licence record for.

1. **First screen: the answer.**
   - **Desktop:** two columns. On the left, a shorter headline (two lines, not four), one sentence, the byline, and "Quick picks": one tile per need ("Closest to the sand", "Most land for the money", "New houses", "Lowest yearly cost", "Boats and the waterway"). Each tile names the place and jumps to it. On the right, the map we already have.
   - **Phone:** the headline, then the quick picks as a two-column grid, then the map.
2. **Second screen: the comparison.** One table with all 13 places and the same columns:
   - a typical house,
   - the yearly cost to keep it,
   - the drive to the beach,
   - the share in the high-risk flood zone,
   - city or county.
   A click on a column heading sorts it. The "what matters to you" chips filter it and the place list together. On a phone, the table shows the place and two numbers, with a menu to pick which two.
3. **The thirteen places: one card each, all the same shape.**
   - On a desktop the photo sits beside the text; on a phone it sits on top, kept short.
   - Every card shows a fixed facts row with icons and words: price, yearly cost, beach drive, flood. Then two or three sentences, then that place's offer button.
   - A real ground photo where we hold one (Conway, Loris, North Myrtle Beach, Myrtle Beach, Surfside Beach, Murrells Inlet, Pawleys Island). Elsewhere, the satellite photo, cropped small. The photo partner's list asks for ground photos of the rest.
   - Each card has "Back to the comparison".
4. **After the places:** the yearly-cost chart, the city-line table, the FAQ and the sources, as now.
5. **One visual system.**
   - One card style. No card inside a card. One button style for offers.
   - Real white space between places instead of boxes.
   - The page's width is used on a desktop; text lines stay 60 to 75 characters.

## How we judge it

- **The first screen test:** at 1440 by 900 and 390 by 844, a stranger can name a place that fits them without scrolling.
- **The gates:** `critic.mjs` at 320, 390, 1024 and 1440 (nothing cut off), `build.js audit`, `score.js`, and `trim-check` (no new facts).
- **The real test:** Search Console 4 to 6 weeks after release. This page was shown 2 times before Oct 27 and 10 times after, so its baseline is tiny. Watch its clicks, and the offer clicks in the leads inbox.
