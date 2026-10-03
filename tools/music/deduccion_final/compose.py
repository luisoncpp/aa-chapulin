"""Write src/audio/Private/tracks/DeductionTrack.ts ("Todo encaja", second version).

B minor (dorian colour), 32 bars at 128 BPM, one 60-second loop.
  1-8   A   pedal B; a piano cell climbs two octaves and falls back.
  9-16  B   pedal moves G -> E -> G -> F#; the piano leaves gaps for pulse answers.
  17-24 A'  A again with triads, sixteenth hats and a held pulse horizon.
  25-32 Build: chord ladder in 3-3-3-3-4 stabs over the B pedal, F#7 hammered,
        F#7(b9) and one bar-quarter of silence before the loop crashes back on Bm.
Devices taken from the Revisualization reference: tonic pedal, rising sixteenth
arpeggio, dotted chord ladder and a hard stop. Notes and harmony are original.

Run from the repository root: python tools/music/deduccion_final/compose.py
"""
from pathlib import Path

H = -1
OUT = Path('src/audio/Private/tracks/DeductionTrack.ts')
STABS = (0, 3, 6, 9, 12)


def pump(low):
    """Driving octave bass: low, octave, low, octave on eighths."""
    return [low, H, low + 12, H] * 4


def stab_bass(low):
    bar = [0] * 16
    for step in STABS:
        bar[step], bar[step + 1] = low, H
    return bar


def pulse(chord):
    """Short eighth-note saw pulse, the reference's synth role."""
    return [chord, 0] * 8


def stabs(chord, last=False):
    bar = [0] * 16
    for step in STABS:
        bar[step], bar[step + 1] = chord, H
    if last:
        bar[14], bar[15] = chord, 0
    return bar


def rest():
    return [0] * 16


def held(note, steps=16, gap=2):
    return [note] + [H] * (steps - 1 - gap) + [0] * gap


CLIMB = [
    [66, 0, 71, 66, 73, 66, 74, 0, 71, 0, 74, 71, 76, 71, 78, 0],
    [76, 0, 81, 76, 83, 76, 85, 0, 81, 0, 85, 81, 86, 81, 88, 0],
]
FALL = [86, 83, 81, 78, 83, 81, 78, 76, 81, 78, 76, 73, 78, 76, 73, 71]
FALL_2 = [88, 86, 83, 81, 85, 83, 81, 78, 83, 81, 78, 76, 81, 78, 76, 74]
TAIL_A = [73, 0, 73, 76, 0, 73, 69, 0, 71, 0, 0, 66, 69, 0, 71, 0]
TAIL_G = [74, 0, 74, 78, 0, 79, 81, 0, 83, 0, 81, 0, 78, 0, 76, 73]
TAIL_UP = [71, 0, 74, 78, 81, 0, 83, 86, 0, 88, 0, 0, 0, 0, 0, 0]

LEAD_A = CLIMB + [FALL, TAIL_A] + CLIMB + [FALL_2, TAIL_G]
LEAD_B = [
    [67, 0, 71, 67, 74, 67, 78, 0, 74, 0, 78, 74, 79, 74, 83, 0],
    [81, 0, 0, 79, 0, 78, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0],
    [64, 0, 67, 64, 71, 64, 74, 0, 71, 0, 74, 71, 78, 74, 79, 0],
    [78, 0, 0, 76, 0, 74, 0, 0, 71, 0, 0, 0, 0, 0, 0, 0],
    [71, 0, 74, 71, 78, 71, 79, 0, 78, 0, 81, 78, 83, 78, 86, 0],
    [86, 83, 79, 78, 83, 79, 78, 74, 79, 78, 74, 71, 0, 0, 0, 0],
    [66, 0, 70, 66, 73, 66, 76, 0, 70, 0, 73, 70, 78, 73, 82, 0],
    [82, 81, 78, 76, 73, 70, 73, 76, 78, 0, 0, 0, 0, 0, 0, 0],
]
LEAD_A2 = CLIMB + [FALL, TAIL_A] + CLIMB + [FALL_2, TAIL_UP]

