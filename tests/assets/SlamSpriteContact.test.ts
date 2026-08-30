// @Architecture(descriptionShort="Guards Super Sam slam identity and desk-contact silhouette", type="test", icon="layers")
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * bench-slam is solved against chapulin_slam.png. Super Sam's slam must share that
 * A-frame silhouette (see-through waist, palms at the bottom) or his torso paints
 * onto the bench. Costume markers must also match idle/point/breakdown.
 */
function measurePng(fileName: string): {
  notch: number | null;
  palms: number;
  center80: number;
  red: number;
  gold: number;
} {
  const pngPath = path.resolve(__dirname, '../../assets', fileName);
  const py = [
    'from PIL import Image',
    'import json, numpy as np, sys',
    'a = np.array(Image.open(sys.argv[1]).convert("RGBA"))',
    'fg = a[:,:,3] > 8',
    'h, w = fg.shape',
    'cx0, cx1 = int(w * 0.35), int(w * 0.65)',
    'notch = next((y for y in range(int(h * 0.70), h)',
    '    if fg[y,:cx0].any() and fg[y,cx1:].any() and fg[y,cx0:cx1].mean() < 0.25), None)',
    'rows = np.where(fg.any(1))[0]',
    'mask = a[:,:,3] > 200',
    'rgb = a[:,:,:3]',
    'red = int(((rgb[:,:,0]>160)&(rgb[:,:,1]<90)&(rgb[:,:,2]<90)&mask).sum())',
    'gold = int(((rgb[:,:,0]>180)&(rgb[:,:,1]>140)&(rgb[:,:,2]<80)&mask).sum())',
    'print(json.dumps({"notch": notch, "palms": int(rows[-1]),',
    '    "center80": int(fg[-80:, w//2].sum()), "red": red, "gold": gold}))'
  ].join('\n');
  const pyBin = process.platform === 'win32' ? 'python' : 'python3';
  return JSON.parse(execFileSync(pyBin, ['-c', py, pngPath], { encoding: 'utf8' }));
}

describe('Super Sam slam sprite', () => {
  it('keeps the desk-contact notch and matching costume colors', () => {
    const m = measurePng('supersam_slam.png');
    // Waist gap must open near chapulin_slam's 448/512 target, not down on the wood.
    expect(m.notch).toBeGreaterThanOrEqual(430);
    expect(m.notch).toBeLessThanOrEqual(460);
    expect(m.palms).toBeGreaterThanOrEqual(500);
    expect(m.center80).toBe(0);
    // Idle/point have a gold SS belt and red trunks; the old slam had ~50 gold pixels.
    expect(m.gold).toBeGreaterThan(1500);
    expect(m.red).toBeGreaterThan(3000);
  });
});
