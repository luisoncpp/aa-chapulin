// @Architecture(descriptionShort="Owns trial deduction sessions and their saved progression")
import type { DeductionSnapshot } from '../../deduction/index.js';
import type { TrialController } from './TrialController.js';
import { TrialDeduction } from './TrialDeduction.js';
import { findTrialDeduction, finishTrialDeduction } from './TrialDeductionRoute.js';

export class TrialDeductionLifecycle {
  private deduction: TrialDeduction | null = null;
  constructor(private readonly ctrl: TrialController) {}
  public snapshot(): DeductionSnapshot | undefined { return this.deduction?.snapshot(); }
  public cancel(): void { this.deduction?.dispose(); this.deduction = null; }
  public advance(): boolean { return this.deduction?.advance() ?? false; }
  public setLanguage(): void { this.deduction?.setLanguage(this.ctrl.deps.state.language); }
  public start(sequenceId?: string): void {
    const route = findTrialDeduction(this.ctrl, sequenceId);
    if (!route) return;
    const { sequence } = route;
    if (route.testimonyIndex !== undefined) this.ctrl.bindTestimonyIndex(route.testimonyIndex);
    this.deduction?.dispose();
    this.ctrl.phase = 'CLIMAX'; this.ctrl.climaxResolved = true; this.ctrl.climaxChoiceIdx = null;
    this.ctrl.climaxStageIdx = Math.max(0, (this.ctrl.script.trial.climax.stages?.length ?? 1) - 1);
    this.ctrl.hideControls();
    this.ctrl.deps.dom.investigationNavEl.classList.add('hidden');
    this.ctrl.deps.dom.examineNavEl.classList.add('hidden');
    this.ctrl.deps.dom.hotspotsContainerEl.replaceChildren();
    this.deduction = new TrialDeduction(this.ctrl.deps, sequence, () => this.finishDeduction());
  }

  public restore(snapshot: DeductionSnapshot): boolean {
    const route = findTrialDeduction(this.ctrl, snapshot.sequenceId);
    if (!route) return false;
    const { sequence } = route;
    if (route.testimonyIndex !== undefined) this.ctrl.bindTestimonyIndex(route.testimonyIndex);
    try {
      this.deduction?.dispose();
      this.ctrl.phase = 'CLIMAX'; this.ctrl.climaxResolved = true; this.ctrl.climaxChoiceIdx = null;
      this.ctrl.deps.dom.bgEl.style.backgroundImage = "url('assets/bg_courtroom.webp')";
      this.ctrl.hideControls();
      this.deduction = new TrialDeduction(/*deps=*/ this.ctrl.deps, /*sequence=*/ sequence,
        /*onComplete=*/ () => this.finishDeduction(), /*snapshot=*/ snapshot);
      return true;
    } catch { this.deduction = null; return false; }
  }

  private finishDeduction(): void {
    const route = findTrialDeduction(this.ctrl, this.deduction?.snapshot().sequenceId);
    this.cancel();
    this.ctrl.deps.midiComposer.playTrack('suspense');
    if (route) finishTrialDeduction(this.ctrl, route);
  }
}
