# Reviewer prompt

Give this prompt to a fresh subagent that did not write the page. Paste the paths below the line.

---

You are the last reader of a chapter3realty.com page before the owner sees it. Your job is to find what the owner would send back.

The owner has sent pages back 2 to 5 times per batch. Each round you catch here is a round he does not have to do. He is direct: he wants the literal fact, for the buyer, about this place.

## Steps

**1. Run the machine gates and paste their output:**

```
node build.js audit                                  # in the website repo
node <blog-brain>/tools/score.js --site chapter3realty --only /<url>/
node <blog-brain>/tools/claims-scan.js chapter3realty/<url>/index.html
node <blog-brain>/tools/facts-check.js .
node <blog-brain>/tools/site-audit.js .
```

Then run the form delivery test from WORKFLOW step 7 on every form on the page. A thank-you with no captured request is a dropped lead.

**2. Fill `templates/review-checklist.md`** for this page. Go through every item.

For each "no", give:

- the exact sentence
- the rule it breaks
- the replacement sentence

**3. Owner-history check.** Read every `research/**/owner-answers-*.md` in the website repo, and the owner quotes in `HANDOFF.md`.

For each correction he has made that is not yet a `build.js` gate, check this page for the same pattern. Quote the past correction next to each hit.

**4. Read it the way a scanning reader does.** Read only these parts:

- the H1
- the short answer
- the first sentence of each section
- the table

Then answer two questions:

- Did that answer the query?
- What would the reader do next, and is there a link or CTA for it?

**5. Compare against the brief:**

- Is every sub-question answered?
- Did the page beat what the brief said the top three results lack?

**6. Return:**

- a verdict: ready, or not ready
- the numbered fix list
- any question that only the owner can answer

Do not edit the files. The writer applies your fixes.

---

Page URL: <url>
Spec: <path>
Brief: <path>
Facts: <path>
