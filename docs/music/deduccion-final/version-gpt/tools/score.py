"""Original composition: Todo encaja. Event times are sixteenth-note steps."""
import re

BPM = 128
BAR = 16
LOOP_STEPS = 512
VOICES = {
    'piano': {'channel': 0, 'program': 0, 'pan': -0.18, 'gain': 0.22},
    'epiano': {'channel': 1, 'program': 4, 'pan': 0.24, 'gain': 0.14},
    'pulse': {'channel': 2, 'program': 80, 'pan': 0.05, 'gain': 0.095},
    'pad': {'channel': 3, 'program': 89, 'pan': -0.05, 'gain': 0.085},
    'bass': {'channel': 4, 'program': 38, 'pan': 0.0, 'gain': 0.29},
    'drums': {'channel': 9, 'program': None, 'pan': 0.0, 'gain': 0.20},
}
CHORDS = {
    'Em9': ('E2', 'B2', 'G3 B3 D4 F#4'),
    'Cmaj7': ('C2', 'G2', 'G3 B3 C4 E4'),
    'Am9': ('A2', 'E3', 'G3 B3 C4 E4'),
    'B7sus': ('B2', 'F#3', 'A3 B3 E4 F#4'),
    'B7': ('B2', 'F#3', 'A3 B3 D#4 F#4'),
    'Gmaj7': ('G2', 'D3', 'F#3 B3 D4 G4'),
    'Dadd9': ('D2', 'A2', 'F#3 A3 D4 E4'),
    'F#half': ('F#2', 'C3', 'A3 C4 E4 F#4'),
    'Eadd9': ('E2', 'B2', 'G#3 B3 E4 F#4'),
    'Amaj7': ('A2', 'E3', 'G#3 A3 C#4 E4'),
}
HARMONY = (
    'Em9 Em9 Cmaj7 Cmaj7 Am9 Am9 B7sus B7 '
    'Gmaj7 Dadd9 Em9 Em9 Cmaj7 Am9 F#half B7 '
    'Em9 Em9 Cmaj7 Dadd9 Am9 Cmaj7 F#half B7 '
    'Cmaj7 Dadd9 Em9 Em9 Am9 F#half B7sus B7'
).split()
# Four related phrases: motion, reflection, renewed motion, convergence.
MELODY = [
    'E5 B4 D5 F#5 E5 - B4 D5 G5 - F#5 E5 D5 B4 - -',
    'E5 F#5 G5 B5 A5 G5 F#5 E5 D5 - E5 F#5 B4 - D5 -',
    'E5 B4 D5 E5 G5 - E5 D5 B4 D5 E5 G5 F#5 E5 - -',
    'G5 E5 B4 D5 E5 G5 B5 A5 G5 F#5 E5 D5 E5 - - -',
    'E5 C5 D5 E5 A5 - G5 E5 D5 C5 B4 D5 E5 - G5 -',
    'A5 G5 E5 D5 C5 E5 G5 A5 B5 - A5 G5 E5 D5 C5 -',
    'F#5 E5 B4 A4 B4 E5 F#5 A5 G5 F#5 E5 - B4 - A4 -',
    'F#5 D#5 B4 A4 F#4 A4 B4 D#5 F#5 A5 F#5 D#5 B4 - D#5 -',
    'B4:3 - D5:2 F#5:3 - G5:2 - D5:2 -',
    'A4:2 D5:3 - E5:2 F#5:3 - E5:2 D5:2',
    'G5:3 - F#5:2 E5:2 B4:3 - D5:2 - -',
    'E5:2 G5:2 F#5:2 E5:2 D5:3 - B4:2 - -',
    'G5:3 - E5:2 D5:2 B4:3 - E5:2 - -',
    'A5:2 G5:3 - E5:2 C5:3 - B4:2 C5:2',
    'F#5:3 - E5:2 C5:2 A4:3 - C5:2 E5:2',
    'F#5:2 D#5:2 B4:3 - A4:2 B4:2 D#5:2 F#5:2',
    'B5 G5 A5 B5 E6 - D6 B5 A5 G5 F#5 E5 G5 - F#5 -',
    'G5 F#5 E5 B4 D5 E5 F#5 G5 B5 A5 G5 F#5 E5 - D5 -',
    'B5 G5 E5 D5 E5 G5 A5 B5 D6 - B5 A5 G5 E5 - -',
    'A5 F#5 E5 D5 F#5 A5 B5 A5 F#5 E5 D5 E5 F#5 - A5 -',
    'C6 B5 A5 G5 E5 G5 A5 C6 B5 A5 G5 E5 D5 C5 - -',
    'G5 B5 D6 B5 A5 G5 E5 D5 E5 G5 A5 B5 G5 E5 - -',
    'A5 F#5 E5 C5 E5 F#5 A5 C6 B5 A5 F#5 E5 C5 - E5 -',
    'A5 F#5 D#5 B4 D#5 F#5 A5 B5 A5 F#5 D#5 B4 A4 - D#5 -',
    'E5:2 G5:2 B5:3 - G5:2 E5:2 D5:2 E5:2',
    'F#5:2 A5:2 D6:3 - B5:2 A5:2 F#5:2 E5:2',
    'G5:2 B5:2 E6:3 - D6:2 B5:2 G5:2 F#5:2',
    'E5:3 - F#5:2 G5:2 B5:3 - A5:2 G5:2',
    'E5 C5 D5 E5 G5 A5 B5 A5 G5 E5 D5 C5 E5 - G5 -',
    'F#5 A5 C6 A5 G5 F#5 E5 C5 A4 C5 E5 F#5 A5 - F#5 -',
    'B4 E5 F#5 A5 B5 - A5 F#5 E5 B4 A4 B4 E5 - F#5 -',
    'D#5 F#5 A5 B5 A5 F#5 D#5 B4 A4 F#4 A4 B4 D#5 F#5 - -',
]


