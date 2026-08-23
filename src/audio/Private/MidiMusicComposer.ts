// @Architecture(descriptionShort="Step-sequenced 4-channel retro chiptune synthesizer tracker", type="service", icon="music")
/**
 * Procedural MIDI Synthesizer & Soundtrack Sequencer
 * Uses [[./SoundEngine.ts]] and definitions from [[./TrackCatalog.ts]].
 */

import type { DrumHitType, InstrumentWaveType, TrackName } from '../../types/index.js';
import type { SoundEngine } from './SoundEngine.js';
import { TRACK_CATALOG } from './TrackCatalog.js';

export interface NoteOptions {
  type?: InstrumentWaveType;
  gainLevel?: number;
  filterFreq?: number;
}

export class MidiMusicComposer {
  public currentTrack: TrackName | null = null;
  public queuedTrack: TrackName | null = null;
  public isPlaying = false;
  public step = 0;
  private timer: ReturnType<typeof setInterval> | null = null;
  public bpm = 120;

  constructor(private readonly se: SoundEngine) {}

  // @Section(Pitch Frequency Conversion)
  public midiToFreq(midi: number): number {
    if (!midi || midi <= 0) return 0;
    return 440 * Math.pow(2, (midi - 69) / 12);
  }

  // @Section(Note Voice Synthesis)
  public playNote(midi: number, durationSec: number, options: NoteOptions = {}): void {
    if (!this.canPlay() || !midi) return;
    const ctx = this.se.ctx!;
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = options.type ?? 'square';
    osc.frequency.setValueAtTime(this.midiToFreq(midi), t);
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(options.filterFreq ?? 2800, t);

    const gainLevel = options.gainLevel ?? 0.18;
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.linearRampToValueAtTime(gainLevel, t + 0.02);
    gain.gain.linearRampToValueAtTime(gainLevel * 0.7, t + durationSec * 0.4);
    gain.gain.linearRampToValueAtTime(0.0001, t + durationSec);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.se.bgmGain!);
    osc.start(t);
    osc.stop(t + durationSec + 0.05);
  }

  // @Section(Drum Synthesis Voices)
  public playDrum(type: DrumHitType): void {
    if (!this.canPlay() || type === '0') return;
    const ctx = this.se.ctx!;
    const t = ctx.currentTime;
    if (type === 'K') return this.playKick(ctx, t);
    if (type === 'S') return this.playSnare(ctx, t);
    if (type === 'H') return this.playHiHat(ctx, t);
  }

  private playKick(ctx: AudioContext, t: number): void {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(140, t);
    osc.frequency.linearRampToValueAtTime(35, t + 0.12);
    gain.gain.setValueAtTime(0.4, t);
    gain.gain.linearRampToValueAtTime(0.001, t + 0.12);
    osc.connect(gain);
    gain.connect(this.se.bgmGain!);
    osc.start(t);
    osc.stop(t + 0.13);
  }

  private playSnare(ctx: AudioContext, t: number): void {
    const bufferSize = Math.floor(ctx.sampleRate * 0.12);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(1100, t);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.25, t);
    gain.gain.linearRampToValueAtTime(0.001, t + 0.12);
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.se.bgmGain!);
    noise.start(t);
  }

  private playHiHat(ctx: AudioContext, t: number): void {
    const bufferSize = Math.floor(ctx.sampleRate * 0.04);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(6000, t);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.1, t);
    gain.gain.linearRampToValueAtTime(0.001, t + 0.04);
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.se.bgmGain!);
    noise.start(t);
  }

  // @Section(Sequencer Loop & Timing)
  public playTrack(trackName: TrackName): void {
    this.queuedTrack = trackName;
    const track = TRACK_CATALOG[trackName];
    if (!track) return;
    if (this.currentTrack === trackName && this.isPlaying) return;

    this.stop();
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

    if (track.bass && track.bass[idx]) {
      this.playNote(track.bass[idx], noteDuration * 1.5, { type: 'triangle', gainLevel: 0.35, filterFreq: 900 });
    }
    if (track.lead && track.lead[idx]) {
      this.playNote(track.lead[idx], noteDuration * 1.8, { type: 'square', gainLevel: 0.22, filterFreq: 3600 });
    }
    if (track.chords && track.chords[idx]) {
      this.playNote(track.chords[idx], noteDuration * 1.2, { type: 'sawtooth', gainLevel: 0.14, filterFreq: 2000 });
    }
    if (track.drums && track.drums[idx]) {
      this.playDrum(track.drums[idx]);
    }
    this.step++;
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
