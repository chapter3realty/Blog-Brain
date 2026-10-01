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

---

<brief here>