LADDER = [[62, 66, 71], [64, 68, 73], [66, 69, 74], [68, 71, 76], [69, 73, 78], [70, 73, 78]]
F7 = [70, 73, 76, 78]
F7B9 = [70, 73, 76, 79]


def build_lead():
    bars = [[0] * 16 for _ in LADDER]
    for bar, chord in zip(bars, LADDER):
        for step in STABS:
            bar[step] = chord[-1] + 12
    hammer = [F7[-1] + 12 if step % 2 == 0 else 0 for step in range(16)]
    final = [90, 0, 90, 0, 90, 0, 90, 0, 91, H, 0, 0, 0, 0, 0, 0]
    return bars + [hammer, final]


def build_chords():
    bars = [stabs(chord, last=index % 2 == 1) for index, chord in enumerate(LADDER)]
    hammer = [F7 if step % 2 == 0 else 0 for step in range(16)]
    final = [F7, 0, F7, 0, F7, 0, F7, 0, F7B9, H, H, 0, 0, 0, 0, 0]
    return bars + [hammer, final]


def flat(bars):
    return [note for bar in bars for note in bar]


def lead():
    return flat(LEAD_A + LEAD_B + LEAD_A2 + build_lead())


def bass():
    a = [pump(35)] * 3 + [pump(33)] + [pump(35)] * 3 + [pump(31)]
    b = [pump(31)] * 2 + [pump(40)] * 2 + [pump(31)] * 2 + [pump(30)] * 2
    climb = [stab_bass(35)] * 6
    end = [pump(30), [30, H, 42, H, 30, H, 42, H, 30, H, 0, 0, 0, 0, 0, 0]]
    return flat(a + b + a + climb + end)


def chords():
    bm, a, g, em, fs = [66, 71], [64, 69], [67, 71], [64, 67], [66, 70]
    sec_a = [pulse(bm)] * 3 + [pulse(a)] + [pulse(bm)] * 3 + [pulse(g)]
    sec_b = [pulse(g)] * 2 + [pulse(em)] * 2 + [pulse(g)] * 2 + [pulse(fs)] * 2
    full = [pulse([66, 71, 78])] * 3 + [pulse([64, 69, 76])] + [pulse([66, 71, 78])] * 3 + [pulse([62, 67, 71])]
    return flat(sec_a + sec_b + full + build_chords())


def counter():
    answers = [rest(), [0] * 8 + [78, H, 76, H, 74, H, 71, 0]] * 2
    answers[3] = [0] * 8 + [76, H, 74, H, 71, H, 67, 0]
    sec_b = answers + [rest(), [0] * 12 + [74, H, 78, 0], rest(), rest()]
    horizon = []
    for note in (78, 76, 78, 81):
        horizon += [held(note, 32)[:16], held(note, 32)[16:]]
    climb = [held(n) for n in (71, 73, 74, 76, 78, 82)] + [held(82, gap=0), held(85, 8, 0) + [0] * 8]
    return flat([rest()] * 8 + sec_b + horizon + climb)


def drum_bar(kind):
    if kind == 'a':
        return ['HK', '0', 'H', '0', 'HS', '0', 'H', 'K', 'H', '0', 'HK', '0', 'HS', '0', 'H', '0']
    if kind == 'b':
        return ['HK', '0', 'H', '0', 'H', '0', 'H', '0', 'HK', '0', 'H', '0', 'H', '0', 'H', 'S']
    if kind == 'a2':
        return ['HK', 'H', 'H', 'H', 'HS', 'H', 'H', 'HK', 'H', 'H', 'HK', 'H', 'HS', 'H', 'H', 'H']
    bar = ['H'] * 16
    for step in STABS:
        bar[step] = 'HK'
    return bar


def with_snares(bar, steps):
    return [hit + 'S' if index in steps and 'S' not in hit else hit for index, hit in enumerate(bar)]


