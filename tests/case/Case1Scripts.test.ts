// @Architecture(descriptionShort="Case 1 script integrity: present slots, gating and chains", type="test", icon="layers")
/**
 * Spec §20.8 invariants for the Case 1 rewrite.
 */
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import { getEvidenceCatalog, getProfileCatalog } from '../../src/state/index.js';
import type {
  CaseScript, DialogueLine, EvidenceId, InvestigationScene, Testimony, TrialDayScript
} from '../../src/types/index.js';

const es = getCaseScript('es', 'case1');
const en = getCaseScript('en', 'case1');

function trialDays(script: CaseScript): TrialDayScript[] {
  return script.adjournment ? [script.trial, script.adjournment.trial] : [script.trial];
}

function allTestimonies(script: CaseScript): Testimony[] {
  return trialDays(script).flatMap((day) => day.testimonies);
}

/** Every id that can be presented anywhere in the case. */
function presentableEvidence(script: CaseScript): Set<EvidenceId> {
  const ids = new Set<EvidenceId>();
  const add = (list?: EvidenceId[]) => list?.forEach((id) => ids.add(id));
  for (const day of trialDays(script)) add(day.openingPresent?.evidence);
  for (const testimony of allTestimonies(script)) {
    for (const statement of testimony.statements) {
      add(statement.contradiction?.evidence);
      add(statement.contradiction?.followUp?.evidence);
    }
  }
  for (const stage of script.trial.climax.stages ?? []) add(stage.presentTarget);
  return ids;
}

function sceneLines(scene: InvestigationScene): DialogueLine[] {
  const intro = Array.isArray(scene.intro) ? scene.intro : [];
  const introLines = intro.flatMap((entry) =>
    'dialogue' in entry ? (entry.dialogue as DialogueLine[]) : [entry as DialogueLine]
  );
  return [
    ...introLines,
    ...scene.hotspots.flatMap((h) => h.dialogue),
    ...scene.talkOptions.flatMap((t) => t.dialogue)
  ];
}

