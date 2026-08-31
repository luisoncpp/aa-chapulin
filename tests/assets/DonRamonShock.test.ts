// @Architecture(descriptionShort="Guards Don Ramón shock pose navy-suit identity", type="test", icon="layers")
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * Extra Don Ramón poses snap to TV casual clothes unless idle is the identity lock.
 */
function measureSprite(fileName: string): { navy: number; bottomGap: number } {
  const pngPath = path.resolve(__dirname, '../../assets', fileName);
  const py = [
    'from PIL import Image',
    'import json, numpy as np, sys',
    'a = np.array(Image.open(sys.argv[1]).convert("RGBA"))',
    'mask = a[:,:,3] > 32',
    'rows = np.where(mask.any(axis=1))[0]',
    'rgb = a[:,:,:3].astype(int)',
    'opaque = a[:,:,3] > 200',
    'R, G, B = rgb[:,:,0], rgb[:,:,1], rgb[:,:,2]',
    'print(json.dumps({',
    '  "navy": int(((B>R+40)&(B>G+20)&(B>80)&opaque).sum()),',
    '  "bottomGap": int(a.shape[0] - 1 - rows[-1]),',
    '}))',
  ].join('\n');
  const pyBin = process.platform === 'win32' ? 'python' : 'python3';
  return JSON.parse(execFileSync(pyBin, ['-c', py, pngPath], { encoding: 'utf8' }));
}

describe('Don Ramón shock sprite', () => {
  it('keeps the navy lawyer suit from idle, not TV denim', () => {
    const idleNavy = measureSprite('donramon_idle.png').navy;
    const shockNavy = measureSprite('donramon_shock.png').navy;
    expect(idleNavy).toBeGreaterThan(25000);
    expect(shockNavy).toBeGreaterThan(25000);
    expect(shockNavy).toBeGreaterThan(idleNavy * 0.6);
  });

  it('puts the hem on the canvas floor like idle so the plain frame meets the dialogue box', () => {
    const idleGap = measureSprite('donramon_idle.png').bottomGap;
    const shockGap = measureSprite('donramon_shock.png').bottomGap;
    expect(idleGap).toBeLessThanOrEqual(8);
    expect(shockGap).toBeLessThanOrEqual(8);
  });
});
