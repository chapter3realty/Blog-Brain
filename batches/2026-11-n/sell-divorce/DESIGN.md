# /sell/divorce/: design

Batch 2026-11-n, Lane N, version 1, 2026-11-08. Spec: `<web4>/specs/sell-divorce.js`. Screenshots: `scratchpad/wfn/sell-divorce/shots/` (390, 768 and 1440 px, full page).

## What the page is

A decision guide with steps inside it, for a homeowner who is separating or divorcing in Horry County. The reader is upset and tired. They want to know three things: can the house be sold, what each choice leaves them, and what happens if the two of them do not agree. The page answers in that order, states the law with its source, and says where a family law attorney or a tax professional is needed. It tells no story and pictures no family.

Order: the short answer (yes; the court decides if you do not agree; the money on the county's middle home), then who gets the house, the three choices with the worked example and a calculator, how a buyout and the mortgage work, what happens when the two of you do not agree, tax and timing with our gain chart, and the steps in order. Then a five-question FAQ that repeats only what the page answers.

Title tag (59 characters): "Selling a House During Divorce in South Carolina: 3 Choices". The H1 says the same: "Selling a house during a divorce in South Carolina", with the italic line "The three choices: sell and split, one buys the other out, or one keeps it for a time."

## The approved treatment used, and why

From the four pilots of batch 2026-11-a (`sell-fsbo`, `submarkets-pawleys-island`, `hoa-liens-and-foreclosure`, `invest-condos`):

- **The headline:** two lines, the italic sub line at about half the H1 size, and three key facts under it that become short rows on a phone (fsbo, condos). The facts are what this reader came for: no 50/50 rule, the $0 deed fee on a buyout deed, and the gain under $250,000 for a house bought in 1998 or later.
- **Cards once:** the three choices are the one place the reader chooses, so they are the only cards (fsbo kept cards for its two choosers only). Everything else is a plain list under thin rules: what is divided and what is not, the buyout steps, how a listing works for two spouses.
- **One block width of 720 px** for the lists, the table, the cards, the chart and the offers.
- **Beside the paragraphs on a wide screen:** the calculator sits beside the worked table (fsbo's calculator), the gain chart beside the tax paragraphs, and the courthouse photo beside the steps, sticky, as on hoa-liens. Below 1,100 px (1,180 px for the photo) they fall in place under their paragraph.
- **Steps:** numbers on a thin line, a small brass time label, no card around each step (hoa-liens).
- **Offers:** the slim bar under the short answer (a written price estimate for both spouses), an offer box after the choices, after the "do not agree" section and after the steps, each tied to that section, and the dark band at the end. Every button is a request to /contact/.
- **Calm:** nothing red, no warning box, no alarm outline. This reader is already worried (hoa-liens dropped its red outlines for the same reason).

## The visuals, one per idea

- **The worked table and the calculator:** a sale and a buyout on the $350,000 middle home with an example $200,000 owed, from `findings.json`. The calculator takes the value, what is owed, the agent fee percent and the reader's share (the split they agree or the court orders). It gives what a sale leaves them, what a buyout pays or costs them, and the least new loan. No rate, no loan payment.
- **The gain chart:** our own line chart of the estimated gain on that home by the year it was bought (FHFA index, 1995 to 2025), with a dashed line at one person's $250,000 limit. The labels are HTML at reading size, so the chart reads at 390 px. It has a hover readout and a hidden table of every value.
- **One photo:** Horry County's courthouse and county office complex in Conway, CC BY-SA 3.0, the file and record of /hoa/liens-and-foreclosure/, reused as the verifier directed. Caption as Commons describes it, no date. The photo partner's shot replaces it (`shot-list.md`).
- No map: nothing on the page is about a place. No picture of people.

## What I changed after looking at the shots

- The tax chart was taller than its two paragraphs at 1,440 px and left a hole; one more paragraph now sits beside it, and its caption is two lines shorter.
- The first paragraph of "Who gets the house" said "usually marital property" twice with the next one; it now says only that the court divides the house and the split is not always half.
- The "Choice" headings, the table and the calculator read cleanly at 390 px; nothing else changed.

## Gates (2026-11-08)

- score.js: 100/100.
- claims-scan: 0 findings. facts-check: 0 on this page. house-claims: 0. struck-check (this page's 21 entries): no struck wording.
- critic at 390, 768 and 1440: 0 blocking, 1 warning (the short answer and offer bar run 963 px on a phone with no heading; the pilots' short answers do the same).
- build.js audit: on this page only "missing from sitemap.xml" (the lead's step), and four notes (llms.txt, "may" 6 times, sentences over 22 words, no attributed Tim Nash sentence; we write no quote for him). build.js check: only the site-wide "footer differs" on 154 pages, which `stitch` fixes.

## Left for the lead

See NEEDS.md: sitemap and llms.txt entries, the /sell/ hub link, and the contact form's optional field.
