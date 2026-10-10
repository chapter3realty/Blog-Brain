#!/usr/bin/env python3
"""
build-geo.py: builds tools/geo/grand-strand-v2.json, the cached map data for map version 2
in tools/area-map.js (regionMap and closeMap).

Usage:

  pip install pyshp shapely
  python3 -I tools/geo/build-geo.py --work <scratch dir> [--out tools/geo/grand-strand-v2.json]

--work holds the downloads (TIGER zips in <work>/tiger, county replies in <work>/county). A file
that is already there is not downloaded again. Run with -I: the downloads are data, not code.

What it does:

  Region layer (the whole Grand Strand box, for the "where it is" map). All from U.S. Census
  Bureau TIGER/Line 2026 shapefiles (public domain):
    coast    COASTLINE, joined into one line from southwest to northeast (land on the left).
    water    AREAWATER for Horry, Georgetown and Brunswick (NC) counties: rivers, the
             Intracoastal Waterway, bays and inlets, and lakes larger than LAKE_KM2.
    roads    ROADS (S1100 and S1200 classes) with route numbers from FEATNAMES.
    parks    AREALM state parks (K2184). Brookgreen Gardens is filed there as a state park; it is
             kept under its own name.
    airport  AREALM K2457, Myrtle Beach International.
    towns    PLACE: label point (Census internal point) and a simplified outline, used to say
             "in" or "just outside" a town.
    stateline STATE: the North Carolina and South Carolina line.

  Areas (one per community, for the "inside the neighborhood" map):
    outline  Horry County parcels (layer 24) chosen by the filter the fact ledger uses, joined
             and closed across the streets (CLOSE_M), holes dropped.
    streets  TIGER ROADS in the box, filled in with Horry County roads (layer 18) where TIGER
             has no street yet (new phases).
    water    Horry County stormwater waterbodies (Horry_Basemap layer 3) and TIGER AREAWATER.
    golf     Horry County parcels with land use code 389 or 394 (golf course).
    entrance and amenity points, each with its source.

Coordinates are stored as integers, delta coded, to keep the file small. See "encoding" in the
output file.
"""
import argparse, json, math, os, sys, urllib.parse, urllib.request, datetime
import shapefile
from shapely.geometry import Polygon, MultiPolygon, LineString, MultiLineString, Point, box as sbox
from shapely.ops import unary_union, linemerge, polylabel

BBOX = (-79.45, 33.25, -78.35, 34.05)  # west, south, east, north
TIGER = "https://www2.census.gov/geo/tiger/TIGER2026"
TIGER_FILES = [
    "COASTLINE/tl_2026_us_coastline.zip", "STATE/tl_2026_us_state.zip",
    "ROADS/tl_2026_45051_roads.zip", "ROADS/tl_2026_45043_roads.zip", "ROADS/tl_2026_37019_roads.zip",
    "FEATNAMES/tl_2026_45051_featnames.zip", "FEATNAMES/tl_2026_45043_featnames.zip", "FEATNAMES/tl_2026_37019_featnames.zip",
    "AREAWATER/tl_2026_45051_areawater.zip", "AREAWATER/tl_2026_45043_areawater.zip", "AREAWATER/tl_2026_37019_areawater.zip",
    "LINEARWATER/tl_2026_45051_linearwater.zip", "LINEARWATER/tl_2026_45043_linearwater.zip",
    "AREALM/tl_2026_45_arealm.zip", "PLACE/tl_2026_45_place.zip", "PLACE/tl_2026_37_place.zip",
]
HORRY = "https://www.horrycounty.org/parcelapp/rest/services/HorryCountyGISApp/MapServer"
HORRY_BASEMAP = "https://gisportal.horrycounty.org/server/rest/services/Basemap/Horry_Basemap/MapServer"
LAKE_KM2 = 0.25
CLOSE_M = 30
MARGIN_M = 1300

LAT0 = 33.7
KX = 111320 * math.cos(math.radians(LAT0))
KY = 110570
def fw(lon, lat): return (lon * KX, lat * KY)
def bw(x, y): return (x / KX, y / KY)

# Routes drawn and labelled on the region map. Key: (type, number, suffix). Tier 1 is a limited-access
# road, tier 2 a numbered route a newcomer would use. Other S1200 roads are tier 3, unlabelled.
ROUTES = {
    ("SC", "31", ""): 1, ("SC", "22", ""): 1,
    ("US", "17", ""): 2, ("US", "17", "BUS"): 2, ("US", "17", "BYP"): 2, ("US", "501", ""): 2, ("US", "501", "BUS"): 2,
    ("SC", "544", ""): 2, ("SC", "707", ""): 2, ("SC", "9", ""): 2, ("SC", "90", ""): 2, ("US", "701", ""): 2,
    ("SC", "9", "BUS"): 2, ("SC", "9", "BYP"): 2, ("SC", "905", ""): 2, ("SC", "65", ""): 2, ("SC", "179", ""): 2,
    ("SC", "57", ""): 2, ("SC", "319", ""): 2, ("NC", "179", ""): 2, ("NC", "904", ""): 2,
}

