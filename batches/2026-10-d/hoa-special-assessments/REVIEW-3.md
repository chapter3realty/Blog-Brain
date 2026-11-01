# Review round 3: /hoa/special-assessments/ (fixer)

Spec: `specs/special-assessments.js` (backup before this round: `wf2/hoa-special-assessments/spec-before-r3.js`). Every change is in the spec. Nothing was edited in the built page by hand.

## Gates on the final build

- score.js: 100/100 (SEO, AEO, Human and Trust all 100). P6 and P10 fired during the round and were fixed (see "Master deed" below).
- claims-scan 0. facts-check 0 on this page. house-claims 0. struck-check: no struck wording. photos.js check: all records pass. SWEEP sentences (off-market search sentence, testimonial, "Talk to Devin", "%s"): none.
- critic.mjs at 320, 390, 768, 1024 and 1440: 0 blocking, 0 warning. Shots: `wf2/hoa-special-assessments/shots-r3/`. JSON: `wf2/hoa-special-assessments/critic-r3.json`.
- build.js check: OK. build.js audit for this page: the same four lines as rounds 1 and 2 (two date lines that `build.js dates` fixes, no boxed offer mid-page, no named quote). One draft hero line set off two new audit errors ("we", and no place named). The final line fixes both.

## What changed, by finding

### Critic

| Finding | What I did |
|---|---|
| Blocking: "the one local case in a court record ... $88,000" (absence claim; drops C and D) | "The one local case we found in a court record was a proposed special assessment of about $65,000 to $88,000 a unit." Both numbers come from row 3 and are computed in the spec. The year is now only on the case card ("proposed in 2009"). |
| Blocking: "your share is recovered through depreciation" | "you may be able to recover your share through depreciation" (row 28, Pub. 527). |
| Blocking: hero line read as a statement the reader already knows | "An agent reads a Myrtle Beach building's minutes for you, so you know about a coming special assessment before you make an offer." The owner's suggestion, "We read a building's minutes ...", fails build.js audit (the hero sub must say "you", not "we", and name a place). This line keeps his plain wording and passes. |
| Card 3 "This is the special assessment" | "This can be a special assessment." (row 2, verifier's wording). |
| "leaving the unit empty" | "giving up the unit" (27-31-190, "abandonment"). |
| Who-pays row with no default | "You, unless the offer says otherwise". The third row now reads "Usually you, the owner when it is billed" (row 34). compare.js caps a cell at 40 letters, so the critic's longer wordings were cut to fit. |
| Loan sentence repeats the one before | Rewritten. See the owner's loans finding. |
| "usually records it in its minutes" had no row | "An association that is a nonprofit corporation must keep minutes of every board meeting, so a repair being priced shows up there." (row 14, 33-31-1601(a)). |
| H3s not questions | "How is each owner's share of a special assessment worked out?", "How long do a condo building's roof, elevator and windows last?", "Do owners in Horry County dispute special assessments?", "What happens if a special assessment goes unpaid in South Carolina?", "Which repairs does Fannie Mae count as critical?". |
| Right edges step at 830, 915, 975 and 1113; orphan card | Every block on the page (cards, the case card, the worked example, the calculator, the charts, the who-pays cards, the words box, the photo) now ends at one edge, 974 px at 1440 (max-width 820). Before this, the worked example ran the full 1,130 px. Body text keeps the site's measure (ends at 819), the same as on fix-and-flip. The "No cap" card is cut (see the owner's repetition finding), so two cards sit side by side and none is left alone on a row. |
| Photo: balconies small at phone width | Re-cut from the USGS original (3008 by 1960) to the two buildings in the center left (1600 by 700). I looked at it at full size. Stacked balconies with railings, a flat roof with rooftop equipment and a pool are clear. The few people on the beach are too small to recognize. The same file names and record are used, with a new size, description, alt, caption and changes line, and an added subject check. The share crops (1x1, 4x3, 16x9) are unchanged. |
| Critic tool's empty listing strip | Tool capture only, as the critic says. No change. |

### Reader

