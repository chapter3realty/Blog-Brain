# Review: /buyers/first-time-buyer-tax-credit/ (page 2)

Reviewer, 2026-11-04. Read as the critic, a cold first-time buyer (renter in Conway who typed "is there a first time home buyer tax credit 2026") and the owner's eye. Built page: WEB/chapter3realty/buyers/first-time-buyer-tax-credit/index.html. Preview port 8912. Shots: scratchpad/wf3/review-first-time-buyer-tax-credit (320, 390, 768, 1440), every tile looked at full size.

critic.mjs: 0 blocking, 2 warnings (read.wall at 390 and 320: 944 and 1057 px from the dek through the short answer with no heading, list or visual). repeat-check: strict passes. house-claims: 0.

## Scores

| | Score |
|---|---|
| Visuals | 8 |
| Readability | 8 |
| Value | 8 |
| Uniqueness | 8 |
| Truth | 6 |
| Balance | 8 |
| SEO/AEO | 8 |

## The two lines the lead asked about

I compared `WEB/data/2026-11-e/first-time-buyer-tax-credit/fhfa-myrtle-beach-2006-2014.json` with FHFA's own `hpi_at_metro.csv`, downloaded today from https://www.fhfa.gov/hpi/download/quarterly_datasets/hpi_at_metro.csv (CBSA 34820). All 36 quarters from 2006 Q1 to 2014 Q4 match the FHFA file, index and standard error. The chart path in the SVG plots the same values (2007 Q1 is drawn at +8.4%, 2010 Q3 at -15.3%).

- **"a small rise in late 2010" (chart caption).** The data supports it. 2010 Q2 178.20, Q3 179.50, Q4 181.92: +2.1% over two quarters, then 2011 Q1 170.01. FHFA's standard error is about 3.0 points (about 1.7%) on each of these quarters, so it is a small rise, and "small" is the right word. **It stays, but the sentence around it must change** (blocking item 1): the credit did not close on June 30, 2010. Closings ran to Sept. 30, 2010, so the 2010 Q3 rise came while the last credit closings were still allowed. The caption's order ("fell while the credit was open, then, after a small rise in late 2010...") and "two and a half years after it closed" are both wrong by one quarter.
- **"about 8 percent higher in 2007" (chart aria-label).** The data supports it. Against 2008 Q4 (211.91): 2007 Q1 +8.4%, Q2 +9.2%, Q3 +7.8%, Q4 +7.7%; the four-quarter average is +8.3%. **It stays.** The rest of that same aria-label sentence must change (blocking item 1): "fell through the whole time the credit was open, from April 2008 to June 2010" is false once the window runs to September 2010 (2010 Q3 rose), and 2008 Q4 also rose a little (+0.6% on Q3).

## BLOCKING

