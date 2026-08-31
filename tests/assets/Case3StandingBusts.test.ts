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

function pythonJson(script: string, args: string[]): Record<string, unknown> {
  const pyBin = process.platform === 'win32' ? 'python' : 'python3';
  return JSON.parse(execFileSync(pyBin, ['-c', script, ...args], { encoding: 'utf8' }));
}

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
  const files = fileNames.map((n) => `${n}.png`);
  return pythonJson(py, [assetsDir, ...files]) as Record<string, number>;
}

function edgePads(fileName: string): { left: number; top: number; right: number; size: number[] } {
  const assetsDir = path.resolve(__dirname, '../../assets');
  const py = [
    'from PIL import Image',
    'import json, numpy as np, os, sys',
    'a = np.array(Image.open(os.path.join(sys.argv[1], sys.argv[2])).convert("RGBA"))',
    'opaque = a[:,:,3] > 32',
    'rows = np.where(opaque.any(axis=1))[0]',
    'cols = np.where(opaque.any(axis=0))[0]',
    'h, w = opaque.shape',
    'print(json.dumps({"size":[w,h],"left":int(cols[0]),"top":int(rows[0]),',
    '  "right":int(w-1-cols[-1])}))',
  ].join('\n');
  return pythonJson(py, [assetsDir, fileName]) as {
    left: number; top: number; right: number; size: number[];
  };
}

describe('Case 3 standing busts', () => {
  it('keeps opaque hems on the 512 canvas floor so plain meets the dialogue box', () => {
    const gaps = bottomGaps(CASE3_PLAIN_BUSTS);
    for (const pose of CASE3_PLAIN_BUSTS) {
      expect(gaps[`${pose}.png`], pose).toBeLessThanOrEqual(8);
    }
  });

  it('keeps Aniceto breakdown inside 512 with side and top magenta margin', () => {
    const pads = edgePads('aniceto_breakdown.png');
    expect(pads.size).toEqual([512, 512]);
    expect(pads.left, 'left edge clips the bust').toBeGreaterThanOrEqual(8);
    expect(pads.right, 'right edge clips the bust').toBeGreaterThanOrEqual(8);
    expect(pads.top, 'top edge crops the head').toBeGreaterThanOrEqual(8);
  });
});

describe('anchor_standing_bust', () => {
  it('scales an oversized crop onto 512 instead of zoom-cropping it', () => {
    const repo = path.resolve(__dirname, '../..');
    const py = [
      'import json, sys, numpy as np',
      'from PIL import Image',
      'sys.path.insert(0, sys.argv[1])',
      'from process_case2_assets import anchor_standing_bust',
      'src = Image.new("RGBA", (1024, 1024), (0, 0, 0, 0))',
      'src.paste((200, 40, 40, 255), (0, 0, 1024, 1024))',
      'out = np.array(anchor_standing_bust(src))',
      'opaque = out[:,:,3] > 32',
      'h, w = opaque.shape',
      'cols = np.where(opaque.any(axis=0))[0]',
      'rows = np.where(opaque.any(axis=1))[0]',
      'print(json.dumps({"size":[w,h],"left":int(cols[0]),"top":int(rows[0]),',
      '  "right":int(w-1-cols[-1]),"bottom":int(h-1-rows[-1])}))',
    ].join('\n');
    const pads = pythonJson(py, [repo]) as {
      size: number[]; left: number; top: number; right: number; bottom: number;
    };
    expect(pads.size).toEqual([512, 512]);
    expect(pads.left).toBeGreaterThanOrEqual(8);
    expect(pads.right).toBeGreaterThanOrEqual(8);
    expect(pads.top).toBeGreaterThanOrEqual(8);
    expect(pads.bottom).toBeLessThanOrEqual(8);
  });
});
