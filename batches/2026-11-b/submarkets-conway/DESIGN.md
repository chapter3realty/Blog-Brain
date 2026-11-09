# /submarkets/conway/: design pass

Reader: someone thinking of moving to Conway, to live there all year or to rent a house out. They want to know what the town is like, which part fits them, whether an address is in the city, which parts flood, and what a home costs to buy, own and rent.

Screenshots: `before/` (first-1440, first-390, slice-00 to slice-26 at 1440 x 900, phone-00 to phone-05 at 390 x 844).

## What makes the page good (keep all of it)

- The short answer says what Conway is, what a house costs against the county, and that only a few places flood.
- The living section sells the town the way a local would: the Riverwalk and the steamboat playground, City Hall by the man who designed the Washington Monument, the university, the growth.
- The city or county section, with the address chart and what the city line changes (tax, trash, police).
- The five parts of town: our own map of the homes in five colours, one numbered entry per part with its parks, its subdivisions, its lot size and its price, and a live homes strip in each.
- The flood section: the flood map under the homes, the river chart, the street table by river height, the subdivision table, the record and the buyouts.
- The flood insurance table, the yearly cost table, the price chart by town, the HUD rent table, pros and cons, the FAQ, the sources, the photo credits and every offer.

## What looks ugly, cluttered or hard to read

1. **The headline is four lines of giant type** (`first-1440.png`). The italic line is set at the H1's size, so it is as loud as the headline. The four drive times are four boxes. On a phone (`first-390.png`) the boxes are squeezed into 70 px columns, and "25 min drive" breaks into three centred lines.
2. **The contents list is a tall white card, one link per line** (`slice-02`). It adds a box ten lines tall between the offer and the first section.
3. **In each part, the homes strip sits in the middle of the text, and a pill button that offers the same homes follows it** (`slice-08` to `slice-11`). "Get the homes for sale in Downtown Conway" sits under a strip titled "Homes for sale in Downtown Conway now". The downtown and university photos only show when the strip is empty. In the living section the two photos sit in the text column in card frames, with the right half of the screen empty (`slice-03`, `slice-04`).
4. **Boxes for things that are not charts or offers, and a box inside a box.** The three maps have their own frame inside a white card (`slice-04`, `slice-05`, `slice-06`, `slice-12`, `slice-13`). The photos sit in card frames. The street table, the subdivision table, the flood policy table and the rent table each sit in a glass card (`slice-16`, `slice-17`, `slice-18`, `slice-21`). Pros and cons are two cards (`slice-22`). With this many boxes the charts and offers do not stand out.
5. **Ragged right edges.** Text ends at 720 px, the region map at 560, the photos and the other maps at 640, the street and rent tables at 760, the price chart at 820, and the yearly cost table runs out to about 1,120 px, wider than anything else on the page (`slice-04`, `slice-16`, `slice-19`, `slice-20`).
6. **The river chart's title puts three ideas in one line** (`slice-15`): "How high the river at Conway rose on its gauge, in feet, after two hurricanes". The finding (the river was highest 12 days after Florence and stayed above flood stage for weeks) is only in the small note. The address chart's title, "Homes with a Conway mailing address, rounded", does not say what the bars show.

## One change per problem

1. The italic line drops to about half the H1's size, on its own line. The four drive times become one plain line between two thin rules, with no boxes. On a phone they are four short rows under thin rules: icon, label, time.
2. The contents list loses its card: three columns on a desktop, two on a phone, between two thin rules.
3. Each part's text comes first, then its homes strip, which closes the part and is its main picture. The pill button becomes the strip's fallback, shown only when the strip is empty (`G.homes(slug, name, fallback)`). The strip heading stays "Homes for sale in <part> now". On screens 1,100 px and wider, the downtown and university photos sit beside their part's text, 400 px wide; below that they show only when the strip is empty, as before. In the living section the Riverwalk and City Hall photos sit beside their paragraphs on a wide screen, and the Florence photo beside the worst-flood paragraph and "Why the flood comes late and stays".
4. One card style, kept for the charts and the offers. The tables, the yearly cost table and pros and cons become plain, under thin rules. The maps keep their own rounded frame and lose the outer card. The photos lose their frame.
5. One block width of 720 px for the charts, tables, photos (below 1,100 px) and the yearly cost table, the same as the text and the offers. The maps stay at 640 px, so the parts map fits on one screen.
6. Plainer chart titles, same facts: the river chart says its finding, and "in feet" moves to the note; the address chart's title says what the bars show.

Not changed: the order of sections, every sentence, every offer, the maps themselves, the FAQ, the sources and the credits. The top offer bar stays, as on the approved Garden City page. The live homes feed under the hero comes from the website's edge.

Known limit: on a phone the short answer is on the second screen, because the website's edge puts the Conway homes feed between the hero and the short answer. The spec cannot move the feed.

## Word changes

- River chart title: "How high the river at Conway rose on its gauge, in feet, after two hurricanes" -> "After Florence, the river at Conway was highest on day 12 and above flood stage for 29 days"
- River chart note: "Daily average height on the river gauge at the Conway Marina." -> "Daily average height in feet on the river gauge at the Conway Marina."
- Address chart title: "Homes with a Conway mailing address, rounded" -> "Most homes with a Conway mailing address are outside the city", with the note "Homes, rounded."
- Overlap fix (rents): "The figure sits a little under the middle of the market." The words "the middle of the market" now link to /invest/rent-prices/. No new sentence.

## Cut sentences

None.
