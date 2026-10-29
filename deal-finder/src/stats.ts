/** Small, dependency-free statistics. Each function is pure. */

export function median(xs: readonly number[]): number | null {
  return quantile(xs, 0.5);
}

/** Linear-interpolated quantile, q in [0, 1]. Null for an empty list. */
export function quantile(xs: readonly number[], q: number): number | null {
  if (!xs.length) return null;
  const s = [...xs].sort((a, b) => a - b);
  const pos = (s.length - 1) * q;
  const lo = Math.floor(pos);
  const hi = Math.ceil(pos);
  return s[lo] + (s[hi] - s[lo]) * (pos - lo);
}

/** The value at which half the weight lies on each side. */
export function weightedMedian(values: readonly number[], weights: readonly number[]): number | null {
  if (!values.length) return null;
  const pairs = values.map((v, i) => [v, Math.max(0, weights[i])] as const).sort((a, b) => a[0] - b[0]);
  const total = pairs.reduce((t, p) => t + p[1], 0);
  if (total <= 0) return median(values);
  let run = 0;
  for (const [v, w] of pairs) {
    run += w;
    if (run >= total / 2) return v;
  }
  return pairs[pairs.length - 1][0];
}

export function mean(xs: readonly number[]): number | null {
  return xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null;
}

/**
 * Ridge regression by the normal equations: (X'X + lambda I) b = X'y.
 * Column 0 is taken to be the intercept and is not penalised.
 */
export function ridge(X: readonly number[][], y: readonly number[], lambda: number): number[] {
  const p = X[0].length;
  const A: number[][] = Array.from({ length: p }, () => new Array<number>(p).fill(0));
  const b = new Array<number>(p).fill(0);
  for (let r = 0; r < X.length; r++) {
    const row = X[r];
    for (let i = 0; i < p; i++) {
      b[i] += row[i] * y[r];
      for (let j = i; j < p; j++) A[i][j] += row[i] * row[j];
    }
  }
  for (let i = 0; i < p; i++) {
    for (let j = 0; j < i; j++) A[i][j] = A[j][i];
    if (i > 0) A[i][i] += lambda;
  }
  return solve(A, b);
}

/** Gaussian elimination with partial pivoting. */
export function solve(A: number[][], b: number[]): number[] {
  const n = b.length;
  const M = A.map((row, i) => [...row, b[i]]);
  for (let c = 0; c < n; c++) {
    let piv = c;
    for (let r = c + 1; r < n; r++) if (Math.abs(M[r][c]) > Math.abs(M[piv][c])) piv = r;
    [M[c], M[piv]] = [M[piv], M[c]];
    const d = M[c][c];
    if (Math.abs(d) < 1e-12) continue;
    for (let r = 0; r < n; r++) {
      if (r === c) continue;
      const f = M[r][c] / d;
      if (f === 0) continue;
      for (let k = c; k <= n; k++) M[r][k] -= f * M[c][k];
    }
  }
  return M.map((row, i) => (Math.abs(row[i]) < 1e-12 ? 0 : row[n] / row[i]));
}

/** A seeded random number generator (mulberry32), so every run and test repeats exactly. */
export function rng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** A standard normal draw (Box-Muller) from a uniform source. */
export function normal(rand: () => number): number {
  const u = Math.max(rand(), 1e-12);
  const v = rand();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

export const num = (v: unknown): number | null => (typeof v === "number" && Number.isFinite(v) ? v : null);

export function round(n: number, step = 1): number {
  return Math.round(n / step) * step;
}
