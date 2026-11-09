# Fix: /invest/accommodations-tax/

The page has no spec; edit chapter3realty/invest/accommodations-tax/index.html the way round 1 did, then run `node build.js dates`. Do not type a date (the "Rates read September 3, 2026" source line is typed; replace it with "Rates read on the date this page was updated" or let the build handle it).

## 1. The short answer (rows 1 to 3) - a correction the city rows depend on

Now: "South Carolina charges 7 percent. Your county or city adds 1 to 3 percent on top."
New: "The state charges 7 percent, and it also collects the county's sales taxes, which makes 9 percent in most of Horry County and 10 percent in Myrtle Beach. Your county and city then add 1.5 to 3 percent of their own. All in, a short stay in Horry County pays 12 to 13 percent."

## 2. "What does South Carolina charge?" (rows 1 to 3b)

After "The sales tax rate on rent is 5 percent, not the 6 percent charged in stores." add:
"The state revenue department also collects the county's local sales taxes on rent. In Horry County those are 1 percent for school buildings and 1 percent for roads, so the department collects 9 percent. Myrtle Beach adds a 1 percent tourism tax, for 10 percent. In Georgetown County the extra is 1 percent, for 8 percent."

In the state table, keep the four rows and add two:
| Horry County local sales taxes, collected by the state | 2% |
| Myrtle Beach tourism tax, collected by the state | 1% more |

## 3. "What does your county or city add?" table (rows 4 to 9)

Replace the row "Inside a Horry County city | 1.5% hospitality fee | Monthly, by the 20th" with these three rows, and keep the other rows:

| City of Myrtle Beach | 1.5% county hospitality fee, plus the city's 1% hospitality fee and 0.5% local accommodations tax | Monthly, by the 20th; the city's two go to the city |
| North Myrtle Beach | 1.5% county hospitality fee, plus the city's 1.5% hospitality fee | Monthly, by the 20th; the city's goes to the city |
| Surfside Beach | 1.5% county hospitality fee, plus the town's 1% hospitality fee and 0.5% local accommodations tax | Monthly, by the 20th; the town's two go to the town |

Under the table, after "Horry County publishes its rates on its treasurer page.", add: "Myrtle Beach, North Myrtle Beach and Surfside Beach publish theirs on their own pages. All three stop at 90 days, the same as the state."

## 4. One new line with the totals on a $1,000 booking (rows 10 to 13)

Directly under the table:
"On a $1,000 booking, the guest pays $130 in tax in Myrtle Beach, $120 in North Myrtle Beach, $120 in Surfside Beach and $120 in unincorporated Horry County."

(Optional, as a small table instead: Where | State collects | County | City | Total on $1,000. Myrtle Beach $100 / $15 / $15 / $130. North Myrtle Beach $90 / $15 / $15 / $120. Surfside Beach $90 / $15 / $15 / $120. Unincorporated Horry County $90 / $30 / none / $120.)

## 5. Sources line

Add: SCDOR ST-575 rate chart, City of Myrtle Beach business license FAQ, North Myrtle Beach hospitality fee FAQ, Surfside Beach hospitality and accommodations tax FAQ. Link each to the URL in its row.

## 6. Check for the same mistake on sibling pages

`/invest/str-rules/` already shows 13 / 12 / 12 percent, which rows 10 to 12 confirm. Grep the site for "South Carolina charges 7 percent" and "adds 1 to 3 percent" and fix any copy that presents 7 percent as the whole state-collected tax in Horry County.

## Not in this pass

The hero size (three lines with the italic "county by county.") is a layout fix.