def drums():
    bars = [drum_bar('a')] * 7 + [with_snares(drum_bar('a'), {13, 14, 15})]
    bars += [drum_bar('b')] * 7 + [['HK', '0', 'H', '0', 'HS', '0', 'H', '0', 'HS', 'S', 'HS', 'S', 'K', '0', '0', '0']]
    bars += [drum_bar('a2')] * 7 + [with_snares(drum_bar('a2'), {10, 11, 12, 13, 14, 15})]
    densities = [set(), set(), {4, 12}, {4, 12}, set(range(0, 16, 2)), set(range(0, 16, 2))]
    bars += [with_snares(drum_bar('climb'), d) for d in densities]
    bars += [['HKS', 'S', 'HS', 'S', 'HKS', 'S', 'HS', 'S', 'HKS', 'S', 'HS', 'S', 'HKS', 'S', 'HS', 'S']]
    bars += [['KST', 'S', 'ST', 'S', 'KSM', 'S', 'SM', 'S', 'KC', '0', '0', '0', '0', '0', '0', '0']]
    for index in (0, 8, 16):
        bars[index] = ['HKC'] + bars[index][1:]
    return flat(bars)


def accent_curve(notes, base, rise=0.0, down=0.06):
    """Gain per attack; downbeats a little louder, the build swelling by `rise`."""
    out = []
    for index, note in enumerate(notes):
        if note == 0 or note == H:
            out.append(0)
            continue
        swell = rise * max(0, index - 384) / 128
        out.append(round(base + swell + (down if index % 4 == 0 else 0), 3))
    return out


def rows(values, fmt):
    lines = []
    for start in range(0, len(values), 32):
        lines.append('    ' + ', '.join(fmt(v) for v in values[start:start + 32]) + ',')
    return '\n'.join(lines)


def note_fmt(note):
    if isinstance(note, list):
        return '[' + ', '.join(map(str, note)) + ']'
    return 'H' if note == H else str(note)


HEADER = '''// @Architecture(descriptionShort="Deduction loop: pedal bass, climbing piano and a chord ladder", icon="music")
import type { TrackDefinition } from '../../../types/index.js';
import { HOLD as H } from './Notation.js';

// "Todo encaja" (v2): B minor with dorian G#, 32 bars at 128 BPM, a 60-second loop.
// 1-8 pedal B, piano cell climbs two octaves; 9-16 pedal G-E-G-F#, pulse answers;
// 17-24 A again with triads and a held horizon; 25-32 chord ladder in 3-3-3-3-4
// stabs over the pedal, F#7 hammered, F#7(b9), then a stop before the crash on Bm.
// Generated by tools/music/deduccion_final/compose.py; edit there and re-run.
'''


def main():
    channels = {'bass': bass(), 'lead': lead(), 'chords': chords(), 'counter': counter()}
    beat = drums()
    for name, notes in [*channels.items(), ('drums', beat)]:
        assert len(notes) == 512, (name, len(notes))
    accents = {
        'bass': accent_curve(channels['bass'], 0.5, rise=0.05),
        'lead': accent_curve(channels['lead'], 0.52, rise=0.08),
        'chords': accent_curve(channels['chords'], 0.18, rise=0.12, down=0.03),
        'counter': accent_curve(channels['counter'], 0.2, rise=0.08, down=0),
    }
    parts = [HEADER, 'export const deductionTrack: TrackDefinition = {', '  bpm: 128,', '  length: 512,',
             "  // The whole mix at the reverb's full level, like the other approved wet cues.", '  reverb: 1,',
             "  instruments: { bass: 'chip_bass', lead: 'piano', chords: 'chip_pad', counter: 'pulse_lead_12' },"]
    for name, notes in channels.items():
        parts += [f'  {name}: [', rows(notes, note_fmt), '  ],']
    parts += ['  drums: [', rows(beat, lambda hit: f"'{hit}'"), '  ],', '  accents: {']
    for name, gains in accents.items():
        parts += [f'    {name}: [', rows(gains, lambda g: str(g)), '    ],']
    parts += ['  },', '};', '']
    OUT.write_text('\n'.join(parts), encoding='utf-8')
    print('wrote', OUT, len(parts))


if __name__ == '__main__':
    main()
