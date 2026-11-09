import math,sys
def share(r,m):  # cumulative principal share after m months, 30y loan, monthly rate r
    return ((1+r)**m-1)/((1+r)**360-1)
def solve_r(target):  # year-1 share -> monthly rate
    lo,hi=1e-6,0.02
    for _ in range(200):
        mid=(lo+hi)/2
        if share(mid,12)>target: lo=mid
        else: hi=mid
    return (lo+hi)/2
r_hi=solve_r(0.0084)   # low share = high rate
r_lo=solve_r(0.0227)
def be(P,g,buyer,c,paydown_r=None):
    d=0.0037; F=1500
    b=0.03 if buyer=='financed' else 1866/P
    L=0.75*P if buyer=='financed' else 0
    for m in range(1,601):
        V=P*(1+g)**(m/12)
        paid=L*share(paydown_r,m) if paydown_r else 0
        if V*(1-c-d)-F+paid>=P*(1+b): return round(m/12,1)
    return None
def be_cont(P,g,buyer,c):
    d=0.0037;F=1500; b=0.03 if buyer=='financed' else 1866/P
    K=(1+b+F/P)/(1-c-d)
    return round(math.log(K)/math.log(1+g),1) if g>0 else None
if __name__=='__main__':
    print('rates (annual %)', round(r_lo*1200,2), round(r_hi*1200,2))
    for P,gs in [(342010,[0.0194,0.0518,0.0608,0.03,0.05]),(339737.75,[0.0183,0.0521,0.0606])]:
        for g in gs:
            for buyer in ['financed','cash']:
                nd=be_cont(P,g,buyer,0.06)
                pd=(be(P,g,buyer,0.06,r_lo),be(P,g,buyer,0.06,r_hi)) if buyer=='financed' else None
                print(P,g,buyer,'no paydown',nd,'paydown',pd)
    for P in (342010,339737.75):
      for buyer in ['financed','cash']:
        b=0.03 if buyer=='financed' else 1866/P
        print(P,buyer,'rise needed %',round(((1+b+1500/P)/(1-0.06-0.0037)-1)*100,2))
