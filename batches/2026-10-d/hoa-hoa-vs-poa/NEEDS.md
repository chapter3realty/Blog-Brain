# Needs: /hoa/hoa-vs-poa/ (batch 2026-10-d)

Shared helpers and data this page would use. The spec works around each one inside itself until the lead decides.

1. **The homes feed for this page (`idx-lib/feeds.js`, shared).** The page is mapped to `LAWN_HOUSE` ("Houses where the HOA mows the lawn"). It fits one line of the page. A pair would fit the page's comparison better: condos whose fee pays for insurance (`type=condo&has=hoa_includes_insurance`, 2,242 for sale on 2026-11-01) beside houses in an HOA. The feed must also sit after the final offer, not above the answer (judge). Workaround: keep `LAWN_HOUSE`, placed after the offer by the spec.
2. **CRM: association name and a second association fee, counted only.** The MLS carries a second fee field on some listings. A count of homes for sale that list two association fees (by town or community, no listing shown) would be the strongest local number for the "two associations" section. The public map API has no such filter. Workaround: the county record (ledger rows 20 to 22), no count.
3. **CRM: property subtype "horizontal property regime, detached".** Buyers search it. A count of detached homes sold as regimes would prove "a condo is not always a tower" locally. Workaround: Fannie Mae's "detached condo units" (row 14) only.
4. **A nested-box diagram in `tools/illustrations.js`** (a master association holding a neighborhood association and a condo regime). Workaround: inline SVG in the spec.
5. **Wikimedia Commons downloads were refused (HTTP 429) on 2026-11-01.** The photo candidates in `PLAN.md` have licence records from the API but were not viewed full size. Whoever adds a photo views it first.

## Added by the writer, 2026-11-01

6. **exiftool is not installed in this container.** `tools/image-meta.js` fails S13 for the page only because the embedded metadata cannot be read or written. The photo's record (`data/2026-10-d/hoa-hoa-vs-poa/photos.json`) passes `tools/photos.js check`. Whoever packages the batch runs `node tools/photos.js embed data/2026-10-d/hoa-hoa-vs-poa/photos.json chapter3realty` where exiftool exists.
7. **Links in.** score.js S8 is 50%: one other page links here from body copy. `/hoa/` (hub), `/hoa/special-assessments/`, `/hoa/master-insurance-ho6/` and `/buyers/no-hoa-homes/` name condo regimes or HOA versus POA and could link here in a sentence. This stage may not edit them.
8. **The homes feed sits above the short answer on a phone** (the edge places it after the hero, idx-lib/edge.js placeFeedTop). The spec cannot move it. With the hero sub now the answer in two sentences, the critic's first-screen check passes. The judge's note (feed after the answer) stands for the lead.
9. **The verifier's merged name count is now a file.** `classify_names_merged.py` writes `association-names-merged.json` (526 associations; HOA 275, POA 103, condo 45, another name 97, none 6; master 4) from the same private lien pulls (RAW). The spec reads it and checks it against VERIFY.md correction 9.

## Added in review round 1, 2026-11-01

10. **Sideways scroll at 320 and 1024 px is shared.** At 320 px the homes feed search box (idx-lib, `div.hx-fb-ai`, `button.hx-fb-go` "Find houses", the "Home type" pill) makes the page 364 px wide; at 1024 px the header phone number (`div.header-ctas a.hdr-phone`) makes it 1029 px. `/invest/strategies/fix-and-flip/` measures the same 364 and 1029 in the same preview. The spec cannot reach either. critic.mjs keeps these three blocking findings until the lead fixes the shared CSS.
11. **The H1 holds the h1em subtitle.** `tools/mkpage.js` writes `<h1>h1<br/><em>h1em</em></h1>`, and h1em is required, so answer engines read both lines as the H1. A kit change (the subtitle in a `<p>` under the H1) would fix every page.
12. **The hero offer box (`heroCta`) starts 8 px left of the body text at 390 px** (x=16 against x=24). Shared hero markup.
13. **Photo credits: the second line is plural** ("resized these photos and cropped some of them") on a page with one photo. Shared credits partial (`page-kit.js` photoSet credits).
14. **The feed above the short answer** (NEEDS 1 and 8 again): in the preview it is titled "Homes with no HOA fee", with the subheader "No HOA, as listed by the listing agent. Confirm before you buy.", and shows no homes. The owner bans subheaders under feed titles and telling the reader to check things. On an HOA page the title also reads as off-topic. The lead should confirm what renders live.
