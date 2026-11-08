# Fixer rows checked: /sell/divorce/

Verifier, 2026-11-08. This verifier did not research rows 36 to 38. Each source was opened live on 2026-11-08. Saved copies are in `scratchpad/wfn/sell-divorce/fv/`: `cfpb.txt`, `t20c3.txt`, `t27c7.txt`, `t15c61.txt`, `garret.txt`, `wj.txt`.

| Row | Status |
|---|---|
| 36 | CORRECTED |
| 37 | VERIFIED |
| 38 | CORRECTED |

Counts: 1 VERIFIED, 2 CORRECTED, 0 STRUCK. The ledger's status and note columns for these rows are updated. The struck list `sell-divorce-struck.json` has three new entries. The struck wording fires them, the approved wording fires none, and `tools/struck-check.test.js` passes. On the built page, all three fire now.

## Row 36: short sale (CFPB)

The CFPB page is live, last reviewed FEB 02, 2024. Both quotes and the waiver line are exact.

The source says a short sale is possible "if your lender or servicer agrees". It does not say a sale needs the lender's consent. A seller who pays the shortfall at closing needs no consent. So "would have to agree", "would need the lender" and "a sale does not pay off the loan" say more than the source.

**FAQ "What if we owe more than the house is worth?"**

- Page: "Then a sale does not pay off the loan. The lender would have to agree to a short sale, a sale for less than what is owed. If the lender forgives the rest, get that in writing."
- Replace with: "Then the money from a sale would not pay off the loan. The lender may agree to a short sale, a sale for less than what is owed. If the lender forgives the rest, get that in writing."

**Calculator note `#dvUw`**

- Page: "You owe more than the house is worth. A sale would need the lender to agree to a short sale."
- Replace with: "You owe more than the house is worth. The money from a sale would not pay off the loan. The lender may agree to a short sale."

## Row 37: temporary support and debts (SC Code 20-3-130)

VERIFIED.

- 20-3-130(A) and (B) are live, and the quotes are exact.
- 20-3-130(E) says: "In making an award of alimony or separate maintenance and support, ... The court may require the payment of debts, obligations, and other matters on behalf of the supported spouse." It covers any award, including one made pendente lite (while the case is open).
- 63-3-530(A)(38), "motion for pendente lite relief", is confirmed.
- "Such as the mortgage" is an example of a debt. The statute does not limit which debts.
- "Can" leaves room for the adultery bar in (A).

The FAQ sentences match the claim. Keep them as written. Do not widen them to who lives in the house (Not verified 4).

## Row 38: both names on the deed

The quoted statutes do not carry this claim.

- 27-7-40(a)(iii) is about an encumbrance (a mortgage or lien), not a sale.
- The quote from (ix) uses an ellipsis that drops "to themselves as tenants in common severs the joint tenancy and". Section (ix) is about owners deeding the house to themselves, not to a buyer.

The rule comes from case law:

- *Garret v. Weinberg*, 43 S.C. 36, 38-39 (1895). A co-owner's deed "purporting to convey the entire interest" has "only" the effect "to convey her undivided interest in the whole land".
- *Williams v. Jeffcoat*, S.C. Supreme Court Op. 28236 (Sept. 18, 2024). Under the common law, a joint tenancy "could be severed by unilateral conveyance by one cotenant to a third party". The court left that question open for deeds written under 27-7-40.

So one spouse can deed away their own share without the other. The bare "no" on the page is too broad. The half about a sale of the whole house, which needs both signatures or a judge's order, stands on these cases, 15-61-10(A) and row 6.

**H2 "Can my spouse sell the house without me, or refuse to sell?", first paragraph**

- Page: "If both of your names are on the deed, no. A sale of the whole house needs both of you to sign the deed, or a judge's order."
- Replace with: "If both of your names are on the deed, your spouse cannot sell the whole house without you. A deed signed by one spouse passes no more than that spouse's share. A sale of the whole house needs both of you to sign the deed, or a judge's order."

In the row's source cell, replace 27-7-40(a)(iii) and (ix) with *Garret v. Weinberg* and *Williams v. Jeffcoat*. Keep 15-61-10(A) and row 6.

None of the new wording matches the build.js personification patterns (lines 869 to 874).
