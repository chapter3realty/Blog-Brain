# Shared needs: /buyers/new-construction/builders/

For the lead. This page edits no shared file.

1. **Link from the hub and the general guide.** /buyers/ (hub) and /buyers/new-construction/ should link this page in a sentence, for example in the general guide's "Where are new homes being built" section: "Every builder that sold 50 or more homes here, with its towns and prices, is on [the builders page]."
2. **Two builder counts on the site.** /buyers/new-construction/ prints 5,108 builder sales and a top-five chart for October 2025 to September 2026 (D.R. Horton 1,417). This page uses November 2025 to October 2026 and a slightly wider buyer rule (company buyers that are not builders, developers or associations are kept): 5,280, D.R. Horton 1,397. Both are right for their windows, but a reader who reads both sees two numbers for "the past year". Options: (a) the general guide drops its builder chart and links here (preferred: this page owns "who are the builders"); (b) the general guide keeps its chart and both pages state their months in the chart note. Register the builder count in `facts/registry.json` once the lead chooses (PROPOSED.md).
3. **Contact topics.** The offers use `/contact/?topic=builder-visits` and `/contact/?topic=builder-contract`. If the form does not read `topic`, use plain `/contact/` and say the request in the button.
4. **CRM builder filters.** The "Built by" filters miss some listings the builder's own sales company lists (Stanley Martin: 51 by filter, 62 by its firm; D.R. Horton 198 by filter in new construction, 248 by firm). If the CRM can add the builder's sales company as a match for each filter, the per-builder links on this page would show every listed home. A site fix, not part of this page.
5. **Recheck on the build day:** D.R. Horton's and Beazer's fiscal 2026 annual reports are due in mid to late November 2026 (rows 16, 21); Toll's in December (row 22).

## From the verifier (2026-11-08)

6. **A person's name in the repo.** `data/2026-11-n/buyers-builders/raw/deeds-co.json` keeps one buyer name that is a person ("GIANG CO M", a D.R. Horton sale recorded 2026-08-07), because `pull_deeds.py` keeps any name with the word "CO". Two reinsurance names ("... CO LTD") are real companies. The lead should blank that one name in the raw file (the researcher's file; the verifier may not edit it). In a future pull, keep "CO" only when the name also has LLC, INC, LTD or COMPANY.
7. **Use `findings-verified.json`.** `verify_corrections.py` writes it from `analyze.py` with three fixes (H&H under Dream Finders, RERECORD, owner-sold median on parcels with a building). If the researcher folds the fixes into `analyze.py`, the two files must match.
8. **The 2026-10-d count on /buyers/new-construction/** uses the same memo filter, so it may carry the RERECORD fault (a few deeds), and its builder list may show H&H Homes apart from Dream Finders. Check it when that page is next touched.
9. **SC Code page down.** https://www.scstatehouse.gov/code/t40c059.php redirected to a 404 at 09:11Z on 2026-11-08. Other pages that cite scstatehouse.gov/code may fail the site audit's link check today.
