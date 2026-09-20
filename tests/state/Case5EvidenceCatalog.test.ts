// @Architecture(descriptionShort="Unit tests for isolated Case 5 evidence catalog", type="test", icon="database")
import { describe, expect, it } from 'vitest';
import { getEvidenceCatalog } from '../../src/state/index.js';

const CASE5_IDS = [
  'insignia_abogado', 'parte_detencion', 'hoja_relevo', 'esquina_tarjeta', 'informe_forense_c5',
  'tomo_caido', 'estante_consulta', 'libro_visitas', 'plano_archivo',
  'expediente_casimiro', 'recibo_renta', 'nota_mecanografiada', 'acuse_notificacion',
  'credencial_sindico', 'inventario_1971', 'libro_peritos', 'expediente_serie',
  'huacal_9', 'fichero_cedulario', 'maquina_escribir', 'oficio_diligencia',
  'efectos_casimiro', 'bitacora_caldera', 'ficha_domicilio'
] as const;

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
  it('returns exactly 24 case5 items for es and en', () => {
    const es = getEvidenceCatalog('es', 'case5');
    const en = getEvidenceCatalog('en', 'case5');
    const ids = Object.keys(es).sort();

    expect(ids).toHaveLength(24);
    expect(ids).toEqual([...CASE5_IDS].sort());
    expect(ids).toContain('insignia_abogado');
    expect(ids).toContain('ficha_domicilio');
    expect(es.chipote_chillon).toBeUndefined();
    expect(es.informe_medico).toBeUndefined();
    expect(es.informe_forense).toBeUndefined();
    expect(Object.keys(en).sort()).toEqual(ids);
  });

  it('uses collision-safe icons for shared evidence ids', () => {
    const c5 = getEvidenceCatalog('es', 'case5');
    expect(c5.parte_detencion?.icon).toBe('assets/parte_detencion_c5.webp');
    expect(c5.insignia_abogado?.icon).toBe('assets/insignia_abogado.webp');

    const c0 = getEvidenceCatalog('es', 'case0').parte_detencion;
    const c1 = getEvidenceCatalog('es', 'case1').parte_detencion;
    expect(c0?.icon).toBe('assets/parte_detencion.webp');
    expect(c1?.icon).toBe('assets/parte_detencion_c1.webp');
    expect(c0?.icon).not.toBe('assets/parte_detencion_c5.webp');
    expect(c1?.icon).not.toBe('assets/parte_detencion_c5.webp');
  });

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

  it('names parte_detencion as an acta de detención / arrest report', () => {
    const es = getEvidenceCatalog('es', 'case5').parte_detencion;
    const en = getEvidenceCatalog('en', 'case5').parte_detencion;
    expect(es?.name).toBe('Acta de Detención');
    expect(es?.desc).toMatch(/[Aa]cta de detención/);
    expect(es?.desc).not.toMatch(/\bParte del\b/);
    expect(en?.name).toBe('Arrest Report');
    expect(en?.desc).toMatch(/[Aa]rrest report/);
  });

  it('keeps the custody relay sheet separate from the arrest report', () => {
    const es = getEvidenceCatalog('es', 'case5');
    const en = getEvidenceCatalog('en', 'case5');
    expect(es.hoja_relevo?.name).toBe('Hoja de Relevo de Custodia');
    expect(en.hoja_relevo?.name).toBe('Custody Relay Sheet');
    // The annex is gone: the arrest report no longer carries the relay hours.
    expect(es.parte_detencion?.desc).not.toMatch(/relevo/i);
    expect(en.parte_detencion?.desc).not.toMatch(/relay|annex/i);
    expect(es.hoja_relevo?.icon).not.toBe(es.parte_detencion?.icon);
  });

  it('states the entry and exit hours that open the fifteen-minute gap', () => {
    const es = getEvidenceCatalog('es', 'case5').hoja_relevo;
    const en = getEvidenceCatalog('en', 'case5').hoja_relevo;
    expect(es?.desc).toContain('17:00');
    expect(es?.desc).toContain('17:15');
    expect(es?.desc).toMatch(/quince minutos/i);
    expect(en?.desc).toContain('5:00 PM');
    expect(en?.desc).toContain('5:15 PM');
    expect(en?.desc).toMatch(/fifteen minutes/i);
  });

  it('uses 24h times in Spanish and AM/PM in English for libro_visitas', () => {
    const es = getEvidenceCatalog('es', 'case5').libro_visitas;
    const en = getEvidenceCatalog('en', 'case5').libro_visitas;
    expect(es?.desc).toContain('16:40');
    expect(es?.desc).toContain('16:58');
    expect(en?.desc).toContain('4:40 PM');
    expect(en?.desc).toContain('4:58 PM');
  });

  it('states in libro_visitas that building staff do not sign', () => {
    const es = getEvidenceCatalog('es', 'case5').libro_visitas;
    const en = getEvidenceCatalog('en', 'case5').libro_visitas;
    expect(es?.desc).toMatch(/personal del edificio no firma/i);
    expect(en?.desc).toMatch(/building staff do not/i);
  });

  it('makes the oficio distribution list legible', () => {
    const es = getEvidenceCatalog('es', 'case5').oficio_diligencia;
    const en = getEvidenceCatalog('en', 'case5').oficio_diligencia;
    expect(es?.desc).toMatch(/sindicatura de la quiebra 114\/1971/i);
    expect(en?.desc).toMatch(/bankruptcy (?:syndic|receivership) 114\/1971/i);
  });
});
