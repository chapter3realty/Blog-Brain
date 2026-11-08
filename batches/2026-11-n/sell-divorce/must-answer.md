# Must-answer list: /sell/divorce/

Researcher, 2026-11-08. Built from Google search suggestions for 59 queries (235 kept) (`<web4>/data/2026-11-n/sell-divorce/raw/google-suggestions.txt`, made by `pull-suggestions.sh`), the reader's job, and the deciding fact. Search Console was not available. The story bank has no divorce story, and the brief says none: this page tells no story.

What the suggestions show. Local phrasings ("selling a house during divorce in sc", "myrtle beach divorce house", "quit claim deed divorce sc") return no suggestions, so local demand is small and national phrasing carries the page. The South Carolina suggestions that do exist are all about the law: "who gets the house in a divorce in sc", "is south carolina a 50/50 divorce state", "what is considered marital property in south carolina", "is inheritance marital property in south carolina", "south carolina equitable distribution factors". The Myrtle Beach and Horry County suggestions are all about lawyers, the court and records ("divorce lawyers myrtle beach", "horry county family court docket"), so the page names the court and says when to call a family law attorney, and recommends no lawyer.

## The one main question (the title words)

**Can I sell my house during a divorce in South Carolina, and what are the choices?** Searched as "selling house during divorce", "can i sell my house during divorce", "can i sell my house while going through a divorce", "can i be forced to sell my house in divorce", "should i sell my house in divorce", "what to do with house in divorce".

## The two to four questions a reader asks next

1. **Sell it, or let one of us buy the other out: what does each leave us?** ("buying out spouse in divorce", "how to calculate house buyout in divorce", "house buyout divorce calculator", "how does a house buyout work in a divorce", "home equity divorce calculator", "split home equity divorce", "refinance to buy out spouse", "remove spouse from mortgage", "quitclaim deed divorce"). The largest group: 48 suggestions, counting refinance and "remove from the mortgage". Answer with the worked example on the middle Horry County house and the rules a buyout must meet.
2. **Who gets the house in South Carolina, and is it 50/50?** ("who gets the house in a divorce in sc", "is south carolina a 50/50 divorce state", "what is considered marital property in south carolina", "is inheritance marital property in south carolina", "equitable distribution factors", "who has to leave the house in a divorce in sc"). 29 suggestions. Answer from SC Code 20-3-610 to 20-3-670: what is marital property, the 15 factors, the family home factor. State the law; never predict a result.
3. **Can my spouse sell without me, or refuse to sell?** ("can my husband sell the house without my permission", "can my wife sell our house without my consent", "do both owners have to sign to sell a house", "spouse refuses to sell house in divorce", "what happens if ex refuses to sell house", "can spouse force sale of home in divorce", "court order to sell marital home"). 36 suggestions. Answer: who signs, the notice of the case recorded with the county, the court's power to order a sale and have the clerk sign the deed.
4. **Do we pay capital gains tax, and should we sell before or after the divorce is final?** ("capital gains tax selling house divorce", "capital gains on house after divorce", "should you sell house before or after divorce", "is it better to sell a home before or after a divorce", "how to report sale of home after divorce"). 34 suggestions. Answer with IRS Publications 523 and 504 and our comparison of the gain on a typical local house against the $250,000 and $500,000 limits. Link /sell/capital-gains/ for the general rules.

## Ranked, with what answers each

| Rank | Question | Suggestions pointing to it | Ledger rows |
|---|---|---|---|
| 1 | Buyout or sale: how is it figured, and what does each of us get? Refinance, remove a spouse from the loan, quitclaim deed | 48 | 16 to 20, 29 to 31 |
| 2 | Can my spouse sell without me, or refuse to sell? What if we do not agree? | 36 | 6, 7, 8, 12, 13 |
| 3 | Capital gains, and sell before or after the divorce is final? | 34 | 21 to 28, 32, 33 |
| 4 | Who gets the house in SC? Is it 50/50? What is marital property? Who has to leave? | 29 | 1 to 5 |
| 5 | Divorce lawyer, mediator, Family Court in Myrtle Beach and Horry County | 31 | 2, 10, 34 (name the court; recommend no one) |
| 6 | How is the house valued in a divorce? Do we need an appraisal? | 11 | 11, 35 |
| 7 | Can I sell before the divorce is final? How long does a divorce take in SC? | in group 3 | 9, 10, 4 |
| 8 | Where do the sale proceeds go until it is settled? | 1 ("proceeds of house sale in divorce") | 14 |
| 9 | Can one of us keep the house for a time (for the children)? | in groups 1 and 4 | 3 (factor 10), 18, 23 |

Counts: `count_suggestions.py` reads 235 suggestions after dropping other states, other countries and unrelated ones; groups overlap. Output: `suggestion-groups.json`.

## The deciding fact

The page is planned around three choices that the reader and their spouse can make by agreement, and that a judge can make if they do not. The law had to allow that. It does: in South Carolina the Family Court divides the marital property, the house included, "regardless of how legal title is held" (row 1); it may order the house sold, publicly or privately, and if a spouse will not sign the deed, the clerk of court can sign it (row 6); and a property agreement the spouses sign and the court approves is how most of this is settled (rows 3, 4). The page can be written as planned.

## Words readers use (each once, in plain context)

"marital property", "equitable distribution" (South Carolina's law says "equitable apportionment"; explain once as "a fair split, which is not always half"), "buyout", "buy out my spouse", "refinance", "remove from the mortgage", "quitclaim deed", "capital gains", "Family Court", "separation agreement", "lis pendens" (explain as the notice of the case recorded with the county), "appraisal".

## What the top results do, and how to beat them

The results are law-firm pages and national real estate blogs. They list the options, say "it depends", and end with a call to a lawyer. The SC law-firm pages quote the 15 factors but say nothing about the deed, the loan or the tax. None works a buyout and a sale on a real local price, none says the spouse-to-spouse deed in South Carolina is free of the deed fee, and none shows how large the gain on a typical Horry County house is against the $250,000 limit. Beat them with rows 29 to 33, 20 and the law said plainly in rows 1 to 10.

## Owned elsewhere (link in one sentence, do not repeat)

- The tax rules in full (2 of 5 years, basis, what counts as an improvement): /sell/capital-gains/
- The full cost of selling and the net calculator: /sell/net-proceeds/
- What the house is worth, the county value test, area prices: /sell/home-value/
- The disclosure form: /sell/seller-disclosure/ (sibling) and /sell/fsbo/ (form drawing)
- A cash sale: /sell/cash-offer/ (sibling); repairs: /sell/repairs-before-selling/ (sibling)
- Selling and buying the next home: /sell/sell-or-buy-first/ (sibling); timing in the year: /sell/best-time-to-sell/ (sibling)
- Co-owners who are not spouses (heirs, partition): /sell/inherited-house/
- A rental with a tenant: /sell/rental-property/; a condo: /sell/sell-my-condo/
