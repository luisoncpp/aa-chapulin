import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * The Case 5 spec declares invariants whose anchor is a line the player reads.
 * Validating the spec against itself cannot catch an anchor that never reached
 * `src/`, so these tests read the shipped scripts instead.
 */

const ROOT = path.resolve(__dirname, '../..');

function read(relativePath: string): string {
  return fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
}

function caseFiles(): string[] {
  const dir = path.join(ROOT, 'src/case/case5/Private');
  return fs.readdirSync(dir).map((name) => read(`src/case/case5/Private/${name}`));
}

describe('Case 5 invariant anchors reach the shipped scripts', () => {
  it('names the stolen bag as the prosecutor own bag, six kilos (I35)', () => {
    const es = read('src/case/case5/Private/trial_day3_t2.ts');
    const en = read('src/case/case5/Private/trial_day3_t2_en.ts');

    expect(es).toContain('mi bolsa no estaba. Seis kilos');
    expect(es).toContain('Era la mía.');
    expect(en).toContain('my bag was gone. Six kilos');
    expect(en).toContain('It was mine.');
  });

  it('pays the bribe outside a bag, one kilo out of six (I35)', () => {
    const es = read('src/case/case5/Private/trial_day3_t2.ts');
    const en = read('src/case/case5/Private/trial_day3_t2_en.ts');

    // He lost a bag that night; he never gained one.
    expect(es).toContain('papel de estraza');
    expect(es).toContain('un kilo de mi propia plata');
    expect(es).not.toMatch(/me pagaron.{0,40}bolsa de lona/);
    expect(en).toContain('butcher paper');
    expect(en).toContain('one kilo of my own silver');
  });

  it('dates the office burglary so the player can place it (I35)', () => {
    const es = read('src/case/case5/Private/trial_day3_t2.ts');
    expect(es).toContain('La mañana del veintiocho de agosto entré a mi despacho');
    expect(read('src/case/case5/Private/trial_day3_t2_en.ts')).toContain('On the morning of August 28 I walked into my chambers');
  });

  it('says the silver came out of his own prosecution office (I35)', () => {
    const es = read('src/case/case5/Private/trial_day3_t2.ts');
    expect(es).toMatch(/mi propia plata|plata de (mi|su) (propia )?(oficina|fiscalía|despacho)/);
  });
});

describe('Case 5 scripts follow the swapped August chronology', () => {
  it('never ties 21 August to the museum, its card or the bribe', () => {
    // 21 August belongs to Case 2 (flask and wax mould); the museum moved to the 28th.
    const museum = /museo|museum|ficha de seis renglones|six-line|me pag|paid me/i;
    for (const source of caseFiles()) {
      for (const line of source.split('\n')) {
        if (!/[Vv]eintiuno de agosto|August 21/.test(line)) continue;
        expect(line, 'a 21 August line must not be about the museum').not.toMatch(museum);
      }
    }
  });

  it('keeps the same museum date in the testimony and in its followUp', () => {
    const statement = read('src/case/case5/Private/trial_day3_t2.ts');
    const followUp = read('src/case/case5/Private/trial_day3_success_sam.ts');

    expect(statement).toContain('veintiocho de agosto');
    expect(followUp).toContain('veintiocho de agosto');
  });

  it('assigns panel C (21 Aug) to the flask and mould, not to the card', () => {
    const es = read('src/case/case5/Private/trial_day2_success.ts');
    const en = read('src/case/case5/Private/trial_day2_success_en.ts');

    expect(es).toMatch(/Veintiuno de agosto\.[^']*valeriana/);
    expect(en).toMatch(/August 21\.[^']*valerian/);
    expect(es).not.toContain('herramientas en un estanquillo');
  });

  it('lists the five archive folders in date order (I34)', () => {
    const talks = read('src/case/case5/Private/delegacion_c5_talks.ts');
    expect(talks.indexOf('la hacienda')).toBeLessThan(talks.indexOf('el museo'));
  });

  it('numbers the evidence panels B = 28 Aug and C = 21 Aug', () => {
    for (const file of ['EvidenceCatalogCase5EsB.ts', 'EvidenceCatalogCase5EnB.ts']) {
      const source = read(`src/state/Private/${file}`);
      expect(source).not.toMatch(/B \(21 ago\)/);
      expect(source).not.toMatch(/B \(Aug 21\)/);
    }
  });
});

describe('Case 5 day-3 testimony staging', () => {
  it('carries the bag stuffed with cotton, never described as empty in hand', () => {
    // The sprites paint a bulging bag, so the fiction cannot call it empty on his shoulder.
    const carried = [
      'src/case/case5/Private/trial_day3_t2.ts',
      'src/case/case5/Private/fiscalia_c5_hotspots.ts',
      'src/case/case5/Private/trial_day3_success.ts',
    ];
    for (const path of carried) {
      expect(read(path)).not.toMatch(/carg\w* una bolsa .{0,12}vacía|la cargo vacía/);
    }
    expect(read('src/case/case5/Private/trial_day3_t2.ts')).toContain('rellena de algodón');
    expect(read('src/case/case5/Private/trial_day3_t2_en.ts')).toContain('stuffed with cotton');
  });

  it('never poses Super Sam with a full bag while he testifies about losing it', () => {
    // supersam_idle carries the bulging money bag; in T7 the bag is empty on the table.
    for (const name of ['trial_day3_t2.ts', 'trial_day3_t2_en.ts']) {
      expect(read(`src/case/case5/Private/${name}`)).not.toContain('supersam_idle');
    }
  });
});

describe('Case 5 keeps physical facts consistent with Case 1', () => {
  it('carries the empty bag for more than three months, never four', () => {
    // Nicanor's thirty-one years and four months of service are a different fact.
    for (const source of caseFiles()) {
      expect(source).not.toMatch(/cuatro meses cargando/);
      expect(source).not.toMatch(/empty bag for four months/);
    }
  });

  it('gives the prosecution bag the same empty weight as Case 1', () => {
    const case1 = read('src/state/Private/EvidenceCatalogCase1Es.ts');
    const testimony = read('src/case/case5/Private/trial_day3_t2.ts');

    expect(case1).toContain('900 g');
    expect(testimony).not.toContain('cuatrocientos gramos');
    expect(testimony).toContain('novecientos gramos');
  });
});