TOWNS = {  # TIGER PLACE name -> rank (1 = always try to label, 2 = when there is room)
    "Myrtle Beach": 1, "North Myrtle Beach": 1, "Conway": 1, "Surfside Beach": 1, "Murrells Inlet": 1,
    "Little River": 1, "Pawleys Island": 1, "Garden City": 1, "Carolina Forest": 2, "Socastee": 2,
    "Forestbrook": 2, "Atlantic Beach": 2, "Loris": 2, "Aynor": 2, "Georgetown": 2, "Litchfield Beach": 2,
    "Red Hill": 2, "Calabash": 2, "Sunset Beach": 2, "Briarcliffe Acres": 3,
}

# Communities. The parcel filter is the one the fact ledger uses (batches/2026-10-a/facts/).
AREAS = [
    {"slug": "del-webb-north-myrtle-beach", "name": "Del Webb North Myrtle Beach",
     "where": "LegalDescr LIKE 'CHESTNUT GREENS%'", "envelope": None,
     "ledger": "del-webb-north-myrtle-beach-facts.md rows 20 and 40 (county name Chestnut Greens)",
     "amenity": {"label": "Amenity center", "lat": 33.821769, "lon": -78.700908,
                 "source": "Horry County address point for 1285 POSSUM TROT RD, the amenity center and HOA office (places.json)"},
     "entrance": None,
     "entrance_note": "No single entrance: Possum Trot Road, a public road, runs through the middle and the streets open onto it."},
    {"slug": "del-webb-grande-dunes", "name": "Del Webb at Grande Dunes",
     "where": "(" + " OR ".join(f"LegalDescr LIKE '{n};%' OR LegalDescr = '{n}'" for n in [
         "MARINA TRACT PH 1A-1", "MARINA TRACT P1-B", "MARINA TRACT P-2", "PARCEL P-3", "MARINA TRACT P-4", "PARCEL P-5",
         "PARCEL -5", "PARCEL P -5", "PARCEL P-6", "PARCEL P-7", "PH 8 MARINA TRACT", "PH P8 MARINA TRACT",
         "MARINA TRACT PH P9-A", "MARINA TRACT PH P9-B", "PARCEL C-1", "PARCEL C-2", "VILLAS @ HEEL TR PH 1A",
         "VILLAS @ HEEL TR PH 1B", "VILLA AT HEEL TRACT PH 2A", "VILLAS @ HEEL TRACT PH 2B"]) + ") OR PIN=42101020001",
     "envelope": (-78.86, 33.735, -78.82, 33.765),
     "ledger": "del-webb-grande-dunes-facts.md method note 'Which county parcels are Del Webb' (812 lots) and row 16 (amenity parcel)",
     "amenity": {"label": "Amenity center", "lat": 33.749305, "lon": -78.842661,
                 "source": "Horry County address point for 6201 MARINA PKY, the welcome center and amenity center (places.json)"},
     "entrance": {"label": "Entrance", "roaduse": "ENT", "road": "MARINA PKY", "near_m": 120, "on": "Marina Parkway",
                  "source": "Horry County roads layer 18: the Marina Parkway segments beside the welcome center are coded ROADUSE 'ENT' (entrance)."}},
    {"slug": "myrtle-trace", "name": "Myrtle Trace",
     "where": "(UPPER(LegalDescr) LIKE '%MYRTLE TRACE%' AND UPPER(LegalDescr) NOT LIKE '%SOUTH%' AND UPPER(LegalDescr) NOT LIKE '%GRAND%') OR PIN=40003010085",
     "envelope": None,
     "ledger": "myrtle-trace-facts.md row 17 (filter) and row 16 (front entrance on Burning Ridge Road)",
     "amenity": {"label": "Clubhouse", "pin": 40003010085,
                 "source": "Center of the HOA's recreation parcel, PIN 40003010085 'RECREATIONAL AREA' (ledger rows 17, 25 and 42: clubhouse and pool)"},
     "entrance": {"label": "Main entrance", "road": "MYRTLE TRACE DR", "at": "BURNING RIDGE RD", "on": "Burning Ridge Road",
                  "source": "Ledger row 16: the front entrance is on Burning Ridge Road. Point: where Myrtle Trace Drive meets Burning Ridge Road in Horry County roads layer 18."}},
    {"slug": "seasons-at-prince-creek-west", "name": "Seasons at Prince Creek West",
     "where": "LegalDescr LIKE '%SEASON%PRINCE%'", "envelope": None,
     "ledger": "seasons-at-prince-creek-west-facts.md rows 18, 19 and 26",
     "amenity": {"label": "Clubhouse", "lat": 33.586369, "lon": -79.07094,
                 "source": "Horry County address point for 130 GRAND CYPRESS WAY, on the clubhouse parcel PIN 46802030007 (places.json)"},
     "entrance": {"label": "Entrance", "road": "GRAND CYPRESS WAY", "at": "TPC BLVD", "on": "TPC Boulevard",
                  "source": "Horry County roads layer 18: Grand Cypress Way, the private street the clubhouse is on, meets TPC Boulevard here. Ledger row 51 (builder's site plan, main entry on TPC Boulevard) is unverifiable."}},
]

