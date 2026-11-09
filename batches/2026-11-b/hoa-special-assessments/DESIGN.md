# /hoa/special-assessments/: design pass

Reader: someone about to buy a condo on the Grand Strand, often an older oceanfront building, who typed "condo special assessment Myrtle Beach" or "who pays a special assessment when a condo sells". They want to know how big a bill can get, whether they can get stuck with the seller's, and how to find out before they offer.

Screenshots: `before/` (first-1440, first-390, slice-00 to slice-17 at 1440 x 900, phone-00 to phone-05 at 390 x 844).

## What makes the page good (keep all of it)

- The headline says the fear in plain words: the buyer can owe the seller's bill. The short answer then gives the limit: the amount on the association's written statement.
- The payment order in three steps: insurance, then the reserve fund, then the owners.
- The Shipyard Village case told as one big number on a dark panel, with what happened after the no vote (slice-04). It is the page's one dramatic moment.
- The worked example of a 120-unit building, and the calculator that opens with its answer, $8,550, and asks for three numbers.
- The two charts: building age for sale here, and how long HUD expects each part to last. Each is one bar list with the number on the bar.
- The six papers we read, the words we look for in the minutes, the who-pays table at closing, Fannie Mae's critical repair list, the FAQ and the sources.
- The live strip of newer condos under the opening, from the site's edge.

## What looks ugly, cluttered or hard to read

1. **The headline fills the first screen** (`first-1440.png`). The H1 runs three lines and the italic line under it runs three more at nearly the same size. The byline and the dek are pushed to the bottom edge. On a phone (`first-390.png`) headline and italic line take seven lines before the byline.
2. **Two cards stacked before the first section** (`slice-02`, `phone-02`). The hero offer is a card, and the contents list right under it is a second white card.
3. **Too many offer boxes.** Besides the top offer and the closing band, the body has four offer cards. The worst spot is "How much" (`slice-05`): the dark calculator box is followed straight away by a white offer box that says the same thing ("What would your share be?"). The other three (`slice-08`, `slice-11`, `slice-13`) are big white cards at the end of their sections.
4. **Cards for things that are not charts, tools or offers, and boxes inside boxes.** The payment order is three cards, the third with a brass outline (`slice-03`; on a phone three stacked cards, `phone-03`, `phone-04`). The worked example is a table in a card (`slice-04`, `slice-05`). "No reserve study" and "No periodic structural inspection" are two cards (`slice-07`, `slice-08`). The words we look for are eight pills inside a card, a box inside a box (`slice-09`). The who-pays table is a card (`slice-10`, `slice-11`). The photo sits in a card frame (`slice-12`, `slice-13`). With this many boxes the two charts and the calculator do not stand out.
5. **Ragged right edges.** Text ends at about 820 px on screen, the offers at 874 and the cards, charts, table and photo at 974 (`slice-04` to `slice-06`, `slice-12`). The edge jumps every few hundred pixels.
6. **The first chart's title names the subject, not the finding** (`slice-06`): "Condos for sale on the Grand Strand, by the year the building was built". The reader has to add up three bars to see what it says.

## One change per problem

1. The H1 is set a little smaller and allowed the full width, so it reads in two lines on a desktop. The italic line drops to about half the H1's size, on its own line. The byline and the dek come up into the first screen.
2. The contents list loses its card: three columns on a desktop, two on a phone, between two thin rules.
3. The calculator and its offer become one box: the offer's words and button sit at the foot of the calculator, under a thin rule. The three other offers in the body keep every word and button, and lose the white card: a brass rule on the left, no fill, no shadow. The two offer boxes left are the top offer and the closing band.
4. One card style, kept for the two charts. The calculator and the dark Shipyard Village panel stay as they are. The payment order becomes three plain columns under a thin rule; step 3 keeps its brass dot and gets a brass top rule instead of an outline. The worked example and the who-pays table become plain tables under thin rules; on a phone the who-pays rows are plain rows split by a rule. The two "not required" items become plain rows under rules. The words we look for become a plain list between two rules, without pills. The photo loses its frame.
5. One block width of 720 px for the charts, tables, lists, the calculator, the dark panel, the photo and the offers. The photo stays under the repair list it explains: it is a wide aerial, and beside the list it would be too small to see the balconies.
6. The first chart's title says the finding in plain words: "Most condos for sale here are in buildings built before 2000". Same bars, same numbers. The HUD chart's title is plain already and stays.

Not changed: the H1's words (the triage suggested new words; the size change solves the first screen without them), the order of sections, every other sentence, every offer, the charts' bars and numbers, the FAQ, the sources and the credits. The live homes strip under the hero comes from the shared kit.

## Word changes

- Chart title: "Condos for sale on the Grand Strand, by the year the building was built" -> "Most condos for sale here are in buildings built before 2000".
- Overlap fix: the keyword "special assessment tax deductible" is dropped from the spec's keywords. The tax section is cut to one sentence and the existing link to /hoa/tax-deductible/, which owns the question. Its heading and its contents entry ("Tax") go, and the two sentences close the section on paying.

## Cut sentences

From the section "Is a special assessment tax deductible?" (overlap fix; /hoa/tax-deductible/ owns the question):
- The heading "Is a special assessment tax deductible?" and its contents entry "Tax".
- "No, for a home you live in."
- "On a condo you rent out, dues or assessments paid for maintenance of the parts every owner shares are deductible rental expenses."
- "A special assessment for an improvement is not deductible."
- "You may be able to recover your share of the improvement's cost by taking depreciation."

Kept: "Association assessments are not deductible as real estate tax, because an association, not a government, charges them." and "Our page on whether HOA fees are tax deductible has the detail."

## Result

- Desktop page height 14,731 px to 14,557 px; phone 21,034 px to 20,771 px. Words 2,549 to 2,490: only the tax cut and the chart title. Offers 6 to 6, every source link kept.
- At 1024 px the italic line is small enough to need the darker brass (critic: 4.34:1); it uses #8a5226 below 1,280 px, as the approved pages do below 960 px.
- Gates: trim-check flags only the byline date mkpage resets ("Updated July 27, 2026"); score 100/100; claims-scan 0 findings; build check OK; audit FAILs only the two mkpage date lines (the A20 quote warning was there before); critic 0 blocking at 320, 390, 1024 and 1440. Two read.wall warnings at 320 px are on prose that did not change (the short answer, and the three paragraphs after the who-pays table).
- Screenshots hide the site's timed book popup (#c3-pop), which covered the later slices in both sets. It is the site's, not this page's.
- Not reached: the short answer is still under the live homes strip, not in the first screen. The strip's place comes from the site's edge, and the owner calls the strip the strongest offer.
