// @Architecture(descriptionShort="One musical session across questions and private hypotheses")
import { MidiMusicComposer, SoundEngine } from '../../audio/index.js';
import type { Phase } from './Contract.js';

export class DeductionAudio {
  private readonly sound = new SoundEngine();
  private readonly composer = new MidiMusicComposer(this.sound);
  private phase: Phase = 'entry';
  private started = false;
  public get muted(): boolean { return this.sound.isMuted; }
  public unlock(): void { this.sound.ensureActive(); }
  public toggle(): boolean { this.unlock(); return this.sound.toggleMute(); }
  public focus(): void { this.sound.playSFX('click'); }

  public sync(phase: Phase, restored: boolean): void {
    const previous = this.phase; this.phase = phase;
    if (phase === 'entry') { this.started = false; this.composer.stop(); return; }
    if (phase === 'returned') { this.composer.playTrack('suspense'); return; }
    if (phase === 'conclusion') {
      if (!restored && previous !== phase) {
        this.sound.playSFX('realization');
        this.composer.playNote([62, 66, 69, 74], 1.5, 'epiano');
      }
      this.composer.stop();
      return;
    }
    if (!this.started) { this.composer.playTrack('deduccion_final'); this.started = true; }
    if (!restored && previous !== phase && phase === 'travel') this.sound.playSFX('realization');
    if (!restored && previous !== phase && phase === 'rejected') this.sound.playSFX('click');
  }

  public visibility(hidden: boolean): void {
    if (hidden) { this.composer.pause(); return; }
    this.sound.resume(); this.composer.resumePaused();
  }
  public dispose(): void { this.composer.stop(); void this.sound.ctx?.close().catch(() => {}); }
}
