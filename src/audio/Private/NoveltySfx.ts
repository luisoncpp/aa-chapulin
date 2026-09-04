// @Architecture(descriptionShort="Synthesizes typewriter blips, chimes, squeaks, and buzzers", type="synthesizer", icon="bolt")
/**
 * Procedural Character and Event Sound Effects Synthesizer
 * Generates typewriter, comedic, and realization SFX for [[./SoundEngine.ts]].
 */

import type { InstrumentWaveType } from '../../types/index.js';

export interface ChordOptions {
  notes: number[];
  durationSec?: number;
  wave?: InstrumentWaveType;
}

export class NoveltySfx {
  // @Section(Typewriter Blip Synthesis)
  public static playTextBlip(ctx: AudioContext, dest: GainNode, pitchOffset = 0): void {
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(540 + pitchOffset * 25 + Math.random() * 30, t);
    osc.frequency.linearRampToValueAtTime(360, t + 0.04);

    gain.gain.setValueAtTime(0.18, t);
    gain.gain.linearRampToValueAtTime(0.001, t + 0.04);

    osc.connect(gain);
    gain.connect(dest);

    osc.start(t);
    osc.stop(t + 0.045);
  }

  // @Section(Subtle Click Synthesis)
  public static playClick(ctx: AudioContext, dest: GainNode): void {
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, t);
    osc.frequency.linearRampToValueAtTime(120, t + 0.025);

    gain.gain.setValueAtTime(0.12, t);
    gain.gain.linearRampToValueAtTime(0.001, t + 0.025);

    osc.connect(gain);
    gain.connect(dest);

    osc.start(t);
    osc.stop(t + 0.03);
  }

  // @Section(Realization Chime Synthesis)
  public static playRealization(ctx: AudioContext, dest: GainNode): void {
    const t = ctx.currentTime;
    const freqs = [880, 1174.66, 1760, 2349.32];

    freqs.forEach((freq, idx) => {
      const startTime = t + idx * 0.04;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.35, startTime);
      gain.gain.linearRampToValueAtTime(0.001, startTime + 0.45);

      osc.connect(gain);
      gain.connect(dest);
      osc.start(startTime);
      osc.stop(startTime + 0.46);
    });
  }

  // @Section(Chipote & Chicharra Synthesis)
  public static playChipoteSqueak(ctx: AudioContext, dest: GainNode): void {
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';

    osc.frequency.setValueAtTime(680, t);
    osc.frequency.linearRampToValueAtTime(1550, t + 0.08);
    osc.frequency.linearRampToValueAtTime(480, t + 0.22);

    gain.gain.setValueAtTime(0.6, t);
    gain.gain.linearRampToValueAtTime(0.001, t + 0.22);

    osc.connect(gain);
    gain.connect(dest);
    osc.start(t);
    osc.stop(t + 0.23);
  }

  public static playChicharra(ctx: AudioContext, dest: GainNode): void {
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';

    osc.frequency.setValueAtTime(466.16, t);
    osc.frequency.setValueAtTime(466.16, t + 0.14);
    osc.frequency.setValueAtTime(349.23, t + 0.15);

    gain.gain.setValueAtTime(0.55, t);
    gain.gain.linearRampToValueAtTime(0.001, t + 0.45);

    osc.connect(gain);
    gain.connect(dest);
    osc.start(t);
    osc.stop(t + 0.46);
  }

  // @Section(Harmonic Chords)
  public static playChord(
    ctx: AudioContext,
    dest: GainNode,
    options: ChordOptions
  ): void {
    const t = ctx.currentTime;
    const duration = options.durationSec ?? 0.3;
    const wave = options.wave ?? 'sawtooth';

    options.notes.forEach((freq) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = wave;
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.2, t);
      gain.gain.linearRampToValueAtTime(0.001, t + duration);

      osc.connect(gain);
      gain.connect(dest);
      osc.start(t);
      osc.stop(t + duration);
    });
  }
}
