import type { InstrumentPatch } from './InstrumentPatch.js';
import { applyAmp } from './Envelopes.js';
import { playNoise } from './NoiseSource.js';
import { connectOut, eachNote, midiToFreq, type NoteEvent, type VoiceTarget } from './VoiceTypes.js';

const cache = new WeakMap<BaseAudioContext, Map<string, AudioBuffer>>();

// fallow-ignore-next-line complexity
export function playPlucked(target: VoiceTarget, patch: InstrumentPatch, event: NoteEvent): void {
  eachNote(event, (note) => playString(target, patch, note));
}

function playString(target: VoiceTarget, patch: InstrumentPatch, event: NoteEvent & { midi: number }): void {
  const freq = midiToFreq(event.midi);
  if (freq <= 0) return;
  const source = target.ctx.createBufferSource();
  source.buffer = pluckedBuffer(target.ctx, event.midi, freq, patch.pluckDecay ?? 0.996);
  const amp = target.ctx.createGain();
  const tail = applyAmp(amp.gain, event.when, event.durationSec, patch.gain * event.gain, patch.amp);
  source.connect(amp);
  connectOut(target, amp, patch.reverbSend, event.when);
  if (patch.transient) {
    playNoise({
      ctx: target.ctx,
      dest: amp,
      when: event.when,
      sec: patch.transient.sec,
      filterFreq: patch.transient.filterFreq,
      gain: patch.transient.gain * event.gain,
      watch: target.watch
    });
  }
  source.start(event.when);
  source.stop(event.when + tail);
  target.watch(source, event.when + tail);
}

function pluckedBuffer(ctx: BaseAudioContext, midi: number, freq: number, decay: number): AudioBuffer {
  const key = `${midi}:${decay}`;
  const table = bufferTable(ctx);
  const cached = table.get(key);
  if (cached) return cached;
  const buffer = renderString(ctx, freq, decay);
  table.set(key, buffer);
  return buffer;
}

function bufferTable(ctx: BaseAudioContext): Map<string, AudioBuffer> {
  const existing = cache.get(ctx);
  if (existing) return existing;
  const created = new Map<string, AudioBuffer>();
  cache.set(ctx, created);
  return created;
}

function renderString(ctx: BaseAudioContext, freq: number, decay: number): AudioBuffer {
  const length = Math.floor(ctx.sampleRate * 1.2);
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  const period = Math.max(2, Math.round(ctx.sampleRate / freq));
  for (let i = 0; i < period; i++) data[i] = Math.random() * 2 - 1;
  for (let i = period; i < length; i++) {
    const older = i - period - 1 >= 0 ? data[i - period - 1] : data[i - period];
    data[i] = decay * 0.5 * (data[i - period] + older);
  }
  return buffer;
}
