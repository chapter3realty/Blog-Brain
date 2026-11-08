# /hoa/reserves/: design pass

Reader: someone looking at a Myrtle Beach condo, often an older oceanfront tower, who heard the word "reserves" and wants to know whether the building can pay for its own roof, how to tell, and what the lender will check.

Screenshots: `before/` (first-1440, first-390, slice-00 to slice-16 at 1440 x 900, phone-00 to phone-25 at 390 x 844).

## What makes the page good (keep all of it)

- The headline asks the reader's real question, and the short answer gives the one number to look at: percent funded.
- The gauge with the weak, fair and strong bands and the example building marked twice.
- The drawing of the example building with its six parts numbered and each part's life used as a bar.
- The dark "$380,000 short" panel with the per-owner split. It is the page's one dramatic moment.
- The roof chart (saved ahead, assessment, loan), the age chart of condos for sale, the state table.
- The calculator, prefilled with the example, so a reader can try their own building.
- One real photo of oceanfront towers, the five things we read, the FAQ, the sources, every offer tied to the section above it.

## What looks ugly or cluttered

1. **The headline is four lines of giant type** (`before/first-1440.png`). The italic line is set at the H1's size, so it reads as a second headline. On a phone (`first-390.png`) the two fact tiles are centred boxes squeezed into 170 px, each breaking into four lines.
2. **The contents list is a white card that runs across two screens** (`slice-01.png`, `slice-02.png`) in two columns with one short link per row.
3. **Short lists are stacks of cards, four of them with coloured outlines.** The two accounts and the owners (`slice-02`), who pays after damage (`slice-03`), how a building passes and fails (`slice-07`), and when you see the papers (`slice-13`) are each a row of boxes. "The owners", "When it fails", "Inside that period" get a red outline and the third account a brass one. On a phone (`phone-03`, `phone-04`, `phone-11`, `phone-19`) these become eleven stacked cards, and the state table becomes five more (`phone-15`, `phone-16`). With that many boxes, the charts and the calculator do not stand out.
4. **Ragged right edges.** Text ends at 665 px, the offers and the contents at 720, the gauge, drawing, dark panel, lists and photo at 760, the two bar charts at 820, the calculator at 600 and the state table at 860 (`slice-06`, `slice-08`, `slice-09`, `slice-11`). The right edge jumps every screen.
5. **The photo sits in a card frame, alone, under one sentence, with the right half of the screen empty** (`slice-09`, `slice-10`). It is 760 px wide and takes most of a screen between the HUD sentence and the fee paragraph.

## One change for each

1. The italic line at about half the H1's size, on its own line (as the approved pages). On a phone the two tiles become two flat rows under thin rules: icon, figure, line.
2. The contents list loses its card: three columns on a desktop, two on a phone, between two thin rules.
3. One card style, kept for the charts, the drawing, the calculator, the dark panel and the offers. The four short lists become open lists: each item under a thin rule, side by side on a desktop, one under another on a phone. Red marks "the owners pay" items by a red number dot or a red top rule, not an outline. The state table becomes a plain table under thin rules, and on a phone plain rows split by a rule.
4. One block width of 720 px, the width of the offers, for every chart, figure, list, table, the dark panel, the calculator and the photo.
5. The photo loses its frame. At 1180 px and wider it sits to the right of the age chart and the HUD sentence it illustrates, so the right side holds it; below that it stays where it is.

## Chart wording (owner: some graphs "may be worded a little complicated")

- Gauge title and its second note sentence, and the second mark label.
- Roof chart: the first bar's name and its reason.
- Age chart note: the second sentence.

Each is listed before and after in the return. Same facts, same numbers.

No sentence is cut. Nothing is added.
