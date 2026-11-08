# /hoa/documents/: design pass

Reader: a buyer under contract, or about to be, who typed "what to look for in HOA documents". They want the red flags, the list of papers, and how much time they have.

Screenshots: `before/` (first-1440, first-390, slice-00 to slice-17 at 1440 x 900).

## What makes the page good (keep all of it)

- The short answer names the five red flags in one sentence and says the hard truth: South Carolina law does not make the HOA hand over the papers.
- The five red flags each say where in the papers to look, what the flag is, and where to read more.
- The documents table: ten papers, where each comes from, what it tells you.
- The seller's 11 questions set against what only the papers show.
- The four other states, the timeline in five steps, and the three answers if the papers show a problem.
- The one chart: Horry complainants, two 100 percent bars with counts.
- One photo that makes the point (houses and towers on one beach), the FAQ, the sources, one offer per section.

## What looks ugly or cluttered

1. **The headline is five lines of giant type** (`first-1440.png`). The italic line is set at the H1's size, so the first screen is all headline. On a phone (`first-390.png`) the three fact tiles are squeezed into 110 px columns and "Horry owners who complained got the papers after buying" breaks into six centred lines.
2. **The contents list is a white card** (`slice-01`, `slice-02`). It adds a box between the offer and the first section.
3. **Cards all the way down, and boxes inside boxes.** The red flags are five cards (`slice-02`, `slice-03`), the condo tests a card (`slice-04`), the documents table a card (`slice-06`, `slice-07`), the seller's form two cards (`slice-08`), the states four cards (`slice-09`), the steps five cards each with a grey pill inside (`slice-11`, `slice-12`), the answers three cards (`slice-12`). On a phone the documents table becomes ten white cards inside the white table card. The chart and the offers, which should stand out, do not.
4. **Four coloured outlines shout.** The first red flag, step 2 and "You walk away" have red borders, and "Only the papers show" a brass border (`slice-02`, `slice-08`, `slice-11`, `slice-12`). With that many, none of them reads as the warning.
5. **The photo sits in a card frame, and the condo tests run beside 500 px of empty space** (`slice-03`, `slice-04`). The right edge also zigzags: text at 665 px, offers at 720, cards and the table at 760.

## One change per problem

1. The italic line at about half the H1's size, on its own line. On a phone the three facts become three flat rows: icon, number, words, split by thin rules.
2. The contents list loses its card: three columns on a desktop, two on a phone, between two thin rules.
3. One card style, kept for the chart and the offers. The red flags, condo tests, steps, states, the seller's form and the three answers become plain lists under thin rules. The documents table becomes a plain table under thin rules, and on a phone its rows are plain rows split by a rule, not cards. The step time labels become small brass text instead of pills.
4. No outlines. The urgent items keep a red top rule and a red label (the first red flag, "You walk away"), or the red number dot (step 2). "Only the papers show" keeps a brass top rule.
5. The photo loses its frame. On screens 1,180 px and wider, it sits to the right of the condo tests it explains, and stays in view while the reader goes down the tests. Below that it stays above them, as now. Every block is 720 px wide, the same as the offers.

Chart wording: the chart's note is one long sentence. Split it into short ones, same facts.

No sentence is cut. Nothing is added.
