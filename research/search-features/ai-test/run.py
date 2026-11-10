# Runs each answer's filters on the live site's search, as map.js would: python3 run.py <dir>
import json, sys, os, urllib.request, urllib.parse
D = sys.argv[1]
ASK = ["min","max","beds","baths","type","city","zip","subdivision","sqft","yearMin","yearMax","lotMin","hoaMax","garage","hoa","domMax","waterfront","sort","words"]
names = {i["k"] for g in json.load(open(os.path.join(os.path.dirname(D) or ".", "filters.json")))["groups"] for i in g["items"]}
Q = open(os.path.join(os.path.dirname(D), "sentences.txt")).read().split("\n")
for i, q in enumerate([x for x in Q if x]):
    f = f"{D}/q{i:02d}.json"
    if not os.path.exists(f): print(i, q, "-"); continue
    t = open(f).read(); o = json.loads(t[t.index("{"):t.rindex("}") + 1])
    p = {}
    has = [k for k in (o.get("has") or [])[:4] if k in names]
    nt = [k for k in (o.get("not") or [])[:4] if k in names and k not in has]
    if has: p["has"] = ",".join(has)
    if nt: p["not"] = ",".join(nt)
    for k in ASK:
        if o.get(k) not in (None, ""): p[k] = str(o[k])
    url = "https://chapter3realty.com/homes/api/map?" + urllib.parse.urlencode(p)
    try:
        r = json.loads(urllib.request.urlopen(urllib.request.Request(url, headers={"user-agent": "chapter3-test"}), timeout=60).read())
        tot = r.get("total")
    except Exception as e:
        tot = "ERR " + str(e)[:40]
    print(f"{i:2d} {tot!s:>5}  {q}  ->  {urllib.parse.unquote(urllib.parse.urlencode(p))}")
