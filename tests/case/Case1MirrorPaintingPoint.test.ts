// @Architecture(descriptionShort="Pins Case 1 mirror-photo painting point sequence", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';

function mirrorPhotoRule(language: 'es' | 'en') {
  const script = getCaseScript(language, 'case1');
  const testimony = script.adjournment!.trial.testimonies.at(-1)!;
  return testimony.statements.find((statement) => statement.id === 'c1_d2t3_3')!.contradiction!;
}

describe('Case 1 mirror photo painting point', () => {
  it('asks for the painting after Super Sam challenges the mirror explanation', () => {
    for (const language of ['es', 'en'] as const) {
      const rule = mirrorPhotoRule(language);
      const firstPoint = rule.pointTarget!;
      const secondPoint = firstPoint.next!;
      const bridgeText = firstPoint.successDialogue!.map((line) => line.text).join(' ');

      expect(firstPoint.zones.find((zone) => zone.isCorrect)?.id).toBe('emblema_pecho');
      expect(bridgeText).toMatch(language === 'es' ? /negativo.*pru[eé]b/i : /negative.*prove/i);
      expect(secondPoint.zones.find((zone) => zone.isCorrect)).toEqual(
        expect.objectContaining({ id: 'pintura', bounds: [61, 18, 81, 41] })
      );
      expect(secondPoint.promptQuestion).toMatch(language === 'es' ? /espejo/i : /mirror/i);
    }
  });

  it('keeps both languages on the same painting geometry and removes the false wall claim', () => {
    const spanish = mirrorPhotoRule('es');
    const english = mirrorPhotoRule('en');

    expect(english.pointTarget!.next!.zones.map((zone) => zone.bounds))
      .toEqual(spanish.pointTarget!.next!.zones.map((zone) => zone.bounds));
    expect(spanish.successDialogue.map((line) => line.text).join(' ')).not.toContain('detrás hay una pared');
    expect(english.successDialogue.map((line) => line.text).join(' ')).not.toContain('behind it there is a wall');
  });
});
