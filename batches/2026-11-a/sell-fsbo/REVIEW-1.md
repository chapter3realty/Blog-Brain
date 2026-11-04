# Review round 1: /sell/fsbo/ (fixer, 2026-11-04)

Spec `specs/fsbo.js`, rebuilt with `node tools/mkpage.js specs/fsbo.js`. The v1 spec is kept at `scratchpad/wf2/sell-fsbo/fix1/fsbo.v1.js`. New facts: ledger rows 28 to 31 in `facts.md`, section H, all `VERIFIED-BY-FIXER`. The lead re-checks them.

## Gates after the fix

- score.js: 100/100 (SEO 100, AEO 100, Human 100, Trust 100).
- claims-scan: 0 on this page. facts-check: 0 on this page. house-claims: 0. struck-check: no struck wording.
- No sentence over 28 words, except the consent text, which is word for word from the live page, and the sources line.
- build.js check: OK. build.js audit: the only FAILs left are the two date lines, which `node build.js dates` fixes. Warnings: 5 sentences over 32 words (card labels joined to text), may/might 6 (the Commission's own wording), phone link style, and no attributed quote (A20; no Tim quote exists, so none was written).
- critic.mjs at 320, 390, 1024 and 1440: 0 blocking. 1 warning: read.wall at 320 on "No rule requires it ...". The critic already ruled this a false hit, because the stretch holds an H3 and ends at a CTA box.
- Shots: `scratchpad/wf2/sell-fsbo/critic-shots3/` (full page) and `scratchpad/wf2/sell-fsbo/fix1/shots/` (hero, calculator, paths, reach chart, stat card, tax cards, steps, decide cards, form drawing at 320 and 1440). I looked at each one. Nothing runs off its card. The only overflow measured in `main` is in the shared IDX strip and its pop-ups, not in this spec.

## Critic, blocking

1. **TRUTH, "We price from recorded sales ... to avoid that miss".** Cut. The test is now one plain block in the by-owner prices section, worded as /sell/home-value/ words it. It gives both quick numbers, 9 percent off (the county's value, an estimate made for tax) and 16 percent off (the six nearest sales), and makes no claim about how we do.
2. **320, hero tile "28 numbered questions" overflow.** The tiles are replaced (owner item 6). The new labels are "$3,500", "3 legal duties" and "8 steps". Each is checked at 320.
3. **1024/1440, "about $31,000" touching the card edge.** The "What moves your money" chart is cut (owner item 2), so the label no longer exists. NEEDS.md does not need a glass.js note.
4. **AEO, "How will buyers find your house" never answered.** The section now opens with the answer. It says how owners reach buyers, with a chart of NAR 2025 Exhibit 8-7 (row 28): yard sign 24, friends 22, MLS website 20, open house 20, Realtor.com 14, aggregator sites 13, social media 9, FSBO websites 5, and did not market 40. It says how a home gets on the MLS, through a broker. Row 29 adds that 7 percent of agent-assisted sellers had an MLS-entry-only agent. "Our coaching covers how to market..." is cut. The 56 percent price-cut figure now carries the line "Buyers compare yours with all of them."
5. **Step 5 "names the closing attorney, who pays the attorney".** Rewritten: "The form comes first, unless the contract names another time. Agree in writing on the deposit and who holds it, the inspection period, the loan deadline and the closing date." It links to the new "Who writes the purchase contract?" answer. The attorney wording is now only in the attorney card, which says "can name".
6. **"That is 3 of the 5 percentage points."** Cut.
7. **"Our flood history page shows what they can find."** Now: "... shows what a buyer can find out about a home's flood past."

## Critic, nits taken

- "The same pattern holds in Horry County" is now "County deeds point the same way for sales between people who share a last name."
- "Three duties apply to every owner" is now "most owners".
- "exempt" is gone from the page. Each use is now "one of the kinds listed below that need no form", linked to #no-form.
- "easements" is now "rights of others to use your land" in the form drawing.
- Question 28 is now "a charge for beach nourishment, sand added to the beach, while you owned it". The caption also says "nourishment", so the page uses one word.
- "path" is gone from the page. It now says "with or without an agent" or "owed either way".
- The illness and registry sentence is split into three sentences.
- The form button is now "Send my coaching request" and the end band is "Ask us about coaching", so the two closing buttons differ.
- The calculator's 320 label stacks are gone: the labels are now "The fee you do not pay" and "Deed fee, owed either way".
- A new wall at 320 in #sell-for-less got an H3 ("Selling to a stranger") and a stat card for the 9 and 16 percent.

## Critic, nits not taken

- **Coaching fee amount.** This is owner question Q1 (NEEDS item 5). The lead must raise it, not the writer.
- **On-topic photo.** The Commons API returned HTTP 429 again on 2026-11-04, twice. No by-owner sign photo could be opened full size. The partner's shot list 1 stands. I fixed the caption and alt to say what the frame shows (owner item 7).

## Reader, blocking

1. **Where the contract comes from.** There is a new H3, "Who writes the purchase contract?" (#contract), from row 30, the SC Attorney General's 2007 opinion quoting Franklin v. Chavis. Many agents here write offers on a printed contract an attorney drafted. The AG has said filling in such a form does not appear to be the practice of law, if no legal advice is given. Writing a contract for someone else, or advising on it, is a lawyer's work. A South Carolina attorney can write yours or read the buyer's.
2. **How buyers find the house, and the MLS.** See critic item 4.
3. **Coaching price.** Not fixable by the writer. It is owner Q1, and NEEDS item 5 stands.
4. **Closing attorney's fee.** No primary source exists (ledger "Not verified"; owner Q3). The page still prints no amount. It now tells the seller to ask the attorney's office for its fee in writing before the contract says who pays it. That is an action the seller takes, not a fact we could check. A number needs the owner's answer to Q3.
5. **The 9 percent argument.** It is no longer set against the fee anywhere: not in the short answer, a chart, the calculator or a card. It is one block in the pricing part, with plain labels: "the county's value, an estimate made for tax" and "on a typical house".
6. **Out-of-state hold-back amount and how it comes back.** There are two new tax cards from row 31 (12-8-580, DOR's H. 4216 page, fetched live). For a 2026 sale it is 5.21 percent, figured on the gain with Form I-295 or on the whole price without it. A main home whose gain is inside the federal exclusion has none. You file a South Carolina return, and the amount held back counts toward the tax, with a refund of any extra. The value matches /sell/capital-gains/. PROPOSED item 5 is the registry row.
7. **Between signing and closing.** Step 5 now names what to agree in writing: the deposit and who holds it, the inspection period, the loan deadline and the closing date. **Not done:** who usually holds earnest money here (owner Q7) and a typical number of days to closing. No primary source exists for either (ledger "Not verified"). The page states neither.

## Reader, nits

- The first screen now shows the money: the "$3,500 kept per 1 percent of fees on a $350,000 home" tile.
- The "Best for" column is now headed "How it works".
- The NAR number pile-up is cut to one figure per sentence. "91 percent used an agent" is dropped, and the 4 in 10 now sits in the reach chart.
- Report voice: "writing about agents' private listings, says ..." is now a plain statement linked to the guidance. "Under a federal rule" is now "Under federal tax law, you can ...". "That is the form's own example." is cut.
- "with condos aside" and "at the middle" are rewritten: "the middle-priced home resold ... not counting condos" and "on a typical house".
- **Not taken:** the lead-paint block length. It is the legal duty, and its four exempt cases came from the verifier's correction (row 11). Cutting them would make "most homes" unexplained.
- **Not taken:** five buttons with different wording. The owner asked for different words on each CTA, and each one names what we do.
- **Not taken:** the "Updated July 25, 2026" date. `node build.js dates` at the end sets it.

## Owner, blocking

1. **A question asked and not answered.** See critic item 4.
2. **The 9 percent leap.** It is cut from the short answer, the chart (removed), the calculator and the "Is it for you" card. It is kept once in the pricing section, as the owner asked, and never compared with the fee.
3. **Repetition.** Each fact is now in one body place:
   - Attorney supervision: in the short answer and the attorney section. The duty card is a title and a link. FAQ 1 is cut. The hero lede is hidden with the same CSS as /invest/strategies/fix-and-flip/.
   - Family exemption: in the "Sales that need no form" list, which now carries the child's-spouse case, and in the FAQ. The card only links to it.
   - Roof leak, wire fraud and the 10-day lead test: once each. Steps 6, 7 and 8 link back (#lead, #form-rules, #paid).
   - "Fees are negotiable": only in the buyer's-agent section. "No rule requires it": only there. The what-you-save sentence and the FAQ clause are cut.
4. **"Is it for you" cards.** The out-of-state card is cut. Its answer is now in full in the tax cards. The other cards were rewritten so they add something: the family case points to the no-form list, the stranger case points to the reach chart, and the water case gives the papers to gather.
5. **Jargon.** "on every path", "the middle miss in our test", "condos aside", "3 of the 5 percentage points" and the unclear "they" are all gone.
6. **Hero tiles.** They are now what the seller came for: what he keeps, the duties, and the steps.
7. **Photo.** The caption and alt now say only what the frame shows: beach houses, a mid-rise building and parking lots beside the pier. "raised" and "on pilings" are cut, and the metadata was re-embedded (`photos.js check` passes). An on-topic photo is still blocked (Commons 429; partner shot list 1).
8. **Where the contract comes from.** See reader item 1.

## Owner, nits

- The FEMA line now says "Nearly 1 in 4" only.
- "about $31,000" no longer appears.
- The hero CTA headline is now "Get a free price for your home, whether you sell it yourself or list".
- The 42 percent: the line now says the price was "more than any other task". "Nothing was hard" is dropped rather than explained, because the verifier struck the explanation ("had their buyer before they started").
- **Not done:** an IDX strip near $350,000. The strip is written in at the website's edge, not by the spec, so the lead or the shared helper must change it (NEEDS item 10).
- **Not done:** the coaching fee (Q1).
