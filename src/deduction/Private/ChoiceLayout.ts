// @Architecture(descriptionShort="Shared projected geometry for rendered ideas and accessible targets")
export interface ChoicePlacement { x: number; y: number; width: number; height: number }
export function choiceLayout(count: number, portrait: boolean): ChoicePlacement[] {
  if (portrait) return Array.from({ length: count }, (_, i) => ({
    x: 0.5, y: 0.15 + i * 0.12, width: 0.82, height: 0.1
  }));
  if (count === 2) return [0.28, 0.72].map(x => ({ x, y: 0.36, width: 0.37, height: 0.15 }));
  if (count === 3) return [0.19, 0.5, 0.81].map((x, i) => ({ x, y: i === 1 ? 0.24 : 0.42, width: 0.29, height: 0.16 }));
  return [0, 1, 2, 3].map(i => ({ x: i % 2 ? 0.74 : 0.26, y: i < 2 ? 0.25 : 0.46, width: 0.38, height: 0.14 }));
}
