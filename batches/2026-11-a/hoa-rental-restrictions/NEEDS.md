# Needs: /hoa/rental-restrictions/

1. **tools/checkpoint.sh drops new files when any pathspec does not exist yet.** `git add -N -- "$@"` fails as a whole if one path (here `specs/hoa-rental-restrictions.js` and the images folder, not yet made) matches nothing, so the new data files were left out and `web.patch` came out empty. Workaround used: ran it again with only the paths that exist. Fix: add each pathspec on its own, or filter to existing paths first. Every research helper whose spec is still unwritten hits this.
