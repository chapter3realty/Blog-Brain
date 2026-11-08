# Review round 1: /sell/divorce/, what changed

Fixer, 2026-11-08. Three reviewers (critic 7, reader 7, owner's eye 7). Every change is in `specs/sell-divorce.js`; the page was rebuilt with mkpage. The spec before this round is in scratch `wfn/sell-divorce/sell-divorce.v1.js`.

## Gates after the fix

- mkpage: built, 3,649 words in main.
- `node build.js audit`: the page's one error is "missing from sitemap.xml" (the lead's step, NEEDS 5). There are no sentences over 28 words, down from 3 in the first rebuild.
- score.js: 99/100 (SEO 100, AEO 100, Human 98, Trust 100). The only partial is P7, one picture for 2,267 words.
- claims-scan 0. facts-check: nothing for this page. site-audit: sitemap only. repeat-check `--strict` passes (0 same sentences). structure-check `--strict` passes. struck-check: no struck wording. house-claims 0.
- critic.mjs at 320, 390, 1024 and 1440: the 320 chart overlap is gone (shot `wfn/sell-divorce/r1-c320-chart.png`). One block is left: `photos.blog-no-photo`. See finding 9.
- Shots I looked at: the 320 chart, the 1440 hero, the 1440 choices and calculator, the 1440 tax section, and the 390 choices and "If you do not agree" sections.

## Blocking findings

1. **320 px: the chart label sat on the title's last word (critic, owner).** Fixed. The label has `white-space:nowrap`, and below 420 px it reads "$250,000" alone. The plot has 1.4rem more space on top. At 320 the label sits clear above the dashed line.

2. **Practice claims resting on unanswered Q1 and Q4, plus the deed reading (critic, owner).** Fixed by cutting them. These are gone:
   - "we have both sign the listing"
   - "We send each offer to both of you at the same time"
   - "both are our client, so we tell both of you the same thing"
   - "Our agents read the deed before we list..."
   - "Our agents check recorded sales near the house before they write one"
   - the Q1 offer box "Both of you sign, both of you get every offer..."
   - the Q4 offer box "Send us your dates..."
   - the bottom band's "list it with both owners and keep every step in writing"

   The listing part now states only the law (40-57). The offers rest on the free price from recorded county sales, which the owner approved on /sell/fsbo/:
   - hero bar: "Have us price the house"
   - after the choices: "Have us work out both choices on your house", kept
   - after "If you do not agree": "Have us send one price to both of you"
   - bottom band: "Have us talk with you about the house"

   OWNER-QUESTIONS.md now says that no line rests on Q1, Q3 or Q4.

3. **The H2 "Can my spouse sell the house without me, or refuse to sell?" answered only half (all three).** Fixed. The section now opens: "If both of your names are on the deed, no. A sale of the whole house needs both of you to sign the deed, or a judge's order." The next paragraph covers the refusal: the judge can order the sale and the signature, and the clerk of court signs if the spouse will not. The H3 is now "If only your spouse's name is on the deed": "Then your claim to the house does not bind a buyer or lender until a notice of the divorce case is filed." This keeps row 7's wording. Not verified 5 still bars "your spouse can sell without you". New row 38 (VERIFIED-BY-FIXER) holds the both-names line. It needs a verifier: no SC section says it in one sentence (see the row's note).

4. **The tax H2 never gave the before-or-after answer, and the chart scared the reader (all three).** Fixed. The section opens: "For most Horry County houses, selling before or after the divorce is final does not change the tax, if each of you meets the 2-year tests." Then: "The whole gain on a typical house bought in 1998 or later is under $250,000, one person's limit."
   - The chart title now says "the whole house", and its line is labelled "One owner's limit".
   - The paragraph after the chart says each co-owner reports only their own share, against their own limit.
   - A new paragraph says when timing matters: a gain near or over $250,000, and the $500,000 joint-return limit while still married (rows 21, 22, 26, 27).
   - The nine-number paragraph is cut (owner; repeat-check).
   - The $250,000 and 2-of-5-years paragraphs are cut to a link to /sell/capital-gains/ (critic, uniqueness).

   Kept, because only this page has them: the December 31 rule, the moving-out rule and the buyout-transfer rule.

   **The 1998 cut-off stays (reader nit).** The verifier set it on purpose. The 1996 gain is $1,291 under the limit, inside the index's own error, so the page says "1998 or later" and "close to the limit" for the mid-1990s (VERIFY row 33; struck "since 1996").

5. **The FAQ "Who pays the mortgage during the divorce?" sent the reader to an attorney (reader, owner).** Fixed with new row 37 (SC Code 20-3-130(A), (B), (E), VERIFIED-BY-FIXER). The answer now says:
   - both of you owe the lender, so a missed payment is missed for both of you
   - while the case is open, the Family Court can order temporary support
   - a support order can make one spouse pay debts for the other, such as the mortgage

   "Such as the mortgage" is the fixer's example of a debt. The row says so.

