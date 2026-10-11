# Lessons from batch 2026-10-a: four pages, thirteen versions

Written 2026-10-11 for the owner and for every agent that makes a page. It answers the owner's request of 2026-10-11: "find all of the lessons you can find from this creation so that you have the skill not the template or hard code but you have the actual skill and brain to make blogs about anything in whatever design is going to be the best for those blogs".

Each lesson is written so it applies to a page on any subject: a neighborhood, an LLC, a tax rule, a market report. The 55+ pages are the evidence, not the subject.

Sources read: the owner's own messages in the session transcript (all 20 of them, 2026-10-01 to 2026-10-11), `batches/2026-10-a/` (PLAN, RETRO, REWRITE-PLAIN, WRITER-BRIEF, REVIEW 1 to 4, all 12 BUYER-READ files, all 21 OWNER-EYE files, the three GRADE files, both STORY-RETELL files), the version notes at the top of each spec, the 30 "wrong" rows in the fact ledgers and their verifier notes, `voice/edits.jsonl`, the git log (150 commits), `reports/`, `research_notes/`, and the current `CRAFT.md`, `voice/`, `STANDARD.md`, `WORKFLOW.md`, `prompts/` and `templates/`.

---

## One-page summary

**What happened.** Four pages took 13 numbered versions and 5 lettered ones (18 builds) over 6 days, from 2026-10-05 22:43 to 2026-10-11 08:41. The first drafts took 5 hours and scored 100 on every gate. The owner sent them back. He read or arranged a read 4 times, and gave 12 general corrections. Independent graders on 2026-10-11 gave the pages B to C-, SEO C+, and the process D to F. Nothing is live. Cost was about 7 million tokens for version 1 and an estimated 20 to 35 million in all.

**What would have saved the most.** With lessons 1 to 13 applied from the start, the batch needed about 3 versions and 1 owner read. About 10 versions and 3 owner rounds were spent learning things the system could have known.

**The top 15 lessons, in one line each:**

1. Start from what the reader types and must know. Write the must-answer list before research, and research it first.
2. A gap a cold reader names is a blocker that day, not a note. The monthly fee was named 3 times over 5 days before it was fixed.
3. A gate score measures rules, not value. Judge every draft first by "does this reader get what they came for?"
4. Simple first, for every sentence, picture and story. A stranger decides what is simple, not the writer.
5. A correction is a class. Name the reader harm behind it, sweep every page and page type for it the same day, and check why an existing rule did not stop it.
6. Never grade your own work. Every self-grade in this batch was higher than the independent grade that followed.
7. Freeze the scope of a batch. Build tools on their own track. A batch is done when it is live.
8. Serve the intent of an instruction, not its literal method, and not the direction you already lean.
9. A picture must show the subject of the sentence beside it, be readable on a phone, and be looked at full size before anyone describes it.
10. A story passes only if a stranger can retell it after one read: one want, one problem, one fix, no counting, no "if".
11. Stop a review loop by rule: no high or medium findings left. Low findings go to a list, not a new version.
12. When two pieces of advice conflict, name the goal behind each and find one design that serves both before you build. Record every reversal.
13. Read sibling pages side by side before release. A page judged alone can pass while it is clearly the weakest of the set.
14. One fact has one value on every surface of the site: the page, the hub, older pages, `llms.txt`.
15. A sentence may not say more than its source: not a wider group, a later time, a fuller list, or a firmer decision.

**The process facts.**

- About 10 of 13 versions were avoidable. The table is in Part 2.
- No gate, reviewer or proxy caught any of the owner's taste corrections first. The buyer readers caught three of them earlier, and those findings were fixed one sentence at a time instead of as a class.
- Self-review overrated the work 7 times on record.
- 9 rules were written too narrowly and let the next case through.

**The meta-lesson.** A correction teaches a reason, not a phrase. Ask what the reader lost, whether a rule already said it, and where else it happens. Then change as few rules as possible, and test the change on a page of a different kind. A lesson that names a place, a page type or a word list is probably a one-off. A lesson about what the reader knows, needs first or can picture is general.

---

## How to read each lesson

- **Lesson:** the principle, for any page on any topic.
- **Evidence:** what happened, with the file or commit, and the owner's words where they exist.
- **Caught by / earlier:** who found it, and the step that should find it next time.
- **In the skill now?** Whether `CRAFT.md`, `voice/`, `STANDARD.md`, `WORKFLOW.md`, `prompts/` or `templates/` already hold it, and whether as a general skill or as a narrow rule.
- **Class:** reader and plainness, content choice, facts and truth, story, visuals and photos, design and layout, SEO/AEO, process and quality control, legal and safety, tools and engineering, cost and speed.
- **Saved:** a rough estimate of the versions, owner rounds or days it would have saved in this batch.

"Owner-eye" is the agent that reads as the owner (`prompts/owner-eye.md`). "Buyer reader" is the cold-reader agent (`prompts/buyer-reader.md`). "Grader" means the three independent audits of 2026-10-11 (`GRADE-pages.md`, `GRADE-process.md`, `GRADE-seo.md`).

---

## Part 1. The lessons, ordered by what each would have saved

### L1. Start from what the reader types and must know. Research that first.

- **Lesson:** Before any research, write down the questions real readers ask about the subject: search suggestions, "People also ask", Search Console queries, and what the owner hears from customers. Rank them. The top few are the page's must-answer list. Research those first, and do not draft until each has an answer or a dated owner question. Research that starts from what is easy to verify produces a page about what was easy to verify.
- **Evidence:** The plan's ten questions (`PLAN.md`, "What every page answers") were records questions: the recorded age wording, the tax district, the wind pool line, the declaration date. The monthly fee was asked as "what the dues cover", not "how much". Three of four pages had no fee through version 8. On 2026-10-11 the SEO grader found Google suggests "hoa fees" for every one of the four names, and "reviews", "amenity center" and "rentals" after it (`GRADE-seo.md` section 1). The page angle "what is it like to live in" is a phrase nobody types. The fees were found in one research pass on 2026-10-11 (commits 5ea5b3e, 9bb92c5). The owner, 2026-10-06: "lead with what a buyer would want to know rather than how many acres were annexed by the city".
- **Caught by / earlier:** Buyer readers on 10-06, 10-07 and 10-10; graders on 10-11. Earlier: a must-answer list built from search demand at step 0, before the plan.
- **In the skill now?** Partly. `WORKFLOW.md` "Rules from the 2026-10-11 audit" items 1 and 2 and `templates/must-answer.md` hold it. The must-answer file has lists for only two page types (55+ community, topic guide), so it reads as a template. `CRAFT.md` section 1 says "what they want first" but does not say how to find it. The general skill, "derive the must-answer list for any subject from demand", is not in `CRAFT.md`.
- **Class:** content choice; SEO/AEO.
- **Saved:** 2 versions (v3 prices, v9 fees and home facts) and the SEO grade's top defect.

### L2. A gap a cold reader names is a blocker that day.

- **Lesson:** When a reader test says "I came for X and the page never told me", that page cannot move forward until X is answered or the topic changes. Do not log it as a finding among sixty. If the obvious source is closed, find another lawful one the same day, or ask the owner the same day.
- **Evidence:** The buyer reader on 10-06 ranked "How much are the HOA dues each month?" first (`BUYER-READ-del-webb-north-myrtle-beach.md`: "I came to the page to learn this. The page sends me away... This is the biggest gap"). The same gap was the top note on 10-07 (v5 reads: "would call only after I found the monthly fee somewhere else") and on 10-10. The fee went on the pages on 10-11 from current listings, a source that was open the whole time. `RETRO.md` recorded "dues as a day-one research item" on 10-06, and the batch did not apply its own lesson (`GRADE-process.md` problem 4).
- **Caught by / earlier:** Buyer readers, three times. Earlier: treat the buyer reader's "first question, never found" line as a blocker in the stop rule.
- **In the skill now?** Partly. The must-answer gate (`WORKFLOW.md` audit rule 2) covers listed items. Nothing says a reader's top unanswered question becomes a must-answer item even when it is not on the list.
- **Class:** process and quality control; content choice.
- **Saved:** 2 to 3 versions and three buyer-read rounds.

### L3. A gate score measures rules, not value.

- **Lesson:** Machine checks catch what a pattern can catch: banned phrases, length, links, schema. They cannot tell whether the page gives this reader what they came for. Read every draft first as the reader, before running a gate, and do not treat a perfect score as a sign the page is good.
- **Evidence:** Version 1 scored 100 on all four pages, passed `build.js audit`, the claims scan and the facts check, and took a 75-fix review (`REVIEW.md`). The owner read it and said it led "with too much technical information" and read like records. The v1 H1s were "What does a new home in Del Webb North Myrtle Beach cost?" with "From $585,990, per Pulte." The assistant's own diagnosis on 10-06: "my checks measured safety and structure, not whether a buyer gets what they came for." The SEO grader on 10-11: "`tools/score.js` gives all four 100/100. That score does not measure search demand or whether the cluster agrees with itself."
- **Caught by / earlier:** The owner. Earlier: a cold reader before the first gate run, and a reviewer question "what did the reader come for, and is it on the first screen?" ahead of the rule checks.
- **In the skill now?** Yes in spirit: `CRAFT.md` section 7 "Check it like a stranger would" runs before the gates. `prompts/buyer-reader.md` exists. `voice/RULES.md` OWNER-5 says "the checks are wrong, not the owner". It is general.
- **Class:** process and quality control.
- **Saved:** 1 version (v2) and the owner's first round.

### L4. Simple first, for every sentence, picture and story. A stranger decides.

- **Lesson:** The page is for a reader who knows nothing about the place, the trade or the words, and who reads slowly on a phone. Cut every word they would look up, every number they would not say aloud, every detail that only shows what we know. Then test it on someone who has not seen it. The writer cannot judge simplicity, because the writer already knows what the page means.
- **Evidence:** The owner, 2026-10-07, after his third-party reader read version 4: "it is a very hard read because numbers are exact and there's too many numbers you also are mentioning the date so much ... please please please do not take what im telling you as a lesson for this one type of thing or this one blog understand that in everything you do you need to make it as easy to understand as possible". Also: "talking about all the details and exact things just sound like you're flexing your smarts." The story test on 10-11: the writer's own retell marked the Grande Dunes story "Pass, no stumble" (`STORY-RETELL-v13.md`); a cold reader stopped at "about two weeks too long" and counted in their head (`STORY-RETELL-v13b.md`).
- **Caught by / earlier:** The owner's outside reader; later the cold retell. Earlier: a cold reader on every draft (the buyer reader already existed from v2 and flagged exact numbers and repeated dates on 10-06).
- **In the skill now?** Yes, and general: PLAIN in `voice/RULES.md` ("These come before every other rule, on every page and every piece of writing"), `CRAFT.md` section 5, `STORY-SIMPLE.md` test 12. The PLAIN items still carry narrow scopes (see L35 and Part 2D).
- **Class:** reader and plainness.
- **Saved:** 1 to 2 versions (v5) and one owner round.

