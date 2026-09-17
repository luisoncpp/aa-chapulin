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

function slice(from: string, to: string): string {
  const start = SPEC.indexOf(from);
  expect(start, `missing section ${from}`).toBeGreaterThan(-1);
  const end = SPEC.indexOf(to, start);
  expect(end, `missing section ${to}`).toBeGreaterThan(-1);
  return SPEC.slice(start, end);
}

function ranuraMap(): Map<string, string> {
  const map = new Map<string, string>();
  for (const line of slice('### 5.1', '## 6.').split('\n')) {
    const id = line.match(/^\| `(\w+)` /);
    if (!id) continue;
    const cells = line.split('|');
    if (cells.length < 6) continue;
    map.set(id[1], (cells[4] ?? '').replace(/\*\*/g, ''));
  }
  return map;
}

const DAY_BY_CHAPTER: Record<string, string> = {
  '11': 'D1',
  '13': 'D2',
  '15': 'D3',
  '17': 'D4',
};

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
    expect(SPEC).toContain('16 bases, 29 archivos localizados');
    expect(SPEC).not.toMatch(/(?:profileTarget|presentTarget): (?!\[)/);
  });

  it('distinguishes the original cedulario inventory from its current physical count', () => {
    expect(SPEC).toContain('11,400 originales');
    expect(SPEC).toContain('11,407 físicas');
    expect(SPEC).toContain('once bajas permanecen archivadas');
  });

  it('keeps the culprit chronology physically possible', () => {
    expect(SPEC).not.toContain('espera doce minutos detrás de los estantes');
    expect(SPEC).toContain('espera detrás de los estantes. Poco antes de las 16:50');
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
    expect(SPEC.toLowerCase()).toContain('más de doscientas cincuenta aperturas desde 1971');
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

  it('uses Casimiro actual eleven-year exposure to Berrondo', () => {
    expect(SPEC).not.toContain('se pasó quince años imitándole');
    expect(SPEC).not.toContain('se pasó nueve años copiándole');
    expect(SPEC).toContain('se pasó once años copiándole');
  });

  it('budgets every movement in the culprit route', () => {
    expect(SPEC).toContain('### 24.B Topología mínima y presupuesto temporal');
    expect(SPEC).toContain('| 17:03–17:04:30 |');
    expect(SPEC).toContain('montacargas de carga');
    expect(SPEC).toContain('**I12**');
  });

  it('accounts for the expected actuario and his actual arrival', () => {
    expect(SPEC).toContain('Actuario de guardia');
    expect(SPEC).toContain('17:44');
    expect(SPEC).not.toContain('17:22');
    expect(SPEC).not.toContain('diecisiete veintidós');
    expect(SPEC).toContain('Cuatro asientos, señor juez.');
    expect(SPEC).toContain('atendí a cuatro personas');
    expect(SPEC).toContain('**I13**');
  });

  it('attributes the November vale before using it against Berrondo', () => {
    expect(SPEC).toContain('Solicitante: licenciado Fulgencio Berrondo');
    expect(SPEC).toContain('Firma: F. Berrondo');
    expect(SPEC).toContain('**I14**');
  });

  it('makes the required evidence contain the follow-up answer', () => {
    expect(SPEC).toContain('#### `followUp`: **`huacal_9`**');
    expect(SPEC).toContain('fecha completa **`SÁB 4-XII`**');
    expect(SPEC).toContain('**I15**');
  });

  it('does not overstate the forensic, receipt, or typewriter proof', () => {
    expect(SPEC).not.toContain('con media hora de anticipación al informe del perito');
    expect(SPEC).not.toContain('¡El propio testigo asentó que el pagador era otro!');
    expect(SPEC).not.toContain('Tráigame algo que no se pueda discutir.');
    expect(SPEC).not.toContain('esa máquina no ha salido de este edificio en once años');
    expect(SPEC).toContain('**I16**');
  });

  it('lists the new BGM tracks as an integration requirement', () => {
    const integration = slice('## 25.', '<!-- APPEND-HERE');
    expect(integration).toContain('`TrackName`');
    expect(integration).toContain('`archivo`');
    expect(integration).toContain('`cross_exam_grave`');
  });
});