SOURCES = [
    {"id": "tiger", "name": "U.S. Census Bureau, TIGER/Line Shapefiles 2026", "url": TIGER + "/",
     "license": "Public domain (U.S. Government work). No credit required; credited anyway.",
     "used_for": "coast, region water, roads and route numbers, state parks, airport, towns, state line; streets and water in the close-ups"},
    {"id": "horry", "name": "Horry County GIS, HorryCountyGISApp map service (parcels layer 24, roads layer 18)", "url": HORRY,
     "license": "Public map service of Horry County, South Carolina. No license is published with it; credit Horry County GIS.",
     "used_for": "community outlines (parcels), golf course land (parcel land use 389 and 394), streets TIGER lacks, entrance points"},
    {"id": "horry-hydro", "name": "Horry County GIS, Horry_Basemap map service, layer 3 'Hydro' (stormwater waterbodies)", "url": HORRY_BASEMAP + "/3",
     "license": "Public map service of Horry County, South Carolina. No license is published with it; credit Horry County GIS.",
     "used_for": "ponds and lakes in the close-ups"},
]

# ---------------------------------------------------------------- helpers

def log(*a): print(*a, file=sys.stderr)

def fetch(url, dest):
    if os.path.exists(dest) and os.path.getsize(dest) > 0: return dest
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    log("download", url)
    with urllib.request.urlopen(url, timeout=600) as r, open(dest + ".part", "wb") as f:
        while True:
            b = r.read(1 << 20)
            if not b: break
            f.write(b)
    os.replace(dest + ".part", dest)
    return dest

def arcgis(base, layer, params, cache):
    if os.path.exists(cache): return json.load(open(cache))
    feats, off = [], 0
    while True:
        p = dict(params); p.update({"f": "json", "outSR": "4326", "inSR": "4326", "resultOffset": off, "resultRecordCount": 1000})
        url = f"{base}/{layer}/query?" + urllib.parse.urlencode(p)
        d = json.load(urllib.request.urlopen(url, timeout=300))
        if "error" in d: raise SystemExit(f"ArcGIS error {d['error']} for {url}")
        got = d.get("features", [])
        feats += got
        if not d.get("exceededTransferLimit") or not got: break
        off += len(got)
    os.makedirs(os.path.dirname(cache), exist_ok=True)
    json.dump(feats, open(cache, "w"))
    return feats

def env_params(b):
    return {"geometry": ",".join(f"{v:.6f}" for v in b), "geometryType": "esriGeometryEnvelope", "spatialRel": "esriSpatialRelIntersects"}

def esri_polys(feat):
    out = []
    for ring in feat["geometry"].get("rings", []):
        if len(ring) < 4: continue
        p = Polygon([fw(x, y) for x, y in ring])
        if not p.is_valid: p = p.buffer(0)
        if not p.is_empty: out.append(p)
    return out

def esri_lines(feat):
    return [LineString([fw(x, y) for x, y in path]) for path in feat["geometry"].get("paths", []) if len(path) > 1]

def shp_parts(shape):
    parts = list(shape.parts) + [len(shape.points)]
    return [shape.points[parts[i]:parts[i + 1]] for i in range(len(parts) - 1)]

def shp_polygon(shape):
    """Rings of a shapefile polygon -> shapely geometry (outer rings clockwise, holes counter)."""
    shells, holes = [], []
    for ring in shp_parts(shape):
        if len(ring) < 4: continue
        pts = [fw(x, y) for x, y in ring]
        a = sum(pts[i][0] * pts[i + 1][1] - pts[i + 1][0] * pts[i][1] for i in range(len(pts) - 1))
        (shells if a < 0 else holes).append(pts)
    polys = []
    for s in shells:
        sp = Polygon(s)
        hs = [h for h in holes if sp.contains(Point(h[0]))]
        p = Polygon(s, hs)
        polys.append(p if p.is_valid else p.buffer(0))
    return unary_union(polys) if polys else Polygon()

def in_bbox(bb, b=BBOX, pad=0.0):
    return not (bb[2] < b[0] - pad or bb[0] > b[2] + pad or bb[3] < b[1] - pad or bb[1] > b[3] + pad)

