# Needs: /hoa/special-assessments/ (batch 2026-10-d)

Shared helpers this page would use. The spec works around each one inside itself until the lead decides.

1. **A line chart in `tools/glass.js`.** The lien series (`liens-by-year.json`, 2010 to 2026) is a trend; `G.bars` draws it as 16 horizontal bars. A flat line with the latest value labelled and a table of values below would read faster. Workaround: `G.bars`, or inline SVG in the spec.
2. **A timeline or ruler helper** (years on one axis, labelled marks). For HUD's part lives (`eul-subset.json`) against a building's age. Workaround: inline SVG in the spec, or `G.bars` with years as values.
3. **A three-step "who pays first" flow** (insurance, reserve fund, owners) in `tools/illustrations.js`. Workaround: inline SVG in the spec.
4. **CRM: a search of listing remarks** (for example `remarks=special assessment`) in the public map API, counted only, no text returned. The judge's best idea for this page ("how many condos for sale mention a special assessment, and how big") cannot be done without it. The description is behind registration and `q=` matches subdivisions only.
