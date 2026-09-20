// @Architecture(descriptionShort="Guards Barriga shock/enojado as wheelchair bandage busts", type="test", icon="layers")
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

/** Standing idle has a fedora. Injured poses have a white cranial wrap. */
function headWhite(fileNames: string[]): number[] {
  const assetPaths = fileNames.map((fileName) =>
    path.resolve(__dirname, '../../assets', fileName)
  );
  const py = [
    'from PIL import Image',
    'import json, numpy as np, sys',
    'def count(path):',
    '  a = np.array(Image.open(path).convert("RGBA"))',
    '  top = a[:int(a.shape[0]*0.42)]',
    '  mask = top[:,:,3] > 200',
    '  rgb = top[:,:,:3].astype(int)',
    '  R, G, B = rgb[:,:,0], rgb[:,:,1], rgb[:,:,2]',
    '  return int(((R>200)&(G>200)&(B>200)&mask).sum())',
    'print(json.dumps([count(path) for path in sys.argv[1:]]))',
  ].join('\n');
  const pyBin = process.platform === 'win32' ? 'python' : 'python3';
  return JSON.parse(execFileSync(pyBin, ['-c', py, ...assetPaths], { encoding: 'utf8' }));
}

describe('Barriga pose contracts', () => {
  it('keeps shock and enojado on the vendado bandage, not the standing fedora', () => {
    const [idle, vendado, shock, enojado] = headWhite([
      'barriga_idle.webp',
      'barriga_vendado.webp',
      'barriga_shock.webp',
      'barriga_enojado.webp',
    ]);
    expect(idle).toBeLessThan(200);
    expect(vendado).toBeGreaterThan(2000);
    expect(shock).toBeGreaterThan(2000);
    expect(enojado).toBeGreaterThan(2000);
  });

  it('keeps Case 5 healthy poses on the fedora, not the bandage', () => {
    const whitePixels = headWhite([
      'barriga_sorpresa.webp',
      'barriga_reclamo.webp',
      'barriga_confundido.webp',
      'barriga_aliviado.webp',
    ]);
    for (const count of whitePixels) {
      expect(count).toBeLessThan(2000);
    }
  });
});
