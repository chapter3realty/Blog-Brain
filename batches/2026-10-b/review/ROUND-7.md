# Batch 2026-10-b, round 7: the owner's first read

The owner read the best-neighborhoods page on 2026-10-14 (voice/VERDICTS.md):

> make the first CTA more of a CTA. i read What are the best neighborhoods in Myrtle Beach? Sorted by what you want close to home. its's too jumpy and alot about price instead of the amenities. why not keep the beginning and then actually give me a decent amount of information about each community and it counts 1. 2. 3. 4. 5. all the way to 15 where we discuss amenities mostly gloss over price people need to know price but its not the main focus focus on what the house and location gives you. and make it easier to read such as the first 2 pages and then after that have a headline for that community and a few paragraphs and photos and then the next. i havnt read the other 4 yet but maybe this advice is helpful their too

The reader's loss: they came to picture living in a place and got a sorting tool, tables and prices. They had to jump between cards and tables to learn about one place. The first offer looked like a link.

## For every page

1. **The first offer is a real offer.** Use the same boxed offer component as the last one on the page (`h.cta` or what the page uses at the bottom), placed right after the short answer. It has a headline that says what the reader gets, one plain sentence, and a large button with the page's one label. Example for best neighborhoods: headline "Tell us what you want nearby. We'll send three neighborhoods that fit, with the homes for sale in each." Promise no time we have not verified.
2. **Life before price.** Lead each place with what the homes and the location give the owner: the kind of homes, the pools, the clubhouse, golf, the beach, the parks and the shops close by, what a normal day is like. Price and the HOA fee appear once per place, in one plain line. Keep the yearly-cost section, short.
3. **Keep what was praised:** the short answer, our own maps, icon rows with words, real stories, the pros and cons.

## A list of places (best neighborhoods, gated, affordable, no HOA)

After the opening (hero, short answer, the offer box, the numbered map), give each place its own numbered entry in one order:

- an H2 headline: the number, the place, and what it is best for ("1. Cherry Grove: walk to the beach in North Myrtle Beach");
- a few short paragraphs (about 120 to 200 words in all): the homes, the amenities, what is close by and what it is like to live there, from verified rows;
- one photo of the place: an aerial from NOAA or NAIP with labels, or a license-clean ground photo. Photos from the photo partner will replace or add to these later (`templates/photo-request-email.md`);
- the trade-off, in one line;
- price and HOA fee, in one line.

Then, after the list, one table of all the places side by side for the reader who wants to compare numbers. Cut the want cards, the tables by area and any section that repeats the entries. A short "best for" index (a line or two naming the numbers for each want) may stay above the list if it helps, as plain links to the entries.

Each page applies this where it fits:

- **Best neighborhoods:** all 15, as the owner asked. The 55+ section shrinks to a short pointer to the 55+ pages.
- **Gated communities:** each gated community gets its numbered entry: what living there gives you (golf, the beach club, pools, the marsh or the ocean), the kind of gate, then price and fee in one line. Keep the one-line safety answer at the top and its section after the list.
- **Most affordable places:** the subject here is price, so price stays in front. But each place gets what living there is like: the downtown, the river or the parks, the shops, the drive. Number the places.
- **Homes with no HOA:** the "where" section becomes numbered areas, each with what you get there (land, room for a boat, older homes, near the beach), then price in one line. The boat and truck section stays.
- **The Farm:** one community, already led by its amenities. Make the first offer a real offer, and check that price is not ahead of the amenities anywhere.

## Facts

Amenity facts need verified rows like every other fact. Research what each place has (pools, clubhouse, golf, beach access, parks, paths, docks, shops and restaurants within a few minutes, the kinds of homes and when they were built) from primary sources: the HOA's own site or documents, the county, the town, OpenStreetMap for what is nearby. Add rows marked `pending verification (round 7)`. A verifier checks them before the page ships. Never a builder or listing photo, never a claim about who lives anywhere.

## Then

Rebuild, run every gate, refresh the preview, commit only your own paths (`git commit -- <paths>`), push, and report: what changed, the pending rows, and the list of places that need a ground photo from the photo partner. Do not grade your own page.
