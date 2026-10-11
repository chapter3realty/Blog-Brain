# Process grade: batch 2026-10-a and the system behind it

Auditor's report, 2026-10-11. I did not build this system or write these pages. The question: is this process worth running every day?

Short answer: not yet. It makes safe, well-sourced pages. It does not yet make pages the owner accepts on the first read, and it has not put one new page on the site. Fix the ten problems below before running it daily.

## What the evidence shows

Sources: `git log --stat` of `claude/beautiful-bell-7fe8p5`, the batch folder, the ledgers, `WORKFLOW.md`, `CRAFT.md`, `voice/RULES.md`, `voice/edits.jsonl`, `STANDARD.md`, `tools/`, `website-patches/README.md`, `reports/`, and the session scratchpad that holds the draft website clone.

### Commits

- The branch has 105 commits, not hundreds. They span 2026-10-01 to 2026-10-11, on 8 working days.
- 49 commits are batch 2026-10-a page work.
- 15 commits are marked "work in progress" or "in progress". One says "tests not final".
- 13 commits on 10-01 and 10-02 are the site audit. The rest of the commits are tools, rules and research.

### Versions and days

The four pages went through 7 published versions in 6 calendar days. The owner's last correction requires an 8th.

| Version | Published (UTC) | What drove it |
|---|---|---|
| 1 | 10-05 22:43 | First drafts. Score 100 on all four. |
| 2 | 10-06 04:08 | Owner read v1: "led with technical information, read like records". BUYER rules. |
| 3 | 10-06 23:10 | Sale prices from the deed index |
| 4 | 10-07 00:39 | Owner asked for examples that read as real |
| 5 | 10-07 02:40 | Owner's third-party reader on v4: too many exact numbers, dates, unknown words. PLAIN rules. |
| 6 | 10-10 22:28 | Owner: "a skill, not a template", old data. New maps, photos, illustrations, story research. |
| 7 | 10-11 02:14 | Design research, readability patches, image metadata |
| 8 (needed) | | Owner, 10-11 02:42: the story goes near the end, with tension; photos must be on topic |

- The plan was committed at 10-05 17:35. The first drafts took about 5 hours. That part is fast.
- Six days later, no page is approved and no page is live.
- The specs took 3,603 added lines and 2,572 deleted lines to reach 1,031 final lines. That is about three and a half full rewrites.

### Owner time and owner corrections

`WORKFLOW.md` sets the target: one owner review round per batch, "under 1 hour, not every batch". The owner said on 10-06: "I dont want to even look at your work very often."

In this batch the owner did:

- 4 review rounds, on v1, v4 (through a reader he found), about v5 and v7
- 1 question session (7 answers)
- 2 cadence decisions

Some of his words show the frustration. On 10-07: "please please please do not take what im telling you as a lesson for this one type of thing or this one blog". Also on 10-07: "youre still assuming people know things".

I count 12 general corrections from the owner, the kind that apply to every page:

1. Pages led with technical information.
2. Industry terms (Pulte, AAM, "plans").
3. It read like a report ("records show").
4. It did not answer the next question (flood insurance after the flood zone).
5. It assumed the reader knows the roads and towns.
6. Too many exact numbers.
7. The date was stated too often.
8. Say what it means, not what it is (Zone X).
9. Examples should read as real.
10. All four pages had the same shape.
11. It announced that data was old.
12. Story placement and tension, and off-topic photos.

At least 8 of these (1 to 5, 8, 10 and 12) were covered by rules that already existed, or needed only plain judgment:

- STRUCT-7, "write for the buyer, not the industry", already existed.
- So did WORD-1, "use the word a buyer uses".
- CRAFT section 4 already said to cut a photo that only decorates.

At least 2 corrections repeated a lesson recorded the day before:

- PLAIN-3 repeats BUYER-4.
- PLAIN-1 repeats BUYER-2.

### Review rounds

There were 4 reviewer rounds and 3 rounds of buyer reads (12 buyer reads in all).

