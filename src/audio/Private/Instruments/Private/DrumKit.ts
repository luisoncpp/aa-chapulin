import { playNoise } from './NoiseSource.js';
import type { VoiceTarget } from './VoiceTypes.js';

interface DrumHit {
  ctx: AudioContext;
  dest: AudioNode;
  when: number;
  watch: VoiceTarget['watch'];
}

export function playStandardDrum(hit: DrumHit, symbol: string): boolean {
  const map: Record<string, (hit: DrumHit) => void> = {
    K: kick,
    S: snare,
    H: closedHat,
    O: openHat,
    C: crash,
    P: slap
  };
  const play = map[symbol];
  if (!play) return false;
  play(hit);
  return true;
}

function kick(hit: DrumHit): void {
  sweep(hit, { wave: 'sine', startFreq: 145, endFreq: 32, dur: 0.12, level: 0.38 });
}

function snare(hit: DrumHit): void {
  noise(hit, { sec: 0.11, freq: 1100, gain: 0.24, type: 'highpass' });
  sweep(hit, { wave: 'triangle', startFreq: 180, endFreq: 60, dur: 0.05, level: 0.15 });
}

function closedHat(hit: DrumHit): void {
  noise(hit, { sec: 0.035, freq: 6200, gain: 0.09, type: 'highpass' });
}

function openHat(hit: DrumHit): void {
  noise(hit, { sec: 0.16, freq: 5200, gain: 0.12, type: 'highpass' });
}

function crash(hit: DrumHit): void {
  noise(hit, { sec: 0.45, freq: 3800, gain: 0.22, type: 'highpass' });
  sweep(hit, { wave: 'triangle', startFreq: 220, endFreq: 80, dur: 0.12, level: 0.1 });
}

function slap(hit: DrumHit): void {
  sweep(hit, { wave: 'square', startFreq: 320, endFreq: 75, dur: 0.06, level: 0.2 });
}

function noise(hit: DrumHit, opts: { sec: number; freq: number; gain: number; type: BiquadFilterType }): void {
  playNoise({
    ctx: hit.ctx,
    dest: hit.dest,
    when: hit.when,
    sec: opts.sec,
    filterFreq: opts.freq,
    filterType: opts.type,
    gain: opts.gain,
    watch: hit.watch
  });
}

function sweep(hit: DrumHit, opts: { wave: OscillatorType; startFreq: number; endFreq: number; dur: number; level: number }): void {
  const osc = hit.ctx.createOscillator();
  const gain = hit.ctx.createGain();
  osc.type = opts.wave;
  osc.frequency.setValueAtTime(opts.startFreq, hit.when);
  osc.frequency.linearRampToValueAtTime(opts.endFreq, hit.when + opts.dur);
  gain.gain.setValueAtTime(opts.level, hit.when);
  gain.gain.linearRampToValueAtTime(0.001, hit.when + opts.dur);
  osc.connect(gain);
  gain.connect(hit.dest);
  osc.start(hit.when);
  osc.stop(hit.when + opts.dur + 0.01);
  hit.watch(osc, hit.when + opts.dur + 0.01);
}
