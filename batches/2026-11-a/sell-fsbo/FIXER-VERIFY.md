# Fixer-verify: /sell/fsbo/ ledger section H (rows 28 to 31)

Independent verifier, 2026-11-04. I did not research these rows. Each source was opened again. Live fetches and text are in `scratchpad/wf2/sell-fsbo/fv/`. The NAR PDF is the researcher's copy (`raw/nar-2025-highlights-rir.pdf`, the same file as `verify/rir.pdf`), read again with pdftotext.

| Row | Status | What I checked |
|---|---|---|
| 28 | CORRECTED | Exhibit 8-7, PDF page 113. Every share matches. The 16 shares add to 186 percent, so "could name more than one" holds. The last bar is "None - Did not actively market home". The page's chart label "Did not market it at all" says more than that. |
| 29 | VERIFIED | Exhibit 7-5, PDF page 100: "seven percent said their agent listed the home on the MLS but performed few other services." The page's "did little else" fits inside that. |
| 30 | CORRECTED | AG opinion of May 22, 2007, fetched live from scag.gov. Two problems. (a) "Many real estate agents ... use a prefabricated contract" and "written by a licensed attorney" are what the legislator told the office ("You indicated that", "It is your understanding"). They are not a finding, and they date from 2007. The page states them as current fact. (b) Franklin v. Chavis, as quoted: preparing documents is the practice of law "when such preparation involves the giving of advice". The page's "Writing a contract for someone else, or advising on its terms, is a lawyer's work" drops that condition. It also contradicts the sentence before it, which says filling in the blanks does not appear to be the practice of law. The opinion also says the state Supreme Court has the final word. |
| 31 | VERIFIED | SC Code 12-8-580 (A)(1), (B)(2)(b), (C)(1)(a) and (F) live. SCDOR "Information about H. 4216" live: "5.21%", "effective beginning with the 2026 tax year". The BEA sets any further cut by February 15 of each year, and the law was signed March 30, 2026, so there was no cut for 2026. I-295 (Rev. 6/28/22) items 8 and 15 live. I-290 line 2 ("top marginal Individual Income Tax rate for the tax year of the sale") and "taking credit for the Nonresident Real Estate Withholding" live. The page's two cards match. |

## Page sentences to change

From `chapter3realty/sell/fsbo/index.html`. The spec lines are in `specs/` (the fsbo spec, lines 177, 381 and 382).

1. Row 28. Chart label, section "How will buyers find your house, and do you have to pay their agent?"
   - Now: "Did not market it at all"
   - Use: "Did not actively market it"

2. Row 30. Section "Do you need a lawyer to sell a house by owner in South Carolina?", subsection "Who writes the purchase contract?"
   - Now: "Many agents in South Carolina write offers on a printed contract an attorney drafted, with the blanks filled in."
   - Use: "A 2007 opinion of the state Attorney General's office looked at agents who fill in the blanks of a printed sale contract an attorney wrote."
   - The next sentence stays: "If the buyer has an agent, the offer may come to you on that kind of form."

3. Row 30. Same subsection. This sentence has to change with item 2.
   - Now: "The state's Attorney General has said filling in such a form does not appear to be the practice of law, if no legal advice is given."
   - Use: "The office said that does not appear to be the practice of law, if no legal advice is given or asked for. The state Supreme Court has the final word." Keep the link to the opinion on "The office" or "opinion".

4. Row 30. Same subsection.
   - Now: "Writing a contract for someone else, or advising on its terms, is a lawyer's work."
   - Use: "Preparing a legal paper for someone else is the practice of law when it involves legal advice. Advice on the contract's terms comes from a lawyer."

Each new sentence is under 28 words and does not open with "So".

## Struck list

Three entries added to `sell-fsbo-struck.json`: fsbo 28 ("did not market ... at all") and fsbo 30, twice ("many agents ... printed contract", and "writing a contract for someone else ... is a lawyer's work", quiet when the sentence has "when", "if", "can be" or "may be"). `tools/struck-check.test.js` and the page's self-test pass (16 entries). On the current page all three fire. They go quiet once the four changes above are made.

## Note for the lead

Row 19 (VERIFIED by the first verifier) says "Four in 10 did not market the home at all." The same NAR label says "did not actively market". The page does not print that sentence now. If a rewrite adds it, the new fsbo 28 entry will catch it.
