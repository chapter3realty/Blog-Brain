# Fix: /sell/sell-my-condo/

The page has no spec. Edit `chapter3realty/sell/sell-my-condo/index.html` the way the round 1 light fixes did. Every FAQ answer appears twice: in the FAQPage JSON-LD (line 55) and in the visible FAQ. Change both. Do not type a date into the byline; `node build.js dates` sets it. The CCAR month and its "Current as of" date are data labels from the source, as the page prints them now.

All market numbers are CCAR Monthly Indicators, September 2026 (rows 1 to 8). They replace every June 2026 figure. After the edit, `grep -c "June 2026"` on the page must return 0.

## 1. Subtitle (row 4)

Now: "Condos in Myrtle Beach take about 137 days to sell, with more for sale than buyers. Price for the buyers your building can attract, and settle the financing question first."

New: "Condos here take about 137 days to get an accepted offer, with more for sale than buyers. Price for the buyers your building can attract, and settle the financing question first."

(137 is still the September figure. "To sell" becomes "to get an accepted offer", the report's own definition.)

## 2. "The Myrtle Beach condo market for sellers in 2026", lede paragraph (rows 1, 2, 3)

Now: "These are the June 2026 numbers from the local REALTOR association. Condos are selling, but slowly, and buyers are negotiating. Demand rose: condos under contract were up 21.5 percent from a year earlier."

New: "These are the September 2026 numbers from the local REALTOR association. Condos are selling, but slowly, and buyers are negotiating. Fewer condos went under contract than a year earlier, down 6.3 percent, and the median price was down 5.0 percent."

## 3. The market table (rows 1 to 6)

Header cell: "June 2026" becomes "September 2026". Rows, condo then single-family:

| Row | Condo | Single-family |
|---|---|---|
| Closed sales | 368 -12.4% | 1,012 |
| Pending sales | 420 -6.3% | 877 |
| Median sale price | $230,125 -5.0% | $370,000 |
| Average days on market | 137 | 118 |
| Percent of list received | 95.9% | 97.3% |
| Months of supply | 7.5 | 4.2 |

Rename the row "Average days on market" to "Average days to an accepted offer" (row 4). The change figures are year over year, as before. Keep the existing markup for a negative change (the June table only had positive ones, so check the minus sign renders as a minus and the color is not the "up" color).

Source line, now: "Source: CCAR Monthly Indicators, June 2026, published July 10, 2026. Monthly updates are on our market report."

New: "Source: CCAR Monthly Indicators, September 2026, current as of October 10, 2026. Monthly updates are on our market report."

Link "CCAR Monthly Indicators, September 2026" to https://www.ccarsc.org/clientuploads/2026_Market_Stats/October_2026_Monthly_Market_Report.pdf (the old link was the June file).

## 4. "Pricing a Myrtle Beach condo to its real buyer pool", second paragraph (row 4)

Now: "... A condo priced and marketed to buyers who can close will not waste 30 to 45 days on a loan that was never going to fund, in a market that already takes 137 days."

New: "... in a market where an accepted offer already takes 137 days." (only the last clause changes)

## 5. BrickWood paragraph (row 9; no new fact)

Now: "This is where we are different. Our preferred lender, BrickWood Mortgage, finances condotel and non-warrantable buildings at normal fees. When a buyer's agent asks how someone could finance your unit, we have an answer instead of a dead end."

New: "This is where we are different. Our affiliated lender, BrickWood Mortgage, a separate company, finances condotel and non-warrantable buildings. When a buyer's agent asks how someone could finance your unit, we have an answer instead of a dead end."

Then, at the end of that paragraph (after "Start by finding your building in our oceanfront building directory."), add the North Carolina page's wording, unchanged:

"Chapter 3 Realty has a business relationship with BrickWood Mortgage. The full RESPA Affiliated Business Arrangement disclosure is in the footer of this page and here. You are never required to use BrickWood, and you are free to shop lenders."

("here" links to /buyers/programs/#afba.)

The pricing CTA band later says "how they can finance it through BrickWood Mortgage". Change it to "how they can finance it, including through BrickWood Mortgage, our affiliated lender". The disclosure above covers it.

## 6. The master-policy story (row 10, NOT FOUND in the story bank)

The story is not in stories/stories.json. Keep only what a reader needs to learn and drop the details that could only come from a file.

Heading, now: "A Myrtle Beach condo deal saved by fixing the HOA master policy". New: "How an HOA master policy can stop a condo sale".

Replace both story paragraphs with:

"A lender reviews the building, not only the buyer. If the association's master insurance policy is too small to rebuild after a storm, the building can fail that review partway through a loan, for reasons that have nothing to do with the unit, the buyer or the seller. The fix is the association's: a new master policy for the whole building."

Then keep the third paragraph as it is ("Those lessons apply to sellers too. ...").

In "Myrtle Beach condo HOA documents and third-party fees", first paragraph, now: "Many associations here hire outside companies to hold their records, and those companies charge for everything. In the deal above, the buyer paid $500 just for the documents the loan required, on the company's schedule, not the closing's."

New: "Many associations here hire outside companies to hold their records, and those companies charge for their documents, on the company's schedule, not the closing's."

If the owner confirms the story and it goes into stories.json, the deal, the three roof ages and the $500 can return word for word from the bank.

## 7. FAQ (rows 2 to 6, 8)

"How long does it take to sell a condo in Myrtle Beach?", new answer:

"Condos averaged 137 days from listing to an accepted offer in September 2026, per the local REALTOR association, against 118 days for single-family homes. Condo supply sits at 7.5 months, which favors buyers. Pending condo sales were down 6.3 percent from a year earlier, but up 5.9 percent for the year to date, so priced-right units are moving."

"What is the median Myrtle Beach condo price right now?", new answer:

"The area condo median was $230,125 in September 2026, down 5.0 percent from a year earlier. Condo sellers received 95.9 percent of their last list price on average."

(The sentence "City-of-Myrtle-Beach condos specifically have been softer than the area number" is cut: no source.)

## Nothing else changes

Keep the FHA count, the disclosure law, the Vacation Rental Act lines, the bookings section and the other FAQs. They are outside this triage row.
