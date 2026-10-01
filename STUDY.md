# Study: the 122 Chapter3 articles, scored

Date: 2026-10-01.

Source: the live site, which matches branch `claude/github-account-check-wutg8b` of `chapter3realty/Chapter3-Website`.

Method:

- Every indexable page was graded with `tools/score.js` against `STANDARD.md`.
- The site's own `node build.js audit` was run alongside it.
- Two pages were read in full.
- `PLAYBOOK.md`, `MISTAKES.md` and `HANDOFF.md` were read in full.
- Five live search results pages were checked.

Raw output: `reports/baseline-2026-10-01.txt` and `reports/baseline.json`.

## The short version

The site is very good at **not** doing things wrong. The `build.js` gate enforces hundreds of rules on voice, compliance and structure, and it passes with zero blocking defects. That work is done and it shows.

The site is weaker at the things a page must **have** to win:

- a picture
- its own share image
- a table
- a yes or no in the first words
- a sentence only Chapter3 could write

The standard measures those things and today's pages average 77 out of 100. The best page scores 92.

One page, `/invest/llc/`, was restructured as a pilot. It used no new facts, only the sentences already on the page in a better order and shape. It went from **75 to 99**, and it still passes the site gate. That is the size of the gap, and most of it is mechanical.

## Scores today

| Group | Mean | What drags it down |
|---|---|---|
| SEO | 87 | One share image for every page. The Article author is the company, not the person. |
| AEO | 72 | Short answers that do not answer. Weak section openers. Few tables. Non-question headings. |
| Human | 75 | No pictures. Paragraphs over 80 words. Long stretches of text with nothing to look at. |
| Trust | 64 | No first-hand experience on most pages. |

How the 122 pages are spread across score bands:

| Score | Pages |
|---|---|
| 90+ | 8 |
| 85-89 | 9 |
| 75-84 | 61 |
| 65-74 | 43 |
| Under 65 | 1 |

Mean score by section:

| Section | Pages | Mean |
|---|---|---|
| /invest/ | 43 | 81 |
| /submarkets/ | 10 | 80 |
| /hoa/ | 16 | 77 |
| /buyers/ | 40 | 74 |
| /sell/ | 9 | 72 |

The newest generated invest pages score highest:

- `/invest/rental-returns/` 92
- `/invest/rent-prices/` 92
- `/invest/section-8-rentals/` 91

They score highest because the generator (`tools/mkpage.js`) bakes in the short answer, the question headings and the CTAs. **The generator is the right lever: improve it once and every future page improves.**

## Findings, in order of what to do first

### 1. Three defects are live right now (fix today)

**`%s` on two pages.**

- Pages: `/hoa/special-assessments/` and `/hoa/reserves/`.
- The "Our AI document analysis" panel shows the literal text `%s` twice, where a headline and a paragraph should be.
- No template in either repo holds the intended words, so someone has to write them, or the panel's two empty lines have to be deleted.
- The site gate does not catch this. `score.js` blocks on it.

**FAQ schema does not match the visible page, on two pages.**

- `/hoa/special-assessments/`: the schema answer has a parenthetical gloss of what an estoppel is that the visible answer does not.
- `/buyers/retirees/`: the visible answer has an extra link sentence that the schema lacks.
- The site's A25 rule says these must match word for word. The gate misses both.
- Since May 2026 Google shows no FAQ rich results, so the risk is small, but it is a stated rule that is not holding.

**Specs that no longer rebuild their pages.**

- 6 of 23 specs no longer generate at all. The generator's "nothing sets anything" rule (owner, 2026-09-06) refuses wording the live pages still carry:
  - `cash-to-close`
  - `mid-term-rentals`
  - `property-management`
  - `rental-program-vs-airbnb`
  - `run-the-numbers`
  - `where-to-buy`
- 2 more specs drifted from the live page. The live `/invest/llc/` carries a hand-added link the spec lacks, so regenerating from the spec silently deletes it.
- `specs/llc.js` does not pin `datePublished`, so a rebuild restamps the page with today's date.
- **8 of 23 generated pages cannot be rebuilt from their specs.** That breaks the rule "edit the spec, never the page" and makes every future revision of those pages slower.

### 2. Every page shares one share image, and the Article author is the company

- **122 of 122 articles use `/og-image.jpg`.** Google's image guidance says to set a page-specific preferred image and to "avoid using a generic image (for example, your site logo)". Every link shared on Facebook, LinkedIn, iMessage and Slack shows the same card.
  - Fixed by `tools/ogcard.js`, which renders a branded 1200x630 card from each page's own eyebrow and H1, in the site's own fonts.
  - Fixed by `website-patches/mkpage.patch`, which points the generated page at it.
- **63 articles name the company as the Article `author`**, while the byline names a person. Google's guidance is to name the person and link the profile.
  - The patch makes the generator write the byline person (`about/#devin-day` or `about/#timmy-nash`) as `author` and the other as `reviewedBy`.

### 3. The pages have no pictures

- **109 of 122 articles have no image and no labelled chart** in the body.
- **64 have no table.**
- **95 go more than 350 words between visual elements.**

Why this matters:

