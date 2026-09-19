// @Architecture(descriptionShort="Applies incorrect-present penalties and game-over lines", type="util", icon="bolt")
/**
 * Penalty and game-over dialogue for [[./TrialController.ts]].
 */

import type { SoundEngine } from '../../audio/index.js';
import { i18n } from '../../i18n/index.js';
import type { GameStateManager } from '../../state/index.js';
import type { CaseId, DialogueLine, PoseName, TrackName } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import { ModalManager } from './ModalManager.js';
import { VisualEffects } from './VisualEffects.js';

export interface PenaltyHost {
  dom: DomElements;
  state: GameStateManager;
  soundEngine: SoundEngine;
  onQueueDialogue: (dialogue: DialogueLine[], onComplete?: () => void) => void;
  onRestartTrial?: () => void;
  guiltyDialogue?: DialogueLine[];
}

function defensePenaltyPose(caseId: CaseId, kind: 'point' | 'panic'): PoseName {
  if (caseId === 'case5') return kind === 'point' ? 'chapulin_point' : 'chapulin_panic';
  return kind === 'point' ? 'donramon_point' : 'donramon_panic';
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
  const lines: DialogueLine[] = [
    {
      cutin: 'objection_protesto', speaker: 'DEFENSA',
      text: isEn ? 'OBJECTION!' : '¡PROTESTO!', sfx: 'whoosh',
      pose: defensePenaltyPose(deps.state.caseId, /*kind=*/'point')
    },
    { speaker: 'SUPER SAM', text: i18n.t.penaltyProsecutionText, pose: 'supersam_point' },
    { speaker: 'JUEZ', text: i18n.t.penaltyJudgeText, pose: 'judge_gavel', sfx: 'gavel' }
  ];
  if (deps.state.gameOver) lines.push(...gameOverLines(deps));
  deps.onQueueDialogue(lines, /*onComplete*/ onResume);
}

/** Somber cue that replaces the trial loop the moment the health bar empties. */
const GAME_OVER_BGM: TrackName = 'game_over';

/**
 * The guilty verdict must not play over the cross-examination loop, so the first
 * line of any game-over block carries the somber cue. Scripted `guiltyDialogue`
 * keeps its own `bgm` when it declares one.
 */
function withGameOverBgm(lines: DialogueLine[]): DialogueLine[] {
  if (!lines.length || lines[0].bgm) return lines;
  return [{ ...lines[0], bgm: GAME_OVER_BGM }, ...lines.slice(1)];
}

function gameOverLines(deps: PenaltyHost): DialogueLine[] {
  if (deps.guiltyDialogue?.length) return withGameOverBgm(deps.guiltyDialogue);
  return withGameOverBgm([
    { speaker: 'JUEZ', pose: 'judge_gavel', text: i18n.t.gameOverJudgeText, sfx: 'gavel' },
    {
      speaker: 'DEFENSA',
      pose: defensePenaltyPose(deps.state.caseId, /*kind=*/'panic'),
      text: i18n.t.gameOverDefenseText
    }
  ]);
}

export function queuePenaltyOrRestart(deps: PenaltyHost, onContinue: () => void): void {
  if (!deps.state.gameOver) {
    onContinue();
    return;
  }
  queuePenaltyDialogue(deps, /*onResume*/ () => deps.onRestartTrial?.());
}
