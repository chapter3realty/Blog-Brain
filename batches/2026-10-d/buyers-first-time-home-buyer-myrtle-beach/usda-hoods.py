# facts.md row 53: each named neighborhood's deed sales tested against USDA's single-family ineligible area
# (the programs page's saved copy of USDA RD Eligibility layer 4). Usage: python3 -I usda-hoods.py <web2>/data/2026-10-d
import json, re, sys, os
D = sys.argv[1]
J = lambda *p: json.load(open(os.path.join(D, *p)))
SALES = J("sell-out-of-state-buyers", "out-of-state-buyers.json")["sales"]
poly = J("buyers-programs", "raw", "usda-sfh-ineligible-horry.geojson")["features"][0]["geometry"]["coordinates"]
def inring(x, y, r):
    c = False; n = len(r)
    for i in range(n):
        x1, y1 = r[i]; x2, y2 = r[(i + 1) % n]
        if (y1 > y) != (y2 > y) and x < (x2 - x1) * (y - y1) / (y2 - y1) + x1: c = not c
    return c
def inpoly(x, y): return inring(x, y, poly[0]) and not any(inring(x, y, h) for h in poly[1:])
print("rings", len(poly))
NAMES = {"The Townes at Amber Bluff": r"^THE TOWNS @ AMBER BLUFF", "Indigo Grove": r"^INDIGO GROVE", "Birchwood": r"^BIRCHWOOD$", "Myrtle Beach Golf and Yacht Club": r"^MB GOLF & YACHT"}
for name, pat in NAMES.items():
    rx = re.compile(pat)
    v = [s for s in SALES if rx.search(s["group"] or "") and s.get("lon")]
    ins = sum(1 for s in v if inpoly(s["lon"], s["lat"]))
    print(name, "sales", len(v), "in ineligible", ins, "eligible", len(v) - ins)
