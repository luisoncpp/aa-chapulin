import type { FmSpec, InstrumentPatch } from './InstrumentPatch.js';
import { attachMotion } from './Motion.js';
import { ampThrough } from './VoiceOutput.js';
import { eachNote, midiToFreq, releaseOnEnd, type NoteEvent, type VoiceTarget } from './VoiceTypes.js';

// fallow-ignore-next-line complexity
export function playFm(target: VoiceTarget, patch: InstrumentPatch, event: NoteEvent): void {
  if (!patch.fm) return;
  const fm = patch.fm;
  eachNote(event, (note) => playCarrier(target, patch, fm, note));
}

// fallow-ignore-next-line complexity
function playCarrier(target: VoiceTarget, patch: InstrumentPatch, fm: FmSpec, event: NoteEvent & { midi: number }): void {
  const freq = midiToFreq(event.midi);
  if (freq <= 0) return;
  const carrier = target.ctx.createOscillator();
  carrier.type = 'sine';
  carrier.frequency.setValueAtTime(freq, event.when);
  modulate({ target, carrier, freq, ratio: fm.ratio, index: fm.index, decaySec: fm.indexDecaySec, event });
  addTine(target, carrier, freq, fm, event);
  const { filter, amp, tail } = ampThrough({ target, patch, event });
  carrier.connect(filter);
  attachMotion(target, patch, [carrier], amp, event, tail);
  carrier.start(event.when);
  carrier.stop(event.when + tail);
  target.watch(carrier, event.when + tail);
  releaseOnEnd(carrier, [filter, amp]);
}

function addTine(target: VoiceTarget, carrier: OscillatorNode, freq: number, fm: FmSpec, event: NoteEvent): void {
  if (!fm.tineRatio || !fm.tineIndex || !fm.tineDecaySec) return;
  modulate({ target, carrier, freq, ratio: fm.tineRatio, index: fm.tineIndex, decaySec: fm.tineDecaySec, event });
}

function modulate(spec: {
  target: VoiceTarget;
  carrier: OscillatorNode;
  freq: number;
  ratio: number;
  index: number;
  decaySec: number;
  event: NoteEvent;
}): void {
  const mod = spec.target.ctx.createOscillator();
  mod.type = 'sine';
  mod.frequency.setValueAtTime(spec.freq * spec.ratio, spec.event.when);
  const amount = spec.target.ctx.createGain();
  amount.gain.setValueAtTime(Math.max(spec.freq * spec.index, 1), spec.event.when);
  amount.gain.exponentialRampToValueAtTime(0.001, spec.event.when + Math.max(spec.decaySec, 0.02));
  mod.connect(amount);
  amount.connect(spec.carrier.frequency);
  mod.start(spec.event.when);
  mod.stop(spec.event.when + spec.event.durationSec + spec.decaySec);
  spec.target.watch(mod, spec.event.when + spec.event.durationSec + spec.decaySec);
}
