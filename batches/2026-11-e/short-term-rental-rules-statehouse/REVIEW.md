# Review: /invest/short-term-rental-rules-statehouse/

Reviewer, 2026-11-04. Critic run at 320, 390, 768 and 1440 on port 8916: 0 blocking, 5 read.wall warnings (320 and 390). Shots: /tmp/claude-0/-home-user-Blog-Brain/8900fb2a-1006-5ba7-88a3-019838e5433c/scratchpad/wf3/review-short-term-rental-rules-statehouse/. Every shot viewed at full size. score.js: all ok except P2 (4.6 numbers per 100 words, 68%). house-claims: 0.

I was also the independent verifier for NEW-1 to NEW-4. Verdicts are in NEW-ROWS.md: NEW-1 VERIFIED, NEW-2 VERIFIED with its condition, NEW-3 VERIFIED with its condition, NEW-4 CORRECTED.

## Scores

| | score |
|---|---|
| Visuals | 7 |
| Readability | 8 |
| Value | 8 |
| Uniqueness | 8 |
| Truth | 7 (8 once the blocking items are fixed) |
| Balance | 8 |
| SEO/AEO | 7 |

## Blocking

1. **Recount sentence leaves out both recounts flipping (NEW-4, CORRECTED).** Section "Could the new South Carolina House pass a bill like H. 3861?":
   "If either recount changed the result, Republicans would hold 78 or 80 seats. Both are more than 63 and fewer than 83."
   Fix: "If one recount changed the result, Republicans would hold 78 or 80 seats. If both did, they would hold 79. Each is more than 63 and fewer than 83."

2. **63 and 83 stated without "if all members vote" (NEW-2, NEW-3 condition).** The rows hold only when every member votes. A quorum is 63, so a bill can pass with fewer yes votes.
   - First sentence of the vote section: "Yes. It would take the same 63 House votes as in the old House." Fix: "Yes. If all 124 members vote, it would take 63 House votes, the same as in the old House."
   - Closing paragraph of "Short run and long run": "A governor's veto would then need 83 House votes and 31 Senate votes to override." Fix: "If all members vote, a veto would then need 83 House votes and 31 Senate votes to override."

3. **"then the governor's signature" is not the only way a bill becomes law.** Same closing paragraph: "It wins 63 House votes if all members vote, then a Senate majority, then the governor's signature." Art. IV Sec. 21: a bill not returned in five days, Sundays excepted, has the same effect as if signed. Fix: "then the governor signs it or lets it become law without a signature." Also "A bill is filed and passes a committee" is the usual path, not a rule; say "A bill is filed and usually passes a committee."

4. **"Both later passed changes" has no row for Florida.** Arizona section intro: "Both legislatures took away the power to ban. Both later passed changes." For Florida the ledger has only the 2024 bill, which the governor vetoed (F178), so the law did not change. Fix: "Both legislatures took away the power to ban. Arizona later changed its law. Florida's legislature passed a change in 2024, and the governor vetoed it."

5. **Price estimate stated as certain, and narrower than the study.** "A ban on local bans" card: "Reading the Los Angeles study in reverse, prices and rents in those neighborhoods would rise, by 0 to about 2%. That is our inference." The study (F179) measured whole cities, not neighborhoods, and a reverse effect is a guess. Fix: "Reading the Los Angeles study in reverse, prices and rents in those zones could rise by up to about 2%, or not at all. That is our inference, not a forecast."

## Nits

- Photo (all widths): hotel towers with a large blurred umbrella filling the lower left. It shows hotels, while the page is about R-zone houses. The "Photo: Loadmaster" overlay is hard to read on the bright sand. Replace with the photo partner's R-zone street and RMV block when they arrive (NEEDS item 6).
- read.wall at 320: the hero dek plus short answer (1,184 px), the North Myrtle Beach section (1,057 px), the vote paragraphs after the chart (926 px), and "What we do" (916 px). The vote section would read better with the three facts (79-45, Senate 34-12, recount) as a short list.
- P2: 4.6 numbers per 100 words. The FAQ repeats 7%, 3%, 90 days, 29 days and 30 houses from the body. Some repetition is fine for answer engines; trim where a number appears three times.
- "Where it happened: H. 3861 got no vote in a House with 89 Republicans." Factual, but readers can take it as a jab at the majority. "H. 3861 got no committee vote in 2025 and 2026" says the same without party.
- "It took effect at once and replaced a temporary moratorium." F173 says the moratorium was "set to expire in January". "Replaced" is a small inference; "and a temporary moratorium was set to expire" is exact.
- Timeline: "Now: Florida keeps its older local rules" has no year for when Florida first barred bans, so the reader cannot see Florida's start next to Arizona's 2016. The ledger cannot date it (F177), so keep it undated, but the intro "took this power from cities" then reads as if both have a date.
- Hero card "Candidate positions: None found": F180 says Johnson's own site was not read. The body says "we found no statement from Johnson", which is fine. The card is fine too, since it says "found".
- SEO: one inbound link (NEEDS item 3) and not in the sitemap or llms.txt. That is for the lead.

## Checks that passed

- Every number in the body matches a VERIFIED or CORRECTED row at its corrected value: F011, F012, F013, F015 (8 R and 3 D of 11 Horry districts; Bailey 66.88%), F017, F087, F088 (three carve-outs stated), F089, F085 (6% and 4%), F170, F171, F172, F173 (270-day figure struck, not used), F174, F175, F176 (platform coverage stated), F177, F178, F179, F180, F083.
- No story on the page, so no stories.json check.
- No interest rate, payment amount, financing offer or steering word. Devin Day and Abdulla Hijazi appear only in the byline. Paul is not named.
- Balance: Wilson, Johnson and Andrews get the same test (their own pages read, nothing found). Each scenario has the same three parts. Republicans and Democrats are counted the same way. No praise or blame of a party or candidate.
- Reader: the answer is in the first two sentences of the short answer. A buyer can act on it (check the zone and license, Myrtle Beach R zones are closed under 90 days). The question left open is which neighborhoods are RMV; the page links to the rules guide for that.
