# Blog-Brain

The system for producing chapter3realty.com pages quickly, built to rank in Google, get quoted by AI answer engines, and read cleanly for a buyer.

## What is here

| File | What it answers |
|---|---|
| [`STUDY.md`](STUDY.md) | How good are the 122 live articles, and what is missing? |
| [`STANDARD.md`](STANDARD.md) | What does a finished page have? 38 rules with IDs, each with its evidence. |
| [`WORKFLOW.md`](WORKFLOW.md) | How does a page go from topic to live in one owner review round instead of five? |
| [`templates/`](templates/) | The brief, the owner questions, the fact ledger, the review checklist, and a spec skeleton. |
| [`prompts/`](prompts/) | The fixed prompts for the researcher, verifier, writer and reviewer agents. |
| [`tools/score.js`](tools/score.js) | Grades a page, or the whole site, against the standard. |
| [`tools/ogcard.js`](tools/ogcard.js) | Renders each page's own 1200x630 share image. |
| [`tools/site-upgrade.js`](tools/site-upgrade.js) | Points every page at its own share image and makes the byline person the author. It touches `<head>` only. |
| [`website-patches/`](website-patches/) | A tested patch for the website's page generator. |
| [`pilots/invest-llc/`](pilots/invest-llc/) | One live page restructured with no new facts: 75 to 99. |
| [`research/`](research/) | The SEO and AEO evidence, as of 2026-10-01, and a digest of the website's process docs. |
| [`reports/`](reports/) | The baseline score of every live article, and the pilot's before and after. |

## The findings in five lines

1. The site already blocks bad copy well. The `build.js` gate passes with zero blocking defects.
2. What pages lack is what wins: a picture, their own share image, a table, a yes or no up front, and a sentence only Chapter3 could write. The mean score is 77.
3. Three defects are live now: `%s` on two HOA pages, two FAQ schema mismatches, and 8 of 23 generator specs that cannot rebuild their pages.
4. Two tools here fix the share image and the author on every page in about 30 minutes, without touching any prose. That raises the mean from 77 to 81.
5. The rest is structure. The pilot shows a page going from 75 to 99 with no new research.

## Quick start

```
npm install
npm test
node tools/score.js --site <website-repo>/chapter3realty
```
