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
H1: the reader's question, with a place in it              S3, P4
    second line: the answer in five words, when it fits    A3
Byline: By <author>, <title> · Reviewed by <person> · Updated <date>  T1
Hero sub: 8-30 words, keyword and a number or place        (website A14)
THE SHORT ANSWER: 40-120 words, verdict first              A2, A3
    in the first phone screen, above any large photo       H16
Key facts row (place pages): 5-8 facts, each icon with a word  H15
CTA line: one sentence and one plain button                H5
On this page: every section, labels identical to the H2s   H14
Section: the first question defines the subject            A4, A5
Section: the comparison table                              A6
  CTA 1, about a third of the way down                     H5
Section ... each one opens with a quotable sentence        A5
Section: the figure (chart, diagram, or photo)             H4
Section ... a story from Chapter3's files                  T2
  CTA 2, before the last section                           H5
FAQ: 4-8 questions, open text, never a closed accordion   A7, A13
Sources line: 3-5 links, under 90 words                    T3
Bottom CTA
Photo credits, author note with photo, disclosure          T1, H10
```

The hero CTA moved below the short answer on 2026-10-11, so the answer reaches the first phone screen. The design evidence for the diagram, the type sizes and the checklist is in `reports/Page design for readers and search.md`.


## Buyer first (owner, 2026-10-06)

These outrank the structure rules below when they conflict. The detail, with his words, is class BUYER in `voice/RULES.md`.

| ID | Rule |
|---|---|
| B1 | Lead with what the target buyer wants most, good news first, then the drawbacks. Never lead with records, history or method. |
| B2 | No industry terms. Use the words a buyer with no research uses. Replace a term; do not define it. |
| B3 | Speak as the expert. State the fact with its date. No "records show", "according to", "per <company>" in running text; a few source links through the page and the sources line. |
| B4 | Say what a fact means for the buyer, not why or how it works. Link the explainer page. |
| B5 | Answer the next question each section raises (a flood zone raises flood insurance cost). |
| B6 | Warm and plain, like a good agent: "408 homes are already built", in literal words. |
| B7 | Community pages say what life there is like: events and clubs, what is nearby, pets, guests. |
| B8 | Simple beats complete. Cut what the buyer would skip. |

## P. Plain (owner, 2026-10-07)

Simple enough for anyone. These come before every other rule, on every page. The detail, with his words, is class PLAIN in `voice/RULES.md`. `score.js` checks the rules below that a pattern can catch. It reads the body copy only: no tables, byline, credit lines or sources line. P4 and P8 are blockers. A reading pass still checks PLAIN-1, PLAIN-3 and PLAIN-8, which no pattern can catch.

| ID | Rule | Why |
|---|---|---|
| P1 | Round dollar amounts. At most one exact amount of $10,000 or more in prose ("$534,900"). Say "about $535,000". A table may hold exact amounts. | OWNER (PLAIN-2): "numbers are exact". 10 live pages have two or more on 2026-10-07. |
| P2 | Few numbers. 3.5 or fewer numbers per 100 words of prose. A phone number, the 55 in "55+" and the digits in a name ("Chapter3", "HO-6", "I-95") do not count. | OWNER (PLAIN-2): "there's too many numbers". Set so the densest fifth of the live site fails: on 2026-10-07 the 122 articles had a median of 1.6, 80th percentile 3.7, highest 8.2. |
| P3 | Say the date once. At most 2 mentions of a month with a year ("October 2026") or a year after "in", "for", "since" and the like, counting this year and last year. The byline carries the date. An older year (history) or a later year (a deadline) does not count. | OWNER (PLAIN-6): "you also are mentioning the date so much". 35 live pages fail. |
| P4 | No price in the headline. The H1 and its second line carry no $ amount, on every page outside `/invest/`. **Blocker.** | OWNER (PLAIN-7): "leading with prices would scare people away and even in the headline it does it." |
| P5 | Every question heading is answered. The first sentence under a heading that ends in "?" does not start with Ask, Check, Read, Call, Contact, Request or See, and does not say "ask the" or "check with". A "How do I find out" question may be answered with the steps. A call-to-action block (a phone link, button or form under the heading) is not checked. | OWNER (PLAIN-5): "the answer is just go find out by reading stuff." |
| P6 | No industry terms. No term from `rules/plain-words.json` in prose; each has the plain words to use. A page whose title or H1 names the term is about it and is not checked for it. Investor terms (DSCR, cap rate, NOI, warrantable) are allowed under `/invest/`. | OWNER (PLAIN-1, PLAIN-3): "people who arent in insurance dont klnow what flood zone X means". |
| P7 | Show it. A page with 800 or more words of prose has 2 or more pictures: a figure, an image, or a chart with `role="img"`. | OWNER (PLAIN-4): "it needs more images and photos". 102 of the 105 long live articles have fewer than 2. |
| P8 | A 55+ community, submarket or neighborhood page shows a map: a picture whose caption, label or alt text says map, satellite or aerial. Use our own static map from `tools/area-map.js`, with a caption and the "Open in Google Maps" link. A live Google map loads only after the reader clicks; one that loads on arrival fails. Every fact on the map, such as drive times, is also in the text. **Blocker.** | OWNER (PLAIN-4): "people out of state don't know roads or anything about the city at all including where this community is". A live map embed can add 100 KB to 2 MB of script (web.dev, OFFICIAL). Microsoft warns against facts that appear only in images (OFFICIAL). |

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
| S12 | FAQPage schema is optional. When a page has it, it is the visible FAQ, word for word. **Blocker.** | The site's A25. Two live pages fail it today. Google stopped showing FAQ rich results on 2026-05-07, so the schema earns nothing on Google; a schema that differs from the page is still a defect. |

## A. Answer engines

| ID | Rule | Why |
|---|---|---|
| A1 | **(human)** The page answers one question, named in the brief, plus the sub-questions a reader asks next. The brief lists them before drafting. | OFFICIAL: Google says AI Overviews and AI Mode may run several related searches on subtopics ("query fan-out"), and that there is no ideal length, so cover the questions, not a word count. The citation data conflicts: Ahrefs' primary 2025 study found 76 percent of AI Overview citations rank in Google's top 10 (STUDY). An earlier note here said 62 percent rank outside it, and a later 38 percent figure was seen only in press coverage. Ordinary ranking is still the main route in. |
| A2 | The short answer is 40-120 words, in 2 to 4 short paragraphs. The first sentence is 30 words or fewer. Answer only: no framing, no caveat that belongs in a section. | OWNER A22i. STUDY: 44 percent of ChatGPT citations come from the first 30 percent of the page. |
| A3 | A yes or no question gets "Yes", "No", "Usually", "Most" or "On average" in the first words. The H1's second line may carry it ("Yes, at 90 days."). | OWNER A11d: "say on average yes or no". The one AI citation found for this site quoted a first sentence verbatim. |
| A4 | 60 percent or more of section headings are questions. The first one defines the subject. | OWNER, 2026-09-05. OFFICIAL (Microsoft): question-shaped headings. |
| A5 | Each section opens with a sentence of 30 words or fewer that answers its heading and stands alone. No "This", "It" or "They" opener. Keep links out of that sentence. | STUDY: 72 percent of cited posts had a 20-25 word answer under a question heading. OFFICIAL (Microsoft): sections are scored one by one. |
| A6 | At least one real HTML table. Any comparison, cost, schedule or "which one" gets a table. | OWNER: he prefers tables (HANDOFF H:1671). OFFICIAL (Microsoft). The competing pages have none. |
| A7 | 4-8 FAQ entries. Each answer is 15-90 words, starts with the answer, and makes sense quoted alone. Questions the sections already answer are repeated only if a searcher types them that way. The answers are open text on the page (A13). `score.js` reads the visible FAQ; it reads FAQPage schema only when it finds no visible FAQ, so a page without the schema loses nothing. | Readers and Bing (OFFICIAL). Google shows no FAQ rich result since 2026-05-07, so the FAQ exists for people and answer engines, not for the schema. |
| A8 | No link anchor standing alone as a sentence fragment ("How the tax bill is calculated."). Write the sentence: "See how the tax bill is calculated." | A fragment reads as broken and quotes as noise. 17 pages today. |
| A9 | 2 or more primary sources linked inside the body (.gov, statute, court, county, the agency itself), each supporting a specific claim. | EXPERIMENT (GEO): cite sources, +28 percent. The site's A19. |
| A10 | Names 3 or more distinct Grand Strand places in the prose. | STUDY: cited text is dense with named entities. It is also the local moat. |
| A11 | **(human)** Each number has a unit and a date or period ("$110 to file", "5.21 percent for a 2026 sale"). | EXPERIMENT (GEO): statistics, +33 percent. Undated numbers go stale silently. |
| A12 | A fact that appears on more than one page, or has been wrong once, lives in `facts/registry.json`, with one value, a primary source, an owner page and a `staleBy` date. Every other page links the owner page and uses the same wording. `tools/facts-check.js` errors on any known-wrong version on any page. | The 2026-10-01 audit found 12 facts stated differently across pages: lodging tax 10 vs 13 percent; rental tax "close to double" on 20+ pages vs 3.3 to 4.3 times on the page that owns it. Two traps HANDOFF had already recorded were live again. |
| A13 | **Open answers.** FAQ answers and all main content are open text on the page. No closed `<details>` accordion, tab or carousel holds an answer. Nothing moves or changes on a timer. `score.js` fails a closed `<details>` in the body. | OFFICIAL (Microsoft): "AI systems may not render hidden content" in tabs or expandable menus. OFFICIAL (Google): "Read more" section links need text "immediately visible on the page to a human". OBSERVED (NN/g): content in a collapsed panel "may be missed altogether". On 2026-10-11, 8 live articles held their FAQ answers or a mistakes list in closed accordions. |

## H. Human readability

| ID | Rule | Why |
|---|---|---|
| H1 | Mean sentence 20 words or fewer, none over 40. Pages from 2026-09-05 on: mean 16, none over 28 (the site enforces this). | OFFICIAL plain-language guidance. OWNER A22. |
| H2 | No paragraph over 80 words. Split at the idea, or make a list. | EXPERIMENT (NN/g): scannable text, +47 percent usability. |
| H3 | A visual break (table, list of 3 or more, figure, callout) at least every 350 words. | STUDY (NN/g 2008): readers read about 20 percent of the words on a page. An older figure, "79 percent of readers scan", was 15 of 19 users in one 1997 test (Morkes and Nielsen); do not repeat it. |
| H4 | At least one figure: a chart built from the data file, a diagram, a map or a real photo. It has `alt` or `aria-label` text of 12 or more characters and a visible caption, and it is legible at 375 pixels wide. Use `h.figure()`. | OFFICIAL: images near related text, with descriptive alt. 109 pages have none. |
| H5 | Two CTAs inside the article: one about a third of the way down, one before the last section. The phone number is a button. | OWNER. The site's A11c. |
| H6 | **(human)** The page agrees with itself. The hero sub, short answer, sections, table, FAQ and schema state the same facts the same way. | The pilot found the live LLC page contradicting itself twice. |
| H7 | **(human)** The buyer test, on every sentence: would a buyer standing in the property do anything differently because of it? | OWNER, the site's A11a. |
| H8 | **(human)** Every term a buyer might not know is defined in the same sentence, the first time it appears. | The site's A12. OWNER: "The page is assuming I know." |
| H9 | No template residue in the rendered page (`%s`, `{{`, `undefined`, `NaN`). **Blocker.** | Two live pages show `%s` today. |
| H10 | **Accessible.** No serious or critical axe violation at 1280 and 375. Every form control has a programmatic label. Body text is 7:1 or better, dark on a light ground. All other text is 4.5:1 or better: captions, links, photo credits and text over a photo (a credit on a photo sits on a solid backing). Icons, borders and form fields are 3:1 or better. Links are underlined and use `--brass-ink` (#91592b, 5.0:1 on ivory), never `--brass` (3.0:1). Brass is never used for body-size text on a light ground. Buttons and list links are 44 by 44 px; nothing is under 24 by 24 px. A modal sets `aria-hidden="false"` and `aria-modal`, moves focus in, traps it, and restores it on close. | The audit measured 1,830 contrast failures on 130 of 132 pages, mostly brass on ivory at 2.75 to 3.01:1. The property-search modal on 131 pages is invisible to screen readers. The site's own /accessibility/ page claims otherwise. OFFICIAL (WCAG 2.2): 4.5:1 for text, 7:1 at the enhanced level, 3:1 for graphics. The site's body color already measures about 7.3:1. |
| H11 | **Fast on a phone.** Lighthouse mobile 85 or more on the page's template, CLS under 0.1, and no new third-party script without a measured cost. Charts and calculators load their code only on the pages that use them. Field targets, at the 75th percentile of real phone visits (Search Console, Core Web Vitals): LCP 2.5 s or less, INP under 200 ms, CLS under 0.1. The lab gate stays until field data exists. The first image is not lazy-loaded and has `fetchpriority="high"`; every other image is lazy, with a width and height. | No article page scored 90 on mobile (65 to 87). Desktop scored 99 to 100. Font-swap layout shift measured 0.33 to 0.38 on two pages. OFFICIAL (Google): Core Web Vitals are measured on real visits and used in ranking, after relevance. |
| H12 | **Every form delivers.** Each `c3SendForm()` call passes `consent`. Each phone field has the locked consent checkbox in its form block. Email and phone are validated before sending. The success message shows only after the send is accepted. Every new or changed form is tested once end to end, with the request captured. `tools/site-audit.js` checks the first two. **Blocker.** | On 2026-10-01 four forms showed "thank you" and dropped every lead, including the property search on every page: `c3SendForm` returns early when `consent` is missing. About 35 forms accepted "not-an-email" and a phone of "12". |
| H13 | **Type and line length.** Body text 18 px (1.125rem) or more on phones, 19 to 20 px on desktop, never below 16 px and not above about 24 px. Sizes in rem, so the phone's text setting works. Captions 16 px or more; credits and fine print are the smallest text (14 px, a house judgment). Lines of 50 to 75 characters: `max-width: 65ch` on the article column. Line height 1.5 to 1.75, left aligned, never justified. The page works at 200 percent text and at 320 px wide with no sideways scroll. A website CSS patch, in `website-patches/`. | OBSERVED (NN/g): 16 px is the floor for older users; small, faint text is a named barrier. STUDY (Hou et al. 2022, 12 studies): older adults prefer 17 to 20 px on phones for long reading. STUDY (Baymard): 50 to 75 characters. OFFICIAL (WCAG 1.4.8, 1.4.10). Live article text is about 15.5 px, at about 90 characters a line. |
| H14 | **"On this page".** A page with 4 or more H2 sections has an "On this page" list after the short answer and the CTA line. It lists every section. Each link label is the H2 text, word for word. The links are underlined. The list is not sticky. Long pages add "Back to top" links. `score.js` checks the labels against the headings and fails a section left out. | OBSERVED (NN/g 2023): a table of contents near the top helps readers judge a long page; users missed a sticky one on phones and ignored uncolored links. Bankrate's list says "Affordability considerations" over the heading "Affordability issues to consider". OFFICIAL (Google): section links use the same anchors. On 2026-10-11, 115 of the 122 live articles had 4 or more sections and none had a list. |
| H15 | **Icons have words.** Every icon has a visible word beside it. An icon is never the only carrier of a fact; the fact is in HTML text. Icons are 24 px or larger, at 3:1 contrast. `score.js` fails a decorative icon in a card or list item with no visible text. | No study tests icons with and without labels in articles; this is the safe rule (expert judgment). OFFICIAL (WCAG 1.4.11): meaningful graphics 3:1. `tools/icons.js` builds icons with labels. |
| H16 | **(human) First screen.** At 375 by 667 px the H1, the byline and at least the first sentence of the short answer show without scrolling. No full-width photo sits above the short answer. The first-screen picture (PLAIN-4) is the key facts row or a photo no taller than about a third of the screen. | OBSERVED (NN/g): 57 percent of viewing time is above the fold, and large images on phones are skipped as ads. OBSERVED (NN/g 2023): a summary at the top worked best. |

## T. Trust (experience, expertise, sources)

| ID | Rule | Why |
|---|---|---|
| T1 | A visible byline: "By <author>, <title> · Reviewed by <person>, <title> · Updated <date>". The date comes from `build.js dates`, never typed. | OFFICIAL: bylines where expected; dates that match the schema. |
| T2 | 2 or more sentences that show what Chapter3 knows, in the company's voice. Either a real experience ("In Chapter3's files...", "An agent at Chapter3...", "Our broker walks the crawlspace before a client bids."), taken from the story bank or the owner's answers and never invented; or a **worked example**: labelled "Example" where it starts, then told like a real person and a real situation ("Example: Mark and Lisa are moving from Ohio with $400,000 to spend..."). Every number comes from a verified fact row. It gives the results; one line of arithmetic only where it helps the buyer trust the number. It never says the people are clients and never says they are not; it never says "our client", "we helped" or "Chapter3 found them". OWNER 2026-10-05: "just make it example and then talk like its a real person and story". A worked example runs 5 to 8 sentences with a beginning and an end, and never shows Chapter3 acting inside it: quoted alone, that sentence reads as a real client. The service the story bank records goes in the plain line after the story, as an offer ("An agent at Chapter3 can read the HOA's rules with you before you offer"). Review 4, 2026-10-10. How to write one: `voice/STORY-CRAFT.md` (research, 2026-10-10): before, but, therefore, after; one picturable detail; three numbers or fewer, about the people; the meaning in one plain sentence after the story. A real story that reports a money result shows the usual result next to it (16 CFR 255.2). OWNER 2026-10-07 asked for examples "as if it was a real thing that chapter3 did"; the label stays, because a story presented as real that did not happen is a fake testimonial (FTC 16 CFR 465, SC Real Estate Commission advertising rules). | OFFICIAL (AI guide): "a first-hand review provides a unique perspective". OWNER A11e, A20. 71 pages have none. |
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
- **FAQ schema as a Google feature.** Google stopped showing FAQ rich results on 2026-05-07 and removed the documentation in June 2026. FAQPage schema is optional. A page that has it keeps it in sync (S12), because a mismatch is a defect, not because it ranks. The FAQ itself stays: it serves readers and answer engines (A7, A13).
- **Speakable, HowTo and llms.txt tuning.** No evidence they move anything.
- **Keyword density.** Keyword stuffing measured -9 percent in the GEO experiment.
