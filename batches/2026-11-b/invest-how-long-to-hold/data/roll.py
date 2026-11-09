import csv,sys,statistics,json
def load_metro(path):
    rows=list(csv.reader(open(path)))
    return [(r[0],float(r[1])) for r in rows[1:]]
def roll(series):
    out=[]
    v=[x[1] for x in series]; d=[x[0] for x in series]
    for y in [1,2,3,4,5,6,7,8,10,12,15]:
        n=12*y; ch=[]
        for i in range(len(v)-n):
            ch.append(((v[i+n]/v[i]-1)*100,d[i],d[i+n]))
        if not ch: continue
        w=min(ch); b=max(ch); med=statistics.median([c[0] for c in ch])
        sh=lambda t: int(100*sum(1 for c in ch if c[0]>=t)/len(ch)+0.5)
        out.append([y,len(ch),round(w[0],1),w[1],w[2],round(med,1),round(b[0],1),b[1],b[2],sh(0),sh(3.8),sh(7.9),sh(10.5)])
    return out
if __name__=='__main__':
    for r in roll(load_metro(sys.argv[1])): print(','.join(map(str,r)))
