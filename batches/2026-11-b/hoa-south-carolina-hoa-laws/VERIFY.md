# Verify: /hoa/south-carolina-hoa-laws/ (batch 2026-11-b)

Independent verifier, 2026-11-10. I did none of this research. Ledger: `facts.md` in this folder (status and note columns updated; claims not changed). Struck list: `batches/2026-11-b/facts/hoa-south-carolina-hoa-laws-struck.json` (14 entries). Each entry fires on its own struck wording and no approved wording fires any entry; `node tools/struck-check.test.js` prints "all controls pass". The current live page fires none of them.

**Counts: 55 rows. VERIFIED 42. CORRECTED 13. STRUCK 0.**

## What I opened and re-ran

- **SC Code, live (2026-11-10):** Title 27 Ch. 30, Ch. 31, Ch. 1 (27-1-60), Ch. 50; Title 33 Ch. 31; Title 22 Ch. 3. Fetched myself into `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/vfy-hoalaws/`.
- **SC Consumer Affairs, live:** HOA-Ed page, HOA-Ed Laws list, complaints page, HOA FAQs PDF, Cans and Cants PDF, the HOA reports page. The 2026 report PDF is byte-identical to the saved copy (SHA-1 86464f5a...).
- **Workbooks:** downloaded all four (report years 2023 to 2026) from the reports page. SHA-1 identical to the files in `data/2026-10-d/hoa-special-assessments/raw/`. Each workbook's complaint dates fall inside its calendar year (2022 to 2025).
- **Scripts:** ran `scdca_outcomes.py` and `build_charts.py` on my own downloads. All three output files are identical to the researcher's. I also re-counted the Horry status, recommendation tokens and days-to-close by my own split. Same counts. The median of 402 is 33 (both middle values 33).
- **Bills:** H. 3447, S. 903, S. 366, H. 3350, H. 5204 pages, live. Read the bill text of 3447, 903, 366 and 5204.
- **Other states:** N.C. Gen. Stat. 47F-3-107.1 and 47F-1-102; Fla. Stat. 720.305, 2025 and 2026 editions (subsection (2) identical).
- **SC Secretary of State** search page (loads; a test search needs a captcha).
- **Reused rows:** read each source row and its verifier's note in its own ledger (hoa-vs-poa, liens, documents, benefits, hub, special-assessments, reserves, both rental-restrictions ledgers), and stories.json.

## Corrections

| Row | What was wrong | Use instead |
|---|---|---|
| 4 | The 2019 Act made two edits to the HOA definition. It respelled "time sharing" and deleted "only" after "and subject", which changes which timeshares are left out. "Reworded one phrase" understates it. | "The HOA Act dates from 2018. It has been changed once, in 2019, when its definition of an HOA was edited where it leaves out timeshares" [27-30-120, history note]. |
| 18 | Counts hold (308, 87, 25, 4 of 452). The note's definition of "adequate business response" leaves out the second half of the agency's text: "referred to a policy that supports the businesses claim" (report p. 8). | "An adequate business response means the HOA answered every point and named a policy that backs it, whether or not the owner was satisfied" [2026 report, closing categories]. |
| 20 | Counts and the 33-day median hold. "2 were dropped": Abandoned means "The consumer failed to provide the SCDCA with the requested information" (report p. 8). The chart label "Dropped by the owner" has the same fault. | "2 closed because the owner did not send what the state asked for." For the 269, use row 18's definition. |
| 21 | Counts hold. The workbook columns are "Recommendations for changing provisions of governing documents" and "... for enforcing governing documents" (27-30-340(B)(8)). Owners did not ask the state to change anything. The chart title has the same fault. The 416 are complaints, not owners. | "When they file, owners must say what they would change in their HOA's papers and how the papers should be enforced. Of 416 Horry County complaints, 171 (41 in 100) named open meetings and notice rules ..." [our count of the SCDCA workbooks, 2022 to 2025]. |
| 24 | First sentence holds ("fine" 0 hits in 27-30 and 27-31). The heading "no hearing right, in state law" is the wording benefits row 17 struck, and it is too wide: 33-31-621 requires a fair procedure before a nonprofit suspends a member. | "Neither the HOA Act nor the condo law caps fines or says a hearing must come before one" [27-30, 27-31]. |
| 31 | 33-31-822(a) is about notice to directors. "The board's regular meetings need no notice" reads to an owner as notice to owners. | "The Act's notice rules for board meetings are about notice to directors. It gives owners no right to notice of a board meeting, unless the bylaws do" [33-31-822]. The rest holds: yearly meeting (701(a)), 10 to 60 days as a safe harbor (705(b), (c)(1)), 5 percent for a special meeting (702(a)(2)). |
| 33 | A derived row, not a verified one. "The only rule is the notice" drops the nonprofit exception (registry `hoa-48-hour-notice`). | "State law puts no cap on a dues increase. The HOA Act's only rule is 48 hours' notice of the vote, and it does not apply to a nonprofit HOA" [27-30-140]. |
| 37 | Its source (11-b rental row 16, VERIFIED) ends with a limit this row dropped: "In that case both sides agreed that short-term renting itself was allowed." | "The court took the reading that 'least restricts the use of the property', in a case where both sides agreed short-term renting was allowed" [Op. No. 5525]. |
| 42 | S. 903 is described wrong. Its title: "TO REQUIRE CERTAIN HOMEOWNERS ASSOCIATION DOCUMENTS TO BE SUBJECT TO SECTION 30-5-30". As passed by the Senate it also requires governing documents to be witnessed and acknowledged to be recorded, from January 1, 2027. Votes, dates and committees for all five hold. | "S. 903 (would count rules as governing documents, hold them all to the January 10 recording rule, and from 2027 require them to be witnessed and acknowledged to be recorded)". Say "five of the HOA bills", not all of them. |
| 43 | (a) The fine is up to $100 "for the violation" and then up to $100 a day; the row printed only the daily part. (b) The 15-day appeal is from an adjudicatory panel's decision only. (c) Scope, 47F-1-102: communities created since 1999, except those of 20 lots or fewer that have not opted in, and older ones unless their papers say otherwise. | "A fine set that way may be up to $100 for the violation, and up to $100 for each day it goes on more than five days after the decision." "If a panel made the decision, the owner may appeal to the full board within 15 days" [N.C. Gen. Stat. 47F-3-107.1]. NC planned communities only; NC condos (47C) not checked. |
| 44 | Caps, the $1,000 lien floor and 14 days hold, and the 2026 edition matches 2025. The committee may not include officers, directors, employees or their close relatives; "not on the board" leaves out the rest. | "... before a committee of at least three members who are not officers, directors or employees of the association, or their close relatives" [Fla. Stat. 720.305(2)(b), 2026]. Florida HOAs only. |
| 52 | The report says "the HOA or management company". | "98 percent of those who filed in 2025 said they had raised the issue with the HOA or its management company first" [2026 report]. |
| 55 | The story bank says "the biggest mistake New York buyers make". "The mistake we see most often" turns that into a frequency claim the bank does not hold. | "The biggest mistake New York buyers make is not checking that the community's rules fit how they live: HOA covenants on boats, golf carts, rentals and pools." Never describe the people in a community. |

