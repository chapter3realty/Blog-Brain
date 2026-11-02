# Proposed rows: /buyers/va-loans/

## facts/registry.json

1. **va-condo-count-horry** (owner page /buyers/va-loans/). "The VA's condo report lists 187 accepted Horry County condo records under 176 names (2026-11-01); HUD's FHA list has 9 approved." Source: https://lgy.va.gov/lgyhub/condo-report and https://entp.hud.gov/idapp/html/condlook.cfm . staleBy 2027-02-01. Wrong pattern to catch: "Many Grand Strand buildings already hold (VA )?approval" (the live page's unsourced line), note "Give the count: about 175 condo communities on the VA list, 2 of 29 oceanfront resort towers."
2. **sc-disabled-veteran-exemption-filing** (owner page /buyers/va-loans/). "SC's disabled-veteran property tax exemption (12-37-220(B)(1)) is filed with SCDOR (MyDORWAY or Form PT-401-I) after the county grants the 4 percent rate; a VA rating letter alone is not enough." Source: https://dor.sc.gov/sites/dor/files/forms/PT401I.pdf . staleBy 2027-02-01. Wrong pattern: "(disabled veteran|veteran)[^.]{0,200}(apply|application)[^.]{0,80}(Horry County )?Auditor", note "The SCDOR grants it, not the county auditor (PT-401-I). The auditor takes the Homestead Exemption."

Both need a firing and a quiet control from real site text in `facts-check.test.js` (CLAUDE.md, Working on the tools). The firing text for 1 and 2 is on the live /buyers/va-loans/ page today.

## data/headlines.json

"/buyers/va-loans/": title "VA Loans in Myrtle Beach: Which Condos Qualify | Chapter3" (57 characters; the planned "Which Condos and Homes Qualify" title is 67, over mkpage's 62), h1 ["VA loans in Myrtle Beach:", "which condos and homes qualify."]. Reason: the old line 2 ("what the VA appraisal checks here.") promises a checklist the ledger cannot back until the VA handbook's Chapter 12 is read (facts.md, Not verified). The hook is backed by the page's own counts and by the VA_FEED homes row. Spec pages keep titles in their specs, so this is for the lead to keep the file in step.

## stories/stories.json

None. No new story.
