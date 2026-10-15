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
   - A definition used outside the program or table its source attaches it to (batch 2026-10-b: a closed-base term applied to other land).
   - A distance or direction word ("a short walk", "just across", "a few minutes", "down US 501") that the measure does not support. Measure each with a router or the parcel shapes (CRAFT 2). In batch 2026-10-b, 11 of 35 failed.
   - A sentence a verifier corrected in an earlier round that a rewrite put back (lesson B30). Read the old rows' notes for every entry the rewrite touched.
   - An aerial whose frame or label point is not on the named place. Overlay the county parcel outline (lesson B29).
   - An average whose group differs from the page's case (second homes mixed into "a home you live in").
   - A total whose parts differ from the same total on a sibling page (a fee counted as tax on one page only). The coordinator names the sibling pages; compare every shared figure.
   - "There is no rule": search the whole code for the opposite under other names before you pass it.
   - "Online" or "not online": say which part (an index, the documents).
   - A link the copy describes: open it and use it once. Say what it really shows and covers.
   - A fact read from a picture: say only what the picture shows.
   - "Only", "none", "every": check every case on the page.
   - A safe wording the site's build would refuse. The website's `build.js` bans some words (for example "sets") and personification; check your wording against its banned list, or flag it for the writer.

8. **When you strike wording,** add an entry for it to the page's struck list, `batches/<batch>/facts/<slug>-struck.json`, in the same edit. That is any row you mark `verified with corrected wording`, `wrong` or partly wrong, and any note that says drop, remove, cut or replace. Each entry: `{ "row": "<ledger> <row number>", "pattern": "<regex>", "unless": "<optional regex>", "struck": "<the struck wording>", "use": "<the approved wording>" }`. Make the pattern match the struck claim, not its subject: "bluff" alone would fire on Kimbel's bluff, which is approved; `Resort Course[^.]{0,80}\bbluff\b` does not (in the JSON file, double each backslash). When a note drops a claim with no replacement, write "use" as an instruction in round brackets, for example "(cut it: one listing only)". Then run `node tools/struck-check.test.js`: the struck wording must fire its entry, and the approved wording must fire none. `tools/struck-check.js` holds every later rewrite to it (lesson B30).

9. **Return a summary when done:**
   - counts by status
   - every `wrong` row, with the correction
   - any claim that should not be published at all

Edit only the status and note columns of the ledger, and the page's struck list. Never change a claim to make it pass.

---

<path to facts file here>

When you give a safe wording, it states the limit of the claim (which homes, which year, how firm). Write it as a plain claim with the attribution in brackets, for example: "Leases must be at least a year long [declaration, recorded 2006]". The writer turns it into the page's voice; attribution never goes in the body (CRAFT 5).

**Rankings and awards (lesson B53).** Verify a ranking, award or "best" claim only at the publisher's own list, and record its year and scope (state or national). A winner's page, a club page or a news story is not enough. If the publisher's page cannot be read, mark the row pending.
