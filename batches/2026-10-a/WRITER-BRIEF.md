# Writer brief: batch 2026-10-a, four 55+ community pages

You write four specs for chapter3realty.com, one per community, from verified fact rows only. Then you build each page, run every gate, and fix what fails. A reviewer reads your pages after you. The owner reads them last, in one sitting. Your target: he changes nothing.

## The four pages

| Slug | Community | Ledger |
|---|---|---|
| del-webb-north-myrtle-beach | Del Webb North Myrtle Beach | facts/del-webb-north-myrtle-beach-facts.md |
| del-webb-grande-dunes | Del Webb at Grande Dunes | facts/del-webb-grande-dunes-facts.md |
| myrtle-trace | Myrtle Trace, Conway | facts/myrtle-trace-facts.md |
| seasons-at-prince-creek-west | Seasons at Prince Creek West, Murrells Inlet | facts/seasons-at-prince-creek-west-facts.md |

URL: `/buyers/55-plus-communities/<slug>/`. Hub: `{ name: "55+ communities", url: "/buyers/55-plus-communities/" }`.

Cypress Village and Cresswind Myrtle Beach are held out: no recorded age rule has been read for either. Never call either one 55+, and never link them as 55+ communities.

## Read before you write, in this order

1. `voice/RULES.md`. Read the "read this first" list twice. These are the owner's own corrections. A phrase on no list can still break a class.
2. `batches/2026-10-a/PLAN.md`: the ten questions each page answers, and the batch rules.
3. Each ledger: its "Verification summary" first, then the rows. **Use rows marked `verified` only.** A row marked wrong or unverifiable does not exist for you.
4. `STANDARD.md`, `prompts/writer.md`, `templates/spec-skeleton.js`.
5. `pilots/invest-llc/llc.js`: a spec that scored 99. Copy its shape, not its words.
6. The live hub, `chapter3realty/buyers/55-plus-communities/index.html` in the website working copy. Link it; never copy its sentences, and never repeat its unverified figures.

## What each page must do

- **H1:** the buyer's question, naming the community and the town. Example shape: "What does it cost to live in Del Webb at Grande Dunes in Myrtle Beach?" The second line answers in five words or fewer.
- **Short answer:** 40 to 120 words, the answer first, with numbers. A sentence that would be true on another page is not the answer.
- **Question headings,** each answered in its first sentence, 30 words or fewer. The first heading defines the community: builder, years, homes, place.
- **The age rule in the community's own recorded or posted words,** quoted and linked. The federal 80 percent rule is explained on the hub; link it, do not repeat it.
- **One table** of key facts and **one figure** (`h.figure`, an SVG chart or diagram built from verified numbers, with a label of 12 characters or more).
- **A worked example:** starts with "**Example:**", then a person and a situation told like a real story (a name, where they come from, a budget, a choice). Every number comes from a verified row or from the website's own tax data file, and the arithmetic is shown. Never say they are clients, never say they are not, never "our client" or "we helped".
- **Property tax:** use the website's own figures: the district millage options inside the calculator script on `chapter3realty/buyers/property-taxes/index.html` and `data/relocating/tax-engine.js` (tax year 2025 certified millage; say "2025 millage" and that 2026 bills use the newly certified rates). Name the tax district from the ledger, show the 4 percent owner-occupied ratio and the homestead exemption at 65 after one full calendar year of residency. Link /buyers/property-taxes/.
- **Gaps are said plainly.** Where dues or resale prices are not verified, say where a buyer gets them and what to ask for (the association's current budget, the resale certificate, the transfer and capital contribution fees). Never guess and never use a listing site's figure. Resale prices are added next week from MLS data.
- **Links:** 5 or more internal links inside full sentences whose anchors say what the target answers (the hub, /buyers/property-taxes/, /buyers/coastal-insurance/, /hoa/estoppel-and-transfer-fees/, /hoa/rental-restrictions/, /hoa/documents/, /buyers/relocating/healthcare/, the other three community pages). 2 or more primary sources linked in the body, next to the claims they support.
- **Two CTAs** inside the article. Their labels name a value the reader gets (for example, "Get the documents checked before you offer"), never a financing offer.
- **Author:** `author: "devin"`. Devin's name appears only in the byline the generator writes. Never in the copy. Never name Paul.

## Never

- A conclusion about a named community, builder or HOA: no "premium", "value", "well run", "popular", "best", "sought-after". Dated, observable facts only.
- Who lives there or who it suits. Describe the homes, the rules, the place.
- A sentence that appears on two of the four pages. Write each page from its own ledger.
- A metaphor, a personified number or law, a figurative verb (carry, map, sets, decides, wins, sits, runs). See `voice/RULES.md`.
- An interest rate or a loan payment amount.

## Build and gate, in the website working copy

Working copy: `/tmp/claude-0/-home-user-Blog-Brain/8900fb2a-1006-5ba7-88a3-019838e5433c/scratchpad/draft` (a throwaway clone with the generator patch applied; never push from it).

```
cp <spec> specs/<slug>.js
node tools/mkpage.js specs/<slug>.js
node build.js audit                     # zero errors that name your page; read every warning that names it
node /home/user/Blog-Brain/tools/score.js --site chapter3realty --only /buyers/55-plus-communities/<slug>/
node /home/user/Blog-Brain/tools/claims-scan.js chapter3realty/buyers/55-plus-communities/<slug>/index.html
node /home/user/Blog-Brain/tools/facts-check.js .
```

- The score must be 90 or more with no blocker. The claims scan and the facts check must report nothing for your page.
- The audit's sitemap date warning for a new page is expected in this clone. Every other warning that names your page gets fixed.
- After all four build, add one link to each page from the hub's comparison table row for that community, in the working copy, so no page is an orphan.
- Then check that no sentence appears on two of the four pages (compare the visible text of all four).

## Hand back

- The four specs in `/home/user/Blog-Brain/batches/2026-10-a/specs/`.
- For each page: the score, the audit result, and the facts you wanted but could not use because they were not verified.
- Every place you were unsure whether a sentence broke a rule.
