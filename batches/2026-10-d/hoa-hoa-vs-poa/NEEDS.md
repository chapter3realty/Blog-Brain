# Needs: /hoa/hoa-vs-poa/ (batch 2026-10-d)

Shared helpers and data this page would use. The spec works around each one inside itself until the lead decides.

1. **The homes feed for this page (`idx-lib/feeds.js`, shared).** The page is mapped to `LAWN_HOUSE` ("Houses where the HOA mows the lawn"). It fits one line of the page. A pair would fit the page's comparison better: condos whose fee pays for insurance (`type=condo&has=hoa_includes_insurance`, 2,242 for sale on 2026-11-01) beside houses in an HOA. The feed must also sit after the final offer, not above the answer (judge). Workaround: keep `LAWN_HOUSE`, placed after the offer by the spec.
2. **CRM: association name and a second association fee, counted only.** The MLS carries a second fee field on some listings. A count of homes for sale that list two association fees (by town or community, no listing shown) would be the strongest local number for the "two associations" section. The public map API has no such filter. Workaround: the county record (ledger rows 20 to 22), no count.
3. **CRM: property subtype "horizontal property regime, detached".** Buyers search it. A count of detached homes sold as regimes would prove "a condo is not always a tower" locally. Workaround: Fannie Mae's "detached condo units" (row 14) only.
4. **A nested-box diagram in `tools/illustrations.js`** (a master association holding a neighborhood association and a condo regime). Workaround: inline SVG in the spec.
5. **Wikimedia Commons downloads were refused (HTTP 429) on 2026-11-01.** The photo candidates in `PLAN.md` have licence records from the API but were not viewed full size. Whoever adds a photo views it first.
