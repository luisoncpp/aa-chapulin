import type { InstrumentPatch } from './InstrumentPatch.js';
import { midiToFreq, type NoteEvent, type VoiceTarget } from './VoiceTypes.js';

type Vibrato = NonNullable<InstrumentPatch['vibrato']>;

interface VibratoVoice {
  oscs: OscillatorNode[];
  freq: number;
  when: number;
  stopAt: number;
}

export function attachMotion(
  target: VoiceTarget,
  patch: InstrumentPatch,
  oscs: OscillatorNode[],
  amp: GainNode,
  event: NoteEvent & { midi: number },
  tail: number
): void {
  if (patch.vibrato) {
    addVibrato(target, patch.vibrato, { oscs, freq: midiToFreq(event.midi), when: event.when, stopAt: event.when + tail });
  }
  if (patch.tremolo) addTremolo(target, patch.tremolo, amp, event, tail);
}

function addVibrato(target: VoiceTarget, spec: Vibrato, voice: VibratoVoice): void {
  const depth = lfoPair(target, spec.rateHz, voice.when, voice.stopAt).depth;
  if (spec.frequencyHz) {
    depth.gain.setValueAtTime(0, voice.when);
    depth.gain.linearRampToValueAtTime(legacyDepthHz(spec, voice.freq), voice.when + spec.delaySec);
    for (const osc of voice.oscs) depth.connect(osc.frequency);
    return;
  }
  depth.gain.setValueAtTime(0, voice.when + spec.delaySec);
  depth.gain.linearRampToValueAtTime(spec.depthCents, voice.when + spec.delaySec + 0.05);
  for (const osc of voice.oscs) depth.connect(osc.detune);
}

/** A fixed Hz swing widens as the note drops; the cents cap keeps low notes in tune. */
function legacyDepthHz(spec: Vibrato, freq: number): number {
  const capHz = freq * (Math.pow(2, spec.depthCents / 1200) - 1);
  return Math.min(spec.frequencyHz ?? 0, capHz);
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
  target.watch(lfo, stopAt);
  return { lfo, depth };
}
