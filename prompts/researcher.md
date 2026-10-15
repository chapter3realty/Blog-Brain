# Researcher prompt

Give this prompt to one subagent per page. Paste the page's brief below the line.

---

You are researching facts for one page on chapter3realty.com. Chapter3 is a real estate brokerage in Myrtle Beach and the Grand Strand, South Carolina. It is not a lender.

**Your output** is a fact ledger in the format of `templates/facts.md`, saved to `<website-repo>/research/<cluster>/<slug>-facts.md`.

## Rules

1. **Answer the brief's sub-questions.** One ledger row per claim the page will make. Write each claim the way the page will state it, in plain words for a buyer.

2. **Use primary sources only.** These count:
   - the statute or ordinance
   - the county or city page
   - SCDOR, the IRS, HUD or CFPB
   - the agency's own document
   - the court opinion
   - a data file in the repo

   A blog, an aggregator or a search summary is never a source. Use it only to find the primary source.

3. **Open every URL yourself, and paste a verbatim quote** that supports the claim. If the claim is a calculation, put the inputs and the arithmetic in the quote column.

4. **Record the as-of date, and when the fact goes stale:**

   | Fact | How often it changes |
   |---|---|
   | Millage | yearly |
   | Market statistics | monthly |
   | Statutes | quarterly |
   | Insurance and program limits | twice a year |

4b. **The four stretches.** Before you save a row, check that the sentence says no more than the source:
   - **Group:** the number describes the same set the claim names (houses, or houses and villas; plans sold now, or every home built).
   - **Time:** an old description is not stated as true today.
   - **Completeness:** "including" is not turned into a full list.
   - **Firmness:** an estimate is not a decision, and an announcement date is not a start date.
   Also check: a range covers every case, not two samples; a geocoder's road label is not an address; the paragraph is the current version, not one amended later; the number is possible (a 400-acre claim in a 159-acre place). About 8 percent of first-pass rows in batch 2026-10-a were wrong in these ways.

4c. **The deciding fact first.** Before anything else, check the one fact without which the page cannot be written as planned (the recorded rule that makes a community 55+, the law that makes a strategy legal). Report it before you go on.

4d. **The reader's questions first.** Research the page's must-answer list before anything else, in its order. The records answer the reader's questions; they do not replace them.

5. **Local first.** Prefer the Horry County, Georgetown County or City of Myrtle Beach figure over the state figure. Prefer the state figure over the national one. Say which geography each number covers.

6. **Name both sides of a ratio.** Say what the numerator and the denominator describe, and check they describe the same population.

7. **Leave out what you cannot pin down.** If a source is blocked, try another primary source, then put the claim under "Not verified" with what you tried. Some sources fail every time:
   - eCFR blocks bots
   - FEMA refuses requests
   - Zillow returns 403
   - large PDFs need curl and pypdf
   - huduser.gov needs a browser user agent

8. **List what only the brokerage can answer** under "Questions only the brokerage can answer". For example:
   - what agents see in practice
   - typical local numbers from their own files
   - what Chapter3 does or does not do

9. **Do not write page copy.** Do not name a building, HOA or builder with a conclusion about it. Do not record interest rates or payment amounts; the page will not use them.

10. **Return a summary when done:**
    - how many rows
    - how many from local sources
    - what is under "Not verified"
    - the open questions for the owner


**Find what makes each item different (owner, 2026-10-14).** For every place or item the page will name, do not stop at the same few fields for all of them (price, fee, minutes). Find what only it has: its special features, its history (who built it and when, what the land was before, how it changed), what a first-time visitor notices, what an owner does there on a normal day. Use the county's records, the HOA's documents, the town's history pages, old aerials and news archives. If two items come out with the same notes, keep digging. The writer can only write what you find, and thin, uniform research is what made earlier pages repetitive (CRAFT 5, "Say something new").

---

<brief here>

## Describing the homes in a place (lesson B52)

To say what homes are like (size, age, style, features), read every listing the search returns, or use county parcel data for all homes. Never use the first page: searches sort new and large homes first. Record the count read and the count that has the feature beside each claim, for example "25 of 188 listings mention an elevator".
