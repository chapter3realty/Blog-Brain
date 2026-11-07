# One main question per page: the research and the plan

Owner, 2026-11-07: "the pages are long do you think that might be hurting our SEO value because we get so far away from the original question? ... the pages that get the most impressions and the least clicks probably need more clickbaity titles ... i dont want to rebuild good pages and hurt them or rebuild bad pages that hurt good pages ... do alot of research on the best ways to answer one main question for SEO and GEO and also figure out if that is the best strategy listen to experts with million view pages"

## 1. What our own Search Console says (28 days to 2026-11-06)

The whole site: 134 clicks, 15,794 impressions, a 0.85% click rate, average position 15. Phones rank at about 9, desktops at about 19.

**The pages that earn the clicks are short and answer one question.** Prose measured by `tools/score.js`:

| Page | Clicks | Shown | Prose words | Sections |
|---|---|---|---|---|
| /hoa/dues-increases/ | 19 | 505 | 1,389 | 6 |
| /buyers/property-taxes/ | 16 | 1,815 | 1,587 | 5 |
| /hoa/violations-and-fines/ | 8 | 457 | 1,306 | 6 |
| /hoa/developer-control-turnover/ | 7 | 308 | 1,364 | 6 |
| /hoa/who-pays-for-damage/ | 3 | 221 | 1,337 | 6 |
| /buyers/golf-communities/ | 3 | 249 | 779 | 4 |
| Rebuilt pages (condos, FSBO, Garden City, which town, and others) | 0 to 2 so far | | 1,970 to 3,040 | 9 to 17 |

None of the top ten pages has been rebuilt. The rebuilt pages are one to five days old in this data, so they cannot be judged yet.

**Many pages are shown and not clicked.** At positions 7 to 12, these got almost nothing:

| Page | Shown | Clicks | Position |
|---|---|---|---|
| /buyers/property-taxes/ | 1,815 | 16 | 8.3 |
| /buyers/closing-costs/ | 774 | 2 | 12.4 |
| /buyers/coastal-insurance/ | 662 | 0 | 9.7 |
| /invest/str-rules/ | 610 | 1 | 8.2 |
| /submarkets/carolina-forest/ | 452 | 0 | 11.9 |
| /invest/condos/ | 315 | 0 | 6.9 |

Two causes: the title does not say what was searched, and Google's AI answer is taking the click (section 2).

**The titles that win say what was searched.** "How Much Can an HOA Raise Dues in SC?" got 19 clicks from 505 showings. "Horry Property Tax: Why Rentals Pay 3-4x More" got 16 from 1,815. People search "horry county property tax rate" and "horry county property taxes", and most of them live in the home. The hook was about rentals.

**The "headlines that sell" change of 2026-10-27 may have helped, and the data is too thin to be sure.** The site's click rate was about 0.7% from Oct 8 to 25, and 1.4% from Oct 26 to 30. It fell to about 0.4% from Nov 2 to 4. That is 4 to 13 clicks a day, too few to tie to one change. A page-by-page comparison of before and after would settle it (section 6).

**Some searches look like AI tools, not people.** "which pawleys island neighborhoods offer the best value for second homes or vacation rentals?" at position 2 to 7, with no clicks. These are long, exact questions of the kind ChatGPT and Google's AI Mode send when they search for sources. Being the source they quote is the GEO goal.

## 2. What the research says

