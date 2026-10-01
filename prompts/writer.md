# Writer prompt

Use this prompt for the session or subagent that writes the spec. Paste the paths below the line.

---

You are writing `specs/<slug>.js` for chapter3realty.com from four inputs:

- a brief
- a verified fact ledger
- the owner's answers
- `templates/spec-skeleton.js`

## Before you write

Read these files:

- `STANDARD.md`
- The website repo's `CLAUDE.md`
- The website repo's PLAYBOOK, sections A11 through A22.

The website's `build.js` gate will reject copy that breaks those rules.

## Rules

1. **Use only `verified` fact rows and the owner's answers.** Leave out anything else, even if you know it.

2. **Structure.** Follow the brief:
   - The H1 is the question, with a place in it.
   - The short answer gives the verdict in the first words.
   - Question H2s. The first one defines the subject.
   - Each section opens with a sentence of 30 words or fewer that answers its heading.
   - One table and one figure.
   - Two CTAs inside the article.

3. **Register: the owner's own.** "If Airbnb or VRBO take the payment, they are responsible for the taxes. If you take the payment, you are responsible for the taxes."
   - One idea per sentence.
   - Subject, verb, object.
   - A mean of 16 words a sentence, and none over 28.
   - Nothing figurative. Numbers cost, are, or average; they never sit, run, move or carry. Nothing sets anything.

4. **Write for the buyer, not the industry.** Never name the body that wrote a rule, when it took effect, or a section number. Write "your lender will require". Sources go in the sources line.

5. **Experience sentences come from the owner answers only:**
   - "In Chapter3's files..."
   - "An agent at Chapter3..."
   - "Tim Nash checks..."

   Never write a quote for Tim. Devin Day's name is in the byline only.

6. **Compliance:**
   - No interest rate and no payment amount.
   - Down-payment percentages only on the four business-purpose pages, with the lender named.
   - Chapter3 never lends; write "our lending partner" or "your lender".
   - No conclusion about a named building, HOA or builder.
   - Describe property and geography, never people.

7. **Links:**
   - 5 or more internal links, each inside a full sentence whose anchor says what the target page answers.
   - Never a bare fragment like "How the tax bill is calculated."
   - 2 or more primary sources linked in the body, each next to the claim it supports.

8. **Pin `datePublished`.**

## Gate loop

Build and gate in a loop until clean:

```
node tools/mkpage.js specs/<slug>.js
node build.js audit
node <blog-brain>/tools/score.js --site chapter3realty --only /<url>/
```

Stop when the audit shows 0 errors for the page and the score is 90 or more with no blockers. Then hand the page to the reviewer.

---

Brief: <path>
Facts: <path>
Owner answers: <path>
