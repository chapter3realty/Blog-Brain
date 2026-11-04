# Fixer rows re-verified: /hoa/tax-deductible/

Independent verifier, 2026-11-04. I did not research these rows. I fetched each source fresh from its URL on 2026-11-04 (IRS P527 and P530, both "For use in preparing 2025 Returns"; SC Code Title 12 Ch. 43 from scstatehouse.gov), turned each to text, and found every quoted line in it. No script sits behind these four rows. Copies: `scratchpad/wf2/hoa-tax-deductible/fixver/` (p527.txt, p530.txt, t12c043.txt).

| Row | Verdict | Check |
|---|---|---|
| 36 Fair rental price | VERIFIED | P527 "Fair rental price" quote matches word for word, under "Dividing Expenses" in ch. 5. Page: "A fair price is about what a person not related to you would pay. A rent far below what similar condos nearby charge is not a fair price." Faithful to "generally" and "substantially less". |
| 37 Second home never rented | VERIFIED | P530 "Nondeductible payments" list matches and names "Homeowners association fees, condominium association fees, or common charges." The section is framed for "a homeowner", not a main home only. "Qualified Home ... main home or your second home" matches (it is the mortgage interest section; used only to show P530 covers second homes). The conclusion is an inference, as the row says, and it is sound: with no rental use there is no rental expense under P527. Page table, FAQ and FAQ schema say "No" and "the same rule as a main home". |
| 38 Out-of-state owner pays 6 percent | VERIFIED | 12-43-220(c)(1) "does not qualify as a legal residence unless the residence is determined to be the domicile of the owner-applicant" and the (c)(3) certificate text match. The 6 percent rate is 12-43-220(e), "All other real property ... six percent", which supports the page line. Page: "An owner who lives in another state pays 6 percent, because the 4 percent rate is only for the owner's domicile." |
| 39 "In service" | VERIFIED | P527 ch. 2 "Placed in Service" quote matches word for word. Page: "In service means finished and ready to use." A fair plain-words reading of "ready and available for its specific use". |

Result: 4 VERIFIED, 0 CORRECTED, 0 STRUCK. No page sentence changes. Nothing added to `hoa-tax-deductible-struck.json`.

Note for the lead (not blocking): row 38 cites only 12-43-220(c). Adding "(e)" to its Where column would name the clause that sets the 6 percent rate.
