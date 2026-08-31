// @Architecture(descriptionShort="Queues dialogue lines and renders speaker staging", type="controller", icon="layers")
/**
 * Dialogue FIFO queue and per-line rendering for [[./GameEngine.ts]].
 */

import type { MidiMusicComposer, SoundEngine } from '../../audio/index.js';
import { i18n } from '../../i18n/index.js';
import type { GameStateManager } from '../../state/index.js';
import type { CaseScript, DialogueLine, EvidenceId, LocationId, SFXName } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import type { InvestigationController } from './InvestigationController.js';
import type { Typewriter } from './Typewriter.js';
import { VisualEffects } from './VisualEffects.js';

export interface DialogueFlowDeps {
  dom: DomElements;
  state: GameStateManager;
  getScript: () => CaseScript;
  soundEngine: SoundEngine;
  midiComposer: MidiMusicComposer;
  typewriter: Typewriter;
  investigation: InvestigationController;
}

export class DialogueFlow {
  private queue: DialogueLine[] = [];
  private onQueueFinish: (() => void) | null = null;

  constructor(private readonly deps: DialogueFlowDeps) {}

  public clear(): void {
    this.queue = [];
    this.onQueueFinish = null;
    this.refreshAdvanceArrow();
  }

  public handleAdvance(): boolean {
    if (this.deps.typewriter.isTyping) {
      this.deps.typewriter.completeImmediately();
      return true;
    }
    if (this.queue.length > 0) {
      this.renderDialogueLine(this.queue.shift()!);
      return true;
    }
    if (!this.onQueueFinish) return false;
    const cb = this.onQueueFinish;
    this.onQueueFinish = null;
    this.refreshAdvanceArrow();
    cb();
    return true;
  }

  public queueDialogue(dialogueArray: DialogueLine[], onComplete: (() => void) | null = null): void {
    this.queue = [...dialogueArray];
    this.onQueueFinish = onComplete;
    if (this.queue.length > 0) {
      this.renderDialogueLine(this.queue.shift()!);
    }
  }

  public renderDialogueLine(line: DialogueLine): void {
    if (!line) return;
    if (line.bg) this.deps.dom.bgEl.style.backgroundImage = `url('${line.bg}')`;
    if (line.bgm) this.deps.midiComposer.playTrack(line.bgm);
    if (line.sfx) this.triggerSFX(line.sfx);
    if (line.cutin) VisualEffects.showCutin(this.deps.dom, line.cutin);
    this.applyLineSpeakerAndPose(line);
    this.grantEvidenceIfPresent(line.addEvidence);
    this.updateEvidenceIfPresent(line.updateEvidence);
    this.unlockLocationIfPresent(line.unlockLocation);
    this.deps.typewriter.start(line.text || '');
    this.refreshAdvanceArrow();
  }

  /**
   * The blinking arrow promises "click for more". It must only show when
   * `handleAdvance` would actually do something: a queued line left, or a
   * pending completion callback. Cross-examination statements are rendered
   * outside the queue, so this hides the arrow there too.
   */
  private refreshAdvanceArrow(): void {
    const canAdvance = this.queue.length > 0 || this.onQueueFinish !== null;
    this.deps.dom.dialogueArrowEl.classList.toggle('hidden', !canAdvance);
  }

  private applyLineSpeakerAndPose(line: DialogueLine): void {
    const isTrial = this.deps.state.mode === 'TRIAL';
    const effectivePose = VisualEffects.resolveEffectivePose(line, isTrial);
    if (effectivePose) {
      this.deps.investigation.currentLocationCharPose = effectivePose;
      VisualEffects.setPose(this.deps.dom.charSpriteEl, effectivePose);
    } else if (line.speaker === 'DEFENSA' || line.speaker === 'NARRADOR') {
      VisualEffects.hideCharacter(this.deps.dom.charSpriteEl);
    }
    VisualEffects.updateStagingForLine(this.deps.dom, line, isTrial);
    this.deps.dom.speakerBoxEl.textContent = line.speaker || '';
  }

  private grantEvidenceIfPresent(evidenceId?: EvidenceId): void {
    if (!evidenceId) return;
    const added = this.deps.state.addEvidence(evidenceId);
    if (!added) return;
    const item = this.deps.state.allEvidence[evidenceId];
    this.showProgressNotification(i18n.t.notifEvidenceAdded(item.name));
  }

  private updateEvidenceIfPresent(evidenceId?: EvidenceId): void {
    if (!evidenceId) return;
    const alreadyHeld = this.deps.state.hasEvidence(evidenceId);
    if (!alreadyHeld) this.grantEvidenceIfPresent(evidenceId);
    const updated = this.deps.state.updateEvidence(evidenceId);
    if (!alreadyHeld || !updated) return;
    const item = this.deps.state.allEvidence[evidenceId];
    this.showProgressNotification(i18n.t.notifEvidenceUpdated(item.name));
  }

  private unlockLocationIfPresent(locationId?: LocationId): void {
    if (!locationId) return;
    const unlocked = this.deps.state.unlockLocation(locationId);
    if (!unlocked) return;
    const scene = this.deps.getScript().investigation[locationId];
    const locName = scene?.name ?? scene?.title ?? locationId;
    this.showProgressNotification(i18n.t.notifLocationUnlocked(locName));
  }

  private showProgressNotification(msg: string): void {
    this.deps.soundEngine.playRealization();
    VisualEffects.showNotification(this.deps.dom.gameNotificationEl, msg);
  }

  private triggerSFX(sfx: SFXName): void {
    this.deps.soundEngine.playSFX(sfx);
    if (sfx === 'gavel' || sfx === 'desk_slam' || sfx === 'damage') {
      VisualEffects.shakeScreen(this.deps.dom.gameScreen, /*durationMs=*/ sfx === 'damage' ? 450 : 300);
    }
    if (sfx === 'realization' || sfx === 'chicharra' || sfx === 'damage') {
      VisualEffects.flashScreen(this.deps.dom.flashEl);
    }
  }
}