describe('Case 1 script integrity', () => {
  // `insignia_abogado` is a starting inventory fixture: only the Case 0 tutorial
  // asks for it, so Case 1 carries it without a present slot.
  it('gives every Court Record entry at least one present slot', () => {
    const catalog = getEvidenceCatalog('es', 'case1');
    const presentable = presentableEvidence(es);
    const ids = (Object.keys(catalog) as EvidenceId[]).filter((id) => id !== 'insignia_abogado');
    for (const id of ids) {
      expect(presentable.has(id), `${id} has no present slot`).toBe(true);
    }
  });

  it('never asks for the attorney badge again after the tutorial', () => {
    expect(es.trial.openingPresent).toBeUndefined();
    expect(en.trial.openingPresent).toBeUndefined();
  });

  it('keeps the day 2 person request free of redundant tab instructions', () => {
    for (const script of [es, en]) {
      expect(script.adjournment?.trial.intro).not.toContainEqual(
        expect.objectContaining({ speaker: 'MODO TUTORIAL' })
      );
      expect(script.adjournment?.trial.intro.map((line) => line.text)).not.toContain(
        expect.stringMatching(/(?:cámbiese|switch to).*(?:PERSONAS|PROFILES)/i)
      );
    }
  });

  it('points the only unlockedBy statement at a pressable statement', () => {
    const unlocked = allTestimonies(es).flatMap((t) => t.statements.filter((s) => s.unlockedBy));
    expect(unlocked).toHaveLength(1);
    const [statement] = unlocked;
    const owner = allTestimonies(es)
      .flatMap((t) => t.statements)
      .find((s) => s.id === statement.unlockedBy);
    expect(owner?.pressText?.length).toBeGreaterThan(0);
  });

  it('closes each day at a location that hands over a required item', () => {
    const clinicDay1 = sceneLines(es.investigation.clinica).map((l) => l.addEvidence);
    expect(es.requiredEvidence.some((id) => clinicDay1.includes(id))).toBe(true);

    const clinicDay2 = sceneLines(es.investigation.clinica_d2).map((l) => l.addEvidence);
    const day2Required = es.adjournment!.requiredEvidence;
    expect(day2Required.some((id) => clinicDay2.includes(id))).toBe(true);
  });

  it('only unlocks the loading yard when the recess starts', () => {
    expect(es.adjournment?.unlockLocations).toEqual(['patio_carga']);
    expect(es.adjournment?.next).toBeUndefined();
  });

  it('hands every required item out somewhere in the investigation', () => {
    const granted = new Set(
      Object.values(es.investigation).flatMap(sceneLines).map((l) => l.addEvidence)
    );
    for (const id of [...es.requiredEvidence, ...es.adjournment!.requiredEvidence]) {
      expect(granted.has(id), `${id} is never granted`).toBe(true);
    }
  });

  it('keeps evidence description stages within their catalogue budget', () => {
    const catalog = getEvidenceCatalog('es', 'case1');
    const counts = new Map<EvidenceId, number>();
    const bump = (id?: EvidenceId) => {
      if (id) counts.set(id, (counts.get(id) ?? 0) + 1);
    };
    Object.values(es.investigation).flatMap(sceneLines).forEach((l) => bump(l.updateEvidence));
    for (const testimony of allTestimonies(es)) {
      for (const statement of testimony.statements) {
        statement.contradiction?.successDialogue.forEach((l) => bump(l.updateEvidence));
        statement.contradiction?.followUp?.successDialogue.forEach((l) => bump(l.updateEvidence));
      }
    }
    expect(counts.get('informe_medico')).toBe(2);
    expect(counts.get('parte_detencion')).toBe(1);
    expect(counts.get('foto_crimen')).toBe(1);
    for (const [id, count] of counts) {
      expect(count, `${id} updates past its last stage`).toBeLessThanOrEqual(
        catalog[id].updates?.length ?? 0
      );
    }
  });

  it('declares the seven profiles and hands each of them out in the script', () => {
    const catalog = getProfileCatalog('es', 'case1');
    expect(Object.keys(catalog)).toHaveLength(7);
    expect(es.debugProfiles).toHaveLength(7);

    const investigationLines = Object.values(es.investigation).flatMap(sceneLines);
    const trialLines = trialDays(es).flatMap((day) => [
      ...day.intro,
      ...(day.openingPresent?.successDialogue ?? []),
      ...day.testimonies.flatMap((t) =>
        t.statements.flatMap((s) => [
          ...(s.pressText ?? []),
          ...(s.contradiction?.successDialogue ?? []),
          ...(s.contradiction?.followUp?.successDialogue ?? [])
        ])
      )
    ]);
    const granted = new Set([...investigationLines, ...trialLines].map((l) => l.addProfile));
    for (const id of Object.keys(catalog)) {
      expect(granted.has(id as never), `${id} is never added`).toBe(true);
    }
  });

  it('asks for a person in exactly two slots', () => {
    const openingProfiles = trialDays(es)
      .map((day) => day.openingPresent?.profileTarget)
      .filter(Boolean);
    const stageProfiles = (es.trial.climax.stages ?? [])
      .map((stage) => stage.profileTarget)
      .filter(Boolean);
    expect(openingProfiles).toEqual([['perfil_almanegra']]);
    expect(stageProfiles).toEqual([['perfil_tripaseca']]);
  });

  it('mirrors the Spanish structure in English without leaking Spanish scene text', () => {
    expect(Object.keys(en.investigation)).toEqual(Object.keys(es.investigation));
    expect(allTestimonies(en).map((t) => t.statements.length)).toEqual(
      allTestimonies(es).map((t) => t.statements.length)
    );
    for (const loc of Object.keys(es.investigation)) {
      expect(en.investigation[loc].intro).not.toBe(es.investigation[loc].intro);
    }
  });

  it('starts every press response with the Hold It cut-in in both languages', () => {
    for (const script of [es, en]) {
      const missingCutins = allTestimonies(script)
        .flatMap((testimony) => testimony.statements)
        .map((statement) => statement.pressText?.[0])
        .filter((line) => line && line.cutin !== 'objection_un_momento')
        .map((line) => line!.text);

      expect(missingCutins).toEqual([]);
    }
  });

  it('switches to objection and turnabout music at contradiction reveals', () => {
    for (const script of [es, en]) {
      const transitions = allTestimonies(script).flatMap((testimony) =>
        testimony.statements.flatMap((statement) => {
          const contradiction = statement.contradiction;
          if (!contradiction) return [];
          return [
            ['objection', contradiction.successDialogue[0]?.bgm],
            ...(contradiction.followUp
              ? [['pursuit', contradiction.followUp.successDialogue[0]?.bgm]]
              : [])
          ];
        })
      );

      expect(transitions).toEqual(transitions.map(([expected]) => [expected, expected]));
    }
  });

  it("keeps the watchman's jargon identical across notebook, contradiction and card", () => {
    const notebook = getEvidenceCatalog('en', 'case1').bitacora_ronda.desc;
    expect(notebook).toContain('the forward hold');
    expect(notebook).toContain('the after hold');

    const contradiction = en.adjournment!.trial.testimonies[0].statements[0]
      .contradiction!.successDialogue.map((l) => l.text).join(' ');
    expect(contradiction).toContain('the forward hold');
    expect(contradiction).toContain('the after hold');

    const card = (en.trial.climax.stages ?? []).at(-1)!.successDialogue.map((l) => l.text).join(' ');
    expect(card).toContain('the forward hold');
    expect(card).toContain('the after hold');
  });

  it('enforces courtroom BGM pacing: suspense for climax opening, no trial during verdict, trial on witness calls', () => {
    for (const script of [es, en]) {
      expect(script.trial.climax.dialogue[0].bgm).toBe('suspense');
      const verdictTrial = script.trial.climax.verdict.filter((l) => l.bgm === 'trial');
      expect(verdictTrial).toEqual([]);

      const testimonies = allTestimonies(script);
      const t1FollowUp = testimonies[0].statements[3].contradiction!.followUp!.successDialogue;
      const t1Call = t1FollowUp.find((l) => l.text.includes('Fiscalía') || l.text.includes('Prosecution'));
      expect(t1Call?.bgm).toBe('trial');

      const t3FollowUp = testimonies[2].statements[0].contradiction!.followUp!.successDialogue;
      const t3Call = t3FollowUp.find((l) => l.text.includes('vuelve a llamar') || l.text.includes('recalls the witness'));
      expect(t3Call?.bgm).toBe('trial');

      const t4FollowUp = testimonies[3].statements[2].contradiction!.followUp!.successDialogue;
      const t4Call = t4FollowUp.find((l) => l.text.includes('tercera vez') || l.text.includes('third time'));
      expect(t4Call?.bgm).toBe('trial');
    }
  });
});