def midi_note(token):
    match = re.fullmatch(r'([A-G])([#b]?)(\d)', token)
    if not match:
        raise ValueError(token)
    pitch = {'C': 0, 'D': 2, 'E': 4, 'F': 5, 'G': 7, 'A': 9, 'B': 11}[match[1]]
    alter = {'': 0, '#': 1, 'b': -1}[match[2]]
    return (int(match[3]) + 1) * 12 + pitch + alter


def add(events, voice, spec):
    start, pitch, duration, velocity = spec
    note = midi_note(pitch) if isinstance(pitch, str) else pitch
    events.append({'voice': voice, 'step': start, 'note': note,
                   'duration': duration, 'velocity': velocity})


def phrase(events, text, spec):
    voice, offset, velocity = spec
    cursor = 0
    for token in text.split():
        name, _, length = token.partition(':')
        span = int(length or 1)
        if name != '-':
            accent = 5 if cursor % 4 == 0 else -4 if cursor % 2 else 0
            add(events, voice, (offset + cursor, name, span * 0.84, velocity + accent))
        cursor += span
    if cursor != BAR:
        raise ValueError(f'Phrase has {cursor} steps instead of 16: {text}')


def bass_bar(events, bar, chord):
    root, fifth, _ = CHORDS[chord]
    root = midi_note(root)
    fifth = midi_note(fifth)
    pattern = [(0, root), (2, root), (4, root + 12), (6, fifth),
               (8, root), (10, root), (12, fifth), (14, root + 12)]
    for step, pitch in pattern:
        add(events, 'bass', (bar * BAR + step, pitch, 1.42, 88 if step % 4 == 0 else 76))


