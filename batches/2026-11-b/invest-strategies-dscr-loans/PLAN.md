# Plan: /invest/strategies/dscr-loans/ (batch 2026-11-b, rebuild the content)

Researcher, 2026-11-10. Inputs: `must-answer.md`, `facts.md` (43 rows: 16 carried or reused from verified ledgers, 4 reused rows still pending in their own ledgers, 23 new and awaiting a verifier), the triage row, the cannibalization report and the live page.

## Why it is being rebuilt

Triage: the Grand Strand section has no local numbers (in the working copy it is four one-line notes and a sales box), there is no Tim Nash review line, and the column sits about 140 px right of the site's left edge. Search Console: 48 showings, 0 clicks, position 44 in 28 days; Google tries it for "DSCR loan South Carolina" and the page never names the state. The one problem a reader has, in one sentence: **the page explains DSCR like any national site and never tells a Grand Strand buyer whether the house or condo they are looking at can pass.**

**There is no spec.** The writer makes `specs/dscr-loans.js` (author "devin", url `/invest/strategies/dscr-loans/`), built with `node tools/mkpage.js specs/dscr-loans.js`, reading `data/2026-11-b/invest-strategies-dscr-loans/findings.json` and `chart-rent-split.json`. Nearest models: `specs/dst.js` (approved 2026-11-01, an investor decision page) and `specs/1031-exchange.js` (this batch). mkpage gives the byline, the Tim Nash review line and the standard column, which fixes the triage's layout point.

## What the live page has that is worth keeping

- The title's searched words, "DSCR Loans in Myrtle Beach", and "qualifies on the rent" as the plain meaning.
- The definition in plain words: "DSCR is short for debt service coverage ratio. It is the rent the home collects, divided by the loan payment it must cover." Reword to name the tax, insurance and dues (row 1, 2).
- The five steps, each made true by a row: find the property; the appraiser sets the rent (row 37); divide (row 1); credit and money down (rows 7, 26); close in your name or an LLC (row 32). Add what Chapter3 does at each step (LOCAL-4).
- "If you plan to use the place yourself for more than two weeks a year, tell your lender early" (row 4).
- The below-1.00 answer: BrickWood starts at 0.75, with more down (row 26). Words only for the rate.
- The links: /invest/llc/, /invest/strategies/small-multifamily/, /invest/financing-multiple-rentals/, /invest/condotel-financing/, /invest/str-vs-ltr/, /invest/strategies/brrrr/, /invest/long-term-rental/ (the analyzer).
- The two stories: we bring the deal (row 39, `active-not-passive-agent`) and the Zillow-links buyer (`dscr-zillow-links`).
- The FAQ questions people search: what is a good DSCR; South Carolina with no income verification; how much down; short-term rental income; LLC; no cash flow. Answers rewritten from rows.
- The phone number 854.333.2135.

Cut: the nine items in facts.md "Struck from the live page"; the "Why people do it / What can go wrong" boxes (they repeat the steps, and one is wrong, row 27); the mini calculator (the analyzer owns that search); "Local wrinkles" as a heading.

## The reader and their decision

An investor, often from another state, sometimes self-employed or Canadian, looking at a Grand Strand listing. They know a DSCR loan "qualifies on the rent". They do not know that the lender's rent is the appraiser's, that the 6 percent rental tax and the HOA fee sit inside the ratio, that a nightly rental counts at 75 or 80 percent, or that two of three published programs take no nightly income on a purchase. Their fear: falling for a beach condo and learning at the appraisal that it cannot qualify.

**Their decision:** can this kind of home, here, carry a DSCR loan, and which kind should I shop for? **The job, in one verb:** check. **Kind of page:** a decision guide built on a formula (CRAFT 3: "Decide", plus the worked example of a calculator page, without the calculator). It runs about 1,600 to 2,000 words: the formula, the local finding, the nightly-rental rules and the money to bring are each a searched question.

## The answer, in two sentences (then one more)

A DSCR loan qualifies on the rent: the lender divides the rent it counts by the loan, tax, insurance and HOA dues. Most programs want 1.00 or more. On the Grand Strand a 3-bedroom house in Longs or Carolina Forest leaves about half the rent for the loan at our 1.25 target. On the middle oceanfront two-bedroom rented by the night, the dues, tax and insurance alone come to more than the income a lender counts.

(Rows 1, 2, 5, 6, 16, 17, 20. 21, 7, 25 and 25 words. All shares are read from findings.json.)

## Title, H1, sub-header, description, keywords

