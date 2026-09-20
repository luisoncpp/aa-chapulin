// @Architecture(descriptionShort="Final cross-examination confrontation theme in F minor", icon="music")
import type { TrackDefinition } from '../../../types/index.js';

// "Confrontación Final": 24 bars of 4/4 at 158 BPM, about 36 seconds per loop.
// Written for the LAST cross-examination of a case, where the witness is still
// standing but the defense already knows. It must outlast several minutes of
// reading without fatiguing - hence 384 steps and six distinct 4-bar sections.
//
// HARMONIC ARCHITECTURE - do not collapse this back into one repeated 4-bar loop:
//  - F minor throughout, except bars 13-20, which sit a minor third up in Ab minor.
//    The modulation is the point: the ear has settled into F by bar 12, the lift to
//    Ab reads as the accusation escalating, and the descent in bar 20 drops back to
//    F without a cadence, so the loop never feels "finished".
//  - The bass is unbroken 16th notes on the root, the one gesture borrowed from the
//    piano left hand of the Ace Attorney confrontation themes. It stops exactly once,
//    in bar 17, and that silence is the loudest bar in the piece.
//  - Chords are offbeat stabs (8th-note upbeats only). Putting them on the downbeat
//    was tried and it welds them to the kick, which turns the whole track into one
//    thick pulse; off the beat they read as interjections.
//  - The lead breathes: every phrase ends with 3-4 empty steps. Continuous 16ths in
//    the lead compete with the player reading testimony.
//
//   S1 (bars 1-4)    Fm Fm Db C     the accusation stated plainly, mid register.
//   S2 (bars 5-8)    Fm Bbm Eb Ab   cycle of fourths, the lead climbs an octave.
//   S3 (bars 9-12)   Db Eb Fm C7    16ths, highest sustained tension in F minor.
//   S4 (bars 13-16)  Abm Abm Fb Eb7 the modulation - hammered repeated notes, apex.
//   S5 (bars 17-20)  Abm Db Gb Eb7  bar 17 is the hole (bass and drums drop out),
//                                   19 is the apex run, 20 walks the scale back down.
//   S6 (bars 21-24)  Fm Db C7 Fm    recap at the original height, then a chromatic
//                                   turnaround and drum fill into bar 1.
export const crossExamFinalTrack: TrackDefinition = {
  bpm: 158,
  length: 384,
  bass: [
    // S1 - Fm Fm Db C
    41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 53, 48,
    41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 48, 44,
    37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 49, 44,
    36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 48, 43,
    // S2 - Fm Bbm Eb Ab
    41, 41, 53, 41, 41, 41, 53, 41, 41, 41, 53, 41, 41, 41, 48, 46,
    46, 46, 58, 46, 46, 46, 58, 46, 46, 46, 58, 46, 46, 46, 53, 51,
    39, 39, 51, 39, 39, 39, 51, 39, 39, 39, 51, 39, 39, 39, 46, 44,
    44, 44, 56, 44, 44, 44, 56, 44, 44, 44, 56, 44, 44, 44, 51, 49,
    // S3 - Db Eb Fm C7
    37, 37, 37, 49, 37, 37, 37, 49, 37, 37, 37, 49, 37, 37, 44, 41,
    39, 39, 39, 51, 39, 39, 39, 51, 39, 39, 39, 51, 39, 39, 46, 43,
    41, 41, 41, 53, 41, 41, 41, 53, 41, 41, 41, 53, 41, 41, 48, 44,
    36, 36, 36, 48, 36, 36, 36, 48, 36, 36, 36, 48, 36, 36, 43, 39,
    // S4 - Abm Abm Fb(E) Eb7 : minor third up
    44, 44, 56, 44, 44, 56, 44, 44, 44, 44, 56, 44, 44, 56, 51, 47,
    44, 44, 56, 44, 44, 56, 44, 44, 44, 44, 56, 44, 44, 56, 47, 51,
    40, 40, 52, 40, 40, 52, 40, 40, 40, 40, 52, 40, 40, 52, 47, 44,
    39, 39, 51, 39, 39, 51, 39, 39, 39, 39, 51, 39, 39, 51, 46, 42,
    // S5 - Abm (the hole) Db Gb Eb7
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 44,  0, 44,  0,
    37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 44, 49,
    42, 42, 54, 42, 42, 42, 54, 42, 42, 42, 54, 42, 42, 42, 49, 46,
    39, 39, 51, 39, 39, 39, 51, 39, 39, 39, 51, 39, 39, 39, 46, 43,
    // S6 - Fm Db C7 Fm turnaround
    41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 53, 48,
    37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 49, 44,
    36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 48, 43,
    41, 41, 41, 41, 41, 41, 41, 41, 38, 38, 39, 39, 40, 40, 41, 41,
  ],
  lead: [
    // S1 - stated plainly, one breath per bar
    65,  0,  0, 65, 68,  0,  0,  0, 72,  0, 70,  0, 68,  0,  0,  0,
    65,  0,  0, 65, 68,  0,  0,  0, 77,  0, 75,  0, 72,  0,  0,  0,
    73,  0,  0, 73, 77,  0,  0,  0, 80,  0, 77,  0, 73,  0,  0,  0,
    72,  0,  0, 72, 76,  0,  0,  0, 79,  0, 76,  0, 72,  0,  0,  0,
    // S2 - the climb
    77,  0, 75, 73, 72,  0,  0,  0, 68,  0, 70, 72, 73,  0,  0,  0,
    77,  0,  0, 77, 80,  0,  0,  0, 82,  0, 80,  0, 77,  0,  0,  0,
    75,  0,  0, 75, 79,  0,  0,  0, 82,  0, 79,  0, 75,  0,  0,  0,
    80,  0,  0, 80, 84,  0,  0,  0, 87,  0, 84,  0, 80,  0,  0,  0,
    // S3 - 16ths, gapped
    85,  0, 84, 82, 80,  0, 77,  0, 73,  0, 77, 80, 82,  0,  0,  0,
    87,  0, 85, 82, 79,  0, 75,  0, 75,  0, 79, 82, 85,  0,  0,  0,
    89,  0, 87, 84, 80,  0, 77,  0, 77,  0, 80, 84, 87,  0,  0,  0,
    88,  0, 86,  0, 84,  0,  0,  0, 82,  0, 79,  0, 76,  0,  0,  0,
    // S4 - hammered, Ab minor
    80, 80,  0, 83, 87,  0,  0, 87, 92,  0, 90,  0, 87,  0,  0,  0,
    80, 80,  0, 83, 87,  0,  0, 87, 95,  0, 92,  0, 90,  0,  0,  0,
    88,  0,  0, 88, 92,  0,  0,  0, 95,  0, 92,  0, 88,  0,  0,  0,
    87,  0,  0, 87, 91,  0,  0,  0, 94,  0, 91,  0, 87,  0,  0,  0,
    // S5 - the hole, then the apex run and the walk down
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 80,  0, 83,  0,
    85,  0,  0,  0,  0,  0,  0,  0, 80,  0,  0,  0,  0,  0,  0,  0,
    78, 80, 82, 85, 87,  0,  0,  0, 90,  0,  0,  0,  0,  0,  0,  0,
    87, 85, 84, 82, 80, 78, 77, 75, 73,  0,  0,  0,  0,  0,  0,  0,
    // S6 - recap and chromatic turnaround
    65,  0,  0, 65, 68,  0,  0,  0, 72,  0, 70,  0, 68,  0,  0,  0,
    73,  0,  0, 73, 77,  0,  0,  0, 80,  0, 77,  0, 73,  0,  0,  0,
    76,  0,  0, 76, 79,  0,  0,  0, 82,  0, 79,  0, 76,  0,  0,  0,
    77,  0,  0,  0,  0,  0,  0,  0, 72,  0, 73,  0, 75,  0, 76,  0,
  ],
  chords: [
    // S1 - offbeat stabs only
    0, 0, [53, 56, 60], 0, 0, 0, [53, 56, 60], 0, 0, 0, [53, 56, 60], 0, 0, 0, [53, 56, 60], 0,
    0, 0, [53, 56, 60], 0, 0, 0, [53, 56, 60], 0, 0, 0, [53, 56, 60], 0, 0, 0, [53, 56, 60], 0,
    0, 0, [49, 53, 56], 0, 0, 0, [49, 53, 56], 0, 0, 0, [49, 53, 56], 0, 0, 0, [49, 53, 56], 0,
    0, 0, [48, 52, 55, 58], 0, 0, 0, [48, 52, 55, 58], 0, 0, 0, [48, 52, 55, 58], 0, 0, 0, [48, 52, 55, 58], 0,
    // S2
    0, 0, [53, 56, 60], 0, 0, 0, [53, 56, 60], 0, 0, 0, [53, 56, 60], 0, 0, 0, [53, 56, 60], 0,
    0, 0, [46, 49, 53], 0, 0, 0, [46, 49, 53], 0, 0, 0, [46, 49, 53], 0, 0, 0, [46, 49, 53], 0,
    0, 0, [51, 55, 58], 0, 0, 0, [51, 55, 58], 0, 0, 0, [51, 55, 58], 0, 0, 0, [51, 55, 58], 0,
    0, 0, [56, 60, 63], 0, 0, 0, [56, 60, 63], 0, 0, 0, [56, 60, 63], 0, 0, 0, [56, 60, 63], 0,
    // S3 - stabs double up as the tension rises
    0, [49, 53, 56], [49, 53, 56], 0, 0, 0, [49, 53, 56], 0, 0, [49, 53, 56], [49, 53, 56], 0, 0, 0, [49, 53, 56], 0,
    0, [51, 55, 58], [51, 55, 58], 0, 0, 0, [51, 55, 58], 0, 0, [51, 55, 58], [51, 55, 58], 0, 0, 0, [51, 55, 58], 0,
    0, [53, 56, 60], [53, 56, 60], 0, 0, 0, [53, 56, 60], 0, 0, [53, 56, 60], [53, 56, 60], 0, 0, 0, [53, 56, 60], 0,
    0, [48, 52, 55, 58], [48, 52, 55, 58], 0, 0, 0, [48, 52, 55, 58], 0, 0, [48, 52, 55, 58], [48, 52, 55, 58], 0, 0, 0, [48, 52, 55, 58], 0,
    // S4 - Ab minor, syncopated against the octave bass
    0, 0, [56, 59, 63], 0, 0, [56, 59, 63], 0, 0, 0, 0, [56, 59, 63], 0, 0, [56, 59, 63], 0, 0,
    0, 0, [56, 59, 63], 0, 0, [56, 59, 63], 0, 0, 0, 0, [56, 59, 63], 0, 0, [56, 59, 63], 0, 0,
    0, 0, [52, 56, 59], 0, 0, [52, 56, 59], 0, 0, 0, 0, [52, 56, 59], 0, 0, [52, 56, 59], 0, 0,
    0, 0, [51, 55, 58, 61], 0, 0, [51, 55, 58, 61], 0, 0, 0, 0, [51, 55, 58, 61], 0, 0, [51, 55, 58, 61], 0, 0,
    // S5 - the hole holds one chord, then the stabs return
    [56, 59, 63], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, [49, 53, 56], 0, 0, 0, [49, 53, 56], 0, 0, 0, [49, 53, 56], 0, 0, 0, [49, 53, 56], 0,
    0, 0, [54, 58, 61], 0, 0, 0, [54, 58, 61], 0, 0, 0, [54, 58, 61], 0, 0, 0, [54, 58, 61], 0,
    0, 0, [51, 55, 58, 61], 0, 0, 0, [51, 55, 58, 61], 0, 0, 0, [51, 55, 58, 61], 0, 0, 0, [51, 55, 58, 61], 0,
    // S6
    0, 0, [53, 56, 60], 0, 0, 0, [53, 56, 60], 0, 0, 0, [53, 56, 60], 0, 0, 0, [53, 56, 60], 0,
    0, 0, [49, 53, 56], 0, 0, 0, [49, 53, 56], 0, 0, 0, [49, 53, 56], 0, 0, 0, [49, 53, 56], 0,
    0, 0, [48, 52, 55, 58], 0, 0, 0, [48, 52, 55, 58], 0, 0, 0, [48, 52, 55, 58], 0, 0, 0, [48, 52, 55, 58], 0,
    [53, 56, 60], 0, 0, 0, 0, 0, 0, 0, [50, 53, 57], 0, 0, 0, [48, 52, 55, 58], 0, 0, 0,
  ],
  drums: [
    // S1
    'KC', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H',
    'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H',
    'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H',
    'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'H', 'S', 'S', 'K', 'O', '0', '0',
    // S2
    'KC', 'H', 'S', 'H', 'K', 'KH', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'KH', 'S', 'H',
    'K', 'H', 'S', 'H', 'K', 'KH', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'KH', 'S', 'H',
    'K', 'H', 'S', 'H', 'K', 'KH', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'KH', 'S', 'H',
    'K', 'H', 'S', 'H', 'K', 'KH', 'S', 'H', 'K', 'H', 'S', 'S', 'K', 'O', '0', '0',
    // S3
    'KC', 'H', 'S', 'H', 'K', 'KH', 'S', 'KH', 'K', 'H', 'S', 'H', 'K', 'KH', 'S', 'KH',
    'K', 'H', 'S', 'H', 'K', 'KH', 'S', 'KH', 'K', 'H', 'S', 'H', 'K', 'KH', 'S', 'KH',
    'K', 'H', 'S', 'H', 'K', 'KH', 'S', 'KH', 'K', 'H', 'S', 'H', 'K', 'KH', 'S', 'KH',
    'K', 'H', 'S', 'H', 'K', 'KH', 'S', 'H', 'K', 'K', 'S', 'S', 'K', 'K', 'S', 'O',
    // S4 - the modulation lands on a crash and stays loud
    'KC', 'H', 'S', 'H', 'KH', 'H', 'S', 'KH', 'K', 'H', 'S', 'H', 'KH', 'H', 'S', 'KH',
    'K', 'H', 'S', 'H', 'KH', 'H', 'S', 'KH', 'K', 'H', 'S', 'H', 'KH', 'H', 'S', 'KH',
    'KC', 'H', 'S', 'H', 'KH', 'H', 'S', 'KH', 'K', 'H', 'S', 'H', 'KH', 'H', 'S', 'KH',
    'K', 'H', 'S', 'H', 'KH', 'H', 'S', 'KH', 'K', 'K', 'S', 'S', 'K', 'S', 'O', '0',
    // S5 - bar 17 is the hole: one crash and silence
    'C', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'K', '0', 'K', '0',
    'KC', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H',
    'K', 'H', 'S', 'H', 'K', 'KH', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'KH', 'S', 'H',
    'K', 'H', 'S', 'H', 'K', 'KH', 'S', 'H', 'K', 'H', 'S', 'S', 'K', 'O', '0', '0',
    // S6
    'KC', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H',
    'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'H', 'S', 'H',
    'K', 'H', 'S', 'H', 'K', 'KH', 'S', 'H', 'K', 'H', 'S', 'H', 'K', 'KH', 'S', 'H',
    'K', 'K', 'S', 'S', 'K', 'K', 'S', 'S', 'K', 'O', 'S', 'S', 'K', 'K', 'S', 'O',
  ]
};
