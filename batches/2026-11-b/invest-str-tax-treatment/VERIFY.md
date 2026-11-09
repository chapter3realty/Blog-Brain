# Verify: /invest/str-tax-treatment/

Independent verifier, 2026-11-09. I opened https://www.irs.gov/publications/p925 (the 2025 edition, "For use in preparing 2025 Returns"), the Fannie Mae Selling Guide B4-2.1-03 (https://selling-guide.fanniemae.com/sel/b4-2.1-03/ineligible-projects), and chapter3realty/invest/condo-buildings/index.html in the website working copy.

Counts: 3 VERIFIED, 0 CORRECTED, 1 STRUCK.

| # | Status | Why |
|---|---|---|
| 1 | VERIFIED | Quote found word for word under "Phaseout rule". $25,000; reduced by 50% of MAGI over $100,000; none at $150,000 or more. At $100,000 the reduction is zero, so "$100,000 or less" is right. Married filing separately has its own figures ($12,500, $50,000, $75,000); the FAQ speaks of the usual case, which is fine. Stale by the 2026 edition. |
| 2 | VERIFIED | Quote found under "Special $25,000 allowance". "Take part in the management decisions" matches Pub 925 "Active participation": "you may be treated as actively participating if you make management decisions in a significant and bona fide sense. Management decisions that count as active participation include approving new tenants, deciding on rental terms, approving expenditures". The Pub also requires at least a 10% interest; the FAQ does not need it, but it must not say the test is the only condition. |
| 3 | VERIFIED | Quote found under "Rental Activities", exceptions: "The average period of customer use of the property is 7 days or less." Such an activity is not a rental activity, so the rental real estate allowance cannot apply. |
| 4 | STRUCK | No source counts or names buildings that require the pool. The directory has no field for it (it says "mandatory rental pooling" only as a general Fannie Mae concept). The approved replacement is supported by the primary source, which I opened: Fannie Mae Selling Guide B4-2.1-03, "The HOA or project's legal documents require owners to make their unit available for rental pooling (daily or otherwise)" makes a project ineligible. It names no building. |

## FIX.md: sentences that go beyond the verified rows

- FAQ answer: all five sentences are inside rows 1 to 3 and the round 1 rows. Pass.
- Body, "it is gone at $150,000": row 1. Pass.
- Rental pool paragraph: "A building's own documents can require the pool. In that building you cannot opt out. Other buildings let you manage the unit yourself or hire your own manager." Row 4 replacement, supported by Fannie Mae. Pass. Keep it without a count, and keep the directory link as "how each building runs its rentals", not as a list of mandatory pools.
- Nothing else in the plan states a new fact.

Struck list: batches/2026-11-b/facts/invest-str-tax-treatment-struck.json.
