# Needs: /invest/condos/

- **tools/checkpoint.sh drops every file when one pathspec does not exist yet.** `git add -N -- specs/condos.js ...` fails on the missing spec and image folder, so no new file is intent-added and web.patch comes out empty (it did at the first two checkpoints of this stage). Workaround used: run it with only the pathspecs that exist (`data/2026-11-a/invest-condos chapter3realty/invest/condos/`). Fix: add each pathspec on its own and skip the ones that fail.
