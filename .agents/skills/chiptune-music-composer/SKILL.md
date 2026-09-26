---
name: chiptune-music-composer
description: Compose, arrange, and optimize retro 16-bit procedural chiptune soundtracks, MIDI tracks, and sound effects for visual novel and courtroom games. Prevents player ear fatigue by applying video game audio design principles, multi-phrase loop architecture, and harmonic theory. Use when creating or refining soundtrack themes, cross-examinations, pursuit themes, or ambient game music.
---

# Chiptune Music Composer

This skill enables agents to compose, structure, and refine multi-track procedural MIDI music and 16-bit chiptune soundtracks that remain fresh, engaging, and non-fatiguing during extended gameplay sessions.

---

## 1. Core Principles to Prevent Music Fatigue

Music fatigue happens when short, repetitive loops play incessantly during thinking-intensive gameplay (like cross-examinations or investigations).

### The Golden Rules of Anti-Fatigue Composition:
1. **Never Loop Under 64 Steps**: A 32-step loop at 130 BPM repeats every 3.7 seconds! Target **64 to 256 steps** (8 to 32 bars, ~30–60 seconds).
2. **Multi-Section Narrative Structure**:
   - **Section A (Bars 1–4 / Steps 0–63)**: Establishes main hook and rhythmic groove.
   - **Section B (Bars 5–8 / Steps 64–127)**: Harmonic modulation, contrasting rhythm, or counter-melody.
   - **Section C / Climax (Optional, Steps 128–191)**: Peak energy, arpeggios, syncopation.
   - **Turnaround (Final 4–8 steps)**: Drum fill and cadence that smoothly resolves back into Section A.
3. **Polyphonic Voicings**: Use 3-note triads and 4-note 7th chords (`[52, 55, 59]`, etc.) instead of monophonic single-note chords for lush harmonic backing.
4. **Rhythmic Breathing Room**: Leave 16th-note rests between lead phrases. Continuous 16th-note runs cause cognitive overload.
5. **Frequency De-confliction**:
   - **Bass**: Low octaves (MIDI 36–52 / C2–E3). Triangle wave for roundness.
   - **Chords / Harmony**: Mid octaves (MIDI 48–65 / C3–F4). Sawtooth/pad for rich body with polyphonic arrays.
   - **Lead**: High-mid octaves (MIDI 64–84 / E4–C6). Square wave with vibrato LFO and breathing rests.
   - **Drums**: Dynamic mix of Kick (`K`), Snare (`S`), Hi-Hat (`H`), Open Hat (`O`), Crash Cymbal (`C`), Slap (`P`), or compound hits (`KC`, `KH`, `SH`).

For in-depth theory, see [references/game-audio-principles.md](file:///c:/Proyectos/ace-attorney-gemini/.agents/skills/chiptune-music-composer/references/game-audio-principles.md).

---

## 2. Track Data Format Specification

Tracks are defined as JavaScript/TypeScript objects matching `TrackDefinition`:

```typescript
export type NoteEntry = number | number[]; // Single note or polyphonic chord

export interface TrackDefinition {
  bpm: number;          // Beats per minute (e.g. 115, 118, 142, 152, 158)
  length: number;       // Total 16th-note steps (e.g. 64, 128, 256)
  bass: NoteEntry[];    // MIDI notes (0 for rest)
  lead: NoteEntry[];    // MIDI notes (0 for rest)
  chords: NoteEntry[];  // MIDI notes or polyphonic arrays [48, 51, 55] (0 for rest)
  drums: string[];      // 'K', 'S', 'H', 'O', 'C', 'P', or compound 'KC', 'KH', '0'
}
```

- Each array index represents **one 16th note** ($1/4$ of a beat).
- In $4/4$ time, 1 bar = 4 beats = 16 steps.
- A 4-bar phrase = 64 steps. An 8-bar phrase = 128 steps. A 16-bar track = 256 steps.

---

## 3. Composition Workflow

When tasked with creating or improving a track:

1. **Identify the Dramatic Role**:
   - *Investigation*: 108–116 BPM, minor/blues/dorian, walking bass, swinging hi-hats.
   - *Cross-Examination (Moderato)*: 116–124 BPM, steady driving pulse, analytical tension.
   - *Cross-Examination (Allegro)*: 140–148 BPM, heightened urgency, syncopated lead.
   - *Objection / Turnaround*: 144–154 BPM, triumphant major/minor modal shift, brassy anthemic lead.
   - *Cornered / Pursuit*: 156–168 BPM, rapid 16th-note bassline, relentless energy, Spanish/Latin rhythmic flair.
   - *Suspense / Revelation*: 88–98 BPM, minimalist drone, sparse heartbeat kick.

2. **Select Scale & Root Key**:
   - Consult [references/midi-theory-reference.md](file:///c:/Proyectos/ace-attorney-gemini/.agents/skills/chiptune-music-composer/references/midi-theory-reference.md) for MIDI numbers, polyphonic chord voicings, and Latin/Spanish Phrygian modes.

3. **Pick a Template**:
   - Use or adapt structural blueprints from [references/track-templates.md](file:///c:/Proyectos/ace-attorney-gemini/.agents/skills/chiptune-music-composer/references/track-templates.md).

4. **Compose the 4 Channels**:
   - Construct arrays matching the exact `length`.
   - Ensure all 4 arrays (`bass`, `lead`, `chords`, `drums`) have identical lengths equal to `length`.

5. **Validate with Script**:
   - Run the validation tool:
     ```bash
     python .agents/skills/chiptune-music-composer/scripts/validate_track.py
     ```

---

## 4. Scripts & Utilities

- **Track Validator**: `python .agents/skills/chiptune-music-composer/scripts/validate_track.py`
  - Validates note ranges, polyphonic chord arrays, compound drum symbols, step count consistency, and syntax.
- **MIDI to Tracker Converter**: `python .agents/skills/chiptune-music-composer/scripts/midi_to_tracker.py input.mid output.ts`
  - Extracts polyphonic step tracker arrays from standard `.mid` files into TypeScript format.
