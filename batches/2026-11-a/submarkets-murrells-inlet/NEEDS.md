# Needs: /submarkets/murrells-inlet/

1. **tools/checkpoint.sh drops everything when one pathspec does not exist yet.** At the research stage `specs/murrells-inlet.js` and `chapter3realty/images/2026-11-a/submarkets-murrells-inlet` do not exist, so `git add -N` fails for the whole list and `web.patch` came out empty (0 bytes). Re-running with only `data/2026-11-a/submarkets-murrells-inlet` saved 94 files. Fix proposal: add each pathspec on its own, skipping the missing ones. Other research helpers in this batch may have empty web.patch files.
2. **Wikimedia Commons API returned 429 (too many requests)** twice on 2026-11-02 from this container. The builder must fetch and view the Commons candidates in PLAN.md before use.
3. **fema.gov OpenFEMA claims endpoint** returned an error page on 2026-11-02 (claims by storm for ZIP 29576 not pulled).
