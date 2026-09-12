// @Architecture(descriptionShort="Case 0 stolen collection file terminology guard", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import { getEvidenceCatalog } from '../../src/state/index.js';
import type { CaseScript, DialogueLine } from '../../src/types/index.js';

// The stolen item is an accordion file (cartapacio de fuelle), not a second
// briefcase: a hard-shell attaché cannot nest inside Casimiro's sample case.
const BRIEFCASE_WORDS = {
  es: ['maletín de cobranza', 'maletin de cobranza', 'maletín del cobrador'],
  en: ['rent collector’s briefcase', "rent collector's briefcase", 'collector’s briefcase', 'rent briefcase']
};

const FILE_WORD = { es: 'cartapacio', en: 'file' };

function allLines(script: CaseScript): DialogueLine[] {
  const lines: DialogueLine[] = [
    ...script.trial.intro,
    ...(script.trial.openingPresent?.successDialogue ?? []),
    ...script.trial.climax.dialogue,
    ...script.trial.climax.verdict,
    ...(script.trial.climax.epilogue?.dialogue ?? [])
  ];
  for (const testimony of script.trial.testimonies) {
    for (const statement of testimony.statements) {
      lines.push({ speaker: statement.speaker, text: statement.text });
      lines.push(...(statement.pressText ?? []));
      lines.push(...(statement.contradiction?.successDialogue ?? []));
      lines.push(...(statement.contradiction?.followUp?.successDialogue ?? []));
    }
  }
  for (const stage of script.trial.climax.stages ?? []) lines.push(...stage.successDialogue);
  return lines;
}

describe('Case 0 — the stolen collection file', () => {
  it('never calls the stolen item a briefcase in either language', () => {
    for (const lang of ['es', 'en'] as const) {
      const texts = allLines(getCaseScript(lang, 'case0')).map((line) => line.text.toLowerCase());
      const offenders = texts.filter((text) =>
        BRIEFCASE_WORDS[lang].some((word) => text.includes(word.toLowerCase()))
      );

      expect(offenders).toEqual([]);
    }
  });

  it('names the stolen item an accordion file in both court record catalogs', () => {
    for (const lang of ['es', 'en'] as const) {
      const item = getEvidenceCatalog(lang, 'case0').maletin_cobranza;

      expect(item.name.toLowerCase()).toContain(FILE_WORD[lang]);
      expect(item.name.toLowerCase()).not.toContain(lang === 'es' ? 'maletín' : 'briefcase');
      expect(item.desc.toLowerCase()).not.toContain(lang === 'es' ? 'maletín de' : 'briefcase');
    }
  });

  it('keeps the rent list inside the stolen file so the discovery identifies it', () => {
    for (const lang of ['es', 'en'] as const) {
      const desc = getEvidenceCatalog(lang, 'case0').maletin_cobranza.desc.toLowerCase();

      expect(desc).toContain(lang === 'es' ? 'lista de rentas' : 'rent list');
    }
  });

  it('explains why the culprit kept the file instead of dumping it overnight', () => {
    for (const lang of ['es', 'en'] as const) {
      const followUp = getCaseScript(lang, 'case0').trial.testimonies[2]
        .statements[1].contradiction!.followUp!.successDialogue;
      const motive = followUp.map((line) => line.text.toLowerCase()).join(' ');

      expect(motive).toContain(lang === 'es' ? 'lista' : 'list');
      expect(motive).toContain(lang === 'es' ? 'efectivo' : 'cash');
      expect(motive).toContain(lang === 'es' ? 'catálogo' : 'catalogue');
    }
  });

  it('reveals the folded file among the sample volumes when the bailiff opens the case', () => {
    for (const lang of ['es', 'en'] as const) {
      const success = getCaseScript(lang, 'case0').trial.testimonies[1]
        .statements[1].contradiction!.successDialogue;
      const discovery = success.find((line) => line.addEvidence === 'maletin_cobranza');

      expect(discovery?.text.toLowerCase()).toContain(FILE_WORD[lang]);
      expect(discovery?.text.toLowerCase()).toContain(lang === 'es' ? 'tomos' : 'volumes');
    }
  });
});
