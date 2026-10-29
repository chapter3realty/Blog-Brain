/** Distances and a grid index, so a search near one house reads a few cells, not 50,000 sales. */

const EARTH_MILES = 3958.8;

export function miles(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const r = Math.PI / 180;
  const a = Math.sin(((lat2 - lat1) * r) / 2) ** 2 + Math.cos(lat1 * r) * Math.cos(lat2 * r) * Math.sin(((lon2 - lon1) * r) / 2) ** 2;
  return 2 * EARTH_MILES * Math.asin(Math.min(1, Math.sqrt(a)));
}

/** About 1.4 miles a cell at this latitude. */
const CELL = 0.02;

export class Grid<T extends { lat: number | null; lon: number | null }> {
  private cells = new Map<string, T[]>();

  constructor(items: readonly T[]) {
    for (const it of items) {
      if (it.lat == null || it.lon == null) continue;
      const k = Grid.key(it.lat, it.lon);
      const list = this.cells.get(k);
      if (list) list.push(it);
      else this.cells.set(k, [it]);
    }
  }

  private static key(lat: number, lon: number): string {
    return `${Math.floor(lat / CELL)},${Math.floor(lon / CELL)}`;
  }

  /** Every item within `radius` miles, with its distance. */
  near(lat: number, lon: number, radius: number): Array<{ item: T; mi: number }> {
    const span = Math.ceil(radius / 1.1) + 1;
    const ci = Math.floor(lat / CELL);
    const cj = Math.floor(lon / CELL);
    const out: Array<{ item: T; mi: number }> = [];
    for (let i = ci - span; i <= ci + span; i++) {
      for (let j = cj - span; j <= cj + span; j++) {
        const list = this.cells.get(`${i},${j}`);
        if (!list) continue;
        for (const item of list) {
          const mi = miles(lat, lon, item.lat as number, item.lon as number);
          if (mi <= radius) out.push({ item, mi });
        }
      }
    }
    return out;
  }
}
