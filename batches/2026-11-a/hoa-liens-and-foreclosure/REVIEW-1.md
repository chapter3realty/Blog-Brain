# Review round 1: /hoa/liens-and-foreclosure/, what the fixer changed

Spec: `specs/liens-and-foreclosure.js` (website working copy). The page was rebuilt from the spec. Nothing was hand-edited. New facts are rows 40 to 43 in `facts.md`, marked VERIFIED-BY-FIXER. Row 39 has a fixer's place check at the end of `facts.md`. The lead should re-check all of them.

## Critic

Blocking:
- "matched each home to the county's records": changed to "matched each association case to the county's parcel records".
- H. 3447 "...in the Senate Judiciary Committee since": changed to "Passed the House 110 to 2; now in the Senate Judiciary Committee". No date typed.
- Photo row 39 still pending: the fixer checked where the photo was taken against the courthouses.co gallery and its text for 1301 2nd Avenue. Same front, flagpoles, radio tower, and the dedication plaque names the building. Notes are at the end of `facts.md`. The photo and its caption stay. The lead marks row 39 verified, or drops `PHOTO` and `ph.share` if he disagrees.

Nits:
- Buttons wrapping at 320: "Ask about selling first" is now "Plan a sale". "Have us check a unit" stays, because build.js audit fails "Check a unit": a form link must be worded as a request. Instead `a.btn` gets `text-wrap:balance` in the spec's own CSS.
- One word alone on a heading line: `text-wrap:balance` on the page's h2, h3 and card titles. The 320 and 390 shots show no word alone.
- Shared homes strip ("Value-add picks", empty): not in the spec. NEEDS.md items 1 and 2 already raise it with the lead.
- Q&As repeated: the three body H3s under "Behind on HOA dues?" are cut. Each answer is now only in the FAQ.
- "...and the lien through the court": now "Courts enforce them like a contract. A lien under them is enforced through the court too."
- Hero 31% tile: replaced by the 89 percent fees tile, as the owner reviewer asked. The body sentence on complaints is kept, rounded to "almost a third of them".
- "paid off? Yes." FAQ: cut, because it repeated the short answer (owner finding). The short answer is scoped "For a house or a condo" and says the lien is on the home itself.
- "Chapter3 can list the home right away": cut. The CTA now says what the agent does (see the owner's nit below).
- "Foreclosures are rare among homes for sale here": the whole MLS listings line is cut (owner finding). Row 38 and the `L` check are gone from the spec, and so is the listings part of the sources note.
- P6 "estoppel": left as it was. It is explained where it appears and links to the estoppel guide.

## Reader

- How long do I have, where do I file, what is an answer: new step 4 "Your answer is due" (30 days, every case, SCRCP 12(a), row 40). Act 1 is now "Answer the lawsuit within 30 days": an answer is your written reply, you serve it on the association's lawyer named on the summons and file it with the clerk of court (rows 40 and 41). The short answer also says 30 days.
- What closes the case: act 2 is now "Have the case dismissed when you pay". It tells the owner to ask the association's lawyer to dismiss the suit and to file a cancellation of the lawsuit notice with the clerk. State law lets whoever filed the notice cancel it once the case is settled or dismissed (15-11-40, row 42).
- Can I still sell with the suit filed: act 5 says the lawsuit notice does not stop a sale, a buyer who closes is bound by the case, and so the sale has to pay the association and end the case (15-11-20, row 42).
- Getting the home back after the auction: new FAQ "Can you get your house back after an HOA foreclosure sale?" It uses the Murrells Inlet case (row 11, moved here from the acts list so it is told once) and the Winrose set-aside after five years (rows 12 and 14). No claim is made about a right of redemption, which is still not verified.
- Timeline from one Columbia case: the step tags now read "Winrose: 3 months in" and so on. The lead-in says the months are from one Richland County case, and only the 30 days to answer is the same in every case.
- Payment plan: new FAQ "Does an HOA have to agree to a payment plan?" Answer: No. The state's HOA and condo laws do not require one; get any plan in writing (row 43).
- Deficiency paragraph: rewritten to give only the effect. In all 4 cases the bidding closes at the auction with no 30 days of extra bids, so plan to settle or sell before that day. The term "deficiency judgment" is gone from the page.
- Hard sentences (Bailey, bank-forecloses-a-condo): both rewritten (see owner items).
- Report tone, too many numbers: the 14.1 percent line and the listings line are cut. Prose figures are rounded: "almost $2,900", "about 12 times", "about 5 cents for each dollar". The cents stay in the table.
- Not changed: "recorded" is used less often but not removed, because the struck list needs it in the title-search sentence (liens 30). It is explained once ("These are the rules filed with the county").

## Owner

- FAQ repeating the body: the FAQ now holds only questions the body does not answer: payment plan, getting the house back, stopping dues, fines, bankruptcy. The last three were cut from the body. "Paid off" and "super lien" were cut from the FAQ. The search term "super lien" stays in the mortgage section. The fines guide link moved to the "Can they foreclose" section.
- "4 of the 19" four times: it is now only in the hero tile and the square chart. The short answer and the section opener no longer state it. The opener says what the count shows ("a real share of the county's foreclosures, mostly against condo units"). "31 percent" is no longer said twice.
- "covenants" and the broken card sentence: rewritten as above. "Covenants" is not in the page's prose any more.
- Too many exact numbers: rounded as above. The 14.1 percent and MLS lines are cut. The 89 percent appears only in the hero tile; the figcaption no longer repeats it.
- Technical detail: Bailey is now "In a 1994 case, a mortgage recorded before the dues fell due came first. That HOA's papers did not say the HOA came first." The bank-forecloses card is now "Your neighbors pay the gap", worded for the owner and kept to row 33's safe wording. The Fannie Mae card says Fannie Mae buys home loans from lenders and will not buy a loan on a unit there; "reviews in full" became "in its full check of a building". The deficiency paragraph is rewritten. The receiver sentence and the timeshare sentence are cut. The section's first sentence is scoped "for a house or a condo" in place of the timeshare line, and struck-check passes.
- Hedges: "Not without risk" is now "No." in the FAQ. "Where the power comes from depends on..." is now "The power comes from one of two places:". The 2019-case sentence is rewritten: "In a 2019 case, the community's rules allowed foreclosure, and the Supreme Court said...". "After it, the association may not take your money" is cut.
- Nit, Chapter3's part: the CTA "Selling before the auction" now says the agent finds out before closing what the association says is owed, so that amount is paid from the sale, and tells you what the home could sell for and what would be left (rows 25 and 29, story `hoa-lien-flip`). It makes no promise about dismissing the suit: the closing attorney's part is not in the ledger or the playbook.
- Nit, redemption question: answered (see Reader).
- Nit, IDX strip: a shared feed, left to the lead (NEEDS.md items 1 and 2).
- Nit, "since": fixed.
- Nit, 31% tile: replaced by 89%.
- Nit, small dated photo: kept. Its place is now checked. The photo partner's shot list (shot-list.md) replaces it later.

## Gates after the rebuild

- `node tools/mkpage.js specs/liens-and-foreclosure.js`: built. Two owner-rule hits were fixed on the way ("sets", "law lets").
- score.js (SCORE_TODAY=2026-11-02): 99/100 (SEO 100, AEO 100, Human 99, Trust 100). The one partial is P6 "estoppel", which is explained and linked.
- claims-scan: no hits on this page. facts-check: no hits on this page. house-claims: 0. struck-check: no struck wording. photos.js check: all records pass.
- build.js check: OK. build.js audit: on this page only the two date FAILs (dateModified and visible Updated versus sitemap lastmod), which the lead's dates run sets, and the A20 warning (no attributed sentence from Tim or Devin; no story fits). The new "not only" contrast, ". So" opener and CTA-label FAILs from the rebuild were fixed.
- critic.mjs at 320, 390, 768, 1024, 1440: 0 blocking, 0 warnings. Shots: scratchpad `wf2/hoa-liens-and-foreclosure/critic-shots-r1/`. The 390 shot was looked at in full.
