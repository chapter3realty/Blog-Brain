# Review pass: what no check catches

Run `node build.js audit` in the website repo and `npm test` here first. This list covers what those checks cannot see. Read the rendered page once, top to bottom, as a buyer who does not work in real estate. Then answer every question below for that page.

Each line is a yes/no question. The answer the page needs is in brackets, then the rule in `RULES.md`. A wrong answer means the page goes back to the writer with the sentence quoted.

The order is how often the owner caught the problem, counted from `edits.jsonl` (248 records). The count is in each heading. A record can count under more than one heading. Sections 12 and 14 are low in count, but each of those mistakes cost a full rewrite of a page.


## 00. Simple first (owner, 2026-10-07; answer these before everything, on every page)

- P1. Could a reader who has never been here, and knows no real estate words, follow every sentence? Quote each word or place they would not know.
- P2. Count the numbers in each section. More than three in prose? Any exact figure where a round one would do ("$534,900" for "about $535,000")?
- P3. Does any sentence say what a thing is (a zone, a law, a fee's name) instead of what it means for the reader? Quote it and write the "means for you" version.
- P4. Is there a map of where the place is, and a picture or icon row in the first screen? Is anything named that the reader cannot picture, like a builder's model name?
- P5. Does every question heading get answered in its first sentence? Is any answer "ask", "check" or "read"? Cut the question or answer it.
- P6. How many times is a date or month-year in the body? More than once outside the top line and a deadline is a fail.
- P7. On a page for a home to live in: does the headline or the first screen lead with price? It must lead with the home and the area.
- P8. Which sentences would the reader not miss? Cut them.
- P9. Does the page say a source is old, or date a rule ("the 2019 rules")? Remove the date. Then judge the fact: still true and low risk, keep it plainly; could cost the reader if wrong and you cannot judge it, cut it.
- Skill. Does this page's shape fit its subject, or does it copy another page's sections? Would a different order serve this reader better?

## 0. Buyer first (owner, 2026-10-06; answer these before everything else)

B1. Does the first screen give the target buyer what they want most (what they get, what it costs, whether they can), good news first? [yes] BUYER-1
B2. Is there any word a buyer with no real estate experience would not know: "plans", "platted", "assessed value", "declaration", initials of a company? [no] BUYER-2
B3. Does any sentence open with "records show", "according to", "per <company>", or cite a source in running text where a plain statement would do? [no] BUYER-3
B4. Does any section explain why or how something works when the buyer only needs what it means for them? [no; give the result and link the explainer] BUYER-4
B5. After each section, what would the buyer ask next? Is it answered or offered? List any that are not. [all answered] BUYER-5
B6. Does the page read like a knowledgeable agent talking to a buyer, warm and plain, rather than a report? [yes] BUYER-6
B7. On a community page, does it say what life there is like: events, clubs, what is nearby, pets, guests? [yes, where a source exists] BUYER-7
B8. Is there a paragraph the buyer would skip? [no; cut it or move it to an explainer page] BUYER-8

## 1. Sentences that should not be there (48)

1. Can any sentence be deleted without the reader losing a fact they need? [no] SHAPE-8
2. Does any sentence say only what the next sentence already says? [no] SHAPE-8
3. Does any sentence raise a problem, a risk or a rule that the page never resolves? [no] STRUCT-6

## 2. Figurative language not on any list (42)

4. Does a number, price, tax, law, lease, rule, house, state or document do anything only a person does? [no] FIG-2, FIG-3
5. Is any verb used in a sense other than its plain physical or legal one (sets, carries, maps, covers, clears, sits, runs, holds, reaches, kills, opens, decides, wins)? [no] FIG-4
6. Is a threshold or a difference described as a line, gap, ceiling, door, trap, map, clock or layer? [no] FIG-6
7. Is there any phrase whose meaning is not in its literal words? [no] FIG-1, FIG-7
8. Is there any short sentence that sounds like a saying, with an abstract subject and no person acting? [no] FIG-5
9. Did a story from the owner or Tim keep a figure of speech from the way they told it? [no] STORY-4

## 3. Calls to action (28)

10. Does every CTA offer a person's help with buying or selling, in one of the owner's labels or the same plain form? [yes] CTA-1
11. Does any CTA ask the reader to "send the address", or promise a check the click does not perform? [no] CTA-1, CTA-3
12. Does each CTA sit in a section that says something good about the subject, and match that section? [yes] CTA-2

## 4. Sentences about the page or the reader (28)

13. Does any sentence talk about the page, a section, the writing, or other websites instead of the subject? [no] SHAPE-7
14. Does any sentence say what the reader asks, wants, wonders or cares about? [no] SHAPE-7
15. Does any sentence announce what is missing ("is not on the list", "there is no public index") instead of saying what is there? [no] SHAPE-7

## 5. Headings (28)

16. Does every section heading say, as a plain question, what that section answers? [yes] STRUCT-3
17. Would a reader who sees only the heading know what the section is about? [yes] STRUCT-3
18. Does the H1 name Myrtle Beach, Horry County, the Grand Strand or a town on it? [yes] LOCAL-1
19. Does any heading that could name the place leave it out ("Does the government pay on time?")? [no] LOCAL-1
20. Would a stranger understand the hero sub-header on its own? [yes] STRUCT-5

## 6. Facts and numbers (22)

21. Is every number on the page in the fact ledger with a source someone opened, a quote and a date? [yes] FACT-1
22. Would the owner, who sells in this market every week, ask "is this accurate?" about any claim? [no] FACT-1, FACT-8
23. For every ratio or yield, do the top and the bottom describe the same set of things? [yes] FACT-2
24. Does any number on the page disagree with a number the brokerage published from experience? [no; if yes, ask the owner] FACT-3
25. Does every percentage say what it is a percentage of, with the dollar amount where the reader pays it? [yes] FACT-5
26. Is one client's habit written as a rule for everyone? [no] FACT-7
27. Is any "highest", "lowest", "best" or "most" supported by fewer than two sources that agree? [no] FACT-4
28. Is any figure typed by hand from another page instead of linked to the page that owns it? [no] FACT-6
29. Does the prose say the same thing the calculator on the page computes? [yes] FACT-9

## 7. Business boundaries (18)

30. Could any title, H1, sub, CTA or sentence be read as Chapter3 lending, pricing, arranging or approving a loan? [no] BIZ-1, BIZ-2
31. Has the page's subject drifted from buying or selling to loan rules? [no] BIZ-2
32. Does anything say or suggest that Chapter3 manages property, screens tenants, collects rent or files evictions? [no] BIZ-5
33. Is Devin Day named anywhere other than the byline, author note or schema, or is Paul named anywhere? [no] BIZ-6
34. Is any attorney, inspector, insurer or vendor named, or one person promised for every deal? [no] BIZ-7
35. Does any sentence describe the people in a place rather than the property and the geography? [no] BIZ-8

## 8. Too complicated (16)

36. Is there any sentence you had to read twice? [no] SHAPE-1
37. Does any sentence carry more than one idea? [no] SHAPE-1
38. Does any paragraph run past three sentences where a table or a bold list would do? [no] STRUCT-8
39. Would a buyer standing in the property act differently because of every sentence? [yes] STRUCT-7
40. Is any word one that only people in the industry use, where a plain word exists? [no] WORD-1
41. Is any term made up for the page ("housing money")? [no] WORD-2
42. Is every heading and sentence proper English that a person would say aloud? [yes] WORD-5

## 9. Hedges (13)

43. Does any sentence soften a fact, refuse to answer, or say "it depends" with no answer after it? [no] SHAPE-6
44. Where the page compares two things, does it say "on average, yes" or "on average, no" and give the figures? [yes] SHAPE-6, FACT-5

## 10. Local edge (10)

45. Could a national website have written this page without changing a sentence? [no] LOCAL-2
46. Do the local and niche facts come before the facts any national site carries? [yes] LOCAL-3
47. In every process or list of steps, does each step say what Chapter3 does at that step? [yes] LOCAL-4
48. Is every reason to use Chapter3 a specific true fact, not an adjective? [yes] LOCAL-5

## 11. The reader's next question (10)

49. After each section, is the obvious next question answered on this page or linked? [yes] STRUCT-6
50. Does another page on the site already answer the same question? [no; if yes, one page answers and the other links] STRUCT-9

## 12. The short answer (6)

51. Does the short answer give the number the reader came for (cost, return, appreciation, or on average yes or no)? [yes] STRUCT-1
52. Would the short answer still be true on a different page? [no; if yes, it is not the answer] STRUCT-1
53. Does the short answer carry a caveat that the numbers stay true without? [no; move it to a section] STRUCT-1
54. Does the short answer name anything that is not part of what it answers (a loan, a payment, appreciation counted as cash)? [no] STRUCT-1

## 13. Stories and examples (6)

55. Is every story something that happened, told about "an agent at Chapter3" or "in Chapter3's files", with no client identifiable? [yes] STORY-1
56. Is there any quote from Tim Nash or anyone else that the person has not approved word for word? [no] STORY-2
57. Is every invented situation labelled "Example" where it starts, with every number from the fact ledger and the arithmetic shown? [yes] STORY-3
58. Does any example say "our client", "we helped", or say the people are or are not clients? [no] STORY-3
59. Does every story end with what happened, in plain words, and show how Chapter3 helped? [yes] STORY-5, STORY-6

## 14. Defining terms (5)

60. Does the first section say what the subject is and who it applies to before saying anything else about it? [yes] STRUCT-2
61. Is every term defined in its own sentence before it is used? [yes] STRUCT-2
62. Does any heading, sub-header or short answer use a term the page has not yet defined? [no] STRUCT-2
