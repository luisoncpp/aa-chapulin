// @Architecture(descriptionShort="Finds point targets across trial days and climax stages")
import type { CaseScript, PointTargetContradiction, TrialDayScript } from '../../types/index.js';
export function findPointTarget(script: CaseScript, evidenceId: string, activeId?: string): PointTargetContradiction | null {
  const testimonyTargets = trialDays(script).flatMap((day) => [
    ...day.testimonies, day.testimony1, day.testimony2
  ].filter((testimony): testimony is NonNullable<typeof testimony> => Boolean(testimony)))
    .flatMap(pointTargetsInTestimony);
  const climaxTargets = script.trial.climax.stages?.flatMap((stage) => stage.pointTarget ? [stage.pointTarget] : []) ?? [];
  return [...testimonyTargets, ...climaxTargets]
    .flatMap(pointTargetChain)
    .find((target) => activeId ? target.id === activeId : target.targetEvidenceId === evidenceId) ?? null;
}

function trialDays(script: CaseScript): TrialDayScript[] {
  const days: TrialDayScript[] = [script.trial];
  let adjournment = script.adjournment;
  while (adjournment) {
    days.push(adjournment.trial);
    adjournment = adjournment.next;
  }
  return days;
}

function pointTargetChain(target: PointTargetContradiction): PointTargetContradiction[] {
  return target.next ? [target, ...pointTargetChain(target.next)] : [target];
}

function pointTargetsInTestimony(
  testimony: NonNullable<CaseScript['trial']['testimonies'][number]>
): PointTargetContradiction[] {
  return testimony.statements.flatMap((statement) => [
    ...pointTargetsInRule(statement.contradiction),
    ...pointTargetsInRule(statement.contradiction?.followUp)
  ]);
}

function pointTargetsInRule(
  rule: { pointTarget?: PointTargetContradiction } | undefined
): PointTargetContradiction[] {
  return rule?.pointTarget ? [rule.pointTarget] : [];
}
