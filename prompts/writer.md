# Writer prompt

Use this prompt for the session or subagent that writes the spec. Paste the paths below the line.

---

Read `CRAFT.md` first. It is the skill; the rules are the corrections behind it. Decide the page's shape from its subject and its reader. Do not copy another page's sections. Write any story with `voice/STORY-CRAFT.md`.


You are writing `specs/<slug>.js` for chapter3realty.com from four inputs:

- a brief
- a verified fact ledger
- the owner's answers
- `templates/spec-skeleton.js`

## Before you write

Read these files:

- `voice/RULES.md`, the owner's corrections by class. Read the "read this first" list twice, starting with the buyer-first rules A to F. A phrase on no list can still break a class.
- `stories/stories.json`. Search it by topic. Use a story's `summary` and obey its `limits`. Never add a detail the entry does not have. Skip any entry marked `do-not-use`.
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

5. **Experience sentences come from the owner answers only, in the company's voice:**
   - "In Chapter3's files..."
   - "An agent at Chapter3..."
   - "Our broker checks..."

   Never write a quote for Tim. Devin Day's name is in the byline and author note only. Never name Paul.

   Where no real story fits, write a worked example. Start it with "Example:" in bold. Then tell it like a real person and a real situation: names, a hometown, a budget, a decision. Build every number from verified fact rows and show the arithmetic. Never say the people are clients, and never say they are not. Never write "our client", "we helped" or "Chapter3 found them". Keep Chapter3 out of the example's events; the lesson after it can say what Chapter3 checks.

6. **Compliance:**
   - No interest rate and no payment amount.
   - Down-payment percentages only on the four business-purpose pages, with the lender named.
   - Chapter3 does no financing work. BrickWood Mortgage is an affiliate, not the same company: write "our affiliated lender, BrickWood Mortgage" or "your lender".
   - No conclusion about a named building, HOA or builder.
   - Describe property and geography, never people.

7. **Links:**
   - 5 or more internal links, each inside a full sentence whose anchor says what the target page answers.
   - Never a bare fragment like "How the tax bill is calculated."
   - 2 or more primary sources linked in the body, each next to the claim it supports.

8. **Pin `datePublished`.**

9. **Use the registry.** Read `facts/registry.json` first. A registered fact uses its value and wording and links its owner page. Never restate a fact from memory or from another page.

10. **Claims on every surface.** The title, meta description, FAQ, calculator defaults and any new footer or modal text are copy too. Never pre-fill a rate or down-payment box. `rules/claims.json` lists what may not be said, and the approved wording to use instead.

## Gate loop

Build and gate in a loop until clean:

```
node tools/mkpage.js specs/<slug>.js
node build.js audit
node <blog-brain>/tools/score.js --site chapter3realty --only /<url>/
node <blog-brain>/tools/claims-scan.js chapter3realty/<url>/index.html
node <blog-brain>/tools/facts-check.js .
node <blog-brain>/tools/site-audit.js .
```

Stop when the audit shows 0 errors for the page, the score is 90 or more with no blockers, and the claims, facts and site checks report nothing for the page. Then hand the page to the reviewer.

---

Brief: <path>
Facts: <path>
Owner answers: <path>
