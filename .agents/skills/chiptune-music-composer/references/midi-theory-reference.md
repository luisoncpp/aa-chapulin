# MIDI Theory & Note Reference

Quick reference for MIDI note numbers, scales, polyphonic chord voicings, and drum syntax.

---

## 1. MIDI Note Number Chart (Octaves 1 to 6)

| Note | Oct 1 | Oct 2 (Bass) | Oct 3 (Chords) | Oct 4 (Lead Mid) | Oct 5 (Lead High) | Oct 6 (Top) |
|---|---|---|---|---|---|---|
| **C**  | 24 | 36 | 48 | 60 | 72 | 84 |
| **C# / Db** | 25 | 37 | 49 | 61 | 73 | 85 |
| **D**  | 26 | 38 | 50 | 62 | 74 | 86 |
| **D# / Eb** | 27 | 39 | 51 | 63 | 75 | 87 |
| **E**  | 28 | 40 | 52 | 64 | 76 | 88 |
| **F**  | 29 | 41 | 53 | 65 | 77 | 89 |
| **F# / Gb** | 30 | 42 | 54 | 66 | 78 | 90 |
| **G**  | 31 | 43 | 55 | 67 | 79 | 91 |
| **G# / Ab** | 32 | 44 | 56 | 68 | 80 | 92 |
| **A**  | 33 | 45 | 57 | 69 (A440) | 81 | 93 |
| **A# / Bb** | 34 | 46 | 58 | 70 | 82 | 94 |
| **B**  | 35 | 47 | 59 | 71 | 83 | 95 |

---

## 2. Common Scales for Game Music

### Natural Minor (Aeolian) — Melancholy / Serious Courtroom
*Formula: Root, +2, +3, +5, +7, +8, +10*
- **A Minor**: 57, 59, 60, 62, 64, 65, 67, 69 (A, B, C, D, E, F, G, A)
- **D Minor**: 50, 52, 53, 55, 57, 58, 60, 62 (D, E, F, G, A, Bb, C, D)
- **E Minor**: 52, 54, 55, 57, 59, 60, 62, 64 (E, F#, G, A, B, C, D, E)

### Dorian Mode — Dynamic Mystery / Detective Investigation
*Formula: Root, +2, +3, +5, +7, +9, +10*
- **D Dorian**: 50, 52, 53, 55, 57, 59, 60, 62 (D, E, F, G, A, B, C, D)
- **G Dorian**: 55, 57, 58, 60, 62, 64, 65, 67 (G, A, Bb, C, D, E, F, G)

### Spanish Phrygian (Phrygian Dominant) — Latin Urgency / Chapulín Pursuit
*Formula: Root, +1, +4, +5, +7, +8, +10*
- **E Spanish Phrygian**: 52, 53, 56, 57, 59, 60, 62, 64 (E, F, G#, A, B, C, D, E)
- **A Spanish Phrygian**: 57, 58, 61, 62, 64, 65, 67, 69 (A, Bb, C#, D, E, F, G, A)

### Major / Mixolydian — Heroic Turnaround & Victory
*Formula: Root, +2, +4, +5, +7, +9, +11 (Major) / +10 (Mixolydian)*
- **C Major**: 60, 62, 64, 65, 67, 69, 71, 72 (C, D, E, F, G, A, B, C)
- **F Major**: 53, 55, 57, 58, 60, 62, 64, 65 (F, G, A, Bb, C, D, E, F)

---

## 3. Polyphonic Chord Voicings & Arrays

In the tracker arrays, chords can be written as arrays of numbers `[root, third, fifth]`:

| Chord Type | Semitone Offsets | Array Example (Root = A3 / MIDI 57) |
|---|---|---|
| **Minor Triad** | `[0, 3, 7]` | `[57, 60, 64]` (Am: A-C-E) |
| **Major Triad** | `[0, 4, 7]` | `[57, 61, 64]` (A: A-C#-E) |
| **Minor 7th** | `[0, 3, 7, 10]` | `[57, 60, 64, 67]` (Am7: A-C-E-G) |
| **Dominant 7th** | `[0, 4, 7, 10]` | `[57, 61, 64, 67]` (A7: A-C#-E-G) |
| **Major 7th** | `[0, 4, 7, 11]` | `[57, 61, 64, 68]` (Amaj7: A-C#-E-G#) |
| **Suspended 4th (sus4)** | `[0, 5, 7]` | `[57, 62, 64]` (Asus4: A-D-E) |
| **Diminished** | `[0, 3, 6]` | `[57, 60, 63]` (Adim: A-C-Eb) |
| **Half-Diminished (m7b5)** | `[0, 3, 6, 10]` | `[57, 60, 63, 67]` (Am7b5: A-C-Eb-G) |

---

## 4. Drum Grid & Compound Hit Syntax

In the 16th-note step array:
- `'K'` = **Kick Drum** (low resonant 145 Hz $\to$ 32 Hz thud).
- `'S'` = **Snare Drum** (1.1 kHz filtered noise crack + body tone).
- `'H'` = **Closed Hi-Hat** (6.2 kHz crisp noise tick).
- `'O'` = **Open Hi-Hat** (5.2 kHz sustaining metallic shimmer).
- `'C'` = **Crash Cymbal** (3.8 kHz long decay cymbal splash).
- `'P'` = **Slap / Pop** (punchy pitch drop).
- `'0'` = **Rest** (silence / decay).

### Compound Hits (Combined characters):
- `'KC'` = Kick + Crash Cymbal (bar 1 downbeat impact).
- `'KH'` = Kick + Closed Hi-Hat.
- `'SH'` = Snare + Closed Hi-Hat.
- `'SO'` = Snare + Open Hi-Hat.
