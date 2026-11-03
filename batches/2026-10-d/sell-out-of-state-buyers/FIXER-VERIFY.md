# Fixer rows: independent verify, /sell/out-of-state-buyers/

Verifier: a helper that did not research or write these rows (prompts/verifier.md). Date: 2026-11-03.

Every source was fetched live on 2026-11-03 into a fresh folder: `<scratchpad>/fv-oos2/` (h4216.html, I290.pdf, I295.pdf, prereqs.pdf, t12c008, t26c001, t26c002, t26c003, t26c006, t27c050, t37c010, t40c057, tc409, doe.html, eao05-16, eao06-11, eao00-17, title26). The page read is the built `web2/chapter3realty/sell/out-of-state-buyers/index.html`. No row has a script behind it. The only arithmetic (rows 31, 41) was redone: $100,000 x 5.21% = $5,210; $400,000 x 5.21% = $20,840; 5.21% of $0 = $0.

## Counts

- VERIFIED: 13 (rows 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46)
- CORRECTED: 4 (rows 31, 32, 43, 47)
- STRUCK: 0

Four entries were added to `sell-out-of-state-buyers-struck.json` (rows 31, 32, 43, 47). Each entry's struck text fires it, and its approved text fires no entry. All four fire on the current build, at the six sentences below.

## Rows

| Row | Status | Note |
|---|---|---|
| 31 | CORRECTED | 5.21% for 2026 is right: DOR, "The tax rate for income from $30,000 and above is 5.21%", "effective beginning with the 2026 tax year"; I-290 line 2, "top marginal Individual Income Tax rate for the tax year of the sale". The base without Form I-295 is wrong. 12-8-580(A)(1)(b) says "the amount realized on the sale". The I-290 line 1 instructions say: "Subtract the selling expenses from the selling price to compute the amount realized." The page says "the whole price". The sibling /sell/capital-gains/ already says "the whole sale price (minus your selling costs)" and its calculator uses "Amount realized (price minus selling costs)". The deed recording fee on this page ($1,480) is a selling expense the I-290 names ("deed recording fees"), so on the $400,000 example the hold-back without the form is less than $20,840. |
| 32 | CORRECTED | The form facts are all on I-295 and I-290: item 13, "The withholding amount is limited to the entire net proceeds of the sale"; I-290 line 4, "lesser of line 2 and line 3"; item 12 (gain) and item 15 (principal residence under IRC 121); the jurat "SUBSCRIBED AND SWORN ... Notary Public"; "provided by the nonresident seller to the buyer"; "Keep the I-295 as part of your tax records." "You can sign it at the same visit as the deed" follows from both papers needing a notary, and is said as "can". The page's "usually through the closing attorney's office" is a claim about how often something happens, and no source gives it. 12-8-580(D) says the buyer remits, and a closing attorney "that has in fact withheld taxes is required timely to remit the amount withheld". |
| 33 | VERIFIED | Horry County prereqs.pdf: "The notary may also be one of the witnesses." |
| 34 | VERIFIED | 26-3-60: "(1) That the person acknowledging appeared before the person taking the acknowledgment". Chapter 3 has no word "remote" or "electronic" in its text (the "video" and "audio" hits are the site menu). Also checked Chapter 2, the Electronic Notary Public Act (2021 Act 85). 26-2-50(A)(1) allows an electronic notarization only if the signer "appears in person before the electronic notary public". So "no video notarization of its own" holds. |
| 35 | VERIFIED | 26-6-70(A), (B), (D) as quoted. 26-6-50(B): the chapter "applies only to transactions between parties who agree to conduct transactions by electronic means", "determined from ... the conduct of the parties". On the page, both sides sign by e-signature, so the condition is met. No change. |
| 36 | VERIFIED | Doe v. McMaster, Op. 25508, n.4: "In re Easler, 275 S.C. 400, 272 S.E.2d 32 (1980) (holding that the preparation of a deed for another constitutes the unauthorized practice of law)". |
| 37 | VERIFIED | 27-50-70(A), quote exact. Page: "As your listing agent, we must tell you in writing what this law asks of you." |
| 38 | VERIFIED | 27-50-250(A), (B), quotes exact. The four timeline lines on the page match: before ratification, the buyer gets every future rental period in writing; within 14 days of the contract, the rental company gets the name and address; stays beginning within 90 days of recording are honored; a later stay cannot be enforced, with a refund within 45 days of the recording. |
| 39 | VERIFIED | 12-8-580(F)(1) and 12-8-2020(A)(2), quotes exact. I-290 "How do I request a refund", quote exact. Page: "If more was held back than you owe, you can ask the state for the difference as a refund." "a sale that closes in a later year may use a different rate" matches I-290 line 2 "for the tax year of the sale" and the DOR note on further cuts. |
| 40 | VERIFIED | 37-10-102(a), quote exact. The section covers a loan whose "primary purpose ... is for a personal, family or household purpose". The page says "a home loan", the ledger says "for a home to live in". A loan for a pure rental is outside the section. The lead may add "for a home you will use" if wanted. Not blocking. |
| 41 | VERIFIED | IRS Topic 409, the three quotes exact. "what the home cost you" is the plain word for basis ("Generally, an asset's basis is its cost to the owner"). Improvements are left to /sell/capital-gains/. |
| 42 | VERIFIED | 27-50-250(B), third sentence, quote exact. |
| 43 | CORRECTED | 40-57-350(C)(1)(a), (b)(i) to (v) match the first six list items. Item (f) has four exceptions: (i) written consent, (ii) required by law, (iii) "necessary to defend the licensee against an accusation of wrongful conduct", (iv) "the information becomes public from a source other than the broker". The page lists two of them with "unless ... or", which reads as the whole list. That leaves out an exception. The line "South Carolina law requires our agent to carry out the terms of that agreement" is (C)(1)(a) and stands. |
| 44 | VERIFIED | EAO 05-16, all five quotes found: "An attorney may conduct a real estate closing by mail ...", "reasonable means to be in contact with the attorney whether it be by telephone, facsimile, or electronic transmission", "sending the documents to the client for signature and return", "must still be reviewed by the attorney", "There is no legal requirement that a client attend the closing." |
| 45 | VERIFIED | EAO 06-11: "The sales contract executed by the prospective home buyer (Buyer) indicates that Lawyer will conduct the closing". EAO 00-17: "Seller and Buyer have agreed that Seller will pay all attorney's fees". 00-17 says "agreed" and does not say the terms are in the sales contract. The page's "The contract can name the attorney and who pays" is a fair reading of an agreement between buyer and seller. Not blocking. |
| 46 | VERIFIED | EAO 00-17 quotes the Rule 4.3 comment: "the lawyer should not give advice to an unrepresented person other than the advice to obtain counsel." The quote is exact. 06-11: "has not been clearly resolved". The page says "That attorney works for the buyer" only for the home-loan case, from 37-10-102 ("legal counsel that is employed to represent the debtor"). It does not say "only the buyer". |
| 47 | CORRECTED | 26-1-5(13), quote exact. Title 26 has chapters 1, 2, 3 and 6. But 26-1-5 opens "For purposes of this chapter", so the definition covers a South Carolina notary (Chapter 1). The page uses it to answer "Can you use an online notary from your state?", and a notary in another state comes under Chapter 3 (26-3-20, 26-3-60). That uses a definition outside its own chapter. Scope it to South Carolina's own notary law, and give the Chapter 3 point from row 34 for the other-state case. The advice "Do not plan on it ... so sign in person" stands. |