**Short, focused pages are cited more than long guides.**
- Kevin Indig (Growth Memo) with AirOps studied 815,000 ChatGPT query-and-page rows in 2026. The strongest content signal was a heading that matches the question: 41% of such pages were cited, against 30% for a poor match. Pages that covered a quarter to a half of the follow-up questions were cited more than pages that covered all of them. In his words, build the page that is the best answer to one question, not the page that adequately answers 20. ([Search Engine Journal](https://www.searchenginejournal.com/shorter-focused-content-wins-in-chatgpt/571857/), [AirOps](https://www.airops.com/report/the-fan-out-effect-what-happens-between-a-query-and-a-citation))
- Indig, 1.2 million ChatGPT answers: 44% of citations come from the first 30% of a page. ([Search Engine Land](https://searchengineland.com/chatgpt-citations-content-study-469483))
- Ahrefs, about 174,000 pages cited in Google's AI Overviews: word count and citation correlate at 0.04, which is no link at all. 53% of cited pages are under 1,000 words and another 31% are 1,000 to 2,000. ([Ahrefs](https://ahrefs.com/blog/short-vs-long-content-in-ai-overviews); figures from coverage, as ahrefs.com is blocked here.)

**Google says there is no special AI writing, and warns against a page for every sub-question.** Google's guide of 2026-05-15 says AI features run "query fan-out", many related searches on subtopics. It says you do not need to chunk content or write a special way for AI. It also says pages built for every fan-out variation mainly to rank break the scaled content abuse policy. ([Search Engine Journal](https://www.searchenginejournal.com/googles-new-ai-search-guide-calls-aeo-and-geo-still-seo/575026/), [Google](https://developers.google.com/search/blog/2026/05/a-new-resource-for-optimizing))

So the answer is neither "one giant page" nor "a page per question". It is one strong page per question people actually search, with the few follow-ups its readers ask next.

**Google's AI answer takes clicks, and being quoted in it gives some back.**
- Pew, 68,879 real searches: people clicked a result 8% of the time when an AI summary showed, against 15% without one. ([Pew via Search Engine Land](https://www.searchengineland.com/google-ai-overviews-hurting-clicks-study-459434/))
- Seer Interactive, 5.47 million queries: a brand quoted in the AI Overview got 120% more clicks per showing than one not quoted. ([Seer](https://www.seerinteractive.com/blog/aio-impact-on-google-ctr-2026-update))
- The Princeton GEO paper (KDD 2024): adding statistics, quotations and cited sources raised a page's visibility in AI answers by up to 40%. Our pages already do this; it is our strength. ([arXiv](https://ar5iv.labs.arxiv.org/html/2311.09735))

**Titles: match the search first, then add one real hook.**
- Backlinko, 5 million searches: titles of 40 to 60 characters got 33% more clicks. Question titles did no better than others. Older data found "power words" lowered clicks by 14%. ([Backlinko](https://backlinko.com/google-ctr-stats))
- Zyppy (Cyrus Shepard), 80,959 titles: Google rewrote 61% of them, most often when the title was long or disagreed with the H1. ([coverage](https://arnoldit.com/wordpress/2022/03/11/google-shown-to-rewrite-over-half-of-those-carefully-crafted-title-tags))
- SearchPilot split tests: adding the question people type about cost to a title predicted more than 5% more visits. Semrush found that cutting unneeded numbers from titles raised clicks 7%. ([SearchPilot](https://searchpilot.com/resources/case-studies/adding-question-on-cost-to-title-tag))
- Google's own self-check asks whether "the main heading or page title avoid exaggerating or being shocking in nature". Raters mark a shocking title that the page does not deliver as low quality. ([Google](https://developers.google.com/search/docs/fundamentals/creating-helpful-content))

So "clickbait" that works is the searched words plus a true, specific fact from the page. A hook that drops the searched words loses.

**Do not rewrite a page that already ranks; fix its title.** Refresh guides agree: keep the URL, keep the sections that already rank, and tell a lost ranking apart from a lost click before changing anything. Merging two pages works when they split the same search and neither holds a stable spot. Ahrefs found that most suspected cannibalisation needed no action. ([Ahrefs](https://ahrefs.com/blog/keyword-cannibalization/))

## 3. The verdict

Yes, one main question per page is the right strategy, with two limits:
1. **One question plus its next two to four.** Not one question only, and not twenty.
2. **A side question gets its own page only if people search it.** Otherwise it gets one sentence and a link to the page that owns it.

What stays exactly as it is: our own counts from public records, sources on every fact, the independent verifier, the offers and the AI tools. Those are why the pages are good. The pages are not too deep; they are too wide.

## 4. What changed today

- **Rule `focus` (STANDARD A14) in `tools/score.js`:** 1,800 words of prose or fewer and 8 sections or fewer, with a numbered list of places counting as one section. It has controls. On the site today 66 articles pass and 72 run over.
- **CRAFT 1 and 7:** one main question per page, and how to make a title worth clicking while keeping it true.
- **The builder brief** (`workflows/redesign-batch.js`) carries the cap.
- **Website patch v1.35:** new titles and descriptions on eight pages that are shown a lot and clicked little. Each title leads with the searched words and one fact the page states:

| Page | Old title | New title |
|---|---|---|
| /buyers/property-taxes/ | Horry Property Tax: Why Rentals Pay 3-4x More | Horry County Property Tax Rate: 4% vs 6%, With a Calculator |
| /buyers/closing-costs/ | SC Closing Costs, Calculated: Who Pays What | South Carolina Closing Costs: Buyers Pay 2-5%, Calculator |
| /buyers/coastal-insurance/ | Myrtle Beach Home Insurance: What It Costs, 6 Ways to Cut It | Myrtle Beach Home and Flood Insurance: What It Costs |
| /invest/str-rules/ | Where Airbnb Is Legal in Myrtle Beach, City by City | Myrtle Beach Short-Term Rental Rules: Where Airbnb Is Legal |
| /buyers/55-plus-communities/ | Myrtle Beach 55+ Communities: Real HOA Fees Compared | Myrtle Beach 55+ Communities: 9 Compared, Fees From $43 |
| /submarkets/carolina-forest/ | Carolina Forest: No City Tax, 11 Subdivisions | Carolina Forest, SC: Home Prices, 11 Subdivisions, No City Tax |
| /hoa/violations-and-fines/ | HOA Violations and Fines in South Carolina | Can an HOA Fine You in SC? There's No Legal Cap |
| /hoa/hoa-vs-poa/ | HOA vs POA vs Condo Regime in South Carolina | HOA vs POA in South Carolina: Same Thing in Law |

Left alone: dues increases, developer turnover, who pays for damage and golf communities (they earn their clicks), and condos and Pawleys Island (rebuilt days ago, not judged yet).

## 5. Pages that compete with our best pages

The election guides published 2026-11-04 (another chat) aim at the same searches as three of our most-shown pages:

| Strong page (shown, 28 days) | Election guide on the same search |
|---|---|
| /buyers/property-taxes/ (1,815) | /buyers/act-388-changes/ "Act 388 Changes and Your Myrtle Beach Property Tax", and /invest/rental-property-tax-cut/ |
| /invest/str-rules/ (610) | /invest/short-term-rental-rules-statehouse/ "Grand Strand Short-Term Rental Rules After the 2026 Election" |
| /buyers/coastal-insurance/ (662) | /buyers/flood-insurance-after-the-election/ |

Proposed fix, for the owner to approve: each election guide's title leads with the news ("What the 2026 Election Could Change for Grand Strand Airbnbs"). Its first section links to the strong page for the standing rules, and it never repeats the strong page's tables. This is not done yet because that chat may still be working on those files.

## 6. What to measure

- **Ask of the owner:** Search Console, Performance, Pages tab, Date, Compare, "Oct 27 to Nov 6" against "Oct 16 to Oct 26", then Export. That shows page by page whether the 2026-10-27 headlines and the rebuilt pages helped or hurt. Filtering by one page and exporting its Queries tab shows what that page is really found for.
- **2 to 3 weeks after v1.35 is live:** click rate on the eight retitled pages, against the same pages before.
- **4 to 6 weeks after each rebuilt group is live:** clicks and position, against the pages we did not touch.
