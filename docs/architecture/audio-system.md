# Audio & Music Synthesis Architecture

Technical guide for [[src/audio/index.ts]], configured in [[src/audio/audio.group.md]].

## Overview

The audio system is a **100% procedural, zero-asset sound and music engine** built directly on the Web Audio API. It eliminates all external audio file downloads (`.mp3` or `.wav`) while providing polyphonic 16-bit retro visual novel and courtroom chiptune audio.

```mermaid
flowchart TD
    AC[AudioContext] --> Master[MasterGainNode 0.85]
    Master --> Dest[Destination Output]
    
    BGMGain[BGMGainNode 0.65] --> Master
    SFXGain[SFXGainNode 0.85] --> Master
    
    Composer[MidiMusicComposer] --> VoiceSynth[SynthVoiceSynthesizer]
    VoiceSynth --> BGMGain
    SFX[SoundEngine SFX Methods] --> SFXGain
    
    SFX --> CourtSfx[CourtSfx]
    SFX --> NoveltySfx[NoveltySfx]
    Composer --> TrackCatalog[TrackCatalog]
    TrackCatalog --> CourtroomTracks[CourtroomTracks]
    TrackCatalog --> TurnaroundTracks[TurnaroundTracks]
    TrackCatalog --> TruthTracks[TruthTracks]
    TrackCatalog --> FinalConfrontationTrack[FinalConfrontationTrack]
    TrackCatalog --> AtmosphereTracks[AtmosphereTracks]
    TrackCatalog --> InvestigationTracks[InvestigationTracks]
```

## Subsystems

### 1. Sound Synthesis Engine ([[src/audio/Private/SoundEngine.ts]])

Manages the `AudioContext` lifecycle and procedural SFX generators:

