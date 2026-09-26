// @Architecture(descriptionShort="Galloping D minor careo theme for a case's last cross-examination", icon="music")
import type { NoteEntry, TrackDefinition } from '../../../types/index.js';

// "Careo": 32 bars of 4/4 at 164 BPM, about 47 seconds per loop. An alternative bed
// for the LAST cross-examination of a case, modelled on the piano writing of the
// Investigations 2 confrontation presto: a left hand of repeated galloping chords
// under a syncopated right hand, moving between keys a third apart.
//
// Rules that carry it and should not be flattened:
//  - Every 4-bar phrase ends on the dominant or on a leading tone, never on the tonic.
//    That's the "inquisitive" part: each phrase is a question the witness has not
//    answered yet. The only tonic arrival is bar 25, and it goes straight back into the question.
//  - The chords channel is the piano left hand: 8th-note pumps in the exposition, then
//    the gallop (8th + two 16ths) from bar 5. Bass shares the gallop, adding an octave on
//    the last 16th, so chords and bass sound like one instrument.
//  - Keys pivot on one note heard two ways: C#6 (leading tone of D) becomes Db, the
//    sixth of F minor, in bar 9. In bar 15, Db6 turns back into C#, the third of A7,
//    and brings the music back. It is the same fact with a new meaning, which is how
//    a final testimony falls apart.
//  - Bars 13-16 are stop-time (the score's rest before the 32nd-note run): two hits
//    per bar and a ticking hat, then a snare roll into the only major-key section.
//
//   A (1-4)   Dm Dm Bb A       the question, mid register, pumped 8ths.
//   B (5-8)   Dm C Bb A7       lament bass; the lead hammers each note three times, descending.
//   C (9-12)  Fm Fm Db C7      up a minor third, the question restated.
//   D (13-16) Fm Db Bbm A7     stop-time gasp, then the run.
//   E (17-20) D Bm G A         D major: the defense believes it can win.
//   F (21-24) Bb C Dm A7/E     deceptive cadence; the hammer climbs instead of falling.
//   G (25-28) Dm Bb Gm A7      the apex: the bar-1 question an octave up, peak Bb6.
//   H (29-32) Bb Gm Bb A7      the breath: widening low fragments and a chromatic pickup into bar 1.

const Dm = [50, 53, 57];
const D = [50, 54, 57];
const Bm = [50, 54, 59];
const G = [50, 55, 59];
const Gm = [50, 55, 58];
const Bb = [50, 53, 58];
const Bbm = [53, 58, 61];
const C = [48, 52, 55];
const C7 = [52, 55, 58, 60];
const A = [49, 52, 57];
const A7 = [49, 52, 55, 57];
const Fm = [53, 56, 60];
const Db = [53, 56, 61];

const repeatBeat = (beat: NoteEntry[]): NoteEntry[] => [...beat, ...beat, ...beat, ...beat];
const pump = (chord: NoteEntry): NoteEntry[] => repeatBeat([chord, 0, chord, 0]);
const gallop = (chord: NoteEntry): NoteEntry[] => repeatBeat([chord, 0, chord, chord]);
const stopHits = (chord: NoteEntry): NoteEntry[] => [chord, 0, 0, 0, 0, 0, 0, 0, 0, 0, chord, 0, 0, 0, 0, 0];
const pumpBass = (root: number): NoteEntry[] => pump(root);
const gallopBass = (root: number): NoteEntry[] => repeatBeat([root, 0, root, root + 12]);

