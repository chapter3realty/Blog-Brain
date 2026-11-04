# Needs: /buyers/waterfront-homes/

1. `tools/area-map.js`: the map needs water polygons (the county's waterway outline) and point symbols of three kinds (fixed bridge, swing bridge, tide station). If area-map.js draws only pins and routes, the writer works around it inside the spec (an inline SVG built from `map-water.geojson`) and the lead decides whether the helper should take polygons.
2. A "bridge ladder" (vertical list of crossings with heights) does not exist in glass.js. The writer builds it inside the spec from `bridges.json`.