### L5. A correction is a class. Sweep for it the same day.

- **Lesson:** When anyone corrects a sentence, ask four questions. What did the reader lose? Did a rule already cover this, and if so, why did it not stop it? Where else does the same harm appear, on these pages and on pages of other kinds? What is the smallest change to the skill that prevents it? Then fix every instance before the next version, not only the one quoted.
- **Evidence:** The owner said it twice. 10-06: "this is an overall lesson not a change this one thing type of suggestion". 10-07: "please please please do not take what im telling you as a lesson for this one type of thing". The process grader counted 12 general corrections; at least 8 were already covered by existing rules (STRUCT-7 "write for the buyer, not the industry", WORD-1, CRAFT section 4 on decorative photos), and 2 repeated a lesson recorded the day before (PLAIN-1 repeats BUYER-2; PLAIN-3 repeats BUYER-4). The buyer reader on 10-06 already flagged "cents-level exactness reads like a form" and "'in October 2026' and 'at 2025 rates' repeat". Those were fixed in place, and version 4 then added more numbers.
- **Caught by / earlier:** The owner, then the process grader. Earlier: a "where else" sweep after every correction, recorded in the commit, and a check that a new rule is not a restatement of an old one.
- **In the skill now?** Yes, as a statement: `CRAFT.md` section 8, `RULES.md` "Keeping this current", OWNER-5. Not as a procedure: nothing says to ask why the existing rule failed, and nothing requires the sweep. `GRADE-process.md` proposed both.
- **Class:** process and quality control.
- **Saved:** 2 versions (v5 repeating v2's lessons) and the owner's frustration.

### L6. Never grade your own work.

- **Lesson:** The person or agent who wrote a page does not score it, retell its story, or say it is ready. A self-grade is always generous, because the writer reads what they meant. Use a fresh reader for every judgment that gates a release, and a different fresh reader after each round of fixes.
- **Evidence:** v13: the writer graded its own North Myrtle Beach page 9 of 10 and wrote "No bare dirt shows in either" photo. An independent reader gave 8, found eight fixes, and found the photos showed brown lawns and graded lots (`OWNER-EYE-v13-...`, `-v13b-...`). It took three independent reads to reach 9. The writer's story retell passed what a cold reader stumbled on (L4). The assistant graded itself B- on 10-06 ("Writing for the buyer C"); the graders on 10-11 gave the process D+ to F. On 10-11 19:11 the assistant ranked the pages A-, B+, B, B- for SEO; the SEO grader's per-page grades earlier that day were B+, B-, B- and C+.
- **Caught by / earlier:** Independent reviewers. Commit ce72e77 made it a rule for owner-eye.
- **In the skill now?** Partly. `prompts/owner-eye.md` forbids the writer as reviewer. `CRAFT.md` section 7 says "Before anyone else sees it" and lists checks the writer runs, with no independence rule. The general principle is not stated for every judgment.
- **Class:** process and quality control.
- **Saved:** 2 versions (v13b, v13c) and one owner disappointment.

### L7. Freeze the scope of a batch. Ship. Done means live.

- **Lesson:** A batch ships with the tools and plan it started with. A new tool, a research project or a design overhaul runs on its own track and reaches the next batch. Decide on day one how the page gets to the live site, and count a batch done only when it is live.
- **Evidence:** During the batch, about 3,500 lines of picture tools were built (`area-map.js` alone 1,991 lines), plus six website patches and two deep-research projects (stories, page design) (`GRADE-process.md`, "Tools versus pages"). Versions 6 and 7 were mostly tool and design work. After 6 days nothing was live; the pages depend on 6 patches the owner must apply in order, and `mkpage.patch` broke once when the live branch moved. Process grade: speed to a usable page F.
- **Caught by / earlier:** The process grader. Earlier: the plan names the delivery path and the tool set, and a request for a new tool mid-batch is logged for the next batch.
- **In the skill now?** Yes, in `WORKFLOW.md` audit rules 6 (scope freeze) and 10 (done means live). It is general. The delivery path (pull requests instead of patches) is still an open question to the owner.
- **Class:** process and quality control; cost and speed.
- **Saved:** 3 to 4 days and most of the token cost.

### L8. Serve the intent of an instruction, not its literal method, and not the direction you already lean.

- **Lesson:** When someone asks for "more X", ask what they want the reader to feel or know, then choose the form. Do not add more of what the work already has too much of. When the method they name is blocked, find another lawful route to the same result the same day.
- **Evidence:** 10-07 00:35, the owner: "make the examples more detailed as if it was a real thing that chapter3 did." Version 4 added numbers and arithmetic: the Grande Dunes example had about ten figures, from "$432,500" to "about $2,071 a year". Twenty-five minutes later his reader said "too many numbers". He meant human detail and Chapter3 acting, not more figures. 10-06: "you should be able to price check houses pretty easy with zillow" and "use zillow to find out what houses cost". Zillow's robots file blocks listing pages, so the batch waited for MLS for five days before using county deed prices (v3) and listing-site fees (v9). On 10-10, "we should use images whenever at all possible to show features" became a large hero photo at the top (v6), which the owner called "awkward" on 10-11.
- **Caught by / earlier:** The owner and his reader. Earlier: restate each instruction in one line as "you want the reader to ___", and say which form you will use (RULES OWNER-1 already says "say in one line which one you are building").
- **In the skill now?** Partly. OWNER-1 covers two readings of a request. Nothing covers serving the intent when the method is blocked, or checking that "more" does not push toward a known fault.
- **Class:** process and quality control.
- **Saved:** 1 to 2 versions (v4, part of v6) and 4 to 5 days of missing price and fee data.

### L9. A picture must show the subject of the sentence beside it, be readable on a phone, and be looked at full size.

- **Lesson:** Every image answers "what fact does this show?" and sits next to the sentence that states that fact. Its caption says the fact. A photo of somewhere else, a decorative hero, an aerial nobody can parse, or a drawing that does not match its words costs trust. Before you describe or approve a picture, open it full size and at phone width and look.
- **Evidence:** Version 6 added "a large photo near the top" (assistant message, 10-10 22:29). The owner on 10-11: "the photo at the beginning feels awkward" and "the photos should be of the topic we are talking about in the blog." The page grader: "Every page opens with a beach or river photo and a caption that admits the photo is not the place." Owner-eye v9 on Grande Dunes: three tourist photos, six images in one section, an Ocean Club card about classes that shows a house. The owner on 10-11 06:13: "the maps photo above is low quality and theres only the one". It was a 2023 aerial enlarged past its sharpness. v13 claimed "No bare dirt shows"; the independent reader looked at full size and found brown lawns and graded lots. The beach view aerial had no labels and read as "gray texture" on a phone until labels were added.
- **Caught by / earlier:** The owner, graders, owner-eye. Earlier: a picture check in the reviewer pass: subject, sentence beside it, phone-width legibility, full-size look.
- **In the skill now?** Mostly. `CRAFT.md` section 4: "Each photo shows a fact, and its caption says the fact. Cut a photo that only decorates." P10 in `RULES.md`. These existed in some form before the owner's 10-11 correction (CRAFT section 4 was written 10-10), which shows the rule was not applied. "Look at it full size before you describe it" and "an aerial needs labels" are not written down.
- **Class:** visuals and photos.
- **Saved:** 1 to 2 versions (v8, v13) and two owner corrections.

### L10. A story passes only if a stranger can retell it after one read.

- **Lesson:** A short story on a page has one person, one want, one problem and one fix. The reader never counts, compares two numbers, or holds a condition ("if", "unless"). It uses no word the reader would look up. Write the one-sentence retell before the story. A fresh reader reads it once and tells it back; a wrong retell is the story's fault.
- **Evidence:** The owner, 10-11: "The story for dell webb at grand dunes atleast is impossible to understand research how to make a story simple and engaging." The v12 story asked the reader to count nights in "any 12 months in a row" across a summer and a Christmas. Owner-eye had graded it 9 of 10. `STORY-SIMPLE.md` "Why the four drafts failed" lists counting, a three-part rule, two visits in one window, a re-count and an "if". The research is in `research_notes/Short stories for retiree buyers/simple_stories.md`.
- **Caught by / earlier:** The owner. Earlier: the cold retell (now test 11 and 12 of `STORY-SIMPLE.md`).
- **In the skill now?** Yes: `voice/STORY-SIMPLE.md`, `STORY-CRAFT.md`, `prompts/owner-eye.md`. It is general. Two problems: the machine part of the test lives only in the batch kit (L34), and the model Grande Dunes story in `STORY-SIMPLE.md` still has two visits ("all summer and again at Christmas"), which its own test 6 forbids.
- **Class:** story.
- **Saved:** 1 version (v13 stories) and one owner correction.

### L11. Stop a review loop by rule.

- **Lesson:** Set the release bar before the first review: no high and no medium findings, cold readers at the agreed grade, the owner proxy at the agreed grade. Low findings go to a list for the next sweep. They never start a new version. Reviewers will always find something; that is not a reason to keep going.
- **Evidence:** Reviews 2, 3 and 4 each found exactly 34 low findings (`GRADE-process.md`, "Review rounds"). High and medium findings fell from 29 to 26 to 12. Versions 10 to 12 were owner-eye rounds on one-line items. The page was never declared finished on its own.
- **Caught by / earlier:** The process grader.
- **In the skill now?** Yes: `WORKFLOW.md` audit rule 4 (stop rule). General.
- **Class:** process and quality control; cost and speed.
- **Saved:** 1 to 2 versions.

### L12. When advice conflicts, name the goal behind each and design once. Record every reversal.

- **Lesson:** Two reviewers, or a reviewer and a rule, will sometimes ask for opposite things. Before changing the page, write down what each one protects. Usually one design serves both. If you must choose, choose by the reader, record the decision and the reason, and update every file that held the old rule in the same commit.
- **Evidence:** Headings: the page grader said the full name in every heading "reads as written for a machine"; the SEO grader said the name is "right for passage retrieval". v11 shortened the headings, v12 put the names back with short contents labels (`data-toc`), which served both (commit aacbd84). Chapter3 inside an example: allowed (T2, 10-07, commit 45f17bb), forbidden (52d07ac, 10-10), allowed again in the present tense (5d2bf92, 10-11). Hero photo: added in v6, removed in v8. The writer prompt still says "show the arithmetic" in examples, which `STORY-SIMPLE.md` now forbids (L33).
- **Caught by / earlier:** The process grader. Earlier: a reversal log, and a rule that a conflict is resolved on paper before a build.
- **In the skill now?** Only as a proposal in `GRADE-process.md` problem 5 ("Log every reversal"). Not in `CRAFT.md` or `WORKFLOW.md`.
- **Class:** process and quality control.
- **Saved:** 2 versions (v11 to v12 headings, part of v8).

### L13. Read sibling pages side by side before release.

- **Lesson:** Pages made together will be read together. Before release, compare them on one screen: length, number of pictures, pictures of the subject itself, which must-answer items each has, and the quality of each story. A page that passes alone can be plainly the weakest of the set. When one page is weaker, look upstream first: it usually had fewer verified facts.
- **Evidence:** Owner-eye v12 graded the North Myrtle Beach page 9 of 10 at 720 words, with one blurry photo. The others had about 870 to 1,090 words. The owner, 10-11: "the first page about del webb seems less good than the other ones ... its alot shorter why is that?" The cause was upstream: its HOA rules are not online, so its ledger had fewer facts, and its town section was cut for lack of verified rows. The independent v13b to v13d reviews added a side-by-side table (words, pictures, pictures of the neighborhood, phone screens, longest section). That table is the check.
- **Caught by / earlier:** The owner. Earlier: the side-by-side table in owner-eye from the first round.
- **In the skill now?** No. `prompts/owner-eye.md` reads one page. `CRAFT.md` does not mention comparing pages of a set.
- **Class:** process and quality control.
- **Saved:** 1 version (v13) and one owner correction.

### L14. One fact has one value on every surface of the site.

- **Lesson:** When a new page states a fact, every other place the site states it must agree: the hub, older pages, the summary files for AI tools, schema, image captions, titles. Register the fact once, with its owner page and a date to recheck, and scan the whole site for the old value before release.
- **Evidence:** Review 1 found the hub contradicting the new pages on seven figures (Myrtle Trace "$90/mo" against a verified $95; Seasons "460 homes" against 444 lots; Del Webb NMB prices; Grande Dunes "gated", "sold out" and fees, all unverified). The SEO grader on 10-11 found the hub, the pages, `llms.txt`, `llms-full.txt` and two older pages giving different fees, home counts, build years and gate claims, and said "An answer engine that reads more than one of them can quote any of the versions." The tax mills were typed by hand into four specs.
- **Caught by / earlier:** Reviewer 1, SEO grader. Earlier: the registry check run at the plan stage, against the whole site.
- **In the skill now?** Yes: `WORKFLOW.md` audit rule 8, `RULES.md` FACT-6, STRUCT-9, `facts/registry.json`. General. Not in `CRAFT.md`.
- **Class:** facts and truth; SEO/AEO.
- **Saved:** one grade step on SEO; protects every future page.

### L15. A sentence may not say more than its source.

- **Lesson:** Check each claim against its source for four kinds of stretch. Group: does the number describe the same set the sentence names (houses, or houses and villas; the plans sold now, or every home built)? Time: is a 2013 description stated as true today? Completeness: does "including" become "the facilities are"? Firmness: does an officer's estimate become a board decision, or an announcement date a start date? A sentence that is true for part of the set is false for the reader who is in the other part.
- **Evidence:** 30 ledger rows were marked wrong across the six ledgers. Patterns in the verifier notes: three FEMA panels from three sample points when there were four; drive ranges computed from two extreme lots instead of all 497; "the homes have one-story floor plans" from a 2013 press release; "began managing on January 31, 2024" from a press release date; "the HOA's facilities are" from "including (but not limited to)"; "the board said" from an officer's "it will probably be"; a 2006 paragraph replaced in 2013; "400 acres" when the parcels total 159 acres; a street name from a geocoder's road label. On the pages: "A house ... usually sells for about $630,000" mixed houses and villas (Review 4 high); "about 2,200 square feet in the smallest design" was true only of the plans sold today, when homes start near 1,340 (page grader); "Grande Dunes has a private 18-hole golf course" when it has two courses, one public. Reviewer fact findings ran 34, 22, then 10.
- **Caught by / earlier:** Separate verifiers (strong), reviewers, graders. Earlier: the verifier prompt names these four stretches; the writer tags each figure with its row in the spec.
- **In the skill now?** In part. `RULES.md` FACT-1, FACT-2 (same population in a ratio) and FACT-8 cover pieces. The four kinds of stretch are not written as one test, and `CRAFT.md` section 2 says only "It is true".
- **Class:** facts and truth.
- **Saved:** about 30 findings over three review rounds; two quotable errors that reached the graders.

### L16. Run the deciding test first.

- **Lesson:** Every page has a fact without which the page cannot be written as planned: the rule that makes the subject what the title says, the price that makes the topic worth a page, the source that must exist. Check that fact before researching anything else.
- **Evidence:** Six communities were researched; two (Cresswind, Cypress Village) were dropped because no recorded 55+ rule could be read. About 120 rows of research went unused (`GRADE-process.md`, "Facts"). `RETRO.md`: "read the recorded age rule before researching the rest of a 55+ community."
- **Caught by / earlier:** The researcher, after the full pass. Earlier: one row first, then the rest.
- **In the skill now?** Yes, in `RETRO.md` and the 55+ research brief, as a narrow rule ("age rules first"). Not as a general step.
- **Class:** content choice; cost and speed.
- **Saved:** about a third of the research cost.

### L17. What you research decides what you write. Research the reader's life, not only the records.

- **Lesson:** A researcher sent to primary records brings back records, and a writer given records writes a records report. Give the researcher the reader's questions and the owner's knowledge of what customers ask, and let records answer those. Then the page talks about life, cost and risk, with records behind it.
- **Evidence:** The assistant on 10-06: "the researchers started from county records, so the writer wrote records." The v1 pages opened with the city annexing 171.24 acres, 497 platted lots, the declaration date and FEMA panel numbers. The owner, 10-06: "something in my experience people like to know about for HOA's is how many events do they hold for the community. remember this is overall knowledge". When the events research was done, he praised it on 10-11: "very good info about the clubs and activities and icons by the way very good."
- **Caught by / earlier:** The owner. Earlier: a research brief built from reader questions (now `templates/research-brief.md`).
- **In the skill now?** Yes: BUYER-7, `templates/research-brief.md`. BUYER-7 is written for "an HOA community". The general form, "research what the reader's life will be like, not only what the records say", is not in `CRAFT.md`.
- **Class:** content choice.
- **Saved:** 1 version (v2).

### L18. A true answer that does not help the reader decide is not an answer.

- **Lesson:** "More than $2,000 a year", "at least $3,000", "ask the manager", "the page cannot say" are true and useless. Give the figure a reader can plan with, rounded, for the case they are in. If you cannot, leave the question off the page and put the offer to find out in a call to action.
- **Evidence:** Owner-eye v9 on Grande Dunes: "Property tax: 'More than $2,000 a year' ... That is not an answer. On a $665,000 house it is a lot more." Not fixed in v10; owner-eye sent it back again. Fixed in v11b as "about $2,700 a year on a house". "At least $3,000" became "about one year of HOA dues". The owner, 10-07: "theres a few times where you propose a question and then dont answer it or the answer is just go find out by reading stuff." The v1 to v2 pages answered the dues question with "Ask the management company" (Review 1 called that "the honest answer").
- **Caught by / earlier:** Owner, buyer readers, owner-eye. Earlier: the reviewer asks of every answer, "could the reader plan with this?"
- **In the skill now?** Partly. PLAIN-5 and score.js P5 catch "ask the..." openers. SHAPE-6 says "no refusal to answer". A floor or a vague range passes every check, and `CRAFT.md` does not name it.
- **Class:** reader and plainness; content choice.
- **Saved:** 1 owner-eye round; an item sent back twice.

### L19. Round to help the reader, not by reflex.

- **Lesson:** Round a number when the exact figure adds nothing the reader would use: "about $535,000", "about 600 a year". Keep a short exact number when it is the answer itself, when it is what other sources print, or when rounding changes its meaning. "$95 a month" is easier to read than "about $100", and it is the number an answer engine will quote.
- **Evidence:** After PLAIN-2, Myrtle Trace's verified "$95 a month" became "about $100" and "518 homes" became "about 500". The SEO grader: "We look less exact than our sources", and the hub said $95 and 518. The v1 hero had "$95 a month in dues." A related over-application: "hundreds of paths" in place of "more than 240" was right, because the count only showed what we know.
- **Caught by / earlier:** The SEO grader. Earlier: write the reason into the rule ("round what a person would not say aloud").
- **In the skill now?** Partly. PLAIN-2 says "round to what a person would say out loud", which is the right reason. `CRAFT.md` section 5 says "Round numbers, few of them" with no exception. STANDARD P1 limits exact amounts to $10,000 and up, so the small-number rounding came from judgment, not the gate.
- **Class:** reader and plainness; SEO/AEO.
- **Saved:** a quotable defect on the best page.

### L20. State it or cut it. A half-hedge protects nothing.

- **Lesson:** If a fact is safe to state, state it plainly. If it is not, leave it out. Wording that hedges in one sentence while another sentence on the same page states the fact as true costs the reader a plain sentence and protects no one.
- **Evidence:** North Myrtle Beach rentals: a verifier note said not to state the 30-day minimum as in force. The page said "Under the city's plan for the neighborhood, renters must stay at least 30 days", while the story said "Every renter there must stay at least 30 days, so they cannot rent by the week" (`OWNER-EYE-v13c-...`: "the hedge costs the reader a plain sentence and protects nothing"). The coordinator then decided the plain wording was safe ("at least" stays true if the recorded rule is stricter). PLAIN-9 was the owner's own version of this for old data, 10-10: "if there is no data thats good on a topic then just diont mention it."
- **Caught by / earlier:** Independent owner-eye. Earlier: the reviewer reads each hedge against the rest of the page.
- **In the skill now?** Partly: PLAIN-9 for old data; SHAPE-6 "No hedges". Not as "decide once: state or cut".
- **Class:** facts and truth; reader and plainness.
- **Saved:** 1 independent review round.

### L21. When a safety wording clashes with the voice, fix it at the source, not in the sentence.

- **Lesson:** A verifier may allow a fact only with attribution ("the builder says", "listings show"). The voice forbids "records show". Do not print both. Find a stronger source, state the part the source fully supports, or cut the sentence. The attribution goes in the sources line.
- **Evidence:** "Pulte lists lawn care and a TV package" was the owner's own bad example under BUYER-3. Versions 9 to 13 kept "Listings show an HOA fee of about $400", "the builder says", "Pulte also lists clubs and activity groups". Owner-eye v9: "'Listings show' ... That is 'records show' again." Review 4: "'Yes, the builder says.' reads as doubt." The fix was a coordinator decision to state the fee plainly with "recent home listings" in the sources line, and to cut the Pulte clubs line.
- **Caught by / earlier:** Owner-eye, Review 4. Earlier: a rule that a verifier's wording limit is a constraint on what to say, not a phrase to paste.
- **In the skill now?** Partly: BUYER-3, `CRAFT.md` section 5 ("No 'records show'... Sources go in the sources line"). The clash with verifier wording is not addressed.
- **Class:** facts and truth; reader and plainness.
- **Saved:** 1 to 2 review rounds.

### L22. Use the reader's own words, including the words they search.

- **Lesson:** "No jargon" means no word the reader does not use. It does not mean avoiding a trade word the reader types into Google. If readers search "amenity center" or "HOA fees", the page uses those words once, in plain context.
- **Evidence:** BUYER-2 and the plain-words list removed "amenity center"; the pages said only "clubhouse". The SEO grader: "Amenity center is the builder's and the searchers' word." Autocomplete offers "amenity center" for three of four names. The fix proposed: "The clubhouse, which the builder calls the amenity center".
- **Caught by / earlier:** SEO grader. Earlier: the search-demand list (L1) is also a word list.
- **In the skill now?** No. BUYER-2 says "No industry terms" with no exception for searched words.
- **Class:** SEO/AEO; reader and plainness.
- **Saved:** a search modifier on four pages.

### L23. Define the word the reader thinks they already know.

- **Lesson:** The hardest words are not the strange ones; a reader flags those. They are the ordinary words with a local meaning: "villa", "plan", a place name that covers a district and a neighborhood. Say what it means here, once, the first time it appears.
- **Evidence:** Owner-eye v10: "Nobody knows what a villa is ... A buyer from Ohio thinks a villa is a big house in Italy." The page said "houses and villas" eleven times. "Grande Dunes" meant both a large area and a neighborhood inside it ("Del Webb is one neighborhood inside it" was added). "Heel Tract", "master association", "house plan", "the city's plan", "dog run", "HOA" undefined on one page: each stopped a reader or the owner-eye.
- **Caught by / earlier:** Owner-eye, buyer readers, cold retell. Earlier: the buyer reader prompt asks for words that mean something different here.
- **In the skill now?** Partly. STRUCT-2 "Say what the subject is before you say anything about it"; PLAIN-1. Not the "familiar word, local meaning" case.
- **Class:** reader and plainness.
- **Saved:** several owner-eye items.

### L24. The page's surroundings are part of the page.

- **Lesson:** The reader does not separate the article from the header, footer, pop-ups and site-wide boxes. If those speak to a different reader, the page loses trust. Review the page as it will be served, and treat a mismatch in the frame as a release item for the site.
- **Evidence:** Buyer readers on v5 and v6, three of four: "the footer says 'investor-focused brokerage' and 'DSCR financing', and that made me think they are for investors, not for a retired couple from Ohio." "Would I call this company? Maybe ... the footer talks about investor loans and flips." Reviewers and owner-eye graded "sitewide template items" as out of scope. The owner-eye v11 on Seasons also flagged a second dark CTA box right after the page's own.
- **Caught by / earlier:** Buyer readers. Earlier: the reviewer grades the whole served page and files frame problems to the site fix list with the page's release.
- **In the skill now?** No. The footer is on the audit fix list as a claims issue, not as a reader-fit issue.
- **Class:** design and layout; reader and plainness.
- **Saved:** the "would you call" answer on every page.

### L25. A picture or an icon is a claim.

- **Lesson:** An image says something is true. A golf flag on a golf cart card says there is golf. A paddle says there are courts. A drawing of a house on a card about classes says nothing true. Choose each image for the exact fact in its words, or use words alone.
- **Evidence:** Owner-eye v11 on Seasons: "The golf cart card has a golf flag on it ... A buyer will think there is golf, and we cannot say yet whether there is." The earlier pickleball paddle on Seasons. Owner-eye v9 on Grande Dunes: "'Classes and dinners' shows a house. 'Clubs' ... shows playing cards." Review 4 checked photos for logos and people but not for what each image implies.
- **Caught by / earlier:** Owner-eye. Earlier: the fact check covers images and icons, not only sentences.
- **In the skill now?** Partly. `CRAFT.md` section 4 "Every icon has a word beside it. The fact is in the words, not the icon." It does not say the icon itself must not imply a fact.
- **Class:** visuals and photos; facts and truth.
- **Saved:** 2 owner-eye items.

### L26. The first screen holds the answer.

- **Lesson:** On a phone, the first screen shows the headline, who wrote it, and the first sentence of the answer. A small row of key facts with words can share it. A large photo, a stack of buttons or a long contents list above the answer pushes it away and reads as an ad.
- **Evidence:** Review 3 and Review 4: "On a phone the first screen holds the header, H1, byline, sub and CTA. The first picture starts about 1,400 pixels down." The design report: readers spend 74 percent of viewing time in the first two screens (NN/g 2018). Version 6 put a large photo near the top; the owner called it awkward. A ten-item "On this page" list pushed the first section down on Seasons (page grader).
- **Caught by / earlier:** Reviewers, design research, owner. Earlier: the design research should have preceded v6, not followed it.
- **In the skill now?** Yes, general: `CRAFT.md` section 4 design bullets; STANDARD H16.
- **Class:** design and layout.
- **Saved:** part of v6 to v8.

### L27. Say each fact once, where it belongs.

- **Lesson:** Repetition reads as padding and makes the reader wonder if they missed a difference. State a fact in the section that owns it. A map, a chip and a sentence that all say "10 minutes" are three statements of one fact.
- **Evidence:** Owner-eye v11 on Seasons: "'About 10 minutes' to the beach is on the page seven times." Owner-eye v9 on Grande Dunes: the beach club in five places, the fee in four, "an agent reads the rules with you" in four. Review 4: the Grande Dunes short answer repeated the sub word for word; Myrtle Trace said "about 3 minutes" three times at the top.
- **Caught by / earlier:** Owner-eye, reviewers. Earlier: a repeat count per fact in the reviewer pass.
- **In the skill now?** Partly. P8 "Leave out what only shows how much we know"; SHAPE-8 filler. No rule says "once".
- **Class:** reader and plainness; design and layout.
- **Saved:** several owner-eye items each round.

### L28. Lead with what the reader uses every day. Good news first, in every part.

- **Lesson:** Of all the good things, lead with the one the reader will live with daily, not the one that is most unusual. And "good first, then the drawbacks" applies inside each section and each comparison, not only to the page.
- **Evidence:** The Grande Dunes page led with a beach club 8 minutes away and was "almost silent on the neighborhood's own clubhouse, courts and pools" (owner-eye v9). A retiree "types 'pickleball'. He gets nothing." Owner-eye v11 on Seasons: the comparison intro said first "the part where Seasons is farther". The fix: "Seasons usually sells for less than either Del Webb, and it is closer to the beach than Myrtle Trace." The owner, 10-06: "and of course we always lead with the good then bad."
- **Caught by / earlier:** Owner-eye. Earlier: a reviewer question per section.
- **In the skill now?** Partly. BUYER-1 and `CRAFT.md` section 3 cover the page order. Not the daily-use rule or per-section order.
- **Class:** content choice.
- **Saved:** 1 owner-eye round on one page.

### L29. Each sentence must be safe if quoted alone.

- **Lesson:** Search engines and AI tools lift single sentences and paragraphs. A sentence that starts "It is", a story line about "an agent at Chapter3" without its "Example" label, or a figure without its group will be quoted wrong. Name the subject in each answer sentence, keep the label with the story, and keep local facts out of invented stories.
- **Evidence:** Review 4: "Quoted without the 'Example:' label, each reads as a real client." The SEO grader: "Ruth bought a house in Myrtle Trace" could be lifted as fact, and an "It is inside the city" opener has no subject. Review 4 found a Myrtle Trace example claiming houses near the beach were "a long drive from a hospital", a claim about the area inside a story.
- **Caught by / earlier:** Reviewers, SEO grader.
- **In the skill now?** Yes for stories (`STORY-CRAFT.md` checklist). Not as a general writing rule in `CRAFT.md` section 5.
- **Class:** SEO/AEO; legal and safety.
- **Saved:** a legal risk and 2 review items.

### L30. Ask the owner only what nothing else can answer. Decide the rest.

- **Lesson:** The owner is the teacher and the final approver, not a research desk. Before you ask, check the sources, the story bank and the rules. Ask only for a fact only he has, a business decision only he can make, or approval. Ask once, in one place, with your proposed answer.
- **Evidence:** Review 1 sent seven owner questions. The owner, 10-06: "Two questions from the review I can't answer: you answer these im almsot a useless resource for you im just an editor and approver but I dont want to even look at your work very often so you need to rely on yourself and do what you think is best." And "i dont know anything bout any HOA's activities you are the leader and the researcher". Review 4 later split its questions: "The other open items have a source and go to the researcher, not the owner."
- **Caught by / earlier:** The owner. Commit 489027e recorded "Claude decides, the owner approves".
- **In the skill now?** Yes: `CLAUDE.md` non-negotiable, `WORKFLOW.md` Roles. General.
- **Class:** process and quality control.
- **Saved:** owner time in every round.

### L31. A stand-in for the owner can stretch his words. Check the stand-in too.

- **Lesson:** An agent that reads as the owner learns his quotes, not his judgment. It can turn "show Chapter3's skill" into a clever rule-counting story, or "story near the end" into a required section on every page. Its output still needs a cold reader, and its pet rules need the owner's own test: is it simpler for the reader?
- **Evidence:** Owner-eye v9 on Grande Dunes asked for the agent's skill to be "the rule counts nights in any 12 months in a row, not per calendar year ... lays the summer and the Christmas week on a calendar". Owner-eye v10 asked to make that sentence matter "(for example, the boys come at Christmas and again the next summer, and the agent counts both inside one 12 months)". v12 owner-eye graded the result 9 of 10. The owner called it "impossible to understand". `prompts/owner-eye.md` now asks "Is there a story near the end with tension" for every page, which turns one comment into a fixed part.
- **Caught by / earlier:** The owner. Earlier: cold retell after each owner-eye round.
- **In the skill now?** Partly. The cold retell was added to `prompts/owner-eye.md`. The risk of a proxy stretching a quote is not written down.
- **Class:** process and quality control; story.
- **Saved:** 1 version and one owner correction.

### L32. Record lessons in the form they arrive, including praise.

- **Lesson:** The memory of corrections must fit how the teacher gives them. This owner gives general verdicts and a few examples, not edited drafts. Record each verdict, the quote, the class, and what changed, the same day. Record what he praised too, so it is kept.
- **Evidence:** `voice/edits.jsonl` has 255 records and none after 2026-10-06, though the owner corrected the pages on 10-07, 10-10 and 10-11. `tools/record-edit.js` diffs a draft against an edited draft, and the owner never sends edited drafts. He praised the clubs, activities and icons (10-11) and the Blackmoor real story was graded "the most persuasive thing on any of the four pages"; neither is recorded as a thing to keep.
- **Caught by / earlier:** The process grader.
- **In the skill now?** No. `CRAFT.md` section 8 and RULES "Keeping this current" assume sentence edits.
- **Class:** process and quality control.
- **Saved:** the repeat corrections in L5.

### L33. Keep the skill small and consistent. Every file must agree.

- **Lesson:** A new correction should replace or merge a rule, not add one. When a rule changes, every file that carries it changes in the same commit: the craft, the rules, the standard, the prompts, the templates, the model examples. A stale example teaches the old mistake.
- **Evidence:** The writer reads about 3,000 lines: 86 voice rules, 73 standard IDs, 60-plus review questions, three summary lists (`GRADE-process.md` problem 5). Contradictions found now: `prompts/writer.md` says examples "show the arithmetic", which `STORY-SIMPLE.md` forbids; `STORY-SIMPLE.md` says "shorter than STORY-CRAFT's 5 to 8" while `STORY-CRAFT.md` says four to six; the published Grande Dunes model story has two visits, which its own test 6 forbids; the North Myrtle Beach model story still says "house plan" and "the city's renting rules", which v13b removed from the page; `RULES.md` counts "PLAIN 9" while P10 exists, and P10 sits above P9.
- **Caught by / earlier:** The process grader; this review.
- **In the skill now?** Proposed in `GRADE-process.md` (a writer card of 15 rules; merge, do not add). Not done.
- **Class:** process and quality control.
- **Saved:** prevents the next batch from relearning reversed rules.

### L34. Put a general check in a shared tool, not inside one batch.

- **Lesson:** When a check applies to any page, build it where every page passes through it: the scorer, the generator, the reviewer pass. A check inside a batch's own kit disappears with the batch.
- **Evidence:** The simple-story machine check (no "if", one number at most, 4 to 6 sentences, none over 25 words) lives in `batches/2026-10-a/specs/_55-plus-kit.js` `story()` (commit 4837e82). The next batch's specs will not require that kit.
- **Caught by / earlier:** This review.
- **In the skill now?** No.
- **Class:** tools and engineering.
- **Saved:** the next story failure.

### L35. A list is a floor, not the rule.

- **Lesson:** A word list or a pattern catches only what is on it. It is useful as a minimum and harmful as a definition: writers learn to pass the list. Keep the rule as a reason ("a word the reader would look up"), and use the list to catch the common cases.
- **Evidence:** `RETRO.md` rewrite round: "Words a gate passes. Homestead exemption, homesite, transfer fee, Zone X, wind pool. None is banned, and each stopped a reader." Later: "villa", "master association", "Heel Tract", "day dock", "Grand Strand", "FEMA". The story check counts digits, so "two grandsons" and "90 nights in any 12 months" passed as one number (`STORY-RETELL-v13.md`). STANDARD P1 checks only exact amounts of $10,000 and up. The original voice rules say it: "A check that matches a list only catches that list."
- **Caught by / earlier:** Buyer readers, owner-eye, cold reader.
- **In the skill now?** Yes, as a warning at the top of `RULES.md` and in "What no check enforces today". General.
- **Class:** tools and engineering; reader and plainness.
- **Saved:** several reader stops per round.

### L36. Review what the reader will see, freshly built.

- **Lesson:** Judge the served page at real phone width, after a full slow scroll so every lazy image loads, from the current build. Check that screenshots are newer than the HTML. Check that your copy of the live site is current before you state how the live site looks.
- **Evidence:** Owner-eye v9: "the built HTML (04:19) is two minutes newer than the screenshots (04:17)", and the two disagreed. Blank lazy images and unstyled screenshots of the raw draft were captured early. The assistant told the owner the live text was 15.5 px from a stale clone; it was already 17 px after his 10-02 deploy. Owner-eye v12 saw a blank image box and blamed capture timing.
- **Caught by / earlier:** Owner-eye, the assistant itself.
- **In the skill now?** Partly. `CRAFT.md` section 7 says open it at 375 px and with the largest text. Freshness and full scroll are in the v13b to v13d owner-eye method, not in a prompt.
- **Class:** process and quality control; tools and engineering.
- **Saved:** a wrong statement to the owner; review noise.

### L37. Test an integration where it will run before building on it.

- **Lesson:** Before building a page feature on an outside service or a site component, prove it works in the real page, under the site's own rules. A map embed, a button class, a font, a script.
- **Evidence:** The Google keyless map embed was built into v5 and refused in a frame (X-Frame-Options); the owner: "the google maps API didnt work". The map buttons used button classes the site audit reserves for contact, phone and tools, and failed `build.js audit`. A story opener ("Here is how a Chapter3 agent...") was proposed to the owner before checking that the site audit bans the opener.
- **Caught by / earlier:** The owner, the site audit.
- **In the skill now?** No.
- **Class:** tools and engineering.
- **Saved:** part of v5 and v6.

### L38. Name the drawbacks, kindly, in their own place.

- **Lesson:** Readers trust a page that says what is hard, and they search for it ("reviews", "pros and cons"). After the good news, give a short plain list of what owners or users find hard, from verified facts, with what to do about each.
- **Evidence:** SEO grader: "Reviews is the second [search modifier] ... there is no section on drawbacks." Buyer reader on Myrtle Trace v5: "it is honest about drawbacks: the golf balls, no fences, no sheds, you take care of your own roof", and it was the page the readers trusted most. The assistant's ranking on 10-11 named "what owners like and don't like" the biggest missing piece.
- **Caught by / earlier:** SEO grader, buyer readers.
- **In the skill now?** Partly. `CRAFT.md` section 3: "what it costs and what could go wrong, plainly". `templates/must-answer.md` item 11 for 55+ pages only.
- **Class:** content choice; SEO/AEO.
- **Saved:** a search modifier on four pages.

### L39. The title carries what people search; the headline can be the human question.

- **Lesson:** The title tag and description should hold the words people type (the subject's name, "fees", "rules", "pros and cons"). The visible headline can be the warmer question a person asks. Both must promise only what the page gives.
- **Evidence:** All four titles used one template, "Living in X", with no fee or rules words; the Grande Dunes title had no "55+"; descriptions promised "the costs" on pages without the fee (`GRADE-seo.md` section 2). The v1 titles ("Prices and 55+ Rules") were closer to search but put price in the headline, which the owner rejected.
- **Caught by / earlier:** SEO grader.
- **In the skill now?** STANDARD S1, S2, S9 check length and uniqueness. The split between title and headline is not written in `CRAFT.md`.
- **Class:** SEO/AEO.
- **Saved:** clicks, not versions.

### L40. Link in sentences, both ways, including from older pages.

- **Lesson:** A new page links up to its hub and across to the guides the reader needs next, inside sentences whose words say what the target answers. Older pages that already name the subject get a link to it. A link only in a table cell or a breadcrumb is weak.
- **Evidence:** No spoke linked to the hub in the body; the hub linked only from table cells; four older pages named the communities with no link; the spokes did not link the retiree tax page or the closing-fee page. `score.js` passed the link rules because it counted /contact/ and the table (`GRADE-seo.md` section 4).
- **Caught by / earlier:** SEO grader.
- **In the skill now?** STANDARD S7, S8 and the writer prompt's link rule. The "older pages that name it" sweep is not written.
- **Class:** SEO/AEO.
- **Saved:** cluster strength.

### L41. Structured data names the subject as a thing, and every trust claim in it must be true.

- **Lesson:** Schema should say what the page is about (a place, a product, a law) with its own entity, not point at the company. Every trust field must be true and resolvable: the reviewer must have reviewed, the author anchor must exist, the author's listed expertise must fit the page.
- **Evidence:** `GRADE-seo.md` section 5: `reviewedBy` on the wrong type, `about` pointing at the brokerage, no Place entity, author @ids pointing to anchors that do not exist, the author's knowsAbout listing "Mortgage financing" and "DSCR loans" on a 55+ page.
- **Caught by / earlier:** SEO grader.
- **In the skill now?** Partly in STANDARD S rules. Not in `CRAFT.md`.
- **Class:** SEO/AEO; legal and safety.
- **Saved:** one grade step.

### L42. A trust signal must be true.

- **Lesson:** "Reviewed by", "verified", "a couple", "our client", a visit date: each tells the reader something happened. If it did not happen, it is worse than saying nothing. Ask once, and remove it until it is true.
- **Evidence:** Every page says "Reviewed by Tim Nash, Broker-in-Charge"; Reviews 3 and 4 and the assistant asked three times whether Tim reviews pages; unanswered. The hub says Seasons is "Verified gated"; nothing current verifies it. The story bank's summary of the real Blackmoor story added "a couple", which the verbatim source does not say (Review 4; commit 52d07ac).
- **Caught by / earlier:** Reviewers.
- **In the skill now?** Partly: STORY-2, `stories.json` limits. The "Reviewed by" line is an open question, not a rule.
- **Class:** legal and safety; facts and truth.
- **Saved:** a credibility risk on every page.

### L43. Link sources a person can read.

- **Lesson:** A source link in the body goes to a page a reader can read: a map search, a report, a rule. Keep raw data queries (API URLs) in the ledger.
- **Evidence:** Review 1: "On all four pages, the body links to FEMA (and the Census geocoder and CMS) go to API queries. A buyer who clicks 'FEMA's map' sees raw data."
- **Caught by / earlier:** Reviewer 1.
- **In the skill now?** In `RETRO.md` item 4 and the writer brief. Not in `CRAFT.md` or STANDARD.
- **Class:** reader and plainness; SEO/AEO.
- **Saved:** one review item per page.

### L44. Method goes in the sources line.

- **Lesson:** How a number was found (which router, which date range, which ZIP, which sample) is for the ledger and the sources line. The sentence says the number and what it means.
- **Evidence:** `RETRO.md`: "Policies that began from June 2025 to May 2026 in the whole ZIP code" reads as a report. "Estimates on OpenStreetMap roads" in body copy. The buyer reader: "'Median', 'half of those policies', 'began from June 2025 to May 2026' are statistics language. I skipped everything after '$602'."
- **Caught by / earlier:** Reviewer, buyer reader.
- **In the skill now?** Yes: PLAIN-8, BUYER-3, `CRAFT.md` section 5. General.
- **Class:** reader and plainness.
- **Saved:** one round of local fixes.

### L45. Name places by what the reader knows.

- **Lesson:** Give distances and directions from a point the reader can picture: the main entrance, the clubhouse, the beach. A street address, a road number or a parcel name means nothing to someone from away.
- **Evidence:** Buyer reader on v2: "'From 1285 Possum Trot Road, the HOA's onsite office.' I do not know where that is." The owner, 10-07: "people out of state don't know roads or anything about the city at all including where this community is". Review 3 and 4 flagged "14th Avenue South", "Grand Strand", "Heel Tract".
- **Caught by / earlier:** Buyer reader, owner.
- **In the skill now?** Yes: PLAIN-1, P4, `CRAFT.md` section 1 and 4 ("Never name something the reader cannot picture"). General.
- **Class:** reader and plainness.
- **Saved:** one owner correction.

### L46. Give real-world numbers, not best-case numbers.

- **Lesson:** A drive time without traffic, a starting price without options, a fee without the extras: each is true and misleading. Say the number the reader will meet, or give the range and say when it is longer.
- **Evidence:** Page grader: "'beach about 15 minutes' is a no-traffic estimate ... A retiree who drives it in July will notice." The fix added "rush hour adds 5 to 10 minutes" from the story bank's traffic note. The buyer reader asked of "From $585,990": "is that the real price of a house I could buy today, or only a 'starting at'?"
- **Caught by / earlier:** Page grader, buyer reader.
- **In the skill now?** No.
- **Class:** facts and truth.
- **Saved:** a trust risk.

### L47. Dates: set by machine, shown once, and compared like with like.

- **Lesson:** Never type a date. Show the reader one date, in the byline. Keep dates out of captions and body copy. When two figures are compared (across pages or in a table), they must be from the same year or rule set, or the difference must be said.
- **Evidence:** The owner, 10-07: "you also are mentioning the date so much". Photo captions said "from above in 2023"; sources lines said "Read October 5, 2026" when rows were read October 7. Review 3: North Myrtle Beach gave tax at 2026 rates and the other three at 2025 rates, so "a buyer comparing the pages compares two tax years."
- **Caught by / earlier:** Owner, reviewers, owner-eye.
- **In the skill now?** Yes: PLAIN-6, STANDARD P3, `CLAUDE.md` "Never type a date". The like-with-like comparison is not written.
- **Class:** facts and truth; reader and plainness.
- **Saved:** one owner correction.

### L48. A story's tension must be real, and the agent's act must be a service on record.

- **Lesson:** A story earns its place when it shows a real problem for this subject (from a verified fact) caught by a skill the company really uses (from the story bank or an owner answer), before it cost the reader. Do not invent a service, a fine or a saving.
- **Evidence:** The owner, 10-11: "the story should also be showing Chapter3's skill and have some tension involved somewhere." Owner-eye v9: "Anyone can read a paper." Review 1 removed a CTA promising to "Read Pulte's contract", which no owner answer recorded. The owner, 10-06: "if a buyer needs us to read the HOA we will so keep it", which made the HOA-reading service usable.
- **Caught by / earlier:** Owner, reviewers.
- **In the skill now?** Yes: `STORY-CRAFT.md`, STANDARD T2, RULES CTA-1. General for this business.
- **Class:** story; legal and safety.
- **Saved:** 1 version.

### L49. A real story beats an invented one. An invented one must carry a fact.

- **Lesson:** Look for a true story first. A labelled example is a teaching device; if it adds no fact or decision, it costs a phone screen and some trust. Several invented stories with the same shape read as a template.
- **Evidence:** Page grader: "The Blackmoor story is the most persuasive thing on any of the four pages, because it is true and local. It is buried." And: "The invented 'Example' stories cost more than they give. All four use the same shape ... Readers who notice they are invented trust the page less." SEO grader: the four examples share one arc, "a closing image on the first Saturday or Tuesday", and "side by side the template shows".
- **Caught by / earlier:** Graders.
- **In the skill now?** Yes: `STORY-CRAFT.md` "Real story first"; "Not another page's story with a new name". General.
- **Class:** story.
- **Saved:** the story rewrites of v6 and v8.

### L50. One clear offer per page, tied to the page's gap.

- **Lesson:** A call to action offers one concrete thing the reader cannot easily get alone, ideally the thing the page could not fully answer. Use one label consistently. Several vague calls with changing labels read as sales and get ignored.
- **Evidence:** Page grader: "Four or five per page, with labels that change each time ('Speak to an expert', 'Let us make it simple', 'Talk to a specialized agent', 'Call to learn more')." Proposed: "We will send you the current HOA fee, the rules and the last 10 sale prices." The buyer reader, v2: "It is the third time I am asked to call about HOA documents. By now I wonder why the company cannot just tell me the dues."
- **Caught by / earlier:** Page grader, buyer reader.
- **In the skill now?** RULES CTA-1 to CTA-4 and STANDARD H5 (two in the article). The "offer fills the page's gap" idea is not written.
- **Class:** content choice; design and layout.
- **Saved:** conversion, not versions.

### L51. Let the subject choose the shape, all the way down.

- **Lesson:** Two pages on different subjects should differ in their order and sections, not only in their opening. A section that is one plain answer on one page (no flood risk) should be one line in the FAQ there, not a full section written four ways to avoid repeated sentences.
- **Evidence:** Review 4: "Each page opens well, then all four run the same later sections in the same order. The flood sections are one template written four ways so no sentence repeats." The owner, 10-10: "you arent learning templates you are learning a skill". The WRITER-BRIEF and REWRITE-PLAIN both gave a numbered section list for every page.
- **Caught by / earlier:** Review 4, owner.
- **In the skill now?** Yes: `CRAFT.md` section 3 "There is no fixed list of sections." But `prompts/writer.md` still says "One table and one figure" and "Two CTAs" for every page, and the brief templates still list sections.
- **Class:** content choice; design and layout.
- **Saved:** part of v8 to v10.

### L52. Know the verifier's common catches, and avoid them when researching.

- **Lesson:** Researchers repeat the same mistakes. Before saving a row, check: Is a range computed over every case, or only two samples? Is a marketing description from years ago stated as today? Is an announcement date a start date? Is "including" a full list? Is a person's estimate a decision? Is the paragraph the current version, or amended later? Is a geocoder's road label the real address? Is a source's number possible (400 acres in a 159-acre place)?
- **Evidence:** The 30 wrong rows' verifier notes (see L15). About 8 percent of first-pass rows were wrong (`RETRO.md`: 21 of 266).
- **Caught by / earlier:** Separate verifiers, every time. That part works.
- **In the skill now?** No as a checklist for researchers. `prompts/researcher.md` does not list these patterns.
- **Class:** facts and truth.
- **Saved:** verifier rework, about 8 percent of rows.

### L53. When the obvious source is closed, find a lawful one.

- **Lesson:** Respect robots files and site terms. Then look for the same fact in a public record, a second publisher, or the owner's own data. Use at least two independent sources for a figure that is not from a primary source, and have a separate agent verify it.
- **Evidence:** Zillow listing pages are disallowed by robots.txt; prices came from the county deed index (v3). HOA fees came from two listing sites on the same MLS feed, with a verifier (commit 066ed62), after five days. The verifier found missing listings at the year boundary, which changed the ranges but not the common figures.
- **Caught by / earlier:** The researcher. Earlier: same day as the gap (L2).
- **In the skill now?** Yes: `CLAUDE.md` listing-sites rule, `templates/research-brief.md`. Specific to this industry, but the principle is general.
- **Class:** legal and safety; content choice.
- **Saved:** see L2.

### L54. Every image needs a license record before it touches a page.

- **Lesson:** Use only images you made, images with a clear free license and credit, or public-domain government images. Never a builder's, a listing's, a news or a map provider's image, never a logo or a person as the subject, and never an AI image of a real place. Record the license for each file, and let the build refuse an image without one.
- **Evidence:** The owner, 10-10: "Are we making sure we cant get trademarked or sued for the images though?" `rules/images.md`; `tools/photos.js` refuses an image without a record. Review 4 opened five photos to check for signs, art and people. USDA and NOAA aerials gave real pictures of the communities themselves when no free ground photo existed.
- **Caught by / earlier:** Built into the tools.
- **In the skill now?** Yes: `CLAUDE.md`, `rules/images.md`, `tools/photos.js`. General.
- **Class:** legal and safety; visuals and photos.
- **Saved:** legal risk.

### L55. First-hand evidence is the strongest content. Ask for it early.

- **Lesson:** A photo you took, a visit, a real client story, a number from your own files: these are what no competitor can copy, and what search engines call experience. Ask for them at the start of a batch, with a short shot list, not at the end.
- **Evidence:** Every buyer reader asked to see the homes. The page grader: "nothing on the page shows we have been there." Competitors had 14 to 26 photos of each community. The assistant first asked for team photos on 10-07; `templates/photo-shot-list.md` and owner question 1 were filed on 10-11.
- **Caught by / earlier:** Buyer readers, graders.
- **In the skill now?** Partly: `templates/photo-shot-list.md`, STANDARD T2. Not in `CRAFT.md` section 4.
- **Class:** content choice; visuals and photos; SEO/AEO.
- **Saved:** the largest remaining gap in page grades.

### L56. Old data: state the lasting facts plainly, drop the changeable ones, never announce age.

- **Lesson:** If a fact rarely changes and being wrong could not hurt the reader, state it plainly with no date. If it changes and a reader could act on it, use it only if you judge it is still true and low risk, otherwise leave it out. Never write "this is outdated". If there is no good data on a topic, leave the topic out.
- **Evidence:** The owner, 10-10: "if the only data you have is outdated use what you think would still be true or you think doesnt have an realistic chance of actuqlly getting us in trouble and then dont mention its outdated if there is no data thats good on a topic then just diont mention it." Review 4's PLAIN-9 table shows the calls (pet limits and cart rules from a 2019 copy cut; one-story design descriptions kept).
- **Caught by / earlier:** The owner.
- **In the skill now?** Yes: PLAIN-9, `CRAFT.md` section 2. General.
- **Class:** facts and truth.
- **Saved:** 1 version of dated hedges (v5 to v6).

### L57. Record a legal risk the owner accepts, with his words.

- **Lesson:** When the system flags a legal risk and the owner decides to accept it, write down the risk, the law, the owner's decision and his words, and keep the pages the system writes inside the safer line.
- **Evidence:** The hub lists Cypress Village and Cresswind as 55+; no recorded age rule was read for either; the system cited 42 USC 3604(c). The owner, 10-06: "google says their 55+ its enough protection to me." The batch kept both off its own pages and recorded the answer in `PLAN.md`.
- **Caught by / earlier:** Researcher and reviewer.
- **In the skill now?** In `PLAN.md`. Not as a general rule.
- **Class:** legal and safety.
- **Saved:** a clear record if the risk is ever raised.

### L58. Keep what the owner praised.

- **Lesson:** Praise is a correction in the other direction. When the owner or a reader likes something, record what it was and why, so the next page keeps it and a later rule does not remove it.
- **Evidence:** The owner, 10-11: "very good info about the clubs and activities and icons by the way very good." 10-05: "great work on the example". Buyer readers: the small neighborhood map was "the best thing on the page"; the Ruth story's circle on a paper map was what they remembered. Some of these were later changed by rules (the stories were rewritten twice).
- **Caught by / earlier:** Nobody records it.
- **In the skill now?** No.
- **Class:** process and quality control.
- **Saved:** prevents losing what works.

### L59. Comparison tables: the columns the reader compares, one group per column, readable on a phone.

- **Lesson:** A comparison table answers "which one?" Give it the few columns a reader decides on, in their words. Every cell in a column must describe the same group (resales, or all sales). On a phone, show rows as cards so nothing is cut off.
- **Evidence:** Review 1's table had "Declaration recorded" and "Other residents" columns. The buyer reader: "No prices in this table. I wanted to compare prices." "Shortest lease, Youngest other resident. Strange headings." Review 3: the price column was cut off on phones. Review 4: "Homes usually sell for" mixed new and resale. The page grader: no fee column.
- **Caught by / earlier:** Buyer readers, reviewers.
- **In the skill now?** In REWRITE-PLAIN for this batch. Not in `CRAFT.md`.
- **Class:** design and layout; facts and truth.
- **Saved:** 2 review items per round.

### L60. Small text in cards, maps and credits fails older readers too.

- **Lesson:** The body text rule applies to everything a reader must read: card labels, map labels, captions, table headers. Measure them on a phone.
- **Evidence:** Page grader: "Quick-fact cards and map labels are small (11 to 14 px)." Buyer reader on Myrtle Trace: the maps have "too much tiny print for a phone". Map labels collided on v5 (Review 3).
- **Caught by / earlier:** Graders, buyer readers.
- **In the skill now?** STANDARD H13 sets captions at 16 px or more. Cards and map labels are not named.
- **Class:** design and layout.
- **Saved:** one design round.

### L61. Pictures sit one at a time, each under its sentence.

- **Lesson:** Do not stack images. Two pictures in a row, or six in a section, leave the reader with screens of images and no text to say what they show.
- **Evidence:** Owner-eye v9: "The 'Where is it' section has six pictures in a row." v13b: "Two aerials stacked back to back ... a screen and a half of aerial photo with no text." Buyer reader on v6: "Two of the three Conway photos are hidden in a sideways row I did not know to scroll."
- **Caught by / earlier:** Owner-eye, buyer readers.
- **In the skill now?** Partly: P10 "A photo of the area goes only beside the sentence about that place."
- **Class:** design and layout; visuals and photos.
- **Saved:** owner-eye items.

### L62. Measure cost and time per stage, against a budget.

- **Lesson:** Record tokens, agent count, wall time and owner minutes for each stage of each batch. Set a budget per page. When a batch runs over, stop and report it in one line.
- **Evidence:** Only one cost figure exists: about 7 million tokens for version 1 (`RETRO.md`). The grader estimated 20 to 35 million for four unshipped pages. The scratchpad reached 7.1 GB. The owner's goal, 10-04: "5 pages will take over 6 hours right now and I think with AI we can get it way down to just an hour or so."
- **Caught by / earlier:** Process grader.
- **In the skill now?** Yes: `WORKFLOW.md` audit rule 9. General.
- **Class:** cost and speed.
- **Saved:** makes the next overrun visible on day one.

### L63. One working tree per agent. Only passing work is committed.

- **Lesson:** Agents that change files work in their own copy. One coordinator commits, and never with a failing test. A tool that rewrites a data file must keep its format.
- **Evidence:** 15 work-in-progress commits, one "tests not final" (3ddf30e). An agent deleted and re-cloned the website copy and broke the draft worktree. `json.dump` reformatted all of `stories.json`. Two website clones of 114 MB and 262 MB.
- **Caught by / earlier:** Process grader.
- **In the skill now?** Yes: `WORKFLOW.md` audit rule 7.
- **Class:** tools and engineering.
- **Saved:** repair time.

### L64. Decide how pages reach the live site before the first draft.

- **Lesson:** Patches against a moving site break. Agree on one delivery path (a pull request the owner merges, or a package with commands), test it on the live branch, and keep it current through the batch.
- **Evidence:** Six website patches must be applied in order; `mkpage.patch` broke once when the live branch moved; the built pages live only in a scratchpad clone. The assistant asked the owner on 10-11 whether to open pull requests; unanswered.
- **Caught by / earlier:** Process grader.
- **In the skill now?** `WORKFLOW.md` audit rule 10 (done means live). The delivery path is open.
- **Class:** tools and engineering; cost and speed.
- **Saved:** the "nothing ships" grade.

### L65. Explain a weakness by its upstream cause.

- **Lesson:** When a page is weaker, shorter or vaguer, look first at what went into it: fewer verified facts, a missing source, a weak picture source. Fix the input, then the page.
- **Evidence:** The owner asked why North Myrtle Beach was shorter. The answer: its HOA rules are not online, so its ledger had fewer facts, the town section was cut for lack of verified rows, and its aerial was a close crop of a 60 cm image. The fix was 28 new ledger rows and a 2026 NOAA aerial (commit f2a18fb), not more writing.
- **Caught by / earlier:** The assistant, after the owner asked.
- **In the skill now?** No.
- **Class:** process and quality control; content choice.
- **Saved:** a rewrite that would not have fixed the cause.

---

## Part 2. The process lessons

### 2A. Where versions were spent

| Version | Date (UTC) | What drove it | Avoidable? | Lesson that would have avoided it |
|---|---|---|---|---|
| 1 | 10-05 22:43 | First drafts from verified rows; score 100 | Needed | |
| 2 | 10-06 04:08 | Owner: technical, records-first, industry words | Yes | L1, L3, L17. STRUCT-7 and WORD-1 already existed. |
| 3 | 10-06 23:10 | Sale prices from the county deed index | Yes, fold into v1 | L1, L8, L53 |
| 4 | 10-07 00:39 | "More detailed" examples, read as more numbers | Yes, wrong direction | L8 |
| 5 | 10-07 02:40 | Owner's outside reader: exact numbers, dates, words | Mostly | L4, L5. The v2 buyer reader had flagged both. |
| 6 | 10-10 22:28 | Maps v2, photos, drawings, story research, hero photo | Mostly | L7 (scope), L9 (hero photo), L37 (map embed) |
| 7 | 10-11 02:14 | Design research and website patches | Mostly | L7. The research should precede building. |
| 8 | 10-11 03:07 | Owner: story near the end, tension, on-topic photos, no top photo | Partly | L9 (CRAFT section 4 already said it) |
| 9 | 10-11 04:22 | HOA fees, home facts, aerials | Yes, fold into v1 | L1, L2 |
| 10 | 10-11 04:51 | Owner-eye on v9 (6 to 7 of 10) | Partly | The owner-eye was new and useful; many items repeat L18, L27, L28. |
| 11, 11b | 10-11 05:13 | Owner-eye on v10; short headings | Partly | L12 (headings) |
| 12, 12b | 10-11 05:39 | Place names back in headings | Yes | L12 |
| 13 | 10-11 07:34 | Owner: NMB weaker; Grande Dunes story impossible | Yes | L10, L13, L31, L65 |
| 13b, 13c, final | 10-11 07:44 to 08:41 | Independent reviews after a self-grade of 9 | Yes | L6 |

Count: 13 numbered versions and 5 lettered ones, 18 builds in all. About 10 of the 13 numbered versions were avoidable in whole or large part. Of the owner's 4 rounds, 3 found things a cold reader or an existing rule could have found.

The specs took 3,603 added lines and 2,572 deleted lines to reach 1,031 lines: about three and a half full rewrites (`GRADE-process.md`). The stories alone were rewritten six times: worked examples with arithmetic (v1), number-heavy examples (v4), simple stories with Chapter3 removed (v6), present-tense agent with tension (v8), calendar counting (v10 to v12), the simple test (v13).

### 2B. What the owner caught that the checks did not

| Owner's catch | Machine gates | Reviewer | Buyer reader | Owner-eye | First to catch |
|---|---|---|---|---|---|
| Technical, records-first lead (v1) | Score 100 | 75 fixes, none on this | Not run yet | Not built | Owner |
| Industry words: "plans", "AAM", Pulte | No list yet | "Define AAM" (define, not replace) | Not run yet | Not built | Owner |
| Price in the headline (v1, v4) | No check | Not flagged; the writer brief asked for it | Liked it ("the price is the first thing") | Not built | Owner |
| Exact numbers, too many, dates (v4) | No check yet | Not flagged | **Flagged on v2**, fixed locally | Not built | Buyer reader first; owner's reader made it a class |
| "Where is it?" for people from away | No check | Not flagged | **Flagged on v2** ("I do not know where that is") | Not built | Buyer reader first; owner made it a class |
| Questions answered with "go read" | No check | Called "the honest answer" | **Flagged on v2** | Not built | Buyer reader first; owner made it a class |
| Awkward top photo (v6, v7) | Passed | Not flagged | Noted photos not of the place | Not built | Owner and grader, same day |
| Story placement and tension | No check | Not flagged | Not asked | Not built | Owner |
| Photos off topic | Passed | Checked licenses only | **Flagged on v6** | Not built | Buyer reader first |
| NMB weaker and shorter (v12) | Passed | Not run | Not run | **Graded 9 of 10** | Owner |
| Grande Dunes story impossible (v12) | Passed | Not run | Not run | **Graded 9; had pushed the counting** | Owner |

What this shows: the buyer reader caught three owner corrections a day or more early. Its findings were treated as sentence fixes, not as classes (L5). The rule-based reviewer never caught a reader-value problem first, and once endorsed a records-first table and a "go ask" answer. The owner-eye stand-in raised quality from 6 or 7 to 9, but it judged pages one at a time (L13) and stretched one of the owner's quotes (L31).

### 2C. Where self-review overrated the work

1. Version 1 scored 100 on all four pages, which the team reported as ready. The owner sent all four back.
2. 10-06: self-grade B-, with "Facts and legal safety A". Graders on 10-11: facts B+, process D to F.
3. 10-10: the assistant told the owner the readers' grade rose to 8 and "every reader could retell the story". The page grader the next day called the stories a template that cost more than they gave.
4. Owner-eye v12 (a stand-in, not the writer, but built from the same rules) graded all four pages 9. The owner found one page clearly weaker and one story impossible.
5. v13: the writer graded its own page 9 and described the photos wrongly. Independent: 8, with eight fixes.
6. `STORY-RETELL-v13.md`: the writer's own retell passed Grande Dunes with "No stumble". A cold reader counted nights in their head.
7. 10-11 19:11: the assistant ranked the pages A-, B+, B, B- for SEO. The independent SEO grader that morning gave B+, B-, B- and C+, before some fixes; the ranking named no grader and was more generous than the evidence.

The pattern: the closer the judge is to the writing, the higher the grade. Independent judges were lower every time.

### 2D. Rules written too narrowly, and the next case they missed

| Rule as written | Narrow because | The next case it missed |
|---|---|---|
| STANDARD P1: at most one exact amount of $10,000 or more | Counts only large dollar amounts | Small exact figures and percents ("a quarter of one percent"); and the reverse error, rounding $95 and 518 (L19) |
| The story check in `_55-plus-kit.js` counts digits | "Number" means digits | "two grandsons", "90 nights in any 12 months" (L35) |
| `rules/plain-words.json`, 42 terms | A list | villa, master association, Heel Tract, house plan, the city's plan, day dock, Grand Strand, FEMA (L35) |
| PLAIN-7: price later "on a page for people buying a home to live in" | Scoped to one page type | The underlying rule is "lead with what this reader came for"; an LLC or tax page needs the same judgment |
| STANDARD P8: a map on "a 55+ community, submarket or neighborhood page" | Scoped to page types | Any page about a place, a route or a distance |
| BUYER-7: research "an HOA community's life" | Scoped to HOAs | Any subject where the reader asks "what is it like?" |
| `templates/must-answer.md`: two lists | Two page types | Every other page type; the skill is building the list from demand (L1) |
| `prompts/buyer-reader.md`: a 62-year-old from Ohio buying on the Grand Strand | One reader | An investor page, a seller page, a renter page |
| BUYER-2: "No industry terms" | No exception | The words readers search, such as "amenity center" (L22) |
| PLAIN-6: say the date once | Written for body copy | Captions with years, a sources line with a wrong date, and two pages comparing different tax years (L47) |
| P10: photos on topic | Written for photos | Drawings and icons that imply a fact (L25) |
| `prompts/owner-eye.md`: "Is there a story near the end with tension" | Turns one comment into a required part | A page type where a story does not help, such as a short checklist |

---

## Part 3. Lessons about learning

### 3A. How to turn one correction into a class

1. **Write down the exact words.** Quote the owner or the reader. Do not paraphrase yet.
2. **Name the reader's loss.** What did the reader fail to get, understand, picture or trust? "Too many numbers" is a symptom; "the reader cannot hold more than a few figures and stops reading" is the loss.
3. **Check the rules you already have.** If a rule already covered it, the problem is not a missing rule. It is a rule nobody applied, a check that measured the wrong thing, or a brief that told the writer the opposite. Fix that. In this batch, 8 of 12 corrections were of this kind.
4. **Look for three more instances.** On the same page, on the sibling pages, and on a page of a different kind (an investor guide, a tax page). If you cannot find any on a different kind of page, the lesson may be narrower than it looks; say so.
5. **Write the rule as a reason and a test question.** "Could a stranger plan with this number?" applies to tax, fees, prices and drive times. "No floors like 'more than $2,000'" applies to one sentence.
6. **Merge or replace.** Find the rule it belongs under. Add a new rule only if no existing one holds the reason.
7. **Sweep.** Apply it to every page in flight that day, and list what changed in the commit.
8. **Record it** in the form it came, with the date, the quote, the class and the files changed. Record praise the same way.
9. **Test it on the next page of a different kind** before you trust it.

### 3B. How to tell a general lesson from a one-off

A lesson is probably **general** when:

- It is about the reader: what they know, what they want first, what they can picture, what they trust. "Say what it means for the reader" applies to flood zones, LLCs and tax brackets alike.
- The owner says so: "this is an overall lesson", "in everything you do".
- It would change a page on a different subject if you applied it.
- It explains why a check passed a page that failed.

A lesson is probably a **one-off** when:

- It is a fact about this subject: the Seasons gate is unknown; Grande Dunes has two golf courses.
- It is a business decision: Devin is the byline author; Paul is never named. These are policy, not craft. They go in the non-negotiables, not the craft.
- It names a word, a place or a page type and gives no reason.
- It is a reviewer's preference that conflicts with another reviewer's, with no reader harm named on either side.

When unsure, write the reason first. If you can state a reason that holds for a different subject, the lesson is general. If the only reason is "the owner said so about this page", file it with the page.

### 3C. How not to over-learn

The batch also learned some lessons too hard. Each one came from applying a rule beyond its reason:

- "Show it" became a decorative hero photo (L9).
- "Round numbers" removed the exact $95 the reader and search engines want (L19).
- "No industry terms" removed the words readers search (L22).
- "No dates" left two pages comparing different tax years without saying so (L47).
- "Show the agent's skill" became a rule-counting puzzle (L31).
- "Simple" sometimes became vague: "more than $2,000", "part of the year" (L18; `STORY-SIMPLE.md` notes "Vague is not simple").

The guard is the same test every time: after applying the rule, is the page easier for this reader to understand and act on? If not, the rule was applied past its reason.

### 3D. How to keep the skill a skill

- Keep `CRAFT.md` the one place a writer must read. It should hold reasons and test questions, not lists of sections.
- Keep rules few. Each new correction merges into a reason that already exists, or replaces one.
- Keep model examples current with the rules, or remove them. A stale example teaches the old mistake (L33).
- Put each check where every page passes through it (L34).
- Treat the cold reader as the main judge of plainness and the owner as the teacher of taste. Treat the gates as a floor.

---

## Part 4. Where each lesson stands in the skill files today

"General" means written as a reason that applies to any page. "Narrow" means tied to a page type, a list or this batch. "Missing" means not written.

| Lesson | Where it is | Status |
|---|---|---|
| L1 Search demand and must-answer list | WORKFLOW audit 1 and 2; templates/must-answer.md | Narrow (two lists); missing from CRAFT |
| L2 Reader's top gap is a blocker | WORKFLOW audit 2 (listed items only) | Narrow |
| L3 Gates measure rules, not value | CRAFT 7; OWNER-5; buyer-reader prompt | General |
| L4 Simple first, judged by a stranger | RULES PLAIN; CRAFT 5; STORY-SIMPLE 12 | General, with narrow sub-rules |
| L5 Correction is a class; sweep | CRAFT 8; RULES "Keeping this current" | Stated, no procedure |
| L6 Never grade your own work | owner-eye prompt only | Narrow |
| L7 Scope freeze; done means live | WORKFLOW audit 6 and 10 | General |
| L8 Serve the intent | RULES OWNER-1 (two readings) | Narrow |
| L9 Pictures show the sentence's subject | CRAFT 4; P10 | General; full-size look missing |
| L10 Story retell test | STORY-SIMPLE; STORY-CRAFT; owner-eye | General; model story breaks test 6 |
| L11 Stop rule | WORKFLOW audit 4 | General |
| L12 Resolve conflicts; log reversals | GRADE-process proposal only | Missing |
| L13 Compare siblings | none | Missing |
| L14 One fact, one value sitewide | WORKFLOW audit 8; FACT-6; STRUCT-9 | General; missing from CRAFT |
| L15 Four kinds of stretch | FACT-1, FACT-2, FACT-8 | Partial |
| L16 Deciding test first | RETRO; research brief | Narrow (age rule) |
| L17 Research the reader's life | BUYER-7; research brief | Narrow (HOA) |
| L18 True but useless | PLAIN-5; SHAPE-6 | Partial |
| L19 Round to help | PLAIN-2 | Reason present; CRAFT says round without exception |
| L20 State it or cut it | PLAIN-9; SHAPE-6 | Partial |
| L21 Attribution clash | BUYER-3; CRAFT 5 | Partial |
| L22 Reader's searched words | none | Missing; BUYER-2 contradicts |
| L23 Familiar word, local meaning | STRUCT-2; PLAIN-1 | Partial |
| L24 Surroundings are part of the page | none | Missing |
| L25 Picture is a claim | CRAFT 4 (icons need words) | Partial |
| L26 First screen holds the answer | CRAFT 4; H16 | General |
| L27 Say each fact once | P8; SHAPE-8 | Partial |
| L28 Daily use first; good first in each part | BUYER-1; CRAFT 3 | Partial |
| L29 Safe if quoted alone | STORY-CRAFT | Narrow (stories) |
| L30 Ask the owner only what nothing else answers | CLAUDE.md; WORKFLOW Roles | General |
| L31 Check the owner's stand-in | owner-eye cold retell | Partial |
| L32 Record verdicts and praise | none | Missing |
| L33 Small, consistent skill | GRADE-process proposal | Missing; contradictions exist |
| L34 Shared checks | none | Missing |
| L35 A list is a floor | RULES top; "What no check enforces" | General |
| L36 Review the served page, fresh | CRAFT 7 (phone width) | Partial |
| L37 Test integrations first | none | Missing |
| L38 Drawbacks section | CRAFT 3; must-answer item 11 | Partial |
| L39 Title for search, headline for people | STANDARD S1, S2, S9 | Partial |
| L40 Links both ways | STANDARD S7, S8; writer prompt | Partial |
| L41 Schema names the subject | STANDARD S rules | Partial |
| L42 Trust signals must be true | STORY-2; story limits | Partial |
| L43 Readable source links | RETRO; writer brief | Narrow (batch files) |
| L44 Method in the sources line | PLAIN-8; BUYER-3; CRAFT 5 | General |
| L45 Name places the reader knows | PLAIN-1; CRAFT 1 and 4 | General |
| L46 Real-world numbers | none | Missing |
| L47 Dates by machine, like with like | PLAIN-6; P3; CLAUDE.md | Partial |
| L48 Real tension, recorded service | STORY-CRAFT; T2; CTA-1 | General |
| L49 Real story first | STORY-CRAFT | General |
| L50 One offer that fills the gap | CTA-1 to CTA-4 | Partial |
| L51 Subject chooses the shape | CRAFT 3 | General; writer prompt contradicts |
| L52 Researcher's checklist | none | Missing |
| L53 Lawful second source | CLAUDE.md; research brief | Narrow (listings) |
| L54 License record per image | CLAUDE.md; rules/images.md; photos.js | General |
| L55 First-hand evidence early | photo-shot-list; T2 | Partial |
| L56 Old data | PLAIN-9; CRAFT 2 | General |
| L57 Record accepted legal risk | PLAN.md | Narrow |
| L58 Keep what was praised | none | Missing |
| L59 Comparison tables | REWRITE-PLAIN (batch) | Narrow |
| L60 Small text everywhere | H13 (captions) | Partial |
| L61 One picture per sentence | P10 | Partial |
| L62 Cost per stage | WORKFLOW audit 9 | General |
| L63 One worktree per agent | WORKFLOW audit 7 | General |
| L64 Delivery path first | WORKFLOW audit 10 | Partial; path open |
| L65 Weakness has an upstream cause | none | Missing |

Missing entirely: 12 lessons (L12, L13, L22, L24, L32, L33, L34, L37, L46, L52, L58, L65). Written only narrowly or in part: about 30. Written as a general skill: about 23.