const GROOVE = ['K', '0', 'H', '0', 'S', '0', 'H', '0', 'K', '0', 'H', '0', 'S', '0', 'H', '0'];
const DRIVE = ['K', '0', 'H', 'K', 'S', '0', 'H', '0', 'K', '0', 'H', 'K', 'S', '0', 'H', 'H'];
const FILL = ['K', '0', 'H', 'K', 'S', '0', 'H', '0', 'K', '0', 'S', 'S', 'K', 'S', 'O', '0'];
const TICK = ['K', '0', '0', '0', 'H', '0', '0', '0', 'H', '0', 'K', '0', 'H', '0', '0', '0'];
const ROLL = ['K', '0', '0', '0', 'H', '0', '0', '0', 'S', '0', 'S', '0', 'S', 'S', 'S', 'S'];
const LAST = ['K', '0', 'S', 'S', 'K', '0', 'S', 'S', 'S', 'S', 'S', 'S', 'K', 'S', 'S', 'O'];
const crashed = (bar: string[]): string[] => [`${bar[0]}C`, ...bar.slice(1)];

export const crossExamCareoTrack: TrackDefinition = {
  bpm: 164,
  length: 512,
  bass: [
    ...pumpBass(38), ...pumpBass(38), ...pumpBass(34), ...pumpBass(33),
    ...gallopBass(38), ...gallopBass(36), ...gallopBass(34), ...gallopBass(33),
    ...gallopBass(41), ...gallopBass(41), ...gallopBass(37), ...gallopBass(36),
    ...stopHits(41), ...stopHits(37), ...stopHits(34),
    33, 0, 0, 0, 0, 0, 0, 0, 33, 0, 33, 45, 33, 0, 33, 45,
    ...gallopBass(38), ...gallopBass(35), ...gallopBass(43), ...gallopBass(33),
    ...gallopBass(34), ...gallopBass(36), ...gallopBass(38), ...gallopBass(40),
    ...gallopBass(38), ...gallopBass(34), ...gallopBass(43), ...gallopBass(33),
    ...pumpBass(34), ...pumpBass(43), ...pumpBass(34),
    33, 0, 33, 45, 33, 0, 33, 45, 34, 0, 34, 0, 35, 0, 37, 0,
  ],
  lead: [
    // A - the question
    74,  0,  0, 69, 72,  0, 74,  0, 76,  0, 77,  0, 76,  0, 74,  0,
     0,  0,  0,  0,  0,  0, 69,  0, 67,  0,  0, 69, 73,  0,  0,  0,
    74,  0,  0, 70, 74,  0, 77,  0, 82,  0,  0,  0, 79,  0, 77,  0,
    76,  0,  0,  0, 73,  0,  0, 76,  0,  0, 81,  0,  0,  0,  0,  0,
    // B - the hammered answer, sequenced down
    81,  0,  0, 81,  0,  0, 81,  0, 79,  0, 77,  0, 76,  0, 77,  0,
    79,  0,  0, 79,  0,  0, 79,  0, 76,  0, 72,  0, 74,  0, 76,  0,
    77,  0,  0, 77,  0,  0, 77,  0, 76,  0, 74,  0, 72,  0, 74,  0,
    76,  0,  0, 76,  0,  0, 76,  0, 79,  0,  0,  0, 85,  0,  0,  0,
    // C - F minor, the question a minor third higher
    77,  0,  0, 72, 75,  0, 77,  0, 79,  0, 80,  0, 79,  0, 77,  0,
     0,  0,  0,  0,  0,  0, 72,  0, 70,  0,  0, 72, 76,  0,  0,  0,
    77,  0,  0, 73, 77,  0, 80,  0, 85,  0,  0,  0, 82,  0, 80,  0,
    84,  0,  0, 82, 79,  0, 76,  0, 79,  0, 82,  0, 84,  0,  0,  0,
    // D - stop-time gasp, then the run into D major
    77,  0,  0,  0,  0,  0, 76, 77,  0,  0, 72,  0,  0,  0,  0,  0,
    77,  0,  0,  0,  0,  0, 76, 77,  0,  0, 80,  0,  0,  0,  0,  0,
    77,  0,  0,  0,  0,  0, 76, 77,  0,  0, 82,  0,  0,  0, 85,  0,
    85,  0,  0,  0,  0,  0,  0,  0, 69, 71, 73, 74, 76, 78, 79, 81,
    // E - D major, the defense believes
    81,  0,  0,  0, 78,  0, 81,  0, 86,  0,  0,  0, 85,  0, 83,  0,
    81,  0,  0,  0, 78,  0,  0, 74,  0,  0, 78,  0, 83,  0,  0,  0,
    83,  0,  0,  0, 79,  0, 83,  0, 86,  0,  0,  0, 88,  0, 86,  0,
    85,  0,  0,  0,  0,  0, 81,  0, 85,  0,  0,  0, 88,  0,  0,  0,
    // F - deceptive Bb; the hammer climbs
    77,  0,  0, 77,  0,  0, 77,  0, 79,  0, 81,  0, 82,  0,  0,  0,
    79,  0,  0, 79,  0,  0, 79,  0, 81,  0, 82,  0, 84,  0,  0,  0,
    81,  0,  0, 81,  0,  0, 81,  0, 82,  0, 84,  0, 86,  0,  0,  0,
    85,  0,  0, 85,  0,  0, 85,  0, 88,  0,  0,  0, 91,  0,  0,  0,
    // G - apex: bar 1 an octave up
    86,  0,  0, 81, 84,  0, 86,  0, 88,  0, 89,  0, 88,  0, 86,  0,
    86,  0,  0,  0,  0,  0, 82,  0, 86,  0,  0,  0, 89,  0, 91,  0,
    94,  0,  0,  0,  0,  0, 91,  0, 89,  0,  0,  0, 86,  0,  0,  0,
    85,  0,  0,  0, 88,  0, 85,  0, 81,  0, 79,  0, 76,  0, 73,  0,
    // H - the breath, then the chromatic pickup into bar 1
    74,  0,  0, 70,  0,  0, 74,  0, 77,  0,  0,  0,  0,  0,  0,  0,
    74,  0,  0, 70,  0,  0, 74,  0, 79,  0,  0,  0,  0,  0,  0,  0,
    74,  0,  0, 70,  0,  0, 74,  0, 82,  0,  0,  0, 81,  0,  0,  0,
    76,  0,  0,  0, 73,  0,  0,  0, 69,  0, 70,  0, 71,  0, 73,  0,
  ],
  chords: [
    ...pump(Dm), ...pump(Dm), ...pump(Bb), ...gallop(A),
    ...gallop(Dm), ...gallop(C), ...gallop(Bb), ...gallop(A7),
    ...gallop(Fm), ...gallop(Fm), ...gallop(Db), ...gallop(C7),
    ...stopHits(Fm), ...stopHits(Db), ...stopHits(Bbm), A7, 0, 0, 0, 0, 0, 0, 0, ...gallop(A7).slice(8),
    ...gallop(D), ...gallop(Bm), ...gallop(G), ...gallop(A),
    ...gallop(Bb), ...gallop(C), ...gallop(Dm), ...gallop(A7),
    ...gallop(Dm), ...gallop(Bb), ...gallop(Gm), ...gallop(A7),
    ...pump(Bb), ...pump(Gm), ...pump(Bb), ...gallop(A7),
  ],
  drums: [
    ...crashed(GROOVE), ...GROOVE, ...GROOVE, ...FILL,
    ...crashed(DRIVE), ...DRIVE, ...DRIVE, ...FILL,
    ...crashed(DRIVE), ...DRIVE, ...DRIVE, ...FILL,
    ...crashed(TICK), ...TICK, ...TICK, ...ROLL,
    ...crashed(DRIVE), ...DRIVE, ...DRIVE, ...FILL,
    ...crashed(DRIVE), ...DRIVE, ...DRIVE, ...FILL,
    ...crashed(DRIVE), ...DRIVE, ...DRIVE, ...FILL,
    ...GROOVE, ...GROOVE, ...GROOVE, ...LAST,
  ]
};
