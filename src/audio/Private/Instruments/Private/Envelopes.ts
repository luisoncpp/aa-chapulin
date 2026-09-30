import type { AdsrSpec, AmpEnvelope, FilterEnvelope } from './InstrumentPatch.js';

export function applyAmp(param: AudioParam, when: number, duration: number, level: number, amp: AmpEnvelope): number {
  if (amp.kind === 'legacy') return applyLegacy(param, when, duration, level);
  return applyAdsr(param, when, duration, level, amp);
}

function applyLegacy(param: AudioParam, when: number, duration: number, level: number): number {
  param.setValueAtTime(0.0001, when);
  param.linearRampToValueAtTime(level, when + 0.012);
  param.linearRampToValueAtTime(level * 0.72, when + duration * 0.45);
  param.linearRampToValueAtTime(0.0001, when + duration);
  return duration + 0.06;
}

function applyAdsr(param: AudioParam, when: number, duration: number, level: number, env: AdsrSpec): number {
  const attackEnd = when + env.a;
  param.setValueAtTime(0.0001, when);
  param.linearRampToValueAtTime(level, attackEnd);
  param.setTargetAtTime(Math.max(level * env.s, 0.0001), attackEnd, Math.max(env.d / 3, 0.001));
  const decayEnd = attackEnd + env.d;
  if (env.fadeSec && decayEnd < when + duration) param.setTargetAtTime(0.0001, decayEnd, env.fadeSec);
  param.setTargetAtTime(0.0001, when + duration, Math.max(env.r / 4, 0.001));
  return duration + env.r;
}

export function applyFilter(filter: BiquadFilterNode, spec: FilterEnvelope, when: number): void {
  filter.type = spec.type;
  filter.Q.setValueAtTime(spec.q, when);
  const base = Math.max(spec.base, 20);
  const peak = Math.max(spec.peak, 20);
  filter.frequency.setValueAtTime(base, when);
  if (spec.attack <= 0) return;
  filter.frequency.exponentialRampToValueAtTime(peak, when + spec.attack);
  const sustain = Math.max(spec.sustain ?? spec.base, 20);
  filter.frequency.exponentialRampToValueAtTime(sustain, when + spec.attack + Math.max(spec.decay, 0.001));
}

export function scoop(param: AudioParam, when: number, cents: number, sec: number, restAt: number): void {
  param.setValueAtTime(restAt - cents, when);
  param.linearRampToValueAtTime(restAt, when + sec);
}
