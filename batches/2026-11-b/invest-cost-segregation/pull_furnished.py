import json, time, urllib.request, urllib.parse, datetime
BASE = "https://chapter3realty.com/homes/api/map?"; calls=[]
def total(p):
    url = BASE + urllib.parse.urlencode(p)
    for i in range(4):
        try:
            n = json.load(urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"}), timeout=90))["total"]
            calls.append({"url": url, "total": n}); return n
        except Exception as e: time.sleep(3)
    raise SystemExit("failed " + url)
def median(base, n, step=5000):
    lo, hi = 0, 5000000
    while hi - lo > step:
        mid = (lo + hi) // 2 // step * step
        if total(dict(base, max=mid)) >= n / 2: hi = mid
        else: lo = mid
    return hi
out={"pulled": datetime.datetime.now(datetime.UTC).isoformat()}
b={"type":"condo","has":"county_horry,oceanfront_building,furnished"}
n=total(b); out["of_furnished"]={"listings":n,"median_ask_5k":median(b,n)}
b0={"type":"condo","has":"county_horry,oceanfront_building"}; n0=total(b0); out["of_all"]={"listings":n0,"median_ask_5k":median(b0,n0)}
# furnished, exactly 2 bedrooms
b2=dict(b,beds=2); n2=total(b2)-total(dict(b,beds=3))
lo,hi=0,5000000
while hi-lo>5000:
    mid=(lo+hi)//2//5000*5000
    if total(dict(b2,max=mid))-total(dict(b,beds=3,max=mid))>=n2/2: hi=mid
    else: lo=mid
out["of_furnished_2bed"]={"listings":n2,"median_ask_5k":hi}
out["calls"]=calls
json.dump(out,open("listings-furnished.json","w"),indent=1)
print(json.dumps({k:v for k,v in out.items() if k!="calls"}))
