import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

const SPEC = fs.readFileSync(
  path.resolve(__dirname, '../../docs/specs/case-5-el-tomo-trece.md'),
  'utf8',
);

function occurrences(text: string): number {
  return SPEC.split(text).length - 1;
}

describe('Case 5 specification consistency', () => {
  it('uses only section references that exist in the document', () => {
    expect(SPEC).not.toMatch(/§21\.[34]|§26|§28/);
  });

  it('keeps the shelf arithmetic and choice index canonical', () => {
    expect(SPEC).not.toContain('da veinticinco tomos');
    expect(SPEC).not.toContain('el vigesimoquinto');
    expect(SPEC).toContain('choicesAfterStage: 2');
    expect(SPEC).not.toContain('choicesAfterStage: 3');
  });

  it('uses the 1982 elapsed-year values and Chompiras count', () => {
    expect(SPEC).not.toContain('cincuenta y un años');
    expect(SPEC).not.toContain('como cien veces');
    expect(SPEC).toContain('veintisiete años de ejercicio');
    expect(SPEC).toContain('seis o siete veces');
  });

  it('advances every declared profile update stage', () => {
    expect(occurrences('[ACTUALIZAR-PERFIL perfil_berrondo]')).toBe(3);
    expect(occurrences('[ACTUALIZAR-PERFIL perfil_chompiras]')).toBe(1);
    const d3t1 = SPEC.slice(
      SPEC.indexOf('### 15.2 Testimonio 1'),
      SPEC.indexOf('### 15.3 Testimonio 2'),
    );
    expect(d3t1).toContain('[ACTUALIZAR-PERFIL perfil_chompiras]');
  });

  it('keeps access terms and the shelf art aligned with the ledger', () => {
    expect(SPEC.toLowerCase()).not.toContain('devolución de credencial');
    expect(SPEC).not.toContain('veintitrés lomos de tela verde oliva idénticos');
    expect(SPEC).toContain('veintidós lomos de tela verde oliva');
  });

  it('keeps climax failures and payoffs true for every path', () => {
    expect(SPEC).not.toContain('acaba de desacreditar su propio aparato');
    expect(SPEC).not.toContain('Eso no pone a nadie en ese pasillo');
    expect(SPEC).toContain('cinco mil menos setecientos cincuenta');
  });

  it('does not invent an antenna failure or advance payment', () => {
    expect(SPEC).not.toContain('Las Antenitas de Vinil fallan');
    expect(SPEC).not.toContain('se pagó por adelantado en once mil cuatrocientas casas');
  });

  it('uses the ledger term for every returned temporary badge', () => {
    expect(SPEC.toLowerCase()).not.toContain('credencial devuelta');
    expect(occurrences('gafete devuelto')).toBeGreaterThanOrEqual(3);
  });

  it('keeps detailed-view totals and target shapes implementation-ready', () => {
    expect(SPEC).toContain('`detailedView` | 16 pruebas');
    expect(SPEC).toContain('16 bases, 18 archivos localizados');
    expect(SPEC).not.toMatch(/(?:profileTarget|presentTarget): (?!\[)/);
  });

  it('distinguishes the original cedulario inventory from its current physical count', () => {
    expect(SPEC).toContain('11,400 originales');
    expect(SPEC).toContain('11,407 físicas');
    expect(SPEC).toContain('once bajas permanecen archivadas');
  });

  it('keeps the culprit chronology physically possible', () => {
    expect(SPEC).not.toContain('espera doce minutos detrás de los estantes');
    expect(SPEC).toContain('espera detrás de los estantes hasta las 16:50');
  });

  it('keeps post-reveal card counts and huacal durations canonical', () => {
    expect(SPEC).toContain('(Once mil cuatrocientas siete tarjetas y hay que pedirlas por calle.)');
    expect(SPEC).not.toContain('Once años, cuatro meses');
    expect(SPEC).not.toContain('Quince años bajando los jueves');
    expect(SPEC).not.toContain('lleva quince años haciendo lo mismo');
    expect(SPEC).not.toContain('(Quince años. Dos veces al mes.');
  });

  it('distinguishes historical inventory from current custody and money flow', () => {
    expect(SPEC).not.toContain('los doscientos diez están **en el sótano');
    expect(SPEC).toContain('los doscientos diez debían permanecer en el sótano');
    expect(SPEC).not.toContain('sobrante de $750');
    expect(SPEC).toContain('sobrante de $4,250');
  });

  it('uses the real December 1982 calendar', () => {
    expect(SPEC).toContain('sábado 4 de diciembre');
    expect(SPEC).toContain('lunes 6, martes 7, miércoles 8 y jueves 9 de diciembre');
    expect(SPEC).not.toContain('sábado 1 de diciembre');
    expect(SPEC).not.toContain('lunes 3, martes 4, miércoles 5 y jueves 6 de diciembre');
  });

  it('keeps the permanent seal history compatible with the opening routine', () => {
    expect(SPEC).not.toContain('Cuarenta y una aperturas desde 1971');
    expect(SPEC).toContain('más de doscientas cincuenta aperturas desde 1971');
  });

  it('localizes every examine asset whose readable prose carries an argument', () => {
    expect(SPEC).toContain('16 bases, 29 archivos localizados');
    expect(SPEC).toContain('Variantes localizadas al inglés (13)');
  });

  it('fires profile updates only at their declared revelations', () => {
    const cell = SPEC.slice(SPEC.indexOf('### 10.1 Locación 1'), SPEC.indexOf('### 10.2 Locación 2'));
    const d1t1 = SPEC.slice(SPEC.indexOf('### 11.2 Testimonio 1'), SPEC.indexOf('### 11.3 Testimonio 2'));
    const d1t3 = SPEC.slice(SPEC.indexOf('### 11.4 Testimonio 3'), SPEC.indexOf('### 11.5 GIRO 1'));
    const d3t2 = SPEC.slice(SPEC.indexOf('### 15.3 Testimonio 2'), SPEC.indexOf('### 15.4 Testimonio 3'));
    expect(cell).not.toContain('[ACTUALIZAR-PERFIL perfil_casimiro]');
    expect(d1t1).not.toContain('[ACTUALIZAR-PERFIL perfil_nicanor]');
    expect(d1t3).toContain('[ACTUALIZAR-PERFIL perfil_casimiro]');
    expect(d1t3).toContain('[ACTUALIZAR-PERFIL perfil_nicanor]');
    expect(d3t2).toContain('[ACTUALIZAR-PERFIL perfil_casimiro]');
  });

  it('uses Casimiro actual nine-year exposure to Berrondo', () => {
    expect(SPEC).not.toContain('se pasó quince años imitándole');
    expect(SPEC).toContain('se pasó nueve años copiándole');
  });
});
