import type { ChannelName, NoteEntry, TrackDefinition } from '../../types/index.js';
import { playDrumHit, playInstrumentNote, resolvePatch } from './Instruments/index.js';
import type { InstrumentPatch, VoiceTarget } from './Instruments/index.js';
import type { MusicBus, StripName } from './Mixer/index.js';
import { HOLD } from './tracks/Notation.js';

const CHANNELS: ChannelName[] = ['bass', 'lead', 'chords', 'counter'];

export interface RenderStep {
  track: TrackDefinition;
  idx: number;
  when: number;
  ctx: AudioContext;
  bus: MusicBus;
}

export function renderStep(step: RenderStep): void {
  for (const channel of CHANNELS) playChannel(step, channel);
  const drums = step.track.drums?.[step.idx];
  if (drums) playDrumHit(voiceTarget(step, 'drums'), drums, step.when);
}

// fallow-ignore-next-line complexity
function playChannel(step: RenderStep, channel: ChannelName): void {
  const entry = step.track[channel]?.[step.idx];
  if (!isSounding(entry) || !step.bus.admits(channel, step.when)) return;
  const patch = resolvePatch(step.track, channel);
  step.bus.setPan(channel, patch.pan);
  playInstrumentNote(voiceTarget(step, channel), patch, {
    midi: entry,
    when: step.when,
    durationSec: noteLength({ track: step.track, channel, idx: step.idx, patch }),
    gain: step.track.accents?.[channel]?.[step.idx] ?? 1
  });
}

function isSounding(entry: NoteEntry | undefined): entry is NoteEntry {
  if (entry === undefined || entry === 0 || entry === HOLD) return false;
  return true;
}

function noteLength(spec: { track: TrackDefinition; channel: ChannelName; idx: number; patch: InstrumentPatch }): number {
  const notes = spec.track[spec.channel] ?? [];
  const stepSec = 60 / Math.max(spec.track.bpm, 1) / 4;
  const holds = stepsUntil(notes, spec.idx, (entry) => entry !== HOLD) - 1;
  if (holds > 0) return (holds + 1) * stepSec * (spec.patch.legato ? 1 : 0.9);
  return unheldLength(spec.patch, { stepSec, stepsToNextNote: stepsUntil(notes, spec.idx, isSounding) });
}

function unheldLength(patch: InstrumentPatch, spacing: { stepSec: number; stepsToNextNote: number }): number {
  if (patch.legacyLengthBeats) return patch.legacyLengthBeats * 4 * spacing.stepSec;
  if (patch.ringSec) return Math.min(spacing.stepsToNextNote * spacing.stepSec, patch.ringSec);
  return spacing.stepSec;
}

/** Steps from `idx` to the first later entry that matches, wrapping; `notes.length` if none does. */
function stepsUntil(notes: NoteEntry[], idx: number, found: (entry: NoteEntry) => boolean): number {
  for (let step = 1; step < notes.length; step++) {
    if (found(notes[(idx + step) % notes.length])) return step;
  }
  return Math.max(notes.length, 1);
}

function voiceTarget(step: RenderStep, strip: StripName): VoiceTarget {
  return {
    ctx: step.ctx,
    dry: step.bus.strip(strip),
    reverb: step.bus.reverbInput(),
    watch: (node, endAt) => step.bus.watch(node, endAt)
  };
}
