# Instructions for a labeling helper

Do not create, archive or message any Claude Code session.

You label homes for sale for a home search. For each home you get:
- a description file;
- 1 to 3 photo sheets. Each sheet holds up to 9 photos, and each photo has its number in yellow in its top-left corner.

The allowed labels are in `labels.txt`. Use only those keys, exactly as written. A key from the photo list goes under `p`; a key from the description list goes under `d`.

## Rules

1. **Photos: label what you can clearly see.** For each photo label you are sure of, record the number of the clearest photo that shows it.
   - A pool behind a screen enclosure is `screened_pool`. An island in the kitchen is `kitchen_island`.
   - If you are unsure, leave it out. A wrong label is worse than a missing one.
2. **Description: label only what the text clearly states.**
   - "Sunny kitchen" is not `big_kitchen`.
   - "Close to the beach" is not `walk_to_beach_any`, unless the text says you can walk there.
   - If in doubt, leave it out.
3. **Describe rooms and things, never people.** Ignore any person, family photo or personal item in a photo. Never guess who lives in a home or who it suits.
4. A label key from neither list is never written. Do not invent keys.

## Output

Append one line per home to the output file you were given, as JSON with no other text:

```
{"k":"<home key>","d":["big_kitchen","loft"],"p":{"screened_pool":3,"kitchen_island":7}}
```

Use `"d":[]` or `"p":{}` when nothing applies.

## Method for descriptions (be complete)

A buyer may search for any label, so a home missing a label it clearly has is lost to that buyer. For each home:
1. Read the whole description, to the last word.
2. Go through the DESCRIPTION LABELS list from top to bottom, and ask of each one: does the text clearly say this?
3. Several labels can come from one phrase. For example:
   - "vaulted ceilings" gives `cathedral_ceilings` and `high_ceilings`;
   - "Loft/Bonus space" gives `loft` and `bonus_room`;
   - "convey with all appliances" gives `appliances_included`;
   - "majestic oaks" gives `live_oaks` and `mature_trees`;
   - "outdoor motion lighting" gives `lighting_outside`;
   - "move-in ready" gives `move_in_ready`.
4. Words that only suggest a use are not the room. "Can be used as an office" is a flex room (`bonus_flex`), not `home_office`.

## Method for photos (be complete, and sure)

For each home, open every sheet. For each photo:
1. Name the room or view: kitchen, bathroom, pool, dock, front, and so on.
2. Go through the PHOTO LABELS that fit that room, and ask of each one: can I clearly see it?
   - In a kitchen: island, counters, cabinets' color, range hood, farmhouse sink, pantry.
   - In a bathroom: walk-in shower, freestanding tub, double vanity.
   - In a living room: fireplace, ceilings, built-ins, shiplap, big windows.
   - Outside: pool kind, screen enclosure, dock, fence, porch, patio, pergola, fire pit, outdoor kitchen, view.
3. For each label, keep the photo that shows it best: the one a buyer would want to see first.
4. A label you are not sure of stays out. A label about size ("big kitchen", "big yard") needs a clearly large space, not a normal one.
