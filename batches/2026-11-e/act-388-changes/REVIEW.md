# Review: /buyers/act-388-changes/ (batch 2026-11-e, page 5)

Reviewer, 2026-11-04. Built page `WEB/chapter3realty/buyers/act-388-changes/index.html`, data `WEB/data/2026-11-e/act-388-changes/act388.json` (same as the batch copy), ledger `facts.md` and `VERIFY.md`. Critic at 320, 390, 768 and 1440 px: 0 blocking, 3 warnings (read.wall: the hero-to-contents run at 390 and 320, and the Wilson quotes at 320). Shots are in `scratchpad/wf3/review-act-388-changes/`. I looked at every tile at full size. `score.js --only` passes every rule.

## Scores

| Test | Score |
|---|---|
| Visuals | 8 |
| Readability | 8 |
| Value | 8 |
| Uniqueness | 9 |
| Truth | 8 |
| Balance | 9 |
| SEO/AEO | 8 |

## The three recomputations

### One house, four owners: stands

Mills: Myrtle Beach total 52.1 + 10.0 + 109.1 + 83.4 = 254.6 (F144, F145). For a home you live in: 254.6 - 109.1 = 145.5 (F147).
Values: cap 200,000 x 1.15 = 230,000 (F142). Exemption: max(350,000 x 0.75, 230,000) = 262,500 (F143; the floor is the value on the roll).

| Owner | Value x ratio x mills | Page | Result |
|---|---|---|---|
| Lives there, long-time | 230,000 x 0.04 x 0.1455 | $1,338.60 | 1,338.60, matches |
| Lives there, new buyer | 350,000 x 0.04 x 0.1455 | $2,037.00 | 2,037.00, matches F147 |
| Rents it out, since before 2011 (no exemption) | 230,000 x 0.06 x 0.2546 | $3,513.48 | 3,513.48, matches |
| Second home or rental, new buyer | 262,500 x 0.06 x 0.2546 | $4,009.95 | 4,009.95, matches |

- The chart rounds to $1,300, $2,000, $3,500 and $4,000. Each is correct to the nearest $100, and the bars are drawn to scale.
- "About 3 times": 4,009.95 / 1,338.60 = 2.996. Stands.
- "More than twice the homeowner's": 5,346.60 / 2,037.00 = 2.62. Stands.
- "About a third off" a city bill at 4%: 3,564.40 against 5,346.60 is exactly one third (F146). Stands.
- "0.6% and 1.5%": 2,037 / 350,000 = 0.58% and 5,346.60 / 350,000 = 1.53%. Stands, but see blocking item 3 for the wording.

### FHFA, 69% against the 15% cap: stands

363.30 / 215.11 - 1 = 68.9%, rounded to 69% (F198, CBSA 34820, Q4 2019 to Q4 2024, VERIFIED). FHFA's standard error is about 2%, which is too small to matter here. "The last two scheduled reassessments" matches F157, which says "scheduled". The cap is 15% within five years (F142), so "15% at most" is correct for taxable value when there was no sale and no addition. Two wording nits are listed below (N1).

### Lincoln share shift: stands, with the 0.9-point remainder held fixed

Table 2.3, Horry 2018, assessed shares (F149): primary 30.8, other residential 47.2, commercial 21.1. That leaves 0.9 for everything else.

- Move the 6% class to 4%: 47.2 x 4/6 = 31.47. New total: 30.8 + 31.47 + 21.1 + 0.9 = 84.27.
- New shares: primary 36.55%, other 37.34%, commercial 25.04%. The page's "about 37%, 37%, 25%" stands.
- If the 0.9 is left out, other residential is 37.7%, which rounds to 38%. The spec keeps the remainder, which is right. Say so in a footnote (N3).
- The method is correct for a levy every class pays: each class's share equals its share of assessed value.
- What it measures is wrong in two places on the page. See blocking item 2.

## BLOCKING

1. **320 px: the last column of the shares table is cut off.** In the table "Kind of property / Share, 2018 / Rentals at 4%" under "Who would make up the money?", the table is 301 px wide inside a 270 px scroll box (measured in the browser). The header shows "RENTA / AT 4%" and the cells show "abou 37%". The page's own result is hidden behind a sideways scroll the reader cannot see. Fix: render it with `compareCards` like the other three tables. Or shorten it to fit: headers "2018" and "At 4%", rows "Homes you live in", "Other homes", "Commercial".

