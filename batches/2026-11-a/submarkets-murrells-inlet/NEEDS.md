# Needs: /submarkets/murrells-inlet/

1. **tools/checkpoint.sh drops everything when one pathspec does not exist yet.** At the research stage `specs/murrells-inlet.js` and `chapter3realty/images/2026-11-a/submarkets-murrells-inlet` do not exist, so `git add -N` fails for the whole list and `web.patch` came out empty (0 bytes). Re-running with only `data/2026-11-a/submarkets-murrells-inlet` saved 94 files. Fix proposal: add each pathspec on its own, skipping the missing ones. Other research helpers in this batch may have empty web.patch files.
2. **Wikimedia Commons API returned 429 (too many requests)** twice on 2026-11-02 from this container. The builder must fetch and view the Commons candidates in PLAN.md before use.
3. **fema.gov OpenFEMA claims endpoint** returned an error page on 2026-11-02 (claims by storm for ZIP 29576 not pulled).

## Build (2026-11-02)

4. **No homes strip on this page.** `G.homes(slug, name)` needs a CRM place slug in `idx-places.json`, a shared file. Proposed rows: `murrells-inlet-horry` (houses on the Horry side, west of the bypass) and `murrells-inlet-creek` (`has=marsh_view`, titled "Murrells Inlet homes with a marsh view"; 28 on 2026-11-02). Do not title a strip "with a dock" (only 9 tagged, row 35).
5. **critic.mjs warns `read.wall` on the FAQ at 390 px** (1,456 px of FAQ text). Non-blocking; the FAQ is five short open answers under H3s. The critic may not count an FAQ H3 as a break.
6. **Sitewide footer** says "The Myrtle Beach investor-focused brokerage" on a page for a buyer choosing where to live (CRAFT 4, "The page's surroundings are part of the page"). Shared footer; not changed here.
7. **The Georgetown tax rate's year** (row 16) is not stated by the county calculator. The page says "Georgetown County's current estimate". When a 2026 Georgetown bill can be read, confirm district 41 and register it (PROPOSED.md).
