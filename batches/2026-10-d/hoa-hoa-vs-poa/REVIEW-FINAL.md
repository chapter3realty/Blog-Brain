# Final fix: /hoa/hoa-vs-poa/ (batch 2026-10-d)

Fixer, 2026-11-03. Every change is in `specs/hoa-vs-poa.js`, built with `node tools/mkpage.js specs/hoa-vs-poa.js`. No built page was edited by hand. No new ledger row: every figure on the page is one it already used, at its verified value.

## The lead's open items

1. **The same answer appeared four times at the top.** Closed. The glance tiles ($95 and $640) are cut, because the short answer gives both fees a few lines lower. The H1 subtitle no longer starts "What changes the fee" (the short answer said the same): it is now "Fees by kind of home, and why some homes pay two associations." The hero sub no longer repeats the subtitle: "Also what you own in a Grand Strand condo, who fixes the roof, and how a condo can change the loan." The first section no longer restates "the name does not change what the group is". It now says "Under either name, the group's recorded papers list what it runs and what its owners pay." "The name does not tell you the kind of home either" is now "A name does not always tell you the kind of home." The answer is now said once at the top, in the short answer, and again only in FAQ 1, which must stand alone.
2. **What two association fees come to together.** Answered with what we know, under a new H3, "What do the two fees come to together?": "The master's fee plus the fee of the association inside it. A listing's fee may leave out the second one, so we have no count of that total for homes here. For a home you send us, adding the two up is the second of our checks." Check 2 now says what it gives the buyer: "Then you know what the fees add up to each month before you make an offer, and which bills they already pay." I looked for a number: the CRM API has one fee field, the listing pages show no second fee, barefoothoa.com publishes its papers but no assessment amount, and no source gives the Grande Dunes or Prince Creek master fee. No number is typed. NEEDS 18.
3. **Explain "lien" the first time.** The definition is now in the sentence that first uses the word: "If you fall behind on dues a POA's papers require, it can put a lien on your home, a claim on it for the money you owe. An HOA can do the same." "Legal claim" and "the money owed" are gone.
4. **Page-level stopgap CSS.** The feed search box rule at 320 px is cut. The shared CSS now holds it, and critic.mjs is 0 blocking at 320 without it. The header phone rule is kept. Without it the page is 1029 px wide at 1024 in this working copy, and `/invest/strategies/fix-and-flip/` measures the same 1029 in the same preview, so the shared header fix is not in this copy yet. NEEDS 17.

## Other fixes found in this pass

- Pseudo-clefts cut: "what makes a group an HOA is recorded papers" (short answer), "What changes the fee is the kind of home" (now "The kind of home changes the fee."), "What it runs and what the owners pay are in its recorded papers", "For a house, what the association can do is in its recorded papers", and "For a house, what is yours to keep up is in the HOA's papers".
- A sentence opening with "So" (check 2) is rewritten.
- The second mention of the seller's form in the two-associations section is cut. The form is in surprise 2 only.
- Each community card now carries its live homes strip (`grande-dunes`, `barefoot-resort`, `prince-creek`), so a reader can act on the community. It is empty in the preview and takes no space. This also lifts score.js H5 from 60% (3 calls to action for 9 sections) to a pass. NEEDS 19.

## Gates

- score.js (SCORE_TODAY=2026-11-03): 99/100. SEO 96, AEO 100, Human 100, Trust 100. 1,846 words. The one gap is S8 (one page links here; NEEDS 7).
- claims-scan: 0 findings. facts-check: nothing on this page. house-claims: 0. struck-check (`hoa-hoa-vs-poa-struck.json`): no struck wording.
- critic.mjs at 320, 390, 1024 and 1440 (port 8840): 0 blocking. One warning at 320: read.wall, 944 px from the hero sub through the short answer. JSON: scratchpad `wf2/hoa-hoa-vs-poa/final/critic.json`.
- build.js audit, this page: only the two date mismatches (the lead's `build.js dates`) and the A20 note (no named quote; we write none).
- I looked at the first phone screen at 390: the H1, its subtitle, the byline, the sub and the short answer, with no tiles. The answer is said once.
