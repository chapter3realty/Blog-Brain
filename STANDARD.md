# The Chapter3 page standard

This is what a finished page **has**, and the claims it must never make. The
website's `PLAYBOOK.md` and `build.js audit` cover voice, chrome and dates. This
file does not repeat them. Both apply.

**A page ships when all of these are true:**

1. `node build.js preflight` exits 0, in the website repo.
2. `node tools/score.js` scores **90 or more with no blockers**, in this repo.
3. `node tools/claims-scan.js`, `node tools/facts-check.js` and `node tools/site-audit.js` report no errors for the page. Section C, A12, T7 and H12 below explain them. They were added after the 2026-10-01 audit (`audit/AUDIT.md`), which found claims, wrong facts and dropped leads that every earlier gate had passed.
4. Every **human check** below is ticked in `templates/review-checklist.md`.
5. The owner has read it once.

Each rule has an ID. `score.js` prints the ID next to every line. The evidence for each rule is in `research/seo-aeo-evidence-2026-10.md`, labelled by strength:

- **OFFICIAL**: platform documentation.
- **EXPERIMENT**: a controlled study.
- **STUDY**: a correlational study.
- **OWNER**: a standing owner instruction.

Human checks are marked **(human)**. A machine cannot check them, so a person or a reviewer agent has to.

## The page, top to bottom

```
Breadcrumb
Eyebrow
H1: the reader's question, with a place in it              S3
    second line: the answer in five words, when it fits    A3
Byline: By <author>, <title> · Reviewed by <person> · Updated <date>  T1
Hero sub: 8-30 words, keyword and a number or place        (website A14)
Hero CTA
THE SHORT ANSWER: 40-120 words, verdict first              A2, A3
Section: the first question defines the subject            A4, A5
Section: the comparison table                              A6
  CTA 1, about a third of the way down                     H5
Section ... each one opens with a quotable sentence        A5
Section: the figure (chart, diagram, or photo)             H4
Section ... a story from Chapter3's files                  T2
  CTA 2, before the last section                           H5
FAQ: 4-8 questions the sections did not already answer     A7
Sources line: 3-5 links, under 90 words                    T3
Bottom CTA
```

## S. Search

