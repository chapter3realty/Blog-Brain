# Must-answer list: /buyers/condo-in-litigation/

Built 2026-11-10 from real demand. Raw suggestions: website `data/2026-11-b/buyers-condo-in-litigation/raw/google-suggestions-2026-11-10.txt` (38 queries, `pull-suggestions.sh`). Search Console: the owner's exports in the scratchpad (`gsc/Queries.csv`, last 28 days to 2026-11-06; `gsc2/`, Oct 16 to 26 against Oct 27 to Nov 6).

## What the demand shows

**Search Console.** The page showed 26 times in 28 days, 0 clicks, position 15 (`gsc/Pages.csv`). In the compare window it fell from 10 showings at position 11.6 to 8 at 22.6. The one query on topic is "condo litigation": 6 showings at position 16.7 (4 in the earlier window at 15.25, none in the later one). Near it, owned by siblings: "warrantable vs non warrantable condo" (6, position 21), "non warrantable condo" (2), "what does it mean when a condo is non warrantable" (1), "hoa special assessment" (3, position 76). "myrtle beach sued" (1, position 3) is a stray.

**Google suggestions.** Local phrasings ("condo in litigation myrtle beach", "myrtle beach hoa lawsuit") return nothing: the demand is national wording plus a local reader. What Google offers:
- "condo in litigation" -> "fnma condo in litigation", "condo litigation fannie mae", "condo litigation letter", "condo litigation lawyer".
- "condo litigation" -> "fhlmc condo litigation", "fannie condo litigation", "freddie mac condo litigation", "condo association litigation".
- "fannie mae condo litigation" -> "... guidelines", "... requirements", "fannie mae condo pending litigation", "fannie mae condo lawsuit".
- "condo pending litigation" -> "fnma condo pending litigation", "what does pending litigations mean", "how long can a lawsuit be pending".
- "hoa in litigation" -> "hoa in litigation meaning", "hoa under litigation", "hoa pending litigation", "what happens when an hoa loses a lawsuit".
- "buying a condo with pending litigation" -> "buying a house with a pending lawsuit", "can you sell a house with a pending lawsuit".
- "horry county public index" -> "... search", "... court records", "... search by name"; "sc public index" -> "... horry county".

**People also ask / the top results** (web search, 2026-11-10): "Can you buy a condo in litigation?", "Can you get a mortgage on a condo in litigation?", "Is it smart to buy a condo involved in a lawsuit?", "Will condo fees go up because of the lawsuit?", "What does pending litigation mean for a condo?". The top results (ratehub, zoocasa, movesmartly, urbancondospaces, BiggerPockets threads, a 2015 lender blog) are Canadian or national, give no rule text, and no local case. None quotes Fannie Mae's minor-litigation list, FHA's 12-month rule, or a single court record. That is the opening.

**From our own files.** The owner's July 2026 deal (live page, commit b6ce1657 by the owner's account): an oceanfront unit in a building in a structural-defect suit, repairs already done, closed the week the suit ended. Not yet in `stories/stories.json` (see PLAN, owner question).

## The reader, and why they typed it

A buyer, often from out of state, who found an oceanfront or golf-course condo they like and just heard "the building is in litigation", from their agent, a lender who said no, or the HOA's questionnaire. Some are investors who heard these units sell at a discount. They want to know: is the deal dead, can I still get a loan, how bad is it, how long will it last, and is this a chance or a trap? The reason behind "fnma condo in litigation" is a lender's refusal they want to understand or get around.

## Must-answers, ranked

1. **Can you buy a condo in litigation in Myrtle Beach?** Yes. Cash always works; the loan is the problem. The answer with the conditions, first screen. (Every suggestion group; triage.)
2. **Can you get a mortgage on it? What does Fannie Mae / Freddie Mac / FHA allow?** The rule in plain words, and the minor suits that do not stop a loan: a suit the insurer defends and covers, a suit over money for repairs already done, an association suing an owner for dues, damage to one unit, no money at stake, small next to the reserves. FHA counts a suit that ended in the last 12 months. ("fannie mae condo litigation guidelines/requirements", "fhlmc", "freddie mac", "fnma condo pending litigation".)
3. **Which loans can still close?** Cash; a loan a lender keeps or sells outside Fannie and Freddie (portfolio, non-QM), and the limit that even those programs refuse a suit about structure. One section, linking `/invest/condotel-financing/` for loan detail. No rate, no down payment percentage (not an investor-only sentence).
4. **How do you find out if a condo building is in a lawsuit?** What we read: the lender questionnaire's litigation question, the attorney's letter, the court index by the association's name, the minutes. What the state's seller form does and does not ask. ("how to check if hoa is in litigation", "condo litigation letter", "horry county public index".)
5. **Is it a good idea? What can go wrong, and when is it a deal?** Two kinds of suit: the association suing the builder (repairs may already be done; a recovery) and owners suing the association or a structural failure (an assessment coming). The owner's story. Real Grand Strand cases from the court record. ("is it smart", "what happens when an hoa loses a lawsuit".)
6. **How long does condo litigation last?** The local record: 7 to 14 years from filing to the last ruling in the named cases. ("how long can a lawsuit be pending".)
7. **Will my HOA fees go up / will there be an assessment?** One sentence and a link: `/hoa/special-assessments/` owns it.
8. **Can you sell a condo that is in litigation?** One FAQ: yes; the buyers are cash or non-agency buyers, and the record shows units in these buildings keep selling.

## The deciding fact

Fannie Mae's Selling Guide B4-2.1-03 (11/04/2026): a project whose association is a party to pending litigation, or whose developer is in a suit about safety, structure, habitability or use, is ineligible, except for the minor matters it lists. Checked first and verified in two sibling ledgers (hoa-documents row 20, non-warrantable row 8). Without it the page cannot say who can lend. Confirmed; plus FHA (HUD 4000.1 Update 18) and Freddie Mac 5701.3 read the same day.

## What siblings own (do not take their search)

| Search | Owner | This page |
|---|---|---|
| non-warrantable condo, warrantable vs non-warrantable, what does non-warrantable mean | `/invest/non-warrantable-condos/` (or the merged `/invest/condotel-financing/` if the lead merges) | One clause, linked on "Fannie Mae's rules for a building". Drop the live FAQ "What does it mean when a condo is non-warrantable?" |
| condotel financing, condotel loans, non-warrantable condo loan | `/invest/condotel-financing/` | Names the loan kinds in one short section and links. |
| HOA special assessment, will fees go up, Shipyard Village's assessment | `/hoa/special-assessments/` | One sentence, linked. Shipyard Village is not retold. |
| HOA liens and foreclosure, dues suits | `/hoa/liens-and-foreclosure/` | One clause: an association suing for dues does not stop a loan. |
| HOA documents, questionnaire as a document | `/hoa/documents/` | This page owns the litigation question on it and the attorney's letter. |
| condo reserves | `/hoa/reserves/` | One link where reserves are named (Renaissance's reserves). |
| building-by-building facts, Myrtle Beach Resort's towers | `/invest/condo-buildings/` | Names Renaissance Tower only for its court record. |
| condo in litigation, fannie/freddie/fha condo litigation, hoa in litigation, how long condo litigation lasts | **this page** | Owns them. |
