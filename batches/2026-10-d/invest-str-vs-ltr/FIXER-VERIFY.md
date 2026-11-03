# Fixer rows, independent check: /invest/str-vs-ltr/

Verifier, 2026-11-03. I did not research or write these rows. I opened each source myself and redid every sum. Page read: `web2/chapter3realty/invest/str-vs-ltr/index.html` as built.

Rows marked VERIFIED-BY-FIXER in `facts.md`: 34, 35, 36, 37, 38, 39.

| Row | Result | What I checked |
|---|---|---|
| 34 Open days | VERIFIED | Fetched the AirROI Myrtle Beach page today (HTTP 200, "12 months to September 2026", "Updated October 1, 2026"). It matches `data/2026-10-d/invest-str-vs-ltr/raw/airroi-myrtle-beach.html`. Open-days table: 271-366 days 58.5% (5,085), 181-270 29.4% (2,556), 91-180 11.0% (954), 31-90 1.2% (101), 1-30 0.0% (2). 100 - 58.5 = 41.5; the buckets add to 41.6. "About four listings in ten are open to guests nine months a year or less" fits. The spec check on line 116 holds. |
| 35 Manager, lower bound | VERIFIED | 124 x 191.52 - 390 = 23,358.48; x 0.60 = 14,015 < 15,254. (15,254 / 0.60 + 390) / 191.52 = 134.78, so 135. 40 percent of the owner's keep after every cost, the $390 included, is the smallest base there is. On a base without the $390 the answer is 136.1. On the nightly rate it is 172. So "at least about 135" holds on any base. Row 19 gives 40 percent as the low end of an owner-observed range. Spec lines 121-124 compute the same thing. |
| 36 Carolina Forest zoning | CORRECTED (one page sentence) | Downloaded the PDF today (15,737,803 bytes). Title page: "HORRY COUNTY zoning ordinance UPDATED SEPTERMBER 1, 2026". pdftotext gives 790,943 characters. "short-term rental", "short term rental", "vacation rental", "tourist home" and "nightly" each have 0 hits. "short-term" appears twice: "intended for short-term occupancy" (a park district) and "short-term storage" (truck terminal). The Section 204.2 lodging chart lists only Boarding House, Bed & Breakfast, Hotel/Motel, retreat centers, Campground, campers/RVs and fraternity houses. No short-term rental use category: the row holds. The body text says "A home's HOA rules may still not allow nightly stays." That matches the row. The FAQ answer goes further: it says the HOA rules decide. A text search cannot support that, and not every home has an HOA. |
| 37 Federal tax | VERIFIED | Read 26 CFR 1.469-1T today through the eCFR renderer. (e)(1): "Except as otherwise provided in this paragraph (e), an activity is a passive activity ... if and only if the activity ... (ii) Is a rental activity ..., without regard to whether or to what extent the taxpayer participates in such activity." (e)(3)(ii)(A): "The average period of customer use for such property is seven days or less". "For most owners" is the right hedge for the exceptions. 4.7 nights is row 6 (VERIFIED). |
| 38 Nights table | VERIFIED | n x 191.52 - 390: 60 = 11,101; 82 = 15,315; 100 = 18,762; 124 = 23,358; 150 = 28,338. Differences from 15,254: -4,153, +61, +3,508, +8,104, +13,084. The page shows $11,100 / $15,300 / $18,800 / $23,400 / $28,300 and "about $4,000 less / about the same / about $4,000 more / about $8,000 more / about $13,000 more". Spec check on line 260 holds. |
| 39 Lodging tax, ST-575 | VERIFIED | Downloaded ST-575 today. "(Rev. 2/5/26)". Header: "Local taxes directly collected by the counties or municipalities are not included." Row: "Myrtle Beach Horry ECI (5261), TT (1026), TD (2615) 9% 10% 0%" under "Total Tax Rate / Total Tax Rate Accommodations / Total Tax Rate Unprepared Foods". S.C. Code 12-36-920(A) calls the 7 percent "a sales tax", so "state and local sales tax on a room comes to 10 percent" is accurate. The page sentence "the city and county add their own taxes" rests on two sources. First, the ST-575 header. Second, Airbnb article 2328, read today: Myrtle Beach "Local Accommodations Tax: 0.5% ... The County local accommodations tax also applies" and "Hospitality Fee: 1%"; Horry County "Local Accommodations Tax: 1.5% - 3%". The page states no total. |

## Change needed (row 36)

FAQ, "Can you Airbnb a house in Myrtle Beach?" (also in the FAQ markup if the spec builds it from the same text):

- Now: "There the home's HOA rules say whether nightly stays are allowed."
- Replace with: "A home's HOA rules may still not allow nightly stays."

This is the body text's own sentence, and it is what row 36 supports. The rest of that answer stays.