| ID | Rule | Why |
|---|---|---|
| S1 | Title 30-62 characters. It names the topic and a place, and ends "\| Chapter3". It matches the H1's meaning. | Google rewrites titles that disagree with the H1 (OFFICIAL). The 62 cap is the site's rule. |
| S2 | Meta description 110-165 characters. It contains the topic word and says what the reader gets. Unique sitewide. | OFFICIAL: unique, accurate descriptions. |
| S3 | Exactly one H1, naming a place on the Grand Strand. | OWNER, 2026-09-07: "All of our headers need to be local specific." |
| S4 | Absolute https canonical, lowercase, trailing slash, nested under a hub. | The site's PLAYBOOK A2. |
| S5 | The page has its own 1200x630 share image (`og/<slug>.jpg` from `tools/ogcard.js`). It is set in og:image, twitter:image, Article.image and primaryImageOfPage. | OFFICIAL: "avoid using a generic image". All 122 pages share one today. |
| S6 | The Article `author` is the byline person (a Person with `@id` and `url`), or the company. It carries both dates and an image. | OFFICIAL: bylines, and a named author. OWNER 2026-10-05: Devin Day may be the visible author. |
| S7 | 5 or more links in the body to other Chapter3 pages, in sentences, with anchors that say what the target page answers. | OFFICIAL: descriptive anchor text. Fan-out (STUDY): the engine follows sub-questions. |
| S8 | 2 or more other pages link here from their body copy. The nav and footer do not count. | The site's orphan rule, raised to 2. |
| S9 | Title and description unique sitewide. | OFFICIAL. |
| S10 | Shares under 25 percent of its text with any other page, measured on all text, tables and headings included (the website's `build.js` measure). A page in a templated family (the "moving from [state]" pages, the submarket pages) is built from its own local facts first; shared material lives on one page the others link to. | OFFICIAL: the AI guide warns against "excessive content variations". On 2026-10-01, 44 of the 45 pairs among the ten "moving from" pages measured 25 to 38 percent, and the 8 submarket pages shared 30 identical sentences. |
| S11 | The topic word appears in the first 100 words. | Convention, and the answer has to name its subject. |
| S12 | FAQ schema is the visible FAQ, word for word. **Blocker.** | The site's A25. Two live pages fail it today. |

## A. Answer engines

| ID | Rule | Why |
|---|---|---|
| A1 | **(human)** The page answers one question, named in the brief, plus the sub-questions a reader asks next. The brief lists them before drafting. | Fan-out (STUDY: 62 percent of AI Overview citations rank outside the top 10 for the head term). Google: no ideal length, so cover the questions, not a word count. |
| A2 | The short answer is 40-120 words, in 2 to 4 short paragraphs. The first sentence is 30 words or fewer. Answer only: no framing, no caveat that belongs in a section. | OWNER A22i. STUDY: 44 percent of ChatGPT citations come from the first 30 percent of the page. |
| A3 | A yes or no question gets "Yes", "No", "Usually", "Most" or "On average" in the first words. The H1's second line may carry it ("Yes, at 90 days."). | OWNER A11d: "say on average yes or no". The one AI citation found for this site quoted a first sentence verbatim. |
| A4 | 60 percent or more of section headings are questions. The first one defines the subject. | OWNER, 2026-09-05. OFFICIAL (Microsoft): question-shaped headings. |
| A5 | Each section opens with a sentence of 30 words or fewer that answers its heading and stands alone. No "This", "It" or "They" opener. Keep links out of that sentence. | STUDY: 72 percent of cited posts had a 20-25 word answer under a question heading. OFFICIAL (Microsoft): sections are scored one by one. |
| A6 | At least one real HTML table. Any comparison, cost, schedule or "which one" gets a table. | OWNER: he prefers tables (HANDOFF H:1671). OFFICIAL (Microsoft). The competing pages have none. |
| A7 | 4-8 FAQ entries. Each answer is 15-90 words, starts with the answer, and makes sense quoted alone. Questions the sections already answer are repeated only if a searcher types them that way. | Readers and Bing (OFFICIAL). Google shows no FAQ rich result since 2026-05-07, so the FAQ exists for people, not for the schema. |
| A8 | No link anchor standing alone as a sentence fragment ("How the tax bill is calculated."). Write the sentence: "See how the tax bill is calculated." | A fragment reads as broken and quotes as noise. 17 pages today. |
| A9 | 2 or more primary sources linked inside the body (.gov, statute, court, county, the agency itself), each supporting a specific claim. | EXPERIMENT (GEO): cite sources, +28 percent. The site's A19. |
| A10 | Names 3 or more distinct Grand Strand places in the prose. | STUDY: cited text is dense with named entities. It is also the local moat. |
| A11 | **(human)** Each number has a unit and a date or period ("$110 to file", "5.21 percent for a 2026 sale"). | EXPERIMENT (GEO): statistics, +33 percent. Undated numbers go stale silently. |
| A12 | A fact that appears on more than one page, or has been wrong once, lives in `facts/registry.json`, with one value, a primary source, an owner page and a `staleBy` date. Every other page links the owner page and uses the same wording. `tools/facts-check.js` errors on any known-wrong version on any page. | The 2026-10-01 audit found 12 facts stated differently across pages: lodging tax 10 vs 13 percent; rental tax "close to double" on 20+ pages vs 3.3 to 4.3 times on the page that owns it. Two traps HANDOFF had already recorded were live again. |

## H. Human readability

| ID | Rule | Why |
|---|---|---|
| H1 | Mean sentence 20 words or fewer, none over 40. Pages from 2026-09-05 on: mean 16, none over 28 (the site enforces this). | OFFICIAL plain-language guidance. OWNER A22. |
| H2 | No paragraph over 80 words. Split at the idea, or make a list. | EXPERIMENT (NN/g): scannable text, +47 percent usability. |
| H3 | A visual break (table, list of 3 or more, figure, callout) at least every 350 words. | 79 percent of readers scan (EXPERIMENT, NN/g). |
| H4 | At least one figure: a chart built from the data file, a diagram, a map or a real photo. It has `alt` or `aria-label` text of 12 or more characters and a visible caption, and it is legible at 375 pixels wide. Use `h.figure()`. | OFFICIAL: images near related text, with descriptive alt. 109 pages have none. |
| H5 | Two CTAs inside the article: one about a third of the way down, one before the last section. The phone number is a button. | OWNER. The site's A11c. |
| H6 | **(human)** The page agrees with itself. The hero sub, short answer, sections, table, FAQ and schema state the same facts the same way. | The pilot found the live LLC page contradicting itself twice. |
| H7 | **(human)** The buyer test, on every sentence: would a buyer standing in the property do anything differently because of it? | OWNER, the site's A11a. |
| H8 | **(human)** Every term a buyer might not know is defined in the same sentence, the first time it appears. | The site's A12. OWNER: "The page is assuming I know." |
| H9 | No template residue in the rendered page (`%s`, `{{`, `undefined`, `NaN`). **Blocker.** | Two live pages show `%s` today. |
| H10 | **Accessible.** No serious or critical axe violation at 1280 and 375. Every form control has a programmatic label. Body text is 4.5:1 or better; brass is never used for body-size text on a light ground (use a darker brass ink). A modal sets `aria-hidden="false"` and `aria-modal`, moves focus in, traps it, and restores it on close. | The audit measured 1,830 contrast failures on 130 of 132 pages, mostly brass on ivory at 2.75 to 3.01:1. The property-search modal on 131 pages is invisible to screen readers. The site's own /accessibility/ page claims otherwise. |
| H11 | **Fast on a phone.** Lighthouse mobile 85 or more on the page's template, CLS under 0.1, and no new third-party script without a measured cost. Charts and calculators load their code only on the pages that use them. | No article page scored 90 on mobile (65 to 87). Desktop scored 99 to 100. Font-swap layout shift measured 0.33 to 0.38 on two pages. |
| H12 | **Every form delivers.** Each `c3SendForm()` call passes `consent`. Each phone field has the locked consent checkbox in its form block. Email and phone are validated before sending. The success message shows only after the send is accepted. Every new or changed form is tested once end to end, with the request captured. `tools/site-audit.js` checks the first two. **Blocker.** | On 2026-10-01 four forms showed "thank you" and dropped every lead, including the property search on every page: `c3SendForm` returns early when `consent` is missing. About 35 forms accepted "not-an-email" and a phone of "12". |

## T. Trust (experience, expertise, sources)

| ID | Rule | Why |
|---|---|---|
| T1 | A visible byline: "By <author>, <title> · Reviewed by <person>, <title> · Updated <date>". The date comes from `build.js dates`, never typed. | OFFICIAL: bylines where expected; dates that match the schema. |
| T2 | 2 or more sentences that show what Chapter3 knows, in the company's voice. Either a real experience ("In Chapter3's files...", "An agent at Chapter3...", "Our broker walks the crawlspace before a client bids."), taken from the story bank or the owner's answers and never invented; or a **worked example**: a labelled scenario ("Example: a $300,000 three-bedroom in Carolina Forest...") whose every number comes from a verified fact row and whose arithmetic is shown. An example never claims to be a client or an event. | OFFICIAL (AI guide): "a first-hand review provides a unique perspective". OWNER A11e, A20. 71 pages have none. |
| T3 | A sources line: 3-5 short names, links only, under 90 words, with the date the sources were read. | The site's A11b. |
| T4 | dateModified is within 365 days. Volatile pages (taxes, STR rules, insurance, market numbers) are reviewed every 90 days and re-dated only when the prose changed. | STUDY: AI-cited pages are 26 percent fresher. OFFICIAL: no fake freshness. |
| T5 | **(human)** No quote attributed to Tim Nash ships until he has approved the exact words. | OWNER, 2026-09-03. A fabricated quote from a licensed broker is a compliance problem. |
| T6 | **(human)** Every number on the page is in the page's fact ledger with a URL that was opened, a quote, and an as-of date. A second agent re-opened each source. | The site's A8: 20 of 163 researched facts were wrong. |
| T7 | No registry fact on the page is past its `staleBy` date (`node tools/facts-check.js --stale`). A page whose rule, rate, millage, program or market figure changed is updated, and re-dated by `build.js dates` only because its prose changed. | Within four months, 2026 millage, the 2026 SC deduction change, a closed program round, a closed credit program, a hospital opening and the monthly market report had all gone stale on live pages. |

## C. Claims (what Chapter3 may say about itself)

Checked on **every surface** a reader, search engine or AI answer engine reads: body, header, footer, title, meta and social descriptions, JSON-LD, calculator default values, the search modal and `llms.txt`. `tools/claims-scan.js` with `rules/claims.json` runs the check. It errors on the rules marked as blockers.

This is not legal advice. Counsel sets the final wording. The scanner holds whatever counsel approves.

| ID | Rule | Why |
|---|---|---|
| C1 | **Chapter3 is a brokerage. It is affiliated with BrickWood Mortgage, but they are not the same company, and Chapter3 does no financing work at all.** Keep the affiliation and its RESPA disclosure. Never: "same company", "own mortgage team", "one team for real estate and financing", "under one roof", "in-house lender", a bare "our lender", "we underwrote", "loan menu", "Equal Housing Lender", or a service list that includes financing ("DSCR financing, STR analysis..."). Approved: "our affiliated lender, BrickWood Mortgage (NMLS #189497)", "Chapter3 is affiliated with BrickWood Mortgage, a separate company", "your lender". **Blocker.** | OWNER 2026-07-30, 2026-09-07 and 2026-10-04 ("there is an affiliation... but we are not the same company and Chapter3 does no financing work at all"). The audit found "same company" in 5 sentences and the footer offering "DSCR financing" on 131 pages, which AI answers now repeat. `build.js` banned "under one roof" but not the same claim in other words. |
| C2 | **No licence claims for Chapter3 staff.** No "MLO", "loan originator" or NMLS number for anyone at Chapter3, including in meta descriptions. **Blocker.** | OWNER 2026-09-07. Still live in one meta description and on /about/ (audit C-C3, C-C4). |
| C3 | **No stated interest rate, payment or (on owner-occupied pages) down payment, including calculator default values and placeholders.** A calculator box for a rate or down payment starts empty, with a visible label. | Non-negotiable 3, Reg Z trigger terms. Calculators shipped with 7 percent and 6.5 percent pre-filled; `build.js` stripped inputs before scanning. |
| C4 | **No unsupported superlative or firm history.** No "best brokerage", "no other local brokerage", "#1". Experience belongs to the person who has it: Tim Nash's 30 years are Tim's; BrickWood's loan files are BrickWood's. A five-month-old firm does not "close in every submarket". | SC 40-57-135; FTC guidance; PLAYBOOK A11e. |
| C5 | **Fair housing.** Describe property and geography only. No school ratings ("best schools"), no "family-friendly", no "suits retirees", no safety claims. Link the district's own assignment page instead. | 42 USC 3604(c), HUD advertising guidance. The audit found these in the relocating hub, two hubs and a submarket's meta description. |
| C6 | **No promises the business cannot keep or may not make.** No off-market listings "before they hit the public sites"; no "your agent costs you nothing"; one response-time promise, the one the team keeps. | MLS Clear Cooperation; buyer-agency changes; the audit found response time promised five different ways. |
| C7 | **The company speaks, not an individual.** Devin Day appears only as the page's author: the byline, the author note and the schema author. Never in the copy, a story, a CTA, or as a contact. Paul is never named. Pricing, CMAs and representation are the broker's. **Blocker.** | OWNER 2026-10-04 and 2026-10-05 ("i can be the author and it can be visible... do not name paul on the site yet"). SC 40-57-30. |
| C8 | **Testimonials and reviews are real, sourced and kept on file**, or they are not shown. No review markup without real reviews. | FTC 16 CFR 465 (fake reviews rule). Five anonymous testimonials sit on the homepage. |

## What this standard deliberately leaves out

- **Word counts.** Google says there is no ideal length, and the data shows no correlation (r = 0.04). Write until the sub-questions are answered.
- **FAQ schema as a Google feature.** It is gone. Keep it in sync (S12) because a mismatch is a defect, not because it ranks.
- **Speakable, HowTo and llms.txt tuning.** No evidence they move anything.
- **Keyword density.** Keyword stuffing measured -9 percent in the GEO experiment.