1. **The 2010 closing deadline is wrong. Width: all.** Congress moved the closing deadline to before Oct. 1, 2010, for buyers with a binding contract signed before May 1, 2010. Source: Public Law 111-198, the Homebuyer Assistance and Improvement Act of 2010, signed July 2, 2010 (H.R. 5623; https://www.govinfo.gov/content/pkg/PLAW-111publ198/html/PLAW-111publ198.htm): "extend the homebuyer tax credit for the purchase of a principal residence before October 1, 2010, in the case of a written binding contract entered into with respect to such principal residence before May 1, 2010". Ledger row F107 quotes only the IRS Q&A page, which still says "close before July 1, 2010". Add a row for P.L. 111-198, have a verifier who did not research it confirm it, then fix every place below:
   - Timeline: "Before July 1, 2010 / The deadline to close. The credit ends." Fix: "Before Oct. 1, 2010 / The deadline to close. Congress moved it from July 1 in July 2010, for buyers already under contract. The credit ends." Fix the timeline's aria-label the same way ("closed before July 1, 2010").
   - FAQ "When was the first-time homebuyer tax credit?": "The federal credit covered homes bought from April 2008 to mid-2010. The last buyers had to sign a contract by the end of April and close by the end of June that year." Fix: "...from April 2008 to September 2010. The last buyers had to sign a contract by the end of April 2010 and close by the end of September." Check the FAQPage schema text carries the same change.
   - Chart band: it ends at the middle of 2010 (x 369.5 on the wide chart). Extend it to the end of 2010 Q3.
   - Chart aria-label (both SVGs): "fell through the whole time the credit was open, from April 2008 to June 2010, and kept falling to a low at the end of 2012". Fix: "Prices were about 8 percent higher in 2007. They fell for most of the time the credit was open, from April 2008 to September 2010, rose a little in late 2010, then fell to a low at the end of 2012, about 26 percent below the end of 2008. They rose a little in 2013."
   - Chart caption: "fell while the credit was open, then, after a small rise in late 2010, kept falling to a low two and a half years after it closed." Fix: "fell for most of the time the credit was open, rose a little in late 2010, then kept falling to a low at the end of 2012, about two years after the last closings."
   - Short and long run table, "5 years and more": "Local prices hit their low two and a half years after the credit ended." Fix: "about two years after".
   - Optional, same row: the 2009 law also gave some members of the armed forces serving abroad an extra year. If the page keeps "The credit ends", it is true for almost every buyer; a verifier can add the exception if a row is made.

2. **The dek states our inference as her position. Width: all, first screen.** "The $50,000 credit she backs is a bill with no vote." Her plan names no bill (F031); the link to H.R. 3475 is our reading (F102, VERIFY predictions item 3, must-answer note). Fix: "The $50,000 credit she backs has not passed. The last federal credit, up to $8,000, was open while Myrtle Beach prices fell."

3. **The short answer gives her H.R. 3475's terms. Width: all, first screen.** "Annie Andrews backs a federal tax credit for first-time buyers equal to their down payment, up to $50,000." Her words are "a $50,000 tax cut to help first-time homebuyers offset the cost of their down payment". "Equal to their down payment" is the bill's design. Fix: "Annie Andrews backs a $50,000 federal tax cut to help first-time buyers pay their down payment. Her plan names no bill. The closest match, H.R. 3475, a credit equal to the down payment up to $50,000, has had no vote."

4. **The H1 answer reads as cause. Width: all.** "What the last one did to Myrtle Beach home prices: they kept falling until 2012." The page itself says the study cannot tell what the credit did here and that "nothing ties that turn to the credit". Under a Democrat's name, a headline that says her idea's last version made prices fall is a balance problem as well as a truth one. Keep the owner's title words and change only the answer: "What the last one did to home prices: a small rise nationally, while Myrtle Beach prices kept falling until 2012."

5. **A prediction stated as certain. Width: all.** Short and long run table, "If a credit passes here", 5 years and more: "The wider market moves local prices more than the credit." No row says this about a future credit. Fix: "In 2009 the wider market moved local prices more than the credit did."

## Nits

- "the credits proposed since then are bills that have had no vote" (Is there one now). President Biden's credit was a budget proposal, not a bill. Write "the credits proposed since then have not become law." Also note VERIFY: F113 is a 2024 statement; "No federal one" in 2026 rests on no row showing a later law. Low risk, but a row that reads the 2025 tax law's housing sections would close it.
- "$2,400 higher median prices (1.1%) for each standard step up in how exposed a place was to the program" and "each standard step of exposure". A cold reader does not know "standard step". Say what exposure means in plain words, for example "in places where more of the buyers were first-time buyers, prices rose more: about $2,400 (1.1%)". Check the plain gloss against the paper before using it; the abstract does not define exposure.
- "to a small rise on the homes first-time buyers compete for". The study measured median prices by place, not by kind of home. Write "to a small rise in places with many first-time buyers", once the gloss above is checked.
- read.wall at 390 and 320: the dek, short answer and first CTA run about 1,000 px with no heading or visual. The short answer has its eyebrow; consider moving the CTA box above the third short-answer paragraph or making the three short-answer paragraphs a three-line list.
- The 320 px chart: axis labels render at about 9 px. Raise the narrow chart's font size a step.
- 1440 px: the caption of "What past credits did..." sits 14 px from the card edge, tighter than the cells (27 px), and the "W" looks shaved. Match the caption's left padding to the cells.
- Near repeat (repeat-check): "Buyers from 2009 and 2010 kept the credit, unless the home stopped being their main home within three years." appears in the body and again almost word for word in the FAQ. Acceptable in an FAQ; shorten one if a pass is made.
- General civics with no row (NEEDS item 3): simple House majority, presidential signature, Ways and Means writes tax law, a federal credit applies the same in every state. Low risk; leave unless the verifier wants rows.
- NEEDS item 4 stands: saying a bill not passed by Jan. 3, 2027 must be reintroduced would help the reader see why H.R. 3475 cannot pass as it stands. Add only with a row.
- Sitemap and llms.txt: lead's step (NEEDS item 2).

## Checks that passed

- Every other number matches a VERIFIED or CORRECTED row at its corrected value: F031, F100, F101 (including the 15-year sunset), F102 (added to taxable income, not repaid; inflation after 2025), F103, F104 (five Democratic cosponsors), F105, F106, F108, F109, F110, F111, F112 ($31.0 billion), F113, F114, F199 (-9.7%, -5.0%, -9.4%, -5.3%, 2013 +1.7%), F200 (+0.8%, "about flat"), F020 (CBS projection, written as a projection), F003. $19,000 = 9.68% of $200,000, rounded. "About six times" = 50,000 / 8,000 = 6.25.
- No interest rate, payment amount, financing offer or steering word. Devin Day and Abdulla Hijazi appear only in the byline and schema. Paul is not named.
- The Maria example is labelled "Example", 5 sentences and a meaning line, present tense, never "our client". The service it shows (an agent checks which SC Housing program fits) is already stated on the live /buyers/programs/ page.
- Balance: H.R. 3475's Republican sponsor and Democratic cosponsors are both named; her quote "This is a great idea" is hers, in quotes; the page adds no praise or blame of either party. Her other housing plans are quoted, not judged. Wilson's state role is pointed to his own page. Items 2 to 5 above are the only balance findings.
- Reader: the answer to the main search ("No federal one") is in the first sentence of the first H2 and in the short answer. A first-time buyer can act: use SC Housing help now, do not wait for a bill. What stays open: when a bill could pass and whether it would cover a home bought before it passes; the page answers the second with "The credit then applies on the dates the law names", which is honest.
- Photo: U.S. Capitol, Architect of the Capitol, public domain, credited; matches its section.