| SFX Method | Sound Description | Waveforms & Filters | Synthesizer Module |
|------------|-------------------|---------------------|--------------------|
| `playTextBlip()` | Typewriter character chirp | Square wave with downward frequency sweep (540Hz -> 360Hz) and random pitch variance. | [[src/audio/Private/NoveltySfx.ts#Typewriter Blip Synthesis]] |
| `playClick()` | Quiet hotspot examination tap | Sine wave with short subtle downward frequency drop (600Hz -> 120Hz, 25ms, gain 0.12). | [[src/audio/Private/NoveltySfx.ts#Subtle Click Synthesis]] |
| `playGavel()` | Heavy wooden judicial strike | Low triangle impact (160Hz -> 30Hz) + wood crack bandpass noise (950Hz, Q=3). | [[src/audio/Private/CourtSfx.ts#Gavel Synthesis]] |
| `playDeskSlam()` | Defense / prosecutor desk punch | Sawtooth oscillator (120Hz -> 25Hz) + 500Hz lowpass filter. | [[src/audio/Private/CourtSfx.ts#Desk Slam Synthesis]] |
| `playObjectionWhoosh()` | Dramatic shout whip whoosh | Swept bandpass white noise (350Hz -> 4500Hz) followed by a 4-note chord hit. | [[src/audio/Private/CourtSfx.ts#Objection Whoosh Synthesis]] |
| `playRealization()` | Lightbulb / contradiction chime | 4-tone sine wave arpeggio (880Hz, 1174.66Hz, 1760Hz, 2349.32Hz). | [[src/audio/Private/NoveltySfx.ts#Realization Chime Synthesis]] |
| `playDamage()` | Courtroom penalty shock | Heavy downward sawtooth slide (300Hz -> 60Hz). | [[src/audio/Private/CourtSfx.ts#Damage Synthesis]] |
| `playChipoteSqueak()` | Comedic squeaky hammer sound | Sine wave frequency modulator (680Hz -> 1550Hz -> 480Hz). | [[src/audio/Private/NoveltySfx.ts#Chipote & Chicharra Synthesis]] |
| `playChicharra()` | Paralyzing bicycle buzzer | Dual-pitch sawtooth buzz (466.16Hz -> 349.23Hz). | [[src/audio/Private/NoveltySfx.ts#Chipote & Chicharra Synthesis]] |

### 2. Procedural Polyphonic MIDI Tracker ([[src/audio/Private/MidiMusicComposer.ts]])

Real-time step sequencer delegating voice rendering to [[src/audio/Private/SynthVoiceSynthesizer.ts]] and playing 16th-note musical patterns defined in [[src/audio/Private/TrackCatalog.ts]]:

- **Channels & Voice Synthesis**:
  - **Bass**: Low triangle wave with punchy lowpass filtering (900 Hz, gain 0.35).
  - **Lead**: Bright square wave melody channel with 5.5 Hz vibrato LFO and breathing rests (3600 Hz lowpass, gain 0.22).
  - **Chords / Harmony**: Polyphonic sawtooth pad supporting 3-note triads and 4-note 7th chords with normalized gain scaling (2200 Hz lowpass, gain 0.16).
  - **Drums**: Dynamic percussion engine supporting Kick (`K`), Snare (`S`), Closed Hat (`H`), Open Hat (`O`), Crash Cymbal (`C`), Slap (`P`), and compound hits (e.g. `'KC'`, `'KH'`).
- **Pitch Math** ([[src/audio/Private/SynthVoiceSynthesizer.ts#Pitch Calculation]]): Standard MIDI note to Hz formula:
  $$f = 440 \times 2^{\frac{m - 69}{12}}$$
- **Anti-Fatigue Multi-Section Loop Design**:
  All soundtrack themes feature 64 to 400 steps (~25–45s loop duration) structured into 4 narrative phrases (Exposition, Tension/Development, Climax, and Cadence Turnaround) with polyphonic harmonic backing and breathing rests to prevent ear fatigue during extended gameplay sessions.
- **Meter is a free parameter**: the sequencer advances one 16th per tick and wraps on `step % track.length`, with no concept of a bar or a time signature. A track is therefore in whatever meter its own note grouping implies — `truth` is in 5/4 as 16 bars of 20 steps (`length: 320`). Only the composition has to agree with itself; nothing in the engine requires a multiple of 16.

### Track Catalog ([[src/audio/Private/TrackCatalog.ts]])

Modularized into private track collections under `src/audio/Private/tracks/`:
1. `trial` (115 BPM, 128 steps) - Stately C Minor courtroom opening with polyphonic chord pads and crash accents ([[src/audio/Private/tracks/CourtroomTracks.ts]])
2. `cross_exam_moderato` (118 BPM, 128 steps) - Analytical E Minor testimony cross-examination with 7th chords and call-and-response lead motifs ([[src/audio/Private/tracks/CourtroomTracks.ts]])
3. `cross_exam_allegro` (142 BPM, 128 steps) - High-tension G Minor cross-examination with fast 16th driving bass and syncopated stabs ([[src/audio/Private/tracks/CourtroomTracks.ts]])
4. `objection` (152 BPM, 128 steps) - Heroic A Minor / C Major turnaround theme ("¡No contaban con mi astucia!") ([[src/audio/Private/tracks/TurnaroundTracks.ts]])
5. `pursuit` (158 BPM, 128 steps) - Cornered culprit pursuit in D Spanish Phrygian ("¡Que no panda el cúnico!") ([[src/audio/Private/tracks/TurnaroundTracks.ts]])
6. `investigation` (112 BPM, 128 steps) - Noir detective swing in E Dorian with walking jazz bass and 7th chords ([[src/audio/Private/tracks/AtmosphereTracks.ts]])
7. `investigation_core` (120 BPM, 128 steps) - Tense D Minor underground vault / crime scene investigation with driving 16th pedal bass and knee-slaps ([[src/audio/Private/tracks/InvestigationTracks.ts]])
8. `restaurante` (116 BPM, 128 steps) - Gentle F Major café bossa/jazz for Doña Florinda's restaurant and Jirafales banter ([[src/audio/Private/tracks/InvestigationTracks.ts]])
9. `callejon_postal` (104 BPM, 128 steps) - Lazy G Major swinging walk for Don Jaimito's Tangamandapio postal cart ([[src/audio/Private/tracks/InvestigationTracks.ts]])
10. `casa_clotilde` (98 BPM, 128 steps) - Eccentric G Minor gothic-romantic theme for Doña Clotilde's Case 2 laboratory and Rufino's Case 4 Suite 204, in both languages ([[src/audio/Private/tracks/InvestigationTracks.ts]])
11. `detention_center` (70 BPM, 128 steps) - Somber Bb Minor jailer's elegy for visitor room interviews ([[src/audio/Private/tracks/AtmosphereTracks.ts]])
12. `suspense` (116 BPM, 128 steps) - D Minor final-showdown habanera for the climax verdict dilemma: staccato tango heartbeat groove, Dm-Bb-A7 harmonic minor pressure, and chromatic turnaround ([[src/audio/Private/tracks/AtmosphereTracks.ts]])
13. `victory` (136 BPM, 128 steps) - Celebratory G Major case resolution march ("¡Síganme los buenos!") ([[src/audio/Private/tracks/AtmosphereTracks.ts]])
14. `truth` (126 BPM, 320 steps, ~38 seconds) - "Cerrando el Cerco", the big-reveal theme. **The only track not in 4/4**: 16 bars of 5/4 written as 20-step bars, since the sequencer has no bar concept (see Invariants). Grouped **3+2** throughout — bass and kick accent beats 1 and 4, snare answers on 3 and 5 — which is what makes the five felt rather than counted. E minor; drive comes from subdivision over a moderate pulse, not from tempo. Three rules carry the tension and should not be "tidied" away:
    - **The bass climbs chromatically for eleven semitones**, E up to D#, so no section plateaus. The dominant is not reached until bar 9 and the climb continues *past* it (C, C#, D), denying the ear its expected landing. An earlier draft used a descending circle of fifths, which resolves into itself at every step and audibly released the tension mid-loop.
    - **Tension comes from hollow fifths with no third** (the mode stays ambiguous) sliding chromatically: each chord is consonant alone, the *motion* unsettles. Stacked dissonance was tried and rejected — minor 9ths against the bass and high minor-2nd tremolos are physically harsh rather than tense.
    - **Every one of the 16 bars is different.** A 20-bar draft sat on a B pedal for its final eight bars with one transposed lead cell, and the ending went dead from repetition.

    Shape: hollow fifths sliding up over a heartbeat kick while a three-note motif is introduced quietly with silence around it (bars 1–4); first full triads and an 8th-note line, G / E/G# / Am / Bb (5–8); 16ths, syncopated and gapped, B7 / C / C#m / D (9–12); then unbroken 16ths as the push, a one-bar **hole** of bass and a bare descending arpeggio, the **apex** — a scalar run to A6, the highest note in the piece, heard once and hammered — and a liquidation sliding the fifths and bass chromatically back down into bar 1 (13–16) ([[src/audio/Private/tracks/TruthTracks.ts]]).

15. `cross_exam_final` (158 BPM, 384 steps, ~36 seconds) - "Confrontación Final", the theme for the **last cross-examination of a case**: the witness is still standing but the defense already knows. F minor, 24 bars of 4/4 in six 4-bar sections. It is deliberately not another variation of the `cross_exam_*` family (those are one 8-bar loop restated) — it is a through-composed arc, because the final testimony is the longest stretch of uninterrupted reading in a case. Rules that carry it and should not be flattened:
    - **The bass is unbroken 16th notes on the root**, the one gesture borrowed from the piano left hand of the Ace Attorney confrontation themes. It stops exactly once, in bar 17, and that silence is the loudest bar in the piece.
    - **Chords are offbeat stabs only** (8th-note upbeats). On the downbeat they weld to the kick and the whole track becomes one thick pulse; off the beat they read as interjections.
    - **Bars 13–20 modulate up a minor third to Ab minor** and come back without a cadence, so the loop never sounds finished. The lift is the accusation escalating; the ear has settled into F by bar 12 and is moved off it.

    Shape: the accusation stated plainly in the mid register, Fm-Fm-Db-C (1–4); a cycle of fourths, Fm-Bbm-Eb-Ab, with the lead climbing an octave (5–8); 16ths at the top of the F minor tension, Db-Eb-Fm-C7 (9–12); the modulation, hammered repeated notes over an octave-jumping bass (13–16); the **hole** — bar 17 drops bass and drums to a single crash — then the **apex** run to B6 and a scalar walk back down (17–20); recap at the original height with a chromatic bass turnaround and drum fill into bar 1 (21–24) ([[src/audio/Private/tracks/FinalConfrontationTrack.ts]]).

### Terraza Bar

`terraza_bar` in [[src/audio/Private/tracks/TerrazaBarTrack.ts]] plays at both Case 4 terrace locations in Spanish and English. Its 256 steps form 16 bars at 108 BPM, about 36 seconds. A minor lounge harmony, syncopated chords, sparse percussion, and four melodic phrases give the bar its own theme. Scene `bgm` selection uses the existing investigation audio flow.

## Invariants & Design Rules

- **Autoplay Handling**: Audio is muted by default until the player interacts with the start splash overlay or document, avoiding browser console autoplay warnings.
- **Node Cleanup**: Oscillators and buffer sources call `.stop()` and are garbage-collected automatically once their envelopes finish.
- **Seamless Switching**: Calling `playTrack()` clears existing playback timers before starting a different composition. Catalog aliases that reference the same `TrackDefinition` keep the current sequencer position, so narrative labels such as `victory` and `epilogue` do not restart the music during a scene transition.
- **Pause / Resume / Seek (jukebox)**: `pause()` clears the interval but keeps `currentTrack` and `step`. `resumePaused()` re-arms the timer without resetting `step`. `seekToStep(n)` clamps to `track.length - 1`. `getPlaybackSnapshot()` exposes `{ track, step % length, length, isPlaying }` for UI. `stop()` remains the gameplay contract (`isPlaying=false`, `currentTrack=null`).
- **Soundtrack playlist**: `listSoundtrack()` in [[src/audio/index.ts]] walks `TRACK_CATALOG` in insertion order, skips duplicate `TrackDefinition` aliases (e.g. `epilogue`), and returns `{ id, bpm, length, durationMs }` entries for the title-screen jukebox.
- **Narrative Cue Switching**: Dialogue cues are chosen by dramatic job: `objection` scores a single successful contradiction (the breakthrough moment); `pursuit` scores the follow-up turnabout that chases a cornered witness. `truth` is different and script-driven only (`bgm: 'truth'` on the dialogue block): it is the **big-reveal** cue, and its dramatic job is *closing in* — the calm before a witness's story collapses, then the accumulating pressure of the defense walking the court through what really happened. Start it on the first line of the reveal, ideally while the argument is still cold and circumstantial: the track opens with no percussion and builds for ~40s on its own, so cueing it early lets that build do the work. It never resolves (it loops back onto its own dominant), so it holds tension indefinitely and cannot supply a payoff — the release belongs to `victory` at the verdict. Switch back to the testimony/cross-exam loop when court business resumes.

`cross_exam_final` is the cross-examination loop reserved for the **last testimony of a case**, cued the same way as the other `cross_exam_*` tracks (`bgm` on the testimony block). Use it when the next contradiction is the one that ends the trial; use `moderato` / `allegro` / `presto` for every earlier testimony, so the change of theme itself tells the player this one is different. It is a cross-examination bed, not a reveal — when the explanation starts, hand over to `truth`, `objection` or `pursuit`.

Distinguishing the reveal cues: `objection` is the single-moment breakthrough (one contradiction lands), `pursuit` chases a witness already cornered and flailing, and `truth` is the longer march where the full explanation is laid out and the witness's account comes apart under it. If the scene is one shout, use `objection`; if it is several dialogue blocks of "and that is why it had to be you", use `truth`. `suspense` is never a reveal: it opens the pre-verdict climax dilemma, and `victory` is the happy release that `truth` deliberately withholds.
