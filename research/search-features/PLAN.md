# Plan: every feature searchable, and the photo that matches on each card

Owner, 2026-11-08: "plan it out more before we do it plan exactly how you will do it also why cant we do it inside of this chat instead of use the API?"

Status: a plan only. Nothing here is built yet.

## What the buyer gets

1. They type anything: "big kitchen, loft, home office, screened pool, room for the boat". The search finds the homes that have it. It reads the MLS fields, the description and the photos.
2. Each result card shows the photo of the first thing they asked for (the pool, the kitchen, the dock), when the home has one. Otherwise it shows the front photo, as today.
3. The filter list grows from 499 MLS features to about 850 (the 354 in `CATALOG.md`), each with a count of homes for sale.

## Why not do the labeling inside this chat

It is possible in principle. It is the wrong tool for this job, for four reasons.

1. **Size.** About 8,785 listings and about 263,000 photos. This chat's 10-page batch used about 20 million tokens over 9 hours. Looking at every photo here is about 200 million tokens or more: about ten of those batches, around 90 hours of agent time. That would use weeks of your plan's limits, which you need for pages.
2. **Access.** This chat cannot reach the CRM's database or its photo store. The CRM's own rule says a cloud session cannot reach production. Every photo would first have to be exported and moved here.
3. **Upkeep.** About 60 to 100 new listings arrive every day. A chat cannot run by itself every night (you ruled out scheduled tasks, and a chat stops when it is closed). So the CRM needs the nightly job anyway, and once it exists, it can do the first pass too.
4. **Price.** On the API, with Claude Haiku 5.5 and the Batch API, the first pass costs about $10 to $25 and upkeep about $3 to $7 a month. That is less than one bad day of the old Sonnet search.

**What this chat does do:**
- writes the code;
- designs the label list and the prompts;
- reads the 100-listing test results against the actual photos and descriptions (a second, independent check of the labels);
- spot-checks after the full run.

That work needs judgment, not volume.

## How it works

### Step 1. Labels from what is already there (free, no AI)

- **MLS fields.** 81 catalog features already map to an MLS field (`mls` in `catalog.json`). Code matches them, as the search does today.
- **Photo captions.** The MLS sends a caption with some photos ("Kitchen", "Pool", "Primary bath"). The CRM already stores it (`mls_listings.media[].caption`). Code maps caption words to labels with a fixed word list ("pool" → pool, "lanai" → screened pool, "bonus" → bonus room). A captioned photo that names a label needs no AI look for that label.
- **Map data.** The 28 "near" features use the distances the CRM already computes.

The first run reports how many listings and photos have captions. That number decides how much of Step 3 is needed.

### Step 2. Labels from the description (AI, about $1 once)

- **Input per listing:** the public description and the detail fields, as the search already reads them. Schools are left out.
- **Batching:** 20 listings per call. The label list (the description-findable features, with one line on what each means) goes first in the call and is cached, so it is paid for in full only once.
- **Output:** for each listing, only the labels the text clearly states, through structured output (a fixed list of keys, so the model cannot invent one). "Sunny kitchen" is not "big kitchen". When in doubt, no label.
- **Model:** Claude Haiku 5.5 at low effort. The first pass uses the Batch API (half price, results within a day). Nightly runs use the Batch API too.

### Step 3. Labels from the photos (AI, about $9 to $24 once)

- **Which photos:** each listing's first 40 photos (the order agents use: front, living, kitchen, bedrooms, baths, outside). Photos already captioned with a label count for that label and are skipped for it.
- **Size:** the CRM's own webp copy at 768 pixels on the long side. The CRM serves those already (`src/lib/idx/photo-webp.ts`), so no photo leaves our systems except to the model.
- **Batching:** 10 photos per call, with the list of photo-findable labels (190) cached at the front.
- **Output per photo:** the labels it clearly shows, each with "sure" or "unsure". Only "sure" is stored. The photo index is kept with each label, so the card can show that photo.
- **Rooms, not people:** a photo with a person or a personal item in it is never described, only labeled for the room.

### Step 4. Storing the labels (CRM database, one new table)

Migration `0076_listing_labels`:

- `listing_labels`
  - `listing_key`: the listing.
  - `label`: a key from the catalog.
  - `source`: mls, caption, description or photo.
  - `photo_index`: which photo shows it, for photo and caption labels.
  - `model`, `labeled_at`.
  - `input_hash`: of the description, or of the photo list, so only changes are labeled again.
  - Primary key `(listing_key, label, source, photo_index)`. Row-level security on, deny-all, as with every MLS table.
- `listing_label_runs`: one row per run, with listings done, photos looked at, tokens and dollars, for the weekly review.

The CRM's rules apply: the SQL is proved in a rolled-back test first, the migration is applied on the real database before the code that reads it ships, and the table is declared in `schema.ts` only after it exists.

