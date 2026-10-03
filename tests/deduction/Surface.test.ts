import { afterEach, describe, expect, it, vi } from 'vitest';
import { DeductionSurface } from '../../src/deduction/Private/Surface.js';
const scene = vi.hoisted(() => ({ dispose: vi.fn(), update: vi.fn(), fail: null as null | (() => void) }));
vi.mock('../../src/deduction/Private/ThreeScene.js', () => ({ ThreeScene: class {
  constructor(_host: HTMLElement, onFailure: () => void) { scene.fail = onFailure; }
  update = scene.update; dispose = scene.dispose;
} }));
afterEach(() => { vi.restoreAllMocks(); vi.clearAllMocks(); });
describe('optional renderer', () => {
  it('keeps usable branches when WebGL is unavailable', async () => {
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null);
    const host = document.createElement('div'), mode = vi.fn(), surface = new DeductionSurface(host, mode);
    surface.update({ count: 4, selected: -1, focus: 0, phase: 'question', paused: false, reduced: true, labels: [] });
    const before = host.querySelector('svg')!.innerHTML; await surface.setFlat(false);
    expect(host.dataset.renderer).toBe('2d'); expect(host.querySelector('svg')!.innerHTML).toBe(before);
    surface.dispose(); expect(host.childElementCount).toBe(0);
  });
  it('falls back on context loss without changing presentation state', async () => {
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({} as WebGL2RenderingContext);
    const host = document.createElement('div'), surface = new DeductionSurface(host, vi.fn());
    surface.update({ count: 3, selected: 1, focus: 1, phase: 'travel', paused: false, reduced: false, labels: [] });
    await surface.setFlat(false); expect(host.dataset.renderer).toBe('3d'); const before = host.querySelector('svg')!.innerHTML;
    scene.fail!(); expect(host.dataset.renderer).toBe('2d'); expect(host.querySelector('svg')!.innerHTML).toBe(before);
    expect(scene.dispose).toHaveBeenCalledTimes(1); surface.dispose();
  });
});
