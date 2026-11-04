# Review: /market-reports/2026-election/ (election-2026)

Reviewer: a fresh verifier, 2026-11-04. Built page read at WEB/chapter3realty/market-reports/2026-election/index.html. Critic run at 320, 390, 768 and 1440 on port 8911. Every shot was looked at full size, in tiles. Shots: /tmp/claude-0/-home-user-Blog-Brain/8900fb2a-1006-5ba7-88a3-019838e5433c/scratchpad/wf3/review-election-2026/

Critic: 1440, 768 and 390 clean. 320: 1 blocking (overlap.spill), 2 warnings (read.wall at the Act 388 history and at the last FAQ answer). Score: T1 to T4 pass. P6 flags "Act 388" as a term the reader is not told until the Wilson section. house-claims: 0.

## Scores

| Area | Score |
|---|---|
| Visuals | 8 |
| Readability | 8 |
| Value | 8 |
| Uniqueness | 8 |
| Truth | 7 |
| Balance | 8 |
| SEO/AEO | 8 |

## Blocking

1. **FHFA error line (F198, F200, VERIFY "Recomputed").** Figcaption under the price chart: "Each index value has a margin of error of about 2 percent. The changes after 2024 and in the latest year fall within it."
   - FHFA gives a standard error, not a margin of error.
   - The ledger gives about 2 percent only for the 2025 and 2026 values, not for "each index value".
   - +3.0% is not within 2 percent. A reader can see that the sentence contradicts the chart above it. A change between two values carries the error of both.
   - Fix: "FHFA gives recent index values a standard error of about 2 percent. A change of a few percent, such as +3.0% after 2024 or +0.8% in the latest year, may be within that error."

2. **$50,000 credit, short run (F110).** "If a $50,000 credit passed, the same pattern points to more sales and slightly higher prices in the first years."
   - The "about 1 percent" price result is for an $8,000 credit. The next sentence says no study measured a credit six times that size. So "slightly" has no source. It reads as a forecast of the size of the effect.
   - Fix: "If a $50,000 credit passed, the same pattern points to more sales and higher prices in the first years. It is about six times the old credit, and no study we found measured a credit that size, so how much prices would rise, then or later, is unknown."

3. **Wilson gas plan has no "as reported" (F064, CORRECTED attribution).** "Gas. Let the governor pause the state gas tax for up to 120 days."
   - VERIFY says the 120-day power comes from Fox Carolina's and HERE Columbia's reports, not his site. VERIFY tells the page to write "as reported" for F064, the same as for F062, F063 and F069. The page does that for those rows and for "Utilities", but not for gas.
   - Fix: "Gas. Let the governor pause the state gas tax for up to 120 days, as reported."

4. **Wilson roads row names a plan he did not state (F067, F068).** Plan cell: "Faster roads, and an audit of the Department of Transportation".
   - F067 has two parts. Under the audit initiative, the lieutenant governor oversees performance audits of state agencies in general. On the priorities page, he will "modernize the Department of Transportation ... streamline project timelines". No row says he plans an audit of the Department of Transportation.
   - Fix: "Faster roads, and a modernized Department of Transportation".

5. **Lincoln table scope (F149).** "In Horry County in 2018, that group was 36.4 percent of property value but 47.2 percent of taxed value."
   - Table 2.3 covers "properties valued by county assessors", at appraised and at assessed value. "Property value" with no qualifier reads as all property in the county, which includes the manufacturing and utility property the state values.
   - Fix: "In Horry County in 2018, that group was 36.4 percent of the appraised value of the property the county assessor values, but 47.2 percent of its assessed value, the value the tax is figured on."

6. **Investor law date (F100).** In Andrews' table: "The 350-home limit, passed in July, starts Jan. 7, 2027."
   - Congress passed it on June 22 and 23. It became law on July 11 without the president's signature.
   - Fix: "The 350-home limit, which became law in July, starts Jan. 7, 2027."

