import { playNoise } from './NoiseSource.js';
import type { VoiceTarget } from './VoiceTypes.js';

interface DrumHit {
  ctx: AudioContext;
  dest: AudioNode;
  when: number;
  watch: VoiceTarget['watch'];
}

export function playLatinDrum(hit: DrumHit, symbol: string): boolean {
  const map: Record<string, (hit: DrumHit) => void> = {
    X: clap,
    R: rimshot,
    T: (drum) => tom(drum, 140, 80),
    M: (drum) => tom(drum, 220, 130),
    B: cowbell,
    G: guiro,
    Y: timbal
  };
  const play = map[symbol];
  if (!play) return false;
  play(hit);
  return true;
}

function clap(hit: DrumHit): void {
  for (const delay of [0, 0.01, 0.02]) {
    playNoise({ ctx: hit.ctx, dest: hit.dest, when: hit.when + delay, sec: 0.008, filterFreq: 1200, gain: 0.22, watch: hit.watch });
  }
  playNoise({ ctx: hit.ctx, dest: hit.dest, when: hit.when, sec: 0.12, filterFreq: 1200, gain: 0.16, watch: hit.watch });
}

function rimshot(hit: DrumHit): void {
  toneInto({ hit, dest: hit.dest, freq: 1700, dur: 0.015, level: 0.18, wave: 'square' });
  playNoise({ ctx: hit.ctx, dest: hit.dest, when: hit.when, sec: 0.005, filterFreq: 4000, filterType: 'highpass', gain: 0.16, watch: hit.watch });
}

function tom(hit: DrumHit, startFreq: number, endFreq: number): void {
  const osc = hit.ctx.createOscillator();
  const gain = hit.ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(startFreq, hit.when);
  osc.frequency.exponentialRampToValueAtTime(endFreq, hit.when + 0.18);
  gain.gain.setValueAtTime(0.28, hit.when);
  gain.gain.exponentialRampToValueAtTime(0.001, hit.when + 0.18);
  osc.connect(gain);
  gain.connect(hit.dest);
  osc.start(hit.when);
  osc.stop(hit.when + 0.19);
  hit.watch(osc);
}

function cowbell(hit: DrumHit): void {
  const filter = hit.ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(2600, hit.when);
  filter.connect(hit.dest);
  toneInto({ hit, dest: filter, freq: 540, dur: 0.25, level: 0.12 });
  toneInto({ hit, dest: filter, freq: 800, dur: 0.25, level: 0.1 });
}

function guiro(hit: DrumHit): void {
  const filter = hit.ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(3000, hit.when);
  const gain = hit.ctx.createGain();
  gain.gain.setValueAtTime(0.12, hit.when);
  gain.gain.linearRampToValueAtTime(0.001, hit.when + 0.18);
  const lfo = hit.ctx.createOscillator();
  const depth = hit.ctx.createGain();
  lfo.type = 'square';
  lfo.frequency.setValueAtTime(28, hit.when);
  depth.gain.setValueAtTime(0.08, hit.when);
  lfo.connect(depth);
  depth.connect(gain.gain);
  filter.connect(gain);
  gain.connect(hit.dest);
  playNoise({ ctx: hit.ctx, dest: filter, when: hit.when, sec: 0.18, filterFreq: 3000, gain: 1, watch: hit.watch });
  lfo.start(hit.when);
  lfo.stop(hit.when + 0.19);
  hit.watch(lfo);
}

function timbal(hit: DrumHit): void {
  toneInto({ hit, dest: hit.dest, freq: 420, dur: 0.22, level: 0.16, wave: 'triangle' });
  playNoise({ ctx: hit.ctx, dest: hit.dest, when: hit.when, sec: 0.22, filterFreq: 2500, filterType: 'highpass', gain: 0.1, watch: hit.watch });
}

function toneInto(spec: {
  hit: DrumHit;
  dest: AudioNode;
  freq: number;
  dur: number;
  level: number;
  wave?: OscillatorType;
}): void {
  const osc = spec.hit.ctx.createOscillator();
  const gain = spec.hit.ctx.createGain();
  osc.type = spec.wave ?? 'square';
  osc.frequency.setValueAtTime(spec.freq, spec.hit.when);
  gain.gain.setValueAtTime(spec.level, spec.hit.when);
  gain.gain.exponentialRampToValueAtTime(0.001, spec.hit.when + spec.dur);
  osc.connect(gain);
  gain.connect(spec.dest);
  osc.start(spec.hit.when);
  osc.stop(spec.hit.when + spec.dur + 0.01);
  spec.hit.watch(osc);
}
