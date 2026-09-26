// @Architecture(descriptionShort="Applies incorrect-present penalties and game-over lines", type="util", icon="bolt")
/**
 * Penalty and game-over dialogue for [[./TrialController.ts]].
 */

import type { SoundEngine } from '../../audio/index.js';
import { i18n } from '../../i18n/index.js';
import type { GameStateManager } from '../../state/index.js';
import type { CaseScript, DialogueLine, Testimony, TrackName } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import { resolveCourtPenaltyRoles } from './CourtPenaltyRoles.js';
import { ModalManager } from './ModalManager.js';
import { VisualEffects } from './VisualEffects.js';

export interface PenaltyHost {
  dom: DomElements;
  state: GameStateManager;
  soundEngine: SoundEngine;
  onQueueDialogue: (dialogue: DialogueLine[], onComplete?: () => void) => void;
  onRestartTrial?: () => void;
  guiltyDialogue?: DialogueLine[];
  script?: CaseScript;
  testimony?: Testimony | null;
}

export function applyPenaltyEffects(deps: PenaltyHost): void {
  deps.state.takePenalty();
  ModalManager.updateHealthUI(deps.dom.healthBarEl, deps.state.health, deps.state.maxHealth);
  deps.soundEngine.playDamage();
  VisualEffects.shakeScreen(deps.dom.gameScreen, /*durationMs=*/ 450);
  VisualEffects.flashScreen(deps.dom.flashEl);
}

export function queuePenaltyDialogue(deps: PenaltyHost, onResume: () => void): void {
  const isEn = i18n.getLanguage() === 'en';
  const roles = resolveCourtPenaltyRoles({
    script: deps.script,
    testimony: deps.testimony,
    trialDay: deps.state.trialDay,
    samRecused: Boolean(deps.state.flags.case5_super_sam_recused)
  });
  if (deps.state.caseId === 'case5' && !deps.script?.defensePointPose) {
    roles.defensePointPose = 'chapulin_point';
    roles.defensePanicPose = 'chapulin_panic';
  }
  const lines: DialogueLine[] = [
    { cutin: 'objection_protesto', speaker: 'DEFENSA', text: isEn ? 'OBJECTION!' : '¡PROTESTO!', sfx: 'whoosh', pose: roles.defensePointPose },
    prosecutionPenaltyLine(roles.prosecutionSpeaker, i18n.t.penaltySecretaryText, roles.prosecutionPose),
    { speaker: 'JUEZ', text: i18n.t.penaltyJudgeText, pose: 'judge_gavel', sfx: 'gavel' }
  ];
  if (deps.state.gameOver) lines.push(...gameOverLines(deps, roles.defensePanicPose));
  deps.onQueueDialogue(lines, /*onComplete*/ onResume);
}

/** Somber cue that replaces the trial loop the moment the health bar empties. */
const GAME_OVER_BGM: TrackName = 'game_over';

function withGameOverBgm(lines: DialogueLine[]): DialogueLine[] {
  if (!lines.length || lines[0].bgm) return lines;
  return [{ ...lines[0], bgm: GAME_OVER_BGM }, ...lines.slice(1)];
}

function gameOverLines(deps: PenaltyHost, defensePanicPose: DialogueLine['pose']): DialogueLine[] {
  if (deps.guiltyDialogue?.length) return withGameOverBgm(deps.guiltyDialogue);
  return withGameOverBgm([
    { speaker: 'JUEZ', pose: 'judge_gavel', text: i18n.t.gameOverJudgeText, sfx: 'gavel' },
    { speaker: 'DEFENSA', pose: defensePanicPose, text: i18n.t.gameOverDefenseText }
  ]);
}

function prosecutionPenaltyLine(
  speaker: DialogueLine['speaker'],
  text: string,
  pose: DialogueLine['pose']
): DialogueLine {
  if (speaker === 'SECRETARIO') {
    return { speaker, text, pose: pose ?? 'secretario_leyendo', bg: 'assets/bg_courtroom.webp' };
  }
  if (pose) return { speaker, text, pose };
  return { speaker, text };
}

export function queuePenaltyOrRestart(deps: PenaltyHost, onContinue: () => void): void {
  if (!deps.state.gameOver) {
    onContinue();
    return;
  }
  queuePenaltyDialogue(deps, /*onResume*/ () => deps.onRestartTrial?.());
}
