"""Fetch homes and photos through the CRM's labeler door (CRM Ticket 629), and make contact sheets.

  python3 fetch.py homes  <workdir>            # every home for sale: description + photo links -> homes.jsonl
  python3 fetch.py sheets <workdir> <keys.txt> # photos for those homes -> sheets/<key>-<i>.jpg (9 photos each)

The key is read from the file named by LABELER_KEY_FILE; it is never written to this repo.
Photos: the first 25 of each home, at 480 px, paced at PER_MIN a minute so the
live site keeps most of the MLS photo budget (CRM photos.ts: 200 a minute, 8,000 an hour).
Listing photos are never kept: each one is deleted once its sheet is made, and the
sheets are deleted once labeled (CLAUDE.md images rule).
"""
import io, json, os, sys, time, urllib.request, urllib.error
from PIL import Image, ImageDraw, ImageFont

BASE = "https://app.chapter3realty.com/api/idx/labeler"
PHOTOS = 25
PER_MIN = int(os.environ.get("PER_MIN", "80"))
TILE = 480

def key():
    return open(os.environ["LABELER_KEY_FILE"]).read().strip()

def get(url, headers=None, tries=5):
    for i in range(tries):
        req = urllib.request.Request(url, headers={"user-agent": "chapter3-labeler", **(headers or {})})
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code in (429, 503) and i < tries - 1:
                time.sleep(int(e.headers.get("retry-after") or 30))
                continue
            raise
        except urllib.error.URLError:
            time.sleep(5 * (i + 1))
    raise RuntimeError("gave up: " + url)

def door(q):
    return json.loads(get(f"{BASE}?{q}", {"x-labeler-key": key()}))

def homes(work):
    keys, after = [], ""
    while True:
        page = door(f"after={after}")
        keys += page["keys"]
        if not page.get("next"):
            break
        after = page["next"]
    out = open(os.path.join(work, "homes.jsonl"), "w")
    for i in range(0, len(keys), 50):
        for h in door("keys=" + ",".join(keys[i:i + 50]))["homes"]:
            out.write(json.dumps(h) + "\n")
    out.close()
    print(len(keys), "homes")

FONT = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 34)

def sheet(tiles, path):
    """Up to 9 (n, image) as a 3x3 grid, each tile numbered with its photo place n."""
    W, H = TILE, 360
    img = Image.new("RGB", (W * 3, H * 3), "white")
    d = ImageDraw.Draw(img)
    for i, (n, im) in enumerate(tiles):
        im = im.convert("RGB")
        im.thumbnail((W, H))
        x, y = (i % 3) * W, (i // 3) * H
        img.paste(im, (x + (W - im.width) // 2, y + (H - im.height) // 2))
        d.rectangle([x, y, x + 64, y + 46], fill="black")
        d.text((x + 8, y + 4), str(n), fill="yellow", font=FONT)
    img.save(path, "JPEG", quality=80)

def sheets(work, keys_file):
    want = [k.strip() for k in open(keys_file) if k.strip()]
    by = {}
    for line in open(os.path.join(work, "homes.jsonl")):
        h = json.loads(line)
        by[h["key"]] = h
    os.makedirs(os.path.join(work, "sheets"), exist_ok=True)
    gap = 60.0 / PER_MIN
    for k in want:
        h = by.get(k)
        if not h:
            continue
        photos = h["photos"][:PHOTOS]
        if os.path.exists(os.path.join(work, "sheets", f"{k}-{(len(photos) - 1) // 9}.jpg")):
            continue
        got = []
        for p in photos:
            t = time.time()
            try:
                got.append((p["n"], Image.open(io.BytesIO(get(p["url"])))))
            except Exception as e:
                print("photo failed", k, p["n"], e, file=sys.stderr)
            time.sleep(max(0, gap - (time.time() - t)))
        for i in range(0, len(got), 9):
            sheet(got[i:i + 9], os.path.join(work, "sheets", f"{k}-{i // 9}.jpg"))
        print("sheets", k, len(got), flush=True)

if __name__ == "__main__":
    {"homes": homes, "sheets": sheets}[sys.argv[1]](*sys.argv[2:])
