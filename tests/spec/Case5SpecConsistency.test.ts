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
    expect(SPEC).toContain('16 bases, 30 archivos localizados');
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

  it('localizes every examine asset whose readable prose carries an argument (I30)', () => {
    const section = slice('### 23.3', '### 23.4');
    const bases = [...section.matchAll(/^\| `(examine_\w+\.webp)` \|/gm)].map((m) => m[1]);
    expect(bases.length).toBe(16);
    const variants = [...section.matchAll(/`(examine_\w+_en\.webp)`/g)].map((m) => m[1]);
    expect(new Set(variants).size).toBe(14);
    expect(section).toContain(`16 bases, ${bases.length + variants.length} archivos localizados`);
    expect(section).toContain(`Variantes localizadas al inglés (${variants.length})`);
    // A plate may only be shared across languages if no argued mark is prose or a
    // language-bound abbreviation. `SÁB` is Spanish, so the huacal must be localized.
    for (const base of bases) {
      const row = section.split('\n').find((l) => l.startsWith(`| \`${base}\``)) ?? '';
      if (!/SÁB|DÍA/.test(row)) continue;
      const en = base.replace('.webp', '_en.webp');
      expect(variants, `${base} carries a Spanish weekday and must localize`).toContain(en);
    }
  });

  it('keeps the fallen-s rule and the wordplay substitution rules explicit (I31, I32)', () => {
    expect(slice('### 23.3', '### 23.4')).toContain('debe seguir conteniendo al menos una `s` minúscula visible');
    expect(slice('### 22.1', '### 22.2')).toContain('En inglés no se traducen: se sustituyen.');
    expect(slice('### 22.2', '## 23.')).toContain('**En inglés:**');
    for (const inv of ['**I30**', '**I31**', '**I32**']) expect(SPEC).toContain(inv);
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
    expect(ranuras.size).toBe(24);
    const heads = [...SPEC.matchAll(/^### (\d+)\.\d+ Testimonio (\d+)/gm)];
    expect(heads.length).toBe(9);
    heads.forEach((head, i) => {
      const start = head.index as number;
      const end =
        i + 1 < heads.length ? (heads[i + 1].index as number) : SPEC.indexOf('## 18.');
      const body = SPEC.slice(start, end);
      const tag = `${DAY_BY_CHAPTER[head[1]]}-T${head[2]}`;
      const contradiction = body.match(
        /#### (?:Contradicción resolutoria|Inferencia refutada) — declaraci(?:ón|ones)[^:]*: \*\*`(\w+)`\*\*/,
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
      'cuando él me comunicó su carácter de síndico de la víctima',
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
    const panelA = row!.slice(row!.indexOf('**A (12 JUL):**'), row!.indexOf('**C (21 AGO):**'));
    const panelB = row!.slice(row!.indexOf('**B (28 AGO):**'), row!.indexOf('**C (21 AGO):**'));
    for (const panel of [panelA, panelB]) {
      expect(panel).toContain('media línea por debajo del renglón y medio grado inclinadas a la izquierda');
    }
  });

  it('defines the fallen s as the original lowercase glyph, never a duplicate (I24/I31)', () => {
    const noteDetail = slice('> **`detailedView` de `nota_mecanografiada`', '#### Hablar con el Señor Barriga');
    const noteRow = SPEC.split('\n').find((line) => line.startsWith('| `examine_nota_renta.webp`'));
    expect(noteRow, 'nota renta art row').toBeTruthy();
    expect(noteDetail).toContain('se imprime una sola vez');
    expect(noteDetail).toContain('se añade otra `s` debajo');
    expect(noteRow).toContain('no se duplica');
  });

  it('identifies the second seal strip on screen where it attributes the opening (I14)', () => {
    const e3 = slice('### 18.3', '### 18.4');
    const twoStrips = e3.indexOf('**dos** tiras de sello con fecha del cuatro de diciembre');
    expect(twoStrips, 'E3 two-strip line').toBeGreaterThan(-1);
    const attribution = e3.indexOf('F. Berrondo');
    expect(attribution, 'E3 must read the rubric of the top strip').toBeGreaterThan(twoStrips);
    expect(e3).not.toContain('Dos sellos, un vale. La segunda apertura fue clandestina.');
    expect(slice('**F8**', '| **F9**')).toContain('rúbrica de Berrondo');
  });

  it('never cashes the relevo plant in a climax datum that does not exist', () => {
    const e1 = slice('### 18.1', '### 18.2');
    const data = [...e1.matchAll(/\*\*(Primera|Segunda|Tercera|Cuarta)\.\*\*([^\n]*)/g)];
    expect(data.length, 'E1 numbered data').toBe(4);
    for (const [, , text] of data) {
      expect(text).not.toMatch(/relevo|cambian de turno/);
    }
    const row = SPEC.split('\n').find((l) => l.startsWith('| «¿Iba a haber policía?»'));
    expect(row, '§21 relevo row').toBeTruthy();
    expect(row).not.toContain('dato tercero');
    expect(slice('**F18**', '### 24.D')).toContain('Nunca se alega en el estrado');
  });

  it('budgets each huacal handling above the duration its witness declares (I26, I27)', () => {
    const declared = SPEC.match(
      /Abrirla toma (\w+) minutos\. Cerrar los cuatro broches y poner la tira, (\w+) minutos y medio/,
    );
    expect(declared, 'Chompiras duration line').toBeTruthy();
    expect([declared![1], declared![2]]).toEqual(['dos', 'dos']);
    const budget = slice('### 24.B', '### 24.C');
    expect(budget).toContain('| 17:04:30–17:07:30 |');
    expect(budget).toContain('| 17:07:30–17:10:30 |');
    expect(budget).not.toContain('| 17:04:30–17:06:30 |');
    const lifts = [...budget.matchAll(/Montacargas de carga/g)].length;
    expect(lifts, 'one approach lift + three circuit lifts').toBe(4);
    expect(budget).toContain('sella el huacal antes de subir el tomo');
  });

  it('gives the luxury copy its own weight instead of the weapon (I28)', () => {
    expect(SPEC).toContain('Dos kilos ochocientos');
    expect(SPEC).not.toContain('con el tomo de 2.8 kg');
    expect(SPEC).not.toContain('primer piso con 2.8 kg');
    expect(SPEC).toContain('3.4 kg');
  });

  it('keeps every §4.2 row in chronological order (I29)', () => {
    const rows = [...slice('### 4.2', '### 4.3').matchAll(/^\| (\d\d):(\d\d)/gm)].map(
      (m) => `${m[1]}:${m[2]}`,
    );
    expect(rows.length).toBeGreaterThan(10);
    for (let i = 1; i < rows.length; i += 1) {
      expect(rows[i] >= rows[i - 1], `row ${rows[i]} after ${rows[i - 1]}`).toBe(true);
    }
  });

  it('declares climax ranuras only for stages that accept that evidence', () => {
    const ranuras = ranuraMap();
    const climaxSection = slice('## 18.', '## 19.');
    const accepted = new Set(
      [...climaxSection.matchAll(/presentTarget: \['(\w+)'\]/g)].map((m) => m[1]),
    );
    expect(accepted.size, 'climax present stages').toBe(4);
    for (const [id, ranura] of ranuras) {
      const climax = ranura.match(/[Cc]límax E(\d)/);
      if (!climax) continue;
      expect(accepted.has(id), `§5 claims ${id} as a climax slot`).toBe(true);
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

  it('describes panel C with the contents of its own case and narrates the legajos by date (I33, I34)', () => {
    const l5 = slice('[LÁMINA assets/plate_cinco_papeles.webp]', '[FIN LÁMINA]');
    expect(l5).toContain('valeriana');
    expect(l5).toContain('molde de cera');
    expect(l5).not.toContain('estanquillo');
    const delegacion = slice('### 12.4', '## 13.');
    expect(delegacion).toContain('valeriana');
    expect(delegacion).not.toContain('nadie identificó');
    expect(delegacion).not.toContain('nunca se identificó');
    const hacienda = delegacion.indexOf('la hacienda');
    const museo = delegacion.indexOf('el museo');
    expect(hacienda, 'delegación mentions the hacienda').toBeGreaterThan(-1);
    expect(museo, 'delegación mentions the museo').toBeGreaterThan(-1);
    expect(
      hacienda < museo,
      'legajos narrados por fecha: hacienda (21 ago) antes del museo (28 ago)',
    ).toBe(true);
    const rowCaso2 = slice('### 4.3', '## 5.')
      .split('\n')
      .find((l) => l.startsWith('| 21 ago |'));
    expect(rowCaso2, '§4.3 Caso 2 row').toBeTruthy();
    expect(rowCaso2).toContain('valeriana');
    expect(rowCaso2).toContain('propio culpable');
    expect(rowCaso2).not.toContain('nunca se identificó');
    const artRow = SPEC.split('\n').find((l) => l.startsWith('| `examine_expediente_serie.webp`'));
    expect(artRow, 'señalamiento 1 art row').toBeTruthy();
    const panelC = artRow!.slice(artRow!.indexOf('**C (21 AGO):**'), artRow!.indexOf('**D (15 SEP):**'));
    expect(panelC).toContain('frasco de vidrio ámbar');
    expect(panelC).toContain('molde de cera');
  });

  it('does not reopen the case-2 buyer as a loose end (I33)', () => {
    const s211 = slice('### 21.1', '## 22.');
    expect(s211).toContain('propio culpable');
    expect(s211).toContain('sin respuesta');
    expect(s211).not.toContain('La identidad del cliente del Caso 2');
    expect(SPEC).toContain('**I33**');
    expect(SPEC).toContain('**I34**');
  });

  it('counts five previous litigations before this court, including Case 2 (I38)', () => {
    expect(SPEC).toContain('sexta vez que esta corte lo ve');
    expect(SPEC).toContain('litigar a esa insignia cinco veces y en las cinco');
    expect(SPEC).toContain('sexta vez que pisa este juzgado');
    expect(SPEC).toContain('sexta vez que ve a Don Ramón');
    expect(SPEC).toContain('lo ha respetado cinco veces');
    // Berrondo's own count is his Aug–Oct vantage and stays at four.
    expect(SPEC).toContain('Lo he visto litigar cuatro veces');
    expect(SPEC).not.toContain('quinta vez que esta corte');
    expect(SPEC).not.toContain('quinta vez que pisa');
  });

  it('anchors Chompiras hiring, overlap and prestige claims on screen (I36)', () => {
    const d3t1 = slice('### 15.2', '### 15.3');
    expect(d3t1).toContain('me escoltó cuando me arrestaron en agosto');
    expect(d3t1).toContain('corría entre el Archivo y lo que cayera hasta noviembre');
    expect(d3t1).not.toContain('primera vez en mi vida que me pagan por cargar');
    expect(d3t1).not.toContain('turno de noche');
    expect(d3t1).not.toContain('costó ocho meses');
    const calderas = slice('### 16.2', '## 17.');
    expect(calderas).toContain('dos noches adentro, y parecieron ocho meses');
    expect(calderas).not.toContain('Yo estuve ocho meses');
    const perfil = SPEC.split('\n').find((l) => l.startsWith('| `perfil_chompiras`'));
    expect(perfil, 'perfil_chompiras row').toBeTruthy();
    expect(perfil).not.toContain('primer trabajo fijo');
    expect(perfil).toContain('seguro y con aguinaldo');
  });

  it('closes the Case 1 bag residue with two bags from one office (I35)', () => {
    const d3t2 = slice('### 15.3', '### 15.4');
    expect(d3t2).toContain('quedó en el patio de carga de ese museo una bolsa con el sello de su fiscalía');
    expect(d3t2).toContain('de ahí salieron las dos');
  });

  it('describes panel E as the telegram its source case actually shows (I37)', () => {
    const artRow = SPEC.split('\n').find((l) => l.startsWith('| `examine_expediente_serie.webp`'));
    const panelE = artRow!.slice(artRow!.indexOf('**E (24 OCT):**'));
    expect(panelE).toContain('telegrama mecanografiado');
    expect(panelE).not.toContain('acta');
    const zona = SPEC.split('\n').find((l) => l.startsWith('| `panel_e` |'));
    expect(zona, 'panel_e zone row').toBeTruthy();
    expect(zona).toContain('Telegrama (24 oct)');
    expect(slice('### 4.3', '## 5.')).toContain('El telegrama de Cuajinais');
  });

  it('keeps failure lines true for every path and free of unanchored facts (I39)', () => {
    expect(SPEC).not.toContain('Estoy haciendo que las antenitas contesten');
    expect(SPEC).not.toContain('Los puso el conserje');
    expect(SPEC).not.toContain('polvo de once años');
    expect(SPEC).toContain('siguiera en ese estante después del golpe');
    expect(SPEC).not.toContain('siguiera arriba después del golpe');
    const climax = slice('## 18.', '## 19.');
    expect(climax).not.toContain('no habilita a nadie a estar en ninguna parte');
    expect(climax).toContain('después de entregar un gafete');
    expect(climax).not.toContain('y son los últimos');
    const descarte = slice('### 20.1', '## 21.');
    expect(descarte).toContain('cinco días de anticipación');
    expect(descarte).not.toContain('tres días de anticipación');
  });

  it('keeps the verification-pass residuals from drifting back', () => {
    const artRow = SPEC.split('\n').find((l) => l.startsWith('| `examine_expediente_serie.webp`'));
    expect(artRow, 'art row').toBeTruthy();
    expect(artRow).not.toContain('etiqueta de botica');
    expect(artRow).toContain('etiqueta manuscrita');
    expect(SPEC).toContain('apareció en el patio de carga del museo el veintiocho de agosto');
    expect(SPEC).not.toContain('cliente misterioso del Caso 2');
    expect(SPEC).toContain('una hora por intervención');
    expect(SPEC).not.toContain('dos veces por frase— aparece');
  });

  it('keeps inherited canon aligned with the source transcripts (pass 19)', () => {
    const relato = slice('### 10.1', '### 10.2');
    expect(relato).toContain('En el estrado me dijo usted que uno estudia el producto');
    expect(relato).toContain('mi producto no eran los libros');
    expect(relato).not.toContain('no había estudiado nada');
    const d3t2 = slice('### 15.3', '### 15.4');
    expect(d3t2).not.toContain('dos tercios del juicio');
    expect(d3t2).toContain('hasta el final del juicio');
    expect(d3t2).not.toContain('Con la mano levantada');
    const libreta = slice('### 14.3', '### 15.2');
    expect(libreta).not.toContain('Se ve en la fotografía');
    expect(libreta).not.toContain('poli» tres veces');
    const d1t2 = slice('### 11.3', '### 11.4');
    expect(d1t2).toContain('Me pasaron a judicial con él');
    const l9 = slice('### 18.6', '### 18.7');
    expect(l9).toContain('que apareció en el patio de carga de un museo');
    expect(l9).not.toContain('hallada en el patio de carga');
    expect(l9).toContain('decomisada en su juicio');
  });

  it('keeps pass-20 residuals anchored and true to the source cases', () => {
    const fiscalia = slice('### 14.2', '### 14.3');
    expect(fiscalia).toContain('más de tres meses cargando una bolsa vacía');
    expect(fiscalia).not.toContain('cuatro meses cargando');
    const apertura = slice('### 15.2', '### 15.3');
    expect(apertura).toContain('más de tres meses cargando');
    expect(apertura).not.toContain('cuatro meses cargando');
    const l5 = slice('[LÁMINA assets/plate_cinco_papeles.webp]', '[FIN LÁMINA]');
    expect(l5).toContain('gasto del culpable');
    expect(l5).not.toContain('para preparar otro delito');
    expect(SPEC).toContain('en agosto, ficha incluida');
    const tomotrece = slice('### 18.3', '### 18.4');
    expect(tomotrece).not.toContain('no pudo preguntárselo');
  });

  it('keeps pass-21 audit row and invariants I40–I54 on the books', () => {
    expect(SPEC).toContain('| 21 | **Re-corrida con subagentes en paralelo');
    for (const id of [
      'I40', 'I41', 'I42', 'I43', 'I44', 'I45', 'I46', 'I47', 'I48', 'I49',
      'I50', 'I51', 'I52', 'I53', 'I54',
    ]) {
      expect(SPEC).toContain(`**${id}**`);
    }
    expect(slice('### 24.E', '## 25.')).toContain('Pasada del 2026-09-18 (lente 21');
  });

  it('reads only the top huacal strip in D3-T1 before E3 argues both (I40)', () => {
    const d3t1 = slice('#### `followUp`: **`huacal_9`**', '#### Contradicción resolutoria');
    expect(d3t1).toContain('tira de hasta arriba');
    expect(d3t1).not.toContain('las dos tiras superiores');
    expect(d3t1).not.toContain('dos tiras superiores');
    const e3 = slice('### 18.3', '### 18.4');
    expect(e3).toContain('**dos** tiras de sello con fecha del cuatro de diciembre');
  });

  it('does not allege the fichero offer in D2 without on-screen support (I41)', () => {
    const d2 = slice('### 13.1', '### 13.2');
    expect(d2).toContain('Venía a declarar en una diligencia de su apelación');
    expect(d2).not.toContain('entregar un fichero');
    const d3open = slice('### 15.1', '### 15.2');
    expect(d3open).toContain('ayer esta corte oyó que ese hombre pidió esta diligencia para su apelación');
    expect(d3open).toContain('qué venía a señalar en ella');
    expect(d3open).not.toContain('tres días sin que nadie le explique');
  });

  it('keeps Berrondo sindicatura dates and alibi stairs coherent (I42, I43)', () => {
    const d2vol = slice('BERRONDO: Fulgencio Berrondo Ontiveros', 'BERRONDO: Protesto decir verdad');
    expect(d2vol).toContain('síndico desde marzo de 1971');
    expect(d2vol).not.toContain('síndico de concursos desde 1963');
    expect(SPEC).toContain('Mi primera sindicatura');
    const d3t3 = slice('### 15.4', '## 16.');
    expect(d3t3).toContain('Es una escalera larga');
    expect(d3t3).not.toContain('cuarenta escalones');
    expect(d3t3).not.toContain('ciento veinte escalones');
  });

  it('keeps Sam weekly and monthly oficio counts compatible (I44)', () => {
    const fiscalia = slice('### 14.2', '### 14.3');
    expect(fiscalia).toContain('ciento cuarenta oficios a la semana');
    expect(fiscalia).not.toContain('ciento veinte oficios a la semana');
    const d3t2 = slice('### 15.3', '### 15.4');
    expect(d3t2).toContain('seiscientos oficios al mes');
  });

  it('counts boiler days from the rupture date, not twice as four (I45)', () => {
    const vestibulo = slice('### 10.2', '### 10.3');
    expect(vestibulo).toContain('desde el tres de diciembre');
    const celdaD4 = slice('### 16.1', '### 16.2');
    expect(celdaD4).toContain('llevaban al máximo desde el tres');
    const d4trial = slice('## 17.', '## 18.');
    expect(d4trial).toContain('los dejaron cuatro días');
    expect(d4trial).not.toMatch(/seis días.*caldera|caldera.*seis días/);
  });

  it('restamps bg after relato and fixes the §7.1 camera rule (I46)', () => {
    expect(slice('### 7.1', '### 7.2')).toContain('re-estampar el `bg`');
    expect(slice('### 7.1', '### 7.2')).toContain('En el estrado');
    const afterRelato = slice('DEFENSA: ...¿Y usted se fue?', '**2. «Enséñeme el acta de detención»**');
    for (const line of afterRelato.split('\n').filter((l) => l.startsWith('DEFENSA:') || l.startsWith('DON RAMÓN:'))) {
      expect(line).toContain('bg: bg_detention');
    }
  });

  it('hands Genoveva vales folder to the secretary before dismissal (I47)', () => {
    const d4t1 = slice('### 17.2', '## 18.');
    const folder = d4t1.indexOf('carpeta de hule');
    const secretary = d4t1.indexOf('SECRETARIO: Recibo la carpeta');
    const dismiss = d4t1.indexOf('queda a disposición de esta corte');
    expect(folder).toBeGreaterThan(-1);
    expect(secretary).toBeGreaterThan(folder);
    expect(dismiss).toBeGreaterThan(secretary);
    expect(slice('### 18.3', '### 18.4')).toContain('carpeta de vales que exhibió la señorita Peñaloza');
  });

  it('orders the forensic photo and surplus tomo in E3 success (I48)', () => {
    const intro = slice('DEFENSA: Y en el suelo, a un metro del cuerpo', 'Bloque mapeado a `ClimaxStage.introDialogue`');
    expect(intro).toContain('otro tomo');
    const e3 = slice('### 18.3', '### 18.4');
    expect(e3).toContain('el tomo que en ella sobra');
    expect(e3).toContain('fotografía pericial del estante');
    expect(e3).toContain('deposita sobre el estrado');
  });

  it('marks Don Ramón for the Monday citatorio and Nicanor for the relevo (I49)', () => {
    const descarte = slice('### 20.1', '## 21.');
    const row3 = descarte.split('\n').find((l) => l.includes('cinco días de anticipación'));
    const row4 = descarte.split('\n').find((l) => l.includes('relevo de custodios'));
    expect(row3, 'row 3').toBeTruthy();
    expect(row4, 'row 4').toBeTruthy();
    expect(row3!.split('|')[2]?.trim()).toBe('✓');
    expect(row4!.split('|')[3]?.trim()).toBe('✓');
    expect(row4!.split('|')[4]?.trim()).toBe('✗');
  });

  it('declares closed EvidenceId, ProfileId and PoseName unions in §25 (I50)', () => {
    const integration = slice('## 25.', '<!-- APPEND-HERE -->');
    expect(integration).toContain('`EvidenceId`');
    expect(integration).toContain('`ProfileId`');
    expect(integration).toContain('`PoseName`');
    expect(integration).toContain('`gavel`');
    expect(integration).toContain('`desk_slam`');
  });

  it('prints all six museum-card lines on panel B art (I51)', () => {
    const artRow = SPEC.split('\n').find((l) => l.startsWith('| `examine_expediente_serie.webp`'));
    expect(artRow, 'art row').toBeTruthy();
    const panelB = artRow!.slice(artRow!.indexOf('**B (28 AGO):**'), artRow!.indexOf('**C (21 AGO):**'));
    expect(panelB).toContain('Chapa puerta de carga');
    expect(panelB).toContain('Malla floja');
    expect(panelB).toContain('clavo en la caseta');
    expect(panelB).toContain('Pastillas de chiquitolina');
    expect(panelB).toContain('Rollo de cámara');
    expect(panelB).toContain('Servicio de cierre incluido. Cinco minutos.');
    expect(panelB).not.toMatch(/«6\. — 5 min\.»/);
  });

  it('keeps perfil_berrondo stage 2 on D2-T2, not GIRO 2 (I52)', () => {
    const row = SPEC.split('\n').find((l) => l.startsWith('| `perfil_berrondo`'));
    expect(row, 'perfil_berrondo').toBeTruthy();
    expect(row).toContain('(2) D2-T2:');
    expect(row).not.toContain('(2) GIRO 2:');
    expect(row).toContain('inspeccionar su huacal');
  });

  it('grounds the actuario row in blocks that actually mention him (I53)', () => {
    const row = SPEC.split('\n').find((l) => l.startsWith('| El actuario habitual'));
    expect(row, '§21 actuario row').toBeTruthy();
    expect(row).toContain('Chimoltrufia nombra a Balbuena');
    expect(row).toContain('`acuse_notificacion`');
    expect(row).toContain('`oficio_diligencia`');
    expect(row).toContain('**D2-T2**');
    expect(row).toContain('**F16**');
    expect(row).not.toContain('cuatro antecedentes en el libro profesional');
  });

  it('fixes Don Ramón at house 72 of the vecindad (lente 22)', () => {
    // The audit log (lentes 19 and 22) quotes the old number on purpose; the script must not.
    const scriptLines = SPEC.split('\n').filter((l) => !/lente 22|Caso 0/.test(l));
    expect(scriptLines.filter((l) => /viv\. 4\.|vivienda 4\b|vivienda cuatro/.test(l))).toEqual([]);
    expect(occurrences('viv. 72.')).toBeGreaterThanOrEqual(4);
    expect(occurrences('vivienda setenta y dos')).toBeGreaterThanOrEqual(3);
    expect(SPEC).toContain('inquilino de la vivienda 72');
  });

  it('scopes the 1971 inventory to the concursal deposit and folds §4.2 into §24 (I54)', () => {
    expect(slice('### 4.2', '### 4.3')).toContain('**Vista derivada**');
    expect(slice('### 4.2', '### 4.3')).not.toMatch(/^\| 16:45 \|/m);
    expect(slice('### 4.2', '### 4.3')).toContain('16:40–16:45');
    const d3t1 = slice('### 15.2', '### 15.3');
    expect(d3t1).toContain('inventario de la masa');
    expect(d3t1).toContain('cuarenta y siete partidas');
    expect(d3t1).not.toMatch(/dentro de ese huacal lo escribió este juzgado/);
  });
});
