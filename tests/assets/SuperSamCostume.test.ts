// @Architecture(descriptionShort="Guards Super Sam navy-flag costume across poses", type="test", icon="layers")
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * Case 2 generated supersam_sweat from a yellow/green Chespirito sheet.
 * Idle/point/slam/breakdown stay navy with flag cape and red trunks.
 */
function measureCostume(fileName: string): {
  navy: number;
  yellow: number;
  red: number;
  green: number;
} {
  const pngPath = path.resolve(__dirname, '../../assets', fileName);
  const py = [
    'from PIL import Image',
    'import json, numpy as np, sys',
    'a = np.array(Image.open(sys.argv[1]).convert("RGBA"))',
    'mask = a[:,:,3] > 200',
    'rgb = a[:,:,:3].astype(int)',
    'R, G, B = rgb[:,:,0], rgb[:,:,1], rgb[:,:,2]',
    'print(json.dumps({',
    '  "navy": int(((B>R+40)&(B>G+20)&(B>80)&mask).sum()),',
    '  "yellow": int(((R>180)&(G>140)&(B<80)&mask).sum()),',
    '  "red": int(((R>160)&(G<90)&(B<90)&mask).sum()),',
    '  "green": int(((G>R+20)&(G>B+20)&(G>80)&mask).sum()),',
    '}))',
  ].join('\n');
  const pyBin = process.platform === 'win32' ? 'python' : 'python3';
  return JSON.parse(execFileSync(pyBin, ['-c', py, pngPath], { encoding: 'utf8' }));
}

describe('Super Sam costume identity', () => {
  it('keeps sweat on the navy flag suit, not the yellow-green Chespirito suit', () => {
    const idle = measureCostume('supersam_idle.webp');
    const sweat = measureCostume('supersam_sweat.webp');
    expect(idle.navy).toBeGreaterThan(40000);
    expect(idle.red).toBeGreaterThan(5000);
    expect(sweat.navy).toBeGreaterThan(40000);
    expect(sweat.red).toBeGreaterThan(3000);
    expect(sweat.green).toBeLessThan(500);
    expect(sweat.yellow).toBeLessThan(idle.navy / 5);
  });
});