| Round | High | Medium | Low | Total |
|---|---|---|---|---|
| Review 1 (v1) | 8 | | | 75 |
| Review 2 (v2) | 4 | 25 | 34 | 63 |
| Review 3 (v5) | 5 | 21 | 34 | 60 |
| Review 4 (v6) | 2 | 10 | 34 | 46 |

- High and medium findings fell. Low findings stayed at exactly 34 for three rounds. So the reviewers will always find more to say. Without a stopping rule, the review loop never ends on its own.
- Fact findings, where a sentence says more than its row, went 34, then 22, then 10. Review 4 still found a high one: the Grande Dunes "house" price was the price for houses and villas together.
- The buyer readers' "easy to read" grade rose from 6 or 7 out of 10 (v5) to 8 out of 10 (v6).
- Three of the four pages still have no monthly HOA fee. Buyer readers named it the top gap on 10-06, 10-07 and 10-10. Only one v6 reader says "yes" to "would you call this company".

### Facts

- **First pass:** 266 facts from 3 researchers on 6 communities. Separate verifiers found 227 verified, 21 wrong (8 percent) and 18 unverifiable.
- **The ledgers today, four pages:**
  - about 359 rows in tables
  - 296 verified
  - 23 wrong
  - 19 unverifiable
  - 21 with no status
- **Rows added after v1:** tax bills, flood insurance, events, sale prices, drive times, flood law and re-filed rows. The verifiers found 1 more wrong row and 1 wrong drive time.
- **Two communities dropped after full research:** Cresswind and Cypress Village. That is about 120 rows of research, and only 8 rows were ever checked.
- **No wrong fact reached a version the owner read,** as far as the reviews record. The separate verifier is the strongest part of this system.

### Legal safety

The system caught every legal risk it looked for:

- no recorded age rule, so no 55+ claim
- no rate or payment amount
- no description of residents
- no invented client
- no name except the byline

One risk remains open by the owner's choice. The live hub still lists Cypress Village and Cresswind as 55+, and no recorded age rule has been read for either. The owner, 10-06: "google says their 55+ its enough protection to me." The system flagged 42 USC 3604(c) and was overruled.

### What went live

Nothing from this batch.

- The four pages depend on 6 unapplied website patches. They must go on in order, then mkpage must be re-run on every spec page.
- This session cannot push to the website repo.
- The built pages exist only in an uncommitted clone in the session scratchpad (153 changed files).
- `mkpage.patch` already broke once when the live branch changed, and had to be refreshed.

The one real delivery came from the 10-01 audit. The website session deployed its fixes on 10-05:

- 15 facts corrected on the live site
- 7 of 7 lead forms sending
- contrast fixed

That came from this repo, and it is worth something.

### Tools versus pages

| Area | Lines added (all history) |
|---|---|
| Tools (`tools/`) | 9,818 |
| Page content (specs, ledgers, data) | 6,911 |
| Process docs (rules, standard, craft, prompts, templates) | 6,356 |
| Reviews and buyer reads | 3,385 |
| Audit | 15,705 |

- About 3,500 of the 6,629 tool lines today are picture tools built during this batch:
  - `area-map.js` alone is 1,991 lines
  - `photos.js`, `illustrations.js`, `image-meta.js` and `icons.js` make up the rest
- Two deep-research projects (stories and page design) also ran inside the batch.
- These tools may pay off over many pages. They also stretched one batch of four pages to six days.

### Signs of waste

- 15 work-in-progress commits, several made within a minute of each other. Several agents wrote in one working tree, and the orchestrator committed their half-done files.
- One commit was made with tests "not final". `npm test` passes today: ten suites, not the five `CLAUDE.md` says.
- Two website clones in the scratchpad:
  - `draft-old`: 114 MB, from 10-05, on an older tip
  - `draft`: 262 MB, re-cloned 10-11
- The scratchpad holds 7.1 GB and 685 top-level files.
- Researching 2 communities that were then dropped, because the age rule was not read first.
- Rules that changed position three times in four days. A Chapter3 agent inside a labelled example was:
  - allowed (T2, 10-07)
  - forbidden (commit 52d07ac, review 4, 10-10)
  - allowed again in the present tense (owner, 10-11)
