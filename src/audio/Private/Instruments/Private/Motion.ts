import type { InstrumentPatch } from './InstrumentPatch.js';
import type { NoteEvent, VoiceTarget } from './VoiceTypes.js';

export function attachMotion(
  target: VoiceTarget,
  patch: InstrumentPatch,
  oscs: OscillatorNode[],
  amp: GainNode,
  event: NoteEvent,
  tail: number
): void {
  if (patch.vibrato) addVibrato(target, patch.vibrato, oscs, event.when, event.when + tail);
  if (patch.tremolo) addTremolo(target, patch.tremolo, amp, event, tail);
}

function addVibrato(
  target: VoiceTarget,
  spec: NonNullable<InstrumentPatch['vibrato']>,
  oscs: OscillatorNode[],
  when: number,
  stopAt: number
): void {
  const depth = lfoPair(target, spec.rateHz, when, stopAt).depth;
  if (spec.frequencyHz) {
    depth.gain.setValueAtTime(0, when);
    depth.gain.linearRampToValueAtTime(spec.frequencyHz, when + spec.delaySec);
    for (const osc of oscs) depth.connect(osc.frequency);
    return;
  }
  depth.gain.setValueAtTime(0, when + spec.delaySec);
  depth.gain.linearRampToValueAtTime(spec.depthCents, when + spec.delaySec + 0.05);
  for (const osc of oscs) depth.connect(osc.detune);
}

function addTremolo(
  target: VoiceTarget,
  spec: NonNullable<InstrumentPatch['tremolo']>,
  amp: GainNode,
  event: NoteEvent,
  tail: number
): void {
  const depth = lfoPair(target, spec.rateHz, event.when, event.when + tail).depth;
  depth.gain.setValueAtTime(spec.depth, event.when);
  depth.connect(amp.gain);
}

function lfoPair(target: VoiceTarget, rateHz: number, when: number, stopAt: number): { lfo: OscillatorNode; depth: GainNode } {
  const lfo = target.ctx.createOscillator();
  lfo.frequency.setValueAtTime(rateHz, when);
  const depth = target.ctx.createGain();
  lfo.connect(depth);
  lfo.start(when);
  lfo.stop(stopAt);
  target.watch(lfo);
  return { lfo, depth };
}
