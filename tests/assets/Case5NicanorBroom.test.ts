// @Architecture(descriptionShort="Guards Nicanor broom heads from cell-edge shears", type="test", icon="layers")
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * A broom painted into the 2x2 cell corner shears into a long straight alpha
 * edge. After chroma-key, that cut is a bbox side column — not a canvas pad.
 * A sheared brush was 78px; a sleeve bump is ~20px.
 */
const BROOM_POSES = ['nicanor_escoba', 'nicanor_sweat'];

function pythonJson(script: string, args: string[]): Record<string, unknown> {
  const pyBin = process.platform === 'win32' ? 'python' : 'python3';
  return JSON.parse(execFileSync(pyBin, ['-c', script, ...args], { encoding: 'utf8' }));
}

function edgeShear(fileName: string): { longestEdgeRun: number; bottomGap: number } {
  const asset = path.resolve(__dirname, '../../assets', fileName);
  const py = [
    'from PIL import Image',
    'import json, numpy as np, sys',
    'def longest_run(col):',
    '  runs, run = [], 0',
    '  for pixel in col:',
    '    if pixel: run += 1',
    '    elif run: runs.append(run); run = 0',
    '  if run: runs.append(run)',
    '  return int(max(runs) if runs else 0)',
    'a = np.array(Image.open(sys.argv[1]).convert("RGBA"))',
    'opaque = a[:,:,3] > 32',
    'rows = np.where(opaque.any(axis=1))[0]',
    'cols = np.where(opaque.any(axis=0))[0]',
    'crop = opaque[rows[0]:rows[-1]+1, cols[0]:cols[-1]+1]',
    'print(json.dumps({',
    '  "longestEdgeRun": max(longest_run(crop[:,0]), longest_run(crop[:,-1])),',
    '  "bottomGap": int(a.shape[0] - 1 - rows[-1]),',
    '}))',
  ].join('\n');
  return pythonJson(py, [asset]) as { longestEdgeRun: number; bottomGap: number };
}

describe('Case 5 Nicanor broom poses', () => {
  it('extracts nicanor_sweat from a 1x1 raw so the 2x2 cell cannot shear it', () => {
    const src = fs.readFileSync(
      path.resolve(__dirname, '../../process_case5_assets.py'),
      'utf8',
    );
    expect(src).toContain('nicanor_sweat_raw.png');
    expect(src).toContain('["nicanor_idle", "nicanor_escoba"]');
    expect(src).not.toContain('["nicanor_idle", "nicanor_escoba", "nicanor_sweat"]');
  });

  it('keeps broom heads tapered instead of sheared at the cell edge', () => {
    for (const pose of BROOM_POSES) {
      const shear = edgeShear(`${pose}.webp`);
      expect(shear.longestEdgeRun, pose).toBeLessThan(32);
    }
  });

  it('floors the overall hem so plain staging meets the dialogue box', () => {
    for (const pose of BROOM_POSES) {
      expect(edgeShear(`${pose}.webp`).bottomGap, pose).toBeLessThanOrEqual(8);
    }
  });
});