- **Title (about 60 characters):** `DSCR Loans in Myrtle Beach and SC: Which Rentals Pass the Ratio`. The state is in it for the queries Google already tries (must-answer).
- **H1:** "DSCR loans in Myrtle Beach: which rentals here pass the ratio?" Names the place (LOCAL-1) and the reader's question, not a loan offer (BIZ-2).
- **Hero sub-header (no we, our, us; 8 to 30 words):** "The 6 percent rental tax and the HOA fee sit inside the ratio. A house inland often passes; a beach condo's dues can sink it before the loan."
- **Description:** "DSCR loans in Myrtle Beach and South Carolina: the formula, what ratio lenders want, how much of the rent tax and HOA dues use here, and Airbnb income rules."
- **Keywords:** DSCR loan Myrtle Beach; DSCR loan South Carolina; DSCR loan requirements South Carolina; how to calculate DSCR for rental property; what is a good DSCR; DSCR loan Airbnb Myrtle Beach; DSCR loan short-term rental; DSCR loan condo Myrtle Beach. Not "DSCR calculator" (/invest/long-term-rental/), not "condotel financing" (/invest/condotel-financing/), not "rental property calculator".

## Sections in order (question headings people search)

"On this page": Answer, Formula, Good ratio, Which rentals pass, Airbnb income, Condos, Money down, How we help, FAQ.

1. **Hero.** H1, byline (mkpage, with Tim Nash as reviewer), sub-header. Three key-fact chips with words: "6% rental tax counts in the ratio" (rows 2, 11); "75 to 80% of nightly income counts" (rows 8, 26); "1.25 is our target" (row 6).

2. **What is a DSCR loan, and does it work in South Carolina?** First screen. The answer above. One more line: South Carolina has no rule of its own for these loans; the local numbers change the answer (must-answer note; no row needed for an absence the page does not state as law, so keep it to "the numbers here"). Slim offer bar: "Send us a listing. We work out its ratio before you offer." The site's edge feed sits under this opening (feeds.js `DSCR`). Its title should be bold and true (BUILD list below).

3. **How do you calculate DSCR on a Grand Strand rental?** The formula in one glass box, in words:
   `DSCR = the monthly rent the lender counts ÷ (principal and interest + property tax + insurance + HOA dues)`.
   Then one worked example as a short table, the Carolina Forest 3-bedroom house (row 17): rent $2,230 (HUD's figure for the ZIP); tax about $392 (6 percent at 201.0 mills); insurance about $275 (an estimate); HOA $100; principal and interest: "your lender's quote". A last line in words: "The tax, insurance and HOA use about 34 percent of the rent. At 1.25, the loan's part must fit in the 46 percent that is left." No dollar figure next to "loan" or "payment" (build.js PAY_NUM). Then: "Run any address through our rental analyzer" (link /invest/long-term-rental/). The rent the lender counts is the appraiser's (row 37), said in one sentence. Flood insurance and any special assessment count too (row 2).
   Mid offer: "Send us an address. We fill in the tax, the insurance quote and the dues; you add your lender's quote." (rows 40, 24)

4. **What is a good DSCR for a rental, and what if it is below 1.00?** A simple horizontal scale, readable at a glance: 0.75 | 1.00 | 1.15 | 1.25, each with one line: "BrickWood's floor, with more down" (row 26); "the rent just covers the bill; most programs' minimum" (row 5); "some programs, for a nightly rental" (row 5); "our target" (row 6). Then two sentences: below 1.00, the rent does not cover the bill, and you cover the rest each month. Above 1.25, you have a cushion for empty months and repairs.

5. **Which Grand Strand rentals pass a DSCR loan?** The section the triage asked for, and the page's unique finding.
   - **Chart** (`chart-rent-split.json`), stacked horizontal bars, one per case, the bar = 100 percent of the counted rent. Segments: tax, insurance, HOA fee, "the 1.25 cushion" (20 percent), "left for the loan". The oceanfront bar runs past 100 percent and is marked "over the rent before any loan". Plain title: **"On a beach condo, the HOA fee and the tax use most of the rent before the loan."** Five bars: Longs house, Carolina Forest house, Myrtle Beach condo (yearly lease), Garden City Beach condo (nightly), Myrtle Beach oceanfront condo (nightly). The Carolina Forest condo (row 18) only if the verifier keeps it. Labels large enough to read on a phone (CRAFT 4); one message.
   - Three short lines under it, each from a row: the houses leave about half the rent for the loan (rows 16, 17); the Myrtle Beach condo on a yearly lease leaves about 14 percent, because the dues take 39 percent (row 19); the oceanfront condo by the night cannot reach 1.00 even before a loan (row 20).
   - "Taxes stop more rental deals here than insurance does" (row 40), then the 6 percent line (row 11).
   - **Two places, each with a wow line and its strip:**
     - **Longs.** "About half the houses sold in Longs last year were brand new from a builder, and only 3 in 100 sit in the high-risk flood zone." (rows 42, 38: builders rarely give DSCR buyers incentives, so plan on none.) Then `homes("dscr-longs-houses", "Longs", "", "Longs: the most rent for the price on the Grand Strand")` (true: Longs has the highest rent-to-price of the ZIPs in RTN row 16). Place offer: "See 3-bedroom rentals in Longs".
     - **Carolina Forest.** "Fewer than 1 in 100 Carolina Forest houses sit in the high-risk flood zone, and half its homes were built in 2007 or later." (row 43) Strip `homes("dscr-carolina-forest-houses", "Carolina Forest", "", "Carolina Forest houses: newer homes, almost no flood zone")`. Place offer: "Have us send Carolina Forest houses that clear 1.25".
   - Keep the area ranking off this page (/invest/where-to-buy/ owns it). One line links it: "Every area's rent against its prices is on our where-to-buy page."

6. **Can you use Airbnb income for a DSCR loan in Myrtle Beach?** Good news first: yes at some lenders. Then:
   - Lenders count 75 to 80 percent of the nightly estimate (rows 8, 26). Our comparison: counted at 75 percent, the middle Myrtle Beach two-bedroom's nightly income comes to about $1,256 a month, under HUD's $1,420 yearly-lease figure for the ZIP (row 22). Say both groups plainly.
   - Two of the three published programs we read take nightly income on a refinance only (row 9): a purchase may have to qualify on the yearly-lease rent.
   - The rules must allow nightly rentals: the city's zones (row 25, link /invest/str-rules/) and the HOA's papers (rows 10, 23, 24). About 7 in 10 condos for sale say nightly rentals are allowed, against about 4 in 100 houses with an HOA fee (row 23, once HRR verifies it).
   - The Garden City Beach condo passes with about 20 percent of the rent left for the loan (row 21), because its dues are about half the oceanfront tower's. Strip: reuse `str-garden-city-beach-condos` (condos within a mile of the town's point). The place cannot filter for nightly rentals or dues, so keep the default head ("Homes for sale in Garden City Beach now") unless a row makes a bolder one true; the section's sentence carries the point.
   - Link /invest/airbnb-income/ for what nightly rentals take in, and /invest/str-vs-ltr/.
   Mid offer: "Have us check whether a condo's nightly income can carry the loan."

