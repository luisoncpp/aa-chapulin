// @Architecture(descriptionShort="Step-sequenced polyphonic retro chiptune synthesizer tracker", type="service", icon="music")
/**
 * Procedural MIDI Synthesizer & Soundtrack Sequencer
 * Uses [[./SoundEngine.ts]], [[./SynthVoiceSynthesizer.ts]], and definitions from [[./TrackCatalog.ts]].
 */

import type { DrumHitType, InstrumentWaveType, NoteEntry, TrackDefinition, TrackName } from '../../types/index.js';
import type { SoundEngine } from './SoundEngine.js';
import { SynthVoiceSynthesizer } from './SynthVoiceSynthesizer.js';
import { TRACK_CATALOG } from './TrackCatalog.js';

export interface NoteOptions {
  type?: InstrumentWaveType;
  gainLevel?: number;
  filterFreq?: number;
  vibrato?: boolean;
}

export class MidiMusicComposer {
  public currentTrack: TrackName | null = null;
  public queuedTrack: TrackName | null = null;
  public isPlaying = false;
  public step = 0;
  private timer: ReturnType<typeof setInterval> | null = null;
  public bpm = 120;

  constructor(private readonly se: SoundEngine) {}

  // @Section(Pitch Conversion & Voice Delegation)
  public midiToFreq(midi: number): number {
    return SynthVoiceSynthesizer.midiToFreq(midi);
  }

  public playNote(midi: NoteEntry, durationSec: number, options: NoteOptions = {}): void {
    if (!this.canPlay() || !midi) return;
    SynthVoiceSynthesizer.playNote(this.se.ctx!, this.se.bgmGain!, {
      midi,
      durationSec,
      type: options.type,
      gainLevel: options.gainLevel,
      filterFreq: options.filterFreq,
      vibrato: options.vibrato
    });
  }

  public playDrum(type: DrumHitType): void {
    if (!this.canPlay() || !type || type === '0') return;
    SynthVoiceSynthesizer.playDrum(this.se.ctx!, this.se.bgmGain!, type);
  }

  // @Section(Sequencer Loop & Timing)
  public playTrack(trackName: TrackName): void {
    this.queuedTrack = trackName;
    const track = TRACK_CATALOG[trackName];
    if (!track) return;
    if (this.currentTrack === trackName && this.isPlaying) return;

    this.stop();
    this.startSequencer(trackName, track);
  }

  private startSequencer(trackName: TrackName, track: TrackDefinition): void {
    this.currentTrack = trackName;
    this.isPlaying = true;
    this.step = 0;
    this.bpm = track.bpm || 120;

    const stepTimeMs = 60000 / this.bpm / 4;
    this.timer = setInterval(/*onStep*/ () => {
      this.tickTrack(trackName);
    }, /*delayInMs=*/ stepTimeMs);
  }

  private tickTrack(trackName: TrackName): void {
    if (!this.isPlaying) return;
    const track = TRACK_CATALOG[trackName];
    if (!track) return;

    const idx = this.step % track.length;
    const noteDuration = (60 / this.bpm) * 0.45;
    this.playTrackVoices(track, idx, noteDuration);
    this.step++;
  }

  private playTrackVoices(track: TrackDefinition, idx: number, noteDuration: number): void {
    if (track.bass) this.playChannel(track.bass[idx], noteDuration * 1.5, { type: 'triangle', gainLevel: 0.35, filterFreq: 900 });
    if (track.lead) this.playChannel(track.lead[idx], noteDuration * 1.8, { type: 'square', gainLevel: 0.22, filterFreq: 3600, vibrato: true });
    if (track.chords) this.playChannel(track.chords[idx], noteDuration * 1.2, { type: 'sawtooth', gainLevel: 0.16, filterFreq: 2200 });
    if (track.drums && track.drums[idx]) this.playDrum(track.drums[idx]);
  }

  private playChannel(midi: NoteEntry | undefined, duration: number, opts: NoteOptions): void {
    if (midi) this.playNote(midi, duration, opts);
  }

  public resumePlayback(): void {
    if (this.queuedTrack && (!this.isPlaying || !this.timer)) {
      this.playTrack(this.queuedTrack);
    }
  }

  public stop(): void {
    this.isPlaying = false;
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.currentTrack = null;
  }

  private canPlay(): boolean {
    return Boolean(this.se.initialized && this.se.ctx && this.isPlaying && !this.se.isMuted);
  }
}