### Step 5. The nightly job (CRM, pg-boss)

`listing-labels` runs after the MLS sync, once a night. It:

1. Finds listings for sale whose description or photo list changed since they were labeled (by `input_hash`), plus new ones.
2. Runs Step 1 in code, then sends Steps 2 and 3 as one Message Batch.
3. Polls the batch and stores the results as they arrive.
4. Deletes labels of listings that left the market.

Every AI call goes through `src/lib/claude.ts` with its own feature name, `listing_labels`, so it is recorded in `ai_usage`, as the CRM's rule 7 requires.

**A spending cap of our own:** a daily dollar limit in an environment setting (suggested $2 a day, and $30 for the first pass). The job stops and posts to Slack when it reaches it. Rule 7 says nothing caps AI spend, so this cap is new and is only for this job.

### Step 6. The search uses the labels (CRM and website)

- **CRM search:** a catalog key in `has` matches a home when it has the MLS field, the description says it (Step 2), or a photo shows it (Step 3). One condition per key, OR-ed across the sources.
- **CRM filter list:** `/api/idx/filters` adds the new keys with their counts and a short meaning for the website's AI.
- **Website AI:** reads the buyer's sentence against the whole list. It already gets each key's meaning and count since the change on 2026-11-08, so a rare key leaves few results.
- **Website descriptions:** the description reading the search does now (ranking each home 0 to 10) stays. Labels make the first filter right; the reading ranks what is left.

### Step 7. The matching photo on the card

- The search response gains `photo` per listing: the index of the photo labeled with the first feature the buyer asked for, or nothing.
- The website card uses that photo's URL from the CRM's photo store instead of the first photo.
- **To confirm before release:** that the MLS rules (CCMLS) allow a photo other than the listing's first as the result thumbnail. The rules we read require the listing firm on every card; they do not name the thumbnail, but this is checked against the current rules text before it ships.

### Step 8. Never labeled

The label list is fixed in code, and the model can only choose from it. These are not in it and never will be:

- who lives in or near a home: family, children, age (except a community's stated 55-plus rule, as a fact), race, religion, disability, sex, origin;
- "safe", "good schools" or a school's rank;
- anything only a person in a photo shows.

A room is a room: "playroom" describes the room, never the buyer.

## Testing before anything runs on all listings

1. **Code tests in the CRM:**
   - the caption word map;
   - the label list (no forbidden label can be added);
   - the batch writer and reader;
   - the spending cap;
   - the search OR-ing MLS, description and photo labels.

   All 12,798 existing tests still pass, and the type check is clean.
2. **A test run on 100 listings,** chosen across price, town and kind of home: houses, condos, townhomes, land. It runs on the CRM's key, about 20 to 40 cents.
3. **This chat checks every label** against the listing's real photos and description. Each wrong label is a fix to the prompt or the word list. The bar: 95 of 100 stored labels right, and no forbidden label at all.
4. **You see the result** on a page: each listing's photos with their labels under them, and the measured cost of the 100. You approve the full run, or not.

## The order of work

| # | What | Who | Production? |
|---|---|---|---|
| 1 | Write the CRM code, migration, job and tests on a branch | this chat | no |
| 2 | Review the branch, apply migration 0076 (`railway run pnpm db:migrate`, then `pnpm db:check`) | owner, on a computer with the CRM's credentials | yes (database) |
| 3 | Merge and deploy the CRM (`pnpm deploy:now`); the job starts switched off | this chat, after your yes | yes |
| 4 | Turn on the 100-listing test (one setting) and read the results | owner turns it on; this chat reads | yes ($0.20 to $0.40) |
| 5 | Fix what the test shows; show you the photo page | this chat | no |
| 6 | The full first pass, with its cap | owner approves | yes ($10 to $25) |
| 7 | Website: the larger list in the AI, the matching photo on cards | this chat, then your deploy | yes |
| 8 | Nightly upkeep runs by itself; the weekly review shows its cost | automatic | about $3 to $7 a month |

Steps 2 and 4 need a computer with the CRM's credentials. This chat cannot do them, by the CRM's rule.

## If something goes wrong

- **Off switch:** one setting, `LISTING_LABELS=off`. Search goes back to MLS fields and description words, and cards go back to the first photo. Nothing else changes.
- **Wrong labels:** a label can be deleted for one listing, or for every listing, without touching the rest. The next run does not bring a deleted label back unless the description or photos change.
- **The table:** the labels can be dropped without touching any other table.

## The costs again

| | Cost |
|---|---|
| Test run, 100 listings | about $0.20 to $0.40 |
| First pass, descriptions | about $1 (about $0.50 with the Batch API) |
| First pass, photos | about $9 to $24 (lower with captions and the Batch API) |
| Upkeep | about $3 to $7 a month |
| Each search | under $0.001 more; the matching photo is free |

These are estimates. The test run measures the real numbers before the first pass.
