# Needs: /sell/fsbo/

Not for this page's spec; for the lead.

1. **/sell/ hub** carries the same conflicting ad spend and "3 million" views as the old FSBO page, names Devin in copy, and calls the Section 121 exclusion a South Carolina rule (judge's notes for /sell/). Hubs are a later group; flag it there. Facts that can carry over from this ledger: rows 14 to 18, 20, 26.
2. **Raw deeds with names** for rows 23 and 24 are read from `scratchpad/wf2/submarkets-little-river/raw/` (a sibling's re-pull of the 53 weekly AcclaimWeb searches). A container restart deletes them. The rerun line is in `<web2>/data/2026-11-a/sell-fsbo/README.md`.
3. **Commons API** returned HTTP 429 during research; the three FSBO sign candidates in PLAN.md were not opened. The builder checks them at full size or uses the partner's photo.
4. **Checkpoint not pushed (2026-11-04).** The root filesystem has 56 MB free. `checkpoint.sh` cannot clone Blog-Brain (about 550 MB) into the scratchpad, so `git clone` fails with "No space left on device". About 20 old `scratchpad/checkpoint-batches-*` clones (550 to 750 MB each) and `scratchpad/wf2` (7.6 GB) fill the disk. They belong to other helpers, so this helper did not delete them. `web.patch` and `web.base` are written in this folder (17 files: the data folder). Rerun the checkpoint command once space is freed. The pathspecs `specs/fsbo.js` and `chapter3realty/images/2026-11-a/sell-fsbo` do not exist yet. If they are passed, `git add -N` fails and the patch comes out empty, so leave them out until the builder creates them.
