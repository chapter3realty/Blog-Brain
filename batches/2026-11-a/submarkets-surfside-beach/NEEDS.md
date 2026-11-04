# Needs: /submarkets/surfside-beach/

1. **A filled district map.** `tools/area-map.js` draws named areas as outlines with name pills (polygon of 3 to 400 points). The rental map reads best as two filled colors with a legend (R3 and C3 one color, R1 and R2 another, other districts gray). Work-around inside the spec: draw an inline SVG from `data/2026-11-a/submarkets-surfside-beach/map-layers.geojson` (rental band 82 points, R1 and R2 116 points, town limits 107), or use `regionMap({ name, areas })` with the two outlines and a text legend. A shared "filled areas with legend" option in area-map.js would serve every town page with zoning or flood zones.
2. **Golf cart sweep.** Three live pages state the daylight and four-mile rule as the only rule. Since May 22, 2025 that is only the state default when a town has no ordinance (S.C. Code 56-2-90, row 18). See PROPOSED.md.

Build, 2026-11-03: item 1 was worked around inside `specs/surfside-beach.js` (an inline SVG drawn from `map-layers.geojson`, filled by group, turned so the beach runs along the bottom, with an HTML key). The shared option is still worth adding to `area-map.js`.

3. **critic.mjs and the homes strip** (round 1, 2026-11-04). The full-page shots are taken before the IDX homes strip fills, so it shows only "See all homes". A Playwright check with a 2.5 s wait found 12 homes. critic.mjs should wait for the strip before its shots.
4. **Street layer for area-map.js.** This page draws county street centerlines and street labels inside its own spec (`build_streets.py` -> `map-streets.geojson`). A shared option would let every town page label its streets.
