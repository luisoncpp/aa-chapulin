// @Architecture(descriptionShort="Unit tests for isolated Case 5 evidence catalog", type="test", icon="database")
import { describe, expect, it } from 'vitest';
import { getEvidenceCatalog } from '../../src/state/index.js';

const DETAILED_VIEW_IDS = [
  'esquina_tarjeta', 'libro_visitas', 'libro_peritos', 'plano_archivo',
  'nota_mecanografiada', 'acuse_notificacion', 'credencial_sindico',
  'inventario_1971', 'expediente_serie', 'tomo_caido', 'estante_consulta',
  'huacal_9', 'maquina_escribir', 'ficha_domicilio', 'bitacora_caldera',
  'efectos_casimiro'
] as const;

const NO_DETAILED_VIEW_IDS = [
  'insignia_abogado', 'parte_detencion', 'hoja_relevo', 'informe_forense_c5',
  'expediente_casimiro', 'recibo_renta', 'fichero_cedulario', 'oficio_diligencia'
] as const;

const EN_SHARED_EXAMINE = ['estante_consulta', 'maquina_escribir'] as const;

function joinEnText(catalog: ReturnType<typeof getEvidenceCatalog>): string {
  return Object.values(catalog)
    .flatMap((item) => [
      item?.name ?? '',
      item?.desc ?? '',
      ...(item?.updates ?? []),
      item?.detailedView?.caption ?? ''
    ])
    .join(' ');
}

describe('Case5EvidenceCatalog', () => {
  it('attaches detailedView to the 16 examine items', () => {
    const es = getEvidenceCatalog('es', 'case5');
    const en = getEvidenceCatalog('en', 'case5');

    for (const id of DETAILED_VIEW_IDS) {
      expect(es[id]?.detailedView?.imageAsset, id).toMatch(/^assets\/examine_/);
      expect(es[id]?.detailedView?.caption, id).toBeTruthy();
    }
    for (const id of NO_DETAILED_VIEW_IDS) {
      expect(es[id]?.detailedView, id).toBeUndefined();
    }

    for (const id of DETAILED_VIEW_IDS) {
      const asset = en[id]?.detailedView?.imageAsset ?? '';
      if (EN_SHARED_EXAMINE.includes(id as typeof EN_SHARED_EXAMINE[number])) {
        expect(asset, id).not.toMatch(/_en\.webp$/);
      } else {
        expect(asset, id).toMatch(/_en\.webp$/);
      }
    }
  });

  it('defines updates only on informe_forense_c5 and maquina_escribir', () => {
    const catalog = getEvidenceCatalog('es', 'case5');
    expect(catalog.informe_forense_c5?.updates).toHaveLength(2);
    expect(catalog.maquina_escribir?.updates).toHaveLength(2);
    expect(catalog.tomo_caido?.updates).toBeUndefined();
    expect(catalog.libro_visitas?.updates).toBeUndefined();
  });

  it('keeps spoilers out of initial descriptions', () => {
    const es = getEvidenceCatalog('es', 'case5');
    expect(es.estante_consulta?.desc).not.toMatch(/lomo 11|ranura 11|slot 11/i);
    expect(es.informe_forense_c5?.desc).not.toMatch(/tomo|libro|enciclopedia/i);
    expect(es.nota_mecanografiada?.desc).not.toMatch(/‘s’|fallen/i);
    expect(es.tomo_caido?.desc).not.toContain('114/1971');
  });

  it('keeps English copy free of Spanish leakage', () => {
    const enText = joinEnText(getEvidenceCatalog('en', 'case5'));
    expect(enText).not.toMatch(/\bocciso\b/i);
    expect(enText).not.toMatch(/\bfoja\b/i);
    expect(enText).not.toMatch(/\bSÁB\b/);
    expect(enText).not.toMatch(/\bgafete\b/i);
    expect(enText).not.toMatch(/\bhuacal\b/i);

    const peritos = getEvidenceCatalog('en', 'case5').libro_peritos?.detailedView?.caption ?? '';
    expect(peritos).toMatch(/TIME OF ENTRY|Time of entry/i);
  });
});
