// @Architecture(descriptionShort="Procedural polyphonic synthesizer voice and drum generator for chiptune tracker", type="service", icon="bolt")
/**
 * Procedural Synthesizer Voice Generator
 * Synthesizes polyphonic retro chiptune voices and percussion for [[./MidiMusicComposer.ts]].
 */

import type { DrumHitType, InstrumentWaveType, NoteEntry } from '../../types/index.js';

export interface SynthNoteParams {
  midi: NoteEntry;
  durationSec: number;
  type?: InstrumentWaveType;
  gainLevel?: number;
  filterFreq?: number;
  vibrato?: boolean;
}

export class SynthVoiceSynthesizer {
  // @Section(Pitch Calculation)
  public static midiToFreq(midi: number): number {
    if (!midi || midi <= 0) return 0;
    return 440 * Math.pow(2, (midi - 69) / 12);
  }

  // @Section(Polyphonic & Monophonic Note Synthesis)
  public static playNote(ctx: AudioContext, dest: GainNode, params: SynthNoteParams): void {
    if (!params.midi) return;
    if (Array.isArray(params.midi)) {
      this.playChord(ctx, dest, params, params.midi);
      return;
    }
    this.playSingleVoice(ctx, dest, { ...params, midi: params.midi });
  }

  private static playChord(ctx: AudioContext, dest: GainNode, params: SynthNoteParams, notes: number[]): void {
    const validNotes = notes.filter((n) => n > 0);
    if (validNotes.length === 0) return;
    const gainFactor = 1 / Math.sqrt(validNotes.length);
    const chordGain = (params.gainLevel || 0.18) * gainFactor;

    validNotes.forEach((note) => {
      this.playSingleVoice(ctx, dest, { ...params, midi: note, gainLevel: chordGain });
    });
  }

  private static playSingleVoice(ctx: AudioContext, dest: GainNode, params: SynthNoteParams & { midi: number }): void {
    const freq = this.midiToFreq(params.midi);
    if (freq <= 0) return;

    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = params.type || 'square';
    osc.frequency.setValueAtTime(freq, t);
    this.attachVibratoIfEnabled(ctx, osc, params);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(params.filterFreq || 2800, t);

    const gain = ctx.createGain();
    this.applyEnvelope(gain, t, params.durationSec, params.gainLevel || 0.18);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(dest);
    osc.start(t);
    osc.stop(t + params.durationSec + 0.06);
  }

  private static attachVibratoIfEnabled(
    ctx: AudioContext,
    osc: OscillatorNode,
    params: SynthNoteParams
  ): void {
    if (!params.vibrato) return;
    const t = ctx.currentTime;
    const lfo = ctx.createOscillator();
    lfo.frequency.setValueAtTime(5.5, t);
    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(0, t);
    lfoGain.gain.linearRampToValueAtTime(6.0, t + 0.08);
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);
    lfo.start(t);
    lfo.stop(t + params.durationSec + 0.06);
  }

  private static applyEnvelope(gain: GainNode, t: number, durationSec: number, level: number): void {
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.linearRampToValueAtTime(level, t + 0.012);
    gain.gain.linearRampToValueAtTime(level * 0.72, t + durationSec * 0.45);
    gain.gain.linearRampToValueAtTime(0.0001, t + durationSec);
  }

  // @Section(Percussion Voice Synthesis)
  public static playDrum(ctx: AudioContext, dest: GainNode, type: DrumHitType): void {
    if (!type || type === '0') return;
    for (const char of type) {
      this.dispatchSingleDrum(ctx, dest, char);
    }
  }

  private static dispatchSingleDrum(ctx: AudioContext, dest: GainNode, char: string): void {
    const map: Record<string, () => void> = {
      K: () => this.createRampedTone(ctx, dest, { wave: 'sine', startFreq: 145, endFreq: 32, dur: 0.12, level: 0.38 }),
      S: () => this.playSnare(ctx, dest),
      H: () => this.playHiHat(ctx, dest),
      O: () => this.playOpenHat(ctx, dest),
      C: () => this.playCrash(ctx, dest),
      P: () => this.createRampedTone(ctx, dest, { wave: 'square', startFreq: 320, endFreq: 75, dur: 0.06, level: 0.2 })
    };
    map[char]?.();
  }

  private static playSnare(ctx: AudioContext, dest: GainNode): void {
    this.playNoiseBurst(ctx, dest, { durationSec: 0.11, filterFreq: 1100, gainLevel: 0.24, filterType: 'highpass' });
    this.createRampedTone(ctx, dest, { wave: 'triangle', startFreq: 180, endFreq: 60, dur: 0.05, level: 0.15 });
  }

  private static playHiHat(ctx: AudioContext, dest: GainNode): void {
    this.playNoiseBurst(ctx, dest, { durationSec: 0.035, filterFreq: 6200, gainLevel: 0.09, filterType: 'highpass' });
  }

  private static playOpenHat(ctx: AudioContext, dest: GainNode): void {
    this.playNoiseBurst(ctx, dest, { durationSec: 0.16, filterFreq: 5200, gainLevel: 0.12, filterType: 'highpass' });
  }

  private static playCrash(ctx: AudioContext, dest: GainNode): void {
    this.playNoiseBurst(ctx, dest, { durationSec: 0.45, filterFreq: 3800, gainLevel: 0.22, filterType: 'highpass' });
    this.createRampedTone(ctx, dest, { wave: 'triangle', startFreq: 220, endFreq: 80, dur: 0.12, level: 0.1 });
  }

  private static createRampedTone(
    ctx: AudioContext,
    dest: GainNode,
    opts: { wave: OscillatorType; startFreq: number; endFreq: number; dur: number; level: number }
  ): void {
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = opts.wave;
    const gain = ctx.createGain();
    osc.frequency.setValueAtTime(opts.startFreq, t);
    osc.frequency.linearRampToValueAtTime(opts.endFreq, t + opts.dur);
    gain.gain.setValueAtTime(opts.level, t);
    gain.gain.linearRampToValueAtTime(0.001, t + opts.dur);
    osc.connect(gain);
    gain.connect(dest);
    osc.start(t);
    osc.stop(t + opts.dur + 0.01);
  }

  private static playNoiseBurst(
    ctx: AudioContext,
    dest: GainNode,
    opts: { durationSec: number; filterFreq: number; gainLevel: number; filterType: BiquadFilterType }
  ): void {
    const t = ctx.currentTime;
    const count = Math.floor(ctx.sampleRate * opts.durationSec);
    const buf = ctx.createBuffer(1, count, ctx.sampleRate);
    const ch = buf.getChannelData(0);
    for (let i = 0; i < count; i++) ch[i] = (Math.random() - 0.5) * 2;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const flt = ctx.createBiquadFilter();
    flt.type = opts.filterType;
    flt.frequency.setValueAtTime(opts.filterFreq, t);
    const g = ctx.createGain();
    g.gain.setValueAtTime(opts.gainLevel, t);
    g.gain.linearRampToValueAtTime(0.001, t + opts.durationSec);
    src.connect(flt);
    flt.connect(g);
    g.connect(dest);
    src.start(t);
  }
}
