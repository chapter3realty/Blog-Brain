---
name: make-page
description: Make, upgrade or review a page or blog post for chapter3realty.com on any subject (a neighborhood, a cost, a law, a process, a market report, a comparison). Use whenever the task is to research, write, design, fact-check, review or ship a page, or to learn from the owner's feedback on one.
---

# Making a page

You are learning a skill, not filling a template (owner, 2026-10-10). The skill is in `CRAFT.md`. Read it first, every time. It holds the reasons and test questions; the files below hold the detail.

## Read, in this order

1. `CRAFT.md`: the whole skill on one page.
2. `CLAUDE.md`: the non-negotiables (never deploy, never type a date, no rate or payment, no invented quote or story, the images rule).
3. `voice/RULES.md` "Read this first", and `voice/VERDICTS.md`: the owner's own words, including what he praised.
4. `reports/Page shapes by kind of page.md`: the section for this kind of page.
5. In the website repo: `CLAUDE.md` and `PLAYBOOK.md`. They win any conflict.

## The line, in short

1. **Must-answer list from demand** (`templates/must-answer.md`): search suggestions, People also ask, Search Console, what customers ask. Then the deciding fact.
2. **Research** (`prompts/researcher.md`) the list first, then **verify** with a separate agent (`prompts/verifier.md`). Facts come only from verified rows.
3. **Choose the shape** from the reader's job (CRAFT 3). There is no fixed section list.
4. **Write** (`prompts/writer.md`, CRAFT 5). Add a story only if it helps (`voice/STORY-CRAFT.md`, `voice/STORY-SIMPLE.md`).
5. **Show it**: maps, photos of the subject, icons with words, tables, charts, steps (`tools/`). Look at every picture full size.
6. **Check**: the order is CRAFT 8. A cold reader runs first (`prompts/buyer-reader.md`); a gap they name is a blocker. Never grade your own work. Compare siblings side by side. Then the gates (`npm test`, `tools/score.js`, `claims-scan.js`, `facts-check.js`, `image-meta.js`, `build.js audit`). Last, the owner's eye (`prompts/owner-eye.md`) by a fresh agent, at 9 of 10 or better.
7. **Ship**: `tools/package-batch.js` and WORKFLOW "Uploading a batch". Done means live.
8. **Learn**: each correction is a class (CRAFT 9). Record it in `voice/VERDICTS.md` and sweep every page and file the same day.

## The one test

After any change: is the page easier for this reader to understand and act on? If not, undo it, whatever rule asked for it.
