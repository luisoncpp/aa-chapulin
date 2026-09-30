import type { InstrumentPatch, OscLayer } from './InstrumentPatch.js';
import { midiToFreq, releaseOnEnd, soundingNotes, type NoteEvent, type VoiceTarget } from './VoiceTypes.js';
import { scoop } from './Envelopes.js';
import { playNoise } from './NoiseSource.js';
import { periodicWave } from './Waveforms.js';
import { attachMotion } from './Motion.js';
import { ampThrough } from './VoiceOutput.js';

/**
 * A chord shares one filter, amp and hammer: the filter envelope does not follow pitch,
 * so this sounds the same as one chain per note at a fraction of the audio-thread cost.
 */
export function playSubtractive(target: VoiceTarget, patch: InstrumentPatch, event: NoteEvent): void {
  const notes = soundingNotes(event.midi);
  if (notes.length === 0) return;
  const { filter, amp, tail } = ampThrough({ target, patch, event });
  const share = 1 / Math.sqrt(notes.length);
  const first = notes.map((midi, idx) => {
    const note = { ...event, midi };
    const oscs = patch.layers.map((layer) => startLayer({ target, layer, patch, freq: midiToFreq(midi), event: note, filter, tail, share }));
    attachMotion(target, idx === 0 ? patch : { ...patch, tremolo: undefined }, oscs, amp, note, tail);
    return oscs[0];
  })[0];
  releaseOnEnd(first, [filter, amp]);
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
  /** Per-note level inside a chord, 1/sqrt(notes). */
  share: number;
}

function startLayer(spec: LayerStart): OscillatorNode {
  const { target, layer, patch, freq, event, filter, tail } = spec;
  const osc = target.ctx.createOscillator();
  osc.frequency.setValueAtTime(freq * Math.pow(2, layer.octave ?? 0), event.when);
  tune(osc, { layer, patch, event });
  shape(target.ctx, osc, layer.wave);
  const level = target.ctx.createGain();
  level.gain.setValueAtTime(layer.gain * spec.share, event.when);
  osc.connect(level);
  level.connect(filter);
  osc.start(event.when);
  osc.stop(event.when + tail);
  target.watch(osc, event.when + tail);
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
