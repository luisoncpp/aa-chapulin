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

  it('never uses truth BGM and keeps DEFENSA on chapulin poses', () => {
    allClimaxLines(es).forEach((line) => {
      expect(line.bgm).not.toBe('truth');
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

function sceneLines(script: CaseScript): DialogueLine[] {
  return Object.values(script.investigation).flatMap((scene) => [
    ...scene.intro,
    ...scene.hotspots.flatMap((h) => h.dialogue),
    ...scene.talkOptions.flatMap((o) => o.dialogue)
  ]);
}

function testimonyLines(script: CaseScript): DialogueLine[] {
  const days = [
    script.trial,
    script.adjournment?.trial,
    script.adjournment?.next?.trial,
    script.adjournment?.next?.next?.trial
  ].filter(Boolean);
  return days.flatMap((day) => {
    const lines: DialogueLine[] = [...day!.intro, ...(day!.openingPresent?.successDialogue ?? [])];
    for (const testimony of day!.testimonies) {
      for (const stmt of testimony.statements) {
        lines.push(stmt);
        lines.push(...(stmt.pressText ?? []));
        lines.push(...(stmt.deflect?.dialogue ?? []));
        const rule = stmt.contradiction;
        if (!rule) continue;
        lines.push(...rule.successDialogue);
        lines.push(...(rule.followUp?.successDialogue ?? []));
        lines.push(...(rule.pointTarget?.successDialogue ?? []));
        lines.push(...(rule.pointTarget?.zones.flatMap((z) => z.failureDialogue) ?? []));
      }
    }
    return lines;
  });
}

describe('Case 5 never cues the truth track', () => {
  it.each(['es', 'en'] as const)('%s script has no truth BGM on scenes or lines', (lang) => {
    const script = getCaseScript(lang, 'case5') as CaseScript;
    Object.values(script.investigation).forEach((scene) => {
      expect(scene.bgm).not.toBe('truth');
    });
    [...sceneLines(script), ...testimonyLines(script), ...allClimaxLines(script)].forEach((line) => {
      expect(line.bgm).not.toBe('truth');
    });
  });
});
