# Plan: every feature searchable, and the photo that matches on each card

Owner, 2026-11-08:
- "plan it out more before we do it"
- "we will just use Haiku in this chat"
- sign-up with the owner's email: "Yeah thats okay"
- "do the crm thing too ... tell me the plan and what everything will accomplish to make sure we are on the same page"

Status: a plan only. Building starts on the owner's "go".

## What it accomplishes

1. **A buyer can ask for anything.** "Big kitchen, loft, home office, screened pool, room for the boat." The search finds the homes that have it, from:
   - the MLS fields;
   - the photo captions;
   - the map;
   - the description;
   - the photos themselves.
2. **The card shows what they asked for.** Each result card shows the photo of the first thing asked for (the pool, the kitchen, the dock), when the home has one. Otherwise it shows the front photo, as today.
3. **The filter list grows** from 499 MLS features to about 850. That is the 354 in `CATALOG.md`, each with a count of homes for sale.
4. **Galleries load fast.** Every photo fetched for labeling is also saved in the website's photo store, and pages use that copy first.
5. **New listings are labeled every night by themselves,** on the API, for a few cents a day.
6. **No step needs your computer.** Database changes run by themselves when the CRM deploys. You approve in this chat.

## Who does what

- **The labeling:** Haiku helpers inside this chat, a few at a time. No new chats are opened.
- **The code:** this chat. It writes the CRM and website code and checks a sample of the labels.
- **You:** approve the CRM deploy, the 100-home test page and the full run. You run `deploy.ps1` for the website.

## Part A. The CRM groundwork (code only, nothing live)

1. **Database changes run on deploy.**
   - Railway's pre-deploy command runs `pnpm db:migrate` before the new version starts.
   - If a change fails, the deploy stops and the old version keeps running.
   - Every change is first tested on a practice database in this chat.
2. **The CRM rule is rewritten** (owner: "get rid of that rule"). The CRM's CLAUDE.md no longer says only the owner applies migrations, or that a cloud chat cannot reach production. It says migrations apply on deploy.
3. **Migration 0076 adds the label tables.**
   - `listing_labels`: listing, label, source (mls, caption, map, description or photo), photo number, when, and a fingerprint of the description and photo list.
     - The fingerprint means a home is labeled again only when its description or photos change.
     - Row-level security is on, deny-all, as with every MLS table.
   - `listing_label_runs`: one row per run, with homes, photos and cost.
4. **A label file loader.** The labels this chat makes are committed to the CRM as files. The deploy loads them into the table.
5. **The search uses the labels.**
   - A feature matches a home when any source has it.
   - `/api/idx/filters` lists the new features with their counts and a short meaning for the website's AI.
   - Each result carries `photo`: the number of the photo showing the first feature asked for.
6. **The nightly job (`listing-labels`).** It runs after the MLS sync and labels new and changed listings through the API (Haiku, the Batch API).
   - Every call goes through `src/lib/claude.ts` under the name `listing_labels`, so it is recorded in `ai_usage`.
   - A cap of $2 a day: it stops and posts to Slack when reached.
   - It deletes the labels of homes that left the market.
   - **It starts switched off.**
7. **The off switch** `LISTING_LABELS=off` sends search and cards back to today's behavior.
8. **Tests for:**
   - the caption word list;
   - the label list (no forbidden label can be added);
   - the loader;
   - the cap;
   - the search across sources.

   All existing tests still pass, and the type check is clean.

→ **Your yes, then this chat deploys the CRM.** Nothing changes for buyers yet: the table is empty and the job is off.

## Part B. The labels

1. **One sign-up** with chapter3realty@gmail.com, so this chat sees every photo of a home, as a signed-up buyer does. It makes one lead in the CRM, from you.
2. **Free labels first, by code:**
   - the 81 features with an MLS field;
   - photo captions ("Kitchen", "Pool", "Lanai") through a fixed word list;
   - the 28 "near" features from the CRM's distances.
3. **Descriptions.** Haiku helpers read each home's public description and mark only what it clearly states. "Sunny kitchen" is not "big kitchen". When in doubt, no label.
4. **Photos.**
   - The first 25 photos of each home, at 480 pixels.
   - Nine to a sheet, so a helper looks at about 3 sheets per home: about 26,000 sheets for every home, not 220,000 single photos.
   - Each label keeps the number of the photo that shows it.
   - Photos already labeled by a caption are skipped for that label.
5. **Speed.** The MLS gives at most 9,000 photos an hour for the whole account, and the live site needs part of that. The full pass takes about a day and a half. **This chat must stay open.**
6. **Each fetched photo is saved** in the website's photo store (about 10 GB, about 15 cents a month past the free amount).
7. **Never labeled.** The label list is fixed in code; nothing outside it can be stored. It never includes:
   - who lives in or near a home: family, children, age (except a community's stated 55-plus rule, as a fact), race, religion, disability, sex, origin;
   - "safe", "good schools" or a school's rank;
   - anything only a person in a photo shows.

   A room is a room: "playroom" describes the room, never the buyer.

### The 100-home test, before the full run

- 100 homes across price, town and kind: house, condo, townhome, land.
- This chat checks every label against the real photos and description, and fixes the instructions or the word list for each wrong one.
- The bar: 95 of 100 labels right, and no forbidden label.
- **You see a page:** each home's photos with their labels under them.

→ **Your yes, then the full run.** The labels are committed and deployed in parts, so search improves as each part lands.

## Part C. The website

1. The website AI reads the buyer's sentence against the full list of about 850 features.
2. The card shows the matching photo.
3. Galleries and cards use the saved copy first.
4. **Checked before release:** the MLS rules (CCMLS) on using a photo other than the first as the thumbnail. The rules require the listing firm on every card; this checks the current text on thumbnails.

→ **You run `deploy.ps1`.**

## Part D. Upkeep

The nightly job is switched on. It labels the 60 to 100 new listings a day for a few cents. The weekly review shows its cost.

## If something goes wrong

- **The off switch:** `LISTING_LABELS=off`.
- **One wrong label:** delete it for one home or for all homes. It does not come back unless the home's description or photos change.
- **The tables:** they can be dropped without touching anything else.

## Costs

| | Cost |
|---|---|
| Labeling in this chat | your plan's usage, no API dollars |
| Saved photos | about 15 cents a month |
| Nightly upkeep | a few cents a day |
| Each search | under $0.001 more; the matching photo is free |
