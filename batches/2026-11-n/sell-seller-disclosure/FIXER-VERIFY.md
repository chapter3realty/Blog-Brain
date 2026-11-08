# Fixer rows: independent check, /sell/seller-disclosure/

Verifier, 2026-11-08. I did not research these rows. I opened every source again today. Scratch copies are in `wfn/sell-seller-disclosure/fixver/`.

Result: 3 rows, 3 VERIFIED, 0 CORRECTED, 0 STRUCK. No page sentence needs to change.

| Row | Status | What I checked |
|---|---|---|
| 30 | VERIFIED | eCFR 6 CFR 5.21 (version 2026-10-01, fetched with compression, `fixver/cfr.xml`). (a)(2): write to the component at its appendix A address "or via the internet at https://www.dhs.gov/foia". (a)(3): a component's central FOIA office is where most Privacy Act requests go. (a)(6): "the requester should mark the request letter "Privacy Act Request"". (e): "full name, current address, date and place of birth, and country of citizenship or residency"; signature "notarized or submitted by the requester under 28 U.S.C. 1746 ... under penalty of perjury". FEMA's NFIP data FAQ, opened live: requester gives "the name of the requester, the type of record they are looking for and the required verification of identity ... when required by 6 CFR § 5.21". The page's three steps match. |
| 31 | VERIFIED | Utah Insurance Department C.L.U.E. page, opened live: "request a copy of your C.L.U.E. report from LexisNexis Risk Solutions by filling out an online form", "by calling toll-free 1-866-312-8076 or by mail". The page states no cost. The page sentence names the company and the three ways only. |
| 32 | VERIFIED | The form PDF, downloaded today from llr.sc.gov, has md5 393ba8c3af8a7a1f0f0a2802e26ecd5c, the same as DATA's copy. Page 1: "Owner still has a duty to disclose information that is known at the time of the disclosure statement." Page 4, under "do you have any actual knowledge or notice concerning": Q23 "Flood hazards, wetlands, flood hazard designations, flood zones, or flood risk affecting the property." Q25 "... claims filed on the property during your ownership." The page states the form's words and sends the older-claim question to an attorney. That is not advice. |

## Page sentences checked

- "In writing to FEMA's records office, or online at dhs.gov/foia. Mark it "Privacy Act Request"." Matches 5.21(a)(2), (a)(3), (a)(6).
- "Your full name, current address, date and place of birth and country of citizenship, and the home's address." The rule says "country of citizenship or residency". Giving the country of citizenship meets the rule, so the sentence is not wrong. "The home's address" is how the page names the record, per the FEMA FAQ.
- "Before a notary, or with a statement that it is true under penalty of perjury, as the federal rule allows." Matches 5.21(e).
- "You order it from LexisNexis Risk Solutions, online, by phone or by mail." Matches the Utah page.
- "Question 25 asks only about claims while you owned the home. Question 23 asks about any flood risk you know of, and the form says you must disclose what you know when you fill it in. A South Carolina attorney can say whether an older claim belongs in your answer to question 23." Matches the form, pages 1 and 4.

## Optional, not blocking

- Row 30: an owner who is not a citizen of the country they live in may give the country of residency instead. The page could say "country of citizenship or residency". The current wording is still correct.
- Row 30: 5.21(d) makes a request a promise to pay fees up to $25. The page states no fee, which is fine. Do not add a processing time; none is published.