7. **Hero chips spill at 320 px (visual).** "U.S. Senate / Andrews (D)" runs 2 px outside its chip (critic overlap.spill at 21,518). The full-page shot is 322 px wide, so the page scrolls sideways by 2 px. "79 R, 45 D" and "No questions" also wrap tight in their chips at 320 and 390.
   - Fix: below about 400 px, show the four chips as a 2 by 2 grid, or let them wrap to two rows. Do not shrink the text.

## Nits

- F151: "shifted the property tax burden from homes people live in to rentals and businesses". The study says "non-owner-occupied residential". That includes second homes, so "to rentals, second homes and business property" matches the source more closely. The F149 note forbids "second homes" only inside the definition of "Other Residential".
- F062: in the plan "End the state income tax and overhaul property taxes", the property tax overhaul half is only in the reported agenda. Add "and, as reported, overhaul property taxes" to the cell, or drop "and overhaul property taxes" from the plan name.
- F180: "Neither winner took a position on short-term rentals." This is a search result. Write "We found no statement from either winner on short-term rentals."
- F110: "raised home sales across the country about 10 percent". The abstract's 9.8% sits in a sentence that ends "per standard deviation increase in program exposure". "Raised home sales by about 490,000, near 10 percent" stays closer to the abstract.
- Andrews' "other plans": "End breaks for the ultra-wealthy" puts her word in our voice. Quote it or write "End tax breaks for the highest earners".
- Space: Andrews' "other plans" list runs about 150 words and Wilson's about 50. That is fair, because her platform has more planks. But Andrews' past example ends on a fact against her plan ("Here it did not stop a fall"). Wilson's past example opens with a study that supports his premise. The study also says "the program's market-stabilizing benefits likely exceeded its direct stimulus effects" (F110). One clause from it would even out the two sections.
- "Act 388" appears in the "Who decides what" table and in Wilson's table before the page says what it is (score P6). Add a few words where it first appears: "(the 2006 law that removed school operating tax from homes people live in)".
- The Horry County photo is from 2006, with cars of that era. NEEDS item 4 asks for a current photo from the photo partner. Keep it on that list.
- The Article schema headline is about 125 characters. Google shows up to about 110. The visible H1 is fine.
- The U.S. Capitol photo is also on page 2 (NEEDS item 5). The lead decides.
- At 320 px the Act 388 history runs 909 px with no break. The last FAQ answer and the sources line run 929 px. A small visual or a line break in the Act 388 history would help.

## Reader

- The answer is in the first two sentences: no rule has changed yet, and Republicans are 4 House votes short of changing the rental ratio.
- A reader can act on it. They can check the flood zone before Dec. 11, price a rental on today's tax bill, and plan a purchase without the credit.
- Open question: what a lapse on Dec. 11 means for a closing already set for December. The page sends that to the flood page and the CTA, which is reasonable.
- Where a reader would stop: the two "other plans" lists, which a home buyer can skip.

## Checked and correct

- Results and Horry races: F003 to F019.
- Senate control as a CBS projection: F020.
- Two-thirds arithmetic and the 2028 amendment path: F080 to F086.
- Who decides what: F087 to F094.
- Every quoted line in Andrews' table, quotes exact: F031 to F049.
- Wilson's table: the Act 388 row rests on his WIS quote (F060). "As reported" is on the senior, veteran, business and insurance rows (F062, F063) and on utilities (F069). The car tax, income tax and permit quotes are exact (F065, F066, F068).
- I-73 funding wording: F192.
- 6,418 permits: F196.
- Tax example: $5,350, $3,560 and $2,040 at 254.6 mills (F145 to F147).
- Price chart values and the 2008 to 2012 fall: F198 to F200.
- Flood lapse lines: F120, F124, F125.
- The $250,000 and $500,000 gain exclusion: F092.
- The story line "property tax stops more rental deals here than insurance does" matches stories.json. It uses "stop", as the story's limits require, not "kill".
- No interest rate, payment amount, steering word or financing offer.
- Devin and Abdulla appear only in the byline and schema. Paul does not appear.
