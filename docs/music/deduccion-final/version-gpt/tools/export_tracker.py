"""Arrange Todo encaja for the game's four melodic tracker channels."""
import json
from collections import defaultdict
from pathlib import Path
from score import BPM, LOOP_STEPS, build_loop

ROOT = Path(__file__).resolve().parents[3]
OUT = ROOT / 'src/audio/Private/tracks/DeductionTrack.ts'
CHANNELS = {'bass': 'bass', 'piano': 'lead', 'epiano': 'chords', 'pulse': 'counter'}
LEVELS = {'bass': 0.8, 'lead': 0.8, 'chords': 0.5, 'counter': 0.4}
DRUMS = {36: 'K', 38: 'S', 42: 'H', 49: 'C'}


def build_track():
    track = {'bpm': BPM, 'length': LOOP_STEPS,
             'instruments': {'bass': 'chip_bass', 'lead': 'piano',
                             'chords': 'epiano', 'counter': 'pulse_lead_25'}}
    track.update({channel: [0] * LOOP_STEPS for channel in CHANNELS.values()})
    track['accents'] = {channel: [0] * LOOP_STEPS for channel in CHANNELS.values()}
    track['drums'] = ['0'] * LOOP_STEPS
    grouped = defaultdict(list)
    for event in build_loop():
        voice, step = event['voice'], event['step']
        if voice == 'drums':
            track['drums'][step] = track['drums'][step].replace('0', '') + DRUMS[event['note']]
        elif voice in CHANNELS:
            grouped[(CHANNELS[voice], step)].append(event)
    for (channel, step), events in grouped.items():
        write_note(track, (channel, step), events)
    return track


def write_note(track, position, events):
    channel, step = position
    notes = [event['note'] for event in events]
    assert track[channel][step] == 0, 'Overlapping tracker entries'
    track[channel][step] = notes if len(notes) > 1 else notes[0]
    span = max(1, round(events[0]['duration']))
    # Chip patches otherwise use their longer legacy gates. Explicit two-step
    # bass/pulse gates keep the pulse articulate at the reference's tempo.
    if channel in ('bass', 'counter'):
        span = max(2, span)
    for index in range(step + 1, min(step + span, LOOP_STEPS)):
        assert track[channel][index] == 0, 'Overlapping tracker holds'
        track[channel][index] = -1
    level = max(event['velocity'] for event in events) / 127 * LEVELS[channel]
    track['accents'][channel][step] = round(level, 3)


def rows(values):
    return '\n'.join('    ' + ', '.join(json.dumps(value) for value in values[i:i + 32]) + ','
                     for i in range(0, len(values), 32))


def export(track):
    header = '''// @Architecture(descriptionShort="Thinking sequence theme with piano runs and pulse answers", icon="music")
import type { TrackDefinition } from '../../../types/index.js';

// "Todo encaja": E minor, 32 bars of 4/4 at 128 BPM, a 60-second loop.
// A: connect clues (1-8); B: space to reconsider (9-16);
// A': the motif climbs (17-24); C: convergence and B7 back to Em (25-32).
// Original score: tools/music/deduccion_final/score.py. Export with export_tracker.py.
// Four melodic voices: piano, epiano, triangle bass, pulse answers. The standalone
// pad is omitted to leave room for reading and realization SFX in the game mix.
// HOLD gates keep bass/pulse attacks short; accents keep support below the piano.
export const deductionTrack: TrackDefinition = {
'''
    text = header + f"  bpm: {track['bpm']},\n  length: {track['length']},\n"
    text += '  instruments: ' + json.dumps(track['instruments']) + ',\n'
    for channel in CHANNELS.values():
        text += f'  {channel}: [\n{rows(track[channel])}\n  ],\n'
    text += f"  drums: [\n{rows(track['drums'])}\n  ],\n  accents: {{\n"
    for channel, values in track['accents'].items():
        text += f'    {channel}: [\n{rows(values)}\n    ],\n'
    text += '  },\n};\n'
    # Keep the data file within the repository's 200-line limit by packing
    # two adjacent bars per row. The score remains the readable source.
    OUT.write_text(text, encoding='utf-8')
    validation = {key: value for key, value in track.items() if key != 'accents'}
    for channel in CHANNELS.values():
        validation[channel] = [0 if value == -1 else value for value in track[channel]]
    path = ROOT / 'docs/music/deduccion-final/validacion-tracker.json'
    path.write_text(json.dumps(validation), encoding='utf-8')
    print(f'Exported {OUT.name}: {LOOP_STEPS} steps, {len(text.splitlines())} lines')


if __name__ == '__main__':
    export(build_track())
