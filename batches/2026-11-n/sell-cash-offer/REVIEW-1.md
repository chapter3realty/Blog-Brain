# Review round 1: /sell/cash-offer/

Batch 2026-11-n, Lane N. Fixer, 2026-11-08. Three reviewers (critic 6, reader 7, owner 7.5) read version 1. All fixes are in `specs/sell-cash-offer.js` (version 2), never in the built page. New facts: rows 29 to 32 in `facts.md`, marked VERIFIED-BY-FIXER. The questions behind them are in `OWNER-QUESTIONS.md`.

## Blocking findings and what changed

### Critic

1. **Chart counts worked back from the rounded percent (134 and 95 instead of 133 and 96).** The owner's reviewer asked for the company-share chart to be cut, so it is gone, and with it the wrong counts. No count is worked back from a percent anywhere on the page now. Every remaining figure is read from `findings.json` or the sibling's `zillow-months.json`, and the spec throws if a figure moves.
2. **"Some companies resold within 30 days, most within days."** Cut. The two tiles under it ($35,000 in 25 quick resales; 89 percent of the neighbors' price) are cut too. The owner's reviewer said "cut or simplify", and neither measure changes what a seller does.
3. **"A middle 68 percent" is not plain English.** The short answer now says: "paid about 68 cents for each dollar of the resale price. That is the middle sale: half paid more, half paid less." The section opener says "In the middle sale, a company paid about a third less than it later resold the house for." (row 32: 100 - 68.3 = 31.7). "Middle" went from 13 uses to 8, each after the definition.
4. **"Those were his numbers" points to no one.** The story is retold (owner finding 6 below) and now ends "That was his sale and his figures, not a promise", after sentences that name "the owner" and his figures.

### Reader

1. **The page never says how fast.** The short answer now gives it: "A cash sale skips the wait for a loan. In September 2026, the middle listed home in the Myrtle Beach area took 53 days to get a signed contract, then about five weeks to close." Rows 29 and 30 are carried from the verified sibling ledger, sell-best-time-to-sell rows 12 and 8, in that verifier's wording. The section on when cash is better links that page for the months. No number is given for a cash closing: no primary source has one (Not verified). The one real case, 13 days from listing to closing, is told once, in the story.
2. **The "List it as is" row has no number.** No source gives an as-is price, so the page cannot print one honestly. The page now says why and what to do: "Our count of the county's deeds cannot tell a house sold as it is from one that was fixed up, so it gives no as-is price. We work that price out for your house from the recorded sales near it." It also gives the test: "It leaves you more when its price, less the listing fees, is above the offer." The cell reads "Its as-is price (we work it out)". A typed range (for example "between $178,000 and $260,000") would be a claim with no row behind it.
3. **"22 houses, middle asking price about $175,000" read as the same as the $178,000 offer.** The asking prices are cut from the cash-only counts. They are prices of different, cheaper houses and were never comparable with the worked example.
4. **"I cannot do the fee math."** The fees column now holds the same kind of value in every row: "None", "$1,780 for each 1% at $178,000", "$2,600 for each 1%". The page says "Listing fees are a percent you agree with your agent", and the two ways to list each get one plain test against the cash offer. No commission rate is stated: none is ledgered, and fees are agreed between seller and agent.
5. **The two sentences on resale timing disagree.** The "within 30 days" sentence is cut (critic 2). The page keeps only "about four months later".

### Owner

1. **The short answer is not plain English and repeats in section 2 (96% match).** Rewritten as in critic 3. Section 2 now opens with the "about a third less" sentence and the chart's two prices, so it does not repeat the short answer.
2. **Too many numbers in "How much less".** That section keeps 68 percent (via the chart), $170,000 and $260,000, and "about four months". Cut: the 67-resale and 55-to-78 and 97 percent note (the chart note keeps only "67 resales, separate middles"), the 70 percent rule, "after repair value", the quick resales and the neighbors' measure.
3. **"Some companies resold within 30 days, most within days."** Cut (critic 2).
4. **"Who makes cash offers" is record-keeping.** Cut to the three kinds of buyer and one paragraph on how common buyers without a loan are (at least 1 in 3 resales, about 3 in 4 of them people, so a listing reaches them). Gone: the 1,045 and 922 company names, the 20 instant-offer purchases, the 1-in-9 company share, the price-band chart and the towns. The hero's 1-in-9 tile is gone too.
5. **The page repeats itself.** Each fact is now said once. Wholesaling is defined only under "Is wholesaling legal in South Carolina?". Checklist item 4 links there and no longer defines it, and the FAQ entry is gone. The disclosure exemption is only in the FAQ ("Neither side has to agree", the critic's wording). The body links /sell/seller-disclosure/, and the penalty sentence (owned by that sibling and /sell/fsbo/) is cut. The 13-day sale is told once, and the FAQ entry is gone. The deposit refund is said only in item 3 (inspection). Item 2 now says only what the deposit is, who holds it and when the seller may keep it.
6. **The story is flat, mid-page, and ends in a dangling line.** It is now near the end, the last thing in "Can you sell a house as is", under its own small heading, "One sale to a cash buyer". It carries the tension from the story bank, adding no detail: he was moving to New York to be with his sister, the lease had eight months left, and the next investor would make about half his cash flow. Then comes what the agent did and the 13-day result. Row 31 has every quote. It links /sell/rental-property/, which tells the full story. The $1,200 and $600 figures are left out (fewer numbers).
7. **The three-ways table raises the key question and does not answer it, and its units change.** Fixed as in reader 2 and 4. The deed-fee row is gone from the table: the fee was nearly the same in all three rows and changed no choice. The fee is now in the FAQ ("Do you pay closing costs in a cash sale? Yes, at least the state and county deed fee..."), which takes the critic's "at least" nit. A table row that showed the fee as a rate in one cell and as dollars in the next was the units complaint.
8. **Jargon (C6, C5, "a loan Fannie Mae will buy", "write any wind policy", "a contractual position").** C6 and C5 are gone. The row reads "It has damage to its safety or structure: ... Until the damage is repaired, a buyer cannot get a home loan on it that Fannie Mae will buy from the lender." That is row 22's rule in plain words, and the struck "most buyers who need a loan cannot" is not used. "No insurer will write any wind policy" became "No insurer will cover it for wind", and "named storms" became "hurricanes included". The "contractual position" item is cut. "Held in escrow" became "A third party, such as an attorney, holds it until closing". "and/or assigns" stays, quoted, because it is the words a seller will see in the contract, and the next words say what it does.
9. **The hedged paragraph quoted from the Commission.** It is now in our voice: "A cash offer made before the house is listed is one buyer's offer. A listing puts the house in front of every buyer at once, with a loan or without. The state Real Estate Commission warns that keeping a home off the open market can mean less competition and a lower price, worse terms or a longer sale." This is the source's "may reduce ... may hurt", said once as "can mean", with the link kept. The struck "most qualified buyers" is not used.

## Nits taken

- Critic, 1440 gap beside the photo: the photo now sits in a two-column block beside the text and the decision table, not in grid rows, so no row stretches. The 1440 shot shows the photo beside the table's first rows.
- Critic, slow first screen at 320: the hero has two short tiles (68% and at least 1 in 3). The short answer starts at about 583 px at 390 (it was 785).
- Critic, the three-ways cells: done (reader 4).
- Critic and owner, disclosure exemption wording: "Neither side has to agree", in the FAQ only.
- Critic, the title: "Myrtle Beach Cash Offers: Flippers Paid 68% of Resale Price" (59 characters). It starts with the searched words, and "of Resale Price" is no longer clipped.
- Critic, 1 in 9 against 12 percent: both are cut (owner 4).
- Critic, the 70 percent rule is not the same measure: cut.
- Critic, schema headline against the italic line: ogTitle (the Article and WebPage headline) now reads "A cash offer for your Myrtle Beach house, or list it? House flippers here paid about 68 percent of the price they resold for", the same as the visible H1 and italic line.
- Critic and owner, wholesaling twice: once (owner 5).
- Critic, FAQ closing costs: "Yes, at least the state and county deed fee", with a pointer to the net proceeds calculator.
- Critic, C5 unexplained: C6 and C5 are gone (owner 8).
- Critic, the "We buy houses" description: now "Buyers who send letters, call, or put up roadside signs offering cash for houses." It is a definition with no number in it. No row is needed for what the name means.
- Reader, the first button assumes an offer: the bar reads "Got a cash offer? Send it to us before you answer...". A new FAQ entry answers the reader's real question, "Does Chapter3 buy houses for cash? No...", on Q3's proposed answer. The second offer box, "Have us list it as is in front of cash buyers", is how a seller without an offer gets cash buyers.
- Reader, too many numbers and the C6/C5, Fannie Mae, CCMLS and escrow words: done (owner 2, 4, 8). CCMLS stays only in the listings' source line, explained as "the local agents' listing service". The verifier requires the feed's source name with the counts.
- Reader, the long wholesaling section: it is now one definition paragraph, three short items and one paragraph on guidance and the attorney. The FAQ copy is gone.
- Reader, the inspection item repeats the deposit item: fixed (owner 5).
- Reader, the fine print reads like a form: rewritten (owner 9).
- Owner, the bar and the end band used the same words: the band now reads "Cash offer or listing: which is right for your house? Tell us what the house needs and when you must move. We will work out what you would keep each way, and say which we would choose." No offer repeats another's words.
- Owner, the cramped first column of the three-ways table at 1440: the first column has a minimum width, and with the deed column gone each name takes one or two lines.
- Owner, the "after repair value" term: cut.
- Owner, the wire-fraud line was buried: it is now its own short line under the checklist, with a thin left rule and no box.

## Findings not taken, and why

- **Critic and owner, the Florence photo.** It is kept for now. It is the only licensed photo on hand that shows the "cannot get a loan" case, and the critic accepted it. Its caption now says what it shows for the seller in plain words. `shot-list.md` already asks the photo partner for a house in poor repair and a roadside "we buy houses" sign, with the sign's name and number out of frame. Replace the photo when his photos arrive.
- **Critic, the practice claims rest on proposed answers Q1, Q3 and Q4.** They are still proposed. The page now also leans on Q3 for "We do not buy houses ourselves" (FAQ). The owner must confirm Q1, Q3 and Q4 before publishing. `OWNER-QUESTIONS.md` says so.
- **Reader, a typical cash closing time.** It is not given. No primary source has one (facts.md, Not verified). The page gives the listed-home timing, what a cash sale skips, and the one real case.
- **Machine warnings (read.wall) left.** At 320 and 390, the short answer through the offer bar measures 965 to 1,127 px. It is three short paragraphs and the slim bar, the same pattern as the approved pilots. At 320, the last FAQ answer through the sources measures 936 px. Both are mild. The two walls version 1 had in the body ("what you keep" and the wholesaling section) are now broken by short ruled lists.

## Gates on version 2 (2026-11-08)

- mkpage build: wrote chapter3realty/sell/cash-offer/index.html, 1,612 words of prose.
- score.js (SCORE_TODAY=2026-11-08): 100/100 (SEO 100, AEO 100, Human 100, Trust 100). Mean sentence 13 words, none over 28. P3 date said twice.
- claims-scan: 0 findings. facts-check: 0 on this page. house-claims: 0. struck-check (this batch and FSBO): no struck wording. repeat-check --strict: passes. structure-check --strict: passes.
- build.js audit, this page: no fails except "missing from sitemap.xml" and "not listed in llms.txt", which are the lead's (NEEDS.md). The dead links to sibling pages are gone now that the siblings are built.
- critic.mjs: 320 and 390, 0 blocking and 3 warnings (above); 1024 and 1440, 0 blocking and 0 warnings. Re-run at 320 and 1440 after the last edit: 0 blocking. I looked at the 1440 shot from top to bottom and at the 390 and 320 shots of the hero, the three-ways cards and the cash-only counts.