- The voice memory stopped being kept. `voice/edits.jsonl` has no entry after 10-06, although the owner corrected pages on 10-07, 10-10 and 10-11. `CRAFT.md` section 8 and `RULES.md` "Keeping this current" both require that record.
- `RULES.md` says "PLAIN 9" while P10 now exists. P10 sits above P9, and PLAIN-10 has no section of its own.

### Cost

- The only recorded figure is in `RETRO.md`: about 7 million agent tokens for version 1 (research, verification, writing, one review).
- After that came 6 more versions, 3 more reviews, 12 buyer reads, more research rows, two deep-research projects and the picture tools. None of them were metered.
- My estimate, not a record: 20 to 35 million tokens for four unshipped pages, or 5 to 9 million a page.

## Grades

| Measure | Grade | Why |
|---|---|---|
| Speed to a usable page | **F** | First drafts took 5 hours, which is good. A usable page means approved and live. After 6 days and 7 versions, none is approved and none is live, and an 8th version is needed. |
| Owner time required | **D** | Target: one round of under an hour, not every batch. Actual: 4 review rounds, a question session and an outside reader he arranged. He still has to apply 6 patches by hand to ship. |
| First-draft quality | **D** | V1 passed every gate with a score of 100, and the owner sent it back as "records". The gates measure rules, not whether a buyer wants to read on. Buyer readers gave 6 or 7 out of 10 at v5 and 8 at v6. The top money question is still unanswered on 3 of 4 pages. |
| Fact accuracy and legal safety | **B+** | Separate verifiers caught 23 wrong rows before any owner read. No rate, no invented story, no claim about residents. Two communities were held out on a fair housing ground. Points off: the writer kept stating more than the rows said (34, 22, then 10 findings, and one high in v6). The hub's fair housing risk is open, by the owner's choice. |
| Learning | **D+** | Lessons are written down carefully, and some stick: tax bills, age rule first, PLAIN checks in the scorer. But the owner repeated two lessons the day after they were recorded, and had to plead for lessons to generalize. The edit log stopped on 10-06. Rules grow by addition (86 voice rules, 73 standard IDs, 60-plus review questions, about 3,000 lines of required reading) and one rule reversed twice. |
| Cost efficiency | **D-** | About 7 million tokens for v1 alone, probably 20 million or more in total, for four pages that are not live. Specs were rewritten about three and a half times. A third of the research was on communities later dropped. Large tool builds were done inside the batch. |
| Ready for 5 pages a day | **F** | One batch of 4 pages has taken 6 days, 4 owner rounds and has not shipped. There is no path to deploy from this repo. Five a day means about 35 pages a week. At today's rate the owner would be reviewing all day and the deploy queue would only grow. |

## The ten biggest process problems, ranked, with fixes

### 1. Nothing ships

**Problem:**

- Pages need 6 website patches the owner must apply in order.
- The built output lives in a scratchpad clone.
- This repo cannot push to the website.
- "Done" has never meant "live".

**Fix:**

- Give the session push access to a branch of the website repo, and land each batch as one pull request the owner merges and deploys.
- Ship the 55+ pages on the current generator. Apply the design patches as their own pull request, on their own schedule.
- Define a batch as done when it is deployed, and count only that.

### 2. No agreed picture of "good", so the owner is still the first real reviewer of taste

**Problem:**

- Every owner round found a new kind of fault: buyer-first, plain words, skill not template, photos, story placement.
- The scorer said 100 on pages he rejected.

**Fix:**

- Before the next batch, get one page to the owner's approval, even if he edits it himself.
- Make it the golden page. Every writer and reviewer compares against it.
- Ask him to name 3 pages on any site that he wants ours to read like.
- Add an owner-proxy reviewer that reads only his verbatim quotes and the golden page, and answers one question: would he send this back?

### 3. Scope grew inside the batch

**Problem:** maps v2, a photo system, illustrations, image metadata, six readability and generator patches, and two deep-research projects were all built while four pages waited.

**Fix:**

