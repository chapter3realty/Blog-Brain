# Plan: /sell/ (batch 2026-11-b, rebuild the seller hub)

Researcher, 2026-11-09. Inputs: `must-answer.md`, `facts.md` (31 rows: 13 verified in sibling ledgers or the story bank, 17 new and awaiting a verifier, 1 struck block of 27 live claims), the triage row, the cannibalization report and the live page.

The live hub is hand-made HTML (`chapter3realty/sell/index.html`, no spec; `grep "/sell/" specs/*.js` finds only siblings that link it). Build a new spec, `specs/sell.js`, with `url: "/sell/"`, `author: "devin"`, `hub: { name: "Home", url: "/" }`, from `specs/net-proceeds.js` as the model (glass theme, `G.page`), reading `data/2026-11-b/sell/findings.json`. Never type a number the data file holds.

## What the live page has that is worth keeping

- The title's searched words, "Sell My House in Myrtle Beach". It is the site's largest seller query (87 showings, position 15.3). Keep them first in the title.
- The two-ways idea: a full listing or an as-is sale to investors, with both numbers shown before the seller chooses, and "Nobody here pushes you either way." Now with real numbers (rows 17 to 22).
- The owner's honest trade-off: "Investors buy at investor prices, so a full listing usually brings in more money." Row 18 proves it.
- The seller situations (out of state, vacation rental, retiree, inherited, divorce, 1031, primary home). They become the calm list of /sell/ pages, plus two FAQ lines (divorce, 1031) where no page exists. The divorce paragraph is good and true as a service description ("Both spouses on title must sign", "proceeds ... disbursed per your attorneys' instructions"); keep it short in the FAQ.
- The 7-step process, as a short numbered list of what an agent does at each step (LOCAL-4), with the claims that need a count removed (14 days, 48 hours, 7 days) until Q2.
- True facts: commission negotiable (row 24), an attorney supervises the closing (row 25), the nonresident hold-back (row 26), the disclosure form (row 27), bookings within 90 days go with the house (link /sell/rental-property/, which owns it).
- The phone number as a button (854.333.2135) and the lead form with its consent text word for word, moved to the end band.
- Links to every sibling (the live page links six of eight).

Cut: the hero's two big buttons and the form at the top, the four "buyers are already here" tiles, the six-state chips, the stale market tiles and the "pricing penalty" ladder, "High-tech. One dedicated agent. Total accountability.", "Four things other listings do not get", the condo vs condotel box, the duplicate FAQ block at the end, and every row-31 claim.

## The reader and their decision

A Grand Strand owner deciding how to sell in the next few months: often a second home or a rental, often from another state, sometimes in a hurry (a move, an estate, a house that needs work). They know their address and roughly what they owe. They do not know how long a sale takes here, how close to asking homes sell, or what a cash buyer really pays.

**Their decision:** list the house, or sell it as is for cash, and when. **The job, in one verb:** decide. **Kind of page:** a decision guide and a hub (CRAFT 3): the verdict for each situation, a small comparison table, then the facts that decide it, then the list of guides.

## The answer, in two sentences

Listed houses in the Myrtle Beach area sold for about 97 percent of their last asking price in 2026, about four months after listing to an accepted offer. Companies that bought a house to resell paid about 70 cents of every dollar they later sold it for, so a cash sale as is trades a large part of the price for speed and no repairs.

(Rows 3, 4, 19. "In 2026" = January to September, CCAR; the sources line says September 2026 once.)

## Title, H1, description

- Title (54 characters): **Sell My House in Myrtle Beach: List It or Sell for Cash?** Searched words first, then the choice the page decides.
- H1: **Selling your house in Myrtle Beach: list it, or sell it for cash?**
- Subtitle (body size, one line): "Houses here sold for about 97 percent of their last asking price this year. A cash sale is faster, and you can see what it pays."
- Description: "Myrtle Beach houses sold for 97% of their last asking price in 2026, about 4 months to an offer. What cash buyers pay, the best month to list, and the costs."
- Keywords: sell my house Myrtle Beach; sell my home Myrtle Beach SC; sell my house Horry County; sell my house fast Myrtle Beach; how long does it take to sell a house in Myrtle Beach; best time to sell a house in Myrtle Beach; cash offer vs listing. Never: "what is my home worth", "housing market", "buyer's market", "cost to sell a house in South Carolina".

## Sections, in order (question headings people search)

On a phone, the top is the H1, the byline, the subtitle and the short answer. The site's edge puts the feed "Your competition: homes for sale now" under the opening; leave it there. A slim offer bar follows the short answer. An "On this page" list (short labels) follows the bar.

1. **Short answer** (two sentences above) + slim bar: "Get both numbers for your home: listed, and sold as is." Button: "Have us price it both ways".