def support_bar(events, bar, chord):
    _, _, voicing = CHORDS[chord]
    pitches = [midi_note(n) for n in voicing.split()]
    section = bar // 8
    for n in pitches:
        add(events, 'pad', (bar * BAR, n, 15.7, 46 if section != 3 else 52))
    if section == 1:
        rhythm = [0, 3, 6, 10, 14]
        for i, step in enumerate(rhythm):
            for n in pitches[:3]:
                add(events, 'epiano', (bar * BAR + step, n + 12, 1.5, 57 + i % 2 * 5))
        return
    rhythm = [2, 6, 10, 14] if section in (0, 2) else [3, 7, 11, 15]
    for i, step in enumerate(rhythm):
        gate = .84 if step == 15 else 1.6
        add(events, 'epiano', (bar * BAR + step, pitches[(i + bar) % 4] + 12, gate, 56))


def pulse_bar(events, bar):
    # The answering voice enters in gaps; its hook returns with wider intervals.
    hooks = {
        3: [(8, 'G5', 3), (12, 'E5', 3)],
        7: [(8, 'F#5', 2), (11, 'D#5', 2), (14, 'B4', 1)],
        9: [(0, 'F#5', 5), (8, 'E5', 5)],
        11: [(0, 'B5', 5), (8, 'G5', 5)],
        13: [(0, 'E5', 5), (8, 'G5', 5)],
        15: [(0, 'A5', 3), (6, 'F#5', 3), (12, 'D#5', 3)],
        19: [(8, 'A5', 3), (12, 'F#5', 3)],
        23: [(8, 'F#5', 3), (12, 'D#5', 3)],
        24: [(0, 'B5', 6), (8, 'G5', 6)],
        25: [(0, 'A5', 6), (8, 'F#5', 6)],
        26: [(0, 'B5', 6), (8, 'G5', 6)],
        27: [(0, 'F#5', 4), (6, 'E5', 3), (12, 'B4', 3)],
    }
    for step, note, length in hooks.get(bar, []):
        add(events, 'pulse', (bar * BAR + step, note, length, 68))


def drums_bar(events, bar):
    section = bar // 8
    for step in range(0, BAR, 2):
        add(events, 'drums', (bar * BAR + step, 42, 0.3, 38 if step % 4 else 51))
    kicks = [0, 8, 11] if section != 1 else [0, 7, 10]
    for step in kicks:
        add(events, 'drums', (bar * BAR + step, 36, 0.7, 91 if step == 0 else 75))
    for step in (4, 12):
        add(events, 'drums', (bar * BAR + step, 38, 0.55, 69))
    if bar in (7, 15, 23, 31):
        for step in (13, 15):
            add(events, 'drums', (bar * BAR + step, 38, 0.4, 39 if step == 13 else 54))
    if bar in (0, 16, 24):
        add(events, 'drums', (bar * BAR, 49, 3.2, 42))


def build_loop():
    events = []
    for bar, chord in enumerate(HARMONY):
        phrase(events, MELODY[bar], ('piano', bar * BAR, 87 if bar // 8 != 1 else 78))
        bass_bar(events, bar, chord)
        support_bar(events, bar, chord)
        pulse_bar(events, bar)
        drums_bar(events, bar)
    return sorted(events, key=lambda e: e['step'])


def build_arrival():
    events = []
    lines = ['B5 A5 F#5 D#5 B4 D#5 F#5 A5 B5:2 D#6:2 F#6:2 - -',
             'E6:4 B5:2 G#5:2 F#5:2 E5:4 - -',
             'C#5:2 E5:2 G#5:2 B5:2 A5:4 G#5:2 - -',
             'G#5:4 F#5:2 E5:8 - -']
    for bar, chord in enumerate(['B7', 'Eadd9', 'Amaj7', 'Eadd9']):
        phrase(events, lines[bar], ('piano', bar * BAR, 91))
        root, _, voicing = CHORDS[chord]
        add(events, 'bass', (bar * BAR, root, 10, 85))
        for note in voicing.split():
            add(events, 'pad', (bar * BAR, note, 15.4, 65))
            add(events, 'epiano', (bar * BAR, note, 10, 76))
        if bar < 2:
            add(events, 'drums', (bar * BAR, 36, 1, 88))
    add(events, 'drums', (16, 49, 5, 65))
    add(events, 'pulse', (16, 'E5', 10, 75))
    return events
