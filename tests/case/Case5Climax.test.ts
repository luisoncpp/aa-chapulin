// @Architecture(descriptionShort="Unit tests for Case 5 Spanish five-stage climax", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import type { CaseScript, DialogueLine } from '../../src/types/index.js';

function allClimaxLines(es: CaseScript): DialogueLine[] {
  const c = es.trial.climax;
  const stages = c.stages ?? [];
  return [
    ...c.dialogue,
    ...stages.flatMap((s) => [
      ...(s.failDialogue ?? []),
      ...(s.deflects?.flatMap((d) => d.dialogue) ?? []),
      ...(s.introDialogue ?? []),
      ...s.successDialogue,
      ...(s.pointTarget?.successDialogue ?? []),
      ...(s.pointTarget?.zones.flatMap((z) => z.failureDialogue) ?? [])
    ]),
    ...(c.choices ?? []).flatMap((ch) => [...ch.failDialogue, ...ch.successDialogue]),
    ...c.verdict,
    ...(c.epilogue?.dialogue ?? []),
    ...(c.guiltyDialogue ?? [])
  ];
}

describe('Case 5 climax (Spanish)', () => {
  const es = getCaseScript('es', 'case5') as CaseScript;
  const climax = es.trial.climax;

  it('has five stages, choices after stage 2, and profile-then-credential-then-shelf-then-card-then-machine', () => {
    expect(climax.stages).toHaveLength(5);
    expect(climax.choicesAfterStage).toBe(2);
    expect(climax.stages?.[0].profileTarget).toEqual(['perfil_berrondo']);
    expect(climax.stages?.[1].presentTarget).toEqual(['credencial_sindico']);
    expect(climax.stages?.[2].presentTarget).toEqual(['tomo_caido']);
    expect(climax.stages?.[2].deflects?.[0].evidence).toEqual(['esquina_tarjeta']);
    expect(climax.stages?.[3].presentTarget).toEqual(['ficha_domicilio']);
    expect(climax.stages?.[4].presentTarget).toEqual(['maquina_escribir']);
    expect(climax.stages?.[4].requiredUpdateStage).toEqual({ maquina_escribir: 2 });
  });

  it('keeps DEFENSA on chapulin poses', () => {
    allClimaxLines(es).forEach((line) => {
      if (line.speaker === 'DEFENSA' && line.pose) {
        expect(line.pose.startsWith('chapulin_'), `${line.pose} on DEFENSA`).toBe(true);
      }
      expect(line.pose).not.toBe('donramon_slam');
    });
  });

  it('stamps waiting-room furniture none on every epilogue line and grants ficha_domicilio in the choice', () => {
    expect(climax.epilogue?.bg).toBe('assets/bg_waiting_room.webp');
    climax.epilogue?.dialogue.forEach((line) => {
      expect(line.bg).toBe('assets/bg_waiting_room.webp');
      expect(line.furniture).toBe('none');
    });
    expect(climax.dialogue[0].bgm).toBe('pursuit');
    expect(climax.choices?.[0].correctId).toBe('no_robado');
    const granted = (climax.choices ?? []).flatMap((ch) => ch.successDialogue)
      .some((line) => line.addEvidence === 'ficha_domicilio');
    expect(granted).toBe(true);
  });

  it('keeps stage prompts from naming the answer', () => {
    const prompts = (climax.stages ?? []).map((s) => s.prompt ?? '');
    prompts.forEach((p) => {
      expect(p.toLowerCase()).not.toContain('berrondo');
      expect(p.toLowerCase()).not.toContain('credencial');
      expect(p.toLowerCase()).not.toContain('ficha');
      expect(p.toLowerCase()).not.toContain('máquina');
      expect(p.toLowerCase()).not.toContain('maquina');
    });
  });
});

