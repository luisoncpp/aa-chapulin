// @Architecture(descriptionShort="Regression tests for Case 5 Berrondo courtroom staging", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import type { CaseScript, DialogueLine } from '../../src/types/index.js';

function allTrialLines(script: CaseScript): DialogueLine[] {
  const days = [
    script.trial,
    script.adjournment?.trial,
    script.adjournment?.next?.trial,
    script.adjournment?.next?.next?.trial
  ].filter(Boolean);
  return days.flatMap((day) => {
    const lines: DialogueLine[] = [...day!.intro, ...(day!.openingPresent?.successDialogue ?? [])];
    for (const testimony of day!.testimonies) {
      for (const statement of testimony.statements) {
        lines.push(statement, ...(statement.pressText ?? []));
        lines.push(...(statement.deflect?.dialogue ?? []));
        const rule = statement.contradiction;
        if (!rule) continue;
        lines.push(...rule.successDialogue, ...(rule.followUp?.successDialogue ?? []));
        lines.push(...(rule.pointTarget?.successDialogue ?? []));
        lines.push(...(rule.pointTarget?.zones.flatMap((zone) => zone.failureDialogue) ?? []));
      }
    }
    return lines;
  });
}

function allClimaxLines(script: CaseScript): DialogueLine[] {
  const climax = script.trial.climax;
  return [
    ...climax.dialogue,
    ...(climax.stages ?? []).flatMap((stage) => [
      ...(stage.failDialogue ?? []),
      ...(stage.introDialogue ?? []),
      ...stage.successDialogue,
      ...(stage.pointTarget?.successDialogue ?? []),
      ...(stage.pointTarget?.zones.flatMap((zone) => zone.failureDialogue) ?? [])
    ]),
    ...(climax.choices ?? []).flatMap((choice) => [...choice.failDialogue, ...choice.successDialogue]),
    ...climax.verdict,
    ...(climax.epilogue?.dialogue ?? []),
    ...(climax.guiltyDialogue ?? [])
  ];
}

function lineByText(lines: DialogueLine[], text: string): DialogueLine {
  const line = lines.find((candidate) => candidate.text === text);
  if (!line) throw new Error(`Missing dialogue line: ${text}`);
  return line;
}

describe('Case 5 Berrondo staging', () => {
  it.each(['es', 'en'] as const)('keeps non-testimony Berrondo dialogue at the prosecution table (%s)', (lang) => {
    const script = getCaseScript(lang, 'case5') as CaseScript;
    const trialLines = allTrialLines(script);
    const climaxLines = allClimaxLines(script);
    const tableLines = [
      ...(lang === 'es'
        ? [
            'Es exacto, señor juez. Yo se lo dije al señor fiscal el lunes por la mañana, antes de la primera audiencia.',
            'Consideré que ocultarlo habría sido indigno y que declararlo sería útil. Me pareció que ambas cosas eran obvias.',
            'Señor juez. Con la venia de esta corte y el permiso del señor fiscal.',
            'Llevo dos días oyendo a la defensa rodear mi nombre sin pronunciarlo, y eso es malo para todos: para ella, para la corte y para mí.',
            'Solicito rendir declaración voluntaria. Renuncio por este acto a mi carácter de coadyuvante mientras declare.',
            'Todavía no, señor juez. Prefiero contestar antes que ser contestado.',
            'Con mucho gusto, señor juez. Y le agradezco que me lo ordene: así no parece que huyo.',
            'Lo de la rúbrica estuvo muy bien encontrado. Y lo del sello del tomo, mejor.',
            'Si alguna vez quiere usted ejercer de verdad, hable conmigo. Lo digo en serio.',
            'Señor juez, con la venia: eso es exacto y yo mismo lo declaré ayer.',
            'No he ocultado nunca ninguna de esas dos cosas, porque las dos son perfectamente legales.'
          ]
        : [
            'That is exact, Your Honor. I told the prosecutor Monday morning, before the first hearing.',
            'I considered that hiding it would have been unworthy and that declaring it would be useful. Both seemed obvious to me.',
            "Your Honor. With this court's leave and the prosecutor's permission.",
            'I have spent two days hearing the defense circle my name without saying it, and that is bad for everyone: for her, for the court, and for me.',
            'I request to give voluntary testimony. By this act I waive my status as prosecution co-counsel while I testify.',
            'Not yet, Your Honor. I prefer to answer before I am answered.',
            'With pleasure, Your Honor. And thank you for ordering it: this way it does not look like I am running.',
            'The rubric was very well found. And the volume stamp, better.',
            'If you ever want to practice for real, speak with me. I mean it.',
            'Your Honor, with permission: that is exact, and I said so myself yesterday.',
            'I have never hidden either of those things, because both are perfectly legal.'
          ])
    ];
    for (const text of tableLines) {
      expect(lineByText(trialLines, text).bg).toBe('assets/bg_courtroom.webp');
    }
    for (const line of climaxLines.filter((candidate) => candidate.speaker === 'BERRONDO')) {
      expect(line.bg, line.text).toBe('assets/bg_courtroom.webp');
    }
  });

  it.each(['es', 'en'] as const)('leaves formal Berrondo testimony on the witness stand (%s)', (lang) => {
    const script = getCaseScript(lang, 'case5') as CaseScript;
    const witnessTexts = lang === 'es'
      ? [
          'Soy síndico de la quiebra 114 diagonal 1971, Enciclopedias El Saber Universal, sociedad anónima, desde el 9 de marzo de ese año.',
          'Comparezco en calidad de investigado, por decisión de esta corte, y no me opongo a ella.'
        ]
      : [
          'I am trustee in bankruptcy 114 diagonal 1971, Enciclopedias El Saber Universal, corporation, since March ninth of that year.',
          'I appear as a person under investigation, by order of this court, and I do not oppose it.'
        ];
    for (const text of witnessTexts) {
      expect(lineByText(allTrialLines(script), text).bg).toBeUndefined();
    }
  });
});
