# /sell/repairs-before-selling/: design

Batch 2026-11-n, Lane N. Built 2026-11-08 from `specs/sell-repairs-before-selling.js` in the website working copy.

## What the page is

A decision guide for a Horry County owner who will list in the next few months. Their question: what should I fix before selling, and what can I leave? The page answers that a buyer's lender, insurer and termite inspector decide which repairs matter, shows what each one checks, shows how old homes here are, and ends with the one choice the reader makes after an inspection: fix it, give a credit, or sell as is.

Title tag (58 characters): "Repairs Before Selling in Myrtle Beach: Roof, AC, Termites". H1: "What to fix before selling your Myrtle Beach house", with the sub line "The roof, the heating and air, and termites come first. Big remodels can wait."

## Order

1. Hero: H1, sub line at about half the H1 size, three key-fact rows (2003, 2 years, about 1 in 6), byline.
2. Short answer (three short paragraphs), then the slim offer bar ("Have us walk your house").
3. Which repairs can stop a sale: the worked table, 6 parts of the house against the FHA appraiser, the four-point inspection and the CL-100.
4. How old homes are: the age chart beside the text on wide screens; the worked example (a house built in 2003 against HUD's life table); the county roof letter beside the worn-shingle photo. Offer: "Have us check your roof's age".
5. Heating, air, water heaters and wiring: one sentence on cooling degree days, then a plain list under thin rules.
6. The CL-100: what it is, who writes it, the termite photo beside what it covers, a plain list (wet wood, old damage, what it is not), our crawlspace count. Offer: "Send us the report".
7. What other sellers fix: our count of listings that advertise a new roof, the chart beside the text.
8. Cheap fixes: NAR's eight most recommended fixes as a two-column list of large numbers.
9. What not to spend on: the cost-recovered chart, the tax rule in two short paragraphs. Offer: "Have us price it as is and fixed".
10. A pre-listing inspection: for and against in two plain columns, the law, the form's report rule, our reading in a note with a left rule.
11. Fix, credit or as is: three cards, the only cards on the page.
12. FAQ (five questions the page already answers), sources, legal notice, photo credits, the end band ("Have us make your fix list").

## Which approved treatment, and why

The four pilots of batch 2026-11-a (sell-fsbo, submarkets-pawleys-island, hoa-liens-and-foreclosure, invest-condos), as built on the sibling /sell/cash-offer/:

- **Two-line headline.** The italic sub line at about half the H1 size, so the first screen holds the headline, the facts and the byline. On a phone the three facts are short rows, not squeezed tiles.
- **The answer first.** The short answer names what to fix, what to do cheaply and what to skip, with the one number (a kitchen remodel gets back about 60 percent).
- **One card style, used once.** Cards only where the reader chooses: fix, credit or sell as is. Everything else is a plain table or list under thin rules: the worked table, the age clock, the systems list, the CL-100 list, the cheap fixes, for and against.
- **No box inside a box.** The photos sit on the page with their caption under them. The note about our reading of the law has a left rule and no fill.
- **One block width of 720 px** for the table, the charts, the lists, the cards and the offers.
- **On wide screens, a chart or photo beside the paragraphs that explain it** (the age chart, the roof photo, the termite photo, the new-roof chart), in the empty right side. Below 1,100 px nothing floats.
- **Offers.** The slim bar under the short answer, a box after about every second section (roof age, an inspection report, pricing as is and fixed), and the band at the end. No two use the same words. Each button is a request.

## What was taken away after looking at the shots

- A cooling degree day chart (three bars). One sentence says it; the chart added a block and no decision.
- The slab-foundation counts and the crawlspace counts in brackets; the shares say it.
- Georgetown County from the median-year sentence (one number fewer).
- Long feature labels on the age chart ("17 to 26 years old" became "age 17 to 26"), so each bar is two lines, not three.
- A paragraph in the last section that repeated the as-is card.
- The "Not checked" cells in the table are hidden on a phone, where each row is a block, and darkened on a desktop for contrast.

## Not on the page, on purpose

No repair price in dollars (none verified). No roof age at which insurers refuse a policy, and no panel or pipe brand named as refused (not verified; OWNER-QUESTIONS Q2). No "valid for 30 days" for the CL-100. No price-cut comparison for new-roof listings (row 26, mixed). No story (the bank has none for this question; OWNER-QUESTIONS Q1).

## Photos

Two Wikimedia Commons photos, CC BY-SA 3.0, looked at full size: worn asphalt shingles (DMahalko) and termite damage at the bottom of wood siding (Alton). Neither is said to be local. Records in `data/2026-11-n/sell-repairs-before-selling/photos.json`; `tools/photos.js check` passes. The photo partner's shot list (`shot-list.md`) asks for local replacements.
