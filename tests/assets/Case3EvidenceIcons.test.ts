// @Architecture(descriptionShort="Guards Case 3 court-record icon grid slicing", type="test", icon="layers")
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

const ROOT = path.resolve(__dirname, '../..');
const pyBin = process.platform === 'win32' ? 'python' : 'python3';

const CASE3_ICONS = [
  'informe_barriga', 'lentes_barriga', 'microfono_oro', 'bolsa_papel',
  'microfono_cabina', 'cinta_salud', 'marcas_carrito', 'ventana_cabina',
  'libro_verde', 'bitacora_transmision', 'receta_nono', 'programa_kermes',
  'ataduras_bodega', 'cartucho_corte', 'cinta_sketch', 'boleta_empeno'
];

function measureIcons(fileNames: string[]): Record<string, {
  fill: number; cx: number; cy: number; aspect: number; edgeMin: number;
  wood: number; bagBlue: number;
}> {
  const assetsDir = path.join(ROOT, 'assets');
  const py = [
    'from PIL import Image',
    'import json, numpy as np, os, sys',
    'out = {}',
    'root = sys.argv[1]',
    'for name in sys.argv[2:]:',
    '  a = np.array(Image.open(os.path.join(root, name)).convert("RGBA"))',
    '  h, w = a.shape[:2]',
    '  mask = a[:,:,3] > 32',
    '  ys, xs = np.where(mask)',
    '  rgb = a[:,:,:3].astype(int)',
    '  R, G, B = rgb[:,:,0], rgb[:,:,1], rgb[:,:,2]',
    '  opaque = a[:,:,3] > 200',
    '  bw = int(xs.max()-xs.min()+1) if len(xs) else 0',
    '  bh = int(ys.max()-ys.min()+1) if len(ys) else 0',
    '  edges = [int(xs.min()), int(ys.min()), int(w-1-xs.max()), int(h-1-ys.max())] if len(xs) else [0]',
    '  out[name] = {',
    '    "fill": float(mask.mean()),',
    '    "cx": float(xs.mean()/w) if len(xs) else 0,',
    '    "cy": float(ys.mean()/h) if len(ys) else 0,',
    '    "aspect": float(bw)/bh if bh else 0,',
    '    "edgeMin": int(min(edges)),',
    '    "wood": int(((R>90)&(G>70)&(B<90)&(R>B+20)&opaque).sum()),',
    '    "bagBlue": int(((B>80)&(G>60)&(B>R)&opaque).sum()),',
    '  }',
    'print(json.dumps(out))',
  ].join('\n');
  const args = [assetsDir, ...fileNames];
  return JSON.parse(execFileSync(pyBin, ['-c', py, ...args], { encoding: 'utf8' }));
}

describe('Case 3 evidence icon pipeline', () => {
  const measured = measureIcons(CASE3_ICONS.map((id) => `${id}.png`));

  it('slices sheet A as 4 columns by 3 rows, matching the raw grid', () => {
    const src = fs.readFileSync(path.join(ROOT, 'process_case3_assets.py'), 'utf8');
    expect(src).toMatch(
      /process_evidence_grid\(\s*"case3_evidence_icons_raw\.png"\s*,\s*EV_A\s*,\s*4\s*,\s*3\s*\)/
    );
  });

  it('keeps every Case 3 icon centered in its 128 canvas instead of a cell-slice strip', () => {
    for (const id of CASE3_ICONS) {
      const m = measured[`${id}.png`];
      expect(m.fill, id).toBeGreaterThan(0.08);
      expect(m.cx, id).toBeGreaterThan(0.35);
      expect(m.cx, id).toBeLessThan(0.65);
      expect(m.cy, id).toBeGreaterThan(0.35);
      expect(m.cy, id).toBeLessThan(0.65);
      expect(m.aspect, id).toBeGreaterThan(0.45);
      expect(m.aspect, id).toBeLessThan(2.2);
      expect(m.edgeMin, id).toBeGreaterThanOrEqual(8);
    }
  });

  it('maps the window wedge cell to wood, not the paper-bag syringe slice', () => {
    const wedge = measured['ventana_cabina.png'];
    const bag = measured['bolsa_papel.png'];
    expect(wedge.wood).toBeGreaterThan(80);
    expect(wedge.bagBlue).toBeLessThan(bag.bagBlue * 0.5 + 40);
  });
});
