# How chapter3realty.com pages are made today

A digest of the website repo's process documents, read in full on 2026-10-01:

- `CLAUDE.md`
- `PLAYBOOK.md` (975 lines)
- `HANDOFF.md` (2,535 lines)
- `MISTAKES.md` (702 lines, 90 entries)
- `BRAND.md`

The documents read are on branch `claude/github-account-check-wutg8b`, which matches the live site; `main` is stale.

Citations are `H:` for HANDOFF and `M:` for MISTAKES, with line numbers.

**Read the originals before changing a rule.** This file exists so a session can plan without reading 4,000 lines first.

## The pipeline as it runs now

1. **Topic selection.**
   - Claude ranks candidates by three tests: call intent, the size of the gap, and whether a local fact is possible.
   - It runs PLAYBOOK A1, the duplicate check.
   - The owner approves the list (H:986-1045).
2. **Research.**
   - One fact file per page, under `research/invest-next/*-facts.md` or `research/invest-tax/`.
   - Each file holds verbatim quotes, a "Not verified" list and "Questions only the brokerage can answer".
   - Data lives in `research/invest-next/data/`.
   - The writer re-opens every source on the day.
3. **Spec.** `specs/<name>.js` holds every visible string. Relocation pages use `data/relocating/pages/*.js` instead.
4. **Generate.**
   - `node tools/mkpage.js specs/x.js` clones the chrome of `/invest/14-day-rule/` byte for byte and rewrites the identity fields.
   - It refuses to write when any of these is present:
     - leftover donor text
     - chrome drift
     - a bad title or description length
     - a hero sub over 30 words
     - Devin's name or NMLS number
     - "sets", "carry" or "maps"
     - a headline that offers financing
5. **Gate and wire-in.**
   - `node build.js audit` must report 0 errors.
   - Wire the page into the sitemap and llms.txt.
   - Add inbound links by wrapping existing words.
   - Run `build.js dates`, then `llmsfull`, then `preflight`, which must exit 0.
6. **Browser checks.**
   - `tools/verify-forms.js` at 1280, 768 and 320 pixels wide.
   - A per-calculator script tested against hand-computed cases.
   - Look at every chart once.
7. **Preview.** `tools/mkpreview.js` publishes an artifact.
8. **Owner review.**
   - One message with all edits.
   - Answers are recorded verbatim in `owner-answers-batchN.md`.
   - Edits go into the spec, then the page is regenerated.
9. **Deploy.** The owner runs `deploy.ps1`. Claude never deploys.

**Throughput.**

- 4 to 5 pages per batch.
- Batches 1 to 3 (13 pages) were built in one day.
- Batch 4 went through four review rounds in one day.
- The returns page took three more days of revisions.

## Where the time goes

**1. Review rounds: 2 to 5 per batch.** This is the largest cost.

- Batch 3 took 5 passes (H:1261-1569).
- Batch 4 took rounds 1 to 5 (H:1590-1812).
- The returns page took 5 rounds, one with 17 notes (H:1969).
- The tax cluster was fully rewritten the day after it was built (H:683-705).

Round one catches voice and business problems. Later rounds catch specifics.

**2. Wrong facts.**

- 20 of 163 researched facts were wrong (M:65).
- A search summary was used to "correct" a true fact (M:184-199).
- A cap-rate denominator error made the whole market look broken. A correct claim was then wrongly "corrected" (M:551-599).

**3. New gates, then sitewide sweeps.**

- One gate rollout produced 644 errors.
- That forced 92 hero subs to be rewritten (H:430-432).
- Another gate found 626 sentence-shape issues on 95 pages (M:132).

**4. First-draft defects that a gate would have caught before the owner saw the page.** Twenty-five on three tax pages (H:772-778):

- title and description length
- ". And" and ". So" openers
- "which is why"
- pseudo-clefts
- "actually"

**5. Owner questions asked late.**

- The batch 1 and batch 2 question lists are still unanswered.
- Tim's five questions have waited since 2026-09-03 (H:766, H:1567).

**6. Source fetches that fail:**

- the eCFR site blocks bots
- FRED has returned 503 errors
- Zillow returns 403
- FEMA refuses requests
- the FHA handbook needs pypdf (H:1245-1932)

## Owner rules that shape every page (summary)

The full list is in PLAYBOOK A11-A22 and `build.js`.

**Voice: literal and direct.**

- No metaphor, idiom, personification, aphorism or teaser.
- No "sets", "carry", "maps" or "catch".
- No hedges.
- Sentences: 28-word cap and a mean of 16 on pages from 2026-09-05; 40 and 20 on older pages.
- His target register: "If Airbnb or VRBO take the payment, they are responsible for the taxes."

**Subject: write for the buyer, not the industry.** The buyer test: "would a buyer standing in the property do anything differently because of this sentence?"

**Headlines.**

- Every H1 names a place.
- Section headings are questions. On strict pages, 60 percent or more, and the first one defines the subject.
- The hero sub is 8 to 30 words, holds the keyword and a number or place, and is not a question.

**The short answer is the answer only.** "If a sentence in the short answer would still be true on a different page, it is not part of the answer" (M:602-622).

**He prefers tables and charts to paragraphs** (H:1671, H:1716-1721).

**CTAs.**

- Two inside the article.
- Phone numbers are buttons.
- A differentiator goes in a contrast panel.
- His wording: "Talk to a specialized agent", "Have us find you your next investment", "Let us make it simple" (H:919-2072).

**Names and stories.**

- Devin's name appears in the byline only.
- Never write his NMLS number, and never call him or Chapter3 a loan originator.
- Stories are "an agent at Chapter3" or "in Chapter3's files", anonymized, and real.
- Never write a quote for Tim; draft it and wait for his sign-off.

**Compliance.**

- Never state an interest rate or a payment amount.
- Down-payment percentages appear only on four business-purpose pages, with the lender named.
- A BrickWood mention needs the affiliated-business disclosure.
- No conclusions about a named building, HOA or builder.
- Fair housing: describe property, never people.

**"Hard code that"** means a `build.js` gate that fails the build, added in the same commit as the fix.

## Open items in the website repo that touch content

**Roadmap.**

- Goal: 30 topic clusters (H:264-266).
- The HOA cluster, at 16 pages, is "past the point where another HOA page adds topical authority".
- Next buyer pages, by call intent (H:550-583):
  1. who pays your agent
  2. USDA in inland Horry
  3. multiple offers
  4. coastal home inspection
  5. manufactured homes
  6. rent vs buy
  7. credit score
  8. title insurance and attorney closing

**Sweeps waiting on the owner.**

- "sets" on 8 older pages.
- "carry" on 13 pages.
- 19 non-local H1s.
- About 645 headings to turn into questions.

**Off-site gaps.**

- `sameAs` lists only Facebook, Instagram and YouTube.
- No review markup.
- Google Business Profile, Yelp and Foursquare are the next priorities (H:589-644).

**Undecided.**

- Whether to name sources in body copy. The GEO study favors it; the owner's buyer test forbids naming industry bodies (H:631-639).

## Contradictions worth knowing

- HANDOFF says there are 41 mistakes. MISTAKES lists 90.
- MISTAKES 98 says the hero sub cap is 45 words. The real cap is 30.
- PLAYBOOK "Locked strings" still lists "Devin Day NMLS 2721275" and "Chapter3 Realty LLC". Both are superseded:
  - The NMLS number is now banned (A17).
  - The legal name is Chapter3 Realty Corp.
- BRAND.md still says "Devin Day, Operations Officer, licensed MLO, NMLS 2721275. Shown on all financing content". That is superseded the same way.