- The owner has said he prefers tables and charts to paragraphs (HANDOFF H:1671, H:1716).
- Nielsen Norman Group measured 47 percent better usability from scannable text.
- Microsoft says its AI search scores page sections and wants tables.
- Competitors on the weakest results pages use no tables at all.

The patch adds an `h.figure()` helper so a spec can carry an accessible SVG or image with a caption. The pilot shows the pattern: a table built from facts already on the page, and a decision diagram that stays legible at phone width.

### 4. Most pages have no first-hand experience

- **71 articles have no sentence at all where Chapter3 or a named agent saw or did something.**
- 98 have fewer than two.

This is the one thing a national site or an AI summary cannot copy, and it is what Google's guidance now asks for by name: "A first-hand review provides a unique perspective based on personal experience." The site's own PLAYBOOK A13 and A20 already say this.

The fix is a process fix: ask the owner and Tim the experience questions **before** drafting, using `templates/owner-questions.md`, not after the third review round.

### 5. Many short answers do not answer

- **6 pages ask a yes or no question in the H1 and do not say yes or no in the first words.** Example: `/buyers/condo-in-litigation/` asks "Can you buy a condo that is in litigation?" and opens with a story.
  - The site's one confirmed AI citation shows why this matters: a search engine lifted the first sentence of `/invest/str-vs-ltr/` verbatim. An AI quotes the first sentence; make it the answer.
- **63 short answers miss the shape.** They run over 120 words, or the first sentence runs over 30.
- **67 pages have sections that open weakly.** The first sentence is over 30 words or opens with "This" or "It", so it cannot be quoted alone.
- **17 pages have link anchors standing alone as sentence fragments**, such as "How the tax bill is calculated." They read as broken to a person and as noise to an engine.

### 6. Headings and paragraphs

- **92 pages have fewer than 60 percent question headings.** The owner asked for questions "wherever possible" (2026-09-05).
- **92 pages have at least one paragraph over 80 words.** The `/invest/llc/` page had six, the longest 154 words.

### 7. Duplicate risk across the relocation pages

- The ten "moving from [state]" pages share about 19 percent of their text with each other (6-word shingles).
- That is under the 25 percent line the site already uses, so it is not a problem today.
- Google's AI guide warns against "excessive content variations". Keep each new state page anchored on that state's own numbers.

### 8. The GitHub repo and the live site disagree

- `main` on `chapter3realty/Chapter3-Website` is from July. It is missing 45 live pages, the generator and the specs.
- The live site matches branch `claude/github-account-check-wutg8b`.
- A new session that clones `main` will work on an old site. **Merge that branch into `main`**, or make it the default branch.

### 9. Brand name: decision needed

- The brand handoff in Google Drive (2026-09-28) says the name is "Chapter III Realty", in Roman numerals, never "Chapter3" in marketing.
- The site, `BRAND.md` and every page say "Chapter3".
- Titles, schema, share cards and bylines all carry the name. Decide before the next batch so it is changed once.

### 10. Where to win next (search results check)

Chapter3 was not in the top results for the five head terms checked. The weakest competitor pages, and so the best openings, are:

- **"condo special assessment south carolina."** National explainers and a 2019 North Carolina law-firm post. No Grand Strand page cites the statute.
- **Investment and second-home property-tax queries.** Local agents rank with no tables, no sources and narrative openings.

Full notes: `research/seo-aeo-evidence-2026-10.md`.

## What the evidence changed

Two rules in common SEO advice were dropped because the evidence does not support them:

- **Word-count targets.** Google: "There's no ideal page length." Ahrefs measured no correlation (r = 0.04) between length and AI Overview citation across 174,000 pages. The standard asks for coverage of the reader's sub-questions instead.
- **FAQ schema as a ranking tool.** Google stopped showing FAQ rich results on 2026-05-07. Keep the visible FAQ for readers and for Bing. Expect nothing from the schema in Google.

`llms.txt` stays. It is harmless, but no engine has been shown to use it.

## The pilot: `/invest/llc/`, 75 to 99

Files: `pilots/invest-llc/`.

The rewrite is a restructure only. Every fact on the new page was already on the old one.

| Change | Rule |
|---|---|
| Short answer opens "Yes, for most Myrtle Beach rental owners." and is three short paragraphs | A2, A3 |
| Hero sub no longer says "every client uses an LLC" when the body says "an LLC, a trust or a corporation" | H6 |
| New table comparing a single-member and a multi-member LLC, built from facts in the sections | A6 |
| New decision diagram (which loan), checked at 1280 and 375 pixels wide | H4 |
| Six fragment links became sentences ("Read how a DSCR loan qualifies on the rent.") | A8 |
| Six paragraphs over 80 words split, two into bulleted lists | H2, H3 |
| `datePublished` pinned in the spec | process |
| Per-page share card and a Person author, via the generator patch | S5, S6 |

Results:

- `build.js audit`: zero blocking defects, and one fewer warning than the live page.
- `score.js`: 75 before, 99 after. The one partial is 9 FAQ entries where the standard asks for 4 to 8.

**One item needs the owner.** The live page says "Single-member or multi-member changes nothing about the deed rules or the loan". The reassessment section on the same page says a deed to a multi-member LLC is exempt only when the contribution is tax-free under the federal partnership rule. The pilot drops the first sentence. Confirm which is right before shipping.