## Verified, with limits the writer must keep

- **1, 2:** the agency's summaries. Attribute them to Consumer Affairs, not to a statute.
- **3:** the search page loads, but I could not run a search (captcha). Say "search the name"; do not promise what the profile shows.
- **6:** the claim lists five topics. Do not print "six".
- **9, 33:** never state 48 hours without the nonprofit exception.
- **12:** jurisdiction is concurrent; $7,500 or less (22-3-10(1)).
- **16:** the base is the 586 received; 13 + 39 + 4 + 78 = 134.
- **22:** shares of recommendations, not of complaints. Never mix with row 21.
- **29:** it lets the board, or a harmed owner, sue an owner who breaks the rules. It does not answer "can I sue my HOA".
- **32 (negative claim):** re-searched all three live chapters under attend, observe, open to, open meeting, closed or executive session, board meeting and meetings of the board. No right for owners to attend a board meeting or get notice of one. The "attend" hits are 33-31-706 (waiver of notice) and 33-31-724 (proxies). Scope: these three laws. Bylaws can give the right. Row 21's choice is "open meeting/notice requirements"; say that, not "the right to attend board meetings".
- **36:** a master deed must state lease limits. Never write that a limit elsewhere is void.
- **39:** one portable, removable US flag, on the property the owner or tenant may use; not a flagpole. S. 366 would widen it; it is not law.
- **40 (negative claim):** re-searched under transition, turnover, turn over, declarant, developer, relinquish, class B, special declarant, control of, surrender and hand over. 27-30 only defines the declarant and a special declarant right. The one "declarant" in 27-31 is in the condo-conversion tenant offer (27-31-420).
- **42:** all five bills die if not passed before the 2025-2026 session ends. Re-check every bill page before release.
- **48:** re-check the county's no-images notice before release.
- **51:** both agency pages give 800-868-2284. The SC Bar's own page did not load here (script-rendered; lrs.scbar.org did not connect).
- **Reused rows 5, 7, 8, 10, 11, 13, 19, 23, 25 to 28, 30, 34, 35, 38, 41, 45 to 47, 49, 50, 54:** wording matches the source row (its corrected wording where it was corrected). None is past its stale-by date.

## For the writer and the lead

- `data/2026-11-b/hoa-south-carolina-hoa-laws/build_charts.py`: change the chart title "What Horry County owners asked the state to change" (row 21) and the label "Dropped by the owner" (row 20), then re-run. I did not edit the data folder.
- The ledger's struck-before-use list stands. I add nothing to it beyond the struck list file.

## Should not be published

Nothing in the ledger needs to be cut whole. The struck wordings above must not be printed.
