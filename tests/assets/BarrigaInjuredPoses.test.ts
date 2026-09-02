// @Architecture(descriptionShort="Guards Barriga shock/enojado as wheelchair bandage busts", type="test", icon="layers")
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

/** Standing idle has a fedora. Injured poses have a white cranial wrap. */
function headWhite(fileName: string): number {
  const pngPath = path.resolve(__dirname, '../../assets', fileName);
  const py = [
    'from PIL import Image',
    'import json, numpy as np, sys',
    'a = np.array(Image.open(sys.argv[1]).convert("RGBA"))',
    'top = a[:int(a.shape[0]*0.42)]',
    'mask = top[:,:,3] > 200',
    'rgb = top[:,:,:3].astype(int)',
    'R, G, B = rgb[:,:,0], rgb[:,:,1], rgb[:,:,2]',
    'print(json.dumps(int(((R>200)&(G>200)&(B>200)&mask).sum())))',
  ].join('\n');
  const pyBin = process.platform === 'win32' ? 'python' : 'python3';
  return JSON.parse(execFileSync(pyBin, ['-c', py, pngPath], { encoding: 'utf8' }));
}

describe('Barriga injured poses', () => {
  it('keeps shock and enojado on the vendado bandage, not the standing fedora', () => {
    expect(headWhite('barriga_idle.webp')).toBeLessThan(200);
    expect(headWhite('barriga_vendado.webp')).toBeGreaterThan(2000);
    expect(headWhite('barriga_shock.webp')).toBeGreaterThan(2000);
    expect(headWhite('barriga_enojado.webp')).toBeGreaterThan(2000);
  });
});
