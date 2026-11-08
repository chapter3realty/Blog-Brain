# /sell/seller-disclosure/: design

Batch 2026-11-n, Lane N, version 1, 2026-11-08. Spec: `<web4>/specs/sell-seller-disclosure.js`. Screenshots: `wfn/sell-seller-disclosure/shots/` (1440, 768 and 390 px; critic 0 blocking, 0 warnings).

## What the page is

A rule page with a checklist inside it. The reader is a Horry County owner about to list, often of a second home or a rental, often one who has owned through several storms. The job, in one verb: comply. The page answers what South Carolina makes a seller disclose, who is exempt, when it is due, what each answer means, every question on the form, the flood questions and the storms they reach back over, the beachfront statement a contract needs, lead paint, what a seller does not have to say, and what happens if something is left out. /sell/fsbo/ keeps its drawing of the form for owners selling alone; this page owns the question for every seller and links there in a sentence.

What only this page has: the checklist of all 28 numbered questions, the describe lines and the addendum's 11, built from the form's text (`form-checklist.json`); our count of homes on lots that reach seaward of the setback line, by beach; the homes that last sold before Matthew and Florence, with FEMA's paid claims for each storm; the share of homes built before 1980 by town.

## The approved treatment used, and why

From the four pilots of batch 2026-11-a (sell-fsbo, submarkets-pawleys-island, hoa-liens-and-foreclosure, invest-condos):

- **Two-line headline, italic sub line at about half the H1 size.** "South Carolina seller disclosure: what you must tell a buyer", then "All 28 questions on the state form, who is exempt, and the extra papers some homes need." The title tag says the same: "South Carolina Seller Disclosure: All 28 Questions" (50 characters): the search words, then one fact the page delivers.
- **The answer first.** Two short paragraphs: the form, before the contract, what you know, what a seller can owe; then the 15 exempt kinds and the two things sellers here most often miss.
- **One card style, used once, where the reader chooses.** The ten exempt-sale cards are the only cards: the reader looks for their own case. The small group labels on the cards were cut after the first look; the card titles said the same thing.
- **Plain lists under thin rules elsewhere.** The three "when" steps, the Yes / No / No Representation rows, the lead steps, the three things you need not disclose and the eight numbered steps have no box around them.
- **No box inside a box.** The checklist is one card with plain rows; the part headings are text, not boxes. The first build put each part in a `section` and the site's section padding opened 200 px gaps; the parts are now plain groups.
- **One block width of 720 px** for the cards, the checklist, the storm table, both charts and the offers.
- **On wide screens, a tool or photo beside the paragraphs it serves.** At 1,100 px and up the checklist's part index sits in the empty right column and stays in view while the reader goes down 54 rows; the aerial sits beside the paragraphs on the beachfront law. Below 1,100 px both fall into the column.
- **Offers as the owner set them (2026-11-03).** The slim bar under the short answer (a flood zone look-up, the offer approved on /submarkets/pawleys-island/); a box after the exemptions, after the checklist (a read of the filled-in form, as approved on /sell/fsbo/), after the beachfront section and after the lead section; the full band at the end. Each has its own headline and a request button. None promises a record look-up beyond those, because owner questions Q2 and Q3 are open.

## Choices made for this reader

- **The checklist is the page's center.** Check boxes so a seller can work down it, a print button that prints only the checklist, brass numbers on the eight items that ask about "your ownership", letters on the describe lines. It is long (54 rows) because the title promises every question.
- **A table, not a chart, for the storms.** Two storms, two numbers each: homes that last sold before the storm and FEMA's paid claims. A table says it in four cells.
- **Two bar charts, each for one idea.** Homes on lots past the setback line by beach; homes built before 1980 by town. The county bar uses the same Census vintage as the towns (16 percent), so the page has one county figure.
- **One photo.** A USGS public domain aerial of oceanfront condo buildings north of Myrtle Beach, the kind of home that makes up nearly 9 in 10 of the counted lots. The caption says only what it shows; it never says a building or lot is past the line.
- **First-hand work stated plainly.** "We read the commission's form ..." and "We checked every home parcel in Horry County against the state's setback line map." Both are what the research did.

## Gates (2026-11-08)

score 99 (S8 inbound links: the lead's hub links, NEEDS 1); claims-scan 0; facts-check 0 on this page; house-claims 0; struck-check clean; repeat-check strict passes; critic 0 blocking, 0 warnings at 390, 768 and 1440; `build.js check` only the site-wide footer note; `build.js audit` only the sitemap and llms.txt (the lead) and two links to sibling pages of this batch not built yet (/sell/divorce/, /sell/repairs-before-selling/).