| Finding | What I did |
|---|---|
| The default is missing from the who-pays table | The table names a person in every row (see the critic's row above). The paragraph that repeated the offer point is cut. |
| Does my own insurance pay my share? | **Not answered, and I think the finding cannot be met yet.** Row 29's loss assessment clause was struck by the verifier because it has no primary South Carolina source. This round I looked again for the SC Department of Insurance and for an official copy of the standard condo owner's form (ISO HO 00 06). I found insurer pages, trade articles, Florida's statute (627.714, a $2,000 minimum that does not apply here) and third-party copies of the form. There is no SC regulator page, and no form copy I could open from an official host. The pointer moved from the Tax section to just under the "who pays, in order" cards, where the question comes up: "What your own condo policy can pay toward your share is on our master insurance page." The sibling page owns this answer. Lead: if a primary copy of the HO 00 06 loss assessment clause can be opened (one is said to be on a Nevada Division of Insurance host), one sourced line can go here. |
| Can I still get a mortgage? | "For a buyer, that rules out a regular loan your lender plans to sell to Fannie Mae, until the repair is done. Cash still works. FHA, VA and other loans have their own rules, and our page on condos most lenders will not lend on explains them." This uses rows 20 and 21 (the group note names FHA, VA and portfolio loans; "not remediated" supports "until the repair is done"). The old closing paragraph of that section is merged into this one. |
| What does "Have us check a building" cost? Do I have to use you? | **Owner question, not answered.** No row, story or rule says whether the check is free or comes with any commitment. I did not write "free". The owner should answer this: "Is reading a building's minutes for a buyer free, and does it commit the buyer to use Chapter3 as their agent?" If it is free with no commitment, one line under the button would answer the reader. |
| Hero line confused me | Fixed (see the critic's row above). |
| "founding papers" vs master deed; the statement's real name | Kept "founding papers". score.js P6 flags "master deed" as an industry term (rules/plain-words.json). I tried "master deed" this round and it cost 25 points on P6, so I put the plain name back. "Estoppel" is the same case (round 2). The page says we find the percentage and get the statement, so the reader does not need the legal names. |
| Too many numbers in the complaints part; the lien chart changed nothing | Both charts are cut. See the owner's finding. |
| Why tell me about houses? | The Horizontal Property Act sentence is cut. One line stays for the readers who come from a house HOA: "In a neighborhood of houses, the HOA's recorded rules say whether it can charge one." The FAQ that repeated it is replaced. |
| 51 percent of value: what does it do for me? | The body sentence is cut. It is now an FAQ answered in plain words: "How much say does one owner have ...? As much as the unit's percentage." (row 7). |
| "A buyer who pays can get it back from the seller" sounds easy | Cut. In its place, the owner's own point (row 19, story hoa-lien-flip, used as an observation and not a quote): "We get that statement and find out what the seller owes before closing, so you do not get stuck with it." |
| Too many dates | Cut: 2008, 2010, 2011, 2016, 2024, 2025 and the photo's year. One year is left in the body copy, 2009, on the case card. score.js P3: 0. |
| Where is Pawleys Island? | "a condo in Pawleys Island, south of Myrtle Beach". New row 36, VERIFIED-BY-FIXER, from the Census 2024 Gazetteer. |
| "MLS" not explained | The chart note now says "the local listing service (MLS)". |
| AI search box; footer reads investor-only | Shared site parts. NEEDS.md 11. |

### Owner

| Finding | What I did |
|---|---|
| Tells the reader about data we do not have | Cut "We found no public record of a typical amount here" and "The court's opinion does not say what each owner paid in the end." How much now opens with the answer: "The size depends on the repair, what the reserve fund holds, and your unit's percentage." The critic's "the one local case we found" stays, because without "we found" the sentence claims something no row supports. |
| Repetition (a) "no cap" said five times | Now said once, in the short answer. The hero chip, the "No cap" card, the H3 repeat and the FAQ are cut. The H3 answer reads: "No. Any limit is in each building's founding papers and bylaws. The state also does not require these two." Then come the two cards. |
| (b) reserve study said twice | List item 4 now reads: "If a building has none, the minutes and the budget carry more weight." |
| (c) and (d) FAQ repeats the body | The two FAQs are replaced with questions the body does not answer: "Can the board change my unit's percentage to raise my share?" (row 6, with the verifier's carve-outs) and "How much say does one owner have in a vote on a special assessment?" (row 7). The borrowing FAQ is reworded in plain words. |
| Table and paragraph say the same thing | The paragraph is cut. Each table cell names a person. Only the installments sentence stays, because the table does not cover it. |
| Too many numbers and years | The building-age chart shows percentages only (no "328 (11%)"). The "2,866" note, the "37 and 27 years" note, "from 12 to 30" and the "30 of 76 / 140 of 452" chart are cut. The body says "About two in three condos for sale here are in buildings built before 2000." The spec checks that the share stays between 63 and 70 percent. |
| Complaints and lien sections have no meaning for a buyer | The lien chart and its sentence are cut. The link to HOA liens and foreclosure is now part of the lien paragraph. The complaints chart is cut too. One short paragraph stays, with one number and a line for the buyer: "Yes. More of South Carolina's HOA complaints are about associations in Horry County than in any other county, and so are about 2 in 5 of the complaints over fees or special assessments. For a buyer, that is a reason to see how a building's last assessment was voted. That vote is in the minutes we read." Row 26 (the lien count) stays in the ledger for /hoa/liens-and-foreclosure/. The deed-index source and its note are removed. |
| Loans answer stops before the buyer | Fixed (see the reader's row above). |
| Sends the reader away on insurance | See the reader's row above. I could not find a primary row, and the verifier struck the clause. |
| Photo: balconies are specks | Re-cut close (see the critic's row above), and the caption no longer gives a year. The photo partner's shot list (`shot-list.md`, shot 1: balcony or concrete repair) is still the better photo. The lead sends it from the owner's Gmail. I did not send email. |
| Hero chips say little; the hero line is stilted | Chips cut. Hero line rewritten. |
| Nit: empty right half at 1280; block widths step | Blocks aligned (see the critic's row above). The text column is the site's measure, the same as on the bar pages. |
| Nit: the italic subtitle is too large | Shared hero CSS. NEEDS.md 10. |
| Nit: the attorney line | Cut from the votes section. The sources note already says "a South Carolina attorney can advise on your documents." |
| Nit: link-only lines | "Our page on whether HOA fees are tax deductible has the detail." The liens link is folded into the lien paragraph. |
| Nit: the "We read X" refrain | "We read the budget as well as the minutes" became "so the budget is on our list too". "We read them for one" is cut. The table cell is now "We look for it in the minutes". |
| Nit: the owner's hoa-lien-flip observation | Used in who-pays as an observation (row 19). |
| Nit: Updated date | Lead's `build.js dates`. |

## Round 3 file changes outside the spec

- `data/2026-10-d/hoa-special-assessments/photos.json`: new width and height (1200 by 525), new what, caption, alt and changes line, and an added subject check.
- `chapter3realty/images/2026-10-d/hoa-special-assessments/...-2011.webp`, `-1200w.webp` and `-600w.webp`: the new crop. The old files are in `wf2/hoa-special-assessments/r3bak/`. No metadata is embedded, because exiftool is missing (NEEDS.md 12).
- `facts.md`: row 36.
