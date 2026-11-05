# Rules review, 2026-11-05

The owner asked: "measure more based on what google wants rather than we want", "re evaluate what rules we have and remove ones you think are holding you back from ranking", and "tell me anything you think im doing wrong". This file is the answer, with what changed today and why.

## What we measure now

Until today, every check graded a page against our own rules. Nothing looked at Google.

- `tools/changes.js` reads the website's history and records, for every page, each date its title, H1 or length changed. The record is in `measure/changes.json`.
- `tools/gsc.js` imports the owner's Search Console exports (`measure/GSC-HOWTO.md`). It reports clicks, impressions and position for every page, next to its last change. It lists every page Google showed to nobody. It compares two months and marks each page UP or DOWN.
- The scorer (`tools/score.js`) stays, as a check before a page ships. Its score is not the goal. The goal is Search Console numbers 28 days after a page ships.

What the history already shows:

- Since launch, the 149 pages have had 144 title changes and 155 H1 changes. 17 pages had their title changed 3 or 4 times. A new title can change which searches a page shows for, and its click rate starts over. We keep resetting pages before they settle.
- Redesigns made pages much longer. /hoa/reserves/ went from about 860 words to about 2,340. The median page is now about 1,400 words, and the longest tenth are over 2,400.
- 83 of 143 pages fail the first-hand experience check. Google's quality guidelines put first-hand experience first: "we did this, we saw this".

## Rules retired or loosened today

Each one cost a page the words people type into Google, or made the writing stiff for no ranking gain.

| Rule | Before | Now | Why |
|---|---|---|---|
| Industry terms (P6, BUYER-2, `rules/plain-words.json`) | A page failed if it used "homestead exemption", "CL-100", "Act 388", "NFIP", "flood zone X", "estoppel", "contingency" and 37 more | The term is allowed when the page explains it in plain words where it first uses it | These are the exact words people search. A page that bans the word "homestead exemption" cannot rank for "homestead exemption Horry County". The plain words stay, next to the term. |
| Few numbers (P2) | 3.5 numbers per 100 words | 6 per 100 words | Local numbers no other site has are what our data pages rank on. The owner's complaint was exact numbers and too many dates, which P1 and P3 still check. |
| Date said once (P3) | Every page | Not on /market-reports/ | A market report's dates are the news. |
| Only people act (P10, FIG-2) | Scored | Advice only, not scored | It flagged natural sentences ("the rule allows", "the county sets the rate"). No reader or search engine is helped by the rewrites. Real metaphors are still caught by the build's word list. |
| "Nothing sets anything" (website mkpage) | The build stopped | A note | "Who sets property tax rates in Horry County" is a real search. |
| "Say appreciation" (website build) | "Price change", "price growth" failed the build | Allowed; "appreciation" still preferred | People search "home prices" and "home values", not "appreciation". |

## Rules kept, and why

These help a page rank or help a reader, so they stay:

- The answer in the first two sentences, under a heading that is the question people type. This is how Google picks a passage to show.
- One H1 that names the place; titles of 30 to 62 characters; a unique title and description.
- Real local data from verified rows; no invented stories; no rate or payment; the BrickWood disclosure; fair housing words. These are trust and law, not style.
- First-hand experience (T2). It is the check most pages fail, and the one only the owner and agents can fix.
- Internal links in the body, and other pages linking in.

## Rules to watch, not changed today

- **Short sentences** (SHAPE-1: 28 words at most, 16 on average). Correct for readers, but when every sentence on every page has the same length, the pages read as machine-made. A mix of lengths, most under 25, would read more human. Left as is until we can compare pages in Search Console.
- **The "keywords" cannibalisation check in the build** compares each page's meta keywords. Google ignores meta keywords. Real overlap shows in Search Console, when two of our pages get impressions for the same search. Watch the election pages there.
- **FAQ schema.** Google stopped showing FAQ results for most sites in 2023. The FAQ still helps readers and AI answers, so it stays, but it earns no rich result.

## Page looks

The owner asked for different styles every few pages. Variety helps readers; Google does not reward it. The plan is one look per kind of page, not a random rotation:

- **Guide** (how-to, costs, rules): the current glass look.
- **Report** (data, market, news): the election page's look. Navy, brass and ivory, thin rules, a number strip, plain tabs.
- **Place** (towns, neighborhoods): map first, photos, then the numbers.
- **Tool** (calculators): the calculator at the top, the explanation under it.

Each look gets built once as shared parts, then reused. It is built the next time a page of that kind is redesigned, not as a site-wide change.

## What the owner could do differently

The owner asked for this plainly, so here it is plainly.

1. **Judge pages by results, not by a preview.** The election page went through five versions in two days, each from a reaction to how it looked. Each round was reasonable. None was measured. A month of Search Console numbers would say more than any of them.
2. **Stop changing titles on pages that get clicks.** The headline rewrite of 47 pages, and 144 title changes in total, is the most likely way we have hurt rankings. Change a title only when Search Console shows impressions with few clicks.
3. **Not every correction needs to be a rule for every page.** "Feels AI" and "too many numbers" were right about one page, and became site-wide rules that now fight each other. When you correct something, say if it is about this page or every page.
4. **Slow the volume until indexing is known.** WORKFLOW says to grow only when Search Console shows new pages indexed. We made 20-page batches and seven pages in one night without checking. On 2026-10-01 the audit found about 18 of 127 pages in the indexes it could reach.
5. **Give the two things only you have:**
   - the Search Console exports, once a month (`measure/GSC-HOWTO.md`)
   - real stories from you and the agents: a buyer you helped with a flood zone, a seller's price, an inspection that found something. Ten true stories would lift more pages than any redesign. Use `templates/owner-questions.md`.

What the owner is doing right: asking for local, unique data; insisting on no invented stories and no fake quotes; and reading the pages himself. Those are the parts that make pages rank.