describe('Case 5 structural relations', () => {
  it('maps every testimony contradiction and followUp to its §5 ranura', () => {
    const ranuras = ranuraMap();
    expect(ranuras.size).toBe(23);
    const heads = [...SPEC.matchAll(/^### (\d+)\.\d+ Testimonio (\d+)/gm)];
    expect(heads.length).toBe(9);
    heads.forEach((head, i) => {
      const start = head.index as number;
      const end =
        i + 1 < heads.length ? (heads[i + 1].index as number) : SPEC.indexOf('## 18.');
      const body = SPEC.slice(start, end);
      const tag = `${DAY_BY_CHAPTER[head[1]]}-T${head[2]}`;
      const contradiction = body.match(
        /#### (?:Contradicción resolutoria|Inferencia refutada) — declaración[^:]*: \*\*`(\w+)`\*\*/,
      );
      const followUp = body.match(/#### `followUp`: \*\*`(\w+)`\*\*/);
      expect(contradiction, `${tag}: missing contradiction header`).toBeTruthy();
      expect(followUp, `${tag}: missing followUp header`).toBeTruthy();
      expect(
        ranuras.get(contradiction![1]),
        `${tag}: §5 ranura of ${contradiction![1]}`,
      ).toContain(`${tag} contradicción`);
      expect(ranuras.get(followUp![1]), `${tag}: §5 ranura of ${followUp![1]}`).toContain(
        `${tag} \`followUp\``,
      );
    });
  });

  it('maps every evidence openingPresent and señalamiento board to its §5 ranura', () => {
    const ranuras = ranuraMap();
    const openings: Array<[string, string, string]> = [
      ['### 11.1', '### 11.2', 'D1'],
      ['### 15.1', '### 15.2', 'D3'],
      ['### 17.1', '### 17.2', 'D4'],
    ];
    for (const [from, to, day] of openings) {
      const op = slice(from, to).match(/`openingPresent`: \*\*`(\w+)`\*\*/);
      expect(op, `${day} openingPresent`).toBeTruthy();
      expect(ranuras.get(op![1]), `${day} openingPresent ranura`).toContain(
        `${day} \`openingPresent\``,
      );
    }
    const boards = [...SPEC.matchAll(/\*\*Señalamiento sobre la lámina de `(\w+)`\.\*\*/g)].map(
      (m) => m[1],
    );
    expect(boards).toEqual(['expediente_serie', 'estante_consulta']);
    for (const board of boards) {
      expect(ranuras.get(board), `board ${board}`).toContain('Señ.');
    }
  });

  it('never leaves a statement holding the datum its own contradiction reveals', () => {
    const t = slice('### 17.2', '## 18.');
    const decl2 = t.split('\n').find((line) => line.startsWith('c5_d4t1_2'));
    expect(decl2, 'c5_d4t1_2 declaration').toBeTruthy();
    expect(decl2).not.toContain('devolución de gafete');
    const contradiction = t.slice(
      t.indexOf('#### Contradicción resolutoria — declaración 2'),
      t.indexOf('#### `followUp`'),
    );
    expect(contradiction).toContain('«Hora de devolución de gafete»');
  });

  it('schedules the actuario after the body is found', () => {
    const chrono = slice('### 4.2', '### 4.3');
    const actuario = chrono.match(/\| (\d\d:\d\d) \| El actuario Hilario Balbuena entra/);
    const hallazgo = chrono.match(
      /\| (\d\d:\d\d) \| Nicanor sube a cerrar el pasillo y encuentra el cuerpo/,
    );
    expect(actuario, 'actuario entry row').toBeTruthy();
    expect(hallazgo, 'discovery row').toBeTruthy();
    expect((actuario as RegExpMatchArray)[1] > (hallazgo as RegExpMatchArray)[1]).toBe(true);
  });

  it('budgets the pre-crime approach with the same rigor as the crime circuit', () => {
    const budget = slice('### 24.B', '### 24.C');
    for (const leg of ['| 16:40–16:45 |', '| 16:45–16:50 |', '| 16:50–16:55 |', '| 16:55–17:02 |']) {
      expect(budget).toContain(leg);
    }
    const approach = budget.slice(budget.indexOf('| 16:40–16:45 |'));
    expect(approach).toContain('Montacargas de carga');
  });

  it('grounds machine custody in the seal record instead of an unproven absolute', () => {
    expect(SPEC).not.toContain('nunca ha salido de esta bodega');
    expect(SPEC).not.toContain('nunca ha salido de este edificio');
    expect(SPEC).not.toContain('había salido de este edificio en once años');
    const e5 = slice('### 18.6', '### 18.7');
    expect(e5).toContain('llevan una sola rúbrica');
    expect(e5).toContain('tiras firmadas por una sola mano');
  });

  it('charges the Monday vale against the Thursday routine on screen', () => {
    const d4t1 = slice('### 17.2', '## 18.');
    expect(d4t1).toContain('fue lunes');
    expect(d4t1).toContain('sólo los jueves');
    expect(slice('**F17**', '### 24.D')).toContain('refuta la rutina de los jueves');
  });

  it('names the engine field that plays the stage-3 pre-present block', () => {
    expect(slice('### 18.3', '### 18.4')).toContain('`introDialogue`');
  });

  it('specifies the new BGM tracks in the asset section, not the style guide', () => {
    expect(SPEC).toContain('### 23.7');
    expect(SPEC).toContain('`archivo` (§23.7)');
    expect(SPEC).toContain('`cross_exam_grave` (§23.7)');
    expect(SPEC).not.toContain('(§22)');
  });

  it('keeps the choice fail line true for every wrong option', () => {
    expect(SPEC).not.toContain('no toma en cuenta lo que Berrondo reconoció');
    expect(slice('### 18.4', '### 18.5')).toContain(
      'no distingue lo que el remate y el inventario prueban',
    );
  });

  it('does not declare poses, voices or counts the script does not use', () => {
    expect(SPEC).not.toContain('nicanor_shock');
    expect(slice('### 10.1', '### 10.2')).not.toContain('donramon_panic');
    expect(SPEC).toContain('`ALGUACIL` y `CUSTODIO`');
    expect(SPEC).toContain('con cinco personajes');
  });

  it('ends every narrative wait before the registered badge return (I17)', () => {
    const devolucion = slice('### 4.2', '### 4.3').match(
      /\| (1\d:\d\d) \| Berrondo devuelve el gafete/,
    );
    expect(devolucion, '§4.2 devolución row').toBeTruthy();
    const wait = slice('### 2.2', '### 2.3').match(/hasta las (\d{1,2}:\d{2})/i);
    if (wait) expect(wait[1] < devolucion![1]).toBe(true);
  });

  it('never reads the peritos book before the court orders it (I18)', () => {
    const order = SPEC.search('Mañana a primera hora');
    expect(order).toBeGreaterThan(-1);
    for (const reading of SPEC.matchAll(/[Ll]ey[óe] (?:el |ese )?libro de peritos/g)) {
      expect((reading.index as number) > order).toBe(true);
    }
    expect(slice('### 13.1', '### 13.2')).toContain(
      'cuando él me comunicó su carácter de síndico del occiso',
    );
  });

  it('derives every descarte column from a §24.A agent (I19)', () => {
    const descarte = slice('### 20.1', '## 21.');
    expect(descarte).toContain('La fila 2 no descarta por sí sola');
    const header = descarte.split('\n').find((l) => l.startsWith('| Requisito'));
    expect(header, 'descarte header').toBeTruthy();
    const people = header!.split('|').slice(2).map((c) => c.trim()).filter(Boolean);
    expect(people.length).toBe(7);
    const agentes = slice('### 24.A', '### 24.B');
    for (const person of people) {
      expect(agentes, `§24.A row for ${person}`).toContain(person);
    }
  });

  it('gives every plate-cited hour a canonical timeline row (I20)', () => {
    const plate = SPEC.match(/tomada a las (\d{2}:\d{2}) del 4 de diciembre/);
    expect(plate, 'L2 photograph hour').toBeTruthy();
    expect(slice('### 4.2', '### 4.3')).toContain(`| ${plate![1]} |`);
  });

  it('plays each declared explanatory plate once, where its row says (I21)', () => {
    const declared = [...SPEC.matchAll(/^\| L\d+ \|[^|]+\| `(plate_[\w]+\.webp)` \|/gm)].map(
      (m) => m[1],
    );
    expect(declared.length).toBe(9);
    const played = [...SPEC.matchAll(/\[LÁMINA assets\/(plate_[\w]+\.webp)\]/g)].map((m) => m[1]);
    expect(played.length).toBe(9);
    expect(new Set(played)).toEqual(new Set(declared));
    expect(/^\| L7 \|[^|]*GIRO 4/m.test(SPEC)).toBe(true);
  });

  it('states in §9 exactly the sum of its own estimates', () => {
    const start = SPEC.indexOf('```mermaid');
    const end = SPEC.indexOf('```', start + 10);
    const mins = [...SPEC.slice(start, end).matchAll(/~(\d+) min/g)].map((m) => Number(m[1]));
    const total = mins.reduce((a, b) => a + b, 0);
    expect(total).toBeGreaterThan(0);
    expect(slice('## 9.', '### 9.1')).toContain(`~${total} minutos`);
  });

  it('keeps the Sargento tenure and attendance inside his Case 3 debut (I22, I23)', () => {
    const tenure = SPEC.match(/Es que llevo (.+?) diciéndole «mi licenciado»/);
    expect(tenure, 'Sargento tenure line').toBeTruthy();
    expect(tenure![1]).toBe('casi tres meses');
    const attend = SPEC.match(/Yo estuve en (\w+) de ellos/);
    expect(attend, 'Sargento attendance line').toBeTruthy();
    expect(attend![1]).toBe('dos');
    expect(slice('### 11.1', '### 11.2')).toContain('está en ella desde hace cinco meses');
  });

  it('draws the fallen s on every document the documentoscopia compares (I24)', () => {
    expect(slice('### 16.2', '## 17.')).toContain(
      'la tarjeta de julio, la ficha del museo de agosto y la nota del sobre',
    );
    const row = SPEC.split('\n').find((l) => l.startsWith('| `examine_expediente_serie.webp`'));
    expect(row, 'señalamiento 1 art row').toBeTruthy();
    const panelA = row!.slice(row!.indexOf('**A (12 JUL):**'), row!.indexOf('**C (28 AGO):**'));
    const panelB = row!.slice(row!.indexOf('**B (21 AGO):**'), row!.indexOf('**C (28 AGO):**'));
    for (const panel of [panelA, panelB]) {
      expect(panel).toContain('media línea por debajo del renglón y medio grado inclinadas a la izquierda');
    }
  });

  it('describes in §20 only conduct the script performs (I25)', () => {
    const samRow = SPEC.split('\n').find((l) => l.startsWith('| D3-T2 (Super Sam)'));
    expect(samRow, '§20 D3-T2 row').toBeTruthy();
    expect(samRow).toContain('se acusa a sí mismo');
    expect(samRow).toContain('Déjelo');
    expect(slice('### 15.2', '### 15.3')).toContain('(Déjelo, joven.)');
    const barrigaRow = SPEC.split('\n').find((l) => l.startsWith('| D2-T1 (Barriga)'));
    expect(barrigaRow, '§20 D2-T1 row').toBeTruthy();
    expect(barrigaRow).toContain('ocho días antes');
    expect(slice('### 13.2', '### 13.3')).toContain('hace ocho días');
  });
});
