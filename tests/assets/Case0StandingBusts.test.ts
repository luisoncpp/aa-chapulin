// @Architecture(descriptionShort="Guards Case 0 bust hems on the canvas floor", type="test", icon="layers")
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

const TORIBIO_PLAIN_BUSTS = [
  'toribio_idle', 'toribio_nervioso', 'toribio_llorando', 'toribio_aliviado',
];

function bottomGaps(fileNames: string[]): Record<string, number> {
  const assetsDir = path.resolve(__dirname, '../../assets');
  const python = process.platform === 'win32' ? 'python' : 'python3';
  const script = [
    'from PIL import Image',
    'import json, numpy as np, os, sys',
    'out = {}',
    'for name in sys.argv[2:]:',
    '  alpha = np.array(Image.open(os.path.join(sys.argv[1], name)).convert("RGBA"))[:,:,3]',
    '  rows = np.where(alpha > 32)[0]',
    '  out[name] = int(alpha.shape[0] - 1 - rows[-1])',
    'print(json.dumps(out))',
  ].join('\n');
  const files = fileNames.map((name) => `${name}.webp`);
  return JSON.parse(execFileSync(python, ['-c', script, assetsDir, ...files], { encoding: 'utf8' }));
}

describe('Case 0 standing busts', () => {
  it('keeps Toribio hems close enough to meet the plain dialogue frame', () => {
    const gaps = bottomGaps(TORIBIO_PLAIN_BUSTS);
    for (const pose of TORIBIO_PLAIN_BUSTS) {
      expect(gaps[`${pose}.webp`], pose).toBeLessThanOrEqual(8);
    }
  });
});