2. **The share figures are given a larger base than the source has.** Lincoln Table 2.3 covers only "properties valued by county assessors" (F149). Manufacturing and utility property, which the state values, and vehicles and other personal property are not in it. The page writes:
   - "For a tax every kind of property pays, such as the county's own tax, each kind pays its share of taxable value." (Who would make up the money?)
   - "your share of county taxes would rise toward about 37% on the 2018 figures." (Short and long run, Home you live in)
   - "Commercial property was about a fifth of Horry's taxable value in the study's figures." (Business property)

   Fix: scope each one. For example: "Of the real property the county assessor values, homes owners live in were taxed on 30.8% in 2018. With rentals at 4% and the same dollars raised, that would rise to about 37%." And: "Commercial property was about a fifth of the taxable value the county assessor sets." Add one line under the shares table: "Property the state values, such as factories and utilities, and vehicles are not in these figures."

3. **"Our house pays about 0.6% and 1.5% of its value a year."** (Why does a second home ... pay more). Read cold, "our house" sounds like Chapter3's own property, which is a first-hand claim that is not true. Fix: "The example house pays about 0.6% of its value a year as a home you live in, and about 1.5% as a second home."

## Nits

- N1. FHFA sentence: name the window and the measure. "From late 2019 to late 2024, home prices in the Myrtle Beach metro rose 69% on the federal housing agency's index. An owner who did not sell or add on saw a taxable value rise of 15% at most." The quarters make the figure checkable. They also avoid implying that this is the assessor's appraisal window.
- N2. The page conflicts with itself on second homes. The "Each change" table gives Wilson's idea "Second home: Unknown until a bill is written". But the 37/37/25 arithmetic moves the whole 6% "other residential" class to 4%, and that class includes second homes. Add a line: "This moves every 6% home to 4%. If only rentals moved, the shift would be smaller."
- N3. Under the shares table: "The rest of the roll, 0.9%, is held as it was." Without that line, a reader who adds 30.8 + 47.2 + 21.1 gets 99.1 and wonders what happened to the rest.
- N4. Johnson's first mention reads "Jermaine Johnson's platform called for lower property taxes." F070 says these are WMBF's words. Write "Johnson's platform, as WMBF summed it up, called for lower property taxes", or drop the clause, because the next paragraph attributes it.
- N5. The hero card reads "Next reassessment: Expected 2029". F157 says 2029 is our inference. Write "2029, our estimate" to match the body.
- N6. The lead ends "The home you live in pays on 4%, without it." The words "without it" make the reader stop and work out what is meant. Write "pays on 4%, and does not pay the school operating tax."
- N7. The "Horry County, 2018" chart draws market value and taxable value in the same brass. That pair is the whole point of the chart. Use two shades (market value light, taxable value dark), or one row per class with two bars.
- N8. Critic read.wall at 320 in the candidates section: the WIS and Fox paragraphs run about 1,070 px. Moving the "same tests" table above the quotes would break up the run and give the reader the comparison first.
- N9. Already in NEEDS.md, and the lead must still act on them: no body link from `/buyers/property-taxes/`, the page is not in the sitemap or llms.txt, the footer says "investor-focused brokerage", and `photos.js embed` has not been run on the Surfside photo.
- N10. "Homes owners live in" appears more than ten times. It reads awkwardly. "Homes their owners live in", or "the home you live in" where the reader is the owner, reads better.

## Other checks

- **Ledger.** Every other number and claim matches a VERIFIED or CORRECTED row at its corrected value:
  - Ratios, two-thirds rules and the amendment path: F080 to F086.
  - Sales tax, fund and cap: F140 to F142.
  - Jan. 31 notice and the "after 2010" sale date: F143.
  - Lincoln: definition, who picked the counties, and the quote with no page number: F149 to F151.
  - Rates attributed to the Lincoln study, and the "rising rent" and "affordable housing" claims to the student note: F152.
  - Act 140, with sponsors Hardee and Bailey only: F154.
  - S. 768, 44-0, $150,000 and $75,000: F155.
  - Bills in committee: F153, F156.
  - "Scheduled" 2024 and the 2029 inference: F157.
  - Florida's 10% limit: F158.
  - House 79, 83 needed, and 78 to 80 after recounts: F011, F014, F083.
  - Senate special race: F013.
  - Horry 8 R, 3 D: F015.
  - Wilson's WIS and Fox lines: F060 to F062.
  - Johnson conceded: F007.