def mbox(b):  # lon/lat box -> metres box
    x0, y0 = fw(b[0], b[1]); x1, y1 = fw(b[2], b[3]); return sbox(x0, y0, x1, y1)

def polys_of(g):
    if g.is_empty: return []
    if isinstance(g, Polygon): return [g]
    return [p for p in getattr(g, "geoms", []) if isinstance(p, Polygon)]

def merge(lines):
    u = unary_union(lines)
    return u if isinstance(u, LineString) or u.is_empty else linemerge(u)

def lines_of(g):
    if g.is_empty: return []
    if isinstance(g, LineString): return [g]
    out = []
    for p in getattr(g, "geoms", []): out += lines_of(p)
    return out

class Enc:
    """Integers: x = round((lon - ORIGIN_LON) * scale), y = round((lat - ORIGIN_LAT) * scale); then deltas."""
    ORIGIN = (-80.0, 33.0)
    def __init__(self, scale): self.s = scale
    def line(self, coords_m):
        out, px, py = [], 0, 0
        for i, (x, y) in enumerate(coords_m):
            lon, lat = bw(x, y)
            ix = round((lon - self.ORIGIN[0]) * self.s); iy = round((lat - self.ORIGIN[1]) * self.s)
            if i and ix == px and iy == py: continue
            out += [ix, iy] if i == 0 else [ix - px, iy - py]
            px, py = ix, iy
        return out
    def ring(self, poly_ring):
        c = list(poly_ring.coords)[:-1]
        return self.line(c)
    def poly(self, p, min_hole=0):
        return [self.ring(p.exterior)] + [self.ring(h) for h in p.interiors if Polygon(h).area >= min_hole]
    def pt(self, lon, lat):
        return [round((lon - self.ORIGIN[0]) * self.s), round((lat - self.ORIGIN[1]) * self.s)]

SUFFIX = {"DR": "Dr", "ST": "St", "LN": "Ln", "CT": "Ct", "PL": "Pl", "RD": "Rd", "CIR": "Cir", "TRL": "Trl", "PKY": "Pkwy",
          "PKWY": "Pkwy", "LP": "Loop", "HWY": "Hwy", "AVE": "Ave", "BLVD": "Blvd", "WAY": "Way", "TER": "Ter", "CV": "Cv",
          "XING": "Xing", "BYP": "Byp", "BUS": "Bus", "PT": "Pt", "SQ": "Sq", "RUN": "Run", "PATH": "Path", "ROW": "Row"}

def title_name(s):
    """HORRY 'MYRTLE TRACE DR' -> 'Myrtle Trace Dr' in TIGER style. A word with no vowel that is
    not a street type stays in capitals ('TPC BLVD' -> 'TPC Blvd')."""
    words = []
    for w in str(s).strip().split():
        if w in SUFFIX: words.append(SUFFIX[w])
        elif w in ("N", "S", "E", "W"): words.append(w)
        elif w[:1].isdigit(): words.append(w.lower())
        elif not any(c in "AEIOUY" for c in w): words.append(w)
        else: words.append(w.capitalize())
    return " ".join(words)

# ---------------------------------------------------------------- region

def centerline(poly, step=30):
    """The longest path through the Voronoi edges inside a long, thin polygon."""
    import heapq, shapely
    from shapely.geometry import MultiPoint
    pts = []
    for ring in [poly.exterior] + list(poly.interiors):
        n = max(4, int(ring.length / step))
        pts += [ring.interpolate(i * ring.length / n) for i in range(n)]
    edges = shapely.voronoi_polygons(MultiPoint(pts), only_edges=True)
    inner = [e for e in lines_of(edges) if poly.contains(e)]
    if not inner: return None
    key = lambda c: (round(c[0], 1), round(c[1], 1))
    adj = {}
    for e in inner:
        cs = list(e.coords)
        for a, b in zip(cs, cs[1:]):
            d = math.dist(a, b)
            adj.setdefault(key(a), []).append((key(b), d)); adj.setdefault(key(b), []).append((key(a), d))
    def far(src):
        dist, prev, q = {src: 0}, {}, [(0, src)]
        while q:
            d, u = heapq.heappop(q)
            if d > dist[u]: continue
            for v, w in adj[u]:
                if d + w < dist.get(v, 1e18): dist[v] = d + w; prev[v] = u; heapq.heappush(q, (d + w, v))
        end = max(dist, key=dist.get)
        return end, prev
    a, _ = far(next(iter(adj)))
    b, prev = far(a)
    path = [b]
    while path[-1] != a: path.append(prev[path[-1]])
    return LineString(path)

