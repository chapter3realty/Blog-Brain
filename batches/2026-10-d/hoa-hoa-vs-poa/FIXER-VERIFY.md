# Fixer-verify: /hoa/hoa-vs-poa/ (batch 2026-10-d)

Independent verifier, 2026-11-03. I did not research or fix these rows. I checked the five rows marked VERIFIED-BY-FIXER in `facts.md` (rows 27 to 31). I opened each source and re-ran each script behind them. I did not edit the page, the spec or the ledger. I added two entries to the struck list `hoa-hoa-vs-poa-struck.json`. Each fires on the page as built and is quiet on the approved wording. `node tools/struck-check.test.js` prints "all controls pass".

**Counts:** 5 rows. 1 VERIFIED, 4 CORRECTED, 0 STRUCK.

## What I re-ran

| Script or source | Result |
|---|---|
| `has-with-fee.json` (saved 2026-11-01T02:41Z) | Every count in rows 27 and 30 is in the file. Each share is right: 84/338 = 24.9, 189/338 = 55.9, 1,996/2,866 = 69.6, 2,504/2,866 = 87.4, 234/2,590 = 9.0, 1,576/2,590 = 60.8, 64/338 = 18.9, 247/338 = 73.1. |
| `pull_has_with_fee.py`, live, 2026-11-03 | The method reproduces. The feed has moved since the 1st. Townhouse amenities are now 187/337 = 55 (page 56). Townhouse trash is 244/337 = 72 (page 73). Every other cell is within a point of the page. The page dates its count, so this is not a correction. The pull should be re-run with the rest of the page's data before it ships. |
| `community-fees.json` (saved 2026-11-01T15:29Z) | Every value in row 31 is in the file. Shares: 98/106 = 92.5, 47/106 = 44.3, 99/112 = 88.4, 24/46 = 52.2, 37/46 = 80.4. |
| `pull_community_fees.py`, live, 2026-11-03 | The median bands are the same: Grande Dunes houses $345 to $350, Barefoot condos $565 to $570, Prince Creek houses $135 to $140. The shares still fit the page's words: 94/103 = 91 ("more than nine in ten"), 45/103 = 44, 97/110 = 88, 25/46 = 54, 37/46 = 80. |
| `chapter3realty.com/homes/api/filters`, live | The label for `community_amenities` is "Community amenities", in the "Community and HOA" group. Every fee item has an "HOA pays" label: "HOA pays internet", "HOA pays trash pickup", "HOA pays water, sewer", "HOA pays insurance". `gated` is "Gated community". The saved `hoa-reserves/raw/filters.json` uses the same labels. |
| scstatehouse.gov t27c031.php, live | 27-31-210(a) matches the row's quote word for word. |
| `association-names-merged.json` | POA 103 of 526 = 19.6. That is the count the first verifier reproduced (VERIFY.md, correction 9). The private lien files are no longer in the sandbox, so I checked only the saved output and its arithmetic. |
| Listing pages behind `subdivision=Grande Dunes` | 18 of the 103 houses are in Longs 29568, and their MLS subdivision is "Grande Dunes - North Village". The others are in "Grande Dunes - Members Club", "- Islecrest" and so on. The page's "Grande Dunes" means every MLS subdivision whose name contains "Grande Dunes". This is a note, not a correction. |

## Row by row

| # | Status | The point |
|---|---|---|
| 27 | CORRECTED | The internet share (25) is right. `community_amenities` is a community feature, "Community amenities". It is not an "HOA pays" item. So "the listing says the fee covers shared amenities" says more than the source does. The count (189 of 338, 56) can stay if its label is right. |
| 28 | VERIFIED | 27-31-210(a) word for word. The page sentence says the same, for condos only. |
| 29 | CORRECTED | The count is right (103 of 526, about one in five). But the page also says a POA can put a lien on a house "if its recorded papers make you pay dues". No row supports that condition. Row 28's note and the page's own condo answer say that for a house, the recorded papers decide the remedies. A duty to pay dues is not the same thing as a lien right. |
| 30 | CORRECTED | Same as row 27, for the condo (87) and house (61) amenities cells. The internet, water and sewer, and trash cells are right. |
| 31 | CORRECTED | The fees, the gate shares, the Barefoot insurance share and the Prince Creek trash share are right. "Say the fee covers shared amenities" (Grande Dunes) has the same fault as row 27. |

## Each sentence to change, with its replacement

1. **Rows 27 and 30. The fee table "What the association fee covers".** The row label is "Shared amenities" (87%, 56%, 61%), and the caption reads: "Share of homes for sale with an association fee whose listing says the fee covers each item. Our count of the local MLS."
   Either remove the "Shared amenities" row from the table (spec line 80, `["community_amenities", "Shared amenities"]`, and the throw on line 82 if it checks those cells), or relabel the row "Amenities in the community" and make the caption: "Share of homes for sale with an association fee whose listing says the fee covers each item. The amenities row counts listings that say the community has shared amenities, not that the fee pays for them. Our count of the local MLS."
2. **Row 31. The Grande Dunes card.** "More than nine in ten of those listings say the fee covers shared amenities, and more than four in ten list a gate."
   Replace with: "More than nine in ten of those listings say the community has shared amenities, and more than four in ten list a gate."
3. **Row 29. The answer box.** "If you fall behind on dues a POA's papers require, it can put a lien on your home, a claim on it for the money you owe."
   Replace with: "If you fall behind on dues, a POA can put a lien on your home when its recorded papers allow one. A lien is a claim on the home for the money you owe."
4. **Row 29. The FAQ "Can a POA put a lien on my house?" (the page and its FAQ schema).** "Yes, if its recorded papers make you pay dues, as an HOA can."
   Replace with: "Yes, if its recorded papers give it a lien for unpaid dues, as an HOA's papers can." The next two sentences stay.

I checked the replacement wording against the regular expressions in `build.js` and the struck list. None fires.

## Notes for the lead

- Before the page ships, re-run `pull_has_with_fee.py` and `pull_community_fees.py`. The spec throws if a cell moves, and today two townhouse cells would move by one point (amenities 56 to 55, trash 73 to 72).
- Two new struck entries: "hoa-vs-poa 27, 30, 31" (fee covers ... amenities) and "hoa-vs-poa 29" (papers make you pay dues / dues a POA's papers require). The usual home for the struck list is `batches/2026-10-d/facts/`. Copy it there along with the 25 earlier entries.
