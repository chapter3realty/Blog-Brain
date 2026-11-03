# Deed sales inside the Bent Oak Estates aerial frame (photos.json). Usage: python3 -I frame-sales.py 633 1003 1833 1903
# Pixel box in NOAA ERI tile EC2601a_OB_N_C0785445w334115n.tif (top left -78.9125, 33.6875; 2.698e-6 degrees a pixel).
import json,re,collections as C,sys
D='/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/web2/data/2026-10-d/'
S=json.load(open(D+'sell-out-of-state-buyers/out-of-state-buyers.json'))['sales']
ATTR={str(int(r["PIN"])).zfill(11): r for r in json.load(open(D+'buyers-first-time-home-buyer-myrtle-beach/raw/parcel-attrs.json'))["rows"]}
lo0,la0,px=-78.9125,33.6875,2.698e-6
x1,y1,x2,y2=map(int,sys.argv[1:5])
W,E=lo0+x1*px,lo0+x2*px; N,So=la0-y1*px,la0-y2*px
print('bbox',round(W,6),round(So,6),round(E,6),round(N,6))
v=[s for s in S if s.get('lon') and W<=s['lon']<=E and So<=s['lat']<=N]
for s in v:
    lu=(ATTR.get(s['pin']) or {}).get('LandUseCode')
    print(s['date'],int(s['cons']),lu,s['group'],s['legal'][:40],s['zip'],s['place'],s['builder'],s['lon'],s['lat'])
