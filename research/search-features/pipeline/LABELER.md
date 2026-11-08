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
