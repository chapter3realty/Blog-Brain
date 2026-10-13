# Batch 2026-10-b, round 2: what the cold readers found, and what changes

Five cold buyer-readers read the five pages on 2026-10-13 (`BUYER-READ-*.md` in this folder). Each named at least one "I came for ___ and the page never told me" gap. Under CRAFT 8 each is a blocker. This file holds the rules that apply to every page. Each writer also gets a list for its own page.

## For every page

1. **Answer it here.** Where the page or a verified row has the answer, give it. "Ask an agent" or "ask your closing attorney" is used only where the answer depends on the one house, and then in one line that says what gets checked and why.
2. **The yearly cost of owning, in dollars.** Two readers came for "what would it cost me", and the page gave only pieces (fee a month, tax per $100,000). Where the reader's job involves cost, give one plain line for the typical home: the HOA fee for a year, county tax for a home you live in, and flood insurance where it applies, added up as "about $X a year, besides the mortgage". Never a mortgage payment or a rate. Use only verified rows; the sum may be your own arithmetic, said as "about". The tax in dollars needs a verified row that says a buyer's county value is reset to about the sale price when a home sells (South Carolina's rule on a sale). If your ledger lacks it, add the row as pending (item 9).
3. **Spell out HOA once,** at first use: the homeowners association, the group that runs the neighborhood and collects the monthly fee. After that, HOA.
4. **One figure, one value, on the whole page.** The hero tiles, the short answer, the tables, the chart and the FAQ give the same number for the same thing. Readers caught three different drive-time ranges on one page and "$70,000" against "$71,000".
5. **Round, and two numbers a sentence at most.** No exact ranges such as "$206 to $208". Say "about $210".
6. **Price early.** If the reader came to decide whether to look, the typical price is on the first screen or in the short answer, said kindly after the good news.
7. **Meaning, not records.** Cut or rewrite sentences that read like a report: where a number came from, how many were sold by whom, how courts read a rule. Sources stay in the sources line.
8. **Pictures of the subject.** Where a license-clean ground photo of the place exists (Commons, CC BY or CC BY-SA, with credit, `rules/images.md`, `tools/photos.js`), one ground photo beside the aerials helps. Never a person, a logo or a listing photo. Every map dot has a name or a number in a key; no two dots hide each other.
9. **New facts go through the verifier.** Add each new fact as a row in your page's ledger, marked `pending verification (round 2)`, with its source. List the rows in your report. One verifier checks every page's new rows; a row that fails comes out of the copy.
10. **Leave the header, footer and site boxes alone.** Every reader said the footer ("investor-focused brokerage", DSCR, BRRRR, 1031) and the bottom box seemed to be for someone else. That is a site fix, handled outside the pages.
11. **Fair housing still holds.** Describe places by what they have. A question about safety gets what a gate or a rule does, and the official public source; never a rating or a word about who lives there.

Then rebuild, rerun every gate (score 100 with no blocker, claims and facts at 0 for the page, image-meta, photos check, `npm test`), refresh the preview in `scratchpad/preview/b/`, commit and push to the Blog-Brain branch, and report. Do not grade your own page.
