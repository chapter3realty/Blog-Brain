# Review round 2: /sell/out-of-state-buyers/

Fixer, 2026-11-01. Three reviewers: critic 5 (fail), reader 7 (fail), owner's eye 7 (fail). All edits are in `specs/out-of-state-buyers.js`; the page was rebuilt with `node tools/mkpage.js`. The round 1 spec is kept at `wf2/sell-out-of-state-buyers/spec-r2-before.js`.

## What changed, by finding

### Critic, blocking

1. **"No." on "Do they pay more" (row 7, corrected).** The flat "No." is gone. The H2 now opens "Not by the middle price. In the same building or subdivision, buyers from other states paid the same middle price as South Carolina buyers." The short answer says "we found no sign that they pay more than local buyers" (the row's safe wording, without "records show"). The Suffolk line is cut (owner finding 7). struck-check: no struck wording.
2. **Step 4 "runs the closing" (row 12, corrected).** Now "A South Carolina attorney supervises the closing."

### Critic, nits

- "About 3 in 10" said three times: the method paragraph is cut. The figure is in the short answer and the closing block only.
- "The part after these steps says who must be there.": now "The notary and two witnesses must see you sign (see below)." The h3 under it no longer repeats that sentence.
- "No. It is not the tax itself.": the h3 is now "Do you get back what was held back?" and the answer starts "You file a South Carolina return...".
- Hold-back table, main-home row: now ends "(you say so on Form I-295)", with a no-break hyphen so "I-295" does not split at 390 px.
- Step 4 tag: now "Where you are: at home".
- Story framing and uniqueness: the story is cut (owner finding 8). PROPOSED.md asks the lead to add /invest/strategies/dst/ to its publishedOn.
- Rows 31 to 38: still VERIFIED-BY-FIXER; the critic re-opened 31, 33, 34, 35, 37 and 38. Rows 32 and 36 are still for the lead. New row 39 (refund and later-year rate) is VERIFIED-BY-FIXER too.
- SEO: the short answer now opens with "If you live in another state, you can sell your Horry County home without coming back." FIRPTA, Internal Revenue Code Section 121 and the South Carolina Department of Revenue are each named once in the body.
- Story H2: gone with the story.
- Photo caption: now "Oceanfront condo towers in North Myrtle Beach, where more than half of buyers own from another state." No year (owner nit); the credit block keeps the source.
- Month chart without values: the chart is cut (owner finding 1, "shrink the buyer data"). The January share is now one FAQ line, "Even in January, the slowest month, about 1 in 4 buyers here came from another state", with no chart to contradict it. The spec still checks January is the slowest month and about 1 in 4.
- Dates: the lead's dates run.
- critic.mjs photos.test route: NEEDS.md 16.

### Reader, blocking

1. **Who looks after the home and holds the key.** Not answered: no source can answer it, and the page may not promise a service the owner has not confirmed. NEEDS.md 13 (a), (b) and 14. The step still says "Someone with a key lets them in, so tell us who holds yours", and the closing-plan box asks who has a key.
2. **Rate for a sale that closes next year.** Added: "It is the state's top income tax rate for the year of the sale, so a sale that closes in a later year may use a different rate. We can tell you the rate for the year your sale will close." Rows 18, 31 and 39 (I-290 line 2: "rate for the tax year of the sale"; the H. 4216 page says the top rate may be cut further). No 2027 rate is stated.
3. **The deed's trip and when the money arrives.** Not answered: how the package is sent, how the signed original goes back and how and when the seller is paid are owner questions 13 (c), (d) and 14 (i). The page keeps the verified part: confirm the account by phone, never follow wire instructions in an email.
4. **"Do I get the extra back?"** Added: "If more was held back than you owe, you can ask the state for the difference as a refund." Row 39 (12-8-580(F), 12-8-2020(A)(2), I-290 common questions). The refund steps stay on /sell/capital-gains/.
5. **The buyer search box above the short answer.** Site chrome from idx-lib/feeds.js, not this spec. NEEDS.md 15.

### Reader, nits

- Headline: the H1 is now "Sell your Grand Strand home from another state." with "You do not have to come back." The buyer figure moved to the short answer and the last section.
- Suffolk County: cut.
- Byline date: the lead's dates run.
- Month chart numbers: the chart is cut (above).
- Story "per month" and tenant: the story is cut. The page now links /sell/rental-property/ for a sale with a tenant in it.
- Furnished, HOA paperwork, who picks the attorney: owner questions, NEEDS.md 14 (g), (h).
- FAQ "Do I need to be at the closing?": now "No. The closing goes ahead in South Carolina with the deed you signed where you live."
- "Doe v. McMaster" in Sources: now "SC Supreme Court, Doe v. McMaster".
- Footer and "Ready to make your next move" band: site chrome, not this spec.

### Owner's eye, blocking

1. **Serve the seller first.** The order is now: short answer (selling from away first), the six steps, what the state holds back, the disclosure, then one short block on buyers. The state ranking and its chart, the month chart, the Census "39 a day" line and the clients' states line are cut. The buyer block ends with what the seller does: price it to what sold near it, condos draw the most buyers from other states, list when the home is ready. On a phone the steps now start right after the short answer and the table of contents.
2. **Method talk.** Cut: "in the latest year of county records", "We matched a year of Horry County home sales...", "A buyer who has already moved here counts as local...", "Horry County home sales by the month the deed was recorded", "Resales, each compared...". The body says "About 3 in 10 buyers here own from another state" (the owner's suggested wording; "own from" keeps it true, since the tax bill is a mailing address). The source is given once, in the share chart's note.
3. **What our agent does at each step.** Partly done, the rest blocked on the owner. The steps say what the verified rows allow: we price and show the home (step 1), "tell us who holds" the key (step 3), and, in the disclosure section, that we must tell the seller in writing what the law asks (row 37). Steps 3 to 6 cannot say what we do until the owner answers NEEDS.md 13 (a) to (f) and 14 (g) to (i). This is why the page cannot reach 9 yet, as the owner's eye said.
4. **Repetition.** Each sentence is said once. The short answer and the section intro no longer share a sentence. The FAQ answers are new wording or short pointers ("The table above gives all three cases..."), and the January share is said only in the FAQ. repeat-check --strict passes: 0 identical, 0 near.
5. **"Ask the notary ahead of time..."** Now "Bring one more person to sign as the second witness." We do not claim to find a notary.
6. **Legal detail.** Cut: the Register of Deeds address (step 6 is now "The deed is recorded in Horry County. It counts the same as a deed signed in South Carolina."), the "appeared before" quote, the seal and commission-date paragraph, and "signed and witnessed like a will". The online notary h3 is now the action and what it means. The power of attorney keeps one plain sentence that a form made under your own state's law can also be valid (the row 16 verifier note forbids implying the South Carolina form is the only one).
7. **Suffolk County.** Cut. The myth is now named in plain words: "Some sellers expect a buyer from a pricier state to pay more. We price your home to what sold near it, the same as for a local buyer."
8. **The story.** Cut. The bank does not say how he sold from New York or what the agent did because he was away, so it cannot be tied to this page without adding detail. /sell/rental-property/ tells it and is now linked.

### Owner's eye, nits

- Jargon: "federal exclusion" is glossed once ("the federal main-home exclusion, in Internal Revenue Code Section 121, leaves up to $250,000 of gain out of your income"); "seller's affidavit" is "a sworn statement on a South Carolina tax form"; "personal representative" is "the person settling an estate"; "trustee" is "a trustee for a trust"; "rental management contract" is "a contract with a rental company"; "common areas" is "the parts of the building everyone shares"; "neighbors' middle price" is "the middle price in their building or subdivision"; "Resales" is "Homes sold by their owners, not by builders."
- Photo caption year: dropped (above).
- FBI $275 million: cut. The instruction stays. The IC3 source is removed.
- Month chart scale: the chart is cut.
- "Several thousand dollars a month on ads": cut until the owner confirms it (NEEDS.md 13 (e)).
- Rows 31 to 38 (and now 39): for the lead's check before ship.
- Feed title on a seller page: NEEDS.md 15.

## Findings I think are wrong or left

- None rejected. Three are left for the owner and lead, not the spec: what our agent does at steps 3 to 6, and the deed's trip and the payout (NEEDS.md 13, 14); the feed box (NEEDS.md 15); the byline date (dates run).
- One trade-off to note: with the story cut, score.js T2 (first-hand experience) fails, and the score is 97, not 100. No other story in the bank fits without added detail. The `client-origins` row would give one T2 sentence, but it is the state data the owner asked to cut. The owner's answers to NEEDS.md 13 and 14 are the right T2 sentences.

## Gates after the rebuild (2026-11-01)

- `score.js` (SCORE_TODAY=2026-11-01): 97/100. SEO 100, AEO 100, Human 100, Trust 57 (T2 only, above).
- `claims-scan.js`: 0 on this page. `facts-check.js`: 0 on this page. `house-claims.js`: 0. `struck-check.js`: no struck wording. `repeat-check.js --strict`: passes.
- `critic.mjs` at 320, 390, 768, 1024 and 1440: 0 blocking, 0 warning. Shots are in `wf2/sell-out-of-state-buyers/shots2/`, with slices and contact sheets in `sl2/`. I looked at 390 and 1440: no overlap or sideways scroll, the steps and table read cleanly, and the photo caption matches the photo.
- `build.js check`: OK. `build.js audit`: only the two date lines for this page (the lead's dates run) and the A20 warning (no named quote; never write one for Tim).
