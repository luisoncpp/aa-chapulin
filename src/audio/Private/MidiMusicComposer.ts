// @Architecture(descriptionShort="Step-sequenced polyphonic soundtrack with per-track instruments", type="service", icon="music")
/**
 * Procedural soundtrack sequencer.
 * Timing is [[./Scheduler/index.ts]], timbre is [[./Instruments/index.ts]],
 * and the mix is [[./Mixer/index.ts]].
 */

import type { BgmCue, DrumHitType, InstrumentId, NoteEntry, TrackDefinition, TrackName } from '../../types/index.js';
import { patchById, playDrumHit, playInstrumentNote, midiToFreq } from './Instruments/index.js';
import type { VoiceTarget } from './Instruments/index.js';
import { MusicBus } from './Mixer/index.js';
import { LookaheadScheduler } from './Scheduler/index.js';
import type { SoundEngine } from './SoundEngine.js';
import { renderStep } from './StepRenderer.js';
import { TRACK_CATALOG } from './TrackCatalog.js';

export class MidiMusicComposer {
  public currentTrack: TrackName | null = null;
  public queuedTrack: TrackName | null = null;
  public isPlaying = false;
  public step = 0;
  public bpm = 120;
  private readonly scheduler: LookaheadScheduler;
  private bus: MusicBus | null = null;

  constructor(private readonly se: SoundEngine) {
    this.scheduler = new LookaheadScheduler(/*playDueStep*/ (step, when) => {
      this.onStep(step, when);
    });
  }

  public midiToFreq(midi: number): number {
    return midiToFreq(midi);
  }

  // fallow-ignore-next-line complexity
  public playNote(midi: NoteEntry, durationSec: number, instrument?: InstrumentId): void {
    if (!this.canPlay() || !this.se.ctx || !this.se.bgmGain) return;
    const target = this.oneShotTarget();
    if (!target) return;
    playInstrumentNote(target, patchById(instrument ?? 'chip_lead'), {
      midi,
      when: this.se.ctx.currentTime,
      durationSec,
      gain: 1
    });
  }

  public playDrum(type: DrumHitType): void {
    const target = this.oneShotTarget();
    if (!this.canPlay() || !target) return;
    playDrumHit(target, type, this.se.ctx!.currentTime);
  }

  /** Dialogue cue: `silence` also drops the queued track so an unlock cannot restart it. */
  public playCue(cue: BgmCue): void {
    if (cue !== 'silence') return this.playTrack(cue);
    this.stop();
    this.queuedTrack = null;
  }

  // fallow-ignore-next-line complexity
  public playTrack(trackName: TrackName): void {
    this.queuedTrack = trackName;
    const track = TRACK_CATALOG[trackName];
    if (!track) return;
    const current = this.currentTrack ? TRACK_CATALOG[this.currentTrack] : null;
    if (this.isPlaying && this.scheduler.isRunning() && (this.currentTrack === trackName || current === track)) return;
    this.stop();
    this.startSequencer(trackName, track);
  }

  // fallow-ignore-next-line complexity
  public pause(): void {
    if (!this.isPlaying || !this.currentTrack) return;
    const length = TRACK_CATALOG[this.currentTrack]?.length ?? 1;
    this.step = this.scheduler.audibleStep(length);
    this.isPlaying = false;
    this.scheduler.stop();
  }

  // fallow-ignore-next-line complexity
  public resumePaused(): void {
    if (!this.currentTrack || this.isPlaying || this.scheduler.isRunning()) return;
    const track = TRACK_CATALOG[this.currentTrack];
    if (!track || !this.se.ctx) return;
    this.isPlaying = true;
    this.bpm = track.bpm || 120;
    this.arm(this.step, 0.02, /*fresh=*/ false);
  }

  // fallow-ignore-next-line complexity
  public seekToStep(step: number): void {
    if (!this.currentTrack) return;
    const track = TRACK_CATALOG[this.currentTrack];
    if (!track) return;
    const clamped = Math.max(0, Math.min(step, Math.max(0, track.length - 1)));
    this.step = clamped;
    if (this.isPlaying && this.se.ctx) this.scheduler.jumpTo(clamped, this.se.ctx.currentTime);
  }

  // fallow-ignore-next-line complexity
  public getPlaybackSnapshot(): { track: TrackName | null; step: number; length: number; isPlaying: boolean } {
    if (!this.currentTrack) return { track: null, step: 0, length: 0, isPlaying: false };
    const length = TRACK_CATALOG[this.currentTrack]?.length ?? 0;
    const step = this.isPlaying && length > 0 ? this.scheduler.audibleStep(length) : this.wrapped(length);
    return { track: this.currentTrack, step, length, isPlaying: this.isPlaying };
  }

  public resumePlayback(): void {
    if (!this.queuedTrack || (this.isPlaying && this.scheduler.isRunning())) return;
    this.playTrack(this.queuedTrack);
  }

  public stop(): void {
    this.isPlaying = false;
    this.scheduler.stop();
    this.bus?.endSession();
    this.currentTrack = null;
  }

  private startSequencer(trackName: TrackName, track: TrackDefinition): void {
    this.currentTrack = trackName;
    this.isPlaying = true;
    this.step = 0;
    this.bpm = track.bpm || 120;
    this.arm(0, 0, /*fresh=*/ true);
  }

  private arm(fromStep: number, leadInSec: number, fresh: boolean): void {
    if (!this.se.ctx || !this.se.bgmGain) return;
    this.bus = MusicBus.for(this.se.ctx, this.se.bgmGain);
    this.bus.open(fresh, TRACK_CATALOG[this.currentTrack!]?.reverb ?? 0);
    this.scheduler.start({ ctx: this.se.ctx, bpm: this.bpm, fromStep, leadInSec });
  }

  // fallow-ignore-next-line complexity
  private onStep(step: number, when: number): void {
    if (!this.isPlaying || !this.currentTrack || !this.canPlay() || !this.bus || !this.se.ctx) return;
    const track = TRACK_CATALOG[this.currentTrack];
    if (!track) return;
    this.step = step;
    renderStep({ track, idx: step % track.length, when, ctx: this.se.ctx, bus: this.bus });
  }

  private oneShotTarget(): VoiceTarget | null {
    if (!this.se.ctx || !this.se.bgmGain) return null;
    const bus = MusicBus.for(this.se.ctx, this.se.bgmGain);
    return {
      ctx: this.se.ctx,
      dry: this.se.bgmGain,
      reverb: bus.reverbInput(),
      watch: (node, endAt) => bus.watch(node, endAt)
    };
  }

  private wrapped(length: number): number {
    return length > 0 ? this.step % length : 0;
  }

  private canPlay(): boolean {
    return Boolean(this.se.initialized && this.se.ctx && this.isPlaying && !this.se.isMuted);
  }
}