7. **Can you get a DSCR loan on a condotel or non-warrantable condo here?** Three sentences. About 8 in 10 condos for sale in oceanfront buildings are in a rental program (row 29). All three published DSCR programs we read exclude non-warrantable condos, and two name condotels (row 28). BrickWood takes more down on a condotel (row 26). Link /invest/condotel-financing/ for the buildings and the loans that do work. Offer: "Have us check the building before you offer."

8. **How much down, what credit score and what else does a DSCR loan need?** A short bold list:
   - Down: "15 to 25 percent on most purchases, more on a condotel. Figures from our affiliated lender, BrickWood Mortgage, a separate company." (row 26; the one place on the page.)
   - Credit: published programs start at 680 to 720 (row 7).
   - Reserves: 3 to 6 months of the home's monthly costs at the programs we read, 12 for a first-time investor at one (row 36).
   - Prepayment: many DSCR loans charge a fee if you sell or refinance in the first years; ask before a BRRRR or a quick resale (row 35; link /invest/strategies/brrrr/).
   - The price of the loan, in words: "According to a loan officer at our preferred lender, with good credit and a 1.25 to 1.5 ratio, a DSCR loan is priced about like a conventional loan." (row 27.) Then the owner's sentence form (BIZ-4): call us and we will have our affiliated lender give you real numbers.

9. **How does Chapter3 help with a DSCR purchase on the Grand Strand?** The steps with what we do at each (LOCAL-2, LOCAL-4), each from a row: we search for homes whose rent clears 1.25 and send them (row 39); we read the HOA papers for rental rules (row 24); we get an insurance quote before you offer (row 40); we work out the tax at 6 percent (rows 11, 12); you choose your lender, and BrickWood is one option (row 41). DSCR loans and 1031 exchanges are the two most common ways our investor clients buy (row 34). The Zillow-links story, two sentences (row 39).

10. **FAQ** (open text, short answers, each from rows): Can I get a DSCR loan in South Carolina without tax returns? (row 3, verifier's wording); Can a DSCR loan close in an LLC? (row 32, link /invest/llc/); Can a first-time investor or first-time home buyer get one? (row 33); Can I live in it? (row 4); Can Canadians get a DSCR loan? (row 31, link /invest/canadian-buyers/); Does a DSCR loan need an appraisal? (row 37); Can I get a DSCR loan if the rent does not cover the bill? (row 26); How many rentals can I finance? (one line, link /invest/financing-multiple-rentals/); Condotel DSCR loans? (one line, link). No FAQ repeats a section's answer in other words.

11. **End offer band.** "Send us the listing you are looking at." One sentence: we run the rent, the tax, the dues and the HOA's rental rules before you offer. Button to /contact/ (the site's pop-up: name, phone, email optional, call us). Phone 854.333.2135.

