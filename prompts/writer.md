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

1. **Use only `verified` fact rows and the owner's answers.** Leave out anything else, even if you know it. A verifier's "safe wording" limits what you may claim. It is not page copy: never paste "the HOA says", "listings show", "under the recorded declaration" or a proper name the reader cannot picture. Say the allowed claim as the expert, in the reader's words; the sources line carries the source (CRAFT 5; 2026-10-11, v14 pros and cons).

2. **Structure.** Follow the brief:
   - The H1 is the question, with a place in it.
   - The short answer gives the verdict in the first words.
   - Question H2s. The first one defines the subject.
   - Each section opens with a sentence of 30 words or fewer that answers its heading.
   - The visuals the shape needs, and only those (CRAFT 3 and 4): a map for a place, a table to compare, steps for a process, a chart for a trend. No fixed count.
   - One clear offer tied to what the page could not fully answer, with one label (CRAFT 3).

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

   Where no real story fits and a story helps this page, write a labelled example by `voice/STORY-CRAFT.md` and `voice/STORY-SIMPLE.md`. Start it with "Example:" in bold. One want, one problem, one fix. A Chapter3 agent acts in the present tense with a service on record. At most one number, no arithmetic, no "if". Write the one-sentence retell first. Never say the people are clients, and never say they are not. Never write "our client" or "we helped". `tools/story-check.js` refuses a story that breaks the machine-checkable parts.

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
node <blog-brain>/tools/repeat-check.js chapter3realty/<url>/index.html --strict
node <blog-brain>/tools/structure-check.js chapter3realty/<url>/index.html --strict
node <blog-brain>/tools/struck-check.js <blog-brain>/batches/<batch>/facts/<slug>-struck.json chapter3realty/<url>/index.html
```

Stop when the audit shows 0 errors for the page, the score is 90 or more with no blockers, the claims, facts, site and struck checks report nothing for the page, and the structure check passes `--strict`. The struck check finds wording a verifier struck in the ledger that a rewrite put back (lesson B30); use the row's approved wording it prints. Then hand the page to the reviewer.


**Say something new, and speak as the agents (owner, 2026-10-14).** Read CRAFT 5, "Say something new" and "We do the work". Before you hand in, read your page once only for repetition: list each section's new facts. If a section has none, or repeats an earlier one, cut or merge it. State the page's theme (the gate, the price) once at the top and once in each entry's plain price sentence, not in every paragraph. No label lines such as "The facts:". Cut every sentence that would be true of any place, and every obvious or reassuring sentence. Never tell the reader to check, verify or ask; say what we check.

Run `node <blog-brain>/tools/repeat-check.js <page> --strict` after every rewrite, and fix what it quotes before you hand in; a rewrite that cures one repetition often grows the next (batch 2026-10-b). A rewrite that cures repetition by cutting leaves thin entries: replace each cut with a new fact about that place. `--strict` fails an entry under 60 words or a median entry under 90.

Run `node <blog-brain>/tools/structure-check.js <page> --strict` after every rewrite too (CRAFT 3 and 5, lessons B41 to B43). On a list of places it fails: more than 350 words between the H1 and the first place; the list of places in more than one block before the first place (the selection guide is the one; a map with name labels, a glance row, a chart or a legend that names half the places is another), or in more than one block after the last (one comparison table); a label line in an entry ("The facts:", "At a glance:", any bold label with a colon); and an entry with no link or button to the contact form whose text names the place or says homes, a showing or a tour. Cut a block rather than shrink it, and write the price in a sentence a person would say.

---

Brief: <path>
Facts: <path>
Owner answers: <path>

## Applying a verifier's correction

Take the fact from the row, not its wording. Write what the fact means for the buyer, once, in your own sentence. The measure, the sample and the source go in the ledger and the sources line. A sentence that names its own method ("in a straight line", "listings say", "recorded in the past year") is a note, not copy; keep one only when the reader needs it to act (CRAFT 5, lesson B35). A struck list's `use` text is the approved fact, not a sentence to paste. Before you hand a page on, read every entry aloud as a top local agent talking to a buyer, and rewrite any sentence that sounds like a records clerk ("deeded", "recorded", "from the middle of", a sales count). When the number limit binds, cut the least useful number; never blur the most useful one (lesson B37).

After every change, however small, run `node build.js audit` in the website worktree as well as the Blog-Brain gates. In batch 2026-10-b a one-line fix in the last round passed score, repeat-check and struck-check but failed the audit's 28-word sentence limit, and the package stopped at preflight.
