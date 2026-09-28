import type { InstrumentPatch, OscLayer } from './InstrumentPatch.js';
import { eachNote, midiToFreq, type NoteEvent, type VoiceTarget } from './VoiceTypes.js';
import { scoop } from './Envelopes.js';
import { playNoise } from './NoiseSource.js';
import { periodicWave } from './Waveforms.js';
import { attachMotion } from './Motion.js';
import { ampThrough } from './VoiceOutput.js';

// fallow-ignore-next-line complexity
export function playSubtractive(target: VoiceTarget, patch: InstrumentPatch, event: NoteEvent): void {
  eachNote(event, (note) => playOne(target, patch, note));
}

function playOne(target: VoiceTarget, patch: InstrumentPatch, event: NoteEvent & { midi: number }): void {
  const freq = midiToFreq(event.midi);
  if (freq <= 0) return;
  const { filter, amp, tail } = ampThrough({ target, patch, event });
  const oscs = patch.layers.map((layer) => startLayer({ target, layer, patch, freq, event, filter, tail }));
  attachMotion(target, patch, oscs, amp, event, tail);
  if (patch.transient) hammer(target, patch, event, filter);
}

interface LayerStart {
  target: VoiceTarget;
  layer: OscLayer;
  patch: InstrumentPatch;
  freq: number;
  event: NoteEvent;
  filter: BiquadFilterNode;
  tail: number;
}

function startLayer(spec: LayerStart): OscillatorNode {
  const { target, layer, patch, freq, event, filter, tail } = spec;
  const osc = target.ctx.createOscillator();
  osc.frequency.setValueAtTime(freq * Math.pow(2, layer.octave ?? 0), event.when);
  tune(osc, { layer, patch, event });
  shape(target.ctx, osc, layer.wave);
  const level = target.ctx.createGain();
  level.gain.setValueAtTime(layer.gain, event.when);
  osc.connect(level);
  level.connect(filter);
  osc.start(event.when);
  osc.stop(event.when + tail);
  target.watch(osc);
  return osc;
}

function tune(osc: OscillatorNode, spec: { layer: OscLayer; patch: InstrumentPatch; event: NoteEvent }): void {
  const rest = spec.layer.detuneCents ?? 0;
  if (!spec.patch.pitch) {
    if (rest !== 0) osc.detune.setValueAtTime(rest, spec.event.when);
    return;
  }
  scoop(osc.detune, spec.event.when, spec.patch.pitch.scoopCents, spec.patch.pitch.scoopSec, rest);
}

function shape(ctx: AudioContext, osc: OscillatorNode, wave: OscLayer['wave']): void {
  if (wave === 'pulse12' || wave === 'pulse25' || wave === 'organ') {
    osc.setPeriodicWave(periodicWave(ctx, wave));
    return;
  }
  osc.type = wave;
}

function hammer(target: VoiceTarget, patch: InstrumentPatch, event: NoteEvent, dest: AudioNode): void {
  const hit = patch.transient!;
  playNoise({
    ctx: target.ctx,
    dest,
    when: event.when,
    sec: hit.sec,
    filterFreq: hit.filterFreq,
    gain: hit.gain * event.gain,
    watch: target.watch
  });
}
