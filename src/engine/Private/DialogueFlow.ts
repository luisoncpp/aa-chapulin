// @Architecture(descriptionShort="Queues dialogue lines and renders speaker staging", type="controller", icon="layers")
/**
 * Dialogue FIFO queue and per-line rendering for [[./GameEngine.ts]].
 */

import type { MidiMusicComposer, SoundEngine } from '../../audio/index.js';
import type { GameStateManager } from '../../state/index.js';
import type {
  CaseScript, DialogueContinuation, DialogueSnapshot, DialogueLine, SFXName
} from '../../types/index.js';
import type { DialogueHistory, HistoryEntry } from './DialogueHistory.js';
import type { DomElements } from './DomElements.js';
import type { InvestigationController } from './InvestigationController.js';
import type { Typewriter } from './Typewriter.js';
import { RecordNoticeQueue } from './RecordNoticeQueue.js';
import { presentDialogueVisuals } from './StageCommit.js';
import { setStagingCaseId } from './TrialCaseStaging.js';
import { VisualEffects } from './VisualEffects.js';
import { DialogueProgress } from './DialogueProgress.js';
import { TutorialPresentation } from './TutorialPresentation.js';

export interface DialogueFlowDeps {
  dom: DomElements;
  state: GameStateManager;
  getScript: () => CaseScript;
  soundEngine: SoundEngine;
  midiComposer: MidiMusicComposer;
  typewriter: Typewriter;
  investigation: InvestigationController;
  history: DialogueHistory;
}

export class DialogueFlow {
  private queue: DialogueLine[] = [];
  private onQueueFinish: (() => void) | null = null;
  private current: DialogueLine | null = null;
  private continuation: DialogueContinuation = { kind: 'none' };
  private queued = false;
  private readonly notices: RecordNoticeQueue;
  private readonly progress: DialogueProgress;
  private readonly tutorial: TutorialPresentation;

  constructor(private readonly deps: DialogueFlowDeps) {
    this.notices = new RecordNoticeQueue(deps.dom, deps.soundEngine);
    this.progress = new DialogueProgress(deps, this.notices);
    this.tutorial = new TutorialPresentation(deps.dom);
  }

  /** Clears the pending queue only; the message history survives queue resets. */
  public clear(): void {
    this.deps.typewriter.stop();
    this.current = null;
    this.queued = false;
    this.queue = [];
    this.onQueueFinish = null;
    this.notices.clear();
    this.tutorial.clear();
    this.refreshAdvanceArrow();
  }

  /** Order: finish typing, then the line's record notices, then the next line or callback. */
  public handleAdvance(): boolean {
    if (this.deps.typewriter.isTyping) {
      this.deps.typewriter.completeImmediately();
      return true;
    }
    this.tutorial.clear();
    if (this.notices.advance()) {
      this.refreshAdvanceArrow();
      return true;
    }
    if (this.queue.length > 0) {
      this.renderQueuedLine(this.queue.shift()!);
      return true;
    }
    return this.finishQueue();
  }

  private finishQueue(): boolean {
    this.queued = ['celebrate', 'complete', 'courtroom'].includes(this.continuation.kind);
    const cb = this.onQueueFinish;
    this.onQueueFinish = null;
    this.refreshAdvanceArrow();
    cb?.();
    return cb !== null;
  }

  public queueDialogue(dialogueArray: DialogueLine[], onComplete: (() => void) | null = null,
    continuation: DialogueContinuation = { kind: 'none' }): void {
    this.continuation = continuation;
    this.queued = dialogueArray.length > 0;
    this.queue = [...dialogueArray];
    this.onQueueFinish = onComplete;
    if (this.queue.length > 0) {
      this.renderQueuedLine(this.queue.shift()!);
    }
  }

  public snapshot(): DialogueSnapshot | undefined {
    if (!this.queued || !this.current) return undefined;
    const bg = this.deps.dom.bgEl.style.backgroundImage.match(/url\(["']?(.*?)["']?\)/)?.[1];
    return { current: { ...this.current, bg: this.current.bg ?? bg,
      bgm: this.deps.midiComposer.currentTrack ?? 'silence' }, remaining: [...this.queue],
      next: this.continuation, notices: this.notices.snapshot() };
  }

  public restore(snapshot: DialogueSnapshot, onComplete: () => void): void {
    this.clear();
    this.queue = [...snapshot.remaining];
    this.onQueueFinish = onComplete;
    this.continuation = snapshot.next;
    this.renderDialogueLine(snapshot.current, /*restoring=*/ true);
    this.queued = true;
    this.notices.restore(snapshot.notices);
  }

  public clearHistory(): void {
    this.deps.history.clear();
  }

  public getHistory(): readonly HistoryEntry[] {
    return this.deps.history.entries();
  }

  /** Records all displayed lines, including statements that bypass the queue. */
  public renderDialogueLine(line: DialogueLine, restoring = false): void {
    if (!line) return;
    this.queued = false;
    this.current = line;
    this.deps.history.record(line);
    const isTutorial = this.tutorial.render(line, this.deps.state.caseId);
    if (line.bgm) this.deps.midiComposer.playCue(line.bgm);
    if (line.sfx && !restoring) this.triggerSFX(line.sfx);
    if (line.cutin && !restoring) VisualEffects.showCutin(this.deps.dom, line.cutin);
    if (line.confetti) VisualEffects.triggerConfetti(this.deps.dom.confettiContainerEl);
    this.applyLineSpeakerAndPose(isTutorial ? { ...line, pose: undefined } : line);
    if (!restoring) this.progress.apply(line);
    if (line.instant || isTutorial) {
      this.deps.typewriter.showImmediately(line.text || '');
    } else {
      this.deps.typewriter.start(line.text || '');
    }
    this.refreshAdvanceArrow();
  }

  private renderQueuedLine(line: DialogueLine): void {
    this.renderDialogueLine(line);
    this.queued = true;
  }

  /** Shows the advance promise only while a line, callback, or notice remains. */
  private refreshAdvanceArrow(): void {
    const canAdvance = this.queue.length > 0 || this.onQueueFinish !== null || this.notices.hasPending;
    this.deps.dom.dialogueArrowEl.classList.toggle('hidden', !canAdvance);
  }

  private applyLineSpeakerAndPose(line: DialogueLine): void {
    setStagingCaseId(this.deps.state.caseId, this.deps.state.trialDay);
    const isTrial = this.deps.state.mode === 'TRIAL';
    const effectivePose = VisualEffects.resolveEffectivePose(line, isTrial);
    if (effectivePose) {
      this.deps.investigation.currentLocationCharPose = effectivePose;
    }
    presentDialogueVisuals(this.deps.dom, line, /*isTrialMode=*/ isTrial);
    this.deps.dom.speakerBoxEl.textContent = line.text ? (line.speaker || '') : '';
  }

  // fallow-ignore-next-line complexity
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
