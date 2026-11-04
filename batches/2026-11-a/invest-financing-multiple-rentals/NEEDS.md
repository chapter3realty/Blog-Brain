# Needs: /invest/financing-multiple-rentals/

1. **Homes row feed (idx-lib/feeds.js, shared).** Section 7 would show homes at or under $195,000, the middle price repeat buyers paid (ledger rows 25, 27: 67 houses with 3+ bedrooms and 432 condos with 2+ bedrooms for sale today). If no feed with that price cap exists, the lead adds one (for example `second-rental`, max price 195000, houses and condos), or the page leaves the homes row out. The page does not edit the shared feeds.
2. **Network host.** Fannie Mae's Eligibility Matrix is on singlefamily.fanniemae.com, which this session cannot reach (Cloudflare 403; not an allowed host). Ledger row 1 uses Freddie Mac's own table. If the lead allows the host, the verifier can add Fannie's figure for the same cap.
