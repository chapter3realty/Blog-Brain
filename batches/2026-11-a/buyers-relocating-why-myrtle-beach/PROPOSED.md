# Proposed registry rows and fixes: /buyers/relocating/why-myrtle-beach/

For the lead. Nothing here is applied.

## 1. facts/registry.json: the typical home value "here"

The relocating pages print "a typical home here costs about $342,000" (Zillow metro ZHVI, July 2026: from-new-york, from-massachusetts, from-virginia, from-maryland, from-connecticut, from-florida, from-north-carolina, pros-and-cons, the live why-myrtle-beach page). Zillow's "Myrtle Beach, SC" metro value for September 2026 is $339,738; Horry County's county value is $319,809 (DATA zhvi-origins.json). The Census metro is Horry County alone since 2023, but Zillow's metro is larger.

Proposed row `horry-typical-home-value`: value "about $320,000 (Horry County, Zillow ZHVI all homes, middle tier)", staleBy monthly, wrong values to flag: none yet. Proposed rule: a page that compares counties uses the county value and says "Horry County"; a page that says "the Myrtle Beach area" may keep the metro value with "Myrtle Beach area" in the sentence. The lead decides whether to align the state pages at the next refresh.

## 2. Jobs figures (final QCEW 2025 file)

/buyers/relocating/jobs/ prints 146,055 jobs, 9.1 percent growth 2019 to 2025, $50,053 average pay and $78,722 national. The final BLS file (read 2026-11-03) gives 146,160, 9.2 percent, $50,029 and $78,720. This page rounds to "about 146,000", "about 9 percent", "about $50,000" and "about 64 cents", which agree with both. Proposed: refresh the jobs page's table at its next upgrade.

## 3. The "2.5 times the income" line

The live page says the households arriving reported "about 2.5 times the income of the households leaving". That is the ratio of total income ($1.25 billion against $505 million). Per household it is about 1.5 times ($82,912 against $55,266). Proposed registry row `irs-inflow-income-ratio`: value "about 1.5 times per household (IRS 2022-2023)", wrong value to flag: "2.5 times the income of the households leaving" unless "in total" is in the same sentence. Firing control: the live sentence above. Quiet control: "about $1.25 billion of income arrived and about $505 million left, in total".

## 4. stories.json: the Boston story's label (writer, 2026-11-04)

`boston-hotel-manager` limits say to label it "his real numbers, from a real story, not a promise". The website's `build.js audit` now fails "real story" ("real X" intensifier, owner 2026-08-28). This page no longer prints the Boston story (fix round 1: it is an investor story, and the owner asked for one story near the end). /buyers/relocating/from-massachusetts/ still tells it. Proposed: change the story's limit to that wording, and fix /buyers/relocating/from-massachusetts/ if it still prints "real story" when it is next rebuilt.

## 5. Fix round 1 rows for facts/registry.json (writer, 2026-11-04)

- `weather-january-normals`: "a January high of about 56 and a low of about 37 (NOAA 1991-2020 normals, North Myrtle Beach airport)". Printed here and on /buyers/relocating/weather/. Wrong values to flag: none yet.
- `sc-imf-new-resident`: "$250 one-time fee per vehicle first titled in another state (SC Code 56-3-627(D)); active duty exempt". Printed on from-ohio, cost-of-living, moving-checklist and here.
