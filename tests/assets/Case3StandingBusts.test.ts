// @Architecture(descriptionShort="Guards Case 3 bust hems on the canvas floor", type="test", icon="layers")
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * plain staging lines the 512 canvas bottom to the dialogue box gold trim.
 * Magenta padding left under a waist-up bust reads as a clipped floating torso.
 */
const CASE3_PLAIN_BUSTS = [
  'chapatin_idle', 'chapatin_enojado', 'chapatin_bolsa', 'chapatin_sweat',
  'chapatin_conmovido',
  'pazguato_idle', 'pazguato_saludo', 'pazguato_sweat', 'pazguato_decidido',
  'aniceto_idle', 'aniceto_thinking', 'aniceto_sweat', 'aniceto_panic',
  'aniceto_breakdown',
  'barriga_idle', 'barriga_vendado', 'barriga_shock', 'barriga_enojado',
  'nono_idle', 'nono_nervioso', 'nono_llorando',
  'chimoltrufia_idle', 'chimoltrufia_confundida', 'chimoltrufia_shock',
];

function bottomGaps(fileNames: string[]): Record<string, number> {
  const assetsDir = path.resolve(__dirname, '../../assets');
  const py = [
    'from PIL import Image',
    'import json, numpy as np, os, sys',
    'root = sys.argv[1]',
    'out = {}',
    'for name in sys.argv[2:]:',
    '  a = np.array(Image.open(os.path.join(root, name)).convert("RGBA"))',
    '  rows = np.where(a[:,:,3] > 32)[0]',
    '  out[name] = int(a.shape[0] - 1 - rows[-1]) if len(rows) else 999',
    'print(json.dumps(out))',
  ].join('\n');
  const pyBin = process.platform === 'win32' ? 'python' : 'python3';
  const files = fileNames.map((n) => `${n}.png`);
  return JSON.parse(execFileSync(pyBin, ['-c', py, assetsDir, ...files], {
    encoding: 'utf8',
  }));
}

describe('Case 3 standing busts', () => {
  it('keeps opaque hems on the 512 canvas floor so plain meets the dialogue box', () => {
    const gaps = bottomGaps(CASE3_PLAIN_BUSTS);
    for (const pose of CASE3_PLAIN_BUSTS) {
      expect(gaps[`${pose}.png`], pose).toBeLessThanOrEqual(8);
    }
  });
});