def featnames(work, county):
    r = shapefile.Reader(os.path.join(work, "tiger", f"tl_2026_{county}_featnames.zip"))
    out = {}
    for rec in r.iterRecords():
        d = rec.as_dict()
        t = d["PRETYPABRV"]
        if t not in ("US Hwy", "State Hwy", "State Rte", "NC Hwy", "I-"): continue
        num = d["NAME"].replace("US Hwy ", "").strip()
        suf = (d["SUFQUALABR"] or d["SUFTYPABRV"] or "").upper()
        if suf not in ("BUS", "BYP", ""): continue
        kind = "US" if t == "US Hwy" else ("NC" if county.startswith("37") else "SC")
        out.setdefault(d["LINEARID"], set()).add((kind, num, suf))
    return out

def build_region(work):
    T = os.path.join(work, "tiger")
    bb = mbox(BBOX)
    e4 = Enc(1e4)

    # coast: three TIGER pieces in the box, chained southwest to northeast
    r = shapefile.Reader(os.path.join(T, "tl_2026_us_coastline.zip"))
    pieces = []
    for sr in r.iterShapeRecords():
        if not in_bbox(sr.shape.bbox, pad=0.3): continue
        for part in shp_parts(sr.shape):
            ls = LineString([fw(x, y) for x, y in part])
            if ls.intersects(mbox((BBOX[0] - 0.3, BBOX[1] - 0.3, BBOX[2] + 0.3, BBOX[3] + 0.3))): pieces.append(ls)
    coast = merge(pieces)
    coast = max(lines_of(coast), key=lambda l: l.length)
    cs = list(coast.coords)
    if cs[0][0] > cs[-1][0]: cs.reverse()
    coast = LineString(cs).intersection(mbox((BBOX[0] - 0.2, BBOX[1] - 0.2, BBOX[2] + 0.2, BBOX[3] + 0.2)))
    coast = max(lines_of(coast), key=lambda l: l.length).simplify(20)
    if coast.coords[0][0] > coast.coords[-1][0]: coast = LineString(list(coast.coords)[::-1])

    # water
    water_polys = []
    for county in ("45051", "45043", "37019"):
        r = shapefile.Reader(os.path.join(T, f"tl_2026_{county}_areawater.zip"))
        for sr in r.iterShapeRecords():
            if not in_bbox(sr.shape.bbox): continue
            d = sr.record.as_dict()
            name = (d["FULLNAME"] or "").strip()
            if "Atlantic Ocean" in name or d["MTFCC"] in ("H2053",): continue
            g = shp_polygon(sr.shape)
            km2 = g.area / 1e6
            keep = (d["MTFCC"] in ("H3010", "H3020") and (name or km2 > 0.02)) or d["MTFCC"] == "H2051" or km2 >= LAKE_KM2
            if keep: water_polys.append((name, d["MTFCC"], g))
    allw = unary_union([g for _, _, g in water_polys]).buffer(8).buffer(-8).intersection(bb)
    water = []
    for p in polys_of(allw):
        if p.area < 0.03e6: continue
        p = p.simplify(30)
        if p.is_empty or p.area < 0.02e6: continue
        names = sorted({n for n, _, g in water_polys if n and g.intersects(p)})
        water.append({"a": round(p.area / 1e6, 2), "r": e4.poly(p, min_hole=0.15e6)})
    water.sort(key=lambda w: -w["a"])

    # named water lines, for labels: the Waccamaw River centerline (TIGER LINEARWATER) and a
    # centerline worked out from the Intracoastal Waterway polygons (TIGER AREAWATER)
    waterlines = []
    wl = []
    for county in ("45051", "45043"):
        r = shapefile.Reader(os.path.join(T, f"tl_2026_{county}_linearwater.zip"))
        for sr in r.iterShapeRecords():
            if (sr.record.as_dict()["FULLNAME"] or "").strip() == "Waccamaw Riv":
                wl += [LineString([fw(x, y) for x, y in part]) for part in shp_parts(sr.shape)]
    for l in lines_of(merge(wl).intersection(bb)):
        if l.length > 3000: waterlines.append({"n": "Waccamaw River", "p": e4.line(l.simplify(40).coords)})
    icw = unary_union([g for n, m, g in water_polys if "Intracoastal" in n]).buffer(20).buffer(-20)
    for pg in polys_of(icw.intersection(bb)):
        c = centerline(pg)
        if c is not None and c.length > 3000: waterlines.append({"n": "Intracoastal Waterway", "p": e4.line(c.simplify(40).coords)})

    # roads
    groups = {}
    for county in ("45051", "45043", "37019"):
        fn = featnames(work, county)
        r = shapefile.Reader(os.path.join(T, f"tl_2026_{county}_roads.zip"))
        for sr in r.iterShapeRecords():
            d = sr.record.as_dict()
            if not in_bbox(sr.shape.bbox): continue
            routes = {k for k in fn.get(d["LINEARID"], ()) if k in ROUTES}
            if d["MTFCC"] not in ("S1100", "S1200") and not routes: continue
            if d["MTFCC"] not in ("S1100", "S1200", "S1400"): continue
            if routes:
                key = sorted(routes, key=lambda k: (ROUTES[k], k[0] != "US", k[2] != "", int(k[1]) if k[1].isdigit() else 999))[0]
                tier = 1 if d["MTFCC"] == "S1100" else 2
                if d["MTFCC"] == "S1100" and ROUTES[key] != 1: tier = 2
                label = key[0] + " " + key[1] + (" " + key[2] if key[2] else "")
            else:
                tier, label = 3, ""
            for part in shp_parts(sr.shape):
                groups.setdefault((tier, label), []).append(LineString([fw(x, y) for x, y in part]))
    roads = []
    for (tier, label), ls in sorted(groups.items()):
        merged = lines_of(merge(ls).intersection(bb))
        for l in merged:
            l = l.simplify(22 if tier < 3 else 30)
            if l.length < (200 if tier < 3 else 600): continue
            o = {"t": tier, "p": e4.line(l.coords)}
            if label: o["r"] = label
            roads.append(o)

    # parks and airport
    parks, airport = {}, None
    r = shapefile.Reader(os.path.join(T, "tl_2026_45_arealm.zip"))
    for sr in r.iterShapeRecords():
        d = sr.record.as_dict()
        if not in_bbox(sr.shape.bbox): continue
        name = (d["FULLNAME"] or "").strip()
        if d["MTFCC"] == "K2184":
            if "Brookgreen" in name: key, kind = "Brookgreen Gardens", "garden"
            elif "untington" in name: key, kind = "Huntington Beach State Park", "state park"
            elif "Myrtle Beach" in name: key, kind = "Myrtle Beach State Park", "state park"
            else: key, kind = name, "state park"
            parks.setdefault((key, kind), []).append(shp_polygon(sr.shape))
        elif d["MTFCC"] == "K2457" and "Myrtle Beach" in name:
            airport = shp_polygon(sr.shape)
    park_out = []
    for (name, kind), gs in parks.items():
        u = unary_union(gs).buffer(15).buffer(-15)
        polys = [p.simplify(20) for p in polys_of(u) if p.area > 0.05e6]
        park_out.append({"n": name, "k": kind, "r": [e4.poly(p, min_hole=1e9) for p in polys]})
    ap = max(polys_of(airport), key=lambda p: p.area).simplify(25)
    airport_out = {"n": "Myrtle Beach International Airport", "r": e4.poly(ap, min_hole=1e9)}

    # towns
    towns = []
    for st in ("45", "37"):
        r = shapefile.Reader(os.path.join(T, f"tl_2026_{st}_place.zip"))
        for sr in r.iterShapeRecords():
            d = sr.record.as_dict()
            if d["NAME"] not in TOWNS or not in_bbox(sr.shape.bbox): continue
            if st == "37" and d["NAME"] not in ("Calabash", "Sunset Beach"): continue
            g = shp_polygon(sr.shape)
            parts = sorted(polys_of(g), key=lambda p: -p.area)
            outline = [e4.ring(p.simplify(60).exterior) for p in parts if p.area > 0.4e6][:6]
            lat, lon = float(d["INTPTLAT"]), float(d["INTPTLON"])
            towns.append({"n": d["NAME"], "rank": TOWNS[d["NAME"]], "kind": "city" if d["LSAD"] == "25" else ("town" if d["LSAD"] == "43" else "community"),
                          "at": e4.pt(lon, lat), "o": outline})
    towns.sort(key=lambda t: (t["rank"], t["n"]))

    # state line
    r = shapefile.Reader(os.path.join(T, "tl_2026_us_state.zip"))
    states = {}
    for sr in r.iterShapeRecords():
        d = sr.record.as_dict()
        if d["STUSPS"] in ("NC", "SC"): states[d["STUSPS"]] = shp_polygon(sr.shape)
    sl = merge(lines_of(states["NC"].boundary.intersection(states["SC"].buffer(40)))).intersection(bb)
    stateline = [e4.line(l.simplify(40).coords) for l in lines_of(sl) if l.length > 500]

    return {"coast": e4.line(coast.coords), "water": water, "waterlines": waterlines, "roads": roads, "parks": park_out,
            "airport": airport_out, "towns": towns, "stateline": stateline}

