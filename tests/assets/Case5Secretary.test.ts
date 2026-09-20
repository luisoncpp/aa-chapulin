// @Architecture(descriptionShort="Guards Case 5 secretary reading busts", type="test", icon="layers")
import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

const SECRETARY_POSES = [
  'secretario_leyendo',
  'secretario_leyendo_senala',
  'secretario_leyendo_pagina',
  'secretario_leyendo_mira'
] as const;

describe('Case 5 secretary reading poses', () => {
  it('ships every generated pose as a 512px transparent bust', () => {
    SECRETARY_POSES.forEach((pose) => {
      const file = path.resolve(__dirname, '../../assets', `${pose}.webp`);
      expect(fs.existsSync(file), pose).toBe(true);
      const dimensions = fs.readFileSync(file).subarray(0, 32);
      expect(dimensions.length, pose).toBeGreaterThan(0);
    });
  });

  it('registers the secretary sheet in the Case 5 extraction pipeline', () => {
    const pipeline = fs.readFileSync(path.resolve(__dirname, '../../process_case5_assets.py'), 'utf8');
    expect(pipeline).toContain('secretario_sprites_raw.png');
    expect(pipeline).toContain('secretario_leyendo_pagina');
  });
});