## Visuals (each readable at a glance)

1. The formula box with the worked table (section 3). Words, not symbols, in the formula.
2. The ratio scale (section 4): four marks, one line each.
3. The rent-split bars (section 5), from `chart-rent-split.json`. One message in the title. Built with glass.js chart helpers, not typed numbers.

No photos needed: the strips carry the homes. No map (the page names two places; a map would compete with the strips). If a photo is wanted for Longs or Carolina Forest, it is the photo partner's (shot list) or an existing licensed photo in `data/photos.json`.

## Homes strips and feeds (owner, 2026-11-10: bold, personal, true)

- **Edge feed** under the opening (feeds.js `DSCR`, 3-bedroom houses where long-term rentals are allowed, $230,000 to $460,000, built 2000 or later, ranked by price per bedroom). Its head now reads "DSCR picks: the most bedrooms for the money". Proposed bold head, true by its filter: **"Best DSCR rental buys near Myrtle Beach: the most bedrooms for the money"**. The lead edits feeds.js (outside this folder), and adds `withStrips: true` because the page carries its own strips.
- **New places** (for `batches/2026-10-b/data/idx-places.json`, lead only; a place can ask only near, miles, type and hoa=0):
  - `dscr-longs-houses`: `{ near: "33.91344,-78.75415", miles: 5, type: "house" }` (the town-longs point), pages ["/invest/strategies/dscr-loans/"], index false.
  - `dscr-carolina-forest-houses`: `{ near: "33.77000,-78.92500", miles: 3, type: "house" }`, pages ["/invest/strategies/dscr-loans/"], index false.
  - Reuse `str-garden-city-beach-condos`; add this page to its pages list.
- Strip titles are statements about the place that a row makes true (rows 42, 43, RTN 16), never about the people.

## Offers (every button to /contact/ or #lead-form; the site opens the pop-up and sends the button's words)

| Where | Headline / button |
|---|---|
| Under the answer (slim bar) | "Send us a listing. We work out its ratio before you offer." |
| After the formula | "Have us fill in the tax, insurance and dues for an address" |
| Longs entry | "See 3-bedroom rentals in Longs" |
| Carolina Forest entry | "Have us send Carolina Forest houses that clear 1.25" |
| After Airbnb income | "Have us check whether a condo's nightly income can carry the loan" |
| After condotels | "Have us check the building before you offer" |
| End band | "Send us the listing you are looking at" |

No two use the same words. None offers a loan (BIZ-2): each is a brokerage task.

## Compliance checks for the writer

- No rate, no payment amount: the loan's part is "your lender's quote" or a share of the rent. Keep "$" figures out of any sentence with "loan payment" or "mortgage payment" (build.js PAY_NUM).
- Down payment range once, BrickWood named (row 26). The story bank's limit conflicts; the website's A17 gate wins; flag for the owner in FOR-OWNER.
- "Our affiliated lender, BrickWood Mortgage, a separate company"; never "we finance", "our loans", "we price". The AfBA disclosure is in the footer; if the page links brickwoodmortgage.com, build.js checks the signature.
- No lender other than BrickWood named. Published programs are "published DSCR programs we read".
- No quote for Tim Nash. The stories are the owner's, in the third person.
- Never "best" about Chapter3 (LOCAL-5). "Best" in a feed head is about homes, true by its ranking (owner, 2026-11-10).

## BUILD list for the lead (outside this page's folders)

1. feeds.js: `DSCR.head` to the bold title above; `"/invest/strategies/dscr-loans/": { ...DSCR, withStrips: true }`.
2. idx-places.json: the two new places; add this page to `str-garden-city-beach-condos.pages`. Regenerate places.js; restart the preview.
3. Referring pages (owner, 2026-11-09): links to this page on words already there in /invest/llc/ ("DSCR loan" section), /invest/financing-multiple-rentals/, /invest/strategies/brrrr/ (the refinance step), /invest/condotel-financing/, /invest/canadian-buyers/, /invest/long-term-rental/ (its ratio card), /invest/airbnb-income/. Check with `node tools/inbound.js <site> --only /invest/strategies/dscr-loans/`.

## Wrong-shape questions

- Would a calculator serve better? Yes for the number, and the analyzer already is one; this page answers "will it pass here" with the formula, the local finding and a link.
- Is a chart of six worked homes a ranking of areas (where-to-buy's search)? No: it compares kinds of homes (house, condo, nightly) at their middle price. The title says that.
- Could the oceanfront finding read as "condos are bad investments"? The section says what it is: the ratio a DSCR lender counts. Cash buyers and appreciation are other pages' questions.
