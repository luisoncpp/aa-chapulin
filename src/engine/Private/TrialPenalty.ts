// @Architecture(descriptionShort="Applies incorrect-present penalties and game-over lines", type="util", icon="bolt")
/**
 * Penalty and game-over dialogue for [[./TrialController.ts]].
 */

import type { SoundEngine } from '../../audio/index.js';
import { i18n } from '../../i18n/index.js';
import type { GameStateManager } from '../../state/index.js';
import type { CaseScript, DialogueLine, Testimony } from '../../types/index.js';
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
  const roles = resolveCourtPenaltyRoles(deps.script, deps.testimony, deps.state.trialDay);
  const lines: DialogueLine[] = [
    { cutin: 'objection_protesto', speaker: 'DEFENSA', text: isEn ? 'OBJECTION!' : '¡PROTESTO!', sfx: 'whoosh', pose: roles.defensePointPose },
    prosecutionPenaltyLine(roles.prosecutionSpeaker, i18n.t.penaltyProsecutionText, roles.prosecutionPose),
    { speaker: 'JUEZ', text: i18n.t.penaltyJudgeText, pose: 'judge_gavel', sfx: 'gavel' }
  ];
  if (deps.state.gameOver) {
    lines.push(
      { speaker: 'JUEZ', pose: 'judge_gavel', text: i18n.t.gameOverJudgeText, sfx: 'gavel' },
      { speaker: 'DEFENSA', pose: roles.defensePanicPose, text: i18n.t.gameOverDefenseText }
    );
  }
  deps.onQueueDialogue(lines, /*onComplete*/ onResume);
}

function prosecutionPenaltyLine(
  speaker: DialogueLine['speaker'],
  text: string,
  pose: DialogueLine['pose']
): DialogueLine {
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