6. **Too much technical detail (owner).** Cut:
   - the 12 USC 1701j-3 paragraph, now one plain line that keeps the struck-list living-there limit, as the reader asked
   - the Fannie Mae debt-counting rule
   - the limited cash-out refinance and its 12 months
   - "a loan Fannie Mae buys", twice
   - "federally related loan"
   - "equitable apportionment", now one plain line, "Lawyers call this equitable distribution, a fair split that is not always half", because must-answer.md lists it as a search word
   - tenant in common
   - "takes over its old cost basis", now "takes on the gain from the original purchase"
   - the clerk's two street addresses, now "offices in Conway and Myrtle Beach"
   - the seven listing duties
   - "arbitration or early neutral evaluation"
   - the 1-year and 6-year "part of the divorce" definitions
   - the map link inside the loan paragraph

   "Nonresident alien" now reads "neither a US citizen nor a US resident". It stays twice because VERIFY rows 20 and 24 require the carve-out on both the deed fee and the tax rule. The buyout section now opens with the two sentences the owner asked for: three ways off the loan (a sale, a new loan, the lender's release), and that a divorce order or a quitclaim deed does neither.

7. **Repetition (owner).** Each repeat is now said once:
   - "even if only one spouse's name is on the deed": in section 1 only
   - "can order the house sold": in the short answer only
   - "that part of the order is final": in section 1 only
   - "15 factors": in section 1 only; the hero chip is gone and the FAQ answer is reworded
   - "is a question for a family law attorney": once, in the inherited-house FAQ (it was in 5 places)

   The steps no longer restate the sections. Step 3 is one line, step 4 is one line, step 5 drops "final", and step 6 drops "sold before or after". The FAQs on the money and the appraisal are cut, since steps 7 and buyout 1 answer them. The FAQ "The rule has one narrow exception" went with them. repeat-check `--strict` passes with 0 same or near-same sentences.

8. **Too many exact numbers; the same worked example three times; the fee box note (owner, reader, critic).** Fixed:
   - The worked table is cut and the calculator kept, per the owner's 2026-10-26 rule.
   - The short answer has no numbers. It is two paragraphs: yes, and who decides; then what a sale or keeping the house does to the loan.
   - The fee box takes the approved fsbo wording: label "A fee you were quoted, in percent", note "The box starts at 1 percent. Type the fee an agent quoted you."
   - "The table works out..." now reads "The calculator works out the first two choices with your own numbers."

9. **The hero facts led with trivia (owner).** Fixed. The three tiles are now:
   - "Before it is final: you can sell during the case, when the two of you agree"
   - "Off the loan: only by a sale, a new loan or the lender's release"
   - "A spouse who will not sign: can be replaced by the clerk of court, on a judge's order"

   The $1,295 deed fee stays where it belongs, in the buyout's deed step and on the Choice 2 card.

10. **No IDX feed (owner).** This page may not edit `idx-lib/feeds.js`. NEEDS 7 asks the lead to add `"/sell/divorce/": COMPETITION`.

11. **The photo was not of the topic (owner, critic).** It is out. The owner reviewer offered "or leave the photo out", and nothing fits:
    - Commons has no Horry County photo whose point a reader gets in a second. The one candidate, "Rows of houses near the Intracoastal Waterway from George Bishop Pkwy", is mostly a concrete bridge wall.
    - Every for-sale-sign photo either carries a brokerage brand as its subject (rules/images.md) or was taken in another state.
    - Commons rate-limited the search, as in NEEDS 4.

    The critic tool now reports `photos.blog-no-photo`. I left that block in place, following the owner's own option over the machine rule. NEEDS 8 asks the lead to send the photo partner the shot list. P7 in score.js is at 50% for the same reason. The page now has its own share card (`images/2026-11-n/sell-divorce/share.jpg`, made with ogcard.js) so S5 passes.

## Nits taken

- The hero sub line is held to 720 px. At 1440 it wraps to two lines inside the block (shot `r1-c1440-hero.png`).
- "They include what each spouse put in, counting work in the home, ..."
- "When a husband and wife own the house together" is gone with the Q1 lines.
- Unexplained words:
  - "no-fault" is explained in step 1 ("one where neither spouse has to prove the other did wrong")
  - "answered or is in default" now reads "answered the case or missed the deadline to answer"
  - "refinance" is explained once
  - "Middle home, condos aside" is gone from the short answer; the calculator says "a typical Horry County house"
- The meta description is rewritten: "Can you sell a house during a divorce in South Carolina? The three choices, how a buyout works, how to get off the loan, and the tax, with a calculator."
- "What if we owe more than the house is worth?" is a new FAQ, from new row 36 (CFPB, short sale, VERIFIED-BY-FIXER). The calculator shows a note when the balance is over the value.
- "When a buyout will not work" is a new H3: if the keeper cannot get the loan, the choices left are a sale, keeping it for a time, or the judge.
- "If the deed says joint tenants" is cut to three sentences.
- The listing part is two plain sentences of law, with no duties list.
- The 320 and 390 read.wall: an H3 now breaks the run after the calculator. 390 has no warning. 320 has one mild warning.
- Trust: removing the practice lines took away the first-hand sentences. Two true ones are added: "We read the county's recorded house sales for the 12 months to September 2026" (row 15, the deeds pull) and "We checked what a house that sells for about $350,000 today would have cost in each year, using the federal house price index" (rows 32, 33). T2 passes.

## Nits not taken, and why

- **Can one spouse stay in the house, or make the other leave, while the case is open (owner nit).** There is no primary source in the ledger, and Not verified 4 still holds for possession. The only primary-source answer would come from the domestic abuse statute, which this page should not raise unasked. Left out.
- **The sitemap and llms.txt** are the lead's step (NEEDS 5).
- **The popup with the beach skyline (reader)** is site-wide, not this page's.
- **The 1998 cut-off** stays, as explained in finding 4.

## New ledger rows (facts.md, section G)

- 36: short sale, CFPB. VERIFIED-BY-FIXER.
- 37: temporary support and payment of debts, SC Code 20-3-130. VERIFIED-BY-FIXER.
- 38: both names on the deed, SC Code 27-7-40 and 15-61-10 with row 6. VERIFIED-BY-FIXER. It needs a verifier before shipping.
