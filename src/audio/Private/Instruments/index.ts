import type { ChannelName, InstrumentId, TrackDefinition } from '../../../types/index.js';
import { playFm } from './Private/FmVoice.js';
import { playPlucked } from './Private/PluckedString.js';
import { playSubtractive } from './Private/SubtractiveVoice.js';
import { playStandardDrum } from './Private/DrumKit.js';
import { playLatinDrum } from './Private/LatinPercussion.js';
import { DEFAULT_INSTRUMENTS, PATCHES } from './Private/PatchLibrary.js';
import type { InstrumentPatch } from './Private/InstrumentPatch.js';
import { midiToFreq, type NoteEvent, type VoiceTarget } from './Private/VoiceTypes.js';

export { midiToFreq };
export type { InstrumentPatch, NoteEvent, VoiceTarget };

// fallow-ignore-next-line unused-export
export const DRUM_SYMBOLS = new Set(['K', 'S', 'H', 'O', 'C', 'P', 'X', 'R', 'T', 'M', 'B', 'G', 'Y', '0']);

export function resolvePatch(track: TrackDefinition, channel: ChannelName): InstrumentPatch {
  const id = track.instruments?.[channel] ?? DEFAULT_INSTRUMENTS[channel];
  return PATCHES[id];
}

export function playInstrumentNote(target: VoiceTarget, patch: InstrumentPatch, event: NoteEvent): void {
  if (patch.synthesis === 'fm') {
    playFm(target, patch, event);
    return;
  }
  if (patch.synthesis === 'plucked') {
    playPlucked(target, patch, event);
    return;
  }
  playSubtractive(target, patch, event);
}

// fallow-ignore-next-line complexity
export function playDrumHit(target: VoiceTarget, symbol: string, when: number): void {
  if (!symbol || symbol === '0') return;
  const hit = { ctx: target.ctx, dest: target.dry, when, watch: target.watch };
  for (const char of symbol) {
    if (char === '0') continue;
    if (playStandardDrum(hit, char)) continue;
    playLatinDrum(hit, char);
  }
}

export function patchById(id: InstrumentId): InstrumentPatch {
  return PATCHES[id];
}
