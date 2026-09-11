// @Architecture(descriptionShort="Case 0 evidence catalog and staged descriptions", type="test", icon="database")
import { describe, expect, it } from 'vitest';
import { GameStateManager, getEvidenceCatalog } from '../../src/state/index.js';
import { getCaseScript } from '../../src/case/index.js';

const CASE0_IDS = [
  'parte_detencion', 'informe_lesiones', 'recibo_hielo', 'foto_patio',
  'plancha_carbon', 'lata_ahorros', 'maletin_cobranza', 'tarjeta_enciclopedias'
] as const;

describe('Case 0 evidence', () => {
  it('contains all nine court-record entries with matching detailed plates', () => {
    const catalog = getEvidenceCatalog('es', 'case0');
    expect(catalog.insignia_abogado).toBeDefined();
    for (const id of CASE0_IDS) expect(catalog[id]).toBeDefined();
    expect(catalog.recibo_hielo.detailedView?.imageAsset).toBe('assets/examine_recibo_hielo.webp');
    expect(catalog.foto_patio.detailedView?.imageAsset).toBe('assets/examine_foto_patio.webp');
    expect(catalog.plancha_carbon.detailedView?.imageAsset).toBe('assets/examine_plancha.webp');
    expect(catalog.lata_ahorros.detailedView?.imageAsset).toBe('assets/examine_lata.webp');
  });

  it('exposes the Nazario injury plate in both language catalogs', () => {
    const catalogs = [getEvidenceCatalog('es', 'case0'), getEvidenceCatalog('en', 'case0')];
    for (const catalog of catalogs) {
      expect(catalog.informe_lesiones.detailedView?.imageAsset).toBe('assets/examine_informe_lesiones.webp');
      expect(catalog.informe_lesiones.detailedView?.caption).toBeTruthy();
    }
  });

  it('starts with seven entries and advances only scripted stages', () => {
    const state = new GameStateManager();
    state.beginTrialOnlyCase(getCaseScript('es', 'case0'));
    expect(state.mode).toBe('TRIAL');
    expect(state.inventory).toEqual([
      'insignia_abogado', 'parte_detencion', 'informe_lesiones', 'recibo_hielo',
      'foto_patio', 'plancha_carbon', 'lata_ahorros'
    ]);
    expect(state.getEvidenceUpdateStage('informe_lesiones')).toBe(0);
    expect(state.getEvidenceUpdateStage('lata_ahorros')).toBe(0);
  });

  it('uses clear and natural names and descriptions for Case 0 evidence items', () => {
    const catalogEs = getEvidenceCatalog('es', 'case0');
    expect(catalogEs.parte_detencion.name).toBe('Informe de Detención');
    expect(catalogEs.tarjeta_enciclopedias.name).toBe('Tarjeta de Presentación');
    expect(catalogEs.parte_detencion.updates?.[0]).not.toContain('mano izquierda del maletín');
    expect(catalogEs.parte_detencion.desc).not.toContain('vencida');

    const catalogEn = getEvidenceCatalog('en', 'case0');
    expect(catalogEn.parte_detencion.name).toBe('Arrest Report');
    expect(catalogEn.parte_detencion.updates?.[0]).not.toContain('clasp, and left hand');
    expect(catalogEn.parte_detencion.updates?.[0]).toContain('carried in the left hand');
  });
});
