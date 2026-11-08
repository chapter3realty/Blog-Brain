# Review round 1: /sell/sell-or-buy-first/ (fixer, 2026-11-08)

Three reviewers: critic (6, fail), reader (7, fail), owner (7.5, fail). Every fix is in `specs/sell-sell-or-buy-first.js`, never in the built page. New facts are rows 22 to 24 in facts.md, marked VERIFIED-BY-FIXER.

## Blocking findings: what changed

### Critic
1. **No photo of the subject.** The 2006 courthouse photo is gone (files deleted). A new photo of a home is in: a brick house on an older street in Conway, ProfReader, CC BY-SA 4.0, Wikimedia Commons, 2015. It is cropped to 16:9, with the house number and a yard sign blurred. The licence record is in `data/2026-11-n/sell-sell-or-buy-first/photos.json`, and `photos.js check` passes. On wide screens it sits beside the intro and the three cards. It is the share image (og:image, Article.image). A moving-truck photo was searched for: Commons has none without a company logo. The Myrtle Beach street photos found were under 1200 px wide, which photos.js refuses. shot-list.md shot 2 stays open for the photo partner.
2. **"still own the next home and live in it".** The sentence is gone from the body (the owner asked for the method to leave the body). The method note now says "the county taxes it at the 4 percent rate for a home the owner claims as a legal residence", the verifier's sense.
3. **Visuals cap.** Fixed by item 1.
4. **FAQ "between the two" against "three ways".** The FAQ answer is rewritten. It no longer restates the split (the owner found it repeated). It answers when selling first is better and what it costs: "about 2 months for a typical Horry County owner who sold first".
5. **The "Both within a week" card argued with itself.** The heading is now "Fits if you need the money from your sale, and want one move". Sell first is now "Fits if you need the money from your sale, and can wait to move in", so the two cards differ in the reader's own terms. The risk is now the critic's wording: "If your sale falls through, you may lose the home you are buying, or have to buy without the money from your sale." What helps points to the new six steps and to the sale contingency.