# ---------------------------------------------------------------- areas

DROP_ROADUSE = {"DRV", "GOLF", "UTRN", "EMTRN", "CAH"}

def build_area(work, a, tiger_roads, tiger_water):
    C = os.path.join(work, "county")
    e5 = Enc(1e5)
    p = {"where": a["where"], "outFields": "PIN,LegalDescr,LandUseCode", "returnGeometry": "true"}
    if a["envelope"]: p.update(env_params(a["envelope"]))
    parcels = arcgis(HORRY, 24, p, os.path.join(C, f"parcels-{a['slug']}.json"))
    polys = [g for f in parcels for g in esri_polys(f)]
    u = unary_union(polys)
    closed = u.buffer(CLOSE_M, join_style=2).buffer(-CLOSE_M, join_style=2)
    parts = [Polygon(p.exterior) for p in polys_of(closed) if p.area > 5000]
    outline = unary_union(parts)
    x0, y0, x1, y1 = outline.bounds
    bx = (x0 - MARGIN_M, y0 - MARGIN_M, x1 + MARGIN_M, y1 + MARGIN_M)
    llb = bw(bx[0], bx[1]) + bw(bx[2], bx[3])
    mb = sbox(*bx)

    # streets: TIGER first
    streets = []
    tig = []
    for rec, line in tiger_roads:
        if not line.intersects(mb): continue
        cls = 1 if rec["MTFCC"] in ("S1100", "S1200") else (2 if rec["MTFCC"] == "S1630" else 3)
        if rec["MTFCC"] in ("S1740",) and not rec["FULLNAME"]: continue
        tig.append((rec["FULLNAME"] or "", cls, line.intersection(mb)))
    tunion = unary_union([l for _, _, l in tig]).buffer(14)
    county_roads = arcgis(HORRY, 18, dict(env_params(llb), where="1=1", outFields="FULLNAME,ROADUSE,CFCC", returnGeometry="true"),
                          os.path.join(C, f"roads-{a['slug']}.json"))
    added = 0
    for f in county_roads:
        at = f["attributes"]
        if (at.get("ROADUSE") or "").strip() in DROP_ROADUSE: continue
        for l in esri_lines(f):
            l = l.intersection(mb)
            if l.is_empty or l.length < 15: continue
            covered = l.intersection(tunion).length / max(l.length, 1)
            if covered < 0.5:
                cfcc = (at.get("CFCC") or "").strip()
                cls = 1 if cfcc[:2] in ("A1", "A2", "A3") else 3
                tig.append((title_name(at.get("FULLNAME") or ""), cls, l)); added += 1
    byname = {}
    for name, cls, l in tig:
        byname.setdefault((name, cls), []).extend(lines_of(l))
    for (name, cls), ls in sorted(byname.items()):
        for l in lines_of(merge(ls)):
            l = l.simplify(2.5)
            if l.length < 12: continue
            o = {"c": cls, "p": e5.line(l.coords)}
            if name: o["n"] = name
            streets.append(o)

    # water: county stormwater waterbodies, then TIGER areawater
    hyd = arcgis(HORRY_BASEMAP, 3, dict(env_params(llb), where="1=1", outFields="NAME,WATERBODYTYPE", returnGeometry="true"),
                 os.path.join(C, f"hydro-{a['slug']}.json"))
    wp = []
    for f in hyd:
        nm = (f["attributes"].get("NAME") or "").strip()
        for g in esri_polys(f): wp.append((nm, g))
    for nm, g in tiger_water:
        if g.intersects(mb): wp.append((nm, g.intersection(mb)))
    wu = unary_union([g for _, g in wp]).buffer(1.5).buffer(-1.5).intersection(mb)
    water = []
    for pg in polys_of(wu):
        if pg.area < 250: continue
        s = pg.simplify(2.5)
        if s.is_empty or s.area < 200: continue
        names = sorted({n for n, g in wp if n and g.intersects(pg) and g.intersection(pg).area > 0.3 * min(g.area, pg.area)})
        o = {"r": e5.poly(s, min_hole=400)}
        if names: o["n"] = names[0]
        water.append(o)

    # golf course land
    golf_f = arcgis(HORRY, 24, dict(env_params(llb), where="LandUseCode IN ('389','394')", outFields="PIN,LegalDescr,LandUseCode,OwnerName", returnGeometry="true"),
                    os.path.join(C, f"golf-{a['slug']}.json"))
    gu = unary_union([g for f in golf_f for g in esri_polys(f)]).buffer(3).buffer(-3).intersection(mb)
    golf = [{"r": e5.poly(pg.simplify(4), min_hole=1500)} for pg in polys_of(gu) if pg.area > 15000]

    # amenity point
    am = dict(a["amenity"])
    if "pin" in am:
        pf = [f for f in parcels if int(f["attributes"]["PIN"]) == am["pin"]]
        pg = unary_union([g for f in pf for g in esri_polys(f)])
        c = polylabel(max(polys_of(pg), key=lambda q: q.area), tolerance=1)
        am["lon"], am["lat"] = [round(v, 6) for v in bw(c.x, c.y)]
        del am["pin"]

    # entrance point
    ent = None
    if a["entrance"]:
        e = a["entrance"]
        named = lambda n: [l for f in county_roads if (f["attributes"].get("FULLNAME") or "").strip() == n for l in esri_lines(f)]
        hp = Point(fw(am["lon"], am["lat"]))
        if e.get("roaduse"):
            segs = [l for f in county_roads if (f["attributes"].get("ROADUSE") or "").strip() == e["roaduse"]
                    and (f["attributes"].get("FULLNAME") or "").strip() == e["road"] for l in esri_lines(f)]
            segs = [l for l in segs if l.distance(hp) < e["near_m"]]
            pt = unary_union(segs).centroid
        else:
            a1, a2 = unary_union(named(e["road"])), unary_union(named(e["at"]))
            x = a1.buffer(3).intersection(a2)
            cands = [g.centroid for g in (getattr(x, "geoms", None) or [x])] if not x.is_empty else []
            if not cands: raise SystemExit(f"{a['slug']}: {e['road']} does not meet {e['at']}")
            pt = min(cands, key=lambda c: c.distance(outline))
        lon, lat = bw(pt.x, pt.y)
        ent = {"label": e["label"], "on": e["on"], "lat": round(lat, 6), "lon": round(lon, 6), "source": e["source"]}

    out = {"name": a["name"], "box": [round(v, 5) for v in llb], "filter": a["where"],
           "envelope": a["envelope"], "parcels": len(parcels), "ledger": a["ledger"],
           "outline": [e5.poly(pg.simplify(3), min_hole=1e12)[0] for pg in polys_of(outline)],
           "amenity": am, "entrance": ent, "streets": streets, "water": water, "golf": golf}
    if not ent and a.get("entrance_note"): out["entrance_note"] = a["entrance_note"]
    log(f"{a['slug']}: {len(parcels)} parcels, {len(streets)} streets ({added} county pieces added), {len(water)} water, {len(golf)} golf")
    return out

