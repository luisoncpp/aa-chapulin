// @Architecture(descriptionShort="Runs private deduction within the live trial dialogue")
import { DeductionSession, GameDeductionView, ThoughtEntrance, type DeductionSequence, type DeductionSnapshot } from '../../deduction/index.js';
import type { TrialControllerDeps } from './TrialController.js';

export class TrialDeduction {
  private readonly session: DeductionSession;
  private readonly view: GameDeductionView;
  private readonly entrance: ThoughtEntrance;
  private readonly abort = new AbortController();
  private timer: ReturnType<typeof setTimeout> | null = null;
  private travelRemaining = 0;
  private travelStarted = 0;
  private readonly modalObserver: MutationObserver;
  private active = true;
  private finished = false;
  private questionReady = false;
  private conclusionAnnounced = false;
  private musicStarted = false;

  constructor(
    private readonly deps: TrialControllerDeps,
    sequence: DeductionSequence,
    private readonly onComplete: () => void,
    snapshot?: DeductionSnapshot
  ) {
    this.session = new DeductionSession(sequence, snapshot);
    this.session.setLanguage(deps.state.language);
    this.conclusionAnnounced = snapshot?.phase === 'conclusion';
    this.view = new GameDeductionView(deps.dom.gameScreen, sequence, () => this.advance());
    this.entrance = new ThoughtEntrance(deps.dom.gameScreen, sequence.defender, {
      court: '#deduction-court-zoom', sprite: '#character-sprite', thought: '.deduction-overlay'
    });
    document.addEventListener('visibilitychange', /*pauseForeheadAndTravel*/ () => this.suspend(), { signal: this.abort.signal });
    this.modalObserver = new MutationObserver(/*pauseWhileCourtRecordOrHistoryIsOpen*/ () => this.suspend());
    this.modalObserver.observe(deps.dom.gameScreen, { attributes: true, subtree: true, attributeFilter: ['class'] });
    this.render();
    if (snapshot?.phase === 'travel') this.finishTravel();
  }

  public snapshot(): DeductionSnapshot { return this.session.snapshot(); }

  public setLanguage(language: 'es' | 'en'): void {
    this.session.setLanguage(language); this.render();
  }

  private render(): void {
    const phase = this.session.phase;
    this.syncMusic();
    if (phase === 'question') this.questionReady = false;
    this.view.render(this.session, () => this.choose(), id => this.view.focus(this.session, id), this.questionReady);
    const pose = this.session.sequence.defender === 'chapulin' ? 'chapulin_idle' : 'donramon_idle';
    const line = { speaker: 'DEFENSA', text: this.session.text(), pose } as const;
    if (phase === 'conclusion') {
      this.deps.onRenderLine({ ...line, instant: true });
      if (!this.conclusionAnnounced) this.deps.soundEngine.playSFX('realization');
      this.conclusionAnnounced = true; return;
    }
    if (phase === 'question') {
      this.deps.onQueueDialogue([line], /*showChoicesAfterQuestion*/ () => {
        if (this.session.phase !== 'question') return;
        this.questionReady = true;
        this.view.render(this.session, () => this.choose(), id => this.view.focus(this.session, id), /*choicesAreVisible*/ true);
      });
      return;
    }
    if (phase === 'travel') {
      this.deps.onRenderLine(line); this.deps.dom.dialogueArrowEl.classList.add('hidden'); return;
    }
    this.deps.onQueueDialogue([line], /*advanceThoughtAfterLine*/ () => this.afterLine(phase));
  }

  private syncMusic(): void {
    if (this.session.phase === 'entry' || this.session.phase === 'conclusion') {
      this.deps.midiComposer.playCue('silence'); return;
    }
    if (this.musicStarted) return;
    this.musicStarted = true;
    this.deps.midiComposer.playTrack('deduccion_final');
  }

  private afterLine(phase: string): void {
    if (phase === 'entry') {
      this.entrance.play(matchMedia('(prefers-reduced-motion: reduce)').matches, /*showFirstPremiseAfterZoom*/ () => {
        this.session.advance(); this.render();
      });
      return;
    }
    if (!this.session.advance()) return;
    if (this.session.phase === 'returned') { this.finish(); return; }
    this.render();
  }

  private choose(): void {
    if (!this.active || this.session.phase !== 'question' || !this.session.choose()) return;
    this.render();
    if (this.session.snapshot().phase !== 'travel') return;
    this.travelRemaining = 1050; this.scheduleTravel();
  }

  private scheduleTravel(): void {
    if (this.paused()) return;
    this.travelStarted = performance.now();
    this.timer = setTimeout(/*arriveAtConnection*/ () => this.finishTravel(), this.travelRemaining);
  }

  private finishTravel(): void {
    if (this.session.phase !== 'travel') return;
    this.timer = null; this.session.advance(); this.render();
  }

  public advance(): boolean {
    if (!this.active) return false;
    if (this.paused()) return true;
    if (this.entrance.active) return true;
    if (this.session.phase === 'question') return true;
    if (this.session.phase === 'travel') return true;
    if (this.session.phase === 'entry' && !this.entrance.active) {
      this.entrance.play(matchMedia('(prefers-reduced-motion: reduce)').matches, /*showFirstPremiseAfterZoom*/ () => {
        this.session.advance(); this.render();
      });
      return true;
    }
    if (!this.session.advance()) return true;
    if (this.session.phase === 'returned') { this.finish(); return true; }
    this.render(); return true;
  }

  private suspend(): void {
    const paused = this.paused();
    this.entrance.pause(paused); this.view.pause(paused);
    if (paused && this.timer !== null) {
      this.travelRemaining = Math.max(0, this.travelRemaining - (performance.now() - this.travelStarted));
      clearTimeout(this.timer); this.timer = null;
    }
    if (!paused && this.session.phase === 'travel' && this.timer === null) this.scheduleTravel();
  }

  private paused(): boolean {
    return document.hidden || this.deps.dom.gameScreen.querySelector('.game-modal:not(.hidden)') !== null;
  }

  private finish(): void {
    if (this.finished) return;
    this.finished = true; this.dispose(); this.onComplete();
  }

  public dispose(): void {
    if (!this.active) return;
    this.active = false; this.entrance.cancel(); this.abort.abort();
    this.modalObserver.disconnect();
    if (this.timer !== null) clearTimeout(this.timer);
    this.view.dispose();
  }
}