### Reader
1. **How to do both within a week.** New section "How do you sell your house and buy another within a week?" with six numbered steps (fsbo's step style): pick your move day; ask a lender what you can borrow; list and start looking at once (about 8 weeks to a contract here); make your offer depend on your sale, with a closing on your move day; accept a buyer whose date fits; plan for a date that slips (written extension, rent-back). It answers "list first or find the house first" (both at once) and "how do the dates line up". Row 23 records where each step comes from.
2. **Card confusion with Sell first.** Fixed by critic item 5.
3. **Property tax never answered.** The section now opens with the answer: "The old home is taxed at the lower rate through the year you move out. You pay the higher rate on it if you still own it on January 1 of the next year." The "Why" row explains the part-year rule. The page makes no claim about the new home's rate in the year of the move. The statute does not settle it, so it is owner question 4. Row 22 records the source.

### Owner
1. **A law treated as a person.** "The law asks you to tell the county assessor" is now "Tell the county assessor within six months of the change (SC Code 12-43-220)". "its rules say what the lender counts" is gone. "the lender's rules on rental income say" is now "the lender decides how much of the rent counts as income". "The addendum gives the date" is now "You and the seller write in the date". "within the days the addendum gives" is now "within the number of days you agreed on". "The deeds do not say why" is cut. "keeps the 4 percent rate" is now "is taxed at the 4 percent rate".
2. **"middle owner".** It is replaced everywhere by "a typical owner". The short answer says what that means the first time: "about half took less time, and half took longer." "The middle one cost about 16 percent more" is now "A typical owner paid about 16 percent more than they sold for."
3. **Method in the body.** Both method paragraphs are out of "What do Horry County owners do". The method stays only in the small "How we counted" note and the chart caption.
4. **Photo of the topic.** Fixed by critic item 1.
5. **Too many numbers.** The three "Owners here" rows are cut from the cards. The hero tiles no longer repeat the thirds. The method note is set at .85rem (.88rem on a phone) with tighter line spacing.
6. **Repetition.** The thirds now appear once in the hero sub line, which is the owner's own suggestion, and once in the chart. They are cut from the short answer, the cards and the FAQ. The same-day 1 in 9 is cut from the card and kept only in the FAQ that asks about it. The kick-out FAQ no longer retells steps 4 and 5. The rent-back FAQ is cut to two sentences. FAQ 1 no longer restates the short answer. The "Both within a week" lane is cut from the timing chart (owner nit).
7. **No step by step, and three offers in three wordings.** The six steps are new (reader item 1). Step 1 says what we do ("We build the timeline for your sale and your purchase around that day", row 21). The offers now differ:
   - Slim bar: "Selling one home and buying another here? Start with what yours would sell for." with the button "Have us price your home".
   - Box after the steps: "Want your sale and purchase to close in the order you pick?" (the critic's headline) with the button "Have us line up both closings".
   - Lender box: unchanged.
   - Rent-back box: unchanged.
   - End band: "Have us plan my move".
8. **Lender rulebook detail.** "Buying first" is now four short rows:
   - Both homes' bills: in plain words, "once your home is under contract and your buyer can no longer back out over their loan".
   - Which loans this covers: Fannie Mae, and that your lender can tell you. This answers the reader's "is mine?".
   - Money to buy before you sell: a bridge loan or a HELOC, and the lender decides.
   - If you keep the old home.
   The "cannot be secured by the new home" and "must document" sentences are cut.
9. **Not proper English.** The sentence is now "To get the federal tax break on a home sale, you must have lived there for 2 of the 5 years before you sell." The row heading is now "Selling it later", since "If you rent out the old home" led the reader to expect rent rules.
10. **Filler.** "We know the date of each sale...", "The deeds do not say why." and "The houses for sale now are on our map." are cut. Where to live for about 2 months is now a card row, "Where to stay": "The home you sold, on a rent-back, a rental by the month, or family. A storage unit can hold your things." It lists options and claims nothing about what owners here did (row 5 note).

## Nits taken
- Offer box 1's repeated words: replaced (owner item 7).
- "Many regular home loans are sold to Fannie Mae" had no row. It is now row 24 and worded "a loan the lender sells to Fannie Mae, which buys home loans from lenders".
- "Both closings within 7 days" is now "Both deeds recorded within 7 days of each other."
- "addendum" is explained: "an extra page added to the purchase contract". The section's two opening sentences are merged.
- Hero sub line: "About a third bought first, a third sold first, and a third did both within a week."
- Chart title at 320 px: `text-wrap:balance` on chart titles.
- "secured" and "middle times": both gone.
- FAQ 1 opened with a pronoun (score A7). It now opens "Selling first is better when ...".

## Nits not taken, and why
- **Owner gates (critic).** The SCR504/505 steps, the possession rule and the new step 6 extension line rest on the 1/2020 forms (owner question 2). The rent-back service lines rest on owner question 3. Both are still open and are listed in OWNER-QUESTIONS.md. They must be answered before deploy.
- **Common days in SCR504, whether sellers and builders here accept a contingent offer, how the daily rent is set (reader).** No primary source. Asked as owner question 5. The page claims none of them.
- **How a seller knows if the buyer's loan is sold to Fannie Mae (reader).** The buying-first section now says your lender can tell you. The rent-back row is unchanged. The fixer has no verified source for what the offer shows.
- **The end band centered at 1440 (critic).** It is the shared component, as on /sell/fsbo/. It is not this page's to change.
- **The '19%' label filling its segment at 320 px (critic).** It still fits inside the bar. Left as is.
- **"legal residence" (score P6 says "the home you live in").** The verifier ruled that the 4 percent test shows a claimed legal residence, not that the owner lives there. The page explains the term once ("for a home the owner claims as a legal residence") and keeps it.

## Gates after the fix (2026-11-08)
- mkpage: built.
- build.js audit: no errors except "missing from sitemap.xml" (the lead's, NEEDS 7). The warnings are llms.txt, no Tim Nash quote (no story or quote may be written) and 21 sentences over 22 words.
- score.js: 97/100. SEO 100, AEO 100, Human 97, Trust 79. T2 is down from the first version because the method left the body.
- claims-scan: 0 findings.
- struck-check: no struck wording. The first draft of the new H2 said "in the same week" and fired row 1's entry, so it was changed to "within a week".
- house-claims: 0 sentences to scope.
- facts-check: nothing on this page.
- site-audit: only the sitemap entry.
- photos.js check: all records pass.
- critic.mjs at 320, 390, 1024 and 1440 px: 0 blocking. It gives 3 warnings, none blocking:
  - read.small-text on the method note at 390 and 320 px (small at the owner's request, NEEDS 12).
  - read.wall at 320 px over the short answer, which the slim offer bar ends (as in round 0).
- ogcard.js: failed with a NetworkError. It is not needed, because the page's share image is now its photo, as on /sell/fsbo/.

Shots: `wfn/sell-sell-or-buy-first/critic-shots/`. At 1440 px the photo sits beside the cards. The six steps and the new offer box read calmly. Each card has three or four rows.
