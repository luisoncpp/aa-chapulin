// @Architecture(descriptionShort="Guards Case 4 poses, plates, and pipeline wiring", type="test", icon="layers")
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

const ROOT = path.resolve(__dirname, '../..');
const ASSETS = path.join(ROOT, 'assets');

const POSES = [
  'botija_idle', 'botija_nervioso', 'botija_llorando', 'botija_aliviado',
  'cecilio_idle', 'cecilio_ciego', 'cecilio_escandalo', 'cecilio_shock',
  'maruja_idle', 'maruja_coqueta', 'maruja_abanico', 'maruja_nerviosa',
  'maruja_shock',
  'rufino_smug', 'rufino_monocle', 'rufino_sweat', 'rufino_panic',
  'rufino_breakdown',
];

const BACKGROUNDS = [
  'bg_hotel_lobby', 'bg_hotel_suite', 'bg_hotel_bar', 'bg_hotel_sotano',
  'bg_hotel_suite204', 'bg_hotel_cava', 'bg_hotel_azotea',
  'bg_hotel_azotea_day',
];

const EXAMINE = [
  'examine_foto', 'examine_cadena', 'examine_plano', 'examine_botella',
  'examine_nota', 'examine_orden', 'examine_registro', 'examine_sello',
];

const ICONS = [
  'informe_policial', 'foto_suite304', 'candado_cadena', 'plano_hotel',
  'residuos_manos', 'billetera_cuajinais', 'informe_forense', 'casquillo_fogueo',
  'registro_montacargas', 'copa_vino', 'botella_vino', 'boleta_baccarat',
  'baul_etiquetas', 'sello_lacre', 'nota_amenaza', 'orden_servicios',
  'toxicologia_vino',
];

function expectWebp(stem: string): void {
  const filePath = path.join(ASSETS, `${stem}.webp`);
  expect(fs.existsSync(filePath), stem).toBe(true);
  expect(fs.statSync(filePath).size, stem).toBeGreaterThan(1000);
}

describe('Case 4 visual assets', () => {
  it('keeps Botija, Cecilio, Maruja, and Rufino pose files on disk', () => {
    POSES.forEach(expectWebp);
  });

  it('keeps hotel investigation plates and deep-examine views', () => {
    BACKGROUNDS.forEach(expectWebp);
    EXAMINE.forEach(expectWebp);
  });

  it('keeps Case 4 court-record icon webps', () => {
    ICONS.forEach(expectWebp);
  });

  it('wires process_case4_assets.py for 2x2 sheets, 4x4 icons, and plates', () => {
    const src = fs.readFileSync(path.join(ROOT, 'process_case4_assets.py'), 'utf8');
    expect(src).toContain('process_character_sheet');
    expect(src).toContain('anchor_standing_bust');
    expect(src).toContain('process_evidence_grid');
    expect(src).toContain('process_unlabeled_evidence_grid');
    expect(src).toContain('case4_evidence_icons_raw.png');
    expect(src).toMatch(
      /process_unlabeled_evidence_grid\(\s*"case4_evidence_icons_raw\.png"\s*,\s*EV\s*,\s*\(\s*4\s*,\s*4\s*\)\s*\)/,
    );
    expect(src).toContain('bg_hotel_lobby.jpg');
    expect(src).toContain('bg_hotel_azotea_day.png');
    expect(src).toContain('examine_foto.jpg');
    expect(src).toContain('examine_orden.jpg');
    expect(src).toContain('orden_servicios_icon_raw.png');
    expect(src).toContain('maruja_shock_raw.png');
    expect(src).toContain('rufino_breakdown_raw.png');
    expect(src).toContain('foto_suite304_icon_raw.png');

    const sharedPipeline = fs.readFileSync(path.join(ROOT, 'process_case3_assets.py'), 'utf8');
    expect(sharedPipeline).toContain('remove_grid_dividers');
    const unlabeledExtractor = sharedPipeline.slice(
      sharedPipeline.indexOf('def process_unlabeled_evidence_grid'),
      sharedPipeline.indexOf('# Every plain-frame bust'),
    );
    expect(unlabeledExtractor).toContain('remove_grid_dividers');
    expect(unlabeledExtractor).not.toContain('icon_drop_boxes');
  });

  it('replaces the bedroom polaroid that did not match examine_foto', () => {
    const buf = fs.readFileSync(path.join(ASSETS, 'foto_suite304.webp'));
    const hash = createHash('sha256').update(buf).digest('hex');
    expect(hash).not.toBe(
      'aa1c8a1d683a9ff3f0f825801abb89f3193ba40199219d9dc3d418c0cc8f7ff2',
    );
  });
});
