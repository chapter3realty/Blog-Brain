# Pilot: `/invest/llc/`, 75 to 99

A restructure-only rewrite of the live page. **No new facts.** Every figure and claim on the new page is already on the live page. The point was to measure how much of the gap in `STUDY.md` is structure, and the answer is most of it.

## Files

| File | What it is |
|---|---|
| `llc.js` | The pilot spec. Drop-in for the website repo's `specs/llc.js`, after `website-patches/mkpage.patch` is applied. |
| `index.before.html` | The live page, from the website repo. |
| `index.after.html` | The page `llc.js` generates. |
| `og-card.jpg` | Its share card, from `tools/ogcard.js`. |
| `table-desktop.png` | The new table at 1280 pixels wide. |
| `figure-phone.png` | The new figure at 375 pixels wide. |
| `../../reports/pilot-llc-before.txt` and `pilot-llc-after.txt` | Line-by-line scores. |

## Results

| | Before | After |
|---|---|---|
| `score.js` | 75 (SEO 90, AEO 57, Human 65, Trust 100) | 99 (100, 98, 100, 100) |
| `build.js audit` | 0 errors, 2 warnings | 0 errors, 2 warnings (one fewer long sentence) |
| Page overflow at 375 and 1280 pixels | none | none |

## What changed

| Change | STANDARD rule |
|---|---|
| The short answer opens with the verdict, "Yes, for most Myrtle Beach rental owners." It is three paragraphs of 34, 24 and 34 words, down from one block of 154. | A2, A3 |
| The hero sub said every client uses an LLC. The body says "an LLC, a trust or a corporation". The sub now says "Most Chapter3 investor clients form one LLC per rental", which matches "about nine in ten". | H6 |
| New section, second on the page, "What changes with one member or with several?". Its table has 7 rows, every cell taken from a later section. | A6, A4 |
| New figure: which loan fits the plan, as an accessible SVG with an `aria-label` and a caption. It is drawn narrow so the text stays legible on a phone. | H4 |
| Six fragment links became sentences. "How the reassessment changes the bill." is now "See how the reassessment changes the bill." | A8 |
| Six paragraphs over 80 words were split. Two became bulleted lists: the due-on-sale exceptions, and how to run the LLC. | H2, H3 |
| "carries a promise" became "includes a promise". The owner's "carry" ban covers it, but the gate's regex missed it. | website A22c |
| `datePublished: "2026-09-07"` is pinned, so a rebuild cannot restamp the page. | process |
| Share card and Person author, from the generator patch. | S5, S6 |

## Needs the owner before it ships

**1. A contradiction on the live page.**

- The cost section says: "Single-member or multi-member changes nothing about the deed rules or the loan. It changes the tax return and the 4 percent rate."
- The reassessment section says a deed to a multi-member LLC is exempt only when the contribution is tax-free under the federal partnership rule.

Those cannot both be right. The pilot drops the first sentence, and the table follows the reassessment section. Confirm, or correct the table.

**2. A hand-added link the spec lost.** The live page links "A" to `/invest/financing-multiple-rentals/` by hand. That link is not in `specs/llc.js`, so it is not in the pilot either. Add it back to the spec in the sentence where it belongs.

**3. A20 is still open, as it was before.** The audit's existing warning still stands: no sentence where Tim Nash does or says something specific. That needs his words (T2, T5). It is not something to write for him.

## To ship it

In the website repo:

```
git apply <blog-brain>/website-patches/mkpage.patch
node <blog-brain>/tools/ogcard.js chapter3realty /invest/llc/
cp <blog-brain>/pilots/invest-llc/llc.js specs/llc.js
node tools/mkpage.js specs/llc.js
node build.js dates
node build.js preflight
```
