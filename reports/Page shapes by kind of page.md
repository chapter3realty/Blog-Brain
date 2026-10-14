# Pick the page shape from the reader's job

Every page on chapter3realty.com is built in one shape today. The website's `tools/mkpage.js` writes a hero, a short answer, a run of sections, a FAQ of at least three entries, a sources line and a navy call to action, in that order, for every topic. The evidence says the shape should follow the reader's job. A reader who came to follow a process needs numbered steps. A reader who came to compare needs a table. A reader who came for a trend needs a line chart. A reader who came to decide needs a verdict with conditions. The site does not do this yet. Of the 115 pages with Article schema in the clone of the live branch, **12 have a numbered list, 57 have a table and 18 have a chart or drawn figure**. The foreclosure auction page is a process with eleven question sections and no numbered steps. The monthly market report has two tables and no chart. The short-term against long-term rental page is a comparison with no table.

The research behind this report agrees on a few rules:

- **The format must fit the task.** Tables suit looking up exact values. Graphs suit seeing a trend or a pattern ([Vessey 1991](https://doi.org/10.1111/j.1540-5915.1991.tb00344.x)). NN/g gives the same advice for charts: a line for a trend, bars for a comparison, and no pie or stacked bars ([NN/g, choosing chart types](https://www.nngroup.com/articles/choosing-chart-types/)).
- **Fewer options and fewer numbers help people choose.** Consumers given less information understood cost and quality better and chose the better option more often ([Peters et al. 2007](https://pubmed.ncbi.nlm.nih.gov/17406019/)). A comparison table works for 5 options or fewer, and a phone shows about 2 at a time ([NN/g, comparison tables](https://www.nngroup.com/articles/comparison-tables/)).
- **Pictures help most when they show where things are or how ideas connect** ([Houts et al. 2006](https://pubmed.ncbi.nlm.nih.gov/16122896/)). That is the case for maps, timelines and step diagrams, and against decorative photos.
- **A correction leads with the fact, in the heading.** "The best corrections are as prominent (in the headlines, not buried in questions) as the misinformation" ([Debunking Handbook 2020](https://sks.to/db2020)).
- **Answer engines lift blocks, not pages.** Microsoft says "bulleted lists, numbered steps, and comparison tables break complex details into clean, reusable segments", and that "AI systems may not render hidden content" ([Microsoft 2025](https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers)). Google says there is "no special schema.org markup you need to add" and "no ideal page length" ([Google AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)).
- **Most page-type schema is gone from Google.** FAQ rich results ended on 7 May 2026. HowTo ended in 2023. ClaimReview is being phased out. Dataset markup feeds only Dataset Search. Speakable is a beta for English-language news publishers ([Google updates log](https://developers.google.com/search/updates)). Article and BreadcrumbList remain the useful core for every kind of page here.

This report gives a shape for 13 kinds of page, a short method for a topic that fits none of them, and a list of which shapes the current tools can build. The general design rules (type size, contrast, first screen, open text, CTAs) are in `reports/Page design for readers and search.md` and are not repeated. CRAFT section 3 still governs: the shapes below are starting points a writer adapts to the place and the reader, not templates.

## How the evidence is graded

The grades match the design report. **Tested** means a controlled study, a meta-analysis or measured data. **Standard** means a W3C rule or a platform's documentation about its own system. **Observed** means usability research without statistics. **Expert** means published guidance with no study behind it. **Pattern** means what well-run publishers do, seen on their pages. A pattern is an example, not proof.

## What every shape keeps

These hold on every kind of page. They come from the design report and STANDARD, and the shapes below do not repeat them.

- The H1 names the question and a Grand Strand place (STANDARD S3).
- The byline sits under the H1, with the date from `build.js dates`.
- A short answer in the first phone screen: the answer first, 40 to 120 words (STANDARD A2). On a calculator page the "answer" is the tool's purpose and the typical result. On a story page it is the lesson.
- All content is open text. Nothing that matters sits in a tab, closed accordion or carousel (STANDARD A13).
- Every fact in a picture is also in the text ([Microsoft 2025](https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers)).
- Sources, a few CTAs that look like content, and one story or labelled example near the end, unless the page is the story.

## A quick chooser

| Kind of page | The reader came to | Lead block | The visual that does the work | Tool today |
|---|---|---|---|---|
| Local area or community guide | Picture living there | What life is like, plus a key facts row | Map, then captioned photos | Yes: `area-map.js`, `icons.js`, `photos.js`, `illustrations.js` |
| Cost or fee breakdown | Know the total and who pays | The typical total in a sentence | Itemized table with a total row | Partly: `h.table` has no total row or number alignment |
| How-to or process | Follow the steps in order | How many steps and how long | Numbered steps; a timeline when deadlines matter | Partly: `h.ol` only; no step or timeline tool |
| Comparison of options | Choose one | The verdict by situation | Comparison table, 2 to 5 options | Partly: `h.table`; no comparison card; map for one place only |
| Explainer of a law or rule | Know if it applies and what to do | The rule in one sentence | Rule table: who, what, when, exceptions | Yes: `h.table`, `h.p` |
| Market data and trends | Know the number and its direction | The latest number, its change and period | Line chart plus the table of values | No shared chart tool; charts are hand-built per spec |
| Checklist | Not miss anything | How many items and when to use it | The checklist, grouped by stage | No: `h.ul` has no check boxes or groups |
| Calculator or tool | Get their own number | The tool, with one sentence on what it does | The calculator and a worked example | No shared tool; two calculators are hand-built |
| Decision guide ("should I") | Decide | "Usually yes" or "No, unless" with the conditions | Decision table or short branch list | Partly: `h.table` |
| Myth vs fact | Learn what is true | The true fact in the heading | Fact and myth pairs, fact first | Yes: `h.h3`, `h.p` |
| News or update | Know what changed and if it affects them | What changed, when, for whom | Before and after table | Partly: no "what changed" block; FAQ is forced |
| FAQ hub | Find one answer fast | The list of question groups | Grouped questions with short answers and links | Partly: FAQ is one flat block at the end |
| Story-led page | Learn from what happened to someone | The outcome and the lesson | One or two photos of the real place, a small timeline | Partly: FAQ and short answer label are forced |

## 1. Local area or community guide

Examples on the site: `/submarkets/conway/`, `/buyers/55-plus-communities/myrtle-trace/`.

**The reader's job.** Picture daily life in a place they have never been, and judge if it fits. They do not know the towns, the roads or the distances (CRAFT section 1; owner rule PLAIN-4). Retirees want the homes, the pool, the beach and the things to do. Investors want the rental rules and the numbers.

**The first screen.** The H1 with the place, the byline, and the first sentence of what life is like there. A key facts row of 5 to 8 icons with words (minutes to the beach, to a hospital, to groceries; home types; 55+ or not; gated; pets). No large photo above the answer ([NN/g 2018](https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/)).

**The best order.** The design report's community guide order stands (components 1 to 19). In short:

1. Short answer: what life is like.
2. Key facts row.
3. Where it is: our own map, with drive times in the caption and the text.
4. What life is like: clubs, pool, golf, events, pets, guests.
5. The homes: types and sizes in plain words.
6. What is nearby: a table of place and minutes by car.
7. What it costs: dues and what they cover, price range, taxes, flood insurance in plain meaning.
8. The honest drawback and what to do about it.
9. One story, then the next step, then FAQ.

**The visual that does the work.** The map. Pictures improve comprehension most "when they show spatial relationships" ([Houts et al. 2006](https://pubmed.ncbi.nlm.nih.gov/16122896/), Tested). A newcomer cannot place a town from its name. Next come two or three captioned photos of the real place, in a column, and the key facts row. Small drawings from `illustrations.js` can show an amenity when no licensed photo exists.

**What to leave out.** History, founding dates and builder names unless the reader would miss them (CRAFT section 2). School ratings, "family-friendly", "safe" and "suits retirees": these are fair housing problems (STANDARD C5). A photo gallery or carousel. A live map that loads on arrival (STANDARD P8). A list of every restaurant.

**How answer engines quote it.** The first sentence of the short answer, if it names the place and stands alone. Table rows from "What is nearby" ("about 15 minutes to the beach"). Section openers such as "Dues cover lawn care, the pool and the clubhouse." Google says AI answers favor first-hand, non-commodity content ([Google AI guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)). A local guide is the site's strongest case for that, because few third-party pages know these streets.

**Schema that still helps.** Article with a Person author, both dates and the hero photo in three crops; BreadcrumbList; an ImageObject for each photo (STANDARD S13). Google offers no rich result for a place or a neighborhood. LocalBusiness markup belongs only to the brokerage itself, never to a community. Event markup is for the organizer's own event page, so a guide that mentions a festival should not mark it up.

**Signs of the wrong shape.**

- No map, or the map shows no drive times in the text.
- The page leads with history, a price or a builder.
- More than half the photos are decorative: their captions state no fact.
- Two community pages read alike. STANDARD S10 measures shared text; over 25 percent means the template is writing the page, not the place.

### 1b. A list of many places (added 2026-10-14, from the owner)

"Best neighborhoods", "gated communities", "places to live": the reader picks a few places from many. Keep the opening (the short answer, a numbered map). Then give each place its own numbered entry, 1 to the last: a headline with the place and what it is best for, a few short paragraphs on the homes, the amenities and what is close by, one photo of the place, its trade-off, and price and fee in one line. A table of all the places side by side may follow the list. Do not split the places across want cards, tables by area and cards: the owner called that "too jumpy" and said the page was "alot about price instead of the amenities" (voice/VERDICTS.md, 2026-10-14).

## 2. Cost or fee breakdown

Examples: `/buyers/closing-costs/`, `/sell/net-proceeds/`, `/buyers/cost-to-own/`. None of the three has an HTML table today; each has a calculator instead.

**The reader's job.** Learn the total they will pay or keep, and who pays each part. Sellers want what they walk away with. Buyers want the cash they need at closing.

**The first screen.** The typical total as a rounded range in a sentence, with the price it assumes: "On a typical sale here, the seller pays about [X] percent of the price in costs, most of it the commission." The number comes from the fact ledger. Then who pays what in one line.

**The best order.**

1. The typical total, in a sentence.
2. The itemized table: item, who pays, typical amount or rate. A total row at the bottom.
3. The two or three items that change the total most, each with one line on what moves it.
4. A worked example, labelled "Example", with round numbers (STANDARD T2).
5. The calculator, if the page has one, after the table and not before it.
6. How to lower the cost, then the next step.

**The visual that does the work.** The table. A reader checking a cost wants exact values, which is the task tables fit best ([Vessey 1991](https://doi.org/10.1111/j.1540-5915.1991.tb00344.x), Tested). GOV.UK's Stamp Duty page is the pattern: a two-column rate table, then a worked example that breaks one purchase into its bands and ends with the total ([GOV.UK](https://www.gov.uk/stamp-duty-land-tax/residential-property-rates), Pattern). The CDC Clear Communication Index asks writers not to make readers do math ([CDC](https://www.cdc.gov/ccindex/index.html)), so the page gives the result, not the formula. A bar chart of the cost shares is optional. A pie chart is not: NN/g lists pies among charts that make people judge angle or area, which is harder ([NN/g](https://www.nngroup.com/articles/choosing-chart-types/)).

**What to leave out.** Every rare fee. Exact cents. More than 3 numbers in a paragraph (STANDARD P1, P2). A table of 15 rows on a phone. Any interest rate or payment amount: Chapter3 is not a lender (CLAUDE.md, STANDARD C3).

**How answer engines quote it.** The total sentence. Table rows ("Deed stamps: $1.85 per $500, paid by the seller"). The GEO study found statistics with units raised visibility in AI answers ([Aggarwal et al. 2024](https://arxiv.org/abs/2311.09735), Tested in a lab). Each number needs a unit and a period (STANDARD A11).

**Schema that still helps.** Article and BreadcrumbList. Nothing cost-specific.

**Signs of the wrong shape.**

- No HTML table on a page whose title says "cost", "fees" or "how much".
- The total appears only in the calculator output, so a reader who does not type sees no number, and neither does an answer engine.
- The page explains how a fee is calculated before saying what it is.
- The reader has to add the rows up.

## 3. How-to or step-by-step process

Examples: `/invest/foreclosures/` (the courthouse sale), `/invest/strategies/1031-exchange/`, a closing guide.

**The reader's job.** Do the steps in the right order, and not miss a deadline. Many will come back to the page at each stage.

**The first screen.** How many steps, how long the whole thing takes, and the one deadline that cannot be missed. Example: "You have 45 days after the sale to name the replacement property and 180 days to close on it."

**The best order.**

1. The short answer: the number of steps, the time, the hard deadline.
2. The steps as a numbered list. Each step starts with a verb and says who does it, what it costs and how long it takes. GOV.UK's step-by-step pattern lists "steps and tasks ... in the order users need to complete them", shows costs after the task, and uses "and" and "or" steps for tasks that run together or depend on the case ([GOV.UK Design System](https://design-system.service.gov.uk/patterns/step-by-step-navigation/), Observed: 8 rounds of research).
3. A timeline, when the process has fixed deadlines (days after contract, days after the sale).
4. What can go wrong at each step, and the fix (STRUCT-6).
5. A worked example or story, then the next step.

**The visual that does the work.** Numbered steps, in a real `<ol>`. Research on procedural instructions describes readers switching between reading, planning and doing, and Ganier's related work recommends numbered steps to make that switch easier ([Ganier 2004](https://doi.org/10.1109/TPC.2004.824289), Expert, built on tested work). Microsoft names numbered steps as a format assistants lift for how-to queries ([Microsoft 2025](https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers), Standard). A timeline adds the time between steps, which a list cannot show. Mayer's tested principles for instruction support breaking a process into segments and putting each picture next to the words it explains ([Mayer 2008](https://doi.org/10.1037/0003-066X.63.8.760), Tested).

**What to leave out.** Steps written as prose paragraphs. Question headings for each step: a step is an action, not a question, so "Register to bid" beats "How do you register and bid?" when the page is a process. STANDARD A4 asks for 60 percent question headings; a process page can meet it with the sections around the list. Background and law before the first step. Steps the reader does not take (the court's internal work).

**How answer engines quote it.** The numbered list, often whole. The deadline sentence. A heading such as "Steps to buy at a Horry County foreclosure sale" followed by the list.

**Schema that still helps.** Article and BreadcrumbList. HowTo rich results ended in 2023 ([Google 2023](https://developers.google.com/search/blog/2023/08/howto-faq-changes)). The HTML `<ol>` is the structure that matters.

**Signs of the wrong shape.**

- The page describes a process and has no `<ol>`. The foreclosure page has eleven question headings and no list; the reader cannot see the order.
- A deadline appears only in a paragraph in the middle of the page.
- The steps are in an accordion. GOV.UK's own step-by-step is expandable, but its research was on desktop only and it notes more mobile research is needed. On this site the steps stay open (STANDARD A13).
- Steps refer back by position ("the second step"). Owner rule SHAPE-9: name the thing.

## 4. Comparison of two or more options

Examples: `/invest/rental-program-vs-airbnb/`, `/invest/where-to-buy/` (nine areas), `/invest/str-vs-ltr/` (no table today), condo against house, two neighborhoods.

**The reader's job.** Choose one. They weigh several attributes at once. NN/g calls this compensatory decision making and says a comparison table fits it when the options are few ([NN/g, comparison tables](https://www.nngroup.com/articles/comparison-tables/), Observed).

**The first screen.** The verdict by situation, not a winner: "A rental program fits an owner who wants someone else to handle the guests. Self-managing fits an owner who wants to keep more of each booking and can answer guests." Fair housing limits apply: describe how the owner uses the property, never who the owner is (STANDARD C5).

**The best order.**

1. The verdict by situation.
2. The comparison table: options as columns, attributes as rows, row labels on the left, short cell text, no full sentences ([NN/g](https://www.nngroup.com/articles/comparison-tables/)).
3. One section per attribute that decides the choice, in order of how much it matters.
4. "Which one fits which owner": the conditions, again as a short list.
5. An example that runs both options with the same numbers.
6. The next step.

**The visual that does the work.** The comparison table, with at most 5 options, and 2 or 3 columns on a phone. NN/g says a phone can rarely show more than 2 items side by side, and a wordy table may fit only 2 columns ([NN/g, mobile tables](https://www.nngroup.com/articles/mobile-tables/)). If the table scrolls sideways, the first column stays fixed and the page shows that more columns exist. For more than 5 options, such as the nine areas, narrow first: group the areas, or give a map and then compare 3. Choice overload is real when the choice is complex and preferences are unclear ([Chernev et al. 2015](https://doi.org/10.1016/j.jcps.2014.08.002), Tested: meta-analysis of 99 observations). For places, a map with every option on it does more than a column of names.

Less is more here. Readers given fewer attributes chose the higher-quality option more often ([Peters et al. 2007](https://pubmed.ncbi.nlm.nih.gov/17406019/), Tested), and simpler displays helped readers with lower number skills most ([Hibbard and Peters 2003](https://doi.org/10.1146/annurev.publhealth.24.100901.141005)). Keep only the rows that change the choice. Consumer Reports' buying guides open with type cards that each show a photo, a price range, a size and short pros and cons ([Consumer Reports](https://www.consumerreports.org/appliances/refrigerators/buying-guide/), Pattern). Wirecutter narrows a category to a few picks and explains each one's trade-off ([Nieman Lab, summarized](https://www.niemanlab.org/?p=250073), Pattern).

**What to leave out.** A single "winner" when the answer depends on the owner. Attributes that are the same for every option, unless the reader expects a difference. Star ratings or scores we made up. "Best" for a neighborhood (STANDARD C4, C5).

**How answer engines quote it.** The comparison table. The verdict sentence ("Choose X if ..."). Microsoft says these formats are "especially effective for how-to queries and feature comparisons".

**Schema that still helps.** Article and BreadcrumbList. No Review or Product markup: the options are not products we review, and self-serving reviews are not eligible for review snippets ([Google review snippet](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)).

**Signs of the wrong shape.**

- A page with "vs" in its title and no table.
- More than 5 options in one table, or a table wider than the phone with no fixed first column.
- The page discusses each option in its own long section and never puts them side by side. NN/g notes that lists and tabs make the reader remember attributes across options.
- The verdict comes last.

## 5. Explainer of a law or rule

Examples: `/invest/14-day-rule/`, `/invest/str-rules/`, `/hoa/south-carolina-hoa-laws/`.

**The reader's job.** Learn whether the rule applies to them, and what to do. They do not want the history or the statute's wording.

**The first screen.** The rule in one plain sentence, and who it applies to: "If you stay in your rental condo more than 14 days a year, or more than 10 percent of the days it is rented, the IRS treats it as a home you also use, and fewer costs are deductible." A yes or no question gets "Yes", "No" or "Usually" first (STANDARD A3).

**The best order.**

1. The rule in one sentence.
2. Who it applies to and who it does not, as a short table or two lists.
3. What counts, with the edge cases the reader will hit here (Grand Strand rental pools, county against city rules).
4. What happens if you break it, in plain terms.
5. What to do: the actions, as a numbered list.
6. Where the rule comes from: one link to the statute or agency, in the sources line and once in the body (STANDARD A9).

Mayo Clinic's condition pages show the same idea in another field: the same section order on every page (overview, symptoms, when to see a doctor, causes, risk factors, complications, prevention), so a reader who learns one page can scan the next (Pattern, described from earlier copies; the live site refused our request). A family of rule pages on this site can keep a fixed order the same way, which also suits older readers' memory ([W3C older users](https://www.w3.org/WAI/older-users/developing/)).

**The visual that does the work.** A rule table: situation, what the rule says, what to do. A small timeline when the rule has dates (filing deadlines, notice periods). Icons rarely help a law page.

**What to leave out.** The history of the law. Quotes from the statute longer than one line. Legal terms where a plain word exists (STANDARD P6, B2). Advice that needs a lawyer: say so once, plainly.

**How answer engines quote it.** The definition sentence ("The 14-day rule is ..."). The rule table. The first sentence under each question heading (STANDARD A5).

**Schema that still helps.** Article and BreadcrumbList. Legislation markup exists in schema.org but Google shows no feature for it.

**Signs of the wrong shape.**

- The first section is history or the statute's text.
- The page never says who the rule does not apply to.
- The reader finishes the page and does not know what to do. There is no action list.
- The rule is stated differently in two places on the page (STANDARD H6) or on two pages (A12).

## 6. Market data and trends

Examples: `/market-reports/july-2026/` (no chart), `/invest/rent-prices/` (one chart, three tables), `/invest/what-is-being-built/` (charts).

**The reader's job.** Learn the latest number, which way it is moving, and what it means for them. Sellers ask if now is a good time. Buyers ask if prices are falling. Investors want rents and supply.

**The first screen.** The headline number with its period and its change: "The median sale price in Horry County was about $X in [month], about Y percent lower than a year earlier." Then one sentence on what it means for a buyer or seller. The numbers come from the fact ledger and the date comes from the data, not typed (CLAUDE.md).

**The best order.**

1. The headline numbers: price, sales, time on market, inventory. Three or four, no more.
2. A line chart of the main number over 12 to 36 months.
3. The table of values behind the chart.
4. The breakdown by area, as a table or a bar chart.
5. What it means for buyers, for sellers, for investors: one short section each.
6. Where the data comes from, how it is measured, and when it updates.

Zillow's research pages are the pattern for the last part: each data series has a methodology page, a stated update day and a CSV to download ([Zillow Research](https://www.zillow.com/research/data/), Pattern, from search summaries; the site refused our request). Chapter3 can do the same with the Horry County recorded sales it uses.

**The visual that does the work.** A line chart for the trend, with points marked where data was collected ([NN/g](https://www.nngroup.com/articles/choosing-chart-types/), Observed). Position along a common scale is the most accurately read encoding ([Cleveland and McGill 1984](https://doi.org/10.1080/01621459.1984.10478080), Tested). So use lines and bars that share a baseline. Avoid pies, stacked bars, area and 3D. "People need to compare a number against another number in order to interpret it" (NN/g), so show last year's value beside this year's. Put the table under the chart: the chart shows the shape, the table gives exact values ([Vessey 1991](https://doi.org/10.1111/j.1540-5915.1991.tb00344.x)). Visual aids helped people of different number skills understand risk, in a review of 36 publications with 27,885 people ([Garcia-Retamero and Cokely 2017](https://doi.org/10.1177/0018720817690634), Tested: systematic review). Chart text must render at 11 px or more on a 375 px phone (WORKFLOW step 7). Build every chart from the data file (website PLAYBOOK A29c).

**What to leave out.** Every metric the source publishes. Month-to-month changes that are only noise. Forecasts. National numbers, unless they are the comparison. "Price growth" and similar: the owner's word is appreciation (PLAYBOOK A22j).

**How answer engines quote it.** The headline sentence with the number, unit, place and period. Table rows. They cannot read an SVG chart's shape, so each claim the chart makes must also be a sentence. Pages cited by AI assistants were about 26 percent fresher than ordinary results ([Ahrefs](https://ahrefs.com/blog/do-ai-assistants-prefer-to-cite-fresh-content/), Vendor). That rewards a real monthly update, not a changed date (STANDARD T4).

**Schema that still helps.** Article with both dates; BreadcrumbList. Dataset markup is used "only by Dataset Search, not Google Search" ([Google updates log, 5 Nov 2025](https://developers.google.com/search/updates); [Google Dataset](https://developers.google.com/search/docs/appearance/structured-data/dataset)). It is worth adding only if Chapter3 publishes the data file itself, as a CSV with a method note.

**Signs of the wrong shape.**

- A trend page with no chart. The July report today has none.
- A chart with no numbers in the text, or a table with no chart for a trend over many months.
- More than 3.5 numbers per 100 words of prose (STANDARD P2). Move the rest to the table.
- The page has no "what it means for you" section.
- The data is past its `staleBy` date (STANDARD T7).

## 7. Checklist

No live article is built as a checklist today.

**The reader's job.** Make sure they do not miss anything, often while doing the task: walking a house, packing for a move, preparing to list. Many will print it or return to it.

**The first screen.** What the list is for, how many items it has, and when to use it: "Use this list in the two weeks before closing. It has 12 items in three groups."

**The best order.**

1. The short answer: purpose, count, when.
2. The checklist, grouped by stage or place (before the offer, during inspection, before closing), each group of 5 to 9 items.
3. For each item: the thing to check, who checks it and what a bad answer costs (owner rule SHAPE-10).
4. The two or three items people miss most here, with the reason.
5. A print version and the next step.

**The visual that does the work.** The list itself, with check boxes. NASA's study of flight-deck checklists analyzes how a checklist's length, format and order affect whether people complete it, and ends with design guidelines ([Degani and Wiener 1990](https://ntrs.nasa.gov/citations/19910017830), Observed and analysis). Short groups, in the order the work is done, follow from it. A 19-item surgical checklist cut deaths and complications in eight hospitals ([Haynes et al. 2009](https://doi.org/10.1056/NEJMsa0810119), Tested). That is a different field, but it shows a short, ordered list of named checks changes what people do. A check box that remembers its state in the reader's browser is a convenience, not a requirement.

**What to leave out.** Items that apply to almost no one. Explanations longer than one line inside the list; link them instead. Generic items any site could list. Google's own example of commodity content is a real estate tips list ([Google AI guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)). Every item should be local or come from our experience: "Ask for the elevation certificate" beats "Check flood risk".

**How answer engines quote it.** The list items, often as a list. The group headings.

**Schema that still helps.** Article and BreadcrumbList. There is no checklist schema.

**Signs of the wrong shape.**

- A "checklist" written as paragraphs.
- More than about 9 items in one group with no grouping.
- Items that say "consider" or "think about" with no thing to check (SHAPE-10).
- Most items would be true in any town.

## 8. Calculator or tool page

Examples: `/sell/net-proceeds/`, `/buyers/cost-to-own/`, `/invest/rental-returns/`, `/invest/section-8-rentals/`.

**The reader's job.** Get their own number. They often arrive from a search for "calculator" and want the tool at once.

**The first screen.** One sentence on what the tool gives, then the tool's first input. NN/g found users skipped a calculator that loaded late because they scrolled past it ([NN/g, calculator and quiz tools](https://www.nngroup.com/articles/recommendations-calculator/), Observed).

**The best order.**

1. One sentence: what the tool works out.
2. The calculator, on the page, not in a pop-up or a separate page.
3. The result, shown at once and updated as inputs change, with a sentence that says what it means.
4. A worked example in text, labelled "Example", with the same numbers as the default inputs.
5. How the tool works: what it includes, what it leaves out, where the rates come from.
6. What changes the result most, then the next step.

NN/g's 12 recommendations apply in full. The ones that matter most here: require only essential inputs; never ask for an email to see the result; let the reader change one input without starting over; explain each input in a short line beside it; give the output context; and avoid misleading defaults. NN/g's example of a bad default was a mortgage calculator that kept one state's property tax when the user picked another state.

**The visual that does the work.** The calculator. Its result can drive a small bar or table that updates. Every field has a visible label, not only a placeholder (website PLAYBOOK A29e).

**What to leave out.** Any default or placeholder for an interest rate, a payment or a down payment (STANDARD C3). A rate field starts empty with a label. A lead form before the result. A wall of text beside the inputs, which NN/g found overwhelming.

**How answer engines quote it.** Not the tool. Engines read the worked example, the "how it works" text and the table of rates the tool uses. Google's October 2026 helpful-content page counts calculators as main content ([Google helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)), but an engine cannot type into a box. Without the worked example in prose, the page has no quotable answer.

**Schema that still helps.** Article and BreadcrumbList. SoftwareApplication rich results need ratings or an offer and do not fit a free page tool.

**Signs of the wrong shape.**

- The calculator is below the fold on a phone.
- The page has no number in its text, only in the tool's output.
- A field is pre-filled with a rate or payment.
- The result appears with no sentence that says what it means.
- The tool was not checked against three hand-worked cases (website PLAYBOOK A29b).

## 9. Decision guide ("should I ...")

Examples: `/invest/how-long-to-hold/`, "Should I sell now or rent it out?", "Should I buy a condo in a building with a lawsuit?"

**The reader's job.** Decide. Behind the question there is often another one. On the hold page, the owner learned that the real question was "should I sell at all" (website PLAYBOOK A22i).

**The first screen.** A verdict with its conditions: "Usually no. Sell only if you need the money or it will do better elsewhere." STANDARD A3 asks for "Yes", "No", "Usually" or "On average" in the first words.

**The best order.**

1. The verdict with conditions.
2. A decision table: "If this is true for you" against "Then". Three to six rows.
3. One section per condition, in order of how often it decides the case.
4. The cost of each choice, side by side.
5. A worked example for each common case.
6. What to do next for each answer.

Patient decision aids are the best-studied form of this page. The international IPDAS standards, agreed by a Delphi panel from 14 countries, ask aids to present options in a balanced way, help people weigh what matters to them, base facts on current evidence, use plain language and disclose conflicts of interest ([Elwyn et al. 2006](https://doi.org/10.1136/bmj.38926.629329.AE), Standard). For a brokerage page, that means: give the case for each option with the same care, even the one that earns no commission, and say how Chapter3 is paid where it matters.

**The visual that does the work.** The decision table. A short branch list ("If yes, go to ... If no, ...") works when there are two or three questions. An interactive "answer two questions" tool is optional. GOV.UK's question pages ask one thing per page ([GOV.UK](https://design-system.service.gov.uk/patterns/question-pages/), Observed), but on an article the open table lets the reader see every branch at once, and lets engines read it.

**What to leave out.** A verdict that hides behind "it depends" with no conditions (owner rule SHAPE-6). Every possible factor. Pros and cons lists that are not tied to the decision. Promotion for one answer.

**How answer engines quote it.** The verdict sentence. Decision table rows ("If you need the cash within a year, sell"). Engines favor answers that make sense alone, so each row names the subject.

**Schema that still helps.** Article and BreadcrumbList.

**Signs of the wrong shape.**

- The first sentence does not answer the question.
- The page lists factors and never says which way each one points.
- One option gets three sections and the other gets one line.
- The reader cannot find the row that fits them in under a minute.

## 10. Myth vs fact

Example: `/buyers/common-mistakes/` is the nearest page, and it is built as a story list, not as corrections.

**The reader's job.** Learn what is true, often after hearing something wrong from a friend, a forum or another website.

**The first screen.** The most important true fact, stated plainly. The heading carries the fact, not the myth.

**The best order.** The Debunking Handbook 2020, written by 22 researchers, gives the order for each correction ([Lewandowsky et al. 2020](https://sks.to/db2020), Expert consensus summarizing tested work):

1. **Fact.** State the truth first, if it fits in a few clear words.
2. **Myth.** Point to the myth once, with a warning that it is wrong. "Repeat the misinformation, only once, directly prior to the correction."
3. **Fallacy.** Explain why it is wrong, and why people believed it.
4. **Fact.** State the truth again, so it is the last thing read.

The handbook also says the fear of repeating a myth is mostly unfounded. "Repeating a myth while refuting it has been found to be safe in many circumstances." A review of the backfire studies came to the same view ([Swire-Thompson et al. 2020](https://doi.org/10.1016/j.jarmac.2020.06.006), Tested). Repeating it many times is still a risk, because repetition makes a claim feel true. So say the myth once per pair.

The page as a whole: a short answer with the two or three facts that matter most, then 4 to 8 pairs, each under a heading that states the fact ("You do not have to live in South Carolina to buy a home here" rather than "Myth: you must be a resident to buy"). Then a story and the next step.

**The visual that does the work.** The pairs themselves, with the fact clearly set apart from the myth, for example with a bold "What is true" lead. A before and after picture only when the myth is about how something looks. No red X and green check icons alone; the words carry the meaning (STANDARD H15).

**What to leave out.** The myth in the H1 or in a heading. Myths no local reader holds. Mocking the people who believed it. A myth we cannot correct with a sourced fact.

**How answer engines quote it.** The fact headings and the first sentence under each. If the heading states the myth, an engine may lift the myth.

**Schema that still helps.** Article and BreadcrumbList. ClaimReview is being phased out of Google Search ([Google fact check](https://developers.google.com/search/docs/appearance/structured-data/factcheck)), and it is for fact-checkers reviewing a specific claim by someone else. Do not use it.

**Signs of the wrong shape.**

- A heading or the H1 states the myth.
- A section says "this is false" and gives no true alternative.
- The myth is repeated more often than the fact.
- The corrections are inside closed accordions. The handbook says the correction should be impossible to miss "even when skimming".

## 11. News or update about a change

Examples: a new county rule, a tax change, a hospital opening, the monthly market report.

**The reader's job.** Learn what changed, when it takes effect, and whether it affects them.

**The first screen.** One sentence with the change, the date it takes effect and who it affects. This is the inverted pyramid: "the most important information first", so a reader who stops after one paragraph still has the news ([NN/g, inverted pyramid](https://www.nngroup.com/articles/inverted-pyramid/), Expert).

**The best order.**

1. What changed, when, for whom.
2. A before and after table: the old rule or number, the new one.
3. What to do now, as a short list.
4. Why it changed, in two or three sentences, if the reader would miss it.
5. Links to the evergreen page that owns the topic.

There is a site rule to follow. STRUCT-9 says one page owns each question. A change to the short-term rental rules belongs on the rules page, which is updated and re-dated by `build.js dates`. A separate news page is worth making only when the change is itself the question people search ("new Horry County rental rule"). It then links to the owner page and does not repeat it.

**The visual that does the work.** The before and after table. A small timeline when there are several dates (announced, takes effect, first bill).

**What to leave out.** A long lead-in. Quotes from officials. Anything that will be wrong next month, unless the page will be updated. A FAQ that repeats the article: `mkpage.js` requires three FAQ entries today, and a news page rarely has three new questions.

**How answer engines quote it.** The first sentence. The table rows. The visible date matters: Google asks for a visible, labelled date ("Published", "Last updated") that matches the markup, and warns against other dates that compete with it ([Google publication dates](https://developers.google.com/search/docs/appearance/publication-dates), Standard).

**Schema that still helps.** Article (or NewsArticle) with datePublished and dateModified that match the visible dates; BreadcrumbList. Speakable is a beta for news publishers whose readers use Google Home in English in the United States ([Google Speakable](https://developers.google.com/search/docs/appearance/structured-data/speakable)). Chapter3 is not a news publisher. `mkpage.js` adds a Speakable block on the H1 of every page; it earns nothing and can be dropped.

**Signs of the wrong shape.**

- The change and its date are not in the first two sentences.
- The page and the evergreen page now disagree (STANDARD A12).
- The page was re-dated with no change in the text (STANDARD T4).
- The news page is longer than the page that owns the topic.

## 12. FAQ hub

Examples: a hub page such as `/buyers/`, `/invest/` or `/hoa/`, or a "Questions buyers ask about moving to Myrtle Beach" page.

**The reader's job.** Find one answer fast, or find the page that has it.

**The first screen.** The groups of questions as a short list of links, each group named for the topic ("Taxes", "Flood insurance", "HOA dues").

**The best order.**

1. A short line on what the hub covers.
2. The group list.
3. Each group: 3 to 8 questions, each with a short open answer (15 to 90 words, STANDARD A7) and a link to the page that owns the full answer.
4. A way to ask a question that is not listed.

NN/g says FAQs still help when the questions are real and the answers are frank, and that "good, large FAQs are chunked by topic and designed to be visually scanned". For long FAQs, NN/g advises listing the questions and linking each to its own answer or topic page ([NN/g, FAQs](https://www.nngroup.com/articles/faqs-deliver-value/), Observed). GOV.UK does not use FAQs, because questions are slower to scan than plain headings and they duplicate content that exists elsewhere ([GDS 2013](https://gds.blog.gov.uk/2013/07/25/faqs-why-we-dont-have-them/), Expert). Both points apply. A hub answers briefly and sends the reader to the one page that owns each question (STRUCT-9). It never becomes a second copy of the site.

**The visual that does the work.** The grouped list. Topic icons with words can mark the groups. No accordion: on this site answers are open (STANDARD A13).

**What to leave out.** Made-up questions nobody asks. NN/g calls them a long-standing bad practice. Long answers that repeat the owner page. One flat list of 30 questions.

**How answer engines quote it.** Question and answer pairs. Microsoft says assistants "can often lift" Q&A pairs word for word. Each answer must name its subject and place so it reads correctly alone.

**Schema that still helps.** BreadcrumbList; Article or WebPage. FAQPage earns nothing on Google since 7 May 2026, and Google removed the documentation in June 2026 ([Google updates log](https://developers.google.com/search/updates)). It may still help other engines, and if used it must match the visible text word for word (STANDARD S12). QAPage is for pages where users post questions and answers, not for our own FAQ.

**Signs of the wrong shape.**

- Answers are hidden in closed accordions. One live page, `/buyers/relocating/cost-of-living/`, still has a `<details>` element.
- The hub's answer and the owner page's answer differ.
- Questions start with the same word, so a scanner cannot tell them apart ("How ...", "How ...").
- More than about 8 questions with no groups.

## 13. Story-led page

Example: no live page is built this way. Google's own example of non-commodity real estate content is a story title: "Why We Waived the Inspection & Saved Money: A Look Inside the Sewer Line" ([Google AI guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)).

**The reader's job.** Learn from what happened to someone in their position, and judge whether Chapter3 knows the place.

**The first screen.** The outcome and the lesson, in two sentences. A story page still answers first. The reader should know where the story ends before they read it.

**The best order.**

1. The outcome and the lesson.
2. The story: before, but, therefore, after (`voice/STORY-CRAFT.md`). One picturable detail. Three numbers or fewer, about the people.
3. The meaning, in one plain sentence.
4. The local facts behind it, outside the story, so each can be quoted alone (design report, Stories row).
5. What the reader should do in the same situation, as a short list.
6. The next step.

**The visual that does the work.** A photo of the real place, ours or properly licensed, and only if it shows a fact in the story. A small timeline if the story turns on dates. Never a person as the subject of a photo (`rules/images.md`), and never an AI image of a real place.

The evidence on stories is real but modest. A meta-analysis of narrative persuasion found small positive effects on beliefs, attitudes, intentions and behaviors, with correlations of about 0.17 to 0.23 ([Braddock and Dillard 2016](https://doi.org/10.1080/03637751.2015.1128555), Tested). Readers who are "transported" into a story change their beliefs more ([Green and Brock 2000](https://doi.org/10.1037/0022-3514.79.5.701), Tested). Stories also aid recall ([Mar et al. 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8219577/)).

**What to leave out.** Any detail not in the story bank (`stories/stories.json`). A story told as a client's when it did not happen; a made-up case is labelled "Example" (STANDARD T2). A quote from Tim Nash he has not approved (T5). Devin Day's name in the copy. A money result with no "usual result" beside it (16 CFR 255.2). A FAQ for its own sake.

**How answer engines quote it.** Rarely the story itself. They quote the lesson sentence and the local facts. That is why those stay outside the narrative.

**Schema that still helps.** Article with a Person author; BreadcrumbList. Never Review markup for our own work.

**Signs of the wrong shape.**

- The lesson comes only at the end.
- The story contains the page's key facts, so none can be quoted alone.
- The page has a story and no action for the reader.
- The story would need a detail the story bank does not hold.

## Choosing a shape for a topic that fits none of these

Use five steps. They take about ten minutes and go in the brief before drafting (WORKFLOW Lane N).

1. **Write the reader's job as one verb.** Picture, total, follow, choose, check, decide, calculate, correct, catch up, find, learn from. If two verbs fit equally, the topic may be two pages (STRUCT-9).
2. **Name the main relation in the content.** Place to place: a map. Amount to item: a table with a total. Step to step: numbered steps. Date to date: a timeline. Value over time: a line chart. Option against option on several attributes: a comparison table. Condition to outcome: a decision table. Claim to truth: fact and myth pairs. Old to new: a before and after table. This is cognitive fit: match the display to the task ([Vessey 1991](https://doi.org/10.1111/j.1540-5915.1991.tb00344.x)).
3. **Pick one dominant shape.** The page's lead block and main visual come from it. Other shapes may appear as sections. A community guide can hold a cost table; a comparison can hold a map. Do not give a page two leads.
4. **Test the first screen and the quote.** Write the short answer. Ask: does it give the reader's job in one or two sentences? Would it read correctly if an engine quoted it alone? If not, the shape is wrong or the job is unclear.
5. **After drafting, run the wrong-shape signs** for the nearest kind above, and the general ones:
   - The answer is not in the first screen.
   - A key fact appears only in a picture, a tool or a closed element.
   - The main relation from step 2 has no visual.
   - Most headings are questions the page answers late or not at all.
   - The page would read the same for another town.

Two examples:

- **"What hurricane season means for a Grand Strand owner."** The job is to get ready. The main relation is date to action (before the season, when a storm is named, after). So the shape is a checklist grouped by stage, with a timeline of the season.
- **"Where do new residents of Myrtle Beach come from?"** The job is to learn the pattern. The relation is place to share. So the shape is market data: a short answer with the top three states, a horizontal bar chart, the table, and what it means for sellers. A map of the states is tempting but reads worse than bars, because area is harder to judge than length ([Cleveland and McGill 1984](https://doi.org/10.1080/01621459.1984.10478080)).

## What the tools can build today

| Shape or block | Tool | What it does | Gap |
|---|---|---|---|
| Key facts row | `tools/icons.js` `atAGlance` | 30 line icons, each with a label and text, in a grid | None for facts. No icons for law, money flow, calendar steps beyond `calendar`, `dollar`, `tax`, `key`. |
| Amenity drawings | `tools/illustrations.js` | 14 flat drawings of amenities and places, 4:3, under 8 KB | Amenities only. No process or concept drawings. |
| Map of one community | `tools/area-map.js` `communityMaps` | Region map and close-up, drive times, Google Maps links, our own data | One home per map. No map that compares several areas or neighborhoods, and none for the nine-area investor page. |
| Photos | `tools/photos.js` | Hero, stacked gallery, feature cards, credits, ImageObject schema, crops | None for the shapes here. |
| Page frame | website `tools/mkpage.js` | Hero, short answer, "On this page" at 5 or more H2s, sections, FAQ, sources, bottom CTA | One fixed order. FAQ is required (3 or more), and FAQPage and Speakable are always written. No way to drop the FAQ on a story, news or calculator page. |
| Paragraphs, lists | `mkpage.js` `h.p`, `h.ol`, `h.ul`, `h.h3` | Styled paragraphs and plain lists | `h.ol` has no who, when or cost per step, no "and" or "or" steps. |
| Tables | `mkpage.js` `h.table` | Header row, scrolls sideways in a box | No total row, no right-aligned numbers, no fixed first column on a phone, no caption. |
| Figures | `mkpage.js` `h.figure` | Wraps an image or a labelled SVG with a caption; refuses one with no alt text | Holds a chart but does not draw one. |
| Charts | none shared | Hand-written per spec: `lineChart` in `specs/how-long-to-hold.js`, `pairChart` and `appreciationChart` in `specs/rental-returns.js`, `permitChart` and `communityChart` in `specs/what-is-being-built.js` | Each chart is new code. No common size, colors or 11 px phone text check. |
| Calculators | none shared | Hand-written in two specs, each with a `verify-*.js` test | Each new calculator is new code. The C3 rule (no rate or payment default) is enforced by `build.js`, not by a shared builder. |

**Shapes the tools support now:** local area or community guide (fully), explainer of a law or rule, myth vs fact, and FAQ answers in their simple form. Cost breakdowns, comparisons and decision guides can be built with `h.table`, but the tables lack a total row and a phone-safe first column.

**New tools needed, in order of value:**

1. **A chart tool (`tools/chart.js`).** Line, bar and paired bar charts drawn as SVG from a data file. Text at 11 px or more on a 375 px phone. `role="img"` with an aria-label that states the main fact. Returns the table of values to show under it. The market data, cost and comparison shapes all need it, and 4 hand-made chart functions already exist to learn from.
2. **A step list (`tools/steps.js`).** A real `<ol>` where each step has a verb, who does it, how long it takes and what it costs. It supports "and" and "or" steps from the GOV.UK pattern. It stays open. The how-to shape needs it, and only 12 of 115 articles have any numbered list.
3. **A timeline (`tools/timeline.js`).** Days or dates on one axis, vertical on a phone and horizontal on a wide screen, with each deadline also written as text. The 1031, foreclosure sale, closing and news shapes need it.
4. **A comparison block (`tools/compare.js`).** 2 to 5 options as columns and attributes as rows, with a fixed first column on a phone, short cells, and a "fits an owner who ..." line under each option that the fair housing check can scan. The comparison and decision shapes need it.
5. **A checklist (`tools/checklist.js`).** Grouped items with check boxes, each item naming the thing, who checks it and the cost of a bad answer. A print style. Optional memory of ticked boxes in the reader's browser.
6. **An area map with several places.** An option in `area-map.js` to pin 3 to 9 areas with no community outline, for comparisons such as `/invest/where-to-buy/`.
7. **Shape options in `mkpage.js`.** These would be a website patch in `website-patches/`, tested with `git apply --check`:
   - Let a spec drop the FAQ (story, news and calculator pages). Write FAQPage only when a FAQ exists.
   - Drop the Speakable block.
   - Add a "what changed" table helper for news.
   - Let `h.table` take a caption, a total row and number alignment.

`score.js` could later check shape fit with a passing and a failing control for each rule. Examples: a page whose title says "steps" or "how to" has an `<ol>`; a page whose title says "vs" has a table; a market page has a chart. Each pattern must be read against the live site before its counts are trusted (CLAUDE.md, website MISTAKES rule 4).

## Limits of this evidence

- Most tested work on format comes from health communication and decision research, not real estate. The direction is consistent, but the effect sizes will differ here.
- No study tests these shapes with readers aged 55 to 75 on a real estate page. The design report names the same gap.
- Several publisher patterns could not be opened on the day: Mayo Clinic, Zillow Research, Wirecutter and Nieman Lab refused the request. Those descriptions come from search summaries or older copies and are marked.
- GOV.UK's step-by-step research was on desktop only, by its own account.
- The Ahrefs freshness figure is a vendor study with its own method.
- The cheapest test is the site's own: build one page in the new shape (the foreclosure sale as steps and a timeline, or the market report with a chart), and give it to the buyer readers against the current page.

## Sources

**Google Search Central**

- [Optimizing your website for generative AI features (AI optimization guide)](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), updated 10 July 2026
- [Search Central updates log](https://developers.google.com/search/updates), read 11 October 2026
- [Structured data search gallery](https://developers.google.com/search/docs/appearance/structured-data/search-gallery)
- [Speakable](https://developers.google.com/search/docs/appearance/structured-data/speakable)
- [Fact check (ClaimReview)](https://developers.google.com/search/docs/appearance/structured-data/factcheck)
- [Dataset](https://developers.google.com/search/docs/appearance/structured-data/dataset)
- [Review snippet](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)
- [Publication dates](https://developers.google.com/search/docs/appearance/publication-dates)
- [Creating helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Changes to HowTo and FAQ rich results, 2023](https://developers.google.com/search/blog/2023/08/howto-faq-changes)

**Microsoft**

- [Optimizing your content for inclusion in AI search answers, October 2025](https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers)

**Nielsen Norman Group**

- [Comparison tables for products, services and features](https://www.nngroup.com/articles/comparison-tables/)
- [Mobile tables](https://www.nngroup.com/articles/mobile-tables/)
- [Data tables](https://www.nngroup.com/articles/data-tables/)
- [Choosing chart types](https://www.nngroup.com/articles/choosing-chart-types/)
- [12 design recommendations for calculator and quiz tools](https://www.nngroup.com/articles/recommendations-calculator/)
- [Inverted pyramid](https://www.nngroup.com/articles/inverted-pyramid/)
- [FAQs still deliver great value](https://www.nngroup.com/articles/faqs-deliver-value/)
- [Banner blindness revisited](https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/)

**GOV.UK and other public sector**

- [GOV.UK Design System: step by step navigation](https://design-system.service.gov.uk/patterns/step-by-step-navigation/)
- [GOV.UK Design System: question pages](https://design-system.service.gov.uk/patterns/question-pages/)
- [GOV.UK: Stamp Duty Land Tax residential property rates](https://www.gov.uk/stamp-duty-land-tax/residential-property-rates)
- [GDS blog: FAQs, why we don't have them (Richards, 2013)](https://gds.blog.gov.uk/2013/07/25/faqs-why-we-dont-have-them/)
- [CDC Clear Communication Index](https://www.cdc.gov/ccindex/index.html)
- [W3C WAI: developing for older users](https://www.w3.org/WAI/older-users/developing/)

**Peer-reviewed research and research reports**

- Vessey, I. (1991). Cognitive fit: a theory-based analysis of the graphs versus tables literature. *Decision Sciences* 22(2), 219-240. [doi:10.1111/j.1540-5915.1991.tb00344.x](https://doi.org/10.1111/j.1540-5915.1991.tb00344.x)
- Cleveland, W. S., and McGill, R. (1984). Graphical perception. *Journal of the American Statistical Association* 79(387), 531-554. [doi:10.1080/01621459.1984.10478080](https://doi.org/10.1080/01621459.1984.10478080)
- Peters, E., Dieckmann, N., Dixon, A., Hibbard, J. H., and Mertz, C. K. (2007). Less is more in presenting quality information to consumers. *Medical Care Research and Review* 64(2), 169-190. [PubMed 17406019](https://pubmed.ncbi.nlm.nih.gov/17406019/)
- Hibbard, J. H., and Peters, E. (2003). Supporting informed consumer health decisions: data presentation approaches that facilitate the use of information in choice. *Annual Review of Public Health* 24, 413-433. [doi:10.1146/annurev.publhealth.24.100901.141005](https://doi.org/10.1146/annurev.publhealth.24.100901.141005)
- Houts, P. S., Doak, C. C., Doak, L. G., and Loscalzo, M. J. (2006). The role of pictures in improving health communication. *Patient Education and Counseling* 61(2), 173-190. [PubMed 16122896](https://pubmed.ncbi.nlm.nih.gov/16122896/)
- Garcia-Retamero, R., and Cokely, E. T. (2017). Designing visual aids that promote risk literacy: a systematic review. *Human Factors* 59(4), 582-627. [doi:10.1177/0018720817690634](https://doi.org/10.1177/0018720817690634)
- Chernev, A., Böckenholt, U., and Goodman, J. (2015). Choice overload: a conceptual review and meta-analysis. *Journal of Consumer Psychology* 25(2), 333-358. [doi:10.1016/j.jcps.2014.08.002](https://doi.org/10.1016/j.jcps.2014.08.002)
- Elwyn, G., O'Connor, A., Stacey, D., et al. (2006). Developing a quality criteria framework for patient decision aids (IPDAS). *BMJ* 333, 417. [doi:10.1136/bmj.38926.629329.AE](https://doi.org/10.1136/bmj.38926.629329.AE)
- Ganier, F. (2004). Factors affecting the processing of procedural instructions: implications for document design. *IEEE Transactions on Professional Communication* 47(1), 15-26. [doi:10.1109/TPC.2004.824289](https://doi.org/10.1109/TPC.2004.824289)
- Mayer, R. E. (2008). Applying the science of learning: evidence-based principles for the design of multimedia instruction. *American Psychologist* 63(8), 760-769. [doi:10.1037/0003-066X.63.8.760](https://doi.org/10.1037/0003-066X.63.8.760)
- Degani, A., and Wiener, E. L. (1990). Human factors of flight-deck checklists: the normal checklist. NASA Contractor Report 177549. [NASA NTRS](https://ntrs.nasa.gov/citations/19910017830)
- Haynes, A. B., et al. (2009). A surgical safety checklist to reduce morbidity and mortality in a global population. *New England Journal of Medicine* 360, 491-499. [doi:10.1056/NEJMsa0810119](https://doi.org/10.1056/NEJMsa0810119)
- Lewandowsky, S., Cook, J., Ecker, U. K. H., et al. (2020). *The Debunking Handbook 2020*. [sks.to/db2020](https://sks.to/db2020), doi:10.17910/b7.1182
- Swire-Thompson, B., DeGutis, J., and Lazer, D. (2020). Searching for the backfire effect: measurement and design considerations. *Journal of Applied Research in Memory and Cognition* 9(3), 286-299. [doi:10.1016/j.jarmac.2020.06.006](https://doi.org/10.1016/j.jarmac.2020.06.006)
- Braddock, K., and Dillard, J. P. (2016). Meta-analytic evidence for the persuasive effect of narratives on beliefs, attitudes, intentions, and behaviors. *Communication Monographs* 83(4), 446-467. [doi:10.1080/03637751.2015.1128555](https://doi.org/10.1080/03637751.2015.1128555)
- Green, M. C., and Brock, T. C. (2000). The role of transportation in the persuasiveness of public narratives. *Journal of Personality and Social Psychology* 79(5), 701-721. [doi:10.1037/0022-3514.79.5.701](https://doi.org/10.1037/0022-3514.79.5.701)
- Mar, R. A., et al. (2021). Memory and comprehension of narrative versus expository texts: a meta-analysis. *Psychonomic Bulletin and Review*. [PMC8219577](https://pmc.ncbi.nlm.nih.gov/articles/PMC8219577/)
- Aggarwal, P., et al. (2024). GEO: generative engine optimization. KDD 2024. [arXiv:2311.09735](https://arxiv.org/abs/2311.09735)

**Publisher patterns (examples, not proof)**

- [Consumer Reports refrigerator buying guide](https://www.consumerreports.org/appliances/refrigerators/buying-guide/), read 11 October 2026
- [NerdWallet: Should your first house be a condo?](https://www.nerdwallet.com/article/mortgages/condo-vs-house), read 11 October 2026
- [Zillow Research data](https://www.zillow.com/research/data/) and [methodology](https://www.zillow.com/research/methodology/), from search summaries; the site refused the request
- [Nieman Lab on Wirecutter](https://www.niemanlab.org/?p=250073), from a search summary; the site refused the request
- [Ahrefs: do AI assistants prefer to cite fresh content?](https://ahrefs.com/blog/do-ai-assistants-prefer-to-cite-fresh-content/) (vendor study)

**This repo and the website clone (branch `claude/github-account-check-wutg8b`)**

- `CRAFT.md`, `STANDARD.md`, `WORKFLOW.md`, `voice/RULES.md`, `reports/Page design for readers and search.md`
- `tools/icons.js`, `tools/illustrations.js`, `tools/area-map.js`, `tools/photos.js`
- Website `tools/mkpage.js`, `PLAYBOOK.md` (A22i, A22j, A29b, A29c, A29e), `specs/`
- Counts in this report (115 Article pages; 12 with `<ol>`, 57 with `<table>`, 18 with `role="img"`; one page with `<details>`) were taken from the clone's built HTML on 11 October 2026.
