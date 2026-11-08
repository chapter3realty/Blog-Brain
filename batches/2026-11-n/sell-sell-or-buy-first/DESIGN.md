# /sell/sell-or-buy-first/: design

Batch 2026-11-n, Lane N. Writer, 2026-11-08. Spec: `<web4>/specs/sell-sell-or-buy-first.js`. Screenshots: `<scratch>/wfn/sell-sell-or-buy-first/shots/` (full page at 390, 768 and 1440 px, and `slices/`).

## What the page is

A decision guide for an owner in Horry County who wants to move to another home here: up, down, or into a builder's new home. The job is one verb: decide which order. The page answers that in the short answer, then gives the three ways as a chooser, the proof from county deeds, the time a sale takes here, and the three tools that shrink the risk of each way: a lender's approval with both homes counted, an offer that depends on your sale (SCR504), and a rent-back. It ends with the property tax on two homes.

- Title (57 characters): "Sell or Buy First in Myrtle Beach? Owners Split in Thirds". The search words first, then the page's own finding.
- H1: "Sell or buy first in Myrtle Beach?" with the italic line "Owners here split about evenly three ways."
- Unique: our count of 1,749 Horry County owners who sold one home and moved into another here within a year (rows 1 to 7). No other page says what owners here did, how long they owned two homes, or how long they were between homes.

Outline:
1. Short answer: buy first if you can pay for two homes for about 3 months; sell first if you need the sale money and can live elsewhere for about 2 months; owners split about a third each. Slim offer bar.
2. Which fits you: sell first, buy first, or both within a week? (the three cards)
3. What do Horry County owners do: sell first or buy first? (the photo, chart A, price direction, builder homes; offer 1)
4. How long does it take to sell a house in Myrtle Beach? (drawing B)
5. Can you buy a house before you sell yours? (what a lender counts, the bridge loan; offer 2)
6. How does an offer that depends on selling your house work in South Carolina? (five numbered steps)
7. Can you sell your house and stay after closing? (the rent-back; offer 3)
8. What happens to your property taxes if you own two homes for a while?
9. FAQ (4), sources, how we counted, legal notice, photo credit, end band.

## Which approved treatment, and why

The four approved pilots of batch 2026-11-a (sell-fsbo, Pawleys Island, HOA liens, condos), as the sibling /sell/best-time-to-sell/ applies them:

- **Two-line headline.** The italic sub line at about half the H1 size. The hero sub-header is hidden, as on the pilots, because the short answer says it.
- **Glance rows.** Three tiles on a desktop, three short rows on a phone: 1 in 3 within 7 days, about 3 months owning two homes, about 2 months between homes. These are the two numbers the reader decides on.
- **Cards only where the reader chooses.** The three ways are the one card group on the page. Each card has the same four rows (how long, the risk, what helps, owners here) under thin rules, with no box inside the card. On a desktop the cards stack at 720 px, with the row label in a left column, because three cards side by side at 720 px left about 25 letters a line.
- **Plain lists under thin rules** for what a lender counts, the rent-back and the taxes. The SC sale-contingency addendum is fsbo's numbered steps with the line between them and no card around each step.
- **One block width of 720 px** for the cards, both figures, the lists, the steps and the offers. Text stays at its own measure.
- **On wide screens, a picture beside the paragraphs that explain it.** The photo of the county building where deeds are recorded sits beside the three paragraphs that say how we counted. Chart A stays full width under them, because its labels need the width. Below 1,100 px the photo falls between the second and third paragraph, so two pictures never stack.
- **Our own figures, built from the data file.** Chart A is a real table drawn as 100 percent bars (one row per year), so it reads as a table to a screen reader and to the scorer. Drawing B puts the sale (listing to contract to closing) and the three ways on one day scale, so the reader sees that a sale here takes about as long as owners who bought first owned two homes. Both read `chart-moves.json`; nothing is typed.
- **Offers.** The slim bar under the short answer, a box after every second section, each tied to what the section answered (match your closing dates; find out if a lender will count both homes; ask for a rent-back), and the end band. No two use the same words. Every button goes to /contact/ and is a request.
- **Calm.** One photo, two figures, one card group. I took out the side figure the plan put beside chart A, and kept the photo beside the method paragraphs instead.

## Decisions a reviewer should know

- **No lender is named.** The plan offered BrickWood with the inline AFBA disclosure. The page says "a loan officer at our preferred lender" (BIZ-3), so no disclosure block is needed, and no CTA label reads as a loan offer (BIZ-2).
- **Rows 12 to 15 and 17 use only what the verifier kept.** Nothing about the checkbox, the seller's carve-out, the copy-of-each-contract duty, "no set 72 hours" or SCR391. The SC forms' slang names appear only in the FAQ, from SCR's own FAQ. Owner question 2 (the 2026 forms) is still open; the verifier asked that it be confirmed before publishing.
- **Row 18.** "Live there at least a year" was cut from the page because it needs "unless the guide allows otherwise" and adds nothing to the rent-back point.
- **"Within a week".** Every use means within 7 days of each other (row 1). "In the same week" is struck and does not appear.
- **"Legal residence" and "contingency"** are kept twice each, explained in the same sentence: the first is the word on the county's 4 percent form, the second is the word readers search.
- **The photo** is from 2006 and the caption says so (verifier). The photo partner's shot list asks for a current one.

## Gates (2026-11-08)

- score.js: 98/100 (SEO 96, AEO 100, Human 97, Trust 100). Open: S8, one other page links here (the /sell/ hub link is in NEEDS.md).
- claims-scan: 0 findings. facts-check: nothing on this page. house-claims: 0. struck-check: no struck wording. repeat-check --strict: passes.
- critic at 390, 768 and 1440 px: 0 blocking, 0 warnings.
- build.js audit: one error, "missing from sitemap.xml" (the lead adds the page to the sitemap and llms.txt; NEEDS.md). Warnings: not in llms.txt, no quote from a named licensed person (none exists; owner question 1), 23 sentences over 22 words. build.js check: the footer differs from the partial, as on every page before `stitch`.
- Not yet done: a fresh verifier reading the sentences reworded from the corrected rows, and a cold reader (CRAFT 8, steps 2 and 4).