def tiger_close_layers(work):
    T = os.path.join(work, "tiger")
    roads = []
    for county in ("45051", "45043"):
        r = shapefile.Reader(os.path.join(T, f"tl_2026_{county}_roads.zip"))
        for sr in r.iterShapeRecords():
            d = sr.record.as_dict()
            if d["MTFCC"] not in ("S1100", "S1200", "S1400", "S1630", "S1730", "S1740"): continue
            for part in shp_parts(sr.shape):
                roads.append((d, LineString([fw(x, y) for x, y in part])))
    water = []
    for county in ("45051", "45043"):
        r = shapefile.Reader(os.path.join(T, f"tl_2026_{county}_areawater.zip"))
        for sr in r.iterShapeRecords():
            d = sr.record.as_dict()
            if d["MTFCC"] == "H2053" or "Atlantic Ocean" in (d["FULLNAME"] or ""): continue
            nm = (d["FULLNAME"] or "").replace(" Riv", " River").replace(" Lk", " Lake").strip()
            if nm.endswith(" River River"): nm = nm[:-6]
            water.append((nm, shp_polygon(sr.shape)))
    return roads, water

# ---------------------------------------------------------------- main

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--work", required=True)
    ap.add_argument("--out", default=os.path.join(os.path.dirname(os.path.abspath(__file__)), "grand-strand-v2.json"))
    args = ap.parse_args()
    for f in TIGER_FILES: fetch(f"{TIGER}/{f}", os.path.join(args.work, "tiger", os.path.basename(f)))
    region = build_region(args.work)
    troads, twater = tiger_close_layers(args.work)
    areas = {a["slug"]: build_area(args.work, a, troads, twater) for a in AREAS}
    doc = {
        "about": "Map data for tools/area-map.js, map version 2: the Grand Strand region (coast, water, main roads with route numbers, state parks, airport, towns, state line) and one close-up area per community (outline, streets, ponds, golf course land, entrance, amenity). Cut to the Grand Strand box and simplified. Built by tools/geo/build-geo.py.",
        "version": 2,
        "built": datetime.date.today().isoformat(),
        "bbox": list(BBOX),
        "encoding": "Every line or ring is a flat list of integers [x0, y0, dx1, dy1, ...]. x = (lon + 80) * scale and y = (lat - 33) * scale, rounded; after the first pair, each pair is the change from the pair before. Region scale 10000 (about 10 m); area scale 100000 (about 1 m). A polygon is a list of rings, the first one the outside. A point 'at' is [x, y] at region scale.",
        "credit": "Map data: U.S. Census Bureau TIGER/Line; Horry County GIS.",
        "sources": SOURCES,
        "region": region,
        "areas": areas,
    }
    s = json.dumps(doc, separators=(",", ":"))
    # one feature per line keeps diffs readable
    for key in ('{"t":', '{"a":', '{"n":', '{"c":', '{"r":'):
        s = s.replace("," + key, ",\n" + key)
    open(args.out, "w").write(s + "\n")
    log(f"wrote {args.out}: {os.path.getsize(args.out)} bytes")

if __name__ == "__main__":
    main()