2. **Should I list my house or sell it for cash?** (owns "sell my house", "sell my house fast", "cash offer vs listing")
   - First sentence is the answer: "List it if the house is ready and you can wait about four months for an offer; sell it as is if speed or repairs matter more than price."
   - Visual 1: the comparison table (below). On a phone, two cards.
   - The worked example, labelled "Example" (row 22): a house worth $350,000 once fixed up; an investor's price about $242,000; the gap pays for the repairs, the months the investor holds it and the investor's profit. No arithmetic in the text.
   - One line from row 17: across all resale houses, companies paid about 93 percent of the county's value and people about 101 percent.
   - What we do: we bring both. One of our agents sold a rented house to a cash buyer from our investor list 13 days after it was listed (row 21, link /sell/rental-property/). "As a brokerage, we bring you a buyer who buys the house itself. South Carolina law bars a brokerage from wholesaling." (row 20).
   - As-is still needs the state disclosure form (row 27), one sentence, link /sell/fsbo/#paperwork.
   - Mid offer: "Have us price your house both ways" / "We show you the listed number and the cash number side by side."

3. **How long does it take to sell a house in Myrtle Beach?**
   - First sentence: "Houses took about 122 days from listing to an accepted offer from January to September 2026, and condos about 131." (row 3) Then: the closing date in the contract comes after that (no figure; Not found).
   - Visual 2: the area table (below), sorted by days for houses.
   - One line: the Myrtle Beach area's condos, its most common sale, waited 142 days and got 94.8 percent of asking, the lowest share (row 11); link /sell/sell-my-condo/.
   - One line: prices by area are on /sell/home-value/ ("what homes sold for in your area"). No price column here (cannibalization fix; different area lines).

