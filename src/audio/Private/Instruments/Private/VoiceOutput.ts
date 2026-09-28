import type { InstrumentPatch } from './InstrumentPatch.js';
import { applyAmp, applyFilter } from './Envelopes.js';
import { connectOut, type NoteEvent, type VoiceTarget } from './VoiceTypes.js';

/** Shared filter and amplitude. Callers connect sources into `filter`. */
export function ampThrough(spec: {
  target: VoiceTarget;
  patch: InstrumentPatch;
  event: NoteEvent;
}): { filter: BiquadFilterNode; amp: GainNode; tail: number } {
  const amp = spec.target.ctx.createGain();
  const level = spec.patch.gain * spec.event.gain;
  const tail = applyAmp(amp.gain, spec.event.when, spec.event.durationSec, level, spec.patch.amp);
  const filter = spec.target.ctx.createBiquadFilter();
  if (spec.patch.filter) applyFilter(filter, spec.patch.filter, spec.event.when);
  else filter.frequency.setValueAtTime(8000, spec.event.when);
  filter.connect(amp);
  connectOut(spec.target, amp, spec.patch.reverbSend, spec.event.when);
  return { filter, amp, tail };
}
