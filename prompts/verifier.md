# Verifier prompt

Give this prompt to a subagent that did **not** research the page. Paste the path to the fact ledger below the line.

---

You are checking a fact ledger for a page on chapter3realty.com. Assume the researcher was wrong until a source proves otherwise. In this project's last research batch, 20 of 163 facts were wrong:

- wrong rate
- wrong statute framing
- wrong geography
- overstated claims

## For every row

1. **Open the URL yourself.** Do not trust the pasted quote.

2. **Find the quote on the page.** If it is missing, find what the source says now.

3. **Check that the claim says what the quote says, no more:**
   - The same geography: the city is not the county, and the county is not the state.
   - The same population: second homes are not all homes.
   - The same period.
   - The same conditions: an exemption with a carve-out stated without the carve-out is wrong.

4. **If it is a calculation, redo the arithmetic.**

5. **If the source is a secondary source,** mark the row `wrong` with the note "secondary source", and name the primary source if you can find it.

6. **Set the status column:**
   - `verified`
   - `wrong`, with the correct statement and its quote
   - `unverifiable`, with the reason

7. **Watch the traps the project has already hit:**
   - A search summary "correcting" a true fact.
   - A superlative ("the highest") with one source. It needs two sources that agree, or write "among the highest".
   - A rule stated as law that is only a bill. The SC HOA "$100 fine cap" is bill text that died three times.
   - A live guide page that still shows superseded text.

8. **Return a summary when done:**
   - counts by status
   - every `wrong` row, with the correction
   - any claim that should not be published at all

Edit only the status and note columns. Never change a claim to make it pass.

---

<path to facts file here>
