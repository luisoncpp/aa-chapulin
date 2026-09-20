import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

const ROOT = process.cwd();

function read(relativePath: string): string {
  return fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
}

describe('act presentation and chronology', () => {
  it('orders the splash buttons by Act without renaming internal cases', () => {
    const html = read('index.html');
    const ids = ['btn-start-case2', 'btn-start-game', 'btn-start-case3', 'btn-start-case4'];
    const positions = ids.map((id) => html.indexOf(`id="${id}"`));

    expect(positions.every((position) => position >= 0)).toBe(true);
    expect(positions).toEqual([...positions].sort((a, b) => a - b));
    expect(html).toContain('ACTO 1: EL JUICIO DEL CHÓMPIRAS');
    expect(html).toContain('ACTO 2: EL ESCUADRÓN COLORADO');
  });

  it('keeps the swapped dates aligned across both case specs and Case 5', () => {
    const case1 = read('docs/specs/case-1-turnabout-red-grasshopper.md');
    const case2 = read('docs/specs/case-2-el-juicio-del-chompiras.md');
    const case5 = read('docs/specs/case-5-el-tomo-trece.md');

    expect(case1).toContain('Cronología del 28 de agosto');
    expect(case2).toContain('Noche del 21 de Agosto');
    expect(case5).toContain('| 28 ago | Caso 1 |');
    expect(case5).toContain('| 21 ago | Caso 2 |');
    expect(case5).toContain('**B (28 AGO):** ficha de cartulina');
    expect(case5).toContain('**C (21 AGO):** un frasco de vidrio ámbar');
  });
});
