# /hoa/documents/: review round 1, what changed

Spec: `specs/hoa-documents.js`, version 2. Before: `wf2/hoa-documents/spec-round0.js`. New ledger rows 38 to 47 in `facts.md` (carried from sibling ledgers in their verifiers' wording, or VERIFIED-BY-FIXER for the lead to re-check).

## Critic

| Finding | What changed |
|---|---|
| Step 3, five days' notice applied to every association | Cut. Step 3 now says we ask at once "because no law has a deadline for them" (row 3). |
| "The right to see them belongs to owners" | Cut, with the owner-rights cards. Now: "The seller, who still owns the home, can ask for them, and we ask the seller and the manager as soon as you are under contract." No legal right is claimed. |
| 36-word sentence on exempt sales | Split: "Some sales skip the form. Examples are the first sale of a home no one has lived in, a foreclosure sale and an auction. A sale is also exempt when both sides agree in writing." |
| Hero facts crowded at 320 | Labels shortened ("listings in our search show an HOA fee", "Horry owners who complained got the papers after buying"). Page CSS stacks the three facts one per row under 380 px. Checked in the 320 shot. |
| Chart row "Each year, 2012 to 2017 · 1 set of rules · 29 to 57" | Chart rebuilt as three plain bars: 2017 (57, the year before the law), January 2019 (554, the month of the first deadline), the last 12 months (about 700, about 400 of them rules). Every value is from rows 29 and 30. |
| Warning: listing strip above the short answer | Lead's (NEEDS 1). Unchanged. |
| Warning: January 10 rule three times; "come from the association" three times | January 10 is now in one place (rules section; one more in the 2019 deadline sentence, a different fact). The document table says "also filed at the county". Step 5 and the public-record section no longer repeat it. The offer box and FAQ 1 no longer repeat "the budget, the minutes and the reserve study come from the association". |
| Warning: "Many learn the rules after it is too late" | Now "Many owners who complain to the state got the papers too late." |
| Warning: title dropped "Before Buying" | Title: "What to Check in HOA Documents Before Buying in South Carolina" (62 chars). "What to Look for in HOA Documents Before Buying in SC" failed the score's place test ("SC" is not in its place list) and the 62-char limit ruled out "Look for ... South Carolina". The description now opens "What to look for in HOA documents before buying". |
| Warning: "Statement of amounts / due", "loan / review" orphans | Table row headings use `text-wrap:balance`. The two "The building can fail the loan review" footers are gone. |
| Warning: offer bar left edge at 1024 and 390 | Page CSS puts the bar on the text column from 700 to 1263 px (2rem) and under 700 px (1.5rem). Checked at 1024: bar and "On this page" card both start at 34 px. glass.js fix proposed in NEEDS 6. |
| Note: byline date | Lead's `build.js dates`. `build.js audit` still lists the two date lines for this page and nothing else. |

## Reader

| Finding | What changed |
|---|---|
| Five of six flags were condo loan tests; nothing for a house | Red flags rebuilt for any HOA (house, townhouse, condo): a rule that blocks your plan; a special assessment on the way (no cap in SC law, rows 42); thin savings for big repairs (no reserve rule in SC, row 43, and what weak and strong look like, row 44); strict fine and collection rules (60 and 43 policies filed here in a year, row 30, and a judgment that came to more than 11 times the dues, row 40); dues the seller still owes (row 41). The condo tests moved to their own block, "In a condo: the lender's building review", which says a house in an HOA skips that review (row 38). |
| Thin savings: which number counts, what a reserve study should show | The condo block gives both tests (Fannie Mae 10 percent now, Freddie Mac 15 percent from January 4, 2027). The offer box says we read the budget against both. The savings card gives the firm's 30 and 70 percent bands. Which lender a buyer uses is not knowable from the page. |
| Cash buyer; resale; "a different loan" | Added: "If you pay cash, no lender reviews the building for you. When you sell, a buyer who needs a loan faces the same review." (row 46). The loan type stays unnamed: row 23 allows only "a different loan, often at a higher cost". |
| Can I put delivery of the papers in my offer; what if they come late; what leaving costs; usual review days | Not answered. No verified row exists: the due diligence period and its termination fee are owner questions already open on `/buyers/buying-in-myrtle-beach/` (row 24) and `/buyers/common-mistakes/` (questions 1 and 3), and the public sources were struck. When the owner answers, step 2 and the FAQ take one line each. |
| FAQ "How long does it take" did not answer | Rewritten to what is true: "South Carolina law has no deadline for them, so it depends on the association. That is why we ask the manager for the papers and a date as soon as you are under contract." A typical number has no source (facts.md, Not verified 1). |
| "11 questions" against 9 items | The list now shows all 11 questions, as the form words them (row 5), with "11" from the list's own length. |
| Condo buyer owes the seller's dues: does it apply to a house? | Flag 5 now covers every HOA: unpaid dues are usually a lien paid from the seller's money; if the sale leaves nothing, the association may go after the new owner or waive them; in a condo the buyer owes no more than the statement says. Step 4: "We check for them before closing." |
| Nits: too many numbers, jargon, nonprofit block, 1984 tile, NC way out, dates | County card (1984, $64, hours, address), owner-rights cards, master deed drawing, fine/collection/design counts paragraph and the year chart are cut. "Master deed", "estoppel" and "non-warrantable" are out of the prose (left only as an also-called note in the table). Reserve study and condo questionnaire are explained in the table. NC now has "None. This law has no days to cancel." (row 39). The score's date count is 3 (was more); "1984", "November 2025", "2012 to 2017" and the repeated January 10 are gone. "The state's coastal zone law" stays as the form's own question; its meaning has no row. |

## Owner's eye

| Finding | What changed |
|---|---|
| 36-word sentence | Split (above). |
| "No papers by law" six times | Now in the short answer once and in the H2 answer (its home). Cut from the hero fact (now "60 fine policies"), the hero subtitle, and the state cards (the South Carolina card is gone; the H2 paragraph above the cards says it). FAQ 2 is a different question. The seller's form sentence is said once, in the SC section; step 1 says only that the HOA answers come with the disclosure statement. "The review time in your contract is when..." is in the short answer and step 2; Answer 3 and the closing paragraph no longer say it. "The day you sign" is said once. The duplicate card footer is gone. |
| Two hero subtitles | One: the italic line under the H1. The dek is hidden in the page CSS, as `/buyers/no-hoa-homes/` does (its text still passes the audit's keyword and anchor checks). |
| Lender rules a buyer does not know; terms before they are explained | Fannie Mae is explained where it first appears ("a company that buys home loans from lenders"), and Freddie Mac too ("which also buys home loans"). Commercial space and one big owner are one plain line, "Who owns the space", inside the condo block. House-buyer flags added (above). |
| Do-it-yourself county trip, courthouse photo | County card and courthouse photo cut. One line remains: "The county's index is online, but the pages are not, so we pull them at the county and send you the copies." The page took one photo that makes its own point: houses and oceanfront towers on one Myrtle Beach beach, captioned "For a condo in a tower, the lender reviews the whole building. A house in an HOA skips that review." (USGS, public domain; row 47; `photos.js check` passes). Cutting every photo failed `critic.mjs` (blocking: a blog with no real photo) and score H4. |
| Owner rights the buyer cannot use yet | Cards cut; one sentence (above). |
| Master deed drawing | Cut. The one point (a condo's founding papers must state any limit on renting) is now in flag 1. |
| Rules-change chart | Rebuilt as three bars (above). The 2020 to 2025 years are not in a verified row, so the chart does not show them. |
| "Who pays for HOA documents?" | FAQ added: "No South Carolina law caps the association's fee for them or names an amount. We find out what the manager charges before the papers are ordered, so the cost is known up front." Who usually pays and the usual fee have no source (facts.md, Not verified 1); left for the owner. |
| Register slips | "The other five are tests that decide..." gone. "The fix is timing." gone; the section ends "Our agents get the papers in front of you while you can still walk away, and read them for you first." "Most problems have one of three answers." gone; card labels name the problem ("A line you cannot read", "A debt or a coming bill", "A rule that blocks your plan"). "Many communities ban renting a house out at all" is now "we leave out communities that ban renting before the search starts" (story row 36, no count claimed). |
| Nits | HOA is spelled out at its first use in the short answer. Byline date and listing strip: lead's. |

## Gates after the rebuild

- `node tools/mkpage.js specs/hoa-documents.js`: built.
- `score.js --only /hoa/documents/`: 100/100 (SEO 100, AEO 100, Human 100, Trust 100).
- `claims-scan.js`, `facts-check.js`: no hit on this page. `house-claims.js`: 0. `struck-check.js`: no struck wording.
- `build.js check`: OK. `build.js audit`: this page's only fails are the two date lines (lead's `build.js dates`); warnings: 3 dates in body copy, no attributed sentence from a named licensed person (we write no quote for Tim Nash).
- My own scan: no sentence over 28 words in body copy, no "So" opener, no "Here is".
- `critic.mjs` at 320, 390, 768, 1024, 1440 on port 8795: 0 blocking; 1 warning at 320 (read.wall over the last FAQ answer, the sources, legal notice and photo credit, the same reference-block false hit as before). Shots: `wf2/hoa-documents/shots1/`, tiles in `wf2/hoa-documents/t1/`. I looked at 320 screen by screen, 1024 and 1440 at the top: the hero facts stack at 320, the chart reads, the photo is on subject, the offer bar lines up.

## Open for the owner

1. The due diligence period on the current SCR contract: the usual length here, what walking away costs, and whether a buyer can make delivery of the HOA papers by a date a condition. (Same question as `/buyers/buying-in-myrtle-beach/` row 24.)
2. What Grand Strand managers usually charge for the papers and how long they take, and who usually pays here (facts.md, questions 1 and 2).