- Freeze the batch at the plan. A batch ships with the tools it started with.
- Tool work runs on its own track, with its own goal and deadline.
- New tools reach pages in the next batch.

### 4. Lessons are recorded but do not stick

**Problem:**

- Corrections were repeated the day after they were recorded.
- `edits.jsonl` stopped on 10-06.
- The retro's own lesson, ask the owner for HOA dues on day one, was not applied to this batch.

**Fix:**

- Make the record a gate. A change to `RULES.md` without a matching `edits.jsonl` line fails `npm test`.
- After each correction, run a "where else" sweep on every page in flight, and list what changed.
- Count repeat corrections per batch. Zero is the target.

### 5. Too many rules, overlapping, and some reversed

**Problem:**

- A writer must read about 3,000 lines:
  - 86 voice rules
  - 73 standard IDs
  - 60-plus review questions
  - three overlapping summary lists at the top of `RULES.md`
- The example rule changed three times in four days.

**Fix:**

- Write one writer card of no more than 15 rules, ranked, on one page.
- Each new correction must replace or merge an existing rule, not add a new one.
- Log every reversal with the date and the reason, and update every file that held the old rule in the same commit.

### 6. The review loop has no stopping rule

**Problem:**

- Four reviews and twelve buyer reads ran.
- Low findings stayed at 34 every round.
- The batch was never declared finished.

**Fix:**

- Send to the owner when there are 0 high and 0 medium findings and every buyer read is 8 or more.
- Low findings go to a list for the next sweep. They do not start a new version.
- Allow at most 2 review rounds before the owner read.

### 7. The page's first question went unanswered

**Problem:** monthly HOA dues were flagged by buyer readers from v2 to v6 and are still missing on 3 of 4 pages. The question never went to the owner.

**Fix:**

- Each page type has a short must-answer list. For a 55+ community: monthly cost, can I live here, what the homes are like, flood.
- A page that misses one does not go to the owner.
- Ask the owner or the MLS the same day the gap is found. If it cannot be answered, change the topic.

### 8. Too much research, and the writer outruns the rows

**Problem:**

- About 480 rows were written across six ledgers, for four pages.
- Two communities were fully researched and dropped.
- Reviewers kept finding sentences that said more than their row.

**Fix:**

- Check the kill test first: the recorded age rule, then the dues.
- Research only what the outline needs, with a cap of about 40 rows a page.
- Make the writer tag each figure with its row number in the spec.
- Add a machine check that every number in the copy matches a verified row's value.

### 9. Several agents in one working tree

**Problem:**

- 15 work-in-progress commits.
- A commit with tests not final.
- Two website clones.
- A 7.1 GB scratchpad.
- A patch that broke when the live branch moved.

**Fix:**

- One git worktree per agent.
- Only the orchestrator commits, and never with a failing test.
- One website clone, refreshed from the live branch at the start of each batch.
- A cleanup step at the end of each batch.

### 10. Cost and time are not measured

**Problem:** one token figure, for v1 only. No record of owner minutes, agent hours or tokens per page after that.

**Fix:**

- `RETRO.md` records tokens, agent count, wall time and owner minutes for each stage.
- Set a budget per page (for example 2 million tokens and 3 hours of wall time).
- An overrun stops the batch and goes to the owner as one line.

## What to expect from the next batch if these fixes are made

- **One golden page approved first.** After that, a batch of 4 or 5 pages that reuses this batch's county pulls should reach the owner in 1 to 2 days, in 2 versions or fewer.
- **One owner read** of 30 to 60 minutes, with sentence edits, not new rule classes. Expect 2 or 3 small corrections, recorded the same day and swept into the other pages.
- **Shipping:** pages land as a pull request he merges and deploys the same week.
- **Cost:** about 1 to 2 million tokens a page, recorded.
- **Five a day** becomes realistic only after two batches in a row meet those numbers with a working deploy path. A sensible ramp is 1 page a weekday, then 2 to 3, then 5. The Search Console checks in `WORKFLOW.md` still apply.
- **What will not change:** fact accuracy and legal safety are already the strong part. Keep the separate verifier and the legal checks exactly as they are.