4. **How close to the asking price do homes sell?** (owns "is now a good time to sell my house")
   - First sentence: "Houses sold for 97.3 percent of their last list price on average in 2026, condos for 96.0 percent." (row 4)
   - The point a seller misses: that share is of the last price, after cuts. More than half of the resale houses for sale on the day we counted had already cut their price (row 14, the count's date from the data file). On the middle house of the year, the 2.7 percent below asking is about $9,800 (row 7, optional).
   - One sentence on supply (row 5) and one link: "Whether that makes it a buyer's market is on our buying in Myrtle Beach page" (/buyers/buying-in-myrtle-beach/).
   - Mid offer: "Have us check what homes like yours are asking now" / "We pull the homes competing with yours and the ones that cut their price."

5. **When is the best time to sell a house in Myrtle Beach?**
   - First sentence: "Buyers signed the most contracts in March, April and May this year, and the fewest in December." (row 8)
   - Visual 3: the bar chart (below).
   - One line: the wait for an offer barely changed by month, 112 to 134 days for houses (row 9). So the season changes how many buyers sign, not how long a house waits. New listings also peaked in March (row 8 note): the house competes with the most other listings then.
   - What it means: be photographed and listed by late winter to be in front of the spring buyers.

6. **What will it cost to sell, and what is my home worth?**
   - Two short paragraphs, each a link. Cost: row 23 in one sentence, then "the full net sheet, with a calculator, is on our cost to sell a house in South Carolina page" (/sell/net-proceeds/). Commission negotiable, one sentence (row 24). Worth: one sentence and the link to /sell/home-value/ ("what is my home worth in Myrtle Beach"). No figure that page owns.
   - Mid offer: "Have us build your net sheet" (different words from net-proceeds' own "Have us build my net sheet": use "Send us your address for a net sheet").

7. **What does our agent do when you list with us?**
   - The kept 7 steps, short and numbered: the call; the pricing range with its reasons (from CCAR sales, active and expired listings); the prep list (only what an inspector flags or an appraiser counts); photos, video and the listing launch; showings and feedback; comparing offers (price, loan strength, inspection terms, closing date, credits); the closing with the attorney (row 25).
   - Out-of-state reach, one line: about 3 in 10 homes sold here went to a buyer whose tax bill goes to another state (row 15); link /sell/out-of-state-buyers/.
   - Listing services (investor analysis, flood-claim check, marketing site, social, flyers) only as the owner confirms them (Q2), with no counts unless he gives them.

8. **Which selling guide fits your sale?** One calm list, one line each, every /sell/ page, the link on the words that say what it answers:
   - What is my home worth? /sell/home-value/
   - What will I walk away with? /sell/net-proceeds/
   - Selling a condo /sell/sell-my-condo/
   - Selling a rental with a tenant or bookings /sell/rental-property/
   - Selling an inherited house /sell/inherited-house/
   - Selling from another state /sell/out-of-state-buyers/
   - The tax on your sale /sell/capital-gains/
   - Selling by owner /sell/fsbo/
   No cards, no icons; a plain list in a glass box.

9. **Selling your home: questions** (open text, no repeats of a section)
   - Can I sell my house and buy another at the same time? (rows 28, 29; Search Console 14 showings)
   - Do I need an attorney to sell my house in South Carolina? (row 25; link /sell/fsbo/)
   - Do I have to be in South Carolina to sell? (one line, link /sell/out-of-state-buyers/; hold-back one line, row 26, link /sell/capital-gains/)
   - Can I sell my house as is? (row 27; the cash section)
   - How does a sale work in a divorce? (the live page's paragraph, short; no legal advice)
   - Can I sell a rental and buy another without paying the tax now? (one line, link /invest/strategies/1031-exchange/)

10. **End band**: "Tell us about your home" form, consent text word for word, phone button. Two offers on the page never share words.

## The visuals (each readable at a glance)

1. **Comparison table, "List it or sell it as is"** (section 2). Two columns, five rows, plain words:
   | | List it | Sell it as is to an investor |
   |---|---|---|
   | What houses sold for | About 97% of the last asking price (row 4) | About 70 cents on the dollar of the investor's later price (row 19) |
   | Time | About 4 months to an accepted offer, then the closing (row 3) | You and the buyer pick the closing date |
   | Repairs and showings | You fix what matters to buyers; showings | None |
   | The buyer's loan | Often a loan, which the contract can depend on (row 30) | Usually cash |
   | Best for | A house that is ready, and an owner who can wait | Speed, a house that needs work, an estate |
   Glass card style from net-proceeds. No icons.
2. **Area table, "How long homes waited for an offer, by area"** (section 3). Rows: the 12 areas with 50+ sales (row 10, 11). Columns: Area; Houses: days to an offer; Houses: share of asking; Condos: days; Condos: share of asking. Sorted by house days, fastest first. A dash where under 50 sales. Plain header text 18 px on a phone; on a phone the table becomes one short card per area (area name, two lines).
3. **Bar chart, "Buyers sign the most contracts in March, April and May"** (section 5). Twelve bars, October 2025 to September 2026, one bar a month (houses and condos together, from `pending_by_month[].total`), the three top months in the accent color, the rest gray, the number at the end of each bar. No legend, no gridlines. `G.bars` or the net-proceeds chart style, built from the data file.

No photo is needed: no single place is the subject, and a decorative photo is cut (P10). No map.

## Homes strips

The edge feed "Your competition: homes for sale now" (idx-lib/feeds.js `"/sell/": COMPETITION`) sits under the opening and does the work. No `glass.js homes()` strip: the hub names no single place, and a second strip would clutter it. The area table's area names may link to their submarket guides, whose own strips show those homes.

## The offers (each different words)

1. Slim bar under the short answer: "Get both numbers for your home: listed, and sold as is." / "Have us price it both ways".
2. After section 2: "Have us price your house both ways" / "We show you the listed number and the cash number side by side."
3. After section 4: "Have us check what homes like yours are asking now."
4. After section 6: "Send us your address for a net sheet."
5. After section 7: "Book a call with a listing agent" (phone button beside it).
6. End band form: "Tell us about your home."
All go to the contact popup with "/sell/" named; labels read as requests (CTA_PROMISE).

## Siblings and searches

This page owns: "sell my house Myrtle Beach", "sell my home Myrtle Beach SC", "sell my house Horry County", "sell my house fast / cash / as is Myrtle Beach", "how long does it take to sell a house in Myrtle Beach", "best time to sell a house in Myrtle Beach", "list or sell off market", "sell my house and buy another".
It gives up (one line and a link each): what is my home worth (/sell/home-value/), housing market and buyer's market (/buyers/buying-in-myrtle-beach/), cost to sell (/sell/net-proceeds/), condo detail (/sell/sell-my-condo/), withholding and tax (/sell/capital-gains/), bookings and tenants (/sell/rental-property/), inherited (/sell/inherited-house/), by owner and the disclosure form (/sell/fsbo/), out of state (/sell/out-of-state-buyers/).

Inbound links today: 12 referring pages (`node tools/inbound.js <web> --only /sell/`). Re-check after the build; keep 6 or more.

## Before the build

- A verifier who did not research them checks rows 1 to 12 (new cells), 16 to 20, 22 and 28 to 30, re-running `parse_ccar.py`, `deeds_offmarket.py` and `build_findings.py` (README run lines) and reading a fresh sample of row 18's pairs.
- Owner questions Q1 to Q3 in `templates/owner-questions.md`, each with the proposed answer. The page ships without the unconfirmed services.
- After the build: claims-scan, facts-check (the registry may hold the old 4.3 / 7.6 / 121 values for /sell/), score.js, critic at 390 px, a cold seller reader, and the owner's eye.
