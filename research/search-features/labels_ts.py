"""Write the CRM's fixed label list (src/lib/idx/listing-labels-list.ts) from catalog.json.

A catalog feature becomes a label when a description or a photo can show it.
When the CRM already has an MLS feature for the same thing, the label takes that
key, so `has=<key>` matches the MLS field OR the label. Usage:
  python3 labels_ts.py <crm feature keys json> <out.ts>
"""
import json, sys

ALIAS = {  # catalog "mls" spelling -> the CRM's feature key
    "office": "home_office", "primary_main_floor": "main_level_primary", "two_primary_suites": "dual_primary",
    "luxury_vinyl": "vinyl_floors", "private_pool": "pool", "dock": "private_dock", "water_filtration": "water_purifier",
    "elevator_home": "home_elevator", "bedroom_main": "main_level_bedroom", "split_bedroom": "split_bedrooms",
    "rents_now": "has_rental_income", "needs_work": "fixer_upper",
}
GROUP = {
    "Kitchen": "inside", "Living spaces": "inside", "Bedrooms and baths": "inside", "Floors and finishes": "inside",
    "Outside the house": "outside", "Pool and spa": "outside", "Water, boats and the beach": "water",
    "Parking and storage": "outside", "Systems, energy and storm readiness": "inside",
    "Accessibility and one-level living": "inside", "Layout and size": "inside", "Lot and land": "outside",
    "Community": "community", "Short-term rental and investment": "market", "Condos and buildings": "type",
    "Condition and deal": "market", "Views and setting": "outside",
}

def main(keys_path, out_path):
    crm = set(json.load(open(keys_path)))
    cat = json.load(open("catalog.json"))
    rows, seen = [], set()
    for f in cat:
        sees = ("d" if "description" in f["where"] else "") + ("p" if "photos" in f["where"] else "")
        if not sees:
            continue
        mls = ALIAS.get(f["mls"], f["mls"]) if f["mls"] else None
        key = mls if mls in crm else (f["key"] if f["key"] in crm else f["key"])
        if key in seen:
            continue
        seen.add(key)
        about = f["note"] or ""
        if f["key"] == "active_adult":
            about = "the community's own 55-plus rule, as the listing states it"
        rows.append({"key": key, "label": f["label"], "group": GROUP[f["group"]], "sees": sees,
                     "mls": key in crm, "about": about})
    lines = [
        "/**",
        " * THE LABEL LIST (Ticket 628): every feature a listing's description or photos can show,",
        " * written from Blog-Brain research/search-features/catalog.json by labels_ts.py. Nothing",
        " * outside this list is ever stored (listing-labels.ts refuses it), and listing-labels.test.ts",
        " * holds it to the fair-housing rule: no label names who lives in or near a home.",
        " * `mls`: the CRM already has an MLS feature with this key, and `has=<key>` matches either.",
        " * `sees`: d = the description can say it, p = a photo can show it. Generated: edit the catalog.",
        " */",
        "export type ListingLabelDef = {",
        "  key: string;",
        "  label: string;",
        '  group: "place" | "price" | "size" | "type" | "market" | "water" | "outside" | "inside" | "community";',
        '  sees: "d" | "p" | "dp";',
        "  mls: boolean;",
        "  about: string;",
        "};",
        "",
        "export const LISTING_LABEL_LIST: readonly ListingLabelDef[] = [",
    ]
    for r in rows:
        lines.append("  " + json.dumps(r, ensure_ascii=False).replace('{"key"', '{ key').replace(', "label"', ', label').replace(', "group"', ', group').replace(', "sees"', ', sees').replace(', "mls"', ', mls').replace(', "about"', ', about').replace("}", " }") + ",")
    lines.append("];")
    open(out_path, "w").write("\n".join(lines) + "\n")
    print(len(rows), "labels;", sum(r["mls"] for r in rows), "share an MLS key;", sum(not r["mls"] for r in rows), "new")

main(*sys.argv[1:])
