// @Architecture(descriptionShort="Generic case-script traversal for integrity tests", type="test", icon="layers")
import type { CaseId, CaseScript, ClimaxDefinition, ContradictionRule, DialogueLine, PointTargetContradiction, SceneIntro, SceneIntroDefinition, Testimony, TrialDayScript, TrialScript } from '../../src/types/index.js';

/** Yield every dialogue line in an intro definition (plain array or SceneIntro[]). */
function* introLines(def: SceneIntroDefinition): Generator<DialogueLine> {
  for (const entry of def as (DialogueLine | SceneIntro)[]) {
    if ('dialogue' in entry) {
      yield* entry.dialogue;
    } else {
      yield entry as DialogueLine;
    }
  }
}

/** Yield every dialogue line reachable from one testimony (presses, contradicts, deflects, points). */
export function* testimonyLines(testimony: Testimony): Generator<DialogueLine> {
  for (const statement of testimony.statements) {
    if (statement.pressText) yield* statement.pressText;
    const contradiction = statement.contradiction;
    if (contradiction) {
      yield* contradiction.successDialogue;
      if (contradiction.followUp) yield* contradiction.followUp.successDialogue;
      if (contradiction.pointTarget) yield* pointTargetLines(contradiction.pointTarget);
    }
    if (statement.deflect) yield* statement.deflect.dialogue;
    for (const deflect of statement.deflects ?? []) yield* deflect.dialogue;
  }
}

/** Yield the dialogue inside a point-target chain (zones + success lines). */
export function* pointTargetLines(target: NonNullable<Testimony['statements'][number]['contradiction']>['pointTarget']): Generator<DialogueLine> {
  let node = target;
  while (node) {
    for (const zone of node.zones) yield* zone.failureDialogue;
    if (node.successDialogue) yield* node.successDialogue;
    node = node.next;
  }
}

/** Yield every dialogue line of one trial script (day or full trial). */
export function* trialLines(trial: TrialScript | TrialDayScript): Generator<DialogueLine> {
  yield* trial.intro;
  for (const testimony of trial.testimonies) yield* testimonyLines(testimony);
  const opening = trial.openingPresent;
  if (opening) yield* opening.successDialogue;
}

/** Yield every dialogue line of a climax confrontation. */
export function* climaxLines(climax: ClimaxDefinition): Generator<DialogueLine> {
  yield* climax.dialogue;
  yield* climax.verdict;
  if (climax.guiltyDialogue) yield* climax.guiltyDialogue;
  for (const stage of climax.stages ?? []) {
    if (stage.introDialogue) yield* stage.introDialogue;
    if (stage.failDialogue) yield* stage.failDialogue;
    yield* stage.successDialogue;
    if (stage.pointTarget) yield* pointTargetLines(stage.pointTarget);
  }
  for (const choice of climax.choices ?? []) {
    yield* choice.successDialogue;
    yield* choice.failDialogue;
  }
  if (climax.epilogue) yield* climax.epilogue.dialogue;
}

/** Chain over the linked adjournment days. */
export function* adjournmentDays(script: CaseScript): Generator<TrialDayScript> {
  let day = script.adjournment;
  while (day) {
    yield day.trial;
    day = day.next;
  }
}

/** Yield every dialogue line in a full case script. */
export function* scriptLines(script: CaseScript): Generator<DialogueLine> {
  if (script.pressHint) yield* script.pressHint;
  for (const scene of Object.values(script.investigation)) {
    yield* introLines(scene.intro);
    for (const hotspot of scene.hotspots) yield* hotspot.dialogue;
    for (const talk of scene.talkOptions ?? []) yield* talk.dialogue;
  }
  yield* trialLines(script.trial);
  yield* climaxLines(script.trial.climax);
  for (const day of adjournmentDays(script)) yield* trialLines(day);
}

/** All statement ids declared inside a trial or day script. */
export function statementIds(trial: TrialScript | TrialDayScript): Set<string> {
  const ids = new Set<string>();
  for (const testimony of trial.testimonies) {
    for (const statement of testimony.statements) ids.add(statement.id);
  }
  return ids;
}

function* pointTargetChain(target: NonNullable<ContradictionRule['pointTarget']>): Generator<PointTargetContradiction> {
  let node = target;
  while (node) {
    yield node;
    node = node.next;
  }
}

/** Every Present & Point target in a case: contradictions, follow-ups, and climax stages. */
export function* pointTargets(script: CaseScript): Generator<PointTargetContradiction> {
  const days: (TrialScript | TrialDayScript)[] = [script.trial, ...adjournmentDays(script)];
  for (const day of days) {
    for (const testimony of day.testimonies) {
      for (const statement of testimony.statements) {
        const rule = statement.contradiction;
        if (rule?.pointTarget) yield* pointTargetChain(rule.pointTarget);
        if (rule?.followUp?.pointTarget) yield* pointTargetChain(rule.followUp.pointTarget);
      }
    }
  }
  for (const stage of script.trial.climax.stages ?? []) {
    if (stage.pointTarget) yield* pointTargetChain(stage.pointTarget);
  }
}

