// @Architecture(descriptionShort="Guards Case 0 generated assets and processor wiring", type="test", icon="layers")
import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

const ROOT = path.resolve(__dirname, '../..');
const ASSETS = path.join(ROOT, 'assets');

const POSES = [
  'toribio_idle', 'toribio_nervioso', 'toribio_llorando', 'toribio_aliviado',
  'casimiro_amable', 'casimiro_catalogo', 'casimiro_sweat', 'casimiro_panic', 'casimiro_breakdown'
];
const ICONS = [
  'parte_detencion', 'informe_lesiones', 'recibo_hielo', 'foto_patio',
  'plancha_carbon', 'lata_ahorros', 'maletin_cobranza', 'tarjeta_enciclopedias'
];
const PLATES = [
  'examine_recibo_hielo', 'examine_foto_patio', 'examine_plancha', 'examine_lata',
  'examine_informe_lesiones', 'point_foto_patio', 'point_plancha', 'bg_waiting_room_case0'
];

function expectWebp(stem: string): void {
  const filePath = path.join(ASSETS, `${stem}.webp`);
  expect(fs.existsSync(filePath), stem).toBe(true);
  expect(fs.statSync(filePath).size, stem).toBeGreaterThan(1000);
}

describe('Case 0 visual assets', () => {
  it('keeps all generated character poses and court-record icons', () => {
    [...POSES, ...ICONS, 'foto_nazario'].forEach(expectWebp);
  });

  it('keeps examine and Present & Point plates', () => {
    PLATES.forEach(expectWebp);
  });

  it('wires the deterministic case processor and raw generated sheets', () => {
    const processor = fs.readFileSync(path.join(ROOT, 'process_case0_assets.py'), 'utf8');
    expect(processor).toContain('toribio_sheet_raw.png');
    expect(processor).toContain('casimiro_breakdown_raw.png');
    expect(processor).toContain('evidence_icons_raw.png');
    expect(processor).toContain('waiting_room_newspaper_raw.png');
    expect(processor).toContain('fingerprint');
    expect(processor).toContain('cover_crop');
    expect(processor).toContain('--only');
    expect(fs.existsSync(path.join(ROOT, 'tools/raw/case0/toribio_sheet_raw.png'))).toBe(true);
    expect(fs.existsSync(path.join(ROOT, 'tools/raw/case0/casimiro_sheet_raw.png'))).toBe(true);
    expect(fs.existsSync(path.join(ROOT, 'tools/raw/case0/examine_lata_raw.png'))).toBe(true);
    expect(fs.existsSync(path.join(ROOT, 'tools/raw/case0/evidence_icons_raw.png'))).toBe(true);
    expect(fs.existsSync(path.join(ROOT, 'tools/raw/case0/waiting_room_newspaper_raw.png'))).toBe(true);
  });
});