## Sentences to change

Each sentence is quoted from the built page, followed by its replacement. Every replacement is under 28 words and was run against build.js's word lists with no hit.

1. Row 31, hero: "For 2026, it is 5.21 percent of your gain if you sign the state's form, or of the whole price if you do not."
   Use: "For 2026, it is 5.21 percent of your gain if you sign the state's form, or of the price less your selling costs if you do not."
2. Row 31, hold-back table, row "You do not sign Form I-295": cell "5.21% of the whole price", and cell "$20,840".
   Use: "5.21% of the price less your selling costs", and "Under $20,840". The $1,480 recording fee alone puts it under that figure.
3. Row 31, FAQ "Is anything held back if I sell at a loss?" (page and FAQ schema): "Without the form, it is figured on the whole price."
   Use: "Without the form, it is figured on the price less your selling costs."
4. Row 32: "The buyer, usually through the closing attorney's office, sends it to the South Carolina Department of Revenue."
   Use: "The buyer sends it to the South Carolina Department of Revenue. If the closing attorney's office holds it back, that office must send it."
5. Row 43, last list item: "keep private what you tell us that could hurt your sale, unless you agree in writing or the law requires it."
   Use: "keep private what you tell us that could hurt your sale, except in the cases the law allows, such as your written consent."
6. Row 47: "South Carolina law defines appearing before a notary as being in each other's physical presence."
   Use: "South Carolina's own notary law defines appearing before a notary as being in each other's physical presence. Its law on notaries in other states does not say a video call counts." Keep the "physical presence" link to 26-1-5.

## Not blocking, for the lead

- Step 5 and "How the papers travel" say as plain fact that "The closing attorney's office sends you the deed" and that you "send it back to that office". EAO 05-16 says an attorney "may" close by mail. Owner question 4 in facts.md (do the attorneys we work with mail the package?) is still open. Writing "can send" would match the source until the owner answers.
- The ledger status column still reads VERIFIED-BY-FIXER on rows 31 to 47. This file holds the verdicts. Update that column when the fixes above land.