- **Stories.** None. There is no Tim Nash quote.
- **Balance.** Both governor candidates get the same five tests in one table. Wilson gets more words because he has a stated plan; Johnson's platform is given as WMBF summarized it. Andrews gets one sentence and an FAQ: a U.S. senator has no vote on these rates. The case for keeping Act 388 has its own section. I found no praise, blame, loaded word, or prediction stated as certain.
- **Banned content.** No interest rate, payment amount, steering word or financing offer. Devin, Abdulla and Paul appear only in the byline and schema.
- **Reader.**
  - The answer is in the first two sentences ("No, not on his own ... two-thirds of each house").
  - A reader can act: apply for the 4% rate, file the 25% exemption notice before Jan. 31, and check the tax on a home before making an offer.
  - Left open: when a bill might be filed (unknowable), and where to apply for the 4% rate. The FAQ says to apply but gives no link to the county form. A link to the Horry assessor's legal residence page would help.
  - A reader is most likely to stop after "One house, four owners". It is the strongest and most original part of the page.
- **SEO/AEO.**
  - Title, description and canonical are set, and the share image is set.
  - Schema: Article, FAQPage (5), BreadcrumbList and Speakable.
  - Every H2 is a question.
  - Missing: a sitemap entry and one inbound body link (N9).

## Fix round 1: changes (builder, 2026-11-04)

Blocking:
1. **The shares table at 320 px.** It is now a `compareCards` table, which turns into cards on a phone. The columns are "Share, 2018" and "With 6% homes at 4%", and the rows are "Homes their owners live in", "Other homes, mostly rentals" and "Commercial property". The caption is "Share of taxable value, property the Horry County assessor values". Nothing clips at 320 (checked in the 320 shots).
2. **The Lincoln figures, scoped.**
   - New sentence: "Of the real property the county assessor values, homes their owners live in were taxed on 30.8% in 2018. With every 6% home moved to 4% and the same dollars raised, that would rise to about 37%."
   - Card for the home you live in: "homes like yours would pay a larger share. The table under 'Who would make up the money?' gives it." The unscoped "share of county taxes" is gone.
   - Business card: "about a fifth of the taxable value of property the county assessor values ... would rise toward a quarter."
   - New line under the table: "Property the state values, such as factories and utilities, and vehicles are not in these figures."
   - The Horry chart note now says the same.
   - "The assessor sets" would have tripped the build's ban on "sets". It reads "the county assessor values" instead.
3. **The effective rates.** The sentence now reads: "The example house pays about 0.6% of its value a year as a home you live in, and about 1.5% as a second home."

Nits:
- N1. "From late 2019 to late 2024, home prices in the Myrtle Beach metro rose 69% on the federal housing agency's index. An owner who did not sell or add on saw a taxable value rise of 15% at most."
- N2. New line under the shares table: "Every 6% home moves. The calculation moves the whole higher-rate class to the lower rate, second homes included. If only rentals moved, the shift would be smaller." Both cards now say "every second home and rental", so they match the arithmetic.
- N3. New line: "The rest is held fixed. The rest of the roll, under one percent, is held as it was."
- N4. Johnson's first mention: "Jermaine Johnson's platform, as WMBF summed it up, called for lower property taxes." The later paragraph now opens "WMBF's summary also lists ...".
- N5. The hero card now reads "Next reassessment: 2029, our estimate".
- N6. The hero sub now ends "A home you live in pays on 4%, without that tax." The reviewer's wording took the sub to 35 words, and mkpage allows 30, so "that tax" names what "it" left unclear.
- N7. The Horry chart has two colors: gray bars for market value and brass bars for taxable value. The note says so.
- N8. The "same tests" table now comes before the quotes. Three H3s ("What Wilson said", "What his agenda lists", "What Johnson's platform lists") break the run. The critic's read.wall warning on #candidates is gone at 320 and 390.
- N10. "Homes owners live in" is now "homes their owners live in" or "the home you live in" in nine places.

Also changed: the four-owner SVG is redrawn 262 units wide, so its text stays near 13 to 15 px at 320. The label "Rents it out, owned before 2011" is shorter. The prose numbers were trimmed to keep P2 at or under 3.5 per 100 words.

Not changed: N9 is the lead's (see NEEDS.md). The read.wall warning from the hero sub to the contents list remains at 320 and 390. It is the short answer and the top offer, with no break.

Gates after this round:
- score.js: 100/100.
- claims-scan, facts-check and house-claims: 0 each on this page.
- struck-check: none. repeat-check --strict: passes.
- build.js check: OK. build.js audit: only "missing from sitemap.xml" (expected).
- Critic at 320, 390, 768 and 1440 px: 0 blocking, 2 warnings (the hero read.wall at 320 and 390).
- Shots: `scratchpad/wf3/act-388-changes-r2/`, with 320 px tiles in `t/`.
