# Proposed: /hoa/rental-restrictions/

## Owner questions (templates/owner-questions.md), with our proposed answer

1. **The home-office story on the live page.** The live page tells of "a friend of ours" relocating to start a property management company, whose bylaws barred running the business from the house; he bought in a different community. It is not in `stories/stories.json`. Did it happen as told? **Proposed:** drop it from the page now. If you confirm it, add it to the story bank in your words and we put it back as a short story under "What else can an HOA restrict?".
2. **Optional.** In the HOA papers our agents read for rental buyers, which rules do you meet most: a ban, a minimum lease, a cap, a waiting period, a tenant application? Rough is fine ("most oceanfront buildings allow nightly; most newer house neighborhoods west of 17 require a year lease"). **Proposed:** the page ships without it, using the listing counts.

## Proposed registry rows (facts/registry.json)

- `condo-nightly-share`: "About 7 in 10 condos for sale in Horry County say short-term rentals are allowed." Pages: /invest/condos/ (1,895 of 2,656, 2026-11-02), /hoa/rental-restrictions/ (1,904 of 2,673, 2026-11-04). One rounded value on both. Stale monthly.
- `sc-no-rental-grandfather`: "South Carolina law does not exempt current owners from a new HOA rental rule." Wrong values to catch: "grandfathered by law", "cannot apply to current owners" on any SC page. Source: SC Code 27-30 and 27-31 (no provision). Stale quarterly.
